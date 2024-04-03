webpackJsonp([8],{

/***/ 1005:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajax_js__ = __webpack_require__(992);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ImgUpload',
  props: {
    action: {
      type: String,
      required: true
    },
    imgMaxWidth: { // 图片最大宽度（px）
      type: Number,
      default: 2048
    },
    imgCompressRate: { // 图片压缩率（0 ~ 1）
      type: Number,
      default: 0.85
    },
    args: { // 附带的参数（键值对）
      type: Object
    },
    multiple: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: 'img'
    },
    cantDel: {
      type: Boolean,
      default: true
    },
    showThumb: {
      type: Boolean,
      default: true
    },
    seeBigImg: {
      type: Boolean,
      default: false
    },
    format: {
      type: Array,
      default() {
        return ['jpg', 'jpeg', 'png', 'gif'];
      }
    },
    accept: {
      type: String,
      default: 'image/gif, image/jpeg, image/png, image/gif'
    },
    maxSize: {
      type: Number,
      default: 10 * 1024 * 1024
    },
    defaultFileList: {
      type: Array,
      default() {
        return [];
      }
    },
    headers: {
      type: Object,
      default() {
        return {};
      }
    },
    onSuccess: {
      type: Function,
      default() {
        return {};
      }
    },
    onProgress: {
      type: Function,
      default() {
        return {};
      }
    },
    onError: {
      type: Function,
      default() {
        return {};
      }
    },
    onRemove: {
      type: Function,
      default() {
        return {};
      }
    }

  },
  data() {
    return {
      g: $,
      fileList: [],
      tempIndex: 1,
      imgVisible: false,
      imgUrl: '',
      isInWx: null
    };
  },

  created() {
    this.isInWx = $.Util.isInWeixin();
  },

  methods: {
    uploadImgByWx() {
      $.Util.uploadImgByWxApi(res => {
        this.fileList = [{
          status: 'finished',
          percentage: 100,
          url: res.data.url
        }];
        this.onSuccess(res, {});
      }, err => {
        alert('上传失败，请稍后重试。');
      }, this.imgMaxWidth, this.imgCompressRate);
    },

    handleClick() {
      this.$refs.input.click();
    },

    handleChange(e) {
      let myFiles = e.target.files;
      if (!myFiles) {
        return;
      }
      this.uploadFiles(myFiles);
      this.$refs.input.value = null;
    },

    uploadFiles(files) {
      $.Msg.info('正在上传 ...');
      let postFiles = Array.prototype.slice.call(files);
      if (!this.multiple) {
        postFiles = postFiles.slice(0, 1);
        this.fileList = [];
      }
      if (postFiles.length === 0) {
        return;
      }
      postFiles.forEach(file => {
        this.upload(file);
      });
    },

    upload(file) {
      if (this.format.length) {
        const thisFileFormat = file.name.split('.').pop().toLocaleLowerCase();
        const checked = this.format.some(item => item.toLocaleLowerCase() === thisFileFormat);
        if (!checked) {
          $.Dlg.error('您的图片格式【{0}】不符合要求, 规定的图片格式有【{1}】'.format(thisFileFormat, this.foramt.join(',')));
          return false;
        }
      }

      if (this.maxSize && file.size > this.maxSize) {
        const fileSize = (file.size / 1024).toFixed(2);
        $.Dlg.error('您当前的图片大小为【{0}K】, 图片大小不能超过【{1}K】。'.format(fileSize, this.maxSize));
        return false;
      }

      this.post(file);
    },

    post(file) {
      // check format
      if (this.format.length) {
        const _file_format = file.name.split('.').pop().toLocaleLowerCase();
        const checked = this.format.some(item => item.toLocaleLowerCase() === _file_format);
        if (!checked) {
          this.onFormatError(file, this.fileList);
          return false;
        }
      }
      // check maxSize
      if (this.maxSize) {
        if (file.size > this.maxSize) {
          //this.onExceededSize(file, this.fileList);
          $.Dlg.error('文件大小不能超过 {0}M', this.maxSize / 1024 / 1024);
          return false;
        }
      }
      this.handleStart(file);

      let lrzArgs = {};
      if (this.imgMaxWidth) lrzArgs.width = this.imgMaxWidth;
      if (this.imgCompressRate) lrzArgs.quality = this.imgCompressRate;
      lrz(file, lrzArgs).then(rst => {
        // set args
        if (this.args) {
          Object.keys(this.args).map(key => {
            rst.formData.append(key, this.args[key]);
          });
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax_js__["a" /* default */])({
          headers: this.headers,
          withCredentials: true,
          formData: rst.formData,
          action: this.action,
          onProgress: e => {
            this.handleProgress(e, file);
          },
          onSuccess: res => {
            this.handleSuccess(res, file);
          },
          onError: (err, response) => {
            this.handleError(err, response, file);
          }
        });
      });
    },

    handleStart(file) {
      file.uid = Date.now() + this.tempIndex++;
      const _file = {
        status: 'uploading',
        name: file.name,
        size: file.size,
        percentage: 0,
        uid: file.uid,
        showProgress: true
      };
      this.fileList.push(_file);
    },
    getFile(file) {
      const fileList = this.fileList;
      let target;
      fileList.every(item => {
        target = file.uid === item.uid ? item : null;
        return !target;
      });
      return target;
    },
    handleProgress(e, file) {
      const _file = this.getFile(file);
      this.onProgress(e, _file, this.fileList);
      _file.percentage = e.percent || 0;
    },
    handleSuccess(res, file) {
      const _file = this.getFile(file);
      if (_file) {
        _file.status = 'finished';
        _file.response = res;
        //this.dispatch('FormItem', 'on-form-change', _file);
        this.onSuccess(res, _file, this.fileList);
        setTimeout(() => {
          _file.showProgress = false;
        }, 1000);
      }
    },
    handleError(err, response, file) {
      const _file = this.getFile(file);
      const fileList = this.fileList;
      _file.status = 'fail';
      fileList.splice(fileList.indexOf(_file), 1);
      this.onError(err, response, file);
    },
    handleRemove(idx, file) {
      const fileList = this.fileList;
      fileList.splice(idx, 1);
      this.$emit('onRemove', idx);
    },
    handlePreview(file) {
      if (file.status === 'finished') {
        this.onPreview(file);
      }
    },
    handleView(item) {
      if (this.seeBigImg) {
        this.imgVisible = true;
        this.imgUrl = $.Util.getImgUrl(item.name, 250, 250, 'EEEEEE'); //item.url;
      }
    },
    closeDlg() {
      this.imgVisible = false;
    },
    clearFiles() {
      this.fileList = [];
    }
  },
  watch: {
    defaultFileList: {
      immediate: true,
      handler(fileList) {
        this.fileList = fileList.map(item => {
          item.status = 'finished';
          item.percentage = 100;
          item.uid = Date.now() + this.tempIndex++;
          return item;
        });
      }
    }
  }
});

/***/ }),

/***/ 1006:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".img-upload-list{margin-top:10px}.img-upload-list-item{display:inline-block;width:100px;height:100px;text-align:center;line-height:100px;margin:0 15px 15px 0;border-radius:4px;position:relative;box-shadow:0 1px 1px rgba(0,0,0,.1)}.img-upload-list-item img{width:100%;height:100%;border:0}.img-upload-list-cover{display:none;position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.6)}.del-img{position:absolute;top:-5px;right:-5px;width:20px;height:20px;line-height:20px;border-radius:100%;text-align:center;background:#333;color:#fff}.img-upload-list-item:hover .img-upload-list-cover{display:block}.img-upload-list-cover i{color:#fff;font-size:20px;cursor:pointer;margin:0 2px}.img-dlg{text-align:center;margin:0}.img-dlg img{margin:15px 0}", ""]);

// exports


/***/ }),

/***/ 1007:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1006);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("ab67c0e2", content, true, {});

/***/ }),

/***/ 1009:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vant"
  }, [_c('div', [(_vm.isInWx) ? _c('div', {
    on: {
      "click": _vm.uploadImgByWx
    }
  }, [_vm._t("default")], 2) : _c('div', {
    staticClass: "img-upload"
  }, [_c('div', {
    on: {
      "click": _vm.handleClick
    }
  }, [_c('input', {
    ref: "input",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "type": "file",
      "multiple": _vm.multiple,
      "accept": _vm.accept
    },
    on: {
      "change": _vm.handleChange
    }
  }), _vm._v(" "), _vm._t("default")], 2)]), _vm._v(" "), (_vm.showThumb && _vm.fileList && _vm.fileList.length > 0) ? _c('div', {
    staticClass: "img-upload-list"
  }, _vm._l((_vm.fileList), function(item, idx) {
    return _c('div', {
      staticClass: "img-upload-list-item"
    }, [(item.status === 'finished') ? [_c('img', {
      attrs: {
        "src": item.url
      },
      on: {
        "click": function($event) {
          return _vm.handleView(item)
        }
      }
    }), _vm._v(" "), (_vm.cantDel) ? _c('div', {
      staticClass: "del-img",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          return _vm.handleRemove(idx, item)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont iconclose"
    })]) : _vm._e()] : [(item.showProgress) ? _c('progress', {
      attrs: {
        "percent": item.percentage,
        "hide-info": ""
      }
    }) : _vm._e()]], 2)
  }), 0) : _vm._e(), _vm._v(" "), _c('van-dialog', {
    staticClass: "van-has-overlay",
    attrs: {
      "show-cancel-button": true,
      "show-confirm-button": false,
      "cancelButtonText": "关闭",
      "title": "查看图片"
    },
    model: {
      value: (_vm.imgVisible),
      callback: function($$v) {
        _vm.imgVisible = $$v
      },
      expression: "imgVisible"
    }
  }, [_c('section', {
    staticStyle: {
      "margin-bottom": "10px",
      "padding-top": "15px"
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": _vm.imgUrl
    }
  })])])])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 1358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_bottom_nav_vue__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_bottom_nav_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_bottom_nav_vue__);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: { BottomNav: __WEBPACK_IMPORTED_MODULE_0__components_bottom_nav_vue___default.a },
  data() {
    return {};
  },
  methods: {}
});

/***/ }),

/***/ 1405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_echarts_lib_chart_themeRiver__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_echarts_lib_chart_themeRiver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_echarts_lib_chart_themeRiver__);
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "chart-test",
  data() {
    return {
      g: $
    };
  },
  mounted() {
    // this.heartRateChartOption()
  },
  computed: {
    heartRateChartOption() {
      return {
        color: ['#42d4c4'],

        xAxis: {
          type: 'category',
          axisTick: { show: false },
          data: ['2012', '2013', '2014', '2015', '2016'],
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          }
        },

        yAxis: [{
          type: 'value',
          axisLabel: {
            textStyle: {
              color: '#ff0'
            }
          }
        }],
        series: [{
          name: 'Forest',
          type: 'bar',
          barGap: 0,
          data: [320, 332, 301, 334, 390],
          lable: {
            show: true
          }
        }, {
          name: 'Forest',
          type: 'bar',
          barGap: 0,
          data: [320, 332, 301, 334, 390]
        }]

      };
    }
  }
});

/***/ }),

/***/ 1461:
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

// import Cookies from "js-cookie";
/* harmony default export */ __webpack_exports__["default"] = ({
    name: "test",
    data() {
        return {
            confirmSubmit: true,
            imgUrl: null
        };
    },

    methods: {
        test() {
            let args = {};
            $.Req.service('imgVerifyCodeGet', args, ret => {
                this.imgUrl = "data:image/png;base64," + ret.image;
            });
        }
    },

    created() {}
});

/***/ }),

/***/ 1525:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "start.vue",
    data() {
        return {
            value: 50,
            images: ['http://ww1.sinaimg.cn/large/6b99f0d3gw1f93fyesvzfj21hc0xcn5e.jpg', 'http://hbimg.b0.upaiyun.com/7f87926ab3d2807106e1147a5c5dad49423b88752cad0-vZVlts_fw658'],
            stratClassify: [{ icons: 'iconTest-record', tit: '开始', path: 'index' }, {
                icons: 'iconLeague-record',
                tit: '排课',
                path: 'index'
            }, { icons: 'iconIntegral-record', tit: '约课', path: 'index' }, {
                icons: 'iconRecords-of-Private-Courses',
                tit: '上课',
                path: 'index'
            }, {
                icons: 'iconAdmission-check-in',
                tit: '排课',
                path: 'index'
            }, { icons: 'iconFeedback', tit: '约课', path: 'index' }, {
                icons: 'iconFeedback',
                tit: '上课',
                path: 'index'
            }, {
                icons: 'iconMembership-card',
                tit: '排课',
                path: 'index'
            }, { icons: 'iconMore', tit: '更多', path: 'index' }]
        };
    },
    methods: {
        onChange(value) {
            this.$toast('当前值：' + value);
            this.current = index;
        }

    }
});

/***/ }),

