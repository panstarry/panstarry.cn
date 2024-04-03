webpackJsonp([28],{

/***/ 113:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by zxl on 2017/4/19.
 */
const Conf = {
  API_HOST: "https://4pm061jq5175.vicp.fun", //'http://192.168.0.107:8090', //'http://127.0.0.1:8090',
  IMG_BASE_URL: "//qdimg.oss-cn-shanghai.aliyuncs.com",
  IMG_UPLOAD_URL: "https://4pm061jq5175.vicp.fun" + "/imgUpload",
  ACCEPT_DISTANCE: 400,
  PAGE_SIZE: 30,
  //IMG_LIB_URL: 'http://www.jzongguan.com/imglib',
  IMG_LIB_URL: "http://192.168.0.174:8093/imglib",
  VOICE_BASE_URL: "http://192.168.0.107:9007/voices/",
  //QR_CODE_URL: 'http://192.168.0.107:9007/_tool_/qr-img.php?val=',
  QR_CODE_URL: "http://tool.jzongguan.com/qr-img.php?val=",
  // MSITE_BASE_URL: "http://tool.jzongguan.com",
  MSITE_BASE_URL: "http://192.168.0.156:7091",
  VIDEO_BASE_URL: "//qd-jzg-video.oss-cn-shanghai.aliyuncs.com",
  CHECKIN_SOCKET_ADDR: "http://192.168.0.174:2120",

  WX_APP_ID_PUB: "wxd643724d2f21d666", // pub
  WX_APP_ID_TEST: "wx83462b1a98b26046", // test

  Keys: {
    USER: "user",
    TID: "encTid",
    SID: "encSid",
    LOGIN_FLAG: "islogin",
    TENANT_OWNER: "tenant_owner"
  },

  CookieKeys: {
    AUTO_JUMP_TO_MEMBER_PAGE: "member.autoJumpToMemberPage",
    USER_PHONE: "jzg.login.user",
    USER_PASSWD: "jzg.login.pwd",
    USER_WXID: "jzg.user.wxid",
    LOGIN_TID: "jzg.login.tid",
    LOGIN_SID: "jzg.login.sid",
    LOGIN_AS: "jzg.login.as",
    LOGOUT: "jzg.logout",
    LOGIN_HEAD_IMG: "jzg.login.headimg",
    STAFF_SALARY_START_DAY: "staff.salaryStartDay",
    MEMBER_QUERY_FOR_STAFF_ROLE: "jzg.member_query_for_staff_role",
    SYS_EXP_DATE_TIPS: "jzg.sys_exp_date_tips"
  },

  LocalSessionKey: {
    MEMBER_NAME: "member.name"
  },

  StoreTypes: {
    LOGIN: "login",
    LOGOUT: "logout",
    UPDATE_TENANT: "updateTenant",
    UPDATE_SHOP: "updateShop",
    UPDATE_SHOP_NAME: "updateShopName"
  }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = Conf;


const SvName = {
  LOGIN: "login",
  LOGOUT: "logout",
  SYSTIME_GET: "systimeGet",
  SYS_LOG_CREATE: "sysLogCreate",
  SYS_PARAM_VALUE_QUERY: "sysParamValueQuery",
  DICT_QUERY: "dictQuery",
  SMS_AUTHCODE_CHECK: "smsAuthcodeCheck",
  SMS_AUTHCODE_SEND: "smsAuthcodeSend",
  INIT_DATA_LOAD: "initDataLoad",
  TENANT_CREATE: "tenantCreate",
  USER_CHECK: "userCheck",
  REGION_GET: "regionGet",
  USER_PWD_REG: "userPwdReg",
  TEANT_QUERY: "tenantQuery",
  SHOP_QUERY: "shopQuery",
  TENANT_UPDATE: "tenantUpdate",
  TENANT_SHOPS_QUERY: "tenantShopsQuery",
  USER_SHOP_SET: "userShopSet",
  SHOP_CREATE: "shopCreate",
  SHOP_UPDATE: "shopUpdate",
  SHOP_LOGO_IMG_SAVE: "shopLogoImgSave",
  SHOP_DELETE: "shopDelete",
  SHOP_INIT_CHECK: "shopInitCheck",
  CARD_SAVE: "cardSave",
  CARD_QUERY: "cardQuery",
  CARD_STATUS_UPDATE: "cardStatusUpdate",
  ROLE_QUERY: "roleQuery",
  ROLE_SAVE: "roleSave",
  STAFF_SAVE: "staffSave",
  STAFF_QUERY: "staffQuery",
  SUB_STAFF_QUERY: "subStaffQuery",
  USER_PHONE_UPDATE: "userPhoneUpdate",
  STAFF_STATUS_UPDATE: "staffStatusUpdate",
  STAFF_VACATION_UPDATE: "staffVacationUpdate",
  COACH_WORKTIME_UPDATE: "coachWorktimeUpdate",
  COACH_WORK_SCHEDULE_QUERY: "coachWorkScheduleQuery",
  IMG_UPLOAD: "imgUpload",
  GROUND_QUERY: "groundQuery",
  GROUND_SAVE: "groundSave",
  GROUND_STATUS_UPDATE: "groundStatusUpdate",
  COURSE_QUERY: "courseQuery",
  COURSE_SAVE: "courseSave",
  PRIVATE_COURSE_QUERY: "privateCourseQuery",
  PRIVATE_COURSE_SAVE: "privateCourseSave",
  PRIVATE_COURSE_ORDER_NO_UPDATE: "privateCourseOrderNoUpdate",
  COACH_BASE_QUERY: "coachBaseQuery",
  COACH_PS_MEMBER_STAT: "coachPsMemberStat",
  COURSE_SCHEDULE_SAVE: "courseScheduleSave",
  COURSE_SCHEDULE_QUERY: "courseScheduleQuery",
  COACH_TYPE_QUERY: "coachTypeQuery",
  LESSON_SAVE: "lessonSave",
  LESSON_QUERY: "lessonQuery",
  MEMBER_PHONE_NO_FIND: "memberPhoneNoFind",
  MEMBER_CREATE: "memberCreate",
  MEMBER_ADV_QUERY: "memberAdvQuery",
  MEMBER_SINGLE_QUERY: "memberSingleQuery",
  MEMBER_UPDATE: "memberUpdate",
  MEMBER_AVATAR_UPDATE: "memberAvatarUpdate",
  MEMBER_AVATAR_DELETE: "memberAvatarDelete",
  MEMBER_CARD_QUERY: "memberCardQuery",
  MEMBER_CARD_PAYMENT_QUERY: "memberCardPaymentQuery",
  MEMBER_CARD_PAYMENT_CREATE: "memberCardPaymentCreate",
  MEMBER_CARD_PAYMENT_DRAFT_SAVE: "memberCardPaymentDraftSave",
  MEMBER_CARD_VACATION_CREATE: "memberCardVacationCreate",
  MEMBER_CARD_VACATION_QUERY: "memberCardVacationQuery",
  MEMBER_CARD_CREATE: "memberCardCreate",
  MEMBER_CARD_DRAFT_SAVE: "memberCardDraftSave",
  MEMBER_FOLLOW_CREATE: "memberFollowCreate",
  MEMBER_FOLLOW_QUERY: "memberFollowQuery",
  MEMBER_BASE_QUERY: "memberBaseQuery",
  MEMBER_STAT_QUERY: "memberStatQuery",
  SHOP_TAG_QUERY: "shopTagQuery",
  PRIVATE_COURSE_SCHEDULE_SAVE: "privateCourseScheduleSave",
  PRIVATE_COURSE_SCHEDULE_QUERY: "privateCourseScheduleQuery",
  PC_LESSON_SAVE: "pcLessonSave",
  PC_LESSON_QUERY: "pcLessonQuery",
  MEMBER_PC_LESSON_BOOKING_CANCEL: "memberPcLessonBookingCancel",
  MEMBER_ENTRY_CHECKIN_CREATE: "memberEntryCheckinCreate",
  MEMBER_ENTRY_CHECKIN_QUERY: "memberEntryCheckinQuery",
  POINT_CONF_QUERY: "pointsConfQuery",
  POINT_BASE_SAVE: "pointsBaseSave",
  POINT_RULE_SAVE: "pointsRuleSave",
  MEMBER_POINTS_QUERY: "memberPointsQuery",
  MEMBER_POINTS_CREATE: "memberPointsCreate",
  MEMBER_LESSON_OPERATE: "memberLessonOperate",
  MEMBER_GROUP_LESSON_QUERY: "memberGroupLessonQuery",
  MEMBER_PRIVATE_LESSON_QUERY: "memberPrivateLessonQuery",
  MEMBER_LESSON_BOOKING_CANCEL: "memberLessonBookingCancel",
  LESSON_REVIEW_QUERY: "lessonReviewQuery",
  COACH_CHECKIN_LESSON: "coachCheckinLesson",
  MEMBER_GROUP_COURSE_QUERY: "memberGroupCourseQuery",
  CHARGE_ITEM_SAVE: "chargeItemSave",
  CHARGE_ITEM_QUERY: "chargeItemQuery",
  CHARGE_ITEM_STAUS_UPDATE: "chargeItemStatusUpdate",
  CHARGE_SAVE: "chargeSave",
  CHARGE_QUERY: "chargeQuery",
  MEMBER_CNT_STAT: "memberCntStat",
  MEMBER_STAT: "memberStat",
  MEMBER_ENTRY_STAT_BY_DATE: "memberEntryStatByDate",
  SALES_STAT: "salesStat",
  COACH_STAT: "coachStat",
  COURSE_STAT: "courseStat",
  CHARGE_STAT: "chargeStat",
  CARD_STAT: "cardStat",
  CARD_AMOUNT_STAT: "cardAmountStat",
  CUST_SOURCE_STAT: "custSourceStat",
  MEMBER_CARD_STAT: "memberCardStat",
  COURSE_CARD_STAT: "courseCardStat",
  CHARGE_ITEM_STAT: "chargeItemStat",
  CHARGE_PAYMENT_CHNL_STAT: "chargePaymentChnlStat",
  MEMBER_LESSON_REVIEW_CREATE: "memberLessonReviewCreate",
  MEMBER_LESSON_QUERY_BY_LESSON: "memberLessonQueryByLesson",
  MEMBER_CARD_PAYMENT_CNT_STAT: "memberCardPaymentCntStat",
  MEMBER_DRAFT_SAVE: "memberDraftSave",
  MEMBER_DRAFT_QUERY: "memberDraftQuery",
  MEMBER_CARD_DRAFT_QUERY: "memberCardDraftQuery",
  MEMBER_CARD_PAYMENT_DRAFT_QUERY: "memberCardPaymentDraftQuery",
  MEMBER_CARD_DRAFT_AUDIT_QUERY: "memberCardDraftAuditQuery",
  MEMBER_CARD_PAYMENT_DRAFT_AUDIT_QUERY: "memberCardPaymentDraftAuditQuery",
  MEMBER_CARD_DRAFT_AUDIT_SUBMIT: "memberCardDraftAuditSubmit",
  MEMBER_CARD_PAYMENT_DRAFT_AUDIT_SUBMIT: "memberCardPaymentDraftAuditSubmit",
  MEMBER_CARD_DRAFT_DELETE: "memberCardDraftDelete",
  MEMBER_CARD_PAYMENT_DRAFT_DELETE: "memberCardPaymentDraftDelete",
  MEMBER_DRAFT_AUDIT_QUERY: "memberDraftAuditQuery",
  MEMBER_DRAFT_AUDIT_SUBMIT: "memberDraftAuditSubmit",
  MEMBER_CARD_PAYMENT_SALES_SAVE: "memberCardPaymentSalesSave",
  PRIVATE_COURSE_SCHEDULE_COPY: "privateCourseScheduleCopy",
  STAFF_SALARY_CALC: "staffSalaryCalc",
  MEMBER_IMG_QUERY: "memberImgQuery",
  MEMBER_IMG_SAVE: "memberImgSave",
  SHOP_GPS_UPDATE: "shopGpsUpdate",
  SHOP_FEEDBACK_CHECK: "shopFeedbackCheck",
  SHOP_FEEDBACK_SAVE: "shopFeedbackSave",
  SHOP_FEEDBACK_QUERY: "shopFeedbackQuery",
  SHOP_FEEDBACK_REPLY_SAVE: "shopFeedbackReplySave",
  CUST_SOURCE_QUERY: "custSourceQuery",
  CUST_SOURCE_SAVE: "custSourceSave",
  CUST_NAME_QUERY: "custNameQuery",
  CUST_SAVE: "custSave",
  CUST_QUERY: "custQuery",
  CUST_FOLLOW_SAVE: "custFollowSave",
  CUST_FOLLOW_QUERY: "custFollowQuery",
  LOGIN_WITH_WX: "loginWithWx",
  USER_WX_ID_CLEAR: "userWxIdClear",
  CHECKIN_SUCCESS_VOICE_FILE_GET: "checkinSuccessVoiceFileGet",
  SHOP_ACCESS_PWD_UPDATE: "shopAccessPwdUpdate",
  SHOP_PARAM_QUERY: "shopParamQuery",
  SHOP_PARAM_UPDATE: "shopParamUpdate",
  SHOP_ID_QUERY_FOR_MSITE: "shopIdQueryForMsite",
  ACTIVITY_COUPON_QUERY: "activityCouponQuery",
  ACTIVITY_COUPON_SAVE: "activityCouponSave",
  EVENT_QUERY: "eventQuery",
  EVENT_SUBJECT_QUERY: "eventSubjectQuery",
  EVENT_SUBJECT_STAT: "eventSubjectStat",
  EVENT_ENROLLQUERY: "eventEnrollQuery",
  COUPON_STAT: "couponStat",
  LOTTERY_QUERY: "lotteryQuery",
  LOTTERY_SAVE: "lotterySave",
  LOTTERY_STAT: "lotteryStat",
  SHOP_STAT: "shopStat",
  PC_SCHEDULE_MEMBER_QUERY: "pcScheduleMemberQuery",
  COACH_LESSON_STAT: "coachLessonStat",
  PC_LESSON_CANCEL_LOG_QUERY: "pcLessonCancelLogQuery",
  SMS_LOG_QUERY: "smsLogQuery",
  SMS_COUNTS_QUERY: "smsCountsQuery",
  MEMBER_NOTICE_ARG_QUERY: "memberNoticeArgQuery",
  MEMBER_NOTICE_ARG_UPDATE: "memberNoticeArgUpdate",
  MEMBER_BASE_LIST_QUERY: "memberBaseListQuery",
  CLASS_LESSON_CHECKIN: "classLessonCheckin",
  SHOP_ARG_QUERY: "shopArgQuery",
  SHARE_ITEM_EXIST_QUERY: "shareItemExistQuery",
  SHARE_ITEM_QUERY: "shareItemQuery",
  SHARE_ITEM_OWNER_CREATE: "shareItemOwnerCreate",
  SHARE_ITEM_OWNER_QUERY: "shareItemOwnerQuery",
  SHARE_ITEM_RECEIVER_QUERY: "shareItemReceiverQuery",
  WX_API_CONF_GET: "wxApiConfGet",
  SHOP_TEST_ITEM_QUERY: "shopTestItemQuery",
  SHOP_TEST_ITEM_SAVE: "shopTestItemSave",
  MEMBER_TEST_QUERY: "memberTestQuery",
  MEMBER_TEST_SAVE: "memberTestSave",
  MEMBER_TEST_ITEM_QUERY: "memberTestItemQuery",
  MEMBER_TEST_ITEM_SAVE: "memberTestItemSave",
  MEMBER_SCORE_TEST_SAVE: "memberScoreTestSave",
  MEMBER_SCORE_TEST_ITEM_QUERY: "memberScoreTestItemQuery",
  MEMBER_SCORE_TEST_ITEM_SAVE: "memberScoreTestItemSave",
  MEMBER_LESSON_POSITION_QUERY: "memberLessonPositionQuery",
  LATEST_GL_MEMBERS_QUERY: "latestGlMembersQuery",
  LESSON_IMG_SAVE: "lessonImgSave",
  MEMBER_LESSON_COACH_COMMENT_OPT: "memberLessonCoachCommentOpt",
  PC_LESSON_TIME_CHANGE: "pcLessonTimeChange",
  CARD_PAY_ORDER_CREATE: "cardPayOrderCreate",
  CARD_PAY_FINISH: "cardPayFinish",
  MEMBER_LESSON_CHECKIN_CANCEL: "memberLessonCheckinCancel",
  CUST_PC_LESSON_CHECKIN: "custPcLessonCheckin",
  CUST_PC_LESSON_SAVE: "custPcLessonSave",
  CUST_FOLLOW_RESULT_TYPE_QUERY: "custFollowResultTypeQuery",
  LOGIN_CALL_FOR_IMSTLIFE: "mach/loginCallForImstlife",
  AI_MACH_LOCKER_QUERY: "aiMachLockerQuery",
  AI_MACH_LOCKER_HIRE_RETURN: "aiMachLockerHireReturn",
  LOCKER_OPEN_FOR_IMSTLIFE: "mach/lockerOpenForImstlife",
  TENANT_MOBILE_LOGIN_BG_QUERY: "tenantMobileLoginBgQuery",
  MEMBER_PRIVATE_LESSON_CHECKIN: "memberPrivateLessonCheckin",
  MALL_PRODUCT_CATE_QUERY: "mallProductCateQuery",
  MALL_PRODUCT_QUERY: "mallProductQuery",
  MALL_CART_PRODUCT_ADD: "mallCartProductAdd",
  MALL_CART_PRODUCT_QUERY: "mallCartProductQuery",
  MALL_CART_PRODUCT_DELETE: "mallCartProductDelete",
  MALL_ORDER_QUERY: "mallOrderQuery",
  MALL_ORDER_DELETE: "mallOrderDelete",
  MALL_ORDER_PAY_FINISH: "mallOrderPayFinish",
  MALL_ORDER_PRODUCT_RECEIPT_CONFIRM: "mallOrderProductReceiptConfirm",
  WX_MCHID_QUERY: "wxMchIdQuery",
  MALL_ORDER_CREATE: "mallOrderCreate",
  SCORE_TEST_ITEM_QUERY: "scoreTestItemQuery",
  MEMBER_SCORE_TEST_RANK: "memberScoreTestRank",
  MEMBER_POINTS_RANK_FOR_MEMBER: "memberPointsRankForMember",
  SALES_CUST_STAT: "salesCustStat",
  SALES_MEMBER_STAT: "salesMemberStat",
  MEMBER_PS_COACH_QUERY: "memberPsCoachQuery",
  MEMBER_SCORE_TEST_QUERY: "memberScoreTestQuery",
  PC_ACTION_QUERY: "pcActionQuery",
  PC_ACTION_SAVE: "pcActionSave",
  PL_TRAIN_ITEM_SAVE: "plTrainItemSave",
  PL_TRAIN_ITEM_QUERY: "plTrainItemQuery",
  SHOP_DEPARTMENT_QUERY: "shopDepartmentQuery",
  VENUE_QUERY: "venueQuery",
  VENUE_SAVE: "venueSave",
  VENUE_AREA_QUERY: "venueAreaQuery",
  VENUE_AREA_ITEM_QUERY: "venueAreaItemQuery",
  VENUE_AREA_BOOKING_QUERY: "venueAreaBookingQuery",
  VENUE_BOOKING_BY_MEMBER: "venueBookingByMember",
  VENUE_AREA_BOOKING_DELETE: "venueAreaBookingDelete",
  COACH_IMG_QUERY: "coachImgQuery",
  COACH_IMG_SAVE: "coachImgSave",
  WX_APP_ID_QUERY_FOR_UNBIND_USER: "wxAppIdQueryForUnbindUser",
  AUTHORIZER_WX_USER_BIND: "authorizerWxUserBind",
  USER_WX_ID_QUERY: "userWxIdQuery",
  DD_PARK_MSG_QUERY: "ddParkMsgQuery",
  MEMBER_CARD_CONSUME_STAT: "memberCardConsumeStat",
  BARGAIN_PRODUCT_QUERY: "bargainProductQuery",
  REVIEW_SCORE_TMPT_QUERY: "reviewScoreTmptQuery",
  VENUE_AREA_BOOKING_CANCEL_LOG_QUERY: "venueAreaBookingCancelLogQuery",
  VENUE_AREA_CHECKIN_QUERY: "venueAreaCheckinQuery",
  SALARY_TEMPLATE_QUERY: "salaryTemplateQuery",
  MEMBER_ORG_QUERY: "memberOrgQuery",
  MEMBER_ORG_SAVE: "memberOrgSave",
  MEMBER_COUNTS_QUERY: "memberCountsQuery",
  STAFF_LOGIN_AUTHCODE_CHECK: "staffLoginAuthcodeCheck",
  MEMBER_HEART_RATE_QUERY: "mach/memberHeartRateQuery",
  MEMBER_HEART_RATE_STAT: "mach/memberHeartRateStat",
  HEART_RATE_SYSTEM_UNBIND: "mach/heartRateSystemUnbind",
  MEMBER_HEART_RATE_DEL: "memberHeartRateDel",
  MACH_RUN_LOG_FOR_SHARE_QUERY: "mach/machRunLogForShareQuery",
  MACH_RUN_LOG_STAT: "mach/machRunLogStat",
  MACH_RUN_LOG_RANK_QUERY: "mach/machRunLogRankQuery",
  MACH_RUN_LOG_QUERY: "mach/machRunLogQuery",
  AI_MACH_BATHROOM_QUERY: "mach/aiMachBathroomQuery",
  AI_MACH_BATHROOM_OPEN: "mach/aiMachBathroomOpen",
  AI_MACH_BATHROOM_CHECKOUT: "mach/aiMachBathroomCheckout",
  AI_MACH_QUERY: "aiMachQuery",
  HEART_RATE_SYSTEM_BIND_FOR_CUST: "mach/heartRateSystemBindForCust",
  MEMBER_HEART_RATE_CREATE: "mach/memberHeartRateCreate",
  PC_LESSON_BOOKING_COUNT_QUERY: "pcLessonBookingCountQuery",
  MEMBER_PC_LESSON_IMG_SAVE: "memberPcLessonImgSave",
  MEMBER_CARD_VACATION_UPDATE: "memberCardVacationUpdate",
  SYS_POSTER_QUERY: "sysPosterQuery",
  SYS_POSTER_CREATE: "sysPosterCreate",
  MEMBER_CARD_ADV_QUERY: "memberCardAdvQuery",
  MEMBER_ACTION_QUERY: "memberActionQuery",
  SECKILL_PRODUCT_QUERY: "seckillProductQuery",
  AI_LOCKER_USER_PWD_SAVE: "aiLockerUserPwdSave",
  AI_LOCKER_USER_PWD_QUERY: "aiLockerUserPwdQuery",
  MEMBER_HEART_RATE_FOR_SHARE_QUERY: "mach/memberHeartRateForShareQuery",
  CUST_HEART_RATE_QUERY: "mach/custHeartRateQuery",
  MEMBER_ADVISOR_REPLACE: "memberAdvisorReplace",
  MEMBER_CARD_NOS_UPDATE: "memberCardNosUpdate",
  MEMBER_CARD_BASE_INFO_UPDATE: "memberCardBaseInfoUpdate",
  MCP_TIME_CHANGE_LOG_QUERY: "mcpTimeChangeLogQuery",
  MEMBER_TRANSFER_CARD_LOG_QUERY: "memberTransferCardLogQuery",
  MPL_EXTRA_PAYMENT_QUERY: "mplExtraPaymentQuery",
  GL_BOOKING_BLACKLIST_QUERY: "glBookingBlacklistQuery",
  GL_BOOKING_BLACKLIST_SAVE: "glBookingBlacklistSave",
  CUST_FOLLOW_TASK_QUERY: "custFollowTaskQuery",
  CUST_FOLLOW_TASK_SAVE: "custFollowTaskSave",
  CUST_COUNT_OF_FOLLOW_TASK_QUERY: "custCountOfFollowTaskQuery",
  CUST_BATCH_UPDATE: "custBatchUpdate",
  CUST_ASSIGN_RUN: "custAssignRun",
  CUST_PC_LESSON_QUERY: "custPcLessonQuery",
  MEMBER_CARD_DELETE: "memberCardDelete",
  MEMBER_CARD_PAYMENT_DELETE: "memberCardPaymentDelete",
  MEMBER_CARD_PYAMENT_TIME_UPDATE: "memberCardPyamentTimeUpdate",
  MEMBER_VALUE_CARD_QUERY: "memberValueCardQuery",
  MEMBER_CARD_STATUS_LOG_QUERY: "memberCardStatusLogQuery",
  MEMBER_CARD_CHANGE_LOG_QUERY: "memberCardChangeLogQuery",
  MEMBER_PHONE_CHANGE_LOG_QUERY: "memberPhoneChangeLogQuery",
  MEMBER_CARD_NO_CHANGE_LOG_QUERY: "memberCardNoChangeLogQuery",
  MEMBER_CARD_DEL_LOG_QUERY: "memberCardDelLogQuery",
  MEMBER_CARD_STATUS_UPDATE: "memberCardStatusUpdate",
  MEMBER_CARD_PAYMENT_DEL_LOG_QUERY: "memberCardPaymentDelLogQuery",
  MEMBER_CARD_VACATION_CANCEL: "memberCardVacationCancel",
  PC_LESSON_WX_REMINDER_TO_MEMBER_SEND: "pcLessonWxReminderToMemberSend",
  MEMBER_CARD_QUERY_FOR_UPDATE: "memberCardQueryForUpdate",
  MEMBER_CARD_PAYMENT_UPDATE: "memberCardPaymentUpdate",
  MEMBER_CARD_TRANSFER: "memberCardTransfer",
  MEMBER_ANNUAL_REPORT_STAT: "memberAnnualReportStat",
  MSITE_SHOP_QUERY: "msite/shopQuery",
  PS_TRAIN_PLAN_QUERY: "psTrainPlanQuery",
  PS_END_DATE_EXTEND: "psEndDateExtend",
  PS_TRAIN_PLAN_SAVE: "psTrainPlanSave",
  PS_TRAIN_ITEM_QUERY: "psTrainItemQuery",
  PS_TRAIN_ITEM_SAVE: "psTrainItemSave",
  PC_TRAIN_TEMPLATE_QUERY: "pcTrainTemplateQuery",
  PC_TRAIN_ITEM_QUERY: "pcTrainItemQuery",
  MEMBER_CARD_BATCH_OPT_LOG_QUERY: "memberCardBatchOptLogQuery",
  PRIVATE_COURSE_SCHEDULE_STATUS_UPDATE: "privateCourseScheduleStatusUpdate",
  LESSON_CREATE: "lessonCreate",
  GL_TABLE_EXPORT: "glTableExport",
  GL_TABLE_EXPORT_CONFQUERY: "glTableExportConfQuery",
  MEMBER_HEART_RATE_RANK_QUERY: "mach/memberHeartRateRankQuery",
  PC_LESSON_BOOKING_FOR_MORE_MEMBERS: "pcLessonBookingForMoreMembers",
  MEMBER_PL_STAT: "memberPlStat",
  COACH_LESSON_COST_STAT: "coachLessonCostStat",
  GROUP_LESSON_STAT: "groupLessonStat",
  PRIVATE_LESSON_STAT: "privateLessonStat",
  SALES_TARGET_NOTICE_CONF_SAVE: "salesTargetNoticeConfSave",
  SALES_TARGET_NOTICE_CONF_QUERY: "salesTargetNoticeConfQuery",
  SALES_TARGET_SAVE: "salesTargetSave",
  SALES_TARGET_QUERY: "salesTargetQuery",
  STAFF_SALES_TARGET_QUERY: "staffSalesTargetQuery",
  SALES_TARGET_STAT: "salesTargetStat",
  STAFF_SALES_TARGET_STAT: "staffSalesTargetStat",
  BOOKING_GL_IMG_UPDATE: "bookingGlImgUpdate",
  SHOP_ARG_UPDATE: "shopArgUpdate",
  MACH_RUN_BIND: "mach/machRunBind",
  SHARE_ITEM_REWARD_QUERY: "shareItemRewardQuery",
  SHARE_ITEM_RECEIVER_NEXT_QUERY: "shareItemReceiverNextQuery",
  STAFF_FAV_MENU_SAVE: "staffFavMenuSave",
  VENUE_REPORT_STAT: "venueReportStat",
  VENUE_REPORT_CONTENT_STAT: "venueReportContentStat",
  MEMBER_CONTRACT_QUERY: "memberContractQuery",
  MEMBER_CONTRACT_CREATE: "memberContractCreate",
  CUST_GC_LESSON_BOOKING: "custGcLessonBooking",
  CUST_GC_LESSON_CHECKIN: "custGcLessonCheckin",
  PC_BODY_PART_QUERY: "pcBodyPartQuery",
  MACH_MEMBER_PHOTO_BIND: "mach/memberPhotoBind",
  PC_LESSON_VICE_COACH_SET: "pcLessonViceCoachSet",
  PL_CARD_VENUE_CONF_QUERY: "plCardVenueConfQuery",
  VENUE_AREA_QUERY_BY_PL_BOOKING: "venueAreaQueryByPlBooking",
  SELF_SERVICE_RENEWAL_SAVE: "selfServiceRenewalSave",
  SELF_SERVICE_RENEWAL_QUERY: "selfServiceRenewalQuery",
  SELF_SERVICE_RENEWAL_CHANGE: "selfServiceRenewalChange",
  SELF_SERVICE_PAYMENT_QUERY: "selfServicePaymentQuery",
  SELF_SERVICE_RULE_QUERY: "msite/selfServiceRuleQuery",
  SELF_SERVICE_ORDER_CREATE: "msite/selfServiceOrderCreate",
  SELF_SERVICE_ORDER_FINISH: "msite/selfServiceOrderFinish",
  MEMBER_IMG_LABEL_QUERY: "memberImgLabelQuery",
  MEMBER_IMG_LABEL_SAVE: "memberImgLabelSave",
  MEMBER_IMG_LABEL_REL_SAVE: "memberImgLabelRelSave",
  MC_PRINT_CONSUME_QUERY: "spp/mcPrintConsumeQuery",
  VENUE_AREA_BOOKING_CHECKOUT: "venueAreaBookingCheckout",
  QRCODE_MACH_RUN_LOG_MSG_QUERY: "qrcodeMachRunLogMsgQuery",
  TENANT_CS_STAFF_QUERY: "tenantCsStaffQuery",
  MEMBER_ENTRY_CHECKOUT: "memberEntryCheckout",
  PC_LESSON_COUNT_STAT: "pcLessonCountStat",
  MCP_WORD_CONTRACT_CREATE: "mcpWordContractCreate",
  MCP_WORD_EMPTY_CONTRACT_VIEW: "mcpWordEmptyContractView",
  GC_COACH_STAT: "gcCoachStat",
  BODY_TEST_QUERY: "mach/bodyTestQuery",
  MT_APP_CARD_QUERY: "mtAppCardQuery",
  MT_APP_CARD_UPDATE: "mtAppCardUpdate",
  MT_APP_CARD_SYNCHRONISE: "mtAppCardSynchronise",
  MT_APP_CONF_QUERY: "mtAppConfQuery",
  MT_APP_ORDER_CREATE: "mtAppOrderCreate",
  MT_APP_ORDER_CANCEL: "mtAppOrderCancel",
  MT_APP_ORDER_QUERY: "mtAppOrderQuery",
  MT_APP_ORDER_CHECK: "mtAppOrderCheck",
  POI_APP_CARD_QUERY: "poiAppCardQuery",
  POI_APP_CARD_UPDATE: "poiAppCardUpdate",
  POI_APP_CARD_SYNCHRONISE: "poiAppCardSynchronise",
  POI_APP_CONF_QUERY: "poiAppConfQuery",
  POI_APP_ORDER_CHECK: "poiAppOrderCheck",
  POI_APP_ORDER_CREATE: "poiAppOrderCreate",
  POI_APP_ORDER_QUERY: "poiAppOrderQuery",
  POI_APP_ORDER_CANCEL: "poiAppOrderCancel",
  CARD_POS_ORDER_SAVE: "cardPosOrderSave",
  CARD_POS_ORDER_FINISH: "cardPosOrderFinish",
  CARD_POS_ORDER_REFUND_FINISH: "cardPosOrderRefundFinish",
  CARD_POS_ORDER_REFUND_CREATE: "cardPosOrderRefundCreate",
  CARD_POS_ORDER_REFUND_QUERY: "cardPosOrderRefundQuery",
  CARD_POS_ORDER_QUERY: "cardPosOrderQuery",
  MALL_POS_ORDER_SAVE: "mallPosOrderSave",
  MALL_POS_ORDER_FINISH: "mallPosOrderFinish",
  MALL_POS_ORDER_REFUND_FINISH: "mallPosOrderRefundFinish",
  MALL_POS_ORDER_REFUND_CREATE: "mallPosOrderRefundCreate",
  MALL_POS_ORDER_REFUND_QUERY: "mallPosOrderRefundQuery",
  MALL_POS_ORDER_QUERY: "mallPosOrderQuery",
  LOGIN_SOCKET_MSG_SEND: "loginSocketMsgSend",
  WX_API_CONF_GET: "wxApiConfGet",
  ENTRY_TICKET_PRODUCT_QUERY: "entryTicketProductQuery",
  INSTALMENT_CONF_QUERY: "instalmentConfQuery",
  INSTALMENT_CONF_SAVE: "instalmentConfSave",
  INSTALMENT_ORDER_CREATE: "instalmentOrderCreate",
  INSTALMENT_ORDER_DETAIL_SYNCHRONISE: "instalmentOrderDetailSynchronise",
  INSTALMENT_ORDER_UNBIND: "instalmentOrderUnbind",
  INSTALMENT_ORDER_QUERY: "instalmentOrderQuery",
  INSTALMENT_ORDER_DETAIL_QUERY: "instalmentOrderDetailQuery",
  INSTALMENT_ORDER_DELETE: "instalmentOrderDelete",
  INSTALMENT_ORDER_SALES_UPDATE: "instalmentOrderSalesUpdate",
  INSTALMENT_PRODUCT_SAVE: "instalmentProductSave",
  INSTALMENT_PRODUCT_QUERY: "instalmentProductQuery",
  MEMBER_INSTALMENT_ORDER_CREATE: "memberInstalmentOrderCreate",
  STAFF_LIST_SALARY_CALC: "staffListSalaryCalc",
  CARD_DETAIL_STAT: "cardDetailStat",
  CARD_AMOUNT_SUM: "cardAmountSum",
  SMS_SIGN_QUERY: "smsSignQuery",
  SMS_SIGN_SAVE: "smsSignSave",
  SMS_TASK_QUERY: "smsTaskQuery",
  SMS_TASK_SAVE: "smsTaskSave",
  SHOP_REVENUE_STAT: "shopRevenueStat",
  INSTALMENT_ORDER_STAT: "instalmentOrderStat",
  IMG_VERIFY_CODE_GET: "imgVerifyCodeGet",
  IMG_CINESE_VERIFY_CODE_GET: "imgCineseVerifyCodeGet",

  AI_MACH_CARD_SAVE: "aiMachCardSave",
  AI_MACH_CARD_QUERY: "aiMachCardQuery",
  AI_MACH_SAVE: "aiMachSave",
  AI_MACH_QUERY: "aiMachQuery",
  AI_MACH_FACE_BIND_DELETE: "aiMachFaceBindDelete",
  AI_MACH_BATHROOM_STATUS_UPATE: "mach/aiMachBathroomStatusUpdate",

  MEMBER_RANK_STAT: "memberRankStat"
};
/* harmony export (immutable) */ __webpack_exports__["a"] = SvName;


const Dict = {
  YesNo: { true: "是", false: "否" },
  WeekName: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  SimpleWeekName: ["日", "一", "二", "三", "四", "五", "六"],
  Sex: { true: "男", false: "女" },
  SexDesc: { true: "♂ 帅哥", false: "♀ 美女" },
  SexFlag: { true: "♂", false: "♀" },
  SexDescNormal: { true: "先生", false: "女士" },
  CustSrcDict: {
    "-1": "优惠券",
    "-2": "抽奖",
    "-3": "拼团",
    "-4": "分销",
    "-5": "砍价",
    "-6": "活动报名",
    "-7": "秒杀",
    "-8": "在线购课客户",
    "-9": "体测仪",
    "-10": "美团客户",
    "-11": "抖音客户",
    "-12": "散客入场券",
    "-13": "阶段付"
  },
  ShopType: {
    GYM: 1,
    FENCING: 2
  },
  ShopTypeOptions: {
    "健身房/俱乐部": 1,
    健身工作室: 9,
    瑜伽馆: 3,
    游泳馆: 5,
    舞蹈馆: 2,
    击剑馆: 4,
    羽毛球馆: 6,
    乒乓球馆: 7,
    高尔夫球馆: 10,
    网球馆: 8,
    跆拳道馆: 11,
    武术馆: 12,
    儿童滑步车: 13,
    蹦床馆: 14,
    拳击馆: 15,
    搏击馆: 16,
    泰拳馆: 17,
    轮滑馆: 18,
    少儿体适能馆: 19,
    射箭馆: 20,
    综合运动馆: 99,
    其他: 100
  },
  AiMachType: {
    1: "入场签到",
    2: "出场签出",
    3: "入场+出场",
    4: "团课签到",
    5: "私教课签到",
    6: "团课+私教课签到",
    9: "租柜管理",
    10: "心率系统",
    11: "淋浴室门禁",
    12: "入场签到+私教课签到",
    13: "有氧设备",
    14: "入场签到+团课签到",
    15: "团课签出",
    16: "场地预约签到"
  },
  UserStatus: { NOT_FOUND: -1, OK: 0, NO_PASSWD: 1, FROZEN: 99, INVALID: 100 },
  CardTypeDict: {
    /** 期限卡 */
    TERM_CARD: { value: 1, name: "期限卡" },
    /** 次卡 */
    TIMES_CARD: { value: 2, name: "次数卡" },
    /** 储值卡 */
    VALUE_CARD: { value: 3, name: "储值卡" }
  },
  CardType: { 1: "期限卡", 2: "次数卡", 3: "储值卡", 4: "计时卡" },
  CardClass: { 0: "会籍卡", 1: "团课卡", 2: "私教卡" },
  CardTimeTypes: { 1: "分钟", 2: "小时" },
  CardTypeSuffix: { 2: "次数", 3: "金额", 4: "时长" },
  CardPaymentChannel: {
    1: "现金",
    2: "刷卡",
    3: "支付宝",
    4: "微信",
    5: "其他",
    8: "POS机"
  },
  CardPaymentChannelForView: {
    0: "储值卡",
    1: "现金",
    2: "刷卡",
    3: "支付宝",
    4: "微信",
    7: "兑换码",
    8: "POS机",
    5: "其他",
    6: "积分",
    99: "赠送"
  },
  CardStatus: { 0: "正常", 1: "停用" },
  SysRole: {
    SHOP_MANAGER: 1,
    FRONT_DESK: 2,
    COACH: 3,
    SALES: 4,
    SALES_MANAGER: 5,
    ADVISOR: 6
  },
  RoleFuncGroup: {
    SYS: ["SHOP_EDIT", "SHOP_GROUND_EDIT", "SHOP_NOTICE_EDIT", "CARD_EDIT", "CUST_SOURCE", "SMS_LOG_VIEW", "POINT_EDIT", "ENTRY_CHECKIN_CONF", "BIZ_MODULE_CONF"],
    MEMBER: ["MEMBER_CREATE", "MEMBER_EDIT", "MEMBER_ADV_EDIT", "MEMBER_CARD_PAYMENT", "MEMBER_CARD_TRANSFER", "MEMBER_CARD_PAUSE", "MEMBER_CARD_CHANGE", "MEMBER_CARD_VACATION", "MEMBER_PHONE_ALT", "MEMBER_QUERY_ALL", "MEMBER_AGENT", "TEST_ITEM_CONF", "MEMBER_NOTICE_CONF", "VIEW_MEMBER_ENTRY_CHECKIN", "QUERY_MEMBER_BY_FLAG_IN_MINE", "MEMBER_DRAFT_CREATE", "MEMBER_DRAFT_AUDIT", "MEMBER_CARD_DRAFT_CREATE", "MEMBER_CARD_DRAFT_CHECK", "SALES_VIEW_MEMBERS_DISABLE", "MC_ALT_VACATION_IN_MOBILE", "SET_MEMBER_ADVISOR", "SET_MEMBER_COACH", "SET_MEMBER_SALES", "MEMBER_CARD_VACATION_IN_MOBILE", "FIRST_UPLOAD_MEMBER_HEAD", "DISABLE_MEMBER_QUERY", "EDIT_MPL_TIME", "SHOW_MEMBER_CONTRACT", "MC_VACATION_CONF", "HIDE_MEMBER_PHONE"],
    CUST: ["CUST_CREATE", "CUST_EDIT", "VIEW_ALL_CUST_FOLLOW", "CUST_QUERY_ALL", "CUST_EXPORT", "CUST_FOLLOW_DEL"],
    COURSE: ["COURSE_EDIT", "PL_EDIT_DISABLE", "PC_BOOKING_DISABLE", "PL_CANCEL_DISABLE", "CANCEL_OUTDATE_PL", "COACH_ADD_CHECKIN_DISABLE", "BOOKING_CHECKIN_CONF", "VIEW_SHOP_PL", "CHECKIN_PAST_PL", "PL_CHECKIN", "PL_QRCODE_VIEW", "COACH_CHECKIN_ML_DISABLE", "PS_COACH_LESS_FEE", "CHANGE_OUTDATE_PL_TIME", "EDIT_PC_ACTION_IN_MOBILE", "SET_PL_VICE_COACH", "GL_BOOKING", "CHECKED_GL_CANCEL", "CANCEL_PL_FOR_SUBORDINATE"],
    STAFF: ["STAFF_EDIT", "COACH_TYPE_EDIT", "SHOP_DEPT_EDIT", "STAFF_LIST_SALARY", "SALES_TARGET_CONF", "COACH_WORKTIME_EDIT_DISABLE", "COACH_WORKTIME_EDIT", "STAFF_QUIT"],
    ACC: ["CHARGE_EDIT", "CHARGE_ITEM_CONF", "PRD_PURCHASE_PRICE", "EDIT_PRD_PRICE", "DEPOSIT_EDIT", "DEPOSIT_QUERY"],
    STAT: ["STAT_MEMBER", "STAT_PRIVATE_LESSON", "STAT_GROUP_LESSON", "STAT_STAFF", "STAT_CARD", "STAT_INCOME_EXPENSES", "STAT_REVENUE", "VIEW_SHOP_STAT_IN_PHONE", "MORE_REPORTS"],
    MALL: ["MALL_PRODUCT_VIEW", "MALL_PRODUCT_EDIT", "MALL_PRODUCT_CATE_EDIT", "MALL_PRODUCT_ORDER_VIEW", "MALL_PRODUCT_ORDER_CANCEL", "MALL_SHOPPING_CART_VIEW", "MALL_PRODUCT_LOG_VIEW"],
    MARKET: ["MARKET_CONF"],
    VENUE: ["VENUE_CONF", "CANCEL_OUTDATE_VENUE_BOOKING", "VENUE_BOOKING_PAUSE", "VENUE_BOOKING_RESTORE", "BOOKING_OUTDATE_VENUING"],
    MACH: ["IC_MACH_CONF", "AI_MACH_CONF", "AI_MACH_LOCKER_OPT", "HRS_RANK_VIEW", "HRS_RECORDS_UNBIND"],
    OTHER: ["SHOP_FEEDBACK", "LOCKER_EDIT", "LOCKER_QUERY", "LOCKER_HIRE_RETURN", "SMS_TASK_CONF", "TICKET_QUERY", "TICKET_EDIT", "TICKET_CHECKIN", "MT_CONSUME", "MT_REVERSE_CONSUME", "POI_CONSUME", "POI_REVERSE_CONSUME", "MT_PRODUCT_GET", "POI_PRODUCT_GET", "INSTALMENT_CREATE", "INSTALMENT_UNBIND", "INSTALMENT_QUERY", "INSTALMENT_PRODUCT_EDIT", "INSTALMENT_PRODUCT_QUERY"]
  },

  RoleFunc: {
    SHOP_EDIT: { value: 1, name: "门店信息编辑" },
    SHOP_GROUND_EDIT: { value: 2, name: "上课场地编辑" },
    SHOP_NOTICE_EDIT: { value: 3, name: "门店公告发布", hidden: true },
    CARD_EDIT: { value: 4, name: "会员卡种设置" },
    CUST_SOURCE: { value: 27, name: "客户来源设置" },
    MEMBER_NOTICE_CONF: { value: 5, name: "会员提醒设置" },
    SMS_LOG_VIEW: { value: 6, name: "短信记录查看" },
    POINT_EDIT: { value: 7, name: "积分设置", remark: "设置 》 会员积分" },
    PARAM_EDIT: { value: 8, name: "参数设置", hidden: true },
    SYS_PAYMENT: { value: 9, name: "软件费支付", hidden: true },
    STAFF_EDIT: { value: 10, name: "员工编辑" },
    COURSE_EDIT: {
      value: 11,
      name: "课程编辑",
      remark: "指团课和私教课的课程编辑、排课编辑；手机端私教默认可排自己的课，预约会员上课"
    },
    MEMBER_CREATE: {
      value: 12,
      name: "会员创建",
      remark: "包括创建会员信息、添加会员的会员卡、删除会员的会员卡、会员卡基础信息编辑、会员卡充值销售设置"
    },
    MEMBER_EDIT: {
      value: 13,
      name: "会员基础编辑",
      remark: "指非重要的会员信息的修改，例如，生日、会籍顾问、教练、相册等"
    },
    MEMBER_ADV_EDIT: {
      value: 33,
      name: "会员高级编辑",
      remark: "特指会员重要信息的修改，包括：姓名、照片"
    },
    MEMBER_QUERY_ALL: {
      value: 20,
      name: "查询所有会员",
      remark: "指能够查询所有会员的权限，若无此权限，只能查询自己名下（销售、教练、会籍顾问）的会员"
    },
    MEMBER_AGENT: {
      value: 14,
      name: "会员代签",
      remark: "指工作人员代会员入场签到、团课预约/签到、私教课预约，以及提供私教课签到二维码和密码输入框供会员签到"
    },
    CARD_PAYMENT_VIEW: { value: 16, name: "会员卡账单查看" },
    CHARGE_EDIT: {
      value: 17,
      name: "记账",
      remark: "包括商品售卖记账，其它手工记账"
    },
    CHARGE_ITEM_CONF: {
      value: 21,
      name: "资费项设置",
      remark: "包括商品及入库登记、商品分类设置、其它记账的费用项目的设置"
    },
    CUST_CREATE: { value: 18, name: "客户创建" },
    CUST_EDIT: {
      value: 19,
      name: "客户更新",
      remark: "更新客户负责人是自己的客户信息"
    },
    VIEW_ALL_CUST_FOLLOW: { value: 32, name: "查看所有客户跟进" },
    SHOP_FEEDBACK: {
      value: 26,
      name: "意见箱",
      remark: "员工手机端意见箱功能（更多 》 意见箱）"
    },
    LOCKER_EDIT: { value: 29, name: "租柜管理" },
    AI_MACH_CONF: { value: 35, name: "智能设备管理" },
    TEST_ITEM_CONF: { value: 30, name: "会员测试管理" },
    MALL_PRODUCT_VIEW: {
      value: 39,
      name: "商城商品查看",
      remark: "有此权限才可进入页面“商城 》商城商品”"
    },
    MALL_PRODUCT_EDIT: { value: 40, name: "商城商品编辑" },
    MALL_PRODUCT_CATE_EDIT: { value: 41, name: "商城商品类别编辑" },
    MALL_PRODUCT_ORDER_VIEW: {
      value: 42,
      name: "商城订单查看",
      remark: "有此权限才可进入页面“商城 》 商品订单”"
    },
    MALL_PRODUCT_ORDER_CANCEL: {
      value: 45,
      name: "商城商品退货",
      hidden: true
    },
    MALL_SHOPPING_CART_VIEW: {
      value: 43,
      name: "商城购物车查看",
      hidden: true
    },
    MALL_PRODUCT_LOG_VIEW: { value: 44, name: "商城日志查看" },
    MARKET_CONF: {
      value: 31,
      name: "营销设置",
      remark: "微官网所有营销工具的编辑"
    },
    STAT_MEMBER: { value: 15, name: "会员统计" },
    STAT_PRIVATE_LESSON: { value: 22, name: "私教课统计" },
    STAT_GROUP_LESSON: { value: 34, name: "团课统计" },
    STAT_STAFF: { value: 23, name: "员工业绩统计" },
    STAT_CARD: { value: 24, name: "会员卡统计" },
    STAT_INCOME_EXPENSES: { value: 25, name: "收支统计" },
    STAT_REVENUE: { value: 28, name: "营业额统计" },
    PL_EDIT_DISABLE: { value: 36, name: "禁止私教手机排课" },
    PC_BOOKING_DISABLE: { value: 37, name: "禁止私教手机约课" },
    ENTRY_CHECKIN_CONF: {
      value: 46,
      name: "入场签到设置",
      remark: "设置 》 入场签到 》 入场签到参数设置"
    },
    BOOKING_CHECKIN_CONF: { value: 47, name: "预约签到设置" },
    BIZ_MODULE_CONF: { value: 48, name: "业务模块设置" },
    MEMBER_PHONE_ALT: { value: 49, name: "会员手机号修改" },
    IC_MACH_CONF: { value: 50, name: "签到消费机管理" },
    VIEW_MEMBER_ENTRY_CHECKIN: {
      value: 51,
      name: "入场签到查看",
      remark: "电脑端和手机端查看会员入场签到，有【会员代签】或【查询所有会员】权限的员工可查看所有会员的入场签到记录，否则只能查看名下维护会员的入场签到记录。"
    },
    VIEW_SHOP_PL: { value: 52, name: "查看门店私教课表" },
    VIEW_SHOP_STAT_IN_PHONE: {
      value: 53,
      name: "手机端门店运营统计",
      remark: "指商家手机端首页上展示的门店运营概要统计"
    },
    COACH_ADD_CHECKIN_DISABLE: { value: 54, name: "禁止教练添加团课签到学员" },
    SMS_TASK_CONF: { value: 55, name: "短信群发" },
    QUERY_MEMBER_BY_FLAG_IN_MINE: {
      value: 56,
      name: "根据会员标识仅查名下会员",
      remark: "勾选后根据会员标识（姓名 | 手机号 | 卡号）查询时，仅能查询自己名下的会员；否则，将在全店范围内查询"
    },
    VENUE_CONF: {
      value: 57,
      name: "场地预约设置",
      remark: "指设置场馆、场地，以及各个场地区域的价格等"
    },
    COACH_TYPE_EDIT: { value: 58, name: "教练类型设置" },
    SHOP_DEPT_EDIT: { value: 59, name: "部门设置" },
    STAFF_LIST_SALARY: { value: 60, name: "工资列表" },
    PL_CANCEL_DISABLE: { value: 61, name: "禁止私教取消约课" },
    CHECKIN_PAST_PL: {
      value: 62,
      name: "补签私教课",
      remark: "指员工在拥有“会员代签”的权限时，能够在电脑端提供补签二维码和密码输入框"
    },
    CANCEL_OUTDATE_VENUE_BOOKING: {
      value: 63,
      name: "取消过期预订",
      remark: "指取消已过时间，或者不在取消时间范围内的场地预约。"
    },
    MORE_REPORTS: { value: 64, name: "更多统计" },
    SALES_VIEW_MEMBERS_DISABLE: {
      value: 65,
      name: "禁止销售查看名下会员",
      remark: "禁止会员的销售查询到会员信息"
    },
    COACH_CHECKIN_ML_DISABLE: {
      value: 66,
      name: "禁止教练手机端代会员签到团课"
    },
    MEMBER_CARD_CHANGE: {
      value: 67,
      name: "会员卡充值修改",
      remark: "指对会员的会员卡充值修改的权限（可修改期限、次数、金额或销售等）"
    },
    PL_QRCODE_VIEW: {
      value: 68,
      name: "手机端显示私教课二维码",
      remark: "当私教课签到方式选择【会员扫码或密码签到】或【会员扫码签到】时，可设置在手机端，允许私教展示本节课签到二维码让会员扫码签到"
    },
    MEMBER_DRAFT_CREATE: { value: 69, name: "会员审核单创建" },
    MEMBER_DRAFT_AUDIT: { value: 70, name: "会员审核单审核" },
    VENUE_BOOKING_PAUSE: { value: 71, name: "场地预约停用" },
    VENUE_BOOKING_RESTORE: { value: 72, name: "场地预约启用" },
    PL_CHECKIN: {
      value: 73,
      name: "私教课代签到",
      remark: "场馆工作人员代会员签到私教课"
    },
    MEMBER_CARD_VACATION: { value: 74, name: "会员卡请假" },
    TICKET_QUERY: { value: 75, name: "单次入场券查询" },
    TICKET_EDIT: { value: 76, name: "单次入场券编辑" },
    TICKET_CHECKIN: { value: 77, name: "单次入场券签到" },
    MC_ALT_VACATION_IN_MOBILE: {
      value: 78,
      name: "手机端会员卡销假",
      remark: "允许员工在手机端代会员的会员卡提前销假"
    },
    SET_MEMBER_ADVISOR: { value: 79, name: "批量分配会员会籍顾问" },
    SET_MEMBER_COACH: { value: 80, name: "批量分配会员教练" },
    SET_MEMBER_SALES: { value: 81, name: "批量分配会员销售" },
    MEMBER_CARD_VACATION_IN_MOBILE: { value: 82, name: "手机端代会员卡请假" },
    AI_MACH_LOCKER_OPT: {
      value: 83,
      name: "智能柜操作",
      remark: "包括：租用登记、还柜、清除占用状态、取消扣费"
    },
    CUST_EXPORT: { value: 84, name: "客户导出" },
    PRD_PURCHASE_PRICE: { value: 85, name: "进货价编辑与查看" },
    PS_COACH_LESS_FEE: { value: 86, name: "私教排课课时费编辑" },
    FIRST_UPLOAD_MEMBER_HEAD: { value: 87, name: "首次上传会员头像" },
    MEMBER_CARD_PAYMENT: { value: 88, name: "会员卡充值" },
    MEMBER_CARD_TRANSFER: { value: 89, name: "转卡" },
    MEMBER_CARD_PAUSE: { value: 90, name: "会员卡停用" },
    CANCEL_OUTDATE_PL: { value: 91, name: "取消开课后的私教课" },
    SALES_TARGET_CONF: { value: 92, name: "销售目标管理" },
    HRS_RANK_VIEW: { value: 93, name: "心率排行榜" },
    BOOKING_OUTDATE_VENUING: { value: 94, name: "场地补约" },
    COACH_WORKTIME_EDIT_DISABLE: {
      value: 95,
      name: "禁用私教作息编辑",
      remark: "私教默认可以编辑自己的作息；如果勾选此项，则不能编辑自己的作息"
    },
    COACH_WORKTIME_EDIT: {
      value: 96,
      name: "所有私教作息编辑",
      remark: "勾选后，可编辑所有私教人员的作息"
    },
    DISABLE_MEMBER_QUERY: {
      value: 97,
      name: "禁用会员查询",
      remark: "禁止使用电脑端和手机端的会员查询功能"
    },
    LOCKER_QUERY: { value: 98, name: "租柜记录查看" },
    EDIT_MPL_TIME: {
      value: 99,
      name: "修改会员卡充值时间",
      remark: "会员卡充值时或之后修改充值时间"
    },
    MEMBER_CARD_DRAFT_CREATE: { value: 100, name: "会员卡审核单创建" },
    MEMBER_CARD_DRAFT_CHECK: { value: 101, name: "会员卡审核单审核" },
    CHANGE_OUTDATE_PL_TIME: {
      value: 102,
      name: "修改过期私教课时间",
      remark: "是否允许修改已过上课时间的私教课日期与时间"
    },
    CUST_QUERY_ALL: { value: 103, name: "查询所有客户" },
    SHOW_MEMBER_CONTRACT: {
      value: 104,
      name: "手机端签订会员合同",
      remark: "员工手机端显示会员合同，并可签订"
    },
    EDIT_PC_ACTION_IN_MOBILE: { value: 105, name: "手机端编辑训练动作" },
    SET_PL_VICE_COACH: { value: 106, name: "私教课代课教练设置" },
    EDIT_PRD_PRICE: {
      value: 107,
      name: "记账商品单价编辑",
      remark: "商品售卖时，可直接编辑商品售卖单价"
    },
    GL_BOOKING: {
      value: 108,
      name: "团课代预约",
      remark: "可代会员预约团课（电脑端和手机端）"
    },
    CUST_FOLLOW_DEL: { value: 109, name: "客户跟进删除" },
    CHECKED_GL_CANCEL: { value: 110, name: "取消已签到的团课" },
    MC_VACATION_CONF: { value: 111, name: "会员卡请假限制设置" },
    MEMBER_FOLLOW_DEL: {
      value: 112,
      name: "会员跟进删除",
      remark: "员工可删除自己创建的跟进记录"
    },
    LOCKER_HIRE_RETURN: { value: 113, name: "租柜归还" },
    HIDE_MEMBER_PHONE: {
      value: 114,
      name: "禁止查看会员手机号",
      remark: "系统中不显示任何会员的手机号"
    },
    HRS_RECORDS_UNBIND: {
      value: 115,
      name: "心率数据解绑",
      remark: "查看心率记录和解绑心率绑定"
    },
    CANCEL_PL_FOR_SUBORDINATE: {
      value: 116,
      name: "取消下属私教课",
      remark: "可取消下属人员的私教约课"
    },
    STAFF_QUIT: { value: 117, name: "员工离职" },
    MT_CONSUME: { value: 118, name: "美团核销" },
    MT_REVERSE_CONSUME: { value: 119, name: "美团核销撤销" },
    POI_CONSUME: { value: 120, name: "抖音核销" },
    POI_REVERSE_CONSUME: { value: 121, name: "抖音核销撤销" },
    MT_PRODUCT_GET: { value: 122, name: "美团商品同步" },
    POI_PRODUCT_GET: { value: 123, name: "抖音商品同步" },
    DEPOSIT_EDIT: { value: 124, name: "订金编辑" },
    DEPOSIT_QUERY: { value: 125, name: "订金查询" },
    INSTALMENT_CREATE: { value: 126, name: "阶段付订单创建" },
    INSTALMENT_UNBIND: { value: 127, name: "阶段付订单解约" },
    INSTALMENT_QUERY: { value: 128, name: "阶段付订单查询" },
    INSTALMENT_PRODUCT_EDIT: { value: 129, name: "阶段付商品编辑" },
    INSTALMENT_PRODUCT_QUERY: { value: 130, name: "阶段付商品查询" },

    // pos
    // POS_PAY: { value: 124, name: "POS机支付" },
    // POS_PAY_REFUND: { value: 125, name: "POS机退款" },
    // pos
    POS_PAY: { value: 200, name: "POS机支付" },
    POS_PAY_REFUND: { value: 201, name: "POS机退款" }
  },
  StaffStatus: { 0: "正常", 9: "离职", 99: "删除" },
  LessonStatus: { 0: "新建", 1: "已预约", 9: "已结束" },
  PcLessonStatus: { 0: "会员未签到", 1: "会员已签到", 9: "已结束" },
  FencingType: {
    CHILD_FOIL: { value: 1, name: "儿童花剑" },
    CHILD_EPEE: { value: 2, name: "儿童重剑" },
    CHILD_SABER: { value: 3, name: "儿童佩剑" },
    ADULT_FOIL: { value: 4, name: "成人花剑" },
    ADULT_EPEE: { value: 5, name: "成人重剑" },
    ADULT_SABER: { value: 6, name: "成人佩剑" }
  },
  FencingTypeName: ["", "儿童花剑", "儿童重剑", "儿童佩剑", "成人花剑", "成人重剑", "成人佩剑"],
  FencingLevel: {
    L1: { value: 1, name: "小小班" },
    L2: { value: 2, name: "基础班" },
    L3: { value: 3, name: "初级班" },
    L4: { value: 4, name: "中级班" },
    L5: { value: 5, name: "青少年班" },
    L6: { value: 6, name: "成人班" },
    L7: { value: 7, name: "专业班" }
  },
  FencingLevelName: ["", "小小班", "基础班", "初级班", "中级班", "青少年班", "成人班", "专业班"],
  BodyType: {
    T1: { value: 1, name: "隐形肥胖型" },
    T2: { value: 2, name: "脂肪过多型" },
    T3: { value: 3, name: "肥胖型" },
    T4: { value: 4, name: "肌肉不足型" },
    T5: { value: 5, name: "健康匀称型" },
    T6: { value: 6, name: "超重肌肉型" },
    T7: { value: 7, name: "消瘦型" },
    T8: { value: 8, name: "低脂肪型" },
    T9: { value: 9, name: "运动员型" }
  },
  MemberCardStatus: {
    0: "正常",
    1: "作废",
    2: "暂停"
  },
  PointsType: {
    0: "手工记录",
    1: "新入会员",
    2: "入场签到",
    3: "团课签到",
    4: "私教课签到",
    5: "课程评价",
    6: "会员卡充值",
    7: "商城消费"
  },
  MemberLessonStatus: { 1: "已预约", 2: "已签到", 3: "排队中" },
  ArApName: { 0: "应收款", 1: "应付款" },
  CardUnitName: { 1: "天", 2: "次", 3: "元", 4: "分钟" },
  CardPaymentType: {
    1: "新会员办卡",
    2: "会员卡续费",
    3: "老会员购卡",
    4: "分销奖励",
    5: "批量增加天数",
    6: "退卡"
  },
  DateStatType: { BY_DAY: 1, BY_WEEK: 2, BY_MONTH: 3 },
  CardTypeUnit: { 2: "次", 3: "元" },
  ScoreDict: [{
    typeName: "总体评分",
    values: ["差", "较差", "一般", "好", "很好"],
    items: [{ value: 5, desc: "很好" }, { value: 4, desc: "好" }, { value: 3, desc: "一般" }, { value: 2, desc: "较差" }, { value: 1, desc: "差" }]
  }, {
    typeName: "上课时间", // score1
    values: ["混乱", "不准", "一般", "按时", "完美"],
    items: [{ value: 5, desc: "完美" }, { value: 4, desc: "按时" }, { value: 3, desc: "一般" }, { value: 2, desc: "不准" }, { value: 1, desc: "混乱" }]
  }, {
    typeName: "上课内容", // score2
    values: ["差", "较差", "一般", "好", "完美"],
    items: [{ value: 5, desc: "完美" }, { value: 4, desc: "好" }, { value: 3, desc: "一般" }, { value: 2, desc: "较差" }, { value: 1, desc: "差" }]
  }, {
    typeName: "上课态度", // score3
    values: ["差", "较差", "一般", "好", "极好"],
    items: [{ value: 5, desc: "极好" }, { value: 4, desc: "好" }, { value: 3, desc: "一般" }, { value: 2, desc: "较差" }, { value: 1, desc: "差" }]
  }],
  OrgTypes: ["民营企业", "国企", "上市公司", "外企", "世界五百强", "政府机关", "服务业", "IT", "医疗卫生", "娱乐", "教育", "培训", "金融", "艺术"],
  JobTitles: ["基层", "中层", "高层", "老板", "自由职业", "其他"],
  Hobbies: ["运动", "美食", "电影", "阅读", "唱歌", "逛街", "聊天", "打牌", "上网", "家务", "旅游", "汽车", "钟表", "珠宝", "服饰", "艺术", "美容", "其他"],
  Shapes: ["瘦弱", "苗条", "健壮", "微胖", "肥胖"],
  FollowTypes: ["", "电话", "微信", "QQ", "短信", "面谈"],
  CustTypes: ["外场客户", "到店访客", "订金客户", "线上访客", "成交客户"],
  CustLevels: ["", "流失", "渺茫", "一般", "重要", "核心"],
  CouponTypes: ["", "代金券", "折扣券", "满减券"],
  GuestTypes: ["", "访客", "会员", "不限"],
  SmsTypes: ["", "生日提醒", "会员卡提醒", "课程提醒", "会员团课出勤提醒", "会员入场锻炼提醒", "会员私教课出勤提醒", "客户手机号验证", "会员预约私教课", "会员取消私教课", "私教预约私教课", "私教取消私教课", "会员预约团课", "会员取消团课", "拼团通知", "团课上课提醒", "团课取消提醒", "会员操作通知", "团课排队通知", "短信群发", "私教上课提醒", "团课代预约通知", "团课代签到通知", "登录验证码", "会员审核单", "微商城通知", "手机号验证", "活动通知", "统计报表消息", "场地计时消费通知", "会员卡审核单通知", "会员卡充值审核单通知", "场地预约通知", "会员卡次数提醒", "团课付费预约成功通知", "客户提交阶段付成功通知", "客户签约阶段付成功通知"],
  ShopArg: {
    COACH_LESSON_BGCOLOR: 2003,
    POINTS_TITLE_CONF: 2005,
    MEMBER_CLIENT_BG: 2012,
    MEMBER_BOOKING_PL_MINS: 2013,
    DISPLAY_MEMBER_GL_BOOKING_INFO: 2014,
    PL_CHECKIN_TYPE: 102,
    PL_CHECKIN_PRINT_ENABLE: 2026,
    PL_CHECKIN_LIMIT_TIME: 2027,
    PL_CHECKIN_QRCODE_MAX_TIME: 2032,
    PL_TIME_INTERVAL: 130,

    // pos
    POS_ENABLE: 2106
  },
  MallProductTypes: ["会员卡", "物品"],
  MallProductPriceTypes: ["积分", "金额", "积分+金额"],
  BodyParts: ["手臂", "胸部", "肩部", "背部", "腹部", "臀部", "腿部", "综合"],
  ActionWeightUnits: ["KG", "磅", "自重"],
  ActionCountUnits: ["次", "秒", "分钟", "小时"],
  LotteryProbs: ["", "低", "较低", "中等", "较高", "高"],
  OrderStatus: { 0: "未支付", 9: "已支付", 1: "已退款" },
  ChargeFroms: ["", "记账", "会员卡充值", "转卡费", "拼团费", "租柜费", "微商城订单", "优惠券费", "卡请假费", "补卡费", "砍价费", "活动收费", "秒杀费", "", "散客入场券收费"],
  MemberDraftStatus: ["草稿", "待审核", "审核通过"],
  StatItems: {
    10: "总营收",
    11: "会籍卡收入",
    12: "团课卡收入",
    13: "私教卡收入",
    14: "记账收入",
    15: "转卡费",
    16: "租柜费",
    17: "客户定金",
    20: "新增会员数",
    21: "总会员数",
    22: "总有效会员数",
    23: "私教会员数",
    24: "有效私教会员数",
    30: "入场签到数",
    31: "团课预约数和签到数",
    32: "私教课预约数和签到数"
  },
  staffDefineMenuList: [{ id: undefined, name: "--空--" }, { id: -1, name: "目录" },
  // {
  //   id: 101,
  //   name: "首页",
  //   icon: "iconshouyeicon",
  //   link: "staff-home",
  //   menu: "staff-home",
  // },
  // {
  //   id: 102,
  //   name: "更多",
  //   icon: "icongengduoicon",
  //   link: "staff-funcs",
  //   menu: "staff-funcs",
  // },
  {
    id: 1,
    name: "私教约课",
    icon: "iconsijiaopaike",
    link: "staff-pc-schedules",
    menu: "staff-ps"
  }, {
    id: 2,
    name: "私教课记录",
    menu: "mpl-record",
    icon: "iconsijiaokejilu",
    link: "staff-private-lessons"
  }, {
    id: 3,
    name: "团课排课",
    icon: "icontuankepaike",
    link: "staff-gc-schedules",
    requireStaffId: true,
    menu: "staff-gc-schedules"
  }, {
    id: 4,
    name: "团课记录",
    menu: "ml-record",
    icon: "icontuankejilu",
    link: "staff-group-lessons",
    requireStaffId: true
  }, {
    id: 5,
    name: "销售记录",
    icon: "iconxiaoshoujilu",
    link: "staff-sales",
    requireStaffId: true,
    menu: "staff-sales"
  }, {
    id: 6,
    name: "工资计算",
    icon: "icongongzijisuan",
    link: "staff-salary",
    requireStaffId: true,
    menu: "staff-salary"
  }, {
    id: 7,
    name: "私教作息",
    icon: "iconsijiaozuoxi",
    link: "coach-worktime",
    requireStaffId: true,
    menu: "coach-worktime"
  }, {
    id: 8,
    name: "门店团课排课",
    icon: "icontuankepaike",
    link: "group-course-schedules",
    menu: "group-course-schedules"
  }, {
    id: 9,
    name: "团课预约",
    icon: "icontuankeyuyue",
    link: "group-lesson-list",
    menu: "gl-booking"
  }, {
    id: 10,
    name: "团课周表",
    icon: "icontuankezhoubiao",
    link: "group-lesson-table",
    menu: "group-lesson-table"
  }, {
    id: 11,
    name: "门店私教排课",
    icon: "iconsijiaopaike",
    link: "private-course-schedules",
    menu: "private-course-schedules"
  }, {
    id: 12,
    name: "门店私教课表",
    icon: "iconsijiaokebiao",
    link: "shop-private-lesson-query",
    roleFunc: 52,
    menu: "shop-private-lesson-query"
  }, {
    id: 13,
    name: "会员",
    menu: "member-query",
    icon: "iconhuiyuan2",
    link: "member-query"
  }, {
    id: 14,
    name: "客户",
    menu: "cust",
    icon: "iconkehu1",
    link: "cust-query"
  }, {
    id: 15,
    name: "员工",
    icon: "iconyuangong1",
    link: "staff-list",
    menu: "staff-list"
  }, {
    id: 16,
    name: "入场签到",
    icon: "iconruchangqiandao",
    link: "shop-entry-checkins",
    menu: "shop-entry-checkins",
    roleFunc: 51
  }, {
    id: 17,
    name: "统计报表",
    icon: "icontongjibaobiao1",
    link: "stat-home",
    menu: "stat"
  }, {
    id: 18,
    name: "意见箱",
    icon: "iconyijianxiang1",
    link: "shop-feedback-list",
    menu: "shop-feedback-list",
    roleFunc: 26
  }, {
    id: 19,
    name: "测试排行榜",
    icon: "iconceshipaihangbang",
    link: "member-score-test-rank",
    menu: "member-score-test-rank"
  }, {
    id: 20,
    name: "微商城",
    icon: "iconweishangcheng",
    link: "mall/product-list",
    menu: "mall/product-list"
  }, {
    id: 21,
    name: "心率排行榜",
    icon: "iconceshipaihangbang",
    link: "member-heart-rate-rank",
    menu: "member-heart-rate-rank",
    roleFunc: 93
  }, {
    id: 22,
    name: "海报制作",
    icon: "iconhaibao",
    link: "market/event-poster",
    menu: "event-poster"
  }, {
    id: 23,
    name: "会员卡查询",
    icon: "iconhuiyuankasousuo",
    link: "member-card-query",
    menu: "member-card-query"
  }, {
    id: 24,
    name: "锻炼查询",
    icon: "iconduanlianchaxun",
    link: "member-action-query",
    menu: "member-action-query"
  }, {
    id: 25,
    name: "新建会员",
    icon: "iconxinjianhuiyuan",
    link: "member-create",
    menu: "member-create",
    roleFunc: 12
  }, {
    id: 26,
    name: "会员测试",
    icon: "iconhuiyuanceshi",
    link: "member-test-type",
    menu: "member-test-type",
    roleFunc: 30
  }, {
    id: 27,
    name: "新建审核单",
    icon: "iconweibiaoti-1",
    link: "member-draft-edit",
    roleFunc: 69
  }, {
    id: 28,
    name: "审核单查询",
    icon: "iconshenhedanchaxun",
    link: "member-draft-query",
    menu: "member-draft-query",
    roleFunc: 70
  }, {
    id: 29,
    name: "会员统计",
    icon: "iconhuiyuantongji1",
    link: "shop-stat-member",
    menu: "shop-stat-member",
    roleFunc: 70
  }, {
    id: 30,
    name: "员工业绩统计",
    icon: "iconyeji",
    link: "shop-stat-staff",
    menu: "shop-stat-staff",
    roleFunc: 70
  }, {
    id: 31,
    name: "课程统计",
    icon: "iconkechengtongji-",
    link: "shop-stat-course",
    menu: "shop-stat-course",
    roleFunc: 70
  }, {
    id: 32,
    name: "会员卡统计",
    icon: "iconhuiyuanqia",
    link: "shop-stat-card",
    menu: "shop-stat-card",
    roleFunc: 70
  }, {
    id: 33,
    name: "收支统计",
    icon: "iconshouzhimingxi",
    link: "shop-stat-revenue",
    menu: "shop-stat-revenue",
    roleFunc: 70
  }, {
    id: 34,
    name: "营业额统计",
    icon: "iconliulanliang-",
    link: "shop-stat-report",
    menu: "shop-stat-report",
    roleFunc: 70
  }, {
    id: 110,
    name: "美团核销",
    icon: "iconmeituan-black",
    link: "mt-verify-coupon",
    menu: "mt-verify-coupon",
    roleFunc: 118
  }, {
    id: 111,
    name: "抖音核销",
    icon: "icondouyin-black",
    link: "dy-verify-coupon",
    menu: "dy-verify-coupon",
    roleFunc: 120
  }, {
    id: 112,
    name: "美团商品",
    icon: "iconmeituangoods-black",
    link: "mt-sync-bind",
    menu: "mt-sync-bind",
    roleFunc: 122
  }, {
    id: 113,
    name: "抖音商品",
    icon: "icondouyingoods-black",
    link: "dy-sync-bind",
    menu: "dy-sync-bind",
    roleFunc: 123
  }, {
    id: 114,
    name: "散客入场券",
    icon: "iconruchangquan-black",
    link: "market/fit-entry-ticket",
    menu: "market/fit-entry-ticket"
  }, {
    id: 115,
    name: "阶段付",
    icon: "iconphasedpayment-black",
    link: "instalment-list",
    menu: "instalment-list"
  }],

  SmsTaskReceiverTypes: ["全部会员", "有效会员", "无效会员", "未开卡会员", "所有私教会员", "有效私教会员", "无效私教会员", "未入场锻炼的会籍卡会员"]
};
/* harmony export (immutable) */ __webpack_exports__["c"] = Dict;


/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by zxl on 2017/4/20.
 */
/* harmony default export */ __webpack_exports__["a"] = ({
	NO_PAGE_PERMITION: '很抱歉，您无权访问该页面',
	NO_STAFF_PAGE_PERMIT: '很抱歉，您无权访问员工页面',
	NO_MEMBER_PAGE_PERMIT: '很抱歉，您无权访问会员页面',
	OPT_SUCCESS: '操作成功',
	REFRESH_DONE: '刷新完成',
	SYS_ERR: '数据获取出错了，请尽快联系我们。（错误#{0}）',
	SERVICE_ERR: '很抱歉，服务出错了，请尽快联系我们。',
	NETWORK_ERR: '网络错误：请检查您的网络。',
	SUBMIT_ERR: '提交有误，请修改后再试',
	AUTHCODE_SEND_ERR: '验证码发送错误，请稍后再试。',
	NO_INPUT: '您啥也没输入，巧妇难为无米之炊',
	NOT_EDITABLE: '不可编辑',
	PASSWD_CONFIRM_ERR: '两次输入的密码不一致',
	USER_NOT_FOUND: '此用户尚不存在，请联系您所属的商户。',
	USER_FROZEN: '此用户已被冻结，请联系门店管理员。',
	USER_INVALID: '无效的用户，请联系门店管理员。',
	USER_EXIST_PASSWD: '用户密码已存在，无需注册。',
	USER_PWD_SET_SUCCESS: '用户密码设置成功，请登录系统。',
	NO_STAFF_CLIENT: '很抱歉，此处不支持会员登录，请用手机端登录。',
	SHOP_EXPIRED: '您登录的门店【{0}】软件系统使用已到期，请联系门店负责人尽快续费哦。',
	NOT_TENANT_OWNER: '您不是商户负责人，不能进入该页面。',
	INPUT_EMPTY_ERR: '必填信息，不能为空',
	TENANT_REG_SUCCESS: '商户注册成功，请登录系统。',
	NO_TENANT: '信息失效，或不存在此商户，请重新登录',
	NOT_FOUND_RECORD: '记录不存在了',
	NONE_OPT: '好吧，您什么也没做，就当没发生',
	DEL_SHOP_NOTICE: '确定删除该门店【{0}】吗？ （包括门店下的会员、课程、员工等相关信息）删除后，我们将为您保存门店信息【15】天，之后将彻底删除。',
	STOP_CARD_CONFIRM: '您确定要停用该卡种吗？',
	RESTORE_CARD_CONFIRM: '您确定要恢复该卡钟吗？',
	PHONE_NO_ERR: '手机号格式有误',
	REQUIRE_ROLE: '请选择员工角色',
	NO_ROLE_FUNC: '亲，您没有该页面的功能权限',
	DEL_CONFIRM: '您确定要删除此【{0}】吗？ ',
	DROP_CONFIRM: '您确定要废弃此【{0}】吗？',
	NOT_FOUND_TIPS: '该记录不存在了，请返回后刷新重试。',
	DEL_COURSE_WARN: '您确定要删除该课程吗？ 删除该课程不会影响已排课表，只是今后不能再用该课程排课了。 ',
	DEL_COURSE_SCHEDULE_WARN: '您确定要删除【{0}】的排课【{1}】吗？ \r\n删除该排课不会影响已预约或结束的课时。 ',
	DEL_PC_SCHEDULE_WARN: '您确定要删除为会员【{0}】的私教排课吗？\r\n删除该排课不会影响已预约或结束的课时。',
	MEMBER_BIRTHDAY_ERR: '请正确填写会员生日',
	MEMBER_PHONE_NO_EXIST: '已存在该手机号码的会员',
	MEMBER_CREATE_CONFIRM: '会员创建后，手机号和购卡信息不能轻易更改，确认要创建该会员吗？ ',
	MEMBER_PHONE_NO_NOT_EXIST: '不存在该手机号的会员',
	DEL_POINTS_RULE_NOTICE: '您确定要删除规则【{0}】吗？',
	CUST_PHONE_EXIST: '已存在该手机号码的客户：{0}',
	CREATE_CONTINUE: '添加成功。是否继续添加？',
	CANCEL_LESSON: '您确定要取消本次课吗？',
	LOGIN_ROLE_SELECT: '您在门店有两种身份，点击【确定】用员工身份登录，【取消】用会员身份登录。',
	CHECKIN_POS_ERR: '请到门店内签到',
	COUPON: '优惠券',
	LOTTERY: '抽奖活动',
	NAV_TO_TOMORROW_TIPS: '抱歉，您选择的时间不支持查询。',
	CLICK_FREQUENTLY: '点击不要这么频繁吧',
	SAVE_SUCCESS: '保存成功',
	ERR_CARD_NO: '会员卡号【{0}】太长了，检查一下是否重复读卡了',
	CARD_NO_TOO_LONG: '输入的会员卡号太长了'
});

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(550)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(396),
  /* template */
  __webpack_require__(707),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-008f7ff2",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(560)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(400),
  /* template */
  __webpack_require__(719),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-f2b7f0a6",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(554)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(393),
  /* template */
  __webpack_require__(711),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-26fd52bb",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(561)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(394),
  /* template */
  __webpack_require__(720),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-ffe0d446",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = {"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = {"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = {"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(552)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(391),
  /* template */
  __webpack_require__(709),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-25c43d92",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 32:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by zxl on 2018/11/2.
 */
const Member = {
  isValidMemberCard: (c, today = null) => {
    if (!today) today = new Date();
    let isValid = true;
    if (c.beginDate && c.endDate) {
      if (Date.new(c.beginDate).compareDatePart(today) <= 0) {
        c.leftDays = Date.new(c.endDate).subtract(today);
      } else {
        c.leftDays = Date.new(c.endDate).subtract(Date.new(c.beginDate));
      }
    }

    if (c.status !== 0) {
      isValid = false;
    } else {
      if (c.leftDays < 0) isValid = false;
      if (c.cardType === 2 || c.cardType === 4) {
        if (c.currentTimes <= 0) isValid = false;
      } else if (c.cardType === 3) {
        if (c.currentAmount <= 0) isValid = false;
      }
    }

    return isValid;
  },

  /**
   * 会员卡基础检查
   * @param mc
   * @returns [true|false, msg]
   */
  checkMemberCard: (mc, lessonBeginTime = null, lessonEndTime = null, lessonDate = null) => {
    let now = new Date();

    // 检查会员卡状态
    if (mc.status !== 0) {
      return [false, "会员卡状态错误"];
    }

    // 检查会员卡休假
    if ($.MemberLib.isInVacation(mc.vacationBegin, mc.vacationEnd)) {
      return [false, "会员卡请假中"];
    }

    // 检查会员卡使用时间
    if (mc.cardClass === 0 && mc.limitBeginTime && mc.limitEndTime) {
      let nowTime = now.getHours() * 100 + now.getMinutes();
      if (mc.limitBeginTime > nowTime || mc.limitEndTime < nowTime) {
        return [false, "不在使用时间范围内"];
      }
    }
    if (mc.cardClass > 0 && mc.limitBeginTime && mc.limitEndTime && lessonBeginTime && lessonEndTime) {
      if (!(mc.limitBeginTime <= lessonBeginTime && mc.limitEndTime >= lessonEndTime)) {
        return [false, "不在上课时间范围内"];
      }
    }

    // 检查会员卡使用日期范围
    if (mc.limitDates) {
      let todayNum = parseInt(new Date().format("MMdd"));
      let items = mc.limitDates.split(";");
      let checkRet = null;
      for (let i = 0, len = items.length; i < len; i++) {
        let dates = items[i].split(",");
        let beginDates = dates[0].split("/");
        let endDates = dates[1].split("/");
        let beginDate = parseInt(beginDates[0]) * 100 + parseInt(beginDates[1]);
        let endDate = parseInt(endDates[0]) * 100 + parseInt(endDates[1]);

        if (todayNum < beginDate || todayNum > endDate) {
          checkRet = false;
        } else {
          checkRet = true;
          break;
        }
      }
      if (!checkRet) {
        return [false, "不在使用日期范围内"];
      }
    }

    // 检查会员卡使用期限
    if (mc.beginDate && mc.endDate) {
      if (now.compareDatePart(Date.new(mc.beginDate)) < 0 || now.compareDatePart(Date.new(mc.endDate)) > 0) {
        return [false, "不在使用期限内"];
      }
    }

    // 检查单双日使用限制
    if (mc.limitOddEvenDay) {
      let day = now.getDate();
      if (mc.limitOddEvenDay === 1 && day % 2 === 0) {
        return [false, "限定单日使用"];
      }
      if (mc.limitOddEvenDay === 2 && day % 2 === 1) {
        return [false, "限定双日使用"];
      }
    }

    // 检查限定用卡星期
    if (mc.limitWeeks && !mc.ignoreLimitWeeks) {
      let weeks = mc.limitWeeks.split(",");
      let targetDate = lessonDate != null && mc.cardClass > 0 ? lessonDate : now;
      if (!weeks.contains(targetDate.getDay() + "")) {
        return [false, lessonDate != null && mc.cardClass > 0 ? "不能上该星期的课" : "不在规定的用卡星期"];
      }
    }

    return [true, null];
  },

  formatLimitDates: limitDates => {
    if (!limitDates) return "";

    let descArr = [];
    let items = limitDates.split(";");
    for (let i = 0, len = items.length; i < len; i++) {
      let dates = items[i].split(",");
      let beginDates = dates[0].split("/");
      let beginMonth = parseInt(beginDates[0]);
      let beginDay = parseInt(beginDates[1]);
      let endDates = dates[1].split("/");
      let endMonth = parseInt(endDates[0]);
      let endDay = parseInt(endDates[1]);
      if (beginMonth && beginDay && endMonth && endDay) {
        descArr.push("{0}/{1} ~ {2}/{3}".format(beginMonth, beginDay, endMonth, endDay));
      }
    }

    return descArr.join("、");
  },

  formatWeekNames: weeks => {
    if (!weeks) return;
    if (weeks.length === 13) return "周一至周日";

    let weekNames = [];
    for (let w of weeks.split(",")) {
      weekNames.push($.Dict.SimpleWeekName[parseInt(w)]);
    }

    return "周" + weekNames.join("、");
  },

  isInVacation: (begin, end) => {
    if (begin && end) {
      let today = Date.new();
      if (today.compareDatePart(Date.new(begin)) >= 0 && today.compareDatePart(Date.new(end)) <= 0) {
        return true;
      }
    }

    return false;
  },

  getCheckcodeForGlBooking(mcId, memberId, lessonId) {
    return $.Util.md5("J..Z. G/{0}/{1}/{2}/{3}/{4}/{5}".format(mcId, memberId, lessonId, $.data.tenant.encTid, $.data.shop.encSid, $.Util.formatDate(new Date())));
  },

  getCheckcodeForVenueBooking(venueId, mcId, vaiIdList) {
    return $.Util.md5("J~Z G/{0}/{1}/{2}/{3}/{4}/{5}".format(mcId, venueId, vaiIdList.join("-"), $.Util.formatDate(new Date()), $.data.tenant.encTid, $.data.shop.encSid));
  }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Member;


const User = {
  checkAuthWxBind: callback => {
    if (location.href.indexOf("jzongguan.com") < 0 || !$.Util.isInWeixin()) {
      callback();
      return;
    }

    if (location.href.indexOf("&state=") > 0 && location.href.indexOf("code=") > 0) {
      let pos1 = location.href.indexOf("code=");
      let pos2 = location.href.indexOf("&state=");
      let wxCode = location.href.substring(pos1 + 5, pos2);
      let args = { wxCode: wxCode };
      $.Req.service($.SvName.AUTHORIZER_WX_USER_BIND, args, ret => {
        callback();
      });
    } else {
      $.Req.service($.SvName.WX_APP_ID_QUERY_FOR_UNBIND_USER, {}, ret => {
        if (ret.wxAppId) {
          let redirectUri = encodeURIComponent(location.href);
          let componentAppid = "wxc7f61377adcfc57c";
          let url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid={0}&redirect_uri={1}&response_type=code&scope=snsapi_base&state=jzg&component_appid={2}#wechat_redirect".format(ret.wxAppId, redirectUri, componentAppid);
          location.href = url;
        } else {
          callback();
        }
      });
    }
  },

  queryUserShops(callback = null) {
    let hasMoreShops = false;
    if (!$.Util.isEmptyArray($.data.shopList) && $.data.shopList.length > 1) {
      hasMoreShops = true;
      if (callback) callback(hasMoreShops);
    } else {
      let args = {
        encTid: $.data.tenant.encTid,
        uid: $.data.user.uid,
        userType: "staff"
      };
      $.Req.service($.SvName.TENANT_SHOPS_QUERY, args, ret => {
        this.shopList = ret.shopList;
        $.data.shopList = ret.shopList;
        if (!$.Util.isEmptyArray($.data.shopList) && $.data.shopList.length > 1) {
          hasMoreShops = true;
        }
        if (callback) callback(hasMoreShops);
      }, false);
    }
  }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = User;


/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang__ = __webpack_require__(175);
/** Copyright wwww.jzongguan.com **/



//==========BEGIN: 系统对象扩展 ==========
document.setTitle = function (t) {
  document.title = t;
  let i = document.createElement("iframe");
  i.src = "//m.baidu.com/favicon.ico";
  i.style.display = "none";
  i.onload = function () {
    setTimeout(function () {
      i.remove();
    }, 9);
  };
  document.body.appendChild(i);
};
/*字符串时间中间添加：如 2200 变为22:00*/
String.prototype.insert = function (target) {
  let t1, t2;
  if (typeof target != "string") {
    target = target.toString();
  }
  t1 = target.substr(0, 2);
  t2 = target.substr(2, 2);
  return t1 + ":" + t2;
};

/**
 * @description 清除字符串左边的空白
 */
String.prototype.ltrim = function () {
  return this.replace(/(^\s*)/g, "");
};

/**
 * @description 清除字符串右边的空白
 */
String.prototype.rtrim = function () {
  return this.replace(/(^\s*)/g, "");
};

/**
 * @description 清除字符串两边的空白
 */
String.prototype.trim = function () {
  return this.replace(/(^\s*)|(\s*$)/g, "");
};

/**
 * @description 判断是否以某字符串（target）开始
 *
 * @param {Object} target - 需判断的字符串
 */
String.prototype.startsWith = function (target) {
  return target === this.substr(0, target.length);
};

/**
 * @description 判断是否以某字符串（target）结尾
 *
 * @param {Object} target - 需判断的字符串
 */
String.prototype.endsWith = function (target) {
  return target === this.substring(this.length - target.length);
};

/**
 * @description 字符串格式化（参数形式：{0},{1}）
 */
String.prototype.format = function () {
  let args = arguments;
  return this.replace(/\{(\d+)\}/g, function (m, i) {
    return args[i];
  });
};

String.prototype.shorten = function (newLen) {
  if (this.length <= newLen) return this;else return this.substr(0, newLen) + "...";
};

// 20000 => 20,000.00
Number.prototype.enUsAmount = function () {
  return this.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

/**
 * @description 判断数组中是否包含指定的值
 *
 * @param {Array} arr 数组
 * @param {Object} target 需查找的目标值
 */
Array.contains = function (arr, target) {
  if (!arr && !Array.isArray(arr)) return false;

  for (let i = 0, len = arr.length; i < len; i++) {
    if (target === arr[i]) return true;
  }
  return false;
};

/**
 * @description 判断数组中是否包含指定的值
 *
 * @param {Object} target 需查找的目标值
 */
Array.prototype.contains = function (target) {
  for (let i = 0, len = this.length; i < len; i++) {
    if (target === this[i]) return true;
  }
  return false;
};

/**
 * @description 数组删除一个指定值
 *
 * @param {Object} val 需删除的值
 */
Array.prototype.removeValue = function (val) {
  for (let i = 0, len = this.length; i < len; i++) {
    if (this[i] === val) {
      this.splice(i, 1);
      len--;
    }
  }
};

/**
 * @description 解析日期串为日期对象
 *
 * @param {String} dtstr, 例如 20150310111739
 * @return {Date}
 * @author zhangxl
 */
Date.parseJsonStr = function (dtstr) {
  let year = parseInt(dtstr.substr(0, 4));
  let month = parseInt(dtstr.substr(4, 2));
  let day = parseInt(dtstr.substr(6, 2));
  let hour = parseInt(dtstr.substr(8, 2));
  let minute = parseInt(dtstr.substr(10, 2));
  let second = parseInt(dtstr.substr(12, 2));
  return new Date(year, month - 1, day, hour, minute, second, 0);
};

/**
 * @description 根据日期字符串创建日期对象（兼容所有浏览器）
 *
 * @param datestr
 * @returns {Date}
 */
Date.new = function (dateobj = null) {
  if (dateobj) {
    if (Object.prototype.toString.call(dateobj) === "[object String]") {
      return new Date(dateobj.replace(/-/g, "/"));
    } else {
      return dateobj;
    }
  } else {
    return new Date();
  }
};

/**
 * @description 将日期对象转为json字符串
 * @return {String}
 * @author zhangxl
 */
Date.prototype.toJSON = function () {
  let year = this.getFullYear();
  let month = this.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  let day = this.getDate();
  day = day < 10 ? "0" + day : day;
  let hour = this.getHours();
  hour = hour < 10 ? "0" + hour : hour;
  let min = this.getMinutes();
  min = min < 10 ? "0" + min : min;
  let sec = this.getSeconds();
  sec = sec < 10 ? "0" + sec : sec;

  return [year, month, day, hour, min, sec].join("");
};

Date.prototype.format = function (format) {
  let o = {
    "M+": this.getMonth() + 1, //month
    "d+": this.getDate(), //day
    "h+": this.getHours(), //hour
    "m+": this.getMinutes(), //minute
    "s+": this.getSeconds(), //second
    "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
    S: this.getMilliseconds() //millisecond
  };
  if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (let k in o) if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));

  return format;
};

/**
 * 日期比较（不比较时间）
 * @returns {number} 0：相等，1：大于，-1：小于
 */
Date.prototype.compareDatePart = function (otherDate) {
  if (!(otherDate instanceof Date)) {
    otherDate = Date.new(otherDate);
  }

  let thisYear = this.getFullYear();
  let thisMonth = this.getMonth() + 1;
  let thisDay = this.getDate();
  let otherYear = otherDate.getFullYear();
  let otherMonth = otherDate.getMonth() + 1;
  let otherDay = otherDate.getDate();

  let thisDateNum = parseInt(thisYear * 10000 + thisMonth * 100 + thisDay);
  let otherDateNum = parseInt(otherYear * 10000 + otherMonth * 100 + otherDay);

  if (thisDateNum > otherDateNum) return 1;else if (thisDateNum < otherDateNum) return -1;else return 0;
};

Date.prototype.add = function (days) {
  if (days === 0) return;

  let newTime = this.getTime() + days * 3600 * 24 * 1000;
  this.setTime(newTime);
};

Date.prototype.addDays = function (days) {
  let newDate = new Date(this);
  newDate.setHours(0);
  newDate.setMinutes(0);
  newDate.setSeconds(0);
  newDate.setMilliseconds(0);

  let newTime = newDate.getTime() + days * 3600 * 24 * 1000;
  newDate.setTime(newTime);

  return newDate;
};
Date.prototype.subtract = function (otherDate) {
  let cmpDate = new Date(otherDate);
  cmpDate.setHours(0);
  cmpDate.setMinutes(0);
  cmpDate.setSeconds(0);
  cmpDate.setMilliseconds(0);
  let days = parseInt((this.getTime() - cmpDate.getTime()) / 1000 / 3600 / 24);
  return days; // days < 0 ? days : (days + 1);
};

Date.prototype.diffHours = function (otherDate) {
  let hours = (this.getTime() - otherDate.getTime()) / 1000 / 3600;
  return parseInt(hours);
};

Date.prototype.diffMins = function (otherDate) {
  let mins = (this.getTime() - otherDate.getTime()) / 1000 / 60;
  return parseInt(mins);
};

Date.prototype.diffSeconds = function (otherDate) {
  let seconds = (this.getTime() - otherDate.getTime()) / 1000;
  return parseInt(seconds);
};

//==========END: 系统对象扩展 ==========

const Util = {
  welcome: function () {
    let today = new Date();
    let hour = today.getHours();
    if (hour >= 5 && hour <= 8) return "早上好";else if (hour >= 9 && hour <= 11) return "上午好";else if (hour === 12) return "中午好";else if (hour >= 13 && hour <= 18) return "下午好";else return "晚上好";
  },

  isInWeixin: function () {
    let ua = window.navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) == "micromessenger";
  },

  isInWxMiniProgram: function () {
    return window.__wxjs_environment === "miniprogram";
  },

  md5: str => {
    let crypto = __webpack_require__(430);
    let decipher = crypto.createHash("md5");
    return decipher.update(str).digest("hex");
  },

  checkClientVersion(callback) {
    $.Req.service($.SvName.SYS_PARAM_VALUE_QUERY, { paramType: 1 }, ret => {
      if (ret.value === $.data.clientVersion) {
        if (callback) callback();
      } else {
        //alert('系统有更新，确认后将会刷新页面更新');
        location.reload();
      }
    });
  },

  validatePhoneNo: phoneNo => {
    return (/^1[23456789]\d{9}$/.test(phoneNo) || /^853[68]\d{7}$/.test(phoneNo)
    );
  },

  formatPhone: function (phoneNo) {
    if (!phoneNo) return "";
    let str = phoneNo + "";
    return "{0} {1} {2}".format(str.substr(0, 3), str.substr(3, 4), str.substr(7, 4));
  },

  isFictitiousPhoneNo: phoneNo => {
    let phoneNums = (phoneNo + "a").split("");
    let cnt = 1,
        lastNum = "";
    let repetition3 = 0;
    for (let i = 0; i < 12; i++) {
      if (cnt >= 4) return true;
      if (cnt == 3) repetition3++;
      if (lastNum == phoneNums[i]) cnt++;else cnt = 1;
      lastNum = phoneNums[i];
    }
    if (repetition3 > 1) return true;

    return false;
  },

  validateCardNo: cardNo => {
    return cardNo && ("" + cardNo).length < 16;
  },

  validateIdNo: idNo => {
    return (/(^\d{15}$)|(^\d{6}(19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$)/.test(idNo)
    );
  },

  getSexFromIdNo: idNo => {
    if (!idNo) return null;

    if (idNo.length === 15) {
      return idNo[13] % 2;
    } else if (idNo.length === 18) {
      return idNo[16] % 2;
    } else {
      return null;
    }
  },

  getBirthdayFromIdNo: idNo => {
    let items = [];
    if (idNo.length === 18) {
      items[0] = idNo.substr(6, 4);
      items[1] = idNo.substr(10, 2);
      items[2] = idNo.substr(12, 2);
    } else if (idNo.length === 15) {
      items[0] = "19" + idNo.substr(6, 2);
      items[1] = idNo.substr(8, 2);
      items[2] = idNo.substr(10, 2);
    }

    return items;
  },

  emptyValidator: (rule, value, callback) => {
    if (!value) {
      callback(new Error(__WEBPACK_IMPORTED_MODULE_1__lang__["a" /* default */].INPUT_EMPTY_ERR));
    } else {
      callback();
    }
  },
  addRequiredFieldsRules: (rules, fields) => {
    const requiredFieldRule = { required: true, message: __WEBPACK_IMPORTED_MODULE_1__lang__["a" /* default */].INPUT_EMPTY_ERR };
    for (let f of fields) {
      if (!rules[f]) {
        rules[f] = [requiredFieldRule];
      } else {
        rules[f].unshift(requiredFieldRule);
      }
    }
  },
  countAttrs: obj => {
    let count = 0;
    for (let i in obj) if (obj.hasOwnProperty(i)) {
      count++;
    }
    return count;
  },
  cookie: {
    set: function (name, value, days) {
      let expiresCode = "";
      if (days) {
        const d = new Date();
        d.setTime(d.getTime() + 24 * 3600 * 1000 * days);
        expiresCode = ";expires=" + d.toGMTString();
      }
      window.document.cookie = name + "=" + value + ";path=/" + expiresCode;
    },
    get: function (name) {
      const v = window.document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
      return v ? v[2] : null;
    },
    delete: function (name) {
      this.set(name, "", -1);
    }
  },
  sessionStore: {
    set: function (key, value) {
      if (typeof value === "object") window.sessionStorage.setItem(key, JSON.stringify(value));else window.sessionStorage.setItem(key, value);
    },
    get: function (key) {
      return window.sessionStorage.getItem(key);
    },
    getObj: function (key, dateFields = null) {
      const val = this.get(key);
      if (!dateFields) {
        return JSON.parse(val);
      } else {
        return JSON.parse(val, function (k, v) {
          if (Array.contains(dateFields, k)) {
            return Date.parseJsonStr(v);
          } else {
            return v;
          }
        });
      }
    },
    del: function (key) {
      return window.sessionStorage.removeItem(key);
    },
    clear: function () {
      window.sessionStorage.clear();
    }
  },
  getOptionItems: function (opts) {
    let items = [];
    for (let key in opts) {
      items.push({ value: key, label: opts[key] });
    }
    //console.log(items);
    return items;
  },
  getBrowserSize: function () {
    let pageWidth = window.innerWidth;
    let pageHeight = window.innerHeight;
    if (typeof pageWidth !== "number") {
      //在标准模式下面
      if (document.compatMode === "CSS1Compat") {
        pageWidth = document.documentElement.clientWidth;
        pageHeight = document.documentElement.clientHeight;
      } else {
        pageWidth = document.body.clientWidth;
        pageHeight = window.body.clientHeight;
      }
    }
    return {
      pageWidth: pageWidth,
      pageHeight: pageHeight
    };
  },
  /**
   * 显示页面加载效果
   */
  startLoading: function () {
    let brwSize = this.getBrowserSize();
    const pageWidth = brwSize.pageWidth;
    const pageHeight = brwSize.pageHeight;
    const maskBg = document.createElement("div");
    maskBg.id = "_mask_bg_";
    maskBg.style.height = pageHeight + "px";
    maskBg.style.width = pageWidth + "px";
    maskBg.setAttribute("class", "-mask-bg-");
    document.body.appendChild(maskBg);
    document.getElementById("_mask_cont_").style.display = "block";
  },

  endLoading: function () {
    const parent = document.body;
    const maskBg = document.getElementById("_mask_bg_");
    parent.removeChild(maskBg);
    document.getElementById("_mask_cont_").style.display = "none";
  },

  htmlEncode: function (html) {
    //1.首先动态创建一个容器标签元素，如DIV
    let temp = document.createElement("div");
    //2.然后将要转换的字符串设置为这个元素的innerText(ie支持)或者textContent(火狐，google支持)
    temp.textContent != undefined ? temp.textContent = html : temp.innerText = html;
    const output = temp.innerHTML;
    temp = null;
    return output;
  },
  htmlDecode: function (text) {
    //1.首先动态创建一个容器标签元素，如DIV
    let temp = document.createElement("div");
    temp.innerHTML = text;
    const output = temp.innerText || temp.textContent;
    temp = null;
    return output;
  },
  getImgUrl: function (filename, width = null, height = null, bgcolor = null, encTid = null) {
    encTid = !encTid ? $.data.tenant.encTid : encTid;
    if (!encTid) return "/static/img/default-photo.png";
    if (filename) {
      let imgDir = encTid.startsWith("/") ? "-" + encTid : encTid;
      let url = "{0}/{1}/{2}".format($.Conf.IMG_BASE_URL, encodeURIComponent(imgDir), filename);
      if (width && height) {
        url += "?x-oss-process=image/resize,m_pad,h_{0},w_{1}".format(height, width);
        if (bgcolor) {
          url += ",color_" + bgcolor;
        }
      } else if (width) {
        url += "?x-oss-process=image/resize,w_" + width;
      } else if (height) {
        url += "?x-oss-process=image/resize,h_" + height;
      }
      return url;
    } else {
      return "/static/img/default-photo.png";
    }
  },
  getAvatarUrl: function (filename, width = null, height = null, bgcolor = null, sex = null) {
    let encTid = $.data.tenant.encTid;
    if (!encTid) return "/static/img/default-photo.png";
    if (filename) {
      let imgDir = encTid.startsWith("/") ? "-" + encTid : encTid;
      let url = "{0}/{1}/{2}".format($.Conf.IMG_BASE_URL, encodeURIComponent(imgDir), filename);
      if (width && height) {
        url += "?x-oss-process=image/resize,m_pad,h_{0},w_{1}".format(height, width);
        if (bgcolor) {
          url += ",color_" + bgcolor;
        }
      } else if (width) {
        url += "?x-oss-process=image/resize,w_" + width;
      } else if (height) {
        url += "?x-oss-process=image/resize,h_" + height;
      }
      return url;
    } else if (sex) {
      return $.Conf.IMG_LIB_URL + "/avatar/m1.jpg";
    } else {
      return $.Conf.IMG_LIB_URL + "/avatar/w1.png";
    }
  },

  getVideoUrl: function (filename, encTid = null) {
    encTid = !encTid ? $.data.tenant.encTid : encTid;
    if (filename) {
      let imgDir = encTid.startsWith("/") ? "-" + encTid : encTid;
      let url = "{0}/{1}/{2}".format($.Conf.VIDEO_BASE_URL, encodeURIComponent(imgDir), filename);
      return url;
    } else {
      return "/static/img/default-photo.png";
    }
  },

  hasRoleFunc: function (roleFunc, ignoreShopOwner = false) {
    if (!ignoreShopOwner) {
      if ($.data.user.isTenantOwner || $.data.user.isShopOwner) {
        return true;
      }
    }

    return $.data.user.roleFuncList && $.data.user.roleFuncList.contains(roleFunc);
  },

  hasDisableRoleFunc: function (roleFunc) {
    if ($.data.user.isTenantOwner || $.data.user.isShopOwner) {
      return false;
    }
    return $.data.user.roleFuncList && $.data.user.roleFuncList.contains(roleFunc);
  },

  cloneObject: function (obj) {
    let newObj = obj.constructor === Array ? [] : {};
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        newObj[i] = typeof obj[i] === "object" ? cloneObject(obj[i]) : obj[i];
      }
    }
    return newObj;
  },

  formatDateWithoutYear: function (date) {
    return Date.new(date).format("M/dd");
  },

  formatDateForShort: function (date, full = true) {
    if (full) return Date.new(date).format("yyyy.MM.dd");else return Date.new(date).format("yyyy.M.d");
  },

  formatDate: function (date, full = true) {
    if (typeof date === "string") date = date.replace(/-/g, "/");
    if (full) return new Date(date).format("yyyy-MM-dd");else return new Date(date).format("yyyy-M-d");
  },

  formatDateTime: function (dateTime) {
    if (typeof dateTime === "string") {
      dateTime = dateTime.replace(/-/g, "/");
      if (dateTime.indexOf("T") > 0) {
        dateTime = dateTime.replace("T", " ");
      }
    }
    let desc = new Date(dateTime).format("yyyy-MM-dd hh:mm:ss");
    if (desc.indexOf("NaN") < 0) {
      return desc;
    } else {
      return null;
    }
  },
  formatTime: function (timeNum) {
    let hour = parseInt(timeNum / 100);
    let min = timeNum > 10 ? timeNum + "" : "0" + timeNum;
    return (hour >= 10 ? hour : "0" + hour) + ":" + min.substr(-2, 2);
  },

  formatNum: function (val) {
    if (Util.isEmpty(val)) return "";
    return Math.round(val * 100) / 100;
  },

  formatMonth: function (monthNum) {
    return parseInt(monthNum / 100) + "-" + monthNum % 100;
  },

  getTimeNum: function (timeStr) {
    if (!timeStr) return null;

    let items = timeStr.split(":");
    return parseInt(items[0] + "" + items[1]);
  },
  copyAttributes: function (src, desc) {
    for (let i in src) {
      desc[i] = src[i];
    }
  },

  getDateTimeInputVal: function (dateTime) {
    if (dateTime) {
      return Date.new(dateTime).format("yyyy-MM-ddThh:mm");
    } else {
      return null;
    }
  },

  getYearWeek: function (date) {
    let Year = date.getYear();
    let Month = date.getMonth();
    let Day = date.getDate();
    let d1 = new Date(Year, Month, Day);
    let d2 = new Date(Year, 0, 1);
    let d = Math.round((d1 - d2) / 86400000) - 1;
    return Math.ceil((d + (d2.getDay() + 1 - 1)) / 7);
  },

  calcDateDiffDays(date1, date2) {
    if (typeof date1 === "string") date1 = date1.replace(/-/g, "/");
    if (typeof date2 === "string") date2 = date2.replace(/-/g, "/");
    return new Date(date1).subtract(new Date(date2));
  },

  pending: function () {
    alert("很抱歉，手机端暂未开放此功能，请通过电脑网页版使用");
  },

  developing: function () {
    alert("很抱歉，该功能尚在开发中，敬请期待...");
  },

  checkPosition(successFunc, failFunc) {
    if (!$.data.shop.gpsLongitude || !$.data.shop.gpsLatitude) {
      if (successFunc) successFunc();
      return;
    }
    wx.getLocation({
      type: "wgs84",
      success: res => {
        let latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        let longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        //let speed = res.speed; // 速度，以米/每秒计
        let accuracy = parseInt(res.accuracy); // 位置精度
        let distance = Util.calcGpsDistance(latitude, longitude, $.data.shop.gpsLatitude, $.data.shop.gpsLongitude);
        if (distance - accuracy <= $.Conf.ACCEPT_DISTANCE) {
          if (successFunc) successFunc();
        } else {
          if (failFunc) failFunc();
        }
      },

      fail: function (ret) {
        alert("抱歉，定位失败！请刷新后再试或检查是否启用了定位服务。");
        //if (successFunc) successFunc();
      }
    });
  },

  calcGpsDistance(lat1, lng1, lat2, lng2) {
    lat1 = parseFloat(lat1);
    lng1 = parseFloat(lng1);
    lat2 = parseFloat(lat2);
    lng2 = parseFloat(lng2);
    const EARTH_RADIUS = 6378137.0; //单位M
    const PI = Math.PI;

    function getRad(d) {
      return d * PI / 180.0;
    }

    function calc() {
      let f = getRad((lat1 + lat2) / 2);
      let g = getRad((lat1 - lat2) / 2);
      let l = getRad((lng1 - lng2) / 2);
      let sg = Math.sin(g);
      let sl = Math.sin(l);
      let sf = Math.sin(f);
      let s, c, w, r, d, h1, h2;
      let a = EARTH_RADIUS;
      let fl = 1 / 298.257;
      sg = sg * sg;
      sl = sl * sl;
      sf = sf * sf;
      s = sg * (1 - sl) + (1 - sf) * sl;
      c = (1 - sg) * (1 - sl) + sf * sl;
      w = Math.atan(Math.sqrt(s / c));
      r = Math.sqrt(s * c) / w;
      d = 2 * w * a;
      h1 = (3 * r - 1) / 2 / c;
      h2 = (3 * r + 1) / 2 / s;
      return d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
    }

    let ret = calc();
    return ret ? parseInt(ret) : 0;
  },

  /**
   * 检查GPS位置
   * @param successFunc
   * @param failFunc
   */
  checkPosition2(successFunc, failFunc) {
    if (!$.data.shop.gpsLongitude || !$.data.shop.gpsLatitude) {
      if (successFunc) successFunc();
      return;
    }
    let geolocation;
    let myMap = new AMap.Map("", {});
    myMap.plugin("AMap.Geolocation", () => {
      geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, //是否使用高精度定位，默认:true
        timeout: 10000, //超过10秒后停止定位，默认：无穷大
        buttonPosition: "RB"
      });
      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, "complete", data => {
        let latitude = data.position.getLat();
        let longitude = data.position.getLng();
        let lnglat = new AMap.LngLat(longitude, latitude);
        let distance = lnglat.distance([$.data.shop.gpsLongitude, $.data.shop.gpsLatitude]);
        if (distance <= $.Conf.ACCEPT_DISTANCE) {
          if (successFunc) successFunc();
        } else {
          if (failFunc) failFunc();
        }
      });
      AMap.event.addListener(geolocation, "error", data => {
        alert("定位失败！请允许使用您当前位置。");
        document.location.reload();
      });
    });
  },

  checkRequired: function (obj, args) {
    for (let field in args) {
      if (obj[field] === null || obj[field] === undefined || obj[field] === "") {
        let name = args[field];
        $.Msg.error("请输入【" + name + "】");
        return false;
      }
    }
    return true;
  },

  handleException(err, src) {
    let stack = arguments[0].stack;
    if (location.href.indexOf("jzongguan.com") > 0) {
      if ($.data.user.uid) {
        let args = {
          sysLog: {
            src: "jzg-web-m",
            content: stack
          }
        };
        if (src) args.sysLog.src += " > " + src;
        $.Req.service($.SvName.SYS_LOG_CREATE, args);
      }
      alert("抱歉，系统出了点小问题。我们已检测到，将火速修改。");
    } else {
      console.log(stack);
      alert(err);
    }
  },
  isEmpty(v) {
    return v === null || v === undefined;
  },
  isNotEmpty(v) {
    return v !== null && v !== undefined;
  },
  isEmptyArray(v) {
    return v === null || v === undefined || v.length === 0;
  },
  isInteger(obj) {
    return obj % 1 === 0;
  },

  calcServiceCheckCode(timestamp) {
    let seconds = parseInt(timestamp / 1000);
    return $.Util.md5(seconds + "-" + $.data.shop.encTid + "-" + $.data.user.uid);
  },

  uploadImgByWxApi(successCallback, errCallback, imgMaxWidth = 2048, imgCompressRate = 0.85) {
    wx.ready(() => {
      wx.chooseImage({
        count: 1, // 可选择图片的个数
        sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          let localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          if (!localIds || !localIds.length) {
            $.Msg.error("尚未选择图片");
            return;
          }

          wx.getLocalImgData({
            localId: localIds[0], // 图片的localID
            success: function (res) {
              function uploadImg(imgData, successCallback, errCallback) {
                function dataURItoBlob(base64Data) {
                  if (!window.__wxjs_is_wkwebview) {
                    base64Data = "data:image/jpeg;base64," + base64Data;
                  }
                  let byteString = base64Data;
                  if (base64Data.split(",")[0].indexOf("base64") >= 0) {
                    try {
                      byteString = atob(base64Data.split(",")[1]);
                    } catch (e) {
                      alert(e);
                      console.log(e);
                      throw e;
                    }
                  } else {
                    byteString = unescape(base64Data.split(",")[1]);
                  }
                  let mineStr = base64Data.split(",")[0].split(":")[1].split(";")[0];

                  let ia = new Uint8Array(byteString.length);
                  for (let i = 0; i < byteString.length; i++) {
                    ia[i] = byteString.charCodeAt(i);
                  }
                  return new Blob([ia], { type: mineStr });
                }

                function getBody(xhr) {
                  const text = xhr.responseText || xhr.response;
                  if (!text) {
                    return text;
                  }
                  try {
                    return JSON.parse(text);
                  } catch (e) {
                    return text;
                  }
                }

                //组装formdata
                let fd = new FormData();
                fd.append("filedata", dataURItoBlob(imgData));
                fd.append("filename", new Date().getTime() + ".png");
                try {
                  let et = fd.entries();
                  let f = et.next().value[1];
                  let lrzArgs = {
                    width: imgMaxWidth,
                    quality: imgCompressRate
                  };
                  lrz(f, lrzArgs).then(rst => {
                    let xmlHttp = new XMLHttpRequest();
                    xmlHttp.withCredentials = true;
                    xmlHttp.open("POST", $.Conf.IMG_UPLOAD_URL);
                    xmlHttp.send(rst.formData);
                    xmlHttp.onload = function onload() {
                      if (xmlHttp.status < 200 || xmlHttp.status >= 300) {
                        errCallback(getBody(xmlHttp));
                        return;
                      }
                      successCallback(getBody(xmlHttp));
                    };
                    xmlHttp.onerror = function (e) {
                      alert("很抱歉，上传失败，请尝试上传尺寸小一些的图片。");
                    };
                  }).catch(function (err) {
                    alert("lrz error: " + JSON.stringify(err));
                  });
                } catch (e) {
                  alert("请稍等...");
                  let xmlHttp = new XMLHttpRequest();
                  xmlHttp.withCredentials = true;
                  xmlHttp.open("POST", $.Conf.IMG_UPLOAD_URL);
                  xmlHttp.send(fd);
                  xmlHttp.onload = function onload() {
                    if (xmlHttp.status < 200 || xmlHttp.status >= 300) {
                      errCallback(getBody(xmlHttp));
                      return;
                    }
                    successCallback(getBody(xmlHttp));
                  };
                  xmlHttp.onerror = function (e) {
                    alert("很抱歉，上传失败，请尝试上传尺寸小一些的图片。");
                  };
                }
              }

              //////////////////
              $.Msg.info("正在上传, 请稍候...");
              let imgData = res.localData; // localData是图片的base64数据，可以用img标签显示
              try {
                uploadImg(imgData, successCallback, errCallback);
              } catch (e) {
                console.log("uploadImg exception: " + e);
              }
            }
          });
        },
        fail: function (res) {
          alert(res.errMsg);
        }
      });
    });
  },

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  round(num) {
    if (num === null || num === undefined) return "";
    return Math.round(num * 100) / 100;
  },

  /**
   * 获取日期统计列表
   * @param monthCnt - 最近*月
   * @param needYear - 是否需要年
   * @returns [{name, beginDate, endDate}]
   */
  getDateShortcuts(monthCnt = 3, needYear = true) {
    let dateShortcuts = [];

    // 获取最近n个月的月份
    let today = new Date();
    let date = new Date();
    let year, month, beginDate, endDate;
    date.setDate(1);
    for (let i = 0; i < monthCnt; i++) {
      year = date.getFullYear();
      month = date.getMonth();
      beginDate = new Date(date.getFullYear(), month, 1);
      if (i === 0) {
        endDate = new Date(today);
      } else {
        endDate = new Date(date.getFullYear(), month + 1, 0);
      }
      dateShortcuts.push({
        name: "{0}-{1}月".format(date.getFullYear(), month + 1),
        beginDate: beginDate,
        endDate: endDate
      });
      date.setMonth(month - 1);
    }
    if (needYear) {
      dateShortcuts.push({
        name: today.getFullYear() + "年",
        beginDate: new Date(today.getFullYear(), 0, 1),
        endDate: today
      });
    }
    return dateShortcuts;
  },

  formatHours(hours, simpleFormat = true) {
    if (hours < 24) return hours + "小时";
    let timeStr = parseInt(hours / 24) + "天";
    if (hours % 24 > 0) {
      timeStr += hours % 24 + "小时";
    }

    if (simpleFormat) return timeStr;else return "{0}小时 ({1})".format(hours, timeStr);
  },

  formatMins(mins, simpleFormat = true) {
    if (mins <= 90) return mins + "分钟";

    let hours = parseInt(mins / 60);
    let timeStr = this.formatHours(hours, true);
    if (mins % 60 > 0) {
      timeStr += mins % 60 + "分钟";
    }

    if (simpleFormat) return timeStr;else return "{0}分钟 ({1})".format(mins, timeStr);
  }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Util;


