webpackJsonp([11],{

/***/ 1025:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2121)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1418),
  /* template */
  __webpack_require__(2536),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-eb4b3e02",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1026:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1914)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1419),
  /* template */
  __webpack_require__(2326),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2a9a98e4",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1027:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2039)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1420),
  /* template */
  __webpack_require__(2451),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6da3c25a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1028:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1971)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1421),
  /* template */
  __webpack_require__(2383),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-498d2024",
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

/***/ 1143:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1184)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1159),
  /* template */
  __webpack_require__(1203),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-999feef0",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1159:
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



/* harmony default export */ __webpack_exports__["default"] = ({
	components: { MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue___default.a },
	props: ["value"],
	data() {
		return {
			g: $,
			queryNo: null,
			member: {},
			memberList: [],
			viewMemberDlg: false,
			selectMemberId: null
		};
	},

	methods: {
		updateVal: function (val) {
			this.$emit('input', val ? val.trim() : null);
		},

		handleBlur(event) {
			this.queryMember(() => {
				this.$emit('afterQuery', this.member);
			});
		},

		queryMember(callback) {
			//if (this.memberList && this.memberList.length > 1) return;

			this.queryNo = this.value ? this.value.trim() : null;
			if (!this.queryNo) {
				if (!this.memberList.length) {
					$.Msg.warning($.Lang.NO_INPUT);
				}
				return;
			}

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
			args.page = 1;

			$.Req.service($.SvName.MEMBER_ADV_QUERY, args, ret => {
				this.member = null;
				let queryError = null;
				if (!ret || !ret.memberList || ret.memberList.length === 0) {
					if (this.queryNoType === 'phone') {
						queryError = "不存在手机号为【{0}】的会员".format(this.queryNo);
					} else if (!$.Util.isInteger(this.queryNo)) {
						queryError = "不存在姓名为【{0}】的会员".format(this.queryNo);
					} else {
						queryError = "不存在卡号为【{0}】的会员".format(this.queryNo);
					}
					$.Msg.error(queryError);
					return;
				}
				this.queryError = null;
				if (ret.memberList.length === 1) {
					this.memberList = null;
					this.member = ret.memberList[0];
				} else {
					this.memberList = ret.memberList;
				}

				if (callback) callback();
			}, true);
		},

		selectMember(m) {
			this.member = m;
			this.queryNo = m.name;
			this.$emit('input', m.name);
			this.$emit('afterQuery', this.member);
		},

		viewMebmerInfo(memberId) {
			this.selectMemberId = memberId;
			this.viewMemberDlg = true;
		}
	}
});

/***/ }),

/***/ 1173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".memb-list[data-v-999feef0]{padding:10px;margin:10px 0;border:1px solid #eee}.memb-list .tit[data-v-999feef0]{padding-bottom:10px;color:orange}.memb-list .name[data-v-999feef0]{font-size:14px;color:#444}.memb-list li[data-v-999feef0]{display:inline-block;margin:3px;line-height:1;padding:10px;background:#eee;cursor:pointer;font-size:12px;color:#aaa}.memb-list li[data-v-999feef0]:hover{background:#ddd}.query-input[data-v-999feef0]{height:32px;line-height:32px;border:1px solid #d7dde4;width:160px;padding:0 10px;background:#fff}", ""]);

// exports


/***/ }),

/***/ 1184:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1173);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("2d08b482", content, true, {});

/***/ }),

/***/ 1203:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('input', {
    staticClass: "query-input",
    attrs: {
      "type": "text",
      "title": "",
      "placeholder": "手机号  |  姓名  |  刷卡"
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "mousewheel": function($event) {
        $event.preventDefault();
      },
      "input": function($event) {
        return _vm.updateVal($event.target.value)
      },
      "blur": _vm.handleBlur,
      "keyup": function($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.handleBlur.apply(null, arguments)
      }
    }
  }), _vm._v(" "), (_vm.member && _vm.member.name) ? _c('a', {
    staticClass: "l10",
    on: {
      "click": function($event) {
        return _vm.viewMebmerInfo(_vm.member.memberId)
      }
    }
  }, [_vm._v(_vm._s(_vm.member.name))]) : _vm._e(), _vm._v(" "), (_vm.memberList && _vm.memberList.length > 1) ? _c('div', {
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
    }, [_vm._v(_vm._s(m.name))]), _vm._v("（" + _vm._s(_vm.g.Dict.Sex[m.sex]) + "）\n\t\t\t")])
  }), 0)]) : _vm._e(), _vm._v(" "), _c('modal', {
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
		venueId: {
			type: Number,
			required: true
		}
	},
	data() {
		return {
			g: window.$,
			aiMachVenueAreaList: null,
			aiMachVenueAreaDlg: null,
			aiMachVenueArea: {
				machId: null,
				vaId: null,
				lisenceId: null,
				devId: null,
				delayTime: null
			},
			aiMachList: null,
			venueAreaList: null,
			selectMva: null,
			checkoutQrcodeDlg: null,
			qrCodeUrl: null
		};
	},

	created() {
		this.queryAiMachVenueAreaList();
	},

	methods: {
		queryAiMachList() {
			$.Req.service($.SvName.AI_MACH_QUERY, {}, ret => {
				this.aiMachList = ret.aiMachList;
			}, true);
		},

		queryVenueAreaList() {
			$.Req.service($.SvName.VENUE_AREA_QUERY, { venueId: this.venueId }, ret => {
				this.venueAreaList = ret.venueAreaList;
			}, true);
		},

		queryAiMachVenueAreaList() {
			let args = {
				venueId: this.venueId
			};
			$.Req.service($.SvName.AI_MACH_VENUE_AREA_QUERY, args, ret => {
				this.aiMachVenueAreaList = ret.mvaList;
			}, true);
		},

		deleteAiMachVenueArea(amvaId) {
			if (!confirm('您确定要删除吗?')) {
				return;
			}

			let args = { deleteId: amvaId };
			$.Req.service($.SvName.AI_MACH_VENUE_AREA_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryAiMachVenueAreaList();
			}, true);
		},

		saveAiMachVenueArea() {
			if (!this.aiMachVenueArea.machId) {
				$.Msg.error('请选择人脸设备');
				return;
			}
			if (!this.aiMachVenueArea.vaId) {
				$.Msg.error('请选择场地');
				return;
			}
			if (!this.aiMachVenueArea.lisenceId) {
				$.Msg.error('请输入模拟器ID');
				return;
			}
			if (!this.aiMachVenueArea.delayTime) {
				$.Msg.error('请输入设备关闭延迟时间');
				return;
			}

			let args = {
				mva: this.aiMachVenueArea
			};
			$.Req.service($.SvName.AI_MACH_VENUE_AREA_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.aiMachVenueAreaDlg = false;
				this.queryAiMachVenueAreaList();
			}, true);
		},

		openAiMachVenueArea(mva) {
			if (!this.aiMachList) this.queryAiMachList();
			if (!this.venueAreaList) this.queryVenueAreaList();
			this.aiMachVenueArea = mva ? mva : {};
			this.aiMachVenueAreaDlg = true;
		},

		openQrcodeDlg(mva) {
			this.selectMva = mva;
			this.qrCodeUrl = "{0}#/venue-area-booking-checkout?t={1}&encSid={2}&vaId={3}".format($.Conf.MOBILE_CLIENT_URL, $.data.tenant.encTid, $.data.shop.encSid, mva.vaId);
			this.checkoutQrcodeDlg = true;
		}
	}
});

/***/ }),

/***/ 1389:
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



/* harmony default export */ __webpack_exports__["default"] = ({
	components: { MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue___default.a },
	props: {
		venueId: {
			type: Number,
			required: true
		}
	},
	data() {
		return {
			g: window.$,
			confList: null,
			cardList: null,
			conf: {
				confId: null,
				cardId: null,
				vaIdList: [],
				hasVenueBookingFee: false

			},
			confInfoDlg: null,
			venueAreaList: null,
			venueAreaNameMap: {},
			copyCardIdList: [],
			copyDlg: null
		};
	},

	created() {
		this.queryCardList();
		this.queryVenueAreaList(() => {
			this.queryPlCardVenueConf();
		});
	},

	methods: {
		queryCardList() {
			$.Req.service($.SvName.CARD_QUERY, { status: 0 }, res => {
				this.cardList = res.cardList;
			});
		},

		queryVenueAreaList(callback) {
			let args = { venueId: this.venueId, areaType: 0 };
			$.Req.service($.SvName.VENUE_AREA_QUERY, args, ret => {
				this.venueAreaList = ret.venueAreaList;
				for (let a of ret.venueAreaList) {
					this.venueAreaNameMap[a.vaId] = a.areaName;
				}
				if (callback) callback();
			}, true);
		},

		queryPlCardVenueConf() {
			let args = {
				venueId: this.venueId
			};
			$.Req.service($.SvName.PL_CARD_VENUE_CONF_QUERY, args, res => {
				this.confList = res.confList;
			});
		},

		openConfDlg(conf) {
			if (conf) {
				$.Util.copyAttributes(conf, this.conf);
				this.conf.vaIdList = [];
				for (let vaId of this.conf.areaIds.split(',')) {
					this.conf.vaIdList.push(parseInt(vaId));
				}
			} else {
				this.conf = {
					confId: null,
					cardId: null,
					vaIdList: []
				};
			}
			this.confInfoDlg = true;
		},

		saveConf() {
			if (!this.conf.cardId) {
				$.Msg.error('请选择会员卡');
				return;
			}
			if (!this.conf.vaIdList.length) {
				$.Msg.error('请选择可用场地');
				return;
			}
			let args = {
				actionType: this.conf.confId ? 'U' : 'I',
				conf: {
					confId: this.conf.confId,
					venueId: this.venueId,
					cardId: this.conf.cardId,
					areaIds: this.conf.vaIdList.join(','),
					hasVenueBookingFee: this.conf.hasVenueBookingFee
				}
			};
			$.Req.service($.SvName.PL_CARD_VENUE_CONF_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryPlCardVenueConf();
				this.confInfoDlg = false;
			}, true);
		},

		openCopyConfDlg() {
			this.copyDlg = true;
			this.copyCardIdList = [];
		},

		copyConf() {
			if (!this.copyCardIdList || !this.copyCardIdList.length) {
				$.Msg.error('请选择需要复制的会员卡配置');
				return;
			}
			let confList = [];
			for (let cardId of this.copyCardIdList) {
				let conf = {
					cardId: cardId,
					venueId: this.venueId,
					areaIds: this.conf.areaIds,
					hasVenueBookingFee: this.conf.hasVenueBookingFee
				};
				confList.push(conf);
			}
			let args = {
				venueId: this.venueId,
				confList: confList
			};
			$.Req.service($.SvName.PL_CARD_VENUE_CONF_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryPlCardVenueConf();
				this.copyDlg = false;
				this.confInfoDlg = false;
			}, true);
		},

		deleteConf(confId) {
			if (!confirm('您确定要删除此项吗？')) {
				return;
			}
			let args = { deleteId: confId, actionType: 'D' };
			$.Req.service($.SvName.PL_CARD_VENUE_CONF_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryPlCardVenueConf();
			}, true);
		},

		checkAllArea() {
			this.conf.vaIdList = [];
			for (let va of this.venueAreaList) {
				this.conf.vaIdList.push(va.vaId);
			}
		},

		uncheckAllArea() {
			this.conf.vaIdList = [];
		}
	}
});

/***/ }),

/***/ 1390:
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



/* harmony default export */ __webpack_exports__["default"] = ({
	components: { MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue___default.a },
	props: {
		venueId: {
			type: Number,
			required: true
		}
	},
	data() {
		return {
			g: window.$,
			vab: {
				dlg: null,
				dataList: null,
				count: null,
				beginDate: new Date(),
				endDate: new Date(),
				memberPhone: null
			},
			viewMemberDlg: null,
			viewMemberId: null,
			queryPage: null,
			checkoutDlg: null,
			selectVabc: null,
			checkoutDate: null
		};
	},

	created() {
		this.queryVabcList();
	},

	methods: {
		submitCheckout() {
			if (!this.checkoutDate) {
				$.Msg.error('请选择签出时间');
				return;
			}
			if ($.Util.formatDateTime(this.checkoutDate) > $.Util.formatDateTime(new Date())) {
				$.Msg.error('签出时间不能大于现在时间');
				return;
			}
			if ($.Util.formatDateTime(this.checkoutDate) < $.Util.formatDateTime(this.selectVabc.checkinTime)) {
				$.Msg.error('签出时间不能小于签到时间');
				return;
			}

			let args = {
				vabcId: this.selectVabc.vabcId,
				memberId: this.selectVabc.memberId,
				vaId: this.selectVabc.vaId,
				checkoutDate: this.checkoutDate
			};
			$.Req.service($.SvName.VENUE_AREA_BOOKING_CHECKOUT, args, (ret, systime) => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryVabcList();
				this.checkoutDlg = false;
			}, true);
		},

		openCheckoutDlg(vabc) {
			this.selectVabc = vabc;
			this.checkoutDate = new Date();
			this.checkoutDlg = true;
		},

		queryVabcList(page = null) {
			if (this.vab.beginDate && !this.vab.endDate || !this.vab.beginDate && this.vab.endDate) {
				$.Msg.error('请输入完整的使用日期');
				return;
			}
			if ($.Util.calcDateDiffDays(this.vab.endDate, this.vab.beginDate) > 180) {
				$.Dlg.error('查询日期范围不能超过180天');
				return;
			}
			if (!this.vab.memberPhone && $.Util.validatePhoneNo(this.vab.memberPhone)) {
				$.Dlg.error('手机号格式有误');
				return;
			}

			let args = {
				venueId: this.venueId,
				bookingDateBegin: this.vab.beginDate,
				bookingDateEnd: this.vab.endDate,
				memberPhone: this.vab.memberPhone,
				page: page
			};
			this.queryPage = page;
			$.Req.service($.SvName.VENUE_AREA_BOOKING_CHECKIN_QUERY, args, (ret, systime) => {
				this.vab.dataList = ret.vabcList;
				if (!page) {
					this.vab.count = ret.count;
				}
			}, true);
		},

		viewMember(memberId) {
			this.viewMemberDlg = true;
			this.viewMemberId = memberId;
		}
	}
});

/***/ }),

/***/ 1391:
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



/* harmony default export */ __webpack_exports__["default"] = ({
	components: { MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue___default.a },
	props: {
		venueId: {
			type: Number,
			required: true
		},

		afterCancelBooking: {
			type: Function,
			default() {
				return {};
			}
		}
	},
	data() {
		return {
			g: window.$,
			hasCancelOutdateBookingPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.CANCEL_OUTDATE_VENUE_BOOKING.value),
			vab: {
				dlg: null,
				dataList: null,
				count: null,
				beginDate: new Date(),
				endDate: new Date()
			},
			viewMemberDlg: null,
			viewMemberId: null,
			exportDlg: null,
			exportFileUrl: null,
			queryPage: null,
			canBatchCancelBooking: null,
			checkedVabIdxList: [30]
		};
	},

	created() {
		this.canBatchCancelBooking = this.hasCancelOutdateBookingPermit;
		this.queryVabList();
	},

	methods: {
		queryVabList(page = null, isExport = null) {
			if (this.vab.beginDate && !this.vab.endDate || !this.vab.beginDate && this.vab.endDate) {
				$.Msg.error('请输入完整的使用日期');
				return;
			}
			if ($.Util.calcDateDiffDays(this.vab.endDate, this.vab.beginDate) > 180) {
				$.Dlg.error('查询日期范围不能超过180天');
				return;
			}

			let args = {
				venueId: this.venueId,
				beginDate: this.vab.beginDate,
				endDate: this.vab.endDate,
				orderByVabId: true,
				page: page
			};
			if (isExport) {
				args.isExport = true;
				this.exportFileUrl = null;
				this.exportDlg = true;
			}
			this.queryPage = page;
			$.Req.service($.SvName.VENUE_AREA_BOOKING_QUERY, args, (ret, systime) => {
				if (isExport) {
					this.exportFileUrl = ret.fileurl;
					return;
				}
				let now = Date.new(systime);
				let idx = 0;
				for (let vab of ret.vabList) {
					this.checkedVabIdxList[idx++] = false;
					vab.isBeforeToday = now.compareDatePart(vab.bookingDate) > 0;
				}
				this.vab.dataList = ret.vabList;
				if (!page) {
					this.vab.count = ret.count;
				}
			}, true);
		},

		viewMember(memberId) {
			this.viewMemberDlg = true;
			this.viewMemberId = memberId;
		},

		exportToXls() {
			this.queryVabList(this.queryPage, true);
		},

		deleteVenueAreaBooking() {
			let vabIdList = [];
			for (let i = 0; i < this.vab.dataList.length; i++) {
				if (this.checkedVabIdxList[i]) {
					vabIdList.push(this.vab.dataList[i].vabId);
				}
			}
			if (vabIdList.length === 0) {
				$.Msg.error('请选择需要取消的预约');
				return;
			}

			if (!confirm('您确定批量取消所选择的预约吗？')) {
				return;
			}
			let args = {
				vabIdList: vabIdList
			};
			$.Req.service($.SvName.VENUE_AREA_BOOKING_DELETE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryVabList();
				if (this.afterCancelBooking) this.afterCancelBooking();
			}, true);
		}
	}
});

/***/ }),

/***/ 1392:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	props: {
		venue: {
			type: Object,
			required: true
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
			tabName: 'confEdit',
			initHours: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
			hours: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
			isSubmit: false,
			venueAreaList: null,
			venueAreaNameMap: {},
			venueAreaItemConfList: null,
			venueAreaItemConfCount: null,
			venueAreaItemConf: {
				areaIdList: [],
				beginDate: new Date(),
				endDate: null,
				hourList: [],
				cashPrice: null,
				cardPrices: null,
				weekArr: [0, 1, 2, 3, 4, 5, 6]
			},
			cardList: null,
			cardNameMap: {},
			cardPayments: {},
			cardCheckAll: false,
			venueId: null
		};
	},

	created() {
		this.venueId = this.venue.venueId;
		this.queryCardList(() => {
			this.queryVenueAreaList(() => {
				this.queryVenueAreaItemConfList();
			});
		});
	},

	methods: {
		queryVenueAreaList(callback) {
			let args = { venueId: this.venueId };
			$.Req.service($.SvName.VENUE_AREA_QUERY, args, ret => {
				this.venueAreaList = ret.venueAreaList;
				for (let a of ret.venueAreaList) {
					this.venueAreaNameMap[a.vaId] = a.areaName;
				}

				if (callback) callback();
			}, true);
		},

		batchConfValueCards() {
			if (!this.venueAreaItemConf.cashPrice) {
				$.Msg.error('请先填写“现金计费”金额');
				return;
			}
			let checkCnt = 0,
			    amount = this.venueAreaItemConf.cashPrice;
			for (let c of this.cardList) {
				if (c.cardType !== 3 || !this.venue.cardIdList.contains(c.cardId)) {
					continue;
				}
				if (this.cardPayments[c.cardId] && this.cardPayments[c.cardId].checked) {
					checkCnt++;
					this.$set(this.cardPayments, c.cardId, { checked: true, payment: amount });
				}
			}

			if (checkCnt === 0) {
				$.Msg.error('请先选择储值卡');
				return;
			}
		},

		checkCardPayment(card) {
			if (this.cardPayments[card.cardId] && this.cardPayments[card.cardId].checked) {
				if (card.cardType === 2 && !this.cardPayments[card.cardId].payment) {
					this.cardPayments[card.cardId].payment = 1;
				}
			}
		},

		checkAllCards(val) {
			this.cardCheckAll = val;
			for (let c of this.cardList) {
				if (c.status !== 0 || !this.venue.cardIdList.contains(c.cardId)) {
					continue;
				}

				this.$set(this.cardPayments, c.cardId, {
					checked: this.cardCheckAll,
					payment: this.cardPayments[c.cardId].payment });
				if (val && c.cardType === 2 && !this.cardPayments[c.cardId].payment) {
					this.cardPayments[c.cardId].payment = 1;
				}
			}
		},

		submitVenueAreaSchedule() {
			// check
			if ($.Util.isEmptyArray(this.venueAreaItemConf.areaIdList)) {
				$.Msg.error('请选择场地');
				return;
			}
			if (!this.venueAreaItemConf.beginDate) {
				$.Msg.error('请选择开始日期');
				return;
			}
			if (!this.venueAreaItemConf.endDate) {
				$.Msg.error('请选择结束日期');
				return;
			}
			if ($.Util.isEmptyArray(this.venueAreaItemConf.hourList)) {
				$.Msg.error('请选择时间');
				return;
			}
			if ($.Util.isEmpty(this.venueAreaItemConf.cashPrice)) {
				$.Msg.error('请选择现金计费');
				return;
			}
			if ($.Util.isEmptyArray(this.venueAreaItemConf.weekArr)) {
				$.Msg.error('请选择预约日期中的星期');
				return;
			}

			try {
				this.venueAreaItemConf.cardPrices = this.genCardPaymentList();
			} catch (err) {
				if (err) $.Dlg.error(err);
				return;
			}
			if (!this.venueAreaItemConf.cardPrices) {
				$.Dlg.error('请设置会员卡计费');
				return;
			}
			if (this.venueAreaItemConf.weekArr.length === 7) {
				this.venueAreaItemConf.weeks = null;
			} else {
				this.venueAreaItemConf.weeks = this.venueAreaItemConf.weekArr.join(',');
			}
			this.isSubmit = true;
			let args = {};
			$.Util.copyAttributes(this.venueAreaItemConf, args);
			args.venueId = this.venueId;
			$.Req.service($.SvName.VENUE_AREA_ITEM_LIST_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.isSubmit = false;
				if (this.afterSubmit) {
					this.afterSubmit();
				}
			}, true, err => {
				$.Msg.error(err);
				this.isSubmit = false;
			});
		},

		checkAllHours() {
			this.venueAreaItemConf.hourList = [];
			for (let h of this.initHours) this.venueAreaItemConf.hourList.push(h);
		},

		uncheckAllHours() {
			this.venueAreaItemConf.hourList = [];
		},

		queryCardList(callback) {
			let args = {
				cardIdList: this.venue.cardIds.split(',')
			};
			$.Req.service($.SvName.CARD_QUERY, args, ret => {
				this.cardList = ret.cardList;
				this.initCardPayments();
				if (callback) callback();
			});
		},

		initCardPayments() {
			this.cardPayments = {};
			for (let c of this.cardList) {
				// init cardPayments
				this.cardNameMap[c.cardId] = c.cardName;
				this.$set(this.cardPayments, c.cardId, { checked: false, payment: null, name: c.cardName });
				//this.cardPayments[c.cardId] = {checked: false, payment: null};
			}
		},

		checkAllArea() {
			this.venueAreaItemConf.areaIdList = [];
			for (let a of this.venueAreaList) {
				this.venueAreaItemConf.areaIdList.push(a.vaId);
			}
		},

		uncheckAllArea() {
			this.venueAreaItemConf.areaIdList = [];
		},

		findCard(cardId) {
			for (let i = 0, len = this.cardList.length; i < len; i++) {
				if (cardId === this.cardList[i].cardId) {
					return this.cardList[i];
				}
			}
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
						throw '【{0}】未设置计费额'.format(card.cardName);
					}
				} else {
					if (card.cardType === 2 && c.payment > 1) {
						if (!confirm('嘿，您设置的【{0}】每小时计费【{1}】次，是不是写错了，确定提交吗？'.format(card.cardName, c.payment))) {
							throw null;
						}
					}
					if (card.cardType !== 1 && c.payment <= 0) {
						throw '【{0}】计费金额必须大于0'.format(card.cardName);
					}
				}
				buff.push('{0}:{1}'.format(cardId, c.payment ? c.payment : ''));
			}

			return buff.join(',');
		},

		queryVenueAreaItemConfList(page = null) {
			if (!page) {
				this.venueAreaItemConfCount = null;
			}
			let args = { venueId: this.venueId, page: page };
			$.Req.service($.SvName.VENUE_AREA_ITEM_CONF_QUERY, args, ret => {
				for (let c of ret.confList) {
					c.areaIdList = [];
					c.areaNameList = [];
					for (let vaId of c.vaIds.split(',')) {
						c.areaIdList.push(parseInt(vaId));
						c.areaNameList.push(this.venueAreaNameMap[parseInt(vaId)]);
					}

					c.hourList = [];
					for (let t of c.times.split(',')) {
						c.hourList.push(parseInt(t));
					}

					let cardItems = c.cardPrices.split(',');
					c.cardNameList = [];
					for (let ci of cardItems) {
						let cardId = parseInt(ci.split(':')[0]);
						c.cardNameList.push(this.cardNameMap[cardId]);
					}
					c.weekNames = [];
					if (c.weeks) {
						for (let w of c.weeks.split(',')) {
							c.weekNames.push($.Dict.WeekName[w]);
						}
					}
				}
				this.venueAreaItemConfList = ret.confList;
				if (!page) this.venueAreaItemConfCount = ret.count;
			});
		},

		viewVenueAreaItemConf(idx) {
			let conf = this.venueAreaItemConfList[idx];
			let weekArr = conf.weeks ? conf.weeks.split(',') : [0, 1, 2, 3, 4, 5, 6];
			weekArr = weekArr.map(function (val) {
				return +val;
			});
			this.venueAreaItemConf = {
				areaIdList: conf.areaIdList,
				beginDate: conf.beginDate,
				endDate: conf.endDate,
				hourList: conf.hourList,
				cashPrice: conf.cashPrice,
				cardPrices: null,
				weekArr: weekArr
			};

			this.initCardPayments();
			let cardItems = conf.cardPrices.split(',');
			for (let ci of cardItems) {
				let arr = ci.split(':');
				let cardId = parseInt(arr[0]);
				let payment = arr[1] ? parseFloat(arr[1]) : null;
				this.$set(this.cardPayments, cardId, { checked: true, payment: payment });
			}

			this.tabName = 'confEdit';
		}
	}
});

/***/ }),

/***/ 1393:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	components: {},
	props: {
		venueId: {
			type: Number,
			required: true
		}
	},
	data() {
		return {
			g: window.$,
			venueBookingRestorePermit: $.Util.hasRoleFunc($.Dict.RoleFunc.VENUE_BOOKING_RESTORE.value),
			vaiPauseLog: {
				dlg: null,
				logList: null,
				count: null,
				beginDate: null,
				endDate: null
			},
			pauseLogCkList: new Array(30),
			queryPage: null
		};
	},

	created() {
		this.queryVaiLogList();
	},

	methods: {
		queryVaiLogList(page = null) {
			if (this.vaiPauseLog.beginDate && !this.vaiPauseLog.endDate || !this.vaiPauseLog.beginDate && this.vaiPauseLog.endDate) {
				$.Msg.error('请输入完整的停用操作日期');
				return;
			}
			let args = {
				venueId: this.venueId,
				beginDate: this.vaiPauseLog.beginDate,
				endDate: this.vaiPauseLog.endDate,
				page: page
			};
			this.queryPage = page;
			$.Req.service($.SvName.VENUE_AREA_ITEM_PAUSE_LOG_QUERY, args, ret => {
				this.vaiPauseLog.logList = ret.logList;
				if (!page) {
					this.vaiPauseLog.count = ret.count;
				}
			}, true);
		},

		selectVaiPauseLog(idx) {
			this.$set(this.pauseLogCkList, idx, !this.pauseLogCkList[idx]);
		},

		restoreVaiStatus() {
			let pauseLogList = [];
			for (let i = 0, len = this.vaiPauseLog.logList.length; i < len && i < this.pauseLogCkList.length; i++) {
				if (this.pauseLogCkList[i]) {
					pauseLogList.push({
						vaiId: this.vaiPauseLog.logList[i].vaiId,
						hourType: this.vaiPauseLog.logList[i].hourType
					});
				}
			}
			if (pauseLogList.length === 0) {
				$.Msg.error('请先选择需要批量恢复的记录');
				return;
			}
			if (!confirm('您确定批量恢复选择的记录？')) {
				return;
			}
			let args = {
				pauseLogList: pauseLogList
			};
			$.Req.service($.SvName.VENUE_AREA_ITEMS_RESTORE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryVaiLogList(this.queryPage);
			});
		}
	}
});