/***/ 1563:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    const validatePasswdCheck = (rule, value, callback) => {
      if (value !== this.tenantForm.password) {
        callback(new Error($.Lang.PASSWD_CONFIRM_ERR));
      } else {
        callback();
      }
    };
    return {
      authcodeLabel: '获取验证码',
      lastSendSmsTime: null,
      authcodeBtnDisabled: true,
      shopTypes: $.Dict.ShopTypeOptions,
      shopTypesArr: [],
      addrList: [{}, {}, {}],
      tenantForm: {
        tenantName: '',
        shopName: '',
        shopType: null,
        addressLSelect: [{ addressL: true, addressLShow: false, shopAddrL: null, shopAddrLName: '' }, { addressL: true, addressLShow: false, shopAddrL: null, shopAddrLName: '' }, { addressL: true, addressLShow: false, shopAddrL: null, shopAddrLName: '' }],
        uname: '',
        shopAddrDetail: '',
        phoneNo: '',
        smsAuthcode: '',
        password: '',
        passwordCheck: ''
      },
      dlgView: {
        inputShow: false,
        brandName: false,
        shopName: false,
        address: false,
        showTips: false
      },
      checkDlgViewName: '',
      pleaseChose: true,
      shopTypesShow: false,
      hasChoseShopType: false,
      msgCode: true,
      tipsCont: ''
    };
  },

  created() {
    this.shopTypesArr = [];
    for (let i in this.shopTypes) {
      this.shopTypesArr.push({ name: i, id: this.shopTypes[i] });
    }
    this.queryRegion(1, null, regions => {
      this.$set(this.addrList, 0, regions);
    });
  },

  mounted() {
    this.closePullDown();
  },

  methods: {
    showTipDlg(val) {
      this.dlgView.showTips = true;
      if (val == 'tenantName') {
        this.tipsCont = '每个商户必须指定一个商户名（或品牌名），旗下可创建并管理多个门店。';
      }
      if (val == 'shopName') {
        this.tipsCont = '每个商户至少创建一个门店，登录后可创建多个门店。门店名称建议使用地名，例如，鼓楼店';
      }
    },

    closeInputDlg() {
      this.dlgView.inputShow = false;
    },

    addLShowFunc(i) {
      this.tenantForm.addressLSelect[0].addressLShow = false;
      this.tenantForm.addressLSelect[1].addressLShow = false;
      this.tenantForm.addressLSelect[2].addressLShow = false;
      this.tenantForm.addressLSelect[i].addressLShow = true;
    },

    onChangeAddrL(i, name, value) {
      this.tenantForm.addressLSelect[i].addressLShow = false;
      this.tenantForm.addressLSelect[i].addressL = false;
      this.tenantForm.addressLSelect[i].shopAddrL = value;
      this.tenantForm.addressLSelect[i].shopAddrLName = name;
      this.changeShopAddr(i + 1, value);

      if (i === 0) {
        this.tenantForm.addressLSelect[1].addressL = true;
        this.tenantForm.addressLSelect[2].addressL = true;
      } else if (i === 1) {
        this.tenantForm.addressLSelect[2].addressL = true;
      }
    },

    queryRegion(level, pid, callback) {
      let args = null;
      if (pid) {
        args = { queryType: 2, pid: pid };
      } else if (level) {
        args = { queryType: 1, level: level };
      } else {
        return;
      }

      $.Req.service($.SvName.REGION_GET, args, ret => {
        let retRegions = {};
        const regions = ret.regionList;
        for (let i = 0, len = regions.length; i < len; i++) {
          retRegions[regions[i]['rid']] = regions[i]['name'];
        }
        callback(retRegions);
      });
    },

    changeShopAddr(level, value) {
      if (level > 1 && !value) return;

      if (level === 1) {
        this.queryRegion(level, value, regions => {
          this.$set(this.addrList, 1, regions);
          this.$set(this.addrList, 2, {});
        });
      } else if (level === 2) {
        this.queryRegion(level, value, regions => {
          this.$set(this.addrList, 2, regions);
        });
      }
    },

    closePullDown() {
      let _this = this;

      let closeFunc = () => {
        _this.$nextTick(() => {
          _this.shopTypesShow = false;
          _this.tenantForm.addressLSelect[0].addressLShow = false;
          _this.tenantForm.addressLSelect[1].addressLShow = false;
          _this.tenantForm.addressLSelect[2].addressLShow = false;
        });
      };
      window.onclick = () => {
        closeFunc();
      };
      window.onscroll = () => {
        closeFunc();
      };
    },

    checkUserPhone(callback) {
      if (this.tenantForm.phoneNo < 10000000000 || this.tenantForm.phoneNo > 20000000000) {
        $.Bble.warning('手机格式不正确');
        return false;
      } else {
        const args = { phoneNo: this.tenantForm.phoneNo };
        $.Req.service($.SvName.USER_CHECK, args, ret => {
          const userStatus = ret.status;
          let errMsg = null;
          if (userStatus === $.Dict.UserStatus.FROZEN) {
            errMsg = $.Lang.USER_FROZEN;
          } else if (userStatus === $.Dict.UserStatus.INVALID) {
            errMsg = $.Lang.USER_INVALID;
          } else {
            callback();
            return true;
          }
          if (errMsg) {
            $.Bble.warning(errMsg);
            return false;
          }
        });
      }
    },

    checkPassword() {
      if (this.tenantForm.password.length < 6) {
        $.Bble.warning('密码太短，请至少设置6位密码');
        return false;
      }
    },

    onClickSmsAuthcodeBtn() {
      if (this.authcodeBtnDisabled) {
        let nowTime = new Date().getTime();
        if (this.lastSendSmsTime && nowTime - this.lastSendSmsTime < 3000) {
          $.Msg.info($.Lang.CLICK_FREQUENTLY);
          return;
        }
        this.lastSendSmsTime = nowTime;

        this.checkUserPhone(() => {
          let args = {
            phoneNo: this.tenantForm.phoneNo,
            authcodeType: 1
          };
          $.Req.service($.SvName.SMS_AUTHCODE_SEND, args, ret => {
            if (ret.sendStatus !== 0) {
              $.Dlg.error($.Lang.AUTHCODE_SEND_ERR);
            }
          });

          let count = 60;
          let resend = setInterval(() => {
            count--;
            if (count > 0) {
              this.authcodeBtnDisabled = false;
              this.authcodeLabel = count + "秒后可重新获取";
            } else {
              clearInterval(resend);
              this.authcodeBtnDisabled = true;
              this.authcodeLabel = '获取验证码';
            }
          }, 1000);
        });
      }
    },

    checkRepeatPassWord() {
      if (this.tenantForm.password !== this.tenantForm.passwordCheck) {
        $.Bble.warning('两次密码不同');
        return false;
      }
    },

    checkAllBlanks() {
      if (this.tenantForm.tenantName === '') {
        $.Bble.warning('商户名称或品牌名称不能为空');
        return false;
      } else if (this.tenantForm.shopName === '') {
        $.Bble.warning('门店名称不能为空');
        return false;
      } else if (this.tenantForm.shopType === null) {
        $.Bble.warning('门店类型不能为空');
        return false;
      } else if (this.tenantForm.addressLSelect[0].shopAddrLName === '' || this.tenantForm.addressLSelect[1].shopAddrLName === '') {
        $.Bble.warning('门店地址不能为空');
        return false;
      } else if (this.tenantForm.shopAddrDetail === '') {
        $.Bble.warning('详细地址不能为空');
        return false;
      } else if (this.tenantForm.uname === '') {
        $.Bble.warning('姓名不能为空');
        return false;
      } else if (this.tenantForm.phoneNo == '') {
        $.Bble.warning('手机号码不能为空');
        return false;
      } else if (this.tenantForm.smsAuthcode == '') {
        $.Bble.warning('验证码不能为空');
        return false;
      } else if (this.tenantForm.smsAuthcode < 1000 || this.tenantForm.smsAuthcode > 999999999) {
        $.Bble.warning('验证码格式不正确');
        return false;
      } else if (this.tenantForm.password === '') {
        $.Bble.warning('密码不能为空');
        return false;
      } else if (this.tenantForm.passwordCheck === '') {
        $.Bble.warning('确认密码不能为空');
        return false;
      } else if (this.tenantForm.password !== this.tenantForm.passwordCheck) {
        $.Bble.warning('两次密码不同');
        return false;
      } else {
        return true;
      }
    },

    onClickSubmitBtn() {
      if (this.checkAllBlanks()) {
        const args = {
          tenantName: this.tenantForm.tenantName,
          shopName: this.tenantForm.shopName,
          shopType: this.tenantForm.shopType,
          shopAddrL1: this.tenantForm.addressLSelect[0].shopAddrL,
          shopAddrL2: this.tenantForm.addressLSelect[1].shopAddrL,
          shopAddrL3: this.tenantForm.addressLSelect[2].shopAddrL,
          shopAddrDetail: this.tenantForm.shopAddrDetail,
          uname: this.tenantForm.uname,
          userPhoneNo: this.tenantForm.phoneNo,
          smsAuthcode: this.tenantForm.smsAuthcode,
          userPwd: $.Util.md5(this.tenantForm.password)
        };
        $.Req.service($.SvName.TENANT_CREATE, args, ret => {
          $.Dlg.success($.Lang.TENANT_REG_SUCCESS);
          this.$router.push('/user-login');
        }, true);
      }
    },

    checkValue(name, tip) {
      if (this.tenantForm[name] == '') {
        $.Bble.warning(tip + '不能为空');
        return;
      }
    }
  }
});

/***/ }),

/***/ 1566:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      displayForm: false,
      g: window.$,
      redirect: null,
      user: {
        phoneNo: "",
        password: "",
        md5Pwd: null,
        wxId: null
      },
      tenantListDlg: false,
      tenantList: [],
      shopListDlg: false,
      shopList: [],
      topPopup: false,
      loginLoading: false,
      queryEncTid: null,
      queryEncSid: null,
      loginRet: {},
      loginSelectDlg: false,
      isGetWxConf: $.Util.isInWeixin(),
      loginHeadImgUrl: null,
      loginBgUrl: null,
      lastSendSmsTime: null,
      authcodeLabel: "获取验证码",
      authcodeDisabled: false,
      loginAuthcodeDlg: false,
      loginAuthcode: null,
      regTipsDlg: null,
      isInWxMiniProgram: null,
      showStopAutoLogin: null,
      passwordType: "password"
    };
  },

  created() {
    this.isInWxMiniProgram = $.Util.isInWxMiniProgram();
    this.loginHeadImgUrl = $.Util.cookie.get($.Conf.CookieKeys.LOGIN_HEAD_IMG);
    if (this.$route.query) {
      if (this.$route.query.t) {
        this.queryEncTid = this.$route.query.t.replace(/ /g, "+");
      }
      if (this.$route.query.encSid) {
        this.queryEncSid = this.$route.query.encSid.replace(/ /g, "+");
      }
      if (this.$route.query.redirect) {
        this.redirect = this.$route.query.redirect;
      }
    }

    // setTimeout(() => {
    // 	if (this.loginLoading && !this.tenantListDlg && !this.shopListDlg && !this.loginSelectDlg && !this.loginAuthcodeDlg) {
    // 		this.showStopAutoLogin = true;
    // 	}
    // }, 3000);

    let pos1;
    if ((pos1 = location.href.indexOf("code=")) > 0) {
      let pos2 = location.href.indexOf("&state=");
      let wxCode = location.href.substring(pos1 + 5, pos2);
      let args = {
        wxCode: wxCode,
        pageUrl: encodeURIComponent(location.href.split("#")[0])
      };
      if (this.queryEncTid) args.encTid = this.queryEncTid;
      if (this.queryEncSid) args.encSid = this.queryEncSid;
      this.loginWithWeixin(args);
    } else {
      this.autoLogin();
    }
  },

  methods: {
    handleLogin() {
      this.login(this.queryEncTid, this.queryEncSid);
    },

    login(encTid, encSid) {
      // check
      if (!this.user.phoneNo) {
        $.Msg.warning("请输入登录手机号");
        return;
      }
      if (!$.Util.validatePhoneNo(this.user.phoneNo)) {
        $.Msg.error("手机号格式错误");
        return;
      }
      if (!this.user.password && !this.user.md5Pwd) {
        $.Msg.warning("请输入登录密码");
        return;
      }

      let passwordMd5 = this.user.password ? $.Util.md5(this.user.password) : this.user.md5Pwd;
      let args = {
        phoneNo: this.user.phoneNo,
        password: passwordMd5,
        isFromMobile: true
      };
      if (encTid) args.encTid = encTid;
      if (encSid) args.encSid = encSid;
      if (this.user.wxId) args.wxId = this.user.wxId;
      if (this.isGetWxConf) {
        args.isInWx = true;
        args.pageUrl = encodeURIComponent(location.href.split("#")[0]);
      }

      $.Req.service($.SvName.LOGIN, args, ret => {
        if (ret.wxApiConf) this.setWxConf(ret.wxApiConf);
        this.guideUserHome(ret);
      }, this.displayForm, err => {
        $.Dlg.error(err);
        if (this.$route.query.unloginRedirect) {
          this.$router.push(this.$route.query.unloginRedirect);
        } else {
          this.displayForm = true;
        }
      });
    },

    loginWithTenant(encTid) {
      this.closeTenantListDlg();
      this.login(encTid, null);
    },

    loginWithShop(encTid, encSid) {
      this.login(encTid, encSid);
    },

    queryAndSetClientVersion(callback) {
      $.Req.service($.SvName.SYS_PARAM_VALUE_QUERY, { paramType: 1 }, ret => {
        $.data.clientVersion = ret.value;
        if (callback) callback();
      });
    },

    autoLogin() {
      let userPhone = $.Util.cookie.get($.Conf.CookieKeys.USER_PHONE);
      let userPwd = $.Util.cookie.get($.Conf.CookieKeys.USER_PASSWD);
      if (userPhone && userPwd) {
        this.user.phoneNo = userPhone;
        this.user.md5Pwd = userPwd;
        this.user.wxId = $.Util.cookie.get($.Conf.CookieKeys.USER_WXID);
        this.displayForm = true;
        let args = {
          phoneNo: userPhone,
          password: userPwd,
          isFromMobile: true
        };
        if (this.queryEncSid || this.queryEncTid) {
          if (this.queryEncTid) {
            args.encTid = this.queryEncTid;
          } else {
            args.encTid = $.Util.cookie.get($.Conf.CookieKeys.LOGIN_TID);
          }
          if (this.queryEncSid) {
            args.encSid = this.queryEncSid;
          } else {
            args.encSid = $.Util.cookie.get($.Conf.CookieKeys.LOGIN_SID);
          }
        } else {
          let encTid = $.Util.cookie.get($.Conf.CookieKeys.LOGIN_TID);
          let encSid = $.Util.cookie.get($.Conf.CookieKeys.LOGIN_SID);
          if (encTid) args.encTid = encTid;
          if (encSid) args.encSid = encSid;
        }
        this.loginLoading = true;
        if (this.isGetWxConf) {
          args.isInWx = true;
          args.pageUrl = encodeURIComponent(location.href.split("#")[0]);
        }
        $.Req.service($.SvName.LOGIN, args, ret => {
          if (ret.wxApiConf) this.setWxConf(ret.wxApiConf);
          this.guideUserHome(ret);
        }, true, err => {
          this.user.md5Pwd = null;
          this.loginLoading = false;
        });
      } else if (location.href.indexOf("jzongguan.com") > 0 && $.Util.isInWeixin()) {
        const APPID = "wxd643724d2f21d666"; // pub
        //const APPID = 'wx83462b1a98b26046'; // test
        let REDIRECT_URI = encodeURIComponent(location.href);
        location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid={0}&redirect_uri={1}&response_type=code&scope=snsapi_base&state=jzg#wechat_redirect".format(APPID, REDIRECT_URI);
      } else {
        if (this.$route.query.unloginRedirect) {
          this.$router.push(this.$route.query.unloginRedirect);
        } else {
          this.displayForm = true;
        }
      }
    },

    loginWithWeixin(args) {
      $.Req.service($.SvName.LOGIN_WITH_WX, args, ret => {
        if (ret && ret.wxApiConf) {
          this.setWxConf(ret.wxApiConf);
        }
        if (ret && ret.user) {
          this.user.wxId = ret.wxId;
          this.user.phoneNo = ret.user.phoneNo;
          this.user.md5Pwd = ret.pwd;
          this.guideUserHome(ret);
        } else if (ret && ret.wxId) {
          this.user.wxId = ret.wxId;
          if (this.$route.query.unloginRedirect) {
            this.$router.push(this.$route.query.unloginRedirect);
          } else {
            this.displayForm = true;
          }
        } else {
          if (this.$route.query.unloginRedirect) {
            this.$router.push(this.$route.query.unloginRedirect);
          } else {
            this.displayForm = true;
          }
        }
      }, this.displayForm, err => {
        $.Msg.error(err);
        this.loginLoading = false;
        this.displayForm = true;
      });
    },

    guideUserHome(loginRet) {
      this.queryAndSetClientVersion(() => {
        $.Util.cookie.delete($.Conf.CookieKeys.LOGOUT);
        let homeType = loginRet.userHome;
        if (this.redirect && loginRet.shopList && loginRet.shopList.length === 1) {
          homeType = 3;
        }
        switch (homeType) {
          case 1:
            // 租户创建人
            this.storeLoginInfo(loginRet);
            this.loginTo("/tenant");
            break;

          case 2:
            // 门店员工
            if (loginRet.user.memberId) {
              this.loginRet = loginRet;
              this.loginSelectDlg = true;
            } else {
              this.loginRet = loginRet;
              if (loginRet.user.needMobileAuthcode) {
                this.loginAuthcodeDlg = true;
              } else {
                this.storeLoginInfo(loginRet);
                this.navStaffHomePage();
              }
            }
            break;

          case 3:
            // 门店会员
            this.storeLoginInfo(loginRet);
            if (this.redirect) {
              this.loginTo(this.redirect);
            } else {
              this.loginTo("/member-home");
            }
            break;

          case 4:
            // 门店列表页面（待用户候选）
            this.showShopList(loginRet.shopList);
            break;

          case 5:
            // 多租户列表页面（待用户候选）
            this.showTenantList(loginRet.tenantList);
            break;

          case 6:
            // 门店过期
            let shop = loginRet.shopList[0];
            $.Dlg.warning($.Lang.SHOP_EXPIRED.format(shop.shopName));
            this.loginLoading = false;
            this.displayForm = true;
            break;
        }
      });
    },

    loginTo(page) {
      this.$router.push(page);
    },

    storeLoginInfo(loginRet) {
      // set login flag
      $.Util.cookie.set($.Conf.Keys.LOGIN_FLAG, true);
      $.data.user = loginRet.user;

      $.Dlg.vue.$emit("updateUser");

      $.data.user.wxId = this.user.wxId;
      let encTid = null;
      if (loginRet.tenantList && loginRet.tenantList[0]) {
        $.data.tenant = loginRet.tenantList[0];
        encTid = $.data.tenant.encTid;
      }
      let encSid = null;
      if (loginRet.shopList && loginRet.shopList[0]) {
        $.data.shop = loginRet.shopList[0];
        encSid = $.data.shop.encSid;
        document.title = $.data.shop.shopName;
      }

      // save user cookie for auto-login
      let days = 365;
      let passwordMd5 = this.user.md5Pwd ? this.user.md5Pwd : $.Util.md5(this.user.password);
      $.Util.cookie.set($.Conf.CookieKeys.USER_PHONE, $.data.user.phoneNo, days);
      $.Util.cookie.set($.Conf.CookieKeys.USER_PASSWD, passwordMd5, days);
      $.Util.cookie.set($.Conf.CookieKeys.USER_WXID, this.user.wxId, days);
      if (encTid) $.Util.cookie.set($.Conf.CookieKeys.LOGIN_TID, encTid, days);
      if (encSid) $.Util.cookie.set($.Conf.CookieKeys.LOGIN_SID, encSid, days);
    },

    showTenantList(tenantList) {
      this.tenantList = tenantList;
      this.tenantListDlg = true;
    },

    showShopList(shopList) {
      this.shopList = shopList;
      this.shopListDlg = true;
      $.data.shopList = shopList;
    },

    closeTenantListDlg() {
      this.tenantListDlg = false;
    },

    closeShopListDlg() {
      this.shopListDlg = false;
    },

    loginSelect(type) {
      if (type === "staff") {
        if (this.loginRet.user.needMobileAuthcode) {
          this.loginAuthcodeDlg = true;
        } else {
          this.loginAsStaff();
        }
      } else if (type === "member") {
        this.loginRet.user.staffId = null;
        this.loginRet.user.isShopOwner = false;
        this.loginRet.user.isTenantOnwer = false;
        this.loginRet.user.roleFuncList = [];
        this.storeLoginInfo(this.loginRet);
        this.loginTo("/member-home");
        $.Util.cookie.set($.Conf.CookieKeys.LOGIN_AS, "member", 365);
      }
    },

    loginAsStaff() {
      this.loginRet.user.memberId = null;
      this.storeLoginInfo(this.loginRet);
      this.navStaffHomePage();
      $.Util.cookie.set($.Conf.CookieKeys.LOGIN_AS, "staff", 365);
    },

    navStaffHomePage() {
      this.$router.push("/staff-home");
      /*
        let u = $.data.user;
        if (u.isShopOwner) {
          this.$router.push('/staff-home');
        } else if (u.isCoach) {
          this.$router.push('/coach-home');
        } else {
          this.$router.push('/staff-home');
        }
        */
    },

    setWxConf(wxConf) {
      this.isGetWxConf = false;
      wx.config({
        debug: false,
        appId: wxConf.appId,
        timestamp: wxConf.timestamp,
        nonceStr: wxConf.nonceStr,
        signature: wxConf.signature,
        jsApiList: ["getLocation", "chooseImage", "getLocalImgData"]
      });
    },

    onClickSmsAuthcodeBtn() {
      let nowTime = new Date().getTime();
      if (this.lastSendSmsTime && nowTime - this.lastSendSmsTime < 3000) {
        $.Msg.warning($.Lang.CLICK_FREQUENTLY);
        return;
      }
      this.lastSendSmsTime = nowTime;

      let count = 60;
      let resend = setInterval(() => {
        count--;
        if (count > 0) {
          this.authcodeDisabled = true;
          this.authcodeLabel = count + "秒";
        } else {
          clearInterval(resend);
          this.authcodeDisabled = false;
          this.authcodeLabel = "获取验证码";
        }
      }, 1000);
      if (this.authcodeDisabled) return;

      let args = {
        phoneNo: this.user.phoneNo,
        authcodeType: 7,
        custName: this.loginRet.user.uname,
        encTid: this.loginRet.shopList[0].encTid,
        encSid: this.loginRet.shopList[0].encSid
      };

      $.Req.service($.SvName.SMS_AUTHCODE_SEND, args, ret => {
        if (ret.sendStatus !== 0) {
          $.Dlg.error($.Lang.AUTHCODE_SEND_ERR);
        }
      }, true);
    },

    checkLogonAuthcode() {
      if (!this.loginAuthcode) {
        $.Msg.error("请输入短信验证码");
        return;
      }

      let args = {
        phoneNo: this.user.phoneNo,
        uid: this.loginRet.user.uid,
        authcode: parseInt(this.loginAuthcode),
        encSid: this.loginRet.shopList[0].encSid
      };
      $.Req.service($.SvName.STAFF_LOGIN_AUTHCODE_CHECK, args, ret => {
        this.loginAsStaff();
      }, true);
    },

    stopAutoLogin() {
      this.loginLoading = false;
    },

    reload() {
      location.reload();
    },

    closeTenantSelect() {
      this.tenantListDlg = false;
      if (this.loginLoading) this.loginLoading = false;
    },

    closeShopSelect() {
      this.shopListDlg = false;
      if (this.loginLoading) this.loginLoading = false;
    },

    changePasswordType() {
      if (this.passwordType === "password") this.passwordType = "text";else this.passwordType = "password";
    }
  }
});

