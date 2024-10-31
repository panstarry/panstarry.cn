webpackJsonp([8],{

/***/ 1268:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data() {
    return {
      g: $,
      editable: $.data.user.isShopOwner,
      staffList: null,
      custAssignConf: {
        confId: null,
        taskConf: null,
        fromStaffId: $.data.user.staffId,
        custLevel: 3,
        assignCnt: null,
        assignFrq: null
      },
      taskConfList: [[null, null], [null, null]],
      followTaskList: [],
      custAssignLogCount: null,
      custAssignLogList: null
    };
  },

  created() {
    this.queryStaffList();
    this.queryCustAssignConf();
    this.queryFollowTask();
    this.queryCustAssignLogList();
  },

  methods: {
    queryStaffList() {
      $.Req.service($.SvName.STAFF_QUERY, { status: 0, needBaseInfo: true }, ret => {
        this.staffList = ret.staffList;
      });
    },

    queryCustAssignConf() {
      $.Req.service($.SvName.CUST_ASSIGN_CONF_QUERY, {}, ret => {
        if (ret.custAssignConf) {
          this.custAssignConf = ret.custAssignConf;
          if (this.custAssignConf.taskConf) {
            this.taskConfList = [];
            for (let c of this.custAssignConf.taskConf.split(',')) {
              let items = c.split(':');
              this.taskConfList.push([parseInt(items[0]), parseInt(items[1])]);
            }
          }
        }
      });
    },

    queryFollowTask() {
      $.Req.service($.SvName.CUST_FOLLOW_TASK_QUERY, {}, ret => {
        this.followTaskList = ret.custFollowTaskList;
      });
    },

    addTaskConf() {
      this.taskConfList.push([null, null]);
    },

    saveCustAssignConf() {
      let taskConfs = [];
      for (let c of this.taskConfList) {
        if (c[0] && c[1]) {
          taskConfs.push(c[0] + ':' + c[1]);
        }
      }
      this.custAssignConf.taskConf = taskConfs.join(',');

      let args = {
        custAssignConf: this.custAssignConf
      };
      $.Req.service($.SvName.CUST_ASSIGN_CONF_SAVE, args, ret => {
        if (ret.confId) {
          this.custAssignConf.confId = ret.confId;
        }
        $.Msg.success($.Lang.SAVE_SUCCESS);
      });
    },

    queryCustAssignLogList(page) {
      if (!page) this.custAssignLogCount = null;
      let args = {
        page: page
      };
      $.Req.service($.SvName.CUST_ASSIGN_LOG_QUERY, args, ret => {
        this.custAssignLogList = ret.custAssignLogList;
        if (!page) {
          this.custAssignLogCount = ret.count;
        }
      });
    }
  }
});

/***/ }),

/***/ 1269:
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


/* harmony default export */ __webpack_exports__["default"] = ({
	components: {},
	data() {
		return {
			g: $,
			editable: $.data.user.isShopOwner,
			retTypeDlg: false,
			resultTypeList: [],
			resultType: {}
		};
	},

	created() {
		this.queryResultTypeList();
	},

	methods: {
		openRetTypeDlg() {
			this.retTypeDlg = true;
			this.resultType = {
				orderNo: this.resultTypeList.length + 1,
				typeName: null,
				typeDesc: null
			};
		},

		queryResultTypeList() {
			$.Req.service($.SvName.CUST_FOLLOW_RESULT_TYPE_QUERY, {}, ret => {
				this.resultTypeList = ret.resultTypeList;
			});
		},

		editResultType(idx) {
			$.Util.copyAttributes(this.resultTypeList[idx], this.resultType);
			this.retTypeDlg = true;
		},

		saveResultType() {
			if (!this.resultType.typeName) {
				$.Msg.error('请输入类型名称');
				return;
			}

			let args = {
				actionType: this.resultType.typeId ? 'U' : 'I',
				custFollowResultType: this.resultType
			};
			$.Req.service($.SvName.CUST_FOLLOW_RESULT_TYPE_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.queryResultTypeList();
				this.retTypeDlg = false;
			}, true);
		},

		deleteResultType(idx) {
			let msg = '确定要删除【{0}】吗？'.format(this.resultTypeList[idx].typeName);
			$.Dlg.confirm(msg, yes => {
				let args = {
					actionType: 'D',
					deleteId: this.resultTypeList[idx].typeId
				};
				$.Req.service($.SvName.CUST_FOLLOW_RESULT_TYPE_SAVE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					this.queryResultTypeList();
					this.retTypeDlg = false;
				}, true);
			});
		}
	}
});

/***/ }),

/***/ 1270:
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

/* harmony default export */ __webpack_exports__["default"] = ({
		components: {},
		data() {
				return {
						g: $,
						editable: $.data.user.isShopOwner,
						followTaskDlg: false,
						salesList: [],
						followTask: {
								custLevel: ''
						},
						followTaskList: null,
						salesMap: {},
						salesIdList: []
				};
		},

		created() {
				this.querySales(() => {
						this.queryFollowTask();
				});
		},

		methods: {
				querySales(callback = null) {
						$.Req.service($.SvName.STAFF_QUERY, { status: 0, needBaseInfo: true, sysRid: 4 }, ret => {
								this.salesList = ret.staffList;
								for (let s of ret.staffList) {
										this.salesMap[s.staffId] = s.name;
								}
								if (callback) callback();
						});
				},

				queryFollowTask() {
						$.Req.service($.SvName.CUST_FOLLOW_TASK_QUERY, {}, ret => {
								for (let t of ret.custFollowTaskList) {
										let staffNames = [];
										for (let staffId of t.staffIds.split(',')) {
												staffNames.push(this.salesMap[parseInt(staffId)]);
										}
										t.staffNames = staffNames.join('、');
								}
								this.followTaskList = ret.custFollowTaskList;
						});
				},

				openFollowTaskDlg() {
						this.followTask = {
								orderNo: this.followTaskList ? this.followTaskList.length + 1 : 1,
								taskName: null,
								custLevel: ''
						};
						this.salesIdList = [];
						this.followTaskDlg = true;
				},

				editFollowTask(idx) {
						$.Util.copyAttributes(this.followTaskList[idx], this.followTask);
						this.salesIdList = [];
						for (let s of this.followTask.staffIds.split(',')) {
								this.salesIdList.push(parseInt(s));
						}
						this.followTaskDlg = true;
				},

				saveFollowTask() {
						if ($.Util.isEmpty(this.followTask.orderNo)) {
								$.Msg.error('请输入序号');
								return;
						}
						if (!this.followTask.taskName) {
								$.Msg.error('请输入任务名称');
								return;
						}
						if ($.Util.isEmpty(this.followTask.unfollowDays)) {
								$.Msg.error('请输入未跟进天数');
								return;
						}
						if ($.Util.isEmpty(this.salesIdList)) {
								$.Msg.error('请选择适用销售');
								return;
						}

						this.followTask.staffIds = this.salesIdList.join(',');
						let args = {
								actionType: this.followTask.taskId ? 'U' : 'I',
								custFollowTask: this.followTask
						};
						$.Req.service($.SvName.CUST_FOLLOW_TASK_SAVE, args, ret => {
								$.Msg.success($.Lang.OPT_SUCCESS);
								this.queryFollowTask();
								this.followTaskDlg = false;
						}, true);
				},

				delFollowTask(idx) {
						let msg = '确定要删除【{0}】吗？'.format(this.followTaskList[idx].taskName);
						$.Dlg.confirm(msg, yes => {
								let args = {
										actionType: 'D',
										deleteId: this.followTaskList[idx].taskId
								};
								$.Req.service($.SvName.CUST_FOLLOW_TASK_SAVE, args, ret => {
										$.Msg.success($.Lang.OPT_SUCCESS);
										this.queryFollowTask();
										this.followTaskDlg = false;
								}, true);
						});
				},

				checkAllSales() {
						this.salesIdList = [];
						for (let s of this.salesList) {
								this.salesIdList.push(s.staffId);
						}
				}
		}
});

/***/ }),

/***/ 1272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cust_edit__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cust_edit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__cust_edit__);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	components: { CustCreate: __WEBPACK_IMPORTED_MODULE_0__cust_edit___default.a },
	data() {
		return {};
	},

	created() {},

	methods: {}
});

/***/ }),

/***/ 1273:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	components: {},
	data() {
		const validateCustPhoneNo = (rule, value, callback) => {
			if (value && !$.Util.validatePhoneNo(value)) {
				callback(new Error($.Lang.PHONE_NO_ERR));
			} else {
				$.Req.service($.SvName.CUST_NAME_QUERY, { phoneNo: value, custId: this.custId }, ret => {
					if (ret.name) {
						callback(new Error($.Lang.CUST_PHONE_EXIST.format(ret.name)));
					} else {
						callback();
					}
				});
			}
		};

		const validateIdNo = (rule, value, callback) => {
			if (value) {
				if ($.Util.validateIdNo(value)) {
					this.cust.sex = $.Util.getSexFromIdNo(value);
					let items = $.Util.getBirthdayFromIdNo(value);
					this.cust.birthdayYear = items[0];
					this.cust.birthdayMonth = items[1];
					this.cust.birthdayDay = items[2];
					callback();
				} else {
					callback(new Error($.Lang.ID_NO_ERR));
				}
			} else {
				callback();
			}
		};

		return {
			g: $,
			custId: null,
			submitLoading: false,
			chargeItemList: [],
			cust: {
				custType: 0, name: null, phoneNo: null, sex: null, ownerStaffId: null,
				custLevel: 3, jobTitle: null, hobby: null, visitTime: null, wxNo: null,
				orgName: null, orgTypes: null, remark: null, custAddr: null, idNo: null, homeAddr: null,
				birthdayYear: null, birthdayMonth: null, birthdayDay: null
			},
			custMore: {
				orgTypeList: [],
				shapeList: [],
				hobbyList: []
			},
			requiredFileds: ['custType', 'phoneNo', 'name', 'sex', 'custLevel'],
			formRule: {
				phoneNo: [{ validator: validateCustPhoneNo, trigger: 'blur' }],
				idNo: [{ validator: validateIdNo, trigger: 'blur' }]
			},
			dict: {
				staffList: [],
				custSourceList: []
			},
			isMember: false,
			depositChargeItemId: null,
			hasDepositChage: false,
			depositPaymentChannel: null,
			isDepositCust: false,
			phoneNoLogDlg: false,
			phoneNoLogList: null,
			wxNoLogDlg: false,
			wxNoLogList: null,
			editable: null
		};
	},

	created() {
		this.custId = this.$route.params.custId;
		$.Util.addRequiredFieldsRules(this.formRule, this.requiredFileds);
		if (!this.custId) this.editable = true;

		// query staff as sales
		$.Req.service($.SvName.STAFF_QUERY, { status: 0, needBaseInfo: true }, ret => {
			this.dict.staffList = ret.staffList;
			if (!this.custId) {
				this.cust.ownerStaffId = $.data.user.staffId;
			}
			this.queryCust();
		});

		// query cust_source
		$.Req.service($.SvName.CUST_SOURCE_QUERY, { isBaseInfo: true }, ret => {
			this.dict.custSourceList = ret.custSourceList;
		});

		this.queryChargeItemList();
	},

	methods: {
		queryCust() {
			if (this.$route.params.custId) {
				let args = { custId: this.custId };
				$.Req.service($.SvName.CUST_QUERY, args, ret => {
					if (ret.cust) {
						if (ret.cust.orgTypes) {
							for (let t of ret.cust.orgTypes.split(',')) this.custMore.orgTypeList.push(parseInt(t));
						}
						if (ret.cust.hobby) {
							for (let t of ret.cust.hobby.split(',')) this.custMore.hobbyList.push(parseInt(t));
						}
						ret.cust.sex = ret.cust.sex ? 1 : 0;
						if (ret.cust.jobTitle === undefined) ret.cust.jobTitle = null;
						this.cust = ret.cust;
						this.cust.birthdayMonth = ret.cust.birthdayDate ? parseInt(ret.cust.birthdayDate / 100) : null;
						this.cust.birthdayDay = ret.cust.birthdayDate ? parseInt(ret.cust.birthdayDate % 100) : null;
						this.isMember = this.cust.custType === 4;
						this.isDepositCust = this.cust.custType === 2;
						if (this.isDepositCust) {
							this.queryDepositCharge();
						}

						if (this.cust.ownerStaffId === $.data.user.staffId || $.data.user.isShopOwner) {
							this.editable = true;
						}
						if (!this.editable) {
							$.Req.service($.SvName.SUB_STAFF_QUERY, { staffId: $.data.user.staffId }, r => {
								for (let s of r.staffList) {
									if (s.staffId === this.cust.ownerStaffId) {
										this.editable = true;
										break;
									}
								}
								if (!this.editable) this.editable = false;
							});
						}
					} else {
						$.Dlg.error($.Lang.NOT_FOUND_TIPS);
					}
				});
			}
		},

		handleSubmit() {
			try {
				this.$refs.cust.validate(valid1 => {
					if (!valid1) {
						$.Msg.error($.Lang.SUBMIT_ERR);
						return false;
					}
					if (this.cust.custType === 2) {
						if (!this.depositChargeItemId) {
							$.Dlg.error('这是订金客户，请选择订金资费项。');
							return;
						}
						if (!this.depositPaymentChannel) {
							$.Dlg.error('这是订金客户，请选择订金的支付方式。');
							return;
						}
					}
					if (this.cust.custType < 3 && !this.cust.custSrc) {
						$.Dlg.error('请选择客户来源');
						return;
					}
					if (this.cust.birthdayMonth && this.cust.birthdayDay) {
						this.cust.birthdayDate = parseInt(this.cust.birthdayMonth * 100) + parseInt(this.cust.birthdayDay);
					} else if (this.cust.birthdayMonth || this.cust.birthdayDay) {
						$.Msg.error('请正确填写客户生日');
						return false;
					}
					if (!this.cust.birthdayMonth && !this.cust.birthdayDay) {
						this.cust.birthdayDate = null;
					}

					if (this.cust.custType === 0) {
						this.cust.vistTime = null;
					}

					this.cust.orgTypes = this.custMore.orgTypeList ? this.custMore.orgTypeList.join(',') : null;
					this.cust.hobby = this.custMore.hobbyList ? this.custMore.hobbyList.join(',') : null;
					let args = {
						actionType: this.custId ? 'U' : 'I',
						cust: this.cust,
						depositChargeItemId: this.depositChargeItemId,
						depositPaymentChannel: this.depositPaymentChannel
					};

					this.submitLoading = true;
					$.Req.service($.SvName.CUST_SAVE, args, ret => {
						this.submitLoading = false;
						$.Msg.success($.Lang.OPT_SUCCESS);
						if (args.actionType === 'I') {
							this.$router.push('/cust-edit/' + ret.custId);
						}
					}, false, err => {
						this.submitLoading = false;
						alert(err);
					});
				});
			} catch (e) {
				$.Util.handleException(e, 'cust-edit:handleSubmit');
			}
		},

		queryChargeItemList() {
			let args = { isBaseInfo: true, status: 0, arAp: 0, isCommodity: false };
			$.Req.service($.SvName.CHARGE_ITEM_QUERY, args, ret => {
				this.chargeItemList = ret.chargeItemList;
			});
		},

		queryDepositCharge() {
			let args = {
				chargeFrom: 1,
				refId: this.custId,
				page: 1
			};
			$.Req.service($.SvName.CHARGE_QUERY, args, ret => {
				if (ret.chargeList && ret.chargeList.length === 1) {
					let charge = ret.chargeList[0];
					this.depositChargeItemId = charge.chargeItemId;
					this.depositPaymentChannel = charge.paymentChannel;
					this.hasDepositChage = true;
				}
			});
		},

		queryPhoneInMember() {
			if (!this.cust.phoneNo || !$.Util.validatePhoneNo(this.cust.phoneNo)) {
				return;
			}
			$.Req.service($.SvName.MEMBER_PHONE_NO_FIND, { phoneNo: this.cust.phoneNo }, ret => {
				if (ret.result) {
					$.Dlg.warning($.Lang.MEMBER_PHONE_NO_EXIST, null, false);
				}
			});
		},

		queryCustPhoneNoLog() {
			$.Req.service($.SvName.CUST_CHANGE_LOG_QUERY, { custId: this.custId, valueType: 0 }, ret => {
				this.phoneNoLogList = ret.logList;
				this.phoneNoLogDlg = true;
			}, true);
		},

		queryCustWxNoLog() {
			$.Req.service($.SvName.CUST_CHANGE_LOG_QUERY, { custId: this.custId, valueType: 1 }, ret => {
				this.wxNoLogList = ret.logList;
				this.wxNoLogDlg = true;
			}, true);
		}
	}
});

/***/ }),

/***/ 1274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cust_detail_vue__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cust_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__cust_detail_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { CustDetail: __WEBPACK_IMPORTED_MODULE_0__cust_detail_vue___default.a },
	data() {
		return {
			g: $,
			canQueryAll: $.Util.hasRoleFunc($.Dict.RoleFunc.VIEW_ALL_CUST_FOLLOW.value),
			dict: {
				staffList: [],
				custSrcList: []
			},
			custSrcMap: {},
			custDlgView: false,
			totalCount: null,
			totalPages: null,
			queryPage: null,
			custFollowList: [],
			query: {
				ownerUidList: [],
				followDateRange: [],
				ignoreNullResult: false,
				followResultType: null,
				custSrcList: []
			},
			selectCustId: 0,
			custDlgTitle: null,
			ownerUid: null,
			multSelectOwner: false,
			resultTypeList: [],
			resultTypeMap: {},
			resultTypeStatList: null
		};
	},

	created() {
		this.queryCustSrcList();
		if (this.canQueryAll) {
			$.Req.service($.SvName.STAFF_QUERY, { status: 0, needBaseInfo: true, sysRid: 4 }, ret => {
				this.dict.staffList = ret.staffList;
			});
		} else {
			let self = { uid: $.data.user.uid, name: $.data.user.uname };
			this.dict.staffList = [self];
			this.query.ownerUid = self.uid;
			this.query.ownerUidList.push(self.uid);
			$.Req.service($.SvName.SUB_STAFF_QUERY, { staffId: $.data.user.staffId }, ret => {
				if (ret.staffList) {
					for (let staff of ret.staffList) {
						this.dict.staffList.push(staff);
					}
				}
			});
		}
		this.query.followDateRange = [new Date(), new Date()];
		this.queryResultTypeList(this.queryCustFollow);
	},

	methods: {
		queryCustSrcList() {
			$.Req.service($.SvName.CUST_SOURCE_QUERY, { isBaseInfo: true }, ret => {
				this.dict.custSrcList = ret.custSourceList;
			});
		},

		setQueryDate(days) {
			let beginDate = new Date();
			let endDate = new Date();
			if (days === 1) {
				beginDate = beginDate.setTime(beginDate.getTime() - 3600 * 1000 * 24);
				endDate = beginDate;
			} else if (days === 2) {
				beginDate = beginDate.setTime(beginDate.getTime() - 3600 * 1000 * 24 * 2);
				endDate = beginDate;
			} else if (days > 2) {
				beginDate = beginDate.setTime(beginDate.getTime() - 3600 * 1000 * 24 * days);
			}
			this.query.followDateRange = [beginDate, endDate];

			this.queryCustFollow();
		},

		resetQuery() {
			this.query.followDateRange = [new Date(), new Date()];
			this.query.custSrcList = [];
		},

		selectCustOwner(val) {
			this.queryCustFollow(null);
		},

		queryCustFollow(page = null) {
			if (!page) {
				this.totalCount = 0;
			}
			let args = {
				needCustDetail: true,
				needStatResultType: true,
				ignoreNullResult: this.query.ignoreNullResult,
				followResultType: this.query.followResultType,
				custSrcIdList: this.query.custSrcList,
				page: page
			};

			if (this.multSelectOwner) {
				args.createUidList = this.query.ownerUidList;
			} else {
				args.createUidList = this.query.ownerUid ? [this.query.ownerUid] : [];
			}
			if (this.query.followDateRange && this.query.followDateRange.length === 2) {
				args.createDateBegin = Date.new(this.query.followDateRange[0]);
				args.createDateEnd = Date.new(this.query.followDateRange[1]);
			} else {
				$.Dlg.error('请输入完整的跟进日期范围');
				return;
			}
			$.Req.service($.SvName.CUST_FOLLOW_QUERY, args, ret => {
				this.custFollowList = ret.custFollowList;
				if (!page) {
					this.totalCount = ret.count;
					let countSum = 0;
					for (let r of ret.resultTypeStatList) {
						countSum += r.count;
					}
					for (let r of ret.resultTypeStatList) {
						r.rate = r.count / countSum;
					}
					this.resultTypeStatList = ret.resultTypeStatList;
				}
			}, true);
		},

		changePageNo(page) {
			this.queryCustFollow(page);
			window.scrollTo(0, 0);
		},

		viewCust(custId, custName) {
			this.selectCustId = custId;
			this.custDlgTitle = '客户详情 - ' + custName;
			this.custDlgView = true;
		},

		queryResultTypeList(callback) {
			$.Req.service($.SvName.CUST_FOLLOW_RESULT_TYPE_QUERY, { needBase: true }, ret => {
				this.resultTypeList = ret.resultTypeList;
				for (let r of ret.resultTypeList) {
					this.resultTypeMap[r.typeId] = r.typeName;
				}
				if (callback) callback();
			});
		},

		changeIgnoreNullResult(val) {
			this.queryCustFollow();
		},

		queryByFollowResultType(val) {
			if (val === this.query.followResultType) val = null;
			this.query.followResultType = val;
			this.queryCustFollow();
		},

		checkAllOwnerStaff() {
			this.query.ownerUidList = [];
			for (let s of this.dict.staffList) {
				this.query.ownerUidList.push(s.uid);
			}
		}
	}
});

