webpackJsonp([12],{

/***/ 1063:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1924)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1483),
  /* template */
  __webpack_require__(2336),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-30b54266",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1064:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1942)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1484),
  /* template */
  __webpack_require__(2354),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3901293f",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1065:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1938)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1485),
  /* template */
  __webpack_require__(2350),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-379af739",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1066:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2055)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1486),
  /* template */
  __webpack_require__(2467),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-763eb718",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

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

/***/ 1476:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	props: ['staffId'],
	data() {
		return {
			g: $,
			cardList: null,
			cardMap: {},
			cardCateList: null,
			cardCate: {
				cateId: null,
				cateName: null,
				cardIdArr: []
			},
			cardCateDlg: false,
			selectCarCateIdx: null
		};
	},

	created() {
		$.Req.service($.SvName.CARD_QUERY, { status: 0 }, ret => {
			this.cardList = ret.cardList;
			for (let c of ret.cardList) {
				this.cardMap[c.cardId] = c;
			}
			this.queryCardCate();
		});
	},

	methods: {
		queryCardCate() {
			$.Req.service($.SvName.CARD_CATE_QUERY, {}, ret => {
				for (let cc of ret.cardCateList) {
					let cardNames = [];
					for (let cardId of cc.cardIdList) {
						if (this.cardMap[parseInt(cardId)]) {
							cardNames.push(this.cardMap[parseInt(cardId)].cardName);
						}
					}
					cc.cardNames = cardNames.join('、');
				}
				this.cardCateList = ret.cardCateList;
			});
		},

		saveCardCate() {
			if (!this.cardCate.cateName) {
				$.Msg.error('请输入分组名称');
				return;
			}
			if (this.cardCate.cardIdArr.length === 0) {
				$.Msg.error('请选择会员卡');
				return;
			}

			let args = {
				actionType: this.cardCate.cateId ? 'U' : 'I',
				cardCate: {
					cateId: this.cardCate.cateId,
					cateName: this.cardCate.cateName
				}
			};
			this.cardCate.cardIdArr.sort();
			if (args.actionType === 'I') {
				args.cardIdList = this.cardCate.cardIdArr;
			} else {
				let preCardIds = this.cardCateList[this.selectCarCateIdx].cardIdList.join(',');
				let nowCardIds = this.cardCate.cardIdArr.join(',');
				if (preCardIds !== nowCardIds) {
					args.cardIdList = this.cardCate.cardIdArr;
				}
			}
			$.Req.service($.SvName.CARD_CATE_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryCardCate();
				this.cardCateDlg = false;
			}, true);
		},

		openNewCardCateDlg() {
			this.cardCate = {
				cateId: null,
				cateName: null,
				cardIdArr: []
			};
			this.cardCateDlg = true;
		},

		openCardCateDlg(idx) {
			this.selectCarCateIdx = idx;
			let cc = this.cardCateList[this.selectCarCateIdx];
			this.cardCate = {
				cateId: cc.cateId,
				cateName: cc.cateName,
				cardIdArr: cc.cardIdList
			};
			this.cardCateDlg = true;
		},

		delCardCate(cateId) {
			let args = {
				actionType: 'D',
				deleteId: cateId
			};
			$.Req.service($.SvName.CARD_CATE_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryCardCate();
				this.cardCateDlg = false;
			}, true);
		}
	}
});

/***/ }),

/***/ 1483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_cate_conf_vue__ = __webpack_require__(2239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_cate_conf_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__card_cate_conf_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
		components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, CardCateConf: __WEBPACK_IMPORTED_MODULE_1__card_cate_conf_vue___default.a },
		data() {
				return {
						g: $,
						menuList: $.PageMenus.advReports('shop-stat-adv-card-cate'),
						cardCateStatList: null,
						cardCateConfDlg: false,
						statMonth: 201910,
						sumStat: {},
						query: {
								queryType: 1,
								dates: [null, null],
								monthList: []
						},
						dateOptions: {
								disabledDate(date) {
										return date && date.valueOf() > Date.now();
								}
						}
				};
		},

		created() {
				this.initQueryMonths();
				this.queryCardCateStat();
		},

		methods: {
				initQueryMonths() {
						const MONTH_CNT = 3;
						let year,
						    month,
						    date = new Date();
						date.setDate(1);
						date.setMonth(date.getMonth() - 1);
						for (let i = 0; i < MONTH_CNT; i++) {
								year = date.getFullYear();
								month = date.getMonth();
								this.query.monthList.push({
										name: '{0}年{1}月'.format(date.getFullYear(), month + 1),
										value: date.getFullYear() * 100 + (month + 1)
								});
								date.setMonth(month - 1);
						}
						this.statMonth = this.query.monthList[0].value;
				},

				queryCardCateStat() {
						let args = {};
						if (this.query.queryType === 1) {
								args.month = this.statMonth;
						} else {
								if (!this.query.dates[0] || !this.query.dates[1]) {
										$.Dlg.error('请输入正确的日期段');
										return;
								}
								args.beginDate = Date.new(this.query.dates[0]);
								args.endDate = Date.new(this.query.dates[1]);
						}
						$.Req.service($.SvName.CARD_CATE_STAT_QUERY, args, ret => {
								this.cardCateStatList = ret.statList;
								this.sumStat = ret.sumStat;
						}, true);
				}
		}
});

/***/ }),

