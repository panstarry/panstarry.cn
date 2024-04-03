webpackJsonp([18],{

/***/ 1010:
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

// 引用事例
// import Calendar from './../../components/calendar/calendar.vue';
// <Calendar @queryMonth="queryMonth(arguments)"
// @querySelectedDay="querySelectedDay"
// :has-marked-prop="checkinDateId"   //注意，这里的checkinDateId是数组，也可以是数组对象
// :max-date='{year:year,month:month}'
// :min-date="{year:year-10,month:month}"
// v-if="hasRequest">
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "calendar",

  props: {
    hasMarkedProp: {
      type: Array
    },

    minDate: {
      type: Object
    },

    maxDate: {
      type: Object
    },

    cantPull: {
      type: Boolean
    },

    seeFutureDay: {
      type: Boolean,
      default: true
    },

    presentDate: {
      type: String
    },

    // 选择过去时间标识（报表）
    pastTag: {
      type: Boolean,
      default: false
    }

  },

  data() {
    return {
      todayDate: '',
      weekList: ['日', '一', '二', '三', '四', '五', '六'],
      dateList: [],
      dateListCopy: [],
      year: '',
      month: '',
      currentDate: new Date(),
      changeDate: new Date(),
      pikerShow: false,
      thisIndex: '',
      thisIndexObject: '',
      dateShow: true,
      showDate: false,
      hasMarked: null,
      cantPullProp: true,
      maxDatePicker: null,
      minDatePicker: null
    };
  },

  mounted() {
    this.cantPullProp = !this.cantPull ? true : false;
    if (this.presentDate) {
      let dateData = this.presentDate.split('-');
      let date = new Date(parseInt(dateData[0]), parseInt(dateData[1]) - 1, parseInt(dateData[2]));
      this.initDate(date, () => {
        let _this = this;
        this.dateList.map((item, idx) => {
          if (item.iDate == parseInt(dateData[2])) {
            _this.thisIndexObject = idx;
          }
        });
      });
    } else {
      this.initDate();
    }
    this.hasMarked = this.hasMarkedProp;
    this.maxDatePicker = new Date(this.maxDate.year, this.maxDate.month);
    this.minDatePicker = new Date(this.minDate.year, this.minDate.month);
  },

  watch: {
    hasMarkedProp: {
      immediate: true,
      handler() {
        this.hasMarked = this.hasMarkedProp;
      }
    }
  },

  methods: {
    confirmDatePiker() {
      let oDate = this.pastTag ? this.currentDate : new Date();
      this.year = oDate.getFullYear();
      this.month = oDate.getMonth();
      if (this.maxDate != null) {
        if (this.changeDate.getFullYear() > this.maxDate.year) {
          alert('抱歉，您选择的时间不支持查询');
          return false;
        } else if (this.changeDate.getFullYear() == this.maxDate.year && this.currentDate.getMonth() > this.maxDate.month) {
          alert('抱歉，您选择的时间不支持查询');
          return false;
        }
      }
      if (!this.pastTag) {
        oDate = this.changeDate;
      }
      this.initDate(oDate);
      this.pikerShow = false;
    },

    getColumnValue() {
      this.changeDate = this.currentDate;
    },

    showDatePiker() {
      this.pikerShow = !this.pikerShow;
    },

    initDate(time, callBack) {
      let oDate = time != undefined && time != '' ? time : new Date();
      this.year = oDate.getFullYear();
      this.month = oDate.getMonth();
      if (time) {
        this.resetDateList(oDate, callBack);
      } else {
        this.getMonthPrefix(this.month, this.year);
        this.getDateList(this.month, this.year);
      }
    },

    getMonthPrefix(month, year) {
      if (month < 9) {
        this.todayDate = year + '年0' + (month + 1) + '月';
      } else {
        this.todayDate = year + '年' + (month + 1) + '月';
      }
    },

    getDateList(month, year) {
      this.dateList = [];
      let oDate = new Date();
      let fullYearAllDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      let thisMonthDays = fullYearAllDays[month];
      if (month == 1) {
        if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
          thisMonthDays = 29;
        }
      }
      oDate.setYear(year);
      oDate.setMonth(month, 1); // 把 oDate.setMonth(month)  改为 oDate.setMonth(month, 1)
      //oDate.setDate(1)
      let week = oDate.getDay();
      for (let j = 0; j < week; j++) {
        this.dateList.push('');
      }
      for (let i = 1; i < thisMonthDays + 1; i++) {
        this.dateList.push({ iDate: i, hasMarkedList: false, unSign: false });
      }
      for (let i = 0; i < this.hasMarked.length; i++) {
        for (let j = 0; j < this.dateList.length; j++) {
          if (this.hasMarked[i].constructor == Object) {
            if (this.hasMarked[i].hasRecorder == this.dateList[j].iDate) {
              this.dateList[j].hasMarkedList = true;
              this.dateList[j].unSign = !this.hasMarked[i].unSign;
              break;
            }
          } else {
            if (this.hasMarked[i] == this.dateList[j].iDate) {
              this.dateList[j].hasMarkedList = true;
              break;
            }
          }
        }
      }
      this.thisIndex = null;
      this.thisIndexObject = null;
    },

    resetDateList(time, callBack) {
      let beginDate = time ? new Date(time.getFullYear(), this.month, 1) : new Date(this.year, this.month, 1);
      let endDate = time ? new Date(time.getFullYear(), this.month + 1, 0) : new Date(this.year, this.month + 1, 0);
      this.$emit('queryMonth', beginDate, endDate, false);
      this.callDate(callBack);
    },

    callDate(callBack) {
      this.getMonthPrefix(this.month, this.year);
      this.getDateList(this.month, this.year);
      if (callBack) {
        callBack();
      }
    },

    setPrevMonth() {
      this.month--;
      if (this.month < 0) {
        this.month = 11;
        this.year--;
      }
      this.resetDateList();
    },

    setNextMonth() {
      if (!this.seeFutureDay) {
        if (this.maxDate != null && this.month == this.maxDate.month && this.year == this.maxDate.year) {
          this.$notify({ type: 'warning', message: '亲，下个月还没到，无法查询哦' });
          return false;
        }
      }
      this.month++;
      if (this.month > 11) {
        this.month = 0;
        this.year++;
      }
      this.resetDateList();
    },

    seeThisDayRecorder(i, date) {
      if (!this.seeFutureDay) {
        let oDate = new Date();
        let year = oDate.getFullYear();
        let month = oDate.getMonth();
        let todDate = oDate.getDate();

        if (date > todDate && month == this.month && year == this.year) {
          this.$notify({ type: 'warning', message: '亲，不能选择未来的日期哦' });
          return false;
        }
      }
      if (this.hasMarked.length > 0) {
        if (this.hasMarked[0].constructor != Object) this.thisIndex = i;
      }
      this.thisIndexObject = i;
      this.$emit('querySelectedDay', date);
    },

    showDateFunc() {
      this.dateShow = !this.dateShow;
    }
  }
});

/***/ }),

/***/ 1011:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".section-part[data-v-245766ee]{margin:0;border-top:0}.pos-fix[data-v-245766ee]{position:fixed;bottom:0;left:0;width:100%;z-index:2100}.qd-calendar .qd-head[data-v-245766ee]{padding:0 20px;height:50px;line-height:50px}.qd-calendar .qd-head .iconfont[data-v-245766ee]{vertical-align:-2px;font-size:18px}.qd-calendar .today-date[data-v-245766ee]{height:33px;line-height:30px;margin:9px 0 0;padding:0 9px}.qd-calendar .qd-week[data-v-245766ee]{padding:0 20px;height:50px;line-height:50px;font-weight:600}.qd-calendar .qd-week .week-list[data-v-245766ee]{width:14.28%;text-align:center}.qd-calendar .qd-date[data-v-245766ee]{padding:5px 10px 10px;justify-content:flex-start}.qd-calendar .qd-date .qd-list[data-v-245766ee]{width:14.28%;text-align:center;padding:2px 8px;position:relative;margin:4px 0}.qd-calendar .qd-date .qd-list .iconfont[data-v-245766ee]{position:absolute;font-size:38px;top:50%;left:50%;text-align:center;display:inline-block;transform:translate(calc(-50% + -2px),-50%)}.qd-calendar .drop-down-date[data-v-245766ee]{color:#999;font-size:14px;text-align:center;padding:10px 0}.qd-calendar .drop-down-date .iconfont[data-v-245766ee]{vertical-align:-2px}.theme-black .drop-down-date[data-v-245766ee]{background:#212121}", ""]);

// exports


/***/ }),

/***/ 1012:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1011);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("f5d8f260", content, true, {});

/***/ }),

/***/ 1038:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "qd-calendar"
  }, [_c('div', {
    staticClass: "qd-head row section-part",
    staticStyle: {
      "border-radius": "0"
    }
  }, [_c('div', {
    staticClass: "prev-month",
    on: {
      "click": function($event) {
        return _vm.setPrevMonth()
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconArrow-left"
  }), _vm._v("上个月")]), _vm._v(" "), _c('div', {
    staticClass: "today-date",
    on: {
      "click": _vm.showDatePiker
    }
  }, [_vm._v(_vm._s(_vm.todayDate))]), _vm._v(" "), _c('div', {
    staticClass: "next-month",
    on: {
      "click": function($event) {
        return _vm.setNextMonth()
      }
    }
  }, [_vm._v("下个月"), _c('i', {
    staticClass: "iconfont iconArrow-right"
  })])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.dateShow && _vm.cantPullProp),
      expression: "dateShow && cantPullProp"
    }],
    staticClass: "week-date"
  }, [_c('div', {
    staticClass: "qd-week row"
  }, [_vm._l((_vm.weekList), function(week) {
    return [_c('div', {
      staticClass: "week-list"
    }, [_vm._v(_vm._s(week))])]
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "qd-date row"
  }, [_vm._l((_vm.dateList), function(date, idx) {
    return [_c('div', {
      staticClass: "qd-list",
      class: {
        active: idx == _vm.thisIndex || date.unSign,
        'reverse-active': idx == _vm.thisIndexObject
      },
      on: {
        "click": function($event) {
          return _vm.seeThisDayRecorder(idx, date.iDate)
        }
      }
    }, [(date.hasMarkedList || idx == _vm.thisIndexObject) ? _c('i', {
      staticClass: "iconfont iconSelection"
    }) : _vm._e(), _vm._v(_vm._s(date.iDate) + "\n        ")])]
  })], 2)]), _vm._v(" "), (_vm.cantPullProp) ? _c('div', {
    staticClass: "drop-down-date",
    on: {
      "click": _vm.showDateFunc
    }
  }, [_vm._t("totalNumber"), _vm._v(" "), _c('i', {
    staticClass: "iconfont",
    class: {
      'iconUnder-the-arrow': !_vm.dateShow,
      ' iconOn-the-arrow': _vm.dateShow
    }
  })], 2) : _vm._e(), _vm._v(" "), _c('van-popup', {
    attrs: {
      "position": "bottom",
      "overlay": true
    },
    model: {
      value: (_vm.pikerShow),
      callback: function($$v) {
        _vm.pikerShow = $$v
      },
      expression: "pikerShow"
    }
  }, [_c('div', {
    staticClass: "pos-fix"
  }, [(_vm.pikerShow) ? _c('van-datetime-picker', {
    attrs: {
      "type": "year-month",
      "min-date": _vm.minDatePicker,
      "max-date": _vm.maxDatePicker
    },
    on: {
      "cancel": _vm.showDatePiker,
      "confirm": _vm.confirmDatePiker,
      "change": _vm.getColumnValue
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  }) : _vm._e()], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1041:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1114)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1110),
  /* template */
  __webpack_require__(1115),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-e848f6e8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header__ = __webpack_require__(1111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1112);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// 使用说明
/**
 * @data 展示的数据内容数组
          {
            _checked: true 可以默认选中当前项 
            _disabled: true 可以禁止选择当前项。
          }
 * @columns 表格的相关配置
          {
            title: "时间",   列头显示文字
            key: "date",    对应列内容的字段名
            width: 100,     每列宽度
            align: 'left/center/right', 列对齐方式
            fixed: "right", 固定左右位置
            slotName: 'name'   插槽的name值，自定义内容必填
            type: 'selection'   开启多选
            isNeedSum: true;    默认 true, false 表示该列不计算和值,
            renderHeader(h, { column, index }) {}   自定义列头显示内容，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 column 和 index，分别为当前列数据和当前列索引。            
          }
 * @width 表格宽度，单位 px
 * @height 表格的高度，设置后，如果表格内容大于此值，会固定表头
 * @maxHeight 表格最大高度，单位 px，设置后，如果表格内容大于此值，会固定表头
 * @border 是否显示纵向边框
 * @stripe 是否显示间隔斑马纹
 * @showHeader 是否显示表头
 * @noDataText 数据为空时显示的提示内容
 * @showNoDataText 是否显示为空时的提示内容
 * @summaryTitleColspan 只对合计行有效，默认为 1
 * @showSummary 是否显示合计的内容，默认计算 number 类型 列的和值，如有不计算的 @columns 添加 isNeedSum:false
 * @summaryMethod 自定义的合计计算方法（合计行每一列展示的就是 @返回对象 里的内容），可不传
 *    @return 一个对象  遍历 @columns ，取每个元素key属性的value为返回对象的 [key]
            例如：@columns = [
              { title: "姓名", key: 'name' }, 
              { title: "价值", key: 'amount' }, 
              { title: "次数", key: 'cardTimes' }
            ]
            @return {
              name: '自定义名称'
              amount: '￥500',
              cardTimes: '100次',
            }
      展示效果：   姓名     |   价值   |   次数
                自定义名称 |   ￥500  |   100次
 */

// 启用多选可使用的方法
/**
 * @onSelect	在多选模式下有效，选中某一项时触发	selection：已选项数据 row：刚选择的项数据
 * @onSelectCancel	在多选模式下有效，取消选中某一项时触发	selection：已选项数据 row：取消选择的项数据
 * @onSelectAll	在多选模式下有效，点击全选时触发	selection：已选项数据
 * @onSelectAllCancel	在多选模式下有效，点击取消全选时触发	selection：已选项数据
 * @onSelectionChange	在多选模式下有效，只要选中项发生变化时就会触发	selection：已选项数据
 *
 */

/**
 * @自定义列内容和自定义标题的使用
 *
 * 1.自定义标题内容
 * 第一种方法（优先级大于第二种，自定义全部标题内容）：<template #header="{row, index}">{{row.title}}</template>
 * 第二种方法（自定义指定标题）：在 columns 元素中添加 renderHeader 属性，传递一个方法使用
 *
 * 2.自定义列内容
 * 2.1  在 columns 元素添加 slotName 属性，传一个字符串
 * 2.2  <template #slotName="{row, index}">{{row.name}}</template>, "slotName"是你传的那个字符串名
 */




const prefixCls = "qd-table";

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    renderHeader: __WEBPACK_IMPORTED_MODULE_0__header__["a" /* default */]
  },
  emits: ["onSelect", "onSelectCancel", "onSelectAll", "onSelectAllCancel", "onSelectionChange"],
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    },
    maxHeight: {
      type: [Number, String]
    },
    border: {
      type: Boolean,
      default: false
    },
    stripe: {
      type: Boolean,
      default: false
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    noDataText: {
      type: [Number, String],
      default: "暂无数据"
    },
    showNoDataText: {
      type: Boolean,
      default: true
    },
    showSummary: {
      type: Boolean,
      default: false
    },
    summaryMethod: {
      type: Function,
      default: null
    },
    summaryTitleColspan: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      headerInputId: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* getRandomStr */])(6),
      cloneData: [],
      cloneColumns: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* deepCopy */])(this.columns),
      prefixCls: prefixCls,
      fixedHeader: !!this.height || !!this.maxHeight,
      widthList: [],
      fixedIdx: [],
      selectFlag: false,
      showVerticalScrollBar: false,
      scrollBarWidth: 0,
      columnsWidth: null,
      tableWidth: null,
      sums: {},
      colspan: this.summaryTitleColspan,
      theme: $.Util.cookie.get("skin") || null,
      sumTitle: "合计"
    };
  },
  computed: {
    classesFixed() {
      return [`${prefixCls}-box`, {
        [`${prefixCls}-fixed`]: this.fixedHeader
      }];
    },
    classesBox() {
      return [`${prefixCls}-mytbl`, `${prefixCls}-box`, {
        [`${prefixCls}-box-fixed`]: this.fixedHeader,
        [`${prefixCls}-border`]: this.border,
        [`${prefixCls}-stripe`]: this.stripe
      }];
    },
    classesHeader() {
      return [`${prefixCls}-header`, {
        [`${prefixCls}-header-fixed`]: this.fixedHeader
      }];
    },
    classesColumnFixed() {
      return [`${prefixCls}-column-fixed`];
    },
    classesColumnSum() {
      return [`${prefixCls}-column-sum`];
    },
    classesBody() {
      return [`${prefixCls}-tbody`];
    },
    styles() {
      const obj = {};
      if (this.height) {
        obj.height = this.height + "px";
      }
      if (this.width) {
        obj.width = this.width + "px";
      }
      if (this.maxHeight) {
        obj.maxHeight = this.maxHeight + "px";
      }
      return obj;
    },
    showSlotHeader() {
      let flag = false;
      // vue2 使用 $scopedSlots
      flag = this.$scopedSlots.header !== undefined;
      return flag;
    }
  },
  watch: {
    columns: {
      handler() {
        if (!this.columns.length) return;
        this.cloneColumns = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* deepCopy */])(this.columns);
        this.handleResize();
      },
      deep: true
    },
    data: {
      handler(data) {
        if (!data.length) return;
        let list = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* deepCopy */])(data);
        this.cloneData = list;
        this.setDataId();
        this.handleSummary(list);
      },
      deep: true,
      immediate: true
    },
    cloneData: {
      handler() {
        let list = this.cloneData.filter(item => {
          if (item._disabled) return;
          if (!item._checked) return item;
        });
        this.selectFlag = !list.length;
        this.$emit("onSelectionChange", this.filterSelectFun());
      },
      deep: true
    }
  },
  created() {},
  mounted() {
    this.handleResize();
  },
  methods: {
    handleSummary(list) {
      if (this.showSummary) {
        const sums = {};
        const key = this.cloneColumns[0].key;
        if (key) {
          sums[key] = "合计";
        }
        if (this.summaryMethod) {
          this.sums = this.summaryMethod(this.cloneColumns, list);
          return;
        }
        this.cloneColumns.forEach((column, index) => {
          const key = column.key;
          if (index === 0) return;
          if (!$.Util.isEmpty(column.isNeedSum) && !column.isNeedSum || index < this.colspan) {
            return;
          }
          const values = list.map(item => Number(item[key]));
          if (!values.every(value => isNaN(value))) {
            const v = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[key] = v;
          } else {
            sums[key] = null;
          }
        });
        this.sums = sums;
      }
    },

    resize() {
      const _this = this;
      window.addEventListener("resize", function () {
        _this.handleResize();
      });
    },

    setDataId() {
      this.cloneData.forEach(item => {
        item._id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* getRandomStr */])(6);
      });
    },

    handleResize() {
      let tableWidth = this.$el.offsetWidth - 2;
      let columnsWidth = {};
      let sumMinWidth = 0;
      let hasWidthColumns = [];
      let noWidthColumns = [];
      let maxWidthColumns = [];
      let noMaxWidthColumns = [];
      this.cloneColumns.forEach(col => {
        if (col.width) {
          hasWidthColumns.push(col);
        } else {
          noWidthColumns.push(col);
          if (col.minWidth) {
            sumMinWidth += col.minWidth;
          }
          if (col.maxWidth) {
            maxWidthColumns.push(col);
          } else {
            noMaxWidthColumns.push(col);
          }
        }
        col._width = null;
      });

      let unUsableWidth = hasWidthColumns.map(cell => cell.width).reduce((a, b) => a + b, 0);

      let scrollBarWidth = tableWidth - this.$refs.trHeaderHd.offsetWidth || 0;
      let showVerticalScrollBar = !!scrollBarWidth;

      this.scrollBarWidth = scrollBarWidth;
      this.showVerticalScrollBar = showVerticalScrollBar;

      let usableWidth = tableWidth - unUsableWidth - sumMinWidth - (showVerticalScrollBar ? scrollBarWidth : 0) - 1;
      let usableLength = noWidthColumns.length;
      let columnWidth = 0;
      if (usableWidth > 0 && usableLength > 0) {
        columnWidth = parseInt(usableWidth / usableLength);
      }

      for (let i = 0; i < this.cloneColumns.length; i++) {
        const column = this.cloneColumns[i];
        let width = columnWidth + (column.minWidth ? column.minWidth : 0);
        if (column.width) {
          width = column.width;
        } else {
          if (column._width) {
            width = column._width;
          } else {
            if (column.minWidth > width) {
              width = column.minWidth;
            } else if (column.maxWidth < width) {
              width = column.maxWidth;
            }

            if (usableWidth > 0) {
              usableWidth -= width - (column.minWidth ? column.minWidth : 0);
              usableLength--;
              if (usableLength > 0) {
                columnWidth = parseInt(usableWidth / usableLength);
              } else {
                columnWidth = 0;
              }
            } else {
              columnWidth = 0;
            }
          }
        }
        width = width || 50;
        column._width = width;

        columnsWidth[i] = {
          width: width
        };
      }
      if (usableWidth > 0) {
        usableLength = noMaxWidthColumns.length;
        columnWidth = parseInt(usableWidth / usableLength);
        for (let i = 0; i < noMaxWidthColumns.length; i++) {
          const column = noMaxWidthColumns[i];
          let width = column._width + columnWidth;
          if (usableLength > 1) {
            usableLength--;
            usableWidth -= columnWidth;
            columnWidth = parseInt(usableWidth / usableLength);
          } else {
            columnWidth = 0;
          }

          column._width = width;

          columnsWidth[i] = {
            width: width
          };
        }
      }

      this.tableWidth = this.cloneColumns.map(cell => cell._width).reduce((a, b) => a + b, 0) + (this.showVerticalScrollBar ? this.scrollBarWidth : 0) + 1;
      this.columnsWidth = columnsWidth;
      this.computeFixedDistance();
    },

    computeFixedDistance() {
      this.fixedIdx = [];
      // 操作获取的 columns 数组
      this.cloneColumns.forEach((item, idx) => {
        // 找出固定列项
        if (item.fixed) {
          this.fixedIdx.push({
            key: idx,
            width: item._width,
            fixed: item.fixed
          });
        }
        item.style = {
          minWidth: item.minWidth + "px",
          maxWidth: item.maxWidth + "px"
        };
        if (!item.minWidth) delete item.style.minWidth;
        if (!item.maxWidth) delete item.style.maxWidth;
      });

      // 计算固定列左边距离
      let leftSum = 0;
      let leftCount = 0;
      this.fixedIdx.forEach((item, idx) => {
        leftCount -= 1;
        if (item.fixed === "left") {
          if (idx === 0) {
            leftSum = item.width;
            item.sum = leftCount;
          } else {
            item.sum = leftSum + leftCount;
            leftSum += item.width;
          }
          this.cloneColumns[item.key].style[item.fixed] = item.sum + "px";
        }
      });

      // 计算固定列右边距离
      let rightSum = 0;
      let rightCount = 0;
      this.fixedIdx.reverse().forEach((item, idx) => {
        rightCount -= 1;
        if (item.fixed === "right") {
          if (idx === 0) {
            rightSum = item.width;
            item.sum = rightCount;
          } else {
            item.sum = rightSum + rightCount;
            rightSum += item.width;
          }
          this.cloneColumns[item.key].style[item.fixed] = item.sum + "px";
        }
      });
    },

    activeItemFun(e, idx) {
      const flag = e.target.checked;
      if (flag) {
        this.$emit("onSelect", this.data[idx]);
      } else {
        this.$emit("onSelectCancel", this.data[idx]);
      }
    },

    allCheckboxFun(e) {
      const flag = e.target.checked;
      this.cloneData.forEach((item, idx) => {
        if (item._disabled) return;
        // item._checked = flag;
        this.$set(this.cloneData[idx], "_checked", flag);
      });
      if (flag) {
        this.$emit("onSelectAll", this.filterSelectFun());
      } else {
        this.$emit("onSelectAllCancel", this.filterSelectFun());
      }
    },

    filterSelectFun() {
      return this.data.filter((item, idx) => {
        const c = this.cloneData[idx];
        return c._checked;
      });
    },

    filterFixed(c, idx) {
      if (c.type === "selection") return false;
      const a = this.fixedIdx.find(item => item.key === idx);
      if (a) {
        return !!a;
      }
    }
  }
});

