webpackJsonp([21],{

/***/ 1372:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			g: window.$,
			orderTypesWithSimple: ['默认', '积分 ↑', '积分 ↓', '金额 ↑', '金额 ↓'],
			orderTypesWithDetail: ['默认', '积分从小到大', '积分从大到小', '金额从小到大', '金额从大到小'],
			productList: null,
			productCount: null,
			productCateList: null,
			isMember: $.data.user.memberId,
			query: {
				cateId: null,
				productType: null,
				priceType: null,
				pricePointsBegin: null,
				pricePointsEnd: null,
				priceAmountBegin: null,
				priceAmountEnd: null,
				orderType: null
			},
			nav: {
				show: false,
				idx: null,
				cateDlg: false,
				cateName: null,
				priceTypeDlg: false,
				orderTypeDlg: false,
				moreQueryDlg: false
			},
			memberPoints: null
		};
	},
	created() {
		this.queryProducts();
		this.queryCateList();
		if (this.isMember) {
			this.queryMemberPoints();
		}
	},
	methods: {
		queryMemberPoints() {
			let args = { memberId: $.data.user.memberId, needCurrentPoints: true };
			$.Req.service($.SvName.MEMBER_POINTS_QUERY, args, ret => {
				this.memberPoints = ret.points;
			});
		},
		queryCateList() {
			let args = { needBase: true };
			$.Req.service($.SvName.MALL_PRODUCT_CATE_QUERY, args, ret => {
				this.productCateList = ret.productCateList;
			});
		},
		queryProducts(page = null) {
			if (!page) this.productCount = null;
			let args = {
				page: page,
				status: 0,
				hasStock: true,
				needLogo: true
			};
			if (this.query.cateId) args.cateId = this.query.cateId;
			if ($.Util.isNotEmpty(this.query.productType)) args.productType = this.query.productType;
			if ($.Util.isNotEmpty(this.query.priceType)) args.priceType = this.query.priceType;
			if ($.Util.isNotEmpty(this.query.pricePointsBegin)) args.pricePointsBegin = this.query.pricePointsBegin;
			if ($.Util.isNotEmpty(this.query.pricePointsEnd)) args.pricePointsEnd = this.query.pricePointsEnd;
			if ($.Util.isNotEmpty(this.query.priceAmountBegin)) args.priceAmountBegin = this.query.priceAmountBegin;
			if ($.Util.isNotEmpty(this.query.priceAmountEnd)) args.priceAmountEnd = this.query.priceAmountEnd;
			if ($.Util.isNotEmpty(args.pricePointsBegin) && $.Util.isEmpty(args.pricePointsEnd) || $.Util.isEmpty(args.pricePointsBegin) && $.Util.isNotEmpty(args.pricePointsEnd)) {
				$.Msg.error('请输入完整的积分区间');
				return;
			}
			if (args.priceAmountBegin && !args.priceAmountEnd || !args.priceAmountBegin && args.priceAmountEnd) {
				$.Msg.error('请输入完整的金额区间');
				return;
			}
			// ['默认', '积分 ↑', '积分 ↓', '金额 ↑', '金额 ↓']
			if (this.query.orderType === 1) {
				args.orderBy = 'price_points';
				args.sortType = 'asc';
			} else if (this.query.orderType === 2) {
				args.orderBy = 'price_points';
				args.sortType = 'desc';
			} else if (this.query.orderType === 3) {
				args.orderBy = 'price_amount';
				args.sortType = 'asc';
			} else if (this.query.orderType === 4) {
				args.orderBy = 'price_amount';
				args.sortType = 'desc';
			}
			if (this.nav.moreQueryDlg) {
				this.nav.moreQueryDlg = false;
			}
			this.nav.show = false;
			$.Req.service($.SvName.MALL_PRODUCT_QUERY, args, ret => {
				if (!page) {
					this.productCount = ret.count;
				}
				this.productList = ret.productList;
			}, true);
		},
		resetQuery() {
			this.query.status = null;
			this.query.cateId = null;
			this.query.productType = null;
			this.query.priceType = null;
			this.query.pricePointsBegin = null;
			this.query.pricePointsEnd = null;
			this.query.priceAmountBegin = null;
			this.query.priceAmountEnd = null;
		},
		chooseCate(cateId, cateName) {
			this.query.cateId = cateId;
			this.nav.cateName = cateName ? cateName.shorten(4) : null;
			this.queryProducts(null);
			this.nav.show = false;
		},
		choosePriceType(priceType) {
			this.query.priceType = priceType;
			this.queryProducts(null);
			this.nav.show = false;
		},
		chooseOrderType(orderType) {
			this.query.orderType = orderType;
			this.queryProducts(null);
			this.nav.show = false;
		},
		queryProductsByPoints(points) {
			this.resetQuery();
			this.query.pricePointsBegin = 1;
			this.query.pricePointsEnd = points;
			this.queryProducts(null);
			this.nav.show = false;
		},
		addToShoppingCart(productId) {
			let args = { memberId: $.data.user.memberId, productId: productId, cnt: 1 };
			$.Req.service($.SvName.MALL_CART_PRODUCT_ADD, args, ret => {
				$.Msg.success('加入成功<br/>在购物车等亲~');
			});
		},
		preparePay(productId) {
			this.$router.push('/mall/product-pay?prds={0}-1'.format(productId));
		},
		openNav(idx) {
			this.nav.show = true;
			this.nav.idx = idx;
		},
		openChoseMore(idx) {
			this.nav.show = false;
			this.nav.idx = null;
		}
	}
});