/***/ }),

/***/ 1394:
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
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
	components: { MemberSelect: __WEBPACK_IMPORTED_MODULE_0__pages_member_member_select_vue___default.a, MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default.a },
	props: {
		venueId: {
			type: Number,
			required: true
		}
	},
	data() {
		return {
			g: window.$,
			cancelLogList: null,
			cancelLogCount: null,
			memberSelectDlg: null,
			viewMemberDlg: null,
			queryPage: null,
			member: {
				flag: null,
				memberId: null,
				name: null
			},
			returnFeePermit: $.data.user.isShopOwner,
			logCkList: new Array(30),
			selectLogIdList: null,
			returnRemark: null,
			returnCancelFeeDlg: null,
			selectedLog: null,
			returnCancelFeeDetailDlg: null
		};
	},

	created() {
		this.queryVenueAreaBookingCancelLog();
	},

	methods: {
		queryVenueAreaBookingCancelLog(page = null) {
			this.queryPage = page;
			if (!page) this.cancelLogCount = null;
			let args = {
				page: page,
				venueId: this.venueId
			};
			if (this.member.memberId) args.memberId = this.member.memberId;
			$.Req.service($.SvName.VENUE_AREA_BOOKING_CANCEL_LOG_QUERY, args, ret => {
				if (args.memberId) {
					for (let l of ret.logList) {
						l.memberId = this.member.memberId;
						l.memberName = this.member.name;
					}
				}
				this.cancelLogList = ret.logList;
				if (!page) {
					this.cancelLogCount = ret.count;
				}
				this.logCkList = new Array(30);
			});
		},

		afterSelectMember(member) {
			this.member.memberId = member.memberId;
			this.member.name = member.name;
			this.memberSelectDlg = false;
			this.queryVenueAreaBookingCancelLog();
		},

		clearMember() {
			this.member = {};
			this.queryVenueAreaBookingCancelLog();
		},

		viewMebmerInfo(memberId) {
			this.selectMemberId = memberId;
			this.viewMemberDlg = true;
		},

		selectLog(idx) {
			this.$set(this.logCkList, idx, !this.logCkList[idx]);
		},

		returnCancelFee() {
			let logIdList = [];
			for (let i = 0, len = this.cancelLogList.length; i < len && i < this.logCkList.length; i++) {
				if (this.logCkList[i]) {
					logIdList.push(this.cancelLogList[i].logId);
				}
			}
			if (logIdList.length === 0) {
				$.Msg.error('请先选择需要批量退回取消扣费的记录');
				return;
			}
			this.selectLogIdList = logIdList;
			this.returnCancelFeeDlg = true;
		},

		submitReturnCancelFee() {
			if (!this.returnRemark) {
				$.Msg.error('请输入退回备注');
				return;
			}
			if (!confirm('您确定批量退回取消扣费？')) {
				return;
			}

			let args = {
				cancelLogIdList: this.selectLogIdList,
				remark: this.returnRemark
			};
			$.Req.service($.SvName.VENUE_AREA_BOOKING_CANCEL_FEE_RETURN, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryVenueAreaBookingCancelLog(this.queryPage);
				this.returnCancelFeeDlg = false;
			});
		},

		viewFeelReturnDetail(log) {
			this.selectedLog = log;
			this.returnCancelFeeDetailDlg = true;
		}
	}
});

/***/ }),

/***/ 1418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_select_vue__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_member_member_select_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_member_member_query_input_vue__ = __webpack_require__(1143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_member_member_query_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_member_member_query_input_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__venue_area_item_conf_vue__ = __webpack_require__(2218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__venue_area_item_conf_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__venue_area_item_conf_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__venue_area_item_pause_log_view_vue__ = __webpack_require__(2219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__venue_area_item_pause_log_view_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__venue_area_item_pause_log_view_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__venue_area_booking_list_vue__ = __webpack_require__(2217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__venue_area_booking_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__venue_area_booking_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pl_card_venue_conf_vue__ = __webpack_require__(2215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pl_card_venue_conf_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__pl_card_venue_conf_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__venue_booking_cancel_log_vue__ = __webpack_require__(2220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__venue_booking_cancel_log_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__venue_booking_cancel_log_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__venue_area_booking_checkin_vue__ = __webpack_require__(2216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__venue_area_booking_checkin_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__venue_area_booking_checkin_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { VenueAreaItemPauseLogView: __WEBPACK_IMPORTED_MODULE_4__venue_area_item_pause_log_view_vue___default.a, MemberSelect: __WEBPACK_IMPORTED_MODULE_0__pages_member_member_select_vue___default.a, MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default.a, MemberQueryInput: __WEBPACK_IMPORTED_MODULE_2__pages_member_member_query_input_vue___default.a, VenueAreaItemConf: __WEBPACK_IMPORTED_MODULE_3__venue_area_item_conf_vue___default.a, venueAreaBookingList: __WEBPACK_IMPORTED_MODULE_5__venue_area_booking_list_vue___default.a, PlCardVenueConf: __WEBPACK_IMPORTED_MODULE_6__pl_card_venue_conf_vue___default.a, VenueBookingCancelLog: __WEBPACK_IMPORTED_MODULE_7__venue_booking_cancel_log_vue___default.a, VenueAreaBookingCheckin: __WEBPACK_IMPORTED_MODULE_8__venue_area_booking_checkin_vue___default.a },
	data() {
		return {
			g: window.$,
			confEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.VENUE_CONF.value),
			venueBookingPausePermit: $.Util.hasRoleFunc($.Dict.RoleFunc.VENUE_BOOKING_PAUSE.value),
			venueBookingRestorePermit: $.Util.hasRoleFunc($.Dict.RoleFunc.VENUE_BOOKING_RESTORE.value),
			bookingOutdateVenuePermit: $.Util.hasRoleFunc($.Dict.RoleFunc.BOOKING_OUTDATE_VENUING.value),
			showUname: true,
			initHours: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
			hours: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
			selectHours: [],
			today: new Date(),
			isBeforeToday: false,
			venueList: null,
			selectVenue: {
				cardIdList: []
			},
			hasSelectVenuePermit: false,
			query: {
				venueId: null,
				bookingDate: new Date()
			},
			venueAreaList: null,
			venueAreaMap: {},
			venueAreaItemConfDlg: false,
			venueAreaItemMap: {},
			venueAreaBookingMap: {},
			newVenueAreaBookingDlg: false,
			venueAreaBooking: {
				bookingDate: null,
				bookingDateList: []
			},
			bookingDlg: {
				bookingBeginDate: null,
				bookingEndDate: null,
				bookingDateList: null
			},
			member: {
				flag: null,
				memberId: null,
				name: null
			},
			memberSelectDlg: false,
			memberCardList: null,
			venueAreaBookingDlg: false,
			selectMemberId: null,
			viewMemberDlg: false,
			hoursConfDlg: false,
			reminderVenues: {},
			staffEntryChargeItems: [],
			hasMemberCardNo: false,
			bookingCheckinDlg: false,
			memberVenueBookingList: null,
			checkinBookingIds: [],
			autoCheckin: true,
			enableBookingDateList: false,
			cancelLogDlg: false,
			vaiPauseDlg: null,
			pauseRemark: null,
			vaiPauseLogDlg: null,
			vabListDlg: null,
			plCardVenueConfDlg: null,
			enablePlCardVenueConf: null,
			enableSmsNoticeForStaffVenueBooking: null,
			noticeConfDlg: null,
			enableAiMachVenueArea: null,
			bookingCheckinListDlg: null
		};
	},

	created() {
		// init
		this.selectHours = this.hours.concat();
		this.queryStaffEntryChargeItem(() => {
			this.queryVenue();
		});
		this.queryShopArgs();
	},

	methods: {
		queryVenue() {
			$.Req.service($.SvName.VENUE_QUERY, {}, (ret, systime) => {
				this.today = Date.new(systime);
				this.query.bookingDate = Date.new(systime);
				this.isBeforeToday = false;
				this.venueList = ret.venueList;

				if ($.Util.cookie.get($.Conf.CookieKeys.VENUE_BOOKING_SELECT_VENUE_ID)) {
					this.query.venueId = parseInt($.Util.cookie.get($.Conf.CookieKeys.VENUE_BOOKING_SELECT_VENUE_ID));
					this.changeVenue(this.query.venueId);
				}
			});
		},

		queryVenueAreaList() {
			if (!this.query.venueId) {
				$.Msg.error('请选择场馆');
				return;
			}
			let args = { venueId: this.query.venueId, areaType: 0 };
			$.Req.service($.SvName.VENUE_AREA_QUERY, args, ret => {
				this.venueAreaList = ret.venueAreaList;
				for (let a of ret.venueAreaList) {
					this.venueAreaMap[a.vaId] = a;
				}
				this.queryVenueAreaItem();
			}, true);
		},

		queryStaffEntryChargeItem(callback) {
			$.Req.service($.SvName.STAFF_ENTRY_CHARGE_ITEM_QUERY, {}, ret => {
				if (ret.entryChargeItemList) {
					for (let i of ret.entryChargeItemList) {
						this.staffEntryChargeItems.push(i.itemId);
					}
				}
				if (callback) callback();
			});
		},

		changeVenue(venueId) {
			for (let v of this.venueList) {
				v.cardIdArr = v.cardIds.split(',');
				if (venueId === v.venueId) {
					this.selectVenue = v;
					this.selectVenue.cardIdList = [];
					for (let c of v.cardIdArr) {
						this.selectVenue.cardIdList.push(parseInt(c));
					}
					break;
				}
			}
			this.hasSelectVenuePermit = $.data.user.isShopOwner || this.staffEntryChargeItems.contains(this.selectVenue.itemId);
			$.Util.cookie.set($.Conf.CookieKeys.VENUE_BOOKING_SELECT_VENUE_ID, venueId, 365);
			this.queryVenueAreaList();
		},

		reloadData(showTips = true) {
			this.queryVenueAreaList();
			this.reminderVenues = {};
			if (showTips) $.Msg.success($.Lang.REFRESH_DONE);
		},

		changeBookingDate(date) {
			if (!date) {
				$.Dlg.error('请选择预约日期');
				return;
			}
			if (!this.query.venueId) return;

			if (this.bookingOutdateVenuePermit) {
				this.isBeforeToday = false;
			} else {
				this.isBeforeToday = this.today.compareDatePart(this.query.bookingDate) > 0;
			}
			this.reloadData();
		},

		queryVenueAreaItem() {
			if (!this.query.venueId || !this.query.bookingDate) {
				return;
			}

			let args = {
				venueId: this.query.venueId,
				beginDate: this.query.bookingDate
			};
			$.Req.service($.SvName.VENUE_AREA_ITEM_QUERY, args, ret => {
				this.venueAreaItemMap = {};
				for (let i of ret.areaItemList) {
					let key = i.vaId + '-' + i.bookingHour;
					this.venueAreaItemMap[key] = i;
				}

				this.queryVenueAreaBooking();
			});
		},

		queryVenueAreaBooking() {
			if (!this.query.venueId || !this.query.bookingDate) {
				return;
			}

			let args = {
				venueId: this.query.venueId,
				beginDate: this.query.bookingDate
			};
			$.Req.service($.SvName.VENUE_AREA_BOOKING_QUERY, args, ret => {
				this.venueAreaBookingMap = {};
				for (let i of ret.vabList) {
					let key = i.vaId + '-' + i.bookingHour;
					if (i.hourType === 0) {
						this.venueAreaBookingMap[key + '-1'] = i;
						this.venueAreaBookingMap[key + '-2'] = i;
					} else {
						key += '-' + i.hourType;
						this.venueAreaBookingMap[key] = i;
					}
				}
			});
		},

		openBookingDlg(itemKey, htype) {
			let areaItem = this.venueAreaItemMap[itemKey];
			if (!areaItem) {
				$.Msg.warning('未选择有效的场地');
				return;
			}
			if (!this.hasSelectVenuePermit) {
				$.Msg.warning('您没有此计费项目的操作权限');
				return;
			}

			// 可预约
			if (htype === 1 && areaItem.firstHalfStatus === 0 || htype === 2 && areaItem.secondHalfStatus === 0) {
				if (this.isBeforeToday) {
					$.Msg.warning('不能预约今日之前的时间');
					return;
				}
				if (this.today.compareDatePart(this.query.bookingDate) === 0) {
					this.autoCheckin = true;
				} else {
					this.autoCheckin = false;
				}
				this.venueAreaBooking = {
					vaId: areaItem.vaId,
					bookingDate: this.query.bookingDate,
					hourType: htype,
					hourArr: [areaItem.bookingHour + '-' + htype],
					memberId: null,
					mcId: null,
					cardIdList: [],
					vaIdList: [areaItem.vaId]
				};
				if (areaItem.cardPrices) {
					let cardItems = areaItem.cardPrices.split(',');
					for (let cardItem of cardItems) {
						let arr = cardItem.split(':');
						this.venueAreaBooking.cardIdList.push(parseInt(arr[0]));
					}
				}

				this.memberCardList = null;
				this.newVenueAreaBookingDlg = true;
			} else if (htype === 1 && areaItem.firstHalfStatus === 1 || htype === 2 && areaItem.secondHalfStatus === 1) {
				let vab = this.venueAreaBookingMap[areaItem.vaId + '-' + areaItem.bookingHour + '-' + htype];
				if (vab) {
					vab.hourType = htype;
					vab.areaName = this.findAreaName(areaItem.vaId);
					this.venueAreaBooking = vab;
					this.venueAreaBookingDlg = true;
				} else {
					$.Msg.warning('刷新后再试');
				}
			} else if (htype === 1 && areaItem.firstHalfStatus === 2 || htype === 2 && areaItem.secondHalfStatus === 2) {
				if (!this.venueBookingRestorePermit) {
					$.Dlg.warning('您没有【场地预约启用】的权限');
					return;
				}
				if (!confirm('确定恢复使用吗？')) return;

				let args = {
					vaIdList: [areaItem.vaId],
					bookingDate: this.query.bookingDate,
					hourType: htype,
					bookingHourList: [areaItem.bookingHour + '-' + htype],
					status: 0
				};
				$.Req.service($.SvName.VENUE_AREA_ITEM_STATUS_UPDATE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					this.reloadData(false);
					this.newVenueAreaBookingDlg = false;
				}, true);
			}
		},

		findAreaName(vaId) {
			for (let v of this.venueAreaList) {
				if (v.vaId === vaId) return v.areaName;
			}

			return null;
		},

		queryMemberCards() {
			if (!this.member.memberId) {
				return;
			}
			let args = {
				memberId: this.member.memberId
			};
			$.Req.service($.SvName.MEMBER_CARD_QUERY, args, (ret, systime) => {
				this.hasMemberCardNo = false;
				for (let mc of ret.memberCardList) {
					if (mc.cardNo && parseInt(this.member.flag) === parseInt(mc.cardNo) || mc.cardOutsideNo && parseInt(this.member.flag) === parseInt(mc.cardOutsideNo)) {
						this.hasMemberCardNo = true;
						mc.isFind = true;
					}
				}
				this.memberCardList = ret.memberCardList;
			});
		},

		createMemberAreaBooking() {
			// check
			if (!this.venueAreaBooking.vaIdList || this.venueAreaBooking.vaIdList.length < 1) {
				$.Msg.error('请选择预约场地');
				return;
			}
			if (!this.venueAreaBooking.hourArr || this.venueAreaBooking.hourArr.length < 1) {
				$.Msg.error('请选择预约时间');
				return;
			}
			if (!this.member.memberId) {
				$.Msg.error('请选择会员');
				return;
			}
			if (!this.venueAreaBooking.mcId) {
				$.Msg.error('请选择计费会员卡');
				return;
			}

			let args = {
				venueId: this.query.venueId,
				memberId: this.member.memberId,
				mcId: this.venueAreaBooking.mcId,
				bookingHourList: this.venueAreaBooking.hourArr,
				vaIdList: this.venueAreaBooking.vaIdList
			};
			if (this.enableBookingDateList) {
				if (!this.venueAreaBooking.bookingDateList || this.venueAreaBooking.bookingDateList.length < 1) {
					$.Msg.error('请选择预约日期');
					return;
				}
				args.bookingDateList = this.venueAreaBooking.bookingDateList;
			} else {
				args.bookingDate = this.query.bookingDate;
				if (this.today.compareDatePart(this.query.bookingDate) === 0 && this.autoCheckin) {
					args.autoCheckin = true;
				}
			}

			if (!confirm('确定预约吗？ 预约后将扣除会员卡费用。')) {
				return;
			}

			$.Req.service($.SvName.VENUE_AREA_BOOKING_CREATE_FOR_MEMBER, args, (ret, systime) => {
				this.newVenueAreaBookingDlg = false;
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.reloadData(false);
			});
		},

		viewMebmerInfo(memberId) {
			this.selectMemberId = memberId;
			this.viewMemberDlg = true;
		},

		deleteVenueAreaBooking(vabId) {
			if (!confirm('确定取消预约吗？')) {
				return;
			}

			let args = {
				vabId: vabId
			};
			$.Req.service($.SvName.VENUE_AREA_BOOKING_DELETE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.reloadData(false);
				this.venueAreaBookingDlg = false;
			}, true);
		},

		pauseAreaItems() {
			if (!this.venueAreaBooking.vaIdList || this.venueAreaBooking.vaIdList.length < 1) {
				$.Msg.error('请选择场地');
				return;
			}
			if (!this.venueAreaBooking.hourArr || this.venueAreaBooking.hourArr.length < 1) {
				$.Msg.error('请选择场地时间');
				return;
			}
			if (!this.pauseRemark) {
				$.Msg.error('请输入停用原因或备注');
				return;
			}
			if (this.pauseRemark.length > 500) {
				$.Msg.error('停用原因不能超过500字');
				return;
			}
			if (!confirm('确定停用所选时段的场地吗？'.format(this.venueAreaBooking.areaName))) {
				return;
			}

			let args = {
				vaIdList: this.venueAreaBooking.vaIdList,
				bookingHourList: this.venueAreaBooking.hourArr,
				remark: this.pauseRemark,
				status: 2
			};
			if (this.enableBookingDateList) {
				if (!this.venueAreaBooking.bookingDateList || this.venueAreaBooking.bookingDateList.length < 1) {
					$.Msg.error('请选择停用日期');
					return;
				}
				args.bookingDateList = this.venueAreaBooking.bookingDateList;
			} else {
				args.bookingDate = this.query.bookingDate;
			}
			$.Req.service($.SvName.VENUE_AREA_ITEM_STATUS_UPDATE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.reloadData(false);
				this.newVenueAreaBookingDlg = false;
				this.vaiPauseDlg = false;
			}, true);
		},

		confirmHoursConf() {
			if (this.selectHours.length === 0) {
				$.Msg.error('请选择时间段');
				return;
			}
			this.selectHours.sort((a, b) => {
				return a - b;
			});
			this.hours = this.selectHours.concat();
			this.hoursConfDlg = false;
		},

		afterQueryMember(member) {
			if (member && member.memberId) {
				this.member.memberId = member.memberId;
				this.member.name = member.name;
				this.queryMemberCards();
			} else {
				this.member = {};
			}
		},

		remindBooking() {
			if (!this.query.venueId) {
				$.Msg.error('请先选择场馆');
				return;
			}

			this.reminderVenues = {};
			let reminderCnt = 0;
			let thisHour = new Date().getHours();
			let thisMin = new Date().getMinutes();
			for (let h of this.hours) {
				if (h !== thisHour) continue;

				for (let a of this.venueAreaList) {
					let key = a.vaId + '-' + h + '-1';
					if (this.venueAreaItemMap[a.vaId + '-' + h].firstHalfStatus === 1) {
						let booking = this.venueAreaBookingMap[key];
						let nextBooking = this.venueAreaBookingMap[a.vaId + '-' + h + '-2'];
						if (!nextBooking || nextBooking.uid !== booking.uid) {
							this.reminderVenues[key] = true;
							reminderCnt++;
						}
					}

					key = a.vaId + '-' + h + '-2';
					if (this.venueAreaItemMap[a.vaId + '-' + h].secondHalfStatus === 1 && thisMin >= 30) {
						let booking = this.venueAreaBookingMap[key];
						let nextBooking = this.venueAreaBookingMap[a.vaId + '-' + (h + 1) + '-1'];
						if (!nextBooking || nextBooking.uid !== booking.uid) {
							this.reminderVenues[key] = true;
							reminderCnt++;
						}
					}
				}
			}
			if (reminderCnt) $.Msg.info('有【{0}】个位置将到点结束'.format(reminderCnt));else $.Msg.info('没有到点提醒的位置');
		},

		openNewCheckinDlg() {
			this.member = {};
			this.checkinBookingIds = [];
			this.memberVenueBookingList = null;
			this.bookingCheckinDlg = true;
		},

		afterQueryMemberForCheckin(member) {
			let memberFlag = this.member.flag;
			this.member = {};
			this.checkinBookingIds = [];
			if (member && member.memberId) {
				$.Util.copyAttributes(member, this.member);
				this.member.flag = memberFlag;
				let args = {
					venueId: this.query.venueId,
					beginDate: this.query.bookingDate,
					memberId: member.memberId
				};
				$.Req.service($.SvName.VENUE_AREA_BOOKING_QUERY, args, ret => {
					this.memberVenueBookingList = ret.vabList;
				}, true);
			}
		},

		submitBookingCheckins() {
			if (this.checkinBookingIds.length < 1) {
				$.Msg.error('请选需要签到的预约记录');
				return;
			}

			let args = { memberId: this.member.memberId, vabIdList: this.checkinBookingIds };
			$.Req.service($.SvName.VENUE_AREA_BOOKING_CHECKIN, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.bookingCheckinDlg = false;
				this.queryVenueAreaBooking();
			});
		},

		openVenueAreaScheduleDlg() {
			if (!this.query.venueId) {
				$.Msg.warning('请先选择场馆');
				return;
			}
			this.venueAreaItemConfDlg = true;
		},

		afterSubmitVenueAreaItemConf() {
			this.venueAreaItemConfDlg = false;
			this.reloadData();
		},

		changeBookingDateInBookingDlg(val) {
			if (!val) {
				$.Msg.warning('请输入有效日期');
				return;
			}

			if (this.bookingDlg.bookingBeginDate && this.bookingDlg.bookingEndDate) {
				if (this.bookingDlg.bookingBeginDate.compareDatePart(this.bookingDlg.bookingEndDate) > 0) {
					$.Msg.warning('开始日期不能大于结束日期');
					return;
				}
				let dayCount = $.Util.calcDateDiffDays(this.bookingDlg.bookingEndDate, this.bookingDlg.bookingBeginDate);
				if (dayCount > 180) {
					$.Msg.warning('日期范围不能超过180天');
					return;
				}

				this.bookingDlg.bookingDateList = [];
				this.venueAreaBooking.bookingDateList = [];
				let beginDateTime = this.bookingDlg.bookingBeginDate.getTime();
				for (let d = 0; d <= dayCount; d++) {
					let dateVal = $.Util.formatDate(new Date(beginDateTime + d * 3600 * 1000 * 24));
					this.bookingDlg.bookingDateList.push(dateVal);
					this.venueAreaBooking.bookingDateList.push(dateVal);
				}
			}
		},

		openVenueAreaCancelLogDlg() {
			this.cancelLogDlg = true;
		},

		changeMoreOpts(menu) {
			if (menu == 'vab') this.vabListDlg = true;else if (menu == 'vbCancelLog') this.openVenueAreaCancelLogDlg();else if (menu === 'vaPauseLog') this.vaiPauseLogDlg = true;else if (menu === 'plConf') this.plCardVenueConfDlg = true;else if (menu === 'noticeConf') this.noticeConfDlg = true;else if (menu === 'vabcList') this.bookingCheckinListDlg = true;
		},

		queryShopArgs() {
			let args = { typeIdList: [2066, 2079, 2091] };
			$.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
				for (let t of ret.argList) {
					if (t.typeId == 2066) {
						this.enablePlCardVenueConf = t.typeValue === 'true';
					} else if (t.typeId === 2079) {
						this.enableSmsNoticeForStaffVenueBooking = t.typeValue === '1';
					} else if (t.typeId === 2091) {
						this.enableAiMachVenueArea = t.typeValue === 'true';
					}
				}
			});
		},

		afterCancelBookingList() {
			this.reloadData(false);
		},

		saveNoticeConf() {
			let val = this.enableSmsNoticeForStaffVenueBooking ? '1' : '';
			$.Req.updateShopArg(2079, val);
			this.noticeConfDlg = false;
		}
	}
});

/***/ }),

