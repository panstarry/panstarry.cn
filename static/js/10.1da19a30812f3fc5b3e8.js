webpackJsonp([10],{

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

/***/ 1280:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	components: {},
	props: {
		productId: {
			type: Number,
			required: true
		}
	},
	data() {
		return {
			g: $,
			tabNo: 0, // 0-商品修改日期，1-商品入库日志
			changeLog: {
				data: null,
				count: null
			},
			stockLog: {
				data: null,
				count: null
			}
		};
	},

	created() {
		this.queryProductChangeLog();
	},

	methods: {
		swithTab(tabNo) {
			this.tabNo = tabNo;
			if (tabNo === 1) {
				if (this.stockLog.data === null) {
					this.queryProuductStockLog();
				}
			}
		},

		queryProductChangeLog() {
			$.Req.service($.SvName.MALL_PRODUCT_CHANGE_LOG_QUERY, { productId: this.productId }, ret => {
				this.changeLog.data = ret.logList;
				this.changeLog.count = ret.logList.length;
			}, true);
		},

		queryProuductStockLog() {
			$.Req.service($.SvName.MALL_PRODUCT_STOCK_LOG_QUERY, { productId: this.productId }, ret => {
				this.stockLog.data = ret.logList;
				this.stockLog.count = ret.logList.length;
			}, true);
		}
	}
});

/***/ }),

/***/ 1281:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {},
  data() {
    return {
      g: window.$,
      mallOrderRefundRole: $.Util.hasRoleFunc($.Dict.RoleFunc.MALL_PRODUCT_ORDER_CANCEL.value),
      refundList: [],
      orderCount: null,
      refund: null,
      order: null,
      query: {
        status: null
      },
      selectOrder: null,
      selectOrderDlg: false,
      fill: {
        status: null,
        refuseRemark: ""
      },
      refuseShow: false,
      viewMemberId: null,
      viewMemberDlg: null
    };
  },
  computed: {},
  watch: {},
  created() {
    if (!this.mallOrderRefundRole) return;
    this.orderRefundQuery();
  },
  mounted() {},
  methods: {
    viewMember(memberId) {
      this.viewMemberId = memberId;
      this.viewMemberDlg = true;
    },

    orderRefundQuery(page = null) {
      const args = {
        page: page
      };
      $.Req.service($.SvName.MALL_ORDER_PRODUCT_REFUND_QUERY, args, ret => {
        this.refundList = ret.refundList;
        this.orderCount = ret.count;
      });
    },

    orderRefundQueryItem(mopId) {
      const args = {
        mopId: mopId
      };
      $.Req.service($.SvName.MALL_ORDER_PRODUCT_REFUND_QUERY, args, ret => {
        this.refund = ret.refund;
        this.selectOrder = ret.order;
        this.fill.status = ret.refund.status;
      });
    },

    colorChangeClassFun(type) {
      if (type === 0) {
        return "orange";
      } else if (type === 1) {
        return "red";
      } else if (type === 9) {
        return "green";
      }
    },

    refundOrderFun(order) {
      this.orderRefundQueryItem(order.mopId);
      this.selectOrderDlg = true;
    },

    updateOrderRefundFun() {
      if (!this.fill.status) {
        return alert("请选择是否同意");
      }
      const args = {
        mopId: this.refund.mopId,
        status: this.fill.status,
        refuseRemark: this.fill.refuseRemark
      };
      $.Req.service($.SvName.MALL_ORDER_PRODUCT_REFUND_UPDATE, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.orderRefundQuery();
        this.selectOrderDlg = false;
      });
    },

    refuseRemarkFun() {
      this.refuseShow = true;
      if (this.refund && this.refund.refuseRemark) {
        this.fill.refuseRemark = this.refund.refuseRemark;
      }
    },

    resetQuery() {}
  }
});

/***/ }),

/***/ 1282:
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



/* harmony default export */ __webpack_exports__["default"] = ({
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a },
	data() {
		return {
			g: $,
			tabNo: 0, // 0-商品修改日期，1-商品入库日志
			changeLog: {
				data: null,
				count: null
			},
			stockLog: {
				data: null,
				count: null
			}
		};
	},

	created() {
		this.queryProductChangeLog();
	},

	methods: {
		swithTab(tabNo) {
			this.tabNo = tabNo;
			if (tabNo === 1) {
				if (this.changeLog.data === null) {
					this.queryProuductStockLog();
				}
			}
		},

		queryProductChangeLog(page = null) {},

		queryProuductStockLog(page = null) {}
	}
});

/***/ }),

/***/ 1283:
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


/* harmony default export */ __webpack_exports__["default"] = ({
	components: {},
	data() {
		return {
			editable: $.Util.hasRoleFunc($.Dict.RoleFunc.MALL_PRODUCT_CATE_EDIT.value),
			cateList: null,
			cate: { cateId: null, cateName: null, remark: null },
			dlgShow: false
		};
	},

	created() {
		this.loadData();
	},

	methods: {
		loadData() {
			$.Req.service($.SvName.MALL_PRODUCT_CATE_QUERY, {}, ret => {
				this.cateList = ret.productCateList;
			});
		},

		create() {
			this.cate.cateId = null;
			this.cate.cateName = null;
			this.cate.remark = null;
			this.dlgShow = true;
		},

		update(idx) {
			this.cate.cateId = this.cateList[idx].cateId;
			this.cate.cateName = this.cateList[idx].cateName;
			this.cate.remark = this.cateList[idx].remark;
			this.dlgShow = true;
		},

		submit() {
			if (!this.cate.cateName) {
				$.Msg.error('请输入名称');
				return;
			}
			if (this.cate.remark && this.cate.remark.length > 200) {
				$.Msg.error('备注内容不能超过200字');
				return;
			}

			let args = {
				actionType: this.cate.cateId ? 'U' : 'I',
				productCate: this.cate
			};
			$.Req.service($.SvName.MALL_PRODUCT_CATE_SAVE, args, ret => {
				this.loadData();
				this.dlgShow = false;
			}, true);
		},

		deleteCate(idx) {
			let cate = this.cateList[idx];
			let msg = "确定要删除该类别【{0}】吗？<br> （删除类别不会删除商品，但是会将该类商品的类别属性清空）".format(cate.cateName);
			$.Dlg.confirm(msg, yes => {
				let args = { actionType: 'D', deleteId: cate.cateId };
				$.Req.service($.SvName.MALL_PRODUCT_CATE_SAVE, args, ret => {
					this.cateList.splice(idx, 1);
				}, true);
			});
		}
	}
});

/***/ }),