/***/ }),

/***/ 1374:
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
    data() {
        return {
            g: window.$,
            productId: this.$route.params.productId,
            p: null,
            productImgList: null,
            notFoundPrd: null
        };
    },
    created() {
        this.queryProduct();
    },
    methods: {
        queryProduct() {
            let args = { productId: this.productId };
            $.Req.service($.SvName.MALL_PRODUCT_QUERY, args, ret => {
                this.p = ret.product;
                if (this.p) {
                    if (this.p.productImgs) {
                        this.productImgList = this.p.productImgs.split(',');
                    }
                } else {
                    this.notFoundPrd = true;
                }
            });
        },
        addToShoppingCart() {
            let args = { memberId: $.data.user.memberId, productId: this.p.productId, cnt: 1 };
            $.Req.service($.SvName.MALL_CART_PRODUCT_ADD, args, ret => {
                $.Msg.success('加入成功，在购物车等亲~');
            });
        },
        preparePay() {
            this.$router.push('/mall/product-pay?prds={0}-1'.format(this.productId));
        }
    }
});

/***/ }),

/***/ 1658:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".prd[data-v-3dbb7a97]{margin-top:-10px;padding-bottom:50px}.prd .prd-logo img[data-v-3dbb7a97]{width:100%;display:block}.prd .base[data-v-3dbb7a97]{padding:10px 20px;margin-bottom:1px;border:0}.prd .base .pname[data-v-3dbb7a97]{padding:5px 0;font-size:15px}.prd .base .price[data-v-3dbb7a97]{padding-top:0;font-size:20px}.prd .desc[data-v-3dbb7a97]{padding:10px 20px;border:0}.prd .desc pre[data-v-3dbb7a97]{font-size:13px;line-height:1.8}.prd .imgs img[data-v-3dbb7a97]{width:100%;display:block;margin:0}.bottom-opts[data-v-3dbb7a97]{position:fixed;bottom:0;background:#ddd;line-height:45px;width:100%}.bottom-opts ul[data-v-3dbb7a97]{line-height:45px}.bottom-opts li[data-v-3dbb7a97]{float:left;width:50%;text-align:center;color:#fff}.bottom-opts .fav[data-v-3dbb7a97]{background:#fe9402}.bottom-opts .buy[data-v-3dbb7a97]{background:#fe0036}", ""]);

// exports


/***/ }),

/***/ 1704:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(769)(false);
// imports


