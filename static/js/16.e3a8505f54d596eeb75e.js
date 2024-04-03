webpackJsonp([16],{

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

/***/ 1562:
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: { ImgUpload: __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue___default.a },

  data() {
    return {
      tenant: {},
      imgUpload: {
        action: $.Conf.IMG_UPLOAD_URL,
        imgMaxWidth: 512,
        defaultList: []
      }
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      // query tenant info
      const args = { queryType: 2, encTid: $.data.tenant.encTid };
      $.Req.service($.SvName.TEANT_QUERY, args, ret => {
        if (!ret.tenant) {
          $.Dlg.error($.Lang.NO_TENANT, () => {
            this.$router.push('/user-login');
          });
        }
        this.tenant = ret.tenant;
        if (this.tenant.logoPathname) {
          this.imgUpload.defaultList.push({
            name: this.tenant.logoPathname,
            url: $.Util.getImgUrl(this.tenant.logoPathname, 100, 100, 'EEEEEE', $.data.tenant.encTid)
          });
        }
      });
    },

    onClickSubmitBtn() {
      // check
      if (!this.tenant.tenantName) {
        alert('请输入商户名称');
        return;
      }

      const args = {
        encTid: $.data.tenant.encTid,
        tenantName: this.tenant.tenantName,
        logoPathname: this.tenant.logoPathname
      };
      $.Req.service($.SvName.TENANT_UPDATE, args, ret => {
        this.tenant.logoPathname = null;
        $.data.tenant.tenantName = this.tenant.tenantName;
        if (ret.logoPathname) {
          $.data.tenant.logoPathname = ret.logoPathname;
        }
        $.Msg.success($.Lang.OPT_SUCCESS);
      });
    },

    handleImgUploadSuccess(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;
      this.tenant.logoPathname = res.data.name;
    }
  }
});

/***/ }),

/***/ 1564:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      g: $,
      tenantImg: null,
      shopList: {},
      loginSelectDlg: false
    };
  },

  created() {
    if ($.data.tenant.logoPathname) {
      this.tenantImg = $.Util.getImgUrl($.data.tenant.logoPathname);
    } else {
      this.tenantImg = $.Conf.IMG_LIB_URL + "/default-tenant-logo.jpg";
    }
    this.init();
  },

  methods: {
    init() {
      // load shop list
      const args = { encTid: $.data.tenant.encTid };
      $.Req.service($.SvName.TENANT_SHOPS_QUERY, args, ret => {
        this.shopList = ret.shopList;
        $.data.shopList = ret.shopList;
        for (let s of this.shopList) {
          s.logoImgUrl = $.Util.getImgUrl(s.logoPathname, 200, 200, 'EEEEEE');
        }
      }, true);
    },

    enterShop(index) {
      if ($.data.tenant.tenantType === 1) return;

      let shop = this.shopList[index];
      if (shop.forbiddenInChain) {
        $.Dlg.warning('抱歉，您无权进入本店');
        return;
      }
      $.Req.service($.SvName.USER_SHOP_SET, { encSid: shop.encSid, isFromMobile: true }, ret => {
        if (!ret.isValidShop) {
          $.Dlg.warning($.Lang.SHOP_EXPIRED.format(shop.shopName));
          return;
        }

        if (!ret.user.staffId && !ret.user.memberId) {
          alert('您不是该门店的成员，不能进入。');
          return;
        }
        shop.hasEntryCheckin = ret.hasEntryCheckin;
        shop.hasGroupCourse = ret.hasGroupCourse;
        shop.hasPrivateCourse = ret.hasPrivateCourse;
        shop.hasMall = ret.hasMall;
        shop.hasVenueBooking = ret.hasVenueBooking;

        $.data.shop = shop;
        $.Util.copyAttributes(ret.user, $.data.user);
        if (ret.user.memberId) {
          this.loginSelectDlg = true;
        } else {
          this.loginSelect('staff');
        }
      }, true);
    },

    loginSelect(type) {
      document.title = $.data.shop.shopName;
      if (type === 'staff') {
        $.data.user.memberId = null;
        this.navStaffHomePage();
        $.Util.cookie.set($.Conf.CookieKeys.LOGIN_AS, 'staff', 365);
      } else if (type === 'member') {
        $.data.user.staffId = null;
        $.data.user.isTenantOwner = null;
        $.data.user.isShopOwner = null;
        this.$router.push('/member-home');
        $.Util.cookie.set($.Conf.CookieKeys.LOGIN_AS, 'member', 365);
      }
    },

    navStaffHomePage() {
      this.$router.push('/staff-home');
      /*
       let u = $.data.user;
      if (u.isShopOwner) {
        this.$router.push('/staff-home');
      } else if (u.isCoach) {
        this.$router.push('/coach-home');
      } else {
        this.$router.push('/staff-home');
      }*/
    }
  }
});