/***/ 1284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_help__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_help___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_help__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, ImgUpload: __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue___default.a, Help: __WEBPACK_IMPORTED_MODULE_2__components_help___default.a },
	data() {
		return {
			g: window.$,
			editable: $.Util.hasRoleFunc($.Dict.RoleFunc.MALL_PRODUCT_EDIT.value),
			productId: this.$route.params.productId,
			product: {
				status: 0,
				productName: null,
				productType: null,
				cardId: null,
				cardDays: null,
				cardTimes: null,
				cardAmount: null,
				priceType: null,
				productDesc: null,
				orderNo: 99,
				isSupportValueCard: true,
				limitBuyTimes: null,
				limitBuyNum: null,
				allowPayByValueCard: true
			},
			productCateList: [],
			cardList: [],
			requiredFileds: ['productName', 'productType', 'priceType', 'stock', 'orderNo'],
			formRule: {
				productName: [{ type: 'string', max: 100, message: '字数不能超过100', trigger: 'blur' }]
			},
			initCardId: null,
			imgUpload: {
				action: $.Conf.IMG_UPLOAD_URL,
				imgMaxWidth: 1000,
				defaultLisForLogo: [],
				defaultListForMore: []
			},
			productImgList: []
		};
	},

	created() {
		if (!this.editable) return;

		$.Util.addRequiredFieldsRules(this.formRule, this.requiredFileds);
		this.queryCateList();
		this.queryCards();
		if (this.productId) {
			this.queryProduct();
		} else {
			this.productImgList = this.imgUpload.defaultListForMore;
		}
	},

	methods: {
		queryCards() {
			$.Req.service($.SvName.CARD_QUERY, { status: 0 }, ret => {
				this.cardList = ret.cardList;
			});
		},

		queryCateList() {
			let args = { needBase: true };
			$.Req.service($.SvName.MALL_PRODUCT_CATE_QUERY, args, ret => {
				this.productCateList = ret.productCateList;
			});
		},

		queryProduct() {
			let args = { productId: this.productId };
			$.Req.service($.SvName.MALL_PRODUCT_QUERY, args, ret => {
				this.product = ret.product;

				if (this.product.productLogo) {
					this.imgUpload.defaultLisForLogo.push({
						name: this.product.productLogo,
						url: $.Util.getImgUrl(this.product.productLogo, 200, 200, 'EEEEEE')
					});
				}
				if (this.product.productImgs) {
					for (let p of this.product.productImgs.split(',')) {
						this.imgUpload.defaultListForMore.push({
							name: p,
							url: $.Util.getImgUrl(p, 200, 200, 'EEEEEE')
						});
					}
				}
				this.productImgList = this.imgUpload.defaultListForMore;
			}, true);
		},

		handleCardSelect(cardId) {
			if (cardId === this.initCardId) return;

			for (let c of this.cardList) {
				if (c.cardId === cardId) {
					this.product.cardType = c.cardType;
					this.product.cardDays = c.defaultDays;
					if (c.cardType === 2 || c.cardType == 4) {
						this.product.cardTimes = c.defaultTimes;
					} else if (c.cardType === 3) {
						this.product.cardAmount = c.defaultAmount;
					}
					break;
				}
			}
			this.initCardId = null;
		},

		handleImgUploadSuccessForLogo(res, file) {
			file.url = res.data.url;
			file.name = res.data.name;
			this.product.productLogo = res.data.name;
		},

		handleImgUploadSuccessForMore(res, file) {
			file.url = res.data.url;
			file.name = res.data.name;
			this.productImgList.push(file);
		},

		handleImgRemoveMore(file, fileList) {
			this.productImgList.splice(this.productImgList.indexOf(file), 1);
		},

		checkProductForSumit() {
			if (this.product.productType === 0) {
				// 会员卡商品
				if (!this.product.cardId) {
					$.Msg.error('请选择会员卡');
					return false;
				}
				if (this.product.cardType === 1) {
					// 期限卡
					if (!this.product.cardDays) {
						$.Msg.error('请输入使用天数');
						return false;
					}
					if (this.product.cardDays < 0) {
						$.Msg.error('使用天数不能小于0');
						return false;
					}
				} else if (this.product.cardType === 2) {
					// 次数卡
					if (!this.product.cardTimes) {
						$.Msg.error('请输入使用次数');
						return false;
					}
					if (this.product.cardTimes < 0) {
						$.Msg.error('使用次数不能小于0');
						return false;
					}
				} else if (this.product.cardType === 3) {
					// 储值卡
					if (!this.product.cardAmount) {
						$.Msg.error('请输入使用金额');
						return false;
					}
					if (this.product.cardAmount < 0) {
						$.Msg.error('使用金额不能小于0');
						return false;
					}
				} else if (this.product.cardType === 4) {
					// 计时卡
					if (!this.product.cardTimes) {
						$.Msg.error('请输入使用时间');
						return false;
					}
					if (this.product.cardTimes < 0) {
						$.Msg.error('使用时间不能小于0');
						return false;
					}
				}
			}

			if (this.product.priceType === 0 || this.product.priceType === 2) {
				// 积分, 积分 + 金额
				if (!this.product.pricePoints) {
					$.Msg.error('请输入商品积价格：积分');
					return false;
				}
				if (this.product.pricePoints < 0) {
					$.Msg.error('商品价格积分不能小于0');
					return false;
				}
			}
			if (this.product.priceType === 1 || this.product.priceType === 2) {
				// 金额, 积分 + 金额
				if (!this.product.priceAmount) {
					$.Msg.error('请输入商品价格：金额');
					return false;
				}
				if (this.product.priceAmount < 0) {
					$.Msg.error('商品价格金额不能小于0');
					return false;
				}
			}

			if (!this.product.productLogo) {
				$.Msg.error('请上传商品主图');
				return false;
			}

			if (this.product.productDesc && this.product.productDesc.length > 2000) {
				$.Msg.error('商品详情字数不能超过2000字');
				return false;
			}

			return true;
		},

		saveProduct() {
			this.$refs.product.validate(valid => {
				if (!valid) {
					$.Msg.error($.Lang.SUBMIT_ERR);
					return false;
				}
				if (!this.checkProductForSumit()) return;

				let imgNameList = [];
				for (let img of this.productImgList) {
					imgNameList.push(img.name);
				}
				this.product.productImgs = imgNameList.join(',');
				let args = {
					actionType: this.productId ? 'U' : 'I',
					product: this.product
				};
				$.Req.service($.SvName.MALL_PRODUCT_SAVE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					if (!this.productId) {
						this.$router.push('/mall/product-query');
					} else {
						window.scrollTo(0, 0);
					}
				}, true);
			});
		}
	}
});

/***/ }),

/***/ 1285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_select_vue__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_member_member_select_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_refund_vue__ = __webpack_require__(2195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_refund_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__order_refund_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue___default.a, MemberSelect: __WEBPACK_IMPORTED_MODULE_1__pages_member_member_select_vue___default.a, OrderRefund: __WEBPACK_IMPORTED_MODULE_2__order_refund_vue___default.a },
  data() {
    return {
      g: $,
      orderCancelPermit: false, // $.Util.hasRoleFunc($.Dict.RoleFunc.MALL_PRODUCT_ORDER_CANCEL.value),

      orderList: null,
      orderCount: null,
      viewMemberId: null,
      viewMemberDlg: false,
      query: {
        status: null,
        memerId: null,
        orderDates: [],
        productName: null
      },
      memberSelectDlgForQuery: false,
      memberName: null,
      selectOrder: null,
      selectOrderDlg: false,
      orderDateOption: {
        shortcuts: [{
          text: "最近一周",
          value() {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end];
          }
        }, {
          text: "最近一个月",
          value() {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end];
          }
        }, {
          text: "最近三个月",
          value() {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end];
          }
        }, {
          text: "最近半年",
          value() {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 180);
            return [start, end];
          }
        }]
      },

      // 优惠券
      isOpenShopCoupon: $.Util.cookie.get("jzg.is_open_coupon") == 1 ? true : false,
      logList: [],
      useCouponDlg: false,
      productName: null,

      // 新增退款
      tabValue: "1"
    };
  },

  created() {
    this.queryMallOrder();
  },

  methods: {
    // 优惠券
    useCouponQuery(p) {
      const args = {
        memberId: p.memberId,
        useRelType: 2,
        useRelId: p.mopId
      };
      $.Req.service($.SvName.USE_COUPON_LOG_QUERY, args, ret => {
        this.logList = ret.logList;
        this.useCouponDlg = true;
        this.productName = p.productName;
      }, true);
    },

    queryMallOrder(page = null) {
      if (!page) this.orderCount = null;
      let args = {
        productName: this.query.productName,
        page: page
      };
      if (!$.Util.isEmpty(this.query.status)) {
        args.status = this.query.status;
      }
      if (this.query.orderDates && this.query.orderDates[0] && this.query.orderDates[1]) {
        args.beginDate = Date.new(this.query.orderDates[0]);
        args.endDate = Date.new(this.query.orderDates[1]);
      }
      if (this.memberName && this.query.memberId) {
        args.memberId = this.query.memberId;
      }
      $.Req.service($.SvName.MALL_ORDER_QUERY, args, ret => {
        this.orderList = ret.orderList;
        if (!page) {
          this.orderCount = ret.count;
        }
      }, true);
    },

    viewMember(memberId) {
      this.viewMemberId = memberId;
      this.viewMemberDlg = true;
    },

    resetQuery() {
      this.query.status = null;
      this.query.memberId = null;
      this.query.orderDates = [];
      this.memberName = null;
      this.query.productName = null;
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

    viewOrderDetail(order) {
      this.selectOrder = order;
      this.selectOrderDlg = true;
    },

    confirmProductReceipt(idx) {
      let po = this.selectOrder.productList[idx];
      $.Dlg.confirm("确定领取到了该商品吗？", () => {
        let args = { mopId: po.mopId };
        $.Req.service($.SvName.MALL_ORDER_PRODUCT_RECEIPT_CONFIRM, args, ret => {
          $.Msg.success($.Lang.OPT_SUCCESS);
          po.consigneeTime = $.Util.formatDateTime(new Date());
          this.$set(this.selectOrder.productList, idx, po);
        });
      });
    },

    // 新增退款
    tabsFun(val) {
      this.tabValue = val;
    }
  }
});

/***/ }),

