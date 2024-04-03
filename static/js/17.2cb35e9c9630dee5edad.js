webpackJsonp([17],{

/***/ 1371:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    components: {},
    data() {
        return {
            g: $,
            orderList: null,
            orderCount: null,
            query: {
                status: null
            }
        };
    },
    created() {
        this.queryMallOrder();
    },
    methods: {
        queryMallOrder(page = null) {
            if (!page) this.orderCount = null;
            let args = {
                status: this.query.status,
                page: page,
                memberId: $.data.user.memberId,
                needProductLogo: true
            };
            $.Req.service($.SvName.MALL_ORDER_QUERY, args, ret => {
                for (let o of ret.orderList) {
                    let unitNum = 0;
                    for (let p of o.productList) {
                        unitNum += p.unitNum;
                    }
                    o.productUnitNum = unitNum;
                }
                this.orderList = ret.orderList;
                if (!page) {
                    this.orderCount = ret.count;
                }
            }, true);
        },

        changeStatus(val) {
            this.query.status = val;
            this.queryMallOrder(null);
        },

        gotoPayment(order) {
            let prds = [];
            for (let prd of order.productList) {
                prds.push('{0}-{1}'.format(prd.productId, prd.unitNum));
            }
            this.$router.push('/mall/product-pay?prds={0}&from=order&orderId={1}'.format(prds.join(','), order.orderId));
        },

        deleteOrder(order) {
            $.Dlg.confirm('您确定要删除该订单吗？', () => {
                let args = { orderId: order.orderId };
                $.Req.service($.SvName.MALL_ORDER_DELETE, args, ret => {
                    $.Msg.success($.Lang.OPT_SUCCESS);
                    this.queryMallOrder();
                });
            });
        },

        confirmProductReceipt(mopId) {
            $.Dlg.confirm('您确定领取到了该商品吗？', () => {
                let args = { mopId: mopId };
                $.Req.service($.SvName.MALL_ORDER_PRODUCT_RECEIPT_CONFIRM, args, ret => {
                    $.Msg.success($.Lang.OPT_SUCCESS);
                    this.queryMallOrder();
                });
            });
        }
    }
});

/***/ }),

