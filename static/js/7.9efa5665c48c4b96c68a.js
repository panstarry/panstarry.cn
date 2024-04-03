webpackJsonp([7],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ChildrenMixin = ChildrenMixin;
exports.ParentMixin = ParentMixin;

var _vnodes = __webpack_require__(1037);

function ChildrenMixin(_parent, options) {
  var _inject, _computed;

  if (options === void 0) {
    options = {};
  }

  var indexKey = options.indexKey || 'index';
  return {
    inject: (_inject = {}, _inject[_parent] = {
      default: null
    }, _inject),
    computed: (_computed = {
      parent: function parent() {
        if (this.disableBindRelation) {
          return null;
        }

        return this[_parent];
      }
    }, _computed[indexKey] = function () {
      this.bindRelation();

      if (this.parent) {
        return this.parent.children.indexOf(this);
      }

      return null;
    }, _computed),
    watch: {
      disableBindRelation: function disableBindRelation(val) {
        if (!val) {
          this.bindRelation();
        }
      }
    },
    mounted: function mounted() {
      this.bindRelation();
    },
    beforeDestroy: function beforeDestroy() {
      var _this = this;

      if (this.parent) {
        this.parent.children = this.parent.children.filter(function (item) {
          return item !== _this;
        });
      }
    },
    methods: {
      bindRelation: function bindRelation() {
        if (!this.parent || this.parent.children.indexOf(this) !== -1) {
          return;
        }

        var children = [].concat(this.parent.children, [this]);
        (0, _vnodes.sortChildren)(children, this.parent);
        this.parent.children = children;
      }
    }
  };
}

function ParentMixin(parent) {
  return {
    provide: function provide() {
      var _ref;

      return _ref = {}, _ref[parent] = this, _ref;
    },
    data: function data() {
      return {
        children: []
      };
    }
  };
}

/***/ }),

/***/ 1001:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removeNode = removeNode;

function removeNode(el) {
  var parent = el.parentNode;

  if (parent) {
    parent.removeChild(el);
  }
}

/***/ }),

/***/ 1002:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.range = range;
exports.formatNumber = formatNumber;
exports.addNumber = addNumber;

function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

function trimExtraChar(value, _char, regExp) {
  var index = value.indexOf(_char);
  var prefix = '';

  if (index === -1) {
    return value;
  }

  if (_char === '-' && index !== 0) {
    return value.slice(0, index);
  }

  if (_char === '.' && value.match(/^(\.|-\.)/)) {
    prefix = index ? '-0' : '0';
  }

  return prefix + value.slice(0, index + 1) + value.slice(index).replace(regExp, '');
}

function formatNumber(value, allowDot, allowMinus) {
  if (allowDot === void 0) {
    allowDot = true;
  }

  if (allowMinus === void 0) {
    allowMinus = true;
  }

  if (allowDot) {
    value = trimExtraChar(value, '.', /\./g);
  } else {
    value = value.split('.')[0];
  }

  if (allowMinus) {
    value = trimExtraChar(value, '-', /-/g);
  } else {
    value = value.replace(/-/, '');
  }

  var regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;
  return value.replace(regExp, '');
} // add num and avoid float number


function addNumber(num1, num2) {
  var cardinal = Math.pow(10, 10);
  return Math.round((num1 + num2) * cardinal) / cardinal;
}

/***/ }),

/***/ 1003:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.camelize = camelize;
exports.padZero = padZero;
var camelizeRE = /-(\w)/g;

function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}

function padZero(num, targetLength) {
  if (targetLength === void 0) {
    targetLength = 2;
  }

  var str = num + '';

  while (str.length < targetLength) {
    str = '0' + str;
  }

  return str;
}

/***/ }),

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

/***/ 1013:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(981);

exports.__esModule = true;
exports.default = void 0;

var _shared = __webpack_require__(997);

var _popup = __webpack_require__(1020);

var _touch = __webpack_require__(988);

var _bindEvent = __webpack_require__(990);

var _icon = _interopRequireDefault(__webpack_require__(996));

var _swipe = _interopRequireDefault(__webpack_require__(1026));

var _ImagePreviewItem = _interopRequireDefault(__webpack_require__(1014));

// Utils
// Mixins
// Components
var _default2 = (0, _shared.createComponent)({
  mixins: [_touch.TouchMixin, (0, _popup.PopupMixin)({
    skipToggleEvent: true
  }), (0, _bindEvent.BindEventMixin)(function (bind) {
    bind(window, 'resize', this.resize, true);
    bind(window, 'orientationchange', this.resize, true);
  })],
  props: {
    className: null,
    closeable: Boolean,
    asyncClose: Boolean,
    overlayStyle: Object,
    showIndicators: Boolean,
    images: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    minZoom: {
      type: [Number, String],
      default: 1 / 3
    },
    maxZoom: {
      type: [Number, String],
      default: 3
    },
    transition: {
      type: String,
      default: 'van-fade'
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    swipeDuration: {
      type: [Number, String],
      default: 300
    },
    startPosition: {
      type: [Number, String],
      default: 0
    },
    overlayClass: {
      type: String,
      default: (0, _shared.bem)('overlay')
    },
    closeIcon: {
      type: String,
      default: 'clear'
    },
    closeOnPopstate: {
      type: Boolean,
      default: true
    },
    closeIconPosition: {
      type: String,
      default: 'top-right'
    }
  },
  data: function data() {
    return {
      active: 0,
      rootWidth: 0,
      rootHeight: 0,
      doubleClickTimer: null
    };
  },
  mounted: function mounted() {
    this.resize();
  },
  watch: {
    startPosition: 'setActive',
    value: function value(val) {
      var _this = this;

      if (val) {
        this.setActive(+this.startPosition);
        this.$nextTick(function () {
          _this.resize();

          _this.$refs.swipe.swipeTo(+_this.startPosition, {
            immediate: true
          });
        });
      } else {
        this.$emit('close', {
          index: this.active,
          url: this.images[this.active]
        });
      }
    }
  },
  methods: {
    resize: function resize() {
      if (this.$el && this.$el.getBoundingClientRect) {
        var rect = this.$el.getBoundingClientRect();
        this.rootWidth = rect.width;
        this.rootHeight = rect.height;
      }
    },
    emitClose: function emitClose() {
      if (!this.asyncClose) {
        this.$emit('input', false);
      }
    },
    emitScale: function emitScale(args) {
      this.$emit('scale', args);
    },
    setActive: function setActive(active) {
      if (active !== this.active) {
        this.active = active;
        this.$emit('change', active);
      }
    },
    genIndex: function genIndex() {
      var h = this.$createElement;

      if (this.showIndex) {
        return h("div", {
          "class": (0, _shared.bem)('index')
        }, [this.slots('index', {
          index: this.active
        }) || this.active + 1 + " / " + this.images.length]);
      }
    },
    genCover: function genCover() {
      var h = this.$createElement;
      var cover = this.slots('cover');

      if (cover) {
        return h("div", {
          "class": (0, _shared.bem)('cover')
        }, [cover]);
      }
    },
    genImages: function genImages() {
      var _this2 = this;

      var h = this.$createElement;
      return h(_swipe.default, {
        "ref": "swipe",
        "attrs": {
          "lazyRender": true,
          "loop": this.loop,
          "duration": this.swipeDuration,
          "initialSwipe": this.startPosition,
          "showIndicators": this.showIndicators,
          "indicatorColor": "white"
        },
        "class": (0, _shared.bem)('swipe'),
        "on": {
          "change": this.setActive
        }
      }, [this.images.map(function (image) {
        return h(_ImagePreviewItem.default, {
          "attrs": {
            "src": image,
            "show": _this2.value,
            "active": _this2.active,
            "maxZoom": _this2.maxZoom,
            "minZoom": _this2.minZoom,
            "rootWidth": _this2.rootWidth,
            "rootHeight": _this2.rootHeight
          },
          "on": {
            "scale": _this2.emitScale,
            "close": _this2.emitClose
          }
        });
      })]);
    },
    genClose: function genClose() {
      var h = this.$createElement;

      if (this.closeable) {
        return h(_icon.default, {
          "attrs": {
            "role": "button",
            "name": this.closeIcon
          },
          "class": (0, _shared.bem)('close-icon', this.closeIconPosition),
          "on": {
            "click": this.emitClose
          }
        });
      }
    },
    onClosed: function onClosed() {
      this.$emit('closed');
    },
    // @exposed-api
    swipeTo: function swipeTo(index, options) {
      if (this.$refs.swipe) {
        this.$refs.swipe.swipeTo(index, options);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("transition", {
      "attrs": {
        "name": this.transition
      },
      "on": {
        "afterLeave": this.onClosed
      }
    }, [this.shouldRender ? h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "class": [(0, _shared.bem)(), this.className]
    }, [this.genClose(), this.genImages(), this.genIndex(), this.genCover()]) : null]);
  }
});

exports.default = _default2;

/***/ }),

/***/ 1014:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(981);

exports.__esModule = true;
exports.default = void 0;

var _shared = __webpack_require__(997);

var _number = __webpack_require__(1002);

var _event = __webpack_require__(983);

var _touch = __webpack_require__(988);

var _image = _interopRequireDefault(__webpack_require__(1015));

var _loading = _interopRequireDefault(__webpack_require__(1017));

var _swipeItem = _interopRequireDefault(__webpack_require__(1025));

// Utils
// Mixins
// Component
function getDistance(touches) {
  return Math.sqrt(Math.pow(touches[0].clientX - touches[1].clientX, 2) + Math.pow(touches[0].clientY - touches[1].clientY, 2));
}

var _default = {
  mixins: [_touch.TouchMixin],
  props: {
    src: String,
    show: Boolean,
    active: Number,
    minZoom: [Number, String],
    maxZoom: [Number, String],
    rootWidth: Number,
    rootHeight: Number
  },
  data: function data() {
    return {
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      imageRatio: 0,
      displayWidth: 0,
      displayHeight: 0
    };
  },
  computed: {
    vertical: function vertical() {
      var rootWidth = this.rootWidth,
          rootHeight = this.rootHeight;
      var rootRatio = rootHeight / rootWidth;
      return this.imageRatio > rootRatio;
    },
    imageStyle: function imageStyle() {
      var scale = this.scale;
      var style = {
        transitionDuration: this.zooming || this.moving ? '0s' : '.3s'
      };

      if (scale !== 1) {
        var offsetX = this.moveX / scale;
        var offsetY = this.moveY / scale;
        style.transform = "scale(" + scale + ", " + scale + ") translate(" + offsetX + "px, " + offsetY + "px)";
      }

      return style;
    },
    maxMoveX: function maxMoveX() {
      if (this.imageRatio) {
        var displayWidth = this.vertical ? this.rootHeight / this.imageRatio : this.rootWidth;
        return Math.max(0, (this.scale * displayWidth - this.rootWidth) / 2);
      }

      return 0;
    },
    maxMoveY: function maxMoveY() {
      if (this.imageRatio) {
        var displayHeight = this.vertical ? this.rootHeight : this.rootWidth * this.imageRatio;
        return Math.max(0, (this.scale * displayHeight - this.rootHeight) / 2);
      }

      return 0;
    }
  },
  watch: {
    active: 'resetScale',
    show: function show(val) {
      if (!val) {
        this.resetScale();
      }
    }
  },
  mounted: function mounted() {
    this.bindTouchEvent(this.$el);
  },
  methods: {
    resetScale: function resetScale() {
      this.setScale(1);
      this.moveX = 0;
      this.moveY = 0;
    },
    setScale: function setScale(scale) {
      scale = (0, _number.range)(scale, +this.minZoom, +this.maxZoom);

      if (scale !== this.scale) {
        this.scale = scale;
        this.$emit('scale', {
          scale: this.scale,
          index: this.active
        });
      }
    },
    toggleScale: function toggleScale() {
      var scale = this.scale > 1 ? 1 : 2;
      this.setScale(scale);
      this.moveX = 0;
      this.moveY = 0;
    },
    onTouchStart: function onTouchStart(event) {
      var touches = event.touches;
      var _this$offsetX = this.offsetX,
          offsetX = _this$offsetX === void 0 ? 0 : _this$offsetX;
      this.touchStart(event);
      this.touchStartTime = new Date();
      this.fingerNum = touches.length;
      this.startMoveX = this.moveX;
      this.startMoveY = this.moveY;
      this.moving = this.fingerNum === 1 && this.scale !== 1;
      this.zooming = this.fingerNum === 2 && !offsetX;

      if (this.zooming) {
        this.startScale = this.scale;
        this.startDistance = getDistance(event.touches);
      }
    },
    onTouchMove: function onTouchMove(event) {
      var touches = event.touches;
      this.touchMove(event);

      if (this.moving || this.zooming) {
        (0, _event.preventDefault)(event, true);
      }

      if (this.moving) {
        var moveX = this.deltaX + this.startMoveX;
        var moveY = this.deltaY + this.startMoveY;
        this.moveX = (0, _number.range)(moveX, -this.maxMoveX, this.maxMoveX);
        this.moveY = (0, _number.range)(moveY, -this.maxMoveY, this.maxMoveY);
      }

      if (this.zooming && touches.length === 2) {
        var distance = getDistance(touches);
        var scale = this.startScale * distance / this.startDistance;
        this.setScale(scale);
      }
    },
    onTouchEnd: function onTouchEnd(event) {
      var stopPropagation = false;
      /* istanbul ignore else */

      if (this.moving || this.zooming) {
        stopPropagation = true;

        if (this.moving && this.startMoveX === this.moveX && this.startMoveY === this.moveY) {
          stopPropagation = false;
        }

        if (!event.touches.length) {
          if (this.zooming) {
            this.moveX = (0, _number.range)(this.moveX, -this.maxMoveX, this.maxMoveX);
            this.moveY = (0, _number.range)(this.moveY, -this.maxMoveY, this.maxMoveY);
            this.zooming = false;
          }

          this.moving = false;
          this.startMoveX = 0;
          this.startMoveY = 0;
          this.startScale = 1;

          if (this.scale < 1) {
            this.resetScale();
          }
        }
      } // eliminate tap delay on safari


      (0, _event.preventDefault)(event, stopPropagation);
      this.checkTap();
      this.resetTouchStatus();
    },
    checkTap: function checkTap() {
      var _this = this;

      if (this.fingerNum > 1) {
        return;
      }

      var _this$offsetX2 = this.offsetX,
          offsetX = _this$offsetX2 === void 0 ? 0 : _this$offsetX2,
          _this$offsetY = this.offsetY,
          offsetY = _this$offsetY === void 0 ? 0 : _this$offsetY;
      var deltaTime = new Date() - this.touchStartTime;
      var TAP_TIME = 250;
      var TAP_OFFSET = 5;

      if (offsetX < TAP_OFFSET && offsetY < TAP_OFFSET && deltaTime < TAP_TIME) {
        if (this.doubleTapTimer) {
          clearTimeout(this.doubleTapTimer);
          this.doubleTapTimer = null;
          this.toggleScale();
        } else {
          this.doubleTapTimer = setTimeout(function () {
            _this.$emit('close');

            _this.doubleTapTimer = null;
          }, TAP_TIME);
        }
      }
    },
    onLoad: function onLoad(event) {
      var _event$target = event.target,
          naturalWidth = _event$target.naturalWidth,
          naturalHeight = _event$target.naturalHeight;
      this.imageRatio = naturalHeight / naturalWidth;
    }
  },
  render: function render() {
    var h = arguments[0];
    var imageSlots = {
      loading: function loading() {
        return h(_loading.default, {
          "attrs": {
            "type": "spinner"
          }
        });
      }
    };
    return h(_swipeItem.default, {
      "class": (0, _shared.bem)('swipe-item')
    }, [h(_image.default, {
      "attrs": {
        "src": this.src,
        "fit": "contain"
      },
      "class": (0, _shared.bem)('image', {
        vertical: this.vertical
      }),
      "style": this.imageStyle,
      "scopedSlots": imageSlots,
      "on": {
        "load": this.onLoad
      }
    })]);
  }
};
exports.default = _default;

/***/ }),

/***/ 1015:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(981);

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(5));

var _utils = __webpack_require__(982);

var _icon = _interopRequireDefault(__webpack_require__(996));

var _createNamespace = (0, _utils.createNamespace)('image'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  props: {
    src: String,
    fit: String,
    alt: String,
    round: Boolean,
    width: [Number, String],
    height: [Number, String],
    radius: [Number, String],
    lazyLoad: Boolean,
    iconPrefix: String,
    showError: {
      type: Boolean,
      default: true
    },
    showLoading: {
      type: Boolean,
      default: true
    },
    errorIcon: {
      type: String,
      default: 'photo-fail'
    },
    loadingIcon: {
      type: String,
      default: 'photo'
    }
  },
  data: function data() {
    return {
      loading: true,
      error: false
    };
  },
  watch: {
    src: function src() {
      this.loading = true;
      this.error = false;
    }
  },
  computed: {
    style: function style() {
      var style = {};

      if ((0, _utils.isDef)(this.width)) {
        style.width = (0, _utils.addUnit)(this.width);
      }

      if ((0, _utils.isDef)(this.height)) {
        style.height = (0, _utils.addUnit)(this.height);
      }

      if ((0, _utils.isDef)(this.radius)) {
        style.overflow = 'hidden';
        style.borderRadius = (0, _utils.addUnit)(this.radius);
      }

      return style;
    }
  },
  created: function created() {
    var $Lazyload = this.$Lazyload;

    if ($Lazyload && _utils.inBrowser) {
      $Lazyload.$on('loaded', this.onLazyLoaded);
      $Lazyload.$on('error', this.onLazyLoadError);
    }
  },
  beforeDestroy: function beforeDestroy() {
    var $Lazyload = this.$Lazyload;

    if ($Lazyload) {
      $Lazyload.$off('loaded', this.onLazyLoaded);
      $Lazyload.$off('error', this.onLazyLoadError);
    }
  },
  methods: {
    onLoad: function onLoad(event) {
      this.loading = false;
      this.$emit('load', event);
    },
    onLazyLoaded: function onLazyLoaded(_ref) {
      var el = _ref.el;

      if (el === this.$refs.image && this.loading) {
        this.onLoad();
      }
    },
    onLazyLoadError: function onLazyLoadError(_ref2) {
      var el = _ref2.el;

      if (el === this.$refs.image && !this.error) {
        this.onError();
      }
    },
    onError: function onError(event) {
      this.error = true;
      this.loading = false;
      this.$emit('error', event);
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    genPlaceholder: function genPlaceholder() {
      var h = this.$createElement;

      if (this.loading && this.showLoading) {
        return h("div", {
          "class": bem('loading')
        }, [this.slots('loading') || h(_icon.default, {
          "attrs": {
            "name": this.loadingIcon,
            "classPrefix": this.iconPrefix
          },
          "class": bem('loading-icon')
        })]);
      }

      if (this.error && this.showError) {
        return h("div", {
          "class": bem('error')
        }, [this.slots('error') || h(_icon.default, {
          "attrs": {
            "name": this.errorIcon,
            "classPrefix": this.iconPrefix
          },
          "class": bem('error-icon')
        })]);
      }
    },
    genImage: function genImage() {
      var h = this.$createElement;
      var imgData = {
        class: bem('img'),
        attrs: {
          alt: this.alt
        },
        style: {
          objectFit: this.fit
        }
      };

      if (this.error) {
        return;
      }

      if (this.lazyLoad) {
        return h("img", (0, _babelHelperVueJsxMergeProps.default)([{
          "ref": "image",
          "directives": [{
            name: "lazy",
            value: this.src
          }]
        }, imgData]));
      }

      return h("img", (0, _babelHelperVueJsxMergeProps.default)([{
        "attrs": {
          "src": this.src
        },
        "on": {
          "load": this.onLoad,
          "error": this.onError
        }
      }, imgData]));
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem({
        round: this.round
      }),
      "style": this.style,
      "on": {
        "click": this.onClick
      }
    }, [this.genImage(), this.genPlaceholder(), this.slots()]);
  }
});

exports.default = _default;

/***/ }),

/***/ 1016:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(981);

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(5));

var _utils = __webpack_require__(982);

var _functional = __webpack_require__(987);

// Utils
var _createNamespace = (0, _utils.createNamespace)('info'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Info(h, props, slots, ctx) {
  var dot = props.dot,
      info = props.info;
  var showInfo = (0, _utils.isDef)(info) && info !== '';

  if (!dot && !showInfo) {
    return;
  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem({
      dot: dot
    })
  }, (0, _functional.inherit)(ctx, true)]), [dot ? '' : props.info]);
}

Info.props = {
  dot: Boolean,
  info: [Number, String]
};

var _default = createComponent(Info);

exports.default = _default;

/***/ }),

/***/ 1017:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(981);

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(5));

var _utils = __webpack_require__(982);

var _functional = __webpack_require__(987);

// Utils
var _createNamespace = (0, _utils.createNamespace)('loading'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function LoadingIcon(h, props) {
  if (props.type === 'spinner') {
    var Spin = [];

    for (var i = 0; i < 12; i++) {
      Spin.push(h("i"));
    }

    return Spin;
  }

  return h("svg", {
    "class": bem('circular'),
    "attrs": {
      "viewBox": "25 25 50 50"
    }
  }, [h("circle", {
    "attrs": {
      "cx": "50",
      "cy": "50",
      "r": "20",
      "fill": "none"
    }
  })]);
}

function LoadingText(h, props, slots) {
  if (slots.default) {
    var _props$textColor;

    var style = {
      fontSize: (0, _utils.addUnit)(props.textSize),
      color: (_props$textColor = props.textColor) != null ? _props$textColor : props.color
    };
    return h("span", {
      "class": bem('text'),
      "style": style
    }, [slots.default()]);
  }
}

function Loading(h, props, slots, ctx) {
  var color = props.color,
      size = props.size,
      type = props.type;
  var style = {
    color: color
  };

  if (size) {
    var iconSize = (0, _utils.addUnit)(size);
    style.width = iconSize;
    style.height = iconSize;
  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem([type, {
      vertical: props.vertical
    }])
  }, (0, _functional.inherit)(ctx, true)]), [h("span", {
    "class": bem('spinner', type),
    "style": style
  }, [LoadingIcon(h, props)]), LoadingText(h, props, slots)]);
}

Loading.props = {
  color: String,
  size: [Number, String],
  vertical: Boolean,
  textSize: [Number, String],
  textColor: String,
  type: {
    type: String,
    default: 'circular'
  }
};

var _default = createComponent(Loading);

exports.default = _default;

/***/ }),

/***/ 1018:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  name: '姓名',
  tel: '电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  delete: '删除',
  complete: '完成',
  loading: '加载中...',
  telEmpty: '请填写电话',
  nameEmpty: '请填写姓名',
  nameInvalid: '请输入正确的姓名',
  confirmDelete: '确定要删除吗',
  telInvalid: '请输入正确的手机号',
  vanCalendar: {
    end: '结束',
    start: '开始',
    title: '日期选择',
    confirm: '确定',
    startEnd: '开始/结束',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    monthTitle: function monthTitle(year, month) {
      return year + "\u5E74" + month + "\u6708";
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "\u9009\u62E9\u5929\u6570\u4E0D\u80FD\u8D85\u8FC7 " + maxRange + " \u5929";
    }
  },
  vanCascader: {
    select: '请选择'
  },
  vanContactCard: {
    addText: '添加联系人'
  },
  vanContactList: {
    addText: '新建联系人'
  },
  vanPagination: {
    prev: '上一页',
    next: '下一页'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  vanSubmitBar: {
    label: '合计：'
  },
  vanCoupon: {
    unlimited: '无使用门槛',
    discount: function discount(_discount) {
      return _discount + "\u6298";
    },
    condition: function condition(_condition) {
      return "\u6EE1" + _condition + "\u5143\u53EF\u7528";
    }
  },
  vanCouponCell: {
    title: '优惠券',
    tips: '暂无可用',
    count: function count(_count) {
      return _count + "\u5F20\u53EF\u7528";
    }
  },
  vanCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠券',
    enable: '可用',
    disabled: '不可用',
    placeholder: '请输入优惠码'
  },
  vanAddressEdit: {
    area: '地区',
    postal: '邮政编码',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    telPlaceholder: '收货人手机号',
    namePlaceholder: '收货人姓名',
    areaPlaceholder: '选择省 / 市 / 区'
  },
  vanAddressEditDetail: {
    label: '详细地址',
    placeholder: '街道门牌、楼层房间号等信息'
  },
  vanAddressList: {
    add: '新增地址'
  }
};
exports.default = _default;

/***/ }),

/***/ 1019:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.CloseOnPopstateMixin = void 0;

var _event = __webpack_require__(983);

var _bindEvent = __webpack_require__(990);

var CloseOnPopstateMixin = {
  mixins: [(0, _bindEvent.BindEventMixin)(function (bind, isBind) {
    this.handlePopstate(isBind && this.closeOnPopstate);
  })],
  props: {
    closeOnPopstate: Boolean
  },
  data: function data() {
    return {
      bindStatus: false
    };
  },
  watch: {
    closeOnPopstate: function closeOnPopstate(val) {
      this.handlePopstate(val);
    }
  },
  methods: {
    onPopstate: function onPopstate() {
      this.close();
      this.shouldReopen = false;
    },
    handlePopstate: function handlePopstate(bind) {
      /* istanbul ignore if */
      if (this.$isServer) {
        return;
      }

      if (this.bindStatus !== bind) {
        this.bindStatus = bind;
        var action = bind ? _event.on : _event.off;
        action(window, 'popstate', this.onPopstate);
      }
    }
  }
};
exports.CloseOnPopstateMixin = CloseOnPopstateMixin;

/***/ }),

/***/ 1020:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.PopupMixin = PopupMixin;
exports.popupMixinProps = void 0;

var _context = __webpack_require__(999);

var _overlay = __webpack_require__(1021);

var _event = __webpack_require__(983);

var _node = __webpack_require__(1001);

var _scroll = __webpack_require__(1033);

var _touch = __webpack_require__(988);

var _portal = __webpack_require__(1022);

var _closeOnPopstate = __webpack_require__(1019);

// Context
// Utils
// Mixins
var popupMixinProps = {
  // Initial rendering animation
  transitionAppear: Boolean,
  // whether to show popup
  value: Boolean,
  // whether to show overlay
  overlay: Boolean,
  // overlay custom style
  overlayStyle: Object,
  // overlay custom class name
  overlayClass: String,
  // whether to close popup when overlay is clicked
  closeOnClickOverlay: Boolean,
  // z-index
  zIndex: [Number, String],
  // prevent body scroll
  lockScroll: {
    type: Boolean,
    default: true
  },
  // whether to lazy render
  lazyRender: {
    type: Boolean,
    default: true
  }
};
exports.popupMixinProps = popupMixinProps;

function PopupMixin(options) {
  if (options === void 0) {
    options = {};
  }

  return {
    mixins: [_touch.TouchMixin, _closeOnPopstate.CloseOnPopstateMixin, (0, _portal.PortalMixin)({
      afterPortal: function afterPortal() {
        if (this.overlay) {
          (0, _overlay.updateOverlay)();
        }
      }
    })],
    provide: function provide() {
      return {
        vanPopup: this
      };
    },
    props: popupMixinProps,
    data: function data() {
      this.onReopenCallback = [];
      return {
        inited: this.value
      };
    },
    computed: {
      shouldRender: function shouldRender() {
        return this.inited || !this.lazyRender;
      }
    },
    watch: {
      value: function value(val) {
        var type = val ? 'open' : 'close';
        this.inited = this.inited || this.value;
        this[type]();

        if (!options.skipToggleEvent) {
          this.$emit(type);
        }
      },
      overlay: 'renderOverlay'
    },
    mounted: function mounted() {
      if (this.value) {
        this.open();
      }
    },

    /* istanbul ignore next */
    activated: function activated() {
      if (this.shouldReopen) {
        this.$emit('input', true);
        this.shouldReopen = false;
      }
    },
    beforeDestroy: function beforeDestroy() {
      (0, _overlay.removeOverlay)(this);

      if (this.opened) {
        this.removeLock();
      }

      if (this.getContainer) {
        (0, _node.removeNode)(this.$el);
      }
    },

    /* istanbul ignore next */
    deactivated: function deactivated() {
      if (this.value) {
        this.close();
        this.shouldReopen = true;
      }
    },
    methods: {
      open: function open() {
        /* istanbul ignore next */
        if (this.$isServer || this.opened) {
          return;
        } // cover default zIndex


        if (this.zIndex !== undefined) {
          _context.context.zIndex = this.zIndex;
        }

        this.opened = true;
        this.renderOverlay();
        this.addLock();
        this.onReopenCallback.forEach(function (callback) {
          callback();
        });
      },
      addLock: function addLock() {
        if (this.lockScroll) {
          (0, _event.on)(document, 'touchstart', this.touchStart);
          (0, _event.on)(document, 'touchmove', this.onTouchMove);

          if (!_context.context.lockCount) {
            document.body.classList.add('van-overflow-hidden');
          }

          _context.context.lockCount++;
        }
      },
      removeLock: function removeLock() {
        if (this.lockScroll && _context.context.lockCount) {
          _context.context.lockCount--;
          (0, _event.off)(document, 'touchstart', this.touchStart);
          (0, _event.off)(document, 'touchmove', this.onTouchMove);

          if (!_context.context.lockCount) {
            document.body.classList.remove('van-overflow-hidden');
          }
        }
      },
      close: function close() {
        if (!this.opened) {
          return;
        }

        (0, _overlay.closeOverlay)(this);
        this.opened = false;
        this.removeLock();
        this.$emit('input', false);
      },
      onTouchMove: function onTouchMove(event) {
        this.touchMove(event);
        var direction = this.deltaY > 0 ? '10' : '01';
        var el = (0, _scroll.getScroller)(event.target, this.$el);
        var scrollHeight = el.scrollHeight,
            offsetHeight = el.offsetHeight,
            scrollTop = el.scrollTop;
        var status = '11';
        /* istanbul ignore next */

        if (scrollTop === 0) {
          status = offsetHeight >= scrollHeight ? '00' : '01';
        } else if (scrollTop + offsetHeight >= scrollHeight) {
          status = '10';
        }
        /* istanbul ignore next */


        if (status !== '11' && this.direction === 'vertical' && !(parseInt(status, 2) & parseInt(direction, 2))) {
          (0, _event.preventDefault)(event, true);
        }
      },
      renderOverlay: function renderOverlay() {
        var _this = this;

        if (this.$isServer || !this.value) {
          return;
        }

        this.$nextTick(function () {
          _this.updateZIndex(_this.overlay ? 1 : 0);

          if (_this.overlay) {
            (0, _overlay.openOverlay)(_this, {
              zIndex: _context.context.zIndex++,
              duration: _this.duration,
              className: _this.overlayClass,
              customStyle: _this.overlayStyle
            });
          } else {
            (0, _overlay.closeOverlay)(_this);
          }
        });
      },
      updateZIndex: function updateZIndex(value) {
        if (value === void 0) {
          value = 0;
        }

        this.$el.style.zIndex = ++_context.context.zIndex + value;
      },
      onReopen: function onReopen(callback) {
        this.onReopenCallback.push(callback);
      }
    }
  };
}

/***/ }),

/***/ 1021:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(981);

exports.__esModule = true;
exports.updateOverlay = updateOverlay;
exports.openOverlay = openOverlay;
exports.closeOverlay = closeOverlay;
exports.removeOverlay = removeOverlay;

var _extends2 = _interopRequireDefault(__webpack_require__(986));

var _overlay = _interopRequireDefault(__webpack_require__(1024));

var _context = __webpack_require__(999);

var _functional = __webpack_require__(987);

var _node = __webpack_require__(1001);

var defaultConfig = {
  className: '',
  customStyle: {}
};

function mountOverlay(vm) {
  return (0, _functional.mount)(_overlay.default, {
    on: {
      // close popup when overlay clicked & closeOnClickOverlay is true
      click: function click() {
        vm.$emit('click-overlay');

        if (vm.closeOnClickOverlay) {
          if (vm.onClickOverlay) {
            vm.onClickOverlay();
          } else {
            vm.close();
          }
        }
      }
    }
  });
}

function updateOverlay(vm) {
  var item = _context.context.find(vm);

  if (item) {
    var el = vm.$el;
    var config = item.config,
        overlay = item.overlay;

    if (el && el.parentNode) {
      el.parentNode.insertBefore(overlay.$el, el);
    }

    (0, _extends2.default)(overlay, defaultConfig, config, {
      show: true
    });
  }
}

function openOverlay(vm, config) {
  var item = _context.context.find(vm);

  if (item) {
    item.config = config;
  } else {
    var overlay = mountOverlay(vm);

    _context.context.stack.push({
      vm: vm,
      config: config,
      overlay: overlay
    });
  }

  updateOverlay(vm);
}

function closeOverlay(vm) {
  var item = _context.context.find(vm);

  if (item) {
    item.overlay.show = false;
  }
}

function removeOverlay(vm) {
  var item = _context.context.find(vm);

  if (item) {
    (0, _node.removeNode)(item.overlay.$el);

    _context.context.remove(vm);
  }
}

/***/ }),

/***/ 1022:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.PortalMixin = PortalMixin;

function getElement(selector) {
  if (typeof selector === 'string') {
    return document.querySelector(selector);
  }

  return selector();
}