/**
 * web request model
 */
const Req = {
  /**
   * 服务调用
   *
   * @param serviceName - 调用的服务名称
   * @param args - 服务参数
   * @param successFunc - 服务成功调用后的回调函数
   * @param showLoading - 是否显示加载标识
   * @param failFunc - 服务失败时的回调函数
   */
  service: function (serviceName, args, successFunc, showLoading = false, failFunc = null) {
    if (showLoading) Util.startLoading();
    axios({
      method: "post",
      url: __WEBPACK_IMPORTED_MODULE_0__const__["b" /* Conf */].API_HOST + "/" + serviceName,
      data: JSON.stringify(args),
      timeout: 10000,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      }
    }).then(response => {
      if (showLoading) Util.endLoading();

      const svRep = response.data;
      if (svRep.status !== 0) {
        console.log(svRep);
        if (svRep.status === 1) {
          // 登录过期
          $.Util.cookie.delete($.Conf.Keys.LOGIN_FLAG);
          // document.location.href = "/";
          return;
        }
        if (failFunc) {
          failFunc(svRep.msg);
        } else {
          alert(svRep.msg);
        }
      } else if (successFunc) {
        successFunc(svRep.data, svRep.sysTime);
      }
    }).catch(e => {
      let error = e ? e.toString() : "";
      if (error.indexOf("Network Error") > 0) {
        alert("网络错误，请检查您的网络：" + error);
        return;
      }
      if (error.indexOf("timeout ") >= 0) {
        alert("网络连接超时：请检查您的移动网络或Wifi，稍后再试。");
        return;
      }
      alert(error);
    });
  },

  querySystime: function (callback) {
    $.Req.service($.SvName.SYSTIME_GET, {}, (ret, systime) => {
      callback(systime);
    });
  },

  queryCoachBase: function (coachType, callback) {
    let args = {};
    if (coachType === 2) args = { isPrivateCoach: true };else if (coachType === 1) args = { isGroupCoach: true };else return;

    $.Req.service($.SvName.COACH_BASE_QUERY, args, ret => {
      if (callback) {
        callback(ret.coachList);
      }
    });
  },

  queryGroupCourseBase: function (callback) {
    $.Req.service($.SvName.COURSE_QUERY, { isBaseInfo: true, status: 0 }, ret => {
      if (callback) {
        callback(ret.courseList);
      }
    });
  },

  queryPrivateCourseBase: function (callback) {
    $.Req.service($.SvName.PRIVATE_COURSE_QUERY, { isBaseInfo: true, status: 0 }, ret => {
      if (callback) {
        callback(ret.courseList);
      }
    });
  },

  queryGround: function (callback) {
    $.Req.service($.SvName.GROUND_QUERY, { queryType: 2, status: 0 }, ret => {
      if (callback) callback(ret.groundList);
    });
  },

  queryMemberBase: function (memberId, callback) {
    $.Req.service($.SvName.MEMBER_BASE_QUERY, { memberId: memberId }, ret => {
      if (callback) callback(ret);
    });
  },

  queryShopParam(callback) {
    $.Req.service($.SvName.SHOP_PARAM_QUERY, {}, (ret, systime) => {
      this.today = Date.new(systime);
      if (callback) callback(ret);
    });
  },

  initWxApi(callback = null) {
    if ($.data.hasInitWxApi) {
      if (callback) callback();
      return;
    }
    let args = {
      pageUrl: encodeURIComponent(location.href.split("#")[0])
    };
    $.Req.service($.SvName.WX_API_CONF_GET, args, ret => {
      $.data.hasInitWxApi = true;
      if (ret.wxApiConf && ret.wxApiConf.signature) {
        wx.config({
          debug: false,
          appId: ret.wxApiConf.appId,
          timestamp: ret.wxApiConf.timestamp,
          nonceStr: ret.wxApiConf.nonceStr,
          signature: ret.wxApiConf.signature,
          jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
        });
        wx.error(function (res) {
          // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
          if ($.data.user.staffId === 1) alert("ERR: " + JSON.stringify(res));
        });
      }
      if (callback) callback();
    });
  },

  updateShopArg(typeId, typeValue, showTips = true, callback = null) {
    let args = { typeId: typeId, typeValue: "" + typeValue };
    $.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
      if (showTips) $.Msg.success($.Lang.SAVE_SUCCESS);
      if (callback) callback();
    });
  }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = Req;