/***/ }),

/***/ 1567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue__ = __webpack_require__(984);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { ImgUpload: __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue___default.a },
  data() {
    return {
      g: window.$,
      memberId: null,
      staffId: null,
      photoUrl: null,
      member: null,
      bmiLevel: null,
      bmiDesc: null,
      staff: null,
      coach: null,
      imgUpload: {
        action: $.Conf.IMG_UPLOAD_URL,
        imgMaxWidth: 2048,
        imgCompressRate: 0.9
      },
      canUploadMemberPhoto: false,
      coachImgList: [],
      selectImg: null,
      seleteImgId: null,
      imgPopup: false,
      dlgView: {
        inputShow: false,
        carNo: false
      },
      minDate: new Date(1940, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(),
      birthday: null,
      checkDlgViewName: '',
      seeBigImg: null,
      newCardNo: '',
      memberCarNoArr: [],
      videoHeight: screen.availHeight / 3
    };
  },

  created() {
    this.memberId = $.data.user.memberId;
    this.staffId = $.data.user.staffId;

    if (this.memberId) {
      this.queryMember();
    } else if (this.staffId) {
      this.queryStaff();
    }
  },

  methods: {
    queryMember() {
      if (!this.memberId) return;

      let args = { memberId: this.memberId };
      $.Req.service($.SvName.MEMBER_ADV_QUERY, args, ret => {
        if (ret && ret.memberList) this.member = ret.memberList[0];else return;

        if (this.member.birthdayYear && this.member.birthdayDate) {
          let month = parseInt(this.member.birthdayDate / 100);
          if (month < 10) month = '0' + month;
          let day = this.member.birthdayDate % 100;
          if (day < 10) day = '0' + day;
          this.member.birthday = '{0}-{1}-{2}'.format(this.member.birthdayYear, month, day);
        }
        this.handleCaclBmi();
        if (this.member.carNos) {
          this.memberCarNoArr = this.member.carNos.split(',');
        }

        if (!this.staffId) {
          this.photoUrl = $.Util.getImgUrl(this.member.avatarPathname, 500, 500, '666666');
        }

        $.Req.service($.SvName.SHOP_ARG_QUERY, { typeId: 2023 }, (ret, systime) => {
          if (!ret.value) return;

          let now = Date.new(systime);
          let limitHours = parseInt(ret.value);
          let diffHours = (now.getTime() - Date.new(this.member.createTime).getTime()) / 1000 / 3600;
          if (diffHours <= limitHours) {
            this.canUploadMemberPhoto = true;
          }
        });
      }, true);
    },

    queryStaff() {
      const args = { staffId: this.staffId };
      $.Req.service($.SvName.STAFF_QUERY, args, ret => {
        if (ret && ret.staffList && ret.staffList[0]) {
          this.staff = ret.staffList[0];
          this.photoUrl = $.Util.getImgUrl(this.staff.avatarPathname, 500, 500, '666666');
          if (this.staff.sex !== null) {
            this.sexDesc = $.Dict.SexDescNormal[this.staff.sex];
          }
          const today = new Date();
          if (this.staff.vacationBegin && this.staff.vacationEnd && today.compareDatePart(this.staff.vacationBegin) >= 0 && today.compareDatePart(this.staff.vacationEnd) <= 0) {
            this.staff.inVacation = true;
          }

          this.coach = ret.coach;
          if (ret.coach) {
            this.queryCoachImgList();
          }
        }
      });
    },

    calcBmi(height, weight) {
      if (height > 0 && weight > 0) {
        let bmi = parseFloat(weight / (height / 100) / (height / 100));
        const bmiNames = ['偏瘦', '正常', '超重', '肥胖'];
        let level = this.getBmiLevel(bmi);
        let bmiDesc = bmiNames[level];
        return [bmi.toFixed(2), level, bmiDesc];
      } else {
        return null;
      }
    },

    getBmiLevel(bmi) {
      if (bmi < 18.5) return 0;else if (bmi < 24) return 1;else if (bmi < 28) return 2;else return 3;
    },

    handleCaclBmi() {
      if (this.member.height && this.member.height < 100) {
        $.Dlg.error("身高的单位是【厘米】，不是【米】");
        this.member.height = null;
        this.member.bmi = null;
        this.bmiDesc = null;
        return;
      }
      this.member.height = parseInt(this.member.height);
      if (this.member.height > 0 && this.member.weight > 0) {
        let [bmi, bmiLevel, bmiDesc] = this.calcBmi(this.member.height, this.member.weight);
        this.member.bmi = bmi;
        this.bmiLevel = bmiLevel;
        this.bmiDesc = bmiDesc;
      } else {
        this.member.bmi = null;
        this.bmiDesc = null;
      }
    },

    handleSave() {
      if (this.member) this.saveMember();else if (this.staff) this.saveStaff();
    },

    saveMember() {
      if (this.member.birthday) {
        let date = new Date(this.member.birthday);
        this.member.birthdayYear = date.getFullYear();
        this.member.birthdayDate = 100 * (date.getMonth() + 1) + date.getDate();
      }
      let carNoArr = [];
      for (let carNo of this.memberCarNoArr) {
        carNo = carNo.trim();
        if (carNo) carNoArr.push(carNo.toUpperCase());
      }
      this.member.carNos = carNoArr.join(',');
      $.Req.service($.SvName.MEMBER_UPDATE, { member: this.member }, ret => {
        $.Bble.success('会员信息<br/>保存成功');
        $.data.user.avatarPathname = this.member.avatarPathname;
      }, true);
    },

    saveStaff() {
      let args = { actionType: 'U', staff: this.staff, coach: this.coach };
      $.Req.service($.SvName.STAFF_SAVE, args, ret => {
        this.photoUrl = $.Util.getImgUrl(this.staff.avatarPathname, 500, 500, '666666');
        $.Bble.success('员工信息<br/>保存成功');
        $.data.user.avatarPathname = this.staff.avatarPathname;
      }, true);
    },

    handleImgUploadSuccess(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;

      this.saveAvatar(res.data.name);
    },

    saveAvatar(fileName) {
      if (this.staff) {
        this.staff.avatarPathname = fileName;
        this.saveStaff();
        $.data.user.avatarPathname = fileName;
      } else if (this.member) {
        // update member photo
        let newMember = { memberId: this.memberId, avatarPathname: fileName };
        $.Req.service($.SvName.MEMBER_AVATAR_UPDATE, { member: newMember }, ret => {
          $.Msg.success($.Lang.OPT_SUCCESS);
          this.photoUrl = $.Util.getImgUrl(fileName, 500, 500, 'ffffff');
          $.data.user.avatarPathname = fileName;
          this.seeBigImg = true;
        }, true);
      }
    },

    handleCoachPhotoImgUploadSuccess(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;
      this.saveCoachImg(res.data.name, 0);
    },

    handleCoachCertImgUploadSuccess(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;
      this.saveCoachImg(res.data.name, 1);
    },

    queryCoachImgList() {
      $.Req.service($.SvName.COACH_IMG_QUERY, { staffId: this.staffId }, ret => {
        this.coachImgList = ret.coachImgList;
      }, true);
    },

    saveCoachImg(filename, imgType) {
      let args = {
        staffId: this.staffId,
        imgPath: filename,
        imgType: imgType
      };
      $.Req.service($.SvName.COACH_IMG_SAVE, args, ret => {
        this.queryCoachImgList();
      }, true);
    },

    openImg(imgId, imgPathname) {
      this.seleteImgId = imgId;
      this.selectImg = $.Util.getImgUrl(imgPathname);
      this.imgPopup = true;
    },

    deleteImg() {
      if (!confirm('您确定要删除该图片吗？')) {
        return;
      }
      let args = {
        staffId: this.staffId,
        deleteImgId: this.seleteImgId
      };
      $.Req.service($.SvName.COACH_IMG_SAVE, args, ret => {
        this.queryCoachImgList();
        this.imgPopup = false;
      }, true);
    },
    submitCoachVideoUrl() {
      let url = prompt('请粘贴腾讯视频页面链接');
      if (!url) {
        alert('链接不能为空');
        return;
      }
      let videoId = null;
      let reg = new RegExp("https://v.qq.com/x/page/(.*?).html?.*");
      let ret = reg.exec(url);
      if (ret && ret.length > 1) {
        videoId = ret[1];
      } else {
        reg = new RegExp("http://m.v.qq.com/play/play.html\\?.*?vid=(.*?)&");
        ret = reg.exec(url);
        if (ret && ret.length > 1) {
          videoId = ret[1];
        }
      }

      if (videoId) {
        this.coach.videoId = videoId;
        $.Msg.success('提交成功，请及时点击【保存】');
      } else {
        alert('抱歉，您上传的不是标准的腾讯视频链接');
      }
    },

    showInputDlg(name) {
      this.dlgView.inputShow = true;
      this.checkDlgViewName = name;
    },

    confirmDatePiker(name) {
      if (name === 'birthday') {
        let date = { year: null, month: null, date: null, hr: null, min: null, sec: null };
        date.year = this.currentDate.getFullYear();
        date.month = this.currentDate.getMonth() < 9 ? '0' + (this.currentDate.getMonth() + 1) : this.currentDate.getMonth() + 1;
        date.date = this.currentDate.getDate() < 10 ? '0' + this.currentDate.getDate() : this.currentDate.getDate();

        this.birthday = date.year + '-' + date.month + '-' + date.date;
        this.member.birthday = this.birthday;
      }
      this.dlgView.inputShow = false;
    },

    appendCarNo() {
      if (this.memberCarNoArr.length > 20) {
        $.Msg.error('车牌号数量不能超过20个');
        return;
      }
      // let val = prompt('请输入该会员的一个车牌号');
      // if (val) this.carNoList.push(val);
      this.dlgView.carNo = true;
    },

    surrAddCarNo() {
      this.memberCarNoArr.push(this.newCardNo);
      this.newCardNo = '';
      this.dlgView.carNo = false;
    },

    removeCarNo(carNo) {
      this.memberCarNoArr.removeValue(carNo);
    }

  }
});