/***/ }),

/***/ 1565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_head_vue__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_head_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { PageHead: __WEBPACK_IMPORTED_MODULE_0__components_page_head_vue___default.a },
  props: {},
  data() {
    return { g: $ };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    pageTo(page, flag) {
      if (flag) {
        return $.Dlg.error("正在开发！");
      }
      this.$router.push(page);
    }
  }
});

/***/ }),

/***/ 1622:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".-tenant-home- .hd img[data-v-1f358c1c]{display:block;width:100%}.-tenant-home- .menu-list[data-v-1f358c1c]{margin:0}.-tenant-home- .menu-list li[data-v-1f358c1c]{overflow:hidden}.-tenant-home- .menu table[data-v-1f358c1c]{width:100%}.-tenant-home- .menu th[data-v-1f358c1c]{width:100px;vertical-align:middle;border-right:1px solid #eee;text-align:center;font-weight:400}.-tenant-home- .menu th i[data-v-1f358c1c]{font-size:24px}.-tenant-home- .menu td[data-v-1f358c1c]{padding:0 0 0 10px}.-tenant-home- .menu td i[data-v-1f358c1c]{font-size:15px;color:#bbb}.-tenant-home- .menu li[data-v-1f358c1c]{padding:14px 0;line-height:1;border-bottom:1px solid #eee}.-tenant-home- .menu li[data-v-1f358c1c]:last-child{border:0}.-tenant-home- .menus[data-v-1f358c1c]{width:100%;border-collapse:collapse;background:#fff;border-bottom:1px solid #e5e5e5}.-tenant-home- .menus td[data-v-1f358c1c]{height:70px;vertical-align:middle;width:33%;text-align:center;border-right:1px solid #e5e5e5;border-top:1px solid #e5e5e5}.-tenant-home- .menus .icon[data-v-1f358c1c]{font-size:24px}.-tenant-home- .menus .txt[data-v-1f358c1c]{display:block;font-size:12px}.no-open[data-v-1f358c1c]{opacity:.5}", ""]);

// exports


/***/ }),

/***/ 1784:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".dlg-cont .txt[data-v-97e54d68]{padding:20px 0}.-style- .tenant-info .logo-img img[data-v-97e54d68]{width:100%}.-style- .tenant-info .detail[data-v-97e54d68]{height:50px;line-height:50px;padding:0 16px}.-style- .tenant-info .detail .tit[data-v-97e54d68]{font-size:16px;font-weight:700}.-style- .tenant-info .detail a[data-v-97e54d68]{display:inline-block}.-style- .shop[data-v-97e54d68]{padding:10px}.-style- .shop table[data-v-97e54d68]{width:100%}.-style- .shop .name[data-v-97e54d68]{font-size:14px;font-weight:800;margin-bottom:5px;padding:0 0 12px;border-bottom:1px dotted #ddd}.-style- .shop .detail[data-v-97e54d68]{padding-left:5px}.-style- .shop .detail li[data-v-97e54d68]{padding:3px 0;font-size:12px;color:#999}.-style- .shop .detail li[data-v-97e54d68]:last-child{padding-bottom:0}.-style- .shop .opt[data-v-97e54d68]{margin-top:10px;border-top:1px dotted #ddd;padding-top:10px}.-style- .shop .shop-img[data-v-97e54d68]{height:90px;width:90px}.login-chose[data-v-97e54d68]{padding:20px 0}.login-chose .btn[data-v-97e54d68]{padding:10px 0;width:40%}", ""]);