const Msg = {
  duration: 2,
  timer: null,

  __display__: function (txt, type, showTime) {
    document.getElementById("_globalToast_").className = "global-toast global-toast-" + type;
    document.getElementById("_globalToast_").innerHTML = '<i class="iconfont icon' + type + '"></i>' + txt;
    document.getElementById("_globalToast_").style.display = "block";

    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      document.getElementById("_globalToast_").style.display = "none";
    }, showTime);
  },

  info: function (txt) {
    this.__display__(txt, "info", 2000);
  },

  success: function (txt) {
    this.__display__(txt, "success", 2000);
  },

  error: function (txt) {
    this.__display__(txt, "error", 2500);
  },

  warning: function (txt) {
    this.__display__(txt, "warning", 2500);
  }
};
/* harmony export (immutable) */ __webpack_exports__["c"] = Msg;


const Dlg = {
  vue: null,

  /*	_getNewTxt_: (txt) => {
  return ($.data.user.uname && isNaN($.data.user.uname))
  	? ($.data.user.uname + "，" + txt) : ('亲，' + txt);
  },*/
  _getNewTxt_: (txt, showUserName = true) => {
    if (showUserName) {
      return $.data.user.uname && !$.Util.isInteger($.data.user.uname) ? $.data.user.uname + "，" + txt : "亲，" + txt;
    } else {
      return txt;
    }
  },

  info: function (txt, callback = null, showUserName = true) {
    let conf = {
      title: "提示信息",
      content: this._getNewTxt_(txt, showUserName)
    };
    alert(conf.content);
    if (callback) callback();
  },

  success: function (txt, callback = null, showUserName = true) {
    let conf = {
      title: "成功信息",
      content: this._getNewTxt_(txt, showUserName)
    };
    alert(conf.content);
    if (callback) callback();
  },

  error: function (txt, callback = null, showUserName = true) {
    let conf = {
      title: "错误信息",
      content: this._getNewTxt_(txt, showUserName)
    };
    alert(conf.content);
    if (callback) callback();
  },

  warning: function (txt, callback = null, showUserName = true) {
    let conf = {
      title: "警告信息",
      content: this._getNewTxt_(txt, showUserName)
    };
    alert(conf.content);
  },

  confirm: function (msg, confirmFunc, cancelFunc = null) {
    this.vue.$dialog.confirm({
      message: msg,
      confirmButtonText: "确定",
      cancelButtonText: "取消"
    }).then(() => {
      if (confirmFunc) confirmFunc();
    }).catch(() => {
      if (cancelFunc) cancelFunc();
    });
  }
};
/* harmony export (immutable) */ __webpack_exports__["e"] = Dlg;

