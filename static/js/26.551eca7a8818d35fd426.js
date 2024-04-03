webpackJsonp([26],{

/***/ 1361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data() {
    return {
      g: $,
      u: $.data.user,
      userId: $.data.user.uid,
      userSex: $.data.user.sex,
      deviceId: null,
      title: null,
      type: null, // open, bind
      status: null,
      msg: null,
      authcode: null,
      nowTime: null,
      roomList: null,
      qrcodeEndTime: null,
      selectAmbId: null,
      canChooseRoom: null,
      bathroomLogList: null,
      hasUncheckoutRoom: null,
      aiMach: null,
      isOpen: false
    };
  },

  created() {
    if (this.$route.query && this.$route.query.deviceId) {
      this.deviceId = this.$route.query.deviceId;
    }
    this.qrcodeEndTime = this.$route.query.endTime;
    if (!this.deviceId || !this.qrcodeEndTime) {
      this.status = -1;
      this.msg = '请求参数错误！';
      return;
    }

    this.queryAiMach();
  },

  methods: {
    queryAiMach() {
      let args = { machNo: this.deviceId };
      $.Req.service($.SvName.AI_MACH_QUERY, args, ret => {
        this.aiMach = ret.aiMach;
        if (this.aiMach.machType === 11) {
          if (this.aiMach.bathroomType === 0) {
            this.queryBathrooms();
          } else {
            this.status = 1;
            if (this.aiMach.bathroomType === 1) {
              if ($.data.user.sex === false) {
                this.openDoor();
              }
            } else if (this.aiMach.bathroomType === 2) {
              if ($.data.user.sex === true) {
                this.openDoor();
              }
            }
          }
        }
      });
    },

    queryBathrooms(nowtime = null) {
      let args = {
        machNo: this.deviceId,
        uid: this.userId
      };
      $.Req.service($.SvName.AI_MACH_BATHROOM_QUERY, args, (ret, systime) => {
        if (!nowtime) {
          this.nowTime = Date.new(systime).getTime();
        }
        if (this.nowTime <= parseInt(this.qrcodeEndTime)) {
          this.roomList = ret.bathroomList;
          this.bathroomLogList = ret.bathroomLogList;
          this.status = 1;
          this.canChooseRoom = true;
          let hasIdleRoom = false;
          for (let r of ret.bathroomList) {
            if (r.status === 0) {
              hasIdleRoom = true;
            } else if (r.status === 1) {
              // 男士占用
              if (this.userSex === false) {
                this.canChooseRoom = false;
                break;
              }
            } else if (r.status === 2) {
              // 女士占用
              if (this.userSex === true) {
                this.canChooseRoom = false;
                break;
              }
            }
          }
          if (this.canChooseRoom && hasIdleRoom) {
            this.canChooseRoom = true;
          }
          this.hasUncheckoutRoom = false;
          for (let l of ret.bathroomLogList) {
            if (!l.checkoutTime) {
              this.hasUncheckoutRoom = true;
              break;
            }
          }
        } else {
          this.status = -1;
          this.msg = '二维码已过期，请扫最新二维码';
        }
      }, true);
    },

    chooseRoom(room) {
      if (!this.canChooseRoom) {
        if (room.status === 0) {
          $.Msg.warning('该淋浴室有异性使用，您不能进入');
        }
        return;
      }
      if (room.status === 0 && this.hasUncheckoutRoom) {
        $.Dlg.warning('您有淋浴间未签出，不能选择其他淋浴间');
        return;
      }
      if (room.status === 3) {
        $.Msg.warning('该淋浴间已暂停使用');
        return;
      }
      if (room.status !== 0) {
        return;
      }

      this.selectAmbId = room.ambId;
    },

    openRoom() {
      let args = {
        machNo: this.deviceId,
        ambId: this.selectAmbId
      };
      $.Req.service($.SvName.AI_MACH_BATHROOM_OPEN, args, ret => {
        this.selectAmbId = null;
        $.Dlg.success('操作开门成功！');
        this.queryBathrooms(this.nowTime);
      });
    },

    checkoutRoom(log) {
      if (!confirm('您确定离开此淋浴室吗？')) {
        return;
      }

      let args = {
        ambId: log.ambId,
        logId: log.logId
      };
      $.Req.service($.SvName.AI_MACH_BATHROOM_CHECKOUT, args, ret => {
        $.Msg.success('签出成功！感谢您的配合。');
        this.queryBathrooms(this.nowTime);
      });
    },

    openDoor() {
      $.Msg.success('正在开门...');
      let args = {
        deviceId: this.deviceId,
        type: 'open',
        isStaff: $.data.user.staffId > 0
      };
      $.Req.service($.SvName.LOGIN_CALL_FOR_IMSTLIFE, args, ret => {
        if (ret.status !== 0) {
          this.isOpen = false;
          alert(ret.msg);
        } else {
          this.isOpen = true;
        }
      }, true);
    }
  }
});