/***/ 1419:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	components: {},
	data() {
		return {
			g: window.$,
			hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
			venueIdx: null,
			venueList: [],
			venueCheckinConfList: null,
			venueCheckinConfDlg: false,
			venueCheckinConf: {},
			chargeByHourConf: {},
			selectConfId: null
		};
	},

	created() {
		this.queryVenue();
	},

	methods: {
		queryVenue() {
			$.Req.service($.SvName.VENUE_QUERY, {}, (ret, systime) => {
				this.venueList = ret.venueList;
				if (ret.venueList && ret.venueList.length) {
					this.venueIdx = 0;
					this.changeVenue();
				}
			});
		},

		queryVenueCheckinConfList() {
			let args = {
				venueId: this.venueList[this.venueIdx].venueId
			};
			$.Req.service($.SvName.VENUE_CHECKIN_CONF_QUERY, args, ret => {
				this.venueCheckinConfList = ret.venueCheckinConfList;
			}, true);
		},

		changeVenue() {
			this.queryVenueCheckinConfList();
		},

		formatChargeByHourConf(val) {
			if (!val) return '';

			let descArr = [];
			for (let item of val.split(';')) {
				let arr = item.split(':');
				if (arr[0] === '1') {
					let mins = arr[1].split(',');
					descArr.push('{0}~{1}分钟按半小时计费'.format(mins[0], mins[1]));
				} else if (arr[0] === '2') {
					let mins = arr[1].split(',');
					descArr.push('{0}~{1}分钟按一小时计费'.format(mins[0], mins[1]));
				}
			}

			return descArr.join('、');
		},

		openNewVenueCheckinConfDlg() {
			if ($.Util.isEmpty(this.venueIdx)) {
				$.Msg.error('请先选择场馆');
				return;
			}

			this.venueCheckinConf = {
				beginHour: null,
				beginMin: '00',
				endhour: null,
				endMin: '00',
				unitPrice: null,
				unitTimes: 1
			};
			this.chargeByHourConf = {
				fromMin1: null,
				toMin1: null,
				fromMin2: null,
				toMin2: null
			};
			this.selectConfId = null;
			this.venueCheckinConfDlg = true;
		},

		editVenueCheckinConf(conf) {
			this.venueCheckinConf = {};
			$.Util.copyAttributes(conf, this.venueCheckinConf);
			this.venueCheckinConf.beginHour = parseInt(conf.beginTime / 100);
			let min = conf.beginTime % 100;
			this.venueCheckinConf.beginMin = (min > 10 ? '' : '0') + min;
			this.venueCheckinConf.endHour = parseInt(conf.endTime / 100);
			min = conf.endTime % 100;
			this.venueCheckinConf.endMin = (min > 10 ? '' : '0') + min;
			this.showChargeByHoureConf(conf.chargeByHourConf);
			this.selectConfId = conf.confId;

			this.venueCheckinConfDlg = true;
		},

		showChargeByHoureConf(confStr) {
			if (!confStr) return;

			let confs = confStr.split(';');
			for (let c of confs) {
				let items = c.split(':');
				let minArr = items[1].split(',');
				if (items[0] === '1') {
					this.chargeByHourConf.fromMin1 = parseInt(minArr[0]);
					this.chargeByHourConf.toMin1 = parseInt(minArr[1]);
				} else if (items[0] === '2') {
					this.chargeByHourConf.fromMin2 = parseInt(minArr[0]);
					this.chargeByHourConf.toMin2 = parseInt(minArr[1]);
				}
			}
		},

		genChargeByHourConf() {
			let confs = [];
			if (!$.Util.isEmpty(this.chargeByHourConf.fromMin1) && this.chargeByHourConf.toMin1) {
				confs.push('1:{0},{1}'.format(this.chargeByHourConf.fromMin1, this.chargeByHourConf.toMin1));
			}
			if (!$.Util.isEmpty(this.chargeByHourConf.fromMin2) && this.chargeByHourConf.toMin2) {
				confs.push('2:{0},{1}'.format(this.chargeByHourConf.fromMin2, this.chargeByHourConf.toMin2));
			}

			return confs.join(';');
		},

		submit() {
			// check input
			if ($.Util.isEmpty(this.venueCheckinConf.beginHour) || $.Util.isEmpty(this.venueCheckinConf.endHour)) {
				$.Msg.warning('请输入有效的消费时间范围');
				return;
			}
			if (!this.venueCheckinConf.unitPrice || this.venueCheckinConf.unitPrice < 0) {
				$.Msg.warning('请输入有效的消费单价（元）');
				return;
			}
			if (!this.venueCheckinConf.unitTimes || this.venueCheckinConf.unitTimes < 0) {
				$.Msg.warning('请输入有效的消费单价（次）');
				return;
			}

			let args = {
				actionType: this.selectConfId ? 'U' : 'I',
				venueCheckinConf: this.venueCheckinConf
			};
			args.venueCheckinConf.venueId = this.venueList[this.venueIdx].venueId;
			args.venueCheckinConf.beginTime = parseInt(this.venueCheckinConf.beginHour + this.venueCheckinConf.beginMin);
			args.venueCheckinConf.endTime = parseInt(this.venueCheckinConf.endHour + this.venueCheckinConf.endMin);
			args.venueCheckinConf.chargeByHourConf = this.genChargeByHourConf();

			$.Req.service($.SvName.VENUE_CHECKIN_CONF_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryVenueCheckinConfList();
				this.venueCheckinConfDlg = false;
			}, true);
		},

		deleteConf(confId) {
			if (!confirm('您确定要删除该设置吗？')) return;

			let args = { actionType: 'D', deleteId: confId };
			$.Req.service($.SvName.VENUE_CHECKIN_CONF_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryVenueCheckinConfList();
			}, true);
		}
	}
});

/***/ }),

/***/ 1420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_query_input_vue__ = __webpack_require__(1143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_query_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_member_member_query_input_vue__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const INTERVAL_MILSEC = 10000;

/* harmony default export */ __webpack_exports__["default"] = ({
	components: { MemberQueryInput: __WEBPACK_IMPORTED_MODULE_0__pages_member_member_query_input_vue___default.a, MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default.a },
	data() {
		return {
			g: window.$,
			now: new Date(),
			confEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.VENUE_CONF.value),
			query: {
				venueId: null
			},
			venueList: null,
			staffEntryChargeItems: [],
			venueAreaList: null,
			venueAreaCheckinCreateDlg: false,
			selectCheckinMcId: null,
			memberCardList: null,
			viewMemberDlg: false,
			selectMemberId: null,
			hasMemberCardNo: false,
			member: {
				flag: null,
				memberId: null,
				name: null
			},
			venueCardIdList: [],
			selectVaId: null,
			submitLoading: false,
			selectAreaCheckin: null,
			viewVenueAreaCheckinDlg: false,
			checkinBookedMin: 60,
			checkinPreReminderMin: 3,
			voiceReminderMap: {},
			reminderTimesEditable: false,
			altAreaDispaly: false,
			altAreaId: null,
			venueAreaCheckinListDlg: false,
			venueCheckinCount: null,
			venueCheckinList: null,
			checkinBeginDate: new Date(),
			checkinEndDate: new Date(),
			hasSendSmsNotice: null,
			hasSendWxNotice: null,
			venueAreaCheckoutDlg: null,
			selectVa: null,
			exportFileUrl: null,
			exportDlg: null,
			queryPage: null
		};
	},

	created() {
		this.queryStaffEntryChargeItem(() => {
			this.queryVenue();
			setInterval(() => {
				this.updateCheckinDurationHandle();
			}, INTERVAL_MILSEC);
		});
	},

	methods: {
		queryStaffEntryChargeItem(callback) {
			$.Req.service($.SvName.STAFF_ENTRY_CHARGE_ITEM_QUERY, {}, (ret, systime) => {
				this.now = Date.new(systime);
				if (ret.entryChargeItemList) {
					for (let i of ret.entryChargeItemList) {
						this.staffEntryChargeItems.push(i.itemId);
					}
				}
				if (callback) callback();
			});
		},

		updateCheckinDurationHandle() {
			this.now = new Date(this.now.getTime() + INTERVAL_MILSEC);
			if (!this.venueAreaList || this.venueAreaList.length === 0) return;
			for (let i = 0, len = this.venueAreaList.length; i < len; i++) {
				let area = this.venueAreaList[i];
				if (area.status === 2) {
					area.duration = this.now.diffMins(Date.new(area.checkinTime));
				}
			}

			for (let va of this.venueAreaList) {
				if (va.vacId && va.duration === va.reminderMin && va.status !== 0) {
					let key = va.vacId + '-' + va.reminderMin;
					if (!this.voiceReminderMap[key] || this.voiceReminderMap[key] < 3) {
						this.playReminderVoice(va.vacId);
						if (!this.voiceReminderMap[key]) this.voiceReminderMap[key] = 1;else this.voiceReminderMap[key]++;
					}
				}
			}
		},

		queryVenue() {
			$.Req.service($.SvName.VENUE_QUERY, {}, ret => {
				this.venueList = ret.venueList;
			});
		},

		queryVenueAreaList() {
			if (!this.query.venueId) {
				$.Msg.error('请先选择场馆');
				return;
			}
			let args = { venueId: this.query.venueId, areaType: 1 };
			$.Req.service($.SvName.VENUE_AREA_QUERY, args, (ret, systime) => {
				for (let a of ret.venueAreaList) {
					if (a.checkinTime) {
						a.duration = this.now.diffMins(Date.new(a.checkinTime));
					}
				}
				this.venueAreaList = ret.venueAreaList;
			}, true);
		},

		changeVenue(venueId) {
			for (let v of this.venueList) {
				if (v.venueId === venueId) {
					this.venueCardIdList = [];
					for (let cardId of v.cardIds.split(',')) {
						this.venueCardIdList.push(parseInt(cardId));
					}
					break;
				}
			}

			this.queryVenueAreaList();
		},

		reloadData() {
			this.queryVenueAreaList();
			$.Msg.success($.Lang.REFRESH_DONE);
		},

		afterQueryMember(member) {
			if (member && member.memberId) {
				this.member.memberId = member.memberId;
				this.member.name = member.name;
				this.queryMemberCards();
			} else {
				this.member = {};
			}
		},

		clearMember() {
			this.member = {};
			this.memberCardList = null;
		},

		queryMemberCards() {
			if (!this.member.memberId) {
				return;
			}
			let args = {
				memberId: this.member.memberId
			};
			$.Req.service($.SvName.MEMBER_CARD_QUERY, args, (ret, systime) => {
				this.hasMemberCardNo = false;
				for (let mc of ret.memberCardList) {
					mc.canUse = true;
					if (!this.venueCardIdList.contains(mc.cardId) || mc.cardType === 1) {
						mc.canUse = false;
					}
					if (mc.cardType === 2 && mc.currentTimes <= 0) {
						mc.canUse = false;
					} else if (mc.cardType === 3 && mc.currentAmount <= 0) {
						mc.canUse = false;
					}
					if (mc.cardNo && parseInt(this.member.flag) === parseInt(mc.cardNo)) {
						this.hasMemberCardNo = true;
						mc.isFind = true;
					}
				}
				this.memberCardList = ret.memberCardList;
			});
		},

		openVenueAreaCheckinCreateDlg(vaId) {
			this.selectVaId = vaId;
			this.checkinBookedMin = 60;
			this.clearMember();
			this.venueAreaCheckinCreateDlg = true;
		},

		submitCheckin() {
			// check
			if (!this.selectCheckinMcId) {
				$.Msg.error('请选计费会员卡');
				return;
			}
			if (this.checkinPreReminderMin && this.checkinBookedMin && this.checkinPreReminderMin > this.checkinBookedMin) {
				$.Msg.error('提前提醒时间不能超过预定使用时间');
				return;
			}

			this.submitLoading = true;
			let args = {
				vaId: this.selectVaId,
				memberId: this.member.memberId,
				mcId: this.selectCheckinMcId,
				bookedMin: this.checkinBookedMin
			};
			if (this.checkinBookedMin && this.checkinPreReminderMin) {
				args.reminderMin = this.checkinBookedMin - this.checkinPreReminderMin;
			}
			$.Req.service($.SvName.VENUE_AREA_CHECKIN_CREATE, args, ret => {
				$.Dlg.success($.Lang.OPT_SUCCESS);
				this.submitLoading = false;
				this.queryVenueAreaList();
				this.venueAreaCheckinCreateDlg = false;
			}, true, err => {
				this.submitLoading = false;
				$.Dlg.error(err);
			});
		},

		viewMember(memberId) {
			this.selectMemberId = memberId;
			this.viewMemberDlg = true;
		},

		viewAreaCheckin(areaIdx) {
			this.selectAreaCheckin = this.venueAreaList[areaIdx];
			this.viewVenueAreaCheckinDlg = true;
		},

		openVenueAreaCheckoutDlg(va) {
			this.selectVa = va;
			this.venueAreaCheckoutDlg = true;
		},

		checkoutVenueArea() {
			let va = this.selectVa;
			let args = {
				vacId: va.vacId
			};
			//va.duration = new Date().diffMins(Date.new(va.checkinTime));
			let chargeTimes = va.duration;
			if (va.duration >= va.bookedMin) {
				args.checkoutTime = new Date(Date.new(va.checkinTime).getTime() + va.bookedMin * 60 * 1000);
				chargeTimes = va.bookedMin;
			}

			$.Req.service($.SvName.VENUE_AREA_CHECKOUT, args, (ret, systime) => {
				let mc = ret.memberCard,
				    unitName = $.Dict.CardUnitName[mc.cardType];
				let msg = '{0}签出成功！<p>本次入场计费时长 {1} 分钟</p><p>消费会员卡【{2}】 <b>{3}</b> {4}</p><p>会员卡剩余 <b>{5}</b> {4}</p>'.format(va.checkinMemberName, chargeTimes, va.checkinCardName, ret.cardPayment, unitName, mc.cardType === 2 ? mc.currentTimes : mc.currentAmount);
				$.Dlg.success(msg, null, false);
				this.queryVenueAreaList();
				this.venueAreaCheckoutDlg = false;
				if (this.hasSendSmsNotice || this.hasSendWxNotice) {
					this.sendNotice(args.vacId, this.hasSendSmsNotice, this.hasSendWxNotice, false);
				}
			});
		},

		continueTiming(idx) {
			let altMin = prompt('请输入继续追加多少分钟的预定时间：');
			altMin = parseInt(altMin);

			if (!altMin || altMin <= 0) {
				$.Msg.warning('未输入有效的分钟数');
				return;
			}

			this.venueAreaList[idx].bookedMin += altMin;
			this.venueAreaList[idx].reminderMin += altMin;

			let args = {
				vacId: this.venueAreaList[idx].vacId,
				bookedMin: this.venueAreaList[idx].bookedMin,
				reminderMin: this.venueAreaList[idx].reminderMin
			};
			$.Req.service($.SvName.VENUE_AREA_CHECKIN_REMINDER_UPDATE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
			}, true);
		},

		playReminderVoice(vacId) {
			$.Req.service($.SvName.VENUE_AREA_CHECKIN_REMINDER_VOICE_FILE_GET, { vacId: vacId }, r => {
				if (r.voiceFile) {
					let audio = new Audio(r.voiceFile);
					audio.play();
				}
			}, false);
		},

		selectNewArea(vaId) {
			this.altAreaId = vaId;
		},

		submitAltArea() {
			let args = {
				vacId: this.selectAreaCheckin.vacId,
				newVaId: this.altAreaId
			};
			$.Req.service($.SvName.VENUE_AREA_IN_CHECKIN_ALT, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.viewVenueAreaCheckinDlg = false;
				this.queryVenueAreaList();
			}, true);
		},

		cancelCheckin(vacId) {
			if (!confirm('您确实取消该会员的签到吗？')) {
				return;
			}
			let args = { vacId: vacId };
			$.Req.service($.SvName.VENUE_AREA_CHECKIN_DELETE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.viewVenueAreaCheckinDlg = false;
				this.queryVenueAreaList();
			}, true);
		},

		openVenueCheckinDlg() {
			this.venueAreaCheckinListDlg = true;
			this.queryVenueCheckin();
		},

		queryVenueCheckin(page = null, isExport = null) {
			if (!this.checkinBeginDate || !this.checkinEndDate) {
				$.Msg.error('请输入有效的查询日期范围');
				return;
			}

			if (!page) this.venueCheckinCount = null;
			let args = {
				venueId: this.query.venueId,
				beginDate: this.checkinBeginDate,
				endDate: this.checkinEndDate,
				page: page
			};
			if (isExport) {
				args.isExport = true;
				this.exportFileUrl = null;
				this.exportDlg = true;
			}
			this.queryPage = page;
			$.Req.service($.SvName.VENUE_AREA_CHECKIN_QUERY, args, ret => {
				if (isExport) {
					this.exportFileUrl = ret.fileurl;
					return;
				}
				this.venueCheckinList = ret.vacList;
				if (!page) {
					this.venueCheckinCount = ret.count;
				}
				window.scrollTo(0, 0);
			}, true);
		},

		sendNotice(vacId, hasSendSms, hasSendWx, hasTips = true) {
			let args = {
				vacId: vacId,
				hasSendSms: hasSendSms,
				hasSendWx: hasSendWx
			};
			$.Req.service($.SvName.VENUE_AREA_CHECKOUT_NOTICE_SEND, args, ret => {
				if (hasTips) {
					$.Dlg.success($.Lang.OPT_SUCCESS);
				}
			}, true);
		},

		reload() {
			window.location.reload();
		},

		exportToXls() {
			this.queryVenueCheckin(this.queryPage, true);
		}
	}
});

/***/ }),

/***/ 1421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_help_vue__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_help_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ai_mach_venue_area_conf__ = __webpack_require__(2211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ai_mach_venue_area_conf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ai_mach_venue_area_conf__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { AiMachVenueAreaConf: __WEBPACK_IMPORTED_MODULE_1__ai_mach_venue_area_conf___default.a, Help: __WEBPACK_IMPORTED_MODULE_0__components_help_vue___default.a },
	data() {
		return {
			g: window.$,
			venueList: null,
			venueAreaList: null,
			entryChargeItemList: [],
			cardList: [],
			itemMap: {},
			cardMap: {},
			venueVacations: [],
			givenWorkdays: [],
			venue: {
				venueName: null,
				cardIdArr: [],
				cancelDisabledCardIdArr: [],
				itemId: null,
				vacations: [],
				vacationChargeType: 1,
				weekendChargeType: 0,
				bizTimeList: [],
				contBookingTimeList: [],
				bookingCancelType: 0
			},
			venueBizTimeList: [],
			venueContBookingTimeList: [],
			copyVenueId: null,
			venueArea: {
				vaId: null,
				areaName: null
			},
			venueDlg: false,
			query: {
				venueId: null
			},
			venueAreaListDlg: false,
			areaNames: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
			venueAreaDlg: false,
			hasCopyVenueConf: false,
			hours: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
			bookingOpenTimeArr: [],
			bookingCancelConfList: [[null, null], [null, null], [null, null], [null, null], [null, null]],
			contBookingTimes: [[null, null, null, null], [null, null, null, null], [null, null, null, null]],
			enableAiMachVenueArea: null,
			aiMachVenueAreaListDlg: null
		};
	},

	created() {
		$.Req.service($.SvName.CARD_QUERY, { status: 0 }, ret => {
			this.cardList = ret.cardList;
			for (let c of ret.cardList) {
				this.cardMap[c.cardId] = c;
			}
			this.queryShopArgs();
			this.queryEntryChargeItem(() => {
				this.queryVenue();
			});
		});
	},

	methods: {
		initBookingCancelConfList() {
			this.bookingCancelConfList = [[null, null], [null, null], [null, null], [null, null], [null, null]];
		},

		queryShopArgs(callbck = null) {
			let args = {
				typeIdList: [2091]
			};
			$.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
				if ($.Util.hasRoleFunc($.Dict.RoleFunc.MEMBER_AGENT.value)) {
					for (let t of ret.argList) {
						if (t.typeId === 2091) {
							this.enableAiMachVenueArea = t.typeValue === 'true';
						}
					}
					if (callbck) callbck();
				}
			});
		},

		queryEntryChargeItem(callback) {
			$.Req.service($.SvName.ENTRY_CHARGE_ITEM_QUERY, {}, ret => {
				this.entryChargeItemList = ret.entryChargeItemList;
				for (let item of this.entryChargeItemList) {
					this.itemMap[item.itemId] = item;
				}

				if (callback) callback();
			});
		},

		queryVenue() {
			$.Req.service($.SvName.VENUE_QUERY, {}, ret => {
				for (let v of ret.venueList) {
					let cardIdArr = v.cardIds.split(',');
					let cardNames = [];
					for (let cardId of cardIdArr) {
						if (this.cardMap[parseInt(cardId)]) {
							cardNames.push(this.cardMap[parseInt(cardId)].cardName);
						}
					}
					v.cardNames = cardNames.join('、');
				}
				this.venueList = ret.venueList;
			});
		},

		openNewVenueDlg() {
			if (this.entryChargeItemList && this.entryChargeItemList.length === 0) {
				alert('请先设置“计费项目”。 （设置 > 入场签到 > 入场签到计费 > 计费项目设置）');
				this.$router.push('/entry-checkin-conf');
				return;
			}

			this.hasCopyVenueConf = false;
			this.venue = {
				venueId: null,
				venueName: null,
				cardIdArr: [],
				itemId: null,
				vacationChargeType: 1,
				weekendChargeType: 0,
				bookingCancelType: 0
			};
			this.venueVacations = [];
			this.initBookingCancelConfList();
			this.venueDlg = true;
		},

		saveVenue() {
			this.venue.contBookingTimes = this.genVenueContBookingTimeList();
			let args = {
				actionType: this.venue.venueId ? 'U' : 'I',
				venue: this.venue
			};
			args.venue.bizTimeList = this.venueBizTimeList;

			// check
			if (!this.venue.venueName) {
				$.Msg.error('请输入场馆名称');
				return;
			}
			if (!this.venue.itemId) {
				$.Msg.error('请选择计费项目');
				return;
			}
			if (this.hasCopyVenueConf) {
				if (!this.copyVenueId) {
					$.Msg.error('请选择要复制的场馆');
					return;
				}
				args.copyVenueId = this.copyVenueId;
			} else {
				if (!this.venue.cardIdArr || this.venue.cardIdArr.length === 0) {
					$.Msg.error('请选择计费会员卡');
					return;
				}
				let venuVacationArr = [];
				for (let v of this.venueVacations) {
					venuVacationArr.push($.Util.formatDate(v[0]) + ',' + $.Util.formatDate(v[1]));
				}
				this.venue.vacations = venuVacationArr.join(';');
				if (this.venue.vacations && $.Util.isEmpty(this.venue.vacationChargeType)) {
					$.Msg.error('请选择节假日计费方式');
					return;
				}
			}

			if (this.bookingOpenTimeArr && this.bookingOpenTimeArr.length === 2 && this.bookingOpenTimeArr[0] && this.bookingOpenTimeArr[1]) {
				args.venue.bookingOpenTimes = '{0}-{1}'.format($.Util.getTimeNum(this.bookingOpenTimeArr[0]), $.Util.getTimeNum(this.bookingOpenTimeArr[1]));
			} else {
				args.venue.bookingOpenTimes = null;
			}

			args.venue.cardIds = this.venue.cardIdArr.join(',');
			if (!$.Util.isEmptyArray(this.venue.cancelDisabledCardIdArr)) {
				args.venue.cancelDisabledCards = this.venue.cancelDisabledCardIdArr.join(',');
			} else {
				args.venue.cancelDisabledCards = null;
			}
			let givenWorkdaysArr = [];
			for (let v of this.givenWorkdays) {
				givenWorkdaysArr.push($.Util.formatDate(v));
			}
			args.venue.givenWorkdays = givenWorkdaysArr.join(',');
			if (this.venue.bookingCancelType === 1) {
				let booingCancelConfArr = [];
				for (let c of this.bookingCancelConfList) {
					if (c[0] && c[1]) {
						booingCancelConfArr.push(c[0] + ',' + c[1]);
					}
				}
				this.venue.bookingCancelConf = booingCancelConfArr.join(';');
			}

			$.Req.service($.SvName.VENUE_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryVenue();
				this.venueDlg = false;
			}, true);
		},

		genVenueContBookingTimeList() {
			let contBookingTimeList = [];
			for (let t of this.contBookingTimes) {
				if (!t[0] || $.Util.isEmpty(t[1]) || !t[2] || $.Util.isEmpty(t[3])) {
					continue;
				}
				let bginTimeNum = t[0] * 100 + parseInt(t[1]);
				let endTimeNum = t[2] * 100 + parseInt(t[3]);
				let times = [];

				let beginDateTime = Date.new('2021-01-01 ' + $.Util.formatTime(bginTimeNum));
				let endDateTime = Date.new('2021-01-01 ' + $.Util.formatTime(endTimeNum));
				for (let b = beginDateTime; $.Util.formatDateTime(b) <= $.Util.formatDateTime(endDateTime);) {
					times.push(parseInt(b.format('hhmm')));
					b = new Date(b.getTime() + 1000 * 60 * 30);
				}
				contBookingTimeList.push(times.join(','));
			}

			return contBookingTimeList.join(';');
		},

		openEditVenueDlg(v) {
			this.venue = {
				bookingCancelType: 0
			};
			this.givenWorkdays = [];
			if (v.givenWorkdays) {
				for (let d of v.givenWorkdays.split(',')) {
					this.givenWorkdays.push(Date.new(d));
				}
			}

			this.venueVacations = [];
			if (v.vacations) {
				for (let r of v.vacations.split(';')) {
					let dates = r.split(',');
					this.venueVacations.push([Date.new(dates[0]), Date.new(dates[1])]);
				}
			}
			this.hasCopyVenueConf = false;
			$.Util.copyAttributes(v, this.venue);

			// fill bookingCancelConfList
			this.initBookingCancelConfList();
			if (v.bookingCancelConf) {
				let booingCancelConfArr = v.bookingCancelConf.split(';');
				for (let i = 0, len = booingCancelConfArr.length; i < len; i++) {
					let items = booingCancelConfArr[i].split(',');
					this.bookingCancelConfList[i] = [parseInt(items[0]), parseInt(items[1])];
				}
			}

			this.venue.cardIdArr = [];
			for (let cardId of this.venue.cardIds.split(',')) {
				this.venue.cardIdArr.push(parseInt(cardId));
			}
			this.venue.cancelDisabledCardIdArr = [];
			if (this.venue.cancelDisabledCards) {
				for (let cardId of this.venue.cancelDisabledCards.split(',')) {
					this.venue.cancelDisabledCardIdArr.push(parseInt(cardId));
				}
			}
			this.venueBizTimeList = [];
			if (v.bizTimes) {
				for (let time of v.bizTimes.split(',')) {
					this.venueBizTimeList.push(parseInt(time));
				}
			}
			this.venueContBookingTimeList = [];
			if (v.contBookingTimes) {
				for (let time of v.contBookingTimes.split(/[,;]/)) {
					this.venueContBookingTimeList.push(parseInt(time));
				}
				this.contBookingTimes = [];
				for (let item of v.contBookingTimes.split(';')) {
					let arr = item.split(',');
					let beginTimes = parseInt(arr[0]);
					let endTimes = parseInt(arr[arr.length - 1]);
					this.contBookingTimes.push([parseInt(beginTimes / 100), beginTimes % 100, parseInt(endTimes / 100), endTimes % 100]);
				}
			}
			if (v.bookingOpenTimes) {
				let times = v.bookingOpenTimes.split('-');
				this.bookingOpenTimeArr = [$.Util.formatTime(times[0]) + ':00', $.Util.formatTime(times[1]) + ':00'];
			} else {
				this.bookingOpenTimeArr = [];
			}
			this.venueDlg = true;
		},

		deleteVenue(venueId) {
			if (!confirm('确定删除该场馆吗？')) {
				return;
			}

			let args = { actionType: 'D', deleteId: venueId };
			$.Req.service($.SvName.VENUE_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryVenue();
			}, true);
		},

		openNewAreaDlg() {
			if (!this.query.venueId) {
				$.Dlg.warning('请先选择场馆，然后才能添加场馆内的场地。');
				return;
			}
			this.areaNames = new Array(12);
			this.venueAreaListDlg = true;
		},

		queryVenueArea() {
			if (!this.query.venueId) return;

			let args = { venueId: this.query.venueId };
			$.Req.service($.SvName.VENUE_AREA_QUERY, args, ret => {
				this.venueAreaList = ret.venueAreaList;
			}, true);
		},

		createVenueAreaList() {
			let args = {
				venueId: this.query.venueId,
				areaNameList: this.areaNames
			};
			$.Req.service($.SvName.VENUE_AREA_LIST_CREATE, args, ret => {
				this.venueAreaListDlg = false;
				this.queryVenueArea();
			}, true);
		},

		updateVenueAreaStatus(area, status) {
			if (status === 1) {
				if (!confirm('确定要停用场地【{0}】吗？ 停用后该场地的所有时间段都不可预订了。'.format(area.areaName))) {
					return;
				}
			}

			area.status = status;
			let args = {
				actionType: 'U',
				venueArea: area
			};
			$.Req.service($.SvName.VENUE_AREA_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
			}, true);
		},

		deleteVenueArea(area) {
			if (!confirm('确定要删除场地【{0}】吗？ 删除后该场地的所有时间段都不可预订了。'.format(area.areaName))) {
				return;
			}
			let args = {
				actionType: 'D', deleteId: area.vaId
			};
			$.Req.service($.SvName.VENUE_AREA_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryVenueArea();
			}, true);
		},

		openEditVenueAreaDlg(area) {
			$.Util.copyAttributes(area, this.venueArea);
			this.venueAreaDlg = true;
		},

		updateVenueArea() {
			if (!this.venueArea.areaName) {
				$.Msg.error('请输入场地名称');
				return;
			}

			let args = {
				actionType: 'U', venueArea: this.venueArea
			};
			$.Req.service($.SvName.VENUE_AREA_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryVenueArea();
				this.venueAreaDlg = false;
			}, true);
		},

		addVacationInput() {
			this.venueVacations.push('');
		},

		delVacation(idx) {
			this.venueVacations.splice(idx, 1);
		},

		addWorkdayInput() {
			this.givenWorkdays.push('');
		},

		delWorkday(idx) {
			this.givenWorkdays.splice(idx, 1);
		},

		appendContBookintTimes() {
			this.contBookingTimes.push([null, null, null, null]);
		},

		clearContBookintTimes(idx) {
			let t = this.contBookingTimes[idx];
			t = [null, null, null, null];
			this.$set(this.contBookingTimes, idx, t);
		},

		openAiMachVenueAreaListDlg() {
			if (this.query.venueId) {
				this.aiMachVenueAreaListDlg = true;
			} else {
				$.Msg.error('请先选择场馆');
			}
		}

	}
});