/***/ 1373:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            g: window.$,
            productList: null,
            productCount: null,
            paymentPointsSum: 0,
            paymentAmountSum: 0,
            amountSumForVCard: 0,
            memberCardList: [],
            selectedMemberCardId: null,
            today: null,
            memberCardChecks: {},
            memberCardSelectDlg: false,
            memberPoints: null,
            paying: false,
            hasWxMchId: false,
            isInWxWeb: $.Util.isInWeixin() && window.__wxjs_environment !== 'miniprogram',
            from: this.$route.query.from,
            orderId: null,
            orderRemark: null,
            allowPayByValueCard: true
        };
    },
    created() {
        let mallCart = [];
        if (this.$route.query.orderId) {
            this.orderId = parseInt(this.$route.query.orderId);
        }
        if (this.$route.query.prds) {
            let prdList = this.$route.query.prds.split(',');
            for (let p of prdList) {
                let items = p.split('-');
                mallCart.push({ productId: parseInt(items[0]), productCnt: parseInt(items[1]) });
            }
        } else {
            this.productCount = 0;
            return;
        }
        this.queryProducts(mallCart);
        if ($.data.user.memberId) {
            this.queryMemberPoints();
            this.queryWxMchId();
            this.queryMemberValueCards();
        }
    },
    methods: {
        queryWxMchId() {
            let args = { queryType: 'shop' };
            $.Req.service($.SvName.WX_MCHID_QUERY, args, ret => {
                if (ret.mchId) this.hasWxMchId = true;else this.hasWxMchId = false;
            });
        },
        queryMemberPoints() {
            let args = { memberId: $.data.user.memberId, needCurrentPoints: true };
            $.Req.service($.SvName.MEMBER_POINTS_QUERY, args, ret => {
                this.memberPoints = ret.points ? ret.points : 0;
            });
        },
        queryMemberValueCards(type) {
            let args = {
                status: 0,
                cardType: 3,
                memberId: $.data.user.memberId
            };
            $.Req.service($.SvName.MEMBER_CARD_QUERY, args, (ret, systime) => {
                this.today = Date.new(systime);
                this.memberCardList = ret.memberCardList;
                if (type) {
                    $.Msg.success('刷新成功');
                }
                this.setMemberCard();
            });
        },
        setMemberCard() {
            for (let mc of this.memberCardList) {
                mc.usable = this.canSelectMemberCard(mc);
            }
        },
        canSelectMemberCard(mc) {
            let now = this.today;
            mc.selectCardErr = null;
            let ret = $.MemberLib.checkMemberCard(mc);
            if (!ret[0]) {
                mc.selectCardErr = ret[1];
                return ret[0];
            }
            // 检查余额
            if (mc.currentAmount <= 0) {
                mc.selectCardErr = '会员卡余额不足';
                return false;
            }
            return true;
        },
        isInVacation(begin, end) {
            if (begin && end) {
                if (this.today.compareDatePart(Date.new(begin)) >= 0 && this.today.compareDatePart(Date.new(end)) <= 0) {
                    return true;
                }
            }
            return false;
        },
        queryProducts(mallCart) {
            if (!mallCart || !mallCart.length) {
                this.productCount = 0;
                return;
            }
            let productIds = [];
            let prdCntMap = {};
            for (let p of mallCart) {
                productIds.push(p.productId);
                prdCntMap[p.productId] = p.productCnt;
            }
            if (!productIds.length) {
                this.productCount = 0;
                return;
            }
            let args = {
                status: 0,
                hasStock: true,
                needLogo: true,
                productIdList: productIds
            };
            $.Req.service($.SvName.MALL_PRODUCT_QUERY, args, ret => {
                this.productList = ret.productList;
                this.productCount = ret.productList.length;
                let pointsSum = 0,
                    amountSum = 0,
                    amount;
                for (let i = 0; i < this.productCount; i++) {
                    this.productList[i].productCnt = prdCntMap[this.productList[i].productId];
                    this.productList[i].useValueCard = false;
                    let prd = this.productList[i];
                    if (prd.priceType === 0 || prd.priceType === 2) {
                        pointsSum += prd.pricePoints * prd.productCnt;
                    }
                    if (prd.priceType === 1 || prd.priceType === 2) {
                        amount = prd.priceAmount * prd.productCnt;
                        amountSum += amount;
                    }
                    this.paymentPointsSum = pointsSum;
                    this.paymentAmountSum = amountSum;
                    if (this.allowPayByValueCard) this.allowPayByValueCard = prd.allowPayByValueCard;
                }
            }, true);
        },
        altProductCnt(val, idx) {
            let prd = this.productList[idx];
            if (prd.productCnt + val < 1) {
                $.Msg.info('亲，不能再减了哦');
                return;
            }
            prd.productCnt = prd.productCnt + val;
            this.$set(this.productList, idx, prd);
            if (prd.priceType === 0 || prd.priceType === 2) {
                this.paymentPointsSum += prd.pricePoints * val;
            }
            if (prd.priceType === 1 || prd.priceType === 2) {
                this.paymentAmountSum += prd.priceAmount * val;
                if (this.amountSumForVCard > this.paymentAmountSum) {
                    $.Dlg.error('储值卡支付总金额已大于支付总金额，请重新设置储值卡支付金额。');
                    this.clearMemberCardPayments();
                }
            }
        },
        clearMemberCardPayments() {
            this.memberCardChecks = {};
            for (let m of this.memberCardList) {
                m.payment = null;
            }
            this.amountSumForVCard = 0;
        },
        checkMemberCard(idx) {
            let isCheck;
            if (this.memberCardChecks[idx]) {
                isCheck = false;
            } else {
                isCheck = true;
            }
            this.$set(this.memberCardChecks, idx, isCheck);
            if (!isCheck) {
                let mc = this.memberCardList[idx];
                if (mc.payment) {
                    this.amountSumForVCard -= mc.payment;
                }
                mc.payment = null;
            }
        },
        changeValueCardSelect(p, val) {
            p.useValueCard = !val;
            if (p.useValueCard) {
                this.amountSumForVCard += p.priceAmount * p.productCnt;
            } else {
                this.amountSumForVCard -= p.priceAmount * p.productCnt;
            }
        },
        changeMcPayment(mc) {
            if (!mc.payment || mc.payment < 0) {
                $.Msg.error('请输入正确的金额');
                return;
            }
            if (mc.currentAmount < mc.payment) {
                $.Dlg.error('输入金额【{0}】不能大于剩余金额【{1}】'.format(mc.payment, mc.currentAmount));
                mc.payment = null;
            }
            // check amount
            let paymentSum = 0;
            for (let _mc of this.memberCardList) {
                if (_mc.payment && mc.mcId !== _mc.mcId) paymentSum += _mc.payment;
            }
            if (paymentSum + mc.payment > this.paymentAmountSum) {
                this.amountSumForVCard = paymentSum;
                $.Dlg.error('输入金额【{0}】不能大于支付剩余金额【{1}】'.format(mc.payment, this.paymentAmountSum - paymentSum));
                mc.payment = null;
                return;
            }
            this.amountSumForVCard += mc.payment;
        },
        calcAmountSumForValurCard() {
            // check amount
            let paymentSum = 0;
            let i = 0;
            for (let mc of this.memberCardList) {
                if (this.memberCardChecks[i] && mc.payment) paymentSum += mc.payment;
                i++;
            }
            if (paymentSum > this.paymentAmountSum) {
                $.Dlg.error('储值卡支付金额【{0}】不能大于总支付金额【{1}】'.format(paymentSum, this.paymentAmountSum));
                return false;
            }
            this.amountSumForVCard = paymentSum;
            return true;
        },
        confirmValueCardSelect() {
            if (this.calcAmountSumForValurCard()) {
                this.memberCardSelectDlg = false;
            }
        },
        doPayment() {
            if (this.paying) {
                $.Msg.info('正在支付中...');
                return;
            }
            // 检查积分
            if (this.paymentPointsSum && this.paymentPointsSum > this.memberPoints) {
                $.Msg.error('您的积分不够了');
                return;
            }
            // 检查金额
            if (this.paymentAmountSum < this.amountSumForVCard) {
                $.Dlg.error('储值卡支付金额不能大于支付总金额');
                return;
            }
            let paymentAmountForWx = $.Util.formatNum(this.paymentAmountSum - this.amountSumForVCard);
            if (paymentAmountForWx) {
                if (!this.hasWxMchId) {
                    $.Dlg.error('该商户尚未申请开通微信支付权限，您还无法使用微信支付。');
                    return;
                }
                if (!this.isInWxWeb) {
                    $.Dlg.error('请通过微信公众号进入系统，然后再通过微信支付。');
                    return;
                }
            }
            let productOrderList = [];
            for (let p of this.productList) {
                if (p.productCnt > 0) {
                    productOrderList.push({ productId: p.productId, count: p.productCnt });
                }
            }
            let paymentCards = [],
                idx = 0;
            for (let mc of this.memberCardList) {
                if (mc.payment && this.memberCardChecks[idx]) {
                    paymentCards.push({ mcId: mc.mcId, amount: mc.payment });
                }
                idx++;
            }
            if (this.orderRemark && this.orderRemark.length > 500) {
                $.Dlg.error('购买备注不能超过500字');
                return;
            }
            let args = {
                memberId: $.data.user.memberId,
                productOrderList: productOrderList,
                paymentMemberCardList: paymentCards,
                orderRemark: this.orderRemark
            };
            if (this.from && this.from === 'cart') {
                args.from = 'cart';
            }
            this.paying = true;
            $.Req.service($.SvName.MALL_ORDER_CREATE, args, ret => {
                if (ret.paymentCashAmount > 0) {
                    // 启动微信支付
                    this.callWxPay(ret.orderId, ret.wxParam);
                } else {
                    this.paying = false;
                    $.Dlg.success('订单支付成功！');
                    this.$router.push('/mall/member-mall-order');
                }
            }, true, err => {
                $.Dlg.error(err);
                this.paying = false;
            });
        },
        callWxPay(orderId, ret) {
            let args = {
                "appId": ret.appId,
                "nonceStr": ret.nonceStr,
                "package": "prepay_id={0}".format(ret.prepayId),
                "signType": ret.signType,
                "timeStamp": ret.timeStamp,
                "paySign": ret.paySign
            };
            let tradeNo = ret.tradeNo;
            WeixinJSBridge.invoke('getBrandWCPayRequest', args, res => {
                if (res.err_msg === "get_brand_wcpay_request:ok") {
                    let args2 = { tradeNo: tradeNo, orderId: orderId, from: this.from };
                    $.Req.service($.SvName.MALL_ORDER_PAY_FINISH, args2, ret => {
                        this.paying = false;
                        $.Dlg.success('订单支付成功！');
                        this.$router.push('/mall/member-mall-order');
                    });
                } else {
                    $.Dlg.error('支付失败，请稍候重试。');
                    this.paying = false;
                }
            });
        }
    }
});

/***/ }),