/***/ 1484:
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a },
  data() {
    return {
      g: $,
      menuList: $.PageMenus.advReports('shop-stat-adv-card-payment'),
      statMonth: 202009,
      statList: null,
      sum: {},
      query: {
        queryType: 1,
        dates: [null, null],
        monthList: []
      },
      dateOptions: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now();
        }
      },
      entryChargeItemList: null,
      pcList: null,
      gcList: null,
      chargeItemConfDlg: null,
      checkedGcIdList: [],
      checkedPcIdList: [],
      courseSelectDlg: null,
      selectChargeItemId: null,
      gcNameMap: {},
      pcNameMap: {},
      chargeItemCoursesMap: null
    };
  },

  created() {
    this.initQueryMonths();
    this.statEntryChargeItemCost();
    this.queryEntryChargeItemList();
    this.queryCourseList();
  },

  methods: {
    initQueryMonths() {
      const MONTH_CNT = 3;
      let year,
          month,
          date = new Date();
      date.setDate(1);
      date.setMonth(date.getMonth() - 1);
      for (let i = 0; i < MONTH_CNT; i++) {
        year = date.getFullYear();
        month = date.getMonth();
        this.query.monthList.push({
          name: '{0}年{1}月'.format(date.getFullYear(), month + 1),
          value: date.getFullYear() * 100 + (month + 1)
        });
        date.setMonth(month - 1);
      }
      this.statMonth = this.query.monthList[0].value;
    },

    statEntryChargeItemCost() {
      let args = {};
      if (this.query.queryType === 1) {
        args.month = this.statMonth;
      } else {
        if (!this.query.dates[0] || !this.query.dates[1]) {
          $.Dlg.error('请输入正确的日期段');
          return;
        }
        args.beginDate = Date.new(this.query.dates[0]);
        args.endDate = Date.new(this.query.dates[1]);
      }

      $.Req.service($.SvName.ENTRY_CHARGE_ITEM_COST_STAT, args, ret => {
        this.statList = ret.statList;
        this.sum = {
          sumOfMonth: ret.sumOfMonth,
          sumOfYear: ret.sumOfYear,
          avgPerDayOfMonth: ret.avgPerDayOfMonth,
          avgPerDayOfYear: ret.avgPerDayOfYear
        };
      }, true);
    },

    queryEntryChargeItemList() {
      $.Req.service($.SvName.ENTRY_CHARGE_ITEM_QUERY, {}, ret => {
        this.entryChargeItemList = ret.entryChargeItemList;
      });
    },

    queryCourseList() {
      $.Req.queryGroupCourseBase(courseList => {
        this.gcList = courseList;
        for (let c of courseList) this.gcNameMap[c.courseId] = c.courseName;
      });
      $.Req.queryPrivateCourseBase(courseList => {
        this.pcList = courseList;
        for (let c of courseList) this.pcNameMap[c.courseId] = c.courseName;
      });
    },

    openChargeItemConfDlg() {
      if (this.chargeItemCoursesMap) {
        this.chargeItemConfDlg = true;
      } else {
        this.queryChargeItemCourses(() => {
          this.chargeItemConfDlg = true;
        });
      }
    },

    oepnChangeItemCoursesEditDlg(itemId) {
      this.selectChargeItemId = itemId;
      if (this.chargeItemCoursesMap[itemId] && this.chargeItemCoursesMap[itemId].gcIdList) {
        this.checkedGcIdList = this.chargeItemCoursesMap[itemId].gcIdList;
      } else {
        this.checkedGcIdList = [];
      }
      if (this.chargeItemCoursesMap[itemId] && this.chargeItemCoursesMap[itemId].pcIdList) {
        this.checkedPcIdList = this.chargeItemCoursesMap[itemId].pcIdList;
      } else {
        this.checkedPcIdList = [];
      }
      this.courseSelectDlg = true;
    },

    queryChargeItemCourses(callback) {
      $.Req.service($.SvName.CHARGE_ITEM_COUSES_QUERY, {}, ret => {
        this.chargeItemCoursesMap = {};
        for (let c of ret.chargeItemCoursesList) {
          this.chargeItemCoursesMap[c.itemId] = c;
        }
        if (callback) callback();
      }, true);
    },

    saveChargeItemCourseRel() {
      if ($.Util.isEmptyArray(this.checkedGcIdList) && $.Util.isEmptyArray(this.checkedPcIdList)) {
        $.Msg.error('请选择团课课程，或私教课程');
        return;
      }
      let itemId = this.selectChargeItemId;
      let args = {
        itemId: itemId,
        gcIdList: this.checkedGcIdList,
        pcIdList: this.checkedPcIdList
      };
      $.Req.service($.SvName.CHARGE_ITEM_COURSE_REL_SAVE, args, ret => {
        if (!this.chargeItemCoursesMap[itemId]) {
          this.chargeItemCoursesMap[itemId] = {};
        }
        this.chargeItemCoursesMap[itemId].gcIdList = this.checkedGcIdList;
        this.chargeItemCoursesMap[itemId].pcIdList = this.checkedPcIdList;
        this.courseSelectDlg = false;
        $.Msg.success($.Lang.OPT_SUCCESS);
      });
    },

    clearChargeItemCourseRel(itemId) {
      if (!confirm('您确定要清除该计费项目的课程配置吗？')) {
        return;
      }
      this.chargeItemConfDlg = false;
      let args = { itemId: itemId };
      $.Req.service($.SvName.CHARGE_ITEM_COURSE_REL_CLEAR, args, ret => {
        this.$set(this.chargeItemCoursesMap, itemId, { gcIdList: null, pcIdList: null, itemId: itemId });
        this.chargeItemConfDlg = true;
      }, true);
    }
  }
});

/***/ }),

/***/ 1485:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	components: {},
	data() {
		return {
			g: $,
			reportConf: [['shop-stat-adv-card-cate', '会员卡分组统计', '根据会员卡分组统计销消存'], ['shop-stat-adv-card-payment', '消费收入明细', '根据计费项目统计各消费数据'], ['shop-stat-adv-venue-consume', '场馆消费量明细', '精细化统计各场馆的消费时长']]
		};
	},

	created() {},

	methods: {}
});

/***/ }),