const Bble = {
  duration: 2,
  timer: null,
  __display__: function (txt, type, showTime) {
    document.getElementById("_globalBubble_").className = "global-bubble btn-box global-bubble-" + type;
    document.getElementById("_globalBubble_").innerHTML = '<i class="iconfont icon' + type + '"></i>' + txt;
    document.getElementById("_globalBubble_").style.display = "block";
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      document.getElementById("_globalBubble_").style.display = "none";
    }, showTime);
  },
  info: function (txt) {
    this.__display__(txt, "info", 2000);
  },
  success: function (txt) {
    this.__display__(txt, "success", 2000);
  },
  error: function (txt) {
    this.__display__(txt, "error", 2500);
  },
  warning: function (txt) {
    this.__display__(txt, "warning", 2500);
  }
};
/* harmony export (immutable) */ __webpack_exports__["d"] = Bble;


/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return router; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(721);



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
const chartTest = r => __webpack_require__.e/* require.ensure */(8).then((() => r(__webpack_require__(844))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

const index = r => __webpack_require__.e/* require.ensure */(8).then((() => r(__webpack_require__(808))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const start = r => __webpack_require__.e/* require.ensure */(8).then((() => r(__webpack_require__(945))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const login = r => __webpack_require__.e/* require.ensure */(8).then((() => r(__webpack_require__(973))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const userPwdSet = r => __webpack_require__.e/* require.ensure */(8).then((() => r(__webpack_require__(975))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const userInfo = r => __webpack_require__.e/* require.ensure */(8).then((() => r(__webpack_require__(974))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const wxOauth = r => __webpack_require__.e/* require.ensure */(8).then((() => r(__webpack_require__(976))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const tenantRegister = r => __webpack_require__.e/* require.ensure */(8).then((() => r(__webpack_require__(970))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

const wxLoginForPc = r => __webpack_require__.e/* require.ensure */(8).then((() => r(__webpack_require__(980))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- tenant pages
const tenantShops = r => __webpack_require__.e/* require.ensure */(16).then((() => r(__webpack_require__(971))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const tenantDetail = r => __webpack_require__.e/* require.ensure */(16).then((() => r(__webpack_require__(969))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const tenant = r => __webpack_require__.e/* require.ensure */(16).then((() => r(__webpack_require__(972))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- back-stage management
const custSource = r => __webpack_require__.e/* require.ensure */(19).then((() => r(__webpack_require__(903))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shopCardConf = r => __webpack_require__.e/* require.ensure */(19).then((() => r(__webpack_require__(904))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shopCardEdit = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(905))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- shop pages
const shopDetail = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(920))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const cardList = r => __webpack_require__.e/* require.ensure */(23).then((() => r(__webpack_require__(908))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shopGps = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(923))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shopConf = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(919))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shopFeedbackList = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(922))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shopEntryCheckins = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(921))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shopParam = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(924))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shopSmsLog = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(925))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const reminderConf = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(918))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const mtVerifyCoupon = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(917))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

const mtVerifyCouponList = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(916))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

const dyVerifyCoupon = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(910))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

const dyVerifyCouponList = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(909))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

const dySyncBind = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(773))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const mtSyncBind = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(775))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

const instalmentList = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(912))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const instalmentCreate = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(911))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const instalmentDetail = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(774))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const instalmentProduct = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(914))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const instalmentProductCreate = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(913))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

const instalmentStat = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(915))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
//-- staff pages
const staffHome = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(936))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const coachHome = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(927))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffCreate = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(931))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffEdit = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(776))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffGroupLessons = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(935))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffGroupLessonStat = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(934))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffPcLessonStat = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(939))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffPrivateLessons = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(941))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffGcSchedules = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(933))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffPcSchedules = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(940))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffSales = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(943))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffSalary = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(942))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffList = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(938))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const coachWorktime = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(928))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffFuncs = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(932))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const coachGlCheckin = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(926))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const salesTargetMng = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(930))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffWorkReport = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(944))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

const rolePermission = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(929))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffListSalary = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(937))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- course pages
const groupLessonList = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(786))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const groupLessonInfo = r => __webpack_require__.e/* require.ensure */(10).then((() => r(__webpack_require__(785))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const privateCourseList = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(793))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const privateCourseInfo = r => __webpack_require__.e/* require.ensure */(10).then((() => r(__webpack_require__(792))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const privateLessonEdit = r => __webpack_require__.e/* require.ensure */(10).then((() => r(__webpack_require__(798))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const privateLessonShare = r => __webpack_require__.e/* require.ensure */(10).then((() => r(__webpack_require__(799))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const psTrainPlanShare = r => __webpack_require__.e/* require.ensure */(10).then((() => r(__webpack_require__(801))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const groupCourseSchedules = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(783))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const privateCourseSchedules = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(795))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const privateCourseScheduleEdit = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(794))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const privateLessonBooking = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(797))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shopPrivateLessonQuery = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(803))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shopGroupLessonQuery = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(802))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const pcLessonCancelLog = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(790))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const groupLessonTable = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(788))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const groupLessonTableExport = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(787))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const psTrainPlanListShare = r => __webpack_require__.e/* require.ensure */(10).then((() => r(__webpack_require__(800))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const groupCourseScheduleEdit = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(782))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const lessonBookingConf = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(789))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const groupCourse = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(784))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const groupCourseEdit = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(781))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const privateCourse = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(796))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const privateCourseEdit = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(791))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- member pages
const memberHome = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(870))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberQuery = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(886))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberBase = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(849))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberCardList = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(852))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberGroupLessons = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(866))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberPrivateLessons = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(885))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberFollows = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(864))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberEntryCheckins = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(860))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberFitnessPhoto = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(863))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberBodyTest = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(850))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberFeedbackList = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(862))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberPrivateLessonBooking = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(884))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberPlBookingByWeek = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(881))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberPlBookingByDay = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(880))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberGlCheckin = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(865))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberEntryCheckin = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(859))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberMore = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(878))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const myCardList = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(892))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const myGroupLessons = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(895))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const myPrivateLessons = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(898))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const myEntryCheckins = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(893))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const myPoints = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(897))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const myFitnessPhoto = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(894))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const myBodyTest = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(891))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const myHrs = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(896))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const myRun = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(899))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberCardSale = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(854))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberPlCheckin = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(883))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberPlCheckinListToday = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(882))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberScoreTestRank = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(887))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberPhotoShare = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(879))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberCreate = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(856))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberDraftEdit = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(857))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberDraftQuery = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(858))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberCardDraftQuery = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(851))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberCardQuery = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(853))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberActionQuery = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(846))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberInfo = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(872))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const changeSkin = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(967))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const test = r => __webpack_require__.e/* require.ensure */(8).then((() => r(__webpack_require__(900))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberTestType = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(890))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberComprehensiveScore = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(855))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberTestScore = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(889))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberHrs = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(871))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