/***/ 1375:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            g: window.$,
            productList: null,
            productCount: null,
            isMember: $.data.user.memberId,
            checkItems: {},
            pricePointsSum: 0,
            priceAmountSum: 0,
            allChecked: false,
            checkedCnt: 0
        };
    },
    created() {
        this.queryCartProducts();
    },
    methods: {
        queryCartProducts(page = null) {
            let args = {
                memberId: $.data.user.memberId
            };
            $.Req.service($.SvName.MALL_CART_PRODUCT_QUERY, args, ret => {
                this.productList = ret.cartProductList;
                this.productCount = ret.cartProductList.length;
            }, true);
        },
        altCartProduct(productId, val, idx) {
            let args = { memberId: $.data.user.memberId, productId: productId, cnt: val };
            let prd = this.productList[idx];
            if (val < 0) {
                if (prd.productCnt + val < 0) return false;
            }
            prd.productCnt += val;
            $.Req.service($.SvName.MALL_CART_PRODUCT_ADD, args, ret => {
                if (this.checkItems[prd.mcpId]) {
                    if (prd.priceType === 0 || prd.priceType === 2) {
                        this.pricePointsSum += prd.pricePoints * val;
                    }
                    if (prd.priceType === 1 || prd.priceType === 2) {
                        this.priceAmountSum += prd.priceAmount * val;
                    }
                }
            }, true);
        },
        selectItem(idx) {
            let check = null;
            let prd = this.productList[idx];
            if (this.checkItems[prd.mcpId]) {
                check = false;
            } else {
                check = true;
            }
            if (check) {
                this.checkedCnt++;
            } else {
                this.checkedCnt--;
            }
            if (this.productList.length == this.checkedCnt) {
                this.allChecked = true;
            } else {
                this.allChecked = false;
            }
            this.$set(this.checkItems, prd.mcpId, check);
            if (prd.priceType === 0 || prd.priceType === 2) {
                if (check) this.pricePointsSum += prd.pricePoints * prd.productCnt;else this.pricePointsSum -= prd.pricePoints * prd.productCnt;
            }
            if (prd.priceType === 1 || prd.priceType === 2) {
                if (check) this.priceAmountSum = this.priceAmountSum + prd.priceAmount * prd.productCnt;else this.priceAmountSum -= prd.priceAmount * prd.productCnt;
            }
        },
        selectAll() {
            this.allChecked = !this.allChecked;
            let idx = 0;
            let pricePointsSum = 0,
                priceAmountSum = 0;
            for (let prd of this.productList) {
                this.$set(this.checkItems, prd.mcpId, this.allChecked);
                idx++;
                if (this.allChecked) {
                    if (prd.priceType === 0 || prd.priceType === 2) {
                        pricePointsSum += prd.pricePoints * prd.productCnt;
                    }
                    if (prd.priceType === 1 || prd.priceType === 2) {
                        priceAmountSum = priceAmountSum + prd.priceAmount * prd.productCnt;
                    }
                }
            }
            if (this.allChecked) this.checkedCnt = idx;else this.checkedCnt = 0;
            this.pricePointsSum = pricePointsSum;
            this.priceAmountSum = priceAmountSum;
        },
        deleteCartProducts() {
            if (!this.checkedCnt) {
                $.Msg.error('您还未选择要移出购物车的商品');
                return;
            }
            let mcpIdList = [];
            for (let id in this.checkItems) {
                if (this.checkItems[id]) {
                    mcpIdList.push(parseInt(id));
                }
            }
            let args = {
                mcpIdList: mcpIdList
            };
            $.Req.service($.SvName.MALL_CART_PRODUCT_DELETE, args, ret => {
                $.Msg.success('已成功移出购物车');
                this.queryCartProducts();
            });
        },
        settle() {
            if (!this.checkedCnt) {
                $.Msg.warning('您还没有挑选商品');
                return;
            }
            let prds = [];
            for (let prd of this.productList) {
                if (!this.checkItems[prd.mcpId]) continue;
                prds.push('{0}-{1}'.format(prd.productId, prd.productCnt));
            }
            this.$router.push('/mall/product-pay?prds={0}&from=cart'.format(prds.join(',')));
        }
    }
});

/***/ }),

/***/ 1650:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".section-part[data-v-36de230d]{border:0}.no-prd[data-v-36de230d]{margin:40px 0;text-align:center;color:#aaa}.no-prd i.none[data-v-36de230d]{font-size:80px;color:#bbb}.no-prd .btn[data-v-36de230d]{background:#fa7e17;display:block;width:200px;padding:0;line-height:34px;border-radius:17px;text-align:center;color:#fff;margin:30px auto 10px;font-size:13px}.no-prd .btn i[data-v-36de230d]{font-size:14px}.cart-prd-opt[data-v-36de230d]{height:28px;line-height:28px}.cart-prd-opt li[data-v-36de230d]{width:40px;text-align:center;padding:0}.cart-prd-opt li[data-v-36de230d]:first-child{border-radius:4px 0 0 4px}.cart-prd-opt li[data-v-36de230d]:last-child{border-radius:0 4px 4px 0}.cart-prd-opt .cnt[data-v-36de230d]{width:50px;font-size:12px;border-left:0;border-right:0}.mall-prds[data-v-36de230d]{padding-bottom:55px}.mall-prds .price div[data-v-36de230d],.mall-prds .price span[data-v-36de230d]{font-size:15px}.prds-opt[data-v-36de230d]{padding:10px;margin-bottom:1px}.prds-opt .check i[data-v-36de230d]{font-size:20px;position:relative;top:2px;padding-right:2px}.prds-opt .spt[data-v-36de230d]{padding:0 10px}.bottom-opts[data-v-36de230d]{height:58px;line-height:58px;position:fixed;bottom:0;width:100%;margin:0}.bottom-opts table[data-v-36de230d]{width:100%}.bottom-opts table td[data-v-36de230d]{padding:2px 10px;vertical-align:middle}.bottom-opts .price[data-v-36de230d]{color:#e93b3d}.bottom-opts .topay[data-v-36de230d]{display:inline-block;width:95px;line-height:34px;border-radius:17px;background:#fa7e17;text-align:center;color:#fff}", ""]);

// exports


/***/ }),

