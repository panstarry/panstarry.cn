webpackJsonp([23],{

/***/ 1473:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            g: $,
            cards: [],
            cardDlgTitle: '',
            cardPopup: false,
            isInWx: $.Util.isInWeixin() && window.__wxjs_environment !== 'miniprogram',
            card: {}
        };
    },
    created() {
        this.queryCardList();
    },
    methods: {
        queryCardList() {
            $.Req.service($.SvName.CARD_QUERY, { status: 0, isPublic: true }, ret => {
                if (!ret.cardList) return;
                for (let c of ret.cardList) {
                    c.bgImgUrl = this.getBgImgUrl(c.bgImg);
                    if (!c.bgFontColor) c.bgFontColor = 'f1f1f1';
                }
                for (let [idx, c] of ret.cardList.entries()) {
                    c.cardTypeName = $.Dict.CardType[c.cardType];
                    c.statusName = $.Dict.CardStatus[c.status];
                }
                this.cards = ret.cardList;
            }, true);
        },
        getBgImgUrl(bgImg) {
            if (!bgImg) {
                bgImg = '4.jpg';
            }
            if (bgImg.length < 10) {
                return $.Conf.IMG_LIB_URL + '/cardbg/' + bgImg;
            } else {
                return $.Util.getImgUrl(bgImg);
            }
        },
        openCardDetail(c) {
            if (c.isOnlineSale && $.data.user.memberId && this.isInWx && !c.isOnlineSaleForGuest) {
                this.$router.push('/member-card-sale/' + c.cardId);
            } else {
                this.cardDlgTitle = '{0}'.format(c.cardName);
                let args = { queryType: 1, cardId: c.cardId };
                $.Req.service($.SvName.CARD_QUERY, args, ret => {
                    this.card = ret.cardList[0];
                    this.cardPopup = true;
                });
            }
        }
    }
});

/***/ }),

/***/ 1688:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".card-item[data-v-4902b376]{padding:8px 20px}.card-item .card-img[data-v-4902b376]{width:100%;height:auto;border-radius:10px}.card-item .name[data-v-4902b376]{margin:8px 0}.card-item .card-name[data-v-4902b376]{width:calc(100% - 130px);font-size:15px;font-weight:600;overflow:hidden;text-overflow:ellipsis}.card-item .price[data-v-4902b376]{align-items:baseline}.card-item .present-price[data-v-4902b376]{color:#ff1e24;font-weight:600;font-size:20px}.card-item .face-price[data-v-4902b376]{color:#ff1e24}.card-item .orig-price[data-v-4902b376]{margin-left:8px;text-decoration-line:line-through;vertical-align:-5px;color:#999}.card-item .limit-time[data-v-4902b376]{color:#999}.card-item .btn[data-v-4902b376]{padding:4px 15px;font-size:15px}.card-item .price-ref[data-v-4902b376]{text-decoration:line-through;font-size:12px}.card-item .card-info[data-v-4902b376]{width:100%;position:absolute;right:0;bottom:0;box-sizing:border-box;padding:0 4% 4% 5%;line-height:1.4;text-align:right}.card-item .sale[data-v-4902b376]{width:5rem;height:1.6rem;line-height:1.6rem;text-align:center;color:#333;background:orange;position:absolute;right:-2px;top:12%;font-size:12px;box-shadow:3px 3px 5px #666}", ""]);

// exports


/***/ }),

/***/ 1689:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".popup-bottom[data-v-4902b376]{width:100%;height:100%;overflow-y:auto;padding:0}.card-detail label[data-v-4902b376]{display:inline-block;width:110px;text-align:left;color:#999}.card-detail ul[data-v-4902b376]{padding-top:10px}.card-detail li[data-v-4902b376]{width:100%;padding:0 16px 10px}.card-detail .card-intro[data-v-4902b376]{border:0;padding-bottom:10px}.card-detail .card-intro h2[data-v-4902b376]{border-bottom:1px solid #eee;padding:15px 0 10px}.card-detail .card-intro pre[data-v-4902b376]{padding:10px 16px 15px;line-height:175%;font-size:14px}", ""]);

// exports


/***/ }),

/***/ 1955:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1688);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("eed0350a", content, true, {});

/***/ }),

/***/ 1956:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1689);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("931f004c", content, true, {});

/***/ }),