/***/ 1486:
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
//
//
//
//
//
//
//
//
//
//
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
      menuList: $.PageMenus.advReports('shop-stat-adv-venue-consume'),
      venueStatList: null,
      entryCheckinStatList: null,
      statMonth: 201910,
      query: {
        queryType: 1,
        dates: [null, null],
        monthList: []
      },
      dateOptions: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now();
        }
      },
      statMonthForVenue: 201910,
      queryForVenue: {
        queryType: 1,
        dates: [null, null],
        monthList: []
      },
      dateOptionsForVenue: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now();
        }
      }
    };
  },

  created() {
    this.initQueryMonths();
    this.statEntryCheckinCostTime();
    this.statVenueCostTime();
  },

  methods: {
    initQueryMonths() {
      const MONTH_CNT = 3;
      let year,
          month,
          date = new Date();
      date.setDate(1);
      date.setMonth(date.getMonth() - 1);
      for (let i = 0; i < MONTH_CNT; i++) {
        year = date.getFullYear();
        month = date.getMonth();
        this.query.monthList.push({
          name: '{0}年{1}月'.format(date.getFullYear(), month + 1),
          value: date.getFullYear() * 100 + (month + 1)
        });
        this.queryForVenue.monthList.push({
          name: '{0}年{1}月'.format(date.getFullYear(), month + 1),
          value: date.getFullYear() * 100 + (month + 1)
        });
        date.setMonth(month - 1);
      }
      this.statMonth = this.query.monthList[0].value;
    },

    statEntryCheckinCostTime() {
      let args = {};
      if (this.query.queryType === 1) {
        args.month = this.statMonth;
      } else {
        if (!this.query.dates[0] || !this.query.dates[1]) {
          $.Dlg.error('请输入正确的日期段');
          return;
        }
        args.beginDate = Date.new(this.query.dates[0]);
        args.endDate = Date.new(this.query.dates[1]);
      }

      $.Req.service($.SvName.ENTRY_CHECKIN_COST_TIME_STAT, args, ret => {
        for (let s of ret.statList) {
          if (s.sumCostOfMonth) {
            s.rateOfAm = (s.costsArr[0][0] + s.costsArr[1][0] + s.costsArr[2][0]) / s.sumCostOfMonth;
            s.rateOfPm1 = (s.costsArr[0][1] + s.costsArr[1][1] + s.costsArr[2][1]) / s.sumCostOfMonth;
            s.rateOfPm2 = (s.costsArr[0][2] + s.costsArr[1][2] + s.costsArr[2][2]) / s.sumCostOfMonth;
          } else {
            s.rateOfAm = s.rateOfPm1 = s.rateOfPm2 = 0;
          }
        }
        this.entryCheckinStatList = ret.statList;
      }, true);
    },

    statVenueCostTime() {
      let args = {};
      if (this.queryForVenue.queryType === 1) {
        args.month = this.statMonthForVenue;
      } else {
        if (!this.queryForVenue.dates[0] || !this.queryForVenue.dates[1]) {
          $.Dlg.error('请输入正确的日期段');
          return;
        }
        args.beginDate = Date.new(this.queryForVenue.dates[0]);
        args.endDate = Date.new(this.queryForVenue.dates[1]);
      }

      $.Req.service($.SvName.VENUE_COST_TIME_STAT, args, ret => {
        for (let s of ret.statList) {
          if (s.sumCostOfMonth) {
            s.rateOfAm = (s.costsArr[0][0] + s.costsArr[1][0] + s.costsArr[2][0]) / s.sumCostOfMonth;
            s.rateOfPm1 = (s.costsArr[0][1] + s.costsArr[1][1] + s.costsArr[2][1]) / s.sumCostOfMonth;
            s.rateOfPm2 = (s.costsArr[0][2] + s.costsArr[1][2] + s.costsArr[2][2]) / s.sumCostOfMonth;
          } else {
            s.rateOfAm = s.rateOfPm1 = s.rateOfPm2 = 0;
          }
        }
        this.venueStatList = ret.statList;
      }, true);
    }
  }
});

/***/ }),

/***/ 1623:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".bottom-remark[data-v-30b54266]{padding:15px;line-height:1;background:#e9e9e9;margin-top:20px;color:#777}.bottom-remark[data-v-30b54266]:hover{color:#ff4500}.daterange[data-v-30b54266]{width:200px}", ""]);

// exports


/***/ }),

/***/ 1637:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, "dl[data-v-379af739]{padding:0 18px;margin:10px;background:#fff;width:265px;display:inline-block;box-shadow:5px 5px 5px #ddd;cursor:pointer;height:100px;overflow-y:hidden}dl dt[data-v-379af739]{display:block;font-size:14px;padding:17px 0 15px;font-weight:700;line-height:1;border-bottom:1px solid #eee}dl dt i[data-v-379af739]{font-size:18px;padding-right:5px;position:relative;top:2px}dl dt .no[data-v-379af739]{color:#aaa;font-style:italic;margin-right:10px;text-shadow:3px 3px 6px #a7d8fa}dl dt .no[data-v-379af739]:after{content:\".\"}dl dd[data-v-379af739]{display:block;font-size:12px;padding-top:12px;line-height:2}dl[data-v-379af739]:hover{box-shadow:5px 5px 5px #ccc}", ""]);

// exports


/***/ }),

/***/ 1641:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".course-names li[data-v-3901293f]{padding:0 5px 0 0;line-height:1.6;display:inline-block}.course-names li[data-v-3901293f]:after{content:\"\\3001\"}.course-names li[data-v-3901293f]:last-child:after{content:\"\"}.course-list[data-v-3901293f]{padding:10px;border:1px solid #ddd;margin:15px 0}.course-list h3[data-v-3901293f]{margin:0 0 10px}.bottom-remark[data-v-3901293f]{padding:15px;line-height:1;background:#e9e9e9;margin-top:20px;color:#777}.bottom-remark[data-v-3901293f]:hover{color:#ff4500}.sum-tr th[data-v-3901293f]{background:#d6e8fc;border-bottom-color:#ddd;border-right-color:#ddd}.sum-tr[data-v-3901293f]:hover{background:#aaf2b7}.daterange[data-v-3901293f]{width:200px}", ""]);

// exports


/***/ }),

/***/ 1723:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1754:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".bottom-remark[data-v-763eb718]{padding:15px;line-height:1;background:#e9e9e9;margin-top:20px;color:#777}.bottom-remark[data-v-763eb718]:hover{color:#ff4500}.daterange[data-v-763eb718]{width:200px}", ""]);

// exports


/***/ }),

/***/ 1924:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1623);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("4be62320", content, true, {});

/***/ }),

/***/ 1938:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1637);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("7bca98fe", content, true, {});

/***/ }),

/***/ 1942:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1641);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("2f887022", content, true, {});

/***/ }),

/***/ 2024:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1723);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("cc82a60a", content, true, {});

/***/ }),

/***/ 2055:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1754);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("19c92bb5", content, true, {});

/***/ }),

