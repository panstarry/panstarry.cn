webpackJsonp([12],{

/***/ 1131:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1150)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1140),
  /* template */
  __webpack_require__(1161),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-dda75498",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1140:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    lessonId: {
      type: Number,
      required: true
    },
    memberId: {
      type: Number,
      required: true
    },
    coachPhotoUrl: {
      type: String,
      required: false
    },
    checkPos: {
      type: Boolean,
      default: false
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
    },
    targetType: { // 目标对象类型： member, cust
      type: String,
      default: 'member',
      required: false
    }
  },

  data() {
    return {
      g: window.$,
      memberCardList: [],
      selectCardIndex: null,
      checkinCount: 1,
      allowCkinCardCnt: 0,
      cardPaymentConf: {},
      lesson: null,
      memberLesson: null,
      optName: null,
      selectCardErr: null,
      posChecking: false,
      posCheckErr: '',
      paymentCount: 1,
      pos: {
        rows: null,
        cols: null,
        positions: {},
        usedPositionList: [],
        selectPos: null,
        selectPosArr: [],
        selections: {}
      },
      hideInvalidCards: true,
      showUnusableCard: '隐藏无效卡',
      hideUnusableCard: '显示无效卡',
      glBookingTips: null,
      hideGlBookingCountInMobile: null
    };
  },

  created() {
    if (this.optType === 1) {
      this.optName = '预约';
      this.queryShopArgs();
    } else if (this.optType === 2) {
      this.optName = '签到';
    }
    if (this.memberId && this.lessonId) {
      if (this.optType === 1) {
        this.doQuery();
      } else {
        // 签到
        if (this.checkPos) {
          this.posChecking = true;
          $.Util.checkPosition(() => {
            this.posChecking = false;
            this.doQuery();
          }, () => {
            this.posCheckErr = $.Lang.CHECKIN_POS_ERR;
          });
        } else {
          this.posChecking = false;
          this.doQuery();
        }
      }
    }
  },

  computed: {
    canSubmit: function () {
      if (this.optType === 1) {
        // 预约
        if (this.lesson.isNeedBooking) {
          return true;
        }
      } else if (this.optType === 2) {
        // 签到
        if (!this.memberLesson || this.memberLesson.status === 1) {
          return true;
        }
      }
      return false;
    }
  },

  methods: {
    initData() {
      this.lesson = null;
      this.selectCardIndex = null;
      this.canSubmit = false;
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
      this.queryLesson(() => {
        if (this.optType === 1) {
          this.queryMemberLessonPosition();
          if (this.targetType === 'member') {
            this.queryMemberCard();
          }
        } else {
          this.queryMemberLesson();
        }
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

    queryMemberLesson() {
      let args = {
        lessonId: this.lessonId,
        page: 1
      };
      if (this.targetType === 'member') args.memberId = this.memberId;else args.custId = this.memberId;
      this.memberCardList = null; // init
      $.Req.service($.SvName.MEMBER_GROUP_LESSON_QUERY, args, ret => {
        if (ret.memberLessonList && ret.memberLessonList.length > 0) {
          this.memberLesson = ret.memberLessonList[0];
        } else {
          this.memberLesson = null;
        }
        if (this.targetType === 'member') {
          this.queryMemberCard();
        }
      });
    },

    queryMemberCard() {
      this.selectCardIndex = null; // init
      $.Req.service($.SvName.MEMBER_CARD_QUERY, { memberId: this.memberId }, ret => {
        this.memberCardList = ret.memberCardList;
        let ckinCnt = 0;
        let i = 0;
        let firstCkinCardIdx = -1;
        let today = new Date();
        for (let mc of this.memberCardList) {
          mc.canSelect = this.canSelect(mc);
          if (mc.canSelect) {
            ckinCnt++;
            if (firstCkinCardIdx < 0) firstCkinCardIdx = i;
          }
          // 计算余额 (mc.balance)
          if (mc.cardType === 1) {
            if (mc.beginDate && Date.new(mc.beginDate).compareDatePart(today) <= 0) {
              let days = Date.new(mc.endDate).subtract(today);
              mc.balance = '剩余：<b class="theme-font-color small">{0}</b> 天'.format(days);
            } else if (mc.canEntryCheckin) {
              mc.balance = '尚未开卡使用';
            }
          } else if (mc.cardType === 2) {
            mc.balance = '剩余：<b class="theme-font-color small">{0}</b> 次'.format(mc.currentTimes);
          } else if (mc.cardType === 3) {
            mc.balance = '剩余：<b class="theme-font-color small">{0}</b> 元'.format(mc.currentAmount);
          } else if (mc.cardType === 4) {
            mc.balance = '<b class="theme-font-color small">{0}</b> {1}'.format(mc.currentTimes, $.Dict.CardTimeTypes[mc.cardTimeType]);
          }
          // 计算课时费（mc.cost）
          if (mc.canSelect) {
            mc.cost = this.getCardPaymentDesc(mc.cardType, mc.cardId, mc.cardTimeType);
          } else {
            mc.cost = '<span class="red"><i class="iconfont icontishi1"></i> {0}</span>'.format(this.selectCardErr);
          }
          if (mc.beginDate && mc.endDate) {
            mc.useDates = '<b class="small" style="font-size: 12px;">使用期限：{0} ~ {1}'.format($.Util.formatDate(mc.beginDate), $.Util.formatDate(mc.endDate)) + '</span>';
          }
          if (this.isInVacation(mc.vacationBegin, mc.vacationEnd)) {
            mc.vacationDates = '<b class="small" >请假：{0} ~ {1}'.format($.Util.formatDate(mc.vacationBegin), $.Util.formatDate(mc.vacationEnd)) + '</span>';
          }
          if (mc.limitBeginTime && mc.limitEndTime) {
            let tit = mc.cardClass > 0 ? '约课' : '用卡';
            mc.limitTimes = '<b class="small" style="font-size: 12px;">限定{0}时间：{1} ~ {2}'.format(tit, $.Util.formatTime(mc.limitBeginTime), $.Util.formatTime(mc.limitEndTime)) + '</span>';
          }
          if (mc.limitWeeks) {
            let desc = mc.cardClass > 0 ? '上课' : '用卡';
            mc.limitWeeks = '<b class="small" style="font-size: 12px;">限定' + desc + '星期：' + $.MemberLib.formatWeekNames(mc.limitWeeks);
          }
          i++;
        }
        if (ckinCnt >= 1) {
          this.selectCardIndex = firstCkinCardIdx;
        }
        this.allowCkinCardCnt = ckinCnt;
      });
    },

    getCardPaymentDesc(cardType, cardId, cardTimeType) {
      if (this.cardPaymentConf) {
        let cardPayment = this.cardPaymentConf[cardId];
        if (cardType === 1) return '<b class="gray medium" style="font-size: 12px;">期限卡不单独计费</b>';else if (cardType === 2) return '每次计费 <b class="theme-font-color medium">{0}</b> 次'.format(cardPayment);else if (cardType === 3) return '每次计费 <b class="theme-font-color medium">{0}</b> 元'.format(cardPayment);else if (cardType === 4) return '每次计费 <b class="theme-font-color medium">{0}</b> {1}'.format(cardPayment, $.Dict.CardTimeTypes[cardTimeType]);else return '';
      } else {
        return '<span class="green">本节课不计费</span>';
      }
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

    canSelect(mc) {
      this.selectCardErr = null;
      let now = new Date();
      let ret = $.MemberLib.checkMemberCard(mc, this.lesson.beginTime, this.lesson.endTime, Date.new(this.lesson.lessonDate));
      if (!ret[0]) {
        this.selectCardErr = ret[1];
        return ret[0];
      }
      if (!(mc.cardId in this.cardPaymentConf)) {
        // 该课程未设置本卡
        this.selectCardErr = '该课未设置本卡';
        return false;
      }
      // 检查余额
      let cardPayment = this.cardPaymentConf[mc.cardId];
      if (mc.cardType === 1) {
        // 期限卡
        if (mc.beginDate) {
          if (now.compareDatePart(Date.new(mc.beginDate)) < 0) {
            this.selectCardErr = '尚未到开卡日期';
            return false;
          }
        }
        if (mc.endDate) {
          if (now.compareDatePart(mc.endDate) > 0) {
            this.selectCardErr = '会员卡已过期';
            return false;
          }
        }
      } else if (mc.cardType === 2) {
        // 次卡
        if (mc.currentTimes - cardPayment < 0) {
          this.selectCardErr = '会员卡次数不足';
          return false;
        }
      } else if (mc.cardType === 3) {
        // 储值卡
        if (mc.currentAmount - cardPayment < 0) {
          this.selectCardErr = '会员卡余额不足';
          return false;
        }
      }
      if (!this.cardPaymentConf) {
        // 无需计费
        return true;
      }
      return true;
    },

    submitForMember() {
      if (!this.memberLesson) {
        // 未预约
        if (this.memberCardList && this.memberCardList.length > 0) {
          if (this.selectCardIndex === null) {
            $.Dlg.error('请选择一张会员卡');
            return;
          } else if (this.memberCardList[this.selectCardIndex].cardType !== 1 && this.paymentCount < 1) {
            $.Dlg.error('人数必须大于0');
            return;
          }
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
      }

      if (this.optType === 1) {
        $.Dlg.confirm('您确定预约本节课吗？', yes => {
          this.doMemberLessonOpt();
        });
      } else {
        this.doMemberLessonOpt();
      }
    },

    submitForCust() {
      if (!this.memberLesson || this.optType === 1) {
        if (this.lesson.maxStudents > this.lesson.bookings && this.pos.rows && this.pos.cols) {
          if (this.pos.selectPos === null) {
            $.Msg.error('请选择一个上课位置');
            return;
          }
        }
      }
      if (this.optType === 1) {
        $.Dlg.confirm('您确定预约本节课吗？', yes => {
          this.doMemberLessonOptForCust();
        });
      } else {
        this.doMemberLessonOptForCust();
      }
    },

    doMemberLessonOpt() {
      let args = {
        lessonId: this.lessonId,
        memberId: this.memberId,
        optType: this.optType,
        courseType: 1,
        paymentCount: this.paymentCount,
        positions: this.pos.selectPosArr
      };
      if (this.memberLesson) {
        args.mlId = this.memberLesson.mlId;
        args.mcId = this.memberLesson.mcId;
      } else if (this.selectCardIndex !== null) {
        args.mcId = this.memberCardList[this.selectCardIndex].mcId;
      } else {
        $.Dlg.error('未发现签到会员卡');
      }
      if (args.optType === 1) {
        args.checkcode = $.MemberLib.getCheckcodeForGlBooking(args.mcId, this.memberId, this.lessonId);
      }
      $.Req.service($.SvName.MEMBER_LESSON_OPERATE, args, ret => {
        if (this.optType === 1) $.Msg.success('预约成功');else if (this.optType === 2) $.Msg.success('签到成功');
        if (this.afterSubmit) {
          this.afterSubmit();
        }
      }, true, err => {
        if (this.optType === 1 && this.pos.rows && this.pos.cols) {
          this.queryMemberLessonPosition(false);
        }
        $.Dlg.error(err);
      });
    },

    doMemberLessonOptForCust() {
      let args = {};
      let svName = null;
      if (!this.memberLesson || this.optType === 1) {
        args = {
          lessonId: this.lessonId,
          custId: this.memberId,
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

      $.Req.service(svName, args, ret => {
        if (this.optType === 1) $.Msg.success('预约成功');else if (this.optType === 2) $.Msg.success('签到成功');
        if (this.afterSubmit) {
          this.afterSubmit();
        }
      }, true, err => {
        if (this.optType === 1 && this.pos.rows && this.pos.cols) {
          this.queryMemberLessonPosition(false);
        }
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
        if (refresh) $.Msg.success($.Lang.REFRESH_DONE);
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

    queryShopArgs() {
      let args = {
        typeIdList: [125, 2054]
      };
      $.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
        for (let t of ret.argList) {
          if (t.typeId === 2054) this.glBookingTips = t.typeValue;else if (t.typeId === 125) this.hideGlBookingCountInMobile = t.typeValue === 'true';
        }
      });
    }
  }
});

/***/ }),

/***/ 1145:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".-checkin .card-tips[data-v-dda75498]{padding:12px 0 0;color:#ff4500}.-checkin .submit[data-v-dda75498]{margin:15px 0}.-checkin .submit .btn[data-v-dda75498]{height:38px;line-height:38px;margin:0 auto;padding:0}.-checkin .query-opt[data-v-dda75498]{padding:5px 0 0;margin:0}.-checkin .query-opt button[data-v-dda75498]{margin:0 7px;width:100px}.-checkin .lesson-items[data-v-dda75498]{padding:6px 8px}.-checkin .lesson-items li.item[data-v-dda75498]{padding:10px 12px;margin:14px 3px 10px}.-checkin .lesson-items li.item h2[data-v-dda75498]{margin:10px 5px 15px;text-align:left}.-checkin .cards[data-v-dda75498]{padding:0}.-checkin .cards .item[data-v-dda75498]{padding:10px 16px}.-checkin .cards .item[data-v-dda75498]:last-child{border-bottom:0}.-checkin .cards .item table[data-v-dda75498]{width:100%}.-checkin .cards .item td[data-v-dda75498]{padding-bottom:10px;line-height:1.5}.-checkin .cards .item .icon-card-1[data-v-dda75498]{padding-right:5px}.-checkin .cards .icon-img[data-v-dda75498]{width:34px;height:28px;display:inline-block;vertical-align:-7px;margin-right:10px}.-checkin .cards .left-days[data-v-dda75498]{min-width:80px;text-align:right;font-size:13px}.-checkin .cards .card-detail[data-v-dda75498]{flex-grow:1;width:0}.-checkin .cards .card-detail div[data-v-dda75498]{font-size:14px;margin-bottom:5px}.-checkin .cards .card-detail dd[data-v-dda75498]{font-size:12px;margin-top:3px}.-checkin b.small[data-v-dda75498]{font-size:12px;font-weight:600}.-checkin .payment-cnt[data-v-dda75498]{padding:6px 20px;margin-bottom:10px}.-checkin .payment-cnt input[data-v-dda75498]{outline:none;padding:0 4px;width:42px;height:25px;font-size:14px;border:0;border-bottom:1px solid #ddd;border-radius:0;font-weight:700}.-checkin .payment-cnt .tips[data-v-dda75498]{padding-left:3px;color:#aaa}.-checkin .postbl[data-v-dda75498]{padding:10px 16px;width:100%;overflow-x:auto;max-height:30vh}.-checkin .postbl .-tit[data-v-dda75498]{font-size:13px;font-weight:700;padding:5px 0 15px}.-checkin .postbl .-tit .spt[data-v-dda75498]{padding:0 12px;font-weight:400;font-size:12px}.-checkin .postbl .-tit a[data-v-dda75498]{font-size:12px;font-weight:400;padding:2px 10px;border:1px solid #2e90f7;margin-left:20px;border-radius:12px}.-checkin .postbl td div[data-v-dda75498]{margin:6px 4px;display:inline-block;height:26px;width:35px;line-height:24px;text-align:center}.-checkin .postbl .tips[data-v-dda75498]{padding:10px 16px 0;color:#aaa;font-size:11px}.-checkin .postbl .tips i[data-v-dda75498]{padding-right:6px;color:orange;font-size:14px}.-checkin .queue-note[data-v-dda75498]{border-top:1px dashed orange;border-bottom:1px dashed orange}.switch[data-v-dda75498]{padding-bottom:10px}.payment-input[data-v-dda75498]{text-align:center}.course-name[data-v-dda75498]{line-height:21px}.lesson-elems[data-v-dda75498]{text-align:left;margin-left:20px}.lesson-elems li[data-v-dda75498]{list-style-type:square;line-height:2}.lesson-elems li label[data-v-dda75498]{width:90px;display:inline-block}.lesson-coach-photo[data-v-dda75498]{text-align:center;position:absolute;right:25px;margin-top:30px}.lesson-coach-photo img[data-v-dda75498]{display:block;margin:0 auto;width:70px;height:70px;border-radius:50%}.gl-booking-tips .iconfont[data-v-dda75498]{font-size:14px;padding-right:4px}.gl-booking-tips .cont[data-v-dda75498]{padding:12px 18px;line-height:1.8}.pos-tips[data-v-dda75498]{padding:12px;margin:12px;background:#eee;border-radius:2px}.pos-tips .tit[data-v-dda75498]{padding-bottom:10px}.pos-tips .tit i[data-v-dda75498]{padding-right:5px}.pos-tips .wenxin-tip li[data-v-dda75498]{padding-left:0;margin-left:17px;list-style:decimal}.theme-black .postbl td div[data-v-dda75498]{background:#393939}.theme-black .pos-tips[data-v-dda75498]{background:#333;color:#bbb}", ""]);

// exports


/***/ }),