/***/ 1655:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".no-prd[data-v-3cf13a1c]{margin:40px 0;text-align:center;color:#aaa}.no-prd i.none[data-v-3cf13a1c]{font-size:80px;color:#bbb}.no-prd .btn[data-v-3cf13a1c]{background:#fa7e17;display:block;width:200px;padding:0;line-height:34px;border-radius:17px;text-align:center;color:#fff;margin:30px auto 10px;font-size:13px}.no-prd .btn i[data-v-3cf13a1c]{font-size:14px}.cart-prd-opt[data-v-3cf13a1c]{height:28px;line-height:28px;margin-top:12px}.cart-prd-opt li[data-v-3cf13a1c]{display:inline-block;width:40px;text-align:center;padding:0}.cart-prd-opt li[data-v-3cf13a1c]:first-child{border-radius:4px 0 0 4px}.cart-prd-opt li[data-v-3cf13a1c]:last-child{border-radius:0 4px 4px 0}.cart-prd-opt .cnt[data-v-3cf13a1c]{width:50px;font-size:12px;border-left:0;border-right:0}section[data-v-3cf13a1c]{margin-top:12px}section .hd .price[data-v-3cf13a1c]{color:#fe0036}section .hd b[data-v-3cf13a1c]{font-size:14px}section .cont[data-v-3cf13a1c]{padding:15px 16px}section .remark[data-v-3cf13a1c]{padding:0 16px 10px}section .remark textarea[data-v-3cf13a1c]{padding:5px;width:100%;border:0;margin-top:10px}.sum-plus[data-v-3cf13a1c]{text-align:center;width:25px;height:25px;line-height:25px;margin:0 auto;border-radius:50%;border:1px solid #ddd;background:#fff;font-size:14px;display:block}.prds-opt[data-v-3cf13a1c]{padding:0 10px;margin:0 0 10px}.prds-opt .check i[data-v-3cf13a1c]{color:#aaa;font-size:20px;position:relative;top:2px;padding-right:2px}.prds-opt .check i.on[data-v-3cf13a1c]{color:#ff7300}.prds-opt .spt[data-v-3cf13a1c]{padding:0 10px}.submit[data-v-3cf13a1c]{padding:10px;margin:30px 0 0}.submit .pay-btn[data-v-3cf13a1c]{width:100%;height:38px;line-height:38px;border-radius:2px;display:block;background:#fe0036;text-align:center;color:#fff}.check-vcard[data-v-3cf13a1c]{text-align:center;padding:10px 0 0;margin-top:10px;border-top:1px dashed #eee}.mc-sel.section-part[data-v-3cf13a1c]{padding:0 0 20px;margin:0}.mc-sel li[data-v-3cf13a1c]{margin:12px 16px 14px;border-radius:4px;padding:15px 20px}.mc-sel table[data-v-3cf13a1c]{width:100%}.mc-sel table td[data-v-3cf13a1c],.mc-sel table th[data-v-3cf13a1c]{font-size:12px;padding:0;vertical-align:top;border:0}.mc-sel .sel[data-v-3cf13a1c]{width:22px;display:inline-block;text-align:center;position:relative;top:1px;vertical-align:2px}.mc-sel .sel i[data-v-3cf13a1c]{font-size:16px}.mc-sel .sel .on[data-v-3cf13a1c]{color:#555}.mc-sel .sel i.forbideen[data-v-3cf13a1c]{color:#ddd;font-size:18px;position:relative;top:1px}.mc-sel .amnt[data-v-3cf13a1c]{padding-top:2px;width:70px;text-align:right;font-size:13px}.mc-sel .amnt div[data-v-3cf13a1c]{margin-bottom:8px}.mc-sel .card-name[data-v-3cf13a1c]{font-weight:400;font-size:14px}.mc-sel .item[data-v-3cf13a1c]{padding:8px 0 0;font-size:12px}.mc-sel .err[data-v-3cf13a1c]{color:#ff7578}.mc-sel .conf[data-v-3cf13a1c]{margin:10px 0 5px;padding:5px;width:180px}.mc-sel .conf input[data-v-3cf13a1c]{width:75px;display:inline-block;font-weight:700;border:0;font-size:13px}.vcard-submit[data-v-3cf13a1c]{margin:15px 16px 0}.vcard-submit .largest-btn[data-v-3cf13a1c]{width:100%}.vcard-submit a[data-v-3cf13a1c]{display:block;background:#2e90f7;line-height:38px;text-align:center;color:#fff}.pay-detail[data-v-3cf13a1c]{margin:0 16px}.pay-detail .tit[data-v-3cf13a1c]{text-align:center;font-weight:700;line-height:45px;margin-bottom:10px;font-size:15px}.pay-detail table[data-v-3cf13a1c]{width:100%}.pay-detail th[data-v-3cf13a1c]{text-align:left;font-weight:400}.pay-detail td[data-v-3cf13a1c],.pay-detail th[data-v-3cf13a1c]{padding:12px 0 10px}.pay-detail td[data-v-3cf13a1c]{text-align:right;width:100px;padding-left:5px;font-size:14px}.pay-detail .left-val[data-v-3cf13a1c]{font-size:12px;color:#999;margin-top:6px}.opt[data-v-3cf13a1c]{text-align:center;padding:12px 0}.no-vcard[data-v-3cf13a1c]{margin-top:30px;text-align:center}.no-vcard i.none[data-v-3cf13a1c]{font-size:70px;color:#aaa}.sum-payment[data-v-3cf13a1c]{padding:10px 0;text-align:center;margin:5px 0;font-size:12px;background:#f5f5f5;color:#666}.sum-payment .spt[data-v-3cf13a1c]{color:#ccc;padding:0 8px;font-size:11px}.bottom-remark[data-v-3cf13a1c]{margin:10px 0}.limit-sig-db .icon-radio[data-v-3cf13a1c]{vertical-align:-2px;margin-right:2px}.limit-sig-db .icon-radio[data-v-3cf13a1c]:before{margin:0 0 2px}.theme-black .sum-payment[data-v-3cf13a1c]{background:#111;color:hsla(0,0%,100%,.8)}", ""]);

// exports


/***/ }),

/***/ 1663:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".page-top-menus[data-v-3f00b490]{margin-bottom:-1px;margin-top:0}.page-top-menus li[data-v-3f00b490]{width:33.33%}.page-top-menus .theme-font-color[data-v-3f00b490]{border-bottom:1px solid #dbb76b}.theme-pink .page-top-menus .theme-font-color[data-v-3f00b490]{border-bottom:1px solid #f199bc}.no-data[data-v-3f00b490]{text-align:center;color:#aaa;padding-top:30px;font-size:12px}.no-data i[data-v-3f00b490]{font-size:40px;color:#bbb}.orders .amount-pay-types[data-v-3f00b490]{margin-top:6px;color:#999;font-size:12px}.order-remark[data-v-3f00b490]{font-size:12px;background:#f4f4f4;padding:8px;line-height:1.6}.mall-prds li.prd[data-v-3f00b490]{padding:0}.mall-prds li.prd .hd[data-v-3f00b490]{margin-bottom:15px}.mall-prds li.prd .hd .l[data-v-3f00b490]{font-weight:600;font-size:15px}.mall-prds li.prd .hd .r span[data-v-3f00b490]{color:#ff7578}.mall-prds li.prd .prd[data-v-3f00b490]{padding:0 16px 15px}.mall-prds li.prd .theme-btn-grey[data-v-3f00b490]{line-height:27px;margin-right:15px}.mall-prds .opts div[data-v-3f00b490]{height:30px;line-height:28px;border-radius:25px;padding:0 12px;font-size:13px}.mall-prds .limit-info[data-v-3f00b490]{font-weight:400;text-align:left}.mall-prds .limit-info .confirm-rev-time[data-v-3f00b490]{margin-top:3px;font-size:13px;color:#666}.mall-prds .sum[data-v-3f00b490]{text-align:right}.mall-prds .sum span[data-v-3f00b490]{font-size:14px}.theme-black .mall-prds .limit-info .confirm-rev-time[data-v-3f00b490]{color:#999}.theme-black .page-top-menus[data-v-3f00b490]{margin-bottom:0}", ""]);