function PortalMixin(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      ref = _ref.ref,
      afterPortal = _ref.afterPortal;

  return {
    props: {
      getContainer: [String, Function]
    },
    watch: {
      getContainer: 'portal'
    },
    mounted: function mounted() {
      if (this.getContainer) {
        this.portal();
      }
    },
    methods: {
      portal: function portal() {
        var getContainer = this.getContainer;
        var el = ref ? this.$refs[ref] : this.$el;
        var container;

        if (getContainer) {
          container = getElement(getContainer);
        } else if (this.$parent) {
          container = this.$parent.$el;
        }

        if (container && container !== el.parentNode) {
          container.appendChild(el);
        }

        if (afterPortal) {
          afterPortal.call(this);
        }
      }
    }
  };
}

/***/ }),

/***/ 1023:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SlotsMixin = void 0;

/**
 * Use scopedSlots in Vue 2.6+
 * downgrade to slots in lower version
 */
var SlotsMixin = {
  methods: {
    slots: function slots(name, props) {
      if (name === void 0) {
        name = 'default';
      }

      var $slots = this.$slots,
          $scopedSlots = this.$scopedSlots;
      var scopedSlot = $scopedSlots[name];

      if (scopedSlot) {
        return scopedSlot(props);
      }

      return $slots[name];
    }
  }
};
exports.SlotsMixin = SlotsMixin;

/***/ }),

/***/ 1024:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(981);

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(5));

var _extends2 = _interopRequireDefault(__webpack_require__(986));

var _utils = __webpack_require__(982);

var _functional = __webpack_require__(987);

var _event = __webpack_require__(983);

// Utils
var _createNamespace = (0, _utils.createNamespace)('overlay'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function preventTouchMove(event) {
  (0, _event.preventDefault)(event, true);
}

function Overlay(h, props, slots, ctx) {
  var style = (0, _extends2.default)({
    zIndex: props.zIndex
  }, props.customStyle);

  if ((0, _utils.isDef)(props.duration)) {
    style.animationDuration = props.duration + "s";
  }

  return h("transition", {
    "attrs": {
      "name": "van-fade"
    }
  }, [h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "directives": [{
      name: "show",
      value: props.show
    }],
    "style": style,
    "class": [bem(), props.className],
    "on": {
      "touchmove": props.lockScroll ? preventTouchMove : _utils.noop
    }
  }, (0, _functional.inherit)(ctx, true)]), [slots.default == null ? void 0 : slots.default()])]);
}

Overlay.props = {
  show: Boolean,
  zIndex: [Number, String],
  duration: [Number, String],
  className: null,
  customStyle: Object,
  lockScroll: {
    type: Boolean,
    default: true
  }
};

var _default = createComponent(Overlay);

exports.default = _default;

/***/ }),

/***/ 1025:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(981);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(986));

var _utils = __webpack_require__(982);

var _relation = __webpack_require__(1000);

var _createNamespace = (0, _utils.createNamespace)('swipe-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanSwipe')],
  data: function data() {
    return {
      offset: 0,
      inited: false,
      mounted: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.mounted = true;
    });
  },
  computed: {
    style: function style() {
      var style = {};
      var _this$parent = this.parent,
          size = _this$parent.size,
          vertical = _this$parent.vertical;

      if (size) {
        style[vertical ? 'height' : 'width'] = size + "px";
      }

      if (this.offset) {
        style.transform = "translate" + (vertical ? 'Y' : 'X') + "(" + this.offset + "px)";
      }

      return style;
    },
    shouldRender: function shouldRender() {
      var index = this.index,
          inited = this.inited,
          parent = this.parent,
          mounted = this.mounted;

      if (!parent.lazyRender || inited) {
        return true;
      } // wait for all item to mount, so we can get the exact count


      if (!mounted) {
        return false;
      }

      var active = parent.activeIndicator;
      var maxActive = parent.count - 1;
      var prevActive = active === 0 && parent.loop ? maxActive : active - 1;
      var nextActive = active === maxActive && parent.loop ? 0 : active + 1;
      var shouldRender = index === active || index === prevActive || index === nextActive;

      if (shouldRender) {
        this.inited = true;
      }

      return shouldRender;
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem(),
      "style": this.style,
      "on": (0, _extends2.default)({}, this.$listeners)
    }, [this.shouldRender && this.slots()]);
  }
});

exports.default = _default;

/***/ }),

/***/ 1026:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _utils = __webpack_require__(982);

var _style = __webpack_require__(1034);

var _event = __webpack_require__(983);

var _raf = __webpack_require__(1032);

var _number = __webpack_require__(1002);

var _touch = __webpack_require__(988);

var _relation = __webpack_require__(1000);

var _bindEvent = __webpack_require__(990);

// Utils
// Mixins
var _createNamespace = (0, _utils.createNamespace)('swipe'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [_touch.TouchMixin, (0, _relation.ParentMixin)('vanSwipe'), (0, _bindEvent.BindEventMixin)(function (bind, isBind) {
    bind(window, 'resize', this.resize, true);
    bind(window, 'orientationchange', this.resize, true);
    bind(window, 'visibilitychange', this.onVisibilityChange);

    if (isBind) {
      this.initialize();
    } else {
      this.clear();
    }
  })],
  props: {
    width: [Number, String],
    height: [Number, String],
    autoplay: [Number, String],
    vertical: Boolean,
    lazyRender: Boolean,
    indicatorColor: String,
    loop: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 500
    },
    touchable: {
      type: Boolean,
      default: true
    },
    initialSwipe: {
      type: [Number, String],
      default: 0
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    stopPropagation: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      rect: null,
      offset: 0,
      active: 0,
      deltaX: 0,
      deltaY: 0,
      swiping: false,
      computedWidth: 0,
      computedHeight: 0
    };
  },
  watch: {
    children: function children() {
      this.initialize();
    },
    initialSwipe: function initialSwipe() {
      this.initialize();
    },
    autoplay: function autoplay(_autoplay) {
      if (_autoplay > 0) {
        this.autoPlay();
      } else {
        this.clear();
      }
    }
  },
  computed: {
    count: function count() {
      return this.children.length;
    },
    maxCount: function maxCount() {
      return Math.ceil(Math.abs(this.minOffset) / this.size);
    },
    delta: function delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },
    size: function size() {
      return this[this.vertical ? 'computedHeight' : 'computedWidth'];
    },
    trackSize: function trackSize() {
      return this.count * this.size;
    },
    activeIndicator: function activeIndicator() {
      return (this.active + this.count) % this.count;
    },
    isCorrectDirection: function isCorrectDirection() {
      var expect = this.vertical ? 'vertical' : 'horizontal';
      return this.direction === expect;
    },
    trackStyle: function trackStyle() {
      var style = {
        transitionDuration: (this.swiping ? 0 : this.duration) + "ms",
        transform: "translate" + (this.vertical ? 'Y' : 'X') + "(" + this.offset + "px)"
      };

      if (this.size) {
        var mainAxis = this.vertical ? 'height' : 'width';
        var crossAxis = this.vertical ? 'width' : 'height';
        style[mainAxis] = this.trackSize + "px";
        style[crossAxis] = this[crossAxis] ? this[crossAxis] + "px" : '';
      }

      return style;
    },
    indicatorStyle: function indicatorStyle() {
      return {
        backgroundColor: this.indicatorColor
      };
    },
    minOffset: function minOffset() {
      return (this.vertical ? this.rect.height : this.rect.width) - this.size * this.count;
    }
  },
  mounted: function mounted() {
    this.bindTouchEvent(this.$refs.track);
  },
  methods: {
    // initialize swipe position
    initialize: function initialize(active) {
      if (active === void 0) {
        active = +this.initialSwipe;
      }

      if (!this.$el || (0, _style.isHidden)(this.$el)) {
        return;
      }

      clearTimeout(this.timer);
      var rect = {
        width: this.$el.offsetWidth,
        height: this.$el.offsetHeight
      };
      this.rect = rect;
      this.swiping = true;
      this.active = active;
      this.computedWidth = +this.width || rect.width;
      this.computedHeight = +this.height || rect.height;
      this.offset = this.getTargetOffset(active);
      this.children.forEach(function (swipe) {
        swipe.offset = 0;
      });
      this.autoPlay();
    },
    // @exposed-api
    resize: function resize() {
      this.initialize(this.activeIndicator);
    },
    onVisibilityChange: function onVisibilityChange() {
      if (document.hidden) {
        this.clear();
      } else {
        this.autoPlay();
      }
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.touchable) return;
      this.clear();
      this.touchStartTime = Date.now();
      this.touchStart(event);
      this.correctPosition();
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.touchable || !this.swiping) return;
      this.touchMove(event);

      if (this.isCorrectDirection) {
        (0, _event.preventDefault)(event, this.stopPropagation);
        this.move({
          offset: this.delta
        });
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (!this.touchable || !this.swiping) return;
      var size = this.size,
          delta = this.delta;
      var duration = Date.now() - this.touchStartTime;
      var speed = delta / duration;
      var shouldSwipe = Math.abs(speed) > 0.25 || Math.abs(delta) > size / 2;

      if (shouldSwipe && this.isCorrectDirection) {
        var offset = this.vertical ? this.offsetY : this.offsetX;
        var pace = 0;

        if (this.loop) {
          pace = offset > 0 ? delta > 0 ? -1 : 1 : 0;
        } else {
          pace = -Math[delta > 0 ? 'ceil' : 'floor'](delta / size);
        }

        this.move({
          pace: pace,
          emitChange: true
        });
      } else if (delta) {
        this.move({
          pace: 0
        });
      }

      this.swiping = false;
      this.autoPlay();
    },
    getTargetActive: function getTargetActive(pace) {
      var active = this.active,
          count = this.count,
          maxCount = this.maxCount;

      if (pace) {
        if (this.loop) {
          return (0, _number.range)(active + pace, -1, count);
        }

        return (0, _number.range)(active + pace, 0, maxCount);
      }

      return active;
    },
    getTargetOffset: function getTargetOffset(targetActive, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      var currentPosition = targetActive * this.size;

      if (!this.loop) {
        currentPosition = Math.min(currentPosition, -this.minOffset);
      }

      var targetOffset = offset - currentPosition;

      if (!this.loop) {
        targetOffset = (0, _number.range)(targetOffset, this.minOffset, 0);
      }

      return targetOffset;
    },
    move: function move(_ref) {
      var _ref$pace = _ref.pace,
          pace = _ref$pace === void 0 ? 0 : _ref$pace,
          _ref$offset = _ref.offset,
          offset = _ref$offset === void 0 ? 0 : _ref$offset,
          emitChange = _ref.emitChange;
      var loop = this.loop,
          count = this.count,
          active = this.active,
          children = this.children,
          trackSize = this.trackSize,
          minOffset = this.minOffset;

      if (count <= 1) {
        return;
      }

      var targetActive = this.getTargetActive(pace);
      var targetOffset = this.getTargetOffset(targetActive, offset); // auto move first and last swipe in loop mode

      if (loop) {
        if (children[0] && targetOffset !== minOffset) {
          var outRightBound = targetOffset < minOffset;
          children[0].offset = outRightBound ? trackSize : 0;
        }

        if (children[count - 1] && targetOffset !== 0) {
          var outLeftBound = targetOffset > 0;
          children[count - 1].offset = outLeftBound ? -trackSize : 0;
        }
      }

      this.active = targetActive;
      this.offset = targetOffset;

      if (emitChange && targetActive !== active) {
        this.$emit('change', this.activeIndicator);
      }
    },
    // @exposed-api
    prev: function prev() {
      var _this = this;

      this.correctPosition();
      this.resetTouchStatus();
      (0, _raf.doubleRaf)(function () {
        _this.swiping = false;

        _this.move({
          pace: -1,
          emitChange: true
        });
      });
    },
    // @exposed-api
    next: function next() {
      var _this2 = this;

      this.correctPosition();
      this.resetTouchStatus();
      (0, _raf.doubleRaf)(function () {
        _this2.swiping = false;

        _this2.move({
          pace: 1,
          emitChange: true
        });
      });
    },
    // @exposed-api
    swipeTo: function swipeTo(index, options) {
      var _this3 = this;

      if (options === void 0) {
        options = {};
      }

      this.correctPosition();
      this.resetTouchStatus();
      (0, _raf.doubleRaf)(function () {
        var targetIndex;

        if (_this3.loop && index === _this3.count) {
          targetIndex = _this3.active === 0 ? 0 : index;
        } else {
          targetIndex = index % _this3.count;
        }

        if (options.immediate) {
          (0, _raf.doubleRaf)(function () {
            _this3.swiping = false;
          });
        } else {
          _this3.swiping = false;
        }

        _this3.move({
          pace: targetIndex - _this3.active,
          emitChange: true
        });
      });
    },
    correctPosition: function correctPosition() {
      this.swiping = true;

      if (this.active <= -1) {
        this.move({
          pace: this.count
        });
      }

      if (this.active >= this.count) {
        this.move({
          pace: -this.count
        });
      }
    },
    clear: function clear() {
      clearTimeout(this.timer);
    },
    autoPlay: function autoPlay() {
      var _this4 = this;

      var autoplay = this.autoplay;

      if (autoplay > 0 && this.count > 1) {
        this.clear();
        this.timer = setTimeout(function () {
          _this4.next();

          _this4.autoPlay();
        }, autoplay);
      }
    },
    genIndicator: function genIndicator() {
      var _this5 = this;

      var h = this.$createElement;
      var count = this.count,
          activeIndicator = this.activeIndicator;
      var slot = this.slots('indicator');

      if (slot) {
        return slot;
      }

      if (this.showIndicators && count > 1) {
        return h("div", {
          "class": bem('indicators', {
            vertical: this.vertical
          })
        }, [Array.apply(void 0, Array(count)).map(function (empty, index) {
          return h("i", {
            "class": bem('indicator', {
              active: index === activeIndicator
            }),
            "style": index === activeIndicator ? _this5.indicatorStyle : null
          });
        })]);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem()
    }, [h("div", {
      "ref": "track",
      "style": this.trackStyle,
      "class": bem('track', {
        vertical: this.vertical
      })
    }, [this.slots()]), this.genIndicator()]);
  }
});

exports.default = _default;

/***/ }),

/***/ 1027:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createBEM = createBEM;

/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
function gen(name, mods) {
  if (!mods) {
    return '';
  }

  if (typeof mods === 'string') {
    return " " + name + "--" + mods;
  }

  if (Array.isArray(mods)) {
    return mods.reduce(function (ret, item) {
      return ret + gen(name, item);
    }, '');
  }

  return Object.keys(mods).reduce(function (ret, key) {
    return ret + (mods[key] ? gen(name, key) : '');
  }, '');
}

function createBEM(name) {
  return function (el, mods) {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = el ? name + "__" + el : name;
    return "" + el + gen(el, mods);
  };
}

/***/ }),

/***/ 1028:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(981);

exports.__esModule = true;
exports.unifySlots = unifySlots;
exports.createComponent = createComponent;

__webpack_require__(998);

var _ = __webpack_require__(982);

var _string = __webpack_require__(1003);

var _slots = __webpack_require__(1023);

var _vue = _interopRequireDefault(__webpack_require__(23));

/**
 * Create a basic component with common options
 */
function install(Vue) {
  var name = this.name;
  Vue.component(name, this);
  Vue.component((0, _string.camelize)("-" + name), this);
} // unify slots & scopedSlots


function unifySlots(context) {
  // use data.scopedSlots in lower Vue version
  var scopedSlots = context.scopedSlots || context.data.scopedSlots || {};
  var slots = context.slots();
  Object.keys(slots).forEach(function (key) {
    if (!scopedSlots[key]) {
      scopedSlots[key] = function () {
        return slots[key];
      };
    }
  });
  return scopedSlots;
} // should be removed after Vue 3


function transformFunctionComponent(pure) {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: function render(h, context) {
      return pure(h, context.props, unifySlots(context), context);
    }
  };
}

function createComponent(name) {
  return function (sfc) {
    if ((0, _.isFunction)(sfc)) {
      sfc = transformFunctionComponent(sfc);
    }

    if (!sfc.functional) {
      sfc.mixins = sfc.mixins || [];
      sfc.mixins.push(_slots.SlotsMixin);
    }

    sfc.name = name;
    sfc.install = install;
    return sfc;
  };
}

/***/ }),

/***/ 1029:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(981);

exports.__esModule = true;
exports.createI18N = createI18N;

var _ = __webpack_require__(982);

var _string = __webpack_require__(1003);

var _locale = _interopRequireDefault(__webpack_require__(998));

function createI18N(name) {
  var prefix = (0, _string.camelize)(name) + '.';
  return function (path) {
    var messages = _locale.default.messages();

    var message = (0, _.get)(messages, prefix + path) || (0, _.get)(messages, path);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return (0, _.isFunction)(message) ? message.apply(void 0, args) : message;
  };
}

/***/ }),

/***/ 1030:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createNamespace = createNamespace;

var _bem = __webpack_require__(1027);

var _component = __webpack_require__(1028);

var _i18n = __webpack_require__(1029);

function createNamespace(name) {
  name = 'van-' + name;
  return [(0, _component.createComponent)(name), (0, _bem.createBEM)(name), (0, _i18n.createI18N)(name)];
}

/***/ }),

/***/ 1031:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.deepAssign = deepAssign;

var _ = __webpack_require__(982);

var hasOwnProperty = Object.prototype.hasOwnProperty;

function assignKey(to, from, key) {
  var val = from[key];

  if (!(0, _.isDef)(val)) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !(0, _.isObject)(val)) {
    to[key] = val;
  } else {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    to[key] = deepAssign(Object(to[key]), from[key]);
  }
}

function deepAssign(to, from) {
  Object.keys(from).forEach(function (key) {
    assignKey(to, from, key);
  });
  return to;
}

/***/ }),

/***/ 1032:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.raf = raf;
exports.doubleRaf = doubleRaf;
exports.cancelRaf = cancelRaf;

var _ = __webpack_require__(982);

/**
 * requestAnimationFrame polyfill
 */
var prev = Date.now();
/* istanbul ignore next */

function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}
/* istanbul ignore next */


var root = _.isServer ? global : window;
/* istanbul ignore next */

var iRaf = root.requestAnimationFrame || fallback;
/* istanbul ignore next */

var iCancel = root.cancelAnimationFrame || root.clearTimeout;

function raf(fn) {
  return iRaf.call(root, fn);
} // double raf for animation


function doubleRaf(fn) {
  raf(function () {
    raf(fn);
  });
}

function cancelRaf(id) {
  iCancel.call(root, id);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }),

/***/ 1033:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getScroller = getScroller;
exports.getScrollTop = getScrollTop;
exports.setScrollTop = setScrollTop;
exports.getRootScrollTop = getRootScrollTop;
exports.setRootScrollTop = setRootScrollTop;
exports.getElementTop = getElementTop;
exports.getVisibleHeight = getVisibleHeight;
exports.getVisibleTop = getVisibleTop;

function isWindow(val) {
  return val === window;
} // get nearest scroll element
// https://github.com/vant-ui/vant/issues/3823


var overflowScrollReg = /scroll|auto|overlay/i;

function getScroller(el, root) {
  if (root === void 0) {
    root = window;
  }

  var node = el;

  while (node && node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === 1 && node !== root) {
    var _window$getComputedSt = window.getComputedStyle(node),
        overflowY = _window$getComputedSt.overflowY;

    if (overflowScrollReg.test(overflowY)) {
      return node;
    }

    node = node.parentNode;
  }

  return root;
}

function getScrollTop(el) {
  var top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset; // iOS scroll bounce cause minus scrollTop

  return Math.max(top, 0);
}

function setScrollTop(el, value) {
  if ('scrollTop' in el) {
    el.scrollTop = value;
  } else {
    el.scrollTo(el.scrollX, value);
  }
}

function getRootScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
} // get distance from element top to page top or scroller top


function getElementTop(el, scroller) {
  if (isWindow(el)) {
    return 0;
  }

  var scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop();
  return el.getBoundingClientRect().top + scrollTop;
}

function getVisibleHeight(el) {
  if (isWindow(el)) {
    return el.innerHeight;
  }

  return el.getBoundingClientRect().height;
}

function getVisibleTop(el) {
  if (isWindow(el)) {
    return 0;
  }

  return el.getBoundingClientRect().top;
}

/***/ }),

/***/ 1034:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isHidden = isHidden;

function isHidden(el) {
  var style = window.getComputedStyle(el);
  var hidden = style.display === 'none'; // offsetParent returns null in the following situations:
  // 1. The element or its parent element has the display property set to none.
  // 2. The element has the position property set to fixed

  var parentHidden = el.offsetParent === null && style.position !== 'fixed';
  return hidden || parentHidden;
}

/***/ }),

/***/ 1035:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addUnit = addUnit;
exports.unitToPx = unitToPx;

var _ = __webpack_require__(982);

var _number = __webpack_require__(1036);

function addUnit(value) {
  if (!(0, _.isDef)(value)) {
    return undefined;
  }

  value = String(value);
  return (0, _number.isNumeric)(value) ? value + "px" : value;
} // cache


var rootFontSize;

function getRootFontSize() {
  if (!rootFontSize) {
    var doc = document.documentElement;
    var fontSize = doc.style.fontSize || window.getComputedStyle(doc).fontSize;
    rootFontSize = parseFloat(fontSize);
  }

  return rootFontSize;
}

function convertRem(value) {
  value = value.replace(/rem/g, '');
  return +value * getRootFontSize();
}

function convertVw(value) {
  value = value.replace(/vw/g, '');
  return +value * window.innerWidth / 100;
}

function convertVh(value) {
  value = value.replace(/vh/g, '');
  return +value * window.innerHeight / 100;
}

function unitToPx(value) {
  if (typeof value === 'number') {
    return value;
  }

  if (_.inBrowser) {
    if (value.indexOf('rem') !== -1) {
      return convertRem(value);
    }

    if (value.indexOf('vw') !== -1) {
      return convertVw(value);
    }

    if (value.indexOf('vh') !== -1) {
      return convertVh(value);
    }
  }

  return parseFloat(value);
}

/***/ }),

/***/ 1036:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isNumeric = isNumeric;
exports.isNaN = isNaN;

function isNumeric(val) {
  return /^\d+(\.\d+)?$/.test(val);
}

function isNaN(val) {
  if (Number.isNaN) {
    return Number.isNaN(val);
  } // eslint-disable-next-line no-self-compare


  return val !== val;
}

/***/ }),

/***/ 1037:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.sortChildren = sortChildren;

function flattenVNodes(vnodes) {
  var result = [];

  function traverse(vnodes) {
    vnodes.forEach(function (vnode) {
      result.push(vnode);

      if (vnode.componentInstance) {
        traverse(vnode.componentInstance.$children.map(function (item) {
          return item.$vnode;
        }));
      }

      if (vnode.children) {
        traverse(vnode.children);
      }
    });
  }

  traverse(vnodes);
  return result;
} // sort children instances by vnodes order


function sortChildren(children, parent) {
  var componentOptions = parent.$vnode.componentOptions;

  if (!componentOptions || !componentOptions.children) {
    return;
  }

  var vnodes = flattenVNodes(componentOptions.children);
  children.sort(function (a, b) {
    return vnodes.indexOf(a.$vnode) - vnodes.indexOf(b.$vnode);
  });
}

/***/ }),

/***/ 1139:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data() {
    return {
      g: window.$,
      itemId: this.$route.params.itemId,
      shareItem: {},
      shareCard: null,
      shop: {},
      shopImgs: [],
      sharerId: null
    };
  },
  created() {
    $.Req.initWxApi(() => {
      if ($.data.user.memberId) this.sharerId = $.data.user.memberId;else this.sharerId = $.data.user.staffId;
      this.queryShareItem(this.itemId);
    });
  },
  methods: {
    queryShareItem(itemId) {
      this.itemNoteDlgView = true;
      let args = { itemId: itemId };
      $.Req.service($.SvName.SHARE_ITEM_QUERY, args, ret => {
        this.shareItem = ret.shareItem;
        if (this.shareItem.shareCardId) {
          $.Req.service($.SvName.CARD_QUERY, {
            queryType: 1,
            cardId: this.shareItem.shareCardId
          }, ret => {
            this.shareCard = ret.cardList ? ret.cardList[0] : {};
          });
        }
        this.queryShop();
      }, true);
    },

    queryShop() {
      let args = { queryType: 3, encSid: $.data.shop.encSid };
      $.Req.service($.SvName.SHOP_QUERY, args, ret => {
        this.shop = ret.shop;
        if (this.shop.logoPathname) {
          this.shopImgs.push(this.shop.logoPathname);
        }
        if (this.shop.shopPics) {
          let imgs = this.shop.shopPics.split(',');
          for (let img of imgs) {
            this.shopImgs.push(img);
          }
        }
        let addr = '';
        if (this.shop.addrProvinceName) addr += this.shop.addrProvinceName;
        if (this.shop.addrCityName) addr += this.shop.addrCityName;
        if (this.shop.addrDistrictName) addr += this.shop.addrDistrictName;
        if (this.shop.addrDetail) addr += this.shop.addrDetail;
        this.shop.addr = addr;
        this.setShareConf();
      });
    },

    receive() {
      alert('请点击右上角...分享给微信好友或朋友圈。');
    },

    setShareConf() {
      $.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
        let shopId = ret.shopId;
        let imgUrl = this.shareItem.itemImg ? $.Util.getImgUrl(this.shareItem.itemImg) : $.Util.getImgUrl(this.shop.logoPathname);
        imgUrl = 'http://tool.jzongguan.com/url-redirect.php?url=' + encodeURIComponent(imgUrl);
        let shareTitle = "{0}-{1}".format(this.shareItem.itemName, this.shop.shopName);
        let shareLink = "http://tool.jzongguan.com/#/share-item?s={0}&item={1}&sharer={2}".format(shopId, this.shareItem.itemId, this.sharerId);
        let shareDesc = this.shareItem.receiverNote ? this.shareItem.receiverNote.shorten(30) : '点击有惊喜！';
        wx.ready(() => {
          wx.onMenuShareTimeline({
            title: shareTitle,
            link: shareLink,
            imgUrl: imgUrl,
            success: () => {
              this.createShareItemOwner();
            },
            cancel: () => {
              //toddo
            }
          });
          wx.onMenuShareAppMessage({
            title: shareTitle,
            desc: shareDesc,
            link: shareLink,
            imgUrl: imgUrl,
            success: () => {
              this.createShareItemOwner();
            },
            cancel: () => {
              // 用户取消分享后执行的回调函数
            }
          });
        });
        wx.error(function (res) {
          // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
          if ($.data.user.staffId === 1) alert(JSON.stringify(res));
        });
      });
    },

    createShareItemOwner() {
      let args = {
        itemId: this.shareItem.itemId,
        sharerType: this.shareItem.sharerType,
        sharerId: this.sharerId
      };
      $.Req.service($.SvName.SHARE_ITEM_OWNER_CREATE, args, ret => {
        $.Msg.success('感谢分享！');
      }, true);
    }
  }
});

/***/ }),

/***/ 1142:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, "img[data-v-20c1dfab]{display:block;width:100%;margin:0}.-style-[data-v-20c1dfab]{width:100%;min-height:300px;padding:0 0 40px;background:-webkit-gradient(from top to bottom,#f6d366,#faa881);background:-webkit-linear-gradient(#f6d366,#faa881);background:-o-linear-gradient(#f6d366,#faa881);background:-moz-linear-gradient(#f6d366,#faa881);background:linear-gradient(#f6d366,#faa881)}.-style- .shop-name[data-v-20c1dfab]{text-align:center;font-size:14px;color:#f5f5f5;line-height:40px;border-top:1px solid #555;border-bottom:1px solid #555;margin:0 20px}.-style- .item-img img[data-v-20c1dfab]{display:block;width:100%}.-style- .item-tit[data-v-20c1dfab]{font-size:18px;line-height:1.5;font-weight:700;text-align:center;padding:10px}.-style- .theme-padding[data-v-20c1dfab]{background:#fff;border-radius:5px;box-shadow:inset 0 10px 20px #fff0cc;position:relative;margin:0 17px 20px 15px;padding:20px 0 1px}.-style- .theme-padding[data-v-20c1dfab]:after,.-style- .theme-padding[data-v-20c1dfab]:before{position:absolute;top:0;left:50%;content:\"\";border-radius:10px;transform:translateX(-50%);display:inline-block}.-style- .theme-padding .article[data-v-20c1dfab]{background:#fff;margin-top:-3px;border-radius:3px;padding:20px 20px 10px}.-style- .theme-padding .article.pb-20[data-v-20c1dfab]{padding-bottom:25px}.-style- .theme-padding .article ul[data-v-20c1dfab]{margin-bottom:-25px}.-style- .theme-padding .article ul li .cont[data-v-20c1dfab]{margin:10px 0}.-style- .theme-padding .article img[data-v-20c1dfab]{display:block;width:100%;margin-bottom:10px}.-style- .theme-padding .article[data-v-20c1dfab]:before{top:4px;width:100%;height:44px;content:\"\";display:inline-block;border-radius:5px 5px 0 0;position:absolute;left:50%;box-shadow:inset 0 15px 10px #ffecc4;z-index:10;transform:translateX(-50%)}.-style- .theme-padding[data-v-20c1dfab]:after{top:0;width:100%;background:#ffd47b;height:5px}.-style- .theme-padding[data-v-20c1dfab]:before{top:-5px;width:103%;background:#ffad01;height:15px}.-style- .tit[data-v-20c1dfab]{width:100%;text-align:center;color:#dbb76b;font-size:15px;font-weight:700;background:url(/static/img/groupbuypro/group-item-ora5.png) 50% no-repeat/contain}.-style- .tit.user-tit[data-v-20c1dfab]{background-size:170% 88%}.-style- p a[data-v-20c1dfab]{color:#333}.-style- section[data-v-20c1dfab]{margin:10px;border-radius:2px;padding-bottom:10px}.-style- section .tit[data-v-20c1dfab]{text-align:center;font-weight:700;padding:10px 0;font-size:14px}.-style- section .tit[data-v-20c1dfab]:before{content:\"\\2014\\2014\\2014\\2014\\2022\";color:orange;padding-right:12px;font-weight:400;font-size:12px}.-style- section .tit[data-v-20c1dfab]:after{content:\"\\2022\\2014\\2014\\2014\\2014\";color:orange;padding-left:12px;font-weight:400;font-size:12px}.-style- .article[data-v-20c1dfab]{background:#fff;margin-top:-3px;border-radius:3px}.-style- .bottom-opt[data-v-20c1dfab]{position:fixed;bottom:0;padding:20px 0 0;width:100%;text-align:center}.-style- .shop-imgs img[data-v-20c1dfab]{display:block;margin-bottom:10px;width:100%}.-style- .share-tit[data-v-20c1dfab]{margin:16px 20px 20px;padding:10px 0}.-style- .share-tit[data-v-20c1dfab]:after,.-style- .share-tit[data-v-20c1dfab]:before{display:none}.theme-black .-style-[data-v-20c1dfab]{background:url(/static/img/groupbuypro/blackbg.png) no-repeat;background-attachment:fixed;background-position-y:bottom;background-size:cover}.theme-black .-style- .tit[data-v-20c1dfab]{color:#ffad01;width:182px;height:68px;text-align:center;font-size:15px;font-weight:700;background:url(/static/img/groupbuypro/titbg.png) top no-repeat;background-size:100% 100%;margin:0 auto;line-height:74px}.theme-black .-style- .user-tit[data-v-20c1dfab]{min-width:200px;max-width:220px;width:unset;overflow:hidden;text-overflow:ellipsis}.theme-black .-style- .article[data-v-20c1dfab]{line-height:25px;letter-spacing:2px;position:relative;padding:20px 20px 10px;background:#111;color:#fff;border-radius:5px;box-shadow:-2px -2px 3px #2c2a28,2px 2px 3px #2c2a28;margin:0 0 15px}.theme-black .-style- .theme-padding[data-v-20c1dfab]{background:none;border-radius:0;box-shadow:none;margin:0 20px}.theme-black .-style- .theme-padding .article[data-v-20c1dfab]:before,.theme-black .-style- .theme-padding[data-v-20c1dfab]:after,.theme-black .-style- .theme-padding[data-v-20c1dfab]:before{display:none}.theme-black .-style- p a[data-v-20c1dfab]{color:#fff}", ""]);

// exports


/***/ }),

/***/ 1147:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1142);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("19121969", content, true, {});

/***/ }),

