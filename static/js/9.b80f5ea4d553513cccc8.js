webpackJsonp([9],{

/***/ 1188:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1989)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1379),
  /* template */
  __webpack_require__(2383),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-59b1cbcb",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1256:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1954)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1380),
  /* template */
  __webpack_require__(2350),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-48bf2f15",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1303:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1887)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1376),
  /* template */
  __webpack_require__(2283),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1e9b92b8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1376:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: {
    couponId: {
      type: Number,
      required: false
    },
    afterUpdate: {
      type: Function,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      g: $,
      coupon: {
        couponType: 1,
        beginDate: null,
        endDate: null,
        totalNum: null,
        pubTime: $.Util.getDateTimeInputVal($.Util.formatDateTime(new Date())),
        receiveLimitRole: 1,
        receiveLimitNum: 1,
        needPayment: false,
        price: null
      },
      selectDateSpan: false,
      useDates: null,
      dates: {
        dateBegin: new Date(),
        dateEnd: null
      },
      dateRangeDlgView: false,
      swichs: [{ show: '是否需要在线购买', hide: '是否需要在线购买' }],
      dlgView: {
        inputShow: false
      },
      checkDlgViewName: '',
      minDate: new Date(1940, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(),
      thisYear: new Date().getFullYear(),
      endDate: null,
      beginDate: null,
      pubTime: null
    };
  },

  created() {
    if (this.couponId) {
      this.queryCoupon();
    }
  },

  methods: {
    queryCoupon() {
      if (!this.couponId) return;
      $.Req.service($.SvName.ACTIVITY_COUPON_QUERY, { couponId: this.couponId }, ret => {
        if (ret.coupon) {
          this.pubTime = $.Util.getDateTimeInputVal(ret.coupon.pubTime);
          this.beginDate = '{0}'.format($.Util.formatDate(ret.coupon.beginDate));
          this.endDate = '{0}'.format($.Util.formatDate(ret.coupon.endDate));
          this.coupon = ret.coupon;
        } else {
          $.Msg.error($.Lang.NOT_FOUND_TIPS);
        }
      });
    },

    submit() {
      if (!$.Util.checkRequired(this.coupon, {
        couponType: '券类型', value: '券面额', receiveLimitRole: '领取人员', totalNum: '发布数量',
        receiveLimitNum: '每人限领', beginDate: '领取期限', endDate: '领取期限'
      })) {
        return;
      }

      if (this.coupon.pubTime) {
        this.coupon.pubTime = $.Util.formatDateTime(this.coupon.pubTime);
      }
      let args = {
        actionType: this.couponId ? 'U' : 'I',
        coupon: this.coupon
      };
      $.Req.service($.SvName.ACTIVITY_COUPON_SAVE, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        if (args.actionType === 'I') {
          this.$router.push('/market/coupon-list');
        } else {
          if (this.afterUpdate) this.afterUpdate(args.coupon);
        }
      }, true);
    },

    delCoupon() {
      if (!confirm($.Lang.DEL_CONFIRM.format($.Lang.COUPON))) {
        return;
      }

      let args = { deleteId: this.couponId, actionType: 'D' };
      $.Req.service($.SvName.ACTIVITY_COUPON_SAVE, args, ret => {
        if (this.afterUpdate) this.afterUpdate(null);
      }, true);
    },

    confirmDatePiker(name) {
      if (name === 'beginDate') {
        let date = { year: null, month: null, date: null, hr: null, min: null, sec: null };
        date.year = this.currentDate.getFullYear();
        date.month = this.currentDate.getMonth() < 9 ? '0' + (this.currentDate.getMonth() + 1) : this.currentDate.getMonth() + 1;
        date.date = this.currentDate.getDate() < 10 ? '0' + this.currentDate.getDate() : this.currentDate.getDate();
        this.beginDate = date.year + '-' + date.month + '-' + date.date;
        this.coupon.beginDate = this.beginDate;
      } else if (name === 'endDate') {
        let date = { year: null, month: null, date: null, hr: null, min: null, sec: null };
        date.year = this.currentDate.getFullYear();
        date.month = this.currentDate.getMonth() < 9 ? '0' + (this.currentDate.getMonth() + 1) : this.currentDate.getMonth() + 1;
        date.date = this.currentDate.getDate() < 10 ? '0' + this.currentDate.getDate() : this.currentDate.getDate();
        this.endDate = date.year + '-' + date.month + '-' + date.date;
        this.coupon.endDate = this.endDate;
      } else if (name === 'pubTime') {
        let date = { year: null, month: null, date: null, hr: null, min: null, sec: null };
        date.year = this.currentDate.getFullYear();
        date.month = this.currentDate.getMonth() < 9 ? '0' + (this.currentDate.getMonth() + 1) : this.currentDate.getMonth() + 1;
        date.date = this.currentDate.getDate() < 10 ? '0' + this.currentDate.getDate() : this.currentDate.getDate();
        date.hr = this.currentDate.getHours() < 10 ? '0' + this.currentDate.getHours() : this.currentDate.getHours();
        date.min = this.currentDate.getMinutes() < 10 ? '0' + this.currentDate.getMinutes() : this.currentDate.getMinutes();
        date.sec = this.currentDate.getSeconds() < 10 ? '0' + this.currentDate.getSeconds() : this.currentDate.getSeconds();
        this.pubTime = date.year + '-' + date.month + '-' + date.date + ' ' + date.hr + ':' + date.min + ':' + date.sec;
        this.coupon.pubTime = this.pubTime;
      }
      this.dlgView.inputShow = false;
    },

    showInputDlg(name) {
      this.dlgView.inputShow = true;
      this.checkDlgViewName = name;
      if (this.currentDate && this[name]) {
        let date = this[name].split('-');
        this.currentDate = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]));
      }
    }

  }
});

/***/ }),

/***/ 1377:
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
    coupon: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      g: $,
      guestCnt: null,
      usedCnt: null,
      couponLogList: null
    };
  },

  created() {
    if (this.coupon && this.coupon.couponId) {
      this.statCoupon();
    }
  },

  methods: {
    statCoupon(page = 1) {
      let args = { couponId: this.coupon.couponId, page: page };
      $.Req.service($.SvName.COUPON_STAT, args, ret => {
        if (ret.guestCnt) {
          this.guestCnt = ret.guestCnt;
          this.usedCnt = ret.usedCnt;
        }
        this.couponLogList = ret.couponLogList;
      }, true);
    }
  }
});

/***/ }),

/***/ 1379:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: {
    lotteryId: {
      type: Number,
      required: false
    },
    afterUpdate: {
      type: Function,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      g: $,
      lottery: {
        title: null,
        limitRole: 1,
        limitDrawNum: 1,
        beginDate: null,
        endDate: null,
        remark: null
      },
      selectDateSpan: false,
      useDates: null,
      dates: {
        dateBegin: new Date(),
        dateEnd: null
      },
      dateRangeDlgView: false,
      prizeList: [{}, {}, {}, {}, {}, {}, {}, {}],
      dlgView: {
        inputShow: false
      },
      minDate: new Date(1940, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(),
      beginDate: null,
      vacationEnd: null,
      thisYear: new Date().getFullYear(),
      checkDlgViewName: '',
      beginTime: null,
      endTime: null,
      pleaseChose: [],
      shopTypesShow: []
    };
  },

  created() {
    if (this.lotteryId) {
      this.queryLottery();
    } else {
      for (let p of this.prizeList) {
        p = { name: null, pubNum: null };
      }
    }
    for (let i = 0; i < this.prizeList.length; i++) {
      this.pleaseChose.push(true);
      this.shopTypesShow.push(false);
    }
  },
  mounted() {
    this.closePullDown();
  },

  methods: {
    queryLottery() {
      if (!this.lotteryId) return;
      $.Req.service($.SvName.LOTTERY_QUERY, { lotteryId: this.lotteryId }, ret => {
        if (ret.lottery) {
          this.beginTime = $.Util.formatDate(ret.lottery.beginDate);
          this.endTime = $.Util.formatDate(ret.lottery.endDate);
          this.lottery = ret.lottery;

          for (let p of ret.prizeList) {
            this.prizeList[p.orderNo] = p;
          }
        } else {
          $.Msg.error($.Lang.NOT_FOUND_TIPS);
        }
      });
    },

    submit() {
      if (!$.Util.checkRequired(this.lottery, {
        title: '活动名称', limitRole: '抽奖人员', limitDrawNum: '每人限制抽奖',
        beginDate: '	抽奖开始日期', endDate: '	抽奖结束日期'
      })) {
        return;
      }

      if (this.prizeList) {
        for (let p of this.prizeList) {
          if (p.name && !p.pubNum) {
            $.Dlg.warning('请输入【{0}】的奖品数量'.format(p.name));
            return;
          }
        }
      }

      let args = {
        actionType: this.lotteryId ? 'U' : 'I',
        lottery: this.lottery,
        prizeList: this.prizeList
      };
      $.Req.service($.SvName.LOTTERY_SAVE, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        if (args.actionType === 'I') {
          this.$router.push('/market/lottery-list');
        } else {
          if (this.afterUpdate) this.afterUpdate(args.lottery);
        }
      }, true);
    },

    delLottery() {
      if (!confirm($.Lang.DEL_CONFIRM.format($.Lang.LOTTERY))) {
        return;
      }

      let args = { lotteryId: this.lotteryId, actionType: 'D' };
      $.Req.service($.SvName.LOTTERY_SAVE, args, ret => {
        if (this.afterUpdate) this.afterUpdate(null);
      }, true);
    },

    clearPrize(idx) {
      this.$set(this.prizeList, idx, { prizeId: this.prizeList[idx].prizeId });
      for (let i = 0; i < this.prizeList.length; i++) {
        if (idx == i) {
          this.pleaseChose.splice(idx, 1, true);
        }
      }
    },

    confirmDatePiker(name) {
      if (name === 'beginTime') {
        let d = { year: null, month: null, date: null };
        d.year = this.currentDate.getFullYear();
        d.month = this.currentDate.getMonth() < 9 ? '0' + (this.currentDate.getMonth() + 1) : this.currentDate.getMonth() + 1;
        d.date = this.currentDate.getDate() < 10 ? '0' + this.currentDate.getDate() : this.currentDate.getDate();
        this.beginTime = d.year + '-' + d.month + '-' + d.date;
        this.dates.dateBegin = this.beginTime;
        this.lottery.beginDate = this.beginTime;
      } else if (name === 'endTime') {
        let d = { year: null, month: null, date: null };
        d.year = this.currentDate.getFullYear();
        d.month = this.currentDate.getMonth() < 9 ? '0' + (this.currentDate.getMonth() + 1) : this.currentDate.getMonth() + 1;
        d.date = this.currentDate.getDate() < 10 ? '0' + this.currentDate.getDate() : this.currentDate.getDate();
        this.endTime = d.year + '-' + d.month + '-' + d.date;
        this.dates.dateEnd = this.endTime;
        this.lottery.endDate = this.endTime;
      }

      this.dlgView.inputShow = false;
    },

    showInputDlg(name) {
      this.dlgView.inputShow = true;
      this.checkDlgViewName = name;
      if (this.currentDate && this[name]) {
        let date = this[name].split('-');
        this.currentDate = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]));
      }
    },

    showShopType(idx) {
      for (let i = 0; i < this.prizeList.length; i++) {
        if (idx == i) {
          this.shopTypesShow.splice(idx, 1, true);
        }
      }
    },
    choseShopType(idx, zjIdx) {
      for (let i = 0; i < this.prizeList.length; i++) {
        if (idx == i) {
          this.pleaseChose.splice(idx, 1, false);
          this.shopTypesShow.splice(idx, 1, false);
        }
      }
      this.prizeList[idx].probabilityLevel = zjIdx;
    },

    closePullDown() {
      let _this = this;

      let closeFunc = () => {
        _this.$nextTick(() => {});
      };
      window.onclick = () => {
        closeFunc();
      };
      window.onscroll = () => {
        closeFunc();
      };
    }
  }
});