// exports


/***/ }),

/***/ 1917:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1650);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("168510b7", content, true, {});

/***/ }),

/***/ 1922:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1655);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("1ae5d235", content, true, {});

/***/ }),

/***/ 1930:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1663);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("193f1e14", content, true, {});

/***/ }),

/***/ 2313:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-head', {
    attrs: {
      "title": "我的购物车"
    }
  }, [_c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/mall/product-list')
      }
    }
  }, [_vm._v("返回商城")])]), _vm._v(" "), (_vm.productCount) ? _c('div', {
    staticClass: "prds-opt section-part"
  }, [_c('span', {
    staticClass: "check",
    on: {
      "click": _vm.selectAll
    }
  }, [(_vm.allChecked) ? _c('i', {
    staticClass: "iconfont iconradio-on1 theme-font-color2"
  }) : _c('i', {
    staticClass: "iconfont iconradio-off"
  }), _vm._v("\n    全选\n  ")]), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v(" "), _c('span', {
    on: {
      "click": _vm.deleteCartProducts
    }
  }, [_vm._v("移出")])]) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "mall-prds shopping-cart"
  }, _vm._l((_vm.productList), function(p, idx) {
    return _c('li', {
      staticClass: "prd section-part row start"
    }, [_c('div', {
      staticClass: "row align-center"
    }, [_c('div', {
      staticClass: "check mr-15",
      on: {
        "click": function($event) {
          return _vm.selectItem(idx)
        }
      }
    }, [(_vm.checkItems[p.mcpId]) ? _c('i', {
      staticClass: "iconfont iconradio-on1 theme-font-color2"
    }) : _c('i', {
      staticClass: "iconfont iconradio-off"
    })]), _vm._v(" "), _c('div', {
      staticClass: "mr-15 mt-6"
    }, [_c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(p.productLogo, 100, 80, 'EEEEEE')
      },
      on: {
        "click": function($event) {
          return _vm.$router.push('/mall/product/' + p.productId)
        }
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "flex-grow-1"
    }, [_c('div', {
      staticClass: "pname row align-center start",
      on: {
        "click": function($event) {
          return _vm.$router.push('/mall/product/' + p.productId)
        }
      }
    }, [_c('span', [_vm._v(_vm._s(p.productName.shorten(30)))]), _c('i', {
      staticClass: "iconfont iconarrow-r"
    })]), _vm._v(" "), (p.productType === 0) ? _c('div', {
      staticClass: "card"
    }, [(p.cardName) ? _c('span', {
      staticClass: "card-name"
    }, [_vm._v(_vm._s(p.cardName))]) : _vm._e(), _vm._v(" "), (p.cardDays) ? _c('span', {
      staticClass: "card-days"
    }, [_vm._v(_vm._s(p.cardDays) + "天")]) : _vm._e(), _vm._v(" "), (p.cardTimes) ? _c('span', {
      staticClass: "card-times"
    }, [_vm._v(_vm._s(p.cardTimes) + "次")]) : _vm._e(), _vm._v(" "), (p.cardAmount) ? _c('span', {
      staticClass: "card-amount"
    }, [_vm._v("￥" + _vm._s(p.cardAmount))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "price row start"
    }, [_c('div', [(p.priceType === 0 || p.priceType === 2) ? [_vm._v(_vm._s(p.pricePoints) + "积分")] : _vm._e(), _vm._v(" "), (p.priceType === 2) ? _c('b', {
      staticClass: "plus"
    }, [_vm._v("＋")]) : _vm._e(), _vm._v(" "), (p.priceType === 1 || p.priceType === 2) ? [_vm._v("￥" + _vm._s(p.priceAmount) + "\n                        ")] : _vm._e()], 2)]), _vm._v(" "), _c('div', {
      staticClass: "row align-center mt-10 end"
    }, [_c('ul', {
      staticClass: "row cart-prd-opt"
    }, [_c('li', {
      staticClass: "theme-btn-bor",
      on: {
        "click": function($event) {
          return _vm.altCartProduct(p.productId, -1, idx)
        }
      }
    }, [_vm._v("-")]), _vm._v(" "), _c('li', {
      staticClass: "cnt theme-btn-bor"
    }, [_vm._v(_vm._s(p.productCnt))]), _vm._v(" "), _c('li', {
      staticClass: "theme-btn-bor",
      on: {
        "click": function($event) {
          return _vm.altCartProduct(p.productId, 1, idx)
        }
      }
    }, [_vm._v("+")])])])])])
  }), 0), _vm._v(" "), (_vm.productCount === 0) ? _c('div', {
    staticClass: "no-prd"
  }, [_c('i', {
    staticClass: "iconfont iconnone1 none"
  }), _vm._v(" "), _c('p', [_vm._v("购物车居然是空的")]), _vm._v(" "), _c('span', {
    staticClass: "btn",
    on: {
      "click": function($event) {
        return _vm.$router.push('/mall/product-list')
      }
    }
  }, [_vm._v("去挑选商品 "), _c('i', {
    staticClass: "iconfont icon-cart"
  })])]) : _vm._e(), _vm._v(" "), (_vm.productCount) ? _c('div', {
    staticClass: "bottom-opts section-part"
  }, [_c('table', [_c('tr', [_c('td', {
    attrs: {
      "align": "left"
    }
  }, [_vm._v("\n                    合计:  \n                    "), (!_vm.checkedCnt) ? [_vm._v("0")] : _vm._e(), _vm._v(" "), (_vm.pricePointsSum) ? _c('span', {
    staticClass: "price"
  }, [_vm._v(_vm._s(_vm.pricePointsSum) + " 积分")]) : _vm._e(), _vm._v(" "), (_vm.pricePointsSum && _vm.priceAmountSum) ? _c('span', [_vm._v("+")]) : _vm._e(), _vm._v(" "), (_vm.priceAmountSum) ? _c('span', {
    staticClass: "price"
  }, [_vm._v("￥" + _vm._s(_vm.g.Util.formatNum(_vm.priceAmountSum)))]) : _vm._e()], 2), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right",
      "width": "100"
    }
  }, [_c('a', {
    staticClass: "topay",
    on: {
      "click": function($event) {
        return _vm.settle()
      }
    }
  }, [_vm._v("结算 (" + _vm._s(_vm.checkedCnt) + ")")])])])])]) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2318:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vant"
  }, [_c('page-head', {
    attrs: {
      "title": "商品结算"
    }
  }, [(_vm.from === 'cart') ? _c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/mall/shopping-cart')
      }
    }
  }, [_vm._v("返回购物车")]) : (_vm.from === 'order') ? _c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/mall/member-mall-order')
      }
    }
  }, [_vm._v("返回订单")]) : _c('span', {
    staticClass: "theme-font-color",
    on: {
      "click": function($event) {
        return _vm.$router.push('/mall/product-list')
      }
    }
  }, [_vm._v("返回商城")])]), _vm._v(" "), (_vm.productCount) ? _c('div', [_c('ul', {
    staticClass: "mall-prds"
  }, _vm._l((_vm.productList), function(p, idx) {
    return _c('li', {
      staticClass: "prd section-part row start"
    }, [_c('div', {
      staticClass: "mr-15 mt-6"
    }, [_c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(p.productLogo, 100, 80, 'EEEEEE')
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "flex-grow-1"
    }, [_c('div', {
      staticClass: "pname"
    }, [_vm._v("\n                    " + _vm._s(p.productName.shorten(30)) + "\n                ")]), _vm._v(" "), (p.productType === 0) ? _c('div', {
      staticClass: "card"
    }, [(p.cardName) ? _c('span', {
      staticClass: "card-name"
    }, [_vm._v(_vm._s(p.cardName))]) : _vm._e(), _vm._v(" "), (p.cardDays) ? _c('span', {
      staticClass: "card-days"
    }, [_vm._v(_vm._s(p.cardDays) + "天")]) : _vm._e(), _vm._v(" "), (p.cardTimes) ? _c('span', {
      staticClass: "card-times"
    }, [_vm._v(_vm._s(p.cardTimes) + "次")]) : _vm._e(), _vm._v(" "), (p.cardAmount) ? _c('span', {
      staticClass: "card-amount"
    }, [_vm._v("￥" + _vm._s(p.cardAmount))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "price"
    }, [_c('div', [(p.priceType === 0 || p.priceType === 2) ? [_vm._v(_vm._s(p.pricePoints) + "积分")] : _vm._e(), _vm._v(" "), (p.priceType === 2) ? _c('b', {
      staticClass: "plus"
    }, [_vm._v("＋")]) : _vm._e(), _vm._v(" "), (p.priceType === 1 || p.priceType === 2) ? [_c('span', {
      staticClass: "medium"
    }, [_vm._v("￥")]), _vm._v(_vm._s(p.priceAmount) + "\n                    ")] : _vm._e()], 2)]), _vm._v(" "), _c('div', {
      staticClass: "row align-center mt-10 end"
    }, [(!_vm.orderId) ? _c('ul', {
      staticClass: "row cart-prd-opt"
    }, [_c('li', {
      staticClass: "theme-btn-bor",
      on: {
        "click": function($event) {
          return _vm.altProductCnt(-1, idx)
        }
      }
    }, [_vm._v("-")]), _vm._v(" "), _c('li', {
      staticClass: "cnt theme-btn-bor"
    }, [_vm._v(_vm._s(p.productCnt))]), _vm._v(" "), _c('li', {
      staticClass: "theme-btn-bor",
      on: {
        "click": function($event) {
          return _vm.altProductCnt(1, idx)
        }
      }
    }, [_vm._v("+")])]) : _c('div', [_c('span', {
      staticClass: "unitnum"
    }, [_vm._v(" × " + _vm._s(p.productCnt))])])])])])
  }), 0), _vm._v(" "), (_vm.paymentPointsSum && _vm.g.data.user.memberId) ? _c('section', [_c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("支付总积分")]), _vm._v(" "), _c('div', {
    staticClass: "r price"
  }, [_c('b', [_vm._v(_vm._s(_vm.paymentPointsSum))]), _vm._v(" 分")])]), _vm._v(" "), _c('div', {
    staticClass: "cont"
  }, [_vm._v("\n              我当前有 "), _c('span', {
    staticClass: "orange"
  }, [_vm._v(_vm._s(_vm.memberPoints))]), _vm._v(" 积分，\n              "), (_vm.memberPoints > _vm.paymentPointsSum) ? [_vm._v("支付后剩余 " + _vm._s(_vm.memberPoints - _vm.paymentPointsSum) + " 分")] : _c('span', {
    staticClass: "red"
  }, [_vm._v("积分不够用了~")])], 2)]) : _vm._e(), _vm._v(" "), (_vm.paymentAmountSum && _vm.g.data.user.memberId) ? _c('section', [_c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("支付总金额")]), _vm._v(" "), _c('div', {
    staticClass: "r price"
  }, [_vm._v("￥"), _c('b', [_vm._v(_vm._s(_vm.g.Util.formatNum(_vm.paymentAmountSum)))])])]), _vm._v(" "), _c('div', {
    staticClass: "pay-detail"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _c('tr', {
    staticClass: "theme-border-bottom"
  }, [_c('th', {}, [_vm._v("微信支付")]), _vm._v(" "), _c('td', {
    staticClass: "theme-font-color"
  }, [_vm._v("￥" + _vm._s((_vm.paymentAmountSum > _vm.amountSumForVCard) ?
    _vm.g.Util.formatNum(_vm.paymentAmountSum - _vm.amountSumForVCard) : 0) + "\n                      ")])]), _vm._v(" "), _vm._l((_vm.memberCardList), function(mc, idx) {
    return (_vm.memberCardChecks[idx] && mc.payment) ? _c('tr', {
      staticClass: "theme-border-bottom"
    }, [_c('th', [_vm._v(_vm._s(mc.cardName))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(mc.payment))])]) : _vm._e()
  })], 2)]), _vm._v(" "), (_vm.allowPayByValueCard) ? _c('div', {
    staticClass: "opt theme-font-color",
    staticStyle: {
      "padding-bottom": "10px"
    },
    on: {
      "click": function($event) {
        _vm.memberCardSelectDlg = true
      }
    }
  }, [_vm._v("\n            设置储值卡支付金额\n          ")]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('section', [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "remark"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.orderRemark),
      expression: "orderRemark"
    }],
    attrs: {
      "rows": "5"
    },
    domProps: {
      "value": (_vm.orderRemark)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.orderRemark = $event.target.value
      }
    }
  })])]), _vm._v(" "), (_vm.g.data.user.memberId) ? [(_vm.paymentPointsSum && _vm.paymentPointsSum > _vm.memberPoints) ? _c('div', {
    staticClass: "red theme-padding"
  }, [_vm._v("会员积分不足")]) : _c('div', {
    staticClass: "largest-btn theme-btn-bg mt-15",
    on: {
      "click": function($event) {
        return _vm.doPayment()
      }
    }
  }, [_vm._v("立即支付")]), _vm._v(" "), _c('div', {
    staticClass: "bottom-remark"
  }, [_vm._m(2), _vm._v(" "), _c('ul', [(!_vm.hasWxMchId) ? _c('li', [_vm._v("该商户尚未申请开通微信支付，无法使用微信支付")]) : _vm._e(), _vm._v(" "), _c('li', [_vm._v("支付费用将直接入账您办会员的门店【" + _vm._s(_vm.g.data.shop.shopName) + "】")]), _vm._v(" "), _vm._m(3)])])] : _c('section', {
    staticClass: "center red allpadding"
  }, [_vm._v("\n          您不是会员，不能购买商品\n      ")])], 2) : _vm._e(), _vm._v(" "), (_vm.productCount === 0) ? _c('div', {
    staticClass: "no-prd"
  }, [_c('i', {
    staticClass: "iconfont iconnone1 none"
  }), _vm._v(" "), _c('p', [_vm._v("居然是空的")]), _vm._v(" "), _c('span', {
    staticClass: "btn",
    on: {
      "click": function($event) {
        return _vm.$router.push('/mall/product-list')
      }
    }
  }, [_vm._v("去挑选商品 "), _c('i', {
    staticClass: "iconfont icon-cart"
  })])]) : _vm._e(), _vm._v(" "), _c('van-popup', {
    style: ({
      height: '100%',
      width: '100%'
    }),
    attrs: {
      "position": "right"
    },
    model: {
      value: (_vm.memberCardSelectDlg),
      callback: function($$v) {
        _vm.memberCardSelectDlg = $$v
      },
      expression: "memberCardSelectDlg"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move"
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l",
    on: {
      "click": function($event) {
        _vm.memberCardSelectDlg = false
      }
    }
  })]), _vm._v("\n      储值卡支付设置\n    ")]), _vm._v(" "), (_vm.memberCardList && _vm.memberCardList.length > 0) ? _c('div', {
    staticClass: "mc-sel section-part"
  }, [_c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("请选择储值卡并设置支付金额")])]), _vm._v(" "), _c('ul', _vm._l((_vm.memberCardList), function(mc, idx) {
    return _c('li', {
      staticClass: "theme-card-bg",
      class: {
        'disable': !mc.usable
      }
    }, [_c('table', [_c('tr', [_c('td', [_c('div', {
      staticClass: "card-name limit-sig-db"
    }, [(mc.usable) ? _c('span', {
      staticClass: "sel",
      on: {
        "click": function($event) {
          return _vm.checkMemberCard(idx)
        }
      }
    }, [(_vm.memberCardChecks[idx]) ? _c('i', {
      staticClass: "icon-radio icon-radio-on"
    }) : _c('i', {
      staticClass: "icon-radio"
    })]) : _c('span', {
      staticClass: "sel"
    }, [_c('i', {
      staticClass: "iconfont iconforbidden forbideen"
    })]), _vm._v("\n                  " + _vm._s(mc.cardName) + "\n                ")]), _vm._v(" "), (mc.beginDate && mc.endDate) ? _c('div', {
      staticClass: "item font-color-6"
    }, [_vm._v("\n                  有效期：" + _vm._s(_vm.g.Util.formatDate(mc.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(mc.endDate)) + "\n                ")]) : _vm._e(), _vm._v(" "), (mc.selectCardErr) ? _c('div', {
      staticClass: "err item"
    }, [_vm._v(_vm._s(mc.selectCardErr))]) : _vm._e(), _vm._v(" "), (_vm.memberCardChecks[idx]) ? _c('div', {
      staticClass: "conf"
    }, [_vm._v("\n                  ￥"), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: (mc.payment),
        expression: "mc.payment",
        modifiers: {
          "number": true
        }
      }],
      attrs: {
        "type": "number"
      },
      domProps: {
        "value": (mc.payment)
      },
      on: {
        "blur": [function($event) {
          return _vm.changeMcPayment(mc)
        }, function($event) {
          return _vm.$forceUpdate()
        }],
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.$set(mc, "payment", _vm._n($event.target.value))
        }
      }
    }), _vm._v("\n                  ← 支付金额\n                ")]) : _vm._e()]), _vm._v(" "), _c('td', {
      staticClass: "amnt"
    }, [_c('div', {}, [_vm._v("余额")]), _vm._v("\n                ￥" + _vm._s(mc.currentAmount) + "\n              ")])])])])
  }), 0), _vm._v(" "), (_vm.memberCardList && _vm.memberCardList.length > 0) ? _c('div', [_c('div', {
    staticClass: "sum-payment"
  }, [_vm._v("\n          支付总金额：￥" + _vm._s(_vm.g.Util.formatNum(_vm.paymentAmountSum)) + "\n          "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v("\n          储值卡支付合计：￥" + _vm._s(_vm.amountSumForVCard) + "\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "vcard-submit"
  }, [_c('div', {
    staticClass: "largest-btn theme-btn-bg mt-20",
    on: {
      "click": _vm.confirmValueCardSelect
    }
  }, [_vm._v("确定")]), _vm._v(" "), _c('p', {
    staticClass: "theme-btn-bor largest-btn mt-15",
    on: {
      "click": function($event) {
        return _vm.queryMemberValueCards(1)
      }
    }
  }, [_vm._v("刷新")])])]) : _c('div', {
    staticClass: "no-vcard"
  }, [_c('p', [_c('i', {
    staticClass: "iconfont iconnone0 none"
  })]), _vm._v("\n        您并没有储值卡，何不趁机买几张？\n        "), _c('div', {
    staticClass: "p15"
  }, [_c('a', {
    staticClass: "theme-font-color",
    on: {
      "click": function($event) {
        return _vm.$router.push('/card-list')
      }
    }
  }, [_vm._v("在线购卡")]), _vm._v(" "), _c('span', {
    staticClass: "spt theme-font-color"
  }, [_vm._v(" | ")]), _vm._v(" "), _c('a', {
    staticClass: "theme-font-color",
    on: {
      "click": function($event) {
        return _vm.$router.push('/mall/product-list')
      }
    }
  }, [_vm._v("微商城购卡")])])])]) : _vm._e()])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', {
    staticClass: "theme-border-bottom"
  }, [_c('th', {
    staticClass: "gray"
  }, [_vm._v("支付渠道")]), _vm._v(" "), _c('td', {
    staticClass: "gray"
  }, [_c('span', [_vm._v("支付金额")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd theme-border-bottom"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("购买备注")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', {
    staticClass: "theme-font-color2"
  }, [_c('i', {
    staticClass: "iconfont iconinfo big"
  }), _vm._v("备注")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_vm._v("支付成功后，商品购买将立即生效（如3分钟后还未生效，请及时联系软件服务商【健总管 # "), _c('a', {
    staticClass: "theme-font-color2",
    attrs: {
      "href": "tel:025-66045495"
    }
  }, [_vm._v("025-66045495")]), _vm._v("】")])
}]}