/***/ }),

/***/ 1111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'TableRenderHeader',
    functional: true,
    props: {
        render: Function,
        column: Object,
        index: Number
    },
    render: (h, ctx) => {
        const params = {
            column: ctx.props.column,
            index: ctx.props.index
        };
        return ctx.props.render(h, params);
    }
});

/***/ }),

/***/ 1112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = deepCopy;
/* harmony export (immutable) */ __webpack_exports__["a"] = getRandomStr;
// deepCopy
function deepCopy(data) {
  const t = typeOf(data);
  let o;

  if (t === "array") {
    o = [];
  } else if (t === "object") {
    o = {};
  } else {
    return data;
  }

  if (t === "array") {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if (t === "object") {
    for (let i in data) {
      o[i] = deepCopy(data[i]);
    }
  }
  return o;
}

function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object"
  };
  return map[toString.call(obj)];
}

function getRandomStr(len = 32) {
  const $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  const maxPos = $chars.length;
  let str = "";
  for (let i = 0; i < len; i++) {
    str += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return str;
}

/***/ }),

/***/ 1113:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, "[data-v-e848f6e8]{box-sizing:border-box}.qd-table[data-v-e848f6e8]{border-radius:4px;overflow:hidden;border:1px solid #e3e8ee}.qd-table .qd-table-mytbl[data-v-e848f6e8]{width:100%;overflow:auto}.qd-table .qd-table-mytbl table[data-v-e848f6e8]{table-layout:fixed;width:100%}.qd-table .qd-table-mytbl tbody tr td[data-v-e848f6e8]{background:#fff}.qd-table .qd-table-mytbl tbody tr:last-of-type td[data-v-e848f6e8]{border-bottom:0}.qd-table .qd-table-mytbl th[data-v-e848f6e8]{font-weight:700;color:#777;background:#f8f8f9}.qd-table .qd-table-mytbl td[data-v-e848f6e8],.qd-table .qd-table-mytbl th[data-v-e848f6e8]{padding:10px 10px 8px;font-size:12px;border-bottom:1px solid #e3e8ee}.qd-table .qd-table-mytbl td[data-v-e848f6e8]:last-child,.qd-table .qd-table-mytbl th[data-v-e848f6e8]:last-child{border-right:0}.qd-table .qd-table-mytbl tr[data-v-e848f6e8]:hover{background:#fafafa}.qd-table .qd-table-mytbl .ckbox[data-v-e848f6e8]{cursor:pointer}.qd-table .qd-table-mytbl .ckbox:hover .ckbox-0[data-v-e848f6e8]{color:#2e86e5}.qd-table .qd-table-mytbl .ckbox .ckbox-0[data-v-e848f6e8]{color:#ccc;font-size:14px;font-weight:400}.qd-table .qd-table-mytbl .ckbox .ckbox-1[data-v-e848f6e8]{color:#2e86e5;font-size:14px;font-weight:400}.qd-table .qd-table-mytbl .th-help[data-v-e848f6e8]{font-weight:400;color:#999;border-radius:50%;padding:0 6px;background:#ddd;font-size:11px;margin-left:3px}.qd-table-box-fixed[data-v-e848f6e8]{overflow:auto}.qd-table-border td[data-v-e848f6e8],.qd-table-border th[data-v-e848f6e8]{border-right:1px solid #e3e8ee}.qd-table-header-fixed[data-v-e848f6e8]{position:sticky;top:0;z-index:99}.qd-table-column-sum[data-v-e848f6e8]{position:sticky;bottom:0;z-index:99}.qd-table-column-sum tr[data-v-e848f6e8]{box-shadow:0 4px 6px 0 rgba(0,0,0,.4)}.qd-table-column-sum tr td[data-v-e848f6e8]:first-of-type{text-align:center}.qd-table-column-fixed[data-v-e848f6e8]{position:sticky;z-index:90}.qd-table-column-fixed[data-v-e848f6e8]:after{position:absolute;top:0;right:0;content:\"\";display:block;width:1px;height:100%;box-shadow:3px 0 6px 0 rgba(0,0,0,.4)}.qd-table-column-fixed[data-v-e848f6e8]:before{position:absolute;top:0;left:0;content:\"\";display:block;width:1px;height:100%;box-shadow:-3px 0 6px 0 rgba(0,0,0,.4)}.qd-table-checkbox[data-v-e848f6e8]{width:18px;height:18px;position:relative}.qd-table-checkbox input[type=checkbox][data-v-e848f6e8]{display:none}.qd-table-checkbox .disabled[data-v-e848f6e8]{display:inline-block}.qd-table-checkbox input[type=checkbox]+label[data-v-e848f6e8]{display:inline-block;position:relative;cursor:pointer;position:absolute;left:0;top:50%;transform:translateY(-50%)}.qd-table-checkbox input[type=checkbox]+label[data-v-e848f6e8]:before{content:\"\";display:inline-block;width:18px;height:18px;border-radius:2px;border:1px solid #dcdee2;background-color:#fff;vertical-align:top;text-align:center;font-size:12px;line-height:14px}.qd-table-checkbox input[type=checkbox]:checked+label[data-v-e848f6e8]:before{content:\"\\2714\";background-color:#2d8cf0;color:#fff}.qd-table-checkbox .disabled+label[data-v-e848f6e8]:before,.qd-table-checkbox input[type=checkbox][data-v-e848f6e8],.qd-table-checkbox input[type=checkbox][data-v-e848f6e8]:checked{background-color:#f3f3f3!important;color:#ccc!important;cursor:not-allowed!important}.qd-table-stripe table tbody tr:nth-of-type(2n) td[data-v-e848f6e8]{background-color:#f8f8f9}.none[data-v-e848f6e8]{text-align:center;color:#bbb;font-size:12px;margin-top:20px}.theme-black .qd-table .qd-table-box[data-v-e848f6e8]{background:#2c2c2c}.theme-black .qd-table .qd-table-box .qd-table-mytbl td[data-v-e848f6e8],.theme-black .qd-table .qd-table-box .qd-table-mytbl th[data-v-e848f6e8]{background:#212121;border-color:#111}.theme-black .qd-table .qd-table-box .qd-table-mytbl td[data-v-e848f6e8]{background:#2c2c2c}.theme-black .qd-table .qd-table-box .qd-table-mytbl .qd-table-checkbox label[data-v-e848f6e8]:before{border-color:#111}.theme-black .qd-table .qd-table-box .qd-table-mytbl .qd-table-checkbox input[type=checkbox]:checked+label[data-v-e848f6e8]:before{content:\"\\2714\";background-color:#2c2c2c}.theme-black .qd-table-stripe table tbody tr:nth-of-type(2n) td[data-v-e848f6e8]{background-color:#212121!important}.theme-black .qd-table[data-v-e848f6e8]{border:1px solid #111!important}.theme-pink .qd-table .qd-table-box .qd-table-mytbl .qd-table-checkbox label[data-v-e848f6e8]:before{border-color:#f199bc}.theme-pink .qd-table .qd-table-box .qd-table-mytbl .qd-table-checkbox .disabled+label[data-v-e848f6e8]:before,.theme-pink .qd-table .qd-table-box .qd-table-mytbl .qd-table-checkbox input[type=checkbox]:checked+label[data-v-e848f6e8]:before{content:\"\\2714\";background-color:#ffbbd6}.theme-green .qd-table .qd-table-box .qd-table-mytbl .qd-table-checkbox label[data-v-e848f6e8]:before{border-color:#5fd1a0}.theme-green .qd-table .qd-table-box .qd-table-mytbl .qd-table-checkbox .disabled+label[data-v-e848f6e8]:before,.theme-green .qd-table .qd-table-box .qd-table-mytbl .qd-table-checkbox input[type=checkbox]:checked+label[data-v-e848f6e8]:before{content:\"\\2714\";background-color:#5fd1a0}", ""]);

// exports


/***/ }),

/***/ 1114:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1113);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("1cc194b2", content, true, {});

/***/ }),

/***/ 1115:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "qd-table",
    class: _vm.theme
  }, [_c('div', {
    class: _vm.classesFixed
  }, [_c('div', {
    class: _vm.classesBox,
    style: (_vm.styles)
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showHeader),
      expression: "showHeader"
    }],
    class: _vm.classesHeader
  }, [_c('table', [_c('colgroup', _vm._l((_vm.cloneColumns), function(cw, idx) {
    return _c('col', {
      key: idx,
      attrs: {
        "width": cw._width
      }
    })
  }), 0), _vm._v(" "), _c('thead', [_c('tr', {
    ref: "trHeaderHd"
  }, [_vm._l((_vm.cloneColumns), function(cols, idx) {
    return [(_vm.filterFixed(cols, idx)) ? [_c('th', {
      key: idx,
      class: _vm.classesColumnFixed,
      style: (cols.style),
      attrs: {
        "align": cols.align || 'left'
      }
    }, [(_vm.showSlotHeader) ? [_vm._t("header", null, {
      "row": _vm.columns[idx],
      "index": idx
    })] : [(!cols.renderHeader) ? [_vm._v(_vm._s(cols.title))] : [_c('render-header', {
      attrs: {
        "render": cols.renderHeader,
        "column": cols,
        "index": idx
      }
    })]]], 2)] : (cols.type === 'selection') ? [_c('th', {
      key: idx,
      class: _vm.classesColumnFixed,
      style: (cols.style),
      attrs: {
        "align": cols.align || 'left'
      }
    }, [_c('div', {
      staticClass: "qd-table-checkbox"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.selectFlag),
        expression: "selectFlag"
      }],
      attrs: {
        "type": "checkbox",
        "id": _vm.headerInputId
      },
      domProps: {
        "checked": Array.isArray(_vm.selectFlag) ? _vm._i(_vm.selectFlag, null) > -1 : (_vm.selectFlag)
      },
      on: {
        "input": _vm.allCheckboxFun,
        "change": function($event) {
          var $$a = _vm.selectFlag,
            $$el = $event.target,
            $$c = $$el.checked ? (true) : (false);
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.selectFlag = $$a.concat([$$v]))
            } else {
              $$i > -1 && (_vm.selectFlag = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
            }
          } else {
            _vm.selectFlag = $$c
          }
        }
      }
    }), _vm._v(" "), _c('label', {
      attrs: {
        "for": _vm.headerInputId
      }
    })])])] : [_c('th', {
      key: idx,
      style: (cols.style),
      attrs: {
        "align": cols.align || 'left'
      }
    }, [(_vm.showSlotHeader) ? [_vm._t("header", null, {
      "row": _vm.columns[idx],
      "index": idx
    })] : [(!cols.renderHeader) ? [_vm._v(_vm._s(cols.title))] : [_c('render-header', {
      attrs: {
        "render": cols.renderHeader,
        "column": cols,
        "index": idx
      }
    })]]], 2)]]
  })], 2)])])]), _vm._v(" "), (_vm.data.length) ? _c('div', {
    class: _vm.classesBody
  }, [_c('table', [_c('colgroup', _vm._l((_vm.cloneColumns), function(cw, idx) {
    return _c('col', {
      key: idx,
      attrs: {
        "width": cw._width
      }
    })
  }), 0), _vm._v(" "), _c('tbody', _vm._l((_vm.cloneData), function(c, idx) {
    return _c('tr', {
      key: idx
    }, [_vm._l((_vm.cloneColumns), function(cols, cIdx) {
      return [(_vm.filterFixed(cols, cIdx)) ? [_c('td', {
        key: cIdx,
        class: _vm.classesColumnFixed,
        style: (cols.style),
        attrs: {
          "align": cols.align || 'left'
        }
      }, [(!cols.slotName) ? [_vm._v("\n                      " + _vm._s(c[cols.key]) + "\n                    ")] : [_vm._t(cols.slotName, null, {
        "row": c,
        "index": idx
      })]], 2)] : (cols.type === 'selection') ? [_c('td', {
        key: cIdx,
        class: _vm.classesColumnFixed,
        style: (cols.style),
        attrs: {
          "align": cols.align || 'left'
        }
      }, [_c('div', {
        staticClass: "qd-table-checkbox"
      }, [_c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: (c._checked),
          expression: "c._checked"
        }],
        class: c._disabled && 'disabled',
        attrs: {
          "type": "checkbox",
          "id": c._id,
          "disabled": c._disabled
        },
        domProps: {
          "checked": Array.isArray(c._checked) ? _vm._i(c._checked, null) > -1 : (c._checked)
        },
        on: {
          "input": function($event) {
            return _vm.activeItemFun($event, c)
          },
          "change": function($event) {
            var $$a = c._checked,
              $$el = $event.target,
              $$c = $$el.checked ? (true) : (false);
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v);
              if ($$el.checked) {
                $$i < 0 && (_vm.$set(c, "_checked", $$a.concat([$$v])))
              } else {
                $$i > -1 && (_vm.$set(c, "_checked", $$a.slice(0, $$i).concat($$a.slice($$i + 1))))
              }
            } else {
              _vm.$set(c, "_checked", $$c)
            }
          }
        }
      }), _vm._v(" "), _c('label', {
        attrs: {
          "for": c._id
        }
      })])])] : [_c('td', {
        key: cIdx,
        style: (cols.style),
        attrs: {
          "align": cols.align || 'left'
        }
      }, [(!cols.slotName) ? [_vm._v("\n                      " + _vm._s(c[cols.key]) + "\n                    ")] : [_vm._t(cols.slotName, null, {
        "row": c,
        "index": idx
      })]], 2)]]
    })], 2)
  }), 0)])]) : _vm._e(), _vm._v(" "), (_vm.data.length) ? _c('div', {
    class: _vm.classesBody + ' ' + _vm.classesColumnSum
  }, [_c('table', [_c('colgroup', _vm._l((_vm.cloneColumns), function(cw, idx) {
    return _c('col', {
      key: idx,
      attrs: {
        "width": cw._width
      }
    })
  }), 0), _vm._v(" "), _c('tbody', [(_vm.showSummary) ? _c('tr', [_vm._l((_vm.cloneColumns), function(cols, cIdx) {
    return [(cols.type === 'selection') ? [(cIdx == 0) ? _c('td', {
      key: cIdx,
      class: _vm.classesColumnFixed,
      style: (cols.style),
      attrs: {
        "colspan": _vm.colspan,
        "align": "center"
      }
    }, [_c('b', [_vm._v(_vm._s((cols.type == "selection" && !cols.key) ? _vm.sumTitle : _vm.sums[cols.key]))])]) : _vm._e()] : (_vm.filterFixed(cols, cIdx)) ? [(cIdx == 0) ? _c('td', {
      key: cIdx,
      class: _vm.classesColumnFixed,
      style: (cols.style),
      attrs: {
        "colspan": _vm.colspan,
        "align": "center"
      }
    }, [_c('b', [_vm._v(_vm._s(_vm.sums[cols.key] || _vm.sumTitle))])]) : _vm._e(), _vm._v(" "), (_vm.colspan <= cIdx) ? _c('td', {
      key: cIdx,
      class: _vm.classesColumnFixed,
      style: (cols.style),
      attrs: {
        "align": cols.align || 'left'
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.sums[cols.key]) + "\n                  ")]) : _vm._e()] : [(cIdx == 0) ? _c('td', {
      key: cIdx,
      style: (cols.style),
      attrs: {
        "colspan": _vm.colspan,
        "align": "center"
      }
    }, [_c('b', [_vm._v(_vm._s(_vm.sums[cols.key] || _vm.sumTitle))])]) : _vm._e(), _vm._v(" "), (_vm.colspan <= cIdx) ? _c('td', {
      key: cIdx,
      style: (cols.style),
      attrs: {
        "align": cols.align || 'left'
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.sums[cols.key]) + "\n                  ")]) : _vm._e()]]
  })], 2) : _vm._e()])])]) : [(_vm.showNoDataText) ? _c('div', {
    staticClass: "none"
  }, [_vm._v(_vm._s(_vm.noDataText))]) : _vm._e()]], 2)])])
},staticRenderFns: []}

/***/ }),