/***/ 1158:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style-"
  }, [_c('page-head', {
    attrs: {
      "title": "分销详情"
    }
  }), _vm._v(" "), (_vm.shareItem.itemImg) ? _c('div', {
    staticClass: "item-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.g.Util.getImgUrl(_vm.shareItem.itemImg)
    }
  })]) : _c('div', {
    staticStyle: {
      "height": "5px"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "theme-padding share-tit"
  }, [_c('div', {
    staticClass: "item-tit theme-font-color2"
  }, [_vm._v(_vm._s(_vm.shareItem.itemName))]), _vm._v(" "), (_vm.shareItem.beginDate && _vm.shareItem.endDate) ? _c('div', {
    staticClass: "small center"
  }, [_vm._v("\n\t\t\t有效期： " + _vm._s(_vm.g.Util.formatDate(_vm.shareItem.beginDate, false)) + " ~ " + _vm._s(_vm.g.Util.formatDate(_vm.shareItem.endDate,
    false)) + "\n\t\t")]) : _vm._e()]), _vm._v(" "), (_vm.shareItem.itemDesc) ? _c('div', {
    staticClass: "item-notes theme-padding"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "article"
  }, [_c('pre', [_vm._v(_vm._s(_vm.shareItem.itemDesc))])])]) : _vm._e(), _vm._v(" "), (_vm.shareItem.shareCardId && _vm.shareCard) ? _c('div', {
    staticClass: "item-notes theme-padding"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("分享会员卡")]), _vm._v(" "), _c('div', {
    staticClass: "article"
  }, [_c('div', {
    staticClass: "center"
  }, [_vm._v("『 "), _c('b', [_vm._v(_vm._s(_vm.shareCard.cardName))]), _vm._v(" 』")]), _vm._v(" "), _c('p'), _vm._v(" "), _c('pre', [_vm._v(_vm._s(_vm.shareCard.intro))])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "item-notes theme-padding"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "article"
  }, [_c('pre', [_vm._v(_vm._s(_vm.shareItem.receiverNote))])])]), _vm._v(" "), (_vm.shareItem.morePics) ? _c('div', {
    staticClass: "shop-imgs theme-padding"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("分享项目图片")]), _vm._v(" "), _c('div', {
    staticClass: "article"
  }, _vm._l((_vm.shareItem.morePics.split(',')), function(img) {
    return _c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(img)
      }
    })
  }), 0)]) : _vm._e(), _vm._v(" "), (_vm.shopImgs.length > 0) ? _c('div', {
    staticClass: "shop-imgs theme-padding"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("场馆风采")]), _vm._v(" "), _c('div', {
    staticClass: "article"
  }, _vm._l((_vm.shopImgs), function(img) {
    return _c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(img)
      }
    })
  }), 0)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "shop-imgs theme-padding"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("场馆联系")]), _vm._v(" "), _c('div', {
    staticClass: "article"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.shop.addr) + "\n\t\t\t"), (_vm.shop.tel) ? _c('p', [_vm._v("场馆电话： "), _c('a', {
    attrs: {
      "tel": _vm.shop.tel
    }
  }, [_vm._v(_vm._s(_vm.shop.tel))])]) : _vm._e(), _vm._v(" "), (_vm.g.data.user.staffId) ? _c('p', {
    staticClass: "row align-center start"
  }, [_vm._v("\n\t\t\t\t联系人： " + _vm._s(_vm.g.data.user.uname) + " "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("/")]), _vm._v(" "), _c('a', {
    staticClass: "row align-center start",
    attrs: {
      "tel": _vm.g.data.user.phoneNo
    }
  }, [_c('i', {
    staticClass: "iconfont iconphone",
    staticStyle: {
      "margin-bottom": "-2px"
    }
  }), _vm._v(" " + _vm._s(_vm.g.data.user.phoneNo))])]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "theme-padding"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("场馆介绍")]), _vm._v(" "), _c('div', {
    staticClass: "article"
  }, [(_vm.shop.shopIntro) ? _c('pre', [_vm._v(_vm._s(_vm.shop.shopIntro))]) : _c('i', {
    staticClass: "gray"
  }, [_vm._v("暂无介绍")])])]), _vm._v(" "), _c('div', {
    staticClass: "bottom-opt"
  }, [_c('div', {
    staticClass: "theme-btn-bg",
    staticStyle: {
      "line-height": "38px",
      "height": "38px"
    },
    on: {
      "click": _vm.receive
    }
  }, [_vm._v("立即分享")])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tit"
  }, [_c('span', [_vm._v("项目说明")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tit"
  }, [_c('span', {}, [_vm._v("奖励说明")])])
}]}

/***/ }),

/***/ 1312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sys_ajax__ = __webpack_require__(992);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cropperjs__ = __webpack_require__(1575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cropperjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cropperjs__);
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * @file 选中的图片文件
 * @path 上传的地址     @isUpload 为 true 必填
 * @isUpload 是否需要上传，默认 true;  上传/下载
 * @option 截图工具配置，具体配置参考：https://www.npmjs.com/package/cropperjs
 * @outOption 导出图片配置，具体配置参考：https://www.npmjs.com/package/cropperjs
 *
 * @closeFun    方法：关闭触发
 * @onProgress  方法：上传时触发
 * @onSuccess   方法：上传成功触发
 * @onError     方法：上传报错触发
 *
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "qd-cropper",
  components: {},
  emits: ["closeFun", "onProgress", "onSuccess", "onError"],
  props: {
    file: {
      type: File,
      required: true
    },
    path: {
      type: String
    },
    isUpload: {
      type: Boolean,
      default: true
    },
    option: {
      default: {},
      required: false
    },
    outOption: {
      default: {},
      required: false
    }
  },
  data() {
    return {
      g: $,
      cropper: null,
      optionValue: {
        width: 200,
        height: 200,
        viewMode: 1, // 视图模式
        dragMode: "move", // 拖动模式
        initialAspectRatio: 1 / 1, // 初始纵横比例
        // aspectRatio: 1 / 1,  // 固定纵横比例
        autoCropArea: 0.8, // 自动裁剪区域大小
        preview: null,
        cropBoxMovable: false,
        cropBoxResizable: false, // 禁止拖动剪切框
        toggleDragModeOnDblclick: false // 启用以在 "crop" 和 "move" 之间切换拖动模式
      },
      canvasOption: {
        // 输出图片像素
        // minWidth: 256,
        // minHeight: 256,
        // "low" (default), "medium", or "high".
        imageSmoothingQuality: "high", // 设置图像平滑的质量，“低”（默认）、“中”或“高”之一。
        fillColor: "transparent" //填充色为透明色
      },
      imgUrl: null
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.createImgUrl();
  },
  methods: {
    createCropper() {
      if (this.cropper) {
        this.cropper.destroy();
      }
      const option = Object.assign(this.optionValue, this.option);
      this.cropper = new __WEBPACK_IMPORTED_MODULE_1_cropperjs___default.a(this.$refs.cropperRefs, option);
      this.cropper.replace(this.imgUrl);
    },

    getCanvas() {
      const outOption = Object.assign(this.canvasOption, this.outOption);
      return this.cropper.getCroppedCanvas(outOption);
    },

    upload() {
      if (!this.path) alert("请传入上传地址");
      this.getCanvas().toBlob(blob => {
        const formData = new FormData();
        formData.append("croppedImage", blob /*, 'example.png' */);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__components_sys_ajax__["a" /* default */])({
          headers: {},
          withCredentials: true,
          formData: formData,
          action: this.path,
          onProgress: e => {
            this.handleProgress(e);
          },
          onSuccess: res => {
            this.handleSuccess(res);
          },
          onError: (err, response) => {
            this.handleError(err, response);
          }
        });
      });
    },

    handleProgress(e) {
      this.$emit("onProgress", e);
    },

    handleSuccess(e) {
      this.$emit("onSuccess", e);
    },

    handleError(err, response) {
      this.$emit("onError", err, response);
      alert("上传失败，请重新操作！");
    },

    download() {
      const canvas = this.getCanvas();
      const file = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.download = "截图.png";
      link.href = file;
      link.click();
    },

    overFun() {
      if (this.isUpload) {
        this.upload();
      } else {
        this.download();
      }
    },

    createImgUrl() {
      const _this = this;
      let reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = function () {
        _this.imgUrl = reader.result;
        _this.createCropper();
      };
      reader.onerror = function (error) {
        alert("Error: ", error);
      };
    },
    closeFun() {
      this.$emit("closeFun");
    }
  }
});

/***/ }),

/***/ 1378:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "event-check-joiner.vue",

  props: {
    subjectProp: Object
  },

  data() {
    return {
      g: window.$,
      query: null,
      eventEnrollList: []
    };
  },

  mounted() {
    this.queryEnrollList();
  },

  methods: {
    queryEnrollList() {
      this.eventEnrollList = [];
      let args = {
        eventId: this.subjectProp.eventId,
        subjectId: this.subjectProp.subject.subjectId,
        optionIndex: this.subjectProp.optionIndex
      };
      $.Req.service($.SvName.EVENT_ENROLLQUERY, args, ret => {
        this.eventEnrollList = ret.eventEnrollList;
      });
    }
  }
});

/***/ }),

/***/ 1384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_market_event_check_joiner_vue__ = __webpack_require__(2215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_market_event_check_joiner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_market_event_check_joiner_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "event-check-statistics.vue",

  components: { EventCheckJoiner: __WEBPACK_IMPORTED_MODULE_0__pages_market_event_check_joiner_vue___default.a },

  data() {
    return {
      query: null,
      curEnrollCnt: null,
      eventSubjectList: [],
      eventSubjectStatList: [],
      eventCheckJoiner: false,
      subjectProp: null
    };
  },

  mounted() {
    this.query = this.$route.query;
    this.querySubjectStat();
  },

  methods: {
    querySubjectStat() {
      let eventSubjectList = [],
          eventSubjectStatList = [];
      let _this = this;
      let args = {
        eventId: this.query.eventId
      };
      this.eventSubjectStatList = [];
      $.Req.service($.SvName.EVENT_SUBJECT_QUERY, args, ret => {
        if (!ret.eventSubjectList) {
          return;
        }

        this.eventSubjectList = ret.eventSubjectList;

        $.Req.service($.SvName.EVENT_SUBJECT_STAT, args, ret => {
          if (!ret.eventSubjectStatList) {
            return;
          }
          this.curEnrollCnt = ret.curEnrollCnt;
          this.eventSubjectStatList = ret.eventSubjectStatList;
          if (this.eventSubjectList.length > 0) {
            this.eventSubjectList.forEach((item, idx) => {
              if (item.subjectType != 2) {
                if (item.options) {
                  item.options = item.options.split('\n');
                  if (this.eventSubjectStatList.length > 0) {
                    let newStatList = this.eventSubjectStatList.reduce((newStatList, item) => {
                      let data = { optionIndex: item.optionIndex, checkedCnt: item.checkedCnt };
                      newStatList[item.subjectId] ? newStatList[item.subjectId].push(data) : newStatList[item.subjectId] = [data];
                      return newStatList;
                    }, Object.create(null));
                    let newOptions = [];
                    let sortId = (a, b) => {
                      return a.optionIndex - b.optionIndex;
                    };
                    for (let i in newStatList) {
                      newStatList[i].sort(sortId);
                    }
                    item.options.map((optItem, optIdx) => {
                      if (newStatList[item.subjectId.toString()][optIdx]) {
                        let newStatCheckedCnt = newStatList[item.subjectId.toString()][optIdx].checkedCnt;
                        newStatCheckedCnt ? newOptions.push({ optionCnt: optItem, checkedCnt: newStatCheckedCnt }) : newOptions.push({ optionCnt: optItem, checkedCnt: 0 });
                      }
                    });
                    item.options = newOptions;
                  }
                }
              }
            });
          }
        });
      });
    },

    checkEventJoiner(subjectList, options, index) {
      this.subjectProp = {
        eventId: this.query.eventId,
        subject: subjectList,
        options: options,
        optionIndex: index
      };
      this.eventCheckJoiner = true;
    }
  }
});

/***/ }),

/***/ 1385:
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
      g: $,
      confEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
      query: null,
      event: [],
      eventPic: [],
      eventMorePics: [],
      leftDay: 0,
      leftHour: 0,
      leftMinite: 0,
      leftSec: 0,
      isOver: true,
      createCustDlg: false,
      ownerStaffId: null,
      qrcodeDlg: null,
      isInWxPage: null,
      qrcodeUrl: null,
      shareUrl: null
    };
  },

  created() {
    this.isInWxPage = $.Util.isInWeixin() && !$.Util.isInWxMiniProgram();
    this.query = this.$route.query;
  },

  mounted() {
    this.queryEvent();
    this.setShareInfo();
  },

  methods: {
    setShareInfo() {
      $.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
        this.shareUrl = '{0}/#/event-detail?s={1}&ownerStaffId={2}&eventId={3}'.format($.Conf.MSITE_BASE_URL, ret.shopId, $.data.user.staffId, this.query.eventId);
        this.qrcodeUrl = $.Conf.QR_CODE_URL + encodeURIComponent(this.shareUrl);
      });
    },

    queryEvent() {
      this.event = [];
      let args = {
        eventId: this.query.eventId
      };
      $.Req.service($.SvName.EVENT_QUERY, args, ret => {
        this.event = ret.event;
        if (!this.event) {
          return;
        }
        this.eventMorePics = this.event.eventMorePics ? this.event.eventMorePics.split(',') : null;
        if (this.event && this.event.eventVideoUrl) {
          let player = new Txplayer({
            containerId: 'container',
            vid: this.event.eventVideoUrl,
            width: '100%',
            height: screen.availHeight / 3
          });
          player.on('ready', () => {});
          player.on('volumeChange', volume => {});
          player.on('playStateChange', state => {});
        }
      }, true);

      setInterval(() => {
        clearInterval(this.calcLeftTime());
        this.calcLeftTime();
      }, 1000);
    },

    calcLeftTime() {
      let limitTObj = new Date(this.event.endDate).getTime();
      let nowT = Date.now();
      let rightTime = limitTObj - nowT;
      if (rightTime > 0) {
        this.leftDay = Math.floor(rightTime / (60 * 60 * 24 * 1000));
        this.leftHour = Math.floor(rightTime / (60 * 60 * 1000) % 24);
        this.leftMinite = Math.floor(rightTime / (60 * 1000) % 60);
        this.leftSec = Math.floor(rightTime / 1000 % 60);
        if (this.leftDay < 10) {
          this.leftDay = '0' + this.leftDay;
        }
        if (this.leftHour < 10) {
          this.leftHour = '0' + this.leftHour;
        }
        if (this.leftMinite < 10) {
          this.leftMinite = '0' + this.leftMinite;
        }
        if (this.leftSec < 10) {
          this.leftSec = '0' + this.leftSec;
        }
      } else {
        this.leftDay = '00';
        this.leftHour = '00';
        this.leftMinite = '00';
        this.leftSec = '00';
        this.isOver = false;
      }
    },

    openQrcodeDlg() {
      this.qrcodeDlg = true;
    }
  }
});

/***/ }),

/***/ 1386:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "event-enroll-list.vue",

  data() {
    return {
      g: window.$,
      query: null,
      eventEnrollList: []
    };
  },

  created() {
    this.query = this.$route.query;
  },

  mounted() {
    this.queryEnrollList();
  },

  methods: {
    queryEnrollList() {
      this.event = [];
      let args = {
        eventId: this.query.eventId,
        status: 1
      };
      $.Req.service($.SvName.EVENT_ENROLLQUERY, args, ret => {
        this.eventEnrollList = ret.eventEnrollList;
      });
    }
  }
});

/***/ }),

/***/ 1387:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      g: $,
      eventList: [],
      ticker: null,
      leftDay: 0,
      leftHour: 0,
      leftMinite: 0,
      leftSec: 0
    };
  },
  created() {
    this.queryEventList();
  },

  methods: {
    queryEventList() {
      let _this = this;
      $.Req.service($.SvName.EVENT_QUERY, {}, ret => {
        this.eventList = ret.eventList;
        if (this.eventList.length > 0) {
          this.eventList.forEach((item, idx) => {
            _this.$set(item, 'pre_at', item.endDate);

            item.pre_at = new Date(item.pre_at).getTime() - new Date().getTime();
          });
          this.eventList.filter(item => item.pre_at > 0);
          if (this.ticker) {
            //这一段是防止进入页面出去后再进来计时器重复启动
            clearInterval(this.ticker);
          }
          this.beginTimer(); //启动计时器减指定字段的时间
        }
      }, true);
    },

    toEventDetail(eId) {
      this.$router.push({ path: '/market/event-detail', query: { eventId: eId } });
    },

    beginTimer() {
      //这个计时器是每秒减去数组中指定字段的时间
      this.ticker = setInterval(() => {
        this.eventList.forEach((item, idx) => {
          if (item.pre_at > 0 && item.pre_at != undefined) {
            item.pre_at = item.pre_at - 1000;
          }
        });
      }, 1000);
    },

    lessThan(x) {
      if (x < 10) {
        return '0' + x;
      } else {
        return x;
      }
    },

    time(time, idx) {
      //这个函数是每秒把时间重新计算下
      if (time >= 0) {
        let d = Math.floor(time / 1000 / 60 / 60 / 24);
        let h = this.lessThan(Math.floor(time / 1000 / 60 / 60 % 24));
        let m = this.lessThan(Math.floor(time / 1000 / 60 % 60));
        let s = this.lessThan(Math.floor(time / 1000 % 60));
        return d + '天' + h + '时' + m + '分' + s + '秒';
      } else {
        this.eventList[idx].pre_at = 0;
      }
    },

    afterCreateCust() {
      this.createCustDlg = false;
    }
  }
});

/***/ }),

/***/ 1388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_qd_cropper_vue__ = __webpack_require__(2206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_qd_cropper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_qd_cropper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue__ = __webpack_require__(984);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vant_lib_image_preview__ = __webpack_require__(993);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vant_lib_image_preview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vant_lib_image_preview__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "member-create",

  components: { ImgUpload: __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue___default.a, ImagePreview: __WEBPACK_IMPORTED_MODULE_2_vant_lib_image_preview___default.a, QdCropper: __WEBPACK_IMPORTED_MODULE_0__components_qd_cropper_vue___default.a },
  data() {
    return {
      g: $,
      queryDate: $.Util.formatDate(new Date()),
      activityType: ["优惠券", "抽奖", "砸金蛋", "拼团", "砍价", "活动报名"],
      activityTypeIdx: null,
      imgUpload: {
        action: $.Conf.IMG_UPLOAD_URL,
        imgMaxWidth: 1024
      },
      photo: {
        imgUrl: null
      },
      headPhotoSucess: false,
      muduleEdit: false,
      poster: {
        logoPath: "",
        shopName: "",
        title: "",
        subTitle: "",
        qrcodePath: null,
        tel: null,
        addr: ""
      },
      dlgView: {
        help: false,
        successImg: "",
        cropper: false
      },
      successImg: null,
      spId: null,

      logoImgUrl: null,
      qrcodeImgUrl: null,
      option: {},
      outOption: {},
      cropperType: "logo",
      file: null
    };
  },

  mounted() {
    this.spId = this.$route.query.posterId;
  },

  methods: {
    closeFun() {
      this.clear();
      this.dlgView.cropper = false;
    },
    handleImgUploadSuccess(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;
      this.headPhotoSucess = true;
      this.poster.logoPath = file.name;
      this.photo.imgUrl = $.Util.getImgUrl(this.poster.logoPath, 120, 60, "EEEEEE");
    },

    handleSubmit() {
      this.muduleEdit = true;
    },

    submitMuduleEdit() {
      if (!this.poster.title) {
        $.Msg.error("请输入大标题");
        return;
      }
      if (!this.poster.subTitle) {
        $.Msg.error("请输入小标题");
        return;
      }
      const args = {
        spId: parseInt(this.spId)
      };
      Object.assign(args, this.poster);
      $.Req.service($.SvName.SYS_POSTER_CREATE, args, ret => {
        this.successImg = ret.posterUrl;
        this.dlgView.successImg = true;
      }, true);
    },

    closeSuccessImg() {
      this.dlgView.successImg = false;
    },

    seeBigSuccessImg() {
      __WEBPACK_IMPORTED_MODULE_2_vant_lib_image_preview___default()({
        images: [this.successImg],
        className: "festival-img",
        showIndex: false
      });
    },

    selectActivityType(s) {
      this.activityTypeIdx = s.selectedIdx + 1;
    },

    // 改动
    changeImgFun(e) {
      if (!e.target.files[0]) return;
      this.dlgView.cropper = true;
      this.file = e.target.files[0];
    },

    selectLogoPicture() {
      this.clear();
      this.cropperType = "logo";
      this.option = {
        viewMode: 1,
        minCropBoxHeight: 36,
        initialAspectRatio: 3 / 1,
        cropBoxResizable: true,
        transparent: true
      };
      this.outOption = {
        // minWidth: 100,
        minHeight: 36,
        height: 36
      };
      this.$refs.logoRefs.click();
    },

    clear() {
      this.file = null;
      if (this.$refs.logoRefs.target && this.$refs.logoRefs.target.files[0]) {
        this.$refs.logoRefs.target.files[0] = null;
      }
    },

    handleSuccess(res) {
      if (this.cropperType === "logo") {
        this.logoImgUrl = res.data.url;
        this.poster.logoPath = res.data.name;
      }
      if (this.cropperType === "qrcode") {
        this.qrcodeImgUrl = res.data.url;
        this.poster.qrcodePath = res.data.name;
      }
      this.closeFun();
    },

    selectQrcodePicture() {
      this.clear();
      this.cropperType = "qrcode";
      this.option = {
        aspectRatio: 1 / 1
      };
      this.outOption = {
        width: 60 * 2,
        height: 60 * 2
      };
      this.$refs.logoRefs.click();
    }
  }
});

/***/ }),

/***/ 1389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vant_lib_image_preview__ = __webpack_require__(993);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vant_lib_image_preview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vant_lib_image_preview__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "event-poster",

  components: { ImagePreview: __WEBPACK_IMPORTED_MODULE_0_vant_lib_image_preview___default.a },

  data() {
    return {
      g: window.$,
      shopTypeArr: ['通用', '健身', '少儿', '舞蹈', '游泳', '瑜伽'],
      themeTypeArr: [null, '中秋', '国庆', '元旦', '春节', '劳动节', '年终', '妇女节', null, null, '双十二', '双十一', '预售', '促销'],
      query: {
        status: null,
        beginDate: null,
        endDate: null,
        createUid: null,
        auditStaffId: null,
        memberName: null,
        memberPhone: null,
        memberFlag: null
      },
      dlgView: {
        inputShow: false,
        epxplain: false
      },
      sysPosterList: [{ pic: 'p1.png' }, { pic: 'p1.png' }, { pic: 'p1.png' }],
      posterIdx: null,
      editBtnShow: false,
      instance: null,
      shopType: null,
      themeType: 12
    };
  },

  created() {
    this.queryPosterList();
  },

  methods: {
    queryPosterList() {
      let args = {
        shopType: this.shopType,
        festivalType: this.themeType
      };
      $.Req.service($.SvName.SYS_POSTER_QUERY, args, ret => {
        if (ret.sysPosterList) this.sysPosterList = ret.sysPosterList;
        this.sysPosterList.map((item, idx) => {
          this.$set(item, 'select', false);
        });
      }, true);
    },

    seeMore(p, i) {
      this.sysPosterList.map((item, idx) => {
        this.$set(item, 'select', false);
      });
      this.$set(this.sysPosterList[i], 'select', true);
    },

    selectMemberDraftStatus(s) {
      this.query.status = s.selectedIdx;
    },

    editPoster(type, p, i) {
      if (!type) this.editBtnShow = true;
      this.posterIdx = p.spId;
      let _this = this;
      this.instance = __WEBPACK_IMPORTED_MODULE_0_vant_lib_image_preview___default()({
        images: [$.Conf.IMG_LIB_URL + '/sys-posters/' + p.fileName],
        className: 'festival-img',
        showIndex: false,
        onClose() {
          this.$set(_this, 'editBtnShow', false);
        },
        closeOnPopstate: true
      });
    },

    pageToEdit() {
      this.instance.close();
      this.$router.push({ path: '/market/event-poster-eidt/', query: { posterId: this.posterIdx } });
    },

    selectShopType(s) {
      this.shopType = s.selectedIdx;
      this.queryPosterList();
    },

    selectFestivalType(s) {
      this.themeType = s.selectedIdx;
      this.queryPosterList();
    }

  }
});

/***/ }),

/***/ 1390:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data() {
    return {
      g: $,
      shopId: null,
      productList: [],
      isInWxPage: false,
      showValid: false,
      page: null,
      count: 0
    };
  },

  created() {
    this.isInWxPage = $.Util.isInWeixin() && !$.Util.isInWxMiniProgram();
    this.queryShopId(() => {
      this.queryTicketList();
    });
  },

  methods: {
    queryTicketList(page = null) {
      this.page = page;
      let args = { page: this.page };
      $.Req.service($.SvName.ENTRY_TICKET_PRODUCT_QUERY, args, (ret, systime) => {
        if (ret.count) {
          this.count = ret.count;
        }
        let nowTime = Date.new(systime).getTime();
        for (let p of ret.productList) {
          if (nowTime >= Date.new(p.beginTime).getTime() && nowTime <= Date.new(p.endTime).getTime()) {
            p.usable = true;
          } else {
            p.usable = false;
          }
          p.url = "{0}/#/fit-entry-ticket-detail/{1}?s={2}&ownerStaffId={3}".format($.Conf.MSITE_BASE_URL, p.productId, this.shopId, $.data.user.staffId);
          p.qrcodeUrl = $.Conf.QR_CODE_URL + encodeURIComponent(p.url);
        }
        this.productList = ret.productList;
      }, true);
    },

    queryShopId(callback) {
      $.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
        this.shopId = ret.shopId;
        callback();
      });
    }
  }
});

/***/ }),

/***/ 1397:
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


/* harmony default export */ __webpack_exports__["default"] = ({
	components: {},
	data() {
		return {
			g: window.$,
			shareItemList: null,
			itemNoteDlgView: false,
			shareItem: {},
			sharerType: null,
			pageTitle: null,
			sharerId: null,
			itemShareQrcodeUrl: null,
			settings: [{ title: "一级分销奖励：" }, { title: "二级分销奖励：" }, { title: "三级分销奖励：" }],
			hasSetted: false
		};
	},
	created() {
		if ($.data.user.memberId) {
			this.sharerType = 1;
			this.pageTitle = '分享有奖';
			this.sharerId = $.data.user.memberId;
		} else {
			this.sharerType = 2;
			this.pageTitle = '全员分销';
			this.sharerId = $.data.user.staffId;
		}

		this.queryShareItemList();
		$.Req.initWxApi(() => {
			this.setShareConf();
		});
	},
	methods: {
		queryShareItemList() {
			let args = { isValid: true, sharerType: this.sharerType };
			$.Req.service($.SvName.SHARE_ITEM_QUERY, args, ret => {
				this.shareItemList = ret.shareItemList;
			});
		},

		viewShareItemDetail(itemId) {
			let args = { itemId: itemId };
			this.querySettings(itemId);
			$.Req.service($.SvName.SHARE_ITEM_QUERY, args, ret => {
				this.shareItem = ret.shareItem;
				$.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
					let itemShareLink = "http://tool.jzongguan.com/#/share-item?s={0}&item={1}&sharer={2}".format(ret.shopId, this.shareItem.itemId, this.sharerId);
					this.itemShareQrcodeUrl = $.Conf.QR_CODE_URL + encodeURIComponent(itemShareLink);
				});
				this.itemNoteDlgView = true;
			}, true);
		},

		setShareConf() {
			let imgUrl = $.Util.getImgUrl($.data.shop.logoPathname);
			imgUrl = 'http://tool.jzongguan.com/url-redirect.php?url=' + encodeURIComponent(imgUrl);
			let shareTitle = "全员分销-{0}".format($.data.shop.shopName);
			let shareLink = location.href;
			let shareDesc = '快来参与分销吧，点击有惊喜！';
			wx.ready(() => {
				wx.onMenuShareTimeline({
					title: shareTitle,
					link: shareLink,
					imgUrl: imgUrl,
					success: () => {},
					cancel: () => {
						//toddo
					}
				});
				wx.onMenuShareAppMessage({
					title: shareTitle,
					desc: shareDesc,
					link: shareLink,
					imgUrl: imgUrl,
					success: () => {},
					cancel: () => {
						// 用户取消分享后执行的回调函数
					}
				});
			});
		},

		querySettings(itemId) {
			$.Req.service($.SvName.SHARE_ITEM_REWARD_QUERY, { itemId }, res => {
				if (res.shareItemRewardList.length > 0) {
					this.hasSetted = true;
					this.settings.forEach((ele, idx) => {
						ele.str = this.filterData(res.shareItemRewardList, idx + 1);
					});
				} else {
					this.hasSetted = false;
				}
			});
		},

		filterData(arr, num) {
			let data = "";
			let res = arr.filter(v => v.shareLevel == num);
			if (res.length !== 0) {
				let newRes = res.map(m => {
					return m.cardName + m.rewardDays + "天" + (m.rewardValue ? m.rewardValue + $.Dict.CardUnitName[m.cardType] : "");
				});
				data = newRes.join("、");
			}
			return data;
		}
	}
});

/***/ }),

/***/ 1398:
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

var Tree = {
  template: `
        <div>
           <template v-for="(r,idx) of treedata">
            <div :key="idx" :class="'made-tr'+(r.hasNext ? ' has-next' : '')" @click.stop="queryNextInfo(r,idx)">
              <div :class="'line'+(r.active ? ' active' : '')">
                <div class="custom">{{ r.custName.shorten(5) }}</div>
                <div class="phone">{{ r.custPhone }}</div>
                <div class="rec-time">{{ r.createTime }}</div>
                <div class="deal"><template v-if="r.memberCreateTime">{{ r.memberCreateTime }}</template><span class="gray" v-else>未成交</span></div>
              </div>
              <Tree id="tree" v-if="r.active&&r.children.length>0" :treedata="r.children">
              <template v-for="(m,i) of r.children">
                <Tree id="tree" v-if="m.active&&m.children.length>0" :treedata="m.children"></Tree>
              </template>
              </Tree>
            </div>
          </template>
        </div>
    `,
  name: "Tree",
  props: ["treedata"],
  components: {
    Tree: Tree
  },
  inject: ["shareItemReceiverList", "queryNextInfo", "rebuildTableData"]
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Tree: Tree
  },

  data() {
    return {
      g: window.$,
      shareTypeName: null,
      shareItemOwnerList: [],
      shareItemReceiverList: [],
      sirCount: null,
      sharerType: null,
      sharerId: null,
      selectSioId: null,
      query: {
        isMember: false
      },
      shareItemMap: {},
      selectSioIdx: 0,
      selectSio: {
        viewCnt: 0,
        receiveCnt: 0,
        receiveRate: 0,
        convertCnt: 0,
        convertRate: 0
      },
      itemId: ""
    };
  },

  provide() {
    return {
      shareItemReceiverList: this.shareItemReceiverList,
      queryNextInfo: this.queryNextInfo,
      rebuildTableData: this.rebuildTableData
    };
  },

  created() {
    if ($.data.user.memberId) {
      this.shareTypeName = '分享';
      this.sharerType = 1;
      this.sharerId = $.data.user.memberId;
    } else {
      this.shareTypeName = '分销';
      this.sharerType = 2;
      this.sharerId = $.data.user.staffId;
    }
    this.queryShareItemList();
  },

  methods: {
    queryNextInfo(info, idx) {
      if (!info.hasNext) return;
      let args = {
        itemId: this.itemId,
        memberId: info.memberId,
        isMember: this.query.isMember
      };
      // console.log("args:", args);
      $.Req.service($.SvName.SHARE_ITEM_RECEIVER_NEXT_QUERY, args, res => {
        if (res.shareItemReceiverList && res.shareItemReceiverList.length > 0) {
          this.rebuildTableData(info.sirId, res.shareItemReceiverList);
        }
      });
    },

    rebuildTableData(parentId, queryRes) {
      let allData = this.shareItemReceiverList;
      let filter = allData.filter(m => m.sirId === parentId);
      if (filter.length > 0) {
        allData.forEach(ele => {
          if (ele.sirId === parentId) {
            ele.level = 1;
            ele.active = !ele.active;
            ele.children = queryRes;
          }
        });
      } else {
        allData.forEach(v => {
          if (v.children) {
            queryRes.forEach(c => c.level = 3);
            v.children.forEach(m => {
              if (m.sirId === parentId) {
                m.level = 2;
                m.active = !m.active;
                m.children = queryRes;
              }
            });
          }
        });
      }
      this.$set(this, "shareItemReceiverList", [...allData]);
    },

    queryShareItemList() {
      $.Req.service($.SvName.SHARE_ITEM_QUERY, { sharerType: this.sharerType }, ret => {
        this.shareItemList = ret.shareItemList;
        this.shareItemMap = {};
        for (let s of ret.shareItemList) {
          this.shareItemMap[s.itemId] = s.itemName;
        }
        this.queryShareItemOwnerList();
      });
    },

    queryShareItemOwnerList() {
      let args = { sharerType: this.sharerType, sharerId: this.sharerId };
      $.Req.service($.SvName.SHARE_ITEM_OWNER_QUERY, args, ret => {
        for (let o of ret.shareItemOwnerList) {
          o.convertRate = o.receiveCnt > 0 ? o.convertCnt / o.receiveCnt : 0;
          o.itemName = this.shareItemMap[o.itemId];
        }
        this.shareItemOwnerList = ret.shareItemOwnerList;
        if (this.shareItemOwnerList.length > 0) {
          this.selectSio = this.shareItemOwnerList[0];
        } else {
          this.selectSio = null;
        }
        this.queryShareItemReceiverList();
      });
    },

    queryShareItemReceiverList(page = null) {
      if (!this.selectSio || !this.selectSio.sioId) {
        this.shareItemReceiverList = [];
        return;
      }
      let args = {
        sioId: this.selectSio.sioId,
        isMember: this.query.isMember,
        page: page
      };
      $.Req.service($.SvName.SHARE_ITEM_RECEIVER_QUERY, args, ret => {
        this.shareItemReceiverList = ret.shareItemReceiverList;
        if (page === null) {
          this.sirCount = ret.count;
        }
      }, true);
    },

    changeSio() {
      this.selectSio = this.shareItemOwnerList[this.selectSioIdx];
      this.queryShareItemReceiverList();
    },

    toggleMember() {
      this.queryShareItemReceiverList(null);
    }
  }
});

/***/ }),

/***/ 1575:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Cropper.js v1.5.13
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2022-11-20T05:30:46.114Z
 */