/***/ }),

/***/ 2326:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-head', {
    attrs: {
      "title": "微商城订单"
    }
  }, [_c('div', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/mall/shopping-cart')
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconcart theme-font-color"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "theme-border-bottom"
  }, [_c('ul', {
    staticClass: "page-top-menus section-part",
    staticStyle: {
      "border": "0",
      "border-radius": "0",
      "margin": "0"
    }
  }, [_c('li', {
    class: {
      'theme-font-color': _vm.query.status === null
    },
    on: {
      "click": function($event) {
        return _vm.changeStatus(null)
      }
    }
  }, [_vm._v("全部")]), _vm._v(" "), _c('li', {
    class: {
      'theme-font-color': _vm.query.status === 9
    },
    on: {
      "click": function($event) {
        return _vm.changeStatus(9)
      }
    }
  }, [_c('span', [_vm._v("已支付")])]), _vm._v(" "), _c('li', {
    class: {
      'theme-font-color': _vm.query.status === 0
    },
    on: {
      "click": function($event) {
        return _vm.changeStatus(0)
      }
    }
  }, [_c('span', [_vm._v("未支付")])])])]), _vm._v(" "), _c('ul', {
    staticClass: "mall-prds"
  }, _vm._l((_vm.orderList), function(o) {
    return _c('li', {
      staticClass: "prd section-part"
    }, [_c('div', {
      staticClass: "hd theme-border-bottom"
    }, [_c('div', {
      staticClass: "l"
    }, [_vm._v(_vm._s(o.createTime))]), _vm._v(" "), _c('div', {
      staticClass: "r"
    }, [(o.status === 9) ? _c('span', {}, [_vm._v("已支付")]) : _vm._e(), _vm._v(" "), (o.status === 0) ? _c('span', {}, [_vm._v("未支付")]) : _vm._e()])]), _vm._v(" "), _vm._l((o.productList), function(p) {
      return _c('div', {
        staticClass: "prd"
      }, [_c('div', {
        staticClass: "row start"
      }, [_c('div', {
        staticClass: "mr-15 mt-6"
      }, [_c('img', {
        attrs: {
          "src": _vm.g.Util.getImgUrl(p.productLogo, 100, 80, 'EEEEEE')
        }
      })]), _vm._v(" "), _c('div', {
        staticClass: "flex-grow-1"
      }, [_c('div', {
        staticClass: "pname row align-center start"
      }, [_c('span', [_vm._v(_vm._s(p.productName.shorten(30)))])]), _vm._v(" "), _c('div', {
        staticClass: "price"
      }, [_c('div', [_vm._v("\n                                   " + _vm._s(p.unitNum) + " ×   "), (p.priceType === 0 || p.priceType === 2) ? [_vm._v(_vm._s(p.pricePoints) + "积分")] : _vm._e(), _vm._v(" "), (p.priceType === 2) ? _c('b', {
        staticClass: "plus"
      }, [_vm._v("＋")]) : _vm._e(), _vm._v(" "), (p.priceType === 1 || p.priceType === 2) ? [_c('span', {
        staticClass: "medium"
      }, [_vm._v("￥")]), _vm._v(_vm._s(p.priceAmount))] : _vm._e()], 2), _vm._v(" "), _c('div', {
        staticClass: "limit-info"
      }, [(p.productType > 0) ? [(p.consigneeTime) ? _c('div', {
        staticClass: "confirm-rev-time"
      }, [_vm._v("\n                                         " + _vm._s(p.consigneeTime) + " 领取\n                                       ")]) : _c('div', {
        staticClass: "opts row end"
      }, [_c('div', {
        staticClass: "theme-btn-bor theme-font-color",
        on: {
          "click": function($event) {
            return _vm.confirmProductReceipt(p.mopId)
          }
        }
      }, [_vm._v("确认领取")])])] : _vm._e()], 2)])])])])
    }), _vm._v(" "), _c('div', {
      staticClass: "prd",
      staticStyle: {
        "padding-top": "0"
      }
    }, [(o.remark) ? _c('div', {
      staticClass: "row end mb-10"
    }, [_c('div', {
      staticClass: "mr-15",
      staticStyle: {
        "text-align": "right",
        "width": "100px"
      }
    }, [_vm._v("\n                            购买备注\n                        ")]), _vm._v(" "), _c('div', {
      staticClass: "flex-grow-1 font-color-9"
    }, [_vm._v("\n                            " + _vm._s(o.remark) + "\n                        ")])]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "row end sum"
    }, [_c('span', {
      staticClass: "font-color-9"
    }, [_vm._v("共" + _vm._s(o.productUnitNum) + "件商品，")]), _vm._v(" "), _c('span', {
      staticClass: "total"
    }, [_vm._v("合计: \n                           "), (o.paymentPoints) ? [_vm._v(_vm._s(o.paymentPoints) + " 积分")] : _vm._e(), _vm._v(" "), (o.paymentPoints && o.paymentAmount) ? _c('span', [_vm._v("＋")]) : _vm._e(), _vm._v(" "), (o.paymentAmount) ? [_vm._v("￥" + _vm._s(o.paymentAmount))] : _vm._e()], 2)]), _vm._v(" "), (o.paymentAmount) ? _c('div', {
      staticClass: "row end mt-6 sum"
    }, [(o.status === 9) ? [(o.paymentCardAmount || o.paymentCashAmount) ? _c('div', {}, [_c('span', {
      staticClass: "font-color-9"
    }, [_vm._v("\n                            金额支付方式：\n                               "), (o.paymentCardAmount) ? [_vm._v("储值卡￥" + _vm._s(o.paymentCardAmount))] : _vm._e(), _vm._v(" "), (o.paymentCardAmount && o.paymentCashAmount) ? [_vm._v("+")] : _vm._e(), _vm._v(" "), (o.paymentCashAmount) ? [_vm._v("微信付￥" + _vm._s(o.paymentCashAmount))] : _vm._e()], 2)]) : _vm._e()] : _vm._e()], 2) : _vm._e(), _vm._v(" "), (o.paymentAmount && o.status === 0) ? _c('div', {
      staticClass: "row align-center end mt-10"
    }, [_c('ul', {
      staticClass: "opts row"
    }, [_c('li', {
      staticClass: "btn theme-btn-grey",
      on: {
        "click": function($event) {
          return _vm.deleteOrder(o)
        }
      }
    }, [_vm._v("删除订单")]), _vm._v(" "), _c('li', {
      staticClass: "btn theme-btn-bg",
      on: {
        "click": function($event) {
          return _vm.gotoPayment(o)
        }
      }
    }, [_vm._v("立即支付")])])]) : _vm._e()])], 2)
  }), 0), _vm._v(" "), (_vm.orderList && !_vm.orderList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_c('i', {
    staticClass: "iconnone0 iconfont"
  }), _vm._v(" "), _c('p', [_vm._v("暂无数据")])]) : _vm._e(), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "show-slogan": false,
      "menu": "my"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 821:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1930)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1371),
  /* template */
  __webpack_require__(2326),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3f00b490",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 823:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1922)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1373),
  /* template */
  __webpack_require__(2318),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3cf13a1c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 825:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1917)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1375),
  /* template */
  __webpack_require__(2313),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-36de230d",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});