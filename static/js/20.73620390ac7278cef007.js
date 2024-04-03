webpackJsonp([20],{

/***/ 1559:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			g: window.$,
			csStaff: null
		};
	},

	created() {
		this.queryTenantCsStaff();
	},

	methods: {
		queryTenantCsStaff() {
			$.Req.service($.SvName.TENANT_CS_STAFF_QUERY, {}, ret => {
				this.csStaff = {
					name: ret.name,
					phoneNo: ret.phoneNo
				};
			});
		}
	}

});

/***/ }),

/***/ 1561:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      g: $,
      menuList: [{ title: "1", type: 1, val: 101, name: "", children: [] }, { title: "2", type: 2, val: "", name: "", children: [] }, { title: "3", type: 2, val: "", name: "", children: [] }, { title: "4", type: 2, val: "", name: "", children: [] }, { title: "5", type: 2, val: "", name: "", children: [] }, { title: "6", type: 1, val: 102, name: "", children: [] }],
      staffDefineMenuList: $.Dict.staffDefineMenuList,
      staffMobileMenusArr: [],
      selectSet: new Set(),
      statType: 1,
      openRightMenu: +$.Util.cookie.get("open-right-menu") ? true : false
    };
  },
  watch: {
    menuList: {
      handler(newVal) {
        this.selectSet = new Set();
        newVal.forEach((item, idx) => {
          if (idx === 0 || idx === 5) return;
          if (item.val && +item.val !== -1) {
            return this.selectSet.add(+item.val);
          }
          item.children.forEach(cItem => {
            this.selectSet.add(+cItem.val);
          });
        });
      },
      deep: true
    }
  },
  mounted() {
    this.initOptions();
  },
  methods: {
    updateRightMenu(value) {
      $.Dlg.vue.$emit("updateRightMenu", value ? 1 : 0);
      // $.Req.service(
      //   $.SvName.SHOP_ARG_UPDATE,
      //   { shopId: 2077, value },
      //   (ret) => {
      //     $.Msg.success("修改成功！");
      //     $.Dlg.vue.$emit("updateRightMenu", value);
      //   }
      // );
    },
    filetFun(arr, id) {
      arr.some(item => item.val == id);
    },
    addMenuChildFun(idx) {
      const obj = {
        val: "",
        name: ""
      };
      this.menuList[idx].children.push(obj);
    },
    deleteMenuFun(idx, cIdx) {
      this.menuList[idx].children.splice(cIdx, 1);
    },
    inputSelectMenuFun(e, idx) {
      const name = e.target.value.trim();
      if (+name === -1) {
        this.menuList[idx].children = [{
          val: "",
          name: ""
        }];
      } else {
        this.menuList[idx].children = [];
      }
    },
    inputMenuNameFun(e, idx, cIdx = null) {
      //cIdx 存在表示有子级菜单编辑
      let name = e.target.value.trim();
      // 中文和字母
      const pattern = /^[\u4e00-\u9fa5A-Za-z]+$/;
      let value = name;
      if (!pattern.test(name)) {
        // value = name.slice(pattern, name.length - 1);
        for (let i = name.length - 1; i >= 0; i--) {
          if (!pattern.test(name[i])) {
            name = name.replace(name[i], "");
          }
        }
        value = name;
        $.Msg.info("输入不合法，请输入汉字或字母");
      }
      const obj = this.countLetters(name);
      if (!obj.flag) {
        value = name.slice(0, obj.len);
        $.Msg.info("输入超出最大限制，五个汉字或10个字母");
      }
      if ($.Util.isNotEmpty(cIdx)) {
        this.menuList[idx].children[cIdx].name = value;
      } else {
        this.menuList[idx].name = value;
      }
    },
    countLetters(str) {
      let letterCount = 0;
      const obj = {
        flag: true,
        len: 0
      };
      for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        obj.len = i;
        if (this.isChineseChar(char)) {
          // 对于中文字符，算两个字母
          letterCount += 2;
        } else if (this.isAlphabeticChar(char)) {
          // 对于字母字符，算一个字母
          letterCount += 1;
        }
        // 检查是否超出 10 个字母
        if (letterCount > 10) {
          obj.flag = false;
          return obj; // 超出限制
        }
      }
      return obj; // 在限制范围内
    },
    isChineseChar(char) {
      // 使用正则表达式检查是否为汉字
      return (/[\u4e00-\u9fa5]/.test(char)
      );
    },
    isAlphabeticChar(char) {
      // 使用正则表达式检查是否为字母
      return (/^[a-zA-Z]$/.test(char)
      );
    },

    initOptions() {
      let options = $.data.user.staffMobileMenus || "";
      if (options) {
        let arr = options.split(",");
        // let arr = ['1', '2', '3', '9']
        this.$nextTick(() => {
          this.$refs.bottomnav.resetBottomMenu(arr);
        });
        for (let i = 0; i < arr.length; i++) {
          let arr1 = arr[i].split(":");
          let arr2 = arr[i].split(";");
          let num = i + 1;
          if (arr1[0] == 101) {
            this.menuList[0].name = arr1[1];
            continue;
          }
          if (arr1[0] == 102) {
            this.menuList[5].name = arr1[1];
            continue;
          }
          if (arr[0].split(":")[0] == 101) {
            num = i;
          }
          this.menuList[num].val = +arr1[0];
          this.menuList[num].name = arr1[1];
          if (arr2.length > 1) {
            arr2.forEach((item, idx) => {
              if (idx === 0) {
                this.menuList[num].val = -1;
                this.menuList[num].name = item;
              } else {
                const cVal = item.split(":");
                const obj = {
                  val: cVal[0],
                  name: cVal[1]
                };
                this.menuList[num].children[idx - 1] = obj;
              }
            });
          }
        }
      }
    },

    submitMenu() {
      let msg = "";
      let arr = this.menuList
      // .filter((v) => v.type === 2 && v.val)
      .filter(v => v.val).map((m, idx) => {
        m.val = Number(m.val);
        if (m.val === -1) {
          if (!m.name) {
            msg = `序号为【${idx + 1}】请输入菜单名`;
            return;
          }
          for (let i = 0; i < m.children.length; i++) {
            const item = m.children[i];
            if (!item.val) {
              msg = `序号【${idx + 1}】下的第【${i + 1}】行子菜单不能为空，请选择`;
              break;
            }
          }
          let cArr = m.children.map(item => {
            if (item.name) {
              return `${item.val}:${item.name}`;
            }
            return `${item.val}`;
          });
          return `${m.name};${cArr.join(";")}`;
        }
        if (m.name) {
          return `${m.val}:${m.name}`;
        }
        return m.val;
      });

      if (msg) {
        return $.Dlg.error(msg);
      }
      if (arr.length === 2) {
        alert("您未设置自定义菜单，系统将按照默认菜单显示。");
      }

      const args = { mobileMenuIds: arr.join() };
      $.Req.service($.SvName.STAFF_FAV_MENU_SAVE, args, res => {
        $.Msg.success("保存成功");
        this.refreshData();
      }, true);
    },

    refreshData() {
      if ($.Util.cookie.get($.Conf.Keys.LOGIN_FLAG)) {
        $.Req.service($.SvName.INIT_DATA_LOAD, { clientType: 1 }, ret => {
          if (ret.user.staffId && ret.user.memberId) {
            let loginAs = $.Util.cookie.get($.Conf.CookieKeys.LOGIN_AS);
            if (loginAs === "member") {
              ret.user.staffId = null;
              ret.user.isTenantOwner = false;
              ret.user.isShopOwner = false;
            } else {
              ret.user.memberId = null;
            }
          }
          this.$set($.data.user, "staffMobileMenus", ret.user.staffMobileMenus);
          // $.data.user.staffMobileMenus = ret.user.staffMobileMenus;
          let r = ret.user.staffMobileMenus || "";
          if (r) {
            let arr = r.split(",");
            this.$nextTick(() => {
              this.$refs.bottomnav.resetBottomMenu(arr);
            });
          }
        }, false);
      }
    }
  }
});