/***/ 1150:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1145);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("3de97bd6", content, true, {});

/***/ }),

/***/ 1161:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-checkin"
  }, [(_vm.optType === 2 && _vm.posChecking) ? _c('div', {
    staticClass: "pos-check"
  }, [(_vm.posCheckErr) ? _c('span', {
    staticClass: "err"
  }, [_vm._v(_vm._s(_vm.posCheckErr))]) : _c('span', {
    staticClass: "loading"
  }, [_c('i', {
    staticClass: "iconfont icongps-1"
  }), _vm._v(" 正在检查您的位置...")])]) : _vm._e(), _vm._v(" "), (_vm.lesson) ? [_c('div', {
    staticClass: "ret"
  }, [(_vm.coachPhotoUrl) ? _c('div', {
    staticClass: "lesson-coach-photo"
  }, [_c('img', {
    attrs: {
      "src": _vm.coachPhotoUrl
    }
  })]) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "lesson-items"
  }, [_c('li', {
    staticClass: "item theme-bg"
  }, [_c('h2', [_vm._v(_vm._s(_vm.lesson.courseName))]), _vm._v(" "), _c('ul', {
    staticClass: "lesson-elems"
  }, [_c('li', [_c('label', [_vm._v("上课教练：")]), _vm._v("\n                " + _vm._s(_vm.lesson.coachName) + "\n              ")]), _vm._v(" "), _c('li', [_c('label', [_vm._v("上课时间：")]), _vm._v(" "), _c('b', {
    staticClass: "time"
  }, [_vm._v(_vm._s(Date.new(_vm.lesson.lessonDate).format('yyyy/M/d')) + "  \n                  " + _vm._s(_vm.formatTime(_vm.lesson.beginTime)) + "~" + _vm._s(_vm.formatTime(_vm.lesson.endTime)))])]), _vm._v(" "), (_vm.optType === 1 && !_vm.hideGlBookingCountInMobile) ? _c('li', [_c('label', [_vm._v("预约详情：")]), _vm._v(" "), (_vm.lesson.isNeedBooking && _vm.lesson.bookings) ? _c('span', [_vm._v(_vm._s(_vm.lesson.bookings) + " / " + _vm._s(_vm.lesson.maxStudents) + "\n                        "), (_vm.lesson.maxStudents > _vm.lesson.bookings) ? [_vm._v("（"), _c('span', {
    staticClass: "red"
  }, [_vm._v("剩余 " + _vm._s(_vm.lesson.maxStudents - _vm.lesson.bookings) + " 个名额")]), _vm._v("）")] : (_vm.lesson.maxStudents < _vm.lesson.bookings) ? [_vm._v("（"), _c('span', {
    staticClass: "red"
  }, [_vm._v("排队 " + _vm._s(_vm.lesson.bookings - _vm.lesson.maxStudents) + " 人")]), _vm._v("）")] : _vm._e()], 2) : _vm._e(), _vm._v(" "), (_vm.lesson.isNeedBooking && !_vm.lesson.bookings) ? _c('span', {
    staticClass: "gray"
  }, [_vm._v("尚未有人预约")]) : _vm._e(), _vm._v(" "), (!_vm.lesson.isNeedBooking) ? _c('span', {
    staticClass: "gray"
  }, [_vm._v("无需预约")]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.memberLesson) ? [_c('li', [_c('label', [_vm._v("上课状态：")]), _c('span', {
    staticClass: "orange"
  }, [_vm._v(" " + _vm._s(_vm.g.Dict.MemberLessonStatus[_vm.memberLesson.status]))])]), _vm._v(" "), (_vm.memberLesson.status === 1) ? _c('li', [_c('label', [_vm._v("预约人：")]), _vm._v(" " + _vm._s(_vm.memberLesson.bookingUname))]) : _vm._e(), _vm._v(" "), (_vm.memberLesson.status === 1) ? _c('li', [_c('label', [_vm._v("预约时间：")]), _vm._v(" " + _vm._s(_vm.memberLesson.bookingTime))]) : _vm._e(), _vm._v(" "), (_vm.memberLesson.cardName) ? _c('li', [_c('label', [_vm._v("使用会员卡：")]), _vm._v(" " + _vm._s(_vm.memberLesson.cardName))]) : _vm._e(), _vm._v(" "), (_vm.memberLesson.cardName) ? _c('li', [_c('label', [_vm._v("会员卡计费：")]), _vm._v(" "), (_vm.memberLesson.cardType === 1) ? [_vm._v("不单独计费")] : (_vm.memberLesson.cardType === 2) ? [_c('b', [_vm._v(_vm._s(_vm.memberLesson.cardPayment))]), _vm._v(" 次")] : (_vm.memberLesson.cardType === 3) ? [_c('b', [_vm._v(_vm._s(_vm.memberLesson.cardPayment))]), _vm._v(" 元")] : (_vm.memberLesson.cardType === 4) ? [_c('b', [_vm._v(_vm._s(_vm.memberLesson.cardPayment))]), _vm._v(" " + _vm._s(_vm.g.Dict.CardTimeTypes[_vm.memberLesson.cardTimeType]))] : _vm._e()], 2) : _vm._e(), _vm._v(" "), (_vm.memberLesson.status === 2) ? _c('li', [_c('label', [_vm._v("签到人：")]), _vm._v(_vm._s(_vm.memberLesson.checkinUname))]) : _vm._e(), _vm._v(" "), (_vm.memberLesson.status === 2) ? _c('li', [_c('label', [_vm._v("签到时间：")]), _vm._v(_vm._s(_vm.memberLesson.checkinTime))]) : _vm._e()] : _vm._e()], 2)])])]), _vm._v(" "), (_vm.optType === 1 && _vm.pos.rows && _vm.pos.cols && _vm.lesson.maxStudents > _vm.lesson.bookings) ? _c('section', [_c('div', {
    staticClass: "hd row theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("请选择"), (_vm.paymentCount > 1) ? _c('span', {
    staticClass: "orangered"
  }, [_vm._v(" " + _vm._s(_vm.paymentCount) + " 个")]) : _vm._e(), _vm._v("上课位置")]), _vm._v(" "), _c('div', {
    staticClass: "light"
  }, [_c('a', {
    staticClass: "theme-font-color",
    on: {
      "click": function($event) {
        return _vm.queryMemberLessonPosition(true)
      }
    }
  }, [_vm._v("刷新")])])]), _vm._v(" "), _c('div', {
    staticClass: "postbl"
  }, [_c('table', _vm._l((parseInt(_vm.pos.rows)), function(r) {
    return _c('tr', _vm._l((parseInt(_vm.pos.cols)), function(c) {
      return _c('td', [_c('div', {
        class: {
          'null': !_vm.pos.positions[r + '-' + c],
          'empty': _vm.pos.positions[r + '-' + c] && !_vm.pos.usedPositionList.contains(_vm.pos.positions[r + '-' + c]),
          'on': _vm.pos.selections[_vm.pos.positions[r + '-' + c]]
        },
        on: {
          "click": function($event) {
            return _vm.selectPosition(_vm.pos.positions[r + '-' + c])
          }
        }
      }, [_vm._v(_vm._s(_vm.pos.positions[r + '-' + c] ? _vm.pos.positions[r + '-' + c] : ' ') + "\n\t\t\t\t\t      ")])])
    }), 0)
  }), 0)]), _vm._v(" "), _vm._m(0)]) : _vm._e(), _vm._v(" "), (_vm.glBookingTips) ? _c('section', {
    staticClass: "gl-booking-tips"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "cont"
  }, [_c('pre', [_vm._v(_vm._s(_vm.glBookingTips))])])]) : _vm._e(), _vm._v(" "), (!_vm.memberLesson && _vm.targetType === 'member') ? _c('div', {
    staticClass: "opt-cards"
  }, [_c('section', {
    staticClass: "cards"
  }, [_c('div', {
    staticClass: "hd row theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("请选择约课计费卡")]), _vm._v(" "), _c('div', {
    staticClass: "light"
  }, [_c('qd-switch', {
    attrs: {
      "title": "隐藏无效卡"
    },
    model: {
      value: (_vm.hideInvalidCards),
      callback: function($$v) {
        _vm.hideInvalidCards = $$v
      },
      expression: "hideInvalidCards"
    }
  })], 1)]), _vm._v(" "), _vm._l((_vm.memberCardList), function(mc, index) {
    return (mc.canSelect || !_vm.hideInvalidCards) ? _c('div', {
      staticClass: "item theme-border-bottom",
      class: {
        'on': _vm.selectCardIndex === index
      }
    }, [_c('div', {
      staticClass: "row start align-center"
    }, [(mc.canSelect) ? [_c('i', {
      staticClass: "iconfont icon-radio",
      class: {
        'icon-radio-on': _vm.selectCardIndex === index
      },
      on: {
        "click": function($event) {
          _vm.selectCardIndex = index
        }
      }
    })] : [_c('i', {
      staticClass: "iconfont iconfork",
      staticStyle: {
        "color": "#f06e6e",
        "font-size": "13px"
      }
    })], _vm._v(" "), _c('img', {
      staticClass: "icon-img ml-5",
      attrs: {
        "src": '../../../static/img/member/vip' + mc.cardType + '.png'
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "card-detail"
    }, [_c('div', [_c('b', [_vm._v(_vm._s(mc.cardName))])]), _vm._v(" "), (mc.remark) ? _c('div', [_c('i', {
      staticClass: "medium gray"
    }, [_vm._v(_vm._s(mc.remark))])]) : _vm._e(), _vm._v(" "), _c('dl', [(mc.cost) ? _c('dd', {
      domProps: {
        "innerHTML": _vm._s(mc.cost)
      }
    }) : _vm._e(), _vm._v(" "), (mc.limitTimes) ? _c('dd', {
      domProps: {
        "innerHTML": _vm._s(mc.limitTimes)
      }
    }) : _vm._e(), _vm._v(" "), (mc.limitWeeks) ? _c('dd', {
      domProps: {
        "innerHTML": _vm._s(mc.limitWeeks)
      }
    }) : _vm._e(), _vm._v(" "), (mc.useDates) ? _c('dd', {
      domProps: {
        "innerHTML": _vm._s(mc.useDates)
      }
    }) : _vm._e(), _vm._v(" "), (mc.balance) ? _c('dd', {
      domProps: {
        "innerHTML": _vm._s(mc.balance)
      }
    }) : _vm._e(), _vm._v(" "), (mc.expDates) ? _c('dd', {
      domProps: {
        "innerHTML": _vm._s(mc.expDates)
      }
    }) : _vm._e(), _vm._v(" "), (mc.vacationDates) ? _c('dd', {
      domProps: {
        "innerHTML": _vm._s(mc.vacationDates)
      }
    }) : _vm._e()])])], 2)]) : _vm._e()
  })], 2), _vm._v(" "), (_vm.targetType === 'member' && _vm.lesson.maxMlBookings > 1 && _vm.selectCardIndex !== null && _vm.memberCardList[_vm.selectCardIndex].cardType !== 1) ? _c('div', {
    staticClass: "payment-cnt"
  }, [(_vm.optType === 1) ? [_vm._v("预约人数")] : [_vm._v("签到人数")], _vm._v("："), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.paymentCount),
      expression: "paymentCount",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "payment-input",
    attrs: {
      "type": "tel",
      "title": ""
    },
    domProps: {
      "value": (_vm.paymentCount)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.paymentCount = _vm._n($event.target.value)
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }), _vm._v("人"), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（次卡和储值卡用）")])], 2) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.targetType === 'member') ? _c('div', {
    staticClass: "submit"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: ((_vm.selectCardIndex !== null || _vm.memberLesson) && _vm.canSubmit),
      expression: "(selectCardIndex !== null || memberLesson) && canSubmit"
    }],
    staticClass: "theme-btn-bg largest-btn",
    on: {
      "click": _vm.submitForMember
    }
  }, [_vm._v("\n          " + _vm._s(_vm.optName) + "\n        ")])]) : (_vm.targetType === 'cust') ? _c('div', {
    staticClass: "submit"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.canSubmit),
      expression: "canSubmit"
    }],
    staticClass: "theme-btn-bg largest-btn",
    on: {
      "click": _vm.submitForCust
    }
  }, [_vm._v("\n\t\t\t    " + _vm._s(_vm.optName) + "\n\t\t    ")])]) : _vm._e()] : (!_vm.posChecking) ? _c('p', {
    staticClass: "center"
  }, [_vm._v("加载中...")]) : _vm._e(), _vm._v(" "), (_vm.lesson && _vm.lesson.enableQueue && _vm.lesson.maxStudents <= _vm.lesson.bookings) ? _c('div', {
    staticClass: "bottom-remark"
  }, [_vm._m(2), _vm._v(" "), _vm._m(3)]) : _vm._e()], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pos-tips"
  }, [_c('div', {
    staticClass: "tit"
  }, [_c('i', {
    staticClass: "iconfont iconinfo"
  }), _vm._v("温馨提示：")]), _vm._v(" "), _c('ol', {
    staticClass: "wenxin-tip"
  }, [_c('li', [_vm._v("以上区域用于选择上课位置，若位置过多，请在以上区域上下/左右滑动；")]), _vm._v(" "), _c('li', [_vm._v("若要滑动本页面，请在以上区域外滑动；")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd row theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("团课预约必读")]), _vm._v(" "), _c('div', {
    staticClass: "red medium"
  }, [_c('i', {
    staticClass: "iconzhuyi iconfont"
  }), _vm._v("请仔细阅读如下内容\n          ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', {
    staticClass: "theme-font-color2"
  }, [_c('i', {
    staticClass: "iconfont iconinfo big"
  }), _vm._v("排队说明")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', [_vm._v("本课已启用排队，当预约人数满员时，可以选择排队预约（与预约类似）；")]), _vm._v(" "), _c('li', [_vm._v("当有会员取消时，系统自动将首位排队人员转为正式预约会员，并发短信通知给该排队人员；")]), _vm._v(" "), _c('li', [_vm._v("在上课时间到达后，系统会自动清除排队人员，如有会员卡扣费，系统会自动退还。")])])
}]}

/***/ }),

/***/ 1168:
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


/* harmony default export */ __webpack_exports__["default"] = ({
	props: {},
	data() {
		return {
			g: window.$,
			now: null,
			enableQrcodeMach: null,
			outdateTimes: 180,
			timesCnt: null,
			urlForQrcodeMach: null,
			checkinInterval: null,
			reqId: null
		};
	},

	created() {
		this.init();
	},

	methods: {
		init() {
			this.queryShopArgs(() => {
				let endTime = this.now.getTime() + this.outdateTimes * 1000;
				let param = 'qrEndtime={0}#userId={1}'.format(endTime, $.data.user.encUid);
				this.urlForQrcodeMach = $.Conf.QR_CODE_URL + encodeURIComponent(param);
				this.reqId = $.Util.md5(param);
				//console.log(param)

				this.timesCnt = this.outdateTimes;
				let count = this.outdateTimes;
				this.checkinInterval = setInterval(() => {
					count--;
					this.timesCnt = count;
					if (count <= 0) {
						clearInterval(this.checkinInterval);
					}
				}, 1000);
			});
		},

		queryShopArgs(callback) {
			let args = {
				typeIdList: [2077, 2089]
			};
			$.Req.service($.SvName.SHOP_ARG_QUERY, args, (ret, systime) => {
				this.now = Date.new(systime);
				for (let r of ret.argList) {
					if (r.typeId === 2089) {
						this.outdateTimes = r.typeValue ? parseInt(r.typeValue) : 180;
					} else if (r.typeId === 2077) {
						this.enableQrcodeMach = r.typeValue === 'true';
					}
				}
				callback();
			});
		},

		queryMachRunLog() {
			$.Req.service($.SvName.QRCODE_MACH_RUN_LOG_MSG_QUERY, { reqId: this.reqId }, ret => {
				if (ret.msg) {
					$.Dlg.info(ret.msg, null, false);
				} else $.Dlg.warning('未查到此次扫码结果');
			}, true);
		}
	}
});

/***/ }),