/***/ }),

/***/ 1568:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      authcodeLabel: '获取验证码',
      authcodeDisabled: false,
      userForm: {
        phoneNo: '',
        smsAuthcode: '',
        password: '',
        passwordCheck: '',
        lastSendSmsTime: null
      }
    };
  },

  created: function () {},

  methods: {
    onClickSubmitBtn() {
      if (this.checkUserForm()) {
        const args = {
          phoneNo: this.userForm.phoneNo,
          password: $.Util.md5(this.userForm.password),
          smsAuthcode: this.userForm.smsAuthcode
        };
        $.Req.service($.SvName.USER_PWD_REG, args, ret => {
          $.Dlg.success($.Lang.USER_PWD_SET_SUCCESS);
          location.href = '/';
          //this.$router.push('/user-login');
        });
      }
    },

    checkUserForm() {
      let errs = [];
      if (!this.userForm.phoneNo) {
        $.Msg.warning('请输入手机号');
        return false;
      } else if (!$.Util.validatePhoneNo(this.userForm.phoneNo)) {
        $.Msg.warning('手机号格式错误');
        return false;
      }
      if (!this.userForm.password) {
        $.Msg.warning('请输入密码');
        return false;
      } else if (this.userForm.password.length < 6) {
        $.Msg.warning('密码长度不能小于6位');
        return false;
      }
      if (!this.userForm.passwordCheck) {
        $.Msg.warning('请输入确认密码');
        return false;
      } else if (this.userForm.password !== this.userForm.passwordCheck) {
        $.Msg.warning('两次输入的密码不一致');
        return false;
      }
      if (!this.userForm.smsAuthcode) {
        $.Msg.warning('请输入验证码');
        return false;
      }

      return true;
    },

    validatePhoneno() {
      if (!this.userForm.phoneNo) {
        $.Msg.warning('请输入手机号');
        return false;
      } else if (!$.Util.validatePhoneNo(this.userForm.phoneNo)) {
        $.Msg.warning('手机号格式错误');
        return false;
      }

      return true;
    },

    checkUserPhone(callback) {
      if (this.validatePhoneno()) {
        const args = { phoneNo: this.userForm.phoneNo };
        $.Req.service($.SvName.USER_CHECK, args, ret => {
          const userStatus = ret.status;
          let errMsg = null;
          if (userStatus === $.Dict.UserStatus.NOT_FOUND) {
            errMsg = $.Lang.USER_NOT_FOUND;
          } else if (userStatus === $.Dict.UserStatus.FROZEN) {
            errMsg = $.Lang.USER_FROZEN;
          } else if (userStatus === $.Dict.UserStatus.INVALID) {
            errMsg = $.Lang.USER_INVALID;
          }
          if (errMsg) $.Dlg.error(errMsg);else callback();
        }, true, error => {
          $.Dlg.error(error);
        });
      }
    },

    onClickSmsAuthcodeBtn() {
      let nowTime = new Date().getTime();
      if (this.lastSendSmsTime && nowTime - this.lastSendSmsTime < 3000) {
        $.Msg.warning($.Lang.CLICK_FREQUENTLY);
        return;
      }
      this.lastSendSmsTime = nowTime;

      this.checkUserPhone(() => {
        let count = 60;
        let resend = setInterval(() => {
          count--;
          if (count > 0) {
            this.authcodeDisabled = true;
            this.authcodeLabel = count + "秒后可重新获取";
          } else {
            clearInterval(resend);
            this.authcodeDisabled = false;
            this.authcodeLabel = '获取验证码';
          }
        }, 1000);
        if (this.authcodeDisabled) return;

        let args = {
          phoneNo: this.userForm.phoneNo,
          authcodeType: 2
        };
        $.Req.service($.SvName.SMS_AUTHCODE_SEND, args, ret => {
          if (ret.sendStatus !== 0) {
            $.Dlg.error($.Lang.AUTHCODE_SEND_ERR);
          }
        }, true);
      });
    }
  }
});

/***/ }),

/***/ 1569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },

  created() {
    if (this.$route.query && this.$route.query.code) {
      let code = this.$route.query.code;
      alert(code);
    } else {
      $.data.user.loginManually = true;
      this.$router.push('/user-login');
    }
  },

  methods: {}
});

/***/ }),

/***/ 1574:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: {},
  data() {
    return {
      socketId: null,
      loginInfo: {
        socketId: this.$route.query.socketId,
        wxCode: null,
        weixinId: null,
        phoneNo: null,
        password: null
      },
      isFirstLogin: false
    };
  },
  computed: {},
  watch: {},
  created() {
    this.loginInfo.wxCode = this.getQueryString("code");
  },

  mounted() {},

  methods: {
    loginWx() {
      const args = {
        socketId: this.loginInfo.socketId,
        wxCode: this.loginInfo.wxCode
      };
      this.sendMsg(args, () => {
        this.closeWx();
      });
    },
    bindWeChat() {
      const { socketId, weixinId, phoneNo, password } = this.loginInfo;
      if (!phoneNo) {
        return $.Msg.error("请输入手机号");
      }
      if (!$.Util.validatePhoneNo(phoneNo)) {
        return $.Msg.error("请输入正确的手机号");
      }
      if (!password) {
        return $.Msg.error("请输入密码");
      }
      if (password.length < 6) {
        return $.Msg.error("密码不小于6位");
      }
      const args = {
        socketId,
        weixinId,
        phoneNo,
        password: $.Util.md5(password)
      };
      this.sendMsg(args);
    },

    closeWx() {
      //这个可以关闭安卓系统的手机
      document.addEventListener("WeixinJSBridgeReady", function () {
        WeixinJSBridge.call("closeWindow");
      }, false);
      //这个可以关闭ios系统的手机
      WeixinJSBridge.call("closeWindow");
    },

    getQueryString(name) {
      let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      let r = window.location.search.substr(1).match(reg);
      if (r != null) return r[2];
      return null;
    },

    sendMsg(args) {
      $.Req.service($.SvName.LOGIN_SOCKET_MSG_SEND, args, ret => {
        if (ret.isFirstLogin) {
          if (!ret.weixinId) {
            $.Dlg.error("出现未知错误请重试！");
            this.closeWx();
          } else {
            this.isFirstLogin = true;
            this.loginInfo.weixinId = ret.weixinId;
          }
          return;
        }
        this.closeWx();
      }, true, msg => {
        $.Msg.info(msg);
      });
    }
  }
});

/***/ }),

/***/ 1577:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".chart[data-v-00361c23]{width:350px;height:280px;color:#fff}", ""]);

// exports


/***/ }),

/***/ 1639:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".main-container[data-v-302f364f]{position:fixed;width:100%;height:100%}.main-container .banner[data-v-302f364f]{max-height:50%;overflow:hidden;position:relative}.main-container .banner img[data-v-302f364f]{width:100%}.main-container .banner[data-v-302f364f] .van-swipe__indicators{position:absolute;z-index:100;bottom:0;text-align:center;width:100%}.main-container .banner[data-v-302f364f] .van-swipe-item{float:left}.main-container .banner[data-v-302f364f] .van-swipe__indicator{width:10px;height:10px;display:inline-block;border-radius:50%;border:1px solid #fff;margin-right:10px}.main-container .banner[data-v-302f364f] .van-swipe__indicator.van-swipe__indicator--active{background:hsla(0,0%,100%,.8)}.main-container .classify[data-v-302f364f]{height:50%}.main-container .classify ul[data-v-302f364f]{height:100%;flex-wrap:wrap}.main-container .classify ul li[data-v-302f364f]{width:33.33%;height:33.33%}.main-container .classify ul li a[data-v-302f364f]{display:flex;justify-content:center;align-items:center;width:100%;height:100%;border-right:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;color:#555;font-size:14px}.main-container .classify ul li a i[data-v-302f364f]{margin-bottom:5px;font-size:20px}", ""]);

// exports


/***/ }),

/***/ 1684:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, "input[type=password][data-v-46f5483a]{border:0}.treg .banner[data-v-46f5483a]{padding:15px 20px}.treg .banner img[data-v-46f5483a]{display:inline-block;width:100%}.treg .tblform[data-v-46f5483a]{margin-bottom:20px;padding:0}.treg .tblform .infor-name[data-v-46f5483a]{color:#999}.treg .tblform .infor-detail[data-v-46f5483a]{width:calc(100% - 100px)}.treg .tblform .infor-detail.row[data-v-46f5483a]{padding:0}.treg .tblform .set-pass-detail[data-v-46f5483a]{width:calc(100% - 110px)}.treg .tblform .infor-tip span[data-v-46f5483a]{display:inline-block;width:calc(100% - 40px)}.treg .tblform .iconinfo[data-v-46f5483a]{vertical-align:-1px}.treg .tblform input[data-v-46f5483a]::placeholder{color:#ccc}.treg .tblform input[type=password][data-v-46f5483a]{width:100%;padding:4px}.treg .tblform input[type=password].input-password[data-v-46f5483a]{width:calc(100% - 24px);border:0;text-align:right}.treg .tblform .row-l-r[data-v-46f5483a]{position:relative}.treg .tblform .iconarrow-down-1[data-v-46f5483a]{font-size:12px;margin-left:5px;margin-top:2px}.treg .tips[data-v-46f5483a]{margin:20px}.treg .tips .tips-tit[data-v-46f5483a]{margin-bottom:5px;font-size:13px}.treg .tips .tips-tit i[data-v-46f5483a]{margin-right:4px;vertical-align:-1px}.treg .tips .tips-detail[data-v-46f5483a]{font-size:11px}.treg .dialog-tips[data-v-46f5483a]{margin-bottom:15px}.treg .checkin-success-bg[data-v-46f5483a]{background:#fff;padding:15px 20px;max-height:50%;overflow:scroll;text-indent:16px}.treg .dialog-input.tblform[data-v-46f5483a]{margin:0;padding:15px 20px}.treg .dialog-input input[data-v-46f5483a],.treg .dialog-input textarea[data-v-46f5483a]{text-align:left}.treg .dialog-input input[data-v-46f5483a]::placeholder,.treg .dialog-input textarea[data-v-46f5483a]::placeholder{color:#ccc}.treg .dialog-input input.theme-btn-bor[data-v-46f5483a],.treg .dialog-input textarea.theme-btn-bor[data-v-46f5483a]{border-radius:5px;border:1px solid}.treg .dialog-input .confirm-btn[data-v-46f5483a]{text-align:center;margin:10px -10px 0 0}.treg .dialog-input .confirm-btn span[data-v-46f5483a]{display:inline-block;padding:4px 16px 5px;margin-right:10px}.treg .shop-types[data-v-46f5483a]{position:absolute;top:40px;right:20px;height:200px;overflow-y:scroll;min-width:100%;width:max-content;background:#fff;z-index:10;border:1px solid #ccc;text-align:left;padding:5px}.treg .shop-types li[data-v-46f5483a]{padding:4px}.msg-con[data-v-46f5483a]{padding:5px 10px;border-radius:20px}.add-list .select-list[data-v-46f5483a]{box-sizing:border-box;padding-right:5px;width:33.3%;float:left}.add-list .shop-types[data-v-46f5483a]:last-child{left:-14px}.select-list[data-v-46f5483a]{position:relative;white-space:nowrap;width:30%}.select-list .chosed-select-list[data-v-46f5483a]{padding:10px 10px 0;flex-wrap:wrap;justify-content:flex-start}.select-list .chosed-select-list li[data-v-46f5483a]{margin:0 5px 5px 0;padding:2px 4px;border-radius:4px}.select-list .chosed-select-list li i[data-v-46f5483a]{padding:2px;font-size:12px;vertical-align:1px}.select-list .has-selected-add span[data-v-46f5483a]{height:19px;line-height:19px;overflow:hidden;text-overflow:ellipsis;display:inline-block;white-space:nowrap;width:calc(100% - 19px);vertical-align:-5px}.select-list .shop-types[data-v-46f5483a]{top:100%;right:0;padding:5px 0}.select-list .shop-types li[data-v-46f5483a]{padding:4px 10px}.select-list .shop-types li.active[data-v-46f5483a]{background:#f6f6f6}.tblform input[data-v-46f5483a]{padding:0}.van-has-overlay[data-v-46f5483a]{width:calc(100% - 120px);height:max-content;left:49%;top:38%;transform:translate(-51%,-38%);border-radius:5px;text-align:center}.van-has-overlay .dlg-head[data-v-46f5483a]{padding-top:15px;margin-bottom:20px;text-align:center;font-size:16px;font-weight:600}.van-has-overlay .dlg-cont[data-v-46f5483a]{padding:0 30px;text-align:left}.van-has-overlay .dlg-cont input[data-v-46f5483a]{display:inline-block;padding:6px 8px;width:100%;border:1px solid #dadade}.van-has-overlay .close-dlg[data-v-46f5483a]{position:absolute;left:50%;bottom:-60px;margin-left:-14px;color:#fff}.van-has-overlay .close-dlg i[data-v-46f5483a]{font-size:32px}.van-has-overlay .ok[data-v-46f5483a]{padding:7px 20px 10px;color:#3478f6}.van-has-overlay .middle-btn[data-v-46f5483a]{margin:20px auto;padding:10px 0;width:calc(100% - 90px)}", ""]);

