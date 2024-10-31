webpackJsonp([14],{

/***/ 1029:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2114)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1422),
  /* template */
  __webpack_require__(2528),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-ccf7428c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1124:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(11)(
  /* script */
  null,
  /* template */
  __webpack_require__(1135),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1135:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "foot"
  }, [_vm._v("\n\t© 2022   南京强点信息技术有限公司"), _c('span', {
    staticClass: "sptr"
  }, [_vm._v("|")]), _c('Icon', {
    attrs: {
      "type": "md-call",
      "size": "14"
    }
  }), _vm._v(" 025-66045495"), _c('span', {
    staticClass: "sptr"
  }, [_vm._v("|")]), _vm._v("工信部备案号：苏ICP备17021267号\n")], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_footer__ = __webpack_require__(1124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_footer__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { MyFooter: __WEBPACK_IMPORTED_MODULE_0__components_footer___default.a },
	data() {
		return {};
	},

	methods: {
		back() {
			history.go(-1);
		},

		home() {
			this.$router.push('/');
		}
	}
});

/***/ }),

/***/ 1813:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".not-found section[data-v-ccf7428c]{background:#fff;padding:50px 0;border-radius:6px;width:800px;margin:50px auto;text-align:center;box-shadow:4px 4px 8px #ccc}.not-found .tit[data-v-ccf7428c]{font-size:40px;color:orange;height:280px;line-height:280px;width:600px;margin:0 auto}.not-found .subtit[data-v-ccf7428c]{margin-top:60px;font-size:23px;color:#999}.not-found .opt[data-v-ccf7428c]{margin-top:30px}.not-found .opt button[data-v-ccf7428c]{margin:0 10px;height:35px;width:90px}", ""]);

// exports


/***/ }),

/***/ 2114:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1813);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("2e751730", content, true, {});

/***/ }),

/***/ 2528:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "not-found"
  }, [_c('section', [_c('div', {
    staticClass: "tit"
  }, [_vm._v("您访问的页面找不到了 :-(")]), _vm._v(" "), _c('div', {
    staticClass: "opt"
  }, [_c('i-button', {
    attrs: {
      "icon": "ios-arrow-back"
    },
    on: {
      "click": function($event) {
        return _vm.back()
      }
    }
  }, [_vm._v("返回")]), _vm._v(" "), _c('i-button', {
    attrs: {
      "icon": "md-home"
    },
    on: {
      "click": function($event) {
        return _vm.home()
      }
    }
  }, [_vm._v("首页")])], 1)]), _vm._v(" "), _c('div', {
    staticStyle: {
      "border-top": "1px solid #ddd"
    }
  }, [_c('my-footer')], 1)])
},staticRenderFns: []}

/***/ })

});