/***/ 1174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".qrcode[data-v-8d9e11a4]{text-align:center}.qrcode .user[data-v-8d9e11a4]{padding-top:15px}.qrcode .qrcode-img[data-v-8d9e11a4]{padding:15px 15px 2px}.qrcode .qrcode-img img[data-v-8d9e11a4]{display:block;width:100%}.qrcode .err[data-v-8d9e11a4]{margin-top:30px;color:#ff4500}.qrcode .tips[data-v-8d9e11a4]{padding:20px 0;background:#fff;margin:0 15px}.qrcode .query-ret[data-v-8d9e11a4]{padding-top:20px}", ""]);

// exports


/***/ }),

/***/ 1178:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1174);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("29d4d092", content, true, {});

/***/ }),

/***/ 1180:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1178)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1168),
  /* template */
  __webpack_require__(1187),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-8d9e11a4",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1181:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1232)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1197),
  /* template */
  __webpack_require__(1276),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5a86560c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1187:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "qrcode"
  }, [_c('div', {
    staticClass: "user"
  }, [_vm._v("\n\t\t  欢迎您，" + _vm._s(_vm.g.data.user.uname) + "\n\t  ")]), _vm._v(" "), (_vm.enableQrcodeMach) ? [_c('div', {
    staticClass: "qrcode-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.urlForQrcodeMach
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "tips"
  }, [(_vm.timesCnt) ? [_c('b', {
    staticClass: "orangered"
  }, [_vm._v(_vm._s(_vm.timesCnt))]), _vm._v(" 秒后此二维码过期")] : (_vm.timesCnt === 0) ? _c('span', {
    staticClass: "orangered"
  }, [_vm._v("此二维码已过期，请 "), _c('a', {
    on: {
      "click": _vm.init
    }
  }, [_c('u', [_vm._v("点击刷新二维码")])])]) : _vm._e()], 2), _vm._v(" "), (_vm.reqId) ? _c('div', {
    staticClass: "query-ret"
  }, [_c('a', {
    on: {
      "click": _vm.queryMachRunLog
    }
  }, [_vm._v("查看扫码结果")])]) : _vm._e()] : _c('div', {
    staticClass: "err"
  }, [_vm._v("\n\t\t  该场馆尚未启用二维码设备\n\t  ")])], 2)
},staticRenderFns: []}

/***/ }),