/***/ }),

/***/ 1275:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	components: {},
	data() {
		return {
			g: $,
			canQueryAll: $.Util.hasRoleFunc($.Dict.RoleFunc.VIEW_ALL_CUST_FOLLOW.value),
			staffList: [],
			statDateList: [],
			cntSumStatList: [],
			followCntGrid: {},
			query: {
				ownerUidList: [],
				followCntStatDates: [null, new Date()]
			},
			dict: {
				staffList: []
			},
			dateOption: {
				shortcuts: [{
					text: '最近一周',
					value() {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
						return [start, end];
					}
				}, {
					text: '最近半个月',
					value() {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 15);
						return [start, end];
					}
				}, {
					text: '最近一个月',
					value() {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 31);
						return [start, end];
					}
				}]
			}
		};
	},

	created() {
		this.query.followCntStatDates[0] = new Date(new Date().getTime() - 14 * 3600000 * 24);
		this.querySales(this.statCustFollow);
	},

	methods: {
		querySales(callback) {
			if (this.canQueryAll) {
				$.Req.service($.SvName.STAFF_QUERY, { status: 0, needBaseInfo: true, sysRid: 4 }, ret => {
					this.dict.staffList = ret.staffList;
					for (let s of ret.staffList) {
						this.query.ownerUidList.push(s.uid);
					}
					callback();
				});
			} else {
				let self = { uid: $.data.user.uid, name: $.data.user.uname };
				this.dict.staffList = [self];
				this.query.ownerUid = self.uid;
				this.query.ownerUidList.push(self.uid);
				$.Req.service($.SvName.SUB_STAFF_QUERY, { staffId: $.data.user.staffId }, ret => {
					if (ret.staffList) {
						for (let staff of ret.staffList) {
							this.dict.staffList.push(staff);
							this.query.ownerUidList.push(staff.uid);
						}
					}
					callback();
				});
			}
		},

		statCustFollow() {
			let args = {
				beginDate: this.query.followCntStatDates[0],
				endDate: this.query.followCntStatDates[1],
				createUidList: this.query.ownerUidList
			};
			if (!this.canQueryAll && $.Util.isEmptyArray(this.query.ownerUidList)) {
				$.Msg.error('请选择销售');
				return;
			}

			if ($.Util.calcDateDiffDays(args.endDate, args.beginDate) > 31) {
				$.Msg.error('统计日期范围不能超过31天');
				return;
			}

			$.Req.service($.SvName.CUST_FOLLOW_STAT, args, ret => {
				this.cntSumStatList = ret.cntSumStatList;
				ret.statDateList.reverse();
				this.statDateList = ret.statDateList;
				let grid = {};
				for (let r of ret.cntStatList) {
					if (!grid[r.dateId]) grid[r.dateId] = {};
					grid[r.dateId][r.ownerId] = r.followCnt;
				}
				this.followCntGrid = grid;
			}, true);
		},

		formatDateId(dateId) {
			let dateIdStr = dateId + '';
			return '{0}/{1}'.format(parseInt(dateIdStr.substr(4, 2)), dateIdStr.substr(6, 2));
		}
	}
});

/***/ }),

/***/ 1276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_help_vue__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_help_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cust_follow_vue__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cust_follow_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__cust_follow_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cust_detail_vue__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cust_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__cust_detail_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { Help: __WEBPACK_IMPORTED_MODULE_0__components_help_vue___default.a, CustFollow: __WEBPACK_IMPORTED_MODULE_1__cust_follow_vue___default.a, CustDetail: __WEBPACK_IMPORTED_MODULE_2__cust_detail_vue___default.a },
	data() {
		return {
			g: $,
			today: new Date(),
			dict: {
				staffList: [],
				custSrcList: []
			},
			unfollowDays: null,
			custSrcMap: {},
			totalCount: 0,
			totalPages: null,
			queryPage: null,
			custList: [],
			reminderDateList: [],
			isSelectAll: false,
			custCkList: new Array(50),
			query: {
				ownerStaffId: $.data.user.staffId,
				ownerStaffIdList: [],
				custLevel: null,
				followDateRange: [],
				orderBy: 'create_time',
				ascOrDesc: 'desc',
				noneFollow: false
			},
			custFollowTit: '',
			custFollowDlgView: false,
			selectCustId: 0,
			selectCustIdForFollow: 0,
			selectCustIdx: null,
			canCreateCustFollow: false,
			custDlgView: false,
			custDlgTitle: null,
			queryInAll: false,
			custFollowTaskList: null,
			selectTaskIdx: 0,
			custCountsOfFollowTask: []
		};
	},

	created() {
		this.initCustOwner();
		this.queryCustSource();
		this.queryCustFollowTask(() => {
			if (this.custFollowTaskList && this.custFollowTaskList.length) {
				this.selectTaskIdx = 0;
				this.queryCustCountOfFollowTask();
				this.queryCustByTask(this.custFollowTaskList[0]);
			}
		});
	},

	methods: {
		queryCustSource() {
			$.Req.service($.SvName.CUST_SOURCE_QUERY, { isBaseInfo: true }, ret => {
				this.dict.custSrcList = ret.custSourceList;
				for (let s of ret.custSourceList) {
					this.custSrcMap[s.sourceId] = s.sourceName;
				}
			});
		},

		initCustOwner() {
			if ($.data.user.isShopOwner) {
				// query staff
				$.Req.service($.SvName.STAFF_QUERY, { status: 0, needBaseInfo: true, sysRid: 4 }, ret => {
					this.dict.staffList = ret.staffList;
				});
			} else {
				this.setOwnerStaffIds();
			}
		},

		setOwnerStaffIds() {
			let self = { staffId: $.data.user.staffId, name: $.data.user.uname };
			this.dict.staffList = [self];
			this.query.ownerStaffIdList = [];
			this.query.ownerStaffIdList.push(self.staffId);
			this.query.ownerStaffId = self.staffId;
			$.Req.service($.SvName.SUB_STAFF_QUERY, { staffId: $.data.user.staffId }, ret => {
				if (ret.staffList) {
					for (let staff of ret.staffList) {
						this.dict.staffList.push(staff);
					}
				}
			});
		},

		queryCustFollowTask(callback) {
			let args = {
				staffId: this.query.ownerStaffId
			};
			$.Req.service($.SvName.CUST_FOLLOW_TASK_QUERY, args, ret => {
				this.custFollowTaskList = ret.custFollowTaskList;
				if (callback) callback();
			});
		},

		changeCustFollowTask(idx) {
			this.selectTaskIdx = idx;
			this.queryCustByTask(this.custFollowTaskList[idx]);
		},

		queryCust(newQuery = true) {
			let args = {};
			if (this.query.custFlag && $.Util.validatePhoneNo(this.query.custFlag)) {
				this.quickQuery();
				return;
			}

			if (!this.mutltiSelectOwner && this.query.ownerStaffId) {
				this.query.ownerStaffIdList = [this.query.ownerStaffId];
			}
			if ($.Util.isEmptyArray(this.query.ownerStaffIdList) && !$.data.user.isShopOwner) {
				$.Dlg.error('请选择客户负责人');
				return;
			}

			if (newQuery) {
				this.totalCount = 0;
				this.queryPage = null;
			}

			args = {
				page: this.queryPage,
				ownerStaffIdList: this.query.ownerStaffIdList,
				custLevel: this.query.custLevel > -1 ? this.query.custLevel : null,
				noneFollow: this.query.noneFollow,
				orderBy: this.query.orderBy,
				ascOrDesc: this.query.ascOrDesc
			};
			if (this.query.followDateRange.length === 2) {
				args.followDateBegin = this.query.followDateRange[0];
				args.followDateEnd = this.query.followDateRange[1];
				args.noneFollow = false;
			}

			this.custList = [];
			$.Req.service($.SvName.CUST_QUERY, args, ret => {
				for (let c of ret.custList) {
					c.custSrcName = this.custSrcMap[c.custSrc];
				}

				this.custList = ret.custList;
				if (newQuery) {
					this.totalCount = ret.count;
				} else {
					this.unselectAll();
				}

				if (ret.custList.length === 0) {
					$.Msg.warning('未查到符合条件的客户');
				}
			}, true);
		},

		queryCustByReminderDate(date) {
			if (this.query.reminderDate === date) {
				this.query.reminderDate = null;
			} else {
				this.query.reminderDate = date;
			}
			this.queryCust();
		},

		resetQuery() {
			this.unfollowDays = '';
			this.query = {
				phoneNo: null,
				custLevel: null,
				custType: null,
				createDateRange: [],
				visitDateRange: [],
				followDateRange: [],
				orderBy: 'create_time',
				ascOrDesc: 'desc',
				reminderDate: null
			};
			if (!$.data.user.isShopOwner) {
				this.setOwnerStaffIds();
			}
			this.queryCust();
		},

		changePageNo(page) {
			this.queryPage = page;
			this.queryCust(false);
			window.scrollTo(0, 300);
		},

		handleCustFollow(custId, custIdx) {
			let cust = this.custList[custIdx];
			this.canCreateCustFollow = cust.ownerStaffId === $.data.user.staffId || $.data.user.isShopOwner;
			this.custFollowTit = '客户跟进 - ' + cust.name + (cust.orgName ? '（{0}）'.format(cust.orgName) : '');
			this.custFollowDlgView = true;
			this.selectCustIdForFollow = custId;
			this.selectCustIdx = custIdx;
		},

		afterCreateCustFollow(custFollow) {
			let cust = this.custList[this.selectCustIdx];
			cust.followCnt++;
			cust.followTime = $.Util.formatDateTime(new Date());
			let followDesc = '[{0}] '.format($.Dict.FollowTypes[custFollow.followType]);
			if (custFollow.result) {
				followDesc += custFollow.result;
			} else {
				followDesc += custFollow.resultTypeName;
			}
			cust.latestFollowDesc = followDesc;
			this.custFollowDlgView = false;
			if (this.custDlgView) this.custDlgView = false;
			this.queryCustCountOfFollowTask();
		},

		viewCust(idx) {
			let c = this.custList[idx];
			this.selectCustIdx = idx;
			this.selectCustId = c.custId;
			this.custDlgTitle = '客户详情 - {0} （手机号：{1}）'.format(c.name, $.Util.formatPhone(c.phoneNo));
			this.custDlgView = true;
		},

		queryCustByTask(task) {
			let unfollowDays = task.unfollowDays;

			if (unfollowDays > 0) {
				this.query.followDateRange = [new Date('2017-01-01'), new Date(new Date().getTime() - unfollowDays * 3600 * 24 * 1000)];
				this.query.noneFollow = null;
			} else {
				this.query.followDateRange = [];
				this.query.noneFollow = true;
			}
			this.query.custLevel = task.custLevel;
			this.queryCust(true);
		},

		selectCust(idx) {
			this.$set(this.custCkList, idx, !this.custCkList[idx]);
		},

		selectAll() {
			this.isSelectAll = !this.isSelectAll;
			for (let i = 0, len = this.custCkList.length; i < len; i++) {
				this.$set(this.custCkList, i, this.isSelectAll);
			}
		},

		unselectAll() {
			this.isSelectAll = false;
			for (let i = 0, len = this.custCkList.length; i < len; i++) {
				this.$set(this.custCkList, i, false);
			}
		},

		queryBySort(sortField) {
			this.query.orderBy = sortField;
			if (this.query.ascOrDesc === 'asc') this.query.ascOrDesc = 'desc';else this.query.ascOrDesc = 'asc';
			this.queryCust();
		},

		batchUpdateCustLevel(val) {
			let checkedCustIdList = [];
			for (let i = 0, len = this.custCkList.length; i < len && i < this.custList.length; i++) {
				if (this.custCkList[i]) checkedCustIdList.push(this.custList[i].custId);
			}
			if (checkedCustIdList.length > 0) {
				let msg = '您确实要将{0}个客户的级别更新为【{1} 星】吗？'.format(checkedCustIdList.length, val);
				$.Dlg.confirm(msg, () => {
					let args = { newCustLevel: parseInt(val), custIdList: checkedCustIdList };
					$.Req.service($.SvName.CUST_BATCH_UPDATE, args, ret => {
						$.Msg.success($.Lang.OPT_SUCCESS);
						this.queryCust();
						for (let i = 0, len = this.custCkList.length; i < len; i++) {
							this.$set(this.custCkList, i, false);
						}
						this.queryCustCountOfFollowTask();
					}, true);
				});
			} else {
				$.Dlg.error('请选择需要更新的客户。');
			}
		},

		checkAllOwnerStaff() {
			this.query.ownerStaffIdList = [];
			for (let s of this.dict.staffList) {
				this.query.ownerStaffIdList.push(s.staffId);
			}
		},

		queryCustCountOfFollowTask() {
			let args = { staffId: this.query.ownerStaffId };
			$.Req.service($.SvName.CUST_COUNT_OF_FOLLOW_TASK_QUERY, args, ret => {
				this.custCountsOfFollowTask = ret.custCountList;
			});
		},

		changeOwnerStaff() {
			this.queryCustFollowTask(() => {
				if (this.custFollowTaskList && this.custFollowTaskList.length) {
					this.selectTaskIdx = 0;
					this.queryCustCountOfFollowTask();
					this.queryCustByTask(this.custFollowTaskList[0]);
				}
			});
		},

		runCustAssign() {
			$.Req.service($.SvName.CUST_ASSIGN_RUN, {}, ret => {
				$.Msg.info('已分配 {0} 个客户'.format(ret.assignCnt));
				this.queryCustCountOfFollowTask();
			}, true);
		}
	}
});

/***/ }),

/***/ 1277:
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



/* harmony default export */ __webpack_exports__["default"] = ({
	components: { Help: __WEBPACK_IMPORTED_MODULE_0__components_help_vue___default.a },
	data() {
		return {
			g: $,
			acceptFileType: 'application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
			fileFormat: ['.xls'],
			errors: null,
			createdCustCnt: null
		};
	},

	created() {},

	methods: {
		handleBeforeUpload() {
			$.Util.startLoading();
			this.errors = null;
			return true;
		},

		handleUploadSuccess(respons, file) {
			$.Util.endLoading();
			this.errors = respons.data ? respons.data.errors : [];
			if (this.errors && this.errors.length > 0) {
				$.Msg.error($.Lang.SUBMIT_ERR);
			}
			if (respons.msg) {
				$.Dlg.error(respons.msg);
			} else {
				this.createdCustCnt = respons.data.createdCustCnt;
			}
		}
	}
});

/***/ }),

/***/ 1278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cust_follow_result_type_vue__ = __webpack_require__(2191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cust_follow_result_type_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__cust_follow_result_type_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cust_follow_task_conf_vue__ = __webpack_require__(2192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cust_follow_task_conf_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__cust_follow_task_conf_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cust_assign_conf_vue__ = __webpack_require__(2190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cust_assign_conf_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__cust_assign_conf_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { CustFollowResultType: __WEBPACK_IMPORTED_MODULE_0__cust_follow_result_type_vue___default.a, CustFollowTaskConf: __WEBPACK_IMPORTED_MODULE_1__cust_follow_task_conf_vue___default.a, CustAssignConf: __WEBPACK_IMPORTED_MODULE_2__cust_assign_conf_vue___default.a },
  data() {
    return {
      g: $,
      editable: $.data.user.isShopOwner,
      custTransfer: {
        oldCustOwner: null,
        newCustOwner: null,
        custLevel: null
      },
      dict: {
        allStaffList: [],
        activeStaffList: []
      },
      endReminderDate: null
    };
  },

  created() {
    $.Req.service($.SvName.STAFF_QUERY, { needBaseInfo: true }, ret => {
      this.dict.allStaffList = ret.staffList;
    });

    $.Req.service($.SvName.STAFF_QUERY, { status: 0, needBaseInfo: true }, ret => {
      this.dict.activeStaffList = ret.staffList;
    });
  },

  methods: {
    replaceCustOwner() {
      if (!this.custTransfer.oldCustOwner) {
        $.Msg.error("请选择原客户负责人");
        return;
      }
      if (!this.custTransfer.newCustOwner) {
        $.Msg.error("请选择新客户负责人");
        return;
      }
      if (this.custTransfer.oldCustOwner === this.custTransfer.newCustOwner) {
        $.Msg.error("新旧客户负责人不能一样");
        return;
      }

      let msg = "确定更换客户负责人吗？";
      if (!confirm(msg)) {
        return;
      }

      let args = {
        oldOwnerId: this.custTransfer.oldCustOwner,
        newOwnerId: this.custTransfer.newCustOwner,
        custLevel: this.custTransfer.custLevel
      };
      $.Req.service($.SvName.CUST_OWNER_REPLACE, args, ret => {
        $.Dlg.success($.Lang.OPT_SUCCESS);
      });
    },

    clearCustReminderDate() {
      if (!this.endReminderDate) {
        $.Dlg.error("请先设置日期");
        return;
      }

      if (confirm("您确定清空【{0} 之前】的 “客户提醒日期”吗？".format($.Util.formatDate(this.endReminderDate)))) {
        let args = { endReminderDate: this.endReminderDate };
        $.Req.service($.SvName.CUST_REMINDER_DATE_CLEAR, args, ret => {
          $.Dlg.success($.Lang.OPT_SUCCESS);
        });
      }
    }
  }
});

/***/ }),