/***/ }),

/***/ 1578:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".logo-img[data-v-007aae83]{min-height:180px}.logo-img img[data-v-007aae83]{width:100%;max-height:200px;display:block}section .article[data-v-007aae83]{padding:15px 16px;font-size:14px;margin:0}section .article ul[data-v-007aae83]{padding-left:20px;margin-top:10px}section .article li[data-v-007aae83]{list-style-type:square;padding:3px 0}.footer[data-v-007aae83]{padding-bottom:15px;margin-bottom:0}", ""]);

// exports


/***/ }),

/***/ 1616:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".flex-center[data-v-1d482907]{display:flex;align-items:center}.submit[data-v-1d482907]{margin:10px 0 0;height:44px;line-height:44px;text-align:center;color:#fff;border-radius:3px;font-size:15px}.settings[data-v-1d482907]{padding:0 16px;box-sizing:border-box}.settings .setting-item[data-v-1d482907]{background-color:#fff;padding:0 15px;height:44px;margin-top:10px;border-radius:5px}.settings .setting-item .menu-name[data-v-1d482907]{width:30px;color:#999;font-size:16px;font-style:italic}.settings .setting-item .menu-content[data-v-1d482907]{flex:1}.settings .setting-item .menu-content>span[data-v-1d482907]{color:#333;font-size:14px;padding-left:10px}.settings .setting-item .menu-content .menu-right[data-v-1d482907]{display:flex}.settings .setting-item .menu-content .menu-right .menu-title[data-v-1d482907]{flex:1;margin-left:5px;height:25px;line-height:25px}.settings .setting-item .menu-content .menu-right .menu-title .menu-input[data-v-1d482907]{height:100%;width:100%;border:none;padding:2px 16px}.settings .setting-item .menu-content .menu-right .menu-add[data-v-1d482907]{width:25px;height:25px;line-height:25px;text-align:center;margin-left:5px}.settings .setting-item .menu-content .date-nav[data-v-1d482907]{width:45%;padding-right:5px;background-color:#f6f6f6;position:relative}.settings .setting-item .menu-content .date-nav .menu-center[data-v-1d482907]{position:absolute;top:50%;left:0;transform:translateY(-50%);padding-left:10px}.settings .setting-item .menu-content .date-nav i[data-v-1d482907]{width:30px}.settings .setting-item .menu-content .date-nav select[data-v-1d482907]{text-align:left;flex:1;height:100%;position:relative;z-index:6;padding-left:10px;outline:none}.settings .setting-item .menu-content .date-nav .place[data-v-1d482907]{position:absolute;left:15px;top:50%;transform:translateY(-50%);color:#c5c5c5}.theme-pink .submit[data-v-1d482907]{background-color:#f199bc}.theme-black .settings .setting-item[data-v-1d482907]{background-color:#2c2c2c}.theme-black .settings .setting-item .menu-name[data-v-1d482907]{color:hsla(0,0%,100%,.7)}.theme-black .settings .setting-item .menu-content>span[data-v-1d482907]{color:#fff}.theme-black .settings .setting-item .menu-content .date-nav[data-v-1d482907]{background-color:#111}.theme-black .settings .setting-item .menu-content .date-nav .place[data-v-1d482907]{color:hsla(0,0%,100%,.3)}.menu-color[data-v-1d482907]{background-color:#f6f6f6}.page-sub-menus .row span[data-v-1d482907]{flex:1}.right-menu[data-v-1d482907]{padding:16px}", ""]);