/***/ 2239:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2024)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1476),
  /* template */
  __webpack_require__(2436),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-62a81256",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2336:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "shop-stat"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "shop-stat",
      "page": "shop-stat-adv"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("\n\t\t\t\t\t根据会员卡分组统计销售与消费\n\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('i-select', {
    staticStyle: {
      "width": "95px"
    },
    model: {
      value: (_vm.query.queryType),
      callback: function($$v) {
        _vm.$set(_vm.query, "queryType", $$v)
      },
      expression: "query.queryType"
    }
  }, [_c('i-option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("按月统计")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 2
    }
  }, [_vm._v("按日期段")])], 1), _vm._v("  \n\t\t\t\t\t"), (_vm.query.queryType === 1) ? _c('i-select', {
    staticStyle: {
      "width": "120px"
    },
    on: {
      "on-change": _vm.queryCardCateStat
    },
    model: {
      value: (_vm.statMonth),
      callback: function($$v) {
        _vm.statMonth = $$v
      },
      expression: "statMonth"
    }
  }, _vm._l((_vm.query.monthList), function(m) {
    return _c('i-option', {
      key: m.value,
      attrs: {
        "value": m.value
      }
    }, [_vm._v(_vm._s(m.name))])
  }), 1) : (_vm.query.queryType === 2) ? _c('date-picker', {
    staticClass: "daterange",
    attrs: {
      "options": _vm.dateOptions,
      "type": "daterange",
      "format": "yyyy-MM-dd",
      "placement": "bottom-end"
    },
    model: {
      value: (_vm.query.dates),
      callback: function($$v) {
        _vm.$set(_vm.query, "dates", $$v)
      },
      expression: "query.dates"
    }
  }) : _vm._e(), _vm._v("\n\t\t\t\t\t \n\t\t\t\t\t"), _c('i-button', {
    attrs: {
      "icon": "ios-search",
      "type": "primary"
    },
    on: {
      "click": _vm.queryCardCateStat
    }
  }, [_vm._v("查询")]), _vm._v("\n\t\t\t\t\t \n\t\t\t\t\t"), _c('i-button', {
    on: {
      "click": function($event) {
        return _vm.g.Util.exportToExcel('advCardCateStat', '会员卡分组统计')
      }
    }
  }, [_vm._v("导出")]), _vm._v("\n\t\t\t\t\t \n\t\t\t\t\t"), _c('i-button', {
    attrs: {
      "icon": "md-settings"
    },
    on: {
      "click": function($event) {
        _vm.cardCateConfDlg = true
      }
    }
  }, [_vm._v("编辑会员卡分组")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    attrs: {
      "id": "advCardCateStat"
    }
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.cardCateStatList), function(s) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(s.cateName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.round(s.salesOfMonth)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.round(s.salesOfYear)))]), _vm._v(" "), _c('td', [(s.salesOfMonth && _vm.sumStat.salesOfMonth) ? [_vm._v(_vm._s((100 * s.salesOfMonth / _vm.sumStat.salesOfMonth).toFixed(1)) + "%")] : _vm._e()], 2), _vm._v(" "), _c('td', [(s.costOfMonth) ? [_vm._v(_vm._s(_vm.g.Util.round(s.costOfMonth)))] : _vm._e()], 2)])
  }), _vm._v(" "), (_vm.cardCateStatList && _vm.cardCateStatList.length) ? _c('tr', {
    staticClass: "bold"
  }, [_c('td', [_vm._v("合计")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.round(_vm.sumStat.salesOfMonth)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.round(_vm.sumStat.salesOfYear)))]), _vm._v(" "), _c('td', [_vm._v("100%")]), _vm._v(" "), _c('td', [(_vm.sumStat.costOfMonth) ? [_vm._v(_vm._s(_vm.g.Util.round(_vm.sumStat.costOfMonth)))] : _vm._e()], 2)]) : _vm._e()], 2)]), _vm._v(" "), (_vm.cardCateStatList && _vm.cardCateStatList.length === 0) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n\t\t\t\t暂无数据，请先配置会员卡分组\n\t\t\t")]) : _vm._e()])], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员卡分组",
      "width": "900",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.cardCateConfDlg),
      callback: function($$v) {
        _vm.cardCateConfDlg = $$v
      },
      expression: "cardCateConfDlg"
    }
  }, [(_vm.cardCateConfDlg) ? _c('card-cate-conf') : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('div', {
    staticClass: "center"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.cardCateConfDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)])], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("会员卡分组")]), _vm._v(" "), _c('th', [_vm._v("当期销售额")]), _vm._v(" "), _c('th', [_vm._v("当年销售额累计")]), _vm._v(" "), _c('th', [_vm._v("累计比重")]), _vm._v(" "), _c('th', [_vm._v("当期消费收入额")])])
}]}

/***/ }),