/***/ 1279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_help_vue__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_help_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cust_follow_vue__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cust_follow_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__cust_follow_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cust_detail_vue__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cust_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__cust_detail_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { Help: __WEBPACK_IMPORTED_MODULE_0__components_help_vue___default.a, CustFollow: __WEBPACK_IMPORTED_MODULE_1__cust_follow_vue___default.a, CustDetail: __WEBPACK_IMPORTED_MODULE_2__cust_detail_vue___default.a },
	data() {
		return {
			g: $,
			custExportPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.CUST_EXPORT.value),
			mutltiSelectOwner: false,
			mutltiSelectCustSrc: false,
			today: new Date(),
			canQueryAllCust: $.Util.hasRoleFunc($.Dict.RoleFunc.CUST_QUERY_ALL.value),
			days: [3, 5, 7, 10, 14, 15, 30, 60, 90, 180, 365],
			dict: {
				staffList: [],
				custSrcList: []
			},
			unfollowDays: null,
			custSrcMap: {},
			totalCount: null,
			totalPages: null,
			queryPage: null,
			custList: [],
			reminderDateList: [],
			custCountStatByOwner: null,
			isSelectAll: false,
			custCkList: new Array(50),
			query: {
				custFlag: null,
				ownerStaffId: null,
				ownerStaffIdList: [],
				custLevel: null,
				custType: null,
				custSrc: null,
				custSrcIdList: [],
				createDateRange: [],
				visitDateRange: [],
				followDateRange: [],
				orderBy: 'create_time',
				ascOrDesc: 'desc',
				noneFollow: false,
				reminderDate: null
			},
			createDateOption: {
				shortcuts: [{
					text: '今天',
					value() {
						const end = new Date();
						const start = new Date();
						return [start, end];
					}
				}, {
					text: '昨天',
					value() {
						const start = new Date(new Date().getTime() - 3600 * 1000 * 24);
						return [start, start];
					}
				}, {
					text: '最近一周',
					value() {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
						return [start, end];
					}
				}, {
					text: '最近一个月',
					value() {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
						return [start, end];
					}
				}, {
					text: '最近两个月',
					value() {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 60);
						return [start, end];
					}
				}, {
					text: '最近三个月',
					value() {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
						return [start, end];
					}
				}]
			},
			custFollowTit: '',
			custFollowDlgView: false,
			selectCustId: 0,
			selectCustIdForFollow: 0,
			selectCustIdx: null,
			canCreateCustFollow: false,
			custDlgView: false,
			custDlgTitle: null,
			queryInAll: false,
			exportDlg: null,
			exportFileUrl: null,
			preQueryArgs: null,
			memberCntInCust: null
		};
	},

	created() {
		this.initCustOwner();

		// query cust_source
		$.Req.service($.SvName.CUST_SOURCE_QUERY, { isBaseInfo: true }, ret => {
			this.dict.custSrcList = ret.custSourceList;
			for (let s of ret.custSourceList) {
				this.custSrcMap[s.sourceId] = s.sourceName;
			}

			this.queryCust();
		});
	},

	methods: {
		initCustOwner() {
			if (this.canQueryAllCust) {
				// query staff
				$.Req.service($.SvName.STAFF_QUERY, { status: 0, needBaseInfo: true }, ret => {
					this.dict.staffList = ret.staffList;
				});
			} else {
				this.setOwnerStaffIds();
			}
		},

		setOwnerStaffIds() {
			let self = { staffId: $.data.user.staffId, name: $.data.user.uname };
			this.dict.staffList = [self];
			this.query.ownerStaffIdList = [];
			this.query.ownerStaffIdList.push(self.staffId);
			this.query.ownerStaffId = self.staffId;
			$.Req.service($.SvName.SUB_STAFF_QUERY, { staffId: $.data.user.staffId }, ret => {
				if (ret.staffList) {
					for (let staff of ret.staffList) {
						this.dict.staffList.push(staff);
					}
				}
			});
		},

		quickQuery(page = null) {
			if (this.query.custFlag) {
				let args = { page: page };
				if (this.queryInAll && !this.canQueryAllCust) {
					args.page = 1;
					args.queryInAll = true;
				}
				if ($.Util.isInteger(this.query.custFlag)) {
					if ($.Util.validatePhoneNo(this.query.custFlag)) {
						args.phoneNo = this.query.custFlag;
					} else {
						args.phoneNoSuffix = this.query.custFlag;
					}
				} else {
					args.name = this.query.custFlag;
					if (!this.canQueryAllCust && !this.queryInAll) {
						args.ownerStaffId = $.data.user.staffId;
					}
				}

				this.preQueryArgs = args;
				$.Req.service($.SvName.CUST_QUERY, args, ret => {
					if (!page) this.totalCount = ret.count;
					this.memberCntInCust = null;
					if (ret.cust) {
						this.custList = [ret.cust];
						this.totalCount = 1;
						$.Msg.info(ret.cust.name + '，终于找到你了');
					} else if (ret.custList) {
						this.custList = ret.custList;
						this.totalCount = ret.custList.length;
					} else {
						this.custList = [];
						this.totalCount = 0;
					}
					if (this.totalCount < 1) {
						$.Msg.warning('未查到符合条件的客户');
					}
				}, true);
			} else {
				$.Msg.error('请输入客户标识');
			}
		},

		queryWithNullOwner() {
			let args = { ownerStaffId: 0 };
			$.Req.service($.SvName.CUST_QUERY, args, ret => {
				this.custList = ret.custList;
				if (!this.custList || this.custList.length === 0) {
					$.Msg.warning('没有发现无人负责的客户');
				} else {
					this.totalCount = ret.count;
					$.Msg.info('有 {0} 个无人负责的客户'.format(ret.count));
				}

				this.queryMemberCntInCusts(args);
			}, true);
		},

		queryCust(newQuery = true, queryAll = false, callback = null) {
			let args = {};
			if (this.query.custFlag && $.Util.validatePhoneNo(this.query.custFlag)) {
				this.quickQuery();
				return;
			}

			if (!this.mutltiSelectOwner && this.query.ownerStaffId) {
				this.query.ownerStaffIdList = [this.query.ownerStaffId];
			}
			if ($.Util.isEmptyArray(this.query.ownerStaffIdList) && !this.canQueryAllCust) {
				$.Dlg.error('请选择客户负责人');
				return;
			}

			if (newQuery) {
				this.totalCount = 0;
				this.queryPage = null;
			}

			if (!queryAll) {
				this.query.noneFollow = this.unfollowDays === -1;
				args = {
					page: this.queryPage,
					ownerStaffIdList: this.query.ownerStaffIdList,
					custType: this.query.custType > -1 ? this.query.custType : null,
					custLevel: this.query.custLevel > -1 ? this.query.custLevel : null,
					noneFollow: this.query.noneFollow,
					reminderDate: this.query.reminderDate,
					orderBy: this.query.orderBy,
					ascOrDesc: this.query.ascOrDesc
				};

				if (this.mutltiSelectCustSrc) {
					if (!$.Util.isEmptyArray(this.query.custSrcIdList)) {
						args.custSrcIdList = this.query.custSrcIdList;
					}
				} else {
					if (this.query.custSrc > -1) {
						args.custSrc = this.query.custSrc;
					}
				}
				if (this.query.createDateRange.length === 2) {
					args.createDateBegin = this.query.createDateRange[0];
					args.createDateEnd = this.query.createDateRange[1];
				}
				if (this.query.visitDateRange.length === 2) {
					args.visitDateBegin = this.query.visitDateRange[0];
					args.visitDateEnd = this.query.visitDateRange[1];
				}
				if (this.query.followDateRange.length === 2) {
					args.followDateBegin = this.query.followDateRange[0];
					args.followDateEnd = this.query.followDateRange[1];
					args.noneFollow = false;
				}
				if (this.query.custFlag) {
					args.name = this.query.custFlag;
				}
			} else {
				args = {};
			}
			this.custList = [];
			this.preQueryArgs = args;
			$.Req.service($.SvName.CUST_QUERY, args, ret => {
				for (let c of ret.custList) {
					c.custSrcName = this.custSrcMap[c.custSrc];
				}

				this.custList = ret.custList;
				if (newQuery) {
					this.totalCount = ret.count;
				} else {
					this.unselectAll();
				}

				if (ret.custList.length === 0) {
					$.Msg.warning('未查到符合条件的客户');
				}
				if (callback) callback();
			}, true);

			if (newQuery) {
				if (!args.reminderDate) {
					args.onlyStatReminderDate = true;
					$.Req.service($.SvName.CUST_QUERY, args, ret => {
						this.reminderDateList = ret.reminderDateList;
					}, false);
				}

				if ($.Util.isEmptyArray(args.ownerStaffIdList) || args.ownerStaffIdList && args.ownerStaffIdList.length > 1) {
					args.onlyStatReminderDate = null;
					args.onlyStatCustCountByOwner = true;
					$.Req.service($.SvName.CUST_QUERY, args, ret => {
						this.custCountStatByOwner = ret.custCountStatByOwner;
					}, false);
				}

				this.queryMemberCntInCusts(args);
			}
		},

		queryMemberCntInCusts(args) {
			args.onlyStatMemberCountInCust = true;
			args.onlyStatCustCountByOwner = null;
			args.onlyStatReminderDate = null;
			$.Req.service($.SvName.CUST_QUERY, args, ret => {
				this.memberCntInCust = ret.memberCount;
			}, false);
		},

		queryCustByOwnerId(ownerStaffId) {
			if ($.Util.isEmpty(ownerStaffId)) ownerStaffId = 0;

			if (ownerStaffId !== this.query.ownerStaffId) {
				this.query.ownerStaffId = ownerStaffId;
				this.query.ownerStaffIdList = [ownerStaffId];
				this.queryCust(true);
			} else {
				if (this.canQueryAllCust) {
					this.query.ownerStaffIdList = null;
					this.query.ownerStaffId = null;
				} else {
					this.query.ownerStaffId = null;
					this.query.ownerStaffIdList = [];
					for (let s of this.dict.staffList) {
						this.query.ownerStaffIdList.push(s.staffId);
					}
				}
				this.queryCust(true);
			}
		},

		queryCustByReminderDate(date) {
			if (this.query.reminderDate === date) {
				this.query.reminderDate = null;
			} else {
				this.query.reminderDate = date;
			}
			this.queryCust();
		},

		resetQuery() {
			this.unfollowDays = '';
			this.query = {
				phoneNo: null,
				custLevel: null,
				custType: null,
				createDateRange: [],
				visitDateRange: [],
				followDateRange: [],
				orderBy: 'create_time',
				ascOrDesc: 'desc',
				reminderDate: null,
				custSrcIdList: []
			};
			if (!this.canQueryAllCust) {
				this.setOwnerStaffIds();
			}
			this.queryCust();
		},

		changePageNo(page) {
			this.queryPage = page;
			this.queryCust(false);
			window.scrollTo(0, 450);
		},

		handleQuery() {
			this.query.reminderDate = null;
			this.queryCust();
		},

		handleCustFollow(custId, custIdx) {
			let cust = this.custList[custIdx];
			this.canCreateCustFollow = cust.ownerStaffId === $.data.user.staffId || $.data.user.isShopOwner;
			this.custFollowTit = '客户跟进 - ' + cust.name + (cust.orgName ? '（{0}）'.format(cust.orgName) : '');
			this.custFollowDlgView = true;
			this.selectCustIdForFollow = custId;
			this.selectCustIdx = custIdx;
		},

		deleteCust(custIdx) {
			let cust = this.custList[custIdx];
			let msg = '确定要删除客户【{0}】吗'.format(cust.name);
			$.Dlg.confirm(msg, yes => {
				let args = { actionType: 'D', deleteId: cust.custId };
				$.Req.service($.SvName.CUST_SAVE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					this.custList.splice(custIdx, 1);
				});
			});
		},

		afterCreateCustFollow(custFollow) {
			let cust = this.custList[this.selectCustIdx];
			cust.followCnt++;
			cust.followTime = $.Util.formatDateTime(new Date());
			let followDesc = '[{0}] '.format($.Dict.FollowTypes[custFollow.followType]);
			if (custFollow.result) {
				followDesc += custFollow.result;
			} else {
				followDesc += custFollow.resultTypeName;
			}
			cust.latestFollowDesc = followDesc;
			this.custFollowDlgView = false;
			if (this.custDlgView) this.custDlgView = false;
		},

		viewCust(idx) {
			let c = this.custList[idx];
			this.selectCustIdx = idx;
			this.selectCustId = c.custId;
			this.custDlgTitle = '客户详情 - {0}（手机号：{1}）'.format(c.name, $.Util.formatPhone(c.phoneNo));
			this.custDlgView = true;
		},

		queryUnfollowCust(days) {
			if (!days) {
				this.query.followDateRange = [];
				return;
			}

			if (days > 0) {
				this.query.followDateRange = [new Date('2017-01-01'), new Date(new Date().getTime() - days * 3600 * 24 * 1000)];
			} else {
				this.query.followDateRange = [];
				this.query.noneFollow = true;
			}

			this.queryCust(true);
		},

		selectCust(idx) {
			this.$set(this.custCkList, idx, !this.custCkList[idx]);
		},

		selectAll() {
			this.isSelectAll = !this.isSelectAll;
			for (let i = 0, len = this.custCkList.length; i < len; i++) {
				this.$set(this.custCkList, i, this.isSelectAll);
			}
		},

		unselectAll() {
			this.isSelectAll = false;
			for (let i = 0, len = this.custCkList.length; i < len; i++) {
				this.$set(this.custCkList, i, false);
			}
		},

		queryBySort(sortField) {
			this.query.orderBy = sortField;
			if (this.query.ascOrDesc === 'asc') this.query.ascOrDesc = 'desc';else this.query.ascOrDesc = 'asc';
			this.queryCust();
		},

		batchUpdateCustLevel(val) {
			let checkedCustIdList = [];
			for (let i = 0, len = this.custCkList.length; i < len && i < this.custList.length; i++) {
				if (this.custCkList[i]) checkedCustIdList.push(this.custList[i].custId);
			}
			if (checkedCustIdList.length > 0) {
				let msg = '您确实要将{0}个客户的级别更新为【{1} 星】吗？'.format(checkedCustIdList.length, val);
				$.Dlg.confirm(msg, () => {
					let args = { newCustLevel: parseInt(val), custIdList: checkedCustIdList };
					$.Req.service($.SvName.CUST_BATCH_UPDATE, args, ret => {
						$.Msg.success($.Lang.OPT_SUCCESS);
						this.queryCust();
						for (let i = 0, len = this.custCkList.length; i < len; i++) {
							this.$set(this.custCkList, i, false);
						}
						this.isSelectAll = false;
					}, true);
				});
			} else {
				$.Dlg.error('请选择需要更新的客户。');
			}
		},

		batchUpdateCustOwner(val) {
			let arr = val.split('\t');
			let staffId = arr[0],
			    staffName = arr[1];
			let checkedCustIdList = [];
			for (let i = 0, len = this.custCkList.length; i < len && i < this.custList.length; i++) {
				if (this.custCkList[i]) checkedCustIdList.push(this.custList[i].custId);
			}
			if (checkedCustIdList.length > 0) {
				let msg = '您确实要将{0}个客户的分配给【{1}】吗？'.format(checkedCustIdList.length, staffName);
				$.Dlg.confirm(msg, () => {
					let args = { newCustOwnerId: parseInt(staffId), custIdList: checkedCustIdList };
					$.Req.service($.SvName.CUST_BATCH_UPDATE, args, ret => {
						$.Msg.success($.Lang.OPT_SUCCESS);
						this.queryCust();
						this.isSelectAll = false;
						for (let i = 0, len = this.custCkList.length; i < len; i++) {
							this.$set(this.custCkList, i, false);
						}
						this.isSelectAll = false;
					}, true);
				});
			} else {
				$.Dlg.error('请选择需要分配的客户。');
			}
		},

		deleteCustList() {
			let checkedCustIdList = [];
			for (let i = 0, len = this.custCkList.length; i < len && i < this.custList.length; i++) {
				if (this.custCkList[i]) checkedCustIdList.push(this.custList[i].custId);
			}
			if (checkedCustIdList.length > 0) {
				let msg = '您确实要删除选择的【{0}个】客户吗？'.format(checkedCustIdList.length);
				$.Dlg.confirm(msg, () => {
					let args = { custIdList: checkedCustIdList };
					$.Req.service($.SvName.CUST_LIST_DELETE, args, ret => {
						$.Msg.success($.Lang.OPT_SUCCESS);
						this.queryCust();
						this.isSelectAll = false;
						for (let i = 0, len = this.custCkList.length; i < len; i++) {
							this.$set(this.custCkList, i, false);
						}
					}, true);
				});
			} else {
				$.Dlg.error('请选择需要删除的客户。');
			}
		},

		checkAllOwnerStaff() {
			this.query.ownerStaffIdList = [];
			for (let s of this.dict.staffList) {
				this.query.ownerStaffIdList.push(s.staffId);
			}
		},

		exportCust() {
			this.exportDlg = true;
			let args = {};
			$.Util.copyAttributes(this.preQueryArgs, args);
			args.isExport = true;
			args.onlyStatCustCountByOwner = null;
			args.onlyStatReminderDate = null;
			args.onlyStatMemberCountInCust = null;
			$.Req.service($.SvName.CUST_QUERY, args, ret => {
				this.exportFileUrl = ret.fileurl;
			}, true);
		},

		selectMultiCusts() {
			let n = prompt('请输入批量选择的数量');
			if (!n && parseInt(n)) return;

			n = parseInt(n);
			for (let i = 0, len = this.custCkList.length; i < len && i < n; i++) {
				this.$set(this.custCkList, i, true);
			}
		}
	}
});

/***/ }),

/***/ 1534:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".remark[data-v-00670a12]{margin-bottom:20px;color:#ff4500}.input-s[data-v-00670a12]{width:180px;display:inline-block}.desc[data-v-00670a12]{margin-top:20px;padding:15px;border-radius:4px;width:500px;background:#fafafa}", ""]);

// exports


/***/ }),

/***/ 1542:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".tips[data-v-03d8a677]{padding-left:10px;color:#aaa}.input[data-v-03d8a677]{width:150px}.task-conf[data-v-03d8a677]{background:#fafafa;padding:10px 0}", ""]);

// exports


/***/ }),

/***/ 1569:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".-style-[data-v-126e9661]{font-size:13px}.-style- .fields[data-v-126e9661]{margin-top:10px}.-style- .fields span[data-v-126e9661]{padding:4px 8px;border-radius:2px;display:inline-block;margin:5px 3px;color:#1aad19;background:#f2f2f2;font-size:12px}.-style- .fields .optional[data-v-126e9661]{width:1000px;margin-top:10px}.-style- .fields .optional span[data-v-126e9661]{display:inline-block;text-align:center;width:110px}.-style- .upload-file[data-v-126e9661]{width:600px}.-style- .err[data-v-126e9661]{margin-top:20px;border-top:1px dotted #ddd;width:900px;padding-top:10px}.-style- .err .tit[data-v-126e9661]{padding:5px 0 8px;color:red;font-weight:700;font-size:15px}.-style- .err ul[data-v-126e9661]{padding:0 0 0 20px;margin:0}.-style- .err li[data-v-126e9661]{color:red;list-style-type:square;padding:3px 0}.-style- .success[data-v-126e9661]{margin-top:15px;color:green;border-top:1px dotted #ddd;width:700px;padding-top:10px;font-size:14px}.-style- .success i.okicon[data-v-126e9661]{font-size:24px;margin-right:10px;position:relative;top:2px}", ""]);

// exports


/***/ }),