/***/ }),

/***/ 1750:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".shop-info[data-v-755a9671]{text-align:center}.shop-info .logo-img img[data-v-755a9671]{margin:20px auto;height:150px;width:150px;line-height:150px;display:block;border:3px solid #ddd;border-radius:50%}.shop-info .shop-tit[data-v-755a9671]{font-size:18px}.user-info[data-v-755a9671]{padding:10px;text-align:center;font-size:13px}.user-info img[data-v-755a9671]{display:block;height:90px;width:90px;border-radius:50%;margin:0 auto}.user-info .memb-name[data-v-755a9671]{font-size:16px;font-weight:700}.rooms[data-v-755a9671]{margin-top:15px}.rooms ul[data-v-755a9671]{padding:10px;background:#f3f3f3;margin:12px 0}.rooms li[data-v-755a9671]{display:inline-block;width:100px;border:1px solid #ddd;background:#dfdfdf;margin:5px;padding:20px 0;text-align:center}.rooms li.on[data-v-755a9671]{border:1px solid #4da9eb;background:#fff}.rooms .status[data-v-755a9671]{margin:10px 10px 0;padding-top:10px;border-top:1px solid #ccc}.rooms .status-0[data-v-755a9671]{background:#fff;border:1px solid #ccc}.submit[data-v-755a9671]{margin:15px 0}.submit a[data-v-755a9671]{display:block;width:100%;background:#2e90f7;color:#fff;line-height:38px;text-align:center;border-radius:2px}.msg[data-v-755a9671]{margin:10px 20px 0;border:1px solid #53b011;padding:15px 10px;font-size:13px;line-height:1;color:#53b011;text-align:center;background:#fff}.msg i[data-v-755a9671]{font-size:16px;padding-right:3px;font-weight:700}.authcode[data-v-755a9671]{border-top:1px dotted #ddd;padding-top:15px;margin-top:15px}.err[data-v-755a9671]{border:1px solid #ff4500;margin:20px 10px 10px;padding:15px 10px;line-height:1.5;color:#ff4500;text-align:center;background:#fff}.simple-ctrl[data-v-755a9671]{padding:20px}", ""]);

// exports


/***/ }),

/***/ 2017:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1750);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("357c9bf4", content, true, {});

/***/ }),