/***/ 1197:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    memberId: {
      type: Number,
      required: true
    },
    checkPos: {
      type: Boolean,
      default: true
    },
    afterSubmit: {
      type: Function,
      default() {
        return {};
      }
    },
    dialog: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      g: window.$,
      memberCardList: null,
      selectCardIndex: null,
      checkinCount: 1,
      allowCkinCardCnt: null,
      selectCardErr: null,
      posChecking: true,
      posCheckErr: '',
      hideInvalidCards: true,
      showUnusableCard: '隐藏无效卡',
      hideUnusableCard: '显示无效卡'
    };
  },

  created() {
    if (this.memberId) {
      if (this.checkPos) {
        $.Util.checkPosition(() => {
          this.posChecking = false;
          this.doQuery();
        }, () => {
          this.posCheckErr = $.Lang.CHECKIN_POS_ERR;
        });
      } else {
        this.posChecking = false;
        this.doQuery();
      }
    }
  },

  methods: {
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
      this.memberCardList = [];
      this.selectCardIndex = null; // init
      $.Req.service($.SvName.MEMBER_CARD_QUERY, { memberId: this.memberId }, ret => {
        this.memberCardList = ret.memberCardList;
        let ckinCnt = 0;
        let i = 0;
        let firstCkinCardIdx = -1;
        let today = new Date();
        for (let mc of this.memberCardList) {
          mc.canEntryCheckin = this.canEntryCheckin(mc);
          if (mc.canEntryCheckin) {
            ckinCnt++;
            if (firstCkinCardIdx < 0) firstCkinCardIdx = i;
          }
          // 计算余额 (mc.balance)
          if (mc.cardType === 1) {
            if (mc.beginDate && Date.new(mc.beginDate).compareDatePart(today) <= 0) {
              let days = Date.new(mc.endDate).subtract(today);
              mc.balance = '剩余：<b class="theme-font-color small">{0}</b> 天'.format(days);
            } else {
              mc.balance = '<i class="gray small">尚未开卡使用</i>';
            }
          } else if (mc.cardType === 2) {
            mc.balance = '剩余：<b class="theme-font-color small">{0}</b> 次'.format(mc.currentTimes);
          } else if (mc.cardType === 3) {
            mc.balance = '剩余：<b class="theme-font-color small">{0}</b> 元'.format(mc.currentAmount);
          } else if (mc.cardType === 4) {
            mc.balance = '剩余：<b class="theme-font-color small">{0}</b> {1}'.format(mc.currentTimes, $.Dict.CardTimeTypes[mc.cardTimeType]);
          }
          // 计算签到费用 (mc.cost)
          if (mc.canEntryCheckin) {
            if (mc.allowCheckin) {
              if (mc.cardType === 2 && mc.checkinPayment) mc.cost = '每次签到计费 <b class="theme-font-color small">{0}</b> 次'.format(mc.checkinPayment);else if (mc.cardType === 3 && mc.checkinPayment) mc.cost = '每次签到计费 <b class="theme-font-color small">{0}</b> 元'.format(mc.checkinPayment);
            } else {
              mc.cost = '<b class="red small">未设置为签到卡</b>';
            }
          } else {
            mc.cost = '<span class="red"><i class="iconfont icontishi1"></i> {0}</b>'.format(this.selectCardErr);
          }
          if (mc.beginDate && mc.endDate) {
            mc.useDates = '使用期限：{0} ~ {1}'.format($.Util.formatDate(mc.beginDate), $.Util.formatDate(mc.endDate));
          }
          if (this.isInVacation(mc.vacationBegin, mc.vacationEnd)) {
            mc.vacationDates = '请假：{0} ~ {1}'.format($.Util.formatDate(mc.vacationBegin), $.Util.formatDate(mc.vacationEnd));
          }
          if (mc.limitBeginTime && mc.limitEndTime) {
            mc.limitTimes = '限定用卡时间：{0} ~ {1}'.format($.Util.formatTime(mc.limitBeginTime), $.Util.formatTime(mc.limitEndTime));
          }
          if (mc.limitWeeks) {
            mc.limitWeeks = '限定用卡星期：' + $.MemberLib.formatWeekNames(mc.limitWeeks);
          }
          i++;
        }
        if (ckinCnt >= 1) {
          this.selectCardIndex = firstCkinCardIdx;
          this.$emit('showEntryButton');
        }
        this.allowCkinCardCnt = ckinCnt;
      }, true);
    },

    canEntryCheckin(mc) {
      this.selectCardErr = null;
      if (!mc.allowCheckin) return false;
      let now = new Date();
      let ret = $.MemberLib.checkMemberCard(mc);
      if (!ret[0]) {
        this.selectCardErr = ret[1];
        return ret[0];
      }
      if (mc.cardType === 1) {
        // 期限卡
        if (mc.beginDate) {
          if (now.compareDatePart(Date.new(mc.beginDate)) < 0) {
            this.selectCardErr = '尚未到开卡日期';
            return false;
          }
        }
        if (mc.endDate) {
          if (now.compareDatePart(Date.new(mc.endDate)) > 0) {
            this.selectCardErr = '会员卡已过期';
            return false;
          }
        }
      } else if (mc.cardType === 2) {
        // 次卡
        if (mc.currentTimes - mc.checkinPayment < 0) {
          this.selectCardErr = '会员卡次数不足';
          return false;
        }
      } else if (mc.cardType === 3) {
        // 储值卡
        if (mc.currentAmount - mc.checkinPayment < 0) {
          this.selectCardErr = '会员卡余额不足';
          return false;
        }
        if (mc.moreCheckinPayments) {
          this.selectCardErr = '有多个计费项，需到前台签到';
          return false;
        }
      }
      return true;
    },

    handleEntryCheckin() {
      try {
        if (this.selectCardIndex === null) {
          $.Dlg.error('请选择一个签到卡');
          return;
        }
        if (this.allowCkinCardCnt > 1) {
          let msg = '确定选择【{0}】签到吗？'.format(this.memberCardList[this.selectCardIndex].cardName);
          if (!confirm(msg)) {
            return;
          }
        }
        if (this.memberCardList[this.selectCardIndex].cardType !== 1) {
          if (!this.checkinCount || this.checkinCount < 1) {
            $.Dlg.error('签到次数必须大于0');
            return;
          }
        }
        let args = {
          memberId: this.memberId,
          mcId: this.memberCardList[this.selectCardIndex].mcId,
          checkinCount: this.checkinCount
        };
        $.Req.service($.SvName.MEMBER_ENTRY_CHECKIN_CREATE, args, ret => {
          if (this.afterSubmit) {
            this.doQuery();
            this.afterSubmit();
          } else {
            $.Dlg.success('入场签到成功');
          }
        }, true);
      } catch (err) {
        $.Util.handleException(err);
      }
    },

    checkinButtonShow(i) {
      this.selectCardIndex = i;
      this.$emit('showEntryButton');
    }
  }
});

/***/ }),

/***/ 1217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".-checkin[data-v-5a86560c]{padding:0;margin-bottom:0}.-checkin .card-tips[data-v-5a86560c]{padding:15px 0 0;color:#ff4500}.-checkin .submit[data-v-5a86560c]{padding:15px 0;text-align:center}.-checkin .submit .primary[data-v-5a86560c]{height:30px}.-checkin .submit button[data-v-5a86560c]{width:85px}.-checkin .query-opt[data-v-5a86560c]{padding:5px 0 0;margin:0}.-checkin .query-opt button[data-v-5a86560c]{margin:0 7px;width:100px}.-checkin .checkin-times[data-v-5a86560c]{margin:0;padding:12px 16px;text-align:left}.-checkin .checkin-times input[data-v-5a86560c]{width:60px;outline:none;border:0;border-radius:0;height:27px;text-align:center;margin:0 5px}.-checkin .checkin-times .tips[data-v-5a86560c]{padding-left:5px;color:#aaa}.-checkin .warning[data-v-5a86560c]{color:#ff4500;text-align:center;padding:20px}.opt-cards[data-v-5a86560c]{margin:0;border:0}.opt-cards .opt-cards-hd[data-v-5a86560c]{padding:12px 16px}.opt-cards .opt-cards-hd .tit[data-v-5a86560c]{font-size:15px}.opt-cards .member-list[data-v-5a86560c]{overflow-y:scroll;max-height:300px;margin:0}.opt-cards .member-list .member-card-list[data-v-5a86560c]{display:flex;justify-content:flex-start;align-items:center;padding:12px 15px;margin:0 0 12px;box-shadow:none;border:none;border-bottom:1px solid #ededed}.opt-cards .member-list .member-card-list[data-v-5a86560c]:last-child{margin-bottom:0}.opt-cards .member-list .member-card-list .list-tit[data-v-5a86560c]{padding:8px 16px;border-radius:4px 4px 0 0;align-items:center;justify-content:flex-start}.opt-cards .member-list .member-card-list .list-tit span[data-v-5a86560c]{font-weight:700}.opt-cards .member-list .member-card-list .list-tit-bg1[data-v-5a86560c]{background:rgba(111,216,69,.2)}.opt-cards .member-list .member-card-list .list-tit-bg2[data-v-5a86560c]{background:rgba(94,163,230,.2)}.opt-cards .member-list .member-card-list .list-tit-bg3[data-v-5a86560c]{background:hsla(39,54%,66%,.2)}.opt-cards .member-list .member-card-list .list-tit-bg4[data-v-5a86560c]{background:rgba(111,216,69,.2)}.opt-cards .member-list .member-card-list .icon-img[data-v-5a86560c]{width:34px;height:29px;margin-left:6px}.opt-cards .member-list .member-card-list .right-side[data-v-5a86560c]{flex-grow:1;width:0;border-radius:4px;margin-left:12px;padding:0}.opt-cards .member-list .member-card-list .right-side .list-content[data-v-5a86560c]{text-align:left}.opt-cards .member-list .member-card-list .right-side .list-content .member-card-type[data-v-5a86560c]{font-size:14px}.opt-cards .member-list .member-card-list .right-side .list-content div[data-v-5a86560c],.opt-cards .member-list .member-card-list .right-side .list-content span[data-v-5a86560c]{font-size:12px}.opt-cards .member-list .member-card-list .right-side .list-content div[data-v-5a86560c]{margin-top:3px}.submit[data-v-5a86560c] .van-button--primary{width:calc(100% - 30px);margin:0 15px}.icon-radio[data-v-5a86560c]:before{margin:0 0 2px}.theme-black .opt-cards .member-list .member-card-list[data-v-5a86560c]{border-bottom:1px solid #111}.theme-black .opt-cards .member-list .member-card-list[data-v-5a86560c]:last-child{border:0}", ""]);

// exports


/***/ }),

/***/ 1232:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1217);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("93247610", content, true, {});

/***/ }),

/***/ 1276:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-checkin -style- tblform"
  }, [(_vm.memberId) ? [(_vm.posChecking) ? _c('div', {
    staticClass: "pos-check"
  }, [(_vm.posCheckErr) ? _c('span', {
    staticClass: "err"
  }, [_vm._v(_vm._s(_vm.posCheckErr))]) : _c('span', {
    staticClass: "loading"
  }, [_c('i', {
    staticClass: "iconfont icongps-1"
  }), _vm._v(" 正在检查您的位置...")])]) : _vm._e(), _vm._v(" "), (!_vm.posChecking && !_vm.memberCardList) ? _c('p', {
    staticClass: "center"
  }, [_vm._v("正在检查会员卡...")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "opt-cards section-part"
  }, [(_vm.allowCkinCardCnt > 1) ? _c('div', {
    staticClass: "row opt-cards-hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("请选择签到用卡")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('qd-switch', {
    attrs: {
      "title": "隐藏无效卡"
    },
    model: {
      value: (_vm.hideInvalidCards),
      callback: function($$v) {
        _vm.hideInvalidCards = $$v
      },
      expression: "hideInvalidCards"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), (_vm.allowCkinCardCnt !== null && _vm.allowCkinCardCnt < 1) ? _c('div', {
    staticClass: "warning"
  }, [_vm._v("\n         您没有入场签到用的会员卡 :-(\n       ")]) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "member-list"
  }, _vm._l((_vm.memberCardList), function(mc, index) {
    return (mc.allowCheckin && (mc.canEntryCheckin || !_vm.hideInvalidCards)) ? _c('li', {
      staticClass: "row member-card-list theme-border-bottom",
      class: {
        'on': _vm.selectCardIndex === index
      }
    }, [(mc.canEntryCheckin) ? _c('i', {
      staticClass: "iconfont icon-radio",
      class: {
        'icon-radio-on': _vm.selectCardIndex === index
      },
      on: {
        "click": function($event) {
          return _vm.checkinButtonShow(index)
        }
      }
    }) : _c('i', {
      staticClass: "iconfont iconfork red"
    }), _vm._v(" "), _c('img', {
      staticClass: "icon-img",
      attrs: {
        "src": '../../../static/img/member/vip' + mc.cardType + '.png'
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "col right-side"
    }, [_c('div', {
      staticClass: "list-content start"
    }, [_c('b', {
      staticClass: "member-card-type"
    }, [_vm._v(_vm._s(mc.cardName))]), _vm._v(" "), (mc.remark) ? _c('div', [_c('i', {
      staticClass: "medium gray"
    }, [_vm._v(_vm._s(mc.remark))])]) : _vm._e(), _vm._v(" "), (mc.cost) ? _c('div', {
      domProps: {
        "innerHTML": _vm._s(mc.cost)
      }
    }) : _vm._e(), _vm._v(" "), (mc.balance) ? _c('div', {
      domProps: {
        "innerHTML": _vm._s(mc.balance)
      }
    }) : _vm._e(), _vm._v(" "), (mc.limitTimes) ? _c('div', {
      domProps: {
        "innerHTML": _vm._s(mc.limitTimes)
      }
    }) : _vm._e(), _vm._v(" "), (mc.limitWeeks) ? _c('div', {
      domProps: {
        "innerHTML": _vm._s(mc.limitWeeks)
      }
    }) : _vm._e(), _vm._v(" "), (mc.useDates) ? _c('div', {
      domProps: {
        "innerHTML": _vm._s(mc.useDates)
      }
    }) : _vm._e(), _vm._v(" "), (mc.expDates) ? _c('div', {
      domProps: {
        "innerHTML": _vm._s(mc.expDates)
      }
    }) : _vm._e(), _vm._v(" "), (mc.vacationDates) ? _c('div', {
      domProps: {
        "innerHTML": _vm._s(mc.vacationDates)
      }
    }) : _vm._e()])])]) : _vm._e()
  }), 0), _vm._v(" "), (_vm.selectCardIndex !== null && _vm.memberCardList[_vm.selectCardIndex].cardType !== 1) ? _c('div', {
    staticClass: "checkin-times"
  }, [_vm._v("\n         签到次数"), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.checkinCount),
      expression: "checkinCount"
    }],
    staticClass: "input-bg",
    attrs: {
      "type": "number",
      "min": "1"
    },
    domProps: {
      "value": (_vm.checkinCount)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.checkinCount = $event.target.value
      }
    }
  }), _vm._v(" 次"), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（次卡和储值卡用）")])]) : _vm._e()])] : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),

/***/ 1359:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data() {
    return {
      g: $,
      memberAgentPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.MEMBER_AGENT.value),
      enableEntryMach: null,
      aiMachList: null
    };
  },
  created() {
    this.queryShopArgs();
    this.queryAiMachList();
  },

  methods: {
    queryAiMachList() {
      $.Req.service($.SvName.AI_MACH_QUERY, {}, ret => {
        this.aiMachList = ret.aiMachList;
      }, true);
    },

    queryShopArgs() {
      let args = {
        typeIdList: [2015]
      };
      $.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
        if (this.memberAgentPermit) {
          for (let t of ret.argList) {
            if (t.typeId === 2015) {
              this.enableEntryMach = t.typeValue === "true";
            }
          }
        }
      });
    },

    openDoor(machNo) {
      let args = { deviceId: machNo };
      $.Req.service($.SvName.LOGIN_CALL_FOR_IMSTLIFE, args, ret => {
        if (ret.status === 0) {
          $.Dlg.success("已发出开门指令");
        } else {
          $.Dlg.error(ret.msg);
        }
      }, true);
    }
  }
});