const memberHealthReport = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(868))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

const memberAnnualReport = r => __webpack_require__.e/* require.ensure */(22).then((() => r(__webpack_require__(847))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberHeartRateRank = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(869))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberAutoRenew = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(848))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const rechargeCard = r => __webpack_require__.e/* require.ensure */(24).then((() => r(__webpack_require__(840))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberLabelSetting = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(876))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberInstalmentProduct = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(875))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberInstalmentProductDetail = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(874))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberInstalmentProductBind = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(873))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberSummary = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(888))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberEntryRank = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(861))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberLessonRank = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(877))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- mach pages
const loginForImstlife = r => __webpack_require__.e/* require.ensure */(12).then((() => r(__webpack_require__(815))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const lockerForImstlife = r => __webpack_require__.e/* require.ensure */(12).then((() => r(__webpack_require__(814))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const bathroomForImstlife = r => __webpack_require__.e/* require.ensure */(26).then((() => r(__webpack_require__(811))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const hrsBindForImstlife = r => __webpack_require__.e/* require.ensure */(11).then((() => r(__webpack_require__(813))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const hrsBindCustForImstlife = r => __webpack_require__.e/* require.ensure */(11).then((() => r(__webpack_require__(812))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const runBindForImstlife = r => __webpack_require__.e/* require.ensure */(11).then((() => r(__webpack_require__(818))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const runBindCustForImstlife = r => __webpack_require__.e/* require.ensure */(11).then((() => r(__webpack_require__(817))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const userHrsForShare = r => __webpack_require__.e/* require.ensure */(11).then((() => r(__webpack_require__(901))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const userRunForShare = r => __webpack_require__.e/* require.ensure */(11).then((() => r(__webpack_require__(902))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const authUserForImstlife = r => __webpack_require__.e/* require.ensure */(12).then((() => r(__webpack_require__(810))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shopHrs = r => __webpack_require__.e/* require.ensure */(12).then((() => r(__webpack_require__(819))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const qrcodeMachCheckin = r => __webpack_require__.e/* require.ensure */(12).then((() => r(__webpack_require__(816))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const venueAreaBookingCheckout = r => __webpack_require__.e/* require.ensure */(25).then((() => r(__webpack_require__(820))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const aiMachEntrance = r => __webpack_require__.e/* require.ensure */(12).then((() => r(__webpack_require__(809))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- stat pages
const statHome = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(950))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statMember = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(959))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statMemberEntry = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(952))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statMemberPoints = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(956))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statMemberLesson = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(953))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statMemberPayment = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(955))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statMemberSource = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(958))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statSales = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(965))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statGroupCoach = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(948))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statPrivateCoach = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(960))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statGroupCourse = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(949))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statPrivateCourse = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(961))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statCard = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(946))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statRevenue = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(963))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statReport = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(962))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statMemberMore = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(954))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statMemberPrivateLesson = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(957))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statMemberCheckinDays = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(951))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statSalesTarget = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(964))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statDataReport = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(947))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- cust pages
const custQuery = r => __webpack_require__.e/* require.ensure */(13).then((() => r(__webpack_require__(806))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const custEdit = r => __webpack_require__.e/* require.ensure */(13).then((() => r(__webpack_require__(804))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const visitCustByDay = r => __webpack_require__.e/* require.ensure */(13).then((() => r(__webpack_require__(807))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const custFollowTask = r => __webpack_require__.e/* require.ensure */(13).then((() => r(__webpack_require__(805))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- sys pages
const aboutUs = r => __webpack_require__.e/* require.ensure */(20).then((() => r(__webpack_require__(966))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const menuSetting = r => __webpack_require__.e/* require.ensure */(20).then((() => r(__webpack_require__(968))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- market pages
const msiteIntro = r => __webpack_require__.e/* require.ensure */(9).then((() => r(__webpack_require__(839))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const couponList = r => __webpack_require__.e/* require.ensure */(9).then((() => r(__webpack_require__(828))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const couponCreate = r => __webpack_require__.e/* require.ensure */(9).then((() => r(__webpack_require__(827))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const lotteryList = r => __webpack_require__.e/* require.ensure */(9).then((() => r(__webpack_require__(838))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const lotteryCreate = r => __webpack_require__.e/* require.ensure */(9).then((() => r(__webpack_require__(837))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const groupbuy = r => __webpack_require__.e/* require.ensure */(9).then((() => r(__webpack_require__(836))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const bargain = r => __webpack_require__.e/* require.ensure */(9).then((() => r(__webpack_require__(826))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const seckill = r => __webpack_require__.e/* require.ensure */(9).then((() => r(__webpack_require__(841))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shareItemList = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(842))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shareItemPage = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(772))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shareItemReceiver = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(843))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const eventDetail = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(830))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const eventList = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(832))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const eventCheckStatistics = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(829))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const eventEnrollList = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(831))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const eventPoster = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(834))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const eventPosterEdit = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(833))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

const fitEntryTicket = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(835))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- mall pages
const mallProductList = r => __webpack_require__.e/* require.ensure */(21).then((() => r(__webpack_require__(822))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const mallProduct = r => __webpack_require__.e/* require.ensure */(21).then((() => r(__webpack_require__(824))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const mallShoppingCart = r => __webpack_require__.e/* require.ensure */(17).then((() => r(__webpack_require__(825))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const mallProductPay = r => __webpack_require__.e/* require.ensure */(17).then((() => r(__webpack_require__(823))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberMallOrder = r => __webpack_require__.e/* require.ensure */(17).then((() => r(__webpack_require__(821))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- more pages
const smsTask = r => __webpack_require__.e/* require.ensure */(18).then((() => r(__webpack_require__(907))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const aiMachConf = r => __webpack_require__.e/* require.ensure */(18).then((() => r(__webpack_require__(906))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- venue pages
const venueBooking = r => __webpack_require__.e/* require.ensure */(15).then((() => r(__webpack_require__(979))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const venueBooking1 = r => __webpack_require__.e/* require.ensure */(15).then((() => r(__webpack_require__(978))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberVenueBookings = r => __webpack_require__.e/* require.ensure */(15).then((() => r(__webpack_require__(977))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

const PAGE_TYPE = { PAGE_FOR_TENANT: 1, PAGE_FOR_STAFF: 2, PAGE_FOR_MEMBER: 3 };

const router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{ path: "/", component: login, meta: { ignoreAuth: true } }, { path: "/test", component: test, meta: { ignoreAuth: true } }, { path: "/start", component: start, meta: { ignoreAuth: true } }, { path: "/user-login", component: login, meta: { ignoreAuth: true } }, {
    path: "/user-pwd-set",
    component: userPwdSet,
    meta: { ignoreAuth: true }
  }, { path: "/user-info", component: userInfo }, { path: "/wx-oauth", component: wxOauth, meta: { ignoreAuth: true } },

  //-- tenant pages
  { path: "/tenant", component: tenantShops, meta: { pageType: 1 } }, { path: "/tenant-shops", component: tenantShops, meta: { pageType: 1 } }, { path: "/tenant-detail", component: tenantDetail, meta: { pageType: 1 } }, { path: "/tenant-menus", component: tenant, meta: { pageType: 1 } }, { path: "/tenant-stat-report", component: statCard, meta: { pageType: 1 } }, {
    path: "/tenant-stat-revenue",
    component: statReport,
    meta: { pageType: 1 }
  },

  //-- back-stage management
  {
    path: "/tenant-reg",
    component: tenantRegister,
    meta: { ignoreAuth: true }
  }, {
    path: "/wx-login-for-pc",
    component: wxLoginForPc,
    meta: { ignoreAuth: true }
  }, { path: "/cust-source", component: custSource, meta: { roleFunc: 27 } }, { path: "/shop-card-conf", component: shopCardConf, meta: {} }, {
    path: "/shop-card-create",
    component: shopCardEdit,
    meta: { roleFunc: 4 }
  }, { path: "/shop-card-edit/:cardId", component: shopCardEdit, meta: {} },

  //-- shop pages
  { path: "/shop-detail", component: shopDetail, meta: { pageType: 2 } }, { path: "/card-list", component: cardList }, { path: "/shop-gps", component: shopGps, meta: { pageType: 2 } }, { path: "/shop-conf", component: shopConf, meta: { pageType: 2 } }, {
    path: "/shop-feedback-list",
    component: shopFeedbackList,
    meta: { pageType: 2, roleFunc: 26 }
  }, {
    path: "/shop-entry-checkins",
    component: shopEntryCheckins,
    meta: { pageType: 2 }
  }, { path: "/shop-param", component: shopParam, meta: { pageType: 2 } }, { path: "/shop-sms-log", component: shopSmsLog, meta: { pageType: 2 } }, { path: "/reminder-conf", component: reminderConf, meta: { pageType: 2 } }, { path: "/venue-booking", component: venueBooking, meta: {} },

  //-- staff pages
  { path: "/staff-home", component: staffHome, meta: { pageType: 2 } }, { path: "/coach-home", component: coachHome, meta: { pageType: 2 } }, { path: "/staff-create", component: staffCreate, meta: { pageType: 2 } }, { path: "/staff-edit/:staffId", component: staffEdit }, {
    path: "/staff-group-lessons/:staffId",
    component: staffGroupLessons,
    meta: { pageType: 2 }
  }, {
    path: "/staff-group-lesson-stat/:staffId",
    component: staffGroupLessonStat,
    meta: { pageType: 2 }
  }, {
    path: "/staff-pc-lesson-stat/:staffId",
    component: staffPcLessonStat,
    meta: { pageType: 2 }
  }, {
    path: "/staff-private-lessons",
    component: staffPrivateLessons,
    meta: { pageType: 2 }
  }, {
    path: "/staff-private-lessons/:staffId",
    component: staffPrivateLessons,
    meta: { pageType: 2 }
  }, {
    path: "/staff-gc-schedules/:staffId",
    component: staffGcSchedules,
    meta: { pageType: 2 }
  }, {
    path: "/staff-pc-schedules",
    component: staffPcSchedules,
    meta: { pageType: 2 }
  }, {
    path: "/staff-pc-schedules/:staffId",
    component: staffPcSchedules,
    meta: { pageType: 2 }
  }, {
    path: "/staff-sales/:staffId",
    component: staffSales,
    meta: { pageType: 2 }
  }, {
    path: "/staff-salary/:staffId",
    component: staffSalary,
    meta: { pageType: 2 }
  }, { path: "/staff-list", component: staffList, meta: { pageType: 2 } }, {
    path: "/coach-worktime/:staffId",
    component: coachWorktime,
    meta: { pageType: 2 }
  }, { path: "/staff-funcs", component: staffFuncs, meta: { pageType: 2 } }, {
    path: "/coach-gl-checkin/:lessonId",
    component: coachGlCheckin,
    meta: { pageType: 2 }
  }, {
    path: "/sales-target-mng",
    component: salesTargetMng,
    meta: { pageType: 2 }
  }, {
    path: "/staff-work-report",
    component: staffWorkReport,
    meta: { pageType: 2 }
  }, {
    path: "/role-permission",
    component: rolePermission,
    meta: { pageType: 2 }
  }, {
    path: "/staff-list-salary",
    component: staffListSalary,
    meta: { pageType: 2 }
  },
  //-- course pages
  { path: "/group-lesson-list", component: groupLessonList }, { path: "/group-lesson-info/:lessonId", component: groupLessonInfo }, { path: "/private-course-list", component: privateCourseList }, { path: "/private-course-info/:courseId", component: privateCourseInfo }, {
    path: "/private-lesson-create/:psId",
    component: privateLessonEdit,
    meta: { pageType: 2 }
  }, {
    path: "/private-lesson-edit/:lessonId/:mplId",
    component: privateLessonEdit
  }, { path: "/group-course-schedules", component: groupCourseSchedules }, { path: "/private-course-schedules", component: privateCourseSchedules }, {
    path: "/private-course-schedule-create",
    component: privateCourseScheduleEdit,
    meta: { pageType: 2 }
  }, {
    path: "/private-course-schedule-create/:memberId/:lessonCnt/:lessonFee/:lessonDates",
    component: privateCourseScheduleEdit,
    meta: { roleFunc: 11 }
  }, {
    path: "/private-course-schedule-edit/:psId",
    component: privateCourseScheduleEdit,
    meta: { pageType: 2 }
  }, {
    path: "/private-lesson-booking",
    component: privateLessonBooking,
    meta: { pageType: 2 }
  }, {
    path: "/private-lesson-booking/:staffId",
    component: privateLessonBooking,
    meta: { pageType: 2 }
  }, {
    path: "/shop-group-lesson-query/:queryDate",
    component: shopGroupLessonQuery,
    meta: { pageType: 2 }
  }, {
    path: "/shop-private-lesson-query",
    component: shopPrivateLessonQuery,
    meta: { pageType: 2, roleFunc: 52 }
  }, {
    path: "/shop-private-lesson-query/:queryDate",
    component: shopPrivateLessonQuery,
    meta: { pageType: 2, roleFunc: 52 }
  }, {
    path: "/pclesson-cancel-log",
    component: pcLessonCancelLog,
    meta: { pageType: 2 }
  }, { path: "/group-lesson-table", component: groupLessonTable, meta: {} }, {
    path: "/group-lesson-table-export",
    component: groupLessonTableExport,
    meta: {}
  }, {
    path: "/private-lesson-share/:lessonId/:psId",
    component: privateLessonShare
  }, { path: "/ps-train-plan-share/:psId/:planId", component: psTrainPlanShare }, {
    path: "/ps-train-plan-list-share/:psId",
    component: psTrainPlanListShare
  }, {
    path: "/group-course-schedule-edit/:csId",
    component: groupCourseScheduleEdit,
    meta: { roleFunc: 11 }
  }, {
    path: "/group-course-schedule-create/",
    component: groupCourseScheduleEdit,
    meta: { roleFunc: 11 }
  }, { path: "/lesson-booking-conf", component: lessonBookingConf }, { path: "/group-course", component: groupCourse }, {
    path: "/group-course-create",
    component: groupCourseEdit,
    meta: { roleFunc: 11 }
  }, {
    path: "/group-course-edit/:courseId",
    component: groupCourseEdit,
    meta: { roleFunc: 11 }
  }, { path: "/private-course", component: privateCourse }, {
    path: "/private-course-create",
    component: privateCourseEdit,
    meta: { roleFunc: 11 }
  }, {
    path: "/private-course-edit/:courseId",
    component: privateCourseEdit,
    meta: { roleFunc: 11 }
  },

  //-- member pages
  { path: "/member-my", component: memberMore, meta: { pageType: 3 } }, // 为了兼容之前的路径名，一周后要去除（@2019-8-4）
  { path: "/member-more", component: memberMore, meta: { pageType: 3 } }, { path: "/member-home", component: memberHome, meta: { pageType: 3 } }, { path: "/member-query", component: memberQuery, meta: { pageType: 2 } }, {
    path: "/member-base/:memberId",
    component: memberBase,
    meta: { pageType: 2 }
  }, {
    path: "/member-card-list/:memberId",
    component: memberCardList,
    meta: { pageType: 2 }
  }, {
    path: "/member-group-lessons/:memberId",
    component: memberGroupLessons,
    meta: { pageType: 2 }
  }, {
    path: "/member-private-lessons/:memberId",
    component: memberPrivateLessons,
    meta: { pageType: 2 }
  }, {
    path: "/member-follows/:memberId",
    component: memberFollows,
    meta: { pageType: 2 }
  }, {
    path: "/member-entry-checkins/:memberId",
    component: memberEntryCheckins,
    meta: { pageType: 2 }
  }, {
    path: "/member-fitness-photo/:memberId",
    component: memberFitnessPhoto,
    meta: { pageType: 2 }
  }, {
    path: "/member-body-test/:memberId",
    component: memberBodyTest,
    meta: { pageType: 2 }
  }, {
    path: "/member-feedback-list",
    component: memberFeedbackList,
    meta: { pageType: 3 }
  }, {
    path: "/member-private-lesson-booking",
    component: memberPrivateLessonBooking,
    meta: { pageType: 3 }
  }, {
    path: "/member-pl-booking-by-week/:coachId/:psIdx",
    component: memberPlBookingByWeek,
    meta: { pageType: 3 }
  }, {
    path: "/member-pl-booking-by-day/:coachId/:psIdx",
    component: memberPlBookingByDay,
    meta: { pageType: 3 }
  }, {
    path: "/member-gl-checkin/:lessonId",
    component: memberGlCheckin,
    meta: { pageType: 3 }
  }, {
    path: "/member-pl-checkin",
    component: memberPlCheckin,
    meta: { pageType: 3 }
  }, {
    path: "/member-pl-checkin-list-today",
    component: memberPlCheckinListToday,
    meta: { pageType: 3 }
  }, { path: "/member-entry-checkin", component: memberEntryCheckin, meta: {} }, { path: "/my-card-list", component: myCardList, meta: { pageType: 3 } }, {
    path: "/my-group-lessons",
    component: myGroupLessons,
    meta: { pageType: 3 }
  }, {
    path: "/my-private-lessons",
    component: myPrivateLessons,
    meta: { pageType: 3 }
  }, {
    path: "/my-entry-checkins",
    component: myEntryCheckins,
    meta: { pageType: 3 }
  }, { path: "/my-points", component: myPoints, meta: { pageType: 3 } }, {
    path: "/my-fitness-photo",
    component: myFitnessPhoto,
    meta: { pageType: 3 }
  }, { path: "/my-body-test", component: myBodyTest, meta: { pageType: 3 } }, { path: "/my-hrs", component: myHrs, meta: {} }, { path: "/my-run", component: myRun, meta: {} }, {
    path: "/member-card-sale/:cardId",
    component: memberCardSale,
    meta: { pageType: 3 }
  }, { path: "/member-score-test-rank", component: memberScoreTestRank }, { path: "/member-photo-share/:memberId", component: memberPhotoShare }, { path: "/member-create", component: memberCreate, meta: { roleFunc: 12 } }, { path: "/member-draft-edit", component: memberDraftEdit, meta: {} }, { path: "/member-draft-edit/:mdId", component: memberDraftEdit, meta: {} }, { path: "/member-draft-query", component: memberDraftQuery, meta: {} }, {
    path: "/member-card-draft-query",
    component: memberCardDraftQuery,
    meta: {}
  }, { path: "/member-card-query", component: memberCardQuery }, { path: "/member-action-query", component: memberActionQuery }, { path: "/member-info/:memberId", component: memberInfo }, { path: "/chart-test", component: chartTest }, { path: "/member-test-type", component: memberTestType }, {
    path: "/member-comprehensive-score",
    component: memberComprehensiveScore
  }, { path: "/member-test-score", component: memberTestScore }, { path: "/member-hrs/:memberId", component: memberHrs }, { path: "/member-health-report/:memberId", component: memberHealthReport }, {
    path: "/health-report/:btId",
    component: r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(845))).bind(null, __webpack_require__)).catch(__webpack_require__.oe)
  }, {
    path: "/member-health-report-list",
    component: r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(867))).bind(null, __webpack_require__)).catch(__webpack_require__.oe)
  }, { path: "/mt-verify-coupon", component: mtVerifyCoupon }, { path: "/mt-verify-coupon-list", component: mtVerifyCouponList }, { path: "/dy-verify-coupon", component: dyVerifyCoupon }, { path: "/dy-verify-coupon-list", component: dyVerifyCouponList }, { path: "/mt-sync-bind", component: mtSyncBind, meta: { roleFunc: 122 } }, { path: "/dy-sync-bind", component: dySyncBind, meta: { roleFunc: 123 } },
  // 分期付款
  {
    path: "/instalment-list",
    component: instalmentList,
    meta: { roleFunc: 128 }
  }, {
    path: "/instalment-create",
    component: instalmentCreate,
    meta: { roleFunc: 126 }
  }, {
    path: "/instalment-detail/:id",
    component: instalmentDetail,
    meta: { roleFunc: 128 }
  }, {
    path: "/instalment-product",
    component: instalmentProduct,
    meta: { roleFunc: 130 }
  }, {
    path: "/instalment-product-create",
    component: instalmentProductCreate,
    meta: { roleFunc: 129 }
  }, {
    path: "/instalment-product-edit/:productId",
    component: instalmentProductCreate,
    meta: { roleFunc: 129 }
  }, {
    path: "/instalment-stat",
    component: instalmentStat,
    meta: { roleFunc: 128 }
  }, { path: "/member-annual-report", component: memberAnnualReport }, { path: "/member-heart-rate-rank", component: memberHeartRateRank },

  //-- mach pages
  { path: "/login-for-imstlife", component: loginForImstlife }, { path: "/locker-for-imstlife", component: lockerForImstlife }, { path: "/bathroom-for-imstlife", component: bathroomForImstlife }, {
    path: "/hrs-bind-cust-for-imstlife",
    component: hrsBindCustForImstlife,
    meta: { ignoreAuth: true }
  }, {
    path: "/hrs-bind-for-imstlife",
    component: hrsBindForImstlife,
    meta: { unloginRedirectPage: "/hrs-bind-cust-for-imstlife" }
  }, {
    path: "/run-bind-cust-for-imstlife",
    component: runBindCustForImstlife,
    meta: { ignoreAuth: true }
  }, {
    path: "/run-bind-for-imstlife",
    component: runBindForImstlife,
    meta: { unloginRedirectPage: "/run-bind-cust-for-imstlife" }
  }, {
    path: "/user-hrs-for-share",
    component: userHrsForShare,
    meta: { ignoreAuth: true }
  }, {
    path: "/user-run-for-share",
    component: userRunForShare,
    meta: { ignoreAuth: true }
  }, {
    path: "/auth-user-for-imstlife",
    component: authUserForImstlife,
    meta: {}
  }, {
    path: "/member-auto-renew",
    component: memberAutoRenew,
    meta: { pageType: 3 }
  }, { path: "/member-label-setting", component: memberLabelSetting },
  // 学员端
  { path: "/member-instalment-product", component: memberInstalmentProduct }, {
    path: "/member-instalment-product-detail/:productId",
    component: memberInstalmentProductDetail
  }, {
    path: "/member-instalment-product-bind/:orderId",
    component: memberInstalmentProductBind
  }, {
    path: "/member-summary",
    component: memberSummary,
    meta: { ignoreAuth: true }
  }, {
    path: "/member-entry-rank",
    component: memberEntryRank,
    meta: { pageType: 3 }
  }, {
    path: "/member-pl-rank",
    component: memberLessonRank,
    meta: {
      pageType: 3
    }
  }, {
    path: "/member-gl-rank",
    component: memberLessonRank,
    meta: {
      pageType: 3
    }
  }, {
    path: "/shop-hrs",
    component: shopHrs,
    meta: { pageType: 2, roleFunc: 35 }
  }, { path: "/qrcode-mach-checkin", component: qrcodeMachCheckin, meta: {} }, {
    path: "/venue-area-booking-checkout",
    component: venueAreaBookingCheckout,
    meta: { pageType: 3 }
  }, { path: "/ai-mach-entrance", component: aiMachEntrance, meta: {} },

  //-- stat pages
  { path: "/stat-home", component: statHome, meta: { pageType: 2 } }, {
    path: "/shop-stat-member",
    component: statMember,
    meta: { roleFunc: 15 }
  }, {
    path: "/shop-stat-member-entry",
    component: statMemberEntry,
    meta: { roleFunc: 15 }
  }, {
    path: "/shop-stat-member-points",
    component: statMemberPoints,
    meta: { roleFunc: 15 }
  }, {
    path: "/shop-stat-member-lesson",
    component: statMemberLesson,
    meta: { roleFunc: 15 }
  }, {
    path: "/shop-stat-member-payment",
    component: statMemberPayment,
    meta: { roleFunc: 15 }
  }, {
    path: "/shop-stat-member-source",
    component: statMemberSource,
    meta: { roleFunc: 15 }
  }, { path: "/shop-stat-staff", component: statSales, meta: { roleFunc: 23 } }, { path: "/shop-stat-sales", component: statSales, meta: { roleFunc: 23 } }, {
    path: "/shop-stat-group-coach",
    component: statGroupCoach,
    meta: { roleFunc: 23 }
  }, {
    path: "/shop-stat-private-coach",
    component: statPrivateCoach,
    meta: { roleFunc: 23 }
  }, { path: "/shop-stat-course", component: statGroupCourse, meta: {} }, {
    path: "/shop-stat-group-course",
    component: statGroupCourse,
    meta: { roleFunc: 22 }
  }, {
    path: "/shop-stat-private-course",
    component: statPrivateCourse,
    meta: { roleFunc: 22 }
  }, { path: "/shop-stat-card", component: statCard, meta: { roleFunc: 24 } }, {
    path: "/shop-stat-revenue",
    component: statRevenue,
    meta: { roleFunc: 25 }
  }, {
    path: "/shop-stat-report",
    component: statReport,
    meta: { roleFunc: 28 }
  }, {
    path: "/shop-stat-member-checkin-days",
    component: statMemberCheckinDays,
    meta: { roleFunc: 15 }
  }, {
    path: "/shop-stat-member-private-lesson",
    component: statMemberPrivateLesson,
    meta: { roleFunc: 15 }
  }, {
    path: "/shop-stat-member-more",
    component: statMemberMore,
    meta: { roleFunc: 15 }
  }, {
    path: "/shop-stat-sales-target",
    component: statSalesTarget,
    meta: { roleFunc: 23 }
  }, { path: "/stat-data-report", component: statDataReport, meta: {} },

  //-- cust pages
  { path: "/cust-query", component: custQuery, meta: { pageType: 2 } }, {
    path: "/cust-create",
    component: custEdit,
    meta: { pageType: 2, roleFunc: 18 }
  }, {
    path: "/cust-edit/:custId",
    component: custEdit,
    meta: { pageType: 2, roleFunc: 19 }
  }, {
    path: "/visit-cust-by-day",
    component: visitCustByDay,
    meta: { pageType: 2 }
  }, {
    path: "/cust-follow-task",
    component: custFollowTask,
    meta: { pageType: 2 }
  },

  //-- sys pages
  { path: "/about-us", component: aboutUs }, { path: "/change-skin", component: changeSkin }, { path: "/menu-setting", component: menuSetting },

  //-- market pages
  {
    path: "/market/msite-intro",
    component: msiteIntro,
    meta: { pageType: 2 }
  }, {
    path: "/market/coupon-list",
    component: couponList,
    meta: { pageType: 2 }
  }, {
    path: "/market/coupon-create",
    component: couponCreate,
    meta: { pageType: 2, roleFunc: 31 }
  }, {
    path: "/market/lottery-list",
    component: lotteryList,
    meta: { pageType: 2 }
  }, {
    path: "/market/lottery-create",
    component: lotteryCreate,
    meta: { pageType: 2, roleFunc: 31 }
  }, { path: "/market/groupbuy", component: groupbuy, meta: { pageType: 2 } }, { path: "/market/bargain", component: bargain, meta: { pageType: 2 } }, { path: "/market/seckill", component: seckill, meta: { pageType: 2 } }, { path: "/market/event-list", component: eventList, meta: {} }, { path: "/market/event-detail", component: eventDetail, meta: {} }, {
    path: "/market/event-check-statistics",
    component: eventCheckStatistics,
    meta: {}
  }, { path: "/market/event-enroll-list", component: eventEnrollList, meta: {} },
  // {path: '/market/event-check-joiner', component: eventCheckJoiner, meta: {}},
  { path: "/share-item-list", component: shareItemList, meta: {} }, { path: "/share-item-page/:itemId", component: shareItemPage, meta: {} }, { path: "/share-item-receiver", component: shareItemReceiver, meta: {} }, { path: "/market/event-poster", component: eventPoster, meta: {} }, { path: "/market/event-poster-eidt", component: eventPosterEdit, meta: {} }, { path: "/market/recharge-card", component: rechargeCard, meta: {} },
  // 散客
  { path: "/market/fit-entry-ticket", component: fitEntryTicket, meta: {} },

  //-- mall pages
  { path: "/mall/product-list", component: mallProductList, meta: {} }, { path: "/mall/product/:productId", component: mallProduct, meta: {} }, {
    path: "/mall/shopping-cart",
    component: mallShoppingCart,
    meta: { pageType: 3 }
  }, {
    path: "/mall/product-pay",
    component: mallProductPay,
    meta: { pageType: 3 }
  }, {
    path: "/mall/member-mall-order",
    component: memberMallOrder,
    meta: { pageType: 3 }
  },
  //-- more pages
  {
    path: "/sms-task",
    component: smsTask,
    meta: { pageType: 2, roleFunc: 55 }
  }, {
    path: "/ai-mach-conf",
    component: aiMachConf,
    meta: { pageType: 2, roleFunc: 35 }
  },

  //-- venue pages
  {
    path: "/venue/venue-booking",
    component: venueBooking,
    meta: { pageType: 3 }
  }, {
    path: "/venue/venue-booking1",
    component: venueBooking1,
    meta: { pageType: 3 }
  }, {
    path: "/venue/member-venue-bookings",
    component: memberVenueBookings,
    meta: { pageType: 3 }
  },
  // test
  {
    path: "/test-select",
    component: r => __webpack_require__.e/* require.ensure */(14).then((() => r(__webpack_require__(777))).bind(null, __webpack_require__)).catch(__webpack_require__.oe)
  }, {
    path: "/test-table",
    component: r => __webpack_require__.e/* require.ensure */(14).then((() => r(__webpack_require__(778))).bind(null, __webpack_require__)).catch(__webpack_require__.oe)
  }, {
    path: "/test-editor",
    component: r => __webpack_require__.e/* require.ensure */(14).then((() => r(__webpack_require__(779))).bind(null, __webpack_require__)).catch(__webpack_require__.oe)
  }, {
    path: "/test-page",
    component: r => __webpack_require__.e/* require.ensure */(14).then((() => r(__webpack_require__(780))).bind(null, __webpack_require__)).catch(__webpack_require__.oe)
  }],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(savedPosition);
        }, 200);
      });
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  // if (to.path === "/health-report") next();
  // check page permition
  if (to.meta && to.meta.pageType) {
    if (to.meta.pageType === PAGE_TYPE.PAGE_FOR_TENANT) {
      if (!$.data.user.isTenantOwner) {
        $.Msg.error($.Lang.NO_PAGE_PERMITION + " 1");
        next({
          path: "/user-login" + getLoginParam(),
          query: { redirect: to.fullPath }
        });
        return;
      }
    } else if (to.meta.pageType === PAGE_TYPE.PAGE_FOR_STAFF) {
      if (!$.data.user.staffId && !$.data.user.isShopOwner) {
        if ($.data.user.uid) {
          alert($.Lang.NO_STAFF_PAGE_PERMIT);
        }
        next({
          path: "/user-login" + getLoginParam(),
          query: { redirect: to.fullPath }
        });
        return;
      }
    } else if (to.meta.pageType === PAGE_TYPE.PAGE_FOR_MEMBER) {
      if (!$.data.user.memberId) {
        if ($.data.user.uid && $.data.shopList && $.data.shopList.length === 1) {
          alert($.Lang.NO_MEMBER_PAGE_PERMIT + " : " + $.data.user.uname);
        }
        next({
          path: "/user-login" + getLoginParam(),
          query: { redirect: to.fullPath }
        });
        return;
      }
    }
  }

  if (to.meta && to.meta.ignoreAuth) {
    next();
  } else {
    if ($.data.user && $.data.user.uid) {
      if ($.data.user.staffId) {
        // 角色权限检查
        if (checkRoleFunc(to)) {
          next();
        } else {
          alert($.Lang.NO_ROLE_FUNC + "（" + findRoleFuncName(to) + "）");
        }
      } else if ($.data.user.memberId || $.data.user.isTenantOwner) {
        next();
      } else {
        alert($.Lang.NO_PAGE_PERMITION);
        let query = {};
        if (to.meta && to.meta.unloginRedirectPage) {
          query = {
            redirect: to.fullPath,
            unloginRedirect: to.meta.unloginRedirectPage + getLoginParam()
          };
        } else {
          query = { redirect: to.fullPath };
        }
        next({ path: "/user-login" + getLoginParam(), query: query });
      }
    } else {
      let query = {};
      if (to.meta && to.meta.unloginRedirectPage) {
        query = {
          redirect: to.fullPath,
          unloginRedirect: to.meta.unloginRedirectPage + getLoginParam()
        };
      } else {
        query = { redirect: to.fullPath };
      }
      next({ path: "/user-login" + getLoginParam(), query: query });
    }
  }
});

router.afterEach(() => {
  //window.scrollTo(0, 0);
});

function checkRoleFunc(to) {
  if (to.meta && to.meta.roleFunc) {
    return $.Util.hasRoleFunc(to.meta.roleFunc);
  } else {
    return true;
  }
}

function findRoleFuncName(to) {
  let roleFunc = to.meta.roleFunc;
  for (let k in $.Dict.RoleFunc) {
    if ($.Dict.RoleFunc[k].value === roleFunc) {
      return $.Dict.RoleFunc[k].name;
    }
  }
  return "";
}

function getLoginParam() {
  let loginParam = "";
  let paramPos = location.href.indexOf("?");
  if (paramPos > 0) {
    loginParam = location.href.substring(paramPos);
  }

  return loginParam;
}



/***/ }),

/***/ 345:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(556)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(388),
  /* template */
  __webpack_require__(713),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(553)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(389),
  /* template */
  __webpack_require__(710),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(559)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(390),
  /* template */
  __webpack_require__(718),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-f26b3698",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(557)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(395),
  /* template */
  __webpack_require__(715),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-bc6ad3aa",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(549)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(397),
  /* template */
  __webpack_require__(706),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-001a187c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(551)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(398),
  /* template */
  __webpack_require__(708),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-25935f24",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(555)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(399),
  /* template */
  __webpack_require__(712),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-38a36175",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(401),
  /* template */
  __webpack_require__(714),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(402),
  /* template */
  __webpack_require__(717),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 375:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return offset_default; });
// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/utils/math.js
var round = Math.round;

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/utils/format.js
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return [].concat(args).reduce(function(p, c) {
    return p.replace(/%s/, c);
  }, str);
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/utils/validateModifiers.js
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function validateModifiers(modifiers) {
  modifiers.forEach(function(modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function(key) {
      switch (key) {
        case "name":
          if (typeof modifier.name !== "string") {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
          }
          break;
        case "enabled":
          if (typeof modifier.enabled !== "boolean") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
          }
          break;
        case "phase":
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
          }
          break;
        case "fn":
          if (typeof modifier.fn !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "effect":
          if (modifier.effect != null && typeof modifier.effect !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "requires":
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
          }
          break;
        case "requiresIfExists":
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
          }
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
            return '"' + s + '"';
          }).join(", ") + '; but "' + key + '" was provided.');
      }
      modifier.requires && modifier.requires.forEach(function(requirement) {
        if (modifiers.find(function(mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/utils/uniqueBy.js
function uniqueBy(arr, fn2) {
  var identifiers = /* @__PURE__ */ new Set();
  return arr.filter(function(item) {
    var identifier = fn2(item);
    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/createPopper.js
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference,
        popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        if (true) {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);
          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function(_ref2) {
              var name = _ref2.name;
              return name === "flip";
            });
            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
            }
          }
          var _getComputedStyle = getComputedStyle(popper), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
          if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
          }
        }
        runModifierEffects();
        return instance.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference2 = _state$elements.reference, popper2 = _state$elements.popper;
        if (!areValidElements(reference2, popper2)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference2, getOffsetParent(popper2), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper2)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;
            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference, popper)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect3 = _ref3.effect;
        if (typeof effect3 === "function") {
          var cleanupFn = effect3({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x = _ref.x, y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if (true) {
    var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || "";
    if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
    }
  }
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect2,
  requires: ["computeStyles"]
};

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});

// ../../node_modules/.pnpm/@popperjs+core@2.11.6/node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};



/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_debounce__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_resize_detector__ = __webpack_require__(603);
//
//
//
//
//
//
//
//
//
//
//





// enumerating ECharts events for now
const EVENTS = ['legendselectchanged', 'legendselected', 'legendunselected', 'legendscroll', 'datazoom', 'datarangeselected', 'timelinechanged', 'timelineplaychanged', 'restore', 'dataviewchanged', 'magictypechanged', 'geoselectchanged', 'geoselected', 'geounselected', 'pieselectchanged', 'pieselected', 'pieunselected', 'mapselectchanged', 'mapselected', 'mapunselected', 'axisareaselected', 'focusnodeadjacency', 'unfocusnodeadjacency', 'brush', 'brushselected', 'rendered', 'finished', 'click', 'dblclick', 'mouseover', 'mouseout', 'mousemove', 'mousedown', 'mouseup', 'globalout', 'contextmenu'];

const ZR_EVENTS = ['click', 'mousedown', 'mouseup', 'mousewheel', 'dblclick', 'contextmenu'];

const INIT_TRIGGERS = ['theme', 'initOptions', 'autoresize'];
const REWATCH_TRIGGERS = ['manualUpdate', 'watchShallow'];

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    options: Object,
    theme: [String, Object],
    initOptions: Object,
    group: String,
    autoresize: Boolean,
    watchShallow: Boolean,
    manualUpdate: Boolean
  },
  data() {
    return {
      lastArea: 0
    };
  },
  watch: {
    group(group) {
      this.chart.group = group;
    }
  },
  methods: {
    // provide an explicit merge option method
    mergeOptions(options, notMerge, lazyUpdate) {
      if (this.manualUpdate) {
        this.manualOptions = options;
      }

      if (!this.chart) {
        this.init(options);
      } else {
        this.delegateMethod('setOption', options, notMerge, lazyUpdate);
      }
    },
    // just delegates ECharts methods to Vue component
    // use explicit params to reduce transpiled size for now
    appendData(params) {
      this.delegateMethod('appendData', params);
    },
    resize(options) {
      this.delegateMethod('resize', options);
    },
    dispatchAction(payload) {
      this.delegateMethod('dispatchAction', payload);
    },
    convertToPixel(finder, value) {
      return this.delegateMethod('convertToPixel', finder, value);
    },
    convertFromPixel(finder, value) {
      return this.delegateMethod('convertFromPixel', finder, value);
    },
    containPixel(finder, value) {
      return this.delegateMethod('containPixel', finder, value);
    },
    showLoading(type, options) {
      this.delegateMethod('showLoading', type, options);
    },
    hideLoading() {
      this.delegateMethod('hideLoading');
    },
    getDataURL(options) {
      return this.delegateMethod('getDataURL', options);
    },
    getConnectedDataURL(options) {
      return this.delegateMethod('getConnectedDataURL', options);
    },
    clear() {
      this.delegateMethod('clear');
    },
    dispose() {
      this.delegateMethod('dispose');
    },
    delegateMethod(name, ...args) {
      if (!this.chart) {
        this.init();
      }
      return this.chart[name](...args);
    },
    delegateGet(methodName) {
      if (!this.chart) {
        this.init();
      }
      return this.chart[methodName]();
    },
    getArea() {
      return this.$el.offsetWidth * this.$el.offsetHeight;
    },
    init(options) {
      if (this.chart) {
        return;
      }

      let chart = __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.init(this.$el, this.theme, this.initOptions);

      if (this.group) {
        chart.group = this.group;
      }

      chart.setOption(options || this.manualOptions || this.options || {}, true);

      // expose ECharts events as custom events
      EVENTS.forEach(event => {
        chart.on(event, params => {
          this.$emit(event, params);
        });
      });

      ZR_EVENTS.forEach(event => {
        chart.getZr().on(event, params => {
          this.$emit(`zr:${event}`, params);
        });
      });

      if (this.autoresize) {
        this.lastArea = this.getArea();
        this.__resizeHandler = __WEBPACK_IMPORTED_MODULE_1_lodash_debounce___default()(() => {
          if (this.lastArea === 0) {
            // emulate initial render for initially hidden charts
            this.mergeOptions({}, true);
            this.resize();
            this.mergeOptions(this.options || this.manualOptions || {}, true);
          } else {
            this.resize();
          }
          this.lastArea = this.getArea();
        }, 100, { leading: true });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_resize_detector__["a" /* addListener */])(this.$el, this.__resizeHandler);
      }

      Object.defineProperties(this, {
        // Only recalculated when accessed from JavaScript.
        // Won't update DOM on value change because getters
        // don't depend on reactive values
        width: {
          configurable: true,
          get: () => {
            return this.delegateGet('getWidth');
          }
        },
        height: {
          configurable: true,
          get: () => {
            return this.delegateGet('getHeight');
          }
        },
        isDisposed: {
          configurable: true,
          get: () => {
            return !!this.delegateGet('isDisposed');
          }
        },
        computedOptions: {
          configurable: true,
          get: () => {
            return this.delegateGet('getOption');
          }
        }
      });

      this.chart = chart;
    },
    initOptionsWatcher() {
      if (this.__unwatchOptions) {
        this.__unwatchOptions();
        this.__unwatchOptions = null;
      }

      if (!this.manualUpdate) {
        this.__unwatchOptions = this.$watch('options', (val, oldVal) => {
          if (!this.chart && val) {
            this.init();
          } else {
            // mutating `options` will lead to merging
            // replacing it with new reference will lead to not merging
            // eg.
            // `this.options = Object.assign({}, this.options, { ... })`
            // will trigger `this.chart.setOption(val, true)
            // `this.options.title.text = 'Trends'`
            // will trigger `this.chart.setOption(val, false)`
            this.chart.setOption(val, val !== oldVal);
          }
        }, { deep: !this.watchShallow });
      }
    },
    destroy() {
      if (this.autoresize) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_resize_detector__["b" /* removeListener */])(this.$el, this.__resizeHandler);
      }
      this.dispose();
      this.chart = null;
    },
    refresh() {
      if (this.chart) {
        this.destroy();
        this.init();
      }
    }
  },
  created() {
    this.initOptionsWatcher();

    INIT_TRIGGERS.forEach(prop => {
      this.$watch(prop, () => {
        this.refresh();
      }, { deep: true });
    });

    REWATCH_TRIGGERS.forEach(prop => {
      this.$watch(prop, () => {
        this.initOptionsWatcher();
        this.refresh();
      });
    });
  },
  mounted() {
    // auto init if `options` is already provided
    if (this.options) {
      this.init();
    }
  },
  activated() {
    if (this.autoresize) {
      this.chart && this.chart.resize();
    }
  },
  destroyed() {
    if (this.chart) {
      this.destroy();
    }
  },
  connect(group) {
    if (typeof group !== 'string') {
      group = group.map(chart => chart.chart);
    }
    __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.connect(group);
  },
  disconnect(group) {
    __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.disConnect(group);
  },
  registerMap(mapName, geoJSON, specialAreas) {
    __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.registerMap(mapName, geoJSON, specialAreas);
  },
  registerTheme(name, theme) {
    __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.registerTheme(name, theme);
  },
  graphic: __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.graphic
});

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vconsole__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vconsole___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vconsole__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_float_menu_vue__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_float_menu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_float_menu_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//

// VConsole 手机版控制台


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "app",
  components: { FloatMenu: __WEBPACK_IMPORTED_MODULE_1__components_float_menu_vue___default.a },
  data() {
    return {
      u: $.data.user
    };
  },
  watch: {},

  mounted: function () {
    new __WEBPACK_IMPORTED_MODULE_0_vconsole___default.a({
      defaultPlugins: ["system", "network", "element", "storage"]
    });

    // 注册一个更新user的方法
    this.$nextTick(() => {
      $.Dlg.vue.$on("updateUser", () => {
        this.u = $.data.user;
      });
    });

    let theme = 1;
    __webpack_require__(754)("./theme" + theme + ".css");
    let skinTheme = this.getCookie("skin");
    document.getElementsByTagName("body")[0].className = skinTheme;

    if (skinTheme == "theme-" || skinTheme == null) {
      this.iconSkinIdx = "yel";
    } else if (skinTheme == "theme-black") {
      this.iconSkinIdx = "black";
    } else if (skinTheme == "theme-pink") {
      this.iconSkinIdx = "pink";
    }
    $.data.themeIconSkin = this.iconSkinIdx;
  },

  methods: {
    getCookie(name) {
      var arr,
          reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"); //匹配字段
      if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
      } else {
        return null;
      }
    }
  }
});

/***/ }),

/***/ 390:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "tab",
    props: {
        tabListProp: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            tabActive: 0
        };
    },
    methods: {
        queryList(idx) {
            this.tabActive = idx;
            this.$emit('queryListPar', idx);
        }
    }
});

/***/ }),

/***/ 391:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    menu: {
      type: String,
      required: false
    },
    showOurCorp: {
      type: Boolean,
      default: false
    },
    showSlogan: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      g: window.$,
      u: $.data.user,
      isShopOwner: $.data.user.isShopOwner,
      staffId: $.data.user.staffId,
      sysMenus: $.data.user.staffMobileMenus,
      mobileMenusDict: {
        0: {
          menu: "home",
          name: "首页",
          icon: "iconshouyeicon",
          link: "member-home"
        },
        1: {
          menu: "gl-booking",
          name: "约团课",
          icon: "icontuankepaike",
          link: "group-lesson-list"
        },
        2: {
          menu: "pl-booking",
          name: "约私教",
          icon: "iconsijiaopaike",
          link: "member-private-lesson-booking"
        },
        3: {
          menu: "mall",
          name: "微商城",
          icon: "iconweishangchengicon",
          link: "mall/product-list"
        },
        4: {
          menu: "member-card",
          name: "会员卡",
          icon: "iconhuiyuanqia",
          link: "my-card-list"
        },
        5: {
          menu: "mpl-record",
          name: "私教课记录",
          icon: "iconsijiaokejilu",
          link: "my-private-lessons"
        },
        6: {
          menu: "ml-record",
          name: "团课记录",
          icon: "icontuankejilu",
          link: "my-group-lessons"
        },
        7: {
          menu: "mec-record",
          name: "入场记录",
          icon: "iconruchangjilu",
          link: "my-entry-checkins"
        },
        8: {
          menu: "venue-booking",
          name: "场地预约",
          icon: "iconchangdiyuyue",
          link: "venue/venue-booking"
        },
        9: {
          menu: "member-photo",
          name: "会员相册",
          icon: "iconyuetuankeicon",
          link: "my-fitness-photo"
        },
        10: {
          menu: "member-test",
          name: "测试记录",
          icon: "iconceshijilu",
          link: "my-body-test"
        },
        11: {
          menu: "hrs-record",
          name: "心率数据",
          icon: "iconxinshuaishuju",
          link: "my-hrs"
        },
        12: {
          menu: "member-points-rank",
          name: "积分排名",
          icon: "iconceshipaihangbang",
          link: "member-points-rank"
        },
        13: {
          menu: "member-hr-rank",
          name: "心率排名",
          icon: "icon-heartrate-yel",
          link: "member-heart-rate-rank"
        },
        14: {
          menu: "member-instalment-product",
          name: "阶段付",
          icon: "iconphasedpayment-yel",
          link: "member-instalment-product"
        },
        99: {
          menu: "my",
          name: "更多",
          icon: "icongengduoicon",
          link: "member-more"
        }
      },
      mobileClientMenus: null,
      staffDefineMenuList: $.Dict.staffDefineMenuList,
      staffMobileMenusArr: [], // 新增用于自定义菜单
      custom: {
        home: "",
        more: ""
      }
    };
  },

  watch: {
    sysMenus: {
      immediate: true,
      deep: true,
      handler(newVal) {
        if (newVal) {
          let arr = newVal.split(",");
          this.$nextTick(() => {
            this.resetBottomMenu(arr);
          });
        }
      }
    }
  },

  created() {
    this.staffDefineMenuList.forEach(item => {
      item.title = null;
    });
    if (this.u.memberId) {
      if ($.data.misc.memberBottomMenus) {
        this.mobileClientMenus = $.data.misc.memberBottomMenus;
      } else {
        this.queryShopArgs();
      }
    }
  },

  methods: {
    onSelect(action) {
      this.$router.push(action.link);
    },
    resetBottomMenu(param) {
      // let base = param.map((m) => Number(m)).filter((v) => v === v);
      // let menu = base.map((b) => {
      //   return this.staffDefineMenuList.find((c) => c.id == b);
      // });

      // 优化写法
      let menu = [];
      param.forEach(item => {
        const arr1 = item.split(":");
        const arr2 = item.split(";");
        // 自定义的首页名称
        if (arr1[0] == 101) {
          this.custom.home = arr1[1];
          return;
        }
        // 自定义的更多名称
        if (arr1[0] == 102) {
          this.custom.more = arr1[1];
          return;
        }
        let menuMap;
        if (arr1.length && arr2.length < 2) {
          let list = this.staffDefineMenuList.find(c => c.id == arr1[0]);
          menuMap = Object.assign({}, list);
          if (arr1[1]) {
            menuMap.title = arr1[1];
          }
        }
        if (arr2.length > 1) {
          const obj = {
            icon: "icongengduo2",
            isChildList: true,
            title: arr2[0],
            children: [],
            showPopover: false
          };
          arr2.forEach((cItem, idx) => {
            let arr3 = cItem.split(":");
            if (idx !== 0) {
              let list = this.staffDefineMenuList.find(c => c.id == arr3[0]);
              if (arr3[1]) {
                list.title = arr3[1];
              }
              obj.children.push(list);
            }
          });
          menuMap = obj;
        }
        if (menuMap.icon) {
          menu.push(menuMap);
        }
      });
      this.staffMobileMenusArr = menu;
    },

    queryShopArgs() {
      let args = {
        typeIdList: [2051]
      };
      $.Req.service($.SvName.SHOP_ARG_QUERY, args, ret => {
        for (let t of ret.argList) {
          if (t.typeId === 2051) {
            if (t.typeValue) {
              // 底部菜单
              //   t.typeValue = "0:首页,1:约团课,2:约私教,14:阶段付,99:更多";

              this.mobileClientMenus = [];
              for (let conf of t.typeValue.split(",")) {
                let items = conf.split(":");
                this.mobileClientMenus.push({
                  id: parseInt(items[0]),
                  name: items[1]
                });
              }
              $.data.misc.memberBottomMenus = this.mobileClientMenus;
            }
          }
        }
      });
    }
  }
});

/***/ }),

/***/ 392:
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

const FLOAT_MENU_KEY = "float-point";
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: {},
  data() {
    return {
      g: $,
      winWidth: null,
      winHeight: null,
      menuTimer: null,
      rightMenuDlg: false,
      openRightMenu: 0,
      touchStarTime: null,
      touchEndTime: null,
      openMenusKey: null,
      activeMenu: null,
      u: $.data.user,
      theme: $.Util.cookie.get("skin") || null,
      floatPoints: [],
      rightMenuName: {
        member: {
          name: "会员",
          icon: "icon-member",
          _default_: "member-query",
          children: [{ link: "member-query", name: "会员查询" }, { link: "member-create", name: "新建会员", roleFunc: 12 }, { link: "member-card-query", name: "会员卡查询" }, { link: "member-action-query", name: "锻炼查询" }, { link: "member-batch-opt", name: "批量操作", isHide: true }, {
            link: "member-notice",
            name: "消息提醒",
            roleFunc: 5,
            isHide: true
          }, {
            link: "member-opt-log",
            name: "操作日志",
            isHide: true,
            roleFunc: 12
          }, { link: "member-test-type", name: "会员测试", roleFunc: 30 }, { link: "member-follow-query", name: "跟进查询", isHide: true }]
        },
        cust: {
          name: "客户",
          icon: "icon-customer",
          _default_: "cust-query",
          children: [{ link: "cust-query", name: "客户查询" }, { link: "cust-create", name: "新建客户", roleFunc: 18 }, { link: "cust-follow-task", name: "跟进任务" }, { link: "cust-follow-query", name: "跟进记录", isHide: true }, { link: "cust-follow-stat", name: "跟进统计", isHide: true }, {
            link: "cust-import",
            name: "客户导入",
            isHide: true,
            roleFunc: 18
          }, { link: "cust-more-opt", name: "更多操作", isHide: true }]
        },
        course: {
          name: "课程",
          icon: "icon-Privateeducationcourses",
          _default_: "group-lesson-table",
          children: [{ link: "group-lesson-table", name: "团课课表" }, { link: "group-course-schedules", name: "团课排课", roleFunc: 11 }, { link: "group-course", name: "团课课程" }, {
            link: "shop-private-lesson-query",
            name: "私教课表",
            roleFunc: 52
          }, { link: "private-course-schedules", name: "私教排课" }, { link: "private-course", name: "私教课程" }, { link: "cust-private-lesson", name: "私教体验课", isHide: true }, { link: "lesson-review", name: "课程评价", isHide: true }, { link: "lesson-booking-conf", name: "预约签到设置", roleFunc: 47 }]
        },
        staff: {
          name: "员工",
          icon: "icon-staff",
          _default_: "staff-list",
          children: [{ link: "staff-list", name: "员工查询" }, { link: "staff-create", name: "新建员工", roleFunc: 10 }, { link: "role-permission", name: "角色与权限" }, { link: "coach-type", name: "教练类型", isHide: true }, { link: "department", name: "部门", isHide: true }, { link: "staff-salary-conf", name: "工资设置", isHide: true }, { link: "staff-list-salary", name: "工资列表", roleFunc: 60 }, { link: "sales-target-mng", name: "销售目标设置", roleFunc: 92 }]
        },
        acc: {
          name: "记账",
          icon: "icon-accounting",
          _default_: "product-sale",
          children: [{ link: "product-sale", name: "商品售卖", roleFunc: 17 }, { link: "product-stock", name: "商品库存" }, { link: "product-cate", name: "商品类别", roleFunc: 21 }, { link: "charge-list", name: "记账单", roleFunc: 17 }, { link: "charge-item", name: "资费项", roleFunc: 21 }, { link: "charge-opt-log", name: "账单操作日志", roleFunc: 17 }]
        },
        mall: {
          name: "商城",
          icon: "icon-ShoppingMall",
          _default_: "mall/product-list",
          children: [{ link: "mall/product-list", name: "商城商品", roleFunc: 39 }, { link: "mall/product-cate", name: "商品类别", isHide: true }, {
            link: "mall/product-order",
            name: "商品订单",
            isHide: true,
            roleFunc: 42
          }]
        },
        market: {
          name: "营销",
          icon: "icon-Fulldistribution",
          _default_: "market/msite-intro",
          children: [{ link: "market/msite-intro", name: "微官网" }, { link: "market/coupon-list", name: "电子优惠券" }, { link: "market/lottery-list", name: "幸运抽奖" }, { link: "market/ge-game-list", name: "砸金蛋", isHide: true }, { link: "share-item-list", name: "全员分销" }, { link: "market/groupbuy", name: "拼团" }, { link: "market/bargain", name: "砍价" }, { link: "market/event-list", name: "活动报名" }, { link: "market/seckill", name: "秒杀" }, { link: "market/auto-renew", name: "自助续费卡", isHide: true }, {
            link: "market/fit-entry-ticket",
            name: "散客入场券",
            isHide: true
          }]
        },
        "shop-stat": {
          name: "统计",
          icon: "icon-Statistics",
          _default_: "shop-stat-member",
          children: [{ link: "shop-stat-member", name: "会员统计", roleFunc: 15 }, { link: "shop-stat-staff", name: "员工业绩统计", roleFunc: 23 }, { link: "shop-stat-course", name: "私教课统计", roleFunc: 22 }, { link: "shop-stat-course", name: "团课统计", roleFunc: 34 }, { link: "shop-stat-card", name: "会员卡统计", roleFunc: 24 }, { link: "shop-stat-revenue", name: "收支统计", roleFunc: 25 }, { link: "shop-stat-report", name: "营业额统计", roleFunc: 28 }, { link: "shop-stat-adv", name: "更多统计", isHide: true }]
        },
        "shop-conf": {
          name: "设置",
          icon: "icon-setup",
          _default_: "shop-detail",
          children: [{ link: "shop-detail", name: "门店信息" }, { link: "shop-ground", name: "上课场地", isHide: true }, { link: "shop-card-conf", name: "会员卡种类", isHide: true }, { link: "points-conf", name: "会员积分", isHide: true }, { link: "cust-source", name: "客户来源", roleFunc: 27 }, { link: "entry-checkin-conf", name: "入场签到", isHide: true }, { link: "sms-log", name: "消息记录", isHide: true }, { link: "mobile-usage", name: "手机版", isHide: true }, { link: "set-pos", name: "POS设置", isHide: true }, { link: "shop-more-conf", name: "更多设置", isHide: true }]
        },
        "more-tools": {
          name: "更多",
          icon: "iconmore",
          _default_: "mt-verify-coupon",
          _hide_side_menu_: true,
          children: [{ link: "online-pay-apply", name: "在线支付申请", isHide: true }, { link: "sms-task", name: "短信群发", roleFunc: 55 }, { link: "locker", name: "租柜管理", isHide: true }, {
            link: "local-mach-conf",
            name: "签到消费机管理",
            isHide: true,
            roleFunc: 50
          }, {
            link: "ai-mach-conf",
            name: "智能设备管理",
            roleFunc: 35
          }, { link: "venue-booking", name: "场地预约", isHide: true }, { link: "venue-checkin", name: "场地计时", isHide: true }, { link: "mt-verify-coupon", name: "美团核销", roleFunc: 118 }, { link: "dy-verify-coupon", name: "抖音核销", roleFunc: 120 }, { link: "instalment-list", name: "阶段付", roleFunc: 128 }]
        }
      },
      setPointsTimer: null
    };
  },
  computed: {},
  watch: {
    floatPoints: {
      handler(f) {
        if (f && f.length) {
          const menuDom = this.$refs.floatMenuRefs;
          const [x, y] = f;
          menuDom.style.left = x + "px";
          menuDom.style.top = y + "px";
          clearTimeout(this.setPointsTimer);
          this.setPointsTimer = setTimeout(() => {
            localStorage.setItem(FLOAT_MENU_KEY, f.join(","));
          }, 200);
        }
      },
      deep: true
    },
    "$route.path": {
      handler(path) {
        this.activeMenu = path;
      },
      deep: true,
      immediate: true
    }
  },
  created() {},
  mounted() {
    this.winHeight = document.documentElement.clientHeight;
    this.winWidth = document.documentElement.clientWidth;
    this.initFloatMenu();
  },
  methods: {
    openMenus(m, key) {
      if (this.openMenusKey == key) {
        this.openMenusKey = null;
      } else {
        this.openMenusKey = key;

        // 展开菜单跳转默认地址
        // this.$router.push("/" + m._default_);
        // this.activeMenu = m._default_;
      }
    },

    clickMenu(m) {
      if (m.isHide) return;
      if (!m.roleFunc || $.Util.hasRoleFunc(m.roleFunc)) {
        this.rightMenuDlg = false;
        this.$router.push("/" + m.link);
        this.activeMenu = m.link;
      } else {
        $.Dlg.error("您没有该页面的功能权限");
      }
    },

    initFloatMenu() {
      let menus = this.rightMenuName;
      if (!$.data.shop.hasMall) {
        delete menus.mall;
      }
      if ($.data.shop.hasGroupCourse || $.data.shop.hasPrivateCourse) {
        if (!$.data.shop.hasGroupCourse) {
          const filterMenus = ["团课课表", "团课排课", "团课课程"];
          menus.course.children = menus.course.children.filter(item => {
            const idx = filterMenus.findIndex(name => name == item.name);
            return idx === -1;
          });
          menus.course["_default_"] = "shop-private-lesson-query";
        }
        if (!$.data.shop.hasPrivateCourse) {
          const filterMenus = ["私教课表", "私教排课", "私教课程", "私教体验课"];
          menus.course.children = menus.course.children.filter(item => {
            const idx = filterMenus.findIndex(name => name == item.name);
            return idx === -1;
          });
          menus.course["_default_"] = "group-lesson-table";
        }
      } else {
        delete menus["course"];
      }
      this.rightMenuName = menus;

      this.floatPoints = localStorage.getItem(FLOAT_MENU_KEY) ? localStorage.getItem(FLOAT_MENU_KEY).split(",") : [];
      this.$nextTick(() => {
        this.openRightMenu = +$.Util.cookie.get("open-right-menu");
        // 注册一个更新主题的方法
        $.Dlg.vue.$on("updateTheme", () => {
          this.theme = $.Util.cookie.get("skin") || null;
        });
        $.Dlg.vue.$on("updateRightMenu", value => {
          this.openRightMenu = value;
          $.Util.cookie.set("open-right-menu", value, 100);
        });
      });
    },

    touchstart(e) {
      this.touchStarTime = Date.now();
      const dom = e.target.closest(".float-menu-icon");
      // 记录鼠标按下时的初始位置
      let x = e.changedTouches[0].pageX - dom.offsetLeft;
      let y = e.changedTouches[0].pageY - dom.offsetTop;
      let domW = dom.offsetWidth;
      let domH = dom.offsetHeight;
      dom.classList.add("active");
      document.addEventListener("touchmove", move);
      const that = this;
      function move(e) {
        let floatPoints = that.floatPoints ? that.floatPoints.splice(",") : [];
        let X = e.changedTouches[0].pageX - x;
        let Y = e.changedTouches[0].pageY - y;
        if (0 <= X && X <= that.winWidth - domW) {
          floatPoints[0] = X;
        }
        if (0 <= Y && Y <= that.winHeight - domH) {
          floatPoints[1] = Y;
        }
        that.floatPoints = floatPoints;
      }
      // 鼠标弹起，就让鼠标移动事件移除
      document.addEventListener("touchend", () => {
        dom.classList.remove("active");
        this.touchEndTime = Date.now();
        // 判断 触摸间隔 是否为点击事件
        const time = this.touchEndTime - this.touchStarTime;
        if (time <= 200) {
          this.rightMenuDlg = true;
        }
        document.removeEventListener("touchmove", move);
      });
    }
  }
});

/***/ }),

/***/ 393:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "monthDayPicker",
  props: {

    choseitemOrigin: {
      type: String,
      required: true
    },
    modleData: {
      type: Number
    },
    type: {
      type: String,
      required: true
    }
  },
  model: {
    prop: 'modleData',
    event: 'revert'
  },
  data() {
    return {
      monthDayShow: false,
      choseitem: 0,
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      checkDate: false
    };
  },

  created() {
    this.choseitem = this.choseitemOrigin;
  },

  mounted() {},

  methods: {
    choseThis(v, callBack) {
      this.checkDate = true;
      this.choseitem = v;
      this.$emit('revert', v);
      this.monthDayShow = !this.monthDayShow;
    }

  }
});

/***/ }),