/***/ }),

/***/ 1380:
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
    lottery: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      g: $,
      guestCnt: 0,
      lotteryLogList: null
    };
  },

  created() {
    if (this.lottery && this.lottery.lotteryId) {
      this.statLottery();
    }
  },

  methods: {
    statLottery(page = 1) {
      let args = { lotteryId: this.lottery.lotteryId, page: page };
      $.Req.service($.SvName.LOTTERY_STAT, args, ret => {
        if (ret.guestCnt) {
          this.guestCnt = ret.guestCnt;
          this.usedCnt = ret.usedCnt;
        }
        this.lotteryLogList = ret.logList;
      }, true);
    }
  }
});

/***/ }),

/***/ 1381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lottery_edit_vue__ = __webpack_require__(1188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lottery_edit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lottery_edit_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lottery_stat_vue__ = __webpack_require__(1256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lottery_stat_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lottery_stat_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { LotteryEdit: __WEBPACK_IMPORTED_MODULE_0__lottery_edit_vue___default.a, LotteryStat: __WEBPACK_IMPORTED_MODULE_1__lottery_stat_vue___default.a },
  data() {
    return {
      g: $,
      shopId: null,
      productList: null,
      isInWxPage: false
    };
  },

  created() {
    this.isInWxPage = $.Util.isInWeixin() && !$.Util.isInWxMiniProgram();
    this.queryShopId(() => {
      this.queryBargainList();
    });
  },

  methods: {
    queryBargainList() {
      let args = { hasStatStaffShare: true };
      $.Req.service($.SvName.BARGAIN_PRODUCT_QUERY, args, ret => {
        for (let p of ret.productList) {
          p.url = '{0}/#/bargain-main?s={1}&ownerStaffId={2}&productId={3}'.format($.Conf.MSITE_BASE_URL, this.shopId, $.data.user.staffId, p.productId);
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

/***/ 1382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_market_coupon_edit_vue__ = __webpack_require__(1303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_market_coupon_edit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_market_coupon_edit_vue__);
//
//
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
  components: { CouponEdit: __WEBPACK_IMPORTED_MODULE_0__pages_market_coupon_edit_vue___default.a },
  data() {
    return {};
  },

  created() {},

  methods: {}
});

/***/ }),

/***/ 1383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coupon_edit_vue__ = __webpack_require__(1303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coupon_edit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__coupon_edit_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coupon_stat_vue__ = __webpack_require__(2214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coupon_stat_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__coupon_stat_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { CouponEdit: __WEBPACK_IMPORTED_MODULE_0__coupon_edit_vue___default.a, CouponStat: __WEBPACK_IMPORTED_MODULE_1__coupon_stat_vue___default.a },
  data() {
    return {
      g: $,
      couponList: [],
      editable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
      qrcodeUrl: null,
      dlg: {
        selectCouponIdx: null,
        selectCouponId: 0,
        couponEditView: false,
        selectCouponTit: null,
        selectCoupon: null,
        couponStatView: false
      },
      couponsPgaeUrl: null,
      isInWxPage: false
    };
  },

  created() {
    this.isInWxPage = $.Util.isInWeixin() && !$.Util.isInWxMiniProgram();
    if (this.editable) {
      this.queryCouponList();
    }
    this.queryShopId();
  },

  methods: {
    queryCouponList() {
      $.Req.service($.SvName.ACTIVITY_COUPON_QUERY, {}, ret => {
        if (ret.couponList) this.couponList = ret.couponList;
      }, true);
    },

    queryShopId() {
      $.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
        this.couponsPgaeUrl = '{0}/#/coupons?s={1}&ownerStaffId={2}'.format($.Conf.MSITE_BASE_URL, ret.shopId, $.data.user.staffId);
        this.qrcodeUrl = $.Conf.QR_CODE_URL + encodeURIComponent(this.couponsPgaeUrl);
      });
    },

    openCouponEditDlg(idx) {
      this.dlg.selectCouponIdx = idx;
      this.dlg.selectCouponId = this.couponList[idx].couponId;
      this.dlg.couponEditView = true;
    },

    afterUpdatCoupon(coupon) {
      if (coupon) {
        this.$set(this.couponList, this.dlg.selectCouponIdx, coupon);
      } else {
        this.queryCouponList();
      }
      this.dlg.couponEditView = false;
      $.Msg.success($.Lang.OPT_SUCCESS);
    },

    openCouponStatDlg(idx) {
      let c = this.couponList[idx];
      this.dlg.selectCoupon = c;
      if (c.couponType === 1) this.dlg.selectCouponTit = c.value + '元代金券';else if (c.couponType === 2) this.dlg.selectCouponTit = c.value + '折扣券';else if (c.couponType === 3) this.dlg.selectCouponTit = '满{0}减{1}元'.format(c.preValue, c.value);
      this.dlg.couponStatView = true;
    }
  }
});

/***/ }),

/***/ 1391:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data() {
    return {
      g: $,
      editable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
      qrcodeUrl: null,
      groupbuyPageUrl: null,
      isInWxPage: false
    };
  },

  created() {
    this.isInWxPage = $.Util.isInWeixin() && !$.Util.isInWxMiniProgram();
    this.queryShopId();
  },

  methods: {
    queryShopId() {
      $.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
        this.groupbuyPageUrl = '{0}/#/groupbuy-product-list?s={1}&ownerStaffId={2}'.format($.Conf.MSITE_BASE_URL, ret.shopId, $.data.user.staffId);
        this.qrcodeUrl = $.Conf.QR_CODE_URL + encodeURIComponent(this.groupbuyPageUrl);
      });
    }
  }
});

/***/ }),

/***/ 1392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_market_lottery_edit_vue__ = __webpack_require__(1188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_market_lottery_edit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_market_lottery_edit_vue__);
//
//
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
  components: { LotteryEdit: __WEBPACK_IMPORTED_MODULE_0__pages_market_lottery_edit_vue___default.a },
  data() {
    return {};
  },

  created() {},

  methods: {}
});

/***/ }),

/***/ 1393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lottery_edit_vue__ = __webpack_require__(1188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lottery_edit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lottery_edit_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lottery_stat_vue__ = __webpack_require__(1256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lottery_stat_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lottery_stat_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { LotteryEdit: __WEBPACK_IMPORTED_MODULE_0__lottery_edit_vue___default.a, LotteryStat: __WEBPACK_IMPORTED_MODULE_1__lottery_stat_vue___default.a },
  data() {
    return {
      g: $,
      editable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
      lotteryList: [],
      qrcodeUrl: null,
      lotteryPgaeUrl: null,
      dlg: {
        selectLotteryIdx: null,
        selectLotteryId: 0,
        lotteryEditView: false,
        selectLotteryTit: null,
        selectLottery: null,
        lotteryStatView: false
      },
      isInWxPage: false
    };
  },

  created() {
    this.isInWxPage = $.Util.isInWeixin() && !$.Util.isInWxMiniProgram();
    if (this.editable) {
      this.queryLotteryList();
    }
    this.queryShopId();
  },

  methods: {
    queryLotteryList() {
      $.Req.service($.SvName.LOTTERY_QUERY, {}, ret => {
        if (ret.lotteryList) this.lotteryList = ret.lotteryList;
      }, true);
    },

    queryShopId() {
      $.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
        this.lotteryPgaeUrl = '{0}/#/lottery?s={1}&ownerStaffId={2}'.format($.Conf.MSITE_BASE_URL, ret.shopId, $.data.user.staffId);
        this.qrcodeUrl = $.Conf.QR_CODE_URL + encodeURIComponent(this.lotteryPgaeUrl);
      });
    },

    openLotteryEditDlg(idx) {
      this.dlg.selectLotteryIdx = idx;
      this.dlg.selectLotteryId = this.lotteryList[idx].lotteryId;
      this.dlg.lotteryEditView = true;
    },

    afterUpdatLottery(lottery) {
      if (lottery) {
        this.$set(this.lotteryList, this.dlg.selectLotteryIdx, lottery);
      } else {
        this.queryLotteryList();
      }
      this.dlg.lotteryEditView = false;
      $.Msg.success($.Lang.OPT_SUCCESS);
    },

    openLotteryStatDlg(idx) {
      let l = this.lotteryList[idx];
      this.dlg.selectLottery = l;
      this.dlg.selectLotteryTit = l.title;
      this.dlg.lotteryStatView = true;
    }
  }
});