/***/ 1286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mall_product_log_vue__ = __webpack_require__(2194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mall_product_log_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mall_product_log_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sys_time_select__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sys_time_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_sys_time_select__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { TimeSelect: __WEBPACK_IMPORTED_MODULE_2__components_sys_time_select___default.a, PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, MallProductLog: __WEBPACK_IMPORTED_MODULE_1__mall_product_log_vue___default.a },
	data() {
		return {
			g: window.$,
			editable: $.Util.hasRoleFunc($.Dict.RoleFunc.MALL_PRODUCT_EDIT.value),
			hasMchId: null,
			query: {
				status: null,
				cateId: null,
				productType: null,
				priceType: null
			},
			productList: null,
			totalCount: null,
			productCateList: [],
			viewLogDlg: false,
			logDlgTitle: null,
			selectProductId: 0,
			productStockAltDlg: false,
			selectPrdName: null,
			selectProductStock: null,
			altStock: null,
			reminderDlg: null,
			reminderEnable: false,
			staffList: null,
			reminderStaffIds: []
		};
	},

	created() {
		this.queryCateList();
		this.queryProduct();
		this.queryMchId();
		this.queryStaffList();
		if ($.data.user.isShopOwner) {
			this.queryReminderConf();
		}
	},

	methods: {
		queryMchId() {
			let args = { queryType: 'shop' };
			$.Req.service($.SvName.WX_MCHID_QUERY, args, ret => {
				if (ret.mchId) this.hasMchId = true;else this.hasMchId = false;
			});
		},

		queryCateList() {
			let args = { needBase: true };
			$.Req.service($.SvName.MALL_PRODUCT_CATE_QUERY, args, ret => {
				this.productCateList = ret.productCateList;
			});
		},

		queryProduct(page = null) {
			if (!page) this.totalCount = null;
			let args = {
				page: page,
				needSales: true,
				status: this.query.status,
				cateId: this.query.cateId,
				productType: this.query.productType,
				priceType: this.query.priceType
			};
			$.Req.service($.SvName.MALL_PRODUCT_QUERY, args, ret => {
				if (!page) {
					this.totalCount = ret.count;
				}
				this.productList = ret.productList;
			});
		},

		resetQuery() {
			this.query.status = null;
			this.query.cateId = null;
			this.query.productType = null;
			this.query.priceType = null;
		},

		deleteProduct(productId, prdName) {
			let msg = '您确定要删除商品【{0}】？'.format(prdName);
			$.Dlg.confirm(msg, yes => {
				let args = { actionType: 'D', deleteId: productId };
				$.Req.service($.SvName.MALL_PRODUCT_SAVE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					this.queryProduct();
				}, true);
			});
		},

		updateProductStatus(prdId, status) {
			let args = { productId: prdId, infoType: 1, val: status };
			$.Req.service($.SvName.MALL_PRODUCT_INFO_UPDATE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryProduct();
			});
		},

		updateProductOrderNo(prdId, prdName) {
			let orderNo = parseInt(prompt('请输入商品【{0}】的新序号：'.format(prdName)));
			if (!orderNo) {
				$.Msg.error('未输入正确的序号');
				return;
			}

			let args = { productId: prdId, infoType: 2, val: orderNo };
			$.Req.service($.SvName.MALL_PRODUCT_INFO_UPDATE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryProduct();
			});
		},

		handleAltProductStock(prd) {
			this.altStock = null;
			this.selectPrdName = prd.productName;
			this.selectProductStock = prd.stock;
			this.selectProductId = prd.productId;
			this.productStockAltDlg = true;
		},

		updateProductStock() {
			if (!this.altStock) {
				$.Msg.error('请输入正确的入库数量');
				return;
			}
			let args = { productId: this.selectProductId, infoType: 3, val: this.altStock };
			$.Req.service($.SvName.MALL_PRODUCT_INFO_UPDATE, args, ret => {
				this.productStockAltDlg = false;
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryProduct();
			});
		},

		viewProductLog(prdId, prdName) {
			this.logDlgTitle = prdName + ' - 操作日志';
			this.selectProductId = prdId;
			this.viewLogDlg = true;
		},

		queryStaffList() {
			$.Req.service($.SvName.STAFF_QUERY, { status: 0, needBaseInfo: true }, ret => {
				this.staffList = ret.staffList;
			});
		},

		openReminderDlg() {
			this.reminderDlg = true;
		},

		queryReminderConf() {
			let args = { typeId: 2037 };
			$.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
				if (ret.value) {
					let items = ret.value.split(':');
					this.reminderEnable = items[0] === 'true';
					for (let i of items[1].split(',')) {
						this.reminderStaffIds.push(parseInt(i));
					}
				}
			}, true);
		},

		submitReminderConf() {
			if (this.reminderEnable && $.Util.isEmptyArray(this.reminderStaffIds)) {
				$.Msg.error('请选择通知人');
				return;
			}

			let args = {
				typeId: 2037,
				typeValue: this.reminderEnable + ':' + this.reminderStaffIds.join(',')
			};
			$.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.reminderDlg = false;
			}, true);
		}
	}
});

/***/ }),

/***/ 1550:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, "[data-v-07c36a07].ivu-modal-footer{padding-top:0}.unpay[data-v-07c36a07]{color:red}.orders .prds li[data-v-07c36a07]{display:inline-block;padding-right:5px}.orders .prds li[data-v-07c36a07]:after{content:\"\\3001\"}.orders .prds li[data-v-07c36a07]:last-child{padding:0}.orders .prds li[data-v-07c36a07]:last-child:after{content:\"\"}.order-detail .prds li[data-v-07c36a07]{display:block;list-style:circle;padding-bottom:8px;position:relative}.order-detail .prds li[data-v-07c36a07]:last-child{padding-bottom:0}.order-detail .prds li .right[data-v-07c36a07]{width:200px;position:absolute;right:0}.footer-btns[data-v-07c36a07]{margin-top:10px}", ""]);

// exports


/***/ }),

/***/ 1581:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".qrcode img[data-v-1955357e]{width:150px}.warning[data-v-1955357e]{margin:15px 0;text-align:center;line-height:55px;height:55px;padding:0;border:1px solid #ddd;background:#fafafa}.note li[data-v-1955357e]{font-size:12px}", ""]);

// exports


/***/ }),

/***/ 1693:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1721:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, "section .hd[data-v-620d635d]{border:0;margin:5px 0 0}section .opt-list[data-v-620d635d]{height:32px;line-height:32px;border:0}section a[data-v-620d635d]{padding:0 8px}section li:first-child a[data-v-620d635d]{padding-left:0}.opt-list .on[data-v-620d635d]{font-weight:700;color:#555}", ""]);

// exports


/***/ }),

/***/ 1739:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".unpay[data-v-6db0f104]{color:red}.orders .prds li[data-v-6db0f104]{display:inline-block;padding-right:5px}.orders .prds li[data-v-6db0f104]:after{content:\"\\3001\"}.orders .prds li[data-v-6db0f104]:last-child{padding:0}.orders .prds li[data-v-6db0f104]:last-child:after{content:\"\"}.order-detail .prds li[data-v-6db0f104]{display:block;list-style:circle;padding-bottom:8px}.order-detail .prds li[data-v-6db0f104]:last-child{padding-bottom:0}.use-coupon-dlg table[data-v-6db0f104]{margin-bottom:20px}.use-coupon-dlg table[data-v-6db0f104]:last-of-type{margin-bottom:0}", ""]);

// exports


/***/ }),

/***/ 1794:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".myform[data-v-a3ec7c78]{width:700px}.myform .numinut[data-v-a3ec7c78]{width:100px}.mbox[data-v-a3ec7c78]{width:250px}.prices[data-v-a3ec7c78]{margin-top:10px}.prices input[data-v-a3ec7c78]{width:100px;font-size:13px;font-weight:700}.price-plus[data-v-a3ec7c78]{padding:0 20px;position:relative;top:2px}.size-cnt[data-v-a3ec7c78]{position:absolute;margin-top:-35px;right:10px;color:#bbb;z-index:100}", ""]);

// exports


/***/ }),

/***/ 1801:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".page-tips[data-v-b38ee584]{color:orange;padding-bottom:10px}.opt-list .on[data-v-b38ee584]{font-weight:700;color:#555}.borderspt[data-v-b38ee584]{border-top:2px solid #ddd}.diff[data-v-b38ee584]{color:#ff4500}.subtit[data-v-b38ee584]{font-size:13px;position:relative;top:2px;padding-left:5px}.subtit .spt[data-v-b38ee584]{padding:0 15px;color:#ccc}.subtit a[data-v-b38ee584]{font-size:13px}", ""]);

// exports


/***/ }),

/***/ 1851:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1550);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("282879f2", content, true, {});

/***/ }),

/***/ 1882:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1581);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("60f71356", content, true, {});

/***/ }),

/***/ 1994:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1693);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("c774a67c", content, true, {});

/***/ }),

/***/ 2022:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1721);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("7200b8d8", content, true, {});

/***/ }),

/***/ 2040:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1739);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("0da9b7ef", content, true, {});

/***/ }),

/***/ 2095:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1794);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("60916193", content, true, {});

/***/ }),

/***/ 2102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1801);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("054b11a4", content, true, {});

/***/ }),