(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Cropper = factory());
})(this, (function () { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  var WINDOW = IS_BROWSER ? window : {};
  var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? 'ontouchstart' in WINDOW.document.documentElement : false;
  var HAS_POINTER_EVENT = IS_BROWSER ? 'PointerEvent' in WINDOW : false;
  var NAMESPACE = 'cropper';

  // Actions
  var ACTION_ALL = 'all';
  var ACTION_CROP = 'crop';
  var ACTION_MOVE = 'move';
  var ACTION_ZOOM = 'zoom';
  var ACTION_EAST = 'e';
  var ACTION_WEST = 'w';
  var ACTION_SOUTH = 's';
  var ACTION_NORTH = 'n';
  var ACTION_NORTH_EAST = 'ne';
  var ACTION_NORTH_WEST = 'nw';
  var ACTION_SOUTH_EAST = 'se';
  var ACTION_SOUTH_WEST = 'sw';

  // Classes
  var CLASS_CROP = "".concat(NAMESPACE, "-crop");
  var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
  var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
  var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
  var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
  var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
  var CLASS_MOVE = "".concat(NAMESPACE, "-move");

  // Data keys
  var DATA_ACTION = "".concat(NAMESPACE, "Action");
  var DATA_PREVIEW = "".concat(NAMESPACE, "Preview");

  // Drag modes
  var DRAG_MODE_CROP = 'crop';
  var DRAG_MODE_MOVE = 'move';
  var DRAG_MODE_NONE = 'none';

  // Events
  var EVENT_CROP = 'crop';
  var EVENT_CROP_END = 'cropend';
  var EVENT_CROP_MOVE = 'cropmove';
  var EVENT_CROP_START = 'cropstart';
  var EVENT_DBLCLICK = 'dblclick';
  var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
  var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
  var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
  var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
  var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
  var EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
  var EVENT_READY = 'ready';
  var EVENT_RESIZE = 'resize';
  var EVENT_WHEEL = 'wheel';
  var EVENT_ZOOM = 'zoom';

  // Mime types
  var MIME_TYPE_JPEG = 'image/jpeg';

  // RegExps
  var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
  var REGEXP_DATA_URL = /^data:/;
  var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
  var REGEXP_TAG_NAME = /^img|canvas$/i;

  // Misc
  // Inspired by the default width and height of a canvas element.
  var MIN_CONTAINER_WIDTH = 200;
  var MIN_CONTAINER_HEIGHT = 100;

  var DEFAULTS = {
    // Define the view mode of the cropper
    viewMode: 0,
    // 0, 1, 2, 3

    // Define the dragging mode of the cropper
    dragMode: DRAG_MODE_CROP,
    // 'crop', 'move' or 'none'

    // Define the initial aspect ratio of the crop box
    initialAspectRatio: NaN,
    // Define the aspect ratio of the crop box
    aspectRatio: NaN,
    // An object with the previous cropping result data
    data: null,
    // A selector for adding extra containers to preview
    preview: '',
    // Re-render the cropper when resize the window
    responsive: true,
    // Restore the cropped area after resize the window
    restore: true,
    // Check if the current image is a cross-origin image
    checkCrossOrigin: true,
    // Check the current image's Exif Orientation information
    checkOrientation: true,
    // Show the black modal
    modal: true,
    // Show the dashed lines for guiding
    guides: true,
    // Show the center indicator for guiding
    center: true,
    // Show the white modal to highlight the crop box
    highlight: true,
    // Show the grid background
    background: true,
    // Enable to crop the image automatically when initialize
    autoCrop: true,
    // Define the percentage of automatic cropping area when initializes
    autoCropArea: 0.8,
    // Enable to move the image
    movable: true,
    // Enable to rotate the image
    rotatable: true,
    // Enable to scale the image
    scalable: true,
    // Enable to zoom the image
    zoomable: true,
    // Enable to zoom the image by dragging touch
    zoomOnTouch: true,
    // Enable to zoom the image by wheeling mouse
    zoomOnWheel: true,
    // Define zoom ratio when zoom the image by wheeling mouse
    wheelZoomRatio: 0.1,
    // Enable to move the crop box
    cropBoxMovable: true,
    // Enable to resize the crop box
    cropBoxResizable: true,
    // Toggle drag mode between "crop" and "move" when click twice on the cropper
    toggleDragModeOnDblclick: true,
    // Size limitation
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: MIN_CONTAINER_WIDTH,
    minContainerHeight: MIN_CONTAINER_HEIGHT,
    // Shortcuts of events
    ready: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null
  };

  var TEMPLATE = '<div class="cropper-container" touch-action="none">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-cropper-action="e"></span>' + '<span class="cropper-line line-n" data-cropper-action="n"></span>' + '<span class="cropper-line line-w" data-cropper-action="w"></span>' + '<span class="cropper-line line-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-e" data-cropper-action="e"></span>' + '<span class="cropper-point point-n" data-cropper-action="n"></span>' + '<span class="cropper-point point-w" data-cropper-action="w"></span>' + '<span class="cropper-point point-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-ne" data-cropper-action="ne"></span>' + '<span class="cropper-point point-nw" data-cropper-action="nw"></span>' + '<span class="cropper-point point-sw" data-cropper-action="sw"></span>' + '<span class="cropper-point point-se" data-cropper-action="se"></span>' + '</div>' + '</div>';

  /**
   * Check if the given value is not a number.
   */
  var isNaN = Number.isNaN || WINDOW.isNaN;

  /**
   * Check if the given value is a number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a number, else `false`.
   */
  function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }

  /**
   * Check if the given value is a positive number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
   */
  var isPositiveNumber = function isPositiveNumber(value) {
    return value > 0 && value < Infinity;
  };

  /**
   * Check if the given value is undefined.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
   */
  function isUndefined(value) {
    return typeof value === 'undefined';
  }

  /**
   * Check if the given value is an object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is an object, else `false`.
   */
  function isObject(value) {
    return _typeof(value) === 'object' && value !== null;
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  /**
   * Check if the given value is a plain object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
   */
  function isPlainObject(value) {
    if (!isObject(value)) {
      return false;
    }
    try {
      var _constructor = value.constructor;
      var prototype = _constructor.prototype;
      return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
    } catch (error) {
      return false;
    }
  }

  /**
   * Check if the given value is a function.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a function, else `false`.
   */
  function isFunction(value) {
    return typeof value === 'function';
  }
  var slice = Array.prototype.slice;

  /**
   * Convert array-like or iterable object to an array.
   * @param {*} value - The value to convert.
   * @returns {Array} Returns a new array.
   */
  function toArray(value) {
    return Array.from ? Array.from(value) : slice.call(value);
  }

  /**
   * Iterate the given data.
   * @param {*} data - The data to iterate.
   * @param {Function} callback - The process function for each element.
   * @returns {*} The original data.
   */
  function forEach(data, callback) {
    if (data && isFunction(callback)) {
      if (Array.isArray(data) || isNumber(data.length) /* array-like */) {
        toArray(data).forEach(function (value, key) {
          callback.call(data, value, key, data);
        });
      } else if (isObject(data)) {
        Object.keys(data).forEach(function (key) {
          callback.call(data, data[key], key, data);
        });
      }
    }
    return data;
  }

  /**
   * Extend the given object.
   * @param {*} target - The target object to extend.
   * @param {*} args - The rest objects for merging to the target object.
   * @returns {Object} The extended object.
   */
  var assign = Object.assign || function assign(target) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (isObject(target) && args.length > 0) {
      args.forEach(function (arg) {
        if (isObject(arg)) {
          Object.keys(arg).forEach(function (key) {
            target[key] = arg[key];
          });
        }
      });
    }
    return target;
  };
  var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;

  /**
   * Normalize decimal number.
   * Check out {@link https://0.30000000000000004.com/}
   * @param {number} value - The value to normalize.
   * @param {number} [times=100000000000] - The times for normalizing.
   * @returns {number} Returns the normalized number.
   */
  function normalizeDecimalNumber(value) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
    return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
  }
  var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;

  /**
   * Apply styles to the given element.
   * @param {Element} element - The target element.
   * @param {Object} styles - The styles for applying.
   */
  function setStyle(element, styles) {
    var style = element.style;
    forEach(styles, function (value, property) {
      if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
        value = "".concat(value, "px");
      }
      style[property] = value;
    });
  }

  /**
   * Check if the given element has a special class.
   * @param {Element} element - The element to check.
   * @param {string} value - The class to search.
   * @returns {boolean} Returns `true` if the special class was found.
   */
  function hasClass(element, value) {
    return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
  }

  /**
   * Add classes to the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be added.
   */
  function addClass(element, value) {
    if (!value) {
      return;
    }
    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        addClass(elem, value);
      });
      return;
    }
    if (element.classList) {
      element.classList.add(value);
      return;
    }
    var className = element.className.trim();
    if (!className) {
      element.className = value;
    } else if (className.indexOf(value) < 0) {
      element.className = "".concat(className, " ").concat(value);
    }
  }

  /**
   * Remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be removed.
   */
  function removeClass(element, value) {
    if (!value) {
      return;
    }
    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        removeClass(elem, value);
      });
      return;
    }
    if (element.classList) {
      element.classList.remove(value);
      return;
    }
    if (element.className.indexOf(value) >= 0) {
      element.className = element.className.replace(value, '');
    }
  }

  /**
   * Add or remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be toggled.
   * @param {boolean} added - Add only.
   */
  function toggleClass(element, value, added) {
    if (!value) {
      return;
    }
    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        toggleClass(elem, value, added);
      });
      return;
    }

    // IE10-11 doesn't support the second parameter of `classList.toggle`
    if (added) {
      addClass(element, value);
    } else {
      removeClass(element, value);
    }
  }
  var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;

  /**
   * Transform the given string from camelCase to kebab-case
   * @param {string} value - The value to transform.
   * @returns {string} The transformed value.
   */
  function toParamCase(value) {
    return value.replace(REGEXP_CAMEL_CASE, '$1-$2').toLowerCase();
  }

  /**
   * Get data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to get.
   * @returns {string} The data value.
   */
  function getData(element, name) {
    if (isObject(element[name])) {
      return element[name];
    }
    if (element.dataset) {
      return element.dataset[name];
    }
    return element.getAttribute("data-".concat(toParamCase(name)));
  }

  /**
   * Set data to the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to set.
   * @param {string} data - The data value.
   */
  function setData(element, name, data) {
    if (isObject(data)) {
      element[name] = data;
    } else if (element.dataset) {
      element.dataset[name] = data;
    } else {
      element.setAttribute("data-".concat(toParamCase(name)), data);
    }
  }

  /**
   * Remove data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to remove.
   */
  function removeData(element, name) {
    if (isObject(element[name])) {
      try {
        delete element[name];
      } catch (error) {
        element[name] = undefined;
      }
    } else if (element.dataset) {
      // #128 Safari not allows to delete dataset property
      try {
        delete element.dataset[name];
      } catch (error) {
        element.dataset[name] = undefined;
      }
    } else {
      element.removeAttribute("data-".concat(toParamCase(name)));
    }
  }
  var REGEXP_SPACES = /\s\s*/;
  var onceSupported = function () {
    var supported = false;
    if (IS_BROWSER) {
      var once = false;
      var listener = function listener() {};
      var options = Object.defineProperty({}, 'once', {
        get: function get() {
          supported = true;
          return once;
        },
        /**
         * This setter can fix a `TypeError` in strict mode
         * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
         * @param {boolean} value - The value to set
         */
        set: function set(value) {
          once = value;
        }
      });
      WINDOW.addEventListener('test', listener, options);
      WINDOW.removeEventListener('test', listener, options);
    }
    return supported;
  }();

  /**
   * Remove event listener from the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */
  function removeListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (!onceSupported) {
        var listeners = element.listeners;
        if (listeners && listeners[event] && listeners[event][listener]) {
          handler = listeners[event][listener];
          delete listeners[event][listener];
          if (Object.keys(listeners[event]).length === 0) {
            delete listeners[event];
          }
          if (Object.keys(listeners).length === 0) {
            delete element.listeners;
          }
        }
      }
      element.removeEventListener(event, handler, options);
    });
  }

  /**
   * Add event listener to the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */
  function addListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var _handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (options.once && !onceSupported) {
        var _element$listeners = element.listeners,
          listeners = _element$listeners === void 0 ? {} : _element$listeners;
        _handler = function handler() {
          delete listeners[event][listener];
          element.removeEventListener(event, _handler, options);
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          listener.apply(element, args);
        };
        if (!listeners[event]) {
          listeners[event] = {};
        }
        if (listeners[event][listener]) {
          element.removeEventListener(event, listeners[event][listener], options);
        }
        listeners[event][listener] = _handler;
        element.listeners = listeners;
      }
      element.addEventListener(event, _handler, options);
    });
  }

  /**
   * Dispatch event on the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Object} data - The additional event data.
   * @returns {boolean} Indicate if the event is default prevented or not.
   */
  function dispatchEvent(element, type, data) {
    var event;

    // Event and CustomEvent on IE9-11 are global objects, not constructors
    if (isFunction(Event) && isFunction(CustomEvent)) {
      event = new CustomEvent(type, {
        detail: data,
        bubbles: true,
        cancelable: true
      });
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, true, true, data);
    }
    return element.dispatchEvent(event);
  }

  /**
   * Get the offset base on the document.
   * @param {Element} element - The target element.
   * @returns {Object} The offset data.
   */
  function getOffset(element) {
    var box = element.getBoundingClientRect();
    return {
      left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
      top: box.top + (window.pageYOffset - document.documentElement.clientTop)
    };
  }
  var location = WINDOW.location;
  var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;

  /**
   * Check if the given URL is a cross origin URL.
   * @param {string} url - The target URL.
   * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
   */
  function isCrossOriginURL(url) {
    var parts = url.match(REGEXP_ORIGINS);
    return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
  }

  /**
   * Add timestamp to the given URL.
   * @param {string} url - The target URL.
   * @returns {string} The result URL.
   */
  function addTimestamp(url) {
    var timestamp = "timestamp=".concat(new Date().getTime());
    return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
  }

  /**
   * Get transforms base on the given object.
   * @param {Object} obj - The target object.
   * @returns {string} A string contains transform values.
   */
  function getTransforms(_ref) {
    var rotate = _ref.rotate,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      translateX = _ref.translateX,
      translateY = _ref.translateY;
    var values = [];
    if (isNumber(translateX) && translateX !== 0) {
      values.push("translateX(".concat(translateX, "px)"));
    }
    if (isNumber(translateY) && translateY !== 0) {
      values.push("translateY(".concat(translateY, "px)"));
    }

    // Rotate should come first before scale to match orientation transform
    if (isNumber(rotate) && rotate !== 0) {
      values.push("rotate(".concat(rotate, "deg)"));
    }
    if (isNumber(scaleX) && scaleX !== 1) {
      values.push("scaleX(".concat(scaleX, ")"));
    }
    if (isNumber(scaleY) && scaleY !== 1) {
      values.push("scaleY(".concat(scaleY, ")"));
    }
    var transform = values.length ? values.join(' ') : 'none';
    return {
      WebkitTransform: transform,
      msTransform: transform,
      transform: transform
    };
  }

  /**
   * Get the max ratio of a group of pointers.
   * @param {string} pointers - The target pointers.
   * @returns {number} The result ratio.
   */
  function getMaxZoomRatio(pointers) {
    var pointers2 = _objectSpread2({}, pointers);
    var maxRatio = 0;
    forEach(pointers, function (pointer, pointerId) {
      delete pointers2[pointerId];
      forEach(pointers2, function (pointer2) {
        var x1 = Math.abs(pointer.startX - pointer2.startX);
        var y1 = Math.abs(pointer.startY - pointer2.startY);
        var x2 = Math.abs(pointer.endX - pointer2.endX);
        var y2 = Math.abs(pointer.endY - pointer2.endY);
        var z1 = Math.sqrt(x1 * x1 + y1 * y1);
        var z2 = Math.sqrt(x2 * x2 + y2 * y2);
        var ratio = (z2 - z1) / z1;
        if (Math.abs(ratio) > Math.abs(maxRatio)) {
          maxRatio = ratio;
        }
      });
    });
    return maxRatio;
  }

  /**
   * Get a pointer from an event object.
   * @param {Object} event - The target event object.
   * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
   * @returns {Object} The result pointer contains start and/or end point coordinates.
   */
  function getPointer(_ref2, endOnly) {
    var pageX = _ref2.pageX,
      pageY = _ref2.pageY;
    var end = {
      endX: pageX,
      endY: pageY
    };
    return endOnly ? end : _objectSpread2({
      startX: pageX,
      startY: pageY
    }, end);
  }

  /**
   * Get the center point coordinate of a group of pointers.
   * @param {Object} pointers - The target pointers.
   * @returns {Object} The center point coordinate.
   */
  function getPointersCenter(pointers) {
    var pageX = 0;
    var pageY = 0;
    var count = 0;
    forEach(pointers, function (_ref3) {
      var startX = _ref3.startX,
        startY = _ref3.startY;
      pageX += startX;
      pageY += startY;
      count += 1;
    });
    pageX /= count;
    pageY /= count;
    return {
      pageX: pageX,
      pageY: pageY
    };
  }

  /**
   * Get the max sizes in a rectangle under the given aspect ratio.
   * @param {Object} data - The original sizes.
   * @param {string} [type='contain'] - The adjust type.
   * @returns {Object} The result sizes.
   */
  function getAdjustedSizes(_ref4) {
    var aspectRatio = _ref4.aspectRatio,
      height = _ref4.height,
      width = _ref4.width;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';
    var isValidWidth = isPositiveNumber(width);
    var isValidHeight = isPositiveNumber(height);
    if (isValidWidth && isValidHeight) {
      var adjustedWidth = height * aspectRatio;
      if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
        height = width / aspectRatio;
      } else {
        width = height * aspectRatio;
      }
    } else if (isValidWidth) {
      height = width / aspectRatio;
    } else if (isValidHeight) {
      width = height * aspectRatio;
    }
    return {
      width: width,
      height: height
    };
  }

  /**
   * Get the new sizes of a rectangle after rotated.
   * @param {Object} data - The original sizes.
   * @returns {Object} The result sizes.
   */
  function getRotatedSizes(_ref5) {
    var width = _ref5.width,
      height = _ref5.height,
      degree = _ref5.degree;
    degree = Math.abs(degree) % 180;
    if (degree === 90) {
      return {
        width: height,
        height: width
      };
    }
    var arc = degree % 90 * Math.PI / 180;
    var sinArc = Math.sin(arc);
    var cosArc = Math.cos(arc);
    var newWidth = width * cosArc + height * sinArc;
    var newHeight = width * sinArc + height * cosArc;
    return degree > 90 ? {
      width: newHeight,
      height: newWidth
    } : {
      width: newWidth,
      height: newHeight
    };
  }

  /**
   * Get a canvas which drew the given image.
   * @param {HTMLImageElement} image - The image for drawing.
   * @param {Object} imageData - The image data.
   * @param {Object} canvasData - The canvas data.
   * @param {Object} options - The options.
   * @returns {HTMLCanvasElement} The result canvas.
   */
  function getSourceCanvas(image, _ref6, _ref7, _ref8) {
    var imageAspectRatio = _ref6.aspectRatio,
      imageNaturalWidth = _ref6.naturalWidth,
      imageNaturalHeight = _ref6.naturalHeight,
      _ref6$rotate = _ref6.rotate,
      rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate,
      _ref6$scaleX = _ref6.scaleX,
      scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX,
      _ref6$scaleY = _ref6.scaleY,
      scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
    var aspectRatio = _ref7.aspectRatio,
      naturalWidth = _ref7.naturalWidth,
      naturalHeight = _ref7.naturalHeight;
    var _ref8$fillColor = _ref8.fillColor,
      fillColor = _ref8$fillColor === void 0 ? 'transparent' : _ref8$fillColor,
      _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled,
      imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE,
      _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality,
      imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? 'low' : _ref8$imageSmoothingQ,
      _ref8$maxWidth = _ref8.maxWidth,
      maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth,
      _ref8$maxHeight = _ref8.maxHeight,
      maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight,
      _ref8$minWidth = _ref8.minWidth,
      minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth,
      _ref8$minHeight = _ref8.minHeight,
      minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var maxSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var minSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
    var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight));

    // Note: should always use image's natural sizes for drawing as
    // imageData.naturalWidth === canvasData.naturalHeight when rotate % 180 === 90
    var destMaxSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var destMinSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
    var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
    var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
    canvas.width = normalizeDecimalNumber(width);
    canvas.height = normalizeDecimalNumber(height);
    context.fillStyle = fillColor;
    context.fillRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2);
    context.rotate(rotate * Math.PI / 180);
    context.scale(scaleX, scaleY);
    context.imageSmoothingEnabled = imageSmoothingEnabled;
    context.imageSmoothingQuality = imageSmoothingQuality;
    context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function (param) {
      return Math.floor(normalizeDecimalNumber(param));
    }))));
    context.restore();
    return canvas;
  }
  var fromCharCode = String.fromCharCode;

  /**
   * Get string from char code in data view.
   * @param {DataView} dataView - The data view for read.
   * @param {number} start - The start index.
   * @param {number} length - The read length.
   * @returns {string} The read result.
   */
  function getStringFromCharCode(dataView, start, length) {
    var str = '';
    length += start;
    for (var i = start; i < length; i += 1) {
      str += fromCharCode(dataView.getUint8(i));
    }
    return str;
  }
  var REGEXP_DATA_URL_HEAD = /^data:.*,/;

  /**
   * Transform Data URL to array buffer.
   * @param {string} dataURL - The Data URL to transform.
   * @returns {ArrayBuffer} The result array buffer.
   */
  function dataURLToArrayBuffer(dataURL) {
    var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
    var binary = atob(base64);
    var arrayBuffer = new ArrayBuffer(binary.length);
    var uint8 = new Uint8Array(arrayBuffer);
    forEach(uint8, function (value, i) {
      uint8[i] = binary.charCodeAt(i);
    });
    return arrayBuffer;
  }

  /**
   * Transform array buffer to Data URL.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
   * @param {string} mimeType - The mime type of the Data URL.
   * @returns {string} The result Data URL.
   */
  function arrayBufferToDataURL(arrayBuffer, mimeType) {
    var chunks = [];

    // Chunk Typed Array for better performance (#435)
    var chunkSize = 8192;
    var uint8 = new Uint8Array(arrayBuffer);
    while (uint8.length > 0) {
      // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
      // eslint-disable-next-line prefer-spread
      chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
      uint8 = uint8.subarray(chunkSize);
    }
    return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
  }

  /**
   * Get orientation value from given array buffer.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
   * @returns {number} The read orientation value.
   */
  function resetAndGetOrientation(arrayBuffer) {
    var dataView = new DataView(arrayBuffer);
    var orientation;

    // Ignores range error when the image does not have correct Exif information
    try {
      var littleEndian;
      var app1Start;
      var ifdStart;

      // Only handle JPEG image (start by 0xFFD8)
      if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
        var length = dataView.byteLength;
        var offset = 2;
        while (offset + 1 < length) {
          if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
            app1Start = offset;
            break;
          }
          offset += 1;
        }
      }
      if (app1Start) {
        var exifIDCode = app1Start + 4;
        var tiffOffset = app1Start + 10;
        if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
          var endianness = dataView.getUint16(tiffOffset);
          littleEndian = endianness === 0x4949;
          if (littleEndian || endianness === 0x4D4D /* bigEndian */) {
            if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
              var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
              if (firstIFDOffset >= 0x00000008) {
                ifdStart = tiffOffset + firstIFDOffset;
              }
            }
          }
        }
      }
      if (ifdStart) {
        var _length = dataView.getUint16(ifdStart, littleEndian);
        var _offset;
        var i;
        for (i = 0; i < _length; i += 1) {
          _offset = ifdStart + i * 12 + 2;
          if (dataView.getUint16(_offset, littleEndian) === 0x0112 /* Orientation */) {
            // 8 is the offset of the current tag's value
            _offset += 8;

            // Get the original orientation value
            orientation = dataView.getUint16(_offset, littleEndian);

            // Override the orientation with its default value
            dataView.setUint16(_offset, 1, littleEndian);
            break;
          }
        }
      }
    } catch (error) {
      orientation = 1;
    }
    return orientation;
  }

  /**
   * Parse Exif Orientation value.
   * @param {number} orientation - The orientation to parse.
   * @returns {Object} The parsed result.
   */
  function parseOrientation(orientation) {
    var rotate = 0;
    var scaleX = 1;
    var scaleY = 1;
    switch (orientation) {
      // Flip horizontal
      case 2:
        scaleX = -1;
        break;

      // Rotate left 180°
      case 3:
        rotate = -180;
        break;

      // Flip vertical
      case 4:
        scaleY = -1;
        break;

      // Flip vertical and rotate right 90°
      case 5:
        rotate = 90;
        scaleY = -1;
        break;

      // Rotate right 90°
      case 6:
        rotate = 90;
        break;

      // Flip horizontal and rotate right 90°
      case 7:
        rotate = 90;
        scaleX = -1;
        break;

      // Rotate left 90°
      case 8:
        rotate = -90;
        break;
    }
    return {
      rotate: rotate,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  var render = {
    render: function render() {
      this.initContainer();
      this.initCanvas();
      this.initCropBox();
      this.renderCanvas();
      if (this.cropped) {
        this.renderCropBox();
      }
    },
    initContainer: function initContainer() {
      var element = this.element,
        options = this.options,
        container = this.container,
        cropper = this.cropper;
      var minWidth = Number(options.minContainerWidth);
      var minHeight = Number(options.minContainerHeight);
      addClass(cropper, CLASS_HIDDEN);
      removeClass(element, CLASS_HIDDEN);
      var containerData = {
        width: Math.max(container.offsetWidth, minWidth >= 0 ? minWidth : MIN_CONTAINER_WIDTH),
        height: Math.max(container.offsetHeight, minHeight >= 0 ? minHeight : MIN_CONTAINER_HEIGHT)
      };
      this.containerData = containerData;
      setStyle(cropper, {
        width: containerData.width,
        height: containerData.height
      });
      addClass(element, CLASS_HIDDEN);
      removeClass(cropper, CLASS_HIDDEN);
    },
    // Canvas (image wrapper)
    initCanvas: function initCanvas() {
      var containerData = this.containerData,
        imageData = this.imageData;
      var viewMode = this.options.viewMode;
      var rotated = Math.abs(imageData.rotate) % 180 === 90;
      var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
      var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
      var aspectRatio = naturalWidth / naturalHeight;
      var canvasWidth = containerData.width;
      var canvasHeight = containerData.height;
      if (containerData.height * aspectRatio > containerData.width) {
        if (viewMode === 3) {
          canvasWidth = containerData.height * aspectRatio;
        } else {
          canvasHeight = containerData.width / aspectRatio;
        }
      } else if (viewMode === 3) {
        canvasHeight = containerData.width / aspectRatio;
      } else {
        canvasWidth = containerData.height * aspectRatio;
      }
      var canvasData = {
        aspectRatio: aspectRatio,
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight,
        width: canvasWidth,
        height: canvasHeight
      };
      this.canvasData = canvasData;
      this.limited = viewMode === 1 || viewMode === 2;
      this.limitCanvas(true, true);
      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      canvasData.left = (containerData.width - canvasData.width) / 2;
      canvasData.top = (containerData.height - canvasData.height) / 2;
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      this.initialCanvasData = assign({}, canvasData);
    },
    limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
      var options = this.options,
        containerData = this.containerData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData;
      var viewMode = options.viewMode;
      var aspectRatio = canvasData.aspectRatio;
      var cropped = this.cropped && cropBoxData;
      if (sizeLimited) {
        var minCanvasWidth = Number(options.minCanvasWidth) || 0;
        var minCanvasHeight = Number(options.minCanvasHeight) || 0;
        if (viewMode > 1) {
          minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
          minCanvasHeight = Math.max(minCanvasHeight, containerData.height);
          if (viewMode === 3) {
            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        } else if (viewMode > 0) {
          if (minCanvasWidth) {
            minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
          } else if (minCanvasHeight) {
            minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
          } else if (cropped) {
            minCanvasWidth = cropBoxData.width;
            minCanvasHeight = cropBoxData.height;
            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        }
        var _getAdjustedSizes = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: minCanvasWidth,
          height: minCanvasHeight
        });
        minCanvasWidth = _getAdjustedSizes.width;
        minCanvasHeight = _getAdjustedSizes.height;
        canvasData.minWidth = minCanvasWidth;
        canvasData.minHeight = minCanvasHeight;
        canvasData.maxWidth = Infinity;
        canvasData.maxHeight = Infinity;
      }
      if (positionLimited) {
        if (viewMode > (cropped ? 0 : 1)) {
          var newCanvasLeft = containerData.width - canvasData.width;
          var newCanvasTop = containerData.height - canvasData.height;
          canvasData.minLeft = Math.min(0, newCanvasLeft);
          canvasData.minTop = Math.min(0, newCanvasTop);
          canvasData.maxLeft = Math.max(0, newCanvasLeft);
          canvasData.maxTop = Math.max(0, newCanvasTop);
          if (cropped && this.limited) {
            canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
            canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
            canvasData.maxLeft = cropBoxData.left;
            canvasData.maxTop = cropBoxData.top;
            if (viewMode === 2) {
              if (canvasData.width >= containerData.width) {
                canvasData.minLeft = Math.min(0, newCanvasLeft);
                canvasData.maxLeft = Math.max(0, newCanvasLeft);
              }
              if (canvasData.height >= containerData.height) {
                canvasData.minTop = Math.min(0, newCanvasTop);
                canvasData.maxTop = Math.max(0, newCanvasTop);
              }
            }
          }
        } else {
          canvasData.minLeft = -canvasData.width;
          canvasData.minTop = -canvasData.height;
          canvasData.maxLeft = containerData.width;
          canvasData.maxTop = containerData.height;
        }
      }
    },
    renderCanvas: function renderCanvas(changed, transformed) {
      var canvasData = this.canvasData,
        imageData = this.imageData;
      if (transformed) {
        var _getRotatedSizes = getRotatedSizes({
            width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
            height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
            degree: imageData.rotate || 0
          }),
          naturalWidth = _getRotatedSizes.width,
          naturalHeight = _getRotatedSizes.height;
        var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
        var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
        canvasData.left -= (width - canvasData.width) / 2;
        canvasData.top -= (height - canvasData.height) / 2;
        canvasData.width = width;
        canvasData.height = height;
        canvasData.aspectRatio = naturalWidth / naturalHeight;
        canvasData.naturalWidth = naturalWidth;
        canvasData.naturalHeight = naturalHeight;
        this.limitCanvas(true, false);
      }
      if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
        canvasData.left = canvasData.oldLeft;
      }
      if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
        canvasData.top = canvasData.oldTop;
      }
      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      this.limitCanvas(false, true);
      canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
      canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      setStyle(this.canvas, assign({
        width: canvasData.width,
        height: canvasData.height
      }, getTransforms({
        translateX: canvasData.left,
        translateY: canvasData.top
      })));
      this.renderImage(changed);
      if (this.cropped && this.limited) {
        this.limitCropBox(true, true);
      }
    },
    renderImage: function renderImage(changed) {
      var canvasData = this.canvasData,
        imageData = this.imageData;
      var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
      var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
      assign(imageData, {
        width: width,
        height: height,
        left: (canvasData.width - width) / 2,
        top: (canvasData.height - height) / 2
      });
      setStyle(this.image, assign({
        width: imageData.width,
        height: imageData.height
      }, getTransforms(assign({
        translateX: imageData.left,
        translateY: imageData.top
      }, imageData))));
      if (changed) {
        this.output();
      }
    },
    initCropBox: function initCropBox() {
      var options = this.options,
        canvasData = this.canvasData;
      var aspectRatio = options.aspectRatio || options.initialAspectRatio;
      var autoCropArea = Number(options.autoCropArea) || 0.8;
      var cropBoxData = {
        width: canvasData.width,
        height: canvasData.height
      };
      if (aspectRatio) {
        if (canvasData.height * aspectRatio > canvasData.width) {
          cropBoxData.height = cropBoxData.width / aspectRatio;
        } else {
          cropBoxData.width = cropBoxData.height * aspectRatio;
        }
      }
      this.cropBoxData = cropBoxData;
      this.limitCropBox(true, true);

      // Initialize auto crop area
      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);

      // The width/height of auto crop area must large than "minWidth/Height"
      cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
      cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
      cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
      cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;
      this.initialCropBoxData = assign({}, cropBoxData);
    },
    limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
      var options = this.options,
        containerData = this.containerData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData,
        limited = this.limited;
      var aspectRatio = options.aspectRatio;
      if (sizeLimited) {
        var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
        var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
        var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
        var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height;

        // The min/maxCropBoxWidth/Height must be less than container's width/height
        minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
        minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);
        if (aspectRatio) {
          if (minCropBoxWidth && minCropBoxHeight) {
            if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
              minCropBoxHeight = minCropBoxWidth / aspectRatio;
            } else {
              minCropBoxWidth = minCropBoxHeight * aspectRatio;
            }
          } else if (minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else if (minCropBoxHeight) {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }
          if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
            maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
          } else {
            maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
          }
        }

        // The minWidth/Height must be less than maxWidth/Height
        cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
        cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
        cropBoxData.maxWidth = maxCropBoxWidth;
        cropBoxData.maxHeight = maxCropBoxHeight;
      }
      if (positionLimited) {
        if (limited) {
          cropBoxData.minLeft = Math.max(0, canvasData.left);
          cropBoxData.minTop = Math.max(0, canvasData.top);
          cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
          cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
        } else {
          cropBoxData.minLeft = 0;
          cropBoxData.minTop = 0;
          cropBoxData.maxLeft = containerData.width - cropBoxData.width;
          cropBoxData.maxTop = containerData.height - cropBoxData.height;
        }
      }
    },
    renderCropBox: function renderCropBox() {
      var options = this.options,
        containerData = this.containerData,
        cropBoxData = this.cropBoxData;
      if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
        cropBoxData.left = cropBoxData.oldLeft;
      }
      if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
        cropBoxData.top = cropBoxData.oldTop;
      }
      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
      this.limitCropBox(false, true);
      cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
      cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;
      if (options.movable && options.cropBoxMovable) {
        // Turn to move the canvas when the crop box is equal to the container
        setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
      }
      setStyle(this.cropBox, assign({
        width: cropBoxData.width,
        height: cropBoxData.height
      }, getTransforms({
        translateX: cropBoxData.left,
        translateY: cropBoxData.top
      })));
      if (this.cropped && this.limited) {
        this.limitCanvas(true, true);
      }
      if (!this.disabled) {
        this.output();
      }
    },
    output: function output() {
      this.preview();
      dispatchEvent(this.element, EVENT_CROP, this.getData());
    }
  };

  var preview = {
    initPreview: function initPreview() {
      var element = this.element,
        crossOrigin = this.crossOrigin;
      var preview = this.options.preview;
      var url = crossOrigin ? this.crossOriginUrl : this.url;
      var alt = element.alt || 'The image to preview';
      var image = document.createElement('img');
      if (crossOrigin) {
        image.crossOrigin = crossOrigin;
      }
      image.src = url;
      image.alt = alt;
      this.viewBox.appendChild(image);
      this.viewBoxImage = image;
      if (!preview) {
        return;
      }
      var previews = preview;
      if (typeof preview === 'string') {
        previews = element.ownerDocument.querySelectorAll(preview);
      } else if (preview.querySelector) {
        previews = [preview];
      }
      this.previews = previews;
      forEach(previews, function (el) {
        var img = document.createElement('img');

        // Save the original size for recover
        setData(el, DATA_PREVIEW, {
          width: el.offsetWidth,
          height: el.offsetHeight,
          html: el.innerHTML
        });
        if (crossOrigin) {
          img.crossOrigin = crossOrigin;
        }
        img.src = url;
        img.alt = alt;

        /**
         * Override img element styles
         * Add `display:block` to avoid margin top issue
         * Add `height:auto` to override `height` attribute on IE8
         * (Occur only when margin-top <= -height)
         */
        img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';
        el.innerHTML = '';
        el.appendChild(img);
      });
    },
    resetPreview: function resetPreview() {
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        setStyle(element, {
          width: data.width,
          height: data.height
        });
        element.innerHTML = data.html;
        removeData(element, DATA_PREVIEW);
      });
    },
    preview: function preview() {
      var imageData = this.imageData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData;
      var cropBoxWidth = cropBoxData.width,
        cropBoxHeight = cropBoxData.height;
      var width = imageData.width,
        height = imageData.height;
      var left = cropBoxData.left - canvasData.left - imageData.left;
      var top = cropBoxData.top - canvasData.top - imageData.top;
      if (!this.cropped || this.disabled) {
        return;
      }
      setStyle(this.viewBoxImage, assign({
        width: width,
        height: height
      }, getTransforms(assign({
        translateX: -left,
        translateY: -top
      }, imageData))));
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        var originalWidth = data.width;
        var originalHeight = data.height;
        var newWidth = originalWidth;
        var newHeight = originalHeight;
        var ratio = 1;
        if (cropBoxWidth) {
          ratio = originalWidth / cropBoxWidth;
          newHeight = cropBoxHeight * ratio;
        }
        if (cropBoxHeight && newHeight > originalHeight) {
          ratio = originalHeight / cropBoxHeight;
          newWidth = cropBoxWidth * ratio;
          newHeight = originalHeight;
        }
        setStyle(element, {
          width: newWidth,
          height: newHeight
        });
        setStyle(element.getElementsByTagName('img')[0], assign({
          width: width * ratio,
          height: height * ratio
        }, getTransforms(assign({
          translateX: -left * ratio,
          translateY: -top * ratio
        }, imageData))));
      });
    }
  };

  var events = {
    bind: function bind() {
      var element = this.element,
        options = this.options,
        cropper = this.cropper;
      if (isFunction(options.cropstart)) {
        addListener(element, EVENT_CROP_START, options.cropstart);
      }
      if (isFunction(options.cropmove)) {
        addListener(element, EVENT_CROP_MOVE, options.cropmove);
      }
      if (isFunction(options.cropend)) {
        addListener(element, EVENT_CROP_END, options.cropend);
      }
      if (isFunction(options.crop)) {
        addListener(element, EVENT_CROP, options.crop);
      }
      if (isFunction(options.zoom)) {
        addListener(element, EVENT_ZOOM, options.zoom);
      }
      addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));
      if (options.zoomable && options.zoomOnWheel) {
        addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
          passive: false,
          capture: true
        });
      }
      if (options.toggleDragModeOnDblclick) {
        addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
      }
      addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
      addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));
      if (options.responsive) {
        addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
      }
    },
    unbind: function unbind() {
      var element = this.element,
        options = this.options,
        cropper = this.cropper;
      if (isFunction(options.cropstart)) {
        removeListener(element, EVENT_CROP_START, options.cropstart);
      }
      if (isFunction(options.cropmove)) {
        removeListener(element, EVENT_CROP_MOVE, options.cropmove);
      }
      if (isFunction(options.cropend)) {
        removeListener(element, EVENT_CROP_END, options.cropend);
      }
      if (isFunction(options.crop)) {
        removeListener(element, EVENT_CROP, options.crop);
      }
      if (isFunction(options.zoom)) {
        removeListener(element, EVENT_ZOOM, options.zoom);
      }
      removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);
      if (options.zoomable && options.zoomOnWheel) {
        removeListener(cropper, EVENT_WHEEL, this.onWheel, {
          passive: false,
          capture: true
        });
      }
      if (options.toggleDragModeOnDblclick) {
        removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
      }
      removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
      removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);
      if (options.responsive) {
        removeListener(window, EVENT_RESIZE, this.onResize);
      }
    }
  };

  var handlers = {
    resize: function resize() {
      if (this.disabled) {
        return;
      }
      var options = this.options,
        container = this.container,
        containerData = this.containerData;
      var ratioX = container.offsetWidth / containerData.width;
      var ratioY = container.offsetHeight / containerData.height;
      var ratio = Math.abs(ratioX - 1) > Math.abs(ratioY - 1) ? ratioX : ratioY;

      // Resize when width changed or height changed
      if (ratio !== 1) {
        var canvasData;
        var cropBoxData;
        if (options.restore) {
          canvasData = this.getCanvasData();
          cropBoxData = this.getCropBoxData();
        }
        this.render();
        if (options.restore) {
          this.setCanvasData(forEach(canvasData, function (n, i) {
            canvasData[i] = n * ratio;
          }));
          this.setCropBoxData(forEach(cropBoxData, function (n, i) {
            cropBoxData[i] = n * ratio;
          }));
        }
      }
    },
    dblclick: function dblclick() {
      if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
        return;
      }
      this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
    },
    wheel: function wheel(event) {
      var _this = this;
      var ratio = Number(this.options.wheelZoomRatio) || 0.1;
      var delta = 1;
      if (this.disabled) {
        return;
      }
      event.preventDefault();

      // Limit wheel speed to prevent zoom too fast (#21)
      if (this.wheeling) {
        return;
      }
      this.wheeling = true;
      setTimeout(function () {
        _this.wheeling = false;
      }, 50);
      if (event.deltaY) {
        delta = event.deltaY > 0 ? 1 : -1;
      } else if (event.wheelDelta) {
        delta = -event.wheelDelta / 120;
      } else if (event.detail) {
        delta = event.detail > 0 ? 1 : -1;
      }
      this.zoom(-delta * ratio, event);
    },
    cropStart: function cropStart(event) {
      var buttons = event.buttons,
        button = event.button;
      if (this.disabled

      // Handle mouse event and pointer event and ignore touch event
      || (event.type === 'mousedown' || event.type === 'pointerdown' && event.pointerType === 'mouse') && (
      // No primary button (Usually the left button)
      isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0

      // Open context menu
      || event.ctrlKey)) {
        return;
      }
      var options = this.options,
        pointers = this.pointers;
      var action;
      if (event.changedTouches) {
        // Handle touch event
        forEach(event.changedTouches, function (touch) {
          pointers[touch.identifier] = getPointer(touch);
        });
      } else {
        // Handle mouse event and pointer event
        pointers[event.pointerId || 0] = getPointer(event);
      }
      if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
        action = ACTION_ZOOM;
      } else {
        action = getData(event.target, DATA_ACTION);
      }
      if (!REGEXP_ACTIONS.test(action)) {
        return;
      }
      if (dispatchEvent(this.element, EVENT_CROP_START, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      }

      // This line is required for preventing page zooming in iOS browsers
      event.preventDefault();
      this.action = action;
      this.cropping = false;
      if (action === ACTION_CROP) {
        this.cropping = true;
        addClass(this.dragBox, CLASS_MODAL);
      }
    },
    cropMove: function cropMove(event) {
      var action = this.action;
      if (this.disabled || !action) {
        return;
      }
      var pointers = this.pointers;
      event.preventDefault();
      if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      }
      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          // The first parameter should not be undefined (#432)
          assign(pointers[touch.identifier] || {}, getPointer(touch, true));
        });
      } else {
        assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
      }
      this.change(event);
    },
    cropEnd: function cropEnd(event) {
      if (this.disabled) {
        return;
      }
      var action = this.action,
        pointers = this.pointers;
      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          delete pointers[touch.identifier];
        });
      } else {
        delete pointers[event.pointerId || 0];
      }
      if (!action) {
        return;
      }
      event.preventDefault();
      if (!Object.keys(pointers).length) {
        this.action = '';
      }
      if (this.cropping) {
        this.cropping = false;
        toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
      }
      dispatchEvent(this.element, EVENT_CROP_END, {
        originalEvent: event,
        action: action
      });
    }
  };

  var change = {
    change: function change(event) {
      var options = this.options,
        canvasData = this.canvasData,
        containerData = this.containerData,
        cropBoxData = this.cropBoxData,
        pointers = this.pointers;
      var action = this.action;
      var aspectRatio = options.aspectRatio;
      var left = cropBoxData.left,
        top = cropBoxData.top,
        width = cropBoxData.width,
        height = cropBoxData.height;
      var right = left + width;
      var bottom = top + height;
      var minLeft = 0;
      var minTop = 0;
      var maxWidth = containerData.width;
      var maxHeight = containerData.height;
      var renderable = true;
      var offset;

      // Locking aspect ratio in "free mode" by holding shift key
      if (!aspectRatio && event.shiftKey) {
        aspectRatio = width && height ? width / height : 1;
      }
      if (this.limited) {
        minLeft = cropBoxData.minLeft;
        minTop = cropBoxData.minTop;
        maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
        maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
      }
      var pointer = pointers[Object.keys(pointers)[0]];
      var range = {
        x: pointer.endX - pointer.startX,
        y: pointer.endY - pointer.startY
      };
      var check = function check(side) {
        switch (side) {
          case ACTION_EAST:
            if (right + range.x > maxWidth) {
              range.x = maxWidth - right;
            }
            break;
          case ACTION_WEST:
            if (left + range.x < minLeft) {
              range.x = minLeft - left;
            }
            break;
          case ACTION_NORTH:
            if (top + range.y < minTop) {
              range.y = minTop - top;
            }
            break;
          case ACTION_SOUTH:
            if (bottom + range.y > maxHeight) {
              range.y = maxHeight - bottom;
            }
            break;
        }
      };
      switch (action) {
        // Move crop box
        case ACTION_ALL:
          left += range.x;
          top += range.y;
          break;

        // Resize crop box
        case ACTION_EAST:
          if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }
          check(ACTION_EAST);
          width += range.x;
          if (width < 0) {
            action = ACTION_WEST;
            width = -width;
            left -= width;
          }
          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }
          break;
        case ACTION_NORTH:
          if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }
          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;
          if (height < 0) {
            action = ACTION_SOUTH;
            height = -height;
            top -= height;
          }
          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }
          break;
        case ACTION_WEST:
          if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }
          check(ACTION_WEST);
          width -= range.x;
          left += range.x;
          if (width < 0) {
            action = ACTION_EAST;
            width = -width;
            left -= width;
          }
          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }
          break;
        case ACTION_SOUTH:
          if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }
          check(ACTION_SOUTH);
          height += range.y;
          if (height < 0) {
            action = ACTION_NORTH;
            height = -height;
            top -= height;
          }
          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }
          break;
        case ACTION_NORTH_EAST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
              renderable = false;
              break;
            }
            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
          } else {
            check(ACTION_NORTH);
            check(ACTION_EAST);
            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width += range.x;
            }
            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }
          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            top -= height;
          }
          break;
        case ACTION_NORTH_WEST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
              renderable = false;
              break;
            }
            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
            left += cropBoxData.width - width;
          } else {
            check(ACTION_NORTH);
            check(ACTION_WEST);
            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }
            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }
          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            top -= height;
          }
          break;
        case ACTION_SOUTH_WEST:
          if (aspectRatio) {
            if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
              renderable = false;
              break;
            }
            check(ACTION_WEST);
            width -= range.x;
            left += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_WEST);
            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }
            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }
          if (width < 0 && height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            top -= height;
          }
          break;
        case ACTION_SOUTH_EAST:
          if (aspectRatio) {
            if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
              renderable = false;
              break;
            }
            check(ACTION_EAST);
            width += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_EAST);
            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width += range.x;
            }
            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }
          if (width < 0 && height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            top -= height;
          }
          break;

        // Move canvas
        case ACTION_MOVE:
          this.move(range.x, range.y);
          renderable = false;
          break;

        // Zoom canvas
        case ACTION_ZOOM:
          this.zoom(getMaxZoomRatio(pointers), event);
          renderable = false;
          break;

        // Create crop box
        case ACTION_CROP:
          if (!range.x || !range.y) {
            renderable = false;
            break;
          }
          offset = getOffset(this.cropper);
          left = pointer.startX - offset.left;
          top = pointer.startY - offset.top;
          width = cropBoxData.minWidth;
          height = cropBoxData.minHeight;
          if (range.x > 0) {
            action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
          } else if (range.x < 0) {
            left -= width;
            action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
          }
          if (range.y < 0) {
            top -= height;
          }

          // Show the crop box if is hidden
          if (!this.cropped) {
            removeClass(this.cropBox, CLASS_HIDDEN);
            this.cropped = true;
            if (this.limited) {
              this.limitCropBox(true, true);
            }
          }
          break;
      }
      if (renderable) {
        cropBoxData.width = width;
        cropBoxData.height = height;
        cropBoxData.left = left;
        cropBoxData.top = top;
        this.action = action;
        this.renderCropBox();
      }

      // Override
      forEach(pointers, function (p) {
        p.startX = p.endX;
        p.startY = p.endY;
      });
    }
  };

  var methods = {
    // Show the crop box manually
    crop: function crop() {
      if (this.ready && !this.cropped && !this.disabled) {
        this.cropped = true;
        this.limitCropBox(true, true);
        if (this.options.modal) {
          addClass(this.dragBox, CLASS_MODAL);
        }
        removeClass(this.cropBox, CLASS_HIDDEN);
        this.setCropBoxData(this.initialCropBoxData);
      }
      return this;
    },
    // Reset the image and crop box to their initial states
    reset: function reset() {
      if (this.ready && !this.disabled) {
        this.imageData = assign({}, this.initialImageData);
        this.canvasData = assign({}, this.initialCanvasData);
        this.cropBoxData = assign({}, this.initialCropBoxData);
        this.renderCanvas();
        if (this.cropped) {
          this.renderCropBox();
        }
      }
      return this;
    },
    // Clear the crop box
    clear: function clear() {
      if (this.cropped && !this.disabled) {
        assign(this.cropBoxData, {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        });
        this.cropped = false;
        this.renderCropBox();
        this.limitCanvas(true, true);

        // Render canvas after crop box rendered
        this.renderCanvas();
        removeClass(this.dragBox, CLASS_MODAL);
        addClass(this.cropBox, CLASS_HIDDEN);
      }
      return this;
    },
    /**
     * Replace the image's src and rebuild the cropper
     * @param {string} url - The new URL.
     * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
     * @returns {Cropper} this
     */
    replace: function replace(url) {
      var hasSameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!this.disabled && url) {
        if (this.isImg) {
          this.element.src = url;
        }
        if (hasSameSize) {
          this.url = url;
          this.image.src = url;
          if (this.ready) {
            this.viewBoxImage.src = url;
            forEach(this.previews, function (element) {
              element.getElementsByTagName('img')[0].src = url;
            });
          }
        } else {
          if (this.isImg) {
            this.replaced = true;
          }
          this.options.data = null;
          this.uncreate();
          this.load(url);
        }
      }
      return this;
    },
    // Enable (unfreeze) the cropper
    enable: function enable() {
      if (this.ready && this.disabled) {
        this.disabled = false;
        removeClass(this.cropper, CLASS_DISABLED);
      }
      return this;
    },
    // Disable (freeze) the cropper
    disable: function disable() {
      if (this.ready && !this.disabled) {
        this.disabled = true;
        addClass(this.cropper, CLASS_DISABLED);
      }
      return this;
    },
    /**
     * Destroy the cropper and remove the instance from the image
     * @returns {Cropper} this
     */
    destroy: function destroy() {
      var element = this.element;
      if (!element[NAMESPACE]) {
        return this;
      }
      element[NAMESPACE] = undefined;
      if (this.isImg && this.replaced) {
        element.src = this.originalUrl;
      }
      this.uncreate();
      return this;
    },
    /**
     * Move the canvas with relative offsets
     * @param {number} offsetX - The relative offset distance on the x-axis.
     * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
     * @returns {Cropper} this
     */
    move: function move(offsetX) {
      var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : offsetX;
      var _this$canvasData = this.canvasData,
        left = _this$canvasData.left,
        top = _this$canvasData.top;
      return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
    },
    /**
     * Move the canvas to an absolute point
     * @param {number} x - The x-axis coordinate.
     * @param {number} [y=x] - The y-axis coordinate.
     * @returns {Cropper} this
     */
    moveTo: function moveTo(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var canvasData = this.canvasData;
      var changed = false;
      x = Number(x);
      y = Number(y);
      if (this.ready && !this.disabled && this.options.movable) {
        if (isNumber(x)) {
          canvasData.left = x;
          changed = true;
        }
        if (isNumber(y)) {
          canvasData.top = y;
          changed = true;
        }
        if (changed) {
          this.renderCanvas(true);
        }
      }
      return this;
    },
    /**
     * Zoom the canvas with a relative ratio
     * @param {number} ratio - The target ratio.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoom: function zoom(ratio, _originalEvent) {
      var canvasData = this.canvasData;
      ratio = Number(ratio);
      if (ratio < 0) {
        ratio = 1 / (1 - ratio);
      } else {
        ratio = 1 + ratio;
      }
      return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
    },
    /**
     * Zoom the canvas to an absolute ratio
     * @param {number} ratio - The target ratio.
     * @param {Object} pivot - The zoom pivot point coordinate.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
      var options = this.options,
        canvasData = this.canvasData;
      var width = canvasData.width,
        height = canvasData.height,
        naturalWidth = canvasData.naturalWidth,
        naturalHeight = canvasData.naturalHeight;
      ratio = Number(ratio);
      if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
        var newWidth = naturalWidth * ratio;
        var newHeight = naturalHeight * ratio;
        if (dispatchEvent(this.element, EVENT_ZOOM, {
          ratio: ratio,
          oldRatio: width / naturalWidth,
          originalEvent: _originalEvent
        }) === false) {
          return this;
        }
        if (_originalEvent) {
          var pointers = this.pointers;
          var offset = getOffset(this.cropper);
          var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
            pageX: _originalEvent.pageX,
            pageY: _originalEvent.pageY
          };

          // Zoom from the triggering point of the event
          canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
        } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
          canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
        } else {
          // Zoom from the center of the canvas
          canvasData.left -= (newWidth - width) / 2;
          canvasData.top -= (newHeight - height) / 2;
        }
        canvasData.width = newWidth;
        canvasData.height = newHeight;
        this.renderCanvas(true);
      }
      return this;
    },
    /**
     * Rotate the canvas with a relative degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotate: function rotate(degree) {
      return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
    },
    /**
     * Rotate the canvas to an absolute degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotateTo: function rotateTo(degree) {
      degree = Number(degree);
      if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
        this.imageData.rotate = degree % 360;
        this.renderCanvas(true, true);
      }
      return this;
    },
    /**
     * Scale the image on the x-axis.
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @returns {Cropper} this
     */
    scaleX: function scaleX(_scaleX) {
      var scaleY = this.imageData.scaleY;
      return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
    },
    /**
     * Scale the image on the y-axis.
     * @param {number} scaleY - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scaleY: function scaleY(_scaleY) {
      var scaleX = this.imageData.scaleX;
      return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
    },
    /**
     * Scale the image
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scale: function scale(scaleX) {
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
      var imageData = this.imageData;
      var transformed = false;
      scaleX = Number(scaleX);
      scaleY = Number(scaleY);
      if (this.ready && !this.disabled && this.options.scalable) {
        if (isNumber(scaleX)) {
          imageData.scaleX = scaleX;
          transformed = true;
        }
        if (isNumber(scaleY)) {
          imageData.scaleY = scaleY;
          transformed = true;
        }
        if (transformed) {
          this.renderCanvas(true, true);
        }
      }
      return this;
    },
    /**
     * Get the cropped area position and size data (base on the original image)
     * @param {boolean} [rounded=false] - Indicate if round the data values or not.
     * @returns {Object} The result cropped data.
     */
    getData: function getData() {
      var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = this.options,
        imageData = this.imageData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData;
      var data;
      if (this.ready && this.cropped) {
        data = {
          x: cropBoxData.left - canvasData.left,
          y: cropBoxData.top - canvasData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
        var ratio = imageData.width / imageData.naturalWidth;
        forEach(data, function (n, i) {
          data[i] = n / ratio;
        });
        if (rounded) {
          // In case rounding off leads to extra 1px in right or bottom border
          // we should round the top-left corner and the dimension (#343).
          var bottom = Math.round(data.y + data.height);
          var right = Math.round(data.x + data.width);
          data.x = Math.round(data.x);
          data.y = Math.round(data.y);
          data.width = right - data.x;
          data.height = bottom - data.y;
        }
      } else {
        data = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      if (options.rotatable) {
        data.rotate = imageData.rotate || 0;
      }
      if (options.scalable) {
        data.scaleX = imageData.scaleX || 1;
        data.scaleY = imageData.scaleY || 1;
      }
      return data;
    },
    /**
     * Set the cropped area position and size with new data
     * @param {Object} data - The new data.
     * @returns {Cropper} this
     */
    setData: function setData(data) {
      var options = this.options,
        imageData = this.imageData,
        canvasData = this.canvasData;
      var cropBoxData = {};
      if (this.ready && !this.disabled && isPlainObject(data)) {
        var transformed = false;
        if (options.rotatable) {
          if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
            imageData.rotate = data.rotate;
            transformed = true;
          }
        }
        if (options.scalable) {
          if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
            imageData.scaleX = data.scaleX;
            transformed = true;
          }
          if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
            imageData.scaleY = data.scaleY;
            transformed = true;
          }
        }
        if (transformed) {
          this.renderCanvas(true, true);
        }
        var ratio = imageData.width / imageData.naturalWidth;
        if (isNumber(data.x)) {
          cropBoxData.left = data.x * ratio + canvasData.left;
        }
        if (isNumber(data.y)) {
          cropBoxData.top = data.y * ratio + canvasData.top;
        }
        if (isNumber(data.width)) {
          cropBoxData.width = data.width * ratio;
        }
        if (isNumber(data.height)) {
          cropBoxData.height = data.height * ratio;
        }
        this.setCropBoxData(cropBoxData);
      }
      return this;
    },
    /**
     * Get the container size data.
     * @returns {Object} The result container data.
     */
    getContainerData: function getContainerData() {
      return this.ready ? assign({}, this.containerData) : {};
    },
    /**
     * Get the image position and size data.
     * @returns {Object} The result image data.
     */
    getImageData: function getImageData() {
      return this.sized ? assign({}, this.imageData) : {};
    },
    /**
     * Get the canvas position and size data.
     * @returns {Object} The result canvas data.
     */
    getCanvasData: function getCanvasData() {
      var canvasData = this.canvasData;
      var data = {};
      if (this.ready) {
        forEach(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (n) {
          data[n] = canvasData[n];
        });
      }
      return data;
    },
    /**
     * Set the canvas position and size with new data.
     * @param {Object} data - The new canvas data.
     * @returns {Cropper} this
     */
    setCanvasData: function setCanvasData(data) {
      var canvasData = this.canvasData;
      var aspectRatio = canvasData.aspectRatio;
      if (this.ready && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          canvasData.left = data.left;
        }
        if (isNumber(data.top)) {
          canvasData.top = data.top;
        }
        if (isNumber(data.width)) {
          canvasData.width = data.width;
          canvasData.height = data.width / aspectRatio;
        } else if (isNumber(data.height)) {
          canvasData.height = data.height;
          canvasData.width = data.height * aspectRatio;
        }
        this.renderCanvas(true);
      }
      return this;
    },
    /**
     * Get the crop box position and size data.
     * @returns {Object} The result crop box data.
     */
    getCropBoxData: function getCropBoxData() {
      var cropBoxData = this.cropBoxData;
      var data;
      if (this.ready && this.cropped) {
        data = {
          left: cropBoxData.left,
          top: cropBoxData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
      }
      return data || {};
    },
    /**
     * Set the crop box position and size with new data.
     * @param {Object} data - The new crop box data.
     * @returns {Cropper} this
     */
    setCropBoxData: function setCropBoxData(data) {
      var cropBoxData = this.cropBoxData;
      var aspectRatio = this.options.aspectRatio;
      var widthChanged;
      var heightChanged;
      if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          cropBoxData.left = data.left;
        }
        if (isNumber(data.top)) {
          cropBoxData.top = data.top;
        }
        if (isNumber(data.width) && data.width !== cropBoxData.width) {
          widthChanged = true;
          cropBoxData.width = data.width;
        }
        if (isNumber(data.height) && data.height !== cropBoxData.height) {
          heightChanged = true;
          cropBoxData.height = data.height;
        }
        if (aspectRatio) {
          if (widthChanged) {
            cropBoxData.height = cropBoxData.width / aspectRatio;
          } else if (heightChanged) {
            cropBoxData.width = cropBoxData.height * aspectRatio;
          }
        }
        this.renderCropBox();
      }
      return this;
    },
    /**
     * Get a canvas drawn the cropped image.
     * @param {Object} [options={}] - The config options.
     * @returns {HTMLCanvasElement} - The result canvas.
     */
    getCroppedCanvas: function getCroppedCanvas() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!this.ready || !window.HTMLCanvasElement) {
        return null;
      }
      var canvasData = this.canvasData;
      var source = getSourceCanvas(this.image, this.imageData, canvasData, options);

      // Returns the source canvas if it is not cropped.
      if (!this.cropped) {
        return source;
      }
      var _this$getData = this.getData(),
        initialX = _this$getData.x,
        initialY = _this$getData.y,
        initialWidth = _this$getData.width,
        initialHeight = _this$getData.height;
      var ratio = source.width / Math.floor(canvasData.naturalWidth);
      if (ratio !== 1) {
        initialX *= ratio;
        initialY *= ratio;
        initialWidth *= ratio;
        initialHeight *= ratio;
      }
      var aspectRatio = initialWidth / initialHeight;
      var maxSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.maxWidth || Infinity,
        height: options.maxHeight || Infinity
      });
      var minSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.minWidth || 0,
        height: options.minHeight || 0
      }, 'cover');
      var _getAdjustedSizes = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: options.width || (ratio !== 1 ? source.width : initialWidth),
          height: options.height || (ratio !== 1 ? source.height : initialHeight)
        }),
        width = _getAdjustedSizes.width,
        height = _getAdjustedSizes.height;
      width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
      height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = normalizeDecimalNumber(width);
      canvas.height = normalizeDecimalNumber(height);
      context.fillStyle = options.fillColor || 'transparent';
      context.fillRect(0, 0, width, height);
      var _options$imageSmoothi = options.imageSmoothingEnabled,
        imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi,
        imageSmoothingQuality = options.imageSmoothingQuality;
      context.imageSmoothingEnabled = imageSmoothingEnabled;
      if (imageSmoothingQuality) {
        context.imageSmoothingQuality = imageSmoothingQuality;
      }

      // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage
      var sourceWidth = source.width;
      var sourceHeight = source.height;

      // Source canvas parameters
      var srcX = initialX;
      var srcY = initialY;
      var srcWidth;
      var srcHeight;

      // Destination canvas parameters
      var dstX;
      var dstY;
      var dstWidth;
      var dstHeight;
      if (srcX <= -initialWidth || srcX > sourceWidth) {
        srcX = 0;
        srcWidth = 0;
        dstX = 0;
        dstWidth = 0;
      } else if (srcX <= 0) {
        dstX = -srcX;
        srcX = 0;
        srcWidth = Math.min(sourceWidth, initialWidth + srcX);
        dstWidth = srcWidth;
      } else if (srcX <= sourceWidth) {
        dstX = 0;
        srcWidth = Math.min(initialWidth, sourceWidth - srcX);
        dstWidth = srcWidth;
      }
      if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
        srcY = 0;
        srcHeight = 0;
        dstY = 0;
        dstHeight = 0;
      } else if (srcY <= 0) {
        dstY = -srcY;
        srcY = 0;
        srcHeight = Math.min(sourceHeight, initialHeight + srcY);
        dstHeight = srcHeight;
      } else if (srcY <= sourceHeight) {
        dstY = 0;
        srcHeight = Math.min(initialHeight, sourceHeight - srcY);
        dstHeight = srcHeight;
      }
      var params = [srcX, srcY, srcWidth, srcHeight];

      // Avoid "IndexSizeError"
      if (dstWidth > 0 && dstHeight > 0) {
        var scale = width / initialWidth;
        params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
      }

      // All the numerical parameters should be integer for `drawImage`
      // https://github.com/fengyuanchen/cropper/issues/476
      context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function (param) {
        return Math.floor(normalizeDecimalNumber(param));
      }))));
      return canvas;
    },
    /**
     * Change the aspect ratio of the crop box.
     * @param {number} aspectRatio - The new aspect ratio.
     * @returns {Cropper} this
     */
    setAspectRatio: function setAspectRatio(aspectRatio) {
      var options = this.options;
      if (!this.disabled && !isUndefined(aspectRatio)) {
        // 0 -> NaN
        options.aspectRatio = Math.max(0, aspectRatio) || NaN;
        if (this.ready) {
          this.initCropBox();
          if (this.cropped) {
            this.renderCropBox();
          }
        }
      }
      return this;
    },
    /**
     * Change the drag mode.
     * @param {string} mode - The new drag mode.
     * @returns {Cropper} this
     */
    setDragMode: function setDragMode(mode) {
      var options = this.options,
        dragBox = this.dragBox,
        face = this.face;
      if (this.ready && !this.disabled) {
        var croppable = mode === DRAG_MODE_CROP;
        var movable = options.movable && mode === DRAG_MODE_MOVE;
        mode = croppable || movable ? mode : DRAG_MODE_NONE;
        options.dragMode = mode;
        setData(dragBox, DATA_ACTION, mode);
        toggleClass(dragBox, CLASS_CROP, croppable);
        toggleClass(dragBox, CLASS_MOVE, movable);
        if (!options.cropBoxMovable) {
          // Sync drag mode to crop box when it is not movable
          setData(face, DATA_ACTION, mode);
          toggleClass(face, CLASS_CROP, croppable);
          toggleClass(face, CLASS_MOVE, movable);
        }
      }
      return this;
    }
  };

  var AnotherCropper = WINDOW.Cropper;
  var Cropper = /*#__PURE__*/function () {
    /**
     * Create a new Cropper.
     * @param {Element} element - The target element for cropping.
     * @param {Object} [options={}] - The configuration options.
     */
    function Cropper(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, Cropper);
      if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
        throw new Error('The first argument is required and must be an <img> or <canvas> element.');
      }
      this.element = element;
      this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
      this.cropped = false;
      this.disabled = false;
      this.pointers = {};
      this.ready = false;
      this.reloading = false;
      this.replaced = false;
      this.sized = false;
      this.sizing = false;
      this.init();
    }
    _createClass(Cropper, [{
      key: "init",
      value: function init() {
        var element = this.element;
        var tagName = element.tagName.toLowerCase();
        var url;
        if (element[NAMESPACE]) {
          return;
        }
        element[NAMESPACE] = this;
        if (tagName === 'img') {
          this.isImg = true;

          // e.g.: "img/picture.jpg"
          url = element.getAttribute('src') || '';
          this.originalUrl = url;

          // Stop when it's a blank image
          if (!url) {
            return;
          }

          // e.g.: "https://example.com/img/picture.jpg"
          url = element.src;
        } else if (tagName === 'canvas' && window.HTMLCanvasElement) {
          url = element.toDataURL();
        }
        this.load(url);
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this = this;
        if (!url) {
          return;
        }
        this.url = url;
        this.imageData = {};
        var element = this.element,
          options = this.options;
        if (!options.rotatable && !options.scalable) {
          options.checkOrientation = false;
        }

        // Only IE10+ supports Typed Arrays
        if (!options.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }

        // Detect the mime type of the image directly if it is a Data URL
        if (REGEXP_DATA_URL.test(url)) {
          // Read ArrayBuffer from Data URL of JPEG images directly for better performance
          if (REGEXP_DATA_URL_JPEG.test(url)) {
            this.read(dataURLToArrayBuffer(url));
          } else {
            // Only a JPEG image may contains Exif Orientation information,
            // the rest types of Data URLs are not necessary to check orientation at all.
            this.clone();
          }
          return;
        }

        // 1. Detect the mime type of the image by a XMLHttpRequest.
        // 2. Load the image as ArrayBuffer for reading orientation if its a JPEG image.
        var xhr = new XMLHttpRequest();
        var clone = this.clone.bind(this);
        this.reloading = true;
        this.xhr = xhr;

        // 1. Cross origin requests are only supported for protocol schemes:
        // http, https, data, chrome, chrome-extension.
        // 2. Access to XMLHttpRequest from a Data URL will be blocked by CORS policy
        // in some browsers as IE11 and Safari.
        xhr.onabort = clone;
        xhr.onerror = clone;
        xhr.ontimeout = clone;
        xhr.onprogress = function () {
          // Abort the request directly if it not a JPEG image for better performance
          if (xhr.getResponseHeader('content-type') !== MIME_TYPE_JPEG) {
            xhr.abort();
          }
        };
        xhr.onload = function () {
          _this.read(xhr.response);
        };
        xhr.onloadend = function () {
          _this.reloading = false;
          _this.xhr = null;
        };

        // Bust cache when there is a "crossOrigin" property to avoid browser cache error
        if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
          url = addTimestamp(url);
        }

        // The third parameter is required for avoiding side-effect (#682)
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.withCredentials = element.crossOrigin === 'use-credentials';
        xhr.send();
      }
    }, {
      key: "read",
      value: function read(arrayBuffer) {
        var options = this.options,
          imageData = this.imageData;

        // Reset the orientation value to its default value 1
        // as some iOS browsers will render image with its orientation
        var orientation = resetAndGetOrientation(arrayBuffer);
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;
        if (orientation > 1) {
          // Generate a new URL which has the default orientation value
          this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);
          var _parseOrientation = parseOrientation(orientation);
          rotate = _parseOrientation.rotate;
          scaleX = _parseOrientation.scaleX;
          scaleY = _parseOrientation.scaleY;
        }
        if (options.rotatable) {
          imageData.rotate = rotate;
        }
        if (options.scalable) {
          imageData.scaleX = scaleX;
          imageData.scaleY = scaleY;
        }
        this.clone();
      }
    }, {
      key: "clone",
      value: function clone() {
        var element = this.element,
          url = this.url;
        var crossOrigin = element.crossOrigin;
        var crossOriginUrl = url;
        if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
          if (!crossOrigin) {
            crossOrigin = 'anonymous';
          }

          // Bust cache when there is not a "crossOrigin" property (#519)
          crossOriginUrl = addTimestamp(url);
        }
        this.crossOrigin = crossOrigin;
        this.crossOriginUrl = crossOriginUrl;
        var image = document.createElement('img');
        if (crossOrigin) {
          image.crossOrigin = crossOrigin;
        }
        image.src = crossOriginUrl || url;
        image.alt = element.alt || 'The image to crop';
        this.image = image;
        image.onload = this.start.bind(this);
        image.onerror = this.stop.bind(this);
        addClass(image, CLASS_HIDE);
        element.parentNode.insertBefore(image, element.nextSibling);
      }
    }, {
      key: "start",
      value: function start() {
        var _this2 = this;
        var image = this.image;
        image.onload = null;
        image.onerror = null;
        this.sizing = true;

        // Match all browsers that use WebKit as the layout engine in iOS devices,
        // such as Safari for iOS, Chrome for iOS, and in-app browsers.
        var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);
        var done = function done(naturalWidth, naturalHeight) {
          assign(_this2.imageData, {
            naturalWidth: naturalWidth,
            naturalHeight: naturalHeight,
            aspectRatio: naturalWidth / naturalHeight
          });
          _this2.initialImageData = assign({}, _this2.imageData);
          _this2.sizing = false;
          _this2.sized = true;
          _this2.build();
        };

        // Most modern browsers (excepts iOS WebKit)
        if (image.naturalWidth && !isIOSWebKit) {
          done(image.naturalWidth, image.naturalHeight);
          return;
        }
        var sizingImage = document.createElement('img');
        var body = document.body || document.documentElement;
        this.sizingImage = sizingImage;
        sizingImage.onload = function () {
          done(sizingImage.width, sizingImage.height);
          if (!isIOSWebKit) {
            body.removeChild(sizingImage);
          }
        };
        sizingImage.src = image.src;

        // iOS WebKit will convert the image automatically
        // with its orientation once append it into DOM (#279)
        if (!isIOSWebKit) {
          sizingImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
          body.appendChild(sizingImage);
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        var image = this.image;
        image.onload = null;
        image.onerror = null;
        image.parentNode.removeChild(image);
        this.image = null;
      }
    }, {
      key: "build",
      value: function build() {
        if (!this.sized || this.ready) {
          return;
        }
        var element = this.element,
          options = this.options,
          image = this.image;

        // Create cropper elements
        var container = element.parentNode;
        var template = document.createElement('div');
        template.innerHTML = TEMPLATE;
        var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
        var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
        var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
        var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
        var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
        this.container = container;
        this.cropper = cropper;
        this.canvas = canvas;
        this.dragBox = dragBox;
        this.cropBox = cropBox;
        this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
        this.face = face;
        canvas.appendChild(image);

        // Hide the original image
        addClass(element, CLASS_HIDDEN);

        // Inserts the cropper after to the current image
        container.insertBefore(cropper, element.nextSibling);

        // Show the hidden image
        removeClass(image, CLASS_HIDE);
        this.initPreview();
        this.bind();
        options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
        options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
        options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
        addClass(cropBox, CLASS_HIDDEN);
        if (!options.guides) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
        }
        if (!options.center) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
        }
        if (options.background) {
          addClass(cropper, "".concat(NAMESPACE, "-bg"));
        }
        if (!options.highlight) {
          addClass(face, CLASS_INVISIBLE);
        }
        if (options.cropBoxMovable) {
          addClass(face, CLASS_MOVE);
          setData(face, DATA_ACTION, ACTION_ALL);
        }
        if (!options.cropBoxResizable) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
        }
        this.render();
        this.ready = true;
        this.setDragMode(options.dragMode);
        if (options.autoCrop) {
          this.crop();
        }
        this.setData(options.data);
        if (isFunction(options.ready)) {
          addListener(element, EVENT_READY, options.ready, {
            once: true
          });
        }
        dispatchEvent(element, EVENT_READY);
      }
    }, {
      key: "unbuild",
      value: function unbuild() {
        if (!this.ready) {
          return;
        }
        this.ready = false;
        this.unbind();
        this.resetPreview();
        var parentNode = this.cropper.parentNode;
        if (parentNode) {
          parentNode.removeChild(this.cropper);
        }
        removeClass(this.element, CLASS_HIDDEN);
      }
    }, {
      key: "uncreate",
      value: function uncreate() {
        if (this.ready) {
          this.unbuild();
          this.ready = false;
          this.cropped = false;
        } else if (this.sizing) {
          this.sizingImage.onload = null;
          this.sizing = false;
          this.sized = false;
        } else if (this.reloading) {
          this.xhr.onabort = null;
          this.xhr.abort();
        } else if (this.image) {
          this.stop();
        }
      }

      /**
       * Get the no conflict cropper class.
       * @returns {Cropper} The cropper class.
       */
    }], [{
      key: "noConflict",
      value: function noConflict() {
        window.Cropper = AnotherCropper;
        return Cropper;
      }

      /**
       * Change the default options.
       * @param {Object} options - The new default options.
       */
    }, {
      key: "setDefaults",
      value: function setDefaults(options) {
        assign(DEFAULTS, isPlainObject(options) && options);
      }
    }]);
    return Cropper;
  }();
  assign(Cropper.prototype, render, preview, events, handlers, change, methods);

  return Cropper;

}));