/***/ 1632:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1643:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".-quick-query[data-v-39590f88]{height:32px;line-height:32px}.-quick-query .spt[data-v-39590f88]{padding-left:15px;margin-left:20px}.query-right[data-v-39590f88]{border-left:1px solid #eee;padding:8px 10px 10px 25px}.side-query h2[data-v-39590f88]{padding:0 5px;font-size:15px;color:#666}.side-query h2 i[data-v-39590f88]{color:orange;font-weight:400;font-size:14px;padding-right:5px}.side-query .ret[data-v-39590f88]{margin:12px 0 0}.side-query .ret li[data-v-39590f88]{display:inline-block;border:1px solid #f0f0f0;margin:5px;padding:5px 10px;border-radius:2px;cursor:pointer}.side-query .ret li[data-v-39590f88]:hover{border-color:#bbb}.side-query .ret li.on[data-v-39590f88]{border-color:orange;background:#fff}.reminder-dates[data-v-39590f88]{max-height:280px;overflow-y:auto}.cust-ownwer-stat[data-v-39590f88]{overflow-y:auto;max-height:280px;margin-left:5px}.cust-ownwer-stat h2 i[data-v-39590f88]{font-size:16px}.-more-query[data-v-39590f88]{width:540px;padding-top:10px;padding-left:5px;margin-bottom:-5px}.query-cond-inline button[data-v-39590f88]{margin:0}li.item[data-v-39590f88]{display:block;margin-bottom:10px}li.item .label[data-v-39590f88]{width:75px;display:inline-block}li.item.submit[data-v-39590f88]{margin-top:20px}li.item .primary-btn[data-v-39590f88]{width:245px;margin-left:80px;margin-right:10px}li.item .alt-top[data-v-39590f88]{padding-top:3px}.-cust-src[data-v-39590f88]{width:400px;padding-right:10px}.-date[data-v-39590f88]{width:245px;display:inline-block}.-query-loading[data-v-39590f88]{width:100px;margin:-130px auto 0}.sort[data-v-39590f88]{color:#39f;cursor:pointer}.sort i[data-v-39590f88]{font-size:13px;font-weight:400;color:#ff4500}.opt-bar[data-v-39590f88]{margin-bottom:12px}.opt-bar .break[data-v-39590f88]{padding:0 0 0 10px}.opt-bar .ivu-dropdown[data-v-39590f88]{position:relative;top:-1px}.mytbl .opt-list[data-v-39590f88]{position:relative;top:2px}.mytbl .org[data-v-39590f88]{padding-top:6px;color:#999}.mytbl .org i[data-v-39590f88]{font-size:12px;color:#555;padding-right:5px}.shortcuts[data-v-39590f88]{display:inline-block;margin-left:8px;position:relative;top:2px}.shortcuts a[data-v-39590f88]{padding:6px 10px;margin:0 4px;background:#f7f7f7;border-radius:2px;color:#666}.shortcuts a[data-v-39590f88]:hover{background:#eee}.ret-cnt[data-v-39590f88]{position:relative;top:-5px}.ret-cnt u[data-v-39590f88]{font-size:22px;padding:0 5px;color:#1aad19;text-decoration:none}.ret-cnt b[data-v-39590f88]{font-size:14px}.ftxt[data-v-39590f88]{line-height:1.5;color:#888;padding-top:3px;cursor:pointer}.owner-sel[data-v-39590f88]{width:358px;margin-right:10px}", ""]);

// exports


/***/ }),

/***/ 1651:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".query-section th[data-v-3e58ed38]{width:80px;text-align:left;font-weight:400}.query-section td[data-v-3e58ed38],.query-section th[data-v-3e58ed38]{padding:10px 0}.query-section.submit[data-v-3e58ed38]{margin-top:20px}.query-section .primary-btn[data-v-3e58ed38]{width:245px;margin-right:10px}.query-section .alt-top[data-v-3e58ed38]{padding-top:3px}.query-section .-date[data-v-3e58ed38]{width:245px;display:inline-block}", ""]);

// exports


/***/ }),

/***/ 1685:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".query-section th[data-v-4d255be8]{width:80px;text-align:left;font-weight:400}.query-section td[data-v-4d255be8],.query-section th[data-v-4d255be8]{padding:10px 0}.query-section.submit[data-v-4d255be8]{margin-top:20px}.query-section .primary-btn[data-v-4d255be8]{width:245px;margin-right:10px}.query-section .alt-top[data-v-4d255be8]{padding-top:3px}.-long[data-v-4d255be8]{width:552px}.-date[data-v-4d255be8]{width:245px;display:inline-block}.-query-loading[data-v-4d255be8]{width:100px;margin:-130px auto 0}.date-list[data-v-4d255be8]{display:inline-block;margin-left:10px}.date-list li[data-v-4d255be8]{display:inline-block}.date-list li[data-v-4d255be8]:after{content:\"|\";padding:0 10px;color:#ddd}.date-list li[data-v-4d255be8]:last-child:after{content:\"\"}.cust-items[data-v-4d255be8]{display:inline-block;color:#999}.cust-items li[data-v-4d255be8]{display:inline}.cust-items li[data-v-4d255be8]:after{content:\"\\3001\";color:#aaa;padding:0 0 0 2px}.cust-items li[data-v-4d255be8]:last-child:after{content:\"\"}.ivu-checkbox-wrapper[data-v-4d255be8],.ivu-radio-wrapper[data-v-4d255be8]{margin-right:12px}.ivu-checkbox-wrapper[data-v-4d255be8]:hover,.ivu-radio-wrapper[data-v-4d255be8]:hover{color:#2d8cf0}.ret-stat a[data-v-4d255be8]{display:block}.ret-stat .on[data-v-4d255be8]{color:#444}.ret-stat .on[data-v-4d255be8]:after{content:\"\\2714\";padding-left:5px}", ""]);

// exports


/***/ }),

/***/ 1720:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".-date-year[data-v-61f92f46]{width:70px;text-align:center}.-date-month-day[data-v-61f92f46]{width:60px;text-align:center}.submit[data-v-61f92f46]{padding-left:100px}.submit button[data-v-61f92f46]{width:100px}", ""]);

// exports


/***/ }),

/***/ 1742:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".sales[data-v-7008286b]{border:1px solid #dae0e6;padding:10px}", ""]);

// exports


/***/ }),

/***/ 1759:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(873)(false);
// imports


// module
exports.push([module.i, ".tasklist[data-v-79d6b815]{padding:12px 0 0;border-top:1px dotted #ddd;margin-top:12px}.tasklist li[data-v-79d6b815]{display:inline-block;padding:8px 10px;line-height:1;margin:5px;background:#e2e2e2;cursor:pointer}.tasklist li[data-v-79d6b815]:hover{background:#eee}.tasklist li.on[data-v-79d6b815]{background:#f59d00;color:#fff}.tasklist li[data-v-79d6b815]:first-child{margin-left:0}.-quick-query[data-v-79d6b815]{height:32px;line-height:32px}.-quick-query .spt[data-v-79d6b815]{padding-left:15px;margin-left:20px}.query-right[data-v-79d6b815]{border-left:1px solid #eee;padding:8px 10px 10px 25px}.side-query h2[data-v-79d6b815]{padding:0 5px;font-size:15px;color:#666}.side-query h2 i[data-v-79d6b815]{color:orange;font-weight:400;font-size:14px;padding-right:5px}.side-query .ret[data-v-79d6b815]{margin:12px 0 0}.side-query .ret li[data-v-79d6b815]{display:inline-block;border:1px solid #f0f0f0;margin:5px;padding:5px 10px;border-radius:2px;cursor:pointer}.side-query .ret li[data-v-79d6b815]:hover{border-color:#bbb}.side-query .ret li.on[data-v-79d6b815]{border-color:orange;background:#fff}.reminder-dates[data-v-79d6b815]{max-height:280px;overflow-y:auto}.cust-ownwer-stat[data-v-79d6b815]{overflow-y:auto;max-height:280px;margin-left:5px}.cust-ownwer-stat h2 i[data-v-79d6b815]{font-size:16px}.-more-query[data-v-79d6b815]{width:540px;padding-top:10px;padding-left:5px;margin-bottom:-5px}.query-cond-inline button[data-v-79d6b815]{margin:0}li.item[data-v-79d6b815]{display:block;margin-bottom:10px}li.item .label[data-v-79d6b815]{width:75px;display:inline-block}li.item.submit[data-v-79d6b815]{margin-top:20px}li.item .primary-btn[data-v-79d6b815]{width:245px;margin-left:80px;margin-right:10px}li.item .alt-top[data-v-79d6b815]{padding-top:3px}.-long[data-v-79d6b815]{width:452px}.-date[data-v-79d6b815]{width:245px;display:inline-block}.-query-loading[data-v-79d6b815]{width:100px;margin:-130px auto 0}.sort[data-v-79d6b815]{color:#39f;cursor:pointer}.sort i[data-v-79d6b815]{font-size:13px;font-weight:400;color:#ff4500}.opt-bar[data-v-79d6b815]{margin-bottom:12px}.opt-bar .break[data-v-79d6b815]{padding:0 0 0 10px}.opt-bar .ivu-dropdown[data-v-79d6b815]{position:relative;top:-1px}.mytbl .opt-list[data-v-79d6b815]{position:relative;top:2px}.mytbl .org[data-v-79d6b815]{padding-top:6px;color:#999}.mytbl .org i[data-v-79d6b815]{font-size:12px;color:#555;padding-right:5px}.shortcuts[data-v-79d6b815]{display:inline-block;margin-left:8px;position:relative;top:2px}.shortcuts a[data-v-79d6b815]{padding:6px 10px;margin:0 4px;background:#f7f7f7;border-radius:2px;color:#666}.shortcuts a[data-v-79d6b815]:hover{background:#eee}.ret-cnt[data-v-79d6b815]{position:relative;top:-6px;color:#999}.ret-cnt u[data-v-79d6b815]{font-size:22px;padding:0 5px;color:#eda200;text-decoration:none}.ftxt[data-v-79d6b815]{line-height:1.5;color:#888;padding-top:3px;cursor:pointer}.owner-sel[data-v-79d6b815]{width:358px;margin-right:10px}", ""]);

// exports


/***/ }),

/***/ 1835:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1534);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("5c2d047c", content, true, {});

/***/ }),

/***/ 1843:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1542);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("e3640b7a", content, true, {});

/***/ }),

/***/ 1870:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1569);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("a1ee3b72", content, true, {});

/***/ }),

/***/ 1933:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1632);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("81bc9438", content, true, {});

/***/ }),

/***/ 1944:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1643);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("3e869de9", content, true, {});

/***/ }),

/***/ 1952:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1651);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("003e9dc0", content, true, {});

/***/ }),

/***/ 1986:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1685);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("e8358088", content, true, {});

/***/ }),

/***/ 2021:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1720);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("3abc05ea", content, true, {});

/***/ }),

/***/ 2043:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1742);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("203c1c54", content, true, {});

/***/ }),

/***/ 2060:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1759);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(874)("a6701ca6", content, true, {});

/***/ }),

/***/ 2190:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1843)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1268),
  /* template */
  __webpack_require__(2251),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-03d8a677",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2191:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1269),
  /* template */
  __webpack_require__(2304),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2192:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2043)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1270),
  /* template */
  __webpack_require__(2455),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7008286b",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 2243:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "cust"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "cust",
      "page": "cust-more-opt"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('Tabs', {
    attrs: {
      "animated": false
    }
  }, [_c('TabPane', {
    attrs: {
      "label": "跟进结果类型设置"
    }
  }, [_c('cust-follow-result-type')], 1), _vm._v(" "), (_vm.g.data.user.isShopOwner) ? _c('TabPane', {
    attrs: {
      "label": "跟进任务设置"
    }
  }, [_c('cust-follow-task-conf')], 1) : _vm._e(), _vm._v(" "), _c('TabPane', {
    attrs: {
      "label": "客户分配设置"
    }
  }, [_c('cust-assign-conf')], 1), _vm._v(" "), _c('TabPane', {
    attrs: {
      "label": "更换客户负责人"
    }
  }, [_c('section', {
    staticStyle: {
      "height": "500px"
    }
  }, [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "l orange"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor"
  }), _vm._v("\n              常用于员工离职时更换客户负责人；即将【原客户负责人】名下的符合条件的客户全部转移到【新客户负责人】下\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "r orange"
  }, [_vm._v("仅店长有权限操作")])]), _vm._v(" "), _c('table', {
    staticClass: "tblform"
  }, [_c('tr', [_c('th', [_vm._v("原客户负责人")]), _vm._v(" "), _c('td', [_c('i-select', {
    staticClass: "input-s",
    attrs: {
      "disabled": !_vm.editable,
      "filterable": ""
    },
    model: {
      value: (_vm.custTransfer.oldCustOwner),
      callback: function($$v) {
        _vm.$set(_vm.custTransfer, "oldCustOwner", $$v)
      },
      expression: "custTransfer.oldCustOwner"
    }
  }, _vm._l((_vm.dict.allStaffList), function(s) {
    return _c('i-option', {
      key: s.staffId,
      attrs: {
        "value": s.staffId,
        "label": s.name
      }
    }, [_c('span', [_vm._v(_vm._s(s.name))])])
  }), 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("客户级别")]), _vm._v(" "), _c('td', [_c('i-select', {
    staticClass: "input-s",
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.custTransfer.custLevel),
      callback: function($$v) {
        _vm.$set(_vm.custTransfer, "custLevel", $$v)
      },
      expression: "custTransfer.custLevel"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("不限制")])]), _vm._v(" "), _vm._l(([1, 2, 3, 4, 5]), function(n) {
    return _c('i-option', {
      key: n,
      attrs: {
        "value": n
      }
    }, [_vm._v(_vm._s(n) + "星")])
  })], 2)], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("新客户负责人")]), _vm._v(" "), _c('td', [_c('i-select', {
    staticClass: "input-s",
    attrs: {
      "disabled": !_vm.editable,
      "filterable": ""
    },
    model: {
      value: (_vm.custTransfer.newCustOwner),
      callback: function($$v) {
        _vm.$set(_vm.custTransfer, "newCustOwner", $$v)
      },
      expression: "custTransfer.newCustOwner"
    }
  }, _vm._l((_vm.dict.activeStaffList), function(s) {
    return _c('i-option', {
      key: s.staffId,
      attrs: {
        "value": s.staffId,
        "label": s.name
      }
    }, [_c('span', [_vm._v(_vm._s(s.name))])])
  }), 1)], 1)]), _vm._v(" "), _c('tr', [_c('th'), _vm._v(" "), _c('td', {
    staticClass: "submit"
  }, [(_vm.editable) ? _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.replaceCustOwner
    }
  }, [_vm._v("确定")]) : _vm._e()], 1)])])])]), _vm._v(" "), _c('TabPane', {
    attrs: {
      "label": "客户提醒日期清空"
    }
  }, [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "l orange"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor"
  }), _vm._v("\n              清空下面指定日期之前的“客户提醒日期”\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "r orange"
  }, [_vm._v("仅店长有权限操作")])]), _vm._v(" "), _c('date-picker', {
    attrs: {
      "type": "date",
      "format": "yyyy-MM-dd"
    },
    model: {
      value: (_vm.endReminderDate),
      callback: function($$v) {
        _vm.endReminderDate = $$v
      },
      expression: "endReminderDate"
    }
  }), _vm._v("\n           \n          "), (_vm.editable) ? _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.clearCustReminderDate
    }
  }, [_vm._v("确定")]) : _vm._e(), _vm._v(" "), (_vm.endReminderDate) ? _c('span', {
    staticClass: "l10 orangered"
  }, [_vm._v("\n            （ 清空【" + _vm._s(_vm.g.Util.formatDate(_vm.endReminderDate)) + " 之前】的 “客户提醒日期”）\n          ")]) : _vm._e(), _vm._v("\n           \n        ")], 1)])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2251:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', [_vm._m(0), _vm._v(" "), _c('table', {
    staticClass: "tblform"
  }, [_c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("来自客户负责人")]), _vm._v(" "), _c('td', [_c('i-select', {
    staticClass: "input",
    attrs: {
      "filterable": "",
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.custAssignConf.fromStaffId),
      callback: function($$v) {
        _vm.$set(_vm.custAssignConf, "fromStaffId", _vm._n($$v))
      },
      expression: "custAssignConf.fromStaffId"
    }
  }, _vm._l((_vm.staffList), function(s) {
    return _c('i-option', {
      key: s.staffId,
      attrs: {
        "value": s.staffId,
        "label": s.name
      }
    }, [_c('span', [_vm._v(_vm._s(s.name))])])
  }), 1), _vm._v(" "), _vm._m(1)], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("客户级别")]), _vm._v(" "), _c('td', [_c('i-select', {
    staticClass: "input",
    attrs: {
      "disabled": !_vm.editable
    },
    model: {
      value: (_vm.custAssignConf.custLevel),
      callback: function($$v) {
        _vm.$set(_vm.custAssignConf, "custLevel", $$v)
      },
      expression: "custAssignConf.custLevel"
    }
  }, _vm._l(([1, 2, 3, 4, 5]), function(n) {
    return _c('i-option', {
      key: n,
      attrs: {
        "value": n
      }
    }, [_vm._v(_vm._s(n) + "星")])
  }), 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "valign": "top"
    }
  }, [_vm._v("跟进任务条件")]), _vm._v(" "), _c('td', [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "task-conf mt15"
  }, [_c('table', [_vm._m(3), _vm._v(" "), _vm._l((_vm.taskConfList), function(c) {
    return _c('tr', [_c('td', [_c('i-select', {
      attrs: {
        "disabled": !_vm.editable,
        "placeholder": "请选择跟进任务"
      },
      model: {
        value: (c[0]),
        callback: function($$v) {
          _vm.$set(c, 0, $$v)
        },
        expression: "c[0]"
      }
    }, _vm._l((_vm.followTaskList), function(t) {
      return _c('i-option', {
        key: t.taskId,
        attrs: {
          "value": t.taskId
        }
      }, [_vm._v(_vm._s(t.taskName))])
    }), 1)], 1), _vm._v(" "), _c('td', [_c('input-int', {
      staticStyle: {
        "width": "90px"
      },
      attrs: {
        "readonly": !_vm.editable
      },
      model: {
        value: (c[1]),
        callback: function($$v) {
          _vm.$set(c, 1, $$v)
        },
        expression: "c[1]"
      }
    })], 1)])
  }), _vm._v(" "), (_vm.editable) ? _c('tr', [_c('td', {
    attrs: {
      "align": "left"
    }
  }, [_c('i-button', {
    on: {
      "click": _vm.addTaskConf
    }
  }, [_vm._v("追加")])], 1), _vm._v(" "), _c('td')]) : _vm._e()], 2)])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("每次分配数量")]), _vm._v(" "), _c('td', [_c('input-int', {
    staticClass: "input",
    attrs: {
      "readonly": !_vm.editable
    },
    model: {
      value: (_vm.custAssignConf.assignCnt),
      callback: function($$v) {
        _vm.$set(_vm.custAssignConf, "assignCnt", $$v)
      },
      expression: "custAssignConf.assignCnt"
    }
  }), _c('span', {
    staticClass: "tips"
  }, [_vm._v("个")]), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（最大值500）")])], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("每天分配次数")]), _vm._v(" "), _c('td', [_c('input-int', {
    staticClass: "input",
    attrs: {
      "readonly": !_vm.editable
    },
    model: {
      value: (_vm.custAssignConf.assignFrq),
      callback: function($$v) {
        _vm.$set(_vm.custAssignConf, "assignFrq", $$v)
      },
      expression: "custAssignConf.assignFrq"
    }
  }), _c('span', {
    staticClass: "tips"
  }, [_vm._v("次")])], 1)]), _vm._v(" "), (_vm.editable) ? _c('tr', [_c('th'), _vm._v(" "), _c('td', {
    staticClass: "submit"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveCustAssignConf
    }
  }, [_vm._v("提交")])], 1)]) : _vm._e()])]), _vm._v(" "), (_vm.g.data.user.isShopOwner) ? _c('section', [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(5), _vm._v(" "), _vm._l((_vm.custAssignLogList), function(l) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(l.staffName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.assignCnt))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createTime))])])
  })], 2)]), _vm._v(" "), (_vm.custAssignLogCount && _vm.custAssignLogCount > 30) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.custAssignLogCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryCustAssignLogList
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.custAssignLogList && _vm.custAssignLogList.length === 0) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "l orange"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor"
  }), _vm._v("\n\t\t\t\t配置如下设置后，销售可自动获取分配客户（符合如下条件的未跟进的随机客户）\n\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "r orange"
  }, [_vm._v("仅店长有权限操作")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "tips"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor normal"
  }), _vm._v(" 即从哪个客户负责人名下分配客户给销售")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "gray"
  }, [_c('i', {
    staticClass: "iconfont icon-svginfor normal"
  }), _vm._v(" 需满足如下跟进任务的客户数，才可进行客户分配")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', {
    attrs: {
      "width": "270"
    }
  }, [_vm._v("跟进任务")]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("最大客户数")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("客户分配日志")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("销售")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "200"
    }
  }, [_vm._v("分配客户数")]), _vm._v(" "), _c('th', [_vm._v("分配客户时间")])])
}]}