/***/ }),

/***/ 1394:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data() {
    return {
      shopId: null,
      qrcodeUrl: null
    };
  },

  created() {
    this.queryShopId();
  },

  methods: {
    queryShopId() {
      $.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
        this.shopId = ret.shopId;

        let url = $.Conf.MSITE_BASE_URL + '/#/shop-home?s=' + this.shopId;
        this.qrcodeUrl = $.Conf.QR_CODE_URL + encodeURIComponent(url);
      });
    }
  }
});

/***/ }),

/***/ 1396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lottery_edit_vue__ = __webpack_require__(1188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lottery_edit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lottery_edit_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lottery_stat_vue__ = __webpack_require__(1256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lottery_stat_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lottery_stat_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { LotteryEdit: __WEBPACK_IMPORTED_MODULE_0__lottery_edit_vue___default.a, LotteryStat: __WEBPACK_IMPORTED_MODULE_1__lottery_stat_vue___default.a },
  data() {
    return {
      g: $,
      shopId: null,
      productList: null,
      isInWxPage: false,
      showValid: false
    };
  },

  created() {
    this.isInWxPage = $.Util.isInWeixin() && !$.Util.isInWxMiniProgram();
    this.queryShopId(() => {
      this.querySeckillList();
    });
  },

  methods: {
    querySeckillList() {
      let args = { hasStatStaffShare: true };
      $.Req.service($.SvName.SECKILL_PRODUCT_QUERY, args, (ret, systime) => {
        let nowTime = Date.new(systime).getTime();
        for (let p of ret.productList) {
          if (nowTime >= Date.new(p.beginTime).getTime() && nowTime <= Date.new(p.endTime).getTime()) {
            p.usable = true;
          } else {
            p.usable = false;
          }
          p.url = '{0}/#/second-kill-detail?s={1}&ownerStaffId={2}&productId={3}'.format($.Conf.MSITE_BASE_URL, this.shopId, $.data.user.staffId, p.productId);
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

/***/ 1583:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".allpadding[data-v-02c3317c]{padding:15px 16px}.clist li.item[data-v-02c3317c]{display:block;padding:0 15px 15px;margin:5px 0 12px;border:1px solid #ddd;border-radius:3px;box-shadow:2px 2px 4px #ddd;vertical-align:top}.clist .-hd[data-v-02c3317c]{border-bottom:2px solid #e2e2e2;height:48px;line-height:48px}.clist .-hd .-cname[data-v-02c3317c]{float:left;font-weight:700;font-size:15px}.clist .-hd .-cname i[data-v-02c3317c]{font-size:18px;padding-right:2px;font-weight:400;position:relative;top:2px}.clist .-hd .r[data-v-02c3317c]{color:orange;font-size:12px}.clist .-bd[data-v-02c3317c]{margin-top:10px;clear:both}.clist .-bd table[data-v-02c3317c]{width:100%}.clist .-bd th[data-v-02c3317c]{font-weight:400;text-align:right;padding:0 5px;width:105px;color:#777}.clist .-bd th[data-v-02c3317c]:after{content:\"\\FF1A\"}.clist .-bd th[data-v-02c3317c]{padding-left:0}.clist .-bd td[data-v-02c3317c],.clist .-bd th[data-v-02c3317c]{line-height:28px}.clist .opt[data-v-02c3317c]{height:20px;line-height:20px;text-align:center;margin:10px 0 5px;border-top:1px solid #eee;padding-top:10px}.clist .opt a[data-v-02c3317c]{float:left;width:50%;border-right:1px solid #eee}.clist .opt a[data-v-02c3317c]:last-child{border-right:0}.note[data-v-02c3317c]{margin-top:10px}.note ol[data-v-02c3317c]{padding:10px 16px 0}.note ol li[data-v-02c3317c]{line-height:1.8}.course-records .ret[data-v-02c3317c],.course-records .ret dl[data-v-02c3317c]{padding:0}.course-records .ret dt[data-v-02c3317c]{padding:15px 16px}.course-records .ret dd[data-v-02c3317c]{padding-left:20px}.course-records .ret dd label[data-v-02c3317c]{width:100px}.course-records .ret dd[data-v-02c3317c]:last-child{padding-bottom:15px}.opt-list[data-v-02c3317c]{padding:15px 20px;margin-top:10px;text-align:center}.opt-list div.wid50[data-v-02c3317c]{width:50%}.theme-black .qrcode[data-v-02c3317c]{padding-top:10px}", ""]);

// exports


/***/ }),

/***/ 1603:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".clist[data-v-161bb4bc]{padding-top:6px}.clist li.item[data-v-161bb4bc]{display:block;padding:0 15px 15px;margin:5px 0 15px;border:1px solid #ddd;border-radius:3px;box-shadow:2px 2px 4px #ddd;vertical-align:top}.clist .-hd[data-v-161bb4bc]{border-bottom:2px solid #e2e2e2}.clist .-hd .-cname[data-v-161bb4bc]{padding:8px 0 10px;font-weight:700;font-size:15px;line-height:1.5}.clist .-hd .-cname i[data-v-161bb4bc]{font-size:18px;padding-right:2px;font-weight:400;position:relative;top:2px}.clist .-hd .r[data-v-161bb4bc]{color:orange;font-size:12px}.clist .-bd[data-v-161bb4bc]{margin-top:10px;clear:both}.clist .-bd table[data-v-161bb4bc]{width:100%}.clist .-bd th[data-v-161bb4bc]{font-weight:400;text-align:right;padding:0 5px;width:105px;color:#777}.clist .-bd th[data-v-161bb4bc]:after{content:\"\\FF1A\"}.clist .-bd th[data-v-161bb4bc]{padding-left:0}.clist .-bd td[data-v-161bb4bc],.clist .-bd th[data-v-161bb4bc]{line-height:28px}.clist .opt[data-v-161bb4bc]{height:20px;line-height:20px;text-align:center;margin:10px 0 5px;border-top:1px solid #eee;padding-top:10px}.clist .opt a[data-v-161bb4bc]{float:left;width:50%;border-right:1px solid #eee}.clist .opt a[data-v-161bb4bc]:last-child{border-right:0}.note[data-v-161bb4bc]{margin-top:10px}.note ol[data-v-161bb4bc]{padding:10px 0 0 5px}.note ol li[data-v-161bb4bc]{line-height:1.8}.qrcode img[data-v-161bb4bc]{border:1px solid #777;margin-top:10px}.theme-black .clist .-bd th[data-v-161bb4bc]{color:#ccc}.theme-black .clist li.item[data-v-161bb4bc]{box-shadow:none}.theme-black a[data-v-161bb4bc]{color:#dbb76b}", ""]);

// exports


/***/ }),

/***/ 1620:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".tblform input[data-v-1e9b92b8]{padding:0;width:75%}.tblform .input-bg[data-v-1e9b92b8]{width:80px;padding:4px 0;border-radius:2px}.tblform .input-bg.text-center[data-v-1e9b92b8]{text-align:center}.tblform .radio-single-chose[data-v-1e9b92b8]{padding:0}.tblform .radio-single-chose li[data-v-1e9b92b8]{text-align:center;font-size:13px;margin-right:10px}.tblform .radio-single-chose .icon-radio[data-v-1e9b92b8]{vertical-align:-2px;margin-right:2px}.tblform .radio-single-chose .icon-radio[data-v-1e9b92b8]:before{margin:0 0 2px}.tblform[data-v-1e9b92b8] .qd-switch-bar{margin-right:0}.formbox[data-v-1e9b92b8]{border:0;margin:0}.formbox th[data-v-1e9b92b8]{width:110px;padding:0;text-align:center}.input-box[data-v-1e9b92b8]{height:32px;line-height:32px;padding:0 10px}textarea[data-v-1e9b92b8]{background:#f6f6f6;width:100%;padding:5px}.theme-black textarea[data-v-1e9b92b8]{background:#212121;color:#fff}", ""]);

// exports


/***/ }),

/***/ 1666:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".stat[data-v-4080cc24]{text-align:center;padding:15px 0;overflow:hidden}.stat li[data-v-4080cc24]{height:100%;line-height:1;width:25%;float:left;padding:10px 0}.stat li[data-v-4080cc24]:last-child{border-right:0}.stat li sub[data-v-4080cc24]{display:block;padding-top:20px;font-size:15px;color:#1aad19}.mytbl[data-v-4080cc24]{margin:0 16px;width:calc(100% - 32px)}.mytbl td[data-v-4080cc24],.mytbl td span[data-v-4080cc24],.mytbl th[data-v-4080cc24],.mytbl th span[data-v-4080cc24]{font-size:12px}", ""]);

// exports


/***/ }),

/***/ 1679:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".clist[data-v-44fe303f]{padding-top:6px}.clist li.item[data-v-44fe303f]{display:block;background:#fff;padding:0 15px 15px;margin:5px 0 12px;border:1px solid #ddd;border-radius:3px;box-shadow:2px 2px 4px #ddd;vertical-align:top}.clist .-hd[data-v-44fe303f]{border-bottom:2px solid #e2e2e2;height:48px;line-height:48px}.clist .-hd .-cname[data-v-44fe303f]{float:left;font-weight:700;font-size:15px;overflow:hidden}.clist .-hd .-cname i[data-v-44fe303f]{font-size:18px;padding-right:2px;font-weight:400;position:relative;top:2px}.clist .-hd .r[data-v-44fe303f]{color:orange;font-size:12px}.clist .-bd[data-v-44fe303f]{margin-top:10px;clear:both}.clist .-bd table[data-v-44fe303f]{width:100%}.clist .-bd th[data-v-44fe303f]{font-weight:400;text-align:right;padding:0 5px;width:105px;color:#777}.clist .-bd th[data-v-44fe303f]:after{content:\"\\FF1A\"}.clist .-bd th[data-v-44fe303f]{padding-left:0}.clist .-bd td[data-v-44fe303f],.clist .-bd th[data-v-44fe303f]{line-height:28px}.clist .opt[data-v-44fe303f]{height:20px;line-height:20px;text-align:center;margin:10px 0 5px;border-top:1px solid #eee;padding-top:10px}.clist .opt a[data-v-44fe303f]{float:left;width:50%;border-right:1px solid #eee}.clist .opt a[data-v-44fe303f]:last-child{border-right:0}.note[data-v-44fe303f]{margin-top:10px}.note ol[data-v-44fe303f]{padding:10px 0 0 5px}.note ol li[data-v-44fe303f]{line-height:1.8}.qrcode img[data-v-44fe303f]{border:1px solid #777;margin-top:10px}.theme-black .clist .-bd th[data-v-44fe303f]{color:#ccc}.theme-black .clist li.item[data-v-44fe303f]{box-shadow:none}.theme-black a[data-v-44fe303f]{color:#dbb76b}", ""]);

