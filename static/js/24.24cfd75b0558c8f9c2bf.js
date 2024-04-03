webpackJsonp([24],{

/***/ 1395:
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
  data() {
    return {
      g: $,
      ssrId: this.$route.query.ssrId,
      mcId: this.$route.query.mcId,
      cardList: [],
      ruleList: [{ title: "第1期", settingList: [{ termId: 1 }] }],
      options: {},
      cardName: "",
      ruleOptions: null,
      paying: false,
      hasWxMchId: false,
      memberPoints: null,
      shopId: null,
      ruleId: null,
      needPay: null,
      isInWxWeb: $.Util.isInWeixin() && window.__wxjs_environment !== "miniprogram"
    };
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "padding-bottom:0;");
  },
  created() {
    this.queryDetail();
    this.queryShopId();
    this.queryWxMchId();
  },
  methods: {
    ruleQuery(cb) {
      let args = {
        encSid: $.data.shop.encSid,
        encTid: $.data.tenant.encTid,
        ssrId: this.ssrId,
        mcId: this.mcId,
        usableDays: this.options.usableDays,
        paymentAmount: this.options.paymentAmount
      };
      $.Req.service($.SvName.SELF_SERVICE_RULE_QUERY, args, res => {
        this.ruleOptions = res;
        this.needPay = res.paymentAmount;
        this.ruleId = res.ruleId;
        cb();
      });
    },

    queryShopId() {
      $.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
        this.shopId = ret.shopId;
      });
    },

    queryWxMchId() {
      let args = { queryType: "shop" };
      $.Req.service($.SvName.WX_MCHID_QUERY, args, ret => {
        this.hasWxMchId = ret.mchId ? true : false;
      });
    },

    doPayment() {
      if (this.paying) {
        $.Msg.info("正在支付中...");
        return;
      }
      if (!this.hasWxMchId) {
        $.Dlg.error("该商户尚未申请开通微信支付权限，您还无法使用微信支付。");
        return;
      }
      if (!this.isInWxWeb) {
        $.Dlg.error("请通过微信公众号进入系统，然后再通过微信支付。");
        return;
      }
      let args = {
        encSid: $.data.shop.encSid,
        encTid: $.data.tenant.encTid,
        wxId: $.data.user.wxId,
        ssrId: this.ssrId,
        memberPhoneNo: this.ruleOptions.memberPhoneNo,
        memberName: this.ruleOptions.memberName,
        memberSex: this.ruleOptions.memberSex,
        paymentAmount: this.needPay
      };
      this.paying = true;
      $.Req.service($.SvName.SELF_SERVICE_ORDER_CREATE, args, ret => {
        // tradeNo
        if (ret.tradeNo) {
          this.tradeNo = ret.tradeNo;
          // this.finishOrder();
          // 启动微信支付
          this.callWxPay(ret.wxParam);
        }
      }, true, err => {
        $.Dlg.error(err);
        this.paying = false;
      });
    },

    callWxPay(ret) {
      let args = {
        appId: ret.appId,
        nonceStr: ret.nonceStr,
        package: "prepay_id={0}".format(ret.prepayId),
        signType: ret.signType,
        timeStamp: ret.timeStamp,
        paySign: ret.paySign
      };
      WeixinJSBridge.invoke("getBrandWCPayRequest", args, res => {
        if (res.err_msg === "get_brand_wcpay_request:ok") {
          //
        } else {
          $.Dlg.error("支付失败，请稍候重试。");
          this.paying = false;
        }
      });
    },

    finishOrder() {
      $.Req.service($.SvName.SELF_SERVICE_ORDER_FINISH, {
        tradeNo: this.tradeNo,
        encSid: $.data.shop.encSid,
        encTid: $.data.tenant.encTid
      }, ret => {}, true);
    },

    queryDetail() {
      let args = {
        status: 0,
        ssrId: this.ssrId,
        page: 1
      };
      $.Req.service($.SvName.SELF_SERVICE_RENEWAL_QUERY, args, res => {
        let topRule = res.selfServiceRenewal;
        this.options.cardId = topRule.cardId;
        this.options.cardType = topRule.cardType;
        this.cardName = topRule.cardName;
        //
        this.options.usableDays = topRule.usableDays;
        this.options.paymentAmount = topRule.paymentAmount;
        if (topRule.cardType != 1) {
          if (topRule.cardType == 3) {
            this.options.usableAmount = topRule.usableAmount;
          } else {
            this.options.usableTimes = topRule.usableTimes;
          }
        }
        this.options.cardLimitBeginDays = topRule.cardLimitBeginDays;
        this.cardType = topRule.cardType;
        this.ruleQuery(() => {
          let list = res.selfServiceRuleList;
          let termList = list.map(t => t.termId);
          let maxTerm = Math.max(...termList);
          let mapRuleList = [];
          for (let i = 1; i <= maxTerm; i++) {
            let filterArr = list.filter(v => v.termId == i);
            let obj = {
              title: "第" + i + "期",
              isActive: filterArr.some(f => f.ruleId == this.ruleId),
              settingList: filterArr
            };
            mapRuleList.push(obj);
          }
          this.ruleList = mapRuleList;
        });
      });
    }
  }
});

