webpackJsonp([2],{

/***/ 1112:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1117)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1115),
  /* template */
  __webpack_require__(1118),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-30ba68e5",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1113:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1121)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1119),
  /* template */
  __webpack_require__(1122),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6c86f0c9",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1114:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1130)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1126),
  /* template */
  __webpack_require__(1133),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1115:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		title: {
			type: String,
			required: false
		},
		menuList: {
			type: Array,
			default() {
				return [];
			}
		}
	},

	data() {
		return {};
	},

	created() {},

	methods: {}
});

/***/ }),

/***/ 1116:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".-sub-tit[data-v-30ba68e5]{display:inline-block}.-sub-tit .-icon[data-v-30ba68e5]{font-weight:400;padding:0 7px;color:#aaa}.-sub-tit .-name[data-v-30ba68e5]{color:#e20;padding-left:25px}.back[data-v-30ba68e5]{display:inline-block;color:gray}.back[data-v-30ba68e5]:hover{color:red}", ""]);

// exports


/***/ }),

/***/ 1117:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1116);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("0b308ec4", content, true, {});

/***/ }),

/***/ 1118:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-header"
  }, [_c('ul', {
    staticClass: "menus"
  }, [_vm._m(0), _vm._v(" "), (_vm.title) ? _c('li', {
    staticClass: "tit"
  }, [_vm._v(_vm._s(_vm.title) + " "), _c('i', {
    staticClass: "iconfont icon-arrow-r"
  })]) : _vm._e(), _vm._v(" "), _vm._l((_vm.menuList), function(m, index) {
    return _c('li', {
      class: {
        'on': m.active
      }
    }, [_c('a', {
      key: index,
      on: {
        "click": function($event) {
          return _vm.$router.push('/' + m.path)
        }
      }
    }, [_vm._v(_vm._s(m.name))])])
  }), _vm._v(" "), _c('li', [_vm._t("default")], 2)], 2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    staticClass: "back",
    attrs: {
      "href": "javascript: history.go(-1);",
      "title": "返回"
    }
  }, [_c('i', {
    staticClass: "iconfont icon-arrow-l-1"
  })])])
}]}

/***/ }),

/***/ 1119:
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
	props: {
		afterSelect: {
			type: Function,
			default() {
				return {};
			}
		},

		showLatestMember: {
			type: Boolean,
			default: true,
			required: false
		}
	},

	data() {
		return {
			g: window.$,
			memberQueryStr: null,
			memberCandidates: [],
			memberFlag: null,
			queryMemberList: [],
			latestMemberList: [],
			cardNo: null,
			queryType: 1,
			memberName: null
		};
	},

	created() {
		if (this.showLatestMember) {
			this.queryLatestMembers();
		}
	},

	methods: {
		handleSearchMember(value) {
			if (!value) {
				this.memberCandidates = [];
				return;
			}
			let args = { queryStr: value };
			$.Req.service($.SvName.MEMBER_QUERY_FOR_AUTO_COMPLETE, args, ret => {
				this.memberCandidates = ret.memberInfoList;
			});
		},

		quickQuery() {
			if (this.memberFlag) {
				let args = { nameOrPhone: this.memberFlag };
				$.Req.service($.SvName.MEMBER_ADV_QUERY, args, ret => {
					if (ret.memberList && ret.memberList.length) {
						if (ret.memberList && ret.memberList.length === 1) {
							this.selectMember(ret.memberList[0]);
							return;
						}
						this.queryMemberList = ret.memberList;
					} else {
						this.queryMemberList = [];
						$.Msg.info('未查到符合条件的会员');
					}
				});
			} else {
				$.Msg.error('请输入会员姓名或手机号');
			}
		},

		queryMemberByName() {
			if (!this.memberName) {
				$.Msg.error('请输入会员姓名');
				return;
			}

			let args = { fuzzyName: this.memberName };
			$.Req.service($.SvName.MEMBER_ADV_QUERY, args, ret => {
				if (ret.memberList && ret.memberList.length) {
					if (ret.memberList && ret.memberList.length === 1) {
						this.selectMember(ret.memberList[0]);
						return;
					}
					this.queryMemberList = ret.memberList;
				} else {
					this.queryMemberList = [];
					$.Msg.info('未查到符合条件的会员');
				}
			});
		},

		queryMemberByCard() {
			if (this.cardNo) {
				let args = { cardNo: this.cardNo };
				$.Req.service($.SvName.MEMBER_ADV_QUERY, args, ret => {
					if (ret.memberList && ret.memberList.length) {
						if (ret.memberList && ret.memberList.length === 1) {
							this.selectMember(ret.memberList[0]);
							return;
						}
						this.queryMemberList = ret.memberList;
					} else {
						this.queryMemberList = [];
						$.Msg.info('未查到符合条件的会员');
					}
				});
			} else {
				$.Msg.error('请输入会员卡号');
			}
		},

		queryLatestMembers() {
			let args = { page: 1 };
			$.Req.service($.SvName.MEMBER_ADV_QUERY, args, ret => {
				this.latestMemberList = ret.memberList;
			});
		},

		selectMember(m) {
			if (this.afterSelect) {
				this.afterSelect(m);
			}
		},

		selectMemberCandidate(val) {
			if (!val) return;
			let items = val.split('|');
			this.memberFlag = items[0].trim();
			this.quickQuery();
		}
	}
});

/***/ }),

/***/ 1120:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".input[data-v-6c86f0c9]{font-size:14px;font-weight:700;display:block}.member-list[data-v-6c86f0c9]{border:1px solid #dddee1;padding:10px;margin-top:20px;clear:both}.member-list li[data-v-6c86f0c9]{padding:5px 10px;margin:5px;background:#eee;display:inline-block;cursor:pointer;width:150px;text-align:center;max-height:28px;overflow:hidden}.member-list li[data-v-6c86f0c9]:hover{background:#ddd;color:#ff4500}.latest-members[data-v-6c86f0c9]{border:1px solid #9ed18b;margin-top:25px}.latest-members .-tit[data-v-6c86f0c9]{margin-bottom:10px;font-weight:700;font-size:13px;padding-left:5px}.latest-members ul[data-v-6c86f0c9]{padding-top:15px}", ""]);

// exports


/***/ }),

/***/ 1121:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1120);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("1adbe95f", content, true, {});

/***/ }),

/***/ 1122:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticStyle: {
      "margin-bottom": "12px"
    }
  }, [_c('radio-group', {
    model: {
      value: (_vm.queryType),
      callback: function($$v) {
        _vm.queryType = $$v
      },
      expression: "queryType"
    }
  }, [_c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("根据姓名和手机号联想查询")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("根据姓名模糊查询")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 3
    }
  }, [_vm._v("根据会员卡号查询")])], 1)], 1), _vm._v(" "), (_vm.queryType == 1) ? [_c('AutoComplete', {
    staticStyle: {
      "width": "360px"
    },
    attrs: {
      "data": _vm.memberCandidates,
      "icon": "ios-search",
      "clearable": true,
      "placeholder": "请输入姓名或手机号"
    },
    on: {
      "on-select": _vm.selectMemberCandidate,
      "on-search": _vm.handleSearchMember
    },
    model: {
      value: (_vm.memberQueryStr),
      callback: function($$v) {
        _vm.memberQueryStr = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "memberQueryStr"
    }
  })] : _vm._e(), _vm._v(" "), (_vm.queryType == 2) ? [_c('i-input', {
    staticStyle: {
      "width": "360px"
    },
    attrs: {
      "placeholder": "请输入姓名后按回车查询"
    },
    on: {
      "on-enter": _vm.queryMemberByName
    },
    model: {
      value: (_vm.memberName),
      callback: function($$v) {
        _vm.memberName = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "memberName"
    }
  }), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.queryMemberByName
    }
  }, [_vm._v("查询")])] : _vm._e(), _vm._v(" "), (_vm.queryType == 3) ? [_c('input-int', {
    staticStyle: {
      "width": "360px"
    },
    attrs: {
      "placeholder": "请刷卡或输入卡号后按回车"
    },
    on: {
      "enter": _vm.queryMemberByCard
    },
    model: {
      value: (_vm.cardNo),
      callback: function($$v) {
        _vm.cardNo = $$v
      },
      expression: "cardNo"
    }
  }), _vm._v(" "), _c('i-button', {
    staticStyle: {
      "position": "relative",
      "top": "-1px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.queryMemberByCard
    }
  }, [_vm._v("查询")])] : _vm._e(), _vm._v(" "), (_vm.queryMemberList && _vm.queryMemberList.length > 0) ? _c('div', {
    staticClass: "member-list"
  }, [_c('ul', _vm._l((_vm.queryMemberList), function(m) {
    return _c('li', {
      attrs: {
        "title": m.name
      },
      on: {
        "click": function($event) {
          return _vm.selectMember(m)
        }
      }
    }, [_vm._v(_vm._s(m.name) + "（" + _vm._s(_vm.g.Dict.Sex[m.sex]) + "）")])
  }), 0)]) : _vm._e(), _vm._v(" "), (_vm.showLatestMember && _vm.latestMemberList && _vm.latestMemberList.length > 0) ? _c('div', {
    staticClass: "member-list latest-members"
  }, [_c('span', {
    staticClass: "-tit"
  }, [_vm._v("最近新建的会员")]), _c('span', {
    staticClass: "gray l10"
  }, [_vm._v("（点击可选择会员）")]), _vm._v(" "), _c('ul', _vm._l((_vm.latestMemberList), function(m, idx) {
    return (idx < 15) ? _c('li', {
      on: {
        "click": function($event) {
          return _vm.selectMember(m)
        }
      }
    }, [_vm._v(_vm._s(m.name) + "（" + _vm._s(_vm.g.Dict.Sex[m.sex]) + "）")]) : _vm._e()
  }), 0)]) : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),

/***/ 1125:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2126)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1241),
  /* template */
  __webpack_require__(2541),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-f2f063d6",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nav_menu_vue__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nav_menu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__nav_menu_vue__);
//
//
//
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
	props: ['menu'],
	components: { NavMenu: __WEBPACK_IMPORTED_MODULE_0__nav_menu_vue___default.a },
	data() {
		return {
			g: $,
			menus: [],
			menus0: [{ icon: 'icon-shop', 'name': '旗下门店', 'menu': 'tenant-shops' }, { icon: 'icon-shops', 'name': '新建门店', 'menu': 'tenant-shop-create' }, { icon: 'icon-tongji', 'name': '统计', 'menu': 'tenant-stat' }, { icon: 'icon-card', 'name': '会员卡', 'menu': 'tenant-card-conf' }, { icon: 'icon-config2', 'name': '设置', 'menu': 'tenant-conf' }],
			menus1: [{ icon: 'icon-shop', 'name': '门店', 'menu': 'tenant-shop' }, { icon: 'icon-shop-create', 'name': '新建门店', 'menu': 'tenant-shop-create' }, { icon: 'icon-card', 'name': '会员卡', 'menu': 'tenant-card-conf' }, { icon: 'icon-config2', 'name': '设置', 'menu': 'tenant-conf' }]
		};
	},

	computed: {
		tenantName() {
			if (this.$store.state.tenant && this.$store.state.tenant.tenantName) {
				return this.$store.state.tenant.tenantName;
			} else {
				return $.data.tenant.tenantName;
			}
		},
		tenantImg() {
			if (this.$store.state.tenant.logoPathname) {
				return $.Util.getImgUrl(this.$store.state.tenant.logoPathname, 500, 500, '333333');
			} else if ($.data.tenant.logoPathname) {
				return $.Util.getImgUrl($.data.tenant.logoPathname, 500, 500, '333333');
			} else {
				return 'http://www.jzongguan.com/imglib/default-tenant-logo.jpg';
			}
		}
	},

	beforeCreate() {
		if ($.data.user.isTenantOwner !== true) {
			this.$router.push('/user-login?f=t-nav');
		}
	},

	created() {
		$.data.sys.isInShop = false;
		if ($.data.tenant.tenantType === 0) this.menus = this.menus0;else if ($.data.tenant.tenantType === 1) this.menus = this.menus1;
	},

	methods: {
		count(obj) {
			return $.Util.countAttrs(obj) - 1;
		}
	}
});

/***/ }),

/***/ 1127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_tenant_nav_vue__ = __webpack_require__(1114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_tenant_nav_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_tenant_nav_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { TenantNav: __WEBPACK_IMPORTED_MODULE_0__components_tenant_nav_vue___default.a },
	data() {
		return {
			tid: null,
			mpAuthlink: null
		};
	},
	created() {
		this.queryTenantId();
	},
	methods: {
		queryTenantId() {
			$.Req.service($.SvName.TENANT_ID_QUERY, {}, ret => {
				this.tid = ret.tenantId;
				let pagecode = $.Util.md5(ret.tenantId + '/we-jzg-2017');
				this.mpAuthlink = 'http://tool.jzongguan.com/wx-open/auth-to-jzgmp.php?t={0}&pagecode={1}'.format(ret.tenantId, pagecode);
			});
		}
	}
});

/***/ }),

/***/ 1128:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1129:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, "li[data-v-23c13726]{padding:6px;font-size:13px}.authlink[data-v-23c13726]{background:#2e90f7;padding:8px 20px;color:#fff}", ""]);

// exports


/***/ }),

/***/ 1130:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1128);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("70b71549", content, true, {});

/***/ }),

/***/ 1131:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1129);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("4763ee7d", content, true, {});

/***/ }),

/***/ 1133:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: 'g-nav g-nav-' + _vm.g.data.sys.skin
  }, [_c('div', {
    staticClass: "shop-info"
  }, [_c('div', {
    staticClass: "shop-name"
  }, [_c('i', {
    staticClass: "iconfont icon-home1"
  }), _vm._v(" "), _c('span', {
    staticClass: "tit",
    attrs: {
      "title": _vm.tenantName
    }
  }, [_vm._v(_vm._s(_vm.tenantName.shorten(8)))])]), _vm._v(" "), _c('div', {
    staticClass: "logo-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.tenantImg
    }
  })])]), _vm._v(" "), _c('nav-menu', {
    attrs: {
      "menu": _vm.menu,
      "menus": _vm.menus
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1134:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('tenant-nav', {
    attrs: {
      "menu": "tenant-conf"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "tenant-conf",
      "page": "tenant-mp-auth"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_vm._m(0), _vm._v(" "), _c('section', [_vm._m(1), _vm._v(" "), _c('ol', [_vm._m(2), _vm._v(" "), _c('li', [_vm._v("\n\t\t\t\t\t上一个步骤完成后，点击下面的授权按钮，将你们小程序的相关权限授予健总管系统\n\t\t\t\t\t"), _c('div', {
    staticStyle: {
      "padding": "20px 0"
    }
  }, [_c('a', {
    staticClass: "authlink",
    attrs: {
      "target": "_blank",
      "href": _vm.mpAuthlink
    }
  }, [_vm._v("授权微信小程序")])])]), _vm._v(" "), _c('li', [_vm._v("\n\t\t\t\t\t授权成功后，将进入小程序的审核流程（预计1 ~ 3个工作日），腾讯公司审核通过后会发送微信公众号消息给小程序管理员\n\t\t\t\t")]), _vm._v(" "), _c('li', [_vm._v("\n\t\t\t\t\t上一步成功后，健总管后台系统将于当日傍晚自动开通，即场馆可正常通过自己的小程序使用健总管小程序功能。\n\t\t\t\t")])])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("微信小程序授权说明")])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("如果您需要使用我们健总管小程序，但是又需要保留自己的小程序品牌名和Logo，就需要使用这里的小程序授权；")]), _vm._v(" "), _c('li', [_vm._v("你们的小程序授权给我们后，我们将有权限负责你们小程序的大部分业务（例如相关技术设置和发布）；")]), _vm._v(" "), _c('li', [_vm._v("您可以在微信小程序后台查看到我们的授权信息，也可以随时取消授权。")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("微信小程序授权步骤")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_vm._v("你们（场馆）首先需拥有一个独立的微信小程序（如还未拥有，"), _c('a', {
    attrs: {
      "target": "_blank",
      "href": "https://mp.weixin.qq.com/cgi-bin/wx?token=&lang=zh_CN"
    }
  }, [_vm._v("去腾讯申请注册小程序 →")]), _vm._v("）\n\t\t\t\t")])
}]}

/***/ }),

/***/ 1149:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1181)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1155),
  /* template */
  __webpack_require__(1200),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4910629c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1150:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1182)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1157),
  /* template */
  __webpack_require__(1201),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4e7fda39",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_group_lesson_opt_vue__ = __webpack_require__(1150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_group_lesson_opt_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_member_member_group_lesson_opt_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_help__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_help___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_help__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_cust_cust_detail_vue__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_cust_cust_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pages_cust_cust_detail_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue___default.a, MemberGroupLessonOpt: __WEBPACK_IMPORTED_MODULE_1__pages_member_member_group_lesson_opt_vue___default.a, Help: __WEBPACK_IMPORTED_MODULE_2__components_help___default.a, CustDetail: __WEBPACK_IMPORTED_MODULE_3__pages_cust_cust_detail_vue___default.a },
	props: {
		lessonId: {
			type: Number
		},
		showLessonInfo: {
			type: Boolean,
			default: false
		},
		enableGlCheckout: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			g: window.$,
			today: null,
			editable: $.Util.hasRoleFunc($.Dict.RoleFunc.MEMBER_AGENT.value),
			lesson: null,
			memberLessonList: [],
			allowCancelBooking: false,
			allowMemberCheckin: false,
			viewMemberDlg: false,
			viewMemberId: 0,
			canBooking: false,
			viewGroupLessonOptDlg: false,
			mlMemberList: [],
			selectMembIds: {},
			selectMembCnt: null,
			memberCheckinMap: {},
			glCheckinCancelDlg: null,
			selectMlIdx: null,
			checkinCancelRemark: null,
			showPrintTicket: null,
			custDlgView: null,
			selectCustId: null,
			selectCustName: '',
			memberLessonOptMap: {}, // memberId => opt (0: 缺席，1：请假，2：扣费，3：签到)
			memberVacationRemarkMap: {}, // memberId => remark
			canCheckinClassMembers: null,
			isCheckAllCheckin: null,
			classMembOptCnts: [0, 0, 0, 0],
			isCheckinForCoach: null,
			classMemberVacationDlg: null,
			classMemberVacationRemark: null,
			selectMember: null,
			memberLessonVacationMap: {}
		};
	},

	created() {
		let ck = $.Util.cookie.get($.Conf.CookieKeys.SHOW_MEMBER_LESSON_PRINT);
		if (ck && ck === 'true') {
			this.showPrintTicket = true;
		}

		this.load();
	},

	methods: {
		load() {
			this.queryMemberLesson(this.queryLesson);
		},

		checkPrintOption() {
			$.Util.cookie.set($.Conf.CookieKeys.SHOW_MEMBER_LESSON_PRINT, this.showPrintTicket, 365);
		},

		queryLesson() {
			let args = { lessonId: this.lessonId };
			$.Req.service($.SvName.LESSON_QUERY, args, (ret, systime) => {
				let nowTime = Date.new(systime);
				if (!ret || !ret.lesson) {
					$.Msg.error($.Lang.NOT_FOUND_TIPS);
					this.$router.push('/group-lesson');
					return;
				}
				this.canCheckinClassMembers = this.editable && Date.new(ret.lesson.lessonDate).compareDatePart(nowTime) <= 0;
				if (!ret.lesson.lessonTitle) {
					ret.lesson.lessonTitle = ret.lesson.csName ? ret.lesson.csName : ret.lesson.courseName;
				}
				this.lesson = ret.lesson;
				let lessonTime = Date.new('{0} {1}:00'.format($.Util.formatDate(this.lesson.lessonDate), $.Util.formatTime(this.lesson.beginTime)));

				this.allowCancelBooking = lessonTime.getTime() > nowTime || $.data.user.isShopOwner;
				let checkinGlMaxTime = ret.checkinGlMaxTime ? ret.checkinGlMaxTime : 60;
				this.allowMemberCheckin = lessonTime.getTime() - 60000 * checkinGlMaxTime <= nowTime;

				let l = this.lesson;
				this.canBooking = l.isNeedBooking && l.status !== 9 && nowTime < Date.new('{0} {1}:00'.format($.Util.formatDate(l.lessonDate), $.Util.formatTime(l.beginTime))).getTime();

				if (this.lesson.classMembers) {
					let mids = [];
					for (let mid of this.lesson.classMembers.split(',')) {
						let memberId = parseInt(mid);
						if (!this.mlMemberIdIList.contains(memberId)) {
							mids.push(memberId);
							this.selectMembIds[memberId] = true;
						}
					}
					if (mids.length > 0) {
						args = { memberIdList: mids };
						$.Req.service($.SvName.MEMBER_BASE_LIST_QUERY, args, ret => {
							this.mlMemberList = [];
							for (let m of ret.memberBaseList) {
								if (!this.memberCheckinMap[m.memberId]) {
									this.mlMemberList.push(m);
								}
							}
							this.selectMembCnt = this.mlMemberList.length;
						});
					} else {
						this.mlMemberList = [];
					}
				}
			}, true);
		},

		queryMemberLesson(callback = null) {
			let args = {
				lessonId: this.lessonId,
				needAll: true,
				page: 1,
				needMemberCardInfo: true,
				needMemberLessonVacation: true,
				needMlCheckoutInfo: this.enableGlCheckout
			};
			$.Req.service($.SvName.MEMBER_GROUP_LESSON_QUERY, args, (ret, systime) => {
				this.today = Date.new(systime);
				this.memberLessonList = ret.memberLessonList;
				this.mlMemberIdIList = [];
				for (let ml of ret.memberLessonList) {
					this.mlMemberIdIList.push(ml.memberId);
					if (ml.status == 2 || ml.status == 4) {
						this.memberCheckinMap[ml.memberId] = true;
					}
				}
				this.memberLessonVacationList = ret.memberLessonVacationList;
				this.memberLessonVacationMap = {};
				for (let mlv of this.memberLessonVacationList) {
					if (!this.memberLessonVacationMap[mlv.memberId]) {
						this.memberLessonVacationMap[mlv.memberId] = true;
					}
				}
				this.classMembOptCnts[1] = ret.memberLessonVacationList.length;
				if (callback) callback();
			});
		},

		formatTime(datetime) {
			if (datetime) return new Date(datetime).format('M/d hh:mm');else return '';
		},

		cancelBooking(idx) {
			let ml = this.memberLessonList[idx];
			let msg = '您确定要代【{0}】取消预约吗？'.format(ml.memberName);
			$.Dlg.confirm(msg, yes => {
				let args = { mlId: ml.mlId, lessonId: this.lessonId };
				$.Req.service($.SvName.MEMBER_LESSON_BOOKING_CANCEL, args, ret => {
					//this.memberLessonList.splice(idx, 1);
					this.queryMemberLesson(this.queryLesson);
				});
			});
		},

		handleCheckin(idx) {
			let ml = this.memberLessonList[idx];
			if (!ml) {
				alert('Invalid index: ' + idx);
				return;
			}
			if (ml.mcId) {
				let args = {
					optType: 2,
					courseType: 1,
					lessonId: this.lessonId,
					memberId: ml.memberId,
					mcId: ml.mcId,
					mlId: ml.mlId
				};
				$.Req.service($.SvName.MEMBER_LESSON_OPERATE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					this.queryLesson();
					this.queryMemberLesson();
				}, true);
			} else {
				let args = { mlId: ml.mlId, lessonId: this.lessonId };
				$.Req.service($.SvName.CUST_GC_LESSON_CHECKIN, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					this.queryLesson();
					this.queryMemberLesson();
				}, true);
			}
		},

		checkinForCoach() {
			let args = { courseType: 1, lessonId: this.lessonId };
			$.Req.service($.SvName.COACH_CHECKIN_LESSON, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryMemberLesson(this.queryLesson);
			}, true);
		},

		viewMember(memberId) {
			this.viewMemberId = memberId;
			this.viewMemberDlg = true;
		},

		bookingForMember() {
			this.viewGroupLessonOptDlg = true;
		},

		afterSubmitLessonOpt() {
			this.queryLesson();
			this.queryMemberLesson();
			this.viewGroupLessonOptDlg = false;
		},

		closeLessOptDlg() {
			this.viewGroupLessonOptDlg = false;
		},

		toggleClassMember(memberId) {
			let preVal = this.selectMembIds[memberId];
			this.selectMembIds[memberId] = !preVal;
			if (preVal) this.selectMembCnt--;else this.selectMembCnt++;
		},

		_checkinClassLesson() {
			let checkinMemberIds = [];
			for (let m of this.mlMemberList) {
				if (this.selectMembIds[m.memberId]) {
					checkinMemberIds.push(m.memberId);
				}
			}
			if (checkinMemberIds.length === 0) {
				$.Msg.success("请选择上课人员");
				return;
			}
			if (checkinMemberIds.length > 50) {
				$.Dlg.warning("每次选择上课人员数不能超过50人，请分批选择签到。");
				return;
			}

			let args = { lessonId: this.lessonId, memberIdList: checkinMemberIds };
			$.Req.service($.SvName.CLASS_LESSON_CHECKIN, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryLesson();
				this.queryMemberLesson();
			}, true);
		},

		inputMemberVacationRemark(memberId, memberName) {
			let preRemark = this.memberVacationRemarkMap[memberId];
			let msg = '请输入【{0}】的请假备注：'.format(memberName);
			let remark = prompt(msg, preRemark);
			if (remark !== null) {
				this.$set(this.memberVacationRemarkMap, memberId, remark);
			}
		},

		checkinClassLesson() {
			let args = {
				lessonId: this.lessonId,
				hasCheckinCoach: this.isCheckinForCoach,
				memberLessonOptMap: this.memberLessonOptMap,
				memberVacationRemarkMap: this.memberVacationRemarkMap
			};
			$.Req.service($.SvName.CLASS_LESSON_CHECKIN, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.mlMemberList = [];
				this.classMembOptCnts = [0, 0, 0, 0];
				this.queryLesson();
				this.queryMemberLesson();
			}, true);
		},

		openCancelCheckinDlg(idx) {
			this.selectMlIdx = idx;
			this.glCheckinCancelDlg = true;
		},

		cancelCheckin() {
			let ml = this.memberLessonList[this.selectMlIdx];
			let optTypeName = ml.status === 4 ? '扣费' : '签到';
			let msg = '您确定要取消【{0}】的{1}吗？ '.format(ml.memberName, optTypeName);
			if (ml.mcId) msg += '取消后，会员的本次课消费将退回。';
			$.Dlg.confirm(msg, yes => {
				let args = { mlId: ml.mlId, lessonId: this.lessonId, remark: this.checkinCancelRemark };
				$.Req.service($.SvName.MEMBER_LESSON_CHECKIN_CANCEL, args, ret => {
					this.glCheckinCancelDlg = false;
					this.memberLessonList.splice(this.selectMlIdx, 1);
					this.queryLesson();
				});
			});
		},

		printMlTicket(id) {
			let shopName = $.data.tenant.tenantName === $.data.shop.shopName ? $.data.shop.shopName : $.data.tenant.tenantName + '<br>' + $.data.shop.shopName;
			$.Util.printForPos(id, shopName, true);
		},

		viewCust(custId, custName) {
			this.selectCustId = custId;
			this.selectCustName = custName;
			this.custDlgView = true;
		},

		checkAllCheckin() {
			let val = null;
			if (this.isCheckAllCheckin) val = 3;
			for (let m of this.mlMemberList) {
				this.$set(this.memberLessonOptMap, m.memberId, val);
			}
			this.calcClassMemberOptCnt();
		},

		calcClassMemberOptCnt() {
			this.classMembOptCnts = [0, 0, 0, 0];
			for (let m of this.mlMemberList) {
				let optVal = this.memberLessonOptMap[m.memberId];
				this.classMembOptCnts[optVal]++;
			}
		},

		changeClassMemberOpt(val) {
			this.calcClassMemberOptCnt();
		},

		openDlgForClassMemberVacation(m) {
			this.selectMember = m;
			this.classMemberVacationDlg = true;
		},

		submitClassMemberVacation() {
			if (!confirm('您确定给【{0}】请假吗？'.format(this.selectMember.name))) {
				return;
			}
			if (!this.classMemberVacationRemark) {
				$.Msg.error('请输入请假备注');
				return;
			}
			let args = {
				lessonId: this.lessonId,
				memberId: this.selectMember.memberId,
				remark: this.classMemberVacationRemark
			};
			$.Req.service($.SvName.MEMBER_LESSON_VACATION_CREATE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.classMemberVacationDlg = false;
				this.queryMemberLesson();
			}, true);
		},

		delMemberLessonVacation(mlv) {
			if (!confirm('您确定要删除【{0}】的请假吗？'.format(mlv.memberName))) {
				return;
			}

			let args = {
				mlvId: mlv.mlvId,
				memberId: mlv.memberId,
				lessonId: mlv.lessonId
			};
			$.Req.service($.SvName.MEMBER_LESSON_VACATION_DELETE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryMemberLesson();
			}, true);
		}
	}
});

/***/ }),

/***/ 1156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tenant_tenant_mp_auth__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tenant_tenant_mp_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tenant_tenant_mp_auth__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { TenantMpAuth: __WEBPACK_IMPORTED_MODULE_0__tenant_tenant_mp_auth___default.a },
  props: {
    afterSubmit: {
      type: Function,
      default() {
        return {};
      }
    },
    onClose: {
      type: Function,
      default() {
        return {};
      }
    }
  },

  data() {
    return {
      g: window.$,
      today: new Date(),
      queryNo: null,
      queryNoType: null,
      member: null,
      memberList: null,
      queryError: null,
      allowCkinCardCnt: null,
      memberCardList: null,
      password: null,
      selectCardIndex: null,
      checkinCardCnt: 0,
      checkinCount: 1,
      clickedSubmit: false,
      preQueryNo: null,
      pcScheduleList: null,
      selectPsIdx: null,
      selectPs: null,
      times: [],
      bookingDate: new Date(),
      dataType: {
        USED: 1,
        PAST: 2,
        USABLE: 3,
        VACATION: 4,
        PENDING: 5,
        DISUSED: 6
      },
      minInterval: 15,
      hours: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      timeItems: [],
      hasLoadTimeItems: false,
      latestDates: [],
      preCoachId: null,
      selectTimeIdx: null,
      cardPaymentConf: {},
      coachId: null,
      coachList: null,
      lessonTitlesInTimes: {},
      enableMoreBookings: null,
      pcLessonForMoreBookingsList: null,
      groundList: null,
      selectGroundId: null,
      hideInvalidCards: null,
      enablePlCardVenueConf: null,
      vb: {
        isSelect: null,
        venueList: null,
        venueId: null,
        vaId: null,
        vaList: null,
        vaiList: null,
        bookingTimesList: null,
        bookingHourList: null
      }
    };
  },

  watch: {
    selectCardIndex: function (val) {
      this.vb.venueList = null;
      this.queryVenueList();
    }
  },
  created() {
    this.initTimes();

    let nowTime = new Date().getTime();
    for (let i = 0; i < 5; i++) {
      this.latestDates.push(new Date(nowTime + 3600000 * 24 * i));
    }
    $.Req.queryGround(data => {
      this.groundList = data;
    });
    this.queryShopArgs();
  },

  methods: {
    initTimes() {
      if ($.Util.cookie.get($.Conf.CookieKeys.PL_BOOKING_MIN_INTERVAL)) {
        this.minInterval = parseInt($.Util.cookie.get($.Conf.CookieKeys.PL_BOOKING_MIN_INTERVAL));
      }

      this.times = [];
      for (let i = 0, len = this.hours.length; i < len; i++) {
        let h = this.hours[i];
        this.times.push([h, 0]);
        for (let j = 1; this.minInterval * j < 60; j++) {
          this.times.push([h, this.minInterval * j]);
        }
      }
    },

    initTimeItems() {
      this.selectTimeIdx = null;
      this.timeItems = [];
      let now = new Date();
      for (let i = 0, len = this.hours.length; i < len; i++) {
        if (this.bookingDate.compareDatePart(now) > 0) {
          this.timeItems.push({ type: this.dataType.USABLE });
        } else {
          this.timeItems.push({ type: this.dataType.USABLE });
        }
      }
    },

    initData() {
      this.queryNo = null;
      this.member = null;
      this.selectCardIndex = null;
      this.queryError = null;
      this.checkinCardCnt = 0;
    },

    isInVacation(begin, end) {
      if (begin && end) {
        let today = new Date();
        if (today.compareDatePart(new Date(begin)) >= 0 && today.compareDatePart(new Date(end)) <= 0) {
          return true;
        }
      }

      return false;
    },

    queryMemberPsCoach() {
      if (!this.member) {
        return;
      }

      let args = {
        memberId: this.member.memberId
      };

      $.Req.service($.SvName.MEMBER_PS_COACH_QUERY, args, ret => {
        this.coachList = ret.coachList;
      });
    },

    queryMember() {
      if (!this.queryNo) {
        $.Msg.warning($.Lang.NO_INPUT);
        return;
      }

      this.selectPsIdx = null;
      let args = {};
      if ($.Util.validatePhoneNo(this.queryNo)) {
        this.queryNoType = "phone";
        args = { nameOrPhone: this.queryNo };
      } else {
        if (!$.Util.isInteger(this.queryNo)) {
          this.queryNoType = "name";
          args = { fuzzyName: this.queryNo };
        } else {
          this.queryNoType = "card";
          if (!$.Util.validateCardNo(this.queryNo)) {
            $.Msg.error($.Lang.CARD_NO_TOO_LONG);
            return;
          }
          args = { cardNo: this.queryNo };
        }
      }
      args.needPhoneSuffix = true;
      $.Req.service($.SvName.MEMBER_ADV_QUERY, args, ret => {
        this.preQueryNo = this.queryNo;
        if (!ret || !ret.memberList || ret.memberList.length === 0) {
          this.member = null;
          if (this.queryNoType === "phone") {
            this.queryError = "不存在此手机号【{0}】的会员，请检查手机号是否正确".format(this.queryNo);
          } else {
            this.queryError = "不存在姓名为【{0}】的会员".format(this.queryNo);
          }
          return;
        }
        this.queryError = null;
        if (ret.memberList.length === 1) {
          this.memberList = null;
          this.queryError = null;
          this.member = ret.memberList[0];
          this.queryMemberPsCoach();
        } else {
          this.member = null;
          this.memberList = ret.memberList;
        }
      }, true);
    },

    selectMember(idx) {
      this.member = {};
      $.Util.copyAttributes(this.memberList[idx], this.member);
      this.memberList = null;
      this.queryMemberPsCoach();
    },

    queryPrivateSchedule() {
      let args = {
        memberId: this.member.memberId,
        includeOpenSchedule: true,
        coachId: this.coachId,
        page: 1
      };
      $.Req.service($.SvName.PRIVATE_COURSE_SCHEDULE_QUERY, args, ret => {
        for (let ps of ret.pcScheduleList) {
          ps.mcIdArr = ps.mcIds ? ps.mcIds.split(",") : [];
          ps.limitWeekArr = !$.Util.isEmptyArray(ps.limitWeeks) ? ps.limitWeeks.split(",") : [0, 1, 2, 3, 4, 5, 6];
          ps.limitWeekArr = ps.limitWeekArr.map(function (val) {
            return +val;
          });
        }
        this.pcScheduleList = ret.pcScheduleList;
        // if (this.pcScheduleList.length === 0) {
        if (this.pcScheduleList.length) {
          this.selectPsIdx = 0;
          this.queryCoachLessons();
          this.setCardPaymentConf();
          this.queryMemberCard();
        } else {
          this.selectPsIdx = null;
        }
      });
    },

    queryCoachLessons() {
      this.initTimeItems();
      let coachId = this.coachId;
      let args = {
        beginDate: this.bookingDate,
        endDate: this.bookingDate,
        coachId: coachId
      };
      $.Req.service($.SvName.PC_LESSON_QUERY, args, ret => {
        let ps = this.pcScheduleList[this.selectPsIdx];
        let lessonDuration = ps.duration;
        let timeState = {};
        this.lessonTitlesInTimes = {};
        for (let l of ret.pcLessonList) {
          let beginTime = parseInt(l.beginTime);
          let endTime = parseInt(l.endTime);

          let beginHour = parseInt(l.beginTime / 100);
          let endHour = parseInt(l.endTime / 100);
          let endMin = parseInt(l.endTime % 100);

          let type = this.dataType.PENDING;
          let lessonDesc = "{0}【{1}:{2} ~ {3}:{4}】{5}".format(l.memberName, beginHour, l.beginTime.toString().substr(-2, 2), endHour, l.endTime.toString().substr(-2, 2), l.courseName);

          if (endMin === 0) endHour--;
          for (let h = beginHour; h <= endHour; h++) {
            let mins = {};
            for (let j = 0; j < 60; j += this.minInterval) {
              let t = h * 100 + j;
              if (timeState[t] !== this.dataType.USED) {
                if (t >= beginTime && t < endTime) mins[j] = this.dataType.USED;else if (t >= endTime) mins[j] = this.dataType.USABLE;else if (t + lessonDuration > beginTime) mins[j] = this.dataType.DISUSED;else mins[j] = this.dataType.USABLE;
                timeState[t] = mins[j];
              } else {
                mins[j] = this.dataType.USED;
              }
              if (mins[j] === this.dataType.USED && !this.lessonTitlesInTimes[t]) {
                this.lessonTitlesInTimes[t] = lessonDesc;
              }
            }
            this.$set(this.timeItems, h - this.hours[0], {
              type: type,
              beginTime: beginTime,
              endTime: endTime,
              mins: mins
            });
          }
        }

        this.setCoachVacation(coachId);
      }, true);
    },

    getVacationList(ws) {
      let vacationList = [];
      if (ws.vacationBegin && ws.vacationEnd) {
        let vac = {
          beginDate: ws.vacationBegin,
          endDate: ws.vacationEnd
        };
        if (ws.vacationBeginTime && ws.vacationEndTime) {
          vac.beginTime = $.Util.formatTime(ws.vacationBeginTime);
          vac.endTime = $.Util.formatTime(ws.vacationEndTime);
        }
        vacationList.push(vac);
      }
      if (ws.vacations) {
        for (let itemStr of ws.vacations.split(";")) {
          let items = itemStr.split(",");
          if (items.length < 2) continue;

          let vac = {};
          vac.beginDate = items[0];
          vac.endDate = items[1];
          if (items.length > 2) {
            vac.beginTime = items[2];
            vac.endTime = items[3];
          }
          vacationList.push(vac);
        }
      }

      return vacationList;
    },

    handleCoachVacation(ws) {
      let vacationList = this.getVacationList(ws);

      for (let v of vacationList) {
        let vbeingDate = Date.new(v.beginDate);
        let vendDate = Date.new(v.endDate);
        let [vbeginTime, vendTime] = [$.Util.getTimeNum(v.beginTime), $.Util.getTimeNum(v.endTime)];
        let [vbeginHour, vendHour, vendMin] = [null, null, null];
        if ($.Util.isNotEmpty(vbeginTime) && $.Util.isNotEmpty(vendTime)) {
          [vbeginHour, vendHour, vendMin] = [parseInt(vbeginTime / 100), parseInt(vendTime / 100), parseInt(vendTime % 100)];
        }
        let dt = this.bookingDate;
        if (dt.compareDatePart(vbeingDate) >= 0 && dt.compareDatePart(vendDate) <= 0) {
          for (let j = 0, len = this.hours.length; j < len; j++) {
            if ($.Util.isNotEmpty(vbeginTime) && $.Util.isNotEmpty(vendTime)) {
              if (this.hours[j] >= vbeginHour && this.hours[j] * 100 < vendHour * 100) {
                if (this.timeItems[j].type === this.dataType.USABLE) this.$set(this.timeItems, j, {
                  type: this.dataType.VACATION
                });
              }
            } else {
              if (this.timeItems[j].type === this.dataType.USABLE) this.$set(this.timeItems, j, { type: this.dataType.VACATION });
            }
          }
        }
      }
    },

    setCoachVacation(coachId) {
      let args = { staffId: coachId };
      $.Req.service($.SvName.COACH_WORK_SCHEDULE_QUERY, args, ret => {
        let ws = ret.coachWorkSchedule;
        if (!ws) return;

        this.handleCoachVacation(ws);
        if (ws.worktime) {
          let week = this.bookingDate.getDay();
          let dayTimes = ws.worktime.split(";");
          let worktimeGrid = new Array(this.hours.length);
          let sysWeek = week;
          if (week === 0) sysWeek = 7;
          let confWorkTimeByHalfHour = false;
          for (let h of dayTimes[sysWeek - 1].split(",")) {
            h = parseInt(h);
            if (h < 100) {
              worktimeGrid[h - this.hours[0]] = 1;
            } else {
              worktimeGrid[h] = 1;
              confWorkTimeByHalfHour = true;
            }
          }

          if (!confWorkTimeByHalfHour) {
            for (let j = 0, len = this.hours.length; j < len; j++) {
              if (!worktimeGrid[j] && this.timeItems[j].type === this.dataType.USABLE) {
                this.$set(this.timeItems, j, { type: this.dataType.VACATION });
              }
            }
          } else {
            for (let i = 0, len = this.hours.length; i < len; i++) {
              let fistHalfHour = this.hours[i] * 100;
              let lastHalfHour = this.hours[i] * 100 + 30;
              if (worktimeGrid[fistHalfHour] && worktimeGrid[lastHalfHour]) continue;

              let mins = {};
              for (let j = 0; j < 60; j += this.minInterval) {
                if (!worktimeGrid[fistHalfHour]) {
                  if (j < 30) mins[j] = this.dataType.VACATION;
                }
                if (!worktimeGrid[lastHalfHour]) {
                  if (j >= 30) mins[j] = this.dataType.VACATION;
                }
              }
              let item = this.timeItems[i];
              item.mins = mins;
              this.$set(this.timeItems, i, item);
            }
          }
        }
      });
    },

    queryMemberCard() {
      this.selectCardIndex = null; // init
      let args = { memberId: this.member.memberId };
      $.Req.service($.SvName.MEMBER_CARD_QUERY, args, ret => {
        this.memberCardList = [];
        let ps = this.pcScheduleList[this.selectPsIdx];
        for (let c of ret.memberCardList) {
          if ((c.cardClass === 2 || c.cardType > 1) && (!ps.mcIds || ps.mcIdArr.contains(c.mcId + ""))) {
            this.memberCardList.push(c);
          }
        }
        this.hideInvalidCards = this.memberCardList && this.memberCardList.length > 5;
        this.validateMemberCardList();
      });
    },

    validateMemberCardList() {
      if ($.Util.isEmptyArray(this.memberCardList)) return;

      let ckinCnt = 0;
      let i = 0;
      let firstCkinCardIdx = -1;
      for (let mc of this.memberCardList) {
        let checkRet = this.checkMemberCard(mc);
        mc.canSelect = checkRet[0];
        if (mc.canSelect) {
          ckinCnt++;
          if (firstCkinCardIdx < 0) firstCkinCardIdx = i;
        } else {
          mc.error = checkRet[1];
        }
        i++;
      }
      if (ckinCnt >= 1) {
        this.selectCardIndex = firstCkinCardIdx;
      }
      this.allowCkinCardCnt = ckinCnt;
    },

    setCardPaymentConf() {
      let confStr = this.pcScheduleList[this.selectPsIdx].cardPaymentConf;
      if (confStr && confStr.length > 0) {
        this.cardPaymentConf = {};
        let records = confStr.split(",");
        for (let r of records) {
          let [cardId, payment] = r.split(":");
          this.cardPaymentConf[cardId] = payment;
        }
      } else {
        this.cardPaymentConf = null;
      }
    },

    formatTime(timeId) {
      return parseInt(timeId / 100) + ":" + (timeId + "").substr(-2, 2);
    },

    checkMemberCard(mc) {
      let ret = $.MemberLib.checkMemberCard(mc, null, null, this.bookingDate);
      if (!ret[0]) {
        return ret;
      }

      if (!(mc.cardId in this.cardPaymentConf)) {
        // 该课程未设置本卡
        return [false, "不在本课计费卡范围内"];
      }

      // 检查余额
      let cardPayment = this.cardPaymentConf[mc.cardId];
      if (mc.cardType === 1) {
        // 期限卡
        if (mc.beginDate) {
          if (this.today.compareDatePart(Date.new(mc.beginDate)) < 0) {
            return [false, "尚未到开卡日期"];
          }
        }
        if (mc.endDate) {
          if (this.today.compareDatePart(mc.endDate) > 0) {
            return [false, "会员卡已过期"];
          }
        }
      } else if (mc.cardType === 2) {
        // 次卡
        if (mc.currentTimes - cardPayment < 0) {
          return [false, "剩余次数不足：此节课需消费{0}次".format(cardPayment)];
        }
      } else if (mc.cardType === 3) {
        // 储值卡
        if (mc.currentAmount - cardPayment < 0) {
          return [false, "剩余金额不足：此节课需消费{0}元".format(cardPayment)];
        }
      }

      if (!this.cardPaymentConf) {
        // 无需计费
        return [true, null];
      }

      return [true, null];
    },

    handleSubmit() {
      if (this.selectCardIndex === null) {
        $.Msg.error("请选择一张会员卡");
        return;
      }
      if (!this.bookingDate) {
        $.Msg.error("请选择上课预约日期");
        return;
      }
      if (this.selectTimeIdx === null) {
        $.Msg.error("请选择上课预约时间");
        return;
      }

      let msg = "确定要预约吗？";
      if (!confirm(msg)) return;

      let memberCard = this.memberCardList[this.selectCardIndex];
      let ps = this.pcScheduleList[this.selectPsIdx];
      let selectTime = this.times[this.selectTimeIdx];
      let lessonBeginTime = selectTime[0] * 100 + selectTime[1];
      let lessonTimeStr = selectTime[0] + ":" + selectTime[1] + (selectTime[1] < 10 ? "0" : "");
      let beginTimeObj = Date.new($.Util.formatDate(this.bookingDate) + " " + lessonTimeStr + ":00");
      let endTimeObj = new Date(beginTimeObj.getTime() + 60000 * ps.duration);
      let lessonEndTime = endTimeObj.getHours() * 100 + endTimeObj.getMinutes();
      let pcLesson = {
        psId: ps.psId,
        courseId: ps.courseId,
        groundId: this.selectGroundId,
        coachId: ps.coachId,
        memberId: this.member.memberId,
        lessonDate: this.bookingDate,
        beginTime: lessonBeginTime,
        endTime: lessonEndTime
      };
      let args = {
        pcLesson: pcLesson,
        mcId: memberCard.mcId,
        memberId: this.member.memberId,
        optType: 1,
        courseType: 2
      };
      if (this.enablePlCardVenueConf && this.vb.isSelect) {
        if (!this.vb.venueId) {
          $.Msg.warning("请选择一个场馆");
          return;
        }
        if (!this.vb.vaId) {
          $.Msg.warning("请选择一个场地");
          return;
        }
        args.venueId = this.vb.venueId;
        args.vaId = this.vb.vaId;
        args.venueBookingHourList = this.vb.bookingHourList;
      }
      $.Req.service($.SvName.MEMBER_LESSON_OPERATE, args, ret => {
        $.Msg.success("预约成功");
        if (this.afterSubmit) {
          this.afterSubmit();
        }
      }, true);
    },

    setBookingDate(d) {
      this.bookingDate = d;
      this.changeBookingDate();
    },

    changeBookingDate() {
      if (this.enableMoreBookings) {
        this.queryPcLessonForMoreBookings();
      } else {
        this.queryCoachLessons();
      }
      this.validateMemberCardList();
    },

    changeCoach(val) {
      this.coachId = val;
      this.queryPrivateSchedule();
    },

    changePs(val) {
      if ($.Util.isEmpty(val)) this.selectPsIdx = null;else this.selectPsIdx = val;

      if (this.selectPsIdx !== null && this.pcScheduleList && this.pcScheduleList.length) {
        this.selectGroundId = this.pcScheduleList[this.selectPsIdx].groundId;
        this.setCardPaymentConf();
        this.queryCoachLessons();
        this.queryMemberCard();
      }
    },

    changeTimeInterval() {
      let newVal = prompt("请设置预约上课时间的间隔（默认15分钟，必须为5或10的倍数）：");
      if (newVal) newVal = parseInt(newVal);else return;

      if (!newVal) return;else if (newVal % 5 !== 0 && newVal % 10 !== 0) {
        $.Dlg.error("时间间隔必须为5或10的倍数");
        return;
      }

      if (newVal && newVal != this.minInterval) {
        $.Util.cookie.set($.Conf.CookieKeys.PL_BOOKING_MIN_INTERVAL, newVal, 365);
        this.minInterval = newVal;
        this.initTimes();
        this.queryCoachLessons();
      }
    },

    checkTime(idx, min) {
      let i = this.times[idx][0] - this.hours[0];
      if (this.timeItems[i].type === this.dataType.USABLE && this.timeItems[i].mins[min] !== this.dataType.VACATION || this.timeItems[i].type === this.dataType.PENDING && this.timeItems[i].mins[this.times[idx][1]] === this.dataType.USABLE) {
        this.selectTimeIdx = idx;
      }
      if (this.enablePlCardVenueConf && this.vb.isSelect && this.vb.venueId) {
        this.queryVenueArea();
      }
    },

    altCardVacation(mc) {
      if (!confirm("确定提前销假吗？ 确定后会将请假结束日期自动修改到昨天。")) {
        return;
      }

      let args = {
        mcId: mc.mcId,
        vacationEnd: new Date(new Date().getTime() - 24 * 3600 * 1000)
      };
      $.Req.service($.SvName.MEMBER_CARD_VACATION_UPDATE, args, (ret, systime) => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.queryMemberCard();
      }, true);
    },

    changeEnableMoreBookings() {
      if (this.enableMoreBookings) {
        this.queryPcLessonForMoreBookings();
      } else {
        this.queryCoachLessons();
      }
    },

    queryPcLessonForMoreBookings() {
      let args = {
        psId: this.pcScheduleList[this.selectPsIdx].psId,
        lessonDate: this.bookingDate
      };
      $.Req.service($.SvName.PC_LESSON_FOR_MORE_BOOKINGS_QUERY, args, ret => {
        this.pcLessonForMoreBookingsList = ret.pcLessonList;
      });
    },

    bookingPcLesson(lessonId) {
      if (this.selectCardIndex === null) {
        $.Msg.error("请选择一张会员卡");
        return;
      }
      let msg = "确定要预约吗？";
      if (!confirm(msg)) return;

      let memberCard = this.memberCardList[this.selectCardIndex];
      let args = {
        lessonId: lessonId,
        mcId: memberCard.mcId,
        memberId: this.member.memberId,
        optType: 1,
        courseType: 2
      };
      $.Req.service($.SvName.MEMBER_LESSON_OPERATE, args, ret => {
        $.Msg.success("预约成功");
        if (this.afterSubmit) {
          this.afterSubmit();
        }
      }, true);
    },

    queryShopArgs() {
      let args = { typeIdList: [2066] };
      $.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
        for (let t of ret.argList) {
          if (t.typeId == 2066) this.enablePlCardVenueConf = t.typeValue === "true";
        }
      });
    },

    queryVenueList() {
      if (!this.vb.isSelect || this.vb.venueList || this.selectCardIndex === null) return;

      let args = {
        cardId: this.memberCardList[this.selectCardIndex].cardId
      };
      $.Req.service($.SvName.PL_CARD_VENUE_CONF_QUERY, args, ret => {
        this.vb.vaId = null;
        this.vb.venueId = null;
        this.vb.venueList = ret.venueList;
        this.vb.vaId = null;
        this.vb.vaList = null;
      }, true);
    },

    queryVenueArea() {
      let ps = this.pcScheduleList[this.selectPsIdx];
      let selectTime = this.times[this.selectTimeIdx];
      let lessonBeginTime = selectTime[0] * 100 + selectTime[1];
      let lessonTimeStr = selectTime[0] + ":" + selectTime[1] + (selectTime[1] < 10 ? "0" : "");
      let beginTimeObj = Date.new($.Util.formatDate(this.bookingDate) + " " + lessonTimeStr + ":00");
      let endTimeObj = new Date(beginTimeObj.getTime() + 60000 * ps.duration);
      let lessonEndTime = endTimeObj.getHours() * 100 + endTimeObj.getMinutes();
      let args = {
        venueId: this.vb.venueId,
        cardId: this.memberCardList[this.selectCardIndex].cardId,
        bookingDate: this.bookingDate,
        beginTime: lessonBeginTime,
        endTime: lessonEndTime
      };
      $.Req.service($.SvName.VENUE_AREA_QUERY_BY_PL_BOOKING, args, ret => {
        this.vb.vaList = ret.vaList;
        this.vb.bookingTimesList = [];
        this.vb.bookingHourList = [];
        for (let t of ret.bookingTimeValList) {
          if (t % 100 === 0) this.vb.bookingHourList.push(parseInt(t / 100) + "-1");else this.vb.bookingHourList.push(parseInt(t / 100) + "-2");
          let end = t + 30;
          if (end % 100 == 80) {
            end += 40;
          }
          this.vb.bookingTimesList.push([$.Util.formatTime(t), $.Util.formatTime(end)]);
        }
      }, true);
    }
  }
});

/***/ }),

/***/ 1157:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		lessonId: {
			type: Number,
			required: true
		},
		optType: { // 1-预约，2-签到
			type: Number,
			required: true
		},
		afterSubmit: {
			type: Function,
			default() {
				return {};
			}
		},
		onClose: {
			type: Function,
			default() {
				return {};
			}
		}
	},

	data() {
		return {
			g: window.$,
			today: new Date(),
			queryNo: null,
			member: null,
			queryError: null,
			memberCardList: null,
			password: null,
			selectCardIndex: null,
			cardPaymentConf: {},
			lesson: null,
			memberLesson: null,
			submitLoading: false,
			paymentCount: 1,
			OPT_TYPE: {
				BOOKING: 1, CHECKIN: 2
			},
			pos: {
				rows: null,
				cols: null,
				positions: null,
				usedPositionList: [],
				selectPos: null,
				selectPosArr: [],
				selections: {}
			},
			memberList: null,
			hasMemberCardNo: false,
			targetType: 'member', // member, cust
			custList: null,
			cust: null,
			hideInvalidCards: null
		};
	},

	computed: {
		canSubmit: function () {
			if (this.optType === this.OPT_TYPE.BOOKING) {
				// 预约
				if (this.lesson.isNeedBooking) {
					//&& !this.memberLesson
					return true;
				}
			} else if (this.optType === this.OPT_TYPE.CHECKIN) {
				// 签到
				if (this.lesson.isNeedBooking && this.memberLesson && this.memberLesson.status === 1) {
					return true;
				} else if (!this.lesson.isNeedBooking) {
					return true;
				} else if (!this.memberLesson) {
					return true;
				}
			}

			return false;
		}
	},

	created() {
		if (this.defaultPhoneNo) {
			this.queryNo = this.defaultPhoneNo;
		}
	},

	methods: {
		initData() {
			this.queryNo = null;
			this.member = null;
			this.selectCardIndex = null;
			this.password = null;
			this.lesson = null;
			this.cardPaymentConf = {};
			this.memberLesson = null;
		},

		isInVacation(begin, end) {
			if (begin && end) {
				let today = new Date();
				if (today.compareDatePart(Date.new(begin)) >= 0 && today.compareDatePart(Date.new(end)) <= 0) {
					return true;
				}
			}

			return false;
		},

		doQuery() {
			if (!this.queryNo) {
				$.Msg.warning($.Lang.NO_INPUT);
				return;
			}
			this.cust = null;
			this.member = null;
			this.custList = null;
			this.memberList = null;
			this.memberLesson = null;
			this.memberCardList = null;

			if (this.targetType === 'member') this.queryMember();else if (this.targetType === 'cust') this.queryCust();
		},

		queryMember() {
			let args = {};
			if ($.Util.validatePhoneNo(this.queryNo)) {
				this.queryNoType = 'phone';
				args = { nameOrPhone: this.queryNo };
			} else {
				if (!$.Util.isInteger(this.queryNo)) {
					args = { fuzzyName: this.queryNo };
				} else {
					this.queryNoType = 'card';
					if (!$.Util.validateCardNo(this.queryNo)) {
						$.Msg.error($.Lang.CARD_NO_TOO_LONG);
						return;
					}
					args = { cardNo: this.queryNo };
				}
			}
			args.needPhoneSuffix = true;
			$.Req.service($.SvName.MEMBER_ADV_QUERY, args, ret => {
				this.member = null;
				if (!ret || !ret.memberList || ret.memberList.length === 0) {
					if (this.queryNoType === 'phone') {
						this.queryError = "不存在手机号为【{0}】的会员，请检查手机号是否正确".format(this.queryNo);
					} else if (!$.Util.isInteger(this.queryNo)) {
						this.queryError = "不存在姓名为【{0}】的会员，请检查姓名是否正确".format(this.queryNo);
					} else {
						this.queryError = "不存在卡号为【{0}】的会员，请检查卡号是否正确".format(this.queryNo);
					}
					return;
				}
				this.queryError = null;
				if (ret.memberList.length === 1) {
					this.memberList = null;
					this.member = ret.memberList[0];
					this.doProcessAfterQueryMember();
				} else {
					this.memberList = ret.memberList;
				}
			}, true);
		},

		queryCust() {
			let args = {};
			if ($.Util.validatePhoneNo(this.queryNo)) {
				args = { phoneNo: this.queryNo };
			} else {
				args = { name: this.queryNo };
			}

			$.Req.service($.SvName.CUST_QUERY, args, ret => {
				this.cust = null;
				if (ret.cust) {
					ret.custList = [ret.cust];
				}
				if (!ret || !ret.custList || ret.custList.length === 0) {
					if (args.phoneNo) {
						this.queryError = "不存在手机号为【{0}】的客户，请检查手机号是否正确".format(this.queryNo);
					} else {
						this.queryError = "不存在姓名为【{0}】的客户，请检查姓名否正确".format(this.queryNo);
					}
					return;
				}
				this.queryError = null;
				if (ret.custList.length === 1) {
					this.custList = null;
					this.cust = ret.custList[0];
					this.doProcessAfterQueryCust();
				} else {
					this.custList = ret.custList;
				}
			}, true);
		},

		doProcessAfterQueryMember() {
			if (this.member.birthdayDate) {
				this.member.birthDayDesc = parseInt(this.member.birthdayDate / 100) + "月" + this.member.birthdayDate % 100 + '日';
				if (parseInt(new Date().format('MMdd')) === this.member.birthdayDate) {
					this.member.birthDayDesc += ' <b class="red">（今日生日）</b>';
				}
			}
			this.member.memberPhotoUrl = $.Util.getImgUrl(this.member.avatarPathname, 200, 200, 'EEEEEE');

			this.queryLesson(() => {
				this.queryMemberLesson();
			});
		},

		doProcessAfterQueryCust() {
			this.queryLesson(() => {
				this.queryCustLesson();
			});
		},

		queryMemberCard() {
			this.selectCardIndex = null; // init
			$.Req.service($.SvName.MEMBER_CARD_QUERY, { memberId: this.member.memberId }, ret => {
				this.memberCardList = ret.memberCardList;
				let ckinCnt = 0;
				let i = 0;
				let firstCkinCardIdx = -1;
				this.hasMemberCardNo = false;
				for (let mc of this.memberCardList) {
					if (mc.cardNo && this.queryNoType === 'card' && parseInt(this.queryNo) === parseInt(mc.cardNo)) {
						this.hasMemberCardNo = true;
						mc.isFind = true;
					}

					let checkRet = this.checkMemberCard(mc);
					mc.canSelect = checkRet[0];
					if (mc.canSelect) {
						ckinCnt++;
						if (firstCkinCardIdx < 0) firstCkinCardIdx = i;
					} else {
						mc.error = checkRet[1];
					}
					i++;
				}
				if (ckinCnt >= 1) {
					this.selectCardIndex = firstCkinCardIdx;
				}
				this.hideInvalidCards = ret.memberCardList && ret.memberCardList.length > 5;
			});
		},

		queryMemberLesson() {
			let args = {
				memberId: this.member.memberId,
				lessonId: this.lessonId,
				page: 1
			};
			this.memberCardList = null; // init
			$.Req.service($.SvName.MEMBER_GROUP_LESSON_QUERY, args, ret => {
				if (ret.memberLessonList && ret.memberLessonList.length >= 1) {
					this.memberLesson = ret.memberLessonList[0];
				} else {
					this.memberLesson = null;
				}
				this.queryMemberLessonPosition();
				this.queryMemberCard();
			});
		},

		queryCustLesson() {
			let args = {
				custId: this.cust.custId,
				lessonId: this.lessonId,
				page: 1
			};
			$.Req.service($.SvName.MEMBER_GROUP_LESSON_QUERY, args, ret => {
				if (ret.memberLessonList && ret.memberLessonList.length >= 1) {
					this.memberLesson = ret.memberLessonList[0];
				} else {
					this.memberLesson = null;
				}
				this.queryMemberLessonPosition();
			});
		},

		queryLesson(callback) {
			let args = {
				lessonId: this.lessonId
			};

			$.Req.service($.SvName.LESSON_QUERY, args, ret => {
				if (!ret || !ret.lesson) {
					$.Msg.error($.Lang.NOT_FOUND_RECORD);
					return;
				}
				this.lesson = ret.lesson;
				this.setCardPaymentConf();
				if (callback) callback();
			});
		},

		setCardPaymentConf() {
			if (this.lesson.cardPaymentConf && this.lesson.cardPaymentConf.length > 0) {
				let records = this.lesson.cardPaymentConf.split(',');
				for (let r of records) {
					let [cardId, payment] = r.split(':');
					this.cardPaymentConf[cardId] = payment;
				}
			} else {
				this.cardPaymentConf = null;
			}
		},

		formatTime(timeId) {
			return parseInt(timeId / 100) + ':' + (timeId + '').substr(-2, 2);
		},

		checkMemberCard(mc) {
			let now = new Date();

			let ret = $.MemberLib.checkMemberCard(mc, this.lesson.beginTime, this.lesson.endTime, Date.new(this.lesson.lessonDate));
			if (!ret[0]) {
				return ret;
			}

			if (!this.cardPaymentConf) {
				// 无需计费
				return [true, null];
			}

			if (!(mc.cardId in this.cardPaymentConf)) {
				// 该课程未设置本卡
				return [false, '不在本课计费卡范围内'];
			}

			// 检查余额
			let cardPayment = this.cardPaymentConf[mc.cardId];
			if (mc.cardType === 1) {
				// 期限卡
				if (mc.endDate) {
					if (now.compareDatePart(Date.new(mc.endDate)) > 0) {
						return [false, '会员卡已过期'];
					}
				}
			} else if (mc.cardType === 2) {
				// 次卡
				if (mc.currentTimes - cardPayment < 0) {
					return [false, '剩余次数不足'];
				}
			} else if (mc.cardType === 3) {
				// 储值卡
				if (mc.currentAmount - cardPayment < 0) {
					return [false, '剩余金额不足'];
				}
			}

			return [true, null];
		},

		submitForMember() {
			// 未预约的签到需要验证密码
			if (this.optType === 2 && !this.memberLesson && !this.password && this.member && !this.member.authGroupLessonCheckin) {
				$.Dlg.error('请会员输入系统登录密码，以备校验。');
				return;
			}

			if (this.optType === 1 || !this.memberLesson) {
				if (this.memberCardList && this.memberCardList.length > 0) {
					if (this.selectCardIndex === null) {
						$.Dlg.error('请选择一张会员卡');
						return;
					} else if (this.memberCardList[this.selectCardIndex].cardType !== 1 && !this.paymentCount) {
						$.Dlg.error('人数必须大于0');
						return;
					}

					if (this.lesson.maxStudents > this.lesson.bookings && this.pos.rows && this.pos.cols) {
						if (this.paymentCount === 1) {
							if (this.pos.selectPos === null) {
								$.Msg.error('请选择一个上课位置');
								return;
							}
						} else {
							if (this.pos.selectPosArr.length !== this.paymentCount) {
								$.Msg.error('选择的位置数必须为 {0} 个'.format(this.paymentCount));
								return;
							}
						}
					}
				} else {
					$.Dlg.error('请选择会员卡');
				}
			}

			let msg = this.optType === 1 ? '确定代预约吗？' : '确定代签到吗？';
			if (confirm(msg)) {
				let args = {
					lessonId: this.lessonId,
					memberId: this.member.memberId,
					optType: this.optType,
					courseType: 1,
					paymentCount: this.paymentCount,
					positions: this.pos.selectPosArr
				};
				if (this.selectCardIndex !== null) {
					args.mcId = this.memberCardList[this.selectCardIndex].mcId;
				} else if (this.memberLesson) {
					args.mcId = this.memberLesson.mcId;
				}

				if (this.optType === 2 && this.password) {
					args.passwdMd5 = $.Util.md5(this.password);
				}
				if (this.optType == 2) {
					args.isAppendCheckin = true;
				}
				if (this.optType === 1) {
					args.checkcode = $.MemberLib.getCheckcodeForGlBooking(args.mcId, args.memberId, this.lessonId);
				}

				this.submitLoading = true;
				$.Req.service($.SvName.MEMBER_LESSON_OPERATE, args, ret => {
					this.submitLoading = false;
					if (this.afterSubmit) {
						this.initData();
						this.afterSubmit();
					}
				}, false, err => {
					this.submitLoading = false;
					$.Dlg.error(err);
				});
			}
		},

		submitForCust() {
			if (this.optType === 1 || !this.memberLesson) {
				if (this.lesson.maxStudents > this.lesson.bookings && this.pos.rows && this.pos.cols) {
					if (this.pos.selectPos === null) {
						$.Msg.error('请选择一个上课位置');
						return;
					}
				}
			}

			let msg = this.optType === 1 ? '确定代预约吗？' : '确定代签到吗？';
			if (!confirm(msg)) return;

			let args = {};
			let svName = null;
			if (!this.memberLesson || this.optType === 1) {
				args = {
					lessonId: this.lessonId,
					custId: this.cust.custId,
					positions: this.pos.selectPosArr
				};
			}
			if (this.optType === 1) {
				svName = $.SvName.CUST_GC_LESSON_BOOKING;
			} else {
				svName = $.SvName.CUST_GC_LESSON_CHECKIN;
				if (this.memberLesson) {
					args = { lessonId: this.lessonId, mlId: this.memberLesson.mlId };
				}
			}
			this.submitLoading = true;
			$.Req.service(svName, args, ret => {
				this.submitLoading = false;
				if (this.afterSubmit) {
					this.initData();
					this.afterSubmit();
				}
			}, false, err => {
				this.submitLoading = false;
				$.Dlg.error(err);
			});
		},

		queryMemberLessonPosition(refresh = false) {
			let args = { lessonId: this.lessonId };
			$.Req.service($.SvName.MEMBER_LESSON_POSITION_QUERY, args, ret => {
				this.pos.selections = {};
				this.pos.selectPos = null;
				this.pos.selectPosArr = [];
				this.pos.rows = ret.positionRows;
				this.pos.cols = ret.positionCols;
				this.pos.usedPositionList = ret.positionList ? ret.positionList : [];
				this.pos.positions = {};
				if (this.pos.rows && this.pos.cols && ret.groundPositions) {
					let rows = ret.groundPositions.split(';');
					let i = 0,
					    j = 0;
					for (let r of rows) {
						i++;
						let cols = r.split(',');
						j = 0;
						for (let c of cols) {
							j++;
							if (c) {
								this.pos.positions[i + '-' + j] = c;
							}
						}
					}
				}
				if (refresh) $.Msg.info($.Lang.REFRESH_DONE);
			}, refresh);
		},

		selectPosition(position) {
			if (position && !this.pos.usedPositionList.contains(position)) {
				if (this.paymentCount > 1) {
					if (this.pos.selectPosArr.contains(position)) {
						this.pos.selectPosArr.removeValue(position);
						this.$set(this.pos.selections, position, false);
					} else {
						if (this.pos.selectPosArr.length > this.paymentCount - 1) {
							$.Msg.error('选择的位置数不能超过 {0} 个'.format(this.paymentCount));
							return;
						}
						this.pos.selectPosArr.push(position);
						this.$set(this.pos.selections, position, true);
					}
				} else if (this.pos.selectPos !== position) {
					if (this.pos.selectPos) {
						this.$set(this.pos.selections, this.pos.selectPos, false);
					}
					this.$set(this.pos.selections, position, true);
					this.pos.selectPos = position;
					this.pos.selectPosArr = [position];
				}
			}
		},

		handleClose() {
			this.initData();
			if (this.onClose) this.onClose();
		},

		selectMember(m) {
			this.member = m;
			this.queryNo = m.name;
			this.memberList = null;
			this.doProcessAfterQueryMember();
		},

		selectCust(c) {
			this.cust = c;
			this.queryNo = c.name;
			this.custList = null;
			this.doProcessAfterQueryCust();
		},

		getCardPaymentDesc(cardType, cardId) {
			if (this.cardPaymentConf) {
				let cardPayment = this.cardPaymentConf[cardId];
				if (cardType === 1) return '<span class="gray">期限卡不单独计费</span>';
				if (cardType === 2) return '每次计费 <b>{0}</b> 次'.format(cardPayment);else if (cardType === 3) return '每次计费 <b>{0}</b> 元'.format(cardPayment);else return '';
			} else {
				return '<span class="green">本节课不计费</span>';
			}
		},

		altCardVacation(mc) {
			if (!confirm('确定提前销假吗？ 确定后会将请假结束日期自动修改到昨天。')) {
				return;
			}

			let args = {
				mcId: mc.mcId,
				vacationEnd: new Date(new Date().getTime() - 24 * 3600 * 1000)
			};
			$.Req.service($.SvName.MEMBER_CARD_VACATION_UPDATE, args, (ret, systime) => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryMemberCard();
			}, true);
		}
	}
});

/***/ }),

/***/ 1163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_tenant_nav_vue__ = __webpack_require__(1114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_tenant_nav_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_tenant_nav_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { TenantNav: __WEBPACK_IMPORTED_MODULE_0__components_tenant_nav_vue___default.a },
	data() {
		return {
			g: $,
			memberCntStatList: null,
			memberCntStatSum: null
		};
	},

	created() {
		this.statShopMemberCnt();
	},
	methods: {
		statShopMemberCnt() {
			$.Req.service($.SvName.SHOP_MEMBER_CNT_STAT, {}, ret => {
				this.memberCntStatList = ret.statList;
				this.memberCntStatSum = ret.sumStat;
			}, true);
		}
	}
});

/***/ }),

/***/ 1167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".valid[data-v-14998947]{color:#0d9531}.invalid[data-v-14998947]{color:orange}", ""]);

// exports


/***/ }),

/***/ 1170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".-glr- .subtit[data-v-4910629c]{margin-left:20px;font-size:12px;font-weight:400;color:#aaa}.-glr- .memb-list .photo[data-v-4910629c]{width:45px;height:45px;display:inline-block;border-radius:50%}.-glr- .memb-list .advisor[data-v-4910629c]{padding-top:8px;color:#999}.-glr- .memb-list .advisor i[data-v-4910629c]{font-size:12px;padding-right:2px}.-glr- .spt[data-v-4910629c]{color:#ccc;padding:0 6px}.-glr- .hd .opt[data-v-4910629c]{margin-left:15px}.-glr- .chkin button[data-v-4910629c],.-glr- .hd .opt button[data-v-4910629c]{height:26px}.-glr- .course-info[data-v-4910629c]{padding:12px 0 20px 15px;line-height:1}.-glr- .course-info li[data-v-4910629c]{display:inline-block;font-size:13px}.-glr- .course-info li[data-v-4910629c]:after{content:\"\\2022\";padding:0 18px;color:#3bb4f2}.-glr- .course-info li[data-v-4910629c]:last-child:after{content:\"\"}.-glr- .course-info .spt[data-v-4910629c]{padding:0 10px;color:#ddd}.-glr- .course-info label[data-v-4910629c]{color:#aaa;padding-right:3px}.-glr- .course-info .status-end[data-v-4910629c]{font-size:32px;color:#179b16;position:relative;top:5px;padding-left:5px}.-glr- .course-info .status-not-end[data-v-4910629c]{font-size:30px;color:red;position:relative;top:5px;padding-left:5px}.-glr- .no-records[data-v-4910629c]{background:#fafafa;text-align:center;padding:20px;color:#aaa}.-submit[data-v-4910629c]{padding-top:25px;text-align:center}.-submit button[data-v-4910629c]{width:120px}.class-memb[data-v-4910629c]{margin-bottom:15px}.class-memb .-hd[data-v-4910629c]{height:50px;line-height:50px;background:#fafafa;padding:0 10px;font-size:13px;border-bottom:1px solid #eee}.class-memb .memblist[data-v-4910629c]{clear:both;background:#f5f5f5;padding:8px}.class-memb .memblist img[data-v-4910629c]{width:75px;height:75px;line-height:75px;border-radius:50%}.class-memb .memblist li[data-v-4910629c]{background:#fff;margin:4px 5px;border-radius:3px;width:248px;display:inline-block;padding:9px;border:1px solid #fff}.class-memb .memblist li .name[data-v-4910629c]{font-size:15px;display:block;padding:2px 0 0 3px;height:18px;line-height:1;max-width:120px;overflow:hidden}.class-memb .memblist li.opt-0[data-v-4910629c]{border-color:#ccc}.class-memb .memblist li.opt-1[data-v-4910629c]{border-color:#ffb229}.class-memb .memblist li.opt-2[data-v-4910629c]{border-color:#ed6a39}.class-memb .memblist li.opt-3[data-v-4910629c]{border-color:#5ac15a}.class-memb .memblist .opts[data-v-4910629c]{margin-top:15px}.class-memb .memblist .opts label[data-v-4910629c]{padding:4px 2px}.class-memb .memblist .opts .icon-edit[data-v-4910629c]{font-size:13px;color:#777}.class-memb .memblist .opts .icon-edit[data-v-4910629c]:hover{color:red}.class-memb .memblist .help[data-v-4910629c]{padding:5px 0 12px 10px}.class-memb .memblist .help dd[data-v-4910629c]{display:inline-block;padding-right:10px}.class-memb .memblist .help dd[data-v-4910629c]:after{content:\"|\";color:#d0d0d0;padding-left:12px}.class-memb .memblist .help dd[data-v-4910629c]:last-child:after{content:\"\"}.class-memb .memblist .help .opt-0[data-v-4910629c]{color:gray}.class-memb .memblist .help .opt-1[data-v-4910629c]{color:orange}.class-memb .memblist .help .opt-2[data-v-4910629c]{color:#ff4500}.class-memb .memblist .help .opt-3[data-v-4910629c]{color:green}.lesson-menus[data-v-4910629c]{text-align:left;margin:0 0 15px;border-bottom:1px solid #e4e4e4;background:#eee;padding:2px 10px 0;line-height:40px}.lesson-menus a[data-v-4910629c]{display:inline-block}.lesson-menus .spt[data-v-4910629c]{padding:0 15px}.opts .memb-vacation[data-v-4910629c]{color:#777}.opts .memb-vacation[data-v-4910629c]:hover{color:red}.opts .memb-vacation i.iconfont[data-v-4910629c]{font-size:14px;color:#777}", ""]);

// exports


/***/ }),

/***/ 1171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".-lesson-opt[data-v-4e7fda39]{padding:5px}.-lesson-opt .query-zone[data-v-4e7fda39]{background:#eee;padding:6px}.-lesson-opt .query-zone table[data-v-4e7fda39]{width:100%}.-lesson-opt .query-zone table td.hd[data-v-4e7fda39]{padding-right:4px}.-lesson-opt .query-zone .query-input[data-v-4e7fda39]{height:32px;line-height:32px;font-size:16px;font-weight:700;border:1px solid #d7dde4;width:100%;padding:0 10px;background:#fff}.-lesson-opt .err[data-v-4e7fda39]{font-weight:700;color:#d82400;margin:10px 0;font-size:14px;text-align:center;padding:10px;background:#fafad2}.-lesson-opt section[data-v-4e7fda39]{clear:both;margin-bottom:15px}.-lesson-opt section.border[data-v-4e7fda39]{border:1px solid #d7dde4;border-radius:2px}.-lesson-opt .member[data-v-4e7fda39]{padding:8px}.-lesson-opt .member table[data-v-4e7fda39]{width:100%}.-lesson-opt .member .photo[data-v-4e7fda39]{vertical-align:middle}.-lesson-opt .member .photo img[data-v-4e7fda39]{width:105px;height:100px;border:0}.-lesson-opt .member .name[data-v-4e7fda39]{font-size:26px;padding-right:15px}.-lesson-opt .member .detail[data-v-4e7fda39]{margin:15px 0 0;padding:18px 0 0;border-top:1px dashed #ddd}.-lesson-opt .lesson[data-v-4e7fda39]{padding:15px 0;line-height:1.5}.-lesson-opt .lesson li[data-v-4e7fda39]{display:inline;padding:0 10px;border-right:1px solid #e0e0e0}.-lesson-opt .lesson li[data-v-4e7fda39]:last-child{border:0}.-lesson-opt .passwd[data-v-4e7fda39]{background:#f0f0f0;padding:8px}.-lesson-opt .passwd .warn[data-v-4e7fda39]{margin-left:15px;color:orange}.-lesson-opt .passwd .warn i[data-v-4e7fda39]{padding-right:4px}.-lesson-opt .passwd .input[data-v-4e7fda39]{width:160px;display:inline-block}.-lesson-opt .submit[data-v-4e7fda39]{padding:5px 0}.-lesson-opt .submit .primary[data-v-4e7fda39]{width:90px;margin-left:15px}.-lesson-opt .submit .payment-cnt[data-v-4e7fda39]{width:70px;text-align:center;font-weight:700;margin:0 6px 0 10px;height:28px}.-lesson-opt .submit .tips[data-v-4e7fda39]{color:#999;padding-left:5px}.-lesson-opt .query-opt[data-v-4e7fda39]{padding:5px 0 0;margin:0}.-lesson-opt .query-opt button[data-v-4e7fda39]{margin:0 7px;width:100px}.-lesson-opt .postbl[data-v-4e7fda39]{padding:15px}.-lesson-opt .postbl .-tit[data-v-4e7fda39]{line-height:20px;height:20px;margin-bottom:10px;font-size:13px;font-weight:700}.-lesson-opt .postbl .-tit .spt[data-v-4e7fda39]{padding:0 12px;font-weight:400;font-size:12px}.-lesson-opt .postbl .-tit a[data-v-4e7fda39]{font-size:12px;font-weight:400;border-radius:10px;background:#f2f2f2;padding:3px 15px}.-lesson-opt .postbl td div[data-v-4e7fda39]{height:30px;line-height:30px;width:60px;display:inline-block;text-align:center;border:1px solid #e4e4e4;background:#f0f0f0;margin:5px;color:#222;box-shadow:3px 3px 3px #eee}.-lesson-opt .postbl .empty[data-v-4e7fda39]{border:1px solid #e4e4e4;background:#fff;cursor:pointer}.-lesson-opt .postbl .on[data-v-4e7fda39]{border-color:orange}.-lesson-opt .memb-list[data-v-4e7fda39]{padding:10px;margin:10px 0;border:1px solid #eee}.-lesson-opt .memb-list .tit[data-v-4e7fda39]{padding-bottom:10px;color:orange}.-lesson-opt .memb-list .name[data-v-4e7fda39]{font-size:14px;color:#444}.-lesson-opt .memb-list li[data-v-4e7fda39]{display:inline-block;margin:3px;line-height:1;padding:10px;background:#eee;cursor:pointer;font-size:12px;color:#999}.-lesson-opt .memb-list li[data-v-4e7fda39]:hover{background:#ddd}.opts li[data-v-4e7fda39]{display:block;padding:0 0 5px}.opts li[data-v-4e7fda39]:last-child{padding:0}", ""]);

// exports


/***/ }),

/***/ 1172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".vb .mytbl[data-v-6a8eb7f6]{margin:0 0 25px}.vb label[data-v-6a8eb7f6]{padding:3px}.vb label[data-v-6a8eb7f6]:hover{font-weight:700}.vb .vb-times span[data-v-6a8eb7f6]:after{content:\"\\3001\"}.vb .vb-times span[data-v-6a8eb7f6]:last-child:after{content:\"\"}.booked-pl[data-v-6a8eb7f6]{margin:10px 5px 5px}.bookings[data-v-6a8eb7f6]{min-height:480px}.bookings .remark[data-v-6a8eb7f6]{margin:10px 0;color:#555;background:#f2f2f2;padding:20px 15px}.bookings .remark span[data-v-6a8eb7f6]{padding:0 8px;color:#aaa}.bookings .memb-list[data-v-6a8eb7f6]{padding:10px;margin:10px 0;border:1px solid #eee}.bookings .memb-list .tit[data-v-6a8eb7f6]{padding-bottom:10px;color:orange}.bookings .memb-list .name[data-v-6a8eb7f6]{font-size:14px;color:#444}.bookings .memb-list li[data-v-6a8eb7f6]{display:inline-block;margin:3px;line-height:1;padding:10px;background:#eee;cursor:pointer;font-size:12px;color:#aaa}.bookings .memb-list li[data-v-6a8eb7f6]:hover{background:#ddd}.bookings .mytbl .on[data-v-6a8eb7f6]{color:#ff4500}.bookings .tblform[data-v-6a8eb7f6]{border:1px solid #e3e8ee;margin:15px 0;padding:10px}.bookings .tblform table[data-v-6a8eb7f6]{width:100%}.bookings .tblform th[data-v-6a8eb7f6]{padding:5px;text-align:center;width:118px;background:#f3f3f3;border-bottom:2px solid #fff}.bookings .tblform td[data-v-6a8eb7f6]{padding:5px 10px}.bookings .tblform .desc[data-v-6a8eb7f6]{clear:both;border-top:1px dotted #ddd;padding-top:10px;margin-top:15px}.bookings .date-list[data-v-6a8eb7f6],.bookings .tblform .desc ul[data-v-6a8eb7f6]{display:inline-block}.bookings .date-list li[data-v-6a8eb7f6]{display:inline-block;border-right:1px solid #e2e2e2;padding:0 10px}.bookings .date-list li[data-v-6a8eb7f6]:last-child{border:0}.bookings .submit[data-v-6a8eb7f6]{margin:10px 0 -15px}.bookings .submit u[data-v-6a8eb7f6]{text-decoration:none;padding:0 6px;color:#bbb;font-weight:400}.bookings .submit .sum[data-v-6a8eb7f6]{font-size:14px;font-weight:700}.bookings .card-tips[data-v-6a8eb7f6]{padding:10px 0;color:orange}.bookings .booked-pl th[data-v-6a8eb7f6],.entry-checkin .member .photo[data-v-6a8eb7f6]{text-align:left}.entry-checkin .member .photo img[data-v-6a8eb7f6]{width:100px;height:100px}.opts li[data-v-6a8eb7f6]{display:block;padding:0 0 5px}.opts li[data-v-6a8eb7f6]:last-child{padding:0}", ""]);

// exports


/***/ }),

/***/ 1178:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1167);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("41788d8f", content, true, {});

/***/ }),

/***/ 1181:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1170);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("793a35a6", content, true, {});

/***/ }),

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1171);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("487099f2", content, true, {});

/***/ }),

/***/ 1183:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1172);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("bb06eb4c", content, true, {});

/***/ }),

/***/ 1189:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1183)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1156),
  /* template */
  __webpack_require__(1202),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6a8eb7f6",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1197:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('tenant-nav', {
    attrs: {
      "menu": "tenant-stat"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "tenant-stat",
      "page": "tenant-stat-member"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [(_vm.memberCntStatSum) ? _c('section', [_c('table', {
    staticClass: "mytbl"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.memberCntStatList), function(s) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(s.shopName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.memberCnt))]), _vm._v(" "), _c('td', {
      staticClass: "valid"
    }, [_vm._v(_vm._s(s.validMemberCnt))]), _vm._v(" "), _c('td', {
      staticClass: "valid"
    }, [_vm._v(_vm._s(_vm.g.Util.round((100 * s.validMemberCnt / s.memberCnt).toFixed(2))) + "%")]), _vm._v(" "), _c('td', {
      staticClass: "invalid"
    }, [_vm._v(_vm._s(s.invalidMemberCnt))]), _vm._v(" "), _c('td', {
      staticClass: "invalid"
    }, [_vm._v(_vm._s(_vm.g.Util.round((100 * s.invalidMemberCnt / s.memberCnt).toFixed(2))) + "%")])])
  }), _vm._v(" "), _c('tr', {
    staticClass: "bold"
  }, [_c('td', [_vm._v("合计")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.memberCntStatSum.memberCnt))]), _vm._v(" "), _c('td', {
    staticClass: "valid"
  }, [_vm._v(_vm._s(_vm.memberCntStatSum.validMemberCnt))]), _vm._v(" "), _c('td', {
    staticClass: "valid"
  }, [_vm._v(_vm._s(_vm.g.Util.round((100 * _vm.memberCntStatSum.validMemberCnt / _vm.memberCntStatSum.memberCnt).toFixed(2))) + "%")]), _vm._v(" "), _c('td', {
    staticClass: "invalid"
  }, [_vm._v(_vm._s(_vm.memberCntStatSum.invalidMemberCnt))]), _vm._v(" "), _c('td', {
    staticClass: "invalid"
  }, [_vm._v(_vm._s(_vm.g.Util.round((100 * _vm.memberCntStatSum.invalidMemberCnt / _vm.memberCntStatSum.memberCnt).toFixed(2))) + "%")])])], 2)]) : _vm._e()])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("门店")]), _vm._v(" "), _c('th', [_vm._v("会员总数")]), _vm._v(" "), _c('th', [_vm._v("有效会员数")]), _vm._v(" "), _c('th', [_vm._v("有效会员率")]), _vm._v(" "), _c('th', [_vm._v("无效会员数")]), _vm._v(" "), _c('th', [_vm._v("无效会员率")])])
}]}

/***/ }),

/***/ 1200:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.lesson) ? _c('div', {
    staticClass: "-glr-"
  }, [(!_vm.showLessonInfo) ? _c('div', {
    staticClass: "lesson-menus"
  }, [_c('b', [_vm._v("上课记录")]), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v(" "), _c('a', {
    attrs: {
      "target": "_blank",
      "href": '#/group-lesson-edit/' + _vm.lesson.lessonId
    }
  }, [_vm._v("本节课基本信息 "), _c('i', {
    staticClass: "iconfont icon-link default-font gray"
  })]), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v(" "), _c('a', {
    attrs: {
      "target": "_blank",
      "href": '#/group-lesson-review/' + _vm.lesson.lessonId
    }
  }, [_vm._v("学员上课评价 "), _c('i', {
    staticClass: "iconfont icon-link default-font gray"
  })]), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v(" "), _c('a', {
    attrs: {
      "target": "_blank",
      "href": '#/group-lesson-member-cancel-log/' + _vm.lesson.lessonId
    }
  }, [_vm._v("取消日志 "), _c('i', {
    staticClass: "iconfont icon-link default-font gray"
  })])]) : _vm._e(), _vm._v(" "), (_vm.showLessonInfo) ? _c('section', {
    staticClass: "course-info"
  }, [_c('ul', [_c('li', [_c('span', {
    staticClass: "bigger"
  }, [_vm._v(_vm._s(_vm.lesson.lessonTitle))])]), _vm._v(" "), _c('li', [_c('label', [_vm._v("教练：")]), _vm._v(_vm._s(_vm.lesson.coachName))]), _vm._v(" "), _c('li', [_c('label', [_vm._v("上课时间：")]), _c('span', {
    staticClass: "orangered"
  }, [_vm._v(_vm._s(_vm.g.Util.formatDate(_vm.lesson.lessonDate, false)))]), _vm._v("  \n\t\t\t\t\t" + _vm._s(_vm.g.Util.formatTime(_vm.lesson.beginTime)) + " ~ " + _vm._s(_vm.g.Util.formatTime(_vm.lesson.endTime)) + "\n\t\t\t\t")]), _vm._v(" "), (_vm.lesson.checkinTime) ? _c('li', [_c('label', [_vm._v("教练签到：")]), _vm._v(_vm._s(_vm.lesson.checkinTime))]) : _vm._e(), _vm._v(" "), (_vm.lesson.status === 9) ? _c('li', [_c('i', {
    staticClass: "iconfont status-end icon-finish0"
  })]) : _c('li', [_c('i', {
    staticClass: "iconfont status-not-end icon-unfinish-1"
  })])])]) : _vm._e(), _vm._v(" "), (_vm.mlMemberList.length > 0) ? _c('section', {
    staticClass: "g-dlg class-memb"
  }, [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("\n\t\t\t\t\t固定班级非预约学员"), (_vm.canCheckinClassMembers) ? [_vm._v("上课点名")] : _vm._e(), _vm._v(" "), _c('help', [_vm._v("\n\t\t\t\t\t\t系统自动选择会员卡计费的顺序是：期限卡 / 次数卡/ 储值卡；如果同卡种办了多张卡，则按照创建卡的先后顺序。\n\t\t\t\t\t\t"), _c('ul', [_c('li', [_vm._v("- 缺席：会员未到场，也未请假，但是场馆不扣费")]), _vm._v(" "), _c('li', [_vm._v("- 请假：会员未到场，事先给场馆请过假，场馆不予扣费")]), _vm._v(" "), _c('li', [_vm._v("- 扣费：会员未到场，但是按照事先协议，场馆照常扣费")]), _vm._v(" "), _c('li', [_vm._v("- 签到：会员已到场上课，场馆代签到并扣费")])])])], 2), _vm._v(" "), (_vm.canCheckinClassMembers) ? _c('div', {
    staticClass: "r"
  }, [_c('span', {
    staticClass: "opt"
  }, [(!_vm.lesson.checkinTime) ? _c('checkbox', {
    model: {
      value: (_vm.isCheckinForCoach),
      callback: function($$v) {
        _vm.isCheckinForCoach = $$v
      },
      expression: "isCheckinForCoach"
    }
  }, [_vm._v("代教练签到")]) : _vm._e(), _vm._v("\n\t\t\t\t\t\t \n\t\t\t\t\t\t"), _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.checkinClassLesson
    }
  }, [_vm._v("提交")])], 1)]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "memblist"
  }, [_c('div', {
    staticClass: "help"
  }, [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', [_c('dl', [_c('dd', {
    staticClass: "opt-0",
    attrs: {
      "title": "会员未到场，也未请假，但是场馆不扣费"
    }
  }, [_vm._v("缺席：" + _vm._s(_vm.classMembOptCnts[0]) + " 人")]), _vm._v(" "), _c('dd', {
    staticClass: "opt-1",
    attrs: {
      "title": "会员未到场，事先给场馆请过假，场馆不予扣费，也不会取消"
    }
  }, [_vm._v("请假：" + _vm._s(_vm.classMembOptCnts[1]) + " 人")]), _vm._v(" "), _c('dd', {
    staticClass: "opt-2",
    attrs: {
      "title": "会员未到场，但是按照事先协议，场馆照常扣费"
    }
  }, [_vm._v("扣费：" + _vm._s(_vm.classMembOptCnts[2]) + " 人")]), _vm._v(" "), _c('dd', {
    staticClass: "opt-3",
    attrs: {
      "title": "会员已到场上课，场馆代签到并扣费"
    }
  }, [_vm._v("签到：" + _vm._s(_vm.classMembOptCnts[3]) + " 人")])])]), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right"
    }
  }, [(_vm.canCheckinClassMembers) ? _c('checkbox', {
    on: {
      "on-change": _vm.checkAllCheckin
    },
    model: {
      value: (_vm.isCheckAllCheckin),
      callback: function($$v) {
        _vm.isCheckAllCheckin = $$v
      },
      expression: "isCheckAllCheckin"
    }
  }, [_vm._v("全选签到")]) : _vm._e()], 1)])])]), _vm._v(" "), _c('ul', _vm._l((_vm.mlMemberList), function(m) {
    return _c('li', {
      key: m.memberId,
      class: 'opt-' + _vm.memberLessonOptMap[m.memberId]
    }, [_c('table', [_c('tr', [_c('td', {
      attrs: {
        "width": "90"
      }
    }, [_c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(m.avatarPathname, 300, 300, 'EEEEEE'),
        "title": m.name
      },
      on: {
        "click": function($event) {
          return _vm.viewMember(m.memberId)
        }
      }
    })]), _vm._v(" "), _c('td', [_c('a', {
      staticClass: "name",
      on: {
        "click": function($event) {
          return _vm.viewMember(m.memberId)
        }
      }
    }, [_vm._v(_vm._s(m.name))]), _vm._v(" "), (_vm.canCheckinClassMembers) ? _c('div', {
      staticClass: "opts"
    }, [_c('radio-group', {
      on: {
        "on-change": _vm.changeClassMemberOpt
      },
      model: {
        value: (_vm.memberLessonOptMap[m.memberId]),
        callback: function($$v) {
          _vm.$set(_vm.memberLessonOptMap, m.memberId, $$v)
        },
        expression: "memberLessonOptMap[m.memberId]"
      }
    }, [_c('radio', {
      attrs: {
        "label": 0
      }
    }, [_vm._v("缺席")]), _vm._v(" "), _c('radio', {
      attrs: {
        "label": 1
      }
    }, [_vm._v("请假 "), _c('a', [_c('i', {
      staticClass: "iconfont icon-edit",
      on: {
        "click": function($event) {
          return _vm.inputMemberVacationRemark(m.memberId, m.name)
        }
      }
    })])]), _vm._v(" "), _c('radio', {
      attrs: {
        "label": 2
      }
    }, [_vm._v("扣费")]), _vm._v(" "), _c('radio', {
      attrs: {
        "label": 3
      }
    }, [_vm._v("签到")])], 1)], 1) : (_vm.editable) ? _c('div', {
      staticClass: "opts"
    }, [(!_vm.memberLessonVacationMap[m.memberId]) ? _c('a', {
      staticClass: "memb-vacation",
      on: {
        "click": function($event) {
          return _vm.openDlgForClassMemberVacation(m)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont icon-edit"
    }), _vm._v(" 请假")]) : _c('span', {
      staticClass: "orange small"
    }, [_vm._v("已请假")])]) : _vm._e()])])])])
  }), 0)])]) : _vm._e(), _vm._v(" "), _c('section', {
    class: {
      'g-dlg': !_vm.showLessonInfo
    }
  }, [(_vm.lesson.isNeedBooking || !_vm.g.Util.isEmptyArray(_vm.memberLessonList)) ? _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("会员上课明细")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('a', {
    staticClass: "gray",
    on: {
      "click": function($event) {
        return _vm.load()
      }
    }
  }, [_c('icon', {
    attrs: {
      "type": "md-refresh",
      "size": "14"
    }
  }), _vm._v(" 刷新\n\t\t\t\t\t")], 1), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v(" "), (_vm.editable) ? [_c('checkbox', {
    on: {
      "on-change": _vm.checkPrintOption
    },
    model: {
      value: (_vm.showPrintTicket),
      callback: function($$v) {
        _vm.showPrintTicket = $$v
      },
      expression: "showPrintTicket"
    }
  }, [_vm._v("显示打印小票")]), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("|")])] : _vm._e(), _vm._v(" "), (_vm.lesson.isNeedBooking) ? [_vm._v("\n\t\t\t\t\t\t最多预约人数：" + _vm._s(_vm.lesson.maxStudents) + " 人 "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("/")]), _vm._v("\n\t\t\t\t\t\t最少预约人数："), (_vm.lesson.minStudents) ? [_vm._v(_vm._s(_vm.lesson.minStudents) + " 人")] : _c('i', {
    staticClass: "gray"
  }, [_vm._v("未设置")]), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("/")]), _vm._v("\n\t\t\t\t\t\t预约人数："), _c('b', [_vm._v(_vm._s(_vm.lesson.bookings))]), _vm._v(" 人 "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("/")])] : _vm._e(), _vm._v("\n\t\t\t\t\t签到人数："), _c('b', [_vm._v(_vm._s(_vm.lesson.checkins))]), _vm._v(" 人\n\t\t\t\t\t"), (_vm.editable && _vm.canBooking && _vm.lesson.isNeedBooking) ? _c('span', {
    staticClass: "opt"
  }, [(_vm.lesson.maxStudents > _vm.lesson.bookings) ? _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.bookingForMember
    }
  }, [_vm._v("代预约")]) : _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.bookingForMember
    }
  }, [_vm._v("代会员排队")])], 1) : _vm._e(), _vm._v(" "), (_vm.editable && _vm.lesson.checkins > 0 && _vm.lesson.status < 9) ? _c('span', {
    staticClass: "opt"
  }, [_c('i-button', {
    on: {
      "click": _vm.checkinForCoach
    }
  }, [_vm._v("代教练签到")])], 1) : _vm._e()], 2)]) : _vm._e(), _vm._v(" "), (_vm.memberLessonList && _vm.memberLessonList.length > 0 && _vm.lesson) ? _c('div', {
    staticClass: "mytbl memb-list"
  }, [_c('table', {
    staticStyle: {
      "border": "0"
    }
  }, [_c('tr', [_c('th', {
    attrs: {
      "width": "150",
      "colspan": "2"
    }
  }, [_vm._v("上课学员")]), _vm._v(" "), (_vm.lesson.isNeedBooking) ? _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("预约操作人")]) : _vm._e(), _vm._v(" "), (_vm.lesson.isNeedBooking) ? _c('th', {
    attrs: {
      "width": "95"
    }
  }, [_vm._v("预约时间")]) : _vm._e(), _vm._v(" "), _c('th', {
    attrs: {
      "width": "65"
    }
  }, [_vm._v("位置")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("签到操作人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "95"
    }
  }, [_vm._v("签到时间")]), _vm._v(" "), (_vm.enableGlCheckout) ? _c('th', {
    attrs: {
      "width": "95"
    }
  }, [_vm._v("签出时间")]) : _vm._e(), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("计费会员卡")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "95"
    }
  }, [_vm._v("卡消费")]), _vm._v(" "), (_vm.editable) ? _c('th', [_vm._v("状态/操作")]) : _vm._e()]), _vm._v(" "), _vm._l((_vm.memberLessonList), function(ml, idx) {
    return _c('tr', {
      key: ml.mlId
    }, [_c('td', {
      attrs: {
        "width": "45"
      }
    }, [_c('img', {
      staticClass: "photo",
      attrs: {
        "src": _vm.g.Util.getImgUrl(ml.avatarPathname, 200, 200, 'eeeeee')
      }
    })]), _vm._v(" "), _c('td', [(ml.mcId) ? [(_vm.editable) ? _c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.viewMember(ml.memberId)
        }
      }
    }, [_vm._v(_vm._s(ml.memberName.shorten(10)))]) : _c('span', [_vm._v(_vm._s(ml.memberName.shorten(10)))]), _vm._v(" "), (ml.advisorName) ? _c('div', {
      staticClass: "advisor",
      attrs: {
        "title": "会籍顾问"
      }
    }, [_c('i', {
      staticClass: "iconfont icon-manager"
    }), _vm._v(" " + _vm._s(ml.advisorName))]) : _vm._e()] : [_c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.viewCust(ml.memberId, ml.memberName)
        }
      }
    }, [_c('span', {
      staticClass: "custflag"
    }, [_vm._v("客")]), _vm._v(_vm._s(ml.memberName))])]], 2), _vm._v(" "), (_vm.lesson.isNeedBooking) ? _c('td', [(ml.bookingUname) ? [_vm._v(_vm._s(ml.bookingUname.shorten(8)))] : _vm._e()], 2) : _vm._e(), _vm._v(" "), (_vm.lesson.isNeedBooking) ? _c('td', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(ml.bookingTime) + "\n\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), _c('td', [_vm._v(_vm._s(ml.position))]), _vm._v(" "), _c('td', [(ml.checkinUname) ? [_vm._v(_vm._s(ml.checkinUname.shorten(5)))] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(ml.checkinTime) + "\n\t\t\t\t\t\t")]), _vm._v(" "), (_vm.enableGlCheckout) ? _c('td', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(ml.checkoutTime) + "\n\t\t\t\t\t\t\t"), (ml.mlDuration) ? _c('div', {
      staticClass: "gray"
    }, [_vm._v("(" + _vm._s(ml.mlDuration) + " 分钟)")]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('td', [_vm._v(_vm._s(ml.cardName))]), _vm._v(" "), _c('td', [(ml.cardType === 1) ? [_c('span', {
      staticClass: "gray"
    }, [_vm._v("期限卡不扣费")])] : (ml.cardType === 2) ? [_vm._v(_vm._s(ml.cardPayment) + "次")] : _vm._e(), _vm._v(" "), (ml.cardType === 3) ? [_vm._v(_vm._s(ml.cardPayment) + "元")] : _vm._e(), _vm._v(" "), (ml.paymentCount > 1) ? _c('div', {
      staticClass: "gray"
    }, [_vm._v("(消费" + _vm._s(ml.paymentCount) + "人)")]) : _vm._e()], 2), _vm._v(" "), (_vm.editable) ? _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [(ml.status === 1) ? [(_vm.allowCancelBooking) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.cancelBooking(idx)
        }
      }
    }, [_vm._v("取消预约")])]) : _vm._e(), _vm._v(" "), (_vm.allowMemberCheckin) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.handleCheckin(idx)
        }
      }
    }, [_vm._v("代签到")])]) : _c('li', {
      staticClass: "gray"
    }, [_vm._v("未到签到时")])] : (ml.status === 2) ? _c('li', {
      staticClass: "green"
    }, [_vm._v("已签到")]) : (ml.status === 3) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.cancelBooking(idx)
        }
      }
    }, [_vm._v("取消排队")])]) : _vm._e(), _vm._v(" "), (ml.status === 2 && _vm.g.data.user.isShopOwner) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openCancelCheckinDlg(idx)
        }
      }
    }, [_vm._v("取消签到")])]) : _vm._e(), _vm._v(" "), (ml.status === 4 && _vm.g.data.user.isShopOwner) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openCancelCheckinDlg(idx)
        }
      }
    }, [_vm._v("取消扣费")])]) : _vm._e(), _vm._v(" "), (_vm.showPrintTicket) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.printMlTicket('gcLessonRecord_' + ml.mlId)
        }
      }
    }, [_vm._v("打印小票")])]) : _vm._e()], 2), _vm._v(" "), _c('div', {
      staticStyle: {
        "display": "none"
      },
      attrs: {
        "id": 'gcLessonRecord_' + ml.mlId
      }
    }, [_c('table', [_vm._m(0, true), _vm._v(" "), _c('tr', [_c('th', [_vm._v("会员")]), _c('td', [_vm._v(_vm._s(ml.memberName))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("课程")]), _c('td', [_vm._v(_vm._s(_vm.lesson.lessonTitle))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("上课时间")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(_vm.lesson.lessonDate))), _c('br'), _vm._v(_vm._s(_vm.g.Util.formatTime(_vm.lesson.beginTime)) + "-" + _vm._s(_vm.g.Util.formatTime(_vm.lesson.endTime)))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("上课教练")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.lesson.coachName))])]), _vm._v(" "), (ml.bookingUname) ? _c('tr', [_c('th', [_vm._v("预约人")]), _c('td', [_vm._v(_vm._s(ml.bookingUname))])]) : _vm._e(), _vm._v(" "), (ml.bookingTime) ? _c('tr', [_c('th', [_vm._v("预约时间")]), _c('td', [_vm._v(_vm._s(ml.bookingTime))])]) : _vm._e(), _vm._v(" "), (ml.checkinUname) ? _c('tr', [_c('th', [_vm._v("签到人")]), _c('td', [_vm._v(_vm._s(ml.checkinUname))])]) : _vm._e(), _vm._v(" "), (ml.checkinTime) ? _c('tr', [_c('th', [_vm._v("签到时间")]), _c('td', [_vm._v(_vm._s(ml.checkinTime))])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', [_vm._v("计费卡")]), _c('td', [_vm._v(_vm._s(ml.cardName))])]), _vm._v(" "), (ml.cardType > 1) ? _c('tr', [_c('th', [_vm._v("卡消费")]), _c('td', [_vm._v(_vm._s(ml.cardPayment) + " " + _vm._s(_vm.g.Dict.CardUnitName[ml.cardType]))])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', [_vm._v("卡剩余")]), _vm._v(" "), _c('td', [(ml.cardType === 1) ? [_vm._v(_vm._s(_vm.g.MemberLib.calcCardLeftDays(ml.mcBeginDate, ml.mcEndDate, _vm.today)) + " 天")] : (ml.cardType === 2) ? [_vm._v(_vm._s(ml.mcCurrentTimes) + " 次")] : (ml.cardType === 3) ? [_vm._v(_vm._s(ml.mcCurrentAmount) + " 元")] : _vm._e()], 2)])])])]) : _vm._e()])
  })], 2)]) : _vm._e(), _vm._v(" "), (_vm.memberLessonList && _vm.memberLessonList.length === 0) ? _c('div', {
    staticClass: "no-records"
  }, [_vm._v("\n\t\t\t\t无预约签到记录\n      ")]) : _vm._e()]), _vm._v(" "), (_vm.memberLessonVacationList && _vm.memberLessonVacationList.length) ? _c('section', {
    class: {
      'g-dlg': !_vm.showLessonInfo,
      'mt15': !_vm.showLessonInfo
    }
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "mytbl memb-list"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("会员")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "160"
    }
  }, [_vm._v("请假时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("请假操作人")]), _vm._v(" "), _c('th', [_vm._v("请假备注")]), _vm._v(" "), (_vm.editable) ? _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("操作")]) : _vm._e()]), _vm._v(" "), _vm._l((_vm.memberLessonVacationList), function(mlv) {
    return _c('tr', [_c('td', [(_vm.editable) ? _c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.viewMember(mlv.memberId)
        }
      }
    }, [_vm._v(_vm._s(mlv.memberName))]) : _c('span', [_vm._v(_vm._s(mlv.memberName))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(mlv.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(mlv.createUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(mlv.remark))]), _vm._v(" "), (_vm.editable) ? _c('td', [_c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.delMemberLessonVacation(mlv)
        }
      }
    }, [_vm._v("删除")])]) : _vm._e()])
  })], 2)])]) : _vm._e(), _vm._v(" "), _c('modal', {
    attrs: {
      "title": '团课预约 - ' + _vm.lesson.courseName,
      "width": "840",
      "styles": {
        top: '10px'
      },
      "closable": false,
      "mask-closable": false
    },
    model: {
      value: (_vm.viewGroupLessonOptDlg),
      callback: function($$v) {
        _vm.viewGroupLessonOptDlg = $$v
      },
      expression: "viewGroupLessonOptDlg"
    }
  }, [(_vm.viewGroupLessonOptDlg) ? _c('member-group-lesson-opt', {
    attrs: {
      "lesson-id": _vm.lessonId,
      "opt-type": 1,
      "after-submit": _vm.afterSubmitLessonOpt,
      "on-close": _vm.closeLessOptDlg
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员信息",
      "width": "780",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.viewMemberDlg),
      callback: function($$v) {
        _vm.viewMemberDlg = $$v
      },
      expression: "viewMemberDlg"
    }
  }, [_c('member-base-info', {
    attrs: {
      "member-id": _vm.viewMemberId
    }
  })], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "团课签到取消",
      "width": "600",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.glCheckinCancelDlg),
      callback: function($$v) {
        _vm.glCheckinCancelDlg = $$v
      },
      expression: "glCheckinCancelDlg"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 5,
      "placeholder": "请输入取消原因或备注"
    },
    model: {
      value: (_vm.checkinCancelRemark),
      callback: function($$v) {
        _vm.checkinCancelRemark = $$v
      },
      expression: "checkinCancelRemark"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    staticClass: "primary-btn",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.cancelCheckin
    }
  }, [_vm._v("提交")])], 1)], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": '客户信息 - ' + _vm.selectCustName,
      "width": "850",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.custDlgView),
      callback: function($$v) {
        _vm.custDlgView = $$v
      },
      expression: "custDlgView"
    }
  }, [(_vm.custDlgView) ? _c('cust-detail', {
    attrs: {
      "cust-id": _vm.selectCustId,
      "can-create": false
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "dlg-foot",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.custDlgView = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "固定班级学员请假",
      "width": "600",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.classMemberVacationDlg),
      callback: function($$v) {
        _vm.classMemberVacationDlg = $$v
      },
      expression: "classMemberVacationDlg"
    }
  }, [(_vm.classMemberVacationDlg) ? [_vm._v("\n\t\t\t\t请输入【" + _vm._s(_vm.selectMember.name) + "】的请假备注：\n\t\t\t\t"), _c('div', {
    staticClass: "p15"
  }, [_c('i-input', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "type": "textarea",
      "rows": 5
    },
    model: {
      value: (_vm.classMemberVacationRemark),
      callback: function($$v) {
        _vm.classMemberVacationRemark = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "classMemberVacationRemark"
    }
  })], 1)] : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "dlg-foot",
    staticStyle: {
      "border-top": "none"
    },
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submitClassMemberVacation
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.classMemberVacationDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 2)], 1) : _vm._e()
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', {
    attrs: {
      "colspan": "2",
      "align": "center"
    }
  }, [_vm._v("【团课消费小票】")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("学员请假记录")])])
}]}

/***/ }),

/***/ 1201:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-lesson-opt g-dlg"
  }, [_c('section', {
    staticClass: "query-zone"
  }, [_c('table', [_c('tr', [_c('td', {
    staticClass: "hd",
    attrs: {
      "width": "75"
    }
  }, [_c('i-select', {
    staticStyle: {
      "position": "relative",
      "top": "-2px"
    },
    model: {
      value: (_vm.targetType),
      callback: function($$v) {
        _vm.targetType = $$v
      },
      expression: "targetType"
    }
  }, [_c('i-option', {
    attrs: {
      "value": "member"
    }
  }, [_vm._v("会员")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": "cust"
    }
  }, [_vm._v("客户")])], 1)], 1), _vm._v(" "), _c('td', [(_vm.targetType === 'member') ? _c('input', {
    directives: [{
      name: "focus",
      rawName: "v-focus"
    }, {
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.queryNo),
      expression: "queryNo",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "query-input",
    attrs: {
      "type": "text",
      "title": "",
      "placeholder": "手机号  |  姓名（可模糊查） |  卡号（可刷会员卡）"
    },
    domProps: {
      "value": (_vm.queryNo)
    },
    on: {
      "keyup": function($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.doQuery()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.queryNo = $event.target.value.trim()
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }) : (_vm.targetType === 'cust') ? _c('input', {
    directives: [{
      name: "focus",
      rawName: "v-focus"
    }, {
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.queryNo),
      expression: "queryNo",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "query-input",
    attrs: {
      "type": "text",
      "title": "",
      "placeholder": "手机号  |  姓名（可模糊查）"
    },
    domProps: {
      "value": (_vm.queryNo)
    },
    on: {
      "keyup": function($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.doQuery()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.queryNo = $event.target.value.trim()
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }) : _vm._e()])])])]), _vm._v(" "), (_vm.queryError) ? _c('div', {
    staticClass: "err"
  }, [_vm._v(_vm._s(_vm.queryError))]) : _vm._e(), _vm._v(" "), (_vm.targetType === 'member') ? [(_vm.memberList) ? _c('div', {
    staticClass: "memb-list"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("请选择一个会员：")]), _vm._v(" "), _c('ul', _vm._l((_vm.memberList), function(m) {
    return _c('li', {
      on: {
        "click": function($event) {
          return _vm.selectMember(m)
        }
      }
    }, [_c('span', {
      staticClass: "name"
    }, [_vm._v(_vm._s(m.name))]), _vm._v(" "), _c('span', {
      staticClass: "subinfo"
    }, [_vm._v("（" + _vm._s(_vm.g.Dict.Sex[m.sex]) + "）")]), _vm._v(" "), _c('div', {
      staticClass: "p10"
    }, [_vm._v("手机号*******" + _vm._s(m.phoneSuffix))])])
  }), 0)]) : _vm._e()] : _vm._e(), _vm._v(" "), [(_vm.custList) ? _c('div', {
    staticClass: "memb-list"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("请选择一个客户：")]), _vm._v(" "), _c('ul', _vm._l((_vm.custList), function(c) {
    return _c('li', {
      on: {
        "click": function($event) {
          return _vm.selectCust(c)
        }
      }
    }, [_c('span', {
      staticClass: "name"
    }, [_vm._v(_vm._s(c.name))]), _vm._v(" "), _c('span', {
      staticClass: "subinfo"
    }, [_vm._v("（" + _vm._s(_vm.g.Dict.Sex[c.sex]) + "）")])])
  }), 0)]) : _vm._e()], _vm._v(" "), (_vm.queryNo && _vm.lesson) ? [(_vm.member) ? _c('section', {
    staticClass: "member border"
  }, [_c('table', [_c('tr', [_c('td', {
    staticClass: "photo",
    attrs: {
      "valign": "top",
      "width": "130"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.member.memberPhotoUrl
    }
  })]), _vm._v(" "), _c('td', {
    attrs: {
      "valign": "top"
    }
  }, [_c('span', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.member.name))]), _vm._v(" " + _vm._s(_vm.g.Dict.SexDesc[_vm.member.sex]) + "\n\t\t\t\t\t\t"), (_vm.member.birthDayDesc) ? _c('span', {
    staticClass: "pre-bar"
  }, [_vm._v("生日："), _c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.member.birthDayDesc)
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "detail"
  }, [(_vm.member.coachName) ? _c('span', {
    staticClass: "bar"
  }, [_vm._v("教练： " + _vm._s(_vm.member.coachName))]) : _vm._e(), _vm._v(" "), (_vm.member.salesName) ? _c('span', {
    staticClass: "bar"
  }, [_vm._v("销售： " + _vm._s(_vm.member.salesName))]) : _vm._e(), _vm._v(" "), (_vm.member.advisorName) ? _c('span', {
    staticClass: "bar"
  }, [_vm._v("会籍顾问： " + _vm._s(_vm.member.advisorName))]) : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t注册时间：" + _vm._s(_vm.member.createTime) + "\n\t\t\t\t\t")])])])])]) : (_vm.cust) ? _c('section', {
    staticClass: "member border"
  }, [_c('table', [_c('tr', [_c('td', {
    attrs: {
      "valign": "top"
    }
  }, [_c('span', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.cust.name))]), _vm._v(" " + _vm._s(_vm.g.Dict.SexDesc[_vm.cust.sex]) + "\n\t\t\t\t\t\t"), _c('div', {
    staticClass: "detail"
  }, [(_vm.cust.phoneNo) ? _c('span', {
    staticClass: "bar"
  }, [_vm._v("手机号： " + _vm._s(_vm.cust.phoneNo))]) : _vm._e(), _vm._v(" "), (_vm.cust.ownerName) ? _c('span', {
    staticClass: "bar"
  }, [_vm._v("负责人： " + _vm._s(_vm.cust.ownerName))]) : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t登记时间：" + _vm._s(_vm.cust.createTime) + "\n\t\t\t\t\t\t")])])])])]) : _vm._e(), _vm._v(" "), _c('section', {
    staticClass: "lesson border"
  }, [_c('ul', [_c('li', [_vm._v("上课时间： " + _vm._s(Date.new(_vm.lesson.lessonDate).format('yyyy-M-d')) + "   " + _vm._s(_vm.formatTime(_vm.lesson.beginTime)) + " ~ " + _vm._s(_vm.formatTime(_vm.lesson.endTime)))]), _vm._v(" "), (_vm.optType === 1) ? _c('li', [_vm._v("预约详情：\n\t\t\t\t\t"), (_vm.lesson.isNeedBooking && _vm.lesson.bookings) ? _c('span', [_vm._v(_vm._s(_vm.lesson.bookings) + " / " + _vm._s(_vm.lesson.maxStudents) + "\n\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), (_vm.lesson.isNeedBooking && !_vm.lesson.bookings) ? _c('span', {
    staticClass: "gray"
  }, [_vm._v("尚未有人预约")]) : _vm._e(), _vm._v(" "), (!_vm.lesson.isNeedBooking) ? _c('span', {
    staticClass: "orangered"
  }, [_vm._v("无需预约")]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.memberLesson) ? [_c('li', [_c('b', {
    staticClass: "red"
  }, [_vm._v(_vm._s(_vm.g.Dict.MemberLessonStatus[_vm.memberLesson.status]))])]), _vm._v(" "), (_vm.memberLesson.status === 1) ? _c('li', [_vm._v("预约人：" + _vm._s(_vm.memberLesson.bookingUname))]) : _vm._e(), _vm._v(" "), (_vm.memberLesson.status === 1) ? _c('li', [_vm._v("预约时间：" + _vm._s(_vm.memberLesson.bookingTime))]) : _vm._e(), _vm._v(" "), (_vm.memberLesson.status === 2) ? _c('li', [_vm._v("签到人：" + _vm._s(_vm.memberLesson.checkinUname))]) : _vm._e(), _vm._v(" "), (_vm.memberLesson.status === 2) ? _c('li', [_vm._v("签到时间：" + _vm._s(_vm.memberLesson.checkinTime))]) : _vm._e()] : _vm._e()], 2)]), _vm._v(" "), (_vm.memberCardList && _vm.memberCardList.length && (_vm.optType === 1 || (!_vm.memberLesson || _vm.memberLesson.status !== 1))) ? _c('section', {
    staticClass: "cards mytbl"
  }, [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit l"
  }, [_vm._v("请选择计费会员卡")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('checkbox', {
    model: {
      value: (_vm.hideInvalidCards),
      callback: function($$v) {
        _vm.hideInvalidCards = $$v
      },
      expression: "hideInvalidCards"
    }
  }, [_vm._v("隐藏无效卡")])], 1)]), _vm._v(" "), _c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.memberCardList), function(c, idx) {
    return ((!_vm.hasMemberCardNo || c.isFind) && (c.canSelect || !_vm.hideInvalidCards)) ? _c('tr', [_c('td', [(c.canSelect) ? _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.selectCardIndex),
        expression: "selectCardIndex"
      }],
      staticClass: "single-radio",
      attrs: {
        "name": "ck",
        "type": "radio"
      },
      domProps: {
        "value": idx,
        "checked": _vm._q(_vm.selectCardIndex, idx)
      },
      on: {
        "change": function($event) {
          _vm.selectCardIndex = idx
        }
      }
    }) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t\t" + _vm._s(c.cardName) + "\n\t\t\t\t\t")]), _vm._v(" "), _c('td', [(c.cardType === 1) ? [(c.beginDate) ? [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(Date.new(c.endDate).subtract(_vm.today)) + " 天\n\t\t\t\t\t\t\t")] : (c.canSelect) ? [_vm._v("\n\t\t\t\t\t\t\t\t尚未使用\n\t\t\t\t\t\t\t")] : _vm._e()] : (c.cardType === 2) ? [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(c.currentTimes) + " 次\n\t\t\t\t\t\t")] : (c.cardType === 3) ? [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(c.currentAmount) + " 元\n\t\t\t\t\t\t")] : _vm._e()], 2), _vm._v(" "), _c('td', [(c.status !== 0) ? _c('span', {
      staticClass: "red"
    }, [_vm._v("已" + _vm._s(_vm.g.Dict.MemberCardStatus[c.status]) + "，不可使用")]) : (c.canSelect) ? [(_vm.cardPaymentConf) ? [(c.cardType === 1) ? _c('span', {
      staticClass: "gray"
    }, [_vm._v("期限卡不单独计费")]) : (c.cardType === 2) ? [_vm._v("每次计费 "), _c('b', [_vm._v(_vm._s(_vm.cardPaymentConf[c.cardId]))]), _vm._v(" 次")] : (c.cardType === 3) ? [_vm._v("每次计费 "), _c('b', [_vm._v(_vm._s(_vm.cardPaymentConf[c.cardId]))]), _vm._v(" 元")] : _vm._e()] : _c('span', {
      staticClass: "green"
    }, [_vm._v("本节课不计费")])] : _c('span', {
      staticClass: "red"
    }, [_vm._v(_vm._s(c.error))])], 2), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opts"
    }, [(c.beginDate && c.endDate) ? _c('li', [_vm._v("\n\t\t\t\t\t\t\t\t使用期限：" + _vm._s(_vm.g.Util.formatDate(c.beginDate, false)) + " ~ " + _vm._s(_vm.g.Util.formatDate(c.endDate, false)) + "\n\t\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), (_vm.isInVacation(c.vacationBegin, c.vacationEnd)) ? _c('li', [_vm._v("\n\t\t\t\t\t\t\t\t请假：" + _vm._s(_vm.g.Util.formatDate(c.vacationBegin, false)) + " ~ " + _vm._s(_vm.g.Util.formatDate(c.vacationEnd, false)) + "\n\t\t\t\t\t\t\t\t"), _c('a', {
      staticClass: "l10",
      on: {
        "click": function($event) {
          return _vm.altCardVacation(c)
        }
      }
    }, [_vm._v("【提前销假】")])]) : _vm._e(), _vm._v(" "), (c.limitBeginTime && c.limitEndTime) ? _c('li', [(c.cardClass === 0) ? [_vm._v("限定用卡时间：")] : [_vm._v("限定约课时间：")], _vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.g.Util.formatTime(c.limitBeginTime)) + " ~ " + _vm._s(_vm.g.Util.formatTime(c.limitEndTime)) + "\n\t\t\t\t\t\t\t")], 2) : _vm._e(), _vm._v(" "), (c.limitDates) ? _c('li', [_vm._v("\n\t\t\t\t\t\t\t\t限定用卡日期：" + _vm._s(_vm.g.MemberLib.formatLimitDates(c.limitDates)) + "\n\t\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), (c.limitWeeks) ? _c('li', [_vm._v("\n\t\t\t\t\t\t\t\t限定" + _vm._s(c.cardClass === 0 ? '用卡' : '上课') + "星期：" + _vm._s(_vm.g.MemberLib.formatWeekNames(c.limitWeeks)) + "\n\t\t\t\t\t\t\t")]) : _vm._e()]), _vm._v(" "), (c.remark) ? _c('div', [_vm._v(_vm._s(c.remark))]) : _vm._e()])]) : _vm._e()
  })], 2)]) : _vm._e(), _vm._v(" "), ((_vm.optType === 1 || (_vm.optType === 2 && !_vm.memberLesson)) && _vm.memberCardList && !_vm.memberCardList.length) ? _c('div', {
    staticClass: "err"
  }, [_vm._v("\n\t\t\t 此会员尚无会员卡\n\t\t")]) : [(_vm.pos.rows && _vm.pos.cols && _vm.lesson.maxStudents > _vm.lesson.bookings && (!_vm.memberLesson || _vm.memberLesson.status !== 1)) ? _c('section', {
    staticClass: "border postbl"
  }, [_c('div', {
    staticClass: "-tit"
  }, [_c('div', {
    staticClass: "l"
  }, [_vm._v("请选择上课位置号")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('a', {
    on: {
      "click": _vm.queryMemberLessonPosition
    }
  }, [_vm._v("刷新")])])]), _vm._v(" "), _c('table', _vm._l((parseInt(_vm.pos.rows)), function(r) {
    return _c('tr', _vm._l((parseInt(_vm.pos.cols)), function(c) {
      return _c('td', [_c('div', {
        class: {
          'empty': _vm.pos.positions[r + '-' + c] && !_vm.pos.usedPositionList.contains(_vm.pos.positions[r + '-' + c]),
          'on': _vm.pos.selections[_vm.pos.positions[r + '-' + c]]
        },
        on: {
          "click": function($event) {
            return _vm.selectPosition(_vm.pos.positions[r + '-' + c])
          }
        }
      }, [_vm._v(_vm._s(_vm.pos.positions[r + '-' + c] ? _vm.pos.positions[r + '-' + c] : ' '))])])
    }), 0)
  }), 0)]) : _vm._e(), _vm._v(" "), (_vm.targetType === 'member' && _vm.optType === 2 && !_vm.memberLesson && _vm.member && !_vm.member.authGroupLessonCheckin) ? _c('section', {
    staticClass: "passwd"
  }, [_c('i-input', {
    staticClass: "input",
    attrs: {
      "type": "password",
      "placeholder": "请会员输入系统登录密码"
    },
    on: {
      "on-enter": _vm.submitForMember
    },
    model: {
      value: (_vm.password),
      callback: function($$v) {
        _vm.password = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "password"
    }
  }), _vm._v(" "), _vm._m(1)], 1) : _vm._e(), _vm._v(" "), (_vm.targetType === 'member') ? _c('div', {
    staticClass: "submit"
  }, [(_vm.selectCardIndex !== null && _vm.memberCardList && _vm.memberCardList[_vm.selectCardIndex].cardType !== 1) ? _c('div', {
    staticClass: "l"
  }, [(_vm.optType === 1) ? [_vm._v("预约人数")] : [_vm._v("签到人数")], _vm._v("\n\t\t\t\t\t： "), _c('input-int', {
    staticClass: "payment-cnt",
    model: {
      value: (_vm.paymentCount),
      callback: function($$v) {
        _vm.paymentCount = _vm._n($$v)
      },
      expression: "paymentCount"
    }
  }), _vm._v(" 人\n\t\t\t\t\t"), _c('span', {
    staticClass: "tips"
  }, [_vm._v(" （带更多人来上课，需填写实际人数）")])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('i-button', {
    on: {
      "click": _vm.handleClose
    }
  }, [_vm._v("关闭")]), _vm._v(" "), _c('i-button', {
    staticClass: "primary",
    attrs: {
      "type": "primary",
      "loading": _vm.submitLoading
    },
    on: {
      "click": function($event) {
        return _vm.submitForMember()
      }
    }
  }, [_vm._v("提交")])], 1)]) : (_vm.targetType === 'cust') ? _c('div', {
    staticClass: "submit"
  }, [_c('div', {
    staticClass: "r"
  }, [_c('i-button', {
    on: {
      "click": _vm.handleClose
    }
  }, [_vm._v("关闭")]), _vm._v(" "), _c('i-button', {
    staticClass: "primary",
    attrs: {
      "type": "primary",
      "loading": _vm.submitLoading
    },
    on: {
      "click": function($event) {
        return _vm.submitForCust()
      }
    }
  }, [_vm._v("提交")])], 1)]) : _vm._e()]] : _c('div', {
    staticClass: "query-opt",
    attrs: {
      "align": "center"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.doQuery
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.handleClose
    }
  }, [_vm._v("关闭")])], 1)], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("选择")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("会员卡名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("余额")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "145"
    }
  }, [_vm._v("上课计费")]), _vm._v(" "), _c('th', [_vm._v("备注")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "warn"
  }, [_c('i', {
    staticClass: "iconfont icon-alert"
  }), _vm._v(" 为了会员账户安全，请会员输入系统登录密码，以备校验\n\t\t\t\t\t  "), _c('span', {
    staticClass: "red"
  }, [_vm._v("（工作人员暂请回避）")])])
}]}

/***/ }),

/***/ 1202:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "entry-checkin bookings g-dlg"
  }, [_c('section', {
    staticClass: "query-zone"
  }, [_c('input', {
    directives: [{
      name: "focus",
      rawName: "v-focus"
    }, {
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.queryNo),
      expression: "queryNo",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "query-input",
    attrs: {
      "type": "text",
      "title": "",
      "placeholder": "会员手机号  |  姓名（可模糊查）| 卡号"
    },
    domProps: {
      "value": (_vm.queryNo)
    },
    on: {
      "keyup": function($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.queryMember.apply(null, arguments)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.queryNo = $event.target.value.trim()
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), (_vm.queryError) ? _c('div', {
    staticClass: "err"
  }, [_vm._v(_vm._s(_vm.queryError))]) : _vm._e(), _vm._v(" "), (_vm.memberList) ? _c('div', {
    staticClass: "memb-list"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("请选择一个会员：")]), _vm._v(" "), _c('ul', _vm._l((_vm.memberList), function(m, idx) {
    return _c('li', {
      on: {
        "click": function($event) {
          return _vm.selectMember(idx)
        }
      }
    }, [_c('span', {
      staticClass: "name"
    }, [_vm._v(_vm._s(m.name))]), _c('span', {
      staticClass: "subinfo"
    }, [_vm._v("（" + _vm._s(_vm.g.Dict.Sex[m.sex]) + "）")]), _vm._v(" "), _c('div', {
      staticClass: "p10"
    }, [_vm._v("手机号*******" + _vm._s(m.phoneSuffix))])])
  }), 0)]) : _vm._e(), _vm._v(" "), (_vm.member) ? [_c('div', {
    staticClass: "member"
  }, [_c('table', [_c('tr', [_c('td', {
    staticClass: "photo",
    attrs: {
      "valign": "top",
      "width": "130"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.g.Util.getImgUrl(_vm.member.avatarPathname, 105, 100, 'EEEEEE')
    }
  })]), _vm._v(" "), _c('td', {
    attrs: {
      "valign": "top"
    }
  }, [_c('span', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.member.name))]), _vm._v(" " + _vm._s(_vm.g.Dict.SexDesc[_vm.member.sex]) + "\n              "), _c('div', {
    staticClass: "detail"
  }, [(_vm.member.coachName) ? _c('span', {
    staticClass: "bar"
  }, [_vm._v("教练： " + _vm._s(_vm.member.coachName))]) : _vm._e(), _vm._v(" "), (_vm.member.salesName) ? _c('span', {
    staticClass: "bar"
  }, [_vm._v("销售： " + _vm._s(_vm.member.salesName))]) : _vm._e(), _vm._v(" "), (_vm.member.advisorName) ? _c('span', {
    staticClass: "bar"
  }, [_vm._v("会籍顾问： " + _vm._s(_vm.member.advisorName))]) : _vm._e(), _vm._v("\n                注册时间：" + _vm._s(_vm.member.createTime) + "\n              ")])])])])]), _vm._v(" "), [_c('section', {
    staticClass: "tblform"
  }, [_c('table', [_c('tr', [_c('th', [_vm._v("预约私教课")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "padding-left": "14px"
    }
  }, [_c('i-select', {
    staticStyle: {
      "width": "110px"
    },
    attrs: {
      "placeholder": "请选择教练",
      "filterable": ""
    },
    on: {
      "on-change": _vm.changeCoach
    },
    model: {
      value: (_vm.coachId),
      callback: function($$v) {
        _vm.coachId = $$v
      },
      expression: "coachId"
    }
  }, _vm._l((_vm.coachList), function(c) {
    return _c('i-option', {
      key: c.staffId,
      attrs: {
        "value": c.staffId
      }
    }, [_vm._v(_vm._s(c.name))])
  }), 1), _vm._v("\n                 \n                "), _c('i-select', {
    staticStyle: {
      "width": "400px",
      "display": "inline-block"
    },
    attrs: {
      "placeholder": "请选择私教排课"
    },
    on: {
      "on-change": _vm.changePs
    },
    model: {
      value: (_vm.selectPsIdx),
      callback: function($$v) {
        _vm.selectPsIdx = $$v
      },
      expression: "selectPsIdx"
    }
  }, _vm._l((_vm.pcScheduleList), function(ps, idx) {
    return _c('i-option', {
      key: ps.psId,
      attrs: {
        "value": idx
      }
    }, [_vm._v("\n                    " + _vm._s(ps.courseName) + " 【" + _vm._s(_vm.g.Util.formatDate(ps.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(ps.endDate)) + "】\n                  ")])
  }), 1), _vm._v(" "), (_vm.pcScheduleList && _vm.pcScheduleList.length && _vm.selectPsIdx != null && _vm.pcScheduleList[_vm.selectPsIdx].enableMoreStudents) ? _c('span', {
    staticClass: "l10"
  }, [_c('checkbox', {
    on: {
      "on-change": _vm.changeEnableMoreBookings
    },
    model: {
      value: (_vm.enableMoreBookings),
      callback: function($$v) {
        _vm.enableMoreBookings = $$v
      },
      expression: "enableMoreBookings"
    }
  }, [_vm._v("在一对多私教课中预约")])], 1) : _vm._e()], 1)]), _vm._v(" "), (_vm.selectPsIdx !== null) ? _c('tr', [_c('th', {
    staticStyle: {
      "padding": "12px 5px"
    }
  }, [_vm._v("排课信息")]), _vm._v(" "), _c('td', [_c('span', [_vm._v("上课时长： " + _vm._s(_vm.pcScheduleList[_vm.selectPsIdx].duration) + " 分钟")]), _vm._v(" "), (_vm.pcScheduleList[_vm.selectPsIdx].limitTimes) ? [_c('span', {
    staticClass: "spt"
  }, [_vm._v(" | ")]), _vm._v(" "), _c('span', [_vm._v("排课次数 / 已用次数： "), _c('b', [_vm._v(_vm._s(_vm.pcScheduleList[_vm.selectPsIdx].limitTimes))]), _vm._v(" / " + _vm._s(_vm.pcScheduleList[_vm.selectPsIdx].usedTimes ? _vm.pcScheduleList[_vm.selectPsIdx].usedTimes : 0))])] : _vm._e()], 2)]) : _vm._e(), _vm._v(" "), (_vm.selectPsIdx !== null && _vm.groundList && _vm.groundList.length) ? _c('tr', [_c('th', [_vm._v("上课场地")]), _vm._v(" "), _c('td', [_c('i-select', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "placeholder": "请选择私教课场地"
    },
    model: {
      value: (_vm.selectGroundId),
      callback: function($$v) {
        _vm.selectGroundId = $$v
      },
      expression: "selectGroundId"
    }
  }, _vm._l((_vm.groundList), function(g) {
    return _c('i-option', {
      key: g.groundId,
      attrs: {
        "value": g.groundId
      }
    }, [_vm._v(_vm._s(g.groundName))])
  }), 1), _vm._v(" "), _c('span', {
    staticClass: "gray"
  }, [_vm._v("（可选）")])], 1)]) : _vm._e(), _vm._v(" "), (_vm.selectPsIdx !== null) ? _c('tr', [_c('th', [_vm._v("预约上课日期")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "padding-left": "14px"
    }
  }, [_c('DatePicker', {
    staticStyle: {
      "width": "120px",
      "display": "inline-block"
    },
    attrs: {
      "placement": "bottom-start",
      "type": "date",
      "placeholder": "选择上课日期"
    },
    on: {
      "on-change": _vm.changeBookingDate
    },
    model: {
      value: (_vm.bookingDate),
      callback: function($$v) {
        _vm.bookingDate = $$v
      },
      expression: "bookingDate"
    }
  }), _vm._v(" "), _c('ul', {
    staticClass: "date-list"
  }, _vm._l((_vm.latestDates), function(d) {
    return _c('li', {
      on: {
        "click": function($event) {
          return _vm.setBookingDate(d)
        }
      }
    }, [_c('a', [_vm._v(_vm._s(d.format('M/d')) + "（" + _vm._s(_vm.g.Dict.WeekName[d.getDay()]) + "）")])])
  }), 0)], 1)]) : _vm._e(), _vm._v(" "), (_vm.selectPsIdx !== null && !_vm.enableMoreBookings && _vm.bookingDate) ? _c('tr', [_c('th', [_vm._v("预约上课时间")]), _vm._v(" "), (_vm.pcScheduleList[_vm.selectPsIdx].limitWeekArr.contains(_vm.bookingDate.getDay())) ? _c('td', [_c('ul', {
    staticClass: "times"
  }, [_vm._l((_vm.times), function(t, idx) {
    return [(t[0] === _vm.hours[0] && t[1] === 0) ? _c('li', {
      staticClass: "spt"
    }, [_vm._v("上午"), _c('i', {
      staticClass: "iconfont icon-arrow-r"
    })]) : (t[0] === 12 && t[1] === 0) ? [_c('li', {
      staticClass: "block"
    }, [_vm._v(" ")]), _vm._v(" "), _c('li', {
      staticClass: "spt"
    }, [_vm._v("下午"), _c('i', {
      staticClass: "iconfont icon-arrow-r"
    })])] : (t[0] === 18 && t[1] === 0) ? [_c('li', {
      staticClass: "block"
    }, [_vm._v(" ")]), _vm._v(" "), _c('li', {
      staticClass: "spt"
    }, [_vm._v("晚上"), _c('i', {
      staticClass: "iconfont icon-arrow-r"
    })])] : _vm._e(), _vm._v(" "), (_vm.timeItem = _vm.timeItems[t[0] - _vm.hours[0]]) ? void 0 : _vm._e(), _vm._v(" "), (_vm.timeItem.mins = _vm.timeItem.mins ? _vm.timeItem.mins : {}) ? void 0 : _vm._e(), _vm._v(" "), _c('li', {
      class: {
        'open': (_vm.timeItem.type === _vm.dataType.USABLE && _vm.timeItem.mins[t[1]] !== _vm.dataType.VACATION) || (_vm.timeItem.type === _vm.dataType.PENDING && _vm.timeItem.mins[t[1]] === _vm.dataType.USABLE),
        'off': _vm.timeItem.type === _vm.dataType.VACATION || _vm.timeItem.mins[t[1]] === _vm.dataType.VACATION,
        'used': _vm.timeItem.type === _vm.dataType.PENDING && _vm.timeItem.mins[t[1]] === _vm.dataType.USED,
        'disused': _vm.timeItem.type === _vm.dataType.PENDING && _vm.timeItem.mins[t[1]] === _vm.dataType.DISUSED,
        'check': _vm.selectTimeIdx === idx
      },
      on: {
        "click": function($event) {
          return _vm.checkTime(idx, t[1])
        }
      }
    }, [(_vm.timeItem.type === _vm.dataType.PENDING && _vm.timeItem.mins[t[1]] === _vm.dataType.USED) ? _c('div', {
      attrs: {
        "title": _vm.lessonTitlesInTimes[t[0] * 100 + t[1]]
      }
    }, [_vm._v("\n                        " + _vm._s(t[0]) + ":" + _vm._s(t[1] >= 10 ? t[1] : '0' + t[1]) + "\n                      ")]) : [_vm._v(_vm._s(t[0]) + ":" + _vm._s(t[1] >= 10 ? t[1] : '0' + t[1]))]], 2)]
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_vm._m(0), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right"
    }
  }, [_c('a', {
    on: {
      "click": _vm.changeTimeInterval
    }
  }, [_vm._v("设置时间间隔")])])])])])]) : _c('td', [_c('p', {
    staticClass: "orangered"
  }, [_vm._v(_vm._s(_vm.g.Util.formatDate(_vm.bookingDate)) + " (" + _vm._s(_vm.g.Dict.WeekName[_vm.bookingDate.getDay()]) + ") 不在该私教排课的规定星期内，请重新选择日期或其它私教排课预约")])])]) : _vm._e(), _vm._v(" "), (_vm.enableMoreBookings && _vm.selectPsIdx != null) ? _c('tr', [_c('th', [_vm._v("已开私教课")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "mytbl booked-pl"
  }, [_c('table', [_vm._m(1), _vm._v(" "), _vm._l((_vm.pcLessonForMoreBookingsList), function(l) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(_vm.g.Util.formatTime(l.beginTime)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatTime(l.endTime)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.pcScheduleList[_vm.selectPsIdx].maxStudents) + " 人")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.bookings) + " 人")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.pcScheduleList[_vm.selectPsIdx].maxStudents - l.bookings) + " 人")]), _vm._v(" "), _c('td', [(_vm.pcScheduleList[_vm.selectPsIdx].maxStudents > l.bookings) ? _c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.bookingPcLesson(l.lessonId)
        }
      }
    }, [_vm._v("预约")]) : _c('span', {
      staticClass: "gray"
    }, [_vm._v("已约满")])])])
  })], 2), _vm._v(" "), (_vm.pcLessonForMoreBookingsList && !_vm.pcLessonForMoreBookingsList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n                    暂无预约记录\n                  ")]) : _vm._e()])])]) : _vm._e()])])], _vm._v(" "), (_vm.coachList && _vm.coachList.length === 0) ? _c('div', {
    staticClass: "err"
  }, [_vm._v("\n        该会员没有可选择的私教排课，请先为该会员排私教课，或者设置公共的私教排课（不限定会员的私教排课）\n      ")]) : _vm._e(), _vm._v(" "), (_vm.memberCardList && _vm.selectPsIdx !== null) ? _c('section', {
    staticClass: "cards"
  }, [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit l"
  }, [_vm._v("请选择计费会员卡")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('checkbox', {
    model: {
      value: (_vm.hideInvalidCards),
      callback: function($$v) {
        _vm.hideInvalidCards = $$v
      },
      expression: "hideInvalidCards"
    }
  }, [_vm._v("隐藏无效卡")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(2), _vm._v(" "), _vm._l((_vm.memberCardList), function(c, idx) {
    return (!_vm.hideInvalidCards || c.canSelect) ? _c('tr', [_c('td', [(c.canSelect) ? _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.selectCardIndex),
        expression: "selectCardIndex"
      }],
      staticClass: "single-radio",
      attrs: {
        "name": "ck",
        "type": "radio"
      },
      domProps: {
        "value": idx,
        "checked": _vm._q(_vm.selectCardIndex, idx)
      },
      on: {
        "change": function($event) {
          _vm.selectCardIndex = idx
        }
      }
    }) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v("\n                " + _vm._s(c.cardName) + "\n              ")]), _vm._v(" "), _c('td', [(c.cardType === 1) ? [(c.beginDate) ? [_vm._v("\n                    " + _vm._s(Date.new(c.endDate).subtract(_vm.today)) + " 天\n                  ")] : (c.canSelect) ? [_vm._v("\n                    尚未使用\n                  ")] : _vm._e()] : (c.cardType === 2) ? [_vm._v("\n                  " + _vm._s(c.currentTimes) + " 次\n                ")] : (c.cardType === 3) ? [_vm._v("\n                  " + _vm._s(c.currentAmount) + " 元\n                ")] : (c.cardType === 4) ? [_vm._v("\n                  " + _vm._s(c.currentTimes) + " " + _vm._s(_vm.g.Dict.CardTimeTypes[c.cardTimeType]) + "\n                ")] : _vm._e()], 2), _vm._v(" "), _c('td', [(c.status !== 0) ? _c('span', {
      staticClass: "red"
    }, [_vm._v("已" + _vm._s(_vm.g.Dict.MemberCardStatus[c.status]) + "，不可使用")]) : (c.canSelect) ? [(_vm.cardPaymentConf) ? [(c.cardType === 1) ? _c('span', {
      staticClass: "gray"
    }, [_vm._v("期限卡不单独计费")]) : (c.cardType === 2) ? [_vm._v("每次计费 "), _c('b', [_vm._v(_vm._s(_vm.cardPaymentConf[c.cardId]))]), _vm._v(" 次")] : (c.cardType === 3) ? [_vm._v("每次计费 "), _c('b', [_vm._v(_vm._s(_vm.cardPaymentConf[c.cardId]))]), _vm._v(" 元")] : (c.cardType === 4) ? [_vm._v("每次计费 "), _c('b', [_vm._v(_vm._s(_vm.cardPaymentConf[c.cardId]))]), _vm._v(" " + _vm._s(_vm.g.Dict.CardTimeTypes[c.cardTimeType]))] : _vm._e()] : _c('span', {
      staticClass: "green"
    }, [_vm._v("本节课不计费")])] : _c('span', {
      staticClass: "red"
    }, [_vm._v(_vm._s(c.error))])], 2), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opts"
    }, [(c.beginDate && c.endDate) ? _c('li', [_vm._v("\n                    使用期限：" + _vm._s(_vm.g.Util.formatDate(c.beginDate, false)) + " ~ " + _vm._s(_vm.g.Util.formatDate(c.endDate, false)) + "\n                  ")]) : _vm._e(), _vm._v(" "), (_vm.isInVacation(c.vacationBegin, c.vacationEnd)) ? _c('li', [_vm._v("\n                    请假：" + _vm._s(_vm.g.Util.formatDate(c.vacationBegin, false)) + " ~ " + _vm._s(_vm.g.Util.formatDate(c.vacationEnd, false)) + "\n                    "), _c('a', {
      staticClass: "l10",
      on: {
        "click": function($event) {
          return _vm.altCardVacation(c)
        }
      }
    }, [_vm._v("【提前销假】")])]) : _vm._e(), _vm._v(" "), (c.limitBeginTime && c.limitEndTime) ? _c('li', [_vm._v("\n                    限定用卡时间：" + _vm._s(_vm.g.Util.formatTime(c.limitBeginTime)) + " ~ " + _vm._s(_vm.g.Util.formatTime(c.limitEndTime)) + "\n                  ")]) : _vm._e(), _vm._v(" "), (c.limitDates) ? _c('li', [_vm._v("\n                    限定用卡日期：" + _vm._s(_vm.g.MemberLib.formatLimitDates(c.limitDates)) + "\n                  ")]) : _vm._e(), _vm._v(" "), (c.limitWeeks) ? _c('li', [_vm._v("\n                    限定" + _vm._s(c.cardClass === 0 ? '用卡' : '上课') + "星期：" + _vm._s(_vm.g.MemberLib.formatWeekNames(c.limitWeeks)) + "\n                  ")]) : _vm._e()])])]) : _vm._e()
  })], 2)])]) : _vm._e(), _vm._v(" "), (_vm.selectCardIndex !== null && !_vm.clickedSubmit && _vm.selectPsIdx !== null) ? _c('section', {
    staticClass: "submit"
  }, [(_vm.enablePlCardVenueConf) ? _c('div', {
    staticClass: "vb"
  }, [_c('div', {
    staticClass: "hd"
  }, [(_vm.vb.isSelect) ? _c('div', {
    staticClass: "tit l"
  }, [_vm._v("请选择场地预约信息")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('checkbox', {
    on: {
      "on-change": _vm.queryVenueList
    },
    model: {
      value: (_vm.vb.isSelect),
      callback: function($$v) {
        _vm.$set(_vm.vb, "isSelect", $$v)
      },
      expression: "vb.isSelect"
    }
  }, [_vm._v("启用场地预约")])], 1)]), _vm._v(" "), (_vm.vb.isSelect) ? _c('div', {
    staticClass: "mytbl"
  }, [(_vm.vb.venueList && _vm.vb.venueList.length) ? _c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("场馆选择")]), _vm._v(" "), _c('td', [_c('radio-group', {
    on: {
      "on-change": _vm.queryVenueArea
    },
    model: {
      value: (_vm.vb.venueId),
      callback: function($$v) {
        _vm.$set(_vm.vb, "venueId", $$v)
      },
      expression: "vb.venueId"
    }
  }, _vm._l((_vm.vb.venueList), function(v) {
    return _c('radio', {
      key: v.venueId,
      attrs: {
        "label": v.venueId
      }
    }, [_vm._v(_vm._s(v.venueName))])
  }), 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("场地选择")]), _vm._v(" "), _c('td', [(_vm.vb.vaList && _vm.vb.vaList.length) ? _c('radio-group', {
    model: {
      value: (_vm.vb.vaId),
      callback: function($$v) {
        _vm.$set(_vm.vb, "vaId", $$v)
      },
      expression: "vb.vaId"
    }
  }, _vm._l((_vm.vb.vaList), function(va) {
    return _c('radio', {
      key: va.vaId,
      attrs: {
        "label": va.vaId
      }
    }, [_vm._v(_vm._s(va.areaName))])
  }), 1) : _vm._e(), _vm._v(" "), (_vm.vb.vaList && !_vm.vb.vaList.length) ? _c('div', {
    staticClass: "warning"
  }, [_vm._v("未查找到符合条件的场地")]) : _vm._e()], 1)]), _vm._v(" "), (_vm.vb.bookingTimesList) ? _c('tr', [_c('th', [_vm._v("场地预约时间")]), _vm._v(" "), _c('td', {
    staticClass: "vb-times"
  }, _vm._l((_vm.vb.bookingTimesList), function(t) {
    return _c('span', [_vm._v(_vm._s(t[0]) + " ~ " + _vm._s(t[1]))])
  }), 0)]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.vb.venueList && !_vm.vb.venueList.length) ? _c('div', {
    staticClass: "warning"
  }, [_vm._v("未查找到相关配置")]) : _vm._e()]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', [(_vm.selectPsIdx !== null) ? _c('div', {
    staticClass: "sum"
  }, [_vm._v("\n                " + _vm._s(_vm.pcScheduleList[_vm.selectPsIdx].courseName) + " "), _c('u', [_vm._v("/")]), _vm._v(" 教练：" + _vm._s(_vm.pcScheduleList[_vm.selectPsIdx].coachName) + "\n                "), (_vm.bookingDate) ? _c('span', [_c('u', [_vm._v("/")]), _vm._v(" " + _vm._s(_vm.g.Util.formatDate(_vm.bookingDate, false)) + " "), _c('u', [_vm._v("/")]), _vm._v(" "), (_vm.selectTimeIdx !== null) ? _c('span', [_vm._v("\n                    " + _vm._s(_vm.times[_vm.selectTimeIdx][0]) + ":" + _vm._s(_vm.times[_vm.selectTimeIdx][1])), (_vm.times[_vm.selectTimeIdx][1] === 0) ? [_vm._v("0")] : _vm._e()], 2) : (!_vm.enableMoreBookings) ? _c('span', {
    staticClass: "orange"
  }, [_vm._v("未选择时间")]) : _vm._e()]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right"
    }
  }, [(Date.new(_vm.bookingDate).compareDatePart(_vm.g.Util.formatDate(_vm.pcScheduleList[_vm.selectPsIdx].endDate)) > 0 || Date.new(_vm.bookingDate).compareDatePart(_vm.g.Util.formatDate(_vm.pcScheduleList[_vm.selectPsIdx].beginDate)) < 0) ? _c('span', {
    staticClass: "orangered"
  }, [_c('i', {
    staticClass: "iconfont icon-alert1"
  }), _vm._v(" 不在课程有效期内，不能约私教课\n              ")]) : (!_vm.enableMoreBookings) ? [(!_vm.pcScheduleList[_vm.selectPsIdx].limitTimes || _vm.pcScheduleList[_vm.selectPsIdx].limitTimes > (_vm.pcScheduleList[_vm.selectPsIdx].usedTimes ? _vm.pcScheduleList[_vm.selectPsIdx].usedTimes : 0)) ? _c('i-button', {
    staticClass: "primary",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.handleSubmit()
      }
    }
  }, [_vm._v("确定预约")]) : _c('span', {
    staticClass: "orangered"
  }, [_c('i', {
    staticClass: "iconfont icon-alert1"
  }), _vm._v(" 排课次数须大于已用次数，请更新排课次数或重排课")])] : _vm._e()], 2)])])]) : _vm._e()] : _c('div', {
    staticClass: "remark"
  }, [_c('b', [_vm._v("预约步骤")]), _vm._v("： \n      1. 选择会员 "), _c('span', [_vm._v("——▶")]), _vm._v("\n      2. 选择私教课 "), _c('span', [_vm._v("——▶")]), _vm._v("\n      3. 选择上课时间 "), _c('span', [_vm._v("——▶")]), _vm._v("\n      4. 选择会员结算卡 "), _c('span', [_vm._v("——▶")]), _vm._v("\n      5. 确定预约\n    ")])], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', [_c('ul', {
    staticClass: "times"
  }, [_c('li', {
    staticClass: "open"
  }, [_vm._v("可预约")]), _vm._v(" "), _c('li', {
    staticClass: "used"
  }, [_vm._v("已预约")]), _vm._v(" "), _c('li', {
    staticClass: "off"
  }, [_vm._v("教练休息")]), _vm._v(" "), _c('li', {
    staticClass: "disused"
  }, [_vm._v("不可预约")])]), _vm._v(" "), _c('span', {
    staticClass: "gray l10"
  }, [_vm._v("（状态说明）")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("上课开始时间")]), _vm._v(" "), _c('th', [_vm._v("上课结束时间")]), _vm._v(" "), _c('th', [_vm._v("最多预约人数")]), _vm._v(" "), _c('th', [_vm._v("已预约人数")]), _vm._v(" "), _c('th', [_vm._v("剩余预约人数")]), _vm._v(" "), _c('th', [_vm._v("操作")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("选择")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("会员卡名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "85"
    }
  }, [_vm._v("余额")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "145"
    }
  }, [_vm._v("上课计费")]), _vm._v(" "), _c('th', [_vm._v("备注")])])
}]}

/***/ }),

/***/ 1211:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1853)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1236),
  /* template */
  __webpack_require__(2261),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0896d0a4",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1236:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: {
    lessonType: {
      // 1-团课，2-私教课
      type: Number,
      default: 1
    },

    afterSubmit: {
      type: Function,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      g: window.$,
      coachList: [],
      bgColorType: 1, // 1-教练，2-课程
      coachColorMap: {},
      courseColorMap: {},
      selectCoachId: null,
      selectCourseId: null,
      selectColor: null,
      defaultColor: "777777",
      coureList: null,
      colorList: ["777777", "80848F", "262773", "3B3B98", "317CD1", "2D8CF0", "7CB7D8", "5CADFF", "19BE6B", "FF9900", "ED3F14", "E3886D", "00CED8", "FC5FCB", "D63693", "93BC83", "6476CB", "B26464", "72C496", "EAC448", "5989A7", "ED8124", "ED6E6B", "80D640", "31A75D", "CB7139", "CC3CF7", "DAA520", "F29003", "E08605", "C4760A", "D32134", "C91527", "B90F21", "AD0D1C", "52EB10", "4DDB0F", "46C90A", "029E2F"],
      courseList: null,

      defaultTextColor: "FFFFFF",
      textColor: "#FFFFFF",
      bgColor: "#FFFFFF",
      coachTextColorMap: {},
      courseTextColorMap: {}
    };
  },

  created() {
    this.loadData();
  },

  methods: {
    loadData() {
      let typeIds = [2003];
      if (this.lessonType === 1) {
        typeIds.push(2212);
        typeIds.push(2213);
      } else {
        typeIds.push(2214);
        typeIds.push(2215);
      }
      let args = {
        typeIdList: typeIds
      };
      $.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
        let hasCourseConf = null;
        for (let t of ret.argList) {
          if (t.typeId === 2003) {
            this.setCoachConf(t.typeValue);
          } else if (t.typeId === 2212 || t.typeId === 2214) {
            if (t.typeValue) this.bgColorType = parseInt(t.typeValue);
          } else if (t.typeId === 2213 || t.typeId === 2215) {
            hasCourseConf = true;
            this.queryCourseList(t.typeValue);
          }
        }
        if (!hasCourseConf) {
          this.queryCourseList(null);
        }
      });
    },

    // 修改
    getColorMap(typeValue) {
      let argVal = typeValue;
      let colorMap = {};
      let textColorMap = {};
      if (argVal) {
        let items = argVal.split(",");
        for (let item of items) {
          let arr = item.split(":");
          let staffId = parseInt(arr[0]);
          colorMap[staffId] = arr[1];
          textColorMap[staffId] = arr[2] || this.defaultTextColor;
        }
      }
      return { colorMap, textColorMap };
    },

    // 修改
    setCoachConf(typeValue) {
      let { colorMap, textColorMap } = this.getColorMap(typeValue);
      $.Req.queryCoachBase(null, coachList => {
        this.coachList = coachList;
        for (let c of coachList) {
          if (colorMap[c.staffId]) {
            this.coachColorMap[c.staffId] = colorMap[c.staffId];
          } else {
            this.coachColorMap[c.staffId] = this.defaultColor;
          }
          if (textColorMap[c.staffId]) {
            this.coachTextColorMap[c.staffId] = textColorMap[c.staffId];
          } else {
            this.coachTextColorMap[c.staffId] = this.defaultTextColor;
          }
        }
      });
    },

    // 修改
    setCourseColorMap(colorMap, textColorMap) {
      for (let c of this.courseList) {
        if (colorMap[c.courseId]) {
          this.courseColorMap[c.courseId] = colorMap[c.courseId];
        } else {
          this.courseColorMap[c.courseId] = this.defaultColor;
        }
        if (textColorMap[c.courseId]) {
          this.courseTextColorMap[c.courseId] = textColorMap[c.courseId];
        } else {
          this.courseTextColorMap[c.courseId] = this.defaultTextColor;
        }
      }
    },

    queryCourseList(typeValue) {
      let { colorMap, textColorMap } = this.getColorMap(typeValue);
      if (this.lessonType === 1) {
        $.Req.queryGroupCourseBase(data => {
          this.courseList = data;
          this.setCourseColorMap(colorMap, textColorMap);
        });
      } else {
        $.Req.queryPrivateCourseBase(data => {
          this.courseList = data;
          this.setCourseColorMap(colorMap, textColorMap);
        });
      }
    },

    selectStaff(staffId) {
      this.selectCoachId = staffId;
      // 新增
      this.textColor = "#" + this.coachTextColorMap[staffId];
      this.bgColor = "#" + this.coachColorMap[staffId];
    },

    selectCourse(courseId) {
      this.selectCourseId = courseId;
      // 新增
      this.textColor = "#" + this.courseTextColorMap[courseId];
      this.bgColor = "#" + this.courseColorMap[courseId];
    },

    queryCoachBgColorConf(callback) {
      let args = { typeId: $.Dict.ShopArg.COACH_LESSON_BGCOLOR };
      $.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
        callback(ret);
      });
    },

    setColor(color) {
      this.selectColor = color;
      if (this.bgColorType === 1) {
        this.coachColorMap[this.selectCoachId] = color;
      } else {
        this.courseColorMap[this.selectCourseId] = color;
      }
      this.bgColor = "#" + color;
      this.$forceUpdate();
    },

    saveColorConf() {
      let items = [];
      let typeId = this.lessonType === 1 ? 2212 : 2214;
      $.Req.updateShopArg(typeId, this.bgColorType, false);
      if (this.bgColorType === 1) {
        for (let staffId in this.coachColorMap) {
          items.push("{0}:{1}:{2}".format(staffId, this.coachColorMap[staffId], this.coachTextColorMap[staffId]));
        }
        let args = {
          typeId: $.Dict.ShopArg.COACH_LESSON_BGCOLOR,
          typeValue: items.join(",")
        };
        $.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
          $.Msg.success($.Lang.OPT_SUCCESS);
          this.afterSubmit(this.bgColorType);
        });
      } else if (this.bgColorType === 2) {
        for (let courseId in this.courseColorMap) {
          items.push("{0}:{1}:{2}".format(courseId, this.courseColorMap[courseId], this.courseTextColorMap[courseId]));
        }
        let args = {
          typeId: this.lessonType === 1 ? 2213 : 2215,
          typeValue: items.join(",")
        };
        $.Req.service($.SvName.SHOP_ARG_UPDATE, args, () => {
          this.afterSubmit(this.bgColorType);
        }, true);
      }
    },

    changeBgColor() {
      if (this.bgColorType == 1) {
        this.coachColorMap[this.selectCoachId] = this.bgColor.replace("#", "") || this.defaultColor;
      } else {
        this.courseColorMap[this.selectCourseId] = this.bgColor.replace("#", "") || this.defaultColor;
      }
    },

    changeFontColor() {
      if (this.bgColorType == 1) {
        this.coachTextColorMap[this.selectCoachId] = this.textColor.replace("#", "") || this.defaultTextColor;
      } else {
        this.courseTextColorMap[this.selectCourseId] = this.textColor.replace("#", "") || this.defaultTextColor;
      }
    }
  }
});

/***/ }),

/***/ 1237:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		cplId: {
			type: Number,
			required: false
		},
		afterSubmit: {
			type: Function,
			default() {
				return {};
			}
		},
		onClose: {
			type: Function,
			default() {
				return {};
			}
		}
	},

	data() {
		return {
			g: window.$,
			latestCustList: null,
			today: new Date(),
			queryNo: null,
			queryNoType: null,
			cust: null,
			custList: null,
			queryError: null,
			checkinCount: 1,
			clickedSubmit: false,
			preQueryNo: null,
			courseList: null,
			selectCourseIdx: null,
			times: [],
			bookingDate: new Date(),
			dataType: {
				USED: 1, PAST: 2, USABLE: 3, VACATION: 4, PENDING: 5, DISUSED: 6
			},
			minInterval: 15,
			hours: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
			timeItems: [],
			hasLoadTimeItems: false,
			latestDates: [],
			preCoachId: null,
			selectTimeIdx: null,
			custRemark: null,
			coachId: null,
			coachName: null
		};
	},

	created() {
		// init times
		for (let i = 0, len = this.hours.length; i < len; i++) {
			let h = this.hours[i];
			this.times.push([h, 0]);
			this.times.push([h, 15]);
			this.times.push([h, 30]);
		}

		let nowTime = new Date().getTime();
		for (let i = 0; i < 5; i++) {
			this.latestDates.push(new Date(nowTime + 3600000 * 24 * i));
		}

		$.Req.queryCoachBase(2, data => {
			this.coachList = data;
		});

		if (this.cplId) {
			this.queryCustPcLesson();
		} else {
			this.queryLatestCusts();
		}
	},

	methods: {
		initTimeItems() {
			this.selectTimeIdx = null;
			this.timeItems = [];
			let now = new Date();
			for (let i = 0, len = this.hours.length; i < len; i++) {
				if (this.bookingDate.compareDatePart(now) > 0) {
					this.timeItems.push({ type: this.dataType.USABLE });
				} else {
					this.timeItems.push({ type: this.dataType.USABLE });
				}
			}
		},

		initData() {
			this.queryNo = null;
			this.cust = null;
			this.queryError = null;
			this.checkinCardCnt = 0;
		},

		queryCustPcLesson() {
			let args = { cplId: this.cplId };
			$.Req.service($.SvName.CUST_PC_LESSON_QUERY, args, ret => {
				if (!ret.cpl) {
					this.cplId = null;
					return;
				}
				let custId = ret.cpl.custId;
				this.bookingDate = Date.new(ret.cpl.lessonDate);
				this.custRemark = ret.cpl.custRemark;
				$.Req.service($.SvName.CUST_QUERY, { custId: custId }, r => {
					this.cust = r.cust;
					this.queryPrivateCourse(() => {
						let idx = 0;
						for (let c of this.courseList) {
							if (c.courseId === ret.cpl.courseId) {
								this.changeCourse(idx);
								break;
							}
							idx++;
						}
					});
				});
			});
		},

		isInVacation(begin, end) {
			if (begin && end) {
				let today = new Date();
				if (today.compareDatePart(new Date(begin)) >= 0 && today.compareDatePart(new Date(end)) <= 0) {
					return true;
				}
			}

			return false;
		},

		queryCust() {
			if (!this.queryNo) {
				$.Msg.warning($.Lang.NO_INPUT);
				return;
			}

			let args = {};
			if ($.Util.isInteger(this.queryNo)) {
				if ($.Util.validatePhoneNo(this.queryNo)) {
					args.phoneNo = this.queryNo;
					this.queryNoType = 'phone';
				} else {
					$.Msg.error('手机号格式不正确');
					return;
				}
			} else {
				this.queryNoType = 'name';
				args.name = this.queryNo;
				if (!$.data.user.isShopOwner) {
					args.ownerStaffId = $.data.user.staffId;
				}
			}

			$.Req.service($.SvName.CUST_QUERY, args, ret => {
				this.preQueryNo = this.queryNo;
				if (ret.custList && ret.custList.length === 1) {
					this.custList = null;
					this.queryError = null;
					this.cust = ret.custList[0];
					this.queryPrivateCourse();
				} else if (ret.cust) {
					this.cust = ret.cust;
					this.custList = null;
					this.queryError = null;
					this.queryPrivateCourse();
				} else {
					this.cust = null;
					this.custList = ret.custList;
				}

				if (!this.cust && $.Util.isEmptyArray(this.custList)) {
					this.cust = null;
					if (this.queryNoType === 'phone') {
						this.queryError = "不存在此手机号【{0}】的客户，请检查手机号是否正确".format(this.queryNo);
					} else {
						this.queryError = "不存在姓名为【{0}】的客户".format(this.queryNo);
					}
				}
			}, true);
		},

		queryPrivateCourse(callback = null) {
			let args = { status: 0, isBaseInfo: true };
			$.Req.service($.SvName.PRIVATE_COURSE_QUERY, args, ret => {
				this.courseList = ret.courseList;
				if (this.courseList.length > 0) {
					if (callback) callback();
				}
			});
		},

		queryCoachLessons() {
			let coachId = this.courseList[this.selectCourseIdx].coachId;
			if (!coachId) coachId = this.coachId;
			if (!coachId) return;

			this.initTimeItems();
			let args = {
				beginDate: this.bookingDate,
				endDate: this.bookingDate,
				coachId: coachId
			};
			$.Req.service($.SvName.PC_LESSON_QUERY, args, ret => {
				let lessonDuration = this.courseList[this.selectCourseIdx].duration;
				for (let l of ret.pcLessonList) {
					let beginTime = parseInt(l.beginTime);
					let endTime = parseInt(l.endTime);

					let beginHour = parseInt(l.beginTime / 100);
					let beginMin = parseInt(l.beginTime % 100);
					let endHour = parseInt(l.endTime / 100);
					let endMin = parseInt(l.endTime % 100);

					let type = this.dataType.PENDING;
					let lessonDesc = '{0}【{1}:{2} ~ {3}:{4}】{5}'.format(l.memberName.substring(0, 3), beginHour, l.beginTime.toString().substr(-2, 2), endHour, l.endTime.toString().substr(-2, 2), l.courseName);

					if (endMin === 0) endHour--;
					for (let h = beginHour; h <= endHour; h++) {
						let mins = {};
						for (let j = 0; j < 60; j += this.minInterval) {
							let t = h * 100 + j;
							if (t >= beginTime && t < endTime) mins[j] = this.dataType.USED;else if (t >= endTime) mins[j] = this.dataType.USABLE;else if (this.minInterval < lessonDuration) mins[j] = this.dataType.DISUSED;else mins[j] = this.dataType.USABLE;
						}
						this.$set(this.timeItems, h - this.hours[0], {
							type: type, beginTime: beginTime, endTime: endTime,
							desc: lessonDesc, mins: mins
						});
					}
				}

				this.setCoachVacation(coachId);
			}, true);
		},

		/*			setCoachVacation (coachId) {
  				let args = {staffId: coachId};
  				$.Req.service($.SvName.COACH_WORK_SCHEDULE_QUERY, args, (ret) => {
  					let ws = ret.coachWorkSchedule;
  					if (!ws) return;
  
  					this.handleCoachVacation(ws);
  					if (ws.worktime) {
  						let week = this.bookingDate.getDay();
  						let dayTimes = ws.worktime.split(';');
  						let worktimeGrid = new Array(this.hours.length);
  						let sysWeek = week;
  						if (week === 0) sysWeek = 7;
  						for (let h of dayTimes[sysWeek - 1].split(',')) {
  							worktimeGrid[h - this.hours[0]] = 1;
  						}
  						for (let j = 0, len = this.hours.length; j < len; j++) {
  							if (!worktimeGrid[j] && this.timeItems[j].type === this.dataType.USABLE) {
  								this.$set(this.timeItems, j, {type: this.dataType.VACATION});
  							}
  						}
  					}
  				});
  			},*/

		setCoachVacation(coachId) {
			let args = { staffId: coachId };
			$.Req.service($.SvName.COACH_WORK_SCHEDULE_QUERY, args, ret => {
				let ws = ret.coachWorkSchedule;
				if (!ws) return;

				this.handleCoachVacation(ws);
				if (ws.worktime) {
					let week = this.bookingDate.getDay();
					let dayTimes = ws.worktime.split(';');
					let worktimeGrid = new Array(this.hours.length);
					let sysWeek = week;
					if (week === 0) sysWeek = 7;
					let confWorkTimeByHalfHour = false;
					for (let h of dayTimes[sysWeek - 1].split(',')) {
						h = parseInt(h);
						if (h < 100) {
							worktimeGrid[h - this.hours[0]] = 1;
						} else {
							worktimeGrid[h] = 1;
							confWorkTimeByHalfHour = true;
						}
					}

					if (!confWorkTimeByHalfHour) {
						for (let j = 0, len = this.hours.length; j < len; j++) {
							if (!worktimeGrid[j] && this.timeItems[j].type === this.dataType.USABLE) {
								this.$set(this.timeItems, j, { type: this.dataType.VACATION });
							}
						}
					} else {
						for (let i = 0, len = this.hours.length; i < len; i++) {
							let fistHalfHour = this.hours[i] * 100;
							let lastHalfHour = this.hours[i] * 100 + 30;
							if (worktimeGrid[fistHalfHour] && worktimeGrid[lastHalfHour]) continue;

							let mins = {};
							for (let j = 0; j < 60; j += this.minInterval) {
								if (!worktimeGrid[fistHalfHour]) {
									if (j < 30) mins[j] = this.dataType.VACATION;
								}
								if (!worktimeGrid[lastHalfHour]) {
									if (j >= 30) mins[j] = this.dataType.VACATION;
								}
							}
							let item = this.timeItems[i];
							item.mins = mins;
							this.$set(this.timeItems, i, item);
						}
					}
				}
			});
		},

		handleCoachVacation(ws) {
			let vacationList = this.getVacationList(ws);

			for (let v of vacationList) {
				let vbeingDate = Date.new(v.beginDate);
				let vendDate = Date.new(v.endDate);
				let [vbeginTime, vendTime] = [$.Util.getTimeNum(v.beginTime), $.Util.getTimeNum(v.endTime)];
				let [vbeginHour, vendHour, vendMin] = [null, null, null];
				if ($.Util.isNotEmpty(vbeginTime) && $.Util.isNotEmpty(vendTime)) {
					[vbeginHour, vendHour, vendMin] = [parseInt(vbeginTime / 100), parseInt(vendTime / 100), parseInt(vendTime % 100)];
				}
				let dt = this.bookingDate;
				if (dt.compareDatePart(vbeingDate) >= 0 && dt.compareDatePart(vendDate) <= 0) {
					for (let j = 0, len = this.hours.length; j < len; j++) {
						if ($.Util.isNotEmpty(vbeginTime) && $.Util.isNotEmpty(vendTime)) {
							if (this.hours[j] >= vbeginHour && this.hours[j] * 100 < vendHour * 100) {
								if (this.timeItems[j].type === this.dataType.USABLE) this.$set(this.timeItems, j, { type: this.dataType.VACATION });
							}
						} else {
							if (this.timeItems[j].type === this.dataType.USABLE) this.$set(this.timeItems, j, { type: this.dataType.VACATION });
						}
					}
				}
			}
		},

		getVacationList(ws) {
			let vacationList = [];
			if (ws.vacationBegin && ws.vacationEnd) {
				let vac = {
					beginDate: ws.vacationBegin,
					endDate: ws.vacationEnd
				};
				if (ws.vacationBeginTime && ws.vacationEndTime) {
					vac.beginTime = $.Util.formatTime(ws.vacationBeginTime);
					vac.endTime = $.Util.formatTime(ws.vacationEndTime);
				}
				vacationList.push(vac);
			}
			if (ws.vacations) {
				for (let itemStr of ws.vacations.split(';')) {
					let items = itemStr.split(',');
					if (items.length < 2) continue;

					let vac = {};
					vac.beginDate = items[0];
					vac.endDate = items[1];
					if (items.length > 2) {
						vac.beginTime = items[2];
						vac.endTime = items[3];
					}
					vacationList.push(vac);
				}
			}

			return vacationList;
		},

		formatTime(timeId) {
			return parseInt(timeId / 100) + ':' + (timeId + '').substr(-2, 2);
		},

		handleSubmit() {
			if (!this.bookingDate) {
				$.Msg.error('请选择上课预约日期');
				return;
			}
			if (this.selectTimeIdx === null) {
				$.Msg.error('请选择上课预约时间');
				return;
			}
			if (this.custRemark && this.custRemark.length > 500) {
				$.Msg.error('预约备注不能超过500字');
				return;
			}

			let msg = '确定要预约吗？';
			if (!confirm(msg)) return;

			let course = this.courseList[this.selectCourseIdx];
			if (!course.coachId && !this.coachId) {
				$.Msg.error('请指定教练');
				return;
			}
			let selectTime = this.times[this.selectTimeIdx];
			let lessonBeginTime = selectTime[0] * 100 + selectTime[1];
			let lessonTimeStr = selectTime[0] + ':' + selectTime[1] + (selectTime[1] < 10 ? '0' : '');
			let beginTimeObj = Date.new($.Util.formatDate(this.bookingDate) + " " + lessonTimeStr + ":00");
			let endTimeObj = new Date(beginTimeObj.getTime() + 60000 * course.duration);
			let lessonEndTime = endTimeObj.getHours() * 100 + endTimeObj.getMinutes();
			let lesson = {
				cplId: this.cplId,
				courseId: course.courseId,
				coachId: course.coachId ? course.coachId : this.coachId,
				custId: this.cust.custId,
				lessonDate: this.bookingDate,
				beginTime: lessonBeginTime,
				endTime: lessonEndTime,
				custRemark: this.custRemark
			};
			let args = {
				cpl: lesson,
				actionType: this.cplId ? 'U' : 'I'
			};
			$.Req.service($.SvName.CUST_PC_LESSON_SAVE, args, ret => {
				$.Msg.success('预约成功');
				if (this.afterSubmit) {
					this.afterSubmit();
				}
			}, true);
		},

		setBookingDate(d) {
			this.bookingDate = d;
			this.changeBookingDate();
		},

		changeBookingDate() {
			this.queryCoachLessons();
		},

		changeCourse(idx) {
			this.selectCourseIdx = idx;
			if (this.preCoachId !== this.courseList[idx].coachId) {
				this.preCoachId = this.courseList[idx].coachId;
				this.coachId = this.preCoachId;
				this.coachName = this.courseList[idx].coachName;
				this.queryCoachLessons();
			}
		},

		changeCoach(val) {
			this.coachId = val;
			for (let c of this.coachList) {
				if (c.staffId === val) {
					this.coachName = c.name;
					break;
				}
			}
			this.queryCoachLessons();
		},

		checkTime(idx) {
			/*if (this.timeItems[this.times[idx][0] - this.hours[0]].type === this.dataType.USABLE) {
   this.selectTimeIdx = idx;
   }*/
			let i = this.times[idx][0] - this.hours[0];
			if (this.timeItems[i].type === this.dataType.USABLE || this.timeItems[i].type === this.dataType.PENDING && this.timeItems[i].mins[this.times[idx][1]] === this.dataType.USABLE) {
				this.selectTimeIdx = idx;
			}
		},

		queryLatestCusts() {
			let args = { page: 1 };
			if (!$.data.user.isShopOwner) {
				args.ownerStaffId = $.data.user.staffId;
			}
			$.Req.service($.SvName.CUST_QUERY, args, ret => {
				this.latestCustList = ret.custList;
			});
		},

		selectCust(cust) {
			this.cust = cust;
			this.custList = null;
			this.queryPrivateCourse();
		}
	}
});

/***/ }),

/***/ 1238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_select_vue__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_member_member_select_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { MemberSelect: __WEBPACK_IMPORTED_MODULE_0__pages_member_member_select_vue___default.a, MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default.a },
	data() {
		return {
			g: window.$,
			editable: $.data.user.isShopOwner,
			gbbList: null,
			editDlg: false,
			memberSelectDlg: false,
			gbbCount: null,
			gbb: {},
			viewMemberDlg: false,
			viewMemberId: null
		};
	},

	created() {
		this.queryGlBookingBlacklist();
	},

	methods: {
		openCreateDlg() {
			this.gbb = {};
			this.editDlg = true;
		},

		openEditDlg(idx) {
			let gbb = this.gbbList[idx];
			this.gbb = {};
			$.Util.copyAttributes(gbb, this.gbb);
			this.editDlg = true;
		},

		queryGlBookingBlacklist(page = null) {
			if (!page) this.gbbCount = null;
			let args = {
				page: page
			};
			$.Req.service($.SvName.GL_BOOKING_BLACKLIST_QUERY, args, ret => {
				this.gbbList = ret.gbbList;
				if (!page) {
					this.gbbCount = ret.count;
				}
			});
		},

		saveGlBookingBlacklist() {
			if (!this.gbb.memberId) {
				$.Msg.error('请选择禁用会员');
				return;
			}
			if (!this.gbb.beginDate) {
				$.Msg.error('请选择禁用开始日期');
				return;
			}
			if (!this.gbb.endDate) {
				$.Msg.error('请选择禁用结束日期');
				return;
			}
			if (!this.gbb.remark) {
				$.Msg.error('请填写禁用说明');
				return;
			}

			let args = {
				actionType: this.gbb.gbbId ? 'U' : 'I',
				gbb: this.gbb
			};
			$.Req.service($.SvName.GL_BOOKING_BLACKLIST_SAVE, args, ret => {
				this.queryGlBookingBlacklist();
				this.editDlg = false;
			}, true);
		},

		delGlBookingBlacklist(idx) {
			let msg = '确定要将【{0}】从黑名单中删除吗?'.format(this.gbbList[idx].memberName);
			$.Dlg.confirm(msg, yes => {
				let args = {
					actionType: 'D',
					deleteId: this.gbbList[idx].gbbId
				};
				$.Req.service($.SvName.GL_BOOKING_BLACKLIST_SAVE, args, ret => {
					this.queryGlBookingBlacklist();
				}, true);
			});
		},

		afterSelectMember(m) {
			this.gbb.memberId = m.memberId;
			this.gbb.memberName = m.name;
			this.memberSelectDlg = false;
		},

		viewMember(memberId) {
			this.viewMemberDlg = true;
			this.viewMemberId = memberId;
		}
	}
});

/***/ }),

/***/ 1239:
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

	props: {
		lessonId: {
			type: Number
		}
	},

	data() {
		return {
			g: window.$,
			commentList: null
		};
	},

	created() {
		this.queryCoachComment();
	},

	methods: {
		queryCoachComment() {
			$.Req.service($.SvName.LESSON_COACH_COMMENT_QUERY, { lessonId: this.lessonId }, ret => {
				this.commentList = ret.commentList;
			});
		}
	}
});

/***/ }),

/***/ 1240:
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


/* harmony default export */ __webpack_exports__["default"] = ({
	components: {},

	props: {
		lessonId: {
			type: Number
		}
	},

	data() {
		return {
			g: window.$,
			lesson: null,
			imgList: []
		};
	},

	created() {
		this.queryLesson();
	},

	methods: {
		queryLesson() {
			$.Req.service($.SvName.LESSON_QUERY, { lessonId: this.lessonId }, ret => {
				this.lesson = ret.lesson;
				this.imgList = ret.lesson.lessonImgs.split(',');
			});
		}
	}
});

/***/ }),

/***/ 1241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue___default.a },

  props: {
    lessonId: {
      type: Number,
      required: false
    },
    courseScheduleId: {
      type: Number,
      required: false
    },
    courseType: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      g: window.$,
      reviewList: null,
      memberId: 0,
      viewMemberDlg: false,
      totalCount: null,
      scoreTitlesMap: null,
      coachList: null,
      query: {
        coachId: null,
        lessonDates: []
      },
      dateOptions1: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          value() {
            const end = new Date();
            const start = new Date();
            return [start, end];
          }
        }, {
          text: '昨天',
          value() {
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24);
            const end = new Date(start.getTime());
            return [start, end];
          }
        }, {
          text: '最近一周',
          value() {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end];
          }
        }, {
          text: '最近一个月',
          value() {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end];
          }
        }, {
          text: '最近两个月',
          value() {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 60);
            return [start, end];
          }
        }, {
          text: '最近三个月',
          value() {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end];
          }
        }]
      }
    };
  },

  created() {
    this.queryScoreTmptList(() => {
      this.queryLessonReview();
    });
    this.queryCoachList();
  },

  watch: {
    courseScheduleId(val, oldVal) {
      if (val && val > 0) this.queryLessonReview();
    }
  },

  methods: {
    queryScoreTmptList(callback) {
      let args = {};
      $.Req.service($.SvName.REVIEW_SCORE_TMPT_QUERY, args, ret => {
        this.scoreTitlesMap = {};
        for (let r of ret.rstList) {
          this.scoreTitlesMap[r.rstId] = r.scoreTitleConf.split(',');
        }
        callback();
      });
    },

    queryLessonReview(page = null) {
      let args = { courseType: this.courseType, page: page };
      if (this.lessonId) args.lessonId = this.lessonId;
      if (this.courseScheduleId) args.courseScheduleId = this.courseScheduleId;else args.needLessonInfo = true;
      if (this.query.coachId) args.coachId = this.query.coachId;
      if (this.query.lessonDates.length === 2) {
        args.lessonDateBegin = this.query.lessonDates[0];
        args.lessonDateEnd = this.query.lessonDates[1];
      }

      $.Req.service($.SvName.LESSON_REVIEW_QUERY, args, ret => {
        for (let r of ret.lessonReviewList) {
          r.scores = [r.score, r.score1, r.score2, r.score3, r.score4, r.score5, r.score6, r.score7, r.score8, r.score9];
        }
        this.reviewList = ret.lessonReviewList;
        if (!page) {
          this.totalCount = ret.count;
        }
        window.scrollTo(0, 0);
      }, true);
    },

    viewMember(memberId) {
      this.memberId = memberId;
      this.viewMemberDlg = true;
    },

    changePageNo(page) {
      this.queryLessonReview(page);
    },

    queryCoachList() {
      $.Req.queryCoachBase(2, data => {
        this.coachList = data;
      });
    }
  }
});

/***/ }),

/***/ 1242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_help_vue__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_help_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
		components: { Help: __WEBPACK_IMPORTED_MODULE_0__components_help_vue___default.a },

		data() {
				return {
						g: window.$,
						editable: $.Util.hasRoleFunc($.Dict.RoleFunc.BOOKING_CHECKIN_CONF.value),
						checkinType: 1,
						plCheckinPrintEnable: false,
						plCheckinLimitTime: null,
						plCheckinQrcodeMaxTime: 120,
						enablePlCheckinTimeSpecConf: null,
						privateCourseList: null,
						selectPrivateCourseIdArr: [],
						plCheckinTimeForSpec: null,
						enableDoubleCheckin: null,
						dobuleCheckinIntervalMin: null,
						showCardPriceInPlCheckinBill: null
				};
		},

		created() {
				this.queryCheckinType();
				this.queryPrivateCourseList();
		},

		methods: {
				queryCheckinType() {
						let args = {
								typeIdList: [$.Dict.ShopArg.PL_CHECKIN_TYPE, $.Dict.ShopArg.PL_CHECKIN_PRINT_ENABLE, $.Dict.ShopArg.PL_CHECKIN_LIMIT_TIME, $.Dict.ShopArg.PL_CHECKIN_QRCODE_MAX_TIME, $.Dict.ShopArg.PL_CHECKIN_TIME_SPEC_CONF, $.Dict.ShopArg.PL_DOUBLE_CHECKIN_CONF, $.Dict.ShopArg.SHOW_TIMS_CARD_AMOUNT_IN_PL_CHECKIN_BILL]
						};
						$.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
								for (let t of ret.argList) {
										if (t.typeId === $.Dict.ShopArg.PL_CHECKIN_TYPE) {
												this.checkinType = t.typeValue ? parseInt(t.typeValue) : 1;
										} else if (t.typeId === $.Dict.ShopArg.PL_CHECKIN_PRINT_ENABLE) {
												this.plCheckinPrintEnable = t.typeValue === 'true';
										} else if (t.typeId === $.Dict.ShopArg.PL_CHECKIN_LIMIT_TIME) {
												this.plCheckinLimitTime = t.typeValue ? parseInt(t.typeValue) : null;
										} else if (t.typeId === $.Dict.ShopArg.PL_CHECKIN_QRCODE_MAX_TIME) {
												this.plCheckinQrcodeMaxTime = t.typeValue ? parseInt(t.typeValue) : 120;
										} else if (t.typeId === $.Dict.ShopArg.PL_CHECKIN_TIME_SPEC_CONF) {
												if (t.typeValue) {
														let items = t.typeValue.split(';');
														this.enablePlCheckinTimeSpecConf = items[0] === 'true';
														this.plCheckinTimeForSpec = items[2] ? parseInt(items[2]) : null;
														if (items[1]) {
																for (let id of items[1].split(',')) {
																		this.selectPrivateCourseIdArr.push(parseInt(id));
																}
														}
												}
										} else if (t.typeId === $.Dict.ShopArg.PL_DOUBLE_CHECKIN_CONF) {
												if (t.typeValue) {
														let items = t.typeValue.split(',');
														this.enableDoubleCheckin = items[0] === 'true';
														if (items.length > 1) this.dobuleCheckinIntervalMin = parseInt(items[1]);
												}
										} else if (t.typeId === $.Dict.ShopArg.SHOW_TIMS_CARD_AMOUNT_IN_PL_CHECKIN_BILL) {
												this.showCardPriceInPlCheckinBill = t.typeValue === 'true';
										}
								}
						});
				},

				changeCheckinType(val) {
						if (this.checkinType === val) return;

						if (!this.editable) {
								$.Msg.error('此设置需要【参数设置】权限');
								return;
						}
						this.checkinType = val;
						let args = { typeId: $.Dict.ShopArg.PL_CHECKIN_TYPE, typeValue: val };
						$.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
								$.Msg.success($.Lang.SAVE_SUCCESS);
						});
				},

				updatePlCheckinPrintEnable(val) {
						this.plCheckinPrintEnable = val;
						let args = { typeId: $.Dict.ShopArg.PL_CHECKIN_PRINT_ENABLE, typeValue: val };
						$.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
								$.Msg.success($.Lang.SAVE_SUCCESS);
						});
				},

				updateShopArg(typeId, val) {
						let args = { typeId: typeId, typeValue: val };
						$.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
								$.Msg.success($.Lang.SAVE_SUCCESS);
						});
				},

				updatePlCheckinLimitTime() {
						if (this.plCheckinLimitTime && this.plCheckinLimitTime < 0) {
								$.Msg.error('请输入有效时间（分钟）');
								return;
						}
						let val = this.plCheckinLimitTime ? '' + this.plCheckinLimitTime : '';
						let args = { typeId: $.Dict.ShopArg.PL_CHECKIN_LIMIT_TIME, typeValue: val };
						$.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
								$.Msg.success($.Lang.SAVE_SUCCESS);
						});
				},

				updatePlCheckinQrcodeMaxTime() {
						if (!this.plCheckinQrcodeMaxTime || this.plCheckinQrcodeMaxTime < 0) {
								$.Msg.error('请输入有效秒数');
								return;
						}
						let val = this.plCheckinQrcodeMaxTime ? '' + this.plCheckinQrcodeMaxTime : '';
						let args = { typeId: $.Dict.ShopArg.PL_CHECKIN_QRCODE_MAX_TIME, typeValue: val };
						$.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
								$.Msg.success($.Lang.SAVE_SUCCESS);
						});
				},

				queryPrivateCourseList() {
						let args = { queryType: 2, status: 0 };
						$.Req.service($.SvName.PRIVATE_COURSE_QUERY, args, ret => {
								this.privateCourseList = ret.courseList;
						});
				},

				checkPlCheckinTimeSpecConfEnable(val) {
						if (!val) {
								this.savePlCheckinTimeSpecConf();
						}
				},

				savePlCheckinTimeSpecConf() {
						let value = "{0};{1};{2}".format(this.enablePlCheckinTimeSpecConf, this.selectPrivateCourseIdArr.join(','), this.plCheckinTimeForSpec ? this.plCheckinTimeForSpec : '');
						let args = { typeId: 2043, typeValue: value };
						$.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
								$.Msg.success($.Lang.SAVE_SUCCESS);
						});
				},

				saveDoubleCheckinConf() {
						let vals = [this.enableDoubleCheckin];
						if (this.enableDoubleCheckin) {
								if (!this.dobuleCheckinIntervalMin) {
										$.Msg.error('请设置有效的最小间隔时间');
										return;
								}
								vals.push(this.dobuleCheckinIntervalMin);
						}
						let args = { typeId: $.Dict.ShopArg.PL_DOUBLE_CHECKIN_CONF, typeValue: vals.join(',') };
						$.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
								$.Msg.success($.Lang.SAVE_SUCCESS);
						});
				}
		}
});

/***/ }),

/***/ 1243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_course_cust_private_lesson_booking_vue__ = __webpack_require__(2185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_course_cust_private_lesson_booking_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_course_cust_private_lesson_booking_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { CustPrivateLessonBooking: __WEBPACK_IMPORTED_MODULE_0__pages_course_cust_private_lesson_booking_vue___default.a, MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default.a },
	data() {
		return {
			g: window.$,
			editable: $.Util.hasRoleFunc($.Dict.RoleFunc.COURSE_EDIT.value),
			query: {
				courseId: '',
				coachId: '',
				beginDate: null,
				endDate: null,
				status: null
			},
			coachList: [],
			bookingDlg: false,
			custPcLessonList: null,
			totalCount: null,
			selectCplId: 0,
			cplDlg: false,
			viewMemberDlg: null,
			viewMemberId: null,
			stat: {
				custCount: null,
				memberCount: null,
				convertRate: null
			}
		};
	},

	created() {
		if (this.editable) {
			$.Req.queryCoachBase(2, data => {
				this.coachList = data;
			});
		} else {
			this.coachList = [{ staffId: $.data.user.staffId, name: $.data.user.uname }];
			this.query.coachId = $.data.user.staffId;
		}

		this.queryCustPcLesson();
	},

	methods: {
		resetQuery() {
			this.query.beginDate = null;
			this.query.endDate = null;
			this.query.coachId = '';
			this.query.status = '';
			this.query.custPhone = null;
		},

		queryCustPcLesson(page = null) {
			if (this.query.custPhone) {
				if (!$.Util.validatePhoneNo(this.query.custPhone)) {
					$.Msg.error('客户手机号格式有误');
					return;
				}
			}

			if (!page) this.totalCount = null;
			let args = {
				beginDate: this.query.beginDate,
				endDate: this.query.endDate,
				coachId: this.query.coachId,
				status: this.query.status,
				custPhone: this.query.custPhone,
				page: page,
				needStatData: !this.query.custPhone
			};

			$.Req.service($.SvName.CUST_PC_LESSON_QUERY, args, ret => {
				if (!page) {
					this.totalCount = ret.count;
					this.stat.custCount = ret.custCount;
					this.stat.memberCount = ret.memberCount;
					this.stat.convertRate = ret.convertRate;
				}
				this.custPcLessonList = ret.cplList;
				window.scrollTo(0, 0);
			});
		},

		afterSubmitBooking() {
			this.bookingDlg = false;
			this.queryCustPcLesson();
		},

		openCplDlgForCreate() {
			this.selectCplId = null;
			this.bookingDlg = true;
		},

		openCplDlgForEdit(id) {
			this.selectCplId = id;
			this.bookingDlg = true;
		},

		delCpl(idx) {
			let cpl = this.custPcLessonList[idx];
			let msg = "您确定删除客户【{0}】的私教体验课吗？".format(cpl.custName);
			$.Dlg.confirm(msg, yes => {
				let args = { actionType: 'D', deleteId: cpl.cplId };
				$.Req.service($.SvName.CUST_PC_LESSON_SAVE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					this.queryCustPcLesson();
				});
			});
		},

		viewCpl(id) {
			$.Req.service($.SvName.CUST_PC_LESSON_QUERY, { cplId: id }, ret => {
				this.selectCpl = ret.cpl;
				this.cplDlg = true;
			}, true);
		},

		viewMemberBase(memberId) {
			this.viewMemberId = memberId;
			this.viewMemberDlg = true;
		}
	}
});

/***/ }),

/***/ 1244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lesson_review_list__ = __webpack_require__(1125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lesson_review_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lesson_review_list__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, LessonReviewList: __WEBPACK_IMPORTED_MODULE_1__lesson_review_list___default.a },
  data() {
    return {
      g: $,
      menuList: $.PageMenus.LessonReview('gl-with-review'),
      lessonList: null,
      lessonCount: null,
      dlg: {
        lessonReviewView: false,
        lessonId: null
      },
      coachList: null,
      query: {
        coachId: null,
        lessonDates: []
      },
      dateOptions1: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          value() {
            const end = new Date();
            const start = new Date();
            return [start, end];
          }
        }, {
          text: '昨天',
          value() {
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24);
            const end = new Date(start.getTime());
            return [start, end];
          }
        }, {
          text: '最近一周',
          value() {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end];
          }
        }, {
          text: '最近一个月',
          value() {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end];
          }
        }, {
          text: '最近两个月',
          value() {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 60);
            return [start, end];
          }
        }, {
          text: '最近三个月',
          value() {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end];
          }
        }]
      }
    };
  },

  created() {
    this.queryCoachList();
    this.queryLessonWithReview();
  },

  methods: {
    queryLessonWithReview(page = null) {
      if (!page) {
        this.lessonCount = null;
      }
      let args = { page: page };
      if (this.query.coachId) args.coachId = this.query.coachId;
      if (this.query.lessonDates.length === 2 && this.query.lessonDates[0] && this.query.lessonDates[1]) {
        args.lessonDateBegin = this.query.lessonDates[0];
        args.lessonDateEnd = this.query.lessonDates[1];
      }
      $.Req.service($.SvName.LESSON_WITH_REVIEW_QUERY, args, ret => {
        this.lessonList = ret.lessonList;
        if (!page) {
          this.lessonCount = ret.count;
        }
      });
    },

    openLessonReviewDlg(lessonId) {
      this.dlg.lessonId = lessonId;
      this.dlg.lessonReviewView = true;
    },

    queryCoachList() {
      $.Req.queryCoachBase(1, data => {
        this.coachList = data;
      });
    }
  }
});

/***/ }),

/***/ 1245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, ImgUpload: __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue___default.a },
	data() {
		return {
			g: $,
			pageTitle: this.$route.params.courseId ? '团体课程详情' : '添加团体课程',
			course: {
				courseId: null,
				courseCategory: null,
				courseName: null,
				duration: null,
				logoPathname: null,
				maxStudents: null,
				minStudents: null,
				courseType: 1,
				videoId: null,
				pics: null
			},
			requiredFields: ['courseName', 'maxStudents'],
			courseFormRule: {},
			imgUpload: {
				action: $.Conf.IMG_UPLOAD_URL,
				imgMaxWidth: 1024,
				defaultList: [],
				defaultMorePics: []
			},
			courseCateName: '',
			courseCateList: [],
			courseCateDlgView: false,
			getVideoIdDlg: null,
			txVideoUrl: null,
			imgFileList: [],
			videoType: null // 1-微官网，2-系统内
		};
	},

	created() {
		if (this.requiredFields) {
			$.Util.addRequiredFieldsRules(this.courseFormRule, this.requiredFields);
		}
		this.loadCourseCategoryList(this.loadCourse);
	},

	methods: {
		loadCourse() {
			if (this.$route.params.courseId) {
				this.course.courseId = parseInt(this.$route.params.courseId);
				$.Req.service($.SvName.COURSE_QUERY, { queryType: 1, courseId: this.course.courseId }, ret => {
					if (!ret.courseList) {
						$.Dlg.error($.Lang.NOT_FOUND_TIPS);
						return false;
					}

					this.course = ret.courseList[0];
					if (!this.course.maxStudents) this.course.maxStudents = null;
					if (!this.course.minStudents) this.course.minStudents = null;
					if (this.course.logoPathname) {
						this.imgUpload.defaultList.push({
							name: this.course.logoPathname,
							url: $.Util.getImgUrl(this.course.logoPathname)
						});
					}
					this.courseCateName = this.getCourseCateName(this.course.courseCategory);

					if (this.course.pics) {
						for (let p of this.course.pics.split(',')) {
							this.imgUpload.defaultMorePics.push({
								name: p,
								url: $.Util.getImgUrl(p, 200, 200, 'EEEEEE')
							});
						}
					}
					this.imgFileList = this.imgUpload.defaultMorePics;
				});
			}
		},

		getCourseCateName(cateId) {
			if (!cateId) return null;

			for (let c of this.courseCateList) {
				if (cateId === c.intValue) return c.itemName;
			}
			return null;
		},

		loadCourseCategoryList(callback) {
			$.Req.service($.SvName.DICT_QUERY, { dictType: 1 }, ret => {
				this.courseCateList = ret.dictList;
				if (callback) callback();
			});
		},

		handleImgUploadSuccess(res, file) {
			file.url = res.data.url;
			file.name = res.data.name;
			this.course.logoPathname = res.data.name;
		},

		handleSaveCourse() {
			this.$refs.course.validate(valid => {
				if (!valid) return false;
				if (!this.course.courseCategory) {
					$.Msg.error('请选择课程类别');
					return;
				}

				if (this.imgFileList && this.imgFileList.length > 0) {
					let imgNames = [];
					for (let i = 0; i < this.imgFileList.length; i++) {
						imgNames.push(this.imgFileList[i].name);
					}
					this.course.pics = imgNames.join(',');
				} else {
					this.course.pics = null;
				}
				if (this.course.videoId && this.course.videoId.length > 20) {
					$.Msg.error('课程视频（微官网）编码格式有误');
					return;
				}
				if (this.course.innerVideoId && this.course.innerVideoId.length > 20) {
					$.Msg.error('课程视频（系统内）编码格式有误');
					return;
				}

				let args = {
					actionType: this.course.courseId ? 'U' : 'I',
					course: this.course
				};
				$.Req.service($.SvName.COURSE_SAVE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					if (args.actionType === 'I') this.$router.push('/group-course');
				});
			});
		},

		openCourseCateDlg() {
			this.courseCateDlgView = true;
		},

		selectCourseCate(val, name) {
			this.courseCateDlgView = false;
			this.course.courseCategory = val;
			this.courseCateName = name;
		},

		handleMorePisUploadSuccess(res, file) {
			file.url = res.data.url;
			file.name = res.data.name;
			this.imgFileList.push(file);
		},

		handleImgRemove(file, fileList) {
			this.imgFileList.splice(this.imgFileList.indexOf(file), 1);
		},

		parseTxVideoUrl() {
			if (!this.txVideoUrl) {
				$.Msg.error('请输入视频页面地址');
				return;
			}
			try {
				let elements = this.txVideoUrl.split('/');
				if (elements.length > 3) {
					let videoId = elements[elements.length - 1].split('.')[0];
					let reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
					if (reg.test(videoId) || videoId.length > 15) {
						throw 'error';
					}
					if (this.videoType === 1) this.course.videoId = videoId;else if (this.videoType === 2) this.course.innerVideoId = videoId;
				} else {
					throw 'error';
				}
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.getVideoIdDlg = false;
			} catch (e) {
				alert('视频页面地址输入有误。');
			}
		},

		openVideoDlg(type) {
			this.videoType = type;
			this.getVideoIdDlg = true;
		}
	}
});

/***/ }),

/***/ 1246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_help__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_help___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_help__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_member_member_select_vue__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_member_member_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_member_member_select_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pages_member_member_base_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tenant_tenant_mp_auth__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tenant_tenant_mp_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__tenant_tenant_mp_auth__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { TenantMpAuth: __WEBPACK_IMPORTED_MODULE_4__tenant_tenant_mp_auth___default.a, PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, Help: __WEBPACK_IMPORTED_MODULE_1__components_help___default.a, MemberSelect: __WEBPACK_IMPORTED_MODULE_2__pages_member_member_select_vue___default.a, MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_3__pages_member_member_base_info_vue___default.a },
  data() {
    return {
      g: $,
      editable: $.Util.hasRoleFunc($.Dict.RoleFunc.COURSE_EDIT.value),
      csId: this.$route.params.csId,
      courseList: [],
      coachList: [],
      groundList: [],
      cardList: [],
      cardPayments: {},
      cs: {
        isNeedPayment: true,
        cardPaymentList: [],
        maxStudents: null,
        minStudents: null,
        isNeedBooking: true,
        enableQueue: true,
        allowMemberCheckin: true,
        maxMlBookings: 5,
        lessonTitleMap: {},
        coachLessonFeeType: 0,
        viceCoachLessonFeeType: 0,
        ageUnit: 0
      },
      requiredFields: ["courseId", "coachId", "dates", "maxStudents", "isNeedPayment", "isNeedBooking"],
      csFormRule: {
        maxMlBookings: [{
          type: "number",
          max: 100,
          min: 1,
          message: "请填写[1 ~ 100]之间的数字",
          trigger: "blur"
        }]
      },
      csTimes: {},
      weeks: ["星期 一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
      timesList: [[""], [""], [""], [""], [""], [""], [""]],
      timeValList: {},
      futureDateOption: {
        disabledDate(date) {
          return date && date.valueOf() < Date.now() - 86400000;
        }
      },
      classMembers: [],
      nameOrPhone: null,
      newLessonDlg: false,
      newLesson: {
        lessonDate: new Date(),
        lessonTimes: [],
        viceCoachIdArr: []
      },
      viceCoachIdList: [],
      cardCheckAll: false,
      showPsLessonTitle: false,
      lessonTitleList: {},
      lessonTitleMapForSubmit: {},
      memberSelectDlg: false,
      viewMemberDlg: false,
      selectMemberId: null,
      limitAges: [null, null],
      coachFeeConfList: [],
      excludeDateList: []
    };
  },

  created() {
    $.Util.addRequiredFieldsRules(this.csFormRule, this.requiredFields);

    $.Req.queryGroupCourseBase(data => {
      this.courseList = data;
    });
    $.Req.queryCoachBase(1, data => {
      this.coachList = data;
    });
    $.Req.queryGround(data => {
      this.groundList = data;
    });
    $.Req.service($.SvName.CARD_QUERY, {}, ret => {
      this.cardList = ret.cardList;
      for (let c of this.cardList) {
        // init cardPayments
        this.$set(this.cardPayments, c.cardId, {
          checked: false,
          payment: null
        });
        //this.cardPayments[c.cardId] = {checked: false, payment: null};
      }
      this.loadCs();
    });
  },

  methods: {
    loadCs() {
      let refId = null,
          queryCsId = parseInt(this.csId);
      if (!this.$route.params.csId) {
        refId = this.$route.query.refId;
        if (!refId) {
          return;
        } else {
          queryCsId = refId;
        }
      }
      if (!queryCsId) {
        this.$router.push("/group-course-schedule");
        return;
      }
      let args = { csId: queryCsId };
      $.Req.service($.SvName.COURSE_SCHEDULE_QUERY, args, ret => {
        if (!ret || !ret.courseSchedule) {
          this.$router.push("/group-course-schedule");
          return;
        }
        if (!ret.courseSchedule.isNeedBooking) {
          ret.courseSchedule.isNeedBooking = false;
        }
        ret.courseSchedule.isNeedPayment = true;
        this.coachFeeConfList = ret.coachFeeConfList;
        this.cs = ret.courseSchedule;
        if (!this.cs.ageUnit) this.cs.ageUnit = 0;
        if (refId) {
          this.cs.csId = null;
        }
        this.viceCoachIdList = [];
        if (this.cs.viceCoachIds) {
          for (let id of this.cs.viceCoachIds.split(",")) {
            this.viceCoachIdList.push(parseInt(id));
          }
        }
        if (this.cs.classMembers) {
          let mids = [];
          for (let mid of this.cs.classMembers.split(",")) mids.push(parseInt(mid));
          args = { memberIdList: mids };
          $.Req.service($.SvName.MEMBER_BASE_LIST_QUERY, args, ret => {
            this.classMembers = ret.memberBaseList;
          });
        }
        this.setWeekTimes();
        this.setCardPayments();
        if (this.cs.limitAges) {
          this.limitAges = this.cs.limitAges.split(",");
        }
        if (this.cs.excludeDates) {
          for (let d of this.cs.excludeDates.split(",")) {
            this.excludeDateList.push(Date.new(d));
          }
        }
      }, true);
    },

    handleSubmit() {
      this.$refs.cs.validate(valid => {
        if (!valid) {
          $.Msg.error($.Lang.SUBMIT_ERR);
          return false;
        }

        if (!this.cs.beginDate) {
          $.Dlg.error("请设置课程开始日期。");
          return false;
        }
        if (!this.cs.endDate) {
          $.Dlg.error("请设置课程结束日期。");
          return false;
        }
        if (!this.genWeekTimes()) {
          $.Dlg.error("请设置课程周期。");
          return false;
        }
        if (this.limitAges[0] && !this.limitAges[1] || !this.limitAges[0] && this.limitAges[1]) {
          $.Dlg.error("请填写完整的年龄限制。");
          return false;
        }
        if (this.limitAges[0] && this.limitAges[1]) {
          let beginAge = parseInt(this.limitAges[0]),
              endAge = parseInt(this.limitAges[1]);
          if (beginAge > endAge || beginAge < 0 || endAge < 0) {
            $.Dlg.error("请填写合理的年龄限制。");
            return false;
          }
          this.cs.limitAges = this.limitAges.join(",");
        } else {
          this.cs.limitAges = null;
        }
        if (this.cs.isNeedPayment) {
          try {
            this.genCardPaymentList();
          } catch (err) {
            if (err) $.Dlg.error(err);
            return;
          }

          if (this.cs.cardPaymentList.length === 0) {
            $.Dlg.error("请设置本课结算卡");
            return;
          }
        }

        let msg = "";
        const selectCoachName = this.getCoachName(this.cs.coachId);
        const selectCourseName = this.getCourseName(this.cs.courseId);
        if (!this.cs.csId) msg = "您确定要为该教练【{0}】排课【{1}】吗？".format(selectCoachName, selectCourseName);else msg = "您确定要更新教练【{0}】的排课【{1}】吗？".format(selectCoachName, selectCourseName);

        $.Dlg.confirm(msg, yes => {
          let actionType = this.cs.csId ? "U" : "I";
          this.cs.classMembers = this.genClassMemberIds();
          this.cs.viceCoachIds = this.viceCoachIdList.join(",");
          this.cs.excludeDates = this.genCsExcludeDates();
          let args = {
            actionType: actionType,
            courseSchedule: this.cs,
            coachFeeConfList: this.coachFeeConfList
          };
          if (actionType === "I" && this.showPsLessonTitle) {
            args.lessonTitleMap = this.lessonTitleMapForSubmit;
          }
          $.Req.service($.SvName.COURSE_SCHEDULE_SAVE, args, ret => {
            if (ret.generatedLessonCnt) {
              $.Msg.success($.Lang.OPT_SUCCESS + "，已生成【{0}】节课".format(ret.generatedLessonCnt));
            } else {
              $.Msg.success($.Lang.OPT_SUCCESS);
            }
            if (actionType === "I") {
              this.$router.push("/group-course-schedule");
            } else {
              window.scrollTo(0, 0);
            }
          }, true);
        });
      });
    },

    genCsExcludeDates() {
      if ($.Util.isEmpty(this.excludeDateList)) return null;

      let dates = [];
      for (let d of this.excludeDateList) {
        if (d) dates.push(d);
      }
      dates.sort(function (a, b) {
        return a.compareDatePart(b);
      });
      let dateStrList = [];
      for (let d of dates) dateStrList.push($.Util.formatDate(d));

      return dateStrList.join(",");
    },

    genWeekTimes() {
      let weekTimes = [[], [], [], [], [], [], []];
      let lessonTitleMap = {};

      for (let key in this.timeValList) {
        let [weekIdx, timeIdx] = key.split("-");
        weekIdx = parseInt(weekIdx);
        let val = this.timeValList[key];
        if (Array.isArray(val) && val[0]) {
          let [beginDateTime, endDateTime] = val;
          let beginTime = $.Util.getTimeNum(beginDateTime);
          let endTime = $.Util.getTimeNum(endDateTime);
          weekTimes[weekIdx].push(beginTime + "-" + endTime);

          if (this.showPsLessonTitle && this.lessonTitleList[key]) {
            let week = (weekIdx + 1) % 7;

            lessonTitleMap[week + "-" + beginTime + "-" + endTime] = this.lessonTitleList[key];
          }

          // TODO 检查时间段是否有重复
        }
      }

      this.cs.week1Times = weekTimes[0].join(",");
      this.cs.week2Times = weekTimes[1].join(",");
      this.cs.week3Times = weekTimes[2].join(",");
      this.cs.week4Times = weekTimes[3].join(",");
      this.cs.week5Times = weekTimes[4].join(",");
      this.cs.week6Times = weekTimes[5].join(",");
      this.cs.week7Times = weekTimes[6].join(",");
      this.lessonTitleMapForSubmit = lessonTitleMap;

      let cnt = 0;
      for (let i = 0; i < 7; i++) {
        cnt += weekTimes[i].length;
      }

      return cnt !== 0;
    },

    genCardPaymentList() {
      this.cs.cardPaymentList = [];
      let card;
      for (let cardId in this.cardPayments) {
        const c = this.cardPayments[cardId];
        if (!c.checked) continue;

        card = this.findCard(parseInt(cardId));
        if ($.Util.isEmpty(c.payment) || c.payment === "") {
          if (card && card.cardType > 1) {
            throw "【{0}】未设置计费".format(card.cardName);
          }
        } else {
          if (card && c.payment < 0) {
            throw "【{0}】结算额必须大于等于0".format(card.cardName);
          }
          if (card && card.cardType === 2 && c.payment > 1) {
            if (!confirm("嘿，您设置的【{0}】每次课计费【{1}】次，是不是写错了，确定提交吗？".format(card.cardName, c.payment))) {
              throw null;
            }
          }
        }
        this.cs.cardPaymentList.push({
          csId: this.cs.csId,
          cardId: parseInt(cardId),
          payment: c.payment
        });
      }
    },

    findCard(cardId) {
      for (let i = 0, len = this.cardList.length; i < len; i++) {
        if (cardId === this.cardList[i].cardId) {
          return this.cardList[i];
        }
      }

      return null;
    },

    addTimePick(index) {
      this.timesList[index].push([]);
    },

    getCourseName(courseId) {
      for (let c of this.courseList) {
        if (c.courseId == courseId) return c.courseName;
      }
      return "";
    },

    getCoachName(coachId) {
      for (let c of this.coachList) {
        if (c.staffId == coachId) return c.name;
      }
      return "";
    },

    setWeekTimes() {
      const weekTimesList = [this.cs.week1Times, this.cs.week2Times, this.cs.week3Times, this.cs.week4Times, this.cs.week5Times, this.cs.week6Times, this.cs.week7Times];
      for (let i = 0; i < weekTimesList.length; i++) {
        if (!weekTimesList[i]) continue;

        const times = weekTimesList[i].split(",");
        for (let j = 1; j < times.length; j++) this.timesList[i].push("");
        for (let j = 0; j < times.length; j++) {
          let timespan = times[j].split("-");
          let beginTime = $.Util.formatTime(timespan[0]);
          let endTime = $.Util.formatTime(timespan[1]);
          this.timeValList[i + "-" + j] = [beginTime, endTime];
        }
      }
    },

    setCardPayments() {
      for (let c of this.cs.cardPaymentList) {
        this.cardPayments[c.cardId] = { checked: true, payment: c.payment };
      }
    },

    handleChangeCourse(val) {
      if (this.cs.csId) return;

      for (let c of this.courseList) {
        if (c.courseId === this.cs.courseId) {
          this.cs.maxStudents = c.maxStudents;
          this.cs.minStudents = c.minStudents;
          break;
        }
      }
    },

    delClassMember(memberId, name) {
      let msg = "确定删除固定学员【{0}】吗？".format(name);
      $.Dlg.confirm(msg, yes => {
        for (let i = 0; i < this.classMembers.length; i++) {
          if (this.classMembers[i].memberId === memberId) {
            this.classMembers.splice(i, 1);
            break;
          }
        }
      });
    },

    genClassMemberIds() {
      let mids = [];
      for (let m of this.classMembers) {
        mids.push(m.memberId);
      }
      return mids.join(",");
    },

    openNewLessonDlg() {
      this.newLesson = {
        coachId: this.cs.coachId,
        lessonDate: new Date(),
        lessonTimes: []
      };
      this.newLessonDlg = true;
    },

    createLesson() {
      // check
      if (!this.newLesson.coachId) {
        $.Msg.error("请选择教练");
        return;
      }
      if (!this.newLesson.lessonDate) {
        $.Msg.error("请选择上课日期");
        return;
      }
      if (!this.newLesson.lessonTimes[0] || !this.newLesson.lessonTimes[1]) {
        $.Msg.error("请选择上课时间");
        return;
      }

      let args = {
        csId: this.csId,
        coachId: this.newLesson.coachId,
        lessonDate: this.newLesson.lessonDate,
        beginTime: $.Util.getTimeNum(this.newLesson.lessonTimes[0]),
        endTime: $.Util.getTimeNum(this.newLesson.lessonTimes[1]),
        viceCoachIdList: this.newLesson.viceCoachIdArr
      };
      $.Req.service($.SvName.LESSON_CREATE, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.$router.push("/group-lesson");
      });
    },

    selectAllViceCoachList() {
      this.viceCoachIdList = [];
      for (let c of this.coachList) {
        this.viceCoachIdList.push(c.staffId);
      }
    },

    checkAllCards(val) {
      this.cardCheckAll = val;
      for (let c of this.cardList) {
        if (c.status !== 0) continue;
        this.$set(this.cardPayments, c.cardId, {
          checked: this.cardCheckAll,
          payment: this.cardPayments[c.cardId].payment
        });
        if (val && c.cardType === 2 && !this.cardPayments[c.cardId].payment) {
          this.cardPayments[c.cardId].payment = 1;
        }
      }
    },

    checkCardPayment(card) {
      if (this.cardPayments[card.cardId].checked) {
        if (card.cardType === 2 && !this.cardPayments[card.cardId].payment) {
          this.cardPayments[card.cardId].payment = 1;
        }
      }
    },

    copyCs() {
      let url = "/group-course-schedule-create?refId=" + this.csId;
      this.csId = null;
      this.$router.push(url);
      $.Msg.info("排课信息已复制，请修改后再提交。");
    },

    afterSelectMember(findedMember) {
      if (!findedMember) {
        $.Msg.error("未查询到会员");
        return;
      }
      if (this.classMembers.length > 100) {
        $.Dlg.error("最多只支持添加100个固定学员");
        return;
      }
      for (let m of this.classMembers) {
        if (findedMember.memberId === m.memberId) {
          $.Msg.warning("已添加该会员");
          return;
        }
      }
      this.classMembers.push({
        memberId: findedMember.memberId,
        name: findedMember.name
      });
      $.Msg.info("成功添加固定学员：" + findedMember.name);
    },

    viewMemberInfo(memberId) {
      this.selectMemberId = memberId;
      this.viewMemberDlg = true;
    },

    addCoachFeeConf(coachType) {
      this.coachFeeConfList.push({
        lessonMembers: null,
        coachFee: null,
        coachType: coachType
      });
    },

    addExcludeDateInput() {
      this.excludeDateList.push("");
    }
  }
});

/***/ }),

/***/ 1247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lesson_review_list_vue__ = __webpack_require__(1125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lesson_review_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lesson_review_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_select_vue__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_member_member_select_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sys_time_select__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sys_time_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_sys_time_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tenant_tenant_mp_auth__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tenant_tenant_mp_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__tenant_tenant_mp_auth__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { TenantMpAuth: __WEBPACK_IMPORTED_MODULE_3__tenant_tenant_mp_auth___default.a, TimeSelect: __WEBPACK_IMPORTED_MODULE_2__components_sys_time_select___default.a, LessonReviewList: __WEBPACK_IMPORTED_MODULE_0__lesson_review_list_vue___default.a, MemberSelect: __WEBPACK_IMPORTED_MODULE_1__pages_member_member_select_vue___default.a },
	data() {
		return {
			g: $,
			courseEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.COURSE_EDIT.value),
			courseList: [],
			coachList: [],
			courseScheduleList: [],
			query: {
				courseId: null,
				coachId: null,
				beginDate: null,
				endDate: null,
				memberId: null
			},
			reviewDlgTitle: null,
			reviewDlgView: false,
			courseScheduleId: 0,
			totalCount: null,
			enableCsCopy: false,
			isDisabledCs: null,
			selectCsId: null,
			selectCsIdx: null,
			selectCsDates: [null, null],
			updateCsDatesDlg: false,
			updateCsDatesDlgTit: null,
			memberName: null,
			memberSelectDlgForQuery: null,
			psCkList: new Array(30),
			isSelectAll: false,
			csCardAppendDlg: null,
			selectCardId: null,
			selectCard: null,
			selectCardPayment: null,
			cardList: null,
			csWeektimesConfDlg: null,
			selectCs: null
		};
	},

	created() {
		$.Req.queryGroupCourseBase(data => {
			this.courseList = data;
		});
		$.Req.queryCoachBase(1, data => {
			this.coachList = data;
		});

		this.resetQuery();
		this.doQuery();
	},

	methods: {
		doQuery(page = null) {
			if (this.query.beginDate && !this.query.endDate || !this.query.beginDate && this.query.endDate) {
				$.Dlg.error('请输入完整课程日期');
				return;
			}
			let args = {
				beginDate: this.query.beginDate,
				endDate: this.query.endDate,
				courseId: this.query.courseId,
				coachId: this.query.coachId,
				page: page
			};
			if (this.isDisabledCs) args.status = 99;else args.status = 0;
			if (this.memberName && this.query.memberId) {
				args.classMemberId = this.query.memberId;
			}
			if (page === null) this.totalCount = null;
			$.Req.service($.SvName.COURSE_SCHEDULE_QUERY, args, ret => {
				this.courseScheduleList = ret.courseScheduleList;
				if (page === null) {
					this.totalCount = ret.count;
				}
				window.scrollTo(0, 0);
			});
		},

		handleAddCourseSchedule() {
			this.$router.push('/group-course-schedule-create');
		},

		resetQuery() {
			this.query.courseId = '';
			this.query.coachId = '';
			this.query.beginDate = null;
			this.query.endDate = null;
			this.query.memberId = null;
			this.memberName = null;
		},

		delCourseSchedule(index) {
			const c = this.courseScheduleList[index];
			$.Dlg.confirm($.Lang.DEL_COURSE_SCHEDULE_WARN.format(c.coachName, c.courseName), yes => {
				const args = { actionType: 'D', deleteId: c.csId };
				$.Req.service($.SvName.COURSE_SCHEDULE_SAVE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					this.courseScheduleList.splice(index, 1);
				});
			});
		},

		updateCourseScheduleStatus(index, statusCode) {
			if (statusCode === 'S') {
				alert('友情提示：点击此处“隐藏”只会影响排课记录是否在当前页面显示，不影响排课信息与约课。');
			}

			const c = this.courseScheduleList[index];
			const args = { actionType: statusCode, csId: c.csId };
			$.Req.service($.SvName.COURSE_SCHEDULE_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.doQuery();
			});
		},

		openLessonReview(courseScheduleId, courseName, coachName) {
			this.reviewDlgTitle = '课程评价：{0} - {1}'.format(courseName, coachName);
			this.courseScheduleId = courseScheduleId;
			this.reviewDlgView = true;
		},

		openUpdateCsDatesDlg(idx) {
			let cs = this.courseScheduleList[idx];
			this.selectCsId = cs.csId;
			this.selectCsIdx = idx;
			this.selectCsDates = [cs.beginDate, cs.endDate];
			this.updateCsDatesDlgTit = '{0} / {1}'.format(cs.csName ? cs.csName : cs.courseName, cs.coachName);
			this.updateCsDatesDlg = true;
		},

		updateCsDates() {
			if (!this.selectCsDates[0] || !this.selectCsDates[1]) {
				$.Msg.error('请设置有效的课程日期');
				return;
			}
			if (this.selectCsDates[0] > this.selectCsDates[1]) {
				$.Msg.error('课程开始日期不能大于结束日期');
				return;
			}
			let cs = this.courseScheduleList[this.selectCsIdx];
			let args = { csId: cs.csId };
			$.Req.service($.SvName.COURSE_SCHEDULE_QUERY, args, ret => {
				if (ret && ret.courseSchedule) {
					ret.courseSchedule.beginDate = Date.new(this.selectCsDates[0]);
					ret.courseSchedule.endDate = Date.new(this.selectCsDates[1]);
					let args2 = { actionType: 'U', courseSchedule: ret.courseSchedule };
					$.Req.service($.SvName.COURSE_SCHEDULE_SAVE, args2, ret2 => {
						$.Msg.success($.Lang.OPT_SUCCESS);
						cs.beginDate = ret.courseSchedule.beginDate;
						cs.endDate = ret.courseSchedule.endDate;
						this.$set(this.courseScheduleList, this.selectCsIdx, cs);
						this.updateCsDatesDlg = false;
					}, true);
				}
			});
		},

		openSelectMember() {
			this.memberSelectDlgForQuery = true;
		},

		afterSelectMemberForQuery(m) {
			if (m) {
				this.memberName = m.name;
				this.query.memberId = m.memberId;
			} else {
				this.memberName = null;
				this.query.memberId = null;
			}
			this.memberSelectDlgForQuery = false;
		},

		selectPs(idx) {
			this.$set(this.psCkList, idx, !this.psCkList[idx]);
		},

		selectAll() {
			this.isSelectAll = !this.isSelectAll;
			for (let i = 0, len = this.psCkList.length; i < len; i++) {
				this.$set(this.psCkList, i, this.isSelectAll);
			}
		},

		unselectAll() {
			this.isSelectAll = false;
			for (let i = 0, len = this.psCkList.length; i < len; i++) {
				this.$set(this.psCkList, i, false);
			}
		},

		openCsCardAppendDlg() {
			let checkedPsIdList = [];
			for (let i = 0, len = this.psCkList.length; i < len && i < this.courseScheduleList.length; i++) {
				if (this.psCkList[i]) checkedPsIdList.push(this.courseScheduleList[i].csId);
			}
			if (checkedPsIdList.length === 0) {
				$.Dlg.error('请选择一个或多个排课后再操作');
				return;
			}
			if ($.Util.isEmptyArray(this.cardList)) {
				$.Req.service($.SvName.CARD_QUERY, { queryType: 2, status: 0 }, ret => {
					this.cardList = ret.cardList;
				});
			}
			this.selectCard = null;
			this.selectCardId = null;
			this.selectCardPayment = null;
			this.csCardAppendDlg = true;
		},

		chooseCard(cardId) {
			for (let c of this.cardList) {
				if (c.cardId == cardId) {
					this.selectCard = c;
					return;
				}
			}
		},

		submitAppendCardPaymentToCsList() {
			if (!this.selectCardId) {
				$.Msg.error('请选择一个卡');
				return;
			}
			let args = { cardId: this.selectCardId };
			if (this.selectCard.cardType == 1) {
				args.cardPayment = null;
			} else {
				if ($.Util.isEmpty(this.selectCardPayment)) {
					$.Msg.error('请填写上课计费');
					return;
				}
				if (this.selectCardPayment < 0) {
					$.Msg.error('上课计费不能小于0');
					return;
				}
				args.cardPayment = this.selectCardPayment;
			}

			args.csIdList = [];
			for (let i = 0, len = this.psCkList.length; i < len && i < this.courseScheduleList.length; i++) {
				if (this.psCkList[i]) {
					args.csIdList.push(this.courseScheduleList[i].csId);
				}
			}

			$.Req.service($.SvName.CS_CARD_PAYMENT_APPEND, args, ret => {
				$.Dlg.success($.Lang.OPT_SUCCESS);
				this.csCardAppendDlg = false;
			}, true);
		},

		displayCsWeektimes(cs) {
			this.selectCs = cs;
			this.csWeektimesConfDlg = true;
		}
	}
});

/***/ }),

/***/ 1248:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	components: {},
	data() {
		return {
			g: $,
			courseEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.COURSE_EDIT.value),
			course: {},
			courseViewShow: false,
			courseList: [],
			courseCateMap: {},
			isDisabledCourse: false,
			hiddenUnusedCourseLesson: null
		};
	},

	created() {
		this.queryCourseCateDict(() => {
			this.queryCourseList();
		});
	},

	methods: {
		queryCourseList() {
			let args = {
				queryType: 2, courseType: 1, status: 0
			};
			if (this.isDisabledCourse) args.status = 99;
			$.Req.service($.SvName.COURSE_QUERY, args, ret => {
				this.courseList = ret.courseList;
			}, true);
		},

		queryCourseCateDict(callback) {
			$.Req.service($.SvName.DICT_QUERY, { dictType: 1 }, ret => {
				for (let dict of ret.dictList) {
					this.courseCateMap[dict.intValue] = dict.itemName;
				}
				if (callback) callback();
			});
		},

		handleAddCourse() {
			this.$router.push('/group-course-create');
		},

		delCourse(index) {
			$.Dlg.confirm($.Lang.DEL_COURSE_WARN, yes => {
				const c = this.courseList[index];
				const args = { actionType: 'D', deleteId: c.courseId };
				$.Req.service($.SvName.COURSE_SAVE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					this.courseList.splice(index, 1);
				});
			});
		},

		updateCourseStatus(index, statusCode) {
			if (statusCode === 'S') {
				if (!confirm('您确定要停用此课程吗？ 停用后该课程的课将不展示在课表中。')) {
					return;
				}
			}

			const c = this.courseList[index];
			const args = { actionType: statusCode, courseId: c.courseId };
			$.Req.service($.SvName.COURSE_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryCourseList();
			});
		},

		viewCourse(index) {
			this.course = this.courseList[index];
			if (this.course.logoPathname) {
				this.course.imgUrl = $.Util.getImgUrl(this.course.logoPathname);
			}
			this.courseViewShow = true;
		}
	}
});

/***/ }),

/***/ 1249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_select_vue__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_member_member_select_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { MemberSelect: __WEBPACK_IMPORTED_MODULE_0__pages_member_member_select_vue___default.a },
	data() {
		return {
			g: $,
			lessonCancelLogList: null,
			lessonCancelLogCount: null,
			mlCancelLogList: null,
			mlCancelLogCount: null,
			coachList: [],
			query: {
				beginDate: null,
				endDate: null,
				coachId: null,
				memberId: null
			},
			memberLessonListDlg: false,
			tabName: null,
			dateOptions: {
				disabledDate(date) {
					return date && date.valueOf() > Date.now();
				}
			},
			memberNameForBookingCancel: null,
			memberNameForCheckinCancel: null,
			memberSelectDlgForQueryBookingCancel: null,
			memberSelectDlgForQueryCheckinCancel: null,
			mlCheckinCancelLogList: null,
			mlCheckinCancelLogCount: null
		};
	},

	created() {
		$.Req.queryCoachBase(1, data => {
			this.coachList = data;
		});
		this.queryLessonCancelLogList();
	},

	methods: {
		changeTab() {
			if (this.tabName === 'bookingLog') {
				this.queryMemberLessonCancelLogList();
			} else if (this.tabName === 'checkinCancelLog') {
				this.queryMemberLessonCheckinCancelLogList();
			}
		},

		queryLessonCancelLogList(page = null) {
			if (!page) this.lessonCancelLogCount = null;

			if (this.query.beginDate && !this.query.endDate || this.query.endDate && !this.query.beginDate) {
				$.Msg.error('请输入完整的上课日期范围');
				return;
			}

			let args = {
				beginDate: this.query.beginDate,
				endDate: this.query.endDate,
				coachId: this.query.coachId,
				page: page
			};
			$.Req.service($.SvName.LESSON_CANCEL_LOG_QUERY, args, ret => {
				this.lessonCancelLogList = ret.lessonCanceLogList;
				if (!page) {
					this.lessonCancelLogCount = ret.count;
				}
			}, true);
		},

		queryMemberLessonCancelLogListByLesson(lessonId) {
			let args = { lessonId: lessonId };
			$.Req.service($.SvName.MEMBER_LESSON_CANCEL_LOG_QUERY, args, ret => {
				this.mlCancelLogList = ret.logList;
				this.memberLessonListDlg = true;
			}, true);
		},

		resetQuery() {
			this.query.beginDate = null;
			this.query.endDate = null;
			this.query.coachId = null;
		},

		queryMemberLessonCancelLogList(page = null) {
			if (!page) this.mlCancelLogCount = null;
			let args = { page: page };
			if (this.query.memberIdForBookingCancel) {
				args.memberId = this.query.memberIdForBookingCancel;
			}
			$.Req.service($.SvName.MEMBER_LESSON_CANCEL_LOG_QUERY, args, ret => {
				this.mlCancelLogList = ret.logList;
				if (!page) {
					this.mlCancelLogCount = ret.count;
				}
			}, true);
		},

		openSelectMemberForBookingCancel() {
			this.memberSelectDlgForQueryBookingCancel = true;
		},

		openSelectMemberForCheckinCancel() {
			this.memberSelectDlgForQueryCheckinCancel = true;
		},

		afterSelectMemberForBookingCancel(m) {
			if (m) {
				this.memberNameForBookingCancel = m.name;
				this.query.memberIdForBookingCancel = m.memberId;
			} else {
				this.memberNameForBookingCancel = null;
				this.query.memberIdForBookingCancel = null;
			}
			this.memberSelectDlgForQueryBookingCancel = false;
			this.queryMemberLessonCancelLogList(null);
		},

		clearMemberForBookingCancel() {
			if (!this.memberNameForBookingCancel) {
				this.query.memberIdForBookingCancel = null;
				this.queryMemberLessonCancelLogList(null);
			}
		},

		clearMemberForCheckinCancel() {
			if (!this.memberNameForCheckinCancel) {
				this.query.memberIdForCheckinCancel = null;
				this.queryMemberLessonCheckinCancelLogList(null);
			}
		},

		queryMemberLessonCheckinCancelLogList(page = null) {
			if (!page) this.mlCheckinCancelLogCount = null;
			let args = { page: page };
			if (this.query.memberIdForCheckinCancel) {
				args.memberId = this.query.memberIdForCheckinCancel;
			}
			$.Req.service($.SvName.MEMBER_LESSON_CHECKIN_CANCEL_LOG_QUERY, args, ret => {
				this.mlCheckinCancelLogList = ret.logList;
				if (!page) {
					this.mlCheckinCancelLogCount = ret.count;
				}
			}, true);
		},

		afterSelectMemberForCheckinCancel(m) {
			if (m) {
				this.memberNameForCheckinCancel = m.name;
				this.query.memberIdForCheckinCancel = m.memberId;
			} else {
				this.memberNameForCheckinCancel = null;
				this.query.memberIdForCheckinCancel = null;
			}
			this.memberSelectDlgForQueryCheckinCancel = false;
			this.queryMemberLessonCheckinCancelLogList(null);
		}
	}
});

/***/ }),

/***/ 1250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_help__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_help___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_help__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, Help: __WEBPACK_IMPORTED_MODULE_1__components_help___default.a },
  data() {
    return {
      g: $,
      courseEditPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.COURSE_EDIT.value),
      editable: true,
      menuList: $.PageMenus.groupLesson(this.$route.params.lessonId, "group-lesson-edit"),
      cardList: [],
      coachList: [],
      groundList: [],
      cardPayments: {},
      lesson: {
        status: null,
        lessonTimes: [],
        isNeedBooking: false,
        maxStudents: null,
        enableQueue: true,
        content: null
      },
      requiredFields: ["courseId", "coachId", "maxStudents"],
      lessonFormRule: {},
      isNeedPayment: true,
      classMembers: [],
      viceCoachIdList: []
    };
  },

  created() {
    $.Util.addRequiredFieldsRules(this.lessonFormRule, this.requiredFields);
    $.Req.queryCoachBase(1, data => {
      this.coachList = data;
    });
    $.Req.queryGround(data => {
      this.groundList = data;
    });
    this.loadLesson();
  },

  methods: {
    loadLesson() {
      if (!this.$route.params.lessonId) return;

      this.lesson.lessonId = this.$route.params.lessonId;
      let args = {
        lessonId: this.lesson.lessonId
      };
      $.Req.service($.SvName.LESSON_QUERY, args, ret => {
        if (!ret || !ret.lesson) {
          $.Msg.error($.Lang.NOT_FOUND_RECORD);
          this.$router.push("/group-lesson");
          return;
        }
        if (ret.lesson.classMembers) {
          let mids = [];
          for (let mid of ret.lesson.classMembers.split(",")) mids.push(parseInt(mid));
          args = { memberIdList: mids };
          $.Req.service($.SvName.MEMBER_BASE_LIST_QUERY, args, r => {
            this.classMembers = r.memberBaseList;
          });
        }
        this.lesson = ret.lesson;
        this.lesson.statusName = $.Dict.LessonStatus[this.lesson.status];
        this.editable = this.lesson.status === 0;
        if (this.lesson.status === 9 && !$.data.user.isShopOwner) this.courseEditPermit = false;
        this.lesson.lessonTimes = [$.Util.formatTime(this.lesson.beginTime), $.Util.formatTime(this.lesson.endTime)];
        this.viceCoachIdList = [];
        if (this.lesson.viceCoachIds) {
          for (let id of this.lesson.viceCoachIds.split(",")) {
            this.viceCoachIdList.push(parseInt(id));
          }
        }

        // set card_payment_conf
        $.Req.service($.SvName.CARD_QUERY, { queryType: 2, status: 0 }, ret => {
          this.cardList = ret.cardList;
          for (let c of this.cardList) {
            // init cardPayments
            this.cardPayments[c.cardId] = { checked: false, payment: null };
          }
          if (this.lesson.cardPaymentConf) {
            this.isNeedPayment = true;
            let setCardPayments = this.lesson.cardPaymentConf.split(",");
            for (let i = 0; i < setCardPayments.length; i++) {
              let [cardId, payment] = setCardPayments[i].split(":");
              this.cardPayments[cardId] = {
                checked: true,
                payment: payment
              };
            }
          }
        });
      }, true);
    },

    handleSubmit() {
      this.$refs.lesson.validate(valid => {
        if (!valid) {
          $.Msg.error($.Lang.SUBMIT_ERR);
          return;
        }

        // check
        if (this.lesson.lessonTitle && this.lesson.lessonTitle.length > 100) {
          $.Msg.error("上课主题字数不能超过100");
          return;
        }
        if (!this.lesson.lessonDate) {
          $.Msg.error("请选择上课日期");
          return;
        }
        if (!this.lesson.lessonTimes || this.lesson.lessonTimes.length !== 2 || !this.lesson.lessonTimes[0] || !this.lesson.lessonTimes[1]) {
          $.Msg.error("请选择上课时间范围");
          return;
        }
        let cardPaymentConf = null;
        try {
          cardPaymentConf = this.genCardPaymentConf();
          if (!cardPaymentConf) {
            $.Dlg.error("请设置本节课的结算卡");
            return;
          }
        } catch (err) {
          if (err) $.Dlg.error(err);
          return;
        }

        let args = {
          actionType: "U",
          lesson: {
            lessonId: this.lesson.lessonId,
            courseId: this.lesson.courseId,
            coachId: this.lesson.coachId,
            viceCoachId: this.lesson.viceCoachId,
            groundId: this.lesson.groundId,
            lessonDate: this.lesson.lessonDate,
            beginTime: $.Util.getTimeNum(this.lesson.lessonTimes[0]),
            endTime: $.Util.getTimeNum(this.lesson.lessonTimes[1]),
            content: this.lesson.content,
            maxStudents: this.lesson.maxStudents,
            minStudents: this.lesson.minStudents,
            cardPaymentConf: cardPaymentConf,
            isNeedBooking: this.lesson.isNeedBooking,
            enableQueue: this.lesson.enableQueue,
            viceCoachIds: this.viceCoachIdList.join(","),
            coachLessonFee: this.lesson.coachLessonFee,
            viceCoachLessonFee: this.lesson.viceCoachLessonFee,
            lessonLevel: this.lesson.lessonLevel,
            lessonTitle: this.lesson.lessonTitle,
            meetingUrl: this.lesson.meetingUrl
          }
        };
        $.Req.service($.SvName.LESSON_SAVE, args, ret => {
          $.Msg.success($.Lang.OPT_SUCCESS);
          window.scrollTo(0, 0);
        }, true);
      });
    },

    handleDelLesson() {
      let args = { actionType: "D", deleteId: this.lesson.lessonId };
      $.Dlg.confirm("您确定要删除本节课吗？", ret => {
        $.Req.service($.SvName.LESSON_SAVE, args, ret => {
          $.Msg.success($.Lang.OPT_SUCCESS);
          this.$router.push("/group-lesson");
        });
      });
    },

    genCardPaymentConf() {
      if (!this.isNeedPayment) {
        return "";
      }

      let ret = [];
      let card;
      for (let cardId in this.cardPayments) {
        const c = this.cardPayments[cardId];
        if (!c.checked) continue;

        card = this.findCard(parseInt(cardId));
        if ($.Util.isEmpty(c.payment) || c.payment === "") {
          if (card && card.cardType > 1) {
            throw "【{0}】未设置计费".format(card.cardName);
          }
        } else {
          if (card && c.payment < 0) {
            throw "【{0}】结算额必须大于等于0".format(card.cardName);
          }
          if (card && card.cardType === 2 && c.payment > 1) {
            if (!confirm("嘿，您设置的【{0}】每次课计费【{1}】次，是不是写错了，确定提交吗？".format(card.cardName, c.payment))) {
              throw null;
            }
          }
        }

        ret.push("{0}:{1}".format(cardId, !$.Util.isEmpty(c.payment) ? c.payment : ""));
      }

      return ret.join(",");
    },

    findCard(cardId) {
      for (let i = 0, len = this.cardList.length; i < len; i++) {
        if (cardId === this.cardList[i].cardId) {
          return this.cardList[i];
        }
      }

      return null;
    }
  }
});

/***/ }),

/***/ 1251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lesson_review_list_vue__ = __webpack_require__(1125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lesson_review_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lesson_review_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_member_member_base_info_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, LessonReviewList: __WEBPACK_IMPORTED_MODULE_1__lesson_review_list_vue___default.a, MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_2__pages_member_member_base_info_vue___default.a },
	data() {
		return {
			g: $,
			lessonId: parseInt(this.$route.params.lessonId),
			menuList: $.PageMenus.groupLesson(this.$route.params.lessonId, 'group-lesson-member-cancel-log'),
			mlCancelLogList: null,
			viewMemberDlg: false,
			viewMemberId: null,
			mlCheckinCancelLogList: null
		};
	},

	created() {
		this.queryMemberLessonCancelLogListByLesson();
		this.queryMemberLessonCheckinCancelLogList();
	},

	methods: {
		queryMemberLessonCancelLogListByLesson() {
			let args = { lessonId: this.lessonId, page: 1 };
			$.Req.service($.SvName.MEMBER_LESSON_CANCEL_LOG_QUERY, args, ret => {
				this.mlCancelLogList = ret.logList;
			}, true);
		},

		queryMemberLessonCheckinCancelLogList() {
			let args = { lessonId: this.lessonId, page: 1 };
			$.Req.service($.SvName.MEMBER_LESSON_CHECKIN_CANCEL_LOG_QUERY, args, ret => {
				this.mlCheckinCancelLogList = ret.logList;
			}, false);
		},

		viewMember(memberId) {
			this.viewMemberId = memberId;
			this.viewMemberDlg = true;
		}
	}
});

/***/ }),

/***/ 1252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_course_group_lesson_records_vue__ = __webpack_require__(1149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_course_group_lesson_records_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_course_group_lesson_records_vue__);
//
//
//
//
//
//
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
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, GroupLessonRecords: __WEBPACK_IMPORTED_MODULE_1__pages_course_group_lesson_records_vue___default.a },
	data() {
		return {
			g: window.$,
			lessonId: parseInt(this.$route.params.lessonId),
			menuList: $.PageMenus.groupLesson(this.$route.params.lessonId, 'group-lesson-records')
		};
	},

	created() {},

	methods: {}
});

/***/ }),

/***/ 1253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lesson_review_list_vue__ = __webpack_require__(1125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lesson_review_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lesson_review_list_vue__);
//
//
//
//
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
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, LessonReviewList: __WEBPACK_IMPORTED_MODULE_1__lesson_review_list_vue___default.a },
	data() {
		return {
			lessonId: parseInt(this.$route.params.lessonId),
			menuList: $.PageMenus.groupLesson(this.$route.params.lessonId, 'lesson-review')
		};
	},

	created() {},

	methods: {}
});

/***/ }),

/***/ 1254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_course_coach_lesson_bgcolor_conf_vue__ = __webpack_require__(1211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_course_coach_lesson_bgcolor_conf_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_course_coach_lesson_bgcolor_conf_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lesson_img_list__ = __webpack_require__(2188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lesson_img_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lesson_img_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lesson_coach_comment_list__ = __webpack_require__(2187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lesson_coach_comment_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__lesson_coach_comment_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lesson_review_list__ = __webpack_require__(1125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lesson_review_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__lesson_review_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_course_group_lesson_records_vue__ = __webpack_require__(1149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_course_group_lesson_records_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__pages_course_group_lesson_records_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tenant_tenant_mp_auth__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tenant_tenant_mp_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__tenant_tenant_mp_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_help_vue__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_help_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_sys_img_upload_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_sys_img_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_sys_img_upload_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    TenantMpAuth: __WEBPACK_IMPORTED_MODULE_5__tenant_tenant_mp_auth___default.a,
    CoachLessonBgcolorConf: __WEBPACK_IMPORTED_MODULE_0__pages_course_coach_lesson_bgcolor_conf_vue___default.a,
    LessonImgList: __WEBPACK_IMPORTED_MODULE_1__lesson_img_list___default.a,
    LessonCoachCommentList: __WEBPACK_IMPORTED_MODULE_2__lesson_coach_comment_list___default.a,
    LessonReviewList: __WEBPACK_IMPORTED_MODULE_3__lesson_review_list___default.a,
    GroupLessonRecords: __WEBPACK_IMPORTED_MODULE_4__pages_course_group_lesson_records_vue___default.a,
    help: __WEBPACK_IMPORTED_MODULE_6__components_help_vue___default.a,
    ImgUpload: __WEBPACK_IMPORTED_MODULE_7__components_sys_img_upload_vue___default.a
  },
  data() {
    return {
      g: $,
      courseEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.COURSE_EDIT.value),
      memberAgentPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.MEMBER_AGENT.value),
      todayStr: new Date().format("yyyyMMdd"),
      courseList: [],
      coachList: [],
      lessonCount: 0,
      viewType: 1, // 1-cal, 2-list
      query: {
        courseId: "",
        coachId: "",
        beginDate: null,
        endDate: null,
        dateDesc: null,
        dateType: "week",
        isFinishedLesson: null
      },
      lessonRowList: [],
      beginTimes: [],
      lessonMap: {},
      weekDates: new Array(7),
      today: new Date(),
      viewBgcolorDlg: false,
      bgColorMap: {},
      textColorMap: {},
      lessonList: null,
      lessonDateCntMap: {},
      showBookings: true,
      dlg: {
        lessonId: null,
        lessonImgView: false,
        lessonCoachCommentView: false,
        lessonReviewView: false,
        viewGroupLessonRecordsDlgTitle: null
      },
      viewGroupLessonRecordsDlg: false,
      sum: {
        bookings: 0,
        students: 0,
        checkins: 0
      },
      showGroundName: true,
      selectLesson: null,
      showUnusedCourseLesson: null,
      enableGlCheckout: null,
      lessonPage: null,
      isCombineLessonDate: true,
      exportDlg: null,
      exportFileUrl: null,
      bgColorType: 1,
      defaultColor: "777777",
      defaultTextColor: "FFFFFF",

      exportLessonTableDlg: false,
      setBannerImgDlg: false,
      skinDlg: false,
      lessonForm: {
        bannerPath: null,
        beginDate: null,
        endDate: null,
        shopName: null,
        qrcodePath: null,
        remark: null,
        skin: null,
        fontColor: null
      },
      bgImgUrl: null,
      imgUpload: {
        action: $.Conf.IMG_UPLOAD_URL,
        imgMaxWidth: 1024,
        defaultList: []
      },
      formRule: {},
      requiredFields: [],
      tableSkin: [{ skin: "pink", bgColor: "#ffb7bd", name: "粉色" }, { skin: "purple", bgColor: "#873bf4", name: "紫色" }, { skin: "blue", bgColor: "#367fff", name: "蓝色" }, { skin: "orange", bgColor: "#fdbfac", name: "橙色" }, { skin: "green", bgColor: "#6fc28a", name: "绿色" }, { skin: "grey-blue", bgColor: "#e2ebee", name: "灰蓝色" }, { skin: "white", bgColor: "#ffffff", name: "白色" }, { skin: "red", bgColor: "#ee0000", name: "红色" }, { skin: "black", bgColor: "#000000", name: "黑色" }],
      skinColor: "pink",
      skinName: "",
      bgType: "1",
      BG_IMG_CNT: ["011", "012", "013", "014", "015", "021", "022", "023", "024", "025", "031", "032", "033", "034", "035", "041", "042", "051", "052", "061", "062", "071", "072", "081", "082", "091", "092", "101", "102", "111", "112"],
      qrcodeUrl: null,
      courseIdList: [],
      enableCourseFilter: false,
      successImg: null,
      successImgDlg: false
    };
  },

  watch: {
    viewGroupLessonRecordsDlg(val, oldVal) {
      if (val === false) {
        this.queryLessonList();
      }
    }
  },

  created() {
    $.Util.addRequiredFieldsRules(this.formRule, this.requiredFields);
    let val = $.Util.cookie.get($.Conf.CookieKeys.GL_VIEW_TYPE);
    if (val) this.viewType = parseInt(val);

    $.Req.queryGroupCourseBase(data => {
      this.courseList = data;
      for (let c of this.courseList) {
        this.courseIdList.push(c.courseId);
      }
    });
    $.Req.queryCoachBase(1, data => {
      this.coachList = data;
    });
    this.resetQuery();
    this.setDateForWeekQuery();
    this.setWeekDates();
    this.queryShopArgs(this.queryLessonList);
  },

  methods: {
    clearQrImg() {
      this.qrcodeUrl = null;
      this.lessonForm.qrcodePath = null;
    },

    clearSkin() {
      this.lessonForm.skin = null;
      this.skinColor = null;
      this.skinName = null;
    },

    queryGlTableExport() {
      $.Req.service($.SvName.GL_TABLE_EXPORT_CONFQUERY, {}, ret => {
        if (ret.glTableExportConf) {
          this.lessonForm.bannerPath = ret.glTableExportConf.bannerPath;
          this.lessonForm.shopName = ret.glTableExportConf.shopName;
          this.lessonForm.qrcodePath = ret.glTableExportConf.qrcodePath;
          this.lessonForm.remark = ret.glTableExportConf.remark;
          this.lessonForm.fontColor = ret.glTableExportConf.fontColor ? "#" + ret.glTableExportConf.fontColor : "";
          this.lessonForm.skin = ret.glTableExportConf.skin ? ret.glTableExportConf.skin : "pink";
          this.bgImgUrl = this.getBgImgUrl(this.lessonForm.bannerPath, "banner");
          this.qrcodeUrl = this.getBgImgUrl(this.lessonForm.qrcodePath, "qrCode");
          this.tableSkin.map(item => {
            if (item.skin == this.lessonForm.skin) {
              this.skinColor = item.bgColor;
              this.skinName = item.name;
            }
          });
        }
      });
    },

    getBgImgUrl(url, t) {
      if (url) {
        if (t == "banner") {
          if (url.length < 10) {
            return $.Conf.IMG_LIB_URL + "/course-table-bg/" + url;
          } else {
            return $.Util.getImgUrl(url);
          }
        }
        if (t == "qrCode") {
          return $.Util.getImgUrl(url);
        }
      }
    },

    createPic() {
      let oDate1 = new Date(this.lessonForm.beginDate);
      let oDate2 = new Date(this.lessonForm.endDate);
      if (oDate1 > oDate2) {
        $.Dlg.warning("课表日期设置错误");
        return;
      }
      if (!this.lessonForm.bannerPath) {
        $.Dlg.warning("请上传课程表背景图");
        return;
      }
      if (!this.lessonForm.fontColor) {
        $.Bble.warning("请选择场馆名称字体颜色");
        return;
      }
      let args = {
        bannerPath: this.lessonForm.bannerPath,
        beginDate: this.lessonForm.beginDate,
        endDate: this.lessonForm.endDate,
        shopName: this.lessonForm.shopName,
        qrcodePath: this.lessonForm.qrcodePath,
        remark: this.lessonForm.remark,
        skin: this.lessonForm.skin,
        fontColor: this.lessonForm.fontColor ? this.lessonForm.fontColor.replace("#", "") : null
      };
      if (this.enableCourseFilter) {
        args.courseIdList = this.courseIdList;
      }
      $.Req.service($.SvName.GL_TABLE_EXPORT, args, ret => {
        if (ret) {
          this.successImg = ret.lessonTableUrl;
          this.successImgDlg = true;
        }
      }, true);
    },

    clickSkin(s) {
      this.skinColor = s.bgColor;
      this.skinName = s.name;
      this.lessonForm.skin = s.skin;
      this.skinDlg = false;
    },

    handleImgUploadSuccess(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;
      this.lessonForm.bannerPath = res.data.name;
      this.bgImgUrl = res.data.url;
      this.setBannerImgDlg = false;
    },

    handleImgUploadQrcodeSuccess(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;
      this.lessonForm.qrcodePath = res.data.name;
      this.qrcodeUrl = res.data.url;
    },

    chooseBgImg(no) {
      this.lessonForm.bannerPath = no + ".png";
      this.bgImgUrl = $.Conf.IMG_LIB_URL + "/course-table-bg/" + no + ".png";
      this.setBannerImgDlg = false;
    },

    setWeekDates() {
      if (this.query.dateType === "week") {
        for (let i = 0; i < 7; i++) {
          this.weekDates[i] = new Date(this.query.beginDate.getTime() + 3600000 * 24 * i);
        }
      }
    },

    queryLessonList(page = null, isExport = null) {
      if (page === null) this.lessonCount = null;
      let showDate = this.query.endDate;
      if (this.query.dateType === "week") {
        if (new Date().compareDatePart(this.query.endDate) < 0) {
          showDate = this.query.beginDate;
        }
        this.setWeekDates();
      }
      this.lessonPage = page;

      this.query.dateDesc = showDate.format("yyyy年M月");
      let args = {
        beginDate: this.query.beginDate,
        endDate: this.query.endDate,
        courseId: this.query.courseId,
        coachId: this.query.coachId,
        needCheckDisableDates: true,
        gcType: this.query.gcType,
        page: page
      };
      this.lessonForm.beginDate = args.beginDate;
      this.lessonForm.endDate = args.endDate;
      if (!this.showUnusedCourseLesson) {
        args.courseStatus = 0;
      }
      args.needPaging = this.query.dateType === "month" && this.viewType === 2;
      if (this.viewType === 2) {
        args.needLessonImgCnt = true;
        args.needMemberReviewCnt = true;
        args.needCoachCommentCnt = true;
      }
      if (!args.beginDate || !args.endDate) {
        $.Dlg.error("请输入完整的课程开始和结束日期。");
        return;
      }
      if (this.query.isFinishedLesson === "true") args.status = 9;else if (this.query.isFinishedLesson === "false") args.notStatus = 9;

      if (isExport) {
        args.isExport = true;
        this.exportFileUrl = null;
        this.exportDlg = true;
      }
      $.Req.service($.SvName.LESSON_QUERY, args, ret => {
        if (isExport) {
          this.exportFileUrl = ret.fileurl;
          return;
        }
        this.lessonList = ret.lessonList;
        this.lessonDateCntMap = {};
        let sumOfbookings = 0;
        let sumOfCheckins = 0;
        let sumOfStudents = 0;
        let bookingRatesCnt = 0,
            bookingRatesSum = 0;
        for (let l of ret.lessonList) {
          if (!this.lessonDateCntMap[l.lessonDate]) {
            this.lessonDateCntMap[l.lessonDate] = 1;
          } else {
            this.lessonDateCntMap[l.lessonDate] += 1;
          }
          sumOfbookings += l.bookings ? l.bookings : 0;
          sumOfCheckins += l.checkins ? l.checkins : 0;
          sumOfStudents += l.classMemberCnt ? l.classMemberCnt : 0;
          if (l.bookings && l.maxStudents) {
            bookingRatesCnt++;
            bookingRatesSum += l.bookings / l.maxStudents;
          }
        }
        this.sum.bookings = sumOfbookings;
        this.sum.checkins = sumOfCheckins;
        this.sum.students = sumOfStudents;
        this.sum.avgBookingRates = bookingRatesCnt ? $.Util.round(100 * bookingRatesSum / bookingRatesCnt) : 0;
        if (page === null) {
          this.lessonCount = ret.count;
        } else {
          window.scrollTo(0, 0);
        }
        if (this.query.dateType === "week") {
          for (let l of ret.lessonList) {
            if (this.bgColorType === 1) {
              if (!this.bgColorMap[l.coachId]) this.bgColorMap[l.coachId] = this.defaultColor;
              if (!this.textColorMap[l.coachId]) this.textColorMap[l.coachId] = this.defaultTextColor;
            } else {
              if (!this.bgColorMap[l.courseId]) this.bgColorMap[l.courseId] = this.defaultColor;
              if (!this.textColorMap[l.courseId]) this.textColorMap[l.courseId] = this.defaultTextColor;
            }
          }
          this.setLessonMap(ret.lessonList);
        } else {
          this.setTblData(ret.lessonList);
        }
      }, true);
    },

    setTblData(lessonList) {
      let rowDataList = [];
      let preWeekDay = -1;
      let rowData = {};

      // init
      for (let d = new Date(this.query.beginDate); d <= this.query.endDate; d.setDate(d.getDate() + 1)) {
        let week = d.getDay();
        if (week === 0) week = 7;
        if (week < preWeekDay) {
          // 已到下一周
          rowDataList.push(rowData);
          rowData = {};
        }
        preWeekDay = week;
        rowData[week] = {
          date: new Date(d),
          lessons: []
        };
      }
      rowDataList.push(rowData);

      // fill lessons
      for (let i = 0, j = 0; i < rowDataList.length && j < lessonList.length; i++) {
        for (let key in rowDataList[i]) {
          while (j < lessonList.length) {
            let lesson = lessonList[j];
            let lessonDate = Date.new(lesson.lessonDate);
            let dateCmp = rowDataList[i][key].date.compareDatePart(lessonDate);
            if (dateCmp < 0) {
              break;
            }
            let lessonInTbl = lesson;
            lessonInTbl.beginTimeDesc = $.Util.formatTime(lesson.beginTime);
            lessonInTbl.endTimeDesc = $.Util.formatTime(lesson.endTime);
            rowDataList[i][key].lessons.push(lessonInTbl);
            j++;
          }
        }
      }
      this.lessonRowList = rowDataList;
    },

    setLessonMap(lessonList) {
      this.lessonMap = {};
      this.beginTimes = [];

      for (let l of lessonList) {
        let beginTime = $.Util.formatTime(l.beginTime);
        l.week = parseInt(Date.new(l.lessonDate).getDay());
        if (!this.lessonMap[beginTime]) {
          this.beginTimes.push(beginTime);
          this.lessonMap[beginTime] = {};
        }
        if (!this.lessonMap[beginTime][l.week]) {
          this.lessonMap[beginTime][l.week] = [];
        }
        this.lessonMap[beginTime][l.week].push(l);
      }
      this.beginTimes.sort();
    },

    resetQuery() {
      this.query.courseId = null;
      this.query.coachId = null;
      this.query.isFinishedLesson = null;
    },

    weekNavQuery(opt) {
      if (opt === "pre") {
        this.query.beginDate.add(-7);
        this.query.endDate.add(-7);
      } else if (opt === "next") {
        this.query.beginDate.add(7);
        this.query.endDate.add(7);
      }
      this.queryLessonList();
    },

    monthNav(opt) {
      this.query.beginDate.setDate(1);
      if (opt === "pre") {
        this.query.beginDate.setMonth(this.query.beginDate.getMonth() - 1);
      } else if (opt === "next") {
        this.query.beginDate.setMonth(this.query.beginDate.getMonth() + 1);
      }
      this.query.endDate.setDate(1);
      this.query.endDate.setMonth(this.query.beginDate.getMonth() + 1);
      this.query.endDate.add(-1);
      this.query.endDate.setFullYear(this.query.beginDate.getFullYear());

      this.queryLessonList(null);
    },

    setDateForWeekQuery() {
      this.query.dateType = "week";

      const mydate = new Date();
      let week = mydate.getDay();
      if (week === 0) week = 7;
      mydate.add(1 - week);
      this.query.beginDate = new Date(mydate);

      mydate.add(6);
      this.query.endDate = new Date(mydate);
    },

    queryByWeek() {
      this.setDateForWeekQuery();
      this.queryLessonList();
    },

    setDateForMonthQuery() {
      this.query.dateType = "month";

      const mydate = new Date();
      let week = mydate.getDay();
      mydate.setDate(1);
      this.query.beginDate = new Date(mydate);
      //console.log(this.query.beginDate.toLocaleDateString());

      mydate.setMonth(mydate.getMonth() + 1);
      mydate.add(-1);
      this.query.endDate = new Date(mydate);
      //console.log(this.query.endDate.toLocaleDateString());
    },

    queryByMonth() {
      this.setDateForMonthQuery();
      this.queryLessonList();
    },

    toLessonPage(lessonId) {
      this.$router.push("/group-lesson-records/" + lessonId);
    },

    afterSubmitBgColor(bgColorType) {
      this.bgColorType = bgColorType;
      this.viewBgcolorDlg = false;
      this.queryCoachBgColorConf(this.queryLessonList);
    },

    queryShopArgs(callbck = null) {
      let args = {
        typeIdList: [$.Dict.ShopArg.COACH_LESSON_BGCOLOR, 2087, 2212, 2213]
      };
      $.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
        let coachColorConf = null,
            courseColorConf = null;
        for (let t of ret.argList) {
          if (t.typeId === 2212) {
            if (t.typeValue) this.bgColorType = parseInt(t.typeValue);
          } else if (t.typeId === $.Dict.ShopArg.COACH_LESSON_BGCOLOR) {
            coachColorConf = t.typeValue;
          } else if (t.typeId === 2087) {
            this.enableGlCheckout = t.typeValue === "true";
          } else if (t.typeId === 2213) {
            courseColorConf = t.typeValue;
          }
        }
        this.parseBgColor(this.bgColorType === 1 ? coachColorConf : courseColorConf);

        if (callbck) callbck();
      });
    },

    queryCoachBgColorConf(callbck) {
      let args = {
        typeId: this.bgColorType === 1 ? $.Dict.ShopArg.COACH_LESSON_BGCOLOR : 2213
      };
      $.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
        this.parseBgColor(ret.value);
        if (callbck) callbck();
      });
    },

    parseBgColor(argVal) {
      let colorMap = {};
      let textColorMap = {};
      if (argVal) {
        let items = argVal.split(",");
        for (let item of items) {
          let arr = item.split(":");
          let staffId = parseInt(arr[0]);
          colorMap[staffId] = arr[1];
          textColorMap[staffId] = arr[2];
        }
      }
      this.bgColorMap = colorMap;
      this.textColorMap = textColorMap;
    },

    changeViewType(val) {
      this.viewType = val;
      $.Util.cookie.set($.Conf.CookieKeys.GL_VIEW_TYPE, val, 365);
      if (this.query.dateType === "month") {
        this.queryLessonList();
      }
    },

    openLessonImgDlg(lessonId) {
      this.dlg.lessonId = lessonId;
      this.dlg.lessonImgView = true;
    },

    openLessonReviewDlg(lessonId) {
      this.dlg.lessonId = lessonId;
      this.dlg.lessonReviewView = true;
    },

    openLessonCoachCommentDlg(lessonId) {
      this.dlg.lessonId = lessonId;
      this.dlg.lessonCoachCommentView = true;
    },

    viewGroupLessonRecords(lesson) {
      this.selectLesson = lesson;
      this.dlg.lessonId = lesson.lessonId;
      this.dlg.viewGroupLessonRecordsDlgTitle = "▶ {0} / 教练：{1} / 上课时间：{2} @ {3} ~ {4}".format(lesson.lessonTitle, lesson.coachName, $.Util.formatDate(lesson.lessonDate, false), $.Util.formatTime(lesson.beginTime), $.Util.formatTime(lesson.endTime));
      this.viewGroupLessonRecordsDlg = true;
    },

    printLessonTable() {
      let elemId = null;
      if (this.query.dateType === "week") {
        elemId = "groupLesonTblByWeek";
      } else {
        elemId = "groupLesonTblByMonth";
      }
      $.Util.printElem(elemId, "团课课表");
    },

    exportLessonTable() {
      this.queryGlTableExport();
      this.exportLessonTableDlg = true;
    },

    exportLessonListTable() {
      $.Util.exportToExcel("groupLesonListTbl", "团课课表");
    },

    delLesson(lesson) {
      let args = { actionType: "D", deleteId: lesson.lessonId };
      $.Dlg.confirm("您确定要删除本节课吗？", ret => {
        $.Req.service($.SvName.LESSON_SAVE, args, ret => {
          $.Msg.success($.Lang.OPT_SUCCESS);
          this.viewGroupLessonRecordsDlg = false;
        });
      });
    }
  }
});

/***/ }),

/***/ 1255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_help_vue__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_help_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gl_booking_blacklist_vue__ = __webpack_require__(2186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gl_booking_blacklist_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__gl_booking_blacklist_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pl_checkin_conf_vue__ = __webpack_require__(2189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pl_checkin_conf_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pl_checkin_conf_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { PlCheckinConf: __WEBPACK_IMPORTED_MODULE_3__pl_checkin_conf_vue___default.a, ImgUpload: __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue___default.a, Help: __WEBPACK_IMPORTED_MODULE_1__components_help_vue___default.a, GlBookingBlacklist: __WEBPACK_IMPORTED_MODULE_2__gl_booking_blacklist_vue___default.a },
  data() {
    return {
      g: $,
      editable: $.Util.hasRoleFunc($.Dict.RoleFunc.BOOKING_CHECKIN_CONF.value),
      selectTab: "plBookingConf",
      shopParam: {},
      imgUpload: {
        action: $.Conf.IMG_UPLOAD_URL,
        imgMaxWidth: 512,
        defaultList: []
      },
      bookingGlImgView: false,
      bookingGlStartTime: null,
      memberBookingPcSmsNotice: true,
      memberBookingPcWxNotice: false,
      coachBookingPcSmsNotice: true,
      coachBookingPcWxNotice: false,
      memberCancelPcSmsNotice: true,
      memberCancelPcWxNotice: false,
      coachCancelPcSmsNotice: true,
      coachCancelPcWxNotice: false,
      memberBookingGcSmsNotice: false,
      memberCancelGcSmsNotice: false,
      memberAltPlSmsNotice: true,
      memberAltPlWxNotice: false,
      coachAltPlSmsNotice: true,
      coachAltPlWxNotice: false,
      glCancelSmsNoticeToMember: false,
      glCancelSmsNoticeToCoach: false,
      glStartSmsNoticeToMember: false,
      glStartSmsNoticeToCoach: false,
      glCancelledSmsNoticeToMember: false,
      glNoBookingNoClassNoticeEnable: false,
      mlQueueSmsNotice: false,
      mlQueueWxNotice: false,
      glNoticeHours: [null, null],
      plNoticeHours: [null, null],
      plStartSmsNoticeToMember: false,
      plStartWxNoticeToMember: false,
      disableMembBookingPl: false,
      plStartSmsNoticeToCoach: null,
      plStartWxNoticeToCoach: null,
      glMaxBookingsPerDay: null,
      glMaxBookingsPerWeek: null,
      plMaxBookingsPerDay: null,
      plMaxBookingsPerWeek: null,
      plMaxCancelBookingsPerDay: null,
      plMaxCancelBookingsPerWeek: null,
      plMaxCancelBookingsPerMonth: null,
      memberBookingPlTargetMins: [0, 10, 15, 20, 30, 40, 45, 50],
      memberBookingPlMins: [0, 15, 30, 45],
      displayBookingInMobileGlInfoPage: true,
      displayCardConfInMobileGlInfoPage: true,
      staffCancelPcSmsNoticeToCoach: false,
      staffCancelPcWxNoticeToCoach: false,
      enablePlGroundLimit: null,
      enableGlBookingOnce: null,
      enablePlBookingOnce: null,
      enableMemberPlTimeCheck: null,
      glStartSmsNoticeToViceCoach: null,
      glStartWxNoticeToViceCoach: null,
      glBookingSmsNoticeToMember: false,
      glBookingWxNoticeToMember: false,
      glCheckinSmsNoticeToMember: false,
      glCheckinWxNoticeToMember: false,
      plBookingTipsConf: {
        enable: false,
        startTime: 1,
        endTime: 3,
        content: null
      },
      bookingPrePlLimitHours: null,
      forbidBookingWhenSendCancelGlNotice: null,
      hideGlBookingCountInMobile: null,
      staffCancelMplLimitTime: null,
      glCheckinTimeConfAfterBeginTime: null,
      glBookingTips: null,
      plTimeInterval: null,
      enableGlCheckout: null,
      glDurationLimitConfs: [false, null, null, null],
      staffBookingGlMaxHours: null,
      enableMemberGlTimeCheck: null,
      glBookingCancelSmsNoticeToMember: false,
      glBookingCancelWxNoticeToMember: false,
      glActivateMcWhenCheckin: null
    };
  },

  created() {
    this.loadData();
    if (!$.data.shop.hasPrivateCourse && $.data.shop.hasGroupCourse) {
      this.selectTab = "glBookingConf";
    }
  },

  methods: {
    loadData() {
      $.Req.service($.SvName.SHOP_PARAM_QUERY, {}, ret => {
        if ($.Util.isEmpty(ret.shopParam.bookingGlType)) {
          ret.shopParam.bookingGlType = 0;
        }
        if (ret.shopParam.bookingGlType === 1 && ret.shopParam.bookingGlStartTime) {
          this.bookingGlStartTime = $.Util.formatTime(ret.shopParam.bookingGlStartTime);
        }
        this.shopParam = ret.shopParam;
        if (this.shopParam.bookingGlImg) {
          this.imgUpload.defaultList.push({
            name: this.shopParam.bookingGlImg,
            url: $.Util.getImgUrl(this.shopParam.bookingGlImg, 200, 200, "eeeeee")
          });
        }
        this.queryShopArgs();
      }, true);
    },

    queryShopArgs() {
      let args = {
        typeIdList: [72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 83, 84, 85, 86, 87, 88, 89, 90, 91, 93, 94, 95, 96, 97, 98, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 127, 128, 130, 138, 139, 140, 141, 142, 2013, 2014, 2019, 2041, 2054, 132, 133, 134, 2087, 2088]
      };
      $.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
        for (let t of ret.argList) {
          if (t.typeId === 72) this.memberBookingPcSmsNotice = t.typeValue === "true";else if (t.typeId === 73) this.coachBookingPcSmsNotice = t.typeValue === "true";else if (t.typeId === 74) this.memberCancelPcSmsNotice = t.typeValue === "true";else if (t.typeId === 75) this.coachCancelPcSmsNotice = t.typeValue === "true";else if (t.typeId === 76) this.memberBookingGcSmsNotice = t.typeValue === "true";else if (t.typeId === 77) this.memberCancelGcSmsNotice = t.typeValue === "true";else if (t.typeId === 78) this.memberBookingPcWxNotice = t.typeValue === "true";else if (t.typeId === 79) this.coachBookingPcWxNotice = t.typeValue === "true";else if (t.typeId === 80) this.memberCancelPcWxNotice = t.typeValue === "true";else if (t.typeId === 81) this.coachCancelPcWxNotice = t.typeValue === "true";else if (t.typeId === 83) this.memberAltPlSmsNotice = t.typeValue === "true";else if (t.typeId === 84) this.memberAltPlWxNotice = t.typeValue === "true";else if (t.typeId === 85) this.coachAltPlSmsNotice = t.typeValue === "true";else if (t.typeId === 86) this.coachAltPlWxNotice = t.typeValue === "true";else if (t.typeId === 87) this.glStartSmsNoticeToMember = t.typeValue === "true";else if (t.typeId === 88) this.glStartSmsNoticeToCoach = t.typeValue === "true";else if (t.typeId === 89) this.glCancelSmsNoticeToMember = t.typeValue === "true";else if (t.typeId === 90) this.glCancelledSmsNoticeToMember = t.typeValue === "true";else if (t.typeId === 91) this.glCancelSmsNoticeToCoach = t.typeValue === "true";else if (t.typeId === 93) {
            if (t.typeValue) {
              let arr = t.typeValue.split(",");
              this.glNoticeHours[0] = parseFloat(arr[0]);
              if (arr.length == 2) this.glNoticeHours[1] = parseFloat(arr[1]);
            }
          } else if (t.typeId === 94) this.mlQueueSmsNotice = t.typeValue === "true";else if (t.typeId === 98) this.mlQueueWxNotice = t.typeValue === "true";else if (t.typeId === 95) this.glNoBookingNoClassNoticeEnable = t.typeValue === "true";else if (t.typeId === 96) this.staffCancelPcSmsNoticeToCoach = t.typeValue === "true";else if (t.typeId === 97) this.staffCancelPcWxNoticeToCoach = t.typeValue === "true";else if (t.typeId === 103) this.disableMembBookingPl = t.typeValue === "true";else if (t.typeId === 104) this.glMaxBookingsPerDay = t.typeValue ? parseInt(t.typeValue) : null;else if (t.typeId === 109) this.glMaxBookingsPerWeek = t.typeValue ? parseInt(t.typeValue) : null;else if (t.typeId === 105) this.plMaxBookingsPerDay = t.typeValue ? parseInt(t.typeValue) : null;else if (t.typeId === 106) {
            if (t.typeValue) {
              let arr = t.typeValue.split(",");
              this.plNoticeHours[0] = parseFloat(arr[0]);
              if (arr.length == 2) this.plNoticeHours[1] = parseFloat(arr[1]);
            }
          } else if (t.typeId === 107) this.plStartSmsNoticeToMember = t.typeValue === "true";else if (t.typeId === 108) this.plStartWxNoticeToMember = t.typeValue === "true";else if (t.typeId === 110) this.plStartSmsNoticeToCoach = t.typeValue === "true";else if (t.typeId === 111) this.plStartWxNoticeToCoach = t.typeValue === "true";else if (t.typeId === 112) this.plMaxBookingsPerWeek = t.typeValue ? parseInt(t.typeValue) : null;else if (t.typeId === 113) this.enablePlGroundLimit = t.typeValue === "true";else if (t.typeId === 114) this.enableGlBookingOnce = t.typeValue === "true";else if (t.typeId === 115) this.enableMemberPlTimeCheck = t.typeValue === "true";else if (t.typeId === 116) this.glStartSmsNoticeToViceCoach = t.typeValue === "true";else if (t.typeId === 117) this.glStartWxNoticeToViceCoach = t.typeValue === "true";else if (t.typeId === 118) this.glBookingSmsNoticeToMember = t.typeValue === "true";else if (t.typeId === 119) this.glBookingWxNoticeToMember = t.typeValue === "true";else if (t.typeId === 120) this.glCheckinSmsNoticeToMember = t.typeValue === "true";else if (t.typeId === 121) this.glCheckinWxNoticeToMember = t.typeValue === "true";else if (t.typeId === 122) this.enablePlBookingOnce = t.typeValue === "true";else if (t.typeId === 123) this.bookingPrePlLimitHours = t.typeValue ? parseInt(t.typeValue) : null;else if (t.typeId === 124) this.forbidBookingWhenSendCancelGlNotice = t.typeValue === "true";else if (t.typeId === 125) this.hideGlBookingCountInMobile = t.typeValue === "true";else if (t.typeId === 127) this.staffCancelMplLimitTime = t.typeValue ? parseInt(t.typeValue) : null;else if (t.typeId === 128) this.glCheckinTimeConfAfterBeginTime = t.typeValue ? parseInt(t.typeValue) : null;else if (t.typeId === 139) this.enableMemberGlTimeCheck = t.typeValue === "true";else if (t.typeId === 140) this.glBookingCancelSmsNoticeToMember = t.typeValue === "true";else if (t.typeId === 141) this.glBookingCancelWxNoticeToMember = t.typeValue === "true";else if (t.typeId === 142) this.glActivateMcWhenCheckin = t.typeValue === "true";else if (t.typeId === 2013) this.memberBookingPlMins = t.typeValue ? this.splitToInt(t.typeValue, ",") : [0, 15, 30, 45];else if (t.typeId === 2014) this.displayBookingInMobileGlInfoPage = t.typeValue ? t.typeValue === "true" : true;else if (t.typeId === 2019) this.displayCardConfInMobileGlInfoPage = t.typeValue ? t.typeValue === "true" : true;else if (t.typeId === 2041) this.readPlBookingTipsConf(t.typeValue);else if (t.typeId === 2054) this.glBookingTips = t.typeValue;else if (t.typeId === 130) this.plTimeInterval = t.typeValue ? parseInt(t.typeValue) : null;else if (t.typeId === 132) this.plMaxCancelBookingsPerDay = t.typeValue ? parseInt(t.typeValue) : null;else if (t.typeId === 133) this.plMaxCancelBookingsPerWeek = t.typeValue ? parseInt(t.typeValue) : null;else if (t.typeId === 134) this.plMaxCancelBookingsPerMonth = t.typeValue ? parseInt(t.typeValue) : null;else if (t.typeId === 2087) this.enableGlCheckout = t.typeValue ? t.typeValue === "true" : true;else if (t.typeId === 2088) {
            if (t.typeValue) {
              let items = t.typeValue.split(",");
              this.glDurationLimitConfs = [items[0] === "true", parseInt(items[1]), parseInt(items[2]), parseInt(items[3]), parseInt(items[4])];
            }
          } else if (t.typeId === 138) {
            this.staffBookingGlMaxHours = t.typeValue ? parseInt(t.typeValue) : null;
          }
        }
        if (!this.staffBookingGlMaxHours) this.staffBookingGlMaxHours = this.shopParam.bookingGlMaxTime;
      });
    },

    splitToInt(strVal, spt) {
      let items = strVal.split(spt);
      let intArr = [];
      for (let i of items) {
        intArr.push(parseInt(i));
      }

      return intArr;
    },

    submit(courseType) {
      // 1-私教，2-团课
      if (this.shopParam.bookingGlType === 1 && !this.bookingGlStartTime) {
        $.Dlg.error("请设置团课上课当天预约的时间点");
        return;
      }
      if (this.bookingGlStartTime) {
        this.shopParam.bookingGlStartTime = $.Util.getTimeNum(this.bookingGlStartTime);
      }
      if (courseType === 1) {
        // 私教课预约设置
        // check
        if ($.Util.isEmptyArray(this.memberBookingPlMins)) {
          $.Dlg.error("请设置会员在手机端约课的时间（分钟）");
          return;
        }
        let shopArgList = [];

        let val = this.plMaxBookingsPerDay ? parseInt(this.plMaxBookingsPerDay) : "";
        if (val <= 0) val = "";
        shopArgList.push({ typeId: 105, typeValue: val });

        let plNoticeHourList = [];
        for (let h of this.plNoticeHours) if (h) plNoticeHourList.push(h);
        shopArgList.push({
          typeId: 106,
          typeValue: plNoticeHourList.join(",")
        });

        val = this.memberBookingPlMins.join(",");
        if (val.length <= 0) val = "";
        shopArgList.push({ typeId: 2013, typeValue: val });

        val = this.plMaxBookingsPerWeek ? parseInt(this.plMaxBookingsPerWeek) : "";
        if (val <= 0) val = "";
        shopArgList.push({ typeId: 112, typeValue: val });

        val = !$.Util.isEmpty(this.bookingPrePlLimitHours) ? parseInt(this.bookingPrePlLimitHours) : null;
        if (val === null) val = "";
        shopArgList.push({ typeId: 123, typeValue: val });

        val = this.staffCancelMplLimitTime ? parseInt(this.staffCancelMplLimitTime) : "";
        if (val <= 0) val = "";
        shopArgList.push({ typeId: 127, typeValue: val });

        val = this.plTimeInterval ? parseInt(this.plTimeInterval) : "";
        if (val <= 0) val = "";
        shopArgList.push({ typeId: 130, typeValue: val });

        val = this.plMaxCancelBookingsPerDay ? parseInt(this.plMaxCancelBookingsPerDay) : "";
        if (val <= 0) val = "";
        shopArgList.push({ typeId: 132, typeValue: val });

        val = this.plMaxCancelBookingsPerWeek ? parseInt(this.plMaxCancelBookingsPerWeek) : "";
        if (val <= 0) val = "";
        shopArgList.push({ typeId: 133, typeValue: val });

        val = this.plMaxCancelBookingsPerMonth ? parseInt(this.plMaxCancelBookingsPerMonth) : "";
        if (val <= 0) val = "";
        shopArgList.push({ typeId: 134, typeValue: val });

        let args = { shopArgList: shopArgList };
        $.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {});
      } else if (courseType === 2) {
        // 团课设置
        if (!this.shopParam.checkinGlMaxTime) {
          $.Msg.error("请设置有效的团课上课签到时间");
          return;
        }

        if (this.shopParam.bookingGlType === 0) {
          if (!this.shopParam.bookingGlMaxTime) {
            $.Dlg.error("请设置会员可提前预约团课时间（预约开放下）");
            return;
          }
          if (!this.staffBookingGlMaxHours) {
            $.Dlg.error("请设置员工可提前预约团课时间（预约开放下）");
            return;
          }
        }

        // 保存自动进入预约黑名单
        if (this.shopParam.enableAutoGlBlacklist) {
          if (!this.shopParam.autoGlBlacklistStatDays || this.shopParam.autoGlBlacklistStatDays < 1) {
            $.Msg.error("请设置自动进入黑名单的“最近天数”");
            return;
          }
          if (!this.shopParam.autoGlBlacklistViolateCnt || this.shopParam.autoGlBlacklistViolateCnt < 1) {
            $.Msg.error("请设置自动进入黑名单的“违约次数”");
            return;
          }
          if (!this.shopParam.autoGlBlacklistPunitiveDays || this.shopParam.autoGlBlacklistPunitiveDays < 1) {
            $.Msg.error("请设置自动进入黑名单的“禁止约课天数”");
            return;
          }
        }

        let shopArgList = [];

        let glNoticeHourList = [];
        for (let h of this.glNoticeHours) if (h) glNoticeHourList.push(h);
        shopArgList.push({ typeId: 93, typeValue: glNoticeHourList.join(",") });

        let val = this.glMaxBookingsPerDay ? parseInt(this.glMaxBookingsPerDay) : "";
        if (val <= 0) val = "";
        shopArgList.push({ typeId: 104, typeValue: val });

        val = this.glMaxBookingsPerWeek ? parseInt(this.glMaxBookingsPerWeek) : "";
        if (val <= 0) val = "";
        shopArgList.push({ typeId: 109, typeValue: val });

        val = this.glCheckinTimeConfAfterBeginTime ? parseInt(this.glCheckinTimeConfAfterBeginTime) : "";
        if (val <= 0) val = "";
        shopArgList.push({ typeId: 128, typeValue: val });

        val = this.staffBookingGlMaxHours ? parseInt(this.staffBookingGlMaxHours) : "";
        if (val <= 0) val = "";
        shopArgList.push({ typeId: 138, typeValue: val });

        if (this.enableGlCheckout) {
          if (this.glDurationLimitConfs[0]) {
            if (!this.glDurationLimitConfs[1] || !this.glDurationLimitConfs[2] || !this.glDurationLimitConfs[3] || !this.glDurationLimitConfs[4]) {
              $.Dlg.error("请输入有效的团课入场时长黑名单设置");
              return;
            }
          }
          val = this.glDurationLimitConfs.join(",");
          shopArgList.push({ typeId: 2088, typeValue: val });
        }

        let args = { shopArgList: shopArgList };
        $.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {});
      }
      let args = { shopParam: this.shopParam };
      $.Req.service($.SvName.SHOP_PARAM_UPDATE, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
      }, true);
    },

    handleImgUploadSuccess(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;

      let args = { imgPath: res.data.name };
      $.Req.service($.SvName.BOOKING_GL_IMG_UPDATE, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
      }, true);
    },

    updateShopArg(typeId, typeValue, showTips = true) {
      if (!this.editable) return;

      let args = { typeId: typeId, typeValue: "" + typeValue };
      $.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
        if (showTips) $.Msg.success($.Lang.SAVE_SUCCESS);
      });
    },

    readPlBookingTipsConf(val) {
      let items = val.split("\r\r");
      if (items.length === 4) {
        this.plBookingTipsConf.enable = items[0] === "true";
        this.plBookingTipsConf.startTime = parseInt(items[1]);
        this.plBookingTipsConf.endTime = parseInt(items[2]);
        this.plBookingTipsConf.content = items[3];
      }
    },

    savePlBookingTipsConf() {
      if (this.plBookingTipsConf.enable) {
        if (!this.plBookingTipsConf.startTime || !this.plBookingTipsConf.endTime) {
          $.Msg.warning("请填写完整的阅读时间范围");
          return;
        }
        if (this.plBookingTipsConf.startTime >= this.plBookingTipsConf.endTime) {
          $.Msg.warning("请填写有效的阅读时间范围");
          return;
        }
        if (!this.plBookingTipsConf.content) {
          $.Msg.warning("请填写阅读内容");
          return;
        }
      }

      let typeValue = "";
      if (this.plBookingTipsConf.enable) {
        typeValue = "{0}\r\r{1}\r\r{2}\r\r{3}".format(this.plBookingTipsConf.enable, this.plBookingTipsConf.startTime, this.plBookingTipsConf.endTime, this.plBookingTipsConf.content);
      } else {
        typeValue = "false";
      }

      let args = { typeId: 2041, typeValue: typeValue };
      $.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
        $.Msg.success($.Lang.SAVE_SUCCESS);
      });
    },

    saveGlBookingTips() {
      if (!this.glBookingTips) {
        if (this.glBookingTips.length > 500) {
          $.Msg.error("请输入少于500字的内容");
          return;
        }
      }
      let args = { typeId: 2054, typeValue: this.glBookingTips };
      $.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
        $.Msg.success($.Lang.SAVE_SUCCESS);
      });
    },

    checkNoticeHour(val) {
      if (!val) return true;

      if (val < 0) {
        alert("时间值不能小于0");
        return false;
      }
      let hourStr = val + "";
      if (hourStr.indexOf(".") > 0) {
        if (!hourStr.endsWith(".5") && !hourStr.endsWith(".0")) {
          alert("上课前通知时间只支持半小时的倍数，例如：0.5小时，1.5小时等");
          return false;
        }
      }

      return true;
    },

    checkGlNoticeHour(idx) {
      if (!this.checkNoticeHour(this.glNoticeHours[idx])) {
        this.$set(this.glNoticeHours, idx, null);
      }
    },

    checkPlNoticeHour(idx) {
      if (!this.checkNoticeHour(this.plNoticeHours[idx])) {
        this.$set(this.plNoticeHours, idx, null);
      }
    }
  }
});

/***/ }),

/***/ 1256:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	components: {},
	data() {
		return {
			g: $
		};
	},

	created() {
		this.$router.push('/gl-with-review');
	},

	methods: {}
});

/***/ }),

/***/ 1257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lesson_review_list_vue__ = __webpack_require__(1125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lesson_review_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lesson_review_list_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, LessonReviewList: __WEBPACK_IMPORTED_MODULE_1__lesson_review_list_vue___default.a },
  data() {
    return {
      g: $,
      menuList: $.PageMenus.LessonReview('pl-with-review')
    };
  },

  created() {},

  methods: {}
});

/***/ }),

/***/ 1258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_help_vue__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_help_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, ImgUpload: __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue___default.a, Help: __WEBPACK_IMPORTED_MODULE_2__components_help_vue___default.a },
	data() {
		return {
			pageTitle: this.$route.params.courseId ? '私教课程详情' : '添加私教课程',
			course: {
				courseId: null,
				courseName: null,
				duration: null,
				logoPathname: null,
				coachId: null,
				lessonFee: null,
				isPublic: true
			},
			requiredFields: ['courseName', 'duration'],
			courseFormRule: {},
			coachList: [],
			imgUpload: {
				action: $.Conf.IMG_UPLOAD_URL,
				imgMaxWidth: 512,
				defaultList: []
			},
			courseCateName: '',
			courseCateList: [],
			courseCateDlgView: false
		};
	},

	created() {
		if (this.requiredFields) {
			$.Util.addRequiredFieldsRules(this.courseFormRule, this.requiredFields);
		}
		this.loadCourseCategoryList(this.loadCourse);

		// query coach
		$.Req.service($.SvName.COACH_BASE_QUERY, { isPrivateCoach: true }, ret => {
			this.coachList = ret.coachList;
		});
	},

	methods: {
		loadCourse() {
			if (this.$route.params.courseId) {
				this.course.courseId = parseInt(this.$route.params.courseId);
				$.Req.service($.SvName.PRIVATE_COURSE_QUERY, { queryType: 1, courseId: this.course.courseId }, ret => {
					if (!ret.courseList) {
						$.Dlg.error($.Lang.NOT_FOUND_TIPS);
						return false;
					}
					$.Util.copyAttributes(ret.courseList[0], this.course);
					if (!this.course.duration) this.course.duration = null;
					if (this.course.logoPathname) {
						this.imgUpload.defaultList.push({
							name: this.course.logoPathname,
							url: $.Util.getImgUrl(this.course.logoPathname)
						});
					}
					this.courseCateName = this.getCourseCateName(this.course.courseCategory);
				});
			}
		},

		handleImgUploadSuccess(res, file) {
			file.url = res.data.url;
			file.name = res.data.name;
			this.course.logoPathname = res.data.name;
		},

		handleSaveCourse() {
			this.$refs.course.validate(valid => {
				if (!this.course.courseCategory) {
					$.Msg.error('请选择课程类别');
					return;
				}

				if (!valid) {
					$.Msg.error($.Lang.SUBMIT_ERR);
					return;
				}

				const args = {
					actionType: this.course.courseId ? 'U' : 'I',
					privateCourse: this.course
				};
				$.Req.service($.SvName.PRIVATE_COURSE_SAVE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					this.$router.push('/private-course');
				});
			});
		},

		openCourseCateDlg() {
			this.courseCateDlgView = true;
		},

		selectCourseCate(val, name) {
			this.courseCateDlgView = false;
			this.course.courseCategory = val;
			this.courseCateName = name;
		},

		loadCourseCategoryList(callback) {
			$.Req.service($.SvName.DICT_QUERY, { dictType: 1 }, ret => {
				this.courseCateList = ret.dictList;
				if (callback) callback();
			});
		},

		getCourseCateName(cateId) {
			if (!cateId) return null;

			for (let c of this.courseCateList) {
				if (cateId === c.intValue) return c.itemName;
			}
			return null;
		}
	}
});

/***/ }),

/***/ 1259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_help_vue__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_help_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_member_member_select_vue__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_member_member_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_member_member_select_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pages_member_member_base_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tenant_tenant_stat_member__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tenant_tenant_stat_member___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__tenant_tenant_stat_member__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { TenantStatMember: __WEBPACK_IMPORTED_MODULE_4__tenant_tenant_stat_member___default.a, PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, Help: __WEBPACK_IMPORTED_MODULE_1__components_help_vue___default.a, MemberSelect: __WEBPACK_IMPORTED_MODULE_2__pages_member_member_select_vue___default.a, MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_3__pages_member_member_base_info_vue___default.a },
	data() {
		const validateMemberPhoneNo = (rule, value, callback) => {
			if (!value) {
				this.member = {};
				callback();
			} else {
				if (value && !$.Util.validatePhoneNo(value)) {
					callback(new Error($.Lang.PHONE_NO_ERR));
				} else {
					$.Req.service($.SvName.MEMBER_BASE_QUERY, { phoneNo: value }, ret => {
						if (ret.member && ret.member.memberId) {
							this.member = ret.member;
							this.ps.memberId = ret.member.memberId;
							callback();
						} else {
							this.member = {};
							callback(new Error($.Lang.MEMBER_PHONE_NO_NOT_EXIST));
						}
					}, false, err => {
						$.Dlg.error(err);
						callback();
					});
				}
			}
		};

		return {
			g: window.$,
			courseEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.COURSE_EDIT.value),
			psCoachLessonFeeEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.PS_COACH_LESS_FEE.value),
			pageTitle: this.$route.params.psId ? '私教排课详情' : '添加私教排课',
			courseList: [],
			coachList: [],
			groundList: [],
			cardList: [],
			cardMap: null,
			cardPayments: {},
			ps: {
				psId: null,
				coachIds: null,
				isNeedPayment: true,
				cardPaymentList: [],
				memberId: null,
				courseId: null,
				coachId: null,
				duration: 60,
				beginDate: new Date(),
				endDate: new Date(new Date().getTime() + 365 * 24 * 3600000),
				enableMoreStudents: null,
				maxStudents: null,
				minStudents: null,
				coachLessonFeeType: 0,
				extraCardId: null
			},
			requiredFields: ['courseId', 'duration'],
			csFormRule: {
				memberPhone: [{ validator: validateMemberPhoneNo, trigger: 'blur' }]
			},
			csTimes: {},
			weeks: ['星期 一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
			timesList: [[''], [''], [''], [''], [''], [''], ['']],
			timeValList: {},
			member: {
				memberId: null,
				name: null
			},
			memberSelectDlg: false,
			cardCheckAll: false,
			memberCardIdMap: null,
			memberCardList: [],
			viewMemberDlg: false,
			selectMemberId: null,
			isMultiCoachs: false,
			chooseCardId: this.$route.query.chooseCardId,
			limitMembers: [],
			limitMembersSelectDlg: null,
			tab: 'detail',
			psTrainPlanList: null,
			psTrainPlan: {
				orderNo: null,
				summary: null
			},
			psTrainPlanDlg: null,
			selectPlanId: null,
			pcActionList: null,
			psTrainItemDlg: null,
			psTrainItem: {
				actionValueList: []
			},
			psTrainItemList: [],
			selectTrainItemIdx: null,
			psTrainItemListDlg: null,
			trainPlanShareUrl: null,
			trainPlanShareDlg: null,
			canLimitMcIds: null,
			psMcIdList: [],
			defaultSelectMcId: null,
			coachFeeConfList: [],
			selectMcId: null,
			bookingMplListDlg: null,
			maxBookingLessonCnt: null,
			limitWeekArr: [],
			coachTypeList: null,
			memberCoachType: null,
			isChangeMemberCoach: null,
			cardClassList: [0, 1, 2]
		};
	},

	created() {
		$.Util.addRequiredFieldsRules(this.csFormRule, this.requiredFields);

		$.Req.queryPrivateCourseBase(data => {
			this.courseList = data;
		});
		$.Req.queryCoachBase(2, data => {
			this.coachList = data;
		});
		$.Req.queryGround(data => {
			this.groundList = data;
		});

		// query card
		$.Req.service($.SvName.CARD_QUERY, {}, ret => {
			this.cardList = [];
			this.cardMap = {};
			for (let c of ret.cardList) {
				if (c.cardClass === 2 || c.cardType > 1) {
					this.cardMap[c.cardId] = c;
					this.cardList.push(c);
				}
			}
			for (let c of this.cardList) {
				// init cardPayments
				this.$set(this.cardPayments, c.cardId, { checked: false, payment: null });
			}

			this.queryPs();

			if (this.$route.params.memberId) {
				if (this.$route.query.mcId) {
					this.defaultSelectMcId = parseInt(this.$route.query.mcId);
				}
				this.queryInitMember();
			}
			if (this.ps.psId) {
				this.queryPsTrainPlanList();
			}
		});

		this.queryCoachTypeList();
	},

	methods: {
		queryPs() {
			if (!this.$route.params.psId) {
				this.memberCardIdMap = {};
				return;
			}
			this.ps.psId = parseInt(this.$route.params.psId);
			if (!$.Util.isInteger(this.ps.psId)) {
				this.$router.push('/private-course-schedule');
			}

			let args = { psId: this.ps.psId };
			$.Req.service($.SvName.PRIVATE_COURSE_SCHEDULE_QUERY, args, ret => {
				if (!ret || !ret.pcSchedule) {
					this.$router.push('/private-course-schedule');
					return;
				}
				ret.pcSchedule.isNeedPayment = true;
				this.ps = ret.pcSchedule;
				this.coachFeeConfList = ret.coachFeeConfList;
				this.setWeekTimes();
				this.setCardPayments();
				this.member = { memberId: this.ps.memberId, name: this.ps.memberName };
				this.queryMemberCardsForPl();

				if (this.ps.limitBookingMembers) {
					let mids = [];
					for (let mid of this.ps.limitBookingMembers.split(',')) mids.push(parseInt(mid));
					args = { memberIdList: mids };
					$.Req.service($.SvName.MEMBER_BASE_LIST_QUERY, args, ret => {
						this.limitMembers = ret.memberBaseList;
					});
				}

				// check coachList
				let findCoach = false;
				for (let coach of this.coachList) {
					if (coach.staffId === this.ps.coachId) {
						findCoach = true;
						break;
					}
				}
				if (!findCoach) {
					this.coachList.push({ staffId: this.ps.coachId, name: this.ps.coachName });
				}
				if (this.ps.limitWeeks) {
					for (let w of this.ps.limitWeeks.split(',')) {
						this.limitWeekArr.push(parseInt(w));
					}
				}
			});
		},

		handleSubmit() {
			this.$refs.ps.validate(valid => {
				if (!valid) {
					$.Msg.error($.Lang.SUBMIT_ERR);
					return;
				}
				if (this.isMultiCoachs) {
					if (!this.ps.coachIds) {
						$.Msg.error('请选择教练');
						return;
					}
					this.ps.coachId = null;
				} else {
					if (!this.ps.coachId) {
						$.Msg.error('请选择教练');
						return;
					}
				}
				if (this.ps.usedTimes && this.ps.limitTimes && this.ps.usedTimes > this.ps.limitTimes) {
					$.Dlg.error('【已使用课时数】不能大于【排课次数】');
					return;
				}

				this.genWeekTimes();
				if (!this.ps.beginDate || !this.ps.endDate) {
					$.Dlg.error('请设置完整的课程有效期');
					return;
				}
				if ($.Util.formatDate(this.ps.beginDate) > $.Util.formatDate(this.ps.endDate)) {
					$.Dlg.error('课程有效期的开始日期不能大于结束日期');
					return;
				}
				if (this.ps.isNeedPayment) {
					try {
						this.ps.cardPaymentConf = this.genCardPaymentList();
					} catch (err) {
						if (err) $.Dlg.error(err);
						return;
					}

					if (!this.ps.cardPaymentConf) {
						$.Dlg.error('请设置本课结算卡');
						return;
					}
				}
				if (this.ps.enableMoreStudents && !this.member.memberId) {
					if (!this.ps.maxStudents) {
						$.Dlg.error('请设置最多预约人数');
						return;
					}
					if (this.ps.maxStudents < this.ps.minStudents) {
						$.Dlg.error('最多预约人数不能小于最少预约人数');
						return;
					}
				}
				if (this.ps.extraCardId && $.Util.isEmpty(this.ps.extraCardPayment)) {
					$.Dlg.error('请输入额外计费额');
					return;
				}

				let msg = '';
				const selectCourseName = this.getCourseName(this.ps.courseId);
				if (this.member.memberId) {
					if (!this.ps.psId) msg = '您确定要为该会员【{0}】排课【{1}】吗？'.format(this.member.name, selectCourseName);else msg = '您确定要更新会员【{0}】的排课【{1}】吗？'.format(this.member.name, selectCourseName);
				} else {
					if (!this.ps.psId) msg = '您确定要创建【{0}】的排课吗？'.format(selectCourseName);else msg = '您确定要更新【{0}】的排课吗？'.format(selectCourseName);
				}
				if (!$.Util.isEmptyArray(this.limitWeekArr)) {
					this.ps.limitWeeks = this.limitWeekArr.sort().join(',');
				} else {
					this.ps.limitWeeks = null;
				}

				$.Dlg.confirm(msg, yes => {
					this.ps.memberId = this.member.memberId;
					this.ps.limitBookingMembers = this.genLimitMemberIds();
					this.ps.mcIds = $.Util.isEmptyArray(this.psMcIdList) ? null : this.psMcIdList.join(',');

					let actionType = this.ps.psId ? 'U' : 'I';
					let args = {
						actionType: actionType,
						pcSchedule: this.ps,
						coachFeeConfList: this.coachFeeConfList
					};
					if (this.isChangeMemberCoach && this.ps.memberId) {
						args.isChangeMemberCoach = this.isChangeMemberCoach;
						args.memberCoachType = this.memberCoachType;
					}
					$.Req.service($.SvName.PRIVATE_COURSE_SCHEDULE_SAVE, args, ret => {
						$.Msg.success($.Lang.OPT_SUCCESS);
						if (actionType === 'I') {
							this.$router.push('/private-course-schedule');
						}
					});
				});
			});
		},

		genWeekTimes() {
			const weekTimes = [[], [], [], [], [], [], []];

			for (let key in this.timeValList) {
				const [weekIdx, timeIdx] = key.split('-');
				const val = this.timeValList[key];
				if (Array.isArray(val) && val[0]) {
					let [beginDateTime, endDateTime] = val;
					const beginTime = $.Util.getTimeNum(beginDateTime);
					const endTime = $.Util.getTimeNum(endDateTime);
					weekTimes[weekIdx].push(beginTime + '-' + endTime);
				}
			}

			this.ps.week1Times = weekTimes[0].join(',');
			this.ps.week2Times = weekTimes[1].join(',');
			this.ps.week3Times = weekTimes[2].join(',');
			this.ps.week4Times = weekTimes[3].join(',');
			this.ps.week5Times = weekTimes[4].join(',');
			this.ps.week6Times = weekTimes[5].join(',');
			this.ps.week7Times = weekTimes[6].join(',');

			let cnt = 0;
			for (let i = 0; i < 7; i++) {
				cnt += weekTimes[i].length;
			}
			return cnt !== 0;
		},

		genCardPaymentList() {
			let buff = [],
			    card;
			for (let cardId in this.cardPayments) {
				const c = this.cardPayments[cardId];
				if (!c.checked) continue;

				card = this.findCard(parseInt(cardId));
				if (!card) continue;
				if (!c.payment) {
					if (card && card.cardType > 1) {
						// 非期限卡，需设置结算额
						throw '【{0}】未设置课程结算额'.format(card.cardName);
					}
				} else {
					if (card.cardType === 2 && c.payment > 1) {
						if (!confirm('您设置的【{0}】每次课计费【{1}】次，是不是写错了，确定提交吗？'.format(card.cardName, c.payment))) {
							throw null;
						}
					}
					if (card.cardType !== 1 && c.payment <= 0) {
						throw '【{0}】结算额必须大于0'.format(card.cardName);
					}
				}
				buff.push('{0}:{1}'.format(cardId, c.payment ? c.payment : ''));
			}

			return buff.join(',');
		},

		findCard(cardId) {
			for (let i = 0, len = this.cardList.length; i < len; i++) {
				if (cardId === this.cardList[i].cardId) {
					return this.cardList[i];
				}
			}

			return null;
		},

		addTimePick(index) {
			this.timesList[index].push([]);
		},

		checkCardPayment(card) {
			if (this.cardPayments[card.cardId].checked) {
				if (card.cardType === 2 && !this.cardPayments[card.cardId].payment) {
					this.cardPayments[card.cardId].payment = 1;
				}
			}
		},

		getCourseName(courseId) {
			for (let c of this.courseList) {
				if (c.courseId == courseId) return c.courseName;
			}
			return '';
		},

		getCoachName(coachId) {
			for (let c of this.coachList) {
				if (c.staffId == coachId) return c.name;
			}
			return '';
		},

		setWeekTimes() {
			const weekTimesList = [this.ps.week1Times, this.ps.week2Times, this.ps.week3Times, this.ps.week4Times, this.ps.week5Times, this.ps.week6Times, this.ps.week7Times];
			for (let i = 0; i < weekTimesList.length; i++) {
				if (!weekTimesList[i]) continue;

				const times = weekTimesList[i].split(',');
				for (let j = 1; j < times.length; j++) this.timesList[i].push('');
				for (let j = 0; j < times.length; j++) {
					let timespan = times[j].split('-');
					let beginTime = $.Util.formatTime(timespan[0]);
					let endTime = $.Util.formatTime(timespan[1]);
					this.timeValList[i + '-' + j] = [beginTime, endTime];
				}
			}
		},

		setCardPayments() {
			if (this.ps.cardPaymentConf) {
				this.ps.isNeedPayment = true;
				let setCardPayments = this.ps.cardPaymentConf.split(',');
				for (let i = 0; i < setCardPayments.length; i++) {
					let [cardId, payment] = setCardPayments[i].split(':');
					this.cardPayments[cardId] = { checked: true, payment: payment };
				}
			}
		},

		handleChangeCourse() {
			if (this.ps.courseId) {
				for (let c of this.courseList) {
					if (this.ps.courseId === c.courseId) {
						this.ps.coachId = c.coachId;
						this.ps.duration = c.duration;
						return;
					}
				}
			} else {
				this.ps.coachId = null;
			}
		},

		checkCard(cardId, cardType) {
			if (this.cardPayments[cardId].checked && parseInt(cardType) === 2) {
				this.cardPayments[cardId].payment = 1;
			}
		},

		afterSelectMember(member) {
			this.member.memberId = member.memberId;
			this.member.name = member.name;
			this.memberSelectDlg = false;
			this.queryMemberCardsForPl();
		},

		checkAllCards(val) {
			this.cardCheckAll = val;
			for (let c of this.cardList) {
				this.$set(this.cardPayments, c.cardId, { checked: this.cardCheckAll,
					payment: this.cardPayments[c.cardId].payment });
			}
		},

		clearMember() {
			this.member = {};
			this.memberCardIdMap = {};
		},

		queryMemberCardsForPl(callback = null) {
			if (!this.member.memberId) {
				this.memberCardIdMap = {};
				return;
			}
			let args = {
				memberId: this.member.memberId
			};
			$.Req.service($.SvName.MEMBER_CARD_QUERY, args, (ret, systime) => {
				this.memberCardIdMap = {};
				this.memberCardList = [];
				for (let mc of ret.memberCardList) {
					if (mc.cardClass === 2 || mc.cardType > 1) {
						this.memberCardIdMap[mc.cardId] = true;
						this.memberCardList.push(mc);
					}
				}
				if (this.chooseCardId) {
					this.cardPayments[this.chooseCardId] = { checked: true, payment: null };
				}
				this.canLimitMcIds = $.Util.countAttrs(this.memberCardIdMap) !== this.memberCardList.length;
				this.psMcIdList = [];
				if (this.ps.mcIds) {
					for (let mcId of this.ps.mcIds.split(',')) {
						this.psMcIdList.push(parseInt(mcId));
					}
				}
				if (callback) callback();
			});
		},

		viewMemberInfo(memberId) {
			this.selectMemberId = memberId;
			this.viewMemberDlg = true;
		},

		queryInitMember() {
			let memberId = parseInt(this.$route.params.memberId);
			$.Req.service($.SvName.MEMBER_BASE_QUERY, { memberId: memberId }, ret => {
				if (ret.member) {
					this.member.memberId = ret.member.memberId;
					this.member.name = ret.member.name;
					this.queryMemberCardsForPl(() => {
						if (this.defaultSelectMcId) this.psMcIdList.push(this.defaultSelectMcId);
					});
					if (this.$route.params.lessonCnt) {
						let val = parseFloat(this.$route.params.lessonCnt);
						if (val > 0) this.ps.limitTimes = val;
					}
					if (this.$route.params.lessonFee) {
						let val = parseFloat(this.$route.params.lessonFee);
						if (val > 0) this.ps.coachLessonFee = val;
					}
					if (this.$route.params.lessonDates && this.$route.params.lessonDates.length > 16) {
						let dates = this.$route.params.lessonDates.split('_');
						this.ps.beginDate = Date.new(dates[0]);
						this.ps.endDate = Date.new(dates[1]);
					}
				}
			});
		},

		genLimitMemberIds() {
			let mids = [];
			for (let m of this.limitMembers) {
				mids.push(m.memberId);
			}
			let ret = mids.join(',');
			return ret ? ret : null;
		},

		afterSelectLimitMember(findedMember) {
			if (!findedMember) {
				$.Msg.error('未查询到会员');
				return;
			}
			for (let m of this.limitMembers) {
				if (findedMember.memberId === m.memberId) {
					$.Msg.warning('已添加该会员');
					return;
				}
			}
			this.limitMembers.push({ memberId: findedMember.memberId, name: findedMember.name });
			$.Msg.info('成功添加预约学员：' + findedMember.name);
		},

		delLimitMember(memberId, name) {
			let msg = '确定删除预约会员【{0}】吗？'.format(name);
			$.Dlg.confirm(msg, yes => {
				for (let i = 0; i < this.limitMembers.length; i++) {
					if (this.limitMembers[i].memberId === memberId) {
						this.limitMembers.splice(i, 1);
						break;
					}
				}
			});
		},

		openPsTrainPlanForCreate() {
			this.psTrainPlan = {};
			this.psTrainPlanDlg = true;
		},

		openPsTrainPlanForEdit(psTrainPlan) {
			this.selectPlanId = psTrainPlan.planId;
			this.psTrainPlan = {};
			$.Util.copyAttributes(psTrainPlan, this.psTrainPlan);
			this.psTrainPlanDlg = true;
		},

		queryPsTrainPlanList() {
			if (!this.ps.psId) return;

			let args = {
				psId: this.ps.psId
			};
			$.Req.service($.SvName.PS_TRAIN_PLAN_QUERY, args, ret => {
				this.psTrainPlanList = ret.psTrainPlanList;
			});
		},

		savePsTrainPlan() {
			if ($.Util.isEmpty(this.psTrainPlan.orderNo)) {
				$.Msg.error('请输入序号');
				return;
			}
			if (!this.psTrainPlan.planName) {
				$.Msg.error('请输入计划名称');
				return;
			}
			this.psTrainPlan.psId = this.ps.psId;
			let args = {
				actionType: this.selectPlanId ? 'U' : 'I',
				psTrainPlan: this.psTrainPlan
			};
			$.Req.service($.SvName.PS_TRAIN_PLAN_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryPsTrainPlanList();
				this.psTrainPlanDlg = false;
			});
		},

		delPsTrainPlan(planId) {
			if (!confirm('您确定要删除此训练计划？')) {
				return;
			}

			let args = {
				actionType: 'D',
				deleteId: planId
			};
			$.Req.service($.SvName.PS_TRAIN_PLAN_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryPsTrainPlanList();
				this.psTrainPlanDlg = false;
			});
		},

		queryPsTrainItem(planId) {
			let args = {
				planId: planId
			};
			$.Req.service($.SvName.PS_TRAIN_ITEM_QUERY, args, ret => {
				this.psTrainItemList = ret.psTrainItemList;
				for (let t of this.psTrainItemList) {
					t.actionValueList = [];
					if (t.actionValues) {
						for (let v of t.actionValues.split(';')) {
							let data = v.split(',');
							if ($.Util.isEmpty(data[0]) && $.Util.isEmpty(data[1])) continue;
							t.actionValueList.push({
								weightValue: parseFloat(data[0]),
								weightUnit: parseInt(data[1]),
								countValue: parseInt(data[2]),
								countUnit: parseInt(data[3])
							});
						}
					}
				}
			});
		},

		openPsTrainItemDlgForCreate() {
			this.selectTrainItemIdx = null;
			this.psTrainItem = {
				bodyPart: null,
				actionId: null,
				weightUnit: 0,
				countUnit: 0,
				actionValueList: []
			};
			for (let i = 0; i < 5; i++) {
				this.psTrainItem.actionValueList.push({
					weightValue: null, weightUnit: this.psTrainItem.weightUnit,
					countValue: null, countUnit: this.psTrainItem.countUnit
				});
			}
			this.psTrainItemDlg = true;
		},

		queryPcActionList(bodyPart) {
			this.psTrainItem.actionId = null;
			this.pcActionList = [];
			let args = { bodyPart: bodyPart };
			$.Req.service($.SvName.PC_ACTION_QUERY, args, ret => {
				this.pcActionList = ret.pcActionList;
			});
		},

		queryPcAction(callback = null) {
			let args = { bodyPart: this.psTrainItem.bodyPart };
			$.Req.service($.SvName.PC_ACTION_QUERY, args, ret => {
				this.pcActionList = ret.pcActionList;
				if (callback) callback();
			}, true);
		},

		addActionValue() {
			this.psTrainItem.actionValueList.push({
				weightValue: null, weightUnit: this.psTrainItem.weightUnit,
				countValue: null, countUnit: this.psTrainItem.countUnit
			});
		},

		delActionValue(idx) {
			this.psTrainItem.actionValueList.splice(idx, 1);
		},

		submitPsTrainItem() {
			// check
			if (!this.psTrainItem.orderNo) {
				$.Msg.error('请输入序号');
				return;
			}
			if ($.Util.isEmpty(this.psTrainItem.bodyPart)) {
				$.Msg.error('请选择训练主题');
				return;
			}
			if (!this.psTrainItem.actionId) {
				$.Msg.error('请选择训练动作');
				return;
			}

			let t = this.psTrainItem;

			// make actionValues
			let values = [];
			for (let v of t.actionValueList) {
				if (v.weightValue || v.countValue) {
					values.push('{0},{1},{2},{3}'.format(v.weightValue, t.weightUnit, v.countValue, t.countUnit));
				}
			}
			t.actionValues = values.join(';');
			let args = {
				actionType: $.Util.isEmpty(this.selectTrainItemIdx) ? 'I' : 'U',
				psTrainItem: {
					orderNo: t.orderNo,
					bodyPart: t.bodyPart,
					actionId: t.actionId,
					planId: this.selectPlanId,
					actionValues: t.actionValues
				}
			};
			if (args.actionType === 'U') args.psTrainItem.ptiId = t.ptiId;
			$.Req.service($.SvName.PS_TRAIN_ITEM_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryPsTrainItem(this.selectPlanId);
				this.psTrainItemDlg = false;
			}, true);
		},

		openPsTrainItemListDlg(planId) {
			this.selectPlanId = planId;
			this.queryPsTrainItem(planId);
			this.psTrainItemListDlg = true;
		},

		editTrainItem(idx) {
			this.selectTrainItemIdx = idx;
			let t = this.psTrainItemList[idx];
			this.psTrainItem.orderNo = t.orderNo;
			this.psTrainItem.ptiId = t.ptiId;
			this.psTrainItem.bodyPart = t.bodyPart;
			this.psTrainItem.actionId = t.actionId;

			this.queryPcAction(() => {
				this.psTrainItem.actionValueList = [];
				if (t.actionValueList.length > 0) {
					for (let v of t.actionValueList) {
						this.psTrainItem.actionValueList.push({
							weightValue: v.weightValue,
							weightUnit: v.weightUnit,
							countValue: v.countValue,
							countUnit: v.countUnit
						});
					}
					if ($.Util.isEmpty(t.weightUnit)) {
						t.weightUnit = this.psTrainItem.actionValueList[0].weightUnit;
						t.countUnit = this.psTrainItem.actionValueList[0].countUnit;
					}
					this.psTrainItem.weightUnit = t.weightUnit;
					this.psTrainItem.countUnit = t.countUnit;
					if (this.psTrainItem.actionValueList.length < 5) {
						for (let i = this.psTrainItem.actionValueList.length; i < 5; i++) {
							this.psTrainItem.actionValueList.push({
								weightValue: null,
								weightUnit: t.weightUnit,
								countValue: null,
								countUnit: t.countUnit
							});
						}
					}
				}
				this.psTrainItemDlg = true;
			});
		},

		deleteTrainItem(itemIdx) {
			if (!confirm('确定删除该动作吗？')) {
				return;
			}
			let ptiId = this.psTrainItemList[itemIdx].ptiId;
			this.psTrainItemList.splice(itemIdx, 1);
			let args = { deleteId: ptiId, actionType: 'D' };
			$.Req.service($.SvName.PS_TRAIN_ITEM_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
			});
		},

		shareTrainPlan(p) {
			this.trainPlanShareUrl = 'https://app.jzongguan.com/run.html#/ps-train-plan-share/{0}/{1}'.format(p.psId, p.planId);
			this.trainPlanShareDlg = true;
		},

		addCoachFeeConf() {
			this.coachFeeConfList.push({ lessonMembers: null, coachFee: null });
		},

		checkAllCoachList() {
			this.ps.coachIds = [];
			for (let c of this.coachList) {
				this.ps.coachIds.push(c.staffId);
			}
		},

		uncheckAllCoachList() {
			this.ps.coachIds = [];
		},

		bookingMplList() {
			if (!this.selectMcId) {
				$.Dlg.error('请选择一个计费卡');
				return;
			}

			let args = {
				psId: this.ps.psId,
				mcId: this.selectMcId
			};
			if (this.maxBookingLessonCnt) {
				args.maxLessonCount = this.maxBookingLessonCnt;
			}
			$.Req.service($.SvName.MEMBER_PC_LESSON_LIST_BOOKING, args, ret => {
				this.bookingMplListDlg = false;
				alert("已成功预约 {0} 节私教课。".format(ret.newLessonCnt));
				this.$router.push('/private-lesson');
			}, true);
		},

		queryCoachTypeList() {
			$.Req.service($.SvName.COACH_TYPE_QUERY, { isBaseInfo: true }, ret => {
				this.coachTypeList = ret.coachTypeList;
			});
		}
	}
});

/***/ }),

/***/ 1260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lesson_review_list_vue__ = __webpack_require__(1125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lesson_review_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lesson_review_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_member_member_select_vue__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_member_member_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_member_member_select_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_help__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_help___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_help__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_sys_time_select__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_sys_time_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_sys_time_select__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { TimeSelect: __WEBPACK_IMPORTED_MODULE_4__components_sys_time_select___default.a, LessonReviewList: __WEBPACK_IMPORTED_MODULE_0__lesson_review_list_vue___default.a, MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default.a, MemberSelect: __WEBPACK_IMPORTED_MODULE_2__pages_member_member_select_vue___default.a, Help: __WEBPACK_IMPORTED_MODULE_3__components_help___default.a },
	data() {
		return {
			g: window.$,
			memberAgentPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.MEMBER_AGENT.value),
			courseEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.COURSE_EDIT.value),
			psCoachLessonFeeEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.PS_COACH_LESS_FEE.value),
			courseList: [],
			coachList: [],
			pcScheduleList: [],
			scheduleCount: null,
			viewMemberDlg: false,
			viewMemberId: 0,
			query: {
				courseId: null,
				courseIdList: null,
				coachId: null,
				beginDate: null,
				endDate: null,
				memberId: null,
				usedStatus: null,
				pageNo: null
			},
			reviewDlgTitle: null,
			reviewDlgView: false,
			courseScheduleId: 0,
			viewPsCopyDlg: false,
			psCopy: {
				srcCoachId: null,
				srcPsList: null,
				srcPsIds: [],
				coachIds: [],
				beginDate: null,
				endDate: null
			},
			memberSelectDlgForQuery: false,
			memberName: null,
			isDisabledPs: false,
			psCkList: new Array(30),
			isSelectAll: false,
			selectPsCopyDlg: null,
			newCopyPs: {
				srcPsIdList: null,
				coachId: null,
				memberId: null,
				coachLessonFee: null,
				limitTimesType: 1,
				isHideSrcPs: null,
				isSetSrcPsOutdate: null,
				beginDate: null,
				endDate: null
			},
			memberSelectDlgForPsCopy: null,
			exportDlg: null,
			exportFileUrl: null,
			psCardAppendDlg: null,
			selectCardId: null,
			selectCardPayment: null,
			cardList: null,
			selectCard: null
		};
	},

	created() {
		$.Req.queryPrivateCourseBase(data => {
			this.courseList = data;
		});
		this.resetQuery();
		if (this.courseEditable) {
			$.Req.queryCoachBase(2, data => {
				this.coachList = data;
			});
		} else {
			this.coachList = [{ staffId: $.data.user.staffId, name: $.data.user.uname }];
			this.query.coachId = $.data.user.staffId;
		}
		this.queryPcSchedule();
	},

	methods: {
		queryPcSchedule(page = null, isExport = null) {
			if (!page) this.scheduleCount = null;
			let args = {
				beginDate: this.query.beginDate,
				endDate: this.query.endDate,
				courseIdList: this.query.courseIdList,
				coachId: this.query.coachId,
				needReviewCnt: true,
				usedStatus: this.query.usedStatus,
				page: page
			};
			if (this.isDisabledPs) args.status = 99;else args.status = 0;
			if (this.memberName && this.query.memberId) {
				args.memberId = this.query.memberId;
			}
			if (!args.courseId && !args.coachId && !args.memberId && !args.usedStatus) {
				if (!args.beginDate || !args.endDate) {
					$.Dlg.error('请输入完整的课程开始和结束日期。');
					return;
				}
			}
			if (isExport) {
				args.isExport = true;
				this.exportFileUrl = null;
				this.exportDlg = true;
			}
			$.Req.service($.SvName.PRIVATE_COURSE_SCHEDULE_QUERY, args, ret => {
				if (isExport) {
					this.exportFileUrl = ret.fileurl;
					return;
				}
				for (let ps of ret.pcScheduleList) {
					if (ps.limitBookingMembers) {
						ps.limitBookingMemberIdList = ps.limitBookingMembers.split(',');
					}
				}
				this.pcScheduleList = ret.pcScheduleList;
				if (!page) {
					this.scheduleCount = ret.count;
				}
				window.scrollTo(0, 0);
				this.unselectAll();
			}, true);
		},

		changePageNo(page) {
			this.query.page = page;
			this.queryPcSchedule(page);
		},

		handleAddCourseSchedule() {
			this.$router.push('/private-course-schedule-create');
		},

		resetQuery() {
			this.query.courseId = '';
			if (this.courseEditable) {
				this.query.coachId = '';
			}
			const beginDate = new Date();
			beginDate.setMonth(beginDate.getMonth() - 1);
			let endDate = new Date();
			endDate.setMonth(beginDate.getMonth() + 2);
			this.query.beginDate = beginDate;
			this.query.endDate = endDate;
			this.query.memberId = null;
			this.memberName = null;
			this.query.usedStatus = null;
			this.query.courseIdList = [];
		},

		delCourseSchedule(index) {
			const c = this.pcScheduleList[index];
			let msg = '';
			if (c.memberId) {
				msg = $.Lang.DEL_PC_SCHEDULE_WARN.format(c.memberName);
			} else {
				msg = $.Lang.DEL_PC_SCHEDULE_WARN2.format(c.coachName);
			}
			$.Dlg.confirm(msg, yes => {
				const args = { actionType: 'D', deleteId: c.psId };
				$.Req.service($.SvName.PRIVATE_COURSE_SCHEDULE_SAVE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					this.pcScheduleList.splice(index, 1);
				});
			});
		},

		openLessonReview(courseScheduleId, courseName, coachName) {
			this.reviewDlgTitle = '课程评价：{0} - {1}'.format(courseName, coachName);
			this.courseScheduleId = courseScheduleId;
			this.reviewDlgView = true;
		},

		viewMemberBase(memberId) {
			this.viewMemberId = memberId;
			this.viewMemberDlg = true;
		},

		queryPcScheduleForCopy() {
			const args = {
				coachId: this.psCopy.srcCoachId,
				page: 1
			};
			$.Req.service($.SvName.PRIVATE_COURSE_SCHEDULE_QUERY, args, ret => {
				this.psCopy.srcPsList = ret.pcScheduleList;
			}, true);
		},

		changeCoachOfPsCopy(val) {
			this.psCopy.srcCoachId = val;
			this.psCopy.srcPsIds = [];
			this.queryPcScheduleForCopy();
		},

		submitPsCopy() {
			if (!this.psCopy.srcPsIds || !this.psCopy.srcPsIds.length) {
				$.Msg.error('请选择源私教排课');
				return;
			}
			if (!this.psCopy.coachIds || $.Util.isEmptyArray(this.psCopy.coachIds)) {
				$.Msg.error('请选择排课教练');
				return;
			}
			if (this.psCopy.beginDate && !this.psCopy.endDate || !this.psCopy.beginDate && this.psCopy.endDate) {
				$.Msg.error('请输入完整的课程有效期');
				return;
			}
			let args = {
				srcPsIdList: this.psCopy.srcPsIds,
				coachIdList: this.psCopy.coachIds,
				beginDate: this.psCopy.beginDate,
				endDate: this.psCopy.endDate
			};
			$.Dlg.confirm('确定复制排课吗？', yes => {
				$.Req.service($.SvName.PRIVATE_COURSE_SCHEDULE_COPY, args, ret => {
					this.queryPcSchedule();
					this.viewPsCopyDlg = false;
				}, true);
			});
		},

		afterSelectMember(m) {
			if (m) {
				this.query.memberId = m.memberId;
			} else {
				this.query.memberId = null;
			}
		},

		clearMember() {
			this.memberName = null;
			this.query.memberId = null;
		},

		openSelectMember() {
			this.memberSelectDlgForQuery = true;
		},

		afterSelectMemberForQuery(m) {
			if (m) {
				this.memberName = m.name;
				this.query.memberId = m.memberId;
			} else {
				this.memberName = null;
				this.query.memberId = null;
			}
			this.memberSelectDlgForQuery = false;
		},

		updateCourseScheduleStatus(index, statusCode) {
			let c = this.pcScheduleList[index];
			let args = { actionType: statusCode, psId: c.psId };
			$.Req.service($.SvName.PRIVATE_COURSE_SCHEDULE_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryPcSchedule();
			});
		},

		selectPs(idx) {
			this.$set(this.psCkList, idx, !this.psCkList[idx]);
		},

		selectAll() {
			this.isSelectAll = !this.isSelectAll;
			for (let i = 0, len = this.psCkList.length; i < len; i++) {
				this.$set(this.psCkList, i, this.isSelectAll);
			}
		},

		unselectAll() {
			this.isSelectAll = false;
			for (let i = 0, len = this.psCkList.length; i < len; i++) {
				this.$set(this.psCkList, i, false);
			}
		},

		updatePsListStatus(newStatus) {
			let checkedPsIdList = [];
			for (let i = 0, len = this.psCkList.length; i < len && i < this.pcScheduleList.length; i++) {
				if (this.psCkList[i]) checkedPsIdList.push(this.pcScheduleList[i].psId);
			}
			if (checkedPsIdList.length === 0) {
				$.Msg.error('请选择一个或多个排课后再操作');
				return;
			}
			let args = {
				newStatus: newStatus,
				psIdList: checkedPsIdList
			};
			$.Req.service($.SvName.PRIVATE_COURSE_SCHEDULE_STATUS_UPDATE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryPcSchedule();
			});
		},

		extendPsEndDate() {
			let checkedPsIdList = [];
			for (let i = 0, len = this.psCkList.length; i < len && i < this.pcScheduleList.length; i++) {
				if (this.psCkList[i]) checkedPsIdList.push(this.pcScheduleList[i].psId);
			}
			if (checkedPsIdList.length === 0) {
				$.Msg.error('请选择一个或多个排课后再操作');
				return;
			}
			let altDays = prompt('请输入所选私教排课的批量延期的天数（大于0）：');
			if (!altDays || !parseInt(altDays) || parseInt(altDays) <= 0) {
				$.Msg.error('请输入合理的天数');
				return;
			}
			let args = {
				altDays: altDays,
				psIdList: checkedPsIdList
			};
			$.Req.service($.SvName.PS_END_DATE_EXTEND, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryPcSchedule();
			});
		},

		openPsCopyDlg() {
			let checkedPsIdList = [];
			for (let i = 0, len = this.psCkList.length; i < len && i < this.pcScheduleList.length; i++) {
				if (this.psCkList[i]) checkedPsIdList.push(this.pcScheduleList[i].psId);
			}

			if (checkedPsIdList.length) {
				this.newCopyPs = {
					srcPsIdList: null,
					coachId: null,
					memberId: null,
					coachLessonFee: null,
					limitTimesType: 1,
					isHideSrcPs: null,
					beginDate: null,
					endDate: null
				};
				this.selectPsCopyDlg = true;
			} else {
				this.viewPsCopyDlg = true;
			}
		},

		openSelectMemberForPsCopy() {
			this.memberSelectDlgForPsCopy = true;
		},

		afterSelectMemberForPsCopy(m) {
			if (m) {
				this.newCopyPs.memberName = m.name;
				this.newCopyPs.memberId = m.memberId;
			} else {
				this.newCopyPs.memberName = null;
				this.newCopyPs.memberId = null;
			}
			this.memberSelectDlgForPsCopy = false;
		},

		submitSelectedPsCopy() {
			if (!this.newCopyPs.coachId) {
				$.Msg.error('请选择教练');
				return;
			}
			if (this.newCopyPs.beginDate && !this.newCopyPs.endDate || !this.newCopyPs.beginDate && this.newCopyPs.endDate) {
				$.Msg.error('请设置有效的课程有效期');
				return;
			}

			let checkedPsIdList = [];
			for (let i = 0, len = this.psCkList.length; i < len && i < this.pcScheduleList.length; i++) {
				if (this.psCkList[i]) checkedPsIdList.push(this.pcScheduleList[i].psId);
			}
			let args = {
				srcPcIdList: checkedPsIdList,
				coachId: this.newCopyPs.coachId,
				coachLessonFee: this.newCopyPs.coachLessonFee,
				limitTimesType: this.newCopyPs.limitTimesType,
				isHideSrcPs: this.newCopyPs.isHideSrcPs,
				beginDate: this.newCopyPs.beginDate,
				endDate: this.newCopyPs.endDate
			};
			$.Req.service($.SvName.PS_CREATE_FROM_SRC_PS_LIST, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.selectPsCopyDlg = false;
				this.queryPcSchedule();
			}, true);
		},

		exportToXls() {
			this.queryPcSchedule(this.query.page, true);
		},

		queryCardList() {
			$.Req.service($.SvName.CARD_QUERY, {}, ret => {
				this.cardList = [];
				for (let c of ret.cardList) {
					if (c.cardClass === 2 || c.cardType > 1) {
						this.cardList.push(c);
					}
				}
			});
		},

		openPsCardAppendDlg() {
			let checkedPsIdList = [];
			for (let i = 0, len = this.psCkList.length; i < len && i < this.pcScheduleList.length; i++) {
				if (this.psCkList[i]) {
					checkedPsIdList.push(this.pcScheduleList[i].psId);
					if (this.pcScheduleList[i].memberId) {
						$.Dlg.warning('不能选择指定会员的私教排课');
						return;
					}
				}
			}
			if (checkedPsIdList.length === 0) {
				$.Msg.error('请选择一个或多个排课后再操作');
				return;
			}
			if ($.Util.isEmptyArray(this.cardList)) {
				this.queryCardList();
			}
			this.selectCard = null;
			this.selectCardId = null;
			this.selectCardPayment = null;
			this.psCardAppendDlg = true;
		},

		chooseCard(cardId) {
			for (let c of this.cardList) {
				if (c.cardId == cardId) {
					this.selectCard = c;
					return;
				}
			}
		},

		submitAppendCardPaymentToPsList() {
			if (!this.selectCardId) {
				$.Msg.error('请选择一个卡');
				return;
			}
			let args = { cardId: this.selectCardId };
			if (this.selectCard.cardType == 1) {
				args.cardPayment = null;
			} else {
				if ($.Util.isEmpty(this.selectCardPayment)) {
					$.Msg.error('请填写上课计费');
					return;
				}
				if (this.selectCardPayment < 0) {
					$.Msg.error('上课计费不能小于0');
					return;
				}
				args.cardPayment = this.selectCardPayment;
			}

			args.psIdList = [];
			for (let i = 0, len = this.psCkList.length; i < len && i < this.pcScheduleList.length; i++) {
				if (this.psCkList[i]) {
					args.psIdList.push(this.pcScheduleList[i].psId);
				}
			}

			$.Req.service($.SvName.PS_CARD_PAYMENT_APPEND, args, ret => {
				$.Dlg.success($.Lang.OPT_SUCCESS);
				this.psCardAppendDlg = false;
			}, true);
		}
		/*
  			updateOrderNo (idx) {
  				let ps = this.pcScheduleList[idx];
  				let preOrderNo = ps.orderNo;
  				let orderNo = prompt('请输入私教排课序号', preOrderNo);
  				if ($.Util.isEmpty(orderNo)) {
  					return;
  				}
  				let args = {
  					psId: this.pcScheduleList[idx].psId,
  					orderNo: orderNo
  				};
  				$.Req.service($.SvName.PC_SCHEDULE_ORDER_NO_UPDATE, args, (ret) => {
  					ps.orderNo = orderNo;
  					this.$set(this.pcScheduleList, idx, ps);
  					$.Msg.success($.Lang.OPT_SUCCESS);
  				}, true);
  			}*/
	}
});

/***/ }),

/***/ 1261:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	components: {},
	data() {
		return {
			g: $,
			course: {},
			courseEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.COURSE_EDIT.value),
			courseViewShow: false,
			courseList: [],
			courseCateMap: {},
			isDisabledCourse: false
		};
	},

	created() {
		this.queryCourseCateDict(() => {
			this.queryPrivateCourseList();
		});
	},

	methods: {
		queryPrivateCourseList() {
			let args = { queryType: 2, status: 0 };
			if (this.isDisabledCourse) args.status = 99;
			$.Req.service($.SvName.PRIVATE_COURSE_QUERY, args, ret => {
				this.courseList = ret.courseList;
			});
		},

		queryCourseCateDict(callback) {
			$.Req.service($.SvName.DICT_QUERY, { dictType: 1 }, ret => {
				for (let dict of ret.dictList) {
					this.courseCateMap[dict.intValue] = dict.itemName;
				}
				if (callback) callback();
			});
		},

		handleAddCourse() {
			this.$router.push('/private-course-create');
		},

		delCourse(index) {
			$.Dlg.confirm($.Lang.DEL_COURSE_WARN, yes => {
				const c = this.courseList[index];
				const args = { actionType: 'D', deleteId: c.courseId };
				$.Req.service($.SvName.PRIVATE_COURSE_SAVE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					this.courseList.splice(index, 1);
				});
			});
		},

		viewCourse(index) {
			this.course = this.courseList[index];
			if (this.course.logoPathname) {
				this.course.imgUrl = $.Util.getImgUrl(this.course.logoPathname);
			}
			this.courseViewShow = true;
		},

		updateOrderNo(courseId, courseName) {
			let val = prompt('请输入【{0}】的展示序号：'.format(courseName));
			if ($.Util.isEmpty(val) || !$.Util.isInteger(val)) {
				$.Msg.error('未输入正确的序号');
				return;
			}
			let orderNo = parseInt(val);
			let args = { courseId: courseId, orderNo: orderNo };
			$.Req.service($.SvName.PRIVATE_COURSE_ORDER_NO_UPDATE, args, ret => {
				this.queryPrivateCourseList();
			});
		},

		updateCourseStatus(index, statusCode) {
			const c = this.courseList[index];
			const args = { actionType: statusCode, courseId: c.courseId };
			$.Req.service($.SvName.PRIVATE_COURSE_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryPrivateCourseList();
			});
		}
	}
});

/***/ }),

/***/ 1262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_select_vue__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_member_member_select_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { MemberSelect: __WEBPACK_IMPORTED_MODULE_0__pages_member_member_select_vue___default.a, MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default.a },
	data() {
		return {
			g: $,
			lessonCancelLogList: null,
			lessonCancelLogCount: null,
			coachStatList: null,
			coachList: [],
			query: {
				beginDate: null,
				endDate: null,
				coachId: null,
				memberId: null
			},
			memberLessonListDlg: false,
			dateOptions: {
				disabledDate(date) {
					return date && date.valueOf() > Date.now();
				}
			},
			memberName: null,
			memberSelectDlgForQuery: null,
			viewMemberDlg: null,
			viewMemberId: null
		};
	},

	created() {
		$.Req.queryCoachBase(2, data => {
			this.coachList = data;
		});
		this.queryPcLessonCancelLog();
	},

	methods: {
		queryPcLessonCancelLog(page = null) {
			let args = {
				page: page,
				coachId: this.query.coachId,
				memberId: this.query.memberId
			};
			if (this.query.beginDate && !this.query.endDate) {
				$.Msg.error('请输入结束日期');
				return;
			}
			if (!this.query.beginDate && this.query.endDate) {
				$.Msg.error('请输入开始日期');
				return;
			}
			if (this.query.beginDate && this.query.endDate) {
				args.beginDate = this.query.beginDate;
				args.endDate = this.query.endDate;
			}
			$.Req.service($.SvName.PC_LESSON_CANCEL_LOG_QUERY, args, ret => {
				for (let l of ret.logList) {
					let lessonDateTimeVal = $.Util.formatDate(l.lessonDate) + " " + $.Util.formatTime(l.lessonTime) + ":00";
					let createTimeVal = $.Util.formatDateTime(l.createTime);
					l.isCancelTimeGtLessonTime = createTimeVal > lessonDateTimeVal;
				}
				this.lessonCancelLogList = ret.logList;
				if (!page) {
					this.lessonCancelLogCount = ret.count;
					if (!this.query.coachId || args.beginDate) {
						this.coachStatList = ret.coachStatList;
					}
				} else {
					window.scrollTo(0, 0);
				}
			});
		},

		queryByCoach(coachId) {
			this.query.coachId = coachId;
			this.queryPcLessonCancelLog();
		},

		resetQuery() {
			this.query.beginDate = null;
			this.query.endDate = null;
			this.query.coachId = null;
		},

		openSelectMember() {
			this.memberSelectDlgForQuery = true;
		},

		afterSelectMemberForQuery(m) {
			if (m) {
				this.memberName = m.name;
				this.query.memberId = m.memberId;
			} else {
				this.memberName = null;
				this.query.memberId = null;
			}
			this.memberSelectDlgForQuery = false;
		},

		clearMember() {
			if (!this.memberName) {
				this.query.memberId = null;
				this.queryMemberLessonCancelLogList(null);
			}
		},

		viewMemberBase(memberId) {
			this.viewMemberId = memberId;
			this.viewMemberDlg = true;
		}
	}
});

/***/ }),

/***/ 1263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a },
	data() {
		return {
			g: window.$,
			lessonId: this.$route.params.lessonId,
			mplId: this.$route.params.mplId ? parseInt(this.$route.params.mplId) : null,
			lessonDelPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.COURSE_EDIT.value),
			memberAgentPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.MEMBER_AGENT.value),
			plCheckinPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.PL_CHECKIN.value),
			cancelOutdatePlPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.CANCEL_OUTDATE_PL.value),
			changeOutdatePlTimePermit: $.Util.hasRoleFunc($.Dict.RoleFunc.CHANGE_OUTDATE_PL_TIME.value),
			lessonEditable: false,
			coachList: [],
			cardPayments: {},
			ps: null,
			lesson: null,
			isNeedPayment: false,
			cardPaymentEditable: false,
			cancelRemark: null,
			dlg: {
				changeLessonDateTime: false,
				confViceCoach: false,
				cancelLesson: false,
				mplPics: null
			},
			viceCoachId: null,
			isOutdatePl: null,
			mplList: null,
			selectMpl: null,
			lessonTimeEditable: null,
			lessonDate: null,
			lessonBeginTime: null,
			mplCount: null,
			mplPage: null,
			mplPicList: null
		};
	},

	created() {
		this.lessonEditable = $.Util.hasRoleFunc($.Dict.RoleFunc.COURSE_EDIT.value) && $.Util.hasRoleFunc($.Dict.RoleFunc.MEMBER_AGENT.value);

		if (!this.lessonId) {
			this.$router.push('/private-course-schedule');
			return;
		}
		$.Req.queryCoachBase(2, data => {
			this.coachList = data;
		});
		this.queryPcLesson();
		this.queryMemberPrivateLesson();
	},

	methods: {
		loadPcSchedule() {
			let args = { psId: this.lesson.psId };
			$.Req.service($.SvName.PRIVATE_COURSE_SCHEDULE_QUERY, args, ret => {
				if (!ret || !ret.pcSchedule) {
					this.$router.push('/private-course-schedule');
					return;
				}
				this.ps = ret.pcSchedule;
			});
		},

		queryPcLesson() {
			let args = {
				lessonId: this.lessonId
			};
			$.Req.service($.SvName.PC_LESSON_QUERY, args, (ret, systime) => {
				if (!ret || !ret.pcLesson) {
					$.Msg.error($.Lang.NOT_FOUND_RECORD);
					this.$router.push('/private-lesson');
					return;
				}
				this.lesson = ret.pcLesson;
				this.lesson.statusName = $.Dict.PcLessonStatus[this.lesson.status];
				this.lesson.lessonTimes = [$.Util.formatTime(this.lesson.beginTime), $.Util.formatTime(this.lesson.endTime)];
				if (this.lesson.isViceCoach) {
					this.viceCoachId = this.lesson.coachId;
				}
				let now = Date.new(systime);
				let lessonDateTimeStr = $.Util.formatDate(this.lesson.lessonDate) + " " + this.lesson.lessonTimes[0] + ":00";
				if ($.Util.formatDateTime(now) >= lessonDateTimeStr) {
					this.lesson.canCheckin = true;
					this.isOutdatePl = true;
				}
				if (!this.lesson.checkinTime) {
					if (this.memberAgentPermit || this.lesson.coachId === $.data.user.staffId) {
						if (this.isOutdatePl) {
							if (this.changeOutdatePlTimePermit) this.lessonTimeEditable = true;else this.lessonTimeEditable = false;
						} else {
							this.lessonTimeEditable = true;
						}
					}
				}
				this.loadPcSchedule();
			}, true);
		},

		queryMemberPrivateLesson(page = null) {
			let args = {
				lessonId: this.lessonId,
				page: page
			};
			this.mplPage = page;
			$.Req.service($.SvName.MEMBER_PRIVATE_LESSON_QUERY, args, ret => {
				this.mplList = ret.memberPcLessonList;
				if (!page) {
					this.mplCount = ret.count;
				}
			});
		},

		handleCancelLesson() {
			if ($.Util.isEmptyStr(this.cancelRemark)) {
				$.Msg.error('请填写取消原因');
				return;
			}
			let args = {
				lessonId: this.lessonId,
				mplId: this.selectMpl.mplId,
				memberId: this.selectMpl.memberId,
				remark: this.cancelRemark.trim(),
				cancelFrom: this.lesson.coachId === $.data.user.staffId ? 2 : 3
			};
			$.Dlg.confirm('您确定取消本节课吗？ 取消后，会员私教课次数会退回，教练课时次数会退回。', yes => {
				$.Req.service($.SvName.MEMBER_PC_LESSON_BOOKING_CANCEL, args, ret => {
					$.Dlg.success('您已取消本次课，会员私教卡计费已退回。');
					this.$router.push('/private-lesson');
				});
			});
		},

		setViceCoach() {
			let lesson = {};
			$.Util.copyAttributes(this.lesson, lesson);
			if (this.viceCoachId && this.viceCoachId !== this.lesson.oldCoachId) {
				lesson.isViceCoach = true;
				if (!this.lesson.oldCoachId) {
					lesson.oldCoachId = this.lesson.coachId;
					lesson.oldCoachName = this.lesson.coachName;
				}
				lesson.coachId = this.viceCoachId;
				for (let c of this.coachList) {
					if (this.viceCoachId === c.staffId) {
						lesson.coachName = c.name;
						break;
					}
				}
			} else {
				this.viceCoachId = null;
				lesson.isViceCoach = false;
				if (this.lesson.oldCoachId) {
					lesson.coachId = this.lesson.oldCoachId;
					lesson.coachName = this.lesson.oldCoachName;
				}
			}

			let args = {
				lessonId: lesson.lessonId,
				coachId: lesson.coachId,
				isViceCoach: lesson.isViceCoach,
				viceCoachFee: lesson.viceCoachFee,
				oldCoachId: lesson.oldCoachId
			};

			$.Req.service($.SvName.PC_LESSON_VICE_COACH_SET, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.dlg.confViceCoach = false;
				$.Util.copyAttributes(lesson, this.lesson);
			}, true);
		},

		openMplCancelDlg(mpl) {
			this.selectMpl = mpl;
			this.dlg.cancelLesson = true;
		},

		checkinPcLesson(mpl) {
			let msg = '您确定要代会员【{0}】签到本节私教课吗？'.format(mpl.memberName);
			$.Dlg.confirm(msg, yes => {
				let args = {
					lessonId: this.lesson.lessonId,
					mplId: mpl.mplId,
					memberId: mpl.memberId,
					ignorePwd: true,
					isCheckinByStaff: true
				};
				$.Req.service($.SvName.MEMBER_PRIVATE_LESSON_CHECKIN, args, ret => {
					$.Dlg.success('签到成功！', null, false);
					this.queryPcLesson();
					this.queryMemberPrivateLesson();
				}, true);
			});
		},

		altLessonTime() {
			if (!this.lessonDate) {
				$.Msg.error('请选择上课日期');
			}
			if (!this.lessonBeginTime) {
				$.Msg.error('请选择上课时间点');
			}
			let beginTime = this.lessonBeginTime.replace(':', '');
			let endTime = this.calcEndTime(this.lessonBeginTime).replace(':', '');

			let args = {
				lessonId: this.lesson.lessonId,
				lessonDate: this.lessonDate,
				beginTime: beginTime,
				endTime: endTime
			};
			$.Req.service($.SvName.PC_LESSON_TIME_CHANGE, args, ret => {
				this.lesson.lessonDate = this.lessonDate;
				this.lesson.beginTime = beginTime;
				this.lesson.endTime = endTime;
				this.dlg.changeLessonDateTime = false;
				$.Dlg.success($.Lang.OPT_SUCCESS);
			}, true);
		},

		calcEndTime(beginTime) {
			let duration = this.ps.duration ? this.ps.duration : 60;
			if (beginTime) {
				let bt = new Date('2017/01/01 ' + beginTime + ':00');
				let et = new Date(bt.getTime() + duration * 60000);
				let endTime = et.format('hh:mm');
				if (endTime === '00:00') endTime = '23:59';
				return endTime;
			}
		},

		shopMplPics(pics) {
			if (pics) {
				this.mplPicList = pics.split(',');
				this.dlg.mplPics = true;
			}
		}
	}
});

/***/ }),

/***/ 1264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const editable = $.Util.hasRoleFunc($.Dict.RoleFunc.COURSE_EDIT.value);
/* harmony default export */ __webpack_exports__["default"] = ({
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a },
	data() {
		return {
			g: window.$,
			editable: editable,
			lessonId: this.$route.params.lessonId,
			menuList: $.PageMenus.privateLesson(this.$route.params.lessonId, 'private-lesson-records'),
			memberLessonList: []
		};
	},

	created() {
		this.queryMemberLesson();
	},

	methods: {
		queryMemberLesson() {
			let args = { lessonId: this.lessonId, needAll: true, page: 1 };
			$.Req.service($.SvName.MEMBER_PRIVATE_LESSON_QUERY, args, ret => {
				this.memberLessonList = ret.memberPcLessonList;
			});
		},

		formatTime(datetime) {
			if (datetime) return new Date(datetime).format('M/d hh:mm');else return '';
		}

	}
});

/***/ }),

/***/ 1265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lesson_review_list_vue__ = __webpack_require__(1125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lesson_review_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lesson_review_list_vue__);
//
//
//
//
//
//
//
//
//
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
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, LessonReviewList: __WEBPACK_IMPORTED_MODULE_1__lesson_review_list_vue___default.a },
	data() {
		return {
			hasViewPermit: $.data.user.isShopOwner,
			lessonId: parseInt(this.$route.params.lessonId),
			menuList: $.PageMenus.privateLesson(this.$route.params.lessonId, 'private-lesson-review')
		};
	},

	created() {},

	methods: {}
});

/***/ }),

/***/ 1266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_course_private_lesson_booking_vue__ = __webpack_require__(1189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_course_private_lesson_booking_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_course_private_lesson_booking_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_course_coach_lesson_bgcolor_conf_vue__ = __webpack_require__(1211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_course_coach_lesson_bgcolor_conf_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_course_coach_lesson_bgcolor_conf_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_member_member_base_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_member_member_select_vue__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_member_member_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pages_member_member_select_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_help_vue__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_help_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    PrivateLessonBooking: __WEBPACK_IMPORTED_MODULE_0__pages_course_private_lesson_booking_vue___default.a,
    CoachLessonBgcolorConf: __WEBPACK_IMPORTED_MODULE_1__pages_course_coach_lesson_bgcolor_conf_vue___default.a,
    MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_2__pages_member_member_base_info_vue___default.a,
    MemberSelect: __WEBPACK_IMPORTED_MODULE_3__pages_member_member_select_vue___default.a,
    Help: __WEBPACK_IMPORTED_MODULE_4__components_help_vue___default.a
  },
  data() {
    return {
      g: $,
      today: new Date(),
      courseEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.COURSE_EDIT.value),
      plCheckinPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.PL_CHECKIN.value),
      isMemberAgent: $.Util.hasRoleFunc($.Dict.RoleFunc.MEMBER_AGENT.value),
      todayStr: new Date().format("yyyyMMdd"),
      courseList: [],
      coachList: [],
      lessonCount: 0,
      bookingPcDlg: false,
      query: {
        courseId: null,
        coachId: null,
        beginDate: null,
        endDate: null,
        dateDesc: null,
        dateType: "week",
        deptId: null,
        isFinishedPl: null,
        groundId: null,
        memberId: null,
        isDelayedBooking: null
      },
      lessonRowList: [],
      lessonMap: {},
      pcLessonList: null,
      canViewAllCoachPls: false,
      beginTimes: [],
      weekDates: new Array(7),
      bgColorMap: {},
      textColorMap: {},
      viewType: "default",
      viewBgcolorDlg: null,
      departmentList: null,
      lessonCntStatMap: {},
      viewMemberDlg: null,
      selectMemberId: null,
      hasGroundInLessons: null,
      groundList: null,
      memberSelectDlgForQuery: false,
      memberName: null,
      showCancelOpt: null,
      mplCkList: [],
      mplPicsDlg: null,
      mplPicList: null,
      bgColorType: 1
    };
  },

  created() {
    let val = $.Util.cookie.get($.Conf.CookieKeys.PL_VIEW_TYPE);
    if (val) this.viewType = val;

    this.canViewAllCoachPls = $.Util.hasRoleFunc($.Dict.RoleFunc.MEMBER_AGENT.value) || $.Util.hasRoleFunc($.Dict.RoleFunc.VIEW_SHOP_PL.value);

    this.resetQuery();
    $.Req.queryPrivateCourseBase(data => {
      this.courseList = data;
    });
    if (this.canViewAllCoachPls) {
      $.Req.queryCoachBase(2, data => {
        this.coachList = data;
      });
    } else {
      this.coachList = [{ staffId: $.data.user.staffId, name: $.data.user.uname }];
      this.query.coachId = $.data.user.staffId;
    }
    this.setDateForWeekQuery();
    this.setWeekDates();
    this.queryShopArgs(this.queryPcLessonList);
    this.queryDepartments();
    $.Req.queryGround(data => {
      this.groundList = data;
    });
  },

  methods: {
    queryShopArgs(callbck = null) {
      let args = {
        typeIdList: [$.Dict.ShopArg.COACH_LESSON_BGCOLOR, 2214, 2215]
      };
      $.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
        let coachColorConf = null,
            courseColorConf = null;
        for (let t of ret.argList) {
          if (t.typeId === 2214) {
            if (t.typeValue) this.bgColorType = parseInt(t.typeValue);
          } else if (t.typeId === $.Dict.ShopArg.COACH_LESSON_BGCOLOR) {
            coachColorConf = t.typeValue;
          } else if (t.typeId === 2215) {
            courseColorConf = t.typeValue;
          }
        }
        this.parseBgColor(this.bgColorType === 1 ? coachColorConf : courseColorConf);

        if (callbck) callbck();
      });
    },

    queryDepartments() {
      let args = { isBaseInfo: true };
      $.Req.service($.SvName.SHOP_DEPARTMENT_QUERY, args, ret => {
        this.departmentList = ret.departmentList;
      });
    },

    queryPcLessonList() {
      let showDate = this.query.endDate;
      if (this.query.dateType === "week") {
        if (new Date().compareDatePart(this.query.endDate) < 0) {
          showDate = this.query.beginDate;
        }
        this.setWeekDates();
      }
      this.query.dateDesc = showDate.format("yyyy年M月");

      let args = {
        beginDate: this.query.beginDate,
        endDate: this.query.endDate,
        courseId: this.query.courseId,
        coachId: this.query.coachId,
        deptId: this.query.deptId,
        needLessonCount: true,
        groundId: this.query.groundId
      };
      if (this.memberName && this.query.memberId) {
        args.memberId = this.query.memberId;
      }
      if (this.query.isFinishedPl === "true") args.status = 9;else if (this.query.isFinishedPl === "false") args.notStatus = 9;
      if (!args.beginDate || !args.endDate) {
        $.Dlg.error("请输入完整的课程开始和结束日期。");
        return;
      }
      if (this.query.isDelayedBooking) {
        args.isDelayedBooking = true;
      }
      $.Req.service($.SvName.PC_LESSON_QUERY, args, ret => {
        this.mplCkList = new Array(ret.pcLessonList.length);
        this.lessonCount = ret.count;
        this.pcLessonList = ret.pcLessonList;
        this.handleLessonList(this.pcLessonList);
        this.setTblData(ret.pcLessonList);
        this.setLessonMap(ret.pcLessonList);
        if (ret.count) {
          $.Msg.success("共查询出 {0} 节课".format(ret.count));
        } else {
          $.Msg.warning($.Lang.NO_QUERY_RESULT);
        }
      }, true);
    },

    parseBgColor(argVal) {
      let colorMap = {};
      let textColorMap = {};
      if (argVal) {
        let items = argVal.split(",");
        for (let item of items) {
          let arr = item.split(":");
          let staffId = parseInt(arr[0]);
          colorMap[staffId] = arr[1];
          textColorMap[staffId] = arr[2];
        }
      }
      this.bgColorMap = colorMap;
      this.textColorMap = textColorMap;
    },

    queryBgColorConf(callbck) {
      let args = {
        typeId: this.bgColorType === 1 ? $.Dict.ShopArg.COACH_LESSON_BGCOLOR : 2215
      };
      $.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
        this.parseBgColor(ret.value);
        if (callbck) callbck();
      });
    },

    setWeekDates() {
      if (this.query.dateType === "week") {
        for (let i = 0; i < 7; i++) {
          this.weekDates[i] = new Date(this.query.beginDate.getTime() + 3600000 * 24 * i);
        }
      }
    },

    handleLessonList(mplList) {
      this.lessonCntStatMap = {};
      let nowStr = $.Util.formatDateTime(this.today);
      for (let l of mplList) {
        let lessonDateTimeStr = $.Util.formatDate(l.lessonDate) + " " + $.Util.formatTime(l.beginTime) + ":00";
        if (nowStr >= lessonDateTimeStr) {
          l.canCheckin = true;
        }

        l.rawMemberName = l.memberName + "";
        if (l.groundName && !this.hasGroundInLessons) this.hasGroundInLessons = true;
        if (!this.lessonCntStatMap[l.lessonId]) {
          this.lessonCntStatMap[l.lessonId] = 1;
        } else {
          this.lessonCntStatMap[l.lessonId] = this.lessonCntStatMap[l.lessonId] + 1;
        }
      }
    },

    setTblData(lessonList) {
      let rowDataList = [];
      let preWeekDay = -1;
      let rowData = {};

      // init
      for (let d = new Date(this.query.beginDate); d <= this.query.endDate; d.setDate(d.getDate() + 1)) {
        let week = d.getDay();
        if (week === 0) week = 7;
        if (week < preWeekDay) {
          // 已到下一周
          rowDataList.push(rowData);
          rowData = {};
        }
        preWeekDay = week;
        rowData[week] = {
          date: new Date(d),
          lessons: []
        };
      }
      rowDataList.push(rowData);

      // fill lessons
      for (let i = 0, j = 0; i < rowDataList.length && j < lessonList.length; i++) {
        for (let key in rowDataList[i]) {
          while (j < lessonList.length) {
            let lesson = lessonList[j];
            let lessonDate = Date.new(lesson.lessonDate);
            let dateCmp = rowDataList[i][key].date.compareDatePart(lessonDate);
            if (dateCmp < 0) {
              break;
            }
            rowDataList[i][key].lessons.push({
              psId: lesson.psId,
              lessonId: lesson.lessonId,
              mplId: lesson.mplId,
              beginTime: this.getBeinTimeDesc(lesson.beginTime),
              endTime: this.getBeinTimeDesc(lesson.endTime),
              coachName: lesson.coachName,
              courseName: lesson.courseName,
              memberName: lesson.memberName,
              status: lesson.status,
              ltype: lesson.ltype,
              groudName: lesson.groundName
            });
            j++;
          }
        }
      }
      this.lessonRowList = rowDataList;
    },

    getBeinTimeDesc(beginTime) {
      return parseInt(beginTime / 100) + ":" + ("" + beginTime).substr(-2, 2);
    },

    resetQuery() {
      this.query.courseId = null;
      if (this.canViewAllCoachPls) {
        this.query.coachId = null;
      }
      this.query.deptId = null;
      this.query.isFinishedPl = null;
      this.query.groundId = null;
      this.query.memberId = null;
      this.memberName = null;
    },

    weekNavQuery(opt) {
      if (opt === "pre") {
        this.query.beginDate.add(-7);
        this.query.endDate.add(-7);
      } else if (opt === "next") {
        this.query.beginDate.add(7);
        this.query.endDate.add(7);
      }
      this.queryPcLessonList();
    },

    monthNav(opt) {
      this.query.beginDate.setDate(1);
      if (opt === "pre") {
        this.query.beginDate.setMonth(this.query.beginDate.getMonth() - 1);
      } else if (opt === "next") {
        this.query.beginDate.setMonth(this.query.beginDate.getMonth() + 1);
      }
      this.query.endDate.setDate(1);
      this.query.endDate.setMonth(this.query.beginDate.getMonth() + 1);
      this.query.endDate.add(-1);
      this.query.endDate.setFullYear(this.query.beginDate.getFullYear());

      this.queryPcLessonList();
    },

    setDateForWeekQuery() {
      this.query.dateType = "week";

      const mydate = new Date();
      let week = mydate.getDay();
      if (week === 0) week = 7;
      mydate.add(1 - week);
      this.query.beginDate = new Date(mydate);

      mydate.add(6);
      this.query.endDate = new Date(mydate);
    },

    queryByWeek() {
      this.setDateForWeekQuery();
      this.queryPcLessonList();
    },

    setDateForMonthQuery() {
      this.query.dateType = "month";

      const mydate = new Date();
      let week = mydate.getDay();
      mydate.setDate(1);
      this.query.beginDate = new Date(mydate);

      mydate.setMonth(mydate.getMonth() + 1);
      mydate.add(-1);
      this.query.endDate = new Date(mydate);
    },

    queryByMonth() {
      if (this.viewType === "simpleCalendar") {
        this.viewType = "default";
        $.Util.cookie.set($.Conf.CookieKeys.PL_VIEW_TYPE, this.viewType, 365);
      }
      this.setDateForMonthQuery();
      this.queryPcLessonList();
    },

    toLessonPage(ltype, lessonId, mplId) {
      if (ltype === 1) {
        //this.$router.push('/private-lesson-edit/{0}/{1}'.format(lessonId, mplId));
        window.open("#/private-lesson-edit/{0}/{1}".format(lessonId, mplId), "_blank");
      } else {
        $.Msg.info("这是客户体验课");
      }
    },

    afterSubmitBooking() {
      this.queryPcLessonList();
      this.bookingPcDlg = false;
    },

    setLessonMap(lessonList) {
      this.lessonMap = {};
      this.beginTimes = [];

      let combinedLessons = {};
      for (let l of lessonList) {
        if (l.checkinTime) l.memberName += " ✔";
        if (!combinedLessons[l.lessonId]) {
          l.memberNames = [l.memberName];
          combinedLessons[l.lessonId] = l;
        } else {
          combinedLessons[l.lessonId].memberNames.push(l.memberName);
        }
      }
      for (let id in combinedLessons) {
        let l = combinedLessons[id];
        let beginTime = $.Util.formatTime(l.beginTime);
        l.week = parseInt(Date.new(l.lessonDate).getDay());
        if (!this.lessonMap[beginTime]) {
          this.beginTimes.push(beginTime);
          this.lessonMap[beginTime] = {};
        }
        if (!this.lessonMap[beginTime][l.week]) {
          this.lessonMap[beginTime][l.week] = [];
        }
        this.lessonMap[beginTime][l.week].push(l);
      }
      this.beginTimes.sort();
    },

    afterSubmitBgColor(bgColorType) {
      this.bgColorType = bgColorType;
      this.viewBgcolorDlg = false;
      this.queryBgColorConf(this.queryPcLessonList);
    },

    changeMoreOpts(menu) {
      if (menu === "print") this.printLessonTable();else if (menu === "export") this.exportLessonTable();else if (menu === "showCancelOpt") this.showCancelOpt = true;else if (menu == "batchCancel") this.batchCancelLesson();
    },

    printLessonTable() {
      let elemId = null;
      if (this.viewType == "list") {
        elemId = "privateLesonTblForList";
      } else {
        if (this.query.dateType === "week" && !this.isSimpleView) {
          elemId = "privateLesonTbl";
        } else {
          elemId = "privateLesonTblWithSimple";
        }
      }

      $.Util.printElem(elemId, "私教课表");
    },

    exportLessonTable() {
      let elemId = null;
      if (this.viewType == "list") {
        elemId = "privateLesonTblContForList";
      } else {
        if (this.query.dateType === "week" && !this.isSimpleView) {
          elemId = "privateLesonTblCont";
        } else {
          elemId = "privateLesonTblContWithSimple";
        }
      }

      $.Util.exportToExcel(elemId, "私教课表");
    },

    viewMember(memberId) {
      this.selectMemberId = memberId;
      this.viewMemberDlg = true;
    },

    checkinPcLesson(mpl, idx) {
      let lessonTime = $.Util.formatDate(mpl.lessonDate) + "  " + $.Util.formatTime(mpl.beginTime) + "~" + $.Util.formatTime(mpl.endTime);
      let msg = "您确定要代会员【{0}】签到【{1} {2}】的私教课吗？".format(mpl.rawMemberName, mpl.coachName, lessonTime);
      $.Dlg.confirm(msg, yes => {
        let args = {
          lessonId: mpl.lessonId,
          mplId: mpl.mplId,
          memberId: mpl.memberId,
          ignorePwd: true,
          isCheckinByStaff: true
        };
        $.Req.service($.SvName.MEMBER_PRIVATE_LESSON_CHECKIN, args, ret => {
          $.Msg.success("签到成功！", null, false);
          mpl.checkinTime = $.Util.formatDateTime(new Date());
          mpl.checkinUname = $.data.user.uname;
          mpl.status = 9;
          this.$set(this.pcLessonList, idx, mpl);
        }, true);
      });
    },

    changeViewType(val) {
      this.viewType = val;
      $.Util.cookie.set($.Conf.CookieKeys.PL_VIEW_TYPE, this.viewType, 365);
    },

    openSelectMember() {
      this.memberSelectDlgForQuery = true;
    },

    afterSelectMemberForQuery(m) {
      if (m) {
        this.memberName = m.name;
        this.query.memberId = m.memberId;
      } else {
        this.memberName = null;
        this.query.memberId = null;
      }
      this.memberSelectDlgForQuery = false;
    },

    batchCancelLesson() {
      let checkedMplList = [];
      for (let i = 0; i < this.mplCkList.length; i++) {
        if (this.mplCkList[i]) {
          let mpl = this.pcLessonList[i];
          checkedMplList.push({
            lessonId: mpl.lessonId,
            mplId: mpl.mplId,
            memberId: mpl.memberId,
            coachId: mpl.coachId
          });
        }
      }
      if (checkedMplList.length === 0) {
        $.Msg.error("请选择需要取消的私教课");
        return;
      }
      if (!confirm("您确定要批量取消预约？")) {
        return;
      }
      let args = {
        mplList: checkedMplList
      };
      $.Req.service($.SvName.MEMBER_PC_LESSONS_BOOKING_CANCEL, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.queryPcLessonList();
      }, true);
    },

    shopMplPics(pics) {
      if (pics) {
        this.mplPicList = pics.split(",");
        this.mplPicsDlg = true;
      }
    },

    filterDelayedBooking(val) {
      this.queryPcLessonList();
    }
  }
});

/***/ }),

/***/ 1267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tenant_tenant_stat_member__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tenant_tenant_stat_member___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tenant_tenant_stat_member__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { TenantStatMember: __WEBPACK_IMPORTED_MODULE_1__tenant_tenant_stat_member___default.a, PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a },
  data() {
    return {
      g: $,
      editable: $.Util.hasRoleFunc($.Dict.RoleFunc.COURSE_EDIT.value),
      menuList: $.PageMenus.LessonReview('review-conf'),
      tmptList: null,
      selectTmptId: null,
      scoreTmpt: {
        tmptName: null,
        scoreTitles: [null, null, null, null, null, null, null, null, null]
      },
      tmptDlg: false,
      defaultGlScoreTmptId: null,
      defaultPlScoreTmptId: null
    };
  },

  created() {
    this.queryShopArgs();
    this.queryTmptList();
  },

  methods: {
    queryShopArgs() {
      let args = {
        typeIdList: [2029, 2030]
      };
      $.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
        for (let a of ret.argList) {
          if (a.typeId === 2029) {
            this.defaultGlScoreTmptId = a.typeValue ? parseInt(a.typeValue) : null;
          } else if (a.typeId === 2030) {
            this.defaultPlScoreTmptId = a.typeValue ? parseInt(a.typeValue) : null;
          }
        }
      });
    },

    openNewTmptDlg() {
      this.selectTmptId = null;
      this.scoreTmpt.tmptName = null;
      this.scoreTmpt.scoreTitles = [null, null, null, null, null, null, null, null, null];
      this.tmptDlg = true;
    },

    queryTmptList() {
      $.Req.service($.SvName.REVIEW_SCORE_TMPT_QUERY, {}, ret => {
        this.tmptList = ret.rstList;
      });
    },

    submitTmpt() {
      // check
      if (!this.scoreTmpt) {
        $.Dlg.error('请输入模板名称');
        return;
      }

      let validTitles = [];
      for (let t of this.scoreTmpt.scoreTitles) {
        if (t && t.trim()) validTitles.push(t.trim().replace(',', ''));
      }
      let scoreTitleConf = validTitles.join(',');
      if (!scoreTitleConf) {
        $.Dlg.error('请设置至少一个评分标题');
        return;
      }

      let args = {
        actionType: this.selectTmptId ? 'U' : 'I',
        rst: {
          rstId: this.selectTmptId,
          tmptName: this.scoreTmpt.tmptName,
          scoreTitleConf: scoreTitleConf
        }
      };
      $.Req.service($.SvName.REVIEW_SCORE_TMPT_SAVE, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.tmptDlg = false;
        this.queryTmptList();
      });
    },

    openTmptEditDlg(tmpt) {
      this.selectTmptId = tmpt.rstId;
      this.scoreTmpt.tmptName = tmpt.tmptName;
      for (let i = 0; i < this.scoreTmpt.scoreTitles.length; i++) {
        this.scoreTmpt.scoreTitles[i] = null;
      }
      let titles = tmpt.scoreTitleConf.split(',');
      for (let i = 0; i < titles.length; i++) {
        this.scoreTmpt.scoreTitles[i] = titles[i];
      }
      this.tmptDlg = true;
    },

    updateDefaultGlScoreTmptId(tmptId) {
      let args = {
        typeId: 2029,
        typeValue: tmptId + ''
      };
      $.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
        this.defaultGlScoreTmptId = tmptId;
      }, true);
    },

    updateDefaultPlScoreTmptId(tmptId) {
      let args = {
        typeId: 2030,
        typeValue: tmptId + ''
      };
      $.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
        this.defaultPlScoreTmptId = tmptId;
      }, true);
    },

    delScoreTmpt(tmptId) {
      if (!confirm('您确定删除该模板吗？')) {
        return;
      }

      let args = { actionType: 'D', deleteId: tmptId };
      $.Req.service($.SvName.REVIEW_SCORE_TMPT_SAVE, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.queryTmptList();
      });
    }
  }
});

/***/ }),

/***/ 1552:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".-style- .tit[data-v-0896d0a4]{margin-bottom:10px}.coach-list li[data-v-0896d0a4]{display:inline-block;margin:5px;text-align:center;color:#fff;line-height:50px;width:105px;border-radius:3px;cursor:pointer}.coach-list li.on[data-v-0896d0a4]{box-shadow:4px 4px 4px #aaa}.coach-list li i[data-v-0896d0a4]{margin-right:2px}.color-list li[data-v-0896d0a4]{width:50px;background:#777}.color-list li[data-v-0896d0a4],.course-list li[data-v-0896d0a4]{display:inline-block;margin:5px;text-align:center;color:#fff;line-height:50px;cursor:pointer}.course-list li[data-v-0896d0a4]{width:180px;border-radius:3px}.course-list li.on[data-v-0896d0a4]{box-shadow:4px 4px 4px #aaa}.course-list li i[data-v-0896d0a4]{margin-right:2px}.color-list .setting-color[data-v-0896d0a4]{text-align:left;background:#fff;color:#333;width:auto;padding:0 10px;border:1px solid #eee}.color-list .setting-color .color[data-v-0896d0a4]{display:flex;align-items:center}.-style- .text-color[data-v-0896d0a4]{margin:15px 0;margin-bottom:15px}.color-input[data-v-0896d0a4]{width:40px;height:40px;cursor:pointer}", ""]);

// exports


/***/ }),

/***/ 1559:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".members[data-v-0e252a0a]{margin:5px 0 10px}.members li[data-v-0e252a0a]{display:inline-block;line-height:30px;word-break:keep-all;background:#eee;padding:0 12px;border-radius:2px;margin:4px 8px 4px 0}.members li a[data-v-0e252a0a]{font-size:16px;padding-left:4px;color:#bbb}.members li a[data-v-0e252a0a]:hover{color:red}.form-submit-bottom[data-v-0e252a0a]{padding-left:320px}", ""]);

// exports


/***/ }),

/***/ 1566:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1568:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".course-param[data-v-125edbd7]{font-size:13px}.course-param .top-tips[data-v-125edbd7]{background:#e5e5e5;padding:12px;line-height:1;font-size:12px;color:#999;margin-bottom:12px}.course-param .top-tips .spt[data-v-125edbd7]{padding:0 15px;color:#bbb}.course-param .top-tips i[data-v-125edbd7]{font-size:15px;margin-right:10px}.course-param ol[data-v-125edbd7],.course-param ul[data-v-125edbd7]{padding-left:5px}.course-param li[data-v-125edbd7]{padding:10px 5px 10px 12px;border-bottom:1px dashed #eee;width:1080px}.course-param li .tips[data-v-125edbd7]{padding-left:15px;color:#999;font-size:12px}.course-param li:hover input[data-v-125edbd7],.course-param li[data-v-125edbd7]:hover{background:#f9f9f9}.course-param li:hover .tips[data-v-125edbd7]{color:#ff4500}.course-param li .tit[data-v-125edbd7]{display:inline-block;width:320px}.course-param li label[data-v-125edbd7]{margin-right:15px;font-size:13px}.course-param input[type=number][data-v-125edbd7]{border:0;border-bottom:1px solid #ddd;width:80px;text-align:center;height:24px;border-radius:0;display:inline-block;margin:0 5px;font-size:15px;font-weight:700;outline:none}.submit-btn[data-v-125edbd7]{width:90px}.remark[data-v-125edbd7]{margin-top:15px;font-size:12px;color:#ff4500}.plbooking-tips[data-v-125edbd7]{margin-top:20px;font-size:12px}.plbooking-tips th[data-v-125edbd7]{text-align:left;min-width:60px}", ""]);

// exports


/***/ }),

/***/ 1582:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".s .comments .mname[data-v-1abafb26]{margin-bottom:10px;font-size:13px;font-weight:700}.s .comments li[data-v-1abafb26]{margin:15px 0;border:1px solid #eee;padding:15px;border-radius:3px;font-size:13px}.s .comments li[data-v-1abafb26]:first-child{margin-top:0}.s .comments .cont[data-v-1abafb26]{margin-top:20px;line-height:1.7}", ""]);

// exports


/***/ }),

/***/ 1592:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".-datepick[data-v-1eed0285]{display:inline-block;width:120px}.star[data-v-1eed0285]{color:#2995d8}.query-section .item[data-v-1eed0285]{padding-right:0}.weektimes[data-v-1eed0285]{margin:0 10px}.weektimes li[data-v-1eed0285]{padding:10px 0;font-size:13px}.weektimes li b[data-v-1eed0285]{padding-right:5px;font-size:14px}.weektimes li span[data-v-1eed0285]{margin-right:10px;background:#eee;padding:6px 0;display:inline-block;text-align:center;width:110px;line-height:1}", ""]);

// exports


/***/ }),

/***/ 1595:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1600:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".-course-img[data-v-21346f4b]{max-width:300px;border:1px solid #e2e2e2;border-radius:2px;padding:5px}", ""]);

// exports


/***/ }),

/***/ 1616:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1621:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".bookings .cust-list[data-v-2eeefa3e]{border:1px solid #ddd;padding:10px}.bookings .cust-list h3[data-v-2eeefa3e]{color:#999}.bookings .cust-list ul[data-v-2eeefa3e]{margin-top:10px}.bookings .cust-list ul li[data-v-2eeefa3e]{margin:5px;display:inline-block;padding:4px 12px;cursor:pointer;background:#eee}.bookings .cust-list ul li[data-v-2eeefa3e]:hover{background:#ddd}.bookings .mytbl .on[data-v-2eeefa3e]{color:#ff4500}.bookings .cust[data-v-2eeefa3e]{border:1px solid #d7dde4;padding:10px 12px}.bookings .cust .name[data-v-2eeefa3e]{font-size:20px;font-weight:700;margin-right:10px}.bookings .cust .detail[data-v-2eeefa3e]{padding:15px 0 0}.bookings .tblform[data-v-2eeefa3e]{border:1px solid #e3e8ee;margin:15px 0;padding:10px}.bookings .tblform table[data-v-2eeefa3e]{width:100%}.bookings .tblform th[data-v-2eeefa3e]{padding:5px;text-align:right;width:118px;background:#f3f3f3;border-bottom:2px solid #fff}.bookings .tblform td[data-v-2eeefa3e]{padding:5px 10px}.bookings .tblform .desc[data-v-2eeefa3e]{clear:both;border-top:1px dotted #ddd;padding-top:10px;margin-top:15px}.bookings .date-list[data-v-2eeefa3e],.bookings .tblform .desc ul[data-v-2eeefa3e]{display:inline-block}.bookings .date-list li[data-v-2eeefa3e]{display:inline-block;border-right:1px solid #e2e2e2;padding:0 10px}.bookings .date-list li[data-v-2eeefa3e]:last-child{border:0}.bookings .submit[data-v-2eeefa3e]{margin:20px 0 -20px}.bookings .submit u[data-v-2eeefa3e]{text-decoration:none;padding:0 6px;color:#bbb;font-weight:400}.bookings .submit .sum[data-v-2eeefa3e]{font-size:14px;font-weight:700}", ""]);

// exports


/***/ }),

/***/ 1628:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1631:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1649:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".-pl- .-input-s[data-v-3cb96d7f]{display:inline-block;width:150px}.-pl- .-datetieme-warn[data-v-3cb96d7f]{margin-left:15px;display:inline;padding:12px 0 0;color:#fa550a}.-pl- .-datetieme-warn i[data-v-3cb96d7f]{font-size:14px;padding-right:5px}.-pl- .mphoto[data-v-3cb96d7f]{display:block;margin:10px 0 0;width:150px}.-pl- .mname[data-v-3cb96d7f]{background:#f5f5f5;width:150px;display:block;padding:2px 0;text-align:center;font-size:14px}.note[data-v-3cb96d7f]{padding:15px;background:#f2f2f2;margin:20px 0 0}.note ol[data-v-3cb96d7f]{padding-top:10px}.note li[data-v-3cb96d7f]{padding:3px 0;font-size:12px;padding-left:10px}.form-submit[data-v-3cb96d7f]{margin-top:-5px}.old-coach[data-v-3cb96d7f]{color:#888;font-style:italic}.icon-link[data-v-3cb96d7f]{padding-left:3px}", ""]);

// exports


/***/ }),

/***/ 1664:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".week-tbl td[data-v-45522a28],.week-tbl th[data-v-45522a28]{font-size:12px}.week-tbl td[data-v-45522a28]{text-align:center;vertical-align:top;padding:0}.week-tbl .week[data-v-45522a28]{width:13%}.week-tbl .col-time[data-v-45522a28]{vertical-align:middle;font-size:13px;font-weight:700;color:#999;width:9%}.week-tbl li[data-v-45522a28]{display:block;margin:5px;background:#777;font-size:12px;color:#fff;border-radius:2px;padding:5px;cursor:pointer}.week-tbl li div[data-v-45522a28]{font-size:12px;line-height:1.6}.week-tbl li .time[data-v-45522a28]{font-size:9px}.week-tbl li .bookings[data-v-45522a28]{padding-left:6px}.week-tbl th.on[data-v-45522a28]{color:#ff4500}.view-types[data-v-45522a28]{display:inline-block;margin-left:5px}.view-types a[data-v-45522a28]{padding:1px 12px;color:#aaa}.view-types a[data-v-45522a28]:hover{color:red}.end[data-v-45522a28]{color:#999}.not-end[data-v-45522a28]{color:#1aad19}.lesson-cnt[data-v-45522a28]{color:#999;text-align:center;padding-top:5px}.long-btn[data-v-45522a28]{width:150px}.-lessons td[data-v-45522a28]{vertical-align:top}.more-opt ul[data-v-45522a28]{display:none;position:absolute;background:#eee;width:150px;z-index:100;box-shadow:6px 6px 6px #bbb;right:30px;text-align:left;padding:0}.more-opt ul li[data-v-45522a28]{padding:4px 5px 4px 15px;border-bottom:1px solid #fff;cursor:pointer}.more-opt ul li[data-v-45522a28]:hover{background:#e5e5e5}.more-opt ul li i[data-v-45522a28]{margin-right:6px}.more-opt:hover ul[data-v-45522a28]{display:block}.more-opt .btn[data-v-45522a28]{margin-right:-1px}.export-lesson-table .row[data-v-45522a28]{display:flex}.export-lesson-table .banner-img[data-v-45522a28]{height:100px;margin-right:20px}.export-lesson-table .banner-img img[data-v-45522a28]{height:100%;border-radius:10px}.export-lesson-table .text-color[data-v-45522a28]{width:40px;height:40px}.export-lesson-table[data-v-45522a28] .ivu-modal-footer{text-align:left;padding-top:0}.export-lesson-table[data-v-45522a28] .ivu-modal-footer .form-submit{padding-left:130px}.export-lesson-table .qrcode-img[data-v-45522a28]{margin-top:20px;width:134px;height:auto;cursor:pointer;position:relative}.export-lesson-table .qrcode-img img[data-v-45522a28]{width:100%;height:100%;padding:4px;border:1px solid #ddd}.export-lesson-table .qrcode-img .close[data-v-45522a28]{display:none}.export-lesson-table .qrcode-img:hover .close[data-v-45522a28]{display:block}.export-lesson-table .qrcode-img i[data-v-45522a28]{position:absolute;width:20px;height:20px;display:flex;justify-content:center;align-items:center;top:-16px;right:-16px;font-size:26px;border-radius:50%}.export-lesson-table .skin[data-v-45522a28]{width:100px;height:50px;border-radius:5px;border:1px solid #ddd}.export-lesson-table[data-v-45522a28] .ivu-modal-body{padding-bottom:0}.set-banner-img-dlg .banner-list[data-v-45522a28]{display:grid;grid-template-columns:auto auto auto}.set-banner-img-dlg .banner-list .banner-li[data-v-45522a28]{padding:10px;cursor:pointer;border:1px solid transparent}.set-banner-img-dlg .banner-list .banner-li img[data-v-45522a28]{height:100px}.set-banner-img-dlg .banner-list .banner-li[data-v-45522a28]:hover{border:1px solid #ddd}.set-banner-img-dlg .banner-list .customize-bg-img img[data-v-45522a28]{border:1px dotted #ddd}.set-banner-img-dlg .customize-bg-img[data-v-45522a28]{margin-top:20px;margin-left:10px}.set-skin-dlg[data-v-45522a28] .ivu-modal-content .ivu-modal-body,.set-skin-dlg[data-v-45522a28] .ivu-modal-content .ivu-modal-footer{background:#ddd}.set-skin-dlg .skin-list[data-v-45522a28]{display:grid;grid-template-columns:auto auto auto}.set-skin-dlg .skin-list .skin-li[data-v-45522a28]{width:100px;height:50px;border-radius:5px;margin:10px;cursor:pointer}.filter-course[data-v-45522a28] .ivu-form-item-content{display:flex;align-items:center}.lesson-table-img-dlg img[data-v-45522a28]{width:100%}", ""]);

// exports


/***/ }),

/***/ 1679:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".-s- .date-input[data-v-4b756146]{display:inline-block;width:120px}.comment[data-v-4b756146]{margin-top:10px;line-height:1.7;font-size:13px}.opt-btns[data-v-4b756146]{position:relative;top:-1px}", ""]);

// exports


/***/ }),

/***/ 1683:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".opts li[data-v-4bec65e8]{display:block;padding:0 0 5px}.opts li[data-v-4bec65e8]:last-child{padding-bottom:0}.query-section .item[data-v-4bec65e8]{padding-right:0}.opt-bar li.item[data-v-4bec65e8]{padding:0 3px;margin:0;display:inline-block}.-lessons td[data-v-4bec65e8]{vertical-align:top}.-lessons .custflag[data-v-4bec65e8]{background:orange;padding:0 2px;border-radius:2px;font-size:11px;color:#fff;margin-left:3px}.week-tbl td[data-v-4bec65e8],.week-tbl th[data-v-4bec65e8]{font-size:12px}.week-tbl td[data-v-4bec65e8]{text-align:center;vertical-align:top;padding:0}.week-tbl .week[data-v-4bec65e8]{width:13%}.week-tbl .col-time[data-v-4bec65e8]{vertical-align:middle;font-size:13px;font-weight:700;color:#999;width:9%}.week-tbl li[data-v-4bec65e8]{display:block;margin:5px;background:#777;font-size:12px;color:#fff;border-radius:2px;padding:5px;cursor:pointer}.week-tbl li div[data-v-4bec65e8]{font-size:12px;line-height:1.7}.week-tbl li i.memb[data-v-4bec65e8]{font-size:12px}.week-tbl th.on[data-v-4bec65e8]{color:#ff4500}.mytbl .end[data-v-4bec65e8]{color:#aaa}.mytbl .end i[data-v-4bec65e8]{font-size:12px;color:#ccc;padding-right:6px}.mytbl .not-end[data-v-4bec65e8]{color:#ff4500;font-size:12px;padding-right:5px}", ""]);

// exports


/***/ }),

/***/ 1686:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".review-list[data-v-4d27d9d8]{width:900px}", ""]);

// exports


/***/ }),

/***/ 1688:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1694:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".gbb[data-v-532c5c90]{font-size:12px}.tblform[data-v-532c5c90]{min-height:200px}.tblform .date[data-v-532c5c90]{width:140px;display:inline-block}", ""]);

// exports


/***/ }),

/***/ 1698:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".booking-lessons .select-mc[data-v-5417bcfe]{display:block;padding-bottom:10px}.train-item[data-v-5417bcfe]{margin:0 10px}.train-item th[data-v-5417bcfe]{text-align:left;min-width:60px;width:60px}.input-box[data-v-5417bcfe]{width:140px;vertical-align:middle;cursor:pointer}.-timepick[data-v-5417bcfe]{width:122px;display:inline-block;margin-right:12px}.-addtime[data-v-5417bcfe]{padding:0 9px}.-memb-info[data-v-5417bcfe]{padding:0 10px;display:inline-block;position:relative;top:2px}.-memb-info i[data-v-5417bcfe]{font-size:17px;color:#179b16}.-memb-info .-member-name[data-v-5417bcfe]{color:#179b16;font-weight:700;font-size:13px;padding-left:5px}.members[data-v-5417bcfe]{margin:5px 0 10px;padding:10px;border:1px solid #ddd}.members li[data-v-5417bcfe]{display:inline-block;line-height:30px;word-break:keep-all;background:#eee;padding:0 12px;border-radius:2px;margin:4px 8px 4px 0}.members li a.close[data-v-5417bcfe]{font-size:16px;padding-left:4px;color:#bbb}.members li a.close[data-v-5417bcfe]:hover{color:red}.action-items[data-v-5417bcfe]{width:400px;padding-bottom:2px}.action-items li[data-v-5417bcfe]{padding:10px 10px 0;border:1px solid #dddee1;margin:15px 0}.action-items li[data-v-5417bcfe]:first-child{margin-top:0}.action-items li table[data-v-5417bcfe]{width:100%}.action-items li table input[type=number][data-v-5417bcfe]{background:#f6f6f6;border:0;display:inline-block;width:100%;font-size:13px;padding:3px 0;text-align:center;font-weight:700;min-width:60px}.action-items li table .no[data-v-5417bcfe]{width:30px;font-style:italic;color:#888;font-weight:700;padding-left:3px}.action-items li table .unit[data-v-5417bcfe]{width:45px;font-size:11px;padding-left:8px}.action-items li table .unit i[data-v-5417bcfe]{font-size:12px;color:#999}.action-items li table .opt[data-v-5417bcfe]{text-align:right;width:40px}.action-values[data-v-5417bcfe]{padding:5px;display:inline-block;width:50%}.train-items li[data-v-5417bcfe]{display:block;padding:0 10px;margin:12px 16px 15px;background:#f6f6f6;color:#333}.train-items .tit[data-v-5417bcfe]{height:35px;line-height:35px;padding:0 10px;font-weight:700;margin-bottom:10px}.train-items .tit a[data-v-5417bcfe]{font-size:11px;font-weight:400}.train-items .tit .l i[data-v-5417bcfe]{padding-right:10px}.train-items .row[data-v-5417bcfe]{padding:10px}.train-items .values[data-v-5417bcfe]{padding:5px;display:inline-block;width:33%}.train-items .no[data-v-5417bcfe]{color:#666;font-size:11px;margin-right:5px;display:inline-block;width:23px;height:23px;line-height:21px;border:1px solid #ddd;text-align:center;border-radius:50%;background:#eee}.ps-mc[data-v-5417bcfe]{border:1px solid #dddee1;padding:5px 12px}.ps-mc label[data-v-5417bcfe]{display:block}.ps-mc .gray[data-v-5417bcfe]{color:#aaa}.ps-mc .gray[data-v-5417bcfe]:hover{color:red}.coach-fee-conf[data-v-5417bcfe]{margin-top:10px}.coach-fee-conf li[data-v-5417bcfe]{margin:10px 0 0}.coach-fee-conf input[data-v-5417bcfe]{width:115px;margin-right:5px}.card-payment-list[data-v-5417bcfe]{width:520px}", ""]);

// exports


/***/ }),

/***/ 1719:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".s .lesson-info[data-v-5fd92c36]{background:#eee;line-height:40px;text-align:center;font-size:14px}.s .lesson-info b[data-v-5fd92c36]{font-size:15px}.s .imgs li[data-v-5fd92c36]{margin:15px 0;text-align:center;border-bottom:1px solid #ddd;padding-bottom:15px}.s .imgs img[data-v-5fd92c36]{display:block;text-align:center;margin:0 auto;max-width:800px}", ""]);

// exports


/***/ }),

/***/ 1727:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1728:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".score-titles[data-v-6829847a]{margin-top:10px}.score-titles li[data-v-6829847a]{padding:5px;display:block}.score-titles li .input[data-v-6829847a]{width:320px;margin-left:20px}", ""]);

// exports


/***/ }),

/***/ 1730:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".date-input[data-v-68b3c422]{width:150px}", ""]);

// exports


/***/ }),

/***/ 1756:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".myform[data-v-78fec9fc]{width:650px}", ""]);

// exports


/***/ }),

/***/ 1771:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".-glr- .members li[data-v-7f9054dd]{display:inline-block;margin:8px;padding:10px 10px 3px;width:252px;border:1px solid #eaeaea;box-shadow:3px 3px 3px #e7eef6}.-glr- .members li[data-v-7f9054dd]:hover{border-color:orange}.-glr- .members li img[data-v-7f9054dd]{width:230px;height:200px;display:block}.-glr- .members li .item[data-v-7f9054dd]{border-top:1px dashed #ddd;height:43px;line-height:43px;display:block;clear:both}.-glr- .members li .name[data-v-7f9054dd]{font-size:16px;font-weight:700;color:#777}.-glr- .members li label[data-v-7f9054dd]{color:#999;display:inline-block;width:85px}.-glr- .members li .done[data-v-7f9054dd]{color:#179b16;border:1px solid #1aad19;border-radius:45%;padding:3px 15px}.-glr- .members li .done i[data-v-7f9054dd]{padding-right:4px;font-size:15px}.-glr- .spt[data-v-7f9054dd]{color:#ccc;padding:0 6px}", ""]);

// exports


/***/ }),

/***/ 1773:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".-datepick[data-v-7fa7b9ee]{display:inline-block;width:120px}.query-section .item[data-v-7fa7b9ee]{padding-right:0}.ps-copy[data-v-7fa7b9ee]{margin-top:10px}.ps-copy .coach-list[data-v-7fa7b9ee]{border:1px solid #dddee1;padding:10px;margin:10px 0}.ps-copy .remark[data-v-7fa7b9ee]{margin:30px 0 -20px;background:#f2f2f2;padding:15px}.ps-copy .remark h3[data-v-7fa7b9ee]{padding-bottom:10px}.ps-copy .ps-list[data-v-7fa7b9ee]{border:1px solid #dddee1;padding:5px 10px;margin-top:10px;max-height:200px;overflow-y:auto}.ps-copy .ps-list .ivu-checkbox-group-item[data-v-7fa7b9ee]{display:block;padding:5px 0}.name-list a[data-v-7fa7b9ee]{border-right:1px solid #ddd;padding:0 6px}.name-list a[data-v-7fa7b9ee]:last-child{border:0;padding-right:0}", ""]);

// exports


/***/ }),

/***/ 1783:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".date-input[data-v-92a658b4]{width:150px}.query-cond-inline[data-v-92a658b4]{position:relative;top:-5px;margin-right:-12px}.coach-stat[data-v-92a658b4]{border:1px solid #eee;padding:10px;margin:20px 0 5px}.coach-stat li[data-v-92a658b4]{background:#eee;padding:8px 8px 7px 12px;line-height:1;margin:5px;display:inline-block}.coach-stat li[data-v-92a658b4]:hover{background:#bfdefa;cursor:pointer}.coach-stat li.on[data-v-92a658b4]{background:orange;color:#fff}", ""]);

// exports


/***/ }),

/***/ 1787:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".-course-img[data-v-9ac21762]{max-width:300px;border:1px solid #e2e2e2;border-radius:2px;padding:5px}", ""]);

// exports


/***/ }),

/***/ 1793:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, "label.ckbox[data-v-a072d864]{font-size:13px}.more-conf[data-v-a072d864]{margin-top:15px;padding-top:15px;border-top:1px dashed #ddd}.checkin-types[data-v-a072d864]{width:750px}.checkin-types td[data-v-a072d864],.checkin-types th[data-v-a072d864]{padding:20px 0;vertical-align:top}.checkin-types th[data-v-a072d864]{width:60px;cursor:pointer}.checkin-types th span[data-v-a072d864]{display:inline-block;height:22px;line-height:22px;width:22px;border-radius:50%;border:1px solid #bbb;font-size:16px;font-weight:400}.checkin-types td[data-v-a072d864]{padding-bottom:20px}.checkin-types .tit[data-v-a072d864]{font-size:14px;font-weight:700;padding-bottom:15px;cursor:pointer}.checkin-types tr[data-v-a072d864]{border-bottom:1px dashed #e5e5e5}.checkin-types tr[data-v-a072d864]:last-child{border:0}input[type=number][data-v-a072d864]{border:0;border-bottom:1px solid #ddd;width:80px;text-align:center;height:24px;border-radius:0;display:inline-block;margin:0 5px;font-size:15px;font-weight:700;outline:none}.smallbtn[data-v-a072d864]{height:25px}", ""]);

// exports


/***/ }),

/***/ 1821:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".form-submit[data-v-ecb9a9fc]{padding-left:120px}.time-conf .item[data-v-ecb9a9fc]{margin-right:12px}.time-conf .-timepick[data-v-ecb9a9fc]{width:122px;display:inline-block}.-input-s[data-v-ecb9a9fc]{width:120px;display:inline-block}.ps-lesson-title[data-v-ecb9a9fc]{width:180px;display:inline-block}.-addtime[data-v-ecb9a9fc]{padding:0 9px;position:relative;top:1px}.-note[data-v-ecb9a9fc]{color:orange;padding:0 2px 0 8px}.form-submit-bottom[data-v-ecb9a9fc]{padding-left:320px}.members[data-v-ecb9a9fc]{margin:5px 0 10px;padding:10px;border:1px solid #ddd}.members li[data-v-ecb9a9fc]{display:inline-block;line-height:30px;word-break:keep-all;background:#eee;padding:0 12px;border-radius:2px;margin:4px 8px 4px 0}.members li a.close[data-v-ecb9a9fc]{font-size:16px;padding-left:4px;color:#bbb}.members li a.close[data-v-ecb9a9fc]:hover{color:red}.new-lesson-tbl[data-v-ecb9a9fc]{width:100%;margin-top:15px}.new-lesson-tbl td[data-v-ecb9a9fc],.new-lesson-tbl th[data-v-ecb9a9fc]{padding:6px}.new-lesson-tbl th[data-v-ecb9a9fc]{width:80px;text-align:left}.myform .tit .r[data-v-ecb9a9fc]{font-weight:400}.coach-fee-conf[data-v-ecb9a9fc]{margin-top:10px}.coach-fee-conf li[data-v-ecb9a9fc]{margin:10px 0 0}.coach-fee-conf input[data-v-ecb9a9fc]{width:115px;margin-right:5px}.exclude-dates[data-v-ecb9a9fc]{display:inline-block}.exclude-dates li[data-v-ecb9a9fc]{display:inline-block;padding-right:6px}.exclude-dates li .input-date[data-v-ecb9a9fc]{width:120px}", ""]);

// exports


/***/ }),

/***/ 1825:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".-lr- .items li[data-v-f2f063d6]{clear:both;border-radius:2px;padding:0;border:1px solid #ddd;margin-bottom:15px;background:#fff}.-lr- .items li table[data-v-f2f063d6]{width:100%}.-lr- .items li .scores-th[data-v-f2f063d6]{width:250px;border-right:1px dashed #ddd;padding:10px 20px 10px 15px;font-weight:400}.-lr- .items li .review-cont[data-v-f2f063d6]{padding:10px 20px;vertical-align:top}.-lr- .items li .hd[data-v-f2f063d6]{background:#fff;margin:0;padding:0 0 15px;height:25px;line-height:25px}.-lr- .items li .txt[data-v-f2f063d6]{padding:15px 0 0;max-width:900px}.-lr- .items li .txt pre[data-v-f2f063d6]{line-height:180%}.-lr- .items li .review-time[data-v-f2f063d6]{color:#777}.-lr- .items li .score-items td[data-v-f2f063d6]{padding:2px}.-lr- .items li .score-items tr[data-v-f2f063d6]:hover{background:#f2f2f2}.-lr- .items li .score[data-v-f2f063d6]{padding-bottom:5px}.-lr- .items li .score i[data-v-f2f063d6]{font-size:16px;padding:0 10px 0 15px}.-lr- .items li .score .icon-star1[data-v-f2f063d6]{color:#555}.-lr- .items li .score .icon-star2[data-v-f2f063d6]{color:#888}.-lr- .items li .score .icon-star3[data-v-f2f063d6]{color:#aaa}.-lr- .items li .score .icon-star4[data-v-f2f063d6]{color:orange}.-lr- .items li .score .icon-star5[data-v-f2f063d6]{color:#ff4500}.-lr- .items li .score u[data-v-f2f063d6]{text-decoration:none;color:#999}.-lr- .items .lesson-info[data-v-f2f063d6]{margin-top:30px;border-top:1px dashed #ddd;padding-top:12px;color:#777}.-lr- .items .lesson-info[data-v-f2f063d6]:hover{color:#000}.-lr- .items .lesson-info .spt[data-v-f2f063d6]{color:#ccc;padding:0 10px}", ""]);

// exports


/***/ }),

/***/ 1853:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1552);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("9bdef11e", content, true, {});

/***/ }),

/***/ 1860:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1559);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("18ea27df", content, true, {});

/***/ }),

/***/ 1867:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1566);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("1cc4c99a", content, true, {});

/***/ }),

/***/ 1869:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1568);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("04099e96", content, true, {});

/***/ }),

/***/ 1883:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1582);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("34d22f38", content, true, {});

/***/ }),

/***/ 1893:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1592);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("6e3cd005", content, true, {});

/***/ }),

/***/ 1896:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1595);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("55fe5548", content, true, {});

/***/ }),

/***/ 1901:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1600);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("e84a36de", content, true, {});

/***/ }),

/***/ 1917:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1616);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("3133fe32", content, true, {});

/***/ }),

/***/ 1922:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1621);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("8c7db9ca", content, true, {});

/***/ }),

/***/ 1929:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1628);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("fb4e70be", content, true, {});

/***/ }),

/***/ 1932:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1631);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("84746afe", content, true, {});

/***/ }),

/***/ 1950:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1649);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("5806a95a", content, true, {});

/***/ }),

/***/ 1965:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1664);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("3511a9c4", content, true, {});

/***/ }),

/***/ 1980:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1679);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("5125c224", content, true, {});

/***/ }),

/***/ 1984:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1683);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("dc77526a", content, true, {});

/***/ }),

/***/ 1987:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1686);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("38f03cfa", content, true, {});

/***/ }),

/***/ 1989:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1688);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("1791bdec", content, true, {});

/***/ }),

/***/ 1995:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1694);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("4118e1a3", content, true, {});

/***/ }),

/***/ 1999:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1698);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("111c7110", content, true, {});

/***/ }),

/***/ 2020:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1719);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("3858692a", content, true, {});

/***/ }),

/***/ 2028:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1727);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("781cc95d", content, true, {});

/***/ }),

/***/ 2029:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1728);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("78cdd608", content, true, {});

/***/ }),

/***/ 2031:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1730);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("5fe98113", content, true, {});

/***/ }),

/***/ 2057:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1756);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("4a602360", content, true, {});

/***/ }),

/***/ 2072:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1771);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("fb97e964", content, true, {});

/***/ }),

/***/ 2074:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1773);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("72f4d1fb", content, true, {});

/***/ }),

/***/ 2084:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1783);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("1c532434", content, true, {});

/***/ }),

/***/ 2088:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1787);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("58feb91e", content, true, {});

/***/ }),

/***/ 2094:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1793);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("71d09d8e", content, true, {});

/***/ }),

/***/ 2122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1821);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("65cf9553", content, true, {});

/***/ }),

/***/ 2126:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1825);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("67a70332", content, true, {});

/***/ }),

/***/ 2185:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1922)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1237),
  /* template */
  __webpack_require__(2334),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2eeefa3e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2186:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1995)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1238),
  /* template */
  __webpack_require__(2408),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-532c5c90",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2187:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1883)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1239),
  /* template */
  __webpack_require__(2293),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1abafb26",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2188:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2020)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1240),
  /* template */
  __webpack_require__(2432),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5fd92c36",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2189:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2094)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1242),
  /* template */
  __webpack_require__(2507),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-a072d864",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2261:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style-"
  }, [_c('div', [_c('div', {
    staticClass: "tit"
  }, [_c('radio-group', {
    model: {
      value: (_vm.bgColorType),
      callback: function($$v) {
        _vm.bgColorType = $$v
      },
      expression: "bgColorType"
    }
  }, [_c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("根据教练设置")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("根据课程设置")])], 1)], 1), _vm._v(" "), (_vm.bgColorType === 1) ? _c('ul', {
    staticClass: "coach-list"
  }, _vm._l((_vm.coachList), function(c, idx) {
    return _c('li', {
      key: idx,
      class: {
        on: c.staffId === _vm.selectCoachId
      },
      style: ({
        background: '#' + _vm.coachColorMap[c.staffId],
        color: '#' + _vm.coachTextColorMap[c.staffId]
      }),
      on: {
        "click": function($event) {
          return _vm.selectStaff(c.staffId)
        }
      }
    }, [(c.staffId === _vm.selectCoachId) ? _c('i', {
      staticClass: "iconfont icon-check1"
    }) : _vm._e(), _vm._v(_vm._s(c.name) + "\n      ")])
  }), 0) : (_vm.bgColorType === 2) ? _c('ul', {
    staticClass: "course-list"
  }, _vm._l((_vm.courseList), function(c, idx) {
    return _c('li', {
      key: idx,
      class: {
        on: c.courseId === _vm.selectCourseId
      },
      style: ({
        background: '#' + _vm.courseColorMap[c.courseId],
        color: '#' + _vm.courseTextColorMap[c.courseId]
      }),
      on: {
        "click": function($event) {
          return _vm.selectCourse(c.courseId)
        }
      }
    }, [(c.courseId === _vm.selectCourseId) ? _c('i', {
      staticClass: "iconfont icon-check1"
    }) : _vm._e(), _vm._v(_vm._s(c.courseName) + "\n      ")])
  }), 0) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "p15"
  }, [(_vm.selectCoachId || _vm.selectCourseId) ? [_c('div', {
    staticClass: "tit"
  }, [_vm._v("请选择背景色")]), _vm._v(" "), _c('ul', {
    staticClass: "color-list"
  }, [_vm._l((_vm.colorList), function(c) {
    return _c('li', {
      style: ('background:#' + c),
      on: {
        "click": function($event) {
          return _vm.setColor(c)
        }
      }
    }, [_vm._v(" ")])
  }), _vm._v(" "), _c('li', {
    staticClass: "setting-color"
  }, [_c('div', {
    staticClass: "color"
  }, [_c('span', [_vm._v("更多背景色：")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.bgColor),
      expression: "bgColor"
    }],
    staticClass: "color-input",
    attrs: {
      "type": "color"
    },
    domProps: {
      "value": (_vm.bgColor)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.bgColor = $event.target.value
      }, _vm.changeBgColor]
    }
  })])])], 2), _vm._v(" "), _c('div', {
    staticClass: "tit text-color"
  }, [_vm._v("请选择字体颜色")]), _vm._v(" "), _c('ul', {
    staticClass: "color-list"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.textColor),
      expression: "textColor"
    }],
    staticClass: "color-input",
    attrs: {
      "type": "color"
    },
    domProps: {
      "value": (_vm.textColor)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.textColor = $event.target.value
      }, _vm.changeFontColor]
    }
  })])] : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-submit center"
  }, [_c('i-button', {
    staticClass: "primary",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveColorConf
    }
  }, [_vm._v("提交")])], 1)], 2)])
},staticRenderFns: []}

/***/ }),

/***/ 2269:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "group-lesson"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "title": "上课详情",
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), _c('section', [_c('i-form', {
    ref: "lesson",
    staticClass: "myform",
    staticStyle: {
      "width": "600px"
    },
    attrs: {
      "model": _vm.lesson,
      "rules": _vm.lessonFormRule,
      "label-width": 120
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "courseId",
      "label": "课程"
    }
  }, [_c('b', [_vm._v(_vm._s(_vm.lesson.courseName))])]), _vm._v(" "), (_vm.lesson.csName) ? _c('form-item', {
    attrs: {
      "label": "排课名称"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.lesson.csName) + "\n          ")]) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "lessonTitle",
      "label": "上课主题"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "disabled": !_vm.courseEditPermit
    },
    model: {
      value: (_vm.lesson.lessonTitle),
      callback: function($$v) {
        _vm.$set(_vm.lesson, "lessonTitle", $$v)
      },
      expression: "lesson.lessonTitle"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "lessonLevel",
      "label": "课程难度"
    }
  }, [_c('Rate', {
    model: {
      value: (_vm.lesson.lessonLevel),
      callback: function($$v) {
        _vm.$set(_vm.lesson, "lessonLevel", $$v)
      },
      expression: "lesson.lessonLevel"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（1星最低，5星最高）")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "状态"
    }
  }, [_vm._v(_vm._s(_vm.lesson.statusName))]), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "coachId",
      "label": "教练"
    }
  }, [_c('i-select', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "disabled": !_vm.courseEditPermit,
      "filterable": ""
    },
    model: {
      value: (_vm.lesson.coachId),
      callback: function($$v) {
        _vm.$set(_vm.lesson, "coachId", $$v)
      },
      expression: "lesson.coachId"
    }
  }, _vm._l((_vm.coachList), function(c) {
    return _c('i-option', {
      key: c.staffId,
      attrs: {
        "value": c.staffId
      }
    }, [_vm._v(_vm._s(c.name))])
  }), 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "coachLessonFeeType",
      "label": "教练课时费类型"
    }
  }, [(_vm.lesson.coachLessonFeeType === 0) ? [_vm._v("固定课时费")] : (_vm.lesson.coachLessonFeeType === 1) ? [_vm._v("根据签到人数等比递增")] : _vm._e(), _vm._v(" "), (_vm.lesson.coachLessonFeeType === 2) ? [_vm._v("根据签到人数自由设置")] : _vm._e(), _vm._v(" "), (_vm.lesson.coachLessonFeeType === 2) ? _c('a', {
    staticClass: "l10",
    on: {
      "click": function($event) {
        return _vm.$router.push('/group-course-schedule-edit/' + _vm.lesson.csId)
      }
    }
  }, [_vm._v("查看 →")]) : _vm._e()], 2), _vm._v(" "), (_vm.lesson.coachLessonFeeType !== 2) ? _c('form-item', {
    attrs: {
      "prop": "coachLessonFee",
      "label": "教练课时费"
    }
  }, [_c('input-num', {
    attrs: {
      "disabled": !_vm.courseEditPermit,
      "placeholder": "",
      "title": ""
    },
    model: {
      value: (_vm.lesson.coachLessonFee),
      callback: function($$v) {
        _vm.$set(_vm.lesson, "coachLessonFee", _vm._n($$v))
      },
      expression: "lesson.coachLessonFee"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")]), _vm._v("\n              "), _c('span', {
    staticClass: "tips"
  }, [_c('i', {
    staticClass: "iconfont icon-alert icon"
  }), _vm._v("用于教练工资结算，请慎重填写")])], 1) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "viceCoachIdList",
      "label": "助教"
    }
  }, [_c('i-select', {
    staticStyle: {
      "width": "420px"
    },
    attrs: {
      "multiple": true,
      "filterable": ""
    },
    model: {
      value: (_vm.viceCoachIdList),
      callback: function($$v) {
        _vm.viceCoachIdList = $$v
      },
      expression: "viceCoachIdList"
    }
  }, _vm._l((_vm.coachList), function(c) {
    return _c('i-option', {
      key: c.staffId,
      attrs: {
        "value": c.staffId
      }
    }, [_vm._v(_vm._s(c.name))])
  }), 1), _vm._v(" "), _c('help', {
    attrs: {
      "title": "提示"
    }
  }, [_vm._v("\n              助教是指协助上课的教练，助教可以代教练和学员签到、发布上课照片、给学员点评。\n            ")])], 1), _vm._v(" "), (_vm.viceCoachIdList && _vm.viceCoachIdList.length) ? _c('form-item', {
    attrs: {
      "prop": "viceCoachLessonFee",
      "label": "助教课时费"
    }
  }, [_c('input-num', {
    attrs: {
      "disabled": !_vm.courseEditPermit,
      "placeholder": "",
      "title": ""
    },
    model: {
      value: (_vm.lesson.viceCoachLessonFee),
      callback: function($$v) {
        _vm.$set(_vm.lesson, "viceCoachLessonFee", _vm._n($$v))
      },
      expression: "lesson.viceCoachLessonFee"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")]), _vm._v("\n              "), _c('span', {
    staticClass: "tips"
  }, [_c('i', {
    staticClass: "iconfont icon-alert icon"
  }), _vm._v("用于助教工资结算，请慎重填写")])], 1) : _vm._e(), _vm._v(" "), (_vm.courseEditPermit && _vm.editable) ? [_c('form-item', {
    attrs: {
      "prop": "lessonDate",
      "label": "上课日期/时间",
      "required": ""
    }
  }, [_c('Date-picker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "选择上课日期"
    },
    model: {
      value: (_vm.lesson.lessonDate),
      callback: function($$v) {
        _vm.$set(_vm.lesson, "lessonDate", $$v)
      },
      expression: "lesson.lessonDate"
    }
  }), _vm._v("\n               \n              "), _c('time-picker', {
    staticClass: "input-s",
    attrs: {
      "format": "HH:mm",
      "type": "timerange",
      "confirm": "",
      "placeholder": "选择时间范围"
    },
    model: {
      value: (_vm.lesson.lessonTimes),
      callback: function($$v) {
        _vm.$set(_vm.lesson, "lessonTimes", $$v)
      },
      expression: "lesson.lessonTimes"
    }
  })], 1)] : _c('form-item', {
    attrs: {
      "prop": "lessonDateTime",
      "label": "上课日期/时间"
    }
  }, [_c('b', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.g.Util.formatDate(_vm.lesson.lessonDate, false)) + "   " + _vm._s(_vm.lesson.lessonTimes[0]) + " ~ " + _vm._s(_vm.lesson.lessonTimes[1]))])]), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "groundId",
      "label": "场地"
    }
  }, [_c('i-select', {
    attrs: {
      "disabled": !_vm.courseEditPermit || !_vm.editable,
      "filterable": ""
    },
    model: {
      value: (_vm.lesson.groundId),
      callback: function($$v) {
        _vm.$set(_vm.lesson, "groundId", $$v)
      },
      expression: "lesson.groundId"
    }
  }, _vm._l((_vm.groundList), function(g) {
    return _c('i-option', {
      key: g.groundId,
      attrs: {
        "value": g.groundId
      }
    }, [_vm._v(_vm._s(g.groundName))])
  }), 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "isNeedBooking",
      "label": "是否需要预约"
    }
  }, [_c('i-switch', {
    attrs: {
      "size": "large",
      "disabled": !_vm.courseEditPermit || !_vm.editable
    },
    model: {
      value: (_vm.lesson.isNeedBooking),
      callback: function($$v) {
        _vm.$set(_vm.lesson, "isNeedBooking", $$v)
      },
      expression: "lesson.isNeedBooking"
    }
  }, [_c('span', {
    attrs: {
      "slot": "open"
    },
    slot: "open"
  }, [_vm._v("是")]), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "close"
    },
    slot: "close"
  }, [_vm._v("否")])]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v(" "), _c('i', {
    staticClass: "iconfont icon-alert icon"
  }), _vm._v("如果需要，上课前会员须先预约，然后才能签到")])], 1), _vm._v(" "), (_vm.lesson.bookings) ? _c('form-item', {
    attrs: {
      "prop": "bookings",
      "label": "已预约人数"
    }
  }, [_c('b', [_vm._v(_vm._s(_vm.lesson.bookings))]), _vm._v(" 人")]) : _vm._e(), _vm._v(" "), (_vm.lesson.isNeedBooking) ? _c('form-item', {
    attrs: {
      "prop": "maxStudents",
      "label": "最多预约人数"
    }
  }, [_c('input-int', {
    staticClass: "input-s",
    attrs: {
      "disabled": !_vm.courseEditPermit || _vm.g.Util.isNotEmpty(_vm.lesson.checkinTime),
      "placeholder": ""
    },
    model: {
      value: (_vm.lesson.maxStudents),
      callback: function($$v) {
        _vm.$set(_vm.lesson, "maxStudents", $$v)
      },
      expression: "lesson.maxStudents"
    }
  }), _vm._v(" "), (_vm.lesson.isNeedBooking) ? _c('span', {
    staticClass: "tips l10"
  }, [_c('i', {
    staticClass: "iconfont icon-alert icon"
  }), _vm._v("最多可预约上课的人数\n            ")]) : _vm._e(), _vm._v(" "), (_vm.courseEditPermit && _vm.lesson.bookings) ? _c('help', {
    attrs: {
      "title": "重要说明"
    }
  }, [_vm._v("\n              【最多预约人数】不能小于【已预约人数 "), _c('b', {
    staticClass: "orange"
  }, [_vm._v(_vm._s(_vm.lesson.bookings))]), _vm._v("】\n              "), _c('p'), _vm._v("\n              当提高最多预约人数时，如果有排队人员，系统会自动将排队人员处理为正式预约人员，并发送短信通知（取决于是否在“预约签到设置”中配置了通知）\n            ")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.lesson.isNeedBooking) ? _c('form-item', {
    attrs: {
      "prop": "minStudents",
      "label": "最少预约人数"
    }
  }, [_c('input-int', {
    staticClass: "input-s",
    attrs: {
      "disabled": (!_vm.courseEditPermit || _vm.g.Util.isNotEmpty(_vm.lesson.checkinTime)),
      "placeholder": ""
    },
    model: {
      value: (_vm.lesson.minStudents),
      callback: function($$v) {
        _vm.$set(_vm.lesson, "minStudents", $$v)
      },
      expression: "lesson.minStudents"
    }
  }), _vm._v(" "), (_vm.lesson.isNeedBooking && _vm.lesson.minStudents) ? _c('span', {
    staticClass: "tips l10"
  }, [_c('i', {
    staticClass: "iconfont icon-alert icon"
  }), _vm._v("预约人数不满，此节课将自动取消\n            ")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "enableQueue",
      "label": "是否启用排队"
    }
  }, [_c('i-switch', {
    attrs: {
      "size": "large",
      "disabled": !_vm.courseEditPermit || (_vm.lesson.bookings > _vm.lesson.maxStudents) || _vm.g.Util.isNotEmpty(_vm.lesson.checkinTime)
    },
    model: {
      value: (_vm.lesson.enableQueue),
      callback: function($$v) {
        _vm.$set(_vm.lesson, "enableQueue", $$v)
      },
      expression: "lesson.enableQueue"
    }
  }, [_c('span', {
    attrs: {
      "slot": "open"
    },
    slot: "open"
  }, [_vm._v("是")]), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "close"
    },
    slot: "close"
  }, [_vm._v("否")])]), _vm._v(" "), _c('help', {
    staticClass: "l10",
    attrs: {
      "title": "提示"
    }
  }, [_vm._v("\n              如果启用了排队，当预约人数满员时，会员可以选择排队预约（与预约类似）；\n              "), _c('p'), _vm._v("当有会员取消时，系统自动将首位排队人员转为正式预约会员（可在【预约设置】中设置是否发通知给该排队人员）；\n              "), _c('p'), _vm._v("在上课时间到达后，系统会自动清除排队人员，如有会员卡扣费，系统会自动退还。\n            ")])], 1), _vm._v(" "), (_vm.classMembers && _vm.classMembers.length) ? _c('form-item', {
    attrs: {
      "label": "固定学员"
    }
  }, [_c('ul', {
    staticClass: "members"
  }, [_vm._l((_vm.classMembers), function(m) {
    return _c('li', [_vm._v(_vm._s(m.name))])
  }), _vm._v(" "), _c('li', {
    staticClass: "gray",
    staticStyle: {
      "background": "#fff"
    }
  }, [_vm._v("共 " + _vm._s(_vm.classMembers.length) + " 人")])], 2)]) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "isNeedPayment",
      "label": "上课计费设置",
      "required": ""
    }
  }, [_c('span', {
    staticClass: "tips"
  }, [_c('i', {
    staticClass: "iconfont icon-alert icon"
  }), _vm._v("请设置会员参与本课需要使用的卡，以及费用")]), _vm._v(" "), (_vm.isNeedPayment) ? _c('div', [_c('ul', {
    staticClass: "card-payment-list"
  }, [_c('li', {
    staticClass: "-hd"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v("会员卡种类")]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v("上课计费设置")])]), _vm._v(" "), _vm._l((_vm.cardList), function(c, index) {
    return _c('li', [_c('div', {
      staticClass: "name"
    }, [_c('checkbox', {
      attrs: {
        "disabled": !_vm.courseEditPermit
      },
      model: {
        value: (_vm.cardPayments[c.cardId].checked),
        callback: function($$v) {
          _vm.$set(_vm.cardPayments[c.cardId], "checked", $$v)
        },
        expression: "cardPayments[c.cardId].checked"
      }
    }, [_vm._v(" " + _vm._s(c.cardName))])], 1), _vm._v(" "), _c('div', {
      staticClass: "desc"
    }, [(c.cardType === 1) ? [_c('span', {
      staticClass: "gray"
    }, [_vm._v("期限卡，不计单次消费")])] : (c.cardType === 2) ? [_vm._v("\n                      每次课计费"), _c('i-input', {
      staticClass: "input",
      attrs: {
        "disabled": !_vm.courseEditPermit,
        "number": "",
        "type": "text",
        "size": "small"
      },
      model: {
        value: (_vm.cardPayments[c.cardId].payment),
        callback: function($$v) {
          _vm.$set(_vm.cardPayments[c.cardId], "payment", _vm._n($$v))
        },
        expression: "cardPayments[c.cardId].payment"
      }
    }), _c('b', [_vm._v("次")])] : (c.cardType === 3) ? [_vm._v("\n                      每次课计费"), _c('i-input', {
      staticClass: "input",
      attrs: {
        "disabled": !_vm.courseEditPermit,
        "number": "",
        "type": "text",
        "size": "small"
      },
      model: {
        value: (_vm.cardPayments[c.cardId].payment),
        callback: function($$v) {
          _vm.$set(_vm.cardPayments[c.cardId], "payment", _vm._n($$v))
        },
        expression: "cardPayments[c.cardId].payment"
      }
    }), _c('b', {
      staticClass: "red"
    }, [_vm._v("元")])] : (c.cardType === 4) ? [_vm._v("\n                      每次课计费"), _c('input-int', {
      staticClass: "input",
      attrs: {
        "disabled": !_vm.courseEditPermit
      },
      model: {
        value: (_vm.cardPayments[c.cardId].payment),
        callback: function($$v) {
          _vm.$set(_vm.cardPayments[c.cardId], "payment", _vm._n($$v))
        },
        expression: "cardPayments[c.cardId].payment"
      }
    }), _c('b', {
      staticClass: "green"
    }, [_vm._v(_vm._s(_vm.g.Dict.CardTimeTypes[c.cardTimeType]))])] : _vm._e()], 2)])
  })], 2)]) : _vm._e()]), _vm._v(" "), _c('form-item', {
    ref: "content",
    attrs: {
      "label": "上课内容"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "readonly": !_vm.courseEditPermit,
      "rows": 10
    },
    model: {
      value: (_vm.lesson.content),
      callback: function($$v) {
        _vm.$set(_vm.lesson, "content", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "lesson.content"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    ref: "meetingUrl",
    attrs: {
      "label": "上课直播链接"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "readonly": !_vm.courseEditPermit
    },
    model: {
      value: (_vm.lesson.meetingUrl),
      callback: function($$v) {
        _vm.$set(_vm.lesson, "meetingUrl", $$v)
      },
      expression: "lesson.meetingUrl"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "p5 gray"
  }, [_vm._v("( 推荐使用腾讯会议：\n              "), _c('a', {
    attrs: {
      "href": "https://meeting.tencent.com/",
      "target": "_blank"
    }
  }, [_vm._v("腾讯会议官网")]), _vm._v(" ，\n              "), _c('a', {
    attrs: {
      "href": "https://jingyan.baidu.com/article/d169e1865b0d5f026711d83b.html",
      "target": "_blank"
    }
  }, [_vm._v("如何邀请别人进入会议")]), _vm._v("\n              )\n              "), _c('help', [_vm._v("\n                设置上课直播链接后，学员约课后就能在手机端课表中点击进入直播（会议）中。\n              ")])], 1)], 1), _vm._v(" "), _c('form-item', {
    staticClass: "low-margin",
    attrs: {
      "label": "排课模板"
    }
  }, [_c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/group-course-schedule-edit/' + _vm.lesson.csId)
      }
    }
  }, [_vm._v("查看 →")])]), _vm._v(" "), (_vm.lesson.checkins) ? _c('form-item', {
    staticClass: "low-margin",
    attrs: {
      "label": "签到人数"
    }
  }, [_vm._v(_vm._s(_vm.lesson.checkins))]) : _vm._e(), _vm._v(" "), (_vm.lesson.checkinStaffId) ? _c('form-item', {
    staticClass: "low-margin",
    attrs: {
      "label": "教练签到"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.lesson.checkinStaffName) + " , " + _vm._s(_vm.lesson.checkinTime) + "\n          ")]) : _vm._e(), _vm._v(" "), _c('form-item', {
    staticClass: "low-margin",
    attrs: {
      "label": "创建人/时间"
    }
  }, [_vm._v(_vm._s(_vm.lesson.createUname) + " / " + _vm._s(_vm.lesson.createTime))]), _vm._v(" "), _c('form-item', {
    staticClass: "low-margin",
    attrs: {
      "label": "更新人/时间"
    }
  }, [_vm._v(_vm._s(_vm.lesson.updateUname) + " / " + _vm._s(_vm.lesson.updateTime))])], 2), _vm._v(" "), _c('div', {
    staticClass: "form-submit-bottom"
  }, [(_vm.courseEditPermit) ? _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.handleSubmit
    }
  }, [_vm._v("更新")]) : _vm._e(), _vm._v("\n           \n          "), (_vm.courseEditPermit && _vm.editable && !_vm.lesson.checkins) ? _c('i-button', {
    attrs: {
      "type": "dashed"
    },
    on: {
      "click": _vm.handleDelLesson
    }
  }, [_vm._v("\n            删除\n          ")]) : _vm._e()], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2276:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "group-lesson"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "title": "上课详情",
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), _c('section', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(1), _vm._v(" "), _vm._l((_vm.mlCancelLogList), function(l, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(l.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createUname))]), _vm._v(" "), _c('td', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.viewMember(l.memberId)
        }
      }
    }, [_vm._v(_vm._s(l.memberName))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.bookingTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.cardName))]), _vm._v(" "), _c('td', [(l.cardType === 1) ? [_vm._v("期限卡不计费")] : (l.cardType === 2) ? [_vm._v(_vm._s(l.cardPayment) + " 次")] : (l.cardType === 3) ? [_vm._v(_vm._s(l.cardPayment) + " 元")] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.paymentCount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.position))])])
  })], 2)]), _vm._v(" "), (_vm.mlCancelLogList && !_vm.mlCancelLogList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n\t\t\t\t暂无数据\n\t\t\t")]) : _vm._e()]), _vm._v(" "), _c('section', [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(3), _vm._v(" "), _vm._l((_vm.mlCheckinCancelLogList), function(l, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(l.createTime))]), _vm._v(" "), _c('td', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.viewMember(l.memberId)
        }
      }
    }, [_vm._v(_vm._s(l.memberName))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.cardName))]), _vm._v(" "), _c('td', [(l.cardType === 1) ? [_vm._v("期限卡不计费")] : (l.cardType === 2) ? [_vm._v(_vm._s(l.cardPayment) + " 次")] : (l.cardType === 3) ? [_vm._v(_vm._s(l.cardPayment) + " 元")] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.paymentCount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.checkinUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.checkinTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.cancelRemark))])])
  })], 2)]), _vm._v(" "), (_vm.mlCheckinCancelLogList && !_vm.mlCheckinCancelLogList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()])], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员信息",
      "width": "780",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.viewMemberDlg),
      callback: function($$v) {
        _vm.viewMemberDlg = $$v
      },
      expression: "viewMemberDlg"
    }
  }, [(_vm.viewMemberDlg) ? [_c('member-base-info', {
    attrs: {
      "member-id": _vm.viewMemberId
    }
  })] : _vm._e()], 2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("预约取消日志")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("取消时间 ↓")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("取消人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("会员")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("预约时间")]), _vm._v(" "), _c('th', [_vm._v("使用会员卡")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("会员卡消费")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("预约人数")]), _vm._v(" "), _c('th', [_vm._v("预约位置")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("签到与扣费取消日期")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("取消时间 ↓")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("会员")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("使用会员卡")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "95"
    }
  }, [_vm._v("会员卡消费")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("消费人数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("签到人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "160"
    }
  }, [_vm._v("签到时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("取消人")]), _vm._v(" "), _c('th', [_vm._v("取消备注")])])
}]}

/***/ }),

/***/ 2278:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "lesson-booking-conf"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main course-param"
  }, [_c('div', {
    staticClass: "top-tips"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor"
  }), _vm._v("小贴士： 4天=96小时，5天=120小时，6天=144小时，7天=168小时\n      "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v("\n      微信通知免费，短信通知每条￥0.06 （"), _c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/recharge')
      }
    }
  }, [_vm._v("短信数充值→")]), _vm._v("）\n    ")]), _vm._v(" "), _c('Tabs', {
    attrs: {
      "animated": false
    },
    model: {
      value: (_vm.selectTab),
      callback: function($$v) {
        _vm.selectTab = $$v
      },
      expression: "selectTab"
    }
  }, [(_vm.g.data.shop.hasPrivateCourse) ? _c('TabPane', {
    attrs: {
      "label": "私教课预约设置",
      "name": "plBookingConf"
    }
  }, [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("参数设置")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [(_vm.editable) ? _c('div', {
    staticClass: "submit"
  }, [_c('i-button', {
    staticClass: "submit-btn",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.submit(1)
      }
    }
  }, [_vm._v("保存")])], 1) : _vm._e()])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("\n              会员只能在上课前\n              "), _c('input-int', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.shopParam.bookingPlMaxTime),
      callback: function($$v) {
        _vm.$set(_vm.shopParam, "bookingPlMaxTime", _vm._n($$v))
      },
      expression: "shopParam.bookingPlMaxTime"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "red"
  }, [_vm._v("小时")]), _vm._v("之内预约私教\n            ")], 1), _vm._v(" "), _c('li', [_vm._v("\n              会员在上课前\n              "), _c('input-int', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.shopParam.bookingPlMinTime),
      callback: function($$v) {
        _vm.$set(_vm.shopParam, "bookingPlMinTime", _vm._n($$v))
      },
      expression: "shopParam.bookingPlMinTime"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "orangered"
  }, [_vm._v("分钟")]), _vm._v("之内不能预约私教课\n            ")], 1), _vm._v(" "), _c('li', [_vm._v("\n              会员在上课前\n              "), _c('input-int', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.shopParam.cancelPlTime),
      callback: function($$v) {
        _vm.$set(_vm.shopParam, "cancelPlTime", _vm._n($$v))
      },
      expression: "shopParam.cancelPlTime"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "orangered"
  }, [_vm._v("分钟")]), _vm._v("之内不能取消私教课预约\n              "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（取消预约和修改约课时间都会受到此时间限制）")])], 1), _vm._v(" "), _c('li', [_vm._v("\n              员工在上课前\n              "), _c('input-int', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.staffCancelMplLimitTime),
      callback: function($$v) {
        _vm.staffCancelMplLimitTime = _vm._n($$v)
      },
      expression: "staffCancelMplLimitTime"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "orangered"
  }, [_vm._v("分钟")]), _vm._v("之内不能取消私教课预约\n              "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（取消预约和修改约课时间都会受到此时间限制）")])], 1), _vm._v(" "), _c('li', [_vm._v("\n              上课前\n              "), _c('input-num', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "blur": function($event) {
        return _vm.checkPlNoticeHour(0)
      }
    },
    model: {
      value: (_vm.plNoticeHours[0]),
      callback: function($$v) {
        _vm.$set(_vm.plNoticeHours, 0, _vm._n($$v))
      },
      expression: "plNoticeHours[0]"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "red"
  }, [_vm._v("小时")]), _vm._v("、\n              "), _c('input-num', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "blur": function($event) {
        return _vm.checkPlNoticeHour(1)
      }
    },
    model: {
      value: (_vm.plNoticeHours[1]),
      callback: function($$v) {
        _vm.$set(_vm.plNoticeHours, 1, _vm._n($$v))
      },
      expression: "plNoticeHours[1]"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "red"
  }, [_vm._v("小时")]), _vm._v("\n              发通知提醒\n              "), _c('help', [_vm._v("\n                最多可设置两个通知提醒时间，可支持半小时（例如：0.5，1.5 等）\n              ")]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（需设置下面的“8. 上课前是否给会员发通知”、“9. 上课前是否给教练发通知”）")])], 1), _vm._v(" "), _c('li', [_vm._v("\n              会员最多能预约：\n              "), _c('input-int', {
    attrs: {
      "min": 1,
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.plMaxBookingsPerDay),
      callback: function($$v) {
        _vm.plMaxBookingsPerDay = _vm._n($$v)
      },
      expression: "plMaxBookingsPerDay"
    }
  }), _vm._v(" 节课 / 天 ，\n              "), _c('input-int', {
    attrs: {
      "min": 1,
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.plMaxBookingsPerWeek),
      callback: function($$v) {
        _vm.plMaxBookingsPerWeek = _vm._n($$v)
      },
      expression: "plMaxBookingsPerWeek"
    }
  }), _vm._v(" 节课 / 周\n              "), (_vm.editable) ? _c('span', {
    staticClass: "tips"
  }, [_vm._v("（不填则表示不限制）")]) : _vm._e()], 1), _vm._v(" "), _c('li', [_c('checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(103, _vm.disableMembBookingPl)
      }
    },
    model: {
      value: (_vm.disableMembBookingPl),
      callback: function($$v) {
        _vm.disableMembBookingPl = $$v
      },
      expression: "disableMembBookingPl"
    }
  }, [_vm._v("\n                禁止会员在手机端自助预约私教课\n              ")])], 1), _vm._v(" "), _c('li', [_c('checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(113, _vm.enablePlGroundLimit)
      }
    },
    model: {
      value: (_vm.enablePlGroundLimit),
      callback: function($$v) {
        _vm.enablePlGroundLimit = $$v
      },
      expression: "enablePlGroundLimit"
    }
  }, [_vm._v("\n                启用私教上课场地的人数限制\n                "), _c('help', [_vm._v("\n                  如果启用了，在每次约课时，系统将根据私教课选择的场地检查上课场地总共能容纳的人数。超过场地容纳人数，将不能预约。\n                  "), _c('p'), _vm._v("\n                  上课场地设置参考：【设置 》上课场地】，私教排课中的上课场地\n                ")])], 1)], 1), _vm._v(" "), _c('li', [_c('checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(115, _vm.enableMemberPlTimeCheck)
      }
    },
    model: {
      value: (_vm.enableMemberPlTimeCheck),
      callback: function($$v) {
        _vm.enableMemberPlTimeCheck = $$v
      },
      expression: "enableMemberPlTimeCheck"
    }
  }, [_vm._v("\n                约课时检查会员私教课时间是否存在冲突\n                "), _c('help', [_vm._v("\n                  如果启用了，在每次约课时，系统将检查预约私教课的时间与该会员其它私教课时间是否存在冲突，如果存在，该节课将无法预约。\n                  "), _c('p'), _vm._v("\n                  如果允许多个教练约同一个会员的同时间段的课，此处则不能勾选。\n                ")])], 1)], 1), _vm._v(" "), _c('li', [_c('checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(122, _vm.enablePlBookingOnce)
      }
    },
    model: {
      value: (_vm.enablePlBookingOnce),
      callback: function($$v) {
        _vm.enablePlBookingOnce = $$v
      },
      expression: "enablePlBookingOnce"
    }
  }, [_vm._v("\n                预约的私教课签到后才能继续预约\n                "), _c('help', [_vm._v("\n                  如果勾选了此选项后，表示会员只有将预约的私教课（当日及以后的课）签到后，才能继续预约。\n                  "), _c('p'), _vm._v("\n                  例如：当日是2020-4-26，会员预约了2020-4-27的私教课（尚未签到），如果再去预约其他私教课，系统会提示并阻止预约。\n                ")])], 1)], 1), _vm._v(" "), _c('li', [_vm._v("\n              会员在手机端约课的时间（分钟）选择：\n              "), _c('CheckboxGroup', {
    staticStyle: {
      "display": "inline-block",
      "margin-left": "10px"
    },
    model: {
      value: (_vm.memberBookingPlMins),
      callback: function($$v) {
        _vm.memberBookingPlMins = $$v
      },
      expression: "memberBookingPlMins"
    }
  }, _vm._l((_vm.memberBookingPlTargetMins), function(min) {
    return _c('Checkbox', {
      key: min,
      attrs: {
        "label": min,
        "disabled": !_vm.editable
      }
    }, [_vm._v(_vm._s(min) + "分")])
  }), 1)], 1), _vm._v(" "), _c('li', [_vm._v("\n              禁止员工补约\n              "), _c('input-int', {
    attrs: {
      "min": 0,
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.bookingPrePlLimitHours),
      callback: function($$v) {
        _vm.bookingPrePlLimitHours = _vm._n($$v)
      },
      expression: "bookingPrePlLimitHours"
    }
  }), _vm._v(" 小时之前的私教课\n              "), (_vm.editable) ? _c('span', {
    staticClass: "tips"
  }, [_vm._v("（不填则表示不限制）")]) : _vm._e(), _vm._v(" "), _c('help', [_vm._v("\n                例如，当前时间是【2020-8-4 18:00:00】，此处设置的是【3】小时，如果补约 【2020-8-4 14:59:00】的课，系统将禁止并提示。\n              ")])], 1), _vm._v(" "), _c('li', [_vm._v("\n              教练每节课开始时间与上节课结束时间至少间隔\n              "), _c('input-int', {
    attrs: {
      "min": 0,
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.plTimeInterval),
      callback: function($$v) {
        _vm.plTimeInterval = _vm._n($$v)
      },
      expression: "plTimeInterval"
    }
  }), _vm._v("\n              分钟\n              "), _c('help', [_vm._v("\n                此间隔时间通常用于同一教练两节课之间的休息。设置该间隔时间后，预约私教课时系统会自动检查。\n                "), _c('p'), _vm._v("\n                例如，此间隔时间设置为15分钟，某教练在【17:00 ~ 18:00】有课，下一节课的预约上课时间必须在【18:15】或之后。\n              ")])], 1), _vm._v(" "), _c('li', [_vm._v("\n              会员最多能取消：\n              "), _c('input-int', {
    attrs: {
      "min": 1,
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.plMaxCancelBookingsPerDay),
      callback: function($$v) {
        _vm.plMaxCancelBookingsPerDay = _vm._n($$v)
      },
      expression: "plMaxCancelBookingsPerDay"
    }
  }), _vm._v(" 节课 / 天 ，\n              "), _c('input-int', {
    attrs: {
      "min": 1,
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.plMaxCancelBookingsPerWeek),
      callback: function($$v) {
        _vm.plMaxCancelBookingsPerWeek = _vm._n($$v)
      },
      expression: "plMaxCancelBookingsPerWeek"
    }
  }), _vm._v(" 节课 / 周\n              "), _c('input-int', {
    attrs: {
      "min": 1,
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.plMaxCancelBookingsPerMonth),
      callback: function($$v) {
        _vm.plMaxCancelBookingsPerMonth = _vm._n($$v)
      },
      expression: "plMaxCancelBookingsPerMonth"
    }
  }), _vm._v(" 节课 / 月\n              "), (_vm.editable) ? _c('span', {
    staticClass: "tips"
  }, [_vm._v("（不填则表示不限制）")]) : _vm._e()], 1)])]), _vm._v(" "), (_vm.g.data.shop.hasPrivateCourse) ? _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("通知设置")])]), _vm._v(" "), _c('ol', [_c('li', [_c('span', {
    staticClass: "tit"
  }, [_vm._v("会员预约私教课后，是否给教练发通知：")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(72, _vm.memberBookingPcSmsNotice)
      }
    },
    model: {
      value: (_vm.memberBookingPcSmsNotice),
      callback: function($$v) {
        _vm.memberBookingPcSmsNotice = $$v
      },
      expression: "memberBookingPcSmsNotice"
    }
  }, [_vm._v("短信通知")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(78, _vm.memberBookingPcWxNotice)
      }
    },
    model: {
      value: (_vm.memberBookingPcWxNotice),
      callback: function($$v) {
        _vm.memberBookingPcWxNotice = $$v
      },
      expression: "memberBookingPcWxNotice"
    }
  }, [_vm._v("微信通知")])], 1), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "tit"
  }, [_vm._v("员工代会员预约私教课后，是否给会员发通知：")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(73, _vm.coachBookingPcSmsNotice)
      }
    },
    model: {
      value: (_vm.coachBookingPcSmsNotice),
      callback: function($$v) {
        _vm.coachBookingPcSmsNotice = $$v
      },
      expression: "coachBookingPcSmsNotice"
    }
  }, [_vm._v("短信通知")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(79, _vm.coachBookingPcWxNotice)
      }
    },
    model: {
      value: (_vm.coachBookingPcWxNotice),
      callback: function($$v) {
        _vm.coachBookingPcWxNotice = $$v
      },
      expression: "coachBookingPcWxNotice"
    }
  }, [_vm._v("微信通知")])], 1), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "tit"
  }, [_vm._v("会员取消预约私教课后，是否给教练发通知：")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(74, _vm.memberCancelPcSmsNotice)
      }
    },
    model: {
      value: (_vm.memberCancelPcSmsNotice),
      callback: function($$v) {
        _vm.memberCancelPcSmsNotice = $$v
      },
      expression: "memberCancelPcSmsNotice"
    }
  }, [_vm._v("短信通知")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(80, _vm.memberCancelPcWxNotice)
      }
    },
    model: {
      value: (_vm.memberCancelPcWxNotice),
      callback: function($$v) {
        _vm.memberCancelPcWxNotice = $$v
      },
      expression: "memberCancelPcWxNotice"
    }
  }, [_vm._v("微信通知")])], 1), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "tit"
  }, [_vm._v("员工代取消私教课后，是否给会员发通知：")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(75, _vm.coachCancelPcSmsNotice)
      }
    },
    model: {
      value: (_vm.coachCancelPcSmsNotice),
      callback: function($$v) {
        _vm.coachCancelPcSmsNotice = $$v
      },
      expression: "coachCancelPcSmsNotice"
    }
  }, [_vm._v("短信通知")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(81, _vm.coachCancelPcWxNotice)
      }
    },
    model: {
      value: (_vm.coachCancelPcWxNotice),
      callback: function($$v) {
        _vm.coachCancelPcWxNotice = $$v
      },
      expression: "coachCancelPcWxNotice"
    }
  }, [_vm._v("微信通知")])], 1), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "tit"
  }, [_vm._v("员工代取消私教课后，是否给教练发通知：")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(96, _vm.staffCancelPcSmsNoticeToCoach)
      }
    },
    model: {
      value: (_vm.staffCancelPcSmsNoticeToCoach),
      callback: function($$v) {
        _vm.staffCancelPcSmsNoticeToCoach = $$v
      },
      expression: "staffCancelPcSmsNoticeToCoach"
    }
  }, [_vm._v("短信通知")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(97, _vm.staffCancelPcWxNoticeToCoach)
      }
    },
    model: {
      value: (_vm.staffCancelPcWxNoticeToCoach),
      callback: function($$v) {
        _vm.staffCancelPcWxNoticeToCoach = $$v
      },
      expression: "staffCancelPcWxNoticeToCoach"
    }
  }, [_vm._v("微信通知")])], 1), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "tit"
  }, [_vm._v("会员修改私教课时间后，是否给教练发通知：")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(83, _vm.memberAltPlSmsNotice)
      }
    },
    model: {
      value: (_vm.memberAltPlSmsNotice),
      callback: function($$v) {
        _vm.memberAltPlSmsNotice = $$v
      },
      expression: "memberAltPlSmsNotice"
    }
  }, [_vm._v("短信通知")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(84, _vm.memberAltPlWxNotice)
      }
    },
    model: {
      value: (_vm.memberAltPlWxNotice),
      callback: function($$v) {
        _vm.memberAltPlWxNotice = $$v
      },
      expression: "memberAltPlWxNotice"
    }
  }, [_vm._v("微信通知")])], 1), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "tit"
  }, [_vm._v("教练修改私教课时间后，是否给会员发通知：")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(85, _vm.coachAltPlSmsNotice)
      }
    },
    model: {
      value: (_vm.coachAltPlSmsNotice),
      callback: function($$v) {
        _vm.coachAltPlSmsNotice = $$v
      },
      expression: "coachAltPlSmsNotice"
    }
  }, [_vm._v("短信通知")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(86, _vm.coachAltPlWxNotice)
      }
    },
    model: {
      value: (_vm.coachAltPlWxNotice),
      callback: function($$v) {
        _vm.coachAltPlWxNotice = $$v
      },
      expression: "coachAltPlWxNotice"
    }
  }, [_vm._v("微信通知")])], 1), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "tit"
  }, [_vm._v("上课前是否给会员发通知：")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(107, _vm.plStartSmsNoticeToMember)
      }
    },
    model: {
      value: (_vm.plStartSmsNoticeToMember),
      callback: function($$v) {
        _vm.plStartSmsNoticeToMember = $$v
      },
      expression: "plStartSmsNoticeToMember"
    }
  }, [_vm._v("短信通知")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(108, _vm.plStartWxNoticeToMember)
      }
    },
    model: {
      value: (_vm.plStartWxNoticeToMember),
      callback: function($$v) {
        _vm.plStartWxNoticeToMember = $$v
      },
      expression: "plStartWxNoticeToMember"
    }
  }, [_vm._v("微信通知")]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（上课前发通知）")])], 1), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "tit"
  }, [_vm._v("上课前是否给教练发通知：")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(110, _vm.plStartSmsNoticeToCoach)
      }
    },
    model: {
      value: (_vm.plStartSmsNoticeToCoach),
      callback: function($$v) {
        _vm.plStartSmsNoticeToCoach = $$v
      },
      expression: "plStartSmsNoticeToCoach"
    }
  }, [_vm._v("短信通知")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(111, _vm.plStartWxNoticeToCoach)
      }
    },
    model: {
      value: (_vm.plStartWxNoticeToCoach),
      callback: function($$v) {
        _vm.plStartWxNoticeToCoach = $$v
      },
      expression: "plStartWxNoticeToCoach"
    }
  }, [_vm._v("微信通知")]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（上课前发通知）")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "remark"
  }, [_c('b', [_vm._v("备注：")]), _vm._v(" 设置微信通知后，接收者需关注系统公众号“健总管”或场馆授权公众号，并且通过公众号至少登录过一次系统；否则收不到微信通知。\n          ")])]) : _vm._e(), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("私教预约前阅读设置")])]), _vm._v(" "), _c('checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.plBookingTipsConf.enable),
      callback: function($$v) {
        _vm.$set(_vm.plBookingTipsConf, "enable", $$v)
      },
      expression: "plBookingTipsConf.enable"
    }
  }, [_vm._v("会员在手机版预约私教课时，可强制会员阅读指定文字后才允许提交")]), _vm._v(" "), (_vm.plBookingTipsConf.enable) ? _c('div', {
    staticClass: "tblform plbooking-tips"
  }, [_c('table', {
    attrs: {
      "width": "700"
    }
  }, [_c('tr', [_c('th', [_vm._v("阅读时间：")]), _vm._v(" "), _c('td', [_c('input-int', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.plBookingTipsConf.startTime),
      callback: function($$v) {
        _vm.$set(_vm.plBookingTipsConf, "startTime", $$v)
      },
      expression: "plBookingTipsConf.startTime"
    }
  }), _vm._v(" 秒 ~\n                  "), _c('input-int', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.plBookingTipsConf.endTime),
      callback: function($$v) {
        _vm.$set(_vm.plBookingTipsConf, "endTime", $$v)
      },
      expression: "plBookingTipsConf.endTime"
    }
  }), _vm._v(" 秒\n                  "), _c('span', {
    staticClass: "orangered"
  }, [_vm._v("（系统会在这两个时间内随机选择一个会员阅读的时间）")])], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("阅读文字：")]), _vm._v(" "), _c('td', [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 5,
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.plBookingTipsConf.content),
      callback: function($$v) {
        _vm.$set(_vm.plBookingTipsConf, "content", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "plBookingTipsConf.content"
    }
  })], 1)])])]) : _vm._e(), _vm._v(" "), (_vm.editable) ? _c('div', {
    staticClass: "form-submit"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.savePlBookingTipsConf
    }
  }, [_vm._v("保存")])], 1) : _vm._e()], 1)]) : _vm._e(), _vm._v(" "), (_vm.g.data.shop.hasPrivateCourse) ? _c('TabPane', {
    attrs: {
      "label": "私教课签到设置",
      "name": "plCheckinConf"
    }
  }, [(_vm.selectTab === 'plCheckinConf') ? [_c('pl-checkin-conf')] : _vm._e()], 2) : _vm._e(), _vm._v(" "), (_vm.g.data.shop.hasGroupCourse) ? _c('TabPane', {
    attrs: {
      "label": "团课预约设置",
      "name": "glBookingConf"
    }
  }, [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("参数设置")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [(_vm.editable) ? _c('div', {
    staticClass: "submit"
  }, [_c('i-button', {
    staticClass: "submit-btn",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.submit(2)
      }
    }
  }, [_vm._v("保存")])], 1) : _vm._e()])]), _vm._v(" "), _c('ol', [_c('li', [_c('div', {
    staticStyle: {
      "padding-bottom": "15px"
    }
  }, [_vm._v("预约开放选择：")]), _vm._v(" "), _c('RadioGroup', {
    attrs: {
      "vertical": ""
    },
    model: {
      value: (_vm.shopParam.bookingGlType),
      callback: function($$v) {
        _vm.$set(_vm.shopParam, "bookingGlType", $$v)
      },
      expression: "shopParam.bookingGlType"
    }
  }, [_c('Radio', {
    staticClass: "normal",
    attrs: {
      "disabled": !_vm.editable,
      "label": 0
    }
  }, [_vm._v("\n                  会员只能在上课前\n                  "), _c('input-int', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.shopParam.bookingGlMaxTime),
      callback: function($$v) {
        _vm.$set(_vm.shopParam, "bookingGlMaxTime", _vm._n($$v))
      },
      expression: "shopParam.bookingGlMaxTime"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "red"
  }, [_vm._v("小时")]), _vm._v("之内预约团课\n                  "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("  |  ")]), _vm._v("\n                  员工只能在上课前\n                  "), _c('input-int', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.staffBookingGlMaxHours),
      callback: function($$v) {
        _vm.staffBookingGlMaxHours = _vm._n($$v)
      },
      expression: "staffBookingGlMaxHours"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "red"
  }, [_vm._v("小时")]), _vm._v("之内代预约团课\n                ")], 1), _vm._v(" "), _c('Radio', {
    staticClass: "normal",
    staticStyle: {
      "margin": "10px 0 5px 0"
    },
    attrs: {
      "disabled": !_vm.editable,
      "label": 1
    }
  }, [_vm._v("\n                  只能在上课当天\n                  "), _c('TimePicker', {
    staticStyle: {
      "width": "95px",
      "display": "inline-block"
    },
    attrs: {
      "disabled": !_vm.editable,
      "format": "HH:mm",
      "size": "small"
    },
    model: {
      value: (_vm.bookingGlStartTime),
      callback: function($$v) {
        _vm.bookingGlStartTime = $$v
      },
      expression: "bookingGlStartTime"
    }
  }), _vm._v("\n                  开始预约团课\n                ")], 1)], 1)], 1), _vm._v(" "), _c('li', [_vm._v("\n              上课前\n              "), _c('input-int', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.shopParam.bookingGlMinTime),
      callback: function($$v) {
        _vm.$set(_vm.shopParam, "bookingGlMinTime", _vm._n($$v))
      },
      expression: "shopParam.bookingGlMinTime"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "orangered"
  }, [_vm._v("分钟")]), _vm._v(" 之内不能预约团课\n            ")], 1), _vm._v(" "), _c('li', [_vm._v("\n              上课前\n              "), _c('input-int', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.shopParam.cancelGlTime),
      callback: function($$v) {
        _vm.$set(_vm.shopParam, "cancelGlTime", _vm._n($$v))
      },
      expression: "shopParam.cancelGlTime"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "orangered"
  }, [_vm._v("分钟")]), _vm._v(" 之内不能取消团课预约\n              "), _c('help', [_vm._v("\n                店长取消不受此限制，其余角色都受此限制\n              ")])], 1), _vm._v(" "), _c('li', [_vm._v("\n              团课上课前\n              "), _c('input-int', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.shopParam.checkinGlMaxTime),
      callback: function($$v) {
        _vm.$set(_vm.shopParam, "checkinGlMaxTime", _vm._n($$v))
      },
      expression: "shopParam.checkinGlMaxTime"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "orangered"
  }, [_vm._v("分钟")]), _vm._v("\n                ~  \n              上课后\n              "), _c('input-int', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.glCheckinTimeConfAfterBeginTime),
      callback: function($$v) {
        _vm.glCheckinTimeConfAfterBeginTime = _vm._n($$v)
      },
      expression: "glCheckinTimeConfAfterBeginTime"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "orangered"
  }, [_vm._v("分钟")]), _vm._v("\n              才可签到\n              "), _c('help', [_vm._v("\n                例如，设置了上课前60分钟 ~ 上课后90分钟，如果某节课上课时间（即上课开始时间）是15:00，那么会员只能在【14:00 ~ 16:30】签到\n              ")])], 1), _vm._v(" "), _c('li', [_vm._v("\n              团课上课前\n              "), _c('input-num', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "blur": function($event) {
        return _vm.checkGlNoticeHour(0)
      }
    },
    model: {
      value: (_vm.glNoticeHours[0]),
      callback: function($$v) {
        _vm.$set(_vm.glNoticeHours, 0, _vm._n($$v))
      },
      expression: "glNoticeHours[0]"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "red"
  }, [_vm._v("小时")]), _vm._v("、\n              "), _c('input-num', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "blur": function($event) {
        return _vm.checkGlNoticeHour(1)
      }
    },
    model: {
      value: (_vm.glNoticeHours[1]),
      callback: function($$v) {
        _vm.$set(_vm.glNoticeHours, 1, _vm._n($$v))
      },
      expression: "glNoticeHours[1]"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "red"
  }, [_vm._v("小时")]), _vm._v("\n              发（上课或取消）通知给会员和教练\n               \n              "), _c('help', [_vm._v("\n                最多可设置两个通知提醒时间，可支持半小时（例如：0.5，1.5 等）\n                "), _c('p'), _vm._v("\n                此时间建议小于或等于上面【2. 不能预约】和【3. 不能取消】的时间，否则，发送上课通知后，如果再有取消约课，达到本节课最少预约人数后，将会被系统自动取消。\n              ")])], 1), _vm._v(" "), _c('li', [(_vm.editable) ? _c('checkbox', {
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(124, _vm.forbidBookingWhenSendCancelGlNotice)
      }
    },
    model: {
      value: (_vm.forbidBookingWhenSendCancelGlNotice),
      callback: function($$v) {
        _vm.forbidBookingWhenSendCancelGlNotice = $$v
      },
      expression: "forbidBookingWhenSendCancelGlNotice"
    }
  }, [_vm._v("发送上课取消通知后禁止预约")]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("( 如果不勾选，系统发送取消通知后能否继续预约仅与上述第2条设置有关）")])], 1), _vm._v(" "), _c('li', [_vm._v("\n              会员违约后\n              "), _c('input-int', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.shopParam.bcGlTime),
      callback: function($$v) {
        _vm.$set(_vm.shopParam, "bcGlTime", _vm._n($$v))
      },
      expression: "shopParam.bcGlTime"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "orangered"
  }, [_vm._v("小时")]), _vm._v("之内不能预约团课\n              "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（违约是指，会员预约了课，但是直到上课结束后还未签到）")])], 1), _vm._v(" "), _c('li', [_vm._v("\n              会员最多能预约：\n              "), _c('input-int', {
    attrs: {
      "min": 1,
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.glMaxBookingsPerDay),
      callback: function($$v) {
        _vm.glMaxBookingsPerDay = _vm._n($$v)
      },
      expression: "glMaxBookingsPerDay"
    }
  }), _vm._v(" 节课 / 天 ，\n              "), (_vm.editable) ? _c('input-int', {
    attrs: {
      "min": 1
    },
    model: {
      value: (_vm.glMaxBookingsPerWeek),
      callback: function($$v) {
        _vm.glMaxBookingsPerWeek = _vm._n($$v)
      },
      expression: "glMaxBookingsPerWeek"
    }
  }) : _c('b', [_vm._v(_vm._s(_vm.glMaxBookingsPerWeek ? _vm.glMaxBookingsPerWeek : '若干'))]), _vm._v(" 节课 / 周\n              "), (_vm.editable) ? _c('span', {
    staticClass: "tips"
  }, [_vm._v("（不填则表示不限制）")]) : _vm._e()], 1), _vm._v(" "), _c('li', [_vm._v("\n              允许会员手机端上团课详情页显示： \n              "), _c('checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(2014, _vm.displayBookingInMobileGlInfoPage)
      }
    },
    model: {
      value: (_vm.displayBookingInMobileGlInfoPage),
      callback: function($$v) {
        _vm.displayBookingInMobileGlInfoPage = $$v
      },
      expression: "displayBookingInMobileGlInfoPage"
    }
  }, [_vm._v("\n                预约上课人员信息\n              ")]), _vm._v("\n               \n              "), _c('checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(2019, _vm.displayCardConfInMobileGlInfoPage)
      }
    },
    model: {
      value: (_vm.displayCardConfInMobileGlInfoPage),
      callback: function($$v) {
        _vm.displayCardConfInMobileGlInfoPage = $$v
      },
      expression: "displayCardConfInMobileGlInfoPage"
    }
  }, [_vm._v("\n                适用会员卡信息\n              ")])], 1), _vm._v(" "), _c('li', [_c('checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(125, _vm.hideGlBookingCountInMobile)
      }
    },
    model: {
      value: (_vm.hideGlBookingCountInMobile),
      callback: function($$v) {
        _vm.hideGlBookingCountInMobile = $$v
      },
      expression: "hideGlBookingCountInMobile"
    }
  }, [_vm._v("隐藏会员预约课表中的预约人数信息")])], 1), _vm._v(" "), _c('li', [_c('checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(114, _vm.enableGlBookingOnce)
      }
    },
    model: {
      value: (_vm.enableGlBookingOnce),
      callback: function($$v) {
        _vm.enableGlBookingOnce = $$v
      },
      expression: "enableGlBookingOnce"
    }
  }, [_vm._v("\n                预约的团课签到后才能继续预约\n                "), _c('help', [_vm._v("\n                  如果勾选了此选项后，表示会员只有将预约的课（当日及以后的课）签到后，才能继续预约。\n                  "), _c('p'), _vm._v("\n                  例如：当日是2020-4-26，会员预约了2020-4-27的课（尚未签到），如果再去预约其他课，系统会提示并阻止预约。\n                ")])], 1)], 1), _vm._v(" "), _c('li', [_c('checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.shopParam.enableAutoGlBlacklist),
      callback: function($$v) {
        _vm.$set(_vm.shopParam, "enableAutoGlBlacklist", $$v)
      },
      expression: "shopParam.enableAutoGlBlacklist"
    }
  }, [_vm._v("启用自动进入预约黑名单")]), _vm._v(" "), (_vm.shopParam.enableAutoGlBlacklist) ? _c('span', [_vm._v("\n                ： \n                在最近\n                "), _c('input-int', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.shopParam.autoGlBlacklistStatDays),
      callback: function($$v) {
        _vm.$set(_vm.shopParam, "autoGlBlacklistStatDays", _vm._n($$v))
      },
      expression: "shopParam.autoGlBlacklistStatDays"
    }
  }), _vm._v("\n                天内，违约次数达到\n                "), _c('input-int', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.shopParam.autoGlBlacklistViolateCnt),
      callback: function($$v) {
        _vm.$set(_vm.shopParam, "autoGlBlacklistViolateCnt", _vm._n($$v))
      },
      expression: "shopParam.autoGlBlacklistViolateCnt"
    }
  }), _vm._v("\n                次后，则禁止约课\n                "), _c('input-int', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.shopParam.autoGlBlacklistPunitiveDays),
      callback: function($$v) {
        _vm.$set(_vm.shopParam, "autoGlBlacklistPunitiveDays", _vm._n($$v))
      },
      expression: "shopParam.autoGlBlacklistPunitiveDays"
    }
  }), _vm._v(" 天\n                "), _c('help', [_vm._v("\n                  符合该条件的会员，将自动进入“团课预约黑名单”。\n                  "), _c('p', [_vm._v("备注：该规则设置后，每天凌晨自动生效。")])])], 1) : _vm._e()], 1), _vm._v(" "), (_vm.enableGlCheckout) ? _c('li', [_c('checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.glDurationLimitConfs[0]),
      callback: function($$v) {
        _vm.$set(_vm.glDurationLimitConfs, 0, $$v)
      },
      expression: "glDurationLimitConfs[0]"
    }
  }, [_vm._v("启用团课签出时长黑名单")]), _vm._v(" "), (_vm.glDurationLimitConfs[0]) ? _c('span', [_vm._v("\n                ： \n                在最近\n                "), _c('input-int', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.glDurationLimitConfs[1]),
      callback: function($$v) {
        _vm.$set(_vm.glDurationLimitConfs, 1, _vm._n($$v))
      },
      expression: "glDurationLimitConfs[1]"
    }
  }), _vm._v("\n                天内，团课签出有\n                "), _c('input-int', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.glDurationLimitConfs[2]),
      callback: function($$v) {
        _vm.$set(_vm.glDurationLimitConfs, 2, _vm._n($$v))
      },
      expression: "glDurationLimitConfs[2]"
    }
  }), _vm._v("\n                次超过上课结束后\n                "), _c('input-int', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.glDurationLimitConfs[3]),
      callback: function($$v) {
        _vm.$set(_vm.glDurationLimitConfs, 3, _vm._n($$v))
      },
      expression: "glDurationLimitConfs[3]"
    }
  }), _vm._v("\n                分钟，则禁止约课\n                "), _c('input-int', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.glDurationLimitConfs[4]),
      callback: function($$v) {
        _vm.$set(_vm.glDurationLimitConfs, 4, _vm._n($$v))
      },
      expression: "glDurationLimitConfs[4]"
    }
  }), _vm._v(" 天\n                "), _c('help', [_vm._v("\n                  符合该条件的会员，将自动进入“团课预约黑名单”。\n                  "), _c('p', [_vm._v("备注：该规则设置后，每天凌晨自动生效。")])])], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c('li', [_c('checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(139, _vm.enableMemberGlTimeCheck)
      }
    },
    model: {
      value: (_vm.enableMemberGlTimeCheck),
      callback: function($$v) {
        _vm.enableMemberGlTimeCheck = $$v
      },
      expression: "enableMemberGlTimeCheck"
    }
  }, [_vm._v("\n                约课时检查会员团课时间是否存在冲突\n                "), _c('help', [_vm._v("\n                  如果启用了，在每次约课时，系统将检查预约团课的时间与该会员其它团课时间是否存在冲突，如果存在，该节课将无法预约。\n                ")])], 1)], 1), _vm._v(" "), _c('li', [_c('checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(142, _vm.glActivateMcWhenCheckin)
      }
    },
    model: {
      value: (_vm.glActivateMcWhenCheckin),
      callback: function($$v) {
        _vm.glActivateMcWhenCheckin = $$v
      },
      expression: "glActivateMcWhenCheckin"
    }
  }, [_vm._v("\n                对于未开卡的会员卡，团课签到时再开卡 "), _c('span', {
    staticClass: "orange"
  }, [_vm._v("（如果不勾选，则默认团课预约时即开卡）")])])], 1)])]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("通知设置")])]), _vm._v(" "), _c('ol', [_c('li', [_c('span', {
    staticClass: "tit"
  }, [_vm._v("会员预约团课后，是否给教练发通知：")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(76, _vm.memberBookingGcSmsNotice)
      }
    },
    model: {
      value: (_vm.memberBookingGcSmsNotice),
      callback: function($$v) {
        _vm.memberBookingGcSmsNotice = $$v
      },
      expression: "memberBookingGcSmsNotice"
    }
  }, [_vm._v("短信通知")])], 1), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "tit"
  }, [_vm._v("会员取消团课后，是否给教练发通知：")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(77, _vm.memberCancelGcSmsNotice)
      }
    },
    model: {
      value: (_vm.memberCancelGcSmsNotice),
      callback: function($$v) {
        _vm.memberCancelGcSmsNotice = $$v
      },
      expression: "memberCancelGcSmsNotice"
    }
  }, [_vm._v("短信通知")])], 1), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "tit"
  }, [_vm._v("团课上课前，是否给会员发通知：")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(87, _vm.glStartSmsNoticeToMember)
      }
    },
    model: {
      value: (_vm.glStartSmsNoticeToMember),
      callback: function($$v) {
        _vm.glStartSmsNoticeToMember = $$v
      },
      expression: "glStartSmsNoticeToMember"
    }
  }, [_vm._v("短信通知")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "value": true,
      "disabled": true
    }
  }, [_vm._v("微信通知")]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（上课前发通知，包括预约会员和固定班级学员）")])], 1), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "tit"
  }, [_vm._v("团课上课前，是否给教练发通知：")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(88, _vm.glStartSmsNoticeToCoach)
      }
    },
    model: {
      value: (_vm.glStartSmsNoticeToCoach),
      callback: function($$v) {
        _vm.glStartSmsNoticeToCoach = $$v
      },
      expression: "glStartSmsNoticeToCoach"
    }
  }, [_vm._v("短信通知")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "value": true,
      "disabled": true
    }
  }, [_vm._v("微信通知")]), _vm._v(" "), _c('span', {
    staticStyle: {
      "margin-left": "20px"
    }
  }, [_c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable,
      "value": true
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(95, _vm.glNoBookingNoClassNoticeEnable)
      }
    },
    model: {
      value: (_vm.glNoBookingNoClassNoticeEnable),
      callback: function($$v) {
        _vm.glNoBookingNoClassNoticeEnable = $$v
      },
      expression: "glNoBookingNoClassNoticeEnable"
    }
  }, [_vm._v("\n                  无人预约的非固定班级课是否发送")])], 1), _vm._v(" "), _c('help', [_vm._v("\n                当某节课没有会员预约，并且也不是固定班级课，是否在上课前给教练发送通知。\n              ")])], 1), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "tit"
  }, [_vm._v("团课上课前，是否给助教发通知：")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(116, _vm.glStartSmsNoticeToViceCoach)
      }
    },
    model: {
      value: (_vm.glStartSmsNoticeToViceCoach),
      callback: function($$v) {
        _vm.glStartSmsNoticeToViceCoach = $$v
      },
      expression: "glStartSmsNoticeToViceCoach"
    }
  }, [_vm._v("短信通知")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(117, _vm.glStartWxNoticeToViceCoach)
      }
    },
    model: {
      value: (_vm.glStartWxNoticeToViceCoach),
      callback: function($$v) {
        _vm.glStartWxNoticeToViceCoach = $$v
      },
      expression: "glStartWxNoticeToViceCoach"
    }
  }, [_vm._v("微信通知")])], 1), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "tit"
  }, [_vm._v("团课自动取消前，是否给会员发通知：")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(89, _vm.glCancelSmsNoticeToMember)
      }
    },
    model: {
      value: (_vm.glCancelSmsNoticeToMember),
      callback: function($$v) {
        _vm.glCancelSmsNoticeToMember = $$v
      },
      expression: "glCancelSmsNoticeToMember"
    }
  }, [_vm._v("短信通知")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "value": true,
      "disabled": true
    }
  }, [_vm._v("微信通知")]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（上课前发通知）")])], 1), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "tit"
  }, [_vm._v("团课自动取消时，是否给会员发通知：")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(90, _vm.glCancelledSmsNoticeToMember)
      }
    },
    model: {
      value: (_vm.glCancelledSmsNoticeToMember),
      callback: function($$v) {
        _vm.glCancelledSmsNoticeToMember = $$v
      },
      expression: "glCancelledSmsNoticeToMember"
    }
  }, [_vm._v("短信通知")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "value": true,
      "disabled": true
    }
  }, [_vm._v("微信通知")]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（上课时间到达后发通知）")])], 1), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "tit"
  }, [_vm._v("团课自动取消前，是否给教练发通知：")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(91, _vm.glCancelSmsNoticeToCoach)
      }
    },
    model: {
      value: (_vm.glCancelSmsNoticeToCoach),
      callback: function($$v) {
        _vm.glCancelSmsNoticeToCoach = $$v
      },
      expression: "glCancelSmsNoticeToCoach"
    }
  }, [_vm._v("短信通知")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "value": true,
      "disabled": true
    }
  }, [_vm._v("微信通知")]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（上课前发通知）")])], 1), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "tit"
  }, [_vm._v("团课预约取消后，是否给优先排队人员发通知：")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(94, _vm.mlQueueSmsNotice)
      }
    },
    model: {
      value: (_vm.mlQueueSmsNotice),
      callback: function($$v) {
        _vm.mlQueueSmsNotice = $$v
      },
      expression: "mlQueueSmsNotice"
    }
  }, [_vm._v("短信通知")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(98, _vm.mlQueueWxNotice)
      }
    },
    model: {
      value: (_vm.mlQueueWxNotice),
      callback: function($$v) {
        _vm.mlQueueWxNotice = $$v
      },
      expression: "mlQueueWxNotice"
    }
  }, [_vm._v("微信通知")])], 1), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "tit"
  }, [_vm._v("员工代会员预约团课后，是否给会员发通知：")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(118, _vm.glBookingSmsNoticeToMember)
      }
    },
    model: {
      value: (_vm.glBookingSmsNoticeToMember),
      callback: function($$v) {
        _vm.glBookingSmsNoticeToMember = $$v
      },
      expression: "glBookingSmsNoticeToMember"
    }
  }, [_vm._v("短信通知")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(119, _vm.glBookingWxNoticeToMember)
      }
    },
    model: {
      value: (_vm.glBookingWxNoticeToMember),
      callback: function($$v) {
        _vm.glBookingWxNoticeToMember = $$v
      },
      expression: "glBookingWxNoticeToMember"
    }
  }, [_vm._v("微信通知")])], 1), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "tit"
  }, [_vm._v("员工代会员签到团课后，是否给会员发通知：")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(120, _vm.glCheckinSmsNoticeToMember)
      }
    },
    model: {
      value: (_vm.glCheckinSmsNoticeToMember),
      callback: function($$v) {
        _vm.glCheckinSmsNoticeToMember = $$v
      },
      expression: "glCheckinSmsNoticeToMember"
    }
  }, [_vm._v("短信通知")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(121, _vm.glCheckinWxNoticeToMember)
      }
    },
    model: {
      value: (_vm.glCheckinWxNoticeToMember),
      callback: function($$v) {
        _vm.glCheckinWxNoticeToMember = $$v
      },
      expression: "glCheckinWxNoticeToMember"
    }
  }, [_vm._v("微信通知")])], 1), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "tit"
  }, [_vm._v("员工代会员取消预约后，是否给会员发通知：")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(140, _vm.glBookingCancelSmsNoticeToMember)
      }
    },
    model: {
      value: (_vm.glBookingCancelSmsNoticeToMember),
      callback: function($$v) {
        _vm.glBookingCancelSmsNoticeToMember = $$v
      },
      expression: "glBookingCancelSmsNoticeToMember"
    }
  }, [_vm._v("短信通知")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(141, _vm.glBookingCancelWxNoticeToMember)
      }
    },
    model: {
      value: (_vm.glBookingCancelWxNoticeToMember),
      callback: function($$v) {
        _vm.glBookingCancelWxNoticeToMember = $$v
      },
      expression: "glBookingCancelWxNoticeToMember"
    }
  }, [_vm._v("微信通知")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "remark"
  }, [_c('b', [_vm._v("备注：")]), _vm._v(" 设置微信通知后，接收者需关注系统公众号“健总管”或场馆授权公众号，并且通过公众号至少登录过一次系统；否则收不到微信通知。\n          ")])]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("团课预约前阅读设置")])]), _vm._v(" "), _c('div', {
    staticClass: "cont"
  }, [_c('div', {
    staticClass: "default-font"
  }, [_vm._v("请设置会员在提交团课预约时强制阅读的内容：")]), _vm._v(" "), _c('div', {
    staticClass: "mt15"
  }, [_c('i-input', {
    staticStyle: {
      "width": "650px"
    },
    attrs: {
      "type": "textarea",
      "rows": 6,
      "placeholder": "请输入少于500字的阅读内容（可换行）"
    },
    model: {
      value: (_vm.glBookingTips),
      callback: function($$v) {
        _vm.glBookingTips = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "glBookingTips"
    }
  })], 1)]), _vm._v(" "), (_vm.editable) ? _c('div', {
    staticClass: "p10"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.saveGlBookingTips()
      }
    }
  }, [_vm._v("确定")])], 1) : _vm._e()])]) : _vm._e(), _vm._v(" "), (_vm.g.data.shop.hasGroupCourse) ? _c('TabPane', {
    attrs: {
      "label": "团课预约黑名单",
      "name": "glBookingBlacklist"
    }
  }, [(_vm.selectTab === 'glBookingBlacklist') ? [_c('gl-booking-blacklist')] : _vm._e()], 2) : _vm._e()], 1)], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "图片",
      "width": "330",
      "styles": {
        top: 0
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.bookingGlImgView),
      callback: function($$v) {
        _vm.bookingGlImgView = $$v
      },
      expression: "bookingGlImgView"
    }
  }, [_c('img', {
    staticStyle: {
      "border": "1px solid #eee"
    },
    attrs: {
      "src": "http://jzongguan.com/imglib/booking-gl-bg-exam.png",
      "height": "500"
    }
  })])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2293:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "s"
  }, [_c('ul', {
    staticClass: "comments"
  }, _vm._l((_vm.commentList), function(c) {
    return _c('li', [_c('span', {
      staticClass: "mname"
    }, [_vm._v(_vm._s(c.memberName))]), _vm._v(" "), (c.coachCommentTime) ? _c('span', [_c('span', {
      staticClass: "spt"
    }, [_vm._v("/")]), _vm._v(" " + _vm._s(c.coachCommentTime))]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "cont"
    }, [_c('pre', [_vm._v(_vm._s(c.coachComment))])])])
  }), 0)])
},staticRenderFns: []}

/***/ }),

/***/ 2305:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "group-course-schedule"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', {
    staticClass: "query-section"
  }, [_c('ul', {
    staticClass: "query-cond-inline"
  }, [_c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "filterable": "",
      "placeholder": "请选择课程",
      "clearable": ""
    },
    model: {
      value: (_vm.query.courseId),
      callback: function($$v) {
        _vm.$set(_vm.query, "courseId", $$v)
      },
      expression: "query.courseId"
    }
  }, _vm._l((_vm.courseList), function(c) {
    return _c('i-option', {
      key: c.courseId,
      attrs: {
        "value": c.courseId
      }
    }, [_vm._v(_vm._s(c.courseName))])
  }), 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "filterable": "",
      "placeholder": "请选择教练",
      "clearable": ""
    },
    model: {
      value: (_vm.query.coachId),
      callback: function($$v) {
        _vm.$set(_vm.query, "coachId", $$v)
      },
      expression: "query.coachId"
    }
  }, _vm._l((_vm.coachList), function(c) {
    return _c('i-option', {
      key: c.staffId,
      attrs: {
        "value": c.staffId
      }
    }, [_vm._v(_vm._s(c.name))])
  }), 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-input', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "type": "text",
      "placeholder": "请选择固定班级会员",
      "readonly": true,
      "clearable": true
    },
    on: {
      "on-focus": _vm.openSelectMember
    },
    model: {
      value: (_vm.memberName),
      callback: function($$v) {
        _vm.memberName = $$v
      },
      expression: "memberName"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('date-picker', {
    staticClass: "-datepick",
    attrs: {
      "type": "date",
      "placeholder": "课程开始日期"
    },
    model: {
      value: (_vm.query.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.query, "beginDate", $$v)
      },
      expression: "query.beginDate"
    }
  }), _vm._v("\n\t\t\t\t\t\t~\n\t\t\t\t\t\t"), _c('date-picker', {
    staticClass: "-datepick",
    attrs: {
      "type": "date",
      "placeholder": "课程结束日期"
    },
    model: {
      value: (_vm.query.endDate),
      callback: function($$v) {
        _vm.$set(_vm.query, "endDate", $$v)
      },
      expression: "query.endDate"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "ios-search"
    },
    on: {
      "click": function($event) {
        return _vm.doQuery()
      }
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.resetQuery
    }
  }, [_vm._v("重置")])], 1)])]), _vm._v(" "), _c('section', [(_vm.courseEditable) ? _c('div', {
    staticClass: "tbl-header"
  }, [_c('div', {
    staticClass: "l"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": _vm.handleAddCourseSchedule
    }
  }, [_vm._v("添加排课")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.openCsCardAppendDlg
    }
  }, [_vm._v("批量添加上课计费卡")])], 1), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('checkbox', {
    on: {
      "on-change": function($event) {
        return _vm.doQuery()
      }
    },
    model: {
      value: (_vm.isDisabledCs),
      callback: function($$v) {
        _vm.isDisabledCs = $$v
      },
      expression: "isDisabledCs"
    }
  }, [_vm._v("查看隐藏排课")])], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_c('tr', [(_vm.courseEditable) ? _c('th', {
    staticClass: "ckbox",
    attrs: {
      "width": "40"
    },
    on: {
      "click": function($event) {
        return _vm.selectAll()
      }
    }
  }, [(_vm.isSelectAll) ? _c('i', {
    staticClass: "iconfont icon-checkbox-checked ckbox-1",
    staticStyle: {
      "font-weight": "normal"
    }
  }) : _c('i', {
    staticClass: "iconfont icon-checkbox-empty ckbox-0",
    staticStyle: {
      "font-weight": "normal"
    }
  })]) : _vm._e(), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("课程难度")]), _vm._v(" "), _c('th', [_vm._v("课程/排课名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("教练")]), _vm._v(" "), (_vm.g.data.user.isShopOwner) ? _c('th', {
    attrs: {
      "width": "82"
    }
  }, [_vm._v("教练课时费")]) : _vm._e(), _vm._v(" "), _c('th', {
    attrs: {
      "width": "215"
    }
  }, [_vm._v("课程日期")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("场地")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("是否预约")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("固定班级")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "125"
    }
  }, [_vm._v("最多/最少预约人数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("评价")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("操作")])]), _vm._v(" "), _vm._l((_vm.courseScheduleList), function(s, idx) {
    return _c('tr', {
      key: idx
    }, [(_vm.courseEditable) ? _c('td', {
      staticClass: "ckbox",
      on: {
        "click": function($event) {
          return _vm.selectPs(idx)
        }
      }
    }, [(!_vm.psCkList[idx]) ? _c('i', {
      staticClass: "iconfont icon-checkbox-empty ckbox-0"
    }) : _c('i', {
      staticClass: "iconfont icon-checkbox-checked ckbox-1"
    })]) : _vm._e(), _vm._v(" "), _c('td', [(s.lessonLevel) ? _c('span', {
      staticClass: "star"
    }, [_c('i', {
      class: 'big iconfont icon-star' + s.lessonLevel
    })]) : _vm._e()]), _vm._v(" "), _c('td', [_c('a', {
      staticClass: "block",
      attrs: {
        "href": '#/group-course-schedule-edit/' + s.csId
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(s.courseName) + "\n\t\t\t\t\t\t\t\t\t"), (s.csName) ? [_vm._v("/" + _vm._s(s.csName))] : _vm._e()], 2)]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.coachName))]), _vm._v(" "), (_vm.g.data.user.isShopOwner) ? _c('td', [(s.coachLessonFee) ? _c('span', [_vm._v("￥" + _vm._s(s.coachLessonFee))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.g.Util.formatDate(s.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(s.endDate)) + "\n\t\t\t\t\t\t\t\t"), (_vm.courseEditable) ? _c('a', {
      staticClass: "l5",
      attrs: {
        "title": "修改日期"
      },
      on: {
        "click": function($event) {
          return _vm.openUpdateCsDatesDlg(idx)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont icon-edit small gray"
    })]) : _vm._e(), _vm._v(" "), _c('a', {
      staticClass: "l5",
      attrs: {
        "title": "课程周期"
      },
      on: {
        "click": function($event) {
          return _vm.displayCsWeektimes(s)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont icon-kebiao small gray"
    })])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.groundName))]), _vm._v(" "), _c('td', [(s.isNeedBooking) ? [_vm._v("是")] : _c('span', {
      staticClass: "gray"
    }, [_vm._v("否")])], 2), _vm._v(" "), _c('td', [(s.isClass) ? [_vm._v("是")] : _c('span', {
      staticClass: "gray"
    }, [_vm._v("否")])], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.maxStudents) + " "), _c('span', {
      staticClass: "spt"
    }, [_vm._v("/")]), _vm._v(" " + _vm._s(s.minStudents))]), _vm._v(" "), _c('td', [(s.reviewCnt) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.openLessonReview(s.csId, s.courseName, s.coachName)
        }
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(s.reviewCnt) + "条\n\t\t\t\t\t\t\t\t")]) : _vm._e()]), _vm._v(" "), _c('td', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.$router.push('/group-course-schedule-edit/' + s.csId)
        }
      }
    }, [_vm._v("详情")]), _vm._v(" "), (_vm.courseEditable) ? [_c('span', {
      staticClass: "spt"
    }, [_vm._v("|")]), _vm._v(" "), _c('Dropdown', {
      attrs: {
        "placement": "bottom-end"
      }
    }, [_c('a', {
      attrs: {
        "href": "javascript:void(0)"
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t更多\n\t\t\t\t\t\t\t\t\t\t\t"), _c('Icon', {
      attrs: {
        "type": "ios-arrow-down"
      }
    })], 1), _vm._v(" "), _c('DropdownMenu', {
      attrs: {
        "slot": "list"
      },
      slot: "list"
    }, [_c('DropdownItem', [_c('div', {
      on: {
        "click": function($event) {
          return _vm.delCourseSchedule(idx)
        }
      }
    }, [_vm._v("删除")])]), _vm._v(" "), (!_vm.isDisabledCs) ? _c('DropdownItem', [_c('div', {
      on: {
        "click": function($event) {
          return _vm.updateCourseScheduleStatus(idx, 'S')
        }
      }
    }, [_vm._v("隐藏")])]) : _c('DropdownItem', [_c('div', {
      on: {
        "click": function($event) {
          return _vm.updateCourseScheduleStatus(idx, 'R')
        }
      }
    }, [_vm._v("恢复")])])], 1)], 1)] : _vm._e()], 2)])
  })], 2)]), _vm._v(" "), (_vm.totalCount && _vm.totalCount > _vm.g.Conf.PAGE_SIZE) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.totalCount,
      "page-size": _vm.g.Conf.PAGE_SIZE,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.doQuery
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "tbl-footer"
  }, [_c('div', {
    staticClass: "r"
  }, [_vm._v("共 " + _vm._s(_vm.courseScheduleList.length) + " 条记录")])])])]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": _vm.reviewDlgTitle,
      "width": "900",
      "ok-text": "关闭",
      "cancel-text": "",
      "styles": {
        top: '5px'
      }
    },
    model: {
      value: (_vm.reviewDlgView),
      callback: function($$v) {
        _vm.reviewDlgView = $$v
      },
      expression: "reviewDlgView"
    }
  }, [_c('lesson-review-list', {
    attrs: {
      "courseType": 1,
      "course-schedule-id": _vm.courseScheduleId
    }
  })], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员查询与选择",
      "width": "700",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.memberSelectDlgForQuery),
      callback: function($$v) {
        _vm.memberSelectDlgForQuery = $$v
      },
      expression: "memberSelectDlgForQuery"
    }
  }, [(_vm.memberSelectDlgForQuery) ? _c('member-select', {
    attrs: {
      "after-select": _vm.afterSelectMemberForQuery
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "批量添加上课计费卡到排课中",
      "width": "700",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.csCardAppendDlg),
      callback: function($$v) {
        _vm.csCardAppendDlg = $$v
      },
      expression: "csCardAppendDlg"
    }
  }, [(_vm.csCardAppendDlg) ? _c('div', {
    staticStyle: {
      "padding": "10px"
    }
  }, [_c('table', {
    staticClass: "tblform",
    attrs: {
      "width": "500"
    }
  }, [_c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("会员卡")]), _vm._v(" "), _c('td', [(_vm.cardList) ? _c('i-select', {
    attrs: {
      "filterable": ""
    },
    on: {
      "on-change": _vm.chooseCard
    },
    model: {
      value: (_vm.selectCardId),
      callback: function($$v) {
        _vm.selectCardId = $$v
      },
      expression: "selectCardId"
    }
  }, _vm._l((_vm.cardList), function(c) {
    return _c('i-option', {
      key: c.cardId,
      attrs: {
        "value": c.cardId,
        "label": c.cardName
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(c.cardName) + "\n\t\t\t\t\t\t\t\t\t"), _c('div', {
      staticClass: "r gray"
    }, [_vm._v(_vm._s(_vm.g.Dict.CardType[c.cardType]))])])
  }), 1) : _vm._e()], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("上课计费")]), _vm._v(" "), _c('td', [(!_vm.selectCard || (_vm.selectCard && _vm.selectCard.cardType > 1)) ? _c('input-num', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "min": 0
    },
    model: {
      value: (_vm.selectCardPayment),
      callback: function($$v) {
        _vm.selectCardPayment = _vm._n($$v)
      },
      expression: "selectCardPayment"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.selectCard && _vm.selectCard.cardType === 1) ? _c('span', {
    staticClass: "orangered"
  }, [_vm._v("( 期限卡不计费 )")]) : _vm._e(), _vm._v(" "), (_vm.selectCard && _vm.selectCard.cardType > 1) ? [_vm._v("   " + _vm._s(_vm.g.Dict.CardUnitName[_vm.selectCard.cardType]))] : _vm._e()], 2)]), _vm._v(" "), _c('tr', [_c('th'), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "p10"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submitAppendCardPaymentToCsList
    }
  }, [_vm._v("提交")])], 1)])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "课程排课周期",
      "width": "600",
      "ok-text": "关闭",
      "cancel-text": "",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.csWeektimesConfDlg),
      callback: function($$v) {
        _vm.csWeektimesConfDlg = $$v
      },
      expression: "csWeektimesConfDlg"
    }
  }, [(_vm.csWeektimesConfDlg && _vm.selectCs) ? [_c('ul', {
    staticClass: "weektimes"
  }, [(_vm.selectCs.excludeDates) ? _c('li', [_c('b', [_vm._v("排除日期：")]), _vm._v(" "), _vm._l((_vm.selectCs.excludeDates.split(',')), function(d) {
    return _c('span', [_vm._v(_vm._s(d))])
  })], 2) : _vm._e(), _vm._v(" "), _vm._l(([_vm.selectCs.week1Times, _vm.selectCs.week2Times, _vm.selectCs.week3Times, _vm.selectCs.week4Times, _vm.selectCs.week5Times, _vm.selectCs.week6Times, _vm.selectCs.week7Times]), function(w, idx) {
    return _c('li', [_c('b', [_vm._v(_vm._s(_vm.g.Dict.WeekName[(idx + 1) % 7]) + " ：")]), _vm._v(" "), (w) ? _vm._l((w.split(',')), function(item) {
      return _c('span', [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.g.Util.formatTime(item.split('-')[0])) + " ~ " + _vm._s(_vm.g.Util.formatTime(item.split('-')[1])) + "\n\t\t\t\t\t\t\t")])
    }) : _c('i', {
      staticClass: "gray"
    }, [_vm._v("无")])], 2)
  })], 2)] : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.csWeektimesConfDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 2), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": '修改课程日期：' + _vm.updateCsDatesDlgTit,
      "width": "550",
      "ok-text": "关闭",
      "cancel-text": "",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.updateCsDatesDlg),
      callback: function($$v) {
        _vm.updateCsDatesDlg = $$v
      },
      expression: "updateCsDatesDlg"
    }
  }, [_c('div', {
    staticClass: "warning"
  }, [_vm._v("\n\t\t\t\t备注：修改课程日期后，系统将会自动重新排课（已预约或签到的课不受影响）\n\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "center mt20"
  }, [_c('date-picker', {
    staticClass: "-input-s",
    attrs: {
      "type": "date",
      "placeholder": "开始日期"
    },
    model: {
      value: (_vm.selectCsDates[0]),
      callback: function($$v) {
        _vm.$set(_vm.selectCsDates, 0, $$v)
      },
      expression: "selectCsDates[0]"
    }
  }), _vm._v("\n\t\t\t\t~\n\t\t\t\t"), _c('date-picker', {
    staticClass: "-input-s",
    attrs: {
      "type": "date",
      "placeholder": "结束日期"
    },
    model: {
      value: (_vm.selectCsDates[1]),
      callback: function($$v) {
        _vm.$set(_vm.selectCsDates, 1, $$v)
      },
      expression: "selectCsDates[1]"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-submit center"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.updateCsDates
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.updateCsDatesDlg = false
      }
    }
  }, [_vm._v("关闭")]), _vm._v(" "), _c('a', {
    staticClass: "l10",
    on: {
      "click": function($event) {
        return _vm.$router.push('group-course-schedule-edit/' + _vm.selectCsId)
      }
    }
  }, [_vm._v("排课详情 →")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }), _vm._v(" "), _c('modal')], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2307:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "lesson-review"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), (_vm.g.data.user.isShopOwner) ? _c('section', {
    staticClass: "query-section"
  }, [_c('ul', {
    staticClass: "query-cond-inline"
  }, [(_vm.coachList && _vm.coachList.length) ? _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "120px"
    },
    attrs: {
      "placeholder": "选择教练"
    },
    model: {
      value: (_vm.query.coachId),
      callback: function($$v) {
        _vm.$set(_vm.query, "coachId", _vm._n($$v))
      },
      expression: "query.coachId"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("不限")])]), _vm._v(" "), _vm._l((_vm.coachList), function(s) {
    return _c('i-option', {
      key: s.staffId,
      attrs: {
        "value": s.staffId
      }
    }, [_vm._v(_vm._s(s.name))])
  })], 2)], 1) : _vm._e(), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('date-picker', {
    staticClass: "daterange",
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "options": _vm.dateOptions1,
      "placeholder": "请选择上课日期",
      "type": "daterange",
      "format": "yyyy-MM-dd",
      "placement": "bottom-start"
    },
    model: {
      value: (_vm.query.lessonDates),
      callback: function($$v) {
        _vm.$set(_vm.query, "lessonDates", $$v)
      },
      expression: "query.lessonDates"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.queryLessonWithReview(null)
      }
    }
  }, [_vm._v("查询")])], 1)])]) : _vm._e(), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.lessonList), function(l, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(l.lessonDate)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatTime(l.beginTime)) + " ~ " + _vm._s(_vm.g.Util.formatTime(l.endTime)) + " ")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.lessonTitle))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.coachName))]), _vm._v(" "), _c('td', [(l.isNeedBooking) ? _c('span', [_vm._v(_vm._s(l.bookings))]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.checkins))]), _vm._v(" "), _c('td', [_c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.openLessonReviewDlg(l.lessonId)
        }
      }
    }, [_vm._v(_vm._s(l.memberReviewCnt) + " ")])]), _vm._v(" "), _c('td', [(l.memberReviewCnt) ? [_vm._v(_vm._s(l.avgScore.toFixed(2)) + " 分")] : _vm._e()], 2)])
  })], 2), _vm._v(" "), (_vm.lessonCount === 0) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e(), _vm._v(" "), (_vm.lessonCount && _vm.lessonCount > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.lessonCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryLessonWithReview
    }
  })], 1) : _vm._e()])])], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员评价",
      "width": "850",
      "styles": {
        'top': 0
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.dlg.lessonReviewView),
      callback: function($$v) {
        _vm.$set(_vm.dlg, "lessonReviewView", $$v)
      },
      expression: "dlg.lessonReviewView"
    }
  }, [(_vm.dlg.lessonReviewView) ? [_c('lesson-review-list', {
    attrs: {
      "lesson-id": _vm.dlg.lessonId,
      "course-type": 1
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "right p15"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.dlg.lessonReviewView = false
      }
    }
  }, [_vm._v("关闭")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })] : _vm._e()], 2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("上课日期")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("上课时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "300"
    }
  }, [_vm._v("课程")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("上课教练")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("预约数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("签到数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("评价数")]), _vm._v(" "), _c('th', [_vm._v("平均得分")])])
}]}

/***/ }),

/***/ 2312:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "private-course"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', [(_vm.courseEditable) ? _c('div', {
    staticClass: "tbl-header"
  }, [_c('div', {
    staticClass: "l"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": _vm.handleAddCourse
    }
  }, [_vm._v("添加课程")])], 1), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('checkbox', {
    on: {
      "on-change": _vm.queryPrivateCourseList
    },
    model: {
      value: (_vm.isDisabledCourse),
      callback: function($$v) {
        _vm.isDisabledCourse = $$v
      },
      expression: "isDisabledCourse"
    }
  }, [_vm._v("查看停用课程")])], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.courseList), function(c, idx) {
    return _c('tr', [_c('td', [(_vm.courseEditable) ? _c('div', {
      on: {
        "click": function($event) {
          return _vm.updateOrderNo(c.courseId, c.courseName)
        }
      }
    }, [(!_vm.g.Util.isEmpty(c.orderNo)) ? _c('a', {
      staticClass: "block"
    }, [_vm._v(_vm._s(c.orderNo))]) : [_vm._v(" ")]], 2) : [_vm._v(_vm._s(c.orderNo))]], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.courseCateMap[c.courseCategory]))]), _vm._v(" "), _c('td', [_c('a', {
      staticStyle: {
        "display": "block"
      },
      on: {
        "click": function($event) {
          return _vm.viewCourse(idx)
        }
      }
    }, [_vm._v(_vm._s(c.courseName))])]), _vm._v(" "), _c('td', [(c.duration) ? [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(c.duration) + " "), _c('span', {
      staticClass: "gray"
    }, [_vm._v("分钟")])] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.coachName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.isPublic ? '是' : '否'))]), _vm._v(" "), _c('td', [(c.lessonFee) ? [_vm._v("￥" + _vm._s(c.lessonFee) + " "), _c('span', {
      staticClass: "gray"
    }, [_vm._v("元/次")])] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.updateTime))]), _vm._v(" "), _c('td', [(_vm.courseEditable) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.$router.push('/private-course-edit/' + c.courseId)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delCourse(idx)
        }
      }
    }, [_vm._v("删除")])]), _vm._v(" "), (!_vm.isDisabledCourse) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.updateCourseStatus(idx, 'S')
        }
      }
    }, [_vm._v("停用")])]) : _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.updateCourseStatus(idx, 'R')
        }
      }
    }, [_vm._v("恢复")])])]) : _vm._e()])])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "tbl-footer"
  }, [_c('div', {
    staticClass: "r"
  }, [_vm._v("共 " + _vm._s(_vm.courseList.length) + " 条记录")])])])])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "课程信息",
      "width": "700",
      "ok-text": "关闭",
      "cancel-text": "",
      "styles": {
        top: '20px'
      }
    },
    model: {
      value: (_vm.courseViewShow),
      callback: function($$v) {
        _vm.courseViewShow = $$v
      },
      expression: "courseViewShow"
    }
  }, [_c('div', {
    staticClass: "info-view"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("基本信息")]), _vm._v(" "), _c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("课程名称")]), _c('td', [_c('b', [_vm._v(_vm._s(_vm.course.courseName))])])]), _vm._v(" "), (_vm.course.imgUrl) ? _c('tr', [_c('th', {
    attrs: {
      "valign": "top"
    }
  }, [_vm._v("课程图片")]), _c('td', [_c('img', {
    staticClass: "-course-img",
    attrs: {
      "src": _vm.course.imgUrl
    }
  })])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', [_vm._v("课程时长")]), _c('td', [_vm._v(_vm._s(_vm.course.duration) + " (分钟)")])]), _vm._v(" "), (_vm.course.bookingsLimit) ? _c('tr', [_c('th', [_vm._v("约课限制")]), _c('td', [_vm._v(_vm._s(_vm.course.bookingsLimit) + " 节 / 人 / 天")])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', [_vm._v("教练")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.course.coachName))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("更新人")]), _c('td', [_vm._v(_vm._s(_vm.course.updateUname))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("更新时间")]), _c('td', [_vm._v(_vm._s(_vm.course.updateTime))])]), _vm._v(" "), (_vm.course.intro) ? _c('tr', [_c('th', {
    attrs: {
      "valign": "top"
    }
  }, [_vm._v("简介")]), _c('td', [_c('pre', [_vm._v(_vm._s(_vm.course.intro))])])]) : _vm._e()])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("序号 ↓")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("课程类别")]), _vm._v(" "), _c('th', [_vm._v("课程名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("单次课时长")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("教练")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("对外展示")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("课时费标价")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("更新时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2329:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "lesson-review"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_vm._v("\n\t\taa\n\t")])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2334:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "entry-checkin bookings"
  }, [_c('section', {
    staticClass: "query-zone"
  }, [_c('input', {
    directives: [{
      name: "focus",
      rawName: "v-focus"
    }, {
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.queryNo),
      expression: "queryNo",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "query-input",
    attrs: {
      "type": "text",
      "title": "",
      "placeholder": "客户手机号  |  客户姓名 （输入后按回车键查询）"
    },
    domProps: {
      "value": (_vm.queryNo)
    },
    on: {
      "keyup": function($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.queryCust.apply(null, arguments)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.queryNo = $event.target.value.trim()
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), (_vm.queryError) ? _c('div', {
    staticClass: "err"
  }, [_vm._v(_vm._s(_vm.queryError))]) : _vm._e(), _vm._v(" "), (_vm.custList && _vm.custList.length > 0) ? _c('div', {
    staticClass: "cust-list",
    staticStyle: {
      "margin-bottom": "20px",
      "border-color": "orange"
    }
  }, [_c('h3', [_vm._v("请选择一个客户：")]), _vm._v(" "), _c('ul', _vm._l((_vm.custList), function(c) {
    return _c('li', {
      on: {
        "click": function($event) {
          return _vm.selectCust(c)
        }
      }
    }, [_vm._v(_vm._s(c.name) + "（" + _vm._s(c.phoneNo) + "）")])
  }), 0)]) : _vm._e(), _vm._v(" "), (_vm.cust) ? [_c('div', {
    staticClass: "cust"
  }, [_c('span', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.cust.name))]), _vm._v(" " + _vm._s(_vm.g.Dict.SexDesc[_vm.cust.sex]) + "\n\t\t\t\t\t"), _c('div', {
    staticClass: "detail"
  }, [_c('span', {
    staticClass: "bar"
  }, [_vm._v("手机号： " + _vm._s(_vm.cust.phoneNo))]), _vm._v(" "), (_vm.cust.ownerName) ? _c('span', {
    staticClass: "bar"
  }, [_vm._v("负责人： " + _vm._s(_vm.cust.ownerName))]) : _vm._e(), _vm._v(" "), (_vm.cust.createUname) ? _c('span', {
    staticClass: "bar"
  }, [_vm._v("创建人： " + _vm._s(_vm.cust.createUname))]) : _vm._e(), _vm._v("\n\t\t\t\t\t\t创建时间：" + _vm._s(_vm.cust.createTime) + "\n\t\t\t\t")])]), _vm._v(" "), (_vm.courseList && _vm.courseList.length > 0) ? [_c('section', {
    staticClass: "tblform"
  }, [_c('table', [_c('tr', [_c('th', [_vm._v("预约私教课：")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "padding-left": "14px"
    }
  }, [_c('i-select', {
    staticStyle: {
      "width": "330px",
      "display": "inline-block"
    },
    attrs: {
      "filterable": ""
    },
    on: {
      "on-change": _vm.changeCourse
    },
    model: {
      value: (_vm.selectCourseIdx),
      callback: function($$v) {
        _vm.selectCourseIdx = $$v
      },
      expression: "selectCourseIdx"
    }
  }, _vm._l((_vm.courseList), function(c, idx) {
    return _c('i-option', {
      key: idx,
      attrs: {
        "value": idx
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(c.courseName) + " "), (c.coachId) ? [_vm._v("（教练： " + _vm._s(c.coachName) + "）")] : _vm._e()], 2)
  }), 1), _vm._v(" "), (_vm.selectCourseIdx !== null) ? [_c('span', {
    staticClass: "l10 gray"
  }, [_vm._v("上课时长： " + _vm._s(_vm.courseList[_vm.selectCourseIdx].duration) + " 分钟")])] : _vm._e()], 2)]), _vm._v(" "), (_vm.selectCourseIdx !== null && !_vm.courseList[_vm.selectCourseIdx].coachId) ? _c('tr', [_c('th', [_vm._v("预约教练：")]), _vm._v(" "), _c('td', [_c('i-select', {
    staticStyle: {
      "width": "125px"
    },
    attrs: {
      "filterable": ""
    },
    on: {
      "on-change": _vm.changeCoach
    },
    model: {
      value: (_vm.coachId),
      callback: function($$v) {
        _vm.coachId = $$v
      },
      expression: "coachId"
    }
  }, _vm._l((_vm.coachList), function(c) {
    return _c('i-option', {
      key: c.staffId,
      attrs: {
        "value": c.staffId
      }
    }, [_vm._v(_vm._s(c.name))])
  }), 1)], 1)]) : _vm._e(), _vm._v(" "), (_vm.coachId) ? _c('tr', [_c('th', [_vm._v("预约上课日期：")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "padding-left": "14px"
    }
  }, [_c('DatePicker', {
    staticStyle: {
      "width": "120px",
      "display": "inline-block"
    },
    attrs: {
      "placement": "bottom-start",
      "type": "date",
      "placeholder": "选择上课日期"
    },
    on: {
      "on-change": _vm.changeBookingDate
    },
    model: {
      value: (_vm.bookingDate),
      callback: function($$v) {
        _vm.bookingDate = $$v
      },
      expression: "bookingDate"
    }
  }), _vm._v(" "), _c('ul', {
    staticClass: "date-list"
  }, _vm._l((_vm.latestDates), function(d) {
    return _c('li', {
      on: {
        "click": function($event) {
          return _vm.setBookingDate(d)
        }
      }
    }, [_c('a', [_vm._v(_vm._s(d.format('M/d')) + "（" + _vm._s(_vm.g.Dict.WeekName[d.getDay()]) + "）")])])
  }), 0)], 1)]) : _vm._e(), _vm._v(" "), (_vm.coachId) ? _c('tr', [_c('th', [_vm._v("预约上课时间：")]), _vm._v(" "), _c('td', [_c('ul', {
    staticClass: "times"
  }, [_vm._l((_vm.times), function(t, idx) {
    return [(t[0] === 10 && t[1] === 0) ? _c('li', {
      staticClass: "spt"
    }, [_vm._v("上午"), _c('i', {
      staticClass: "iconfont icon-arrow-r"
    })]) : (t[0] === 12 && t[1] === 0) ? [_c('li', {
      staticClass: "block"
    }, [_vm._v(" ")]), _c('li', {
      staticClass: "spt"
    }, [_vm._v("下午"), _c('i', {
      staticClass: "iconfont icon-arrow-r"
    })])] : (t[0] === 18 && t[1] === 0) ? [_c('li', {
      staticClass: "block"
    }, [_vm._v(" ")]), _c('li', {
      staticClass: "spt"
    }, [_vm._v("晚上"), _c('i', {
      staticClass: "iconfont icon-arrow-r"
    })])] : _vm._e(), _vm._v(" "), _c('li', {
      class: {
        'open': _vm.timeItems[t[0] - 6].type === _vm.dataType.USABLE || (_vm.timeItems[t[0] - 6].type === _vm.dataType.PENDING && _vm.timeItems[t[0] - 6].mins[t[1]] === _vm.dataType.USABLE),
        'off': _vm.timeItems[t[0] - 6].type === _vm.dataType.VACATION,
        'used': _vm.timeItems[t[0] - 6].type === _vm.dataType.PENDING && _vm.timeItems[t[0] - 6].mins[t[1]] === _vm.dataType.USED,
        'disused': _vm.timeItems[t[0] - 6].type === _vm.dataType.PENDING && _vm.timeItems[t[0] - 6].mins[t[1]] === _vm.dataType.DISUSED,
        'check': _vm.selectTimeIdx === idx
      },
      on: {
        "click": function($event) {
          return _vm.checkTime(idx)
        }
      }
    }, [(_vm.timeItems[t[0] - 6].type === _vm.dataType.PENDING && _vm.timeItems[t[0] - 6].mins[t[1]] === _vm.dataType.USED) ? _c('span', {
      attrs: {
        "title": _vm.timeItems[t[0] - 6].desc
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(t[0]) + ":" + _vm._s(t[1])), (t[1] === 0) ? [_vm._v("0")] : _vm._e()], 2) : [_vm._v(_vm._s(t[0]) + ":" + _vm._s(t[1])), (t[1] === 0) ? [_vm._v("0")] : _vm._e()]], 2)]
  })], 2), _vm._v(" "), _vm._m(0)])]) : _vm._e(), _vm._v(" "), (_vm.coachId) ? _c('tr', [_c('th', [_vm._v("预约备注：")]), _vm._v(" "), _c('td', [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 3
    },
    model: {
      value: (_vm.custRemark),
      callback: function($$v) {
        _vm.custRemark = $$v
      },
      expression: "custRemark"
    }
  })], 1)]) : _vm._e()])])] : _vm._e(), _vm._v(" "), (_vm.courseList && _vm.courseList.length === 0) ? _c('div', {
    staticClass: "err"
  }, [_vm._v("\n\t\t\t\t请设置私教课程\n\t\t\t")]) : _vm._e(), _vm._v(" "), (!_vm.clickedSubmit) ? _c('section', {
    staticClass: "submit"
  }, [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', [(_vm.selectCourseIdx !== null) ? _c('div', {
    staticClass: "sum"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.courseList[_vm.selectCourseIdx].courseName) + " "), _c('u', [_vm._v("/")]), _vm._v(" 教练：" + _vm._s(_vm.coachName) + "\n\t\t\t\t\t\t\t\t"), (_vm.bookingDate) ? _c('span', [_c('u', [_vm._v("/")]), _vm._v(" " + _vm._s(_vm.g.Util.formatDate(_vm.bookingDate, false)) + " "), _c('u', [_vm._v("/")]), _vm._v(" "), (_vm.selectTimeIdx !== null) ? _c('span', [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.times[_vm.selectTimeIdx][0]) + ":" + _vm._s(_vm.times[_vm.selectTimeIdx][1])), (_vm.times[_vm.selectTimeIdx][1] === 0) ? [_vm._v("0")] : _vm._e()], 2) : _c('span', {
    staticClass: "orange"
  }, [_vm._v("未选择时间")])]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right"
    }
  }, [_c('i-button', {
    staticClass: "primary",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.handleSubmit()
      }
    }
  }, [_vm._v("确定预约")])], 1)])])]) : _vm._e()] : (_vm.latestCustList) ? _c('div', {
    staticClass: "cust-list"
  }, [_c('h3', [(_vm.g.data.user.isShopOwner) ? [_vm._v("门店")] : [_vm._v("我")], _vm._v("最近创建的客户")], 2), _vm._v(" "), _c('ul', _vm._l((_vm.latestCustList), function(c) {
    return _c('li', {
      on: {
        "click": function($event) {
          return _vm.selectCust(c)
        }
      }
    }, [_vm._v(_vm._s(c.name))])
  }), 0)]) : _vm._e()], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "desc"
  }, [_c('ul', {
    staticClass: "times"
  }, [_c('li', {
    staticClass: "open"
  }, [_vm._v("可预约")]), _vm._v(" "), _c('li', {
    staticClass: "used"
  }, [_vm._v("已预约")]), _vm._v(" "), _c('li', {
    staticClass: "off"
  }, [_vm._v("教练休息")]), _vm._v(" "), _c('li', {
    staticClass: "disused"
  }, [_vm._v("不可预约")])]), _vm._v(" "), _c('span', {
    staticClass: "gray l10"
  }, [_vm._v("（状态说明）")])])
}]}

/***/ }),

/***/ 2341:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "group-lesson"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main -glr-"
  }, [_c('page-header', {
    attrs: {
      "title": "上课详情",
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), _c('group-lesson-records', {
    attrs: {
      "lesson-id": _vm.lessonId,
      "show-lesson-info": true
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2344:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "group-course"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main -style-"
  }, [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v(_vm._s(_vm.pageTitle))]), _vm._v(" "), (_vm.course.courseId) ? _c('div', {
    staticClass: "r"
  }, [_vm._v("状态：" + _vm._s(_vm.course.status ? '停用' : '正常'))]) : _vm._e()]), _vm._v(" "), _c('i-form', {
    ref: "course",
    staticClass: "myform",
    attrs: {
      "model": _vm.course,
      "rules": _vm.courseFormRule,
      "label-width": 130
    }
  }, [_c('form-item', {
    attrs: {
      "label": "课程类别",
      "required": ""
    }
  }, [(_vm.courseCateName) ? _c('b', {
    staticStyle: {
      "padding-right": "15px"
    }
  }, [_vm._v(_vm._s(_vm.courseCateName))]) : _vm._e(), _vm._v(" "), _c('i-button', {
    attrs: {
      "size": "small"
    },
    on: {
      "click": function($event) {
        return _vm.openCourseCateDlg()
      }
    }
  }, [_vm._v("选择 ...")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "courseName",
      "label": "课程名称"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": ""
    },
    model: {
      value: (_vm.course.courseName),
      callback: function($$v) {
        _vm.$set(_vm.course, "courseName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "course.courseName"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "课程图片"
    }
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccess,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultList
    }
  }, [_c('i-button', {
    staticClass: "input-s",
    attrs: {
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传图片")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "duration",
      "label": "单次课时长"
    }
  }, [_c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.course.duration),
      callback: function($$v) {
        _vm.$set(_vm.course, "duration", $$v)
      },
      expression: "course.duration"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("分钟")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "maxStudents",
      "label": "最多预约人数"
    }
  }, [_c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.course.maxStudents),
      callback: function($$v) {
        _vm.$set(_vm.course, "maxStudents", $$v)
      },
      expression: "course.maxStudents"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "minStudents",
      "label": "最少预约人数"
    }
  }, [_c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.course.minStudents),
      callback: function($$v) {
        _vm.$set(_vm.course, "minStudents", $$v)
      },
      expression: "course.minStudents"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "intro",
      "label": "课程简介"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 10
    },
    model: {
      value: (_vm.course.intro),
      callback: function($$v) {
        _vm.$set(_vm.course, "intro", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "course.intro"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "videoId",
      "label": "课程视频（微官网）"
    }
  }, [_c('i-input', {
    staticClass: "input-s",
    model: {
      value: (_vm.course.videoId),
      callback: function($$v) {
        _vm.$set(_vm.course, "videoId", $$v)
      },
      expression: "course.videoId"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "l10"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        return _vm.openVideoDlg(1)
      }
    }
  }, [_vm._v("设置视频编号")])], 1), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（展示到微官网团课课程详情中）")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "videoId",
      "label": "课程视频（系统内）"
    }
  }, [_c('i-input', {
    staticClass: "input-s",
    model: {
      value: (_vm.course.innerVideoId),
      callback: function($$v) {
        _vm.$set(_vm.course, "innerVideoId", $$v)
      },
      expression: "course.innerVideoId"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "l10"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        return _vm.openVideoDlg(2)
      }
    }
  }, [_vm._v("设置视频编号")])], 1), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（展示到系统内团课课程详情中）")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "课程介绍图片"
    }
  }, [_c('img-upload', {
    attrs: {
      "multiple": true,
      "removeable": true,
      "max-count": 5,
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleMorePisUploadSuccess,
      "on-remove": _vm.handleImgRemove,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultMorePics
    }
  }, [_c('i-button', {
    staticClass: "input-s",
    attrs: {
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传课程图片")]), _vm._v("\n\t\t\t\t\t\t  "), _c('span', {
    staticClass: "gray"
  }, [_vm._v("（可选，最多可上传 "), _c('b', [_vm._v("5")]), _vm._v(" 张）")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "130px"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.handleSaveCourse()
      }
    }
  }, [_vm._v("提交")])], 1)], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "选择课程类别",
      "width": "550"
    },
    model: {
      value: (_vm.courseCateDlgView),
      callback: function($$v) {
        _vm.courseCateDlgView = $$v
      },
      expression: "courseCateDlgView"
    }
  }, [_c('ul', {
    staticClass: "course-cate-list"
  }, _vm._l((_vm.courseCateList), function(c) {
    return (!c.subType || c.subType === 1) ? _c('li', {
      on: {
        "click": function($event) {
          return _vm.selectCourseCate(c.intValue, c.itemName)
        }
      }
    }, [_vm._v("\n\t\t\t\t\t" + _vm._s(c.itemName) + "\n\t\t\t\t")]) : _vm._e()
  }), 0), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "腾讯视频设置帮助",
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.getVideoIdDlg),
      callback: function($$v) {
        _vm.getVideoIdDlg = $$v
      },
      expression: "getVideoIdDlg"
    }
  }, [_c('ol', {
    staticClass: "video-help"
  }, [_c('li', [_vm._v("将您拍摄的视频上传到【"), _c('a', {
    attrs: {
      "href": "https://v.qq.com",
      "target": "_blank"
    }
  }, [_vm._v("腾讯视频")]), _vm._v("】（推荐使用腾讯视频App上传视频）")]), _vm._v(" "), _c('li', [_vm._v("待视频审核通过后，进入该视频页面（"), _c('b', [_vm._v("电脑版网页")]), _vm._v("），通过如下方式获取视频地址：\n\t\t\t\t\t"), _c('div', {
    staticClass: "img"
  }, [_c('img', {
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/jzg-pc/txvideo-demo.png'
    }
  })])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "orangered"
  }, [_vm._v("将上述“页面地址”粘贴到如下↓ 输入框中后点击确定")]), _vm._v(" "), _c('p'), _vm._v(" "), _c('i-input', {
    staticStyle: {
      "width": "400px"
    },
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.txVideoUrl),
      callback: function($$v) {
        _vm.txVideoUrl = $$v
      },
      expression: "txVideoUrl"
    }
  }), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.parseTxVideoUrl
    }
  }, [_vm._v("确定")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "center form-submit",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.getVideoIdDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2362:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "private-lesson"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main -pl-"
  }, [(_vm.lesson) ? _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("私教上课基本信息")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [(_vm.lessonTimeEditable) ? [_c('a', {
    on: {
      "click": function($event) {
        _vm.dlg.changeLessonDateTime = true
      }
    }
  }, [_vm._v("修改上课时间")]), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("|")])] : _vm._e(), _vm._v(" "), _c('a', {
    attrs: {
      "target": "_blank",
      "href": '#/private-course-schedule-edit/' + _vm.lesson.psId
    }
  }, [_vm._v("查看排课详情 "), _c('i', {
    staticClass: "iconfont icon-link default-font"
  })])], 2)]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _c('tr', [_c('td', [_vm._v(_vm._s(_vm.lesson.courseName))]), _vm._v(" "), _c('td', [(_vm.lesson.status === 9) ? _c('b', [_vm._v("已结束")]) : [_vm._v("未结束")]], 2), _vm._v(" "), _c('td', [_c('div', [(_vm.lesson.isViceCoach) ? [_vm._v("\n\t\t\t\t\t\t\t\t\t代课教练： " + _vm._s(_vm.lesson.coachName) + "\n\t\t\t\t\t\t\t\t\t"), (_vm.lesson.viceCoachFee) ? [_c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v("\n\t\t\t\t\t\t\t\t\t\t代课课时费： ￥" + _vm._s(_vm.lesson.viceCoachFee) + "\n\t\t\t\t\t\t\t\t\t")] : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v(" "), _c('span', {
    staticClass: "old-coach"
  }, [_vm._v("原教练：" + _vm._s(_vm.lesson.oldCoachName))])] : [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.lesson.coachName) + "\n\t\t\t\t\t\t\t\t")]], 2), _vm._v(" "), (_vm.lessonEditable) ? _c('div', {
    staticClass: "p10"
  }, [_c('a', {
    on: {
      "click": function($event) {
        _vm.dlg.confViceCoach = true
      }
    }
  }, [_vm._v("[设置代课教练]")])]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(_vm.lesson.lessonDate)) + " ")]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.g.Util.formatTime(_vm.lesson.beginTime)) + " ~ " + _vm._s(_vm.g.Util.formatTime(_vm.lesson.endTime)) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.lesson.groundName))]), _vm._v(" "), _c('td', [_c('pre', [_vm._v(_vm._s(_vm.lesson.content))])])])])])]) : _vm._e(), _vm._v(" "), (_vm.mplList && _vm.mplList.length) ? _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("会员预约上课记录")]), _vm._v(" "), (_vm.mplCount > 10) ? _c('div', {
    staticClass: "r"
  }, [_vm._v("共有 " + _vm._s(_vm.mplCount) + " 条记录")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(1), _vm._v(" "), _vm._l((_vm.mplList), function(mpl) {
    return _c('tr', [_c('td', {
      class: {
        'bold red': mpl.mplId == _vm.mplId
      }
    }, [_vm._v(_vm._s(mpl.memberName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(mpl.createUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(mpl.createTime))]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(mpl.cardName) + "\n\t\t\t\t\t\t\t"), (mpl.extraCardName) ? _c('div', [_vm._v(_vm._s(mpl.extraCardName))]) : _vm._e()]), _vm._v(" "), _c('td', [(mpl.cardPayment) ? [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(mpl.cardPayment) + " " + _vm._s(_vm.g.Dict.CardUnitName[mpl.cardType]) + "\n\t\t\t\t\t\t\t")] : _vm._e(), _vm._v(" "), (mpl.extraCardName && mpl.extraCardPayment) ? _c('div', [_vm._v(_vm._s(mpl.extraCardPayment) + " " + _vm._s(_vm.g.Dict.CardUnitName[mpl.extraCardType]))]) : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(mpl.checkinUname))]), _vm._v(" "), _c('td', [(mpl.firstCheckinTime) ? _c('div', [_vm._v(_vm._s(mpl.firstCheckinTime))]) : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t" + _vm._s(mpl.checkinTime) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c('td', [(_vm.lesson) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [(_vm.lessonDelPermit && (!mpl.checkinTime || _vm.g.data.user.isShopOwner)) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.openMplCancelDlg(mpl)
        }
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t取消预约\n\t\t\t\t\t\t\t\t\t")]) : _vm._e()]), _vm._v(" "), _c('li', [((!mpl.checkinTime && _vm.lesson.canCheckin && _vm.plCheckinPermit)) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.checkinPcLesson(mpl)
        }
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t代签到\n\t\t\t\t\t\t\t\t\t")]) : _vm._e()]), _vm._v(" "), (mpl.pics) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.shopMplPics(mpl.pics)
        }
      }
    }, [_vm._v("查看上课照片")])]) : _vm._e()]) : _vm._e()])])
  })], 2)]), _vm._v(" "), (_vm.mplCount && _vm.mplCount > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [(_vm.mplCount) ? _c('page', {
    attrs: {
      "total": _vm.mplCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryMemberPrivateLesson
    }
  }) : _vm._e()], 1) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "修改预约上课时间",
      "width": "500",
      "ok-text": "确定",
      "cancel-text": ""
    },
    model: {
      value: (_vm.dlg.changeLessonDateTime),
      callback: function($$v) {
        _vm.$set(_vm.dlg, "changeLessonDateTime", $$v)
      },
      expression: "dlg.changeLessonDateTime"
    }
  }, [(_vm.lesson) ? _c('div', {
    staticStyle: {
      "padding": "30px 10px"
    }
  }, [_c('DatePicker', {
    staticStyle: {
      "width": "130px",
      "display": "inline-block"
    },
    attrs: {
      "type": "date",
      "placeholder": "上课日期"
    },
    model: {
      value: (_vm.lessonDate),
      callback: function($$v) {
        _vm.lessonDate = $$v
      },
      expression: "lessonDate"
    }
  }), _vm._v(" "), _c('time-picker', {
    staticClass: "input-s",
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "format": "HH:mm",
      "placeholder": "上课时间",
      "type": "time",
      "confirm": ""
    },
    model: {
      value: (_vm.lessonBeginTime),
      callback: function($$v) {
        _vm.lessonBeginTime = $$v
      },
      expression: "lessonBeginTime"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "l10"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.altLessonTime
    }
  }, [_vm._v("确定")])], 1)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "设置代课教练",
      "width": "700",
      "ok-text": "确定",
      "cancel-text": ""
    },
    model: {
      value: (_vm.dlg.confViceCoach),
      callback: function($$v) {
        _vm.$set(_vm.dlg, "confViceCoach", $$v)
      },
      expression: "dlg.confViceCoach"
    }
  }, [(_vm.lesson) ? _c('div', {
    staticClass: "allpadding"
  }, [_c('table', {
    staticClass: "tblform"
  }, [_c('tr', [_c('td', {
    staticClass: "required",
    attrs: {
      "width": "150"
    }
  }, [_vm._v("代课教练：")]), _vm._v(" "), _c('td', [_c('i-select', {
    staticStyle: {
      "width": "145px"
    },
    attrs: {
      "filterable": ""
    },
    model: {
      value: (_vm.viceCoachId),
      callback: function($$v) {
        _vm.viceCoachId = _vm._n($$v)
      },
      expression: "viceCoachId"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_c('span', {
    staticClass: "gray"
  }, [_vm._v("无")])]), _vm._v(" "), _vm._l((_vm.coachList), function(s) {
    return _c('i-option', {
      key: s.staffId,
      attrs: {
        "value": s.staffId
      }
    }, [_vm._v(_vm._s(s.name))])
  })], 2)], 1)]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("代课教练固定课时费：")]), _vm._v(" "), _c('td', [_c('input-num', {
    staticClass: "input-s",
    model: {
      value: (_vm.lesson.viceCoachFee),
      callback: function($$v) {
        _vm.$set(_vm.lesson, "viceCoachFee", $$v)
      },
      expression: "lesson.viceCoachFee"
    }
  }), _vm._v("  元\n\t\t\t\t\t")], 1)])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "note"
  }, [_c('b', {
    staticClass: "orangered"
  }, [_vm._v("必读说明：")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("代课教练是指本节课代替原教练上课的教练，设置后，本节课的课时数和课时费将只属于代课教练")]), _vm._v(" "), _c('li', [_vm._v("如果填写了代课教练固定课时费，结算工资时将按照此固定金额结算（不按工资设置中的方式）")]), _vm._v(" "), _c('li', [_vm._v("如果未填写代课教练固定课时费，表示使用本节课排课中的教练课时费结算方式（与原教练结算方式一致）")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-submit center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    staticClass: "primary",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.setViceCoach()
      }
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.dlg.confViceCoach = false
      }
    }
  }, [_vm._v("关闭")])], 1)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "私教课取消",
      "width": "500",
      "ok-text": "",
      "cancel-text": ""
    },
    model: {
      value: (_vm.dlg.cancelLesson),
      callback: function($$v) {
        _vm.$set(_vm.dlg, "cancelLesson", $$v)
      },
      expression: "dlg.cancelLesson"
    }
  }, [(_vm.isOutdatePl && !_vm.cancelOutdatePlPermit) ? [_c('div', {
    staticClass: "center orangered",
    staticStyle: {
      "padding": "20px 15px"
    }
  }, [_vm._v("\n\t\t\t\t本节课上课时间已过，不能取消。"), _c('p'), _vm._v("如需取消，请联系负责人给您【取消开课后的私教课】权限\n\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.dlg.cancelLesson = false
      }
    }
  }, [_vm._v("关闭")])], 1)] : [(_vm.selectMpl) ? _c('div', [_vm._v("\n\t\t\t\t请填写取消原因："), _c('p'), _vm._v(" "), _c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 5,
      "placeholder": ""
    },
    model: {
      value: (_vm.cancelRemark),
      callback: function($$v) {
        _vm.cancelRemark = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "cancelRemark"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    staticClass: "primary",
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.handleCancelLesson()
      }
    }
  }, [_vm._v("提交")]), _vm._v("\n\t\t\t\t \n\t\t\t\t"), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.dlg.cancelLesson = false
      }
    }
  }, [_vm._v("关闭")])], 1)]], 2), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "上课照片",
      "width": "900",
      "ok-text": "关闭",
      "cancel-text": "",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.dlg.mplPics),
      callback: function($$v) {
        _vm.$set(_vm.dlg, "mplPics", $$v)
      },
      expression: "dlg.mplPics"
    }
  }, _vm._l((_vm.mplPicList), function(p) {
    return _c('div', [_c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(p),
        "width": "850"
      }
    })])
  }), 0)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("课程名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("状态")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "max-width": "400px"
    }
  }, [_vm._v("教练")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("上课日期")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("上课时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("上课场地")]), _vm._v(" "), _c('th', [_vm._v("上课内容")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("学员")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("预约人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("预约时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("计费会员卡")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("卡消费")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("签到人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("签到时间")]), _vm._v(" "), _c('th', [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2377:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "lesson-tbl"
  }, [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "group-lesson"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', {
    staticClass: "query-section"
  }, [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', [_c('ul', {
    staticClass: "query-cond-inline"
  }, [_c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "placeholder": "请选择课程",
      "filterable": "",
      "clearable": ""
    },
    model: {
      value: (_vm.query.courseId),
      callback: function($$v) {
        _vm.$set(_vm.query, "courseId", $$v)
      },
      expression: "query.courseId"
    }
  }, _vm._l((_vm.courseList), function(c) {
    return _c('i-option', {
      key: c.courseId,
      attrs: {
        "value": c.courseId
      }
    }, [_vm._v(_vm._s(c.courseName))])
  }), 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "85px"
    },
    attrs: {
      "clearable": "",
      "placeholder": "课程类型"
    },
    model: {
      value: (_vm.query.gcType),
      callback: function($$v) {
        _vm.$set(_vm.query, "gcType", $$v)
      },
      expression: "query.gcType"
    }
  }, _vm._l((_vm.g.Dict.GcTypes), function(g, idx) {
    return _c('i-option', {
      key: idx,
      attrs: {
        "value": idx
      }
    }, [_vm._v(_vm._s(g))])
  }), 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "filterable": "",
      "placeholder": "请选择教练",
      "clearable": ""
    },
    model: {
      value: (_vm.query.coachId),
      callback: function($$v) {
        _vm.$set(_vm.query, "coachId", $$v)
      },
      expression: "query.coachId"
    }
  }, _vm._l((_vm.coachList), function(c) {
    return _c('i-option', {
      key: c.staffId,
      attrs: {
        "value": c.staffId
      }
    }, [_vm._v(_vm._s(c.name))])
  }), 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "90px"
    },
    attrs: {
      "placeholder": "上课状态",
      "clearable": ""
    },
    model: {
      value: (_vm.query.isFinishedLesson),
      callback: function($$v) {
        _vm.$set(_vm.query, "isFinishedLesson", $$v)
      },
      expression: "query.isFinishedLesson"
    }
  }, [_c('i-option', {
    attrs: {
      "value": "false"
    }
  }, [_vm._v("未结束")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": "true"
    }
  }, [_vm._v("已结束")])], 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.queryLessonList()
      }
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.resetQuery
    }
  }, [_vm._v("重置")])], 1)])]), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right"
    }
  }, [_c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/group-lesson-cancel-log')
      }
    }
  }, [_vm._v("团课取消日志")]), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v(" | ")]), _vm._v(" "), _c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/cust-group-lesson')
      }
    }
  }, [_vm._v("团课体验课")])])])])]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "tbl-header"
  }, [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', {
    attrs: {
      "width": "250"
    }
  }, [_c('button-group', {
    staticStyle: {
      "display": "inline-block"
    }
  }, [_c('i-button', {
    class: {
      '-checked-btn': _vm.query.dateType === 'week'
    },
    staticStyle: {
      "margin-right": "0"
    },
    on: {
      "click": _vm.queryByWeek
    }
  }, [_vm._v("周")]), _vm._v(" "), _c('i-button', {
    class: {
      '-checked-btn': _vm.query.dateType === 'month'
    },
    on: {
      "click": _vm.queryByMonth
    }
  }, [_vm._v("月")])], 1), _vm._v(" "), _c('div', {
    staticClass: "view-types"
  }, [_c('i-select', {
    staticStyle: {
      "width": "88px"
    },
    on: {
      "on-change": function($event) {
        return _vm.changeViewType(_vm.viewType)
      }
    },
    model: {
      value: (_vm.viewType),
      callback: function($$v) {
        _vm.viewType = $$v
      },
      expression: "viewType"
    }
  }, [_c('i-option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("日历视图")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 2
    }
  }, [_vm._v("列表视图")])], 1)], 1)], 1), _vm._v(" "), _c('td', {
    attrs: {
      "align": "center"
    }
  }, [(_vm.query.dateType === 'week') ? _c('span', {
    staticClass: "-qdate-nav"
  }, [_c('a', {
    on: {
      "click": function($event) {
        return _vm.weekNavQuery('pre')
      }
    }
  }, [_c('icon', {
    staticClass: "left",
    attrs: {
      "type": "ios-arrow-back"
    }
  }), _vm._v("上一周\n                ")], 1)]) : _vm._e(), _vm._v(" "), (_vm.query.dateType === 'month') ? _c('span', {
    staticClass: "-qdate-nav"
  }, [_c('a', {
    on: {
      "click": function($event) {
        return _vm.monthNav('pre')
      }
    }
  }, [_c('icon', {
    staticClass: "left",
    attrs: {
      "type": "ios-arrow-back"
    }
  }), _vm._v("上一月\n                ")], 1)]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "-date-tit"
  }, [_vm._v(_vm._s(_vm.query.dateDesc))]), _vm._v(" "), (_vm.query.dateType === 'week') ? _c('span', {
    staticClass: "-qdate-nav"
  }, [_c('a', {
    on: {
      "click": function($event) {
        return _vm.weekNavQuery('next')
      }
    }
  }, [_vm._v("下一周"), _c('icon', {
    staticClass: "right",
    attrs: {
      "type": "ios-arrow-forward"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), (_vm.query.dateType === 'month') ? _c('span', {
    staticClass: "-qdate-nav"
  }, [_c('a', {
    on: {
      "click": function($event) {
        return _vm.monthNav('next')
      }
    }
  }, [_vm._v("下一月"), _c('icon', {
    staticClass: "right",
    attrs: {
      "type": "ios-arrow-forward"
    }
  })], 1)]) : _vm._e()]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "250",
      "align": "right"
    }
  }, [(_vm.viewType === 1) ? _c('div', {
    staticClass: "more-opt"
  }, [_c('i-button', {
    staticClass: "btn"
  }, [_vm._v("更多操作\n                  "), _c('Icon', {
    attrs: {
      "type": "ios-arrow-down"
    }
  })], 1), _vm._v(" "), _c('ul', [(_vm.viewType === 1) ? _c('li', [_c('checkbox', {
    model: {
      value: (_vm.showBookings),
      callback: function($$v) {
        _vm.showBookings = $$v
      },
      expression: "showBookings"
    }
  }, [_vm._v("显示预约人数")])], 1) : _vm._e(), _vm._v(" "), (_vm.viewType === 1) ? _c('li', [_c('checkbox', {
    model: {
      value: (_vm.showGroundName),
      callback: function($$v) {
        _vm.showGroundName = $$v
      },
      expression: "showGroundName"
    }
  }, [_vm._v("显示场地")])], 1) : _vm._e(), _vm._v(" "), _c('li', [_c('checkbox', {
    on: {
      "on-change": function($event) {
        return _vm.queryLessonList(null)
      }
    },
    model: {
      value: (_vm.showUnusedCourseLesson),
      callback: function($$v) {
        _vm.showUnusedCourseLesson = $$v
      },
      expression: "showUnusedCourseLesson"
    }
  }, [_vm._v("显示停用课程的课")])], 1), _vm._v(" "), (_vm.query.dateType === 'week' && _vm.courseEditable) ? _c('li', {
    on: {
      "click": function($event) {
        _vm.viewBgcolorDlg = true
      }
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-color-filter-outline",
      "size": "16"
    }
  }), _vm._v("设置背景色\n                  ")], 1) : _vm._e(), _vm._v(" "), _c('li', {
    on: {
      "click": _vm.printLessonTable
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-print-outline",
      "size": "16"
    }
  }), _vm._v("打印课表\n                  ")], 1), _vm._v(" "), _c('li', {
    on: {
      "click": _vm.exportLessonTable
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-cloud-download-outline",
      "size": "16"
    }
  }), _vm._v("生成课表\n                  ")], 1)])], 1) : (_vm.lessonList) ? _c('span', [(!_vm.lessonCount) ? [_vm._v("共 " + _vm._s(_vm.lessonList.length) + " 节课")] : [_vm._v("共 " + _vm._s(_vm.lessonCount) + " 节课")], _vm._v(" "), (_vm.viewType === 2) ? _c('span', {
    staticClass: "l15 more-opt"
  }, [_c('i-button', {
    staticClass: "btn"
  }, [_vm._v("更多\n                    "), _c('Icon', {
    attrs: {
      "type": "ios-arrow-down"
    }
  })], 1), _vm._v(" "), _c('ul', [_c('li', [_c('checkbox', {
    on: {
      "on-change": function($event) {
        return _vm.queryLessonList(null)
      }
    },
    model: {
      value: (_vm.showUnusedCourseLesson),
      callback: function($$v) {
        _vm.showUnusedCourseLesson = $$v
      },
      expression: "showUnusedCourseLesson"
    }
  }, [_vm._v("显示停用课程的课")])], 1), _vm._v(" "), _c('li', [_c('checkbox', {
    model: {
      value: (_vm.isCombineLessonDate),
      callback: function($$v) {
        _vm.isCombineLessonDate = $$v
      },
      expression: "isCombineLessonDate"
    }
  }, [_vm._v("合并同一日期")])], 1), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        return _vm.queryLessonList(1, true)
      }
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-cloud-download-outline",
      "size": "16"
    }
  }), _vm._v("导出课表\n                    ")], 1)])], 1) : _vm._e()], 2) : _vm._e()])])])]), _vm._v(" "), (_vm.query.dateType === 'week') ? _c('div', {
    staticClass: "mytbl",
    attrs: {
      "id": "groupLesonTblByWeek"
    }
  }, [(_vm.viewType === 1) ? _c('table', {
    staticClass: "week-tbl",
    attrs: {
      "id": "groupLesonTblContByWeek"
    }
  }, [_c('tr', [_c('th', {
    staticClass: "col-time"
  }), _vm._v(" "), _vm._l((['一', '二', '三', '四', '五', '六', '日']), function(w, idx) {
    return _c('th', {
      staticClass: "week",
      class: {
        on: _vm.weekDates[idx].compareDatePart(_vm.today) === 0
      }
    }, [_vm._v("\n              星期" + _vm._s(w) + " "), _c('span', [_vm._v("（" + _vm._s(_vm.weekDates[idx].format('M/dd')) + "）")])])
  })], 2), _vm._v(" "), _vm._l((_vm.beginTimes), function(bt) {
    return _c('tr', [_c('td', {
      staticClass: "col-time"
    }, [_vm._v(_vm._s(bt))]), _vm._v(" "), _vm._l(([1, 2, 3, 4, 5, 6, 0]), function(w) {
      return _c('td', {
        staticClass: "week"
      }, [(_vm.lessonMap[bt][w]) ? _c('ul', _vm._l((_vm.lessonMap[bt][w]), function(l) {
        return _c('li', {
          style: ({
            background: '#' + _vm.bgColorMap[_vm.bgColorType === 1 ? l.coachId : l.courseId],
            color: '#' + _vm.textColorMap[_vm.bgColorType === 1 ? l.coachId : l.courseId]
          }),
          on: {
            "click": function($event) {
              return _vm.viewGroupLessonRecords(l)
            }
          }
        }, [_c('div', [_vm._v(_vm._s(l.coachName))]), _vm._v(" "), _c('div', {
          staticClass: "course"
        }, [_vm._v(_vm._s(l.lessonTitle))]), _vm._v(" "), (l.lessonLevel) ? _c('div', [_c('i', {
          class: 'big iconfont icon-star' + l.lessonLevel
        })]) : _vm._e(), _vm._v(" "), _c('div', {
          staticClass: "time"
        }, [_vm._v(_vm._s(bt) + " ~ " + _vm._s(_vm.g.Util.formatTime(l.endTime)))]), _vm._v(" "), (_vm.showGroundName && l.groundName) ? _c('div', [_vm._v("@ " + _vm._s(l.groundName))]) : _vm._e(), _vm._v(" "), (_vm.showBookings) ? _c('div', [(l.isNeedBooking) ? _c('span', {
          staticClass: "bookings"
        }, [_vm._v("\n                      约："), (l.bookings > 0) ? _c('b', [_vm._v(_vm._s(l.bookings) + " ")]) : [_vm._v("0")], _vm._v("/" + _vm._s(l.maxStudents) + "\n                       | \n                    ")], 2) : _vm._e(), _vm._v("\n                    签："), _c('span', {
          class: {
            bold: l.checkins
          }
        }, [_vm._v(_vm._s(l.checkins))])]) : _vm._e()])
      }), 0) : _vm._e()])
    })], 2)
  }), _vm._v(" "), (_vm.beginTimes.length > 5) ? _c('tr', [_c('th', {
    staticClass: "col-time"
  }), _vm._v(" "), _vm._l((['一', '二', '三', '四', '五', '六', '日']), function(w, idx) {
    return _c('th', {
      staticClass: "week",
      class: {
        on: _vm.weekDates[idx].compareDatePart(_vm.today) === 0
      }
    }, [_vm._v("\n              星期" + _vm._s(w) + " （" + _vm._s(_vm.weekDates[idx].format('M/dd')) + "）\n            ")])
  })], 2) : _vm._e()], 2) : _vm._e(), _vm._v(" "), (_vm.viewType === 1) ? [(_vm.lessonList && _vm.lessonList.length) ? _c('p', {
    staticClass: "gray",
    attrs: {
      "align": "center"
    }
  }, [_vm._v(" 共 " + _vm._s(_vm.lessonList.length) + " 节课")]) : _vm._e(), _vm._v(" "), (_vm.lessonList && !_vm.lessonList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()] : _vm._e()], 2) : (_vm.viewType === 1) ? _c('div', {
    staticClass: "mytbl",
    attrs: {
      "id": "groupLesonTblByMonth"
    }
  }, [_c('table', {
    staticClass: "-lessons",
    attrs: {
      "id": "groupLesonTblContByMonth"
    }
  }, [_c('tr', _vm._l((['一', '二', '三', '四', '五', '六', '日']), function(w, idx) {
    return _c('th', {
      attrs: {
        "width": "14%"
      }
    }, [_vm._v("\n              星期" + _vm._s(w) + "\n            ")])
  }), 0), _vm._v(" "), _vm._l((_vm.lessonRowList), function(rows, i) {
    return _c('tr', _vm._l(([1, 2, 3, 4, 5, 6, 7]), function(j) {
      return _c('td', [(rows[j]) ? [_c('div', {
        class: {
          'day': true,
          'on': _vm.todayStr === rows[j].date.format('yyyyMMdd')
        }
      }, [_vm._v(_vm._s(rows[j].date.getDate()))]), _vm._v(" "), (rows[j].lessons && rows[j].lessons.length > 0) ? _c('ul', _vm._l((rows[j].lessons), function(l) {
        return _c('li', {
          class: 'l-status-' + l.status,
          attrs: {
            "title": '上课时间：' + l.beginTimeDesc + ' - ' + l.endTimeDesc
          },
          on: {
            "click": function($event) {
              return _vm.viewGroupLessonRecords(l)
            }
          }
        }, [_vm._v("\n                    " + _vm._s(l.coachName) + "@" + _vm._s(l.beginTimeDesc) + " " + _vm._s(l.lessonTitle) + "\n                    "), (_vm.showBookings) ? _c('div', {
          staticClass: "gray"
        }, [_vm._v("\n                      (\n                      "), (l.isNeedBooking) ? _c('span', [_vm._v("约："), _c('span', {
          class: {
            'no': l.bookings
          }
        }, [_vm._v(_vm._s(l.bookings) + " ")]), _vm._v("/" + _vm._s(l.maxStudents) + "  |  ")]) : _vm._e(), _vm._v("\n                      签："), _c('span', {
          class: {
            'no': l.checkins
          }
        }, [_vm._v(_vm._s(l.checkins))]), _vm._v("\n                      )\n                    ")]) : _vm._e()])
      }), 0) : _vm._e()] : _vm._e()], 2)
    }), 0)
  })], 2), _vm._v(" "), (_vm.lessonList && _vm.lessonList.length) ? _c('p', {
    staticClass: "gray",
    attrs: {
      "align": "center"
    }
  }, [_vm._v(" 共 " + _vm._s(_vm.lessonList.length) + " 节课")]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.viewType === 2) ? _c('div', {
    staticClass: "mytbl",
    attrs: {
      "id": "groupLesonListTbl"
    }
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.lessonList), function(l, idx) {
    return _c('tr', [(_vm.isCombineLessonDate) ? [(idx === 0 || (l.lessonDate !== _vm.lessonList[idx - 1].lessonDate)) ? _c('td', {
      staticClass: "center",
      attrs: {
        "rowspan": _vm.lessonDateCntMap[l.lessonDate]
      }
    }, [_c('span', {
      class: {
        'orangered': _vm.today.compareDatePart(l.lessonDate) === 0
      }
    }, [_vm._v(_vm._s(_vm.g.Util.formatDate(l.lessonDate)))]), _vm._v(" "), (_vm.lessonDateCntMap[l.lessonDate] > 1) ? _c('div', {
      staticClass: "lesson-cnt"
    }, [_vm._v("（" + _vm._s(_vm.lessonDateCntMap[l.lessonDate]) + " 节）")]) : _vm._e()]) : _vm._e()] : _c('td', {
      staticClass: "center"
    }, [_c('span', {
      class: {
        'orangered': _vm.today.compareDatePart(l.lessonDate) === 0
      }
    }, [_vm._v(_vm._s(_vm.g.Util.formatDate(l.lessonDate)))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatTime(l.beginTime)) + " ~ " + _vm._s(_vm.g.Util.formatTime(l.endTime)) + " ")]), _vm._v(" "), _c('td', [_c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.viewGroupLessonRecords(l)
        }
      }
    }, [_vm._v(_vm._s(l.lessonTitle))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.coachName.shorten(4)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.groundName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.checkinTime))]), _vm._v(" "), _c('td', [(l.isNeedBooking) ? [(l.bookings) ? [_vm._v(_vm._s(l.bookings))] : _c('span', {
      staticClass: "gray"
    }, [_vm._v("0")])] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.classMemberCnt))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.checkins))]), _vm._v(" "), _c('td', [(l.checkins) ? [(l.isNeedBooking && l.bookings && l.checkins && l.bookings >= l.checkins) ? _c('span', [_vm._v("\n                  " + _vm._s(_vm.g.Util.round(100 * l.checkins / l.bookings)) + "%\n                ")]) : _vm._e(), _vm._v(" "), (!l.isNeedBooking && l.classMemberCnt && l.classMemberCnt >= l.checkins) ? _c('span', [_vm._v("\n                  " + _vm._s(_vm.g.Util.round(100 * l.checkins / l.classMemberCnt)) + "%\n                ")]) : _vm._e()] : _vm._e()], 2), _vm._v(" "), _c('td', [(l.maxStudents) ? [(l.bookings) ? [_vm._v(_vm._s(_vm.g.Util.round(100 * l.bookings / l.maxStudents)) + "%")] : _c('span', {
      staticClass: "gray"
    }, [_vm._v("0")])] : _vm._e()], 2), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [(l.lessonImgCnt) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openLessonImgDlg(l.lessonId)
        }
      }
    }, [_vm._v("照片(" + _vm._s(l.lessonImgCnt) + ")")])]) : _vm._e(), _vm._v(" "), (l.coachCommentCnt) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openLessonCoachCommentDlg(l.lessonId)
        }
      }
    }, [_vm._v("点评(" + _vm._s(l.coachCommentCnt) + ")")])]) : _vm._e(), _vm._v(" "), (l.memberReviewCnt) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openLessonReviewDlg(l.lessonId)
        }
      }
    }, [_vm._v("评价(" + _vm._s(l.memberReviewCnt) + ")")])]) : _vm._e()])])], 2)
  }), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "colspan": "6",
      "align": "center"
    }
  }, [_vm._v("合计：")]), _vm._v(" "), _c('td', {
    staticClass: "bold"
  }, [_vm._v(_vm._s(_vm.sum.bookings))]), _vm._v(" "), _c('td', {
    staticClass: "bold"
  }, [_vm._v(_vm._s(_vm.sum.students))]), _vm._v(" "), _c('td', {
    staticClass: "bold"
  }, [_vm._v(_vm._s(_vm.sum.checkins))]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.sum.avgBookingRates) + "%")]), _vm._v(" "), _c('td')])], 2), _vm._v(" "), (!_vm.lessonCount && !_vm.lessonList) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("暂无数据")]) : _vm._e(), _vm._v(" "), (_vm.lessonCount && _vm.lessonCount > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.lessonCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryLessonList
    }
  })], 1) : _vm._e()]) : _vm._e()]), _vm._v(" "), (_vm.lessonList && _vm.lessonList.length > 20) ? _c('div', {
    staticClass: "center p5",
    attrs: {
      "onclick": "window.scrollTo(0, 0)"
    }
  }, [_c('Icon', {
    staticClass: "pointer gray block",
    attrs: {
      "type": "ios-arrow-up",
      "size": "28"
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "背景色设置",
      "width": "1000",
      "styles": {
        'top': '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.viewBgcolorDlg),
      callback: function($$v) {
        _vm.viewBgcolorDlg = $$v
      },
      expression: "viewBgcolorDlg"
    }
  }, [(_vm.viewBgcolorDlg) ? [_c('coach-lesson-bgcolor-conf', {
    attrs: {
      "after-submit": _vm.afterSubmitBgColor,
      "lesson-type": 1
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })] : _vm._e()], 2), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "上课照片",
      "width": "850",
      "styles": {
        'top': 0
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.dlg.lessonImgView),
      callback: function($$v) {
        _vm.$set(_vm.dlg, "lessonImgView", $$v)
      },
      expression: "dlg.lessonImgView"
    }
  }, [(_vm.dlg.lessonImgView) ? [_c('lesson-img-list', {
    attrs: {
      "lesson-id": _vm.dlg.lessonId
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "center p15"
  }, [_c('i-button', {
    staticClass: "long-btn",
    on: {
      "click": function($event) {
        _vm.dlg.lessonImgView = false
      }
    }
  }, [_vm._v("关闭")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })] : _vm._e()], 2), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "教练点评",
      "width": "850",
      "styles": {
        'top': 0
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.dlg.lessonCoachCommentView),
      callback: function($$v) {
        _vm.$set(_vm.dlg, "lessonCoachCommentView", $$v)
      },
      expression: "dlg.lessonCoachCommentView"
    }
  }, [(_vm.dlg.lessonCoachCommentView) ? [_c('lesson-coach-comment-list', {
    attrs: {
      "lesson-id": _vm.dlg.lessonId
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "center p15"
  }, [_c('i-button', {
    staticClass: "long-btn",
    on: {
      "click": function($event) {
        _vm.dlg.lessonCoachCommentView = false
      }
    }
  }, [_vm._v("关闭")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })] : _vm._e()], 2), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员评价",
      "width": "850",
      "styles": {
        'top': 0
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.dlg.lessonReviewView),
      callback: function($$v) {
        _vm.$set(_vm.dlg, "lessonReviewView", $$v)
      },
      expression: "dlg.lessonReviewView"
    }
  }, [(_vm.dlg.lessonReviewView) ? [_c('lesson-review-list', {
    attrs: {
      "lesson-id": _vm.dlg.lessonId,
      "course-type": 1
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "right p15"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.dlg.lessonReviewView = false
      }
    }
  }, [_vm._v("关闭")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })] : _vm._e()], 2), _vm._v(" "), _c('modal', {
    attrs: {
      "title": _vm.dlg.viewGroupLessonRecordsDlgTitle,
      "width": "1095",
      "styles": {
        top: '10px'
      },
      "ok-text": "",
      "cancel-text": ""
    },
    model: {
      value: (_vm.viewGroupLessonRecordsDlg),
      callback: function($$v) {
        _vm.viewGroupLessonRecordsDlg = $$v
      },
      expression: "viewGroupLessonRecordsDlg"
    }
  }, [(_vm.viewGroupLessonRecordsDlg) ? [_c('group-lesson-records', {
    attrs: {
      "lesson-id": _vm.dlg.lessonId,
      "enableGlCheckout": _vm.enableGlCheckout
    }
  })] : _vm._e(), _vm._v(" "), (_vm.selectLesson) ? _c('div', {
    staticClass: "dlg-foot",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.viewGroupLessonRecordsDlg = false
      }
    }
  }, [_vm._v("关闭")]), _vm._v(" "), (_vm.selectLesson.status === 0 && _vm.courseEditable && (!_vm.selectLesson.bookings && !_vm.selectLesson.checkins)) ? [_c('i-button', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "type": "default"
    },
    on: {
      "click": function($event) {
        return _vm.delLesson(_vm.selectLesson)
      }
    }
  }, [_vm._v("删除本节课")])] : _vm._e()], 2) : _vm._e()], 2), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "导出文件下载",
      "width": "500",
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.exportDlg),
      callback: function($$v) {
        _vm.exportDlg = $$v
      },
      expression: "exportDlg"
    }
  }, [_c('div', {
    staticClass: "export-xls"
  }, [(_vm.exportFileUrl) ? [(_vm.exportFileUrl) ? _c('a', {
    attrs: {
      "href": _vm.exportFileUrl,
      "target": "_blank"
    }
  }, [_vm._v("下载导出文件（xls）")]) : _vm._e()] : _c('span', [_vm._v("正在查询并导出，请稍候...")])], 2)]), _vm._v(" "), _c('modal', {
    staticClass: "export-lesson-table",
    attrs: {
      "title": "团课课表生成",
      "width": "800",
      "ok-text": "关闭",
      "cancel-text": "",
      "styles": {
        top: '10px'
      },
      "mask-closable": false
    },
    model: {
      value: (_vm.exportLessonTableDlg),
      callback: function($$v) {
        _vm.exportLessonTableDlg = $$v
      },
      expression: "exportLessonTableDlg"
    }
  }, [_c('div', [_c('i-form', {
    ref: "lessonRefs",
    staticClass: "myform",
    attrs: {
      "model": _vm.lessonForm,
      "rules": _vm.formRule,
      "label-width": 130
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "bannerPath",
      "label": "课程表背景图"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [(_vm.bgImgUrl) ? _c('div', {
    staticClass: "banner-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.bgImgUrl,
      "alt": ""
    }
  })]) : _vm._e(), _vm._v(" "), _c('a', {
    on: {
      "click": function($event) {
        _vm.setBannerImgDlg = true
      }
    }
  }, [_vm._v("设置背景图")])])]), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "shopName",
      "label": "场馆名称"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": "请输入场馆名称"
    },
    model: {
      value: (_vm.lessonForm.shopName),
      callback: function($$v) {
        _vm.$set(_vm.lessonForm, "shopName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "lessonForm.shopName"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "fontColor",
      "label": "场馆名称字体颜色"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.lessonForm.fontColor),
      expression: "lessonForm.fontColor",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "text-color",
    attrs: {
      "type": "color",
      "placeholder": "请输入场馆名称字体颜色"
    },
    domProps: {
      "value": (_vm.lessonForm.fontColor)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.lessonForm, "fontColor", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "endDate",
      "label": "课表日期"
    }
  }, [_c('DatePicker', {
    staticClass: "input-s",
    attrs: {
      "placeholder": "开始日期",
      "type": "date",
      "format": "yyyy-MM-dd"
    },
    model: {
      value: (_vm.lessonForm.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.lessonForm, "beginDate", $$v)
      },
      expression: "lessonForm.beginDate"
    }
  }), _vm._v(" "), _c('span', [_vm._v(" ~ ")]), _vm._v(" "), _c('DatePicker', {
    staticClass: "input-s",
    attrs: {
      "placeholder": "结束日期",
      "type": "date",
      "format": "yyyy-MM-dd"
    },
    model: {
      value: (_vm.lessonForm.endDate),
      callback: function($$v) {
        _vm.$set(_vm.lessonForm, "endDate", $$v)
      },
      expression: "lessonForm.endDate"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "remark",
      "label": "课表备注"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "placeholder": "请输入备注内容（选填）",
      "rows": 5
    },
    model: {
      value: (_vm.lessonForm.remark),
      callback: function($$v) {
        _vm.$set(_vm.lessonForm, "remark", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "lessonForm.remark"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "qrcodePath",
      "label": "二维码"
    }
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadQrcodeSuccess,
      "max-size": _vm.imgUpload.maxSize,
      "show-thumb": false
    }
  }, [_c('i-button', {
    attrs: {
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传二维码")]), _vm._v(" "), _c('help', [_vm._v("注意：如果不上传，默认为门店微官网二维码")])], 1), _vm._v(" "), (_vm.qrcodeUrl) ? _c('div', {
    staticClass: "qrcode-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.qrcodeUrl,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "close",
    on: {
      "click": _vm.clearQrImg
    }
  }, [_c('icon', {
    attrs: {
      "type": "ios-close-empty"
    }
  })], 1)]) : _vm._e()], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "skin",
      "label": "课表皮肤"
    }
  }, [(_vm.lessonForm.skin) ? [_c('div', {
    staticClass: "skin-name"
  }, [_vm._v(_vm._s(_vm.skinName))]), _vm._v(" "), _c('div', {
    staticClass: "skin",
    style: ({
      'background-color': _vm.skinColor
    })
  })] : _vm._e(), _vm._v(" "), _c('a', {
    on: {
      "click": function($event) {
        _vm.skinDlg = true
      }
    }
  }, [_vm._v("选择皮肤")]), _vm._v("\n           \n          "), (_vm.lessonForm.skin) ? _c('a', {
    on: {
      "click": _vm.clearSkin
    }
  }, [_vm._v("清除")]) : _vm._e()], 2), _vm._v(" "), _c('form-item', {
    staticClass: "filter-course",
    attrs: {
      "label": "课程过滤"
    }
  }, [_c('Checkbox', {
    model: {
      value: (_vm.enableCourseFilter),
      callback: function($$v) {
        _vm.enableCourseFilter = $$v
      },
      expression: "enableCourseFilter"
    }
  }), _vm._v(" "), (_vm.enableCourseFilter) ? _c('i-select', {
    attrs: {
      "multiple": ""
    },
    model: {
      value: (_vm.courseIdList),
      callback: function($$v) {
        _vm.courseIdList = $$v
      },
      expression: "courseIdList"
    }
  }, _vm._l((_vm.courseList), function(c) {
    return _c('i-option', {
      key: c.courseId,
      attrs: {
        "label": c.courseName,
        "value": c.courseId
      }
    })
  }), 1) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-submit",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.createPic
    }
  }, [_vm._v("生成图片")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.exportLessonTableDlg = false
      }
    }
  }, [_vm._v("取消")])], 1)]), _vm._v(" "), _c('modal', {
    staticClass: "set-banner-img-dlg",
    attrs: {
      "title": "背景图设置",
      "width": "960",
      "ok-text": "关闭",
      "cancel-text": "",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.setBannerImgDlg),
      callback: function($$v) {
        _vm.setBannerImgDlg = $$v
      },
      expression: "setBannerImgDlg"
    }
  }, [_c('RadioGroup', {
    staticStyle: {
      "padding-left": "10px"
    },
    model: {
      value: (_vm.bgType),
      callback: function($$v) {
        _vm.bgType = $$v
      },
      expression: "bgType"
    }
  }, [_c('Radio', {
    attrs: {
      "label": "1"
    }
  }, [_c('span', [_vm._v("系统默认背景图")])]), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": "2"
    }
  }, [_c('span', [_vm._v("自定义上传背景图片")]), _vm._v(" "), _c('help', [_c('div', [_vm._v("1.请在自定义背景图上自行设计您的场馆名称")]), _vm._v(" "), _c('div', [_vm._v("2.建议背景图宽度为1000像素")])])], 1)], 1), _vm._v(" "), (_vm.bgType == 1) ? _c('ul', {
    staticClass: "banner-list"
  }, _vm._l((_vm.BG_IMG_CNT), function(n, idx) {
    return _c('li', {
      key: idx,
      staticClass: "banner-li",
      on: {
        "click": function($event) {
          return _vm.chooseBgImg(n)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": _vm.g.Conf.IMG_LIB_URL + '/course-table-bg/' + n + '.png'
      }
    })])
  }), 0) : _c('div', {
    staticClass: "customize-bg-img"
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccess,
      "max-size": _vm.imgUpload.maxSize,
      "show-thumb": false
    }
  }, [_c('i-button', {
    attrs: {
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传背景图")])], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 1), _vm._v(" "), _c('modal', {
    staticClass: "set-skin-dlg",
    attrs: {
      "title": "背景图设置",
      "width": "392",
      "ok-text": "关闭",
      "cancel-text": "",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.skinDlg),
      callback: function($$v) {
        _vm.skinDlg = $$v
      },
      expression: "skinDlg"
    }
  }, [_c('div', {
    staticClass: "skin-list"
  }, _vm._l((_vm.tableSkin), function(s, idx) {
    return _c('div', {
      key: idx,
      staticClass: "skin-li",
      style: ({
        background: s.bgColor
      }),
      on: {
        "click": function($event) {
          return _vm.clickSkin(s)
        }
      }
    })
  }), 0), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    staticClass: "lesson-table-img-dlg",
    attrs: {
      "title": "课表图片(右键保存)",
      "width": "900",
      "ok-text": "关闭",
      "cancel-text": "",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.successImgDlg),
      callback: function($$v) {
        _vm.successImgDlg = $$v
      },
      expression: "successImgDlg"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.successImg,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("日期")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "105"
    }
  }, [_vm._v("上课时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "160"
    }
  }, [_vm._v("课程")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("教练")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("场地")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "145"
    }
  }, [_vm._v("教练签到时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("预约数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("固定学员")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("签到数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "82"
    }
  }, [_vm._v("出勤率 "), _c('a', {
    staticClass: "th-help",
    attrs: {
      "title": "出勤率（固定班级）= 签到人数 / 固定班级课学员数， 出勤率（预约课） = 签到数 / 预约数"
    }
  }, [_vm._v("?")])]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "82"
    }
  }, [_vm._v("满员率 "), _c('a', {
    staticClass: "th-help",
    attrs: {
      "title": "满员率 = 已预约数 / 最多预约人数"
    }
  }, [_vm._v("?")])]), _vm._v(" "), _c('th', [_vm._v("其他")])])
}]}

/***/ }),

/***/ 2392:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "cust-private-lesson"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main -s-"
  }, [_c('section', {
    staticClass: "query-section"
  }, [_c('ul', {
    staticClass: "query-cond-inline"
  }, [_c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "filterable": "",
      "clearable": "",
      "placeholder": "请选择教练"
    },
    model: {
      value: (_vm.query.coachId),
      callback: function($$v) {
        _vm.$set(_vm.query, "coachId", $$v)
      },
      expression: "query.coachId"
    }
  }, _vm._l((_vm.coachList), function(c) {
    return _c('i-option', {
      key: c.staffId,
      attrs: {
        "value": c.staffId
      }
    }, [_vm._v(_vm._s(c.name))])
  }), 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('date-picker', {
    staticClass: "date-input",
    attrs: {
      "type": "date",
      "placeholder": "上课开始日期"
    },
    model: {
      value: (_vm.query.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.query, "beginDate", $$v)
      },
      expression: "query.beginDate"
    }
  }), _vm._v("\n\t\t\t\t\t ~\n\t\t\t\t\t "), _c('date-picker', {
    staticClass: "date-input",
    attrs: {
      "type": "date",
      "placeholder": "上课结束日期"
    },
    model: {
      value: (_vm.query.endDate),
      callback: function($$v) {
        _vm.$set(_vm.query, "endDate", $$v)
      },
      expression: "query.endDate"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "placeholder": "状态",
      "clearable": ""
    },
    model: {
      value: (_vm.query.status),
      callback: function($$v) {
        _vm.$set(_vm.query, "status", $$v)
      },
      expression: "query.status"
    }
  }, [_c('i-option', {
    key: 1,
    attrs: {
      "value": 1
    }
  }, [_vm._v("已预约")]), _vm._v(" "), _c('i-option', {
    key: 2,
    attrs: {
      "value": 2
    }
  }, [_vm._v("已签到")])], 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('input-int', {
    staticStyle: {
      "width": "110px"
    },
    attrs: {
      "placeholder": "请输入客户手机号"
    },
    model: {
      value: (_vm.query.custPhone),
      callback: function($$v) {
        _vm.$set(_vm.query, "custPhone", $$v)
      },
      expression: "query.custPhone"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item opt-btns"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.queryCustPcLesson(null)
      }
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.resetQuery
    }
  }, [_vm._v("重置")])], 1)])]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "tbl-header"
  }, [_c('div', {
    staticClass: "l"
  }, [_c('i-button', {
    attrs: {
      "disabled": !_vm.editable,
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": _vm.openCplDlgForCreate
    }
  }, [_vm._v("预约体验课")])], 1), _vm._v(" "), (_vm.totalCount) ? _c('div', {
    staticClass: "r"
  }, [_vm._v("\n\t\t\t\t\t查询到 " + _vm._s(_vm.totalCount) + " 节记录\n\t\t\t\t\t"), (_vm.stat.convertRate) ? [_c('span', {
    staticClass: "spt"
  }, [_vm._v(" | ")]), _vm._v(" "), _c('b', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.stat.custCount))]), _vm._v(" 个体验客户 "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("/")]), _vm._v("\n\t\t\t\t\t\t已转化 "), _c('b', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.stat.memberCount))]), _vm._v(" 个会员\n\t\t\t\t\t\t"), _c('span', {
    staticClass: "spt"
  }, [_vm._v("/")]), _vm._v("\n\t\t\t\t\t\t转化率 "), _c('b', {
    staticClass: "orangered big"
  }, [_vm._v(_vm._s(_vm.g.Util.round(_vm.stat.convertRate * 100)) + "%")])] : _vm._e()], 2) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.custPcLessonList), function(l, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(l.courseName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.coachName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(l.lessonDate)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatTime(l.beginTime)) + " ~ " + _vm._s(_vm.g.Util.formatTime(l.endTime)))]), _vm._v(" "), _c('td', [(l.memberId) ? [_c('a', {
      staticClass: "block",
      attrs: {
        "title": "已转化为会员"
      },
      on: {
        "click": function($event) {
          return _vm.viewMemberBase(l.memberId)
        }
      }
    }, [_vm._v(_vm._s(l.custName))])] : [_vm._v(_vm._s(l.custName))]], 2), _vm._v(" "), _c('td', [(l.status === 0) ? _c('span', {
      staticClass: "green"
    }, [_vm._v("已预约")]) : (l.status === 9) ? _c('span', [_vm._v("已签到")]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.checkinTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.custRemark) + "\n\t\t\t\t\t\t\t"), (l.status === 9) ? _c('div', {
      class: {
        'p10': l.custRemark
      }
    }, [_c('a', {
      on: {
        "click": function($event) {
          return _vm.viewCpl(l.cplId)
        }
      }
    }, [_vm._v("查看上课点评")])]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createTime))]), _vm._v(" "), _c('td', [(_vm.editable && l.status === 0) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openCplDlgForEdit(l.cplId)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delCpl(idx)
        }
      }
    }, [_vm._v("删除")])])]) : _vm._e()])])
  })], 2)]), _vm._v(" "), (_vm.totalCount && _vm.totalCount > _vm.g.Conf.PAGE_SIZE) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.totalCount,
      "page-size": _vm.g.Conf.PAGE_SIZE,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryCustPcLesson
    }
  })], 1) : _vm._e(), _vm._v(" "), (!_vm.totalCount) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("暂无数据")]) : _vm._e()])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "预约私教体验课",
      "width": "930",
      "styles": {
        top: '10px'
      },
      "mask-closable": false
    },
    model: {
      value: (_vm.bookingDlg),
      callback: function($$v) {
        _vm.bookingDlg = $$v
      },
      expression: "bookingDlg"
    }
  }, [(_vm.bookingDlg) ? [_c('cust-private-lesson-booking', {
    attrs: {
      "after-submit": _vm.afterSubmitBooking,
      "cpl-id": _vm.selectCplId
    }
  })] : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 2), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "教练上课点评",
      "width": "700",
      "styles": {
        top: '10px'
      },
      "cancelText": "",
      "okText": "关闭"
    },
    model: {
      value: (_vm.cplDlg),
      callback: function($$v) {
        _vm.cplDlg = $$v
      },
      expression: "cplDlg"
    }
  }, [(_vm.cplDlg && _vm.selectCpl) ? _c('div', [_c('div', {
    staticClass: "comment"
  }, [_c('pre', [_vm._v(_vm._s(_vm.selectCpl.coachComment))])])]) : _vm._e()]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员基本信息",
      "width": "800",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.viewMemberDlg),
      callback: function($$v) {
        _vm.viewMemberDlg = $$v
      },
      expression: "viewMemberDlg"
    }
  }, [(_vm.viewMemberDlg) ? _c('member-base-info', {
    attrs: {
      "member-id": _vm.viewMemberId
    }
  }) : _vm._e()], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("课程")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("教练")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("上课日期")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "105"
    }
  }, [_vm._v("上课时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("客户")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("状态")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "145"
    }
  }, [_vm._v("签到时间")]), _vm._v(" "), _c('th', [_vm._v("备注")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("创建人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "145"
    }
  }, [_vm._v("创建时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "95"
    }
  }, [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2396:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "lesson-tbl"
  }, [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "private-lesson"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', {
    staticClass: "query-section"
  }, [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', [_c('ul', {
    staticClass: "query-cond-inline"
  }, [_c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "placeholder": "请选择课程",
      "filterable": "",
      "clearable": ""
    },
    model: {
      value: (_vm.query.courseId),
      callback: function($$v) {
        _vm.$set(_vm.query, "courseId", $$v)
      },
      expression: "query.courseId"
    }
  }, _vm._l((_vm.courseList), function(c) {
    return _c('i-option', {
      key: c.courseId,
      attrs: {
        "value": c.courseId
      }
    }, [_vm._v(_vm._s(c.courseName))])
  }), 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "110px"
    },
    attrs: {
      "filterable": "",
      "placeholder": "请选择教练",
      "clearable": ""
    },
    model: {
      value: (_vm.query.coachId),
      callback: function($$v) {
        _vm.$set(_vm.query, "coachId", $$v)
      },
      expression: "query.coachId"
    }
  }, _vm._l((_vm.coachList), function(c) {
    return _c('i-option', {
      key: c.staffId,
      attrs: {
        "value": c.staffId
      }
    }, [_vm._v(_vm._s(c.name))])
  }), 1)], 1), _vm._v(" "), (_vm.departmentList && _vm.departmentList.length) ? _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "placeholder": "请选择部门",
      "clearable": ""
    },
    model: {
      value: (_vm.query.deptId),
      callback: function($$v) {
        _vm.$set(_vm.query, "deptId", $$v)
      },
      expression: "query.deptId"
    }
  }, _vm._l((_vm.departmentList), function(d) {
    return _c('i-option', {
      key: d.sdId,
      attrs: {
        "value": d.sdId
      }
    }, [_vm._v(_vm._s(d.deptName))])
  }), 1)], 1) : _vm._e(), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "85px"
    },
    attrs: {
      "placeholder": "上课状态",
      "clearable": ""
    },
    model: {
      value: (_vm.query.isFinishedPl),
      callback: function($$v) {
        _vm.$set(_vm.query, "isFinishedPl", $$v)
      },
      expression: "query.isFinishedPl"
    }
  }, [_c('i-option', {
    attrs: {
      "value": "false"
    }
  }, [_vm._v("未结束")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": "true"
    }
  }, [_vm._v("已结束")])], 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "130px"
    },
    attrs: {
      "placeholder": "上课场地",
      "clearable": ""
    },
    model: {
      value: (_vm.query.groundId),
      callback: function($$v) {
        _vm.$set(_vm.query, "groundId", $$v)
      },
      expression: "query.groundId"
    }
  }, _vm._l((_vm.groundList), function(g) {
    return _c('i-option', {
      key: g.groundId,
      attrs: {
        "value": g.groundId
      }
    }, [_vm._v(_vm._s(g.groundName))])
  }), 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-input', {
    staticStyle: {
      "width": "120px"
    },
    attrs: {
      "type": "text",
      "placeholder": "请选择会员",
      "clearable": true
    },
    on: {
      "on-focus": _vm.openSelectMember
    },
    model: {
      value: (_vm.memberName),
      callback: function($$v) {
        _vm.memberName = $$v
      },
      expression: "memberName"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.queryPcLessonList()
      }
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.resetQuery
    }
  }, [_vm._v("重置")])], 1)])]), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right"
    }
  }, [_c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/private-lesson-cancel-log')
      }
    }
  }, [_vm._v("私教课取消日志 →")])])])])]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "tbl-header"
  }, [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', {
    attrs: {
      "width": "330"
    }
  }, [_c('button-group', [_c('i-button', {
    class: {
      '-checked-btn': _vm.query.dateType === 'week'
    },
    staticStyle: {
      "margin-right": "0"
    },
    on: {
      "click": _vm.queryByWeek
    }
  }, [_vm._v("周")]), _vm._v(" "), _c('i-button', {
    class: {
      '-checked-btn': _vm.query.dateType === 'month'
    },
    on: {
      "click": _vm.queryByMonth
    }
  }, [_vm._v("月")])], 1), _vm._v(" "), _c('span', {
    staticClass: "l10"
  }, [_c('i-select', {
    staticStyle: {
      "width": "110px"
    },
    on: {
      "on-change": _vm.changeViewType
    },
    model: {
      value: (_vm.viewType),
      callback: function($$v) {
        _vm.viewType = $$v
      },
      expression: "viewType"
    }
  }, [_c('i-option', {
    attrs: {
      "value": "default"
    }
  }, [_vm._v("默认方式显示")]), _vm._v(" "), _c('i-option', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.query.dateType === 'week'),
      expression: "query.dateType === 'week'"
    }],
    attrs: {
      "value": "simpleCalendar"
    }
  }, [_vm._v("简洁日历显示")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": "list"
    }
  }, [_vm._v("列表方式显示")])], 1)], 1)], 1), _vm._v(" "), _c('td', {
    attrs: {
      "align": "center"
    }
  }, [(_vm.query.dateType === 'week') ? _c('span', {
    staticClass: "-qdate-nav"
  }, [_c('a', {
    on: {
      "click": function($event) {
        return _vm.weekNavQuery('pre')
      }
    }
  }, [_c('icon', {
    staticClass: "left",
    attrs: {
      "type": "ios-arrow-back"
    }
  }), _vm._v("上一周\n                ")], 1)]) : _vm._e(), _vm._v(" "), (_vm.query.dateType === 'month') ? _c('span', {
    staticClass: "-qdate-nav"
  }, [_c('a', {
    on: {
      "click": function($event) {
        return _vm.monthNav('pre')
      }
    }
  }, [_c('icon', {
    staticClass: "left",
    attrs: {
      "type": "ios-arrow-back"
    }
  }), _vm._v("上一月\n                ")], 1)]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "-date-tit"
  }, [_vm._v(_vm._s(_vm.query.dateDesc)), (_vm.query.isDelayedBooking) ? _c('span', {
    staticClass: "red big"
  }, [_vm._v("（补约）")]) : _vm._e()]), _vm._v(" "), (_vm.query.dateType === 'week') ? _c('span', {
    staticClass: "-qdate-nav"
  }, [_c('a', {
    on: {
      "click": function($event) {
        return _vm.weekNavQuery('next')
      }
    }
  }, [_vm._v("下一周"), _c('icon', {
    staticClass: "right",
    attrs: {
      "type": "ios-arrow-forward"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), (_vm.query.dateType === 'month') ? _c('span', {
    staticClass: "-qdate-nav"
  }, [_c('a', {
    on: {
      "click": function($event) {
        return _vm.monthNav('next')
      }
    }
  }, [_vm._v("下一月"), _c('icon', {
    staticClass: "right",
    attrs: {
      "type": "ios-arrow-forward"
    }
  })], 1)]) : _vm._e()]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "330",
      "align": "right"
    }
  }, [_c('ul', {
    staticClass: "opt-bar"
  }, [(_vm.isMemberAgent) ? _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.bookingPcDlg = true
      }
    }
  }, [_vm._v("代约私教课")])], 1) : _vm._e(), _vm._v(" "), (_vm.courseEditable && _vm.viewType === 'default' && _vm.query.dateType === 'week') ? _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.viewBgcolorDlg = true
      }
    }
  }, [_vm._v("设置背景色")])], 1) : _vm._e(), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('Dropdown', {
    attrs: {
      "placement": "bottom-end",
      "trigger": "hover"
    },
    on: {
      "on-click": _vm.changeMoreOpts
    }
  }, [_c('i-button', [_vm._v("\n                      更多 "), _c('Icon', {
    attrs: {
      "type": "ios-arrow-down"
    }
  })], 1), _vm._v(" "), _c('DropdownMenu', {
    attrs: {
      "slot": "list"
    },
    slot: "list"
  }, [_c('DropdownItem', {
    attrs: {
      "name": "db"
    }
  }, [_c('checkbox', {
    staticStyle: {
      "margin-right": "0"
    },
    attrs: {
      "title": "预约时间在上课时间之后"
    },
    on: {
      "on-change": _vm.filterDelayedBooking
    },
    model: {
      value: (_vm.query.isDelayedBooking),
      callback: function($$v) {
        _vm.$set(_vm.query, "isDelayedBooking", $$v)
      },
      expression: "query.isDelayedBooking"
    }
  }, [_vm._v("补约记录")])], 1), _vm._v(" "), _c('DropdownItem', {
    attrs: {
      "name": "print"
    }
  }, [_vm._v("打印课表")]), _vm._v(" "), _c('DropdownItem', {
    attrs: {
      "name": "export"
    }
  }, [_vm._v("导出课表")]), _vm._v(" "), (_vm.courseEditable && _vm.viewType === 'list') ? [(!_vm.showCancelOpt) ? _c('DropdownItem', {
    attrs: {
      "name": "showCancelOpt"
    }
  }, [_vm._v("显示批量取消")]) : _vm._e(), _vm._v(" "), (_vm.showCancelOpt) ? _c('DropdownItem', {
    attrs: {
      "name": "batchCancel"
    }
  }, [_vm._v("取消预约")]) : _vm._e()] : _vm._e()], 2)], 1)], 1)])])])])]), _vm._v(" "), (_vm.viewType === 'list') ? _c('div', {
    staticClass: "mytbl",
    attrs: {
      "id": "privateLesonTblForList"
    }
  }, [_c('table', {
    staticClass: "inner-tbl",
    attrs: {
      "id": "privateLesonTblContForList"
    }
  }, [_c('tr', [(_vm.showCancelOpt) ? _c('th', {
    attrs: {
      "width": "28"
    }
  }, [_vm._v("选择")]) : _vm._e(), _vm._v(" "), _c('th', [_vm._v("课程")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "185"
    }
  }, [_vm._v("上课时间 "), (_vm.query.dateType === 'week') ? [_vm._v("（" + _vm._s(_vm.weekDates[0].format('M/d')) + " ~ " + _vm._s(_vm.weekDates[6].format('M/d')) + "）")] : _vm._e()], 2), _vm._v(" "), (_vm.hasGroundInLessons) ? _c('th', [_vm._v("上课场地")]) : _vm._e(), _vm._v(" "), _c('th', [_vm._v("教练")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("状态")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("学员")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("预约人")]), _vm._v(" "), _c('th', [_vm._v("预约时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("签到人")]), _vm._v(" "), _c('th', [_vm._v("签到时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("操作")])]), _vm._v(" "), _vm._l((_vm.pcLessonList), function(l, idx) {
    return _c('tr', {
      key: idx
    }, [(_vm.showCancelOpt) ? _c('td', {
      staticClass: "ckbox"
    }, [_c('checkbox', {
      model: {
        value: (_vm.mplCkList[idx]),
        callback: function($$v) {
          _vm.$set(_vm.mplCkList, idx, $$v)
        },
        expression: "mplCkList[idx]"
      }
    })], 1) : _vm._e(), _vm._v(" "), ((_vm.isShowTd = (_vm.lessonCntStatMap[l.lessonId] === 1 || (_vm.lessonCntStatMap[l.lessonId] > 1 && (idx === 0 || _vm.pcLessonList[idx - 1].lessonId !== l.lessonId))))) ? _c('td', {
      attrs: {
        "rowspan": _vm.lessonCntStatMap[l.lessonId]
      }
    }, [(l.ltype === 1) ? _c('a', {
      staticClass: "block",
      attrs: {
        "target": "_blank",
        "href": '#/private-lesson-edit/{0}/{1}'.format(l.lessonId, l.mplId)
      }
    }, [_vm._v(_vm._s(l.courseName))]) : [_vm._v(_vm._s(l.courseName))]], 2) : _vm._e(), _vm._v(" "), (_vm.isShowTd) ? _c('td', {
      attrs: {
        "rowspan": _vm.lessonCntStatMap[l.lessonId]
      }
    }, [_vm._v("\n              " + _vm._s(_vm.g.Util.formatDate(l.lessonDate)) + "   " + _vm._s(_vm.g.Util.formatTime(l.beginTime)) + " ~ " + _vm._s(_vm.g.Util.formatTime(l.endTime)) + "\n              "), (_vm.lessonCntStatMap[l.lessonId] > 1) ? _c('div', {
      staticClass: "gray center p10"
    }, [_vm._v("（ " + _vm._s(_vm.lessonCntStatMap[l.lessonId]) + "个学员 ）")]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.hasGroundInLessons && _vm.isShowTd) ? _c('td', {
      attrs: {
        "rowspan": _vm.lessonCntStatMap[l.lessonId]
      }
    }, [_vm._v("\n              " + _vm._s(l.groundName) + "\n            ")]) : _vm._e(), _vm._v(" "), (_vm.isShowTd) ? _c('td', {
      attrs: {
        "rowspan": _vm.lessonCntStatMap[l.lessonId]
      }
    }, [_vm._v("\n              " + _vm._s(l.coachName) + "\n            ")]) : _vm._e(), _vm._v(" "), (_vm.isShowTd) ? _c('td', {
      attrs: {
        "rowspan": _vm.lessonCntStatMap[l.lessonId]
      }
    }, [(l.status == 9) ? _c('span', {
      staticClass: "end"
    }, [_c('Icon', {
      attrs: {
        "type": "md-checkmark"
      }
    }), _vm._v("已结束\n              ")], 1) : [_c('span', {
      staticClass: "not-end"
    }, [_vm._v("●")]), _vm._v("未结束")]], 2) : _vm._e(), _vm._v(" "), _c('td', [(l.ltype === 1) ? _c('a', {
      staticClass: "block",
      attrs: {
        "title": l.memberName
      },
      on: {
        "click": function($event) {
          return _vm.viewMember(l.memberId)
        }
      }
    }, [_vm._v(_vm._s(l.rawMemberName))]) : [_c('span', {
      staticClass: "custflag"
    }, [_vm._v("客")]), _vm._v(_vm._s(l.rawMemberName))]], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createTime))]), _vm._v(" "), _c('td', {
      class: {
        orange: l.checkinUname && (l.rawMemberName !== l.checkinUname)
      }
    }, [_vm._v(_vm._s(l.checkinUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.checkinTime))]), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opts"
    }, [(_vm.plCheckinPermit && !l.checkinTime && l.canCheckin) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.checkinPcLesson(l, idx)
        }
      }
    }, [_vm._v("代签到")])]) : _vm._e(), _vm._v(" "), (l.mplPics) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.shopMplPics(l.mplPics)
        }
      }
    }, [_vm._v("查看照片")])]) : _vm._e()])])])
  })], 2)]) : ((_vm.query.dateType === 'month') || _vm.viewType == 'simpleCalendar') ? _c('div', {
    staticClass: "mytbl",
    attrs: {
      "id": "privateLesonTblWithSimple"
    }
  }, [_c('table', {
    staticClass: "-lessons",
    attrs: {
      "id": "privateLesonTblContWithSimple"
    }
  }, [_c('tr', _vm._l((['一', '二', '三', '四', '五', '六', '日']), function(w, idx) {
    return _c('th', {
      attrs: {
        "width": "14%"
      }
    }, [_vm._v("\n              星期" + _vm._s(w) + "\n            ")])
  }), 0), _vm._v(" "), _vm._l((_vm.lessonRowList), function(rows, i) {
    return _c('tr', _vm._l(([1, 2, 3, 4, 5, 6, 7]), function(j) {
      return _c('td', [(rows[j]) ? [_c('div', {
        class: {
          'day': true,
          'on': _vm.todayStr === rows[j].date.format('yyyyMMdd')
        }
      }, [_vm._v(_vm._s(rows[j].date.getDate()))]), _vm._v(" "), (rows[j].lessons && rows[j].lessons.length > 0) ? _c('ul', _vm._l((rows[j].lessons), function(l) {
        return _c('li', {
          class: 'l-status-' + l.status,
          attrs: {
            "title": '上课时间：' + l.beginTime + ' - ' + l.endTime + (l.groudName ? ' @' + l.groudName : '')
          },
          on: {
            "click": function($event) {
              return _vm.toLessonPage(l.ltype, l.lessonId, l.mplId)
            }
          }
        }, [_vm._v("\n                    " + _vm._s(l.beginTime) + "  " + _vm._s(l.courseName)), _c('span', {
          staticClass: "coach"
        }, [_vm._v("（" + _vm._s(l.coachName) + " →\n                      " + _vm._s(l.memberName)), (l.ltype === 2) ? _c('span', {
          staticClass: "custflag"
        }, [_vm._v("客")]) : _vm._e(), _vm._v("）")])])
      }), 0) : _vm._e()] : _vm._e()], 2)
    }), 0)
  })], 2)]) : (_vm.query.dateType === 'week' && _vm.viewType === 'default') ? _c('div', {
    staticClass: "mytbl",
    attrs: {
      "id": "privateLesonTbl"
    }
  }, [_c('table', {
    staticClass: "week-tbl",
    attrs: {
      "id": "privateLesonTblCont"
    }
  }, [_c('tr', [_c('th', {
    staticClass: "col-time"
  }), _vm._v(" "), _vm._l((['一', '二', '三', '四', '五', '六', '日']), function(w, idx) {
    return _c('th', {
      staticClass: "week",
      class: {
        on: _vm.weekDates[idx].compareDatePart(_vm.today) === 0
      }
    }, [_vm._v("\n              星期" + _vm._s(w) + " "), _c('span', [_vm._v("（" + _vm._s(_vm.weekDates[idx].format('M/dd')) + "）")])])
  })], 2), _vm._v(" "), _vm._l((_vm.beginTimes), function(bt) {
    return _c('tr', [_c('td', {
      staticClass: "col-time"
    }, [_vm._v(_vm._s(bt))]), _vm._v(" "), _vm._l(([1, 2, 3, 4, 5, 6, 0]), function(w) {
      return _c('td', {
        staticClass: "week"
      }, [(_vm.lessonMap[bt][w]) ? _c('ul', _vm._l((_vm.lessonMap[bt][w]), function(l) {
        return _c('li', {
          style: ({
            background: '#' + _vm.bgColorMap[_vm.bgColorType === 1 ? l.coachId : l.courseId],
            color: '#' + _vm.textColorMap[_vm.bgColorType === 1 ? l.coachId : l.courseId]
          }),
          attrs: {
            "title": '预约人/预约时间：' + l.createUname + ' / ' + l.createTime
          },
          on: {
            "click": function($event) {
              return _vm.toLessonPage(l.ltype, l.lessonId, l.mplId)
            }
          }
        }, [_c('div', [_vm._v(_vm._s(l.coachName.shorten(8)))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(l.courseName))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(bt) + " ~ " + _vm._s(_vm.g.Util.formatTime(l.endTime)))]), _vm._v(" "), (l.groundName) ? _c('div', [_vm._v("@ " + _vm._s(l.groundName))]) : _vm._e(), _vm._v(" "), _vm._l((l.memberNames), function(mname) {
          return _c('div', [_c('i', {
            staticClass: "iconfont memb icon-people1"
          }), _vm._v(" " + _vm._s(mname) + "\n                  ")])
        })], 2)
      }), 0) : _vm._e()])
    })], 2)
  }), _vm._v(" "), (_vm.beginTimes.length > 5) ? _c('tr', [_c('th', {
    staticClass: "col-time"
  }), _vm._v(" "), _vm._l((['一', '二', '三', '四', '五', '六', '日']), function(w, idx) {
    return _c('th', {
      staticClass: "week",
      class: {
        on: _vm.weekDates[idx].compareDatePart(_vm.today) === 0
      }
    }, [_vm._v("\n              星期" + _vm._s(w) + " （" + _vm._s(_vm.weekDates[idx].format('M/dd')) + "）\n            ")])
  })], 2) : _vm._e()], 2)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "tbl-footer"
  }, [_c('div', {
    staticClass: "center"
  }, [_vm._v("共 " + _vm._s(_vm.lessonCount) + " 节课")])])])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "代约私教课",
      "width": "930",
      "styles": {
        top: '10px'
      },
      "mask-closable": false
    },
    model: {
      value: (_vm.bookingPcDlg),
      callback: function($$v) {
        _vm.bookingPcDlg = $$v
      },
      expression: "bookingPcDlg"
    }
  }, [(_vm.bookingPcDlg) ? _c('private-lesson-booking', {
    attrs: {
      "after-submit": _vm.afterSubmitBooking
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "背景色设置",
      "width": "1000",
      "styles": {
        'top': '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.viewBgcolorDlg),
      callback: function($$v) {
        _vm.viewBgcolorDlg = $$v
      },
      expression: "viewBgcolorDlg"
    }
  }, [(_vm.viewBgcolorDlg) ? [_c('coach-lesson-bgcolor-conf', {
    attrs: {
      "after-submit": _vm.afterSubmitBgColor,
      "lesson-type": 2
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })] : _vm._e()], 2), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员基本信息",
      "width": "800",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.viewMemberDlg),
      callback: function($$v) {
        _vm.viewMemberDlg = $$v
      },
      expression: "viewMemberDlg"
    }
  }, [(_vm.viewMemberDlg) ? _c('member-base-info', {
    attrs: {
      "member-id": _vm.selectMemberId
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员查询与选择",
      "width": "700",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.memberSelectDlgForQuery),
      callback: function($$v) {
        _vm.memberSelectDlgForQuery = $$v
      },
      expression: "memberSelectDlgForQuery"
    }
  }, [(_vm.memberSelectDlgForQuery) ? _c('member-select', {
    attrs: {
      "after-select": _vm.afterSelectMemberForQuery
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "上课照片",
      "width": "900",
      "ok-text": "关闭",
      "cancel-text": "",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.mplPicsDlg),
      callback: function($$v) {
        _vm.mplPicsDlg = $$v
      },
      expression: "mplPicsDlg"
    }
  }, _vm._l((_vm.mplPicList), function(p) {
    return _c('div', [_c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(p),
        "width": "850"
      }
    })])
  }), 0)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2399:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "lesson-review"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), (_vm.g.data.user.isShopOwner) ? _c('div', {
    staticClass: "review-list"
  }, [_c('lesson-review-list', {
    attrs: {
      "courseType": 2
    }
  })], 1) : _c('section', {
    staticClass: "no-data"
  }, [_c('span', {
    staticClass: "orange"
  }, [_vm._v("仅店长有权限查看")])])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2401:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "private-lesson"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "title": "私教课时",
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), (_vm.hasViewPermit) ? [_c('lesson-review-list', {
    attrs: {
      "lesson-id": _vm.lessonId,
      "course-type": 2
    }
  })] : _c('section', [_c('p', {
    staticClass: "red",
    attrs: {
      "align": "center"
    }
  }, [_vm._v("只有店长有权限查看私教课时评价")])])], 2)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2408:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "gbb"
  }, [_c('section', [_c('div', {
    staticClass: "tbl-header"
  }, [(_vm.editable) ? _c('i-button', {
    attrs: {
      "icon": "md-add",
      "type": "primary"
    },
    on: {
      "click": _vm.openCreateDlg
    }
  }, [_vm._v("添加黑名单")]) : _c('span', {
    staticClass: "orangered"
  }, [_vm._v("您没有权限操作，仅店长可操作")])], 1), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.gbbList), function(r, idx) {
    return _c('tr', [_c('td', [(_vm.editable) ? _c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.viewMember(r.memberId)
        }
      }
    }, [_vm._v(_vm._s(r.memberName))]) : [_vm._v(_vm._s(r.memberName))]], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(r.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(r.endDate)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.remark))]), _vm._v(" "), _c('td', [(r.createUid) ? [_vm._v(_vm._s(r.createUname))] : _c('i', {
      staticClass: "gray"
    }, [_vm._v("系统")])], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.createTime))]), _vm._v(" "), _c('td', [(_vm.editable) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openEditDlg(idx)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delGlBookingBlacklist(idx)
        }
      }
    }, [_vm._v("删除")])])]) : _vm._e()])])
  })], 2), _vm._v(" "), (_vm.gbbCount && _vm.gbbCount > 0) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.gbbCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryGlBookingBlacklist
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.gbbList && !_vm.gbbList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "预约黑名单编辑",
      "width": "700",
      "mask-closable": false,
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.editDlg),
      callback: function($$v) {
        _vm.editDlg = $$v
      },
      expression: "editDlg"
    }
  }, [_c('div', {
    staticClass: "tblform"
  }, [_c('table', {
    attrs: {
      "width": "600"
    }
  }, [_c('tr', [_c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("禁用会员")]), _vm._v(" "), _c('td', [(_vm.gbb.gbbId) ? [_c('b', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.gbb.memberName))])] : [_c('i-input', {
    staticStyle: {
      "width": "140px"
    },
    attrs: {
      "type": "text",
      "readonly": true
    },
    model: {
      value: (_vm.gbb.memberName),
      callback: function($$v) {
        _vm.$set(_vm.gbb, "memberName", $$v)
      },
      expression: "gbb.memberName"
    }
  }), _vm._v("\n\t\t\t\t\t\t\t  "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.memberSelectDlg = true
      }
    }
  }, [_vm._v("选择")])]], 2)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("禁用日期")]), _vm._v(" "), _c('td', [_c('date-picker', {
    staticClass: "date",
    attrs: {
      "type": "date",
      "placeholder": "禁用开始日期",
      "placement": "bottom-end"
    },
    model: {
      value: (_vm.gbb.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.gbb, "beginDate", $$v)
      },
      expression: "gbb.beginDate"
    }
  }), _vm._v("\n\t\t\t\t\t\t\t-\n              "), _c('date-picker', {
    staticClass: "date",
    attrs: {
      "type": "date",
      "placeholder": "禁用结束日期",
      "placement": "bottom-end"
    },
    model: {
      value: (_vm.gbb.endDate),
      callback: function($$v) {
        _vm.$set(_vm.gbb, "endDate", $$v)
      },
      expression: "gbb.endDate"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "valign": "top"
    }
  }, [_vm._v("禁用说明")]), _vm._v(" "), _c('td', [_c('i-input', {
    attrs: {
      "type": "textarea"
    },
    model: {
      value: (_vm.gbb.remark),
      callback: function($$v) {
        _vm.$set(_vm.gbb, "remark", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "gbb.remark"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "p10 orangered"
  }, [_vm._v("注： 此说明将显示在会员预约时的提示中，请谨慎填写")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "120px"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveGlBookingBlacklist
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.editDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员查询与选择",
      "width": "700",
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.memberSelectDlg),
      callback: function($$v) {
        _vm.memberSelectDlg = $$v
      },
      expression: "memberSelectDlg"
    }
  }, [(_vm.memberSelectDlg) ? _c('member-select', {
    attrs: {
      "after-select": _vm.afterSelectMember
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员基本信息",
      "width": "800",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.viewMemberDlg),
      callback: function($$v) {
        _vm.viewMemberDlg = $$v
      },
      expression: "viewMemberDlg"
    }
  }, [(_vm.viewMemberDlg) ? _c('member-base-info', {
    attrs: {
      "member-id": _vm.viewMemberId
    }
  }) : _vm._e()], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("会员")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "180"
    }
  }, [_vm._v("预约禁用日期")]), _vm._v(" "), _c('th', [_vm._v("禁用说明")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("创建人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("创建时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("操作")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit-help"
  }, [_vm._v("您需要知道的")])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("对于不遵守场馆制度或其他原因的会员，可禁用其团课预约功能一段时间；")]), _vm._v(" "), _c('li', [_vm._v("加入黑名单中的会员，在预约禁用期限内，预约团课时会提示禁用说明；")]), _vm._v(" "), _c('li', [_vm._v("此操作非常重要，仅 "), _c('b', [_vm._v("店长")]), _vm._v(" 可操作。")])])])
}]}

/***/ }),

/***/ 2412:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "private-course-schedule"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main",
    attrs: {
      "name": "#top"
    }
  }, [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v(_vm._s(_vm.pageTitle))]), _vm._v(" "), (_vm.ps && _vm.ps.psId && (_vm.courseEditable || _vm.ps.coachId === _vm.g.data.user.staffId)) ? _c('div', {
    staticClass: "r"
  }, [(_vm.tab === 'detail') ? _c('a', {
    on: {
      "click": function($event) {
        _vm.tab = 'trainPlan'
      }
    }
  }, [_vm._v("训练计划")]) : _c('b', {
    staticClass: "normal"
  }, [_vm._v("训练计划")]), _vm._v(" "), (_vm.tab === 'trainPlan') ? [_c('span', {
    staticClass: "spt"
  }, [_vm._v(" | ")]), _vm._v(" "), _c('a', {
    on: {
      "click": function($event) {
        _vm.tab = 'detail'
      }
    }
  }, [_vm._v("返回")])] : _vm._e()], 2) : _vm._e()]), _vm._v(" "), (_vm.tab === 'detail') ? _c('div', {
    staticClass: "myform",
    staticStyle: {
      "width": "100%"
    }
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("基本信息")]), _vm._v(" "), _c('i-form', {
    ref: "ps",
    staticStyle: {
      "width": "650px"
    },
    attrs: {
      "model": _vm.ps,
      "rules": _vm.csFormRule,
      "label-width": 130
    }
  }, [(_vm.ps && _vm.ps.status === 99) ? _c('form-item', {
    attrs: {
      "prop": "status",
      "label": "排课状态"
    }
  }, [_c('b', [_vm._v("隐藏")])]) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "courseId",
      "required": "",
      "label": "课程名称"
    }
  }, [_c('i-select', {
    attrs: {
      "filterable": ""
    },
    on: {
      "on-change": _vm.handleChangeCourse
    },
    model: {
      value: (_vm.ps.courseId),
      callback: function($$v) {
        _vm.$set(_vm.ps, "courseId", $$v)
      },
      expression: "ps.courseId"
    }
  }, _vm._l((_vm.courseList), function(c) {
    return _c('i-option', {
      key: c.courseId,
      attrs: {
        "value": c.courseId,
        "label": c.courseName
      }
    }, [_c('span', [_vm._v(_vm._s(c.courseName))]), _vm._v(" "), _c('span', {
      staticClass: "r gray"
    }, [_vm._v(_vm._s(c.coachName))])])
  }), 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "coachId",
      "label": "教练",
      "required": ""
    }
  }, [(!_vm.isMultiCoachs) ? [_c('i-select', {
    staticClass: "input-s",
    attrs: {
      "filterable": ""
    },
    model: {
      value: (_vm.ps.coachId),
      callback: function($$v) {
        _vm.$set(_vm.ps, "coachId", $$v)
      },
      expression: "ps.coachId"
    }
  }, _vm._l((_vm.coachList), function(c) {
    return _c('i-option', {
      key: c.staffId,
      attrs: {
        "value": c.staffId
      }
    }, [_vm._v(_vm._s(c.name))])
  }), 1), _vm._v(" "), (_vm.ps.coachId && (_vm.ps.memberId || _vm.member.memberId)) ? _c('span', {
    staticClass: "l15"
  }, [_c('checkbox', {
    model: {
      value: (_vm.isChangeMemberCoach),
      callback: function($$v) {
        _vm.isChangeMemberCoach = $$v
      },
      expression: "isChangeMemberCoach"
    }
  }, [_vm._v("提交后更新为会员信息中的教练")]), _vm._v(" "), (_vm.isChangeMemberCoach && !_vm.g.Util.isEmptyArray(_vm.coachTypeList)) ? _c('i-select', {
    staticStyle: {
      "width": "160px"
    },
    attrs: {
      "placeholder": "选择教练类型（可选）",
      "clearable": ""
    },
    model: {
      value: (_vm.memberCoachType),
      callback: function($$v) {
        _vm.memberCoachType = $$v
      },
      expression: "memberCoachType"
    }
  }, _vm._l((_vm.coachTypeList), function(s) {
    return _c('i-option', {
      key: s.ctId,
      attrs: {
        "value": s.ctId
      }
    }, [_vm._v(_vm._s(s.typeName))])
  }), 1) : _vm._e()], 1) : _vm._e()] : [_c('i-select', {
    staticClass: "input-s",
    staticStyle: {
      "width": "370px"
    },
    attrs: {
      "multiple": ""
    },
    model: {
      value: (_vm.ps.coachIds),
      callback: function($$v) {
        _vm.$set(_vm.ps, "coachIds", $$v)
      },
      expression: "ps.coachIds"
    }
  }, _vm._l((_vm.coachList), function(c) {
    return _c('i-option', {
      key: c.staffId,
      attrs: {
        "value": c.staffId
      }
    }, [_vm._v(_vm._s(c.name))])
  }), 1)], _vm._v(" "), (!_vm.ps.psId && !_vm.isChangeMemberCoach) ? _c('span', {
    staticClass: "l10"
  }, [_c('checkbox', {
    model: {
      value: (_vm.isMultiCoachs),
      callback: function($$v) {
        _vm.isMultiCoachs = $$v
      },
      expression: "isMultiCoachs"
    }
  }, [_vm._v("多选")]), _vm._v(" "), _c('help', [_vm._v("\n\t\t\t\t\t\t\t\t如果选择多个教练，提交后将生成多个教练的排课（仅教练不一样，其余信息都一样）\n              ")])], 1) : _vm._e(), _vm._v(" "), (_vm.isMultiCoachs) ? _c('div', {
    staticClass: "p5"
  }, [_c('a', {
    on: {
      "click": _vm.checkAllCoachList
    }
  }, [_vm._v("全选")]), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v(" "), _c('a', {
    on: {
      "click": _vm.uncheckAllCoachList
    }
  }, [_vm._v("全不选")])]) : _vm._e()], 2), _vm._v(" "), (_vm.ps.psId && _vm.ps.memberId) ? _c('form-item', {
    attrs: {
      "label": "会员"
    }
  }, [_c('a', {
    on: {
      "click": function($event) {
        return _vm.viewMemberInfo(_vm.ps.memberId)
      }
    }
  }, [_vm._v(_vm._s(_vm.ps.memberName))])]) : _c('form-item', {
    attrs: {
      "prop": "memberId",
      "label": "会员"
    }
  }, [_c('div', {
    staticClass: "input-box"
  }, [_c('div', {
    staticClass: "l",
    staticStyle: {
      "width": "85%"
    },
    on: {
      "click": function($event) {
        _vm.memberSelectDlg = true
      }
    }
  }, [(_vm.member.name) ? _c('span', [_vm._v(_vm._s(_vm.member.name))]) : _vm._e(), _vm._v("  \n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "r",
    on: {
      "click": _vm.clearMember
    }
  }, [_c('Icon', {
    staticClass: "gray",
    attrs: {
      "type": "md-close",
      "size": "13"
    }
  })], 1)]), _vm._v(" "), (_vm.member.name) ? _c('span', {
    staticClass: "l5"
  }, [_c('a', {
    on: {
      "click": function($event) {
        return _vm.viewMemberInfo(_vm.member.memberId)
      }
    }
  }, [_vm._v("【查看会员信息】")])]) : _vm._e(), _vm._v(" "), _c('help', {
    attrs: {
      "title": "提示"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t如果不设置会员，表示任何会员都可以预约此课；否则，仅限该会员预约此课。\n            ")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "duration",
      "label": "单次课时长"
    }
  }, [_c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.ps.duration),
      callback: function($$v) {
        _vm.$set(_vm.ps, "duration", $$v)
      },
      expression: "ps.duration"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("分钟")])], 1), _vm._v(" "), (_vm.member.memberId) ? _c('form-item', {
    attrs: {
      "prop": "limitTimes",
      "label": "排课次数"
    }
  }, [_c('input-int', {
    staticClass: "input-s",
    attrs: {
      "placeholder": "本期私教课计划课时数"
    },
    model: {
      value: (_vm.ps.limitTimes),
      callback: function($$v) {
        _vm.$set(_vm.ps, "limitTimes", _vm._n($$v))
      },
      expression: "ps.limitTimes"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("次")]), _vm._v(" "), _c('span', {
    staticClass: "tips l5"
  }, [_vm._v("（可选填）")]), _vm._v(" "), _c('help', {
    attrs: {
      "title": "必读提示"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t排课次数，是指此教练对该会员计划上课的课时数，也是约课限制的次数，可随时修改。\n\t\t\t\t\t\t\t"), _c('p', [_vm._v("可选填，如果填写了，在约课时则受到此次数的限制（不能超过此次数），否则，不受此次数的限制。")]), _vm._v(" "), _c('p'), _vm._v("\n\t\t\t\t\t\t\t注：排课次数与会员的私教卡次数没有必然联系，会员可在多个教练处上课，即此会员的私教卡可在多处上课消费。\n            ")])], 1) : _vm._e(), _vm._v(" "), (_vm.ps.psId) ? _c('form-item', {
    attrs: {
      "prop": "usedTimes",
      "label": "已使用课时数"
    }
  }, [_c('b', [_vm._v(_vm._s(_vm.ps.usedTimes ? _vm.ps.usedTimes : 0))]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("次")])]) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "课程有效期",
      "required": ""
    }
  }, [_c('date-picker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "开始日期"
    },
    model: {
      value: (_vm.ps.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.ps, "beginDate", $$v)
      },
      expression: "ps.beginDate"
    }
  }), _vm._v("\n\t\t\t\t\t\t~\n\t\t\t\t\t\t"), _c('date-picker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "结束日期"
    },
    model: {
      value: (_vm.ps.endDate),
      callback: function($$v) {
        _vm.$set(_vm.ps, "endDate", $$v)
      },
      expression: "ps.endDate"
    }
  }), _vm._v(" "), _c('help', [_vm._v("\n\t\t\t\t\t\t\t私教课预约的上课日期只能在此有效期内，超过此范围将无法约课。\n\t\t\t\t\t\t")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "groundId",
      "label": "上课场地"
    }
  }, [_c('i-select', {
    model: {
      value: (_vm.ps.groundId),
      callback: function($$v) {
        _vm.$set(_vm.ps, "groundId", $$v)
      },
      expression: "ps.groundId"
    }
  }, [_c('i-option', {
    attrs: {
      "value": "",
      "label": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("[无]")])]), _vm._v(" "), _vm._l((_vm.groundList), function(g) {
    return _c('i-option', {
      key: g.groundId,
      attrs: {
        "value": g.groundId
      }
    }, [_vm._v(_vm._s(g.groundName))])
  })], 2)], 1), _vm._v(" "), (!_vm.member.memberId) ? [_c('form-item', {
    attrs: {
      "prop": "enableMoreStudents",
      "label": "是否启用多人预约"
    }
  }, [_c('i-switch', {
    attrs: {
      "size": "large"
    },
    model: {
      value: (_vm.ps.enableMoreStudents),
      callback: function($$v) {
        _vm.$set(_vm.ps, "enableMoreStudents", $$v)
      },
      expression: "ps.enableMoreStudents"
    }
  }, [_c('span', {
    attrs: {
      "slot": "open"
    },
    slot: "open"
  }, [_vm._v("是")]), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "close"
    },
    slot: "close"
  }, [_vm._v("否")])]), _vm._v(" "), _c('span', {
    staticClass: "tips l10"
  }, [_vm._v("选择“否”表示每节课只允许一人预约，选择“是”可设置多人预约")])], 1), _vm._v(" "), (_vm.ps.enableMoreStudents) ? _c('form-item', {
    attrs: {
      "prop": "maxStudents",
      "label": "最多预约人数"
    }
  }, [_c('input-int', {
    staticClass: "-input-s",
    attrs: {
      "placeholder": ""
    },
    model: {
      value: (_vm.ps.maxStudents),
      callback: function($$v) {
        _vm.$set(_vm.ps, "maxStudents", _vm._n($$v))
      },
      expression: "ps.maxStudents"
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.ps.enableMoreStudents) ? _c('form-item', {
    attrs: {
      "prop": "minStudents",
      "label": "最少预约人数"
    }
  }, [_c('input-int', {
    staticClass: "-input-s",
    attrs: {
      "placeholder": ""
    },
    model: {
      value: (_vm.ps.minStudents),
      callback: function($$v) {
        _vm.$set(_vm.ps, "minStudents", _vm._n($$v))
      },
      expression: "ps.minStudents"
    }
  }), _vm._v(" "), (_vm.ps.minStudents) ? _c('span', {
    staticClass: "tips"
  }, [_c('help', {
    staticClass: "l10"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t如果设置了最少预约人数，并且有人预约了，当上课前*小时（预约设置中可设置）未达到最少预约人数，\n\t\t\t\t\t\t\t\t\t系统将自动发送微信消息给已预约上课的会员，以及上课的教练；系统会在上课时间到达后检查并自动取消本节课。\n\t\t\t\t\t\t\t\t\t"), _c('p'), _vm._v("\n\t\t\t\t\t\t\t\t\t注：会员或教练想要收到系统发出的微信消息提醒，必须关注系统公众号（健总管）或场馆授权公众号，并且至少登录过一次健总管微信版（自动完成微信绑定）。\n\t\t\t\t\t\t\t\t")])], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.ps.enableMoreStudents) ? _c('form-item', {
    attrs: {
      "prop": "minCheckinsForEnd",
      "label": "最少签到人数"
    }
  }, [_c('input-int', {
    staticClass: "-input-s",
    attrs: {
      "placeholder": ""
    },
    model: {
      value: (_vm.ps.minCheckinsForEnd),
      callback: function($$v) {
        _vm.$set(_vm.ps, "minCheckinsForEnd", _vm._n($$v))
      },
      expression: "ps.minCheckinsForEnd"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_c('i', {
    staticClass: "iconfont icon-alert"
  }), _vm._v(" 表示最少签到多少人，本节课才结束；默认为1人")])], 1) : _vm._e(), _vm._v(" "), (_vm.ps.enableMoreStudents) ? _c('form-item', {
    attrs: {
      "prop": "limitBookingMembers",
      "label": "仅限预约会员"
    }
  }, [_c('div', {
    staticClass: "orange"
  }, [_c('i', {
    staticClass: "iconfont icon-alert icon orange"
  }), _vm._v(" 可选择添加限定预约的会员（可多个），不设置表示不限制")]), _vm._v(" "), (_vm.limitMembers && _vm.limitMembers.length) ? _c('ul', {
    staticClass: "members"
  }, [_vm._l((_vm.limitMembers), function(m) {
    return _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.viewMemberInfo(m.memberId)
        }
      }
    }, [_vm._v(_vm._s(m.name))]), _vm._v(" "), (_vm.courseEditable) ? _c('a', {
      staticClass: "close",
      on: {
        "click": function($event) {
          return _vm.delLimitMember(m.memberId, m.name)
        }
      }
    }, [_vm._v("×")]) : _vm._e()])
  }), _vm._v(" "), _c('li', {
    staticClass: "gray",
    staticStyle: {
      "background": "#fff"
    }
  }, [_vm._v("共 " + _vm._s(_vm.limitMembers.length) + " 人")])], 2) : _vm._e(), _vm._v(" "), (_vm.courseEditable) ? _c('div', {
    staticClass: "p10"
  }, [_c('i-button', {
    attrs: {
      "icon": "md-add"
    },
    on: {
      "click": function($event) {
        _vm.limitMembersSelectDlg = true
      }
    }
  }, [_vm._v("点击添加会员")])], 1) : _vm._e()]) : _vm._e()] : _vm._e(), _vm._v(" "), (_vm.ps.enableMoreStudents && !_vm.ps.memberId && !_vm.member.name) ? _c('form-item', {
    attrs: {
      "prop": "coachLessonFeeType",
      "label": "教练课时费类型"
    }
  }, [_c('RadioGroup', {
    model: {
      value: (_vm.ps.coachLessonFeeType),
      callback: function($$v) {
        _vm.$set(_vm.ps, "coachLessonFeeType", $$v)
      },
      expression: "ps.coachLessonFeeType"
    }
  }, [_c('Radio', {
    attrs: {
      "label": 0,
      "disabled": !_vm.psCoachLessonFeeEditable
    }
  }, [_vm._v("基础课时单价"), _c('help', [_vm._v("教练每节课的课时费基数，工资结算时需在此基础上提成")])], 1), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 3,
      "disabled": !_vm.psCoachLessonFeeEditable
    }
  }, [_vm._v("固定课时单价"), _c('help', [_vm._v("教练每节课的固定课时费，工资结算时不变（不按提成结算）")])], 1), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 1,
      "disabled": !_vm.psCoachLessonFeeEditable
    }
  }, [_vm._v("会员卡消费累加"), _c('help', [_vm._v("将所有签到会员的会员卡单次消费累加")])], 1), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 2,
      "disabled": !_vm.psCoachLessonFeeEditable
    }
  }, [_vm._v("根据签到人数自定义")])], 1), _vm._v(" "), (_vm.ps.coachLessonFeeType === 2 && _vm.psCoachLessonFeeEditable) ? _c('div', {
    staticClass: "p10"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        return _vm.addCoachFeeConf()
      }
    }
  }, [_vm._v("添加课时费设置")])], 1) : _vm._e(), _vm._v(" "), (_vm.ps.coachLessonFeeType === 2) ? _c('ul', {
    staticClass: "coach-fee-conf"
  }, _vm._l((_vm.coachFeeConfList), function(v, idx) {
    return _c('li', [_c('input-int', {
      staticClass: "input-s",
      attrs: {
        "placeholder": "签到人数",
        "readonly": !_vm.psCoachLessonFeeEditable
      },
      model: {
        value: (v.lessonMembers),
        callback: function($$v) {
          _vm.$set(v, "lessonMembers", $$v)
        },
        expression: "v.lessonMembers"
      }
    }), _vm._v(" 人\n\t\t\t\t\t\t\t\t"), _c('span', {
      staticClass: "spt"
    }, [_vm._v(" ")]), _vm._v(" "), _c('input-num', {
      staticClass: "input-s input-num",
      attrs: {
        "placeholder": "教练课时费",
        "readonly": !_vm.psCoachLessonFeeEditable
      },
      model: {
        value: (v.coachFee),
        callback: function($$v) {
          _vm.$set(v, "coachFee", $$v)
        },
        expression: "v.coachFee"
      }
    }), _vm._v(" 元\n\t\t\t\t\t\t\t")], 1)
  }), 0) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.ps.memberId || _vm.member.name || !_vm.ps.enableMoreStudents) ? _c('form-item', {
    attrs: {
      "prop": "coachLessonFeeType",
      "label": "教练课时费类型"
    }
  }, [_c('RadioGroup', {
    model: {
      value: (_vm.ps.coachLessonFeeType),
      callback: function($$v) {
        _vm.$set(_vm.ps, "coachLessonFeeType", $$v)
      },
      expression: "ps.coachLessonFeeType"
    }
  }, [_c('Radio', {
    attrs: {
      "label": 0,
      "disabled": !_vm.psCoachLessonFeeEditable
    }
  }, [_vm._v("基础课时单价"), _c('help', [_vm._v("教练每节课的课时费基数，工资结算时需在此基础上提成")])], 1), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 3,
      "disabled": !_vm.psCoachLessonFeeEditable
    }
  }, [_vm._v("固定课时单价"), _c('help', [_vm._v("教练每节课的固定课时费，工资结算时不变（不按提成结算）")])], 1), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 1,
      "disabled": !_vm.psCoachLessonFeeEditable
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t会员卡单次消费\n\t\t\t\t\t\t\t\t"), _c('help', [_vm._v("对于期限卡，等于平均每天的价格；"), _c('br'), _vm._v("对于次数卡，等于平均每次的价格；"), _c('br'), _vm._v("对于储值卡，等于本节课的实际消费金额")])], 1)], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.ps.coachLessonFeeType === 0 || _vm.ps.coachLessonFeeType === 3) ? _c('form-item', {
    attrs: {
      "prop": "coachLessonFee",
      "label": _vm.ps.coachLessonFeeType === 0 ? '基础课时单价' : '固定课时单价'
    }
  }, [_c('input-num', {
    staticClass: "input-s",
    attrs: {
      "placeholder": "",
      "title": "",
      "readonly": !_vm.psCoachLessonFeeEditable
    },
    model: {
      value: (_vm.ps.coachLessonFee),
      callback: function($$v) {
        _vm.$set(_vm.ps, "coachLessonFee", _vm._n($$v))
      },
      expression: "ps.coachLessonFee"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")]), _vm._v(" "), _c('help', {
    attrs: {
      "title": "必读提示"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t用于教练工资结算，请慎重填写，否则会影响教练工资结算。\n\t\t\t\t\t\t\t"), _c('p'), _vm._v("\n\t\t\t\t\t\t\t此处设置会影响到使用本排课约课的所有私教课。\n\t\t\t\t\t\t")]), _vm._v(" "), (!_vm.psCoachLessonFeeEditable) ? _c('div', {
    staticClass: "orangered"
  }, [_c('i', {
    staticClass: "iconfont icon-alert icon"
  }), _vm._v(" 此数据编辑需要有【私教排课教练课时费编辑】权限")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "required": "",
      "label": "上课计费卡设置"
    }
  }, [_c('span', {
    staticClass: "gray"
  }, [_c('i', {
    staticClass: "iconfont icon-alert icon orange"
  }), _vm._v(" 请设置会员预约本课需要使用的会员卡以及费用")]), _vm._v(" "), _c('help', [_vm._v("\n\t\t\t\t\t\t\t此处会员卡的选择包括：私教卡所有卡类型，会籍卡和团课卡中的次数卡和储值卡\n\t\t\t\t\t\t")]), _vm._v(" "), (!_vm.ps.memberId) ? _c('div', {
    staticClass: "p5"
  }, [_vm._v("\n\t\t\t\t\t\t\t卡类别过滤： \n\t\t\t\t\t\t\t"), _c('checkbox-group', {
    staticStyle: {
      "display": "inline"
    },
    model: {
      value: (_vm.cardClassList),
      callback: function($$v) {
        _vm.cardClassList = $$v
      },
      expression: "cardClassList"
    }
  }, [_c('checkbox', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("私教卡")]), _vm._v(" "), _c('checkbox', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("团课卡（次卡与储值卡）")]), _vm._v(" "), _c('checkbox', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("会籍卡（次卡与储值卡）")])], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.memberCardIdMap) ? _c('ul', {
    staticClass: "card-payment-list"
  }, [_c('li', {
    staticClass: "-hd"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t会员卡种类\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v("课程结算设置")])]), _vm._v(" "), _vm._l((_vm.cardList), function(c, index) {
    return (((!_vm.member.memberId) || (_vm.member.memberId && _vm.memberCardIdMap[c.cardId])) && _vm.cardClassList.contains(c.cardClass)) ? _c('li', [_c('div', {
      staticClass: "name"
    }, [_c('checkbox', {
      on: {
        "on-change": function($event) {
          return _vm.checkCardPayment(c)
        }
      },
      model: {
        value: (_vm.cardPayments[c.cardId].checked),
        callback: function($$v) {
          _vm.$set(_vm.cardPayments[c.cardId], "checked", $$v)
        },
        expression: "cardPayments[c.cardId].checked"
      }
    }, [_vm._v(" " + _vm._s(c.cardName)), (c.status === 1) ? _c('span', {
      staticClass: "gray"
    }, [_vm._v(" [已停用]")]) : _vm._e()])], 1), _vm._v(" "), _c('div', {
      staticClass: "desc"
    }, [(c.cardType === 1) ? [_c('span', {
      staticClass: "gray"
    }, [_vm._v("期限卡，不计单次费用")])] : (c.cardType === 2) ? [_vm._v("\n\t\t\t\t\t\t\t\t\t\t每次课计费"), _c('input-num', {
      staticClass: "input",
      attrs: {
        "placeholder": "次数"
      },
      model: {
        value: (_vm.cardPayments[c.cardId].payment),
        callback: function($$v) {
          _vm.$set(_vm.cardPayments[c.cardId], "payment", _vm._n($$v))
        },
        expression: "cardPayments[c.cardId].payment"
      }
    }), _c('b', {
      staticClass: "orange"
    }, [_vm._v("次")])] : (c.cardType === 3) ? [_vm._v("\n\t\t\t\t\t\t\t\t\t\t每次课计费"), _c('input-num', {
      staticClass: "input",
      attrs: {
        "min": "0",
        "placeholder": "金额"
      },
      model: {
        value: (_vm.cardPayments[c.cardId].payment),
        callback: function($$v) {
          _vm.$set(_vm.cardPayments[c.cardId], "payment", _vm._n($$v))
        },
        expression: "cardPayments[c.cardId].payment"
      }
    }), _c('b', {
      staticClass: "red"
    }, [_vm._v("元")])] : (c.cardType === 4) ? [_vm._v("\n\t\t\t\t\t\t\t\t\t\t每次课计费"), _c('input-int', {
      staticClass: "input",
      model: {
        value: (_vm.cardPayments[c.cardId].payment),
        callback: function($$v) {
          _vm.$set(_vm.cardPayments[c.cardId], "payment", _vm._n($$v))
        },
        expression: "cardPayments[c.cardId].payment"
      }
    }), _c('b', {
      staticClass: "green"
    }, [_vm._v(_vm._s(_vm.g.Dict.CardTimeTypes[c.cardTimeType]))])] : _vm._e()], 2)]) : _vm._e()
  })], 2) : _vm._e()], 1), _vm._v(" "), ((_vm.member.name || _vm.ps.memberId) && _vm.canLimitMcIds) ? _c('form-item', {
    attrs: {
      "label": "限定使用会员卡"
    }
  }, [_c('CheckboxGroup', {
    staticClass: "ps-mc",
    model: {
      value: (_vm.psMcIdList),
      callback: function($$v) {
        _vm.psMcIdList = $$v
      },
      expression: "psMcIdList"
    }
  }, _vm._l((_vm.memberCardList), function(mc) {
    return (_vm.cardPayments[mc.cardId] && _vm.cardPayments[mc.cardId].checked) ? _c('Checkbox', {
      key: mc.mcId,
      attrs: {
        "label": mc.mcId
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(mc.cardName) + "\n\t\t\t\t\t\t\t\t"), (mc.cardType === 1 && mc.endDate) ? _c('span', {
      staticClass: "gray"
    }, [_vm._v("/ " + _vm._s(mc.endDate) + "到期")]) : (mc.cardType === 2) ? _c('span', {
      staticClass: "gray"
    }, [_vm._v("/ 剩余" + _vm._s(mc.currentTimes) + "次")]) : (mc.cardType === 3) ? _c('span', {
      staticClass: "gray"
    }, [_vm._v("/ 剩余" + _vm._s(mc.currentAmount) + "元")]) : _vm._e(), _vm._v(" "), (mc.unitPrice) ? _c('span', {
      staticClass: "gray"
    }, [_vm._v("/ 平均单次价￥" + _vm._s(_vm.g.Util.round(mc.unitPrice.toFixed(2))))]) : _vm._e(), _vm._v(" "), (mc.remark) ? _c('span', {
      staticClass: "gray"
    }, [_vm._v("/ " + _vm._s(mc.remark.shorten(20)))]) : _vm._e()]) : _vm._e()
  }), 1)], 1) : _vm._e(), _vm._v(" "), (_vm.g.data.shop.shopType === 22 && _vm.cardList && _vm.cardList.length && _vm.memberCardIdMap) ? _c('form-item', {
    attrs: {
      "label": "额外计费项"
    }
  }, [_c('i-select', {
    staticStyle: {
      "width": "250px"
    },
    attrs: {
      "filterable": "",
      "clearable": ""
    },
    model: {
      value: (_vm.ps.extraCardId),
      callback: function($$v) {
        _vm.$set(_vm.ps, "extraCardId", $$v)
      },
      expression: "ps.extraCardId"
    }
  }, [_vm._l((_vm.cardList), function(c) {
    return [((c.cardType === 2 || c.cardType === 3) && (!_vm.member.memberId || (_vm.member.memberId && _vm.memberCardIdMap[c.cardId]))) ? _c('i-option', {
      key: c.cardId,
      attrs: {
        "value": c.cardId
      }
    }, [_vm._v(_vm._s(c.cardName))]) : _vm._e()]
  })], 2), _vm._v("\n\t\t\t\t\t\t \n\t\t\t\t\t\t"), (_vm.ps.extraCardId) ? [_c('input-num', {
    staticStyle: {
      "width": "100px",
      "position": "relative",
      "top": "1px"
    },
    model: {
      value: (_vm.ps.extraCardPayment),
      callback: function($$v) {
        _vm.$set(_vm.ps, "extraCardPayment", $$v)
      },
      expression: "ps.extraCardPayment"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "l5"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.g.Dict.CardUnitName[_vm.cardMap[_vm.ps.extraCardId].cardType]) + "\n\t\t\t\t\t\t\t")])] : _vm._e(), _vm._v(" "), _c('help', {
    staticClass: "l10"
  }, [_vm._v("\n\t\t\t\t\t\t\t额外计费项，是指除了常规预约计费外，场馆还需要额外扣除会员的一笔会员卡费用（即此处编辑的会员卡与费用）\n\t\t\t\t\t\t\t"), _c('p'), _vm._v("\n\t\t\t\t\t\t\t此处的配置不影响会员正常预约，仅当预约上课的会员存在此处配置的会员卡时，才额外计费。\n\t\t\t\t\t\t")])], 2) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "limitWeeks",
      "label": "限定上课星期"
    }
  }, [_c('CheckboxGroup', {
    staticStyle: {
      "display": "inline-block"
    },
    model: {
      value: (_vm.limitWeekArr),
      callback: function($$v) {
        _vm.limitWeekArr = $$v
      },
      expression: "limitWeekArr"
    }
  }, [_c('Checkbox', {
    attrs: {
      "label": 1,
      "disabled": !_vm.courseEditable
    }
  }, [_vm._v("周一")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "label": 2,
      "disabled": !_vm.courseEditable
    }
  }, [_vm._v("周二")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "label": 3,
      "disabled": !_vm.courseEditable
    }
  }, [_vm._v("周三")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "label": 4,
      "disabled": !_vm.courseEditable
    }
  }, [_vm._v("周四")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "label": 5,
      "disabled": !_vm.courseEditable
    }
  }, [_vm._v("周五")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "label": 6,
      "disabled": !_vm.courseEditable
    }
  }, [_vm._v("周六")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "label": 0,
      "disabled": !_vm.courseEditable
    }
  }, [_vm._v("周日")])], 1), _vm._v(" "), _c('help', [_vm._v("\n\t\t\t\t\t\t\t全不选（默认）表示不限制，相当于全选。如果勾选部分星期，表示只限定规定的星期可上课。\n\t\t\t\t\t\t\t"), _c('p', [_vm._v("例如，勾选了“周六、周日”，表示只能预约每周的周六和周日上课。")])])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "remark",
      "label": "备注"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 6
    },
    model: {
      value: (_vm.ps.remark),
      callback: function($$v) {
        _vm.$set(_vm.ps, "remark", $$v)
      },
      expression: "ps.remark"
    }
  })], 1)], 2), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('i-form', {
    attrs: {
      "label-width": 130
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "enableWeektimes",
      "label": "启用按计划预约"
    }
  }, [_c('i-switch', {
    attrs: {
      "size": "large"
    },
    model: {
      value: (_vm.ps.enableWeektimes),
      callback: function($$v) {
        _vm.$set(_vm.ps, "enableWeektimes", $$v)
      },
      expression: "ps.enableWeektimes"
    }
  }, [_c('span', {
    attrs: {
      "slot": "open"
    },
    slot: "open"
  }, [_vm._v("是")]), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "close"
    },
    slot: "close"
  }, [_vm._v("否")])]), _vm._v(" "), _c('span', {
    staticClass: "orange l10"
  }, [_vm._v("选择“否”表示仅用于私教参考，不作为约课用；选择“是”表示必须按照以下时间设置约私教课")])], 1), _vm._v(" "), _vm._l((_vm.weeks), function(week, index) {
    return (_vm.g.Util.isEmptyArray(_vm.limitWeekArr) || _vm.limitWeekArr.contains((1 + index) % 7)) ? _c('form-item', {
      key: index,
      attrs: {
        "prop": "courseId",
        "label": week
      }
    }, [_vm._l((_vm.timesList[index]), function(time, tmidx) {
      return _c('time-picker', {
        key: index * 100 + tmidx,
        staticClass: "-timepick",
        attrs: {
          "format": "HH:mm",
          "confirm": "",
          "type": "timerange",
          "placeholder": "选择时间段"
        },
        model: {
          value: (_vm.timeValList[index + '-' + tmidx]),
          callback: function($$v) {
            _vm.$set(_vm.timeValList, index + '-' + tmidx, $$v)
          },
          expression: "timeValList[index + '-' + tmidx]"
        }
      })
    }), _vm._v(" "), _c('i-button', {
      staticClass: "-addtime",
      attrs: {
        "icon": "md-add"
      },
      on: {
        "click": function($event) {
          return _vm.addTimePick(index)
        }
      }
    })], 2) : _vm._e()
  })], 2), _vm._v(" "), (_vm.courseEditable) ? _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "130px"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.handleSubmit()
      }
    }
  }, [_vm._v("提交")]), _vm._v(" "), (_vm.ps && _vm.ps.psId && _vm.ps.enableWeektimes && _vm.ps.memberId) ? _c('span', {
    staticClass: "l10"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.bookingMplListDlg = true
      }
    }
  }, [_vm._v("批量预约私教课")])], 1) : _vm._e()], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.tab === 'trainPlan') ? [_c('i-button', {
    attrs: {
      "icon": "md-add",
      "type": "primary"
    },
    on: {
      "click": _vm.openPsTrainPlanForCreate
    }
  }, [_vm._v("添加训练计划")]), _vm._v(" "), _c('div', {
    staticClass: "mytbl p15"
  }, [_c('table', [_vm._m(1), _vm._v(" "), _vm._l((_vm.psTrainPlanList), function(p) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(p.orderNo))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.planName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.summary))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.updateUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.updateTime))]), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openPsTrainPlanForEdit(p)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openPsTrainItemListDlg(p.planId)
        }
      }
    }, [_vm._v("训练项目")])]), _vm._v(" "), _c('li', {
      on: {
        "click": function($event) {
          return _vm.delPsTrainPlan(p.planId)
        }
      }
    }, [_c('a', [_vm._v("删除")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.shareTrainPlan(p)
        }
      }
    }, [_vm._v("分享")])])])])])
  })], 2)]), _vm._v(" "), (_vm.psTrainPlanList && _vm.psTrainPlanList.length === 0) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n\t\t\t\t\t暂无数据\n\t\t\t\t")]) : _vm._e()] : _vm._e()], 2)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员查询与选择",
      "width": "700",
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.memberSelectDlg),
      callback: function($$v) {
        _vm.memberSelectDlg = $$v
      },
      expression: "memberSelectDlg"
    }
  }, [(_vm.memberSelectDlg) ? _c('member-select', {
    attrs: {
      "after-select": _vm.afterSelectMember
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员查询与选择",
      "width": "700",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.limitMembersSelectDlg),
      callback: function($$v) {
        _vm.limitMembersSelectDlg = $$v
      },
      expression: "limitMembersSelectDlg"
    }
  }, [(_vm.limitMembersSelectDlg) ? _c('member-select', {
    attrs: {
      "after-select": _vm.afterSelectLimitMember
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员基本信息",
      "width": "800",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.viewMemberDlg),
      callback: function($$v) {
        _vm.viewMemberDlg = $$v
      },
      expression: "viewMemberDlg"
    }
  }, [(_vm.viewMemberDlg) ? _c('member-base-info', {
    attrs: {
      "member-id": _vm.selectMemberId
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "训练计划",
      "width": "700",
      "styles": {
        top: '10px'
      },
      "mask-closable": false
    },
    model: {
      value: (_vm.psTrainPlanDlg),
      callback: function($$v) {
        _vm.psTrainPlanDlg = $$v
      },
      expression: "psTrainPlanDlg"
    }
  }, [_c('table', {
    staticClass: "tblform",
    attrs: {
      "width": "95%"
    }
  }, [_c('tr', [_c('th', {
    staticClass: "required",
    attrs: {
      "width": "100"
    }
  }, [_vm._v("序号")]), _vm._v(" "), _c('td', [_c('input-int', {
    staticStyle: {
      "width": "100px"
    },
    model: {
      value: (_vm.psTrainPlan.orderNo),
      callback: function($$v) {
        _vm.$set(_vm.psTrainPlan, "orderNo", $$v)
      },
      expression: "psTrainPlan.orderNo"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("计划名称")]), _vm._v(" "), _c('td', [_c('i-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.psTrainPlan.planName),
      callback: function($$v) {
        _vm.$set(_vm.psTrainPlan, "planName", $$v)
      },
      expression: "psTrainPlan.planName"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("训练摘要")]), _vm._v(" "), _c('td', [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 6
    },
    model: {
      value: (_vm.psTrainPlan.summary),
      callback: function($$v) {
        _vm.$set(_vm.psTrainPlan, "summary", $$v)
      },
      expression: "psTrainPlan.summary"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "form-submit center"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.savePsTrainPlan
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.psTrainPlanDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "训练项目",
      "width": "900",
      "styles": {
        top: '10px'
      },
      "mask-closable": false
    },
    model: {
      value: (_vm.psTrainItemListDlg),
      callback: function($$v) {
        _vm.psTrainItemListDlg = $$v
      },
      expression: "psTrainItemListDlg"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": _vm.openPsTrainItemDlgForCreate
    }
  }, [_vm._v("添加")]), _vm._v(" "), _c('div', {
    staticClass: "mytbl p10"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("序号")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("训练主题")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("训练动作")]), _vm._v(" "), _c('th', [_vm._v("训练详细")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("操作")])]), _vm._v(" "), _vm._l((_vm.psTrainItemList), function(ti, itemIdx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(ti.orderNo))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.BodyParts[ti.bodyPart]))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(ti.actionName))]), _vm._v(" "), _c('td', {
      staticClass: "train-items"
    }, _vm._l((ti.actionValueList), function(v, idx) {
      return (v.weightValue || v.countValue) ? _c('div', {
        key: ti.actionId + '-' + idx,
        staticClass: "values"
      }, [_c('span', {
        staticClass: "no"
      }, [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), (v.weightValue) ? [_vm._v(_vm._s(v.weightValue) + " " + _vm._s(_vm.g.Dict.ActionWeightUnits[v.weightUnit]))] : _vm._e(), _vm._v(" "), (v.weightValue && v.countValue) ? _c('span', [_vm._v("×")]) : _vm._e(), _vm._v(" "), (v.countValue) ? [_vm._v(_vm._s(v.countValue) + " " + _vm._s(_vm.g.Dict.ActionCountUnits[v.countUnit]))] : _vm._e()], 2) : _vm._e()
    }), 0), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.editTrainItem(itemIdx)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.deleteTrainItem(itemIdx)
        }
      }
    }, [_vm._v("删除")])])])])])
  })], 2)]), _vm._v(" "), (_vm.psTrainItemList && _vm.psTrainItemList.length === 0) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n\t\t\t暂无数据\n\t\t")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "center mt25"
  }, [_c('i-button', {
    staticClass: "long-btn",
    on: {
      "click": function($event) {
        _vm.psTrainItemListDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "训练动作内容",
      "width": "540",
      "styles": {
        top: '10px'
      },
      "mask-closable": false
    },
    model: {
      value: (_vm.psTrainItemDlg),
      callback: function($$v) {
        _vm.psTrainItemDlg = $$v
      },
      expression: "psTrainItemDlg"
    }
  }, [_c('table', {
    staticClass: "tblform train-item",
    attrs: {
      "width": "400"
    }
  }, [_c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("序号")]), _vm._v(" "), _c('td', [_c('input-int', {
    staticStyle: {
      "width": "100px"
    },
    model: {
      value: (_vm.psTrainItem.orderNo),
      callback: function($$v) {
        _vm.$set(_vm.psTrainItem, "orderNo", $$v)
      },
      expression: "psTrainItem.orderNo"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("训练主题")]), _vm._v(" "), _c('td', [_c('i-select', {
    on: {
      "on-change": _vm.queryPcActionList
    },
    model: {
      value: (_vm.psTrainItem.bodyPart),
      callback: function($$v) {
        _vm.$set(_vm.psTrainItem, "bodyPart", $$v)
      },
      expression: "psTrainItem.bodyPart"
    }
  }, _vm._l((_vm.g.Dict.BodyParts), function(bp, idx) {
    return _c('i-option', {
      key: idx,
      attrs: {
        "value": idx
      }
    }, [_vm._v(_vm._s(bp))])
  }), 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("训练动作")]), _vm._v(" "), _c('td', [_c('i-select', {
    model: {
      value: (_vm.psTrainItem.actionId),
      callback: function($$v) {
        _vm.$set(_vm.psTrainItem, "actionId", $$v)
      },
      expression: "psTrainItem.actionId"
    }
  }, _vm._l((_vm.pcActionList), function(pa) {
    return _c('i-option', {
      key: 'pa' + pa.actionId,
      attrs: {
        "value": pa.actionId
      }
    }, [_vm._v(_vm._s(pa.actionName))])
  }), 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("重量单位")]), _vm._v(" "), _c('td', [_c('i-select', {
    model: {
      value: (_vm.psTrainItem.weightUnit),
      callback: function($$v) {
        _vm.$set(_vm.psTrainItem, "weightUnit", _vm._n($$v))
      },
      expression: "psTrainItem.weightUnit"
    }
  }, [_vm._l((_vm.g.Dict.ActionWeightUnits), function(u, i) {
    return _c('i-option', {
      key: i,
      attrs: {
        "value": i
      }
    }, [_vm._v(_vm._s(u))])
  }), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("无")])])], 2)], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("数量单位")]), _vm._v(" "), _c('td', [_c('i-select', {
    model: {
      value: (_vm.psTrainItem.countUnit),
      callback: function($$v) {
        _vm.$set(_vm.psTrainItem, "countUnit", _vm._n($$v))
      },
      expression: "psTrainItem.countUnit"
    }
  }, _vm._l((_vm.g.Dict.ActionCountUnits), function(u, i) {
    return _c('i-option', {
      key: i,
      attrs: {
        "value": i
      }
    }, [_vm._v(_vm._s(u))])
  }), 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "required",
    staticStyle: {
      "padding-top": "5px"
    },
    attrs: {
      "valign": "top"
    }
  }, [_vm._v("动作详细")]), _vm._v(" "), _c('td', {
    staticClass: "p15"
  }, [_c('ul', {
    staticClass: "action-items"
  }, _vm._l((_vm.psTrainItem.actionValueList), function(v, idx) {
    return _c('li', [_c('table', [_c('tr', [_c('td', {
      staticClass: "no"
    }, [_vm._v(_vm._s(idx + 1) + ".")]), _vm._v(" "), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (v.weightValue),
        expression: "v.weightValue"
      }],
      attrs: {
        "type": "number"
      },
      domProps: {
        "value": (v.weightValue)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.$set(v, "weightValue", $event.target.value)
        }
      }
    })]), _vm._v(" "), _c('td', {
      staticClass: "unit"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.g.Dict.ActionWeightUnits[_vm.psTrainItem.weightUnit]) + "\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (v.countValue),
        expression: "v.countValue"
      }],
      attrs: {
        "type": "number"
      },
      domProps: {
        "value": (v.countValue)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.$set(v, "countValue", $event.target.value)
        }
      }
    })]), _vm._v(" "), _c('td', {
      staticClass: "unit"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.g.Dict.ActionCountUnits[_vm.psTrainItem.countUnit]) + "\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('td', {
      staticClass: "opt"
    }, [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delActionValue(idx)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont icon-delete"
    })])])])])])
  }), 0), _vm._v(" "), _c('i-button', {
    attrs: {
      "icon": "md-add"
    },
    on: {
      "click": _vm.addActionValue
    }
  }, [_vm._v("添加组")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "form-submit center"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submitPsTrainItem
    }
  }, [_vm._v("确定")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "训练计划分享",
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.trainPlanShareDlg),
      callback: function($$v) {
        _vm.trainPlanShareDlg = $$v
      },
      expression: "trainPlanShareDlg"
    }
  }, [(_vm.trainPlanShareDlg) ? _c('div', {
    staticClass: "center"
  }, [_c('img', {
    staticClass: "qrcode",
    attrs: {
      "src": _vm.g.Conf.QR_CODE_URL + encodeURIComponent(_vm.trainPlanShareUrl)
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    staticStyle: {
      "width": "200px"
    },
    on: {
      "click": function($event) {
        _vm.trainPlanShareDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "批量预约私教课",
      "width": "800"
    },
    model: {
      value: (_vm.bookingMplListDlg),
      callback: function($$v) {
        _vm.bookingMplListDlg = $$v
      },
      expression: "bookingMplListDlg"
    }
  }, [_c('div', {
    staticClass: "warning"
  }, [_vm._v("提示：请保存私教课排课后再批量预约")]), _vm._v(" "), _c('p'), _vm._v(" "), _c('div', {
    staticClass: "mt20",
    staticStyle: {
      "border": "1px solid #eee",
      "padding": "15px"
    }
  }, [(_vm.bookingMplListDlg) ? _c('table', {
    staticClass: "booking-lessons"
  }, [_c('tr', [_c('th', {
    attrs: {
      "align": "left",
      "valign": "top",
      "width": "140"
    }
  }, [_vm._v("选择计费会员卡")]), _vm._v(" "), _c('td', [_c('RadioGroup', {
    model: {
      value: (_vm.selectMcId),
      callback: function($$v) {
        _vm.selectMcId = $$v
      },
      expression: "selectMcId"
    }
  }, _vm._l((_vm.memberCardList), function(mc) {
    return (_vm.cardPayments[mc.cardId] && _vm.cardPayments[mc.cardId].checked) ? _c('Radio', {
      key: mc.mcId,
      staticClass: "select-mc",
      attrs: {
        "label": mc.mcId
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(mc.cardName) + "\n\t\t\t\t\t\t\t\t"), (mc.cardType === 2) ? [_vm._v("\n\t\t\t\t\t\t\t\t\t（剩余 " + _vm._s(mc.currentTimes) + " 次）\n\t\t\t\t\t\t\t\t")] : _vm._e(), _vm._v(" "), (mc.cardType === 3) ? [_vm._v("\n\t\t\t\t\t\t\t\t\t（剩余 " + _vm._s(mc.currentAmount) + " 元）\n\t\t\t\t\t\t\t\t")] : _vm._e()], 2) : _vm._e()
  }), 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "align": "left"
    }
  }, [_vm._v("限定最大约课次数")]), _vm._v(" "), _c('td', [_c('input-num', {
    staticStyle: {
      "width": "60px"
    },
    model: {
      value: (_vm.maxBookingLessonCnt),
      callback: function($$v) {
        _vm.maxBookingLessonCnt = $$v
      },
      expression: "maxBookingLessonCnt"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-tips"
  }, [_vm._v("（选填，如果不设置，则按照上课周期和上课计划预约）")])], 1)])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "form-submit center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.bookingMplList
    }
  }, [_vm._v("提交")]), _vm._v("\n\t\t\t \n\t\t\t"), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.bookingMplListDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tit"
  }, [_c('div', {
    staticClass: "l"
  }, [_vm._v("上课时间计划")]), _vm._v(" "), _c('div', {
    staticClass: "r orangered"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("序号")]), _vm._v(" "), _c('th', [_vm._v("计划名称")]), _vm._v(" "), _c('th', [_vm._v("训练摘要")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("更新人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "160"
    }
  }, [_vm._v("更新时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2432:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.lesson) ? _c('div', {
    staticClass: "s"
  }, [_c('div', {
    staticClass: "lesson-info"
  }, [_c('b', [_vm._v(_vm._s(_vm.lesson.courseName))]), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("/")]), _vm._v("\n\t\t" + _vm._s(_vm.lesson.coachName) + " "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("/")]), _vm._v("\n\t\t" + _vm._s(_vm.g.Util.formatDate(_vm.lesson.lessonDate)) + " " + _vm._s(_vm.g.Util.formatTime(_vm.lesson.beginTime)) + "\n\t")]), _vm._v(" "), _c('ul', {
    staticClass: "imgs"
  }, _vm._l((_vm.imgList), function(img) {
    return _c('li', [_c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(img)
      }
    })])
  }), 0)]) : _vm._e()
},staticRenderFns: []}

/***/ }),

/***/ 2440:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "group-lesson"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "title": "上课详情",
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), _c('lesson-review-list', {
    attrs: {
      "lesson-id": _vm.lessonId,
      "course-type": 1
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2441:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "lesson-review"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), _c('section', [(_vm.editable) ? _c('div', {
    staticClass: "tbl-header"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": _vm.openNewTmptDlg
    }
  }, [_vm._v("新建模板")])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("模板名称")]), _vm._v(" "), _c('th', [_vm._v("评分标题列表")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("默认团课模板")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("默认私教课模板")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("更新时间")]), _vm._v(" "), (_vm.editable) ? _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("操作")]) : _vm._e()]), _vm._v(" "), _vm._l((_vm.tmptList), function(t) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(t.tmptName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(t.scoreTitleConf.split(',').join(' / ')))]), _vm._v(" "), _c('td', [(t.rstId === _vm.defaultGlScoreTmptId) ? [_vm._v("是")] : [_vm._v("\n\t\t\t\t\t\t\t\t否\n\t\t\t\t\t\t\t\t"), _c('a', {
      staticClass: "l10",
      on: {
        "click": function($event) {
          return _vm.updateDefaultGlScoreTmptId(t.rstId)
        }
      }
    }, [_vm._v("[设置]")])]], 2), _vm._v(" "), _c('td', [(t.rstId === _vm.defaultPlScoreTmptId) ? [_vm._v("是")] : [_vm._v("\n\t\t\t\t\t\t\t\t否\n\t\t\t\t\t\t\t\t"), _c('a', {
      staticClass: "l10",
      on: {
        "click": function($event) {
          return _vm.updateDefaultPlScoreTmptId(t.rstId)
        }
      }
    }, [_vm._v("[设置]")])]], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(t.updateTime))]), _vm._v(" "), (_vm.editable) ? _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openTmptEditDlg(t)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delScoreTmpt(t.rstId)
        }
      }
    }, [_vm._v("删除")])])])]) : _vm._e()])
  })], 2), _vm._v(" "), (_vm.tmptList && !_vm.tmptList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()])])], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "评价模板设置",
      "width": "400",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.tmptDlg),
      callback: function($$v) {
        _vm.tmptDlg = $$v
      },
      expression: "tmptDlg"
    }
  }, [_c('i-input', {
    staticStyle: {
      "width": "360px"
    },
    attrs: {
      "type": "text",
      "placeholder": "请输入模板名称"
    },
    model: {
      value: (_vm.scoreTmpt.tmptName),
      callback: function($$v) {
        _vm.$set(_vm.scoreTmpt, "tmptName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "scoreTmpt.tmptName"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mt20"
  }, [_c('b', [_vm._v("请设置评分标题")]), _vm._v(" （最多可设置9个）")]), _vm._v(" "), _c('ul', {
    staticClass: "score-titles"
  }, _vm._l((_vm.scoreTmpt.scoreTitles), function(t, idx) {
    return _c('li', [_c('span', {
      staticClass: "gray"
    }, [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('i-input', {
      staticClass: "input",
      attrs: {
        "type": "text"
      },
      model: {
        value: (_vm.scoreTmpt.scoreTitles[idx]),
        callback: function($$v) {
          _vm.$set(_vm.scoreTmpt.scoreTitles, idx, (typeof $$v === 'string' ? $$v.trim() : $$v))
        },
        expression: "scoreTmpt.scoreTitles[idx]"
      }
    })], 1)
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submitTmpt
    }
  }, [_vm._v("提交")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2443:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "group-lesson-log"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('Tabs', {
    attrs: {
      "animated": false
    },
    on: {
      "on-click": _vm.changeTab
    },
    model: {
      value: (_vm.tabName),
      callback: function($$v) {
        _vm.tabName = $$v
      },
      expression: "tabName"
    }
  }, [_c('TabPane', {
    attrs: {
      "label": "团课取消日志",
      "name": "lessonLog"
    }
  }, [_c('section', [_c('div', [_c('ul', {
    staticClass: "query-cond-inline"
  }, [_c('li', {
    staticClass: "item"
  }, [_c('date-picker', {
    staticClass: "date-input",
    attrs: {
      "type": "date",
      "placeholder": "上课开始日期",
      "options": _vm.dateOptions
    },
    model: {
      value: (_vm.query.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.query, "beginDate", $$v)
      },
      expression: "query.beginDate"
    }
  }), _vm._v("\n\t\t\t\t\t\t\t\t~\n\t\t\t\t\t\t\t\t"), _c('date-picker', {
    staticClass: "date-input",
    attrs: {
      "type": "date",
      "placeholder": "上课结束日期",
      "options": _vm.dateOptions
    },
    model: {
      value: (_vm.query.endDate),
      callback: function($$v) {
        _vm.$set(_vm.query, "endDate", $$v)
      },
      expression: "query.endDate"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "placeholder": "请选择教练",
      "filterable": ""
    },
    model: {
      value: (_vm.query.coachId),
      callback: function($$v) {
        _vm.$set(_vm.query, "coachId", $$v)
      },
      expression: "query.coachId"
    }
  }, _vm._l((_vm.coachList), function(c) {
    return _c('i-option', {
      key: c.staffId,
      attrs: {
        "value": c.staffId
      }
    }, [_vm._v(_vm._s(c.name))])
  }), 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.queryLessonCancelLogList(null)
      }
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.resetQuery
    }
  }, [_vm._v("重置")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "mytbl p10"
  }, [_c('table', [_c('tr', [_c('th', [_vm._v("课程")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("上课日期")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("上课时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("教练")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("预约人数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("最多预约人数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("最少预约人数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("取消人")]), _vm._v(" "), _c('th', [_vm._v("取消时间")])]), _vm._v(" "), _vm._l((_vm.lessonCancelLogList), function(l) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(l.courseName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(l.lessonDate)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatTime(l.beginTime)) + " ~ " + _vm._s(_vm.g.Util.formatTime(l.endTime)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.coachName))]), _vm._v(" "), _c('td', [(l.bookings) ? _c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.queryMemberLessonCancelLogListByLesson(l.lessonId)
        }
      }
    }, [_vm._v(_vm._s(l.bookings) + " 人")]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.maxStudents))]), _vm._v(" "), _c('td', {
      staticClass: "green"
    }, [_vm._v(_vm._s(l.minStudents))]), _vm._v(" "), _c('td', [(l.createUid === 0) ? _c('i', {
      staticClass: "gray"
    }, [_vm._v("系统自动")]) : [_vm._v(_vm._s(l.createUname))]], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createTime))])])
  })], 2), _vm._v(" "), (_vm.lessonCancelLogCount && _vm.lessonCancelLogCount > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.lessonCancelLogCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryLessonCancelLogList
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.lessonCancelLogList && !_vm.lessonCancelLogList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n\t\t\t\t\t\t\t暂无数据\n\t\t\t\t\t\t")]) : _vm._e()])])]), _vm._v(" "), _c('TabPane', {
    attrs: {
      "label": "预约取消日志",
      "name": "bookingLog"
    }
  }, [_c('section', [_c('div', {
    staticClass: "tbl-header"
  }, [_c('div', {
    staticClass: "l"
  }, [_c('i-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "text",
      "placeholder": "请选择会员",
      "readonly": true,
      "clearable": true
    },
    on: {
      "on-focus": _vm.openSelectMemberForBookingCancel,
      "on-change": _vm.clearMemberForBookingCancel
    },
    model: {
      value: (_vm.memberNameForBookingCancel),
      callback: function($$v) {
        _vm.memberNameForBookingCancel = $$v
      },
      expression: "memberNameForBookingCancel"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("取消时间 ↓")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "120px"
    }
  }, [_vm._v("课程")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("上课日期")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("上课时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("教练")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("会员")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("预约时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("使用会员卡")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "95"
    }
  }, [_vm._v("会员卡消费")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("预约人数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("预约人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("取消人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("预约位置")])]), _vm._v(" "), _vm._l((_vm.mlCancelLogList), function(l, idx) {
    return (l.courseName && l.lessonDate) ? _c('tr', [_c('td', [_vm._v(_vm._s(l.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.courseName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(l.lessonDate)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatTime(l.lessonBeginTime)) + " ~ " + _vm._s(_vm.g.Util.formatTime(l.lessonEndTime)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.coachName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.memberName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.bookingTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.cardName))]), _vm._v(" "), _c('td', [(l.cardType === 1) ? [_vm._v("期限卡不计费")] : (l.cardType === 2) ? [_vm._v(_vm._s(l.cardPayment) + " 次")] : (l.cardType === 3) ? [_vm._v(_vm._s(l.cardPayment) + " 元")] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.paymentCount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.bookingUname))]), _vm._v(" "), _c('td', [(l.createUid === 0) ? _c('i', {
      staticClass: "gray"
    }, [_vm._v("系统自动")]) : [_vm._v(_vm._s(l.createUname))]], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.position))])]) : _vm._e()
  })], 2)]), _vm._v(" "), (_vm.mlCancelLogCount && _vm.mlCancelLogCount > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.mlCancelLogCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryMemberLessonCancelLogList
    }
  })], 1) : _vm._e(), _vm._v(" "), (!_vm.mlCancelLogCount) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()])]), _vm._v(" "), _c('TabPane', {
    attrs: {
      "label": "签到与扣费取消日志",
      "name": "checkinCancelLog"
    }
  }, [_c('section', [_c('div', {
    staticClass: "tbl-header"
  }, [_c('div', {
    staticClass: "l"
  }, [_c('i-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "text",
      "placeholder": "请选择会员",
      "readonly": true,
      "clearable": true
    },
    on: {
      "on-focus": _vm.openSelectMemberForCheckinCancel,
      "on-change": _vm.clearMemberForCheckinCancel
    },
    model: {
      value: (_vm.memberNameForCheckinCancel),
      callback: function($$v) {
        _vm.memberNameForCheckinCancel = $$v
      },
      expression: "memberNameForCheckinCancel"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("取消时间 ↓")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "120px"
    }
  }, [_vm._v("课程")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("上课日期")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("上课时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("教练")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("会员")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("使用会员卡")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "95"
    }
  }, [_vm._v("会员卡消费")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("消费人数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("签到人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "160"
    }
  }, [_vm._v("签到时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("取消人")])]), _vm._v(" "), _vm._l((_vm.mlCheckinCancelLogList), function(l, idx) {
    return (l.courseName && l.lessonDate) ? _c('tr', [_c('td', [_vm._v(_vm._s(l.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.courseName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(l.lessonDate)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatTime(l.lessonBeginTime)) + " ~ " + _vm._s(_vm.g.Util.formatTime(l.lessonEndTime)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.coachName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.memberName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.cardName))]), _vm._v(" "), _c('td', [(l.cardType === 1) ? [_vm._v("期限卡不计费")] : (l.cardType === 2) ? [_vm._v(_vm._s(l.cardPayment) + " 次")] : (l.cardType === 3) ? [_vm._v(_vm._s(l.cardPayment) + " 元")] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.paymentCount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.checkinUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.checkinTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createUname))])]) : _vm._e()
  })], 2)]), _vm._v(" "), (_vm.mlCheckinCancelLogCount && _vm.mlCheckinCancelLogCount > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.mlCheckinCancelLogCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryMemberLessonCheckinCancelLogList
    }
  })], 1) : _vm._e(), _vm._v(" "), (!_vm.mlCheckinCancelLogCount) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()])])], 1)], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员预约明细",
      "width": "900",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.memberLessonListDlg),
      callback: function($$v) {
        _vm.memberLessonListDlg = $$v
      },
      expression: "memberLessonListDlg"
    }
  }, [(_vm.mlCancelLogList) ? _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "45"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("会员")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("预约时间")]), _vm._v(" "), _c('th', [_vm._v("使用会员卡")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "95"
    }
  }, [_vm._v("会员卡消费")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("预约人数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("取消时间")]), _vm._v(" "), _c('th', [_vm._v("预约位置")])]), _vm._v(" "), _vm._l((_vm.mlCancelLogList), function(l, idx) {
    return _c('tr', [_c('td', {
      staticClass: "gray"
    }, [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.memberName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.bookingTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.cardName))]), _vm._v(" "), _c('td', [(l.cardType === 1) ? [_vm._v("期限卡不计费")] : (l.cardType === 2) ? [_vm._v(_vm._s(l.cardPayment) + " 次")] : (l.cardType === 3) ? [_vm._v(_vm._s(l.cardPayment) + " 元")] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.paymentCount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.position))])])
  })], 2)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.memberLessonListDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员查询与选择",
      "width": "700",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.memberSelectDlgForQueryBookingCancel),
      callback: function($$v) {
        _vm.memberSelectDlgForQueryBookingCancel = $$v
      },
      expression: "memberSelectDlgForQueryBookingCancel"
    }
  }, [(_vm.memberSelectDlgForQueryBookingCancel) ? _c('member-select', {
    attrs: {
      "after-select": _vm.afterSelectMemberForBookingCancel
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员查询与选择",
      "width": "700",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.memberSelectDlgForQueryCheckinCancel),
      callback: function($$v) {
        _vm.memberSelectDlgForQueryCheckinCancel = $$v
      },
      expression: "memberSelectDlgForQueryCheckinCancel"
    }
  }, [(_vm.memberSelectDlgForQueryCheckinCancel) ? _c('member-select', {
    attrs: {
      "after-select": _vm.afterSelectMemberForCheckinCancel
    }
  }) : _vm._e()], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2469:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "private-course"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v(_vm._s(_vm.pageTitle))])]), _vm._v(" "), _c('i-form', {
    ref: "course",
    staticClass: "myform",
    attrs: {
      "model": _vm.course,
      "rules": _vm.courseFormRule,
      "label-width": 100
    }
  }, [_c('form-item', {
    attrs: {
      "label": "课程类别",
      "required": ""
    }
  }, [(_vm.courseCateName) ? _c('b', {
    staticStyle: {
      "padding-right": "15px"
    }
  }, [_vm._v(_vm._s(_vm.courseCateName))]) : _vm._e(), _vm._v(" "), _c('i-button', {
    attrs: {
      "size": "small"
    },
    on: {
      "click": function($event) {
        return _vm.openCourseCateDlg()
      }
    }
  }, [_vm._v("选择 ...")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "courseName",
      "label": "课程名称"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": ""
    },
    model: {
      value: (_vm.course.courseName),
      callback: function($$v) {
        _vm.$set(_vm.course, "courseName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "course.courseName"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "课程图片"
    }
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccess,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultList
    }
  }, [_c('i-button', {
    staticClass: "input-s",
    attrs: {
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传图片")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "coachId",
      "label": "教练"
    }
  }, [_c('i-select', {
    staticClass: "input-s",
    attrs: {
      "filterable": ""
    },
    model: {
      value: (_vm.course.coachId),
      callback: function($$v) {
        _vm.$set(_vm.course, "coachId", $$v)
      },
      expression: "course.coachId"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("--不限--")]), _vm._v(" "), _vm._l((_vm.coachList), function(c) {
    return _c('i-option', {
      key: c.staffId,
      attrs: {
        "value": c.staffId
      }
    }, [_vm._v(_vm._s(c.name))])
  })], 2), _vm._v(" "), _c('span', {
    staticClass: "gray"
  }, [_vm._v("  \n\t\t\t\t\t\t（如果选不到所需教练，请去 "), _c('a', {
    attrs: {
      "href": "#/staff-query"
    }
  }, [_vm._v("员工页面")]), _vm._v(" 查看或添加教练）\n\t\t\t\t\t")])], 1), _vm._v(" "), (_vm.course.coachId) ? _c('form-item', {
    attrs: {
      "prop": "lessonFee",
      "label": "课时费标价"
    }
  }, [_c('input-num', {
    staticClass: "input-s",
    attrs: {
      "placeholder": "即单次课收费",
      "title": ""
    },
    model: {
      value: (_vm.course.lessonFee),
      callback: function($$v) {
        _vm.$set(_vm.course, "lessonFee", _vm._n($$v))
      },
      expression: "course.lessonFee"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")]), _vm._v(" "), _c('span', {
    staticClass: "tips",
    staticStyle: {
      "padding-left": "10px"
    }
  }, [_c('i', {
    staticClass: "iconfont icon-alert icon"
  }), _vm._v("在微官网展示私教课程时显示，不参与任何结算")])], 1) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "duration",
      "label": "单次课时长"
    }
  }, [_c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.course.duration),
      callback: function($$v) {
        _vm.$set(_vm.course, "duration", $$v)
      },
      expression: "course.duration"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("分钟")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "orderNo",
      "label": "展示序号"
    }
  }, [_c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.course.orderNo),
      callback: function($$v) {
        _vm.$set(_vm.course, "orderNo", $$v)
      },
      expression: "course.orderNo"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（数字越小，展示越靠前）")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "isPublic",
      "label": "是否对外展示"
    }
  }, [_c('i-switch', {
    attrs: {
      "size": "large"
    },
    model: {
      value: (_vm.course.isPublic),
      callback: function($$v) {
        _vm.$set(_vm.course, "isPublic", $$v)
      },
      expression: "course.isPublic"
    }
  }, [_c('span', {
    attrs: {
      "slot": "open"
    },
    slot: "open"
  }, [_vm._v("是")]), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "close"
    },
    slot: "close"
  }, [_vm._v("否")])]), _vm._v(" "), _c('help', [_vm._v("选择“是”，将在会员手机端和微官网展示，否则将不展示")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "intro",
      "label": "课程介绍"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 10,
      "placeholder": "对外展示私教课程时使用"
    },
    model: {
      value: (_vm.course.intro),
      callback: function($$v) {
        _vm.$set(_vm.course, "intro", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "course.intro"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "100px"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.handleSaveCourse()
      }
    }
  }, [_vm._v("提交")])], 1)], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "选择课程类别",
      "width": "550"
    },
    model: {
      value: (_vm.courseCateDlgView),
      callback: function($$v) {
        _vm.courseCateDlgView = $$v
      },
      expression: "courseCateDlgView"
    }
  }, [_c('ul', {
    staticClass: "course-cate-list"
  }, _vm._l((_vm.courseCateList), function(c) {
    return (!c.subType || c.subType === 2) ? _c('li', {
      on: {
        "click": function($event) {
          return _vm.selectCourseCate(c.intValue, c.itemName)
        }
      }
    }, [_vm._v("\n\t\t\t\t\t" + _vm._s(c.itemName) + "\n\t\t\t\t")]) : _vm._e()
  }), 0), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2485:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "private-lesson"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main -glr-"
  }, [_c('page-header', {
    attrs: {
      "title": "私教课时",
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), _c('section', [_vm._m(0), _vm._v(" "), (_vm.memberLessonList && _vm.memberLessonList.length > 0) ? _c('ul', {
    staticClass: "members"
  }, _vm._l((_vm.memberLessonList), function(ml, idx) {
    return _c('li', {
      key: ml.mlId
    }, [_c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(ml.avatarPathname, 230, 200, 'F5F5F5')
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "item",
      staticStyle: {
        "padding-top": "5px"
      }
    }, [_c('div', {
      staticClass: "l name"
    }, [_c('a', {
      attrs: {
        "href": '#/member-info/' + ml.memberId
      }
    }, [_vm._v(_vm._s(ml.memberName))])]), _vm._v(" "), _vm._m(1, true)]), _vm._v(" "), _c('div', {
      staticClass: "item"
    }, [_c('label', [_vm._v("签到人/时间：")]), _vm._v(" " + _vm._s(ml.checkinUname) + "   " + _vm._s(_vm.formatTime(ml.checkinTime)) + "\n\t\t\t\t\t")])])
  }), 0) : _c('div', [_c('p', {
    staticClass: "gray",
    attrs: {
      "align": "center"
    }
  }, [_vm._v("暂无上课记录，会员尚未签到")])])])], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("会员上课记录")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "r"
  }, [_c('span', {
    staticClass: "done"
  }, [_c('i', {
    staticClass: "iconfont icon-check2"
  }), _vm._v("完成")])])
}]}

/***/ }),

/***/ 2487:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "private-course-schedule"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', {
    attrs: {
      "width": "310"
    }
  }, [_c('i-select', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "placeholder": "请选择私教课程",
      "filterable": "",
      "clearable": "",
      "multiple": ""
    },
    model: {
      value: (_vm.query.courseIdList),
      callback: function($$v) {
        _vm.$set(_vm.query, "courseIdList", $$v)
      },
      expression: "query.courseIdList"
    }
  }, _vm._l((_vm.courseList), function(c) {
    return _c('i-option', {
      key: c.courseId,
      attrs: {
        "value": c.courseId
      }
    }, [_vm._v(_vm._s(c.courseName))])
  }), 1)], 1), _vm._v(" "), _c('td', {
    attrs: {
      "valign": "top"
    }
  }, [_c('ul', {
    staticClass: "query-cond-inline"
  }, [(_vm.coachList && _vm.coachList.length) ? _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "placeholder": "请选择教练",
      "filterable": ""
    },
    model: {
      value: (_vm.query.coachId),
      callback: function($$v) {
        _vm.$set(_vm.query, "coachId", $$v)
      },
      expression: "query.coachId"
    }
  }, [_vm._l((_vm.coachList), function(c) {
    return _c('i-option', {
      key: c.staffId,
      attrs: {
        "value": c.staffId
      }
    }, [_vm._v(_vm._s(c.name))])
  }), _vm._v(" "), (_vm.courseEditable) ? _c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_c('span', {
    staticClass: "gray"
  }, [_vm._v("无")])]) : _vm._e()], 2)], 1) : _vm._e(), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-input', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "type": "text",
      "placeholder": "请选择会员",
      "readonly": true,
      "clearable": true
    },
    on: {
      "on-focus": _vm.openSelectMember
    },
    model: {
      value: (_vm.memberName),
      callback: function($$v) {
        _vm.memberName = $$v
      },
      expression: "memberName"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "90px"
    },
    attrs: {
      "placeholder": "使用状态",
      "clearable": ""
    },
    model: {
      value: (_vm.query.usedStatus),
      callback: function($$v) {
        _vm.$set(_vm.query, "usedStatus", $$v)
      },
      expression: "query.usedStatus"
    }
  }, [_c('i-option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("未用完")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 2
    }
  }, [_vm._v("已用完")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 3
    }
  }, [_vm._v("已过期")])], 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('date-picker', {
    staticClass: "-datepick",
    attrs: {
      "type": "date",
      "placeholder": "课程开始日期"
    },
    model: {
      value: (_vm.query.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.query, "beginDate", $$v)
      },
      expression: "query.beginDate"
    }
  }), _vm._v("\n\t\t\t\t\t\t\t\t\t~\n\t\t\t\t\t\t\t\t\t"), _c('date-picker', {
    staticClass: "-datepick",
    attrs: {
      "type": "date",
      "placeholder": "课程结束日期"
    },
    model: {
      value: (_vm.query.endDate),
      callback: function($$v) {
        _vm.$set(_vm.query, "endDate", $$v)
      },
      expression: "query.endDate"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    attrs: {
      "icon": "ios-search",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.queryPcSchedule()
      }
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.resetQuery
    }
  }, [_vm._v("重置")])], 1)])])])])]), _vm._v(" "), _c('section', [(_vm.courseEditable) ? _c('div', {
    staticClass: "tbl-header"
  }, [_c('div', {
    staticClass: "l"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": _vm.handleAddCourseSchedule
    }
  }, [_vm._v("添加排课")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.openPsCopyDlg
    }
  }, [_vm._v("复制排课")]), _vm._v(" "), (_vm.courseEditable) ? [_c('i-button', {
    on: {
      "click": _vm.extendPsEndDate
    }
  }, [_vm._v("批量延期")]), _vm._v(" "), (_vm.isDisabledPs) ? _c('i-button', {
    on: {
      "click": function($event) {
        return _vm.updatePsListStatus(0)
      }
    }
  }, [_vm._v("批量显示")]) : _c('i-button', {
    on: {
      "click": function($event) {
        return _vm.updatePsListStatus(99)
      }
    }
  }, [_vm._v("批量隐藏")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.openPsCardAppendDlg
    }
  }, [_vm._v("批量添加上课计费卡")])] : _vm._e(), _vm._v(" "), _c('i-button', {
    attrs: {
      "icon": "ios-cloud-download-outline"
    },
    on: {
      "click": _vm.exportToXls
    }
  }, [_vm._v("导出")])], 2), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('checkbox', {
    on: {
      "on-change": function($event) {
        return _vm.queryPcSchedule()
      }
    },
    model: {
      value: (_vm.isDisabledPs),
      callback: function($$v) {
        _vm.isDisabledPs = $$v
      },
      expression: "isDisabledPs"
    }
  }, [_vm._v("查看隐藏排课")])], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_c('tr', [(_vm.courseEditable) ? _c('th', {
    staticClass: "ckbox",
    attrs: {
      "width": "40"
    },
    on: {
      "click": function($event) {
        return _vm.selectAll()
      }
    }
  }, [(_vm.isSelectAll) ? _c('i', {
    staticClass: "iconfont icon-checkbox-checked ckbox-1",
    staticStyle: {
      "font-weight": "normal"
    }
  }) : _c('i', {
    staticClass: "iconfont icon-checkbox-empty ckbox-0",
    staticStyle: {
      "font-weight": "normal"
    }
  })]) : _vm._e(), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("课程名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("教练")]), _vm._v(" "), _c('th', [_vm._v("会员")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "170"
    }
  }, [_vm._v("课程有效期")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("排课次数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("已用次数")]), _vm._v(" "), (_vm.g.data.user.isShopOwner) ? _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("教练课时费")]) : _vm._e(), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("创建人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "140"
    }
  }, [_vm._v("创建时间 ↓")]), _vm._v(" "), (_vm.courseEditable) ? _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("操作")]) : _vm._e()]), _vm._v(" "), _vm._l((_vm.pcScheduleList), function(l, idx) {
    return _c('tr', [(_vm.courseEditable) ? _c('td', {
      staticClass: "ckbox",
      on: {
        "click": function($event) {
          return _vm.selectPs(idx)
        }
      }
    }, [(!_vm.psCkList[idx]) ? _c('i', {
      staticClass: "iconfont icon-checkbox-empty ckbox-0"
    }) : _c('i', {
      staticClass: "iconfont icon-checkbox-checked ckbox-1"
    })]) : _vm._e(), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.courseName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.coachName))]), _vm._v(" "), _c('td', [(l.memberId) ? _c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.viewMemberBase(l.memberId)
        }
      }
    }, [_vm._v(_vm._s(l.memberName))]) : (l.limitBookingMembers) ? [_c('span', {
      staticClass: "gray"
    }, [_vm._v("[限]")]), _vm._v(" "), _c('span', {
      staticClass: "name-list"
    }, [_vm._l((l.limitBookingMemberNameList), function(name, idx) {
      return (idx <= 10) ? _c('a', {
        on: {
          "click": function($event) {
            return _vm.viewMemberBase(l.limitBookingMemberIdList[idx])
          }
        }
      }, [_vm._v(_vm._s(name))]) : _vm._e()
    }), _vm._v(" "), (l.limitBookingMemberNameList && l.limitBookingMemberNameList.length > 10) ? _c('i', {
      staticClass: "gray"
    }, [_vm._v("等")]) : _vm._e()], 2)] : _c('i', {
      staticClass: "gray"
    }, [_vm._v("未指定\n\t\t\t\t\t\t\t\t\t"), (l.enableMoreStudents) ? _c('span', {
      staticClass: "l5"
    }, [_vm._v("[一对多]")]) : _vm._e()])], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDateForShort(l.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDateForShort(l.endDate)))]), _vm._v(" "), _c('td', [(l.limitTimes) ? [_vm._v(_vm._s(l.limitTimes) + " "), _c('span', {
      staticClass: "gray"
    }, [_vm._v("次")])] : _vm._e()], 2), _vm._v(" "), _c('td', [(l.usedTimes) ? [_vm._v(_vm._s(l.usedTimes) + " "), _c('span', {
      staticClass: "gray"
    }, [_vm._v("次")])] : _vm._e()], 2), _vm._v(" "), (_vm.psCoachLessonFeeEditable) ? _c('td', [(l.coachLessonFeeType === 0 || l.coachLessonFeeType === 3) ? [_vm._v(_vm._s(l.coachLessonFee ? ('￥' + l.coachLessonFee) : ''))] : (l.coachLessonFeeType === 1) ? _c('i', {
      staticClass: "gray"
    }, [_vm._v("会员卡消费")]) : _vm._e()], 2) : _vm._e(), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createTime))]), _vm._v(" "), (_vm.courseEditable) ? _c('td', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.$router.push('/private-course-schedule-edit/' + l.psId)
        }
      }
    }, [_vm._v("详情")]), _vm._v(" "), _c('span', {
      staticClass: "spt"
    }, [_vm._v("|")]), _vm._v(" "), _c('Dropdown', {
      attrs: {
        "placement": "bottom-end"
      }
    }, [_c('a', {
      attrs: {
        "href": "javascript:void(0)"
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t更多\n\t\t\t\t\t\t\t\t\t\t"), _c('Icon', {
      attrs: {
        "type": "ios-arrow-down"
      }
    })], 1), _vm._v(" "), _c('DropdownMenu', {
      attrs: {
        "slot": "list"
      },
      slot: "list"
    }, [(!l.usedTimes) ? _c('DropdownItem', [_c('div', {
      on: {
        "click": function($event) {
          return _vm.delCourseSchedule(idx)
        }
      }
    }, [_vm._v("删除")])]) : _vm._e(), _vm._v(" "), (!_vm.isDisabledPs) ? _c('DropdownItem', [_c('div', {
      on: {
        "click": function($event) {
          return _vm.updateCourseScheduleStatus(idx, 'S')
        }
      }
    }, [_vm._v("隐藏")])]) : _vm._e(), _vm._v(" "), (_vm.isDisabledPs) ? _c('DropdownItem', [_c('div', {
      on: {
        "click": function($event) {
          return _vm.updateCourseScheduleStatus(idx, 'R')
        }
      }
    }, [_vm._v("恢复")])]) : _vm._e(), _vm._v(" "), (_vm.g.data.user.isShopOwner && l.usedTimes && l.reviewCnt) ? _c('DropdownItem', [_c('div', {
      on: {
        "click": function($event) {
          return _vm.openLessonReview(l.psId, l.courseName, l.coachName)
        }
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(l.reviewCnt) + "条评价\n\t\t\t\t\t\t\t\t\t\t\t")])]) : _vm._e()], 1)], 1)], 1) : _vm._e()])
  })], 2)]), _vm._v(" "), (_vm.scheduleCount && _vm.scheduleCount > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [(_vm.scheduleCount) ? _c('page', {
    attrs: {
      "total": _vm.scheduleCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.changePageNo
    }
  }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.scheduleCount === 0) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n\t\t\t\t\t暂无数据\n\t\t\t\t")]) : _vm._e()]), _vm._v(" "), _c('section', [_vm._m(0), _vm._v(" "), _c('ol', {
    staticStyle: {
      "font-size": "13px"
    }
  }, [_c('li', [_vm._v("私教课属于私人服务，上课时间可根据该会员而改变，每次上课前都需要约课；")]), _vm._v(" "), _c('li', [_vm._v("私教课的约课有两种方式：一是私教主动约课（电脑端或手机端）、二是会员主动约课（手机端）；")]), _vm._v(" "), _c('li', [_vm._v("约课后，可以在上课前取消；具体预约或取消设置，请参考【"), _c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/lesson-booking-conf')
      }
    }
  }, [_vm._v("预约设置")]), _vm._v("】")]), _vm._v(" "), _c('li', [_vm._v("隐藏后的私教排课，将不会显示在预约私教课的排课之列")])])])]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": _vm.reviewDlgTitle,
      "width": "900",
      "ok-text": "关闭",
      "cancel-text": "",
      "styles": {
        top: '5px'
      }
    },
    model: {
      value: (_vm.reviewDlgView),
      callback: function($$v) {
        _vm.reviewDlgView = $$v
      },
      expression: "reviewDlgView"
    }
  }, [_c('lesson-review-list', {
    attrs: {
      "courseType": 2,
      "course-schedule-id": _vm.courseScheduleId
    }
  })], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员基本信息",
      "width": "800",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.viewMemberDlg),
      callback: function($$v) {
        _vm.viewMemberDlg = $$v
      },
      expression: "viewMemberDlg"
    }
  }, [_c('member-base-info', {
    attrs: {
      "member-id": _vm.viewMemberId
    }
  })], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "复制所选私教排课",
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.selectPsCopyDlg),
      callback: function($$v) {
        _vm.selectPsCopyDlg = $$v
      },
      expression: "selectPsCopyDlg"
    }
  }, [_c('div', {
    staticClass: "tblform"
  }, [_c('table', {
    attrs: {
      "width": "480"
    }
  }, [_c('tr', [_c('th', {
    staticClass: "required",
    attrs: {
      "width": "100"
    }
  }, [_vm._v("复制到教练")]), _vm._v(" "), _c('td', [_c('i-select', {
    model: {
      value: (_vm.newCopyPs.coachId),
      callback: function($$v) {
        _vm.$set(_vm.newCopyPs, "coachId", $$v)
      },
      expression: "newCopyPs.coachId"
    }
  }, _vm._l((_vm.coachList), function(c) {
    return _c('i-option', {
      key: c.staffId,
      attrs: {
        "value": c.staffId
      }
    }, [_vm._v(_vm._s(c.name))])
  }), 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("排课次数")]), _vm._v(" "), _c('td', [_c('RadioGroup', {
    model: {
      value: (_vm.newCopyPs.limitTimesType),
      callback: function($$v) {
        _vm.$set(_vm.newCopyPs, "limitTimesType", $$v)
      },
      expression: "newCopyPs.limitTimesType"
    }
  }, [_c('Radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("源排课中的剩余排课次数")]), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("源排课中的总排课次数")])], 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("教练课时单价")]), _vm._v(" "), _c('td', [_c('input-num', {
    staticStyle: {
      "width": "120px"
    },
    model: {
      value: (_vm.newCopyPs.coachLessonFee),
      callback: function($$v) {
        _vm.$set(_vm.newCopyPs, "coachLessonFee", $$v)
      },
      expression: "newCopyPs.coachLessonFee"
    }
  }), _vm._v("  元\n\t\t\t\t\t\t\t"), _c('span', {
    staticClass: "help-tips"
  }, [_vm._v("（如不填表示复用源排课中的单价）")])], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("课程有效期：")]), _vm._v(" "), _c('td', [_c('date-picker', {
    staticStyle: {
      "width": "120px"
    },
    attrs: {
      "type": "date",
      "placeholder": "开始日期"
    },
    model: {
      value: (_vm.newCopyPs.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.newCopyPs, "beginDate", $$v)
      },
      expression: "newCopyPs.beginDate"
    }
  }), _vm._v("\n\t\t\t\t\t\t\t~\n\t\t\t\t\t\t\t"), _c('date-picker', {
    staticStyle: {
      "width": "120px"
    },
    attrs: {
      "type": "date",
      "placeholder": "结束日期"
    },
    model: {
      value: (_vm.newCopyPs.endDate),
      callback: function($$v) {
        _vm.$set(_vm.newCopyPs, "endDate", $$v)
      },
      expression: "newCopyPs.endDate"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("源排课状态")]), _vm._v(" "), _c('td', [_c('checkbox', {
    model: {
      value: (_vm.newCopyPs.isHideSrcPs),
      callback: function($$v) {
        _vm.$set(_vm.newCopyPs, "isHideSrcPs", $$v)
      },
      expression: "newCopyPs.isHideSrcPs"
    }
  }, [_vm._v("设置为隐藏")])], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "120px"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submitSelectedPsCopy
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.selectPsCopyDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "复制私教排课",
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.viewPsCopyDlg),
      callback: function($$v) {
        _vm.viewPsCopyDlg = $$v
      },
      expression: "viewPsCopyDlg"
    }
  }, [_c('div', {
    staticClass: "tblform ps-copy"
  }, [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('th', {
    staticClass: "required",
    staticStyle: {
      "padding-top": "5px"
    },
    attrs: {
      "width": "90",
      "valign": "top"
    }
  }, [_vm._v("源私教排课：")]), _vm._v(" "), _c('td', [_c('i-select', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "placeholder": "请先选择教练",
      "filterable": ""
    },
    on: {
      "on-change": _vm.changeCoachOfPsCopy
    },
    model: {
      value: (_vm.psCopy.srcCoachId),
      callback: function($$v) {
        _vm.$set(_vm.psCopy, "srcCoachId", $$v)
      },
      expression: "psCopy.srcCoachId"
    }
  }, _vm._l((_vm.coachList), function(c) {
    return _c('i-option', {
      key: c.staffId,
      attrs: {
        "value": c.staffId
      }
    }, [_vm._v(_vm._s(c.name))])
  }), 1), _vm._v(" "), (_vm.psCopy.srcPsList) ? _c('div', {
    staticClass: "ps-list"
  }, [_c('CheckboxGroup', {
    model: {
      value: (_vm.psCopy.srcPsIds),
      callback: function($$v) {
        _vm.$set(_vm.psCopy, "srcPsIds", $$v)
      },
      expression: "psCopy.srcPsIds"
    }
  }, [_vm._l((_vm.psCopy.srcPsList), function(p) {
    return _c('Checkbox', {
      key: p.psId,
      attrs: {
        "label": p.psId
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(p.courseName) + " 【" + _vm._s(_vm.g.Util.formatDate(p.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(p.endDate)) + "\n\t\t\t\t\t\t\t\t\t"), (p.coachLessonFee) ? [_vm._v("，教练课时单价：￥" + _vm._s(p.coachLessonFee))] : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t\t\t】\n\t\t\t\t\t\t\t\t")], 2)
  }), _vm._v(" "), (_vm.psCopy.srcPsList && !_vm.psCopy.srcPsList.length) ? _c('i', {
    staticClass: "gray small"
  }, [_vm._v("该教练无排课信息")]) : _vm._e()], 2)], 1) : _vm._e()], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("排课教练：")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "coach-list"
  }, [_c('CheckboxGroup', {
    attrs: {
      "vertical": ""
    },
    model: {
      value: (_vm.psCopy.coachIds),
      callback: function($$v) {
        _vm.$set(_vm.psCopy, "coachIds", $$v)
      },
      expression: "psCopy.coachIds"
    }
  }, _vm._l((_vm.coachList), function(c) {
    return _c('Checkbox', {
      key: c.staffId,
      attrs: {
        "label": c.staffId
      }
    }, [_vm._v(_vm._s(c.name))])
  }), 1)], 1)])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("课程有效期：")]), _vm._v(" "), _c('td', [_c('date-picker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "开始日期"
    },
    model: {
      value: (_vm.psCopy.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.psCopy, "beginDate", $$v)
      },
      expression: "psCopy.beginDate"
    }
  }), _vm._v("\n\t\t\t\t\t\t\t~\n              "), _c('date-picker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "结束日期"
    },
    model: {
      value: (_vm.psCopy.endDate),
      callback: function($$v) {
        _vm.$set(_vm.psCopy, "endDate", $$v)
      },
      expression: "psCopy.endDate"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "122px"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submitPsCopy
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.viewPsCopyDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1), _vm._v(" "), _c('div', {
    staticClass: "remark"
  }, [_c('h3', [_c('Icon', {
    attrs: {
      "type": "ios-information-circle-outline",
      "size": "16"
    }
  }), _vm._v("  必读说明：")], 1), _vm._v(" "), _c('ol', [_c('li', [_vm._v("通过复制“源私教排课”，可批量、快速生成其他教练的通用排课（排课信息中不指定会员）")]), _vm._v(" "), _c('li', [_vm._v("\n\t\t\t\t\t\t\t生成的新排课信息从“源私教排课”中复制，但是排课中的不指定会员，教练为上面选择的教练，其余排课信息相同\n            ")]), _vm._v(" "), _c('li', [_vm._v("\n\t\t\t\t\t\t\t可以不设置【课程有效期】，如果设置了，新排课信息中将使用此日期；否则，使用“源私教排课”中的课程有效期\n\t\t\t\t\t\t")])])])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员查询与选择",
      "width": "700",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.memberSelectDlgForQuery),
      callback: function($$v) {
        _vm.memberSelectDlgForQuery = $$v
      },
      expression: "memberSelectDlgForQuery"
    }
  }, [(_vm.memberSelectDlgForQuery) ? _c('member-select', {
    attrs: {
      "after-select": _vm.afterSelectMemberForQuery
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员查询与选择",
      "width": "700",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.memberSelectDlgForPsCopy),
      callback: function($$v) {
        _vm.memberSelectDlgForPsCopy = $$v
      },
      expression: "memberSelectDlgForPsCopy"
    }
  }, [(_vm.memberSelectDlgForPsCopy) ? _c('member-select', {
    attrs: {
      "after-select": _vm.afterSelectMemberForPsCopy
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "导出文件下载",
      "width": "500",
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.exportDlg),
      callback: function($$v) {
        _vm.exportDlg = $$v
      },
      expression: "exportDlg"
    }
  }, [_c('div', {
    staticClass: "export-xls"
  }, [(_vm.exportFileUrl) ? [(_vm.exportFileUrl) ? _c('a', {
    attrs: {
      "href": _vm.exportFileUrl,
      "target": "_blank"
    }
  }, [_vm._v("下载导出文件（xls）")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "remark"
  }, [_c('b', {
    staticClass: "red"
  }, [_vm._v("提示")]), _vm._v("：每次最多导出 600 条记录 "), _c('br'), _vm._v("如要导出下一个600条，请将当前页数增加20页后再导出")])] : _c('span', [_vm._v("正在查询并导出，请稍候...")])], 2)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "批量添加上课计费卡到排课中",
      "width": "700",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.psCardAppendDlg),
      callback: function($$v) {
        _vm.psCardAppendDlg = $$v
      },
      expression: "psCardAppendDlg"
    }
  }, [(_vm.psCardAppendDlg) ? _c('div', {
    staticStyle: {
      "padding": "10px"
    }
  }, [_c('table', {
    staticClass: "tblform",
    attrs: {
      "width": "500"
    }
  }, [_c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("会员卡")]), _vm._v(" "), _c('td', [(_vm.cardList) ? _c('i-select', {
    attrs: {
      "filterable": ""
    },
    on: {
      "on-change": _vm.chooseCard
    },
    model: {
      value: (_vm.selectCardId),
      callback: function($$v) {
        _vm.selectCardId = $$v
      },
      expression: "selectCardId"
    }
  }, _vm._l((_vm.cardList), function(c) {
    return _c('i-option', {
      key: c.cardId,
      attrs: {
        "value": c.cardId,
        "label": c.cardName
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(c.cardName) + "\n\t\t\t\t\t\t\t\t\t"), _c('div', {
      staticClass: "r gray"
    }, [_vm._v(_vm._s(_vm.g.Dict.CardType[c.cardType]))])])
  }), 1) : _vm._e()], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("上课计费")]), _vm._v(" "), _c('td', [(!_vm.selectCard || (_vm.selectCard && _vm.selectCard.cardType > 1)) ? _c('input-num', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "min": 0
    },
    model: {
      value: (_vm.selectCardPayment),
      callback: function($$v) {
        _vm.selectCardPayment = _vm._n($$v)
      },
      expression: "selectCardPayment"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.selectCard && _vm.selectCard.cardType === 1) ? _c('span', {
    staticClass: "orangered"
  }, [_vm._v("( 期限卡不计费 )")]) : _vm._e(), _vm._v(" "), (_vm.selectCard && _vm.selectCard.cardType > 1) ? [_vm._v("   " + _vm._s(_vm.g.Dict.CardUnitName[_vm.selectCard.cardType]))] : _vm._e()], 2)]), _vm._v(" "), _c('tr', [_c('th'), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "p10"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submitAppendCardPaymentToPsList
    }
  }, [_vm._v("提交")])], 1)])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit-help"
  }, [_vm._v("您需要知道的")])])
}]}

/***/ }),

/***/ 2497:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "private-lesson-cancel-log"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("私教课取消日志")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('ul', {
    staticClass: "query-cond-inline"
  }, [_c('li', {
    staticClass: "item"
  }, [_c('date-picker', {
    staticClass: "date-input",
    attrs: {
      "type": "date",
      "placeholder": "上课开始日期",
      "options": _vm.dateOptions
    },
    model: {
      value: (_vm.query.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.query, "beginDate", $$v)
      },
      expression: "query.beginDate"
    }
  }), _vm._v("\n\t\t\t\t\t\t\t\t~\n                "), _c('date-picker', {
    staticClass: "date-input",
    attrs: {
      "type": "date",
      "placeholder": "上课结束日期",
      "options": _vm.dateOptions
    },
    model: {
      value: (_vm.query.endDate),
      callback: function($$v) {
        _vm.$set(_vm.query, "endDate", $$v)
      },
      expression: "query.endDate"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "110px"
    },
    attrs: {
      "placeholder": "请选择教练"
    },
    model: {
      value: (_vm.query.coachId),
      callback: function($$v) {
        _vm.$set(_vm.query, "coachId", $$v)
      },
      expression: "query.coachId"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("【不限】")]), _vm._v(" "), _vm._l((_vm.coachList), function(c) {
    return _c('i-option', {
      key: c.staffId,
      attrs: {
        "value": c.staffId
      }
    }, [_vm._v(_vm._s(c.name))])
  })], 2)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-input', {
    staticStyle: {
      "width": "120px"
    },
    attrs: {
      "type": "text",
      "placeholder": "请选择会员",
      "readonly": true,
      "clearable": true
    },
    on: {
      "on-focus": _vm.openSelectMember,
      "on-change": _vm.clearMember
    },
    model: {
      value: (_vm.memberName),
      callback: function($$v) {
        _vm.memberName = $$v
      },
      expression: "memberName"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    staticClass: "query-btn",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.queryPcLessonCancelLog(null)
      }
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('i-button', {
    staticClass: "query-btn",
    on: {
      "click": _vm.resetQuery
    }
  }, [_vm._v("重置")])], 1)])])]), _vm._v(" "), (_vm.coachStatList && _vm.coachStatList.length) ? _c('div', [_c('ul', {
    staticClass: "coach-stat"
  }, _vm._l((_vm.coachStatList), function(s) {
    return _c('li', {
      class: {
        on: s.coachId === _vm.query.coachId
      },
      on: {
        "click": function($event) {
          return _vm.queryByCoach(s.coachId)
        }
      }
    }, [_vm._v(_vm._s(s.coachName) + "（" + _vm._s(s.lessonCnt) + "）")])
  }), 0)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "mytbl p10"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.lessonCancelLogList), function(l) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(l.courseName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(l.lessonDate)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatTime(l.lessonTime)))]), _vm._v(" "), _c('td', [_c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.viewMemberBase(l.memberId)
        }
      }
    }, [_vm._v(_vm._s(l.memberName))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.coachName))]), _vm._v(" "), _c('td', [_c('span', {
      class: {
        'orange': l.createUname === l.coachName
      }
    }, [_vm._v(_vm._s(l.createUname))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createTime) + "\n\t\t\t\t\t\t\t\t"), (l.lessonStatus === 9) ? _c('span', {
      staticClass: "orangered"
    }, [_c('i', {
      staticClass: "iconfont icon-alert1"
    })]) : (l.isCancelTimeGtLessonTime) ? _c('span', {
      staticClass: "orange"
    }, [_c('i', {
      staticClass: "iconfont icon-alert1"
    })]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.remark))])])
  })], 2), _vm._v(" "), _vm._m(1), _vm._v(" "), (_vm.lessonCancelLogCount && _vm.lessonCancelLogCount > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.lessonCancelLogCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryPcLessonCancelLog
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.lessonCancelLogList && !_vm.lessonCancelLogList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n\t\t\t\t\t\t暂无数据\n\t\t\t\t\t")]) : _vm._e()])])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员查询与选择",
      "width": "700",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.memberSelectDlgForQuery),
      callback: function($$v) {
        _vm.memberSelectDlgForQuery = $$v
      },
      expression: "memberSelectDlgForQuery"
    }
  }, [(_vm.memberSelectDlgForQuery) ? _c('member-select', {
    attrs: {
      "after-select": _vm.afterSelectMemberForQuery
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员基本信息",
      "width": "800",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.viewMemberDlg),
      callback: function($$v) {
        _vm.viewMemberDlg = $$v
      },
      expression: "viewMemberDlg"
    }
  }, [(_vm.viewMemberDlg) ? _c('member-base-info', {
    attrs: {
      "member-id": _vm.viewMemberId
    }
  }) : _vm._e()], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("课程")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("上课日期")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("上课时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("会员")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("教练")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("取消人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "160"
    }
  }, [_vm._v("取消时间")]), _vm._v(" "), _c('th', [_vm._v("取消原因")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "p15"
  }, [_c('i', {
    staticClass: "iconfont icon-alert1 orangered"
  }), _vm._v(" 表示在上课签到后取消\n\t\t\t\t\t\t \n\t\t\t\t\t\t"), _c('i', {
    staticClass: "iconfont icon-alert1 orange l15"
  }), _vm._v(" 表示在开课之后取消\n\t\t\t\t\t")])
}]}

/***/ }),

/***/ 2501:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "group-course"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', [(_vm.courseEditable) ? _c('div', {
    staticClass: "tbl-header"
  }, [_c('div', {
    staticClass: "l"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": _vm.handleAddCourse
    }
  }, [_vm._v("添加课程")])], 1), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('checkbox', {
    on: {
      "on-change": _vm.queryCourseList
    },
    model: {
      value: (_vm.isDisabledCourse),
      callback: function($$v) {
        _vm.isDisabledCourse = $$v
      },
      expression: "isDisabledCourse"
    }
  }, [_vm._v("查看停用课程")])], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.courseList), function(c, idx) {
    return _c('tr', [_c('td', {
      staticClass: "gray"
    }, [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.courseCateMap[c.courseCategory]))]), _vm._v(" "), _c('td', [_c('a', {
      staticStyle: {
        "display": "block"
      },
      on: {
        "click": function($event) {
          return _vm.viewCourse(idx)
        }
      }
    }, [_vm._v(_vm._s(c.courseName))])]), _vm._v(" "), _c('td', [(c.duration) ? [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(c.duration) + " "), _c('span', {
      staticClass: "gray"
    }, [_vm._v("分钟")])] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.maxStudents))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.minStudents))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.updateTime))]), _vm._v(" "), _c('td', [(_vm.courseEditable) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.$router.push('/group-course-edit/' + c.courseId)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delCourse(idx)
        }
      }
    }, [_vm._v("删除")])]), _vm._v(" "), (!_vm.isDisabledCourse) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.updateCourseStatus(idx, 'S')
        }
      }
    }, [_vm._v("停用")])]) : _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.updateCourseStatus(idx, 'R')
        }
      }
    }, [_vm._v("恢复")])])]) : _vm._e()])])
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "tbl-footer"
  }, [_c('div', {
    staticClass: "r"
  }, [_vm._v("共 " + _vm._s(_vm.courseList.length) + " 条记录")])])])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "课程信息",
      "width": "700",
      "styles": {
        top: '20px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.courseViewShow),
      callback: function($$v) {
        _vm.courseViewShow = $$v
      },
      expression: "courseViewShow"
    }
  }, [_c('div', {
    staticClass: "info-view"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("基本信息")]), _vm._v(" "), _c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("课程名称")]), _c('td', [_c('b', [_vm._v(_vm._s(_vm.course.courseName))])])]), _vm._v(" "), (_vm.course.imgUrl) ? _c('tr', [_c('th', [_vm._v("课程图片")]), _c('td', [_c('img', {
    staticClass: "-course-img",
    attrs: {
      "src": _vm.course.imgUrl
    }
  })])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', [_vm._v("课程时长")]), _c('td', [_vm._v(_vm._s(_vm.course.duration) + " (分钟)")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("最多预约人数")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.course.maxStudents))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("最少预约人数")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.course.minStudents))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("更新人")]), _c('td', [_vm._v(_vm._s(_vm.course.updateUname))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("更新时间")]), _c('td', [_vm._v(_vm._s(_vm.course.updateTime))])]), _vm._v(" "), (_vm.course.intro) ? _c('tr', [_c('th', {
    attrs: {
      "valign": "top"
    }
  }, [_vm._v("简介")]), _c('td', [_c('pre', [_vm._v(_vm._s(_vm.course.intro))])])]) : _vm._e()])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("课程类别")]), _vm._v(" "), _c('th', [_vm._v("课程名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("单次课时长")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("最多预约人数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("最少预约人数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("更新时间  ↓")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2507:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("私教课签到方式选择")]), _vm._v(" "), _c('div', {
    staticClass: "r small orange"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor big"
  }), _vm._v(" \n\t\t\t\t\t"), (_vm.g.data.shop.isTrial) ? [_vm._v("多种签到方式，总有一款适合您")] : [_vm._v("选择后，私教课签到方式立即生效，请慎重选择")]], 2)]), _vm._v(" "), _c('table', {
    staticClass: "checkin-types"
  }, [_c('tr', [_c('th', {
    on: {
      "click": function($event) {
        return _vm.changeCheckinType(1)
      }
    }
  }, [_c('span', [(_vm.checkinType === 1) ? [_vm._v("✔")] : _vm._e()], 2)]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "tit",
    on: {
      "click": function($event) {
        return _vm.changeCheckinType(1)
      }
    }
  }, [_vm._v("系统自动签到")]), _vm._v("\n\t\t\t\t\t\t私教课上课时间到达后，系统自动签到本节课，无需人工签到。\n            ")])]), _vm._v(" "), _c('tr', [_c('th', {
    on: {
      "click": function($event) {
        return _vm.changeCheckinType(2)
      }
    }
  }, [_c('span', [(_vm.checkinType === 2) ? [_vm._v("✔")] : _vm._e()], 2)]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "tit",
    on: {
      "click": function($event) {
        return _vm.changeCheckinType(2)
      }
    }
  }, [_vm._v("会员扫码或密码签到")]), _vm._v("\n\t\t\t\t\t\t会员上课前或上课后，到场馆前台后，前台工作人员点击电脑版上的私教课签到二维码，会员用微信扫码签到；\n\t\t\t\t\t\t"), _c('p'), _vm._v("\n\t\t\t\t\t\t如果会员忘记带手机，可以在前台输入系统登录密码完成私教课签到。\n\t\t\t\t\t")])]), _vm._v(" "), _c('tr', [_c('th', {
    on: {
      "click": function($event) {
        return _vm.changeCheckinType(4)
      }
    }
  }, [_c('span', [(_vm.checkinType === 4) ? [_vm._v("✔")] : _vm._e()], 2)]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "tit",
    on: {
      "click": function($event) {
        return _vm.changeCheckinType(4)
      }
    }
  }, [_vm._v("会员扫码签到")]), _vm._v("\n\t\t\t\t\t\t会员上课前或上课后，到场馆前台后，前台工作人员点击电脑版上的私教课签到二维码，会员用微信扫码签到。\n\t\t\t\t\t")])]), _vm._v(" "), _c('tr', [_c('th', {
    on: {
      "click": function($event) {
        return _vm.changeCheckinType(3)
      }
    }
  }, [_c('span', [(_vm.checkinType === 3) ? [_vm._v("✔")] : _vm._e()], 2)]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "tit",
    on: {
      "click": function($event) {
        return _vm.changeCheckinType(3)
      }
    }
  }, [_vm._v("会员人脸或指纹签到")]), _vm._v("\n\t\t\t\t\t\t会员在场馆内，使用我们提供的智能识别设备，进行人脸或指纹识别签到。\n\n\t\t\t\t\t\t"), _c('div', {
    staticClass: "mt20"
  }, [_c('checkbox', {
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.enableDoubleCheckin),
      callback: function($$v) {
        _vm.enableDoubleCheckin = $$v
      },
      expression: "enableDoubleCheckin"
    }
  }, [_c('span', {
    staticClass: "normal"
  }, [_vm._v("启用二次签到确认")])]), _vm._v(" "), (_vm.enableDoubleCheckin) ? [_c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v("\n\t\t\t\t\t\t\t\t两次签到的最小间隔时间："), _c('input-int', {
    staticStyle: {
      "width": "70px"
    },
    attrs: {
      "readonly": !_vm.editable
    },
    model: {
      value: (_vm.dobuleCheckinIntervalMin),
      callback: function($$v) {
        _vm.dobuleCheckinIntervalMin = $$v
      },
      expression: "dobuleCheckinIntervalMin"
    }
  }), _vm._v(" 分钟\n\t\t\t\t\t\t\t")] : _vm._e(), _vm._v(" "), (_vm.editable) ? _c('span', {
    staticClass: "l15"
  }, [_c('i-button', {
    staticClass: "smallbtn",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveDoubleCheckinConf
    }
  }, [_vm._v("确定")])], 1) : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t"), _c('help', [_vm._v("\n\t\t\t\t\t\t\t\t启用后，会员上私教课必须进行两次签到后本节课才算结束，并且两次签到的间隔时间不得小于设置中的时间。\n\t\t\t\t\t\t\t")])], 2)])])])]), _vm._v(" "), _c('section', [_vm._m(0), _vm._v(" "), _c('checkbox', {
    staticClass: "ckbox",
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": _vm.updatePlCheckinPrintEnable
    },
    model: {
      value: (_vm.plCheckinPrintEnable),
      callback: function($$v) {
        _vm.plCheckinPrintEnable = $$v
      },
      expression: "plCheckinPrintEnable"
    }
  }, [_vm._v("私教课签到后是否显示打印小票")]), _vm._v(" "), (_vm.plCheckinPrintEnable) ? _c('span', {
    staticClass: "l10"
  }, [_c('checkbox', {
    staticClass: "ckbox",
    attrs: {
      "disabled": !_vm.editable
    },
    on: {
      "on-change": function($event) {
        return _vm.updateShopArg(2050, _vm.showCardPriceInPlCheckinBill)
      }
    },
    model: {
      value: (_vm.showCardPriceInPlCheckinBill),
      callback: function($$v) {
        _vm.showCardPriceInPlCheckinBill = $$v
      },
      expression: "showCardPriceInPlCheckinBill"
    }
  }, [_vm._v("是否显示次卡消费金额")])], 1) : _vm._e()], 1), _vm._v(" "), _c('section', [_vm._m(1), _vm._v("\n\t\t\t只能在私教课结束后\n\t\t\t"), _c('input-int', {
    attrs: {
      "readonly": !_vm.editable
    },
    model: {
      value: (_vm.plCheckinLimitTime),
      callback: function($$v) {
        _vm.plCheckinLimitTime = $$v
      },
      expression: "plCheckinLimitTime"
    }
  }), _vm._v("\n\t\t\t分钟内签到\n\t\t\t"), (_vm.editable) ? _c('span', {
    staticClass: "l15"
  }, [_c('i-button', {
    staticClass: "smallbtn",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.updatePlCheckinLimitTime
    }
  }, [_vm._v("确定")])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "more-conf"
  }, [_c('checkbox', {
    staticClass: "ckbox",
    on: {
      "on-change": _vm.checkPlCheckinTimeSpecConfEnable
    },
    model: {
      value: (_vm.enablePlCheckinTimeSpecConf),
      callback: function($$v) {
        _vm.enablePlCheckinTimeSpecConf = $$v
      },
      expression: "enablePlCheckinTimeSpecConf"
    }
  }, [_vm._v("启用特殊课程签到时间设置")]), _vm._v(" "), _c('help', [_vm._v("启用后，下面设置的课程签到时，按照如下设置检查")]), _vm._v(" "), (_vm.enablePlCheckinTimeSpecConf) ? _c('div', {
    staticClass: "mt15"
  }, [_c('i-select', {
    staticStyle: {
      "width": "600px"
    },
    attrs: {
      "placeholder": "请选择需要特别设置的课程（可多选）",
      "multiple": ""
    },
    model: {
      value: (_vm.selectPrivateCourseIdArr),
      callback: function($$v) {
        _vm.selectPrivateCourseIdArr = $$v
      },
      expression: "selectPrivateCourseIdArr"
    }
  }, _vm._l((_vm.privateCourseList), function(c) {
    return _c('i-option', {
      key: c.courseId,
      attrs: {
        "value": c.courseId
      }
    }, [_vm._v(_vm._s(c.courseName))])
  }), 1), _vm._v(" "), _c('span', {
    staticClass: "l10"
  }, [_vm._v("\n\t\t\t\t\t\t可在上课前\t"), _c('input-int', {
    model: {
      value: (_vm.plCheckinTimeForSpec),
      callback: function($$v) {
        _vm.plCheckinTimeForSpec = $$v
      },
      expression: "plCheckinTimeForSpec"
    }
  }), _vm._v(" 分钟签到\n\t\t\t\t\t")], 1), _vm._v(" "), _c('span', {
    staticClass: "l15"
  }, [(_vm.editable) ? _c('i-button', {
    staticClass: "smallbtn",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.savePlCheckinTimeSpecConf
    }
  }, [_vm._v("确定")]) : _vm._e()], 1)], 1) : _vm._e()], 1)], 1), _vm._v(" "), _c('section', [_vm._m(2), _vm._v("\n\t\t\t会员扫码签到时，二维码的有效时间为\n\t\t\t"), _c('input-int', {
    attrs: {
      "readonly": !_vm.editable
    },
    model: {
      value: (_vm.plCheckinQrcodeMaxTime),
      callback: function($$v) {
        _vm.plCheckinQrcodeMaxTime = _vm._n($$v)
      },
      expression: "plCheckinQrcodeMaxTime"
    }
  }), _vm._v("\n\t\t\t秒\n\t\t\t"), (_vm.editable) ? _c('span', {
    staticClass: "l15"
  }, [_c('i-button', {
    staticClass: "smallbtn",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.updatePlCheckinQrcodeMaxTime
    }
  }, [_vm._v("确定")])], 1) : _vm._e()], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("打印小票设置")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("签到时间限制")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("扫码签到有效期设置")])])
}]}

/***/ }),

/***/ 2537:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "course"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "course",
      "page": "group-course-schedule"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v(_vm._s(_vm.csId ? '团课排课详情' : '添加团课排课'))])]), _vm._v(" "), _c('div', {
    staticClass: "myform",
    staticStyle: {
      "width": "100%"
    }
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("基本信息")]), _vm._v(" "), _c('i-form', {
    ref: "cs",
    staticStyle: {
      "width": "600px"
    },
    attrs: {
      "model": _vm.cs,
      "rules": _vm.csFormRule,
      "label-width": 120
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "courseId",
      "label": "课程"
    }
  }, [_c('i-select', {
    attrs: {
      "filterable": ""
    },
    on: {
      "on-change": _vm.handleChangeCourse
    },
    model: {
      value: (_vm.cs.courseId),
      callback: function($$v) {
        _vm.$set(_vm.cs, "courseId", $$v)
      },
      expression: "cs.courseId"
    }
  }, _vm._l((_vm.courseList), function(c) {
    return _c('i-option', {
      key: c.courseId,
      attrs: {
        "value": c.courseId
      }
    }, [_vm._v(_vm._s(c.courseName))])
  }), 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "csName",
      "label": "排课名称"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": "可输入本期排课的名称（可选）"
    },
    model: {
      value: (_vm.cs.csName),
      callback: function($$v) {
        _vm.$set(_vm.cs, "csName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "cs.csName"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "lessonLevel",
      "label": "课程难度"
    }
  }, [_c('Rate', {
    attrs: {
      "clearable": true
    },
    model: {
      value: (_vm.cs.lessonLevel),
      callback: function($$v) {
        _vm.$set(_vm.cs, "lessonLevel", $$v)
      },
      expression: "cs.lessonLevel"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（1星最低，5星最高）")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "coachId",
      "label": "教练"
    }
  }, [_c('i-select', {
    staticClass: "input-s",
    attrs: {
      "filterable": ""
    },
    model: {
      value: (_vm.cs.coachId),
      callback: function($$v) {
        _vm.$set(_vm.cs, "coachId", $$v)
      },
      expression: "cs.coachId"
    }
  }, _vm._l((_vm.coachList), function(c) {
    return _c('i-option', {
      key: c.staffId,
      attrs: {
        "value": c.staffId
      }
    }, [_vm._v(_vm._s(c.name))])
  }), 1)], 1), _vm._v(" "), (_vm.editable) ? _c('form-item', {
    attrs: {
      "prop": "coachLessonFeeType",
      "label": "教练课时费类型"
    }
  }, [_c('RadioGroup', {
    model: {
      value: (_vm.cs.coachLessonFeeType),
      callback: function($$v) {
        _vm.$set(_vm.cs, "coachLessonFeeType", $$v)
      },
      expression: "cs.coachLessonFeeType"
    }
  }, [_c('Radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("固定课时费")]), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("根据签到人数等比递增\n                "), _c('help', [_vm._v("例如，教练课时费设置为30元，如果上课签到人数为5人，"), _c('br'), _vm._v("则教练最终课时费是150元")])], 1), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("根据签到人数自定义")])], 1), _vm._v(" "), (_vm.cs.coachLessonFeeType === 2) ? _c('div', {
    staticClass: "p10"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        return _vm.addCoachFeeConf(0)
      }
    }
  }, [_vm._v("添加课时费设置")])], 1) : _vm._e(), _vm._v(" "), (_vm.cs.coachLessonFeeType === 2) ? _c('ul', {
    staticClass: "coach-fee-conf"
  }, _vm._l((_vm.coachFeeConfList), function(v, idx) {
    return (v.coachType === 0) ? _c('li', [_c('input-int', {
      staticClass: "input-s",
      attrs: {
        "placeholder": "签到人数"
      },
      model: {
        value: (v.lessonMembers),
        callback: function($$v) {
          _vm.$set(v, "lessonMembers", $$v)
        },
        expression: "v.lessonMembers"
      }
    }), _vm._v(" 人\n                "), _c('span', {
      staticClass: "spt"
    }, [_vm._v(" ")]), _vm._v(" "), _c('input-num', {
      staticClass: "input-s input-num",
      attrs: {
        "placeholder": "教练课时费"
      },
      model: {
        value: (v.coachFee),
        callback: function($$v) {
          _vm.$set(v, "coachFee", $$v)
        },
        expression: "v.coachFee"
      }
    }), _vm._v(" 元\n              ")], 1) : _vm._e()
  }), 0) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.editable && _vm.cs.coachLessonFeeType !== 2) ? _c('form-item', {
    attrs: {
      "prop": "coachLessonFee",
      "label": "教练课时费"
    }
  }, [_c('input-num', {
    staticClass: "input-s",
    attrs: {
      "placeholder": "",
      "title": ""
    },
    model: {
      value: (_vm.cs.coachLessonFee),
      callback: function($$v) {
        _vm.$set(_vm.cs, "coachLessonFee", $$v)
      },
      expression: "cs.coachLessonFee"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")]), _vm._v("\n              "), _c('span', {
    staticClass: "tips"
  }, [_c('i', {
    staticClass: "iconfont icon-alert icon"
  }), _vm._v("用于教练工资结算，请慎重填写")])], 1) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "viceCoachIdList",
      "label": "助教"
    }
  }, [_c('i-select', {
    staticStyle: {
      "width": "365px"
    },
    attrs: {
      "multiple": true,
      "filterable": ""
    },
    model: {
      value: (_vm.viceCoachIdList),
      callback: function($$v) {
        _vm.viceCoachIdList = $$v
      },
      expression: "viceCoachIdList"
    }
  }, _vm._l((_vm.coachList), function(c) {
    return _c('i-option', {
      key: c.staffId,
      attrs: {
        "value": c.staffId
      }
    }, [_vm._v(_vm._s(c.name))])
  }), 1), _vm._v(" "), _c('i-button', {
    staticStyle: {
      "height": "31px",
      "padding": "0 10px"
    },
    on: {
      "click": _vm.selectAllViceCoachList
    }
  }, [_vm._v("全选")]), _vm._v(" "), _c('help', {
    attrs: {
      "title": "提示"
    }
  }, [_vm._v("\n              助教是指协助上课的教练，助教可以代教练和学员签到、发布上课照片、给学员点评。\n            ")])], 1), _vm._v(" "), (_vm.editable && _vm.viceCoachIdList.length) ? _c('form-item', {
    attrs: {
      "prop": "viceCoachLessonFeeType",
      "label": "助教课时费类型"
    }
  }, [_c('RadioGroup', {
    model: {
      value: (_vm.cs.viceCoachLessonFeeType),
      callback: function($$v) {
        _vm.$set(_vm.cs, "viceCoachLessonFeeType", $$v)
      },
      expression: "cs.viceCoachLessonFeeType"
    }
  }, [_c('Radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("固定课时费")]), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("根据签到人数等比递增\n                "), _c('help', [_vm._v("例如，教练课时费设置为20元，如果上课签到人数为5人，"), _c('br'), _vm._v("则教练最终课时费是100元")])], 1), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("根据签到人数自由设置")])], 1), _vm._v(" "), (_vm.cs.viceCoachLessonFeeType === 2) ? _c('div', {
    staticClass: "p10"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        return _vm.addCoachFeeConf(1)
      }
    }
  }, [_vm._v("追加课时费设置")])], 1) : _vm._e(), _vm._v(" "), (_vm.cs.viceCoachLessonFeeType === 2) ? _c('ul', {
    staticClass: "coach-fee-conf"
  }, _vm._l((_vm.coachFeeConfList), function(v, idx) {
    return (v.coachType === 1) ? _c('li', [_c('input-int', {
      staticClass: "input-s",
      attrs: {
        "placeholder": "签到人数"
      },
      model: {
        value: (v.lessonMembers),
        callback: function($$v) {
          _vm.$set(v, "lessonMembers", $$v)
        },
        expression: "v.lessonMembers"
      }
    }), _vm._v(" 人\n                "), _c('span', {
      staticClass: "spt"
    }, [_vm._v(" ")]), _vm._v(" "), _c('input-num', {
      staticClass: "input-s input-num",
      attrs: {
        "placeholder": "助教课时费"
      },
      model: {
        value: (v.coachFee),
        callback: function($$v) {
          _vm.$set(v, "coachFee", $$v)
        },
        expression: "v.coachFee"
      }
    }), _vm._v(" 元\n              ")], 1) : _vm._e()
  }), 0) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.editable && _vm.viceCoachIdList.length && _vm.cs.viceCoachLessonFeeType !== 2) ? _c('form-item', {
    attrs: {
      "prop": "viceCoachLessonFee",
      "label": "助教课时费"
    }
  }, [_c('input-num', {
    staticClass: "input-s",
    attrs: {
      "placeholder": "",
      "title": ""
    },
    model: {
      value: (_vm.cs.viceCoachLessonFee),
      callback: function($$v) {
        _vm.$set(_vm.cs, "viceCoachLessonFee", $$v)
      },
      expression: "cs.viceCoachLessonFee"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")]), _vm._v("\n              "), _c('span', {
    staticClass: "tips"
  }, [_c('i', {
    staticClass: "iconfont icon-alert icon"
  }), _vm._v("用于助教工资结算，请慎重填写")])], 1) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "groundId",
      "label": "上课场地"
    }
  }, [_c('i-select', {
    model: {
      value: (_vm.cs.groundId),
      callback: function($$v) {
        _vm.$set(_vm.cs, "groundId", $$v)
      },
      expression: "cs.groundId"
    }
  }, [_c('i-option', {
    attrs: {
      "value": "",
      "label": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("[无]")])]), _vm._v(" "), _vm._l((_vm.groundList), function(g) {
    return _c('i-option', {
      key: g.groundId,
      attrs: {
        "value": g.groundId
      }
    }, [_vm._v(_vm._s(g.groundName))])
  })], 2)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "isNeedBooking",
      "label": "是否需要预约"
    }
  }, [_c('i-switch', {
    attrs: {
      "size": "large"
    },
    model: {
      value: (_vm.cs.isNeedBooking),
      callback: function($$v) {
        _vm.$set(_vm.cs, "isNeedBooking", $$v)
      },
      expression: "cs.isNeedBooking"
    }
  }, [_c('span', {
    attrs: {
      "slot": "open"
    },
    slot: "open"
  }, [_vm._v("是")]), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "close"
    },
    slot: "close"
  }, [_vm._v("否")])]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v(" "), _c('i', {
    staticClass: "iconfont icon-alert icon"
  }), _vm._v("如果需要，上课前会员须先预约，然后才能签到")])], 1), _vm._v(" "), (_vm.cs.isNeedBooking) ? _c('form-item', {
    attrs: {
      "prop": "maxStudents",
      "label": "最多预约人数"
    }
  }, [_c('input-int', {
    staticClass: "-input-s",
    attrs: {
      "placeholder": ""
    },
    model: {
      value: (_vm.cs.maxStudents),
      callback: function($$v) {
        _vm.$set(_vm.cs, "maxStudents", $$v)
      },
      expression: "cs.maxStudents"
    }
  }), _vm._v(" "), (_vm.cs.isNeedBooking) ? _c('span', {
    staticClass: "tips"
  }, [_c('i', {
    staticClass: "iconfont icon-alert -note"
  }), _vm._v(" 最多可预约上课的人数")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.cs.isNeedBooking) ? _c('form-item', {
    attrs: {
      "prop": "minStudents",
      "label": "最少预约人数"
    }
  }, [_c('input-int', {
    staticClass: "-input-s",
    attrs: {
      "placeholder": ""
    },
    model: {
      value: (_vm.cs.minStudents),
      callback: function($$v) {
        _vm.$set(_vm.cs, "minStudents", $$v)
      },
      expression: "cs.minStudents"
    }
  }), _vm._v(" "), (_vm.cs.isNeedBooking) ? _c('span', {
    staticClass: "tips"
  }, [_c('i', {
    staticClass: "iconfont icon-alert -note"
  }), _vm._v(" "), _c('span', {
    staticClass: "orange"
  }, [_vm._v("预约人数不满，系统将自动取消")]), _vm._v(" "), _c('help', {
    staticClass: "l10",
    attrs: {
      "title": "更多提示"
    }
  }, [_vm._v("\n                如果设置了最少预约人数，并且有人预约了，当上课前*小时（预约设置中可设置）未达到最少预约人数，\n                系统将自动发送微信消息给已预约上课的会员，以及上课的教练；系统会在上课时间到达后检查并自动取消本节课。\n                "), _c('p'), _vm._v("\n                注：会员或教练想要收到系统发出的微信消息提醒，必须关注系统公众号（健总管）或场馆授权公众号，并且至少登录过一次健总管微信版（自动完成微信绑定）。\n              ")])], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.cs.isNeedBooking) ? _c('form-item', {
    attrs: {
      "prop": "allowMemberCheckin",
      "label": "允许会员签到"
    }
  }, [_c('i-switch', {
    attrs: {
      "size": "large"
    },
    model: {
      value: (_vm.cs.allowMemberCheckin),
      callback: function($$v) {
        _vm.$set(_vm.cs, "allowMemberCheckin", $$v)
      },
      expression: "cs.allowMemberCheckin"
    }
  }, [_c('span', {
    attrs: {
      "slot": "open"
    },
    slot: "open"
  }, [_vm._v("是")]), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "close"
    },
    slot: "close"
  }, [_vm._v("否")])]), _vm._v(" "), _c('help', {
    staticClass: "l10",
    attrs: {
      "title": "提示"
    }
  }, [_vm._v("\n              如果设置为是，会员预约后，可自己在手机版签到；\n              "), _c('p'), _vm._v("否则，不能在手机版签到，只能由前台或教练代签到。\n            ")])], 1) : _vm._e(), _vm._v(" "), (_vm.cs.isNeedBooking) ? _c('form-item', {
    attrs: {
      "prop": "maxMlBookings",
      "label": "会员预约限制"
    }
  }, [_vm._v("\n            每人每节课最多可预约\n            "), _c('i-input', {
    staticStyle: {
      "width": "60px",
      "margin": "0 10px"
    },
    attrs: {
      "type": "text",
      "placeholder": "1 ~ 100"
    },
    model: {
      value: (_vm.cs.maxMlBookings),
      callback: function($$v) {
        _vm.$set(_vm.cs, "maxMlBookings", _vm._n($$v))
      },
      expression: "cs.maxMlBookings"
    }
  }), _vm._v("\n            人次\n            "), _c('help', {
    staticClass: "l10",
    attrs: {
      "title": "提示"
    }
  }, [_vm._v("\n              如果会员使用次卡或储值卡预约团课，可在预约时填写此节课预约的人数，预约后系统会扣除相应的次数。例如：带亲朋好友来上课。\n              "), _c('p'), _vm._v("此处可设置每节课每人最多可预约的人数，如果填“1”，表示只能是自己预约上课，不可带他人预约。\n              "), _c('p'), _c('b', [_vm._v("备注：")]), _vm._v(" 此设置对于期限卡预约团课没有影响，期限卡预约团课，每人每节课只能预约一次。\n            ")])], 1) : _vm._e(), _vm._v(" "), (_vm.cs.isNeedBooking) ? _c('form-item', {
    attrs: {
      "prop": "enableQueue",
      "label": "是否启用排队"
    }
  }, [_c('i-switch', {
    attrs: {
      "size": "large"
    },
    model: {
      value: (_vm.cs.enableQueue),
      callback: function($$v) {
        _vm.$set(_vm.cs, "enableQueue", $$v)
      },
      expression: "cs.enableQueue"
    }
  }, [_c('span', {
    attrs: {
      "slot": "open"
    },
    slot: "open"
  }, [_vm._v("是")]), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "close"
    },
    slot: "close"
  }, [_vm._v("否")])]), _vm._v(" "), _c('help', {
    staticClass: "l10",
    attrs: {
      "title": "提示"
    }
  }, [_vm._v("\n              如果启用了排队，当预约人数满员时，会员可以选择排队预约（与预约类似）；\n              "), _c('p'), _vm._v("当有会员取消时，系统自动将优先排队人员转为正式预约会员（可在【预约设置】中设置是否发通知给该排队人员）；\n              "), _c('p'), _vm._v("在上课时间到达后，系统会自动清除排队人员，如有会员卡扣费，系统会自动退还；同时系统会发通知给排队人员。\n            ")])], 1) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "classMembers",
      "label": "固定学员"
    }
  }, [_c('div', {
    staticClass: "orange"
  }, [_c('i', {
    staticClass: "iconfont icon-alert icon orange"
  }), _vm._v(" 可选择添加固定上课人员，上课时教练或前台统一签到")]), _vm._v(" "), (_vm.classMembers && _vm.classMembers.length) ? _c('ul', {
    staticClass: "members"
  }, [_vm._l((_vm.classMembers), function(m) {
    return _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.viewMemberInfo(m.memberId)
        }
      }
    }, [_vm._v(_vm._s(m.name))]), _vm._v(" "), (_vm.editable) ? _c('a', {
      staticClass: "close",
      on: {
        "click": function($event) {
          return _vm.delClassMember(m.memberId, m.name)
        }
      }
    }, [_vm._v("×")]) : _vm._e()])
  }), _vm._v(" "), _c('li', {
    staticClass: "gray",
    staticStyle: {
      "background": "#fff"
    }
  }, [_vm._v("共 " + _vm._s(_vm.classMembers.length) + " 人")])], 2) : _vm._e(), _vm._v(" "), (_vm.editable) ? _c('div', {
    staticClass: "p10"
  }, [_c('i-button', {
    attrs: {
      "icon": "md-add"
    },
    on: {
      "click": function($event) {
        _vm.memberSelectDlg = true
      }
    }
  }, [_vm._v("点击添加固定学员")])], 1) : _vm._e()]), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "limitAges",
      "label": "学员年龄限制"
    }
  }, [_c('input-int', {
    staticStyle: {
      "width": "60px"
    },
    attrs: {
      "max": "90"
    },
    model: {
      value: (_vm.limitAges[0]),
      callback: function($$v) {
        _vm.$set(_vm.limitAges, 0, _vm._n($$v))
      },
      expression: "limitAges[0]"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("~")]), _vm._v(" "), _c('input-int', {
    staticStyle: {
      "width": "60px"
    },
    attrs: {
      "max": "1000"
    },
    model: {
      value: (_vm.limitAges[1]),
      callback: function($$v) {
        _vm.$set(_vm.limitAges, 1, _vm._n($$v))
      },
      expression: "limitAges[1]"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "l15"
  }, [_c('RadioGroup', {
    model: {
      value: (_vm.cs.ageUnit),
      callback: function($$v) {
        _vm.$set(_vm.cs, "ageUnit", $$v)
      },
      expression: "cs.ageUnit"
    }
  }, [_c('Radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("岁")]), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("月")])], 1)], 1), _vm._v(" "), _c('help', {
    staticClass: "l10",
    attrs: {
      "title": "提示"
    }
  }, [_vm._v("\n              设置后，表示仅限此年龄段的学员上课，即预约或直接签到时系统将会检查学员年龄。\n            ")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "上课计费设置",
      "required": ""
    }
  }, [_c('span', {
    staticClass: "gray"
  }, [_c('i', {
    staticClass: "iconfont icon-alert icon orange"
  }), _vm._v(" 请设置会员参与本课需要使用的卡以及费用")]), _vm._v(" "), _c('ul', {
    staticClass: "card-payment-list"
  }, [_c('li', {
    staticClass: "-hd"
  }, [_c('div', {
    staticClass: "name"
  }, [_c('checkbox', {
    on: {
      "on-change": _vm.checkAllCards
    },
    model: {
      value: (_vm.cardCheckAll),
      callback: function($$v) {
        _vm.cardCheckAll = $$v
      },
      expression: "cardCheckAll"
    }
  }, [_vm._v("\n                    会员卡种类\n                  ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v("课程结算设置")])]), _vm._v(" "), _vm._l((_vm.cardList), function(c, index) {
    return (_vm.cardPayments[c.cardId].checked || c.status === 0) ? _c('li', [_c('div', {
      staticClass: "name"
    }, [_c('checkbox', {
      on: {
        "on-change": function($event) {
          return _vm.checkCardPayment(c)
        }
      },
      model: {
        value: (_vm.cardPayments[c.cardId].checked),
        callback: function($$v) {
          _vm.$set(_vm.cardPayments[c.cardId], "checked", $$v)
        },
        expression: "cardPayments[c.cardId].checked"
      }
    }, [_vm._v(" " + _vm._s(c.cardName))])], 1), _vm._v(" "), _c('div', {
      staticClass: "desc"
    }, [(c.cardType === 1) ? [_c('span', {
      staticClass: "gray"
    }, [_vm._v("期限卡，不计单次费用")])] : (c.cardType === 2) ? [_vm._v("\n                    每次课计费\n                    "), _c('input-num', {
      staticClass: "input",
      model: {
        value: (_vm.cardPayments[c.cardId].payment),
        callback: function($$v) {
          _vm.$set(_vm.cardPayments[c.cardId], "payment", _vm._n($$v))
        },
        expression: "cardPayments[c.cardId].payment"
      }
    }), _c('b', {
      staticClass: "orange"
    }, [_vm._v("次")])] : (c.cardType === 3) ? [_vm._v("\n                    每次课计费\n                    "), _c('input-num', {
      staticClass: "input",
      model: {
        value: (_vm.cardPayments[c.cardId].payment),
        callback: function($$v) {
          _vm.$set(_vm.cardPayments[c.cardId], "payment", _vm._n($$v))
        },
        expression: "cardPayments[c.cardId].payment"
      }
    }), _c('b', {
      staticClass: "red"
    }, [_vm._v("元")])] : (c.cardType === 4) ? [_vm._v("\n                    每次课计费\n                    "), _c('input-int', {
      staticClass: "input",
      model: {
        value: (_vm.cardPayments[c.cardId].payment),
        callback: function($$v) {
          _vm.$set(_vm.cardPayments[c.cardId], "payment", _vm._n($$v))
        },
        expression: "cardPayments[c.cardId].payment"
      }
    }), _c('b', {
      staticClass: "green"
    }, [_vm._v(_vm._s(_vm.g.Dict.CardTimeTypes[c.cardTimeType]))])] : _vm._e()], 2)]) : _vm._e()
  })], 2)])], 1), _vm._v(" "), _c('div', {
    staticClass: "tit"
  }, [_c('div', {
    staticClass: "l"
  }, [_vm._v("课程周期设置\n            "), _c('help', [_vm._v("\n              如要删除某时间段，可直接清空或点击编辑框右端的删除符号；时间段可复制粘贴\n            ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [(!_vm.csId) ? [_c('checkbox', {
    model: {
      value: (_vm.showPsLessonTitle),
      callback: function($$v) {
        _vm.showPsLessonTitle = $$v
      },
      expression: "showPsLessonTitle"
    }
  }, [_vm._v("显示上课主题")])] : _vm._e()], 2)]), _vm._v(" "), _c('i-form', {
    staticClass: "time-conf",
    attrs: {
      "label-width": 120
    }
  }, [_c('form-item', {
    attrs: {
      "label": "课程日期",
      "required": ""
    }
  }, [_c('date-picker', {
    staticClass: "-input-s",
    attrs: {
      "type": "date",
      "placeholder": "开始日期"
    },
    model: {
      value: (_vm.cs.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.cs, "beginDate", $$v)
      },
      expression: "cs.beginDate"
    }
  }), _vm._v("\n            ~\n            "), _c('date-picker', {
    staticClass: "-input-s",
    attrs: {
      "options": _vm.futureDateOption,
      "type": "date",
      "placeholder": "结束日期"
    },
    model: {
      value: (_vm.cs.endDate),
      callback: function($$v) {
        _vm.$set(_vm.cs, "endDate", $$v)
      },
      expression: "cs.endDate"
    }
  }), _vm._v(" "), _c('help', {
    attrs: {
      "title": "帮助"
    }
  }, [_vm._v("\n              团课中的课程时期是指，团课上课的日期范围。\n              "), _c('p'), _vm._v("\n              例如：课程日期设置为【2017-1-1 ~ 2017-1-30】，课程周期设置（如下）为周一（14:00 ~ 15:00）。提交后，\n              系统会自动生成2017-1-1 ~ 2017-1-30期间每周一（14:00 ~ 15:00）的课。会员可在生成的课上预约或签到。\n            ")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "排除日期"
    }
  }, [_c('ul', {
    staticClass: "exclude-dates"
  }, [_vm._l((_vm.excludeDateList), function(v, idx) {
    return _c('li', {
      staticClass: "item"
    }, [_c('DatePicker', {
      staticClass: "input-date",
      attrs: {
        "type": "date",
        "split-panels": ""
      },
      model: {
        value: (_vm.excludeDateList[idx]),
        callback: function($$v) {
          _vm.$set(_vm.excludeDateList, idx, $$v)
        },
        expression: "excludeDateList[idx]"
      }
    })], 1)
  }), _vm._v(" "), _c('li', [_c('i-button', {
    staticClass: "-addtime",
    attrs: {
      "icon": "md-add"
    },
    on: {
      "click": _vm.addExcludeDateInput
    }
  })], 1)], 2), _vm._v(" "), _c('help', {
    attrs: {
      "title": "帮助"
    }
  }, [_vm._v("\n              排除日期是指在上述”课程日期“中排除的日期（可设置多个），在排课时，将不排这些日期的课。\n            ")])], 1), _vm._v(" "), _vm._l((_vm.weeks), function(week, index) {
    return _c('form-item', {
      key: index,
      attrs: {
        "prop": "courseId",
        "label": week
      }
    }, [_vm._l((_vm.timesList[index]), function(time, tmidx) {
      return _c('span', {
        key: index * 100 + tmidx,
        staticClass: "item"
      }, [_c('time-picker', {
        staticClass: "-timepick",
        attrs: {
          "format": "HH:mm",
          "confirm": "",
          "type": "timerange",
          "placeholder": "选择时间段"
        },
        model: {
          value: (_vm.timeValList[index + '-' + tmidx]),
          callback: function($$v) {
            _vm.$set(_vm.timeValList, index + '-' + tmidx, $$v)
          },
          expression: "timeValList[index + '-' + tmidx]"
        }
      }), _vm._v(" "), (_vm.showPsLessonTitle) ? _c('i-input', {
        staticClass: "ps-lesson-title",
        attrs: {
          "type": "text",
          "placeholder": "上课主题（选填）"
        },
        model: {
          value: (_vm.lessonTitleList[index + '-' + tmidx]),
          callback: function($$v) {
            _vm.$set(_vm.lessonTitleList, index + '-' + tmidx, $$v)
          },
          expression: "lessonTitleList[index + '-' + tmidx]"
        }
      }) : _vm._e()], 1)
    }), _vm._v(" "), _c('i-button', {
      staticClass: "-addtime",
      attrs: {
        "icon": "md-add"
      },
      on: {
        "click": function($event) {
          return _vm.addTimePick(index)
        }
      }
    })], 2)
  }), _vm._v(" "), (_vm.cs.csId) ? [_c('div', {
    staticClass: "tit"
  }, [_vm._v("基本信息")]), _vm._v(" "), _c('form-item', {
    staticClass: "low-margin",
    attrs: {
      "label": "创建人"
    }
  }, [_vm._v(_vm._s(_vm.cs.createUname))]), _vm._v(" "), _c('form-item', {
    staticClass: "low-margin",
    attrs: {
      "label": "创建时间"
    }
  }, [_vm._v(_vm._s(_vm.cs.createTime))]), _vm._v(" "), _c('form-item', {
    staticClass: "low-margin",
    attrs: {
      "label": "更新人"
    }
  }, [_vm._v(_vm._s(_vm.cs.updateUname))]), _vm._v(" "), _c('form-item', {
    staticClass: "low-margin",
    attrs: {
      "label": "更新时间"
    }
  }, [_vm._v(_vm._s(_vm.cs.updateTime))])] : _vm._e()], 2), _vm._v(" "), (_vm.editable) ? _c('div', {
    class: {
      'form-submit-bottom': _vm.cs.csId,
      'form-submit': !_vm.csId
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.handleSubmit()
      }
    }
  }, [_vm._v("提交")]), _vm._v("  \n          "), (_vm.csId) ? _c('i-button', {
    staticStyle: {
      "background": "#fff"
    },
    attrs: {
      "icon": "ios-add-circle-outline",
      "title": "复制当前排课信息到一个新排课"
    },
    on: {
      "click": _vm.copyCs
    }
  }, [_vm._v("复制排课")]) : _vm._e(), _vm._v(" "), (_vm.csId) ? _c('i-button', {
    staticStyle: {
      "background": "#fff"
    },
    attrs: {
      "icon": "md-add",
      "type": "default"
    },
    on: {
      "click": _vm.openNewLessonDlg
    }
  }, [_vm._v("添加一节课")]) : _vm._e()], 1) : _vm._e()], 1)])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "添加一节课",
      "width": "600",
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.newLessonDlg),
      callback: function($$v) {
        _vm.newLessonDlg = $$v
      },
      expression: "newLessonDlg"
    }
  }, [_c('div', {
    staticClass: "warning"
  }, [_c('i', {
    staticClass: "iconfont icon-alert3 big"
  }), _vm._v(" 在此排课模板基础上，快速生成一节课； 如需生成若干节课，请使用排课功能。")]), _vm._v(" "), (_vm.newLessonDlg) ? _c('table', {
    staticClass: "new-lesson-tbl"
  }, [_c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("上课教练")]), _vm._v(" "), _c('td', [_c('i-select', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "filterable": ""
    },
    model: {
      value: (_vm.newLesson.coachId),
      callback: function($$v) {
        _vm.$set(_vm.newLesson, "coachId", $$v)
      },
      expression: "newLesson.coachId"
    }
  }, _vm._l((_vm.coachList), function(c) {
    return _c('i-option', {
      key: c.staffId,
      attrs: {
        "value": c.staffId
      }
    }, [_vm._v(_vm._s(c.name))])
  }), 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("上课助教")]), _vm._v(" "), _c('td', [_c('i-select', {
    attrs: {
      "multiple": ""
    },
    model: {
      value: (_vm.newLesson.viceCoachIdArr),
      callback: function($$v) {
        _vm.$set(_vm.newLesson, "viceCoachIdArr", $$v)
      },
      expression: "newLesson.viceCoachIdArr"
    }
  }, _vm._l((_vm.coachList), function(c) {
    return _c('i-option', {
      key: c.staffId,
      attrs: {
        "value": c.staffId
      }
    }, [_vm._v(_vm._s(c.name))])
  }), 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("上课日期")]), _vm._v(" "), _c('td', [_c('Date-picker', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "format": "yyyy-MM-dd",
      "type": "date",
      "placeholder": "选择上课日期"
    },
    model: {
      value: (_vm.newLesson.lessonDate),
      callback: function($$v) {
        _vm.$set(_vm.newLesson, "lessonDate", $$v)
      },
      expression: "newLesson.lessonDate"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("上课时间")]), _vm._v(" "), _c('td', [_c('time-picker', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "format": "HH:mm",
      "type": "timerange",
      "confirm": "",
      "placeholder": "选择时间范围"
    },
    model: {
      value: (_vm.newLesson.lessonTimes),
      callback: function($$v) {
        _vm.$set(_vm.newLesson, "lessonTimes", $$v)
      },
      expression: "newLesson.lessonTimes"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('th'), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "mt15"
  }, [_c('i-button', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.createLesson
    }
  }, [_vm._v("提交")]), _vm._v("\n             \n            "), _c('i-button', {
    attrs: {
      "type": "text"
    },
    on: {
      "click": function($event) {
        _vm.newLessonDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)])])]) : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员查询与选择",
      "width": "700",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.memberSelectDlg),
      callback: function($$v) {
        _vm.memberSelectDlg = $$v
      },
      expression: "memberSelectDlg"
    }
  }, [(_vm.memberSelectDlg) ? _c('member-select', {
    attrs: {
      "after-select": _vm.afterSelectMember
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员基本信息",
      "width": "800",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.viewMemberDlg),
      callback: function($$v) {
        _vm.viewMemberDlg = $$v
      },
      expression: "viewMemberDlg"
    }
  }, [(_vm.viewMemberDlg) ? _c('member-base-info', {
    attrs: {
      "member-id": _vm.selectMemberId
    }
  }) : _vm._e()], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2541:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-lr-"
  }, [
    [(_vm.g.data.user.isShopOwner && _vm.courseScheduleId) ? _c('div', {
      staticClass: "gray",
      staticStyle: {
        "text-align": "right"
      }
    }, [_c('Icon', {
      staticClass: "orange",
      attrs: {
        "type": "ios-information-circle-outline",
        "size": "16"
      }
    }), _vm._v(" 会员姓名仅店长可看到\n\t\t")], 1) : _vm._e(), _vm._v(" "), (_vm.g.data.user.isShopOwner && !_vm.lessonId && !_vm.courseScheduleId) ? _c('section', {
      staticClass: "query-section"
    }, [_c('ul', {
      staticClass: "query-cond-inline"
    }, [(_vm.coachList && _vm.coachList.length) ? _c('li', {
      staticClass: "item"
    }, [_c('i-select', {
      staticStyle: {
        "width": "120px"
      },
      attrs: {
        "placeholder": "选择教练"
      },
      model: {
        value: (_vm.query.coachId),
        callback: function($$v) {
          _vm.$set(_vm.query, "coachId", _vm._n($$v))
        },
        expression: "query.coachId"
      }
    }, [_c('i-option', {
      attrs: {
        "value": ""
      }
    }, [_c('i', {
      staticClass: "gray"
    }, [_vm._v("不限")])]), _vm._v(" "), _vm._l((_vm.coachList), function(s) {
      return _c('i-option', {
        key: s.staffId,
        attrs: {
          "value": s.staffId
        }
      }, [_vm._v(_vm._s(s.name))])
    })], 2)], 1) : _vm._e(), _vm._v(" "), _c('li', {
      staticClass: "item"
    }, [_c('date-picker', {
      staticClass: "daterange",
      staticStyle: {
        "width": "200px"
      },
      attrs: {
        "options": _vm.dateOptions1,
        "placeholder": "请选择上课日期",
        "type": "daterange",
        "format": "yyyy-MM-dd",
        "placement": "bottom-start"
      },
      model: {
        value: (_vm.query.lessonDates),
        callback: function($$v) {
          _vm.$set(_vm.query, "lessonDates", $$v)
        },
        expression: "query.lessonDates"
      }
    })], 1), _vm._v(" "), _c('li', {
      staticClass: "item"
    }, [_c('i-button', {
      attrs: {
        "type": "primary"
      },
      on: {
        "click": function($event) {
          return _vm.queryLessonReview(null)
        }
      }
    }, [_vm._v("查询")])], 1)])]) : _vm._e(), _vm._v(" "), (_vm.scoreTitlesMap && _vm.reviewList) ? _c('ul', {
      staticClass: "items p10"
    }, _vm._l((_vm.reviewList), function(r, idx) {
      return _c('li', {
        key: idx
      }, [_c('table', [_c('tr', [_c('th', {
        staticClass: "scores-th"
      }, [_c('table', {
        staticClass: "score-items"
      }, [_c('tr', [_vm._m(0, true), _vm._v(" "), _c('td', {
        staticClass: "score"
      }, [_c('i', {
        class: 'iconfont icon-star' + r.scores[0]
      }), _vm._v(" "), _c('u', [_vm._v(_vm._s(_vm.g.Dict.ScoreDict[0].values[r.scores[0] - 1]))])])]), _vm._v(" "), (r.rstId) ? _vm._l((_vm.scoreTitlesMap[r.rstId]), function(stitle, i) {
        return _c('tr', {
          staticClass: "score"
        }, [_c('td', [_vm._v(_vm._s(stitle))]), _vm._v(" "), _c('td', {
          staticClass: "score"
        }, [_c('i', {
          class: 'iconfont icon-star' + r.scores[i + 1]
        })])])
      }) : _vm._l((_vm.g.Dict.ScoreDict), function(s, j) {
        return (j > 0) ? _c('tr', [_c('td', [_vm._v(_vm._s(s.typeName))]), _vm._v(" "), _c('td', {
          staticClass: "score"
        }, [_c('i', {
          class: 'iconfont icon-star' + r.scores[j]
        }), _vm._v(" "), _c('u', [_vm._v(_vm._s(s.values[r.scores[j] - 1]))])])]) : _vm._e()
      })], 2)]), _vm._v(" "), _c('td', {
        staticClass: "review-cont"
      }, [_c('div', {
        staticClass: "hd"
      }, [(_vm.g.data.user.isShopOwner) ? [(r.memberName) ? _c('a', {
        staticClass: "name",
        on: {
          "click": function($event) {
            return _vm.viewMember(r.memberId)
          }
        }
      }, [_vm._v(_vm._s(r.memberName))]) : _vm._e(), _vm._v(" "), _c('span', {
        staticClass: "gray l5"
      }, [_vm._v("#")])] : _vm._e(), _vm._v(" "), _c('span', {
        staticClass: "review-time"
      }, [_vm._v(_vm._s(r.reviewTime))])], 2), _vm._v(" "), _c('div', {
        staticClass: "txt"
      }, [(r.review) ? _c('pre', [_vm._v(_vm._s(r.review))]) : _c('i', {
        staticClass: "gray"
      }, [_vm._v("未写评价内容")])]), _vm._v(" "), (r.lessonDate) ? _c('div', {
        staticClass: "lesson-info"
      }, [_vm._v("\n\t\t\t\t\t\t\t\t上课时间： " + _vm._s(_vm.g.Util.formatDate(r.lessonDate)) + "  \n\t\t\t\t\t\t\t\t" + _vm._s(_vm.g.Util.formatTime(r.lessonBeginTime)) + " ~ " + _vm._s(_vm.g.Util.formatTime(r.lessonEndTime)) + "\n\t\t\t\t\t\t\t\t"), _c('span', {
        staticClass: "spt"
      }, [_vm._v("/")]), _vm._v("\n\t\t\t\t\t\t\t\t上课教练：" + _vm._s(r.coachName) + "\n\t\t\t\t\t\t\t")]) : _vm._e()])])])])
    }), 0) : _vm._e()], _vm._v(" "), (_vm.totalCount && _vm.totalCount > 0) ? _c('div', {
      staticClass: "page-nav"
    }, [_c('page', {
      attrs: {
        "total": _vm.totalCount,
        "page-size": 30,
        "show-total": "",
        "show-elevator": ""
      },
      on: {
        "on-change": _vm.changePageNo
      }
    })], 1) : (_vm.reviewList && !_vm.reviewList.length) ? _c('section', [_c('p', {
      staticClass: "gray",
      attrs: {
        "align": "center"
      }
    }, [_vm._v("暂无评价")])]) : _vm._e(), _vm._v(" "), _c('modal', {
      attrs: {
        "title": "会员信息",
        "width": "780",
        "styles": {
          top: '10px'
        },
        "ok-text": "关闭",
        "cancel-text": ""
      },
      model: {
        value: (_vm.viewMemberDlg),
        callback: function($$v) {
          _vm.viewMemberDlg = $$v
        },
        expression: "viewMemberDlg"
      }
    }, [_c('member-base-info', {
      attrs: {
        "member-id": _vm.memberId
      }
    })], 1)
  ], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    attrs: {
      "width": "75"
    }
  }, [_c('b', [_vm._v("总体评分")])])
}]}

/***/ }),

/***/ 875:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1131)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1127),
  /* template */
  __webpack_require__(1134),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-23c13726",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 876:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1178)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1163),
  /* template */
  __webpack_require__(1197),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-14998947",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1980)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1243),
  /* template */
  __webpack_require__(2392),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4b756146",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1896)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1244),
  /* template */
  __webpack_require__(2307),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1f69c006",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1932)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1245),
  /* template */
  __webpack_require__(2344),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3532c778",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 891:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2122)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1246),
  /* template */
  __webpack_require__(2537),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-ecb9a9fc",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1893)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1247),
  /* template */
  __webpack_require__(2305),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1eed0285",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2088)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1248),
  /* template */
  __webpack_require__(2501),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-9ac21762",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2031)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1249),
  /* template */
  __webpack_require__(2443),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-68b3c422",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1860)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1250),
  /* template */
  __webpack_require__(2269),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0e252a0a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1867)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1251),
  /* template */
  __webpack_require__(2276),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-123eff3a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1929)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1252),
  /* template */
  __webpack_require__(2341),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3490d43e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2028)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1253),
  /* template */
  __webpack_require__(2440),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-64dda9ee",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 899:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1965)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1254),
  /* template */
  __webpack_require__(2377),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-45522a28",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1869)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1255),
  /* template */
  __webpack_require__(2278),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-125edbd7",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1917)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1256),
  /* template */
  __webpack_require__(2329),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2c34c457",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1987)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1257),
  /* template */
  __webpack_require__(2399),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4d27d9d8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2057)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1258),
  /* template */
  __webpack_require__(2469),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-78fec9fc",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1999)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1259),
  /* template */
  __webpack_require__(2412),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5417bcfe",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2074)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1260),
  /* template */
  __webpack_require__(2487),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7fa7b9ee",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1901)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1261),
  /* template */
  __webpack_require__(2312),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-21346f4b",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2084)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1262),
  /* template */
  __webpack_require__(2497),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-92a658b4",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1950)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1263),
  /* template */
  __webpack_require__(2362),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3cb96d7f",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2072)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1264),
  /* template */
  __webpack_require__(2485),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7f9054dd",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1989)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1265),
  /* template */
  __webpack_require__(2401),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4e669c8d",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1984)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1266),
  /* template */
  __webpack_require__(2396),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4bec65e8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2029)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1267),
  /* template */
  __webpack_require__(2441),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6829847a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});