// exports


/***/ }),

/***/ 1687:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".stat[data-v-48bf2f15]{text-align:center;padding:15px 0;overflow:hidden}.stat li[data-v-48bf2f15]{height:100%;line-height:1;width:25%;float:left;padding:10px 0}.stat li[data-v-48bf2f15]:last-child{border-right:0}.stat li u[data-v-48bf2f15]{display:block;padding-top:20px;font-size:15px;color:#1aad19;text-decoration:none}.mytbl[data-v-48bf2f15]{margin:0 16px;width:calc(100% - 32px)}.mytbl td[data-v-48bf2f15],.mytbl td span[data-v-48bf2f15],.mytbl th[data-v-48bf2f15],.mytbl th span[data-v-48bf2f15]{font-size:12px}", ""]);

// exports


/***/ }),

/***/ 1693:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1722:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".tblform input[data-v-59b1cbcb]{padding:0}.tblform textarea[data-v-59b1cbcb]{background:#f6f6f6;padding:8px}.theme-black .base-conf .max-num-input[data-v-59b1cbcb],.theme-black .tblform textarea[data-v-59b1cbcb]{background:#212121}.base-conf .max-num-input[data-v-59b1cbcb]{padding:6px 0;margin:0 3px 0 5px;width:70px;display:inline-block;background:#f6f6f6;text-align:center}section.prize-conf[data-v-59b1cbcb]{padding:0;margin-bottom:20px}section.prize-conf .tips[data-v-59b1cbcb]{margin:0;padding:5px 20px;line-height:1.7;font-size:12px;color:orange}section.prize-conf .prizes li[data-v-59b1cbcb]{padding:10px 0;display:block}section.prize-conf .prizes li label[data-v-59b1cbcb]{width:90px;display:inline-block}section.prize-conf .prizes li input[data-v-59b1cbcb]{display:inline-block}section.prize-conf .prizes li select[data-v-59b1cbcb]{padding:0 8px}section.prize-conf .prizes td[data-v-59b1cbcb],section.prize-conf .prizes th[data-v-59b1cbcb]{border:0;padding:5px 0}section.prize-conf .prizes .no[data-v-59b1cbcb]{width:25px;height:25px;line-height:25px;text-align:center;display:inline-block;border-radius:50%;background:#ddd;font-size:12px;color:#333}section.prize-conf .prizes .clear[data-v-59b1cbcb]{padding-left:30px}.short-btn[data-v-59b1cbcb]{width:150px;text-align:center;border-radius:15px;display:block;margin:20px auto 10px;padding:5px 0}.submit[data-v-59b1cbcb]{margin-top:20px}.formbox[data-v-59b1cbcb]{border:0;margin:0}input[type=number][data-v-59b1cbcb]{display:inline-block;padding-bottom:0}.input-box[data-v-59b1cbcb]{height:32px;line-height:32px;padding:0 10px}select[data-v-59b1cbcb]{width:auto;text-align:right;padding:0 20px}.radio-single-chose[data-v-59b1cbcb]{padding:0;justify-content:start}.radio-single-chose li[data-v-59b1cbcb]{text-align:center;font-size:12px;margin-right:10px}.radio-single-chose .icon-radio[data-v-59b1cbcb]{vertical-align:-2px;margin-right:2px}.radio-single-chose .icon-radio[data-v-59b1cbcb]:before{margin:0 0 2px}.mb-10[data-v-59b1cbcb]{margin-bottom:10px}.shop-types[data-v-59b1cbcb]{position:absolute;top:40px;left:0;height:200px;overflow-y:scroll;width:80px;z-index:10;text-align:left;padding:5px}.shop-types li[data-v-59b1cbcb]{padding:4px}.zjgl span[data-v-59b1cbcb]{padding:0;width:80px}.zjgl span i[data-v-59b1cbcb]{margin-left:15px}", ""]);

// exports


/***/ }),

/***/ 1762:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1771:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".clist li.item[data-v-84203816]{display:block;padding:0 15px 15px;margin:5px 0 12px;border:1px solid #ddd;border-radius:3px;box-shadow:2px 2px 4px #ddd;vertical-align:top}.clist .-hd[data-v-84203816]{border-bottom:2px solid #e2e2e2;height:48px;line-height:48px}.clist .-hd .-cname[data-v-84203816]{float:left;font-weight:700;font-size:15px}.clist .-hd .-cname i[data-v-84203816]{font-size:18px;padding-right:2px;font-weight:400;position:relative;top:2px}.clist .-hd .r[data-v-84203816]{font-size:12px}.clist .-bd[data-v-84203816]{margin-top:10px;clear:both}.clist .-bd table[data-v-84203816]{width:100%}.clist .-bd th[data-v-84203816]{font-weight:400;text-align:right;padding:0 5px;width:104px;color:#777}.clist .-bd th[data-v-84203816]:after{content:\"\\FF1A\"}.clist .-bd th[data-v-84203816]{padding-left:0}.clist .-bd td[data-v-84203816],.clist .-bd th[data-v-84203816]{line-height:28px}.clist .opt[data-v-84203816]{height:20px;line-height:20px;text-align:center;margin:10px 0 5px;border-top:1px solid #eee;padding-top:10px}.clist .opt a[data-v-84203816]{float:left;width:50%;border-right:1px solid #eee}.clist .opt a[data-v-84203816]:last-child{border-right:0}.note ol[data-v-84203816]{padding:5px 16px}.note ol li[data-v-84203816]{line-height:1.8}.hd .tit .iconinfo[data-v-84203816]{font-size:16px;padding-right:4px}.largest-btn[data-v-84203816]{line-height:33px}.course-records .ret[data-v-84203816],.course-records .ret dl[data-v-84203816]{padding:0}.course-records .ret dt[data-v-84203816]{padding:15px 16px}.course-records .ret dd[data-v-84203816]{padding-left:20px}.course-records .ret dd label[data-v-84203816]{width:100px}.course-records .ret dd[data-v-84203816]:last-child{padding-bottom:15px}.opt-list[data-v-84203816]{padding:15px 20px;margin-top:10px;text-align:center}.opt-list div.wid50[data-v-84203816]{width:50%}.theme-black .qrcode[data-v-84203816]{padding-top:10px}", ""]);

// exports


/***/ }),

/***/ 1782:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".qrcode img[data-v-968740ba]{width:150px}.article[data-v-968740ba]{padding:0 16px;margin:0;font-size:14px}.article ol li[data-v-968740ba]{font-size:14px;padding-left:0}.theme-black .qrcode[data-v-968740ba]{padding:10px 0}", ""]);

// exports


/***/ }),

/***/ 1798:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".note[data-v-b496f872]{margin-top:10px;padding-bottom:10px}.note ol[data-v-b496f872]{padding:0 16px}.note ol li[data-v-b496f872]{line-height:1.8}.note .qrcode[data-v-b496f872]{padding-top:10px}.note .qrcode img[data-v-b496f872]{display:block;width:120px}", ""]);

// exports


/***/ }),

/***/ 1850:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1583);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("45da95a8", content, true, {});

/***/ }),

/***/ 1870:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1603);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("4507c2cf", content, true, {});

/***/ }),

/***/ 1887:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1620);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("20c6f380", content, true, {});

/***/ }),

/***/ 1933:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1666);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("2505794a", content, true, {});

/***/ }),

/***/ 1946:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1679);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("ddf77cee", content, true, {});

/***/ }),

/***/ 1954:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1687);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("114857f8", content, true, {});

/***/ }),

/***/ 1960:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1693);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("07104f4e", content, true, {});

/***/ }),

/***/ 1989:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1722);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("2ac8d572", content, true, {});

/***/ }),

/***/ 2029:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1762);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("af8ff1d0", content, true, {});

/***/ }),

/***/ 2038:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1771);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("613d4ed8", content, true, {});

/***/ }),

/***/ 2049:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1782);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("71f9773e", content, true, {});

/***/ }),

/***/ 2065:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1798);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("4561d636", content, true, {});

/***/ }),