/***/ }),

/***/ 1613:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".num-in[data-v-2a9a98e4],.sel[data-v-2a9a98e4]{width:80px;text-align:center}.spt1[data-v-2a9a98e4]{padding:0 10px}.spt2[data-v-2a9a98e4]{padding:0 5px;font-weight:700}.charge-by-hour-conf[data-v-2a9a98e4]{margin-top:15px;border:1px dashed #ddd;padding:10px}.charge-by-hour-conf ul[data-v-2a9a98e4]{padding-top:5px}.charge-by-hour-conf li[data-v-2a9a98e4]{display:block;padding:5px 0}.charge-by-hour-conf li .input-s[data-v-2a9a98e4]{width:80px;margin:0 5px;text-align:center}", ""]);

// exports


/***/ }),

/***/ 1618:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".booking-conf[data-v-2ca6462d]{width:860px}.booking-conf th[data-v-2ca6462d]{width:80px;min-width:80px;padding-top:6px}.booking-conf td[data-v-2ca6462d]{padding:6px 0 6px 15px}.booking-conf .input-s[data-v-2ca6462d]{width:80px}.booking-conf label[data-v-2ca6462d]{padding:5px}.booking-conf .datepick[data-v-2ca6462d]{display:inline-block;width:130px}.booking-conf .tips[data-v-2ca6462d]{padding-left:5px;color:#aaa}.booking-conf .box[data-v-2ca6462d]{border:1px solid #d7dde4;padding:5px}.booking-conf .input[data-v-2ca6462d]{text-align:center}.booking-conf .sel[data-v-2ca6462d]{font-size:12px;padding:0 2px;word-break:keep-all}.form-submit[data-v-2ca6462d]{padding-left:95px}.date-range[data-v-2ca6462d]{border-bottom:1px dotted #d5d5d5;padding-bottom:8px;margin-bottom:8px}.weeks[data-v-2ca6462d]{padding:7px 0 7px 5px;border:1px solid #dddee1;margin-left:10px;position:relative;top:2px}.weeks label[data-v-2ca6462d]{padding:3px}", ""]);

// exports


/***/ }),

/***/ 1653:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".qrcode[data-v-3f812896]{border:1px solid #eee;margin-top:5px}", ""]);

// exports


/***/ }),

/***/ 1670:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".tips[data-v-498d2024]{color:orange;padding:10px 0 5px}.new-area-list[data-v-498d2024]{margin:10px 0}.new-area-list li[data-v-498d2024]{display:inline-block;margin:5px}.new-area-list .input[data-v-498d2024]{width:100px}.area-list li[data-v-498d2024]{display:inline-block;border:1px solid #ddd;box-shadow:3px 3px 5px #ddd;margin:10px;padding:0 10px;width:150px;text-align:center}.area-list li .name[data-v-498d2024]{text-align:center;font-size:18px;font-weight:700;padding:20px 0}.area-list li.ban[data-v-498d2024]{background:#f7f7f7;border-color:#bbb}.area-list li .area-type[data-v-498d2024]{padding:8px 0;color:#777;border-bottom:1px solid #eee;font-size:12px}.area-list li .area-type i[data-v-498d2024]{padding-right:5px;font-size:16px;position:relative;top:2px}.area-list li .ban-tips[data-v-498d2024]{font-size:12px;font-weight:400;color:red;margin-left:3px;position:relative;top:-2px}.area-list li.area-type-0[data-v-498d2024]{border-color:orange}.area-list li.area-type-1[data-v-498d2024]{border-color:#12c9af}.area-list .opt[data-v-498d2024]{border-top:1px solid #eee;padding:5px 0}.area-list .opt a[data-v-498d2024]{color:#bbb;padding:4px 10px}.area-list .opt a i[data-v-498d2024]{font-size:14px}.area-list .opt a[data-v-498d2024]:hover{color:#2995d8;background:#eee}.input-s[data-v-498d2024]{width:150px}.input-ss[data-v-498d2024]{width:60px;margin:0 10px;border-top:0;border-left:0;border-right:0;text-align:center;font-weight:700;outline:none;font-size:13px}.vacations[data-v-498d2024]{padding-bottom:5px}.add-vacation[data-v-498d2024],.vacations li.item[data-v-498d2024]{margin-bottom:10px}.bookings-conf td[data-v-498d2024],.bookings-conf th[data-v-498d2024]{padding-top:6px}.checkins label[data-v-498d2024]{padding:5px}.box[data-v-498d2024]{border:1px solid #d7dde4;padding:5px}.cancel-conf[data-v-498d2024]{margin-top:10px}.cancel-conf li[data-v-498d2024]{list-style-type:disc;padding:3px 0;margin-left:15px}.cont-bk-times[data-v-498d2024]{padding:5px 0}.cont-bk-times .sel[data-v-498d2024],.cont-bk-times input[data-v-498d2024]{width:60px;text-align:center}.cont-bk-times b[data-v-498d2024]{padding:0 3px}", ""]);

// exports


/***/ }),

/***/ 1738:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".query li.item[data-v-6da3c25a]{display:inline;margin-right:5px}.areas li[data-v-6da3c25a]{display:inline-block;width:205px;border:1px solid #ddd;box-shadow:5px 5px 8px #ddd;margin:10px;text-align:center;border-radius:4px}.areas li .vname[data-v-6da3c25a]{text-align:center;border-bottom:1px solid #ddd;background:#f2f2f2;line-height:40px;font-size:17px;font-weight:700;border-top-left-radius:4px;border-top-right-radius:4px}.areas li .cont[data-v-6da3c25a]{height:122px;margin:12px 0}.areas li .cont .idle[data-v-6da3c25a]{line-height:122px;color:#999;font-style:italic}.areas li .cont .mname[data-v-6da3c25a]{font-size:13px;padding:6px 0 8px}.areas li .cont .duration[data-v-6da3c25a]{color:#aaa;font-size:12px}.areas li .cont .duration b[data-v-6da3c25a]{font-size:14px;padding:0 5px;color:#444}.areas li .cont .photo[data-v-6da3c25a]{padding-top:2px}.areas li .cont .photo img[data-v-6da3c25a]{display:inline-block;width:60px;height:60px;border-radius:50%;cursor:pointer}.areas li .cont .timeout[data-v-6da3c25a]{padding-top:2px;color:#ff4500}.areas li .opt[data-v-6da3c25a]{line-height:30px;color:#fff;border-top:1px solid #ddd}.areas li .opt a[data-v-6da3c25a]{display:block;margin:10px;color:#fff;border-radius:3px}.areas li .opt a i[data-v-6da3c25a]{font-size:13px}.areas li .opt-checkin[data-v-6da3c25a]{background:#2e90f7}.areas li .opt-checkin i[data-v-6da3c25a]{padding-right:5px}.areas li .opt-checkin[data-v-6da3c25a]:hover{background:#0586e0}.areas li .opt-checkout[data-v-6da3c25a]{background:#0fa036}.areas li .opt-checkout i[data-v-6da3c25a]{padding-left:5px}.areas li .opt-checkout[data-v-6da3c25a]:hover{background:#0d9531}.checkin-form .box[data-v-6da3c25a]{border:1px solid #d7dde4;padding:8px 5px 5px 8px}.checkin-form .num-input[data-v-6da3c25a]{width:80px;text-align:center;font-size:13px;font-weight:700;margin-right:5px}.checkin-form .tips[data-v-6da3c25a]{color:#999}.checkin-form .tips[data-v-6da3c25a]:hover{color:red}.checkin-form .form-submit[data-v-6da3c25a]{margin:-10px 0 0 -20px}.notice[data-v-6da3c25a]{animation:change-data-v-6da3c25a 2s ease-in infinite;color:#ff4500}@keyframes change-data-v-6da3c25a{0%{text-shadow:0 0 4px #fc6450}50%{text-shadow:0 0 30px #ff0;color:#fa550a}to{text-shadow:0 0 4px #fc6450}}.area-notices[data-v-6da3c25a]{bottom:0;right:0;text-align:center;position:fixed;width:100%;z-index:999;opacity:.8;background:#999}.area-notices .notice[data-v-6da3c25a]{margin:0 10px;font-size:40px;padding:10px 20px}.alt-area[data-v-6da3c25a]{padding-left:40px}.alt-area button[data-v-6da3c25a]{height:24px}.alg-area-opt[data-v-6da3c25a]{margin:10px 0;padding:12px;width:400px;border:1px solid #eee}.alg-area-opt ul[data-v-6da3c25a]{padding:8px;margin:10px 0;background:#eee}.alg-area-opt li[data-v-6da3c25a]{display:inline-block;background:#fff;padding:5px 10px;margin:3px 5px;cursor:pointer}.alg-area-opt li[data-v-6da3c25a]:hover{color:red}.alg-area-opt li.on[data-v-6da3c25a]{background:orange;color:#fff}.query-date[data-v-6da3c25a]{width:130px}", ""]);

// exports


/***/ }),

/***/ 1747:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".date[data-v-71848a64]{width:140px}", ""]);

// exports


/***/ }),

/***/ 1758:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".date[data-v-79bbb2d3]{width:140px}", ""]);

// exports


/***/ }),

/***/ 1805:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".areas span[data-v-bf982e82]:after{content:\"\\3001\"}.areas span[data-v-bf982e82]:last-child:after{content:\"\"}.card-list[data-v-bf982e82]{margin-top:15px}.card-list label[data-v-bf982e82]{padding:4px}.card-list p[data-v-bf982e82]{font-weight:700;border-top:1px dotted #ddd;padding:10px 0 0}", ""]);

// exports


/***/ }),

/***/ 1806:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".member-query-box[data-v-c1533b98]{text-align:left;height:30px;line-height:30px;width:150px;border:1px solid #eee;padding:0 8px;cursor:pointer}.member-query-box .r:hover i[data-v-c1533b98]{color:red;cursor:pointer}", ""]);

// exports


/***/ }),

/***/ 1819:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".date[data-v-e84716f0]{width:140px}.input[data-v-e84716f0]{position:relative;top:2px}", ""]);

// exports


/***/ }),

/***/ 1820:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".booking-grid tr[data-v-eb4b3e02]:hover{background:none}.booking-grid td[data-v-eb4b3e02]{padding:0 5px}.booking-grid .user[data-v-eb4b3e02]{padding-top:4px;white-space:nowrap;overflow:hidden;text-align:center}.booking .bk[data-v-eb4b3e02]{padding:0 3px;cursor:pointer;margin:5px 0;text-align:center}.booking .break-line[data-v-eb4b3e02]{font-size:0;border-bottom:1px dashed #e4e4e4;height:1px}.booking .hour[data-v-eb4b3e02]{color:#666}.booking .price[data-v-eb4b3e02]{color:#bbb;font-size:11px}.booking .stat-1[data-v-eb4b3e02]{text-align:center;min-height:50px;line-height:50px}.booking .stat-1[data-v-eb4b3e02]:hover{background:#eee}.booking .iconfont[data-v-eb4b3e02]{font-size:14px}.booking .stat-2[data-v-eb4b3e02]{background:#3ecb98;color:#fff;min-height:50px;padding-top:5px}.booking .stat-booking[data-v-eb4b3e02]{background:#76b7f5;color:#fff;min-height:50px;padding-top:5px}.booking .stat-checkin[data-v-eb4b3e02]{background:#3ecb98;color:#fff;min-height:50px;padding-top:5px}.booking .stat-3[data-v-eb4b3e02]{background:#e0e0e0;min-height:50px;line-height:50px;text-align:center}.booking .stat-4[data-v-eb4b3e02]{animation:change-data-v-eb4b3e02 2s ease-in infinite;color:#ff4500}@keyframes change-data-v-eb4b3e02{0%{text-shadow:0 0 4px #fc6450}50%{text-shadow:0 0 30px #ff0;color:#ff0}to{text-shadow:0 0 4px #fc6450}}.booking-flags li[data-v-eb4b3e02]{display:inline-block;margin-left:15px}.booking-flags .stat-1[data-v-eb4b3e02]{display:inline;padding:0 6px;border:1px solid #d2d2d2;margin-right:3px}.booking-flags .stat-booking[data-v-eb4b3e02]{display:inline;padding:0 6px;background:#76b7f5;margin-right:3px}.booking-flags .stat-checkin[data-v-eb4b3e02]{display:inline;padding:0 6px;background:#3ecb98;margin-right:3px}.booking-flags .stat-3[data-v-eb4b3e02]{display:inline;padding:0 6px;background:#ccc;margin-right:3px}.booking-conf th[data-v-eb4b3e02]{width:80px;min-width:80px;padding-top:6px}.booking-conf td[data-v-eb4b3e02]{padding:6px 0 6px 15px}.booking-conf .input-s[data-v-eb4b3e02]{width:80px}.booking-conf label[data-v-eb4b3e02]{padding:5px}.booking-conf .datepick[data-v-eb4b3e02]{display:inline-block;width:130px}.booking-conf .tips[data-v-eb4b3e02]{padding-left:5px;color:#aaa}.booking-conf .box[data-v-eb4b3e02]{border:1px solid #d7dde4;padding:8px 5px 5px 8px}.booking-conf .input[data-v-eb4b3e02]{text-align:center}.booking-conf .sel[data-v-eb4b3e02]{font-size:12px;padding:0 2px;word-break:keep-all}.memb-input-box[data-v-eb4b3e02]{width:150px;cursor:pointer;border:1px solid #d7dde4;height:33px;line-height:33px;padding:0 10px;border-radius:2px;display:inline-block}.hours-conf label[data-v-eb4b3e02]{display:inline-block;width:60px;padding:8px 0}.query li.item[data-v-eb4b3e02]{display:inline;margin-right:5px}.member-query-checkin[data-v-eb4b3e02]{background:#f5f5f5;padding:5px}.bookings-ckin[data-v-eb4b3e02]{margin-top:20px}.bookings-ckin label[data-v-eb4b3e02]{font-size:13px;display:block;padding:10px;background:#f5f5f5;margin:10px 0}.bookings-ckin .ivu-checkbox[data-v-eb4b3e02]{margin-right:5px}.bookings-ckin .hd .tit[data-v-eb4b3e02]{color:#aaa}.bookings-ckin .member .photo[data-v-eb4b3e02]{height:100px;line-height:100px;width:100px;border-radius:50%}.input-box[data-v-eb4b3e02]{margin-right:18px;position:relative;top:2px;padding-left:15px}.datelist[data-v-eb4b3e02]{padding:10px;border:1px solid #ddd;margin-top:10px}", ""]);

// exports


/***/ }),

/***/ 1914:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1613);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("236acdaa", content, true, {});

/***/ }),

/***/ 1919:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1618);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("641dd017", content, true, {});

/***/ }),

/***/ 1954:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1653);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("5b6bef50", content, true, {});

/***/ }),

/***/ 1971:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1670);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("3a59e93e", content, true, {});

/***/ }),

/***/ 2039:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1738);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("b8732b14", content, true, {});

/***/ }),

/***/ 2048:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1747);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("2ef50434", content, true, {});

/***/ }),

/***/ 2059:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1758);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("79c87210", content, true, {});

/***/ }),

/***/ 2106:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1805);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("19766fa1", content, true, {});

/***/ }),

/***/ 2107:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1806);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("446d8817", content, true, {});

/***/ }),

/***/ 2120:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1819);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("68aeb24c", content, true, {});

/***/ }),

/***/ 2121:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1820);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("8d7acd1c", content, true, {});

/***/ }),