// exports


/***/ }),

/***/ 1731:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".wx-login-for-pc[data-v-65a0a8f4]{overflow:hidden}.wx-login-for-pc .w-l-top[data-v-65a0a8f4]{background:#f9f9f9;padding:0 16px;padding-top:20px}.wx-login-for-pc .w-l-top .w-l-icon[data-v-65a0a8f4]{display:flex;align-items:center;justify-content:center;padding:50px 0}.wx-login-for-pc .w-l-top .w-l-icon[data-v-65a0a8f4]:after{content:\"\";width:100%;height:70px;background:#f9f9f9;display:block;position:fixed;bottom:0}.wx-login-for-pc .w-l-top .w-l-icon div[data-v-65a0a8f4]{padding:20px;background:#fff;border-radius:50%}.wx-login-for-pc .w-l-top .w-l-icon div img[data-v-65a0a8f4]{width:50px;height:50px}.wx-login-for-pc .w-l-top .w-l-icon .iconfont[data-v-65a0a8f4]{margin:0 18px;font-size:20px;color:#999}.wx-login-for-pc .w-l-top .w-l-msg[data-v-65a0a8f4]{font-size:18px;color:#666;text-align:center}.wx-login-for-pc .w-l-btn[data-v-65a0a8f4]{width:100%;height:50px;border:none;background:#07c160;color:#fff;font-size:20px;margin:50px 0 35px;border-radius:2px}.wx-login-for-pc .w-l-btn[disabled=disabled][data-v-65a0a8f4]{background:#dcdcdc}.wx-login-for-pc .w-l-form[data-v-65a0a8f4]{background:#fff;padding:25px 38px;position:fixed;bottom:0;box-shadow:0 0 24px 0 hsla(32,18%,81%,.4118)}.wx-login-for-pc .w-l-form span[data-v-65a0a8f4]{font-size:16px;color:#333}.wx-login-for-pc .w-l-form input[data-v-65a0a8f4]{width:100%;margin-top:18px;border:none;background:#f9f9f9;padding:12px 15px;color:#333;font-size:16px}.wx-login-for-pc .w-l-form .w-l-btn[data-v-65a0a8f4]{margin-top:20px;margin-bottom:0}", ""]);

// exports


/***/ }),

/***/ 1759:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".user-reg .ph{padding:12px 0;text-align:center;color:#333;margin-bottom:20px}.user-reg .logo{text-align:center;margin:20px auto 10px;padding:20px 0}.user-reg .logo img{height:35px}.user-reg .form{width:85%;margin:0 auto}.user-reg .form .input li{display:block;border:1px solid #e4e4e4;border-radius:3px;background:#fff;margin-bottom:10px;height:42px;line-height:42px}.user-reg .form .input .mu-text-field{min-height:100%;height:100%;line-height:100%;padding-top:0}.user-reg .form .input .mu-text-field-content{padding:4px 0 0}.user-reg .form .input .mu-text-field-icon{color:#aaa;font-size:22px;top:9px}.user-reg .form .login-opt-txt{color:#aaa;font-size:14px}.user-reg .form .login-opt-icon{color:#aaa;padding-left:2px}.user-reg .form .opt{text-align:center;margin:20px 0 0}.user-reg .form .opt a{font-size:14px}.user-reg .form .opt li{display:inline;font-size:14px}.user-reg .form .opt li:after{content:\"|\";padding:0 15px;color:#ccc}.user-reg .form .opt li:last-child:after{content:\"\";padding:0}.user-reg .form .submit .btn{height:42px;font-size:14px;border-radius:3px}.user-reg .form .authcode{width:125px;text-align:right;padding-right:10px}.user-reg .foot{position:fixed;bottom:20px;color:#aaa;font-size:11px;width:100%;text-align:center}.user-reg .foot u{text-decoration:none}.user-reg .foot u:hover{color:red}.user-reg .authcode{text-align:right;vertical-align:top}.user-reg .authcode-btn{border-radius:0;border:0;background:#fff;height:30px;line-height:30px;color:#2e90f7}", ""]);

// exports


/***/ }),

/***/ 1764:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1769:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".test-fix[data-v-835022d8]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;background:#000}", ""]);

// exports


/***/ }),

/***/ 1811:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".login[data-v-d09ebdf0]{height:100%;width:100%;position:fixed}.login input[data-v-d09ebdf0]{color:#444}.login .ph[data-v-d09ebdf0]{padding:10px 0;text-align:center;border-bottom:1px solid #e5e5e5;margin:0 20px;font-size:23px;color:#555}.login .ph i[data-v-d09ebdf0]{font-size:26px;color:#555;padding-right:10px}.login .login-loading[data-v-d09ebdf0]{text-align:center;margin-top:200px;font-size:14px;color:gray}.login .login-logo[data-v-d09ebdf0]{width:100px;height:100px;line-height:100px;border-radius:50%;text-align:center;margin:20px auto 25px;background:#fafafa;box-shadow:3px 3px 3px #e4e4e4}.login .login-logo img[data-v-d09ebdf0]{height:35px;vertical-align:middle}.login .login-logo .shop-logo[data-v-d09ebdf0]{height:100px;width:100px;line-height:100px;border-radius:50%;display:block}.login .form[data-v-d09ebdf0]{margin:0 35px}.login .form .login-opt-txt[data-v-d09ebdf0]{color:#999;font-size:14px}.login .form .login-opt-icon[data-v-d09ebdf0]{color:#999;padding-left:2px}.login .form .opt[data-v-d09ebdf0]{text-align:center;margin-top:35px}.login .form .opt a[data-v-d09ebdf0]{color:#aaa}.login .form .input[data-v-d09ebdf0]{margin:20px 3px}.login .form .input table[data-v-d09ebdf0]{width:100%}.login .form .input th[data-v-d09ebdf0]{width:50px;font-weight:400;text-align:left}.login .form .input th i[data-v-d09ebdf0]{font-size:22px;color:#888}.login .form .input td[data-v-d09ebdf0],.login .form .input th[data-v-d09ebdf0]{padding:9px 5px;vertical-align:middle}.login .form .input tr[data-v-d09ebdf0]{border-bottom:1px solid #999}.login .form .input .in[data-v-d09ebdf0]{border:0;background:none;width:100%;display:block;outline:none;font-size:16px;height:32px;line-height:32px}.login .form .input[data-v-d09ebdf0] ::-moz-placeholder{color:#777}.login .form .input[data-v-d09ebdf0] ::-webkit-input-placeholder{color:#777}.login .form .input[data-v-d09ebdf0] :-ms-input-placeholder{color:#777}.login .form .submit[data-v-d09ebdf0]{margin-top:35px}.login .form .submit .login-btn[data-v-d09ebdf0]{height:40px;line-height:40px;font-size:14px;border-radius:20px;display:block;text-align:center;color:#fff}.login .form .submit .login-btn[data-v-d09ebdf0]:hover{font-weight:700}.login .foot[data-v-d09ebdf0]{position:fixed;bottom:0;color:#f2f2f2;font-size:11px;width:100%;text-align:center;padding-bottom:15px;z-index:10}.sel-tenant-shop[data-v-d09ebdf0]{padding:15px 0}.sel-tenant-shop li[data-v-d09ebdf0]{position:relative;display:block;padding:12px 10px;background:#f5f5f5;margin:10px 0;border-radius:3px;font-size:14px}.sel-tenant-shop li[data-v-d09ebdf0]:first-child{margin-top:0}.sel-tenant-shop li[data-v-d09ebdf0]:last-child{margin-bottom:0;border-bottom:0}.sel-tenant-shop li .icon-home[data-v-d09ebdf0]{padding-right:5px;font-size:16px}.sel-tenant-shop li .iconarrow-r[data-v-d09ebdf0]{position:absolute;right:8px;color:#aaa;font-size:13px}.sel-tenant-shop .logo[data-v-d09ebdf0]{width:150px}.login-authcode[data-v-d09ebdf0]{padding:10px 0 15px}.login-authcode input[type=text][data-v-d09ebdf0]{height:35px;padding:0 8px}.login-authcode .authcode-btn[data-v-d09ebdf0]{padding:8px 10px;margin-left:5px;border-radius:20px}.login-authcode .authcode-tips[data-v-d09ebdf0]{margin-left:5px;color:#777}.login-authcode .submit[data-v-d09ebdf0]{border-top:1px solid #eee;padding:20px 0 10px;margin-top:25px}.login-authcode .submit a.btn[data-v-d09ebdf0]{height:36px;line-height:36px;font-size:14px;background:#dbb76b;display:inline-block;text-align:center;color:#fff;width:100px;padding:0;margin-right:15px}.login-authcode .submit a.btn[data-v-d09ebdf0]:hover{font-weight:700}.dlg-close[data-v-d09ebdf0]{position:absolute;margin-top:-38px;right:20px;color:#777}.dlg-close i[data-v-d09ebdf0]{font-size:20px}.van-has-overlay[data-v-d09ebdf0]{width:calc(100% - 106px);height:max-content;left:50%;top:38%;transform:translate(-50%,-38%);border-radius:5px;text-align:center}.van-has-overlay.van-has-overlay-wid[data-v-d09ebdf0]{width:calc(100% - 60px);left:50%;top:38%;transform:translate(-50%,-38%)}.van-has-overlay .dlg-head[data-v-d09ebdf0]{margin-bottom:0;padding:15px 0;text-align:center;font-size:16px;font-weight:600}.van-has-overlay .dlg-cont[data-v-d09ebdf0]{padding:0 16px;text-align:left}.van-has-overlay .dlg-cont input[data-v-d09ebdf0]{display:inline-block;padding:6px 8px;width:calc(100% - 100px);border:1px solid #dadade}.van-has-overlay .ok[data-v-d09ebdf0]{padding:7px 20px 10px;color:#3478f6}.van-has-overlay .middle-btn[data-v-d09ebdf0]{margin:20px auto;padding:10px 0;width:calc(100% - 90px)}.theme-black .login[data-v-d09ebdf0]{color:#333}.theme-black .vant .van-dialog__footer[data-v-d09ebdf0]{border-bottom:0}.theme-black .dlg-cont[data-v-d09ebdf0],.theme-black .dlg-head[data-v-d09ebdf0]{background:#2c2c2c}.theme-black .sel-tenant-shop li[data-v-d09ebdf0]{background:#323232;color:#eee}.auto-login-help[data-v-d09ebdf0]{padding-top:40px}.pwd-view i.iconfont[data-v-d09ebdf0]{font-size:21px;color:#aaa}.pwd-view i.icon-visible[data-v-d09ebdf0]{color:#ff4500}", ""]);

// exports


/***/ }),

/***/ 1813:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".-style- .user-img[data-v-d31707e2]{margin-bottom:10px}.-style- .user-img img[data-v-d31707e2]{width:100%;display:block}.-style- .user[data-v-d31707e2]{padding:20px 0}.-style- .user .user-img-small[data-v-d31707e2]{text-align:center}.-style- .user .user-img-small img[data-v-d31707e2]{width:120px;height:120px;display:block;border-radius:50%;text-align:center;margin:0 auto}.-style- .user .upload[data-v-d31707e2]{margin:15px auto 0;padding:8px 0;text-align:center;line-height:1;border-radius:18px;width:100px}.-style- .user .upload a[data-v-d31707e2]{display:block;padding:6px 16px 8px;font-size:12px;color:#fff;border-radius:20px}.-style- .user .base[data-v-d31707e2]{margin:12px 10px}.-style- .user .base .tit[data-v-d31707e2]{font-size:16px;font-weight:700;line-height:1.6}.-style- .user .base .spt[data-v-d31707e2]{color:#2e90f7;padding:0 6px}.-style- .user .base .opt[data-v-d31707e2]{width:55px;text-align:right;line-height:1.6}.-style- .bmi0[data-v-d31707e2]{color:#4095e5}.-style- .bmi1[data-v-d31707e2]{color:#1aad19}.-style- .bmi2[data-v-d31707e2]{color:#f5b403}.-style- .bmi3[data-v-d31707e2]{color:#e00}.-style- .tblform th[data-v-d31707e2]{width:110px}.-style- .tblform .hd .tit[data-v-d31707e2]{padding:0 20px}.-style- .auth-list[data-v-d31707e2]{margin-bottom:15px;padding:12px 20px 0}.-style- .auth-list .icon-radio[data-v-d31707e2]{margin-right:4px;vertical-align:-2px}.-style- .auth-list[data-v-d31707e2]:last-child{border-top:1px solid #f6f6f6;padding-top:15px;padding-bottom:15px;margin-bottom:0}.-style- .auth-list li[data-v-d31707e2]{display:block;padding-bottom:15px}.-style- .auth-list li[data-v-d31707e2]:first-child{padding-top:0}.-style- .auth-list li[data-v-d31707e2]:last-child{border:0;padding-bottom:0}.-style- .auth-list label[data-v-d31707e2]{vertical-align:middle;padding:0}.-style- .auth-list input[type=checkbox][data-v-d31707e2]{position:relative;top:2px;margin-right:3px}.-style- .input-date[data-v-d31707e2]{height:32px;line-height:32px;width:100%;border:0;display:block;text-align:right;padding:0 5px}.-style- .lines-input[data-v-d31707e2]{margin:10px 16px}.-style- .lines-input textarea[data-v-d31707e2]{border:0;width:100%;-webkit-appearance:none}.img-list[data-v-d31707e2]{padding:10px 16px 5px}.img-list img[data-v-d31707e2]{width:95px;height:95px;padding:2px;margin:5px 6px}.big-photo[data-v-d31707e2]{display:block;margin:0 auto;padding:10px 0;max-width:100%}.del-photo[data-v-d31707e2]{margin-top:15px;margin-bottom:30px}.theme-black .-style- .auth-list[data-v-d31707e2]:last-child{border-top:1px solid #111}.new-card-nos[data-v-d31707e2]{padding:0 16px}.new-card-nos ul[data-v-d31707e2]{overflow:hidden;padding-bottom:16px;margin-bottom:-8px}.new-card-nos ul li[data-v-d31707e2]{float:left;margin-right:15px;margin-bottom:8px}.new-card-nos ul li .car-no[data-v-d31707e2]{font-size:13px;margin-right:4px;margin-top:4px}.new-card-nos ul li .car-no .iconfork[data-v-d31707e2]{font-size:12px;vertical-align:0;color:#ccc}", ""]);