/***/ 2411:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-head', {
    attrs: {
      "title": _vm.g.data.shop.shopName,
      "show-back": false
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "user-info"
  }, [_c('div', [_c('img', {
    attrs: {
      "src": _vm.g.Util.getImgUrl(_vm.g.data.user.avatarPathname, 400, 400, 'DDDDDD')
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "p10"
  }, [_vm._v("\n\t\t\t欢迎您，\n\t\t\t"), _c('b', [_vm._v(_vm._s(_vm.g.data.user.uname))]), _vm._v("\n\t\t\t（" + _vm._s(_vm.g.Dict.SexDescNormal[_vm.g.data.user.sex]) + "）\n\t\t")])]), _vm._v(" "), (_vm.deviceId) ? [(_vm.status) ? [(_vm.status < 1) ? _c('div', {
    staticClass: "err"
  }, [_vm._v(_vm._s(_vm.msg))]) : [(_vm.isOpen) ? _c('div', {
    staticClass: "msg"
  }, [_c('i', {
    staticClass: "iconfont icon-check0"
  }), _vm._v(" 扫码开门成功\n\t\t\t\t")]) : _vm._e(), _vm._v(" "), (_vm.aiMach && _vm.aiMach.machType === 11 && _vm.aiMach.bathroomType > 0) ? _c('div', {
    staticClass: "simple-ctrl"
  }, [(_vm.aiMach.bathroomType === 1) ? [(_vm.g.data.user.sex === false) ? _c('div', {
    staticClass: "submit"
  }, [_c('a', {
    on: {
      "click": _vm.openDoor
    }
  }, [_vm._v("开门")])]) : _c('div', {
    staticClass: "err"
  }, [_vm._v("此门只允许女性进入")])] : (_vm.aiMach.bathroomType === 2) ? [(_vm.g.data.user.sex === true) ? _c('div', {
    staticClass: "submit"
  }, [_c('a', {
    on: {
      "click": _vm.openDoor
    }
  }, [_vm._v("开门")])]) : _c('div', {
    staticClass: "err"
  }, [_vm._v("此门只允许男性进入")])] : (_vm.aiMach.bathroomType === 3) ? [_c('div', {
    staticClass: "submit"
  }, [_c('a', {
    on: {
      "click": _vm.openDoor
    }
  }, [_vm._v("开门")])])] : _vm._e()], 2) : _vm._e(), _vm._v(" "), (_vm.bathroomLogList && _vm.bathroomLogList.length) ? _c('section', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_vm._m(1), _vm._v(" "), _vm._l((_vm.bathroomLogList), function(r) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(r.roomNo))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.createTime))]), _vm._v(" "), _c('td', [(r.checkoutTime) ? [_vm._v(_vm._s(r.checkoutTime))] : _c('a', {
      staticClass: "bold",
      on: {
        "click": function($event) {
          return _vm.checkoutRoom(r)
        }
      }
    }, [_vm._v("点击签出")])], 2)])
  })], 2)])]) : _vm._e(), _vm._v(" "), (_vm.roomList && _vm.roomList.length) ? _c('section', {
    staticClass: "rooms"
  }, [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("淋浴室")]), _vm._v(" "), (_vm.userId && _vm.hasUncheckoutRoom === false) ? _c('div', {
    staticClass: "r orangered"
  }, [(_vm.canChooseRoom === true) ? [_vm._v("请选择『空闲』淋浴间后再开门")] : (_vm.canChooseRoom === false) ? [_vm._v("没有适合您的淋浴间选择")] : _vm._e()], 2) : _vm._e()]), _vm._v(" "), _c('ul', _vm._l((_vm.roomList), function(r) {
    return _c('li', {
      class: {
        'on': r.ambId === _vm.selectAmbId,
        'status-0': r.status === 0,
        'status-1': r.status === 1
      },
      on: {
        "click": function($event) {
          return _vm.chooseRoom(r)
        }
      }
    }, [_c('b', [_vm._v(_vm._s(r.roomNo))]), _vm._v(" "), _c('div', {
      staticClass: "status"
    }, [(r.status === 0) ? [_vm._v("空闲")] : (r.status === 1) ? [_vm._v("男士占用")] : (r.status === 2) ? [_vm._v("女士占用")] : [_vm._v("停用")]], 2)])
  }), 0), _vm._v(" "), (_vm.selectAmbId) ? _c('div', {
    staticClass: "submit"
  }, [_c('a', {
    on: {
      "click": _vm.openRoom
    }
  }, [_vm._v("开门")])]) : _vm._e()]) : _vm._e()]] : _vm._e()] : _c('div', {
    staticClass: "err"
  }, [_vm._v("缺少设备编号")]), _vm._v(" "), _vm._m(2)], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("我的当日使用记录")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("淋浴间")]), _vm._v(" "), _c('th', [_vm._v("开门时间")]), _vm._v(" "), _c('th', [_vm._v("签出/操作")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "center allpadding",
    staticStyle: {
      "margin-top": "30px"
    }
  }, [_c('a', {
    attrs: {
      "href": "/"
    }
  }, [_vm._v("进入健总管手机版 "), _c('i', {
    staticClass: "iconfont iconarrow-r small"
  })])])
}]}

/***/ }),

/***/ 811:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2017)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1361),
  /* template */
  __webpack_require__(2411),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-755a9671",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});