/***/ }),

/***/ 1635:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".joiner-content[data-v-2d61e58c]{margin:15px}.joiner-list[data-v-2d61e58c]{padding:10px 0;margin-bottom:10px;border-radius:5px;box-shadow:4px 4px 6px #e5e5e5,-4px -4px 6px #e5e5e5}.joiner-list[data-v-2d61e58c]:last-child{margin-bottom:0}.joiner-list .question[data-v-2d61e58c]{padding:0 10px;font-weight:600;font-size:13px}.joiner-list .answers-list[data-v-2d61e58c]{border-bottom:1px solid #e5e5e5}.joiner-list .answers-list[data-v-2d61e58c]:last-child{border-bottom:none}.joiner-list .answers[data-v-2d61e58c]{padding:8px 10px 5px}.joiner-list .answers .answers-detail[data-v-2d61e58c]{color:#999;font-size:14px}.joiner-list .answers .answers-percent[data-v-2d61e58c]{color:#999;font-size:11px}.joiner-list .joiner[data-v-2d61e58c]{padding:0 10px}.joiner-list .joiner-detail-infor li[data-v-2d61e58c]{padding:10px 10px 10px 0;margin-left:10px;flex-wrap:nowrap;align-items:center;border-bottom:1px solid #e5e5e5;text-align:center;color:#666}.joiner-list .joiner-detail-infor li[data-v-2d61e58c]:last-child{border-bottom:none;padding-bottom:0}.joiner-list .joiner-detail-infor .list-title[data-v-2d61e58c]{padding:5px 10px 8px;margin-left:0;font-size:16px;font-weight:600;color:#333}.joiner-list .joiner-detail-infor .user-head[data-v-2d61e58c]{width:30px}.joiner-list .joiner-detail-infor .user-head img[data-v-2d61e58c]{display:block;width:30px;height:30px;border-radius:100%}.joiner-list .joiner-detail-infor .name[data-v-2d61e58c]{flex-grow:1;max-width:60px;min-width:40px}.joiner-list .joiner-detail-infor .sex[data-v-2d61e58c]{width:32px}.joiner-list .joiner-detail-infor .phone[data-v-2d61e58c]{width:100px}.joiner-list .joiner-detail-infor .time[data-v-2d61e58c]{width:90px;font-size:12px}.theme-black .joiner-list[data-v-2d61e58c]{box-shadow:none}.theme-black .joiner-list .joiner-detail-infor li[data-v-2d61e58c]{border-bottom-color:#1e1e1e}.theme-black .joiner-list .joiner-detail-infor li[data-v-2d61e58c]:last-child{border-bottom:none}.theme-black .joiner-list .joiner-detail-infor .list-title[data-v-2d61e58c]{color:#666}", ""]);

