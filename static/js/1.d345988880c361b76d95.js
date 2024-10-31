webpackJsonp([1],{

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

/***/ 1147:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1177)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1154),
  /* template */
  __webpack_require__(1196),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1130d3ad",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1154:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  emits: ["export"],
  props: {
    totalCount: {
      // 一共多少条数据
      type: Number
    },
    pageSize: {
      // 每页多少条
      type: Number,
      default: 30
    },
    exportPage: {
      // 一次性导出多少页
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      exportFileUrl: "",
      exportDlg: false,
      exportListDlg: false,
      exportPageList: [],
      isParent: false
    };
  },
  computed: {},
  watch: {
    totalCount: {
      handler(newVal) {
        if (!newVal) return;
        let list = [];
        let exportPage = this.exportPage;
        let pageCount = Math.ceil(newVal / this.pageSize);
        let size = Math.ceil(pageCount / exportPage);
        if (pageCount <= this.exportPage) return;
        for (let i = 0; i < size; i++) {
          let begin = exportPage * i + 1;
          let end = exportPage * (i + 1);
          if (end > pageCount) {
            end = pageCount;
          }
          list.push({
            begin,
            end,
            exportFileUrl: ""
          });
        }
        this.exportPageList = list;
      },
      deep: true,
      immediate: true
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 父组件点击【导出】按钮时主动触发
    exportToXls(page, isParent = true, idx) {
      if (!$.data.user.isShopOwner) {
        $.Dlg.warning("很抱歉，此导出功能仅允许店长操作。");
        return;
      }
      this.isParent = isParent;

      if (isParent) {
        if (this.totalCount / this.pageSize > this.exportPage) {
          this.exportListDlg = true;
        } else {
          this.exportDlg = true;
          this.$emit("export", page);
        }
      } else {
        this.activeIdx = idx;
        // (触发方法, 导出页码，是否从导出列表中触发的)
        this.$emit("export", page, true);
      }
    },

    // 父组件拿到导出地址后主动触发
    updateExportFileUrl(url) {
      if (this.isParent) {
        this.exportFileUrl = url;
      } else {
        this.exportPageList[this.activeIdx].exportFileUrl = url;
      }
    }
  }
});

/***/ }),

/***/ 1166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".export-list .export-ul[data-v-1130d3ad]{text-align:center}.export-list .export-li[data-v-1130d3ad]{border:1px solid #e5e5e5;padding:10px 0;border-radius:2px;margin-bottom:10px;cursor:pointer}.export-list .export-li[data-v-1130d3ad]:hover{background:#f5f5f5}.export-list .export-li[data-v-1130d3ad]:last-child{margin-bottom:0}.export-list .export-li span[data-v-1130d3ad]{width:100px;text-align:left}.export-list .export-li a[data-v-1130d3ad]{display:inline}.export-list .remark[data-v-1130d3ad]{background:#f5f5f5;width:400px;margin:20px auto 0;padding:15px;line-height:2;color:#777;text-align:center}.export-list a[data-v-1130d3ad]{display:block}", ""]);

// exports


/***/ }),

/***/ 1177:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1166);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("3c849046", content, true, {});

/***/ }),

/***/ 1196:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-export-xls"
  }, [_c('modal', {
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
  }, [_vm._v("提示")]), _vm._v("：每次最多导出 " + _vm._s(_vm.exportPage) + " 页 " + _vm._s(_vm.exportPage * _vm.pageSize) + " 条记录 "), _c('br')])] : _c('span', [_vm._v("正在查询并导出，请稍候...")])], 2)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "导出文件列表",
      "width": "500",
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.exportListDlg),
      callback: function($$v) {
        _vm.exportListDlg = $$v
      },
      expression: "exportListDlg"
    }
  }, [_c('div', {
    staticClass: "export-list"
  }, [_c('div', {
    staticClass: "export-ul mytbl"
  }, _vm._l((_vm.exportPageList), function(i, idx) {
    return _c('div', {
      key: idx,
      staticClass: "export-li",
      on: {
        "click": function($event) {
          return _vm.exportToXls(i.begin, false, idx)
        }
      }
    }, [_vm._v("\n          " + _vm._s(i.begin) + " ~ " + _vm._s(i.end) + " 页 \n          "), (i.exportFileUrl) ? _c('a', {
      attrs: {
        "href": i.exportFileUrl,
        "target": "_blank"
      }
    }, [_vm._v("【点击下载导出文件（xls）】")]) : _c('a', [_vm._v("【点击导出】")])])
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "remark"
  }, [_c('b', {
    staticClass: "red"
  }, [_vm._v("提示")]), _vm._v("：每次最多导出 " + _vm._s(_vm.exportPage) + " 页 " + _vm._s(_vm.exportPage * _vm.pageSize) + " 条记录 "), _c('br')])])])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1287:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: {
    shopId: { type: String, required: true },
    coupon: { type: Object, required: true },
    staffList: { type: Array, required: false }
  },
  data() {
    return {
      g: $,
      shopOwnerRole: $.Util.hasRoleFunc(),
      addShareLinkDlg: false,
      query: {
        staffId: $.Util.hasRoleFunc() ? null : $.data.user.staffId
      },
      couponShareLink: {
        receivedLimitNum: 1,
        remark: null,
        staffId: $.data.user.staffId
      },
      couponLinkCount: 0,
      couponShareList: [],
      formRule: {},
      selectLinkId: null,
      selectCoupon: null,
      selectCouponUrl: null,
      couponLinkAndQRCodeDlg: false,
      requiredFields: ['receivedLimitNum']
    };
  },
  computed: {},
  watch: {
    addShareLinkDlg(newVal) {
      if (!newVal) {
        this.selectLinkId = null;
        this.couponShareLink.receivedLimitNum = 1;
      }
    }
  },
  created() {
    $.Util.addRequiredFieldsRules(this.formRule, this.requiredFields);
    this.queryCouponShareLink();
  },
  mounted() {},
  methods: {
    queryCouponShareLink(callback) {
      $.Req.service($.SvName.ACTIVITY_COUPON_URL_QUERY, { couponId: this.coupon.couponId, staffId: this.query.staffId }, ret => {
        this.couponShareList = ret.couponUrlList.map(item => {
          return Object.assign(item, { shareLinkUrl: `${$.Conf.MSITE_BASE_URL}/#/coupon-${this.coupon.needPayment ? 'sale' : 'detail'}/${item.couponId}?s=${this.shopId}&linkId=${item.linkId}` });
        });
        if (callback) callback();
      }, true);
    },

    saveEvent() {
      if (!this.couponShareLink.receivedLimitNum) return $.Dlg.error('请输入使用次数');
      let args = {
        actionType: 'I',
        couponId: this.coupon.couponId,
        receivedLimitNum: this.couponShareLink.receivedLimitNum,
        remark: this.couponShareLink.remark,
        staffId: this.couponShareLink.staffId
      };
      if (this.selectLinkId) {
        args.actionType = 'U';
        args.linkId = this.selectLinkId;
      }
      $.Req.service($.SvName.ACTIVITY_COUPON_URL_SAVE, args, ret => {
        this.queryCouponShareLink(() => {
          $.Msg.success('操作成功！');
          this.addShareLinkDlg = false;
        });
      }, true);
    },

    delEvent(selectLinkId) {
      if (!confirm("确定删除该分享链接吗？")) return;
      $.Req.service($.SvName.ACTIVITY_COUPON_URL_SAVE, { actionType: 'D', linkId: selectLinkId }, ret => {
        this.queryCouponShareLink(() => {
          $.Msg.success('操作成功！');
          this.couponLinkAndQRCodeDlg = false;
        });
      }, true);
    },

    editEvent(selectLinkId) {
      this.selectLinkId = selectLinkId;
      this.couponShareLink = this.couponShareList.find(item => item.linkId === selectLinkId);
      this.addShareLinkDlg = true;
    },

    openCouponLinkDlg(c) {
      this.selectCoupon = this.coupon;
      this.selectCouponUrl = c.shareLinkUrl;
      this.couponLinkAndQRCodeDlg = true;
    }
  }
});

/***/ }),

/***/ 1288:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: {
    productList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      g: window.$,
      editable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
      query: {
        productId: null,
        page: null,
        status: null,
        sharerStaffId: null,
        custPhone: null,
        beginDate: null,
        endDate: null,
        createDateRange: []
      },
      orderCount: null,
      staffList: [],
      productOrderList: [],
      createDateOption: {
        shortcuts: [{
          text: "今天",
          value() {
            const end = new Date();
            const start = new Date();
            return [start, end];
          }
        }, {
          text: "昨天",
          value() {
            const start = new Date(new Date().getTime() - 3600 * 1000 * 24);
            return [start, start];
          }
        }, {
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
          text: "最近两个月",
          value() {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 60);
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
        }]
      }
    };
  },
  computed: {},
  watch: {},
  created() {
    this.queryProductOrderList();
    this.queryStaffList();
  },
  mounted() {},
  methods: {
    queryStaffList() {
      $.Req.service($.SvName.STAFF_QUERY, { needBaseInfo: true }, ret => {
        this.staffList = ret.staffList;
      });
    },
    reloadProductOrderList() {
      this.queryProductOrderList(this.query.page);
    },

    queryProductOrderList(page = null) {
      if (!page) {
        this.orderCount = null;
      }
      this.query.page = page;
      let args = {
        productId: this.query.productId,
        page: page
      };
      if (this.query.sharerStaffId) {
        args.sharerStaffId = this.query.sharerStaffId;
      }
      if (!$.Util.isEmpty(this.query.status)) {
        args.status = this.query.status;
      }
      args.beginDate = this.query.createDateRange[0];
      args.endDate = this.query.createDateRange[1];
      $.Req.service($.SvName.ENTRY_TICKET_ORDER_QUERY, args, ret => {
        this.productOrderList = ret.productOrderList;
        if (!page) {
          this.orderCount = ret.count;
        }
        window.scrollTo(0, 0);
      }, true);
    },

    refundOrder(orderId) {
      if (!confirm("确定退款该订单？ 退款操作后客户支付金额将原路退回。")) {
        return;
      }
      let args = { orderId: orderId };
      $.Req.service($.SvName.ENTRY_TICKET_ORDER_REFUND, args, ret => {
        $.Dlg.success($.Lang.OPT_SUCCESS);
        this.queryProductOrderList(this.query.page);
      });
    }
  }
});

/***/ }),

/***/ 1289:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    components: {},
    props: {},
    data() {
        return {
            g: $,
            // 新增微官网首页内容自定义
            homeContentSetList: [{ val: "", children: [] }],
            homeContentMap: {
                1: { name: "售卖会员卡", isChildren: true },
                2: { name: "阶段付商品", isChildren: true },
                3: { name: "教练风采" },
                4: { name: '上传会员头像' },
                5: { name: '门店视频' },
                6: { name: '今日场馆' },
                // 暂定 100 ~ 200 为 banner图
                101: { name: "优惠券" },
                102: { name: "幸运抽奖" },
                103: { name: "拼团" },
                104: { name: "砍价" },
                105: { name: "活动报名" },
                106: { name: "砸金蛋" },
                107: { name: "秒杀" },
                108: { name: "自助续费卡" },
                109: { name: '美团核销' },
                110: { name: '抖音核销' },
                111: { name: '自助核销' }
            },
            defaultHomeContentKeySort: [5, 1, 3], // 默认排序
            selectSet: new Set(),
            selectCardSet: new Set(),
            selectProductSet: new Set(),
            draggingIndex: null,
            draggingChildrenIndex: null,
            draggingActive: null
        };
    },
    computed: {},
    watch: {
        homeContentSetList: {
            handler(val) {
                this.selectSet = new Set();
                this.selectCardSet = new Set();
                this.selectProductSet = new Set();
                for (let i = 0; i < val.length; i++) {
                    this.selectSet.add(+val[i].val);
                    if (val[i].children && val[i].children.length > 0) {
                        for (let j = 0; j < val[i].children.length; j++) {
                            if (val[i].val == 1) this.selectCardSet.add(+val[i].children[j].val);
                            if (val[i].val == 2) this.selectProductSet.add(+val[i].children[j].val);
                        }
                    }
                }
            },
            deep: true
        }
    },
    created() {
        this.cardQuery(() => {
            this.instalmentProductQuery(() => {
                this.queryShopArgs();
            });
        });
    },
    mounted() {},
    methods: {
        queryShopArgs() {
            let args = {
                typeIdList: [2229]
            };
            $.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
                for (let t of ret.argList) {
                    if (t.typeId === 2229) {
                        if (t.typeValue) {
                            let list = [];
                            t.typeValue.split(";").forEach(i => {
                                let val = i.split(":")[0];
                                let obj = { val: +val, children: [] };
                                if (i.split(":")[1]) {
                                    let cList = i.split(":")[1].split(",");
                                    obj.children = cList.map(c => {
                                        return { val: +c };
                                    });
                                }
                                list.push(obj);
                            });
                            this.homeContentSetList = list;
                        } else {
                            // this.defaultHomeContentSortFunc();
                        }
                    }
                }
            });
        },

        dragstart(idx, cIdx) {
            this.draggingIndex = idx;
            this.draggingChildrenIndex = cIdx;
        },

        dragover(type, idx, cIdx) {
            if (type == 2) {
                if (this.draggingIndex === idx && this.draggingChildrenIndex !== cIdx) {
                    this.draggingActive = `${idx}-${cIdx}`;
                } else {
                    this.draggingActive = null;
                }
            } else {
                if (this.draggingIndex !== idx && this.draggingChildrenIndex === null) {
                    this.draggingActive = idx;
                } else {
                    this.draggingActive = null;
                }
            }
        },

        drop(type, idx, cIdx) {
            if (type == 1) {
                if (this.draggingIndex !== idx && this.draggingChildrenIndex === null) {
                    const draggedItem = this.homeContentSetList[this.draggingIndex];
                    this.homeContentSetList.splice(this.draggingIndex, 1);
                    this.homeContentSetList.splice(idx, 0, draggedItem);
                    this.draggingIndex = null;
                }
            } else {
                if (this.draggingIndex == idx && this.draggingChildrenIndex !== cIdx) {
                    const draggedItem = this.homeContentSetList[idx].children[this.draggingChildrenIndex];
                    this.homeContentSetList[idx].children.splice(this.draggingChildrenIndex, 1);
                    this.homeContentSetList[idx].children.splice(cIdx, 0, draggedItem);
                    this.draggingChildrenIndex = null;
                }
            }
            this.draggingActive = null;
        },

        defaultHomeContentSortFunc() {
            let list = [];
            this.defaultHomeContentKeySort.forEach(item => {
                list.push({ val: item, children: [] });
            });
            this.homeContentSetList = list;
        },

        addHomeContentSet() {
            const obj = { val: "", children: [] };
            this.homeContentSetList.push(obj);
        },

        saveHomeContentSet() {
            let len = this.homeContentSetList.length;
            let list = [];
            for (let i = 0; i < len; i++) {
                const item = this.homeContentSetList[i];
                if ($.Util.isNotEmpty(item.val) && item.val !== "") {
                    let val = item.val;
                    if (item.children && item.children.length > 0 && this.homeContentMap[item.val].isChildren) {
                        let cList = [];
                        item.children.forEach(cItem => {
                            if (cItem.val) cList.push(cItem.val);
                        });
                        if (cList && cList.length) val = `${val}:${cList.join(',')}`;
                    }
                    list.push(val);
                } else {
                    if (i == 0 && len == 1) {
                        // isEmpty = true;
                        $.Dlg.warning("您清空了所有，默认启用系统初始配置");
                        // this.defaultHomeContentSortFunc();
                    } else {
                        return $.Dlg.error(`第${i + 1}组，未选择展示内容！`);
                    }
                }
            }
            // typeId: 2229 学员首页展示内容设置
            let args = {
                typeId: 2229,
                typeValue: list.join(";")
            };
            $.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
                $.Msg.success($.Lang.SAVE_SUCCESS);
            });
        },

        deleteHomeContentSet(idx) {
            this.homeContentSetList.splice(idx, 1);
            if (!this.homeContentSetList.length) {
                $.Dlg.warning("清空所有会恢复成系统初始配置项！");
                this.defaultHomeContentSortFunc();
            }
        },

        addHomeContentChildrenSet(idx) {
            const obj = { val: "" };
            this.homeContentSetList[idx].children.push(obj);
        },

        deleteHomeContentChildrenSet(idx, cIdx) {
            this.homeContentSetList[idx].children.splice(cIdx, 1);
        },

        cardQuery(callback) {
            $.Req.service($.SvName.CARD_QUERY, { isPublic: true, status: 0 }, ret => {
                this.cardList = ret.cardList;
                if (callback) callback();
            });
        },

        instalmentProductQuery(callback) {
            $.Req.service($.SvName.INSTALMENT_PRODUCT_QUERY, { status: 0 }, ret => {
                this.instalmentProductList = ret.productList;
                if (callback) callback();
            });
        }
    }
});

/***/ }),

/***/ 1290:
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a },
  data() {
    return {
      g: $,
      menuList: $.PageMenus.AutoRenewConf("auto-renew-create"),
      options: {},
      cardList: [],
      cardType: null,
      ruleList: [{ title: "第1期", settingList: [{ termId: 1 }] }]
    };
  },
  created() {
    this.queryCardList();
  },
  methods: {
    delSettingLine(idx, cidx) {
      if (idx == 0 && cidx == 0 && this.ruleList[idx].settingList.length == 1) {
        // 清空
        this.$set(this.ruleList[idx].settingList[cidx], "beginDay", null);
        this.$set(this.ruleList[idx].settingList[cidx], "endDay", null);
        this.$set(this.ruleList[idx].settingList[cidx], "paymentAmount", null);
        return;
      }
      if (idx != 0 && cidx == 0 && this.ruleList[idx].settingList.length == 1) {
        this.ruleList.splice(idx, 1);
        return;
      }
      this.ruleList[idx].settingList.splice(cidx, 1);
    },

    addSettingLine(idx) {
      this.ruleList[idx].settingList.push({ termId: idx + 1 });
    },

    delRuleItem(idx) {
      if (idx == 0) {
        this.$set(this.ruleList[0], "settingList", [{ termId: 1 }]);
      } else {
        this.ruleList.splice(idx, 1);
      }
    },

    addRuleItem(idx) {
      this.ruleList.push({
        title: "第" + idx + 2 + "期",
        settingList: [{ termId: idx + 2 }]
      });
    },

    cardChange(e) {
      this.cardType = this.cardList.find(m => m.cardId == e).cardType;
    },

    queryCardList() {
      $.Req.service($.SvName.CARD_QUERY, { status: 0 }, res => {
        this.cardList = res.cardList;
      });
    },

    isEmptyStr(v) {
      if (v === null || v === undefined) return true;
      if (v.length === 0) return true;

      return false;
    },

    renewalSave() {
      if (!this.options.cardId) {
        $.Msg.error("请选择会员卡");
        return;
      }
      if (this.cardType != 1) {
        if (this.cardType == 3 && !this.options.usableAmount) {
          $.Msg.error("请填写充值金额");
          return;
        }
        if (this.cardType != 3 && !this.options.usableTimes) {
          $.Msg.error("请填写充值" + $.Dict.CardTypeSuffix[this.cardType]);
          return;
        }
      }
      if (!this.options.usableDays) {
        $.Msg.error("请填写期限");
        return;
      }
      if (!this.options.paymentAmount) {
        $.Msg.error("请填写首次费用");
        return;
      }
      if (!this.options.cardLimitBeginDays) {
        $.Msg.error("请最迟开卡次数");
        return;
      }
      let combine = [];
      for (let item of this.ruleList) {
        combine = combine.concat(item.settingList);
      }
      if (combine.some(m => this.isEmptyStr(m.beginDay) || this.isEmptyStr(m.endDay) || this.isEmptyStr(m.paymentAmount))) {
        $.Msg.error("请完善规则");
        return;
      }
      if (combine.some(y => y.beginDay == y.endDay)) {
        $.Msg.error("规则开始日期与结束日期不能相同");
        return;
      }
      this.options.cardType = this.cardType;
      let args = {
        selfServiceRenewal: this.options,
        selfServiceRuleList: combine
      };
      $.Req.service($.SvName.SELF_SERVICE_RENEWAL_SAVE, args, res => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.$router.push("/market/auto-renew");
      });
    }
  }
});

/***/ }),

/***/ 1291:
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a },
  data() {
    return {
      g: $,
      ssrId: this.$route.params.ssrId,
      menuList: $.PageMenus.AutoRenewConf("auto-renew-edit", this.$route.params.ssrId),
      options: {},
      cardList: [],
      cardType: null,
      ruleList: [{ title: "第1期", settingList: [{ termId: 1 }] }]
    };
  },
  created() {
    this.queryCardList();
    this.queryDetail();
  },
  methods: {
    queryDetail() {
      let args = {
        status: 0,
        ssrId: this.ssrId,
        page: 1
      };
      $.Req.service($.SvName.SELF_SERVICE_RENEWAL_QUERY, args, res => {
        let topRule = res.selfServiceRenewal;
        this.options.cardId = topRule.cardId;
        this.cardType = topRule.cardType;
        this.options.usableDays = topRule.usableDays;
        this.options.cardType = topRule.cardType;
        this.options.paymentAmount = topRule.paymentAmount;
        if (topRule.cardType != 1) {
          if (topRule.cardType == 3) {
            this.options.usableAmount = topRule.usableAmount;
          } else {
            this.options.usableTimes = topRule.usableTimes;
          }
        }
        this.options.cardLimitBeginDays = topRule.cardLimitBeginDays;
        let list = res.selfServiceRuleList;
        let termList = list.map(t => t.termId);
        let maxTerm = Math.max(...termList);
        let mapRuleList = [];
        for (let i = 1; i <= maxTerm; i++) {
          let obj = {
            title: "第" + i + "期",
            settingList: list.filter(v => v.termId == i)
          };
          mapRuleList.push(obj);
        }
        this.ruleList = mapRuleList;
      });
    },

    delSettingLine(idx, cidx) {
      if (idx == 0 && cidx == 0 && this.ruleList[idx].settingList.length == 1) {
        // 清空
        this.$set(this.ruleList[idx].settingList[cidx], "beginDay", null);
        this.$set(this.ruleList[idx].settingList[cidx], "endDay", null);
        this.$set(this.ruleList[idx].settingList[cidx], "paymentAmount", null);
        return;
      }
      if (idx != 0 && cidx == 0 && this.ruleList[idx].settingList.length == 1) {
        this.ruleList.splice(idx, 1);
        return;
      }
      this.ruleList[idx].settingList.splice(cidx, 1);
    },

    addSettingLine(idx) {
      this.ruleList[idx].settingList.push({ termId: idx + 1 });
    },

    delRuleItem(idx) {
      if (idx == 0) {
        this.$set(this.ruleList[0], "settingList", [{ termId: 1 }]);
      } else {
        this.ruleList.splice(idx, 1);
      }
    },

    addRuleItem(idx) {
      this.ruleList.push({
        title: "第" + idx + 2 + "期",
        settingList: [{ termId: idx + 2 }]
      });
    },

    cardChange(e) {
      this.cardType = this.cardList.find(m => m.cardId == e).cardType;
    },

    queryCardList() {
      $.Req.service($.SvName.CARD_QUERY, { status: 0 }, res => {
        this.cardList = res.cardList;
      });
    },

    isEmptyStr(v) {
      if (v === null || v === undefined) return true;
      if (v.length === 0) return true;

      return false;
    },

    renewalSave() {
      if (!this.options.cardId) {
        $.Msg.error("请选择会员卡");
        return;
      }
      if (this.cardType != 1) {
        if (this.cardType == 3 && !this.options.usableAmount) {
          $.Msg.error("请填写充值金额");
          return;
        }
        if (this.cardType != 3 && !this.options.usableTimes) {
          $.Msg.error("请填写充值" + $.Dict.CardTypeSuffix[this.cardType]);
          return;
        }
      }
      if (!this.options.usableDays) {
        $.Msg.error("请填写期限");
        return;
      }
      if (!this.options.paymentAmount) {
        $.Msg.error("请填写首次费用");
        return;
      }
      if (!this.options.cardLimitBeginDays) {
        $.Msg.error("请最迟开卡次数");
        return;
      }
      let combine = [];
      for (let item of this.ruleList) {
        combine = combine.concat(item.settingList);
      }

      if (combine.some(m => this.isEmptyStr(m.beginDay) || this.isEmptyStr(m.endDay) || this.isEmptyStr(m.paymentAmount))) {
        $.Msg.error("请完善规则");
        return;
      }
      if (combine.some(y => y.beginDay == y.endDay)) {
        $.Msg.error("规则开始日期与结束日期不能相同");
        return;
      }
      // let s = new Set(combine.map(k=>k.beginDay+'|'+k.endDay+'|'+k.paymentAmount));
      this.options.cardType = this.cardType;
      this.options.ssrId = this.ssrId;
      let args = {
        selfServiceRenewal: this.options,
        selfServiceRuleList: combine
      };
      $.Req.service($.SvName.SELF_SERVICE_RENEWAL_SAVE, args, res => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.$router.push("/market/auto-renew");
      });
    }
  }
});

/***/ }),

/***/ 1292:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      g: $,
      shopId: null,
      recordDlg: false,
      renewCount: null,
      recordCount: null,
      recordList: [],
      renewalList: null,
      recordItem: null,
      productQrcodeDlg: false,
      cardTitle: "",
      editable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value)
    };
  },
  created() {
    this.queryList();
    this.queryShopId();
  },
  methods: {
    queryShopId() {
      $.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
        this.shopId = ret.shopId;
      });
    },

    openPrdQrcodeDlg(prd) {
      this.cardTitle = prd.cardName;
      this.qrCodeUrl = $.Conf.MSITE_BASE_URL + "/#/auto-renew?ssrId={0}&s={1}".format(prd.ssrId, this.shopId);
      this.productQrcodeDlg = true;
    },

    stopRenewItem(itemId, status) {
      let key = status == 0 ? '停用' : '启用';
      let action = status == 0 ? 1 : 0;
      let msg = "确定要" + key + "该自助续费卡活动吗？";
      $.Dlg.confirm(msg, yes => {
        let args = { ssrId: itemId, status: action }; //status 状态：0-正常，1-停用，停用必填，删除不填
        $.Req.service($.SvName.SELF_SERVICE_RENEWAL_CHANGE, args, ret => {
          $.Msg.success($.Lang.OPT_SUCCESS);
          this.queryList();
        }, true);
      });
    },

    deleteRenewItem(itemId, status) {
      let msg = "确定要删除该自助续费卡活动吗？";
      $.Dlg.confirm(msg, yes => {
        let args = { ssrId: itemId }; //status 状态：0-正常-启用，1-停用，停用必填，删除不填
        $.Req.service($.SvName.SELF_SERVICE_RENEWAL_CHANGE, args, ret => {
          $.Msg.success($.Lang.OPT_SUCCESS);
          this.queryList();
        }, true);
      });
    },

    queryPageRecord(page = 1) {
      this.queryRecord(this.recordItem, page);
    },

    queryRecord(item, page = 1) {
      this.recordItem = item;
      let args = {
        page: page,
        ssrId: item.ssrId,
        status: item.status
      };
      $.Req.service($.SvName.SELF_SERVICE_PAYMENT_QUERY, args, res => {
        this.recordList = res.selfServicePaymentList;
        this.recordCount = res.selfServicePaymentList.length;
        this.recordDlg = true;
      });
    },

    queryList(page = 1) {
      let args = {
        // status: 0,
        page: page
      };
      $.Req.service($.SvName.SELF_SERVICE_RENEWAL_QUERY, args, res => {
        this.renewCount = res.selfServiceRenewalList.length;
        this.renewalList = res.selfServiceRenewalList;
      });
    }
  }
});

/***/ }),

/***/ 1293:
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
      g: $,
      productId: this.$route.params.productId,
      productPriceEditable: true,
      menuList: $.PageMenus.bargain('bargain-product-edit', this.$route.params.productId),
      marketEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
      cardList: [],
      product: {
        productId: null,
        productTitle: null,
        productPic: null,
        rawPrice: null,
        lowestPrice: null,
        cutCount: null,
        consumerType: 0,
        productDesc: null,
        limitHours: null,
        remark: null,
        shareTitle: null,
        shareDesc: null,
        sharePic: null,
        cardId: null,
        cardType: null,
        cardTimes: null,
        cardAmount: null,
        cardDays: null,
        cardLimitBeginDays: null,
        stock: null,
        onlyBuyWhenMinPrice: null
      },
      requiredFields: ['productTitle', 'rawPrice', 'lowestPrice', 'maxCutTimes', 'consumerType', 'limitHours'],
      formRule: {},
      imgUpload: {
        action: $.Conf.IMG_UPLOAD_URL,
        imgMaxWidth: 1024,
        defaultLisForProduct: [],
        defaultListForShare: [],
        defaultMorePics: []
      },
      imgFileList: [],
      initCardId: null
    };
  },

  created() {
    $.Util.addRequiredFieldsRules(this.formRule, this.requiredFields);
    this.queryCards(() => {
      if (this.productId) {
        this.queryBargainProduct();
      }
    });
  },

  methods: {
    queryCards(callback = null) {
      $.Req.service($.SvName.CARD_QUERY, { status: 0 }, ret => {
        this.cardList = ret.cardList;
        if (callback) callback();
      });
    },

    queryBargainProduct() {
      let args = { productId: this.productId };
      $.Req.service($.SvName.BARGAIN_PRODUCT_QUERY, args, ret => {
        this.product = ret.bargainProduct;
        if (this.product.productPic) {
          let imgUrl = $.Util.getImgUrl(this.product.productPic, 250, 250, 'EEEEEE');
          this.imgUpload.defaultLisForProduct.push({
            name: this.product.productPic,
            url: imgUrl
          });
        }
        if (this.product.sharePic) {
          let imgUrl = $.Util.getImgUrl(this.product.sharePic, 250, 250, 'EEEEEE');
          this.imgUpload.defaultListForShare.push({
            name: this.product.sharePic,
            url: imgUrl
          });
        }
        if (this.product.productMorePics) {
          for (let p of this.product.productMorePics.split(',')) {
            this.imgUpload.defaultMorePics.push({
              name: p,
              url: $.Util.getImgUrl(p, 200, 200, 'EEEEEE')
            });
          }
        }
        this.imgFileList = this.imgUpload.defaultMorePics;
      });
    },

    saveBargainProduct() {
      this.$refs.product.validate(valid => {
        if (!valid) {
          $.Msg.error($.Lang.SUBMIT_ERR);
          return false;
        }
        if (this.product.cardId) {
          // 会员卡商品
          if (this.product.cardType === 1) {
            // 期限卡
            if (!this.product.cardDays) {
              $.Msg.error('请输入使用天数');
              return false;
            }
            if (this.product.cardDays <= 0) {
              $.Msg.error('使用天数需大于0');
              return false;
            }
          } else if (this.product.cardType === 2) {
            // 次数卡
            if (!this.product.cardTimes) {
              $.Msg.error('请输入使用次数');
              return false;
            }
            if (this.product.cardTimes <= 0) {
              $.Msg.error('使用次数需大于0');
              return false;
            }
          } else if (this.product.cardType === 3) {
            // 储值卡
            if (!this.product.cardAmount) {
              $.Msg.error('请输入使用金额');
              return false;
            }
            if (this.product.cardAmount <= 0) {
              $.Msg.error('使用金额需大于0');
              return false;
            }
          } else if (this.product.cardType === 4) {
            // 计时卡
            if (!this.product.cardTimes) {
              $.Msg.error('请输入使用时间');
              return false;
            }
            if (this.product.cardTimes <= 0) {
              $.Msg.error('使用时间需大于0');
              return false;
            }
          }
        }

        if (!this.product.productPic) {
          $.Msg.error('请上传商品图片');
          return;
        }
        if (this.product.rawPrice < this.product.lowestPrice) {
          $.Dlg.error('最低价不能高于原价');
          return;
        }
        if (this.product.lowestPrice < 0.01) {
          $.Dlg.error('最低价不能小于0.01');
          return;
        }
        if (this.product.maxCutTimes < 2) {
          $.Dlg.error('砍价人数不能少于2人');
          return;
        }
        if (!this.product.beginDate || !this.product.endDate) {
          $.Dlg.error('请输入完整的砍价日期');
          return;
        }
        if (this.product.maxLaunchCnt <= 0) {
          $.Dlg.error('每人最多发起次数必须大于0');
          return;
        }
        if (this.product.productDesc && this.product.productDesc.length > 1000) {
          $.Dlg.error('商品描述不能超过1000字');
          return;
        }
        if (this.product.remark && this.product.remark.length > 1000) {
          $.Dlg.error('砍价说明不能超过1000字');
          return;
        }
        if (this.product.shareTitle && this.product.shareTitle.length > 100) {
          $.Dlg.error('分享标题不能超过100字');
          return;
        }
        if (this.product.shareDesc && this.product.shareDesc.length > 150) {
          $.Dlg.error('分享简介不能超过150字');
          return;
        }
        if (this.imgFileList && this.imgFileList.length > 0) {
          let imgNames = [];
          for (let i = 0; i < this.imgFileList.length; i++) {
            imgNames.push(this.imgFileList[i].name);
          }
          this.product.productMorePics = imgNames.join(',');
        } else {
          this.product.productMorePics = null;
        }

        let args = {
          actionType: this.product.productId ? 'U' : 'I',
          bargainProduct: this.product
        };

        $.Req.service($.SvName.BARGAIN_PRODUCT_SAVE, args, ret => {
          $.Msg.success($.Lang.OPT_SUCCESS);
          if (!this.productId) {
            this.$router.push('/market/bargain-product-list');
          } else {
            window.scrollTo(0, 0);
          }
        }, true);
      });
    },

    handleImgUploadSuccessForProduct(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;
      this.product.productPic = res.data.name;
    },

    handleImgUploadSuccessForShare(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;
      this.product.sharePic = res.data.name;
    },

    delBargainProduct() {
      if (!confirm('确定删除该砍价商品吗？')) {
        return;
      }

      let args = { deleteId: this.productId, actionType: 'D' };
      $.Req.service($.SvName.BARGAIN_PRODUCT_SAVE, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.$router.push('/market/bargain-product-list');
      }, true);
    },

    handleMorePisUploadSuccess(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;
      this.imgFileList.push(file);
    },

    handleImgRemove(file, fileList) {
      this.imgFileList.splice(this.imgFileList.indexOf(file), 1);
    },

    handleCardSelect(cardId) {
      if (cardId === this.initCardId) return;

      for (let c of this.cardList) {
        if (c.cardId === cardId) {
          this.product.cardType = c.cardType;
          this.product.cardDays = c.defaultDays;
          if (c.cardType === 2) {
            this.product.cardTimes = c.defaultTimes;
          } else if (c.cardType === 3) {
            this.product.cardAmount = c.defaultAmount;
          } else if (c.cardType === 4) {
            this.product.cardTimes = c.defaultTimes;
          }
          break;
        }
      }
      this.initCardId = null;
    }
  }
});

/***/ }),

/***/ 1294:
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



/* harmony default export */ __webpack_exports__["default"] = ({
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a },
	data() {
		return {
			g: window.$,
			hasMchId: null,
			editable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
			productList: [],
			productItemList: [],
			productItemLogList: [],
			query: {
				productId: null,
				itemPage: null,
				itemId: null,
				sharerStaffId: null,
				hasPaid: false,
				isFinished: false
			},
			itemCount: null,
			itemLogCount: null,
			itemLogDlg: false,
			staffList: [],
			productQrcodeDlg: null,
			selectPrdUrl: null,
			selectPrductTitle: null,
			shopId: null
		};
	},

	created() {
		this.queryMchId();
		this.queryBargainProductList();
		this.queryBargainProductItem();
		this.queryStaffList();
		this.queryShopId();
	},

	methods: {
		queryStaffList() {
			$.Req.service($.SvName.STAFF_QUERY, { needBaseInfo: true }, ret => {
				this.staffList = ret.staffList;
			});
		},

		queryMchId() {
			let args = { queryType: 'shop' };
			$.Req.service($.SvName.WX_MCHID_QUERY, args, ret => {
				if (ret.mchId) this.hasMchId = true;else this.hasMchId = false;
			});
		},

		queryShopId() {
			$.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
				this.shopId = ret.shopId;
			});
		},

		queryBargainProductList() {
			$.Req.service($.SvName.BARGAIN_PRODUCT_QUERY, {}, ret => {
				this.productList = ret.productList;
			}, true);
		},

		queryBargainProductItem(page = null) {
			if (!page) {
				this.itemCount = null;
			}
			this.query.itemPage = page;
			let args = {
				productId: this.query.productId,
				page: page
			};
			if (this.query.sharerStaffId) {
				args.sharerStaffId = this.query.sharerStaffId;
			}
			if (this.query.hasPaid) {
				args.hasPaid = true;
			}
			if (this.query.isFinished) {
				args.isFinished = true;
			}
			$.Req.service($.SvName.BARGAIN_PRODUCT_ITEM_QUERY, args, ret => {
				this.productItemList = ret.productItemList;
				if (!page) {
					this.itemCount = ret.count;
				}
				window.scrollTo(0, 0);
			}, true);
		},

		queryBargainProductItemLog(page = null) {
			if (!page) {
				this.itemLogCount = null;
			}
			let args = {
				itemId: this.query.itemId,
				page: page
			};
			$.Req.service($.SvName.BARGAIN_PRODUCT_ITEM_LOG_QUERY, args, ret => {
				this.productItemLogList = ret.productItemLogList;
				if (!page) {
					this.itemLogCount = ret.count;
				}
			}, true);
		},

		reloadBargainProductListItem() {
			this.queryBargainProductItem(this.query.itemPage);
		},

		delProduct(productId) {
			if (!confirm('确定删除该商品吗？')) {
				return;
			}

			let args = { deleteId: productId, actionType: 'D' };
			$.Req.service($.SvName.BARGAIN_PRODUCT_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryBargainProductList();
			});
		},

		viewProductItemLogs(itemId) {
			this.query.itemId = itemId;
			this.queryBargainProductItemLog();
			this.itemLogDlg = true;
		},

		openPrdQrcodeDlg(prd) {
			this.selectPrductTitle = prd.productTitle;
			this.selectPrdUrl = $.Conf.MSITE_BASE_URL + '/#/bargain-main?s={0}&productId={1}'.format(this.shopId, prd.productId);
			this.productQrcodeDlg = true;
		}
	}
});

/***/ }),

/***/ 1295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, ImgUpload: __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue___default.a },
	data() {
		return {
			g: $,
			couponId: this.$route.params.couponId,
			menuList: $.PageMenus.coupon("activity-coupon-edit", this.$route.params.couponId),
			marketEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
			roles: [],
			coupon: {
				title: null,
				couponType: 1,
				receivedNum: 0,
				receiveLimitRole: 1,
				receiveLimitNum: 1,
				pubTime: new Date(),
				beginDate: new Date(),
				needPayment: false,
				price: null,
				shareTitle: null,
				shareDesc: null,
				sharePic: null,
				useBeginDate: new Date()
			},
			requiredFields: ["couponType", "totalNum", "receiveLimitRole", "value", "beginDate", "endDate", "receiveLimitNum"],
			formRule: {},
			imgUpload: {
				action: $.Conf.IMG_UPLOAD_URL,
				imgMaxWidth: 1024,
				defaultLisForProduct: [],
				defaultListForShare: [],
				defaultMorePics: [],
				defaultListCouponImg: []
			},
			// 优惠券
			// 会员卡
			cardList: [],
			cardPayments: {},
			cardCheckAll: false,
			cardClassList: [0, 1, 2],
			showPausedCards: null,
			// 商品
			productList: [],
			productChecks: {},
			productCheckAll: false,
			productClassList: [],
			showProductOff: false,
			productCount: null,
			productCateList: [],
			relList: [],
			// 图片
			couponTheme: null,

			limitCardIdArr: [],
			limitReceiveItems: [null, null]
		};
	},
	computed: {
		cardListComp() {
			let list = [];
			this.cardList.forEach(item => {
				if ((item.status == 0 || this.showPausedCards) && this.cardClassList.contains(item.cardClass)) {
					list.push(item);
				}
			});
			return list;
		},
		productListComp() {
			let list = [];
			this.productList.forEach(item => {
				// if ((item.status == 0 || this.showProductOff) && this.productClassList.contains(item.cateId))
				// ) {
				//   list.push(item);
				// }
				if (item.status == 0 || this.showProductOff) {
					list.push(item);
				}
			});
			return list;
		}
	},
	watch: {
		relList(newVal) {
			if (this.relList && this.relList.length) {
				this.relList.forEach(item => {
					if (item.relType == 1) {
						this.$set(this.cardPayments[item.relId], "checked", true);
					} else {
						this.$set(this.productChecks[item.relId], "checked", true);
					}
				});
			}
		}
	},
	created() {
		$.Util.addRequiredFieldsRules(this.formRule, this.requiredFields);
		// 优惠券
		new Promise((resolve, reject) => {
			this.queryCard(() => resolve(resolve));
		}).then(resolve => {
			this.queryProduct(null, () => resolve());
		}).then(() => {
			this.queryCoupon();
		});
		this.queryCateList();
		// this.shopArgQuery();
	},
	mounted() {},
	methods: {
		// 优惠券
		shopArgQuery() {
			$.Req.service($.SvName.SHOP_ARG_QUERY, { typeId: 2226 }, ret => {
				this.couponTheme = ret.value;
			});
		},

		checkAllProducts(val) {
			this.productCheckAll = val;
			for (let c of this.productListComp) {
				this.$set(this.productChecks[c.productId], "checked", this.productCheckAll);
			}
		},

		queryProduct(page = null, callback = null) {
			if (!page) this.productCount = null;
			let args = {
				page: page
				// priceType: 1,
			};
			$.Req.service($.SvName.MALL_PRODUCT_QUERY, args, ret => {
				if (!page) {
					this.productCount = ret.count;
				}
				this.productList = ret.productList;
				for (let c of this.productList) {
					this.$set(this.productChecks, c.productId, {
						checked: false,
						cateId: c.cateId,
						status: c.status
					});
				}
				if (callback) callback();
			});
		},

		queryCateList() {
			let args = { needBase: true };
			$.Req.service($.SvName.MALL_PRODUCT_CATE_QUERY, args, ret => {
				if (ret.productCateList && ret.productCateList.length) {
					this.productCateList = ret.productCateList;
					this.productClassList = [];
					this.productCateList.forEach(item => {
						this.productClassList.push(item.cateId);
					});
				}
			});
		},

		checkAllCards(val) {
			this.cardCheckAll = val;
			for (let c of this.cardListComp) {
				this.$set(this.cardPayments[c.cardId], "checked", this.cardCheckAll);
			}
		},

		queryCard(callback) {
			$.Req.service($.SvName.CARD_QUERY, { isPublic: true }, ret => {
				this.cardList = ret.cardList;
				for (let c of this.cardList) {
					this.$set(this.cardPayments, c.cardId, {
						checked: false,
						cardClass: c.cardClass,
						status: c.status
					});
				}
				if (callback) callback();
			});
		},

		filterChecked(type) {
			let list = type == "product" ? this.productListComp : this.cardListComp;
			let map = type == "product" ? this.productChecks : this.cardPayments;
			let key = type == "product" ? "productId" : "cardId";
			let relType = type == "product" ? 2 : 1;
			let newList = list.filter(item => map[item[key]].checked);
			let returnList = newList.map(item => {
				return { relType, relId: item[key] };
			});
			return returnList;
		},

		handleImgUploadDeleteCouponImg() {
			this.coupon.bgImg = "";
		},

		handleImgUploadSuccessCouponImg(res, file) {
			file.url = res.data.url;
			file.name = res.data.name;
			this.coupon.bgImg = res.data.name;
		},

		queryCoupon() {
			if (!this.couponId) return;
			$.Req.service($.SvName.ACTIVITY_COUPON_QUERY, { couponId: this.couponId }, ret => {
				if (ret.coupon) {
					this.coupon = ret.coupon;
					if (this.coupon.sharePic) {
						let imgUrl = $.Util.getImgUrl(this.coupon.sharePic, 250, 250, "EEEEEE");
						this.imgUpload.defaultListForShare.push({
							name: this.coupon.sharePic,
							url: imgUrl
						});
					}
					// test
					// ret.coupon.limitCards = '22,23,1'
					// ret.coupon.limitReceive = '1,2'
					if (ret.coupon.limitCards) {
						this.limitCardIdArr = ret.coupon.limitCards.split(',').map(function (val) {
							return parseInt(val);
						});
					}
					if (ret.coupon.limitReceive) {
						this.limitReceiveItems = ret.coupon.limitReceive.split(',').map(function (val) {
							return parseInt(val);
						});
					}
					// 优惠券
					if (this.coupon.bgImg) {
						let imgUrl = $.Util.getImgUrl(this.coupon.bgImg, 250, 250, "EEEEEE");
						this.imgUpload.defaultListCouponImg.push({
							name: this.coupon.bgImg,
							url: imgUrl
						});
					}
				} else {
					$.Msg.error($.Lang.NOT_FOUND_TIPS);
				}
				if (ret.relList && ret.relList.length) {
					ret.relList.forEach(item => {
						if (item.relType == 1) {
							if (!this.cardPayments[item.relId]) return;
							this.$set(this.cardPayments[item.relId], "checked", true);
						} else {
							if (!this.productChecks[item.relId]) return;
							this.$set(this.productChecks[item.relId], "checked", true);
						}
					});
				}
			});
		},

		saveCoupon() {
			this.$refs.coupon.validate(valid => {
				if (!valid) {
					$.Msg.error($.Lang.SUBMIT_ERR);
					return false;
				}
				if (this.coupon.couponType == 2 && this.coupon.value >= 10) {
					$.Msg.error("折扣券的折扣值必须小于10");
					return;
				}
				if (!this.coupon.beginDate || !this.coupon.endDate) {
					$.Msg.error("请输入完整的领取期限");
					return;
				}
				if (this.coupon.needPayment && !this.coupon.price) {
					$.Msg.error("请输入在线支付价格");
					return;
				}
				let args = {
					actionType: this.couponId ? "U" : "I",
					coupon: this.coupon
				};
				args.coupon.limitCards = this.limitCardIdArr.length ? this.limitCardIdArr.join(',') : null;
				if (this.limitReceiveItems[0] && this.limitReceiveItems[1]) {
					args.coupon.limitReceive = '{0},{1}'.format(this.limitReceiveItems[0], this.limitReceiveItems[1]);
				}
				let productIds = this.filterChecked("product");
				let cardIds = this.filterChecked("card");
				args.relList = [].concat(cardIds, productIds);
				// return console.log(args);
				$.Req.service($.SvName.ACTIVITY_COUPON_SAVE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					if (args.actionType === "I") {
						this.$router.push("/market/coupon-list");
					} else {
						this.$router.push("/market/coupon-list");
					}
				}, true);
			});
		},

		delCoupon() {
			if (!confirm("确定删除该优惠券吗？")) {
				return;
			}

			let args = { deleteId: this.couponId, actionType: "D" };
			$.Req.service($.SvName.ACTIVITY_COUPON_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.$router.push("/market/coupon-list");
			}, true);
		},

		handleImgUploadSuccessForShare(res, file) {
			file.url = res.data.url;
			file.name = res.data.name;
			this.coupon.sharePic = res.data.name;
		}
	}
});

/***/ }),

/***/ 1296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coupon_share_link_vue__ = __webpack_require__(2196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coupon_share_link_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__coupon_share_link_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, CouponShareLink: __WEBPACK_IMPORTED_MODULE_1__coupon_share_link_vue___default.a },
  data() {
    return {
      g: window.$,
      editable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
      couponList: [],
      couponsUrl: null,
      qrcodeUrl: null,
      // 优惠券
      couponThemeDlg: false,
      couponImgList: ["green", "blue", "pink", "white", "purple", "black-1", "black-2", "custom"],
      couponTheme: null,
      // 新增分享链接
      shopId: null,
      selectCoupon: { title: null },
      selectCouponUrl: null,
      couponLinkAndQRCodeDlg: false,
      couponLinkSetDlg: false,
      staffList: []
    };
  },

  created() {
    this.queryCouponList();
    this.queryShopId();
    // 优惠券
    this.shopArgQuery();
    this.queryStaff();
  },

  methods: {
    // 优惠券
    couponThemeQuery() {
      this.couponThemeDlg = true;
      this.shopArgQuery();
    },

    shopArgQuery() {
      $.Req.service($.SvName.SHOP_ARG_QUERY, { typeId: 2226 }, ret => {
        this.couponTheme = ret.value;
      });
    },

    checkCouponImg(c) {
      this.couponTheme = c;
    },

    shopArgUpdate() {
      $.Req.service($.SvName.SHOP_ARG_UPDATE, { typeId: 2226, typeValue: this.couponTheme }, ret => {
        $.Msg.success("操作成功！");
        this.couponThemeDlg = false;
      }, true);
    },

    queryCouponList() {
      $.Req.service($.SvName.ACTIVITY_COUPON_QUERY, {}, ret => {
        if (ret.couponList) this.couponList = ret.couponList;
      }, true);
    },

    delCoupon(couponId) {
      if (!confirm("确定删除该优惠券吗？")) {
        return;
      }

      let args = { deleteId: couponId, actionType: "D" };
      $.Req.service($.SvName.ACTIVITY_COUPON_SAVE, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.queryCouponList();
      });
    },

    queryShopId() {
      $.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
        this.couponsUrl = $.Conf.MSITE_BASE_URL + "/#/coupons?s=" + ret.shopId;
        this.qrcodeUrl = $.Conf.QR_CODE_URL + encodeURIComponent(this.couponsUrl);
        this.shopId = ret.shopId; // 新增分享链接
      });
    },

    // 新增分享链接
    generateShareLink(coupon) {
      this.selectCoupon = coupon;
      this.couponLinkSetDlg = true;
    },

    openCouponLinkDlg(coupon) {
      this.selectCoupon = coupon;
      this.selectCouponUrl = $.Conf.MSITE_BASE_URL + '/#/coupon-detail/{0}?s={1}'.format(coupon.couponId, this.shopId);
      this.couponLinkAndQRCodeDlg = true;
    },

    queryStaff(callback) {
      $.Req.service($.SvName.STAFF_QUERY, { status: 0 }, ret => {
        this.staffList = ret.staffList;
        if (callback) callback();
      }, true);
    }
  }
});

/***/ }),

/***/ 1297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_cust_cust_detail_vue__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_cust_cust_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_cust_cust_detail_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default.a, CustDetail: __WEBPACK_IMPORTED_MODULE_2__pages_cust_cust_detail_vue___default.a },
  props: {},
  data() {
    return {
      g: $,
      shopOwnerRole: $.Util.hasRoleFunc(),
      menuList: $.PageMenus.coupon('coupon-share-link'),
      memberId: null,
      viewMemberDlg: false,
      custId: null,
      custName: null,
      viewCustDlg: false,
      shopId: null,
      totalCount: 0,
      queryPage: null,
      couponShareList: [],
      couponList: [],
      staffList: [],
      formRule: {},
      selectCoupon: null,
      selectCouponUrl: null,
      couponLinkAndQRCodeDlg: false,
      query: {
        staffId: $.Util.hasRoleFunc() ? null : $.data.user.staffId,
        couponId: null,
        linkId: null
      }
    };
  },
  computed: {},
  watch: {},
  created() {
    this.queryShopId();
    this.queryCouponList();
    this.queryStaffList();

    this.queryCouponShareLink();
  },
  mounted() {},
  methods: {
    queryCouponList() {
      $.Req.service($.SvName.ACTIVITY_COUPON_QUERY, {}, ret => {
        this.couponList = ret.couponList;
      }, true);
    },

    queryStaffList() {
      $.Req.service($.SvName.STAFF_QUERY, { status: 0 }, ret => {
        this.staffList = ret.staffList;
      }, true);
    },

    queryCouponShareLink(page = null, callback) {
      if (page) {
        this.queryPage = page;
      }
      // fromUrl 表示查询 加密分享链接的使用记录
      const args = Object.assign({ fromUrl: true, page }, this.query);
      if (args.linkId) {
        const regex = /(?<=linkId=)\w+/;
        const match = args.linkId.match(regex);
        args.linkId = match ? match[0] : null;
      }
      // return console.log(args);

      $.Req.service($.SvName.COUPON_STAT, args, ret => {
        this.couponShareList = ret.couponLogList.map(item => {
          return Object.assign(item, { shareLinkUrl: `${$.Conf.MSITE_BASE_URL}/#/coupon-${item.needPayment ? 'sale' : 'detail'}/${item.couponId}?s=${this.shopId}&linkId=${item.linkId}` });
        });
        if (!page) {
          this.totalCount = ret.count;
        }
        if (callback) callback();
      }, true);
    },

    delEvent(couponShareId) {
      if (!confirm("确定删除该分享链接吗？")) return;
      $.Req.service($.SvName.ACTIVITY_COUPON_URL_SAVE, { actionType: 'D', linkId: couponShareId }, ret => {
        this.queryCouponShareLink(this.queryPage, () => {
          $.Msg.success('操作成功！');
        });
      }, true);
    },

    openCouponLinkDlg(coupon) {
      this.selectCoupon = coupon;
      this.selectCouponUrl = coupon.shareLinkUrl;
      this.couponLinkAndQRCodeDlg = true;
    },

    queryShopId() {
      $.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
        this.shopId = ret.shopId;
      });
    },

    resetQuery() {
      this.query = {
        staffId: $.Util.hasRoleFunc() ? null : $.data.user.staffId,
        couponId: null,
        linkId: null
      };
    },

    viewMember(memberId) {
      this.memberId = memberId;
      this.viewMemberDlg = true;
    },

    viewCust(custId, custName) {
      this.custId = custId;
      this.custName = custName;
      this.viewCustDlg = true;
    }
  }
});

/***/ }),

/***/ 1298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_cust_cust_detail_vue__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_cust_cust_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_cust_cust_detail_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_export_xls_vue__ = __webpack_require__(1147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_export_xls_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_export_xls_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default.a, CustDetail: __WEBPACK_IMPORTED_MODULE_2__pages_cust_cust_detail_vue___default.a, ExportXls: __WEBPACK_IMPORTED_MODULE_3__components_export_xls_vue___default.a },
	data() {
		return {
			g: window.$,
			couponId: this.$route.params.couponId,
			menuList: $.PageMenus.coupon('activity-coupon-stat', this.$route.params.couponId),
			guestCnt: null,
			usedCnt: null,
			unusedCnt: null,
			couponLogList: null,
			couponLogCnt: null,
			coupon: null,
			memberId: 0,
			custId: 0,
			viewMemberDlg: false,
			viewCustDlg: false,
			custName: null,
			query: {
				status: null,
				guestPhone: null,
				page: null
			},
			mcp: {},
			mcpDlg: false,
			mo: {},
			moDlg: false,

			exportFileUrl: null
		};
	},

	created() {
		if (this.couponId) {
			this.queryCoupon();
			this.statCoupon();
		}
	},

	methods: {
		queryCoupon() {
			$.Req.service($.SvName.ACTIVITY_COUPON_QUERY, { couponId: this.couponId }, ret => {
				if (ret.coupon) {
					this.coupon = ret.coupon;
				} else {
					$.Msg.error($.Lang.NOT_FOUND_TIPS);
				}
			});
		},

		statCoupon(page = null, isExport = false) {
			let args = { couponId: this.couponId, page: page, guestPhone: this.query.guestPhone };
			if (args.guestPhone) {
				args.page = 1;
			}
			if (!$.Util.isEmpty(this.query.status)) {
				args.status = this.query.status;
			}

			if (isExport) {
				args.isExport = true;
				this.exportFileUrl = null;
			}

			if (page) this.query.page = page;

			$.Req.service($.SvName.COUPON_STAT, args, ret => {
				if (isExport) {
					this.exportFileUrl = ret.fileurl;
					// 导出优化
					this.$refs.exportXlsRefs.updateExportFileUrl(ret.fileurl);
					return;
				}
				if (page == null) {
					if (ret.guestCnt) {
						this.guestCnt = ret.guestCnt;
						this.usedCnt = ret.usedCnt;
					}
					this.couponLogCnt = ret.count;
				}
				this.couponLogList = ret.couponLogList;
			});
		},

		resetQuery() {
			this.query.guestPhone = null;
			this.query.status = null;
			this.statCoupon();
		},

		viewMember(memberId) {
			this.memberId = memberId;
			this.viewMemberDlg = true;
		},

		viewCust(custId, custName) {
			this.custId = custId;
			this.custName = custName;
			this.viewCustDlg = true;
		},

		updateCouponUsedInfo(log, idx) {
			if (!confirm('此优惠券确定使用过吗？')) {
				return;
			}

			let args = { logId: log.logId };
			$.Req.service($.SvName.COUPON_USED_INFO_UPDATE, args, ret => {
				log.status = 1;
				log.usedTime = $.Util.formatDateTime(new Date());
				this.$set(this.couponLogList, idx, log);
			});
		},

		getCouponUseInfo(c) {
			const { useRelType, logId } = c;
			let args = { useRelType, logId };
			$.Req.service($.SvName.USE_COUPON_LOG_REL_QUERY, args, ret => {
				if (args.useRelType == 1) {
					this.mcp = ret.mcp;
					this.mcpDlg = true;
				} else {
					this.mo = ret.mo;
					this.moDlg = true;
				}
			});
		},

		cancelUsedCoupon(log, idx) {
			if (!confirm('确认撤销使用吗？')) {
				return;
			}
			let args = { logId: log.logId, isCancel: true };
			$.Req.service($.SvName.COUPON_USED_INFO_UPDATE, args, ret => {
				$.Msg.success('撤销成功！');
				log.status = 0;
				log.usedTime = null;
				this.$set(this.couponLogList, idx, log);
			});
		},

		exportToXls() {
			this.$refs.exportXlsRefs.exportToXls(this.query.page, true);
		},

		exportFunc(page) {
			this.query.page = page;
			this.statCoupon(this.query.page, true);
		}
	}
});

/***/ }),

/***/ 1299:
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
//
//
//
//
//
//
//
//
//
//
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
      g: $,
      eventId: this.$route.params.eventId,
      marketEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
      event: {
        eventId: null,
        eventTitle: null,
        eventPic: null,
        eventPrice: null,
        maxEnrollCnt: null,
        eventDesc: null,
        beginDate: null,
        endDate: null,
        shareTitle: null,
        shareDesc: null,
        sharePic: null,
        eventVideoUrl: null
      },
      requiredFields: ['eventTitle', 'eventPic', 'maxEnrollCnt', 'beginDate', 'endDate'],
      formRule: {},
      imgUpload: {
        action: $.Conf.IMG_UPLOAD_URL,
        imgMaxWidth: 1024,
        defaultLisForEvent: [],
        defaultListForShare: [],
        defaultMorePics: []
      },
      imgFileList: [],
      eventSubjectList: [],
      hasMchId: null,
      getVideoIdDlg: false,
      txVideoUrl: null,
      staffList: null,
      noticeStaffIdArr: []
    };
  },

  created() {
    $.Util.addRequiredFieldsRules(this.formRule, this.requiredFields);
    this.queryMchId();
    if (this.eventId) {
      this.queryEvent();
      this.queryEventSubject();
    }
    this.queryStaffList();
  },

  methods: {
    queryMchId() {
      let args = { queryType: 'shop' };
      $.Req.service($.SvName.WX_MCHID_QUERY, args, ret => {
        if (ret.mchId) this.hasMchId = true;else this.hasMchId = false;
      });
    },

    queryEvent() {
      let args = { eventId: this.eventId };
      $.Req.service($.SvName.EVENT_QUERY, args, ret => {
        this.event = ret.event;
        if (this.event.eventPic) {
          let imgUrl = $.Util.getImgUrl(this.event.eventPic, 250, 250, 'EEEEEE');
          this.imgUpload.defaultLisForEvent.push({
            name: this.event.eventPic,
            url: imgUrl
          });
        }
        if (this.event.sharePic) {
          let imgUrl = $.Util.getImgUrl(this.event.sharePic, 250, 250, 'EEEEEE');
          this.imgUpload.defaultListForShare.push({
            name: this.event.sharePic,
            url: imgUrl
          });
        }
        if (this.event.eventMorePics) {
          for (let p of this.event.eventMorePics.split(',')) {
            this.imgUpload.defaultMorePics.push({
              name: p,
              url: $.Util.getImgUrl(p, 200, 200, 'EEEEEE')
            });
          }
        }
        this.imgFileList = this.imgUpload.defaultMorePics;
        if (this.event.noticeStaffIds) {
          for (let staffId of this.event.noticeStaffIds.split(',')) {
            this.noticeStaffIdArr.push(parseInt(staffId));
          }
        }
      });
    },

    saveEvent() {
      this.$refs.event.validate(valid => {
        if (!valid) {
          $.Msg.error($.Lang.SUBMIT_ERR);
          return false;
        }
        if (!this.event.eventPic) {
          $.Msg.error('请上传活动图片');
          return;
        }
        if (!this.event.beginDate || !this.event.endDate) {
          $.Dlg.error('请输入完整的日期');
          return;
        }
        if (this.event.maxEnrollCnt < 1) {
          $.Dlg.error('最多参与人数不能少于1人');
          return;
        }
        if (this.event.eventDesc && this.event.eventDesc.length > 2000) {
          $.Dlg.error('活动描述不能超过2000字');
          return;
        }
        if (this.event.shareTitle && this.event.shareTitle.length > 100) {
          $.Dlg.error('分享标题不能超过100字');
          return;
        }
        if (this.event.shareDesc && this.event.shareDesc.length > 150) {
          $.Dlg.error('分享简介不能超过150字');
          return;
        }
        if (this.imgFileList && this.imgFileList.length > 0) {
          let imgNames = [];
          for (let i = 0; i < this.imgFileList.length; i++) {
            imgNames.push(this.imgFileList[i].name);
          }
          this.event.eventMorePics = imgNames.join(',');
        } else {
          this.event.eventMorePics = null;
        }
        this.event.noticeStaffIds = this.noticeStaffIdArr.join(',');

        let args = {
          actionType: this.event.eventId ? 'U' : 'I',
          event: this.event
        };
        if (!this.event.eventId) {
          args.newEventSubjectList = this.eventSubjectList;
        }

        $.Req.service($.SvName.EVENT_SAVE, args, ret => {
          $.Msg.success($.Lang.OPT_SUCCESS);
          if (!this.eventId) {
            this.$router.push('/market/event-list');
          } else {
            window.scrollTo(0, 0);
          }
        }, true);
      });
    },

    handleImgUploadSuccessForEvent(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;
      this.event.eventPic = res.data.name;
    },

    handleImgUploadSuccessForShare(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;
      this.event.sharePic = res.data.name;
    },

    delEvent() {
      if (!confirm('您确定删除该活动吗？')) {
        return;
      }

      let args = { deleteId: this.eventId, actionType: 'D' };
      $.Req.service($.SvName.EVENT_SAVE, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.$router.push('/market/event-list');
      }, true);
    },

    handleMorePisUploadSuccess(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;
      this.imgFileList.push(file);
    },

    handleImgRemove(file, fileList) {
      this.imgFileList.splice(this.imgFileList.indexOf(file), 1);
    },

    queryEventSubject() {
      let args = {
        eventId: this.eventId
      };
      $.Req.service($.SvName.EVENT_SUBJECT_QUERY, args, ret => {
        this.eventSubjectList = ret.eventSubjectList;
      });
    },

    addEventSubject() {
      this.eventSubjectList.push({
        eventId: this.eventId,
        subjectId: null,
        subjectTitle: null,
        subjectType: null,
        orderNo: this.eventSubjectList.length + 1
      });
    },

    delEventSubject(idx) {
      if (this.eventSubjectList[idx].subjectId) {
        if (confirm('您确定要删除此项？')) {
          let args = {
            eventId: this.eventId,
            actionType: 'D',
            deleteSubjectId: this.eventSubjectList[idx].subjectId
          };
          $.Req.service($.SvName.EVENT_SUBJECT_SAVE, args, ret => {
            $.Msg.success($.Lang.OPT_SUCCESS);
            this.queryEventSubject();
          });
        }
      } else {
        this.eventSubjectList.splice(idx, 1);
      }
    },

    saveEventSubjectList() {
      if (!confirm('您确定要提交吗？')) {
        return;
      }

      // check
      if (this.eventSubjectList.length < 1) {
        $.Dlg.error('请至少添加一项');
        return;
      }
      let i = 0;
      for (let es of this.eventSubjectList) {
        i++;
        if (!es.orderNo) {
          $.Dlg.error('请填写第 {0} 行的序号'.format(i));
          return;
        }
        if (!es.subjectTitle) {
          $.Dlg.error('请填写第 {0} 项的标题'.format(i));
          return;
        }
        if ($.Util.isEmpty(es.subjectType)) {
          $.Dlg.error('请选择第 {0} 项的题型'.format(i));
          return;
        }
        if (es.subjectType === 0 || es.subjectType === 1) {
          if ($.Util.isEmpty(es.options)) {
            $.Dlg.error('请填写第 {0} 项的选项内容'.format(i));
            return;
          }
        } else {
          es.options = null;
        }
      }

      let args = {
        eventId: this.eventId,
        eventSubjectList: this.eventSubjectList
      };
      $.Req.service($.SvName.EVENT_SUBJECT_SAVE, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.queryEventSubject();
      });
    },

    parseTxVideoUrl() {
      if (!this.txVideoUrl) {
        $.Msg.error('请输入视频页面地址');
        return;
      }
      try {
        let elements = this.txVideoUrl.split('/');
        if (elements.length > 3) {
          let videoId = elements[elements.length - 1].split('.')[0];
          let reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
          if (reg.test(videoId) || videoId.length > 15) {
            throw 'error';
          }
          this.event.eventVideoUrl = videoId;
        } else {
          throw 'error';
        }
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.getVideoIdDlg = false;
      } catch (e) {
        alert('视频页面地址输入有误。');
      }
    },

    queryStaffList() {
      $.Req.service($.SvName.STAFF_QUERY, { status: 0, needBaseInfo: true }, ret => {
        this.staffList = ret.staffList;
      });
    }
  }
});

/***/ }),

/***/ 1300:
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
						g: window.$,
						editable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
						eventList: [],
						eventCount: null,
						qrcodeUrl: null,
						query: {
								eventId: null,
								page: null
						},
						selectEvent: null,
						selectEventId: null,
						eventEnrollStatus: 1,
						eventEnrollCount: null,
						eventEnrollList: null,
						eventSubjectList: null,
						eventSubjectAnswerMap: {},
						eventEnrollDlg: false,
						selectEnrollId: null,
						selectEnrollIdx: null,
						eventLinkDlg: null,
						selectEventUrl: null,
						shopId: null,
						eventSubjectStatDlg: null,
						eventSubjectStat: {},
						eventSubjectEnrollDlg: null,
						selectSubjectId: null,
						selectSubjectOptionIdx: null,
						exportFileUrl: null,
						exportDlg: null
				};
		},

		created() {
				this.queryEventList();
				this.queryShopId();
		},

		methods: {
				queryEventList(page = null) {
						let args = {};
						if (!page) {
								this.eventCount = null;
						} else {
								args.page = page;
						}

						$.Req.service($.SvName.EVENT_QUERY, args, ret => {
								this.eventList = ret.eventList;
								if (!page) {
										this.eventCount = ret.count;
								}
						}, true);
				},

				queryShopId() {
						$.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
								this.shopId = ret.shopId;
						});
				},

				openEventEnrollDlg(event) {
						this.selectEvent = event;
						this.selectEventId = event.eventId;
						this.queryEventEnroll();
						this.queryEventSubject();
						this.eventEnrollDlg = true;
				},

				queryEventEnroll(page = null, isExport = false) {
						this.selectEnrollId = null;
						this.selectEnrollIdx = null;
						if (!page) {
								this.eventEnrollCount = null;
						}
						let args = { eventId: this.selectEventId, status: this.eventEnrollStatus, page: page };
						if (isExport) {
								args.isExport = true;
								this.exportFileUrl = null;
								this.exportDlg = true;
						} else {
								this.eventEnrollList = [];
								if (page === null) {
										this.eventEnrollCount = null;
								}
						}
						$.Req.service($.SvName.EVENT_ENROLL_QUERY, args, ret => {
								if (isExport) {
										this.exportFileUrl = ret.fileurl;
										return;
								}

								if (!page) {
										this.eventEnrollCount = ret.count;
								}
								this.eventEnrollList = ret.eventEnrollList;
						});
				},

				selectEnroll(idx) {
						if (idx === this.selectEnrollIdx) return;
						this.selectEnrollId = this.eventEnrollList[idx].enrollId;
						this.selectEnrollIdx = idx;
						let args = {
								enrollId: this.selectEnrollId
						};
						$.Req.service($.SvName.EVENT_SUBJECT_ANSWER_QUERY, args, ret => {
								this.eventSubjectAnswerMap = {};
								for (let sa of ret.eventSubjectAnswerList) {
										let val = null;
										if (sa.subjectType === 0) {
												val = parseInt(sa.optionValue);
										} else if (sa.subjectType === 1) {
												let arr = sa.optionValue ? sa.optionValue.split(',') : [];
												val = [];
												for (let a of arr) {
														val.push(parseInt(a));
												}
										} else {
												val = sa.optionValue;
										}
										this.eventSubjectAnswerMap[sa.subjectId] = val;
								}
						});

						$.Req.service($.SvName.EVENT_ENROLL_QUERY, { eventId: 1, subjectId: 1, optionIndex: 0 }, r => {});
				},

				queryEventSubject(callback = null) {
						let args = { eventId: this.selectEventId };
						$.Req.service($.SvName.EVENT_SUBJECT_QUERY, args, ret => {
								for (let s of ret.eventSubjectList) {
										s.optionList = [];
										if (s.options) {
												for (let opt of s.options.split('\n')) {
														if (opt && opt.trim()) {
																s.optionList.push(opt.trim());
														}
												}
										}
								}
								this.eventSubjectList = ret.eventSubjectList;

								if (callback) callback();
						});
				},

				deleteEvent(eventId) {
						if (!confirm('您确定删除该活动吗？')) {
								return;
						}
						let args = {
								actionType: 'D',
								deleteId: eventId
						};
						$.Req.service($.SvName.EVENT_SAVE, args, ret => {
								$.Msg.success($.Lang.OPT_SUCCESS);
								this.queryEventList();
						});
				},

				openEventLinkDlg(event) {
						this.selectEvent = event;
						this.selectEventUrl = $.Conf.MSITE_BASE_URL + '/#/event-detail?eventId={0}&s={1}'.format(event.eventId, this.shopId);
						this.eventLinkDlg = true;
				},

				openEventSubjectStatDlg(event) {
						if (event.curEnrollCnt === 1) {
								$.Msg.warning('仅有一人参与，无需统计吧');
								return;
						}
						this.selectEventId = event.eventId;
						this.queryEventSubject(() => {
								this.queryEventSubjectStat();
						});
						this.eventSubjectStatDlg = true;
				},

				queryEventSubjectStat() {
						let args = { eventId: this.selectEventId };
						$.Req.service($.SvName.EVENT_SUBJECT_STAT, args, ret => {
								let curEnrollCnt = ret.curEnrollCnt;
								this.eventSubjectStat = {};
								for (let s of ret.eventSubjectStatList) {
										if (s.checkedCnt) {
												s.checkedRate = (s.checkedCnt / curEnrollCnt).toFixed(3);
										}
										this.eventSubjectStat[s.subjectId + '/' + s.optionIndex] = s;
								}
						});
				},

				openEventEnrollQueryByOptionDlg(subjectId, optionIndex) {
						this.selectSubjectId = subjectId;
						this.selectSubjectOptionIdx = optionIndex;
						this.queryEventEnrollByOption();
						this.eventSubjectEnrollDlg = true;
				},

				queryEventEnrollByOption(page = null) {
						if (!page) {
								this.eventEnrollCount = null;
						}
						let args = {
								eventId: this.selectEventId,
								status: 1,
								subjectId: this.selectSubjectId,
								optionIndex: this.selectSubjectOptionIdx,
								page: page
						};
						$.Req.service($.SvName.EVENT_ENROLL_QUERY, args, ret => {
								if (!page) {
										this.eventEnrollCount = ret.count;
								}
								this.eventEnrollList = ret.eventEnrollList;
						});
				},

				exportToXls() {
						this.queryEventEnroll(null, true);
				}
		}
});

/***/ }),

/***/ 1301:
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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, ImgUpload: __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue___default.a, Help: __WEBPACK_IMPORTED_MODULE_2__components_help___default.a },
  props: {},
  data() {
    return {
      g: $,
      productId: this.$route.params.productId,
      marketEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
      product: {
        productId: null,
        beginTime: null,
        endTime: null,
        productTitle: null,
        productPic: null,
        price: null,
        usableDays: null,
        consumerType: 0, // 0 不限；1 访客；2 会员
        shareTitle: null,
        sharePic: null,
        shareDesc: null,
        productDesc: null,
        maxBuyCnt: null
      },
      requiredFields: ["productTitle", "price", "beginTime", "endTime"],
      formRule: {},
      imgUpload: {
        action: $.Conf.IMG_UPLOAD_URL,
        imgMaxWidth: 1024,
        defaultLisForProduct: [],
        defaultListForShare: []
      },
      imgFileList: []
    };
  },
  computed: {},
  watch: {},
  created() {
    $.Util.addRequiredFieldsRules(this.formRule, this.requiredFields);
    this.queryCards(() => {
      if (this.productId) {
        this.queryEntryTicketProduct();
      }
    });
  },
  mounted() {},
  methods: {
    queryCards(callback = null) {
      $.Req.service($.SvName.CARD_QUERY, { status: 0 }, ret => {
        this.cardList = ret.cardList;
        if (callback) callback();
      });
    },

    queryEntryTicketProduct(callback = null) {
      const args = { productId: this.productId };
      $.Req.service($.SvName.ENTRY_TICKET_PRODUCT_QUERY, args, ret => {
        this.product = ret.entryTicketProduct;
        if (this.product.productPic) {
          let imgUrl = $.Util.getImgUrl(this.product.productPic, 250, 250, "EEEEEE");
          this.imgUpload.defaultLisForProduct.push({
            name: this.product.productPic,
            url: imgUrl
          });
        }
        if (this.product.sharePic) {
          let imgUrl = $.Util.getImgUrl(this.product.sharePic, 250, 250, "EEEEEE");
          this.imgUpload.defaultListForShare.push({
            name: this.product.sharePic,
            url: imgUrl
          });
        }
        if (callback) callback();
      }, true);
    },
    saveTicketlProduct() {
      this.$refs.product.validate(valid => {
        if (!valid) {
          $.Msg.error($.Lang.SUBMIT_ERR);
          return false;
        }

        if (!this.product.productPic) {
          $.Msg.error("请上传商品图片");
          return;
        }

        if (this.product.price < 0.01) {
          $.Dlg.error("商品售价不能小于0.01");
          return;
        }

        if (!this.product.beginTime || !this.product.endTime) {
          $.Dlg.error("请输入完整的期限");
          return;
        }
        if (this.product.productDesc && this.product.productDesc.length > 2000) {
          $.Dlg.error("商品描述不能超过2000字");
          return;
        }
        if (this.product.shareTitle && this.product.shareTitle.length > 100) {
          $.Dlg.error("分享标题不能超过100字");
          return;
        }
        if (this.product.shareDesc && this.product.shareDesc.length > 150) {
          $.Dlg.error("分享简介不能超过150字");
          return;
        }

        let args = {
          actionType: this.productId ? "U" : "I",
          entryTicketProduct: this.product
        };
        $.Req.service($.SvName.ENTRY_TICKET_PRODUCT_SAVE, args, ret => {
          $.Msg.success($.Lang.OPT_SUCCESS);
          if (!this.productId) {
            this.$router.push("/market/fit-entry-ticket");
          } else {
            window.scrollTo(0, 0);
          }
        }, true);
      });
    },

    delTicketlProduct() {
      $.Dlg.confirm("是否删除该商品？", () => {
        let args = { deleteId: this.productId, actionType: "D" };
        $.Req.service($.SvName.ENTRY_TICKET_PRODUCT_SAVE, args, ret => {
          $.Msg.success($.Lang.OPT_SUCCESS);
          this.$router.push("/market/fit-entry-ticket");
        }, true);
      });
    },

    handleImgUploadSuccessForProduct(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;
      this.product.productPic = res.data.name;
    },

    handleImgUploadSuccessForShare(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;
      this.product.sharePic = res.data.name;
    }
  }
});

/***/ }),

/***/ 1302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fit_entry_ticket_buy_list__ = __webpack_require__(2197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fit_entry_ticket_buy_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__fit_entry_ticket_buy_list__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { entryTicketBuyList: __WEBPACK_IMPORTED_MODULE_0__fit_entry_ticket_buy_list___default.a },
  props: {},
  data() {
    return {
      g: window.$,
      hasMchId: null,
      editable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
      productList: [],
      consumerTypeMap: {
        0: "不限",
        1: "访客",
        2: "会员"
      },
      qrcodeUrl: "",
      couponsUrl: "",
      shopId: null,
      count: 0,
      selectPrd: null,
      prdLinkDlg: null,
      selectPrdUrl: null,
      entryTicketImgUrl: null,
      entryTicketImgDlg: false
    };
  },
  computed: {},
  watch: {},
  created() {
    this.queryMchId();
    this.queryTicketProductList();
    this.queryShopId();
  },
  mounted() {},
  methods: {
    queryShopId() {
      $.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
        this.shopId = ret.shopId;
      });
    },

    queryMchId() {
      let args = { queryType: "shop" };
      $.Req.service($.SvName.WX_MCHID_QUERY, args, ret => {
        if (ret.mchId) this.hasMchId = true;else this.hasMchId = false;
      });
    },

    queryTicketProductList(page = null) {
      $.Req.service($.SvName.ENTRY_TICKET_PRODUCT_QUERY, { page }, ret => {
        this.productList = ret.productList;
        // page优化
        if (!page) {
          this.count = ret.count;
        }
      }, true);
    },

    delProduct(productId) {
      $.Dlg.confirm("是否删除该商品？", () => {
        let args = { deleteId: productId, actionType: "D" };
        $.Req.service($.SvName.ENTRY_TICKET_PRODUCT_SAVE, args, ret => {
          $.Msg.success($.Lang.OPT_SUCCESS);
          this.queryTicketProductList();
        }, true);
      });
    },

    openPrdLinkDlg(prd) {
      this.selectPrd = prd;
      this.selectPrdUrl = $.Conf.MSITE_BASE_URL + "/#/fit-entry-ticket?productId={0}&s={1}".format(prd.productId, this.shopId);
      this.prdLinkDlg = true;
    },

    createEntryTicketImg() {
      $.Req.service($.SvName.ENTRY_TICKET_IMG_CREATE, { productId: this.selectPrd.productId }, ret => {
        this.entryTicketImgUrl = ret.imgUrl;
        this.entryTicketImgDlg = true;
      }, true);
    }
  }
});

/***/ }),

/***/ 1303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, ImgUpload: __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue___default.a },
	data() {
		return {
			g: $,
			gameId: this.$route.params.gameId,
			menuList: $.PageMenus.geGame('ge-game-edit', this.$route.params.gameId),
			marketEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
			roles: [],
			geGame: {
				title: null,
				limitRole: 1,
				maxGameCnt: 1,
				eggNum: 9,
				beginDate: new Date(),
				shareTitle: null,
				shareDesc: null,
				sharePic: null
			},
			requiredFields: ['gameTitle', 'limitRole', 'maxGameCnt', 'beginDate', 'endDate'],
			formRule: {},
			prizeList: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
			imgUpload: {
				action: $.Conf.IMG_UPLOAD_URL,
				imgMaxWidth: 1024,
				defaultListForShare: []
			}
		};
	},

	created() {
		$.Util.addRequiredFieldsRules(this.formRule, this.requiredFields);
		if (this.gameId) {
			this.queryGeGame();
		} else {
			for (let p of this.prizeList) {
				p = { prizeName: null, prizeCnt: null };
			}
		}
	},

	methods: {
		queryGeGame() {
			$.Req.service($.SvName.GE_GAME_QUERY, { gameId: this.gameId }, ret => {
				if (ret.geGame) {
					this.geGame = ret.geGame;
					for (let i = 0; i < ret.geGamePrizeList.length; i++) {
						this.prizeList[i] = ret.geGamePrizeList[i];
					}

					if (this.geGame.sharePic) {
						let imgUrl = $.Util.getImgUrl(this.geGame.sharePic, 250, 250, 'EEEEEE');
						this.imgUpload.defaultListForShare.push({
							name: this.geGame.sharePic,
							url: imgUrl
						});
					}
				} else {
					$.Msg.error($.Lang.NOT_FOUND_TIPS);
				}
			});
		},

		saveGeGame() {
			this.$refs.geGame.validate(valid => {
				if (!valid) {
					$.Msg.error($.Lang.SUBMIT_ERR);
					return false;
				}

				if (!this.geGame.beginDate || !this.geGame.endDate) {
					$.Dlg.warning('请输入完整的活动有效期');
					return;
				}
				if (this.geGame.eggNum > 9 || this.geGame.eggNum < 1) {
					$.Dlg.warning('请输入有效的金蛋个数[1 ~ 9]');
					return;
				}

				if (this.prizeList) {
					let prizeNum = 0;
					for (let p of this.prizeList) {
						if (p.prizeName && !p.prizeCnt) {
							$.Dlg.warning('请输入【{0}】的奖品数量'.format(p.prizeName));
							return;
						}
						if (p.prizeName && p.prizeCnt) prizeNum++;
					}
					if (this.geGame.eggNum < prizeNum) {
						$.Dlg.warning('设置的金蛋奖品种类数【{0}】，不能大于金蛋个数【{1}】'.format(prizeNum, this.geGame.eggNum));
						return;
					}
				}

				let args = {
					actionType: this.gameId ? 'U' : 'I',
					geGame: this.geGame,
					geGamePrizeList: this.prizeList
				};

				$.Req.service($.SvName.GE_GAME_SAVE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					if (this.args.actionType === 'I') {
						this.$router.push('/market/ge-game-list');
					} else {
						window.scrollTo(0, 0);
					}
				}, true);
			});
		},

		delGeGame() {
			if (!confirm('确定删除该活动吗？')) {
				return;
			}

			let args = { deleteGameId: this.gameId, actionType: 'D' };
			$.Req.service($.SvName.GE_GAME_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.$router.push('/market/ge-game-list');
			}, true);
		},

		clearPrize(idx) {
			this.$set(this.prizeList, idx, { prizeId: this.prizeList[idx].prizeId });
		},

		handleImgUploadSuccessForShare(res, file) {
			file.url = res.data.url;
			file.name = res.data.name;
			this.geGame.sharePic = res.data.name;
		}
	}
});

/***/ }),

/***/ 1304:
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



/* harmony default export */ __webpack_exports__["default"] = ({
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a },
	data() {
		return {
			g: window.$,
			editable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
			geGameList: [],
			geGameListUrl: null,
			qrcodeUrl: null,
			geGameLinkDlg: null,
			selectGame: null,
			selectEventUrl: null,
			shopId: null
		};
	},

	created() {
		this.querygeGameList();
		this.queryShopId();
	},

	methods: {
		querygeGameList() {
			$.Req.service($.SvName.GE_GAME_QUERY, {}, ret => {
				if (ret.geGameList) this.geGameList = ret.geGameList;
			}, true);
		},

		delGeGame(gameId) {
			if (!confirm('确定删除该砸金蛋活动吗？')) {
				return;
			}

			let args = { deleteGameId: gameId, actionType: 'D' };
			$.Req.service($.SvName.GE_GAME_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.querygeGameList();
			});
		},

		queryShopId() {
			$.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
				this.shopId = ret.shopId;
			});
		},

		openGeGameLinkDlg(event) {
			this.selectGame = event;
			this.selectEventUrl = $.Conf.MSITE_BASE_URL + '/#/smash-golden-egg?gameId={0}&s={1}'.format(event.gameId, this.shopId);
			this.geGameLinkDlg = true;
		}
	}
});

/***/ }),

/***/ 1305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_cust_cust_detail_vue__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_cust_cust_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_cust_cust_detail_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_sys_time_select__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_sys_time_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_sys_time_select__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { TimeSelect: __WEBPACK_IMPORTED_MODULE_3__components_sys_time_select___default.a, PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default.a, CustDetail: __WEBPACK_IMPORTED_MODULE_2__pages_cust_cust_detail_vue___default.a },
	data() {
		return {
			g: window.$,
			gameId: this.$route.params.gameId,
			menuList: $.PageMenus.geGame('ge-game-stat', this.$route.params.gameId),
			gameRecordList: null,
			geGame: null,
			geGamePrizeList: null,
			recordCnt: null,
			viewMemberDlg: false,
			viewCustDlg: false,
			memberId: null,
			custId: null,
			custName: null,
			query: {
				status: -1,
				prizeId: null
			}
		};
	},

	created() {
		if (this.gameId) {
			this.queryGeGame(() => {
				this.queryGeGameRecord();
			});
		}
	},

	methods: {
		queryGeGame(callback) {
			$.Req.service($.SvName.GE_GAME_QUERY, { gameId: this.gameId }, ret => {
				if (ret.geGame) {
					this.geGame = ret.geGame;
					this.geGamePrizeList = ret.geGamePrizeList;

					if (callback) callback();
				} else {
					$.Msg.error($.Lang.NOT_FOUND_TIPS);
				}
			});
		},

		queryGeGameRecord(page = null) {
			if (!page) this.recordCnt = null;
			let args = { gameId: this.gameId, prizeId: this.query.prizeId, page: page };
			if (this.query.status >= 0) args.status = this.query.status;
			$.Req.service($.SvName.GE_GAME_RECORD_QUERY, args, ret => {
				this.gameRecordList = ret.recordList;
				if (!page) this.recordCnt = ret.count;
				window.scrollTo(0, 0);
			});
		},

		viewMember(memberId) {
			this.memberId = memberId;
			this.viewMemberDlg = true;
		},

		viewCust(custId, custName) {
			this.custId = custId;
			this.custName = custName;
			this.viewCustDlg = true;
		},

		receivePrize(r, idx) {
			let args = { recordId: r.recordId };
			$.Req.service($.SvName.GE_GAME_PRIZE_RECEIVE, args, ret => {
				r.receivedTime = $.Util.formatDateTime(new Date());
				this.$set(this.gameRecordList, idx, r);
			}, true);
		}
	}
});

/***/ }),

/***/ 1306:
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



/* harmony default export */ __webpack_exports__["default"] = ({
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a },
	data() {
		return {
			g: window.$,
			editable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
			menuList: $.PageMenus.groupbuyProduct('groupbuy-help'),
			productList: null
		};
	},

	created() {},

	methods: {}
});

/***/ }),

/***/ 1307:
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



/* harmony default export */ __webpack_exports__["default"] = ({
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a },
	data() {
		return {
			g: window.$,
			menuList: $.PageMenus.groupbuyProduct('groupbuy-order'),
			editable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
			orderList: null,
			totalCount: null,
			query: {
				page: null,
				status: null,
				phoneNo: null,
				beginDate: null,
				endDate: null
			}
		};
	},

	created() {
		this.queryGroupbuyOrderList();
	},

	methods: {
		queryGroupbuyOrderList(page = null) {
			this.query.page = page;
			let args = {
				page: page,
				status: this.query.status,
				beginDate: this.query.beginDate,
				endDate: this.query.endDate
			};
			$.Req.service($.SvName.GROUPBUY_ORDER_QUERY, args, ret => {
				this.orderList = ret.orderList;
				if (page === null) {
					this.totalCount = ret.count;
				}
			}, true);
		},

		queryGroupOrderByPhone() {
			if (!$.Util.validatePhoneNo(this.query.phoneNo)) {
				$.Msg.error($.Lang.PHONE_NO_ERR);
				return;
			}
			let args = { phoneNo: this.query.phoneNo, page: 1 };
			$.Req.service($.SvName.GROUPBUY_ORDER_QUERY, args, ret => {
				this.orderList = ret.orderList;
				this.totalCount = ret.orderList.length;
			}, true);
		}
	}
});

/***/ }),

/***/ 1308:
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
//
//
//
//
//
//
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
      g: $,
      gpId: this.$route.params.gpId,
      productPriceEditable: true,
      menuList: $.PageMenus.groupbuyProduct("groupbuy-product-edit", this.$route.params.gpId),
      marketEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
      product: {
        gpId: null,
        productTitle: null,
        productPic: null,
        originalPrice: null,
        price: null,
        limitMembers: null,
        consumerType: "0",
        teamMemberType: null,
        productDesc: null,
        remark: null,
        shareTitle: null,
        shareDesc: null,
        sharePic: null,
        sendSmsForJoin: false,
        sendSmsForEnd: false,
        sendSmsForCancel: false,
        hasRefund: false,
        cardId: null,
        cardType: null,
        cardTimes: null,
        cardAmount: null,
        cardDays: null
      },
      requiredFields: ["productTitle", "originalPrice", "price", "imprest", "limitMembers", "limitHours", "hasRefund"],
      formRule: {},
      imgUpload: {
        action: $.Conf.IMG_UPLOAD_URL,
        imgMaxWidth: 1024,
        defaultLisForProduct: [],
        defaultListForShare: [],
        defaultMorePics: []
      },
      imgFileList: [],
      cardList: []
    };
  },

  created() {
    $.Util.addRequiredFieldsRules(this.formRule, this.requiredFields);
    this.queryCards();

    if (this.gpId) {
      this.queryGroupbuyProduct();
    }
  },

  methods: {
    queryCards(callback = null) {
      $.Req.service($.SvName.CARD_QUERY, { status: 0 }, ret => {
        this.cardList = ret.cardList;
        if (callback) callback();
      });
    },

    handleCardSelect(cardId) {
      if (!cardId) return;

      for (let c of this.cardList) {
        if (c.cardId === cardId) {
          this.product.cardType = c.cardType;
          this.product.cardDays = c.defaultDays;
          if (c.cardType === 2) {
            this.product.cardTimes = c.defaultTimes;
          } else if (c.cardType === 3) {
            this.product.cardAmount = c.defaultAmount;
          } else if (c.cardType === 4) {
            this.product.cardTimes = c.defaultTimes;
          }
          break;
        }
      }
    },

    queryGroupbuyProduct() {
      let args = { gpId: this.gpId };
      $.Req.service($.SvName.GROUPBUY_PRODUCT_QUERY, args, ret => {
        this.product = ret.groupbuyProduct;
        this.productPriceEditable = !this.product.teamCnt;
        if (this.product.productPic) {
          let imgUrl = $.Util.getImgUrl(this.product.productPic, 250, 250, "EEEEEE");
          this.imgUpload.defaultLisForProduct.push({
            name: this.product.productPic,
            url: imgUrl
          });
        }
        if (this.product.sharePic) {
          let imgUrl = $.Util.getImgUrl(this.product.sharePic, 250, 250, "EEEEEE");
          this.imgUpload.defaultListForShare.push({
            name: this.product.sharePic,
            url: imgUrl
          });
        }
        if (this.product.productMorePics) {
          for (let p of this.product.productMorePics.split(",")) {
            this.imgUpload.defaultMorePics.push({
              name: p,
              url: $.Util.getImgUrl(p, 200, 200, "EEEEEE")
            });
          }
        }
        this.imgFileList = this.imgUpload.defaultMorePics;
      });
    },

    saveGroupbuyProduct() {
      this.$refs.product.validate(valid => {
        if (!valid) {
          $.Msg.error($.Lang.SUBMIT_ERR);
          return false;
        }
        if (this.product.cardId) {
          // 会员卡商品
          if (this.product.cardType === 1) {
            // 期限卡
            if (!this.product.cardDays) {
              $.Msg.error("请输入使用天数");
              return false;
            }
            if (this.product.cardDays <= 0) {
              $.Msg.error("使用天数需大于0");
              return false;
            }
          } else if (this.product.cardType === 2) {
            // 次数卡
            if (!this.product.cardTimes) {
              $.Msg.error("请输入使用次数");
              return false;
            }
            if (this.product.cardTimes <= 0) {
              $.Msg.error("使用次数需大于0");
              return false;
            }
          } else if (this.product.cardType === 3) {
            // 储值卡
            if (!this.product.cardAmount) {
              $.Msg.error("请输入使用金额");
              return false;
            }
            if (this.product.cardAmount <= 0) {
              $.Msg.error("使用金额需大于0");
              return false;
            }
          } else if (this.product.cardType === 4) {
            // 计时卡
            if (!this.product.cardTimes) {
              $.Msg.error("请输入使用时间");
              return false;
            }
            if (this.product.cardTimes <= 0) {
              $.Msg.error("使用时间需大于0");
              return false;
            }
          }
        }
        if (!this.product.productPic) {
          $.Msg.error("请上传商品图片");
          return;
        }
        if (this.product.originalPrice < this.product.price) {
          $.Dlg.error("拼团价格不能高于原价");
          return;
        }
        if (this.product.imprest < 0.01) {
          $.Dlg.error("预付款不能小于0.01");
          return;
        }
        if (this.product.limitMembers < 2) {
          $.Dlg.error("成团人数不能少于2人");
          return;
        }
        if (!this.product.beginDate || !this.product.endDate) {
          $.Dlg.error("请输入完整的拼团时间");
          return;
        }
        if (this.product.productDesc && this.product.productDesc.length > 1000) {
          $.Dlg.error("商品描述不能超过1000字");
          return;
        }
        if (this.product.remark && this.product.remark.length > 1000) {
          $.Dlg.error("拼团说明不能超过1000字");
          return;
        }
        if (this.product.shareTitle && this.product.shareTitle.length > 100) {
          $.Dlg.error("分享标题不能超过100字");
          return;
        }
        if (this.product.shareDesc && this.product.shareDesc.length > 200) {
          $.Dlg.error("分享简介不能超过200字");
          return;
        }
        if (this.imgFileList && this.imgFileList.length > 0) {
          let imgNames = [];
          for (let i = 0; i < this.imgFileList.length; i++) {
            imgNames.push(this.imgFileList[i].name);
          }
          this.product.productMorePics = imgNames.join(",");
        } else {
          this.product.productMorePics = null;
        }

        let args = {
          actionType: this.product.gpId ? "U" : "I",
          groupbuyProduct: this.product
        };

        $.Req.service($.SvName.GROUPBUY_PRODUCT_SAVE, args, ret => {
          $.Msg.success($.Lang.OPT_SUCCESS);
          this.$router.push("/market/groupbuy-product");
        }, true);
      });
    },

    handleImgUploadSuccessForProduct(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;
      this.product.productPic = res.data.name;
    },

    handleImgUploadSuccessForShare(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;
      this.product.sharePic = res.data.name;
    },

    delGroupbuyProduct() {
      if (!confirm("确定删除该拼团商品吗？")) {
        return;
      }

      let args = { deleteId: this.gpId, actionType: "D" };
      $.Req.service($.SvName.GROUPBUY_PRODUCT_SAVE, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.$router.push("/market/groupbuy-product");
      }, true);
    },

    handleMorePisUploadSuccess(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;
      this.imgFileList.push(file);
    },

    handleImgRemove(file, fileList) {
      this.imgFileList.splice(this.imgFileList.indexOf(file), 1);
    }
  }
});

/***/ }),

/***/ 1309:
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



/* harmony default export */ __webpack_exports__["default"] = ({
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a },
	data() {
		return {
			g: window.$,
			menuList: $.PageMenus.groupbuyProduct('groupbuy-product'),
			editable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
			productList: null,
			totalCount: null,
			queryPage: null,
			qrcodeUrl: null,
			groupbuyUrl: null,
			selectProduct: null,
			prdLinkDlg: false,
			shopId: null,
			selectPrdUrl: null
		};
	},

	created() {
		this.queryShopId();
		this.queryGroupbuyProductList();
	},

	methods: {
		queryShopId() {
			$.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
				this.shopId = ret.shopId;
				this.groupbuyUrl = $.Conf.MSITE_BASE_URL + '/#/groupbuy-product-list?s=' + this.shopId;
				this.qrcodeUrl = $.Conf.QR_CODE_URL + encodeURIComponent(this.groupbuyUrl);
			});
		},

		queryGroupbuyProductList(page = null) {
			this.queryPage = page;
			let args = { page: page };
			$.Req.service($.SvName.GROUPBUY_PRODUCT_QUERY, args, ret => {
				this.productList = ret.groupbuyProductList;
				if (page === null) {
					this.totalCount = ret.count;
				}
			});
		},

		delGroupbuyProduct(gpId) {
			if (!confirm('确定删除该拼团商品吗？')) {
				return;
			}
			let args = { deleteId: gpId, actionType: 'D' };
			$.Req.service($.SvName.GROUPBUY_PRODUCT_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryGroupbuyProductList();
			}, true);
		},

		openPrdLinkDlg(prd) {
			this.selectProduct = prd;
			this.selectPrdUrl = $.Conf.MSITE_BASE_URL + '/#/groupbuy-product/{0}?s={1}'.format(prd.gpId, this.shopId);
			this.prdLinkDlg = true;
		}
	}
});

/***/ }),

/***/ 1310:
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



/* harmony default export */ __webpack_exports__["default"] = ({
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a },
	data() {
		return {
			g: window.$,
			menuList: $.PageMenus.groupbuyProduct('groupbuy-team'),
			editable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
			groupbuyTeamList: null,
			totalCount: null,
			queryPage: null,
			query: {
				beginDate: null,
				endDate: null,
				teamStatus: 0,
				notRefund: false,
				orderType: 1
			},
			cntStat: {
				unfinished: 0,
				finished: 0,
				canceled: 0
			},
			orderCount: null,
			orderDlg: false,
			orderPage: null,
			orderList: null,
			selectGtId: null,
			gtLinkDlg: false,
			selectGt: null,
			selectGtUrl: null,
			shopId: null,
			changeEndTimeDlg: null,
			newEndTime: null
		};
	},

	created() {
		this.queryShopId();
		this.queryGroupbuyTeamCountByStatus();
		this.queryGroupbuyTeamList();
	},

	methods: {
		queryShopId() {
			$.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
				this.shopId = ret.shopId;
			});
		},

		queryGroupbuyTeamList(page = null) {
			this.queryPage = page;
			let args = { page: page, status: this.query.teamStatus, orderType: this.orderType };
			if (this.query.teamStatus === 2) {
				if (this.query.notRefund) args.refundStatus = 0;
			}
			if (this.query.beginDate && this.query.endDate) {
				args.beginDate = this.query.beginDate;
				args.endDate = this.query.endDate;
			}
			this.queryGroupbuyTeamCountByStatus();
			$.Req.service($.SvName.GROUPBUY_TEAM_QUERY, args, ret => {
				this.groupbuyTeamList = ret.groupbuyTeamList;
				if (page === null) {
					this.totalCount = ret.count;
				}
			}, true);
		},

		queryGroupbuyTeamCountByStatus() {
			let args = { status: this.query.teamStatus };
			if (this.query.beginDate && this.query.endDate) {
				args.beginDate = this.query.beginDate;
				args.endDate = this.query.endDate;
			}
			$.Req.service($.SvName.GROUPBUY_TEAM_COUNT_BY_STATUS_QUERY, args, ret => {
				this.cntStat.unfinished = ret.unfinished;
				this.cntStat.finished = ret.finished;
				this.cntStat.canceled = ret.canceled;
			});
		},

		viewTeamOrder(gtId) {
			this.selectGtId = gtId;
			this.orderDlg = true;
			this.queryOrder();
		},

		queryOrder(page = null) {
			this.orderPage = page;
			let args = {
				page: page,
				gtId: this.selectGtId
			};
			$.Req.service($.SvName.GROUPBUY_ORDER_QUERY, args, ret => {
				this.orderList = ret.orderList;
				if (page === null) {
					this.orderCount = ret.count;
				}
			}, true);
		},

		refundGroupbuyTeam(gtId) {
			let msg = '确定要给该团退款吗？ 退款后该团所有参团人员的支付金额将原路返还。';
			$.Dlg.confirm(msg, yes => {
				let args = { gtId: gtId };
				$.Req.service($.SvName.GROUPBUY_TEAM_REFUND, args, ret => {
					$.Dlg.success('已退款成功！');
					this.queryGroupbuyTeamList();
				}, true);
			});
		},

		changeGtOrderType() {
			if (this.query.orderType === 1) this.query.orderType = 2;else this.query.orderType = 1;
			this.queryGroupbuyTeamList();
		},

		openGtLinkDlg(gt) {
			this.selectGt = gt;
			this.selectGtUrl = $.Conf.MSITE_BASE_URL + '/#/groupbuy-product/{0}?gtId={1}&s={2}'.format(gt.gpId, gt.gtId, this.shopId);
			this.gtLinkDlg = true;
		},

		openChangeGroupbuyEndTimeDlg(gtId, endTime) {
			this.selectGtId = gtId;
			this.changeEndTimeDlg = true;
			this.newEndTime = endTime;
		},

		changeGroupbuyEndTime() {
			if (!this.newEndTime) {
				$.Msg.warning('请输入有效的结束时间');
				return;
			}

			let args = {
				gtId: this.selectGtId,
				endTime: this.newEndTime
			};
			$.Req.service($.SvName.GROUPBUY_TEAM_TIME_CHANGE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.changeEndTimeDlg = false;
				this.queryGroupbuyTeamCountByStatus();
				this.queryGroupbuyTeamList();
			});
		}
	}
});

/***/ }),

/***/ 1311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_help_vue__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_help_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, Help: __WEBPACK_IMPORTED_MODULE_1__components_help_vue___default.a },
	data() {
		return {
			g: $,
			lotteryId: this.$route.params.lotteryId,
			menuList: $.PageMenus.lottery('lottery-edit', this.$route.params.lotteryId),
			marketEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
			roles: [],
			lottery: {
				title: null,
				limitRole: 1,
				limitDrawNum: 1,
				beginDate: new Date(),
				receiveEndDate: null
			},
			requiredFields: ['title', 'limitRole', 'limitDrawNum', 'beginDate', 'endDate'],
			formRule: {},
			prizeList: [{}, {}, {}, {}, {}, {}, {}, {}]
		};
	},

	created() {
		$.Util.addRequiredFieldsRules(this.formRule, this.requiredFields);
		if (this.lotteryId && $.Util.isInteger(this.lotteryId)) {
			this.queryLottery();
		} else {
			for (let p of this.prizeList) {
				p = { name: null, pubNum: null };
			}
		}
	},

	methods: {
		queryLottery() {
			$.Req.service($.SvName.LOTTERY_QUERY, { lotteryId: this.lotteryId }, ret => {
				if (ret.lottery) {
					this.lottery = ret.lottery;
					for (let p of ret.prizeList) {
						this.prizeList[p.orderNo] = p;
					}
				} else {
					$.Msg.error($.Lang.NOT_FOUND_TIPS);
				}
			});
		},

		saveLottery() {
			this.$refs.lottery.validate(valid => {
				if (!valid) {
					$.Msg.error($.Lang.SUBMIT_ERR);
					return false;
				}

				if (!this.lottery.beginDate || !this.lottery.endDate) {
					$.Dlg.warning('请输入完整的抽奖时间');
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
					window.scrollTo(0, 0);
					//this.$router.push('/market/lottery-list');
				}, true);
			});
		},

		delLottery() {
			if (!confirm('确定删除该抽奖活动吗？')) {
				return;
			}

			let args = { lottery: this.lotteryId, actionType: 'D' };
			$.Req.service($.SvName.LOTTERY_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.$router.push('/market/lottery-list');
			}, true);
		},

		clearPrize(idx) {
			this.$set(this.prizeList, idx, { prizeId: this.prizeList[idx].prizeId });
		}
	}
});

/***/ }),

/***/ 1312:
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



/* harmony default export */ __webpack_exports__["default"] = ({
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a },
	data() {
		return {
			g: window.$,
			editable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
			lotteryList: [],
			lotteryUrl: null,
			qrcodeUrl: null
		};
	},

	created() {
		this.queryLotteryList();
		this.queryShopId();
	},

	methods: {
		queryLotteryList() {
			$.Req.service($.SvName.LOTTERY_QUERY, {}, ret => {
				if (ret.lotteryList) this.lotteryList = ret.lotteryList;
			}, true);
		},

		delLottery(lotteryId) {
			if (!confirm('确定删除该抽奖活动吗？')) {
				return;
			}

			let args = { lotteryId: lotteryId, actionType: 'D' };
			$.Req.service($.SvName.LOTTERY_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryLotteryList();
			});
		},

		queryShopId() {
			$.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {

				this.lotteryUrl = $.Conf.MSITE_BASE_URL + '#/lottery?s=' + ret.shopId;
				this.qrcodeUrl = $.Conf.QR_CODE_URL + encodeURIComponent(this.lotteryUrl);
			});
		}
	}
});

/***/ }),

/***/ 1313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_cust_cust_detail_vue__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_cust_cust_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_cust_cust_detail_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_1__pages_member_member_base_info_vue___default.a, CustDetail: __WEBPACK_IMPORTED_MODULE_2__pages_cust_cust_detail_vue___default.a },
	data() {
		return {
			g: window.$,
			lotteryId: this.$route.params.lotteryId,
			menuList: $.PageMenus.lottery('lottery-stat', this.$route.params.lotteryId),
			guestCnt: null,
			lotteryLogList: null,
			lottery: null,
			memberId: 0,
			custId: 0,
			viewMemberDlg: false,
			viewCustDlg: false,
			custName: null,
			query: {
				guestPhone: null
			}
		};
	},

	created() {
		if (this.lotteryId) {
			this.queryLottery();
			this.statLottery();
		}
	},

	methods: {
		queryLottery() {
			$.Req.service($.SvName.LOTTERY_QUERY, { lotteryId: this.lotteryId }, ret => {
				if (ret.lottery) {
					this.lottery = ret.lottery;
				} else {
					$.Msg.error($.Lang.NOT_FOUND_TIPS);
				}
			});
		},

		statLottery(page = null) {
			let args = { lotteryId: this.lotteryId, page: page, guestPhone: this.query.guestPhone };
			if (args.guestPhone) {
				args.page = 1;
			}
			$.Req.service($.SvName.LOTTERY_STAT, args, ret => {
				if (ret.guestCnt) {
					this.guestCnt = ret.guestCnt;
				}
				this.lotteryLogList = ret.logList;
			});
		},

		viewMember(memberId) {
			this.memberId = memberId;
			this.viewMemberDlg = true;
		},

		viewCust(custId, custName) {
			this.custId = custId;
			this.custName = custName;
			this.viewCustDlg = true;
		},

		resetQuery() {
			this.query.guestPhone = null;
			this.statLottery();
		},

		receivePrize(log, idx) {
			let args = { logId: log.logId };
			$.Req.service($.SvName.LOTTERY_PRIZE_RECEIVE, args, ret => {
				log.usedTime = $.Util.formatDateTime(new Date());
				this.$set(this.lotteryLogList, idx, log);
			}, true);
		}
	}
});

/***/ }),

/***/ 1314:
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



/* harmony default export */ __webpack_exports__["default"] = ({
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a },
	data() {
		return {
			g: window.$,
			shopId: null,
			qrcodeUrl: null
		};
	},

	created() {},

	methods: {
		queryShopId() {
			$.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
				this.shopId = ret.shopId;
			});
		},

		showWaitTips() {
			$.Msg.info($.Lang.TO_DO_PUBLIC);
		}
	}
});

/***/ }),

/***/ 1315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_shop_nav_vue__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_shop_nav_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_shop_nav_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__msite_home_set_vue__ = __webpack_require__(2198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__msite_home_set_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__msite_home_set_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


// 新增微官网首页内容自定义

/* harmony default export */ __webpack_exports__["default"] = ({
  components: { ShopNav: __WEBPACK_IMPORTED_MODULE_0__components_shop_nav_vue___default.a, MsiteHomeSet: __WEBPACK_IMPORTED_MODULE_1__msite_home_set_vue___default.a },
  data() {
    return {
      g: window.$,
      shopId: null,
      qrcodeUrl: null,
      wxcodeUrl: null,
      marketEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
      skinTheme: 1,
      displayShopOwner: true,
      needSmsAuthcodeWhenBuyCard: null,
      menuDict: [{ id: 1, name: "会员卡" }, { id: 2, name: "教练" }, { id: 3, name: "团课" }, { id: 4, name: "私教课" }, { id: 5, name: "活动" }, { id: 6, name: "优惠券" }, { id: 7, name: "幸运抽奖" }, { id: 8, name: "砸金蛋" }, { id: 9, name: "拼团" }, { id: 10, name: "砍价" }, { id: 11, name: "活动报名" }, { id: 12, name: "秒杀" }, { id: 13, name: "自助续费卡" }, { id: 14, name: "场地预约" }, { id: 15, name: "" }, { id: 16, name: "美团核销" }, { id: 17, name: "抖音核销" }, { id: 18, name: "散客入场券" }, { id: 19, name: "阶段付" }, { id: 20, name: "自助核销" }],
      msiteMenus: [{ id: 0, name: "首页" }, { id: 1, name: "会员卡" }, { id: 2, name: "教练" }, { id: 3, name: "团课" }, { id: 4, name: "私教课" }, { id: 5, name: "活动" }],
      enableCustBookingGl: null,
      isSendSmsToCustForGlBooking: null,
      qrcodeDlgTitle: null,
      qrCodeDlg: null,
      qrCodeDlgUrl: null
    };
  },

  created() {
    this.queryShopId();
    this.queryShopArgs();
    this.queryWxcodeUnlimitGet();
  },

  methods: {
    queryShopId() {
      $.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
        this.shopId = ret.shopId;

        let url = $.Conf.MSITE_BASE_URL + "/#/shop-home?s=" + this.shopId;
        this.qrcodeUrl = $.Conf.QR_CODE_URL + encodeURIComponent(url);
      });
    },

    queryShopArgs() {
      let args = {
        typeIdList: [2018, 2020, 2065, 2093, 2101, 2102]
      };
      $.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
        for (let t of ret.argList) {
          if (t.typeId === 2018) {
            this.skinTheme = t.typeValue ? parseInt(t.typeValue) : 1;
          } else if (t.typeId === 2020) {
            this.displayShopOwner = t.typeValue ? t.typeValue === "true" : true;
          } else if (t.typeId === 2065) {
            this.needSmsAuthcodeWhenBuyCard = t.typeValue ? t.typeValue === "true" : true;
          } else if (t.typeId === 2093) {
            if (t.typeValue) {
              let i = 0;
              for (let conf of t.typeValue.split(",")) {
                if (conf) {
                  let items = conf.split(":");
                  this.$set(this.msiteMenus, i, {
                    id: parseInt(items[0]),
                    name: items[1]
                  });
                } else {
                  this.$set(this.msiteMenus, i, { id: null, name: null });
                }
                i++;
              }
            }
          } else if (t.typeId === 2101) {
            this.enableCustBookingGl = t.typeValue === "true";
          } else if (t.typeId === 2102) {
            this.isSendSmsToCustForGlBooking = t.typeValue === "true";
          }
        }
      });
    },

    changeSkinTheme() {
      let args = { typeId: 2018, typeValue: "" + this.skinTheme };
      $.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
        $.Msg.success($.Lang.SAVE_SUCCESS);
      });
    },

    setShopOwnerInfoDisplay() {
      let args = { typeId: 2020, typeValue: "" + this.displayShopOwner };
      $.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
        $.Msg.success($.Lang.SAVE_SUCCESS);
      });
    },

    setCardBuySmsAuthcode() {
      let args = {
        typeId: 2065,
        typeValue: "" + this.needSmsAuthcodeWhenBuyCard
      };
      $.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
        $.Msg.success($.Lang.SAVE_SUCCESS);
      });
    },

    setCustBookingGl() {
      let args = {
        typeId: 2101,
        typeValue: this.enableCustBookingGl ? "true" : "false"
      };
      $.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
        $.Msg.success($.Lang.SAVE_SUCCESS);
      });
    },

    setCustBookingSmsNotice() {
      let args = {
        typeId: 2102,
        typeValue: this.isSendSmsToCustForGlBooking ? "true" : "false"
      };
      $.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
        $.Msg.success($.Lang.SAVE_SUCCESS);
      });
    },

    queryWxcodeUnlimitGet() {
      $.Req.service($.SvName.WX_ACODE_UNLIMIT_GET, {}, ret => {
        let url = $.Util.getImgUrl(ret.imgName);
        this.wxcodeUrl = url;
      });
    },

    saveMenusConf() {
      // check
      let i = 0,
          idMap = [];
      for (let c of this.msiteMenus) {
        i++;
        if (!c.id) continue;

        if (!c.name) {
          $.Dlg.error("请设置菜单{0}的名称".format(i));
          return;
        }
        if (c.name.indexOf(",") >= 0 || c.name.indexOf(":") >= 0) {
          $.Msg.error("菜单名称不能包含特殊符号");
        }
        if (idMap.contains(c.id)) {
          $.Dlg.error("菜单设置不能重复");
          return;
        }
        idMap.push(c.id);
      }

      let confArr = [];
      for (let c of this.msiteMenus) {
        if (!$.Util.isEmpty(c.id)) confArr.push("{0}:{1}".format(c.id, c.name));else confArr.push("");
      }

      let val = confArr.join(",");
      let args = { typeId: 2093, typeValue: val };
      $.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
        $.Msg.success($.Lang.SAVE_SUCCESS);
      });
    },

    changeMsiteMenu(idx) {
      this.msiteMenus[idx].name = this.menuDict[this.msiteMenus[idx].id - 1].name;
    },

    openQrCodeDlg(page, title) {
      this.qrcodeDlgTitle = title + "（固定不变，可打印）";
      this.qrCodeDlgUrl = $.Conf.MSITE_BASE_URL + "/#/" + page + "?s=" + this.shopId;
      this.qrCodeDlg = true;
    }
  }
});

/***/ }),

/***/ 1316:
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



/* harmony default export */ __webpack_exports__["default"] = ({
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a },
	data() {
		return {
			g: window.$,
			editable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
			shopId: null,
			qrcodeUrl: null,
			msiteShareConf: {}
		};
	},

	created() {
		this.queryShareConf();
	},

	methods: {
		queryShopId() {
			$.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
				this.shopId = ret.shopId;
			});
		},

		queryShareConf() {
			$.Req.service($.SvName.MSITE_SHARE_CONF_QUERY, {}, ret => {
				if (ret.msiteShareConf) {
					this.msiteShareConf = ret.msiteShareConf;
				} else {
					this.msiteShareConf = {};
				}
			});
		},

		updateShareConf() {
			let args = { msiteShareConf: this.msiteShareConf };
			$.Req.service($.SvName.MSITE_SHARE_CONF_UPDATE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
			}, true);
		}
	}
});

/***/ }),

/***/ 1317:
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, ImgUpload: __WEBPACK_IMPORTED_MODULE_1__components_sys_img_upload_vue___default.a, Help: __WEBPACK_IMPORTED_MODULE_2__components_help___default.a },
  data() {
    return {
      g: $,
      productId: this.$route.params.productId,
      productPriceEditable: true,
      marketEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
      cardList: [],
      product: {
        productId: null,
        productTitle: null,
        productPic: null,
        originalPrice: null,
        price: null,
        consumerType: 0,
        productDesc: null,
        beginTime: null,
        endTime: null,
        shareTitle: null,
        shareDesc: null,
        sharePic: null,
        cardId: null,
        cardType: null,
        cardTimes: null,
        cardAmount: null,
        cardDays: null,
        cardLimitBeginDays: null
      },
      requiredFields: ['productTitle', 'originalPrice', 'price', 'stock', 'beginTime', 'endTime'],
      formRule: {},
      imgUpload: {
        action: $.Conf.IMG_UPLOAD_URL,
        imgMaxWidth: 1024,
        defaultLisForProduct: [],
        defaultListForShare: [],
        defaultMorePics: []
      },
      imgFileList: [],
      initCardId: null
    };
  },

  created() {
    $.Util.addRequiredFieldsRules(this.formRule, this.requiredFields);
    this.queryCards(() => {
      if (this.productId) {
        this.querySeckillProduct();
      }
    });
  },

  methods: {
    queryCards(callback = null) {
      $.Req.service($.SvName.CARD_QUERY, { status: 0 }, ret => {
        this.cardList = ret.cardList;
        if (callback) callback();
      });
    },

    querySeckillProduct() {
      let args = { productId: this.productId };
      $.Req.service($.SvName.SECKILL_PRODUCT_QUERY, args, ret => {
        this.product = ret.seckillProduct;
        if (this.product.productPic) {
          let imgUrl = $.Util.getImgUrl(this.product.productPic, 250, 250, 'EEEEEE');
          this.imgUpload.defaultLisForProduct.push({
            name: this.product.productPic,
            url: imgUrl
          });
        }
        if (this.product.sharePic) {
          let imgUrl = $.Util.getImgUrl(this.product.sharePic, 250, 250, 'EEEEEE');
          this.imgUpload.defaultListForShare.push({
            name: this.product.sharePic,
            url: imgUrl
          });
        }
        if (this.product.productMorePics) {
          for (let p of this.product.productMorePics.split(',')) {
            this.imgUpload.defaultMorePics.push({
              name: p,
              url: $.Util.getImgUrl(p, 200, 200, 'EEEEEE')
            });
          }
        }
        this.imgFileList = this.imgUpload.defaultMorePics;
      });
    },

    saveSeckillProduct() {
      this.$refs.product.validate(valid => {
        if (!valid) {
          $.Msg.error($.Lang.SUBMIT_ERR);
          return false;
        }
        if (this.product.cardId) {
          // 会员卡商品
          if (this.product.cardType === 1) {
            // 期限卡
            if (!this.product.cardDays) {
              $.Msg.error('请输入使用天数');
              return false;
            }
            if (this.product.cardDays <= 0) {
              $.Msg.error('使用天数需大于0');
              return false;
            }
          } else if (this.product.cardType === 2) {
            // 次数卡
            if (!this.product.cardTimes) {
              $.Msg.error('请输入使用次数');
              return false;
            }
            if (this.product.cardTimes <= 0) {
              $.Msg.error('使用次数需大于0');
              return false;
            }
          } else if (this.product.cardType === 3) {
            // 储值卡
            if (!this.product.cardAmount) {
              $.Msg.error('请输入使用金额');
              return false;
            }
            if (this.product.cardAmount <= 0) {
              $.Msg.error('使用金额需大于0');
              return false;
            }
          } else if (this.product.cardType === 4) {
            // 计时卡
            if (!this.product.cardTimes) {
              $.Msg.error('请输入使用时间');
              return false;
            }
            if (this.product.cardTimes <= 0) {
              $.Msg.error('使用时间需大于0');
              return false;
            }
          }
        }

        if (!this.product.productPic) {
          $.Msg.error('请上传商品图片');
          return;
        }
        if (this.product.price > this.product.originalPrice) {
          $.Dlg.error('商品原价不能小于商品售价');
          return;
        }
        if (this.product.price < 0.01) {
          $.Dlg.error('商品售价不能小于0.01');
          return;
        }
        if (this.product.stock < 1) {
          $.Dlg.error('商品库存不能小于1');
          return;
        }
        if (!this.product.beginTime || !this.product.endTime) {
          $.Dlg.error('请输入完整的期限');
          return;
        }
        if (this.product.productDesc && this.product.productDesc.length > 2000) {
          $.Dlg.error('商品描述不能超过2000字');
          return;
        }
        if (this.product.shareTitle && this.product.shareTitle.length > 100) {
          $.Dlg.error('分享标题不能超过100字');
          return;
        }
        if (this.product.shareDesc && this.product.shareDesc.length > 150) {
          $.Dlg.error('分享简介不能超过150字');
          return;
        }
        if (this.imgFileList && this.imgFileList.length > 0) {
          let imgNames = [];
          for (let i = 0; i < this.imgFileList.length; i++) {
            imgNames.push(this.imgFileList[i].name);
          }
          this.product.productMorePics = imgNames.join(',');
        } else {
          this.product.productMorePics = null;
        }

        let args = {
          actionType: this.product.productId ? 'U' : 'I',
          seckillProduct: this.product
        };

        $.Req.service($.SvName.SECKILL_PRODUCT_SAVE, args, ret => {
          $.Msg.success($.Lang.OPT_SUCCESS);
          if (!this.productId) {
            this.$router.push('/market/seckill-product-list');
          } else {
            window.scrollTo(0, 0);
          }
        }, true);
      });
    },

    handleImgUploadSuccessForProduct(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;
      this.product.productPic = res.data.name;
    },

    handleImgUploadSuccessForShare(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;
      this.product.sharePic = res.data.name;
    },

    delSeckillProduct() {
      if (!confirm('确定删除该秒杀商品吗？')) {
        return;
      }

      let args = { deleteId: this.productId, actionType: 'D' };
      $.Req.service($.SvName.SECKILL_PRODUCT_SAVE, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.$router.push('/market/seckill-product-list');
      }, true);
    },

    handleMorePisUploadSuccess(res, file) {
      file.url = res.data.url;
      file.name = res.data.name;
      this.imgFileList.push(file);
    },

    handleImgRemove(file, fileList) {
      this.imgFileList.splice(this.imgFileList.indexOf(file), 1);
    },

    handleCardSelect(cardId) {
      if (cardId === this.initCardId) return;

      for (let c of this.cardList) {
        if (c.cardId === cardId) {
          this.product.cardType = c.cardType;
          this.product.cardDays = c.defaultDays;
          if (c.cardType === 2) {
            this.product.cardTimes = c.defaultTimes;
          } else if (c.cardType === 3) {
            this.product.cardAmount = c.defaultAmount;
          } else if (c.cardType === 4) {
            this.product.cardTimes = c.defaultTimes;
          }
          break;
        }
      }
      this.initCardId = null;
    }
  }
});

/***/ }),

/***/ 1318:
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a },
  data() {
    return {
      g: window.$,
      hasMchId: null,
      editable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
      productList: [],
      productOrderList: [],
      productItemLogList: [],
      query: {
        productId: null,
        orderPage: null,
        status: null,
        sharerStaffId: null
      },
      orderCount: null,
      staffList: [],
      selectPrd: null,
      prdLinkDlg: null,
      selectPrdUrl: null
    };
  },

  created() {
    this.queryMchId();
    this.querySeckillProductList();
    this.queryProductOrderList();
    this.queryStaffList();
    this.queryShopId();
  },

  methods: {
    queryStaffList() {
      $.Req.service($.SvName.STAFF_QUERY, { needBaseInfo: true }, ret => {
        this.staffList = ret.staffList;
      });
    },

    queryShopId() {
      $.Req.service($.SvName.SHOP_ID_QUERY_FOR_MSITE, {}, ret => {
        this.shopId = ret.shopId;
      });
    },

    queryMchId() {
      let args = { queryType: "shop" };
      $.Req.service($.SvName.WX_MCHID_QUERY, args, ret => {
        if (ret.mchId) this.hasMchId = true;else this.hasMchId = false;
      });
    },

    querySeckillProductList() {
      $.Req.service($.SvName.SECKILL_PRODUCT_QUERY, {}, ret => {
        this.productList = ret.productList;
      }, true);
    },

    queryProductOrderList(page = null) {
      if (!page) {
        this.orderCount = null;
      }
      this.query.orderPage = page;
      let args = {
        productId: this.query.productId,
        page: page
      };
      if (this.query.sharerStaffId) {
        args.sharerStaffId = this.query.sharerStaffId;
      }
      if (!$.Util.isEmpty(this.query.status)) {
        args.status = this.query.status;
      }
      $.Req.service($.SvName.SECKILL_PRODUCT_ORDER_QUERY, args, ret => {
        this.productOrderList = ret.productOrderList;
        if (!page) {
          this.orderCount = ret.count;
        }
        window.scrollTo(0, 0);
      }, true);
    },

    reloadProductOrderList() {
      this.queryProductOrderList(this.query.orderPage);
    },

    delProduct(productId) {
      if (!confirm("确定删除该商品吗？")) {
        return;
      }

      let args = { deleteId: productId, actionType: "D" };
      $.Req.service($.SvName.SECKILL_PRODUCT_SAVE, args, ret => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.querySeckillProductList();
      });
    },

    refundOrder(orderId) {
      if (!confirm("确定退款该订单？ 退款操作后客户支付金额将原路退回。")) {
        return;
      }
      let args = { orderId: orderId };
      $.Req.service($.SvName.SECKILL_PRODUCT_ORDER_REFUND, args, ret => {
        $.Dlg.success($.Lang.OPT_SUCCESS);
        this.querySeckillProductList();
        this.queryProductOrderList(this.query.orderPage);
      });
    },

    openPrdLinkDlg(prd) {
      this.selectPrd = prd;
      this.selectPrdUrl = $.Conf.MSITE_BASE_URL + "/#/second-kill-detail?productId={0}&s={1}".format(prd.productId, this.shopId);
      this.prdLinkDlg = true;
    }
  }
});

/***/ }),

/***/ 1319:
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



/* harmony default export */ __webpack_exports__["default"] = ({
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a },
	data() {
		return {
			g: window.$,
			menuList: $.PageMenus.shareItem('share-item-doc')
		};
	},

	created() {},

	methods: {}
});

/***/ }),

/***/ 1320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_page_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_help_vue__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_help_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sys_img_upload_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sys_img_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_sys_img_upload_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { PageHeader: __WEBPACK_IMPORTED_MODULE_0__components_page_header_vue___default.a, Help: __WEBPACK_IMPORTED_MODULE_1__components_help_vue___default.a, ImgUpload: __WEBPACK_IMPORTED_MODULE_2__components_sys_img_upload_vue___default.a },
	data() {
		return {
			g: window.$,
			sharerType: null,
			editable: $.Util.hasRoleFunc($.Dict.RoleFunc.MARKET_CONF.value),
			shareItemList: [],
			shareItemOwnerList: [],
			shareItemOwnerCnt: null,
			menuList: null,
			cardList: [],
			imgUpload: {
				action: $.Conf.IMG_UPLOAD_URL,
				imgMaxWidth: 1024,
				defaultList: [],
				defaultMorePics: []
			},
			imgFileList: [],
			dlg: {
				viewShareItem: false,
				viewShareItemReceiver: false,
				viewShareItemReceiverAsMemb: false,
				shareEntryImg: false,
				receivedCustQuery: null,
				receiverName: ""
			},
			shareItem: {
				pubTime: new Date(),
				beginDate: new Date()
			},
			staffList: [],
			query: {
				itemId: null,
				memberFlag: null,
				sharerId: null,
				receiverFlag: null
			},
			shareItemMap: {},
			shareItemReceiverList: [],
			selectSioId: null,
			sirCount: null,
			membCount: null,
			isMember: null,
			itemImgUpload: {
				action: $.Conf.IMG_UPLOAD_URL,
				imgMaxWidth: 512,
				defaultList: []
			},
			shareItemReceiverListByCust: null,
			shareItemReceiverCntByCust: null,
			shareList: [{ title: "一级分销", awardList: [{ cardId: "" }] }, { title: "二级分销", awardList: [{ cardId: "" }] }, { title: "三级分销", awardList: [{ cardId: "" }] }], //分销奖励
			addRewardVisible: false,
			allCardList: [],
			secondDlg: {
				receiverName: "",
				visible: false,
				totalCount: 0,
				tableList: []
			},
			secondDealDlg: {
				receiverName: "",
				visible: false,
				totalCount: 0,
				tableList: []
			},
			thirdDlg: {
				receiverName: "",
				visible: false,
				totalCount: 0,
				tableList: []
			},
			thirdDealDlg: {
				receiverName: "",
				visible: false,
				totalCount: 0,
				tableList: []
			},
			rewardPoints: [null, null, null]
		};
	},

	created() {
		// query all staff
		$.Req.service($.SvName.STAFF_QUERY, { needBaseInfo: true }, ret => {
			this.staffList = ret.staffList;
		});

		this.setSharerType(this.$route.path);
		this.queryCardList();
		this.queryShareEntryImg();
	},

	watch: {
		'$route'(to, from) {
			this.setSharerType(this.$route.path);
		}
	},

	methods: {
		queryShareEntryImg() {
			let args = { typeId: $.Dict.ShopArg.SHARE_ENTRY_IMG };
			$.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
				let imgName = ret.value;
				if (imgName) {
					this.imgUpload.defaultList.push({
						name: imgName,
						url: $.Util.getImgUrl(imgName, 200, 200, 'EEEEEE')
					});
				}
			});
		},

		setSharerType(urlStr) {
			let urlStrArr = urlStr.split('/');
			let sharerTypeName = urlStrArr[urlStrArr.length - 1];
			if (sharerTypeName === 'member') this.sharerType = 1;else if (sharerTypeName === 'staff') this.sharerType = 2;else if (sharerTypeName === 'home') {
				this.sharerType = 1;
				sharerTypeName = 'member';
			} else {
				alert('Invalid request!');
			}
			this.query.sharerId = null;
			this.query.itemId = null;
			if (this.sharerType) {
				this.menuList = $.PageMenus.shareItem('share-item/' + sharerTypeName);
				this.initQuery();
			}
		},

		initQuery() {
			this.queryShareItem();
		},

		queryShareItem() {
			$.Req.service($.SvName.SHARE_ITEM_QUERY, { sharerType: this.sharerType }, ret => {
				this.shareItemMap = {};
				for (let s of ret.shareItemList) {
					this.shareItemMap[s.itemId] = s.itemName;
					s.convertRate = s.receiveCnt > 0 ? s.convertCnt / s.receiveCnt : 0;
				}
				this.shareItemList = ret.shareItemList;
				this.queryShareItemOwner();
			});
		},

		queryShareItemOwnerByItem(itemId) {
			this.query.itemId = itemId;
			this.queryShareItemOwner();
		},

		queryShareItemOwner(page = null) {
			let args = {
				itemId: this.query.itemId,
				sharerType: this.sharerType,
				sharerId: this.query.sharerId,
				page: page
			};

			$.Req.service($.SvName.SHARE_ITEM_OWNER_QUERY, args, ret => {
				for (let o of ret.shareItemOwnerList) {
					o.convertRate = o.receiveCnt > 0 ? o.convertCnt / o.receiveCnt : 0;
					o.itemName = this.shareItemMap[o.itemId];
				}
				this.shareItemOwnerList = ret.shareItemOwnerList;
				if (page === null) {
					this.shareItemOwnerCnt = ret.count;
				}
			}, true);
		},

		openShareItemDlg(itemId = null) {
			if (itemId) {
				let args = { itemId: itemId };
				$.Req.service($.SvName.SHARE_ITEM_QUERY, args, ret => {
					this.shareItem = ret.shareItem;
					this.dlg.viewShareItem = true;
					this.itemImgUpload.defaultList = [];
					if (!this.shareItem.limitReceiverRole) this.shareItem.limitReceiverRole = 0;
					if (this.shareItem.itemImg) {
						this.itemImgUpload.defaultList.push({
							name: this.shareItem.itemImg,
							url: $.Util.getImgUrl(this.shareItem.itemImg, 200, 200, 'EEEEEE')
						});
					}
					if (this.shareItem.morePics) {
						for (let p of this.shareItem.morePics.split(',')) {
							this.imgUpload.defaultMorePics.push({
								name: p,
								url: $.Util.getImgUrl(p, 200, 200, 'EEEEEE')
							});
						}
					}
					this.imgFileList = this.imgUpload.defaultMorePics;
				});
			} else {
				if (this.shareItem.itemId) {
					this.shareItem.itemId = null;
					this.shareItem.itemName = null;
					this.shareItem.beginDate = new Date();
					this.shareItem.endDate = null;
					this.shareItem.ownerNote = null;
					this.shareItem.receiverNote = null;
					this.shareItem.itemImg = null;
					this.shareItem.shareCardId = null;
					this.shareItem.morePics = null;
					this.shareItem.limitReceiverRole = 0;
					this.itemImgUpload.defaultList = [];
					this.itemImgUpload.defaultMorePics = [];
				}
				this.shareItem.sharerType = this.sharerType;
				this.dlg.viewShareItem = true;
			}
		},

		saveShareItem() {
			// check
			if (!this.checkShareItem()) return;

			if (this.imgFileList && this.imgFileList.length > 0) {
				let imgNames = [];
				for (let i = 0; i < this.imgFileList.length; i++) {
					imgNames.push(this.imgFileList[i].name);
				}
				this.shareItem.morePics = imgNames.join(',');
			} else {
				this.shareItem.morePics = null;
			}

			let args = {
				actionType: this.shareItem.itemId ? 'U' : 'I',
				shareItem: this.shareItem
			};
			$.Req.service($.SvName.SHARE_ITEM_SAVE, args, ret => {
				$.Msg.success($.Lang.SAVE_SUCCESS);
				this.dlg.viewShareItem = false;
				this.queryShareItem();
			}, true);
		},

		checkShareItem() {
			if (!this.shareItem.itemName) {
				$.Msg.warning('请输入项目名称');
				return false;
			}
			if (!this.shareItem.beginDate || !this.shareItem.endDate) {
				$.Msg.warning('请输入完整的分销有效期');
				return false;
			}
			if (this.shareItem.itemDesc && this.shareItem.itemDesc.length > 1000) {
				$.Msg.warning('项目说明字数不能超过1000字');
				return false;
			}
			if (this.sharerType === 1 && !this.shareItem.sharerNote) {
				$.Msg.warning('请输入会员奖励说明');
				return false;
			}
			if (this.shareItem.shareNote && this.shareItem.shareNote.length > 1000) {
				$.Msg.warning('会员奖励说明字数不能超过1000');
				return false;
			}
			if (!this.shareItem.receiverNote) {
				$.Msg.warning('请输入新客奖励说明');
				return false;
			}
			if (this.shareItem.receiverNote.length > 1000) {
				$.Msg.warning('新客奖励说明字数不能超过1000');
				return false;
			}

			return true;
		},

		deleteShareItem(itemId) {
			let msg = '确定要删除该分销项目吗？';
			$.Dlg.confirm(msg, yes => {
				let args = { actionType: 'D', deleteId: itemId };
				$.Req.service($.SvName.SHARE_ITEM_SAVE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					this.queryShareItem();
				}, true);
			});
		},

		queryShareItemOwnerByMember() {
			$.Req.queryMember(this.query.memberFlag, member => {
				if (member) {
					this.query.sharerId = member.memberId;
					this.queryShareItemOwner();
				}
			});
		},

		queryShareItemOwnerByStaff(staffId) {
			this.query.sharerId = staffId;
			this.queryShareItemOwner();
		},

		handleEntryImgUploadSuccess(res, file) {
			file.url = res.data.url;
			file.name = res.data.name;

			let args = { imgName: file.name };
			$.Req.service($.SvName.SHARE_ENTRY_IMG_SAVE, args, ret => {
				$.Msg.success($.Lang.SAVE_SUCCESS);
				this.imgUpload.defaultList = [];
				this.imgUpload.defaultList.push({
					name: file.name,
					url: $.Util.getImgUrl(file.name, 200, 200, 'EEEEEE')
				});
			});
		},

		handleItemImgUploadSuccess(res, file) {
			file.url = res.data.url;
			file.name = res.data.name;
			this.shareItem.itemImg = file.name;
		},

		queryCardList() {
			$.Req.service($.SvName.CARD_QUERY, { queryType: 2, status: 0 }, ret => {
				this.cardList = ret.cardList;
			});
			$.Req.service($.SvName.CARD_QUERY, { status: 0 }, res => {
				this.allCardList = res.cardList;
			});
		},

		queryShareItemReceiverByCust(page = null) {
			if (!this.query.receiverFlag) {
				$.Msg.warning('请输入领取客户手机号或姓名');
				return;
			}

			let args = {
				receiverFlag: this.query.receiverFlag,
				page: page
			};
			$.Req.service($.SvName.SHARE_ITEM_RECEIVER_QUERY, args, ret => {
				this.shareItemReceiverListByCust = ret.shareItemReceiverList;
				if (page === null) {
					this.shareItemReceiverCntByCust = ret.count;
				}
			}, true);
		},

		/**
   * 打开一级成交弹窗
   */
		openShareItemReceiverAsMembDlg(itemId, sioId, itemName) {
			this.selectItemId = itemId;
			this.selectSioId = sioId;
			this.isMember = true;
			this.queryShareItemReceiver();
			this.dlg.receiverName = itemName;
			this.dlg.viewShareItemReceiverAsMemb = true;
		},
		/**
   * 打开一级领取弹窗
   */
		openShareItemReceiverDlg(itemId, sioId, itemName) {
			this.selectItemId = itemId;
			this.selectSioId = sioId;
			this.isMember = null;
			this.queryShareItemReceiver();
			this.dlg.receiverName = itemName;
			this.dlg.viewShareItemReceiver = true;
		},
		/**
   * 一级领取查询
   */
		queryShareItemReceiver(page = null) {
			let args = {
				itemId: this.selectItemId,
				sioId: this.selectSioId,
				isMember: this.isMember,
				page: page
			};
			$.Req.service($.SvName.SHARE_ITEM_RECEIVER_QUERY, args, ret => {
				this.shareItemReceiverList = ret.shareItemReceiverList;
				if (page === null) {
					if (this.isMember === null) this.sirCount = ret.count;else this.membCount = ret.count;
				}
			});
		},
		queryNextInfoWithPage(page = null) {
			this.queryNextInfo(this.info, this.isMemberTag, this.requestNum, page);
		},
		/**
   * 查询下级
   */
		queryNextInfo(info, isMemberTag, num, page = 1) {
			this.info = info;
			this.isMemberTag = isMemberTag;
			this.requestNum = num;
			// isMemberTag 领取 false	成交 true
			if (!info.hasNext) {
				$.Msg.warning("该人员无分销记录");
				return;
			}
			let args = {
				itemId: this.selectItemId,
				memberId: info.memberId,
				isMember: isMemberTag,
				page: page
			};
			$.Req.service($.SvName.SHARE_ITEM_RECEIVER_NEXT_QUERY, args, res => {
				if (num == 2) {
					this.secondDlg.totalCount = res.count;
					if (res.shareItemReceiverList && res.shareItemReceiverList.length > 0) {
						// this.rebuildTableData(info.sirId, res.shareItemReceiverList);
						this.secondDlg.receiverName = info.custName || info.memberName;
						this.secondDlg.visible = true;
						this.secondDlg.tableList = res.shareItemReceiverList;
					}
				} else if (num == 3) {
					this.thirdDlg.totalCount = res.count;
					if (res.shareItemReceiverList && res.shareItemReceiverList.length > 0) {
						// this.rebuildTableData(info.sirId, res.shareItemReceiverList);
						this.thirdDlg.receiverName = info.custName || info.memberName;
						this.thirdDlg.visible = true;
						this.thirdDlg.tableList = res.shareItemReceiverList;
					}
				} else if (num == 4) {
					this.secondDealDlg.totalCount = res.count;
					if (res.shareItemReceiverList && res.shareItemReceiverList.length > 0) {
						// this.rebuildTableData(info.sirId, res.shareItemReceiverList);
						this.secondDealDlg.receiverName = info.custName || info.memberName;
						this.secondDealDlg.visible = true;
						this.secondDealDlg.tableList = res.shareItemReceiverList;
					}
				} else if (num == 5) {
					this.thirdDealDlg.totalCount = res.count;
					if (res.shareItemReceiverList && res.shareItemReceiverList.length > 0) {
						// this.rebuildTableData(info.sirId, res.shareItemReceiverList);
						this.thirdDealDlg.receiverName = info.custName || info.memberName;
						this.thirdDealDlg.visible = true;
						this.thirdDealDlg.tableList = res.shareItemReceiverList;
					}
				}
			});
		},

		clearSelect(item, idx, cidx) {
			if (item.rewardId) {
				this.deleteIdList.push(item.rewardId);
			}
			this.$set(this.shareList[idx].awardList[cidx], "rewardDays", "");
			this.$set(this.shareList[idx].awardList[cidx], "rewardValue", "");
			this.$set(this.shareList[idx].awardList[cidx], "cardType", "");
			this.$set(this.shareList[idx].awardList[cidx], "cardId", "");
		},

		closeRewardConfDlg() {
			this.addRewardVisible = false;
		},

		clearCardRewardConf() {
			// 清除设置
			this.deleteIdList = [];
			this.shareList = [{ title: "一级分销", awardList: [{ cardId: "" }] }, { title: "二级分销", awardList: [{ cardId: "" }] }, { title: "三级分销", awardList: [{ cardId: "" }] }];
		},

		saveShareList() {
			let shareItemRewardList = [];
			for (let i = 0; i < this.shareList.length; i++) {
				shareItemRewardList = shareItemRewardList.concat(this.shareList[i].awardList);
			}
			if (shareItemRewardList.some(m => m.cardId && !m.rewardDays)) {
				$.Msg.warning("请完善奖励设置信息");
				return;
			}
			shareItemRewardList = shareItemRewardList.filter(v => v.cardId);
			shareItemRewardList.forEach(ele => {
				ele.itemId = this.clickedId;
				ele.actionType = ele.rewardId ? "U" : "I";
			});
			let args = {
				deleteIdList: this.deleteIdList,
				shareItemRewardList: shareItemRewardList
			};
			// console.log("args:", args);
			$.Req.service($.SvName.SHARE_ITEM_REWARD_SAVE, args, res => {
				$.Msg.success($.Lang.SAVE_SUCCESS);
			});
		},

		cardTypeChange(item, idx, cidx) {
			this.$set(this.shareList[idx].awardList[cidx], "shareLevel", idx + 1);
			this.$set(this.shareList[idx].awardList[cidx], "cardType", item.cardType);
			this.$set(this.shareList[idx].awardList[cidx], "cardId", item.cardId);
			//清空
			this.$set(this.shareList[idx].awardList[cidx], "rewardDays", "");
			this.$set(this.shareList[idx].awardList[cidx], "rewardValue", "");
		},

		// 添加行
		addShareLine(idx) {
			this.shareList[idx].awardList.push({ cardId: "" });
		},
		removeShareLine(item, idx, cidx) {
			if (item.rewardId) {
				this.deleteIdList.push(item.rewardId);
			}
			this.shareList[idx].awardList.splice(cidx, 1);
		},

		// 分销奖励设置
		rewardSetting(itemId) {
			this.clickedId = itemId;
			this.clearCardRewardConf();
			$.Req.service($.SvName.SHARE_ITEM_REWARD_QUERY, { itemId }, res => {
				this.addRewardVisible = true;
				if (res.shareItemRewardList.length > 0) {
					this.shareList.forEach((ele, idx) => {
						ele.awardList = this.filterData(res.shareItemRewardList, idx + 1);
					});
				}
			});
			this.queryShareItemRewardPoints(itemId);
		},

		filterData(arr, num) {
			let data;
			let res = arr.filter(v => v.shareLevel == num);
			data = res.length === 0 ? [{ cardId: "" }] : res;
			return data;
		},

		queryShareItemRewardPoints(itemId) {
			let args = { itemId: itemId };
			$.Req.service($.SvName.SHARE_ITEM_REWARD_POINTS_QUERY, args, ret => {
				if (ret.shareItemRewardPoints) {
					this.rewardPoints = [ret.shareItemRewardPoints.level1Points, ret.shareItemRewardPoints.level2Points, ret.shareItemRewardPoints.level3Points];
				} else {
					this.rewardPoints = [null, null, null];
				}
			});
		},

		saveShareItemRewardPoints() {
			let args = {
				itemId: this.clickedId,
				pointsRewardList: this.rewardPoints
			};
			$.Req.service($.SvName.SHARE_ITEM_REWARD_POINTS_SAVE, args, ret => {
				$.Msg.success($.Lang.SAVE_SUCCESS);
			});
		},

		handleMorePisUploadSuccess(res, file) {
			file.url = res.data.url;
			file.name = res.data.name;
			this.imgFileList.push(file);
		},

		handleImgRemove(file, fileList) {
			this.imgFileList.splice(this.imgFileList.indexOf(file), 1);
		}
	}
});

/***/ }),

/***/ 1536:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".items[data-v-01355630]{padding-top:15px;border-top:1px solid #eee}.items h3[data-v-01355630]{margin-bottom:15px}.items li[data-v-01355630]{padding:4px 0}.items label[data-v-01355630]{width:80px;display:inline-block}.items .submit[data-v-01355630]{margin-top:10px}.items .submit button[data-v-01355630]{width:100px}.input-s[data-v-01355630]{display:inline-block;width:600px}", ""]);

// exports


/***/ }),

/***/ 1555:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".prizes[data-v-09be1a9a]{margin-left:25px}.prizes th[data-v-09be1a9a]{color:#999}.prizes td[data-v-09be1a9a],.prizes th[data-v-09be1a9a]{padding:6px 5px}.prizes .input-s[data-v-09be1a9a]{width:100%;text-align:center;font-weight:700}.prizes a.close[data-v-09be1a9a]{margin-left:10px;border:1px solid #eee;text-align:center;color:#999;display:inline-block;height:27px;line-height:27px;width:27px;border-radius:50%}.prizes a.close[data-v-09be1a9a]:hover{background:#eee}.prizes .win-cnt[data-v-09be1a9a]{background:#f2f2f2;padding:6px 0;display:block;width:70px;text-align:center}", ""]);

// exports


/***/ }),

/***/ 1560:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".-coupon-share-link[data-v-0ff33cf2]{margin-left:0;padding:0}.-coupon-share-link section[data-v-0ff33cf2]{padding:0}.-coupon-share-link .hd[data-v-0ff33cf2]{margin-bottom:10px}.qrcode img[data-v-0ff33cf2]{width:150px}.prdlink td[data-v-0ff33cf2]{padding:8px 10px;min-width:110px}.prdlink h3[data-v-0ff33cf2]{margin:0;font-size:14px}.prdlink .qrcode[data-v-0ff33cf2]{width:200px;border:1px solid #ddd}.prdlink .link-value[data-v-0ff33cf2]{background:#eee;width:500px}.link-value[data-v-0ff33cf2]{display:flex;padding:3px 10px}.link-value .link[data-v-0ff33cf2]{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.link-value .copy-tip[data-v-0ff33cf2]{width:40px;text-align:right;display:none}.link-value[data-v-0ff33cf2]:hover{background:#eee;cursor:pointer;position:relative}.link-value:hover .copy-tip[data-v-0ff33cf2]{display:inline-block}.link-value:active .copy-tip[data-v-0ff33cf2]{color:red}.row-sb[data-v-0ff33cf2]{display:flex;justify-content:space-between}", ""]);

// exports


/***/ }),

/***/ 1570:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".qrcode img[data-v-12bc8d6e]{width:150px}.prdlink td[data-v-12bc8d6e]{padding:8px 10px}.prdlink h3[data-v-12bc8d6e]{margin:0;font-size:14px}.prdlink .qrcode[data-v-12bc8d6e]{width:200px;border:1px solid #ddd}.prdlink .link[data-v-12bc8d6e]{padding:5px;background:#eee}", ""]);

// exports


/***/ }),

/***/ 1575:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".article[data-v-17074fde]{line-height:2;width:780px}.article img[data-v-17074fde]{display:block;margin-top:10px;background:#eee;padding:6px;border-radius:2px}.step[data-v-17074fde]{margin:25px 0 15px;padding:8px 10px;line-height:1;background:#f5f5f5}.step i[data-v-17074fde]{color:orange;font-size:20px;padding-right:5px}", ""]);

// exports


/***/ }),

/***/ 1586:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, "[data-v-1c102567].-date .ivu-input{height:30px}", ""]);

// exports


/***/ }),

/***/ 1599:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".qrcode img[data-v-21125854]{width:150px}.eventlink td[data-v-21125854]{padding:8px 10px}.eventlink h3[data-v-21125854]{margin:0;font-size:14px}.eventlink .qrcode[data-v-21125854]{width:200px;border:1px solid #ddd}.eventlink .link[data-v-21125854]{padding:5px;background:#eee}", ""]);

// exports


/***/ }),

/***/ 1601:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".wx-head[data-v-219db0c5]{width:45px;height:45px;line-height:45px;display:inline-block;border-radius:50%}", ""]);

// exports


/***/ }),

/***/ 1604:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".eventlink td[data-v-2348260f]{padding:8px 10px}.eventlink h3[data-v-2348260f]{margin:0;font-size:14px}.eventlink .qrcode[data-v-2348260f]{width:200px;border:1px solid #ddd}.eventlink .link[data-v-2348260f]{padding:5px;background:#eee}", ""]);

// exports


/***/ }),

/***/ 1606:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".msite-home-set .home-conf>ul .add-btn[data-v-25bb2dc5]{height:32px;margin-left:10px}.msite-home-set .home-conf>ul .home-li[data-v-25bb2dc5]{width:650px;background:#f7f7f7;padding:15px;padding-right:100px;margin-bottom:15px;cursor:move;border:1px solid #dddee1}.msite-home-set .home-conf>ul .home-li[data-v-25bb2dc5]:hover{border:1px solid #2d8cf0}.msite-home-set .home-conf>ul .home-li .parent[data-v-25bb2dc5]{display:flex;align-items:center}.msite-home-set .home-conf>ul .home-li .parent .sel[data-v-25bb2dc5]{flex:1}.msite-home-set .home-conf>ul .home-li .parent-name[data-v-25bb2dc5]{width:120px;margin-left:10px}.msite-home-set .home-conf>ul .no-move[data-v-25bb2dc5]{cursor:not-allowed}.msite-home-set .home-conf>ul .no-move[data-v-25bb2dc5]:hover{border:1px solid #dddee1}.msite-home-set .home-conf>ul .children-li-active[data-v-25bb2dc5]{border:1px solid #2d8cf0}.msite-home-set .home-conf>ul .add[data-v-25bb2dc5]{width:650px;display:flex;justify-content:space-between;align-items:center}.msite-home-set .home-conf>ul .is-children[data-v-25bb2dc5]{padding-bottom:10px}.msite-home-set .home-conf>ul .children[data-v-25bb2dc5],.msite-home-set .home-conf>ul .parent[data-v-25bb2dc5]{display:flex}.msite-home-set .home-conf>ul .children[data-v-25bb2dc5]{display:block}.msite-home-set .home-conf>ul .children .children-li[data-v-25bb2dc5]{display:flex;padding-left:0;padding:10px;padding-right:81px;margin-top:10px;background:#f5f5f5;border:1px solid #dddee1;cursor:move}.msite-home-set .home-conf>ul .children .children-li[data-v-25bb2dc5]:hover{background:#eee}.msite-home-set .home-conf>ul .children .children-li .sel[data-v-25bb2dc5]{flex:1}.msite-home-set .home-conf>ul .children .children-li .children-name[data-v-25bb2dc5]{width:120px;margin-left:10px}.msite-home-set .home-conf>ul .children .children-li-active[data-v-25bb2dc5]{border:1px solid #2d8cf0}.row-sb[data-v-25bb2dc5]{display:flex;justify-content:space-between}", ""]);

// exports


/***/ }),

/***/ 1608:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".qrcode img[data-v-284e6972]{width:150px}", ""]);

// exports


/***/ }),

/***/ 1615:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1620:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".tools li[data-v-2dd8e8a2]{display:inline-block;width:170px;height:175px;text-align:center;padding:10px;border:1px solid #eee;box-shadow:3px 3px 5px #ddd;background:#fff;font-size:13px;margin:10px;cursor:pointer}.tools li[data-v-2dd8e8a2]:hover{box-shadow:3px 3px 5px #b8d5ee}.tools li img[data-v-2dd8e8a2]{width:130px;height:130px;border-radius:5px}.tools li .t[data-v-2dd8e8a2]{padding-top:6px;line-height:1}", ""]);

// exports


/***/ }),

/***/ 1625:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".prizes[data-v-32904d7b]{margin-left:25px}.prizes th[data-v-32904d7b]{color:#999}.prizes td[data-v-32904d7b],.prizes th[data-v-32904d7b]{padding:6px 5px}.prizes .input-s[data-v-32904d7b]{width:100%;text-align:center;font-weight:700}.prizes a.close[data-v-32904d7b]{margin-left:10px;border:1px solid #eee;text-align:center;color:#999;display:inline-block;height:27px;line-height:27px;width:27px;border-radius:50%}.prizes a.close[data-v-32904d7b]:hover{background:#eee}.prizes .win-cnt[data-v-32904d7b]{background:#f2f2f2;padding:6px 0;display:block;width:70px;text-align:center}", ""]);

// exports


/***/ }),

/***/ 1635:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".qrcode img[data-v-36f3a55c]{width:150px}", ""]);

// exports


/***/ }),

/***/ 1652:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, "tr.on[data-v-3f0e3a56]{background:#d1f0fc}.subject-answers[data-v-3f0e3a56]{margin:46px 0 0 20px}.subject-answers .remark[data-v-3f0e3a56]{background:#f2f2f2;padding:10px;margin-bottom:15px;line-height:1.8;border:1px solid #dfdfdf}.subject-answers ul[data-v-3f0e3a56]{border:1px solid #dfdfdf;padding:15px;min-height:200px}.subject-answers li[data-v-3f0e3a56]{border-bottom:1px solid #dfdfdf;margin-bottom:15px;padding-bottom:15px}.subject-answers li[data-v-3f0e3a56]:last-child{border-bottom:none}.subject-answers li .tit[data-v-3f0e3a56]{line-height:1.6;font-weight:700;margin-bottom:10px}.subject-answers li .no[data-v-3f0e3a56]{padding-right:5px}.subject-answers li .iconfont[data-v-3f0e3a56]{font-size:14px;margin-right:3px}.subject-answers li div[data-v-3f0e3a56]{line-height:1.7;padding:2px 0}.qrcode img[data-v-3f0e3a56]{width:150px}.eventlink td[data-v-3f0e3a56]{padding:8px 10px}.eventlink h3[data-v-3f0e3a56]{margin:0;font-size:14px}.eventlink .qrcode[data-v-3f0e3a56]{width:200px;border:1px solid #ddd}.eventlink .link[data-v-3f0e3a56]{padding:5px;background:#eee}.event-stat li[data-v-3f0e3a56]{display:block;border-bottom:1px solid #dfdfdf;margin-bottom:15px;padding-bottom:15px}.event-stat li .tit[data-v-3f0e3a56]{line-height:1.6;font-weight:700;font-size:13px}.event-stat li .no[data-v-3f0e3a56]{padding-right:5px}.event-stat li .options[data-v-3f0e3a56]{margin-left:16px}.event-stat li .option[data-v-3f0e3a56]{line-height:1.7;padding:2px 0;margin:15px 0 5px}.event-stat li .rate[data-v-3f0e3a56]{height:15px;line-height:15px}.event-stat li .rate .l[data-v-3f0e3a56]{width:500px;background:#e1e1e1}.event-stat li .rate .l .checked[data-v-3f0e3a56]{display:inline-block;background:#2d8cf0}", ""]);

// exports


/***/ }),

/***/ 1675:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1676:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".date-query[data-v-4a342e0d]{display:inline-block;margin:0 0 15px}.date-query .date[data-v-4a342e0d]{display:inline-block;width:110px}.date-query button[data-v-4a342e0d]{margin-left:10px}.query-section[data-v-4a342e0d]{padding:5px 0}.phone-query[data-v-4a342e0d]{display:inline-block;width:200px;margin-left:20px}", ""]);

// exports


/***/ }),

/***/ 1687:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".input-dt[data-v-4e5661c2]{width:160px;display:inline-block}.list[data-v-4e5661c2]{padding-left:20px;margin-left:10px}.list li[data-v-4e5661c2]{padding:6px 0;list-style-type:disc}.myform .input-s[data-v-4e5661c2]{width:165px}.event-subjects[data-v-4e5661c2]{width:800px}.event-subjects li[data-v-4e5661c2]{padding:20px;margin:10px 0;background:#fff}.video-help li[data-v-4e5661c2]{font-size:13px;padding:6px 0}.video-help li .img[data-v-4e5661c2]{padding:5px;border:1px solid #ddd;margin-top:10px}", ""]);

// exports


/***/ }),

/***/ 1700:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".item-logs li[data-v-54fd99bc]{width:225px;margin:8px;border:1px solid #eee;box-shadow:3px 3px 3px #eee;display:inline-block;padding:10px}.item-logs li .photo[data-v-54fd99bc]{float:left;width:80px}.item-logs li .ctime[data-v-54fd99bc]{padding:9px 0 1px}.item-logs li .uname[data-v-54fd99bc]{font-size:13px;font-weight:700;max-width:110px;height:22px;overflow:hidden}.item-logs .wx-photo[data-v-54fd99bc]{width:65px;height:65px;line-height:65px;display:inline-block;border-radius:50%;margin-right:10px}.qrcode-tbl td[data-v-54fd99bc]{padding:8px 10px}.qrcode-tbl h3[data-v-54fd99bc]{margin:0;font-size:14px}.qrcode-tbl .qrcode[data-v-54fd99bc]{width:200px;border:1px solid #ddd}.qrcode-tbl .link[data-v-54fd99bc]{padding:5px;background:#eee}", ""]);

// exports


/***/ }),

/***/ 1714:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".qrcode[data-v-5b75e482]{margin-top:15px}.qrcode img[data-v-5b75e482]{width:210px;margin-right:50px;border:1px solid #f2f2f2;padding:10px}ol li[data-v-5b75e482]{padding:5px}.url-list[data-v-5b75e482]{margin-top:5px;padding-left:20px;width:720px}.url-list li[data-v-5b75e482]{font-size:13px;list-style-type:disc;border-bottom:1px dotted #ddd;padding:12px 6px}.url-list li[data-v-5b75e482]:hover{background:#f4f4f4}.url-list label[data-v-5b75e482]{width:90px;display:inline-block}.msite-conf li[data-v-5b75e482]{padding:12px 6px;border-bottom:1px dotted #e2e2e2;width:700px;font-size:13px}.msite-conf label[data-v-5b75e482]{font-size:13px}.menu-conf th[data-v-5b75e482]{width:30px;font-weight:400;text-align:left}.menu-conf td[data-v-5b75e482],.menu-conf th[data-v-5b75e482]{padding:5px}.menu-conf .sel[data-v-5b75e482]{width:150px}.menu-conf .input[data-v-5b75e482]{width:200px}.menu-conf .submit[data-v-5b75e482]{padding:20px 0 0 34px}", ""]);

// exports


/***/ }),

/***/ 1726:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".ivu-form-item[data-v-6445c128]{width:650px}.input-dt[data-v-6445c128]{width:160px;display:inline-block}.list[data-v-6445c128]{padding-left:20px;margin-left:10px}.list li[data-v-6445c128]{padding:6px 0;list-style-type:disc}.myform .input-s[data-v-6445c128]{width:125px}.block-tips[data-v-6445c128]{background:#eee;padding:10px;margin-top:10px;color:#ff4500;line-height:2}", ""]);

// exports


/***/ }),

/***/ 1729:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".query-section .item[data-v-687e02a6]{display:inline-block;width:160px;line-height:28px}.myform .input-s[data-v-687e02a6]{width:165px}.myform .note[data-v-687e02a6]{line-height:1.6;color:#ff8c00;padding-top:10px;margin-left:0}.color1[data-v-687e02a6]{color:#179b16}.color2[data-v-687e02a6]{color:#ff4500}.mr-10[data-v-687e02a6]{margin-right:10px}.mrb[data-v-687e02a6]{margin-bottom:20px}.mrb .int[data-v-687e02a6]{width:100px;margin-right:10px}.mrb[data-v-687e02a6] .ivu-btn{padding:0 11px}.mytb th[data-v-687e02a6]{color:#999}.mytb td[data-v-687e02a6],.mytb th[data-v-687e02a6]{text-align:left;padding:10px 10px 8px}.clear-icon[data-v-687e02a6]{color:#ccc;font-size:24px}.clear-icon[data-v-687e02a6]:hover{cursor:pointer}.mul-td[data-v-687e02a6]{display:flex;align-items:center}.points-set input[data-v-687e02a6]{width:80px;text-align:center;height:28px;margin-right:10px}.reward-help[data-v-687e02a6]{margin:10px 10px 20px;background:#f2f2f2;padding:15px}.reward-help .tit[data-v-687e02a6]{padding:0 0 10px;font-weight:700;font-size:13px}.reward-help ul[data-v-687e02a6]{list-style-type:disc;margin-left:20px}.reward-help li[data-v-687e02a6]{padding:6px 0;line-height:1}", ""]);

// exports


/***/ }),

/***/ 1744:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".flex-center[data-v-70a6df76]{display:flex;align-items:center}[data-v-70a6df76].ivu-form .ivu-form-item-label{width:110px!important}.tb-tr[data-v-70a6df76]{padding-left:67px;padding-top:21px;position:relative;border-bottom:1px solid #e4e9ef}.tb-tr .tr-tag[data-v-70a6df76]{position:absolute;left:14px;top:27.5px}.tb-tr .btn-line[data-v-70a6df76]{margin-bottom:20px}.tb-tr .btn-line button[data-v-70a6df76]:first-child{margin-right:10px}.tb-tr .clear-icon[data-v-70a6df76]{color:#ccc;font-size:24px;margin:0 20px;cursor:pointer}.tb-tr .mul-td[data-v-70a6df76]{margin-bottom:23px}.tb-tr .mul-td .int[data-v-70a6df76]{width:62px;margin:0 10px}.myform .spt[data-v-70a6df76]{padding:0 0 0 8px}", ""]);

// exports


/***/ }),

/***/ 1761:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".row-sb[data-v-7a72fd15]{display:flex;justify-content:space-between}.qrcode img[data-v-7a72fd15]{width:150px}.prdlink td[data-v-7a72fd15]{padding:8px 10px;min-width:110px}.prdlink h3[data-v-7a72fd15]{margin:0;font-size:14px}.prdlink .qrcode[data-v-7a72fd15]{width:200px;border:1px solid #ddd}.prdlink .link-value[data-v-7a72fd15]{background:#eee;width:500px}.link-value[data-v-7a72fd15]{display:flex;padding:3px 10px}.link-value .link[data-v-7a72fd15]{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.link-value .copy-tip[data-v-7a72fd15]{width:40px;text-align:right;display:none}.link-value[data-v-7a72fd15]:hover{background:#eee;cursor:pointer;position:relative}.link-value:hover .copy-tip[data-v-7a72fd15]{display:inline-block}.link-value:active .copy-tip[data-v-7a72fd15]{color:red}", ""]);

// exports


/***/ }),

/***/ 1770:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".prdlink td[data-v-7f2688a8]{padding:8px 10px}.prdlink h3[data-v-7f2688a8]{margin:0;font-size:14px}.prdlink .qrcode[data-v-7f2688a8]{width:200px;border:1px solid #ddd}.prdlink .link[data-v-7f2688a8]{padding:5px;background:#eee}[data-v-7f2688a8].entry-ticket-modal .ivu-modal-header{display:none}[data-v-7f2688a8].entry-ticket-modal .ivu-modal-body{padding:0;margin:0}[data-v-7f2688a8].entry-ticket-modal .ivu-modal-content{border-radius:50%}[data-v-7f2688a8].entry-ticket-modal .entry-ticket-img{display:flex;justify-content:center}[data-v-7f2688a8].entry-ticket-modal .entry-ticket-img img{width:100%}", ""]);

// exports


/***/ }),

/***/ 1784:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".ivu-form-item[data-v-92c2c4aa]{width:650px}.input-dt[data-v-92c2c4aa]{width:160px;display:inline-block}.list[data-v-92c2c4aa]{padding-left:20px;margin-left:10px}.list li[data-v-92c2c4aa]{padding:6px 0;list-style-type:disc}.myform .input-s[data-v-92c2c4aa]{width:125px}.block-tips[data-v-92c2c4aa]{background:#eee;padding:10px;margin-top:10px;color:#ff4500;line-height:2}.input-date[data-v-92c2c4aa]{width:170px}", ""]);

// exports


/***/ }),

/***/ 1792:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".query-section[data-v-9fb69b24]{padding:8px 0 17px}.status-list[data-v-9fb69b24]{vertical-align:middle}.date-query[data-v-9fb69b24]{display:inline-block;margin:0 0 0 30px;position:relative;top:-2px}.date-query .date[data-v-9fb69b24]{display:inline-block;width:110px}.date-query button[data-v-9fb69b24]{margin-left:10px}.order-type[data-v-9fb69b24]{padding:0 8px}.order-type i[data-v-9fb69b24]{font-size:13px}.order-type[data-v-9fb69b24]:hover{background:#ddd}.prdlink td[data-v-9fb69b24]{padding:8px 10px}.prdlink h3[data-v-9fb69b24]{margin:0;font-size:14px}.prdlink .qrcode[data-v-9fb69b24]{width:200px;border:1px solid #ddd}.prdlink .link[data-v-9fb69b24]{padding:5px;background:#eee}", ""]);

// exports


/***/ }),

/***/ 1799:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".ivu-form-item[data-v-acd9ec8e]{width:650px}.input-dt[data-v-acd9ec8e]{width:160px;display:inline-block}.list[data-v-acd9ec8e]{padding-left:20px;margin-left:10px}.list li[data-v-acd9ec8e]{padding:6px 0;list-style-type:disc}.myform .input-s[data-v-acd9ec8e]{width:125px}.block-tips[data-v-acd9ec8e]{background:#eee;padding:10px;margin-top:10px;color:#ff4500;line-height:2}", ""]);

// exports


/***/ }),

/***/ 1800:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".item-logs li[data-v-b1531382]{width:225px;margin:8px;border:1px solid #eee;box-shadow:3px 3px 3px #eee;display:inline-block;padding:10px}.item-logs li .photo[data-v-b1531382]{float:left;width:80px}.item-logs li .ctime[data-v-b1531382]{padding:9px 0 1px}.item-logs li .uname[data-v-b1531382]{font-size:13px;font-weight:700;max-width:110px;height:22px;overflow:hidden}.item-logs .wx-photo[data-v-b1531382]{width:65px;height:65px;line-height:65px;display:inline-block;border-radius:50%;margin-right:10px}.prdlink td[data-v-b1531382]{padding:8px 10px}.prdlink h3[data-v-b1531382]{margin:0;font-size:14px}.prdlink .qrcode[data-v-b1531382]{width:200px;border:1px solid #ddd}.prdlink .link[data-v-b1531382]{padding:5px;background:#eee}", ""]);

// exports


/***/ }),

/***/ 1817:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".myform .card-payment-list[data-v-da62da88]{border-bottom:1px solid #e0e0e0}.myform .card-payment-list li[data-v-da62da88]{display:flex;align-items:center}.myform .card-payment-list .no-data[data-v-da62da88]{padding:10px 0}.myform .input-small[data-v-da62da88]{width:60px;text-align:center;margin:0 5px}.myform .hover-view[data-v-da62da88]{position:relative}.myform .hover-view[data-v-da62da88]:hover:before{position:absolute;bottom:-120px;left:40px;content:\"\";display:flex;width:252px;height:448px;background-image:url(\"https://jzongguan.com/imglib/jzg-pc/coupon/style-custom.jpg\");background-repeat:no-repeat;background-position:0 0;background-size:100% 100%;box-shadow:6px 6px 6px #bbb;border:8px solid #ddd}", ""]);

// exports


/***/ }),

/***/ 1830:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".flex-center[data-v-f873c2da]{display:flex;align-items:center}[data-v-f873c2da].ivu-form .ivu-form-item-label{width:110px!important}.tb-tr[data-v-f873c2da]{padding-left:67px;padding-top:21px;position:relative;border-bottom:1px solid #e4e9ef}.tb-tr .tr-tag[data-v-f873c2da]{position:absolute;left:14px;top:27.5px}.tb-tr .btn-line[data-v-f873c2da]{margin-bottom:20px}.tb-tr .btn-line button[data-v-f873c2da]:first-child{margin-right:10px}.tb-tr .clear-icon[data-v-f873c2da]{color:#ccc;font-size:24px;margin:0 20px;cursor:pointer}.tb-tr .mul-td[data-v-f873c2da]{margin-bottom:23px}.tb-tr .mul-td .int[data-v-f873c2da]{width:62px;margin:0 10px}.myform .spt[data-v-f873c2da]{padding:0 0 0 8px}", ""]);

// exports


/***/ }),

/***/ 1831:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".coupon-style-dlg ul[data-v-f8f32960]{display:grid;grid-template-columns:auto auto auto auto}.coupon-style-dlg ul li[data-v-f8f32960]{padding:10px;margin:10px;cursor:pointer;background:#eee;position:relative}.coupon-style-dlg ul li[data-v-f8f32960]:hover{box-shadow:6px 6px 6px #bbb}.coupon-style-dlg ul li .check[data-v-f8f32960]{background:#2b85e4;width:24px;height:24px;border-radius:24px;line-height:24px;position:absolute;top:20px;right:20px;text-align:center}.coupon-style-dlg ul li .check i[data-v-f8f32960]{color:#fff;font-size:14px}.coupon-style-dlg ul img[data-v-f8f32960]{width:100%}.qrcode img[data-v-f8f32960]{width:150px}.prdlink td[data-v-f8f32960]{padding:8px 10px;min-width:110px}.prdlink h3[data-v-f8f32960]{margin:0;font-size:14px}.prdlink .qrcode[data-v-f8f32960]{width:200px;border:1px solid #ddd}.prdlink .link-value[data-v-f8f32960]{background:#eee;width:500px}.link-value[data-v-f8f32960]{display:flex;padding:3px 10px}.link-value .link[data-v-f8f32960]{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.link-value .copy-tip[data-v-f8f32960]{width:40px;text-align:right;display:none}.link-value[data-v-f8f32960]:hover{background:#eee;cursor:pointer;position:relative}.link-value:hover .copy-tip[data-v-f8f32960]{display:inline-block}.link-value:active .copy-tip[data-v-f8f32960]{color:red}", ""]);

// exports


/***/ }),

/***/ 1832:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".prds li[data-v-fc4813f4]{display:block;list-style:circle;padding-bottom:8px;position:relative}.prds li[data-v-fc4813f4]:last-child{padding-bottom:0}.prds li .right[data-v-fc4813f4]{width:200px;position:absolute;right:0}", ""]);

// exports


/***/ }),

/***/ 1837:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1536);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("edae794e", content, true, {});

/***/ }),

/***/ 1856:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1555);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("feffe008", content, true, {});

/***/ }),

/***/ 1861:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1560);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("2a440a6e", content, true, {});

/***/ }),

/***/ 1871:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1570);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("47da490e", content, true, {});

/***/ }),

/***/ 1876:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1575);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("c4367008", content, true, {});

/***/ }),

/***/ 1887:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1586);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("2e915573", content, true, {});

/***/ }),

/***/ 1900:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1599);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("1e29b540", content, true, {});

/***/ }),

/***/ 1902:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1601);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("728438fa", content, true, {});

/***/ }),

/***/ 1905:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1604);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("4a7d7639", content, true, {});

/***/ }),

/***/ 1907:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1606);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("cd66d09e", content, true, {});

/***/ }),

/***/ 1909:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1608);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("e7807fda", content, true, {});

/***/ }),

/***/ 1916:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1615);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("c75ff766", content, true, {});

/***/ }),

/***/ 1921:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1620);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("bda9f124", content, true, {});

/***/ }),

/***/ 1926:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1625);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("78cf4742", content, true, {});

/***/ }),

/***/ 1936:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1635);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("974f4b34", content, true, {});

/***/ }),

/***/ 1953:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1652);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("33105562", content, true, {});

/***/ }),

/***/ 1976:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1675);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("8cc3fa80", content, true, {});

/***/ }),

/***/ 1977:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1676);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("66e2dc3f", content, true, {});

/***/ }),

/***/ 1988:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1687);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("6919167c", content, true, {});

/***/ }),

/***/ 2001:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1700);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("3a7f7074", content, true, {});

/***/ }),

/***/ 2015:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1714);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("22dae0ea", content, true, {});

/***/ }),

/***/ 2027:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1726);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("e4382592", content, true, {});

/***/ }),

/***/ 2030:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1729);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("b61f4242", content, true, {});

/***/ }),

/***/ 2045:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1744);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("0885edae", content, true, {});

/***/ }),

/***/ 2062:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1761);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("05ead9d1", content, true, {});

/***/ }),

/***/ 2071:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1770);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("e9faae80", content, true, {});

/***/ }),

/***/ 2085:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1784);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("c788ddd2", content, true, {});

/***/ }),

/***/ 2093:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1792);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("c15496a8", content, true, {});

/***/ }),

/***/ 2100:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1799);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("3771ff76", content, true, {});

/***/ }),

/***/ 2101:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1800);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("5d6f6c4f", content, true, {});

/***/ }),

/***/ 2118:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1817);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("02111cbc", content, true, {});

/***/ }),

/***/ 2131:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1830);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("d67d01c4", content, true, {});

/***/ }),

/***/ 2132:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1831);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("2cb5e138", content, true, {});

/***/ }),

/***/ 2133:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1832);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("1c0e09f2", content, true, {});

/***/ }),

/***/ 2196:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1861)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1287),
  /* template */
  __webpack_require__(2270),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0ff33cf2",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2197:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1887)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1288),
  /* template */
  __webpack_require__(2298),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1c102567",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2198:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1907)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1289),
  /* template */
  __webpack_require__(2319),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-25bb2dc5",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2245:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "msite-conf"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), (_vm.editable) ? _c('div', {
    staticClass: "items"
  }, [_c('h3', [_vm._v("分享说明设置")]), _vm._v(" "), _c('ul', [_c('li', [_c('label', [_vm._v("门店首页：")]), _c('i-input', {
    staticClass: "input-s",
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.msiteShareConf.msiteDescHome),
      callback: function($$v) {
        _vm.$set(_vm.msiteShareConf, "msiteDescHome", $$v)
      },
      expression: "msiteShareConf.msiteDescHome"
    }
  })], 1), _vm._v(" "), _c('li', [_c('label', [_vm._v("会员卡：")]), _c('i-input', {
    staticClass: "input-s",
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.msiteShareConf.msiteDescCard),
      callback: function($$v) {
        _vm.$set(_vm.msiteShareConf, "msiteDescCard", $$v)
      },
      expression: "msiteShareConf.msiteDescCard"
    }
  })], 1), _vm._v(" "), _c('li', [_c('label', [_vm._v("教练风采：")]), _c('i-input', {
    staticClass: "input-s",
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.msiteShareConf.msiteDescCoach),
      callback: function($$v) {
        _vm.$set(_vm.msiteShareConf, "msiteDescCoach", $$v)
      },
      expression: "msiteShareConf.msiteDescCoach"
    }
  })], 1), _vm._v(" "), _c('li', [_c('label', [_vm._v("团课课表：")]), _c('i-input', {
    staticClass: "input-s",
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.msiteShareConf.msiteDescGl),
      callback: function($$v) {
        _vm.$set(_vm.msiteShareConf, "msiteDescGl", $$v)
      },
      expression: "msiteShareConf.msiteDescGl"
    }
  })], 1), _vm._v(" "), _c('li', [_c('label', [_vm._v("私教课：")]), _c('i-input', {
    staticClass: "input-s",
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.msiteShareConf.msiteDescPl),
      callback: function($$v) {
        _vm.$set(_vm.msiteShareConf, "msiteDescPl", $$v)
      },
      expression: "msiteShareConf.msiteDescPl"
    }
  })], 1), _vm._v(" "), _c('li', [_c('label', [_vm._v("门店活动：")]), _c('i-input', {
    staticClass: "input-s",
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.msiteShareConf.msiteDescActivity),
      callback: function($$v) {
        _vm.$set(_vm.msiteShareConf, "msiteDescActivity", $$v)
      },
      expression: "msiteShareConf.msiteDescActivity"
    }
  })], 1), _vm._v(" "), _c('li', [_c('label', [_vm._v("优惠券：")]), _c('i-input', {
    staticClass: "input-s",
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.msiteShareConf.msiteDescCoupon),
      callback: function($$v) {
        _vm.$set(_vm.msiteShareConf, "msiteDescCoupon", $$v)
      },
      expression: "msiteShareConf.msiteDescCoupon"
    }
  })], 1), _vm._v(" "), _c('li', [_c('label', [_vm._v("幸运抽奖：")]), _c('i-input', {
    staticClass: "input-s",
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.msiteShareConf.msiteDescLottery),
      callback: function($$v) {
        _vm.$set(_vm.msiteShareConf, "msiteDescLottery", $$v)
      },
      expression: "msiteShareConf.msiteDescLottery"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "submit"
  }, [_c('label'), _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.updateShareConf()
      }
    }
  }, [_vm._v("提交")])], 1)])]) : _vm._e()])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("微官网分享设置")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "article"
  }, [_vm._v("\n\t\t\t\t\t为了宣传贵店，任何人可将微官网页面分享给微信好友或朋友圈，分享后在微信端会显示相应页面的简介，\n          您可以自定义分享说明，让分享出去的页面更有吸引力。如下图所示：\n          "), _c('p', [_c('img', {
    attrs: {
      "src": "http://jzongguan.com/imglib/wx-share-exam.png"
    }
  })])])
}]}

/***/ }),

/***/ 2264:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/lottery-list"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "myform",
    staticStyle: {
      "width": "100%"
    }
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("基本信息")]), _vm._v(" "), _c('i-form', {
    ref: "lottery",
    staticStyle: {
      "width": "600px"
    },
    attrs: {
      "model": _vm.lottery,
      "rules": _vm.formRule,
      "label-width": 100
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "title",
      "label": "活动名称"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.lottery.title),
      callback: function($$v) {
        _vm.$set(_vm.lottery, "title", $$v)
      },
      expression: "lottery.title"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "limitRole",
      "label": "抽奖人员"
    }
  }, [_c('radio-group', {
    model: {
      value: (_vm.lottery.limitRole),
      callback: function($$v) {
        _vm.$set(_vm.lottery, "limitRole", $$v)
      },
      expression: "lottery.limitRole"
    }
  }, [_c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("访客")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("会员")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 3
    }
  }, [_vm._v("不限")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "limitDrawNum",
      "label": "每人限制抽奖"
    }
  }, [_c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.lottery.limitDrawNum),
      callback: function($$v) {
        _vm.$set(_vm.lottery, "limitDrawNum", _vm._n($$v))
      },
      expression: "lottery.limitDrawNum"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("次")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "抽奖时间",
      "required": ""
    }
  }, [_c('date-picker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "开始日期"
    },
    model: {
      value: (_vm.lottery.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.lottery, "beginDate", $$v)
      },
      expression: "lottery.beginDate"
    }
  }), _vm._v("\n\t\t\t\t\t~\n\t\t\t\t\t"), _c('date-picker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "结束日期"
    },
    model: {
      value: (_vm.lottery.endDate),
      callback: function($$v) {
        _vm.$set(_vm.lottery, "endDate", $$v)
      },
      expression: "lottery.endDate"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "领取奖截止日期"
    }
  }, [_c('date-picker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": ""
    },
    model: {
      value: (_vm.lottery.receiveEndDate),
      callback: function($$v) {
        _vm.$set(_vm.lottery, "receiveEndDate", $$v)
      },
      expression: "lottery.receiveEndDate"
    }
  }), _vm._v(" "), _c('help', [_vm._v("\n\t\t\t\t\t\t指会员或客户在线操作“领取”的截止日期\n\t\t\t\t\t")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "remark",
      "label": "抽奖说明"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 15
    },
    model: {
      value: (_vm.lottery.remark),
      callback: function($$v) {
        _vm.$set(_vm.lottery, "remark", $$v)
      },
      expression: "lottery.remark"
    }
  })], 1)], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('table', {
    staticClass: "prizes",
    attrs: {
      "border": "0"
    }
  }, [_c('tr', [_c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("序号")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "300"
    }
  }, [_vm._v("奖品名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("中奖概率")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("奖品总数")]), _vm._v(" "), (_vm.lotteryId) ? _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("已中奖数")]) : _vm._e(), _vm._v(" "), _c('th')]), _vm._v(" "), _vm._l((_vm.prizeList), function(p, idx) {
    return _c('tr', [_c('th', [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', [_c('i-input', {
      attrs: {
        "type": "text"
      },
      model: {
        value: (p.name),
        callback: function($$v) {
          _vm.$set(p, "name", $$v)
        },
        expression: "p.name"
      }
    })], 1), _vm._v(" "), _c('td', [_c('i-select', {
      model: {
        value: (p.probabilityLevel),
        callback: function($$v) {
          _vm.$set(p, "probabilityLevel", _vm._n($$v))
        },
        expression: "p.probabilityLevel"
      }
    }, [_c('i-option', {
      attrs: {
        "value": 0
      }
    }, [_vm._v("零")]), _vm._v(" "), _c('i-option', {
      attrs: {
        "value": 1
      }
    }, [_vm._v("低")]), _vm._v(" "), _c('i-option', {
      attrs: {
        "value": 2
      }
    }, [_vm._v("较低")]), _vm._v(" "), _c('i-option', {
      attrs: {
        "value": 3
      }
    }, [_vm._v("中等")]), _vm._v(" "), _c('i-option', {
      attrs: {
        "value": 4
      }
    }, [_vm._v("较高")]), _vm._v(" "), _c('i-option', {
      attrs: {
        "value": 5
      }
    }, [_vm._v("高")])], 1)], 1), _vm._v(" "), _c('td', [_c('input-int', {
      staticClass: "input-s",
      attrs: {
        "title": ""
      },
      model: {
        value: (p.pubNum),
        callback: function($$v) {
          _vm.$set(p, "pubNum", _vm._n($$v))
        },
        expression: "p.pubNum"
      }
    })], 1), _vm._v(" "), (_vm.lotteryId) ? _c('td', {
      attrs: {
        "align": "center"
      }
    }, [(p.name && p.winCnt) ? _c('span', {
      staticClass: "win-cnt"
    }, [_vm._v(_vm._s(p.winCnt))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('td', [(!p.winCnt && p.name) ? _c('a', {
      staticClass: "close",
      attrs: {
        "title": "清空此奖品信息"
      },
      on: {
        "click": function($event) {
          return _vm.clearPrize(idx)
        }
      }
    }, [_c('Icon', {
      attrs: {
        "type": "md-close"
      }
    })], 1) : _vm._e()])])
  })], 2), _vm._v(" "), (_vm.marketEditable) ? _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "100px"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.saveLottery()
      }
    }
  }, [_vm._v("提交")]), _vm._v("\n\t\t\t\t \n\t\t\t\t"), (_vm.lotteryId && _vm.lottery && !_vm.lottery.drawCnt) ? _c('i-button', {
    on: {
      "click": function($event) {
        return _vm.delLottery()
      }
    }
  }, [_vm._v("删除")]) : _vm._e()], 1) : _vm._e()], 1)], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tit"
  }, [_vm._v("奖品设置\n\t\t\t\t"), _c('span', {
    staticClass: "orange"
  }, [_vm._v("（最多可设置八种奖品，空白处表示无奖品，抽奖界面会显示“谢谢参与”）")])])
}]}

/***/ }),

/***/ 2270:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-coupon-share-link g-main"
  }, [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', [_c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": function($event) {
        _vm.addShareLinkDlg = true
      }
    }
  }, [_vm._v("新增")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.couponShareList), function(c, idx) {
    return _c('tr', {
      key: c.linkId
    }, [_c('td', [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "max-width": "300px",
        "min-width": "300px"
      }
    }, [_c('div', {
      staticClass: "link-value",
      on: {
        "click": function($event) {
          return _vm.g.Util.copyText($event, c.shareLinkUrl)
        }
      }
    }, [_c('div', {
      staticClass: "link"
    }, [_vm._v(_vm._s(c.shareLinkUrl))]), _vm._v(" "), _c('span', {
      staticClass: "copy-tip gray"
    }, [_vm._v("复制")])])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.receivedLimitNum))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.receivedNum))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(Date.new(c.updateTime).format('yyyy-MM-dd hh:mm:ss')) + " ")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.staffName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.remark))]), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.editEvent(c.linkId)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openCouponLinkDlg(c)
        }
      }
    }, [_vm._v("二维码")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delEvent(c.linkId)
        }
      }
    }, [_vm._v("删除")])])])])])
  })], 2), _vm._v(" "), (!_vm.couponShareList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()]), _vm._v(" "), (_vm.couponLinkCount) ? _c('div', {
    staticClass: "tbl-footer center"
  }, [_vm._v("共 " + _vm._s(_vm.couponLinkCount) + " 条记录")]) : _vm._e()]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "设置分享链接",
      "width": "600",
      "footer-hide": "",
      "cancel-text": "",
      "mask-closable": false
    },
    model: {
      value: (_vm.addShareLinkDlg),
      callback: function($$v) {
        _vm.addShareLinkDlg = $$v
      },
      expression: "addShareLinkDlg"
    }
  }, [_c('div', {
    staticClass: "coupon-style-dlg"
  }, [_c('i-form', {
    ref: "shareLink",
    staticClass: "myform",
    staticStyle: {
      "width": "500px"
    },
    attrs: {
      "model": _vm.couponShareLink,
      "rules": _vm.formRule,
      "label-width": 100
    }
  }, [(_vm.shopOwnerRole) ? _c('form-item', {
    attrs: {
      "prop": "staffId",
      "label": "创建员工",
      "required": ""
    }
  }, [_c('i-select', {
    attrs: {
      "filterable": "",
      "disabled": _vm.g.Util.isNotEmpty(_vm.selectLinkId)
    },
    model: {
      value: (_vm.couponShareLink.staffId),
      callback: function($$v) {
        _vm.$set(_vm.couponShareLink, "staffId", $$v)
      },
      expression: "couponShareLink.staffId"
    }
  }, _vm._l((_vm.staffList), function(item) {
    return _c('i-option', {
      key: item.staffId,
      attrs: {
        "value": item.staffId,
        "label": item.name
      }
    }, [_c('div', {
      staticClass: "row-sb"
    }, [_c('span', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', {
      staticClass: "gray"
    }, [_vm._v(_vm._s(item.roleNameList.join('/')))])])])
  }), 1)], 1) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "receivedLimitNum",
      "label": "最多领取",
      "required": ""
    }
  }, [_c('input-int', {
    attrs: {
      "max": 9999
    },
    model: {
      value: (_vm.couponShareLink.receivedLimitNum),
      callback: function($$v) {
        _vm.$set(_vm.couponShareLink, "receivedLimitNum", $$v)
      },
      expression: "couponShareLink.receivedLimitNum"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "gray"
  }, [_vm._v("次")]), _vm._v(" "), _c('span', {
    staticClass: "red"
  }, [_vm._v("（生成的该链接最多可领取次数）")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "remark",
      "label": "备注"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 4,
      "placeholder": "备注说明"
    },
    model: {
      value: (_vm.couponShareLink.remark),
      callback: function($$v) {
        _vm.$set(_vm.couponShareLink, "remark", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "couponShareLink.remark"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "100px"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.saveEvent()
      }
    }
  }, [_vm._v("提交")]), _vm._v(" "), (_vm.selectLinkId) ? _c('i-button', {
    on: {
      "click": function($event) {
        return _vm.delEvent(_vm.selectLinkId)
      }
    }
  }, [_vm._v("删除")]) : _vm._e()], 1)], 1)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "优惠券二维码与链接",
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.couponLinkAndQRCodeDlg),
      callback: function($$v) {
        _vm.couponLinkAndQRCodeDlg = $$v
      },
      expression: "couponLinkAndQRCodeDlg"
    }
  }, [(_vm.couponLinkAndQRCodeDlg && _vm.selectCoupon) ? [_c('table', {
    staticClass: "prdlink"
  }, [_c('tr', [_c('td', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("优惠券名称：")]), _c('td', [_c('h3', [_vm._v(_vm._s(_vm.selectCoupon.title))])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("优惠券二维码：")]), _vm._v(" "), _c('td', [_c('img', {
    staticClass: "qrcode",
    attrs: {
      "src": _vm.g.Conf.QR_CODE_URL + encodeURIComponent(_vm.selectCouponUrl)
    }
  })])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("优惠券链接：")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "link-value",
    on: {
      "click": function($event) {
        return _vm.g.Util.copyText($event, _vm.selectCouponUrl)
      }
    }
  }, [_c('div', {
    staticClass: "link"
  }, [_vm._v(_vm._s(_vm.selectCouponUrl))]), _vm._v(" "), _c('span', {
    staticClass: "copy-tip gray"
  }, [_vm._v("复制")])])])])])] : _vm._e(), _vm._v(" "), _c('div', {
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
        _vm.couponLinkAndQRCodeDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "45"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "300"
    }
  }, [_vm._v("分享链接")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("总次数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("已使用")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("修改时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("创建人")]), _vm._v(" "), _c('th', [_vm._v("备注")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "150px"
    },
    attrs: {
      "width": "150"
    }
  }, [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2280:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/groupbuy-product"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList
    }
  }, [_c('a', {
    attrs: {
      "href": "https://mp.weixin.qq.com/s/KVhL2kfOiSOreVPWM8yuOQ",
      "target": "_blank"
    }
  }, [_vm._v("拼团帮助")])]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd"
  }, [(_vm.g.data.shop.hasWxPay) ? [(_vm.editable) ? _c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": function($event) {
        return _vm.$router.push('/market/groupbuy-product-create')
      }
    }
  }, [_vm._v("新增拼团商品")]) : _vm._e()] : _c('span', {
    staticClass: "orangered"
  }, [_c('i', {
    staticClass: "iconfont icon-alert1 biggest"
  }), _vm._v("\n\t\t\t\t\t贵店尚未开通微信在线支付，无法使用拼团 （"), _c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/online-pay-apply')
      }
    }
  }, [_vm._v("去申请在线支付 →")]), _vm._v("）\n\t\t\t\t")])], 2), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.productList), function(p) {
    return _c('tr', [_c('td', [_c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.$router.push('/market/groupbuy-product-edit/' + p.gpId)
        }
      }
    }, [_vm._v(_vm._s(p.productTitle))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.cardName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(p.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(p.endDate)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.limitHours) + " 小时")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.limitMembers))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(p.originalPrice))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(p.price))]), _vm._v(" "), _c('td', {
      staticClass: "green"
    }, [_vm._v("￥" + _vm._s(p.imprest))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.teamCnt))]), _vm._v(" "), _c('td', {
      staticClass: "green"
    }, [_vm._v(_vm._s(p.finishedTeamCnt))]), _vm._v(" "), _c('td', [_vm._v(_vm._s((p.finishedTeamRate * 100).toFixed(1)) + "%")]), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.$router.push('/market/groupbuy-product-edit/' + p.gpId)
        }
      }
    }, [_vm._v("详情")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openPrdLinkDlg(p)
        }
      }
    }, [_vm._v("二维码")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delGroupbuyProduct(p.gpId)
        }
      }
    }, [_vm._v("删除")])])])])])
  })], 2), _vm._v(" "), (_vm.totalCount && _vm.totalCount > 0) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.totalCount,
      "page-size": _vm.g.Conf.PAGE_SIZE,
      "current": _vm.queryPage ? _vm.queryPage : 1,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryGroupbuyProductList
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.productList && _vm.productList.length === 0) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("暂无数据")]) : _vm._e()])]), _vm._v(" "), _c('section', {
    staticClass: "note"
  }, [_vm._m(1), _vm._v(" "), _c('ol', [_c('li', [_vm._v("拼团是指多人在规定的时间内购买同一个商品享受优惠的购物活动；")]), _vm._v(" "), _c('li', [_vm._v("拼团可以由任何人自由发起（即为开团），然后将拼团商品页面分享给微信好友或朋友圈；")]), _vm._v(" "), _c('li', [_vm._v("参与拼团的人员也可以将拼团商品页面分享给微信好友或朋友圈；")]), _vm._v(" "), _c('li', [_vm._v("每一个拼团人员（包括发起者和参与者）都需要在线支付预付款；")]), _vm._v(" "), _c('li', [_vm._v("在拼团规定的时间内达到规定人数，则拼团成功，否则视为失败；失败后，门店可手动在健总管系统中退回客户预付款；")]), _vm._v(" "), _c('li', [_vm._v("门店拼团二维码如下"), _c('span', {
    staticClass: "gray"
  }, [_vm._v("（右键点击二维码可下载二维码图片）")]), _vm._v("：\n\t\t\t\t\t"), _c('p', {
    staticClass: "qrcode"
  }, [_c('img', {
    attrs: {
      "src": _vm.qrcodeUrl
    }
  })])]), _vm._v(" "), _c('li', [_vm._v("门店拼团页面地址（可绑定到微信公众号）"), _c('p', [_vm._v(_vm._s(_vm.groupbuyUrl))])])])])], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "拼团商品二维码与链接",
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.prdLinkDlg),
      callback: function($$v) {
        _vm.prdLinkDlg = $$v
      },
      expression: "prdLinkDlg"
    }
  }, [(_vm.prdLinkDlg && _vm.selectProduct) ? [_c('table', {
    staticClass: "prdlink"
  }, [_c('tr', [_c('td', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("商品名称：")]), _c('td', [_c('h3', [_vm._v(_vm._s(_vm.selectProduct.productTitle))])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("商品二维码：")]), _vm._v(" "), _c('td', [_c('img', {
    staticClass: "qrcode",
    attrs: {
      "src": _vm.g.Conf.QR_CODE_URL + encodeURIComponent(_vm.selectPrdUrl)
    }
  })])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("商品链接：")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "link"
  }, [_vm._v(_vm._s(_vm.selectPrdUrl))])])])])] : _vm._e(), _vm._v(" "), _c('div', {
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
        _vm.prdLinkDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("商品名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "180"
    }
  }, [_vm._v("会员卡")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "180"
    }
  }, [_vm._v("开团期限")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("时效")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("成团人数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("原价")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("拼团价")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("预付款")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("已开团数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("已成团数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("成团率")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("操作")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit-notice"
  }, [_vm._v("拼团说明")])])
}]}

/***/ }),

/***/ 2285:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/share-item/home"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "article"
  }, [_vm._v("\n\t\t\t\t全员分销是指，门店所有相关人员（包括会员和员工）都可帮助门店在线分销门店活动或会员卡，分销人员可获得奖励，门店可高效获得新客户。\n\t\t\t\t"), _c('p'), _vm._v("\n\t\t\t\t使用全员分销的建议步骤：\n\t\t\t\t"), _c('div', {
    staticClass: "step"
  }, [_c('b', [_c('Icon', {
    attrs: {
      "type": "ios-flag",
      "size": "20"
    }
  }), _vm._v(" 步骤 1：")], 1), _vm._v(" 分销配置")]), _vm._v("\n\t\t\t\t门店工作人员（有营销配置权限）需首先设置分销项目，分别设置会员分销项目，员工分销项目。分销项目中可自由编辑：\n\t\t\t\t项目名称、会员分销奖励说明、新客户奖励说明等。\n\t\t\t\t"), _c('p'), _vm._v("\n\t\t\t\t分销页面中还会展示门店信息（"), _c('span', {
    staticClass: "gray"
  }, [_vm._v("可通过左侧【设置 》 门店信息】编辑")]), _vm._v("）： 门店地址、电话、图片（最多6张）、介绍。\n\t\t\t\t因此，为了分销页面的吸引力，建议丰富门店内容，尤其是门店图片。\n\n\t\t\t\t"), _c('div', {
    staticClass: "step"
  }, [_c('b', [_c('Icon', {
    attrs: {
      "type": "ios-flag",
      "size": "20"
    }
  }), _vm._v(" 步骤 2：")], 1), _vm._v(" 在线分享")]), _vm._v("\n\t\t\t\t分销人员可通过健总管微信网页版（参考"), _c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/mobile-usage')
      }
    }
  }, [_vm._v("手机版")]), _vm._v("）分享出分销页面（"), _c('b', [_vm._v("内含人员ID，用于追踪效果")]), _vm._v("）到微信好友或朋友圈，如下图所示：\n\t\t\t\t"), _c('p'), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/market/share-item-doc-0.png'
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/market/share-item-doc-1.png'
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/market/share-item-doc-2.png'
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/market/share-item-doc-5.png'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "step"
  }, [_c('b', [_c('Icon', {
    attrs: {
      "type": "ios-flag",
      "size": "20"
    }
  }), _vm._v(" 步骤 3：")], 1), _vm._v(" 访客参与")]), _vm._v("\n\t\t\t\t新客户点击查看分享的页面，可领取分销项目，需要提交手机号和姓名。\n\t\t\t\t提交后，新客户信息会自动进入门店客户模块，并且系统会自动统计到分享者的名下。\n\t\t\t\t如果新客户成为了门店会员（"), _c('span', {
    staticClass: "gray"
  }, [_vm._v("使用提交的手机号注册会员")]), _vm._v("），那们，该客户就算被分享者成功转化。\n\t\t\t\t"), _c('img', {
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/market/share-item-doc-4.png'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "step"
  }, [_c('b', [_c('Icon', {
    attrs: {
      "type": "ios-flag"
    }
  }), _vm._v(" 步骤 4：")], 1), _vm._v(" 查看效果")]), _vm._v("\n\t\t\t\t门店工作人员可通过电脑端详细查看分销的效果和各种统计数据。分销者也能通过手机端查看各自的分销统计，如下图所示：\n\t\t\t\t"), _c('img', {
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/market/share-item-doc-3.png'
    }
  })]), _vm._v(" "), _c('p', [_vm._v(" ")]), _vm._v(" "), _c('hr'), _vm._v(" "), _vm._m(0)])], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('a', {
    attrs: {
      "target": "_blank",
      "href": "//jzongguan.com/imglib/jzg-pc/share-items-ad.png"
    }
  }, [_vm._v("多级分销简介 →")])])
}]}

/***/ }),

/***/ 2298:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-fit-entry-ticket-buy-list"
  }, [(_vm.editable) ? _c('section', [_c('div', {
    staticClass: "tbl-header"
  }, [_c('div', {
    staticClass: "l"
  }, [_c('i-button', {
    attrs: {
      "icon": "md-refresh"
    },
    on: {
      "click": _vm.reloadProductOrderList
    }
  }, [_vm._v("刷新")]), _vm._v("  \n        "), _c('i-select', {
    staticStyle: {
      "width": "500px"
    },
    attrs: {
      "placeholder": "请选择散客入场券商品"
    },
    on: {
      "on-change": function($event) {
        return _vm.queryProductOrderList()
      }
    },
    model: {
      value: (_vm.query.productId),
      callback: function($$v) {
        _vm.$set(_vm.query, "productId", $$v)
      },
      expression: "query.productId"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("所有商品")])]), _vm._v(" "), _vm._l((_vm.productList), function(p) {
    return _c('i-option', {
      key: p.productId,
      attrs: {
        "value": p.productId
      }
    }, [_vm._v(_vm._s(p.productTitle) + "\n            （" + _vm._s(p.beginTime) + " ~ " + _vm._s(p.endTime) + "）\n          ")])
  })], 2), _vm._v("\n         \n        "), _c('i-select', {
    staticStyle: {
      "width": "90px"
    },
    attrs: {
      "placeholder": "支付状态"
    },
    on: {
      "on-change": function($event) {
        return _vm.queryProductOrderList()
      }
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
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("不限")])]), _vm._v(" "), _vm._l((_vm.g.Dict.OrderStatus), function(value, key) {
    return _c('i-option', {
      key: key,
      attrs: {
        "value": key
      }
    }, [_vm._v(_vm._s(value))])
  })], 2), _vm._v("\n         \n        "), _c('i-select', {
    staticStyle: {
      "width": "130px"
    },
    attrs: {
      "placeholder": "分享员工"
    },
    on: {
      "on-change": function($event) {
        return _vm.queryProductOrderList()
      }
    },
    model: {
      value: (_vm.query.sharerStaffId),
      callback: function($$v) {
        _vm.$set(_vm.query, "sharerStaffId", $$v)
      },
      expression: "query.sharerStaffId"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("所有员工")])]), _vm._v(" "), _vm._l((_vm.staffList), function(s) {
    return _c('i-option', {
      key: s.staffId,
      attrs: {
        "value": s.staffId
      }
    }, [_vm._v("\n            " + _vm._s(s.name) + "\n          ")])
  })], 2), _vm._v("\n         \n        "), _c('date-picker', {
    staticClass: "-date",
    staticStyle: {
      "width": "190px"
    },
    attrs: {
      "format": "yyyy-MM-dd",
      "confirm": "",
      "options": _vm.createDateOption,
      "placeholder": "入场券活动时间",
      "type": "daterange",
      "placement": "bottom-start"
    },
    on: {
      "on-change": function($event) {
        return _vm.queryProductOrderList()
      }
    },
    model: {
      value: (_vm.query.createDateRange),
      callback: function($$v) {
        _vm.$set(_vm.query, "createDateRange", $$v)
      },
      expression: "query.createDateRange"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_vm._v("\n        查询到 "), _c('b', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.orderCount))]), _vm._v(" 条记录\n      ")])]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_c('tr', [_c('th', {
    staticStyle: {
      "min-width": "80px"
    }
  }, [_vm._v("商品名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("客户姓名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "105"
    }
  }, [_vm._v("客户手机")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "85"
    }
  }, [_vm._v("价格")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("状态")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("支付时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("购买时间")]), _vm._v(" "), _c('th', [_vm._v("分享人")]), _vm._v(" "), (_vm.editable) ? _c('th', [_vm._v("操作")]) : _vm._e()]), _vm._v(" "), _vm._l((_vm.productOrderList), function(p) {
    return _c('tr', {
      key: p.orderId
    }, [_c('td', [_vm._v(_vm._s(p.productTitle))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.custName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.custPhone))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(p.amount))]), _vm._v(" "), _c('td', [(p.status === 0) ? _c('span', {
      staticClass: "orange"
    }, [_vm._v("未支付")]) : (p.status === 9) ? _c('span', {
      staticClass: "green"
    }, [_vm._v("已支付")]) : (p.status === 1) ? _c('span', {
      staticClass: "red"
    }, [_vm._v("已退款")]) : (p.status === 2) ? _c('span', {
      staticClass: "none"
    }, [_vm._v("已使用")]) : _vm._e()]), _vm._v(" "), _c('td', [(p.transTime) ? [_vm._v(_vm._s(p.transTime))] : _c('i', {
      staticClass: "gray"
    }, [_vm._v("暂无")])], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.salesName))]), _vm._v(" "), (_vm.editable) ? _c('td', [(p.status === 9) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.refundOrder(p.orderId)
        }
      }
    }, [_vm._v("退款")]) : (p.status === 1) ? _c('div', [_vm._v("\n              退款人：" + _vm._s(p.refundStaffName) + "\n              "), _c('div', {
      staticClass: "p5"
    }, [_vm._v("退款时间：" + _vm._s(p.refundTime))])]) : (p.status === 2) ? _c('div', [_vm._v("\n              签到人：" + _vm._s(p.checkinStaffName || p.custName) + "\n              "), _c('div', {
      staticClass: "p5"
    }, [_vm._v("签到时间：" + _vm._s(p.checkinTime))])]) : _vm._e()]) : _vm._e()])
  })], 2)]), _vm._v(" "), (_vm.orderCount > _vm.g.Conf.PAGE_SIZE) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.orderCount,
      "page-size": _vm.g.Conf.PAGE_SIZE,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryProductOrderList
    }
  })], 1) : _vm._e(), _vm._v(" "), (!_vm.productOrderList || _vm.productOrderList.length === 0) ? _c('div', {
    staticClass: "no-data center"
  }, [_vm._v("暂无数据")]) : _vm._e()]) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 2311:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/auto-renew"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "l"
  }, [(_vm.editable) ? _c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": function($event) {
        return _vm.$router.push('/market/auto-renew-create')
      }
    }
  }, [_vm._v("添加自助续费卡")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "r"
  })]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.renewalList), function(item, idx) {
    return _c('tr', {
      key: idx
    }, [_c('td', [_vm._v(_vm._s(item.cardName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.usableDays) + " 天")]), _vm._v(" "), _c('td', [_vm._v(_vm._s('￥' + item.paymentAmount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.buyCnt)), (Number(item.buyCnt) > 0) ? _c('a', {
      staticClass: "l10",
      on: {
        "click": function($event) {
          return _vm.queryRecord(item)
        }
      }
    }, [_vm._v("[查看]")]) : _vm._e()]), _vm._v(" "), _c('td', [(item.status === 0) ? _c('span', {
      staticClass: "green"
    }, [_vm._v("可用")]) : _c('span', {
      staticClass: "orangered"
    }, [_vm._v("停用")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.createTime))]), _vm._v(" "), _c('td', [(_vm.editable) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.$router.push('/market/auto-renew-edit/' + item.ssrId)
        }
      }
    }, [_vm._v("详情")])]), _vm._v(" "), _c('li', [_c('a', {
      attrs: {
        "title": "查看二维码"
      },
      on: {
        "click": function($event) {
          return _vm.openPrdQrcodeDlg(item)
        }
      }
    }, [_vm._v("二维码")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.stopRenewItem(item.ssrId, item.status)
        }
      }
    }, [_vm._v(_vm._s(item.status == 0 ? '停用' : '启用'))])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.deleteRenewItem(item.ssrId)
        }
      }
    }, [_vm._v("删除")])])]) : _vm._e()])])
  })], 2)]), _vm._v(" "), (_vm.renewCount && _vm.renewCount > 0) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.renewCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryList
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.renewalList && !_vm.renewalList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n\t\t      暂无数据\n\t      ")]) : _vm._e()]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": '活动参与记录',
      "width": "700",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.recordDlg),
      callback: function($$v) {
        _vm.recordDlg = $$v
      },
      expression: "recordDlg"
    }
  }, [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("参与人姓名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("性别")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("手机号")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("参与时间")]), _vm._v(" "), _c('th', [_vm._v("充值金额")])]), _vm._v(" "), (_vm.recordList.length > 0) ? _vm._l((_vm.recordList), function(r, idx) {
    return _c('tr', {
      key: idx
    }, [_c('td', [_vm._v(_vm._s(r.memberName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.sex ? '男' : '女'))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.phoneNo))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s('￥' + r.paymentAmount))])])
  }) : _vm._e()], 2), _vm._v(" "), (_vm.recordCount && _vm.recordCount > 0) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.recordCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryPageRecord
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.recordCount == 0) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("\n          暂无活动参与记录\n        ")]) : _vm._e()]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "二维码",
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.productQrcodeDlg),
      callback: function($$v) {
        _vm.productQrcodeDlg = $$v
      },
      expression: "productQrcodeDlg"
    }
  }, [(_vm.productQrcodeDlg) ? [_c('table', {
    staticClass: "eventlink"
  }, [_c('tr', [_c('td', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("自助续费卡名称：")]), _vm._v(" "), _c('td', [_c('h3', [_vm._v(_vm._s(_vm.cardTitle))])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("二维码：")]), _vm._v(" "), _c('td', [_c('img', {
    staticClass: "qrcode",
    attrs: {
      "src": _vm.g.Conf.QR_CODE_URL + encodeURIComponent(_vm.qrCodeUrl)
    }
  })])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("链接：")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "link"
  }, [_vm._v(_vm._s(_vm.qrCodeUrl))])])])])] : _vm._e(), _vm._v(" "), _c('div', {
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
        _vm.productQrcodeDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "250"
    }
  }, [_vm._v("会员卡名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("使用天数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("首次费用")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("已购买数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("状态")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "160"
    }
  }, [_vm._v("创建时间")]), _vm._v(" "), _c('th', [_vm._v("操作")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "note"
  }, [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit-notice"
  }, [_vm._v("自助续费卡说明")])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("自助续费卡是指客户在线购买设置的卡后，按照续费规则要求的时间在线续费")]), _vm._v(" "), _c('li', [_vm._v("系统会自动按照续费规则中的时间提醒会员在线续费")]), _vm._v(" "), _c('li', [_vm._v("自助续费卡的目的是通过提高续费的优惠和方便性，从而增加会员的续费率")])])])
}]}

/***/ }),

/***/ 2313:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/ge-game-list"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), _c('section', [_c('div', [_c('i-select', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "placeholder": "领取状态"
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
      "value": -1
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("不限状态")])]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 0
    }
  }, [_vm._v("未领取")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("已领取")])], 1), _vm._v("\n\t\t\t\t \n\t\t\t\t"), _c('i-select', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "placeholder": "请选择中奖奖品"
    },
    model: {
      value: (_vm.query.prizeId),
      callback: function($$v) {
        _vm.$set(_vm.query, "prizeId", $$v)
      },
      expression: "query.prizeId"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("所有奖品")])]), _vm._v(" "), _vm._l((_vm.geGamePrizeList), function(p) {
    return _c('i-option', {
      key: p.prizeId,
      attrs: {
        "value": p.prizeId
      }
    }, [_vm._v(_vm._s(p.prizeName))])
  })], 2), _vm._v("\n\t\t\t\t \n\t\t\t\t"), _c('i-button', {
    on: {
      "click": function($event) {
        return _vm.queryGeGameRecord(null)
      }
    }
  }, [_vm._v("查询")])], 1), _vm._v(" "), _c('div', {
    staticClass: "mytbl mt15"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.gameRecordList), function(l, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', [(l.wxHeadUrl) ? _c('img', {
      staticClass: "wx-head",
      attrs: {
        "src": l.wxHeadUrl
      }
    }) : _vm._e()]), _vm._v(" "), _c('td', [(l.guestType === 1) ? _c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.viewCust(l.guestId, l.guestName)
        }
      }
    }, [_vm._v(_vm._s(l.guestName))]) : (l.guestType === 2) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.viewMember(l.guestId)
        }
      }
    }, [_vm._v(_vm._s(l.guestName))]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.GuestTypes[l.guestType]))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createTime))]), _vm._v(" "), _c('td', [(l.prizeName) ? [_vm._v(_vm._s(l.prizeName))] : _c('span', {
      staticClass: "gray"
    }, [_vm._v("未中奖")])], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.receivedTime))]), _vm._v(" "), _c('td', [(l.prizeName && !l.receivedTime) ? _c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.receivePrize(l, idx)
        }
      }
    }, [_vm._v("领取")]) : _vm._e()])])
  })], 2)]), _vm._v(" "), (_vm.recordCnt) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.recordCnt,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryGeGameRecord
    }
  })], 1) : _vm._e()])], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员信息",
      "width": "780",
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
      "member-id": _vm.memberId
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": '客户信息 - ' + _vm.custName,
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.viewCustDlg),
      callback: function($$v) {
        _vm.viewCustDlg = $$v
      },
      expression: "viewCustDlg"
    }
  }, [(_vm.custId && _vm.viewCustDlg) ? _c('cust-detail', {
    attrs: {
      "cust-id": _vm.custId,
      "can-create": false
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("微信头像")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("参与人姓名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("参与人类型")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "180"
    }
  }, [_vm._v("参与时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "250"
    }
  }, [_vm._v("中奖结果")]), _vm._v(" "), _c('th', [_vm._v("领奖时间")]), _vm._v(" "), _c('th', [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2316:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/ge-game-list"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', [_c('div', {
    staticClass: "hd"
  }, [(_vm.editable) ? _c('div', {
    staticClass: "l"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": function($event) {
        return _vm.$router.push('/market/ge-game-create')
      }
    }
  }, [_vm._v("新增砸金蛋活动")])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "r"
  })]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.geGameList), function(l, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(l.gameTitle))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(l.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(l.endDate)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.eggNum))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.GuestTypes[l.limitRole]))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.maxGameCnt ? l.maxGameCnt : 0) + " 次")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.gameRecordCnt ? l.gameRecordCnt : 0) + " 次")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.winCnt ? l.winCnt : 0) + " 个\n\t\t\t\t\t\t\t"), (l.winCnt && l.gameRecordCnt) ? [_vm._v("（" + _vm._s((100 * l.winCnt / l.gameRecordCnt).toFixed(1)) + "%）")] : _vm._e()], 2), _vm._v(" "), _c('td', [(_vm.editable) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.$router.push('/market/ge-game-edit/' + l.gameId)
        }
      }
    }, [_vm._v("详情")])]), _vm._v(" "), (l.gameRecordCnt) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.$router.push('/market/ge-game-stat/' + l.gameId)
        }
      }
    }, [_vm._v("参与记录")])]) : _vm._e(), _vm._v(" "), _c('li', [_c('a', {
      attrs: {
        "title": "查看二维码"
      },
      on: {
        "click": function($event) {
          return _vm.openGeGameLinkDlg(l)
        }
      }
    }, [_vm._v("二维码")])]), _vm._v(" "), (!l.gameRecordCnt) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delGeGame(l.gameId)
        }
      }
    }, [_vm._v("删除")])]) : _vm._e()]) : _vm._e()])])
  })], 2)]), _vm._v(" "), (_vm.geGameList) ? _c('div', {
    staticClass: "tbl-footer center"
  }, [_vm._v("共 " + _vm._s(_vm.geGameList.length) + " 条记录")]) : _vm._e()]), _vm._v(" "), _c('section', {
    staticClass: "note"
  }, [_vm._m(1), _vm._v(" "), _c('ol', [_c('li', [_vm._v("通过发布砸金蛋活动，商家可快速获取潜在客户的联系方式（手机号码、姓名）；")]), _vm._v(" "), _c('li', [_vm._v("访客参与砸金蛋抽奖后，建议到门店内领奖，提高到店访客量；")]), _vm._v(" "), _c('li', [_vm._v("设置好砸金蛋活动后，可将砸金蛋活动页面分享到朋友圈，或者将二维码印到宣传单上；")]), _vm._v(" "), _c('li', [_vm._v("砸金蛋活动列表页面地址（可绑定到微信公众号）"), _c('p', [_vm._v(_vm._s(_vm.geGameListUrl))])])])])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "砸金蛋活动二维码与链接",
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.geGameLinkDlg),
      callback: function($$v) {
        _vm.geGameLinkDlg = $$v
      },
      expression: "geGameLinkDlg"
    }
  }, [(_vm.geGameLinkDlg && _vm.selectGame) ? [_c('table', {
    staticClass: "eventlink"
  }, [_c('tr', [_c('td', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("活动标题：")]), _c('td', [_c('h3', [_vm._v(_vm._s(_vm.selectGame.gameTitle))])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("活动二维码：")]), _vm._v(" "), _c('td', [_c('img', {
    staticClass: "qrcode",
    attrs: {
      "src": _vm.g.Conf.QR_CODE_URL + encodeURIComponent(_vm.selectEventUrl)
    }
  })])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("活动链接：")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "link"
  }, [_vm._v(_vm._s(_vm.selectEventUrl))])])])])] : _vm._e(), _vm._v(" "), _c('div', {
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
        _vm.geGameLinkDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "250"
    }
  }, [_vm._v("活动标题")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "190"
    }
  }, [_vm._v("参与时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("金蛋数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("限制参与人员")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("每人限制参与")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("已参与次数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("中奖数")]), _vm._v(" "), _c('th', [_vm._v("操作")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit-notice"
  }, [_vm._v("活动说明")])])
}]}

/***/ }),

/***/ 2319:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "msite-home-set"
  }, [_c('div', {
    staticClass: "home-conf"
  }, [_c('ul', [_vm._l((_vm.homeContentSetList), function(level1, idx) {
    return _c('li', {
      key: idx,
      staticClass: "home-li",
      class: {
        'children-li-active': _vm.draggingActive == idx
      },
      attrs: {
        "draggable": true
      },
      on: {
        "dragstart": function($event) {
          $event.stopPropagation();
          return _vm.dragstart(idx, null, 1)
        },
        "dragover": function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          return _vm.dragover(1, idx, null)
        },
        "drop": function($event) {
          $event.stopPropagation();
          return _vm.drop(1, idx)
        }
      }
    }, [_c('div', {
      staticClass: "parent"
    }, [_c('i-select', {
      staticClass: "sel",
      attrs: {
        "clearable": ""
      },
      model: {
        value: (level1.val),
        callback: function($$v) {
          _vm.$set(level1, "val", $$v)
        },
        expression: "level1.val"
      }
    }, [_vm._l((_vm.homeContentMap), function(v, key) {
      return [_c('i-option', {
        key: key,
        attrs: {
          "value": +key,
          "label": v.name,
          "disabled": _vm.selectSet.has(+key)
        }
      }, [_c('div', {
        staticClass: "row-sb"
      }, [_c('span', [_vm._v(_vm._s(v.name))]), _vm._v(" "), (_vm.homeContentMap[+key].isChildren) ? _c('span', {
        staticClass: "gray"
      }, [_vm._v("可设置具体展示内容")]) : _vm._e()])])]
    })], 2), _vm._v(" "), _c('i-button', {
      staticClass: "add-btn",
      attrs: {
        "icon": "md-close"
      },
      on: {
        "click": function($event) {
          return _vm.deleteHomeContentSet(idx)
        }
      }
    }, [_vm._v("删除")]), _vm._v(" "), (level1.val && _vm.homeContentMap[level1.val].isChildren) ? _c('i-button', {
      staticClass: "add-btn",
      attrs: {
        "icon": "md-add"
      },
      on: {
        "click": function($event) {
          return _vm.addHomeContentChildrenSet(idx)
        }
      }
    }, [_c('span', [_vm._v("添加展示" + _vm._s(level1.val == 1 ? '卡种' : '商品'))])]) : _vm._e()], 1), _vm._v(" "), (level1.val && _vm.homeContentMap[level1.val].isChildren) ? _c('ul', {
      staticClass: "children"
    }, [_vm._l((level1.children), function(level2, cIdx) {
      return [_c('li', {
        key: cIdx,
        staticClass: "children-li",
        class: {
          'children-li-active': _vm.draggingActive == (idx + "-" + cIdx)
        },
        attrs: {
          "draggable": true
        },
        on: {
          "dragstart": function($event) {
            $event.stopPropagation();
            return _vm.dragstart(idx, cIdx, 2)
          },
          "dragover": function($event) {
            $event.stopPropagation();
            $event.preventDefault();
            return _vm.dragover(2, idx, cIdx)
          },
          "drop": function($event) {
            $event.stopPropagation();
            return _vm.drop(2, idx, cIdx)
          }
        }
      }, [_c('i-select', {
        staticClass: "sel",
        attrs: {
          "clearable": "",
          "placeholder": ("可选择展示" + (level1.val==1?'卡种':'商品'))
        },
        model: {
          value: (level2.val),
          callback: function($$v) {
            _vm.$set(level2, "val", $$v)
          },
          expression: "level2.val"
        }
      }, [(level1.val == 1) ? [_vm._l((_vm.cardList), function(val2) {
        return [_c('i-option', {
          key: val2.cardId,
          attrs: {
            "value": val2.cardId,
            "label": val2.cardName,
            "disabled": _vm.selectCardSet.has(val2.cardId)
          }
        }, [_c('div', {
          staticClass: "row-sb"
        }, [_c('span', [_vm._v(_vm._s(val2.cardName))]), _vm._v(" "), _c('span', {
          staticClass: "gray"
        }, [_vm._v(_vm._s(_vm.g.Dict.CardType[val2.cardType]))])])])]
      })] : _vm._e(), _vm._v(" "), (level1.val == 2) ? [_vm._l((_vm.instalmentProductList), function(val2) {
        return [_c('i-option', {
          key: val2.productId,
          attrs: {
            "value": val2.productId,
            "label": val2.productTitle,
            "disabled": _vm.selectProductSet.has(val2.productId)
          }
        }, [_c('div', {
          staticClass: "row-sb"
        }, [_c('span', [_vm._v(_vm._s(val2.productTitle))]), _vm._v(" "), _c('span', {
          staticClass: "gray"
        }, [_vm._v(_vm._s(val2.allowOtherType ? '1+n模式' : '常规模式'))])])])]
      })] : _vm._e()], 2), _vm._v(" "), _c('i-button', {
        staticClass: "add-btn",
        attrs: {
          "icon": "md-close"
        },
        on: {
          "click": function($event) {
            return _vm.deleteHomeContentChildrenSet(idx, cIdx)
          }
        }
      }, [_vm._v("删除")])], 1)]
    })], 2) : _vm._e()])
  }), _vm._v(" "), _c('li', {
    staticClass: "add"
  }, [_c('div', {
    staticClass: "notice orange"
  }, [(_vm.homeContentSetList && _vm.homeContentSetList.length > 1) ? [_c('i', {
    staticClass: "iconfont icon-alert"
  }), _vm._v(" 鼠标拖动上面分组可调整显示顺序")] : [_c('i', {
    staticClass: "iconfont icon-alert"
  }), _vm._v(" 如不配置，则按照系统默认显示")]], 2), _vm._v(" "), _c('i-button', {
    attrs: {
      "icon": "md-add"
    },
    on: {
      "click": _vm.addHomeContentSet
    }
  }, [_vm._v("添加一组")])], 1)], 2), _vm._v(" "), _c('div', {
    staticClass: "form-submit"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveHomeContentSet
    }
  }, [_vm._v("保存")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.defaultHomeContentSortFunc
    }
  }, [_vm._v("系统默认")])], 1)])])
},staticRenderFns: []}

/***/ }),

/***/ 2321:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/lottery-list"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', [_c('div', {
    staticClass: "hd"
  }, [(_vm.editable) ? _c('div', {
    staticClass: "l"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": function($event) {
        return _vm.$router.push('/market/lottery-create')
      }
    }
  }, [_vm._v("新增抽奖活动")])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "r"
  })]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.lotteryList), function(l, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.title))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(l.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(l.endDate)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.GuestTypes[l.limitRole]))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.limitDrawNum) + " 次")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.drawCnt) + " 次")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.winCnt) + " 个")]), _vm._v(" "), _c('td', [(_vm.editable) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.$router.push('/market/lottery-edit/' + l.lotteryId)
        }
      }
    }, [_vm._v("详情")])]), _vm._v(" "), (l.drawCnt) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.$router.push('/market/lottery-stat/' + l.lotteryId)
        }
      }
    }, [_vm._v("统计")])]) : _vm._e(), _vm._v(" "), (!l.drawCnt) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delLottery(l.lotteryId)
        }
      }
    }, [_vm._v("删除")])]) : _vm._e()]) : _vm._e()])])
  })], 2)]), _vm._v(" "), (_vm.lotteryList) ? _c('div', {
    staticClass: "tbl-footer center"
  }, [_vm._v("共 " + _vm._s(_vm.lotteryList.length) + " 条记录")]) : _vm._e()]), _vm._v(" "), _c('section', {
    staticClass: "note"
  }, [_vm._m(1), _vm._v(" "), _c('ol', [_c('li', [_vm._v("通过发布抽奖活动，商家可快速获得潜在客户的联系方式（手机号码、称呼）；")]), _vm._v(" "), _c('li', [_vm._v("访客抽奖后，需到门店内领奖，提高到店访客量；")]), _vm._v(" "), _c('li', [_vm._v("设置好抽奖活动后，可将抽奖页面分享到朋友圈，或者将二维码印到宣传单上；")]), _vm._v(" "), _c('li', [_vm._v("贵店的抽奖二维码如下"), _c('span', {
    staticClass: "gray"
  }, [_vm._v("（右键点击二维码可下载二维码图片）")]), _vm._v("：\n\t\t\t\t\t"), _c('p', {
    staticClass: "qrcode"
  }, [_c('img', {
    attrs: {
      "src": _vm.qrcodeUrl
    }
  })])]), _vm._v(" "), _c('li', [_vm._v("抽奖页面地址（可绑定到微信公众号）"), _c('p', [_vm._v(_vm._s(_vm.lotteryUrl))])])])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "40"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "190"
    }
  }, [_vm._v("抽奖时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("限制抽奖人员")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("每人限制抽奖")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("已抽奖次数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("中奖数")]), _vm._v(" "), _c('th', [_vm._v("操作")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit-notice"
  }, [_vm._v("幸运抽奖说明")])])
}]}

/***/ }),

/***/ 2328:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/lottery-list"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), _c('section', [_vm._m(0), _vm._v(" "), (_vm.lottery) ? _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_vm._m(1), _vm._v(" "), _c('tr', [_c('td', [_vm._v(_vm._s(_vm.lottery.title))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.guestCnt) + " 人")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.lottery.drawCnt) + " 次")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.lottery.winCnt) + " 次")]), _vm._v(" "), _c('td', [(_vm.lottery.drawCnt && _vm.lottery.winCnt) ? [_vm._v(_vm._s((100 * _vm.lottery.winCnt / _vm.lottery.drawCnt).toFixed(1)) + "%")] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(_vm.lottery.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(_vm.lottery.endDate)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.lottery.limitDrawNum) + "次")])])])]) : _vm._e()]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("抽奖记录")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('ul', {
    staticClass: "query-cond-right"
  }, [_c('li', {
    staticClass: "item"
  }, [_c('input-int', {
    attrs: {
      "placeholder": "抽奖人手机号"
    },
    on: {
      "enter": function($event) {
        return _vm.statLottery()
      }
    },
    model: {
      value: (_vm.query.guestPhone),
      callback: function($$v) {
        _vm.$set(_vm.query, "guestPhone", $$v)
      },
      expression: "query.guestPhone"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.statLottery()
      }
    }
  }, [_vm._v("查询")])], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    on: {
      "click": _vm.resetQuery
    }
  }, [_vm._v("重置")])], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_vm._m(2), _vm._v(" "), _vm._l((_vm.lotteryLogList), function(l, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.GuestTypes[l.guestType]))]), _vm._v(" "), _c('td', [(l.guestType === 1) ? _c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.viewCust(l.guestId, l.custName)
        }
      }
    }, [_vm._v(_vm._s(l.custName))]) : (l.guestType === 2) ? _c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.viewMember(l.guestId)
        }
      }
    }, [_vm._v(_vm._s(l.memberName))]) : _vm._e()]), _vm._v(" "), _c('td', [(l.guestType === 1) ? [_vm._v(_vm._s(l.custPhone))] : (l.guestType === 2) ? [_vm._v(_vm._s(l.memberPhone))] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createTime))]), _vm._v(" "), _c('td', [(l.prizeName) ? [_vm._v(_vm._s(l.prizeName))] : _c('span', {
      staticClass: "gray"
    }, [_vm._v("未中奖")])], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.usedTime))]), _vm._v(" "), _c('td', [(!l.usedTime && l.prizeName) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.receivePrize(l, idx)
        }
      }
    }, [_vm._v("领取")]) : _vm._e()])])
  })], 2)]), _vm._v(" "), (_vm.lotteryLogList && _vm.lotteryLogList.length === 0) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e(), _vm._v(" "), (_vm.lottery && !_vm.query.guestPhone) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.lottery.drawCnt,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.statLottery
    }
  })], 1) : _vm._e()])], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员信息",
      "width": "780",
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
  }, [_c('member-base-info', {
    attrs: {
      "member-id": _vm.memberId
    }
  })], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": '客户信息 - ' + _vm.custName,
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.viewCustDlg),
      callback: function($$v) {
        _vm.viewCustDlg = $$v
      },
      expression: "viewCustDlg"
    }
  }, [(_vm.viewCustDlg && _vm.custId) ? _c('cust-detail', {
    attrs: {
      "cust-id": _vm.custId,
      "can-create": false
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("抽奖统计概要")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("活动名称")]), _vm._v(" "), _c('th', [_vm._v("抽奖人数")]), _vm._v(" "), _c('th', [_vm._v("抽奖次数")]), _vm._v(" "), _c('th', [_vm._v("中奖次数")]), _vm._v(" "), _c('th', [_vm._v("中奖率")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "180"
    }
  }, [_vm._v("抽奖时间")]), _vm._v(" "), _c('th', [_vm._v("每人限制抽奖")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("抽奖人类型")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("抽奖人姓名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("抽奖人手机")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "180"
    }
  }, [_vm._v("抽奖时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "250"
    }
  }, [_vm._v("抽奖结果")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("领奖时间")]), _vm._v(" "), _c('th', [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2333:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market-tools"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('div', [_c('ul', {
    staticClass: "pannel-tools"
  }, [_c('li', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/market/coupon-list')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/coupon.png'
    }
  }), _c('div', {
    staticClass: "t"
  }, [_vm._v("电子优惠券")])]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/market/lottery-list')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/lottery.gif'
    }
  }), _c('div', {
    staticClass: "t"
  }, [_vm._v("幸运抽奖")])]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/market/share-item/home')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/full-share-logo.jpg'
    }
  }), _c('div', {
    staticClass: "t"
  }, [_vm._v("全员分销")])]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/market/groupbuy-product')
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/groupbuy-logo.jpg'
    }
  }), _c('div', {
    staticClass: "t"
  }, [_vm._v("拼团")])])]), _vm._v(" "), _c('p', {
    staticClass: "p15 gray center"
  }, [_vm._v("更多营销工具正在赶来...")])])])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2338:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/ge-game-list"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "myform",
    staticStyle: {
      "width": "100%"
    }
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("基本信息")]), _vm._v(" "), _c('i-form', {
    ref: "geGame",
    staticStyle: {
      "width": "600px"
    },
    attrs: {
      "model": _vm.geGame,
      "rules": _vm.formRule,
      "label-width": 100
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "gameTitle",
      "label": "活动标题"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.geGame.gameTitle),
      callback: function($$v) {
        _vm.$set(_vm.geGame, "gameTitle", $$v)
      },
      expression: "geGame.gameTitle"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "limitRole",
      "label": "参与人员"
    }
  }, [_c('radio-group', {
    model: {
      value: (_vm.geGame.limitRole),
      callback: function($$v) {
        _vm.$set(_vm.geGame, "limitRole", $$v)
      },
      expression: "geGame.limitRole"
    }
  }, [_c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("访客")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("会员")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 3
    }
  }, [_vm._v("不限")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "maxGameCnt",
      "label": "每人限制参与"
    }
  }, [_c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.geGame.maxGameCnt),
      callback: function($$v) {
        _vm.$set(_vm.geGame, "maxGameCnt", _vm._n($$v))
      },
      expression: "geGame.maxGameCnt"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("次")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "活动有效期",
      "required": ""
    }
  }, [_c('date-picker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "开始日期"
    },
    model: {
      value: (_vm.geGame.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.geGame, "beginDate", $$v)
      },
      expression: "geGame.beginDate"
    }
  }), _vm._v("\n\t\t\t\t\t~\n\t\t\t\t\t"), _c('date-picker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "结束日期"
    },
    model: {
      value: (_vm.geGame.endDate),
      callback: function($$v) {
        _vm.$set(_vm.geGame, "endDate", $$v)
      },
      expression: "geGame.endDate"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "eggNum",
      "label": "金蛋个数"
    }
  }, [_c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.geGame.eggNum),
      callback: function($$v) {
        _vm.$set(_vm.geGame, "eggNum", _vm._n($$v))
      },
      expression: "geGame.eggNum"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（微官网上显示的金蛋个数，"), _c('span', {
    staticClass: "orange"
  }, [_vm._v("不能大于 9")]), _vm._v("）")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "remark",
      "label": "活动说明"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 15
    },
    model: {
      value: (_vm.geGame.gameDesc),
      callback: function($$v) {
        _vm.$set(_vm.geGame, "gameDesc", $$v)
      },
      expression: "geGame.gameDesc"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "tit mt20"
  }, [_vm._v("分享设置")]), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "shareTitle",
      "label": "分享标题"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": "分享时显示的标题，如果为空，则显示活动标题"
    },
    model: {
      value: (_vm.geGame.shareTitle),
      callback: function($$v) {
        _vm.$set(_vm.geGame, "shareTitle", $$v)
      },
      expression: "geGame.shareTitle"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "sharePic",
      "label": "分享图片"
    }
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccessForShare,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultListForShare
    }
  }, [_c('i-button', {
    attrs: {
      "size": "small",
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传图片")]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（如果不设置，则默认为门店图片）")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "shareDesc",
      "label": "分享简介"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 2,
      "placeholder": "分享时显示的内容简介，如果为空，则显示活动标题"
    },
    model: {
      value: (_vm.geGame.shareDesc),
      callback: function($$v) {
        _vm.$set(_vm.geGame, "shareDesc", $$v)
      },
      expression: "geGame.shareDesc"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "tit"
  }, [_vm._v("奖品设置\n\t\t\t\t"), _c('span', {
    staticClass: "orange"
  }, [_vm._v("（最多可设置 " + _vm._s(_vm.geGame.eggNum) + " 种奖品，空白处表示无奖品）")])]), _vm._v(" "), _c('table', {
    staticClass: "prizes",
    attrs: {
      "border": "0"
    }
  }, [_c('tr', [_c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "400"
    }
  }, [_vm._v("奖品名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("奖品总数")]), _vm._v(" "), (_vm.gameId) ? _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("已中奖数")]) : _vm._e(), _vm._v(" "), _c('th')]), _vm._v(" "), _vm._l((_vm.prizeList), function(p, idx) {
    return _c('tr', [_c('th', [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', [_c('i-input', {
      attrs: {
        "type": "text"
      },
      model: {
        value: (p.prizeName),
        callback: function($$v) {
          _vm.$set(p, "prizeName", $$v)
        },
        expression: "p.prizeName"
      }
    })], 1), _vm._v(" "), _c('td', [_c('input-int', {
      staticClass: "input-s",
      attrs: {
        "title": ""
      },
      model: {
        value: (p.prizeCnt),
        callback: function($$v) {
          _vm.$set(p, "prizeCnt", _vm._n($$v))
        },
        expression: "p.prizeCnt"
      }
    })], 1), _vm._v(" "), (_vm.gameId) ? _c('td', {
      attrs: {
        "align": "center"
      }
    }, [(p.prizeName && p.winCnt) ? _c('span', {
      staticClass: "win-cnt"
    }, [_vm._v(_vm._s(p.winCnt))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('td', [(!p.winCnt && p.prizeName) ? _c('a', {
      staticClass: "close",
      attrs: {
        "title": "清空此奖品信息"
      },
      on: {
        "click": function($event) {
          return _vm.clearPrize(idx)
        }
      }
    }, [_c('Icon', {
      attrs: {
        "type": "md-close"
      }
    })], 1) : _vm._e()])])
  })], 2), _vm._v(" "), (_vm.marketEditable) ? _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "100px"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.saveGeGame()
      }
    }
  }, [_vm._v("提交")]), _vm._v("\n\t\t\t\t \n\t\t\t\t"), (_vm.gameId && _vm.geGame && !_vm.geGame.gameRecordCnt) ? _c('i-button', {
    on: {
      "click": function($event) {
        return _vm.delGeGame()
      }
    }
  }, [_vm._v("删除")]) : _vm._e()], 1) : _vm._e()], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2348:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "groupbuy-help"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), _c('section', [_vm._v("\n\t\t\thelp\n\t\t")])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2365:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/event-list"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', [(_vm.editable) ? _c('div', {
    staticClass: "tbl-header"
  }, [_c('div', [_c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": function($event) {
        return _vm.$router.push('/market/event-create')
      }
    }
  }, [_vm._v("新增活动")])], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.eventList), function(e, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(e.eventTitle))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(e.beginDate))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(e.endDate))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(e.maxEnrollCnt))]), _vm._v(" "), _c('td', {
      staticClass: "orange"
    }, [_vm._v(_vm._s(e.curEnrollCnt) + "\n\t\t\t\t\t\t\t"), (e.curEnrollCnt) ? _c('a', {
      staticClass: "l10",
      on: {
        "click": function($event) {
          return _vm.openEventEnrollDlg(e)
        }
      }
    }, [_vm._v("[查看]")]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(e.maxEnrollCnt - (e.curEnrollCnt ? e.curEnrollCnt : 0)))]), _vm._v(" "), _c('td', [(e.eventPrice) ? [_vm._v("￥" + _vm._s(e.eventPrice))] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(e.createTime))]), _vm._v(" "), _c('td', [(_vm.editable) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.$router.push('/market/event-edit/' + e.eventId)
        }
      }
    }, [_vm._v("详情")])]), _vm._v(" "), (e.curEnrollCnt) ? _c('li', {
      on: {
        "click": function($event) {
          return _vm.openEventSubjectStatDlg(e)
        }
      }
    }, [_c('a', [_vm._v("统计")])]) : _vm._e(), _vm._v(" "), _c('li', [_c('a', {
      attrs: {
        "title": "查看二维码"
      },
      on: {
        "click": function($event) {
          return _vm.openEventLinkDlg(e)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont icon-qrcode big"
    })])]), _vm._v(" "), _c('li', [_c('a', {
      attrs: {
        "title": "删除活动"
      },
      on: {
        "click": function($event) {
          return _vm.deleteEvent(e.eventId)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont icon-delete big"
    })])])]) : _vm._e()])])
  })], 2)]), _vm._v(" "), (_vm.eventCount) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.eventCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryEventList
    }
  })], 1) : _vm._e()])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "活动参与记录",
      "width": "1080",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.eventEnrollDlg),
      callback: function($$v) {
        _vm.eventEnrollDlg = $$v
      },
      expression: "eventEnrollDlg"
    }
  }, [(_vm.selectEvent) ? _c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', {
    attrs: {
      "width": "400",
      "valign": "top"
    }
  }, [_c('i-select', {
    staticStyle: {
      "width": "150px"
    },
    on: {
      "on-change": function($event) {
        return _vm.queryEventEnroll(null)
      }
    },
    model: {
      value: (_vm.eventEnrollStatus),
      callback: function($$v) {
        _vm.eventEnrollStatus = $$v
      },
      expression: "eventEnrollStatus"
    }
  }, [_c('i-option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("状态：已提交")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 0
    }
  }, [_vm._v("状态：草稿")])], 1), _vm._v(" "), _c('span', {
    staticClass: "l10"
  }, [_c('i-button', {
    attrs: {
      "icon": "ios-cloud-download-outline"
    },
    on: {
      "click": _vm.exportToXls
    }
  }, [_vm._v("导出")])], 1), _vm._v(" "), _c('div', {
    staticClass: "mytbl p15"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("参与人姓名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("性别")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("手机号")]), _vm._v(" "), _c('th', [_vm._v("参与时间")]), _vm._v(" "), (_vm.selectEvent.eventPrice) ? _c('th', [_vm._v("支付金额")]) : _vm._e()]), _vm._v(" "), _vm._l((_vm.eventEnrollList), function(es, idx) {
    return _c('tr', {
      class: {
        'on': es.enrollId === _vm.selectEnrollId
      },
      on: {
        "click": function($event) {
          return _vm.selectEnroll(idx)
        }
      }
    }, [_c('td', [_vm._v(_vm._s(es.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.Sex[es.sex]))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(es.phoneNo))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(es.createTime))]), _vm._v(" "), (_vm.selectEvent.eventPrice) ? _c('td', [(es.orderAmount) ? [_vm._v("￥" + _vm._s(es.orderAmount))] : _vm._e()], 2) : _vm._e()])
  })], 2), _vm._v(" "), (_vm.eventEnrollCount > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.eventEnrollCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryEventEnroll
    }
  })], 1) : _vm._e()])], 1), _vm._v(" "), _c('td', {
    attrs: {
      "valign": "top"
    }
  }, [_c('div', {
    staticClass: "subject-answers"
  }, [(_vm.selectEnrollId && _vm.eventEnrollList[_vm.selectEnrollIdx].remark) ? _c('div', {
    staticClass: "remark"
  }, [_c('b', [_vm._v("备注：")]), _vm._v(" " + _vm._s(_vm.eventEnrollList[_vm.selectEnrollIdx].remark) + "\n\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), (_vm.selectEnrollId) ? _c('ul', _vm._l((_vm.eventSubjectList), function(s, idx) {
    return _c('li', [_c('div', {
      staticClass: "tit"
    }, [_c('span', {
      staticClass: "no"
    }, [_vm._v(_vm._s(idx + 1) + ".")]), _vm._v(_vm._s(s.subjectTitle))]), _vm._v(" "), (s.subjectType === 0) ? _vm._l((s.optionList), function(val, valIdx) {
      return _c('div', [(_vm.eventSubjectAnswerMap[s.subjectId] === valIdx) ? _c('i', {
        staticClass: "iconfont icon-radio-check"
      }) : _c('i', {
        staticClass: "iconfont icon-radio-uncheck"
      }), _vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(val) + "\n\t\t\t\t\t\t\t\t\t")])
    }) : (s.subjectType === 1) ? _vm._l((s.optionList), function(val, valIdx) {
      return _c('div', [(_vm.eventSubjectAnswerMap[s.subjectId] && _vm.eventSubjectAnswerMap[s.subjectId].contains(valIdx)) ? _c('i', {
        staticClass: "iconfont icon-checkbox-checked"
      }) : _c('i', {
        staticClass: "iconfont icon-checkbox-empty"
      }), _vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(val) + "\n\t\t\t\t\t\t\t\t\t")])
    }) : [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.eventSubjectAnswerMap[s.subjectId]) + "\n\t\t\t\t\t\t\t\t")]], 2)
  }), 0) : _c('div', {
    staticClass: "mt20 gray center"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor"
  }), _vm._v(" 点击左侧某一行查看报名详细")])])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "活动二维码与链接",
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.eventLinkDlg),
      callback: function($$v) {
        _vm.eventLinkDlg = $$v
      },
      expression: "eventLinkDlg"
    }
  }, [(_vm.eventLinkDlg && _vm.selectEvent) ? [_c('table', {
    staticClass: "eventlink"
  }, [_c('tr', [_c('td', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("活动标题：")]), _c('td', [_c('h3', [_vm._v(_vm._s(_vm.selectEvent.eventTitle))])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("活动二维码：")]), _vm._v(" "), _c('td', [_c('img', {
    staticClass: "qrcode",
    attrs: {
      "src": _vm.g.Conf.QR_CODE_URL + encodeURIComponent(_vm.selectEventUrl)
    }
  })])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("活动链接：")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "link"
  }, [_vm._v(_vm._s(_vm.selectEventUrl))])])])])] : _vm._e(), _vm._v(" "), _c('div', {
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
        _vm.eventLinkDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 2), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "活动报名统计",
      "width": "700",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.eventSubjectStatDlg),
      callback: function($$v) {
        _vm.eventSubjectStatDlg = $$v
      },
      expression: "eventSubjectStatDlg"
    }
  }, [_c('ul', {
    staticClass: "event-stat"
  }, _vm._l((_vm.eventSubjectList), function(s, idx) {
    return (s.subjectType < 2) ? _c('li', [_c('div', {
      staticClass: "tit"
    }, [_c('span', {
      staticClass: "no"
    }, [_vm._v(_vm._s(idx + 1) + ".")]), _vm._v(_vm._s(s.subjectTitle))]), _vm._v(" "), _vm._l((s.optionList), function(val, valIdx) {
      return _c('div', {
        staticClass: "options"
      }, [_c('div', {
        staticClass: "option"
      }, [_vm._v(_vm._s(val))]), _vm._v(" "), (_vm.stat = _vm.eventSubjectStat[s.subjectId + '/' + valIdx]) ? _c('div', {
        staticClass: "rate"
      }, [_c('div', {
        staticClass: "l"
      }, [_c('span', {
        staticClass: "checked",
        style: ('width:' + (500 * _vm.stat.checkedRate) + 'px')
      }, [_vm._v(" ")])]), _vm._v(" "), _c('div', {
        staticClass: "r"
      }, [_c('a', {
        on: {
          "click": function($event) {
            return _vm.openEventEnrollQueryByOptionDlg(s.subjectId, valIdx)
          }
        }
      }, [_vm._v(_vm._s(_vm.stat.checkedCnt) + " 人选择（" + _vm._s((_vm.stat.checkedRate * 100).toFixed(1)) + "%）")])])]) : _vm._e()])
    })], 2) : _vm._e()
  }), 0), _vm._v(" "), _c('div', {
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
        _vm.eventSubjectStatDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "本选项选择人",
      "width": "480",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.eventSubjectEnrollDlg),
      callback: function($$v) {
        _vm.eventSubjectEnrollDlg = $$v
      },
      expression: "eventSubjectEnrollDlg"
    }
  }, [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("参与人姓名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("性别")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("手机号")]), _vm._v(" "), _c('th', [_vm._v("参与时间")])]), _vm._v(" "), _vm._l((_vm.eventEnrollList), function(es, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(es.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.Sex[es.sex]))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(es.phoneNo))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(es.createTime))])])
  })], 2), _vm._v(" "), (_vm.eventEnrollCount > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.eventEnrollCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryEventEnrollByOption
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
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
        _vm.eventSubjectEnrollDlg = false
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
  }, [_vm._v("下载导出文件（xls）")]) : _vm._e()] : _c('span', [_vm._v("正在查询并导出，请稍候...")])], 2)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("活动标题")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("开始时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("结束时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "95"
    }
  }, [_vm._v("最多参与人数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "95"
    }
  }, [_vm._v("已参与人数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("剩余人数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("活动收费")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("创建时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "160"
    }
  }, [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2388:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fit-entry-ticket-edit"
  }, [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/fit-entry-ticket"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', {
    staticStyle: {
      "width": "100%"
    }
  }, [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("散客入场券详情")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('a', {
    staticClass: "gray",
    on: {
      "click": function($event) {
        return _vm.$router.push('/market/fit-entry-ticket')
      }
    }
  }, [_vm._v("返回 →")])])]), _vm._v(" "), _c('i-form', {
    ref: "product",
    staticClass: "myform",
    staticStyle: {
      "width": "900px"
    },
    attrs: {
      "model": _vm.product,
      "rules": _vm.formRule,
      "label-width": 100
    }
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("基本信息")]), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "productTitle",
      "label": "商品名称"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.product.productTitle),
      callback: function($$v) {
        _vm.$set(_vm.product, "productTitle", $$v)
      },
      expression: "product.productTitle"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "商品图片",
      "required": ""
    }
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccessForProduct,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultLisForProduct
    }
  }, [_c('i-button', {
    attrs: {
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传散客入场券主图")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "consumerType",
      "label": "参与人类型",
      "required": ""
    }
  }, [_c('radio-group', {
    model: {
      value: (_vm.product.consumerType),
      callback: function($$v) {
        _vm.$set(_vm.product, "consumerType", _vm._n($$v))
      },
      expression: "product.consumerType"
    }
  }, [_c('radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("不限")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("访客")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("会员")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "购买期限",
      "required": ""
    }
  }, [_c('date-picker', {
    staticClass: "input-date",
    attrs: {
      "type": "datetime",
      "placeholder": "开始时间"
    },
    model: {
      value: (_vm.product.beginTime),
      callback: function($$v) {
        _vm.$set(_vm.product, "beginTime", $$v)
      },
      expression: "product.beginTime"
    }
  }), _vm._v("\n          ~\n          "), _c('date-picker', {
    staticClass: "input-date",
    attrs: {
      "type": "datetime",
      "placeholder": "结束时间"
    },
    model: {
      value: (_vm.product.endTime),
      callback: function($$v) {
        _vm.$set(_vm.product, "endTime", $$v)
      },
      expression: "product.endTime"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor bigger orange"
  }), _vm._v(" 客户只能在此时间内购买")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "price",
      "label": "商品售价"
    }
  }, [_c('input-num', {
    staticClass: "input-s",
    model: {
      value: (_vm.product.price),
      callback: function($$v) {
        _vm.$set(_vm.product, "price", $$v)
      },
      expression: "product.price"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")]), _vm._v(" "), _c('span', {
    staticClass: "tips l10"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor bigger orange"
  }), _vm._v(" 客户实际购买的价格")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "usableDays",
      "label": "商品有效期"
    }
  }, [_c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.product.usableDays),
      callback: function($$v) {
        _vm.$set(_vm.product, "usableDays", $$v)
      },
      expression: "product.usableDays"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("天")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "maxBuyCnt",
      "label": "最多购买次数"
    }
  }, [_c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.product.maxBuyCnt),
      callback: function($$v) {
        _vm.$set(_vm.product, "maxBuyCnt", $$v)
      },
      expression: "product.maxBuyCnt"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("次")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "productDesc",
      "label": "商品描述"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 10
    },
    model: {
      value: (_vm.product.productDesc),
      callback: function($$v) {
        _vm.$set(_vm.product, "productDesc", $$v)
      },
      expression: "product.productDesc"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "tit mt20"
  }, [_vm._v("分享设置\n          "), _c('span', {
    staticClass: "orange"
  }, [_vm._v("（参与人员通过微信分享时的页面显示内容）")])]), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "shareTitle",
      "label": "分享标题"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": "分享时显示的标题，如果为空，则显示商品标题"
    },
    model: {
      value: (_vm.product.shareTitle),
      callback: function($$v) {
        _vm.$set(_vm.product, "shareTitle", $$v)
      },
      expression: "product.shareTitle"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "sharePic",
      "label": "分享图片"
    }
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccessForShare,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultListForShare
    }
  }, [_c('i-button', {
    attrs: {
      "size": "small",
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传图片")]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（如果不设置，则默认为商品图片）")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "shareDesc",
      "label": "分享简介"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 2,
      "placeholder": "分享时显示的内容简介，如果为空，则显示商品标题"
    },
    model: {
      value: (_vm.product.shareDesc),
      callback: function($$v) {
        _vm.$set(_vm.product, "shareDesc", $$v)
      },
      expression: "product.shareDesc"
    }
  })], 1)], 1), _vm._v(" "), (_vm.marketEditable) ? _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "100px"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.saveTicketlProduct()
      }
    }
  }, [_vm._v("提交")]), _vm._v("\n         \n        "), (_vm.productId && !_vm.product.orderCnt) ? _c('i-button', {
    on: {
      "click": function($event) {
        return _vm.delTicketlProduct()
      }
    }
  }, [_vm._v("删除")]) : _vm._e()], 1) : _vm._e()], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2389:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/groupbuy-product"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), _c('section', [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', [_c('div', {
    staticClass: "query-section"
  }, [_c('div', {
    staticClass: "date-query"
  }, [_c('DatePicker', {
    staticClass: "date",
    attrs: {
      "type": "date",
      "placeholder": "开始日期"
    },
    model: {
      value: (_vm.query.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.query, "beginDate", $$v)
      },
      expression: "query.beginDate"
    }
  }), _vm._v("\n\t\t\t\t\t\t\t\t\t~\n                  "), _c('DatePicker', {
    staticClass: "date",
    attrs: {
      "type": "date",
      "placeholder": "结束日期"
    },
    model: {
      value: (_vm.query.endDate),
      callback: function($$v) {
        _vm.$set(_vm.query, "endDate", $$v)
      },
      expression: "query.endDate"
    }
  }), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "ios-search",
      "iconClass": "biggest"
    },
    on: {
      "click": function($event) {
        return _vm.queryGroupbuyOrderList(null)
      }
    }
  }, [_vm._v("查询")])], 1), _vm._v(" "), _c('i-input', {
    staticClass: "phone-query",
    attrs: {
      "type": "text",
      "icon": "ios-search",
      "placeholder": "请输入拼团人手机号"
    },
    on: {
      "on-enter": _vm.queryGroupOrderByPhone,
      "on-click": _vm.queryGroupOrderByPhone
    },
    model: {
      value: (_vm.query.phoneNo),
      callback: function($$v) {
        _vm.$set(_vm.query, "phoneNo", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "query.phoneNo"
    }
  })], 1)]), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right"
    }
  }, [(_vm.totalCount) ? _c('div', {
    staticStyle: {
      "padding-bottom": "15px"
    }
  }, [_c('b', {
    staticClass: "bigger green"
  }, [_vm._v(_vm._s(_vm.totalCount))]), _vm._v(" 条记录")]) : _vm._e()])])]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.orderList), function(o) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(o.productTitle))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(o.cardName))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(o.originalPrice))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(o.price))]), _vm._v(" "), _c('td', {
      staticClass: "green"
    }, [_vm._v("￥" + _vm._s(o.imprest))]), _vm._v(" "), _c('td', [(!o.refundStatus) ? _c('span', {
      class: {
        'orange': o.status === 0,
        'green': o.status === 9
      }
    }, [_vm._v(_vm._s(_vm.g.Dict.OrderStatus[o.status]))]) : (o.refundStatus === 1) ? _c('span', {
      staticClass: "orangered"
    }, [_vm._v("已退款")]) : _c('div', [_c('span', {
      staticClass: "red"
    }, [_vm._v("退款失败：")]), _c('br'), _vm._v(_vm._s(_vm.g.Dict.OrderRefundStatus[o.refundStatus]))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(o.custName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(o.custPhone))]), _vm._v(" "), _c('td', {
      staticClass: "orange"
    }, [_vm._v("￥" + _vm._s(o.amount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDateTime(o.createTime)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(o.transTime))])])
  })], 2), _vm._v(" "), (_vm.totalCount && _vm.totalCount > 0) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.totalCount,
      "page-size": _vm.g.Conf.PAGE_SIZE,
      "current": _vm.query.page ? _vm.query.page : 1,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryGroupbuyOrderList
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.orderList && _vm.orderList.length === 0) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("暂无数据")]) : _vm._e()])])], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "220"
    }
  }, [_vm._v("商品名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "180"
    }
  }, [_vm._v("会员卡")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("原价")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("拼团价")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("预付款")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "95"
    }
  }, [_vm._v("订单状态")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("拼团人姓名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("拼团人手机")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("支付金额")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("订单时间 ↓")]), _vm._v(" "), _c('th', [_vm._v("支付时间")])])
}]}

/***/ }),

/***/ 2400:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/event-list"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('Tabs', {
    attrs: {
      "animated": false
    }
  }, [_c('TabPane', {
    attrs: {
      "label": "活动详情"
    }
  }, [_c('section', {
    staticStyle: {
      "width": "100%"
    }
  }, [_c('i-form', {
    ref: "event",
    staticClass: "myform",
    staticStyle: {
      "width": "750px"
    },
    attrs: {
      "model": _vm.event,
      "rules": _vm.formRule,
      "label-width": 100
    }
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("基本信息")]), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "eventTitle",
      "label": "活动标题"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.event.eventTitle),
      callback: function($$v) {
        _vm.$set(_vm.event, "eventTitle", $$v)
      },
      expression: "event.eventTitle"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "活动图片",
      "required": ""
    }
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccessForEvent,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultLisForEvent
    }
  }, [_c('i-button', {
    staticClass: "input-s",
    attrs: {
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传活动主图")])], 1), _vm._v(" "), _c('p'), _vm._v(" "), _c('img-upload', {
    attrs: {
      "multiple": true,
      "removeable": true,
      "max-count": 10,
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleMorePisUploadSuccess,
      "on-remove": _vm.handleImgRemove,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultMorePics
    }
  }, [_c('i-button', {
    staticClass: "input-s",
    attrs: {
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传更多活动图片")]), _vm._v("\n\t\t\t\t\t\t\t\t  "), _c('span', {
    staticClass: "gray"
  }, [_vm._v("（可选，最多可上传 "), _c('b', [_vm._v("10")]), _vm._v(" 张）")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "beginDate",
      "label": "开始时间"
    }
  }, [_c('date-picker', {
    staticClass: "input-s",
    attrs: {
      "type": "datetime",
      "placeholder": ""
    },
    model: {
      value: (_vm.event.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.event, "beginDate", $$v)
      },
      expression: "event.beginDate"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "endDate",
      "label": "结束时间"
    }
  }, [_c('date-picker', {
    staticClass: "input-s",
    attrs: {
      "type": "datetime",
      "placeholder": ""
    },
    model: {
      value: (_vm.event.endDate),
      callback: function($$v) {
        _vm.$set(_vm.event, "endDate", $$v)
      },
      expression: "event.endDate"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "maxEnrollCnt",
      "label": "最多参与人数",
      "required": ""
    }
  }, [_c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.event.maxEnrollCnt),
      callback: function($$v) {
        _vm.$set(_vm.event, "maxEnrollCnt", $$v)
      },
      expression: "event.maxEnrollCnt"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("人")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "eventPrice",
      "label": "活动参与费用"
    }
  }, [(_vm.hasMchId) ? [_c('input-num', {
    staticClass: "input-s",
    model: {
      value: (_vm.event.eventPrice),
      callback: function($$v) {
        _vm.$set(_vm.event, "eventPrice", $$v)
      },
      expression: "event.eventPrice"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor big orange l10"
  }), _vm._v("\n\t\t\t\t\t\t\t\t\t如果设置了此费用，访客参与此活动时，需要微信在线支付\n\t\t\t\t\t\t\t\t")])] : [_c('span', {
    staticClass: "orangered"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor big"
  }), _vm._v("\n\t\t\t\t\t\t\t\t\t贵店尚未开通微信在线支付，无法设置活动参与费用\n\t\t\t\t\t\t\t\t\t（"), _c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/online-pay-apply')
      }
    }
  }, [_vm._v("去申请在线支付 →")]), _vm._v("）\n\t\t\t\t\t\t\t\t")])]], 2), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "eventVideoUrl",
      "label": "腾讯视频编号"
    }
  }, [_c('i-input', {
    staticClass: "input-s",
    attrs: {
      "disabled": true
    },
    model: {
      value: (_vm.event.eventVideoUrl),
      callback: function($$v) {
        _vm.$set(_vm.event, "eventVideoUrl", $$v)
      },
      expression: "event.eventVideoUrl"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "l10"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.getVideoIdDlg = true
      }
    }
  }, [_vm._v("设置视频编号")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "eventDesc",
      "label": "活动说明"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 15
    },
    model: {
      value: (_vm.event.eventDesc),
      callback: function($$v) {
        _vm.$set(_vm.event, "eventDesc", $$v)
      },
      expression: "event.eventDesc"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "tit mt20"
  }, [_vm._v("分享设置\n\t\t\t\t\t\t\t"), _c('span', {
    staticClass: "orange"
  }, [_vm._v("（参与人员通过微信分享时的页面显示内容）")])]), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "shareTitle",
      "label": "分享标题"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": "分享时显示的标题，如果为空，则显示活动标题"
    },
    model: {
      value: (_vm.event.shareTitle),
      callback: function($$v) {
        _vm.$set(_vm.event, "shareTitle", $$v)
      },
      expression: "event.shareTitle"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "sharePic",
      "label": "分享图片"
    }
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccessForShare,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultListForShare
    }
  }, [_c('i-button', {
    attrs: {
      "size": "small",
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传图片")]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（如果不设置，则默认为商品图片）")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "shareDesc",
      "label": "分享简介"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 2,
      "placeholder": "分享时显示的内容简介，如果为空，则显示活动标题"
    },
    model: {
      value: (_vm.event.shareDesc),
      callback: function($$v) {
        _vm.$set(_vm.event, "shareDesc", $$v)
      },
      expression: "event.shareDesc"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "tit mt20"
  }, [_vm._v("短信通知\n\t\t\t\t\t\t\t"), _c('span', {
    staticClass: "orange"
  }, [_vm._v("（参与人员成功参与活动后，系统自动发送消息给指定工作人员）")])]), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "noticeStaffIdArr",
      "label": "通知人员"
    }
  }, [_c('i-select', {
    attrs: {
      "placeholder": "请选择通知人（可多选）",
      "multiple": true
    },
    model: {
      value: (_vm.noticeStaffIdArr),
      callback: function($$v) {
        _vm.noticeStaffIdArr = $$v
      },
      expression: "noticeStaffIdArr"
    }
  }, _vm._l((_vm.staffList), function(s) {
    return _c('i-option', {
      key: s.staffId,
      attrs: {
        "value": s.staffId
      }
    }, [_vm._v(_vm._s(s.name))])
  }), 1)], 1)], 1), _vm._v(" "), (_vm.marketEditable) ? _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "100px"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.saveEvent()
      }
    }
  }, [_vm._v("提交")]), _vm._v("\n\t\t\t\t\t\t \n\t\t\t\t\t\t"), (_vm.eventId && !_vm.event.curEnrollCnt) ? _c('i-button', {
    on: {
      "click": function($event) {
        return _vm.delEvent()
      }
    }
  }, [_vm._v("删除")]) : _vm._e()], 1) : _vm._e()], 1)]), _vm._v(" "), _c('TabPane', {
    attrs: {
      "label": "活动报名表单"
    }
  }, [(_vm.eventId) ? _c('section', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("序号")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "250px"
    }
  }, [_vm._v("标题")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "85"
    }
  }, [_vm._v("题型")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("选项")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("操作")])]), _vm._v(" "), _vm._l((_vm.eventSubjectList), function(es, idx) {
    return _c('tr', [_c('td', [_c('input-int', {
      staticClass: "center",
      staticStyle: {
        "width": "50px"
      },
      model: {
        value: (es.orderNo),
        callback: function($$v) {
          _vm.$set(es, "orderNo", $$v)
        },
        expression: "es.orderNo"
      }
    })], 1), _vm._v(" "), _c('td', [_c('i-input', {
      attrs: {
        "type": "textarea",
        "rows": 1
      },
      model: {
        value: (es.subjectTitle),
        callback: function($$v) {
          _vm.$set(es, "subjectTitle", $$v)
        },
        expression: "es.subjectTitle"
      }
    })], 1), _vm._v(" "), _c('td', [_c('i-select', {
      model: {
        value: (es.subjectType),
        callback: function($$v) {
          _vm.$set(es, "subjectType", $$v)
        },
        expression: "es.subjectType"
      }
    }, [_c('i-option', {
      attrs: {
        "value": 0
      }
    }, [_vm._v("单选")]), _vm._v(" "), _c('i-option', {
      attrs: {
        "value": 1
      }
    }, [_vm._v("多选")]), _vm._v(" "), _c('i-option', {
      attrs: {
        "value": 2
      }
    }, [_vm._v("问答")])], 1)], 1), _vm._v(" "), _c('td', [(es.subjectType === 0 || es.subjectType === 1) ? _c('i-input', {
      attrs: {
        "type": "textarea",
        "placeholder": "每行写一个选项",
        "rows": 4
      },
      model: {
        value: (es.options),
        callback: function($$v) {
          _vm.$set(es, "options", $$v)
        },
        expression: "es.options"
      }
    }) : _vm._e()], 1), _vm._v(" "), _c('td', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delEventSubject(idx)
        }
      }
    }, [_vm._v("删除")])])])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "mt20 center"
  }, [_c('i-button', {
    attrs: {
      "icon": "md-add"
    },
    on: {
      "click": _vm.addEventSubject
    }
  }, [_vm._v("添加")]), _vm._v("\n\t\t\t\t\t\t \n\t\t\t\t\t\t"), (_vm.eventSubjectList.length) ? _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveEventSubjectList
    }
  }, [_vm._v("提交")]) : _vm._e()], 1)]) : _c('section', [_c('div', {
    staticClass: "no-data"
  }, [_c('span', {
    staticClass: "orangered"
  }, [_vm._v("请先提交活动详情")])])])])], 1)], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "腾讯视频设置帮助",
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.getVideoIdDlg),
      callback: function($$v) {
        _vm.getVideoIdDlg = $$v
      },
      expression: "getVideoIdDlg"
    }
  }, [_c('ol', {
    staticClass: "video-help"
  }, [_c('li', [_vm._v("将您拍摄的视频上传到【"), _c('a', {
    attrs: {
      "href": "https://v.qq.com",
      "target": "_blank"
    }
  }, [_vm._v("腾讯视频")]), _vm._v("】（推荐使用腾讯视频App上传视频）")]), _vm._v(" "), _c('li', [_vm._v("待视频审核通过后，进入该视频页面（"), _c('b', [_vm._v("电脑版网页")]), _vm._v("），通过如下方式获取视频地址：\n\t\t\t\t "), _c('div', {
    staticClass: "img"
  }, [_c('img', {
    attrs: {
      "src": _vm.g.Conf.IMG_LIB_URL + '/jzg-pc/txvideo-demo.png'
    }
  })])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "orangered"
  }, [_vm._v("将上述“页面地址”粘贴到如下↓ 输入框中后点击确定")]), _vm._v(" "), _c('p'), _vm._v(" "), _c('i-input', {
    staticStyle: {
      "width": "400px"
    },
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.txVideoUrl),
      callback: function($$v) {
        _vm.txVideoUrl = $$v
      },
      expression: "txVideoUrl"
    }
  }), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.parseTxVideoUrl
    }
  }, [_vm._v("确定")])], 1), _vm._v(" "), _c('li', [_vm._v("\n\t\t\t\t设置此视频编号后，手机端（微官网）活动详情中将播放该（腾讯）视频\n\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "center form-submit",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.getVideoIdDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2414:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/bargain-product-list"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('Tabs', {
    attrs: {
      "animated": false
    }
  }, [_c('TabPane', {
    attrs: {
      "label": "砍价商品"
    }
  }, [_c('section', [(_vm.editable) ? _c('div', {
    staticClass: "tbl-header"
  }, [_c('div', [(_vm.hasMchId) ? _c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": function($event) {
        return _vm.$router.push('/market/bargain-product-create')
      }
    }
  }, [_vm._v("新增砍价商品")]) : (_vm.hasMchId === false) ? _c('span', {
    staticClass: "orangered"
  }, [_c('i', {
    staticClass: "iconfont icon-alert1 biggest"
  }), _vm._v("\n\t\t\t\t\t\t\t\t贵店尚未开通在线支付，尚无法使用砍价 （"), _c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/online-pay-apply')
      }
    }
  }, [_vm._v("去申请在线支付 →")]), _vm._v("）\n\t\t\t\t\t\t\t\t")]) : _vm._e()], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_c('tr', [_c('th', [_vm._v("商品名称")]), _vm._v(" "), _c('th', [_vm._v("会员卡")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("原价")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("最低价")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("砍价人数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "180"
    }
  }, [_vm._v("有效期")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("发起数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("已购买数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("总库存")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "55"
    }
  }, [_vm._v("剩余")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("创建时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("操作")])]), _vm._v(" "), _vm._l((_vm.productList), function(p, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(p.productTitle))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.cardName))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(p.rawPrice))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(p.lowestPrice))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.maxCutTimes))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(p.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(p.endDate)))]), _vm._v(" "), _c('td', [(p.itemCnt) ? _c('span', [_vm._v(_vm._s(p.itemCnt) + " 次")]) : _c('span', {
      staticClass: "gray"
    }, [_vm._v("0 次")])]), _vm._v(" "), _c('td', [(p.paidCnt) ? _c('span', [_vm._v(_vm._s(p.paidCnt))]) : _c('span', {
      staticClass: "gray"
    }, [_vm._v("0")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.stock))]), _vm._v(" "), _c('td', [(p.stock) ? [_vm._v(_vm._s(p.stock - (p.paidCnt ? p.paidCnt : 0)))] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.createTime))]), _vm._v(" "), _c('td', [(_vm.editable) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.$router.push('/market/bargain-product-edit/' + p.productId)
        }
      }
    }, [_vm._v("详情")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openPrdQrcodeDlg(p)
        }
      }
    }, [_vm._v("二维码")])]), _vm._v(" "), (!p.itemCnt) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delProduct(p.productId)
        }
      }
    }, [_vm._v("删除")])]) : _vm._e()]) : _vm._e()])])
  })], 2)]), _vm._v(" "), (_vm.productList) ? _c('div', {
    staticClass: "tbl-footer center"
  }, [_vm._v("共 " + _vm._s(_vm.productList.length) + " 条记录")]) : _vm._e()])]), _vm._v(" "), _c('TabPane', {
    attrs: {
      "label": "砍价记录"
    }
  }, [(_vm.editable) ? _c('section', [_c('div', {
    staticClass: "tbl-header"
  }, [_c('div', {
    staticClass: "l"
  }, [_c('i-button', {
    attrs: {
      "icon": "md-refresh"
    },
    on: {
      "click": _vm.reloadBargainProductListItem
    }
  }, [_vm._v("刷新")]), _vm._v("  \n\t\t\t\t\t\t\t"), _c('i-select', {
    staticStyle: {
      "width": "330px"
    },
    attrs: {
      "placeholder": "请选择砍价商品"
    },
    on: {
      "on-change": function($event) {
        return _vm.queryBargainProductItem()
      }
    },
    model: {
      value: (_vm.query.productId),
      callback: function($$v) {
        _vm.$set(_vm.query, "productId", $$v)
      },
      expression: "query.productId"
    }
  }, _vm._l((_vm.productList), function(p, idx) {
    return _c('i-option', {
      key: p.productId,
      attrs: {
        "value": p.productId
      }
    }, [_vm._v(_vm._s(p.productTitle) + "\n\t\t\t\t\t\t\t\t\t（" + _vm._s(_vm.g.Util.formatDate(p.beginDate, false)) + " ~ " + _vm._s(_vm.g.Util.formatDate(p.endDate, false)) + "）\n\t\t\t\t\t\t\t\t")])
  }), 1), _vm._v("\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t"), _c('i-select', {
    staticStyle: {
      "width": "130px"
    },
    attrs: {
      "placeholder": "分享员工"
    },
    on: {
      "on-change": function($event) {
        return _vm.queryBargainProductItem()
      }
    },
    model: {
      value: (_vm.query.sharerStaffId),
      callback: function($$v) {
        _vm.$set(_vm.query, "sharerStaffId", $$v)
      },
      expression: "query.sharerStaffId"
    }
  }, [_c('i-option', {
    attrs: {
      "value": 0
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("所有员工")])]), _vm._v(" "), _vm._l((_vm.staffList), function(s) {
    return _c('i-option', {
      key: s.staffId,
      attrs: {
        "value": s.staffId
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t" + _vm._s(s.name) + "\n\t\t\t\t\t\t\t\t")])
  })], 2), _vm._v("    \n\t\t\t\t\t\t\t"), _c('checkbox', {
    on: {
      "on-change": function($event) {
        return _vm.queryBargainProductItem()
      }
    },
    model: {
      value: (_vm.query.isFinished),
      callback: function($$v) {
        _vm.$set(_vm.query, "isFinished", $$v)
      },
      expression: "query.isFinished"
    }
  }, [_vm._v("已砍结束")]), _vm._v(" "), _c('checkbox', {
    on: {
      "on-change": function($event) {
        return _vm.queryBargainProductItem()
      }
    },
    model: {
      value: (_vm.query.hasPaid),
      callback: function($$v) {
        _vm.$set(_vm.query, "hasPaid", $$v)
      },
      expression: "query.hasPaid"
    }
  }, [_vm._v("已购买")])], 1), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_vm._v("\n\t\t\t\t\t\t\t查询到 "), _c('b', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.itemCount))]), _vm._v(" 条记录\n\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_c('tr', [_c('th', [_vm._v("商品名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("发起人姓名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "105"
    }
  }, [_vm._v("发起人手机")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "85"
    }
  }, [_vm._v("原价")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "85"
    }
  }, [_vm._v("砍去价格")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("当前价格")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("参与人数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("购买时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("发起时间 ↓")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("结束时间")])]), _vm._v(" "), _vm._l((_vm.productItemList), function(p, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(p.productTitle))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.custName ? p.custName : p.memberName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.custPhone ? p.custPhone : p.memberPhone))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(p.rawPrice))]), _vm._v(" "), _c('td', [_c('span', {
      staticClass: "green"
    }, [_vm._v("￥" + _vm._s(_vm.g.Util.round(p.rawPrice - p.curPrice)))])]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(p.curPrice.toFixed(2)))]), _vm._v(" "), _c('td', [(p.participants) ? _c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.viewProductItemLogs(p.itemId)
        }
      }
    }, [_vm._v(_vm._s(p.participants) + " 人")]) : _c('span', {
      staticClass: "gray"
    }, [_vm._v("0 人")])]), _vm._v(" "), _c('td', [(p.transTime) ? [_vm._v(_vm._s(p.transTime))] : _c('i', {
      staticClass: "gray"
    }, [_vm._v("暂无")])], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.endTime))])])
  })], 2)]), _vm._v(" "), (_vm.itemCount) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.itemCount,
      "page-size": _vm.g.Conf.PAGE_SIZE,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryBargainProductItem
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.itemCount === 0) ? _c('div', {
    staticClass: "no-data center"
  }, [_vm._v("暂无数据")]) : _vm._e()]) : _vm._e()])], 1)], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "参与砍价的记录",
      "width": "1000",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.itemLogDlg),
      callback: function($$v) {
        _vm.itemLogDlg = $$v
      },
      expression: "itemLogDlg"
    }
  }, [_c('ul', {
    staticClass: "item-logs"
  }, _vm._l((_vm.productItemLogList), function(l) {
    return _c('li', [_c('div', {
      staticClass: "photo"
    }, [(l.userWxHeadImgUrl) ? _c('img', {
      staticClass: "wx-photo",
      attrs: {
        "src": l.userWxHeadImgUrl
      }
    }) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "l"
    }, [_c('div', {
      staticClass: "uname"
    }, [_vm._v(_vm._s(l.userWxName))]), _vm._v(" "), _c('div', {
      staticClass: "ctime"
    }, [_vm._v(_vm._s(l.createTime) + " ")]), _vm._v(" "), _c('div', [_vm._v("砍去 "), _c('span', {
      staticClass: "orangered"
    }, [_vm._v(_vm._s(l.bargainAmount.toFixed(2)))]), _vm._v(" 元")])])])
  }), 0), _vm._v(" "), (_vm.itemLogCount) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.itemLogCount,
      "page-size": _vm.g.Conf.PAGE_SIZE,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryBargainProductItemLog
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "砍价二维码",
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.productQrcodeDlg),
      callback: function($$v) {
        _vm.productQrcodeDlg = $$v
      },
      expression: "productQrcodeDlg"
    }
  }, [(_vm.productQrcodeDlg) ? [_c('table', {
    staticClass: "qrcode-tbl"
  }, [_c('tr', [_c('td', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("商品名称：")]), _c('td', [_c('h3', [_vm._v(_vm._s(_vm.selectPrductTitle))])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("商品砍价二维码：")]), _vm._v(" "), _c('td', [_c('img', {
    staticClass: "qrcode",
    attrs: {
      "src": _vm.g.Conf.QR_CODE_URL + encodeURIComponent(_vm.selectPrdUrl)
    }
  })])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("商品砍价链接：")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "link"
  }, [_vm._v(_vm._s(_vm.selectPrdUrl))])])])])] : _vm._e(), _vm._v(" "), _c('div', {
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
        _vm.productQrcodeDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 2)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2426:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "msite-conf"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("微官网简介")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/msite-share-conf')
      }
    }
  }, [_vm._v("分享设置")])])]), _vm._v(" "), _c('div', {
    staticClass: "article"
  }, [_vm._v("\n        【微官网】是健总管重点打造的门店手机版网站，充分展示门店风采。\n        微官网对所有人开放，并充分支持各种分享功能，\n        让贵店轻松享有门店官网，扩大宣传途径、吸引更多客户。\n        并且，门店的各种营销活动，都会在微官网上展示或操作。\n\n        "), _c('p', [_vm._v("下面是贵店微官网的二维码和小程序码，请用微信扫一扫")]), _vm._v(" "), _c('div', {
    staticClass: "qrcode"
  }, [(_vm.qrcodeUrl) ? _c('img', {
    attrs: {
      "src": _vm.qrcodeUrl
    }
  }) : _vm._e(), _vm._v(" "), (_vm.wxcodeUrl) ? _c('img', {
    attrs: {
      "src": _vm.wxcodeUrl
    }
  }) : _vm._e()])])]), _vm._v(" "), (_vm.g.data.user.isShopOwner) ? _c('section', [_vm._m(0), _vm._v(" "), _c('ul', {
    staticClass: "msite-conf"
  }, [_c('li', [_c('div', {
    staticClass: "skin-theme-conf"
  }, [_vm._v("\n            微官网皮肤主题：\n            "), _c('radio-group', {
    staticStyle: {
      "display": "inline-block"
    },
    on: {
      "on-change": _vm.changeSkinTheme
    },
    model: {
      value: (_vm.skinTheme),
      callback: function($$v) {
        _vm.skinTheme = $$v
      },
      expression: "skinTheme"
    }
  }, [_c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("默认（亮色）")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("酷黑")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 3
    }
  }, [_vm._v("粉色")])], 1)], 1)]), _vm._v(" "), _c('li', [_c('checkbox', {
    on: {
      "on-change": _vm.setShopOwnerInfoDisplay
    },
    model: {
      value: (_vm.displayShopOwner),
      callback: function($$v) {
        _vm.displayShopOwner = $$v
      },
      expression: "displayShopOwner"
    }
  }, [_vm._v("首页显示店长信息（姓名，手机号）")])], 1), _vm._v(" "), _c('li', [_c('checkbox', {
    on: {
      "on-change": _vm.setCardBuySmsAuthcode
    },
    model: {
      value: (_vm.needSmsAuthcodeWhenBuyCard),
      callback: function($$v) {
        _vm.needSmsAuthcodeWhenBuyCard = $$v
      },
      expression: "needSmsAuthcodeWhenBuyCard"
    }
  }, [_vm._v("在线购卡时是否需要输入短信验证码 "), _c('span', {
    staticClass: "gray"
  }, [_vm._v("（该短信计费）")])])], 1), _vm._v(" "), (_vm.g.data.shop.hasWxPay) ? _c('li', [_c('checkbox', {
    on: {
      "on-change": _vm.setCustBookingGl
    },
    model: {
      value: (_vm.enableCustBookingGl),
      callback: function($$v) {
        _vm.enableCustBookingGl = $$v
      },
      expression: "enableCustBookingGl"
    }
  }, [_vm._v("启用散客在线付费预约团课")]), _vm._v(" "), (_vm.enableCustBookingGl) ? _c('span', {
    staticClass: "l10"
  }, [_c('checkbox', {
    on: {
      "on-change": _vm.setCustBookingSmsNotice
    },
    model: {
      value: (_vm.isSendSmsToCustForGlBooking),
      callback: function($$v) {
        _vm.isSendSmsToCustForGlBooking = $$v
      },
      expression: "isSendSmsToCustForGlBooking"
    }
  }, [_vm._v("预约成功后发送短信通知给客户")])], 1) : _vm._e()], 1) : _vm._e()])]) : _vm._e(), _vm._v(" "), _c('section', [_c('Tabs', {
    attrs: {
      "animated": false
    }
  }, [_c('TabPane', {
    attrs: {
      "name": "1",
      "label": "微官网底部菜单设置"
    }
  }, [_c('section', [_c('div', {
    staticClass: "menu-conf"
  }, [_c('table', [_c('tr', [_c('th', [_vm._v("#")]), _vm._v(" "), _c('td', [_vm._v("菜单选择")]), _vm._v(" "), _c('td', [_vm._v("自定义菜单名")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("1.")]), _vm._v(" "), _c('td', [_c('i-select', {
    staticClass: "sel",
    attrs: {
      "disabled": true
    },
    model: {
      value: (_vm.msiteMenus[0].id),
      callback: function($$v) {
        _vm.$set(_vm.msiteMenus[0], "id", $$v)
      },
      expression: "msiteMenus[0].id"
    }
  }, [_c('i-option', {
    attrs: {
      "value": 0
    }
  }, [_vm._v("首页")])], 1)], 1), _vm._v(" "), _c('td', [_c('i-input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "请设置菜单名称"
    },
    model: {
      value: (_vm.msiteMenus[0].name),
      callback: function($$v) {
        _vm.$set(_vm.msiteMenus[0], "name", $$v)
      },
      expression: "msiteMenus[0].name"
    }
  })], 1)]), _vm._v(" "), _vm._l(([1, 2, 3, 4, 5]), function(idx) {
    return _c('tr', [_c('th', [_vm._v(_vm._s(idx + 1) + ".")]), _vm._v(" "), _c('td', [_c('i-select', {
      staticClass: "sel",
      attrs: {
        "clearable": ""
      },
      on: {
        "on-change": function($event) {
          return _vm.changeMsiteMenu(idx)
        }
      },
      model: {
        value: (_vm.msiteMenus[idx].id),
        callback: function($$v) {
          _vm.$set(_vm.msiteMenus[idx], "id", $$v)
        },
        expression: "msiteMenus[idx].id"
      }
    }, _vm._l((_vm.menuDict), function(m) {
      return (m.name) ? _c('i-option', {
        key: m.id,
        attrs: {
          "value": m.id
        }
      }, [_vm._v(_vm._s(m.name))]) : _vm._e()
    }), 1)], 1), _vm._v(" "), _c('td', [_c('i-input', {
      staticClass: "input",
      attrs: {
        "type": "text",
        "placeholder": "请设置菜单名称"
      },
      model: {
        value: (_vm.msiteMenus[idx].name),
        callback: function($$v) {
          _vm.$set(_vm.msiteMenus[idx], "name", $$v)
        },
        expression: "msiteMenus[idx].name"
      }
    })], 1)])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "submit"
  }, [_c('i-button', {
    staticClass: "medium-btn",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveMenusConf
    }
  }, [_vm._v("保存")])], 1)])])]), _vm._v(" "), _c('TabPane', {
    attrs: {
      "name": "2",
      "label": "微官网首页设置"
    }
  }, [_c('msite-home-set')], 1)], 1)], 1), _vm._v(" "), _c('section', [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "big"
  }, [_vm._v("\n        可将微官网嵌入贵商户或贵店微信公众号，这样，访客就可通过微信公众号进入贵店微官网。\n        具体方法如下："), _c('p'), _vm._v(" "), _c('ol', [_c('li', [_vm._v("登录贵店微信公众号；")]), _vm._v(" "), _c('li', [_vm._v("进入微信【功能 > 自定义菜单】")]), _vm._v(" "), _c('li', [_vm._v("编辑菜单-名称：菜单名称可自定义（例如，微官网）")]), _vm._v(" "), _c('li', [_vm._v("编辑菜单-页面地址，可选的页面地址有：\n            "), _c('ul', {
    staticClass: "url-list"
  }, [_c('li', [_c('label', [_vm._v("门店首页：")]), _vm._v(_vm._s(_vm.g.Conf.MSITE_BASE_URL) + "/#/shop-home?s=" + _vm._s(_vm.shopId) + "\n                "), _c('a', {
    staticClass: "l15",
    on: {
      "click": function($event) {
        return _vm.openQrCodeDlg('shop-home', '微官网首页')
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-qrcode big"
  }), _vm._v(" 二维码")])]), _vm._v(" "), _c('li', [_c('label', [_vm._v("会员卡：")]), _vm._v(_vm._s(_vm.g.Conf.MSITE_BASE_URL) + "/#/shop-cards?s=" + _vm._s(_vm.shopId) + "\n                "), _c('a', {
    staticClass: "l15",
    on: {
      "click": function($event) {
        return _vm.openQrCodeDlg('shop-cards', '会员卡售卖')
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-qrcode big"
  }), _vm._v(" 二维码")])]), _vm._v(" "), _c('li', [_c('label', [_vm._v("教练风采：")]), _vm._v(_vm._s(_vm.g.Conf.MSITE_BASE_URL) + "/#/shop-coaches?s=" + _vm._s(_vm.shopId))]), _vm._v(" "), _c('li', [_c('label', [_vm._v("团课课表：")]), _vm._v(_vm._s(_vm.g.Conf.MSITE_BASE_URL) + "/#/shop-group-lessons?s=" + _vm._s(_vm.shopId))]), _vm._v(" "), _c('li', [_c('label', [_vm._v("私教课：")]), _vm._v(_vm._s(_vm.g.Conf.MSITE_BASE_URL) + "/#/shop-private-courses?s=" + _vm._s(_vm.shopId))]), _vm._v(" "), _c('li', [_c('label', [_vm._v("门店活动：")]), _vm._v(_vm._s(_vm.g.Conf.MSITE_BASE_URL) + "/#/shop-activity?s=" + _vm._s(_vm.shopId))]), _vm._v(" "), _c('li', [_c('label', [_vm._v("美团核销：")]), _vm._v(_vm._s(_vm.g.Conf.MSITE_BASE_URL) + "/#/mt-verify-coupon?s=" + _vm._s(_vm.shopId) + "\n                "), _c('a', {
    staticClass: "l15",
    on: {
      "click": function($event) {
        return _vm.openQrCodeDlg('mt-verify-coupon', '客户自助核销美团券')
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-qrcode big"
  }), _vm._v(" 二维码")])]), _vm._v(" "), _c('li', [_c('label', [_vm._v("抖音核销：")]), _vm._v(_vm._s(_vm.g.Conf.MSITE_BASE_URL) + "/#/dy-verify-coupon?s=" + _vm._s(_vm.shopId) + "\n                "), _c('a', {
    staticClass: "l15",
    on: {
      "click": function($event) {
        return _vm.openQrCodeDlg('dy-verify-coupon', '客户自助核销抖音券')
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-qrcode big"
  }), _vm._v(" 二维码")])])])])]), _vm._v(" "), _c('p', [_vm._v("配置示意图如下：")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "http://www.jzongguan.com/imglib/msite-wx-conf.png",
      "width": "750"
    }
  })])])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": _vm.qrcodeDlgTitle,
      "width": "600",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.qrCodeDlg),
      callback: function($$v) {
        _vm.qrCodeDlg = $$v
      },
      expression: "qrCodeDlg"
    }
  }, [(_vm.qrCodeDlg) ? [_c('div', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.g.Conf.QR_CODE_URL + encodeURIComponent(_vm.qrCodeDlgUrl)
    }
  })])] : _vm._e(), _vm._v(" "), _c('div', {
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
        _vm.qrCodeDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("微官网设置")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("将微官网嵌入微信公众号")])])
}]}

/***/ }),

/***/ 2439:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/bargain-product-list"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', {
    staticStyle: {
      "width": "100%"
    }
  }, [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("砍价商品详情")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('a', {
    staticClass: "gray",
    on: {
      "click": function($event) {
        return _vm.$router.push('/market/bargain-product-list')
      }
    }
  }, [_vm._v("返回 →")])])]), _vm._v(" "), _c('i-form', {
    ref: "product",
    staticClass: "myform",
    staticStyle: {
      "width": "900px"
    },
    attrs: {
      "model": _vm.product,
      "rules": _vm.formRule,
      "label-width": 100
    }
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("基本信息")]), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "productTitle",
      "label": "商品名称"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.product.productTitle),
      callback: function($$v) {
        _vm.$set(_vm.product, "productTitle", $$v)
      },
      expression: "product.productTitle"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "cardId",
      "label": "会员卡选择"
    }
  }, [_c('i-select', {
    attrs: {
      "filterable": "",
      "clearable": ""
    },
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
  }, _vm._l((_vm.cardList), function(c) {
    return _c('i-option', {
      key: c.cardId,
      attrs: {
        "value": c.cardId
      }
    }, [_vm._v(_vm._s(c.cardName) + " "), (c.defaultAmount) ? _c('span', {
      staticClass: "gray l10"
    }, [_vm._v("（默认金额：￥" + _vm._s(c.defaultAmount) + "）")]) : _vm._e()])
  }), 1), _vm._v(" "), _c('div', {
    staticClass: "block-tips"
  }, [_c('b', [_vm._v("必读说明")]), _vm._v("： 砍价商品如果会员卡，砍价发起者购买后，相当于在线购卡。"), _c('br'), _vm._v("( 如果是非会员将自动创建会员并添加会员卡，如果已经是会员，则自动在其名下添加此会员卡 )")])], 1), _vm._v(" "), (_vm.product.cardId) ? [(_vm.product.cardType === 2) ? _c('form-item', {
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
  }, [_vm._v("元")])], 1) : _vm._e(), _vm._v(" "), _c('form-item', {
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
  }, [_vm._v("天")])], 1), _vm._v(" "), (_vm.product.cardType === 4) ? _c('form-item', {
    attrs: {
      "prop": "cardTimes2",
      "label": "使用时间",
      "required": ""
    }
  }, [_c('input-int', {
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
  }, [_vm._v("分钟")])], 1) : _vm._e(), _vm._v(" "), (_vm.product.cardDays) ? _c('form-item', {
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
  }, [_vm._v("\n\t\t\t\t\t\t\t指会员在线购买会员卡后，最迟多少天内要使用此卡，否则按照最迟开卡日期为起始日期\n\t\t\t\t\t\t")])], 1) : _vm._e()] : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "商品图片",
      "required": ""
    }
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccessForProduct,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultLisForProduct
    }
  }, [_c('i-button', {
    attrs: {
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传砍价商品主图")])], 1), _vm._v(" "), _c('p'), _vm._v(" "), _c('img-upload', {
    attrs: {
      "multiple": true,
      "removeable": true,
      "max-count": 10,
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleMorePisUploadSuccess,
      "on-remove": _vm.handleImgRemove,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultMorePics
    }
  }, [_c('i-button', {
    attrs: {
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传更多砍价图片")]), _vm._v("\n\t\t\t\t\t\t  "), _c('span', {
    staticClass: "gray"
  }, [_vm._v("（可选，最多可上传 "), _c('b', [_vm._v("10")]), _vm._v(" 张）")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "consumerType",
      "label": "发起人类型",
      "required": ""
    }
  }, [_c('radio-group', {
    model: {
      value: (_vm.product.consumerType),
      callback: function($$v) {
        _vm.$set(_vm.product, "consumerType", _vm._n($$v))
      },
      expression: "product.consumerType"
    }
  }, [_c('radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("不限")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("访客")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("会员")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "发起期限",
      "required": ""
    }
  }, [_c('date-picker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "开始日期"
    },
    model: {
      value: (_vm.product.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.product, "beginDate", $$v)
      },
      expression: "product.beginDate"
    }
  }), _vm._v("\n\t\t\t\t\t~\n\t\t\t\t\t"), _c('date-picker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "结束日期"
    },
    model: {
      value: (_vm.product.endDate),
      callback: function($$v) {
        _vm.$set(_vm.product, "endDate", $$v)
      },
      expression: "product.endDate"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor bigger orange"
  }), _vm._v(" 客户只能在此期限内发起砍价")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "rawPrice",
      "label": "商品原价"
    }
  }, [_c('input-num', {
    staticClass: "input-s",
    attrs: {
      "min": 0.0001
    },
    model: {
      value: (_vm.product.rawPrice),
      callback: function($$v) {
        _vm.$set(_vm.product, "rawPrice", _vm._n($$v))
      },
      expression: "product.rawPrice"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")]), _vm._v(" "), _c('span', {
    staticClass: "tips l10"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor bigger orange"
  }), _vm._v(" 砍价前的价格，在此价格基础上砍价")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "lowestPrice",
      "label": "商品最低价"
    }
  }, [_c('input-num', {
    staticClass: "input-s",
    attrs: {
      "min": 0.0001
    },
    model: {
      value: (_vm.product.lowestPrice),
      callback: function($$v) {
        _vm.$set(_vm.product, "lowestPrice", _vm._n($$v))
      },
      expression: "product.lowestPrice"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")]), _vm._v(" "), _c('span', {
    staticClass: "tips l10"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor bigger orange"
  }), _vm._v(" 能够砍到的最低价")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "maxCutTimes",
      "label": "砍价人数"
    }
  }, [_c('input-int', {
    staticClass: "input-s",
    attrs: {
      "min": 1
    },
    model: {
      value: (_vm.product.maxCutTimes),
      callback: function($$v) {
        _vm.$set(_vm.product, "maxCutTimes", _vm._n($$v))
      },
      expression: "product.maxCutTimes"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("人")]), _vm._v(" "), _c('span', {
    staticClass: "tips l10"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor bigger orange"
  }), _vm._v(" 参加砍价的最多人数")]), _vm._v(" "), _c('help', {
    attrs: {
      "title": "更多帮助"
    }
  }, [_vm._v("\n\t\t\t\t\t\t当参与人数达到此设置的人数后，砍价后的价格将等于上述“商品最低价”\n\t\t\t\t\t")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "limitHours",
      "label": "砍价时效"
    }
  }, [_c('input-int', {
    staticClass: "input-s",
    attrs: {
      "min": 1
    },
    model: {
      value: (_vm.product.limitHours),
      callback: function($$v) {
        _vm.$set(_vm.product, "limitHours", $$v)
      },
      expression: "product.limitHours"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("小时")]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor bigger orange"
  }), _vm._v(" 发起砍价后，在此时效内可参与砍价，超过此时间后，将自动结束")])], 1), _vm._v(" "), (_vm.product.cardId) ? _c('form-item', {
    attrs: {
      "prop": "paymentLimitHours",
      "label": "付款时效"
    }
  }, [_c('input-int', {
    staticClass: "input-s",
    attrs: {
      "min": 1
    },
    model: {
      value: (_vm.product.paymentLimitHours),
      callback: function($$v) {
        _vm.$set(_vm.product, "paymentLimitHours", $$v)
      },
      expression: "product.paymentLimitHours"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("小时")]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor bigger orange"
  }), _vm._v(" 发起砍价后，在此时效内发起砍价的人才可在线支付购卡")])], 1) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "maxLaunchCnt",
      "label": "每人最多发起"
    }
  }, [_c('input-int', {
    staticClass: "input-s",
    attrs: {
      "min": 1
    },
    model: {
      value: (_vm.product.maxLaunchCnt),
      callback: function($$v) {
        _vm.$set(_vm.product, "maxLaunchCnt", _vm._n($$v))
      },
      expression: "product.maxLaunchCnt"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("次")]), _vm._v(" "), _c('span', {
    staticClass: "tips l10"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor bigger orange"
  }), _vm._v(" 不填写表示不限制")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "stock",
      "label": "商品库存"
    }
  }, [_c('input-int', {
    staticClass: "input-s",
    attrs: {
      "min": 1
    },
    model: {
      value: (_vm.product.stock),
      callback: function($$v) {
        _vm.$set(_vm.product, "stock", _vm._n($$v))
      },
      expression: "product.stock"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("件")]), _vm._v(" "), _c('span', {
    staticClass: "tips l10"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor bigger orange"
  }), _vm._v(" 不填写表示不限制")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "onlyBuyWhenMinPrice",
      "label": "购买限制"
    }
  }, [_c('checkbox', {
    model: {
      value: (_vm.product.onlyBuyWhenMinPrice),
      callback: function($$v) {
        _vm.$set(_vm.product, "onlyBuyWhenMinPrice", $$v)
      },
      expression: "product.onlyBuyWhenMinPrice"
    }
  }, [_vm._v("仅砍价到最低价时才能购买")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "isHideLowestPrice",
      "label": "隐藏最低价"
    }
  }, [_c('i-switch', {
    attrs: {
      "size": "large"
    },
    model: {
      value: (_vm.product.isHideLowestPrice),
      callback: function($$v) {
        _vm.$set(_vm.product, "isHideLowestPrice", $$v)
      },
      expression: "product.isHideLowestPrice"
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
  }, [_vm._v("否")])]), _vm._v(" "), _c('help', [_vm._v("\n\t\t\t\t\t\t选择“是”，则在微官网砍价活动页面隐藏最低价。\n\t\t\t\t\t")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "productDesc",
      "label": "商品描述"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 10
    },
    model: {
      value: (_vm.product.productDesc),
      callback: function($$v) {
        _vm.$set(_vm.product, "productDesc", $$v)
      },
      expression: "product.productDesc"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "remark",
      "label": "砍价说明"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 10
    },
    model: {
      value: (_vm.product.remark),
      callback: function($$v) {
        _vm.$set(_vm.product, "remark", $$v)
      },
      expression: "product.remark"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "tit mt20"
  }, [_vm._v("分享设置\n\t\t\t\t\t"), _c('span', {
    staticClass: "orange"
  }, [_vm._v("（参与人员通过微信分享时的页面显示内容）")])]), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "shareTitle",
      "label": "分享标题"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": "分享时显示的标题，如果为空，则显示商品标题"
    },
    model: {
      value: (_vm.product.shareTitle),
      callback: function($$v) {
        _vm.$set(_vm.product, "shareTitle", $$v)
      },
      expression: "product.shareTitle"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "sharePic",
      "label": "分享图片"
    }
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccessForShare,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultListForShare
    }
  }, [_c('i-button', {
    attrs: {
      "size": "small",
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传图片")]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（如果不设置，则默认为商品图片）")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "shareDesc",
      "label": "分享简介"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 2,
      "placeholder": "分享时显示的内容简介，如果为空，则显示商品标题"
    },
    model: {
      value: (_vm.product.shareDesc),
      callback: function($$v) {
        _vm.$set(_vm.product, "shareDesc", $$v)
      },
      expression: "product.shareDesc"
    }
  })], 1)], 2), _vm._v(" "), (_vm.marketEditable) ? _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "100px"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.saveBargainProduct()
      }
    }
  }, [_vm._v("提交")]), _vm._v("\n\t\t\t\t \n\t\t\t\t"), (_vm.productId && !_vm.product.itemCnt) ? _c('i-button', {
    on: {
      "click": function($event) {
        return _vm.delBargainProduct()
      }
    }
  }, [_vm._v("删除")]) : _vm._e()], 1) : _vm._e()], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2442:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/share-item/home"
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
    staticClass: "l"
  }, [(_vm.editable) ? _c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": function($event) {
        return _vm.openShareItemDlg(null)
      }
    }
  }, [_vm._v("新增分销项目")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.dlg.receivedCustQuery = true
      }
    }
  }, [_vm._v("领取客户查询")]), _vm._v("\n\t\t\t\t\t\t \n\t\t\t\t\t\t"), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.dlg.shareEntryImg = true
      }
    }
  }, [_vm._v("设置分销入口图片")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.shareItemList), function(s) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(s.itemName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(s.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(s.endDate)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(s.viewCnt))]), _vm._v(" "), _c('td', {
      staticClass: "color1"
    }, [_vm._v(_vm._s(s.receiveCnt) + " "), (s.receiveCnt > 0) ? _c('a', {
      staticClass: "l10",
      on: {
        "click": function($event) {
          return _vm.openShareItemReceiverDlg(s.itemId, null)
        }
      }
    }, [_vm._v("[查看]")]) : _vm._e()]), _vm._v(" "), _c('td', {
      staticClass: "color1"
    }, [_vm._v(_vm._s((s.receiveRate * 100).toFixed(1)) + "%")]), _vm._v(" "), _c('td', {
      staticClass: "color2"
    }, [_vm._v(_vm._s(s.convertCnt) + " "), (s.convertCnt > 0) ? _c('a', {
      staticClass: "l10",
      on: {
        "click": function($event) {
          return _vm.openShareItemReceiverAsMembDlg(s.itemId, null)
        }
      }
    }, [_vm._v("[查看]")]) : _vm._e()]), _vm._v(" "), _c('td', {
      staticClass: "color2"
    }, [_vm._v(_vm._s((100 * s.convertRate).toFixed(1)) + "%")]), _vm._v(" "), _c('td', [(_vm.editable) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openShareItemDlg(s.itemId)
        }
      }
    }, [_vm._v("详情")])]), _vm._v(" "), (_vm.sharerType == 1) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.rewardSetting(s.itemId)
        }
      }
    }, [_vm._v("奖励设置")])]) : _vm._e(), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.deleteShareItem(s.itemId)
        }
      }
    }, [_vm._v("删除")])])]) : _vm._e()])])
  })], 2), _vm._v(" "), (_vm.shareItemList.length === 0) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("无数据")]) : _vm._e()])]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd"
  }, [(_vm.sharerType === 1) ? _c('div', {
    staticClass: "tit"
  }, [_vm._v("会员分销统计")]) : _vm._e(), _vm._v(" "), (_vm.sharerType === 2) ? _c('div', {
    staticClass: "tit"
  }, [_vm._v("员工分销统计")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('div', {
    staticClass: "query-section"
  }, [_c('i-select', {
    staticClass: "item",
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "placeholder": "选择分销项目"
    },
    on: {
      "on-change": _vm.queryShareItemOwnerByItem
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("-- 不限 --")]), _vm._v(" "), _vm._l((_vm.shareItemList), function(s) {
    return _c('i-option', {
      key: s.itemId,
      attrs: {
        "value": s.itemId
      }
    }, [_vm._v(_vm._s(s.itemName))])
  })], 2), _vm._v(" \n\t\t\t\t\t\t\t"), (_vm.sharerType === 1) ? [_c('i-input', {
    staticClass: "item",
    attrs: {
      "icon": "ios-search",
      "placeholder": "分享会员姓名 | 手机号"
    },
    on: {
      "on-enter": _vm.queryShareItemOwnerByMember,
      "on-click": _vm.queryShareItemOwnerByMember
    },
    model: {
      value: (_vm.query.memberFlag),
      callback: function($$v) {
        _vm.$set(_vm.query, "memberFlag", $$v)
      },
      expression: "query.memberFlag"
    }
  })] : (_vm.sharerType === 2) ? _c('i-select', {
    staticClass: "item",
    attrs: {
      "placeholder": "选择员工"
    },
    on: {
      "on-change": _vm.queryShareItemOwnerByStaff
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("-- 不限 --")]), _vm._v(" "), _vm._l((_vm.staffList), function(s) {
    return _c('i-option', {
      key: s.staffId,
      attrs: {
        "value": s.staffId
      }
    }, [_vm._v(_vm._s(s.name))])
  })], 2) : _vm._e()], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_c('tr', [_c('th', [_vm._v("分销项目")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [(_vm.sharerType === 1) ? [_vm._v("会员")] : _vm._e(), (_vm.sharerType === 2) ? [_vm._v("员工")] : _vm._e()], 2), _vm._v(" "), _c('th', {
    attrs: {
      "width": "160"
    }
  }, [_vm._v("分销开始时间")]), _vm._v(" "), _c('th', [_vm._v("浏览数")]), _vm._v(" "), _c('th', [_vm._v("领取数")]), _vm._v(" "), _c('th', [_vm._v("领取率")]), _vm._v(" "), _c('th', [_vm._v("成交数")]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _vm._l((_vm.shareItemOwnerList), function(o, i) {
    return _c('tr', {
      key: i
    }, [_c('td', [_vm._v(_vm._s(o.itemName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(o.sharerName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(o.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(o.viewCnt))]), _vm._v(" "), _c('td', {
      staticClass: "color1"
    }, [_vm._v(_vm._s(o.receiveCnt) + " "), (o.receiveCnt > 0) ? _c('a', {
      staticClass: "l10",
      on: {
        "click": function($event) {
          return _vm.openShareItemReceiverDlg(o.itemId, o.sioId, o.sharerName)
        }
      }
    }, [_vm._v("[查看]")]) : _vm._e()]), _vm._v(" "), _c('td', {
      staticClass: "color1"
    }, [_vm._v(_vm._s((o.receiveRate * 100).toFixed(1)) + "%")]), _vm._v(" "), _c('td', {
      staticClass: "color2"
    }, [_vm._v(_vm._s(o.convertCnt) + " "), (o.convertCnt > 0) ? _c('a', {
      staticClass: "l10",
      on: {
        "click": function($event) {
          return _vm.openShareItemReceiverAsMembDlg(o.itemId, o.sioId, o.sharerName)
        }
      }
    }, [_vm._v("[查看]")]) : _vm._e()]), _vm._v(" "), _c('td', {
      staticClass: "color2"
    }, [_vm._v(_vm._s((o.convertRate * 100).toFixed(1)) + "%")])])
  })], 2), _vm._v(" "), (_vm.shareItemOwnerCnt && _vm.shareItemOwnerCnt > 0) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.shareItemOwnerCnt,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryShareItemOwner
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.shareItemOwnerList.length === 0) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("无数据")]) : _vm._e()])])], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "分销项目",
      "width": "800",
      "styles": {
        top: '10px'
      },
      "mask-closable": false
    },
    model: {
      value: (_vm.dlg.viewShareItem),
      callback: function($$v) {
        _vm.$set(_vm.dlg, "viewShareItem", $$v)
      },
      expression: "dlg.viewShareItem"
    }
  }, [_c('i-form', {
    ref: "shareItem",
    staticClass: "myform",
    staticStyle: {
      "width": "700px"
    },
    attrs: {
      "model": _vm.shareItem,
      "label-width": 110
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "name",
      "label": "项目名称",
      "required": ""
    }
  }, [_c('i-input', {
    staticStyle: {
      "width": "510px",
      "display": "inline-block"
    },
    attrs: {
      "type": "text",
      "placeholder": "请输入分销的项目名称"
    },
    model: {
      value: (_vm.shareItem.itemName),
      callback: function($$v) {
        _vm.$set(_vm.shareItem, "itemName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "shareItem.itemName"
    }
  }), _vm._v(" "), _c('help', {
    attrs: {
      "title": "提示"
    }
  }, [_vm._v("\n\t\t\t\t\t\t分销的项目可以是活动，或会员卡（例如，体验卡等）\n\t\t\t\t\t")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "itemImg",
      "label": "项目图片"
    }
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.itemImgUpload.action,
      "img-max-width": _vm.itemImgUpload.imgMaxWidth,
      "on-success": _vm.handleItemImgUploadSuccess,
      "max-size": _vm.itemImgUpload.maxSize,
      "default-file-list": _vm.itemImgUpload.defaultList
    }
  }, [_c('i-button', {
    attrs: {
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传项目主图")])], 1), _vm._v(" "), _c('p'), _vm._v(" "), _c('img-upload', {
    attrs: {
      "multiple": true,
      "removeable": true,
      "max-count": 10,
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleMorePisUploadSuccess,
      "on-remove": _vm.handleImgRemove,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultMorePics
    }
  }, [_c('i-button', {
    attrs: {
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传更多图片")]), _vm._v("\n\t\t\t\t\t\t  "), _c('span', {
    staticClass: "gray"
  }, [_vm._v("（可选，最多可上传 "), _c('b', [_vm._v("10")]), _vm._v(" 张）")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "limitReceiverRole",
      "label": "参与人员"
    }
  }, [_c('radio-group', {
    model: {
      value: (_vm.shareItem.limitReceiverRole),
      callback: function($$v) {
        _vm.$set(_vm.shareItem, "limitReceiverRole", $$v)
      },
      expression: "shareItem.limitReceiverRole"
    }
  }, [_c('radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("不限")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("新客")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("会员")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "shareCardId",
      "label": "分销会员卡"
    }
  }, [_c('i-select', {
    staticStyle: {
      "width": "348px"
    },
    model: {
      value: (_vm.shareItem.shareCardId),
      callback: function($$v) {
        _vm.$set(_vm.shareItem, "shareCardId", $$v)
      },
      expression: "shareItem.shareCardId"
    }
  }, _vm._l((_vm.cardList), function(c) {
    return (c.isOnlineSale) ? _c('i-option', {
      key: c.cardId,
      attrs: {
        "value": c.cardId,
        "label": c.cardName
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(c.cardName) + "\n\t\t\t\t\t\t\t"), _c('div', {
      staticClass: "r"
    }, [_vm._v("￥" + _vm._s(c.onlinePrice))])]) : _vm._e()
  }), 1), _vm._v(" "), _c('help', {
    attrs: {
      "title": "提示"
    }
  }, [_vm._v("分销的会员卡必须设置了“在线售卡”。\n\t\t\t\t\t\t"), _c('p'), _vm._v("访客领取分销活动后，将自动跳转到该会员卡页面，访客可在线购卡后自动成为会员。\n\t\t\t\t\t")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "分销有效期",
      "required": ""
    }
  }, [_c('date-picker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "开始日期"
    },
    model: {
      value: (_vm.shareItem.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.shareItem, "beginDate", $$v)
      },
      expression: "shareItem.beginDate"
    }
  }), _vm._v("\n\t\t\t\t\t~\n          "), _c('date-picker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "结束日期"
    },
    model: {
      value: (_vm.shareItem.endDate),
      callback: function($$v) {
        _vm.$set(_vm.shareItem, "endDate", $$v)
      },
      expression: "shareItem.endDate"
    }
  }), _vm._v(" "), _c('help', {
    attrs: {
      "title": "提示"
    }
  }, [_vm._v("\n\t\t\t\t\t\t仅在分销有效期内，分享者或新客才能看到此分销项目，否则，视为无效分销项目。\n\t\t\t\t\t")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "itemDesc",
      "label": "项目说明"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 6
    },
    model: {
      value: (_vm.shareItem.itemDesc),
      callback: function($$v) {
        _vm.$set(_vm.shareItem, "itemDesc", $$v)
      },
      expression: "shareItem.itemDesc"
    }
  })], 1), _vm._v(" "), (_vm.sharerType === 1) ? _c('form-item', {
    attrs: {
      "prop": "sharerNote",
      "label": "会员奖励说明",
      "required": ""
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 10
    },
    model: {
      value: (_vm.shareItem.sharerNote),
      callback: function($$v) {
        _vm.$set(_vm.shareItem, "sharerNote", $$v)
      },
      expression: "shareItem.sharerNote"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "note"
  }, [_c('help', {
    attrs: {
      "title": "友情提示"
    }
  }, [_vm._v("\n\t\t\t\t\t\t会员分享出分销页面后，如果有访客参与了分销，并且成功转化为会员后，门店可对会员进行奖励，\n\t\t\t\t\t\t"), _c('p'), _vm._v("\n\t\t\t\t\t\t请将奖励的说明填入上面输入框，会员在手机端可看到。\n\t\t\t\t\t\t")])], 1)], 1) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "receiverNote",
      "label": "新客奖励说明",
      "required": ""
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 10
    },
    model: {
      value: (_vm.shareItem.receiverNote),
      callback: function($$v) {
        _vm.$set(_vm.shareItem, "receiverNote", $$v)
      },
      expression: "shareItem.receiverNote"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "note"
  }, [_c('help', {
    attrs: {
      "title": "友情提示"
    }
  }, [_vm._v("\n\t\t\t\t\t\t新客领取该分销项目后，或者办理正式会员时，门店可对新客进行奖励或优惠。\n\t\t\t\t\t\t"), _c('p'), _vm._v("\n\t\t\t\t\t\t请将奖励的说明填入上面输入框，新客在分销页面会看到。\n\t\t\t\t\t\t")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "110px",
      "margin-bottom": "-20px"
    }
  }, [_c('i-button', {
    staticClass: "primary",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveShareItem
    }
  }, [_vm._v("提交")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "分销奖励设置",
      "width": "700",
      "styles": {
        top: '10px'
      },
      "mask-closable": false
    },
    on: {
      "on-cancel": _vm.clearCardRewardConf
    },
    model: {
      value: (_vm.addRewardVisible),
      callback: function($$v) {
        _vm.addRewardVisible = $$v
      },
      expression: "addRewardVisible"
    }
  }, [_c('Tabs', {
    attrs: {
      "animated": false
    }
  }, [_c('TabPane', {
    attrs: {
      "label": "会员卡奖励"
    }
  }, [_vm._l((_vm.shareList), function(item, idx) {
    return _c('div', {
      key: idx,
      staticClass: "myform mrb",
      staticStyle: {
        "width": "100%"
      }
    }, [_c('div', {
      staticClass: "tit"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('table', {
      staticClass: "mytb"
    }, [_c('tr', [_c('th', {
      attrs: {
        "width": "280"
      }
    }, [_vm._v("分销会员卡设置")]), _vm._v(" "), _c('th', [_vm._v("分销奖励设置")])]), _vm._v(" "), (item.awardList && item.awardList.length > 0) ? _vm._l((item.awardList), function(r, cidx) {
      return _c('tr', {
        key: cidx
      }, [_c('td', [_c('i-select', {
        staticStyle: {
          "width": "280px"
        },
        attrs: {
          "clearable": "",
          "filterable": ""
        },
        on: {
          "on-clear": function($event) {
            return _vm.clearSelect(r, idx, cidx)
          }
        },
        model: {
          value: (r.cardId),
          callback: function($$v) {
            _vm.$set(r, "cardId", $$v)
          },
          expression: "r.cardId"
        }
      }, [_vm._l((_vm.allCardList), function(c) {
        return [_c('i-option', {
          key: c.cardId,
          attrs: {
            "value": c.cardId,
            "label": c.cardName
          },
          nativeOn: {
            "click": function($event) {
              return _vm.cardTypeChange(c, idx, cidx)
            }
          }
        }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(c.cardName) + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"), _c('div', {
          staticClass: "r gray"
        }, [_vm._v(_vm._s(_vm.g.Dict.CardType[c.cardType]))])])]
      })], 2)], 1), _vm._v(" "), _c('td', {
        staticClass: "mul-td"
      }, [_c('div', {
        staticClass: "mul-td"
      }, [_c('div', {
        staticClass: "mul-td mr-10"
      }, [_c('input-int', {
        staticClass: "int",
        model: {
          value: (r.rewardDays),
          callback: function($$v) {
            _vm.$set(r, "rewardDays", _vm._n($$v))
          },
          expression: "r.rewardDays"
        }
      }), _vm._v(" "), _c('span', [_vm._v("天")])], 1), _vm._v(" "), (r.cardType && r.cardType != 1) ? _c('div', {
        staticClass: "mul-td mr-10"
      }, [_c('input-num', {
        staticClass: "int",
        model: {
          value: (r.rewardValue),
          callback: function($$v) {
            _vm.$set(r, "rewardValue", _vm._n($$v))
          },
          expression: "r.rewardValue"
        }
      }), _vm._v(" "), (r.cardType == 2) ? _c('span', [_vm._v("次")]) : _vm._e(), _vm._v(" "), (r.cardType == 3) ? _c('span', [_vm._v("元")]) : _vm._e(), _vm._v(" "), (r.cardType == 4) ? _c('span', [_vm._v("分钟")]) : _vm._e()], 1) : _vm._e()]), _vm._v(" "), (cidx == item.awardList.length - 1) ? _c('i-button', {
        attrs: {
          "icon": "md-add"
        },
        on: {
          "click": function($event) {
            return _vm.addShareLine(idx)
          }
        }
      }) : _c('Icon', {
        staticClass: "clear-icon",
        attrs: {
          "type": "md-close-circle"
        },
        on: {
          "click": function($event) {
            return _vm.removeShareLine(r, idx, cidx)
          }
        }
      })], 1)])
    }) : _vm._e()], 2)])
  }), _vm._v(" "), _c('div', {
    staticClass: "reward-help"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("分销奖励说明：")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("会员分销成功后，系统将自动按照上述设置奖励会员卡给分销会员")]), _vm._v(" "), _c('li', [_vm._v("如果会员有此卡种，系统将会自动充值到会员的会员卡名下；否则，系统将自动创建奖励的会员卡")]), _vm._v(" "), _c('li', [_vm._v("更详细的说明，可点击查看 "), _c('a', {
    attrs: {
      "target": "_blank",
      "href": "//jzongguan.com/imglib/jzg-pc/share-items-ad.png"
    }
  }, [_vm._v("多级分销简介 →")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-submit center"
  }, [_c('i-button', {
    staticClass: "primary",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveShareList
    }
  }, [_vm._v("提交")]), _vm._v("\n\t\t\t\t\t\t \n\t\t\t\t\t\t"), _c('i-button', {
    on: {
      "click": _vm.closeRewardConfDlg
    }
  }, [_vm._v("关闭")])], 1)], 2), _vm._v(" "), _c('TabPane', {
    attrs: {
      "label": "会员积分奖励"
    }
  }, [_c('table', {
    staticClass: "mytbl points-set"
  }, [_c('tr', [_c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("分销级别")]), _vm._v(" "), _c('th', [_vm._v("会员积分奖励")])]), _vm._v(" "), _vm._l((_vm.shareList), function(item, idx) {
    return _c('tr', {
      key: idx
    }, [_c('td', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('td', [_c('input-int', {
      model: {
        value: (_vm.rewardPoints[idx]),
        callback: function($$v) {
          _vm.$set(_vm.rewardPoints, idx, $$v)
        },
        expression: "rewardPoints[idx]"
      }
    }), _vm._v(" 分")], 1)])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "form-submit center",
    staticStyle: {
      "border-top": "none"
    }
  }, [_c('i-button', {
    staticClass: "primary",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveShareItemRewardPoints
    }
  }, [_vm._v("提交")]), _vm._v("\n\t\t\t\t\t\t \n\t\t\t\t\t\t"), _c('i-button', {
    on: {
      "click": _vm.closeRewardConfDlg
    }
  }, [_vm._v("关闭")])], 1)])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": (_vm.dlg.receiverName ? ('『' + _vm.dlg.receiverName + '』') : '') + '分销项目领取详细',
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.dlg.viewShareItemReceiver),
      callback: function($$v) {
        _vm.$set(_vm.dlg, "viewShareItemReceiver", $$v)
      },
      expression: "dlg.viewShareItemReceiver"
    }
  }, [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("客户名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("性别")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("客户手机号")]), _vm._v(" "), _c('th', [_vm._v("领取时间")])]), _vm._v(" "), _vm._l((_vm.shareItemReceiverList), function(r, idx) {
    return _c('tr', {
      key: idx
    }, [_c('td', [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', [(r.isMember) ? _c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.queryNextInfo(r, false, 2)
        }
      }
    }, [_vm._v(_vm._s(r.custName))]) : [_vm._v(_vm._s(r.custName))]], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.Sex[r.custSex]))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.custPhone))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.createTime))])])
  })], 2), _vm._v(" "), (_vm.sirCount && _vm.sirCount > 0) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.sirCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryShareItemReceiver
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": '『' + _vm.secondDlg.receiverName + '』分销项目领取详细',
      "width": "800",
      "styles": {
        top: '20px'
      }
    },
    model: {
      value: (_vm.secondDlg.visible),
      callback: function($$v) {
        _vm.$set(_vm.secondDlg, "visible", $$v)
      },
      expression: "secondDlg.visible"
    }
  }, [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("客户名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("性别")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("客户手机号")]), _vm._v(" "), _c('th', [_vm._v("领取时间")])]), _vm._v(" "), _vm._l((_vm.secondDlg.tableList), function(r, idx) {
    return _c('tr', {
      key: idx
    }, [_c('td', [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', [(r.isMember) ? _c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.queryNextInfo(r, false, 3)
        }
      }
    }, [_vm._v(_vm._s(r.custName))]) : [_vm._v(_vm._s(r.custName))]], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.Sex[r.custSex]))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.custPhone))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.createTime))])])
  })], 2), _vm._v(" "), (_vm.secondDlg.totalCount && _vm.secondDlg.totalCount > 0) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.secondDlg.totalCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryNextInfoWithPage
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": '『' + _vm.thirdDlg.receiverName + '』分销项目领取详细',
      "width": "800",
      "styles": {
        top: '30px'
      }
    },
    model: {
      value: (_vm.thirdDlg.visible),
      callback: function($$v) {
        _vm.$set(_vm.thirdDlg, "visible", $$v)
      },
      expression: "thirdDlg.visible"
    }
  }, [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("客户名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("性别")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("客户手机号")]), _vm._v(" "), _c('th', [_vm._v("领取时间")])]), _vm._v(" "), _vm._l((_vm.thirdDlg.tableList), function(r, idx) {
    return _c('tr', {
      key: idx
    }, [_c('td', [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.custName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.Sex[r.custSex]))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.custPhone))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.createTime))])])
  })], 2), _vm._v(" "), (_vm.thirdDlg.totalCount && _vm.thirdDlg.totalCount > 0) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.thirdDlg.totalCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryNextInfoWithPage
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": (_vm.dlg.receiverName ? ('『' + _vm.dlg.receiverName + '』') : '') + '分销项目成交客户',
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.dlg.viewShareItemReceiverAsMemb),
      callback: function($$v) {
        _vm.$set(_vm.dlg, "viewShareItemReceiverAsMemb", $$v)
      },
      expression: "dlg.viewShareItemReceiverAsMemb"
    }
  }, [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("客户名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("性别")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("客户手机号")]), _vm._v(" "), _c('th', [_vm._v("领取时间")]), _vm._v(" "), _c('th', [_vm._v("成交时间")])]), _vm._v(" "), _vm._l((_vm.shareItemReceiverList), function(r, idx) {
    return _c('tr', {
      key: idx
    }, [_c('td', [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', [(r.isMember) ? _c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.queryNextInfo(r, true, 4)
        }
      }
    }, [_vm._v(_vm._s(r.custName))]) : [_vm._v(_vm._s(r.custName))]], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.Sex[r.custSex]))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.custPhone))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.memberCreateTime))])])
  })], 2), _vm._v(" "), (_vm.membCount && _vm.membCount > 0) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.membCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryShareItemReceiver
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": '『' + _vm.secondDealDlg.receiverName + '』分销项目成交详细',
      "width": "800",
      "styles": {
        top: '20px'
      }
    },
    model: {
      value: (_vm.secondDealDlg.visible),
      callback: function($$v) {
        _vm.$set(_vm.secondDealDlg, "visible", $$v)
      },
      expression: "secondDealDlg.visible"
    }
  }, [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("客户名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("性别")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("客户手机号")]), _vm._v(" "), _c('th', [_vm._v("领取时间")]), _vm._v(" "), _c('th', [_vm._v("成交时间")])]), _vm._v(" "), _vm._l((_vm.secondDealDlg.tableList), function(r, idx) {
    return _c('tr', {
      key: idx
    }, [_c('td', [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', [(r.isMember) ? _c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.queryNextInfo(r, true, 5)
        }
      }
    }, [_vm._v(_vm._s(r.custName))]) : [_vm._v(_vm._s(r.custName))]], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.Sex[r.custSex]))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.custPhone))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.memberCreateTime))])])
  })], 2), _vm._v(" "), (_vm.secondDealDlg.totalCount && _vm.secondDealDlg.totalCount > 0) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.secondDealDlg.totalCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryNextInfoWithPage
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": '『' + _vm.thirdDealDlg.receiverName + '』分销项目成交详细',
      "width": "800",
      "styles": {
        top: '30px'
      }
    },
    model: {
      value: (_vm.thirdDealDlg.visible),
      callback: function($$v) {
        _vm.$set(_vm.thirdDealDlg, "visible", $$v)
      },
      expression: "thirdDealDlg.visible"
    }
  }, [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("客户名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("性别")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("客户手机号")]), _vm._v(" "), _c('th', [_vm._v("领取时间")]), _vm._v(" "), _c('th', [_vm._v("成交时间")])]), _vm._v(" "), _vm._l((_vm.thirdDealDlg.tableList), function(r, idx) {
    return _c('tr', {
      key: idx
    }, [_c('td', [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.custName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.Sex[r.custSex]))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.custPhone))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.memberCreateTime))])])
  })], 2), _vm._v(" "), (_vm.thirdDealDlg.totalCount && _vm.thirdDealDlg.totalCount > 0) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.thirdDealDlg.totalCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryNextInfoWithPage
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "分销入口图片设置",
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.dlg.shareEntryImg),
      callback: function($$v) {
        _vm.$set(_vm.dlg, "shareEntryImg", $$v)
      },
      expression: "dlg.shareEntryImg"
    }
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleEntryImgUploadSuccess,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultList
    }
  }, [_c('i-button', {
    staticClass: "input-s",
    attrs: {
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传图片")])], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding-top": "30px",
      "color": "orangered"
    }
  }, [_vm._v("\n\t\t\t\t备注：此图片将显示在会员和员工手机版首页，点击此图片即可进入分销项目页面。\n\t\t\t")]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "领取客户查询",
      "width": "1000",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.dlg.receivedCustQuery),
      callback: function($$v) {
        _vm.$set(_vm.dlg, "receivedCustQuery", $$v)
      },
      expression: "dlg.receivedCustQuery"
    }
  }, [_c('i-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "text",
      "placeholder": "客户姓名或手机号"
    },
    model: {
      value: (_vm.query.receiverFlag),
      callback: function($$v) {
        _vm.$set(_vm.query, "receiverFlag", $$v)
      },
      expression: "query.receiverFlag"
    }
  }), _vm._v("\n\t\t\t  "), _c('i-button', {
    on: {
      "click": function($event) {
        return _vm.queryShareItemReceiverByCust(null)
      }
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('div', {
    staticClass: "mytbl mt15"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "130"
    }
  }, [_vm._v("分销人")]), _vm._v(" "), _c('th', [_vm._v("分销项目")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("客户姓名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("客户手机号")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("领取时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("成交会员时间")])]), _vm._v(" "), _vm._l((_vm.shareItemReceiverListByCust), function(r) {
    return _c('tr', [_c('td', [(r.sharerType == 1) ? [_vm._v("会员 | " + _vm._s(r.sharerMemberName))] : (r.sharerType == 2) ? [_vm._v("员工 | " + _vm._s(r.sharerStaffName))] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.itemName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.custName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.custPhone))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.memberCreateTime))])])
  })], 2)]), _vm._v(" "), (_vm.shareItemReceiverCntByCust) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.shareItemReceiverCntByCust,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryShareItemReceiverByCust
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.shareItemReceiverListByCust && !_vm.shareItemReceiverListByCust.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n\t\t\t\t暂无数据\n\t\t\t")]) : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("分销项目")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "180"
    }
  }, [_vm._v("分销有效期")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("浏览数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("领取数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("领取率")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("成交数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("成交率 "), _c('a', {
    staticClass: "th-help",
    attrs: {
      "title": "成交数 / 领取数"
    }
  }, [_vm._v("?")])]), _vm._v(" "), _c('th', [_vm._v("操作")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("成交率 "), _c('a', {
    staticClass: "th-help",
    attrs: {
      "title": "成交数 / 领取数"
    }
  }, [_vm._v("?")])])
}]}

/***/ }),

/***/ 2457:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/auto-renew"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), _c('section', {
    staticStyle: {
      "width": "100%"
    }
  }, [_vm._m(0), _vm._v(" "), _c('i-form', {
    ref: "options",
    staticClass: "myform",
    staticStyle: {
      "width": "700px"
    },
    attrs: {
      "model": _vm.options,
      "label-width": 90
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "name",
      "label": "会员卡",
      "required": ""
    }
  }, [_c('i-select', {
    staticStyle: {
      "width": "330px"
    },
    on: {
      "on-change": _vm.cardChange
    },
    model: {
      value: (_vm.options.cardId),
      callback: function($$v) {
        _vm.$set(_vm.options, "cardId", $$v)
      },
      expression: "options.cardId"
    }
  }, [_vm._l((_vm.cardList), function(c) {
    return [_c('i-option', {
      key: c.cardId,
      attrs: {
        "value": c.cardId,
        "label": c.cardName
      }
    }, [_vm._v("\n                  " + _vm._s(c.cardName) + "\n                  "), _c('div', {
      staticClass: "r gray"
    }, [_vm._v(_vm._s(_vm.g.Dict.CardType[c.cardType]))])])]
  })], 2)], 1), _vm._v(" "), (_vm.cardType != 1) ? [(_vm.cardType == 3) ? _c('form-item', {
    attrs: {
      "prop": "usableAmount",
      "label": '充值金额',
      "required": ""
    }
  }, [_c('i-input', {
    staticStyle: {
      "width": "330px",
      "display": "inline-block"
    },
    attrs: {
      "type": "text",
      "placeholder": "请输入充值金额"
    },
    model: {
      value: (_vm.options.usableAmount),
      callback: function($$v) {
        _vm.$set(_vm.options, "usableAmount", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "options.usableAmount"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v(_vm._s(_vm.g.Dict.CardUnitName[_vm.cardType] || '元'))])], 1) : _c('form-item', {
    attrs: {
      "prop": "usableTimes",
      "label": '充值' + (_vm.g.Dict.CardTypeSuffix[_vm.cardType] || '次数'),
      "required": ""
    }
  }, [_c('i-input', {
    staticStyle: {
      "width": "330px",
      "display": "inline-block"
    },
    attrs: {
      "type": "text",
      "placeholder": "请输入充值次数/分钟"
    },
    model: {
      value: (_vm.options.usableTimes),
      callback: function($$v) {
        _vm.$set(_vm.options, "usableTimes", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "options.usableTimes"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v(_vm._s(_vm.g.Dict.CardUnitName[_vm.cardType] || '次'))])], 1)] : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "usableDays",
      "label": "期限",
      "required": ""
    }
  }, [_c('i-input', {
    staticStyle: {
      "width": "330px",
      "display": "inline-block"
    },
    attrs: {
      "type": "text",
      "placeholder": "请输入天数"
    },
    model: {
      value: (_vm.options.usableDays),
      callback: function($$v) {
        _vm.$set(_vm.options, "usableDays", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "options.usableDays"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("天")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "paymentAmount",
      "label": "首次费用",
      "required": ""
    }
  }, [_c('i-input', {
    staticStyle: {
      "width": "330px",
      "display": "inline-block"
    },
    attrs: {
      "type": "text",
      "placeholder": "请输入首次购买的金额"
    },
    model: {
      value: (_vm.options.paymentAmount),
      callback: function($$v) {
        _vm.$set(_vm.options, "paymentAmount", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "options.paymentAmount"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "cardLimitBeginDays",
      "label": "最迟开卡天数",
      "required": ""
    }
  }, [_c('i-input', {
    staticStyle: {
      "width": "330px",
      "display": "inline-block"
    },
    attrs: {
      "type": "text",
      "placeholder": "请输入最迟开卡天数"
    },
    model: {
      value: (_vm.options.cardLimitBeginDays),
      callback: function($$v) {
        _vm.$set(_vm.options, "cardLimitBeginDays", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "options.cardLimitBeginDays"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("天")])], 1)], 2), _vm._v(" "), _c('div', {
    staticClass: "myform mrb",
    staticStyle: {
      "width": "100%"
    }
  }, [_c('div', {
    staticClass: "tit",
    staticStyle: {
      "margin-bottom": "0"
    }
  }, [_vm._v("续费规则")]), _vm._v(" "), _vm._l((_vm.ruleList), function(item, idx) {
    return _c('div', {
      key: idx,
      staticClass: "tb-tr"
    }, [_c('b', {
      staticClass: "tr-tag"
    }, [_vm._v("\n              第" + _vm._s(idx + 1) + "期\n            ")]), _vm._v(" "), _vm._l((item.settingList), function(r, cidx) {
      return [_c('div', {
        key: cidx,
        staticClass: "mul-td flex-center"
      }, [_c('span', [_vm._v("距离到期日")]), _vm._v(" "), _c('input-int', {
        staticClass: "int",
        model: {
          value: (r.beginDay),
          callback: function($$v) {
            _vm.$set(r, "beginDay", _vm._n($$v))
          },
          expression: "r.beginDay"
        }
      }), _vm._v("\n\t              天"), _c('span', {
        staticClass: "spt"
      }, [_vm._v("~")]), _vm._v(" "), _c('input-int', {
        staticClass: "int",
        model: {
          value: (r.endDay),
          callback: function($$v) {
            _vm.$set(r, "endDay", _vm._n($$v))
          },
          expression: "r.endDay"
        }
      }), _vm._v(" "), _c('span', [_vm._v("天，续费")]), _vm._v(" "), _c('input-num', {
        staticClass: "int",
        attrs: {
          "min": 0
        },
        model: {
          value: (r.paymentAmount),
          callback: function($$v) {
            _vm.$set(r, "paymentAmount", _vm._n($$v))
          },
          expression: "r.paymentAmount"
        }
      }), _vm._v(" "), _c('span', [_vm._v("元")]), _vm._v(" "), _c('Icon', {
        staticClass: "clear-icon",
        attrs: {
          "type": "md-close-circle"
        },
        on: {
          "click": function($event) {
            return _vm.delSettingLine(idx, cidx)
          }
        }
      }), _vm._v(" "), (cidx == item.settingList.length - 1) ? _c('i-button', {
        attrs: {
          "icon": "md-add"
        },
        on: {
          "click": function($event) {
            return _vm.addSettingLine(idx)
          }
        }
      }) : _vm._e()], 1)]
    }), _vm._v(" "), _c('div', {
      staticClass: "btn-line"
    }, [_c('i-button', {
      on: {
        "click": function($event) {
          return _vm.delRuleItem(idx)
        }
      }
    }, [_vm._v("删除本期")]), _vm._v(" "), (_vm.ruleList.length - 1 == idx) ? _c('i-button', {
      on: {
        "click": function($event) {
          return _vm.addRuleItem(idx)
        }
      }
    }, [_vm._v("添加下期")]) : _vm._e()], 1)], 2)
  }), _vm._v(" "), _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "border": "none"
    }
  }, [_c('i-button', {
    staticClass: "primary",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.renewalSave
    }
  }, [_vm._v("提交")])], 1)], 2)], 1)], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("添加自助续费卡")])])
}]}

/***/ }),

/***/ 2474:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/coupon-list"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "coupon-share-link g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "query-section row-between"
  }, [_c('ul', {
    staticClass: "query-cond-inline"
  }, [_c('li', {
    staticClass: "item"
  }, [_c('i-input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "clearable": "",
      "placeholder": "请复制链接"
    },
    model: {
      value: (_vm.query.linkId),
      callback: function($$v) {
        _vm.$set(_vm.query, "linkId", $$v)
      },
      expression: "query.linkId"
    }
  })], 1), _vm._v(" "), (_vm.shopOwnerRole) ? _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "250px"
    },
    attrs: {
      "filterable": "",
      "clearable": "",
      "placeholder": "选择分享人"
    },
    model: {
      value: (_vm.query.staffId),
      callback: function($$v) {
        _vm.$set(_vm.query, "staffId", $$v)
      },
      expression: "query.staffId"
    }
  }, _vm._l((_vm.staffList), function(item) {
    return _c('i-option', {
      key: item.staffId,
      attrs: {
        "value": item.staffId,
        "label": item.name
      }
    }, [_c('div', {
      staticClass: "row-sb"
    }, [_c('span', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', {
      staticClass: "gray"
    }, [_vm._v(_vm._s(item.roleNameList.join('/')))])])])
  }), 1)], 1) : _vm._e(), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "250px"
    },
    attrs: {
      "filterable": "",
      "clearable": "",
      "placeholder": "选择优惠券"
    },
    model: {
      value: (_vm.query.couponId),
      callback: function($$v) {
        _vm.$set(_vm.query, "couponId", $$v)
      },
      expression: "query.couponId"
    }
  }, _vm._l((_vm.couponList), function(c) {
    return _c('i-option', {
      key: c.couponId,
      attrs: {
        "value": c.couponId,
        "label": c.title
      }
    }, [_c('div', {
      staticClass: "row-sb"
    }, [_c('span', [_vm._v(_vm._s(c.title))]), _vm._v(" "), _c('span', {
      staticClass: "gray"
    }, [_vm._v(_vm._s(_vm.g.Dict.CouponTypes[c.couponType]))])])])
  }), 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item opt-btns"
  }, [_c('i-button', {
    staticStyle: {
      "margin-right": "10px",
      "width": "100px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.queryCouponShareLink(null)
      }
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.resetQuery
    }
  }, [_vm._v("重置")])], 1)])]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.couponShareList), function(c, idx) {
    return _c('tr', {
      key: c.id
    }, [_c('td', [_vm._v("\n                    " + _vm._s(c.title)), _c('span', {
      staticClass: "gray"
    }, [_vm._v("（" + _vm._s(_vm.g.Dict.CouponTypes[c.couponType]) + "）")])]), _vm._v(" "), _c('td', [(c.couponType === 1) ? _c('span', [_c('b', [_vm._v(_vm._s(c.value))]), _vm._v(" 元")]) : _vm._e(), _vm._v(" "), (c.couponType === 2) ? _c('span', [_c('b', [_vm._v(_vm._s(c.value))]), _vm._v(" 折")]) : _vm._e(), _vm._v(" "), (c.couponType === 3) ? _c('span', [_vm._v("满 "), _c('b', [_vm._v(_vm._s(c.preValue))]), _vm._v(" 减 "), _c('b', [_vm._v(_vm._s(c.value))]), _vm._v(" 元")]) : _vm._e()]), _vm._v(" "), _c('td', [(c.receiverType === 1) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.viewCust(c.receiverId, c.custName)
        }
      }
    }, [_vm._v(_vm._s(c.custName))]) : (c.receiverType === 2) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.viewMember(c.receiverId)
        }
      }
    }, [_vm._v(_vm._s(c.memberName))]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.GuestTypes[c.receiverType]))]), _vm._v(" "), _c('td', [(c.receiverType === 1) ? [_vm._v(_vm._s(c.custPhone))] : (c.receiverType === 2) ? [_vm._v(_vm._s(c.memberPhone))] : _vm._e()], 2), _vm._v(" "), _c('td', {
      staticStyle: {
        "max-width": "300px"
      }
    }, [_c('div', {
      staticClass: "link-value",
      on: {
        "click": function($event) {
          return _vm.g.Util.copyText($event, c.shareLinkUrl)
        }
      }
    }, [_c('div', {
      staticClass: "link"
    }, [_vm._v(_vm._s(c.shareLinkUrl))]), _vm._v(" "), _c('span', {
      staticClass: "copy-tip gray"
    }, [_vm._v("复制")])])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.staffName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.createTime) + " ")])])
  })], 2), _vm._v(" "), (!_vm.couponShareList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.totalCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryCouponShareLink
    }
  })], 1)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "优惠券二维码与链接",
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.couponLinkAndQRCodeDlg),
      callback: function($$v) {
        _vm.couponLinkAndQRCodeDlg = $$v
      },
      expression: "couponLinkAndQRCodeDlg"
    }
  }, [(_vm.couponLinkAndQRCodeDlg && _vm.selectCoupon) ? [_c('table', {
    staticClass: "prdlink"
  }, [_c('tr', [_c('td', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("优惠券名称：")]), _c('td', [_c('h3', [_vm._v(_vm._s(_vm.selectCoupon.title))])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("优惠券二维码：")]), _vm._v(" "), _c('td', [_c('img', {
    staticClass: "qrcode",
    attrs: {
      "src": _vm.g.Conf.QR_CODE_URL + encodeURIComponent(_vm.selectCouponUrl)
    }
  })])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("优惠券链接：")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "link-value",
    on: {
      "click": function($event) {
        return _vm.g.Util.copyText($event, _vm.selectCouponUrl)
      }
    }
  }, [_c('div', {
    staticClass: "link"
  }, [_vm._v(_vm._s(_vm.selectCouponUrl))]), _vm._v(" "), _c('span', {
    staticClass: "copy-tip gray"
  }, [_vm._v("复制")])])])])])] : _vm._e(), _vm._v(" "), _c('div', {
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
        _vm.couponLinkAndQRCodeDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 2)], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员信息",
      "width": "780",
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
      "member-id": _vm.memberId
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": '客户信息 - ' + _vm.custName,
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.viewCustDlg),
      callback: function($$v) {
        _vm.viewCustDlg = $$v
      },
      expression: "viewCustDlg"
    }
  }, [(_vm.viewCustDlg) ? [_c('cust-detail', {
    attrs: {
      "cust-id": _vm.custId,
      "can-create": false
    }
  })] : _vm._e(), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("优惠券名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "135"
    }
  }, [_vm._v("优惠券面额")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("领取人姓名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("领取人类型")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("领取人手机号")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "300"
    }
  }, [_vm._v("分享链接")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("分享人姓名")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("领取时间")])])
}]}

/***/ }),

/***/ 2483:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fit-entry-ticket"
  }, [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/fit-entry-ticket"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('Tabs', {
    attrs: {
      "animated": false
    }
  }, [_c('TabPane', {
    attrs: {
      "label": "散客入场券"
    }
  }, [_c('section', [(_vm.editable) ? _c('div', {
    staticClass: "tbl-header"
  }, [_c('div', [(_vm.hasMchId) ? _c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": function($event) {
        return _vm.$router.push('/market/fit-entry-ticket-create')
      }
    }
  }, [_vm._v("新增入场券")]) : (_vm.hasMchId === false) ? _c('span', {
    staticClass: "orangered"
  }, [_c('i', {
    staticClass: "iconfont icon-alert1 biggest"
  }), _vm._v("\n                贵店尚未开通在线支付，尚无法使用 （"), _c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/online-pay-apply')
      }
    }
  }, [_vm._v("去申请在线支付 →")]), _vm._v("）\n              ")]) : _vm._e()], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_c('tr', [_c('th', [_vm._v("商品名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("价格")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("类型")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("有效期")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "380"
    }
  }, [_vm._v("购买期限")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("已购买数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("创建时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("操作")])]), _vm._v(" "), _vm._l((_vm.productList), function(p) {
    return _c('tr', {
      key: p.productId
    }, [_c('td', [_vm._v(_vm._s(p.productTitle))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(p.price))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.consumerTypeMap[p.consumerType]))]), _vm._v(" "), _c('td', [(p.usableDays) ? _c('span', [_vm._v(_vm._s(p.usableDays) + "天")]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.beginTime) + " ~ " + _vm._s(p.endTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.orderCnt))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.createTime))]), _vm._v(" "), _c('td', [(_vm.editable) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.$router.push('/market/fit-entry-ticket-edit/' + p.productId)
        }
      }
    }, [_vm._v("详情")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openPrdLinkDlg(p)
        }
      }
    }, [_vm._v("二维码")])]), _vm._v(" "), (!p.orderCnt) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delProduct(p.productId)
        }
      }
    }, [_vm._v("删除")])]) : _vm._e()]) : _vm._e()])])
  })], 2)]), _vm._v(" "), (_vm.productList && _vm.productList.length) ? _c('div', {
    staticClass: "tbl-footer center"
  }, [_vm._v("共 " + _vm._s(_vm.productList.length) + " 条记录")]) : _vm._e(), _vm._v(" "), (_vm.productList && !_vm.productList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e(), _vm._v(" "), (_vm.productList && _vm.count > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.count,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryTicketProductList
    }
  })], 1) : _vm._e()])]), _vm._v(" "), _c('TabPane', {
    attrs: {
      "label": "购买记录"
    }
  }, [_c('entryTicketBuyList', {
    attrs: {
      "productList": _vm.productList
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "散客入场券二维码与链接",
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.prdLinkDlg),
      callback: function($$v) {
        _vm.prdLinkDlg = $$v
      },
      expression: "prdLinkDlg"
    }
  }, [(_vm.prdLinkDlg && _vm.selectPrd) ? [_c('table', {
    staticClass: "prdlink"
  }, [_c('tr', [_c('td', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("商品名称：")]), _vm._v(" "), _c('td', [_c('h3', [_vm._v(_vm._s(_vm.selectPrd.productTitle))])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("入场券二维码：")]), _vm._v(" "), _c('td', [_c('img', {
    staticClass: "qrcode",
    attrs: {
      "src": _vm.g.Conf.QR_CODE_URL + encodeURIComponent(_vm.selectPrdUrl)
    }
  })])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("入场券链接：")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "link"
  }, [_vm._v(_vm._s(_vm.selectPrdUrl))])])])])] : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.createEntryTicketImg
    }
  }, [_vm._v("生成图片")]), _vm._v(" "), _c('i-button', {
    staticStyle: {
      "width": "100px"
    },
    on: {
      "click": function($event) {
        _vm.prdLinkDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 2), _vm._v(" "), _c('modal', {
    staticClass: "entry-ticket-modal",
    attrs: {
      "title": "散客入场券",
      "width": "500",
      "footer-hide": "",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.entryTicketImgDlg),
      callback: function($$v) {
        _vm.entryTicketImgDlg = $$v
      },
      expression: "entryTicketImgDlg"
    }
  }, [(_vm.entryTicketImgDlg) ? _c('div', {
    staticClass: "entry-ticket-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.entryTicketImgUrl,
      "alt": "散客入场券"
    }
  })]) : _vm._e()])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2498:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/seckill-product-list"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', {
    staticStyle: {
      "width": "100%"
    }
  }, [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("秒杀商品详情")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('a', {
    staticClass: "gray",
    on: {
      "click": function($event) {
        return _vm.$router.push('/market/seckill-product-list')
      }
    }
  }, [_vm._v("返回 →")])])]), _vm._v(" "), _c('i-form', {
    ref: "product",
    staticClass: "myform",
    staticStyle: {
      "width": "900px"
    },
    attrs: {
      "model": _vm.product,
      "rules": _vm.formRule,
      "label-width": 100
    }
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("基本信息")]), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "productTitle",
      "label": "商品名称"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.product.productTitle),
      callback: function($$v) {
        _vm.$set(_vm.product, "productTitle", $$v)
      },
      expression: "product.productTitle"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "cardId",
      "label": "会员卡选择"
    }
  }, [_c('i-select', {
    attrs: {
      "filterable": ""
    },
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
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("无")])]), _vm._v(" "), _vm._l((_vm.cardList), function(c) {
    return _c('i-option', {
      key: c.cardId,
      attrs: {
        "value": c.cardId
      }
    }, [_vm._v(_vm._s(c.cardName) + " "), (c.defaultAmount) ? _c('span', {
      staticClass: "gray l10"
    }, [_vm._v("（默认金额：￥" + _vm._s(c.defaultAmount) + "）")]) : _vm._e()])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "block-tips"
  }, [_c('b', [_vm._v("必读说明")]), _vm._v("： 如果秒杀商品是会员卡，客户购买后，相当于在线购卡。"), _c('br'), _vm._v("( 如果是非会员将自动创建会员并添加会员卡，如果已经是会员，则自动在其名下添加此会员卡 )")])], 1), _vm._v(" "), (_vm.product.cardId) ? [(_vm.product.cardType === 2) ? _c('form-item', {
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
  }, [_vm._v("元")])], 1) : _vm._e(), _vm._v(" "), _c('form-item', {
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
  }, [_vm._v("天")])], 1), _vm._v(" "), (_vm.product.cardType === 4) ? _c('form-item', {
    attrs: {
      "prop": "cardTimes2",
      "label": "使用时间",
      "required": ""
    }
  }, [_c('input-int', {
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
  }, [_vm._v("分钟")])], 1) : _vm._e(), _vm._v(" "), (_vm.product.cardDays) ? _c('form-item', {
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
  }, [_vm._v("\n\t\t\t\t\t\t\t指会员在线购买会员卡后，最迟多少天内要使用此卡，否则按照最迟开卡日期为起始日期\n\t\t\t\t\t\t")])], 1) : _vm._e()] : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "商品图片",
      "required": ""
    }
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccessForProduct,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultLisForProduct
    }
  }, [_c('i-button', {
    attrs: {
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传秒杀商品主图")])], 1), _vm._v(" "), _c('p'), _vm._v(" "), _c('img-upload', {
    attrs: {
      "multiple": true,
      "removeable": true,
      "max-count": 10,
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleMorePisUploadSuccess,
      "on-remove": _vm.handleImgRemove,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultMorePics
    }
  }, [_c('i-button', {
    attrs: {
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传更多秒杀图片")]), _vm._v("\n\t\t\t\t\t\t  "), _c('span', {
    staticClass: "gray"
  }, [_vm._v("（可选，最多可上传 "), _c('b', [_vm._v("10")]), _vm._v(" 张）")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "consumerType",
      "label": "参与人类型",
      "required": ""
    }
  }, [_c('radio-group', {
    model: {
      value: (_vm.product.consumerType),
      callback: function($$v) {
        _vm.$set(_vm.product, "consumerType", _vm._n($$v))
      },
      expression: "product.consumerType"
    }
  }, [_c('radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("不限")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("访客")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("会员")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "秒杀期限",
      "required": ""
    }
  }, [_c('date-picker', {
    staticClass: "input-date",
    attrs: {
      "type": "datetime",
      "placeholder": "开始时间"
    },
    model: {
      value: (_vm.product.beginTime),
      callback: function($$v) {
        _vm.$set(_vm.product, "beginTime", $$v)
      },
      expression: "product.beginTime"
    }
  }), _vm._v("\n\t\t\t\t\t~\n\t\t\t\t\t"), _c('date-picker', {
    staticClass: "input-date",
    attrs: {
      "type": "datetime",
      "placeholder": "结束时间"
    },
    model: {
      value: (_vm.product.endTime),
      callback: function($$v) {
        _vm.$set(_vm.product, "endTime", $$v)
      },
      expression: "product.endTime"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor bigger orange"
  }), _vm._v(" 客户只能在此时间内参与秒杀")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "originalPrice",
      "label": "商品原价"
    }
  }, [_c('input-num', {
    staticClass: "input-s",
    model: {
      value: (_vm.product.originalPrice),
      callback: function($$v) {
        _vm.$set(_vm.product, "originalPrice", _vm._n($$v))
      },
      expression: "product.originalPrice"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "price",
      "label": "商品售价"
    }
  }, [_c('input-num', {
    staticClass: "input-s",
    model: {
      value: (_vm.product.price),
      callback: function($$v) {
        _vm.$set(_vm.product, "price", _vm._n($$v))
      },
      expression: "product.price"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")]), _vm._v(" "), _c('span', {
    staticClass: "tips l10"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor bigger orange"
  }), _vm._v(" 客户实际购买的价格")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "stock",
      "label": "商品库存"
    }
  }, [_c('input-num', {
    staticClass: "input-s",
    model: {
      value: (_vm.product.stock),
      callback: function($$v) {
        _vm.$set(_vm.product, "stock", _vm._n($$v))
      },
      expression: "product.stock"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "productDesc",
      "label": "商品描述"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 10
    },
    model: {
      value: (_vm.product.productDesc),
      callback: function($$v) {
        _vm.$set(_vm.product, "productDesc", $$v)
      },
      expression: "product.productDesc"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "tit mt20"
  }, [_vm._v("分享设置\n\t\t\t\t\t"), _c('span', {
    staticClass: "orange"
  }, [_vm._v("（参与人员通过微信分享时的页面显示内容）")])]), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "shareTitle",
      "label": "分享标题"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": "分享时显示的标题，如果为空，则显示商品标题"
    },
    model: {
      value: (_vm.product.shareTitle),
      callback: function($$v) {
        _vm.$set(_vm.product, "shareTitle", $$v)
      },
      expression: "product.shareTitle"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "sharePic",
      "label": "分享图片"
    }
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccessForShare,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultListForShare
    }
  }, [_c('i-button', {
    attrs: {
      "size": "small",
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传图片")]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（如果不设置，则默认为商品图片）")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "shareDesc",
      "label": "分享简介"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 2,
      "placeholder": "分享时显示的内容简介，如果为空，则显示商品标题"
    },
    model: {
      value: (_vm.product.shareDesc),
      callback: function($$v) {
        _vm.$set(_vm.product, "shareDesc", $$v)
      },
      expression: "product.shareDesc"
    }
  })], 1)], 2), _vm._v(" "), (_vm.marketEditable) ? _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "100px"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.saveSeckillProduct()
      }
    }
  }, [_vm._v("提交")]), _vm._v("\n\t\t\t\t \n\t\t\t\t"), (_vm.productId && !_vm.product.itemCnt) ? _c('i-button', {
    on: {
      "click": function($event) {
        return _vm.delSeckillProduct()
      }
    }
  }, [_vm._v("删除")]) : _vm._e()], 1) : _vm._e()], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2506:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/groupbuy-product"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "query-section"
  }, [_c('radio-group', {
    staticClass: "status-list",
    attrs: {
      "type": "button"
    },
    on: {
      "on-change": function($event) {
        return _vm.queryGroupbuyTeamList(null)
      }
    },
    model: {
      value: (_vm.query.teamStatus),
      callback: function($$v) {
        _vm.$set(_vm.query, "teamStatus", _vm._n($$v))
      },
      expression: "query.teamStatus"
    }
  }, [_c('radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("未成团（" + _vm._s(_vm.cntStat.unfinished) + "）")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("已成团（" + _vm._s(_vm.cntStat.finished) + "）")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("已取消（" + _vm._s(_vm.cntStat.canceled) + "）")])], 1), _vm._v(" "), _c('div', {
    staticClass: "date-query"
  }, [_c('DatePicker', {
    staticClass: "date",
    attrs: {
      "type": "date",
      "placeholder": "开始日期"
    },
    model: {
      value: (_vm.query.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.query, "beginDate", $$v)
      },
      expression: "query.beginDate"
    }
  }), _vm._v("\n\t\t\t\t\t~\n\t\t\t\t\t"), _c('DatePicker', {
    staticClass: "date",
    attrs: {
      "type": "date",
      "placeholder": "结束日期"
    },
    model: {
      value: (_vm.query.endDate),
      callback: function($$v) {
        _vm.$set(_vm.query, "endDate", $$v)
      },
      expression: "query.endDate"
    }
  }), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "ios-search",
      "iconClass": "biggest"
    },
    on: {
      "click": function($event) {
        return _vm.queryGroupbuyTeamList(null)
      }
    }
  }, [_vm._v("查询")]), _vm._v(" "), (_vm.query.teamStatus === 2) ? _c('span', {
    staticClass: "l15"
  }, [_c('checkbox', {
    on: {
      "on-change": function($event) {
        return _vm.queryGroupbuyTeamList(null)
      }
    },
    model: {
      value: (_vm.query.notRefund),
      callback: function($$v) {
        _vm.$set(_vm.query, "notRefund", $$v)
      },
      expression: "query.notRefund"
    }
  }, [_vm._v("未退款")])], 1) : _vm._e()], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_c('tr', [_c('th', [_vm._v("商品名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "180"
    }
  }, [_vm._v("会员卡")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("原价")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("拼团价")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("预付款")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "60"
    }
  }, [_vm._v("状态")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("开团人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "145"
    }
  }, [_vm._v("开团时间\n\t\t\t\t\t\t\t"), _c('a', {
    staticClass: "order-type",
    on: {
      "click": _vm.changeGtOrderType
    }
  }, [(_vm.query.orderType === 1) ? _c('Icon', {
    attrs: {
      "type": "md-arrow-down"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.query.orderType === 2) ? _c('Icon', {
    attrs: {
      "type": "md-arrow-up"
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "180"
    }
  }, [_vm._v("结束时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "72"
    }
  }, [_vm._v("成团人数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "72"
    }
  }, [_vm._v("参与人数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "170"
    }
  }, [_vm._v("操作")])]), _vm._v(" "), _vm._l((_vm.groupbuyTeamList), function(p) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(p.productTitle))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.cardName))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(p.originalPrice))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(p.price))]), _vm._v(" "), _c('td', {
      staticClass: "green"
    }, [_vm._v("￥" + _vm._s(p.payment))]), _vm._v(" "), _c('td', [(p.refundStatus === 1) ? [_vm._v("已退款")] : [_vm._v(_vm._s(_vm.g.Dict.GroupbuyTeamStatus[p.status]))]], 2), _vm._v(" "), _c('td', [(p.creatorType === 1) ? [_vm._v(_vm._s(p.custName))] : [_vm._v(_vm._s(p.memberName))]], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDateTime(p.createTime)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDateTime(p.endTime)) + "\n\t\t\t\t\t\t\t"), (_vm.query.teamStatus !== 1) ? _c('a', {
      staticClass: "l5",
      on: {
        "click": function($event) {
          return _vm.openChangeGroupbuyEndTimeDlg(p.gtId, p.endTime)
        }
      }
    }, [_vm._v("[修改]")]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.limitMembers))]), _vm._v(" "), _c('td', {
      staticClass: "orangered"
    }, [_vm._v(_vm._s(p.teamMembers))]), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.viewTeamOrder(p.gtId)
        }
      }
    }, [_vm._v("查看订单")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openGtLinkDlg(p)
        }
      }
    }, [_vm._v("二维码")])]), _vm._v(" "), (p.refundStatus === 0 && p.status === 2) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.refundGroupbuyTeam(p.gtId)
        }
      }
    }, [_vm._v("退款")])]) : _vm._e()])])])
  })], 2), _vm._v(" "), (_vm.totalCount && _vm.totalCount > 0) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.totalCount,
      "page-size": _vm.g.Conf.PAGE_SIZE,
      "current": _vm.queryPage ? _vm.queryPage : 1,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryGroupbuyTeamList
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.groupbuyTeamList && _vm.groupbuyTeamList.length === 0) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("暂无数据")]) : _vm._e()])])], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "拼团订单",
      "width": "800",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键可关闭窗口"
    },
    model: {
      value: (_vm.orderDlg),
      callback: function($$v) {
        _vm.orderDlg = $$v
      },
      expression: "orderDlg"
    }
  }, [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("订单状态")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("拼团人姓名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("拼团人手机")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("支付金额")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("订单时间 ↓")]), _vm._v(" "), _c('th', [_vm._v("支付时间")])]), _vm._v(" "), _vm._l((_vm.orderList), function(o) {
    return _c('tr', [_c('td', [(!o.refundStatus) ? _c('span', {
      class: {
        'orange': o.status === 0,
        'green': o.status === 9
      }
    }, [_vm._v(_vm._s(_vm.g.Dict.OrderStatus[o.status]))]) : (o.refundStatus === 1) ? _c('span', {
      staticClass: "green"
    }, [_vm._v("已退款")]) : _c('div', [_c('span', {
      staticClass: "red"
    }, [_vm._v("退款失败：")]), _c('br'), _vm._v(_vm._s(_vm.g.Dict.OrderRefundStatus[o.refundStatus]))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(o.custName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(o.custPhone))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(o.amount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDateTime(o.createTime)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(o.transTime))])])
  })], 2)]), _vm._v(" "), (_vm.orderCount && _vm.orderCount > 0) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.orderCount,
      "page-size": _vm.g.Conf.PAGE_SIZE,
      "current": _vm.orderPage ? _vm.orderPage : 1,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryOrder
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.orderList && _vm.orderList.length === 0) ? _c('div', {
    staticClass: "none p15"
  }, [_vm._v("暂无数据")]) : _vm._e()]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "拼团二维码与链接",
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.gtLinkDlg),
      callback: function($$v) {
        _vm.gtLinkDlg = $$v
      },
      expression: "gtLinkDlg"
    }
  }, [(_vm.gtLinkDlg && _vm.selectGt) ? [_c('table', {
    staticClass: "prdlink"
  }, [_c('tr', [_c('td', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("商品名称：")]), _c('td', [_c('h3', [_vm._v(_vm._s(_vm.selectGt.productTitle))])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("拼团二维码：")]), _vm._v(" "), _c('td', [_c('img', {
    staticClass: "qrcode",
    attrs: {
      "src": _vm.g.Conf.QR_CODE_URL + encodeURIComponent(_vm.selectGtUrl)
    }
  })])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("拼团链接：")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "link"
  }, [_vm._v(_vm._s(_vm.selectGtUrl))])])])])] : _vm._e()], 2), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "修改结束时间",
      "width": "600",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.changeEndTimeDlg),
      callback: function($$v) {
        _vm.changeEndTimeDlg = $$v
      },
      expression: "changeEndTimeDlg"
    }
  }, [_c('div', {
    staticClass: "center p10"
  }, [_c('date-picker', {
    staticClass: "input-s",
    attrs: {
      "type": "datetime",
      "placeholder": "结束时间"
    },
    model: {
      value: (_vm.newEndTime),
      callback: function($$v) {
        _vm.newEndTime = $$v
      },
      expression: "newEndTime"
    }
  }), _vm._v("\n\t\t\t  "), _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.changeGroupbuyEndTime
    }
  }, [_vm._v("确定")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2513:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/groupbuy-product"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "myform",
    staticStyle: {
      "width": "100%"
    }
  }, [_c('i-form', {
    ref: "product",
    staticStyle: {
      "width": "900px"
    },
    attrs: {
      "model": _vm.product,
      "rules": _vm.formRule,
      "label-width": 100
    }
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("基本信息")]), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "productTitle",
      "label": "商品名称"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.product.productTitle),
      callback: function($$v) {
        _vm.$set(_vm.product, "productTitle", $$v)
      },
      expression: "product.productTitle"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "cardId",
      "label": "会员卡选择"
    }
  }, [_c('i-select', {
    attrs: {
      "filterable": "",
      "clearable": ""
    },
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
  }, _vm._l((_vm.cardList), function(c) {
    return _c('i-option', {
      key: c.cardId,
      attrs: {
        "value": c.cardId
      }
    }, [_vm._v(_vm._s(c.cardName) + " "), (c.defaultAmount) ? _c('span', {
      staticClass: "gray l10"
    }, [_vm._v("（默认金额：￥" + _vm._s(c.defaultAmount) + "）")]) : _vm._e()])
  }), 1), _vm._v(" "), _c('div', {
    staticClass: "block-tips"
  }, [_c('b', [_vm._v("必读说明")]), _vm._v("： 拼团商品如果会员卡，拼团发起者购买后，相当于在线购卡。"), _c('br'), _vm._v("( 如果是非会员将自动创建会员并添加会员卡，如果已经是会员，则自动在其名下添加此会员卡 )")])], 1), _vm._v(" "), (_vm.product.cardId) ? [(_vm.product.cardType === 2) ? _c('form-item', {
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
  }, [_vm._v("元")])], 1) : _vm._e(), _vm._v(" "), _c('form-item', {
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
  }, [_vm._v("天")])], 1), _vm._v(" "), (_vm.product.cardType === 4) ? _c('form-item', {
    attrs: {
      "prop": "cardTimes2",
      "label": "使用时间",
      "required": ""
    }
  }, [_c('input-int', {
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
  }, [_vm._v("分钟")])], 1) : _vm._e(), _vm._v(" "), (_vm.product.cardDays) ? _c('form-item', {
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
  }, [_vm._v("\n              指会员在线购买会员卡后，最迟多少天内要使用此卡，否则按照最迟开卡日期为起始日期\n            ")])], 1) : _vm._e()] : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "商品图片",
      "required": ""
    }
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccessForProduct,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultLisForProduct
    }
  }, [_c('i-button', {
    attrs: {
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传拼团商品主图")])], 1), _vm._v(" "), _c('p'), _vm._v(" "), _c('img-upload', {
    attrs: {
      "multiple": true,
      "removeable": true,
      "max-count": 10,
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleMorePisUploadSuccess,
      "on-remove": _vm.handleImgRemove,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultMorePics
    }
  }, [_c('i-button', {
    attrs: {
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传更多拼团图片")]), _vm._v("\n              "), _c('span', {
    staticClass: "gray"
  }, [_vm._v("（可选，最多可上传 "), _c('b', [_vm._v("10")]), _vm._v(" 张）")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "consumerType",
      "label": "开团人类型"
    }
  }, [_c('radio-group', {
    model: {
      value: (_vm.product.consumerType),
      callback: function($$v) {
        _vm.$set(_vm.product, "consumerType", _vm._n($$v))
      },
      expression: "product.consumerType"
    }
  }, [_c('radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("不限")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("访客")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("会员")])], 1), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（开团人是指发起拼团的人）")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "teamMemberType",
      "label": "参团人类型"
    }
  }, [_c('radio-group', {
    model: {
      value: (_vm.product.teamMemberType),
      callback: function($$v) {
        _vm.$set(_vm.product, "teamMemberType", _vm._n($$v))
      },
      expression: "product.teamMemberType"
    }
  }, [_c('radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("不限")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("访客")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("会员")])], 1), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（参团人是指参与已开团的人）")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "开团期限",
      "required": ""
    }
  }, [_c('date-picker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "开始日期"
    },
    model: {
      value: (_vm.product.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.product, "beginDate", $$v)
      },
      expression: "product.beginDate"
    }
  }), _vm._v("\n          ~\n          "), _c('date-picker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "结束日期"
    },
    model: {
      value: (_vm.product.endDate),
      callback: function($$v) {
        _vm.$set(_vm.product, "endDate", $$v)
      },
      expression: "product.endDate"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor bigger orange"
  }), _vm._v(" 客户只能在此期限内开团（发起拼团活动）")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "originalPrice",
      "label": "商品原价"
    }
  }, [_c('input-num', {
    staticClass: "input-s",
    model: {
      value: (_vm.product.originalPrice),
      callback: function($$v) {
        _vm.$set(_vm.product, "originalPrice", _vm._n($$v))
      },
      expression: "product.originalPrice"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")]), _vm._v(" "), _c('span', {
    staticClass: "tips l10"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor bigger orange"
  }), _vm._v(" 拼团商品原始价格，客户可看到")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "price",
      "label": "拼团价格"
    }
  }, [(!_vm.productPriceEditable) ? _c('span', {
    staticClass: "green"
  }, [_vm._v(_vm._s(_vm.product.price))]) : _c('input-num', {
    staticClass: "input-s",
    model: {
      value: (_vm.product.price),
      callback: function($$v) {
        _vm.$set(_vm.product, "price", _vm._n($$v))
      },
      expression: "product.price"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")]), _vm._v(" "), _c('span', {
    staticClass: "tips l10"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor bigger orange"
  }), _vm._v(" 对拼团人员的优惠价格，拼团价格不能高于原价")]), _vm._v(" "), _c('help', {
    attrs: {
      "title": "更多帮助"
    }
  }, [_vm._v("\n            备注：拼团价格是拼团成功后，每个拼团人员需支付的价格。\n            "), _c('p'), _vm._v("\n            例如：商品原价是2000元，拼团价格是1500元，则拼团成功后，每人拼团人员需支付的价格1500元\n          ")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "imprest",
      "label": "预付款"
    }
  }, [_c('input-num', {
    staticClass: "input-s",
    model: {
      value: (_vm.product.imprest),
      callback: function($$v) {
        _vm.$set(_vm.product, "imprest", _vm._n($$v))
      },
      expression: "product.imprest"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")]), _vm._v(" "), _c('span', {
    staticClass: "tips l10"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor bigger orange"
  }), _vm._v(" 参团时需要支付的定金")]), _vm._v(" "), _c('help', {
    attrs: {
      "title": "更多帮助"
    }
  }, [_vm._v("\n            备注：实际购买时，一般会扣除预付款，仅支付剩余的金额。\n            "), _c('p'), _vm._v("\n            例如：商品原价是2000元，拼团价格是1500元，预付款是100元，则拼团成功后，每人拼团人员还需到门店支付金额1400元。\n          ")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "limitMembers",
      "label": "成团人数"
    }
  }, [_c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.product.limitMembers),
      callback: function($$v) {
        _vm.$set(_vm.product, "limitMembers", _vm._n($$v))
      },
      expression: "product.limitMembers"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("人")]), _vm._v(" "), _c('span', {
    staticClass: "tips l10"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor bigger orange"
  }), _vm._v(" 拼团成功需要的人数，建议2-5人，太多不容易成团")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "limitHours",
      "label": "拼团时效"
    }
  }, [_c('input-num', {
    staticClass: "input-s",
    model: {
      value: (_vm.product.limitHours),
      callback: function($$v) {
        _vm.$set(_vm.product, "limitHours", $$v)
      },
      expression: "product.limitHours"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("小时")]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor bigger orange"
  }), _vm._v(" 开团后，在此时效内有效，否则拼团失效并自动取消")]), _vm._v(" "), _c('help', {
    attrs: {
      "title": "更多帮助"
    }
  }, [_vm._v("\n            从客户发起拼团时计时，在此时效内，达到了成团人数，则此次拼团成功并结束。"), _c('p'), _vm._v("\n            如果超过此时效，拼团人数没有达到成团人数，则拼团失败。\n            "), _c('p'), _vm._v("\n            例如，时效设置为【24】小时，成团人数设置为3人，预付款为100元，有客户在【12:00】发起拼团，那么在第二天的12:00之前，如果拼团人数达到了3人，则拼团成功；\n            如果没有达到3人，则拼团失败。\n          ")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "hasRefund",
      "label": "可否退款"
    }
  }, [_c('i-switch', {
    attrs: {
      "size": "large"
    },
    model: {
      value: (_vm.product.hasRefund),
      callback: function($$v) {
        _vm.$set(_vm.product, "hasRefund", $$v)
      },
      expression: "product.hasRefund"
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
  }, [_vm._v("否")])]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor bigger orange"
  }), _vm._v("\n            当拼团失败后，是否允许退款给拼团人员\n          ")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "productDesc",
      "label": "商品描述"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 10
    },
    model: {
      value: (_vm.product.productDesc),
      callback: function($$v) {
        _vm.$set(_vm.product, "productDesc", $$v)
      },
      expression: "product.productDesc"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "remark",
      "label": "拼团说明"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 10
    },
    model: {
      value: (_vm.product.remark),
      callback: function($$v) {
        _vm.$set(_vm.product, "remark", $$v)
      },
      expression: "product.remark"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "tit mt20"
  }, [_vm._v("分享设置\n          "), _c('span', {
    staticClass: "orange"
  }, [_vm._v("（参与人员通过微信分享时的页面显示内容）")])]), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "shareTitle",
      "label": "分享标题"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": "分享时显示的标题，如果为空，则显示商品标题"
    },
    model: {
      value: (_vm.product.shareTitle),
      callback: function($$v) {
        _vm.$set(_vm.product, "shareTitle", $$v)
      },
      expression: "product.shareTitle"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "sharePic",
      "label": "分享图片"
    }
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccessForShare,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultListForShare
    }
  }, [_c('i-button', {
    attrs: {
      "size": "small",
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传图片")]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（如果不设置，则默认为商品图片）")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "shareDesc",
      "label": "分享简介"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 2,
      "placeholder": "分享时显示的内容简介，如果为空，则显示商品标题"
    },
    model: {
      value: (_vm.product.shareDesc),
      callback: function($$v) {
        _vm.$set(_vm.product, "shareDesc", $$v)
      },
      expression: "product.shareDesc"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "tit mt20"
  }, [_vm._v("通知设置 "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（发送短信通知需消耗短信数）")])]), _vm._v(" "), _c('form-item', {
    staticClass: "low-margin",
    attrs: {
      "prop": "sendSmsForJoin",
      "label": ""
    }
  }, [_c('Checkbox', {
    model: {
      value: (_vm.product.sendSmsForJoin),
      callback: function($$v) {
        _vm.$set(_vm.product, "sendSmsForJoin", $$v)
      },
      expression: "product.sendSmsForJoin"
    }
  }, [_vm._v("有人参团时，系统给开团人员发送短信通知")])], 1), _vm._v(" "), _c('form-item', {
    staticClass: "low-margin",
    attrs: {
      "prop": "sendSmsForEnd",
      "label": ""
    }
  }, [_c('Checkbox', {
    model: {
      value: (_vm.product.sendSmsForEnd),
      callback: function($$v) {
        _vm.$set(_vm.product, "sendSmsForEnd", $$v)
      },
      expression: "product.sendSmsForEnd"
    }
  }, [_vm._v("拼团成功后，系统给所有参团人员发送短信通知")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "sendSmsForCancel",
      "label": ""
    }
  }, [_c('Checkbox', {
    model: {
      value: (_vm.product.sendSmsForCancel),
      callback: function($$v) {
        _vm.$set(_vm.product, "sendSmsForCancel", $$v)
      },
      expression: "product.sendSmsForCancel"
    }
  }, [_vm._v("拼团失败后，系统给所有参团人员发送短信通知")])], 1)], 2), _vm._v(" "), (_vm.marketEditable) ? _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "100px"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.saveGroupbuyProduct()
      }
    }
  }, [_vm._v("提交")]), _vm._v("\n         \n        "), (_vm.gpId && _vm.product && !_vm.product.teamCnt) ? _c('i-button', {
    on: {
      "click": function($event) {
        return _vm.delGroupbuyProduct()
      }
    }
  }, [_vm._v("删除")]) : _vm._e()], 1) : _vm._e()], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2514:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/seckill-product-list"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('Tabs', {
    attrs: {
      "animated": false
    }
  }, [_c('TabPane', {
    attrs: {
      "label": "秒杀商品"
    }
  }, [_c('section', [(_vm.editable) ? _c('div', {
    staticClass: "tbl-header"
  }, [_c('div', [(_vm.hasMchId) ? _c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": function($event) {
        return _vm.$router.push('/market/seckill-product-create')
      }
    }
  }, [_vm._v("新增秒杀商品")]) : (_vm.hasMchId === false) ? _c('span', {
    staticClass: "orangered"
  }, [_c('i', {
    staticClass: "iconfont icon-alert1 biggest"
  }), _vm._v("\n                贵店尚未开通在线支付，尚无法使用 （"), _c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/online-pay-apply')
      }
    }
  }, [_vm._v("去申请在线支付 →")]), _vm._v("）\n              ")]) : _vm._e()], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_c('tr', [_c('th', [_vm._v("商品名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("会员卡名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("价格")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "280"
    }
  }, [_vm._v("秒杀时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("库存")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("已购买数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("创建时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("操作")])]), _vm._v(" "), _vm._l((_vm.productList), function(p, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(p.productTitle))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.cardName))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(p.price))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.beginTime) + " ~ " + _vm._s(p.endTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.stock))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.orderCnt))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.createTime))]), _vm._v(" "), _c('td', [(_vm.editable) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.$router.push('/market/seckill-product-edit/' + p.productId)
        }
      }
    }, [_vm._v("详情")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openPrdLinkDlg(p)
        }
      }
    }, [_vm._v("二维码")])]), _vm._v(" "), (!p.orderCnt) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delProduct(p.productId)
        }
      }
    }, [_vm._v("删除")])]) : _vm._e()]) : _vm._e()])])
  })], 2)]), _vm._v(" "), (_vm.productList) ? _c('div', {
    staticClass: "tbl-footer center"
  }, [_vm._v("共 " + _vm._s(_vm.productList.length) + " 条记录")]) : _vm._e(), _vm._v(" "), (_vm.productList && !_vm.productList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()])]), _vm._v(" "), _c('TabPane', {
    attrs: {
      "label": "购买记录"
    }
  }, [(_vm.editable) ? _c('section', [_c('div', {
    staticClass: "tbl-header"
  }, [_c('div', {
    staticClass: "l"
  }, [_c('i-button', {
    attrs: {
      "icon": "md-refresh"
    },
    on: {
      "click": _vm.reloadProductOrderList
    }
  }, [_vm._v("刷新")]), _vm._v("  \n              "), _c('i-select', {
    staticStyle: {
      "width": "500px"
    },
    attrs: {
      "placeholder": "请选择秒杀商品"
    },
    on: {
      "on-change": function($event) {
        return _vm.queryProductOrderList()
      }
    },
    model: {
      value: (_vm.query.productId),
      callback: function($$v) {
        _vm.$set(_vm.query, "productId", $$v)
      },
      expression: "query.productId"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("所有商品")])]), _vm._v(" "), _vm._l((_vm.productList), function(p, idx) {
    return _c('i-option', {
      key: p.productId,
      attrs: {
        "value": p.productId
      }
    }, [_vm._v(_vm._s(p.productTitle) + "\n                  （" + _vm._s(p.beginTime) + " ~ " + _vm._s(p.endTime) + "）\n                ")])
  })], 2), _vm._v("\n               \n              "), _c('i-select', {
    staticStyle: {
      "width": "90px"
    },
    attrs: {
      "placeholder": "支付状态"
    },
    on: {
      "on-change": function($event) {
        return _vm.queryProductOrderList()
      }
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
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("不限")])]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 0
    }
  }, [_vm._v("未支付")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 9
    }
  }, [_vm._v("已支付")])], 1), _vm._v("\n               \n              "), _c('i-select', {
    staticStyle: {
      "width": "130px"
    },
    attrs: {
      "placeholder": "分享员工"
    },
    on: {
      "on-change": function($event) {
        return _vm.queryProductOrderList()
      }
    },
    model: {
      value: (_vm.query.sharerStaffId),
      callback: function($$v) {
        _vm.$set(_vm.query, "sharerStaffId", $$v)
      },
      expression: "query.sharerStaffId"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("所有员工")])]), _vm._v(" "), _vm._l((_vm.staffList), function(s) {
    return _c('i-option', {
      key: s.staffId,
      attrs: {
        "value": s.staffId
      }
    }, [_vm._v("\n                  " + _vm._s(s.name) + "\n                ")])
  })], 2)], 1), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_vm._v("\n              查询到 "), _c('b', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.orderCount))]), _vm._v(" 条记录\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_c('tr', [_c('th', {
    staticStyle: {
      "min-width": "80px"
    }
  }, [_vm._v("商品名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("客户姓名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "105"
    }
  }, [_vm._v("客户手机")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "85"
    }
  }, [_vm._v("价格")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("状态")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("支付时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("购买时间")]), _vm._v(" "), _c('th', [_vm._v("分享人")]), _vm._v(" "), (_vm.editable) ? _c('th', [_vm._v("操作")]) : _vm._e()]), _vm._v(" "), _vm._l((_vm.productOrderList), function(p, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(p.productTitle))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.custName ? p.custName : p.memberName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.custPhone ? p.custPhone : p.memberPhone))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(p.amount))]), _vm._v(" "), _c('td', [(p.status === 0) ? _c('span', {
      staticClass: "orange"
    }, [_vm._v("未支付")]) : (p.status === 9) ? _c('span', {
      staticClass: "green"
    }, [_vm._v("已支付")]) : (p.status === 1) ? _c('span', {
      staticClass: "red"
    }, [_vm._v("\n                    已退款\n                  ")]) : _vm._e()]), _vm._v(" "), _c('td', [(p.transTime) ? [_vm._v(_vm._s(p.transTime))] : _c('i', {
      staticClass: "gray"
    }, [_vm._v("暂无")])], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.salesName))]), _vm._v(" "), (_vm.editable) ? _c('td', [(p.status === 9) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.refundOrder(p.orderId)
        }
      }
    }, [_vm._v("退款")]) : (p.status === 1) ? _c('div', [_vm._v("\n                    退款人：" + _vm._s(p.refundStaffName) + "\n                    "), _c('div', {
      staticClass: "p5"
    }, [_vm._v("退款时间：" + _vm._s(p.refundTime))])]) : _vm._e()]) : _vm._e()])
  })], 2)]), _vm._v(" "), (_vm.orderCount) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.orderCount,
      "page-size": _vm.g.Conf.PAGE_SIZE,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryProductOrderList
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.orderCount === 0) ? _c('div', {
    staticClass: "no-data center"
  }, [_vm._v("暂无数据")]) : _vm._e()]) : _vm._e()])], 1)], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "秒杀商品二维码与链接",
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.prdLinkDlg),
      callback: function($$v) {
        _vm.prdLinkDlg = $$v
      },
      expression: "prdLinkDlg"
    }
  }, [(_vm.prdLinkDlg && _vm.selectPrd) ? [_c('table', {
    staticClass: "prdlink"
  }, [_c('tr', [_c('td', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("商品名称：")]), _vm._v(" "), _c('td', [_c('h3', [_vm._v(_vm._s(_vm.selectPrd.productTitle))])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("秒杀二维码：")]), _vm._v(" "), _c('td', [_c('img', {
    staticClass: "qrcode",
    attrs: {
      "src": _vm.g.Conf.QR_CODE_URL + encodeURIComponent(_vm.selectPrdUrl)
    }
  })])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("秒杀链接：")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "link"
  }, [_vm._v(_vm._s(_vm.selectPrdUrl))])])])])] : _vm._e(), _vm._v(" "), _c('div', {
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
        _vm.prdLinkDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 2)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2532:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/coupon-list"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), _c('section', [_c('i-form', {
    ref: "coupon",
    staticClass: "myform",
    attrs: {
      "model": _vm.coupon,
      "rules": _vm.formRule,
      "label-width": 100
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "title",
      "label": "名称"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.coupon.title),
      callback: function($$v) {
        _vm.$set(_vm.coupon, "title", $$v)
      },
      expression: "coupon.title"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "couponType",
      "label": "券类型"
    }
  }, [(!_vm.coupon.receivedNum) ? _c('radio-group', {
    model: {
      value: (_vm.coupon.couponType),
      callback: function($$v) {
        _vm.$set(_vm.coupon, "couponType", $$v)
      },
      expression: "coupon.couponType"
    }
  }, [_c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("代金券")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("折扣券")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 3
    }
  }, [_vm._v("满减券")])], 1) : [_c('b', [_vm._v(_vm._s(_vm.g.Dict.CouponTypes[_vm.coupon.couponType]))])]], 2), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "value",
      "label": "券面额"
    }
  }, [(!_vm.coupon.receivedNum) ? [(_vm.coupon.couponType == 3) ? [_vm._v("\n\t\t\t\t\t\t\t\t满  "), _c('input-num', {
    staticClass: "input-s",
    attrs: {
      "title": ""
    },
    model: {
      value: (_vm.coupon.preValue),
      callback: function($$v) {
        _vm.$set(_vm.coupon, "preValue", $$v)
      },
      expression: "coupon.preValue"
    }
  }), _vm._v("  减  \n\t\t\t\t\t\t\t")] : _vm._e(), _vm._v(" "), _c('input-num', {
    staticClass: "input-s",
    attrs: {
      "title": "",
      "max": _vm.coupon.couponType == 2 ? 10 : null
    },
    model: {
      value: (_vm.coupon.value),
      callback: function($$v) {
        _vm.$set(_vm.coupon, "value", $$v)
      },
      expression: "coupon.value"
    }
  }), _vm._v(" "), (_vm.coupon.couponType == 1 || _vm.coupon.couponType == 3) ? _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")]) : _vm._e(), _vm._v(" "), (_vm.coupon.couponType == 2) ? _c('span', {
    staticClass: "tips"
  }, [_vm._v("折")]) : _vm._e()] : [(_vm.coupon.couponType == 3) ? [_vm._v("\n\t\t\t\t\t\t\t\t满 "), _c('b', [_vm._v(_vm._s(_vm.coupon.preValue))]), _vm._v(" 减\n\t\t\t\t\t\t\t")] : _vm._e(), _vm._v(" "), _c('b', [_vm._v(_vm._s(_vm.coupon.value))]), _vm._v(" "), (_vm.coupon.couponType == 1 || _vm.coupon.couponType == 3) ? _c('span', [_vm._v("元")]) : _vm._e(), _vm._v(" "), (_vm.coupon.couponType == 2) ? _c('span', [_vm._v("折")]) : _vm._e()]], 2), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "优惠券图片"
    }
  }, [_c('img-upload', {
    attrs: {
      "removeable": true,
      "onRemove": _vm.handleImgUploadDeleteCouponImg,
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccessCouponImg,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultListCouponImg
    }
  }, [_c('i-button', {
    attrs: {
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传图片")])], 1), _vm._v(" "), _c('div', {
    staticClass: "p5 orange"
  }, [_vm._v("(添加图片之后，该优惠券默认为 "), _c('a', {
    staticClass: "hover-view"
  }, [_vm._v("自定义")]), _vm._v(" 主题)")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "receiveLimitRole",
      "label": "领取人员"
    }
  }, [_c('radio-group', {
    model: {
      value: (_vm.coupon.receiveLimitRole),
      callback: function($$v) {
        _vm.$set(_vm.coupon, "receiveLimitRole", $$v)
      },
      expression: "coupon.receiveLimitRole"
    }
  }, [_c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("访客")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("会员")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 3
    }
  }, [_vm._v("不限")])], 1)], 1), _vm._v(" "), (_vm.couponId) ? _c('form-item', {
    attrs: {
      "label": "已领取数"
    }
  }, [_c('b', [_vm._v(_vm._s(_vm.coupon.receivedNum))]), _c('span', {
    staticClass: "tips"
  }, [_vm._v("张")])]) : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "totalNum",
      "label": "发布数量"
    }
  }, [_c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.coupon.totalNum),
      callback: function($$v) {
        _vm.$set(_vm.coupon, "totalNum", $$v)
      },
      expression: "coupon.totalNum"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("张")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "pubTime",
      "label": "生效时间"
    }
  }, [_c('date-picker', {
    staticClass: "input-s",
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "datetime",
      "placeholder": ""
    },
    model: {
      value: (_vm.coupon.pubTime),
      callback: function($$v) {
        _vm.$set(_vm.coupon, "pubTime", $$v)
      },
      expression: "coupon.pubTime"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（如果暂不想公开此券，可将生效时间置为空）")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "receiveLimitNum",
      "label": "每人限领"
    }
  }, [_c('input-int', {
    staticClass: "input-s",
    model: {
      value: (_vm.coupon.receiveLimitNum),
      callback: function($$v) {
        _vm.$set(_vm.coupon, "receiveLimitNum", _vm._n($$v))
      },
      expression: "coupon.receiveLimitNum"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("张")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "领取日期",
      "required": ""
    }
  }, [_c('date-picker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "开始日期"
    },
    model: {
      value: (_vm.coupon.beginDate),
      callback: function($$v) {
        _vm.$set(_vm.coupon, "beginDate", $$v)
      },
      expression: "coupon.beginDate"
    }
  }), _vm._v("\n\t\t\t\t\t\t~\n\t\t\t\t\t\t"), _c('date-picker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "结束日期"
    },
    model: {
      value: (_vm.coupon.endDate),
      callback: function($$v) {
        _vm.$set(_vm.coupon, "endDate", $$v)
      },
      expression: "coupon.endDate"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "使用日期"
    }
  }, [_c('date-picker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "开始日期"
    },
    model: {
      value: (_vm.coupon.useBeginDate),
      callback: function($$v) {
        _vm.$set(_vm.coupon, "useBeginDate", $$v)
      },
      expression: "coupon.useBeginDate"
    }
  }), _vm._v("\n\t\t\t\t\t\t~\n\t\t\t\t\t\t"), _c('date-picker', {
    staticClass: "input-s",
    attrs: {
      "type": "date",
      "placeholder": "结束日期"
    },
    model: {
      value: (_vm.coupon.useEndDate),
      callback: function($$v) {
        _vm.$set(_vm.coupon, "useEndDate", $$v)
      },
      expression: "coupon.useEndDate"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "limitRec",
      "label": "领取限制"
    }
  }, [_vm._v("\n\t\t\t\t\t\t每人每 "), _c('input-int', {
    staticClass: "input-small",
    attrs: {
      "min": "1"
    },
    model: {
      value: (_vm.limitReceiveItems[0]),
      callback: function($$v) {
        _vm.$set(_vm.limitReceiveItems, 0, $$v)
      },
      expression: "limitReceiveItems[0]"
    }
  }), _vm._v("天限领 "), _c('input-int', {
    staticClass: "input-small",
    attrs: {
      "min": "1"
    },
    model: {
      value: (_vm.limitReceiveItems[1]),
      callback: function($$v) {
        _vm.$set(_vm.limitReceiveItems, 1, $$v)
      },
      expression: "limitReceiveItems[1]"
    }
  }), _vm._v("张\n\t\t\t\t\t")], 1), _vm._v(" "), (_vm.coupon.receiveLimitRole === 2 && _vm.cardList) ? _c('form-item', {
    attrs: {
      "prop": "limitCards",
      "label": "会员卡限制"
    }
  }, [_c('i-select', {
    attrs: {
      "multiple": true
    },
    model: {
      value: (_vm.limitCardIdArr),
      callback: function($$v) {
        _vm.limitCardIdArr = $$v
      },
      expression: "limitCardIdArr"
    }
  }, _vm._l((_vm.cardList), function(c) {
    return _c('i-option', {
      key: c.cardId,
      attrs: {
        "value": c.cardId
      }
    }, [_vm._v(_vm._s(c.cardName))])
  }), 1), _vm._v(" "), _c('div', {
    staticClass: "p5 orange"
  }, [_vm._v("(表示仅有所选卡之一的会员才可领取，不设置则表示不限制)")])], 1) : _vm._e(), _vm._v(" "), (_vm.g.data.shop.hasWxPay) ? [_c('form-item', {
    attrs: {
      "prop": "needPayment",
      "label": "是否在线购买"
    }
  }, [_c('i-switch', {
    attrs: {
      "size": "large"
    },
    model: {
      value: (_vm.coupon.needPayment),
      callback: function($$v) {
        _vm.$set(_vm.coupon, "needPayment", $$v)
      },
      expression: "coupon.needPayment"
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
  }, [_vm._v("否")])]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（选择“是”表示，领取优惠券时需要在线支付，支付成功后才能成功领取）")])], 1), _vm._v(" "), (_vm.coupon.needPayment) ? _c('form-item', {
    attrs: {
      "prop": "price",
      "label": "支付金额"
    }
  }, [_c('input-num', {
    model: {
      value: (_vm.coupon.price),
      callback: function($$v) {
        _vm.$set(_vm.coupon, "price", $$v)
      },
      expression: "coupon.price"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")])], 1) : _vm._e()] : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "适用会员卡"
    }
  }, [_c('span', {
    staticClass: "gray"
  }, [_c('i', {
    staticClass: "iconfont icon-alert icon orange"
  }), _vm._v(" 请勾选该优惠券可购买哪些会员卡")]), _vm._v(" "), _c('div', {
    staticClass: "p5"
  }, [_vm._v("\n\t\t\t\t\t\t\t卡类别过滤： \n\t\t\t\t\t\t\t"), _c('checkbox-group', {
    staticStyle: {
      "display": "inline"
    },
    model: {
      value: (_vm.cardClassList),
      callback: function($$v) {
        _vm.cardClassList = $$v
      },
      expression: "cardClassList"
    }
  }, [_c('checkbox', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("会籍卡")]), _vm._v(" "), _c('checkbox', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("团课卡")]), _vm._v(" "), _c('checkbox', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("私教卡")])], 1), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v(" "), _c('span', {
    staticClass: "l15"
  }, [_c('checkbox', {
    model: {
      value: (_vm.showPausedCards),
      callback: function($$v) {
        _vm.showPausedCards = $$v
      },
      expression: "showPausedCards"
    }
  }, [_vm._v("显示停用卡种")])], 1)], 1), _vm._v(" "), _c('ul', {
    staticClass: "card-payment-list"
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
  }, [_vm._v("默认充值")])]), _vm._v(" "), _vm._l((_vm.cardListComp), function(c) {
    return [_c('li', {
      key: c.cardId
    }, [_c('div', {
      staticClass: "name"
    }, [_c('checkbox', {
      model: {
        value: (_vm.cardPayments[c.cardId].checked),
        callback: function($$v) {
          _vm.$set(_vm.cardPayments[c.cardId], "checked", $$v)
        },
        expression: "cardPayments[c.cardId].checked"
      }
    }, [_vm._v(" \n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(c.cardName) + " "), (c.status !== 0) ? _c('span', {
      staticClass: "gray"
    }, [_vm._v(" [已停用]")]) : _vm._e()])], 1), _vm._v(" "), _c('div', {
      staticClass: "desc"
    }, [(c.cardType === 1) ? [(c.defaultAmount) ? [_c('span', {
      staticClass: "gray"
    }, [_vm._v("充值金额：")]), _vm._v(_vm._s(c.defaultAmount) + " "), _c('b', {
      staticClass: "red"
    }, [_vm._v("元")]), _vm._v(" "), _c('br')] : _vm._e(), _vm._v(" "), (c.defaultDays) ? [_c('span', {
      staticClass: "gray"
    }, [_vm._v("充值天数：")]), _vm._v(_vm._s(c.defaultDays) + " "), _c('b', {
      staticClass: "green"
    }, [_vm._v("天")])] : _vm._e()] : (c.cardType === 2) ? [(c.defaultAmount) ? [_c('span', {
      staticClass: "gray"
    }, [_vm._v("充值金额：")]), _vm._v(_vm._s(c.defaultAmount) + " "), _c('b', {
      staticClass: "red"
    }, [_vm._v("元")]), _vm._v(" "), _c('br')] : _vm._e(), _vm._v(" "), (c.defaultTimes) ? [_c('span', {
      staticClass: "gray"
    }, [_vm._v("充值次数：")]), _vm._v(_vm._s(c.defaultTimes) + " "), _c('b', {
      staticClass: "orange"
    }, [_vm._v("次")]), _vm._v(" "), _c('br')] : _vm._e(), _vm._v(" "), (c.defaultDays) ? [_c('span', {
      staticClass: "gray"
    }, [_vm._v("充值天数：")]), _vm._v(_vm._s(c.defaultDays) + " "), _c('b', {
      staticClass: "green"
    }, [_vm._v("天")])] : _vm._e()] : (c.cardType === 3) ? [(c.defaultAmount) ? [_c('span', {
      staticClass: "gray"
    }, [_vm._v("充值金额：")]), _vm._v(_vm._s(c.defaultAmount) + " "), _c('b', {
      staticClass: "red"
    }, [_vm._v("元")]), _vm._v(" "), _c('br')] : _vm._e(), _vm._v(" "), (c.defaultDays) ? [_c('span', {
      staticClass: "gray"
    }, [_vm._v("充值天数：")]), _vm._v(_vm._s(c.defaultDays) + " "), _c('b', {
      staticClass: "green"
    }, [_vm._v("天")])] : _vm._e()] : (c.cardType === 4) ? [(c.defaultTimes) ? [_c('span', {
      staticClass: "gray"
    }, [_vm._v("充值时间：")]), _vm._v(_vm._s(c.defaultTimes) + " "), _c('b', {
      staticClass: "green"
    }, [_vm._v(_vm._s(_vm.g.Dict.CardTimeTypes[c.cardTimeType]))]), _vm._v(" "), _c('br')] : _vm._e(), _vm._v(" "), (c.defaultDays) ? [_c('span', {
      staticClass: "gray"
    }, [_vm._v("充值天数：")]), _vm._v(_vm._s(c.defaultDays) + " "), _c('b', {
      staticClass: "green"
    }, [_vm._v("天")])] : _vm._e()] : _vm._e()], 2)])]
  }), _vm._v(" "), (_vm.cardListComp && !_vm.cardListComp.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()], 2)]), _vm._v(" "), _c('form-item', {
    attrs: {
      "label": "适用商品"
    }
  }, [_c('span', {
    staticClass: "gray"
  }, [_c('i', {
    staticClass: "iconfont icon-alert icon orange"
  }), _vm._v(" 请勾选该优惠券可购买哪些商品")]), _vm._v(" "), _c('div', {
    staticClass: "p5"
  }, [_vm._v("\n\t\t\t\t\t\t\t商品类别过滤： \n\t\t\t\t\t\t\t"), _c('span', {
    staticClass: "l15"
  }, [_c('checkbox', {
    model: {
      value: (_vm.showProductOff),
      callback: function($$v) {
        _vm.showProductOff = $$v
      },
      expression: "showProductOff"
    }
  }, [_vm._v("显示下架商品")])], 1)]), _vm._v(" "), _c('ul', {
    staticClass: "card-payment-list"
  }, [_c('li', {
    staticClass: "-hd"
  }, [_c('div', {
    staticClass: "name"
  }, [_c('checkbox', {
    on: {
      "on-change": _vm.checkAllProducts
    },
    model: {
      value: (_vm.productCheckAll),
      callback: function($$v) {
        _vm.productCheckAll = $$v
      },
      expression: "productCheckAll"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t商品种类\n\t\t\t\t\t\t\t\t\t")])], 1), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v("商品价格")])]), _vm._v(" "), _vm._l((_vm.productListComp), function(c) {
    return [_c('li', {
      key: c.productId
    }, [_c('div', {
      staticClass: "name"
    }, [_c('checkbox', {
      model: {
        value: (_vm.productChecks[c.productId].checked),
        callback: function($$v) {
          _vm.$set(_vm.productChecks[c.productId], "checked", $$v)
        },
        expression: "productChecks[c.productId].checked"
      }
    }, [_vm._v(" \n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(c.productName) + " "), (c.status !== 0) ? _c('span', {
      staticClass: "gray"
    }, [_vm._v(" [已下架]")]) : _vm._e()])], 1), _vm._v(" "), _c('div', {
      staticClass: "desc"
    }, [(c.pricePoints) ? _c('div', [_c('span', {
      staticClass: "gray"
    }, [_vm._v("购买积分：")]), _vm._v(_vm._s(c.pricePoints) + " "), _c('span', {
      staticClass: "orange bold"
    }, [_vm._v("分")])]) : _vm._e(), _vm._v(" "), (c.priceAmount) ? _c('div', [_c('span', {
      staticClass: "gray"
    }, [_vm._v("购买金额：")]), _vm._v(_vm._s(c.priceAmount) + " "), _c('span', {
      staticClass: "red bold"
    }, [_vm._v("元")])]) : _vm._e()])])]
  }), _vm._v(" "), (_vm.productListComp && !_vm.productListComp.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()], 2), _vm._v(" "), (_vm.productCount && _vm.productCount > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "size": "small",
      "show-total": "",
      "total": _vm.productCount,
      "page-size": 30
    },
    on: {
      "on-change": _vm.queryProduct
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "remark",
      "label": "说明"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 15
    },
    model: {
      value: (_vm.coupon.remark),
      callback: function($$v) {
        _vm.$set(_vm.coupon, "remark", $$v)
      },
      expression: "coupon.remark"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "tit mt20"
  }, [_vm._v("分享设置\n\t\t\t\t\t\t"), _c('span', {
    staticClass: "orange"
  }, [_vm._v("（通过微信分享时的页面显示内容）")])]), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "shareTitle",
      "label": "分享标题"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": "分享时显示的标题，如果为空，则显示优惠券名称"
    },
    model: {
      value: (_vm.coupon.shareTitle),
      callback: function($$v) {
        _vm.$set(_vm.coupon, "shareTitle", $$v)
      },
      expression: "coupon.shareTitle"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "sharePic",
      "label": "分享图片"
    }
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccessForShare,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultListForShare
    }
  }, [_c('i-button', {
    attrs: {
      "size": "small",
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传图片")]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（如果不设置，则默认为门店图片）")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "shareDesc",
      "label": "分享简介"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 2,
      "placeholder": "分享时显示的内容简介，如果为空，则显示优惠券名称"
    },
    model: {
      value: (_vm.coupon.shareDesc),
      callback: function($$v) {
        _vm.$set(_vm.coupon, "shareDesc", $$v)
      },
      expression: "coupon.shareDesc"
    }
  })], 1)], 2), _vm._v(" "), (_vm.marketEditable) ? _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "padding-left": "100px"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.saveCoupon()
      }
    }
  }, [_vm._v("提交")]), _vm._v("\n\t\t\t\t\t \n\t\t\t\t\t"), (_vm.couponId && _vm.coupon && !_vm.coupon.receivedNum) ? _c('i-button', {
    on: {
      "click": function($event) {
        return _vm.delCoupon()
      }
    }
  }, [_vm._v("删除")]) : _vm._e()], 1) : _vm._e()], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2546:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/auto-renew"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), _c('section', {
    staticStyle: {
      "width": "100%"
    }
  }, [_vm._m(0), _vm._v(" "), _c('i-form', {
    ref: "options",
    staticClass: "myform",
    staticStyle: {
      "width": "700px"
    },
    attrs: {
      "model": _vm.options,
      "label-width": 90
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "name",
      "label": "会员卡",
      "required": ""
    }
  }, [_c('i-select', {
    staticStyle: {
      "width": "330px"
    },
    on: {
      "on-change": _vm.cardChange
    },
    model: {
      value: (_vm.options.cardId),
      callback: function($$v) {
        _vm.$set(_vm.options, "cardId", $$v)
      },
      expression: "options.cardId"
    }
  }, [_vm._l((_vm.cardList), function(c) {
    return [_c('i-option', {
      key: c.cardId,
      attrs: {
        "value": c.cardId,
        "label": c.cardName
      }
    }, [_vm._v("\n                  " + _vm._s(c.cardName) + "\n                  "), _c('div', {
      staticClass: "r gray"
    }, [_vm._v(_vm._s(_vm.g.Dict.CardType[c.cardType]))])])]
  })], 2)], 1), _vm._v(" "), (_vm.cardType != 1) ? [(_vm.cardType == 3) ? _c('form-item', {
    attrs: {
      "prop": "usableAmount",
      "label": '充值' + _vm.g.Dict.CardTypeSuffix[_vm.cardType] || '金额',
      "required": ""
    }
  }, [_c('i-input', {
    staticStyle: {
      "width": "330px",
      "display": "inline-block"
    },
    attrs: {
      "type": "text",
      "placeholder": "请输入充值金额"
    },
    model: {
      value: (_vm.options.usableAmount),
      callback: function($$v) {
        _vm.$set(_vm.options, "usableAmount", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "options.usableAmount"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v(_vm._s(_vm.g.Dict.CardUnitName[_vm.cardType] || '元'))])], 1) : _c('form-item', {
    attrs: {
      "prop": "usableTimes",
      "label": '充值' + _vm.g.Dict.CardTypeSuffix[_vm.cardType] || '次数',
      "required": ""
    }
  }, [_c('i-input', {
    staticStyle: {
      "width": "330px",
      "display": "inline-block"
    },
    attrs: {
      "type": "text",
      "placeholder": "请输入充值次数/分钟"
    },
    model: {
      value: (_vm.options.usableTimes),
      callback: function($$v) {
        _vm.$set(_vm.options, "usableTimes", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "options.usableTimes"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v(_vm._s(_vm.g.Dict.CardUnitName[_vm.cardType] || '次'))])], 1)] : _vm._e(), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "usableDays",
      "label": "期限",
      "required": ""
    }
  }, [_c('i-input', {
    staticStyle: {
      "width": "330px",
      "display": "inline-block"
    },
    attrs: {
      "type": "text",
      "placeholder": "请输入天数"
    },
    model: {
      value: (_vm.options.usableDays),
      callback: function($$v) {
        _vm.$set(_vm.options, "usableDays", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "options.usableDays"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("天")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "paymentAmount",
      "label": "首次费用",
      "required": ""
    }
  }, [_c('i-input', {
    staticStyle: {
      "width": "330px",
      "display": "inline-block"
    },
    attrs: {
      "type": "text",
      "placeholder": "请输入首次购买的金额"
    },
    model: {
      value: (_vm.options.paymentAmount),
      callback: function($$v) {
        _vm.$set(_vm.options, "paymentAmount", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "options.paymentAmount"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("元")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "cardLimitBeginDays",
      "label": "最迟开卡天数",
      "required": ""
    }
  }, [_c('i-input', {
    staticStyle: {
      "width": "330px",
      "display": "inline-block"
    },
    attrs: {
      "type": "text",
      "placeholder": "请输入最迟开卡天数"
    },
    model: {
      value: (_vm.options.cardLimitBeginDays),
      callback: function($$v) {
        _vm.$set(_vm.options, "cardLimitBeginDays", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "options.cardLimitBeginDays"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("天")])], 1)], 2), _vm._v(" "), _c('div', {
    staticClass: "myform mrb",
    staticStyle: {
      "width": "100%"
    }
  }, [_c('div', {
    staticClass: "tit",
    staticStyle: {
      "margin-bottom": "0"
    }
  }, [_vm._v("续费规则")]), _vm._v(" "), _vm._l((_vm.ruleList), function(item, idx) {
    return _c('div', {
      key: idx,
      staticClass: "tb-tr"
    }, [_c('b', {
      staticClass: "tr-tag"
    }, [_vm._v("\n              第" + _vm._s(idx + 1) + "期\n            ")]), _vm._v(" "), _vm._l((item.settingList), function(r, cidx) {
      return [_c('div', {
        key: cidx,
        staticClass: "mul-td flex-center"
      }, [_c('span', [_vm._v("距离到期日")]), _vm._v(" "), _c('input-int', {
        staticClass: "int",
        model: {
          value: (r.beginDay),
          callback: function($$v) {
            _vm.$set(r, "beginDay", _vm._n($$v))
          },
          expression: "r.beginDay"
        }
      }), _vm._v("\n\t              天 "), _c('span', {
        staticClass: "spt"
      }, [_vm._v("~")]), _vm._v(" "), _c('input-int', {
        staticClass: "int",
        model: {
          value: (r.endDay),
          callback: function($$v) {
            _vm.$set(r, "endDay", _vm._n($$v))
          },
          expression: "r.endDay"
        }
      }), _vm._v(" "), _c('span', [_vm._v("天，续费")]), _vm._v(" "), _c('input-num', {
        staticClass: "int",
        attrs: {
          "min": 0
        },
        model: {
          value: (r.paymentAmount),
          callback: function($$v) {
            _vm.$set(r, "paymentAmount", _vm._n($$v))
          },
          expression: "r.paymentAmount"
        }
      }), _vm._v(" "), _c('span', [_vm._v("元")]), _vm._v(" "), _c('Icon', {
        staticClass: "clear-icon",
        attrs: {
          "type": "md-close-circle"
        },
        on: {
          "click": function($event) {
            return _vm.delSettingLine(idx, cidx)
          }
        }
      }), _vm._v(" "), (cidx == item.settingList.length - 1) ? _c('i-button', {
        attrs: {
          "icon": "md-add"
        },
        on: {
          "click": function($event) {
            return _vm.addSettingLine(idx)
          }
        }
      }) : _vm._e()], 1)]
    }), _vm._v(" "), _c('div', {
      staticClass: "btn-line"
    }, [_c('i-button', {
      on: {
        "click": function($event) {
          return _vm.delRuleItem(idx)
        }
      }
    }, [_vm._v("删除本期")]), _vm._v(" "), (_vm.ruleList.length - 1 == idx) ? _c('i-button', {
      on: {
        "click": function($event) {
          return _vm.addRuleItem(idx)
        }
      }
    }, [_vm._v("添加下期")]) : _vm._e()], 1)], 2)
  }), _vm._v(" "), _c('div', {
    staticClass: "form-submit",
    staticStyle: {
      "border": "none"
    }
  }, [_c('i-button', {
    staticClass: "primary",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.renewalSave
    }
  }, [_vm._v("提交")])], 1)], 2)], 1)], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("编辑自助续费卡")])])
}]}

/***/ }),

/***/ 2547:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/coupon-list"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', [(_vm.editable) ? _c('div', {
    staticClass: "hd"
  }, [_c('div', [_c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": function($event) {
        return _vm.$router.push('/market/coupon-create')
      }
    }
  }, [_vm._v("新增优惠券")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.$router.push('/market/coupon-share-link')
      }
    }
  }, [_vm._v("分享领取查询")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.couponThemeQuery
    }
  }, [_vm._v("优惠券样式设置")])], 1)], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.couponList), function(c, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.title))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.CouponTypes[c.couponType]))]), _vm._v(" "), _c('td', {
      staticClass: "val"
    }, [(c.couponType === 1) ? _c('span', [_c('b', [_vm._v(_vm._s(c.value))]), _vm._v(" 元")]) : _vm._e(), _vm._v(" "), (c.couponType === 2) ? _c('span', [_c('b', [_vm._v(_vm._s(c.value))]), _vm._v(" 折")]) : _vm._e(), _vm._v(" "), (c.couponType === 3) ? _c('span', [_vm._v("满 "), _c('b', [_vm._v(_vm._s(c.preValue))]), _vm._v(" 减 "), _c('b', [_vm._v(_vm._s(c.value))]), _vm._v(" 元")]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.pubTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.totalNum))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.receivedNum))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(c.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(c.endDate)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.GuestTypes[c.receiveLimitRole]))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(c.useBeginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(c.useEndDate)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.receiveLimitNum) + " 张")]), _vm._v(" "), _c('td', [(c.needPayment) ? [_vm._v("￥" + _vm._s(c.price))] : _c('i', {
      staticClass: "gray"
    }, [_vm._v("无")])], 2), _vm._v(" "), _c('td', [(_vm.editable) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.$router.push('/market/coupon-edit/' + c.couponId)
        }
      }
    }, [_vm._v("详情")])]), _vm._v(" "), (c.receivedNum) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.$router.push('/market/coupon-stat/' + c.couponId)
        }
      }
    }, [_vm._v("统计")])]) : _vm._e(), _vm._v(" "), (!c.receivedNum) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delCoupon(c.couponId)
        }
      }
    }, [_vm._v("删除")])]) : _vm._e(), _vm._v(" "), (c.pubTime) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openCouponLinkDlg(c)
        }
      }
    }, [_vm._v("二维码")])]) : _vm._e(), _vm._v(" "), (!c.pubTime) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.generateShareLink(c)
        }
      }
    }, [_vm._v("分享设置")])]) : _vm._e()]) : _vm._e()])])
  })], 2)]), _vm._v(" "), (_vm.couponList) ? _c('div', {
    staticClass: "tbl-footer center"
  }, [_vm._v("共 " + _vm._s(_vm.couponList.length) + " 条记录")]) : _vm._e()]), _vm._v(" "), _c('section', {
    staticClass: "note"
  }, [_vm._m(1), _vm._v(" "), _c('ol', [_c('li', [_vm._v("优惠券是市场营销中最常见的促销手段，能极大的激发客户的参与和进一步的购买行为。")]), _vm._v(" "), _c('li', [_vm._v("健总管推出的电子优惠券，代替了纸质券，在贵店微官网的活动栏展示，也可以通过下面的专属二维码展示。")]), _vm._v(" "), _c('li', [_vm._v("设置好门店优惠券后，您可以将电子优惠券的页面分享到朋友圈，或者将二维码印到宣传单上，\n            或者单独制作二维码牌放到合作商户店内，以供访客访问和参与。")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('li', [_vm._v("贵店的优惠券二维码如下"), _c('span', {
    staticClass: "gray"
  }, [_vm._v("（右键点击二维码可下载二维码图片）")]), _vm._v("：\n            "), _c('p', {
    staticClass: "qrcode"
  }, [_c('img', {
    attrs: {
      "src": _vm.qrcodeUrl
    }
  })])]), _vm._v(" "), _c('li', [_vm._v("优惠券页面地址（可绑定到微信公众号）"), _c('p', [_vm._v(_vm._s(_vm.couponsUrl))])])])])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "微官网优惠券样式预览",
      "width": "1200",
      "styles": {
        top: '10px'
      },
      "footer-hide": "",
      "cancel-text": ""
    },
    model: {
      value: (_vm.couponThemeDlg),
      callback: function($$v) {
        _vm.couponThemeDlg = $$v
      },
      expression: "couponThemeDlg"
    }
  }, [_c('div', {
    staticClass: "coupon-style-dlg"
  }, [_c('ul', _vm._l((_vm.couponImgList), function(c) {
    return _c('li', {
      key: c,
      attrs: {
        "title": c == 'custom' ? '自定义上传图片模式' : ("默认" + c + "模式")
      },
      on: {
        "click": function($event) {
          return _vm.checkCouponImg(c)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": ("/static/img/coupon/style-" + c + ".jpg"),
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (c == _vm.couponTheme),
        expression: "c==couponTheme"
      }],
      staticClass: "check"
    }, [_c('i', {
      staticClass: "iconfont icon-check2"
    })])])
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "footer-btn center"
  }, [_c('i-button', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.shopArgUpdate
    }
  }, [_vm._v("保存")]), _vm._v(" "), _c('i-button', {
    staticStyle: {
      "width": "100px",
      "margin-left": "10px"
    },
    on: {
      "click": function($event) {
        _vm.couponTheme = -1
      }
    }
  }, [_vm._v("恢复默认")])], 1)])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": ("分享设置 -【" + (_vm.selectCoupon.title) + "】"),
      "width": "1200",
      "styles": {
        top: '10px'
      },
      "footer-hide": "",
      "cancel-text": "",
      "mask-closable": false
    },
    model: {
      value: (_vm.couponLinkSetDlg),
      callback: function($$v) {
        _vm.couponLinkSetDlg = $$v
      },
      expression: "couponLinkSetDlg"
    }
  }, [(_vm.couponLinkSetDlg) ? _c('div', {
    staticClass: "coupon-share-dlg"
  }, [_c('coupon-share-link', {
    attrs: {
      "coupon": _vm.selectCoupon,
      "shopId": _vm.shopId,
      "staffList": _vm.staffList
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "footer-btn center"
  }, [_c('i-button', {
    staticStyle: {
      "width": "100px",
      "margin-left": "10px"
    },
    on: {
      "click": function($event) {
        _vm.couponLinkSetDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 1) : _vm._e()]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "优惠券二维码与链接",
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.couponLinkAndQRCodeDlg),
      callback: function($$v) {
        _vm.couponLinkAndQRCodeDlg = $$v
      },
      expression: "couponLinkAndQRCodeDlg"
    }
  }, [(_vm.couponLinkAndQRCodeDlg && _vm.selectCoupon) ? [_c('table', {
    staticClass: "prdlink"
  }, [_c('tr', [_c('td', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("优惠券名称：")]), _c('td', [_c('h3', [_vm._v(_vm._s(_vm.selectCoupon.title))])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("优惠券二维码：")]), _vm._v(" "), _c('td', [_c('img', {
    staticClass: "qrcode",
    attrs: {
      "src": _vm.g.Conf.QR_CODE_URL + encodeURIComponent(_vm.selectCouponUrl)
    }
  })])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("优惠券链接：")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "link-value",
    on: {
      "click": function($event) {
        return _vm.g.Util.copyText($event, _vm.selectCouponUrl)
      }
    }
  }, [_c('div', {
    staticClass: "link"
  }, [_vm._v(_vm._s(_vm.selectCouponUrl))]), _vm._v(" "), _c('span', {
    staticClass: "copy-tip gray"
  }, [_vm._v("复制")])])])])])] : _vm._e(), _vm._v(" "), _c('div', {
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
        _vm.couponLinkAndQRCodeDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "45"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "130"
    }
  }, [_vm._v("名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "65"
    }
  }, [_vm._v("类型")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "140"
    }
  }, [_vm._v("券面额")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("生效时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("发布数量")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("已领取数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "180"
    }
  }, [_vm._v("领取日期")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("领取人员")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "180"
    }
  }, [_vm._v("使用日期")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("每人限领")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("在线支付")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "95px"
    }
  }, [_vm._v("操作")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit-notice"
  }, [_vm._v("优惠券说明")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_vm._v("客户领取优惠券前，需提交通过验证码的手机号（"), _c('b', [_vm._v("会自动存入健总管客户模块")]), _vm._v("）。因此，门店可以较低的成本获取有价值的潜在客户，为进一步的客户跟进做准备。")])
}]}

/***/ }),

/***/ 2548:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "market"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "market",
      "page": "market/coupon-list"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('page-header', {
    attrs: {
      "menu-list": _vm.menuList
    }
  }), _vm._v(" "), _c('section', [_vm._m(0), _vm._v(" "), (_vm.coupon) ? _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_vm._m(1), _vm._v(" "), _c('tr', [_c('td', [_vm._v(_vm._s(_vm.coupon.title))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.CouponTypes[_vm.coupon.couponType]))]), _vm._v(" "), _c('td', {
    staticClass: "val"
  }, [(_vm.coupon.couponType === 1) ? _c('span', [_c('b', [_vm._v(_vm._s(_vm.coupon.value))]), _vm._v(" 元")]) : _vm._e(), _vm._v(" "), (_vm.coupon.couponType === 2) ? _c('span', [_c('b', [_vm._v(_vm._s(_vm.coupon.value))]), _vm._v(" 折")]) : _vm._e(), _vm._v(" "), (_vm.coupon.couponType === 3) ? _c('span', [_vm._v("满 "), _c('b', [_vm._v(_vm._s(_vm.coupon.preValue))]), _vm._v(" 减 "), _c('b', [_vm._v(_vm._s(_vm.coupon.value))]), _vm._v(" 元")]) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.coupon.totalNum) + " 张")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.guestCnt) + " 人")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.coupon.receivedNum) + " 张")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.usedCnt) + " 张")]), _vm._v(" "), _c('td', [(_vm.usedCnt && _vm.coupon.receivedNum) ? [_vm._v(_vm._s((100 * _vm.usedCnt / _vm.coupon.receivedNum).toFixed(1)) + "%")] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.coupon.pubTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(_vm.coupon.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(_vm.coupon.endDate)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.coupon.receiveLimitNum) + " 张")])])])]) : _vm._e()]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("优惠券领取详情")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('ul', {
    staticClass: "query-cond-right"
  }, [_c('li', {
    staticClass: "item"
  }, [_c('i-select', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "placeholder": "状态"
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
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("不限")])]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 0
    }
  }, [_vm._v("未用")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("已用")])], 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('input-int', {
    attrs: {
      "placeholder": "领取人手机号"
    },
    on: {
      "enter": function($event) {
        return _vm.statCoupon()
      }
    },
    model: {
      value: (_vm.query.guestPhone),
      callback: function($$v) {
        _vm.$set(_vm.query, "guestPhone", $$v)
      },
      expression: "query.guestPhone"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.statCoupon()
      }
    }
  }, [_vm._v("查询")])], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    on: {
      "click": _vm.resetQuery
    }
  }, [_vm._v("重置")])], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('i-button', {
    attrs: {
      "icon": "ios-cloud-download-outline"
    },
    on: {
      "click": _vm.exportToXls
    }
  }, [_vm._v("导出")])], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_vm._m(2), _vm._v(" "), _vm._l((_vm.couponLogList), function(c, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', [(c.status === 0) ? _c('span', {
      staticClass: "green"
    }, [_vm._v("未用")]) : _c('span', {
      staticClass: "orange"
    }, [_vm._v("已用")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.GuestTypes[c.receiverType]))]), _vm._v(" "), _c('td', [(c.receiverType === 1) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.viewCust(c.receiverId, c.custName)
        }
      }
    }, [_vm._v(_vm._s(c.custName))]) : (c.receiverType === 2) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.viewMember(c.receiverId)
        }
      }
    }, [_vm._v(_vm._s(c.memberName))]) : _vm._e()]), _vm._v(" "), _c('td', [(c.receiverType === 1) ? [_vm._v(_vm._s(c.custPhone))] : (c.receiverType === 2) ? [_vm._v(_vm._s(c.memberPhone))] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.createTime))]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(c.usedTime) + "\n\t\t\t\t\t\t\t\t"), (c.useRelType) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.getCouponUseInfo(c)
        }
      }
    }, [_vm._v(" [" + _vm._s(c.useRelType == 1 ? '充值记录' : '订单信息') + "]")]) : _vm._e()]), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [(!c.usedTime) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.updateCouponUsedInfo(c, idx)
        }
      }
    }, [_vm._v("使用")])]) : (!c.useRelType && !c.useRelId) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.cancelUsedCoupon(c, idx)
        }
      }
    }, [_vm._v("撤销使用")])]) : _vm._e()])])])
  })], 2)]), _vm._v(" "), (_vm.couponLogList && _vm.couponLogList.length) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.couponLogCnt,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.statCoupon
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.couponLogList && !_vm.couponLogList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()])], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员信息",
      "width": "780",
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
  }, [_c('member-base-info', {
    attrs: {
      "member-id": _vm.memberId
    }
  })], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": '客户信息 - ' + _vm.custName,
      "width": "800",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.viewCustDlg),
      callback: function($$v) {
        _vm.viewCustDlg = $$v
      },
      expression: "viewCustDlg"
    }
  }, [(_vm.viewCustDlg) ? [_c('cust-detail', {
    attrs: {
      "cust-id": _vm.custId,
      "can-create": false
    }
  })] : _vm._e(), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 2), _vm._v(" "), _c('modal', {
    attrs: {
      "mask-closable": false,
      "title": "会员卡充值记录",
      "width": "800",
      "styles": {
        top: '10px'
      },
      "footer-hide": ""
    },
    model: {
      value: (_vm.mcpDlg),
      callback: function($$v) {
        _vm.mcpDlg = $$v
      },
      expression: "mcpDlg"
    }
  }, [(_vm.mcpDlg) ? _c('div', {
    staticClass: "info-view"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("充值时间："), _c('b', [_vm._v(_vm._s(_vm.mcp.createTime))])]), _vm._v(" "), _c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("会员卡")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.mcp.cardName) + "\n\t\t\t\t\t\t"), _c('span', {
    staticClass: "gray"
  }, [_vm._v("（" + _vm._s(_vm.g.Dict.CardType[_vm.mcp.cardType]) + "）")])])]), _vm._v(" "), (!_vm.mcp.isSelfCreate && _vm.mcp.createUname) ? _c('tr', [_c('th', [_vm._v("操作人")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.mcp.createUname))])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', [_vm._v("充值金额")]), _vm._v(" "), _c('td', {
    class: {
      red: _vm.mcp.usableAmount < 0
    }
  }, [_vm._v(_vm._s(_vm.mcp.usableAmount) + " 元")])]), _vm._v(" "), (_vm.mcp.deposit) ? _c('tr', [_c('th', [_vm._v("已交订金")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.mcp.deposit) + " 元")])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', [_vm._v("实收金额")]), _vm._v(" "), _c('td', {
    class: {
      red: _vm.mcp.paymentAmount < 0
    }
  }, [_vm._v(_vm._s(_vm.mcp.paymentAmount) + " 元\n\t\t\t\t\t\t\t"), (_vm.mcp.chargeFromMcName) ? _c('span', {
    staticClass: "l10 orange"
  }, [_vm._v("（来自储值卡：" + _vm._s(_vm.mcp.chargeFromMcName) + "）")]) : _vm._e()])]), _vm._v(" "), (_vm.mcp.paymentPoints) ? _c('tr', [_c('th', [_vm._v("支付积分")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.mcp.paymentPoints) + " 分")])]) : _vm._e(), _vm._v(" "), (_vm.mcp.cardType === 2) ? _c('tr', [_c('th', [_vm._v("充值次数")]), _vm._v(" "), _c('td', {
    class: {
      red: _vm.mcp.usableTimes < 0
    }
  }, [_vm._v(_vm._s(_vm.mcp.usableTimes) + " 次\n\t\t\t\t\t")])]) : _vm._e(), _vm._v(" "), (_vm.mcp.paymentAmount && _vm.mcp.usableTimes && _vm.mcp.cardType === 2) ? _c('tr', [_c('th', [_vm._v("单次价格")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(((_vm.mcp.paymentAmount + (_vm.mcp.deposit ? _vm.mcp.deposit : 0)) / _vm.mcp.usableTimes).toFixed(2)) + " 元 / 次")])]) : _vm._e(), _vm._v(" "), (_vm.mcp.cardType === 4) ? _c('tr', [_c('th', [_vm._v("充值" + _vm._s(_vm.g.Dict.CardTimeTypes[_vm.mcp.cardTimeType]))]), _vm._v(" "), _c('td', {
    class: {
      red: _vm.mcp.usableTimes < 0
    }
  }, [_vm._v(_vm._s(_vm.mcp.usableTimes) + " " + _vm._s(_vm.g.Dict.CardTimeTypes[_vm.mcp.cardTimeType]))])]) : _vm._e(), _vm._v(" "), (_vm.mcp.expBeginDate && _vm.mcp.expEndDate) ? _c('tr', [_c('th', [_vm._v("设置期限")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(_vm.mcp.expBeginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(_vm.mcp.expEndDate)))])]) : _vm._e(), _vm._v(" "), (_vm.mcp.usableDays) ? _c('tr', [_c('th', [_vm._v("使用天数")]), _vm._v(" "), _c('td', {
    class: {
      red: _vm.mcp.usableDays < 0
    }
  }, [_vm._v(_vm._s(_vm.mcp.usableDays) + " 天")])]) : _vm._e(), _vm._v(" "), _c('tr', {
    staticClass: "page-hidden"
  }, [_c('th', [_vm._v("流水号")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(Date.new(_vm.mcp.createTime).getTime()))])]), _vm._v(" "), (_vm.mcp.remark || _vm.mcp.paymentType > 4) ? _c('tr', [_c('th', [_vm._v("备注")]), _vm._v(" "), _c('td', [(_vm.mcp.paymentType === 4) ? _c('i', {
    staticClass: "orange"
  }, [_vm._v("分销奖励")]) : (_vm.mcp.paymentType === 5) ? _c('i', {
    staticClass: "orange"
  }, [_vm._v("会员卡批量新增天数")]) : _c('pre', [_vm._v(_vm._s(_vm.mcp.remark))])])]) : _vm._e(), _vm._v(" "), (_vm.mcp.attachmentImgs) ? _c('tr', {
    staticClass: "hidden"
  }, [_c('th', [_vm._v("附件")]), _vm._v(" "), _c('td', _vm._l((_vm.mcp.attachmentImgs.split(',')), function(img) {
    return _c('a', {
      attrs: {
        "href": _vm.g.Util.getImgUrl(img),
        "target": "_blank"
      }
    }, [_c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(img, 500, 500, 'eeeeee'),
        "width": "150"
      }
    })])
  }), 0)]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "none"
  }, [_c('i-button', {
    staticStyle: {
      "width": "100px"
    },
    on: {
      "click": function($event) {
        _vm.mcpDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "订单信息",
      "width": "850",
      "styles": {
        top: '10px'
      },
      "footer-hide": ""
    },
    model: {
      value: (_vm.moDlg),
      callback: function($$v) {
        _vm.moDlg = $$v
      },
      expression: "moDlg"
    }
  }, [(_vm.mo) ? _c('div', {
    staticClass: "mytbl order-detail"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("订单时间")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.mo.createTime))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("订单状态")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.OrderStatus[_vm.mo.status]))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("会员")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.mo.memberName))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("支付时间")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.mo.transTime))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("支付款")]), _vm._v(" "), _c('td', [(_vm.mo.paymentPoints) ? [_vm._v(_vm._s(_vm.mo.paymentPoints) + " 积分")] : _vm._e(), _vm._v(" "), (_vm.mo.paymentPoints) ? _c('b', {
    staticClass: "big"
  }, [_vm._v("+")]) : _vm._e(), _vm._v(" "), (_vm.mo.paymentAmount) ? [_vm._v("￥" + _vm._s(_vm.mo.paymentAmount) + "\n\t\t\t\t\t\t（\n\t\t\t\t\t\t"), (_vm.mo.paymentCashAmount) ? [_vm._v("微信支付 "), _c('b', [_vm._v(_vm._s(_vm.mo.paymentCashAmount))]), _vm._v(" 元")] : _vm._e(), _vm._v(" "), (_vm.mo.paymentCashAmount && _vm.mo.paymentCardAmount) ? _c('b', {
    staticClass: "big"
  }, [_vm._v("+")]) : _vm._e(), _vm._v(" "), (_vm.mo.paymentCardAmount) ? [_vm._v("储值卡支付 "), _c('b', [_vm._v(_vm._s(_vm.mo.paymentCardAmount))]), _vm._v(" 元")] : _vm._e(), _vm._v("\n\t\t\t\t\t\t）\n\t\t\t\t\t")] : [_vm._v("￥0")]], 2)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("购买商品")]), _vm._v(" "), _c('td', [_c('ul', {
    staticClass: "prds"
  }, _vm._l((_vm.mo.productList), function(p, idx) {
    return _c('li', [_vm._v("\n\t\t\t\t\t\t※ " + _vm._s(p.productName) + " × " + _vm._s(p.unitNum) + "\n\t\t\t\t\t\t"), _c('span', {
      staticClass: "l10"
    }, [_vm._v("\n\t\t\t\t\t\t\t（\n\t\t\t\t\t\t\t"), _c('span', {
      staticClass: "green"
    }, [_vm._v("单价：\n\t\t\t\t\t\t\t"), (p.priceType === 0 || p.priceType === 2) ? [_vm._v(_vm._s(p.pricePoints) + " 分")] : _vm._e(), _vm._v(" "), (p.priceType === 2) ? _c('b', {
      staticClass: "green big"
    }, [_vm._v(" ＋ ")]) : _vm._e(), _vm._v(" "), (p.priceType === 1 || p.priceType === 2) ? [_vm._v("￥" + _vm._s(p.priceAmount))] : _vm._e()], 2), _vm._v("\n\t\t\t\t\t\t\t）\n\t\t\t\t\t\t\t"), (p.consigneeTime || p.refundStatus === 9) ? [_c('span', {
      staticClass: "spt"
    }, [_vm._v("/")]), _vm._v("  \n\t\t\t\t\t\t\t\t"), (p.consigneeTime) ? [_vm._v(" " + _vm._s(p.consigneeTime) + " 领取")] : _vm._e(), _vm._v(" "), (p.refundStatus === 9) ? _c('span', {
      staticClass: "gray"
    }, [_vm._v("（已退）")]) : _vm._e()] : _vm._e()], 2)])
  }), 0)])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "none"
  }, [_c('i-button', {
    staticStyle: {
      "width": "100px",
      "margin-top": "20px"
    },
    on: {
      "click": function($event) {
        _vm.moDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)]), _vm._v(" "), _c('ExportXls', {
    ref: "exportXlsRefs",
    attrs: {
      "totalCount": _vm.couponLogCnt,
      "pageSize": 30,
      "exportFileUrl": _vm.exportFileUrl
    },
    on: {
      "export": _vm.exportFunc
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("优惠券统计概要")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("券名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "65"
    }
  }, [_vm._v("类型")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("券面额")]), _vm._v(" "), _c('th', [_vm._v("发布数量")]), _vm._v(" "), _c('th', [_vm._v("领取人数")]), _vm._v(" "), _c('th', [_vm._v("领取数量")]), _vm._v(" "), _c('th', [_vm._v("已使用数")]), _vm._v(" "), _c('th', [_vm._v("使用率")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("生效时间")]), _vm._v(" "), _c('th', [_vm._v("使用期限")]), _vm._v(" "), _c('th', [_vm._v("每人限领")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("状态")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("领取人类型")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("领取人姓名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("领取人手机")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "180"
    }
  }, [_vm._v("领取时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "280"
    }
  }, [_vm._v("使用时间")]), _vm._v(" "), _c('th', [_vm._v("操作")])])
}]}

/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2045)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1290),
  /* template */
  __webpack_require__(2457),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-70a6df76",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2131)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1291),
  /* template */
  __webpack_require__(2546),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-f873c2da",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1900)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1292),
  /* template */
  __webpack_require__(2311),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-21125854",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2027)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1293),
  /* template */
  __webpack_require__(2439),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6445c128",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2001)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1294),
  /* template */
  __webpack_require__(2414),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-54fd99bc",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2118)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1295),
  /* template */
  __webpack_require__(2532),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-da62da88",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2132)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1296),
  /* template */
  __webpack_require__(2547),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-f8f32960",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2062)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1297),
  /* template */
  __webpack_require__(2474),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7a72fd15",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2133)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1298),
  /* template */
  __webpack_require__(2548),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-fc4813f4",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1988)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1299),
  /* template */
  __webpack_require__(2400),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4e5661c2",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1953)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1300),
  /* template */
  __webpack_require__(2365),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3f0e3a56",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 937:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1976)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1301),
  /* template */
  __webpack_require__(2388),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4a2702bf",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 938:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2071)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1302),
  /* template */
  __webpack_require__(2483),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7f2688a8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1926)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1303),
  /* template */
  __webpack_require__(2338),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-32904d7b",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1905)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1304),
  /* template */
  __webpack_require__(2316),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2348260f",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1902)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1305),
  /* template */
  __webpack_require__(2313),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-219db0c5",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1936)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1306),
  /* template */
  __webpack_require__(2348),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-36f3a55c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1977)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1307),
  /* template */
  __webpack_require__(2389),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4a342e0d",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 944:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2100)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1308),
  /* template */
  __webpack_require__(2513),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-acd9ec8e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1871)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1309),
  /* template */
  __webpack_require__(2280),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-12bc8d6e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2093)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1310),
  /* template */
  __webpack_require__(2506),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-9fb69b24",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 947:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1856)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1311),
  /* template */
  __webpack_require__(2264),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-09be1a9a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 948:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1909)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1312),
  /* template */
  __webpack_require__(2321),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-284e6972",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1916)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1313),
  /* template */
  __webpack_require__(2328),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2ba35406",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 950:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1921)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1314),
  /* template */
  __webpack_require__(2333),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2dd8e8a2",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2015)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1315),
  /* template */
  __webpack_require__(2426),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5b75e482",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 952:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1837)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1316),
  /* template */
  __webpack_require__(2245),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-01355630",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2085)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1317),
  /* template */
  __webpack_require__(2498),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-92c2c4aa",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2101)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1318),
  /* template */
  __webpack_require__(2514),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-b1531382",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 955:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1876)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1319),
  /* template */
  __webpack_require__(2285),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-17074fde",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 956:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2030)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1320),
  /* template */
  __webpack_require__(2442),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-687e02a6",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});