// exports


/***/ }),

/***/ 1844:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1577);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("326546b2", content, true, {});

/***/ }),

/***/ 1906:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1639);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("18606c30", content, true, {});

/***/ }),

/***/ 1951:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1684);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("a1697796", content, true, {});

/***/ }),

/***/ 1998:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1731);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("10178f87", content, true, {});

/***/ }),

/***/ 2026:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1759);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("777cddbc", content, true, {});

/***/ }),

/***/ 2031:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1764);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("00a523be", content, true, {});

/***/ }),

/***/ 2036:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1769);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("a2584b40", content, true, {});

/***/ }),

/***/ 2078:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1811);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("edbfcdfa", content, true, {});

/***/ }),

/***/ 2080:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1813);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("49cf833e", content, true, {});

/***/ }),

/***/ 2192:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/reg-banner.d167ce1.png";

/***/ }),

/***/ 2241:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('chart', {
    staticClass: "chart",
    attrs: {
      "options": _vm.heartRateChartOption,
      "theme": "#fff"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2302:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-container"
  }, [_c('div', {
    staticClass: "banner"
  }, [_c('van-swipe', {
    staticStyle: {
      "height": "100%"
    },
    attrs: {
      "autoplay": 3000,
      "indicator-color": "rgba(255,255,255,0.8)"
    }
  }, _vm._l((_vm.images), function(image, index) {
    return _c('van-swipe-item', {
      key: index
    }, [_c('img', {
      attrs: {
        "src": image
      }
    })])
  }), 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "classify"
  }, [_c('ul', {
    staticClass: "row"
  }, [_vm._l((_vm.stratClassify), function(classes, idx) {
    return [_c('li', [_c('router-link', {
      staticClass: "col",
      attrs: {
        "to": classes.path
      }
    }, [_c('i', {
      staticClass: "iconfont",
      class: classes.icons
    }), _vm._v(" "), _c('div', {
      staticClass: "tit"
    }, [_vm._v(_vm._s(classes.tit))])])], 1)]
  })], 2)])])
},staticRenderFns: []}

/***/ }),

/***/ 2347:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "treg vant"
  }, [_c('page-head', {
    attrs: {
      "title": "商户注册"
    }
  }, [_vm._t("default", function() {
    return [_c('a', {
      staticClass: "theme-font-color",
      attrs: {
        "href": "tel:025-66045495"
      }
    }, [_vm._v("联系我们")])]
  })], 2), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('section', {
    ref: "tenantForm",
    staticClass: "tblform section-part"
  }, [_c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("商户名"), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('tenantName')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.tenantForm.tenantName),
      expression: "tenantForm.tenantName",
      modifiers: {
        "trim": true
      }
    }],
    attrs: {
      "placeholder": "请输入商户名或品牌名",
      "type": "text"
    },
    domProps: {
      "value": (_vm.tenantForm.tenantName)
    },
    on: {
      "blur": [function($event) {
        return _vm.checkValue('tenantName', '商户名')
      }, function($event) {
        return _vm.$forceUpdate()
      }],
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.tenantForm, "tenantName", $event.target.value.trim())
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("门店名称"), _c('i', {
    staticClass: "iconfont iconinfo theme-font-color tips-icon",
    on: {
      "click": function($event) {
        return _vm.showTipDlg('shopName')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.tenantForm.shopName),
      expression: "tenantForm.shopName",
      modifiers: {
        "trim": true
      }
    }],
    attrs: {
      "placeholder": "请输入门店名称",
      "type": "text"
    },
    domProps: {
      "value": (_vm.tenantForm.shopName)
    },
    on: {
      "blur": [function($event) {
        return _vm.checkValue('shopName', '门店名称')
      }, function($event) {
        return _vm.$forceUpdate()
      }],
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.tenantForm, "shopName", $event.target.value.trim())
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("门店类型")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('pull-down-list', {
    attrs: {
      "selectList": _vm.shopTypesArr,
      "selectId": "name",
      "changeId": "id"
    },
    model: {
      value: (_vm.tenantForm.shopType),
      callback: function($$v) {
        _vm.$set(_vm.tenantForm, "shopType", $$v)
      },
      expression: "tenantForm.shopType"
    }
  }, [_c('span', {
    attrs: {
      "slot": "dlgTit"
    },
    slot: "dlgTit"
  }, [_vm._v("门店类型")]), _vm._v(" "), _c('span', {
    staticClass: "font-color-c",
    attrs: {
      "slot": "pleaseChose"
    },
    slot: "pleaseChose"
  }, [_vm._v("请选择")])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("门店地址")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail add-list",
    staticStyle: {
      "padding": "0"
    }
  }, [_c('div', {
    staticClass: "select-list"
  }, [(_vm.tenantForm.addressLSelect[0].addressL) ? [_c('span', {
    staticClass: "font-color-c has-selected-add row",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.addLShowFunc(0)
      }
    }
  }, [_c('span', [_vm._v("省（直辖市） ")]), _c('i', {
    staticClass: "iconfont iconarrow-down-1"
  })])] : [_c('span', {
    staticClass: "has-selected-add row",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.addLShowFunc(0)
      }
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.tenantForm.addressLSelect[0].shopAddrLName))]), _c('i', {
    staticClass: "iconfont iconarrow-down-1"
  })])], _vm._v(" "), (_vm.tenantForm.addressLSelect[0].addressLShow) ? _c('ul', {
    staticClass: "shop-types"
  }, _vm._l((_vm.addrList[0]), function(name, id) {
    return _c('li', {
      key: name,
      on: {
        "click": function($event) {
          $event.stopPropagation();
          return _vm.onChangeAddrL(0, name, id)
        }
      }
    }, [_vm._v(_vm._s(name))])
  }), 0) : _vm._e()], 2), _vm._v(" "), _c('div', {
    staticClass: "select-list"
  }, [(_vm.tenantForm.addressLSelect[1].addressL) ? [_c('span', {
    staticClass: "font-color-c has-selected-add row",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.addLShowFunc(1)
      }
    }
  }, [_c('span', [_vm._v("地级市")]), _c('i', {
    staticClass: "iconfont iconarrow-down-1"
  })])] : [_c('span', {
    staticClass: "has-selected-add row",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.addLShowFunc(1)
      }
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.tenantForm.addressLSelect[1].shopAddrLName))]), _c('i', {
    staticClass: "iconfont iconarrow-down-1"
  })])], _vm._v(" "), (_vm.tenantForm.addressLSelect[1].addressLShow) ? _c('ul', {
    staticClass: "shop-types"
  }, _vm._l((_vm.addrList[1]), function(name, id) {
    return _c('li', {
      key: name,
      on: {
        "click": function($event) {
          $event.stopPropagation();
          return _vm.onChangeAddrL(1, name, id)
        }
      }
    }, [_vm._v(_vm._s(name))])
  }), 0) : _vm._e()], 2), _vm._v(" "), _c('div', {
    staticClass: "select-list"
  }, [(_vm.tenantForm.addressLSelect[2].addressL) ? [_c('span', {
    staticClass: "font-color-c has-selected-add row",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.addLShowFunc(2)
      }
    }
  }, [_c('span', [_vm._v("县级市（区）")]), _c('i', {
    staticClass: "iconfont iconarrow-down-1"
  })])] : [_c('span', {
    staticClass: "has-selected-add row",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.addLShowFunc(2)
      }
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.tenantForm.addressLSelect[2].shopAddrLName))]), _c('i', {
    staticClass: "iconfont iconarrow-down-1"
  })])], _vm._v(" "), (_vm.tenantForm.addressLSelect[2].addressLShow) ? _c('ul', {
    staticClass: "shop-types"
  }, [(JSON.stringify(_vm.addrList[2]) == '{}') ? [_c('li', [_vm._v("无匹配数据")])] : _vm._l((_vm.addrList[2]), function(name, id) {
    return _c('li', {
      key: name,
      on: {
        "click": function($event) {
          $event.stopPropagation();
          return _vm.onChangeAddrL(2, name, id)
        }
      }
    }, [_vm._v(_vm._s(name) + " ")])
  })], 2) : _vm._e()], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("详细地址")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.tenantForm.shopAddrDetail),
      expression: "tenantForm.shopAddrDetail",
      modifiers: {
        "trim": true
      }
    }],
    attrs: {
      "placeholder": "请输入街道和门牌号",
      "type": "text"
    },
    domProps: {
      "value": (_vm.tenantForm.shopAddrDetail)
    },
    on: {
      "blur": [function($event) {
        return _vm.checkValue('shopAddrDetail', '详细地址')
      }, function($event) {
        return _vm.$forceUpdate()
      }],
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.tenantForm, "shopAddrDetail", $event.target.value.trim())
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("姓名")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.tenantForm.uname),
      expression: "tenantForm.uname",
      modifiers: {
        "trim": true
      }
    }],
    attrs: {
      "placeholder": "请输入您的真实姓名",
      "type": "text"
    },
    domProps: {
      "value": (_vm.tenantForm.uname)
    },
    on: {
      "blur": [function($event) {
        return _vm.checkValue('uname', '姓名')
      }, function($event) {
        return _vm.$forceUpdate()
      }],
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.tenantForm, "uname", $event.target.value.trim())
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("手机号")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.tenantForm.phoneNo),
      expression: "tenantForm.phoneNo",
      modifiers: {
        "trim": true
      }
    }],
    attrs: {
      "placeholder": "请输入用于登录系统的手机号",
      "type": "number"
    },
    domProps: {
      "value": (_vm.tenantForm.phoneNo)
    },
    on: {
      "blur": [function($event) {
        return _vm.checkValue('phoneNo', '手机号')
      }, function($event) {
        return _vm.$forceUpdate()
      }],
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.tenantForm, "phoneNo", $event.target.value.trim())
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("短信验证码")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail",
    staticStyle: {
      "position": "relative"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.tenantForm.smsAuthcode),
      expression: "tenantForm.smsAuthcode",
      modifiers: {
        "number": true
      }
    }],
    attrs: {
      "placeholder": "手机短信验证码",
      "type": "text"
    },
    domProps: {
      "value": (_vm.tenantForm.smsAuthcode)
    },
    on: {
      "blur": [function($event) {
        return _vm.checkValue('smsAuthcode', '短信验证码')
      }, function($event) {
        return _vm.$forceUpdate()
      }],
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.tenantForm, "smsAuthcode", _vm._n($event.target.value))
      }
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "position": "absolute",
      "right": "2px",
      "top": "0px",
      "color": "#2E90F7"
    },
    on: {
      "click": function($event) {
        return _vm.onClickSmsAuthcodeBtn()
      }
    }
  }, [_vm._v(_vm._s(_vm.authcodeLabel))])])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("登录密码设置")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.tenantForm.password),
      expression: "tenantForm.password",
      modifiers: {
        "trim": true
      }
    }],
    attrs: {
      "placeholder": "请设置至少6位密码",
      "type": "password"
    },
    domProps: {
      "value": (_vm.tenantForm.password)
    },
    on: {
      "blur": [function($event) {
        return _vm.checkPassword()
      }, function($event) {
        return _vm.$forceUpdate()
      }],
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.tenantForm, "password", $event.target.value.trim())
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("确认密码")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.tenantForm.passwordCheck),
      expression: "tenantForm.passwordCheck",
      modifiers: {
        "trim": true
      }
    }],
    attrs: {
      "placeholder": "请重复上面的密码",
      "type": "password"
    },
    domProps: {
      "value": (_vm.tenantForm.passwordCheck)
    },
    on: {
      "blur": [function($event) {
        return _vm.checkRepeatPassWord()
      }, function($event) {
        return _vm.$forceUpdate()
      }],
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.tenantForm, "passwordCheck", $event.target.value.trim())
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "btn theme-btn-bg largest-btn",
    on: {
      "click": _vm.onClickSubmitBtn
    }
  }, [_vm._v("提交注册")]), _vm._v(" "), (_vm.dlgView.showTips) ? _c('van-dialog', {
    staticClass: "van-has-overlay visible-close section-part",
    attrs: {
      "show-confirm-button": false,
      "show-cancel-button": false
    },
    model: {
      value: (_vm.dlgView.showTips),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "showTips", $$v)
      },
      expression: "dlgView.showTips"
    }
  }, [_c('div', {
    staticClass: "dlg-head"
  }, [_vm._v("提示")]), _vm._v(" "), _c('div', {
    staticClass: "dlg-cont",
    domProps: {
      "innerHTML": _vm._s(_vm.tipsCont)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "btn theme-btn-bg middle-btn",
    on: {
      "click": function($event) {
        _vm.dlgView.showTips = false
      }
    }
  }, [_vm._v("好的")])]) : _vm._e()], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "banner section-part"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(2192)
    }
  })])
}]}

/***/ }),

/***/ 2392:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wx-login-for-pc"
  }, [_c('div', {
    ref: "wxTopRefs",
    staticClass: "w-l-top",
    staticStyle: {
      "height": "calc(100vh - 70px)"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "w-l-msg"
  }, [_vm._v("该网页由健总管开发，向其授权登录")]), _vm._v(" "), _c('button', {
    staticClass: "w-l-btn",
    attrs: {
      "disabled": _vm.isFirstLogin
    },
    on: {
      "click": _vm.loginWx
    }
  }, [_vm._v("确认授权登录")])]), _vm._v(" "), (_vm.isFirstLogin) ? _c('div', {
    ref: "wxFormRefs",
    staticClass: "w-l-form"
  }, [_c('span', [_vm._v("首次扫码登录，请输入健总管账号与密码")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.loginInfo.phoneNo),
      expression: "loginInfo.phoneNo"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入手机号"
    },
    domProps: {
      "value": (_vm.loginInfo.phoneNo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.loginInfo, "phoneNo", $event.target.value)
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.loginInfo.password),
      expression: "loginInfo.password"
    }],
    attrs: {
      "type": "password",
      "placeholder": "请输入密码"
    },
    domProps: {
      "value": (_vm.loginInfo.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.loginInfo, "password", $event.target.value)
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "w-l-btn",
    on: {
      "click": _vm.bindWeChat
    }
  }, [_vm._v("确认")])]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "w-l-icon"
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "/static/img/wx-icon.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('i', {
    staticClass: "iconfont iconzuoyoujiantou"
  }), _vm._v(" "), _c('div', [_c('img', {
    attrs: {
      "src": "/static/img/jzg-icon.png",
      "alt": ""
    }
  })])])
}]}

/***/ }),

/***/ 2393:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("\n  wx-\n")])
},staticRenderFns: []}

/***/ }),