/***/ 2214:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1933)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1377),
  /* template */
  __webpack_require__(2329),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4080cc24",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2247:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vant"
  }, [_c('page-head', {
    attrs: {
      "title": "抽奖活动"
    }
  }, [_vm._t("default", function() {
    return [(_vm.editable) ? _c('span', {
      staticClass: "theme-font-color",
      on: {
        "click": function($event) {
          return _vm.$router.push('/market/lottery-create')
        }
      }
    }, [_vm._v("新增")]) : _vm._e()]
  })], 2), _vm._v(" "), (_vm.editable) ? _c('div', {
    staticClass: "course-records -style-"
  }, [_c('div', {
    staticClass: "ret"
  }, [(_vm.lotteryList && _vm.lotteryList.length > 0) ? _c('div', _vm._l((_vm.lotteryList), function(l, idx) {
    return _c('dl', {
      staticClass: "section-part"
    }, [_c('dt', {
      staticClass: "theme-padding theme-border-bottom"
    }, [_c('span', {
      staticClass: "l"
    }, [_vm._v(_vm._s(l.title))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("抽奖时间")]), _c('span', [_vm._v(_vm._s(_vm.g.Util.formatDate(l.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(l.endDate)))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("限制抽奖人员")]), _c('span', [_vm._v(_vm._s(_vm.g.Dict.GuestTypes[l.limitRole]))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("每人限制抽奖")]), _c('span', [_vm._v(_vm._s(l.limitDrawNum) + " 次")])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("已抽奖次数")]), _c('span', [_vm._v(_vm._s(l.drawCnt) + " 次")])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("中奖数")]), _c('span', [_vm._v(_vm._s(l.winCnt) + " 个")])]), _vm._v(" "), _c('div', {
      staticClass: "opt-list theme-border-top row theme-padding justify-center"
    }, [_c('div', {
      staticClass: "theme-font-color wid50",
      on: {
        "click": function($event) {
          return _vm.openLotteryEditDlg(idx)
        }
      }
    }, [_vm._v("编辑")]), _vm._v(" "), _c('div', {
      staticClass: "theme-font-color theme-border-left wid50",
      on: {
        "click": function($event) {
          return _vm.openLotteryStatDlg(idx)
        }
      }
    }, [_vm._v("统计")])])])
  }), 0) : _vm._e()])]) : _vm._e(), _vm._v(" "), _c('section', {
    staticClass: "note"
  }, [_vm._m(0), _vm._v(" "), _c('ol', [_c('li', [_vm._v("通过发布抽奖活动，商家可快速获得潜在客户的联系方式（手机号码、称呼）；")]), _vm._v(" "), _c('li', [_vm._v("访客抽奖后，需到门店内领奖，提高到店访客量；")]), _vm._v(" "), _c('li', [_vm._v("设置好抽奖活动后，可将抽奖页面分享到朋友圈，或者将二维码印到宣传单上；")]), _vm._v(" "), _c('li', [_vm._v("您的专属抽奖二维码（微信扫码用）：\n\t\t\t\t\t\t"), _c('div', {
    staticClass: "qrcode"
  }, [_c('img', {
    attrs: {
      "src": _vm.qrcodeUrl,
      "width": "120"
    }
  })])]), _vm._v(" "), (_vm.isInWxPage) ? _c('li', [_c('a', {
    staticClass: "theme-font-color",
    attrs: {
      "href": _vm.lotteryPgaeUrl
    }
  }, [_vm._v("点击此链接可直接进入抽奖页面 →")])]) : _vm._e(), _vm._v(" "), _c('li', [_vm._v("\n          通过上述二维码\n          "), (_vm.isInWxPage) ? [_vm._v("或链接")] : _vm._e(), _vm._v("\n          进入微官网抽奖页面后，再分享给客户或朋友圈。如有客户参与（需填写姓名和手机号），"), _c('b', [_vm._v("此客户将自动分配到您名下")]), _vm._v("。\n        ")], 2)]), _vm._v(" "), _c('p')]), _vm._v(" "), _c('bottom-nav'), _vm._v(" "), _c('van-popup', {
    style: ({
      height: '100%',
      width: '100%'
    }),
    attrs: {
      "position": "right"
    },
    model: {
      value: (_vm.dlg.lotteryEditView),
      callback: function($$v) {
        _vm.$set(_vm.dlg, "lotteryEditView", $$v)
      },
      expression: "dlg.lotteryEditView"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move",
    on: {
      "click": function($event) {
        _vm.dlg.lotteryEditView = false
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })]), _vm._v("\n        抽奖活动编辑\n      ")]), _vm._v(" "), _c('div', [_c('lottery-edit', {
    attrs: {
      "lottery-id": _vm.dlg.selectLotteryId,
      "after-update": _vm.afterUpdatLottery
    }
  })], 1)]), _vm._v(" "), _c('van-popup', {
    style: ({
      height: '100%',
      width: '100%'
    }),
    attrs: {
      "position": "right"
    },
    model: {
      value: (_vm.dlg.lotteryStatView),
      callback: function($$v) {
        _vm.$set(_vm.dlg, "lotteryStatView", $$v)
      },
      expression: "dlg.lotteryStatView"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move",
    on: {
      "click": function($event) {
        _vm.dlg.lotteryStatView = false
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })]), _vm._v("\n        " + _vm._s('抽奖统计 - ' + _vm.dlg.selectLotteryTit) + "\n      ")]), _vm._v(" "), _c('lottery-stat', {
    attrs: {
      "lottery": _vm.dlg.selectLottery
    }
  })], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('span', {
    staticClass: "tit"
  }, [_vm._v("抽奖活动说明")])])
}]}

/***/ }),

/***/ 2267:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-head', {
    attrs: {
      "title": "砍价"
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "allpadding"
  }, [(_vm.productList && !_vm.productList.length) ? _c('div', {
    staticClass: "center gray p10"
  }, [_vm._v("\n      暂无发布中的砍价商品\n    ")]) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "clist"
  }, _vm._l((_vm.productList), function(p, idx) {
    return _c('li', {
      staticClass: "item"
    }, [_c('div', {
      staticClass: "-hd"
    }, [_c('div', {
      staticClass: "-cname"
    }, [_c('i', {
      staticClass: "iconfont icon-bargain"
    }), _vm._v("\n            " + _vm._s(p.productTitle) + "\n          ")])]), _vm._v(" "), _c('div', {
      staticClass: "-bd"
    }, [_c('table', [_c('tr', [_c('th', [_vm._v("有效期")]), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(p.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(p.endDate)))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("原价")]), _c('td', [_vm._v("￥" + _vm._s(p.rawPrice))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("最低价")]), _c('td', [_vm._v("￥" + _vm._s(p.lowestPrice))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("分享结果")]), _vm._v(" "), _c('td', [_c('b', [_vm._v(_vm._s(p.itemCnt))]), _vm._v(" 次发起， "), _c('b', [_vm._v(_vm._s(p.paidCnt))]), _vm._v(" 次购买\n              ")])]), _vm._v(" "), (_vm.isInWxPage) ? _c('tr', [_c('th', [_vm._v("专属分享页")]), _vm._v(" "), _c('td', [_c('a', {
      attrs: {
        "href": p.url
      }
    }, [_vm._v("点击进入砍价商品页，然后分享 →")])])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', {
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
    })])])])])])])
  }), 0)]), _vm._v(" "), _c('bottom-nav')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2283:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tblform vant"
  }, [_c('section', [_c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("券名称")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.coupon.title),
      expression: "coupon.title",
      modifiers: {
        "trim": true
      }
    }],
    attrs: {
      "placeholder": "请输入券名称",
      "type": "text"
    },
    domProps: {
      "value": (_vm.coupon.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.coupon, "title", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("券类型")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [(!_vm.coupon.receivedNum) ? [_c('ul', {
    staticClass: "row radio-single-chose start"
  }, [_c('li', {
    on: {
      "click": function($event) {
        _vm.coupon.couponType = 1
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-radio",
    class: {
      'icon-radio-on': _vm.coupon.couponType === 1
    }
  }), _vm._v("代金")]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        _vm.coupon.couponType = 2
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-radio",
    class: {
      'icon-radio-on': _vm.coupon.couponType === 2
    }
  }), _vm._v("折扣")]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        _vm.coupon.couponType = 3
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-radio",
    class: {
      'icon-radio-on': _vm.coupon.couponType === 3
    }
  }), _vm._v("满减")])])] : [_c('b', [_vm._v(_vm._s(_vm.g.Dict.CouponTypes[_vm.coupon.couponType]))])]], 2)]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("券面额")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row align-center"
  }, [(!_vm.coupon.receivedNum) ? [(_vm.coupon.couponType == 3) ? [_vm._v("\n            满 "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.coupon.preValue),
      expression: "coupon.preValue"
    }],
    staticClass: "input-bg text-center",
    attrs: {
      "type": "number",
      "placeholder": "请输入"
    },
    domProps: {
      "value": (_vm.coupon.preValue)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.coupon, "preValue", $event.target.value)
      }
    }
  }), _vm._v("减\n          ")] : _vm._e(), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.coupon.value),
      expression: "coupon.value"
    }],
    class: {
      'text-center input-bg': _vm.coupon.couponType == 3
    },
    attrs: {
      "type": "number",
      "placeholder": "请输入"
    },
    domProps: {
      "value": (_vm.coupon.value)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.coupon, "value", $event.target.value)
      }
    }
  }), _vm._v(" "), (_vm.coupon.couponType == 1 || _vm.coupon.couponType == 3) ? _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")]) : _vm._e(), _vm._v(" "), (_vm.coupon.couponType == 2) ? _c('span', {
    staticClass: "tips"
  }, [_vm._v("折")]) : _vm._e()] : [(_vm.coupon.couponType == 3) ? [_vm._v("\n            满 "), _c('b', [_vm._v(_vm._s(_vm.coupon.preValue))]), _vm._v(" 减\n          ")] : _vm._e(), _vm._v(" "), _c('b', [_vm._v(_vm._s(_vm.coupon.value))]), _vm._v(" "), (_vm.coupon.couponType == 1 || _vm.coupon.couponType == 3) ? _c('span', [_vm._v("元")]) : _vm._e(), _vm._v(" "), (_vm.coupon.couponType == 2) ? _c('span', [_vm._v("折")]) : _vm._e()]], 2)]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("领取人员")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('ul', {
    staticClass: "row radio-single-chose start"
  }, [_c('li', {
    on: {
      "click": function($event) {
        _vm.coupon.receiveLimitRole = 1
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-radio",
    class: {
      'icon-radio-on': _vm.coupon.receiveLimitRole === 1
    }
  }), _vm._v("访客")]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        _vm.coupon.receiveLimitRole = 2
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-radio",
    class: {
      'icon-radio-on': _vm.coupon.receiveLimitRole === 2
    }
  }), _vm._v("会员")]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        _vm.coupon.receiveLimitRole = 3
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-radio",
    class: {
      'icon-radio-on': _vm.coupon.receiveLimitRole === 3
    }
  }), _vm._v("不限")])])])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("发布数量")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.coupon.totalNum),
      expression: "coupon.totalNum",
      modifiers: {
        "number": true
      }
    }],
    attrs: {
      "type": "number",
      "placeholder": "请输入数量"
    },
    domProps: {
      "value": (_vm.coupon.totalNum)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.coupon, "totalNum", _vm._n($event.target.value))
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("张")])])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("生效时间")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row start",
    on: {
      "click": function($event) {
        return _vm.showInputDlg('pubTime')
      }
    }
  }, [(_vm.pubTime) ? [_c('span', [_vm._v(_vm._s(_vm.pubTime))])] : [_c('span', {
    staticClass: "font-color-c"
  }, [_vm._v("请选择生效时间")])], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c small",
    staticStyle: {
      "margin-top": "2px",
      "font-size": "12px"
    }
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("每人限领")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.coupon.receiveLimitNum),
      expression: "coupon.receiveLimitNum",
      modifiers: {
        "number": true
      }
    }],
    attrs: {
      "type": "number",
      "placeholder": "请输入数量"
    },
    domProps: {
      "value": (_vm.coupon.receiveLimitNum)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.coupon, "receiveLimitNum", _vm._n($event.target.value))
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("张")])])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("有效期")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row start"
  }, [_c('div', {
    staticClass: "row row-l-r start",
    staticStyle: {
      "padding": "0",
      "margin-right": "10px"
    },
    on: {
      "click": function($event) {
        return _vm.showInputDlg('beginDate')
      }
    }
  }, [(_vm.beginDate) ? [_c('span', [_vm._v(_vm._s(_vm.beginDate))])] : [_c('span', {
    staticClass: "font-color-c"
  }, [_vm._v("开始日期")])], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c",
    staticStyle: {
      "margin-top": "2px",
      "font-size": "12px"
    }
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "row row-l-r start",
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.showInputDlg('endDate')
      }
    }
  }, [(_vm.endDate) ? [_c('span', [_vm._v(_vm._s(_vm.endDate))])] : [_c('span', {
    staticClass: "font-color-c"
  }, [_vm._v("结束日期")])], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c",
    staticStyle: {
      "margin-top": "2px",
      "font-size": "12px"
    }
  })], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("在线购买")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row end"
  }, [_c('qd-switch', {
    model: {
      value: (_vm.coupon.needPayment),
      callback: function($$v) {
        _vm.$set(_vm.coupon, "needPayment", $$v)
      },
      expression: "coupon.needPayment"
    }
  })], 1)]), _vm._v(" "), (_vm.coupon.needPayment) ? _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("购买价格")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.coupon.price),
      expression: "coupon.price",
      modifiers: {
        "number": true
      }
    }],
    attrs: {
      "type": "number",
      "placeholder": "请输入价格"
    },
    domProps: {
      "value": (_vm.coupon.price)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.coupon, "price", _vm._n($event.target.value))
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元 / 张")])])]) : _vm._e(), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom",
    staticStyle: {
      "margin-top": "-22px"
    }
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.coupon.remark),
      expression: "coupon.remark",
      modifiers: {
        "trim": true
      }
    }],
    attrs: {
      "rows": "8",
      "placeholder": "请输入说明"
    },
    domProps: {
      "value": (_vm.coupon.remark)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.coupon, "remark", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "largest-btn theme-btn-bg mb-20 mt-20",
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("提交")]), _vm._v(" "), (_vm.couponId && !_vm.coupon.receivedNum) ? _c('div', {
    staticClass: "largest-btn theme-btn-bor",
    on: {
      "click": _vm.delCoupon
    }
  }, [_vm._v("删除")]) : _vm._e(), _vm._v(" "), _c('div', {
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
  }, [(_vm.checkDlgViewName == 'beginDate') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "title": "选择年月日",
      "min-date": _vm.minDate,
      "max-date": new Date(_vm.thisYear + 2, 0, 1),
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": function($event) {
        return _vm.confirmDatePiker('beginDate')
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
  })] : _vm._e(), _vm._v(" "), (_vm.checkDlgViewName == 'endDate') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "title": "选择年月日",
      "min-date": _vm.minDate,
      "max-date": new Date(_vm.thisYear + 2, 0, 1),
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": function($event) {
        return _vm.confirmDatePiker('endDate')
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
  })] : _vm._e(), _vm._v(" "), (_vm.checkDlgViewName == 'pubTime') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "datetime",
      "title": "选择日期与时间",
      "min-date": _vm.minDate,
      "max-date": new Date(_vm.thisYear + 2, 0, 1),
      "visible-item-count": 3
    },
    on: {
      "cancel": function($event) {
        _vm.dlgView.inputShow = false
      },
      "confirm": function($event) {
        return _vm.confirmDatePiker('pubTime')
      }
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  })] : _vm._e()], 2)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("说明")])])
}]}