/***/ 394:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    title: {
      type: String,
      required: false
    },
    showBack: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      g: window.$,

      leftTop: { horizontal: 'left', vertical: 'top' },
      leftBottom: { horizontal: 'left', vertical: 'bottom' },
      rightBottom: { horizontal: 'right', vertical: 'bottom' },
      rightTop: { horizontal: 'right', vertical: 'top' }
    };
  },

  created() {
    if (document.documentElement.id == 'drop-down-pop') {
      document.documentElement.id = '';
    }
  },

  methods: {
    back() {
      history.go(-1);
    }
  }
});

/***/ }),

/***/ 395:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    total: null,
    defaultPageSize: {
      type: Number,
      required: false,
      default: 30
    },
    pageChange: {
      type: Function,
      default() {
        return {};
      }
    },
    page: {
      type: Number,
      default: 1
    }
  },

  watch: {
    total: function (val, oldVal) {
      this.setPages();
    },
    page: {
      handler(newVal) {
        this.pageNo = newVal || 1;
      },
      immediate: true
    }
  },

  data() {
    return {
      g: window.$,
      pageNo: 1,
      totalPages: 0
    };
  },

  created() {
    this.setPages();
  },

  methods: {
    setPages() {
      let totalCnt = parseInt(this.total);
      let pages = parseInt(totalCnt / this.defaultPageSize);
      if (totalCnt % this.defaultPageSize > 0) pages++;
      this.totalPages = pages;
    },

    change(p) {
      this.pageNo = p;
      this.pageChange(p);
    }
  }
});