// exports


/***/ }),

/***/ 1806:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".-style- .hd[data-v-beb85f5c]{line-height:50px;height:50px}.-style- .tblform th[data-v-beb85f5c]{width:130px}", ""]);

// exports


/***/ }),

/***/ 1889:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1622);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("2e42a9f6", content, true, {});

/***/ }),

/***/ 2051:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1784);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("1aac908a", content, true, {});

/***/ }),

/***/ 2073:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1806);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("66394bae", content, true, {});

/***/ }),

/***/ 2285:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tenant -tenant-home-"
  }, [_c('page-head', {
    attrs: {
      "title": "商户管理"
    }
  }), _vm._v(" "), _c('section', {
    staticStyle: {
      "padding": "0"
    }
  }, [(_vm.g.data.user.staffId) ? _c('ul', {
    staticClass: "menu-list"
  }, [_c('li', {
    staticClass: "theme-border-bottom",
    on: {
      "click": function($event) {
        return _vm.pageTo('/tenant')
      }
    }
  }, [_c('i', {
    staticClass: "icon iconfont iconshop"
  }), _vm._v(" "), _c('div', {
    staticClass: "txt"
  }, [_vm._v("旗下门店")]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('li', {
    staticClass: "no-open theme-border-bottom",
    on: {
      "click": function($event) {
        return _vm.pageTo('/tenant-shop-create', true)
      }
    }
  }, [_c('i', {
    staticClass: "icon iconfont iconshops"
  }), _vm._v(" "), _c('div', {
    staticClass: "txt"
  }, [_vm._v("新建门店")]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c('li', {
    staticClass: "theme-border-bottom",
    on: {
      "click": function($event) {
        return _vm.pageTo('/tenant-stat-revenue?isInTenant=true')
      }
    }
  }, [_c('i', {
    staticClass: "icon iconfont iconstat1"
  }), _vm._v(" "), _c('div', {
    staticClass: "txt"
  }, [_vm._v("统计")]), _vm._v(" "), _vm._m(2)]), _vm._v(" "), _c('li', {
    staticClass: "no-open theme-border-bottom",
    on: {
      "click": function($event) {
        return _vm.pageTo('/tenant-card-conf', true)
      }
    }
  }, [_c('i', {
    staticClass: "icon iconfont iconcard-3"
  }), _vm._v(" "), _c('div', {
    staticClass: "txt"
  }, [_vm._v("会员卡")]), _vm._v(" "), _vm._m(3)]), _vm._v(" "), _c('li', {
    staticClass: "no-open theme-border-bottom",
    on: {
      "click": function($event) {
        return _vm.pageTo('/tenant-edit', true)
      }
    }
  }, [_c('i', {
    staticClass: "icon iconfont icon-setup-yel"
  }), _vm._v(" "), _c('div', {
    staticClass: "txt"
  }, [_vm._v("设置")]), _vm._v(" "), _vm._m(4)])]) : _vm._e()]), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "menu": "tenant-menus",
      "show-slogan": false
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "r"
  }, [_c('i', {
    staticClass: "iconfont iconarrow-r"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "r"
  }, [_c('i', {
    staticClass: "iconfont iconarrow-r"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "r"
  }, [_c('i', {
    staticClass: "iconfont iconarrow-r"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "r"
  }, [_c('i', {
    staticClass: "iconfont iconarrow-r"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "r"
  }, [_c('i', {
    staticClass: "iconfont iconarrow-r"
  })])
}]}

/***/ }),

/***/ 2446:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style- vant vant-change"
  }, [_c('page-head', {
    attrs: {
      "title": "商户信息"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "tenant-info"
  }, [_c('div', {
    staticClass: "logo-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.tenantImg
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "detail"
  }, [_c('div', {
    staticClass: "tit l"
  }, [_vm._v(_vm._s(_vm.g.data.tenant.tenantName))]), _vm._v(" "), _vm._m(0)])]), _vm._v(" "), _vm._l((_vm.shopList), function(s, index) {
    return _c('section', {
      staticClass: "shop",
      on: {
        "click": function($event) {
          return _vm.enterShop(index)
        }
      }
    }, [_c('table', [_c('tr', [_c('td', {
      attrs: {
        "width": "100",
        "valign": "top"
      }
    }, [_c('img', {
      staticClass: "shop-img",
      attrs: {
        "src": s.logoImgUrl
      }
    })]), _vm._v(" "), _c('td', {
      staticClass: "detail",
      attrs: {
        "valign": "top"
      }
    }, [_c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(s.shopName ? s.shopName : ''))]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("地址：" + _vm._s(s.addrProvinceName) + _vm._s(s.addrCityName) + _vm._s(s.addrDistrictName) + _vm._s(s.addrDetail))]), _vm._v(" "), _c('li', [_vm._v("电话：" + _vm._s(s.tel))])])])])])])
  }), _vm._v(" "), (_vm.loginSelectDlg) ? _c('van-dialog', {
    staticClass: "van-has-overlay section-part",
    staticStyle: {
      "overflow": "visible"
    },
    attrs: {
      "title": "登录选择",
      "show-confirm-button": false,
      "show-cancel-button": false
    },
    model: {
      value: (_vm.loginSelectDlg),
      callback: function($$v) {
        _vm.loginSelectDlg = $$v
      },
      expression: "loginSelectDlg"
    }
  }, [_c('div', {
    staticClass: "dlg-cont theme-bg"
  }, [_c('div', {
    staticClass: "txt"
  }, [_vm._v("您在该门店有两种身份，请选择一种身份登录。")])]), _vm._v(" "), _c('section', {
    staticClass: "row login-chose space-around"
  }, [_c('div', {
    staticClass: "theme-btn-bor btn",
    on: {
      "click": function($event) {
        return _vm.loginSelect('member')
      }
    }
  }, [_vm._v("会员登录")]), _vm._v(" "), _c('div', {
    staticClass: "theme-btn-bg btn",
    on: {
      "click": function($event) {
        return _vm.loginSelect('staff')
      }
    }
  }, [_vm._v("商家登录")])]), _vm._v(" "), _c('div', [_c('a', {
    on: {
      "click": function($event) {
        _vm.loginSelectDlg = false
      }
    }
  }, [_vm._v("关闭")]), _c('p')])]) : _vm._e()], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "r"
  }, [_c('a', {
    attrs: {
      "href": "#/tenant-detail"
    }
  }, [_vm._v("详情 "), _c('i', {
    staticClass: "iconfont iconarrow-r big"
  })])])
}]}