/***/ 2420:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "user-reg"
  }, [_c('div', {
    staticClass: "page-head mb-15"
  }, [_vm._v("\n    密码设置\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "form"
  }, [_c('div', {
    staticClass: "input"
  }, [_c('ul', [_c('li', [_c('mu-text-field', {
    attrs: {
      "hintText": "手机号",
      "hintTextClass": "login-opt-txt",
      "type": "tel",
      "icon": "phone_android",
      "fullWidth": true,
      "underlineShow": false
    },
    model: {
      value: (_vm.userForm.phoneNo),
      callback: function($$v) {
        _vm.$set(_vm.userForm, "phoneNo", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "userForm.phoneNo"
    }
  })], 1), _vm._v(" "), _c('li', [_c('mu-text-field', {
    attrs: {
      "hintText": "密码（至少6位）",
      "hintTextClass": "login-opt-txt",
      "type": "password",
      "icon": "lock",
      "fullWidth": true,
      "underlineShow": false
    },
    model: {
      value: (_vm.userForm.password),
      callback: function($$v) {
        _vm.$set(_vm.userForm, "password", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "userForm.password"
    }
  })], 1), _vm._v(" "), _c('li', [_c('mu-text-field', {
    attrs: {
      "hintText": "密码确认",
      "hintTextClass": "login-opt-txt",
      "type": "password",
      "icon": "lock",
      "fullWidth": true,
      "underlineShow": false
    },
    model: {
      value: (_vm.userForm.passwordCheck),
      callback: function($$v) {
        _vm.$set(_vm.userForm, "passwordCheck", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "userForm.passwordCheck"
    }
  })], 1), _vm._v(" "), _c('li', [_c('table', {
    attrs: {
      "width": "100%",
      "cellpadding": "0",
      "cellspacing": "0"
    }
  }, [_c('tr', [_c('td', [_c('div', [_c('mu-text-field', {
    attrs: {
      "hintText": "短信验证码",
      "hintTextClass": "login-opt-txt",
      "type": "number",
      "icon": "verified_user",
      "fullWidth": true,
      "underlineShow": false
    },
    model: {
      value: (_vm.userForm.smsAuthcode),
      callback: function($$v) {
        _vm.$set(_vm.userForm, "smsAuthcode", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "userForm.smsAuthcode"
    }
  })], 1)]), _vm._v(" "), _c('td', {
    staticClass: "authcode"
  }, [_c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.authcodeDisabled),
      expression: "!authcodeDisabled"
    }],
    staticClass: "mybtn authcode-btn",
    on: {
      "click": _vm.onClickSmsAuthcodeBtn
    }
  }, [_vm._v("\n                " + _vm._s(_vm.authcodeLabel) + "\n              ")]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.authcodeDisabled),
      expression: "authcodeDisabled"
    }],
    staticClass: "gray"
  }, [_vm._v(_vm._s(_vm.authcodeLabel))])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "largest-btn theme-btn-bg mt-20",
    staticStyle: {
      "width": "100%",
      "margin": "25px 0"
    },
    on: {
      "click": _vm.onClickSubmitBtn
    }
  }, [_vm._v("\n      提交\n    ")]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "foot"
  }, [_vm._v("\n    由『健总管』提供技术支持\n  ")])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "largest-btn theme-btn-bor",
    staticStyle: {
      "width": "100%"
    }
  }, [_c('a', {
    staticClass: "theme-font-color",
    staticStyle: {
      "display": "block",
      "width": "100%"
    },
    attrs: {
      "href": "#/user-login"
    }
  }, [_vm._v("用户登录")])])
}]}

/***/ }),

/***/ 2425:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hello"
  }, [_vm._v("\n  Hello, JZG\n")])
},staticRenderFns: []}

/***/ }),

/***/ 2430:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('button', {
    on: {
      "click": _vm.test
    }
  }, [_vm._v("Test")]), _vm._v(" "), (_vm.imgUrl) ? _c('p', {
    staticClass: "center"
  }, [_c('img', {
    attrs: {
      "src": _vm.imgUrl
    }
  })]) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 2473:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login",
    style: ('background: url(' + _vm.g.data.misc.loginBgUrl + ') no-repeat fixed center; background-size: 100% 100%;')
  }, [(_vm.displayForm) ? _c('div', [(_vm.loginLoading) ? _c('div', {
    staticClass: "login-loading"
  }, [_vm._v("\n      健总管自动登录中 ...\n      "), (_vm.showStopAutoLogin) ? _c('div', {
    staticClass: "auto-login-help"
  }, [_c('a', {
    on: {
      "click": _vm.stopAutoLogin
    }
  }, [_vm._v("停止自动登录")]), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("或")]), _vm._v(" "), _c('a', {
    on: {
      "click": _vm.reload
    }
  }, [_vm._v("点击刷新")])]) : _vm._e()]) : [_c('div', {
    staticClass: "login-logo"
  }, [(_vm.loginHeadImgUrl) ? _c('img', {
    staticClass: "shop-logo",
    attrs: {
      "src": _vm.loginHeadImgUrl
    }
  }) : _c('img', {
    attrs: {
      "src": "/static/img/default-photo.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form"
  }, [_c('div', {
    staticClass: "input"
  }, [_c('table', [_c('tr', [_vm._m(0), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.user.phoneNo),
      expression: "user.phoneNo",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "in",
    attrs: {
      "type": "tel",
      "placeholder": "请输入登录手机号"
    },
    domProps: {
      "value": (_vm.user.phoneNo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.user, "phoneNo", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])]), _vm._v(" "), _c('tr', [_vm._m(1), _vm._v(" "), _c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.user.password),
      expression: "user.password",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "in",
    attrs: {
      "type": _vm.passwordType,
      "placeholder": "请输入登录密码"
    },
    domProps: {
      "value": (_vm.user.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.user, "password", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('td', {
    staticClass: "pwd-view",
    attrs: {
      "width": "35"
    }
  }, [(_vm.passwordType === 'text') ? _c('i', {
    staticClass: "iconfont icon-visible",
    on: {
      "click": _vm.changePasswordType
    }
  }) : (_vm.passwordType === 'password') ? _c('i', {
    staticClass: "iconfont icon-invisible",
    on: {
      "click": _vm.changePasswordType
    }
  }) : _vm._e()])])])]), _vm._v(" "), _c('div', {
    staticClass: "submit"
  }, [_c('a', {
    staticClass: "login-btn theme-btn-bg",
    on: {
      "click": _vm.handleLogin
    }
  }, [_vm._v("登录")])]), _vm._v(" "), _vm._m(2)])]], 2) : _c('div', [_vm._m(3)]), _vm._v(" "), _c('div', {
    staticClass: "foot"
  }, [_vm._v("\n    由『健总管』提供技术支持"), _c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v(" "), _c('a', {
    staticClass: "small",
    on: {
      "click": function($event) {
        _vm.regTipsDlg = true
      }
    }
  }, [_vm._v("注册咨询")])]), _vm._v(" "), _c('div', {
    staticClass: "vant"
  }, [(_vm.tenantListDlg) ? _c('van-dialog', {
    staticClass: "van-has-overlay checkin-success section-part",
    attrs: {
      "show-cancel-button": true,
      "show-confirm-button": false,
      "cancelButtonText": "关闭"
    },
    on: {
      "cancel": function($event) {
        return _vm.closeTenantSelect()
      }
    },
    model: {
      value: (_vm.tenantListDlg),
      callback: function($$v) {
        _vm.tenantListDlg = $$v
      },
      expression: "tenantListDlg"
    }
  }, [_c('div', {
    staticClass: "dlg-head theme-bg"
  }, [_vm._v("请选择一个商户")]), _vm._v(" "), _c('div', {
    staticClass: "dlg-cont theme-bg"
  }, [_c('ul', {
    staticClass: "sel-tenant-shop"
  }, _vm._l((_vm.tenantList), function(t) {
    return _c('li', {
      on: {
        "click": function($event) {
          return _vm.loginWithTenant(t.encTid)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont iconhome"
    }), _vm._v(" " + _vm._s(t.tenantName)), _c('i', {
      staticClass: "iconfont iconarrow-r small"
    })])
  }), 0)])]) : _vm._e(), _vm._v(" "), (_vm.shopListDlg) ? _c('van-dialog', {
    staticClass: "van-has-overlay van-has-overlay-wid checkin-success section-part",
    attrs: {
      "show-cancel-button": true,
      "show-confirm-button": false,
      "cancelButtonText": "关闭"
    },
    on: {
      "cancel": function($event) {
        return _vm.closeShopSelect()
      }
    },
    model: {
      value: (_vm.shopListDlg),
      callback: function($$v) {
        _vm.shopListDlg = $$v
      },
      expression: "shopListDlg"
    }
  }, [_c('div', {
    staticClass: "dlg-head theme-bg",
    staticStyle: {
      "padding-bottom": "0"
    }
  }, [_vm._v("请选择一个门店")]), _vm._v(" "), _c('div', {
    staticClass: "dlg-cont theme-bg"
  }, [_c('ul', {
    staticClass: "sel-tenant-shop"
  }, _vm._l((_vm.shopList), function(t) {
    return _c('li', {
      on: {
        "click": function($event) {
          return _vm.loginWithShop(t.encTid, t.encSid)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont iconhome"
    }), _vm._v(" " + _vm._s(t.shopName)), _c('i', {
      staticClass: "iconfont iconarrow-r small"
    })])
  }), 0)])]) : _vm._e(), _vm._v(" "), (_vm.loginSelectDlg) ? _c('van-dialog', {
    staticClass: "van-has-overlay checkin-success section-part show-close",
    attrs: {
      "show-confirm-button": true,
      "show-cancel-button": true,
      "cancelButtonText": "会员登录",
      "confirmButtonText": "商家登录"
    },
    on: {
      "confirm": function($event) {
        return _vm.loginSelect('staff')
      },
      "cancel": function($event) {
        return _vm.loginSelect('member')
      }
    },
    model: {
      value: (_vm.loginSelectDlg),
      callback: function($$v) {
        _vm.loginSelectDlg = $$v
      },
      expression: "loginSelectDlg"
    }
  }, [_c('div', {
    staticClass: "dlg-head theme-bg"
  }, [_vm._v("登录选择")]), _vm._v(" "), _c('div', {
    staticClass: "dlg-cont theme-bg"
  }, [_c('div', {
    staticStyle: {
      "padding": "0px 20px 10px 20px",
      "line-height": "2"
    }
  }, [_vm._v("您在该门店有两种身份，请选择一种身份登录。")])])]) : _vm._e(), _vm._v(" "), (_vm.loginAuthcodeDlg) ? _c('van-dialog', {
    staticClass: "van-has-overlay checkin-success section-part",
    attrs: {
      "show-cancel-button": false,
      "show-confirm-button": false
    },
    model: {
      value: (_vm.loginAuthcodeDlg),
      callback: function($$v) {
        _vm.loginAuthcodeDlg = $$v
      },
      expression: "loginAuthcodeDlg"
    }
  }, [_c('div', {
    staticClass: "dlg-head theme-bg"
  }, [_vm._v("登录短信验证码校验")]), _vm._v(" "), _c('div', {
    staticClass: "dlg-cont theme-bg mb-10"
  }, [_c('div', {
    staticClass: "login-authcode"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.loginAuthcode),
      expression: "loginAuthcode"
    }],
    attrs: {
      "type": "text",
      "placeholder": "短信验证码"
    },
    domProps: {
      "value": (_vm.loginAuthcode)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.loginAuthcode = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.authcodeDisabled),
      expression: "!authcodeDisabled"
    }],
    staticClass: "theme-btn-bor authcode-btn",
    on: {
      "click": _vm.onClickSmsAuthcodeBtn
    }
  }, [_vm._v(" " + _vm._s(_vm.authcodeLabel))]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.authcodeDisabled),
      expression: "authcodeDisabled"
    }],
    staticClass: "authcode-tips authcode-btn"
  }, [_vm._v(_vm._s(_vm.authcodeLabel))])])]), _vm._v(" "), _c('div', {
    staticClass: "theme-btn-bg largest-btn mb-20",
    on: {
      "click": _vm.checkLogonAuthcode
    }
  }, [_vm._v("确定")]), _vm._v(" "), _c('p', {
    staticClass: "center"
  }, [_c('a', {
    on: {
      "click": function($event) {
        _vm.loginAuthcodeDlg = false
      }
    }
  }, [_vm._v("关闭")])])]) : _vm._e(), _vm._v(" "), (_vm.regTipsDlg) ? _c('van-dialog', {
    staticClass: "van-has-overlay van-has-overlay-wid section-part",
    attrs: {
      "show-cancel-button": true,
      "show-confirm-button": false,
      "cancelButtonText": "关闭"
    },
    model: {
      value: (_vm.regTipsDlg),
      callback: function($$v) {
        _vm.regTipsDlg = $$v
      },
      expression: "regTipsDlg"
    }
  }, [_c('div', {
    staticClass: "dlg-head theme-bg"
  }, [_vm._v("系统注册使用咨询")]), _vm._v(" "), _c('div', {
    staticClass: "dlg-cont theme-bg"
  }, [_c('div', {
    staticStyle: {
      "line-height": "2",
      "padding": "0 0 10px 0"
    }
  }, [_vm._v("\n          手机版专为场馆员工和会员使用，必须登录才能进入系统；员工可用于日常工作管理，会员可用于查看个人信息（会员卡、课程等）以及约课、在线购卡等。\n          "), _c('p', [_vm._v("\n            如需注册使用，请联系您所在的场馆工作人员，或者联系我们系统方（健总管）售后人员协助您处理\n            "), (_vm.isInWxMiniProgram) ? [_vm._v("（"), _c('a', {
    attrs: {
      "href": "tel:025-66045495"
    }
  }, [_vm._v("025-66045495")]), _vm._v("）")] : _vm._e()], 2)])])]) : _vm._e()], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('th', [_c('i', {
    staticClass: "iconfont iconphone"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('th', [_c('i', {
    staticClass: "iconfont iconpassword"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "opt"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#/user-pwd-set"
    }
  }, [_vm._v("密码设置")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "center gray",
    staticStyle: {
      "margin-top": "100px",
      "font-size": "24px"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/img/loading.gif"
    }
  })])
}]}

/***/ }),