/***/ }),

/***/ 396:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "pull-down-list",

  props: {
    selectList: {
      type: Array
    },
    selectId: null,
    readonly: Boolean,
    value: null,
    changeId: false,
    extraExp: null,
    otherTips: null,
    filterable: false,
    filterItem: Object,
    multiFilter: {
      type: Boolean,
      default: false
    },
    multiSelect: {
      type: Boolean,
      default: false
    },
    searchNow: {
      type: Boolean,
      default: false
    },
    multiHasSelected: {
      type: Array
    }
  },
  model: {
    prop: 'value',
    event: 'selectOne'
  },
  data() {
    return {
      g: $,
      pullDownShow: false,
      pleaseChose: true,
      selectedName: '',
      showSelectionDlg: false,
      choseIdex: null,
      mutilSelections: [],
      selectAllFlag: false,
      searchCont: '',
      childSelectList: []
    };
  },

  mounted() {
    this.closePullDown();
    if (this.multiSelect) {
      if (this.childSelectList) {
        this.childSelectList.map(item => {
          this.$set(item, 'select', false);
        });
      }
    }
  },

  created() {
    this.childSelectList = this.selectList;
  },

  methods: {
    showPullDown() {
      this.childSelectList = this.selectList;
      if (!this.readonly) {
        this.pullDownShow = true;
        this.$emit('hideParantPage', this.pullDownShow);
        if (this.multiSelect && this.multiHasSelected && this.multiHasSelected.length > 0) {
          this.childSelectList.map(item => {
            this.$set(item, 'select', false);
          });
          this.childSelectList.map(item => {
            this.multiHasSelected.map(mItem => {
              if (item[this.changeId] == mItem) {
                this.$set(item, 'select', true);
                this.mutilSelections.push(item);
              }
            });
          });
          let [sLen, mLen] = [this.childSelectList.length, this.mutilSelections.length];
          this.mutilSelections.map((item, idx) => {
            this.selectAllFlag = sLen == mLen ? true : false;
          });
        }
      }
    },

    choseSelectItem(s, sIdx) {
      if (!this.multiSelect) {
        this.pleaseChose = false;
        this.pullDownShow = false;
        this.choseIdex = sIdx;
        if (s.constructor !== Object) {
          this.selectedName = s;
        } else {
          this.selectedName = s[this.selectId];
        }
        let returnBack = { selected: s, selectedIdx: sIdx };
        if (this.changeId) {
          this.$emit('selectOne', s[this.changeId]);
        } else {
          this.$emit('selectOne', returnBack);
        }
      } else {
        this.$set(s, 'select', !s.select);
        if (s.select) {
          this.mutilSelections.push(s);
        } else {
          this.mutilSelections.map((item, idx) => {
            if (item[this.selectId] == s[this.selectId]) {
              this.mutilSelections.splice(idx, 1);
            }
          });
        }
        let [sLen, mLen] = [this.childSelectList.length, this.mutilSelections.length];
        this.mutilSelections.map((item, idx) => {
          this.selectAllFlag = sLen == mLen ? true : false;
        });
      }
      this.$emit('hideParantPage', this.pullDownShow);
    },

    showParent() {
      if (this.multiSelect) {
        this.mutilSelections = [];
      }
      this.pullDownShow = false;
      this.$emit('hideParantPage', false);
    },

    closePullDown() {
      let _this = this;

      let closeFunc = () => {
        _this.pullDownShow = false;
      };
      window.onclick = () => {
        closeFunc();
      };
      window.onscroll = () => {
        closeFunc();
      };
    },

    reset() {
      this.$nextTick(() => {
        this.$set(this, 'pleaseChose', true);
        this.$set(this, 'selectedName', '');
      });
    },

    selectAll() {
      this.selectAllFlag = !this.selectAllFlag;
      if (this.selectAllFlag) {
        this.mutilSelections = [];
        this.childSelectList.map(item => {
          this.$set(item, 'select', true);
          this.mutilSelections.push(item);
        });
      } else {
        this.childSelectList.map(item => {
          this.$set(item, 'select', false);
        });
        this.mutilSelections = [];
      }
    },

    confirmSelect() {
      this.$emit('selectOne', this.mutilSelections);
      this.childSelectList.map(item => {
        this.$set(item, 'select', false);
      });
      this.mutilSelections = [];
      this.selectAllFlag = false;
      this.pullDownShow = false;
    },

    delSearch() {
      this.searchCont = '';
      this.childSelectList = this.selectList;
    },

    searchResult() {
      let result = [];
      this.childSelectList = this.selectList;
      if (this.searchCont) {
        this.childSelectList.map((item, idx) => {
          if (item[this.selectId].indexOf(this.searchCont) != -1) {
            result.push(item);
          }
        });
        this.childSelectList = result;
      }
    }
  }

});

/***/ }),

/***/ 397:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "qd-checkbox",
  props: {
    label: String,
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  model: {
    prop: "value",
    event: "change"
  },

  mounted() {
    this.check = this.value;
  },

  data() {
    return {
      check: false
    };
  },
  watch: {
    value(newVal) {
      this.check = newVal;
    }
  },
  methods: {
    turnOn() {
      if (!this.disabled) {
        this.check = !this.check;
        this.$emit("change", this.check);
      } else {
        $.Bble.warning("只读模式不可点");
      }
    }
  }
});

/***/ }),

/***/ 398:
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

const prefixCls = "qd-select-item";
const returnArrayFn = () => [];

/* harmony default export */ __webpack_exports__["default"] = ({
	name: "qdOption",
	components: {},
	props: {
		value: {
			type: [String, Number],
			required: true
		},
		label: {
			type: [String, Number]
		},
		selected: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: [Boolean, Number, String],
			default: false
		}
	},
	data() {
		return {
			selectedItem: null,
			isShow: false
		};
	},
	computed: {
		classes() {
			return [`${prefixCls}`, {
				[`${prefixCls}-disabled`]: this.disabled,
				[`${prefixCls}-selected`]: this.selectedItem,
				[`${prefixCls}-show`]: this.isShow
			}];
		}
	},
	watch: {},
	created() {},
	mounted() {},
	methods: {}
});

/***/ }),

/***/ 399:
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

const prefixCls = "qd-select";
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "qdSelect",
  components: {},
  props: {
    value: {
      type: [String, Number, Array],
      default: null
    },
    maxHeight: {
      type: String,
      default: "300"
    },
    title: {
      type: String,
      default: ""
    },
    multiple: {
      type: [Boolean, Number, String],
      default: false
    },
    placeholder: {
      type: [String, Number],
      default: "请选择"
    },
    disabled: {
      type: [Boolean, Number, String],
      default: false
    },
    clearable: {
      type: [Boolean, Number, String],
      default: false
    },
    notFoundText: {
      type: [String, Number],
      default: "暂无数据"
    },
    filterable: {
      type: [Boolean, Number, String],
      default: false
    },
    maxTagCount: {
      type: [Number],
      default: 999
    }
  },
  data() {
    return {
      pullDownShow: false,
      selectIds: [],
      selectMap: new Map(),
      selectNodeMap: new Map(),
      selectedMap: new Map(),
      selectedTextList: [],
      slotOptions: this.$slots.default,
      searchCont: "",
      timer: null,
      theme: $.Util.cookie.get("skin") || null
    };
  },
  computed: {
    textCls() {
      return [{
        [`${prefixCls}-multiple`]: this.multiple,
        [`${prefixCls}-placeholder`]: this.disabled
      }];
    },
    maxHeightCss() {
      let maxHeight = "70vh";
      if (!this.maxHeight) {
        maxHeight = this.maxHeight + "px";
      }
      return {
        maxHeight
      };
    }
  },
  watch: {
    selectIds: {
      handler(newValue) {
        setTimeout(() => {
          // 为了获取 elm
          if (!this.selectNodeMap.size) return;
          this.selectedMap.clear();
          this.selectedTextList = [];
          for (let [key, value] of this.selectNodeMap) {
            if (!value.elm) break;
            value.elm.__vue__.selectedItem = false;
          }
          if (!this.selectIds.length) return;
          newValue.forEach(item => {
            const label = this.selectMap.get(item);
            this.selectedMap.set(item, label);
            const el = this.selectNodeMap.get(item);
            if (this.selectNodeMap.has(item)) {
              this.selectedTextList.push(label);
              if (!el.elm) return;
              el.elm.__vue__.selectedItem = true;
            }
          });
          let value = newValue;
          if (!this.multiple) {
            if (newValue[0] === 0) {
              value = 0;
            } else {
              value = newValue[0] || "";
            }
          }
          this.$emit("input", value);
          this.$emit("on-change", value);
        }, 0);
      },
      deep: true
    },
    value: {
      handler(newValue) {
        this.handlerSlotOptions(this.$slots.default);
      },
      immediate: true
    },
    slotOptions: {
      handler(newValue) {
        this.handlerSlotOptions(this.$slots.default);
      },
      immediate: true
    }
  },
  created() {},
  mounted() {},
  methods: {
    showPullDown() {
      if (this.disabled) return;
      this.pullDownShow = true;
      let arr = [];
      if (!this.selectIds.length) return;
      setTimeout(() => {
        // 避免异步获取不到数据
        this.selectIds.forEach(item => {
          const label = this.selectMap.get(item);
          this.selectedMap.set(item, label);
          const el = this.selectNodeMap.get(item);
          if (this.selectNodeMap.has(item)) {
            arr.push(label);
            this.selectedTextList = arr;
            if (!el.elm) return;
            el.elm.__vue__.selectedItem = true;
          }
        });
      }, 0);
    },

    handlerSlotOptions(newValue) {
      if (newValue) {
        this.selectMap.clear();
        this.selectNodeMap.clear();
        newValue.forEach(item => {
          if (!item.componentOptions) return;
          const { value, label } = item.componentOptions.propsData;
          let optionLabel = value;
          if (!label && item.componentOptions.children) {
            optionLabel = item.componentOptions.children[0].text.trim();
          } else if (label) {
            optionLabel = label;
          }
          this.selectMap.set(value, optionLabel);
          this.selectNodeMap.set(value, item);
        });
        if (this.value === null) {
          return this.selectIds = [];
        }
        let value = this.value;
        if (!Array.isArray(value)) {
          value = [value] || [];
        }
        this.selectIds = value;
      }
    },

    updateSlotOptions() {
      const JSON1 = JSON.stringify(this.slotOptions);
      const JSON2 = JSON.stringify(this.$slots.default);
      if (JSON1 !== JSON2) {
        this.slotOptions = this.$slots.default;
      }
    },

    showParent() {
      this.pullDownShow = false;
      this.$emit("on-close");
    },

    handleClick(e) {
      // closest() 找到符合的最近元素
      const el = e.target.closest(".qd-select-item").__vue__;
      if (el.disabled) return;
      const { value, optionLabel: label } = el;
      if (!this.multiple) {
        this.pullDownShow = false;
        this.selectIds = [value];
      } else {
        const idx = this.selectIds.indexOf(value);
        if (idx >= 0) {
          this.selectIds.splice(idx, 1);
        } else {
          this.selectIds.push(value);
        }
      }
      let selectValue = this.selectIds;
      if (!this.multiple) selectValue = this.selectIds[0];
      this.$emit("click", selectValue);
    },

    searchResult(e) {
      clearTimeout(this.timer);
      const query = [];
      this.timer = setTimeout(() => {
        for (let [kee, value] of this.selectNodeMap) {
          if (value.componentOptions.propsData.label) {
            if (!value.componentOptions.propsData.label.includes(e.target.value)) {
              value.elm.__vue__.isShow = true;
            } else {
              query.push(value.componentOptions.propsData);
              value.elm.__vue__.isShow = false;
            }
          } else {
            if (!value.elm.innerText.includes(e.target.value)) {
              value.elm.__vue__.isShow = true;
            } else {
              const obj = value.componentOptions.propsData;
              obj.label = value.elm.innerText;
              query.push(obj);
              value.elm.__vue__.isShow = false;
            }
          }
        }
        this.$emit("on-query-change", query);
      }, 0);
    },

    delSearch() {
      this.searchCont = "";
      for (let [kee, value] of this.selectNodeMap) {
        value.elm.__vue__.isShow = false;
      }
    },

    clearValueFun() {
      this.selectIds = [];
      this.selectedTextList = [];
      let selectValue = [];
      if (!this.multiple) selectValue = selectValue[0];
      this.$emit("input", selectValue);
      this.$emit("on-clear");
      this.pullDownShow = false;
    }
  },
  updated() {
    this.updateSlotOptions();
  }
});

/***/ }),

/***/ 400:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "qd-switch",
  props: {
    title: String,
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  mounted() {
    setTimeout(() => {
      this.on = this.value;
    }, 100);
  },
  data() {
    return {
      on: false
    };
  },
  methods: {
    turnOn() {
      if (!this.disabled) {
        this.on = !this.on;
        this.$emit('change', this.on);
      } else {
        $.Bble.warning('只读模式不可点');
      }
    }
  }
});

/***/ }),

/***/ 401:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	props: ["value", "min", "max"],
	data() {
		return {};
	},

	methods: {
		updateVal: function (val) {
			this.$emit('input', val);
		},

		handleInput() {
			if (this.min === null || this.min === undefined) {
				if (this.value < 0) {
					alert('输入值【{0}】不能小于【0】'.format(this.value));
					this.updateVal(null);
				}
			} else if (this.value !== null && this.value !== undefined && this.value !== '' && parseInt(this.value) < parseInt(this.min)) {
				alert('输入值【{0}】不能小于【{1}】'.format(this.value, this.min));
				this.updateVal(null);
				return;
			}

			if (this.max === null || this.max === undefined) {
				this.max = 99999999999;
			}
			if (this.value !== null && this.value !== undefined && this.value !== '' && parseInt(this.value) > parseInt(this.max)) {
				alert('输入值【{0}】不能大于【{1}】'.format(this.value, this.max));
				this.updateVal(null);
			}
		},

		handleBlur(event) {
			this.handleInput();
			this.$emit('blur', event);
		},

		handleEnter(event) {
			this.handleInput();
			this.$emit('enter', event);
		}
	}
});

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	props: ["value", "min", "max"],
	data() {
		return {};
	},
	methods: {
		updateVal: function (val) {
			this.$emit('input', val);
		},

		handleBlur(event) {
			this.handleInput();
			this.$emit('blur', event);
		},

		handleInput() {
			if (this.value !== null && this.value !== undefined && this.value !== '' && this.value < this.min) {
				alert('输入值【{0}】不能小于【{1}】'.format(this.value, this.min));
				this.updateVal(null);
			}

			if (this.max === null || this.max === undefined) {
				this.max = 99999999999;
			}
			if (this.value !== null && this.value !== undefined && this.value !== '' && parseInt(this.value) > parseInt(this.max)) {
				alert('输入值【{0}】不能大于【{1}】'.format(this.value, this.max));
				this.updateVal(null);
			}
		}
	}
});

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_js_syslib_js__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_js_bizlib_js__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_const_js__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_js_lang_js__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_muse_ui__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_muse_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_muse_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_muse_ui_dist_muse_ui_css__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_muse_ui_dist_muse_ui_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_muse_ui_dist_muse_ui_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_muse_ui_dist_theme_light_css__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_muse_ui_dist_theme_light_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_muse_ui_dist_theme_light_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_cropperjs_dist_cropper_css__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_cropperjs_dist_cropper_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_cropperjs_dist_cropper_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vant__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_qd_select_vue__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_qd_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__components_qd_select_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_qd_option_vue__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_qd_option_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__components_qd_option_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_css_common_css__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_css_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__assets_css_common_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_vant_lib_dialog_index_css__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_vant_lib_dialog_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_vant_lib_dialog_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_vant_lib_datetime_picker_style_index__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_vant_lib_datetime_picker_style_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_vant_lib_datetime_picker_style_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_vant_lib_notify_style_index__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_vant_lib_notify_style_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_vant_lib_notify_style_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_vant_lib_uploader_style_index__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_vant_lib_uploader_style_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_vant_lib_uploader_style_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_vant_lib_switch_cell_style_index__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_vant_lib_switch_cell_style_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_vant_lib_switch_cell_style_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_vant_lib_switch_style_index__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_vant_lib_switch_style_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_vant_lib_switch_style_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_vant_lib_tab_style_index__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_vant_lib_tab_style_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_vant_lib_tab_style_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_vant_lib_tabs_style_index__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_vant_lib_tabs_style_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_vant_lib_tabs_style_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_vant_lib_rate_style_index__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_vant_lib_rate_style_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_vant_lib_rate_style_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_vant_lib_checkbox_style_index__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_vant_lib_checkbox_style_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_vant_lib_checkbox_style_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_vant_lib_checkbox_group_style_index__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_vant_lib_checkbox_group_style_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_vant_lib_checkbox_group_style_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_vant_lib_popover_style_index__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_vant_lib_popover_style_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_vant_lib_popover_style_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_bottom_nav_vue__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_bottom_nav_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26__components_bottom_nav_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_Tab_vue__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_Tab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__components_Tab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_page_head_vue__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_page_head_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28__components_page_head_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_pagination_vue__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29__components_pagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_pull_down_list_vue__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_pull_down_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30__components_pull_down_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_monthDayPicker_vue__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_monthDayPicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31__components_monthDayPicker_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_qd_switch_vue__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_qd_switch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32__components_qd_switch_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_qd_checkbox_vue__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_qd_checkbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33__components_qd_checkbox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_vue_echarts_components_ECharts_vue__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_vue_echarts_components_ECharts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34_vue_echarts_components_ECharts_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_echarts_lib_chart_bar__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_echarts_lib_chart_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_echarts_lib_chart_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_echarts_lib_chart_line__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_echarts_lib_chart_line___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_echarts_lib_chart_line__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_echarts_lib_chart_pie__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_echarts_lib_chart_pie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37_echarts_lib_chart_pie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_echarts_lib_chart_themeRiver__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_echarts_lib_chart_themeRiver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38_echarts_lib_chart_themeRiver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_echarts_lib_component_tooltip__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_echarts_lib_component_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_echarts_lib_component_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_echarts_lib_component_legend__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_echarts_lib_component_legend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40_echarts_lib_component_legend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_echarts_lib_component_visualMap__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_echarts_lib_component_visualMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41_echarts_lib_component_visualMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_echarts_lib_component_grid__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_echarts_lib_component_grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_42_echarts_lib_component_grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_sys_input_int_vue__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_sys_input_int_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_43__components_sys_input_int_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_sys_input_num_vue__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_sys_input_num_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_44__components_sys_input_num_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_img_vuer__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_img_vuer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_45_img_vuer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_vue_awesome_swiper__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_vue_awesome_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_46_vue_awesome_swiper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_swiper_dist_css_swiper_css__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_swiper_dist_css_swiper_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_47_swiper_dist_css_swiper_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__App__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_48__App__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.










































 //引入visualMap相对应的js文件