/***/ 2351:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style- vant"
  }, [_c('page-head', {
    attrs: {
      "title": "门店售卖会员卡"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "card-list-box"
  }, [_c('ul', _vm._l((_vm.cards), function(c) {
    return _c('li', {
      staticClass: "section-part card-item",
      on: {
        "click": function($event) {
          return _vm.openCardDetail(c)
        }
      }
    }, [_c('img', {
      staticClass: "card-img",
      attrs: {
        "src": c.bgImgUrl
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "row name"
    }, [_c('div', {
      staticClass: "card-name"
    }, [_vm._v(_vm._s(c.cardName))]), _vm._v(" "), _c('div', {
      staticClass: "limit-time"
    }, [(c.cardType === 1 && c.defaultDays) ? [_vm._v("有效期：" + _vm._s(c.defaultDays) + " 天")] : (c.cardType === 2 && c.defaultTimes) ? [_vm._v("有效次数：" + _vm._s(c.defaultTimes) + " 次")] : _vm._e()], 2)]), _vm._v(" "), _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "row start price"
    }, [(c.isOnlineSale) ? [_c('div', {
      staticClass: "present-price"
    }, [_c('span', [_vm._v("￥")]), _vm._v(_vm._s(c.onlinePrice))]), _vm._v(" "), (c.defaultAmount && c.defaultAmount > c.onlinePrice) ? _c('div', {
      staticClass: "orig-price"
    }, [_c('span', [_vm._v("￥")]), _vm._v(_vm._s(c.defaultAmount))]) : _vm._e()] : (c.defaultAmount && c.isShowPrice) ? _c('div', {
      staticClass: "present-price"
    }, [_c('span', [_vm._v("￥")]), _vm._v(_vm._s(c.defaultAmount))]) : _c('div', {
      staticClass: "face-price"
    })], 2), _vm._v(" "), (c.isOnlineSale && !c.isOnlineSaleForGuest) ? _c('div', {
      staticClass: "btn theme-btn-bg"
    }, [_vm._v("在线购买")]) : _vm._e()])])
  }), 0)]), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "menu": "card"
    }
  }), _vm._v(" "), _c('van-popup', {
    style: ({
      height: '100%',
      width: '100%'
    }),
    attrs: {
      "position": "right"
    },
    model: {
      value: (_vm.cardPopup),
      callback: function($$v) {
        _vm.cardPopup = $$v
      },
      expression: "cardPopup"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move",
    on: {
      "click": function($event) {
        _vm.cardPopup = false
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })]), _vm._v("\n            " + _vm._s(_vm.cardDlgTitle) + "\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-detail"
  }, [_c('section', [_c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("基本信息")])]), _vm._v(" "), _c('ul', [_c('li', [_c('label', [_vm._v("会员卡类型：")]), _vm._v(_vm._s(_vm.g.Dict.CardType[_vm.card.cardType]))]), _vm._v(" "), _c('li', [_c('label', [_vm._v("可否入场签到：")]), _vm._v(_vm._s(_vm.g.Dict.YesNo[_vm.card.allowCheckin]))]), _vm._v(" "), (_vm.card.cardType !== 1 && _vm.card.checkinPayment) ? _c('li', [_c('label', [_vm._v("每次签到计费：")]), _vm._v(_vm._s(_vm.card.checkinPayment) + "\n                        "), (_vm.card.cardType === 2) ? _c('span', [_vm._v("次")]) : _vm._e(), (_vm.card.cardType === 3) ? _c('span', [_vm._v("元")]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.card.defaultAmount && _vm.card.isShowPrice) ? _c('li', [_c('label', [_vm._v("会员卡价格：")]), _vm._v(" "), _c('b', {
    staticClass: "bigger"
  }, [_vm._v(_vm._s(_vm.card.defaultAmount))]), _vm._v(" 元\n                    ")]) : _vm._e(), _vm._v(" "), (_vm.card.defaultDays && _vm.card.cardType === 1) ? _c('li', [_c('label', [_vm._v("充值天数：")]), _c('b', {
    staticClass: "bigger"
  }, [_vm._v(_vm._s(_vm.card.defaultDays))]), _vm._v(" 天\n                    ")]) : _vm._e(), _vm._v(" "), (_vm.card.defaultTimes && _vm.card.cardType === 2) ? _c('li', [_c('label', [_vm._v("充值次数：")]), _c('b', {
    staticClass: "bigger"
  }, [_vm._v(_vm._s(_vm.card.defaultTimes))]), _vm._v(" 次\n                    ")]) : _vm._e(), _vm._v(" "), (_vm.card.limitBeginTime && _vm.card.limitEndTime) ? _c('li', [_c('label', [_vm._v("限定用卡时间：")]), _vm._v(_vm._s(_vm.g.Util.formatTime(_vm.card.limitBeginTime)) + " ~ " + _vm._s(_vm.g.Util.formatTime(_vm.card.limitEndTime)) + "\n                    ")]) : _vm._e()])]), _vm._v(" "), _c('section', {
    staticClass: "card-intro"
  }, [_c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("会员卡介绍")])]), _vm._v(" "), (_vm.card.intro) ? [_c('pre', [_vm._v(_vm._s(_vm.card.intro))]), _vm._v(" "), _c('p', {
    staticClass: "center gray"
  }, [_vm._v("—— END ——")])] : _c('div', {
    staticClass: "gray center mt-10"
  }, [_vm._v("尚无介绍")])], 2)])])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1955)
  __webpack_require__(1956)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1473),
  /* template */
  __webpack_require__(2351),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4902b376",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});