/***/ }),

/***/ 2279:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "cust"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "cust",
      "page": "cust-import"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main -style-"
  }, [_c('section', [_vm._m(0), _vm._v(" "), _c('ol', [_c('li', [_vm._v("数据导入文件为 "), _c('b', [_vm._v("Excel文件")]), _vm._v("（文件后缀为 "), _c('b', [_vm._v("xls")]), _vm._v("，"), _c('a', {
    attrs: {
      "target": "_blank",
      "href": "/static/cust-import.xls"
    }
  }, [_vm._v("下载excel模板")]), _vm._v("），\n\t\t\t\t文件第一行需包含如下列（"), _c('b', {
    staticClass: "red"
  }, [_vm._v("列名要严格一致，列顺序随意，多余的列会忽略")]), _vm._v("）：\n\t\t\t\t\t"), _c('div', {
    staticClass: "fields"
  }, [_vm._m(1), _vm._v(" "), _c('div', [_vm._v("可以包含的列名：\n\t\t\t\t\t\t\t"), _c('div', {
    staticClass: "optional"
  }, [_c('span', [_vm._v("生日 "), _c('help', [_vm._v("格式为：2010-10-10，或者 2010/10/10")])], 1), _c('span', [_vm._v("客户类型")]), _c('span', [_vm._v("客户负责人")]), _c('span', [_vm._v("客户来源")]), _c('span', [_vm._v("家庭住址")]), _vm._v(" "), _c('span', [_vm._v("工作单位")]), _c('span', [_vm._v("工作地址")]), _c('span', [_vm._v("身份证号")]), _c('span', [_vm._v("跟进内容")]), _vm._v(" "), _c('span', [_vm._v("订金资费项")]), _c('span', [_vm._v("订金支付时间")]), _c('span', [_vm._v("订金支付方式")]), _c('span', [_vm._v("备注")])])])])]), _vm._v(" "), _c('li', [_vm._v("客户类型，包含：外场客户、到店访客，如果不填，默认为“外场客户”\n\t\t\t\t")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('li', [_vm._v("如果客户手机号为空，或客户手机号已存在，导入时将忽略该条记录；")]), _vm._v(" "), _c('li', [_vm._v("如需导入订金客户，必须填写订金资费项（需先在系统内创建）、订金支付时间和订金支付方式（包括：现金、微信、支付宝、刷卡、其他）；")]), _vm._v(" "), _vm._m(4)])]), _vm._v(" "), _c('section', [_vm._m(5), _vm._v(" "), _c('div', {
    staticClass: "upload-file"
  }, [_c('Upload', {
    attrs: {
      "action": _vm.g.Conf.API_HOST + '/custImport',
      "with-credentials": true,
      "accept": _vm.acceptFileType,
      "max-size": 10240,
      "before-upload": _vm.handleBeforeUpload,
      "on-success": _vm.handleUploadSuccess
    }
  }, [_c('i-button', {
    attrs: {
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("上传文件")])], 1)], 1), _vm._v(" "), (_vm.errors && _vm.errors.length > 0) ? _c('div', {
    staticClass: "err"
  }, [_vm._m(6), _vm._v(" "), _c('ul', _vm._l((_vm.errors), function(e) {
    return _c('li', [_vm._v(_vm._s(e))])
  }), 0)]) : _vm._e(), _vm._v(" "), (_vm.errors && _vm.errors.length === 0) ? _c('div', {
    staticClass: "success"
  }, [_c('i', {
    staticClass: "iconfont icon-check okicon"
  }), _vm._v("\n\t\t\t\t已导入 "), _c('b', [_vm._v(_vm._s(_vm.createdCustCnt))]), _vm._v(" 个客户信息！ "), _vm._m(7)]) : _vm._e()])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("客户导入前必读")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("必须包含的列名：\n\t\t\t\t\t\t\t\t"), _c('span', [_vm._v("姓名")]), _c('span', [_vm._v("手机号")]), _c('span', [_vm._v("性别")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_vm._v("如果导入的数据中有【客户负责人】，请预先在"), _c('a', {
    attrs: {
      "href": "#/staff-query"
    }
  }, [_vm._v("【员工】")]), _vm._v("下创建这些人员；")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_vm._v("如果导入的数据中有【客户来源】，请预先在"), _c('a', {
    attrs: {
      "href": "#/cust-source"
    }
  }, [_vm._v("【设置 》 客户来源】")]), _vm._v("下创建；")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_vm._v("每次导入最多支持"), _c('b', [_vm._v(" 2000条 ")]), _vm._v("记录；")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("客户导入操作")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tit"
  }, [_c('i', {
    staticClass: "iconfont icon-alert2"
  }), _vm._v(" 错误提示：")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticStyle: {
      "margin-left": "25px"
    },
    attrs: {
      "href": "#/cust-query"
    }
  }, [_vm._v("查询客户"), _c('i', {
    staticClass: "iconfont icon-arrow-r small"
  })])
}]}

/***/ }),

/***/ 2304:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("跟进结果类型")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [(_vm.editable) ? _c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": _vm.openRetTypeDlg
    }
  }, [_vm._v("添加")]) : _c('span', {
    staticClass: "orange"
  }, [_vm._v("仅店长有权限操作")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.resultTypeList), function(r, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(r.orderNo))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.typeName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.typeDesc))]), _vm._v(" "), _c('td', [(_vm.editable) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.editResultType(idx)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.deleteResultType(idx)
        }
      }
    }, [_vm._v("删除")])])]) : _vm._e()])])
  })], 2), _vm._v(" "), (_vm.resultTypeList && !_vm.resultTypeList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "跟进结果类型",
      "width": "700"
    },
    model: {
      value: (_vm.retTypeDlg),
      callback: function($$v) {
        _vm.retTypeDlg = $$v
      },
      expression: "retTypeDlg"
    }
  }, [_c('div', {
    staticClass: "tblform"
  }, [_c('table', [_c('tr', [_c('th', [_vm._v("序号")]), _c('td', [_c('input-int', {
    attrs: {
      "placeholder": "排序用"
    },
    model: {
      value: (_vm.resultType.orderNo),
      callback: function($$v) {
        _vm.$set(_vm.resultType, "orderNo", $$v)
      },
      expression: "resultType.orderNo"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("类型名称")]), _c('td', [_c('i-input', {
    staticStyle: {
      "width": "500px"
    },
    model: {
      value: (_vm.resultType.typeName),
      callback: function($$v) {
        _vm.$set(_vm.resultType, "typeName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "resultType.typeName"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("类型描述")]), _c('td', [_c('i-input', {
    staticStyle: {
      "width": "500px"
    },
    attrs: {
      "rows": 4,
      "type": "textarea"
    },
    model: {
      value: (_vm.resultType.typeDesc),
      callback: function($$v) {
        _vm.$set(_vm.resultType, "typeDesc", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "resultType.typeDesc"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('th'), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "p10"
  }, [_c('i-button', {
    staticClass: "primary-btn",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveResultType
    }
  }, [_vm._v("提交")]), _vm._v("  \n\t\t\t\t\t\t\t"), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.retTypeDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)])])])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("序号")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "300"
    }
  }, [_vm._v("类型名称")]), _vm._v(" "), _c('th', [_vm._v("类型描述")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2345:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('cust-create')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2356:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "cust"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "cust",
      "page": "cust-query"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', [_c('div', {
    staticClass: "query-cond-inline -quick-query"
  }, [_c('div', {
    staticClass: "l"
  }, [_c('i-input', {
    staticStyle: {
      "width": "440px"
    },
    attrs: {
      "type": "text",
      "icon": "ios-search",
      "placeholder": "客户手机号  |  客户姓名  |  单位名（前面加~） |  微信号（前面加#）"
    },
    on: {
      "on-enter": function($event) {
        return _vm.quickQuery(null)
      },
      "on-click": function($event) {
        return _vm.quickQuery(null)
      }
    },
    model: {
      value: (_vm.query.custFlag),
      callback: function($$v) {
        _vm.$set(_vm.query, "custFlag", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "query.custFlag"
    }
  })], 1), _vm._v(" "), (_vm.canQueryAllCust) ? _c('div', {
    staticClass: "l spt"
  }, [_c('ButtonGroup', {
    attrs: {
      "shape": "circle"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "default"
    },
    on: {
      "click": function($event) {
        return _vm.queryCust(true, true)
      }
    }
  }, [_vm._v("所有客户")]), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "default"
    },
    on: {
      "click": _vm.queryWithNullOwner
    }
  }, [_vm._v("无人负责的")])], 1)], 1) : _c('div', {
    staticClass: "l l15"
  }, [_c('checkbox', {
    model: {
      value: (_vm.queryInAll),
      callback: function($$v) {
        _vm.queryInAll = $$v
      },
      expression: "queryInAll"
    }
  }, [_vm._v("在全部客户中查询")]), _vm._v(" "), _c('help', [_vm._v("\n\t\t\t\t\t\t如果勾选了此选项，根据“客户姓名”或“单位名”模糊查找时，将在全部客户中查询，否则只在自己负责的客户中查询。\n\t\t\t\t\t\t在全部客户中查询时，最多只展示5条记录。\n\t\t\t\t\t")])], 1)])]), _vm._v(" "), _c('section', [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', {
    attrs: {
      "width": "570",
      "valign": "top"
    }
  }, [_c('ul', {
    staticClass: "-more-query"
  }, [_c('li', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("客户类型")]), _vm._v(" "), _c('radio-group', {
    attrs: {
      "type": "button"
    },
    model: {
      value: (_vm.query.custType),
      callback: function($$v) {
        _vm.$set(_vm.query, "custType", _vm._n($$v))
      },
      expression: "query.custType"
    }
  }, [_c('radio', {
    attrs: {
      "label": -1
    }
  }, [_vm._v("不限")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("外场客户")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("到店访客")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("订金客户")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 3
    }
  }, [_vm._v("线上访客")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 4
    }
  }, [_vm._v("成交客户")])], 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("客户负责人")]), _vm._v(" "), (_vm.dict.staffList.length > 1) ? [(!_vm.mutltiSelectOwner) ? [_c('i-select', {
    staticClass: "owner-sel",
    model: {
      value: (_vm.query.ownerStaffId),
      callback: function($$v) {
        _vm.$set(_vm.query, "ownerStaffId", $$v)
      },
      expression: "query.ownerStaffId"
    }
  }, _vm._l((_vm.dict.staffList), function(s) {
    return _c('i-option', {
      key: s.staffId,
      attrs: {
        "value": s.staffId
      }
    }, [_vm._v(_vm._s(s.name))])
  }), 1)] : [_c('i-select', {
    staticClass: "owner-sel",
    attrs: {
      "multiple": ""
    },
    model: {
      value: (_vm.query.ownerStaffIdList),
      callback: function($$v) {
        _vm.$set(_vm.query, "ownerStaffIdList", $$v)
      },
      expression: "query.ownerStaffIdList"
    }
  }, _vm._l((_vm.dict.staffList), function(s) {
    return _c('i-option', {
      key: s.staffId,
      attrs: {
        "value": s.staffId
      }
    }, [_vm._v(_vm._s(s.name))])
  }), 1)], _vm._v(" "), _c('checkbox', {
    model: {
      value: (_vm.mutltiSelectOwner),
      callback: function($$v) {
        _vm.mutltiSelectOwner = $$v
      },
      expression: "mutltiSelectOwner"
    }
  }, [_vm._v("多选")]), _vm._v(" "), (_vm.mutltiSelectOwner) ? _c('a', {
    on: {
      "click": _vm.checkAllOwnerStaff
    }
  }, [_vm._v("全选")]) : _vm._e()] : _vm._e(), _vm._v(" "), (_vm.dict.staffList.length === 1) ? _c('i-button', {
    attrs: {
      "disabled": ""
    }
  }, [_c('span', {
    staticClass: "gray"
  }, [_vm._v(_vm._s(_vm.dict.staffList[0].name))])]) : _vm._e()], 2), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("客户级别")]), _vm._v(" "), _c('radio-group', {
    staticClass: "alt-top",
    attrs: {
      "type": "button"
    },
    model: {
      value: (_vm.query.custLevel),
      callback: function($$v) {
        _vm.$set(_vm.query, "custLevel", _vm._n($$v))
      },
      expression: "query.custLevel"
    }
  }, [_c('radio', {
    attrs: {
      "label": -1
    }
  }, [_vm._v("不限")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("1星")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("2星")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 3
    }
  }, [_vm._v("3星")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 4
    }
  }, [_vm._v("4星")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 5
    }
  }, [_vm._v("5星")])], 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("客户来源")]), _vm._v(" "), (!_vm.mutltiSelectCustSrc) ? _c('i-select', {
    staticClass: "-cust-src",
    model: {
      value: (_vm.query.custSrc),
      callback: function($$v) {
        _vm.$set(_vm.query, "custSrc", $$v)
      },
      expression: "query.custSrc"
    }
  }, [_c('i-option', {
    attrs: {
      "label": "-1",
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("无")])]), _vm._v(" "), _vm._l((_vm.dict.custSrcList), function(s) {
    return _c('i-option', {
      key: s.sourceId,
      attrs: {
        "value": s.sourceId,
        "label": s.sourceName
      }
    }, [_c('span', [_vm._v(_vm._s(s.sourceName))]), _vm._v(" "), (s.sourceDesc) ? _c('span', {
      staticClass: "r gray"
    }, [_vm._v("# " + _vm._s(s.sourceDesc.substr(0, 24)))]) : _vm._e()])
  })], 2) : _c('i-select', {
    staticClass: "-cust-src",
    attrs: {
      "multiple": ""
    },
    model: {
      value: (_vm.query.custSrcIdList),
      callback: function($$v) {
        _vm.$set(_vm.query, "custSrcIdList", $$v)
      },
      expression: "query.custSrcIdList"
    }
  }, [_c('i-option', {
    attrs: {
      "label": "-1",
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("无")])]), _vm._v(" "), _vm._l((_vm.dict.custSrcList), function(s) {
    return _c('i-option', {
      key: s.sourceId,
      attrs: {
        "value": s.sourceId,
        "label": s.sourceName
      }
    }, [_c('span', [_vm._v(_vm._s(s.sourceName))]), _vm._v(" "), (s.sourceDesc) ? _c('span', {
      staticClass: "r gray"
    }, [_vm._v("# " + _vm._s(s.sourceDesc.substr(0, 24)))]) : _vm._e()])
  })], 2), _vm._v(" "), _c('checkbox', {
    model: {
      value: (_vm.mutltiSelectCustSrc),
      callback: function($$v) {
        _vm.mutltiSelectCustSrc = $$v
      },
      expression: "mutltiSelectCustSrc"
    }
  }, [_vm._v("多选")])], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("创建日期")]), _vm._v(" "), _c('date-picker', {
    staticClass: "-date",
    attrs: {
      "format": "yyyy-MM-dd",
      "confirm": "",
      "options": _vm.createDateOption,
      "type": "daterange",
      "placement": "bottom-start"
    },
    model: {
      value: (_vm.query.createDateRange),
      callback: function($$v) {
        _vm.$set(_vm.query, "createDateRange", $$v)
      },
      expression: "query.createDateRange"
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("跟进日期")]), _vm._v(" "), _c('date-picker', {
    staticClass: "-date",
    attrs: {
      "format": "yyyy-MM-dd",
      "confirm": "",
      "options": _vm.createDateOption,
      "type": "daterange",
      "placement": "bottom-start"
    },
    model: {
      value: (_vm.query.followDateRange),
      callback: function($$v) {
        _vm.$set(_vm.query, "followDateRange", $$v)
      },
      expression: "query.followDateRange"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "spt l15"
  }, [_vm._v("|")]), _vm._v(" "), _c('span', {
    staticClass: "shortcuts"
  }, [_c('i-select', {
    staticStyle: {
      "display": "inline-block",
      "width": "170px",
      "position": "relative",
      "top": "-2px"
    },
    attrs: {
      "placeholder": "根据未跟进天数查询"
    },
    on: {
      "on-change": _vm.queryUnfollowCust
    },
    model: {
      value: (_vm.unfollowDays),
      callback: function($$v) {
        _vm.unfollowDays = $$v
      },
      expression: "unfollowDays"
    }
  }, [_c('i-option', {
    attrs: {
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("无")])]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": -1
    }
  }, [_vm._v("从未跟进")]), _vm._v(" "), _vm._l((_vm.days), function(n) {
    return _c('i-option', {
      key: n,
      attrs: {
        "value": n
      }
    }, [_vm._v(_vm._s(n) + " 天未跟进")])
  })], 2)], 1)], 1), _vm._v(" "), _c('li', {
    staticClass: "item submit"
  }, [_c('i-button', {
    staticClass: "primary-btn",
    attrs: {
      "type": "primary",
      "icon": "ios-search"
    },
    on: {
      "click": function($event) {
        return _vm.handleQuery()
      }
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.resetQuery
    }
  }, [_vm._v("重置")])], 1)])]), _vm._v(" "), ((_vm.reminderDateList && _vm.reminderDateList.length) || (_vm.custCountStatByOwner)) ? _c('td', {
    staticClass: "query-right",
    attrs: {
      "valign": "top"
    }
  }, [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [(_vm.reminderDateList && _vm.reminderDateList.length) ? _c('td', {
    attrs: {
      "valign": "top"
    }
  }, [_c('div', {
    staticClass: "side-query reminder-dates"
  }, [_vm._m(0), _vm._v(" "), _c('ul', {
    staticClass: "ret"
  }, _vm._l((_vm.reminderDateList), function(r) {
    return _c('li', {
      class: {
        on: r.statDate === _vm.query.reminderDate
      },
      on: {
        "click": function($event) {
          return _vm.queryCustByReminderDate(r.statDate)
        }
      }
    }, [(_vm.today.compareDatePart(Date.new(r.statDate))) ? [_vm._v(_vm._s(_vm.g.Util.formatDate(r.statDate)))] : _c('b', [_vm._v("今日")]), _vm._v(" ("), _c('b', [_vm._v(_vm._s(r.count))]), _vm._v(")")], 2)
  }), 0)])]) : _vm._e(), _vm._v(" "), (_vm.custCountStatByOwner && _vm.custCountStatByOwner.length) ? _c('td', {
    attrs: {
      "valign": "top",
      "width": "50%"
    }
  }, [_c('div', {
    staticClass: "side-query cust-ownwer-stat"
  }, [_vm._m(1), _vm._v(" "), _c('ul', {
    staticClass: "ret"
  }, _vm._l((_vm.custCountStatByOwner), function(r) {
    return (r.salesId) ? _c('li', {
      class: {
        on: r.salesId === _vm.query.ownerStaffId
      },
      on: {
        "click": function($event) {
          return _vm.queryCustByOwnerId(r.salesId)
        }
      }
    }, [(r.salesName) ? [_vm._v(_vm._s(r.salesName))] : _c('i', {
      staticClass: "gray"
    }, [_vm._v("无人负责")]), _vm._v(" ("), _c('b', [_vm._v(_vm._s(r.custCount))]), _vm._v(")\n\t\t\t\t\t\t\t\t\t")], 2) : _vm._e()
  }), 0)])]) : _vm._e()])])]) : _vm._e()])])]), _vm._v(" "), _c('section', [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', [_c('div', {
    staticClass: "opt-bar"
  }, [_c('Dropdown', {
    attrs: {
      "placement": "bottom-start",
      "trigger": "click"
    },
    on: {
      "on-click": _vm.batchUpdateCustLevel
    }
  }, [_c('i-button', [_vm._v("\n\t\t\t\t\t\t\t\t\t客户级别更新为 "), _c('Icon', {
    attrs: {
      "type": "ios-arrow-down"
    }
  })], 1), _vm._v(" "), _c('DropdownMenu', {
    attrs: {
      "slot": "list"
    },
    slot: "list"
  }, [_c('DropdownItem', {
    attrs: {
      "name": "5"
    }
  }, [_vm._v("5星")]), _vm._v(" "), _c('DropdownItem', {
    attrs: {
      "name": "4"
    }
  }, [_vm._v("4星")]), _vm._v(" "), _c('DropdownItem', {
    attrs: {
      "name": "3"
    }
  }, [_vm._v("3星")]), _vm._v(" "), _c('DropdownItem', {
    attrs: {
      "name": "2"
    }
  }, [_vm._v("2星")]), _vm._v(" "), _c('DropdownItem', {
    attrs: {
      "name": "1"
    }
  }, [_vm._v("1星")])], 1)], 1), _vm._v(" "), (_vm.dict.staffList.length > 1) ? _c('Dropdown', {
    staticClass: "break",
    attrs: {
      "placement": "bottom-start",
      "trigger": "click"
    },
    on: {
      "on-click": _vm.batchUpdateCustOwner
    }
  }, [_c('i-button', [_vm._v("\n\t\t\t\t\t\t\t\t\t客户批量分配给 "), _c('Icon', {
    attrs: {
      "type": "ios-arrow-down"
    }
  })], 1), _vm._v(" "), _c('DropdownMenu', {
    attrs: {
      "slot": "list"
    },
    slot: "list"
  }, _vm._l((_vm.dict.staffList), function(s) {
    return _c('DropdownItem', {
      key: s.staffId,
      attrs: {
        "name": s.staffId + '\t' + s.name
      }
    }, [_vm._v(_vm._s(s.name))])
  }), 1)], 1) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "break"
  }, [_c('i-button', {
    on: {
      "click": _vm.selectMultiCusts
    }
  }, [_vm._v("批量选择...")])], 1), _vm._v(" "), _c('span', {
    staticClass: "break"
  }, [(_vm.g.data.user.isShopOwner) ? _c('i-button', {
    on: {
      "click": _vm.deleteCustList
    }
  }, [_c('i', {
    staticClass: "iconfont icon-delete small"
  }), _vm._v(" 删除")]) : _vm._e()], 1), _vm._v(" "), (_vm.custExportPermit) ? _c('span', {
    staticClass: "break"
  }, [_c('i-button', {
    attrs: {
      "icon": "ios-cloud-download-outline"
    },
    on: {
      "click": _vm.exportCust
    }
  }, [_vm._v("导出")])], 1) : _vm._e()], 1)]), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right",
      "valign": "middle"
    }
  }, [(_vm.totalCount) ? _c('div', {
    staticClass: "ret-cnt"
  }, [_vm._v("\n\t\t\t\t\t\t\t查询到 "), _c('b', [_vm._v(_vm._s(_vm.totalCount))]), _vm._v(" 个客户\n\t\t\t\t\t\t\t"), (_vm.memberCntInCust) ? [_c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v("\n\t\t\t\t\t\t\t\t已转化 "), _c('b', [_vm._v(_vm._s(_vm.memberCntInCust))]), _vm._v(" 个会员\n\t\t\t\t\t\t\t\t"), _c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v("\n\t\t\t\t\t\t\t\t转化率 "), _c('b', {
    staticClass: "orangered"
  }, [_vm._v(_vm._s(_vm.g.Util.round((100 * _vm.memberCntInCust / _vm.totalCount).toFixed(2))) + "%")])] : _vm._e()], 2) : _vm._e()])])]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl cl"
  }, [_c('tr', [_c('th', {
    staticClass: "ckbox",
    attrs: {
      "width": "40"
    },
    on: {
      "click": function($event) {
        return _vm.selectAll()
      }
    }
  }, [(_vm.isSelectAll) ? _c('i', {
    staticClass: "iconfont icon-checkbox-checked ckbox-1",
    staticStyle: {
      "font-weight": "normal"
    }
  }) : _c('i', {
    staticClass: "iconfont icon-checkbox-empty ckbox-0",
    staticStyle: {
      "font-weight": "normal"
    }
  })]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "180"
    }
  }, [_vm._v("客户姓名/单位")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("性别")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("负责人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("客户类型")]), _vm._v(" "), _c('th', {
    staticClass: "sort",
    attrs: {
      "width": "58"
    },
    on: {
      "click": function($event) {
        return _vm.queryBySort('cust_level')
      }
    }
  }, [_vm._v("级别\n\t\t\t\t\t\t\t"), (_vm.query.orderBy === 'cust_level') ? [(_vm.query.ascOrDesc === 'asc') ? _c('Icon', {
    attrs: {
      "type": "md-arrow-up"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.query.ascOrDesc === 'desc') ? _c('Icon', {
    attrs: {
      "type": "md-arrow-down"
    }
  }) : _vm._e()] : _vm._e()], 2), _vm._v(" "), _c('th', {
    attrs: {
      "width": "95"
    }
  }, [_vm._v("客户来源")]), _vm._v(" "), _c('th', {
    staticClass: "sort",
    attrs: {
      "width": "133"
    },
    on: {
      "click": function($event) {
        return _vm.queryBySort('create_time')
      }
    }
  }, [_vm._v("创建时间\n\t\t\t\t\t\t\t"), (_vm.query.orderBy === 'create_time') ? [(_vm.query.ascOrDesc === 'asc') ? _c('Icon', {
    attrs: {
      "type": "md-arrow-up"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.query.ascOrDesc === 'desc') ? _c('Icon', {
    attrs: {
      "type": "md-arrow-down"
    }
  }) : _vm._e()] : _vm._e()], 2), _vm._v(" "), _c('th', {
    staticClass: "sort",
    attrs: {
      "width": "80"
    },
    on: {
      "click": function($event) {
        return _vm.queryBySort('follow_cnt')
      }
    }
  }, [_vm._v("跟进次数\n\t\t\t\t\t\t\t"), (_vm.query.orderBy === 'follow_cnt') ? [(_vm.query.ascOrDesc === 'asc') ? _c('Icon', {
    attrs: {
      "type": "md-arrow-up"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.query.ascOrDesc === 'desc') ? _c('Icon', {
    attrs: {
      "type": "md-arrow-down"
    }
  }) : _vm._e()] : _vm._e()], 2), _vm._v(" "), _c('th', {
    staticClass: "sort",
    on: {
      "click": function($event) {
        return _vm.queryBySort('follow_time')
      }
    }
  }, [_vm._v("最新跟进\n\t\t\t\t\t\t\t"), (_vm.query.orderBy === 'follow_time') ? [(_vm.query.ascOrDesc === 'asc') ? _c('Icon', {
    attrs: {
      "type": "md-arrow-up"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.query.ascOrDesc === 'desc') ? _c('Icon', {
    attrs: {
      "type": "md-arrow-down"
    }
  }) : _vm._e()] : _vm._e()], 2), _vm._v(" "), _c('th', {
    attrs: {
      "width": "140"
    }
  }, [_vm._v("操作")])]), _vm._v(" "), _vm._l((_vm.custList), function(c, idx) {
    return [_c('tr', [_c('td', {
      staticClass: "ckbox",
      on: {
        "click": function($event) {
          return _vm.selectCust(idx)
        }
      }
    }, [(!_vm.custCkList[idx]) ? _c('i', {
      staticClass: "iconfont icon-checkbox-empty ckbox-0"
    }) : _c('i', {
      staticClass: "iconfont icon-checkbox-checked ckbox-1"
    })]), _vm._v(" "), _c('td', {
      on: {
        "click": function($event) {
          return _vm.viewCust(idx)
        }
      }
    }, [_c('a', {
      staticStyle: {
        "display": "block"
      }
    }, [_vm._v(_vm._s(c.name))]), _vm._v(" "), (c.orgName) ? _c('div', {
      staticClass: "org"
    }, [_c('Icon', {
      attrs: {
        "type": "ios-pin-outline"
      }
    }), _vm._v(_vm._s(c.orgName))], 1) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.Sex[c.sex]))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.ownerName))]), _vm._v(" "), _c('td', {
      class: 'cust-type-' + c.custType
    }, [_vm._v(_vm._s(_vm.g.Dict.CustTypes[c.custType]))]), _vm._v(" "), _c('td', {
      attrs: {
        "align": "center"
      }
    }, [_c('span', {
      class: 'cust-level-' + c.custLevel
    }, [_vm._v(_vm._s(c.custLevel))])]), _vm._v(" "), _c('td', [(c.custSrcName) ? [_vm._v(_vm._s(c.custSrcName))] : (c.custSrc < 0) ? _c('i', [_vm._v(_vm._s(_vm.g.Dict.CustSrcDict[c.custSrc]))]) : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(Date.new(c.createTime).format('yyyy-MM-dd hh:mm')))]), _vm._v(" "), _c('td', [(c.followCnt > 0) ? [_vm._v(_vm._s(c.followCnt) + " 次")] : _c('span', {
      staticClass: "gray"
    }, [_vm._v("0 次")])], 2), _vm._v(" "), _c('td', [(c.followTime) ? [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(Date.new(c.followTime).format('yyyy-MM-dd hh:mm')) + "\n\t\t\t\t\t\t\t"), _c('div', {
      staticClass: "ftxt",
      on: {
        "click": function($event) {
          return _vm.viewCust(idx)
        }
      }
    }, [_vm._v(_vm._s(c.latestFollowDesc))])] : _vm._e()], 2), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opt-list"
    }, [((c.ownerStaffId === _vm.g.data.user.staffId || _vm.g.data.user.isShopOwner)) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.handleCustFollow(c.custId, idx)
        }
      }
    }, [_vm._v("跟进")])]) : _vm._e(), _vm._v(" "), ((c.ownerStaffId === _vm.g.data.user.staffId || _vm.g.data.user.isShopOwner)) ? _c('li', [_c('a', {
      attrs: {
        "href": '#/cust-edit/' + c.custId
      }
    }, [_vm._v("编辑")])]) : _vm._e(), _vm._v(" "), (_vm.g.data.user.isShopOwner) ? _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.deleteCust(idx)
        }
      }
    }, [_c('i', {
      staticClass: "iconfont icon-delete"
    })])]) : _vm._e()])])])]
  })], 2)]), _vm._v(" "), (_vm.totalCount && _vm.totalCount > 50) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.totalCount,
      "page-size": 50,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.changePageNo
    }
  })], 1) : _vm._e(), _vm._v(" "), (!_vm.totalCount) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": _vm.custFollowTit,
      "width": "850",
      "styles": {
        top: '10px'
      },
      "mask-closable": false
    },
    model: {
      value: (_vm.custFollowDlgView),
      callback: function($$v) {
        _vm.custFollowDlgView = $$v
      },
      expression: "custFollowDlgView"
    }
  }, [(_vm.custFollowDlgView) ? _c('cust-follow', {
    attrs: {
      "cust-id": _vm.selectCustIdForFollow,
      "can-create": _vm.canCreateCustFollow,
      "after-create": _vm.afterCreateCustFollow
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "dlg-foot",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.custFollowDlgView = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": _vm.custDlgTitle,
      "width": "850",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.custDlgView),
      callback: function($$v) {
        _vm.custDlgView = $$v
      },
      expression: "custDlgView"
    }
  }, [(_vm.custDlgView) ? _c('cust-detail', {
    attrs: {
      "cust-id": _vm.selectCustId,
      "can-create": false,
      "after-create-follow": _vm.afterCreateCustFollow
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "dlg-foot",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.custDlgView = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 1), _vm._v(" "), _c('modal', {
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
  }, [_vm._v("提示")]), _vm._v("：每次最多导出 1000 条记录 "), _c('br'), _vm._v("如要导出下一个1000条，请将当前页数增加20页后再导出")])] : _c('span', [_vm._v("正在查询并导出，请稍候...")])], 2)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', [_c('i', {
    staticClass: "iconfont icon-alert3"
  }), _vm._v(" 提醒日期")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', [_c('i', {
    staticClass: "iconfont icon-customer"
  }), _vm._v(" 客户负责人")])
}]}