/***/ 2194:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2022)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1280),
  /* template */
  __webpack_require__(2434),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-620d635d",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2195:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1851)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1281),
  /* template */
  __webpack_require__(2259),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-07c36a07",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2259:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-order-refund"
  }, [(!_vm.mallOrderRefundRole) ? _c('section', {
    staticClass: "no-permit"
  }, [_c('i', {
    staticClass: "iconfont icon-alert2 big"
  }), _vm._v(" 您尚无【" + _vm._s(_vm.g.Dict.RoleFunc.MALL_PRODUCT_ORDER_CANCEL.name) + "】权限，无权查看\n  ")]) : [_c('section', [_c('div', {
    staticClass: "mytbl orders"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.refundList), function(o, idx) {
    return _c('tr', {
      key: idx
    }, [_c('td', [_vm._v("\n              " + _vm._s(o.refundNo) + "\n            ")]), _vm._v(" "), _c('td', [_c('span', {
      class: _vm.colorChangeClassFun(o.status)
    }, [_vm._v("\n                " + _vm._s(_vm.g.Dict.refundStatus[o.status]) + "\n              ")])]), _vm._v(" "), _c('td', [_vm._v("\n              " + _vm._s(o.productName) + "\n            ")]), _vm._v(" "), _c('td', [_c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.viewMember(o.memberId)
        }
      }
    }, [_vm._v(_vm._s(o.memberName))])]), _vm._v(" "), _c('td', [(o.paymentPoints) ? [_vm._v(_vm._s(o.paymentPoints))] : _c('i', {
      staticClass: "gray"
    }, [_vm._v("无")])], 2), _vm._v(" "), _c('td', [(o.paymentAmount) ? [_vm._v("￥" + _vm._s(o.paymentAmount))] : _c('i', {
      staticClass: "gray"
    }, [_vm._v("无")])], 2), _vm._v(" "), _c('td', [_vm._v("\n              " + _vm._s(o.createTime) + "\n            ")]), _vm._v(" "), _c('td', [_vm._v("\n              " + _vm._s(o.applyRemark) + "\n            ")]), _vm._v(" "), _c('td', [_vm._v("\n              " + _vm._s(o.updateUname) + "\n            ")]), _vm._v(" "), _c('td', [_vm._v("\n              " + _vm._s(o.updateTime) + "\n            ")]), _vm._v(" "), _c('td', [_vm._v("\n              " + _vm._s(o.unitNum) + "\n            ")]), _vm._v(" "), _c('td', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.refundOrderFun(o)
        }
      }
    }, [_vm._v("详情")])])])
  })], 2)]), _vm._v(" "), (_vm.refundList && _vm.refundList.length > 0) ? _c('div', {
    staticClass: "page-nav"
  }, [(_vm.orderCount > _vm.g.Conf.PAGE_SIZE) ? _c('page', {
    attrs: {
      "total": _vm.orderCount,
      "page-size": _vm.g.Conf.PAGE_SIZE,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.orderRefundQuery
    }
  }) : _c('div', {
    staticClass: "center gray"
  }, [_vm._v("共 " + _vm._s(_vm.orderCount) + " 条记录")])], 1) : _vm._e(), _vm._v(" "), (_vm.refundList && !_vm.refundList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()])], _vm._v(" "), _c('modal', {
    attrs: {
      "reset-drag-position": "",
      "footer-hide": "",
      "title": "退款详情",
      "width": "850",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.selectOrderDlg),
      callback: function($$v) {
        _vm.selectOrderDlg = $$v
      },
      expression: "selectOrderDlg"
    }
  }, [(_vm.refund) ? _c('div', {
    staticClass: "mytbl order-detail"
  }, [_c('table', [_c('tr', [_c('th', [_vm._v("退款编号")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.refund.refundNo))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("申请时间")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.refund.createTime))])]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("买家信息")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.refund.memberName))])]), _vm._v(" "), (_vm.refund.paymentAmount >= 0) ? _c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("退款金额")]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(_vm.refund.paymentAmount))])]) : _vm._e(), _vm._v(" "), (_vm.refund.paymentPoints) ? _c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("退款积分")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.refund.paymentPoints) + " 分")])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', [_vm._v("退款原因")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.refund.applyRemark))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("退款商品")]), _vm._v(" "), _c('td', [_c('ul', {
    staticClass: "prds"
  }, [_c('li', [_vm._v("\n                ※ " + _vm._s(_vm.refund.productName) + " × " + _vm._s(_vm.refund.unitNum) + "\n                "), _c('span', {
    staticClass: "l10"
  }, [(_vm.refund.status === 9 && (_vm.refund.refundCardAmount || _vm.refund.refundCashAmount)) ? [_vm._v("\n                    （"), (_vm.refund.refundCardAmount) ? [_vm._v("储值卡退："), _c('span', {
    staticClass: "bold"
  }, [_vm._v(_vm._s(_vm.refund.refundCardAmount) + " ")]), _vm._v("元")] : _vm._e(), _vm._v(" "), (_vm.refund.refundCardAmount && _vm.refund.refundCashAmount) ? [_vm._v("; ")] : _vm._e(), _vm._v(" "), (_vm.refund.refundCashAmount) ? [_vm._v("微信退："), _c('span', {
    staticClass: "bold"
  }, [_vm._v(_vm._s(_vm.refund.refundCashAmount) + " ")]), _vm._v("元")] : _vm._e(), _vm._v("）\n                  ")] : _vm._e()], 2), _vm._v(" "), (_vm.refund.status === 0) ? [_c('span', {
    staticClass: "right"
  }, [_c('RadioGroup', {
    model: {
      value: (_vm.fill.status),
      callback: function($$v) {
        _vm.$set(_vm.fill, "status", $$v)
      },
      expression: "fill.status"
    }
  }, [_c('Radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("拒绝")]), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 9
    }
  }, [_vm._v("同意")])], 1)], 1), _vm._v(" "), (_vm.fill.status === 1) ? _c('a', {
    on: {
      "click": _vm.refuseRemarkFun
    }
  }, [_vm._v("原因")]) : _vm._e()] : _vm._e()], 2)])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("购买商品")]), _vm._v(" "), _c('td', [_c('ul', {
    staticClass: "prds"
  }, _vm._l((_vm.selectOrder.productList), function(p, idx) {
    return _c('li', {
      key: idx
    }, [_vm._v("\n                ※ " + _vm._s(p.productName) + " × " + _vm._s(p.unitNum) + "\n                "), _c('span', {
      staticClass: "l10"
    }, [_vm._v("\n                  （\n                  "), _c('span', {
      staticClass: "green"
    }, [_vm._v("单价：\n                    "), (p.priceType === 0 || p.priceType === 2) ? [_vm._v(_vm._s(p.pricePoints) + " 分")] : _vm._e(), _vm._v(" "), (p.priceType === 2) ? _c('b', {
      staticClass: "green big"
    }, [_vm._v(" ＋ ")]) : _vm._e(), _vm._v(" "), (p.priceType === 1 || p.priceType === 2) ? [_vm._v("￥" + _vm._s(p.priceAmount))] : _vm._e()], 2), _vm._v("\n                  ）\n                ")]), _vm._v(" "), (p.refundStatus === 9) ? _c('span', {
      staticClass: "gray"
    }, [_vm._v("（已退）")]) : _vm._e()])
  }), 0)])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("退款状态")]), _vm._v(" "), _c('td', [_c('span', {
    class: _vm.colorChangeClassFun(_vm.refund.status)
  }, [_vm._v("\n              " + _vm._s(_vm.g.Dict.refundStatus[_vm.refund.status]) + "\n            ")])])]), _vm._v(" "), (_vm.refund.refuseRemark) ? _c('tr', [_c('th', [_vm._v("退款拒绝原因")]), _vm._v(" "), _c('td', [_vm._v("\n            " + _vm._s(_vm.refund.refuseRemark) + "\n          ")])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "center footer-btns"
  }, [(_vm.refund.status === 0) ? _c('i-button', {
    staticStyle: {
      "width": "100px",
      "margin-right": "10px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.updateOrderRefundFun
    }
  }, [_vm._v("确定")]) : _vm._e(), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.selectOrderDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)]) : _vm._e()]), _vm._v(" "), _c('modal', {
    attrs: {
      "reset-drag-position": "",
      "title": "拒绝退款原因",
      "width": "350",
      "styles": {
        top: '10px'
      },
      "ok-text": "确定",
      "cancel-text": ""
    },
    model: {
      value: (_vm.refuseShow),
      callback: function($$v) {
        _vm.refuseShow = $$v
      },
      expression: "refuseShow"
    }
  }, [_c('i-input', {
    attrs: {
      "show-word-limit": "",
      "type": "textarea",
      "autosize": {
        minRows: 5
      },
      "maxlength": "200",
      "placeholder": "请填写拒绝退款原因"
    },
    model: {
      value: (_vm.fill.refuseRemark),
      callback: function($$v) {
        _vm.$set(_vm.fill, "refuseRemark", $$v)
      },
      expression: "fill.refuseRemark"
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
  }, [(_vm.viewMemberDlg) ? _c('member-base-info', {
    attrs: {
      "member-id": _vm.viewMemberId
    }
  }) : _vm._e()], 1)], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "160"
    }
  }, [_vm._v("退款编号")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("状态")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "130"
    }
  }, [_vm._v("商品名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("学员")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("退款积分")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("退款金额")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("申请时间")]), _vm._v(" "), _c('th', [_vm._v("退款原因")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("操作人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("操作时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("数量")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2292:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "mall"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "mall",
      "page": "mall/product-query"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', {
    staticClass: "query-section"
  }, [_c('ul', {
    staticClass: "query-cond-inline"
  }, [_c('li', {
    staticClass: "item"
  }, [_c('label', [_vm._v("状态")]), _vm._v(" "), _c('i-select', {
    staticStyle: {
      "width": "90px"
    },
    model: {
      value: (_vm.query.status),
      callback: function($$v) {
        _vm.$set(_vm.query, "status", $$v)
      },
      expression: "query.status"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("-- 不限 --")]), _vm._v(" "), _vm._l((_vm.g.Dict.MallProductStatuses), function(s, idx) {
    return _c('i-option', {
      key: idx,
      attrs: {
        "value": idx
      }
    }, [_vm._v(_vm._s(s))])
  })], 2)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('label', [_vm._v("商品类型")]), _vm._v(" "), _c('i-select', {
    staticStyle: {
      "width": "90px"
    },
    attrs: {
      "filterable": ""
    },
    model: {
      value: (_vm.query.productType),
      callback: function($$v) {
        _vm.$set(_vm.query, "productType", $$v)
      },
      expression: "query.productType"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("-- 不限 --")]), _vm._v(" "), _vm._l((_vm.g.Dict.MallProductTypes), function(v, idx) {
    return _c('i-option', {
      key: idx,
      attrs: {
        "value": idx
      }
    }, [_vm._v(_vm._s(v))])
  })], 2)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('label', [_vm._v("价格类型")]), _vm._v(" "), _c('i-select', {
    staticStyle: {
      "width": "110px"
    },
    model: {
      value: (_vm.query.priceType),
      callback: function($$v) {
        _vm.$set(_vm.query, "priceType", $$v)
      },
      expression: "query.priceType"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("-- 不限 --")]), _vm._v(" "), _vm._l((_vm.g.Dict.MallProductPriceTypes), function(v, idx) {
    return _c('i-option', {
      key: idx,
      attrs: {
        "value": idx
      }
    }, [_vm._v(_vm._s(v))])
  })], 2)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('label', [_vm._v("商品类别")]), _vm._v(" "), _c('i-select', {
    staticStyle: {
      "width": "160px"
    },
    attrs: {
      "filterable": ""
    },
    model: {
      value: (_vm.query.cateId),
      callback: function($$v) {
        _vm.$set(_vm.query, "cateId", $$v)
      },
      expression: "query.cateId"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("-- 不限 --")]), _vm._v(" "), _vm._l((_vm.productCateList), function(c) {
    return _c('i-option', {
      key: c.cateId,
      attrs: {
        "value": c.cateId
      }
    }, [_vm._v(_vm._s(c.cateName))])
  })], 2)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "ios-search"
    },
    on: {
      "click": function($event) {
        return _vm.queryProduct(null)
      }
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.resetQuery
    }
  }, [_vm._v("重置")])], 1)])]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "tbl-header"
  }, [(_vm.editable) ? _c('div', {
    staticClass: "l"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": function($event) {
        return _vm.$router.push('/mall/product-create')
      }
    }
  }, [_vm._v("新增商品")]), _vm._v(" "), (_vm.g.data.user.isShopOwner) ? _c('i-button', {
    on: {
      "click": _vm.openReminderDlg
    }
  }, [_vm._v("提醒设置")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_vm._v("\n\t\t\t\t\t\t查询到"), _c('b', [_vm._v(" " + _vm._s(_vm.totalCount) + " ")]), _vm._v("个商品\n\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.productList), function(p) {
    return _c('tr', [_c('td', [_c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.updateProductOrderNo(p.productId, p.productName)
        }
      }
    }, [_vm._v(_vm._s(p.orderNo))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.cateName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.productName))]), _vm._v(" "), _c('td', [(p.status === 0) ? [_vm._v("上架")] : _vm._e(), _vm._v(" "), (p.status === 1) ? _c('span', {
      staticClass: "gray"
    }, [_vm._v("下架")]) : _vm._e()], 2), _vm._v(" "), _c('td', [(p.priceType === 0 || p.priceType === 2) ? [_vm._v(_vm._s(p.pricePoints) + " 分")] : _vm._e(), _vm._v(" "), (p.priceType === 2) ? _c('b', {
      staticClass: "green big"
    }, [_vm._v(" ＋ ")]) : _vm._e(), _vm._v(" "), (p.priceType === 1 || p.priceType === 2) ? [_vm._v("￥" + _vm._s(p.priceAmount))] : _vm._e()], 2), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [(p.limitBuyTimes) ? _c('li', [_vm._v(_vm._s(p.limitBuyTimes) + " 次")]) : _vm._e(), _vm._v(" "), (p.limitBuyNum) ? _c('li', [_vm._v(_vm._s(p.limitBuyNum) + " 件/次")]) : _vm._e()])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.stock))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.salesCnt))]), _vm._v(" "), _c('td', [(_vm.editable) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.$router.push('/mall/product-edit/' + p.productId)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.viewProductLog(p.productId, p.productName)
        }
      }
    }, [_vm._v("日志")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.handleAltProductStock(p)
        }
      }
    }, [_vm._v("入库")])]), _vm._v(" "), (p.status === 0) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.updateProductStatus(p.productId, 1)
        }
      }
    }, [_vm._v("下架")])]) : _vm._e(), _vm._v(" "), (p.status === 1) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.updateProductStatus(p.productId, 0)
        }
      }
    }, [_vm._v("上架")])]) : _vm._e(), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.deleteProduct(p.productId, p.productName)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont icon-delete"
    })])])]) : _vm._e()])])
  })], 2)]), _vm._v(" "), (_vm.totalCount && _vm.totalCount > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.totalCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryProduct
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.totalCount === 0) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n\t\t\t\t\t暂无数据\n        ")]) : _vm._e()]), _vm._v(" "), (_vm.hasMchId === false) ? _c('div', {
    staticClass: "warning"
  }, [_c('i', {
    staticClass: "iconfont icon-alert2 big"
  }), _vm._v(" 贵店尚未开通微信在线支付，会员无法通过使用微信支付购买含金额的商品，\n          "), _c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/online-pay-apply')
      }
    }
  }, [_vm._v("申请开通在线支付 →")])]) : _vm._e(), _vm._v(" "), _c('section', {
    staticClass: "note"
  }, [_vm._m(1), _vm._v(" "), _c('ol', [_vm._m(2), _vm._v(" "), _c('li', [_vm._v("微商城融合了积分商城和在线购物商城；")]), _vm._v(" "), _c('li', [_vm._v("微商城的商品可以是会员卡或者实物, 商品价格可以设置会员积分或金额；")]), _vm._v(" "), _c('li', [_vm._v("微商城中的商品是会员在线上（手机端）购买，记账中的商品是线下购买，两者无联系；")]), _vm._v(" "), _c('li', [_vm._v("会员在线支付统一使用微信支付，需要你们先开通微信在线支付功能（请参考 "), _c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/online-pay-apply')
      }
    }
  }, [_vm._v("在线支付申请")]), _vm._v("）")])])])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": _vm.logDlgTitle,
      "width": "1000",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.viewLogDlg),
      callback: function($$v) {
        _vm.viewLogDlg = $$v
      },
      expression: "viewLogDlg"
    }
  }, [(_vm.viewLogDlg) ? _c('mall-product-log', {
    attrs: {
      "product-id": _vm.selectProductId
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
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
        _vm.viewLogDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": '商品入库 - ' + _vm.selectPrdName,
      "width": "500"
    },
    model: {
      value: (_vm.productStockAltDlg),
      callback: function($$v) {
        _vm.productStockAltDlg = $$v
      },
      expression: "productStockAltDlg"
    }
  }, [(_vm.productStockAltDlg) ? _c('table', {
    staticClass: "tblform"
  }, [_c('tr', [_c('th', [_vm._v("当前商品库存：")]), _c('td', [_c('b', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.selectProductStock))])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("新入库数量：")]), _vm._v(" "), _c('td', [_c('input-int', {
    attrs: {
      "min": -99999
    },
    model: {
      value: (_vm.altStock),
      callback: function($$v) {
        _vm.altStock = _vm._n($$v)
      },
      expression: "altStock"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("入库后新库存：")]), _c('td', [_c('b', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.selectProductStock + (_vm.altStock ? _vm.altStock : 0)))])])]), _vm._v(" "), _c('tr', [_c('th'), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "p10"
  }, [_c('i-button', {
    staticStyle: {
      "width": "90px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.updateProductStock
    }
  }, [_vm._v("提交")]), _vm._v("\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t"), _c('i-button', {
    attrs: {
      "type": "text"
    },
    on: {
      "click": function($event) {
        _vm.productStockAltDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)])])]) : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "商品订单提醒设置",
      "width": "600"
    },
    model: {
      value: (_vm.reminderDlg),
      callback: function($$v) {
        _vm.reminderDlg = $$v
      },
      expression: "reminderDlg"
    }
  }, [_c('checkbox', {
    model: {
      value: (_vm.reminderEnable),
      callback: function($$v) {
        _vm.reminderEnable = $$v
      },
      expression: "reminderEnable"
    }
  }, [_vm._v("会员购买商品后，是否自动发短信通知")]), _vm._v(" "), (_vm.reminderEnable) ? _c('div', {
    staticClass: "p15"
  }, [_c('i-select', {
    attrs: {
      "placeholder": "请选择通知人（可多选）",
      "multiple": true
    },
    model: {
      value: (_vm.reminderStaffIds),
      callback: function($$v) {
        _vm.reminderStaffIds = $$v
      },
      expression: "reminderStaffIds"
    }
  }, _vm._l((_vm.staffList), function(s) {
    return _c('i-option', {
      key: s.staffId,
      attrs: {
        "value": s.staffId
      }
    }, [_vm._v(_vm._s(s.name))])
  }), 1)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "center mt20"
  }, [_c('i-button', {
    staticClass: "submit-button",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submitReminderConf
    }
  }, [_vm._v("确定")]), _vm._v("\n\t\t\t\t \n\t\t\t\t"), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.reminderDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("序号")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("商品类别")]), _vm._v(" "), _c('th', [_vm._v("商品名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("状态")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "160"
    }
  }, [_vm._v("商品价格")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("限购设置")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("当前库存")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("总销售量")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "220"
    }
  }, [_vm._v("操作")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit-help"
  }, [_vm._v("微商城简介")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_vm._v("健总管的微商城（简称商城）是针对"), _c('b', [_vm._v("会员")]), _vm._v("开放的在线购物服务；")])
}]}