// exports


/***/ }),

/***/ 1845:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1578);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("2a95d7b8", content, true, {});

/***/ }),

/***/ 1883:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1616);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("006adbc0", content, true, {});

/***/ }),

/***/ 2242:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-head', {
    attrs: {
      "title": "欢迎联系我们"
    }
  }), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "article theme-border-bottom"
  }, [_vm._v("\n        如果您有场馆业务问题，请咨询贵馆负责人。如果您有软硬件问题或建议，欢迎随时反馈给我们。\n        "), _c('ul', [(_vm.csStaff && _vm.csStaff.phoneNo) ? _c('li', [_vm._v("专属售后： " + _vm._s(_vm.csStaff.name) + " / "), _c('a', {
    staticClass: "theme-font-color",
    attrs: {
      "href": 'tel:' + _vm.csStaff.phoneNo
    }
  }, [_vm._v(_vm._s(_vm.csStaff.phoneNo))])]) : _vm._e(), _vm._v(" "), _c('li', [_vm._v("咨询时间： 9:00 ~ 21:00")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('li', [_vm._v("公司邮箱： support@jzongguan.com")])])]), _vm._v(" "), _c('div', {
    staticClass: "footer"
  }, [_vm._v("\n        © " + _vm._s(Date.new().getFullYear()) + " 南京强点信息技术有限公司\n      ")])]), _vm._v(" "), _c('bottom-nav')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_vm._v("公司电话： "), _c('a', {
    staticClass: "theme-font-color",
    attrs: {
      "href": "tel:025-66045495"
    }
  }, [_vm._v("025-66045495")])])
}]}