// module
exports.push([module.i, ".tblform input[data-v-508ec6c4]{padding:4px 6px 6px;text-align:left;border-radius:5px;color:#333}.tblform input[data-v-508ec6c4]::placeholder{color:#ccc}.tblform .row[data-v-508ec6c4]{padding:0}.tblform li[data-v-508ec6c4]{margin:0}.tblform .wid30[data-v-508ec6c4]{width:80px}.filter-dlg-btn[data-v-508ec6c4]{position:fixed;bottom:0;right:0;width:100%;border-radius:2px 2px 0 0}.filter-dlg-btn div[data-v-508ec6c4]{width:50%;height:40px;line-height:40px;text-align:center;border-radius:0 2px 0 0}.filter-dlg-btn .reset[data-v-508ec6c4]{background:#fff;border-radius:2px 0 0 0}.section-part[data-v-508ec6c4]{border:0}.no-prd[data-v-508ec6c4]{margin:40px 0;text-align:center;color:#aaa}.no-prd i.none[data-v-508ec6c4]{font-size:80px;color:#bbb}.no-prd .note[data-v-508ec6c4]{width:268px;background:#e5e5e5;margin:50px auto 10px;padding:6px 10px 4px;border-radius:6px;color:#999;line-height:1.8}.no-prd .note table[data-v-508ec6c4]{width:100%}.no-prd .note td[data-v-508ec6c4]{font-size:12px;vertical-align:middle;text-align:left;padding-left:8px}.no-prd .note i[data-v-508ec6c4]{display:block;font-size:28px;color:#ad9567;font-weight:400}.nav[data-v-508ec6c4]{margin:0;margin-bottom:1px}.nav ul[data-v-508ec6c4]{padding:10px 20px}.nav li[data-v-508ec6c4]{float:left;text-align:center;font-size:12px}.nav li[data-v-508ec6c4]:last-child{border:0}.nav li.border[data-v-508ec6c4]{border-left:1px solid #ddd}.nav .iconarrow-down-1[data-v-508ec6c4],.nav .iconfilter[data-v-508ec6c4]{font-size:12px}.dlg-items[data-v-508ec6c4]{margin:0}.dlg-items ul[data-v-508ec6c4]{padding-left:20px}.dlg-items ul li[data-v-508ec6c4]{padding:12px 0}.dlg-items ul li[data-v-508ec6c4]:last-child{border:0}.dlg-items .section-part[data-v-508ec6c4]{margin:0}.dlg-item-list li[data-v-508ec6c4]{display:block;padding:12px 0;text-align:center;border-bottom:1px solid #e4e4e4}.dlg-item-list li[data-v-508ec6c4]:last-child{border-bottom:0}.filter-dlg[data-v-508ec6c4]{padding:5px 15px 10px}.filter-dlg li[data-v-508ec6c4]{margin-bottom:15px}.filter-dlg li h2[data-v-508ec6c4]{padding:0 0 10px;margin:0}.filter-dlg li .spt[data-v-508ec6c4]{padding:0 5px;font-size:15px}.filter-dlg .input[data-v-508ec6c4]{width:60px;border-radius:3px;text-align:center;border:none;padding:8px 5px;font-size:13px}.filter-dlg-opt[data-v-508ec6c4]{position:fixed;bottom:0;width:100%;height:45px;line-height:45px;text-align:center}.my-points a[data-v-508ec6c4]{font-size:12px}.limit-info[data-v-508ec6c4]{color:#999;font-weight:400}.limit-info li[data-v-508ec6c4]{margin-right:12px;font-size:12px;display:inline-block}.limit-info li[data-v-508ec6c4]:first-child{margin-right:5px}.limit-info li i[data-v-508ec6c4]{font-size:14px}.theme-black .filter-dlg-btn div[data-v-508ec6c4]{width:50%}.theme-black .filter-dlg-btn .reset[data-v-508ec6c4]{background:#111}.theme-black .center[data-v-508ec6c4]{color:#fff}", ""]);

// exports


/***/ }),

/***/ 1925:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1658);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("778d1dd7", content, true, {});

/***/ }),

/***/ 1971:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1704);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(770)("baf55110", content, true, {});

/***/ }),