/***/ }),

/***/ 2364:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "cust"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "cust",
      "page": "cust-follow-stat"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', {
    staticClass: "query-section"
  }, [_c('table', [_c('tr', [_c('th', [_vm._v("销售角色")]), _vm._v(" "), _c('td', [(_vm.dict.staffList.length > 1) ? [_c('checkbox-group', {
    model: {
      value: (_vm.query.ownerUidList),
      callback: function($$v) {
        _vm.$set(_vm.query, "ownerUidList", $$v)
      },
      expression: "query.ownerUidList"
    }
  }, _vm._l((_vm.dict.staffList), function(s) {
    return _c('checkbox', {
      key: s.uid,
      staticClass: "ckbox",
      attrs: {
        "label": s.uid
      }
    }, [_vm._v(_vm._s(s.name))])
  }), 1)] : _vm._e(), _vm._v(" "), (_vm.dict.staffList.length === 1) ? _c('b', [_vm._v(_vm._s(_vm.dict.staffList[0].name))]) : _vm._e()], 2)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("统计日期")]), _vm._v(" "), _c('td', [_c('date-picker', {
    staticClass: "-date",
    attrs: {
      "format": "yyyy-MM-dd",
      "confirm": "",
      "options": _vm.dateOption,
      "type": "daterange",
      "placement": "bottom-start"
    },
    model: {
      value: (_vm.query.followCntStatDates),
      callback: function($$v) {
        _vm.$set(_vm.query, "followCntStatDates", $$v)
      },
      expression: "query.followCntStatDates"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('th'), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "item submit"
  }, [_c('i-button', {
    staticClass: "primary-btn",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.statCustFollow
    }
  }, [_vm._v("查询")])], 1)])])])]), _vm._v(" "), _c('section', [_vm._m(0), _vm._v(" "), (_vm.cntSumStatList && _vm.cntSumStatList.length > 0) ? _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_c('tr', [_c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("销售")]), _vm._v(" "), _vm._l((_vm.statDateList), function(d) {
    return _c('th', [_vm._v(_vm._s(_vm.formatDateId(d)))])
  })], 2), _vm._v(" "), _vm._l((_vm.cntSumStatList), function(s) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(s.ownerName.shorten(3)))]), _vm._v(" "), _vm._l((_vm.statDateList), function(d) {
      return _c('td', [_vm._v(_vm._s(_vm.followCntGrid[d][s.ownerId]))])
    })], 2)
  })], 2)]) : _c('p', {
    staticClass: "gray center"
  }, [_vm._v("\n\t\t\t\t暂无数据\n\t\t\t")])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("跟进记录数统计")])])
}]}

/***/ }),