/***/ 2350:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "shop-stat"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "shop-stat",
      "page": "shop-stat-adv"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, _vm._l((_vm.reportConf), function(c, idx) {
    return _c('dl', {
      on: {
        "click": function($event) {
          return _vm.$router.push(c[0])
        }
      }
    }, [_c('dt', [_c('span', {
      staticClass: "no"
    }, [_vm._v(_vm._s(idx + 1))]), _vm._v(_vm._s(c[1]))]), _vm._v(" "), _c('dd', [_vm._v(_vm._s(c[2]))])])
  }), 0)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2354:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "shop-stat"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "shop-stat",
      "page": "shop-stat-adv"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("\n\t\t\t\t\t根据计费项目统计消费金额\n\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('i-select', {
    staticStyle: {
      "width": "95px"
    },
    model: {
      value: (_vm.query.queryType),
      callback: function($$v) {
        _vm.$set(_vm.query, "queryType", $$v)
      },
      expression: "query.queryType"
    }
  }, [_c('i-option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("按月统计")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 2
    }
  }, [_vm._v("按日期段")])], 1), _vm._v("  \n\t\t\t\t\t"), (_vm.query.queryType === 1) ? _c('i-select', {
    staticStyle: {
      "width": "120px"
    },
    on: {
      "on-change": _vm.statEntryChargeItemCost
    },
    model: {
      value: (_vm.statMonth),
      callback: function($$v) {
        _vm.statMonth = $$v
      },
      expression: "statMonth"
    }
  }, _vm._l((_vm.query.monthList), function(m) {
    return _c('i-option', {
      key: m.value,
      attrs: {
        "value": m.value
      }
    }, [_vm._v(_vm._s(m.name))])
  }), 1) : (_vm.query.queryType === 2) ? _c('date-picker', {
    staticClass: "daterange",
    attrs: {
      "options": _vm.dateOptions,
      "type": "daterange",
      "format": "yyyy-MM-dd",
      "placement": "bottom-end"
    },
    model: {
      value: (_vm.query.dates),
      callback: function($$v) {
        _vm.$set(_vm.query, "dates", $$v)
      },
      expression: "query.dates"
    }
  }) : _vm._e(), _vm._v("\n\t\t\t\t\t \n\t\t\t\t\t"), (_vm.query.queryType === 2) ? _c('i-button', {
    attrs: {
      "icon": "ios-search",
      "type": "primary"
    },
    on: {
      "click": _vm.statEntryChargeItemCost
    }
  }, [_vm._v("查询")]) : _vm._e(), _vm._v("\n\t\t\t\t\t \n\t\t\t\t\t"), _c('i-button', {
    on: {
      "click": function($event) {
        return _vm.g.Util.exportToExcel('advCardPaymentStat', '会员卡消费收入明细统计')
      }
    }
  }, [_vm._v("导出")]), _vm._v("\n\t\t\t\t\t \n\t\t\t\t\t"), _c('i-button', {
    attrs: {
      "icon": "md-settings"
    },
    on: {
      "click": _vm.openChargeItemConfDlg
    }
  }, [_vm._v("配置计费项目与课程")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticStyle: {
      "max-width": "900px"
    },
    attrs: {
      "id": "advCardPaymentStat"
    }
  }, [_vm._m(0), _vm._v(" "), _c('tr', {
    staticClass: "sum-tr"
  }, [_c('th', [_vm._v("日均消费金额")]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.sum.avgPerDayOfMonth))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.sum.avgPerDayOfYear))])]), _vm._v(" "), _c('tr', {
    staticClass: "sum-tr"
  }, [_c('th', [_vm._v("消费金额合计")]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.sum.sumOfMonth))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.sum.sumOfYear))])]), _vm._v(" "), _vm._l((_vm.statList), function(s) {
    return [_c('tr', [_c('td', {
      attrs: {
        "rowspan": "3"
      }
    }, [_c('b', [_vm._v(_vm._s(s.itemName))])]), _vm._v(" "), _c('td', [_vm._v("学员消费")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.lessonCostOfMonth))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.lessonCostOfYear))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.round(s.rateOfLessonCost * 100)) + "%")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("会员消费")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.memberCostOfMonth))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.memberCostOfYear))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.round(s.rateOfMemberCost * 100)) + "%")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("小计")]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.g.Util.round(s.lessonCostOfMonth + s.memberCostOfMonth)))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.g.Util.round(s.lessonCostOfYear + s.memberCostOfYear)))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.g.Util.round(100 * (s.rateOfLessonCost + s.rateOfMemberCost))) + "%")])])]
  })], 2)]), _vm._v(" "), (_vm.statList && _vm.statList.length === 0) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n\t\t\t\t暂无数据\n\t\t\t")]) : _vm._e()])], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "计费项目与课程配置",
      "width": "1100",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.chargeItemConfDlg),
      callback: function($$v) {
        _vm.chargeItemConfDlg = $$v
      },
      expression: "chargeItemConfDlg"
    }
  }, [(_vm.chargeItemConfDlg) ? _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("计费项目")]), _vm._v(" "), _c('th', [_vm._v("关联团课")]), _vm._v(" "), _c('th', [_vm._v("关联私教课")]), _vm._v(" "), _c('th', [_vm._v("操作")])]), _vm._v(" "), _vm._l((_vm.entryChargeItemList), function(c, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(c.itemName))]), _vm._v(" "), _c('td', [(_vm.chargeItemCoursesMap[c.itemId] && _vm.chargeItemCoursesMap[c.itemId].gcIdList) ? _c('ul', {
      staticClass: "course-names"
    }, _vm._l((_vm.chargeItemCoursesMap[c.itemId].gcIdList), function(courseId) {
      return _c('li', [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.gcNameMap[courseId]) + "\n\t\t\t\t\t\t\t")])
    }), 0) : _vm._e()]), _vm._v(" "), _c('td', [(_vm.chargeItemCoursesMap[c.itemId] && _vm.chargeItemCoursesMap[c.itemId].pcIdList) ? _c('ul', {
      staticClass: "course-names"
    }, _vm._l((_vm.chargeItemCoursesMap[c.itemId].pcIdList), function(courseId) {
      return _c('li', [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.pcNameMap[courseId]) + "\n\t\t\t\t\t\t\t")])
    }), 0) : _vm._e()]), _vm._v(" "), _c('td', {
      attrs: {
        "width": "100"
      }
    }, [_c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.oepnChangeItemCoursesEditDlg(c.itemId)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.clearChargeItemCourseRel(c.itemId)
        }
      }
    }, [_vm._v("清空")])])])])])
  })], 2)]) : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('div', {
    staticClass: "center"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.chargeItemConfDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "课程配置",
      "width": "900",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.courseSelectDlg),
      callback: function($$v) {
        _vm.courseSelectDlg = $$v
      },
      expression: "courseSelectDlg"
    }
  }, [(_vm.courseSelectDlg) ? _c('div', {
    staticClass: "course-list"
  }, [_c('h3', [_vm._v("团课课程")]), _vm._v(" "), _c('CheckboxGroup', {
    model: {
      value: (_vm.checkedGcIdList),
      callback: function($$v) {
        _vm.checkedGcIdList = $$v
      },
      expression: "checkedGcIdList"
    }
  }, _vm._l((_vm.gcList), function(c) {
    return _c('Checkbox', {
      key: c.courseId,
      attrs: {
        "label": c.courseId
      }
    }, [_vm._v(_vm._s(c.courseName))])
  }), 1)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "course-list",
    model: {
      value: (_vm.checkedPcIdList),
      callback: function($$v) {
        _vm.checkedPcIdList = $$v
      },
      expression: "checkedPcIdList"
    }
  }, [_c('h3', [_vm._v("私教课程")]), _vm._v(" "), _c('CheckboxGroup', {
    model: {
      value: (_vm.checkedPcIdList),
      callback: function($$v) {
        _vm.checkedPcIdList = $$v
      },
      expression: "checkedPcIdList"
    }
  }, _vm._l((_vm.pcList), function(c) {
    return _c('Checkbox', {
      key: c.courseId,
      attrs: {
        "label": c.courseId
      }
    }, [_vm._v(_vm._s(c.courseName))])
  }), 1)], 1), _vm._v(" "), _c('div', {
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
      "click": _vm.saveChargeItemCourseRel
    }
  }, [_vm._v("确定")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.courseSelectDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', {
    staticClass: "sum-tr"
  }, [_c('th', {
    attrs: {
      "rowspan": "3"
    }
  }, [_vm._v("计费项目")]), _vm._v(" "), _c('th'), _vm._v(" "), _c('th', [_vm._v("本期消费金额")]), _vm._v(" "), _c('th', [_vm._v("当年消费金额")]), _vm._v(" "), _c('th', {
    attrs: {
      "rowspan": "3"
    }
  }, [_vm._v("当期消费比率")])])
}]}