/***/ }),

/***/ 1360:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      g: $,
      machNo: this.$route.query.machNo,
      userName: $.data.user.uname,
      err: null,
      success: null,
      themeIconSkin: $.data.themeIconSkin
    };
  },
  beforeCreate() {
    // document.querySelector("body").setAttribute("style", "padding-bottom:0;");
  },
  created() {
    this.bindMach();
  },
  methods: {
    reEnter() {
      this.$router.push("/");
    },
    bindMach() {
      let args = {
        machNo: this.machNo
      };
      $.Req.service($.SvName.MACH_MEMBER_PHOTO_BIND, args, res => {
        if (!res.err) this.success = true;
        this.err = res.err;
      }, true, err => {
        this.err = err;
      });
    }
  }
});

/***/ }),

/***/ 1364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_entry_checkin_vue__ = __webpack_require__(1181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_entry_checkin_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_member_member_entry_checkin_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { MemberEntryCheckin: __WEBPACK_IMPORTED_MODULE_0__pages_member_member_entry_checkin_vue___default.a },
  data() {
    return {
      g: $,
      u: $.data.user,
      memberId: $.data.user.memberId,
      machId: null,
      err: null,
      lockerList: null,
      selectLockerIdx: null,
      optionType: null,
      success: null,
      hiredLockerList: null,
      userPwd: null
    };
  },

  created() {
    if (this.$route.query && this.$route.query.machId) {
      this.machId = this.$route.query.machId;
    }
    if (!this.machId) {
      this.err = '缺少租柜编号';
      return;
    }
    let qrcodeEndTime = this.$route.query.endTime;
    if (!this.machId || !qrcodeEndTime) {
      this.err = '请求参数错误！';
      return;
    }
    // check time
    $.Req.querySystime(systime => {
      let now = Date.new(systime).getTime();
      if (now > parseInt(qrcodeEndTime)) {
        this.err = '二维码已过期，请扫最新二维码';
      }
    });
    if (this.memberId) {
      this.queryMyHiredLockers();
    }
  },

  methods: {
    getShopImg() {
      if ($.data.shop.logoPathname) {
        return $.Util.getImgUrl($.data.shop.logoPathname, 200, 200, 'ffffff');
      } else {
        return 'http://www.jzongguan.com/imglib/default-shop-logo.jpg';
      }
    },

    queryMyHiredLockers() {
      if (!this.memberId) return;

      let args = { machId: this.machId, hiredMemberId: this.memberId };
      $.Req.service($.SvName.AI_MACH_LOCKER_QUERY, args, ret => {
        this.hiredLockerList = ret.lockerList;
      }, true);
    },

    queryEmptyLockers() {
      this.selectLockerIdx = null;
      this.optionType = 0;
      let args = { machId: this.machId, state: 0 };
      $.Req.service($.SvName.AI_MACH_LOCKER_QUERY, args, ret => {
        this.lockerList = ret.lockerList;
      }, true);
    },

    queryUsingLockers(optionType) {
      this.selectLockerIdx = null;
      this.optionType = optionType ? optionType : 1;
      let args = { machId: this.machId, state: 1, userId: $.data.user.uid };
      $.Req.service($.SvName.AI_MACH_LOCKER_QUERY, args, ret => {
        this.lockerList = ret.lockerList;
        if (this.lockerList.length === 1) {
          this.selectLockerIdx = 0;
        }
      }, true);
    },

    chooseLokcer(idx) {
      this.selectLockerIdx = idx;
    },

    chooseOptionType(val) {
      this.optionType = val;
    },

    submit() {
      if (this.selectLockerIdx === null) {
        $.Dlg.error('请选择一个柜子');
        return;
      }
      if (this.optionType === null) {
        $.Dlg.error('请选择开柜方式');
        return;
      }

      $.Req.querySystime(systime => {
        let timestamp = Date.new(systime).getTime();
        let args = {
          machId: this.machId,
          optionType: this.optionType,
          lockerId: this.lockerList[this.selectLockerIdx].amlId,
          serviceCheckCode: $.Util.calcServiceCheckCode(timestamp)
        };
        $.Req.service($.SvName.LOCKER_OPEN_FOR_IMSTLIFE, args, ret => {
          this.success = true;
        }, true);
      });
    },

    openLocker(lockerId, callback = null) {
      let args = {
        machId: this.machId,
        optionType: 2,
        lockerId: lockerId
      };
      $.Req.service($.SvName.LOCKER_OPEN_FOR_IMSTLIFE, args, ret => {
        if (callback) {
          callback();
        } else {
          alert('已成功操作开柜，使用后请及时关闭柜门。');
        }
      }, true);
    },

    returnLocker(lockerId, hireId) {
      if (!confirm('确定取件后还柜吗？')) {
        return;
      }

      this.openLocker(lockerId, () => {
        let args = {
          hireId: hireId
        };
        $.Req.service($.SvName.AI_MACH_LOCKER_HIRE_RETURN, args, ret => {
          alert('操作成功，使用后请及时关闭柜门。');
          this.queryMyHiredLockers();
        }, true);
      });
    },

    queryAiLockerUserPwd() {
      let args = {
        uid: $.data.user.uid
      };
      $.Req.service($.SvName.AI_LOCKER_USER_PWD_QUERY, args, ret => {
        if (ret.pwd) {
          alert('您当前的开柜密码是：' + ret.pwd);
        } else {
          alert('您未设置开柜密码');
        }
      }, true);
    },

    saveAiLockerUserPwd() {
      if ($.Util.isEmpty(this.userPwd)) {
        $.Dlg.error('请输入密码');
        return;
      }
      if (!$.Util.isInteger(this.userPwd)) {
        $.Dlg.error('请设置数字类型的密码');
        return;
      }
      if (this.userPwd.toString().length < 4) {
        $.Dlg.error('请设置至少四位密码');
        return;
      }

      let args = {
        pwd: this.userPwd
      };
      $.Req.service($.SvName.AI_LOCKER_USER_PWD_SAVE, args, ret => {
        $.Msg.success('密码设置成功');
      }, true);
    },

    clearAiLockerUserPwd() {
      this.userPwd = null;
      let args = {
        pwd: null
      };
      $.Req.service($.SvName.AI_LOCKER_USER_PWD_SAVE, args, ret => {
        $.Msg.success('密码清除成功');
      }, true);
    }
  }
});

/***/ }),

/***/ 1365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_entry_checkin_vue__ = __webpack_require__(1181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_entry_checkin_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_member_member_entry_checkin_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_group_lesson_opt_vue__ = __webpack_require__(1131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_group_lesson_opt_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_member_member_group_lesson_opt_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { MemberEntryCheckin: __WEBPACK_IMPORTED_MODULE_0__pages_member_member_entry_checkin_vue___default.a, MemberGroupLessonOpt: __WEBPACK_IMPORTED_MODULE_1__pages_member_member_group_lesson_opt_vue___default.a },
  data() {
    return {
      g: $,
      u: $.data.user,
      memberId: $.data.user.memberId,
      deviceId: null,
      title: null,
      type: null, // open, bind
      status: null,
      msg: null,
      authcode: null,
      entryCheckinDlg: false,
      showMemberCheckin: false,
      nowTime: null,
      memberGroupLessons: null,
      memberPcLessons: null,
      today: new Date(),
      dlg: {
        groupLessonCheckinDlg: false,
        lessonId: 0
      },
      showEnterButton: false,
      memberEntryCheckinList: null,
      enableMachQrcodeCheckinPl: null
    };
  },
  created() {
    if (this.$route.query && this.$route.query.deviceId) {
      this.deviceId = this.$route.query.deviceId;
    }
    if (this.$route.query && this.$route.query.type) {
      this.type = this.$route.query.type;
      if (this.type === 'open') {
        this.title = '扫码开门';
      } else {
        this.title = '扫码绑定';
      }
    }
    let qrcodeEndTime = this.$route.query.endTime;
    if (!this.deviceId || !this.type || !qrcodeEndTime) {
      this.status = -1;
      this.msg = '请求参数错误！';
      return;
    }
    // check time
    $.Req.service($.SvName.SYSTIME_GET, {}, (ret, systime) => {
      this.nowTime = Date.new(systime).getTime();
      if (this.nowTime <= parseInt(qrcodeEndTime)) {
        this.loadData(this.now);
        this.queryAiMach();
      } else {
        this.status = -1;
        this.msg = '二维码已过期，请扫最新二维码';
      }
    });
  },

  methods: {
    queryShopArgs(callback = null) {
      $.Req.service($.SvName.SHOP_ARG_QUERY, { typeIdList: [2090] }, ret => {
        for (let t of ret.argList) {
          if (t.typeId === 2090) this.enableMachQrcodeCheckinPl = t.typeValue === 'true';
        }
        if (callback) callback();
      });
    },

    loadData(systime) {
      if ($.data.user.staffId) {
        // 员工进入
        this.callLogin(systime, true);
      } else if ($.data.user.memberId) {
        // 会员进入
        if (this.type === 'open') {
          this.showMemberCheckin = true;
          this.queryMemberGroupLesson();
          this.queryShopArgs(() => {
            this.queryMemberPrivateLesson();
          });
        } else {
          // bind
          this.callLogin(systime);
        }
      } else {
        alert('请重新登录');
      }
    },

    queryAiMach() {
      let args = { machNo: this.deviceId };
      $.Req.service($.SvName.AI_MACH_QUERY, args, ret => {
        this.aiMach = ret.aiMach;
        if (this.aiMach && this.aiMach.allowMoreEntry && this.memberId) {
          // query member entry
          this.queryMemberEntryCheckin();
        }
      });
    },

    queryMemberEntryCheckin() {
      let args = {
        beginDate: this.today,
        memberId: this.memberId,
        page: 1
      };
      $.Req.service($.SvName.MEMBER_ENTRY_CHECKIN_QUERY, args, ret => {
        this.memberEntryCheckinList = ret.mecList;
      });
    },

    getShopImg() {
      if ($.data.shop.logoPathname) {
        return $.Util.getImgUrl($.data.shop.logoPathname, 200, 200, 'ffffff');
      } else {
        return 'http://www.jzongguan.com/imglib/default-shop-logo.jpg';
      }
    },

    callLogin(timestamp, isStaff = false) {
      let args = {
        deviceId: this.deviceId, type: this.type,
        serviceCheckCode: $.Util.calcServiceCheckCode(timestamp),
        isStaff: isStaff
      };
      $.Req.service($.SvName.LOGIN_CALL_FOR_IMSTLIFE, args, ret => {
        this.status = ret.status;
        this.msg = ret.msg;
        this.authcode = ret.authcode;
      }, true, err => {
        this.status = -1;
        this.msg = err;
      });
    },

    afterSubmitEntryCheckin() {
      $.Msg.success('入场签到成功。 正在开门...');
      $.Req.service($.SvName.SYSTIME_GET, {}, (ret, systime) => {
        this.callLogin(Date.new(systime).getTime());
      });
      this.entryCheckinDlg = false;
    },

    closeEntryCheckinDlg() {
      this.entryCheckinDlg = false;
    },

    queryMemberGroupLesson() {
      let today = new Date(this.nowTime);
      let args = {
        beginDate: today,
        endDate: today,
        memberId: this.memberId,
        page: 1,
        needCoachAvatar: false,
        needCheckinGlMaxTime: true
      };
      $.Req.service($.SvName.MEMBER_GROUP_LESSON_QUERY, args, ret => {
        if (!ret.memberLessonList) return;
        let todayStr = $.Util.formatDate(today);
        let limitCheckinTime = ret.checkinGlMaxTime ? ret.checkinGlMaxTime * 60000 : 3600000;
        let thisHourMin = parseInt(today.format('hhmm'));
        this.memberGroupLessons = ret.memberLessonList;
        for (let l of this.memberGroupLessons) {
          l.statusName = $.Dict.MemberLessonStatus[l.status];
          l.lessonTimes = "{0} ~ {1}".format($.Util.formatTime(l.beginTime), $.Util.formatTime(l.endTime));
          let lessonBeginTime = Date.new('{0} {1}:00'.format(todayStr, $.Util.formatTime(l.beginTime)));
          l.reachCheckinTime = lessonBeginTime.getTime() - limitCheckinTime <= this.nowTime;
          l.canOpenDoor = l.reachCheckinTime;
          /*if (thisHourMin > parseInt(l.endTime)) {
            l.canOpenDoor = false;
          } else if (thisHourMin < (parseInt(l.beginTime) - 100)) {
            l.canOpenDoor = false;
          }*/
        }
      });
    },

    openGlCheckinDlg(lessonId) {
      this.dlg.lessonId = lessonId;
      this.dlg.groupLessonCheckinDlg = true;
    },

    afterSubmitGroupLessonCheckin() {
      this.dlg.groupLessonCheckinDlg = false;
      $.Msg.success('签到成功。 正在开门...');
      $.Req.service($.SvName.SYSTIME_GET, {}, (ret, systime) => {
        this.callLogin(Date.new(systime).getTime());
        this.queryMemberGroupLesson();
      });
    },

    closeGroupLessonCheckinDlg() {
      this.dlg.groupLessonCheckinDlg = false;
    },

    openDoorForCheckin() {
      $.Msg.success('正在开门...');
      $.Req.service($.SvName.SYSTIME_GET, {}, (ret, systime) => {
        this.callLogin(Date.new(systime).getTime());
      });
    },

    queryMemberPrivateLesson() {
      let today = new Date(this.nowTime);
      let args = { beginDate: today, endDate: today, memberId: this.memberId, page: 1, needCoachAvatar: true };
      $.Req.service($.SvName.MEMBER_PRIVATE_LESSON_QUERY, args, ret => {
        if (!ret.memberPcLessonList) return;
        this.memberPcLessons = ret.memberPcLessonList;
        let thisHourMin = parseInt(today.format('hhmm'));
        for (let l of this.memberPcLessons) {
          l.lessonTimes = "{0} ~ {1}".format($.Util.formatTime(l.beginTime), $.Util.formatTime(l.endTime));
          l.canOpenDoor = true;
          if (thisHourMin > parseInt(l.endTime)) {
            l.canOpenDoor = false;
          } else if (thisHourMin < parseInt(l.beginTime) - 100) {
            l.canOpenDoor = false;
          }
        }
      }, true);
    },

    enterCheckin() {
      this.$refs.memberChekinChild.handleEntryCheckin();
    },

    showEntryCheckinButton() {
      this.showEnterButton = true;
    },

    checkinPl(lessonId, mplId) {
      if ($.data.shop.gpsLongitude && $.data.shop.gpsLatitude) {
        $.Msg.info('正在检查您的位置...');
      }
      $.Util.checkPosition(() => {
        this.doPlCheckin(lessonId, mplId);
      }, () => {
        alert($.Lang.CHECKIN_POS_ERR);
      });
    },

    doPlCheckin(lessonId, mplId) {
      let args = {
        memberPwd: $.Util.cookie.get($.Conf.CookieKeys.USER_PASSWD),
        memberId: $.data.user.memberId,
        lessonId: lessonId,
        mplId: mplId
      };
      $.Req.service($.SvName.MEMBER_PRIVATE_LESSON_CHECKIN, args, ret => {
        $.Dlg.success('私教课签到成功！');
        this.queryMemberPrivateLesson();
      }, true);
    }
  }
});