/***/ 2321:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mall-prds"
  }, [_c('page-head', {
    attrs: {
      "title": "商品详情"
    }
  }, [(_vm.g.data.user.memberId) ? _c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/mall/shopping-cart')
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-cart bigger orangered"
  })]) : _c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/mall/product-list')
      }
    }
  }, [_vm._v("返回商城")])]), _vm._v(" "), (_vm.p) ? _c('div', {
    staticClass: "prd"
  }, [_c('div', {
    staticClass: "prd-logo"
  }, [(_vm.p.productLogo) ? _c('img', {
    attrs: {
      "src": _vm.g.Util.getImgUrl(_vm.p.productLogo)
    }
  }) : _vm._e()]), _vm._v(" "), _c('section', {
    staticClass: "base full-sec"
  }, [_c('div', {
    staticClass: "price"
  }, [_c('div', [(_vm.p.priceType === 0 || _vm.p.priceType === 2) ? [_vm._v(_vm._s(_vm.p.pricePoints) + "积分")] : _vm._e(), _vm._v(" "), (_vm.p.priceType === 2) ? _c('b', {
    staticClass: "plus"
  }, [_vm._v("＋")]) : _vm._e(), _vm._v(" "), (_vm.p.priceType === 1 || _vm.p.priceType === 2) ? [_vm._v("￥" + _vm._s(_vm.p.priceAmount) + " ")] : _vm._e()], 2)]), _vm._v(" "), _c('div', {
    staticClass: "pname"
  }, [_vm._v("\n              " + _vm._s(_vm.p.productName) + "\n          ")]), _vm._v(" "), (_vm.p.productType === 0) ? _c('div', {
    staticClass: "card"
  }, [(_vm.p.cardName) ? _c('span', {
    staticClass: "card-name"
  }, [_vm._v(_vm._s(_vm.p.cardName))]) : _vm._e(), _vm._v(" "), (_vm.p.cardDays) ? _c('span', {
    staticClass: "card-days"
  }, [_vm._v(_vm._s(_vm.p.cardDays) + "天")]) : _vm._e(), _vm._v(" "), (_vm.p.cardTimes) ? _c('span', {
    staticClass: "card-times"
  }, [_vm._v(_vm._s(_vm.p.cardTimes) + _vm._s(_vm.g.Dict.CardUnitName[_vm.p.cardType]))]) : _vm._e(), _vm._v(" "), (_vm.p.cardAmount) ? _c('span', {
    staticClass: "card-amount"
  }, [_vm._v("￥" + _vm._s(_vm.p.cardAmount))]) : _vm._e()]) : _vm._e()]), _vm._v(" "), (_vm.p.productDesc) ? _c('section', {
    staticClass: "desc full-sec"
  }, [_c('pre', [_vm._v(_vm._s(_vm.p.productDesc))])]) : _vm._e(), _vm._v(" "), _c('section', {
    staticClass: "imgs full-sec"
  }, _vm._l((_vm.productImgList), function(img) {
    return _c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(img)
      }
    })
  }), 0)]) : _vm._e(), _vm._v(" "), (_vm.notFoundPrd) ? _c('div', [_c('div', {
    staticClass: "center desc"
  }, [_vm._v("该商品不存在了")])]) : _vm._e(), _vm._v(" "), (_vm.g.data.user.memberId) ? _c('div', {
    staticClass: "bottom-opts"
  }, [_c('ul', [_c('li', {
    staticClass: "fav",
    on: {
      "click": function($event) {
        return _vm.addToShoppingCart()
      }
    }
  }, [_vm._v("加入购物车")]), _vm._v(" "), _c('li', {
    staticClass: "buy",
    on: {
      "click": function($event) {
        return _vm.preparePay()
      }
    }
  }, [_vm._v("立即购买")])])]) : _c('bottom-nav', {
    attrs: {
      "show-slogan": false
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2366:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vant"
  }, [_c('page-head', {
    attrs: {
      "title": "微商城"
    }
  }, [(_vm.isMember) ? _c('div', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/mall/shopping-cart')
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconcart theme-font-color"
  })]) : _vm._e()]), _vm._v(" "), _c('section', {
    staticClass: "nav full-sec"
  }, [_c('ul', {
    staticClass: "row"
  }, [_c('li', {
    on: {
      "click": function($event) {
        return _vm.openNav(0)
      }
    }
  }, [(_vm.nav.cateName) ? [_vm._v(_vm._s(_vm.nav.cateName))] : [_vm._v("商品类别")], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1"
  })], 2), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        return _vm.openNav(1)
      }
    }
  }, [(_vm.g.Util.isEmpty(_vm.query.priceType)) ? [_vm._v("价格类型")] : [_vm._v(_vm._s(_vm.g.Dict.MallProductPriceTypes[_vm.query.priceType]))], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1"
  })], 2), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        return _vm.openNav(2)
      }
    }
  }, [(!_vm.query.orderType) ? [_vm._v("排序方式 "), _c('i', {
    staticClass: "iconfont iconarrow-down-1"
  })] : [_vm._v(_vm._s(_vm.orderTypesWithSimple[_vm.query.orderType]))]], 2), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        _vm.nav.moreQueryDlg = true, _vm.nav.show = true
      }
    }
  }, [_vm._m(0)])])]), _vm._v(" "), _c('ul', {
    staticClass: "mall-prds"
  }, _vm._l((_vm.productList), function(p) {
    return _c('li', {
      staticClass: "prd section-part row start"
    }, [_c('div', {
      staticClass: "mr-15 mt-6"
    }, [_c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(p.productLogo, 800, 800, 'EEEEEE'),
        "width": "80"
      },
      on: {
        "click": function($event) {
          return _vm.$router.push('/mall/product/' + p.productId)
        }
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "flex-grow-1"
    }, [_c('div', {
      staticClass: "pname row align-center start",
      on: {
        "click": function($event) {
          return _vm.$router.push('/mall/product/' + p.productId)
        }
      }
    }, [_c('span', [_vm._v(_vm._s(p.productName.shorten(30)))]), _c('i', {
      staticClass: "iconfont iconarrow-r font-color-c"
    })]), _vm._v(" "), (p.productType === 0) ? _c('div', {
      staticClass: "card"
    }, [(p.cardName) ? _c('span', {
      staticClass: "card-name"
    }, [_vm._v(_vm._s(p.cardName))]) : _vm._e(), _vm._v(" "), (p.cardDays) ? _c('span', {
      staticClass: "card-days"
    }, [_vm._v(_vm._s(p.cardDays) + "天")]) : _vm._e(), _vm._v(" "), (p.cardTimes) ? _c('span', {
      staticClass: "card-times"
    }, [_vm._v(_vm._s(p.cardTimes) + _vm._s(_vm.g.Dict.CardUnitName[p.cardType]))]) : _vm._e(), _vm._v(" "), (p.cardAmount) ? _c('span', {
      staticClass: "card-amount"
    }, [_vm._v("￥" + _vm._s(p.cardAmount))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "price"
    }, [_c('div', [(p.priceType === 0 || p.priceType === 2) ? [_vm._v(_vm._s(p.pricePoints) + " 积分")] : _vm._e(), _vm._v(" "), (p.priceType === 2) ? _c('b', {
      staticClass: "plus"
    }, [_vm._v("＋")]) : _vm._e(), _vm._v(" "), (p.priceType === 1 || p.priceType === 2) ? [_vm._v("￥" + _vm._s(p.priceAmount) + "\n\t\t\t\t\t\t\t")] : _vm._e()], 2), _vm._v(" "), _c('div', {}, [(p.limitBuyTimes || p.limitBuyNum) ? _c('ul', {
      staticClass: "limit-info"
    }, [(p.limitBuyTimes) ? _c('li', [_vm._v("限购" + _vm._s(p.limitBuyTimes) + "次")]) : _vm._e(), _vm._v(" "), (p.limitBuyNum) ? _c('li', [_vm._v("（限购" + _vm._s(p.limitBuyNum) + "件/次）")]) : _vm._e()]) : _vm._e()])]), _vm._v(" "), _c('div', {
      staticClass: "row align-center mt-10"
    }, [_c('div', {
      staticClass: "font-color-9",
      staticStyle: {
        "width": "unset",
        "margin-right": "5px"
      }
    }, [(p.stock < 10) ? [_vm._v("（库存 " + _vm._s(p.stock) + "）")] : _vm._e()], 2), _vm._v(" "), (_vm.isMember) ? _c('ul', {
      staticClass: "opts row end"
    }, [_c('li', {
      staticClass: "btn theme-btn-bor",
      on: {
        "click": function($event) {
          return _vm.addToShoppingCart(p.productId)
        }
      }
    }, [_vm._v("加入购物车")]), _vm._v(" "), _c('li', {
      staticClass: "btn theme-btn-bg",
      on: {
        "click": function($event) {
          return _vm.preparePay(p.productId)
        }
      }
    }, [_vm._v("立即购买")])]) : _vm._e()])])])
  }), 0), _vm._v(" "), _c('pagination', {
    attrs: {
      "total": _vm.productCount,
      "page-change": _vm.queryProducts
    }
  }), _vm._v(" "), (_vm.productCount === 0) ? _c('div', {
    staticClass: "no-prd"
  }, [_c('i', {
    staticClass: "iconfont iconnone1 none"
  }), _vm._v(" "), _c('p', [_vm._v("商家还未发布商品呢")]), _vm._v(" "), _vm._m(1)]) : _vm._e(), _vm._v(" "), _c('van-dialog', {
    staticClass: "van-has-overlay van-pos-top",
    attrs: {
      "show-cancel-button": false,
      "show-confirm-button": false
    },
    model: {
      value: (_vm.nav.show),
      callback: function($$v) {
        _vm.$set(_vm.nav, "show", $$v)
      },
      expression: "nav.show"
    }
  }, [_c('div', {
    staticClass: "page-head"
  }, [_c('div', {
    staticClass: "move"
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l",
    on: {
      "click": function($event) {
        _vm.nav.show = false
      }
    }
  })]), _vm._v("\n\t\t\t\t微商城\n\t\t\t\t"), (_vm.isMember) ? _c('div', {
    staticClass: "move-right",
    on: {
      "click": function($event) {
        return _vm.$router.push('/mall/shopping-cart')
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconcart theme-font-color"
  })]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "nav section-part"
  }, [_c('ul', {
    staticClass: "row theme-border-bottom"
  }, [_c('li', {
    on: {
      "click": function($event) {
        return _vm.openNav(0)
      }
    }
  }, [(_vm.nav.cateName) ? [_vm._v(_vm._s(_vm.nav.cateName))] : [_vm._v("商品类别")], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1"
  })], 2), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        return _vm.openNav(1)
      }
    }
  }, [(_vm.g.Util.isEmpty(_vm.query.priceType)) ? [_vm._v("价格类型")] : [_vm._v(_vm._s(_vm.g.Dict.MallProductPriceTypes[_vm.query.priceType]))], _vm._v(" "), _c('i', {
    staticClass: "iconfont iconarrow-down-1"
  })], 2), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        return _vm.openNav(2)
      }
    }
  }, [(!_vm.query.orderType) ? [_vm._v("排序方式 "), _c('i', {
    staticClass: "iconfont iconarrow-down-1"
  })] : [_vm._v(_vm._s(_vm.orderTypesWithSimple[_vm.query.orderType]))]], 2), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        _vm.nav.moreQueryDlg = true
      }
    }
  }, [_c('span', {
    staticClass: "cont"
  }, [_vm._v("\n               筛选"), _c('i', {
    staticClass: "iconfont iconarrow-down-1"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "dlg-items section-part"
  }, [_c('ul', [(_vm.nav.idx == 0) ? [_c('li', {
    staticClass: "theme-border-bottom",
    on: {
      "click": function($event) {
        return _vm.chooseCate(null, null)
      }
    }
  }, [_vm._v("【不限制】")]), _vm._v(" "), _vm._l((_vm.productCateList), function(c) {
    return _c('li', {
      staticClass: "theme-border-bottom",
      class: {
        on: c.cateId === _vm.query.cateId
      },
      on: {
        "click": function($event) {
          return _vm.chooseCate(c.cateId, c.cateName)
        }
      }
    }, [_vm._v(_vm._s(c.cateName) + "\n\t\t\t\t\t\t")])
  })] : _vm._e(), _vm._v(" "), (_vm.nav.idx == 1) ? [_c('li', {
    staticClass: "theme-border-bottom",
    on: {
      "click": function($event) {
        return _vm.choosePriceType(null)
      }
    }
  }, [_vm._v("【不限制】")]), _vm._v(" "), _vm._l((_vm.g.Dict.MallProductPriceTypes), function(name, id) {
    return _c('li', {
      staticClass: "theme-border-bottom",
      class: {
        on: id === _vm.query.priceType
      },
      on: {
        "click": function($event) {
          return _vm.choosePriceType(id)
        }
      }
    }, [_vm._v(_vm._s(name) + "\n\t\t\t\t\t\t")])
  })] : _vm._e(), _vm._v(" "), (_vm.nav.idx == 2) ? _vm._l((_vm.orderTypesWithDetail), function(name, id) {
    return _c('li', {
      staticClass: "theme-border-bottom",
      class: {
        on: id === _vm.query.orderType
      },
      on: {
        "click": function($event) {
          return _vm.chooseOrderType(id)
        }
      }
    }, [_vm._v(_vm._s(name) + "\n\t\t\t\t\t\t")])
  }) : _vm._e()], 2)])]), _vm._v(" "), _c('van-popup', {
    staticClass: "van-pop-has-overlay",
    style: ({
      height: '100%',
      width: '90%'
    }),
    attrs: {
      "position": "right"
    },
    on: {
      "close": function($event) {
        _vm.nav.show = false
      }
    },
    model: {
      value: (_vm.nav.moreQueryDlg),
      callback: function($$v) {
        _vm.$set(_vm.nav, "moreQueryDlg", $$v)
      },
      expression: "nav.moreQueryDlg"
    }
  }, [_c('div', {
    staticClass: "filter-dlg section-part"
  }, [_c('h2', [_c('b', [_vm._v("更多筛选")])]), _vm._v(" "), _c('ul', {
    staticClass: "tblform"
  }, [_c('li', {
    staticClass: "row align-center"
  }, [_c('div', [_vm._v("积分区间:")]), _vm._v(" "), _c('div', {
    staticClass: "row align-center"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.query.pricePointsBegin),
      expression: "query.pricePointsBegin"
    }],
    staticClass: "input-bg wid30",
    attrs: {
      "placeholder": "请输入",
      "type": "number"
    },
    domProps: {
      "value": (_vm.query.pricePointsBegin)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.query, "pricePointsBegin", $event.target.value)
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("~")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.query.pricePointsEnd),
      expression: "query.pricePointsEnd"
    }],
    staticClass: "input-bg wid30",
    attrs: {
      "placeholder": "请输入",
      "type": "number"
    },
    domProps: {
      "value": (_vm.query.pricePointsEnd)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.query, "pricePointsEnd", $event.target.value)
      }
    }
  })])]), _vm._v(" "), _c('li', {
    staticClass: "row align-center"
  }, [_c('div', [_vm._v("金额区间:")]), _vm._v(" "), _c('div', {
    staticClass: "row align-center"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.query.priceAmountBegin),
      expression: "query.priceAmountBegin"
    }],
    staticClass: "input-bg wid30",
    attrs: {
      "placeholder": "请输入",
      "type": "number"
    },
    domProps: {
      "value": (_vm.query.priceAmountBegin)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.query, "priceAmountBegin", $event.target.value)
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("~")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.query.priceAmountEnd),
      expression: "query.priceAmountEnd"
    }],
    staticClass: "input-bg wid30",
    attrs: {
      "placeholder": "请输入",
      "type": "number"
    },
    domProps: {
      "value": (_vm.query.priceAmountEnd)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.query, "priceAmountEnd", $event.target.value)
      }
    }
  })])])])]), _vm._v(" "), (_vm.isMember) ? _c('div', {
    staticClass: "center"
  }, [_vm._v("我当前有 "), _c('b', {
    staticClass: "theme-font-color"
  }, [_vm._v(_vm._s(_vm.memberPoints ? _vm.memberPoints : 0))]), _vm._v(" 积分，\n\t\t\t\t"), _c('a', {
    on: {
      "click": function($event) {
        return _vm.queryProductsByPoints(_vm.memberPoints)
      }
    }
  }, [_vm._v("查看可购买的商品")])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "filter-dlg-btn row start theme-btn-bg"
  }, [_c('div', {
    staticClass: "reset theme-btn-bor",
    on: {
      "click": _vm.resetQuery
    }
  }, [_vm._v("重置")]), _vm._v(" "), _c('div', {
    staticClass: "",
    on: {
      "click": function($event) {
        return _vm.queryProducts(null)
      }
    }
  }, [_vm._v("确定")])])]), _vm._v(" "), _c('bottom-nav', {
    attrs: {
      "show-slogan": false,
      "menu": "mall/product-list"
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "cont"
  }, [_vm._v("筛选"), _c('i', {
    staticClass: "iconfont iconarrow-down-1"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "note"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "40"
    }
  }, [_c('i', {
    staticClass: "iconfont icontips0"
  })]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t\t\t微商城的商品可以包括会员卡和实物\n\t\t\t\t\t\t\t"), _c('br'), _vm._v("\n\t\t\t\t\t\t\t可使用积分兑换，或者在线支付购买\n\t\t\t\t\t\t")])])])])
}]}

/***/ }),

/***/ 822:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1971)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1372),
  /* template */
  __webpack_require__(2366),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-508ec6c4",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 824:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1925)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(1374),
  /* template */
  __webpack_require__(2321),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3dbb7a97",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});