/***/ }),

/***/ 2329:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [(_vm.coupon) ? _c('div', {
    staticClass: "theme-border-bottom section-part"
  }, [_c('ul', {
    staticClass: "stat"
  }, [_c('li', [_vm._v("领取人数"), _c('sub', [_vm._v(_vm._s(_vm.guestCnt))])]), _vm._v(" "), _c('li', {
    staticClass: "theme-border-left"
  }, [_vm._v("领取数量"), _c('sub', [_vm._v(_vm._s(_vm.coupon.receivedNum))])]), _vm._v(" "), _c('li', {
    staticClass: "theme-border-left"
  }, [_vm._v("已使用数"), _c('sub', [_vm._v(_vm._s(_vm.usedCnt))])]), _vm._v(" "), _c('li', {
    staticClass: "theme-border-left"
  }, [_vm._v("使用率\n        "), (_vm.usedCnt && _vm.coupon.receivedNum) ? _c('sub', [_vm._v(_vm._s((100 * _vm.usedCnt / _vm.coupon.receivedNum).toFixed(1)) + "%")]) : _c('sub', [_vm._v("0%")])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "clog section-part"
  }, [_c('table', {
    staticClass: "mytbl"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.couponLogList), function(c) {
    return _c('tr', [_c('td', [_c('span', {
      staticClass: "gray"
    }, [_vm._v("[" + _vm._s(_vm.g.Dict.GuestTypes[c.receiverType]) + "]")]), _vm._v(" "), (c.receiverType === 1) ? [_vm._v(_vm._s(c.custName.shorten(3)))] : _vm._e(), _vm._v(" "), (c.receiverType === 2) ? [_vm._v(_vm._s(c.memberName.shorten(3)))] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.usedTime))])])
  })], 2), _vm._v(" "), _c('pagination', {
    attrs: {
      "total": _vm.coupon.receivedNum,
      "page-change": _vm.statCoupon
    }
  })], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', {
    staticClass: "theme-border-bottom"
  }, [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("领取人")]), _c('th', [_vm._v("领取时间")]), _c('th', [_vm._v("使用时间")])])
}]}

/***/ }),

/***/ 2342:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-head', {
    attrs: {
      "title": "秒杀"
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "allpadding"
  }, [(_vm.productList && !_vm.productList.length) ? _c('div', {
    staticClass: "center gray p10"
  }, [_vm._v("\n      暂未发布秒杀商品\n    ")]) : _vm._e(), _vm._v(" "), _c('p', [_c('qd-switch', {
    attrs: {
      "title": "仅显示有效秒杀"
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
  }, _vm._l((_vm.productList), function(p, idx) {
    return (!_vm.showValid || (_vm.showValid && p.usable)) ? _c('li', {
      staticClass: "item"
    }, [_c('div', {
      staticClass: "-hd"
    }, [_c('div', {
      staticClass: "-cname"
    }, [_c('i', {
      staticClass: "iconfont icon-seckill"
    }), _vm._v("\n            " + _vm._s(p.productTitle) + "\n          ")])]), _vm._v(" "), _c('div', {
      staticClass: "-bd"
    }, [(p.cardName) ? _c('tr', [_c('th', [_vm._v("会员卡名")]), _vm._v(" "), _c('td', [_vm._v("\n              " + _vm._s(p.cardName) + "\n            ")])]) : _vm._e(), _vm._v(" "), _c('table', [_c('tr', [_c('th', [_vm._v("秒杀时间")]), _c('td', [_vm._v(_vm._s(p.beginTime) + " ~ "), _c('br'), _vm._v(" " + _vm._s(p.endTime))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("商品原价")]), _c('td', [_vm._v("￥" + _vm._s(p.originalPrice))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("商品售价")]), _c('td', [_vm._v("￥" + _vm._s(p.price))])]), _vm._v(" "), (_vm.g.data.user.isShopOwner) ? _c('tr', [_c('th', [_vm._v("购买数")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.orderCnt))])]) : _vm._e(), _vm._v(" "), (_vm.isInWxPage) ? _c('tr', [_c('th', [_vm._v("专属分享页")]), _vm._v(" "), _c('td', [_c('a', {
      attrs: {
        "href": p.url
      }
    }, [_vm._v("点击进入秒杀商品页，然后分享 →")])])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', {
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
    })])])])])])]) : _vm._e()
  }), 0)]), _vm._v(" "), _c('bottom-nav')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2350:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.lottery) ? _c('div', {
    staticClass: "theme-border-bottom section-part"
  }, [_c('ul', {
    staticClass: "stat"
  }, [_c('li', [_vm._v("抽奖人数"), _c('u', [_vm._v(_vm._s(_vm.guestCnt))])]), _vm._v(" "), _c('li', {
    staticClass: "theme-border-left"
  }, [_vm._v("抽奖次数"), _c('u', [_vm._v(_vm._s(_vm.lottery.drawCnt))])]), _vm._v(" "), _c('li', {
    staticClass: "theme-border-left"
  }, [_vm._v("已中奖数"), _c('u', [_vm._v(_vm._s(_vm.lottery.winCnt))])]), _vm._v(" "), _c('li', {
    staticClass: "theme-border-left"
  }, [_vm._v("中奖率\n        "), (_vm.lottery.winCnt && _vm.lottery.drawCnt) ? _c('u', [_vm._v(_vm._s((100 * _vm.lottery.winCnt / _vm.lottery.drawCnt).toFixed(1)) + "%")]) : _c('u', [_vm._v("0%")])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "clog section-part"
  }, [_c('table', {
    staticClass: "mytbl"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.lotteryLogList), function(l) {
    return _c('tr', [_c('td', [_c('span', {
      staticClass: "gray"
    }, [_vm._v("[" + _vm._s(_vm.g.Dict.GuestTypes[l.guestType]) + "]")]), _vm._v(" "), (l.guestType === 1) ? [_vm._v(_vm._s(l.custName.shorten(3)))] : _vm._e(), _vm._v(" "), (l.guestType === 2) ? [_vm._v(_vm._s(l.memberName.shorten(3)))] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.usedTime))])])
  })], 2), _vm._v(" "), _c('pagination', {
    attrs: {
      "total": _vm.lottery.drawCnt,
      "page-change": _vm.statLottery
    }
  })], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', {
    staticClass: "theme-border-bottom"
  }, [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("抽奖人")]), _c('th', [_vm._v("抽奖时间")]), _c('th', [_vm._v("领奖时间")])])
}]}