/***/ 2398:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "cust"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "cust",
      "page": "cust-follow-query"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', {
    staticClass: "query-section"
  }, [_c('table', [_c('tr', [_c('th', [_vm._v("销售角色")]), _vm._v(" "), _c('td', [(_vm.dict.staffList.length > 1) ? [(_vm.multSelectOwner) ? _c('checkbox-group', {
    model: {
      value: (_vm.query.ownerUidList),
      callback: function($$v) {
        _vm.$set(_vm.query, "ownerUidList", $$v)
      },
      expression: "query.ownerUidList"
    }
  }, _vm._l((_vm.dict.staffList), function(s) {
    return _c('checkbox', {
      key: s.uid,
      staticClass: "ckbox",
      attrs: {
        "label": s.uid
      }
    }, [_vm._v(_vm._s(s.name))])
  }), 1) : _c('RadioGroup', {
    on: {
      "on-change": _vm.selectCustOwner
    },
    model: {
      value: (_vm.query.ownerUid),
      callback: function($$v) {
        _vm.$set(_vm.query, "ownerUid", $$v)
      },
      expression: "query.ownerUid"
    }
  }, _vm._l((_vm.dict.staffList), function(s) {
    return _c('Radio', {
      key: s.uid,
      attrs: {
        "label": s.uid
      }
    }, [_vm._v(_vm._s(s.name))])
  }), 1)] : _vm._e(), _vm._v(" "), (_vm.dict.staffList.length === 1) ? _c('b', [_vm._v(_vm._s(_vm.dict.staffList[0].name))]) : _vm._e()], 2)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("跟进日期")]), _vm._v(" "), _c('td', [_c('date-picker', {
    staticClass: "-date",
    attrs: {
      "format": "yyyy-MM-dd",
      "confirm": "",
      "type": "daterange",
      "placement": "bottom-start"
    },
    model: {
      value: (_vm.query.followDateRange),
      callback: function($$v) {
        _vm.$set(_vm.query, "followDateRange", $$v)
      },
      expression: "query.followDateRange"
    }
  }), _vm._v(" "), _c('ul', {
    staticClass: "date-list"
  }, [_c('li', [_c('a', {
    on: {
      "click": function($event) {
        return _vm.setQueryDate(0)
      }
    }
  }, [_vm._v("今天")])]), _vm._v(" "), _c('li', [_c('a', {
    on: {
      "click": function($event) {
        return _vm.setQueryDate(1)
      }
    }
  }, [_vm._v("昨天")])]), _vm._v(" "), _c('li', [_c('a', {
    on: {
      "click": function($event) {
        return _vm.setQueryDate(2)
      }
    }
  }, [_vm._v("前天")])]), _vm._v(" "), _c('li', [_c('a', {
    on: {
      "click": function($event) {
        return _vm.setQueryDate(6)
      }
    }
  }, [_vm._v("最近一周")])]), _vm._v(" "), _c('li', [_c('a', {
    on: {
      "click": function($event) {
        return _vm.setQueryDate(14)
      }
    }
  }, [_vm._v("最近15天")])]), _vm._v(" "), _c('li', [_c('a', {
    on: {
      "click": function($event) {
        return _vm.setQueryDate(29)
      }
    }
  }, [_vm._v("最近30天")])]), _vm._v(" "), _c('li', [_c('a', {
    on: {
      "click": function($event) {
        return _vm.setQueryDate(59)
      }
    }
  }, [_vm._v("最近60天")])]), _vm._v(" "), _c('li', [_c('a', {
    on: {
      "click": function($event) {
        return _vm.setQueryDate(89)
      }
    }
  }, [_vm._v("最近90天")])])])], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("客户来源")]), _vm._v(" "), _c('td', [_c('i-select', {
    attrs: {
      "placeholder": "选择客户来源（可多选）",
      "multiple": ""
    },
    model: {
      value: (_vm.query.custSrcList),
      callback: function($$v) {
        _vm.$set(_vm.query, "custSrcList", $$v)
      },
      expression: "query.custSrcList"
    }
  }, [_c('i-option', {
    attrs: {
      "label": "-1",
      "value": ""
    }
  }, [_c('i', {
    staticClass: "gray"
  }, [_vm._v("无")])]), _vm._v(" "), _vm._l((_vm.dict.custSrcList), function(s) {
    return _c('i-option', {
      key: s.sourceId,
      attrs: {
        "value": s.sourceId,
        "label": s.sourceName
      }
    })
  })], 2)], 1)]), _vm._v(" "), _c('tr', [_c('th'), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "item submit"
  }, [_c('i-button', {
    staticClass: "primary-btn",
    attrs: {
      "type": "primary",
      "icon": "ios-search"
    },
    on: {
      "click": function($event) {
        return _vm.queryCustFollow()
      }
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('a', {
    staticClass: "l10",
    on: {
      "click": _vm.resetQuery
    }
  }, [_vm._v("重置")]), _vm._v(" "), (this.dict.staffList && this.dict.staffList.length > 1) ? _c('span', {
    staticClass: "l15"
  }, [_c('checkbox', {
    model: {
      value: (_vm.multSelectOwner),
      callback: function($$v) {
        _vm.multSelectOwner = $$v
      },
      expression: "multSelectOwner"
    }
  }, [_vm._v("销售多选")]), _vm._v(" "), (_vm.multSelectOwner) ? _c('a', {
    on: {
      "click": _vm.checkAllOwnerStaff
    }
  }, [_vm._v("全选")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "l15"
  }, [_c('checkbox', {
    on: {
      "on-change": _vm.changeIgnoreNullResult
    },
    model: {
      value: (_vm.query.ignoreNullResult),
      callback: function($$v) {
        _vm.$set(_vm.query, "ignoreNullResult", $$v)
      },
      expression: "query.ignoreNullResult"
    }
  }, [_vm._v("只看有备注的跟进")])], 1)], 1)])])])]), _vm._v(" "), _c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('td', {
    attrs: {
      "valign": "top"
    }
  }, [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("客户跟进记录 "), (_vm.totalCount) ? _c('span', [_vm._v("（" + _vm._s(_vm.totalCount) + "条）")]) : _vm._e()])]), _vm._v(" "), (_vm.custFollowList && _vm.custFollowList.length > 0) ? _c('Timeline', {
    staticClass: "follow-list"
  }, _vm._l((_vm.custFollowList), function(f, idx) {
    return _c('TimelineItem', {
      key: idx
    }, [_c('span', {
      staticClass: "time"
    }, [_vm._v(_vm._s(f.createTime))]), _vm._v(" "), _c('span', {
      staticClass: "name"
    }, [_vm._v(_vm._s(f.createUname))]), _vm._v(" "), _c('span', {
      staticClass: "gray"
    }, [_vm._v("跟进客户")]), _vm._v(" "), (_vm.g.data.user.isShopOwner || f.updateUid === _vm.g.data.user.uid) ? _c('a', {
      on: {
        "click": function($event) {
          return _vm.viewCust(f.custId, f.custName)
        }
      }
    }, [_vm._v(_vm._s(f.custName))]) : _c('span', [_vm._v(_vm._s(f.custName.shorten(3)))]), _vm._v("\n\t\t\t\t\t\t\t（"), _c('ul', {
      staticClass: "cust-items"
    }, [_c('li', [_vm._v(_vm._s(f.custLevel) + "星")]), _vm._v(" "), (f.custOrgName && _vm.g.data.user.isShopOwner) ? _c('li', [_vm._v(_vm._s(f.custOrgName))]) : _vm._e(), _vm._v(" "), (f.custJobTitle && _vm.g.data.user.isShopOwner) ? _c('li', [_vm._v(_vm._s(_vm.g.Dict.JobTitles[f.custJobTitle]))]) : _vm._e()]), _vm._v("）\n\t\t\t\t\t\t"), _c('div', {
      staticClass: "content"
    }, [_c('span', {
      class: 'ftype ftype-' + f.followType
    }, [_vm._v(_vm._s(_vm.g.Dict.FollowTypes[f.followType]))]), _vm._v(" "), (f.resultType) ? _c('span', {
      staticClass: "ret-type"
    }, [_vm._v("[" + _vm._s(_vm.resultTypeMap[f.resultType]) + "]")]) : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t" + _vm._s(f.result) + "\n\t\t\t\t\t\t"), (f.pics) ? _c('div', {
      staticClass: "pics"
    }, _vm._l((f.pics.split(',')), function(picName) {
      return _c('a', {
        attrs: {
          "href": _vm.g.Util.getImgUrl(picName),
          "target": "_blank"
        }
      }, [_c('img', {
        attrs: {
          "src": _vm.g.Util.getImgUrl(picName, 200, 200, 'EEEEEE')
        }
      })])
    }), 0) : _vm._e()])])
  }), 1) : _c('p', {
    staticClass: "center gray"
  }, [_vm._v("无跟进记录")]), _vm._v(" "), (_vm.totalCount && _vm.totalCount >= 1) ? _c('div', {
    staticClass: "page-nav",
    staticStyle: {
      "text-align": "left"
    }
  }, [_c('page', {
    attrs: {
      "total": _vm.totalCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.changePageNo
    }
  })], 1) : _vm._e()], 1)]), _vm._v(" "), (_vm.resultTypeStatList && _vm.resultTypeStatList.length) ? _c('td', {
    attrs: {
      "valign": "top",
      "width": "360",
      "align": "right"
    }
  }, [_c('section', {
    staticStyle: {
      "margin-left": "15px"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "mytbl ret-stat"
  }, [_c('table', {
    staticClass: "inner-table"
  }, [_vm._m(1), _vm._v(" "), _vm._l((_vm.resultTypeStatList), function(r, idx) {
    return _c('tr', [_c('td', [_c('a', {
      class: {
        'on': _vm.query.followResultType === r.flag
      },
      on: {
        "click": function($event) {
          return _vm.queryByFollowResultType(r.flag)
        }
      }
    }, [_vm._v(_vm._s(_vm.resultTypeMap[r.flag]))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(r.count))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.round(r.rate * 100)) + "%")])])
  })], 2)])])]) : _vm._e()])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": _vm.custDlgTitle,
      "width": "850",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.custDlgView),
      callback: function($$v) {
        _vm.custDlgView = $$v
      },
      expression: "custDlgView"
    }
  }, [(_vm.custDlgView) ? _c('cust-detail', {
    attrs: {
      "cust-id": _vm.selectCustId,
      "can-create": false
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "dlg-foot",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.custDlgView = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("跟进结果统计")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("跟进结果类型")]), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("数量")]), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("比例")])])
}]}

/***/ }),

/***/ 2433:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "cust"
    }
  }), _vm._v(" "), (!_vm.custId) ? _c('sys-header', {
    attrs: {
      "menu": "cust",
      "page": "cust-create"
    }
  }) : _c('sys-header', {
    attrs: {
      "menu": "cust",
      "page": "cust-query"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [(_vm.editable) ? _c('section', {
    staticClass: "myform",
    staticStyle: {
      "width": "100%"
    }
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("客户基本信息")]), _vm._v(" "), _c('i-form', {
    ref: "cust",
    staticStyle: {
      "width": "600px"
    },
    attrs: {
      "model": _vm.cust,
      "rules": _vm.formRule,
      "label-width": 110
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "custType",
      "label": "客户类型"
    }
  }, [(_vm.isDepositCust) ? _c('b', [_vm._v("订金客户")]) : (_vm.isMember) ? _c('b', [_vm._v("成交客户")]) : _c('radio-group', {
    attrs: {
      "type": "button"
    },
    model: {
      value: (_vm.cust.custType),
      callback: function($$v) {
        _vm.$set(_vm.cust, "custType", _vm._n($$v))
      },
      expression: "cust.custType"
    }
  }, [_c('radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("外场客户")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("到店访客")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("订金客户")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 3
    }
  }, [_vm._v("线上访客")])], 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "name",
      "label": "姓名"
    }
  }, [(!_vm.isMember) ? _c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": ""
    },
    model: {
      value: (_vm.cust.name),
      callback: function($$v) {
        _vm.$set(_vm.cust, "name", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "cust.name"
    }
  }) : _c('b', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.cust.name))])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "phoneNo",
      "label": "手机号"
    }
  }, [(!_vm.isMember) ? [_c('i-input', {
    staticClass: "input-s",
    attrs: {
      "type": "text"
    },
    on: {
      "on-blur": _vm.queryPhoneInMember
    },
    model: {
      value: (_vm.cust.phoneNo),
      callback: function($$v) {
        _vm.$set(_vm.cust, "phoneNo", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "cust.phoneNo"
    }
  }), _vm._v("\n\t\t\t\t\t\t  "), _c('span', {
    staticClass: "bigfont"
  }, [_vm._v(_vm._s(_vm.g.Util.formatPhone(_vm.cust.phoneNo)))])] : _c('b', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.cust.phoneNo))])], 2), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "idNo",
      "label": "身份证号"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": "客户身份证号（可选填）"
    },
    model: {
      value: (_vm.cust.idNo),
      callback: function($$v) {
        _vm.$set(_vm.cust, "idNo", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "cust.idNo"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "sex",
      "label": "性别"
    }
  }, [(!_vm.cust.idNo) ? _c('radio-group', {
    model: {
      value: (_vm.cust.sex),
      callback: function($$v) {
        _vm.$set(_vm.cust, "sex", _vm._n($$v))
      },
      expression: "cust.sex"
    }
  }, [_c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("男")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 0
    }
  }, [_vm._v("女")])], 1) : (_vm.cust.sex !== null) ? _c('span', [_vm._v(_vm._s(_vm.g.Dict.Sex[_vm.cust.sex === 1]) + " （" + _vm._s(_vm.g.Dict.SexDesc[_vm.cust.sex === 1]) + "）")]) : _vm._e()], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "birthday",
      "label": "生日"
    }
  }, [(!_vm.cust.idNo) ? [_c('input-int', {
    staticClass: "-date-year",
    attrs: {
      "min": "1910",
      "max": Date.new().getFullYear()
    },
    model: {
      value: (_vm.cust.birthdayYear),
      callback: function($$v) {
        _vm.$set(_vm.cust, "birthdayYear", _vm._n($$v))
      },
      expression: "cust.birthdayYear"
    }
  }), _vm._v(" 年  \n\t\t\t\t\t\t"), _c('input-int', {
    staticClass: "-date-month-day",
    attrs: {
      "min": "1",
      "max": "12"
    },
    model: {
      value: (_vm.cust.birthdayMonth),
      callback: function($$v) {
        _vm.$set(_vm.cust, "birthdayMonth", _vm._n($$v))
      },
      expression: "cust.birthdayMonth"
    }
  }), _vm._v(" 月  \n\t\t\t\t\t\t"), _c('input-int', {
    staticClass: "-date-month-day",
    attrs: {
      "min": "1",
      "max": "31"
    },
    model: {
      value: (_vm.cust.birthdayDay),
      callback: function($$v) {
        _vm.$set(_vm.cust, "birthdayDay", _vm._n($$v))
      },
      expression: "cust.birthdayDay"
    }
  }), _vm._v(" 日\n\t\t\t\t\t")] : _c('span', [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.cust.birthdayYear) + "-" + _vm._s(_vm.cust.birthdayMonth) + "-" + _vm._s(_vm.cust.birthdayDay) + "\n\t\t\t\t\t")])], 2), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "custLevel",
      "label": "客户级别"
    }
  }, [_c('Rate', {
    model: {
      value: (_vm.cust.custLevel),
      callback: function($$v) {
        _vm.$set(_vm.cust, "custLevel", $$v)
      },
      expression: "cust.custLevel"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（1星最低，5星最高）")])], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "ownerStaffId",
      "label": "客户负责人"
    }
  }, [_c('i-select', {
    attrs: {
      "filterable": ""
    },
    model: {
      value: (_vm.cust.ownerStaffId),
      callback: function($$v) {
        _vm.$set(_vm.cust, "ownerStaffId", _vm._n($$v))
      },
      expression: "cust.ownerStaffId"
    }
  }, [_vm._l((_vm.dict.staffList), function(s) {
    return _c('i-option', {
      key: s.staffId,
      attrs: {
        "value": s.staffId,
        "label": s.name
      }
    }, [_c('span', [_vm._v(_vm._s(s.name))]), _vm._v(" "), _c('span', {
      staticClass: "r gray"
    }, [_vm._v(_vm._s(s.phoneNo))])])
  }), _vm._v(" "), _c('i-option', {
    key: 0,
    attrs: {
      "value": ""
    }
  }, [_c('span', {
    staticClass: "gray"
  }, [_vm._v("无")])])], 2)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "custSrc",
      "label": "客户来源",
      "required": _vm.cust.custType < 3
    }
  }, [(_vm.cust.custSrc < 0) ? _c('b', [_vm._v(_vm._s(_vm.g.Dict.CustSrcDict[_vm.cust.custSrc]))]) : _c('i-select', {
    attrs: {
      "filterable": ""
    },
    model: {
      value: (_vm.cust.custSrc),
      callback: function($$v) {
        _vm.$set(_vm.cust, "custSrc", $$v)
      },
      expression: "cust.custSrc"
    }
  }, _vm._l((_vm.dict.custSourceList), function(s) {
    return _c('i-option', {
      key: s.sourceId,
      attrs: {
        "value": s.sourceId,
        "label": s.sourceName
      }
    }, [_c('span', [_vm._v(_vm._s(s.sourceName))]), _vm._v(" "), (s.sourceDesc) ? _c('span', {
      staticClass: "r gray"
    }, [_vm._v("# " + _vm._s(s.sourceDesc.substr(0, 24)))]) : _vm._e()])
  }), 1), _vm._v(" "), (!_vm.dict.custSourceList || _vm.dict.custSourceList.length === 0) ? _c('div', {
    staticClass: "gray"
  }, [_vm._v("\n\t\t\t\t\t\t尚未设置客户来源， "), _c('a', {
    attrs: {
      "href": "#/cust-source"
    }
  }, [_vm._v("去设置客户来源 →")])]) : _vm._e()], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "wxNo",
      "label": "微信号"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": ""
    },
    model: {
      value: (_vm.cust.wxNo),
      callback: function($$v) {
        _vm.$set(_vm.cust, "wxNo", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "cust.wxNo"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "reminderDate",
      "label": "提醒日期"
    }
  }, [_c('date-picker', {
    attrs: {
      "type": "date",
      "format": "yyyy-MM-dd"
    },
    model: {
      value: (_vm.cust.reminderDate),
      callback: function($$v) {
        _vm.$set(_vm.cust, "reminderDate", $$v)
      },
      expression: "cust.reminderDate"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（设置提醒日期，方便下次跟进快速找到此客户）")])], 1), _vm._v(" "), (_vm.cust.custType === 1) ? [_c('form-item', {
    attrs: {
      "prop": "visitTime",
      "label": "到访时间"
    }
  }, [_c('date-picker', {
    attrs: {
      "type": "datetime",
      "format": "yyyy-MM-dd HH:mm"
    },
    model: {
      value: (_vm.cust.visitTime),
      callback: function($$v) {
        _vm.$set(_vm.cust, "visitTime", $$v)
      },
      expression: "cust.visitTime"
    }
  })], 1)] : (_vm.cust.custType === 0 || _vm.cust.custType === 2) ? [_c('form-item', {
    attrs: {
      "prop": "visitTime",
      "label": "预约到店时间"
    }
  }, [_c('date-picker', {
    attrs: {
      "type": "datetime",
      "format": "yyyy-MM-dd HH:mm"
    },
    model: {
      value: (_vm.cust.visitTime),
      callback: function($$v) {
        _vm.$set(_vm.cust, "visitTime", $$v)
      },
      expression: "cust.visitTime"
    }
  })], 1)] : _vm._e(), _vm._v(" "), (_vm.cust.custType === 2) ? _c('form-item', {
    attrs: {
      "prop": "depositCharge",
      "label": "订金资费",
      "required": ""
    }
  }, [_c('i-select', {
    staticClass: "input-s",
    staticStyle: {
      "width": "300px",
      "margin-right": "5px"
    },
    attrs: {
      "disabled": _vm.hasDepositChage,
      "placeholder": "选择订金资费项",
      "filterable": ""
    },
    model: {
      value: (_vm.depositChargeItemId),
      callback: function($$v) {
        _vm.depositChargeItemId = $$v
      },
      expression: "depositChargeItemId"
    }
  }, _vm._l((_vm.chargeItemList), function(c) {
    return _c('i-option', {
      key: c.chargeItemId,
      attrs: {
        "value": c.chargeItemId,
        "label": c.chargeItemName
      }
    }, [_c('span', [_vm._v(_vm._s(c.chargeItemName))]), _vm._v(" "), _c('span', {
      staticClass: "r gray"
    }, [_vm._v("￥" + _vm._s(c.unitPrice))])])
  }), 1), _vm._v(" "), (!_vm.hasDepositChage) ? _c('i-select', {
    staticClass: "input-s",
    attrs: {
      "placeholder": "选择订金支付方式"
    },
    model: {
      value: (_vm.depositPaymentChannel),
      callback: function($$v) {
        _vm.depositPaymentChannel = $$v
      },
      expression: "depositPaymentChannel"
    }
  }, _vm._l((_vm.g.data.shop.paymentChannel), function(name, key) {
    return _c('i-option', {
      key: key,
      attrs: {
        "value": key,
        "label": name
      }
    }, [_c('span', [_vm._v(_vm._s(name))])])
  }), 1) : (_vm.hasDepositChage && _vm.depositPaymentChannel) ? [_vm._v("\n\t\t\t\t\t\t（支付方式： " + _vm._s(_vm.g.data.shop.paymentChannel[_vm.depositPaymentChannel]) + "）\n\t\t\t\t\t")] : _vm._e(), _vm._v(" "), (!_vm.hasDepositChage) ? _c('div', {
    staticClass: "orange p10"
  }, [_c('Icon', {
    attrs: {
      "type": "md-information-circle",
      "size": "17"
    }
  }), _vm._v(" 请选择订金资费项；如无此项，请在【"), _c('a', {
    attrs: {
      "href": "#/charge-item"
    }
  }, [_vm._v("记账 "), _c('Icon', {
    attrs: {
      "type": "md-arrow-forward"
    }
  }), _vm._v(" 资费项")], 1), _vm._v("】中创建订金资费项")], 1) : _vm._e()], 2) : _vm._e()], 2), _vm._v(" "), _c('div', {
    staticClass: "tit"
  }, [_vm._v("客户详情")]), _vm._v(" "), _c('i-form', {
    ref: "custDetail",
    staticStyle: {
      "width": "600px"
    },
    attrs: {
      "model": _vm.cust,
      "label-width": 110
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "orgName",
      "label": "工作单位"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": ""
    },
    model: {
      value: (_vm.cust.orgName),
      callback: function($$v) {
        _vm.$set(_vm.cust, "orgName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "cust.orgName"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "orgTypes",
      "label": "单位类型"
    }
  }, [_c('checkbox-group', {
    model: {
      value: (_vm.custMore.orgTypeList),
      callback: function($$v) {
        _vm.$set(_vm.custMore, "orgTypeList", $$v)
      },
      expression: "custMore.orgTypeList"
    }
  }, _vm._l((_vm.g.Dict.OrgTypes), function(name, val) {
    return _c('checkbox', {
      key: val,
      staticClass: "ckbox",
      attrs: {
        "label": val
      }
    }, [_vm._v(_vm._s(name))])
  }), 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "orgName",
      "label": "工作地址"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": ""
    },
    model: {
      value: (_vm.cust.orgAddr),
      callback: function($$v) {
        _vm.$set(_vm.cust, "orgAddr", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "cust.orgAddr"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "jobTitle",
      "label": "工作职位"
    }
  }, [_c('radio-group', {
    model: {
      value: (_vm.cust.jobTitle),
      callback: function($$v) {
        _vm.$set(_vm.cust, "jobTitle", _vm._n($$v))
      },
      expression: "cust.jobTitle"
    }
  }, _vm._l((_vm.g.Dict.JobTitles), function(name, val) {
    return _c('radio', {
      key: val,
      attrs: {
        "label": val
      }
    }, [_vm._v(_vm._s(name))])
  }), 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "homeAddr",
      "label": "家庭住址"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "text",
      "placeholder": ""
    },
    model: {
      value: (_vm.cust.homeAddr),
      callback: function($$v) {
        _vm.$set(_vm.cust, "homeAddr", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "cust.homeAddr"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "hobby",
      "label": "兴趣爱好"
    }
  }, [_c('checkbox-group', {
    model: {
      value: (_vm.custMore.hobbyList),
      callback: function($$v) {
        _vm.$set(_vm.custMore, "hobbyList", $$v)
      },
      expression: "custMore.hobbyList"
    }
  }, _vm._l((_vm.g.Dict.Hobbies), function(name, val) {
    return _c('checkbox', {
      key: val,
      staticClass: "ckbox",
      attrs: {
        "label": val
      }
    }, [_vm._v(_vm._s(name))])
  }), 1)], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "remark",
      "label": "备注"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 5
    },
    model: {
      value: (_vm.cust.remark),
      callback: function($$v) {
        _vm.$set(_vm.cust, "remark", $$v)
      },
      expression: "cust.remark"
    }
  })], 1)], 1), _vm._v(" "), (_vm.custId) ? [_c('div', {
    staticClass: "tit"
  }, [_vm._v("更新记录")]), _vm._v(" "), _c('i-form', {
    attrs: {
      "label-width": 110
    }
  }, [_c('form-item', {
    staticClass: "low-margin",
    attrs: {
      "label": "创建人"
    }
  }, [_vm._v(_vm._s(_vm.cust.createUname))]), _vm._v(" "), _c('form-item', {
    staticClass: "low-margin",
    attrs: {
      "label": "创建时间"
    }
  }, [_vm._v(_vm._s(_vm.cust.createTime))]), _vm._v(" "), _c('form-item', {
    staticClass: "low-margin",
    attrs: {
      "label": "更新人"
    }
  }, [_vm._v(_vm._s(_vm.cust.updateUname))]), _vm._v(" "), _c('form-item', {
    staticClass: "low-margin",
    attrs: {
      "label": "更新时间"
    }
  }, [_vm._v(_vm._s(_vm.cust.updateTime))])], 1)] : _vm._e(), _vm._v(" "), _c('div', {
    class: {
      'form-submit-bottom': _vm.custId,
      'submit': !_vm.custId
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.submitLoading
    },
    on: {
      "click": function($event) {
        return _vm.handleSubmit()
      }
    }
  }, [_vm._v("提交")]), _vm._v(" "), (_vm.custId) ? _c('span', {
    staticClass: "l10"
  }, [_c('i-button', {
    on: {
      "click": _vm.queryCustPhoneNoLog
    }
  }, [_vm._v("手机号修改日志")]), _vm._v("\n\t\t\t\t\t \n\t\t\t\t\t"), _c('i-button', {
    on: {
      "click": _vm.queryCustWxNoLog
    }
  }, [_vm._v("微信号修改日志")])], 1) : _vm._e()], 1)], 2) : (_vm.editable === false) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n\t\t\t您无权查看该客户信息\n\t\t")]) : _vm._e()]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "客户手机号修改日志",
      "width": "700",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.phoneNoLogDlg),
      callback: function($$v) {
        _vm.phoneNoLogDlg = $$v
      },
      expression: "phoneNoLogDlg"
    }
  }, [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("操作时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("操作人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("原手机号")]), _vm._v(" "), _c('th', [_vm._v("新手机号")])]), _vm._v(" "), _vm._l((_vm.phoneNoLogList), function(l) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(l.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createUname))]), _vm._v(" "), _c('td', {
      staticClass: "big"
    }, [_vm._v(_vm._s(l.oldValue))]), _vm._v(" "), _c('td', {
      staticClass: "big"
    }, [_vm._v(_vm._s(l.newValue))])])
  })], 2), _vm._v(" "), (_vm.phoneNoLogList && _vm.phoneNoLogList.length === 0) ? _c('p', {
    staticClass: "no-data"
  }, [_vm._v("暂无手机号修改日志")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    staticClass: "long-btn",
    on: {
      "click": function($event) {
        _vm.phoneNoLogDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)]), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "客户微信号修改日志",
      "width": "700",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.wxNoLogDlg),
      callback: function($$v) {
        _vm.wxNoLogDlg = $$v
      },
      expression: "wxNoLogDlg"
    }
  }, [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("操作时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("操作人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("原微信号")]), _vm._v(" "), _c('th', [_vm._v("新微信号")])]), _vm._v(" "), _vm._l((_vm.wxNoLogList), function(l) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(l.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createUname))]), _vm._v(" "), _c('td', {
      staticClass: "big"
    }, [_vm._v(_vm._s(l.oldValue))]), _vm._v(" "), _c('td', {
      staticClass: "big"
    }, [_vm._v(_vm._s(l.newValue))])])
  })], 2), _vm._v(" "), (_vm.wxNoLogList && _vm.wxNoLogList.length === 0) ? _c('p', {
    staticClass: "no-data"
  }, [_vm._v("暂无微信号修改日志")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    staticClass: "long-btn",
    on: {
      "click": function($event) {
        _vm.wxNoLogDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 2455:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("跟进任务设置")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [(_vm.editable) ? _c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": _vm.openFollowTaskDlg
    }
  }, [_vm._v("添加")]) : _c('span', {
    staticClass: "orange"
  }, [_vm._v("仅店长有权限操作")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.followTaskList), function(t, idx) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(t.orderNo))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(t.taskName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(t.unfollowDays))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(t.custLevel))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(t.staffNames))]), _vm._v(" "), _c('td', [(_vm.editable) ? _c('ul', {
      staticClass: "opt-list"
    }, [_c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.editFollowTask(idx)
        }
      }
    }, [_vm._v("编辑")])]), _vm._v(" "), _c('li', [_c('a', {
      on: {
        "click": function($event) {
          return _vm.delFollowTask(idx)
        }
      }
    }, [_vm._v("删除")])])]) : _vm._e()])])
  })], 2), _vm._v(" "), (_vm.followTaskList && !_vm.followTaskList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "跟进任务设置",
      "width": "800"
    },
    model: {
      value: (_vm.followTaskDlg),
      callback: function($$v) {
        _vm.followTaskDlg = $$v
      },
      expression: "followTaskDlg"
    }
  }, [_c('div', {
    staticClass: "tblform"
  }, [_c('table', [_c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("序号")]), _c('td', [_c('input-int', {
    attrs: {
      "placeholder": "排序用"
    },
    model: {
      value: (_vm.followTask.orderNo),
      callback: function($$v) {
        _vm.$set(_vm.followTask, "orderNo", $$v)
      },
      expression: "followTask.orderNo"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("任务名称")]), _c('td', [_c('i-input', {
    model: {
      value: (_vm.followTask.taskName),
      callback: function($$v) {
        _vm.$set(_vm.followTask, "taskName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "followTask.taskName"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("未跟进天数")]), _c('td', [_c('input-int', {
    model: {
      value: (_vm.followTask.unfollowDays),
      callback: function($$v) {
        _vm.$set(_vm.followTask, "unfollowDays", $$v)
      },
      expression: "followTask.unfollowDays"
    }
  }), _vm._v("  天")], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("客户级别")]), _vm._v(" "), _c('td', [_c('radio-group', {
    attrs: {
      "type": "button"
    },
    model: {
      value: (_vm.followTask.custLevel),
      callback: function($$v) {
        _vm.$set(_vm.followTask, "custLevel", $$v)
      },
      expression: "followTask.custLevel"
    }
  }, [_c('radio', {
    attrs: {
      "label": ""
    }
  }, [_vm._v("不限制")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("1星")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("2星")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 3
    }
  }, [_vm._v("3星")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 4
    }
  }, [_vm._v("4星")]), _vm._v(" "), _c('radio', {
    attrs: {
      "label": 5
    }
  }, [_vm._v("5星")])], 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("适用销售")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "sales"
  }, [_c('checkbox-group', {
    staticStyle: {
      "display": "inline-block"
    },
    model: {
      value: (_vm.salesIdList),
      callback: function($$v) {
        _vm.salesIdList = $$v
      },
      expression: "salesIdList"
    }
  }, _vm._l((_vm.salesList), function(s) {
    return _c('checkbox', {
      key: s.staffId,
      staticClass: "ckbox",
      attrs: {
        "label": s.staffId
      }
    }, [_vm._v(_vm._s(s.name))])
  }), 1), _vm._v(" "), _c('a', {
    on: {
      "click": _vm.checkAllSales
    }
  }, [_vm._v("全选")])], 1)])]), _vm._v(" "), _c('tr', [_c('th'), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "p10"
  }, [_c('i-button', {
    staticClass: "primary-btn",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveFollowTask
    }
  }, [_vm._v("提交")]), _vm._v("  \n\t\t\t\t\t\t\t"), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.followTaskDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)])])])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("序号")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "300"
    }
  }, [_vm._v("任务名称")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("未跟进天数")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("客户级别")]), _vm._v(" "), _c('th', [_vm._v("适用员工")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("操作")])])
}]}

