webpackJsonp([25],{

/***/ 1370:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data() {
    return {
      g: $,
      u: $.data.user,
      memberId: $.data.user.memberId,
      vaId: this.$route.query.vaId
    };
  },
  created() {
    if (!this.vaId) {
      $.Dlg.error('参数有误');
      return;
    }
  },

  methods: {
    checkout() {
      if (!confirm('您确定下机签出吗？')) {
        return;
      }
      let args = {
        memberId: this.memberId,
        vaId: this.vaId
      };
      $.Req.service($.SvName.VENUE_AREA_BOOKING_CHECKOUT, args, (ret, systime) => {
        $.Msg.success($.Lang.OPT_SUCCESS);
      }, true);
    }
  }
});

/***/ }),

/***/ 1809:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".user[data-v-cef94aae]{text-align:center;font-size:16px;padding-top:20px}.opt[data-v-cef94aae]{margin:40px 10px}", ""]);

// exports


/***/ }),

/***/ 2076:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1809);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("e52b38a2", content, true, {});

/***/ }),

/***/ 2471:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vant"
  }, [_c('div', {
    staticClass: "user"
  }, [_vm._v("\n\t\t欢迎您，" + _vm._s(_vm.u.uname) + "\n\t")]), _vm._v(" "), (_vm.vaId) ? _c('div', {
    staticClass: "opt"
  }, [_c('div', {
    staticClass: "theme-btn-bg largest-btn",
    on: {
      "click": function($event) {
        return _vm.checkout()
      }
    }
  }, [_vm._v("点击下机签出")])]) : _vm._e(), _vm._v(" "), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
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
    staticClass: "iconfont icon-arrow-r small"
  })])])
}]}

/***/ }),

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2076)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1370),
  /* template */
  __webpack_require__(2471),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-cef94aae",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});