/***/ }),

/***/ 2280:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-head', {
    attrs: {
      "title": "菜单栏设置"
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "page-sub-menus full-sec",
    staticStyle: {
      "margin-top": "0"
    }
  }, [_c('div', {
    staticClass: "theme-border-bottom row"
  }, [_c('span', {
    class: {
      'theme-font-color theme-tab-bor-bottom': _vm.statType === 1
    },
    on: {
      "click": function($event) {
        _vm.statType = 1
      }
    }
  }, [_vm._v("底部菜单")]), _vm._v(" "), _c('span', {
    class: {
      'theme-font-color theme-tab-bor-bottom': _vm.statType === 2
    },
    on: {
      "click": function($event) {
        _vm.statType = 2
      }
    }
  }, [_vm._v("侧边栏菜单")])])]), _vm._v(" "), (_vm.statType == 1) ? _c('div', {
    staticClass: "menu-setting settings"
  }, [_vm._l((_vm.menuList), function(item, idx) {
    return [_c('div', {
      key: idx
    }, [_c('div', {
      staticClass: "setting-item flex-center"
    }, [_c('div', {
      staticClass: "menu-name"
    }, [_vm._v("\n            " + _vm._s(item.title) + ".\n          ")]), _vm._v(" "), _c('div', {
      staticClass: "menu-content"
    }, [_c('div', {
      staticClass: "menu-right"
    }, [_c('div', {
      staticClass: "date-nav"
    }, [(item.type == 1) ? _c('div', {
      staticClass: "menu-center"
    }, [_vm._v(_vm._s(item.val == 101 ? '首页' : '更多'))]) : _c('div', [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model.trim",
        value: (item.val),
        expression: "item.val",
        modifiers: {
          "trim": true
        }
      }],
      staticStyle: {
        "border": "0",
        "width": "85%"
      },
      attrs: {
        "size": "1"
      },
      on: {
        "change": [function($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
            return o.selected
          }).map(function(o) {
            var val = "_value" in o ? o._value : o.value;
            return val
          });
          _vm.$set(item, "val", $event.target.multiple ? $$selectedVal : $$selectedVal[0])
        }, function($event) {
          return _vm.inputSelectMenuFun($event, idx)
        }]
      }
    }, [_vm._l((_vm.staffDefineMenuList), function(c, i) {
      return [(c.id !== 101 && c.id !== 102) ? _c('option', {
        key: i,
        attrs: {
          "disabled": _vm.selectSet.has(+c.id)
        },
        domProps: {
          "value": c.id
        }
      }, [_vm._v(_vm._s(c.name))]) : _vm._e()]
    })], 2), _vm._v(" "), (!item.val && (typeof item.val != 'undefined')) ? _c('span', {
      staticClass: "place"
    }, [_vm._v("请选择菜单栏")]) : _vm._e(), _vm._v(" "), _c('i', {
      staticClass: "iconfont iconarrow-down-1",
      staticStyle: {
        "font-size": "12px",
        "margin-top": "3px"
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "theme-bg menu-title"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.trim",
        value: (item.name),
        expression: "item.name",
        modifiers: {
          "trim": true
        }
      }],
      staticClass: "menu-input",
      attrs: {
        "placeholder": "自定义菜单名",
        "type": "text"
      },
      domProps: {
        "value": (item.name)
      },
      on: {
        "input": [function($event) {
          if ($event.target.composing) { return; }
          _vm.$set(item, "name", $event.target.value.trim())
        }, function($event) {
          return _vm.inputMenuNameFun($event, idx)
        }],
        "blur": function($event) {
          return _vm.$forceUpdate()
        }
      }
    })]), _vm._v(" "), (item.val == -1) ? _c('div', {
      staticClass: "theme-bg menu-add theme-font-color",
      on: {
        "click": function($event) {
          return _vm.addMenuChildFun(idx)
        }
      }
    }, [_vm._v("+")]) : _vm._e()])])]), _vm._v(" "), (item.children && item.children.length) ? _vm._l((item.children), function(cItem, cIdx) {
      return _c('div', {
        key: cIdx,
        staticClass: "setting-item flex-center"
      }, [_c('div', {
        staticClass: "menu-name"
      }), _vm._v(" "), _c('div', {
        staticClass: "menu-content"
      }, [(cItem.type == 1) ? _c('span', [_vm._v(_vm._s(cItem.val))]) : _c('div', {
        staticClass: "menu-right"
      }, [_c('div', {
        staticClass: "date-nav"
      }, [_c('select', {
        directives: [{
          name: "model",
          rawName: "v-model.trim",
          value: (cItem.val),
          expression: "cItem.val",
          modifiers: {
            "trim": true
          }
        }],
        staticStyle: {
          "border": "0",
          "width": "85%"
        },
        attrs: {
          "size": "1"
        },
        on: {
          "change": function($event) {
            var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
              return o.selected
            }).map(function(o) {
              var val = "_value" in o ? o._value : o.value;
              return val
            });
            _vm.$set(cItem, "val", $event.target.multiple ? $$selectedVal : $$selectedVal[0])
          }
        }
      }, [_vm._l((_vm.staffDefineMenuList), function(c, i) {
        return [(c.id > 0 && c.id !== 101 && c.id !== 102) ? _c('option', {
          key: i,
          attrs: {
            "disabled": _vm.selectSet.has(+c.id)
          },
          domProps: {
            "value": c.id
          }
        }, [_vm._v(_vm._s(c.name))]) : _vm._e()]
      })], 2), _vm._v(" "), (!cItem.val && (typeof cItem.val != 'undefined')) ? _c('span', {
        staticClass: "place"
      }, [_vm._v("请选择菜单栏")]) : _vm._e(), _vm._v(" "), _c('i', {
        staticClass: "iconfont iconarrow-down-1",
        staticStyle: {
          "font-size": "12px",
          "margin-top": "3px"
        }
      })]), _vm._v(" "), _c('div', {
        staticClass: "theme-bg menu-title"
      }, [_c('input', {
        directives: [{
          name: "model",
          rawName: "v-model.trim",
          value: (cItem.name),
          expression: "cItem.name",
          modifiers: {
            "trim": true
          }
        }],
        staticClass: "menu-input",
        attrs: {
          "placeholder": "自定义菜单名",
          "type": "text"
        },
        domProps: {
          "value": (cItem.name)
        },
        on: {
          "input": [function($event) {
            if ($event.target.composing) { return; }
            _vm.$set(cItem, "name", $event.target.value.trim())
          }, function($event) {
            return _vm.inputMenuNameFun($event, idx, cIdx)
          }],
          "blur": function($event) {
            return _vm.$forceUpdate()
          }
        }
      })]), _vm._v(" "), (item.val == -1 && cIdx > 0) ? _c('div', {
        staticClass: "theme-bg menu-add theme-font-color",
        on: {
          "click": function($event) {
            return _vm.deleteMenuFun(idx, cIdx)
          }
        }
      }, [_vm._v("-")]) : _vm._e()])])])
    }) : _vm._e()], 2)]
  }), _vm._v(" "), _c('div', {
    staticClass: "none"
  }, [_vm._v("备注：自定义菜单名可为空，表示使用系统默认菜单名")]), _vm._v(" "), _c('div', {
    staticClass: "submit theme-btn-bg",
    on: {
      "click": function($event) {
        return _vm.submitMenu()
      }
    }
  }, [_vm._v("提交")])], 2) : _c('div', {
    staticClass: "right-menu"
  }, [_c('qd-switch', {
    attrs: {
      "title": "显示侧边栏菜单"
    },
    on: {
      "change": _vm.updateRightMenu
    },
    model: {
      value: (_vm.openRightMenu),
      callback: function($$v) {
        _vm.openRightMenu = $$v
      },
      expression: "openRightMenu"
    }
  })], 1), _vm._v(" "), _c('bottom-nav', {
    ref: "bottomnav"
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1845)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1559),
  /* template */
  __webpack_require__(2242),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-007aae83",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1883)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1561),
  /* template */
  __webpack_require__(2280),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1d482907",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});