/***/ 2475:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style- vant"
  }, [_c('page-head', {
    attrs: {
      "title": _vm.g.data.user.uname
    }
  }), _vm._v(" "), (_vm.canUploadMemberPhoto || (_vm.staff && _vm.g.data.user.uid === _vm.staff.uid) || _vm.photoUrl) ? _c('section', {
    staticClass: "user"
  }, [(_vm.photoUrl) ? _c('div', {
    staticClass: "user-img-small"
  }, [_c('img', {
    attrs: {
      "src": _vm.photoUrl
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.canUploadMemberPhoto || (_vm.staff && _vm.g.data.user.uid === _vm.staff.uid)) ? _c('div', {
    staticClass: "upload"
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "show-thumb": false,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccess,
      "seeBigImg": _vm.seeBigImg
    }
  }, [_c('a', {
    staticClass: "theme-btn-bg btn"
  }, [_vm._v("更换头像")])])], 1) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.member && _vm.memberId) ? _c('section', {
    staticClass: "tblform",
    staticStyle: {
      "margin-bottom": "0"
    }
  }, [(_vm.member.idNo) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("身份证号")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v(_vm._s(_vm.member.idNo))])]) : _vm._e(), _vm._v(" "), (_vm.member.cardNo) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("会员卡号")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v(_vm._s(_vm.member.cardNo))])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("出生日期")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('div', {
    staticClass: "row align-center",
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.showInputDlg('birthday')
      }
    }
  }, [(!_vm.member.idNo) ? [_c('span', [_vm._v(_vm._s(_vm.member.birthday))])] : [_c('span', {
    staticClass: "font-color-c"
  }, [_vm._v("请选择日期")])], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c"
  })], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("身高(CM)")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.member.height),
      expression: "member.height"
    }],
    attrs: {
      "type": "number",
      "min": "100",
      "placeholder": "请输入身高（厘米）"
    },
    domProps: {
      "value": (_vm.member.height)
    },
    on: {
      "change": function($event) {
        return _vm.handleCaclBmi()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.member, "height", $event.target.value)
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("体重(KG)")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.member.weight),
      expression: "member.weight"
    }],
    attrs: {
      "type": "number",
      "placeholder": "请如实输入体重，我们保密"
    },
    domProps: {
      "value": (_vm.member.weight)
    },
    on: {
      "change": function($event) {
        return _vm.handleCaclBmi()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.member, "weight", $event.target.value)
      }
    }
  })])]), _vm._v(" "), (_vm.member.bmi) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("BMI")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v("\n        " + _vm._s(_vm.member.bmi) + "   ( "), _c('span', {
    class: 'bmi' + _vm.bmiLevel
  }, [_vm._v(_vm._s(_vm.bmiDesc))]), _vm._v(" )\n      ")])]) : _vm._e(), _vm._v(" "), (_vm.member.fencingType) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("剑种")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v(_vm._s(_vm.g.Dict.FencingTypeName[_vm.member.fencingType]))])]) : _vm._e(), _vm._v(" "), (_vm.member.fencingLevel) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("组别")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v(_vm._s(_vm.g.Dict.FencingLevelName[_vm.member.fencingLevel]))])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("销售")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v(_vm._s(_vm.member.salesName))])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("教练")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v(_vm._s(_vm.member.coachName))])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("会籍顾问")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_vm._v(_vm._s(_vm.member.advisorName))])]), _vm._v(" "), _c('div', {
    class: {
      'theme-border-bottom': _vm.memberCarNoArr.length !== 0
    }
  }, [_c('div', {
    staticClass: "row align-center",
    class: {
      'theme-border-bottom': _vm.memberCarNoArr.length == 0
    }
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("车牌号")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail card-class",
    on: {
      "click": _vm.appendCarNo
    }
  }, [_c('div', {
    staticClass: "theme-font-color"
  }, [_vm._v("+ 添加车牌号")])])]), _vm._v(" "), (_vm.memberCarNoArr.length > 0) ? _c('div', {
    staticClass: "new-card-nos"
  }, [_c('ul', [_vm._l((_vm.memberCarNoArr), function(cn, idx) {
    return [_c('li', [_c('span', {
      staticClass: "car-no"
    }, [_vm._v(" " + _vm._s(cn) + " "), _c('i', {
      staticClass: "iconfont iconfork",
      on: {
        "click": function($event) {
          return _vm.removeCarNo(cn)
        }
      }
    })])])]
  })], 2)]) : _vm._e()])]) : _vm._e(), _vm._v(" "), (_vm.member && _vm.memberId) ? _c('section', {
    staticClass: "tblform"
  }, [_vm._m(0), _vm._v(" "), _c('ul', {
    staticClass: "auth-list multi-create"
  }, [_c('li', {
    on: {
      "click": function($event) {
        _vm.member.authEntryCheckin = !_vm.member.authEntryCheckin
      }
    }
  }, [_c('span', {
    staticClass: "multi-create-check",
    class: {
      'multi-create-check1': _vm.member.authEntryCheckin
    }
  }, [_c('i', {
    staticClass: "iconfont",
    class: {
      'iconcheck0': _vm.member.authEntryCheckin
    }
  })]), _vm._v("\n         允许门店代签入场签到\n      ")]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        _vm.member.authGroupLessonCheckin = !_vm.member.authGroupLessonCheckin
      }
    }
  }, [_c('span', {
    staticClass: "multi-create-check",
    class: {
      'multi-create-check1': _vm.member.authGroupLessonCheckin
    }
  }, [_c('i', {
    staticClass: "iconfont",
    class: {
      'iconcheck0': _vm.member.authGroupLessonCheckin
    }
  })]), _vm._v("\n        允许门店代签团课签到\n      ")]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        _vm.member.authCardPayment = !_vm.member.authCardPayment
      }
    }
  }, [_c('span', {
    staticClass: "multi-create-check",
    class: {
      'multi-create-check1': _vm.member.authCardPayment
    }
  }, [_c('i', {
    staticClass: "iconfont",
    class: {
      'iconcheck0': _vm.member.authCardPayment
    }
  })]), _vm._v("\n       允许门店用储值卡结算商品时免输密码\n      ")])]), _vm._v(" "), _vm._m(1)]) : _vm._e(), _vm._v(" "), (_vm.staffId && _vm.staff) ? [_c('section', {
    staticClass: "tblform",
    staticStyle: {
      "padding": "0"
    }
  }, [_c('table', [(_vm.staff.roleNameList && _vm.staff.roleNameList.length > 0) ? _c('tr', [_c('th', [_vm._v("角色")]), _c('td', [_vm._v(_vm._s(_vm.staff.roleNameList.join(" + ")))])]) : _vm._e(), _vm._v(" "), (_vm.staff.inVacation) ? _c('tr', [_c('th', [_vm._v("请假日期")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(_vm.staff.vacationBegin)) + " ~ " + _vm._s(_vm.g.Util.formatDate(_vm.staff.vacationEnd)))])]) : _vm._e(), _vm._v(" "), (_vm.staff && _vm.staff.isCoach && _vm.coach) ? _c('tr', [_c('th', [_vm._v("教练类型")]), _vm._v(" "), _c('td', [(_vm.coach.isGroupCoach) ? _c('span', [_vm._v("团课教练")]) : _vm._e(), _vm._v(" "), (_vm.coach.isGroupCoach && _vm.coach.isPrivateCoach) ? _c('span', [_vm._v("+")]) : _vm._e(), _vm._v(" "), (_vm.coach.isPrivateCoach) ? _c('span', [_vm._v("私人教练 ")]) : _vm._e()])]) : _vm._e()])]), _vm._v(" "), (_vm.coach) ? _c('section', [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "lines-input"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.coach.sign),
      expression: "coach.sign"
    }],
    attrs: {
      "rows": "3",
      "placeholder": "一句话表明一下自己的个性"
    },
    domProps: {
      "value": (_vm.coach.sign)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.coach, "sign", $event.target.value)
      }
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.coach) ? _c('section', [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "lines-input"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.staff.intro),
      expression: "staff.intro"
    }],
    attrs: {
      "rows": "10",
      "placeholder": "详细描述一下自己"
    },
    domProps: {
      "value": (_vm.staff.intro)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.staff, "intro", $event.target.value)
      }
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.coach) ? _c('section', [_c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("个人相册")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "show-thumb": false,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleCoachPhotoImgUploadSuccess
    }
  }, [_c('a', [_vm._v("上传")])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "img-list"
  }, _vm._l((_vm.coachImgList), function(i) {
    return (i.imgType === 0) ? _c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(i.imgPath, 300, 300, 'ffffff')
      },
      on: {
        "click": function($event) {
          return _vm.openImg(i.imgId, i.imgPath)
        }
      }
    }) : _vm._e()
  }), 0)]) : _vm._e(), _vm._v(" "), (_vm.coach) ? _c('section', [_c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("资格证书")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "show-thumb": false,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleCoachCertImgUploadSuccess
    }
  }, [_c('a', [_vm._v("上传")])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "img-list"
  }, _vm._l((_vm.coachImgList), function(i) {
    return (i.imgType === 1) ? _c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(i.imgPath, 300, 300, 'ffffff')
      },
      on: {
        "click": function($event) {
          return _vm.openImg(i.imgId, i.imgPath)
        }
      }
    }) : _vm._e()
  }), 0)]) : _vm._e(), _vm._v(" "), (_vm.coach) ? _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "l tit"
  }, [_vm._v("教练视频")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('a', {
    on: {
      "click": _vm.submitCoachVideoUrl
    }
  }, [_vm._v("上传腾讯视频链接")])])]), _vm._v(" "), (_vm.coach.videoId) ? _c('div', {
    staticClass: "video"
  }, [_c('iframe', {
    staticStyle: {
      "border": "1px solid #eee"
    },
    attrs: {
      "src": '//v.qq.com/txp/iframe/player.html?vid=' + _vm.coach.videoId,
      "allowFullScreen": "true",
      "width": "100%",
      "height": _vm.videoHeight
    }
  })]) : _vm._e()]) : _vm._e()] : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "theme-btn-bg largest-btn del-photo",
    on: {
      "click": function($event) {
        return _vm.handleSave()
      }
    }
  }, [_vm._v("保存")]), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "menu": "my"
    }
  }), _vm._v(" "), _c('van-popup', {
    style: ({
      height: '100%',
      width: '100%'
    }),
    attrs: {
      "position": "right"
    },
    model: {
      value: (_vm.imgPopup),
      callback: function($$v) {
        _vm.imgPopup = $$v
      },
      expression: "imgPopup"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move",
    on: {
      "click": function($event) {
        _vm.imgPopup = false
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })]), _vm._v("\n      图片查看\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "section-part"
  }, [_c('img', {
    staticClass: "big-photo",
    attrs: {
      "src": _vm.selectImg
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "largest-btn theme-btn-bg del-photo",
    on: {
      "click": function($event) {
        return _vm.deleteImg()
      }
    }
  }, [_vm._v("删除")])]), _vm._v(" "), _c('div', {
    staticClass: "vant"
  }, [_c('van-action-sheet', {
    attrs: {
      "close-on-click-overlay": false
    },
    model: {
      value: (_vm.dlgView.inputShow),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "inputShow", $$v)
      },
      expression: "dlgView.inputShow"
    }
  }, [(_vm.checkDlgViewName == 'birthday') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "title": "选择年月日",
      "min-date": _vm.minDate,
      "max-date": _vm.maxDate,
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": function($event) {
        return _vm.confirmDatePiker('birthday')
      },
      "cancel": function($event) {
        _vm.dlgView.inputShow = false
      }
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  })] : _vm._e()], 2), _vm._v(" "), (_vm.dlgView.carNo) ? _c('van-dialog', {
    staticClass: "van-has-overlay section-part show-close",
    staticStyle: {
      "overflow": "visible"
    },
    attrs: {
      "show-confirm-button": false
    },
    model: {
      value: (_vm.dlgView.carNo),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "carNo", $$v)
      },
      expression: "dlgView.carNo"
    }
  }, [_c('div', {
    staticClass: "dlg-head"
  }, [_vm._v("添加车牌号")]), _vm._v(" "), _c('div', {
    staticClass: "dlg-cont"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newCardNo),
      expression: "newCardNo"
    }],
    attrs: {
      "placeholder": "请输入添加的车牌号",
      "type": "text"
    },
    domProps: {
      "value": (_vm.newCardNo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newCardNo = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "btn theme-btn-bg middle-btn",
    on: {
      "click": _vm.surrAddCarNo
    }
  }, [_vm._v("确定")]), _vm._v(" "), _c('div', {
    staticClass: "close-dlg"
  }, [_c('i', {
    staticClass: "iconfont iconfork",
    on: {
      "click": function($event) {
        _vm.dlgView.carNo = false
      }
    }
  })])]) : _vm._e()], 1)], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-border-bottom",
    staticStyle: {
      "padding": "0"
    }
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("授权设置")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "auth-list"
  }, [_c('span', {
    staticClass: "theme-font-color medium"
  }, [_c('i', {
    staticClass: "iconfont iconTips small"
  }), _vm._v(" 以上操作，如不授权，需输入会员登录密码")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("个性签名")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("个人介绍")])])
}]}

/***/ }),

/***/ 808:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2031)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1358),
  /* template */
  __webpack_require__(2425),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7ef7e2bf",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1844)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1405),
  /* template */
  __webpack_require__(2241),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-00361c23",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2036)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1461),
  /* template */
  __webpack_require__(2430),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-835022d8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1906)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1525),
  /* template */
  __webpack_require__(2302),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-302f364f",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1951)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1563),
  /* template */
  __webpack_require__(2347),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-46f5483a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2078)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1566),
  /* template */
  __webpack_require__(2473),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-d09ebdf0",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2080)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1567),
  /* template */
  __webpack_require__(2475),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-d31707e2",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2026)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1568),
  /* template */
  __webpack_require__(2420),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1569),
  /* template */
  __webpack_require__(2393),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1998)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1574),
  /* template */
  __webpack_require__(2392),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-65a0a8f4",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1007)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1005),
  /* template */
  __webpack_require__(1009),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = upload;
/**
 * Created by zxl on 2017/5/13.
 */
function getError(action, option, xhr) {
	const msg = `fail to post ${action} ${xhr.status}'`;
	const err = new Error(msg);
	err.status = xhr.status;
	err.method = 'post';
	err.url = action;
	return err;
}

function getBody(xhr) {
	const text = xhr.responseText || xhr.response;
	if (!text) {
		return text;
	}

	try {
		return JSON.parse(text);
	} catch (e) {
		return text;
	}
}

function upload(option) {
	if (typeof XMLHttpRequest === 'undefined') {
		return;
	}

	const xhr = new XMLHttpRequest();
	const action = option.action;

	if (xhr.upload) {
		xhr.upload.onprogress = function progress(e) {
			if (e.total > 0) {
				e.percent = e.loaded / e.total * 100;
			}
			option.onProgress(e);
		};
	}
	/*
 const formData = new FormData();
 if (option.data) {
 	Object.keys(option.data).map(key => {
 		formData.append(key, option.data[key]);
 	});
 }
 formData.append(option.filename, option.file);
 */
	xhr.onerror = function error(e) {
		option.onError(e);
	};

	xhr.onload = function onload() {
		if (xhr.status < 200 || xhr.status >= 300) {
			return option.onError(getError(action, option, xhr), getBody(xhr));
		}

		option.onSuccess(getBody(xhr));
	};

	xhr.open('post', action, true);

	//if (option.withCredentials && 'withCredentials' in xhr) {
	xhr.withCredentials = true;
	//}

	const headers = option.headers || {};

	// if (headers['X-Requested-With'] !== null) {
	//   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	// }

	for (let item in headers) {
		if (headers.hasOwnProperty(item) && headers[item] !== null) {
			xhr.setRequestHeader(item, headers[item]);
		}
	}
	xhr.send(option.formData);
}

/***/ })

});