/***/ }),

/***/ 2355:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-head', {
    attrs: {
      "title": "新增抽奖活动"
    }
  }), _vm._v(" "), _c('lottery-edit')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2383:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tblform vant"
  }, [_c('section', {
    staticClass: "base-conf"
  }, [_c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("活动名称")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.lottery.title),
      expression: "lottery.title"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入活动名称"
    },
    domProps: {
      "value": (_vm.lottery.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.lottery, "title", $event.target.value)
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("抽奖人员")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail"
  }, [_c('ul', {
    staticClass: "row radio-single-chose"
  }, [_c('li', {
    on: {
      "click": function($event) {
        _vm.lottery.limitRole = 1
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-radio",
    class: {
      'icon-radio-on': _vm.lottery.limitRole === 1
    }
  }), _vm._v("访客")]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        _vm.lottery.limitRole = 2
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-radio",
    class: {
      'icon-radio-on': _vm.lottery.limitRole === 2
    }
  }), _vm._v("会员")]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        _vm.lottery.limitRole = 3
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-radio",
    class: {
      'icon-radio-on': _vm.lottery.limitRole === 3
    }
  }), _vm._v("不限")])])])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom",
    staticStyle: {
      "padding": "6px 16px"
    }
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("每人抽奖")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row start align-center"
  }, [_c('span', {
    staticClass: "gray"
  }, [_vm._v("最多")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.lottery.limitDrawNum),
      expression: "lottery.limitDrawNum"
    }],
    staticClass: "center max-num-input",
    attrs: {
      "type": "number",
      "title": "",
      "placeholder": "请输入"
    },
    domProps: {
      "value": (_vm.lottery.limitDrawNum)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.lottery, "limitDrawNum", $event.target.value)
      }
    }
  }), _c('span', {
    staticClass: "tips"
  }, [_vm._v("次")])])]), _vm._v(" "), _c('div', {
    staticClass: "row align-center theme-border-bottom"
  }, [_c('div', {
    staticClass: "infor-name must-fill"
  }, [_vm._v("抽奖时间")]), _vm._v(" "), _c('div', {
    staticClass: "infor-detail row start align-center"
  }, [_c('div', {
    staticClass: "row start row-l-r",
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.showInputDlg('beginTime')
      }
    }
  }, [(_vm.beginTime) ? _c('span', [_vm._v(_vm._s(_vm.beginTime))]) : _c('span', {
    staticClass: "font-color-9"
  }, [_vm._v("开始时间")]), _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c",
    staticStyle: {
      "font-size": "12px",
      "margin": "3px 0 -6px 0"
    }
  })]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin": "0 10px"
    }
  }, [_vm._v("~")]), _vm._v(" "), _c('div', {
    staticClass: "row start row-l-r",
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.showInputDlg('endTime')
      }
    }
  }, [(_vm.endTime) ? _c('span', [_vm._v(_vm._s(_vm.endTime))]) : _c('span', {
    staticClass: "font-color-9"
  }, [_vm._v("结束时间")]), _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c",
    staticStyle: {
      "font-size": "12px",
      "margin": "3px 0 -6px 0"
    }
  })])])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "row theme-border-bottom"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "margin-top": "-22px"
    }
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.lottery.remark),
      expression: "lottery.remark",
      modifiers: {
        "trim": true
      }
    }],
    attrs: {
      "rows": "8",
      "placeholder": "请输入抽奖说明"
    },
    domProps: {
      "value": (_vm.lottery.remark)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.lottery, "remark", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])])]), _vm._v(" "), _c('section', {
    staticClass: "prize-conf"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "tips theme-padding theme-border-bottom"
  }, [_vm._v("最多可设置八种奖品，空白处表示无奖品，抽奖界面会显示“谢谢参与”")]), _vm._v(" "), _c('ul', {
    staticClass: "prizes theme-padding"
  }, _vm._l((_vm.prizeList), function(p, idx) {
    return _c('li', {
      staticClass: "theme-border-bottom"
    }, [_c('table', [_c('tr', [_c('td', {
      attrs: {
        "colspan": "2"
      }
    }, [_c('div', {
      staticClass: "no l"
    }, [_vm._v(_vm._s(idx + 1))]), _c('div', {
      staticClass: "clear r"
    }, [(!p.winCnt && p.name) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.clearPrize(idx)
        }
      }
    }, [_vm._v("清空")]) : _vm._e()])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("奖品名称")]), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (p.name),
        expression: "p.name"
      }],
      attrs: {
        "type": "text",
        "title": "",
        "placeholder": "请输入奖品名称"
      },
      domProps: {
        "value": (p.name)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.$set(p, "name", $event.target.value)
        }
      }
    })])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("奖品总数")]), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: (p.pubNum),
        expression: "p.pubNum",
        modifiers: {
          "number": true
        }
      }],
      staticClass: "input-s",
      attrs: {
        "type": "number",
        "title": "",
        "placeholder": "请输入奖品总数"
      },
      domProps: {
        "value": (p.pubNum)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.$set(p, "pubNum", _vm._n($event.target.value))
        },
        "blur": function($event) {
          return _vm.$forceUpdate()
        }
      }
    })])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("中奖概率")]), _vm._v(" "), _c('td', {
      staticClass: "zjgl",
      staticStyle: {
        "position": "relative"
      }
    }, [(_vm.pleaseChose[idx] && !p.probabilityLevel) ? [_c('span', {
      staticClass: "font-color-c row align-center",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          return _vm.showShopType(idx)
        }
      }
    }, [_vm._v("请选择 "), _c('i', {
      staticClass: "iconfont iconarrow-down-1"
    })])] : [_c('span', {
      staticClass: "row align-center",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          return _vm.showShopType(idx)
        }
      }
    }, [_vm._v(_vm._s(_vm.g.Dict.LotteryProbs[p.probabilityLevel])), _c('i', {
      staticClass: "iconfont iconarrow-down-1"
    })])], _vm._v(" "), (_vm.shopTypesShow[idx]) ? _c('ul', {
      staticClass: "shop-types"
    }, _vm._l((_vm.g.Dict.LotteryProbs), function(value, zjIdx) {
      return (value) ? _c('li', {
        on: {
          "click": function($event) {
            $event.stopPropagation();
            return _vm.choseShopType(idx, zjIdx)
          }
        }
      }, [_vm._v(_vm._s(value))]) : _vm._e()
    }), 0) : _vm._e()], 2)]), _vm._v(" "), (_vm.lotteryId && p.name) ? _c('tr', [_c('th', [_vm._v("已中奖数")]), _c('td', [_vm._v(_vm._s(p.winCnt))])]) : _vm._e()])])
  }), 0)]), _vm._v(" "), _c('div', {
    staticClass: ""
  }, [_c('div', {
    staticClass: "largest-btn theme-btn-bg mb-10",
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("提交")]), _vm._v(" "), (_vm.lotteryId && !_vm.lottery.receivedNum) ? _c('div', {
    staticClass: "largest-btn theme-btn-bor",
    on: {
      "click": _vm.delLottery
    }
  }, [_vm._v("删除")]) : _vm._e()]), _vm._v(" "), _c('div', {
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
  }, [(_vm.checkDlgViewName == 'beginTime') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "title": "选择年月日",
      "min-date": _vm.minDate,
      "max-date": new Date(_vm.thisYear + 2, 0, 1),
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": function($event) {
        return _vm.confirmDatePiker('beginTime')
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
  })] : _vm._e(), _vm._v(" "), (_vm.checkDlgViewName == 'endTime') ? [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "title": "选择年月日",
      "min-date": _vm.minDate,
      "max-date": new Date(_vm.thisYear + 2, 0, 1),
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": function($event) {
        return _vm.confirmDatePiker('endTime')
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
  })] : _vm._e()], 2)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "infor-name"
  }, [_vm._v("抽奖说明")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-border-bottom theme-padding"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("奖品设置")])])
}]}

/***/ }),