/***/ }),

/***/ 2472:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('shop-nav', {
    attrs: {
      "menu": "cust"
    }
  }), _vm._v(" "), _c('sys-header', {
    attrs: {
      "menu": "cust",
      "page": "cust-follow-task"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "g-main"
  }, [_c('section', {
    staticClass: "query-section"
  }, [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("销售角色")]), _vm._v(" "), _c('td', [(_vm.dict.staffList.length > 1 || _vm.g.data.user.isShopOwner) ? [_c('RadioGroup', {
    on: {
      "on-change": _vm.changeOwnerStaff
    },
    model: {
      value: (_vm.query.ownerStaffId),
      callback: function($$v) {
        _vm.$set(_vm.query, "ownerStaffId", $$v)
      },
      expression: "query.ownerStaffId"
    }
  }, _vm._l((_vm.dict.staffList), function(s) {
    return _c('Radio', {
      key: s.staffId,
      attrs: {
        "label": s.staffId
      }
    }, [_vm._v(_vm._s(s.name))])
  }), 1)] : (_vm.dict.staffList.length === 1) ? _c('b', [_vm._v(_vm._s(_vm.dict.staffList[0].name))]) : _vm._e()], 2), _vm._v(" "), _c('td', {
    attrs: {
      "width": "50",
      "valign": "top",
      "align": "right"
    }
  }, [_c('i-button', {
    on: {
      "click": _vm.runCustAssign
    }
  }, [_vm._v("获取分配客户")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "tasklist"
  }, [(_vm.custFollowTaskList && _vm.custFollowTaskList.length && _vm.custCountsOfFollowTask.length) ? _c('ul', _vm._l((_vm.custFollowTaskList), function(t, idx) {
    return _c('li', {
      class: {
        'on': idx === _vm.selectTaskIdx
      },
      on: {
        "click": function($event) {
          return _vm.changeCustFollowTask(idx)
        }
      }
    }, [_vm._v(_vm._s(t.taskName) + " ("), _c('b', [_vm._v(_vm._s(_vm.custCountsOfFollowTask[idx]))]), _vm._v(")")])
  }), 0) : _vm._e(), _vm._v(" "), (_vm.custFollowTaskList && !_vm.custFollowTaskList.length) ? _c('p', {
    staticClass: "no-data"
  }, [_vm._v("无匹配的跟进任务")]) : _vm._e()])]), _vm._v(" "), (_vm.totalCount) ? _c('section', [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', [_c('div', {
    staticClass: "opt-bar"
  }, [_c('Dropdown', {
    attrs: {
      "placement": "bottom-start",
      "trigger": "click"
    },
    on: {
      "on-click": _vm.batchUpdateCustLevel
    }
  }, [_c('i-button', [_vm._v("\n\t\t\t\t\t\t\t\t\t客户级别更新为 "), _c('Icon', {
    attrs: {
      "type": "ios-arrow-down"
    }
  })], 1), _vm._v(" "), _c('DropdownMenu', {
    attrs: {
      "slot": "list"
    },
    slot: "list"
  }, [_c('DropdownItem', {
    attrs: {
      "name": "5"
    }
  }, [_vm._v("5星")]), _vm._v(" "), _c('DropdownItem', {
    attrs: {
      "name": "4"
    }
  }, [_vm._v("4星")]), _vm._v(" "), _c('DropdownItem', {
    attrs: {
      "name": "3"
    }
  }, [_vm._v("3星")]), _vm._v(" "), _c('DropdownItem', {
    attrs: {
      "name": "2"
    }
  }, [_vm._v("2星")]), _vm._v(" "), _c('DropdownItem', {
    attrs: {
      "name": "1"
    }
  }, [_vm._v("1星")])], 1)], 1)], 1)]), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right",
      "valign": "middle"
    }
  }, [_c('div', {
    staticClass: "ret-cnt"
  }, [_vm._v("查询到 "), _c('u', {
    staticClass: "cnt"
  }, [_vm._v(_vm._s(_vm.totalCount))]), _vm._v(" 个客户")])])])]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl cl"
  }, [_c('tr', [_c('th', {
    staticClass: "ckbox",
    attrs: {
      "width": "40"
    },
    on: {
      "click": function($event) {
        return _vm.selectAll()
      }
    }
  }, [(_vm.isSelectAll) ? _c('i', {
    staticClass: "iconfont icon-checkbox-checked ckbox-1",
    staticStyle: {
      "font-weight": "normal"
    }
  }) : _c('i', {
    staticClass: "iconfont icon-checkbox-empty ckbox-0",
    staticStyle: {
      "font-weight": "normal"
    }
  })]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "180"
    }
  }, [_vm._v("客户姓名/单位")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("性别")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "70"
    }
  }, [_vm._v("负责人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("客户类型")]), _vm._v(" "), _c('th', {
    staticClass: "sort",
    attrs: {
      "width": "58"
    },
    on: {
      "click": function($event) {
        return _vm.queryBySort('cust_level')
      }
    }
  }, [_vm._v("级别\n\t\t\t\t\t\t\t"), (_vm.query.orderBy === 'cust_level') ? [(_vm.query.ascOrDesc === 'asc') ? _c('Icon', {
    attrs: {
      "type": "md-arrow-up"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.query.ascOrDesc === 'desc') ? _c('Icon', {
    attrs: {
      "type": "md-arrow-down"
    }
  }) : _vm._e()] : _vm._e()], 2), _vm._v(" "), _c('th', {
    attrs: {
      "width": "95"
    }
  }, [_vm._v("客户来源")]), _vm._v(" "), _c('th', {
    staticClass: "sort",
    attrs: {
      "width": "133"
    },
    on: {
      "click": function($event) {
        return _vm.queryBySort('create_time')
      }
    }
  }, [_vm._v("创建时间\n\t\t\t\t\t\t\t"), (_vm.query.orderBy === 'create_time') ? [(_vm.query.ascOrDesc === 'asc') ? _c('Icon', {
    attrs: {
      "type": "md-arrow-up"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.query.ascOrDesc === 'desc') ? _c('Icon', {
    attrs: {
      "type": "md-arrow-down"
    }
  }) : _vm._e()] : _vm._e()], 2), _vm._v(" "), _c('th', {
    staticClass: "sort",
    attrs: {
      "width": "80"
    },
    on: {
      "click": function($event) {
        return _vm.queryBySort('follow_cnt')
      }
    }
  }, [_vm._v("跟进次数\n\t\t\t\t\t\t\t"), (_vm.query.orderBy === 'follow_cnt') ? [(_vm.query.ascOrDesc === 'asc') ? _c('Icon', {
    attrs: {
      "type": "md-arrow-up"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.query.ascOrDesc === 'desc') ? _c('Icon', {
    attrs: {
      "type": "md-arrow-down"
    }
  }) : _vm._e()] : _vm._e()], 2), _vm._v(" "), _c('th', {
    staticClass: "sort",
    on: {
      "click": function($event) {
        return _vm.queryBySort('follow_time')
      }
    }
  }, [_vm._v("最新跟进\n\t\t\t\t\t\t\t"), (_vm.query.orderBy === 'follow_time') ? [(_vm.query.ascOrDesc === 'asc') ? _c('Icon', {
    attrs: {
      "type": "md-arrow-up"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.query.ascOrDesc === 'desc') ? _c('Icon', {
    attrs: {
      "type": "md-arrow-down"
    }
  }) : _vm._e()] : _vm._e()], 2), _vm._v(" "), _c('th', [_vm._v("备注")])]), _vm._v(" "), _vm._l((_vm.custList), function(c, idx) {
    return [_c('tr', [_c('td', {
      staticClass: "ckbox",
      on: {
        "click": function($event) {
          return _vm.selectCust(idx)
        }
      }
    }, [(!_vm.custCkList[idx]) ? _c('i', {
      staticClass: "iconfont icon-checkbox-empty ckbox-0"
    }) : _c('i', {
      staticClass: "iconfont icon-checkbox-checked ckbox-1"
    })]), _vm._v(" "), _c('td', {
      on: {
        "click": function($event) {
          return _vm.viewCust(idx)
        }
      }
    }, [_c('a', {
      staticStyle: {
        "display": "block"
      }
    }, [_vm._v(_vm._s(c.name))]), _vm._v(" "), (c.orgName) ? _c('div', {
      staticClass: "org"
    }, [_c('Icon', {
      attrs: {
        "type": "ios-pin-outline"
      }
    }), _vm._v(_vm._s(c.orgName))], 1) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.Sex[c.sex]))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.ownerName))]), _vm._v(" "), _c('td', {
      class: 'cust-type-' + c.custType
    }, [_vm._v(_vm._s(_vm.g.Dict.CustTypes[c.custType]))]), _vm._v(" "), _c('td', {
      attrs: {
        "align": "center"
      }
    }, [_c('span', {
      class: 'cust-level-' + c.custLevel
    }, [_vm._v(_vm._s(c.custLevel))])]), _vm._v(" "), _c('td', [(c.custSrcName) ? [_vm._v(_vm._s(c.custSrcName))] : (c.custSrc < 0) ? _c('i', [_vm._v(_vm._s(_vm.g.Dict.CustSrcDict[c.custSrc]))]) : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(Date.new(c.createTime).format('yyyy-MM-dd hh:mm')))]), _vm._v(" "), _c('td', [(c.followCnt > 0) ? [_vm._v(_vm._s(c.followCnt) + " 次")] : _c('span', {
      staticClass: "gray"
    }, [_vm._v("0 次")])], 2), _vm._v(" "), _c('td', [(c.followTime) ? [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(Date.new(c.followTime).format('yyyy-MM-dd hh:mm')) + "\n\t\t\t\t\t\t\t"), _c('div', {
      staticClass: "ftxt",
      on: {
        "click": function($event) {
          return _vm.viewCust(idx)
        }
      }
    }, [_vm._v(_vm._s(c.latestFollowDesc))])] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(c.remark) + "\n\t\t\t\t\t\t")])])]
  })], 2)]), _vm._v(" "), (_vm.totalCount && _vm.totalCount > 50) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.totalCount,
      "page-size": 50,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.changePageNo
    }
  })], 1) : _vm._e(), _vm._v(" "), (!_vm.totalCount) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": _vm.custFollowTit,
      "width": "850",
      "styles": {
        top: '10px'
      },
      "mask-closable": false
    },
    model: {
      value: (_vm.custFollowDlgView),
      callback: function($$v) {
        _vm.custFollowDlgView = $$v
      },
      expression: "custFollowDlgView"
    }
  }, [(_vm.custFollowDlgView) ? _c('cust-follow', {
    attrs: {
      "cust-id": _vm.selectCustIdForFollow,
      "can-create": _vm.canCreateCustFollow,
      "after-create": _vm.afterCreateCustFollow
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "dlg-foot",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.custFollowDlgView = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": _vm.custDlgTitle,
      "width": "850",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.custDlgView),
      callback: function($$v) {
        _vm.custDlgView = $$v
      },
      expression: "custDlgView"
    }
  }, [(_vm.custDlgView) ? _c('cust-detail', {
    attrs: {
      "cust-id": _vm.selectCustId,
      "can-create": false,
      "after-create-follow": _vm.afterCreateCustFollow
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "dlg-foot",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.custDlgView = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2021)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1273),
  /* template */
  __webpack_require__(2433),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-61f92f46",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1933)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1272),
  /* template */
  __webpack_require__(2345),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-35437f90",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1986)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1274),
  /* template */
  __webpack_require__(2398),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4d255be8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1952)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1275),
  /* template */
  __webpack_require__(2364),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3e58ed38",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2060)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1276),
  /* template */
  __webpack_require__(2472),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-79d6b815",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1870)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1277),
  /* template */
  __webpack_require__(2279),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-126e9661",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 918:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1835)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1278),
  /* template */
  __webpack_require__(2243),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-00670a12",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(1944)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(1279),
  /* template */
  __webpack_require__(2356),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-39590f88",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});