// exports


/***/ }),

/***/ 1657:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".clist[data-v-3d77af23]{padding-top:6px}.clist li.item[data-v-3d77af23]{display:block;background:#fff;padding:0 15px 15px;margin:5px 0 12px;border:1px solid #ddd;border-radius:3px;box-shadow:2px 2px 4px #ddd;vertical-align:top}.clist .-hd[data-v-3d77af23]{border-bottom:2px solid #e2e2e2;height:48px;line-height:48px}.clist .-hd .-cname[data-v-3d77af23]{float:left;font-weight:700;font-size:15px;overflow:hidden}.clist .-hd .-cname i[data-v-3d77af23]{font-size:18px;padding-right:2px;font-weight:400;position:relative;top:2px}.clist .-hd .r[data-v-3d77af23]{color:orange;font-size:12px}.clist .-bd[data-v-3d77af23]{margin-top:10px;clear:both}.clist .-bd table[data-v-3d77af23]{width:100%}.clist .-bd th[data-v-3d77af23]{font-weight:400;text-align:right;padding:0 5px;width:105px;color:#777}.clist .-bd th[data-v-3d77af23]:after{content:\"\\FF1A\"}.clist .-bd th[data-v-3d77af23]{padding-left:0}.clist .-bd td[data-v-3d77af23],.clist .-bd th[data-v-3d77af23]{line-height:28px}.clist .opt[data-v-3d77af23]{height:20px;line-height:20px;text-align:center;margin:10px 0 5px;border-top:1px solid #eee;padding-top:10px}.clist .opt a[data-v-3d77af23]{float:left;width:50%;border-right:1px solid #eee}.clist .opt a[data-v-3d77af23]:last-child{border-right:0}.note[data-v-3d77af23]{margin-top:10px}.note ol[data-v-3d77af23]{padding:10px 0 0 5px}.note ol li[data-v-3d77af23]{line-height:1.8}.qrcode img[data-v-3d77af23]{border:1px solid #777;margin-top:10px}.theme-black .clist .-bd th[data-v-3d77af23]{color:#ccc}.theme-black .clist li.item[data-v-3d77af23]{box-shadow:none}.theme-black a[data-v-3d77af23]{color:#dbb76b}", ""]);

// exports


/***/ }),

/***/ 1659:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".-style- .item[data-v-3dbc8e3a]{padding:0 16px}.-style- .item table[data-v-3dbc8e3a]{width:100%}.-style- .item td[data-v-3dbc8e3a]{padding:10px 0}.-style- .item .item-img img[data-v-3dbc8e3a]{display:block;width:100%}.-style- .item .item-name[data-v-3dbc8e3a]{font-size:16px;font-weight:700;margin-bottom:10px}.item-notes[data-v-3dbc8e3a]{padding:0 20px}.item-notes .box[data-v-3dbc8e3a]{border:1px solid #ddd;padding:5px 10px 10px;margin:15px 0;border-radius:2px;box-shadow:3px 3px 3px #eee}.item-notes .box i[data-v-3dbc8e3a]{padding-right:5px}.item-notes .box .tit[data-v-3dbc8e3a]{font-size:16px;font-weight:700;padding-bottom:10px;margin-bottom:15px}.item-notes .box .sub[data-v-3dbc8e3a]{color:#666}.item-notes .box .desc[data-v-3dbc8e3a]{color:#999}.item-notes pre[data-v-3dbc8e3a]{font-size:14px}.to-share[data-v-3dbc8e3a]{border:1px solid #1aad19;border-radius:15px;padding:5px 12px;font-size:12px;color:#1aad19}.theme-black .item-notes .box[data-v-3dbc8e3a]{box-shadow:none;border:0}", ""]);

// exports


/***/ }),

/***/ 1667:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".bargain .bargain-list[data-v-40f09911]{padding:1px 20px 0;margin-top:20px}.bargain .bargain-list li[data-v-40f09911]{padding-bottom:10px;margin-bottom:15px;border-radius:5px}.bargain .bargain-list .row[data-v-40f09911]{flex-wrap:nowrap}.bargain .bargain-list .pro-img[data-v-40f09911]{text-align:center;line-height:108px;font-size:0;border-radius:5px}.bargain .bargain-list .pro-img img[data-v-40f09911]{vertical-align:middle;border-radius:5px 5px 0 0;width:100%;height:100%}.bargain .bargain-list .pro-intro[data-v-40f09911]{position:relative;padding:0 10px}.bargain .bargain-list .pro-intro .pro-name[data-v-40f09911]{font-size:15px;font-weight:600;margin:10px 0}.bargain .bargain-list .pro-intro .pro-bargain-max[data-v-40f09911]{font-size:12px;color:#999;margin:2px 0 8px}.bargain .bargain-list .pro-intro .after-bargain-price[data-v-40f09911]{color:#ff1e24;font-weight:600}.bargain .bargain-list .pro-intro .after-bargain-price .buy-price[data-v-40f09911]{font-size:15px}.bargain .bargain-list .pro-intro .price-box[data-v-40f09911]{margin-bottom:10px}.bargain .bargain-list .pro-intro .pro-intro-right[data-v-40f09911]{color:#ff1e24}.bargain .bargain-list .pro-intro .pro-intro-right span[data-v-40f09911]{font-size:20px}.bargain .bargain-list .pro-intro .origin-price[data-v-40f09911]{text-decoration-line:line-through;font-size:11px;color:#999;margin:2px 0 5px}.bargain .bargain-list .pro-intro .bargain-time div[data-v-40f09911]{color:#999;font-size:11px;margin-top:5px}.bargain .bargain-list .pro-intro .go-bargain[data-v-40f09911]{background:#ff1e24;color:#fff;font-size:15px;padding:5px 10px 5px 20px;border-radius:20px 0 0 20px;width:90px}.pro-intro-left[data-v-40f09911]{width:200px}.left-time[data-v-40f09911]{background:#64acf6;border-radius:0 20px 20px 0;position:relative;left:-17px;padding:5px 0 5px 17px;width:210px}.left-time[data-v-40f09911]:after{position:absolute;bottom:-4px;left:2px;display:inline-block;content:\"\";width:0;height:0;border-width:5px;border-style:solid;border-color:transparent #599adc transparent transparent;transform:rotate(-226deg)}.left-time label[data-v-40f09911]{color:#b4d9ff}.left-time span[data-v-40f09911]{color:#fff}.register-num div[data-v-40f09911]{font-size:13px}.register-num .font-color-9[data-v-40f09911]{margin:0 6px;font-size:13px;color:#bbb}.register-num .number-label[data-v-40f09911]{width:70px;margin:0;font-size:14px}.none[data-v-40f09911]{text-align:center}.none img[data-v-40f09911]{display:inline-block;width:142px;height:142px}.none div[data-v-40f09911]{color:#999}.page-head .pos-rel[data-v-40f09911]{width:100%;position:relative;text-align:center}.page-head .pos-rel .pos-abs[data-v-40f09911]{position:absolute;top:0}.page-head .pos-rel .pos-left[data-v-40f09911]{left:0}.page-head .pos-rel .pos-right[data-v-40f09911]{right:0}", ""]);

// exports


/***/ }),

/***/ 1694:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".tblform[data-v-4c6f3232]{margin-bottom:20px;padding:0}.tblform .row[data-v-4c6f3232]{padding:16px}.tblform .row .row[data-v-4c6f3232]{padding:0}.tblform input[data-v-4c6f3232],.tblform textarea[data-v-4c6f3232]{padding:0;text-align:left;color:#333;width:100%}.tblform input[data-v-4c6f3232]::placeholder,.tblform textarea[data-v-4c6f3232]::placeholder{color:#ccc}.tblform .card-class .btn[data-v-4c6f3232]{display:inline-block;padding:2px 4px;margin-right:4px}.tblform .card-class .card-class-tip[data-v-4c6f3232]{margin-top:4px;font-size:12px}.tblform .card-class .card-class-tip i[data-v-4c6f3232]{font-size:12px}.tblform .infor-detail[data-v-4c6f3232]{position:relative;width:calc(100% - 110px);text-align:left}.tblform .infor-detail .row[data-v-4c6f3232]{padding:0}.tblform .member-remark[data-v-4c6f3232]{width:100%}.tblform .member-remark textarea[data-v-4c6f3232]{margin-top:10px}.tblform .card-type.infor-detail[data-v-4c6f3232]{width:calc(100% - 75px)}.tblform .must-fill[data-v-4c6f3232]:before{display:none}.tblform .must-fill[data-v-4c6f3232]:after{margin-left:2px;display:inline-block;content:\"*\";color:#ff1e24;vertical-align:-2px}.tblform .set-pass-detail[data-v-4c6f3232],.tblform .time-picker-detail[data-v-4c6f3232]{width:calc(100% - 110px)}.tblform .infor-name[data-v-4c6f3232]{position:relative}.tblform .row-l-r[data-v-4c6f3232]{position:relative;padding:10px 20px 8px}.tblform .iconarrow-down-1[data-v-4c6f3232]{font-size:14px}.limit-sig-db[data-v-4c6f3232]{padding:0}.limit-sig-db li[data-v-4c6f3232]{text-align:center;font-size:12px;margin-right:10px}.limit-sig-db .icon-radio[data-v-4c6f3232]{vertical-align:-2px;margin-right:2px}.limit-sig-db .icon-radio[data-v-4c6f3232]:before{margin:0 0 2px}.article[data-v-4c6f3232]{margin:-8px 16px 12px}.logo-img[data-v-4c6f3232]{display:block;max-height:36px}.memb-confirm table td[data-v-4c6f3232],.memb-confirm table th[data-v-4c6f3232]{padding:4px 0;font-weight:400}.memb-confirm table th[data-v-4c6f3232]{vertical-align:top}.memb-confirm table td[data-v-4c6f3232]{color:#666}.help-img[data-v-4c6f3232]{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.4);text-align:center}.help-img img[data-v-4c6f3232]{margin:50px auto 0;display:block;width:calc(100% - 32px);height:calc(100% - 100px)}.help-img.success-img img[data-v-4c6f3232]{margin:60px auto 0;display:block;width:calc(100% - 80px);height:calc(100% - 200px);border-radius:6px 6px 0 0}.help-img.success-img .keep-press[data-v-4c6f3232]{width:calc(100% - 80px);margin:0 auto;padding:16px 0;text-align:center;background:#fff;font-size:15px;border-radius:0 0 6px 6px}.help-img i[data-v-4c6f3232]{position:fixed;bottom:4%;left:50%;margin-left:-14px;color:#fff;font-size:28px}", ""]);

// exports


/***/ }),

/***/ 1701:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".joiner-content[data-v-4fc1e042]{margin:15px}.joiner-list[data-v-4fc1e042]{padding:10px 0;margin-bottom:10px;border-radius:5px;box-shadow:4px 4px 6px #e5e5e5,-4px -4px 6px #e5e5e5}.joiner-list[data-v-4fc1e042]:last-child{margin-bottom:0}.joiner-list .question[data-v-4fc1e042]{padding:0 10px;font-weight:600;font-size:13px}.joiner-list .answers-list[data-v-4fc1e042]{border-bottom:1px solid #e5e5e5}.joiner-list .answers-list[data-v-4fc1e042]:last-child{border-bottom:none}.joiner-list .answers[data-v-4fc1e042]{padding:8px 10px 5px}.joiner-list .answers .answers-detail[data-v-4fc1e042]{color:#999;font-size:14px}.joiner-list .answers .answers-percent[data-v-4fc1e042]{color:#999;font-size:11px}.joiner-list .joiner[data-v-4fc1e042]{padding:0 10px}.joiner-list .joiner-detail-infor li[data-v-4fc1e042]{padding:10px 10px 10px 0;margin-left:10px;flex-wrap:nowrap;align-items:center;border-bottom:1px solid #e5e5e5;text-align:center;color:#666}.joiner-list .joiner-detail-infor li[data-v-4fc1e042]:last-child{border-bottom:none;padding-bottom:0}.joiner-list .joiner-detail-infor .list-title[data-v-4fc1e042]{padding:5px 10px 8px;margin-left:0;font-size:16px;font-weight:600;color:#333}.joiner-list .joiner-detail-infor .user-head[data-v-4fc1e042]{width:30px}.joiner-list .joiner-detail-infor .user-head img[data-v-4fc1e042]{display:block;width:30px;height:30px;border-radius:100%}.joiner-list .joiner-detail-infor .name[data-v-4fc1e042]{flex-grow:1;max-width:60px;min-width:40px}.joiner-list .joiner-detail-infor .sex[data-v-4fc1e042]{width:32px}.joiner-list .joiner-detail-infor .phone[data-v-4fc1e042]{width:100px}.joiner-list .joiner-detail-infor .time[data-v-4fc1e042]{width:90px;font-size:12px}.pos-fixed[data-v-4fc1e042]{position:fixed;bottom:0;width:100%;text-align:center;z-index:100}.pos-fixed a[data-v-4fc1e042]{color:#fff;display:block;width:100%;height:50px;line-height:50px}.pos-fixed .state-0[data-v-4fc1e042]{background:#207fe9}.theme-black .joiner-list[data-v-4fc1e042]{box-shadow:none}.theme-black .joiner-list .joiner-detail-infor li[data-v-4fc1e042]{border-bottom-color:#1e1e1e}.theme-black .joiner-list .joiner-detail-infor li[data-v-4fc1e042]:last-child{border-bottom:none}.theme-black .joiner-list .joiner-detail-infor .list-title[data-v-4fc1e042]{color:#666}", ""]);

// exports


/***/ }),

/***/ 1735:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".statistics-content[data-v-69ab75fb]{margin:15px}.statistics-list[data-v-69ab75fb]{padding:10px 0;margin-bottom:10px;border-radius:5px;box-shadow:4px 4px 6px #e5e5e5,-4px -4px 6px #e5e5e5}.statistics-list[data-v-69ab75fb]:last-child{margin-bottom:0}.statistics-list .question[data-v-69ab75fb]{padding:0 10px;font-weight:600;font-size:13px}.statistics-list .answers-list[data-v-69ab75fb]{border-bottom:1px solid #e5e5e5;padding-bottom:8px}.statistics-list .answers-list[data-v-69ab75fb]:last-child{border-bottom:none}.statistics-list .answers[data-v-69ab75fb]{padding:8px 10px 5px}.statistics-list .answers .answers-detail[data-v-69ab75fb]{color:#666;font-size:12px;font-weight:600}.statistics-list .answers .answers-percent[data-v-69ab75fb]{color:#999;font-size:11px}.statistics-list .answers-percent-bar[data-v-69ab75fb]{height:5px;border-radius:0 3px 2px 0;background-image:linear-gradient(90deg,#fad0c4,#ff9a9e);margin-bottom:2px}.statistics-list.question-multi .answers-percent-bar[data-v-69ab75fb]{background-image:linear-gradient(90deg,#f6d365,#fda085)}.statistics-list .joiner[data-v-69ab75fb]{padding:0 10px}.statistics-list .joiner .joiner-number[data-v-69ab75fb]{color:#999;font-size:11px}.statistics-list .joiner .check-joiners[data-v-69ab75fb]{font-size:11px;font-weight:600}.theme-black .statistics-list[data-v-69ab75fb]{box-shadow:none}.theme-black .statistics-list .answers-list[data-v-69ab75fb]{border-bottom:1px solid #1e1e1e}.theme-black .statistics-list .answers-list[data-v-69ab75fb]:last-child{border-bottom:none}", ""]);

// exports


/***/ }),

/***/ 1745:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".search-attribution[data-v-6f712b80]{padding:8px 0}.search-attribution li[data-v-6f712b80]{position:relative;width:50%;padding:4px 0}.search-attribution li[data-v-6f712b80] .row-l-r{justify-content:center}.search-attribution li[data-v-6f712b80] .selected-name{max-width:70%}.poster-explain[data-v-6f712b80]{padding:20px 16px;line-height:30px;font-size:14px}.poster-list[data-v-6f712b80]{padding:16px}.poster-list ul[data-v-6f712b80]{margin-bottom:-10px}.poster-list li[data-v-6f712b80]{position:relative;width:calc((100% - 16px) / 3);margin-right:8px;margin-bottom:8px}.poster-list li[data-v-6f712b80]:nth-child(3n){margin-right:0}.poster-list li img[data-v-6f712b80]{display:block;width:100%;border-radius:3px}.poster-list .edit-btn[data-v-6f712b80]{position:absolute;bottom:16px;left:7px;width:calc(100% - 14px)}.poster-list .edit-btn div[data-v-6f712b80]{padding:4px 5px;background:rgba(0,0,0,.6);color:#fff;border-radius:3px;width:calc((100% - 4px) / 2);text-align:center;font-size:12px}.poster-list .edit-btn div[data-v-6f712b80]:first-child{margin-right:4px}.poster-list .edit-btn div[data-v-6f712b80]:last-child{margin-right:0}.see-poster-img[data-v-6f712b80]{position:fixed;bottom:20px;left:20px;z-index:50000000;width:calc(100% - 40px)}.see-poster-img .btn[data-v-6f712b80]{background:#ffad00;color:#fff;border-radius:30px;width:100%}", ""]);

// exports


/***/ }),

/***/ 1760:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".qd-cropper[data-v-7b2f1638]{position:relative}.qd-cropper .img[data-v-7b2f1638]{width:100vw;height:100vh}.qd-cropper .btn-s[data-v-7b2f1638]{position:fixed;z-index:99;bottom:0;display:flex;justify-content:space-between;width:100%}.qd-cropper .btn-s .item[data-v-7b2f1638]{width:80px;height:30px;line-height:30px;text-align:center;margin:30px;border-radius:3px}.close[data-v-7b2f1638]{background:#eee;color:#333}.over[data-v-7b2f1638]{background:#0363fa;color:#fff}", ""]);

// exports


/***/ }),

/***/ 1786:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(771);
exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".qrcode-link[data-v-9ac5b6f8]{text-align:center;border-top:1px solid #ccc;padding:15px;margin-top:15px}.qrcode-link .qrcode-img[data-v-9ac5b6f8]{border:1px solid #777;margin-top:10px}div.page-head[data-v-9ac5b6f8]{margin-bottom:0}.activity-detail .banner img[data-v-9ac5b6f8]{width:100%;display:block}.activity-detail .activity-detail-list[data-v-9ac5b6f8]{width:100%;background:url(" + escape(__webpack_require__(2160)) + ") no-repeat;background-size:100% 100%;position:relative;padding-bottom:160px;margin-bottom:-45px}.activity-detail .activity-detail-list.no-price[data-v-9ac5b6f8]{margin-bottom:-95px}.activity-detail .activity-detail-list .pro-intro[data-v-9ac5b6f8]{padding:0 10px;background:hsla(0,0%,100%,.3);background-size:cover;overflow:hidden;position:relative}.activity-detail .activity-detail-list .pro-intro .lignt[data-v-9ac5b6f8]{position:absolute;top:0;right:42%}.activity-detail .activity-detail-list .pro-intro .lignt img[data-v-9ac5b6f8]{display:inline-block;height:66px}.activity-detail .activity-detail-list .pro-intro .pro-name[data-v-9ac5b6f8]{width:53%;font-size:14px;font-weight:600;line-height:18px;float:left;height:66px;display:flex;align-items:center;padding:10px 0;overflow:hidden}.activity-detail .activity-detail-list .pro-intro .pro-name .pro-name-webkit[data-v-9ac5b6f8]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;color:#fff}.activity-detail .activity-detail-list .pro-intro .left-time[data-v-9ac5b6f8]{float:right;width:40%;padding:10px 0 8px;text-align:center;color:#fff}.activity-detail .activity-detail-list .pro-intro .left-time .left-timer[data-v-9ac5b6f8]{color:#eee;font-size:12px;margin-top:5px}.activity-detail .activity-detail-list .pro-intro .left-time .left-timer span[data-v-9ac5b6f8]{color:#207fe9;display:inline-block;background:#fff;border-radius:5px;width:22px;height:22px;line-height:22px;margin:0 4px}.activity-detail .activity-detail-list .pro-intro .left-time .left-timer span[data-v-9ac5b6f8]:first-child{padding-left:0}.activity-detail .activity-detail-list .pro-intro .left-time .left-timer span[data-v-9ac5b6f8]:last-child{padding-right:0}.activity-detail .price-box[data-v-9ac5b6f8]{position:absolute;width:calc(100% - 40px);left:20px;bottom:45px;background:#fff;box-shadow:2px 5px 5px #a6cefa;border-radius:10px;padding:10px}.activity-detail .price-box .price-label[data-v-9ac5b6f8]{width:92px;border-bottom:5px solid #ffd274;height:18px;color:#207fe9;font-weight:600;text-align:center;position:relative}.activity-detail .price-box .price-label[data-v-9ac5b6f8]:after{display:inline-block;content:\"\\6D3B\\52A8\\6536\\8D39\\91D1\\989D\";position:absolute;width:92px;text-align:center;left:0}.activity-detail .price-box .price[data-v-9ac5b6f8]{color:#ff1e23}.activity-detail .price-box .price span[data-v-9ac5b6f8]{font-size:18px;color:#ff1e23}.product-detail-box[data-v-9ac5b6f8]{padding-bottom:60px;background:#c9e3fe;color:#333}.product-detail-box ul[data-v-9ac5b6f8]{margin:0 20px;padding-top:15px}.product-detail-box ul li[data-v-9ac5b6f8]{background:#fff;border-radius:10px;padding:10px;margin-bottom:15px;position:relative;box-shadow:2px 5px 5px #a6cefa}.product-detail-box ul li.link[data-v-9ac5b6f8]{padding-bottom:30px}.product-detail-box ul li.link[data-v-9ac5b6f8]:after,.product-detail-box ul li.link[data-v-9ac5b6f8]:before{position:absolute;bottom:-25px;display:inline-block;content:\"\";background:url(" + escape(__webpack_require__(2159)) + ") no-repeat;background-size:100% 100%;width:12px;height:36px;vertical-align:-2px;margin:0 5px;z-index:10}.product-detail-box ul li.link[data-v-9ac5b6f8]:before{left:10px}.product-detail-box ul li.link[data-v-9ac5b6f8]:after{right:10px}.product-detail-box ul li .content[data-v-9ac5b6f8]{background:#f1f8fe;padding:15px}.product-detail-box ul li .video[data-v-9ac5b6f8]{padding:0}.product-detail-box ul li .video video[data-v-9ac5b6f8]{display:inline-block;text-align:center;max-width:100%}.tit[data-v-9ac5b6f8]{color:#207fe9;text-align:center;font-weight:600;padding:8px 0 15px}.tit[data-v-9ac5b6f8]:after,.tit[data-v-9ac5b6f8]:before{display:inline-block;content:\"\";background:url(" + escape(__webpack_require__(2161)) + ") no-repeat;background-size:100% 100%;width:20px;height:15px;vertical-align:-2px;margin:0 5px}.pictures img[data-v-9ac5b6f8]{margin-bottom:10px;display:block;width:100%}.pos-fixed[data-v-9ac5b6f8]{position:fixed;bottom:0;width:100%;text-align:center;z-index:100}.pos-fixed a[data-v-9ac5b6f8]{color:#fff;display:block;width:100%;height:50px;line-height:50px}.pos-fixed .state-0[data-v-9ac5b6f8],.pos-fixed .state-null[data-v-9ac5b6f8]{background:#207fe9}.pos-fixed td[data-v-9ac5b6f8]{padding:0 1px}.pos-fixed td[data-v-9ac5b6f8]:first-child{padding-left:0}.pos-fixed td[data-v-9ac5b6f8]:last-child{padding-right:0}.page-head .pos-rel[data-v-9ac5b6f8]{width:100%;position:relative;text-align:center}.page-head .pos-rel .pos-abs[data-v-9ac5b6f8]{position:absolute;top:0}.page-head .pos-rel .pos-left[data-v-9ac5b6f8]{left:0}.page-head .pos-rel .pos-right[data-v-9ac5b6f8]{right:0}", ""]);