/***/ }),

/***/ 1607:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".row-space[data-v-16e0bbf4]{display:flex;align-items:center;justify-content:space-between}div[data-v-16e0bbf4],span[data-v-16e0bbf4]{font-size:14px}.high[data-v-16e0bbf4]{color:#fc5156}.row-center[data-v-16e0bbf4]{display:flex;align-items:center}.one-line[data-v-16e0bbf4]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.recharge-btn[data-v-16e0bbf4]{position:fixed;left:0;right:0;bottom:0;height:49px;line-height:49px;text-align:center;color:#fff;background-color:#fc5156;font-size:16px}.renewal[data-v-16e0bbf4]{min-height:100vh;background:linear-gradient(90deg,#fd9961,#fe6978);padding-bottom:100px}.renewal .head[data-v-16e0bbf4]{width:100%;height:148px;padding-top:10px}.renewal .head img[data-v-16e0bbf4]{width:100%;height:100%}.renewal .card[data-v-16e0bbf4]{margin:-20px 16px 0;position:relative;background-color:#fff;border-radius:10px}.renewal .card .card-head .head-item[data-v-16e0bbf4]{border-bottom:1px solid #ededed;height:50px;font-size:14px;padding:0 20px;box-sizing:border-box}.renewal .card .card-head .head-item .left[data-v-16e0bbf4]{display:inline-block;width:106px;color:#666}.renewal .card .card-head .head-item .right[data-v-16e0bbf4]{flex:1}.renewal .card .rule-tit[data-v-16e0bbf4]{padding:20px;color:#666}.renewal .card .rule-box[data-v-16e0bbf4]{padding:0 20px 15px;box-sizing:border-box}.renewal .card .rule-box .rule-item[data-v-16e0bbf4]{background-color:#fff9f6;border-radius:5px;padding:15px 16px;box-sizing:border-box;margin-bottom:15px}.renewal .card .rule-box .rule-item .rule-subtit[data-v-16e0bbf4]{font-weight:700}.renewal .card .rule-box .rule-item .rule-line[data-v-16e0bbf4]{padding-left:17.5px;position:relative;margin-top:17px}.renewal .card .rule-box .rule-item .rule-line.normal[data-v-16e0bbf4]:before{content:\"\";position:absolute;left:0;top:50%;transform:translateY(-50%);width:7px;height:7px;background-color:#fc5156;border-radius:50%}.renewal .card .rule-box .rule-item .rule-line.active[data-v-16e0bbf4]{color:#fc5156}.renewal .card .rule-box .rule-item .rule-line.active[data-v-16e0bbf4] :before{font-family:iconfont;content:\"\\E66F\";position:absolute;left:0;top:50%;transform:translateY(-50%);color:#fc5156}.renewal .card .rule-box .rule-item.active[data-v-16e0bbf4]{border:1px solid #fc5156}.renewal .card .rule-box .rule-item[data-v-16e0bbf4]:last-child{margin-bottom:0}", ""]);