window.onload = function () {
  axios.defaults.withCredentials = true;
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6_muse_ui___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_46_vue_awesome_swiper___default.a);
  // Vue.use(Vant)
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_10_vant__["a" /* Slider */]);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_10_vant__["b" /* Dialog */]);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_10_vant__["c" /* ActionSheet */]);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_10_vant__["d" /* Picker */]);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_10_vant__["e" /* Button */]);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_10_vant__["f" /* Area */]);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_10_vant__["g" /* DatetimePicker */]);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_10_vant__["h" /* Popup */]);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_10_vant__["i" /* Notify */]);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_10_vant__["j" /* SwitchCell */]);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_10_vant__["k" /* Tab */]);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_10_vant__["l" /* Tabs */]);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_10_vant__["m" /* Uploader */]);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_10_vant__["n" /* Rate */]);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_10_vant__["o" /* Checkbox */]);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_10_vant__["p" /* CheckboxGroup */]);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_10_vant__["q" /* Loading */]);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_10_vant__["r" /* Overlay */]);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_10_vant__["s" /* Popover */]);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.devtools = false;
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component("bottom-nav", __WEBPACK_IMPORTED_MODULE_26__components_bottom_nav_vue___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component("tab", __WEBPACK_IMPORTED_MODULE_27__components_Tab_vue___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component("page-head", __WEBPACK_IMPORTED_MODULE_28__components_page_head_vue___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component("pagination", __WEBPACK_IMPORTED_MODULE_29__components_pagination_vue___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component("month-day-picker", __WEBPACK_IMPORTED_MODULE_31__components_monthDayPicker_vue___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component("pullDownList", __WEBPACK_IMPORTED_MODULE_30__components_pull_down_list_vue___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component("qd-switch", __WEBPACK_IMPORTED_MODULE_32__components_qd_switch_vue___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component("qd-checkbox", __WEBPACK_IMPORTED_MODULE_33__components_qd_checkbox_vue___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component("chart", __WEBPACK_IMPORTED_MODULE_34_vue_echarts_components_ECharts_vue___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__webpack_require__(374));
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component("input-int", __WEBPACK_IMPORTED_MODULE_43__components_sys_input_int_vue___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component("input-num", __WEBPACK_IMPORTED_MODULE_44__components_sys_input_num_vue___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component("qd-option", __WEBPACK_IMPORTED_MODULE_12__components_qd_option_vue___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component("qd-select", __WEBPACK_IMPORTED_MODULE_11__components_qd_select_vue___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_45_img_vuer___default.a, {
    swipeThreshold: 150 // default 100 ,new in 0.12.0
  });

  window.$ = {
    Util: __WEBPACK_IMPORTED_MODULE_2__assets_js_syslib_js__["a" /* Util */],
    Req: __WEBPACK_IMPORTED_MODULE_2__assets_js_syslib_js__["b" /* Req */],
    Msg: __WEBPACK_IMPORTED_MODULE_2__assets_js_syslib_js__["c" /* Msg */],
    Bble: __WEBPACK_IMPORTED_MODULE_2__assets_js_syslib_js__["d" /* Bble */],
    Dlg: __WEBPACK_IMPORTED_MODULE_2__assets_js_syslib_js__["e" /* Dlg */],
    MemberLib: __WEBPACK_IMPORTED_MODULE_3__assets_js_bizlib_js__["a" /* Member */],
    UserLib: __WEBPACK_IMPORTED_MODULE_3__assets_js_bizlib_js__["b" /* User */],
    SvName: __WEBPACK_IMPORTED_MODULE_4__assets_js_const_js__["a" /* SvName */],
    Conf: __WEBPACK_IMPORTED_MODULE_4__assets_js_const_js__["b" /* Conf */],
    Dict: __WEBPACK_IMPORTED_MODULE_4__assets_js_const_js__["c" /* Dict */],
    Lang: __WEBPACK_IMPORTED_MODULE_5__assets_js_lang_js__["a" /* default */],
    data: {
      clientVersion: null,
      user: {
        uid: null,
        uname: null,
        phoneNo: null,
        sex: null,
        memberId: null,
        cardNo: null,
        staffId: null,
        isTenantOwner: null,
        isShopOwner: null,
        isCoach: null,
        isGroupCoach: null,
        isPrivateCoach: null,
        isAdvisor: null,
        isSales: null,
        roleFuncList: [],
        avatarPathname: null,
        wxId: null,
        staffMobileMenus: null
      },
      tenant: {}, // encTid, tenantName, logoPathname, tenantType
      shop: {}, // encSid, shopName, logoPathname, shopType, gpsLongtitude, gpsLatitude, hasEntryCheckin, hasGroupCourse, hasPrivateCourse
      shopList: {},
      misc: {
        loginBgUrl: __WEBPACK_IMPORTED_MODULE_4__assets_js_const_js__["b" /* Conf */].IMG_LIB_URL + "/jzg-m-bg/login-bg-1.jpg",
        memberBottomMenus: null
      },
      themeIconSkin: null
    }
  };
  _loading_(function () {
    _initLoadingImg_();
    document.getElementById("jzg_start").parentNode.removeChild(document.getElementById("jzg_start"));
    const vue = new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
      el: "#app",
      router: __WEBPACK_IMPORTED_MODULE_1__router__["a" /* router */],
      template: "<App/>",
      components: { App: __WEBPACK_IMPORTED_MODULE_48__App___default.a }
    });
    window.$.Dlg.vue = vue;
  });
};

function _loading_(callback) {
  // to login
  let url = location.href;
  if (url.indexOf("#/user-login") > 0 || url.endsWith("/") || url.endsWith("#")) {
    let encTid = url.indexOf("?t=") > 0 ? getParamValFromUrl(url, "t") : null;
    fetchLoginBg(encTid, callback);
  } else if (url.indexOf("?t=") > 0 || url.indexOf("?encSid=") > 0) {
    $.data.user = {};
    let t = getParamValFromUrl(url, "t");
    fetchLoginBg(t, callback);
  } else {
    // refresh page
    //-- 加载用户数据
    if ($.Util.cookie.get($.Conf.Keys.LOGIN_FLAG)) {
      $.Req.service($.SvName.INIT_DATA_LOAD, { clientType: 1 }, ret => {
        if (ret.user.staffId && ret.user.memberId) {
          let loginAs = $.Util.cookie.get($.Conf.CookieKeys.LOGIN_AS);
          if (loginAs === "member") {
            ret.user.staffId = null;
            ret.user.isTenantOwner = false;
            ret.user.isShopOwner = false;
          } else {
            ret.user.memberId = null;
          }
        }

        $.data.user = ret.user;
        $.data.user.wxId = $.Util.cookie.get($.Conf.CookieKeys.USER_WXID);
        $.data.tenant = ret.tenant;
        $.data.shop = ret.shop;
        $.data.clientVersion = ret.clientVersion;
        $.data.shopList = ret.shopList;
        document.title = ret.shop ? ret.shop.shopName : ret.tenant.tenantName;
        callback();
      }, false, err => {
        callback();
      });
    } else {
      callback();
    }
  }
}

function fetchLoginBg(encTid, callback) {
  if (!encTid) {
    encTid = $.Util.cookie.get($.Conf.CookieKeys.LOGIN_TID);
    if (!encTid) {
      $.data.misc.loginBgUrl = $.Conf.IMG_LIB_URL + "/jzg-m-bg/login-bg-1.jpg";
      callback();
      return;
    }
  }
  let args = { encTid: encTid };
  $.Req.service($.SvName.TENANT_MOBILE_LOGIN_BG_QUERY, args, ret => {
    let bgId = 1;
    if (ret.mloginBg) {
      bgId = ret.mloginBg;
    }
    $.data.misc.loginBgUrl = $.Conf.IMG_LIB_URL + "/jzg-m-bg/login-bg-" + bgId + ".jpg";
    callback();
  });
}

function getParamValFromUrl(url, paramName) {
  let paramVal = null;
  let queryList = url.split("?");
  for (let i = 1; i < queryList.length; i++) {
    let query = queryList[i];
    let queryArr = query.split("&");
    queryArr.forEach(function (item) {
      let key = item.split("=")[0];
      let val = item.split("=")[1];
      if (key === paramName) {
        paramVal = decodeURIComponent(val);
        return val;
      }
    });
  }

  if (paramVal) paramVal = paramVal.replace(/ /g, "+");

  return paramVal;
}

function _initLoadingImg_() {
  let brwSize = $.Util.getBrowserSize();
  const pageWidth = brwSize.pageWidth;
  const clientHeight = brwSize.pageHeight;
  const maskCont = document.createElement("div");

  maskCont.id = "_mask_cont_";
  maskCont.innerHTML = '<img src="/static/img/loading.gif"/>';
  maskCont.style.display = "none";
  document.body.appendChild(maskCont);
  const contHeight = maskCont.offsetHeight;
  const contWidth = maskCont.offsetWidth;
  maskCont.style.left = pageWidth / 2 - contWidth / 2 - 10 + "px";
  maskCont.style.top = clientHeight / 2 - contHeight / 2 + "px";
}

/***/ }),

/***/ 436:
/***/ (function(module, exports) {

module.exports = {"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 533:
/***/ (function(module, exports) {

module.exports = {"_args":[["elliptic@6.5.4","D:\\code\\jzg\\jzg-m-2023-3-6"]],"_development":true,"_from":"elliptic@6.5.4","_id":"elliptic@6.5.4","_inBundle":false,"_integrity":"sha512-iLhC6ULemrljPZb+QutR5TQGB+pdW6KGD5RSegS+8sorOZT+rdQFbsQFJgvN3eRqNALqJer4oQ16YvJHlU8hzQ==","_location":"/elliptic","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"elliptic@6.5.4","name":"elliptic","escapedName":"elliptic","rawSpec":"6.5.4","saveSpec":null,"fetchSpec":"6.5.4"},"_requiredBy":["/browserify-sign","/create-ecdh"],"_resolved":"https://registry.npmjs.org/elliptic/-/elliptic-6.5.4.tgz","_spec":"6.5.4","_where":"D:\\code\\jzg\\jzg-m-2023-3-6","author":{"name":"Fedor Indutny","email":"fedor@indutny.com"},"bugs":{"url":"https://github.com/indutny/elliptic/issues"},"dependencies":{"bn.js":"^4.11.9","brorand":"^1.1.0","hash.js":"^1.0.0","hmac-drbg":"^1.0.1","inherits":"^2.0.4","minimalistic-assert":"^1.0.1","minimalistic-crypto-utils":"^1.0.1"},"description":"EC cryptography","devDependencies":{"brfs":"^2.0.2","coveralls":"^3.1.0","eslint":"^7.6.0","grunt":"^1.2.1","grunt-browserify":"^5.3.0","grunt-cli":"^1.3.2","grunt-contrib-connect":"^3.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^5.0.0","grunt-mocha-istanbul":"^5.0.2","grunt-saucelabs":"^9.0.1","istanbul":"^0.4.5","mocha":"^8.0.1"},"files":["lib"],"homepage":"https://github.com/indutny/elliptic","keywords":["EC","Elliptic","curve","Cryptography"],"license":"MIT","main":"lib/elliptic.js","name":"elliptic","repository":{"type":"git","url":"git+ssh://git@github.com/indutny/elliptic.git"},"scripts":{"lint":"eslint lib test","lint:fix":"npm run lint -- --fix","test":"npm run lint && npm run unit","unit":"istanbul test _mocha --reporter=spec test/index.js","version":"grunt dist && git add dist/"},"version":"6.5.4"}

/***/ }),

/***/ 534:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 535:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 542:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 543:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 545:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 546:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 547:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 548:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 549:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 550:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 553:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 554:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 556:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 557:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 558:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 561:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 588:
/***/ (function(module, exports) {

module.exports = {"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(558)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(392),
  /* template */
  __webpack_require__(716),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-d62f5c7e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "checkbox",
    on: {
      "click": _vm.turnOn
    }
  }, [(_vm.check) ? _c('i', {
    staticClass: "iconfont iconckbox-on"
  }) : _c('i', {
    staticClass: "iconfont iconckbox-off"
  }), _vm._v(_vm._s(_vm.label) + "\n")])
},staticRenderFns: []}

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.multiSelect) ? [(_vm.pleaseChose && !_vm.selectedName) ? [_c('span', {
    staticClass: "row row-l-r",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.showPullDown.apply(null, arguments)
      }
    }
  }, [_vm._t("pleaseChose"), _vm._v(" "), (!_vm.readonly) ? _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c"
  }) : _vm._e()], 2)] : [_c('span', {
    staticClass: "row row-l-r",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.showPullDown.apply(null, arguments)
      }
    }
  }, [_c('span', {
    staticClass: "selected-name"
  }, [_vm._v(_vm._s(_vm.selectedName)), (_vm.selectedName !== '不限') ? _vm._t("leftSide") : _vm._e(), _vm._v(" "), (_vm.otherTips) ? _c('span', {
    staticClass: "font-color-9"
  }, [_vm._v(_vm._s(_vm.otherTips[_vm.selectedName]))]) : _vm._e(), _vm._v(" "), (_vm.selectedName !== '不限') ? _vm._t("rightSide") : _vm._e(), _vm._v(" "), (_vm.selectId == 'custLevel') ? [_vm._v(" （"), _c('span', {
    staticClass: "font-color-9"
  }, [_vm._v(_vm._s(_vm.g.Dict.CustLevels[_vm.selectedName]))]), _vm._v("）")] : _vm._e()], 2), _vm._v(" "), (!_vm.readonly) ? _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c"
  }) : _vm._e()])]] : [(_vm.pleaseChose && !_vm.selectedName) ? [_c('div', {
    staticClass: "row row-l-r",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.showPullDown.apply(null, arguments)
      }
    }
  }, [_vm._t("pleaseChose"), _vm._v(" "), (!_vm.readonly) ? _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c"
  }) : _vm._e()], 2)] : _vm._e()], _vm._v(" "), _c('div', {
    staticClass: "vant"
  }, [(_vm.pullDownShow) ? _c('van-dialog', {
    staticClass: "van-has-overlay section-part show-close",
    staticStyle: {
      "overflow": "visible"
    },
    attrs: {
      "show-cancel-button": false,
      "show-confirm-button": false
    },
    model: {
      value: (_vm.pullDownShow),
      callback: function($$v) {
        _vm.pullDownShow = $$v
      },
      expression: "pullDownShow"
    }
  }, [_c('div', {
    staticClass: "dlg-head theme-btn-bg"
  }, [_vm._t("dlgTit")], 2), _vm._v(" "), (_vm.searchNow) ? _c('div', {
    staticClass: "input-search section-part"
  }, [_c('i', {
    staticClass: "iconfont iconsearch-2"
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchCont),
      expression: "searchCont"
    }],
    attrs: {
      "type": "text",
      "placeholder": "搜索"
    },
    domProps: {
      "value": (_vm.searchCont)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.searchCont = $event.target.value
      }, _vm.searchResult]
    }
  }), (_vm.searchCont) ? _c('i', {
    staticClass: "iconfont iconcuowu font-color-c",
    on: {
      "click": _vm.delSearch
    }
  }) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "dlg-cont theme-bg"
  }, [(!_vm.multiSelect) ? [(_vm.pullDownShow) ? _c('ul', {
    staticClass: "items"
  }, [(!_vm.filterable) ? _vm._l((_vm.childSelectList), function(s, sIdx) {
    return (s) ? _c('li', {
      staticClass: "theme-border-bottom",
      class: {
        'active': sIdx == _vm.choseIdex
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          return _vm.choseSelectItem(s, sIdx)
        }
      }
    }, [(s.constructor !== Object) ? [_vm._v("\n                  " + _vm._s(s) + "\n                  "), (s !== '不限') ? _vm._t("leftSide") : _vm._e(), _vm._v(" "), (_vm.otherTips) ? _c('span', {
      staticClass: "font-color-9"
    }, [_vm._v(_vm._s(_vm.otherTips[s]))]) : _vm._e(), (s !== '不限') ? _vm._t("rightSide") : _vm._e(), _vm._v(" "), (_vm.selectId == 'custLevel') ? [_vm._v(" （"), _c('span', {
      staticClass: "font-color-9"
    }, [_vm._v(_vm._s(_vm.g.Dict.CustLevels[sIdx]))]), _vm._v("）")] : _vm._e()] : [_vm._v("\n                  " + _vm._s(s[_vm.selectId]) + "\n                  "), (_vm.extraExp) ? _c('span', {
      staticClass: "font-color-9"
    }, [_vm._t("leftSide"), _vm._v(_vm._s(s[_vm.extraExp])), _vm._t("rightSide")], 2) : _vm._e(), _vm._v(" "), (_vm.selectId == 'sourceName') ? [(s.sourceDesc) ? _c('span', {
      staticClass: "r gray"
    }, [_vm._v("# " + _vm._s(s.sourceDesc.substr(0, 24)))]) : _vm._e()] : _vm._e(), _vm._v(" "), (_vm.selectId == 'cardName') ? [_c('span', {
      staticStyle: {
        "float": "right",
        "color": "#bbb",
        "margin-right": "16px"
      }
    }, [_vm._v(_vm._s(_vm.g.Dict.CardClass[s.cardClass]) + " "), _c('span', [_vm._v("/")]), _vm._v(" " + _vm._s(s.cardTypeName))])] : _vm._e()]], 2) : _vm._e()
  }) : [(!_vm.multiFilter) ? _vm._l((_vm.childSelectList), function(s, sIdx) {
    return (_vm.filterItem.filterSet == s[_vm.filterItem.filterItemType]) ? _c('li', {
      staticClass: "theme-border-bottom",
      class: {
        'active': sIdx == _vm.choseIdex
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          return _vm.choseSelectItem(s, sIdx)
        }
      }
    }, [(s.constructor !== Object) ? [_vm._v("\n                    " + _vm._s(s) + "\n                    "), (s !== '不限') ? _vm._t("leftSide") : _vm._e(), _vm._v(" "), (_vm.otherTips) ? _c('span', {
      staticClass: "font-color-9"
    }, [_vm._v(_vm._s(_vm.otherTips[s]))]) : _vm._e(), (s !== '不限') ? _vm._t("rightSide") : _vm._e(), _vm._v(" "), (_vm.selectId == 'custLevel') ? [_vm._v(" （"), _c('span', {
      staticClass: "font-color-9"
    }, [_vm._v(_vm._s(_vm.g.Dict.CustLevels[sIdx]))]), _vm._v("）")] : _vm._e()] : [_vm._v("\n                    " + _vm._s(s[_vm.selectId]) + "\n                    "), (_vm.extraExp) ? _c('span', {
      staticClass: "font-color-9"
    }, [_vm._t("leftSide"), _vm._v(_vm._s(s[_vm.extraExp])), _vm._t("rightSide")], 2) : _vm._e(), _vm._v(" "), (_vm.selectId == 'sourceName') ? [(s.sourceDesc) ? _c('span', {
      staticClass: "r gray"
    }, [_vm._v("# " + _vm._s(s.sourceDesc.substr(0, 24)))]) : _vm._e()] : _vm._e(), _vm._v(" "), (_vm.selectId == 'cardName') ? [_c('span', {
      staticStyle: {
        "float": "right",
        "color": "#bbb",
        "margin-right": "16px"
      }
    }, [_vm._v(_vm._s(_vm.g.Dict.CardClass[s.cardClass]) + " "), _c('span', [_vm._v("/")]), _vm._v(" " + _vm._s(s.cardTypeName))])] : _vm._e()]], 2) : _vm._e()
  }) : _vm._l((_vm.childSelectList), function(s, sIdx) {
    return (s[_vm.filterItem.filterItemType] === 2 || s[_vm.filterItem.filterItemType] === 3) ? _c('li', {
      staticClass: "theme-border-bottom",
      class: {
        'active': sIdx == _vm.choseIdex
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          return _vm.choseSelectItem(s, sIdx)
        }
      }
    }, [_vm._v("\n                  " + _vm._s(s[_vm.selectId]) + "\n                ")]) : _vm._e()
  })]], 2) : _vm._e()] : [(_vm.pullDownShow) ? _c('ul', {
    staticClass: "items"
  }, [(!_vm.filterable) ? _vm._l((_vm.childSelectList), function(s, sIdx) {
    return (s) ? _c('li', {
      staticClass: "theme-border-bottom",
      class: {
        'active': sIdx == _vm.choseIdex
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          return _vm.choseSelectItem(s, sIdx)
        }
      }
    }, [_c('span', {
      staticClass: "check-box"
    }, [_c('span', {
      staticClass: "check-box-check",
      class: {
        'check-box-check1': s.select
      }
    }, [_c('i', {
      staticClass: "iconfont",
      class: {
        'iconcheck0': s.select
      }
    })]), _vm._v(_vm._s(s[_vm.selectId]))]), _vm._v(" "), (_vm.extraExp) ? _c('span', {
      staticClass: "font-color-9"
    }, [_vm._t("leftSide"), _vm._v(_vm._s(s[_vm.extraExp])), _vm._t("rightSide")], 2) : _vm._e(), _vm._v(" "), (_vm.selectId == 'sourceName') ? [(s.sourceDesc) ? _c('span', {
      staticClass: "r gray"
    }, [_vm._v("# " + _vm._s(s.sourceDesc.substr(0, 24)))]) : _vm._e()] : _vm._e(), _vm._v(" "), (_vm.selectId == 'cardName') ? [_c('span', {
      staticStyle: {
        "float": "right",
        "color": "#bbb",
        "margin-right": "16px"
      }
    }, [_vm._v(_vm._s(_vm.g.Dict.CardClass[s.cardClass]) + " "), _c('span', [_vm._v("/")]), _vm._v(" " + _vm._s(s.cardTypeName))])] : _vm._e()], 2) : _vm._e()
  }) : [(!_vm.multiFilter) ? _vm._l((_vm.childSelectList), function(s, sIdx) {
    return (_vm.filterItem.filterSet == s[_vm.filterItem.filterItemType]) ? _c('li', {
      staticClass: "theme-border-bottom",
      class: {
        'active': sIdx == _vm.choseIdex
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          return _vm.choseSelectItem(s, sIdx)
        }
      }
    }, [_c('span', {
      staticClass: "check-box"
    }, [_c('span', {
      staticClass: "check-box-check check-box-check1"
    }, [_c('i', {
      staticClass: "iconfont iconcheck0"
    })]), _vm._v(_vm._s(s[_vm.selectId]))]), _vm._v(" "), (_vm.extraExp) ? _c('span', {
      staticClass: "font-color-9"
    }, [_vm._t("leftSide"), _vm._v(_vm._s(s[_vm.extraExp])), _vm._t("rightSide")], 2) : _vm._e(), _vm._v(" "), (_vm.selectId == 'sourceName') ? [(s.sourceDesc) ? _c('span', {
      staticClass: "r gray"
    }, [_vm._v("# " + _vm._s(s.sourceDesc.substr(0, 24)))]) : _vm._e()] : _vm._e(), _vm._v(" "), (_vm.selectId == 'cardName') ? [_c('span', {
      staticStyle: {
        "float": "right",
        "color": "#bbb",
        "margin-right": "16px"
      }
    }, [_vm._v(_vm._s(_vm.g.Dict.CardClass[s.cardClass]) + " "), _c('span', [_vm._v("/")]), _vm._v(" " + _vm._s(s.cardTypeName))])] : _vm._e()], 2) : _vm._e()
  }) : _vm._e()]], 2) : _vm._e()]], 2), _vm._v(" "), _c('div', {
    staticClass: "close-dlg"
  }, [_c('i', {
    staticClass: "iconfont iconfork",
    on: {
      "click": _vm.showParent
    }
  })]), _vm._v(" "), (_vm.multiSelect) ? _c('div', {
    staticClass: "qd-van-btn row section-part"
  }, [_c('div', {
    staticClass: "btn check-box font-color-9",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.selectAll.apply(null, arguments)
      }
    }
  }, [_c('span', {
    staticClass: "check-box-check",
    class: {
      'check-box-check1': _vm.selectAllFlag
    }
  }, [_c('i', {
    staticClass: "iconfont",
    class: {
      'iconcheck0': _vm.selectAllFlag
    }
  })]), _vm._v("全选\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "confirm-btn btn theme-border-left theme-font-color",
    on: {
      "click": _vm.confirmSelect
    }
  }, [_vm._v("确认")])]) : _vm._e()]) : _vm._e()], 1)], 2)
},staticRenderFns: []}

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    class: _vm.classes
  }, [_vm._t("default", function() {
    return [(_vm.label) ? [_vm._v("\n\t\t\t" + _vm._s(_vm.label) + "\n\t\t")] : [(_vm.value !== null && _vm.value !== undefined) ? [_vm._v("\n\t\t\t\t" + _vm._s(_vm.value) + "\n\t\t\t")] : _vm._e()]]
  })], 2)
},staticRenderFns: []}

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.g.data.user.memberId && _vm.showSlogan) ? _c('div', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "proverb"
  }, [_vm._v("— " + _vm._s(_vm.g.data.shop.shopName) + " —")]), _vm._v(" "), (_vm.g.data.shop.tel) ? _c('div', {
    staticClass: "tel"
  }, [_c('i', {
    staticClass: "iconfont icontel"
  }), _vm._v(" "), _c('a', {
    attrs: {
      "href": 'tel:' + _vm.g.data.shop.tel
    }
  }, [_vm._v(_vm._s(_vm.g.data.shop.tel))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.showOurCorp) ? _c('div', {
    staticClass: "copy-right"
  }, [_vm._v("由『健总管』提供技术支持\n    "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v(" "), _c('a', {
    staticClass: "theme-font-color",
    on: {
      "click": function($event) {
        return _vm.$router.push('about-us')
      }
    }
  }, [_vm._v("联系我们")]), _vm._v(" "), (!_vm.g.Util.isInWxMiniProgram()) ? [_c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v(" "), _c('a', {
    attrs: {
      "target": "_blank",
      "href": "http://www.jzongguan.com/m/sys-help-docs.html"
    }
  }, [_vm._v("系统帮助")])] : _vm._e()], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "bottom-nav"
  }, [_c('div', {
    staticClass: "row space-between"
  }, [(_vm.u.memberId) ? [(_vm.mobileClientMenus && _vm.mobileClientMenus.length > 0) ? _vm._l((_vm.mobileClientMenus), function(c) {
    return (c.name) ? _c('router-link', {
      key: c.id,
      class: {
        'theme-font-color': _vm.menu == _vm.mobileMenusDict[c.id].menu
      },
      attrs: {
        "to": '/' + _vm.mobileMenusDict[c.id].link
      }
    }, [_c('i', {
      class: 'iconfont ' + _vm.mobileMenusDict[c.id].icon
    }), _vm._v(" "), _c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(c.name))])]) : _vm._e()
  }) : [_c('router-link', {
    class: {
      'theme-font-color': _vm.menu == 'home'
    },
    attrs: {
      "to": "/member-home"
    }
  }, [_c('i', {
    staticClass: "iconfont iconshouyeicon"
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("首页")])]), _vm._v(" "), (_vm.g.data.shop.hasGroupCourse) ? _c('router-link', {
    class: {
      'theme-font-color': _vm.menu == 'gl-booking'
    },
    attrs: {
      "to": "/group-lesson-list"
    }
  }, [_c('i', {
    staticClass: "iconfont iconyuetuankeicon"
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("约团课")])]) : _vm._e(), _vm._v(" "), (_vm.g.data.shop.hasPrivateCourse) ? _c('router-link', {
    class: {
      'theme-font-color': _vm.menu == 'pl-booking'
    },
    attrs: {
      "to": "/member-private-lesson-booking"
    }
  }, [_c('i', {
    staticClass: "iconfont iconyuesijiaoicon"
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("约私教")])]) : _vm._e(), _vm._v(" "), (_vm.g.data.shop.hasMall) ? _c('router-link', {
    class: {
      'theme-font-color': _vm.menu == 'mall'
    },
    attrs: {
      "to": "/mall/product-list"
    }
  }, [_c('i', {
    staticClass: "iconfont iconweishangchengicon"
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("微商城")])]) : _vm._e(), _vm._v(" "), (_vm.g.data.shop.shopType === 101) ? _c('router-link', {
    class: {
      'theme-font-color': _vm.menu == 'member-card'
    },
    attrs: {
      "to": "/my-card-list"
    }
  }, [_c('i', {
    staticClass: "iconfont iconhuiyuanqia"
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("会员卡")])]) : _vm._e(), _vm._v(" "), _c('router-link', {
    class: {
      'theme-font-color': _vm.menu == 'my'
    },
    attrs: {
      "to": "/member-more"
    }
  }, [_c('i', {
    staticClass: "iconfont icongengduoicon"
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("更多")])])]] : [(_vm.staffMobileMenusArr && _vm.staffMobileMenusArr.length > 0) ? [_c('router-link', {
    class: {
      'theme-font-color': _vm.menu == 'home'
    },
    attrs: {
      "to": "/staff-home"
    }
  }, [_c('i', {
    staticClass: "iconfont iconshouyeicon"
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.custom.home || '首页'))])]), _vm._v(" "), _vm._l((_vm.staffMobileMenusArr), function(c, idx) {
    return [(!c.isChildList && c && c.id) ? [(_vm.isShopOwner || !c.roleFunc || (_vm.u.roleFuncList.contains(c.roleFunc))) ? _c('router-link', {
      key: idx,
      class: {
        'theme-font-color': _vm.menu && _vm.menu === c.menu
      },
      attrs: {
        "to": ('/' + c.link) + (c.requireStaffId ? ('/' + _vm.staffId) : '')
      }
    }, [_c('i', {
      class: 'iconfont ' + c.icon
    }), _vm._v(" "), _c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(c.title || c.name))])]) : _vm._e()] : _c('div', [_c('van-popover', {
      attrs: {
        "placement": "top",
        "trigger": "click"
      },
      scopedSlots: _vm._u([{
        key: "reference",
        fn: function() {
          return [_c('a', [_c('i', {
            class: 'iconfont ' + c.icon
          }), _vm._v(" "), _c('div', {
            staticClass: "name"
          }, [_vm._v(_vm._s(c.title))])])]
        },
        proxy: true
      }], null, true),
      model: {
        value: (c.showPopover),
        callback: function($$v) {
          _vm.$set(c, "showPopover", $$v)
        },
        expression: "c.showPopover"
      }
    }, [_c('div', {
      staticClass: "popover-menu"
    }, [_vm._l((c.children), function(i, cIdx) {
      return [(_vm.isShopOwner || !i.roleFunc || (_vm.u.roleFuncList.contains(i.roleFunc))) ? _c('router-link', {
        key: cIdx,
        class: {
          'theme-font-color': _vm.menu && _vm.menu === i.menu
        },
        attrs: {
          "to": ('/' + i.link) + (i.requireStaffId ? ('/' + _vm.staffId) : '')
        }
      }, [_c('i', {
        class: 'iconfont ' + i.icon
      }), _vm._v(" "), _c('div', {
        staticClass: "name"
      }, [_vm._v(_vm._s(i.title || i.name))])]) : _vm._e()]
    })], 2)])], 1)]
  }), _vm._v(" "), _c('router-link', {
    class: {
      'theme-font-color': _vm.menu == 'more'
    },
    attrs: {
      "to": "/staff-funcs"
    }
  }, [_c('i', {
    staticClass: "iconfont icongengduoicon"
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.custom.more || '更多'))])])] : [(_vm.u.isShopOwner) ? [_c('router-link', {
    class: {
      'theme-font-color': _vm.menu == 'home'
    },
    attrs: {
      "to": "/staff-home"
    }
  }, [_c('i', {
    staticClass: "iconfont iconshouyeicon"
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.custom.home || '首页'))])]), _vm._v(" "), (_vm.u.isPrivateCoach && _vm.g.data.shop.hasPrivateCourse) ? _c('router-link', {
    class: {
      'theme-font-color': _vm.menu == 'staff-ps'
    },
    attrs: {
      "to": '/staff-pc-schedules/'
    }
  }, [_c('i', {
    staticClass: "iconfont iconsijiaopaike"
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("约课")])]) : (_vm.g.data.shop.hasGroupCourse) ? _c('router-link', {
    class: {
      'theme-font-color': _vm.menu == 'gl-booking'
    },
    attrs: {
      "to": "/group-lesson-list"
    }
  }, [_c('i', {
    staticClass: "iconfont icontuankeyuyue"
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("团课")])]) : _vm._e(), _vm._v(" "), _c('router-link', {
    class: {
      'theme-font-color': _vm.menu == 'stat'
    },
    attrs: {
      "to": "/stat-home"
    }
  }, [_c('i', {
    staticClass: "iconfont icontongjiicon"
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("统计")])]), _vm._v(" "), _c('router-link', {
    class: {
      'theme-font-color': _vm.menu == 'more'
    },
    attrs: {
      "to": "/staff-funcs"
    }
  }, [_c('i', {
    staticClass: "iconfont icongengduoicon"
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.custom.more || '更多'))])])] : (_vm.u.isCoach) ? [_c('router-link', {
    class: {
      'theme-font-color': _vm.menu == 'home'
    },
    attrs: {
      "to": "/staff-home"
    }
  }, [_c('i', {
    staticClass: "iconfont iconshouyeicon"
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("首页")])]), _vm._v(" "), (_vm.u.isGroupCoach && _vm.g.data.shop.hasGroupCourse) ? _c('router-link', {
    class: {
      'theme-font-color': _vm.menu == 'gl-booking'
    },
    attrs: {
      "to": "/group-lesson-list"
    }
  }, [_c('i', {
    staticClass: "iconfont icontuankeyuyue"
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("团课")])]) : _vm._e(), _vm._v(" "), (_vm.u.isPrivateCoach && _vm.g.data.shop.hasPrivateCourse) ? _c('router-link', {
    class: {
      'theme-font-color': _vm.menu == 'staff-ps'
    },
    attrs: {
      "to": '/staff-pc-schedules/'
    }
  }, [_c('i', {
    staticClass: "iconfont iconsijiaopaike"
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("约课")])]) : _vm._e(), _vm._v(" "), _c('router-link', {
    class: {
      'theme-font-color': _vm.menu == 'more'
    },
    attrs: {
      "to": "/staff-funcs"
    }
  }, [_c('i', {
    staticClass: "iconfont icongengduoicon"
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.custom.more || '更多'))])])] : [_c('router-link', {
    class: {
      'theme-font-color': _vm.menu == 'home'
    },
    attrs: {
      "to": "/staff-home"
    }
  }, [_c('i', {
    staticClass: "iconfont iconshouyeicon"
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("首页")])]), _vm._v(" "), _c('router-link', {
    class: {
      'theme-font-color': _vm.menu == 'member-query'
    },
    attrs: {
      "to": "/member-query"
    }
  }, [_c('i', {
    staticClass: "iconfont iconyuetuankeicon"
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("会员")])]), _vm._v(" "), _c('router-link', {
    class: {
      'theme-font-color': _vm.menu == 'cust'
    },
    attrs: {
      "to": "/cust-query"
    }
  }, [_c('i', {
    staticClass: "iconfont iconyuesijiaoicon"
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("客户")])]), _vm._v(" "), _c('router-link', {
    class: {
      'theme-font-color': _vm.menu == 'more'
    },
    attrs: {
      "to": "/staff-funcs"
    }
  }, [_c('i', {
    staticClass: "iconfont icongengduoicon"
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.custom.more || '更多'))])])]]]], 2)])])
},staticRenderFns: []}

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view'), _vm._v(" "), _c('div', {
    staticClass: "global-toast",
    attrs: {
      "id": "_globalToast_"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "global-bubble",
    attrs: {
      "id": "_globalBubble_"
    }
  }), _vm._v(" "), (_vm.u && _vm.u.staffId) ? _c('FloatMenu') : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "chose-cont"
  }, [_c('div', {
    class: {
      'font-color-c': !_vm.checkDate
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.monthDayShow = !_vm.monthDayShow
      }
    }
  }, [_vm._v(_vm._s(_vm.choseitem)), (_vm.type == 'month') ? [_vm._v("月")] : [_vm._v("日")]], 2), _vm._v(" "), (_vm.monthDayShow) ? _c('div', {
    staticClass: "month-day-box"
  }, [(_vm.type == 'month') ? _c('ul', {
    staticClass: "month-day-ul"
  }, [_vm._l((_vm.month), function(item, idx) {
    return [_c('li', {
      key: idx,
      on: {
        "click": function($event) {
          $event.stopPropagation();
          return _vm.choseThis(item)
        }
      }
    }, [_vm._v(_vm._s(item) + "月")])]
  })], 2) : _c('ul', {
    staticClass: "month-day-ul"
  }, [_vm._l((_vm.day), function(item, idx) {
    return [_c('li', {
      key: idx,
      on: {
        "click": function($event) {
          $event.stopPropagation();
          return _vm.choseThis(item)
        }
      }
    }, [_vm._v(_vm._s(item) + "日")])]
  })], 2)]) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "selectRefs",
    staticClass: "qd-select",
    class: _vm.theme
  }, [_c('span', {
    staticClass: "row",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.showPullDown.apply(null, arguments)
      }
    }
  }, [_c('div', {
    staticClass: "select-list"
  }, [(!_vm.selectedTextList.length) ? _c('span', {
    staticClass: "font-color-c"
  }, [_vm._v("\n        " + _vm._s(_vm.placeholder) + "\n      ")]) : [_vm._l((_vm.selectedTextList), function(s, idx) {
    return [(idx < _vm.maxTagCount) ? _c('span', {
      key: idx,
      class: _vm.textCls
    }, [_vm._v("\n            " + _vm._s(s) + "\n          ")]) : _vm._e()]
  })]], 2), _vm._v(" "), (!_vm.disabled) ? _c('i', {
    staticClass: "iconfont iconarrow-down-1 font-color-c"
  }) : _vm._e()]), _vm._v(" "), _c('van-dialog', {
    staticStyle: {
      "overflow": "visible"
    },
    attrs: {
      "show-cancel-button": false,
      "show-confirm-button": true,
      "confirmButtonText": "确定"
    },
    model: {
      value: (_vm.pullDownShow),
      callback: function($$v) {
        _vm.pullDownShow = $$v
      },
      expression: "pullDownShow"
    }
  }, [_c('div', {
    staticClass: "dlg-head theme-btn-bg"
  }, [_c('span', {
    staticClass: "qd-title"
  }, [_vm._v("\n        " + _vm._s(_vm.title || _vm.placeholder) + "\n      ")]), _vm._v(" "), (_vm.clearable) ? _c('a', {
    staticClass: "clear",
    on: {
      "click": _vm.clearValueFun
    }
  }, [_vm._v("清空")]) : _vm._e()]), _vm._v(" "), (_vm.filterable) ? _c('div', {
    staticClass: "input-search section-part"
  }, [_c('i', {
    staticClass: "iconfont iconsearch-2"
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchCont),
      expression: "searchCont"
    }],
    staticClass: "qd-input",
    attrs: {
      "type": "text",
      "placeholder": "搜索"
    },
    domProps: {
      "value": (_vm.searchCont)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.searchCont = $event.target.value
      }, _vm.searchResult]
    }
  }), _vm._v(" "), (_vm.searchCont) ? _c('i', {
    staticClass: "iconfont iconcuowu font-color-c",
    on: {
      "click": _vm.delSearch
    }
  }) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "qd-option"
  }, [_c('ul', {
    ref: "ulRefs",
    style: (_vm.maxHeightCss),
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._t("default", function() {
    return [_c('li', {
      staticClass: "qd-select-item center grey"
    }, [_vm._v(_vm._s(_vm.notFoundText))])]
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "close-dlg"
  }, [_c('i', {
    staticClass: "iconfont iconfork",
    on: {
      "click": _vm.showParent
    }
  })])])])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "echarts"
  })
},staticRenderFns: []}

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    staticStyle: {
      "ime-mode": "disabled"
    },
    attrs: {
      "type": "number",
      "title": "",
      "onkeypress": "return (/[-\\d]/.test(String.fromCharCode(window.event ? event.keyCode : event.which)))"
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "mousewheel": function($event) {
        $event.preventDefault();
      },
      "input": function($event) {
        return _vm.updateVal($event.target.value)
      },
      "blur": _vm.handleBlur,
      "keyup": function($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.handleEnter.apply(null, arguments)
      }
    }
  })
},staticRenderFns: []}

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.totalPages > 1) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('div', {
    staticClass: "row justify-center align-center"
  }, [_c('div', {
    staticClass: "nav"
  }, [(_vm.totalPages > 2 && _vm.pageNo > 1) ? _c('i', {
    staticClass: "iconfont iconarrow-begin",
    on: {
      "click": function($event) {
        return _vm.change(1)
      }
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "nav"
  }, [(_vm.pageNo > 1) ? _c('i', {
    staticClass: "iconfont iconarrow-l",
    on: {
      "click": function($event) {
        return _vm.change(_vm.pageNo - 1)
      }
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "pno"
  }, [_vm._v("第 " + _vm._s(_vm.pageNo) + " 页")]), _vm._v(" "), _c('div', {
    staticClass: "nav"
  }, [(_vm.pageNo < _vm.totalPages) ? _c('i', {
    staticClass: "iconfont iconarrow-r",
    on: {
      "click": function($event) {
        return _vm.change(_vm.pageNo + 1)
      }
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "nav"
  }, [((1 + _vm.pageNo) < _vm.totalPages) ? _c('i', {
    staticClass: "iconfont iconarrow-end",
    on: {
      "click": function($event) {
        return _vm.change(_vm.totalPages)
      }
    }
  }) : _vm._e()])])]) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "float-menu",
    class: {
      'theme-dark': _vm.theme == 'theme-black'
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.rightMenuDlg && _vm.openRightMenu),
      expression: "!rightMenuDlg && openRightMenu"
    }],
    ref: "floatMenuRefs",
    staticClass: "float-menu-icon theme-btn-bg",
    on: {
      "touchstart": function($event) {
        $event.preventDefault();
        return _vm.touchstart.apply(null, arguments)
      }
    }
  }, [_c('i', {
    staticClass: "iconfont iconmenu"
  })]), _vm._v(" "), _c('van-popup', {
    staticClass: "van-pop-has-overlay",
    style: ({
      height: '100%',
      width: '150px'
    }),
    attrs: {
      "position": "right"
    },
    on: {
      "close": function($event) {
        _vm.rightMenuDlg = false
      }
    },
    model: {
      value: (_vm.rightMenuDlg),
      callback: function($$v) {
        _vm.rightMenuDlg = $$v
      },
      expression: "rightMenuDlg"
    }
  }, [_c('div', {
    staticClass: "menu-dlg section-part"
  }, [_c('div', {
    ref: "menuListRefs",
    staticClass: "menu-list"
  }, [_c('div', {
    ref: "menuLiRefs",
    staticClass: "menu-li"
  }, [_vm._l((_vm.rightMenuName), function(value, key, idx) {
    return [(value.children && value.children.length) ? [_c('ul', {
      key: idx,
      style: ({
        height: _vm.openMenusKey == key ? (value.children.filter(function (item) { return !item.isHide; }).length + 1) * 50 + 'px' : '50px'
      })
    }, [_c('li', {
      on: {
        "click": function($event) {
          return _vm.openMenus(value, key)
        }
      }
    }, [_c('svg', {
      staticClass: "icon",
      attrs: {
        "aria-hidden": "true"
      }
    }, [_c('use', {
      attrs: {
        "xlink:href": ("#" + (value.icon) + "-" + (_vm.g.data.themeIconSkin))
      }
    })]), _vm._v(" "), _c('span', [_vm._v(_vm._s(value.name))])]), _vm._v(" "), _vm._l((value.children), function(m, mIdx) {
      return [(!m.isHide) ? _c('li', {
        key: mIdx,
        class: {
          'theme-font-color': _vm.activeMenu == '/' + m.link
        },
        on: {
          "click": function($event) {
            return _vm.clickMenu(m)
          }
        }
      }, [_vm._v(_vm._s(m.name))]) : _vm._e()]
    })], 2)] : _vm._e()]
  })], 2)])])])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    staticStyle: {
      "ime-mode": "disabled"
    },
    attrs: {
      "type": "number",
      "title": ""
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "mousewheel": function($event) {
        $event.preventDefault();
      },
      "input": function($event) {
        return _vm.updateVal($event.target.value)
      },
      "blur": _vm.handleBlur
    }
  })
},staticRenderFns: []}

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tab"
  }, [_c('ul', {
    staticClass: "row"
  }, [_vm._l((_vm.tabListProp), function(item, idx) {
    return [_c('li', {
      key: idx,
      class: {
        active: _vm.tabActive == idx
      },
      on: {
        "click": function($event) {
          return _vm.queryList(idx)
        }
      }
    }, [(item.hasOwnProperty('num')) ? _c('div', [_vm._v(_vm._s(item.num))]) : _vm._e(), _vm._v(" "), (item.hasOwnProperty('icon')) ? _c('div', [_c('i', {
      staticClass: "iconfont",
      class: item.icon
    })]) : _vm._e(), _vm._v(" "), (item.hasOwnProperty('tit')) ? _c('div', [_vm._v(_vm._s(item.tit))]) : _vm._e()])]
  })], 2)])
},staticRenderFns: []}

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "qd-swicth row start align-center",
    on: {
      "click": _vm.turnOn
    }
  }, [_c('div', {
    staticClass: "qd-switch-bar",
    class: {
      'qd-switch-on': _vm.on
    }
  }, [_c('div', {
    staticClass: "qd-switch-node"
  })]), _vm._v(" "), (_vm.title) ? _c('div', {
    staticClass: "qd-swicth-tit"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-head"
  }, [(_vm.showBack) ? _c('div', {
    staticClass: "move",
    attrs: {
      "onclick": "history.go(-1)"
    }
  }, [_c('i', {
    staticClass: "iconfont iconarrow-l"
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "tit"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    staticClass: "move-right"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./theme-black.css": 546,
	"./theme1.css": 547,
	"./theme3.css": 548
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 754;

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 756:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 757:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 758:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 759:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 760:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 761:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 762:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 763:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 764:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 765:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 766:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 767:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 768:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[403]);