// exports


/***/ }),

/***/ 1822:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".share-recv .pd{padding-bottom:16px}.share-recv .select{border:0;display:inline-block;height:30px;line-height:24px;max-width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-appearance:menulist-button}.share-recv th{font-size:12px;min-width:55px}.share-recv .opt-list li{display:inline;font-size:12px;border-right:1px solid #e0e0e0;padding:0 8px 0 10px}.share-recv .opt-list li:last-child{border-right:0;padding-right:0}.share-recv .made-tr{border-bottom:1px solid #f5f5f5}.share-recv .made-tr .line{display:flex}.share-recv .made-tr .line div{padding:8px 5px;line-height:1.5;font-size:12px;box-sizing:border-box;display:flex;align-items:center}.share-recv .made-tr .line .custom{width:70px}.share-recv .made-tr .line .phone{width:90px}.share-recv .made-tr .line .rec-time{width:100px}.share-recv .made-tr .line .deal{flex:1}.share-recv .made-tr .made-tr{padding:0 10px 8px;background-color:#f6f6f6}.share-recv .made-tr .made-tr .rec-time{width:80px}.share-recv .made-tr .made-tr .made-tr{padding:0 10px;background-color:#e9e9e9}.share-recv .made-tr .made-tr .made-tr .custom{color:#333;width:55px}.share-recv .made-tr .made-tr .made-tr .custom:after{content:none}.share-recv .made-th{font-size:12px;color:#888}.share-recv .has-next .custom{color:#dbb76b;position:relative}.share-recv .has-next .custom:after{font-family:iconfont;content:\"\\E66E\";position:absolute;right:5px;top:50%;transform:translateY(-50%)}.share-recv .has-next .active .custom:after{content:\"\\E670\"}.share-recv .color1{color:#179b16}.share-recv .color2{color:#ff4500}.share-recv /deep/ .dealed-cus /deep/ .van-switch-cell{width:69px}.share-recv .mytbl{margin:0 16px;width:calc(100% - 32px)}", ""]);

// exports


/***/ }),

/***/ 1902:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1635);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("26d078f0", content, true, {});

/***/ }),

/***/ 1924:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1657);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("4869b293", content, true, {});

/***/ }),

/***/ 1926:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1659);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("62b9154b", content, true, {});

/***/ }),

/***/ 1934:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1667);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("7697b520", content, true, {});

/***/ }),

/***/ 1961:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1694);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("2bdcceca", content, true, {});

/***/ }),

/***/ 1968:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1701);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("6be529cf", content, true, {});

/***/ }),

/***/ 2002:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1735);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("61b57efc", content, true, {});

/***/ }),

/***/ 2012:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1745);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("48c8fed2", content, true, {});

/***/ }),

/***/ 2027:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1760);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("50bc87d1", content, true, {});

/***/ }),

/***/ 2053:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1786);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("caab56a8", content, true, {});

/***/ }),

/***/ 2089:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1822);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("38c2ab90", content, true, {});

/***/ }),

/***/ 2158:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAB0CAYAAAACTPtRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyODNFMTZENTFGQTkxMUVBODBFMUIxQzZGQ0JEQTU0QSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyODNFMTZENjFGQTkxMUVBODBFMUIxQzZGQ0JEQTU0QSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI4M0UxNkQzMUZBOTExRUE4MEUxQjFDNkZDQkRBNTRBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI4M0UxNkQ0MUZBOTExRUE4MEUxQjFDNkZDQkRBNTRBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vG3x/QAABXFJREFUeNrMmwuIVVUUhtcZZ/JRlL2moiKzsodFhWUWPSCiqIgghEqbdEqzDNOGKPOBN0orM3pIpeWjxsCCEESNkBAUUSvKgbSitJKIUjMnx2p0Rm//4uwL1ztnrXvOufvRgn+Yuf85h49995y991p7R8VikTgGFnZRgLgSaoVOh36BRkJt9RQuzoQ2QCWGi6DP+fO6gFAflAGVogGaGQrqAuhqwWsMBfUuFEleCKiLoasE7zdoWQioVsV7jH/4hhoCXS54/Er4KATUYsV7pPSLT6hh0CWC9zO0KgSU1krjyv/wBXW9eTclxTZodQiohYr3YOUHPqBuhs4VvG+hdSGg5iveA0kfuoa6AxogeF9Dm0JAvaF4zZLhEmq4mTMlxWboyxBQryve/dqNrqBGQKcJ3mfQlhBQrwifF6u1kiuoMTx7FLyN0PchoF5QWum+NA+wDTUeOlHw1kI/hYCaWUtfcgH1ONRf8D41M0vvUAXh88NQU5YH2YKaAh0reB9DO0NBSa3UnPVhNqCehY4WvOXQH76h+P4WwTskzZdcQ82C+gker+HafUNxxmSi4HWb4YZ8Q82B+gjeUmi/b6ijoIcFrwt6qNaOmideg3oL3ntQp2+oPklrNRMHoQlk4V86z2KgQfDeqbWV8kD1U0b7A9AkG8NDVqi3qWfytBRvmleBVygecO8RPP7KnrA13cgCtQDqpSwUDvuGOgG6S/D+gabZnL6mhVqktNJsm62UFqrRJCqSgoeSZ2wvh9JALVaue87FSrYaFC+9bxW8v6AXQ0AtIblcUXCVGdGgzoJuFLy90KshoFqVVnqaHIYEdQ50neDxQmB+CCitLz1JjiMJisumw4Trd5JeOXAGtVBppYnkIZKmIUOU65ealmo3rbYD+oHidOEX0DeuoLQKPLdgXyN+sV4mTIk7oN3QrxTXXrZSnA3+Ks3MNBo448jcQzEeXCOH3w6vnP+G/jQt/VJkympFpU/tddxlepkJ4wDoBmglYGZU6+gtZdBOIur5VUxRoaJ43XYtxTW47aZTd7mAiY5c3OqdOoq3e9xS0df42ksp3p8yGDoPOgM6GTrOPDjKA4pn7yv9/WOhkeoz3Nxt/oPEmkoxHp6uMPDnm0H9VKh/JOewqDIFUG+5r2w3X/mHFdbdFO9tSYq2KH7/Wcm6ZM09SDHSZioobXDO8xTB21Q+CnB/8gU1W+6CyWUR11C83+AkwVtv+p93qOeVVmqymQpKG5yBOV7w1phxzztUIU8ruYR6yrzlk+ITijdveYeSEh48LRptMxWUNngacozgrYR2+YaqU1Y7hyhl8cg2FCc8pLLIMjPb9ApVR3IilltpTJYH2Yo5ZkGRFDxD2OcbiqdA4wWvm+SSiVMozsD0VlIA+31DcVlkrOB1KS3oFGpu5cS/IgXQ6RuKW2mU4B3Im3uoFYrLIg2Kd9A3FA8l9wpeJ8kFb6dQC5TV0FyqoXiUF4r3tAwXvH+hybUODXlCK4u8TDWWRfJA8ULgTsHjFM90G4No1tDKIrNsjexZgheVtwleRyioJco91qpZWaB4d+tNgtduOrh3KK0sEqQyejbF+cmk2EP6xmVnUFpZZDJZjjRQg6BrBG+3GW68Q2l9qYUcRDUo7dzU79D7IaC0c1MTyFFoUKnOTfmG0up6j5LDkKCqnZtaEQJqkXLPOHIcSVB8bupC4XpOnK4OAZXp3JQPKO3c1HcU7773DjVPubaZPEU51O1mNpAU4rkp11Bv/R9aqRxKOzfVRkqNzyWUdm6qiTwHQ/EGQOncFJ/K3xICStrhyuWKURQgGEo6g7DRvJuCQE2lniV+zpiMoEDBULyvZCjFJ107TOvwhq4doaD+E2AABPz5YK+2FNwAAAAASUVORK5CYII="

/***/ }),

/***/ 2159:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAABOCAYAAAA6oNYSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBNTQ0QzA1NTFGQjIxMUVBQURDNzhGMTJCRDc5ODkyMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBNTQ0QzA1NjFGQjIxMUVBQURDNzhGMTJCRDc5ODkyMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkE1NDRDMDUzMUZCMjExRUFBREM3OEYxMkJENzk4OTIyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkE1NDRDMDU0MUZCMjExRUFBREM3OEYxMkJENzk4OTIyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/1NyrQAAAr9JREFUeNrsWc9r1EAY/ZLugmwVFFqh2m7Fo/Zsiwel9S54ULcintyrIir6H6iHIu1VT0J/aBXBu61etHqu11rjqqALCtYVSd34vTgpNZ1vNtkmPcg8eLQkX95LZr7MLC/O+YcNMqDMPMMcZh5gdjN9Zo35jvmMeZ/5VhJwBAMI32SeYnaQGU1lcp3pxU+6mguOMxeZownEIw3UvlF/jQYXmY+ZOyg9tjMnmZckg9PM28JTJYXDHFNa/xhgzO+qgs3CUVrQpII6eEM94gYUnFU62jlHh0oLtLdYC4998HvpdWOInv8YodWgIA3XLcwJuqif/1nSDc3Ojq90oWuM+oqe9lbf+2WaqF+mb793Sd21H6IVnTju3CQO4BxqUCt0V8VVL9EGHOmcN4qvN0GtgGEYDOjODJZeJp5VQ+0ADLq0r3JxObGBobZb7HlhXFPXwqBO+eGLq9aQvLAIg7kcDeZdtdQ2cxAPl3EYoAUe5GAAzeWoi64xVzIUX1Gaa0sEXtkqM8hAPFBaXnw/mFGbRXOT4leVlnZHG2eeYH5vc1jOqg1H3pPv9J57Iq1PLXCQOZVk04eJl1ZdusalnOEEQaxxXp1cP2Hp9uLB2a1/AmtgDayBNbAG1sAaWANrsEUGheqjn7Efse2LxbX+4zmo1u6VUw+PcI2rKYxSx7SwqWMqk7XUMTIQU8c2EaWOoQFSx0oOHYrcu19MHTN6BeTUMSPIqWNGkFPHjCCnjkImrcWvYJtxIrSpo+fvS2yAsFyAnDoiXU8KQ62cOiK6R7reCjW/L6wVIKeOmANE9yYTnBuvX5HmK0wdo69Q09Lb/PcDxVMaKr2gnuLH8Ngnfw8tNA7znR8zNQNitdHIoKzmIqv1CPEaEjDPpo7xYWmdOjKi1HEm4dM0Va02dXRSfCyFwG51/LNqCny8QUa9JAn8EWAAxn3XKZE5CX0AAAAASUVORK5CYII="

/***/ }),

/***/ 2160:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/myactdetailbg.457c508.jpg";

/***/ }),

/***/ 2161:
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QN6aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YjQyODg1MjEtZDFhZi1mOTQzLTljYjYtNzE4NmEzNGFkOThmIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRCMTlBNkQxMUZCMDExRUE5NjJGQTIwNDYzOEQwRjdGIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRCMTlBNkQwMUZCMDExRUE5NjJGQTIwNDYzOEQwRjdGIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkN2JhYTJiOC1mZWM5LTUyNDgtOWY2Zi0xZTc3YzU1NWY3MWQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6YjQyODg1MjEtZDFhZi1mOTQzLTljYjYtNzE4NmEzNGFkOThmIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAIAArAwERAAIRAQMRAf/EAH0AAQEBAQAAAAAAAAAAAAAAAAUEBggBAQEBAQEAAAAAAAAAAAAAAAQFAwIGEAACAQIDBgcBAQAAAAAAAAABAgMABBExBUFx0RITFCFhobHhMiSCoxEAAgECBAUDBQEAAAAAAAAAAQIAEQNREgQF8DFBoSLBoiOB0TJCExT/2gAMAwEAAhEDEQA/AOpLybo2ssu1VJG/Z61jqLmS2WwE7trmYCTaMjrp6FySXJbxOOAyHtRttUiyK9ZpqSM5pKbybo2ssu1VJG/Z60nUXMlstgJnbXMwEm0ZHXT0LkkuS3iccBkPajbapFkV6zTUkZzSU3k3RtZZdqqSN+z1pOouZLZbATO2uZgJm+lP0sedubt+rhicuph7eNeayPlrU/hX3faUswry/anaLa9Ie2jgX7TuAB5D5wqvurnIEHNjCaUeROERijEcaRrkgCjcBhVJECqAOkMxqaw7XpD20cC/adwAPIfOFTd1c5Ag5sYnSjyJwiMUYjjSNckAUbgMKpIgVQB0hmNTWHa9Ie2jgX7TuAB5D5wqburnIEHNjE6UeROEq7CH/HofzS/8q+3L9Jl/U96yOf8ARrkUea268zb8+FCu/Jq1Xogrx2my+NonGK1WhIVP+jXIo81t15m358Kk3fk1ar0QV47Ra+NonGK1WhIVP+jXIo81t15m358Kk3fk1ar0QV47Ra+NonGK1WhIZpCO9xd3TqVLvyqCMCBnwqVt6lne4RzPHpFaggKqiJ1VhYZpCO9xd3TqVLvyqCMCBnwqVt6lne4RzPHpFaggKqiJ1VhYZpCO9xd3TqVLvyqCMCBnwqVt6lne4RzPHpFaggKqiJ1VhZ//2Q=="

/***/ }),

/***/ 2162:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/help.9b73fb2.png";

/***/ }),

/***/ 2206:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2027)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1312),
  /* template */
  __webpack_require__(2421),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7b2f1638",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2215:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1902)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1378),
  /* template */
  __webpack_require__(2298),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2d61e58c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2298:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "check-joiner"
  }, [_c('div', {
    staticClass: "joiner-content"
  }, [_c('div', {
    staticClass: "joiner-list section-part"
  }, [_c('div', {
    staticClass: "question"
  }, [_vm._v(_vm._s(_vm.subjectProp.subject.orderNo) + "." + _vm._s(_vm.subjectProp.subject.subjectTitle) + "("), (_vm.subjectProp.subject.subjectType == 0) ? [_vm._v("单选")] : [_vm._v("多选")], _vm._v(")")], 2), _vm._v(" "), _c('div', {
    staticClass: "answers-list"
  }, [_c('div', {
    staticClass: "answers"
  }, [_c('div', {
    staticClass: "answers-detail"
  }, [_vm._v(_vm._s(_vm.subjectProp.options.optionCnt))])]), _vm._v(" "), _c('div', {
    staticClass: "joiner row"
  }, [_c('div', {
    staticClass: "joiner-number"
  }, [_vm._v("共" + _vm._s(_vm.subjectProp.options.checkedCnt) + "人")])])])]), _vm._v(" "), _c('div', {
    staticClass: "joiner-list section-part"
  }, [_c('ul', {
    staticClass: "joiner-detail-infor"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.eventEnrollList), function(l, idx) {
    return (_vm.eventEnrollList.length) ? [_c('li', {
      key: idx,
      staticClass: "row"
    }, [_c('div', {
      staticClass: "user-head"
    }, [_c('img', {
      attrs: {
        "src": l.wxHeadUrl
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(l.name))]), _vm._v(" "), _c('div', {
      staticClass: "sex"
    }, [(l.sex == 0) ? [_vm._v("女")] : [_vm._v("男")]], 2), _vm._v(" "), _c('div', {
      staticClass: "phone"
    }, [_vm._v(_vm._s(l.phoneNo))]), _vm._v(" "), _c('div', {
      staticClass: "time"
    }, [_vm._v(_vm._s(l.createTime))])])] : _vm._e()
  }), _vm._v(" "), (!_vm.eventEnrollList.length) ? [_vm._m(1)] : _vm._e()], 2)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "row list-title"
  }, [_c('div', {
    staticClass: "user-head"
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("姓名")]), _vm._v(" "), _c('div', {
    staticClass: "sex"
  }, [_vm._v("性别")]), _vm._v(" "), _c('div', {
    staticClass: "phone"
  }, [_vm._v("手机号")]), _vm._v(" "), _c('div', {
    staticClass: "time"
  }, [_vm._v("参与时间")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "center mt-10"
  }, [_c('div', [_vm._v("暂无人报名")])])
}]}

/***/ }),

/***/ 2320:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fit-entry-ticket"
  }, [_c('page-head', {
    attrs: {
      "title": "散客入场券"
    }
  }), _vm._v(" "), (_vm.productList && _vm.productList.length) ? _c('section', {
    staticClass: "allpadding"
  }, [_c('p', [_c('qd-switch', {
    attrs: {
      "title": "仅显示有效入场券"
    },
    model: {
      value: (_vm.showValid),
      callback: function($$v) {
        _vm.showValid = $$v
      },
      expression: "showValid"
    }
  })], 1), _vm._v(" "), _c('ul', {
    staticClass: "clist"
  }, [_vm._l((_vm.productList), function(p) {
    return [(!_vm.showValid || (_vm.showValid && p.usable)) ? _c('li', {
      key: p.productId,
      staticClass: "item"
    }, [_c('div', {
      staticClass: "-hd"
    }, [_c('div', {
      staticClass: "-cname"
    }, [_c('i', {
      staticClass: "iconfont iconruchangquan-black"
    }), _vm._v("\n              " + _vm._s(p.productTitle) + "\n            ")])]), _vm._v(" "), _c('div', {
      staticClass: "-bd"
    }, [_c('table', [_c('tr', [_c('th', [_vm._v("活动时间")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.beginTime) + " ~ "), _c('br'), _vm._v(" " + _vm._s(p.endTime))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("商品售价")]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(p.price))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("有效期")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.usableDays ? p.usableDays + " 天" : '无限制'))])]), _vm._v(" "), (_vm.g.data.user.isShopOwner) ? _c('tr', [_c('th', [_vm._v("购买数")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.orderCnt))])]) : _vm._e(), _vm._v(" "), (_vm.isInWxPage) ? _c('tr', [_c('th', [_vm._v("专属分享页")]), _vm._v(" "), _c('td', [_c('a', {
      attrs: {
        "href": p.url
      }
    }, [_vm._v("点击进入入场券商品页，然后分享 →")])])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', {
      attrs: {
        "valign": "top"
      }
    }, [_vm._v("专属二维码")]), _vm._v(" "), _c('td', [_c('div', {
      staticClass: "qrcode"
    }, [_c('img', {
      attrs: {
        "src": p.qrcodeUrl,
        "width": "120"
      }
    })])])])])])]) : _vm._e()]
  })], 2)]) : _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n    暂未发布入场券商品\n  ")]), _vm._v(" "), (_vm.count > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('pagination', {
    attrs: {
      "total": _vm.count,
      "defaultPageSize": 30,
      "page-change": _vm.queryTicketList
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "menu": "market/fit-entry-ticket"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2322:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style- vant"
  }, [_c('page-head', {
    attrs: {
      "title": _vm.pageTitle
    }
  }, [_c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/share-item-receiver')
      }
    }
  }, [(_vm.sharerType === 1) ? [_vm._v("我的分享统计")] : [_vm._v("我的分销统计")]], 2)]), _vm._v(" "), (_vm.shareItemList && _vm.shareItemList.length > 0) ? _vm._l((_vm.shareItemList), function(s) {
    return _c('section', {
      staticClass: "item"
    }, [_c('table', [(s.itemImg) ? _c('tr', {
      on: {
        "click": function($event) {
          return _vm.$router.push('/share-item-page/' + s.itemId)
        }
      }
    }, [_c('td', {
      attrs: {
        "colspan": "2"
      }
    }, [_c('div', {
      staticClass: "item-img"
    }, [_c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(s.itemImg)
      }
    })])])]) : _vm._e(), _vm._v(" "), _c('tr', {
      staticClass: "theme-border-bottom"
    }, [_c('td', [_c('div', {
      staticClass: "item-name"
    }, [_vm._v(_vm._s(s.itemName))]), _vm._v(" "), _c('div', {
      staticClass: "gray small"
    }, [_vm._v("有效期：" + _vm._s(_vm.g.Util.formatDate(s.beginDate, false)) + " ~ " + _vm._s(_vm.g.Util.formatDate(s.endDate, false)) + "\n\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('td', {
      attrs: {
        "align": "right",
        "width": "95"
      }
    }, [_c('a', {
      staticClass: "to-share",
      on: {
        "click": function($event) {
          return _vm.$router.push('/share-item-page/' + s.itemId)
        }
      }
    }, [_vm._v("分享页面 →")])])]), _vm._v(" "), _c('tr', {
      staticClass: "note",
      on: {
        "click": function($event) {
          return _vm.viewShareItemDetail(s.itemId)
        }
      }
    }, [_c('td', {
      attrs: {
        "colspan": "2",
        "align": "center"
      }
    }, [_c('i', {
      staticClass: "iconfont icongift bigger"
    }), _vm._v(" "), _c('span', {
      staticClass: "theme-font-color2"
    }, [(_vm.sharerType === 1) ? [_vm._v("分享有奖励哦，猛戳这里查看")] : [_vm._v("猛戳这里查看奖励说明")], _vm._v(" "), _c('i', {
      staticClass: "iconfont iconarrow-down-2 small"
    })], 2)])])])])
  }) : _vm._e(), _vm._v(" "), (_vm.shareItemList && !_vm.shareItemList.length) ? _c('section', {
    staticClass: "none allpadding"
  }, [_vm._v("\n\t\t\t暂无分享项目\n\t\t")]) : _vm._e(), _vm._v(" "), _c('van-popup', {
    style: ({
      height: '100%',
      width: '100%'
    }),
    attrs: {
      "position": "right"
    },
    model: {
      value: (_vm.itemNoteDlgView),
      callback: function($$v) {
        _vm.itemNoteDlgView = $$v
      },
      expression: "itemNoteDlgView"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move",
    on: {
      "click": function($event) {
        _vm.itemNoteDlgView = false
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })]), _vm._v("\n\t\t\t\t分享详细\n\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "item-notes"
  }, [(_vm.shareItem.itemDesc) ? _c('div', {
    staticClass: "box section-part"
  }, [_c('div', {
    staticClass: "tit theme-border-bottom"
  }, [_c('i', {
    staticClass: "iconfont iconrecord theme-font-color2",
    staticStyle: {
      "font-size": "22px"
    }
  }), _vm._v(" 分享项目说明\n\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "aritle"
  }, [_c('pre', [_vm._v(_vm._s(_vm.shareItem.itemDesc))])])]) : _vm._e(), _vm._v(" "), (_vm.sharerType === 1) ? _c('div', {
    staticClass: "box section-part"
  }, [_c('div', {
    staticClass: "tit theme-border-bottom"
  }, [_c('i', {
    staticClass: "iconfont iconchoujiang theme-font-color2",
    staticStyle: {
      "font-size": "22px"
    }
  }), _vm._v(" 对您的奖励\n\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "aritle"
  }, [_c('pre', [_vm._v(_vm._s(_vm.shareItem.sharerNote))])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "box section-part"
  }, [_c('div', {
    staticClass: "tit theme-border-bottom"
  }, [_c('i', {
    staticClass: "iconfont iconyouhui2 theme-font-color2",
    staticStyle: {
      "font-size": "20px"
    }
  }), _vm._v("\n\t\t\t\t\t\t对新客户的奖励\n\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "aritle"
  }, [_c('pre', [_vm._v(_vm._s(_vm.shareItem.receiverNote))])])]), _vm._v(" "), (_vm.hasSetted) ? _c('div', {
    staticClass: "box section-part"
  }, [_c('div', {
    staticClass: "tit theme-border-bottom"
  }, [_c('i', {
    staticClass: "iconfont icondistribution-icon theme-font-color2",
    staticStyle: {
      "font-size": "18px"
    }
  }), _vm._v("\n\t\t\t\t\t\t会员分销奖励\n\t\t\t\t\t")]), _vm._v(" "), _vm._l((_vm.settings), function(item, idx) {
    return [(item.str) ? _c('p', {
      key: idx
    }, [_c('span', {
      staticClass: "sub"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('span', {
      staticClass: "desc"
    }, [_vm._v(_vm._s(item.str))])]) : _vm._e()]
  })], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "box section-part"
  }, [_c('div', {
    staticClass: "tit theme-border-bottom"
  }, [_c('i', {
    staticClass: "iconfont iconerweima",
    staticStyle: {
      "font-size": "18px"
    }
  }), _vm._v("\n\t\t\t\t\t\t分享二维码\n\t\t\t\t\t")]), _vm._v(" "), (_vm.itemShareQrcodeUrl) ? _c('p', {
    attrs: {
      "align": "center"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.itemShareQrcodeUrl,
      "width": "250"
    }
  })]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding": "10px 0 20px 0"
    }
  }, [_c('div', {
    staticClass: "btn largest-btn theme-btn-bg",
    on: {
      "click": function($event) {
        return _vm.$router.push('/share-item-page/' + _vm.shareItem.itemId)
      }
    }
  }, [_vm._v("立刻去分享")])])]), _vm._v(" "), _c('bottom-nav')], 2)
},staticRenderFns: []}

/***/ }),

/***/ 2330:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bargain athome"
  }, [_c('page-head', {
    attrs: {
      "show-back": true,
      "title": "活动列表"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bargain-list"
  }, [(_vm.eventList.length > 0) ? [_c('ul', [_vm._l((_vm.eventList), function(l, idx) {
    return [_c('li', {
      key: idx,
      staticClass: "section-part",
      on: {
        "click": function($event) {
          return _vm.toEventDetail(l.eventId)
        }
      }
    }, [_c('div', {
      staticClass: "pro-img"
    }, [_c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(l.eventPic)
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "pro-intro"
    }, [_c('div', {
      staticClass: "pro-name"
    }, [_vm._v(_vm._s(l.eventTitle))]), _vm._v(" "), _c('div', {
      staticClass: "row align-center price-box"
    }, [_c('div', {
      staticClass: "pro-intro-left"
    }, [_c('div', {
      staticClass: "left-time"
    }, [_c('label', [_vm._v("剩余时间：")]), _c('span', [_vm._v(_vm._s(_vm.time(l.pre_at, idx)))])])]), _vm._v(" "), (l.eventPrice) ? _c('div', {
      staticClass: "pro-intro-right"
    }, [_vm._v("活动费用：￥"), _c('span', [_vm._v(_vm._s(l.eventPrice))])]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "row start register-num"
    }, [_c('div', {
      staticClass: "font-color-9 number-label"
    }, [_vm._v("报名人数：")]), _vm._v(" "), _c('div', {}, [_vm._v("当前"), (l.curEnrollCnt) ? [_vm._v(_vm._s(l.curEnrollCnt))] : [_vm._v("0")], _vm._v("人")], 2), _vm._v(" "), _c('div', {
      staticClass: "font-color-9"
    }, [_vm._v("/")]), _vm._v(" "), _c('div', {}, [_vm._v("剩余"), (l.curEnrollCnt) ? [_vm._v(_vm._s(l.maxEnrollCnt - l.curEnrollCnt))] : [_vm._v(_vm._s(l.maxEnrollCnt - 0))], _vm._v("人")], 2), _vm._v(" "), _c('div', {
      staticClass: "font-color-9"
    }, [_vm._v("/")]), _vm._v(" "), _c('div', {}, [_vm._v("最多" + _vm._s(l.maxEnrollCnt) + "人")])]), _vm._v(" "), _c('div', {
      staticClass: "bargain-time"
    }, [_c('div', [_vm._v("活动有效期：" + _vm._s(l.beginDate) + "~" + _vm._s(l.endDate))])])])])]
  })], 2)] : [_vm._m(0)]], 2), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "menu": "activity"
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "none"
  }, [_c('i', {
    staticClass: "iconfont icon-none"
  }), _vm._v("暂无发布的活动\n      ")])
}]}

/***/ }),

/***/ 2356:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card-edit -style- vant"
  }, [_c('section', {
    staticClass: "tblform full-sec",
    staticStyle: {
      "margin-top": "0"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_vm._m(0), _vm._v("\n      编辑海报模板\n      "), _c('div', {
    staticClass: "move-right theme-font-color",
    on: {
      "click": function($event) {
        _vm.dlgView.help = true
      }
    }
  }, [_vm._v("帮助")])])]), _vm._v(" "), _c('section', {
    staticClass: "tblform"
  }, [_c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("Logo")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail staff-head row end",
    staticStyle: {
      "padding": "0",
      "width": "100px"
    }
  }, [(!_vm.logoImgUrl) ? _c('span', {
    on: {
      "click": _vm.selectLogoPicture
    }
  }, [_c('span', {
    staticClass: "gray"
  }, [_vm._v("请选择 logo")]), _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-r font-color-c",
    staticStyle: {
      "font-size": "14px"
    }
  })]) : _c('img', {
    staticClass: "logo-img",
    attrs: {
      "src": _vm.logoImgUrl,
      "alt": "logo"
    },
    on: {
      "click": _vm.selectLogoPicture
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("场馆名称")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail card-class"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.poster.shopName),
      expression: "poster.shopName"
    }],
    attrs: {
      "placeholder": "请输入场馆名称",
      "type": "text"
    },
    domProps: {
      "value": (_vm.poster.shopName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.poster, "shopName", $event.target.value)
      }
    }
  })])])]), _vm._v(" "), _c('section', {
    staticClass: "tblform"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "row theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("大标题")]), _vm._v(" "), _c('div', {
    staticClass: "member-remark"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.poster.title),
      expression: "poster.title"
    }],
    staticStyle: {
      "padding": "8px"
    },
    attrs: {
      "placeholder": "请输入大标题",
      "rows": "3"
    },
    domProps: {
      "value": (_vm.poster.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.poster, "title", $event.target.value)
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("小标题")]), _vm._v(" "), _c('div', {
    staticClass: "member-remark"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.poster.subTitle),
      expression: "poster.subTitle"
    }],
    staticStyle: {
      "padding": "8px"
    },
    attrs: {
      "placeholder": "请输入小标题",
      "rows": "3"
    },
    domProps: {
      "value": (_vm.poster.subTitle)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.poster, "subTitle", $event.target.value)
      }
    }
  })])])]), _vm._v(" "), _c('section', {
    staticClass: "tblform section-part"
  }, [_c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("联系电话")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail card-class"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.poster.tel),
      expression: "poster.tel"
    }],
    attrs: {
      "placeholder": "请输入场馆联系电话",
      "type": "text"
    },
    domProps: {
      "value": (_vm.poster.tel)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.poster, "tel", $event.target.value)
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("场馆地址")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail card-class"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.poster.addr),
      expression: "poster.addr"
    }],
    attrs: {
      "placeholder": "请输入场馆地址",
      "type": "text"
    },
    domProps: {
      "value": (_vm.poster.addr)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.poster, "addr", $event.target.value)
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("二维码")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail staff-head row end",
    staticStyle: {
      "padding": "0"
    }
  }, [(!_vm.qrcodeImgUrl) ? _c('span', {
    on: {
      "click": _vm.selectQrcodePicture
    }
  }, [_c('span', {
    staticClass: "gray"
  }, [_vm._v("选择二维码，默认微官网二维码")]), _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-r font-color-c",
    staticStyle: {
      "font-size": "14px"
    }
  })]) : _c('img', {
    staticClass: "qrcode-img",
    attrs: {
      "src": _vm.qrcodeImgUrl,
      "alt": "二维码"
    },
    on: {
      "click": _vm.selectQrcodePicture
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "btn theme-btn-bg largest-btn",
    on: {
      "click": _vm.submitMuduleEdit
    }
  }, [_vm._v("生成海报")]), _vm._v(" "), (_vm.muduleEdit) ? _c('van-dialog', {
    staticClass: "van-has-overlay section-part",
    attrs: {
      "show-confirm-button": true,
      "show-cancel-button": true
    },
    on: {
      "confirm": _vm.submitMuduleEdit
    },
    model: {
      value: (_vm.muduleEdit),
      callback: function($$v) {
        _vm.muduleEdit = $$v
      },
      expression: "muduleEdit"
    }
  }, [_c('div', {
    staticClass: "dlg-head theme-border-bottom",
    staticStyle: {
      "padding-bottom": "0px"
    }
  }, [_vm._v("创建确认")]), _vm._v(" "), _c('div', {
    staticClass: "dlg-cont",
    staticStyle: {
      "text-align": "left",
      "padding": "0 16px 16px 16px"
    }
  }, [(_vm.muduleEdit) ? _c('div', {
    staticClass: "memb-confirm"
  }, [_c('div', {}, [_vm._v("您在对海报模板进行编辑，请核对以下重要信息再提交")]), _vm._v(" "), _c('div', {
    staticClass: "p10"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("logo")]), _vm._v(" "), _c('td', [_c('img', {
    staticClass: "logo-img",
    attrs: {
      "src": _vm.photo.imgUrl
    }
  })])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("场馆名称")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.poster.shopName))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("大标题")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.poster.title))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("小标题")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.poster.subTitle))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("场馆联系电话")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.poster.tel))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("场馆地址")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.poster.addr))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("生成二维码")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.poster.qrUrl))])])])])]) : _vm._e()])]) : _vm._e(), _vm._v(" "), (_vm.dlgView.help) ? _c('div', {
    staticClass: "help-img"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(2162)
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "iconfont iconerror",
    on: {
      "click": function($event) {
        _vm.dlgView.help = false
      }
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.dlgView.successImg && _vm.successImg) ? _c('div', {
    staticClass: "help-img success-img"
  }, [(_vm.successImg) ? _c('img', {
    attrs: {
      "src": _vm.successImg
    },
    on: {
      "click": _vm.seeBigSuccessImg
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "keep-press"
  }, [_vm._v("长按图片保存")]), _vm._v(" "), _c('i', {
    staticClass: "iconfont iconerror",
    on: {
      "click": _vm.closeSuccessImg
    }
  })]) : _vm._e(), _vm._v(" "), _c('input', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (false),
      expression: "false"
    }],
    ref: "logoRefs",
    attrs: {
      "type": "file",
      "accept": "image/jpg, image/png"
    },
    on: {
      "input": _vm.changeImgFun
    }
  }), _vm._v(" "), (_vm.dlgView.cropper) ? _c('van-popup', {
    style: ({
      height: '100%',
      width: '100%'
    }),
    attrs: {
      "position": "right"
    },
    model: {
      value: (_vm.dlgView.cropper),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "cropper", $$v)
      },
      expression: "dlgView.cropper"
    }
  }, [_c('QdCropper', {
    attrs: {
      "option": _vm.option,
      "outOption": _vm.outOption,
      "path": _vm.g.Conf.IMG_UPLOAD_URL,
      "file": _vm.file
    },
    on: {
      "closeFun": _vm.closeFun,
      "onSuccess": _vm.handleSuccess
    }
  })], 1) : _vm._e()], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "move",
    attrs: {
      "onclick": "history.go(-1)"
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("文案")])])
}]}