// exports


/***/ }),

/***/ 1874:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1607);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("18b39d9a", content, true, {});

/***/ }),

/***/ 2271:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "renewal"
  }, [_c('page-head', {
    attrs: {
      "title": "自助续费卡充值"
    }
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-head"
  }, [_c('div', {
    staticClass: "head-item row-center"
  }, [_c('span', {
    staticClass: "left"
  }, [_vm._v("会员卡名称")]), _vm._v(" "), (_vm.cardName) ? _c('div', {
    staticClass: "right one-line"
  }, [_vm._v(_vm._s(_vm.cardName))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "head-item row-center"
  }, [_c('span', {
    staticClass: "left"
  }, [_vm._v("会员卡期限")]), _vm._v(" "), _c('div', {
    staticClass: "right one-line"
  }, [_vm._v(_vm._s(_vm.options.usableDays) + "天")])]), _vm._v(" "), (_vm.options.cardType != 1) ? _c('div', {
    staticClass: "head-item row-center"
  }, [_c('span', {
    staticClass: "left"
  }, [_vm._v("会员卡" + _vm._s(_vm.g.Dict.CardTypeSuffix[_vm.options.cardType] || '次数'))]), _vm._v(" "), (_vm.options.cardType != 3) ? _c('div', {
    staticClass: "right one-line"
  }, [_vm._v(_vm._s(_vm.options.usableTimes) + _vm._s(_vm.g.Dict.CardTypeUnit[_vm.options.cardType] || '次'))]) : _c('div', {
    staticClass: "right one-line"
  }, [_vm._v(_vm._s(_vm.options.usableAmount) + " 元")])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "head-item row-center"
  }, [_c('span', {
    staticClass: "left"
  }, [_vm._v("本次续费金额")]), _vm._v(" "), _c('div', {
    staticClass: "right one-line"
  }, [_c('b', [_vm._v(_vm._s(_vm.needPay))]), _vm._v(" 元")])])]), _vm._v(" "), _c('div', {
    staticClass: "rule-tit"
  }, [_vm._v("续费规则")]), _vm._v(" "), _c('div', {
    staticClass: "rule-box"
  }, [_vm._l((_vm.ruleList), function(item, idx) {
    return [_c('div', {
      key: idx,
      class: ['rule-item', item.isActive ? 'active' : '']
    }, [_c('div', {
      staticClass: "rule-subtit"
    }, [_vm._v("第" + _vm._s(idx + 1) + "期")]), _vm._v(" "), _vm._l((item.settingList), function(r, cidx) {
      return [_c('div', {
        key: cidx,
        class: ['rule-line', r.ruleId == _vm.ruleId ? 'active' : 'normal']
      }, [_vm._v("\n              距离到期日 "), _c('span', {
        staticClass: "high"
      }, [_vm._v(_vm._s(r.beginDay))]), _vm._v(" 天 ~ "), _c('span', {
        staticClass: "high"
      }, [_vm._v(_vm._s(r.endDay))]), _vm._v(" 天，续费 "), _c('span', {
        staticClass: "high"
      }, [_vm._v(_vm._s(r.paymentAmount))]), _vm._v(" 元\n            ")])]
    })], 2)]
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "recharge-btn",
    on: {
      "click": _vm.doPayment
    }
  }, [_vm._v("立即续费")])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "head"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/market/renewal/recharge.png",
      "alt": ""
    }
  })])
}]}

/***/ }),

/***/ 840:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1874)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1395),
  /* template */
  __webpack_require__(2271),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-16e0bbf4",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});