/***/ 1468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_table_table_vue__ = __webpack_require__(1041);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_table_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_table_table_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { qdTable: __WEBPACK_IMPORTED_MODULE_0__components_table_table_vue___default.a },
  props: {},
  data() {
    return {
      g: $,
      theme: $.Util.cookie.get("skin") || null,
      editable: $.Util.hasRoleFunc($.Dict.RoleFunc.AI_MACH_CONF.value),
      aiMachList: [],
      aiMachDlg: false,
      aiMach: {
        machBrand: 1,
        machNo: null,
        machType: null,
        allowMoreEntry: 1,
        bathroomType: 0
      },
      aiMachCardDlg: false,
      aiMachCard: {
        paymentType: null,
        cardType: null
      },
      cardList: [],
      aiMachCardList: [],
      aiMachCardIdList: [],
      faceBindDel: {
        dlg: false,
        phoneNo: null,
        userId: null,
        userName: null,
        machNo: null
      },
      enableEntryMach: false,
      enableQrcodeMach: null,
      hasLocker: false,
      bathroomList: [],
      bathroomLogList: [],
      bathroomDlg: false,
      selectMachNo: null,
      exportDlg: null,
      exportFileUrl: null,
      queryPage: null,
      enableGlCheckout: null,
      qrcodeMachConfDlg: null,
      qrcodeTimes: null,
      showMoreEntryConf: null,
      hideMcInfoInMachLessons: null,
      machLessonConf: {
        enable: false,
        beginMins: null,
        endMins: null
      },
      preSelectOpenedMc: null,
      glMoreCheckins: {
        enable: false,
        durations: null
      },
      venueList: null,
      limitVenueIdArr: [],
      includePausedCard: false,
      isSetMoreCards: null,
      selectCardIdList: [],

      showTips: false,
      tipsCont: null,
      cardColumns: [{
        width: 60,
        key: "orderNo",
        title: "排序号",
        align: "center"
      }, {
        width: 150,
        key: "cardName",
        title: "会员卡"
      }, {
        width: 150,
        slotName: "cardType",
        title: "计费详情"
      }, {
        width: 150,
        key: "createTime",
        title: "创建时间"
      }, {
        width: 150,
        key: "updateTime",
        title: "更新时间"
      }, {
        width: 100,
        slotName: "handler",
        title: "操作"
      }],
      bathroomColumns: [{
        key: "roomNo",
        title: "淋浴间编号",
        width: 85
      }, {
        slotName: "status",
        title: "状态"
      }, {
        slotName: "handler",
        title: "操作",
        width: 100
      }],
      usedBathroomColumns: [{
        key: "roomNo",
        title: "淋浴间编号",
        width: 85
      }, {
        slotName: "memberName",
        title: "使用人",
        width: 150
      }, {
        key: "createTime",
        title: "开门时间",
        width: 150
      }, {
        slotName: "checkoutTime",
        title: "签出时间",
        width: 150
      }]
    };
  },
  computed: {},
  watch: {
    "aiMachCard.cardType": {
      handler(newVal) {
        this.selectCardIdList = [];
      }
    }
  },
  created() {
    this.queryAiMachList();
    this.queryCardList();
    this.queryShopArgs();
    this.queryVenueList();
  },
  mounted() {},
  methods: {
    changeCardType(type) {
      this.$set(this.aiMachCard, "cardType", type);
    },

    showTip(type) {
      let msg = "";
      if (type == 1) {
        if (this.aiMach.machType == 12) msg = "如果会员当天有预约私教课，则会自动签到私教课；<p></p>否则，自动做入场签到";
        if (this.aiMach.machType == 14) msg = "如果会员当天有预约团课或有固定班级课，则会自动签到团课；<p></p>否则，自动做入场签到";
      } else if (type == 2) {
        msg = "如果允许多次入场，签到一次后，当天再次入场签到时，系统不做签到处理，签到设备会放行；否则不予放行";
      } else if (type == 3) {
        msg = "如果勾选，则允许当天有约课或固定班级课的会员入场（开门或开闸机），但是系统不做上课签到。<p>备注：此设置仅针对当天有约课或固定班级课，但未签到的会员</p>";
      } else if (type == 4) {
        msg = "如果开启此选项，会员在此设备上签出时，系统将自动检查该会员在使用智能租柜时是否还柜了。如果未还柜，将无法签出（门禁或闸机也不会开启）。";
      } else if (type == 5) {
        msg = "<ol style='padding-left: 10px;'><li style='list-style: decimal;'>可添加多个计费会员卡，计费时系统按“排序号”自动选择会员首张有效会员卡计费；</li><li style='list-style: decimal;'>如果勾选“优先选择使用已开卡的会员卡”，则在选择计费卡时，将先按照排序号选择已开卡的会员卡计费；如果未成功计费，再按照排序号选择未开卡的会员卡计费</li></ol>";
      } else if (type == 6) {
        msg = `设置此时间后，系统在计费时将先扣除此时间，然后再根据剩余的时间计费。`;
      } else if (type == 7) {
        msg = `如果当前时间是15:00，设置显示【60】分钟前上课 ~ 【120】分钟内上课的团课，则设备上显示【14:00 ~ 17:00】之间上课的团课`;
      }

      this.tipsCont = `<p>${msg}</p>`;
      this.showTips = true;
    },

    queryAiMachList() {
      $.Req.service($.SvName.AI_MACH_QUERY, {}, ret => {
        this.aiMachList = ret.aiMachList;
        this.hasLocker = false;
        for (let m of ret.aiMachList) {
          if (m.machType === 9) {
            this.hasLocker = true;
            break;
          }
        }
      }, true);
    },

    openNewAiMach(machType = null) {
      if (!this.enableEntryMach && !this.enableQrcodeMach) {
        $.Dlg.warning("贵馆尚未开通此功能，请联系我们开通。");
        return;
      }
      this.aiMach = {
        machNo: null,
        machName: null,
        machBrand: 1,
        machType: machType,
        allowMoreEntry: 1,
        bathroomType: 0
      };
      this.aiMachCardList = [];
      this.aiMachCardIdList = [];
      this.bathroomList = [];
      this.aiMachDlg = true;
    },

    editAiMach(idx) {
      this.aiMach = Object.assign({
        machBrand: 1,
        machNo: null,
        machType: null,
        allowMoreEntry: 1,
        bathroomType: 0
      }, this.aiMachList[idx]);
      if ($.Util.isEmpty(this.aiMach.allowMoreEntry)) this.aiMach.allowMoreEntry = 1;else if (this.aiMach.allowMoreEntry) this.aiMach.allowMoreEntry = 1;else this.aiMach.allowMoreEntry = 0;

      this.queryAiMachCardList(this.aiMachList[idx].machId);
      if (this.aiMach.machType === 11) {
        this.queryBathroomList();
      } else {
        this.bathroomList = [];
      }
      if (this.aiMach.allowMoreEntry && this.aiMach.moreEntryLimitMin && this.aiMach.moreEntryLimitTimes) {
        this.showMoreEntryConf = true;
      } else {
        this.showMoreEntryConf = false;
      }
      this.limitVenueIdArr = [];
      if (this.aiMach.limitVenues) {
        for (let v of this.aiMach.limitVenues.split(",")) this.limitVenueIdArr.push(parseInt(v));
      }

      this.aiMachDlg = true;
    },

    delAiMach(idx) {
      let msg = "删除设备配置后会影响会员签到签出，您确定删除吗？";
      $.Dlg.confirm(msg, yes => {
        let args = { actionType: "D", deleteId: this.aiMachList[idx].machId };
        $.Req.service($.SvName.AI_MACH_SAVE, args, ret => {
          $.Msg.success($.Lang.SAVE_SUCCESS);
          this.queryAiMachList();
        });
      });
    },

    queryCardList() {
      $.Req.service($.SvName.CARD_QUERY, {}, ret => {
        this.cardList = ret.cardList;
      });
    },

    changeCard(cardId) {
      if (!cardId) return;

      for (let c of this.cardList) {
        if (parseInt(c.cardId) === parseInt(cardId)) {
          this.aiMachCard.cardName = c.cardName;
          this.aiMachCard.cardType = c.cardType;
          break;
        }
      }
    },

    submitAiMachCard() {
      // check
      if (this.isSetMoreCards) {} else {
        if (!this.aiMachCard.cardId) {
          $.Msg.error("请选择会员卡");
          return;
        }
      }

      if (this.aiMachCard.cardType !== 1) {
        if (!this.aiMachCard.paymentType) {
          $.Msg.error("请选择计费方式");
          return;
        }
        if (!this.aiMachCard.payment) {
          $.Msg.error("请选择计费额");
          return;
        }
      }
      if (!this.isSetMoreCards) {
        if (!this.aiMachCard.orderNo && this.aiMachCard.orderNo !== 0) {
          $.Msg.error("请输入排序号");
          return;
        }
      }
      if (this.aiMachCard.orderNo > 3000) {
        $.Dlg.error("排序号仅仅是个序号，不能大于3000");
        return;
      }

      if (this.aiMach.machId) {
        this.aiMachCard.machId = this.aiMach.machId;
        let args = {
          aiMachCard: this.aiMachCard,
          actionType: this.aiMachCard.amcId ? "U" : "I"
        };
        if (this.isSetMoreCards && !$.Util.isEmptyArray(this.selectCardIdList)) {
          args.cardIdList = this.selectCardIdList;
        }
        $.Req.service($.SvName.AI_MACH_CARD_SAVE, args, ret => {
          $.Msg.success($.Lang.SAVE_SUCCESS);
          this.queryAiMachCardList(this.aiMach.machId);
          this.aiMachCardDlg = false;
        });
      } else {
        this.aiMachCardDlg = false;
        if (this.isSetMoreCards && !$.Util.isEmptyArray(this.selectCardIdList)) {
          const list = [];
          this.selectCardIdList.forEach(card => {
            for (let c of this.cardList) {
              if (c.cardId == card) {
                list.push(c);
              }
            }
          });
          console.log(list);
          this.aiMachCardList = this.aiMachCardList.concat(list);
        } else {
          let obj = {};
          $.Util.copyAttributes(this.aiMachCard, obj);
          this.aiMachCardList.push(obj);
          this.aiMachCardIdList.push(this.aiMachCard.cardId);
        }
      }
    },

    submitAiMach() {
      if (!this.aiMach.machName) return $.Msg.error("请设置设备名称");
      if (!this.aiMach.machType) return $.Msg.error("请设置用途");
      if (!this.aiMach.machNo) return $.Msg.error("请设置设备编号");

      if (this.aiMach.machType < 4) {
        if (!this.aiMachCardList || !this.aiMachCardList.length) {
          $.Msg.error("请设置会员卡计费");
          return;
        }
      }

      let actionType = this.aiMach.machId ? "U" : "I";
      let msg = "";
      if (actionType === "I") {
        msg = "您确定要创建一个智能设备配置吗？";
      } else {
        msg = "修改设备配置可能会影响到会员入场签到签出，您确定提交吗？";
      }
      let args = {
        actionType: actionType,
        aiMach: this.aiMach
      };
      if (this.aiMach.machType < 4) {
        args.aiMachCardList = this.aiMachCardList;
      }
      if (this.aiMach.machType == 11 && this.aiMach.bathroomType === 0) {
        if (!this.aiMach.bathroomNum || this.aiMach.bathroomNum < 1) {
          $.Msg.error("请输入正确的淋浴间数量");
          return;
        }
        for (let i = 0; i < this.aiMach.bathroomNum; i++) {
          if (!this.bathroomList[i].roomNo) {
            $.Msg.error("请输入第" + (i + 1) + "个淋浴间编号");
            return;
          }
        }
        args.bathroomList = this.bathroomList;
      }
      args.aiMach.limitVenues = $.Util.isEmptyArray(this.limitVenueIdArr) ? null : this.limitVenueIdArr.join(",");
      $.Dlg.confirm(msg, () => {
        $.Req.service($.SvName.AI_MACH_SAVE, args, ret => {
          $.Msg.success($.Lang.SAVE_SUCCESS);
          this.queryAiMachList();
          this.aiMachDlg = false;
        });
      });
    },

    queryAiMachCardList(machId) {
      $.Req.service($.SvName.AI_MACH_CARD_QUERY, { machId: machId }, ret => {
        this.aiMachCardList = ret.aiMachCardList;
        this.aiMachCardIdList = [];
        for (let c of ret.aiMachCardList) this.aiMachCardIdList.push(c.cardId);
      }, true);
    },

    openNewAiMachCard() {
      this.aiMachCard = {
        amcId: null,
        cardId: null,
        paymentType: null
      };
      this.selectCardIdList = [];
      this.isSetMoreCards = null;
      this.aiMachCardDlg = true;
    },

    editAiMachCard(idx) {
      $.Util.copyAttributes(this.aiMachCardList[idx], this.aiMachCard);
      this.selectCardIdList = [];
      this.isSetMoreCards = null;
      this.aiMachCardDlg = true;
    },

    delAiMachCard(idx) {
      let msg = "删除设备配置后可能会影响会员签到签出，您确定删除吗？";
      $.Dlg.confirm(msg, yes => {
        let args = {
          actionType: "D",
          deleteId: this.aiMachCardList[idx].amcId
        };
        $.Req.service($.SvName.AI_MACH_CARD_SAVE, args, ret => {
          $.Msg.success($.Lang.SAVE_SUCCESS);
          this.queryAiMachCardList(this.aiMachCardList[idx].machId);
        });
      });
    },

    openFaceBindDelDlg(machNo) {
      this.faceBindDel.phoneNo = null;
      this.faceBindDel.userName = null;
      this.faceBindDel.userId = null;
      this.faceBindDel.dlg = true;
      this.faceBindDel.machNo = machNo;
    },

    queryUserForDelFace() {
      if (!this.faceBindDel.phoneNo || this.faceBindDel.phoneNo.length < 11) return;
      if (!$.Util.validatePhoneNo(this.faceBindDel.phoneNo)) {
        $.Msg.error("手机号格式有误");
        return;
      }

      this.faceBindDel.userId = null;
      this.faceBindDel.userName = null;
      let args = { phoneNo: this.faceBindDel.phoneNo };
      $.Req.service($.SvName.STAFF_QUERY, args, ret => {
        if (ret.staffBase) {
          this.faceBindDel.userId = ret.staffBase.uid;
          this.faceBindDel.userName = ret.staffBase.name;
        } else {
          $.Req.service($.SvName.MEMBER_BASE_QUERY, args, ret => {
            if (ret.member) {
              this.faceBindDel.userId = ret.member.uid;
              this.faceBindDel.userName = ret.member.name;
            } else {
              $.Msg.error("系统中未注册此手机号");
            }
          });
        }
      });
    },

    handleDelFaceBind() {
      $.Dlg.confirm(`您确定要解除【<span class="red">${this.faceBindDel.userName}</span>】的人脸识别？`, () => {
        if (!this.faceBindDel.userId) return;

        let args = {
          userId: this.faceBindDel.userId,
          machNo: this.faceBindDel.machNo
        };
        $.Req.service($.SvName.AI_MACH_FACE_BIND_DELETE, args, ret => {
          $.Msg.success($.Lang.OPT_SUCCESS);
          this.faceBindDel.dlg = false;
        });
      });
    },

    queryShopArgs() {
      let args = {
        typeIdList: [2015, 2087, 2077, 2089, 2094, 2097, 2099, 2100]
      };
      $.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
        if ($.Util.hasRoleFunc($.Dict.RoleFunc.MEMBER_AGENT.value)) {
          for (let t of ret.argList) {
            if (t.typeId === 2015) {
              this.enableEntryMach = t.typeValue === "true";
            } else if (t.typeId === 2087) {
              this.enableGlCheckout = t.typeValue === "true";
            } else if (t.typeId === 2077) {
              this.enableQrcodeMach = t.typeValue === "true";
            } else if (t.typeId === 2089) {
              this.qrcodeTimes = t.typeValue ? parseInt(t.typeValue) : null;
            } else if (t.typeId === 2094) {
              this.hideMcInfoInMachLessons = t.typeValue === "true";
            } else if (t.typeId === 2097) {
              if (t.typeValue) {
                let vals = t.typeValue.split(",");
                this.machLessonConf.enable = vals[0] === "true";
                if (vals.length > 2) {
                  this.machLessonConf.beginMins = parseInt(vals[1]);
                  this.machLessonConf.endMins = parseInt(vals[2]);
                }
              }
            } else if (t.typeId === 2100) {
              if (t.typeValue) {
                let vals = t.typeValue.split(",");
                this.glMoreCheckins.enable = vals[0] === "true";
                if (vals.length === 2) {
                  this.glMoreCheckins.durations = parseInt(vals[1]);
                }
              }
            }
          }
        }
      });
    },

    openDoor(machNo) {
      let args = { deviceId: machNo };
      $.Req.service($.SvName.LOGIN_CALL_FOR_IMSTLIFE, args, ret => {
        if (ret.status === 0) {
          $.Msg.success("已发开门指令");
        } else {
          $.Dlg.error(ret.msg);
        }
      }, true);
    },

    queryBathroomList() {
      if (!this.aiMach.machId) {
        this.bathroomList = [];
        return;
      }

      let args = { machId: this.aiMach.machId };
      $.Req.service($.SvName.AI_MACH_QUERY, args, ret => {
        this.bathroomList = ret.bathroomList;
      });
    },

    changeBathroomNum() {
      for (let i = this.bathroomList.length; i < this.aiMach.bathroomNum; i++) {
        this.bathroomList.push({
          machId: this.aiMach.machId,
          roomNo: null,
          status: 0
        });
      }
    },

    viewBathroomDetail(machNo) {
      this.selectMachNo = machNo;
      this.queryBathroom(machNo);
      this.bathroomDlg = true;
    },

    queryBathroom(machNo) {
      let args = {
        machNo: machNo
      };
      $.Req.service($.SvName.AI_MACH_BATHROOM_QUERY, args, ret => {
        this.bathroomList = ret.bathroomList;
        this.bathroomLogList = ret.bathroomLogList;
        this.bathroomDlg = true;
      }, true);
    },

    updateRoomStatus(ambId, newStatus) {
      $.Dlg.confirm("您确定更新状态吗？", () => {
        let args = {
          ambId: ambId,
          newStatus: newStatus
        };
        $.Req.service($.SvName.AI_MACH_BATHROOM_STATUS_UPATE, args, ret => {
          this.queryBathroom(this.selectMachNo);
        }, true);
      });
    },

    saveMachLessonConf() {
      let vals = [];
      if (this.machLessonConf.enable) {
        if (!this.machLessonConf.beginMins || !this.machLessonConf.endMins) {
          $.Msg.error("请设置有效的上课时间范围");
          return;
        }
        vals.push("true");
        vals.push(this.machLessonConf.beginMins);
        vals.push(this.machLessonConf.endMins);
      } else {
        vals.push("false");
      }
      $.Req.updateShopArg(2097, vals.join(","));
    },

    saveGlMoreCheckinsConf() {
      let vals = [];
      if (this.glMoreCheckins.enable) {
        if (!this.glMoreCheckins.durations) {
          $.Msg.error("请设置间隔时间（秒）");
          return;
        }
        vals.push("true");
        vals.push(this.glMoreCheckins.durations);
      } else {
        vals.push("false");
      }
      $.Req.updateShopArg(2100, vals.join(","));
    },

    queryVenueList() {
      let args = { isBaseInfo: true };
      $.Req.service($.SvName.VENUE_QUERY, args, ret => {
        this.venueList = ret.venueList;
      });
    }
  }
});

/***/ }),