/***/ }),

/***/ 1366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__qrcode_mach_checkin_vue__ = __webpack_require__(1180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__qrcode_mach_checkin_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__qrcode_mach_checkin_vue__);
//
//
//
//
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
  components: { QrcodeMachCheckin: __WEBPACK_IMPORTED_MODULE_0__qrcode_mach_checkin_vue___default.a },

  data() {
    return {
      g: window.$
    };
  },

  created() {},

  methods: {}
});

/***/ }),

/***/ 1369:
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
			g: window.$,
			mhrCount: null,
			mhrList: null,
			aiMachList: null,
			query: {
				selectMachIdx: null,
				isUnbind: null
			},
			shopId: null
		};
	},

	created() {
		this.queryAiMachList(() => {
			this.queryMemberHeartRateList();
		});
		this.queryShopId();
	},

	methods: {
		queryAiMachList(callback = null) {
			let args = { machType: 10 };
			$.Req.service($.SvName.AI_MACH_QUERY, args, ret => {
				this.aiMachList = ret.aiMachList;
				if (this.aiMachList.length) {
					this.query.selectMachIdx = 0;
					if (callback) callback();
				}
			}, true);
		},

		queryMemberHeartRateList(page = null) {
			if (!page) {
				this.mhrCount = null;
			}
			let mach = this.aiMachList[this.query.selectMachIdx];
			let args = { machNo: mach.machNo, machBrand: mach.machBrand, page: page, isBaseInfo: true };
			if (this.query.isUnbind) {
				args.isUnbind = true;
			}
			$.Req.service($.SvName.MEMBER_HEART_RATE_QUERY, args, ret => {
				this.mhrList = ret.mhrList;
				if (!page) {
					this.mhrCount = ret.count;
				}
			}, true);
		},

		changeMach(idx) {
			this.query.selectMachIdx = idx;
			this.queryMemberHeartRateList();
		},

		queryShopId() {
			$.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
				this.shopId = ret.shopId;
			});
		},

		viewHrsDetail(mhr) {
			let encodeTid = encodeURIComponent($.data.tenant.encTid);
			let mhrId = mhr.mhrId;
			let encodeUid = mhr.encodeUid;
			this.$router.push("/user-hrs-for-share?encodeTid={0}&mhrId={1}&encodeUid={2}&shopId={3}".format(encodeTid, mhrId, encodeUid, this.shopId));
		},

		checkUnbind() {
			this.query.isUnbind = !this.query.isUnbind;
			this.queryMemberHeartRateList();
		},

		unbind(idx) {
			let mhr = this.mhrList[idx];
			if (!confirm('确定解绑此【{0}】吗？'.format(mhr.wdNo))) {
				return;
			}
			let args = {
				machNo: mhr.machNo,
				encodeUid: mhr.encodeUid,
				machBrand: mhr.brand,
				wdNo: mhr.wdNo
			};
			$.Req.service($.SvName.HEART_RATE_SYSTEM_UNBIND, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryMemberHeartRateList();
			}, true);
		},

		delMemberHeartRate(mhr) {
			let userName = mhr.memberId ? mhr.memberName : mhr.custName;
			if (!confirm('确定要删除{0}的这条心率数据吗？'.format(userName))) {
				return;
			}

			let args = { mhrId: mhr.mhrId };
			$.Req.service($.SvName.MEMBER_HEART_RATE_DEL, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryMemberHeartRateList();
			}, true);
		}
	}
});

/***/ }),

/***/ 1626:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".mach-list[data-v-242f49e8]{padding:15px}.mach-list table[data-v-242f49e8]{width:100%}.mach-list td[data-v-242f49e8],.mach-list th[data-v-242f49e8]{padding:4px 2px}.mach-list th[data-v-242f49e8]{font-weight:400;text-align:left;width:80px}.mach-list th[data-v-242f49e8]:after{content:\"\\FF1A\"}", ""]);

// exports


/***/ }),

/***/ 1717:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".mach-list[data-v-5764d0d6]{margin:0 10px 10px}.mach-list li[data-v-5764d0d6]{display:block;padding:9px 0;border-bottom:1px solid #eee}.mach-list li[data-v-5764d0d6]:last-child{border-bottom:0}.mach-list li i[data-v-5764d0d6]{position:relative;top:2px}.hrs-list[data-v-5764d0d6]{padding:12px}.hrs-list td[data-v-5764d0d6],.hrs-list th[data-v-5764d0d6]{padding:4px 0}.hrs-list th[data-v-5764d0d6]{width:105px;text-align:right;font-weight:400;color:#999;padding-right:3px}.hrs-list th[data-v-5764d0d6]:after{content:\"\\FF1A\"}.query[data-v-5764d0d6]{padding:2px 12px 12px;text-align:right;font-size:12px}.query span[data-v-5764d0d6]{font-size:12px}.query i[data-v-5764d0d6]{font-size:14px}.opts[data-v-5764d0d6]{border-top:1px solid #f0f0f0;padding:15px 0 4px;margin-top:12px;text-align:right}.opts a.btn[data-v-5764d0d6]{text-align:center;margin-left:10px;padding:5px 12px}.theme-black .mach-list li[data-v-5764d0d6]{border-bottom-color:#555}.theme-black .opts[data-v-5764d0d6]{border-top-color:#444}.theme-black .opts a.btn[data-v-5764d0d6]{background:#444;color:#eee}", ""]);

// exports


/***/ }),

/***/ 1726:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".tit[data-v-5fe1b045]{font-weight:700;font-size:16px;text-align:center;padding:20px 0 5px;line-height:1}", ""]);

// exports


/***/ }),

/***/ 1778:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".shop-info[data-v-90ef0f28]{text-align:center}.shop-info .logo-img img[data-v-90ef0f28]{margin:20px auto;height:150px;width:150px;line-height:150px;display:block;border:3px solid #ddd;border-radius:50%}.shop-info .shop-tit[data-v-90ef0f28]{font-size:18px}.user[data-v-90ef0f28]{font-weight:700;margin:25px 5px;text-align:center;font-size:16px}.msg[data-v-90ef0f28]{margin:0 30px;border:1px solid #53b011;padding:15px 10px;font-size:16px;line-height:1;color:#53b011;text-align:center;background:#fff}.msg i[data-v-90ef0f28]{font-size:16px;padding-right:3px;font-weight:700}.authcode[data-v-90ef0f28]{border-top:1px dotted #ddd;padding-top:15px;margin-top:15px}.err[data-v-90ef0f28]{border:1px solid #ff4500;margin:10px 30px;padding:15px 10px;line-height:1.5;color:#ff4500;text-align:center;background:#fff}.memb-opts section[data-v-90ef0f28]{margin:12px 18px;border-radius:3px}.member-checkin[data-v-90ef0f28]{text-align:center;margin:20px 0}.member-checkin a[data-v-90ef0f28]{text-align:center;display:block;padding:15px 0}.lesson-checkins section[data-v-90ef0f28]{padding:10px 15px}.lesson-checkins section li[data-v-90ef0f28]{padding:4px 0}.lesson-checkins section label[data-v-90ef0f28]{width:70px;display:inline-block;color:#888}.lesson-checkins table[data-v-90ef0f28]{width:100%}.lesson-checkins table i[data-v-90ef0f28]{font-size:12px}", ""]);

// exports


/***/ }),

/***/ 1785:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".auth-user[data-v-99aac736]{padding:30px 17px 0;background-color:#fff;min-height:70vh}.auth-user .logo[data-v-99aac736]{width:77px;height:18px}.auth-user .m-name[data-v-99aac736]{font-size:14px;color:#999;margin-top:10px}.auth-user .err[data-v-99aac736]{margin-top:20px;text-align:center;color:#ff4500;padding:30px;border:1px solid #eee;border-radius:3px}.auth-user .sign[data-v-99aac736]{display:block;margin:40px auto 20px;width:70px;height:82px}.auth-user .tip[data-v-99aac736]{font-size:18px;color:#333;text-align:center}.auth-user .enter[data-v-99aac736]{margin-top:40px;height:49px;line-height:49px;border-radius:25px;font-size:16px;letter-spacing:1px;font-weight:500}.auth-user .enter i[data-v-99aac736]{margin-left:5px;font-weight:500}.theme-black .auth-user[data-v-99aac736]{background-color:#111}.theme-black .auth-user .tip[data-v-99aac736]{color:#fff}", ""]);

// exports


/***/ }),