/***/ }),

/***/ 2406:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "mall"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "mall",
      "page": "mall/product-cate"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', [(_vm.editable) ? _c('div', {
    staticClass: "tbl-header"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": function($event) {
        return _vm.create()
      }
    }
  }, [_vm._v("添加商品类别")])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.cateList), function(c, idx) {
    return _c('tr', [_c('td', {
      staticClass: "gray"
    }, [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.cateName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.remark))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.updateUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.updateTime))]), _vm._v(" "), _c('td', [(_vm.editable) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.update(idx)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.deleteCate(idx)
        }
      }
    }, [_vm._v("删除")])])]) : _vm._e()])])
  })], 2), _vm._v(" "), (_vm.cateList && !_vm.cateList.length) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("暂无数据")]) : _vm._e()])])]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "商品类别设置",
      "width": "450",
      "mask-closable": false
    },
    model: {
      value: (_vm.dlgShow),
      callback: function($$v) {
        _vm.dlgShow = $$v
      },
      expression: "dlgShow"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": "名称"
    },
    model: {
      value: (_vm.cate.cateName),
      callback: function($$v) {
        _vm.$set(_vm.cate, "cateName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "cate.cateName"
    }
  }), _c('p'), _vm._v(" "), _c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 5,
      "placeholder": "备注"
    },
    model: {
      value: (_vm.cate.remark),
      callback: function($$v) {
        _vm.$set(_vm.cate, "remark", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "cate.remark"
    }
  }), _vm._v(" "), _c('div', {
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
      "click": _vm.submit
    }
  }, [_vm._v("提交")]), _vm._v("  \n\t\t\t"), _c('i-button', {
    attrs: {
      "type": "default"
    },
    on: {
      "click": function($event) {
        _vm.dlgShow = false;
      }
    }
  }, [_vm._v("关闭")])], 1)], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "45"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("名称")]), _vm._v(" "), _c('th', [_vm._v("备注")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("更新人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("更新时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2434:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('ul', {
    staticClass: "opt-list"
  }, [_c('li', [_c('a', {
    class: {
      'on': _vm.tabNo === 0
    },
    on: {
      "click": function($event) {
        return _vm.swithTab(0)
      }
    }
  }, [_vm._v("商品修改日志")])]), _vm._v(" "), _c('li', [_c('a', {
    class: {
      'on': _vm.tabNo === 1
    },
    on: {
      "click": function($event) {
        return _vm.swithTab(1)
      }
    }
  }, [_vm._v("商品入库日志")])])])]), _vm._v(" "), (_vm.tabNo === 0) ? _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.changeLog.data), function(l) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(l.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.productName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.MallProductTypes[l.productType]))]), _vm._v(" "), _c('td', [(l.productType === 0) ? [_vm._v(_vm._s(l.cardName))] : _vm._e()], 2), _vm._v(" "), _c('td', [(l.productType === 0 && l.cardDays) ? [_vm._v(_vm._s(l.cardDays) + " 天")] : _vm._e()], 2), _vm._v(" "), _c('td', [(l.productType === 0 && !_vm.g.Util.isEmpty(l.cardTimes)) ? [_vm._v(_vm._s(l.cardTimes) + " 次")] : _vm._e()], 2), _vm._v(" "), _c('td', [(l.productType === 0 && !_vm.g.Util.isEmpty(l.cardAmount)) ? [_vm._v(_vm._s(l.cardAmount) + " 元")] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.MallProductPriceTypes[l.priceType]))]), _vm._v(" "), _c('td', [(l.priceType === 0 || l.priceType === 2) ? [_vm._v(_vm._s(l.pricePoints) + " 分")] : _vm._e(), _vm._v(" "), (l.priceType === 2) ? _c('b', {
      staticClass: "green big"
    }, [_vm._v(" ＋ ")]) : _vm._e(), _vm._v(" "), (l.priceType === 1 || l.priceType === 2) ? [_vm._v("￥" + _vm._s(l.priceAmount))] : _vm._e()], 2)])
  })], 2), _vm._v(" "), (_vm.changeLog.count === 0) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n\t\t\t\t\t\t暂无数据\n          ")]) : _vm._e()]) : (_vm.tabNo === 1) ? _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(1), _vm._v(" "), _vm._l((_vm.stockLog.data), function(l) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(l.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.stock))]), _vm._v(" "), _c('td', [_vm._v("+ " + _vm._s(l.altStock))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.stock + l.altStock))])])
  })], 2), _vm._v(" "), (_vm.stockLog.count === 0) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n\t\t\t\t\t\t暂无数据\n          ")]) : _vm._e()]) : _vm._e()])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "145"
    }
  }, [_vm._v("修改时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("修改人")]), _vm._v(" "), _c('th', [_vm._v("商品名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("商品类型")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("会员卡")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("使用天数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("使用次数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("使用金额")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("价格类型")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("商品价格")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("修改时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("修改人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("入库前数量")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("入库数量")]), _vm._v(" "), _c('th', [_vm._v("入库后数量")])])
}]}