/***/ }),

/***/ 2436:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": _vm.openNewCardCateDlg
    }
  }, [_vm._v("添加分组")])], 1), _vm._v(" "), _c('div', {
    staticClass: "mytbl p10"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.cardCateList), function(c, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(c.cateName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.cardNames))]), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openCardCateDlg(idx)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delCardCate(c.cateId)
        }
      }
    }, [_vm._v("删除")])])])])])
  })], 2)]), _vm._v(" "), (_vm.cardCateList && !_vm.cardCateList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员卡分组",
      "width": "700",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.cardCateDlg),
      callback: function($$v) {
        _vm.cardCateDlg = $$v
      },
      expression: "cardCateDlg"
    }
  }, [_c('div', {
    staticClass: "tblform",
    staticStyle: {
      "min-height": "200px"
    }
  }, [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("分组名称：")]), _vm._v(" "), _c('td', [_c('i-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.cardCate.cateName),
      callback: function($$v) {
        _vm.$set(_vm.cardCate, "cateName", $$v)
      },
      expression: "cardCate.cateName"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("选择会员卡：")]), _vm._v(" "), _c('td', [_c('i-select', {
    attrs: {
      "multiple": "",
      "filterable": ""
    },
    model: {
      value: (_vm.cardCate.cardIdArr),
      callback: function($$v) {
        _vm.$set(_vm.cardCate, "cardIdArr", $$v)
      },
      expression: "cardCate.cardIdArr"
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
    }, [_vm._v("【" + _vm._s(_vm.g.Dict.CardType[c.cardType]) + "】 ")]), _vm._v(" " + _vm._s(c.cardName) + "\n\t\t\t\t\t\t\t")])
  }), 1)], 1)]), _vm._v(" "), _c('tr', [_c('th'), _vm._v(" "), _c('td', [_c('p'), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveCardCate
    }
  }, [_vm._v("提交")])], 1)])])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("分组名")]), _vm._v(" "), _c('th', [_vm._v("会员卡")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2467:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "shop-stat"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "shop-stat",
      "page": "shop-stat-adv"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('i-select', {
    staticStyle: {
      "width": "95px"
    },
    model: {
      value: (_vm.query.queryType),
      callback: function($$v) {
        _vm.$set(_vm.query, "queryType", $$v)
      },
      expression: "query.queryType"
    }
  }, [_c('i-option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("按月统计")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 2
    }
  }, [_vm._v("按日期段")])], 1), _vm._v("  \n\t\t\t\t\t"), (_vm.query.queryType === 1) ? _c('i-select', {
    staticStyle: {
      "width": "120px"
    },
    on: {
      "on-change": _vm.statEntryCheckinCostTime
    },
    model: {
      value: (_vm.statMonth),
      callback: function($$v) {
        _vm.statMonth = $$v
      },
      expression: "statMonth"
    }
  }, _vm._l((_vm.query.monthList), function(m) {
    return _c('i-option', {
      key: m.value,
      attrs: {
        "value": m.value
      }
    }, [_vm._v(_vm._s(m.name))])
  }), 1) : (_vm.query.queryType === 2) ? _c('date-picker', {
    staticClass: "daterange",
    attrs: {
      "options": _vm.dateOptions,
      "type": "daterange",
      "format": "yyyy-MM-dd",
      "placement": "bottom-end"
    },
    model: {
      value: (_vm.query.dates),
      callback: function($$v) {
        _vm.$set(_vm.query, "dates", $$v)
      },
      expression: "query.dates"
    }
  }) : _vm._e(), _vm._v("\n\t\t\t\t\t \n\t\t\t\t\t"), (_vm.query.queryType === 2) ? _c('i-button', {
    attrs: {
      "icon": "ios-search",
      "type": "primary"
    },
    on: {
      "click": _vm.statEntryCheckinCostTime
    }
  }, [_vm._v("查询")]) : _vm._e(), _vm._v("\n\t\t\t\t\t \n\t\t\t\t\t"), _c('i-button', {
    on: {
      "click": function($event) {
        return _vm.g.Util.exportToExcel('entryCheckinCostTimeStat', '入场签到时长统计')
      }
    }
  }, [_vm._v("导出")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    attrs: {
      "id": "entryCheckinCostTimeStat"
    }
  }, [_vm._m(1), _vm._v(" "), _vm._l((_vm.entryCheckinStatList), function(s) {
    return (s.sumCostOfMonth || s.sumCostOfYear) ? [_c('tr', [_c('td', {
      attrs: {
        "rowspan": "9"
      }
    }, [_vm._v(_vm._s(s.venueName))]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "3"
      }
    }, [_vm._v("期限卡")]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "3"
      }
    }, [_vm._v(_vm._s(s.termCardCostOfYear))]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "3"
      }
    }, [(s.sumCostOfYear) ? [_vm._v(_vm._s(((100 * s.termCardCostOfYear) / s.sumCostOfYear).toFixed(1)) + "%")] : [_vm._v("0%")]], 2), _vm._v(" "), _c('td', [_vm._v("上午")]), _vm._v(" "), _c('td', [_vm._v("07:00 — 12:00")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.costsArr[0][0]))]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "9"
      }
    }, [_vm._v(_vm._s(s.sumCostOfMonth))]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "9"
      }
    }, [_vm._v(_vm._s(parseInt(s.avgCostOfMonth)))]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "9"
      }
    }, [_vm._v(_vm._s(s.sumCostOfYear))]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "9"
      }
    }, [_vm._v(_vm._s(parseInt(s.avgCostOfYear)))]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "9"
      }
    }, [_vm._v(_vm._s(s.costDaysOfMonth))]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "9"
      }
    }, [_vm._v(_vm._s(s.costDaysOfYear))])]), _vm._v(" "), _c('tr', [_c('td', {
      attrs: {
        "rowspan": "2"
      }
    }, [_vm._v(_vm._s((100 * s.rateOfAm).toFixed(1)) + "%")]), _vm._v(" "), _c('td', [_vm._v("12:00 — 17:30")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.costsArr[0][1]))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("17:30 — 21:30")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.costsArr[0][2]))])]), _vm._v(" "), _c('tr', [_c('td', {
      attrs: {
        "rowspan": "3"
      }
    }, [_vm._v("次数卡")]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "3"
      }
    }, [_vm._v(_vm._s(s.timesCardCostOfYear))]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "3"
      }
    }, [(s.sumCostOfYear) ? [_vm._v(_vm._s(((100 * s.timesCardCostOfYear) / s.sumCostOfYear).toFixed(1)) + "%")] : [_vm._v("0%")]], 2), _vm._v(" "), _c('td', [_vm._v("下午")]), _vm._v(" "), _c('td', [_vm._v("07:00 — 12:00")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.costsArr[1][0]))])]), _vm._v(" "), _c('tr', [_c('td', {
      attrs: {
        "rowspan": "2"
      }
    }, [_vm._v(_vm._s((100 * s.rateOfPm1).toFixed(1)) + "%")]), _vm._v(" "), _c('td', [_vm._v("12:00 — 17:30")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.costsArr[1][1]))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("17:30 — 21:30")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.costsArr[1][2]))])]), _vm._v(" "), _c('tr', [_c('td', {
      attrs: {
        "rowspan": "3"
      }
    }, [_vm._v("储值卡")]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "3"
      }
    }, [_vm._v(_vm._s(s.valueCardCostOfYear))]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "3"
      }
    }, [(s.sumCostOfYear) ? [_vm._v(_vm._s(((100 * s.valueCardCostOfYear) / s.sumCostOfYear).toFixed(1)) + "%")] : [_vm._v("0%")]], 2), _vm._v(" "), _c('td', [_vm._v("晚上")]), _vm._v(" "), _c('td', [_vm._v("07:00 — 12:00")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.costsArr[2][0]))])]), _vm._v(" "), _c('tr', [_c('td', {
      attrs: {
        "rowspan": "2"
      }
    }, [_vm._v(_vm._s((100 * s.rateOfPm2).toFixed(1)) + "%")]), _vm._v(" "), _c('td', [_vm._v("12:00 — 17:30")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.costsArr[2][1]))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("17:30 — 21:30")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.costsArr[2][2]))])])] : _vm._e()
  })], 2)])]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('i-select', {
    staticStyle: {
      "width": "95px"
    },
    model: {
      value: (_vm.queryForVenue.queryType),
      callback: function($$v) {
        _vm.$set(_vm.queryForVenue, "queryType", $$v)
      },
      expression: "queryForVenue.queryType"
    }
  }, [_c('i-option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("按月统计")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 2
    }
  }, [_vm._v("按日期段")])], 1), _vm._v("  \n\t\t\t\t\t"), (_vm.queryForVenue.queryType === 1) ? _c('i-select', {
    staticStyle: {
      "width": "120px"
    },
    on: {
      "on-change": _vm.statVenueCostTime
    },
    model: {
      value: (_vm.statMonthForVenue),
      callback: function($$v) {
        _vm.statMonthForVenue = $$v
      },
      expression: "statMonthForVenue"
    }
  }, _vm._l((_vm.queryForVenue.monthList), function(m) {
    return _c('i-option', {
      key: m.value,
      attrs: {
        "value": m.value
      }
    }, [_vm._v(_vm._s(m.name))])
  }), 1) : (_vm.queryForVenue.queryType === 2) ? _c('date-picker', {
    staticClass: "daterange",
    attrs: {
      "options": _vm.dateOptionsForVenue,
      "type": "daterange",
      "format": "yyyy-MM-dd",
      "placement": "bottom-end"
    },
    model: {
      value: (_vm.queryForVenue.dates),
      callback: function($$v) {
        _vm.$set(_vm.queryForVenue, "dates", $$v)
      },
      expression: "queryForVenue.dates"
    }
  }) : _vm._e(), _vm._v("\n\t\t\t\t\t \n\t\t\t\t\t"), (_vm.queryForVenue.queryType === 2) ? _c('i-button', {
    attrs: {
      "icon": "ios-search",
      "type": "primary"
    },
    on: {
      "click": _vm.statVenueCostTime
    }
  }, [_vm._v("查询")]) : _vm._e(), _vm._v("\n\t\t\t\t\t \n\t\t\t\t\t \n\t\t\t\t\t"), _c('i-button', {
    on: {
      "click": function($event) {
        return _vm.g.Util.exportToExcel('venueCostTimeStat', '场馆（预约/计时）消费时长统计')
      }
    }
  }, [_vm._v("导出")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    attrs: {
      "id": "venueCostTimeStat"
    }
  }, [_vm._m(3), _vm._v(" "), _vm._l((_vm.venueStatList), function(s) {
    return (s.sumCostOfMonth || s.sumCostOfYear) ? [_c('tr', [_c('td', {
      attrs: {
        "rowspan": "9"
      }
    }, [_vm._v(_vm._s(s.venueName))]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "3"
      }
    }, [_vm._v("期限卡")]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "3"
      }
    }, [_vm._v(_vm._s(_vm.g.Util.round(s.termCardCostOfYear / 60)))]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "3"
      }
    }, [(s.sumCostOfYear) ? [_vm._v(_vm._s(((100 * s.termCardCostOfYear) / s.sumCostOfYear).toFixed(1)) + "%")] : [_vm._v("0%")]], 2), _vm._v(" "), _c('td', [_vm._v("上午")]), _vm._v(" "), _c('td', [_vm._v("07:00 — 12:00")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.round(s.costsArr[0][0] / 60)))]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "9"
      }
    }, [_vm._v(_vm._s(_vm.g.Util.round(s.sumCostOfMonth / 60)))]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "9"
      }
    }, [_vm._v(_vm._s((s.utiRateOfMonth * 100).toFixed(1)) + "%")]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "9"
      }
    }, [_vm._v(_vm._s(_vm.g.Util.round(s.sumCostOfYear / 60)))]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "9"
      }
    }, [_vm._v(_vm._s((s.utiRateOfYear * 100).toFixed(1)) + "%")]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "9"
      }
    }, [_vm._v(_vm._s(s.costDaysOfMonth))]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "9"
      }
    }, [_vm._v(_vm._s(s.costDaysOfYear))]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "9"
      }
    }, [_vm._v(_vm._s(s.venueAreaCount))]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "9"
      }
    }, [_vm._v("13.5")])]), _vm._v(" "), _c('tr', [_c('td', {
      attrs: {
        "rowspan": "2"
      }
    }, [_vm._v(_vm._s((100 * s.rateOfAm).toFixed(1)) + "%")]), _vm._v(" "), _c('td', [_vm._v("12:00 — 17:30")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.round(s.costsArr[0][1] / 60)))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("17:30 — 21:30")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.round(s.costsArr[0][2] / 60)))])]), _vm._v(" "), _c('tr', [_c('td', {
      attrs: {
        "rowspan": "3"
      }
    }, [_vm._v("次数卡")]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "3"
      }
    }, [_vm._v(_vm._s(_vm.g.Util.round(s.timesCardCostOfYear / 60)))]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "3"
      }
    }, [(s.sumCostOfYear) ? [_vm._v(_vm._s(((100 * s.timesCardCostOfYear) / s.sumCostOfYear).toFixed(1)) + "%")] : [_vm._v("0%")]], 2), _vm._v(" "), _c('td', [_vm._v("下午")]), _vm._v(" "), _c('td', [_vm._v("07:00 — 12:00")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.round(s.costsArr[1][0] / 60)))])]), _vm._v(" "), _c('tr', [_c('td', {
      attrs: {
        "rowspan": "2"
      }
    }, [_vm._v(_vm._s((100 * s.rateOfPm1).toFixed(1)) + "%")]), _vm._v(" "), _c('td', [_vm._v("12:00 — 17:30")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.round(s.costsArr[1][1] / 60)))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("17:30 — 21:30")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.round(s.costsArr[1][2] / 60)))])]), _vm._v(" "), _c('tr', [_c('td', {
      attrs: {
        "rowspan": "3"
      }
    }, [_vm._v("储值卡")]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "3"
      }
    }, [_vm._v(_vm._s(_vm.g.Util.round(s.valueCardCostOfYear / 60)))]), _vm._v(" "), _c('td', {
      attrs: {
        "rowspan": "3"
      }
    }, [(s.sumCostOfYear) ? [_vm._v(_vm._s(((100 * s.valueCardCostOfYear) / s.sumCostOfYear).toFixed(1)) + "%")] : [_vm._v("0%")]], 2), _vm._v(" "), _c('td', [_vm._v("晚上")]), _vm._v(" "), _c('td', [_vm._v("07:00 — 12:00")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.round(s.costsArr[2][0] / 60)))])]), _vm._v(" "), _c('tr', [_c('td', {
      attrs: {
        "rowspan": "2"
      }
    }, [_vm._v(_vm._s((100 * s.rateOfPm2).toFixed(1)) + "%")]), _vm._v(" "), _c('td', [_vm._v("12:00 — 17:30")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.round(s.costsArr[2][1] / 60)))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("17:30 — 21:30")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.round(s.costsArr[2][2] / 60)))])])] : _vm._e()
  })], 2)])])], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tit"
  }, [_vm._v("\n\t\t\t\t\t入场签到人次统计\n\t\t\t\t\t"), _c('span', {
    staticClass: "l10 gray default-font"
  }, [_vm._v("（单位：次）")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("计费项目")]), _vm._v(" "), _c('th', [_vm._v("会员卡类型")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("当年消费人次")]), _vm._v(" "), _c('th', [_vm._v("卡项率")]), _vm._v(" "), _c('th', [_vm._v("时段率")]), _vm._v(" "), _c('th', [_vm._v("消费时段")]), _vm._v(" "), _c('th', [_vm._v("时段合计")]), _vm._v(" "), _c('th', [_vm._v("合计时长")]), _vm._v(" "), _c('th', [_vm._v("当期日均")]), _vm._v(" "), _c('th', [_vm._v("当年消费人次")]), _vm._v(" "), _c('th', [_vm._v("当年日均")]), _vm._v(" "), _c('th', [_vm._v("当期消费天数")]), _vm._v(" "), _c('th', [_vm._v("当年消费天数")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tit"
  }, [_vm._v("\n\t\t\t\t\t场馆（预约/计时）消费时长统计\n\t\t\t\t\t"), _c('span', {
    staticClass: "l10 gray default-font"
  }, [_vm._v("（单位：小时）")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("场馆名称")]), _vm._v(" "), _c('th', [_vm._v("会员卡类型")]), _vm._v(" "), _c('th', [_vm._v("当年消费")]), _vm._v(" "), _c('th', [_vm._v("卡项率")]), _vm._v(" "), _c('th', [_vm._v("时段率")]), _vm._v(" "), _c('th', [_vm._v("消费时段")]), _vm._v(" "), _c('th', [_vm._v("时段合计")]), _vm._v(" "), _c('th', [_vm._v("合计时长")]), _vm._v(" "), _c('th', [_vm._v("利用率")]), _vm._v(" "), _c('th', [_vm._v("当年消费时长")]), _vm._v(" "), _c('th', [_vm._v("当年日均")]), _vm._v(" "), _c('th', [_vm._v("当期消费天数")]), _vm._v(" "), _c('th', [_vm._v("当年消费天数")]), _vm._v(" "), _c('th', [_vm._v("有效场地数")]), _vm._v(" "), _c('th', [_vm._v("每日小时数")])])
}]}

/***/ })

});