/***/ 1829:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".pwd-set .hd[data-v-e8201fb2]{border-bottom:1px solid #eee}.pwd-set .cont[data-v-e8201fb2]{padding:12px;line-height:1.8}.pwd-set .cont .spt[data-v-e8201fb2]{padding:0 5px}.pwd-set .input[data-v-e8201fb2]{border:1px solid #ddd;box-shadow:none;padding:3px;width:180px;margin-right:15px}.user-info[data-v-e8201fb2]{padding:10px}.user-info .logo-img[data-v-e8201fb2]{height:80px;width:80px;line-height:80px;display:block;border:1px solid #ccc;border-radius:50%}.user-info td[data-v-e8201fb2]{font-size:15px}.user[data-v-e8201fb2]{margin:20px;padding-top:20px;text-align:center;font-size:18px;border-top:1px solid #d4d4d4;font-weight:700}.msg[data-v-e8201fb2]{margin:0 30px;border:1px solid #53b011;padding:15px 10px;font-size:16px;line-height:1;color:#53b011;text-align:center;background:#fff}.msg i[data-v-e8201fb2]{font-size:16px;padding-right:3px;font-weight:700}.err[data-v-e8201fb2]{border:1px solid #ff4500;margin:0 30px;padding:15px 10px;line-height:1.5;color:#ff4500;text-align:center;background:#fff}.none[data-v-e8201fb2]{margin:10px 0;background:#eee;text-align:center;padding:30px 0;color:#ff4500;font-size:15px}.opt-list[data-v-e8201fb2]{text-align:center;margin:0 0 15px}.opt-list table[data-v-e8201fb2]{width:100%}.opt-list td[data-v-e8201fb2]{width:33%;border:1px solid #ccc;line-height:35px}.opt-list td.on[data-v-e8201fb2]{background-color:#eee;font-weight:700}.lockers[data-v-e8201fb2]{background:#fafafa;border:1px solid #ddd;border-radius:2px}.lockers .tit[data-v-e8201fb2]{padding:10px;border-bottom:1px solid #ddd;text-align:center}.lockers ul[data-v-e8201fb2]{padding:15px}.lockers li[data-v-e8201fb2]{border-radius:2px;line-height:32px;width:90px;overflow:hidden;text-align:center;padding:0 10px;margin:5px;display:inline-block;background:#fff;border:1px solid #999;color:#444;font-size:12px}.lockers li.on[data-v-e8201fb2]{border-color:orange;color:#fff;background:orange}.submit[data-v-e8201fb2]{padding:15px 0 0}.submit .largest-btn[data-v-e8201fb2]{width:100%}.option-select[data-v-e8201fb2]{margin-top:12px;padding:0;border:1px solid #ddd}.option-select li[data-v-e8201fb2]{padding:12px;border-bottom:1px solid #ddd}.option-select li[data-v-e8201fb2]:last-child{border-bottom:0}.option-select li b[data-v-e8201fb2]{padding-right:6px;font-size:12px;color:#555}.option-select li i[data-v-e8201fb2]{font-size:16px;padding-right:5px;position:relative;top:2px}.option-select li.on[data-v-e8201fb2],.option-select li.on b[data-v-e8201fb2]{color:#ff4500}.mylocker[data-v-e8201fb2]{margin:15px 10px;border:1px solid #ddd;padding:0;text-align:center;border-radius:3px;box-shadow:3px 3px 3px #ddd}.mylocker .locker-no[data-v-e8201fb2]{padding:10px 0;font-size:14px;border-bottom:1px dotted #ccc;font-weight:700}.mylocker .dates[data-v-e8201fb2]{padding:15px 0;font-size:13px;border-bottom:1px dotted #ccc}.mylocker .opts[data-v-e8201fb2]{padding:10px}.mylocker .opts a[data-v-e8201fb2]{display:block;line-height:35px;margin:5px 0;color:#fff}.mylocker .opts a.open[data-v-e8201fb2]{background:#2e90f7;margin-right:8px}.mylocker .opts a.return[data-v-e8201fb2]{background:#1aad19;margin-left:8px}section .bd[data-v-e8201fb2]{padding:12px}.theme-black .opt-list td.on[data-v-e8201fb2]{background-color:#555}.theme-black .lockers[data-v-e8201fb2]{border-color:#555;background:#333}.theme-black .lockers .tit[data-v-e8201fb2]{border-bottom-color:#555}", ""]);

// exports


/***/ }),

/***/ 1893:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1626);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("a32d427a", content, true, {});

/***/ }),

/***/ 1984:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1717);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("6b77a14d", content, true, {});

/***/ }),

/***/ 1993:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1726);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("46d567e9", content, true, {});

/***/ }),

/***/ 2045:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1778);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("d01eebf6", content, true, {});

/***/ }),

/***/ 2052:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1785);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("36fca134", content, true, {});

/***/ }),

/***/ 2096:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1829);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("86cf2742", content, true, {});

/***/ }),

/***/ 2156:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/validate-suc-pink.4a25797.png";

/***/ }),

/***/ 2157:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/validate-suc-yel.676555f.png";

/***/ }),

/***/ 2289:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vant"
  }, [_c('page-head', {
    attrs: {
      "title": "智能门禁"
    }
  }), _vm._v(" "), _vm._l((_vm.aiMachList), function(m) {
    return (m.machType < 9 || m.machType === 11 || m.machType === 12 || m.machType === 14 || m.machType === 15 || m.machType === 16) ? _c('section', {
      staticClass: "mach-list"
    }, [_c('table', [_c('tr', [_c('th', [_vm._v("设备编号")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.machNo))]), _vm._v(" "), (_vm.enableEntryMach) ? _c('td', {
      attrs: {
        "rowspan": "3",
        "width": "60",
        "align": "right"
      }
    }, [_c('a', {
      staticClass: "block theme-font-color",
      on: {
        "click": function($event) {
          return _vm.openDoor(m.machNo)
        }
      }
    }, [_vm._v("开门")])]) : _vm._e()]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("设备名称")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.machName))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("设备用途")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.AiMachType[m.machType]))])])])]) : _vm._e()
  })], 2)
},staticRenderFns: []}

/***/ }),

/***/ 2379:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-head', {
    attrs: {
      "title": "门店心率数据"
    }
  }, [_c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/member-heart-rate-rank')
      }
    }
  }, [_vm._v("心率排行榜")])]), _vm._v(" "), _c('section', [_c('ul', {
    staticClass: "mach-list"
  }, _vm._l((_vm.aiMachList), function(m, idx) {
    return _c('li', {
      on: {
        "click": function($event) {
          return _vm.changeMach(idx)
        }
      }
    }, [(_vm.query.selectMachIdx === idx) ? _c('i', {
      staticClass: "iconfont iconradio-on"
    }) : _c('i', {
      staticClass: "iconfont iconradio-off"
    }), _vm._v("\n\t\t\t\t  " + _vm._s(m.machName) + " （编号：" + _vm._s(m.machNo) + "）\n\t\t\t  ")])
  }), 0)]), _vm._v(" "), _c('div', {
    staticClass: "query"
  }, [_c('span', {
    on: {
      "click": function($event) {
        return _vm.checkUnbind()
      }
    }
  }, [(_vm.query.isUnbind) ? _c('i', {
    staticClass: "iconfont iconckbox-on"
  }) : _c('i', {
    staticClass: "iconfont iconckbox-off"
  }), _vm._v("\n\t\t\t  未解绑\n\t\t  ")])]), _vm._v(" "), _vm._l((_vm.mhrList), function(r, idx) {
    return _c('section', {
      staticClass: "hrs-list"
    }, [_c('table', [_c('tr', [_c('th', [_vm._v("绑定时间")]), _c('td', [_vm._v(_vm._s(r.createTime))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("手环编号")]), _c('td', [_vm._v(" " + _vm._s(r.wdNo))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("姓名")]), _vm._v(" "), _c('td', {
      staticClass: "bold"
    }, [(r.memberId) ? [_vm._v(_vm._s(r.memberName))] : [_c('span', {
      staticClass: "custflag"
    }, [_vm._v("客")]), _vm._v(" " + _vm._s(r.custName))]], 2)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("年龄")]), _c('td', [_vm._v(_vm._s(r.age) + " 岁")])]), _vm._v(" "), (r.startTime) ? _c('tr', [_c('th', [_vm._v("运动开始时间")]), _c('td', [_vm._v(_vm._s(r.startTime))])]) : _vm._e(), _vm._v(" "), (r.endTime) ? _c('tr', [_c('th', [_vm._v("运动结束时间")]), _c('td', [_vm._v(_vm._s(r.endTime))])]) : _vm._e(), _vm._v(" "), (r.duration) ? _c('tr', [_c('th', [_vm._v("运动时长")]), _c('td', [_vm._v(_vm._s(r.duration) + " 分钟")])]) : _vm._e(), _vm._v(" "), (r.endTime) ? _c('tr', [_c('th', [_vm._v("燃脂热量")]), _c('td', [_vm._v(_vm._s(r.cal) + " 千卡")])]) : _vm._e(), _vm._v(" "), (r.cal) ? _c('tr', [_c('th', [_vm._v("心率数据")]), _vm._v(" "), _c('td', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.viewHrsDetail(r)
        }
      }
    }, [_vm._v("查看 "), _c('i', {
      staticClass: "iconfont iconfenxiang medium"
    })])])]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "opts"
    }, [_c('a', {
      staticClass: "btn",
      on: {
        "click": function($event) {
          return _vm.delMemberHeartRate(r)
        }
      }
    }, [_vm._v("删除")]), _vm._v(" "), (!r.endTime) ? _c('a', {
      staticClass: "btn",
      on: {
        "click": function($event) {
          return _vm.unbind(idx)
        }
      }
    }, [_vm._v("解除绑定")]) : _vm._e()])])
  }), _vm._v(" "), _c('pagination', {
    attrs: {
      "total": _vm.mhrCount,
      "page-change": _vm.queryMemberHeartRateList
    }
  }), _vm._v(" "), (_vm.mhrList && !_vm.mhrList.length) ? _c('div', {
    staticClass: "none"
  }, [_c('i', {
    staticClass: "iconfont icon-none"
  }), _vm._v("暂无记录")]) : _vm._e(), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "menu": "hrs-record"
    }
  })], 2)
},staticRenderFns: []}

/***/ }),