/***/ }),

/***/ 2363:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "check-joiner"
  }, [_c('page-head', {
    attrs: {
      "show-back": true,
      "title": "活动报名参与人员"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "joiner-content"
  }, [_c('div', {
    staticClass: "joiner-list section-part"
  }, [_c('ul', {
    staticClass: "joiner-detail-infor"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.eventEnrollList), function(l, idx) {
    return (_vm.eventEnrollList.length) ? [_c('li', {
      key: idx,
      staticClass: "row"
    }, [_c('div', {
      staticClass: "user-head"
    }, [(l.wxHeadUrl) ? _c('img', {
      attrs: {
        "src": l.wxHeadUrl
      }
    }) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(l.name))]), _vm._v(" "), _c('div', {
      staticClass: "sex"
    }, [(l.sex == 0) ? [_vm._v("女")] : [_vm._v("男")]], 2), _vm._v(" "), _c('div', {
      staticClass: "phone"
    }, [_vm._v(_vm._s(l.phoneNo))]), _vm._v(" "), _c('div', {
      staticClass: "time"
    }, [_c('div', [_vm._v(_vm._s(l.createTime))])])])] : _vm._e()
  }), _vm._v(" "), (!_vm.eventEnrollList.length) ? [_vm._m(1)] : _vm._e()], 2)])]), _vm._v(" "), (_vm.eventEnrollList.length) ? _c('div', {
    staticClass: "pos-fixed"
  }, [_c('router-link', {
    staticClass: "state-0",
    attrs: {
      "to": {
        path: 'event-check-statistics',
        query: {
          eventId: _vm.query.eventId
        }
      }
    }
  }, [_vm._v("查看答题统计")])], 1) : _vm._e()], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "row list-title"
  }, [_c('div', {
    staticClass: "user-head"
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("姓名")]), _vm._v(" "), _c('div', {
    staticClass: "sex"
  }, [_vm._v("性别")]), _vm._v(" "), _c('div', {
    staticClass: "phone"
  }, [_vm._v("手机号")]), _vm._v(" "), _c('div', {
    staticClass: "time"
  }, [_vm._v("参与时间")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "center mt-10"
  }, [_c('div', [_vm._v("暂无人报名")])])
}]}

/***/ }),

/***/ 2397:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "check-statistics vant vant-dalog-change"
  }, [_c('page-head', {
    attrs: {
      "show-back": true,
      "title": "活动报名答题统计"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "statistics-content"
  }, [_vm._l((_vm.eventSubjectList), function(l, lIdx) {
    return [(l.subjectType != 2) ? _c('div', {
      key: lIdx,
      staticClass: "statistics-list section-part",
      class: {
        'question-multi': l.subjectType == 1
      }
    }, [_c('div', {
      staticClass: "question"
    }, [_vm._v("\n\t\t\t\t\t" + _vm._s(l.orderNo) + "." + _vm._s(l.subjectTitle) + "("), (l.subjectType == 0) ? [_vm._v("单选")] : [_vm._v("多选")], _vm._v(")\n\t\t\t\t")], 2), _vm._v(" "), _vm._l((l.options), function(o, oIdx) {
      return [(o) ? _c('div', {
        key: oIdx,
        staticClass: "answers-list"
      }, [_c('div', {
        staticClass: "answers"
      }, [_c('div', {
        staticClass: "row"
      }, [_c('div', {
        staticClass: "answers-detail"
      }, [_vm._v(_vm._s(o.optionCnt))]), _vm._v(" "), _c('div', {
        staticClass: "answers-percent"
      }, [_vm._v(_vm._s((o.checkedCnt / _vm.curEnrollCnt * 100).toFixed(2)) + "%")])])]), _vm._v(" "), _c('div', {
        staticClass: "answers-percent-bar",
        style: ({
          'width': (o.checkedCnt / _vm.curEnrollCnt * 100).toFixed(2) + '%'
        })
      }), _vm._v(" "), _c('div', {
        staticClass: "joiner row"
      }, [_c('div', {
        staticClass: "joiner-number"
      }, [_vm._v("共" + _vm._s(o.checkedCnt) + "人参与")]), _vm._v(" "), _c('a', {
        staticClass: "check-joiners theme-font-color",
        on: {
          "click": function($event) {
            return _vm.checkEventJoiner(l, o, oIdx)
          }
        }
      }, [_vm._v("查看参与者")])])]) : _vm._e()]
    })], 2) : _vm._e()]
  })], 2), _vm._v(" "), _c('van-popup', {
    style: ({
      height: '100%',
      width: '100%'
    }),
    attrs: {
      "position": "right"
    },
    model: {
      value: (_vm.eventCheckJoiner),
      callback: function($$v) {
        _vm.eventCheckJoiner = $$v
      },
      expression: "eventCheckJoiner"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_vm._v("查看参与者"), _c('div', {
    staticClass: "move-right theme-font-color",
    on: {
      "click": function($event) {
        _vm.eventCheckJoiner = false
      }
    }
  }, [_vm._v("关闭")])]), _vm._v(" "), (_vm.eventCheckJoiner) ? _c('event-check-joiner', {
    attrs: {
      "subjectProp": _vm.subjectProp
    }
  }) : _vm._e()], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2406:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style- vant"
  }, [_c('div', {
    staticClass: "page-head"
  }, [_vm._m(0), _vm._v("\n      海报模板\n      "), _c('div', {
    staticClass: "move-right theme-font-color",
    on: {
      "click": function($event) {
        _vm.dlgView.epxplain = true
      }
    }
  }, [_vm._v("说明")])]), _vm._v(" "), _c('div', {
    staticClass: "section-part",
    staticStyle: {
      "padding-bottom": "1px"
    }
  }, [_c('ul', {
    staticClass: "ul-li-fl search-attribution"
  }, [_c('li', {
    staticClass: "item"
  }, [_c('pull-down-list', {
    attrs: {
      "selectList": _vm.shopTypeArr
    },
    on: {
      "selectOne": _vm.selectShopType
    }
  }, [_c('span', {
    attrs: {
      "slot": "dlgTit"
    },
    slot: "dlgTit"
  }, [_vm._v("场馆类型")]), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "pleaseChose"
    },
    slot: "pleaseChose"
  }, [_vm._v("场馆类型")])])], 1), _vm._v(" "), _c('li', {
    staticClass: "item theme-border-left"
  }, [_c('pull-down-list', {
    attrs: {
      "selectList": _vm.themeTypeArr
    },
    on: {
      "selectOne": _vm.selectFestivalType
    }
  }, [_c('span', {
    attrs: {
      "slot": "dlgTit"
    },
    slot: "dlgTit"
  }, [_vm._v("海报主题")]), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "pleaseChose"
    },
    slot: "pleaseChose"
  }, [_vm._v("海报主题")])])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "poster-list section-part"
  }, [(_vm.sysPosterList.length > 0) ? _c('ul', {
    staticClass: "ul-li-fl"
  }, [_vm._l((_vm.sysPosterList), function(p, idx) {
    return [_c('li', {
      on: {
        "click": function($event) {
          return _vm.seeMore(p, idx)
        }
      }
    }, [(p.select) ? _c('div', {
      staticClass: "row edit-btn"
    }, [_c('div', {
      on: {
        "click": function($event) {
          return _vm.editPoster(0, p)
        }
      }
    }, [_vm._v("编辑")]), _vm._v(" "), _c('div', {
      on: {
        "click": function($event) {
          return _vm.editPoster(1, p)
        }
      }
    }, [_vm._v("详情")])]) : _vm._e(), _vm._v(" "), (p.fileName) ? [_c('img', {
      attrs: {
        "src": _vm.g.Conf.IMG_LIB_URL + '/sys-posters/' + p.fileName
      }
    })] : _vm._e()], 2)]
  })], 2) : [_c('div', {
    staticClass: "center font-color-c"
  }, [_vm._v("暂无此模板海报")])]], 2), _vm._v(" "), (_vm.editBtnShow) ? _c('div', {
    staticClass: "see-poster-img",
    on: {
      "click": _vm.pageToEdit
    }
  }, [(_vm.editBtnShow) ? _c('div', {
    staticClass: "btn largest-btn"
  }, [_vm._v("编辑")]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "vant"
  }, [(_vm.dlgView.epxplain) ? _c('van-popup', {
    style: ({
      height: '100%',
      width: '100%'
    }),
    attrs: {
      "position": "right"
    },
    model: {
      value: (_vm.dlgView.epxplain),
      callback: function($$v) {
        _vm.$set(_vm.dlgView, "epxplain", $$v)
      },
      expression: "dlgView.epxplain"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move",
    on: {
      "click": function($event) {
        _vm.dlgView.epxplain = false
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })]), _vm._v("\n          海报模板说明\n        ")]), _vm._v(" "), _c('section', {
    staticClass: "poster-explain"
  }, [_vm._v("\n          1、海报模板是用于场馆营销活动和宣传 "), _c('br'), _vm._v("\n          2、配置好海报模板后，可自动生成具体的海报图片，可分享给客户微信或微信朋友圈 "), _c('br'), _vm._v("\n          3、生成的海报中含有系统自动生成的二维码，识别二维码可以进入场馆配置的活动页面 "), _c('br'), _vm._v("\n          4、我们尽力提供丰富多彩的海报模板供场馆选择，让您轻松一键生成美观又富有营销功能的海报\n        ")])]) : _vm._e()], 1), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "menu": "event-poster"
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "move",
    attrs: {
      "onclick": "history.go(-1)"
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })])
}]}

/***/ }),

/***/ 2421:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "qd-cropper"
  }, [_c('div', {
    staticClass: "img"
  }, [_c('img', {
    ref: "cropperRefs",
    attrs: {
      "id": "image",
      "src": _vm.imgUrl
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "btn-s"
  }, [_c('div', {
    staticClass: "item close",
    on: {
      "click": function($event) {
        return _vm.closeFun()
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('div', {
    staticClass: "item over",
    on: {
      "click": function($event) {
        return _vm.overFun()
      }
    }
  }, [_vm._v("确定")])])])
},staticRenderFns: []}

/***/ }),

/***/ 2448:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-head', {
    attrs: {
      "show-back": true,
      "title": "活动详情"
    }
  }), _vm._v(" "), (_vm.event) ? _c('div', {
    staticClass: "activity-detail"
  }, [_c('div', {
    staticClass: "banner"
  }, [_c('img', {
    attrs: {
      "src": _vm.g.Util.getImgUrl(_vm.event.eventPic)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "activity-detail-list",
    class: [{
      'no-price': !_vm.event.eventPrice
    }]
  }, [_c('div', {
    staticClass: "pro-intro"
  }, [_c('div', {
    staticClass: "pro-name"
  }, [_c('div', {
    staticClass: "pro-name-webkit"
  }, [_vm._v(_vm._s(_vm.event.eventTitle))])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "left-time"
  }, [_c('div', [_vm._v("距离结束还剩")]), _vm._v(" "), (_vm.leftDay && _vm.leftHour && _vm.leftMinite && _vm.leftSec) ? _c('div', {
    staticClass: "left-timer"
  }, [_c('span', [_vm._v(_vm._s(_vm.leftDay))]), _vm._v("天"), _c('span', [_vm._v(_vm._s(_vm.leftHour))]), _vm._v(":"), _c('span', [_vm._v(_vm._s(_vm.leftMinite))]), _vm._v(":"), _c('span', [_vm._v(_vm._s(_vm.leftSec))])]) : _vm._e()])]), _vm._v(" "), (_vm.event.eventPrice) ? _c('div', {
    staticClass: "price-box"
  }, [_c('div', {
    staticClass: "row align-items-center"
  }, [_c('div', {
    staticClass: "price-label"
  }), _vm._v(" "), _c('div', {
    staticClass: "price"
  }, [_vm._v("\n\t\t\t\t\t\t￥"), _c('span', [_vm._v(_vm._s(_vm.event.eventPrice))])])])]) : _vm._e()])]) : _vm._e(), _vm._v(" "), (_vm.event) ? _c('div', {
    staticClass: "product-detail-box"
  }, [_c('ul', [_c('li', {
    staticClass: "link"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("活动报名日期范围")]), _vm._v(" "), _c('div', {
    staticClass: "content center"
  }, [_c('div', [_vm._v("开始日期：" + _vm._s(_vm.event.beginDate))]), _vm._v(" "), _c('div', {
    staticClass: "pt10"
  }, [_vm._v("结束日期：" + _vm._s(_vm.event.endDate))])])]), _vm._v(" "), (_vm.event.eventDesc) ? _c('li', {
    staticClass: "link"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("活动详情")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('pre', [_vm._v(_vm._s(_vm.event.eventDesc))])])]) : _vm._e(), _vm._v(" "), (_vm.event.eventVideoUrl != '' && _vm.event.eventVideoUrl != undefined) ? _c('li', {
    staticClass: "link"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("宣传小视频")]), _vm._v(" "), _vm._m(1)]) : _vm._e(), _vm._v(" "), (_vm.eventMorePics) ? _c('li', {}, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("活动图片")]), _vm._v(" "), _c('div', {
    staticClass: "pictures"
  }, [_vm._l((_vm.eventMorePics), function(p, idx) {
    return [_c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(p)
      }
    })]
  })], 2)]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "pos-fixed"
  }, [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [(_vm.confEditable) ? _c('td', {
    attrs: {
      "width": "50%"
    }
  }, [_c('router-link', {
    staticClass: "state-0",
    attrs: {
      "to": {
        path: 'event-enroll-list',
        query: {
          eventId: _vm.query.eventId
        }
      }
    }
  }, [_vm._v("查看报名结果")])], 1) : _vm._e(), _vm._v(" "), _c('td', {
    attrs: {
      "width": "50%"
    }
  }, [_c('a', {
    staticClass: "state-0",
    on: {
      "click": _vm.openQrcodeDlg
    }
  }, [_vm._v("专属二维码与分享")])])])])]), _vm._v(" "), _c('van-dialog', {
    staticClass: "van-has-overlay",
    attrs: {
      "show-cancel-button": true,
      "show-confirm-button": false,
      "cancelButtonText": "关闭",
      "title": "活动专属二维码与分享"
    },
    model: {
      value: (_vm.qrcodeDlg),
      callback: function($$v) {
        _vm.qrcodeDlg = $$v
      },
      expression: "qrcodeDlg"
    }
  }, [_c('div', {
    staticClass: "qrcode-link"
  }, [_c('img', {
    staticClass: "qrcode-img",
    attrs: {
      "src": _vm.qrcodeUrl,
      "width": "150"
    }
  }), _vm._v(" "), (_vm.isInWxPage) ? _c('div', {
    staticClass: "p15"
  }, [_c('a', {
    attrs: {
      "href": _vm.shareUrl
    }
  }, [_vm._v("点击进入活动详情页，然后分享 →")])]) : _vm._e()])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "lignt"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(2158)
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content center video"
  }, [_c('div', {
    attrs: {
      "id": "container"
    }
  })])
}]}

/***/ }),

/***/ 2484:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style- vant share-recv"
  }, [_c('page-head', {
    attrs: {
      "title": '我的' + _vm.shareTypeName + '统计'
    }
  }, [_c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/share-item-list')
      }
    }
  }, [_vm._v(_vm._s(_vm.shareTypeName) + "项目")])]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v(_vm._s(_vm.shareTypeName) + "项目")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [(_vm.shareItemOwnerList && _vm.shareItemOwnerList.length > 1) ? [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.selectSioIdx),
      expression: "selectSioIdx"
    }],
    staticClass: "select",
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
        _vm.selectSioIdx = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }, _vm.changeSio]
    }
  }, _vm._l((_vm.shareItemOwnerList), function(o, idx) {
    return _c('option', {
      domProps: {
        "value": idx
      }
    }, [_vm._v(_vm._s(o.itemName))])
  }), 0)] : _vm._e(), _vm._v(" "), (_vm.shareItemOwnerList && _vm.shareItemOwnerList.length === 1) ? [_vm._v(_vm._s(_vm.selectSio.itemName))] : _vm._e()], 2)]), _vm._v(" "), (_vm.shareItemOwnerList && _vm.shareItemOwnerList.length) ? _c('table', {
    staticClass: "mytbl"
  }, [_vm._m(0), _vm._v(" "), (_vm.selectSio) ? _c('tr', [_c('td', [_vm._v(_vm._s(_vm.selectSio.viewCnt))]), _vm._v(" "), _c('td', {
    staticClass: "color1"
  }, [_vm._v(_vm._s(_vm.selectSio.receiveCnt))]), _vm._v(" "), _c('td', {
    staticClass: "color1"
  }, [_vm._v(_vm._s((_vm.selectSio.receiveRate * 100).toFixed(1)) + "%")]), _vm._v(" "), _c('td', {
    staticClass: "color2"
  }, [_vm._v(_vm._s(_vm.selectSio.convertCnt))]), _vm._v(" "), _c('td', {
    staticClass: "color2"
  }, [_vm._v(_vm._s((_vm.selectSio.convertRate * 100).toFixed(1)) + "%")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.shareItemOwnerList && !_vm.shareItemOwnerList.length) ? _c('div', {
    staticClass: "none allpadding"
  }, [_c('i', {
    staticClass: "icon-none iconfont"
  }), _vm._v("\n        暂无记录\n      ")]) : _vm._e()]), _vm._v(" "), _c('section', {
    staticClass: "pd"
  }, [_c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("引入客户")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('qd-switch', {
    staticClass: "dealed-cus",
    attrs: {
      "title": "成交客户"
    },
    on: {
      "change": _vm.toggleMember
    },
    model: {
      value: (_vm.query.isMember),
      callback: function($$v) {
        _vm.$set(_vm.query, "isMember", $$v)
      },
      expression: "query.isMember"
    }
  })], 1)]), _vm._v(" "), (_vm.shareItemReceiverList && _vm.shareItemReceiverList.length > 0) ? _c('div', {
    staticClass: "mytbl"
  }, [_vm._m(1), _vm._v(" "), (_vm.shareItemReceiverList && _vm.shareItemReceiverList.length > 0) ? [_c('Tree', {
    attrs: {
      "id": "tree",
      "treedata": _vm.shareItemReceiverList
    }
  })] : _vm._e(), _vm._v(" "), _c('pagination', {
    attrs: {
      "total": _vm.sirCount,
      "page-change": _vm.queryShareItemReceiverList
    }
  })], 2) : _vm._e(), _vm._v(" "), (!_vm.shareItemReceiverList || _vm.shareItemReceiverList.length == 0) ? _c('div', {
    staticClass: "none allpadding"
  }, [_vm._v("暂无记录")]) : _vm._e()]), _vm._v(" "), _c('bottom-nav')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("浏览数")]), _vm._v(" "), _c('th', [_vm._v("领取数")]), _vm._v(" "), _c('th', [_vm._v("领取率")]), _vm._v(" "), _c('th', [_vm._v("成交数")]), _vm._v(" "), _c('th', [_vm._v("成交率")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "made-tr"
  }, [_c('div', {
    staticClass: "line"
  }, [_c('div', {
    staticClass: "custom"
  }, [_vm._v("客户")]), _vm._v(" "), _c('div', {
    staticClass: "phone"
  }, [_vm._v("手机号")]), _vm._v(" "), _c('div', {
    staticClass: "rec-time"
  }, [_vm._v("领取时间")]), _vm._v(" "), _c('div', {
    staticClass: "deal"
  }, [_vm._v("成交时间")])])])
}]}

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1147)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1139),
  /* template */
  __webpack_require__(1158),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-20c1dfab",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2002)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1384),
  /* template */
  __webpack_require__(2397),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-69ab75fb",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 830:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2053)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1385),
  /* template */
  __webpack_require__(2448),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-9ac5b6f8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 831:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1968)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1386),
  /* template */
  __webpack_require__(2363),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4fc1e042",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 832:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1934)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1387),
  /* template */
  __webpack_require__(2330),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-40f09911",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1961)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1388),
  /* template */
  __webpack_require__(2356),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4c6f3232",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 834:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2012)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1389),
  /* template */
  __webpack_require__(2406),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6f712b80",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 835:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1924)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1390),
  /* template */
  __webpack_require__(2320),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3d77af23",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1926)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1397),
  /* template */
  __webpack_require__(2322),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3dbc8e3a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 843:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2089)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1398),
  /* template */
  __webpack_require__(2484),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 981:
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 982:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(981);

exports.__esModule = true;
exports.noop = noop;
exports.isDef = isDef;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isPromise = isPromise;
exports.get = get;
exports.isEmpty = isEmpty;
exports.isServer = exports.inBrowser = exports.addUnit = exports.createNamespace = void 0;

var _vue = _interopRequireDefault(__webpack_require__(23));

var _create = __webpack_require__(1030);

exports.createNamespace = _create.createNamespace;

var _unit = __webpack_require__(1035);

exports.addUnit = _unit.addUnit;
var inBrowser = typeof window !== 'undefined';
exports.inBrowser = inBrowser;
var isServer = _vue.default.prototype.$isServer; // eslint-disable-next-line @typescript-eslint/no-empty-function

exports.isServer = isServer;

function noop() {}

function isDef(val) {
  return val !== undefined && val !== null;
}

function isFunction(val) {
  return typeof val === 'function';
}

function isObject(val) {
  return val !== null && typeof val === 'object';
}

function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    var _result$key;

    result = isObject(result) ? (_result$key = result[key]) != null ? _result$key : '' : '';
  });
  return result;
}
/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @function isEmpty
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */


function isEmpty(value) {
  if (value == null) {
    return true;
  }

  if (typeof value !== 'object') {
    return true;
  }

  return Object.keys(value).length === 0;
}

/***/ }),

/***/ 983:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.on = on;
exports.off = off;
exports.stopPropagation = stopPropagation;
exports.preventDefault = preventDefault;
exports.supportsPassive = void 0;

var _ = __webpack_require__(982);

// eslint-disable-next-line import/no-mutable-exports
var supportsPassive = false;
exports.supportsPassive = supportsPassive;

if (!_.isServer) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      // eslint-disable-next-line getter-return
      get: function get() {
        /* istanbul ignore next */
        exports.supportsPassive = supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts); // eslint-disable-next-line no-empty
  } catch (e) {}
}

function on(target, event, handler, passive) {
  if (passive === void 0) {
    passive = false;
  }

  if (!_.isServer) {
    target.addEventListener(event, handler, supportsPassive ? {
      capture: false,
      passive: passive
    } : false);
  }
}

function off(target, event, handler) {
  if (!_.isServer) {
    target.removeEventListener(event, handler);
  }
}

function stopPropagation(event) {
  event.stopPropagation();
}

function preventDefault(event, isStopPropagation) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}

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

/***/ 986:
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 987:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(981);

exports.__esModule = true;
exports.inherit = inherit;
exports.emit = emit;
exports.mount = mount;

var _extends2 = _interopRequireDefault(__webpack_require__(986));

var _vue = _interopRequireDefault(__webpack_require__(23));

var inheritKey = ['ref', 'key', 'style', 'class', 'attrs', 'refInFor', 'nativeOn', 'directives', 'staticClass', 'staticStyle'];
var mapInheritKey = {
  nativeOn: 'on'
}; // inherit partial context, map nativeOn to on

function inherit(context, inheritListeners) {
  var result = inheritKey.reduce(function (obj, key) {
    if (context.data[key]) {
      obj[mapInheritKey[key] || key] = context.data[key];
    }

    return obj;
  }, {});

  if (inheritListeners) {
    result.on = result.on || {};
    (0, _extends2.default)(result.on, context.data.on);
  }

  return result;
} // emit event


function emit(context, eventName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var listeners = context.listeners[eventName];

  if (listeners) {
    if (Array.isArray(listeners)) {
      listeners.forEach(function (listener) {
        listener.apply(void 0, args);
      });
    } else {
      listeners.apply(void 0, args);
    }
  }
} // mount functional component


function mount(Component, data) {
  var instance = new _vue.default({
    el: document.createElement('div'),
    props: Component.props,
    render: function render(h) {
      return h(Component, (0, _extends2.default)({
        props: this.$props
      }, data));
    }
  });
  document.body.appendChild(instance.$el);
  return instance;
}

/***/ }),

/***/ 988:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TouchMixin = void 0;

var _event = __webpack_require__(983);

function getDirection(x, y) {
  if (x > y) {
    return 'horizontal';
  }

  if (y > x) {
    return 'vertical';
  }

  return '';
}

var TouchMixin = {
  data: function data() {
    return {
      direction: ''
    };
  },
  methods: {
    touchStart: function touchStart(event) {
      this.resetTouchStatus();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0]; // safari back will set clientX to negative number

      this.deltaX = touch.clientX < 0 ? 0 : touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY); // lock direction when distance is greater than a certain value

      var LOCK_DIRECTION_DISTANCE = 10;

      if (!this.direction || this.offsetX < LOCK_DIRECTION_DISTANCE && this.offsetY < LOCK_DIRECTION_DISTANCE) {
        this.direction = getDirection(this.offsetX, this.offsetY);
      }
    },
    resetTouchStatus: function resetTouchStatus() {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    },
    // avoid Vue 2.6 event bubble issues by manually binding events
    // https://github.com/vant-ui/vant/issues/3015
    bindTouchEvent: function bindTouchEvent(el) {
      var onTouchStart = this.onTouchStart,
          onTouchMove = this.onTouchMove,
          onTouchEnd = this.onTouchEnd;
      (0, _event.on)(el, 'touchstart', onTouchStart);
      (0, _event.on)(el, 'touchmove', onTouchMove);

      if (onTouchEnd) {
        (0, _event.on)(el, 'touchend', onTouchEnd);
        (0, _event.on)(el, 'touchcancel', onTouchEnd);
      }
    }
  }
};
exports.TouchMixin = TouchMixin;

/***/ }),

/***/ 990:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.BindEventMixin = BindEventMixin;

var _event = __webpack_require__(983);

/**
 * Bind event when mounted or activated
 */
var uid = 0;

function BindEventMixin(handler) {
  var key = "binded_" + uid++;

  function bind() {
    if (!this[key]) {
      handler.call(this, _event.on, true);
      this[key] = true;
    }
  }

  function unbind() {
    if (this[key]) {
      handler.call(this, _event.off, false);
      this[key] = false;
    }
  }

  return {
    mounted: bind,
    activated: bind,
    deactivated: unbind,
    beforeDestroy: unbind
  };
}

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

/***/ }),

/***/ 993:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(981);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(986));

var _vue = _interopRequireDefault(__webpack_require__(23));

var _ImagePreview = _interopRequireDefault(__webpack_require__(1013));

var _utils = __webpack_require__(982);

var instance;
var defaultConfig = {
  loop: true,
  value: true,
  images: [],
  maxZoom: 3,
  minZoom: 1 / 3,
  onClose: null,
  onChange: null,
  className: '',
  showIndex: true,
  closeable: false,
  closeIcon: 'clear',
  asyncClose: false,
  transition: 'van-fade',
  getContainer: 'body',
  overlayStyle: null,
  startPosition: 0,
  swipeDuration: 300,
  showIndicators: false,
  closeOnPopstate: true,
  closeIconPosition: 'top-right'
};

var initInstance = function initInstance() {
  instance = new (_vue.default.extend(_ImagePreview.default))({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
  instance.$on('change', function (index) {
    if (instance.onChange) {
      instance.onChange(index);
    }
  });
  instance.$on('scale', function (data) {
    if (instance.onScale) {
      instance.onScale(data);
    }
  });
};

var ImagePreview = function ImagePreview(images, startPosition) {
  if (startPosition === void 0) {
    startPosition = 0;
  }

  /* istanbul ignore if */
  if (_utils.isServer) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  var options = Array.isArray(images) ? {
    images: images,
    startPosition: startPosition
  } : images;
  (0, _extends2.default)(instance, defaultConfig, options);
  instance.$once('input', function (show) {
    instance.value = show;
  });
  instance.$once('closed', function () {
    instance.images = [];
  });

  if (options.onClose) {
    instance.$off('close');
    instance.$once('close', options.onClose);
  }

  return instance;
};

ImagePreview.Component = _ImagePreview.default;

ImagePreview.install = function () {
  _vue.default.use(_ImagePreview.default);
};

var _default = ImagePreview;
exports.default = _default;

/***/ }),

/***/ 996:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(981);

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(5));

var _utils = __webpack_require__(982);

var _functional = __webpack_require__(987);

var _info = _interopRequireDefault(__webpack_require__(1016));

// Utils
// Components
var _createNamespace = (0, _utils.createNamespace)('icon'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function isImage(name) {
  return name ? name.indexOf('/') !== -1 : false;
} // compatible with legacy usage, should be removed in next major version


var LEGACY_MAP = {
  medel: 'medal',
  'medel-o': 'medal-o',
  'calender-o': 'calendar-o'
};

function correctName(name) {
  return name && LEGACY_MAP[name] || name;
}

function Icon(h, props, slots, ctx) {
  var _props$badge;

  var name = correctName(props.name);
  var imageIcon = isImage(name);

  if (false) {
    console.warn('[Vant] Icon: "info" prop is deprecated, use "badge" prop instead.');
  }

  return h(props.tag, (0, _babelHelperVueJsxMergeProps.default)([{
    "class": [props.classPrefix, imageIcon ? '' : props.classPrefix + "-" + name],
    "style": {
      color: props.color,
      fontSize: (0, _utils.addUnit)(props.size)
    }
  }, (0, _functional.inherit)(ctx, true)]), [slots.default && slots.default(), imageIcon && h("img", {
    "class": bem('image'),
    "attrs": {
      "src": name
    }
  }), h(_info.default, {
    "attrs": {
      "dot": props.dot,
      "info": (_props$badge = props.badge) != null ? _props$badge : props.info
    }
  })]);
}

Icon.props = {
  dot: Boolean,
  name: String,
  size: [Number, String],
  // @deprecated
  // should be removed in next major version
  info: [Number, String],
  badge: [Number, String],
  color: String,
  tag: {
    type: String,
    default: 'i'
  },
  classPrefix: {
    type: String,
    default: bem()
  }
};

var _default = createComponent(Icon);

exports.default = _default;

/***/ }),

/***/ 997:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.bem = exports.createComponent = void 0;

var _utils = __webpack_require__(982);

var _createNamespace = (0, _utils.createNamespace)('image-preview'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

exports.bem = bem;
exports.createComponent = createComponent;

/***/ }),

/***/ 998:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(981);

exports.__esModule = true;
exports.default = void 0;

var _vue = _interopRequireDefault(__webpack_require__(23));

var _deepAssign = __webpack_require__(1031);

var _zhCN = _interopRequireDefault(__webpack_require__(1018));

var proto = _vue.default.prototype;
var defineReactive = _vue.default.util.defineReactive;
defineReactive(proto, '$vantLang', 'zh-CN');
defineReactive(proto, '$vantMessages', {
  'zh-CN': _zhCN.default
});
var _default = {
  messages: function messages() {
    return proto.$vantMessages[proto.$vantLang];
  },
  use: function use(lang, messages) {
    var _this$add;

    proto.$vantLang = lang;
    this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
  },
  add: function add(messages) {
    if (messages === void 0) {
      messages = {};
    }

    (0, _deepAssign.deepAssign)(proto.$vantMessages, messages);
  }
};
exports.default = _default;

/***/ }),

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.context = void 0;
var context = {
  zIndex: 2000,
  lockCount: 0,
  stack: [],
  find: function find(vm) {
    return this.stack.filter(function (item) {
      return item.vm === vm;
    })[0];
  },
  remove: function remove(vm) {
    var item = this.find(vm);
    if (!item) return;
    item.vm = null;
    item.overlay = null;
    var index = this.stack.indexOf(item);
    this.stack.splice(index, 1);
  }
};
exports.context = context;

/***/ })

});