/***/ 1469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_calendar_calendar_vue__ = __webpack_require__(989);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_calendar_calendar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_calendar_calendar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_table_table_vue__ = __webpack_require__(1041);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_table_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_table_table_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { qdTable: __WEBPACK_IMPORTED_MODULE_1__components_table_table_vue___default.a, Calendar: __WEBPACK_IMPORTED_MODULE_0__components_calendar_calendar_vue___default.a },
  props: {},
  data() {
    return {
      g: $,
      theme: $.Util.cookie.get("skin") || null,
      taskColumns: [{
        title: "任务名称",
        key: "taskName",
        width: 150
      }, {
        title: "短信发送时间",
        slotName: "sendDate",
        width: 150
      }, {
        title: "状态",
        slotName: "sendStatus",
        width: 70
      }, {
        title: "发送对象",
        slotName: "cardName",
        width: 170
      }, {
        title: "短信签名",
        slotName: "signName",
        width: 100
      }, {
        title: "短信内容",
        key: "content",
        width: 200
      }, {
        title: "已发人数",
        key: "sentCount",
        width: 100
      }, {
        title: "审核结果",
        slotName: "checkStatus",
        width: 100
      }, {
        title: "操作",
        slotName: "handler",
        width: 80
      }],
      signColumns: [{
        title: "签名",
        key: "signName",
        width: 100
      }, {
        title: "审核结果",
        slotName: "checkStatus",
        width: 100
      }, {
        title: "更新人",
        key: "updateUname",
        width: 100
      }, {
        title: "更新时间",
        key: "updateTime",
        width: 150
      }, {
        title: "操作",
        slotName: "handler",
        width: 80
      }],
      receiverType: ["所有会员", "有效会员", "无效会员", "未开卡会员", "所有私教会员", "有效私教会员", "无效私教会员", "未入场锻炼的会籍卡会员"],
      g: window.$,
      today: new Date(),
      smsSignList: [],
      smsTaskList: [],
      smsTaskCount: null,
      hasCheckedSign: false,
      signDlg: false,
      taskDlg: false,
      signName: null,
      selectSignId: null,
      smsTask: {
        content: ""
      },
      smsCnts: {
        sends: null,
        buys: null,
        remnant: null
      },
      smsSendDateOpt: {
        disabledDate(date) {
          return date && date.valueOf() < Date.now();
        }
      },
      selectTaskId: null,
      smsSignNameMap: {},
      submitBtnLoading: false,
      smgSignName: "",
      cardList: null,
      receiverLimitCardArr: [],
      cardNameMap: {},
      memberRegBeginDate: null,
      memberRegEndDate: null,

      inputShow: false,
      minDate: new Date(),
      maxDate: null,
      currentDate: new Date(),

      createMemberDateShow: false,
      checkDlgViewName: null,
      beginDate: null,
      endDate: null,
      month: null,
      year: null,
      date: null,
      queryDate: $.Util.formatDate(new Date()),
      checkinDateId: [],
      datePicker: "date"
    };
  },
  computed: {},
  watch: {},
  created() {
    let oDate = new Date();
    this.month = oDate.getMonth();
    this.year = oDate.getFullYear();
    this.date = oDate.getDate();
    this.minDate = new Date(new Date(oDate.setDate(this.date + 1)).format("yyyy-MM-dd 09:00:00"));
    this.queryCards(() => {
      this.querySmsSignList(false, () => {
        this.querySmsTaskList(null, false);
      });
    });

    this.querySmsCounts();
  },
  mounted() {},
  methods: {
    confirmDatePiker() {
      if (this.currentDate) {
        if (this.checkDlgViewName == "beginDate") {
          this.memberRegBeginDate = this.currentDate;
        } else {
          this.memberRegEndDate = this.currentDate;
        }
        this.createMemberDateShow = false;
        this.currentDate = new Date().format("yyyy-MM-dd");
      } else {
        $.Bble.warning("请选择日期");
      }
    },

    queryMonth(beginDate) {
      let date;
      if (this.currentDate) {
        let oDate = new Date(this.currentDate);
        date = oDate.getDate();
      }

      this.queryDate = $.Util.formatDate(beginDate ? beginDate["0"].format("yyyy-MM-" + date) : new Date(this.year, this.month, date));
      this.currentDate = this.queryDate;
    },

    querySelectedDay(arg) {
      let date = arg;
      if (date) {
        date = date < 10 ? "0" + date : date;
      }
      let queryDate = this.queryDate.substring(0, 8) + date;
      this.currentDate = queryDate;
    },

    clearDate(t) {
      if (!t) {
        this.currentDate = new Date().format("yyyy-MM-dd");
        this.$set(this, "memberRegBeginDate", null);
      } else {
        this.currentDate = new Date().format("yyyy-MM-dd");
        this.$set(this, "memberRegEndDate", null);
      }
    },

    showInputDlg(name, date) {
      this.createMemberDateShow = true;
      this.checkDlgViewName = name;
      if (date) {
        this.currentDate = new Date(date).format("yyyy-MM-dd");
      } else {
        this.currentDate = new Date().format("yyyy-MM-dd");
      }
    },

    confirmDatePikerSend(value) {
      if (this.datePicker == "date") {
        this.smsTask.sendDate = value.format("yyyy-MM-dd");
      } else {
        this.smsTask.sendTime = value + ":00";
      }
      this.inputShow = false;
    },

    showInputSendDlg(type) {
      this.datePicker = type;
      this.inputShow = true;
      if (type == "date") {
        this.currentDate = new Date(this.smsTask.sendDate) || new Date();
      } else {
        this.currentDate = this.smsTask.sendTime || "09:00:00";
      }
    },

    querySmsCounts() {
      $.Req.service($.SvName.SMS_COUNTS_QUERY, {}, ret => {
        this.smsCnts.sends = ret.sends;
        this.smsCnts.buys = ret.buys;
        this.smsCnts.remnant = ret.remnant;
      }, true);
    },

    querySmsSignList(isfresh = false, callback = null) {
      $.Req.service($.SvName.SMS_SIGN_QUERY, {}, (ret, systime) => {
        this.today = Date.new(systime);
        this.smsSignList = ret.smsSignList;
        this.hasCheckedSign = false;
        for (let s of ret.smsSignList) {
          if (s.checkStatus === 2) {
            this.hasCheckedSign = true;
          }
          this.smsSignNameMap[s.signId] = s.signName;
        }
        if (isfresh) $.Msg.info($.Lang.REFRESH_DONE);
        if (callback) callback();
      });
    },

    querySmsTaskList(page = null, isfresh = false) {
      if (!page) this.smsTaskCount = null;
      let args = {
        page: page
      };
      $.Req.service($.SvName.SMS_TASK_QUERY, args, ret => {
        for (let t of ret.smsTaskList) {
          if (t.receiverLimitCards) {
            let cardNameArr = [];
            for (let cardId of t.receiverLimitCards.split(",")) {
              cardNameArr.push(this.cardNameMap[cardId]);
            }
            t.cardNameArr = cardNameArr;
          }
        }
        this.smsTaskList = ret.smsTaskList;
        if (!page) {
          this.smsTaskCount = ret.count;
        }
        if (isfresh) $.Msg.info($.Lang.REFRESH_DONE);
      }, true);
    },

    openCreateTaskDlg() {
      if (!this.hasCheckedSign) {
        $.Dlg.info(`尚无审核通过的短信签名，请先新增短信签名，审核通过后再新增短信群发任务。`, null, false);
        return;
      }
      this.smsTask = {
        content: ""
      };
      this.memberRegBeginDate = null;
      this.memberRegEndDate = null;
      this.receiverLimitCardArr = [];
      this.taskDlg = true;
    },

    openCreateSignDlg() {
      this.signName = null;
      this.selectSignId = null;
      this.signDlg = true;
    },

    openEditSignDlg(sign) {
      this.signName = sign.signName;
      this.selectSignId = sign.signId;
      this.signDlg = true;
    },

    saveSmsSign() {
      // check sign name
      let signName = this.signName;
      if (!signName) {
        $.Msg.error("请输入短信签名");
        return;
      }
      if (signName.length < 3) {
        $.Msg.error("短信签名不能少于3个字");
        return;
      }
      if (signName.length > 8) {
        $.Msg.error("短信签名不能多于8个字");
        return;
      }
      let regEn = /[ `~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
      let regCn = /[▪•·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
      if (regEn.test(signName) || regCn.test(signName)) {
        $.Msg.error("短信签名不能包含特殊字符");
        return;
      }

      let args = {
        actionType: this.selectSignId ? "U" : "I",
        smsSign: {
          signId: this.selectSignId,
          signName: this.signName
        }
      };

      $.Req.service($.SvName.SMS_SIGN_SAVE, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.querySmsSignList();
        this.signDlg = false;
      });
    },

    saveSmsTask() {
      // check
      if (!this.smsTask.signId) {
        $.Msg.error("请选择短信签名");
        return;
      }
      if (!this.smsTask.sendDate) {
        $.Msg.error("请输入短信发送日期");
        return;
      }
      if (Date.new(this.smsTask.sendDate).compareDatePart(this.today) <= 0) {
        $.Msg.error("短信发送日期必须大于今日");
        return;
      }
      if (!this.smsTask.sendTime) {
        $.Msg.error("请输入短信发送时间");
        return;
      }
      if ($.Util.isEmpty(this.smsTask.receiverType)) {
        $.Msg.error("请选择短信发送对象");
        return;
      }
      if (this.memberRegBeginDate || this.memberRegEndDate) {
        if (this.memberRegBeginDate && !this.memberRegEndDate || !this.memberRegBeginDate && this.memberRegEndDate) {
          $.Msg.error("请输入完整的会员注册日期");
          return;
        }
        this.smsTask.memberRegDates = "{0},{1}".format($.Util.formatDate(this.memberRegBeginDate), $.Util.formatDate(this.memberRegEndDate));
      }

      if (!this.smsTask.content) {
        $.Msg.error("请输入短信内容");
        return;
      }
      let regCn = /[▪•【】]/im;
      if (regCn.test(this.smsTask.content)) {
        $.Msg.error("短信内容不能包含特殊符号“【】▪•”");
        return;
      }
      if (this.smsTask.content.length > 400) {
        $.Msg.error("短信内容不能超过400字");
        return;
      }
      if (this.smsTask.content.indexOf("\n") >= 0) {
        $.Msg.error("短信内容不要有换行");
        return;
      }
      if (this.receiverLimitCardArr) {
        this.smsTask.receiverLimitCards = this.receiverLimitCardArr.join(",");
      } else {
        this.smsTask.receiverLimitCards = null;
      }
      let args = {
        actionType: this.smsTask.stId ? "U" : "I",
        smsTask: this.smsTask
      };
      if (this.smsTask.sendTime.indexOf(" ") > 0) {
        args.smsTask.sendTime = this.smsTask.sendTime.substr(this.smsTask.sendTime.indexOf(" ") + 1);
      }
      if (args.smsTask.sendTime < "09:00:00") {
        $.Msg.error("短信发送时间不能早于【09:00:00】");
        return;
      }
      if (args.smsTask.sendTime > "19:00:00") {
        $.Msg.error("短信发送时间不能晚于【19:00:00】");
        return;
      }

      this.submitBtnLoading = true;
      $.Req.service($.SvName.SMS_TASK_SAVE, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.querySmsTaskList();
        this.taskDlg = false;
        this.submitBtnLoading = false;
      }, true, err => {
        $.Dlg.error(err);
        this.submitBtnLoading = false;
      });
    },

    delSmsSign(signId) {
      $.Dlg.confirm("确定删除该短信签名吗？", yes => {
        let args = {
          actionType: "D",
          deleteId: signId
        };
        $.Req.service($.SvName.SMS_SIGN_SAVE, args, ret => {
          $.Msg.success($.Lang.OPT_SUCCESS);
          this.querySmsSignList();
        });
      });
    },

    editSmsTask(task) {
      $.Util.copyAttributes(task, this.smsTask);
      this.smsTask.sendTime = Date.new(task.sendTime).format("hh:mm:ss");
      this.smsTask.sendDate = Date.new(task.sendDate).format("yyyy-MM-dd");
      this.changeSmsSign();
      this.receiverLimitCardArr = [];
      if (this.smsTask.receiverLimitCards) {
        for (let cardId of this.smsTask.receiverLimitCards.split(",")) {
          this.receiverLimitCardArr.push(parseInt(cardId));
        }
      }
      if (this.smsTask.memberRegDates) {
        let items = this.smsTask.memberRegDates.split(",");
        this.memberRegBeginDate = Date.new(items[0]).format("yyyy-MM-dd");
        this.memberRegEndDate = Date.new(items[1]).format("yyyy-MM-dd");
      } else {
        this.memberRegBeginDate = null;
        this.memberRegEndDate = null;
      }

      this.taskDlg = true;
    },

    delSmsTask(taskId) {
      $.Dlg.confirm("确定删除该短信群发任务吗？", yes => {
        let args = {
          actionType: "D",
          deleteId: taskId
        };
        $.Req.service($.SvName.SMS_TASK_SAVE, args, ret => {
          $.Msg.success($.Lang.OPT_SUCCESS);
          this.querySmsTaskList(null, false);
        });
      });
    },

    changeSmsSign() {
      for (let s of this.smsSignList) {
        if (s.signId === this.smsTask.signId) {
          this.smgSignName = s.signName;
          break;
        }
      }
    },

    queryCards(callback = null) {
      let args = { isBaseInfo: true, status: 0 };
      $.Req.service($.SvName.CARD_QUERY, args, ret => {
        this.cardList = ret.cardList;
        for (let c of ret.cardList) {
          this.cardNameMap[c.cardId] = c.cardName;
        }
        if (callback) callback();
      });
    }
  }
});

/***/ }),

/***/ 1597:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, "[data-v-12a9bb60].qd-table .qd-table-box .none{margin:20px 0}[data-v-12a9bb60].qd-table .qd-table-box td *{font-size:12px}.tit[data-v-12a9bb60]{font-size:16px}.close-pl[data-v-12a9bb60]{padding:10px 20px}.close-pl .title[data-v-12a9bb60]{font-weight:700;margin-bottom:10px}.close-pl .orange[data-v-12a9bb60]{color:orange;font-size:16px;font-weight:700}.help[data-v-12a9bb60]{margin-top:0}.help .title[data-v-12a9bb60]{margin:10px 0}.help .content-help ol[data-v-12a9bb60]{padding-left:10px}.help .content-help ol li[data-v-12a9bb60]{list-style:decimal}.cnts[data-v-12a9bb60]{padding:0 16px;margin:0;margin-top:10px;border-radius:0}.cnts .cnts-li[data-v-12a9bb60]{display:flex;justify-content:space-between;align-items:center;padding:10px 0}.sms-part[data-v-12a9bb60]{overflow:hidden}.sms-part .section-name[data-v-12a9bb60]{padding:16px 10px}.sms-part .section-name .l[data-v-12a9bb60]{font-weight:700}.sms-part .section-name .r .rest[data-v-12a9bb60]{margin-right:10px}.sms-part .sms-table[data-v-12a9bb60]{padding:10px;padding-top:0}.input-s[data-v-12a9bb60]{border:none;width:100%}.required[data-v-12a9bb60]:after{margin-left:2px;display:inline-block;content:\"*\";color:#ff1e24;vertical-align:-2px}.van-pop-task-edit .sms-dlg-form[data-v-12a9bb60]{padding:10px 20px}.van-pop-task-edit .sms-dlg-form .form-li[data-v-12a9bb60]{width:100%;padding:14px 0;justify-content:space-between;align-items:center}.van-pop-task-edit .sms-dlg-form .form-li .label[data-v-12a9bb60]{width:110px}.van-pop-task-edit .sms-dlg-form .form-li .value[data-v-12a9bb60],.van-pop-task-edit .sms-dlg-form .form-li .value[data-v-12a9bb60] .qd-select .select-list{flex:1}.van-pop-task-edit .sms-dlg-form .form-li .value .ul-li-fl[data-v-12a9bb60]{display:flex;justify-content:space-between}.van-pop-task-edit .sms-dlg-form .form-li .value .ul-li-fl li[data-v-12a9bb60]{text-align:center}.van-pop-task-edit .sms-dlg-form .form-li .value .ul-li-fl .wave[data-v-12a9bb60]{padding:0 2px;flex:0}.van-pop-task-edit .sms-dlg-form .form-li .sms-receiver[data-v-12a9bb60]{width:100%;justify-content:space-between;align-items:center}.van-pop-task-edit .sms-dlg-form .form-li .rcv-tips[data-v-12a9bb60]{width:100%;margin-top:10px;padding:10px 10px 10px 25px;background:#f4f4f4;border-radius:5px}.van-pop-task-edit .sms-dlg-form .form-li .send-time[data-v-12a9bb60]{justify-content:start}.van-pop-task-edit .sms-dlg-form .form-li .send-time .row-l-r[data-v-12a9bb60]:first-child{margin-right:20px}.van-pop-task-edit .sms-dlg-form .sms-content[data-v-12a9bb60]{flex-direction:column;align-items:flex-start}.van-pop-task-edit .sms-dlg-form .sms-content .input-textarea[data-v-12a9bb60]{width:100%}.van-pop-task-edit .sms-dlg-form .sms-content .input-textarea textarea[data-v-12a9bb60]{width:100%;max-width:100%;min-width:100%;margin-top:10px}.van-pop-task-edit .sms-dlg-form .sms-content .sms-content-help[data-v-12a9bb60]{width:100%;display:flex;justify-content:space-between;align-items:center}.van-pop-task-edit .footer-btns[data-v-12a9bb60]{margin:20px 16px 0;padding-bottom:70px}.van-pop-task-edit .footer-btns .submit-bnt[data-v-12a9bb60]{text-align:center;padding:10px;border-radius:4px}.cnt-tips[data-v-12a9bb60]{padding:10px 10px 10px 20px;background:#f5f5f5;border:1px dashed #ff4500;margin:5px 0 0;font-size:12px}.cnt-tips .theme-border-bottom[data-v-12a9bb60]{padding-bottom:10px;margin-bottom:10px;border-bottom:1px solid #ccc}.cnt-tips ol[data-v-12a9bb60]{list-style-type:decimal}.cnt-tips .more-tips[data-v-12a9bb60],.cnt-tips ol li[data-v-12a9bb60]{font-size:12px}.van-pop-task-edit .sms-dlg-form .form-li .rcv-tips li[data-v-12a9bb60]{list-style:disc;line-height:180%;padding-bottom:5px;font-size:12px}.van-pop-sign-edit[data-v-12a9bb60]{margin:0;padding:0;border-radius:0}.van-pop-sign-edit .sign-name[data-v-12a9bb60]{padding:10px;padding-top:20px;text-align:center;font-weight:700;font-size:15px}.van-pop-sign-edit .sign-form[data-v-12a9bb60]{padding:20px;padding-top:10px}.van-pop-sign-edit .sign-form .sign-li[data-v-12a9bb60]{padding:10px;background:#eee}.van-pop-sign-edit .sign-form .sign-li .label[data-v-12a9bb60]{width:70px}.van-pop-sign-edit .sign-form .sign-li .value[data-v-12a9bb60]{flex:1}.van-pop-sign-edit .sign-form .sign-btns[data-v-12a9bb60]{border-radius:2px}.van-pop-sign-edit .sign-form .sign-btns div[data-v-12a9bb60]{flex:1;text-align:center;padding:10px}.sign-remark[data-v-12a9bb60]{background:#eee;margin:20px 0;padding:10px;font-size:12px}.theme-black .van-pop-task-edit .sms-dlg-form .form-li .rcv-tips[data-v-12a9bb60]{background:#212121}.theme-black .van-pop-task-edit .sms-dlg-form .form-li .rcv-tips li[data-v-12a9bb60]{list-style:disc;line-height:180%;padding-bottom:5px;font-size:12px}.theme-black .cnt-tips[data-v-12a9bb60]{background:#212121}.theme-black .cnt-tips .theme-border-bottom[data-v-12a9bb60]{border-bottom:1px solid #111}.theme-black .van-pop-sign-edit[data-v-12a9bb60]{background:#2c2c2c!important}.theme-black .van-pop-sign-edit .sign-form .sign-li[data-v-12a9bb60],.theme-black .van-pop-sign-edit .sign-form .sign-remark[data-v-12a9bb60]{background:#212121}", ""]);

// exports


/***/ }),

/***/ 1783:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".ai-mach-conf .set-btns[data-v-97219d0c]{padding:0 10px;text-align:right}.ai-mach-conf .set-btns .section-part[data-v-97219d0c]{margin-right:0;margin-left:0;flex:1}.ai-mach-conf .set-btns .section-part[data-v-97219d0c]:nth-of-type(2){margin:10px}.ai-mach-conf .set-btns .add-mach[data-v-97219d0c]{padding:10px;text-align:center;font-size:16px;display:flex}.ai-mach-conf .set-btns .btn[data-v-97219d0c]{flex:1;height:38px;line-height:38px;border-left:none;padding:1px}.ai-mach-conf .set-btns .btn span[data-v-97219d0c]{width:100%;height:100%;display:block;background:#fff;border-radius:4px}.ai-mach-conf .set-btns .btn[data-v-97219d0c]:nth-of-type(2){margin-left:10px}.ai-mach-conf .ai-mach-list .ai-mach-li[data-v-97219d0c]{padding:15px}.ai-mach-conf .ai-mach-list .ai-mach-li .title[data-v-97219d0c]{font-size:15px;font-weight:700}.ai-mach-conf .ai-mach-list .ai-mach-li .a-m-item[data-v-97219d0c]{display:flex;justify-content:space-between;margin-bottom:8px}.ai-mach-conf .ai-mach-list .ai-mach-li .a-m-item .label[data-v-97219d0c]{width:80px}.ai-mach-conf .ai-mach-list .ai-mach-li .btns[data-v-97219d0c]{padding-top:10px;margin-top:10px;margin-bottom:0}.ai-mach-conf .ai-mach-list .ai-mach-li .btns .opt-list[data-v-97219d0c]{width:100%;display:flex;justify-content:flex-end}.ai-mach-conf .ai-mach-list .ai-mach-li .btns .opt-list a[data-v-97219d0c]{margin-left:16px}.ai-mach-conf .required[data-v-97219d0c]:after{margin-left:2px;display:inline-block;content:\"*\";color:#ff1e24;vertical-align:-2px}.ai-mach-conf .bathroom-dlg[data-v-97219d0c],.ai-mach-conf .face-unbind-dlg[data-v-97219d0c],.ai-mach-conf .mach-conf-dlg[data-v-97219d0c]{border-radius:4px}.ai-mach-conf .edit-mach-popup[data-v-97219d0c]{background:#f1f1f1;padding-bottom:50px}.ai-mach-conf .edit-mach-popup .orange[data-v-97219d0c]{color:orange}.ai-mach-conf .edit-mach-popup .right[data-v-97219d0c]{text-align:right}.ai-mach-conf .edit-mach-popup .input-s[data-v-97219d0c]{border:none;width:100%;text-align:right;width:80%;margin-right:5px}.ai-mach-conf .edit-mach-popup .more-entry-conf[data-v-97219d0c]{font-size:12px;width:100%;background:#f6f6f6;padding:10px;margin-top:10px;line-height:30px}.ai-mach-conf .edit-mach-popup .more-entry-conf input[data-v-97219d0c]{width:34px;text-align:center;border:0;border-bottom:1px solid #888;border-radius:0;outline:none;padding:2px 0;height:25px;font-weight:700;font-size:13px}.li-checkbox[data-v-97219d0c]{line-height:26px}.li-checkbox[data-v-97219d0c] .checkbox{display:flex;align-items:center;justify-content:flex-end;font-size:12px}.li-checkbox[data-v-97219d0c] .checkbox i{padding-left:4px}.section-part .hd[data-v-97219d0c]{font-size:15px}.section-part .hd .theme-btn-bg[data-v-97219d0c]{display:inline-block;height:15px;width:4px;margin:0 8px -2px 0;border-radius:4px}.ai-mach-conf-form .section[data-v-97219d0c],.set-card-content .section[data-v-97219d0c]{padding:0;margin:0;border-radius:0;margin-bottom:15px}.ai-mach-conf-form .section .title[data-v-97219d0c],.set-card-content .section .title[data-v-97219d0c]{font-weight:700;font-size:16px;text-align:center}.ai-mach-conf-form .section .info-from .label[data-v-97219d0c],.set-card-content .section .info-from .label[data-v-97219d0c]{width:120px}.ai-mach-conf-form .section .info-from .value[data-v-97219d0c],.set-card-content .section .info-from .value[data-v-97219d0c]{flex:1}.ai-mach-conf-form .section .info-from .value .radio[data-v-97219d0c],.set-card-content .section .info-from .value .radio[data-v-97219d0c]{display:flex;justify-content:flex-end}.ai-mach-conf-form .section .info-from .value .radio li[data-v-97219d0c],.set-card-content .section .info-from .value .radio li[data-v-97219d0c]{display:flex;align-items:center;justify-content:flex-end;width:60px}.ai-mach-conf-form .section .info-from .value .radio li .icon-radio[data-v-97219d0c],.set-card-content .section .info-from .value .radio li .icon-radio[data-v-97219d0c]{position:relative;margin-right:5px}.ai-mach-conf-form .section .info-from .value .radio li .icon-radio[data-v-97219d0c]:before,.set-card-content .section .info-from .value .radio li .icon-radio[data-v-97219d0c]:before{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);margin:0}.ai-mach-conf-form .section .info-from .info-li[data-v-97219d0c],.set-card-content .section .info-from .info-li[data-v-97219d0c]{padding:16px;line-height:24px}.ai-mach-conf-form .section .info-from .info-li[data-v-97219d0c]:last-of-type,.set-card-content .section .info-from .info-li[data-v-97219d0c]:last-of-type{border:none}.ai-mach-conf-form .section .info-from .info-li .set-more[data-v-97219d0c],.set-card-content .section .info-from .info-li .set-more[data-v-97219d0c]{text-align:left}.ai-mach-conf-form .section .info-from .info-li .checking-time .input-s[data-v-97219d0c],.set-card-content .section .info-from .info-li .checking-time .input-s[data-v-97219d0c]{width:30px;text-align:center;border-bottom:1px solid #888;margin:0 4px}.ai-mach-conf-form .section .info-from .info-li .bathroom-num input[data-v-97219d0c],.set-card-content .section .info-from .info-li .bathroom-num input[data-v-97219d0c]{width:60px;text-align:center;display:inline-block;padding:4px 7px;font-size:12px;border:1px solid #dddee1;border-radius:4px;color:#495060;background-color:#fff;cursor:text;margin:0 0 4px 4px}.ai-mach-conf-form .section .info-from .remark[data-v-97219d0c],.set-card-content .section .info-from .remark[data-v-97219d0c]{flex-direction:column}.ai-mach-conf-form .section .info-from .remark .value[data-v-97219d0c],.set-card-content .section .info-from .remark .value[data-v-97219d0c]{width:100%;margin-top:10px}.ai-mach-conf-form .section .info-from .remark .value textarea[data-v-97219d0c],.set-card-content .section .info-from .remark .value textarea[data-v-97219d0c]{width:100%;max-width:100%}.ai-mach-conf-form .card-part .info-from .info-li[data-v-97219d0c]:first-of-type,.set-card-content .card-part .info-from .info-li[data-v-97219d0c]:first-of-type{padding-bottom:0}.bathroom-dlg[data-v-97219d0c]{background:#f1f1f1}.bathroom-dlg .bathroom-content ul li[data-v-97219d0c]{padding:10px}.bathroom-dlg[data-v-97219d0c] .none{margin:20px}[data-v-97219d0c].qd-select .qd-select-item{text-align:left}[data-v-97219d0c].qd-select .select-list{flex:1;flex-direction:row-reverse}[data-v-97219d0c].qd-select .select-list .font-color-c{width:100%;padding-right:10px;text-align:right}.notice[data-v-97219d0c]{margin-top:10px;padding:4px 6px;background:#f6f6f6;border-radius:4px;font-size:12px}.notice .iconfont[data-v-97219d0c]{font-size:14px}.phone-no[data-v-97219d0c]{font-size:16px;font-weight:700;width:200px}.warning[data-v-97219d0c]{color:#ff4500;font-size:12px;padding:10px 16px;background:#fcfcbf;margin:10px;border-radius:4px}.card-table[data-v-97219d0c]{padding-bottom:10px}.card-table[data-v-97219d0c] .qd-table .none{margin:20px 0}.right[data-v-97219d0c]{text-align:right}.f12[data-v-97219d0c]{font-size:12px}.set-card-dlg[data-v-97219d0c]{background:#f6f6f6}.set-card-dlg .row[data-v-97219d0c]{align-items:center}.set-card-dlg .set-card-content .label[data-v-97219d0c]{width:100px}.set-card-dlg .set-card-content .section .info-from .value .radio li[data-v-97219d0c]{width:50%}.set-card-dlg .set-card-content .section .info-from .value .input-s[data-v-97219d0c]{border:none;width:100%;text-align:right;flex:1}.set-card-dlg .set-card-content .section .info-from .value .charge-by-hour-conf[data-v-97219d0c]{margin-top:10px;border:1px dashed #ddd;padding:10px;text-align:left}.set-card-dlg .set-card-content .section .info-from .value .charge-by-hour-conf ul[data-v-97219d0c]{margin-top:5px}.set-card-dlg .set-card-content .section .info-from .value .charge-by-hour-conf ul li[data-v-97219d0c]{display:block;padding:5px 0;font-size:12px;padding-top:0}.set-card-dlg .set-card-content .section .info-from .value .charge-by-hour-conf .input-s[data-v-97219d0c]{width:50px;border:1px solid #dddee1;text-align:center}.set-card-dlg .set-card-content .section .info-from .value .more-chare-conf[data-v-97219d0c]{background:#f5f5f5;margin:10px 0 0;padding:10px;text-align:left;font-size:12px}.set-card-dlg .set-card-content .section .info-from .value .more-chare-conf .input-s[data-v-97219d0c]{width:50px;border-bottom:1px solid #888;text-align:center}.mb-5[data-v-97219d0c]{margin-bottom:5px}.btns .submit[data-v-97219d0c]{height:38px;line-height:38px;margin:0 auto;border-radius:6px;text-align:center}.btns .center[data-v-97219d0c]{display:block;padding-bottom:50px;text-align:center}.iconTips[data-v-97219d0c]{vertical-align:bottom;margin-left:2px}.mach-arg-conf[data-v-97219d0c]{margin:10px}.mach-arg-conf .input[data-v-97219d0c]{width:70px;text-align:center}.mach-arg-conf div[data-v-97219d0c]{font-size:12px}.mach-arg-conf li[data-v-97219d0c]{padding:15px;border:1px solid #efefef;margin-bottom:15px;border-radius:0;box-shadow:none}.mach-arg-conf li .input[data-v-97219d0c]{border:0;border-bottom:1px solid #ddd;text-align:center;font-weight:700;height:22px;font-size:13px;width:40px;margin:0 5px;outline:none}.mach-arg-conf li .more[data-v-97219d0c]{background:#f6f6f6;padding:10px;margin:10px 0;line-height:26px}.mach-arg-conf li .btn[data-v-97219d0c]{padding:10px;margin-top:10px}.mach-arg-conf li .row[data-v-97219d0c]{justify-content:start}.mach-arg-conf li .row .checkbox[data-v-97219d0c]{margin-right:4px}.more-checkbox[data-v-97219d0c]{width:100%;padding:10px;margin-top:10px;background:#f6f6f6;border-radius:4px}.more-checkbox div[data-v-97219d0c]{font-size:12px}.more-checkbox .radio li[data-v-97219d0c]{display:flex;align-items:center;margin-left:10px;font-size:12px}.more-checkbox .radio li .iconfont[data-v-97219d0c]{margin-right:4px}.face-unbind-dlg .mach-conf-content[data-v-97219d0c]{padding:10px;padding-bottom:16px}.face-unbind-dlg .mach-conf-content .row[data-v-97219d0c]{justify-content:start;align-items:center;flex-wrap:nowrap}.face-unbind-dlg .mach-conf-content .notice[data-v-97219d0c]{margin-bottom:10px;margin-top:0;color:orange}.face-unbind-dlg .mach-conf-content .phone-no[data-v-97219d0c]{border:0;background:#f6f6f6;padding:5px 10px;margin-right:10px}.face-unbind-dlg .mach-conf-content .middle[data-v-97219d0c]{width:100%}.face-unbind-dlg .mach-conf-content .orangered[data-v-97219d0c]{display:block;background:#fafafa;padding:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.footer-btns[data-v-97219d0c]{padding:0;margin:0;box-shadow:none;border-radius:0}.footer-btns .btn[data-v-97219d0c]{flex:1;padding:10px;border-radius:0;text-align:center}.footer-btns .btn[data-v-97219d0c]:active{opacity:.5}.footer-btns .close-btn[data-v-97219d0c]{border:none;border-radius:0;margin:0;padding:10px;background:#f6f6f6}.theme-black .section[data-v-97219d0c]{box-shadow:none}.theme-black .mach-arg-conf li[data-v-97219d0c]{border:none}.theme-black .ai-mach-conf .edit-mach-popup[data-v-97219d0c],.theme-black .ai-mach-conf .set-btns .btn span[data-v-97219d0c],.theme-black .bathroom-dlg[data-v-97219d0c],.theme-black .face-unbind-dlg[data-v-97219d0c],.theme-black .mach-conf-dlg[data-v-97219d0c],.theme-black .set-card-dlg[data-v-97219d0c],.theme-black[data-v-97219d0c] .edit-mach-popup .qd-table .qd-table-box{background:#111}.theme-black .close-btn[data-v-97219d0c],.theme-black .edit-mach-popup .more-entry-conf[data-v-97219d0c],.theme-black .face-unbind-dlg .mach-conf-content .notice[data-v-97219d0c],.theme-black .face-unbind-dlg .mach-conf-content .orangered[data-v-97219d0c],.theme-black .face-unbind-dlg .mach-conf-content .row input[data-v-97219d0c],.theme-black .info-li .notice[data-v-97219d0c],.theme-black .mach-conf-dlg .mach-arg-conf .more[data-v-97219d0c],.theme-black .more-checkbox[data-v-97219d0c],.theme-black .set-card-content .section .info-from .value .more-chare-conf[data-v-97219d0c]{background:#212121}.theme-black .mach-arg-conf li[data-v-97219d0c]{border-color:#d8d8d8}.theme-black .ai-mach-conf-form .section .info-from .info-li .bathroom-num input[data-v-97219d0c]{background:#212121;color:#d8d8d8}.theme-black .face-unbind-dlg .mach-conf-content .phone-no[data-v-97219d0c]{border:0}", ""]);

// exports


/***/ }),

/***/ 1864:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1597);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("bcce0eec", content, true, {});

/***/ }),

/***/ 2050:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1783);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("80a32114", content, true, {});

/***/ }),

/***/ 2261:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "sms-task",
    class: _vm.theme
  }, [_c('div', {
    staticClass: "page-head"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "tit"
  }, [_vm._v("短信群发")]), _vm._v(" "), _c('div', {
    staticClass: "move-right"
  }, [_c('a', {
    staticClass: "theme-font-color",
    on: {
      "click": function($event) {
        return _vm.$router.push('/shop-sms-log')
      }
    }
  }, [_vm._v("短信记录")])])]), _vm._v(" "), _c('section', {
    staticClass: "section-part cnts"
  }, [_c('div', {
    staticClass: "cnts-li theme-border-bottom"
  }, [_c('span', [_vm._v("共购买短信数： ")]), _vm._v(" "), _c('span', [_c('b', {
    staticClass: "green big"
  }, [_vm._v(_vm._s(_vm.smsCnts.buys || 0))]), _vm._v(" 条")])]), _vm._v(" "), _c('div', {
    staticClass: "cnts-li theme-border-bottom"
  }, [_c('span', [_vm._v("已发送短信数： ")]), _vm._v(" "), _c('span', [_c('b', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.smsCnts.sends || 0))]), _vm._v(" 条")])]), _vm._v(" "), _c('div', {
    staticClass: "cnts-li"
  }, [_c('span', [_vm._v("剩余短信数： ")]), _vm._v(" "), _c('span', [_c('b', {
    staticClass: "orangered big"
  }, [_vm._v(_vm._s(_vm.smsCnts.remnant || 0))]), _vm._v(" 条")])])]), _vm._v(" "), _c('section', {
    staticClass: "section-part sms-part"
  }, [_c('div', {
    staticClass: "section-name row"
  }, [_c('div', {
    staticClass: "l"
  }, [_vm._v("短信群发任务")]), _vm._v(" "), _c('div', {
    staticClass: "r row theme-font-color"
  }, [_c('div', {
    staticClass: "rest",
    on: {
      "click": function($event) {
        return _vm.querySmsTaskList(null, true)
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconshuaxin"
  }), _vm._v("刷新")]), _vm._v(" "), _c('div', {
    staticClass: "add",
    on: {
      "click": _vm.openCreateTaskDlg
    }
  }, [_c('i', {
    staticClass: "iconfont iconadd"
  }), _vm._v("新增")])])]), _vm._v(" "), _c('div', {
    staticClass: "sms-table"
  }, [_c('qd-table', {
    attrs: {
      "border": "",
      "stripe": "",
      "max-height": 450,
      "columns": _vm.taskColumns,
      "data": _vm.smsTaskList
    },
    scopedSlots: _vm._u([{
      key: "sendDate",
      fn: function(ref) {
        var row = ref.row;

        return [(row.sendDate) ? [_vm._v(_vm._s(_vm.g.Util.formatDate(row.sendDate)))] : _vm._e(), _vm._v("\n          " + _vm._s(new Date(row.sendTime).format('hh:mm:ss')) + "\n        ")]
      }
    }, {
      key: "sendStatus",
      fn: function(ref) {
        var row = ref.row;

        return [(row.sendStatus === 0) ? _c('span', [_vm._v("未提交")]) : (row.sendStatus === 1) ? _c('span', {
          staticClass: "green"
        }, [_vm._v("已提交")]) : _vm._e()]
      }
    }, {
      key: "cardName",
      fn: function(ref) {
        var row = ref.row;

        return [_vm._v("\n          " + _vm._s(_vm.g.Dict.SmsTaskReceiverTypes[row.receiverType]) + "\n          "), (row.receiverLimitCards) ? _c('ul', [_c('li', {
          staticClass: "orange p10"
        }, [_vm._v("限定会员卡：")]), _vm._v(" "), _vm._l((row.cardNameArr), function(cardName) {
          return _c('li', [_vm._v(_vm._s(cardName))])
        })], 2) : _vm._e(), _vm._v(" "), (row.memberRegDates) ? _c('ul', [_c('li', {
          staticClass: "orange p10"
        }, [_vm._v("会员注册日期：")]), _vm._v(" "), _c('li', [_vm._v(_vm._s(row.memberRegDates.split(',')[0]) + " ~ " + _vm._s(row.memberRegDates.split(',')[1]))])]) : _vm._e()]
      }
    }, {
      key: "signName",
      fn: function(ref) {
        var row = ref.row;

        return [(row.sendStatus === 1) ? [_vm._v(_vm._s(row.signName))] : [_vm._v(_vm._s(_vm.smsSignNameMap[row.signId]))]]
      }
    }, {
      key: "checkStatus",
      fn: function(ref) {
        var row = ref.row;

        return [(row.checkStatus === 0) ? _c('span', {
          staticClass: "darkred"
        }, [_vm._v("待审核")]) : (row.checkStatus === 1) ? _c('span', {
          staticClass: "orangered"
        }, [_vm._v("审核不通过： " + _vm._s(row.checkRemark))]) : (row.checkStatus === 2) ? _c('span', {
          staticClass: "green"
        }, [_vm._v("审核通过")]) : _vm._e()]
      }
    }, {
      key: "handler",
      fn: function(ref) {
        var row = ref.row;

        return [(row.checkStatus !== 2) ? [_c('a', {
          staticClass: "theme-font-color",
          on: {
            "click": function($event) {
              return _vm.editSmsTask(row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v("\n             \n            "), _c('a', {
          staticClass: "theme-font-color",
          on: {
            "click": function($event) {
              return _vm.delSmsTask(row.stId)
            }
          }
        }, [_vm._v("删除")])] : _vm._e()]
      }
    }])
  })], 1)]), _vm._v(" "), _c('section', {
    staticClass: "section-part sms-part"
  }, [_c('div', {
    staticClass: "section-name row"
  }, [_c('div', {
    staticClass: "l"
  }, [_vm._v("短信签名")]), _vm._v(" "), _c('div', {
    staticClass: "r row theme-font-color"
  }, [_c('div', {
    staticClass: "rest",
    on: {
      "click": function($event) {
        return _vm.querySmsSignList(true)
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconshuaxin"
  }), _vm._v("刷新")]), _vm._v(" "), _c('div', {
    staticClass: "add"
  }, [_c('i', {
    staticClass: "iconfont iconadd",
    on: {
      "click": _vm.openCreateSignDlg
    }
  }), _vm._v("新增")])])]), _vm._v(" "), _c('div', {
    staticClass: "sms-table"
  }, [_c('qd-table', {
    attrs: {
      "border": "",
      "stripe": "",
      "max-height": 450,
      "columns": _vm.signColumns,
      "data": _vm.smsSignList
    },
    scopedSlots: _vm._u([{
      key: "checkStatus",
      fn: function(ref) {
        var row = ref.row;

        return [(row.checkStatus === 0) ? _c('span', {
          staticClass: "darkred"
        }, [_vm._v("待审核")]) : (row.checkStatus === 1) ? _c('span', {
          staticClass: "orangered"
        }, [_vm._v("审核不通过： " + _vm._s(row.checkRemark))]) : (row.checkStatus === 2) ? _c('span', {
          staticClass: "green"
        }, [_vm._v("审核通过")]) : _vm._e()]
      }
    }, {
      key: "handler",
      fn: function(ref) {
        var row = ref.row;

        return [_c('a', {
          staticClass: "theme-font-color",
          on: {
            "click": function($event) {
              return _vm.openEditSignDlg(row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v("\n           \n          "), _c('a', {
          staticClass: "theme-font-color",
          on: {
            "click": function($event) {
              return _vm.delSmsSign(row.signId)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "section-part close-pl help"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "content-help"
  }, [_c('ol', [_vm._m(2), _vm._v(" "), _c('li', [_vm._v("短信群发的内容可自定义，但是我们需提交审核（"), _c('b', [_vm._v("约1~3日")]), _vm._v("），不符合"), _c('a', {
    attrs: {
      "target": "_blank",
      "href": _vm.g.Conf.IMG_LIB_URL + '/jzg-pc/sms-check.jpg'
    }
  }, [_vm._v("国家规定")]), _vm._v("的短信，将不会发送")]), _vm._v(" "), _c('li', [_vm._v("短信群发状态【未提交】表示还未提交给短信平台发送，【已提交】表示已经提交给短信平台按时发送，此时短信任务不能编辑或删除。")]), _vm._v(" "), _c('li', [_vm._v("对于营销类短信（具体由短信平台决定），短信运营商强制在短信末尾自动加“拒收请回复R”（占4个字），这也算在短信字数内；")]), _vm._v(" "), _vm._m(3)])])]), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "menu": "sms-task"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "vant"
  }, [_c('van-popup', {
    staticClass: "van-pop-task-edit",
    style: ({
      height: '100%',
      width: '100%'
    }),
    attrs: {
      "position": "right"
    },
    on: {
      "close": function($event) {
        _vm.taskDlg = false
      }
    },
    model: {
      value: (_vm.taskDlg),
      callback: function($$v) {
        _vm.taskDlg = $$v
      },
      expression: "taskDlg"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move",
    on: {
      "click": function($event) {
        _vm.taskDlg = false
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })]), _vm._v(" "), _c('div', {
    staticClass: "tit"
  }, [_vm._v("短信群发任务")])]), _vm._v(" "), _c('div', {
    staticClass: "sms-dlg-form section-part"
  }, [_c('div', {
    staticClass: "form-li row theme-border-bottom"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("任务名称")]), _vm._v(" "), _c('div', {
    staticClass: "value"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.smsTask.taskName),
      expression: "smsTask.taskName"
    }],
    staticClass: "input-s",
    attrs: {
      "type": "text",
      "placeholder": "请输入任务名称"
    },
    domProps: {
      "value": (_vm.smsTask.taskName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.smsTask, "taskName", $event.target.value)
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-li row theme-border-bottom"
  }, [_c('div', {
    staticClass: "label required"
  }, [_vm._v("短信签名")]), _vm._v(" "), _c('div', {
    staticClass: "value"
  }, [_c('qd-select', {
    attrs: {
      "filterable": "",
      "title": "短信签名",
      "placeholder": "选择短信签名"
    },
    on: {
      "on-change": _vm.changeSmsSign
    },
    model: {
      value: (_vm.smsTask.signId),
      callback: function($$v) {
        _vm.$set(_vm.smsTask, "signId", $$v)
      },
      expression: "smsTask.signId"
    }
  }, [_vm._l((_vm.smsSignList), function(s) {
    return [(s.checkStatus === 2) ? _c('qd-option', {
      key: s.signId,
      attrs: {
        "value": s.signId
      }
    }, [_vm._v(_vm._s(s.signName))]) : _vm._e()]
  })], 2)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-li row theme-border-bottom"
  }, [_c('div', {
    staticClass: "label required"
  }, [_vm._v("计划发送时间")]), _vm._v(" "), _c('div', {
    staticClass: "value row send-time"
  }, [_c('div', {
    staticClass: "row row-l-r",
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.showInputSendDlg('date')
      }
    }
  }, [(_vm.smsTask.sendDate) ? [_c('span', [_vm._v(_vm._s(_vm.smsTask.sendDate))])] : [_c('span', {
    staticClass: "font-color-c"
  }, [_vm._v("请选择日期")])], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c"
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "row row-l-r",
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.showInputSendDlg('time')
      }
    }
  }, [(_vm.smsTask.sendTime) ? [_c('span', [_vm._v(_vm._s(_vm.smsTask.sendTime))])] : [_c('span', {
    staticClass: "font-color-c"
  }, [_vm._v("请选择时间")])], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c"
  })], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "form-li row theme-border-bottom"
  }, [_c('div', {
    staticClass: "row sms-receiver"
  }, [_c('div', {
    staticClass: "label required"
  }, [_vm._v("短信发送对象")]), _vm._v(" "), _c('div', {
    staticClass: "value"
  }, [_c('qd-select', {
    attrs: {
      "title": "发送对象",
      "placeholder": "选择短信发送对象"
    },
    model: {
      value: (_vm.smsTask.receiverType),
      callback: function($$v) {
        _vm.$set(_vm.smsTask, "receiverType", _vm._n($$v))
      },
      expression: "smsTask.receiverType"
    }
  }, _vm._l((_vm.receiverType), function(name, idx) {
    return _c('qd-option', {
      key: idx,
      attrs: {
        "value": idx
      }
    }, [_vm._v(_vm._s(name))])
  }), 1)], 1)]), _vm._v(" "), _c('ul', {
    staticClass: "rcv-tips"
  }, [_c('li', [_vm._v("有效会员是指，会员至少有一张有效的会员卡")]), _vm._v(" "), _c('li', [_vm._v("无效会员是指，会员的所有会员卡都过期或无剩余额")]), _vm._v(" "), _c('li', [_vm._v("私教会员是指，办理了私教类别的会员卡的会员")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-li row theme-border-bottom"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("限定会员卡")]), _vm._v(" "), _c('div', {
    staticClass: "value"
  }, [_c('qd-select', {
    attrs: {
      "title": "会员卡",
      "clearable": "",
      "multiple": true,
      "filterable": "",
      "placeholder": "只发送给拥有选定会员卡的会员"
    },
    model: {
      value: (_vm.receiverLimitCardArr),
      callback: function($$v) {
        _vm.receiverLimitCardArr = $$v
      },
      expression: "receiverLimitCardArr"
    }
  }, _vm._l((_vm.cardList), function(c) {
    return _c('qd-option', {
      key: c.cardId,
      attrs: {
        "value": c.cardId
      }
    }, [_vm._v(_vm._s(c.cardName))])
  }), 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-li row theme-border-bottom"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("会员注册日期")]), _vm._v(" "), _c('div', {
    staticClass: "value"
  }, [_c('ul', {
    staticClass: "ul-li-fl date-picker"
  }, [_c('li', [_c('div', {
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.showInputDlg('beginDate', _vm.memberRegBeginDate)
      }
    }
  }, [(_vm.memberRegBeginDate) ? [_c('span', {
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v(_vm._s(_vm.memberRegBeginDate))]), _vm._v(" "), _c('i', {
    staticClass: "iconfont iconfork font-color-c",
    staticStyle: {
      "margin": "2px 4px 0 4px",
      "font-size": "12px"
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.clearDate(0)
      }
    }
  })] : [_c('span', {
    staticClass: "font-color-9",
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v("开始日期")])], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c",
    staticStyle: {
      "margin-top": "2px",
      "font-size": "12px"
    }
  })], 2)]), _vm._v(" "), _c('li', {
    staticClass: "wave"
  }, [_vm._v("~")]), _vm._v(" "), _c('li', [_c('div', {
    staticStyle: {
      "padding": "0"
    },
    on: {
      "click": function($event) {
        return _vm.showInputDlg('endDate', _vm.memberRegEndDate)
      }
    }
  }, [(_vm.memberRegEndDate) ? [_c('span', {
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v(_vm._s(_vm.memberRegEndDate))]), _vm._v(" "), _c('i', {
    staticClass: "iconfont iconfork font-color-c",
    staticStyle: {
      "margin": "2px 4px 0 4px",
      "font-size": "12px"
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.clearDate(1)
      }
    }
  })] : [_c('span', {
    staticClass: "font-color-9",
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v("结束日期")])], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c",
    staticStyle: {
      "margin-top": "2px",
      "font-size": "12px"
    }
  })], 2)])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-li row sms-content"
  }, [_c('div', {
    staticClass: "label required"
  }, [_vm._v("短信内容")]), _vm._v(" "), _c('div', {
    staticClass: "value input-textarea"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.smsTask.content),
      expression: "smsTask.content",
      modifiers: {
        "trim": true
      }
    }],
    attrs: {
      "placeholder": "短信内容不能换行，短信最多字数为400字。",
      "rows": 6,
      "disabled": _vm.smsTask.checkStatus === 2
    },
    domProps: {
      "value": (_vm.smsTask.content)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.smsTask, "content", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "sms-content-help row",
    staticStyle: {
      "line-height": "40px",
      "height": "40px"
    }
  }, [_c('div', {
    staticClass: "l orangered",
    staticStyle: {
      "fontSize": "12px"
    }
  }, [_c('i', {
    staticClass: "iconfont iconTips"
  }), _vm._v("\n              短信内容不能换行，短信最多字数为400字。\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "r gray"
  }, [(_vm.smsTask.content) ? [_vm._v(_vm._s(_vm.smsTask.content.length) + " 字")] : _vm._e()], 2)]), _vm._v(" "), _c('div', {
    staticClass: "cnt-tips"
  }, [_c('div', {
    staticClass: "theme-border-bottom"
  }, [_c('b', [_vm._v("短信字数计算：")]), _vm._v(" "), _c('ol', {
    staticClass: "p10"
  }, [_c('li', [_vm._v("短信签名：系统自动添加，包括前后的“【”和“】”， 占 " + _vm._s(2 + _vm.smgSignName.length) + " 个字")]), _vm._v(" "), _c('li', [_vm._v("短信内容：占 " + _vm._s(_vm.smsTask.content.length) + " 个字")]), _vm._v(" "), _c('li', [_vm._v("拒收请回复R：系统自动添加，占 6 个字")])]), _vm._v(" "), _c('div', {
    staticClass: "p10"
  }, [_vm._v("\n                共占 "), _c('b', [_vm._v(_vm._s(8 + _vm.smgSignName.length + _vm.smsTask.content.length))]), _vm._v(" 个字\n              ")])]), _vm._v(" "), _c('div', {
    staticClass: "more-tips theme-border-bottom"
  }, [_c('b', [_vm._v("短信计费规则：")]), _vm._v(" "), _c('ol', {
    staticClass: "p10"
  }, [_c('li', [_vm._v("总字数不超过70字，按1条短信计费")]), _vm._v(" "), _c('li', [_vm._v("总字数超过70字，按67字/条计费")]), _vm._v(" "), _c('li', [_vm._v("短信字数包括中文、英文、数字、空格、各种符号等")])])]), _vm._v(" "), _c('div', {
    staticClass: "more-tips orangered"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor big"
  }), _vm._v(" 提交前，请确保此次群发的短信总数大于剩余短信数，否则不予提交。\n            ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "footer-btns"
  }, [_c('div', {
    staticClass: "submit-bnt theme-btn-bg",
    on: {
      "click": _vm.saveSmsTask
    }
  }, [_vm._v("提交")])])]), _vm._v(" "), _c('van-popup', {
    staticClass: "van-pop-sign-edit section-part",
    style: ({
      width: '90%'
    }),
    on: {
      "close": function($event) {
        _vm.signDlg = false
      }
    },
    model: {
      value: (_vm.signDlg),
      callback: function($$v) {
        _vm.signDlg = $$v
      },
      expression: "signDlg"
    }
  }, [_c('div', {
    staticClass: "sign-name"
  }, [_vm._v("短信签名")]), _vm._v(" "), _c('div', {
    staticClass: "sign-form"
  }, [_c('div', {
    staticClass: "sign-li row"
  }, [_c('div', {
    staticClass: "label required"
  }, [_vm._v("短信签名")]), _vm._v(" "), _c('div', {
    staticClass: "value"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.signName),
      expression: "signName",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "input-s",
    attrs: {
      "placeholder": "请输入合法的短信签名",
      "type": "text"
    },
    domProps: {
      "value": (_vm.signName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.signName = $event.target.value.trim()
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "sign-remark"
  }, [_c('b', {
    staticClass: "orangered"
  }, [_vm._v("运营商与短信平台对短信签名的规定：")]), _vm._v(" "), _c('p'), _vm._v("3~8个汉字或字母，不支持其它符号（含空格），且必须与本场馆名称、品牌名或营业执照名称相关，否则不予审核通过。\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "sign-btns row theme-btn-bor"
  }, [_c('div', {
    staticClass: "sign-submit theme-btn-bg",
    on: {
      "click": _vm.saveSmsSign
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('div', {
    staticClass: "theme-font-color",
    on: {
      "click": function($event) {
        _vm.signDlg = false
      }
    }
  }, [_vm._v("关闭")])])])])], 1), _vm._v(" "), _c('van-action-sheet', {
    attrs: {
      "close-on-click-overlay": false
    },
    model: {
      value: (_vm.inputShow),
      callback: function($$v) {
        _vm.inputShow = $$v
      },
      expression: "inputShow"
    }
  }, [_c('van-datetime-picker', {
    attrs: {
      "type": _vm.datePicker,
      "title": _vm.datePicker == 'date' ? '选择日期' : '选择时间',
      "min-date": _vm.minDate,
      "min-hour": 9,
      "max-hour": 18,
      "confirm-button-text": "完成"
    },
    on: {
      "confirm": _vm.confirmDatePikerSend,
      "cancel": function($event) {
        _vm.inputShow = false
      }
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  })], 1), _vm._v(" "), (_vm.createMemberDateShow) ? _c('van-action-sheet', {
    attrs: {
      "close-on-click-overlay": false
    },
    model: {
      value: (_vm.createMemberDateShow),
      callback: function($$v) {
        _vm.createMemberDateShow = $$v
      },
      expression: "createMemberDateShow"
    }
  }, [_c('Calendar', {
    ref: "calendar",
    attrs: {
      "has-marked-prop": _vm.checkinDateId,
      "max-date": {
        year: _vm.year,
        month: _vm.month
      },
      "min-date": {
        year: _vm.year - 10,
        month: _vm.month
      },
      "cantPullProp": false,
      "presentDate": _vm.currentDate
    },
    on: {
      "queryMonth": function($event) {
        return _vm.queryMonth(arguments)
      },
      "querySelectedDay": _vm.querySelectedDay
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "date-tool-comfirm"
  }, [_c('div', {
    staticClass: "row align-center"
  }, [_c('div', {
    staticClass: "lbtn font-color-9 theme-btn-bor",
    on: {
      "click": function($event) {
        _vm.createMemberDateShow = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('div', {
    staticClass: "lbtn theme-btn-bg",
    on: {
      "click": _vm.confirmDatePiker
    }
  }, [_vm._v("确定")])])])], 1) : _vm._e()], 1)
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
    staticClass: "title"
  }, [_c('i', {
    staticClass: "iconfont iconTips orange"
  }), _vm._v("\n      短信群发必读\n    ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_vm._v("短信群发可自定义短信签名（例如：【健总管】），但是我们需提交审核，不符合以下规定的，短信将不会发送\n          "), _c('div', {
    staticClass: "green"
  }, [_vm._v("运营商与短信平台对短信签名的规定：3~8个汉字或字母，必须与本场馆名称或营业执照名称相关，不得使用人名")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_vm._v("\n          短信内容（包含短信签名和前后括号）的计费条数规则（国家统一规定）：\n          "), _c('br'), _vm._v("\n          总字数不超过70字，按1条计费；超过70字，按67字/条计费；\n          包括中文、英文、数字、空格、各种符号等。总字数不能超过400字。\n        ")])
}]}

/***/ }),

/***/ 2445:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ai-mach-conf",
    class: _vm.theme
  }, [_vm._m(0), _vm._v(" "), (_vm.editable) ? _c('ul', {
    staticClass: "set-btns"
  }, [_c('li', {
    staticClass: "section section-part theme-font-color add-mach"
  }, [_c('div', {
    staticClass: "btn theme-font-color theme-btn-bg",
    on: {
      "click": function($event) {
        return _vm.openNewAiMach(null)
      }
    }
  }, [_c('span', [_vm._v("+添加设备")])]), _vm._v(" "), (_vm.enableQrcodeMach || _vm.enableEntryMach) ? _c('div', {
    staticClass: "btn theme-font-color theme-btn-bg",
    on: {
      "click": function($event) {
        _vm.qrcodeMachConfDlg = true
      }
    }
  }, [_c('span', [_vm._v("设备参数设置")])]) : _vm._e()])]) : _vm._e(), _vm._v(" "), (_vm.aiMachList && _vm.aiMachList.length) ? _c('ul', {
    staticClass: "ai-mach-list"
  }, [_vm._l((_vm.aiMachList), function(m, idx) {
    return [(m.machType < 9 || [11, 12, 14, 15, 16, 17, 18].contains(m.machType)) ? _c('li', {
      key: idx,
      staticClass: "section section-part ai-mach-li"
    }, [_c('div', {
      staticClass: "a-m-item title theme-font-color mb-5"
    }, [(_vm.editable) ? _c('span', {
      on: {
        "click": function($event) {
          return _vm.editAiMach(idx)
        }
      }
    }, [_vm._v(_vm._s(m.machName))]) : _c('span', [_vm._v(_vm._s(m.machName))])]), _vm._v(" "), _c('div', {
      staticClass: "a-m-item"
    }, [_c('div', {
      staticClass: "label"
    }, [_vm._v("设备编号")]), _vm._v(" "), _c('div', {
      staticClass: "value"
    }, [_vm._v(_vm._s(m.machNo))])]), _vm._v(" "), _c('div', {
      staticClass: "a-m-item"
    }, [_c('div', {
      staticClass: "label"
    }, [_vm._v("用途")]), _vm._v(" "), _c('div', {
      staticClass: "value"
    }, [_vm._v("\n            " + _vm._s(_vm.g.Dict.AiMachType[m.machType]) + "\n            "), (m.machType === 11) ? _c('div', [(m.bathroomType === 1) ? _c('span', {
      staticClass: "orange"
    }, [_vm._v("[女性专用]")]) : _vm._e(), _vm._v(" "), (m.bathroomType === 2) ? _c('span', {
      staticClass: "green"
    }, [_vm._v("[男性专用]")]) : _vm._e(), _vm._v(" "), (m.bathroomType === 3) ? _c('span', {
      staticClass: "gray"
    }, [_vm._v("[性别不限]")]) : _vm._e()]) : _vm._e()])]), _vm._v(" "), (m.machType < 4) ? _c('div', {
      staticClass: "a-m-item"
    }, [_c('div', {
      staticClass: "label"
    }, [_vm._v("会员卡计费")]), _vm._v(" "), _c('div', {
      staticClass: "value"
    }, [_c('a', {
      staticClass: "theme-font-color",
      on: {
        "click": function($event) {
          return _vm.editAiMach(idx)
        }
      }
    }, [_vm._v("点击查看")])])]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "a-m-item"
    }, [_c('div', {
      staticClass: "label"
    }, [_vm._v("更新时间")]), _vm._v(" "), _c('div', {
      staticClass: "value"
    }, [_vm._v(_vm._s(m.updateTime))])]), _vm._v(" "), (m.remark) ? _c('div', {
      staticClass: "a-m-item"
    }, [_c('div', {
      staticClass: "label"
    }, [_vm._v("备注")]), _vm._v(" "), _c('div', {
      staticClass: "value"
    }, [_vm._v(_vm._s(m.remark))])]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "a-m-item btns theme-border-top"
    }, [_c('ul', {
      staticClass: "opt-list"
    }, [(_vm.editable) ? _c('li', [_c('a', {
      staticClass: "theme-font-color",
      on: {
        "click": function($event) {
          return _vm.editAiMach(idx)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont iconedit-1"
    }), _vm._v("\n                编辑")])]) : _vm._e(), _vm._v(" "), (_vm.enableEntryMach) ? _c('li', [_c('a', {
      staticClass: "theme-font-color",
      on: {
        "click": function($event) {
          return _vm.openDoor(m.machNo)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont iconentry"
    }), _vm._v("开门")])]) : _vm._e(), _vm._v(" "), (_vm.editable) ? _c('li', [(m.machType !== 11) ? _c('a', {
      staticClass: "theme-font-color",
      attrs: {
        "title": "从门禁中解除指定人员的人脸绑定"
      },
      on: {
        "click": function($event) {
          return _vm.openFaceBindDelDlg(m.machNo)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont iconfeiqi"
    }), _vm._v("解除人脸")]) : (m.bathroomType === 0) ? _c('a', {
      staticClass: "theme-font-color",
      on: {
        "click": function($event) {
          return _vm.viewBathroomDetail(m.machNo)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont iconchakan"
    }), _vm._v("详细")]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.editable) ? _c('li', [_c('a', {
      staticClass: "theme-font-color",
      on: {
        "click": function($event) {
          return _vm.delAiMach(idx)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont icondelete"
    }), _vm._v("删除")])]) : _vm._e()])])]) : _vm._e()]
  })], 2) : _c('div', {
    staticClass: "center none"
  }, [_c('i', {
    staticClass: "icon-none iconfont"
  }), _vm._v("\n    暂无数据\n  ")]), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "menu": "ai-mach-conf"
    }
  }), _vm._v(" "), _c('van-popup', {
    staticClass: "edit-mach-popup",
    staticStyle: {
      "width": "100%",
      "height": "100%"
    },
    attrs: {
      "position": "right",
      "overlay": true
    },
    model: {
      value: (_vm.aiMachDlg),
      callback: function($$v) {
        _vm.aiMachDlg = $$v
      },
      expression: "aiMachDlg"
    }
  }, [_c('div', {
    staticClass: "ai-mach-conf-edit"
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move",
    on: {
      "click": function($event) {
        _vm.aiMachDlg = false
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })]), _vm._v(" "), _c('div', {
    staticClass: "tit"
  }, [_vm._v(_vm._s(_vm.editable && _vm.aiMach.machId ? "编辑" : "新建") + "智能门禁/前台机")]), _vm._v(" "), _c('div', {
    staticClass: "move-right"
  })]), _vm._v(" "), _c('div', {
    staticClass: "ai-mach-conf-form"
  }, [(_vm.editable && _vm.aiMach.machId) ? _c('div', {
    staticClass: "warning"
  }, [_c('i', {
    staticClass: "iconfont iconTips"
  }), _vm._v(" 修改【设备编号、用途、会员卡计费等】会立即影响到会员签到签出，请慎重修改！\n        ")]) : _vm._e(), _vm._v(" "), _c('section', {
    staticClass: "section section-part"
  }, [_c('div', {
    staticClass: "theme-border-bottom"
  }, [_c('div', {
    staticClass: "hd theme-padding"
  }, [_c('span', {
    staticClass: "theme-btn-bg"
  }), _vm._v("基本信息\n            ")])]), _vm._v(" "), _c('ul', {
    staticClass: "info-from"
  }, [_c('li', {
    staticClass: "info-li theme-border-bottom row"
  }, [_c('div', {
    staticClass: "label required"
  }, [_vm._v("设备名称")]), _vm._v(" "), _c('div', {
    staticClass: "value right"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.aiMach.machName),
      expression: "aiMach.machName"
    }],
    staticClass: "input-s",
    attrs: {
      "type": "text",
      "placeholder": "请输入设备名称"
    },
    domProps: {
      "value": (_vm.aiMach.machName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.aiMach, "machName", $event.target.value)
      }
    }
  })])]), _vm._v(" "), _c('li', {
    staticClass: "info-li theme-border-bottom row"
  }, [_c('div', {
    staticClass: "label required"
  }, [_vm._v("设备编号")]), _vm._v(" "), _c('div', {
    staticClass: "value right"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.aiMach.machNo),
      expression: "aiMach.machNo"
    }],
    staticClass: "input-s",
    attrs: {
      "type": "text",
      "placeholder": "请输入设备编号"
    },
    domProps: {
      "value": (_vm.aiMach.machNo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.aiMach, "machNo", $event.target.value)
      }
    }
  })])]), _vm._v(" "), _c('li', {
    staticClass: "info-li theme-border-bottom row"
  }, [_c('div', {
    staticClass: "label required"
  }, [_vm._v("用途"), (_vm.aiMach.machType == 12 || _vm.aiMach.machType == 14) ? _c('i', {
    staticClass: "iconfont iconTips orange",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.showTip(1)
      }
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "value right"
  }, [_c('qd-select', {
    staticClass: "input",
    attrs: {
      "filterable": "",
      "placeholder": "请选择用途",
      "clearable": ""
    },
    model: {
      value: (_vm.aiMach.machType),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "machType", $$v)
      },
      expression: "aiMach.machType"
    }
  }, [_c('qd-option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("入场签到")]), _vm._v(" "), _c('qd-option', {
    attrs: {
      "value": 2
    }
  }, [_vm._v("出场签出")]), _vm._v(" "), _c('qd-option', {
    attrs: {
      "value": 3
    }
  }, [_vm._v("入场签到 + 出场签出")]), _vm._v(" "), _c('qd-option', {
    attrs: {
      "value": 4
    }
  }, [_vm._v("团课签到")]), _vm._v(" "), (_vm.enableGlCheckout) ? _c('qd-option', {
    attrs: {
      "value": 15
    }
  }, [_vm._v("团课签出")]) : _vm._e(), _vm._v(" "), _c('qd-option', {
    attrs: {
      "value": 5
    }
  }, [_vm._v("私教课签到")]), _vm._v(" "), _c('qd-option', {
    attrs: {
      "value": 6
    }
  }, [_vm._v("团课签到 + 私教课签到")]), _vm._v(" "), _c('qd-option', {
    attrs: {
      "value": 12
    }
  }, [_vm._v("入场签到 + 私教课签到")]), _vm._v(" "), _c('qd-option', {
    attrs: {
      "value": 14
    }
  }, [_vm._v("入场签到 + 团课签到")]), _vm._v(" "), _c('qd-option', {
    attrs: {
      "value": 16
    }
  }, [_vm._v("场地预约签到")]), _vm._v(" "), _c('qd-option', {
    attrs: {
      "value": 17
    }
  }, [_vm._v("场地预约签出")]), _vm._v(" "), _c('qd-option', {
    attrs: {
      "value": 18
    }
  }, [_vm._v("团课签到 + 场地预约签到")]), _vm._v(" "), _c('qd-option', {
    attrs: {
      "value": 11
    }
  }, [_vm._v("淋浴室门禁")])], 1)], 1)]), _vm._v(" "), (_vm.aiMach.machType === 1 || _vm.aiMach.machType === 12 || _vm.aiMach.machType === 14) ? [_c('li', {
    staticClass: "info-li theme-border-bottom row"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("入场限制"), _c('i', {
    staticClass: "iconfont iconTips orange",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.showTip(2)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "value right"
  }, [_c('qd-select', {
    staticClass: "input",
    attrs: {
      "filterable": "",
      "placeholder": "请选择",
      "clearable": ""
    },
    model: {
      value: (_vm.aiMach.allowMoreEntry),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "allowMoreEntry", $$v)
      },
      expression: "aiMach.allowMoreEntry"
    }
  }, [_c('qd-option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("签到后允许多次入场")]), _vm._v(" "), _c('qd-option', {
    attrs: {
      "value": 0
    }
  }, [_vm._v("签到后只允许入场一次")])], 1)], 1)]), _vm._v(" "), (_vm.aiMach.allowMoreEntry) ? _c('li', {
    staticClass: "info-li theme-border-bottom"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("更多设置")]), _vm._v(" "), _c('div', {
    staticClass: "value right"
  }, [_c('div', {
    staticClass: "swicth",
    staticStyle: {
      "float": "right"
    }
  }, [_c('qd-switch', {
    model: {
      value: (_vm.showMoreEntryConf),
      callback: function($$v) {
        _vm.showMoreEntryConf = $$v
      },
      expression: "showMoreEntryConf"
    }
  })], 1)])]), _vm._v(" "), (_vm.aiMach.allowMoreEntry && _vm.showMoreEntryConf) ? _c('div', {
    staticClass: "more-entry-conf"
  }, [_vm._v("\n                  入场签到后 "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.aiMach.moreEntryLimitMin),
      expression: "aiMach.moreEntryLimitMin"
    }],
    staticClass: "input-s",
    attrs: {
      "min": 1
    },
    domProps: {
      "value": (_vm.aiMach.moreEntryLimitMin)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.aiMach, "moreEntryLimitMin", $event.target.value)
      }
    }
  }), _vm._v(" 分钟内会员可再入场 "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.aiMach.moreEntryLimitTimes),
      expression: "aiMach.moreEntryLimitTimes"
    }],
    staticClass: "input-s",
    attrs: {
      "min": 1
    },
    domProps: {
      "value": (_vm.aiMach.moreEntryLimitTimes)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.aiMach, "moreEntryLimitTimes", $event.target.value)
      }
    }
  }), _vm._v(" 次\n                  "), _c('div', {
    staticClass: "orange f12"
  }, [_vm._v("( 如不设置则不限制时间和次数 )")])]) : _vm._e()]) : _vm._e()] : _vm._e(), _vm._v(" "), (_vm.aiMach.machType === 1 || _vm.aiMach.machType === 3 || _vm.aiMach.machType === 12 || _vm.aiMach.machType === 14) ? _c('li', {
    staticClass: "info-li theme-border-bottom row"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("约课会员入场"), _c('i', {
    staticClass: "iconfont iconTips orange",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.showTip(3)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "value li-checkbox"
  }, [(_vm.aiMach.machType !== 12) ? _c('qd-checkbox', {
    attrs: {
      "label": "允许当天私教课预约会员入场"
    },
    model: {
      value: (_vm.aiMach.isOpenForPlBooking),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "isOpenForPlBooking", $$v)
      },
      expression: "aiMach.isOpenForPlBooking"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.aiMach.machType !== 14) ? _c('qd-checkbox', {
    attrs: {
      "label": "允许当天团课预约会员入场"
    },
    model: {
      value: (_vm.aiMach.isOpenForGlBooking),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "isOpenForGlBooking", $$v)
      },
      expression: "aiMach.isOpenForGlBooking"
    }
  }) : _vm._e()], 1)]) : _vm._e(), _vm._v(" "), (_vm.hasLocker && (_vm.aiMach.machType === 2 || _vm.aiMach.machType === 3)) ? _c('li', {
    staticClass: "info-li theme-border-bottom row"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("租柜检查"), _c('i', {
    staticClass: "iconfont iconTips orange",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.showTip(4)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "value right"
  }, [_c('div', {
    staticClass: "swicth",
    staticStyle: {
      "float": "right"
    }
  }, [_c('qd-switch', {
    model: {
      value: (_vm.aiMach.isCheckLocker),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "isCheckLocker", $$v)
      },
      expression: "aiMach.isCheckLocker"
    }
  })], 1)])]) : _vm._e(), _vm._v(" "), (_vm.aiMach.machType === 11) ? _c('li', {
    staticClass: "info-li theme-border-bottom row"
  }, [_c('div', {
    staticClass: "label required"
  }, [_vm._v("淋浴门禁类型")]), _vm._v(" "), _c('div', {
    staticClass: "value right"
  }, [_c('qd-select', {
    staticClass: "input",
    attrs: {
      "filterable": "",
      "placeholder": "请选择",
      "clearable": ""
    },
    model: {
      value: (_vm.aiMach.bathroomType),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "bathroomType", _vm._n($$v))
      },
      expression: "aiMach.bathroomType"
    }
  }, [_c('qd-option', {
    attrs: {
      "value": 0
    }
  }, [_vm._v("系统自动控制性别")]), _vm._v(" "), _c('qd-option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("女性专用")]), _vm._v(" "), _c('qd-option', {
    attrs: {
      "value": 2
    }
  }, [_vm._v("男性专用")]), _vm._v(" "), _c('qd-option', {
    attrs: {
      "value": 3
    }
  }, [_vm._v("性别不限")])], 1)], 1)]) : _vm._e(), _vm._v(" "), (_vm.aiMach.machType === 11 && _vm.aiMach.bathroomType === 0) ? _c('li', {
    staticClass: "info-li theme-border-bottom row"
  }, [_c('div', {
    staticClass: "label required"
  }, [_vm._v("淋浴间数量")]), _vm._v(" "), _c('div', {
    staticClass: "value right"
  }, [_c('input-int', {
    staticClass: "input-s",
    attrs: {
      "min": 0,
      "placeholder": "数量"
    },
    on: {
      "blur": _vm.changeBathroomNum
    },
    model: {
      value: (_vm.aiMach.bathroomNum),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "bathroomNum", _vm._n($$v))
      },
      expression: "aiMach.bathroomNum"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "gray"
  }, [_vm._v("间")])], 1)]) : _vm._e(), _vm._v(" "), (_vm.aiMach.machType === 11 && _vm.aiMach.bathroomNum && _vm.aiMach.bathroomType === 0) ? _c('li', {
    staticClass: "info-li theme-border-bottom row"
  }, [_c('div', {
    staticClass: "label required",
    staticStyle: {
      "width": "90px"
    }
  }, [_vm._v("淋浴间编号")]), _vm._v(" "), _c('div', {
    staticClass: "value right bathroom-num"
  }, [_vm._l((_vm.bathroomList), function(b, idx) {
    return [(idx < _vm.aiMach.bathroomNum) ? _c('input-num', {
      key: idx,
      staticClass: "input-s",
      attrs: {
        "placeholder": ("第" + (idx+1) + "间")
      },
      model: {
        value: (b.roomNo),
        callback: function($$v) {
          _vm.$set(b, "roomNo", _vm._n($$v))
        },
        expression: "b.roomNo"
      }
    }) : _vm._e()]
  })], 2)]) : _vm._e(), _vm._v(" "), (_vm.aiMach.machType === 16 || _vm.aiMach.machType === 17 || _vm.aiMach.machType === 18) ? _c('li', {
    staticClass: "info-li theme-border-bottom"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("适用场馆")]), _vm._v(" "), _c('div', {
    staticClass: "value right"
  }, [_c('qd-select', {
    staticClass: "input",
    attrs: {
      "filterable": "",
      "placeholder": "请选择适用场馆",
      "clearable": "",
      "multiple": ""
    },
    model: {
      value: (_vm.limitVenueIdArr),
      callback: function($$v) {
        _vm.limitVenueIdArr = _vm._n($$v)
      },
      expression: "limitVenueIdArr"
    }
  }, _vm._l((_vm.venueList), function(v) {
    return _c('qd-option', {
      key: v.venueId,
      attrs: {
        "value": v.venueId
      }
    }, [_vm._v("\n                      " + _vm._s(v.venueName) + "\n                    ")])
  }), 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "notice orangered"
  }, [_vm._v("\n                不填表示适用于所有场馆，否则只限制所选择的场馆使用\n              ")])]) : _vm._e(), _vm._v(" "), (_vm.aiMach.machType === 16 || _vm.aiMach.machType === 18) ? _c('li', {
    staticClass: "info-li theme-border-bottom"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("签到时间限制")]), _vm._v(" "), _c('div', {
    staticClass: "value right checking-time"
  }, [_vm._v("\n                  最多可提前 "), _c('input-int', {
    staticClass: "input-s",
    attrs: {
      "placeholder": ""
    },
    model: {
      value: (_vm.aiMach.venueCheckinTimeLimit),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "venueCheckinTimeLimit", $$v)
      },
      expression: "aiMach.venueCheckinTimeLimit"
    }
  }), _vm._v(" 分钟签到\n                ")], 1)]), _vm._v(" "), _c('div', {
    staticClass: "notice orangered"
  }, [_vm._v("\n                不填表示不限制签到时间\n              ")])]) : _vm._e(), _vm._v(" "), _c('li', {
    staticClass: "info-li remark"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("备注")]), _vm._v(" "), _c('div', {
    staticClass: "value right"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.aiMach.remark),
      expression: "aiMach.remark",
      modifiers: {
        "trim": true
      }
    }],
    staticStyle: {
      "padding": "8px"
    },
    attrs: {
      "placeholder": "请输入备注",
      "rows": "3"
    },
    domProps: {
      "value": (_vm.aiMach.remark)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.aiMach, "remark", $event.target.value.trim())
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])])], 2)]), _vm._v(" "), (_vm.aiMach.machType < 4 || _vm.aiMach.machType === 12 || _vm.aiMach.machType === 14) ? _c('section', {
    staticClass: "section section-part card-part"
  }, [_c('div', {
    staticClass: "theme-border-bottom"
  }, [_c('div', {
    staticClass: "hd theme-padding"
  }, [_c('span', {
    staticClass: "theme-btn-bg"
  }), _vm._v("会员卡计费\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "info-from"
  }, [_c('div', {
    staticClass: "info-li"
  }, [_c('div', {
    staticClass: "card-head row"
  }, [_c('div', {
    staticClass: "l"
  }, [_c('qd-checkbox', {
    attrs: {
      "label": "优先选择使用已开卡的会员卡"
    },
    model: {
      value: (_vm.aiMach.isPreSelectOpenedMc),
      callback: function($$v) {
        _vm.$set(_vm.aiMach, "isPreSelectOpenedMc", $$v)
      },
      expression: "aiMach.isPreSelectOpenedMc"
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "iconfont iconTips orange",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.showTip(5)
      }
    }
  })], 1), _vm._v(" "), (_vm.editable) ? _c('div', {
    staticClass: "r"
  }, [_c('div', {
    staticClass: "theme-font-color",
    on: {
      "click": _vm.openNewAiMachCard
    }
  }, [_c('i', {
    staticClass: "iconfont iconadd"
  }), _vm._v("添加")])]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "info-li"
  }, [_c('div', {
    staticClass: "card-table"
  }, [_c('qd-table', {
    attrs: {
      "max-height": 450,
      "border": "",
      "columns": _vm.cardColumns,
      "data": _vm.aiMachCardList
    },
    scopedSlots: _vm._u([{
      key: "cardType",
      fn: function(ref) {
        var row = ref.row;
        var index = ref.index;

        return [(row.cardType === 1) ? _c('span', {
          staticClass: "gray f12"
        }, [_vm._v("期限卡不计费")]) : [(row.paymentType === 1) ? [_vm._v("每次计费 "), _c('b', [_vm._v(_vm._s(row.payment))])] : (row.paymentType === 2) ? [_vm._v("每小时计费 "), _c('b', [_vm._v(_vm._s(row.payment))])] : _vm._e(), _vm._v(" "), (row.cardType === 2) ? [_vm._v("次")] : (row.cardType === 3) ? [_vm._v("元")] : _vm._e()], _vm._v(" "), (row.paymentType === 2 && row.cardType !== 1) ? [_vm._v("\n                      ，不足一小时的计费方式：\n                      "), (row.halfHourBegin && row.halfHourEnd) ? _c('div', {
          staticClass: "p5"
        }, [_c('i', {
          staticClass: "iconfont icon-arrow-r-2 small"
        }), _vm._v(" " + _vm._s(row.halfHourBegin) + " ~ " + _vm._s(row.halfHourEnd) + " 分钟，按半小时计费\n                      ")]) : _vm._e(), _vm._v(" "), (row.oneHourBegin && row.oneHourEnd) ? _c('div', {
          staticClass: "p5"
        }, [_c('i', {
          staticClass: "iconfont icon-arrow-r-2 small"
        }), _vm._v(" " + _vm._s(row.oneHourBegin) + " ~ " + _vm._s(row.oneHourEnd) + " 分钟，按一小时计费\n                      ")]) : _vm._e()] : _vm._e()]
      }
    }, (_vm.editable) ? {
      key: "handler",
      fn: function(ref) {
        var row = ref.row;
        var index = ref.index;

        return [_c('a', {
          staticClass: "f12 theme-font-color",
          on: {
            "click": function($event) {
              return _vm.editAiMachCard(index)
            }
          }
        }, [_vm._v("编辑")]), _vm._v("\n                     \n                    "), _c('a', {
          staticClass: "f12 theme-font-color",
          on: {
            "click": function($event) {
              return _vm.delAiMachCard(index)
            }
          }
        }, [_vm._v("删除")])]
      }
    } : null], null, true)
  })], 1)])])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "btns"
  }, [(_vm.editable && (_vm.enableEntryMach || _vm.enableQrcodeMach)) ? _c('div', {
    staticClass: "submit theme-btn-bg",
    staticStyle: {
      "width": "calc(100% - 36px)",
      "margin-top": "20px"
    },
    on: {
      "click": function($event) {
        return _vm.submitAiMach()
      }
    }
  }, [_vm._v("提交")]) : _vm._e(), _vm._v(" "), (!_vm.enableEntryMach && !_vm.enableQrcodeMach) ? _c('span', {
    staticClass: "l15 center red"
  }, [_vm._v("(尚未开通设备功能)")]) : _vm._e()])])]), _vm._v(" "), _c('van-popup', {
    staticClass: "set-card-dlg",
    staticStyle: {
      "width": "100%",
      "height": "100%"
    },
    attrs: {
      "position": "bottom",
      "overlay": true
    },
    model: {
      value: (_vm.aiMachCardDlg),
      callback: function($$v) {
        _vm.aiMachCardDlg = $$v
      },
      expression: "aiMachCardDlg"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move",
    on: {
      "click": function($event) {
        _vm.aiMachCardDlg = false
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })]), _vm._v(" "), _c('div', {
    staticClass: "tit"
  }, [_vm._v("智能设备会员卡计费设置")])]), _vm._v(" "), _c('div', {
    staticClass: "set-card-content"
  }, [_c('section', {
    staticClass: "section section-part"
  }, [_c('div', {
    staticClass: "theme-border-bottom"
  }, [_c('div', {
    staticClass: "hd theme-padding"
  }, [_c('span', {
    staticClass: "theme-btn-bg"
  }), _vm._v("会员卡计费设置\n          ")])]), _vm._v(" "), _c('ul', {
    staticClass: "info-from"
  }, [(!_vm.aiMachCard.amcId) ? _c('li', {
    staticClass: "info-li theme-border-bottom"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("包含停用卡")]), _vm._v(" "), _c('div', {
    staticClass: "value right"
  }, [_c('div', {
    staticClass: "swicth",
    staticStyle: {
      "float": "right"
    }
  }, [_c('qd-switch', {
    model: {
      value: (_vm.includePausedCard),
      callback: function($$v) {
        _vm.includePausedCard = $$v
      },
      expression: "includePausedCard"
    }
  })], 1)])])]) : _vm._e(), _vm._v(" "), _c('li', {
    staticClass: "info-li theme-border-bottom"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "label required"
  }, [_vm._v("会员卡")]), _vm._v(" "), _c('div', {
    staticClass: "value right"
  }, [(!_vm.aiMachCard.amcId) ? [(!_vm.isSetMoreCards) ? [_c('qd-select', {
    attrs: {
      "filterable": ""
    },
    on: {
      "on-change": _vm.changeCard
    },
    model: {
      value: (_vm.aiMachCard.cardId),
      callback: function($$v) {
        _vm.$set(_vm.aiMachCard, "cardId", $$v)
      },
      expression: "aiMachCard.cardId"
    }
  }, _vm._l((_vm.cardList), function(c) {
    return (!_vm.aiMachCardIdList.contains(c.cardId) && ((!_vm.includePausedCard && c.status === 0) || _vm.includePausedCard)) ? _c('qd-option', {
      key: c.cardId,
      attrs: {
        "value": c.cardId
      }
    }, [_vm._v("\n                        " + _vm._s(c.cardName) + "\n                        "), (c.status !== 0) ? _c('span', {
      staticClass: "orangered"
    }, [_vm._v("【停用】")]) : _vm._e()]) : _vm._e()
  }), 1)] : [_c('qd-select', {
    attrs: {
      "clearable": "",
      "filterable": "",
      "multiple": ""
    },
    model: {
      value: (_vm.selectCardIdList),
      callback: function($$v) {
        _vm.selectCardIdList = $$v
      },
      expression: "selectCardIdList"
    }
  }, _vm._l((_vm.cardList), function(c) {
    return (c.cardType == _vm.aiMachCard.cardType && (!_vm.aiMachCardIdList.contains(c.cardId) && ((!_vm.includePausedCard && c.status === 0) || _vm.includePausedCard))) ? _c('qd-option', {
      key: c.cardId,
      attrs: {
        "value": c.cardId
      }
    }, [_vm._v("\n                        " + _vm._s(c.cardName) + "\n                        "), (c.status !== 0) ? _c('span', {
      staticClass: "orangered"
    }, [_vm._v("【停用】")]) : _vm._e()]) : _vm._e()
  }), 1)]] : [_c('b', [_vm._v(_vm._s(_vm.aiMachCard.cardName))])]], 2)]), _vm._v(" "), _c('div', {
    staticClass: "more-checkbox row"
  }, [_c('qd-checkbox', {
    attrs: {
      "label": "批量设置"
    },
    model: {
      value: (_vm.isSetMoreCards),
      callback: function($$v) {
        _vm.isSetMoreCards = $$v
      },
      expression: "isSetMoreCards"
    }
  }), _vm._v(" "), (_vm.isSetMoreCards) ? _c('ul', {
    staticClass: "radio row"
  }, [_c('li', {
    on: {
      "click": function($event) {
        return _vm.changeCardType(1)
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-radio",
    class: {
      'icon-radio-on': _vm.aiMachCard.cardType === 1
    }
  }), _vm._v("期限卡")]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        return _vm.changeCardType(2)
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-radio",
    class: {
      'icon-radio-on': _vm.aiMachCard.cardType === 2
    }
  }), _vm._v("次数卡")]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        return _vm.changeCardType(3)
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-radio",
    class: {
      'icon-radio-on': _vm.aiMachCard.cardType === 3
    }
  }), _vm._v("储值卡")])]) : _vm._e()], 1)]), _vm._v(" "), _c('li', {
    staticClass: "info-li theme-border-bottom row"
  }, [_c('div', {
    staticClass: "label",
    class: {
      required: _vm.aiMachCard.cardType !== 1
    }
  }, [_vm._v("计费方式")]), _vm._v(" "), _c('div', {
    staticClass: "value right"
  }, [(_vm.aiMachCard.cardType === 1) ? _c('span', {
    staticClass: "gray"
  }, [_vm._v("按天消费")]) : _c('ul', {
    staticClass: "radio"
  }, [_c('li', {
    on: {
      "click": function($event) {
        _vm.aiMachCard.paymentType = 1
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-radio",
    class: {
      'icon-radio-on': _vm.aiMachCard.paymentType === 1
    }
  }), _vm._v("按次收费")]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        _vm.aiMachCard.paymentType = 2
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-radio",
    class: {
      'icon-radio-on': _vm.aiMachCard.paymentType === 2
    }
  }), _vm._v("按小时收费")])])])]), _vm._v(" "), _c('li', {
    staticClass: "info-li theme-border-bottom row"
  }, [_c('div', {
    staticClass: "label",
    class: {
      required: _vm.aiMachCard.cardType !== 1
    }
  }, [_vm._v("计费额")]), _vm._v(" "), _c('div', {
    staticClass: "value right"
  }, [(_vm.aiMachCard.cardType === 1) ? _c('span', {
    staticClass: "gray"
  }, [_vm._v("期限卡不计费")]) : _c('div', {
    staticClass: "row"
  }, [_c('input-num', {
    staticClass: "input-s",
    attrs: {
      "placeholder": "请输入"
    },
    model: {
      value: (_vm.aiMachCard.payment),
      callback: function($$v) {
        _vm.$set(_vm.aiMachCard, "payment", $$v)
      },
      expression: "aiMachCard.payment"
    }
  }), _vm._v(" "), (_vm.aiMachCard.cardType === 2) ? _c('span', {
    staticClass: "gray"
  }, [_vm._v(" 次")]) : (_vm.aiMachCard.cardType === 3) ? _c('span', {
    staticClass: "gray"
  }, [_vm._v(" 元")]) : _vm._e(), _vm._v(" "), (_vm.aiMachCard.paymentType === 2) ? _c('span', {
    staticClass: "gray"
  }, [_vm._v("/ 小时")]) : _vm._e()], 1)])]), _vm._v(" "), (_vm.aiMachCard.paymentType === 2 && _vm.aiMachCard.cardType !== 1) ? _c('li', {
    staticClass: "info-li theme-border-bottom"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("额外计费")]), _vm._v(" "), _c('div', {
    staticClass: "value right"
  }, [_c('div', {
    staticClass: "charge-by-hour-conf"
  }, [_c('span', {
    staticClass: "orange"
  }, [_vm._v("不足一小时的计费方式")]), _vm._v(" "), _c('ul', [_c('li', [_c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.aiMachCard.halfHourBegin),
      callback: function($$v) {
        _vm.$set(_vm.aiMachCard, "halfHourBegin", _vm._n($$v))
      },
      expression: "aiMachCard.halfHourBegin"
    }
  }), _vm._v(" 分钟\n                    ~ "), _c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.aiMachCard.halfHourEnd),
      callback: function($$v) {
        _vm.$set(_vm.aiMachCard, "halfHourEnd", _vm._n($$v))
      },
      expression: "aiMachCard.halfHourEnd"
    }
  }), _vm._v(" 分钟，按半小时计费\n                  ")], 1), _vm._v(" "), _c('li', [_c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.aiMachCard.oneHourBegin),
      callback: function($$v) {
        _vm.$set(_vm.aiMachCard, "oneHourBegin", _vm._n($$v))
      },
      expression: "aiMachCard.oneHourBegin"
    }
  }), _vm._v(" 分钟\n                    ~ "), _c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.aiMachCard.oneHourEnd),
      callback: function($$v) {
        _vm.$set(_vm.aiMachCard, "oneHourEnd", _vm._n($$v))
      },
      expression: "aiMachCard.oneHourEnd"
    }
  }), _vm._v(" 分钟，按一小时计费\n                  ")], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "more-chare-conf"
  }, [_vm._v("\n                入场签到"), _c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.aiMachCard.chargeByHourBegin),
      callback: function($$v) {
        _vm.$set(_vm.aiMachCard, "chargeByHourBegin", _vm._n($$v))
      },
      expression: "aiMachCard.chargeByHourBegin"
    }
  }), _vm._v("分钟后开始计时（计费）"), _c('i', {
    staticClass: "iconfont iconTips orange",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.showTip(6)
      }
    }
  })], 1)])]) : _vm._e(), _vm._v(" "), (!_vm.isSetMoreCards) ? _c('li', {
    staticClass: "info-li row required"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("排序号")]), _vm._v(" "), _c('div', {
    staticClass: "value right"
  }, [_c('input-int', {
    staticClass: "input-s",
    attrs: {
      "placeholder": "请输入排序号"
    },
    model: {
      value: (_vm.aiMachCard.orderNo),
      callback: function($$v) {
        _vm.$set(_vm.aiMachCard, "orderNo", $$v)
      },
      expression: "aiMachCard.orderNo"
    }
  })], 1)]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "btns"
  }, [_c('div', {
    staticClass: "submit theme-btn-bg",
    staticStyle: {
      "width": "calc(100% - 36px)",
      "margin-top": "20px"
    },
    on: {
      "click": _vm.submitAiMachCard
    }
  }, [_vm._v("提交")])])])]), _vm._v(" "), _c('div', {
    staticClass: "vant"
  }, [(_vm.showTips) ? _c('van-dialog', {
    staticClass: "van-has-overlay visible-close section-part",
    attrs: {
      "show-confirm-button": false,
      "show-cancel-button": false
    },
    model: {
      value: (_vm.showTips),
      callback: function($$v) {
        _vm.showTips = $$v
      },
      expression: "showTips"
    }
  }, [_c('div', {
    staticClass: "dlg-head"
  }, [_vm._v("提示")]), _vm._v(" "), _c('div', {
    staticClass: "dlg-cont",
    domProps: {
      "innerHTML": _vm._s(_vm.tipsCont)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "btn theme-btn-bg middle-btn",
    on: {
      "click": function($event) {
        _vm.showTips = false
      }
    }
  }, [_vm._v("好的")])]) : _vm._e()], 1), _vm._v(" "), _c('van-popup', {
    staticClass: "mach-conf-dlg",
    staticStyle: {
      "width": "90%"
    },
    attrs: {
      "overlay": true,
      "lock-scroll": false,
      "close-on-click-overlay": false
    },
    model: {
      value: (_vm.qrcodeMachConfDlg),
      callback: function($$v) {
        _vm.qrcodeMachConfDlg = $$v
      },
      expression: "qrcodeMachConfDlg"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "tit bold"
  }, [_vm._v("设备参数设置")]), _vm._v(" "), _c('div', {
    staticClass: "move-right"
  }, [_c('div', {
    staticClass: "theme-font-color",
    on: {
      "click": function($event) {
        _vm.qrcodeMachConfDlg = false
      }
    }
  }, [_vm._v("关闭")])])]), _vm._v(" "), _c('ul', {
    staticClass: "mach-arg-conf"
  }, [(_vm.enableQrcodeMach) ? _c('li', {
    staticClass: "section-part"
  }, [_vm._v("\n        二维码扫码器上二维码有效期："), _c('input-int', {
    staticClass: "input",
    model: {
      value: (_vm.qrcodeTimes),
      callback: function($$v) {
        _vm.qrcodeTimes = $$v
      },
      expression: "qrcodeTimes"
    }
  }), _vm._v("   秒 "), _c('div', {
    staticClass: "notice orangered"
  }, [_vm._v("( 不填写时默认180秒 )")]), _vm._v(" "), _c('div', {
    staticClass: "btn theme-btn-bg",
    on: {
      "click": function($event) {
        return _vm.g.Req.updateShopArg(2089, _vm.qrcodeTimes)
      }
    }
  }, [_vm._v("确定")])], 1) : _vm._e(), _vm._v(" "), (_vm.enableEntryMach) ? _c('li', {
    staticClass: "section-part",
    on: {
      "click": function($event) {
        return _vm.g.Req.updateShopArg(2094, _vm.hideMcInfoInMachLessons)
      }
    }
  }, [_c('qd-checkbox', {
    attrs: {
      "label": "前台签到机中，隐藏销课中的会员卡信息"
    },
    model: {
      value: (_vm.hideMcInfoInMachLessons),
      callback: function($$v) {
        _vm.hideMcInfoInMachLessons = $$v
      },
      expression: "hideMcInfoInMachLessons"
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.enableEntryMach) ? _c('li', {
    staticClass: "section-part"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('qd-checkbox', {
    attrs: {
      "label": "前台一体机销课中显示当天团课列表"
    },
    model: {
      value: (_vm.machLessonConf.enable),
      callback: function($$v) {
        _vm.$set(_vm.machLessonConf, "enable", $$v)
      },
      expression: "machLessonConf.enable"
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "iconfont iconTips orange",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.showTip(7)
      }
    }
  })], 1), _vm._v(" "), (_vm.machLessonConf.enable) ? _c('div', {
    staticClass: "more"
  }, [_vm._v("\n          显示"), _c('input-int', {
    staticClass: "input",
    model: {
      value: (_vm.machLessonConf.beginMins),
      callback: function($$v) {
        _vm.$set(_vm.machLessonConf, "beginMins", $$v)
      },
      expression: "machLessonConf.beginMins"
    }
  }), _vm._v("分钟前上课 ~ "), _c('input-int', {
    staticClass: "input",
    model: {
      value: (_vm.machLessonConf.endMins),
      callback: function($$v) {
        _vm.$set(_vm.machLessonConf, "endMins", $$v)
      },
      expression: "machLessonConf.endMins"
    }
  }), _vm._v("分钟内上课的团课\n        ")], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "btn theme-btn-bg",
    on: {
      "click": _vm.saveMachLessonConf
    }
  }, [_vm._v("确定")])]) : _vm._e(), _vm._v(" "), (_vm.enableEntryMach) ? _c('li', {
    staticClass: "section-part"
  }, [_c('qd-checkbox', {
    attrs: {
      "label": "前台签到机中，允许多次签到团课"
    },
    model: {
      value: (_vm.glMoreCheckins.enable),
      callback: function($$v) {
        _vm.$set(_vm.glMoreCheckins, "enable", $$v)
      },
      expression: "glMoreCheckins.enable"
    }
  }), _vm._v(" "), (_vm.glMoreCheckins.enable) ? _c('div', {
    staticClass: "more"
  }, [_vm._v("\n          两次签到之间至少间隔"), _c('input-int', {
    staticClass: "input",
    attrs: {
      "min": 1
    },
    model: {
      value: (_vm.glMoreCheckins.durations),
      callback: function($$v) {
        _vm.$set(_vm.glMoreCheckins, "durations", $$v)
      },
      expression: "glMoreCheckins.durations"
    }
  }), _vm._v("秒\n        ")], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "btn theme-btn-bg",
    on: {
      "click": _vm.saveGlMoreCheckinsConf
    }
  }, [_vm._v("确定")])], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "footer-btns theme-part-bg theme-font-color theme-border-top"
  }, [_c('div', {
    staticClass: "btn close-btn theme-font-color",
    on: {
      "click": function($event) {
        _vm.qrcodeMachConfDlg = false
      }
    }
  }, [_vm._v("关闭")])])]), _vm._v(" "), _c('van-popup', {
    staticClass: "face-unbind-dlg",
    staticStyle: {
      "width": "90%"
    },
    attrs: {
      "overlay": true,
      "close-on-click-overlay": false
    },
    model: {
      value: (_vm.faceBindDel.dlg),
      callback: function($$v) {
        _vm.$set(_vm.faceBindDel, "dlg", $$v)
      },
      expression: "faceBindDel.dlg"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "tit bold"
  }, [_vm._v("解除人脸绑定")])]), _vm._v(" "), _c('div', {
    staticClass: "mach-conf-content"
  }, [_c('div', {
    staticClass: "notice"
  }, [_vm._v("请输入员工或会员手机号，然后点击【解除】，可解除人脸绑定")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('input-int', {
    staticClass: "phone-no theme-part-bg",
    attrs: {
      "placeholder": "请输入需要解除的手机号"
    },
    on: {
      "enter": _vm.queryUserForDelFace,
      "input": _vm.queryUserForDelFace
    },
    model: {
      value: (_vm.faceBindDel.phoneNo),
      callback: function($$v) {
        _vm.$set(_vm.faceBindDel, "phoneNo", $$v)
      },
      expression: "faceBindDel.phoneNo"
    }
  }), _vm._v(" "), (_vm.faceBindDel.userName) ? _c('span', {
    staticClass: "orangered"
  }, [_vm._v(_vm._s((_vm.faceBindDel.userName)))]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row footer-btns theme-part-bg theme-font-color theme-border-top"
  }, [(_vm.faceBindDel.userId) ? _c('div', {
    staticClass: "theme-btn-bg btn",
    on: {
      "click": _vm.handleDelFaceBind
    }
  }, [_vm._v("解除")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "close-btn btn theme-font-color",
    on: {
      "click": function($event) {
        _vm.faceBindDel.dlg = false
      }
    }
  }, [_vm._v("关闭")])])]), _vm._v(" "), _c('van-popup', {
    staticClass: "bathroom-dlg",
    staticStyle: {
      "width": "90%",
      "max-height": "80%"
    },
    attrs: {
      "overlay": true,
      "close-on-click-overlay": false,
      "lock-scroll": false
    },
    model: {
      value: (_vm.bathroomDlg),
      callback: function($$v) {
        _vm.bathroomDlg = $$v
      },
      expression: "bathroomDlg"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "tit bold"
  }, [_vm._v("淋浴间详细")]), _vm._v(" "), _c('div', {
    staticClass: "move-right"
  }, [_c('div', {
    staticClass: "theme-font-color",
    on: {
      "click": function($event) {
        _vm.bathroomDlg = false
      }
    }
  }, [_vm._v("关闭")])])]), _vm._v(" "), _c('div', {
    staticClass: "bathroom-content"
  }, [_c('ul', [_c('li', [_c('qd-table', {
    attrs: {
      "border": "",
      "data": _vm.bathroomList,
      "columns": _vm.bathroomColumns,
      "max-height": 450
    },
    scopedSlots: _vm._u([{
      key: "status",
      fn: function(ref) {
        var row = ref.row;
        var index = ref.index;

        return [(row.status === 0) ? [_vm._v("空闲")] : (row.status === 1) ? [_vm._v("男士占用")] : (row.status === 2) ? [_vm._v("女士占用")] : (row.status === 3) ? [_vm._v("停用")] : _vm._e()]
      }
    }, {
      key: "handler",
      fn: function(ref) {
        var row = ref.row;
        var index = ref.index;

        return [(row.status === 0) ? _c('a', {
          staticClass: "theme-font-color",
          on: {
            "click": function($event) {
              return _vm.updateRoomStatus(row.ambId, 3)
            }
          }
        }, [_vm._v("停用")]) : (row.status === 3) ? _c('a', {
          staticClass: "theme-font-color",
          on: {
            "click": function($event) {
              return _vm.updateRoomStatus(row.ambId, 0)
            }
          }
        }, [_vm._v("恢复")]) : _c('a', {
          staticClass: "theme-font-color",
          on: {
            "click": function($event) {
              return _vm.updateRoomStatus(row.ambId, 0)
            }
          }
        }, [_vm._v("清除占用")])]
      }
    }])
  })], 1), _vm._v(" "), _c('li', [_c('qd-table', {
    attrs: {
      "border": "",
      "data": _vm.bathroomLogList,
      "columns": _vm.usedBathroomColumns,
      "max-height": 450
    },
    scopedSlots: _vm._u([{
      key: "memberId",
      fn: function(ref) {
        var row = ref.row;
        var index = ref.index;

        return [(row.memberId) ? [_vm._v("会员/" + _vm._s(row.memberName) + "（" + _vm._s(_vm.g.Dict.Sex[row.memberSex]) + "）")] : [_vm._v("员工/" + _vm._s(row.staffName) + "（" + _vm._s(_vm.g.Dict.Sex[row.staffSex]) + "）")]]
      }
    }, {
      key: "checkoutTime",
      fn: function(ref) {
        var row = ref.row;
        var index = ref.index;

        return [(!row.checkoutTime) ? _c('b', {
          staticClass: "red"
        }, [_vm._v("尚未操作签出")]) : [_vm._v(_vm._s(row.checkoutTime))]]
      }
    }])
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row footer-btns theme-part-bg theme-font-color theme-border-top"
  }, [_c('div', {
    staticClass: "close-btn btn theme-font-color",
    on: {
      "click": function($event) {
        _vm.bathroomDlg = false
      }
    }
  }, [_vm._v("关闭")])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move",
    attrs: {
      "onclick": "history.go(-1)"
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })]), _vm._v(" "), _c('div', {
    staticClass: "tit"
  }, [_vm._v("智能门禁/前台机")]), _vm._v(" "), _c('div', {
    staticClass: "move-right"
  })])
}]}

/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2050)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1468),
  /* template */
  __webpack_require__(2445),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-97219d0c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1864)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1469),
  /* template */
  __webpack_require__(2261),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-12a9bb60",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 989:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1012)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1010),
  /* template */
  __webpack_require__(1038),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-245766ee",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});