/***/ 2387:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "tit"
  }, [_vm._v("请将二维码对准扫码器")]), _vm._v(" "), _c('qrcode-mach-checkin'), _vm._v(" "), _c('bottom-nav')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2440:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vant"
  }, [_c('page-head', {
    attrs: {
      "title": _vm.g.data.shop.shopName,
      "show-back": false
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "shop-info"
  }, [_c('div', {
    staticClass: "logo-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.getShopImg()
    }
  })])]), _vm._v(" "), (_vm.deviceId) ? [_c('div', {
    staticClass: "user"
  }, [_vm._v("\n\t\t\t欢迎您，" + _vm._s(_vm.u.uname) + "\n\t\t")]), _vm._v(" "), (_vm.status === 0) ? _c('div', {
    staticClass: "msg"
  }, [_c('i', {
    staticClass: "iconfont icon-check0"
  }), _vm._v(" " + _vm._s(_vm.title) + "成功\n\t\t\t"), (_vm.authcode) ? _c('div', {
    staticClass: "authcode"
  }, [_vm._v("验证码: "), _c('b', [_vm._v(_vm._s(_vm.authcode))])]) : _vm._e()]) : (_vm.status < 0) ? _c('div', {
    staticClass: "err"
  }, [(_vm.msg) ? [_vm._v(_vm._s(_vm.msg))] : [_vm._v("调用设备接口失败，请稍后重试。")]], 2) : (_vm.showMemberCheckin) ? _c('div', {
    staticClass: "memb-opts"
  }, [(_vm.memberEntryCheckinList && _vm.memberEntryCheckinList.length) ? _c('div', {
    staticClass: "lesson-checkins"
  }, _vm._l((_vm.memberEntryCheckinList), function(mec, idx) {
    return _c('section', [_c('table', [_c('tr', [_c('td', [_c('ul', [_c('li', [_c('label', [_vm._v("签到时间： ")]), _c('span', {
      staticClass: "orange"
    }, [_vm._v(_vm._s(mec.createTime))])]), _vm._v(" "), _c('li', [_c('label', [_vm._v("签到用卡： ")]), _vm._v(_vm._s(mec.cardName))]), _vm._v(" "), (mec.checkoutTime) ? _c('li', [_c('label', [_vm._v("签出时间： ")]), _vm._v(_vm._s(mec.checkoutTime))]) : _vm._e()])]), _vm._v(" "), _c('td', {
      attrs: {
        "width": "115",
        "align": "right"
      }
    }, [(!mec.checkoutTime && idx === 0) ? _c('a', {
      staticClass: "primary-btn",
      on: {
        "click": _vm.openDoorForCheckin
      }
    }, [_vm._v("开门")]) : _vm._e()])])])])
  }), 0) : _vm._e(), _vm._v(" "), (_vm.memberGroupLessons && _vm.memberGroupLessons.length) ? _c('div', {
    staticClass: "lesson-checkins"
  }, _vm._l((_vm.memberGroupLessons), function(l) {
    return _c('section', [_c('table', [_c('tr', [_c('td', [_c('ul', [_c('li', [_c('label', [_vm._v("课程名：")]), _vm._v(_vm._s(l.courseName))]), _vm._v(" "), _c('li', [_c('label', [_vm._v("状态： ")]), _vm._v(_vm._s(l.statusName))]), _vm._v(" "), _c('li', [_c('label', [_vm._v("上课时间： ")]), _c('span', {
      staticClass: "orange"
    }, [_vm._v(_vm._s(l.lessonTimes))])]), _vm._v(" "), _c('li', [_c('label', [_vm._v("上课教练： ")]), _vm._v(_vm._s(l.coachName))])])]), _vm._v(" "), _c('td', {
      attrs: {
        "width": "115",
        "align": "right"
      }
    }, [(l.canOpenDoor) ? [(l.status !== 2) ? _c('a', {
      staticClass: "primary-btn",
      on: {
        "click": function($event) {
          return _vm.openGlCheckinDlg(l.lessonId)
        }
      }
    }, [_vm._v("签到")]) : _c('a', {
      staticClass: "primary-btn",
      on: {
        "click": _vm.openDoorForCheckin
      }
    }, [_vm._v("开门")])] : _c('i', {
      staticClass: "orangered"
    }, [_vm._v("不在开门时间范围内")])], 2)])])])
  }), 0) : _vm._e(), _vm._v(" "), (_vm.memberPcLessons && _vm.memberPcLessons.length) ? _c('div', {
    staticClass: "lesson-checkins"
  }, _vm._l((_vm.memberPcLessons), function(l) {
    return _c('section', [_c('table', [_c('tr', [_c('td', [_c('ul', [_c('li', [_c('label', [_vm._v("私教课：")]), _vm._v(_vm._s(l.courseName))]), _vm._v(" "), _c('li', [_c('label', [_vm._v("上课时间：")]), _c('span', {
      staticClass: "orange"
    }, [_vm._v(_vm._s(l.lessonTimes))])]), _vm._v(" "), _c('li', [_c('label', [_vm._v("上课教练：")]), _vm._v(_vm._s(l.coachName))]), _vm._v(" "), (l.checkinTime) ? _c('li', [_c('label', [_vm._v("签到时间：")]), _vm._v(_vm._s(l.checkinTime))]) : _vm._e()])]), _vm._v(" "), _c('td', {
      attrs: {
        "width": "115",
        "align": "right"
      }
    }, [(_vm.enableMachQrcodeCheckinPl) ? [(!l.checkinTime) ? _c('a', {
      staticClass: "primary-btn",
      on: {
        "click": function($event) {
          return _vm.checkinPl(l.lessonId, l.mplId)
        }
      }
    }, [_vm._v("签到")]) : _vm._e()] : [(l.canOpenDoor) ? _c('a', {
      staticClass: "primary-btn",
      on: {
        "click": _vm.openDoorForCheckin
      }
    }, [_vm._v("开门")]) : _c('i', {
      staticClass: "orangered block"
    }, [_vm._v("不在开门时间范围内")])]], 2)])])])
  }), 0) : _vm._e(), _vm._v(" "), _c('section', {
    staticClass: "member-checkin"
  }, [_c('a', {
    on: {
      "click": function($event) {
        _vm.entryCheckinDlg = true
      }
    }
  }, [_vm._v("入场签到 →")])])]) : _vm._e()] : _c('div', {
    staticClass: "err"
  }, [_vm._v("\n\t\t缺少设备编号\n\t")]), _vm._v(" "), _vm._m(0), _vm._v(" "), (_vm.entryCheckinDlg) ? _c('van-dialog', {
    staticClass: "van-has-overlay",
    attrs: {
      "title": "会员入场签到",
      "show-cancel-button": "",
      "show-confirm-button": _vm.showEnterButton,
      "confirmButtonText": "签到"
    },
    on: {
      "confirm": function($event) {
        return _vm.enterCheckin()
      }
    },
    model: {
      value: (_vm.entryCheckinDlg),
      callback: function($$v) {
        _vm.entryCheckinDlg = $$v
      },
      expression: "entryCheckinDlg"
    }
  }, [_c('member-entry-checkin', {
    ref: "memberChekinChild",
    attrs: {
      "after-submit": _vm.afterSubmitEntryCheckin,
      "member-id": _vm.memberId,
      "check-pos": false
    },
    on: {
      "showEntryButton": _vm.showEntryCheckinButton
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('van-dialog', {
    staticClass: "van-has-overlay",
    attrs: {
      "title": "团课签到",
      "showCancelButton": "",
      "showConfirmButton": false
    },
    model: {
      value: (_vm.dlg.groupLessonCheckinDlg),
      callback: function($$v) {
        _vm.$set(_vm.dlg, "groupLessonCheckinDlg", $$v)
      },
      expression: "dlg.groupLessonCheckinDlg"
    }
  }, [_c('member-group-lesson-opt', {
    attrs: {
      "lesson-id": _vm.dlg.lessonId,
      "check-pos": true,
      "opt-type": 2,
      "member-id": _vm.memberId,
      "after-submit": _vm.afterSubmitGroupLessonCheckin,
      "on-close": _vm.closeGroupLessonCheckinDlg
    }
  })], 1)], 2)
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

/***/ 2447:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "auth-user"
  }, [(_vm.userName) ? _c('div', {
    staticClass: "m-name"
  }, [_vm._v(_vm._s(_vm.userName))]) : _vm._e(), _vm._v(" "), (_vm.success) ? _c('div', [(_vm.themeIconSkin == 'pink') ? _c('img', {
    staticClass: "sign",
    attrs: {
      "src": __webpack_require__(2156),
      "alt": ""
    }
  }) : _c('img', {
    staticClass: "sign",
    attrs: {
      "src": __webpack_require__(2157),
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "tip"
  }, [_vm._v("用户校验成功！")])]) : (_vm.err) ? _c('div', {
    staticClass: "err"
  }, [_vm._v(_vm._s(_vm.err))]) : _vm._e(), _vm._v(" "), (_vm.success) ? _c('div', {
    staticClass: "theme-btn-bg largest-btn enter",
    on: {
      "click": _vm.reEnter
    }
  }, [_vm._v("点击进入健总管"), _c('i', {
    staticClass: "iconfont icon-arrow"
  })]) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 2490:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-head', {
    attrs: {
      "title": _vm.g.data.shop.shopName,
      "show-back": false
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "user-info"
  }, [_c('table', [_c('td', {
    attrs: {
      "valign": "middle",
      "width": "100"
    }
  }, [_c('img', {
    staticClass: "logo-img",
    attrs: {
      "src": _vm.getShopImg()
    }
  })]), _vm._v(" "), _c('td', {
    attrs: {
      "valign": "middle"
    }
  }, [_vm._v("\n\t\t\t\t欢迎您， " + _vm._s(_vm.u.uname) + "\n\t\t\t")])])]), _vm._v(" "), (_vm.success) ? _c('div', {
    staticClass: "msg"
  }, [_c('i', {
    staticClass: "iconfont icon-check0"
  }), _vm._v(" 操作成功\n\t")]) : _vm._e(), _vm._v(" "), (!_vm.err && _vm.hiredLockerList && _vm.hiredLockerList.length) ? _c('section', [_vm._m(0), _vm._v(" "), _vm._l((_vm.hiredLockerList), function(l) {
    return _c('div', {
      staticClass: "mylocker"
    }, [_c('div', {
      staticClass: "locker-no"
    }, [_vm._v(_vm._s(l.lockerName))]), _vm._v(" "), _c('div', {
      staticClass: "dates"
    }, [_vm._v("租期：" + _vm._s(_vm.g.Util.formatDate(l.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(l.endDate)))]), _vm._v(" "), _c('div', {
      staticClass: "opts"
    }, [_c('table', {
      attrs: {
        "width": "100%"
      }
    }, [_c('tr', [_c('td', {
      attrs: {
        "width": "100%"
      }
    }, [_c('a', {
      staticClass: "open",
      on: {
        "click": function($event) {
          return _vm.openLocker(l.amlId)
        }
      }
    }, [_vm._v("开柜")])])])])])])
  })], 2) : _vm._e(), _vm._v(" "), (!_vm.err) ? _c('section', {
    staticStyle: {
      "padding-bottom": "10px"
    }
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "bd"
  }, [_c('div', {
    staticClass: "opt-list"
  }, [_c('table', [_c('tr', [_c('td', {
    class: {
      on: _vm.optionType === 0
    },
    on: {
      "click": _vm.queryEmptyLockers
    }
  }, [_vm._v("存件")]), _vm._v(" "), _c('td', {
    class: {
      on: _vm.optionType > 0
    },
    on: {
      "click": function($event) {
        return _vm.queryUsingLockers(1)
      }
    }
  }, [_vm._v("取件")])])])]), _vm._v(" "), (_vm.lockerList && _vm.lockerList.length) ? [(_vm.lockerList && _vm.lockerList.length) ? _c('div', {
    staticClass: "lockers"
  }, [(_vm.lockerList.length > 1) ? _c('div', {
    staticClass: "tit"
  }, [_vm._v("请选择一个空闲柜子")]) : _vm._e(), _vm._v(" "), _c('ul', _vm._l((_vm.lockerList), function(l, idx) {
    return (l.lockerType === 0) ? _c('li', {
      class: {
        on: _vm.selectLockerIdx === idx
      },
      on: {
        "click": function($event) {
          return _vm.chooseLokcer(idx)
        }
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(l.lockerName) + "\n\t\t\t\t\t\t")]) : _vm._e()
  }), 0)]) : _vm._e(), _vm._v(" "), (_vm.optionType > 0) ? _c('ul', {
    staticClass: "option-select"
  }, [_c('li', {
    staticClass: "text-center"
  }, [_vm._v("\n\t\t\t\t\t\t请选择一种开柜方式\n\t\t\t\t\t")]), _vm._v(" "), _c('li', {
    class: {
      on: _vm.optionType === 2
    },
    on: {
      "click": function($event) {
        return _vm.chooseOptionType(2)
      }
    }
  }, [_c('b', [_vm._v("临时开柜")]), _vm._v("（取件后继续用） "), (_vm.optionType === 2) ? _c('span', [_vm._v("✔")]) : _vm._e()]), _vm._v(" "), _c('li', {
    class: {
      on: _vm.optionType === 1
    },
    on: {
      "click": function($event) {
        return _vm.chooseOptionType(1)
      }
    }
  }, [_c('b', [_vm._v("离店开柜")]), _vm._v("（取件后不再用，即还柜）"), (_vm.optionType === 1) ? _c('span', [_vm._v("✔")]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "submit"
  }, [_c('div', {
    staticClass: "largest-btn theme-btn-bg",
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("确定")])])] : _vm._e(), _vm._v(" "), (_vm.lockerList && !_vm.lockerList.length) ? _c('div', {
    staticClass: "none"
  }, [(_vm.optionType === 0) ? [_vm._v("当前没有可存的柜子")] : (_vm.optionType === 1) ? [_vm._v("您没有可打开的柜子")] : [_vm._v("您没有可取的柜子")]], 2) : _vm._e()], 2)]) : _vm._e(), _vm._v(" "), _c('section', {
    staticClass: "pwd-set"
  }, [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("开柜密码设置")]), _vm._v(" "), _c('div', {
    staticClass: "r",
    on: {
      "click": _vm.queryAiLockerUserPwd
    }
  }, [_c('a', [_vm._v("查看密码")])])]), _vm._v(" "), _c('div', {
    staticClass: "cont"
  }, [_vm._v("\n\t\t\t在租柜控制屏幕上使用手机号开柜时，为进一步安全，可设置密码，设置后需要同时输入手机号与密码。\n\t\t\t"), _c('p', [_c('input-int', {
    staticClass: "input",
    attrs: {
      "placeholder": "请输入至少4位数字的密码"
    },
    model: {
      value: (_vm.userPwd),
      callback: function($$v) {
        _vm.userPwd = $$v
      },
      expression: "userPwd"
    }
  }), _vm._v(" "), _c('a', {
    on: {
      "click": _vm.saveAiLockerUserPwd
    }
  }, [_vm._v("保存密码")]), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v(" "), _c('a', {
    on: {
      "click": _vm.clearAiLockerUserPwd
    }
  }, [_vm._v("清空密码")])], 1)])]), _vm._v(" "), (_vm.err) ? [_c('div', {
    staticClass: "err"
  }, [_vm._v(_vm._s(_vm.err))]), _vm._v(" "), _vm._m(2)] : _vm._e()], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("我的长租柜")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("临时柜使用")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bottom-nav center allpadding"
  }, [_c('a', {
    attrs: {
      "href": "/"
    }
  }, [_vm._v("进入健总管手机版")])])
}]}

/***/ }),

/***/ 809:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1893)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1359),
  /* template */
  __webpack_require__(2289),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-242f49e8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 810:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2052)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1360),
  /* template */
  __webpack_require__(2447),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-99aac736",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 814:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2096)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1364),
  /* template */
  __webpack_require__(2490),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-e8201fb2",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2045)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1365),
  /* template */
  __webpack_require__(2440),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-90ef0f28",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1993)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1366),
  /* template */
  __webpack_require__(2387),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5fe1b045",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1984)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1369),
  /* template */
  __webpack_require__(2379),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5764d0d6",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});