/***/ 2423:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-head', {
    attrs: {
      "title": "新增优惠券"
    }
  }), _vm._v(" "), _c('coupon-edit')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2432:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vant"
  }, [_c('page-head', {
    attrs: {
      "title": "优惠券"
    }
  }, [_vm._t("default", function() {
    return [(_vm.editable) ? _c('span', {
      staticClass: "theme-font-color",
      on: {
        "click": function($event) {
          return _vm.$router.push('/market/coupon-create')
        }
      }
    }, [_vm._v("新增")]) : _vm._e()]
  })], 2), _vm._v(" "), (_vm.editable) ? _c('div', {
    staticClass: "course-records -style-"
  }, [_c('div', {
    staticClass: "ret"
  }, [(_vm.couponList && _vm.couponList.length > 0) ? _c('div', _vm._l((_vm.couponList), function(c, idx) {
    return _c('dl', {
      staticClass: "section-part"
    }, [_c('dt', {
      staticClass: "theme-padding theme-border-bottom"
    }, [_c('span', {
      staticClass: "l"
    }, [_c('i', {
      staticClass: "iconfont iconyouhui2"
    }), _vm._v(" "), (c.couponType === 1) ? [_vm._v(_vm._s(c.value) + "元")] : _vm._e(), _vm._v(" "), (c.couponType === 2) ? [_vm._v(_vm._s(c.value) + "折")] : _vm._e(), _vm._v(" "), (c.couponType === 3) ? [_vm._v("满" + _vm._s(c.preValue) + "减" + _vm._s(c.value) + "元")] : _vm._e()], 2), _vm._v(" "), _c('span', {
      staticClass: "r linkmore"
    }, [_vm._v(" " + _vm._s(_vm.g.Dict.CouponTypes[c.couponType]))])]), _vm._v(" "), (c.title) ? _c('dd', [_c('label', [_vm._v("券名称")]), _c('span', [_vm._v(_vm._s(c.title))])]) : _vm._e(), _vm._v(" "), _c('dd', [_c('label', [_vm._v("有效期")]), _c('span', [_vm._v(_vm._s(_vm.g.Util.formatDate(c.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(c.endDate)))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("发布数量")]), _c('span', [_vm._v(_vm._s(c.totalNum) + " 张")])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("已领取数")]), _c('span', [_c('b', {
      staticClass: "orangered"
    }, [_vm._v(_vm._s(c.receivedNum))]), _vm._v(" 张")])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("领取人员")]), _c('span', [_vm._v(_vm._s(_vm.g.Dict.GuestTypes[c.receiveLimitRole]))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("发布时间")]), _c('span', [_vm._v(_vm._s(c.pubTime))])]), _vm._v(" "), _c('dd', [_c('label', [_vm._v("每人限领")]), _c('span', [_vm._v(_vm._s(c.receiveLimitNum) + " 张")])]), _vm._v(" "), (c.needPayment) ? _c('dd', [_c('label', [_vm._v("在线购买价格")]), _c('span', [_vm._v(_vm._s(c.price) + " 元/张")])]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "opt-list theme-border-top row theme-padding justify-center"
    }, [_c('div', {
      staticClass: "theme-font-color wid50",
      on: {
        "click": function($event) {
          return _vm.openCouponEditDlg(idx)
        }
      }
    }, [_vm._v("编辑")]), _vm._v(" "), _c('div', {
      staticClass: "theme-font-color theme-border-left wid50",
      on: {
        "click": function($event) {
          return _vm.openCouponStatDlg(idx)
        }
      }
    }, [_vm._v("统计")])])])
  }), 0) : _vm._e()])]) : _vm._e(), _vm._v(" "), _c('section', {
    staticClass: "note"
  }, [_vm._m(0), _vm._v(" "), _c('ol', [_c('li', [_vm._v("健总管推出的电子优惠券，代替了纸质券，在贵店微官网的活动栏展示。")]), _vm._v(" "), _c('li', [_vm._v("设置好门店优惠券后，您可以将电子优惠券的页面分享到朋友圈，或者将二维码印到宣传单上，\n\t\t\t\t\t\t\t\t或者单独制作二维码牌放到合作商户店内，以供访客访问和参与。")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('li', [_vm._v("您的专属优惠券二维码（微信扫码用）：\n\t\t\t\t\t\t"), _c('div', {
    staticClass: "qrcode"
  }, [_c('img', {
    attrs: {
      "src": _vm.qrcodeUrl,
      "width": "120"
    }
  })])]), _vm._v(" "), (_vm.isInWxPage) ? _c('li', [_c('a', {
    staticClass: "theme-font-color",
    attrs: {
      "href": _vm.couponsPgaeUrl
    }
  }, [_vm._v("点击此链接可直接进入优惠券页面 →")])]) : _vm._e(), _vm._v(" "), _c('li', [_vm._v("\n          通过上述二维码\n          "), (_vm.isInWxPage) ? [_vm._v("或链接")] : _vm._e(), _vm._v("\n          进入微官网优惠券页面后，再分享给客户或朋友圈。如有客户参与（需填写姓名和手机号），"), _c('b', [_vm._v("此客户将自动分配到您名下")]), _vm._v("。\n        ")], 2)]), _vm._v(" "), _c('p')]), _vm._v(" "), _c('bottom-nav'), _vm._v(" "), (_vm.dlg.couponEditView) ? _c('van-popup', {
    style: ({
      height: '100%',
      width: '100%'
    }),
    attrs: {
      "position": "right"
    },
    model: {
      value: (_vm.dlg.couponEditView),
      callback: function($$v) {
        _vm.$set(_vm.dlg, "couponEditView", $$v)
      },
      expression: "dlg.couponEditView"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move",
    on: {
      "click": function($event) {
        _vm.dlg.couponEditView = false
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })]), _vm._v("\n      优惠券编辑\n    ")]), _vm._v(" "), _c('div', [_c('coupon-edit', {
    attrs: {
      "coupon-id": _vm.dlg.selectCouponId,
      "after-update": _vm.afterUpdatCoupon
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c('van-popup', {
    style: ({
      height: '100%',
      width: '100%'
    }),
    attrs: {
      "position": "right"
    },
    model: {
      value: (_vm.dlg.couponStatView),
      callback: function($$v) {
        _vm.$set(_vm.dlg, "couponStatView", $$v)
      },
      expression: "dlg.couponStatView"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move",
    on: {
      "click": function($event) {
        _vm.dlg.couponStatView = false
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })]), _vm._v("\n        " + _vm._s('优惠券统计 - ' + _vm.dlg.selectCouponTit) + "\n      ")]), _vm._v(" "), _c('coupon-stat', {
    attrs: {
      "coupon": _vm.dlg.selectCoupon
    }
  })], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("优惠券说明")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_vm._v("客户领取优惠券时，需提交通过验证码的手机号（"), _c('i', [_vm._v("将自动存入客户模块")]), _vm._v("）。因此，门店可以较低的成本获取到有价值的客户。")])
}]}

/***/ }),

/***/ 2444:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-head', {
    attrs: {
      "title": "微官网介绍"
    }
  }), _vm._v(" "), _c('section', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "article"
  }, [_vm._v("\n      微官网是场馆的手机版官网，可充分展示场馆风采，能够扩大场馆宣传、吸引更多客户。"), _c('p'), _vm._v("\n      微官网对所有人开放，展示场馆介绍、会员卡（可在线购卡）、教练、课程、以及各种营销活动。\n      "), _c('p'), _vm._v("\n      下面是贵店微官网的二维码，用微信扫一扫，或长按识别二维码。\n      "), (_vm.qrcodeUrl) ? _c('div', {
    staticClass: "qrcode"
  }, [_c('img', {
    attrs: {
      "src": _vm.qrcodeUrl
    }
  })]) : _vm._e()])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('bottom-nav')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("微官网是什么")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("微官网如何使用")])]), _vm._v(" "), _c('div', {
    staticClass: "article"
  }, [_vm._v("\n      贵店的专属微官网有如下使用或访问方式：\n      "), _c('ol', [_c('li', [_vm._v("将微官网的页面地址嵌入贵店微信公众号的底部菜单中"), _c('span', {
    staticClass: "theme-font-color2"
  }, [_vm._v("（设置方法见健总管电脑网页版）")]), _vm._v("；")]), _vm._v(" "), _c('li', [_vm._v("将微官网分享到微信好友或朋友圈，让微官网在移动互联网中自由传播；")]), _vm._v(" "), _c('li', [_vm._v("将微官网的二维码打印到贵店宣传单上，访客扫一下即可访问；")]), _vm._v(" "), _c('li', [_vm._v("更多方式，期待您的想象。")])])])])
}]}

/***/ }),

/***/ 2460:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-head', {
    attrs: {
      "title": "拼团"
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "note"
  }, [_vm._m(0), _vm._v(" "), _c('ol', [_c('li', [_vm._v("拼团是指多人在规定的时间内购买同一个商品享受优惠的购物活动；")]), _vm._v(" "), _c('li', [_vm._v("拼团可以由任何人自由发起（即为开团），然后将拼团商品页面分享给微信好友或朋友圈，以促使拼团人数尽快达到；")]), _vm._v(" "), _c('li', [_vm._v("每一个拼团人员（包括发起者和参与者）都需要在线支付预付款；")]), _vm._v(" "), _c('li', [_vm._v("在拼团规定的时间内达到规定人数，则拼团成功，否则视为失败；失败后，门店可手动在健总管系统中退回客户预付款；")]), _vm._v(" "), _c('li', [_vm._v("您的专属拼团二维码（微信扫码用）：\n\t\t\t\t\t\t"), _c('div', {
    staticClass: "qrcode"
  }, [_c('img', {
    attrs: {
      "src": _vm.qrcodeUrl
    }
  })])]), _vm._v(" "), (_vm.isInWxPage) ? _c('li', [_c('a', {
    staticClass: "theme-font-color",
    attrs: {
      "href": _vm.groupbuyPageUrl
    }
  }, [_vm._v("点击此链接可直接进入拼团商品页面 →")])]) : _vm._e(), _vm._v(" "), _c('li', [_vm._v("\n          通过上述二维码\n          "), (_vm.isInWxPage) ? [_vm._v("或链接")] : _vm._e(), _vm._v("\n          进入拼团商品页面后，再分享给客户或朋友圈。如有客户参与（需填写姓名和手机号），"), _c('b', [_vm._v("此客户将自动分配到您名下")]), _vm._v("。\n        ")], 2)])]), _vm._v(" "), _c('bottom-nav')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('span', {
    staticClass: "tit"
  }, [_vm._v("拼团说明")])])
}]}

/***/ }),

/***/ 826:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1870)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1381),
  /* template */
  __webpack_require__(2267),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-161bb4bc",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 827:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2029)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1382),
  /* template */
  __webpack_require__(2423),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7c568193",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 828:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2038)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1383),
  /* template */
  __webpack_require__(2432),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-84203816",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2065)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1391),
  /* template */
  __webpack_require__(2460),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-b496f872",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 837:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1960)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1392),
  /* template */
  __webpack_require__(2355),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4b7165a0",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1850)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1393),
  /* template */
  __webpack_require__(2247),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-02c3317c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 839:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2049)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1394),
  /* template */
  __webpack_require__(2444),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-968740ba",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 841:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1946)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1396),
  /* template */
  __webpack_require__(2342),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-44fe303f",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});