/***/ 2211:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1954)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1385),
  /* template */
  __webpack_require__(2366),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3f812896",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2215:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2106)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1389),
  /* template */
  __webpack_require__(2520),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-bf982e82",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2216:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2120)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1390),
  /* template */
  __webpack_require__(2535),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-e84716f0",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2217:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2059)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1391),
  /* template */
  __webpack_require__(2471),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-79bbb2d3",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2218:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1919)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1392),
  /* template */
  __webpack_require__(2331),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2ca6462d",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2219:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2048)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1393),
  /* template */
  __webpack_require__(2460),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-71848a64",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2220:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2107)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1394),
  /* template */
  __webpack_require__(2521),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-c1533b98",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2326:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "more-tools"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "more-tools",
      "page": "venue-checkin"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("场地计时计费设置")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('i-select', {
    staticStyle: {
      "width": "180px"
    },
    attrs: {
      "placeholder": "请选择场馆"
    },
    on: {
      "on-change": _vm.changeVenue
    },
    model: {
      value: (_vm.venueIdx),
      callback: function($$v) {
        _vm.venueIdx = _vm._n($$v)
      },
      expression: "venueIdx"
    }
  }, _vm._l((_vm.venueList), function(v, idx) {
    return _c('i-option', {
      key: v.venueId,
      attrs: {
        "value": idx,
        "label": v.venueName
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(v.venueName) + "\n\t\t\t\t\t\t")])
  }), 1), _vm._v("\n\t\t\t\t\t \n\t\t\t\t\t"), (_vm.venueList.length) ? _c('i-button', {
    attrs: {
      "icon": "md-add"
    },
    on: {
      "click": _vm.openNewVenueCheckinConfDlg
    }
  }, [_vm._v("添加设置")]) : _vm._e(), _vm._v("\n\t\t\t\t\t \n\t\t\t\t\t"), _c('a', {
    staticClass: "l10",
    on: {
      "click": function($event) {
        return _vm.$router.push('/venue-conf')
      }
    }
  }, [_vm._v("场馆与场地设置 →")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.venueCheckinConfList), function(c) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(_vm.g.Util.formatTime(c.beginTime)) + " ~ " + _vm._s(_vm.g.Util.formatTime(c.endTime)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.unitPrice) + " 元/小时")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.unitTimes) + " 次/小时")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatChargeByHourConf(c.chargeByHourConf)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.updateTime))]), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.editVenueCheckinConf(c)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.deleteConf(c.confId)
        }
      }
    }, [_vm._v("删除")])])])])])
  })], 2)]), _vm._v(" "), (_vm.venueList.length && _vm.venueCheckinConfList && _vm.venueCheckinConfList.length === 0) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n\t\t\t\t暂无数据\n\t\t\t")]) : _vm._e()])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "场地计费设置",
      "width": "800",
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.venueCheckinConfDlg),
      callback: function($$v) {
        _vm.venueCheckinConfDlg = $$v
      },
      expression: "venueCheckinConfDlg"
    }
  }, [_c('div', {
    staticClass: "tblform checkin-conf"
  }, [_c('table', {
    attrs: {
      "width": "90%"
    }
  }, [_c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("消费时间范围")]), _vm._v(" "), _c('td', [_c('i-select', {
    staticClass: "sel",
    attrs: {
      "placeholder": "小时"
    },
    model: {
      value: (_vm.venueCheckinConf.beginHour),
      callback: function($$v) {
        _vm.$set(_vm.venueCheckinConf, "beginHour", $$v)
      },
      expression: "venueCheckinConf.beginHour"
    }
  }, _vm._l((_vm.hours), function(h) {
    return _c('i-option', {
      key: '0-' + h,
      attrs: {
        "value": h
      }
    }, [_vm._v(_vm._s(h))])
  }), 1), _vm._v(" "), _c('span', {
    staticClass: "spt2"
  }, [_vm._v(":")]), _vm._v(" "), _c('i-select', {
    staticClass: "sel",
    attrs: {
      "placeholder": "分钟"
    },
    model: {
      value: (_vm.venueCheckinConf.beginMin),
      callback: function($$v) {
        _vm.$set(_vm.venueCheckinConf, "beginMin", $$v)
      },
      expression: "venueCheckinConf.beginMin"
    }
  }, [_c('i-option', {
    attrs: {
      "value": "00"
    }
  }, [_vm._v("00")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": "30"
    }
  }, [_vm._v("30")])], 1), _vm._v(" "), _c('span', {
    staticClass: "spt1"
  }, [_vm._v(" ~ ")]), _vm._v(" "), _c('i-select', {
    staticClass: "sel",
    attrs: {
      "placeholder": "小时"
    },
    model: {
      value: (_vm.venueCheckinConf.endHour),
      callback: function($$v) {
        _vm.$set(_vm.venueCheckinConf, "endHour", $$v)
      },
      expression: "venueCheckinConf.endHour"
    }
  }, _vm._l((_vm.hours), function(h) {
    return _c('i-option', {
      key: '1-' + h,
      attrs: {
        "value": h
      }
    }, [_vm._v(_vm._s(h))])
  }), 1), _vm._v(" "), _c('span', {
    staticClass: "spt2"
  }, [_vm._v(":")]), _vm._v(" "), _c('i-select', {
    staticClass: "sel",
    attrs: {
      "placeholder": "分钟"
    },
    model: {
      value: (_vm.venueCheckinConf.endMin),
      callback: function($$v) {
        _vm.$set(_vm.venueCheckinConf, "endMin", $$v)
      },
      expression: "venueCheckinConf.endMin"
    }
  }, [_c('i-option', {
    attrs: {
      "value": "00"
    }
  }, [_vm._v("00")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": "30"
    }
  }, [_vm._v("30")])], 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("消费单价 (元)")]), _vm._v(" "), _c('td', [_c('input-num', {
    staticClass: "num-in",
    model: {
      value: (_vm.venueCheckinConf.unitPrice),
      callback: function($$v) {
        _vm.$set(_vm.venueCheckinConf, "unitPrice", _vm._n($$v))
      },
      expression: "venueCheckinConf.unitPrice"
    }
  }), _vm._v("  \n\t\t\t\t\t\t"), _c('span', {
    staticClass: "orangered"
  }, [_vm._v("元")]), _vm._v(" / 小时 "), _c('span', {
    staticClass: "gray"
  }, [_vm._v("（用于储值卡）")])], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "valign": "top"
    }
  }, [_c('div', {
    staticClass: "p5"
  }, [_vm._v("消费单价 (次)")])]), _vm._v(" "), _c('td', [_c('input-num', {
    staticClass: "num-in",
    model: {
      value: (_vm.venueCheckinConf.unitTimes),
      callback: function($$v) {
        _vm.$set(_vm.venueCheckinConf, "unitTimes", _vm._n($$v))
      },
      expression: "venueCheckinConf.unitTimes"
    }
  }), _vm._v("  \n\t\t\t\t\t\t"), _c('span', {
    staticClass: "green"
  }, [_vm._v("次")]), _vm._v(" / 小时 "), _c('span', {
    staticClass: "gray"
  }, [_vm._v("（用于次数卡）")]), _vm._v(" "), _c('div', {
    staticClass: "charge-by-hour-conf"
  }, [_c('span', {
    staticClass: "orange"
  }, [_vm._v("不足一小时的计费设置：")]), _vm._v(" "), _c('ul', [_c('li', [_c('Icon', {
    attrs: {
      "type": "ios-time-outline",
      "size": "18"
    }
  }), _vm._v(" "), _c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.chargeByHourConf.fromMin1),
      callback: function($$v) {
        _vm.$set(_vm.chargeByHourConf, "fromMin1", $$v)
      },
      expression: "chargeByHourConf.fromMin1"
    }
  }), _vm._v(" 分钟\n\t\t\t\t\t\t\t\t\t~ "), _c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.chargeByHourConf.toMin1),
      callback: function($$v) {
        _vm.$set(_vm.chargeByHourConf, "toMin1", $$v)
      },
      expression: "chargeByHourConf.toMin1"
    }
  }), _vm._v(" 分钟，按半小时计费")], 1), _vm._v(" "), _c('li', [_c('Icon', {
    attrs: {
      "type": "ios-clock-outline",
      "size": "18"
    }
  }), _vm._v(" "), _c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.chargeByHourConf.fromMin2),
      callback: function($$v) {
        _vm.$set(_vm.chargeByHourConf, "fromMin2", $$v)
      },
      expression: "chargeByHourConf.fromMin2"
    }
  }), _vm._v(" 分钟\n\t\t\t\t\t\t\t\t\t~ "), _c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.chargeByHourConf.toMin2),
      callback: function($$v) {
        _vm.$set(_vm.chargeByHourConf, "toMin2", $$v)
      },
      expression: "chargeByHourConf.toMin2"
    }
  }), _vm._v(" 分钟，按一小时计费")], 1)])])], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "120px"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.venueCheckinConfDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("时间范围")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("消费单价（元）")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("消费单价（次）")]), _vm._v(" "), _c('th', [_vm._v("不足一小时的计费方案")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "160"
    }
  }, [_vm._v("更新时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2331:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Tabs', {
    attrs: {
      "animated": false
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
      "label": "编辑计费设置",
      "name": "confEdit"
    }
  }, [_c('table', {
    staticClass: "tblform booking-conf"
  }, [_c('tr', [_c('th', [_vm._v("场地")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "box"
  }, [(_vm.venueAreaList && _vm.venueAreaList.length) ? [_c('CheckboxGroup', {
    staticStyle: {
      "display": "inline-block"
    },
    model: {
      value: (_vm.venueAreaItemConf.areaIdList),
      callback: function($$v) {
        _vm.$set(_vm.venueAreaItemConf, "areaIdList", $$v)
      },
      expression: "venueAreaItemConf.areaIdList"
    }
  }, _vm._l((_vm.venueAreaList), function(a) {
    return (a.areaType === 0) ? _c('Checkbox', {
      key: a.vaId,
      attrs: {
        "label": a.vaId
      }
    }, [_vm._v(_vm._s(a.areaName))]) : _vm._e()
  }), 1), _vm._v(" "), _c('a', {
    staticClass: "sel",
    on: {
      "click": _vm.checkAllArea
    }
  }, [_vm._v("全选")]), _c('span', {
    staticClass: "spt small"
  }, [_vm._v("|")]), _c('a', {
    staticClass: "sel",
    on: {
      "click": _vm.uncheckAllArea
    }
  }, [_vm._v("全不选")])] : _c('i', {
    staticClass: "orange"
  }, [_vm._v("尚未配置场地")])], 2)])]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("预约日期")]), _vm._v(" "), _c('td', [_c('date-picker', {
    staticClass: "datepick",
    attrs: {
      "type": "date",
      "placeholder": "开始日期"
    },
    model: {
      value: (_vm.venueAreaItemConf.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.venueAreaItemConf, "beginDate", $$v)
      },
      expression: "venueAreaItemConf.beginDate"
    }
  }), _vm._v("\n\t\t\t\t\t\t~\n\t\t\t\t\t\t"), _c('date-picker', {
    staticClass: "datepick",
    attrs: {
      "type": "date",
      "placeholder": "结束日期"
    },
    model: {
      value: (_vm.venueAreaItemConf.endDate),
      callback: function($$v) {
        _vm.$set(_vm.venueAreaItemConf, "endDate", $$v)
      },
      expression: "venueAreaItemConf.endDate"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "weeks"
  }, [_c('CheckboxGroup', {
    staticStyle: {
      "display": "inline-block"
    },
    model: {
      value: (_vm.venueAreaItemConf.weekArr),
      callback: function($$v) {
        _vm.$set(_vm.venueAreaItemConf, "weekArr", $$v)
      },
      expression: "venueAreaItemConf.weekArr"
    }
  }, [_c('Checkbox', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("周一")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("周二")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "label": 3
    }
  }, [_vm._v("周三")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "label": 4
    }
  }, [_vm._v("周四")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "label": 5
    }
  }, [_vm._v("周五")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "label": 6
    }
  }, [_vm._v("周六")]), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("周日")])], 1)], 1), _vm._v(" "), _c('help', [_vm._v("\n\t\t\t\t\t\t\t可勾选预约日期范围内的星期设置"), _c('br'), _vm._v("未勾选的星期则不设置计费\n\t\t\t\t\t\t")])], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("预约时间")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "box"
  }, [_c('CheckboxGroup', {
    staticStyle: {
      "display": "inline"
    },
    model: {
      value: (_vm.venueAreaItemConf.hourList),
      callback: function($$v) {
        _vm.$set(_vm.venueAreaItemConf, "hourList", $$v)
      },
      expression: "venueAreaItemConf.hourList"
    }
  }, _vm._l((_vm.hours), function(h) {
    return _c('Checkbox', {
      key: h,
      attrs: {
        "label": h
      }
    }, [_vm._v(_vm._s(h) + "点")])
  }), 1), _vm._v(" "), _c('a', {
    staticClass: "sel",
    on: {
      "click": _vm.checkAllHours
    }
  }, [_vm._v("全选")]), _c('span', {
    staticClass: "spt small"
  }, [_vm._v("|")]), _c('a', {
    staticClass: "sel",
    on: {
      "click": _vm.uncheckAllHours
    }
  }, [_vm._v("全不选")])], 1)])]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("现金计费")]), _vm._v(" "), _c('td', [_c('input-num', {
    staticClass: "input-s",
    model: {
      value: (_vm.venueAreaItemConf.cashPrice),
      callback: function($$v) {
        _vm.$set(_vm.venueAreaItemConf, "cashPrice", _vm._n($$v))
      },
      expression: "venueAreaItemConf.cashPrice"
    }
  }), _vm._v("  元 "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（每小时价格）")]), _vm._v(" "), _c('span', {
    staticClass: "l10"
  }, [_c('a', {
    on: {
      "click": _vm.batchConfValueCards
    }
  }, [_vm._v("同步设置储值卡")])])], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "width": "100",
      "valign": "top"
    }
  }, [_vm._v("会员卡计费")]), _vm._v(" "), (_vm.cardList && _vm.cardList.length) ? _c('td', [_c('ul', {
    staticClass: "card-payment-list box",
    staticStyle: {
      "margin-top": "2px"
    }
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
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t会员卡种类\n\t\t\t\t\t\t\t\t\t")])], 1), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v("计费设置")])]), _vm._v(" "), _vm._l((_vm.cardList), function(c, index) {
    return (_vm.venue.cardIdList.contains(c.cardId)) ? _c('li', [_c('div', {
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
    }, [_vm._v("期限卡，不计单次费用")])] : _vm._e(), _vm._v(" "), (c.cardType === 2) ? [_vm._v("\n\t\t\t\t\t\t\t\t\t\t每小时计费"), _c('input-num', {
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
    }, [_vm._v("次")])] : _vm._e(), _vm._v(" "), (c.cardType === 3) ? [_vm._v("\n\t\t\t\t\t\t\t\t\t\t每小时计费"), _c('input-num', {
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
    }, [_vm._v("元")])] : _vm._e()], 2)]) : _vm._e()
  })], 2)]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "form-submit"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "disabled": _vm.isSubmit
    },
    on: {
      "click": _vm.submitVenueAreaSchedule
    }
  }, [_vm._v("提交")])], 1)]), _vm._v(" "), _c('TabPane', {
    attrs: {
      "label": "查看设置日志",
      "name": "confList"
    }
  }, [_c('div', {
    staticClass: "mytbl p10"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "145"
    }
  }, [_vm._v("创建日期")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("创建人")]), _vm._v(" "), _c('th', [_vm._v("场地")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "180"
    }
  }, [_vm._v("日期范围 / 时间段")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("计费")]), _vm._v(" "), _c('th', [_vm._v("计费会员卡")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("详情")])]), _vm._v(" "), _vm._l((_vm.venueAreaItemConfList), function(c, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(c.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.createUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.areaNameList.join('、')))]), _vm._v(" "), _c('td', [_c('div', {
      staticClass: "date-range"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t " + _vm._s(_vm.g.Util.formatDate(c.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(c.endDate)) + "\n\t\t\t\t\t\t\t\t "), (c.weeks) ? _c('div', {
      staticClass: "p5"
    }, [_vm._v(_vm._s(c.weekNames.join('、')))]) : _vm._e()]), _vm._v("\n\t\t\t\t\t\t\t " + _vm._s(c.times.split(',').join('、')) + "\n\t\t\t\t\t\t ")]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(c.cashPrice))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.cardNameList.join('、')))]), _vm._v(" "), _c('td', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.viewVenueAreaItemConf(idx)
        }
      }
    }, [_vm._v("详情")])])])
  })], 2)]), _vm._v(" "), (_vm.venueAreaItemConfList && _vm.venueAreaItemConfList.length === 0) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2366:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('i-button', {
    on: {
      "click": function($event) {
        return _vm.openAiMachVenueArea(null)
      }
    }
  }, [_vm._v("添加配置")]), _vm._v(" "), _c('div', {
    staticClass: "p15"
  }, [_c('table', {
    staticClass: "mytbl"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.aiMachVenueAreaList), function(mva) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(mva.machNo))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(mva.machName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(mva.areaName))]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t模拟器ID：" + _vm._s(mva.lisenceId) + "\n\t\t\t\t\t"), (mva.devId) ? _c('div', {
      staticClass: "p5"
    }, [_vm._v("中控ID：" + _vm._s(mva.devId))]) : _vm._e(), _vm._v(" "), (mva.delayTime) ? _c('div', {
      staticClass: "p5"
    }, [_vm._v("设备关闭延迟时间：" + _vm._s(mva.delayTime) + " 分钟")]) : _vm._e()]), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openAiMachVenueArea(mva)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openQrcodeDlg(mva)
        }
      }
    }, [_vm._v("下机二维码")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.deleteAiMachVenueArea(mva.amvaId)
        }
      }
    }, [_vm._v("删除")])])])])])
  })], 2)]), _vm._v(" "), (_vm.aiMachVenueAreaList && !_vm.aiMachVenueAreaList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n\t\t暂无数据\n\t")]) : _vm._e(), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "人脸设备场地配置",
      "width": "600",
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.aiMachVenueAreaDlg),
      callback: function($$v) {
        _vm.aiMachVenueAreaDlg = $$v
      },
      expression: "aiMachVenueAreaDlg"
    }
  }, [_c('table', {
    staticClass: "tblform",
    attrs: {
      "width": "90%"
    }
  }, [_c('tr', [_c('th', {
    staticClass: "required",
    attrs: {
      "width": "120"
    }
  }, [_vm._v("人脸识别设备")]), _vm._v(" "), _c('td', [_c('i-select', {
    model: {
      value: (_vm.aiMachVenueArea.machId),
      callback: function($$v) {
        _vm.$set(_vm.aiMachVenueArea, "machId", $$v)
      },
      expression: "aiMachVenueArea.machId"
    }
  }, _vm._l((_vm.aiMachList), function(mach) {
    return _c('i-option', {
      key: mach.machId,
      attrs: {
        "value": mach.machId
      }
    }, [_vm._v(_vm._s(mach.machNo) + " / " + _vm._s(mach.machName))])
  }), 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("场地")]), _vm._v(" "), _c('td', [_c('i-select', {
    attrs: {
      "filterable": ""
    },
    model: {
      value: (_vm.aiMachVenueArea.vaId),
      callback: function($$v) {
        _vm.$set(_vm.aiMachVenueArea, "vaId", $$v)
      },
      expression: "aiMachVenueArea.vaId"
    }
  }, _vm._l((_vm.venueAreaList), function(va) {
    return _c('i-option', {
      key: va.vaId,
      attrs: {
        "value": va.vaId
      }
    }, [_vm._v(_vm._s(va.areaName))])
  }), 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("模拟器ID")]), _vm._v(" "), _c('td', [_c('i-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.aiMachVenueArea.lisenceId),
      callback: function($$v) {
        _vm.$set(_vm.aiMachVenueArea, "lisenceId", $$v)
      },
      expression: "aiMachVenueArea.lisenceId"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("中控ID")]), _vm._v(" "), _c('td', [_c('i-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.aiMachVenueArea.devId),
      callback: function($$v) {
        _vm.$set(_vm.aiMachVenueArea, "devId", $$v)
      },
      expression: "aiMachVenueArea.devId"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("设备关闭延迟时间")]), _vm._v(" "), _c('td', [_c('input-int', {
    staticStyle: {
      "width": "100px"
    },
    model: {
      value: (_vm.aiMachVenueArea.delayTime),
      callback: function($$v) {
        _vm.$set(_vm.aiMachVenueArea, "delayTime", $$v)
      },
      expression: "aiMachVenueArea.delayTime"
    }
  }), _vm._v("  分钟\n\t\t\t\t")], 1)]), _vm._v(" "), _c('tr', [_c('th'), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "p15"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveAiMachVenueArea
    }
  }, [_vm._v("提交")])], 1)])])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "下机二维码",
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.checkoutQrcodeDlg),
      callback: function($$v) {
        _vm.checkoutQrcodeDlg = $$v
      },
      expression: "checkoutQrcodeDlg"
    }
  }, [(_vm.checkoutQrcodeDlg) ? [_c('table', {
    staticClass: "eventlink"
  }, [_c('tr', [_c('td', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("场地名称：")]), _vm._v(" "), _c('td', [_c('h3', [_vm._v(_vm._s(_vm.selectMva.areaName))])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("下机（签出）二维码：")]), _vm._v(" "), _c('td', [_c('img', {
    staticClass: "qrcode",
    attrs: {
      "src": _vm.g.Conf.QR_CODE_URL + encodeURIComponent(_vm.qrCodeUrl)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "p5"
  }, [_vm._v("( 可下载打印 )")])])])])] : _vm._e(), _vm._v(" "), _c('div', {
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
        _vm.checkoutQrcodeDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("人脸设备编号")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("人脸设备名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("场地名称")]), _vm._v(" "), _c('th', [_vm._v("接口参数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "180"
    }
  }, [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2383:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "more-tools"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "more-tools",
      "page": "venue-conf"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("场馆设置")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('i-button', {
    staticClass: "gray",
    attrs: {
      "type": "text"
    },
    on: {
      "click": function($event) {
        return _vm.$router.go(-1)
      }
    }
  }, [_c('Icon', {
    attrs: {
      "size": "13",
      "type": "ios-arrow-back"
    }
  }), _vm._v(" 返回")], 1), _vm._v("\n\t\t\t\t\t \n\t\t\t\t\t"), _c('i-button', {
    attrs: {
      "icon": "md-add"
    },
    on: {
      "click": _vm.openNewVenueDlg
    }
  }, [_vm._v("添加场馆")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.venueList), function(v) {
    return _c('tr', [_c('td', [_c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.openEditVenueDlg(v)
        }
      }
    }, [_vm._v(_vm._s(v.venueName))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.itemMap[v.itemId].itemName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(v.cardNames))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(v.updateUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(v.updateTime))]), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openEditVenueDlg(v)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.deleteVenue(v.venueId)
        }
      }
    }, [_vm._v("删除")])])])])])
  })], 2), _vm._v(" "), (_vm.venueList && !_vm.venueList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()])]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("场地设置")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('i-select', {
    staticStyle: {
      "width": "180px"
    },
    attrs: {
      "placeholder": "请选择场馆"
    },
    on: {
      "on-change": function($event) {
        return _vm.queryVenueArea()
      }
    },
    model: {
      value: (_vm.query.venueId),
      callback: function($$v) {
        _vm.$set(_vm.query, "venueId", $$v)
      },
      expression: "query.venueId"
    }
  }, _vm._l((_vm.venueList), function(v) {
    return _c('i-option', {
      key: v.venueId,
      attrs: {
        "value": v.venueId
      }
    }, [_vm._v(_vm._s(v.venueName))])
  }), 1), _vm._v("\n\t\t\t\t\t \n\t\t\t\t\t"), _c('i-button', {
    attrs: {
      "icon": "md-add"
    },
    on: {
      "click": _vm.openNewAreaDlg
    }
  }, [_vm._v("添加场地")]), _vm._v(" "), (_vm.query.venueId && _vm.enableAiMachVenueArea) ? [_vm._v("\n\t\t\t\t\t\t \n\t\t\t\t\t\t"), _c('i-button', {
    on: {
      "click": _vm.openAiMachVenueAreaListDlg
    }
  }, [_vm._v("人脸设备场地配置")])] : _vm._e()], 2)]), _vm._v(" "), (_vm.venueAreaList) ? _c('ul', {
    staticClass: "area-list"
  }, _vm._l((_vm.venueAreaList), function(a) {
    return _c('li', {
      class: {
        'ban': a.status === 1,
        'area-type-0': a.areaType === 0,
        'area-type-1': a.areaType === 1
      }
    }, [_c('div', {
      staticClass: "area-type"
    }, [(a.areaType === 0) ? [_c('Icon', {
      attrs: {
        "type": "md-calendar"
      }
    }), _vm._v("场地预约")] : (a.areaType === 1) ? [_c('Icon', {
      attrs: {
        "type": "md-time"
      }
    }), _vm._v("场地计时")] : _vm._e()], 2), _vm._v(" "), _c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(a.areaName) + " "), (a.status === 1) ? _c('span', {
      staticClass: "ban-tips"
    }, [_vm._v("[已禁]")]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "opt"
    }, [_c('a', {
      attrs: {
        "title": "编辑"
      },
      on: {
        "click": function($event) {
          return _vm.openEditVenueAreaDlg(a)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont icon-edit"
    })]), _vm._v(" "), _c('a', {
      attrs: {
        "title": "删除"
      },
      on: {
        "click": function($event) {
          return _vm.deleteVenueArea(a)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont icon-delete"
    })]), _vm._v(" "), _c('a', [(a.status === 0) ? _c('Icon', {
      attrs: {
        "type": "ios-remove-circle-outline",
        "size": "14",
        "title": "停用"
      },
      on: {
        "click": function($event) {
          return _vm.updateVenueAreaStatus(a, 1)
        }
      }
    }) : (a.status === 1) ? _c('i', {
      staticClass: "iconfont icon-revoke",
      attrs: {
        "title": "恢复"
      },
      on: {
        "click": function($event) {
          return _vm.updateVenueAreaStatus(a, 0)
        }
      }
    }) : _vm._e()], 1)])])
  }), 0) : _vm._e(), _vm._v(" "), (_vm.query.venueId && _vm.venueAreaList && !_vm.venueAreaList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "场馆设置",
      "width": "900",
      "styles": {
        'top': '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "",
      "mask-closable": false
    },
    model: {
      value: (_vm.venueDlg),
      callback: function($$v) {
        _vm.venueDlg = $$v
      },
      expression: "venueDlg"
    }
  }, [_c('div', {
    staticClass: "tblform bookings-conf"
  }, [_c('table', {
    attrs: {
      "width": "800"
    }
  }, [_c('tr', [_c('th', {
    staticClass: "required",
    attrs: {
      "width": "150"
    }
  }, [_vm._v("场馆名称：")]), _vm._v(" "), _c('td', [_c('i-input', {
    staticStyle: {
      "width": "220px"
    },
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.venue.venueName),
      callback: function($$v) {
        _vm.$set(_vm.venue, "venueName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "venue.venueName"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("计费项目：")]), _vm._v(" "), _c('td', [_c('i-select', {
    staticStyle: {
      "width": "220px"
    },
    model: {
      value: (_vm.venue.itemId),
      callback: function($$v) {
        _vm.$set(_vm.venue, "itemId", $$v)
      },
      expression: "venue.itemId"
    }
  }, _vm._l((_vm.entryChargeItemList), function(o) {
    return _c('i-option', {
      key: o.itemId,
      attrs: {
        "value": o.itemId
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(o.itemName) + "\n\t\t\t\t\t\t\t")])
  }), 1), _vm._v(" "), _c('span', {
    staticClass: "gray l10"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor"
  }), _vm._v(" 用于统计各计费项目的经营数据")])], 1)]), _vm._v(" "), (!_vm.venue.venueId) ? _c('tr', [_c('th', {
    attrs: {
      "valign": "top"
    }
  }, [_vm._v("场馆复制选择：")]), _vm._v(" "), _c('td', [_c('checkbox', {
    model: {
      value: (_vm.hasCopyVenueConf),
      callback: function($$v) {
        _vm.hasCopyVenueConf = $$v
      },
      expression: "hasCopyVenueConf"
    }
  }, [_vm._v("复制其它场馆所有设置")]), _vm._v(" "), (_vm.hasCopyVenueConf) ? _c('div', {
    staticClass: "p10"
  }, [_c('i-select', {
    staticStyle: {
      "width": "220px"
    },
    attrs: {
      "placeholder": "请选择场馆"
    },
    model: {
      value: (_vm.copyVenueId),
      callback: function($$v) {
        _vm.copyVenueId = $$v
      },
      expression: "copyVenueId"
    }
  }, _vm._l((_vm.venueList), function(v) {
    return _c('i-option', {
      key: v.venueId,
      attrs: {
        "value": v.venueId
      }
    }, [_vm._v(_vm._s(v.venueName))])
  }), 1)], 1) : _vm._e()], 1)]) : _vm._e(), _vm._v(" "), (!_vm.hasCopyVenueConf) ? [_c('tr', [_c('th', {
    attrs: {
      "valign": "top"
    }
  }, [_c('div', {
    staticClass: "p5 required"
  }, [_vm._v("计费会员卡：")])]), _vm._v(" "), _c('td', [_c('i-select', {
    attrs: {
      "multiple": "",
      "filterable": ""
    },
    model: {
      value: (_vm.venue.cardIdArr),
      callback: function($$v) {
        _vm.$set(_vm.venue, "cardIdArr", $$v)
      },
      expression: "venue.cardIdArr"
    }
  }, _vm._l((_vm.cardList), function(c) {
    return _c('i-option', {
      key: c.cardId,
      attrs: {
        "value": c.cardId,
        "label": c.cardName
      }
    }, [_c('span', {
      staticClass: "gray"
    }, [_vm._v("【" + _vm._s(_vm.g.Dict.CardType[c.cardType]) + "】 ")]), _vm._v(" " + _vm._s(c.cardName) + "\n\t\t\t\t\t\t\t\t")])
  }), 1), _vm._v(" "), _c('div', {
    staticClass: "tips"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor"
  }), _vm._v(" 表示此场馆只能消费这些会员卡")])], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "valign": "top"
    }
  }, [_c('div', {
    staticClass: "p5"
  }, [_vm._v("禁止预约取消的卡：")])]), _vm._v(" "), _c('td', [_c('i-select', {
    attrs: {
      "multiple": "",
      "filterable": ""
    },
    model: {
      value: (_vm.venue.cancelDisabledCardIdArr),
      callback: function($$v) {
        _vm.$set(_vm.venue, "cancelDisabledCardIdArr", $$v)
      },
      expression: "venue.cancelDisabledCardIdArr"
    }
  }, _vm._l((_vm.cardList), function(c) {
    return _c('i-option', {
      key: c.cardId,
      attrs: {
        "value": c.cardId,
        "label": c.cardName
      }
    }, [_c('span', {
      staticClass: "gray"
    }, [_vm._v("【" + _vm._s(_vm.g.Dict.CardType[c.cardType]) + "】 ")]), _vm._v(" " + _vm._s(c.cardName) + "\n\t\t\t\t\t\t\t\t")])
  }), 1), _vm._v(" "), _c('div', {
    staticClass: "tips"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor"
  }), _vm._v(" 表示使用这些卡预约场地后，禁止取消")])], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("预约开放时间")]), _vm._v(" "), _c('td', [_c('TimePicker', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "format": "HH:mm",
      "type": "timerange",
      "placement": "bottom-end",
      "placeholder": "请设置预约开放时间"
    },
    model: {
      value: (_vm.bookingOpenTimeArr),
      callback: function($$v) {
        _vm.bookingOpenTimeArr = $$v
      },
      expression: "bookingOpenTimeArr"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "gray l5"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor"
  }), _vm._v(" 设置后，会员端仅在此时间范围内开放预约；不设置则表示不限制开放时间")])], 1)]), _vm._v(" "), _c('tr', [_c('th', [_c('help', [_vm._v("表示会员只能在此设置的时间点预约场地。")]), _vm._v(" 预约时间点：")], 1), _vm._v(" "), _c('td', {
    staticClass: "checkins"
  }, [_c('CheckboxGroup', {
    staticClass: "box",
    model: {
      value: (_vm.venueBizTimeList),
      callback: function($$v) {
        _vm.venueBizTimeList = $$v
      },
      expression: "venueBizTimeList"
    }
  }, [_vm._l((_vm.hours), function(h) {
    return [_c('Checkbox', {
      key: h + '-1',
      attrs: {
        "label": h * 100
      }
    }, [_vm._v(_vm._s(h < 10 ? '0' : '') + _vm._s(h) + ":00")]), _vm._v(" "), _c('Checkbox', {
      key: h + '-2',
      attrs: {
        "label": h * 100 + 30
      }
    }, [_vm._v(_vm._s(h < 10 ? '0' : '') + _vm._s(h) + ":30")])]
  })], 2)], 1)]), _vm._v(" "), _c('tr', [_c('th', [_c('div', [_vm._v("场地预约限制：")])]), _vm._v(" "), _c('td', [_c('div', [_vm._v("会员每张卡每天最多能预约"), _c('input-int', {
    staticClass: "input-ss",
    model: {
      value: (_vm.venue.maxBookingVenues),
      callback: function($$v) {
        _vm.$set(_vm.venue, "maxBookingVenues", $$v)
      },
      expression: "venue.maxBookingVenues"
    }
  }), _vm._v("块场地")], 1)])]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "valign": "top"
    }
  }, [_c('div', {
    staticClass: "p5"
  }, [_vm._v("预约时间限制：")])]), _vm._v(" "), _c('td', [_c('div', [_vm._v("每人每块场地最多能预约连续"), _c('input-int', {
    staticClass: "input-ss",
    model: {
      value: (_vm.venue.maxBookingConsecutiveHours),
      callback: function($$v) {
        _vm.$set(_vm.venue, "maxBookingConsecutiveHours", $$v)
      },
      expression: "venue.maxBookingConsecutiveHours"
    }
  }), _vm._v("小时")], 1), _vm._v(" "), _c('div', {
    staticClass: "p10"
  }, [_vm._v("会员最多提前"), _c('input-int', {
    staticClass: "input-ss",
    model: {
      value: (_vm.venue.minBookingMins),
      callback: function($$v) {
        _vm.$set(_vm.venue, "minBookingMins", $$v)
      },
      expression: "venue.minBookingMins"
    }
  }), _vm._v("分钟预约")], 1), _vm._v(" "), _c('div', {
    staticClass: "p10"
  }, [_vm._v("每块场地至少需要连续预约"), _c('input-num', {
    staticClass: "input-ss",
    model: {
      value: (_vm.venue.minContBookingHours),
      callback: function($$v) {
        _vm.$set(_vm.venue, "minContBookingHours", $$v)
      },
      expression: "venue.minContBookingHours"
    }
  }), _vm._v("小时\n\t\t\t\t\t\t\t\t"), _c('span', {
    staticClass: "gray"
  }, [_vm._v("（需设置半小时的倍数）")])], 1)])]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "valign": "top"
    }
  }, [_vm._v("预约取消设置：")]), _vm._v(" "), _c('td', [_c('div', [_c('RadioGroup', {
    model: {
      value: (_vm.venue.bookingCancelType),
      callback: function($$v) {
        _vm.$set(_vm.venue, "bookingCancelType", _vm._n($$v))
      },
      expression: "venue.bookingCancelType"
    }
  }, [_c('Radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("免费取消")]), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("扣费取消")])], 1), _vm._v(" "), (_vm.venue.bookingCancelType === 1) ? _c('span', {
    staticClass: "gray"
  }, [_vm._v("（从预约费用中扣除指定比例）")]) : _vm._e()], 1), _vm._v(" "), (_vm.venue.bookingCancelType === 0) ? _c('div', {
    staticClass: "p10"
  }, [_vm._v("会员最少提前"), _c('input-int', {
    staticClass: "input-ss",
    model: {
      value: (_vm.venue.minBookingCancelMins),
      callback: function($$v) {
        _vm.$set(_vm.venue, "minBookingCancelMins", $$v)
      },
      expression: "venue.minBookingCancelMins"
    }
  }), _vm._v("分钟取消预约")], 1) : (_vm.venue.bookingCancelType === 1) ? _c('ul', {
    staticClass: "cancel-conf"
  }, _vm._l((_vm.bookingCancelConfList), function(c) {
    return _c('li', [_vm._v("会员提前"), _c('input-int', {
      staticClass: "input-ss",
      model: {
        value: (c[0]),
        callback: function($$v) {
          _vm.$set(c, 0, $$v)
        },
        expression: "c[0]"
      }
    }), _vm._v("分钟取消，扣费"), _c('input-int', {
      staticClass: "input-ss",
      model: {
        value: (c[1]),
        callback: function($$v) {
          _vm.$set(c, 1, $$v)
        },
        expression: "c[1]"
      }
    }), _vm._v("%")], 1)
  }), 0) : _vm._e()])]), _vm._v(" "), _c('tr', [_c('th', [_c('help', [_vm._v("\n\t\t\t\t\t\t\t\t设置后，会员需要连续预约设置中的时间段。\n\t\t\t\t\t\t\t\t"), _c('p'), _vm._v("\n\t\t\t\t\t\t\t\t例如，设置了“20:00 ~ 21:00”，\n\t\t\t\t\t\t\t\t则会员如果想预约20:00，则必须要连续预约这些时间点“20:00，20:30，21:00”，否则系统将拒绝预约。\n\t\t\t\t\t\t\t")]), _vm._v("\n\t\t\t\t\t\t\t连续预约时间限制")], 1), _vm._v(" "), _c('td', {
    staticClass: "checkins"
  }, [_vm._l((_vm.contBookingTimes), function(t, idx) {
    return _c('div', {
      staticClass: "cont-bk-times"
    }, [_c('i-select', {
      staticClass: "sel",
      attrs: {
        "placeholder": "",
        "filterable": ""
      },
      model: {
        value: (t[0]),
        callback: function($$v) {
          _vm.$set(t, 0, $$v)
        },
        expression: "t[0]"
      }
    }, _vm._l((_vm.hours), function(h) {
      return _c('i-option', {
        key: h,
        attrs: {
          "value": h
        }
      }, [_vm._v(_vm._s(h))])
    }), 1), _vm._v(" "), _c('b', [_vm._v(":")]), _vm._v(" "), _c('i-select', {
      staticClass: "sel",
      attrs: {
        "placeholder": ""
      },
      model: {
        value: (t[1]),
        callback: function($$v) {
          _vm.$set(t, 1, $$v)
        },
        expression: "t[1]"
      }
    }, [_c('i-option', {
      attrs: {
        "value": 0
      }
    }, [_vm._v("00")]), _vm._v(" "), _c('i-option', {
      attrs: {
        "value": 30
      }
    }, [_vm._v("30")])], 1), _vm._v(" "), _c('b', [_vm._v("  ~  ")]), _vm._v(" "), _c('i-select', {
      staticClass: "sel",
      attrs: {
        "placeholder": ""
      },
      model: {
        value: (t[2]),
        callback: function($$v) {
          _vm.$set(t, 2, $$v)
        },
        expression: "t[2]"
      }
    }, _vm._l((_vm.hours), function(h) {
      return _c('i-option', {
        key: h,
        attrs: {
          "value": h
        }
      }, [_vm._v(_vm._s(h))])
    }), 1), _vm._v(" "), _c('b', [_vm._v(":")]), _vm._v(" "), _c('i-select', {
      staticClass: "sel",
      attrs: {
        "placeholder": ""
      },
      model: {
        value: (t[3]),
        callback: function($$v) {
          _vm.$set(t, 3, $$v)
        },
        expression: "t[3]"
      }
    }, [_c('i-option', {
      attrs: {
        "value": 0
      }
    }, [_vm._v("00")]), _vm._v(" "), _c('i-option', {
      attrs: {
        "value": 30
      }
    }, [_vm._v("30")])], 1), _vm._v(" "), _c('span', {
      staticClass: "l15"
    }, [_c('a', {
      on: {
        "click": function($event) {
          return _vm.clearContBookintTimes(idx)
        }
      }
    }, [_vm._v("清空")])])], 1)
  }), _vm._v(" "), _c('div', {
    staticClass: "p10"
  }, [_c('i-button', {
    attrs: {
      "icon": "md-add"
    },
    on: {
      "click": _vm.appendContBookintTimes
    }
  }, [_vm._v("添加时间限制")])], 1)], 2)]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "valign": "top"
    }
  }, [_vm._v("周末计费方式：")]), _vm._v(" "), _c('td', [_c('radio-group', {
    model: {
      value: (_vm.venue.weekendChargeType),
      callback: function($$v) {
        _vm.$set(_vm.venue, "weekendChargeType", $$v)
      },
      expression: "venue.weekendChargeType"
    }
  }, [_c('radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("与工作日一致")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("当日最高价")])], 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "valign": "top"
    }
  }, [_vm._v("节假日设置：")]), _vm._v(" "), _c('td', [_c('ul', {
    staticClass: "vacations"
  }, _vm._l((_vm.venueVacations), function(v, idx) {
    return _c('li', {
      staticClass: "item"
    }, [_c('DatePicker', {
      staticStyle: {
        "width": "210px"
      },
      attrs: {
        "type": "daterange",
        "split-panels": "",
        "placeholder": "选择假期"
      },
      model: {
        value: (_vm.venueVacations[idx]),
        callback: function($$v) {
          _vm.$set(_vm.venueVacations, idx, $$v)
        },
        expression: "venueVacations[idx]"
      }
    }), _vm._v(" "), _c('a', {
      staticClass: "l10",
      on: {
        "click": function($event) {
          return _vm.delVacation(idx)
        }
      }
    }, [_vm._v("删除")])], 1)
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "add-vacation"
  }, [_c('i-button', {
    attrs: {
      "icon": "md-add"
    },
    on: {
      "click": _vm.addVacationInput
    }
  }, [_vm._v("添加节假日")])], 1)])]), _vm._v(" "), (_vm.venueVacations && _vm.venueVacations.length) ? _c('tr', [_c('th', [_vm._v("节假日计费方式：")]), _vm._v(" "), _c('td', [_c('RadioGroup', {
    model: {
      value: (_vm.venue.vacationChargeType),
      callback: function($$v) {
        _vm.$set(_vm.venue, "vacationChargeType", $$v)
      },
      expression: "venue.vacationChargeType"
    }
  }, [_c('Radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("当日最高价")])], 1)], 1)]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "valign": "top"
    }
  }, [_c('help', [_vm._v("特别工作日是指，除周一至周五或非节假日的日期，这些日期与平时的计费方式一样。正常的工作日不需要设置。")]), _vm._v("\n\t\t\t\t\t\t\t特别工作日设置：\n\t\t\t\t\t\t")], 1), _vm._v(" "), _c('td', [_c('ul', {
    staticClass: "vacations"
  }, _vm._l((_vm.givenWorkdays), function(v, idx) {
    return _c('li', {
      staticClass: "item"
    }, [_c('DatePicker', {
      staticStyle: {
        "width": "210px"
      },
      attrs: {
        "type": "date",
        "split-panels": "",
        "placeholder": "选择工作日"
      },
      model: {
        value: (_vm.givenWorkdays[idx]),
        callback: function($$v) {
          _vm.$set(_vm.givenWorkdays, idx, $$v)
        },
        expression: "givenWorkdays[idx]"
      }
    }), _vm._v(" "), _c('a', {
      staticClass: "l10",
      on: {
        "click": function($event) {
          return _vm.delWorkday(idx)
        }
      }
    }, [_vm._v("删除")])], 1)
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "add-vacation"
  }, [_c('i-button', {
    attrs: {
      "icon": "md-add"
    },
    on: {
      "click": _vm.addWorkdayInput
    }
  }, [_vm._v("添加工作日")])], 1)])]), _vm._v(" "), _c('tr', [_c('th', [_c('help', [_vm._v("将在会员手机端预约页面展示，用于提醒会员注意事项。可选填。")]), _vm._v("\n\t\t\t\t\t\t\t预约公告\n\t\t\t\t\t\t")], 1), _vm._v(" "), _c('td', [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 6
    },
    model: {
      value: (_vm.venue.bookingRemark),
      callback: function($$v) {
        _vm.$set(_vm.venue, "bookingRemark", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "venue.bookingRemark"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('th', [_c('help', [_vm._v("为了预约安全，勾选此项后，会员在预约提交前须输入系统提供的图形验证码")]), _vm._v(" 预约验证码")], 1), _vm._v(" "), _c('td', [_c('checkbox', {
    model: {
      value: (_vm.venue.enableVerifyCode),
      callback: function($$v) {
        _vm.$set(_vm.venue, "enableVerifyCode", $$v)
      },
      expression: "venue.enableVerifyCode"
    }
  }, [_vm._v("场地预约时启用验证码")])], 1)])] : _vm._e(), _vm._v(" "), _c('tr', [_c('th'), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "form-submit"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveVenue
    }
  }, [_vm._v("提交")]), _vm._v("\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t"), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.venueDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)])])], 2)]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "批量添加场地",
      "width": "700",
      "styles": {
        'top': '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.venueAreaListDlg),
      callback: function($$v) {
        _vm.venueAreaListDlg = $$v
      },
      expression: "venueAreaListDlg"
    }
  }, [_vm._v("\n\t\t请批量设置场地名称：\n\t\t"), _c('ul', {
    staticClass: "new-area-list"
  }, _vm._l((_vm.areaNames), function(n, idx) {
    return _c('li', [_c('i-input', {
      staticClass: "input",
      attrs: {
        "type": "text"
      },
      model: {
        value: (_vm.areaNames[idx]),
        callback: function($$v) {
          _vm.$set(_vm.areaNames, idx, (typeof $$v === 'string' ? $$v.trim() : $$v))
        },
        expression: "areaNames[idx]"
      }
    })], 1)
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "form-submit center"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.createVenueAreaList
    }
  }, [_vm._v("提交")]), _vm._v("\n\t\t\t \n\t\t\t"), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.venueAreaListDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "场地编辑",
      "width": "500",
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.venueAreaDlg),
      callback: function($$v) {
        _vm.venueAreaDlg = $$v
      },
      expression: "venueAreaDlg"
    }
  }, [_c('table', {
    staticClass: "tblform"
  }, [_c('tr', [_c('th', [_vm._v("场地用途")]), _vm._v(" "), _c('td', [_c('RadioGroup', {
    model: {
      value: (_vm.venueArea.areaType),
      callback: function($$v) {
        _vm.$set(_vm.venueArea, "areaType", $$v)
      },
      expression: "venueArea.areaType"
    }
  }, [_c('Radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("场地预约")]), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("场地计时")])], 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("场地名称")]), _vm._v(" "), _c('td', [_c('i-input', {
    staticClass: "input-s",
    attrs: {
      "type": "text",
      "placeholder": "请输入场地名称"
    },
    model: {
      value: (_vm.venueArea.areaName),
      callback: function($$v) {
        _vm.$set(_vm.venueArea, "areaName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "venueArea.areaName"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "form-submit center"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.updateVenueArea()
      }
    }
  }, [_vm._v("提交")]), _vm._v("\n\t\t\t \n\t\t\t"), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.venueAreaDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "人脸设备场地配置列表",
      "width": "1000",
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.aiMachVenueAreaListDlg),
      callback: function($$v) {
        _vm.aiMachVenueAreaListDlg = $$v
      },
      expression: "aiMachVenueAreaListDlg"
    }
  }, [(_vm.aiMachVenueAreaListDlg) ? [_c('ai-mach-venue-area-conf', {
    attrs: {
      "venue-id": _vm.query.venueId
    }
  })] : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("场馆名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("计费项目")]), _vm._v(" "), _c('th', [_vm._v("计费会员卡")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("更新人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("更新时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2451:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "more-tools"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "more-tools",
      "page": "venue-checkin"
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
    staticClass: "query"
  }, [_c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "180px"
    },
    attrs: {
      "placeholder": "请选择场馆"
    },
    on: {
      "on-change": _vm.changeVenue
    },
    model: {
      value: (_vm.query.venueId),
      callback: function($$v) {
        _vm.$set(_vm.query, "venueId", $$v)
      },
      expression: "query.venueId"
    }
  }, _vm._l((_vm.venueList), function(v) {
    return (_vm.staffEntryChargeItems.contains(v.itemId)) ? _c('i-option', {
      key: v.venueId,
      attrs: {
        "value": v.venueId,
        "label": v.venueName
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(v.venueName) + "\n\t\t\t\t\t\t\t\t\t")]) : _vm._e()
  }), 1)], 1), _vm._v(" "), (_vm.query.venueId) ? _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    attrs: {
      "icon": "md-refresh",
      "title": "刷新"
    },
    on: {
      "click": _vm.reloadData
    }
  }, [_vm._v("刷新")])], 1) : _vm._e()])]), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right"
    }
  }, [_c('ButtonGroup', [(_vm.query.venueId) ? _c('i-button', {
    attrs: {
      "icon": "ios-paper-outline"
    },
    on: {
      "click": _vm.openVenueCheckinDlg
    }
  }, [_vm._v("消费明细查看")]) : _vm._e(), _vm._v(" "), (_vm.confEditable) ? _c('i-button', {
    attrs: {
      "type": "default",
      "icon": "logo-yen"
    },
    on: {
      "click": function($event) {
        return _vm.$router.push('/venue-checkin-conf')
      }
    }
  }, [_vm._v("场地计费设置")]) : _vm._e(), _vm._v(" "), (_vm.confEditable) ? _c('i-button', {
    attrs: {
      "type": "default",
      "icon": "ios-settings"
    },
    on: {
      "click": function($event) {
        return _vm.$router.push('/venue-conf')
      }
    }
  }, [_vm._v("场馆与场地设置")]) : _vm._e()], 1)], 1)])])]), _vm._v(" "), _c('section', {
    staticStyle: {
      "padding": "10px"
    }
  }, [(!_vm.query.venueId) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("请先选择场馆"), _c('p')]) : _vm._e(), _vm._v(" "), (_vm.venueAreaList && _vm.venueAreaList.length === 0) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e(), _vm._v(" "), (_vm.venueAreaList && _vm.venueAreaList.length) ? _c('ul', {
    staticClass: "areas"
  }, _vm._l((_vm.venueAreaList), function(a, idx) {
    return (a.status !== 1) ? _c('li', [_c('div', {
      class: {
        'vname': true,
        'notice': a.reminderMin && a.duration === a.reminderMin
      }
    }, [_vm._v(_vm._s(a.areaName))]), _vm._v(" "), _c('div', {
      staticClass: "cont"
    }, [(a.status === 0) ? _c('div', {
      staticClass: "idle"
    }, [_vm._v("可用")]) : _vm._e(), _vm._v(" "), (a.status === 2) ? [_c('div', {
      staticClass: "photo"
    }, [_c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(a.memberAvatarPathname, 200, 200, '666666'),
        "alt": ""
      },
      on: {
        "click": function($event) {
          return _vm.viewMember(a.checkinMemberId)
        }
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "mname"
    }, [_c('a', {
      on: {
        "click": function($event) {
          return _vm.viewAreaCheckin(idx)
        }
      }
    }, [_vm._v(_vm._s(a.checkinMemberName.shorten(6)) + " @ " + _vm._s(_vm.g.Util.formatTimeObject(a.checkinTime, false)))])]), _vm._v(" "), (a.bookedMin <= a.duration) ? _c('div', {
      staticClass: "timeout"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t已到预定的" + _vm._s(a.bookedMin) + "分钟\n\t\t\t\t\t\t\t\t"), _c('span', {
      staticClass: "spt"
    }, [_vm._v("|")]), _vm._v(" "), _c('a', {
      on: {
        "click": function($event) {
          return _vm.continueTiming(idx)
        }
      }
    }, [_vm._v("继续计时")])]) : _c('div', {
      staticClass: "duration"
    }, [(a.duration >= 0) ? [_vm._v("\n\t\t\t\t\t\t\t\t\t入场"), _c('b', [_vm._v(_vm._s(a.duration))]), _vm._v("分钟\n\t\t\t\t\t\t\t\t\t"), (a.bookedMin) ? [_c('span', {
      staticClass: "spt"
    }, [_vm._v("|")]), _vm._v(" 还剩"), _c('b', {
      staticStyle: {
        "color": "darkgreen"
      }
    }, [_vm._v(_vm._s(a.bookedMin - a.duration))]), _vm._v("分钟\n\t\t\t\t\t\t\t\t\t")] : _vm._e()] : (a.duration < 0) ? _c('span', {
      staticClass: "red"
    }, [_vm._v("计时异常，"), _c('a', {
      on: {
        "click": function($event) {
          return _vm.reload()
        }
      }
    }, [_vm._v("请刷新")])]) : _vm._e()], 2)] : _vm._e()], 2), _vm._v(" "), (a.status === 2) ? _c('div', {
      staticClass: "opt"
    }, [_c('a', {
      staticClass: "opt-checkout",
      on: {
        "click": function($event) {
          return _vm.openVenueAreaCheckoutDlg(a)
        }
      }
    }, [_vm._v("签出"), _c('Icon', {
      attrs: {
        "type": "md-log-out"
      }
    })], 1)]) : _c('div', {
      staticClass: "opt"
    }, [_c('a', {
      staticClass: "opt-checkin",
      on: {
        "click": function($event) {
          return _vm.openVenueAreaCheckinCreateDlg(a.vaId)
        }
      }
    }, [_c('Icon', {
      attrs: {
        "type": "md-log-in"
      }
    }), _vm._v("签到")], 1)])]) : _vm._e()
  }), 0) : _vm._e()]), _vm._v(" "), (_vm.venueAreaList && _vm.venueAreaList.length > 10) ? _c('div', {
    staticClass: "area-notices"
  }, _vm._l((_vm.venueAreaList), function(a) {
    return (a.reminderMin && a.duration === a.reminderMin) ? _c('span', {
      staticClass: "notice"
    }, [_vm._v(_vm._s(a.areaName))]) : _vm._e()
  }), 0) : _vm._e()]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "场地计时签到",
      "width": "700",
      "styles": {
        'top': '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "",
      "mask-closable": false
    },
    model: {
      value: (_vm.venueAreaCheckinCreateDlg),
      callback: function($$v) {
        _vm.venueAreaCheckinCreateDlg = $$v
      },
      expression: "venueAreaCheckinCreateDlg"
    }
  }, [(_vm.venueAreaCheckinCreateDlg) ? _c('table', {
    staticClass: "tblform checkin-form",
    attrs: {
      "width": "90%"
    }
  }, [_c('tr', [_c('th', {
    staticClass: "required",
    attrs: {
      "width": "100"
    }
  }, [_vm._v("签到会员")]), _vm._v(" "), _c('td', [_c('member-query-input', {
    on: {
      "afterQuery": _vm.afterQueryMember
    },
    model: {
      value: (_vm.member.flag),
      callback: function($$v) {
        _vm.$set(_vm.member, "flag", $$v)
      },
      expression: "member.flag"
    }
  })], 1)]), _vm._v(" "), (_vm.memberCardList && _vm.memberCardList.length) ? [_c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("计费会员卡")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "box"
  }, [_c('RadioGroup', {
    attrs: {
      "vertical": ""
    },
    model: {
      value: (_vm.selectCheckinMcId),
      callback: function($$v) {
        _vm.selectCheckinMcId = $$v
      },
      expression: "selectCheckinMcId"
    }
  }, _vm._l((_vm.memberCardList), function(mc) {
    return (!_vm.hasMemberCardNo || mc.isFind) ? _c('Radio', {
      key: mc.mcId,
      class: {
        gray: !mc.canUse
      },
      attrs: {
        "label": mc.mcId,
        "disabled": !mc.canUse
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(mc.cardName) + "：\n\t\t\t\t\t\t\t\t"), (!mc.canUse) ? _c('i', [_vm._v("不支持此卡")]) : (mc.cardType === 2) ? _c('span', [_vm._v("剩余 "), _c('b', [_vm._v(_vm._s(mc.currentTimes))]), _vm._v(" 次")]) : (mc.cardType === 3) ? _c('span', [_vm._v("剩余 "), _c('b', [_vm._v(_vm._s(mc.currentAmount))]), _vm._v(" 元")]) : _vm._e(), _vm._v(" "), (mc.cardOutsideNo) ? _c('span', [_c('span', {
      staticClass: "spt"
    }, [_vm._v("/")]), _vm._v("卡表面号：" + _vm._s(mc.cardOutsideNo))]) : _vm._e()]) : _vm._e()
  }), 1)], 1)])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("预定使用时间")]), _vm._v(" "), _c('td', [_c('input-int', {
    staticClass: "num-input",
    model: {
      value: (_vm.checkinBookedMin),
      callback: function($$v) {
        _vm.checkinBookedMin = _vm._n($$v)
      },
      expression: "checkinBookedMin"
    }
  }), _vm._v(" 分钟\n\t\t\t\t\t"), _c('span', {
    staticClass: "orange"
  }, [_vm._v("（到达此时间后，将不再计时计费）")])], 1)]), _vm._v(" "), (_vm.checkinBookedMin) ? _c('tr', [_c('th', [_vm._v("提前提醒时间")]), _vm._v(" "), _c('td', [_c('input-int', {
    staticClass: "num-input",
    model: {
      value: (_vm.checkinPreReminderMin),
      callback: function($$v) {
        _vm.checkinPreReminderMin = _vm._n($$v)
      },
      expression: "checkinPreReminderMin"
    }
  }), _vm._v(" 分钟\n\t\t\t\t\t"), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（在预定使用时间到达之前" + _vm._s(_vm.checkinPreReminderMin) + "分钟自动提醒，并语音播报三次）")])], 1)]) : _vm._e()] : _vm._e()], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "120px"
    }
  }, [(_vm.selectCheckinMcId) ? [_c('i-button', {
    staticClass: "long-btn",
    attrs: {
      "type": "primary",
      "loading": _vm.submitLoading
    },
    on: {
      "click": _vm.submitCheckin
    }
  }, [_vm._v("签到")]), _vm._v("\n\t\t\t\t \n\t\t\t")] : _vm._e(), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.venueAreaCheckinCreateDlg = false
      }
    }
  }, [_vm._v("关闭")])], 2), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
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
      "title": "场地计时签到会员",
      "width": "600",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.viewVenueAreaCheckinDlg),
      callback: function($$v) {
        _vm.viewVenueAreaCheckinDlg = $$v
      },
      expression: "viewVenueAreaCheckinDlg"
    }
  }, [(_vm.selectAreaCheckin) ? _c('div', {
    staticClass: "tblform checkin-record"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "120",
      "valign": "top"
    }
  }, [_vm._v("场地名称：")]), _vm._v(" "), _c('td', [_c('b', [_vm._v(_vm._s(_vm.selectAreaCheckin.areaName))]), _vm._v(" "), _c('span', {
    staticClass: "alt-area"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.altAreaDispaly = true
      }
    }
  }, [_vm._v("更换场地")])], 1), _vm._v(" "), (_vm.altAreaDispaly) ? _c('div', {
    staticClass: "alg-area-opt"
  }, [_c('div', {
    staticClass: "gray"
  }, [_vm._v("请选择一块可用的场地")]), _vm._v(" "), _c('ul', _vm._l((_vm.venueAreaList), function(a, idx) {
    return (a.status !== 1 && !a.vacId) ? _c('li', {
      class: {
        'on': a.vaId === _vm.altAreaId
      },
      on: {
        "click": function($event) {
          return _vm.selectNewArea(a.vaId)
        }
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(a.areaName) + "\n\t\t\t\t\t\t\t\t")]) : _vm._e()
  }), 0), _vm._v(" "), (_vm.altAreaId) ? _c('div', [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submitAltArea
    }
  }, [_vm._v("确定")])], 1) : _vm._e()]) : _vm._e()])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("会员姓名：")]), _vm._v(" "), _c('td', [_c('a', {
    on: {
      "click": function($event) {
        _vm.viewVenueAreaCheckinDlg = false;
        _vm.viewMember(_vm.selectAreaCheckin.checkinMemberId)
      }
    }
  }, [_vm._v(_vm._s(_vm.selectAreaCheckin.checkinMemberName))])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("签到会员卡：")]), _c('td', [_vm._v(_vm._s(_vm.selectAreaCheckin.checkinCardName))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("签到时间：")]), _c('td', [_vm._v(_vm._s(_vm.selectAreaCheckin.checkinTime))])]), _vm._v(" "), (_vm.selectAreaCheckin.bookedMin) ? _c('tr', [_c('th', [_vm._v("预定使用时间：")]), _vm._v(" "), _c('td', [_c('b', [_vm._v(_vm._s(_vm.selectAreaCheckin.bookedMin))]), _vm._v(" 分钟\n\t\t\t\t\t\t"), (_vm.selectAreaCheckin.reminderMin) ? _c('span', {
    staticClass: "l5"
  }, [_vm._v("(提前 "), _c('b', [_vm._v(_vm._s(_vm.selectAreaCheckin.bookedMin - _vm.selectAreaCheckin.reminderMin))]), _vm._v(" 分钟提醒)")]) : _vm._e()])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "form-submit center"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        return _vm.cancelCheckin(_vm.selectAreaCheckin.vacId)
      }
    }
  }, [_vm._v("取消签到")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.viewVenueAreaCheckinDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "场地计时消费明细",
      "width": "1000",
      "styles": {
        'top': '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "",
      "mask-closable": false
    },
    model: {
      value: (_vm.venueAreaCheckinListDlg),
      callback: function($$v) {
        _vm.venueAreaCheckinListDlg = $$v
      },
      expression: "venueAreaCheckinListDlg"
    }
  }, [_c('div', [_c('ul', {
    staticClass: "query-cond-inline"
  }, [_c('li', {
    staticClass: "item"
  }, [_c('date-picker', {
    staticClass: "query-date",
    attrs: {
      "type": "date",
      "placeholder": "开始日期"
    },
    model: {
      value: (_vm.checkinBeginDate),
      callback: function($$v) {
        _vm.checkinBeginDate = $$v
      },
      expression: "checkinBeginDate"
    }
  }), _vm._v("\n\t\t\t\t\t~\n\t\t\t\t\t"), _c('date-picker', {
    staticClass: "query-date",
    attrs: {
      "type": "date",
      "placeholder": "结束日期"
    },
    model: {
      value: (_vm.checkinEndDate),
      callback: function($$v) {
        _vm.checkinEndDate = $$v
      },
      expression: "checkinEndDate"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.queryVenueCheckin(null)
      }
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('i-button', {
    attrs: {
      "icon": "ios-cloud-download-outline"
    },
    on: {
      "click": _vm.exportToXls
    }
  }, [_vm._v("导出")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "mytbl p10"
  }, [_c('table', [_c('tr', [_c('th', [_vm._v("会员")]), _vm._v(" "), _c('th', [_vm._v("场地")]), _vm._v(" "), _c('th', [_vm._v("操作人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("签到时间 ↓")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("签出时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("使用时长")]), _vm._v(" "), _c('th', [_vm._v("会员卡")]), _vm._v(" "), _c('th', [_vm._v("会员卡号")]), _vm._v(" "), _c('th', [_vm._v("消费额")]), _vm._v(" "), _c('th', [_vm._v("通知发送")])]), _vm._v(" "), _vm._l((_vm.venueCheckinList), function(b, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(b.memberName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(b.areaName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(b.createUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(b.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(b.checkoutTime))]), _vm._v(" "), _c('td', [(!_vm.g.Util.isEmpty(b.duration)) ? [_vm._v(_vm._s(b.duration) + " 分钟")] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(b.cardName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(b.cardNo))]), _vm._v(" "), _c('td', [(b.cardType === 1) ? _c('span', {
      staticClass: "gray"
    }, [_vm._v("不计费")]) : (!_vm.g.Util.isEmpty(b.cardPayment)) ? _c('span', [_vm._v(_vm._s(b.cardPayment) + " " + _vm._s(_vm.g.Dict.CardUnitName[b.cardType]))]) : _vm._e()]), _vm._v(" "), _c('td', [(b.checkoutTime) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.sendNotice(b.vacId, true, false)
        }
      }
    }, [_vm._v("发送短信")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.sendNotice(b.vacId, false, true)
        }
      }
    }, [_vm._v("发送微信")])])]) : _vm._e()])])
  })], 2), _vm._v(" "), (_vm.venueCheckinCount && _vm.venueCheckinCount > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.venueCheckinCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryVenueCheckin
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.venueCheckinList && !_vm.venueCheckinList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "场地计时签出",
      "width": "450",
      "styles": {
        'top': '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "",
      "mask-closable": false
    },
    model: {
      value: (_vm.venueAreaCheckoutDlg),
      callback: function($$v) {
        _vm.venueAreaCheckoutDlg = $$v
      },
      expression: "venueAreaCheckoutDlg"
    }
  }, [(_vm.selectVa) ? _c('div', {
    staticClass: "mt20 l15 big"
  }, [_vm._v("\n\t\t\t您确定给【" + _vm._s(_vm.selectVa.checkinMemberName) + "】签出吗？\n\t\t\t"), _c('div', {
    staticClass: "mt25"
  }, [_vm._v("\n\t\t\t\t签出后发送通知给会员：\n\t\t\t\t"), _c('checkbox', {
    staticClass: "big",
    model: {
      value: (_vm.hasSendSmsNotice),
      callback: function($$v) {
        _vm.hasSendSmsNotice = $$v
      },
      expression: "hasSendSmsNotice"
    }
  }, [_vm._v("短信通知")]), _vm._v(" "), _c('checkbox', {
    staticClass: "big",
    model: {
      value: (_vm.hasSendWxNotice),
      callback: function($$v) {
        _vm.hasSendWxNotice = $$v
      },
      expression: "hasSendWxNotice"
    }
  }, [_vm._v("微信通知")])], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
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
      "click": _vm.checkoutVenueArea
    }
  }, [_vm._v("确定")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.venueAreaCheckoutDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)]), _vm._v(" "), _c('modal', {
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
  }, [_vm._v("提示")]), _vm._v("：每次最多导出 600 条记录 "), _c('br'), _vm._v("如要导出下一个600条，请将当前页数增加20页后再导出")])] : _c('span', [_vm._v("正在查询并导出，请稍候...")])], 2)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2460:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_c('DatePicker', {
    staticClass: "date",
    attrs: {
      "type": "date",
      "format": "yyyy-MM-dd",
      "placeholder": "场地使用开始日期"
    },
    model: {
      value: (_vm.vaiPauseLog.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.vaiPauseLog, "beginDate", $$v)
      },
      expression: "vaiPauseLog.beginDate"
    }
  }), _vm._v(" ~\n\t\t"), _c('DatePicker', {
    staticClass: "date",
    attrs: {
      "type": "date",
      "format": "yyyy-MM-dd",
      "placeholder": "场地使用结束日期"
    },
    model: {
      value: (_vm.vaiPauseLog.endDate),
      callback: function($$v) {
        _vm.$set(_vm.vaiPauseLog, "endDate", $$v)
      },
      expression: "vaiPauseLog.endDate"
    }
  }), _vm._v("\n\t\t \n\t\t"), _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.queryVaiLogList(null)
      }
    }
  }, [_vm._v("查询")]), _vm._v("\n\t\t \n\t"), (_vm.venueBookingRestorePermit) ? _c('i-button', {
    on: {
      "click": _vm.restoreVaiStatus
    }
  }, [_vm._v("批量恢复")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "mytbl mt15"
  }, [_c('table', [_c('tr', [(_vm.venueBookingRestorePermit) ? _c('th', {
    attrs: {
      "width": "45"
    }
  }, [_vm._v("选择")]) : _vm._e(), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("场地")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("日期")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "105"
    }
  }, [_vm._v("时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("停用人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "140"
    }
  }, [_vm._v("停用操作时间")]), _vm._v(" "), _c('th', [_vm._v("停用备注")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("恢复人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "140"
    }
  }, [_vm._v("停用恢复时间")])]), _vm._v(" "), _vm._l((_vm.vaiPauseLog.logList), function(log, idx) {
    return _c('tr', [(_vm.venueBookingRestorePermit) ? _c('td', [(!log.restoreStaffName) ? [_c('div', {
      staticClass: "ckbox",
      on: {
        "click": function($event) {
          return _vm.selectVaiPauseLog(idx)
        }
      }
    }, [(!_vm.pauseLogCkList[idx]) ? _c('i', {
      staticClass: "iconfont icon-checkbox-empty ckbox-0"
    }) : _c('i', {
      staticClass: "iconfont icon-checkbox-checked ckbox-1"
    })])] : _vm._e()], 2) : _vm._e(), _vm._v(" "), _c('td', [_vm._v(_vm._s(log.areaName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(log.bookingDate)))]), _vm._v(" "), _c('td', [(log.hourType === 1) ? [_vm._v(_vm._s(log.bookingHour) + ":00 ~ " + _vm._s(log.bookingHour) + ":30")] : [_vm._v(_vm._s(log.bookingHour) + ":30 ~ " + _vm._s(log.bookingHour + 1) + ":00")]], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(log.createUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(log.createTime))]), _vm._v(" "), _c('td', [_c('pre', [_vm._v(_vm._s(log.remark))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(log.restoreStaffName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(log.restoreTime))])])
  })], 2)]), _vm._v(" "), (_vm.vaiPauseLog.count) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.vaiPauseLog.count,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryVaiLogList
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.vaiPauseLog.logList && !_vm.vaiPauseLog.logList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 2471:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_c('DatePicker', {
    staticClass: "date",
    attrs: {
      "type": "date",
      "format": "yyyy-MM-dd",
      "placeholder": "场地使用开始日期"
    },
    model: {
      value: (_vm.vab.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.vab, "beginDate", $$v)
      },
      expression: "vab.beginDate"
    }
  }), _vm._v(" ~\n\t\t"), _c('DatePicker', {
    staticClass: "date",
    attrs: {
      "type": "date",
      "format": "yyyy-MM-dd",
      "placeholder": "场地使用结束日期"
    },
    model: {
      value: (_vm.vab.endDate),
      callback: function($$v) {
        _vm.$set(_vm.vab, "endDate", $$v)
      },
      expression: "vab.endDate"
    }
  }), _vm._v("\n\t\t \n\t\t"), _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.queryVabList(null)
      }
    }
  }, [_vm._v("查询")]), _vm._v("\n\t\t  \n\t\t"), _c('i-button', {
    on: {
      "click": _vm.deleteVenueAreaBooking
    }
  }, [_vm._v("批量取消预约")]), _vm._v("\n\t\t \n\t\t"), _c('i-button', {
    attrs: {
      "icon": "ios-cloud-download-outline"
    },
    on: {
      "click": _vm.exportToXls
    }
  }, [_vm._v("导出")]), _vm._v(" "), _c('div', {
    staticClass: "mytbl mt15"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.vab.dataList), function(b, idx) {
    return _c('tr', [_c('td', [(_vm.hasCancelOutdateBookingPermit || !b.isBeforeToday) ? _c('checkbox', {
      model: {
        value: (_vm.checkedVabIdxList[idx]),
        callback: function($$v) {
          _vm.$set(_vm.checkedVabIdxList, idx, $$v)
        },
        expression: "checkedVabIdxList[idx]"
      }
    }) : _vm._e()], 1), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(b.bookingDate)) + "   " + _vm._s(b.beginTime) + " ~ " + _vm._s(b.endTime))]), _vm._v(" "), _c('td', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.viewMember(b.memberId)
        }
      }
    }, [_vm._v(_vm._s(b.memberName))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(b.areaName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(b.cardName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.CardType[b.cardType]))]), _vm._v(" "), _c('td', [(b.cardType === 1) ? _c('span', {
      staticClass: "gray"
    }, [_vm._v("期限卡不计费")]) : (!_vm.g.Util.isEmpty(b.cardPayment)) ? _c('span', [_vm._v(_vm._s(b.cardPayment) + " " + _vm._s(_vm.g.Dict.CardUnitName[b.cardType]))]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(b.createUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(b.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(b.checkinUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(b.checkinTime))])])
  })], 2), _vm._v(" "), (_vm.vab.count) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.vab.count,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryVabList
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.vab.dataList && !_vm.vab.dataList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()])], 1), _vm._v(" "), _c('modal', {
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
      "member-id": _vm.viewMemberId
    },
    model: {
      value: (_vm.viewMemberDlg),
      callback: function($$v) {
        _vm.viewMemberDlg = $$v
      },
      expression: "viewMemberDlg"
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
  }, [_vm._v("提示")]), _vm._v("：每次最多导出 600 条记录 "), _c('br'), _vm._v("如要导出下一个600条，请将当前页数增加20页后再导出")])] : _c('span', [_vm._v("正在查询并导出，请稍候...")])], 2)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("选择")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "190"
    }
  }, [_vm._v("使用时间")]), _vm._v(" "), _c('th', [_vm._v("会员")]), _vm._v(" "), _c('th', [_vm._v("场地")]), _vm._v(" "), _c('th', [_vm._v("计费卡")]), _vm._v(" "), _c('th', [_vm._v("卡类型")]), _vm._v(" "), _c('th', [_vm._v("消费")]), _vm._v(" "), _c('th', [_vm._v("预约人")]), _vm._v(" "), _c('th', [_vm._v("预约时间  ↓")]), _vm._v(" "), _c('th', [_vm._v("签到人")]), _vm._v(" "), _c('th', [_vm._v("签到时间")])])
}]}