/***/ }),

/***/ 2452:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "mall"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "mall",
      "page": "mall/product-order"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('Tabs', {
    attrs: {
      "animated": false
    },
    on: {
      "on-click": _vm.tabsFun
    },
    model: {
      value: (_vm.tabValue),
      callback: function($$v) {
        _vm.tabValue = $$v
      },
      expression: "tabValue"
    }
  }, [_c('TabPane', {
    attrs: {
      "label": "订单",
      "name": "1"
    }
  }, [_c('section', {
    staticClass: "query-section"
  }, [_c('ul', {
    staticClass: "query-cond-inline"
  }, [_c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "90px"
    },
    attrs: {
      "placeholder": "订单状态",
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
    attrs: {
      "value": 9
    }
  }, [_vm._v("已支付")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 0
    }
  }, [_vm._v("未支付")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("已退款")])], 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('date-picker', {
    staticClass: "input",
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "format": "yyyy-MM-dd",
      "placeholder": "请选择订单日期",
      "confirm": "",
      "options": _vm.orderDateOption,
      "type": "daterange",
      "placement": "bottom-start"
    },
    model: {
      value: (_vm.query.orderDates),
      callback: function($$v) {
        _vm.$set(_vm.query, "orderDates", $$v)
      },
      expression: "query.orderDates"
    }
  })], 1), _vm._v(" "), _c('li', {
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
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": "商品名称"
    },
    model: {
      value: (_vm.query.productName),
      callback: function($$v) {
        _vm.$set(_vm.query, "productName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "query.productName"
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
        return _vm.queryMallOrder(null)
      }
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.resetQuery
    }
  }, [_vm._v("重置")])], 1)])]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "mytbl orders"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "145"
    }
  }, [_vm._v("订单时间 ↓")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("状态")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("会员")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "145"
    }
  }, [_vm._v("支付时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("支付积分")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("支付金额")]), _vm._v(" "), _c('th', [_vm._v("购买商品")]), _vm._v(" "), _c('th', [_vm._v("购买备注")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("操作")])]), _vm._v(" "), _vm._l((_vm.orderList), function(o) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(o.createTime))]), _vm._v(" "), _c('td', {
      class: {
        'unpay': o.status === 0
      }
    }, [_vm._v(_vm._s(_vm.g.Dict.OrderStatus[o.status]))]), _vm._v(" "), _c('td', [_c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.viewMember(o.memberId)
        }
      }
    }, [_vm._v(_vm._s(o.memberName))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(o.transTime))]), _vm._v(" "), _c('td', [(o.paymentPoints) ? [_vm._v(_vm._s(o.paymentPoints))] : _c('i', {
      staticClass: "gray"
    }, [_vm._v("无")])], 2), _vm._v(" "), _c('td', [(o.paymentAmount) ? [_vm._v("￥" + _vm._s(o.paymentAmount))] : _c('i', {
      staticClass: "gray"
    }, [_vm._v("无")])], 2), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "prds"
    }, _vm._l((o.productList), function(p) {
      return _c('li', [_vm._v("\n                      " + _vm._s(p.productName) + " × " + _vm._s(p.unitNum) + "\n                      "), (p.consigneeTime) ? _c('span', {
        staticClass: "gray"
      }, [_vm._v("（已领）")]) : _vm._e(), _vm._v(" "), (p.refundStatus === 9) ? _c('span', {
        staticClass: "gray"
      }, [_vm._v("（已退）")]) : _vm._e()])
    }), 0)]), _vm._v(" "), _c('td', [_vm._v(_vm._s(o.remark))]), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.viewOrderDetail(o)
        }
      }
    }, [_vm._v("详细")])]), _vm._v(" "), (_vm.orderCancelPermit && o.status === 9) ? _c('li', [_c('a', [_vm._v("退货")])]) : _vm._e()])])])
  })], 2)]), _vm._v(" "), (_vm.orderList && _vm.orderList.length > 0) ? _c('div', {
    staticClass: "page-nav"
  }, [(_vm.orderCount > 30) ? _c('page', {
    attrs: {
      "total": _vm.orderCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryMallOrder
    }
  }) : _c('div', {
    staticClass: "center gray"
  }, [_vm._v("共 " + _vm._s(_vm.orderCount) + " 条记录")])], 1) : _vm._e(), _vm._v(" "), (_vm.orderList && !_vm.orderList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()])]), _vm._v(" "), _c('TabPane', {
    attrs: {
      "label": "退款",
      "name": "2"
    }
  }, [_c('OrderRefund')], 1)], 1)], 1), _vm._v(" "), _c('modal', {
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
      "title": "订单详情",
      "width": "850",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.selectOrderDlg),
      callback: function($$v) {
        _vm.selectOrderDlg = $$v
      },
      expression: "selectOrderDlg"
    }
  }, [(_vm.selectOrder) ? _c('div', {
    staticClass: "mytbl order-detail"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("订单时间")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.selectOrder.createTime))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("订单状态")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.OrderStatus[_vm.selectOrder.status]))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("会员")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.selectOrder.memberName))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("支付时间")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.selectOrder.transTime))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("支付款")]), _vm._v(" "), _c('td', [(_vm.selectOrder.paymentPoints) ? [_vm._v(_vm._s(_vm.selectOrder.paymentPoints) + " 积分")] : _vm._e(), _vm._v(" "), (_vm.selectOrder.paymentPoints && _vm.selectOrder.paymentAmount) ? _c('b', {
    staticClass: "big"
  }, [_vm._v("+")]) : _vm._e(), _vm._v(" "), (_vm.selectOrder.paymentAmount) ? [_vm._v("￥" + _vm._s(_vm.selectOrder.paymentAmount) + "\n              （\n              "), (_vm.selectOrder.paymentCashAmount) ? [_vm._v("微信支付 "), _c('b', [_vm._v(_vm._s(_vm.selectOrder.paymentCashAmount))]), _vm._v(" 元")] : _vm._e(), _vm._v(" "), (_vm.selectOrder.paymentCashAmount && _vm.selectOrder.paymentCardAmount) ? _c('b', {
    staticClass: "big"
  }, [_vm._v("+")]) : _vm._e(), _vm._v(" "), (_vm.selectOrder.paymentCardAmount) ? [_vm._v("储值卡支付 "), _c('b', [_vm._v(_vm._s(_vm.selectOrder.paymentCardAmount))]), _vm._v(" 元")] : _vm._e(), _vm._v("\n              ）\n            ")] : [_vm._v("￥0")]], 2)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("购买商品")]), _vm._v(" "), _c('td', [_c('ul', {
    staticClass: "prds"
  }, _vm._l((_vm.selectOrder.productList), function(p, idx) {
    return _c('li', [_vm._v("\n                ※ " + _vm._s(p.productName) + " × " + _vm._s(p.unitNum) + "\n                "), _c('span', {
      staticClass: "l10"
    }, [_vm._v("\n                  （\n                  "), _c('span', {
      staticClass: "green"
    }, [_vm._v("单价：\n                    "), (p.priceType === 0 || p.priceType === 2) ? [_vm._v(_vm._s(p.pricePoints) + " 分")] : _vm._e(), _vm._v(" "), (p.priceType === 2) ? _c('b', {
      staticClass: "green big"
    }, [_vm._v(" ＋ ")]) : _vm._e(), _vm._v(" "), (p.priceType === 1 || p.priceType === 2) ? [_vm._v("￥" + _vm._s(p.priceAmount))] : _vm._e()], 2), _vm._v("\n                  ）\n                  "), _c('span', {
      staticClass: "spt"
    }, [_vm._v("/")]), _vm._v("  \n                  "), (p.consigneeTime) ? [_vm._v(" " + _vm._s(p.consigneeTime) + " 领取")] : (_vm.selectOrder.status === 9) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.confirmProductReceipt(idx)
        }
      }
    }, [_vm._v("【领取】")]) : _vm._e(), _vm._v(" "), (p.refundStatus === 9) ? _c('span', {
      staticClass: "gray"
    }, [_vm._v("（已退）")]) : _vm._e(), _vm._v(" "), (_vm.isOpenShopCoupon && p.couponLogIds) ? _c('a', {
      staticClass: "r",
      on: {
        "click": function($event) {
          return _vm.useCouponQuery(p)
        }
      }
    }, [_vm._v("【优惠券使用记录】")]) : _vm._e()], 2)])
  }), 0)])])])]) : _vm._e()]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": ("商品【" + _vm.productName + "】-优惠券使用记录"),
      "width": "700",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.useCouponDlg),
      callback: function($$v) {
        _vm.useCouponDlg = $$v
      },
      expression: "useCouponDlg"
    }
  }, [_c('div', {
    staticClass: "mytbl use-coupon-dlg"
  }, _vm._l((_vm.logList), function(l) {
    return _c('table', {
      key: l.logId
    }, [_c('tr', [_c('th', {
      attrs: {
        "width": "100"
      }
    }, [_vm._v("优惠券名称")]), _vm._v(" "), _c('td', [_vm._v("【" + _vm._s(_vm.g.Dict.CouponTypes[l.couponType]) + "】" + _vm._s(l.title))])]), _vm._v(" "), _c('tr', [_c('th', {
      attrs: {
        "width": "100"
      }
    }, [_vm._v("券面额")]), _vm._v(" "), _c('td', [(l.couponType === 1) ? _c('span', [_c('b', [_vm._v(_vm._s(l.value))]), _vm._v(" 元")]) : _vm._e(), _vm._v(" "), (l.couponType === 2) ? _c('span', [_c('b', [_vm._v(_vm._s(l.value))]), _vm._v(" 折")]) : _vm._e(), _vm._v(" "), (l.couponType === 3) ? _c('span', [_vm._v("满 "), _c('b', [_vm._v(_vm._s(l.preValue))]), _vm._v(" 减 "), _c('b', [_vm._v(_vm._s(l.value))]), _vm._v(" 元")]) : _vm._e()])]), _vm._v(" "), _c('tr', [_c('th', {
      attrs: {
        "width": "100"
      }
    }, [_vm._v("领取时间")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createTime))])]), _vm._v(" "), _c('tr', [_c('th', {
      attrs: {
        "width": "100"
      }
    }, [_vm._v("使用时间")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.usedTime))])])])
  }), 0)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2508:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "mall"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "mall",
      "page": "mall/product-query"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [(_vm.editable) ? _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [(_vm.productId) ? [_vm._v("商品详情")] : [_vm._v("新增商品")]], 2), _vm._v(" "), _c('div', {
    staticClass: "r"
  })]), _vm._v(" "), _c('i-form', {
    ref: "product",
    staticClass: "myform",
    attrs: {
      "model": _vm.product,
      "rules": _vm.formRule,
      "label-width": 130
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "productName",
      "label": "商品名称"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.product.productName),
      callback: function($$v) {
        _vm.$set(_vm.product, "productName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "product.productName"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "cateId",
      "label": "商品类别"
    }
  }, [_c('i-select', {
    staticClass: "mbox",
    attrs: {
      "filterable": ""
    },
    model: {
      value: (_vm.product.cateId),
      callback: function($$v) {
        _vm.$set(_vm.product, "cateId", $$v)
      },
      expression: "product.cateId"
    }
  }, _vm._l((_vm.productCateList), function(c) {
    return _c('i-option', {
      key: c.cateId,
      attrs: {
        "value": c.cateId
      }
    }, [_vm._v(_vm._s(c.cateName))])
  }), 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "status",
      "label": "商品状态"
    }
  }, [(!_vm.productId) ? _c('radio-group', {
    model: {
      value: (_vm.product.status),
      callback: function($$v) {
        _vm.$set(_vm.product, "status", $$v)
      },
      expression: "product.status"
    }
  }, [_c('radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("上架")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("下架")])], 1) : [(_vm.product.status === 0) ? _c('span', {
    staticClass: "green"
  }, [_vm._v("上架")]) : _c('span', {
    staticClass: "red"
  }, [_vm._v("下架")])]], 2), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "productType",
      "label": "商品类型"
    }
  }, [_c('radio-group', {
    model: {
      value: (_vm.product.productType),
      callback: function($$v) {
        _vm.$set(_vm.product, "productType", $$v)
      },
      expression: "product.productType"
    }
  }, [_c('radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("会员卡")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("物品")])], 1), _vm._v(" "), _c('help', {
    staticClass: "l15",
    attrs: {
      "title": "提示"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t会员购买【会员卡】商品后，会立即生效会员卡；\n\t\t\t\t\t\t\t"), _c('br'), _vm._v("\n\t\t\t\t\t\t\t会员购买【物品】商品后，需到门店领取；\n\t\t\t\t\t\t")])], 1), _vm._v(" "), (_vm.product.productType === 0) ? _c('form-item', {
    attrs: {
      "prop": "cardId",
      "label": "会员卡选择",
      "required": ""
    }
  }, [_c('i-select', {
    on: {
      "on-change": _vm.handleCardSelect
    },
    model: {
      value: (_vm.product.cardId),
      callback: function($$v) {
        _vm.$set(_vm.product, "cardId", $$v)
      },
      expression: "product.cardId"
    }
  }, [_c('OptionGroup', {
    attrs: {
      "label": "期限卡"
    }
  }, _vm._l((_vm.cardList), function(c) {
    return (c.cardType === 1) ? _c('i-option', {
      key: c.cardId,
      attrs: {
        "value": c.cardId
      }
    }, [_vm._v(_vm._s(c.cardName) + " "), (c.defaultAmount) ? _c('span', [_vm._v("（默认金额：￥" + _vm._s(c.defaultAmount) + "）")]) : _vm._e()]) : _vm._e()
  }), 1), _vm._v(" "), _c('OptionGroup', {
    attrs: {
      "label": "次数卡"
    }
  }, _vm._l((_vm.cardList), function(c) {
    return (c.cardType === 2) ? _c('i-option', {
      key: c.cardId,
      attrs: {
        "value": c.cardId
      }
    }, [_vm._v(_vm._s(c.cardName) + " "), (c.defaultAmount) ? _c('span', [_vm._v("（默认金额：￥" + _vm._s(c.defaultAmount) + "）")]) : _vm._e()]) : _vm._e()
  }), 1), _vm._v(" "), _c('OptionGroup', {
    attrs: {
      "label": "储值卡"
    }
  }, _vm._l((_vm.cardList), function(c) {
    return (c.cardType === 3) ? _c('i-option', {
      key: c.cardId,
      attrs: {
        "value": c.cardId
      }
    }, [_vm._v(_vm._s(c.cardName) + " "), (c.defaultAmount) ? _c('span', [_vm._v("（默认金额：￥" + _vm._s(c.defaultAmount) + "）")]) : _vm._e()]) : _vm._e()
  }), 1), _vm._v(" "), _c('OptionGroup', {
    attrs: {
      "label": "计时卡"
    }
  }, _vm._l((_vm.cardList), function(c) {
    return (c.cardType === 4) ? _c('i-option', {
      key: c.cardId,
      attrs: {
        "value": c.cardId
      }
    }, [_vm._v(_vm._s(c.cardName) + " "), (c.defaultAmount) ? _c('span', [_vm._v("（默认金额：￥" + _vm._s(c.defaultAmount) + "）")]) : _vm._e()]) : _vm._e()
  }), 1)], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.product.cardId && _vm.product.productType === 0) ? [(_vm.product.cardType === 2) ? _c('form-item', {
    attrs: {
      "prop": "cardTimes",
      "label": "使用次数",
      "required": ""
    }
  }, [_c('input-num', {
    staticClass: "numinut",
    model: {
      value: (_vm.product.cardTimes),
      callback: function($$v) {
        _vm.$set(_vm.product, "cardTimes", $$v)
      },
      expression: "product.cardTimes"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("次")])], 1) : _vm._e(), _vm._v(" "), (_vm.product.cardType === 3) ? _c('form-item', {
    attrs: {
      "prop": "cardAmount",
      "label": "使用金额",
      "required": ""
    }
  }, [_c('input-num', {
    staticClass: "numinut",
    model: {
      value: (_vm.product.cardAmount),
      callback: function($$v) {
        _vm.$set(_vm.product, "cardAmount", $$v)
      },
      expression: "product.cardAmount"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")])], 1) : _vm._e(), _vm._v(" "), (_vm.product.cardType === 4) ? _c('form-item', {
    attrs: {
      "prop": "cardAmount",
      "label": "使用时间",
      "required": ""
    }
  }, [_c('input-num', {
    staticClass: "numinut",
    model: {
      value: (_vm.product.cardTimes),
      callback: function($$v) {
        _vm.$set(_vm.product, "cardTimes", $$v)
      },
      expression: "product.cardTimes"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("分钟")])], 1) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "cardDays",
      "label": "使用天数"
    }
  }, [_c('input-int', {
    staticClass: "numinut",
    model: {
      value: (_vm.product.cardDays),
      callback: function($$v) {
        _vm.$set(_vm.product, "cardDays", $$v)
      },
      expression: "product.cardDays"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("天")])], 1), _vm._v(" "), (_vm.product.cardDays) ? _c('form-item', {
    attrs: {
      "prop": "cardLimitBeginDays",
      "label": "最迟开卡天数"
    }
  }, [_c('input-int', {
    staticClass: "numinut",
    attrs: {
      "min": "0"
    },
    model: {
      value: (_vm.product.cardLimitBeginDays),
      callback: function($$v) {
        _vm.$set(_vm.product, "cardLimitBeginDays", $$v)
      },
      expression: "product.cardLimitBeginDays"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("天")]), _vm._v(" "), _c('help', {
    staticClass: "l10",
    attrs: {
      "title": "提示"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t指会员在线购买会员卡后，最迟多少天内要使用此卡，否则按照最迟开卡日期为起始日期\n              ")])], 1) : _vm._e()] : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "priceType",
      "label": "商品价格"
    }
  }, [_c('radio-group', {
    model: {
      value: (_vm.product.priceType),
      callback: function($$v) {
        _vm.$set(_vm.product, "priceType", $$v)
      },
      expression: "product.priceType"
    }
  }, [_c('radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("积分")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("金额")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("积分 + 金额")])], 1), _vm._v(" "), _c('div', {
    staticClass: "prices"
  }, [(_vm.product.priceType === 0 || _vm.product.priceType === 2) ? [_c('input-num', {
    model: {
      value: (_vm.product.pricePoints),
      callback: function($$v) {
        _vm.$set(_vm.product, "pricePoints", $$v)
      },
      expression: "product.pricePoints"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("分")])] : _vm._e(), _vm._v(" "), (_vm.product.priceType === 2) ? _c('span', {
    staticClass: "price-plus"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-add-circle-outline",
      "color": "#999",
      "size": "20"
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.product.priceType === 1 || _vm.product.priceType === 2) ? [_c('input-num', {
    model: {
      value: (_vm.product.priceAmount),
      callback: function($$v) {
        _vm.$set(_vm.product, "priceAmount", $$v)
      },
      expression: "product.priceAmount"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")])] : _vm._e()], 2)], 1), _vm._v(" "), (_vm.product.priceType > 0) ? _c('form-item', {
    attrs: {
      "prop": "allowPayByValueCard",
      "label": "允许储值卡支付"
    }
  }, [_c('i-switch', {
    attrs: {
      "size": "large"
    },
    model: {
      value: (_vm.product.allowPayByValueCard),
      callback: function($$v) {
        _vm.$set(_vm.product, "allowPayByValueCard", $$v)
      },
      expression: "product.allowPayByValueCard"
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
  }, [_vm._v("否")])])], 1) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "limitBuyTimes",
      "label": "每人最多购买"
    }
  }, [_c('input-int', {
    staticClass: "numinut",
    attrs: {
      "min": "1"
    },
    model: {
      value: (_vm.product.limitBuyTimes),
      callback: function($$v) {
        _vm.$set(_vm.product, "limitBuyTimes", $$v)
      },
      expression: "product.limitBuyTimes"
    }
  }), _vm._v("   次\n\t\t\t\t\t\t"), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（不填表示不限制）")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "limitBuyTimes",
      "label": "每人每次最多购买"
    }
  }, [_c('input-int', {
    staticClass: "numinut",
    attrs: {
      "min": "1"
    },
    model: {
      value: (_vm.product.limitBuyNum),
      callback: function($$v) {
        _vm.$set(_vm.product, "limitBuyNum", $$v)
      },
      expression: "product.limitBuyNum"
    }
  }), _vm._v("    件\n\t\t\t\t\t\t"), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（不填表示不限制）")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "商品图片",
      "required": ""
    }
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccessForLogo,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultLisForLogo
    }
  }, [_c('i-button', {
    attrs: {
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传商品主图")]), _vm._v("\n\t\t\t\t\t\t\t  "), _c('span', {
    staticClass: "gray"
  }, [_vm._v("（必须）")])], 1), _vm._v(" "), _c('p'), _vm._v(" "), _c('img-upload', {
    attrs: {
      "multiple": false,
      "removeable": true,
      "max-count": 5,
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccessForMore,
      "on-remove": _vm.handleImgRemoveMore,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultListForMore
    }
  }, [_c('i-button', {
    attrs: {
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传更多图片")]), _vm._v("\n\t\t\t\t\t\t\t  "), _c('span', {
    staticClass: "gray"
  }, [_vm._v("（最多可上传 "), _c('b', [_vm._v("5")]), _vm._v(" 张）")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "productDesc",
      "label": "商品详情"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 15
    },
    model: {
      value: (_vm.product.productDesc),
      callback: function($$v) {
        _vm.$set(_vm.product, "productDesc", $$v)
      },
      expression: "product.productDesc"
    }
  }), _vm._v(" "), (_vm.product.productDesc) ? _c('div', {
    staticClass: "size-cnt"
  }, [_vm._v(_vm._s(_vm.product.productDesc.length) + " / 2000")]) : _vm._e()], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "stock",
      "label": "商品库存"
    }
  }, [(!_vm.productId) ? _c('input-int', {
    model: {
      value: (_vm.product.stock),
      callback: function($$v) {
        _vm.$set(_vm.product, "stock", $$v)
      },
      expression: "product.stock"
    }
  }) : _c('b', [_vm._v(_vm._s(_vm.product.stock))])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "orderNo",
      "label": "展示序号"
    }
  }, [(!_vm.productId) ? _c('input-num', {
    model: {
      value: (_vm.product.orderNo),
      callback: function($$v) {
        _vm.$set(_vm.product, "orderNo", $$v)
      },
      expression: "product.orderNo"
    }
  }) : _c('b', [_vm._v(_vm._s(_vm.product.orderNo))]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（数字越小，展示越靠前）")])], 1)], 2), _vm._v(" "), (_vm.editable) ? _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "110px"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.saveProduct()
      }
    }
  }, [_vm._v("提交")]), _vm._v("\n\t\t\t\t\t \n\t\t\t\t\t"), (_vm.productId) ? _c('i-button', {
    on: {
      "click": function($event) {
        return _vm.delproduct()
      }
    }
  }, [_vm._v("删除")]) : _vm._e()], 1) : _vm._e()], 1) : _c('section', [_c('div', {
    staticClass: "warning center"
  }, [_vm._v("您无权限查看")])])])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2515:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "mall"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "mall",
      "page": "mall/opt-log"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('ul', {
    staticClass: "opt-list"
  }, [_c('li', [_c('a', {
    class: {
      'on': _vm.tabNo === 0
    },
    on: {
      "click": function($event) {
        return _vm.swithTab(0)
      }
    }
  }, [_vm._v("商品修改日志")])]), _vm._v(" "), _c('li', [_c('a', {
    class: {
      'on': _vm.tabNo === 1
    },
    on: {
      "click": function($event) {
        return _vm.swithTab(1)
      }
    }
  }, [_vm._v("商品入库日志")])])])]), _vm._v(" "), (_vm.optType === 0) ? _c('div', {
    staticClass: "mytbl"
  }, [_vm._m(0), _vm._v(" "), (_vm.changeLog.count && _vm.changeLog.count >= 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.changeLog.count,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryUpdateLog
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.changeLog.data && _vm.changeLog.data.length === 0) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("\n\t\t\t\t\t\t暂无数据\n          ")]) : _vm._e()]) : (_vm.optType === 1) ? _c('div', {
    staticClass: "mytbl"
  }, [_vm._m(1), _vm._v(" "), (_vm.stockLog.count && _vm.stockLog.count >= 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.stockLog.count,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryDelLog
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.stockLog.data && _vm.stockLog.data.length === 0) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("\n\t\t\t\t\t\t暂无数据\n          ")]) : _vm._e()]) : _vm._e()])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("修改时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("修改人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "250"
    }
  }, [_vm._v("商品名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("商品类型")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("会员卡")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("使用天数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("使用次数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("使用金额")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("价格类型")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("商品价格")]), _vm._v(" "), _c('th', [_vm._v("支持储值卡消费")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("修改时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("修改人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "300"
    }
  }, [_vm._v("商品名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("当时库存")]), _vm._v(" "), _c('th', [_vm._v("入库数量")])])])
}]}

/***/ }),

/***/ 920:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2102)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1282),
  /* template */
  __webpack_require__(2515),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-b38ee584",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 921:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1994)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1283),
  /* template */
  __webpack_require__(2406),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5186a489",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 922:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2095)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1284),
  /* template */
  __webpack_require__(2508),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-a3ec7c78",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2040)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1285),
  /* template */
  __webpack_require__(2452),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6db0f104",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1882)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1286),
  /* template */
  __webpack_require__(2292),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1955357e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(11)(
  /* script */
  null,
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});