/***/ }),

/***/ 2468:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style-"
  }, [_c('page-head', {
    attrs: {
      "title": "商户详情"
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "tblform"
  }, [_c('table', [_c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("商户名称")]), _vm._v(" "), _c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.tenant.tenantName),
      expression: "tenant.tenantName",
      modifiers: {
        "trim": true
      }
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.tenant.tenantName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.tenant, "tenantName", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("商户图片")]), _vm._v(" "), _c('td', [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccess,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultList
    }
  }, [_c('a', [_vm._v("点击上传图片")])])], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("所属人")]), _c('td', [_vm._v(_vm._s(_vm.tenant.ownerUname))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("现有门店数")]), _c('td', [_vm._v(_vm._s(_vm.tenant.shopCount))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("已购买门店数")]), _c('td', [_vm._v(_vm._s(_vm.tenant.buyShops))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("已购买会员数")]), _c('td', [_vm._v(_vm._s(_vm.tenant.buyMembers))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("创建人")]), _c('td', [_vm._v(_vm._s(_vm.tenant.createUname))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("创建时间")]), _c('td', [_vm._v(_vm._s(_vm.tenant.createTime))])])])]), _vm._v(" "), _c('div', {
    staticClass: "theme-btn-bg largest-btn mt-15",
    on: {
      "click": _vm.onClickSubmitBtn
    }
  }, [_vm._v("保存")])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 969:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2073)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1562),
  /* template */
  __webpack_require__(2468),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-beb85f5c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2051)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1564),
  /* template */
  __webpack_require__(2446),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-97e54d68",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1889)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1565),
  /* template */
  __webpack_require__(2285),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1f358c1c",
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