/***/ }),

/***/ 2520:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.openConfDlg(null)
      }
    }
  }, [_vm._v("新增配置")]), _vm._v(" "), _c('div', {
    staticClass: "mytbl mt15",
    staticStyle: {
      "min-height": "400px"
    }
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.confList), function(c, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(c.cardName))]), _vm._v(" "), _c('td', {
      staticClass: "areas"
    }, _vm._l((c.areaIds.split(',')), function(areaId) {
      return _c('span', [_vm._v(_vm._s(_vm.venueAreaNameMap[parseInt(areaId)]))])
    }), 0), _vm._v(" "), _c('td', [(c.hasVenueBookingFee) ? [_vm._v("是")] : [_vm._v("否")]], 2), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [_c('li', {
      on: {
        "click": function($event) {
          return _vm.openConfDlg(c)
        }
      }
    }, [_c('a', [_vm._v("编辑")])]), _vm._v(" "), _c('li', {
      on: {
        "click": function($event) {
          return _vm.deleteConf(c.confId)
        }
      }
    }, [_c('a', [_vm._v("删除")])])])])])
  })], 2), _vm._v(" "), (_vm.confList && !_vm.confList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "私教课与场地预约配置",
      "width": "800",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "",
      "mask-closable": false
    },
    model: {
      value: (_vm.confInfoDlg),
      callback: function($$v) {
        _vm.confInfoDlg = $$v
      },
      expression: "confInfoDlg"
    }
  }, [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("私教计费会员卡")]), _vm._v(" "), _c('td', [_c('i-select', {
    attrs: {
      "filterable": ""
    },
    model: {
      value: (_vm.conf.cardId),
      callback: function($$v) {
        _vm.$set(_vm.conf, "cardId", $$v)
      },
      expression: "conf.cardId"
    }
  }, _vm._l((_vm.cardList), function(c) {
    return _c('i-option', {
      key: c.cardId,
      attrs: {
        "value": c.cardId
      }
    }, [_vm._v(_vm._s(c.cardName))])
  }), 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("可预约场地")]), _vm._v(" "), _c('td', [_c('CheckboxGroup', {
    model: {
      value: (_vm.conf.vaIdList),
      callback: function($$v) {
        _vm.$set(_vm.conf, "vaIdList", $$v)
      },
      expression: "conf.vaIdList"
    }
  }, _vm._l((_vm.venueAreaList), function(va) {
    return _c('checkbox', {
      key: va.vaId,
      attrs: {
        "label": va.vaId
      }
    }, [_vm._v(_vm._s(va.areaName))])
  }), 1), _vm._v(" "), _c('div', {
    staticClass: "p10"
  }, [_c('a', {
    on: {
      "click": _vm.checkAllArea
    }
  }, [_vm._v("全选")]), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v(" "), _c('a', {
    on: {
      "click": _vm.uncheckAllArea
    }
  }, [_vm._v("全选")])])], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("场地预约是否计费")]), _vm._v(" "), _c('td', [_c('i-switch', {
    attrs: {
      "size": "large"
    },
    model: {
      value: (_vm.conf.hasVenueBookingFee),
      callback: function($$v) {
        _vm.$set(_vm.conf, "hasVenueBookingFee", $$v)
      },
      expression: "conf.hasVenueBookingFee"
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
  }, [_vm._v("否")])])], 1)])])]), _vm._v(" "), _c('div', {
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
      "click": _vm.saveConf
    }
  }, [_vm._v("提交")]), _vm._v("\n\t\t\t \n\t\t\t"), (_vm.conf && _vm.conf.confId) ? _c('i-button', {
    on: {
      "click": _vm.openCopyConfDlg
    }
  }, [_vm._v("批量复制")]) : _vm._e(), _vm._v("\n\t\t\t \n\t\t\t"), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.confInfoDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "批量复制配置",
      "width": "800",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "",
      "mask-closable": false
    },
    model: {
      value: (_vm.copyDlg),
      callback: function($$v) {
        _vm.copyDlg = $$v
      },
      expression: "copyDlg"
    }
  }, [_c('div', {
    staticClass: "orange"
  }, [_vm._v("请选择需要配置的会员卡：")]), _vm._v(" "), _c('div', {
    staticClass: "card-list"
  }, [_c('CheckboxGroup', {
    model: {
      value: (_vm.copyCardIdList),
      callback: function($$v) {
        _vm.copyCardIdList = $$v
      },
      expression: "copyCardIdList"
    }
  }, [_c('p', [_vm._v("期限卡")]), _vm._v(" "), _vm._l((_vm.cardList), function(c) {
    return (c.cardType === 1) ? _c('checkbox', {
      key: c.cardId,
      attrs: {
        "label": c.cardId
      }
    }, [_vm._v(_vm._s(c.cardName))]) : _vm._e()
  }), _vm._v(" "), _c('p', [_vm._v("次卡")]), _vm._v(" "), _vm._l((_vm.cardList), function(c) {
    return (c.cardType === 2) ? _c('checkbox', {
      key: c.cardId,
      attrs: {
        "label": c.cardId
      }
    }, [_vm._v(_vm._s(c.cardName))]) : _vm._e()
  }), _vm._v(" "), _c('p', [_vm._v("储值卡")]), _vm._v(" "), _vm._l((_vm.cardList), function(c) {
    return (c.cardType === 3) ? _c('checkbox', {
      key: c.cardId,
      attrs: {
        "label": c.cardId
      }
    }, [_vm._v(_vm._s(c.cardName))]) : _vm._e()
  })], 2)], 1), _vm._v(" "), _c('div', {
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
      "click": _vm.copyConf
    }
  }, [_vm._v("提交")]), _vm._v("\n\t\t\t \n\t\t\t"), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.copyDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "190"
    }
  }, [_vm._v("会员卡")]), _vm._v(" "), _c('th', [_vm._v("可预约场地")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("场地是否计费")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2521:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('table', [_c('tr', [_c('td', {
    attrs: {
      "width": "170"
    }
  }, [_c('div', {
    staticClass: "member-query-box"
  }, [_c('div', {
    staticClass: "l",
    staticStyle: {
      "width": "90px"
    },
    on: {
      "click": function($event) {
        _vm.memberSelectDlg = true
      }
    }
  }, [(_vm.member.name) ? _c('span', [_vm._v(_vm._s(_vm.member.name))]) : _c('span', {
    staticClass: "gray"
  }, [_vm._v("查询会员")])]), _vm._v(" "), _c('div', {
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
  })], 1)])]), _vm._v(" "), (_vm.returnFeePermit) ? _c('td', [_c('i-button', {
    on: {
      "click": _vm.returnCancelFee
    }
  }, [_vm._v("批量退回取消扣费")])], 1) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "mytbl mt15"
  }, [_c('table', [_c('tr', [(_vm.returnFeePermit) ? _c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("选择")]) : _vm._e(), _vm._v(" "), _c('th', {
    attrs: {
      "width": "85"
    }
  }, [_vm._v("会员")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("场地")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "180"
    }
  }, [_vm._v("场地使用时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("预约操作时间")]), _vm._v(" "), _c('th', [_vm._v("计费会员卡")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("预约计费")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("取消人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("取消时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("取消扣费")])]), _vm._v(" "), _vm._l((_vm.cancelLogList), function(log, idx) {
    return (_vm.cancelLogList) ? _c('tr', [(_vm.returnFeePermit) ? _c('td', [(log.cancelPayment) ? [_c('div', {
      staticClass: "ckbox",
      on: {
        "click": function($event) {
          return _vm.selectLog(idx)
        }
      }
    }, [(!_vm.logCkList[idx]) ? _c('i', {
      staticClass: "iconfont icon-checkbox-empty ckbox-0"
    }) : _c('i', {
      staticClass: "iconfont icon-checkbox-checked ckbox-1"
    })])] : _vm._e()], 2) : _vm._e(), _vm._v(" "), _c('td', [_c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.viewMebmerInfo(log.memberId)
        }
      }
    }, [_vm._v(_vm._s(log.memberName))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(log.areaName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(log.bookingDate)) + "   " + _vm._s(log.bookingBeginTime) + " ~ " + _vm._s(log.bookingEndTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(log.bookingCreateTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(log.cardName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(log.cardPayment) + " " + _vm._s(_vm.g.Dict.CardUnitName[log.cardType]))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(log.createUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(log.createTime))]), _vm._v(" "), _c('td', [(log.cancelPayment) ? [_vm._v(_vm._s(log.cancelPayment) + " " + _vm._s(_vm.g.Dict.CardUnitName[log.cardType]))] : (log.returnFee) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.viewFeelReturnDetail(log)
        }
      }
    }, [_vm._v("扣费已退")]) : _c('i', {
      staticClass: "gray"
    }, [_vm._v("无")])], 2)]) : _vm._e()
  })], 2)]), _vm._v(" "), (_vm.cancelLogList && !_vm.cancelLogList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n\t\t暂无数据\n\t")]) : _vm._e(), _vm._v(" "), (_vm.cancelLogList && _vm.cancelLogList.length) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.cancelLogCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryVenueAreaBookingCancelLog
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('modal', {
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
      "member-id": _vm.selectMemberId
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "退回取消扣费",
      "width": "600",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭"
    },
    model: {
      value: (_vm.returnCancelFeeDlg),
      callback: function($$v) {
        _vm.returnCancelFeeDlg = $$v
      },
      expression: "returnCancelFeeDlg"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 5,
      "placeholder": "退回备注"
    },
    model: {
      value: (_vm.returnRemark),
      callback: function($$v) {
        _vm.returnRemark = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "returnRemark"
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
      "click": _vm.submitReturnCancelFee
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.returnCancelFeeDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "取消扣费退回记录",
      "width": "600",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭"
    },
    model: {
      value: (_vm.returnCancelFeeDetailDlg),
      callback: function($$v) {
        _vm.returnCancelFeeDetailDlg = $$v
      },
      expression: "returnCancelFeeDetailDlg"
    }
  }, [(_vm.selectedLog) ? _c('div', {
    staticClass: "tblform"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("退回时间：")]), _c('td', [_vm._v(_vm._s(_vm.selectedLog.returnTime))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("退回人：")]), _c('td', [_vm._v(_vm._s(_vm.selectedLog.returnStaffName))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("退回费用：")]), _c('td', [_vm._v(_vm._s(_vm.selectedLog.returnFee) + " " + _vm._s(_vm.g.Dict.CardUnitName[_vm.selectedLog.cardType]))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("退回备注：")]), _c('td', [_vm._v(_vm._s(_vm.selectedLog.returnRemark))])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.returnCancelFeeDetailDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2535:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_c('DatePicker', {
    staticClass: "date",
    attrs: {
      "type": "date",
      "format": "yyyy-MM-dd",
      "placeholder": "场地使用开始日期"
    },
    model: {
      value: (_vm.vab.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.vab, "beginDate", $$v)
      },
      expression: "vab.beginDate"
    }
  }), _vm._v(" ~\n\t\t"), _c('DatePicker', {
    staticClass: "date",
    attrs: {
      "type": "date",
      "format": "yyyy-MM-dd",
      "placeholder": "场地使用结束日期"
    },
    model: {
      value: (_vm.vab.endDate),
      callback: function($$v) {
        _vm.$set(_vm.vab, "endDate", $$v)
      },
      expression: "vab.endDate"
    }
  }), _vm._v("\n\t\t \n\t\t"), _c('input-int', {
    staticClass: "input",
    attrs: {
      "placeholder": "会员手机号"
    },
    model: {
      value: (_vm.vab.memberPhone),
      callback: function($$v) {
        _vm.$set(_vm.vab, "memberPhone", $$v)
      },
      expression: "vab.memberPhone"
    }
  }), _vm._v(" \n\t\t"), _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.queryVabcList(null)
      }
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('div', {
    staticClass: "mytbl mt15"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.vab.dataList), function(b, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(b.bookingDate)) + "   " + _vm._s(_vm.g.Util.formatTime(b.bookingBeginTime)) + " ~ " + _vm._s(_vm.g.Util.formatTime(b.bookingEndTime)))]), _vm._v(" "), _c('td', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.viewMember(b.memberId)
        }
      }
    }, [_vm._v(_vm._s(b.memberName))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(b.areaName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(b.cardName))]), _vm._v(" "), _c('td', [(b.cardType === 1) ? _c('span', {
      staticClass: "gray"
    }, [_vm._v("期限卡不计费")]) : (!_vm.g.Util.isEmpty(b.mcPayment)) ? _c('span', [_vm._v(_vm._s(b.mcPayment) + " " + _vm._s(_vm.g.Dict.CardUnitName[b.cardType]))]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(b.checkinTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(b.checkoutTime) + "\n\t\t\t\t\t\t"), (b.checkoutTime) ? _c('span', {
      staticClass: "l5"
    }, [_vm._v("（" + _vm._s(Date.new(b.checkoutTime).diffMins(Date.new(b.checkinTime))) + " 分钟）")]) : _vm._e()]), _vm._v(" "), _c('td', [(!b.checkoutTime) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.openCheckoutDlg(b)
        }
      }
    }, [_vm._v("签出")]) : _vm._e()])])
  })], 2), _vm._v(" "), (_vm.vab.count) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.vab.count,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryVabcList
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.vab.dataList && !_vm.vab.dataList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()])], 1), _vm._v(" "), _c('modal', {
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
      "member-id": _vm.viewMemberId
    },
    model: {
      value: (_vm.viewMemberDlg),
      callback: function($$v) {
        _vm.viewMemberDlg = $$v
      },
      expression: "viewMemberDlg"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "场地签出",
      "width": "600",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.checkoutDlg),
      callback: function($$v) {
        _vm.checkoutDlg = $$v
      },
      expression: "checkoutDlg"
    }
  }, [_vm._v("\n\t\t请选择签出时间：\n\t\t"), _c('date-picker', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "datetime",
      "format": "yyyy-MM-dd HH:mm:ss"
    },
    model: {
      value: (_vm.checkoutDate),
      callback: function($$v) {
        _vm.checkoutDate = $$v
      },
      expression: "checkoutDate"
    }
  }), _vm._v("\n\t\t \n\t\t"), _c('i-button', {
    on: {
      "click": _vm.submitCheckout
    }
  }, [_vm._v("提交")])], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "190"
    }
  }, [_vm._v("使用时间")]), _vm._v(" "), _c('th', [_vm._v("会员")]), _vm._v(" "), _c('th', [_vm._v("场地")]), _vm._v(" "), _c('th', [_vm._v("计费卡")]), _vm._v(" "), _c('th', [_vm._v("消费")]), _vm._v(" "), _c('th', [_vm._v("签到时间")]), _vm._v(" "), _c('th', [_vm._v("签出时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2536:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "more-tools"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "more-tools",
      "page": "venue-booking"
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
    staticClass: "query"
  }, [_c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "160px"
    },
    attrs: {
      "placeholder": "请选择场馆"
    },
    on: {
      "on-change": _vm.changeVenue
    },
    model: {
      value: (_vm.query.venueId),
      callback: function($$v) {
        _vm.$set(_vm.query, "venueId", $$v)
      },
      expression: "query.venueId"
    }
  }, _vm._l((_vm.venueList), function(v) {
    return _c('i-option', {
      key: v.venueId,
      attrs: {
        "value": v.venueId,
        "label": v.venueName
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(v.venueName) + "\n\t\t\t\t\t\t\t\t\t\t\t"), (!_vm.g.data.user.isShopOwner) ? _c('span', {
      staticClass: "r small"
    }, [(_vm.staffEntryChargeItems.contains(v.itemId)) ? _c('i', {
      staticClass: "gray"
    }, [_vm._v("✔ 有权限")]) : _c('i', {
      staticClass: "gray"
    }, [_vm._v("✘ 无权限")])]) : _vm._e()])
  }), 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('Date-picker', {
    staticStyle: {
      "width": "115px"
    },
    attrs: {
      "type": "date",
      "placeholder": "选择预约日期"
    },
    on: {
      "on-change": _vm.changeBookingDate
    },
    model: {
      value: (_vm.query.bookingDate),
      callback: function($$v) {
        _vm.$set(_vm.query, "bookingDate", $$v)
      },
      expression: "query.bookingDate"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.hoursConfDlg = true
      }
    }
  }, [_vm._v("时间段设置 "), _c('i', {
    staticClass: "small iconfont icon-arrow-down"
  })])], 1), _vm._v(" "), (_vm.query.venueId) ? _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    attrs: {
      "icon": "md-refresh",
      "title": "刷新"
    },
    on: {
      "click": _vm.reloadData
    }
  }, [_vm._v("刷新")])], 1) : _vm._e(), _vm._v(" "), (_vm.today.compareDatePart(_vm.query.bookingDate) === 0 && _vm.hasSelectVenuePermit) ? _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    attrs: {
      "icon": "md-checkmark"
    },
    on: {
      "click": _vm.openNewCheckinDlg
    }
  }, [_vm._v("签到")])], 1) : _vm._e(), _vm._v(" "), (_vm.today.compareDatePart(_vm.query.bookingDate) === 0 && _vm.hasSelectVenuePermit) ? _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    attrs: {
      "icon": "md-alarm",
      "title": "提醒当前时间段到点的预约场地"
    },
    on: {
      "click": _vm.remindBooking
    }
  })], 1) : _vm._e()])]), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right"
    }
  }, [(_vm.confEditable) ? _c('ButtonGroup', [_c('i-button', {
    attrs: {
      "type": "default",
      "icon": "logo-yen"
    },
    on: {
      "click": _vm.openVenueAreaScheduleDlg
    }
  }, [_vm._v("场地计费设置")]), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "default",
      "icon": "ios-settings"
    },
    on: {
      "click": function($event) {
        return _vm.$router.push('/venue-conf')
      }
    }
  }, [_vm._v("场馆与场地设置")])], 1) : _vm._e(), _vm._v(" "), (_vm.hasSelectVenuePermit) ? _c('span', [_c('Dropdown', {
    attrs: {
      "placement": "bottom-end",
      "trigger": "hover"
    },
    on: {
      "on-click": _vm.changeMoreOpts
    }
  }, [_c('i-button', [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t更多 "), _c('Icon', {
    attrs: {
      "type": "ios-arrow-down"
    }
  })], 1), _vm._v(" "), _c('DropdownMenu', {
    attrs: {
      "slot": "list"
    },
    slot: "list"
  }, [(_vm.enableAiMachVenueArea) ? _c('DropdownItem', {
    attrs: {
      "name": "vabcList"
    }
  }, [_vm._v("预约签到列表")]) : _vm._e(), _vm._v(" "), _c('DropdownItem', {
    attrs: {
      "name": "vab"
    }
  }, [_vm._v("场地预约明细")]), _vm._v(" "), _c('DropdownItem', {
    attrs: {
      "name": "vbCancelLog"
    }
  }, [_vm._v("预约取消日志")]), _vm._v(" "), _c('DropdownItem', {
    attrs: {
      "name": "vaPauseLog"
    }
  }, [_vm._v("场地停用日志")]), _vm._v(" "), (_vm.enablePlCardVenueConf) ? _c('DropdownItem', {
    attrs: {
      "name": "plConf"
    }
  }, [_vm._v("私教课预约配置")]) : _vm._e(), _vm._v(" "), (_vm.confEditable) ? _c('DropdownItem', {
    attrs: {
      "name": "noticeConf"
    }
  }, [_vm._v("预约通知设置")]) : _vm._e()], 1)], 1)], 1) : _vm._e()], 1)])])]), _vm._v(" "), (_vm.venueList && _vm.venueList.length) ? _c('section', [_c('div', {
    staticClass: "mytbl booking"
  }, [_c('table', {
    staticClass: "booking-grid"
  }, [_c('tr', [_c('th', {
    staticStyle: {
      "min-width": "60px"
    }
  }, [_vm._v("场地/时间")]), _vm._v(" "), _vm._l((_vm.hours), function(h) {
    return _c('th', {
      style: ('width: ' + (100 / _vm.hours.length).toFixed(1) + '%')
    }, [(h < 10) ? [_vm._v("0")] : _vm._e(), _vm._v(_vm._s(h) + ":00\n\t\t\t\t\t\t\t")], 2)
  })], 2), _vm._v(" "), _vm._l((_vm.venueAreaList), function(a) {
    return (a.status === 0) ? _c('tr', [_c('th', [_vm._v(_vm._s(a.areaName))]), _vm._v(" "), _vm._l((_vm.hours), function(h) {
      return _c('td', {
        key: _vm.key = a.vaId + '-' + h
      }, [((_vm.vai = _vm.venueAreaItemMap[_vm.key])) ? _c('div', {
        staticClass: "bk",
        class: {
          'stat-1': !_vm.isBeforeToday && _vm.vai.firstHalfStatus === 0,
          'stat-booking': _vm.vai.firstHalfStatus === 1 && (!_vm.venueAreaBookingMap[_vm.key + '-1'] || !_vm.venueAreaBookingMap[_vm.key + '-1'].checkinUid),
          'stat-checkin': _vm.vai.firstHalfStatus === 1 && (!_vm.venueAreaBookingMap[_vm.key + '-1'] || _vm.venueAreaBookingMap[_vm.key + '-1'].checkinUid),
          'stat-3': (_vm.isBeforeToday && _vm.vai.firstHalfStatus !== 1) || _vm.vai.firstHalfStatus === 2,
          'stat-4': _vm.reminderVenues[_vm.key + '-1']
        },
        attrs: {
          "title": '【场地】' + a.areaName + '  【时间】' + h + ':00'
        },
        on: {
          "click": function($event) {
            return _vm.openBookingDlg(a.vaId + '-' + h, 1)
          }
        }
      }, [(_vm.vai.firstHalfStatus === 0) ? _c('div', {
        staticClass: "hour"
      }, [_vm._v(_vm._s(h) + ":00")]) : _vm._e(), _vm._v(" "), (_vm.reminderVenues[_vm.key]) ? _c('div', {
        staticClass: "area-name"
      }, [_vm._v(_vm._s(a.areaName))]) : _vm._e(), _vm._v(" "), (_vm.vai.firstHalfStatus === 1) ? _c('div', [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(h) + ":00\n\t\t\t\t\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), ((_vm.bk = _vm.venueAreaBookingMap[_vm.key + '-1'])) ? _c('div', {
        staticClass: "user"
      }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.bk.memberName ? _vm.bk.memberName.shorten(3) : _vm.bk.userName.shorten(3)) + "\n\t\t\t\t\t\t\t\t\t\t")]) : _vm._e()]) : _c('div', {
        staticClass: "stat-3"
      }, [_vm._v(" ")]), _vm._v(" "), _c('div', {
        staticClass: "break-line"
      }), _vm._v(" "), ((_vm.vai = _vm.venueAreaItemMap[_vm.key])) ? _c('div', {
        staticClass: "bk",
        class: {
          'stat-1': !_vm.isBeforeToday && (_vm.vai.secondHalfStatus === 0),
          'stat-booking': _vm.vai.secondHalfStatus === 1 && (!_vm.venueAreaBookingMap[_vm.key + '-2'] || !_vm.venueAreaBookingMap[_vm.key + '-2'].checkinUid),
          'stat-checkin': _vm.vai.secondHalfStatus === 1 && (!_vm.venueAreaBookingMap[_vm.key + '-2'] || _vm.venueAreaBookingMap[_vm.key + '-2'].checkinUid),
          'stat-3': (_vm.isBeforeToday && _vm.vai.secondHalfStatus !== 1) || _vm.vai.secondHalfStatus === 2,
          'stat-4': _vm.reminderVenues[_vm.key + '-2']
        },
        attrs: {
          "title": '【场地】' + a.areaName + '  【时间】' + h + ':30'
        },
        on: {
          "click": function($event) {
            return _vm.openBookingDlg(a.vaId + '-' + h, 2)
          }
        }
      }, [(_vm.vai.secondHalfStatus === 0) ? _c('div', {
        staticClass: "price"
      }, [_vm._v("￥" + _vm._s(_vm.g.Util.round(_vm.vai.cashPrice)))]) : _vm._e(), _vm._v(" "), (_vm.reminderVenues[_vm.key]) ? _c('div', {
        staticClass: "area-name"
      }, [_vm._v(_vm._s(a.areaName))]) : _vm._e(), _vm._v(" "), (_vm.vai.secondHalfStatus === 1) ? _c('div', [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(h) + ":30\n\t\t\t\t\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), ((_vm.bk = _vm.venueAreaBookingMap[_vm.key + '-2'])) ? _c('div', {
        staticClass: "user"
      }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.bk.memberName ? _vm.bk.memberName.shorten(3) : _vm.bk.userName.shorten(3)) + "\n\t\t\t\t\t\t\t\t\t\t")]) : _vm._e()]) : _c('div', {
        staticClass: "stat-3"
      }, [_vm._v(" ")])])
    })], 2) : _vm._e()
  })], 2), _vm._v(" "), (!_vm.query.venueId) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("请先选择场馆")]) : (_vm.venueAreaList && _vm.venueAreaList.length === 0) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("尚未设置场地")]) : _vm._e()]), _vm._v(" "), (_vm.venueAreaList && _vm.venueAreaList.length) ? _c('div', {
    staticStyle: {
      "margin": "20px 0 5px 0"
    }
  }, [_vm._m(0)]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "场地预约计费设置",
      "width": "1100",
      "styles": {
        'top': '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "",
      "mask-closable": false
    },
    model: {
      value: (_vm.venueAreaItemConfDlg),
      callback: function($$v) {
        _vm.venueAreaItemConfDlg = $$v
      },
      expression: "venueAreaItemConfDlg"
    }
  }, [(_vm.venueAreaItemConfDlg) ? _c('venue-area-item-conf', {
    attrs: {
      "venue": _vm.selectVenue,
      "after-submit": _vm.afterSubmitVenueAreaItemConf
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "预约时间段设置",
      "width": "600",
      "styles": {
        'top': '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.hoursConfDlg),
      callback: function($$v) {
        _vm.hoursConfDlg = $$v
      },
      expression: "hoursConfDlg"
    }
  }, [_c('div', {
    staticClass: "hours-conf"
  }, [_c('CheckboxGroup', {
    model: {
      value: (_vm.selectHours),
      callback: function($$v) {
        _vm.selectHours = $$v
      },
      expression: "selectHours"
    }
  }, _vm._l((_vm.initHours), function(h) {
    return _c('Checkbox', {
      key: h,
      attrs: {
        "label": h
      }
    }, [(h < 10) ? [_vm._v("0")] : _vm._e(), _vm._v(_vm._s(h) + ":00")], 2)
  }), 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-submit center",
    staticStyle: {
      "margin-top": "-15px"
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
      "click": _vm.confirmHoursConf
    }
  }, [_vm._v("确定")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.hoursConfDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "场地预约/停用",
      "width": "900",
      "styles": {
        'top': '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "",
      "mask-closable": false
    },
    model: {
      value: (_vm.newVenueAreaBookingDlg),
      callback: function($$v) {
        _vm.newVenueAreaBookingDlg = $$v
      },
      expression: "newVenueAreaBookingDlg"
    }
  }, [(_vm.newVenueAreaBookingDlg) ? _c('table', {
    staticClass: "tblform booking-conf booking-form",
    staticStyle: {
      "margin-right": "20px"
    }
  }, [_c('tr', [_c('th', [_vm._v("选择场地")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "padding-top": "0"
    }
  }, [_c('div', {
    staticClass: "box"
  }, [_c('CheckboxGroup', {
    model: {
      value: (_vm.venueAreaBooking.vaIdList),
      callback: function($$v) {
        _vm.$set(_vm.venueAreaBooking, "vaIdList", $$v)
      },
      expression: "venueAreaBooking.vaIdList"
    }
  }, _vm._l((_vm.venueAreaList), function(a) {
    return _c('Checkbox', {
      key: a.vaId,
      attrs: {
        "label": a.vaId
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(a.areaName) + "\n\t\t\t\t\t\t\t\t")])
  }), 1)], 1)])]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "valign": "top"
    }
  }, [_c('div', {
    staticClass: "p5"
  }, [_vm._v("选择日期")])]), _vm._v(" "), _c('td', [(!_vm.enableBookingDateList && _vm.venueAreaBooking.bookingDate) ? _c('span', [_c('b', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.g.Util.formatDate(_vm.venueAreaBooking.bookingDate)))]), _vm._v("\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), _c('checkbox', {
    model: {
      value: (_vm.enableBookingDateList),
      callback: function($$v) {
        _vm.enableBookingDateList = $$v
      },
      expression: "enableBookingDateList"
    }
  }, [_vm._v("批量日期预约")]), _vm._v(" "), (_vm.enableBookingDateList) ? _c('div', [_c('date-picker', {
    staticClass: "daterange",
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "placeholder": "请选择开始日期",
      "type": "date",
      "format": "yyyy-MM-dd",
      "placement": "bottom-end"
    },
    on: {
      "on-change": _vm.changeBookingDateInBookingDlg
    },
    model: {
      value: (_vm.bookingDlg.bookingBeginDate),
      callback: function($$v) {
        _vm.$set(_vm.bookingDlg, "bookingBeginDate", $$v)
      },
      expression: "bookingDlg.bookingBeginDate"
    }
  }), _vm._v("\n\t\t\t\t\t\t\t~\n\t\t\t\t\t\t\t"), _c('date-picker', {
    staticClass: "daterange",
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "placeholder": "请选择结束日期",
      "type": "date",
      "format": "yyyy-MM-dd",
      "placement": "bottom-end"
    },
    on: {
      "on-change": _vm.changeBookingDateInBookingDlg
    },
    model: {
      value: (_vm.bookingDlg.bookingEndDate),
      callback: function($$v) {
        _vm.$set(_vm.bookingDlg, "bookingEndDate", $$v)
      },
      expression: "bookingDlg.bookingEndDate"
    }
  }), _vm._v(" "), (_vm.bookingDlg.bookingDateList && _vm.bookingDlg.bookingDateList.length) ? _c('div', {
    staticClass: "datelist"
  }, [_c('checkbox-group', {
    model: {
      value: (_vm.venueAreaBooking.bookingDateList),
      callback: function($$v) {
        _vm.$set(_vm.venueAreaBooking, "bookingDateList", $$v)
      },
      expression: "venueAreaBooking.bookingDateList"
    }
  }, _vm._l((_vm.bookingDlg.bookingDateList), function(d) {
    return _c('checkbox', {
      key: d,
      attrs: {
        "label": d
      }
    }, [_vm._v(_vm._s(d))])
  }), 1)], 1) : _vm._e()], 1) : _vm._e()], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("选择时间")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "box"
  }, [_c('CheckboxGroup', {
    model: {
      value: (_vm.venueAreaBooking.hourArr),
      callback: function($$v) {
        _vm.$set(_vm.venueAreaBooking, "hourArr", $$v)
      },
      expression: "venueAreaBooking.hourArr"
    }
  }, [_vm._l((_vm.hours), function(h) {
    return [_c('Checkbox', {
      key: h + '-1',
      attrs: {
        "label": h + '-1',
        "disabled": (!_vm.venueAreaItemMap[_vm.venueAreaBooking.vaId + '-' + h] || _vm.venueAreaItemMap[_vm.venueAreaBooking.vaId + '-' + h].firstHalfStatus !== 0)
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(h < 10 ? '0' : '') + _vm._s(h) + ":00\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('Checkbox', {
      key: h + '-2',
      attrs: {
        "label": h + '-2',
        "disabled": (!_vm.venueAreaItemMap[_vm.venueAreaBooking.vaId + '-' + h] || _vm.venueAreaItemMap[_vm.venueAreaBooking.vaId + '-' + h].secondHalfStatus !== 0)
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(h < 10 ? '0' : '') + _vm._s(h) + ":30\n\t\t\t\t\t\t\t\t\t")])]
  })], 2)], 1)])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("预约会员")]), _vm._v(" "), _c('td', [_c('member-query-input', {
    staticStyle: {
      "display": "inline-block"
    },
    on: {
      "afterQuery": _vm.afterQueryMember
    },
    model: {
      value: (_vm.member.flag),
      callback: function($$v) {
        _vm.$set(_vm.member, "flag", $$v)
      },
      expression: "member.flag"
    }
  }), _vm._v("\n\t\t\t\t\t\t \n")], 1)]), _vm._v(" "), (_vm.memberCardList && _vm.memberCardList.length) ? _c('tr', [_c('th', [_vm._v("计费会员卡")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "box",
    staticStyle: {
      "padding-top": "0"
    }
  }, [_c('RadioGroup', {
    attrs: {
      "vertical": ""
    },
    model: {
      value: (_vm.venueAreaBooking.mcId),
      callback: function($$v) {
        _vm.$set(_vm.venueAreaBooking, "mcId", $$v)
      },
      expression: "venueAreaBooking.mcId"
    }
  }, _vm._l((_vm.memberCardList), function(mc) {
    return (!_vm.hasMemberCardNo || mc.isFind) ? _c('Radio', {
      key: mc.mcId,
      attrs: {
        "label": mc.mcId,
        "disabled": (!_vm.venueAreaBooking.cardIdList.contains(mc.cardId)) || mc.status != 0
      }
    }, [_c('span', {
      class: {
        gray: !_vm.venueAreaBooking.cardIdList.contains(mc.cardId)
      }
    }, [_vm._v(_vm._s(mc.cardName))]), _vm._v(" "), (!_vm.venueAreaBooking.cardIdList.contains(mc.cardId)) ? _c('i', {
      staticClass: "l5 gray small"
    }, [_vm._v("（不支持此卡）")]) : (mc.cardType === 2) ? _c('span', [_vm._v("（剩余 "), _c('b', [_vm._v(_vm._s(mc.currentTimes))]), _vm._v(" 次）")]) : (mc.cardType === 3) ? _c('span', [_vm._v("（剩余 "), _c('b', [_vm._v(_vm._s(mc.currentAmount))]), _vm._v(" 元）")]) : _vm._e()]) : _vm._e()
  }), 1)], 1)])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-submit center"
  }, [(!_vm.enableBookingDateList && _vm.member.memberId && _vm.venueAreaBooking.mcId && _vm.today.compareDatePart(_vm.venueAreaBooking.bookingDate) === 0) ? _c('span', {
    staticClass: "input-box"
  }, [_c('checkbox', {
    model: {
      value: (_vm.autoCheckin),
      callback: function($$v) {
        _vm.autoCheckin = $$v
      },
      expression: "autoCheckin"
    }
  }, [_vm._v("预约后自动签到")])], 1) : _vm._e(), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "primary",
      "disabled": (!_vm.member.memberId || !_vm.venueAreaBooking.mcId)
    },
    on: {
      "click": _vm.createMemberAreaBooking
    }
  }, [_vm._v("确定预约")]), _vm._v(" "), (!_vm.member.name && _vm.venueBookingPausePermit) ? [_vm._v("\n\t\t\t\t\t \n\t\t\t\t\t"), _c('i-button', {
    attrs: {
      "icon": "ios-remove-circle"
    },
    on: {
      "click": function($event) {
        _vm.vaiPauseDlg = true
      }
    }
  }, [_vm._v("停用")])] : _vm._e(), _vm._v("\n\t\t\t\t \n\t\t\t\t"), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.newVenueAreaBookingDlg = false
      }
    }
  }, [_vm._v("关闭")])], 2), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "场地预约记录",
      "width": "600",
      "styles": {
        'top': '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.venueAreaBookingDlg),
      callback: function($$v) {
        _vm.venueAreaBookingDlg = $$v
      },
      expression: "venueAreaBookingDlg"
    }
  }, [(_vm.venueAreaBookingDlg) ? _c('table', {
    staticClass: "tblform booking-form",
    staticStyle: {
      "margin-right": "20px"
    }
  }, [(_vm.venueAreaBooking.memberName) ? _c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("预约会员：")]), _c('td', [_c('a', {
    staticClass: "big",
    on: {
      "click": function($event) {
        return _vm.viewMebmerInfo(_vm.venueAreaBooking.memberId)
      }
    }
  }, [_vm._v(_vm._s(_vm.venueAreaBooking.memberName))])])]) : (_vm.venueAreaBooking.userName) ? _c('tr', [_c('th', [_vm._v("预约客户：")]), _c('td', [_vm._v(_vm._s(_vm.venueAreaBooking.userName))])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', [_vm._v("预约场地：")]), _vm._v(" "), _c('td', [_c('b', {
    staticClass: "big orangered"
  }, [_vm._v(_vm._s(_vm.venueAreaBooking.areaName))])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("预约使用时间：")]), _vm._v(" "), _c('td', [_c('b', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.g.Util.formatDate(_vm.venueAreaBooking.bookingDate)) + "   " + _vm._s(_vm.venueAreaBooking.bookingHour) + ":"), (_vm.venueAreaBooking.hourType <= 1) ? [_vm._v("00")] : [_vm._v("30")]], 2), _vm._v("\n\t\t\t\t\t\t~\n\t\t\t\t\t\t"), _c('b', {
    staticClass: "big"
  }, [(_vm.venueAreaBooking.hourType === 1) ? [_vm._v(_vm._s(_vm.venueAreaBooking.bookingHour) + ":30")] : [_vm._v(_vm._s(_vm.venueAreaBooking.bookingHour + 1) + ":00")]], 2)])]), _vm._v(" "), (_vm.venueAreaBooking.cardName) ? _c('tr', [_c('th', [_vm._v("预约用卡：")]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.venueAreaBooking.cardName) + "\n\t\t\t\t\t\t"), (_vm.venueAreaBooking.cardNo || _vm.venueAreaBooking.cardOutsideNo) ? _c('span', {
    staticClass: "l10"
  }, [_vm._v("\n\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t"), (_vm.venueAreaBooking.cardNo) ? _c('span', [_vm._v("卡内号：" + _vm._s(_vm.venueAreaBooking.cardNo))]) : _vm._e(), _vm._v(" "), (_vm.venueAreaBooking.cardNo && _vm.venueAreaBooking.cardOutsideNo) ? _c('span', {
    staticClass: "spt"
  }, [_vm._v(" / ")]) : _vm._e(), _vm._v(" "), (_vm.venueAreaBooking.cardOutsideNo) ? _c('span', [_vm._v("卡表号：" + _vm._s(_vm.venueAreaBooking.cardOutsideNo))]) : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t")]) : _vm._e()])]) : _vm._e(), _vm._v(" "), (_vm.venueAreaBooking.cardPayment) ? _c('tr', [_c('th', [_vm._v("会员卡消费：")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.venueAreaBooking.cardPayment) + " " + _vm._s(_vm.g.Dict.CardUnitName[_vm.venueAreaBooking.cardType]))])]) : _vm._e(), _vm._v(" "), (_vm.venueAreaBooking.cashPayment) ? _c('tr', [_c('th', [_vm._v("现金消费：")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.venueAreaBooking.cashPayment) + " 元")])]) : _vm._e(), _vm._v(" "), (_vm.venueAreaBooking.cashPaymentChannel) ? _c('tr', [_c('th', [_vm._v("支付方式：")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.data.shop.paymentChannel[_vm.venueAreaBooking.cashPaymentChannel]))])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', [_vm._v("预约人/时间：")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.venueAreaBooking.createUname) + " / " + _vm._s(_vm.venueAreaBooking.createTime))])]), _vm._v(" "), (_vm.venueAreaBooking.checkinUid) ? _c('tr', [_c('th', [_vm._v("签到人/时间：")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.venueAreaBooking.checkinUname) + " / " + _vm._s(_vm.venueAreaBooking.checkinTime))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-submit center"
  }, [(!_vm.isBeforeToday || (_vm.isBeforeToday && _vm.g.data.user.isShopOwner)) ? _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.deleteVenueAreaBooking(_vm.venueAreaBooking.vabId)
      }
    }
  }, [_vm._v("取消预约")]) : _vm._e(), _vm._v("\n\t\t\t\t \n\t\t\t\t"), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.venueAreaBookingDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "场地预约签到",
      "width": "850",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "",
      "mask-closable": false
    },
    model: {
      value: (_vm.bookingCheckinDlg),
      callback: function($$v) {
        _vm.bookingCheckinDlg = $$v
      },
      expression: "bookingCheckinDlg"
    }
  }, [(_vm.bookingCheckinDlg) ? _c('div', {
    staticClass: "member-query-checkin"
  }, [_c('member-query-input', {
    on: {
      "afterQuery": _vm.afterQueryMemberForCheckin
    },
    model: {
      value: (_vm.member.flag),
      callback: function($$v) {
        _vm.$set(_vm.member, "flag", $$v)
      },
      expression: "member.flag"
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.memberVenueBookingList && _vm.memberVenueBookingList.length) ? _c('div', {
    staticClass: "bookings-ckin"
  }, [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', {
    attrs: {
      "valign": "top"
    }
  }, [_c('div', {
    staticClass: "hd"
  }, [_c('span', {
    staticClass: "tit"
  }, [_vm._v("请选择需要签到的预约记录：")])]), _vm._v(" "), _vm._l((_vm.memberVenueBookingList), function(b) {
    return _c('checkbox-group', {
      key: b.vabId,
      model: {
        value: (_vm.checkinBookingIds),
        callback: function($$v) {
          _vm.checkinBookingIds = $$v
        },
        expression: "checkinBookingIds"
      }
    }, [_c('checkbox', {
      class: {
        gray: b.checkinUid
      },
      attrs: {
        "disabled": !_vm.g.Util.isEmpty(b.checkinUid),
        "label": b.vabId
      }
    }, [(b.checkinUid) ? _c('span', [_vm._v("（已签到）")]) : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t\t\t预约使用时间【" + _vm._s(b.bookingHour) + ":" + _vm._s(b.hourType === 1 ? '00' : '30') + "\n\t\t\t\t\t\t\t\t\t~ " + _vm._s(b.hourType === 1 ? (b.bookingHour + ':30') : ((b.bookingHour + 1) + ':00')) + "】\n\t\t\t\t\t\t\t\t\t"), _c('span', {
      staticClass: "spt"
    }, [_vm._v("/")]), _vm._v("\n\t\t\t\t\t\t\t\t\t预约场地【" + _vm._s(_vm.venueAreaMap[b.vaId].areaName) + "】\n\t\t\t\t\t\t\t\t\t"), _c('span', {
      staticClass: "spt"
    }, [_vm._v("/")]), _vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(b.createUname) + " " + _vm._s(b.createTime) + " 预约")])], 1)
  })], 2), _vm._v(" "), _c('td', {
    staticClass: "member",
    attrs: {
      "align": "right",
      "width": "140",
      "valign": "top"
    }
  }, [_c('img', {
    staticClass: "photo",
    attrs: {
      "src": _vm.g.Util.getImgUrl(_vm.member.avatarPathname, 300, 300, 'eeeeee')
    }
  })])])])]) : _vm._e(), _vm._v(" "), (_vm.memberVenueBookingList && !_vm.memberVenueBookingList.length) ? _c('div', {
    staticClass: "warning center mt20"
  }, [_c('p', [_vm._v("此会员暂无当天的场地预约记录")])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "center form-submit",
    staticStyle: {
      "margin-top": "-10px"
    },
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [(_vm.memberVenueBookingList && _vm.memberVenueBookingList.length) ? _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submitBookingCheckins
    }
  }, [_vm._v("签到")]) : _vm._e(), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.bookingCheckinDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "场地预约明细",
      "width": "1100",
      "styles": {
        'top': '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.vabListDlg),
      callback: function($$v) {
        _vm.vabListDlg = $$v
      },
      expression: "vabListDlg"
    }
  }, [(_vm.vabListDlg) ? [_c('venue-area-booking-list', {
    attrs: {
      "venue-id": _vm.query.venueId,
      "afterCancelBooking": _vm.afterCancelBookingList
    }
  })] : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 2), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "场地预约取消日志",
      "width": "1100",
      "styles": {
        'top': '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.cancelLogDlg),
      callback: function($$v) {
        _vm.cancelLogDlg = $$v
      },
      expression: "cancelLogDlg"
    }
  }, [(_vm.cancelLogDlg) ? [_c('venue-booking-cancel-log', {
    attrs: {
      "venue-id": _vm.query.venueId
    }
  })] : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 2), _vm._v(" "), _c('modal', {
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
      "title": "场地预约停用",
      "width": "500",
      "styles": {
        top: '10px'
      },
      "mask-closable": false
    },
    model: {
      value: (_vm.vaiPauseDlg),
      callback: function($$v) {
        _vm.vaiPauseDlg = $$v
      },
      expression: "vaiPauseDlg"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "placeholder": "请输入停用原因或备注",
      "rows": 5
    },
    model: {
      value: (_vm.pauseRemark),
      callback: function($$v) {
        _vm.pauseRemark = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "pauseRemark"
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
      "click": function($event) {
        return _vm.pauseAreaItems()
      }
    }
  }, [_vm._v("提交")])], 1)], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "场地停用日志",
      "width": "1050",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.vaiPauseLogDlg),
      callback: function($$v) {
        _vm.vaiPauseLogDlg = $$v
      },
      expression: "vaiPauseLogDlg"
    }
  }, [(_vm.vaiPauseLogDlg) ? [_c('venue-area-item-pause-log-view', {
    attrs: {
      "venue-id": _vm.query.venueId
    }
  })] : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 2), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "私教课预约配置",
      "width": "900",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "mask-closable": false
    },
    model: {
      value: (_vm.plCardVenueConfDlg),
      callback: function($$v) {
        _vm.plCardVenueConfDlg = $$v
      },
      expression: "plCardVenueConfDlg"
    }
  }, [(_vm.plCardVenueConfDlg) ? [_c('pl-card-venue-conf', {
    attrs: {
      "venue-id": _vm.query.venueId
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.plCardVenueConfDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)] : _vm._e()], 2), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "场地预约通知设置",
      "width": "600",
      "styles": {
        'top': '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.noticeConfDlg),
      callback: function($$v) {
        _vm.noticeConfDlg = $$v
      },
      expression: "noticeConfDlg"
    }
  }, [_c('section', [_c('checkbox', {
    model: {
      value: (_vm.enableSmsNoticeForStaffVenueBooking),
      callback: function($$v) {
        _vm.enableSmsNoticeForStaffVenueBooking = $$v
      },
      expression: "enableSmsNoticeForStaffVenueBooking"
    }
  }, [_vm._v("员工代预约时，发送短信通知给会员")])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-submit center",
    staticStyle: {
      "margin-top": "-15px"
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
      "click": _vm.saveNoticeConf
    }
  }, [_vm._v("确定")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.noticeConfDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "场地预约签到列表",
      "width": "1000",
      "styles": {
        'top': '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.bookingCheckinListDlg),
      callback: function($$v) {
        _vm.bookingCheckinListDlg = $$v
      },
      expression: "bookingCheckinListDlg"
    }
  }, [(_vm.bookingCheckinListDlg && _vm.query.venueId) ? [_c('venue-area-booking-checkin', {
    attrs: {
      "venue-id": _vm.query.venueId
    }
  })] : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.bookingCheckinListDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', {
    attrs: {
      "align": "right"
    }
  }, [_c('ul', {
    staticClass: "booking-flags"
  }, [_c('li', [_c('span', {
    staticClass: "stat-1"
  }, [_vm._v(" ")]), _vm._v(" 可预订")]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "stat-booking"
  }, [_vm._v(" ")]), _vm._v(" 已预订")]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "stat-checkin"
  }, [_vm._v(" ")]), _vm._v(" 已签到")]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "stat-3"
  }, [_vm._v(" ")]), _vm._v(" 不可预订")])])])])])
}]}

/***/ })

});