webpackJsonp([16],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by zxl on 2017/4/19.
 */
const Conf = {
  API_HOST: "https://api.jzongguan.com",
  IMG_BASE_URL: "//qdimg.oss-cn-shanghai.aliyuncs.com",
  IMG_UPLOAD_URL: "https://api.jzongguan.com" + "/imgUpload",
  VIDEO_UPLOAD: "https://api.jzongguan.com" + "/videoUpload",
  VIDEO_BASE_URL: "//qd-jzg-video.oss-cn-shanghai.aliyuncs.com",
  QR_CODE_URL: "https://tool.jzongguan.com/qr-img.php?val=",
  CONTRACT_UPLOAD: "https://api.jzongguan.com" + "/contractUpload",
  PAGE_SIZE: 30,
  // MSITE_BASE_URL: "http://tool.jzongguan.com",
  MSITE_BASE_URL: "http://192.168.0.128:7091",
  VOICE_BASE_URL: "http://jzongguan.com/voices/",
  IMG_LIB_URL: "https://jzongguan.com/imglib",
  ALIPAY_BASE_URL: "http://zhimakaimen.jzongguan.com",
  MOBILE_CLIENT_URL: "http://app.jzongguan.com/run.html",
  CHECKIN_SOCKET_ADDR: "https://jzongguan.com/socket.io",
  // 授权key
  MEI_TUAN_APP_KEY: "80adf61bd151ad5e",

  WX_APP_ID_PUB: "wxd643724d2f21d666", // pub
  WX_APP_ID_TEST: "wx83462b1a98b26046", // test

  // APP_API_HOST: 'https://app.jzongguan.com',
  APP_API_HOST: "https://app.jzongguan.com",
  Keys: {
    USER: "user",
    TID: "encTid",
    SID: "encSid",
    LOGIN_FLAG: "islogin",
    TENANT_OWNER: "tenant_owner"
  },

  CookieKeys: {
    AUTO_JUMP_TO_MEMBER_PAGE: "member.autoJumpToMemberPage",
    AUTO_JUMP_TO_CUST_PAGE: "cust.autoJumpToCustPage",
    STAFF_SALARY_START_DAY: "staff.salaryStartDay",
    AUTO_ENTRY_CHECKIN: "member.autoEntryCheckin",
    AUTO_OPEN_ENTRY_CHECKIN_DLG: "member.autoOpenEntryCheckinDlg",
    ENABLE_ENTRY_VOICE: "member.enableEntryVoice",
    GL_VIEW_TYPE: "course.gl_view_type",
    PL_VIEW_TYPE: "course.pl_view_type",
    MEMBER_CREATE_SEND_SMS: "member.sendSmsForCreation",
    GL_TBL_SHOW_BOOKINGS: "course.gl_tbl_show_bookings",
    SYS_SKIN: "sys.skink",
    CHECKIN_SCREEN_CONF: "checkin-screen-conf",
    CHECKIN_SCREEN_VERSION: "checkin-screen-version",
    LOGIN_BG: "loginbg",
    FEE_RATE: "shop.fee_rate",
    DISCOUNT: "shop.discount",
    HIDE_INVALID_CARD: "member.hide_invalid_card",
    STAT_MEMBER_AGE_SAPN_TYPE: "stat.member_age_span_type",
    PRODUCT_SALE_DISPLAY_TYPE: "charge.product_sale_display_type",
    IS_QUERY_BY_LOCKER_NO_IN_TOP: "shop.is_query_by_locker_no_in_top",
    MEMBER_QUERY_VIEW_TYPE: "member.member_query_view_type",
    SHOW_MEMBER_ENTRY_CHECKIN_PRINT: "member.show_member_entry_checkin_print",
    PL_BOOKING_MIN_INTERVAL: "course.pl_booking_min_interval",
    SHOW_MEMBER_LESSON_PRINT: "member.show_member_lesson_print",
    VENUE_BOOKING_SELECT_VENUE_ID: "venue.select_venue_id_booking",
    MEMBER_CONTRACT_ARGS: "member.member_contract_args"
  },

  LocalSessionKey: {
    MEMBER_NAME: "member.name"
  },

  StoreTypes: {
    LOGIN: "login",
    LOGOUT: "logout",
    UPDATE_TENANT: "updateTenant",
    UPDATE_SHOP: "updateShop",
    UPDATE_SHOP_NAME: "updateShopName",
    UPDATE_SKIN: "updateSkin"
  }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = Conf;


const SvName = {
  LOGIN: "login",
  LOGIN_WITH_WX: "loginWithWx",
  SYSTIME_GET: "systimeGet",
  SYS_LOG_CREATE: "sysLogCreate",
  SYS_PARAM_VALUE_QUERY: "sysParamValueQuery",
  DICT_QUERY: "dictQuery",
  SMS_AUTHCODE_SEND: "smsAuthcodeSend",
  SMS_AUTHCODE_CHECK: "smsAuthcodeCheck",
  STAFF_LOGIN_AUTHCODE_CHECK: "staffLoginAuthcodeCheck",
  INIT_DATA_LOAD: "initDataLoad",
  TENANT_APPLY: "tenantApply",
  TENANT_ID_QUERY: "tenantIdQuery",
  TENANT_CREATE: "tenantCreate",
  TENANT_WX_AUTH_CANCEL: "tenantWxAuthCancel",
  USER_CHECK: "userCheck",
  REGION_GET: "regionGet",
  USER_PWD_REG: "userPwdReg",
  TEANT_QUERY: "tenantQuery",
  SHOP_QUERY: "shopQuery",
  TENANT_UPDATE: "tenantUpdate",
  TENANT_SHOPS_QUERY: "tenantShopsQuery",
  SHOP_CONF_COPY: "shopConfCopy",
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
  STAFF_AVATAR_UPDATE: "staffAvatarUpdate",
  STAFF_FACE_UPDATE: "staffFaceUpdate",
  STAFF_QUERY: "staffQuery",
  SUB_STAFF_QUERY: "subStaffQuery",
  STAFF_STATUS_UPDATE: "staffStatusUpdate",
  STAFF_VACATION_UPDATE: "staffVacationUpdate",
  IMG_UPLOAD: "imgUpload",
  GROUND_QUERY: "groundQuery",
  GROUND_SAVE: "groundSave",
  GROUND_STATUS_UPDATE: "groundStatusUpdate",
  COURSE_QUERY: "courseQuery",
  COURSE_SAVE: "courseSave",
  PRIVATE_COURSE_QUERY: "privateCourseQuery",
  PRIVATE_COURSE_SAVE: "privateCourseSave",
  COACH_BASE_QUERY: "coachBaseQuery",
  COURSE_SCHEDULE_SAVE: "courseScheduleSave",
  COURSE_SCHEDULE_QUERY: "courseScheduleQuery",
  LESSON_SAVE: "lessonSave",
  LESSON_QUERY: "lessonQuery",
  LESSON_WITH_REVIEW_QUERY: "lessonWithReviewQuery",
  LESSON_CREATE: "lessonCreate",
  LESSON_COACH_COMMENT_QUERY: "lessonCoachCommentQuery",
  SHOP_MEMBER_COUNT_QUERY: "shopMemberCountQuery",
  MEMBER_PHONE_NO_FIND: "memberPhoneNoFind",
  MEMBER_CREATE: "memberCreate",
  MEMBER_ADV_QUERY: "memberAdvQuery",
  MEMBER_SINGLE_QUERY: "memberSingleQuery",
  MEMBER_UPDATE: "memberUpdate",
  MEMBER_AVATAR_UPDATE: "memberAvatarUpdate",
  MEMBER_AVATAR_DELETE: "memberAvatarDelete",
  MEMBER_CARD_QUERY: "memberCardQuery",
  MEMBER_CARD_NO_QUERY: "memberCardNoQuery",
  MEMBER_CARD_PAYMENT_QUERY: "memberCardPaymentQuery",
  MEMBER_CARD_PAYMENT_DEL_LOG_QUERY: "memberCardPaymentDelLogQuery",
  MEMBER_CARD_PAYMENT_CREATE: "memberCardPaymentCreate",
  MEMBER_CARD_VACATION_CREATE: "memberCardVacationCreate",
  MEMBER_CARD_VACATION_CANCEL: "memberCardVacationCancel",
  MEMBER_CARD_VACATION_QUERY: "memberCardVacationQuery",
  MEMBER_CARD_VACATION_UPDATE: "memberCardVacationUpdate",
  MEMBER_CARD_CREATE: "memberCardCreate",
  MEMBER_CARD_DELETE: "memberCardDelete",
  MEMBER_CARD_PAYMENT_DELETE: "memberCardPaymentDelete",
  MEMBER_CARD_STATUS_UPDATE: "memberCardStatusUpdate",
  MEMBER_CARD_DRAFT_SAVE: "memberCardDraftSave",
  MEMBER_FOLLOW_CREATE: "memberFollowCreate",
  MEMBER_FOLLOW_QUERY: "memberFollowQuery",
  MEMBER_BASE_QUERY: "memberBaseQuery",
  MEMBER_COUNTS_QUERY: "memberCountsQuery",
  PRIVATE_COURSE_SCHEDULE_SAVE: "privateCourseScheduleSave",
  PRIVATE_COURSE_SCHEDULE_QUERY: "privateCourseScheduleQuery",
  PC_LESSON_SAVE: "pcLessonSave",
  PC_LESSON_QUERY: "pcLessonQuery",
  MEMBER_ENTRY_CHECKIN_CREATE: "memberEntryCheckinCreate",
  MEMBER_ENTRY_CHECKIN_QUERY: "memberEntryCheckinQuery",
  MEMBER_ENTRY_CHECKIN_STAT_BY_IC_MACH: "memberEntryCheckinStatByIcMach",
  MEMBER_ENTRY_CHECKOUT: "memberEntryCheckout",
  MEMBER_ENTRY_CHECKIN_CANCEL: "memberEntryCheckinCancel",
  MEMBER_ENTRY_CHECKIN_LOG_QUERY: "memberEntryCheckinLogQuery",
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
  CHARGE_QUERY_EXPORT: "chargeQueryExport",
  PRODUCT_CHANGE_LOG_QUERY: "productChangeLogQuery",
  MEMBER_CNT_STAT: "memberCntStat",
  MEMBER_CARD_PAYMENT_CNT_STAT: "memberCardPaymentCntStat",
  MEMBER_STAT: "memberStat",
  MEMBER_ENTRY_STAT_BY_DATE: "memberEntryStatByDate",
  SALES_STAT: "salesStat",
  COACH_STAT: "coachStat",
  COURSE_STAT: "courseStat",
  CHARGE_STAT: "chargeStat",
  CARD_STAT: "cardStat",
  CARD_DETAIL_STAT: "cardDetailStat",
  CARD_AMOUNT_STAT: "cardAmountStat",
  CUST_SOURCE_STAT: "custSourceStat",
  MEMBER_CARD_STAT: "memberCardStat",
  COURSE_CARD_STAT: "courseCardStat",
  CHARGE_ITEM_STAT: "chargeItemStat",
  REVENUE_REPORT_EXPORT: "revenueReportExport",
  CHARGE_PAYMENT_CHNL_STAT: "chargePaymentChnlStat",
  MEMBER_CHECKIN_DAYS_STAT: "memberCheckinDaysStat",
  PRIVATE_COACH_SALARY_CONF_QUERY: "privateCoachSalaryConfQuery",
  PRIVATE_COACH_SALARY_CONF_SAVE: "privateCoachSalaryConfSave",
  PRIVATE_COACH_SALARY_LESSON_CONF_SAVE: "privateCoachSalaryLessonConfSave",
  PRIVATE_COACH_SALARY_LESSON_REWARD_CONF_SAVE: "privateCoachSalaryLessonRewardConfSave",
  SALES_SALARY_CONF_QUERY: "salesSalaryConfQuery",
  SALES_SALARY_CONF_SAVE: "salesSalaryConfSave",
  MEMBER_CARD_QUERY_FOR_UPDATE: "memberCardQueryForUpdate",
  MEMBER_CARD_PAYMENT_UPDATE: "memberCardPaymentUpdate",
  MEMBER_CARD_TRANSFER: "memberCardTransfer",
  STAFF_SALARY_CALC: "staffSalaryCalc",
  STAFF_LIST_SALARY_CALC: "staffListSalaryCalc",
  SYS_NEWS_QUERY: "sysNewsQuery",
  SHOP_ACCESS_PWD_UPDATE: "shopAccessPwdUpdate",
  MEMBER_IMG_QUERY: "memberImgQuery",
  USER_PHONE_UPDATE: "userPhoneUpdate",
  MEMBER_BIRTHDAY_CONF_QUERY: "memberBirthdayConfQuery",
  MEMBER_BIRTHDAY_CONF_UPDATE: "memberBirthdayConfUpdate",
  MEMBER_NOTICE_ARG_QUERY: "memberNoticeArgQuery",
  MEMBER_NOTICE_ARG_UPDATE: "memberNoticeArgUpdate",
  CUST_SOURCE_QUERY: "custSourceQuery",
  CUST_SOURCE_SAVE: "custSourceSave",
  LOCKER_ID_UPDATE: "mecLockerIdUpdate",
  CUST_NAME_QUERY: "custNameQuery",
  CUST_SAVE: "custSave",
  CUST_QUERY: "custQuery",
  CUST_FOLLOW_SAVE: "custFollowSave",
  CUST_FOLLOW_STAT: "custFollowStat",
  CUST_FOLLOW_QUERY: "custFollowQuery",
  CUST_CHANGE_LOG_QUERY: "custChangeLogQuery",
  SHOP_PARAM_QUERY: "shopParamQuery",
  SHOP_PARAM_UPDATE: "shopParamUpdate",
  CHARGE_LIST_CREATE: "chargeListCreate",
  SHOP_BACKUP_CONF_UPDATE: "shopBackupConfUpdate",
  CUST_OWNER_REPLACE: "custOwnerReplace",
  MEMBER_ADVISOR_REPLACE: "memberAdvisorReplace",
  MEMBER_CARD_ADV_QUERY: "memberCardAdvQuery",
  MEMBER_CARD_NOS_UPDATE: "memberCardNosUpdate",
  MEMBER_CARD_BASE_INFO_UPDATE: "memberCardBaseInfoUpdate",
  SHOP_ID_QUERY_FOR_MSITE: "shopIdQueryForMsite",
  MSITE_SHARE_CONF_QUERY: "msiteShareConfQuery",
  MSITE_SHARE_CONF_UPDATE: "msiteShareConfUpdate",
  ACTIVITY_COUPON_QUERY: "activityCouponQuery",
  ACTIVITY_COUPON_SAVE: "activityCouponSave",
  COUPON_STAT: "couponStat",
  COUPON_USED_INFO_UPDATE: "couponUsedInfoUpdate",
  LOTTERY_QUERY: "lotteryQuery",
  LOTTERY_SAVE: "lotterySave",
  LOTTERY_STAT: "lotteryStat",
  LOTTERY_PRIZE_RECEIVE: "lotteryPrizeReceive",
  GE_GAME_PRIZE_RECEIVE: "geGamePrizeReceive",
  SMS_COUNTS_QUERY: "smsCountsQuery",
  SMS_LOG_QUERY: "smsLogQuery",
  SHOP_ORDER_QUERY: "shopOrderQuery",
  SHOP_OWNER_QUERY: "shopOwnerQuery",
  MEMBER_VALUE_CARD_QUERY: "memberValueCardQuery",
  MEMBER_CARD_STATUS_LOG_QUERY: "memberCardStatusLogQuery",
  MEMBER_CARD_CHANGE_LOG_QUERY: "memberCardChangeLogQuery",
  MEMBER_PHONE_CHANGE_LOG_QUERY: "memberPhoneChangeLogQuery",
  MEMBER_CARD_NO_CHANGE_LOG_QUERY: "memberCardNoChangeLogQuery",
  MEMBER_CARD_DEL_LOG_QUERY: "memberCardDelLogQuery",
  MEMBER_STAT_QUERY: "memberStatQuery",
  BOOKING_GL_IMG_UPDATE: "bookingGlImgUpdate",
  CUST_BATCH_UPDATE: "custBatchUpdate",
  CUST_REMINDER_DATE_CLEAR: "custReminderDateClear",
  CUST_LIST_DELETE: "custListDelete",
  MEMBER_BATCH_UPDATE: "memberBatchUpdate",
  MEMBER_LIST_DELETE: "memberListDelete",
  PRIVATE_COACH_BASE_SALARY_SAVE: "privateCoachBaseSalarySave",
  PRIVATE_COACH_LESSON_SALARY_TYPE_SAVE: "privateCoachLessonSalaryTypeSave",
  SHOP_OWNER_PHONE_QUERY: "shopOwnerPhoneQuery",
  TENANT_OWNER_QUERY: "tenantOwnerQuery",
  MEMBER_CARD_BATCH_OPT: "memberCardBatchOpt",
  WX_MCHID_QUERY: "wxMchIdQuery",
  MEMBER_CARD_PYAMENT_TIME_UPDATE: "memberCardPyamentTimeUpdate",
  MEMBER_CARD_PYAMENT_SALES_UPDATE: "memberCardPyamentSalesUpdate",
  MEMBER_BASE_LIST_QUERY: "memberBaseListQuery",
  CLASS_LESSON_CHECKIN: "classLessonCheckin",
  SHOP_ARG_QUERY: "shopArgQuery",
  SHOP_ARG_UPDATE: "shopArgUpdate",
  TENANT_CHAIN_SHOP_CHECK: "tenantChainShopCheck",
  CHECKIN_SUCCESS_VOICE_FILE_GET: "checkinSuccessVoiceFileGet",
  ENTRY_CHECKIN_BG_IMG_UPLOAD: "entryCheckinBgImgUpload",
  ENTRY_CHECKIN_MSG_QUERY: "entryCheckinMsgQuery",
  LOCKER_AREA_QUERY: "lockerAreaQuery",
  LOCKER_AREA_SAVE: "lockerAreaSave",
  LOCKER_CREATE: "lockerCreate",
  LOCKER_UPDATE: "lockerUpdate",
  LOCKER_QUERY: "lockerQuery",
  LOCKER_HIRE_SAVE: "lockerHireSave",
  LOCKER_HIRE_RETURN: "lockerHireReturn",
  LOCKER_HIRE_QUERY: "lockerHireQuery",
  LOCKER_HIRE_COUNT_STAT: "lockerHireCountStat",
  AI_MACH_LOCKER_HIRE_SAVE: "aiMachLockerHireSave",
  AI_MACH_LOCKER_HIRE_RETURN: "aiMachLockerHireReturn",
  AI_MACH_LOCKER_HIRE_DEL: "aiMachLockerHireDel",
  MEMBER_ORG_QUERY: "memberOrgQuery",
  MEMBER_ORG_SAVE: "memberOrgSave",
  PRIVATE_LESSON_STAT: "privateLessonStat",
  COACH_LESSON_COST_STAT: "coachLessonCostStat",
  SHARE_ITEM_SAVE: "shareItemSave",
  SHARE_ENTRY_IMG_SAVE: "shareEntryImgSave",
  SHARE_ITEM_QUERY: "shareItemQuery",
  SHARE_ITEM_OWNER_QUERY: "shareItemOwnerQuery",
  SHARE_ITEM_RECEIVER_QUERY: "shareItemReceiverQuery",
  MEMBER_IMG_SAVE: "memberImgSave",
  MEMBER_ACTION_QUERY: "memberActionQuery",
  SHOP_TAG_SAVE: "shopTagSave",
  SHOP_TAG_QUERY: "shopTagQuery",
  MEMBER_TAGS_UPDATE: "memberTagsUpdate",
  COACH_WORK_SCHEDULE_QUERY: "coachWorkScheduleQuery",
  SHOP_TEST_ITEM_QUERY: "shopTestItemQuery",
  SHOP_TEST_ITEM_SAVE: "shopTestItemSave",
  SCORE_TEST_ITEM_QUERY: "scoreTestItemQuery",
  SCORE_TEST_ITEM_SAVE: "scoreTestItemSave",
  MEMBER_TEST_QUERY: "memberTestQuery",
  MEMBER_TEST_SAVE: "memberTestSave",
  MEMBER_TEST_ITEM_QUERY: "memberTestItemQuery",
  MEMBER_TEST_ITEM_SAVE: "memberTestItemSave",
  MEMBER_SCORE_TEST_QUERY: "memberScoreTestQuery",
  MEMBER_SCORE_TEST_SAVE: "memberScoreTestSave",
  MEMBER_SCORE_TEST_ITEM_QUERY: "memberScoreTestItemQuery",
  MEMBER_SCORE_TEST_ITEM_SAVE: "memberScoreTestItemSave",
  MEMBER_LESSON_POSITION_QUERY: "memberLessonPositionQuery",
  MEMBER_PC_LESSON_BOOKING_CANCEL: "memberPcLessonBookingCancel",
  GROUPBUY_PRODUCT_SAVE: "groupbuyProductSave",
  GROUPBUY_PRODUCT_QUERY: "groupbuyProductQuery",
  GROUPBUY_TEAM_QUERY: "groupbuyTeamQuery",
  GROUPBUY_TEAM_COUNT_BY_STATUS_QUERY: "groupbuyTeamCountByStatusQuery",
  GROUPBUY_ORDER_QUERY: "groupbuyOrderQuery",
  GROUPBUY_TEAM_REFUND: "groupbuyTeamRefund",
  GROUPBUY_TEAM_TIME_CHANGE: "groupbuyTeamTimeChange",
  MEMBER_LESSON_CHECKIN_CANCEL: "memberLessonCheckinCancel",
  IC_MACH_QUERY: "icMachQuery",
  IC_MACH_SAVE: "icMachSave",
  IC_MACH_CARD_SAVE: "icMachCardSave",
  IC_MACH_CARD_QUERY: "icMachCardQuery",
  IC_MACH_USER_CREATE: "icMachUserCreate",
  IC_MACH_USER_DELETE: "icMachUserDelete",
  IC_MACH_USER_QUERY: "icMachUserQuery",
  AI_MACH_QUERY: "aiMachQuery",
  AI_MACH_SAVE: "aiMachSave",
  AI_MACH_CARD_SAVE: "aiMachCardSave",
  AI_MACH_CARD_QUERY: "aiMachCardQuery",
  AI_MACH_BATHROOM_QUERY: "mach/aiMachBathroomQuery",
  AI_MACH_BATHROOM_STATUS_UPATE: "mach/aiMachBathroomStatusUpdate",
  CUST_PC_LESSON_QUERY: "custPcLessonQuery",
  CUST_PC_LESSON_SAVE: "custPcLessonSave",
  MEMBER_CARD_NO_SAVE: "memberCardNoSave",
  CHARGE_OPT_LOG_QUERY: "chargeOptLogQuery",
  PRODUCT_CATE_SAVE: "productCateSave",
  PRODUCT_CATE_QUERY: "productCateQuery",
  CATE_OF_PRODUCTS_UPDATE: "cateOfProductsUpdate",
  MEMBER_PL_STAT: "memberPlStat",
  GROUP_LESSON_STAT: "groupLessonStat",
  CUST_FOLLOW_RESULT_TYPE_SAVE: "custFollowResultTypeSave",
  CUST_FOLLOW_RESULT_TYPE_QUERY: "custFollowResultTypeQuery",
  CARD_AMOUNT_SUM: "cardAmountSum",
  AI_MACH_LOCKER_QUERY: "aiMachLockerQuery",
  AI_MACH_LOCKER_CREATE: "aiMachLockerCreate",
  AI_MACH_LOCKER_UPDATE: "aiMachLockerUpdate",
  TENANT_MOBILE_LOGIN_BG_SAVE: "tenantMobileLoginBgSave",
  TENANT_MOBILE_LOGIN_BG_QUERY: "tenantMobileLoginBgQuery",
  AI_MACH_FACE_BIND_DELETE: "aiMachFaceBindDelete",
  GL_BOOKING_BLACKLIST_QUERY: "glBookingBlacklistQuery",
  GL_BOOKING_BLACKLIST_SAVE: "glBookingBlacklistSave",
  MEMBER_PRIVATE_LESSON_CHECKIN: "memberPrivateLessonCheckin",
  MEMBER_CARD_BATCH_OPT_LOG_QUERY: "memberCardBatchOptLogQuery",
  PRIVATE_COURSE_SCHEDULE_COPY: "privateCourseScheduleCopy",
  MEMBER_PS_COACH_QUERY: "memberPsCoachQuery",
  MALL_PRODUCT_CATE_SAVE: "mallProductCateSave",
  MALL_PRODUCT_CATE_QUERY: "mallProductCateQuery",
  MALL_CATE_OF_PRODUCTS_UPDATE: "mallCateOfProductsUpdate",
  MALL_PRODUCT_SAVE: "mallProductSave",
  MALL_PRODUCT_INFO_UPDATE: "mallProductInfoUpdate",
  MALL_PRODUCT_QUERY: "mallProductQuery",
  MALL_PRODUCT_CHANGE_LOG_QUERY: "mallProductChangeLogQuery",
  MALL_PRODUCT_STOCK_LOG_QUERY: "mallProductStockLogQuery",
  MALL_ORDER_QUERY: "mallOrderQuery",
  MALL_ORDER_PRODUCT_RECEIPT_CONFIRM: "mallOrderProductReceiptConfirm",
  MEMBER_TRANSFER_CARD_LOG_QUERY: "memberTransferCardLogQuery",
  MEMBER_QUERY_FOR_AUTO_COMPLETE: "memberQueryForAutoComplete",
  PRODUCT_CATE_CHARGE_STAT: "productCateChargeStat",
  PC_LESSON_VICE_COACH_SET: "pcLessonViceCoachSet",
  PC_LESSON_COACH_SCORE_SAVE: "pcLessonCoachScoreSave",
  TENANT_OWNER_CHANGE: "tenantOwnerChange",
  SMS_SIGN_QUERY: "smsSignQuery",
  SMS_SIGN_SAVE: "smsSignSave",
  SMS_TASK_QUERY: "smsTaskQuery",
  SMS_TASK_SAVE: "smsTaskSave",
  LESSON_CANCEL_LOG_QUERY: "lessonCancelLogQuery",
  PC_LESSON_CANCEL_LOG_QUERY: "pcLessonCancelLogQuery",
  MEMBER_LESSON_CANCEL_LOG_QUERY: "memberLessonCancelLogQuery",
  MEMBER_LESSON_CHECKIN_CANCEL_LOG_QUERY: "memberLessonCheckinCancelLogQuery",
  MEMBER_CARD_SYNC: "memberCardSync",
  MEMBER_CLIENT_BG_IMG_UPDATE: "memberClientBgImgUpdate",
  CUST_VISIT_CONFIRM: "custVisitConfirm",
  VISIT_CUST_COUNT_STAT: "visitCustCountStat",
  SHOP_DATA_CLEAR: "shopDataClear",
  COACH_TYPE_SAVE: "coachTypeSave",
  COACH_TYPE_QUERY: "coachTypeQuery",
  PRIVATE_COURSE_ORDER_NO_UPDATE: "privateCourseOrderNoUpdate",
  ORDER_NO_UPDATE: "orderNoUpdate",
  PC_ACTION_SAVE: "pcActionSave",
  PC_ACTION_QUERY: "pcActionQuery",
  ENTRY_CHARGE_ITEM_SAVE: "entryChargeItemSave",
  ENTRY_CHARGE_ITEM_QUERY: "entryChargeItemQuery",
  ENTRY_CHARGE_ITEM_CARD_SAVE: "entryChargeItemCardSave",
  ENTRY_CHARGE_ITEM_CARD_QUERY: "entryChargeItemCardQuery",
  STAFF_ENTRY_CHARGE_ITEM_QUERY: "staffEntryChargeItemQuery",
  LOGIN_CALL_FOR_IMSTLIFE: "mach/loginCallForImstlife",
  SHOP_DEPARTMENT_SAVE: "shopDepartmentSave",
  SHOP_DEPARTMENT_QUERY: "shopDepartmentQuery",
  VENUE_QUERY: "venueQuery",
  VENUE_SAVE: "venueSave",
  VENUE_AREA_QUERY: "venueAreaQuery",
  VENUE_AREA_SAVE: "venueAreaSave",
  VENUE_AREA_LIST_CREATE: "venueAreaListCreate",
  VENUE_AREA_ITEM_LIST_SAVE: "venueAreaItemListSave",
  VENUE_AREA_ITEM_QUERY: "venueAreaItemQuery",
  VENUE_AREA_BOOKING_QUERY: "venueAreaBookingQuery",
  VENUE_AREA_CHECKIN_QUERY: "venueAreaCheckinQuery",
  VENUE_AREA_BOOKING_CREATE_FOR_MEMBER: "venueAreaBookingCreateForMember",
  VENUE_AREA_BOOKING_DELETE: "venueAreaBookingDelete",
  VENUE_AREA_ITEM_STATUS_UPDATE: "venueAreaItemStatusUpdate",
  VENUE_AREA_BOOKING_CHECKIN: "venueAreaBookingCheckin",
  VENUE_AREA_ITEM_CONF_QUERY: "venueAreaItemConfQuery",
  VENUE_AREA_CHECKOUT_NOTICE_SEND: "venueAreaCheckoutNoticeSend",
  VENUE_CHECKIN_CONF_QUERY: "venueCheckinConfQuery",
  VENUE_CHECKIN_CONF_SAVE: "venueCheckinConfSave",
  VENUE_AREA_CHECKIN_REMINDER_UPDATE: "venueAreaCheckinReminderUpdate",
  VENUE_AREA_CHECKIN_REMINDER_VOICE_FILE_GET: "venueAreaCheckinReminderVoiceFileGet",
  VENUE_AREA_IN_CHECKIN_ALT: "venueAreaInCheckinAlt",
  VENUE_AREA_ITEM_PAUSE_LOG_QUERY: "venueAreaItemPauseLogQuery",
  SALARY_TEMPLATE_QUERY: "salaryTemplateQuery",
  SALARY_TEMPLATE_SAVE: "salaryTemplateSave",
  MEMBER_LESSON_FOR_CHECKIN_QUERY: "memberLessonForCheckinQuery",
  MEMBER_CARD_CONSUME_STAT: "memberCardConsumeStat",
  VENUE_AREA_CHECKIN_CREATE: "venueAreaCheckinCreate",
  VENUE_AREA_CHECKOUT: "venueAreaCheckout",
  VENUE_AREA_BOOKING_CANCEL_LOG_QUERY: "venueAreaBookingCancelLogQuery",
  CARD_CATE_QUERY: "cardCateQuery",
  CARD_CATE_SAVE: "cardCateSave",
  CARD_CATE_STAT_QUERY: "cardCateStatQuery",
  ENTRY_CHARGE_ITEM_COST_STAT: "entryChargeItemCostStat",
  MEMBER_CONTRACT_PICS_SAVE: "memberContractPicsSave",
  VENUE_COST_TIME_STAT: "venueCostTimeStat",
  ENTRY_CHECKIN_COST_TIME_STAT: "entryCheckinCostTimeStat",
  VENUE_AREA_CHECKIN_DELETE: "venueAreaCheckinDelete",
  BARGAIN_PRODUCT_SAVE: "bargainProductSave",
  BARGAIN_PRODUCT_QUERY: "bargainProductQuery",
  BARGAIN_PRODUCT_ITEM_QUERY: "bargainProductItemQuery",
  BARGAIN_PRODUCT_ITEM_LOG_QUERY: "bargainProductItemLogQuery",
  TENANT_CS_STAFF_QUERY: "tenantCsStaffQuery",
  EVENT_QUERY: "eventQuery",
  EVENT_SAVE: "eventSave",
  EVENT_SUBJECT_QUERY: "eventSubjectQuery",
  EVENT_SUBJECT_SAVE: "eventSubjectSave",
  EVENT_ENROLL_QUERY: "eventEnrollQuery",
  EVENT_SUBJECT_ANSWER_QUERY: "eventSubjectAnswerQuery",
  EVENT_SUBJECT_STAT: "eventSubjectStat",
  PRODUCT_CARD_DISCOUNT_QUERY: "productCardDiscountQuery",
  PRODUCT_CARD_DISCOUNT_SAVE: "productCardDiscountSave",
  GE_GAME_QUERY: "geGameQuery",
  GE_GAME_SAVE: "geGameSave",
  GE_GAME_RECORD_QUERY: "geGameRecordQuery",
  REVIEW_SCORE_TMPT_SAVE: "reviewScoreTmptSave",
  REVIEW_SCORE_TMPT_QUERY: "reviewScoreTmptQuery",
  STAFF_LOGIN_CONF_QUERY: "staffLoginConfQuery",
  STAFF_LOGIN_CONF_UPDATE: "staffLoginConfUpdate",
  STAFF_FAV_MENU_SAVE: "staffFavMenuSave",
  MEMBER_HEART_RATE_CREATE: "mach/memberHeartRateCreate",
  MEMBER_HEART_RATE_QUERY: "mach/memberHeartRateQuery",
  HEART_RATE_SYSTEM_UNBIND: "mach/heartRateSystemUnbind",
  MEMBER_HEART_RATE_DEL: "memberHeartRateDel",
  MEMBER_DRAFT_SAVE: "memberDraftSave",
  MEMBER_DRAFT_QUERY: "memberDraftQuery",
  MEMBER_DRAFT_AUDIT_QUERY: "memberDraftAuditQuery",
  MEMBER_DRAFT_DELETE: "memberDraftDelete",
  MEMBER_DRAFT_AUDIT_SUBMIT: "memberDraftAuditSubmit",
  MEMBER_CARD_PAYMENT_SALES_SAVE: "memberCardPaymentSalesSave",
  TENANT_USER_PASSWORD_RESET: "tenantUserPasswordReset",
  CUST_FOLLOW_TASK_QUERY: "custFollowTaskQuery",
  CUST_FOLLOW_TASK_SAVE: "custFollowTaskSave",
  CUST_COUNT_OF_FOLLOW_TASK_QUERY: "custCountOfFollowTaskQuery",
  CUST_ASSIGN_CONF_SAVE: "custAssignConfSave",
  CUST_ASSIGN_CONF_QUERY: "custAssignConfQuery",
  CUST_ASSIGN_RUN: "custAssignRun",
  CUST_ASSIGN_LOG_QUERY: "custAssignLogQuery",
  MEMBER_AVATAR_CHANGE_LOG_QUERY: "memberAvatarChangeLogQuery",
  PC_LESSON_FOR_MORE_BOOKINGS_QUERY: "pcLessonForMoreBookingsQuery",
  TICKET_SAVE: "ticketSave",
  TICKET_QUERY: "ticketQuery",
  TICKET_CHECKIN: "ticketCheckin",
  TICKET_EXP_DATE_UPDATE: "ticketExpDateUpdate",
  TICKET_CHECKIN_CANCEL: "ticketCheckinCancel",
  CHARGE_ITEM_COURSE_REL_SAVE: "chargeItemCourseRelSave",
  CHARGE_ITEM_COUSES_QUERY: "chargeItemCousesQuery",
  CHARGE_ITEM_COURSE_REL_CLEAR: "chargeItemCourseRelClear",
  MCP_TIME_CHANGE_LOG_QUERY: "mcpTimeChangeLogQuery",
  SECKILL_PRODUCT_SAVE: "seckillProductSave",
  SECKILL_PRODUCT_QUERY: "seckillProductQuery",
  SECKILL_PRODUCT_ORDER_QUERY: "seckillProductOrderQuery",
  SECKILL_PRODUCT_ORDER_REFUND: "seckillProductOrderRefund",
  MEMBER_OPT_LOG_QUERY: "memberOptLogQuery",
  AI_MACH_LOCKER_FEE_CANCEL_QUERY: "aiMachLockerFeeCancelQuery",
  AI_MACH_LOCKER_FEE_CANCEL_CREATE: "aiMachLockerFeeCancelCreate",
  MPL_EXTRA_PAYMENT_QUERY: "mplExtraPaymentQuery",
  PRIVATE_COURSE_SCHEDULE_STATUS_UPDATE: "privateCourseScheduleStatusUpdate",
  PS_END_DATE_EXTEND: "psEndDateExtend",
  PS_TRAIN_PLAN_QUERY: "psTrainPlanQuery",
  PS_TRAIN_PLAN_SAVE: "psTrainPlanSave",
  PS_TRAIN_ITEM_QUERY: "psTrainItemQuery",
  PS_TRAIN_ITEM_SAVE: "psTrainItemSave",
  PC_TRAIN_TEMPLATE_QUERY: "pcTrainTemplateQuery",
  PC_TRAIN_TEMPLATE_SAVE: "pcTrainTemplateSave",
  PC_TRAIN_ITEM_QUERY: "pcTrainItemQuery",
  PC_TRAIN_ITEM_SAVE: "pcTrainItemSave",
  PS_CREATE_FROM_SRC_PS_LIST: "psCreateFromSrcPsList",
  CARD_ONLINE_FREE_CODE_QUERY: "cardOnlineFreeCodeQuery",
  CARD_ONLINE_FREE_CODE_CREATE: "cardOnlineFreeCodeCreate",
  CARD_ONLINE_FREE_CODE_DEL: "cardOnlineFreeCodeDel",
  CONTRACT_PRINT_CONF_QUERY: "contractPrintConfQuery",
  CONTRACT_PRINT_CONF_SAVE: "contractPrintConfSave",
  MEMBER_PC_LESSON_LIST_BOOKING: "memberPcLessonListBooking",
  MACH_RUN_LOG_STAT: "mach/machRunLogStat",
  MACH_RUN_LOG_QUERY: "mach/machRunLogQuery",
  MACH_RUN_BIND: "mach/machRunBind",
  MACH_RUN_LOG_DEL: "machRunLogDel",
  MEMBER_CARD_STAT_DATA_UPDATE: "memberCardStatDataUpdate",
  SHARE_ITEM_RECEIVER_NEXT_QUERY: "shareItemReceiverNextQuery",
  SHARE_ITEM_REWARD_QUERY: "shareItemRewardQuery",
  SHARE_ITEM_REWARD_SAVE: "shareItemRewardSave",
  STAFF_ENTRY_LOG_QUERY: "staffEntryLogQuery",
  PC_SCHEDULE_ORDER_NO_UPDATE: "pcScheduleOrderNoUpdate",
  SHARE_ITEM_REWARD_POINTS_QUERY: "shareItemRewardPointsQuery",
  SHARE_ITEM_REWARD_POINTS_SAVE: "shareItemRewardPointsSave",
  MEMBER_CONTRACT_QUERY: "memberContractQuery",
  CUST_GC_LESSON_BOOKING: "custGcLessonBooking",
  CUST_GC_LESSON_CHECKIN: "custGcLessonCheckin",
  PC_LESSON_TIME_CHANGE: "pcLessonTimeChange",
  PC_BODY_PART_QUERY: "pcBodyPartQuery",
  PC_BODY_PART_SAVE: "pcBodyPartSave",
  PL_CARD_VENUE_CONF_QUERY: "plCardVenueConfQuery",
  PL_CARD_VENUE_CONF_SAVE: "plCardVenueConfSave",
  SALES_TARGET_STAT: "salesTargetStat",
  SALES_TARGET_QUERY: "salesTargetQuery",
  SALES_TARGET_NOTICE_CONF_SAVE: "salesTargetNoticeConfSave",
  SALES_TARGET_NOTICE_CONF_QUERY: "salesTargetNoticeConfQuery",
  SALES_TARGET_SAVE: "salesTargetSave",
  VENUE_AREA_QUERY_BY_PL_BOOKING: "venueAreaQueryByPlBooking",
  SELF_SERVICE_RENEWAL_SAVE: "selfServiceRenewalSave",
  SELF_SERVICE_RENEWAL_QUERY: "selfServiceRenewalQuery",
  SELF_SERVICE_RENEWAL_CHANGE: "selfServiceRenewalChange",
  SELF_SERVICE_PAYMENT_QUERY: "selfServicePaymentQuery",
  SHOP_HEART_SYS_CONF_QUERY: "shopHeartSysConfQuery",
  SHOP_HEART_SYS_CONF_SAVE: "shopHeartSysConfSave",
  MEMBER_PHYSICAL_TEST_DELETE: "memberPhysicalTestDelete",
  MEMBER_PHYSICAL_TEST_SAVE: "memberPhysicalTestSave",
  MEMBER_PHYSICAL_TEST_QUERY: "memberPhysicalTestQuery",
  MEMBER_PHYSICAL_TEST_CREATE: "memberPhysicalTestCreate",
  MEMBER_POSTURE_TEST: "memberPostureTest",
  MEMBER_POSTURE_TEST_DELETE: "memberPostureTestDelete",
  MEMBER_POSTURE_TEST_SAVE: "memberPostureTestSave",
  MEMBER_POSTURE_TEST_QUERY: "memberPostureTestQuery",
  MEMBER_POSTURE_TEST_CREATE: "memberPostureTestCreate",
  MEMBER_HEART_RATE_STAT: "mach/memberHeartRateStat",
  AI_MACH_LOCKER_LOG_QUERY: "aiMachLockerLogQuery",
  MEMBER_IMG_LABEL_QUERY: "memberImgLabelQuery",
  MEMBER_IMG_LABEL_SAVE: "memberImgLabelSave",
  MEMBER_IMG_LABEL_REL_SAVE: "memberImgLabelRelSave",
  WX_ACODE_UNLIMIT_GET: "wxAcodeUnlimitGet",
  MEMBER_PC_LESSONS_BOOKING_CANCEL: "memberPcLessonsBookingCancel",
  WX_MSG_LOG_QUERY: "wxMsgLogQuery",
  VENUE_AREA_ITEMS_RESTORE: "venueAreaItemsRestore",
  MEMBER_CARD_PAYMENT_DRAFT_SAVE: "memberCardPaymentDraftSave",
  MEMBER_CARD_PAYMENT_DRAFT_QUERY: "memberCardPaymentDraftQuery",
  MEMBER_CARD_DRAFT_QUERY: "memberCardDraftQuery",
  MEMBER_CARD_DRAFT_DELETE: "memberCardDraftDelete",
  MEMBER_CARD_DRAFT_AUDIT_SUBMIT: "memberCardDraftAuditSubmit",
  MEMBER_CARD_DRAFT_AUDIT_QUERY: "memberCardDraftAuditQuery",
  MEMBER_CARD_PAYMENT_DRAFT_AUDIT_SUBMIT: "memberCardPaymentDraftAuditSubmit",
  MEMBER_CARD_PAYMENT_DRAFT_AUDIT_QUERY: "memberCardPaymentDraftAuditQuery",
  SHOP_REVENUE_STAT: "shopRevenueStat",
  SHOP_MEMBER_CNT_STAT: "shopMemberCntStat",
  SHOP_PL_STAT: "shopPlStat",
  SHOP_CUST_PC_LESSON_STAT: "shopCustPcLessonStat",
  SHOP_CUST_STAT: "shopCustStat",
  VENUE_AREA_BOOKING_CANCEL_FEE_RETURN: "venueAreaBookingCancelFeeReturn",
  MEMBER_MORE_AVATARS_SYNC_TO_MACH: "memberMoreAvatarsSyncToMach",
  MC_PRINT_CONSUME_QUERY: "spp/mcPrintConsumeQuery",
  MEMBER_LESSON_VACATION_CREATE: "memberLessonVacationCreate",
  MEMBER_LESSON_VACATION_DELETE: "memberLessonVacationDelete",
  AI_MACH_VENUE_AREA_QUERY: "aiMachVenueAreaQuery",
  AI_MACH_VENUE_AREA_SAVE: "aiMachVenueAreaSave",
  VENUE_AREA_BOOKING_CHECKIN_QUERY: "venueAreaBookingCheckinQuery",
  VENUE_AREA_BOOKING_CHECKOUT: "venueAreaBookingCheckout",
  CS_CARD_PAYMENT_APPEND: "csCardPaymentAppend",
  PS_CARD_PAYMENT_APPEND: "psCardPaymentAppend",
  MEMBER_CARD_VALUE_DETAIL_QUERY: "memberCardValueDetailQuery",
  MEMBER_CARD_CURRENT_VALUE_CORRECT: "memberCardCurrentValueCorrect",
  MEMBER_CARD_FOR_CHECK_QUERY: "memberCardForCheckQuery",
  MEMBER_AUTH_CONF_UPDATE: "memberAuthConfUpdate",
  STAFF_AVATAR_PHOTO_DELETE: "staffAvatarPhotoDelete",
  // 申请微信在线支付
  WX_MCH_ID_APPLY_SAVE: "wxMchIdApplySave",
  WX_MCH_ID_APPLY_SUBMIT: "wxMchIdApplySubmit",
  WX_MCH_ID_APPLY_QUERY: "wxMchIdApplyQuery",
  WX_MCH_ID_APPLY_MENT_STATE_UPDATE: "wxMchIdApplyMentStateUpdate",
  WX_MCH_ID_UPDATE: "wxMchIdUpdate",

  // 新设备
  BODY_TEST_QUERY: "mach/bodyTestQuery",
  BODY_TEST_MACH_SAVE: "bodyTestMachSave",
  BODY_TEST_MACH_QUERY: "bodyTestMachQuery",

  // 美团点评授权
  MT_APP_CONF_QUERY: "mtAppConfQuery",
  MT_APP_AUTHORIZE: "mtAppAuthorize",
  MT_APP_AUTHORIZE_SELECT: "mtAppAuthorizeSelect",
  MT_APP_CARD_SYNCHRONISE: "mtAppCardSynchronise",
  MT_APP_CARD_QUERY: "mtAppCardQuery",
  MT_APP_CARD_UPDATE: "mtAppCardUpdate",
  // 美团核销
  MT_APP_ORDER_CREATE: "mtAppOrderCreate",
  MT_APP_ORDER_CANCEL: "mtAppOrderCancel",
  MT_APP_ORDER_QUERY: "mtAppOrderQuery",
  MT_APP_ORDER_CHECK: "mtAppOrderCheck",

  // 抖音授权
  POI_APP_CONF_QUERY: "poiAppConfQuery",
  POI_APP_AUTHORIZE: "poiAppAuthorize",
  POI_APP_AUTHORIZE_SELECT: "poiAppAuthorizeSelect",
  POI_APP_CARD_SYNCHRONISE: "poiAppCardSynchronise",
  POI_APP_CARD_QUERY: "poiAppCardQuery",
  POI_APP_CARD_UPDATE: "poiAppCardUpdate",
  // 抖音核销
  POI_APP_ORDER_CHECK: "poiAppOrderCheck",
  POI_APP_ORDER_CREATE: "poiAppOrderCreate",
  POI_APP_ORDER_QUERY: "poiAppOrderQuery",
  POI_APP_ORDER_CANCEL: "poiAppOrderCancel",
  // POS
  POS_PARAM_SAVE: "posParamSave",
  POS_PARAM_QUERY: "posParamQuery",
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

  // 散客入场券
  ENTRY_TICKET_PRODUCT_SAVE: "entryTicketProductSave",
  ENTRY_TICKET_PRODUCT_QUERY: "entryTicketProductQuery",
  ENTRY_TICKET_ORDER_QUERY: "entryTicketOrderQuery",
  ENTRY_TICKET_ORDER_REFUND: "entryTicketOrderRefund",
  ENTRY_TICKET_IMG_CREATE: "entryTicketImgCreate",
  CUST_ENTRY_CHECKIN_CREATE: "custEntryCheckinCreate",
  CUST_ENTRY_CHECKIN_QUERY: "custEntryCheckinQuery",
  CUST_ENTRY_CHECKIN_CANCEL: "custEntryCheckinCancel",
  CUST_ENTRY_CHECKIN_LOG_QUERY: "custEntryCheckinLogQuery",

  // 分期
  INSTALMENT_CONF_QUERY: "instalmentConfQuery",
  INSTALMENT_CONF_SAVE: "instalmentConfSave",
  INSTALMENT_ORDER_CREATE: "instalmentOrderCreate",
  INSTALMENT_ORDER_DETAIL_SYNCHRONISE: "instalmentOrderDetailSynchronise",
  INSTALMENT_ORDER_UNBIND: "instalmentOrderUnbind",
  INSTALMENT_ORDER_QUERY: "instalmentOrderQuery",
  INSTALMENT_ORDER_DETAIL_QUERY: "instalmentOrderDetailQuery",
  INSTALMENT_ORDER_DELETE: "instalmentOrderDelete",
  INSTALMENT_ORDER_UPDATE: "instalmentOrderUpdate",
  INSTALMENT_ORDER_DELAY: "instalmentOrderDelay",
  INSTALMENT_ORDER_DELAY_LOG_QUERY: "instalmentOrderDelayLogQuery",
  // 阶段付商品
  INSTALMENT_PRODUCT_SAVE: "instalmentProductSave",
  INSTALMENT_PRODUCT_QUERY: "instalmentProductQuery",
  INSTALMENT_ORDER_STAT: "instalmentOrderStat",

  INDEX_NOTICE_SAVE: "indexNoticeSave",
  INDEX_NOTICE_QUERY: "indexNoticeQuery",

  GL_TABLE_EXPORT_CONFQUERY: "glTableExportConfQuery",
  GL_TABLE_EXPORT: "glTableExport",
  LOGOUT: "logout",
  FITNESS_EQUIPMENT_SAVE: "fitnessEquipmentSave",
  FITNESS_EQUIPMENT_QUERY: "fitnessEquipmentQuery",

  POINTS_CAL_SAVE: "pointsCalSave",
  POINTS_CAL_QUERY: "pointsCalQuery",

  CONTRACT_TMPT_SAVE: "contractTmptSave",
  CONTRACT_TMPT_QUERY: "contractTmptQuery",
  CONTRACT_PARAMS_QUERY: "contractParamsQuery",

  // 优惠券
  AVAILABLE_COUPON_LOG_QUERY: "availableCouponLogQuery",
  USE_COUPON_LOG_QUERY: "useCouponLogQuery",
  USE_COUPON_LOG_REL_QUERY: "useCouponLogRelQuery",
  // 新增分享链接
  COUPON_USED_INFO_UPDATE: "couponUsedInfoUpdate",
  ACTIVITY_COUPON_URL_QUERY: "activityCouponUrlQuery",
  ACTIVITY_COUPON_URL_SAVE: "activityCouponUrlSave",

  // 新增退款
  MALL_ORDER_PRODUCT_REFUND: "mallOrderProductRefund",
  MALL_ORDER_PRODUCT_REFUND_UPDATE: "mallOrderProductRefundUpdate",
  MALL_ORDER_PRODUCT_REFUND_QUERY: "mallOrderProductRefundQuery",

  // 新增魔点
  MODIAN_CONF_QUERY: "modianConfQuery",
  MODIAN_CONF_SAVE: "modianConfSave",
  FACE_MACH_CONF_QUERY: "faceMachConfQuery",
  LOGIN_CALL_FOR_OPEN_DOOR: "mach/loginCallForOpenDoor",
  MODIAN_MACH_QUERY: "modianMachQuery",
  MODIAN_MACH_UPDATE: "modianMachUpdate",

  MODIAN_MACH_PWD_GET: "modianMachPwdGet",

  // 新增-自定义支付方式
  PAYMENT_CHANNEL_SAVE: "paymentChannelSave",
  PAYMENT_CHANNEL_QUERY: "paymentChannelQuery",

  CUST_TAG_SET: "custTagSet",
  CUST_GROUP_LESSON_QUERY: "custGroupLessonQuery"
};
/* harmony export (immutable) */ __webpack_exports__["a"] = SvName;


const Dict = {
  WeekName: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  SimpleWeekName: ["日", "一", "二", "三", "四", "五", "六"],
  Sex: { true: "男", false: "女" },
  SexDesc: { true: "♂ 男", false: "♀ 女" },
  ShopType: {
    GYM: 1,
    FENCING: 4
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
    美术培训: 21,
    马术馆: 22,
    综合运动馆: 99,
    其他: 100,
    其他1: 101
  },
  UserStatus: { NOT_FOUND: -1, OK: 0, NO_PASSWD: 1, FROZEN: 99, INVALID: 100 },
  CardTypeDict: {
    TERM_CARD: { value: 1, name: "期限卡" },
    TIMES_CARD: { value: 2, name: "次数卡" },
    VALUE_CARD: { value: 3, name: "储值卡" },
    TIMING_CARD: { value: 4, name: "计时卡" }
  },
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
  CardType: { 1: "期限卡", 2: "次数卡", 3: "储值卡", 4: "计时卡" },
  CardTimeTypes: { 1: "分钟", 2: "小时" },
  CardClass: { 0: "会籍卡", 1: "团课卡", 2: "私教卡" },
  CardUnitName: { 1: "天", 2: "次", 3: "元", 4: "分钟" },
  CardTypeSuffix: { 2: "次数", 3: "金额", 4: "时长" },
  CardPaymentChannel: {
    1: "现金",
    2: "刷卡",
    3: "支付宝",
    4: "微信",
    5: "其他",
    8: "手机银行",
    9: "MPay",
    10: "POS机" // POS
  },
  CardPaymentChannelForView: {
    0: "储值卡",
    1: "现金",
    2: "刷卡",
    3: "支付宝",
    4: "微信",
    5: "其他",
    6: "积分",
    7: "兑换码",
    8: "手机银行",
    9: "MPay",
    10: "POS机", // POS
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
    MEMBER: ["MEMBER_CREATE", "MEMBER_EDIT", "MEMBER_ADV_EDIT", "MEMBER_CARD_PAYMENT", "MEMBER_CARD_TRANSFER", "MEMBER_CARD_PAUSE", "MEMBER_CARD_CHANGE", "MEMBER_CARD_VACATION", "MEMBER_PHONE_ALT", "MEMBER_QUERY_ALL", "MEMBER_AGENT", "TEST_ITEM_CONF", "MEMBER_NOTICE_CONF", "VIEW_MEMBER_ENTRY_CHECKIN", "QUERY_MEMBER_BY_FLAG_IN_MINE", "MEMBER_DRAFT_CREATE", "MEMBER_DRAFT_AUDIT", "MEMBER_CARD_DRAFT_CREATE", "MEMBER_CARD_DRAFT_CHECK", "SALES_VIEW_MEMBERS_DISABLE", "MC_ALT_VACATION_IN_MOBILE", "SET_MEMBER_ADVISOR", "SET_MEMBER_COACH", "SET_MEMBER_SALES", "MEMBER_CARD_VACATION_IN_MOBILE", "FIRST_UPLOAD_MEMBER_HEAD", "DISABLE_MEMBER_QUERY", "EDIT_MPL_TIME"],
    CUST: ["CUST_CREATE", "CUST_EDIT", "VIEW_ALL_CUST_FOLLOW", "CUST_QUERY_ALL", "CUST_EXPORT"],
    COURSE: ["COURSE_EDIT", "PL_EDIT_DISABLE", "PC_BOOKING_DISABLE", "PL_CANCEL_DISABLE", "CANCEL_OUTDATE_PL", "COACH_ADD_CHECKIN_DISABLE", "BOOKING_CHECKIN_CONF", "VIEW_SHOP_PL", "CHECKIN_PAST_PL", "PL_CHECKIN", "PL_QRCODE_VIEW", "COACH_CHECKIN_ML_DISABLE", "PS_COACH_LESS_FEE", "CHANGE_OUTDATE_PL_TIME"],
    STAFF: ["STAFF_EDIT", "COACH_TYPE_EDIT", "SHOP_DEPT_EDIT", "STAFF_LIST_SALARY", "SALES_TARGET_CONF", "COACH_WORKTIME_EDIT_DISABLE", "COACH_WORKTIME_EDIT"],
    ACC: ["CHARGE_EDIT", "CHARGE_ITEM_CONF", "PRD_PURCHASE_PRICE"],
    STAT: ["STAT_MEMBER", "STAT_PRIVATE_LESSON", "STAT_GROUP_LESSON", "STAT_STAFF", "STAT_CARD", "STAT_REVENUE", "STAT_REPORT", "VIEW_SHOP_STAT_IN_PHONE", "MORE_REPORTS"],
    MALL: ["MALL_PRODUCT_VIEW", "MALL_PRODUCT_EDIT", "MALL_PRODUCT_CATE_EDIT", "MALL_PRODUCT_ORDER_VIEW", "MALL_PRODUCT_ORDER_CANCEL", "MALL_SHOPPING_CART_VIEW", "MALL_PRODUCT_LOG_VIEW", "POS_PAY", "POS_PAY_REFUND", "INSTALMENT_CREATE", "INSTALMENT_UNBIND", "INSTALMENT_QUERY", "INSTALMENT_PRODUCT_EDIT", "INSTALMENT_PRODUCT_QUERY"],
    MARKET: ["MARKET_CONF"],
    VENUE: ["VENUE_CONF", "CANCEL_OUTDATE_VENUE_BOOKING", "VENUE_BOOKING_PAUSE", "VENUE_BOOKING_RESTORE", "BOOKING_OUTDATE_VENUING"],
    MACH: ["IC_MACH_CONF", "AI_MACH_CONF", "AI_MACH_LOCKER_OPT", "HRS_RANK_VIEW"],
    OTHER: ["SHOP_FEEDBACK", "LOCKER_EDIT", "LOCKER_QUERY", "SMS_TASK_CONF", "TICKET_QUERY", "TICKET_EDIT", "TICKET_CHECKIN", "MT_CONSUME", "MT_REVERSE_CONSUME", "POI_CONSUME", "POI_REVERSE_CONSUME", "MT_PRODUCT_GET", "POI_PRODUCT_GET"]
  },

  RoleFunc: {
    SHOP_EDIT: { value: 1, name: "门店编辑" },
    SHOP_GROUND_EDIT: { value: 2, name: "场地编辑" },
    SHOP_NOTICE_EDIT: { value: 3, name: "门店公告发布" },
    CARD_EDIT: { value: 4, name: "会员卡设置" },
    CUST_SOURCE: { value: 27, name: "客户来源设置" },
    MEMBER_NOTICE_CONF: { value: 5, name: "会员提醒设置" },
    SMS_LOG_VIEW: { value: 6, name: "短信记录查看" },
    POINT_EDIT: { value: 7, name: "积分设置" },
    PARAM_EDIT: { value: 8, name: "参数设置" },
    SYS_PAYMENT: { value: 9, name: "软件费支付", hidden: true },
    STAFF_EDIT: { value: 10, name: "员工编辑" },
    COURSE_EDIT: { value: 11, name: "课程编辑" },
    MEMBER_CREATE: { value: 12, name: "会员创建" },
    MEMBER_EDIT: { value: 13, name: "会员基础编辑" },
    MEMBER_ADV_EDIT: { value: 33, name: "会员高级编辑" },
    MEMBER_QUERY_ALL: { value: 20, name: "查询所有会员" },
    MEMBER_AGENT: { value: 14, name: "会员代签" },
    CARD_PAYMENT_VIEW: { value: 16, name: "会员卡账单查看" },
    CHARGE_EDIT: { value: 17, name: "记账" },
    CHARGE_ITEM_CONF: { value: 21, name: "资费项设置" },
    CUST_CREATE: { value: 18, name: "客户创建" },
    CUST_EDIT: { value: 19, name: "客户更新" },
    VIEW_ALL_CUST_FOLLOW: { value: 32, name: "查看所有客户跟进" },
    SHOP_FEEDBACK: { value: 26, name: "意见箱" },
    LOCKER_EDIT: { value: 29, name: "租柜管理" },
    AI_MACH_CONF: { value: 35, name: "智能设备管理" },
    TEST_ITEM_CONF: { value: 30, name: "会员测试管理" },
    MALL_PRODUCT_VIEW: { value: 39, name: "商城商品查看" },
    MALL_PRODUCT_EDIT: { value: 40, name: "商城商品编辑" },
    MALL_PRODUCT_CATE_EDIT: { value: 41, name: "商城商品类别编辑" },
    MALL_PRODUCT_ORDER_VIEW: { value: 42, name: "商城订单查看" },
    // 新增退款
    MALL_PRODUCT_ORDER_CANCEL: { value: 45, name: "商城商品退款" },
    MALL_SHOPPING_CART_VIEW: {
      value: 43,
      name: "商城购物车查看",
      hidden: true
    },
    MALL_PRODUCT_LOG_VIEW: { value: 44, name: "商城日志查看" },
    MARKET_CONF: { value: 31, name: "营销设置" },
    STAT_MEMBER: { value: 15, name: "会员统计" },
    STAT_PRIVATE_LESSON: { value: 22, name: "私教课统计" },
    STAT_GROUP_LESSON: { value: 34, name: "团课统计" },
    STAT_STAFF: { value: 23, name: "员工业绩统计" },
    STAT_CARD: { value: 24, name: "会员卡统计" },
    STAT_REVENUE: { value: 25, name: "收支统计" },
    STAT_REPORT: { value: 28, name: "营业报表" },
    PL_EDIT_DISABLE: { value: 36, name: "禁止私教手机排课" },
    PC_BOOKING_DISABLE: { value: 37, name: "禁止私教手机约课" },
    ENTRY_CHECKIN_CONF: { value: 46, name: "入场签到设置" },
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
    VIEW_SHOP_STAT_IN_PHONE: { value: 53, name: "手机端门店运营统计" },
    COACH_ADD_CHECKIN_DISABLE: { value: 54, name: "禁止教练添加团课签到学员" },
    SMS_TASK_CONF: { value: 55, name: "短信群发" },
    QUERY_MEMBER_BY_FLAG_IN_MINE: {
      value: 56,
      name: "根据会员标识仅查名下会员"
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
      remark: "允许会员签到今日之前的私教课"
    },
    CANCEL_OUTDATE_VENUE_BOOKING: {
      value: 63,
      name: "取消过期预订",
      remark: "指取消已过时间，或者不在取消时间范围内的场地预约。"
    },
    MORE_REPORTS: { value: 64, name: "更多报表" },
    SALES_VIEW_MEMBERS_DISABLE: {
      value: 65,
      name: "禁止销售查看名下会员",
      remark: "禁止会员的销售查询到会员信息"
    },
    COACH_CHECKIN_ML_DISABLE: {
      value: 66,
      name: "禁止教练手机端代会员签到团课"
    },
    MEMBER_CARD_CHANGE: { value: 67, name: "会员卡充值修改" },
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
      remark: "设置场馆工作人员代会员签到私教课"
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
    PS_COACH_LESS_FEE: { value: 86, name: "私教排课教练课时费编辑" },
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
      name: "编辑会员卡充值时间",
      remark: "会员卡充值时编辑充值时间"
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
    GL_BOOKING: {
      value: 108,
      name: "团课代预约",
      remark: "可代会员预约团课（电脑端和手机端）"
    },
    CUST_FOLLOW_DEL: { value: 109, name: "客户跟进删除" },
    CHECKED_GL_CANCEL: { value: 110, name: "取消已签到的团课" },
    MC_VACATION_CONF: { value: 111, name: "会员卡请假限制设置" },
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
    // pos
    POS_PAY: { value: 124, name: "POS机支付" },
    POS_PAY_REFUND: { value: 125, name: "POS机退款" },

    // 分期
    INSTALMENT_CREATE: { value: 126, name: "阶段付订单创建" },
    INSTALMENT_UNBIND: { value: 127, name: "阶段付订单解约" },
    INSTALMENT_QUERY: { value: 128, name: "阶段付订单查询" },
    INSTALMENT_PRODUCT_EDIT: { value: 129, name: "阶段付商品编辑" },
    INSTALMENT_PRODUCT_QUERY: { value: 130, name: "阶段付商品查询" },
    CANCEL_OUTDATE_GL_BOOKING: {
      value: 131,
      name: "取消开课后的团课预约",
      remark: "团课上课开始时间到达后，也可代会员取消预约"
    },
    EDIT_ALL_CUST_FOLLOW: { value: 132, name: "跟进所有客户" }
  },
  StaffStatus: { 0: "正常", 9: "离职", 99: "删除" },
  LessonStatus: { 0: "未上课", 1: "已使用", 9: "已结束" },
  PcLessonStatus: { 0: "已预约", 1: "未签到", 9: "已结束" },
  FencingType: {
    CHILD_FOIL: { value: 1, name: "儿童花剑" },
    CHILD_EPEE: { value: 2, name: "儿童重剑" },
    CHILD_SABER: { value: 3, name: "儿童佩剑" },
    ADULT_FOIL: { value: 4, name: "成人花剑" },
    ADULT_EPEE: { value: 5, name: "成人重剑" },
    ADULT_SABER: { value: 6, name: "成人佩剑" }
    //1: '儿童花剑', 2: '儿童重剑', 3: '儿童佩剑', 4: '成人花剑', 5: '成人重剑', 6: '成人佩剑'
  },
  FencingLevel: {
    L1: { value: 1, name: "小小班" },
    L2: { value: 2, name: "基础班" },
    L3: { value: 3, name: "初级班" },
    L4: { value: 4, name: "中级班" },
    L5: { value: 5, name: "青少年班" },
    L6: { value: 6, name: "成人班" },
    L7: { value: 7, name: "专业班" }
    //小小班、基础班、初级班、中级班、青少年班、成人班、专业班
  },
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
    7: "商城购物消费",
    8: "分销奖励",
    // pos
    // 9: "线上商城订单退款（恢复积分）",
    // 10: "线上商城POS机订单退款（恢复积分）",
    // 11: "线上商城退款",
    // 12: "线下商城退款（POS机）",
    13: "心率积分"
  },
  MemberLessonStatus: { 1: "已预约", 2: "已签到" },
  ArApName: { 0: "应收款", 1: "应付款" },
  CardPaymentType: {
    1: "新会员办卡",
    2: "会员卡续费",
    3: "老会员购卡",
    4: "分销奖励",
    5: "批量增加天数",
    6: "退卡"
  },
  DateStatType: { BY_DAY: 1, BY_WEEK: 2, BY_MONTH: 3 },
  ScoreDict: [{
    typeName: "总体评分",
    values: ["差", "较差", "一般", "好", "很好"]
  }, {
    typeName: "上课时间", // score1
    values: ["混乱", "不准", "一般", "按时", "完美"]
  }, {
    typeName: "上课内容", // score2
    values: ["差", "较差", "一般", "好", "完美"]
  }, {
    typeName: "上课态度", // score3
    values: ["差", "较差", "一般", "好", "极好"]
  }],
  OrgTypes: ["民营企业", "国企", "上市公司", "外企", "世界五百强", "政府机关", "服务业", "IT", "医疗卫生", "娱乐", "教育", "培训", "金融", "艺术"],
  JobTitles: ["基层", "中层", "高层", "老板", "自由职业", "其他"],
  Hobbies: ["运动", "美食", "电影", "阅读", "唱歌", "逛街", "聊天", "打牌", "上网", "家务", "旅游", "汽车", "钟表", "珠宝", "服饰", "艺术", "美容", "其他"],
  Shapes: ["瘦弱", "苗条", "健壮", "微胖", "肥胖"],
  FollowTypes: ["", "电话", "微信", "QQ", "短信", "面谈"],
  CustTypes: ["外场客户", "到店访客", "订金客户", "线上访客", "成交客户"],
  CouponTypes: ["", "代金券", "折扣券", "满减券"],
  GuestTypes: ["", "访客", "会员", "不限"],
  SmsTypes: ["", "生日提醒", "会员卡提醒", "课程提醒", "会员团课出勤提醒", "会员入场锻炼提醒", "会员私教课出勤提醒", "客户手机号验证", "会员预约私教课", "会员取消私教课", "私教预约私教课", "私教取消私教课", "会员预约团课", "会员取消团课", "拼团通知", "团课上课提醒", "团课取消提醒", "会员操作通知", "团课排队通知", "短信群发", "私教上课提醒", "团课代预约通知", "团课代签到通知", "登录验证码", "会员审核单", "微商城通知", "手机号验证", "活动通知", "统计报表消息", "场地计时消费通知", "会员卡审核单通知", "会员卡充值审核单通知", "场地预约通知", "会员卡次数提醒", "团课付费预约成功通知", "客户提交阶段付成功通知", "客户签约阶段付成功通知"],
  CustLevels: ["", "流失", "渺茫", "一般", "重要", "核心"],
  ShopArg: {
    COACH_LESSON_BGCOLOR: 2003,
    POINTS_TITLE_CONF: 2005,
    SHARE_ENTRY_IMG: 2006,
    IC_MACH_NO: 2007,
    PL_CHECKIN_TYPE: 102,
    PL_CHECKIN_PRINT_ENABLE: 2026,
    PL_CHECKIN_LIMIT_TIME: 2027,
    PL_CHECKIN_QRCODE_MAX_TIME: 2032,
    PL_CHECKIN_TIME_SPEC_CONF: 2043,
    PRIVATE_COACH_BASE_SALARY_TYPE: 1002,
    ENTRY_CHECKIN_VOICE_TYPE: 2010,
    PRIVATE_COACH_LESSON_SALARY_TYPE: 1000,
    POINTS_ENTRY_CHECKIN_BY_CARD: 2011,
    MEMBER_CLIENT_BG: 2012,
    ENABLE_ZHIQI_ENTRY_MACH: 2015,
    ENABLE_QRCODE_MACH: 2077,
    PL_DOUBLE_CHECKIN_CONF: 126,
    SHOW_TIMS_CARD_AMOUNT_IN_PL_CHECKIN_BILL: 2050,
    POS_ENABLE: 2106, // pos 机启用
    ENABLE_MODIAN_ENTRY_MACH: 2230,
    MSITE_SHOP_ENTRY_CHECKINS: 2231
  },
  GroupbuyTeamStatus: ["未成团", "已成团", "已取消"],
  OrderStatus: { 0: "未支付", 9: "已支付", 1: "已退款", 2: "已使用" },
  // 新增退款
  refundStatus: { 0: "处理中", 1: "拒绝", 9: "同意" },
  OrderRefundStatus: { 2: "商户余额不足" },
  IcMachType: {
    1: "入场签到",
    2: "出场签出",
    3: "入场+出场",
    4: "团课签到",
    5: "私教课签到",
    6: "团课+私教课签到"
  },
  AiMachType: {
    1: "入场签到",
    2: "出场签出",
    3: "入场签到 + 出场签到",
    4: "团课签到",
    5: "私教课签到",
    6: "团课签到 + 私教课签到",
    9: "租柜管理",
    10: "心率系统",
    11: "淋浴室门禁",
    12: "入场签到 + 私教课签到",
    13: "有氧设备",
    14: "入场签到 + 团课签到",
    15: "团课签出",
    16: "场地预约签到",
    17: "场地预约签出",
    18: "团课签到 + 场地预约签到"
  },
  // 新增魔点
  AiMachBrands: ["", "智奇", "Tack", "力网", "魔点"],
  LockerStates: ["空闲", "占用", "长租中", "停用"],
  MallProductStatuses: ["上架", "下架"],
  MallProductTypes: ["会员卡", "物品"],
  MallProductPriceTypes: ["积分", "金额", "积分+金额"],
  ChargeFroms: ["", "记账", "会员卡充值", "转卡费", "拼团费", "租柜费", "微商城订单", "优惠券费", "卡请假费", "补卡费", "砍价费", "活动收费", "秒杀费", "团课付费预约费", "场地预约费", "客户定金", "散客入场券", "记账订金",
  // 新增退款
  "在线商城退款"],
  MallOrderStatus: [],
  SmsTaskReceiverTypes: ["全部会员", "有效会员", "无效会员", "未开卡会员", "所有私教会员", "有效私教会员", "无效私教会员", "未入场锻炼的会籍卡会员"],
  BodyParts: ["手臂", "胸部", "肩部", "背部", "腹部", "臀部", "腿部", "综合"],
  MemberCardSrc: ["", "会员信息", "会员更多卡号", "会员卡信息"],
  MemberDraftStatus: ["草稿", "待审核", "审核通过"],
  ActionWeightUnits: ["KG", "磅", "自重"],
  ActionCountUnits: ["次", "秒", "分钟", "小时"],
  SysMenus: [{ id: 10, name: "会员查询", path: "member-query" }, { id: 11, name: "新建会员", path: "member-create" }, { id: 12, name: "会员卡查询", path: "member-card-query" }, { id: 13, name: "会员操作日志", path: "member-opt-log" }, { id: 20, name: "客户查询", path: "cust-query" }, { id: 21, name: "客户创建", path: "cust-create" }, { id: 22, name: "客户跟进记录", path: "cust-follow-query" }, { id: 23, name: "客户跟进统计", path: "cust-follow-stat" }, { id: 30, name: "团课课表", path: "group-lesson" }, { id: 31, name: "团课排课", path: "group-course-schedule" }, { id: 32, name: "私教课表", path: "private-lesson" }, { id: 33, name: "私教排课", path: "private-course-schedule" }, { id: 34, name: "课程评价", path: "gl-with-review" }, { id: 40, name: "商品售卖", path: "product-sale" }, { id: 41, name: "手工记账", path: "charge-list" }, { id: 50, name: "销售业绩统计", path: "shop-stat-sales" }, { id: 51, name: "团课教练业绩", path: "shop-stat-group-coach" }, { id: 52, name: "私教业绩", path: "shop-stat-private-coach" }, { id: 53, name: "会员卡账单", path: "shop-stat-card" }, { id: 54, name: "收支统计", path: "shop-stat-revenue" }, { id: 55, name: "营业额统计", path: "shop-stat-report" }, { id: 60, name: "短信群发", path: "sms-task" }, { id: 61, name: "智能门禁", path: "ai-mach-entrance" }, { id: 62, name: "智能租柜", path: "ai-mach-locker" }, { id: 63, name: "心率系统", path: "ai-mach-hrs" }, { id: 64, name: "场地预约", path: "venue-booking" }, { id: 65, name: "场地计时", path: "venue-checkin" }, { id: 66, name: "新建会员审核单", path: "member-draft-create" }, { id: 67, name: "会员审核单查询", path: "member-draft-query" }, { id: 68, name: "单次入场券", path: "ticket" }, { id: 69, name: "会员卡审核单", path: "member-card-draft-query" }, {
    id: 70,
    name: "会员卡充值审核单",
    path: "member-card-payment-draft-query"
  }, { id: 71, name: "美团核销", path: "mt-verify-coupon" }, { id: 72, name: "抖音核销", path: "dy-verify-coupon" },
  // 分期
  { id: 73, name: "阶段付", path: "instalment" }],

  // 申请微信在线支付
  WxSubjectType: {
    1: { id: 1, value: "SUBJECT_TYPE_INDIVIDUAL", name: "个体户" },
    2: { id: 2, value: "SUBJECT_TYPE_ENTERPRISE", name: "企业" },
    3: { id: 3, value: "SUBJECT_TYPE_GOVERNMENT ", name: "政府机关" },
    4: { id: 4, value: "SUBJECT_TYPE_INSTITUTIONS", name: "事业单位" },
    5: { id: 5, value: "SUBJECT_TYPE_OTHERS", name: "社会组织" }
  },
  WxContactType: {
    1: { id: 1, value: "LEGAL", name: "经营者/法人" },
    2: { id: 2, value: "SUPER", name: "经办人" }
  },
  WxContactIdDocType: {
    1: {
      id: 1,
      value: "IDENTIFICATION_TYPE_IDCARD",
      name: "中国大陆居民-身份证"
    },
    2: {
      id: 2,
      value: "IDENTIFICATION_TYPE_OVERSEA_PASSPORT",
      name: "其他国家或地区居民-护照"
    },
    3: {
      id: 3,
      value: "IDENTIFICATION_TYPE_HONGKONG_PASSPORT",
      name: "中国香港居民-来往内地通行证"
    },
    4: {
      id: 4,
      value: "IDENTIFICATION_TYPE_MACAO_PASSPORT",
      name: "中国澳门居民-来往内地通行证"
    },
    5: {
      id: 5,
      value: "IDENTIFICATION_TYPE_TAIWAN_PASSPORT",
      name: "中国台湾居民-来往大陆通行证"
    },
    6: {
      id: 6,
      value: "IDENTIFICATION_TYPE_FOREIGN_RESIDENT",
      name: "外国人居留证"
    },
    7: {
      id: 7,
      value: "IDENTIFICATION_TYPE_HONGKONG_MACAO_RESIDENT",
      name: "港澳居民证"
    },
    8: {
      id: 8,
      value: "IDENTIFICATION_TYPE_TAIWAN_RESIDENT",
      name: "台湾居民证"
    }
  },
  WxFinanceType: {
    1: { id: 1, value: "BANK_AGENT", name: "银行业" },
    2: { id: 2, value: "PAYMENT_AGENT", name: "支付机构" },
    3: { id: 3, value: "INSURANCE", name: "保险业" },
    4: { id: 4, value: "TRADE_AND_SETTLE", name: "交易及结算类金融机构" },
    5: { id: 5, value: "OTHER", name: "其他金融机构" }
  },
  WxCertType: {
    1: { id: 1, value: "CERTIFICATE_TYPE_2388", name: "事业单位法人证书" },
    2: { id: 2, value: "CERTIFICATE_TYPE_2389", name: "统一社会信用代码证书" },
    3: { id: 3, value: "CERTIFICATE_TYPE_2394", name: "社会团体法人登记证书" },
    4: {
      id: 4,
      value: "CERTIFICATE_TYPE_2395",
      name: "民办非企业单位登记证书"
    },
    5: { id: 5, value: "CERTIFICATE_TYPE_2396", name: "基金会法人登记证书" },
    6: { id: 6, value: "CERTIFICATE_TYPE_2520", name: "执业许可证/执业证" },
    7: {
      id: 7,
      value: "CERTIFICATE_TYPE_2521",
      name: "基层群众性自治组织特别法人统一社会信用代码证"
    },
    8: {
      id: 8,
      value: "CERTIFICATE_TYPE_2522",
      name: "农村集体经济组织登记证"
    },
    9: { id: 9, value: "CERTIFICATE_TYPE_2399", name: "宗教活动场所登记证" },
    10: {
      id: 10,
      value: "CERTIFICATE_TYPE_2400",
      name: "政府部门下发的其他有效证明文件"
    }
  },
  WxSalesScenesType: {
    1: { id: 1, value: "SALES_SCENES_STORE", name: "线下场所" },
    2: { id: 2, value: "SALES_SCENES_MP", name: "公众号" },
    3: { id: 3, value: "SALES_SCENES_MINI_PROGRAM", name: "小程序" },
    4: { id: 4, value: "SALES_SCENES_WEB", name: "互联网网站" },
    5: { id: 5, value: "SALES_SCENES_APP", name: "APP" },
    6: { id: 6, value: "SALES_SCENES_WEWORK", name: "企业微信/执业证" }
  },
  WxBankAccountType: {
    1: { id: 1, value: "BANK_ACCOUNT_TYPE_CORPORATE", name: "对公银行账户" },
    2: { id: 2, value: "BANK_ACCOUNT_TYPE_PERSONAL", name: "经营者个人银行卡" }
  },
  WxAccountBank: {
    1: { id: 1, value: "工商银行", name: "工商银行" },
    2: { id: 2, value: "交通银行", name: "交通银行" },
    3: { id: 3, value: "招商银行", name: "招商银行" },
    4: { id: 4, value: "民生银行", name: "民生银行" },
    5: { id: 5, value: "中信银行", name: "中信银行" },
    6: { id: 6, value: "浦发银行", name: "浦发银行" },
    7: { id: 7, value: "兴业银行", name: "兴业银行" },
    8: { id: 8, value: "光大银行", name: "光大银行" },
    9: { id: 9, value: "广发银行", name: "广发银行" },
    10: { id: 10, value: "平安银行", name: "平安银行" },
    11: { id: 11, value: "北京银行", name: "北京银行" },
    12: { id: 12, value: "华夏银行", name: "华夏银行" },
    13: { id: 13, value: "农业银行", name: "农业银行" },
    14: { id: 14, value: "建设银行", name: "建设银行" },
    15: { id: 15, value: "邮政储蓄银行", name: "邮政储蓄银行" },
    16: { id: 16, value: "中国银行", name: "中国银行" },
    17: { id: 17, value: "宁波银行", name: "宁波银行" },
    18: { id: 18, value: "其他银行", name: "其他银行" }
  },
  WxApplymentState: {
    1: { id: 1, value: "APPLYMENT_STATE_EDITTING", name: "申请错误" },
    2: { id: 2, value: "APPLYMENT_STATE_AUDITING", name: "审核中" },
    3: { id: 3, value: "APPLYMENT_STATE_REJECTED", name: "已驳回" },
    4: {
      id: 4,
      value: "APPLYMENT_STATE_TO_BE_CONFIRMED",
      name: "待账户验证"
    },
    5: { id: 5, value: "APPLYMENT_STATE_TO_BE_SIGNED", name: "待签约" },
    6: { id: 6, value: "APPLYMENT_STATE_SIGNING", name: "开通权限中" },
    7: {
      id: 7,
      value: "APPLYMENT_STATE_FINISHED",
      name: "已完成"
    },
    8: { id: 8, value: "APPLYMENT_STATE_CANCELED", name: "已作废" }
  },

  // pos
  posStatus: {
    [-1]: "草稿",
    0: "处理中",
    1: "支付失败",
    9: "支付完成"
  },
  posRefundStatus: {
    0: "处理中",
    1: "退款失败",
    2: "退款成功"
  },
  posApiType: {
    1: "创建学员",
    2: "购课",
    3: "续课"
  },

  // 抖音核销券类型
  DyGrouponType: {
    1: "团购券",
    2: "代金券",
    3: "次卡",
    4: "储值卡",
    5: "周期卡"
  },
  DyProductType: {
    1: "团购",
    11: "代金券",
    15: "其它"
  }
};
/* harmony export (immutable) */ __webpack_exports__["c"] = Dict;


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(568)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(427),
  /* template */
  __webpack_require__(637),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by zxl on 2017/4/20.
 */
/* harmony default export */ __webpack_exports__["a"] = ({
	OPT_SUCCESS: '操作成功',
	SAVE_SUCCESS: '保存成功',
	REFRESH_DONE: '加载结束',
	NO_QUERY_RESULT: '未查询到结果',
	SYS_ERR: '数据获取出错了，请尽快联系我们。（错误#{0}）',
	SERVICE_ERR: '很抱歉，服务出错了，请尽快联系我们。',
	NETWORK_ERR: '网络错误：请检查您的网络。',
	SUBMIT_ERR: '提交有误，请修改后再试',
	AUTHCODE_MISSING: '请输入手机验证码',
	AUTHCODE_SEND_ERR: '验证码发送错误，请稍后再试。',
	AUTHCODE_SENT: '已发送短信验证码',
	NO_INPUT: '您啥也没输入，巧妇难为无米之炊',
	NOT_EDITABLE: '不可编辑',
	PASSWD_CONFIRM_ERR: '两次输入的密码不一致',
	USER_NOT_FOUND: '此用户尚不存在，请联系您所属的商户。',
	USER_FROZEN: '此用户已被冻结，请联系门店管理员。',
	USER_INVALID: '无效的用户，请联系门店管理员。',
	USER_EXIST_PASSWD: '用户密码已存在，无需注册。',
	USER_REG_SUCCESS: '用户注册成功，请登录系统。',
	NO_STAFF_CLIENT: '很抱歉，此处不支持会员登录，请用手机端登录。',
	SHOP_EXPIRED: '您登录的门店【{0}】软件使用已到期，请联系门店负责人尽快续费哦。',
	NOT_TENANT_OWNER: '您不是商户负责人，不能进入该页面。',
	INPUT_EMPTY_ERR: '必填信息，不能为空',
	TENANT_REG_SUCCESS: '商户注册成功，请登录系统。',
	NO_TENANT: '信息失效，或不存在此商户，请重新登录',
	NOT_FOUND_RECORD: '记录不存在了',
	NONE_OPT: '好吧，您什么也没做，就当没发生',
	DEL_SHOP_NOTICE: '确定删除该门店【{0}】吗？ （包括门店下的会员、课程、员工等相关信息）<p class="desc">删除后，我们将为您保存门店信息【15】天，之后将彻底删除。</p>',
	STOP_CARD_CONFIRM: '您确定要停用该卡种吗？',
	RESTORE_CARD_CONFIRM: '您确定要恢复该卡种吗？',
	PHONE_NO_ERR: '手机号格式有误',
	ID_NO_ERR: '身份证号格式有误',
	REQUIRE_ROLE: '请选择员工角色',
	NO_ROLE_FUNC: '亲，您没有该页面的功能权限。',
	DEL_CONFIRM: '您确定要删除此【{0}】吗？ <p class="desc">删除操作要谨慎。</p>',
	DROP_CONFIRM: '您确定要废弃此【{0}】吗？',
	NOT_FOUND_TIPS: '该记录不存在了，请返回后刷新重试。',
	DEL_COURSE_WARN: '您确定要删除该课程吗？</p>',
	DEL_COURSE_SCHEDULE_WARN: '您确定要删除【{0}】的排课【{1}】吗？',
	DEL_PC_SCHEDULE_WARN: '您确定要删除为会员【{0}】的私教排课吗？<p class="desc"> 删除该排课不会影响已预约或结束的课时。 </p>',
	DEL_PC_SCHEDULE_WARN2: '您确定要删除【{0}】的私教排课吗？<p class="desc"> 删除该排课不会影响已预约或结束的课时。 </p>',
	MEMBER_BIRTHDAY_ERR: '请正确填写会员生日',
	MEMBER_PHONE_NO_EXIST: '已存在该手机号码的会员',
	MEMBER_CREATE_CONFIRM: '确定创建该会员吗？ ',
	MEMBER_PHONE_NO_NOT_EXIST: '不存在该手机号的会员',
	DEL_POINTS_RULE_NOTICE: '您确定要删除规则【{0}】吗？',
	CUST_PHONE_EXIST: '已存在该手机号码的客户：{0}',
	CREATE_CONTINUE: '添加成功，是否继续添加？',
	UPDATE_MEMBER_PHOTO_OK: '会员头像照已更新成功',
	UPDATE_PHOTO_SUCCESS: '照片已更新成功',
	CLICK_FREQUENTLY: '操作不要这么频繁吧',
	TO_DO_PUBLIC: '敬请期待',
	ERR_CARD_NO: '会员卡号【{0}】太长了，检查一下是否重复读卡了',
	CARD_NO_TOO_LONG: '输入的会员卡号太长了'

});

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(566)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(434),
  /* template */
  __webpack_require__(635),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2ea30f26",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 202:
/***/ (function(module, exports) {

module.exports = {"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = {"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = {"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(424),
  /* template */
  __webpack_require__(654),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 378:
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
			return [false, '会员卡状态错误'];
		}

		// 检查会员卡休假
		if ($.MemberLib.isInVacation(mc.vacationBegin, mc.vacationEnd)) {
			return [false, '会员卡请假中'];
		}

		// 检查会员卡使用时间
		if (mc.cardClass === 0 && mc.limitBeginTime && mc.limitEndTime) {
			let nowTime = now.getHours() * 100 + now.getMinutes();
			if (mc.limitBeginTime > nowTime || mc.limitEndTime < nowTime) {
				return [false, '不在使用时间范围内({0})，检查用卡时间'.format(now.format('hh:mm'))];
			}
		}
		if (mc.cardClass > 0 && mc.limitBeginTime && mc.limitEndTime && lessonBeginTime && lessonEndTime) {
			if (!(mc.limitBeginTime <= lessonBeginTime && mc.limitEndTime >= lessonEndTime)) {
				return [false, '不在上课时间范围内'];
			}
		}

		// 检查会员卡使用日期范围
		if (mc.limitDates) {
			let todayNum = parseInt(new Date().format("MMdd"));
			let items = mc.limitDates.split(';');
			let checkRet = null;
			for (let i = 0, len = items.length; i < len; i++) {
				let dates = items[i].split(',');
				let beginDates = dates[0].split('/');
				let endDates = dates[1].split('/');
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
				return [false, '不在使用日期范围内'];
			}
		}

		// 检查会员卡使用期限
		if (mc.beginDate && mc.endDate) {
			if (now.compareDatePart(Date.new(mc.beginDate)) < 0 || now.compareDatePart(Date.new(mc.endDate)) > 0) {
				return [false, '不在使用期限内'];
			}
		}

		// 检查单双日使用限制
		if (mc.limitOddEvenDay) {
			let day = now.getDate();
			if (mc.limitOddEvenDay === 1 && day % 2 === 0) {
				return [false, '限定单日使用'];
			}
			if (mc.limitOddEvenDay === 2 && day % 2 === 1) {
				return [false, '限定双日使用'];
			}
		}

		// 检查限定用卡星期
		if (mc.limitWeeks && !mc.ignoreLimitWeeks) {
			let weeks = mc.limitWeeks.split(',');
			let targetDate = lessonDate != null && mc.cardClass > 0 ? lessonDate : now;
			if (!weeks.contains(targetDate.getDay() + '')) {
				return [false, lessonDate != null && mc.cardClass > 0 ? '不能上该星期的课' : '不在规定的用卡星期'];
			}
		}

		return [true, null];
	},

	formatLimitDates: limitDates => {
		if (!limitDates) return '';

		let descArr = [];
		let items = limitDates.split(';');

		for (let i = 0, len = items.length; i < len; i++) {
			let dates = items[i].split(',');
			let beginDates = dates[0].split('/');
			let beginMonth = parseInt(beginDates[0]);
			let beginDay = parseInt(beginDates[1]);
			let endDates = dates[1].split('/');
			let endMonth = parseInt(endDates[0]);
			let endDay = parseInt(endDates[1]);
			if (beginMonth && beginDay && endMonth && endDay) {
				descArr.push('{0}/{1} ~ {2}/{3}'.format(beginMonth, beginDay, endMonth, endDay));
			}
		}

		return descArr.join('、');
	},

	formatWeekNames: weeks => {
		if (!weeks) return;
		if (weeks.length === 13) return '周一至周日';

		let weekNames = [];
		for (let w of weeks.split(',')) {
			weekNames.push($.Dict.WeekName[parseInt(w)]);
		}

		return weekNames.join('、');
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

	calcCardLeftDays: (beginDate, endDate, today) => {
		if (beginDate && endDate) {
			if (Date.new(beginDate).compareDatePart(today) <= 0) return Date.new(endDate).subtract(today);else return Date.new(endDate).subtract(Date.new(beginDate));
		}
	},

	getCheckcodeForGlBooking(mcId, memberId, lessonId) {
		return $.Util.md5('J.Z.G/{0}/{1}/{2}/{3}/{4}/{5}'.format(mcId, memberId, lessonId, $.data.tenant.encTid, $.data.shop.encSid, $.Util.formatDate(new Date())));
	}
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Member;


/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const Print = function (dom, options) {
	if (!(this instanceof Print)) return new Print(dom, options);
	this.options = this.extend({
		'noPrint': '.no-print'
	}, options);
	if (typeof dom === "string") {
		this.dom = document.querySelector(dom);
	} else {
		this.isDOM(dom);
		this.dom = this.isDOM(dom) ? dom : dom.$el;
		console.log(dom, 'dom');
	}
	this.init();
};
Print.prototype = {
	/**
  * 初始化
  */
	init: function () {
		var content = this.getStyle() + this.getHtml();
		this.writeIframe(content);
	},
	/**
  * 配置属性扩展
  * @param {Object} obj
  * @param {Object} obj2
  */
	extend: function (obj, obj2) {
		for (var k in obj2) {
			obj[k] = obj2[k];
		}
		return obj;
	},
	/**
      复制原网页所有的样式
  */
	getStyle: function () {
		var str = "",
		    styles = document.querySelectorAll('style,link');
		for (var i = 0; i < styles.length; i++) {
			str += styles[i].outerHTML;
		}
		str += "<style>" + (this.options.noPrint ? this.options.noPrint : '.no-print') + "{display:none;}</style>";
		// 去除height：100%样式，解决分页下，样式混乱问题
		str += "<style>html,body,div{height: auto!important;}</style>";
		return str;
	},
	// 表单赋值
	getHtml: function () {
		var inputs = document.querySelectorAll('input');
		var textareas = document.querySelectorAll('textarea');
		var selects = document.querySelectorAll('select');
		for (var k = 0; k < inputs.length; k++) {
			if (inputs[k].type == "checkbox" || inputs[k].type == "radio") {
				if (inputs[k].checked == true) {
					inputs[k].setAttribute('checked', "checked");
				} else {
					inputs[k].removeAttribute('checked');
				}
			} else if (inputs[k].type == "text") {
				inputs[k].setAttribute('value', inputs[k].value);
			} else {
				inputs[k].setAttribute('value', inputs[k].value);
			}
		}
		for (var k2 = 0; k2 < textareas.length; k2++) {
			if (textareas[k2].type == 'textarea') {
				textareas[k2].innerHTML = textareas[k2].value;
			}
		}
		for (var k3 = 0; k3 < selects.length; k3++) {
			if (selects[k3].type == 'select-one') {
				var child = selects[k3].children;
				for (var i in child) {
					if (child[i].tagName == 'OPTION') {
						if (child[i].selected == true) {
							child[i].setAttribute('selected', "selected");
						} else {
							child[i].removeAttribute('selected');
						}
					}
				}
			}
		}
		return this.dom.outerHTML;
	},
	/**
        创建iframe
  */
	writeIframe: function (content) {
		var w,
		    doc,
		    iframe = document.createElement('iframe'),
		    f = document.body.appendChild(iframe);
		iframe.id = "myIframe";
		//iframe.style = "position:absolute;width:0;height:0;top:-10px;left:-10px;";
		iframe.setAttribute('style', 'position:absolute;width:0;height:0;top:-10px;left:-10px;');
		w = f.contentWindow || f.contentDocument;
		doc = f.contentDocument || f.contentWindow.document;
		doc.open();
		doc.write(content);
		doc.close();
		this.toPrint(w);
		setTimeout(function () {
			document.body.removeChild(iframe);
		}, 100);
	},
	/**
    打印
  */
	toPrint: function (frameWindow) {
		try {
			setTimeout(function () {
				frameWindow.focus();
				try {
					if (!frameWindow.document.execCommand('print', false, null)) {
						frameWindow.print();
					}
				} catch (e) {
					frameWindow.print();
				}
				frameWindow.close();
			}, 10);
		} catch (err) {
			console.log('err', err);
		}
	},
	isDOM: typeof HTMLElement === 'object' ? function (obj) {
		return obj instanceof HTMLElement;
	} : function (obj) {
		return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
	}
};
const MyPlugin = {};
MyPlugin.install = function (Vue, options) {
	// 4. 添加实例方法
	Vue.prototype.$print = Print;
};
/* harmony default export */ __webpack_exports__["a"] = (MyPlugin);

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang__ = __webpack_require__(190);
/** Copyright wwww.jzongguan.com **/



//==========BEGIN: 系统对象扩展 ==========
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
    otherDate = new Date(otherDate);
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
  return days; //days < 0 ? days : (days + 1);
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
// 20000 => 20,000,00
Number.prototype.enUsAmount = function () {
  return this.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};
//==========END: 系统对象扩展 ==========

const Util = {
  md5: str => {
    if (!str) return null;
    let crypto = __webpack_require__(470);
    let decipher = crypto.createHash("md5");
    return decipher.update(str).digest("hex");
  },

  /** 验证手机号格式 */
  validatePhoneNo: phoneNo => {
    return (/^1[23456789]\d{9}$/.test(phoneNo) || /^853\d{8}$/.test(phoneNo)
    );
  },

  /** 申请微信在线支付 */
  validateCardNumberOrAlphabetNo: cardNo => {
    // 校验证件号是否有数字和字母组成
    let reg = /^[0-9a-zA-Z]+$/;
    if (reg.test(cardNo)) {
      return true;
    } else {
      return false;
    }
  },

  validateBusinessNo: businessNo => {
    return (/^[A-Z0-9]{18}$/.test(businessNo)
    );
  },

  // 验证是否是网站
  validateDomain: domainNo => {
    return (/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(domainNo)
    );
  },

  // 判断是否是时间支持格式 支持 2023-01-13 || 20230226000000
  isDate(str) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const dateTimeRegex = /^\d{14}$/;
    return dateRegex.test(str) || dateTimeRegex.test(str);
  },
  // ==================

  validateCardNo: cardNo => {
    return cardNo && ("" + cardNo).length < 16;
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

  validateIdNo: idNo => {
    return (/(^\d{15}$)|(^\d{6}(19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$)/.test(idNo)
    );
  },

  validateMonthDay: (month, day) => {
    if (month < 1 || month > 12) return false;
    if (day < 1 || day > 31) return false;
    if (month === 2 && day > 28) return false;
    if ([4, 6, 9, 11].contains(month) && day === 31) return false;

    return true;
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

  validateEmail: email => {
    let reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9\-]+\.)+(com|cn|net|org)$/;
    if (reg.test(email)) {
      return true;
    } else {
      return false;
    }
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
      return $.Conf.IMG_LIB_URL + "/avatar/m1.gif";
    } else {
      return $.Conf.IMG_LIB_URL + "/avatar/w1.gif";
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

  /**
   * 是否有权限
   * @param roleFunc
   * @param ignoreShopOwner : true：忽略店长权限（即超管或店长也需要有相应权限）；false：店长有特权
   * @returns {boolean|*}
   */
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
    let o = obj.constructor === Array ? [] : {};
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        o[i] = typeof obj[i] === "object" ? cloneObject(obj[i]) : obj[i];
      }
    }

    return o;
  },

  formatDate: function (date, full = true) {
    if (full) return Date.new(date).format("yyyy-MM-dd");else return Date.new(date).format("yyyy-M-d");
  },

  formatDateIgnoreNull: function (date, full = true) {
    if (!date) return "";

    if (full) return Date.new(date).format("yyyy-MM-dd");else return Date.new(date).format("yyyy-M-d");
  },

  formatDateWithoutYear: function (date) {
    return Date.new(date).format("M/dd");
  },

  formatDateForShort: function (date, full = true) {
    if (full) return Date.new(date).format("yyyy.MM.dd");else return Date.new(date).format("yyyy.M.d");
  },

  formatDateTime: function (dateTime) {
    let desc = new Date(dateTime).format("yyyy-MM-dd hh:mm:ss");
    if (desc.indexOf("NaN") < 0) {
      return desc;
    } else {
      return null;
    }
  },

  formatTimeObject: function (time, full = true) {
    let desc = full ? new Date(time).format("hh:mm:ss") : new Date(time).format("hh:mm");
    if (desc.indexOf("NaN") < 0) {
      return desc;
    } else {
      return null;
    }
  },

  formatTime: function (timeNum) {
    let hour = parseInt(timeNum / 100);
    return (hour >= 10 ? hour : "0" + hour) + ":" + (timeNum + "").substr(-2, 2);
  },

  formatMonth: function (monthNum) {
    return parseInt(monthNum / 100) + "-" + monthNum % 100;
  },

  getTimeNum: function (timeStr) {
    if (!timeStr) return null;

    let items = timeStr.split(":");
    return parseInt(items[0] + "" + items[1]);
  },

  formatBirthDate: function (dateNum) {
    let month = parseInt(dateNum / 100);
    return month + "月" + dateNum % 100 + "日";
  },

  formatPhone: function (phoneNo) {
    if (!phoneNo) return "";

    let str = phoneNo + "";
    return "{0} {1} {2}".format(str.substr(0, 3), str.substr(3, 4), str.substr(7, 4));
  },

  copyAttributes: function (src, desc) {
    for (let i in src) {
      desc[i] = src[i];
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

  handleException(err, src) {
    let stack = arguments[0].stack;
    if (location.href.indexOf("jzongguan.com") > 0) {
      if ($.data.user.uid) {
        let args = {
          sysLog: {
            src: "jzg-web-pc",
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

  isEmptyStr(v) {
    if (v === null || v === undefined) return true;
    if (v.trim().length === 0) return true;

    return false;
  },

  isEmptyArray(v) {
    return v === null || v === undefined || v.length === 0;
  },

  isInteger(obj) {
    return obj % 1 === 0;
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

  uploadImgFromCanvas(canvas, successCallback, errCallback) {
    function dataURItoBlob(base64Data) {
      let byteString;
      if (base64Data.split(",")[0].indexOf("base64") >= 0) byteString = atob(base64Data.split(",")[1]);else byteString = unescape(base64Data.split(",")[1]);
      let mimeString = base64Data.split(",")[0].split(":")[1].split(";")[0];
      let ia = new Uint8Array(byteString.length);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ia], { type: mimeString });
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

    // 导出base64格式的图片数据
    // let base64Data = canvas.toDataURL();
    let base64Data = canvas.toDataURL('image/jpeg');
    // 封装blob对象
    let blob = dataURItoBlob(base64Data);
    //组装formdata
    let fd = new FormData();
    fd.append("filedata", blob);
    fd.append("filename", new Date().getTime() + ".png");

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

    // 第二种方式
    // canvas.toBlob((blob) => {
    //   //组装formdata
    //   let fd = new FormData();
    //   fd.append("filedata", blob);
    //   fd.append("filename", new Date().getTime() + ".png");

    //   let xmlHttp = new XMLHttpRequest();
    //   xmlHttp.withCredentials = true;
    //   xmlHttp.open("POST", $.Conf.IMG_UPLOAD_URL);
    //   xmlHttp.send(fd);
    //   xmlHttp.onload = function onload() {
    //     if (xmlHttp.status < 200 || xmlHttp.status >= 300) {
    //       errCallback(getBody(xmlHttp));
    //       return;
    //     }
    //     successCallback(getBody(xmlHttp));
    //   };
    // },'image/jpeg')
  },

  printElem(elemId, title) {
    let mywindow = window.open("", "PRINT", "height=800,width=1000");
    let cssCode = "<style>table {border:1px solid #ccc; border-collapse: collapse;}";
    cssCode += "td,th {border: 1px solid #ccc; padding: 3px; font-size: 12px;} th {text-align: left;}";
    cssCode += "ul {padding: 0 0 0 16px;} li {padding: 5px 0; line-height: 1.6;}";
    cssCode += "</style>";

    mywindow.document.write("<html><head><title>" + title + "</title>");
    mywindow.document.write(cssCode);
    mywindow.document.write("</head><body>");
    mywindow.document.write("<h2>" + title + '</h2><div class="print-tbl">');
    mywindow.document.write(document.getElementById(elemId).innerHTML);
    mywindow.document.write("</div>");
    mywindow.document.write("</body></html>");

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
  },

  printForPos(elemId, title, isShowPrintTime) {
    let mywindow = window.open("", "PRINT", "height=800,width=1000");
    let cssCode = "<style>";
    cssCode += "body, html {font-size: 12px; color: #000; font-family: '新宋体';}";
    cssCode += ".hd {text-align: center; margin-bottom: 10px; border-bottom: 1px solid #000; padding: 0 0 10px 0;} ";
    cssCode += ".spt {padding: 5px 0; text-align: center;} ";
    cssCode += "table {border: 0; border-collapse: collapse;} ";
    cssCode += "td,th {border: 0; padding: 3px 0; font-size: 12px; font-weight: normal; font-family: '新宋体';} ";
    cssCode += "th {text-align: left; padding-right: 2px; width: 65px;}";
    cssCode += "th:after {content: '：';} ";
    cssCode += ".htbl th:after {content: '';} ";
    cssCode += ".hidden {display: none;} ";
    cssCode += ".print-time {text-align: right; margin-top: 5px; padding-top: 10px; border-top: 1px solid #000;} ";
    cssCode += "</style>";

    mywindow.document.write("<html><head><title>" + title + "</title>");
    mywindow.document.write(cssCode);
    mywindow.document.write("</head><body>");
    mywindow.document.write('<div class="hd">' + title + "</div>");
    mywindow.document.write(document.getElementById(elemId).innerHTML);
    if (isShowPrintTime) {
      mywindow.document.write('<div class="print-time">打印时间 ' + new Date().format("yyyy-M-d hh:mm:ss"));
    }
    mywindow.document.write("</body></html>");

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
  },

  exportToExcel(tblId, sheetName) {
    let table = document.getElementById(tblId);
    // 克隆（复制）此table元素，这样对复制品进行修改（如添加或改变table的标题等），导出复制品，而不影响原table在浏览器中的展示。
    table = table.cloneNode(true);
    let uri = "data:application/vnd.ms-excel;base64,",
        template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head>' + '<style type="text/css">table {border-collapse: collapse;} th, td {min-width: 90px; padding: 15px 5px; border: 1px solid #666;}</style></head><body><table style="vnd.ms-excel.numberformat:@">{table}</table></body></html>',
        base64 = function (s) {
      return window.btoa(unescape(encodeURIComponent(s)));
    },
        format = function (s, c) {
      return s.replace(/{(\w+)}/g, function (m, p) {
        return c[p];
      });
    };
    if (!table.nodeType) table = document.getElementById(table);
    let ctx = {
      worksheet: sheetName || "Worksheet",
      table: table.innerHTML
    };
    window.location.href = uri + base64(format(template, ctx));
  },

  round(num) {
    if (num === null || num === undefined) return "";

    return Math.round(num * 100) / 100;
  },

  // pos 新添加的方法 复制对象
  typeOf(obj) {
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
  },
  deepCopy(data) {
    const t = Util.typeOf(data);
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
        o.push(Util.deepCopy(data[i]));
      }
    } else if (t === "object") {
      for (let i in data) {
        o[i] = Util.deepCopy(data[i]);
      }
    }
    return o;
  },

  copyText(dom, e, show = true) {
    // show 是否展示复制内容
    const ele = dom.target; // 为了解决bug
    const value = show ? "，" + e : "";
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(e).then(() => {
        $.Msg.success("复制成功" + `${value}`);
      }).catch(() => {
        $.Msg.success("复制失败" + `${value}`);
      });
    } else {
      // 创建text area
      const textArea = document.createElement("input");
      textArea.value = e;
      textArea.style.display = "none";
      // 使text area不在viewport，同时设置不可见
      ele.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((resolve, reject) => {
        // 执行复制命令并移除文本框
        document.execCommand("copy") ? resolve() : reject(new Error("出错了"));
        textArea.remove();
      }).then(() => {
        $.Msg.success("复制成功" + `${value}`);
      }, () => {
        layer.msg("复制失败" + `${value}`);
      });
    }
  },

  copyValue(value) {
    this.$Copy({ text: value });
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
      data: JSON.stringify(args), //qs.stringify(args),
      timeout: 10000,
      herders: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      }
    }).then(response => {
      if (showLoading) Util.endLoading();

      const svRep = response.data;
      if (svRep.status !== 0) {
        if (svRep.status === 1) {
          // 登录过期
          $.Util.cookie.delete($.Conf.Keys.LOGIN_FLAG);
          //alert('登录已过期，需要重新登录一下');
          location.replace("#/user-login");
          return;
        }
        if (failFunc) {
          failFunc(svRep.msg);
        } else {
          alert(svRep.msg);
        }
      } else if (successFunc) {
        successFunc(svRep.data, svRep.sysTime);

        // 新增-自定义支付方式 判断下列情况需要重新查询支付方式
        if (['login', 'initDataLoad', 'tenantShopsQuery', 'userShopSet'].contains(serviceName)) {
          let isTenant = false;
          if (serviceName == 'login' && svRep.data.shopList && svRep.data.shopList.length > 1) return;
          if (serviceName == 'tenantShopsQuery') isTenant = true;
          $.Req.queryPaymentType(isTenant);
        }
      }
    }).catch(e => {
      if (showLoading) {
        Util.endLoading();
      }

      let error = e ? e.toString() : "";
      if (error.indexOf("Network Error") > 0) {
        alert("网络错误：请检查您的网络。");
        return;
      }
      if (error.indexOf("timeout ") >= 0) {
        alert("网络连接超时：请检查您的移动网络或Wifi，稍后再试。");
        return;
      }
      alert(error);
    });
  },

  queryCoachBase: function (coachType, callback) {
    let args = {};
    if (coachType === 2) args = { isPrivateCoach: true };else if (coachType === 1) args = { isGroupCoach: true };

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
    $.Req.service($.SvName.PRIVATE_COURSE_QUERY, { isBaseInfo: true, status: 0 }, (ret, systime) => {
      this.today = Date.new(systime);
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

  checkClientVersion() {
    $.Req.service($.SvName.SYS_PARAM_VALUE_QUERY, { paramType: 2 }, ret => {
      if ($.data.clientVersion !== ret.value) {
        document.location.reload(true);
      }
    });
  },

  queryShopParam(callback) {
    $.Req.service($.SvName.SHOP_PARAM_QUERY, {}, ret => {
      if (callback) callback(ret);
    });
  },

  /**
   * memberFlag: 会员姓名 | 手机号 | 卡号
   */
  queryMember(memberFlag, callback) {
    if (memberFlag) {
      let args = {};
      if (!$.Util.isInteger(memberFlag) || $.Util.validatePhoneNo(memberFlag)) {
        args.nameOrPhone = memberFlag;
      } else {
        args.cardNo = memberFlag;
      }
      $.Req.service($.SvName.MEMBER_ADV_QUERY, args, ret => {
        if (ret.memberList.length === 1) {
          callback(ret.memberList[0]);
        } else {
          if (ret.memberList.length === 0) {
            $.Msg.info("未查到符合条件的会员");
          }
          callback(null);
        }
      });
    } else {
      callback(null);
      $.Msg.error("请输入会员姓名、手机号或卡号");
    }
  },

  updateShopArg(typeId, typeValue, showTips = true) {
    let args = { typeId: typeId, typeValue: "" + typeValue };
    $.Req.service($.SvName.SHOP_ARG_UPDATE, args, ret => {
      if (showTips) $.Msg.success($.Lang.SAVE_SUCCESS);
    });
  },

  // 新增-自定义支付方式
  queryPaymentType(queryInTenant = false, callback) {
    // 获取支付方式
    $.Req.service($.SvName.PAYMENT_CHANNEL_QUERY, { queryInTenant }, ret => {
      let paymentChannel = {};
      let paymentChannelForView = {};
      ret.channelList.forEach(p => {
        const { channelId, channelName } = p;
        if (!p.isNotCharge) paymentChannel[channelId] = channelName;
        paymentChannelForView[channelId] = channelName;
      });
      $.data.shop.paymentChannel = paymentChannel;
      $.data.shop.paymentChannelForView = paymentChannelForView;
      if (callback) callback(ret.channelList);
    });
  }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = Req;


const Msg = {
  vue: null,
  duration: 2,

  info: function (txt, duration = 2) {
    let time = duration ? duration : this.duration;
    this.vue.$Message.info(txt, time);
  },

  success: function (txt) {
    this.vue.$Message.success(txt, this.duration);
  },

  error: function (txt) {
    this.vue.$Message.error(txt, this.duration + 1);
  },

  warning: function (txt) {
    this.vue.$Message.warning(txt, this.duration);
  }
};
/* harmony export (immutable) */ __webpack_exports__["c"] = Msg;


const Dlg = {
  vue: null,

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
    if (callback) conf.onOk = callback;
    this.vue.$Modal.info(conf);
  },

  success: function (txt, callback = null, showUserName = true) {
    let conf = {
      title: "成功信息",
      content: this._getNewTxt_(txt, showUserName)
    };
    if (callback) conf.onOk = callback;
    this.vue.$Modal.success(conf);
  },

  error: function (txt, callback = null, showUserName = true) {
    let conf = {
      title: "错误信息",
      content: this._getNewTxt_(txt, showUserName)
    };
    if (callback) conf.onOk = callback;
    this.vue.$Modal.error(conf);
  },

  warning: function (txt, callback = null, showUserName = true) {
    let conf = {
      title: "警告信息",
      content: this._getNewTxt_(txt, showUserName)
    };
    if (callback) conf.onOk = callback;
    this.vue.$Modal.warning(conf);
  },

  confirm: function (txt, yesFunc, noFunc) {
    this.vue.$Modal.confirm({
      title: "确认信息",
      content: this._getNewTxt_(txt),
      okText: "确定",
      cancelText: "取消",
      onOk: () => {
        if (yesFunc) yesFunc(true);
      },
      onCancel: () => {
        if (noFunc) noFunc(true);else Msg.info(__WEBPACK_IMPORTED_MODULE_1__lang__["a" /* default */].NONE_OPT);
      }
    });
  }
};
/* harmony export (immutable) */ __webpack_exports__["d"] = Dlg;


/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return router; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(655);



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

const home = r => __webpack_require__.e/* require.ensure */(13).then((() => r(__webpack_require__(1110))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const userPwdSet = r => __webpack_require__.e/* require.ensure */(13).then((() => r(__webpack_require__(1111))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- tenant pages
const tenantApply = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(1092))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const tenantReg = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(1093))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const tenantEdit = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(1097))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const tenantShops = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(1104))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const tenantShopCreate = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(1101))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const tenantShopEdit = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(1102))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const tenantShopView = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(1103))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const tenantCardConf = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(1094))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const tenantCardEdit = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(1095))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const tenantStatRevenue = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(1108))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const tenantStatReport = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(1107))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const tenantStatCust = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(1106))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const tenantStatMember = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(876))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const tenantStatCard = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(1105))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const tenantLoginConf = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(1099))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const tenantPcAction = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(1100))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const tenantWxAuth = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(1109))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const tenantMpAuth = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(875))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const tenantLessonConf = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(1098))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const tenantConfCopy = r => __webpack_require__.e/* require.ensure */(5).then((() => r(__webpack_require__(1096))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- shop pages
const shopHome = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(1045))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shopEdit = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(1043))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shopCardConf = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(1040))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shopCardEdit = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(1041))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shopGround = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(1044))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shopNotice = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(1047))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const smsLog = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(1048))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const pointsConf = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(1037))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const custSource = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(1030))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const entryCheckinList = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(1032))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const mobileUsage = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(1036))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const recharge = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(1038))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const entryCheckinConf = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(1031))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const entryCheckinScreen = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(1034))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const entryCheckinScreenOld = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(1033))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const localMachConf = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(1035))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shopMoreConf = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(1046))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shopDataDuplicate = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(1042))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
// pos
const SetPos = r => __webpack_require__.e/* require.ensure */(6).then((() => r(__webpack_require__(1039))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- staff pages
const staffQuery = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(1058))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffCreate = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(1054))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffEdit = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(879))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const rolePermission = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(1051))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffCoach = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(1053))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffSales = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(1062))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffSalaryConf = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(1059))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffSalary = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(1060))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffListSalary = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(1056))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const coachType = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(1049))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shopDepartment = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(1050))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffLoginConf = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(1057))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffFavMenu = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(1055))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shopReportMsgConf = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(1052))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const staffSalesTarget = r => __webpack_require__.e/* require.ensure */(7).then((() => r(__webpack_require__(1061))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- course pages
const groupCard = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(893))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const groupCardEdit = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(890))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const groupCardSchedule = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(892))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const groupCardScheduleEdit = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(891))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const groupLesson = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(899))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const groupLessonCancelLog = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(894))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const groupLessonEdit = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(895))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const groupLessonRecords = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(897))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const groupLessonReview = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(898))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const privateCard = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(906))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const privateCardEdit = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(903))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const privateCardSchedule = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(905))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const privateCardScheduleEdit = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(904))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const privateLesson = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(911))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const privateLessonEdit = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(908))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const privateLessonReview = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(910))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const privateLessonRecords = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(909))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const privateLessonCancelLog = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(907))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const lessonBookingConf = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(900))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const custPrivateLesson = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(888))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const groupLessonMemberCancelLog = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(896))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const glWithReview = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(889))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const plWithReview = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(902))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const reviewConf = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(912))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const lessonReview = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(901))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- member pages
const memberQuery = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(992))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberCreate = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(967))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberInfo = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(972))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberCardList = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(962))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberLessonList = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(973))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberCheckinList = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(965))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberPhotoList = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(987))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberBodyTestList = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(959))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberNotice = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(974))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberSendSms = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(993))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberFollowList = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(970))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberPointsList = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(988))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberBatchOpt = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(958))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberCardQuery = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(964))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberOptLog = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(986))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberOptLogCardVacation = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(980))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberOptLogCardDisuse = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(979))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberOptLogCardChange = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(977))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberOptLogEntryCheckin = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(983))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberOptLogCardAlt = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(976))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberOptLogTransferCard = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(985))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberOptLogChangePhone = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(982))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberOptLogChangeCardNo = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(981))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberOptLogCardDel = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(978))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberOptLogMpcTime = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(984))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberOptLogAvatarChange = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(975))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberActionQuery = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(957))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberTestCommon = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(997))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberTestScore = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(1000))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberTestScoreRank = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(999))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberTestConf = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(998))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberFollowQuery = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(971))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberVenueBookings = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(1001))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberDraftEdit = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(968))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberDraftQuery = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(969))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberContractPrint = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(966))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberTeenagersTest = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(996))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberTeenagersTestEdit = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(995))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberTeenagersTestCreate = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(994))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberPosture = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(991))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberPostureEdit = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(990))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberPostureCreate = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(989))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberCardDraftQuery = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(961))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberCardPaymentDraftQuery = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(963))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const memberCardCheck = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(960))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- acc pages
const chargeList = r => __webpack_require__.e/* require.ensure */(9).then((() => r(__webpack_require__(883))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const chargeItem = r => __webpack_require__.e/* require.ensure */(9).then((() => r(__webpack_require__(882))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const productSale = r => __webpack_require__.e/* require.ensure */(9).then((() => r(__webpack_require__(886))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const productStock = r => __webpack_require__.e/* require.ensure */(9).then((() => r(__webpack_require__(887))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const productCate = r => __webpack_require__.e/* require.ensure */(9).then((() => r(__webpack_require__(885))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const cardBills = r => __webpack_require__.e/* require.ensure */(9).then((() => r(__webpack_require__(881))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const chargeOptLog = r => __webpack_require__.e/* require.ensure */(9).then((() => r(__webpack_require__(884))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- stat pages
const statMember = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1082))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statMemberEntry = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1075))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statMemberPoints = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1079))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statMemberLesson = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1076))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statMemberPayment = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1078))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statMemberPrivateLesson = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1080))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statMemberCheckinDays = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1074))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statSales = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1091))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statGroupCoach = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1071))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statPrivateCoach = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1085))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statGroupCard = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1072))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statPrivateCard = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1086))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statGroupLesson = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1073))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statPrivateLesson = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1087))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statCardBills = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1067))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statCardByCard = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1068))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statCardByType = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1070))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statCardByClass = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1069))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statRevenue = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1089))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statMemberSource = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1081))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statReport = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1088))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statMemberMore = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1077))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statAdvReports = r => __webpack_require__.e/* require.ensure */(12).then((() => r(__webpack_require__(1065))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statAdvCardCate = r => __webpack_require__.e/* require.ensure */(12).then((() => r(__webpack_require__(1063))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statAdvCardPayment = r => __webpack_require__.e/* require.ensure */(12).then((() => r(__webpack_require__(1064))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statAdvVenueConsume = r => __webpack_require__.e/* require.ensure */(12).then((() => r(__webpack_require__(1066))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const statSalesTarget = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1090))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

// pos
const StatPosCardPay = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1083))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const StatPosPay = r => __webpack_require__.e/* require.ensure */(3).then((() => r(__webpack_require__(1084))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- cust pages
const custQuery = r => __webpack_require__.e/* require.ensure */(8).then((() => r(__webpack_require__(919))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const custCreate = r => __webpack_require__.e/* require.ensure */(8).then((() => r(__webpack_require__(913))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const custEdit = r => __webpack_require__.e/* require.ensure */(8).then((() => r(__webpack_require__(878))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const custFollowQuery = r => __webpack_require__.e/* require.ensure */(8).then((() => r(__webpack_require__(914))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const custFollowStat = r => __webpack_require__.e/* require.ensure */(8).then((() => r(__webpack_require__(915))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const custFollowTask = r => __webpack_require__.e/* require.ensure */(8).then((() => r(__webpack_require__(916))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const custMoreOpt = r => __webpack_require__.e/* require.ensure */(8).then((() => r(__webpack_require__(918))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const custImport = r => __webpack_require__.e/* require.ensure */(8).then((() => r(__webpack_require__(917))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- market pages
const msiteConf = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(951))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const marketTools = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(950))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const msiteShareConf = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(952))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const activityCouponList = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(932))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const activityCouponEdit = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(931))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const activityCouponStat = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(934))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const lotteryList = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(948))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const lotteryEdit = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(947))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const lotteryStat = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(949))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shareItem = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(956))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const shareItemDoc = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(955))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const groupbuyHelp = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(942))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const groupbuyProduct = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(945))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const groupbuyProductEdit = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(944))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const groupbuyTeam = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(946))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const groupbuyOrder = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(943))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const bargainProductList = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(930))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const bargainProductEdit = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(929))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const eventList = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(936))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const eventEdit = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(935))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const geGameList = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(940))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const geGameEdit = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(939))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const geGameStat = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(941))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const seckillProductList = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(954))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const seckillProductEdit = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(953))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const autoRenew = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(928))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const autoRenewCreate = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(926))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const autoRenewEdit = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(927))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
// 新增分享链接
const couponShareLinkQuery = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(933))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
// 散客
const fitEntryTicket = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(938))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const fitEntryTicketEdit = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(937))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- mall pages
const mallProductQuery = r => __webpack_require__.e/* require.ensure */(10).then((() => r(__webpack_require__(924))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const mallProductEdit = r => __webpack_require__.e/* require.ensure */(10).then((() => r(__webpack_require__(922))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const mallProductCate = r => __webpack_require__.e/* require.ensure */(10).then((() => r(__webpack_require__(921))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const mallProductOrder = r => __webpack_require__.e/* require.ensure */(10).then((() => r(__webpack_require__(923))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const mallShoppingCart = r => __webpack_require__.e/* require.ensure */(10).then((() => r(__webpack_require__(925))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const mallOptLog = r => __webpack_require__.e/* require.ensure */(10).then((() => r(__webpack_require__(920))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

//-- more pages
const moreTools = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(1016))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const onlinePayApply = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(1022))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const onlinePayApplyEdit = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(1021))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const locker = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(1015))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const aiMachEntrance = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(1003))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const aiMachLocker = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(1006))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const aiMachLockerDetail = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(1005))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const aiMachHrs = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(1004))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const aiMachRun = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(1007))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const smsTask = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(1023))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const venueBooking = r => __webpack_require__.e/* require.ensure */(11).then((() => r(__webpack_require__(1025))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const venueCheckin = r => __webpack_require__.e/* require.ensure */(11).then((() => r(__webpack_require__(1027))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const venueCheckinConf = r => __webpack_require__.e/* require.ensure */(11).then((() => r(__webpack_require__(1026))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const venueConf = r => __webpack_require__.e/* require.ensure */(11).then((() => r(__webpack_require__(1028))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const ticket = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(1024))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

const verifyCoupon = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(1018))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const platformBind = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(1017))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

const dyVerifyCoupon = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(1009))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const dyPlatformBind = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(1008))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

const instalment = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(1014))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const instalmentCreate = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(1010))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
// 阶段付商品
const instalmentProduct = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(1012))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const instalmentProductCreate = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(1011))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const instalmentStat = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(1013))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

const notice = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(1020))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const noticeEdit = r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(1019))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
	//mode: 'history',

	routes: [{ path: '/', component: home, meta: { ignoreAuth: true } }, { path: '/t/:tid', component: home }, { path: '/user-login', component: home, meta: { ignoreAuth: true } }, { path: '/user-pwd-set', component: userPwdSet, meta: { ignoreAuth: true } },

	//-- tenant pages
	{ path: '/tenant-apply', component: tenantApply, meta: { ignoreAuth: true } }, { path: '/tenant-reg', component: tenantReg, meta: { ignoreAuth: true } }, { path: '/tenant', component: tenantShops }, { path: '/tenant-edit', component: tenantEdit }, { path: '/tenant-conf', component: tenantEdit }, { path: '/tenant-shops', component: tenantShops }, { path: '/tenant-shop-create', component: tenantShopCreate }, { path: '/tenant-shop-edit/:encSid', component: tenantShopEdit }, { path: '/tenant-shop-view/:encSid', component: tenantShopView }, { path: '/tenant-card-conf', component: tenantCardConf }, { path: '/tenant-card-create', component: tenantCardEdit }, { path: '/tenant-card-edit/:cardId', component: tenantCardEdit }, { path: '/tenant-stat', component: tenantStatReport }, { path: '/tenant-stat-report', component: tenantStatReport }, { path: '/tenant-stat-revenue', component: tenantStatRevenue }, { path: '/tenant-stat-member', component: tenantStatMember }, { path: '/tenant-stat-course', component: tenantStatCard }, { path: '/tenant-stat-cust', component: tenantStatCust }, { path: '/tenant-login-conf', component: tenantLoginConf }, { path: '/tenant-pc-action', component: tenantPcAction }, { path: '/tenant-wx-auth', component: tenantWxAuth }, { path: '/tenant-mp-auth', component: tenantMpAuth }, { path: '/tenant-lesson-conf', component: tenantLessonConf }, { path: '/tenant-conf-copy', component: tenantConfCopy },

	//-- shop pages
	{ path: '/shop-home', component: shopHome }, { path: '/shop-edit', component: shopEdit, meta: { roleFunc: 1 } }, { path: '/shop-card-conf', component: shopCardConf }, { path: '/shop-card-create', component: shopCardEdit, meta: { roleFunc: 4 } }, { path: '/shop-card-edit/:cardId', component: shopCardEdit, meta: { roleFunc: 4 } }, { path: '/shop-ground', component: shopGround }, { path: '/shop-notice', component: shopNotice }, { path: '/sms-log', component: smsLog, meta: { roleFunc: 6 } }, { path: '/points-conf', component: pointsConf }, { path: '/cust-source', component: custSource }, { path: '/entry-checkin-list', component: entryCheckinList }, { path: '/mobile-usage', component: mobileUsage }, { path: '/recharge', component: recharge }, { path: '/entry-checkin-conf', component: entryCheckinConf }, { path: '/entry-checkin-screen', component: entryCheckinScreen }, { path: '/entry-checkin-screen-old', component: entryCheckinScreenOld }, { path: '/local-mach-conf', component: localMachConf, meta: { roleFunc: 50 } }, { path: '/shop-more-conf', component: shopMoreConf }, { path: '/shop-data-duplicate', component: shopDataDuplicate },
	// pos
	{ path: '/set-pos', component: SetPos },
	//-- staff pages
	{ path: '/role-permission', component: rolePermission }, { path: '/staff-create', component: staffCreate, meta: { roleFunc: 10 } }, { path: '/staff-edit/:staffId', component: staffEdit }, { path: '/staff-view/:staffId/view', component: staffEdit }, { path: '/staff-query', component: staffQuery }, { path: '/staff-coach/:staffId', component: staffCoach }, { path: '/staff-sales/:staffId', component: staffSales }, { path: '/staff-salary-conf/', component: staffSalaryConf }, { path: '/staff-salary/:staffId', component: staffSalary }, { path: '/staff-list-salary', component: staffListSalary }, { path: '/coach-type', component: coachType }, { path: '/department', component: shopDepartment }, { path: '/staff-login-conf', component: staffLoginConf }, { path: '/staff-fav-menu', component: staffFavMenu }, { path: '/shop-report-msg-conf', component: shopReportMsgConf }, { path: '/staff-sales-target', component: staffSalesTarget, meta: { roleFunc: 92 } },

	//-- course pages
	{ path: '/group-course', component: groupCard }, { path: '/group-course-create', component: groupCardEdit, meta: { roleFunc: 11 } }, { path: '/group-course-edit/:courseId', component: groupCardEdit, meta: { roleFunc: 11 } }, { path: '/group-course-schedule', component: groupCardSchedule }, { path: '/group-course-schedule-create/', component: groupCardScheduleEdit, meta: { roleFunc: 11 } }, { path: '/group-course-schedule-edit/:csId', component: groupCardScheduleEdit, meta: { roleFunc: 11 } }, { path: '/group-lesson', component: groupLesson }, { path: '/group-lesson-edit/:lessonId', component: groupLessonEdit, meta: { roleFunc: 11 } }, { path: '/group-lesson-records/:lessonId', component: groupLessonRecords }, { path: '/group-lesson-review/:lessonId', component: groupLessonReview }, { path: '/private-course', component: privateCard }, { path: '/private-course-create', component: privateCardEdit, meta: { roleFunc: 11 } }, { path: '/private-course-edit/:courseId', component: privateCardEdit, meta: { roleFunc: 11 } }, { path: '/private-course-schedule', component: privateCardSchedule }, { path: '/private-course-schedule-create', component: privateCardScheduleEdit, meta: { roleFunc: 11 } }, { path: '/private-course-schedule-create/:memberId/:lessonCnt/:lessonFee/:lessonDates', component: privateCardScheduleEdit, meta: { roleFunc: 11 } }, { path: '/private-course-schedule-edit/:psId', component: privateCardScheduleEdit, meta: { roleFunc: 11 } }, { path: '/private-lesson', component: privateLesson }, { path: '/private-lesson-create/:psId', component: privateLessonEdit, meta: { roleFunc: 11 } }, { path: '/private-lesson-edit/:lessonId/:mplId', component: privateLessonEdit, meta: {} }, { path: '/private-lesson-edit/:lessonId', component: privateLessonEdit, meta: {} }, { path: '/private-lesson-records/:lessonId', component: privateLessonRecords }, { path: '/private-lesson-review/:lessonId', component: privateLessonReview }, { path: '/lesson-booking-conf', component: lessonBookingConf }, { path: '/cust-private-lesson', component: custPrivateLesson }, { path: '/group-lesson-cancel-log', component: groupLessonCancelLog }, { path: '/private-lesson-cancel-log', component: privateLessonCancelLog }, { path: '/group-lesson-member-cancel-log/:lessonId', component: groupLessonMemberCancelLog, meta: {} }, { path: '/lesson-review', component: lessonReview }, { path: '/gl-with-review', component: glWithReview }, { path: '/pl-with-review', component: plWithReview }, { path: '/review-conf', component: reviewConf },

	//-- member pages
	{ path: '/member-query', component: memberQuery }, { path: '/member-create', component: memberCreate, meta: { roleFunc: 12 } }, { path: '/member-info/:memberId', component: memberInfo }, { path: '/member-card-list/:memberId', component: memberCardList }, { path: '/member-lesson-list/:memberId', component: memberLessonList }, { path: '/member-checkin-list/:memberId', component: memberCheckinList }, { path: '/member-photo-list/:memberId', component: memberPhotoList }, { path: '/member-body-test-list/:memberId', component: memberBodyTestList }, { path: '/member-notice', component: memberNotice, meta: { roleFunc: 5 } }, { path: '/member-send-sms', component: memberSendSms }, { path: '/member-follow-list/:memberId', component: memberFollowList }, { path: '/member-points-list/:memberId', component: memberPointsList }, { path: '/member-batch-opt', component: memberBatchOpt }, { path: '/member-card-query', component: memberCardQuery }, { path: '/member-action-query', component: memberActionQuery }, { path: '/member-opt-log', component: memberOptLog, meta: { roleFunc: 12 } }, { path: '/member-opt-log-card-vacation', component: memberOptLogCardVacation, meta: { roleFunc: 12 } }, { path: '/member-opt-log-card-disuse', component: memberOptLogCardDisuse, meta: { roleFunc: 12 } }, { path: '/member-opt-log-card-change', component: memberOptLogCardChange, meta: { roleFunc: 12 } }, { path: '/member-opt-log-entry-checkin', component: memberOptLogEntryCheckin, meta: { roleFunc: 12 } }, { path: '/member-opt-log-card-alt', component: memberOptLogCardAlt, meta: { roleFunc: 12 } }, { path: '/member-opt-log-transfer-card', component: memberOptLogTransferCard, meta: { roleFunc: 12 } }, { path: '/member-opt-log-change-phone', component: memberOptLogChangePhone, meta: { roleFunc: 12 } }, { path: '/member-opt-log-change-card-no', component: memberOptLogChangeCardNo, meta: { roleFunc: 12 } }, { path: '/member-opt-log-card-del', component: memberOptLogCardDel, meta: { roleFunc: 12 } }, { path: '/member-opt-log-mcp-time', component: memberOptLogMpcTime, meta: { roleFunc: 12 } }, { path: '/member-opt-log-avatar-change', component: memberOptLogAvatarChange, meta: { roleFunc: 12 } }, { path: '/member-test', component: memberTestCommon }, { path: '/member-test-common', component: memberTestCommon }, { path: '/member-test-score', component: memberTestScore }, { path: '/member-test-score-rank', component: memberTestScoreRank }, { path: '/member-test-conf', component: memberTestConf }, { path: '/member-follow-query', component: memberFollowQuery }, { path: '/member-venue-bookings/:memberId', component: memberVenueBookings }, { path: '/member-draft-create', component: memberDraftEdit, meta: { roleFunc: 69 } }, { path: '/member-draft-edit/:mdId', component: memberDraftEdit }, { path: '/member-draft-query', component: memberDraftQuery }, { path: '/member-draft-query', component: memberDraftQuery }, { path: '/member-card-draft-query', component: memberCardDraftQuery }, { path: '/member-card-payment-draft-query', component: memberCardPaymentDraftQuery }, { path: '/member-contract-print/:memberId/:mcpId', component: memberContractPrint }, { path: '/member-teenagers-test', component: memberTeenagersTest }, { path: '/member-teenagers-test-edit/:memberId/:mptId', component: memberTeenagersTestEdit }, { path: '/member-teenagers-test-create', component: memberTeenagersTestCreate }, { path: '/member-posture', component: memberPosture }, { path: '/member-posture-edit/:memberId/:mptId', component: memberPostureEdit }, { path: '/member-posture-create', component: memberPostureCreate }, { path: '/member-card-check', component: memberCardCheck },

	//-- acc pages
	{ path: '/charge-list', component: chargeList, meta: { roleFunc: 17 } }, { path: '/charge-opt-log', component: chargeOptLog, meta: { roleFunc: 17 } }, { path: '/card-bills', component: cardBills, meta: { roleFunc: 16 } }, { path: '/charge-item', component: chargeItem, meta: { roleFunc: 21 } }, { path: '/product-sale', component: productSale, meta: { roleFunc: 17 } }, { path: '/product-stock', component: productStock, meta: {} }, { path: '/product-cate', component: productCate, meta: { roleFunc: 21 } },

	//-- stat pages
	{ path: '/shop-stat-member', component: statMember, meta: { roleFunc: 15 } }, { path: '/shop-stat-member-entry', component: statMemberEntry, meta: { roleFunc: 15 } }, { path: '/shop-stat-member-points', component: statMemberPoints, meta: { roleFunc: 15 } }, { path: '/shop-stat-member-lesson', component: statMemberLesson, meta: { roleFunc: 15 } }, { path: '/shop-stat-member-payment', component: statMemberPayment, meta: { roleFunc: 15 } }, { path: '/shop-stat-member-source', component: statMemberSource, meta: { roleFunc: 15 } }, { path: '/shop-stat-member-checkin-days', component: statMemberCheckinDays, meta: { roleFunc: 15 } }, { path: '/shop-stat-member-private-lesson', component: statMemberPrivateLesson, meta: { roleFunc: 15 } }, { path: '/shop-stat-member-more', component: statMemberMore, meta: { roleFunc: 15 } }, { path: '/shop-stat-staff', component: statSales, meta: { roleFunc: 23 } }, { path: '/shop-stat-sales', component: statSales, meta: { roleFunc: 23 } }, { path: '/shop-stat-group-coach', component: statGroupCoach, meta: { roleFunc: 23 } }, { path: '/shop-stat-private-coach', component: statPrivateCoach, meta: { roleFunc: 23 } }, { path: '/shop-stat-course', component: statGroupCard, meta: { roleFunc: 22 } }, { path: '/shop-stat-group-course', component: statGroupCard, meta: { roleFunc: 22 } }, { path: '/shop-stat-private-course', component: statPrivateCard, meta: { roleFunc: 22 } }, { path: '/shop-stat-group-lesson', component: statGroupLesson, meta: { roleFunc: 34 } }, { path: '/shop-stat-course-home', component: statPrivateLesson, meta: { roleFunc: 22 } }, { path: '/shop-stat-private-lesson', component: statPrivateLesson, meta: { roleFunc: 22 } }, { path: '/shop-stat-card', component: statCardBills, meta: { roleFunc: 24 } }, { path: '/shop-stat-card-bills', component: statCardBills, meta: { roleFunc: 24 } }, { path: '/shop-stat-card-by-card', component: statCardByCard, meta: { roleFunc: 24 } }, { path: '/shop-stat-card-by-type', component: statCardByType, meta: { roleFunc: 24 } }, { path: '/shop-stat-card-by-class', component: statCardByClass, meta: { roleFunc: 24 } }, { path: '/shop-stat-revenue', component: statRevenue, meta: { roleFunc: 25 } }, { path: '/shop-stat-report', component: statReport, meta: { roleFunc: 28 } }, { path: '/shop-stat-adv', component: statAdvReports, meta: { roleFunc: 64 } }, { path: '/shop-stat-adv-card-cate', component: statAdvCardCate, meta: { roleFunc: 64 } }, { path: '/shop-stat-adv-card-payment', component: statAdvCardPayment, meta: { roleFunc: 64 } }, { path: '/shop-stat-adv-venue-consume', component: statAdvVenueConsume, meta: { roleFunc: 64 } }, { path: '/shop-stat-sales-target', component: statSalesTarget, meta: { roleFunc: 23 } },
	// pos
	{
		path: '/shop-pos-pay',
		redirect: '/shop-pos-pay/card',
		component: StatPosPay,
		children: [{ path: '/shop-pos-pay/card', component: StatPosCardPay, meta: { roleFunc: 124 } }]
	},

	//-- cust pages
	{ path: '/cust-query', component: custQuery }, { path: '/cust-create', component: custCreate, meta: { roleFunc: 18 } }, { path: '/cust-edit/:custId', component: custEdit, meta: { roleFunc: 19 } }, { path: '/cust-follow-query', component: custFollowQuery }, { path: '/cust-follow-stat', component: custFollowStat }, { path: '/cust-more-opt', component: custMoreOpt }, { path: '/cust-import', component: custImport, meta: { roleFunc: 18 } }, { path: '/cust-follow-task', component: custFollowTask },

	//-- market pages
	{ path: '/msite-conf', component: msiteConf }, { path: '/market-tools', component: marketTools }, { path: '/msite-share-conf', component: msiteShareConf }, { path: '/market/coupon-list', component: activityCouponList }, { path: '/market/coupon-create', component: activityCouponEdit, meta: { roleFunc: 31 } }, { path: '/market/coupon-edit/:couponId', component: activityCouponEdit, meta: { roleFunc: 31 } }, { path: '/market/coupon-stat/:couponId', component: activityCouponStat, meta: { roleFunc: 31 } }, { path: '/market/lottery-list/', component: lotteryList, meta: { roleFunc: 31 } }, { path: '/market/lottery-create', component: lotteryEdit, meta: { roleFunc: 31 } }, { path: '/market/lottery-edit/:lotteryId', component: lotteryEdit, meta: { roleFunc: 31 } }, { path: '/market/lottery-stat/:lotteryId', component: lotteryStat, meta: { roleFunc: 31 } }, { path: '/market/share-item/home', component: shareItem, meta: { roleFunc: 31 } }, { path: '/market/share-item/member', component: shareItem, meta: { roleFunc: 31 } }, { path: '/market/share-item/staff', component: shareItem, meta: { roleFunc: 31 } }, { path: '/market/share-item-doc', component: shareItemDoc, meta: {} }, { path: '/market/groupbuy-product', component: groupbuyProduct, meta: { roleFunc: 31 } }, { path: '/market/groupbuy-team', component: groupbuyTeam, meta: { roleFunc: 31 } }, { path: '/market/groupbuy-product-create', component: groupbuyProductEdit, meta: { roleFunc: 31 } }, { path: '/market/groupbuy-product-edit/:gpId', component: groupbuyProductEdit, meta: { roleFunc: 31 } }, { path: '/market/groupbuy-help', component: groupbuyHelp, meta: { roleFunc: 31 } }, { path: '/market/groupbuy-order', component: groupbuyOrder, meta: { roleFunc: 31 } }, { path: '/market/bargain-product-list', component: bargainProductList, meta: { roleFunc: 31 } }, { path: '/market/bargain-product-create', component: bargainProductEdit, meta: { roleFunc: 31 } }, { path: '/market/bargain-product-edit/:productId', component: bargainProductEdit, meta: { roleFunc: 31 } }, { path: '/market/event-list', component: eventList, meta: { roleFunc: 31 } }, { path: '/market/event-create', component: eventEdit, meta: { roleFunc: 31 } }, { path: '/market/event-edit/:eventId', component: eventEdit, meta: { roleFunc: 31 } }, { path: '/market/ge-game-list/', component: geGameList, meta: { roleFunc: 31 } }, { path: '/market/ge-game-create', component: geGameEdit, meta: { roleFunc: 31 } }, { path: '/market/ge-game-edit/:gameId', component: geGameEdit, meta: { roleFunc: 31 } }, { path: '/market/ge-game-stat/:gameId', component: geGameStat, meta: { roleFunc: 31 } }, { path: '/market/seckill-product-list', component: seckillProductList, meta: { roleFunc: 31 } }, { path: '/market/seckill-product-create', component: seckillProductEdit, meta: { roleFunc: 31 } }, { path: '/market/seckill-product-edit/:productId', component: seckillProductEdit, meta: { roleFunc: 31 } }, { path: '/market/auto-renew', component: autoRenew, meta: { roleFunc: 31 } }, { path: '/market/auto-renew-create', component: autoRenewCreate, meta: { roleFunc: 31 } }, { path: '/market/auto-renew-edit/:ssrId', component: autoRenewEdit, meta: { roleFunc: 31 } }, { path: '/market/seckill-product-edit/:productId', component: seckillProductEdit, meta: { roleFunc: 31 } },
	// 新增分享链接
	{ path: '/market/coupon-share-link', component: couponShareLinkQuery, meta: {} },
	// 散客
	{ path: '/market/fit-entry-ticket', component: fitEntryTicket }, { path: '/market/fit-entry-ticket-create', component: fitEntryTicketEdit }, { path: '/market/fit-entry-ticket-edit/:productId', component: fitEntryTicketEdit },

	//-- mall pages
	{ path: '/mall/product-query', component: mallProductQuery, meta: { roleFunc: 39 } }, { path: '/mall/product-create', component: mallProductEdit, meta: { roleFunc: 40 } }, { path: '/mall/product-edit/:productId', component: mallProductEdit, meta: { roleFunc: 40 } }, { path: '/mall/product-cate', component: mallProductCate }, { path: '/mall/product-order', component: mallProductOrder, meta: { roleFunc: 42 } }, { path: '/mall/shopping-cart', component: mallShoppingCart, meta: { roleFunc: 43 } }, { path: '/mall/opt-log', component: mallOptLog, meta: {} },

	//-- more pages
	{ path: '/more-tools', component: moreTools }, { path: '/online-pay-apply', component: onlinePayApply },
	// =============申请微信在线支付
	{ path: '/online-pay-apply-edit/:applyId', component: onlinePayApplyEdit }, {
		path: '/online-pay-apply-create',
		component: onlinePayApplyEdit
	},
	// ==================
	{ path: '/locker', component: locker, meta: {} }, { path: '/ai-mach-conf', component: aiMachEntrance, meta: {} }, { path: '/ai-mach-entrance', component: aiMachEntrance, meta: {} }, { path: '/ai-mach-locker', component: aiMachLocker, meta: {} }, { path: '/ai-mach-locker-detail', component: aiMachLockerDetail, meta: {} }, { path: '/ai-mach-hrs', component: aiMachHrs, meta: { roleFunc: 35 } }, { path: '/ai-mach-run', component: aiMachRun, meta: { roleFunc: 35 } }, { path: '/ai-mach-body-test', component: r => __webpack_require__.e/* require.ensure */(4).then((() => r(__webpack_require__(1002))).bind(null, __webpack_require__)).catch(__webpack_require__.oe) }, { path: '/sms-task', component: smsTask, meta: { roleFunc: 55 } }, { path: '/venue-booking', component: venueBooking, meta: {} }, { path: '/venue-checkin', component: venueCheckin, meta: {} }, { path: '/venue-conf', component: venueConf, meta: { roleFunc: 57 } }, { path: '/venue-checkin-conf', component: venueCheckinConf, meta: { roleFunc: 57 } }, { path: '/ticket', component: ticket, meta: {} }, { path: '/mt-verify-coupon', component: verifyCoupon, meta: { roleFunc: 118 } }, { path: '/mt-platform-bind', component: platformBind }, { path: '/dy-verify-coupon', component: dyVerifyCoupon, meta: { roleFunc: 120 } }, { path: '/dy-platform-bind', component: dyPlatformBind }, { path: '/instalment', component: instalment, meta: { roleFunc: 128 } }, { path: '/instalment-create', component: instalmentCreate, meta: { roleFunc: 126 } }, { path: '/instalment-product', component: instalmentProduct, meta: { roleFunc: 130 } }, { path: '/instalment-product-create', component: instalmentProductCreate, meta: { roleFunc: 129 } }, { path: '/instalment-product-edit/:productId', component: instalmentProductCreate, meta: { roleFunc: 129 } }, { path: '/instalment-stat', component: instalmentStat, meta: { roleFunc: 128 } }, { path: '/notice', component: notice, meta: {} }, { path: '/notice-edit/:inId', component: noticeEdit, meta: {} }, { path: '/notice-create', component: noticeEdit, meta: {} }, { path: '/test', component: r => __webpack_require__.e/* require.ensure */(13).then((() => r(__webpack_require__(880))).bind(null, __webpack_require__)).catch(__webpack_require__.oe) }, { path: '*', component: r => __webpack_require__.e/* require.ensure */(14).then((() => r(__webpack_require__(1029))).bind(null, __webpack_require__)).catch(__webpack_require__.oe) }],

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
	if (to.meta && to.meta.ignoreAuth) {
		next();
	} else {
		if ($.data.user && $.data.user.uid) {
			if ($.data.shop.isExpired && to.path !== '/recharge') {
				$.Dlg.warning($.Lang.SHOP_EXPIRED.format($.data.shop.shopName));
				next({ path: '/recharge' });
				return;
			}

			// 角色权限检查
			if (checkRoleFunc(to)) {
				next();
			} else {
				alert($.Lang.NO_ROLE_FUNC);
			}
		} else {
			next({ path: '/user-login', query: { redirect: to.fullPath } });
		}
	}
});

router.afterEach((to, from) => {
	window.scrollTo(0, 0);
});

function checkRoleFunc(to) {
	if (to.meta && to.meta.roleFunc) {
		return $.Util.hasRoleFunc(to.meta.roleFunc);
	} else {
		return true;
	}
}



/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return menus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pageMenus; });
/**
 * Created by zxl on 2017/5/27.
 */

const menus = {
  "tenant-shops": {
    _default_: "tenant-shops",
    "tenant-shops": "旗下门店"
  },
  "tenant-shop-create": {
    _default_: "tenant-shop-create",
    "tenant-shop-create": "新建门店"
  },
  "tenant-stat": {
    _default_: "tenant-stat-revenue",
    "tenant-stat-revenue": "营业额统计",
    "tenant-stat-report": "账单明细",
    "tenant-stat-member": "会员统计",
    "tenant-stat-course": "课程统计",
    "tenant-stat-cust": "客户统计"
  },
  "tenant-conf": {
    _default_: "tenant-edit",
    "tenant-edit": "商户信息",
    "tenant-login-conf": "登录设置",
    "tenant-pc-action": "私教训练库",
    "tenant-wx-auth": "微信公众号授权",
    "tenant-mp-auth": "微信小程序授权",
    "tenant-lesson-conf": "上课设置",
    "tenant-conf-copy": "基础设置复制"
  },
  "tenant-card-conf": {
    _default_: "tenant-card-conf",
    "tenant-card-conf": "连锁店会员卡设置"
  },
  "shop-home": {
    _default_: "shop-home",
    "shop-home": "首页"
  },
  member: {
    _default_: "member-query",
    "member-query": "会员查询",
    "member-create": "新建会员",
    "member-card-query": "会员卡查询",
    "member-action-query": "锻炼查询",
    "member-batch-opt": "批量操作",
    "member-notice": "消息提醒",
    "member-opt-log": "操作日志",
    "member-test": "会员测试",
    "member-follow-query": "跟进查询"
  },
  cust: {
    _default_: "cust-query",
    "cust-query": "客户查询",
    "cust-create": "新建客户",
    "cust-follow-task": "跟进任务",
    "cust-follow-query": "跟进记录",
    "cust-follow-stat": "跟进统计",
    "cust-import": "客户导入",
    "cust-more-opt": "更多操作"
  },
  course: {
    _default_: "group-lesson",
    "group-lesson": "团课课表",
    "group-course-schedule": "团课排课",
    "group-course": "团课课程",
    "private-lesson": "私教课表",
    "private-course-schedule": "私教排课",
    "private-course": "私教课程",
    "cust-private-lesson": "私教体验课",
    "lesson-review": "课程评价",
    "lesson-booking-conf": "预约签到设置"
  },
  staff: {
    _default_: "staff-query",
    "staff-query": "员工查询",
    "staff-create": "新建员工",
    "role-permission": "角色与权限",
    "coach-type": "教练类型",
    department: "部门",
    "staff-salary-conf": "工资设置",
    "staff-list-salary": "工资列表",
    "staff-sales-target": "销售目标设置"
  },
  acc: {
    _default_: "product-sale",
    "product-sale": "商品售卖",
    "product-stock": "商品库存",
    "product-cate": "商品类别",
    "charge-list": "记账单",
    "charge-item": "资费项",
    "charge-opt-log": "账单操作日志"
  },
  market: {
    _default_: "msite-conf",
    "msite-conf": "微官网",
    "market/coupon-list": "电子优惠券",
    "market/lottery-list": "幸运抽奖",
    "market/ge-game-list": "砸金蛋",
    "market/share-item/home": "全员分销",
    "market/groupbuy-product": "拼团",
    "market/bargain-product-list": "砍价",
    "market/event-list": "活动报名",
    "market/seckill-product-list": "秒杀",
    "market/auto-renew": "自助续费卡",
    "market/fit-entry-ticket": "散客入场券"
  },
  mall: {
    _default_: "mall/product-query",
    "mall/product-query": "商城商品",
    "mall/product-cate": "商品类别",
    "mall/product-order": "商品订单"
    //'mall/shopping-cart': '会员购物车',
    //'mall/opt-log': '操作日志',
  },
  "shop-stat": {
    _default_: "shop-stat-member",
    "shop-stat-member": "会员统计",
    "shop-stat-staff": "员工业绩统计",
    "shop-stat-private-lesson": "私教课统计",
    "shop-stat-group-lesson": "团课统计",
    "shop-stat-card": "会员卡统计",
    "shop-stat-revenue": "收支统计",
    "shop-stat-report": "营业额统计",
    "shop-stat-adv": "更多统计"
  },
  "shop-conf": {
    _default_: "shop-edit",
    "shop-edit": "门店信息",
    "shop-ground": "上课场地",
    "shop-card-conf": "会员卡种类",
    "points-conf": "会员积分",
    "cust-source": "客户来源",
    "entry-checkin-conf": "入场签到",
    "sms-log": "消息记录",
    "mobile-usage": "手机版",
    "mobile-usage": "手机版",
    // pos
    "set-pos": "POS设置",
    // "set-instalment": "分期付款设置",
    "shop-more-conf": "更多设置"
  },
  "more-tools": {
    _default_: "more-tools",
    _hide_side_menu_: true,
    //'more-tools': '更多功能',
    "online-pay-apply": "在线支付申请",
    "sms-task": "短信群发",
    locker: "租柜管理",
    "local-mach-conf": "签到消费机管理",
    "ai-mach-conf": "智能设备管理",
    "venue-booking": "场地预约",
    "venue-checkin": "场地计时",
    "mt-verify-coupon": "美团核销",
    "dy-verify-coupon": "抖音核销",
    // 分期
    instalment: "阶段付",
    notice: "公告"
  }
};

const pageMenus = {
  groupLesson: function (id, activedPage) {
    return [{
      name: "基本信息",
      path: "group-lesson-edit/" + id,
      active: activedPage === "group-lesson-edit"
    }, {
      name: "上课记录",
      path: "group-lesson-records/" + id,
      active: activedPage === "group-lesson-records"
    }, {
      name: "上课评价",
      path: "group-lesson-review/" + id,
      active: activedPage === "lesson-review"
    }, {
      name: "取消日志",
      path: "group-lesson-member-cancel-log/" + id,
      active: activedPage === "group-lesson-member-cancel-log"
    }];
  },
  privateLessonCreate: function (psId, activedPage) {
    return [{
      name: "新建课时",
      path: "private-lesson-create/" + psId,
      active: activedPage === "private-lesson-create"
    }];
  },
  privateLesson: function (lessonId, activedPage) {
    return [{
      name: "基本信息",
      path: "private-lesson-edit/" + lessonId,
      active: activedPage === "private-lesson-edit"
    }, {
      name: "上课记录",
      path: "private-lesson-records/" + lessonId,
      active: activedPage === "private-lesson-records"
    }, {
      name: "上课评价",
      path: "private-lesson-review/" + lessonId,
      active: activedPage === "private-lesson-review"
    }];
  },
  member: function (id, activedPage) {
    return [{
      name: "会员信息",
      path: "member-info/" + id,
      active: activedPage === "member-info"
    }, {
      name: "会员卡",
      path: "member-card-list/" + id,
      active: activedPage === "member-card-list"
    }, {
      name: "上课记录",
      path: "member-lesson-list/" + id,
      active: activedPage === "member-lesson-list"
    }, {
      name: "会员跟进",
      path: "member-follow-list/" + id,
      active: activedPage === "member-follow-list"
    }, {
      name: "入场签到记录",
      path: "member-checkin-list/" + id,
      active: activedPage === "member-checkin-list"
    }, {
      name: "场地预约记录",
      path: "member-venue-bookings/" + id,
      active: activedPage === "member-venue-bookings"
    }, {
      name: "积分记录",
      path: "member-points-list/" + id,
      active: activedPage === "member-points-list"
    }, {
      name: "会员相册",
      path: "member-photo-list/" + id,
      active: activedPage === "member-photo-list"
    }, {
      name: "会员测试",
      path: "member-body-test-list/" + id,
      active: activedPage === "member-body-test-list"
    }];
  },
  staff: function (staff, activedPage) {
    let menus = [{
      name: "基本信息",
      path: "staff-edit/" + staff.staffId,
      active: activedPage === "staff-edit"
    }, {
      name: "上课记录",
      path: "staff-coach/" + staff.staffId,
      active: activedPage === "staff-coach"
    }, {
      name: "销售记录",
      path: "staff-sales/" + staff.staffId,
      active: activedPage === "staff-sales"
    }, {
      name: "工资计算",
      path: "staff-salary/" + staff.staffId,
      active: activedPage === "staff-salary"
    }];
    if (staff.isCoach) {
      return menus;
    } else {
      return [menus[0], menus[2], menus[3]];
    }
  },
  shopMemberStat: function (activedPage) {
    return [{
      name: "概要统计",
      path: "shop-stat-member",
      active: activedPage === "shop-stat-member"
    }, {
      name: "入场签到排名",
      path: "shop-stat-member-entry",
      active: activedPage === "stat-member-entry"
    }, {
      name: "积分排名",
      path: "shop-stat-member-points",
      active: activedPage === "stat-member-points"
    }, {
      name: "上课排名",
      path: "shop-stat-member-lesson",
      active: activedPage === "stat-member-lesson"
    }, {
      name: "充值排名",
      path: "shop-stat-member-payment",
      active: activedPage === "stat-member-payment"
    }, {
      name: "出勤排名",
      path: "shop-stat-member-checkin-days",
      active: activedPage === "stat-member-checkin-days"
    }, {
      name: "会员来源",
      path: "shop-stat-member-source",
      active: activedPage === "stat-member-source"
    }, {
      name: "私教课",
      path: "shop-stat-member-private-lesson",
      active: activedPage === "stat-member-private-lesson"
    }, {
      name: "更多统计",
      path: "shop-stat-member-more",
      active: activedPage === "stat-member-more"
    }];
  },
  tenantMemberStat: function (activedPage) {
    return [{
      name: "入场签到排名",
      path: "tenant-stat-member",
      active: activedPage === "stat-member-entry"
    }];
  },
  shopStaffStat: function (activedPage) {
    return [{
      name: "销售业绩",
      path: "shop-stat-sales",
      active: activedPage === "stat-sales"
    }, {
      name: "团课教练业绩",
      path: "shop-stat-group-coach",
      active: activedPage === "stat-group-coach"
    }, {
      name: "私教业绩",
      path: "shop-stat-private-coach",
      active: activedPage === "stat-private-coach"
    }, {
      name: "销售目标",
      path: "shop-stat-sales-target",
      active: activedPage === "stat-sales-target"
    }];
  },
  shopCourseStat: function (activedPage) {
    return [{
      name: "私教课统计",
      path: "shop-stat-private-lesson",
      active: activedPage === "stat-private-lesson"
    }, {
      name: "团课统计",
      path: "shop-stat-group-lesson",
      active: activedPage === "stat-group-lesson"
    },
    //{name: '团课统计报表', path: 'shop-stat-group-lesson', active: (activedPage === 'stat-group-lesson')},
    {
      name: "私教课排名",
      path: "shop-stat-private-course",
      active: activedPage === "stat-private-course"
    }, {
      name: "团课排名",
      path: "shop-stat-group-course",
      active: activedPage === "stat-group-course"
    }];
  },
  cardStat: function (activedPage) {
    return [{
      name: "会员卡账单与统计",
      path: "shop-stat-card-bills",
      active: activedPage === "stat-card-bills"
    }, {
      // pos
      name: "POS购卡订单",
      path: "shop-pos-pay/card",
      active: activedPage === "shop-pos-pay/card"
    }, {
      name: "按卡种统计",
      path: "shop-stat-card-by-card",
      active: activedPage === "stat-card-by-card"
    }, {
      name: "按卡类型统计",
      path: "shop-stat-card-by-type",
      active: activedPage === "stat-card-by-type"
    }, {
      name: "按卡类别统计",
      path: "shop-stat-card-by-class",
      active: activedPage === "stat-card-by-class"
    }, {
      name: "按卡分组统计",
      path: "shop-stat-adv-card-cate",
      active: activedPage === "shop-stat-adv-card-cate"
    }];
  },
  memberOptLog: function (activedPage) {
    return [{
      name: "会员卡请假",
      path: "member-opt-log-card-vacation",
      active: activedPage === "member-opt-log-card-vacation"
    }, {
      name: "会员卡停用",
      path: "member-opt-log-card-disuse",
      active: activedPage === "member-opt-log-card-disuse"
    }, {
      name: "会员卡充值修改",
      path: "member-opt-log-card-change",
      active: activedPage === "member-opt-log-card-change"
    }, {
      name: "会员卡删除",
      path: "member-opt-log-card-del",
      active: activedPage === "member-opt-log-card-del"
    }, {
      name: "会员转卡",
      path: "member-opt-log-transfer-card",
      active: activedPage === "member-opt-log-transfer-card"
    }, {
      name: "会员卡批量操作",
      path: "member-opt-log-card-alt",
      active: activedPage === "member-opt-log-card-alt"
    }, {
      name: "会员手机号修改",
      path: "member-opt-log-change-phone",
      active: activedPage === "member-opt-log-change-phone"
    }, {
      name: "会员卡号修改",
      path: "member-opt-log-change-card-no",
      active: activedPage === "member-opt-log-change-card-no"
    }, {
      name: "入场签到取消",
      path: "member-opt-log-entry-checkin",
      active: activedPage === "member-opt-log-entry-checkin"
    }, {
      name: "会员卡充值时间修改",
      path: "member-opt-log-mcp-time",
      active: activedPage === "member-opt-log-mcp-time"
    }, {
      name: "会员头像修改",
      path: "member-opt-log-avatar-change",
      active: activedPage === "member-opt-log-avatar-change"
    }];
  },
  memberTest: function (activedPage) {
    return [{
      name: "会员综合测试",
      path: "member-test-common",
      active: activedPage === "member-test-common"
    }, {
      name: "会员得分测试",
      path: "member-test-score",
      active: activedPage === "member-test-score"
    }, {
      name: "测试项目配置",
      path: "member-test-conf",
      active: activedPage === "member-test-conf"
    }, {
      name: "幼儿体测",
      path: "member-teenagers-test",
      active: activedPage === "member-teenagers-test"
    }, {
      name: "体态评估",
      path: "member-posture",
      active: activedPage === "member-posture"
    }];
  },
  coupon: function (activedPage, couponId) {
    let menus = [{
      name: "优惠券查询",
      path: "market/coupon-list",
      active: activedPage === "activity-coupon-list"
    }, {
      name: "优惠券编辑",
      path: "market/coupon-edit/" + couponId,
      active: activedPage === "activity-coupon-edit"
    }, {
      name: "优惠券统计",
      path: "market/coupon-stat/" + couponId,
      active: activedPage === "activity-coupon-stat"
    }];
    if (couponId && $.Util.isInteger(couponId)) {
      return menus;
    } else {
      return [{
        name: "优惠券查询",
        path: "market/coupon-list",
        active: activedPage === "activity-coupon-list"
      }, {
        name: "优惠券创建",
        path: "market/coupon-create/",
        active: activedPage === "activity-coupon-edit"
      },
      // 新增分享链接
      {
        name: "分享领取查询",
        path: "market/coupon-share-link/",
        active: activedPage === "coupon-share-link"
      }];
    }
  },
  lottery: function (activedPage, lotteryId) {
    let menus = [{
      name: "抽奖查询",
      path: "market/lottery-list",
      active: activedPage === "lottery-list"
    }, {
      name: "抽奖编辑",
      path: "market/lottery-edit/" + lotteryId,
      active: activedPage === "lottery-edit"
    }, {
      name: "抽奖统计",
      path: "market/lottery-stat/" + lotteryId,
      active: activedPage === "lottery-stat"
    }];
    if (lotteryId && $.Util.isInteger(lotteryId)) {
      return menus;
    } else {
      return [{
        name: "抽奖查询",
        path: "market/lottery-list",
        active: activedPage === "lottery-list"
      }, {
        name: "抽奖创建",
        path: "market/lottery-create",
        active: activedPage === "lottery-edit"
      }];
    }
  },
  geGame: function (activedPage, gameId) {
    let menus = [{
      name: "砸金蛋查询",
      path: "market/ge-game-list",
      active: activedPage === "ge-game-list"
    }, {
      name: "砸金蛋编辑",
      path: "market/ge-game-edit/" + gameId,
      active: activedPage === "ge-game-edit"
    }, {
      name: "砸金蛋记录",
      path: "market/ge-game-stat/" + gameId,
      active: activedPage === "ge-game-stat"
    }];
    if (gameId && $.Util.isInteger(gameId)) {
      return menus;
    } else {
      return [{
        name: "砸金蛋查询",
        path: "market/ge-game-list",
        active: activedPage === "ge-game-list"
      }, {
        name: "砸金蛋创建",
        path: "market/ge-game-create",
        active: activedPage === "ge-game-edit"
      }];
    }
  },
  shareItem: function (activedPage) {
    return [{
      name: "会员分销",
      path: "market/share-item/member",
      active: activedPage === "share-item/member"
    }, {
      name: "员工分销",
      path: "market/share-item/staff",
      active: activedPage === "share-item/staff"
    }, {
      name: "使用帮助",
      path: "market/share-item-doc",
      active: activedPage === "share-item-doc"
    }];
  },
  groupbuyProduct: function (activedPage, productId = null) {
    if (productId) {
      return [{
        name: "拼团商品",
        path: "market/groupbuy-product",
        active: activedPage === "groupbuy-product"
      }, {
        name: "已开团",
        path: "market/groupbuy-team",
        active: activedPage === "groupbuy-team"
      }, {
        name: "拼团订单",
        path: "market/groupbuy-order",
        active: activedPage === "groupbuy-ordery"
      }, {
        name: "拼团编辑",
        path: "market/groupbuy-product-edit/" + productId,
        active: activedPage === "groupbuy-product-edit"
      }];
    } else {
      return [{
        name: "拼团商品",
        path: "market/groupbuy-product",
        active: activedPage === "groupbuy-product"
      }, {
        name: "已开团",
        path: "market/groupbuy-team",
        active: activedPage === "groupbuy-team"
      }, {
        name: "拼团订单",
        path: "market/groupbuy-order",
        active: activedPage === "groupbuy-order"
      }];
    }
  },
  advReports: function (activedPage) {
    return [{
      name: "会员卡分组统计",
      path: "shop-stat-adv-card-cate",
      active: activedPage === "shop-stat-adv-card-cate"
    }, {
      name: "消费收入明细",
      path: "shop-stat-adv-card-payment",
      active: activedPage === "shop-stat-adv-card-payment"
    }, {
      name: "场馆消费量明细",
      path: "shop-stat-adv-venue-consume",
      active: activedPage === "shop-stat-adv-venue-consume"
    }];
  },
  bargain: function (activedPage, productId) {
    return [{
      name: "砍价查询",
      path: "market/bargain-product-list",
      active: activedPage === "bargain-product-list"
    }, {
      name: "砍价商品编辑",
      path: "market/bargain-product-edit/" + productId,
      active: activedPage === "bargain-product-edit"
    }];
  },
  LessonReview: function (activedPage) {
    return [{
      name: "团课评价",
      path: "gl-with-review",
      active: activedPage === "gl-with-review"
    }, {
      name: "私教课评价",
      path: "pl-with-review",
      active: activedPage === "pl-with-review"
    }, {
      name: "评价模板设置",
      path: "review-conf",
      active: activedPage === "review-conf"
    }];
  },
  MachConf: function (activedPage) {
    return [{
      name: "智能门禁/前台机",
      path: "ai-mach-entrance",
      active: activedPage === "ai-mach-entrance"
    }, {
      name: "智能租柜",
      path: "ai-mach-locker",
      active: activedPage === "ai-mach-locker"
    }, {
      name: "心率系统",
      path: "ai-mach-hrs",
      active: activedPage === "ai-mach-hrs"
    }, {
      name: "体测仪",
      path: "ai-mach-body-test",
      active: activedPage === "ai-mach-body-test"
    }, {
      name: "有氧设备",
      path: "ai-mach-run",
      active: activedPage === "ai-mach-run"
    }, {
      name: "签到消费机",
      path: "local-mach-conf",
      active: activedPage === "local-mach-conf"
    }];
  },
  AutoRenewConf: function (activedPage, ssrId = null) {
    if (ssrId) {
      return [{
        name: "自助续费卡查询",
        path: "market/auto-renew",
        active: activedPage === "auto-renew"
      }, {
        name: "自助续费卡编辑",
        path: "market/auto-renew-edit/" + ssrId,
        active: activedPage === "auto-renew-edit"
      }];
    } else {
      return [{
        name: "自助续费卡查询",
        path: "market/auto-renew",
        active: activedPage === "auto-renew"
      }, {
        name: "自助续费卡创建",
        path: "market/auto-renew-create",
        active: activedPage === "auto-renew-create"
      }];
    }
  },
  MtVerifyConf: function (activedPage) {
    return [{
      name: "美团授权绑定",
      path: "mt-platform-bind",
      active: activedPage === "mt-platform-bind"
    }, {
      name: "美团核销",
      path: "mt-verify-coupon",
      active: activedPage === "mt-verify-coupon"
    }];
  },
  DyVerifyConf: function (activedPage) {
    return [{
      name: "抖音授权绑定",
      path: "dy-platform-bind",
      active: activedPage === "dy-platform-bind"
    }, {
      name: "抖音核销",
      path: "dy-verify-coupon",
      active: activedPage === "dy-verify-coupon"
    }];
  },
  Instalment: function (activedPage) {
    return [{
      name: "阶段付订单",
      path: "instalment",
      active: activedPage === "instalment"
    }, {
      name: "阶段付商品",
      path: "instalment-product",
      active: activedPage === "instalment-product"
    }, {
      name: "阶段付统计",
      path: "instalment-stat",
      active: activedPage === "instalment-stat"
    }];
  }
};



/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_js_const_js__ = __webpack_require__(128);
/**
 * Created by zxl on 2017/4/24.
 */




__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* default */].Store({
	state: {
		user: {}, // uid, uname, isTenantOwner
		tenant: {}, // tenantName, logoPathname
		shop: {} // shopName, logoPathname
		//skin: 'black',
	},
	mutations: {
		[__WEBPACK_IMPORTED_MODULE_2__assets_js_const_js__["b" /* Conf */].StoreTypes.LOGIN]: (state, userInfo) => {
			state.user = userInfo;
			//localStorage.token = data;
			//state.token = data;
		},
		[__WEBPACK_IMPORTED_MODULE_2__assets_js_const_js__["b" /* Conf */].StoreTypes.LOGOUT]: state => {
			state.user = {};
		},
		[__WEBPACK_IMPORTED_MODULE_2__assets_js_const_js__["b" /* Conf */].StoreTypes.UPDATE_TENANT]: (state, _tenant) => {
			state.tenant = _tenant;
		},
		[__WEBPACK_IMPORTED_MODULE_2__assets_js_const_js__["b" /* Conf */].StoreTypes.UPDATE_SHOP]: (state, _shop) => {
			state.shop = _shop;
		},
		[__WEBPACK_IMPORTED_MODULE_2__assets_js_const_js__["b" /* Conf */].StoreTypes.UPDATE_SHOP_NAME]: (state, shopName) => {
			state.shop.shopName = shopName;
		}
		/*[Const.Conf.StoreTypes.UPDATE_SKIN]: (state, skin) => {
  	state.skin = skin;
  }*/
	}
}));

/***/ }),

/***/ 391:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(565)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(420),
  /* template */
  __webpack_require__(633),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(421),
  /* template */
  __webpack_require__(652),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(575)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(425),
  /* template */
  __webpack_require__(647),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6fe11923",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(428),
  /* template */
  __webpack_require__(639),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(429),
  /* template */
  __webpack_require__(641),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(580)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(436),
  /* template */
  __webpack_require__(653),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-c73bb2d6",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(570)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(441),
  /* template */
  __webpack_require__(640),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-541c8757",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(422),
  /* template */
  __webpack_require__(634),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(567)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(431),
  /* template */
  __webpack_require__(636),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-33a156a8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(430),
  /* template */
  __webpack_require__(642),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = upload;
/**
 * Created by zxl on 2017/5/13.
 */
function getError(action, option, xhr) {
	const msg = `fail to post ${action} ${xhr.status}'`;
	const err = new Error(msg);
	err.status = xhr.status;
	err.method = 'post';
	err.url = action;
	return err;
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

function upload(option) {
	if (typeof XMLHttpRequest === 'undefined') {
		return;
	}

	const xhr = new XMLHttpRequest();
	const action = option.action;

	if (xhr.upload) {
		xhr.upload.onprogress = function progress(e) {
			if (e.total > 0) {
				e.percent = e.loaded / e.total * 100;
			}
			option.onProgress(e);
		};
	}
	/*
 const formData = new FormData();
 if (option.data) {
 	Object.keys(option.data).map(key => {
 		formData.append(key, option.data[key]);
 	});
 }
 formData.append(option.filename, option.file);
 */
	xhr.onerror = function error(e) {
		option.onError(e);
	};

	xhr.onload = function onload() {
		if (xhr.status < 200 || xhr.status >= 300) {
			return option.onError(getError(action, option, xhr), getBody(xhr));
		}

		option.onSuccess(getBody(xhr));
	};

	xhr.open('post', action, true);

	if (option.withCredentials && 'withCredentials' in xhr) {
		xhr.withCredentials = true;
	}

	const headers = option.headers || {};

	// if (headers['X-Requested-With'] !== null) {
	//   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	// }

	for (let item in headers) {
		if (headers.hasOwnProperty(item) && headers[item] !== null) {
			xhr.setRequestHeader(item, headers[item]);
		}
	}
	xhr.send(option.formData);
}

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(571)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(423),
  /* template */
  __webpack_require__(643),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(577)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(433),
  /* template */
  __webpack_require__(649),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-929690ca",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(578)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(432),
  /* template */
  __webpack_require__(650),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-a9bc6fe8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(569)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(435),
  /* template */
  __webpack_require__(638),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-39352590",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(579)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(437),
  /* template */
  __webpack_require__(651),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-ac75d686",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(573)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(438),
  /* template */
  __webpack_require__(645),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-67d4ab2c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_debounce__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_resize_detector__ = __webpack_require__(622);
//
//
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

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'app',

	data() {
		return {};
	},

	created() {}
});

/***/ }),

/***/ 422:
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
  name: "Help",
  props: {
    title: {
      type: String,
      required: false
    }
  }
});

/***/ }),

/***/ 423:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	props: ['menu', 'menus'],
	data() {
		return {
			g: $,
			sysMenus: null
		};
	},

	created() {
		let menus = JSON.parse(JSON.stringify($.Menus));
		if (!$.data.shop.hasMall) {
			delete menus.mall;
		}
		if ($.data.shop.hasGroupCourse || $.data.shop.hasPrivateCourse) {
			if (!$.data.shop.hasGroupCourse) {
				delete menus.course['group-lesson'];
				delete menus.course['group-course-schedule'];
				delete menus.course['group-course'];
				menus.course['_default_'] = 'private-lesson';
			}
			if (!$.data.shop.hasPrivateCourse) {
				delete menus.course['private-lesson'];
				delete menus.course['private-course-schedule'];
				delete menus.course['private-course'];
				menus.course['_default_'] = 'group-lesson';
			}
		} else {
			delete menus['course'];
		}

		this.sysMenus = menus;
	},

	methods: {
		count(obj) {
			return $.Util.countAttrs(obj) - 1;
		},

		linkTo(menu, menuCnt) {
			if (menuCnt === 1) {
				this.$router.push('/' + menu);
			} else {
				this.$router.push('/' + this.sysMenus[menu]._default_);
			}
		}
	}
});

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nav_menu_vue__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nav_menu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__nav_menu_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	props: ['menu'],
	components: { NavMenu: __WEBPACK_IMPORTED_MODULE_0__nav_menu_vue___default.a },
	data() {
		return {
			g: $,
			menus: [{ icon: 'icon-qiantai', 'name': '首页', 'menu': 'shop-home' }, { icon: 'icon-laofangke1', 'name': '会员', 'menu': 'member' }, { icon: 'icon-bae-staff', 'name': '客户', 'menu': 'cust' }, { icon: 'icon-kebiao', 'name': '课程', 'menu': 'course' }, { icon: 'icon-people1', 'name': '员工', 'menu': 'staff' }, { icon: 'icon-acc', 'name': '记账', 'menu': 'acc' }, { icon: 'icon-mall-1', 'name': '商城', 'menu': 'mall' }, { icon: 'icon-market', 'name': '营销', 'menu': 'market' }, { icon: 'icon-tongji', 'name': '统计', 'menu': 'shop-stat' }, { icon: 'icon-config2', 'name': '设置', 'menu': 'shop-conf' }, { icon: 'icon-more', 'name': '更多', 'menu': 'more-tools' }],
			showJzgLogo: null
		};
	},
	computed: {
		shopName() {
			if (this.$store.state.shop && this.$store.state.shop.shopName) {
				return this.$store.state.shop.shopName;
			} else {
				return $.data.shop.shopName;
			}
		},

		shopImg() {
			if (this.$store.state.shop.logoPathname) {
				return $.Util.getImgUrl(this.$store.state.shop.logoPathname, 500, 500, '25282C');
			} else if ($.data.shop.logoPathname) {
				return $.Util.getImgUrl($.data.shop.logoPathname, 500, 500, '25282C');
			} else {
				return 'http://www.jzongguan.com/imglib/default-shop-logo.jpg';
			}
		}
	},

	created() {
		this.showJzgLogo = window.innerHeight > 700;
		$.data.sys.isInShop = true;
		for (let m of this.menus) {
			if (m.menu === 'cust' && !$.data.shop.hasCustModule) {
				m.disable = true;
			}
			if (m.menu === 'mall' && !$.data.shop.hasMall) {
				m.disable = true;
			}
			if (m.menu === 'market' && !$.data.shop.hasMarketingModule) {
				m.disable = true;
			}
		}
	},

	methods: {
		count(obj) {
			return $.Util.countAttrs(obj) - 1;
		},

		enterShop(idx) {
			const shop = $.data.shopList[idx];
			$.Req.service($.SvName.USER_SHOP_SET, { encSid: shop.encSid }, ret => {
				if (ret.isValidShop) {
					this.$router.push('/shop-home');
					location.reload(true);
				} else {
					$.Dlg.warning($.Lang.SHOP_EXPIRED.format(shop.shopName));
				}
			});
		}
	}
});

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_cust_cust_detail_vue__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_cust_cust_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_cust_cust_detail_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sys_date_calc_vue__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sys_date_calc_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_sys_date_calc_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sys_time_select__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sys_time_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__sys_time_select__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    TimeSelect: __WEBPACK_IMPORTED_MODULE_3__sys_time_select___default.a,
    MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue___default.a,
    DateCalc: __WEBPACK_IMPORTED_MODULE_2__components_sys_date_calc_vue___default.a,
    CustDetail: __WEBPACK_IMPORTED_MODULE_1__pages_cust_cust_detail_vue___default.a
  },
  props: {
    menu: {
      type: String,
      required: true
    },
    page: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    afterEntryCheckin: {
      type: Function,
      default() {
        return null;
      }
    }
  },
  data() {
    return {
      g: $,
      NEWS_BASE_URL: "http://www.jzongguan.com/news/",
      isTenantOwner: false,
      user: "",
      pageMenus: [],
      newsList: [],
      today: new Date(),
      sysLeftDays: 10000,
      from: null,
      isDisplayEntryCheckin: false,
      viewEntryCheckinDlg: false,
      viewEntryCheckinListDlg: false,
      defaultFuncs: {
        "/member-create": "新建会员",
        "/cust-create": "新建客户",
        "/shop-stat-card-bills": "会员卡账单",
        "/member-card-query": "会员卡查询",
        "/group-lesson": "团课课表",
        "/group-course-schedule": "团课排课",
        "/private-lesson": "私教课表",
        "/private-course-schedule": "私教排课",
        "/charge-list": "手工记账",
        "/shop-stat-member": "会员统计",
        "/shop-stat-private-coach": "私教业绩",
        "/shop-stat-private-lesson": "私教课统计",
        "/shop-stat-group-lesson": "团课统计",
        "/sms-task": "短信群发",
        "/venue-booking": "场地预约"
      },
      funcList: {},
      memberQueryVal: null,
      viewMemberId: null,
      viewMemberDlg: false,
      memberCheckDlg: false,
      staffFavMenus: [],
      dateCalcDlg: false,
      queryTarget: 1,
      custDlgView: null,
      custDlgTitle: null,
      selectCustId: null,
      custQueryVal: null
    };
  },

  created() {
    if (!$.data.shop.hasVenueBooking) {
      this.defaultFuncs["/venue-booking"] = null;
    }
    this.funcList = this.defaultFuncs;

    if (this.menu.startsWith("tenant-")) this.from = "tenant";else this.from = "shop";

    if (this.from === "shop" && $.data.shop.hasEntryCheckin && $.Util.hasRoleFunc($.Dict.RoleFunc.MEMBER_AGENT.value)) {
      this.isDisplayEntryCheckin = true;
    }

    this.user = $.data.user;
    if (!this.user.uname) this.user.uname = this.user.phoneNo;
    this.isTenantOwner = this.user.isTenantOwner;
    this.querySysNews();

    let menus = $.Menus[this.menu];
    if (!$.data.shop.hasGroupCourse) {
      delete menus["group-lesson"];
      delete menus["group-course-schedule"];
      delete menus["group-course"];
    }
    if (!$.data.shop.hasPrivateCourse) {
      delete menus["private-lesson"];
      delete menus["private-course-schedule"];
      delete menus["private-course"];
    }
    this.pageMenus = menus;

    this.initSysMenus();
  },

  methods: {
    initSysMenus() {
      let menuIds = [];
      if ($.data.user.staffFavMenus) {
        let ids = $.data.user.staffFavMenus.split(",");
        for (let id of ids) {
          menuIds.push(parseInt(id));
        }
      } else {
        menuIds = [10, 11, 12, 21, 30, 31, 32, 33, 41, 50, 51, 52, 60];
      }
      for (let menu of $.Dict.SysMenus) {
        if (menuIds.contains(menu.id)) {
          this.staffFavMenus.push(menu);
        }
      }
    },

    toPage(menuPage) {
      this.$router.push("/" + menuPage);
    },

    logout() {
      $.Util.cookie.delete($.Conf.Keys.LOGIN_FLAG);
      $.data.user = {};
      $.data.tenant = {};
      $.data.shop = {};
      this.$store.commit($.Conf.StoreTypes.UPDATE_TENANT, {});
      this.$store.commit($.Conf.StoreTypes.UPDATE_SHOP, {});
      $.Req.service($.SvName.LOGOUT, {}, ret => {
        location.href = "/";
      }, true);
    },

    querySysNews() {
      if (this.page === "shop-home") {
        $.Req.service($.SvName.SYS_NEWS_QUERY, {}, (ret, systime) => {
          this.today = Date.new(systime);
          this.sysLeftDays = Date.new($.data.shop.expDate).subtract(this.today);
          this.newsList = ret.newsList;

          this.newsList = [{
            createTime: "2017-07-22 09:57:07",
            isPublic: true,
            newsId: 1,
            orderNum: 0,
            path: "update-log.html?v=20231121",
            publicTime: "2017-10-28 00:00:00",
            title: "更新日志（2023-12-5）"
          }];
        });
      } else {
        this.newsList = [];
      }
    },

    setDocumentTitle() {
      const baseTitle = "健总管";
      let menuName = this.pageMenus[this.page];
      if (!menuName) menuName = this.title;
      //document.title = menuName ? (menuName + ' - ' + baseTitle): baseTitle;
    },

    openEntryCheckinDlg() {
      this.viewEntryCheckinDlg = true;
    },

    afterSubmitCheckin() {
      this.viewEntryCheckinDlg = false;
      $.Msg.success("签到成功");
      if (this.afterEntryCheckin) {
        this.afterEntryCheckin();
      }
      if ($.Util.cookie.get($.Conf.CookieKeys.AUTO_OPEN_ENTRY_CHECKIN_DLG) === "1") {
        this.viewEntryCheckinDlg = true;
      }
    },

    closeEntryCheckinDlg() {
      this.viewEntryCheckinDlg = false;
    },

    queryMember() {
      if (!this.memberQueryVal) {
        $.Msg.warning($.Lang.NO_INPUT);
        return;
      }
      if ($.Util.isInteger(this.memberQueryVal)) {
        this.memberQueryVal = parseInt(this.memberQueryVal);
      }

      let args = { page: 1 };
      if (!$.Util.isInteger(this.memberQueryVal) || $.Util.validatePhoneNo(this.memberQueryVal)) {
        args.nameOrPhone = this.memberQueryVal;
      } else {
        if (!$.Util.validateCardNo(this.memberQueryVal)) {
          $.Msg.error("会员卡号太长");
          return;
        }
        args.cardNo = this.memberQueryVal;
      }
      $.Req.service($.SvName.MEMBER_ADV_QUERY, args, ret => {
        if (ret.memberList.length === 1) {
          this.memberQueryVal = null;
          let member = ret.memberList[0];
          this.viewMemberDlg = true;
          this.viewMemberId = member.memberId;
        } else if (ret.memberList.length > 1) {
          $.Msg.warning("姓名有重复，请输入手机号查询");
        } else {
          $.Msg.warning("未查到符合条件的会员");
        }
      }, true);
    },

    queryCust() {
      if (this.custQueryVal) {
        let args = { page: 1 };
        if ($.Util.validatePhoneNo(this.custQueryVal)) {
          args.phoneNo = this.custQueryVal;
        } else {
          args.name = this.custQueryVal;
        }
        $.Req.service($.SvName.CUST_QUERY, args, ret => {
          let cust = null;
          if (ret.cust) {
            cust = ret.cust;
          } else if (ret.custList) {
            if (ret.custList.length == 1) {
              cust = ret.custList[0];
            } else if (ret.custList.length > 1) {
              $.Msg.error("客户姓名有重复，请输入手机号查询");
              return;
            }
          }
          if (cust) {
            this.selectCustId = cust.custId;
            this.custDlgTitle = "客户详情 - {0}".format(cust.name);
            this.custDlgView = true;
          } else {
            $.Msg.warning("未查到符合条件的客户");
          }
        }, true);
      } else {
        $.Msg.error("请输入客户姓名或手机号");
      }
    },

    noticeSysDate() {
      $.Dlg.info("请尽快联系我们续费。系统到期后，场馆内任何人将无法登录进入系统。敬请知晓。");
    }
  }
});

/***/ }),

/***/ 426:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "dateCalculator",
  data() {
    return {
      beginDate: null,
      endDate: null,
      differDays: null,
      datePlusMinus: null,
      prevNext: 0,
      unit: 0,
      days: null,
      pMBeginDate: null,
      prevNextDate: null
    };
  },
  methods: {
    calcDays() {
      if (this.beginDate && this.endDate) {
        let [bDate, eDate] = [Date.parse(this.beginDate), Date.parse(this.endDate)];
        let difference = eDate - bDate;
        let days = difference / 1000 / 60 / 60 / 24;
        this.differDays = Math.floor(days);
      } else {
        $.Msg.warning('请输入【开始日期】和【结束日期】');
      }
    },

    calcDate() {
      if (!this.pMBeginDate) {
        $.Msg.warning('请输入开始日期');
        return;
      }
      if (this.days == null) {
        let units = ['天', '周', '月'];
        $.Msg.warning('请输入' + units[this.unit] + "数");
        return;
      }
      let days = Math.floor(this.days);
      switch (this.unit) {
        case 0:
          days = days * 24 * 60 * 60 * 1000;
          this.calcPrevNextDate(days);
          break;
        case 1:
          days = days * 24 * 60 * 60 * 1000 * 7;
          this.calcPrevNextDate(days);
          break;
        case 2:
          let [year, month, date] = [this.pMBeginDate.getFullYear(), this.pMBeginDate.getMonth() + 1, this.pMBeginDate.getDate()];
          let count = this.prevNext ? -1 : 1;
          let newMonth = month + days * count;
          if (newMonth > 12) {
            year += Math.floor(newMonth / 12);
            month = newMonth % 12 < 10 ? '0' + newMonth % 12 : newMonth % 12;
          } else if (12 >= newMonth && newMonth > 0) {
            month = newMonth < 10 ? '0' + newMonth : newMonth;
          } else {
            let n = Math.abs(newMonth);
            year -= n % 12 ? Math.ceil(n / 12) : Math.ceil(n / 12) + 1;
            month = newMonth % 12 + 12 < 10 ? '0' + (newMonth % 12 + 12) : newMonth % 12 + 12;
          }
          date = date < 10 ? '0' + date : date;
          this.prevNextDate = year + "-" + month + "-" + date;
          break;
      }
    },

    calcPrevNextDate(t) {
      let count = this.prevNext ? -1 : 1;
      let [year, month, date] = [this.pMBeginDate.getFullYear(), this.pMBeginDate.getMonth() + 1, this.pMBeginDate.getDate()];
      let pMBeginDate = Date.parse(this.pMBeginDate) + t * count;
      let da = new Date(pMBeginDate);
      year = da.getFullYear();
      month = da.getMonth() < 9 ? '0' + (da.getMonth() + 1) : da.getMonth() + 1;
      date = da.getDate() < 10 ? '0' + da.getDate() : da.getDate();
      this.prevNextDate = year + "-" + month + "-" + date;
    }
  }

});

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajax_js__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_compressorjs__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_compressorjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_compressorjs__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ImgUpload",
  props: {
    action: {
      type: String,
      required: true
    },
    imgMaxWidth: {
      // 图片最大宽度（px）
      type: Number
    },
    imgCompressRate: {
      // 图片压缩率（0 ~ 1）
      type: Number,
      default: 0.8
    },
    args: {
      // 附带的参数（键值对）
      type: Object
    },
    multiple: {
      type: Boolean,
      default: false
    },
    removeable: {
      type: Boolean,
      default: false
    },
    maxCount: {
      type: Number,
      default: 5
    },
    name: {
      type: String,
      default: "img"
    },
    showThumb: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    format: {
      type: Array,
      default() {
        return ["jpg", "jpeg", "png", "gif", "bmp"];
      }
    },
    accept: {
      type: String,
      default: "image/gif, image/jpeg, image/png, image/gif, image/bmp"
    },
    maxSize: {
      type: Number
    },
    defaultFileList: {
      type: Array,
      default() {
        return [];
      }
    },
    headers: {
      type: Object,
      default() {
        return {};
      }
    },
    onSuccess: {
      type: Function,
      default() {
        return {};
      }
    },
    onRemove: {
      type: Function,
      default() {
        return {};
      }
    },
    beforeUpload: {
      type: Function
    },
    onProgress: {
      type: Function,
      default() {
        return {};
      }
    },
    onError: {
      type: Function,
      default() {
        return {};
      }
    },
    successValue: {
      type: [Number, String, Object],
      default: null
    }
  },
  data() {
    return {
      fileList: [],
      tempIndex: 1,
      imgVisible: false,
      imgUrl: "",
      oriImgUrl: null
    };
  },
  methods: {
    handleClick() {
      if (this.disabled) return;
      this.$refs.input.click();
    },
    handleChange(e) {
      const files = e.target.files;
      if (!files) {
        return;
      }
      if (this.beforeUpload) {
        this.beforeUpload(files, () => {
          this.uploadFiles(files);
          this.$refs.input.value = null;
        });
      } else {
        this.uploadFiles(files);
        this.$refs.input.value = null;
      }
    },
    uploadFiles(files) {
      let leftCount = this.maxCount - (this.defaultFileList ? this.defaultFileList.length : 0);
      if (files && files.length > leftCount) {
        $.Dlg.error("您最多可上传 " + this.maxCount + " 张图片");
        return;
      }

      let postFiles = Array.prototype.slice.call(files);
      if (!this.multiple) {
        postFiles = postFiles.slice(0, 1);
        this.fileList = [];
      } else {
        if (this.fileList.length + 1 > this.maxCount) {
          $.Dlg.error("您最多可上传{0}张图片".format(this.maxCount));
          return;
        }
      }
      if (postFiles.length === 0) return;

      postFiles.forEach(file => {
        // 改动
        new __WEBPACK_IMPORTED_MODULE_1_compressorjs___default.a(file, {
          retainExif: true,
          checkOrientation: true,
          success: res => {
            this.upload(res);
          },
          error(err) {
            console.log(err.message);
          }
        });
        // this.upload(file);
      });
    },

    upload(file) {
      if (this.format.length) {
        const thisFileFormat = file.name.split(".").pop().toLocaleLowerCase();
        const checked = this.format.some(item => item.toLocaleLowerCase() === thisFileFormat);
        if (!checked) {
          $.Dlg.error("提示：您的图片格式【{0}】不符合要求, 规定的图片格式有【{1}】".format(thisFileFormat, this.foramt.join(",")));
          return false;
        }
      }

      if (this.maxSize && file.size > this.maxSize * 1000) {
        const fileSize = (file.size / 1024).toFixed(2);
        $.Dlg.error("您当前的图片大小为【{0}K】, 图片大小不能超过【{1}K】。".format(fileSize, this.maxSize));
        return false;
      }
      this.post(file);
    },
    post(file) {
      // check format
      if (this.format.length) {
        const _file_format = file.name.split(".").pop().toLocaleLowerCase();
        const checked = this.format.some(item => item.toLocaleLowerCase() === _file_format);
        if (!checked) {
          this.onFormatError(file, this.fileList);
          return false;
        }
      }
      // check maxSize
      if (this.maxSize) {
        if (file.size > this.maxSize * 1024) {
          this.onExceededSize(file, this.fileList);
          return false;
        }
      }
      this.handleStart(file);

      let lrzArgs = {};
      if (this.imgMaxWidth) lrzArgs.width = this.imgMaxWidth;
      if (this.imgCompressRate) lrzArgs.quality = this.imgCompressRate;
      lrz(file, lrzArgs).then(rst => {
        // set args
        if (this.args) {
          Object.keys(this.args).map(key => {
            rst.formData.append(key, this.args[key]);
          });
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ajax_js__["a" /* default */])({
          headers: this.headers,
          withCredentials: true,
          formData: rst.formData,
          action: this.action,
          onProgress: e => {
            this.handleProgress(e, file);
          },
          onSuccess: res => {
            this.handleSuccess(res, file);
          },
          onError: (err, response) => {
            this.handleError(err, response, file);
          }
        });
      });
    },

    handleStart(file) {
      file.uid = Date.now() + this.tempIndex++;
      const _file = {
        status: "uploading",
        name: file.name,
        size: file.size,
        percentage: 0,
        uid: file.uid,
        showProgress: true
      };
      this.fileList.push(_file);
    },
    getFile(file) {
      const fileList = this.fileList;
      let target;
      fileList.every(item => {
        target = file.uid === item.uid ? item : null;
        return !target;
      });
      return target;
    },
    handleProgress(e, file) {
      const _file = this.getFile(file);
      this.onProgress(e, _file, this.fileList);
      //_file.percentage = e.percent || 0;
    },
    handleSuccess(res, file) {
      const _file = this.getFile(file);
      if (_file) {
        _file.status = "finished";
        _file.response = res;
        //this.dispatch('FormItem', 'on-form-change', _file);
        this.onSuccess(res, _file, this.fileList, this.successValue);
        setTimeout(() => {
          _file.showProgress = false;
        }, 1000);
      }
    },
    handleError(err, response, file) {
      const _file = this.getFile(file);
      const fileList = this.fileList;
      _file.status = "fail";
      fileList.splice(fileList.indexOf(_file), 1);
      this.onError(err, response, file);
    },
    handleRemove(file) {
      const fileList = this.fileList;
      fileList.splice(fileList.indexOf(file), 1);
      this.onRemove(file, fileList);
    },
    handlePreview(file) {
      if (file.status === "finished") {
        this.onPreview(file);
      }
    },
    handleView(item) {
      //console.log(item);
      this.imgVisible = true;
      if (!item.size) {
        // 已上传的
        this.oriImgUrl = $.Util.getImgUrl(item.name);
        this.imgUrl = $.Util.getImgUrl(item.name, 600, 520, "EEEEEE");
      } else {
        // 新上传的
        this.imgUrl = item.url;
      }
    },
    clearFiles() {
      this.fileList = [];
    }
  },
  watch: {
    defaultFileList: {
      immediate: true,
      handler(fileList) {
        this.fileList = fileList.map(item => {
          item.status = "finished";
          item.percentage = 100;
          item.uid = Date.now() + this.tempIndex++;
          return item;
        });
      }
    }
  }
});

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
      this.$emit("input", val);
    },

    handleInput() {
      if (this.min === null || this.min === undefined) {
        if (this.value < 0) {
          alert("输入值【{0}】不能小于【0】".format(this.value));
          this.updateVal(null);
        }
      } else if (this.value !== null && this.value !== undefined && this.value !== "" && parseInt(this.value) < parseInt(this.min)) {
        alert("输入值【{0}】不能小于【{1}】".format(this.value, this.min));
        this.updateVal(null);
        return;
      }

      if (this.max === null || this.max === undefined) {
        this.max = 99999999999;
      }
      if (this.value !== null && this.value !== undefined && this.value !== "" && parseInt(this.value) > parseInt(this.max)) {
        alert("输入值【{0}】不能大于【{1}】".format(this.value, this.max));
        this.updateVal(null);
      }
    },

    handleBlur(event) {
      this.handleInput();
      this.$emit("blur", event);
    },

    handleEnter(event) {
      this.handleInput();
      this.$emit("enter", event);
    }
  }
});

/***/ }),

/***/ 429:
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
				this.max = 99999999;
			}
			if (this.value !== null && this.value !== undefined && this.value !== '' && parseInt(this.value) > parseInt(this.max)) {
				alert('输入值【{0}】不能大于【{1}】'.format(this.value, this.max));
				this.updateVal(null);
			}
		}
	}
});

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		action: {
			type: String,
			required: true
		}
	},
	data() {
		return {};
	},
	methods: {
		updateVal: function (val) {
			this.$emit('input', val);
		},

		handleBlur(event) {
			this.$emit('blur', event);
		}
	}
});

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cust_follow_vue__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cust_follow_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__cust_follow_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { CustFollow: __WEBPACK_IMPORTED_MODULE_0__cust_follow_vue___default.a },
	props: {
		custId: {
			type: Number,
			required: true
		},
		afterCreateFollow: {
			type: Function,
			default() {
				return {};
			}
		},
		afterDeleteFollow: {
			type: Function,
			default() {
				return {};
			}
		},
		afterEditTag: {
			type: Function,
			default() {
				return {};
			}
		}
	},

	data() {
		return {
			g: window.$,
			cust: null,
			custEditPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.CUST_EDIT.value),
			editAllCustFollowPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.EDIT_ALL_CUST_FOLLOW.value),
			editable: null,
			canCreateFollow: false,
			gcLessonList: null,
			pcLessonList: null,
			custTagList: null,
			custTagNameMap: {},
			custTagDlg: null,
			custTagIdList: []
		};
	},

	created() {
		this.loadData();
		// this.queryCustGcLesson();
		this.queryCustPcLesson();
		this.queryCustTagList();
	},

	methods: {
		loadData() {
			if (!this.custId) {
				return;
			}

			$.Req.service($.SvName.CUST_QUERY, { custId: this.custId }, ret => {
				this.cust = ret.cust;
				if (this.cust && this.cust.orgTypes) {
					let orgTypeArr = [];
					for (let t of this.cust.orgTypes.split(',')) {
						orgTypeArr.push($.Dict.OrgTypes[t]);
					}
					this.cust.orgTypeListStr = orgTypeArr.join('、');
				}
				if (this.cust && this.cust.hobby) {
					let hobbyArr = [];
					for (let h of this.cust.hobby.split(',')) {
						hobbyArr.push($.Dict.Hobbies[h]);
					}
					this.cust.hobbyListStr = hobbyArr.join('、');
				}

				if (this.cust.ownerStaffId === $.data.user.staffId || $.data.user.isShopOwner) {
					this.editable = true;
				}
				if (!this.editable) {
					$.Req.service($.SvName.SUB_STAFF_QUERY, { staffId: $.data.user.staffId }, r => {
						if (r.staffList) {
							for (let s of r.staffList) {
								if (s.staffId === this.cust.ownerStaffId) {
									this.editable = true;
									break;
								}
							}
						}
					});
				}
			});
		},

		queryCustGcLesson() {
			let args = {
				custId: this.custId,
				page: 1
			};
			$.Req.service($.SvName.CUST_GROUP_LESSON_QUERY, args, ret => {
				this.gcLessonList = ret.custLessonList;
			});
		},

		queryCustPcLesson() {
			let args = {
				custId: this.custId,
				page: 1
			};
			$.Req.service($.SvName.CUST_PC_LESSON_QUERY, args, ret => {
				this.pcLessonList = ret.cplList;
			});
		},

		queryCustTagList() {
			$.Req.service($.SvName.SHOP_TAG_QUERY, { tagType: 2 }, ret => {
				this.custTagList = ret.shopTagList;
				for (let t of ret.shopTagList) {
					this.custTagNameMap[t.tagId] = t.tagName;
				}
			});
		},

		openCustTagDlg() {
			this.custTagDlg = true;
			this.custTagIdList = this.cust.custTagIdList;
		},

		setCustTag() {
			let args = { custId: this.custId };
			if ($.Util.isEmpty(this.custTagIdList)) {
				args.isClearTags = true;
			} else {
				args.tagIdList = this.custTagIdList;
			}
			$.Req.service($.SvName.CUST_TAG_SET, args, ret => {
				$.Msg.success($.Lang.SAVE_SUCCESS);
				this.cust.custTagIdList = this.custTagIdList;
				this.custTagDlg = false;
				if (this.afterEditTag) this.afterEditTag(this.custTagIdList);
			}, true);
		}
	}
});

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { ImgUpload: __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue___default.a },
	props: {
		custId: {
			type: Number,
			required: true
		},
		canCreate: {
			type: Boolean,
			required: false
		},
		afterCreate: {
			type: Function,
			default() {
				return {};
			}
		}
	},

	data() {
		return {
			g: window.$,
			followPicList: [],
			custFollow: { followType: null, result: null },
			custFollowList: null,
			imgUpload: {
				action: $.Conf.IMG_UPLOAD_URL,
				imgMaxWidth: 512,
				defaultList: []
			},
			resultTypeList: [],
			resultTypeMap: {},
			cust: { custLevel: 3, custReminderDate: null, custType: null, visitTime: null }
		};
	},

	created() {
		this.queryResultTypeList(this.queryCustFollow);
	},

	methods: {
		queryCustFollow() {
			if (!this.custId) {
				return;
			}

			$.Req.service($.SvName.CUST_FOLLOW_QUERY, { custId: this.custId }, ret => {
				this.custFollowList = ret.custFollowList;
				this.cust.custLevel = ret.custLevel;
				this.cust.reminderDate = ret.custReminderDate;
				this.cust.custType = ret.custType;
				this.cust.visitTime = ret.visitTime;
			});
		},

		handleImgUploadSuccess(res, file) {
			file.url = res.data.url;
			file.name = res.data.name;
			this.followPicList.push(res.data.name);
		},

		handleRemoveImg(file, fileList) {
			this.followPicList.splice(fileList.indexOf(file), 1);
		},

		createCustFollow() {
			if (!confirm('您确定要添加跟进记录吗？')) {
				return;
			}

			if (!this.custFollow.followType) {
				$.Msg.error('请选择跟进方式');
				return;
			}
			if (this.resultTypeList && this.resultTypeList.length && !this.custFollow.resultType) {
				$.Msg.error('请选择跟进结果');
				return;
			}
			if (!this.custFollow.resultType) {
				if (!this.custFollow.result) {
					$.Msg.error('请填写跟进结果');
					return;
				}
				if (this.custFollow.result.length < 5) {
					$.Msg.error('跟进结果不能少5个字');
					return;
				}
			}

			if (this.followPicList && this.followPicList.length > 0) {
				this.custFollow.pics = this.followPicList.join(',');
			}

			this.custFollow.custId = this.custId;
			let args = {
				actionType: 'I',
				custFollow: this.custFollow,
				custLevel: this.cust.custLevel,
				custReminderDate: this.cust.reminderDate,
				visitTime: this.cust.visitTime
			};
			$.Req.service($.SvName.CUST_FOLLOW_SAVE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				let cf = {};
				$.Util.copyAttributes(this.custFollow, cf);
				cf.createUname = $.data.user.uname;
				cf.createTime = $.Util.formatDateTime(new Date());
				this.custFollowList.unshift(cf);

				if (this.afterCreate) {
					let _custFollow = {};
					$.Util.copyAttributes(this.custFollow, _custFollow);
					if (_custFollow.resultType) {
						_custFollow.resultTypeName = this.resultTypeMap[_custFollow.resultType];
					}
					this.afterCreate(_custFollow);
				}

				this.custFollow.followType = null;
				this.custFollow.result = null;
				this.followPicList = [];
				this.imgUpload.defaultList = [];
			});
		},

		queryResultTypeList(callback) {
			$.Req.service($.SvName.CUST_FOLLOW_RESULT_TYPE_QUERY, { needBase: true }, ret => {
				this.resultTypeList = ret.resultTypeList;
				for (let r of ret.resultTypeList) {
					this.resultTypeMap[r.typeId] = r.typeName;
				}
				if (callback) callback();
			});
		}
	}
});

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cropperjs__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cropperjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cropperjs__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { ImgUpload: __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue___default.a },
	props: {
		memberId: {
			type: Number,
			required: true
		},
		mcId: {
			type: Number,
			required: false
		},
		isUpdate: {
			type: Boolean,
			required: false,
			default: true
		},
		afterUpload: {
			type: Function,
			default() {
				return {};
			}
		}
	},

	data() {
		return {
			g: window.$,
			imgUpload: {
				action: $.Conf.IMG_UPLOAD_URL,
				imgMaxWidth: 600,
				defaultList: []
			},
			photo: {
				takePhotoType: 1,
				hasTakePhoto: false,
				imgUrl: null
			},

			cropper: null,
			cropperDlg: false,
			optionValue: {
				viewMode: 1, // 视图模式
				dragMode: "move", // 拖动模式
				initialAspectRatio: 310 / 232.5, // 初始纵横比例
				// autoCropArea: 0.7, // 自动裁剪区域大小
				preview: null,
				cropBoxMovable: false,
				cropBoxResizable: false, // 禁止拖动剪切框
				toggleDragModeOnDblclick: false // 启用以在 "crop" 和 "move" 之间切换拖动模式
			},
			canvasOption: {
				// 输出图片像素
				minWidth: 310,
				minHeight: 232.5,
				imageSmoothingQuality: "high", // 设置图像平滑的质量，“低”（默认）、“中”或“高”之一。
				fillColor: "transparent" //填充色为透明色
			},
			imgUrl: null,
			canvasWidth: 310,
			canvasHeight: 232.5,
			canvasOldHeight: 232.5,
			times: 4 // 控制上传图片的像素大小
		};
	},

	created() {
		this.initCropper();
	},

	methods: {
		changePhotoType(val) {
			if (this.photo.takePhotoType === 2) {
				this.getVideo();
			}
		},

		takePhoto() {
			this.canvasHeight = 232.5;
			this.canvasOldHeight = 232.5;
			this.$nextTick(() => {
				let context = this.$refs.canvas.getContext("2d");
				let oldContext = this.$refs.oldCanvasRefs.getContext("2d");
				let newContext = this.$refs.newCanvasRefs.getContext("2d");
				let video = this.$refs.video;
				context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
				context.drawImage(video, 0, 0, this.canvasWidth, this.canvasHeight);
				oldContext.clearRect(0, 0, this.canvasWidth * this.times, this.canvasHeight * this.times);
				oldContext.drawImage(video, 0, 0, this.canvasWidth * this.times, this.canvasHeight * this.times);
				newContext.clearRect(0, 0, this.canvasWidth * this.times, this.canvasHeight * this.times);
				newContext.drawImage(video, 0, 0, this.canvasWidth * this.times, this.canvasHeight * this.times);
				this.photo.hasTakePhoto = true;
			});
		},

		uploadPhotoImg() {
			if (this.photo.hasTakePhoto) {
				$.Util.uploadImgFromCanvas(this.$refs.newCanvasRefs, res => {
					if (this.isUpdate) {
						this.updateMemberPhoto(res.data.name);
					} else {
						this.afterUpload(res.data.url, res.data.name);
					}
				}, err => {
					alert('上传失败，请稍后重试');
				});
			}
		},

		updateMemberPhoto(filename) {
			let svName = null,
			    args = null;
			if (this.mcId) {
				svName = $.SvName.MEMBER_CARD_AVATAR_UPDATE;
				args = { memberId: this.memberId, avatarPathname: filename, mcId: this.mcId };
			} else {
				svName = $.SvName.MEMBER_AVATAR_UPDATE;
				args = { member: { memberId: this.memberId, avatarPathname: filename } };
			}

			$.Req.service(svName, args, ret => {
				this.imgUpload.defaultList = [];
				let imgUrl = $.Util.getImgUrl(filename);
				this.afterUpload(imgUrl, filename);
				$.Msg.success($.Lang.UPDATE_MEMBER_PHOTO_OK);
			}, true);
		},

		beforeUpload(files) {
			if (!files[0]) return;
			let context = this.$refs.canvas.getContext("2d");
			let oldContext = this.$refs.oldCanvasRefs.getContext("2d");
			let newContext = this.$refs.newCanvasRefs.getContext("2d");
			let img = new Image();
			img.src = URL.createObjectURL(files[0]);
			img.onload = () => {
				let width = this.canvasWidth;
				let height = img.height * (this.canvasWidth / img.width);
				this.canvasHeight = height;
				this.canvasOldHeight = height;
				this.$nextTick(() => {
					context.clearRect(0, 0, width, height);
					context.drawImage(img, 0, 0, width, height);
					oldContext.clearRect(0, 0, width * this.times, height * this.times);
					oldContext.drawImage(img, 0, 0, width * this.times, height * this.times);
					newContext.clearRect(0, 0, width * this.times, height * this.times);
					newContext.drawImage(img, 0, 0, width * this.times, height * this.times);
				});
				this.photo.hasTakePhoto = true;
			};
		},

		getVideo() {
			if (location.href.startsWith('http:') && location.href.indexOf('127') < 0) {
				alert('调用摄像头需要使用加密协议（https），即将带你使用加密协议');
				let newUrl = 'https:' + location.href.substr(5);
				location.href = newUrl;
				return;
			}

			$.Msg.info('正在调用摄像头，请稍等...');
			this.$nextTick(() => {
				let video = this.$refs.video;
				let videoObj = { "video": true };
				navigator.mediaDevices.getUserMedia(videoObj).then(function (mediaStream) {
					video.srcObject = mediaStream;
					video.play();
				}).catch(function (error) {
					console.log(error);
				});
			});
		},

		editPhotoImg() {
			this.cropperDlg = true;
			this.imgUrl = this.$refs.oldCanvasRefs.toDataURL("image/jpeg");
			this.createCropper();
		},

		createCropper() {
			if (this.cropper) {
				this.cropper.destroy();
			}
			this.cropper = new __WEBPACK_IMPORTED_MODULE_1_cropperjs___default.a(this.$refs.cropperRefs, this.optionValue);
			this.cropper.replace(this.imgUrl);
		},

		submitFunc() {
			this.canvasHeight = 232.5;
			let val = this.cropper.getCroppedCanvas(this.canvasOption).toDataURL("image/jpeg");
			this.$nextTick(() => {
				var ctx = this.$refs.canvas.getContext("2d");
				var newCtx = this.$refs.newCanvasRefs.getContext("2d");
				var img = new Image();
				img.src = val;
				img.onload = () => {
					ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
					ctx.drawImage(img, 0, 0, this.canvasWidth, this.canvasHeight);
					newCtx.clearRect(0, 0, this.canvasWidth * this.times, this.canvasHeight * this.times);
					newCtx.drawImage(img, 0, 0, this.canvasWidth * this.times, this.canvasHeight * this.times);
					this.cropperDlg = false;
					this.photo.hasTakePhoto = true;
				};
			});
		},

		closeFunc() {
			this.cropperDlg = false;
		},

		initCropper() {
			this.canvasOption.minWidth = this.canvasWidth * this.times;
			this.canvasOption.minHeight = this.canvasHeight * this.times;
		}
	}
});

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__member_follow_list_vue__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__member_follow_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__member_follow_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_tag_edit_vue__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_member_member_tag_edit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_member_member_tag_edit_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { MemberFollowList: __WEBPACK_IMPORTED_MODULE_0__member_follow_list_vue___default.a, MemberTagEdit: __WEBPACK_IMPORTED_MODULE_1__pages_member_member_tag_edit_vue___default.a },
	props: {
		memberId: {
			type: Number,
			required: true
		}
	},

	data() {
		return {
			g: window.$,
			member: null,
			memberEntryCheckin: null,
			memberCardList: null,
			memberStat: {},
			isShopMember: false,
			memberEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.MEMBER_EDIT.value),
			shopTagList: null,
			memberTagMap: {},
			viewMemberTagDlg: null,
			memberTag: {
				dlg: null,
				memberId: null,
				memberTags: null
			},
			viewMemberFollow: null,
			hideInvalidCards: false
		};
	},

	created() {
		this.loadData();
	},

	watch: {
		memberId(val, oldVal) {
			this.viewMemberFollow = false;
			this.loadData();
		}
	},

	methods: {
		loadData() {
			if (!this.memberId) {
				return;
			}
			this.queryMember();
			this.queryMemberStat();
		},

		queryMember() {
			$.Req.service($.SvName.MEMBER_ADV_QUERY, { memberId: this.memberId }, ret => {
				if (!ret || !ret.memberList || ret.memberList.length === 0) {
					this.member = null;
					return;
				}
				this.member = ret.memberList[0];
				this.isShopMember = this.member.encSid === $.data.shop.encSid;
				$.Util.sessionStore.set($.Conf.LocalSessionKey.MEMBER_NAME, this.member.name);
				this.memberTag.memberId = this.member.memberId;
				this.queryMemberCards();
				this.queryShopTag();
				this.viewMemberFollow = true;
				let coachNames = [];
				if (this.member.coachName) coachNames.push(this.member.coachName);
				if (this.member.moreCoachNameList && this.member.moreCoachNameList.length) {
					for (let cname of this.member.moreCoachNameList) coachNames.push(cname);
				}
				this.member.coachName = coachNames.join('、');
			});
		},

		queryMemberCards() {
			let args = { memberId: this.memberId, encSid: this.member.encSid };
			$.Req.service($.SvName.MEMBER_CARD_QUERY, args, (ret, systime) => {
				let today = Date.new(systime);
				for (let c of ret.memberCardList) {
					if (c.beginDate && c.endDate) {
						if (Date.new(c.beginDate).compareDatePart(today) <= 0) c.leftDays = Date.new(c.endDate).subtract(today);else c.leftDays = Date.new(c.endDate).subtract(Date.new(c.beginDate));
					}
					c.isValid = $.MemberLib.isValidMemberCard(c, today);
				}
				this.memberCardList = ret.memberCardList;
				if (this.memberCardList && this.memberCardList.length > 5) {
					this.hideInvalidCards = true;
				}
			});
		},

		queryMemberStat() {
			let args = { memberId: this.memberId };
			$.Req.service($.SvName.MEMBER_STAT_QUERY, args, ret => {
				this.memberStat = ret.memberStat;
			});
		},

		queryShopTag() {
			$.Req.service($.SvName.SHOP_TAG_QUERY, { tagType: 1 }, ret => {
				this.shopTagList = ret.shopTagList;
				this.memberTagMap = {};
				for (let t of ret.shopTagList) {
					this.memberTagMap[t.tagId] = t.tagName;
				}

				if (this.member.tagIds) {
					let tagNames = [];
					for (let tagId of this.member.tagIds.split(',')) {
						tagNames.push(this.memberTagMap[tagId]);
					}
					this.member.tagNames = tagNames;
				} else {
					this.member.tagNames = [];
				}
			});
		},

		afterUpdateShopTags(shopTagList) {
			for (let t of shopTagList) {
				this.memberTagMap[t.tagId] = t.tagName;
			}
			this.shopTagList = shopTagList;
		},

		afterUpdateMemberTags(newTags) {
			let m = this.member;
			m.tagIds = newTags;
			if (m.tagIds) {
				let tagNames = [];
				for (let tagId of m.tagIds.split(',')) {
					tagNames.push(this.memberTagMap[tagId]);
				}
				m.tagNames = tagNames;
			} else {
				m.tagNames = [];
			}
			this.memberTag.dlg = false;
		},

		openMemerTagDlg() {
			this.memberTag.memberTags = this.member.tagIds + '';
			this.memberTag.dlg = true;
		},

		updateMcStat(mcIdx) {
			let mc = this.memberCardList[mcIdx];
			let args = { mcId: mc.mcId };
			$.Req.service($.SvName.MEMBER_CARD_STAT_DATA_UPDATE, args, ret => {
				mc.avgPrice = ret.unitPrice;
				this.$set(this.memberCardList, mcIdx, mc);
				$.Msg.success($.Lang.OPT_SUCCESS);
			}, true);
		}
	}
});

/***/ }),

/***/ 435:
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


/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		mcId: {
			type: Number
		}
	},

	data() {
		return {
			g: window.$,
			selectCard: null,
			cardVacationList: [],
			cardVacationStat: {},
			cardVacationCount: null,
			memberCardVacationPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.MEMBER_CARD_VACATION.value),
			cardVacationCancelDlg: null,
			cancelRemark: null,
			selectMcv: null
		};
	},

	created() {
		this.queryCardVacation();
	},

	methods: {
		queryCardVacation(page = null) {
			if (!page) this.cardVacationCount = null;
			let args = {
				mcId: this.mcId,
				page: page
			};
			$.Req.service($.SvName.MEMBER_CARD_VACATION_QUERY, args, ret => {
				this.cardVacationList = ret.memberCardVacationList;
				this.cardVacationStat.countWithFree = ret.countWithFree;
				this.cardVacationStat.countWithPaid = ret.countWithPaid;
				this.cardVacationStat.daysWithFree = ret.daysWithFree;
				this.cardVacationStat.daysWithPaid = ret.daysWithPaid;
				this.cardVacationStat.limitVacationCount = ret.limitVacationCount;
				this.cardVacationStat.limitVacationDays = ret.limitVacationDays;
				if (!page) {
					this.cardVacationCount = ret.count;
				}
			});
		},

		openCardVacationCancelDlg(v) {
			this.selectMcv = v;
			this.cardVacationCancelDlg = true;
		},

		submitCardVacationCancel() {
			this.selectMcv.remark = this.cancelRemark;
			let args = {
				memberCardVacation: this.selectMcv
			};
			$.Req.service($.SvName.MEMBER_CARD_VACATION_CANCEL, args, ret => {
				this.cardVacationCancelDlg = false;
				this.queryCardVacation();
			}, false);
		}
	}
});

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_avatar_conf_vue__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_avatar_conf_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_member_member_avatar_conf_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__member_card_vacation_query_vue__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__member_card_vacation_query_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__member_card_vacation_query_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop_cust_entry_checkin_vue__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop_cust_entry_checkin_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__shop_cust_entry_checkin_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { MemberAvatarConf: __WEBPACK_IMPORTED_MODULE_0__pages_member_member_avatar_conf_vue___default.a, MemberCardVacationQuery: __WEBPACK_IMPORTED_MODULE_1__member_card_vacation_query_vue___default.a, CustEntryCheckin: __WEBPACK_IMPORTED_MODULE_2__shop_cust_entry_checkin_vue___default.a },
  props: {
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
    }
  },

  data() {
    return {
      g: window.$,
      advMemberEditable: $.Util.hasRoleFunc($.Dict.RoleFunc.MEMBER_ADV_EDIT.value),
      memberCreatePermit: $.Util.hasRoleFunc($.Dict.RoleFunc.MEMBER_CREATE.value),
      firstUploadMemberHeadPermit: $.Util.hasRoleFunc($.Dict.RoleFunc.FIRST_UPLOAD_MEMBER_HEAD.value),
      today: new Date(),
      queryNo: null,
      queryNoType: null,
      member: null,
      srcMember: null,
      isShopMember: true,
      queryError: null,
      autoOpenEntryCheckinDlg: false,
      memberCardList: [],
      password: null,
      selectCardIndex: null,
      checkinCardCnt: 0,
      checkinCount: 1,
      lockerId: null,
      preQueryNo: null,
      enableEntryVoice: false,
      lastSubmitTime: null,
      selectCheckinPayment: null,
      memberList: [],
      photoDlgView: false,
      hasInitPhoto: true,
      memberEntryCheckinStat: {},
      entryChargeItemId: null,
      entryChargeItemList: null,
      entryChargeItemCardList: null,
      entryChargeItemCardMap: {},
      moreCardNoList: null,
      cardVacationQueryDlg: null,
      selectMcId: null,
      hideInvalidCards: null,
      selectCheckinPaymentItemIdx: null,
      // 散客入场签到  1 会员；2 散客
      custType: 1,
      cust: null,
      custList: []
    };
  },

  created() {
    if ($.Util.cookie.get($.Conf.CookieKeys.AUTO_OPEN_ENTRY_CHECKIN_DLG) === "1") {
      this.autoOpenEntryCheckinDlg = true;
    }
    if ($.Util.cookie.get($.Conf.CookieKeys.ENABLE_ENTRY_VOICE) === "1") {
      this.enableEntryVoice = true;
    }
    this.queryStaffEntryChargeItem();
  },

  methods: {
    initData() {
      this.queryNo = null;
      this.member = null;
      this.cust = null;
      this.selectCardIndex = null;
      this.password = null;
      this.queryError = null;
      this.checkinCardCnt = 0;
      this.checkinCount = 1;
    },

    changeAutoOpenCheckinDlg() {
      let val = this.autoOpenEntryCheckinDlg ? "1" : "0";
      $.Util.cookie.set($.Conf.CookieKeys.AUTO_OPEN_ENTRY_CHECKIN_DLG, val, 365);
    },

    changeEnableEntryVoice() {
      let val = this.enableEntryVoice ? "1" : "0";
      $.Util.cookie.set($.Conf.CookieKeys.ENABLE_ENTRY_VOICE, val, 365);
    },

    isInVacation(begin, end) {
      if (begin && end) {
        let today = Date.new();
        if (today.compareDatePart(Date.new(begin)) >= 0 && today.compareDatePart(Date.new(end)) <= 0) {
          return true;
        }
      }

      return false;
    },

    // 散客入场签到
    doQueryAndCheckin() {
      if (this.custType == 1) {
        if (!this.member || this.queryNo !== this.preQueryNo) {
          this.doQuery();
        } else {
          if (this.checkinCardCnt === 1) {
            // 会员仅有一张期限卡时，回车键点击签到
            this.handleSubmit();
          }
        }
      }
      if (this.custType == 2) {
        this.doQuery();
      }
    },

    doQuery() {
      if (!this.queryNo) {
        $.Msg.warning($.Lang.NO_INPUT);
        return;
      }
      // 散客入场签到
      if (this.custType == 1) {
        let args = {};
        if ($.Util.isInteger(this.queryNo)) {
          this.queryNo = parseInt(this.queryNo);
        }
        if ($.Util.validatePhoneNo(this.queryNo)) {
          this.queryNoType = "phone";
          args = { nameOrPhone: this.queryNo };
        } else {
          if (!$.Util.isInteger(this.queryNo)) {
            args = { fuzzyName: this.queryNo };
          } else {
            this.queryNoType = "card";
            if (!$.Util.validateCardNo(this.queryNo)) {
              $.Msg.error($.Lang.CARD_NO_TOO_LONG);
              return;
            }
            args = { cardNo: this.queryNo };
          }
        }
        args.from = "entry-checkin";
        args.needPhoneSuffix = true;
        this.queryMember(args);
      } else {
        const args = {};
        if ($.Util.isInteger(this.queryNo)) {
          if ($.Util.validatePhoneNo(this.queryNo)) {
            this.queryNoType = "phone";
            args.phoneNo = this.queryNo;
          } else {
            args.phoneNoSuffix = this.queryNo;
          }
        } else {
          args.name = this.queryNo;
        }
        this.queryCust(args);
      }
    },
    queryMember(args) {
      $.Req.service($.SvName.MEMBER_ADV_QUERY, args, ret => {
        this.preQueryNo = this.queryNo;
        this.member = null;
        this.cust = null;
        if (!ret || !ret.memberList || ret.memberList.length === 0) {
          if (this.queryNoType === "phone") {
            this.queryError = "不存在手机号为【{0}】的会员，请检查手机号是否正确".format(this.queryNo);
          } else if (!$.Util.isInteger(this.queryNo)) {
            this.queryError = "不存在姓名为【{0}】的会员，请检查姓名是否正确".format(this.queryNo);
          } else {
            this.queryError = "不存在卡号为【{0}】的会员，请检查卡号是否正确，或者试试用手机号查询。".format(this.queryNo);
          }
          return;
        }

        this.queryError = null;
        if (ret.memberList.length === 1) {
          this.memberList = null;
          this.member = ret.memberList[0];
          this.srcMember = ret.srcMember;
          this.hasInitPhoto = this.member.avatarPathname ? true : false;
          this.isShopMember = !this.member.encSid || this.member.encSid === $.data.shop.encSid;
          this.statMemberEntryCheckin(this.member.memberId);
        } else {
          this.memberList = ret.memberList;
          return;
        }
        this.queryMemberCard();
        this.queryMemberCardNos();
      }, true);
    },

    // 散客入场券
    queryCust(args) {
      $.Req.service($.SvName.CUST_QUERY, args, ret => {
        this.member = null;
        this.cust = null;
        this.queryError = null;
        if (!ret || !ret.cust && (!ret.custList || !ret.custList.length)) {
          if (this.queryNoType === "phone") {
            this.queryError = "不存在手机号为【{0}】的客户，请检查手机号是否正确".format(this.queryNo);
          } else if (!$.Util.isInteger(this.queryNo)) {
            this.queryError = "不存在姓名为【{0}】的客户，请检查姓名是否正确".format(this.queryNo);
          }
          return;
        }

        this.queryError = null;
        if (ret.cust) {
          this.cust = ret.cust;
        } else if (ret.custList && ret.custList.length === 1) {
          this.custList = null;
          this.cust = ret.custList[0];
        } else {
          this.custList = ret.custList;
          return;
        }
      });
    },

    queryMemberCardNos() {
      let args = { memberId: this.member.memberId };
      $.Req.service($.SvName.MEMBER_CARD_NO_QUERY, args, ret => {
        this.moreCardNoList = ret.memberCardNoList;
      });
    },

    queryMemberCard() {
      this.selectCardIndex = null; // init
      let args = { memberId: this.member.memberId, encSid: this.member.encSid };
      if (this.queryNoType === "card" && this.queryNo) {
        args.cardNo = parseInt(this.queryNo);
      }

      $.Req.service($.SvName.MEMBER_CARD_QUERY, args, ret => {
        let ckinCnt = 0;
        let i = 0;
        let firstCkinCardIdx = -1;
        if (!this.entryChargeItemId) {
          this.memberCardList = ret.memberCardList;
        } else {
          this.memberCardList = [];
          for (let mc of ret.memberCardList) {
            let itemCardIdx = this.entryChargeItemCardMap[mc.cardId];
            let itemCard = $.Util.isEmpty(itemCardIdx) ? null : this.entryChargeItemCardList[itemCardIdx];
            if (itemCard) {
              $.Util.copyAttributes(itemCard, mc);
              mc.icId = itemCard.icId;
              this.memberCardList.push(mc);
            }
          }
        }
        for (let mc of this.memberCardList) {
          let checkRet = this.checkMemberCard(mc);
          mc.canEntryCheckin = checkRet[0];
          if (mc.canEntryCheckin) {
            ckinCnt++;
            if (firstCkinCardIdx < 0) firstCkinCardIdx = i;
          } else {
            mc.error = checkRet[1];
          }
          if (mc.chargeByHourEnable) {
            mc.moreCheckinPayments = null;
          }
          if (mc.moreCheckinPayments) {
            let items = mc.moreCheckinPayments.split(";");
            mc.moreCheckinPaymentArr = [];
            for (let item of items) {
              mc.moreCheckinPaymentArr.push(item.split(","));
            }
          }
          i++;
        }

        this.checkinCardCnt = ckinCnt;
        if (ckinCnt >= 1) {
          this.selectCardIndex = firstCkinCardIdx;
          this.selectCheckinPayment = this.memberCardList[firstCkinCardIdx].checkinPayment;
        }
        this.hideInvalidCards = this.memberCardList && this.memberCardList.length > 5;
      });
    },

    checkMemberCard(mc) {
      if (!mc.allowCheckin && !this.entryChargeItemId) return [false, "未设置为签到用卡"];

      let now = Date.new();

      let ret = $.MemberLib.checkMemberCard(mc);
      if (!ret[0]) {
        return ret;
      }

      if (mc.cardType === 1) {
        // 期限卡
        if (mc.endDate) {
          if (now.compareDatePart(Date.new(mc.endDate)) > 0) {
            return [false, "会员卡已过期"];
          }
        }
      } else if (mc.cardType === 2) {
        // 次卡
        if (mc.currentTimes - mc.checkinPayment < 0) {
          return [false, "剩余次数不足"];
        }
      } else if (mc.cardType === 3) {
        // 储值卡
        if (mc.currentAmount - mc.checkinPayment < 0) {
          return [false, "剩余金额不足"];
        }
      }

      return [true, null];
    },

    handleSubmit() {
      // 重复点击检查
      let nowTime = Date.new().getTime();
      if (this.lastSubmitTime && nowTime - this.lastSubmitTime < 3000) {
        $.Msg.info($.Lang.CLICK_FREQUENTLY);
        return;
      }
      this.lastSubmitTime = nowTime;

      if (!this.member.authEntryCheckin && !this.password) {
        $.Dlg.error("请会员输入系统登录密码，以备校验。");
        return;
      }

      if (this.selectCardIndex === null) {
        $.Dlg.error("请选择一个签到卡");
        return;
      }
      let paymentItemName = null;
      let mc = this.memberCardList[this.selectCardIndex];
      if (!$.Util.isEmptyStr(mc.moreCheckinPayments) && mc.cardType === 3) {
        if ($.Util.isEmpty(this.selectCheckinPaymentItemIdx)) {
          $.Dlg.error("请选择一个签到计费项目");
          return;
        }
        if (this.selectCheckinPaymentItemIdx === -1) {
          this.selectCheckinPayment = mc.checkinPayment;
        } else {
          paymentItemName = mc.moreCheckinPaymentArr[this.selectCheckinPaymentItemIdx][0];
          this.selectCheckinPayment = mc.moreCheckinPaymentArr[this.selectCheckinPaymentItemIdx][1];
        }
      }

      let msg = "确定要用此卡签到吗？";
      if (this.checkinCardCnt === 1 || confirm(msg)) {
        let args = {
          memberId: this.member.memberId,
          mcId: this.memberCardList[this.selectCardIndex].mcId,
          checkinCount: this.checkinCount,
          lockerId: this.lockerId,
          selectCheckinPayment: this.selectCheckinPayment
        };
        if (this.entryChargeItemId) {
          args.icId = this.memberCardList[this.selectCardIndex].icId;
        }
        if (paymentItemName) args.paymentItemName = paymentItemName;
        if (this.password && !this.member.authEntryCheckin) {
          args.passwdMd5 = $.Util.md5(this.password);
        }

        $.Req.service($.SvName.MEMBER_ENTRY_CHECKIN_CREATE, args, ret => {
          this.playCheckinVoice(() => {
            if (this.afterSubmit) {
              this.initData();
              this.afterSubmit();
            }
          });
        }, true);
      }
    },

    handleClose() {
      this.initData();
      if (this.onClose) this.onClose();
    },

    playCheckinVoice(callback) {
      if (!this.enableEntryVoice) {
        callback();
        return;
      }

      // 播放签到成功声音
      $.Req.service($.SvName.CHECKIN_SUCCESS_VOICE_FILE_GET, { memberId: this.member.memberId }, r => {
        if (r.voiceUrl) {
          let audio = new Audio(r.voiceUrl);
          audio.play();
          callback();
        }
      }, false, err => {
        callback();
      });
    },

    selectMember(m) {
      if (this.custType == 1) {
        this.member = m;
        this.hasInitPhoto = m.avatarPathname ? true : false;
        this.isShopMember = !m.encSid || m.encSid === $.data.shop.encSid;
        this.queryNo = m.name;
        this.memberList = null;
        this.statMemberEntryCheckin(this.member.memberId);
        this.queryMemberCard();
      }
      if (this.custType == 2) {
        this.cust = m;
        this.queryNo = m.name;
        this.custList = null;
      }
    },

    afterUploadMemberAvatar(fileurl, filename) {
      this.photoDlgView = false;
      this.member.avatarPathname = filename;
    },

    statMemberEntryCheckin(memberId) {
      let args = {
        memberId: memberId,
        onlyNeedCount: true,
        needLatestEntryCheckinTime: true
      };
      $.Req.service($.SvName.MEMBER_ENTRY_CHECKIN_QUERY, args, (ret, systime) => {
        if (!ret.count) ret.count = 0;
        let now = Date.new(systime);
        this.memberEntryCheckinStat.count = ret.count;
        this.memberEntryCheckinStat.latestEntryCheckinTime = ret.latestEntryCheckinTime;
        if (ret.latestEntryCheckinTime) {
          this.memberEntryCheckinStat.lastEntryCheckinDays = $.Util.calcDateDiffDays(now, ret.latestEntryCheckinTime);
        }
      });
    },

    queryStaffEntryChargeItem(callback) {
      $.Req.service($.SvName.STAFF_ENTRY_CHARGE_ITEM_QUERY, {}, ret => {
        this.entryChargeItemList = ret.entryChargeItemList;
        if (this.entryChargeItemList && this.entryChargeItemList.length === 1) {
          this.entryChargeItemId = this.entryChargeItemList[0].itemId;
          this.queryEntryChargeItemCardByItemId();
        }
        if (callback) callback();
      });
    },

    queryEntryChargeItemCardByItemId(callback) {
      let args = {
        itemId: this.entryChargeItemId
      };
      $.Req.service($.SvName.ENTRY_CHARGE_ITEM_CARD_QUERY, args, ret => {
        this.entryChargeItemCardList = ret.entryChargeItemCardList;
        this.entryChargeItemCardMap = {};
        for (let i = 0, len = this.entryChargeItemCardList.length; i < len; i++) {
          let c = this.entryChargeItemCardList[i];
          this.entryChargeItemCardMap[c.cardId] = i;
        }
        if (callback) callback();
      });
    },

    changeEntryChargeItemId(val) {
      this.queryEntryChargeItemCardByItemId(() => {
        this.queryMemberCard();
      });
    },

    altCardVacation(mc) {
      if (!confirm("确定提前销假吗？ 确定后会将请假结束日期自动修改到昨天。")) {
        return;
      }

      let args = {
        mcId: mc.mcId,
        vacationEnd: new Date(new Date().getTime() - 24 * 3600 * 1000)
      };
      $.Req.service($.SvName.MEMBER_CARD_VACATION_UPDATE, args, (ret, systime) => {
        $.Msg.success($.Lang.OPT_SUCCESS);
        this.queryMemberCard();
      }, true);
    },

    viewMcVacationLogs(mcId) {
      this.selectMcId = mcId;
      this.cardVacationQueryDlg = true;
    },

    changeCheckinPaymentItem(idx) {
      let mc = this.memberCardList[this.selectCardIndex];
      if (idx === -1) {
        this.selectCheckinPayment = mc.checkinPayment;
      } else {
        this.selectCheckinPayment = mc.moreCheckinPaymentArr[idx][1];
      }
    }
  }
});

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: { ImgUpload: __WEBPACK_IMPORTED_MODULE_0__components_sys_img_upload_vue___default.a },
	props: {
		memberId: {
			type: Number,
			required: true
		}
	},
	data() {
		return {
			g: $,
			memberFollowList: [],
			newFollowContent: '',
			showFollowDlg: false,
			imgUpload: {
				action: $.Conf.IMG_UPLOAD_URL,
				imgMaxWidth: 512,
				defaultList: []
			},
			followPicList: []
		};
	},

	created() {
		this.loadData();
	},

	methods: {
		loadData() {
			$.Req.service($.SvName.MEMBER_FOLLOW_QUERY, { memberId: this.memberId }, ret => {
				this.memberFollowList = ret.memberFollowList;
			});
		},

		showCreateFollowDlg() {
			this.newFollowContent = null;
			this.showFollowDlg = true;
		},

		handleCreateFollow() {
			if (this.newFollowContent) {
				if (this.newFollowContent.length > 500) {
					$.Msg.error('跟进字数不能超过500');
					return;
				}

				$.Dlg.confirm('您确定添加跟进记录吗？', yes => {
					let memberFollow = { memberId: this.memberId, content: this.newFollowContent };
					if (this.followPicList && this.followPicList.length > 0) {
						memberFollow.pics = this.followPicList.join(',');
					}
					let args = {
						memberFollow: memberFollow
					};
					$.Req.service($.SvName.MEMBER_FOLLOW_CREATE, args, ret => {
						$.Msg.success($.Lang.OPT_SUCCESS);
						memberFollow.createUname = $.data.user.uname;
						memberFollow.createTime = $.Util.formatDateTime(new Date());
						this.memberFollowList.unshift(memberFollow);
						this.newFollowContent = '';
						this.showFollowDlg = false;
						this.followPicList = [];
					});
				});
			} else {
				$.Msg.error('请输入跟进记录');
			}
		},
		handleImgUploadSuccess(res, file) {
			file.url = res.data.url;
			file.name = res.data.name;
			this.followPicList.push(res.data.name);
		},

		handleRemoveImg(file, fileList) {
			this.followPicList.splice(fileList.indexOf(file), 1);
		}
	}
});

/***/ }),

/***/ 438:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		memberId: {
			type: Number,
			required: false
		},
		memberIds: {
			type: Array,
			required: false
		},
		memberTags: {
			type: String,
			required: false
		},
		afterUpdateMemberTags: {
			type: Function,
			default() {
				return {};
			}
		},
		afterUpdateShopTags: {
			type: Function,
			default() {
				return {};
			}
		}
	},

	data() {
		return {
			g: window.$,
			shopTagList: [],
			memberTagList: [],
			selectTagIdx: null,
			newTagName: null,
			updateTagName: null
		};
	},

	created() {
		this.queryShopTag();
	},

	methods: {
		queryShopTag() {
			$.Req.service($.SvName.SHOP_TAG_QUERY, { tagType: 1 }, ret => {
				this.shopTagList = ret.shopTagList;
				this.afterUpdateShopTags(ret.shopTagList);
				this.selectTagIdx = null;
				if (this.memberTags) {
					let tags = this.memberTags.split(',');
					this.memberTagList = [];
					for (let t of tags) {
						this.memberTagList.push(parseInt(t));
					}
				}
			});
		},

		addShopTag() {
			if (this.newTagName) {
				let args = {
					actionType: 'I',
					shopTag: {
						tagType: 1, tagName: this.newTagName
					}
				};
				$.Req.service($.SvName.SHOP_TAG_SAVE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					this.newTagName = null;
					this.queryShopTag();
				}, true);
			} else {
				$.Msg.error('请输入标签名');
			}
		},

		delShopTag() {
			if (!$.Util.isEmpty(this.selectTagIdx)) {
				let args = {
					actionType: 'D',
					deleteId: this.shopTagList[this.selectTagIdx].tagId
				};
				$.Req.service($.SvName.SHOP_TAG_SAVE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					this.queryShopTag();
				}, true);
			} else {
				$.Msg.error('请选择要删除的标签');
			}
		},

		updateShopTag() {
			if ($.Util.isEmpty(this.selectTagIdx)) {
				$.Msg.error('请选择要改名的标签');
				return;
			}
			if (this.updateTagName) {
				let args = {
					actionType: 'U',
					shopTag: this.shopTagList[this.selectTagIdx]
				};
				args.shopTag.tagName = this.updateTagName;
				$.Req.service($.SvName.SHOP_TAG_SAVE, args, ret => {
					$.Msg.success($.Lang.OPT_SUCCESS);
					this.queryShopTag();
				}, true);
			} else {
				$.Msg.error('请输入新标签名');
			}
		},

		updateMemberTag() {
			let args = {
				tags: this.memberTagList.join(',')
			};
			if (this.memberId) args.memberId = this.memberId;else if (!$.Util.isEmptyArray(this.memberIds)) args.memberIdList = this.memberIds;

			$.Req.service($.SvName.MEMBER_TAGS_UPDATE, args, ret => {
				$.Msg.success($.Lang.OPT_SUCCESS);
				this.afterUpdateMemberTags(args.tags);
			});
		}
	}
});

/***/ }),

/***/ 439:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ["queryDateType", "queryDates", "queryDate"],
  data() {
    return {
      g: $,
      exportFileUrl: null,
      exportDlg: false,
      cecList: [],
      cecCount: 0,
      cecQuery: {
        custName: null,
        custPhone: null
      },
      queryCecPage: null
    };
  },
  computed: {},
  watch: {
    queryDate: {
      handler(newVal) {
        if (newVal) {
          this.queryCustCheckin(null, false);
        }
      }
    }
    // queryDates: {
    //   handler(newVal) {
    //     if (newVal[0]) {
    //       this.queryCustCheckin(null, false);
    //     }
    //   },
    //   deep: true
    // },
  },
  created() {
    this.queryCustCheckin(null);
  },
  mounted() {},
  methods: {
    queryCustCheckin(page = null, isExport = false) {
      this.queryCecPage = page;
      const args = Object.assign({ page }, this.cecQuery);
      const { custName } = this.cecQuery;
      if ($.Util.isInteger(custName)) {
        if ($.Util.validatePhoneNo(custName)) {
          args.custPhone = custName;
          delete args.custName;
        }
      }
      if (this.queryDateType === 1) {
        args.beginDate = this.queryDate;
      } else if (this.queryDateType === 2) {
        if (!this.queryDates || !this.queryDates[0] || !this.queryDates[1]) {
          $.Msg.warning("请设置日期范围");
          return;
        }
        args.beginDate = this.queryDates[0];
        args.endDate = this.queryDates[1];
        if ($.Util.calcDateDiffDays(args.endDate, args.beginDate) > 365) {
          $.Dlg.warning("日期范围不能超过365天");
          return;
        }
      }

      if (isExport) {
        args.isExport = true;
        this.exportFileUrl = null;
        this.exportDlg = true;
      }
      $.Req.service($.SvName.CUST_ENTRY_CHECKIN_QUERY, args, ret => {
        if (isExport) {
          this.exportFileUrl = ret.fileurl;
          return;
        }
        if (!page) {
          this.cecCount = ret.count;
        }
        this.cecList = ret.cecList;
      }, true);
    },

    exportCecList() {
      this.queryCustCheckin(this.queryCecPage, true);
    },

    custCheckinCancel(cecId) {
      let msg = "取消签到会留下操作日志，确定取消签到吗？";
      $.Dlg.confirm(msg, yes => {
        const logRemark = prompt("请输入取消原因");
        if (logRemark) {
          const args = {
            cecId,
            logRemark
          };
          $.Req.service($.SvName.CUST_ENTRY_CHECKIN_CANCEL, args, ret => {
            this.queryCustCheckin(this.queryCecPage);
          });
        }
      });
    }
  }
});

/***/ }),

/***/ 440:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: {
    cust: {
      type: Object,
      required: true
    },
    onClose: {
      type: Function
    }
  },
  data() {
    return {
      g: $,
      productOrderList: [],
      selectOrderId: null
    };
  },
  computed: {},
  watch: {
    "cust.phoneNo": {
      handler(newVal) {
        this.queryTicket();
      }
    }
  },
  created() {
    this.queryTicket();
  },
  mounted() {},
  methods: {
    queryTicket() {
      const args = {
        custPhone: this.cust.phoneNo,
        status: 9
      };
      $.Req.service($.SvName.ENTRY_TICKET_ORDER_QUERY, args, ret => {
        this.productOrderList = ret.productOrderList;
        // 只有一张券的时候直接签到
        if (ret.productOrderList.length == 1) {
          this.selectOrderId = ret.productOrderList[0].orderId;
          this.handleSubmit();
        }
      });
    },
    handleSubmit() {
      if (!this.selectOrderId) {
        return $.Msg.error("请选择入场券进行签到！");
      }
      const args = {
        custId: this.cust.custId,
        entryTicketOrderId: this.selectOrderId
      };
      $.Req.service($.SvName.CUST_ENTRY_CHECKIN_CREATE, args, ret => {
        $.Msg.success("签到成功！");
        this.onClose();
      });
    }
  }
});

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_help__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_help___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_help__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cust_entry_checkin_list__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cust_entry_checkin_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__cust_entry_checkin_list__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { MemberBaseInfo: __WEBPACK_IMPORTED_MODULE_0__pages_member_member_base_info_vue___default.a, Help: __WEBPACK_IMPORTED_MODULE_1__components_help___default.a, CustEntryCheckinList: __WEBPACK_IMPORTED_MODULE_2__cust_entry_checkin_list___default.a },
  data() {
    return {
      g: $,
      today: new Date(),
      editable: $.Util.hasRoleFunc($.Dict.RoleFunc.MEMBER_AGENT.value),
      mecList: [],
      totalCount: 0,
      viewMemberDlg: false,
      viewMemberId: 0,
      queryNo: null,
      checkoutFeeDiscounts: null,
      hasEntryChargeItem: false,
      entryChargeItemIdList: null,
      checkoutMember: null,
      isQueryByLockerNo: false,
      isShowPrintTicket: false,

      // 散客入场券
      isCustCheckin: false
    };
  },

  created() {
    let ck = $.Util.cookie.get($.Conf.CookieKeys.IS_QUERY_BY_LOCKER_NO_IN_TOP);
    if (ck && ck === "true") {
      this.isQueryByLockerNo = true;
    }
    ck = $.Util.cookie.get($.Conf.CookieKeys.SHOW_MEMBER_ENTRY_CHECKIN_PRINT);
    if (ck && ck === "true") {
      this.isShowPrintTicket = true;
    }

    if ($.data.user.isShopOwner) {
      this.queryEntryCheckin();
    } else {
      this.queryStaffEntryChargeItem(() => {
        this.queryEntryCheckin();
      });
    }

    // 散客入场券
    this.queryCustCheckin();
  },

  methods: {
    // 散客入场券
    queryCustCheckin() {
      $.Req.service($.SvName.CUST_ENTRY_CHECKIN_QUERY, {}, ret => {
        this.isCustCheckin = ret.count ? true : false;
      });
    },

    queryEntryCheckin(page = null) {
      let args = {
        page: page,
        beginDate: this.today
      };
      if (this.entryChargeItemIdList) {
        args.entryChargeItemIdList = this.entryChargeItemIdList;
      }
      $.Req.service($.SvName.MEMBER_ENTRY_CHECKIN_QUERY, args, ret => {
        this.mecList = ret.mecList;
        this.hasEntryChargeItem = false;
        for (let mec of ret.mecList) {
          if (mec.icId) {
            this.hasEntryChargeItem = true;
          }
        }
        if (!page) {
          this.totalCount = ret.count;
        }
      }, true);
    },

    changePageNo(page) {
      this.queryEntryCheckin(page);
    },

    viewMember(memberId) {
      this.viewMemberId = memberId;
      this.viewMemberDlg = true;
    },

    queryMemberEntryCheckinByNo() {
      if (!this.queryNo) {
        $.Msg.info($.Lang.NO_INPUT);
        return;
      }

      let args = {
        beginDate: this.today,
        page: 1
      };
      if (this.isQueryByLockerNo) {
        args.lockerId = this.queryNo;
      } else {
        if (!$.Util.isInteger(this.queryNo)) {
          $.Msg.error("请输入数字类型");
          return;
        }

        if (!$.Util.validateCardNo(this.queryNo)) {
          $.Msg.error("输入号码太长");
          return;
        }

        if ($.Util.validatePhoneNo(this.queryNo)) {
          args.memberPhone = this.queryNo;
        } else if (("" + this.queryNo).length === 4) {
          args.memberPhoneSuffix = this.queryNo;
        } else {
          args.memberCardNo = this.queryNo;
        }
      }

      $.Req.service($.SvName.MEMBER_ENTRY_CHECKIN_QUERY, args, ret => {
        if (ret.mecList && ret.mecList.length) {
          this.mecList = ret.mecList;
          this.totalCount = ret.mecList.length;

          this.checkoutMember = null;
          if (ret.mecList.length === 1) {
            let _args = { memberId: ret.mecList[0].memberId };
            $.Req.service($.SvName.MEMBER_BASE_QUERY, _args, ret => {
              this.checkoutMember = ret.member;
            });
          }
        } else {
          $.Msg.warning("未查到签到会员");
        }
      }, true);
    },

    checkoutMemberEntry(idx) {
      let mec = this.mecList[idx];
      let args = {
        memberId: mec.memberId,
        mecId: mec.mecId
      };
      if (this.checkoutFeeDiscounts) {
        if (this.checkoutFeeDiscounts > 10) {
          $.Dlg.error("折扣数不能超过10");
          return;
        }
        args.checkoutFeeDiscounts = this.checkoutFeeDiscounts / 10;
      }
      $.Req.service($.SvName.MEMBER_ENTRY_CHECKOUT, args, ret => {
        mec.cardPayment = ret.cardPayment;
        mec.checkoutTime = ret.checkoutTime;
        mec.currentTimes = ret.cardCurrentTimes;
        mec.currentAmount = ret.cardCurrentAmount;
        this.$set(this.mecList, idx, mec);
      }, true);
    },

    returnMemberCardAmount(idx, mcId, defaultAmount) {
      let altAmount = parseFloat(prompt("请输入会员卡退款金额（元）", defaultAmount));
      if (altAmount > 0) {
        if (!confirm("确定退款吗【{0} 元】吗？".format(altAmount))) {
          return;
        }

        let args = { mcId: mcId };
        $.Req.service($.SvName.MEMBER_CARD_QUERY_FOR_UPDATE, args, ret => {
          let mc = ret.memberCard;
          mc.paymentAmount -= altAmount;
          mc.usableAmount -= altAmount;
          mc.changeRemark = "签出时退款￥" + altAmount;
          $.Req.service($.SvName.MEMBER_CARD_PAYMENT_UPDATE, mc, ret2 => {
            let mec = this.mecList[idx];
            mec.currentAmount = mec.currentAmount - altAmount;
            this.$set(this.mecList, idx, mec);
            $.Msg.success($.Lang.OPT_SUCCESS);
          });
        }, true);
      } else {
        $.Msg.error("退款金额应该大于0");
      }
    },

    queryStaffEntryChargeItem(callback) {
      $.Req.service($.SvName.STAFF_ENTRY_CHARGE_ITEM_QUERY, {}, ret => {
        if (ret.entryChargeItemList && ret.entryChargeItemList.length) {
          this.entryChargeItemIdList = [];
          for (let i of ret.entryChargeItemList) {
            this.entryChargeItemIdList.push(i.itemId);
          }
        }
        if (callback) callback();
      });
    },

    checkLockerNoOption() {
      $.Util.cookie.set($.Conf.CookieKeys.IS_QUERY_BY_LOCKER_NO_IN_TOP, this.isQueryByLockerNo, 365);
    },

    checkPrintOption() {
      $.Util.cookie.set($.Conf.CookieKeys.SHOW_MEMBER_ENTRY_CHECKIN_PRINT, this.isShowPrintTicket, 365);
    },

    printMecTicket(id) {
      let shopName = $.data.tenant.tenantName === $.data.shop.shopName ? $.data.shop.shopName : $.data.tenant.tenantName + "<br>" + $.data.shop.shopName;
      $.Util.printForPos(id, shopName, true);
    }
  }
});

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_view_design__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_view_design___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_view_design__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_view_design_dist_styles_iview_css__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_view_design_dist_styles_iview_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_view_design_dist_styles_iview_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_css_common_css__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_css_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_css_common_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_cropperjs_dist_cropper_css__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_cropperjs_dist_cropper_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_cropperjs_dist_cropper_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_js_syslib_js__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_js_bizlib_js__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_js_const_js__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assets_js_lang_js__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store_store_js__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__assets_js_print_js__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__router_menu_js__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_vue_echarts_components_ECharts_vue__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_vue_echarts_components_ECharts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_vue_echarts_components_ECharts_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_echarts_lib_chart_line__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_echarts_lib_chart_line___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_echarts_lib_chart_line__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_echarts_lib_chart_pie__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_echarts_lib_chart_pie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_echarts_lib_chart_pie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_echarts_lib_chart_bar__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_echarts_lib_chart_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_echarts_lib_chart_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_echarts_lib_component_tooltip__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_echarts_lib_component_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_echarts_lib_component_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_echarts_lib_component_title__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_echarts_lib_component_title___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_echarts_lib_component_title__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_echarts_lib_component_legend__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_echarts_lib_component_legend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_echarts_lib_component_legend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_sys_header_vue__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_sys_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__components_sys_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_shop_nav_vue__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_shop_nav_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__components_shop_nav_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_sys_input_int_vue__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_sys_input_int_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__components_sys_input_int_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_sys_input_num_vue__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_sys_input_num_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__components_sys_input_num_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_member_member_entry_checkin_vue__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_member_member_entry_checkin_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__pages_member_member_entry_checkin_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_shop_today_entry_checkin_list_vue__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_shop_today_entry_checkin_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26__pages_shop_today_entry_checkin_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_xe_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_xe_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_xe_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_vxe_table__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_vxe_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_vxe_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_vxe_table_lib_style_css__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_vxe_table_lib_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_vxe_table_lib_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_dayjs__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_dayjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_dayjs__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






// 导入样式

























// 引入包


window.onload = function () {
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.devtools = false;
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_view_design___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_28_vxe_table___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_12__assets_js_print_js__["a" /* default */]);
  axios.defaults.withCredentials = true;
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component("chart", __WEBPACK_IMPORTED_MODULE_14_vue_echarts_components_ECharts_vue___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component("sys-header", __WEBPACK_IMPORTED_MODULE_21__components_sys_header_vue___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component("shop-nav", __WEBPACK_IMPORTED_MODULE_22__components_shop_nav_vue___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component("input-int", __WEBPACK_IMPORTED_MODULE_23__components_sys_input_int_vue___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component("input-num", __WEBPACK_IMPORTED_MODULE_24__components_sys_input_num_vue___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component("member-entry-checkin", __WEBPACK_IMPORTED_MODULE_25__pages_member_member_entry_checkin_vue___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component("today-entry-checkin-list", __WEBPACK_IMPORTED_MODULE_26__pages_shop_today_entry_checkin_list_vue___default.a);

  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].directive("focus", {
    inserted: function (el) {
      // 聚焦元素
      el.focus();
    }
  });

  // define global objects
  window.$ = {
    Util: __WEBPACK_IMPORTED_MODULE_7__assets_js_syslib_js__["a" /* Util */],
    Req: __WEBPACK_IMPORTED_MODULE_7__assets_js_syslib_js__["b" /* Req */],
    Msg: __WEBPACK_IMPORTED_MODULE_7__assets_js_syslib_js__["c" /* Msg */],
    Dlg: __WEBPACK_IMPORTED_MODULE_7__assets_js_syslib_js__["d" /* Dlg */],
    MemberLib: __WEBPACK_IMPORTED_MODULE_8__assets_js_bizlib_js__["a" /* Member */],
    SvName: __WEBPACK_IMPORTED_MODULE_9__assets_js_const_js__["a" /* SvName */],
    Conf: __WEBPACK_IMPORTED_MODULE_9__assets_js_const_js__["b" /* Conf */],
    Dict: __WEBPACK_IMPORTED_MODULE_9__assets_js_const_js__["c" /* Dict */],
    Lang: __WEBPACK_IMPORTED_MODULE_10__assets_js_lang_js__["a" /* default */],
    Menus: __WEBPACK_IMPORTED_MODULE_13__router_menu_js__["a" /* menus */],
    dayjs: __WEBPACK_IMPORTED_MODULE_30_dayjs___default.a,
    PageMenus: __WEBPACK_IMPORTED_MODULE_13__router_menu_js__["b" /* pageMenus */],
    data: {
      clientVersion: null,
      user: {}, // uid, uname, phoneNo, isTenantOwner, isShopOwner, roleFuncList, staffId, staffFavMenus
      tenant: {}, // encTid, tenantName, logoPathname, tenantType
      shop: {}, // encSid, shopName, logoPathname, shopType, hasEntryCheckin, expDate, isExpired, isTrial
      shopList: [],
      sys: { skin: "black", isInShop: true }
    }
  };
  _loading_(function () {
    try {
      const vue = new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
        el: "#app",
        router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* router */],
        store: __WEBPACK_IMPORTED_MODULE_11__store_store_js__["a" /* default */],
        template: "<App/>",
        components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
      });
      window.$.Msg.vue = vue;
      window.$.Dlg.vue = vue;
    } catch (e) {
      console.log(e);
    }
  });
};

function _loading_(callback) {
  document.getElementById("gLoading").parentNode.removeChild(document.getElementById("gLoading"));
  _startLoadingImg_();
  if (document.body.clientWidth < 1280) {
    alert("提示：屏幕宽度不能小于1280像素，否则影响系统展示。");
  }

  if (location.href.indexOf("#/user-login") > 0 || location.href.indexOf("#/?") > 0 || location.href.endsWith("/") || location.href.endsWith("/#")) {
    callback();
  } else {
    $.data.sys.skin = $.Util.cookie.get($.Conf.CookieKeys.SYS_SKIN);
    if (!$.data.sys.skin) $.data.sys.skin = "black";

    //-- 加载用户数据
    if ($.Util.cookie.get($.Conf.Keys.LOGIN_FLAG)) {
      $.Req.service($.SvName.INIT_DATA_LOAD, { clientType: 2 }, ret => {
        $.data.user = ret.user;
        $.data.tenant = ret.tenant;
        $.data.shop = ret.shop;
        $.data.shopList = ret.shopList;
        $.data.clientVersion = ret.clientVersion;

        callback();
      }, false, err => {
        callback();
      });
    } else {
      callback();
    }
  }
}

function _startLoadingImg_() {
  let brwSize = $.Util.getBrowserSize();
  const pageWidth = brwSize.pageWidth;
  const clientHeight = brwSize.pageHeight;
  const maskCont = document.createElement("div");

  maskCont.id = "_mask_cont_";
  maskCont.innerHTML = '<img src="/static/img/loading-1.gif"/>';
  maskCont.style.display = "none";
  document.body.appendChild(maskCont);
  const contHeight = maskCont.offsetHeight;
  const contWidth = maskCont.offsetWidth;
  maskCont.style.left = pageWidth / 2 - contWidth / 2 - 10 + "px";
  maskCont.style.top = clientHeight / 2 - contHeight / 2 + "px";
}

/***/ }),

/***/ 476:
/***/ (function(module, exports) {

module.exports = {"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}

/***/ }),

/***/ 564:
/***/ (function(module, exports) {

module.exports = {"name":"elliptic","version":"6.5.4","description":"EC cryptography","main":"lib/elliptic.js","files":["lib"],"scripts":{"lint":"eslint lib test","lint:fix":"npm run lint -- --fix","unit":"istanbul test _mocha --reporter=spec test/index.js","test":"npm run lint && npm run unit","version":"grunt dist && git add dist/"},"repository":{"type":"git","url":"git@github.com:indutny/elliptic"},"keywords":["EC","Elliptic","curve","Cryptography"],"author":"Fedor Indutny <fedor@indutny.com>","license":"MIT","bugs":{"url":"https://github.com/indutny/elliptic/issues"},"homepage":"https://github.com/indutny/elliptic","devDependencies":{"brfs":"^2.0.2","coveralls":"^3.1.0","eslint":"^7.6.0","grunt":"^1.2.1","grunt-browserify":"^5.3.0","grunt-cli":"^1.3.2","grunt-contrib-connect":"^3.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^5.0.0","grunt-mocha-istanbul":"^5.0.2","grunt-saucelabs":"^9.0.1","istanbul":"^0.4.5","mocha":"^8.0.1"},"dependencies":{"bn.js":"^4.11.9","brorand":"^1.1.0","hash.js":"^1.0.0","hmac-drbg":"^1.0.1","inherits":"^2.0.4","minimalistic-assert":"^1.0.1","minimalistic-crypto-utils":"^1.0.1"},"_resolved":"https://registry.npmmirror.com/elliptic/-/elliptic-6.5.4.tgz","_integrity":"sha512-iLhC6ULemrljPZb+QutR5TQGB+pdW6KGD5RSegS+8sorOZT+rdQFbsQFJgvN3eRqNALqJer4oQ16YvJHlU8hzQ==","_from":"elliptic@6.5.4"}

/***/ }),

/***/ 565:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 566:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 568:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 569:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 572:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 573:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 574:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 575:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 576:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 577:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 578:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 579:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 580:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 607:
/***/ (function(module, exports) {

module.exports = {"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(572)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(426),
  /* template */
  __webpack_require__(644),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-62a659ac",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(576)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(439),
  /* template */
  __webpack_require__(648),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-712ba9d1",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(574)
}
var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(440),
  /* template */
  __webpack_require__(646),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-68d3b92c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 633:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "echarts"
  })
},staticRenderFns: []}

/***/ }),

/***/ 634:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mytips"
  }, [_c('icon', {
    attrs: {
      "type": "md-help-circle"
    }
  }), (_vm.title) ? _c('span', {
    staticClass: "tips-tit"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c('em', [_vm._t("default")], 2)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 635:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-mbase g-dlg"
  }, [(_vm.member) ? [(_vm.isShopMember) ? _c('div', {
    staticClass: "links"
  }, [_c('a', {
    attrs: {
      "href": '#/member-info/' + _vm.member.memberId
    }
  }, [_vm._v("会员信息")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": '#/member-card-list/' + _vm.member.memberId
    }
  }, [_vm._v("会员卡")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": '#/member-lesson-list/' + _vm.member.memberId
    }
  }, [_vm._v("上课记录")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": '#/member-follow-list/' + _vm.member.memberId
    }
  }, [_vm._v("会员跟进")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": '#/member-checkin-list/' + _vm.member.memberId
    }
  }, [_vm._v("入场记录")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": '#/member-points-list/' + _vm.member.memberId
    }
  }, [_vm._v("积分记录")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": '#/member-photo-list/' + _vm.member.memberId
    }
  }, [_vm._v("会员相册")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": '#/member-body-test-list/' + _vm.member.memberId
    }
  }, [_vm._v("会员测试")])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "member"
  }, [_c('div', {
    staticClass: "member-info"
  }, [_c('table', [_c('tr', [_c('td', {
    attrs: {
      "valign": "top"
    }
  }, [_c('span', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.member.name))]), (!_vm.g.Util.isEmpty(_vm.member.sex)) ? _c('span', [_vm._v(_vm._s(_vm.g.Dict.Sex[_vm.member.sex]))]) : _vm._e(), _vm._v(" "), (_vm.member.cardNo) ? _c('span', [_c('span', {
    staticClass: "spt"
  }, [_vm._v("/")]), _vm._v(" 卡号： " + _vm._s(_vm.member.cardNo))]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "phone-no"
  }, [_c('i', {
    staticClass: "iconfont icon-phone phone"
  }), _vm._v(" " + _vm._s(_vm.member.phoneNo))]), _vm._v(" "), _c('ul', {
    staticClass: "detail"
  }, [_c('li', {
    staticClass: "stat"
  }, [(_vm.isShopMember) ? [_c('a', {
    staticClass: "bar",
    attrs: {
      "href": '#/member-checkin-list/' + _vm.member.memberId
    }
  }, [_vm._v("入场签到（"), _c('u', [_vm._v(_vm._s(_vm.memberStat.entryCheckins) + " 次")]), _vm._v("）")]), _vm._v(" "), _c('a', {
    staticClass: "bar",
    attrs: {
      "href": '#/member-lesson-list/' + _vm.member.memberId
    }
  }, [_vm._v("上课（"), _c('u', [_vm._v(_vm._s(_vm.memberStat.lessonTimes) + " 次")]), _vm._v("）")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": '#/member-points-list/' + _vm.member.memberId
    }
  }, [_vm._v("积分（"), _c('u', [_vm._v(_vm._s(_vm.memberStat.points) + " 分")]), _vm._v("）")])] : [_c('span', {
    staticClass: "bar"
  }, [_vm._v("入场签到（"), _c('u', [_vm._v(_vm._s(_vm.memberStat.entryCheckins) + " 次")]), _vm._v("）")]), _vm._v(" "), _c('span', {
    staticClass: "bar"
  }, [_vm._v("上课（"), _c('u', [_vm._v(_vm._s(_vm.memberStat.lessonTimes) + " 次")]), _vm._v("）")]), _vm._v(" "), _c('span', [_vm._v("积分（"), _c('u', [_vm._v(_vm._s(_vm.memberStat.points) + " 分")]), _vm._v("）")])]], 2), _vm._v(" "), (_vm.member.emergencyPhone) ? _c('li', [_c('b', [_vm._v("紧急联系人手机号")]), _vm._v("： "), _c('b', [_vm._v(_vm._s(_vm.g.Util.formatPhone(_vm.member.emergencyPhone)))])]) : _vm._e(), _vm._v(" "), (_vm.member.regDate) ? _c('li', [_c('b', [_vm._v("注册日期")]), _vm._v("： " + _vm._s(_vm.g.Util.formatDate(_vm.member.regDate)) + "  （已注册 "), _c('b', [_vm._v(_vm._s(new Date().subtract(Date.new(_vm.member.regDate))))]), _vm._v(" 天）")]) : _vm._e(), _vm._v(" "), (_vm.member.idNo) ? _c('li', [_c('b', [_vm._v("身份证号")]), _vm._v("： " + _vm._s(_vm.member.idNo))]) : _vm._e(), _vm._v(" "), (_vm.member.shopName && _vm.member.shopName !== _vm.g.data.shop.shopName) ? _c('li', [_c('b', [_vm._v("原属门店")]), _vm._v("：" + _vm._s(_vm.member.shopName))]) : _vm._e(), _vm._v(" "), (_vm.member.coachName || _vm.member.salesName || _vm.member.advisorName) ? _c('li', [(_vm.member.coachName) ? _c('span', {
    staticClass: "bar"
  }, [_c('b', [_vm._v("教练")]), _vm._v("： " + _vm._s(_vm.member.coachName))]) : _vm._e(), _vm._v(" "), (_vm.member.salesName) ? _c('span', {
    staticClass: "bar"
  }, [_c('b', [_vm._v("销售")]), _vm._v("： " + _vm._s(_vm.member.salesName))]) : _vm._e(), _vm._v(" "), (_vm.member.advisorName) ? _c('span', [_c('b', [_vm._v("会籍顾问")]), _vm._v("： " + _vm._s(_vm.member.advisorName))]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.member.wxNo) ? _c('li', [_c('b', [_vm._v("微信号")]), _vm._v("： " + _vm._s(_vm.member.wxNo))]) : _vm._e(), _vm._v(" "), (_vm.member.tagIds || _vm.memberEditable) ? _c('li', [_c('b', [_vm._v("会员标签")]), _vm._v("：\n\t\t\t\t\t\t\t\t\t"), _c('span', {
    staticClass: "tags"
  }, _vm._l((_vm.member.tagNames), function(tagName) {
    return _c('span', [_vm._v(_vm._s(tagName))])
  }), 0), _vm._v(" "), (_vm.memberEditable) ? _c('a', {
    on: {
      "click": _vm.openMemerTagDlg
    }
  }, [_vm._v("【编辑】")]) : _vm._e()]) : _vm._e()])]), _vm._v(" "), _c('td', {
    staticClass: "photo",
    staticStyle: {
      "padding-top": "0"
    },
    attrs: {
      "valign": "top",
      "width": "225",
      "align": "right"
    }
  }, [(_vm.member && _vm.member.avatarPathname) ? _c('a', {
    attrs: {
      "href": _vm.g.Util.getImgUrl(_vm.member.avatarPathname),
      "target": "_blank"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.g.Util.getImgUrl(_vm.member.avatarPathname, 500)
    }
  })]) : (_vm.member) ? _c('img', {
    staticStyle: {
      "border": "0"
    },
    attrs: {
      "src": _vm.g.Util.getImgUrl(null, 220)
    }
  }) : _vm._e()])])]), _vm._v(" "), (_vm.member.morePhotos) ? _c('div', {
    staticClass: "more-photos"
  }, [_c('b', [_vm._v("更多会员头像照")]), _vm._v("：\n\t\t\t\t\t"), _c('ul', _vm._l((_vm.member.morePhotos.split(',')), function(img) {
    return _c('li', [_c('a', {
      attrs: {
        "href": _vm.g.Util.getImgUrl(img),
        "target": "_blank"
      }
    }, [_c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(img, 800, 800, 'f1f1f1')
      }
    })])])
  }), 0)]) : _vm._e()]), _vm._v(" "), _c('section', {
    staticClass: "cards"
  }, [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit l"
  }, [_vm._v("会员卡列表")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('checkbox', {
    model: {
      value: (_vm.hideInvalidCards),
      callback: function($$v) {
        _vm.hideInvalidCards = $$v
      },
      expression: "hideInvalidCards"
    }
  }, [_vm._v("隐藏无效卡")])], 1)]), _vm._v(" "), _c('table', {
    staticClass: "mytbl",
    attrs: {
      "width": "100%"
    }
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.memberCardList), function(mc, idx) {
    return (mc.isValid || (!_vm.hideInvalidCards && !mc.isValid)) ? _c('tr', [_c('td', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(mc.cardName) + "\n\t\t\t\t\t\t\t"), (mc.status === 1) ? _c('span', {
      staticClass: "red l5"
    }, [_vm._v("[已" + _vm._s(_vm.g.Dict.MemberCardStatus[mc.status]) + "]")]) : _vm._e()]), _vm._v(" "), _c('td', [(mc.cardType === 1) ? [(mc.beginDate) ? [_c('b', {
      class: {
        red: mc.leftDays < 0
      },
      on: {
        "dblclick": function($event) {
          return _vm.updateMcStat(idx)
        }
      }
    }, [_vm._v(_vm._s(mc.leftDays))]), _vm._v(" 天")] : _vm._e()] : (mc.cardType === 2) ? _c('span', [_c('b', {
      on: {
        "dblclick": function($event) {
          return _vm.updateMcStat(idx)
        }
      }
    }, [_vm._v(_vm._s(mc.currentTimes))]), _vm._v(" 次\n\t\t\t\t\t\t\t\t"), (mc.avgPrice) ? _c('span', {
      staticClass: "green l5"
    }, [_vm._v("（￥" + _vm._s(mc.avgPrice) + " / 次，剩余 ￥" + _vm._s(_vm.g.Util.round(mc.avgPrice * mc.currentTimes)) + "）")]) : _vm._e()]) : (mc.cardType === 3) ? _c('span', [_c('b', {
      on: {
        "dblclick": function($event) {
          return _vm.updateMcStat(idx)
        }
      }
    }, [_vm._v(_vm._s(mc.currentAmount))]), _vm._v(" 元")]) : (mc.cardType === 4) ? _c('span', [_c('b', [_vm._v(_vm._s(mc.currentTimes))]), _vm._v(" " + _vm._s(_vm.g.Dict.CardTimeTypes[mc.cardTimeType]))]) : _vm._e()], 2), _vm._v(" "), _c('td', [(mc.beginDate) ? _c('span', {
      class: {
        red: mc.leftDays < 0
      }
    }, [_vm._v(_vm._s(_vm.g.Util.formatDate(mc.beginDate)) + " ~ " + _vm._s(_vm.g.Util.formatDate(mc.endDate)))]) : (mc.cardType === 1) ? [_c('i', [_vm._v("尚未开卡")])] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(mc.remark) + "\n\t\t\t\t\t\t")])]) : _vm._e()
  })], 2)]), _vm._v(" "), (_vm.isShopMember && _vm.member && _vm.viewMemberFollow) ? _c('div', {
    staticClass: "memb-follow"
  }, [_c('member-follow-list', {
    attrs: {
      "memberId": _vm.memberId
    }
  })], 1) : _vm._e()])] : _c('div', [_vm._v("\n\t\t加载中...\n\t")]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "设置会员标签",
      "width": "700",
      "ok-text": "",
      "cancel-text": ""
    },
    model: {
      value: (_vm.memberTag.dlg),
      callback: function($$v) {
        _vm.$set(_vm.memberTag, "dlg", $$v)
      },
      expression: "memberTag.dlg"
    }
  }, [(_vm.memberTag.dlg) ? [_c('member-tag-edit', {
    attrs: {
      "member-id": _vm.memberTag.memberId,
      "member-tags": _vm.memberTag.memberTags,
      "after-update-shop-tags": _vm.afterUpdateShopTags,
      "after-update-member-tags": _vm.afterUpdateMemberTags
    }
  })] : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    on: {
      "click": function($event) {
        _vm.memberTag.dlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 2), _vm._v(" "), _c('modal')], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("会员卡名称")]), _vm._v(" "), _c('th', [_vm._v("剩余额")]), _vm._v(" "), _c('th', [_vm._v("使用期限")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "220"
    }
  }, [_vm._v("会员卡备注")])])
}]}

/***/ }),

/***/ 636:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style-"
  }, [_c('Tabs', {
    attrs: {
      "animated": false
    }
  }, [_c('TabPane', {
    attrs: {
      "label": "客户信息与跟进",
      "name": "custInfo"
    }
  }, [(_vm.cust) ? _c('div', {
    staticClass: "optbar"
  }, [(_vm.editable && _vm.custEditPermit) ? [_c('i-button', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/cust-edit/' + _vm.cust.custId)
      }
    }
  }, [_vm._v("编辑客户")]), _vm._v("\n\t\t\t\t\t \n\t\t\t\t")] : _vm._e(), _vm._v(" "), (_vm.editable || _vm.editAllCustFollowPermit) ? [(!_vm.canCreateFollow) ? _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.canCreateFollow = true
      }
    }
  }, [_vm._v("添加跟进")]) : _vm._e()] : _vm._e()], 2) : _vm._e(), _vm._v(" "), (_vm.cust) ? _c('table', {
    staticClass: "cust"
  }, [_c('tr', [_c('th', [_vm._v("客户级别")]), _c('td', {
    attrs: {
      "width": "220"
    }
  }, [_c('Rate', {
    staticStyle: {
      "font-size": "16px"
    },
    attrs: {
      "disabled": true
    },
    model: {
      value: (_vm.cust.custLevel),
      callback: function($$v) {
        _vm.$set(_vm.cust, "custLevel", $$v)
      },
      expression: "cust.custLevel"
    }
  })], 1), _vm._v(" "), _c('th', [_vm._v("客户类型")]), _c('td', [_vm._v(_vm._s(_vm.g.Dict.CustTypes[_vm.cust.custType]))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("手机号")]), _c('td', [_c('b', {
    staticClass: "normal",
    attrs: {
      "title": _vm.g.Util.formatPhone(_vm.cust.phoneNo)
    }
  }, [_vm._v(_vm._s(_vm.cust.phoneNo))])]), _vm._v(" "), _c('th', [_vm._v("客户负责人")]), _c('td', [_vm._v(_vm._s(_vm.cust.ownerName))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("客户来源")]), _vm._v(" "), _c('td', [(_vm.cust.custSrcName) ? [_vm._v(_vm._s(_vm.cust.custSrcName))] : (_vm.cust.custSrc) ? _c('i', [_vm._v(_vm._s(_vm.g.Dict.CustSrcDict[_vm.cust.custSrc]))]) : _vm._e()], 2), _vm._v(" "), _c('th', [(_vm.cust.custType === 1) ? [_vm._v("到访时间")] : [_vm._v("预约到店时间")]], 2), _vm._v(" "), _c('td', [(_vm.cust.visitTime) ? _c('span', [_vm._v(_vm._s(_vm.cust.visitTime))]) : _vm._e()])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("提醒日期")]), _c('td', [(_vm.cust.reminderDate) ? [_vm._v(_vm._s(_vm.g.Util.formatDate(_vm.cust.reminderDate)))] : _vm._e()], 2), _vm._v(" "), _c('th', [_vm._v("工作单位/职位")]), _vm._v(" "), _c('td', [(_vm.cust.orgName || _vm.cust.jobTitle) ? [_c('span', [_vm._v(_vm._s(_vm.cust.orgName))]), _vm._v(" / " + _vm._s(_vm.g.Dict.JobTitles[_vm.cust.jobTitle]) + "\n\t\t\t\t\t\t")] : _vm._e()], 2)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("单位类型")]), _c('td', [(_vm.cust.orgTypes) ? [_vm._v(_vm._s(_vm.cust.orgTypeListStr))] : _vm._e()], 2), _vm._v(" "), _c('th', [_vm._v("单位地址")]), _c('td', [(_vm.cust.orgAddr) ? [_vm._v(_vm._s(_vm.cust.orgAddr))] : _vm._e()], 2)]), _vm._v(" "), (_vm.cust.homeAddr) ? _c('tr', [_c('th', [_vm._v("家庭住址")]), _c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.cust.homeAddr))])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', [_vm._v("微信号")]), _c('td', [_vm._v(_vm._s(_vm.cust.wxNo))]), _vm._v(" "), _c('th', [_vm._v("客户标签")]), _vm._v(" "), _c('td', [(_vm.g.Util.isNotEmpty(_vm.cust.custTagIdList)) ? _c('ul', {
    staticClass: "tags"
  }, _vm._l((_vm.cust.custTagIdList), function(tagId) {
    return _c('li', [_vm._v(_vm._s(_vm.custTagNameMap[tagId]))])
  }), 0) : _vm._e(), _vm._v(" "), (_vm.editable && _vm.custEditPermit && _vm.custTagList && _vm.custTagList.length) ? _c('a', {
    on: {
      "click": _vm.openCustTagDlg
    }
  }, [_vm._v("【设置】")]) : _vm._e()])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("创建人")]), _c('td', [_vm._v(_vm._s(_vm.cust.createUname))]), _vm._v(" "), _c('th', [_vm._v("创建时间")]), _c('td', [_vm._v(_vm._s(_vm.cust.createTime))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("更新人")]), _c('td', [_vm._v(_vm._s(_vm.cust.updateUname))]), _vm._v(" "), _c('th', [_vm._v("更新时间")]), _c('td', [_vm._v(_vm._s(_vm.cust.updateTime))])]), _vm._v(" "), (_vm.cust.remark) ? _c('tr', [_c('th', [_vm._v("备注")]), _c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.cust.remark))])]) : _vm._e()]) : _c('div', {
    staticClass: "center gray"
  }, [_vm._v("正在加载客户信息...")]), _vm._v(" "), (_vm.custId) ? _c('div', {
    staticClass: "p15"
  }, [_c('cust-follow', {
    attrs: {
      "cust-id": _vm.custId,
      "can-create": _vm.canCreateFollow,
      "after-create": _vm.afterCreateFollow,
      "after-delete": _vm.afterDeleteFollow
    }
  })], 1) : _vm._e()]), _vm._v(" "), (_vm.gcLessonList && _vm.gcLessonList.length) ? _c('TabPane', {
    attrs: {
      "label": '团课体验课记录 (' + _vm.gcLessonList.length + '条)',
      "name": "gcLesson"
    }
  }, [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', [_vm._v("课程名/上课主题")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("上课日期")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "105"
    }
  }, [_vm._v("上课时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("教练")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("预约人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "145"
    }
  }, [_vm._v("预约时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("签到人")]), _vm._v(" "), _c('th', [_vm._v("签到时间")])]), _vm._v(" "), _vm._l((_vm.gcLessonList), function(l) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(l.courseName) + " "), (l.lessonTitle) ? [_vm._v("/ " + _vm._s(l.lessonTitle))] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(l.lessonDate)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatTime(l.beginTime)) + " ~ " + _vm._s(_vm.g.Util.formatTime(l.endTime)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.coachName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.bookingUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.bookingTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.checkinUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.checkinTime))])])
  })], 2)])]) : _vm._e(), _vm._v(" "), (_vm.pcLessonList && _vm.pcLessonList.length) ? _c('TabPane', {
    attrs: {
      "label": '私教体验课记录 (' + _vm.pcLessonList.length + '条)',
      "name": "pcLesson"
    }
  }, [_c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', [_vm._v("课程名/上课主题")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("上课日期")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "105"
    }
  }, [_vm._v("上课时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("教练")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("预约人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "145"
    }
  }, [_vm._v("预约时间")]), _vm._v(" "), _c('th', [_vm._v("签到时间")])]), _vm._v(" "), _vm._l((_vm.pcLessonList), function(l) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(l.courseName) + " "), (l.lessonTitle) ? [_vm._v("/ " + _vm._s(l.lessonTitle))] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatDate(l.lessonDate)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Util.formatTime(l.beginTime)) + " ~ " + _vm._s(_vm.g.Util.formatTime(l.endTime)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.coachName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createUname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.createTime))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(l.checkinTime))])])
  })], 2)])]) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "设置会员标签",
      "width": "600",
      "styles": {
        top: '10px'
      },
      "mask-closable": false
    },
    model: {
      value: (_vm.custTagDlg),
      callback: function($$v) {
        _vm.custTagDlg = $$v
      },
      expression: "custTagDlg"
    }
  }, [(_vm.custTagDlg && _vm.custTagList && _vm.custTagList.length) ? [_c('div', {
    staticClass: "orange mb15"
  }, [_vm._v("请选择该客户的标签（可多选）：")]), _vm._v(" "), _c('CheckboxGroup', {
    staticStyle: {
      "display": "inline-block"
    },
    model: {
      value: (_vm.custTagIdList),
      callback: function($$v) {
        _vm.custTagIdList = $$v
      },
      expression: "custTagIdList"
    }
  }, _vm._l((_vm.custTagList), function(c) {
    return _c('Checkbox', {
      key: c.tagId,
      attrs: {
        "label": c.tagId
      }
    }, [_vm._v(_vm._s(c.tagName))])
  }), 1)] : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "dlg-foot",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.setCustTag
    }
  }, [_vm._v("确定")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": function($event) {
        _vm.custTagDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 2), _vm._v(" "), _c('modal')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 637:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "img-upload"
  }, [_c('div', {
    on: {
      "click": _vm.handleClick
    }
  }, [_c('input', {
    ref: "input",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "type": "file",
      "multiple": _vm.multiple,
      "accept": _vm.accept
    },
    on: {
      "change": _vm.handleChange
    }
  }), _vm._v(" "), _vm._t("default")], 2), _vm._v(" "), (_vm.showThumb && _vm.fileList && _vm.fileList.length > 0) ? _c('div', {
    staticClass: "img-upload-list"
  }, _vm._l((_vm.fileList), function(item) {
    return _c('div', {
      staticClass: "img-upload-list-item"
    }, [(item.status === 'finished') ? [_c('img', {
      attrs: {
        "src": item.url
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "img-upload-list-cover"
    }, [_c('icon', {
      attrs: {
        "type": "ios-eye-outline"
      },
      nativeOn: {
        "click": function($event) {
          return _vm.handleView(item)
        }
      }
    }), _vm._v(" "), (_vm.removeable) ? _c('icon', {
      attrs: {
        "type": "ios-trash-outline"
      },
      nativeOn: {
        "click": function($event) {
          return _vm.handleRemove(item)
        }
      }
    }) : _vm._e()], 1)] : [(item.showProgress) ? _c('progress', {
      attrs: {
        "percent": item.percentage,
        "hide-info": ""
      }
    }) : _vm._e()]], 2)
  }), 0) : _vm._e(), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "查看图片",
      "width": "680",
      "styles": {
        top: '0'
      }
    },
    model: {
      value: (_vm.imgVisible),
      callback: function($$v) {
        _vm.imgVisible = $$v
      },
      expression: "imgVisible"
    }
  }, [_c('a', {
    attrs: {
      "href": _vm.oriImgUrl,
      "target": "_blank"
    }
  }, [_c('img', {
    staticStyle: {
      "max-width": "650px"
    },
    attrs: {
      "src": _vm.imgUrl
    }
  })]), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 638:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', [(!_vm.cardVacationList || _vm.cardVacationList.length === 0) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n\t\t\t暂无请假记录\n\t\t")]) : [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(1), _vm._v(" "), _c('tr', [_c('td', [(_vm.cardVacationStat.limitVacationCount) ? [_vm._v("已用： ")] : _vm._e(), _vm._v(_vm._s(_vm.cardVacationStat.countWithFree) + " 次\n\t\t\t\t\t\t\t"), (_vm.cardVacationStat.limitVacationCount) ? _c('div', {
    staticClass: "p10"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t剩余： "), _c('b', {
    staticClass: "orangered"
  }, [_vm._v(_vm._s(_vm.cardVacationStat.limitVacationCount - _vm.cardVacationStat.countWithFree))]), _vm._v(" 次\n\t\t\t\t\t\t\t")]) : _vm._e()], 2), _vm._v(" "), _c('td', [(_vm.cardVacationStat.limitVacationDays) ? [_vm._v("已用： ")] : _vm._e(), _vm._v(_vm._s(_vm.cardVacationStat.daysWithFree) + " 天\n\t\t\t\t\t\t\t"), (_vm.cardVacationStat.limitVacationDays) ? _c('div', {
    staticClass: "p10"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t剩余： "), _c('b', {
    staticClass: "orangered"
  }, [_vm._v(_vm._s(_vm.cardVacationStat.limitVacationDays - _vm.cardVacationStat.daysWithFree))]), _vm._v(" 天\n\t\t\t\t\t\t\t")]) : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.cardVacationStat.countWithPaid) + " 次\n\t\t\t\t\t\t")]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.cardVacationStat.daysWithPaid) + " 天\n\t\t\t\t\t\t")])])])]), _vm._v(" "), _c('h3', {
    staticClass: "mt20"
  }, [_vm._v("所有请假日志 (" + _vm._s(_vm.cardVacationCount) + ")")]), _vm._v(" "), _c('ul', {
    staticClass: "-v-tbl"
  }, _vm._l((_vm.cardVacationList), function(c, idx) {
    return _c('li', [_c('table', {
      attrs: {
        "width": "100%"
      }
    }, [_c('tr', [_c('th', {
      attrs: {
        "width": "90"
      }
    }, [_vm._v("操作")]), _vm._v(" "), _c('td', [(c.status === 0) ? _c('span', {
      staticClass: "green"
    }, [_vm._v("提交请假 "), (!_vm.g.Util.isEmpty(c.vacationFee)) ? _c('span', {
      staticClass: "orangered"
    }, [_vm._v("（付费）")]) : _vm._e()]) : _c('span', {
      staticClass: "red"
    }, [_vm._v("撤销请假")])])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("请假日期")]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.g.Util.formatDate(c.vacationBegin)) + " ~ " + _vm._s(_vm.g.Util.formatDate(c.vacationEnd)) + "\n\t\t\t\t\t\t\t\t"), _c('b', [_vm._v("（"), (c.status === 1) ? [_vm._v("-")] : _vm._e(), _vm._v(_vm._s(1 + _vm.g.Util.calcDateDiffDays(c.vacationEnd, c.vacationBegin)) + " 天）")], 2), _vm._v(" "), (idx === 0 && c.status === 0 && _vm.memberCardVacationPermit) ? _c('span', {
      staticClass: "l15"
    }, [_c('a', {
      on: {
        "click": function($event) {
          return _vm.openCardVacationCancelDlg(c)
        }
      }
    }, [_vm._v("【撤销请假】")])]) : _vm._e()])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("创建时间")]), _c('td', [_vm._v(_vm._s(c.createTime))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("创建人")]), _c('td', [_vm._v(_vm._s(c.createUname))])]), _vm._v(" "), (c.updateTime !== c.createTime) ? [_c('tr', [_c('th', [_vm._v("更新时间")]), _c('td', [_vm._v(_vm._s(c.updateTime))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("更新人")]), _c('td', [_vm._v(_vm._s(c.updateUname))])])] : _vm._e(), _vm._v(" "), (!_vm.g.Util.isEmpty(c.vacationFee)) ? _c('tr', [_c('th', [_vm._v("请假费用")]), _c('td', {
      staticClass: "orangered"
    }, [_vm._v("￥" + _vm._s(c.vacationFee))])]) : _vm._e(), _vm._v(" "), (!_vm.g.Util.isEmpty(c.vacationFee)) ? _c('tr', [_c('th', [_vm._v("支付方式")]), _c('td', [_vm._v(_vm._s(_vm.g.data.shop.paymentChannel[c.feeChannel]))])]) : _vm._e(), _vm._v(" "), _c('tr', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (c.remark),
        expression: "c.remark"
      }]
    }, [_c('th', [_vm._v("备注")]), _c('td', [_c('pre', [_vm._v(_vm._s(c.remark))])])])], 2)])
  }), 0)]], 2), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员卡请假撤销",
      "width": "500",
      "styles": {
        top: '10px'
      },
      "mask-closable": false
    },
    model: {
      value: (_vm.cardVacationCancelDlg),
      callback: function($$v) {
        _vm.cardVacationCancelDlg = $$v
      },
      expression: "cardVacationCancelDlg"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "placeholder": "请输入撤销理由",
      "rows": 5
    },
    model: {
      value: (_vm.cancelRemark),
      callback: function($$v) {
        _vm.cancelRemark = $$v
      },
      expression: "cancelRemark"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submitCardVacationCancel
    }
  }, [_vm._v("提交")])], 1)], 1), _vm._v(" "), _c('modal')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', [_vm._v("请假统计 "), _c('span', {
    staticClass: "gray default-font l10"
  }, [_vm._v("（从本卡开卡日期统计）")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("免费请假次数")]), _c('th', [_vm._v("免费请假天数")]), _c('th', [_vm._v("付费请假次数")]), _c('th', [_vm._v("付费请假天数")])])
}]}

/***/ }),

/***/ 639:
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

/***/ 640:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.isCustCheckin) ? _c('Tabs', {
    attrs: {
      "animated": false
    }
  }, [_c('TabPane', {
    attrs: {
      "label": "会员入场签到"
    }
  }, [(_vm.mecList.length === 0) ? _c('div', [_c('div', {
    staticClass: "gray center"
  }, [_vm._v("\n          暂无签到记录\n        ")])]) : _c('div', [_c('div', {
    staticClass: "query"
  }, [_c('table', [_c('tr', [_c('td', [_vm._v("\n                共查到 "), _c('b', [_vm._v(_vm._s(_vm.totalCount))]), _vm._v(" 条签到记录\n              ")]), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right"
    }
  }, [_c('checkbox', {
    on: {
      "on-change": _vm.checkPrintOption
    },
    model: {
      value: (_vm.isShowPrintTicket),
      callback: function($$v) {
        _vm.isShowPrintTicket = $$v
      },
      expression: "isShowPrintTicket"
    }
  }, [_vm._v("显示打印小票")]), _vm._v("\n                 \n                "), _c('help', [_vm._v("对于签出计费的会员卡，可在此处统一设置签出计费的折扣数（例如 9折，8.5折）")]), _vm._v(" 签出计费折扣：\n                "), _c('input-num', {
    staticClass: "discount",
    attrs: {
      "placeholder": "折扣数"
    },
    model: {
      value: (_vm.checkoutFeeDiscounts),
      callback: function($$v) {
        _vm.checkoutFeeDiscounts = $$v
      },
      expression: "checkoutFeeDiscounts"
    }
  }), _vm._v(" 折\n              ")], 1), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right",
      "width": "370",
      "valign": "middle"
    }
  }, [_c('span', {
    staticStyle: {
      "position": "relative",
      "top": "2px"
    }
  }, [_c('checkbox', {
    on: {
      "on-change": _vm.checkLockerNoOption
    },
    model: {
      value: (_vm.isQueryByLockerNo),
      callback: function($$v) {
        _vm.isQueryByLockerNo = $$v
      },
      expression: "isQueryByLockerNo"
    }
  }, [_vm._v("根据更衣柜号查")])], 1), _vm._v(" "), _c('i-input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "icon": "ios-search",
      "placeholder": _vm.isQueryByLockerNo ? '请输入更衣柜号' : '会员卡号 | 手机号 | 手机号后4位'
    },
    on: {
      "on-click": _vm.queryMemberEntryCheckinByNo,
      "on-enter": _vm.queryMemberEntryCheckinByNo
    },
    model: {
      value: (_vm.queryNo),
      callback: function($$v) {
        _vm.queryNo = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "queryNo"
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("会员")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("签到人次")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("签到时间")]), _vm._v(" "), (_vm.hasEntryChargeItem) ? _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("计费项目")]) : _vm._e(), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("签到用卡")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("签出时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("入场时长")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("签到消费")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("剩余额")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("更衣柜号")]), _vm._v(" "), _c('th', [_vm._v("操作")])]), _vm._v(" "), _vm._l((_vm.mecList), function(m, idx) {
    return _c('tr', [_c('td', [_c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.viewMember(m.memberId)
        }
      }
    }, [_vm._v(_vm._s(m.memberName.shorten(15)))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.checkinCount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(Date.new(m.createTime).format('hh:mm:ss')))]), _vm._v(" "), (_vm.hasEntryChargeItem) ? _c('td', [(m.entryChargeItemName) ? [_vm._v(_vm._s(m.entryChargeItemName))] : _c('i', {
      staticClass: "gray"
    }, [_vm._v("默认")])], 2) : _vm._e(), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.cardName)), (m.mcRemark) ? _c('div', {
      staticClass: "p5 gray"
    }, [_vm._v(_vm._s(m.mcRemark))]) : _vm._e()]), _vm._v(" "), _c('td', [(m.checkoutTime) ? [_vm._v(_vm._s(Date.new(m.checkoutTime).format('hh:mm:ss')))] : _vm._e()], 2), _vm._v(" "), _c('td', [(m.checkoutTime) ? [_vm._v("\n                  " + _vm._s(parseInt((Date.new(m.checkoutTime).getTime() - Date.new(m.createTime).getTime()) / 60000)) + " 分钟\n                ")] : _vm._e()], 2), _vm._v(" "), _c('td', [(m.cardType === 1) ? [_c('span', {
      staticClass: "gray"
    }, [_vm._v("期限卡不计费")])] : (!_vm.g.Util.isEmpty(m.cardPayment)) ? [(m.paymentItemName) ? [_vm._v(_vm._s(m.paymentItemName))] : _vm._e(), _vm._v("\n                  " + _vm._s(m.cardPayment) + "\n                  "), (m.cardType === 2) ? [_vm._v("次")] : (m.cardType === 3) ? [_vm._v("元")] : (m.cardType === 4) ? [_vm._v(_vm._s(_vm.g.Dict.CardTimeTypes[m.cardTimeType]))] : _vm._e()] : _vm._e()], 2), _vm._v(" "), _c('td', [(m.cardType === 1) ? [_vm._v(_vm._s(Date.new(m.endDate).subtract(_vm.today)) + " 天")] : (m.cardType === 2) ? [_vm._v(_vm._s(m.currentTimes) + " 次")] : (m.cardType === 3) ? [_vm._v(_vm._s(m.currentAmount) + " 元")] : (m.cardType === 4) ? [_vm._v(_vm._s(m.currentTimes) + " " + _vm._s(_vm.g.Dict.CardTimeTypes[m.cardTimeType]))] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.lockerId))]), _vm._v(" "), _c('td', [(_vm.editable) ? [(!m.checkoutTime) ? _c('i-button', {
      staticClass: "opt-btn",
      on: {
        "click": function($event) {
          return _vm.checkoutMemberEntry(idx)
        }
      }
    }, [_vm._v("签出")]) : _c('i', {
      staticClass: "gray"
    }, [_vm._v("已签出")]), _vm._v(" "), (_vm.g.data.shop.shopType === 14 && m.checkoutTime && m.cardType === 3 && m.currentAmount && m.cardPayment) ? [_c('span', {
      staticClass: "spt"
    }, [_vm._v("|")]), _vm._v(" "), _c('a', {
      on: {
        "click": function($event) {
          return _vm.returnMemberCardAmount(idx, m.mcId, m.currentAmount)
        }
      }
    }, [_vm._v("退款")])] : _vm._e(), _vm._v(" "), (_vm.checkoutMember && _vm.checkoutMember.avatarPathname) ? _c('div', {
      staticClass: "mphoto"
    }, [_c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(_vm.checkoutMember.avatarPathname, 500, 500, 'eeeeee'),
        "alt": ""
      }
    })]) : _vm._e()] : _vm._e(), _vm._v(" "), (_vm.isShowPrintTicket) ? _c('span', {
      staticClass: "l10"
    }, [_c('span', {
      staticClass: "spt"
    }, [_vm._v("|")]), _vm._v(" \n                  "), _c('a', {
      on: {
        "click": function($event) {
          return _vm.printMecTicket('mecRecord_' + m.mecId)
        }
      }
    }, [_vm._v("打印小票")])]) : _vm._e(), _vm._v(" "), _c('div', {
      staticStyle: {
        "display": "none"
      },
      attrs: {
        "id": 'mecRecord_' + m.mecId
      }
    }, [_c('table', [_c('tr', [_c('td', {
      attrs: {
        "colspan": "2",
        "align": "center"
      }
    }, [_vm._v("【入场签到小票】")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("会员")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.memberName))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("签到时间")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.createTime))])]), _vm._v(" "), (m.checkoutTime) ? _c('tr', [_c('th', [_vm._v("签出时间")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.checkoutTime))])]) : _vm._e(), _vm._v(" "), (m.checkoutTime) ? _c('tr', [_c('th', [_vm._v("入场时长")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(parseInt((Date.new(m.checkoutTime).getTime() - Date.new(m.createTime).getTime()) / 60000)) + " 分钟")])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', [_vm._v("签到用卡")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.cardName))])]), _vm._v(" "), (m.paymentItemName) ? _c('tr', [_c('th', [_vm._v("消费项目")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.paymentItemName))])]) : _vm._e(), _vm._v(" "), (m.cardType > 1 && !_vm.g.Util.isEmpty(m.cardPayment)) ? _c('tr', [_c('th', [_vm._v("签到消费")]), _vm._v(" "), _c('td', [_vm._v("\n                        " + _vm._s(m.cardPayment) + "\n                        "), (m.cardType === 2) ? [_vm._v("次")] : (m.cardType === 3) ? [_vm._v("元")] : (m.cardType === 4) ? [_vm._v(_vm._s(_vm.g.Dict.CardTimeTypes[m.cardTimeType]))] : _vm._e()], 2)]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', [_vm._v("剩余额")]), _vm._v(" "), _c('td', [(m.cardType === 1) ? [_vm._v(_vm._s(Date.new(m.endDate).subtract(_vm.today)) + " 天")] : (m.cardType === 2) ? [_vm._v(_vm._s(m.currentTimes) + " 次")] : (m.cardType === 3) ? [_vm._v(_vm._s(m.currentAmount) + " 元")] : (m.cardType === 4) ? [_vm._v(_vm._s(m.currentTimes) + " " + _vm._s(_vm.g.Dict.CardTimeTypes[m.cardTimeType]))] : _vm._e()], 2)]), _vm._v(" "), (m.lockerId) ? _c('tr', [_c('th', [_vm._v("更衣柜号")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.lockerId))])]) : _vm._e()])])], 2)])
  })], 2)])]), _vm._v(" "), (_vm.totalCount && _vm.totalCount > 30) ? _c('div', {
    staticClass: "page-nav"
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
  })], 1) : _vm._e()]), _vm._v(" "), _c('TabPane', {
    attrs: {
      "label": "散客入场签到"
    }
  }, [_c('cust-entry-checkin-list', {
    ref: "custCheckinRef",
    attrs: {
      "queryDateType": 1,
      "queryDate": new Date()
    }
  })], 1)], 1) : [(_vm.mecList.length === 0) ? _c('div', [_c('div', {
    staticClass: "gray center"
  }, [_vm._v("\n        暂无签到记录\n      ")])]) : _c('div', [_c('div', {
    staticClass: "query"
  }, [_c('table', [_c('tr', [_c('td', [_vm._v("\n              共查到 "), _c('b', [_vm._v(_vm._s(_vm.totalCount))]), _vm._v(" 条签到记录\n            ")]), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right"
    }
  }, [_c('checkbox', {
    on: {
      "on-change": _vm.checkPrintOption
    },
    model: {
      value: (_vm.isShowPrintTicket),
      callback: function($$v) {
        _vm.isShowPrintTicket = $$v
      },
      expression: "isShowPrintTicket"
    }
  }, [_vm._v("显示打印小票")]), _vm._v("\n               \n              "), _c('help', [_vm._v("对于签出计费的会员卡，可在此处统一设置签出计费的折扣数（例如 9折，8.5折）")]), _vm._v(" 签出计费折扣：\n              "), _c('input-num', {
    staticClass: "discount",
    attrs: {
      "placeholder": "折扣数"
    },
    model: {
      value: (_vm.checkoutFeeDiscounts),
      callback: function($$v) {
        _vm.checkoutFeeDiscounts = $$v
      },
      expression: "checkoutFeeDiscounts"
    }
  }), _vm._v(" 折\n            ")], 1), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right",
      "width": "370",
      "valign": "middle"
    }
  }, [_c('span', {
    staticStyle: {
      "position": "relative",
      "top": "2px"
    }
  }, [_c('checkbox', {
    on: {
      "on-change": _vm.checkLockerNoOption
    },
    model: {
      value: (_vm.isQueryByLockerNo),
      callback: function($$v) {
        _vm.isQueryByLockerNo = $$v
      },
      expression: "isQueryByLockerNo"
    }
  }, [_vm._v("根据更衣柜号查")])], 1), _vm._v(" "), _c('i-input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "icon": "ios-search",
      "placeholder": _vm.isQueryByLockerNo ? '请输入更衣柜号' : '会员卡号 | 手机号 | 手机号后4位'
    },
    on: {
      "on-click": _vm.queryMemberEntryCheckinByNo,
      "on-enter": _vm.queryMemberEntryCheckinByNo
    },
    model: {
      value: (_vm.queryNo),
      callback: function($$v) {
        _vm.queryNo = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "queryNo"
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', {
    staticClass: "inner-tbl"
  }, [_c('tr', [_c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("会员")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "75"
    }
  }, [_vm._v("签到人次")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("签到时间")]), _vm._v(" "), (_vm.hasEntryChargeItem) ? _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("计费项目")]) : _vm._e(), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("签到用卡")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("签出时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("入场时长")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("签到消费")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("剩余额")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "80"
    }
  }, [_vm._v("更衣柜号")]), _vm._v(" "), _c('th', [_vm._v("操作")])]), _vm._v(" "), _vm._l((_vm.mecList), function(m, idx) {
    return _c('tr', [_c('td', [_c('a', {
      staticClass: "block",
      on: {
        "click": function($event) {
          return _vm.viewMember(m.memberId)
        }
      }
    }, [_vm._v(_vm._s(m.memberName.shorten(15)))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.checkinCount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(Date.new(m.createTime).format('hh:mm:ss')))]), _vm._v(" "), (_vm.hasEntryChargeItem) ? _c('td', [(m.entryChargeItemName) ? [_vm._v(_vm._s(m.entryChargeItemName))] : _c('i', {
      staticClass: "gray"
    }, [_vm._v("默认")])], 2) : _vm._e(), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.cardName)), (m.mcRemark) ? _c('div', {
      staticClass: "p5 gray"
    }, [_vm._v(_vm._s(m.mcRemark))]) : _vm._e()]), _vm._v(" "), _c('td', [(m.checkoutTime) ? [_vm._v(_vm._s(Date.new(m.checkoutTime).format('hh:mm:ss')))] : _vm._e()], 2), _vm._v(" "), _c('td', [(m.checkoutTime) ? [_vm._v("\n                " + _vm._s(parseInt((Date.new(m.checkoutTime).getTime() - Date.new(m.createTime).getTime()) / 60000)) + " 分钟\n              ")] : _vm._e()], 2), _vm._v(" "), _c('td', [(m.cardType === 1) ? [_c('span', {
      staticClass: "gray"
    }, [_vm._v("期限卡不计费")])] : (!_vm.g.Util.isEmpty(m.cardPayment)) ? [(m.paymentItemName) ? [_vm._v(_vm._s(m.paymentItemName))] : _vm._e(), _vm._v("\n                " + _vm._s(m.cardPayment) + "\n                "), (m.cardType === 2) ? [_vm._v("次")] : (m.cardType === 3) ? [_vm._v("元")] : (m.cardType === 4) ? [_vm._v(_vm._s(_vm.g.Dict.CardTimeTypes[m.cardTimeType]))] : _vm._e()] : _vm._e()], 2), _vm._v(" "), _c('td', [(m.cardType === 1) ? [_vm._v(_vm._s(Date.new(m.endDate).subtract(_vm.today)) + " 天")] : (m.cardType === 2) ? [_vm._v(_vm._s(m.currentTimes) + " 次")] : (m.cardType === 3) ? [_vm._v(_vm._s(m.currentAmount) + " 元")] : (m.cardType === 4) ? [_vm._v(_vm._s(m.currentTimes) + " " + _vm._s(_vm.g.Dict.CardTimeTypes[m.cardTimeType]))] : _vm._e()], 2), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.lockerId))]), _vm._v(" "), _c('td', [(_vm.editable) ? [(!m.checkoutTime) ? _c('i-button', {
      staticClass: "opt-btn",
      on: {
        "click": function($event) {
          return _vm.checkoutMemberEntry(idx)
        }
      }
    }, [_vm._v("签出")]) : _c('i', {
      staticClass: "gray"
    }, [_vm._v("已签出")]), _vm._v(" "), (_vm.g.data.shop.shopType === 14 && m.checkoutTime && m.cardType === 3 && m.currentAmount && m.cardPayment) ? [_c('span', {
      staticClass: "spt"
    }, [_vm._v("|")]), _vm._v(" "), _c('a', {
      on: {
        "click": function($event) {
          return _vm.returnMemberCardAmount(idx, m.mcId, m.currentAmount)
        }
      }
    }, [_vm._v("退款")])] : _vm._e(), _vm._v(" "), (_vm.checkoutMember && _vm.checkoutMember.avatarPathname) ? _c('div', {
      staticClass: "mphoto"
    }, [_c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(_vm.checkoutMember.avatarPathname, 500, 500, 'eeeeee'),
        "alt": ""
      }
    })]) : _vm._e()] : _vm._e(), _vm._v(" "), (_vm.isShowPrintTicket) ? _c('span', {
      staticClass: "l10"
    }, [_c('span', {
      staticClass: "spt"
    }, [_vm._v("|")]), _vm._v(" \n                "), _c('a', {
      on: {
        "click": function($event) {
          return _vm.printMecTicket('mecRecord_' + m.mecId)
        }
      }
    }, [_vm._v("打印小票")])]) : _vm._e(), _vm._v(" "), _c('div', {
      staticStyle: {
        "display": "none"
      },
      attrs: {
        "id": 'mecRecord_' + m.mecId
      }
    }, [_c('table', [_c('tr', [_c('td', {
      attrs: {
        "colspan": "2",
        "align": "center"
      }
    }, [_vm._v("【入场签到小票】")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("会员")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.memberName))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("签到时间")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.createTime))])]), _vm._v(" "), (m.checkoutTime) ? _c('tr', [_c('th', [_vm._v("签出时间")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.checkoutTime))])]) : _vm._e(), _vm._v(" "), (m.checkoutTime) ? _c('tr', [_c('th', [_vm._v("入场时长")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(parseInt((Date.new(m.checkoutTime).getTime() - Date.new(m.createTime).getTime()) / 60000)) + " 分钟")])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', [_vm._v("签到用卡")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.cardName))])]), _vm._v(" "), (m.paymentItemName) ? _c('tr', [_c('th', [_vm._v("消费项目")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.paymentItemName))])]) : _vm._e(), _vm._v(" "), (m.cardType > 1 && !_vm.g.Util.isEmpty(m.cardPayment)) ? _c('tr', [_c('th', [_vm._v("签到消费")]), _vm._v(" "), _c('td', [_vm._v("\n                      " + _vm._s(m.cardPayment) + "\n                      "), (m.cardType === 2) ? [_vm._v("次")] : (m.cardType === 3) ? [_vm._v("元")] : (m.cardType === 4) ? [_vm._v(_vm._s(_vm.g.Dict.CardTimeTypes[m.cardTimeType]))] : _vm._e()], 2)]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', [_vm._v("剩余额")]), _vm._v(" "), _c('td', [(m.cardType === 1) ? [_vm._v(_vm._s(Date.new(m.endDate).subtract(_vm.today)) + " 天")] : (m.cardType === 2) ? [_vm._v(_vm._s(m.currentTimes) + " 次")] : (m.cardType === 3) ? [_vm._v(_vm._s(m.currentAmount) + " 元")] : (m.cardType === 4) ? [_vm._v(_vm._s(m.currentTimes) + " " + _vm._s(_vm.g.Dict.CardTimeTypes[m.cardTimeType]))] : _vm._e()], 2)]), _vm._v(" "), (m.lockerId) ? _c('tr', [_c('th', [_vm._v("更衣柜号")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(m.lockerId))])]) : _vm._e()])])], 2)])
  })], 2)])]), _vm._v(" "), (_vm.totalCount && _vm.totalCount > 30) ? _c('div', {
    staticClass: "page-nav"
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
  })], 1) : _vm._e()], _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员基本信息",
      "width": "800",
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
  }, [(_vm.viewMemberDlg) ? [_c('member-base-info', {
    attrs: {
      "member-id": _vm.viewMemberId
    }
  })] : _vm._e()], 2)], 2)
},staticRenderFns: []}

/***/ }),

/***/ 641:
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

/***/ 642:
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

/***/ 643:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "not-print"
  }, [(_vm.sysMenus) ? _c('ul', {
    staticClass: "menu"
  }, _vm._l((_vm.menus), function(m) {
    return (_vm.sysMenus[m.menu] && !m.disable) ? _c('li', {
      class: {
        'menu-more': (_vm.menuCnt = _vm.count(_vm.sysMenus[m.menu])) > 1,
        'on': _vm.menu === m.menu
      }
    }, [_c('a', {
      on: {
        "click": function($event) {
          return _vm.linkTo(m.menu, _vm.menuCnt)
        }
      }
    }, [_c('i', {
      class: 'iconfont ' + m.icon
    }), _vm._v(_vm._s(m.name) + "\n\t\t\t\t "), (_vm.menuCnt > 1 && !_vm.sysMenus[m.menu]._hide_side_menu_) ? _c('icon', {
      staticClass: "toicon",
      attrs: {
        "type": "ios-arrow-forward"
      }
    }) : _vm._e()], 1), _vm._v(" "), (_vm.menuCnt > 1 && !_vm.sysMenus[m.menu]._hide_side_menu_) ? [_c('div', {
      staticClass: "menu-list"
    }, [_c('table', [_c('tr', [_c('td', [_c('ul', _vm._l((_vm.sysMenus[m.menu]), function(name, page) {
      return (!page.startsWith('_')) ? _c('li', [_c('a', {
        on: {
          "click": function($event) {
            return _vm.linkTo(page, 1)
          }
        }
      }, [_vm._v(_vm._s(name))])]) : _vm._e()
    }), 0)])])])])] : _vm._e()], 2) : _vm._e()
  }), 0) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 644:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "date-calculator"
  }, [_c('i-form', {
    staticStyle: {
      "width": "400px"
    },
    attrs: {
      "label-width": 85
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "beginDate",
      "label": "开始日期："
    }
  }, [_c('date-picker', {
    staticClass: "date-picker",
    attrs: {
      "type": "date",
      "format": "yyyy-MM-dd"
    },
    model: {
      value: (_vm.beginDate),
      callback: function($$v) {
        _vm.beginDate = $$v
      },
      expression: "beginDate"
    }
  })], 1), _vm._v(" "), _c('form-item', {
    attrs: {
      "prop": "endDate",
      "label": "结束日期："
    }
  }, [_c('date-picker', {
    staticClass: "date-picker",
    attrs: {
      "type": "date",
      "format": "yyyy-MM-dd"
    },
    model: {
      value: (_vm.endDate),
      callback: function($$v) {
        _vm.endDate = $$v
      },
      expression: "endDate"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "calc-result"
  }, [_c('i-button', {
    staticClass: "primary-btn",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.calcDays
    }
  }, [_vm._v("相差")]), _vm._v(" "), (_vm.differDays !== null) ? _c('span', [_c('b', [_vm._v(_vm._s(_vm.differDays))]), _vm._v(" 天")]) : _vm._e()], 1), _vm._v(" "), _c('i-form', {
    staticClass: "section",
    staticStyle: {
      "width": "400px"
    },
    attrs: {
      "label-width": 85
    }
  }, [_c('form-item', {
    attrs: {
      "prop": "datePlusMinus",
      "label": "开始日期："
    }
  }, [_c('div', [_c('date-picker', {
    staticClass: "date-picker",
    attrs: {
      "type": "date",
      "format": "yyyy-MM-dd"
    },
    model: {
      value: (_vm.pMBeginDate),
      callback: function($$v) {
        _vm.pMBeginDate = $$v
      },
      expression: "pMBeginDate"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "date-select"
  }, [_c('i-select', {
    staticClass: "date-sort",
    attrs: {
      "filterable": ""
    },
    model: {
      value: (_vm.prevNext),
      callback: function($$v) {
        _vm.prevNext = _vm._n($$v)
      },
      expression: "prevNext"
    }
  }, _vm._l((['往后', '往前']), function(s, idx) {
    return _c('i-option', {
      key: idx,
      attrs: {
        "value": idx,
        "label": s
      }
    }, [_c('span', [_vm._v(_vm._s(s))])])
  }), 1), _vm._v(" "), _c('input-int', {
    staticClass: "input",
    model: {
      value: (_vm.days),
      callback: function($$v) {
        _vm.days = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "days"
    }
  }), _vm._v(" "), _c('i-select', {
    staticClass: "date-sort",
    staticStyle: {
      "width": "50px"
    },
    attrs: {
      "filterable": ""
    },
    model: {
      value: (_vm.unit),
      callback: function($$v) {
        _vm.unit = _vm._n($$v)
      },
      expression: "unit"
    }
  }, _vm._l((['天', '周', '月']), function(s, idx) {
    return _c('i-option', {
      key: idx,
      attrs: {
        "value": idx,
        "label": s
      }
    }, [_c('span', [_vm._v(_vm._s(s))])])
  }), 1)], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "calc-result",
    staticStyle: {
      "margin-bottom": "0"
    }
  }, [_c('i-button', {
    staticClass: "primary-btn",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.calcDate
    }
  }, [_vm._v("等于")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.prevNextDate))])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 645:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.memberId || !_vm.g.Util.isEmptyArray(_vm.memberIds)) ? _c('div', [_c('i-select', {
    staticClass: "tag-sel",
    attrs: {
      "multiple": "",
      "placeholder": "请选择会员标签（可多选）"
    },
    model: {
      value: (_vm.memberTagList),
      callback: function($$v) {
        _vm.memberTagList = $$v
      },
      expression: "memberTagList"
    }
  }, _vm._l((_vm.shopTagList), function(t, idx) {
    return _c('i-option', {
      key: t.tagId,
      attrs: {
        "value": t.tagId
      }
    }, [_vm._v(_vm._s(t.tagName))])
  }), 1), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.updateMemberTag
    }
  }, [_vm._v("更新")])], 1) : _c('div', {
    staticClass: "center warning"
  }, [_vm._v("\n\t\t尚未选择更新标签的会员\n\t")]), _vm._v(" "), _c('div', {
    staticClass: "tag-conf"
  }, [_c('h3', [_vm._v("门店会员标签配置")]), _vm._v(" "), _c('div', {
    staticClass: "bd"
  }, [_c('div', [_c('i-input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "请输入需要新增的标签"
    },
    model: {
      value: (_vm.newTagName),
      callback: function($$v) {
        _vm.newTagName = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "newTagName"
    }
  }), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.addShopTag
    }
  }, [_vm._v("新增标签")])], 1), _vm._v(" "), _c('div', {
    staticClass: "tag-update"
  }, [_c('i-select', {
    staticClass: "input",
    attrs: {
      "placeholder": "请选择需要删除的标签"
    },
    model: {
      value: (_vm.selectTagIdx),
      callback: function($$v) {
        _vm.selectTagIdx = $$v
      },
      expression: "selectTagIdx"
    }
  }, _vm._l((_vm.shopTagList), function(t, idx) {
    return _c('i-option', {
      key: t.tagId,
      attrs: {
        "value": idx
      }
    }, [_vm._v(_vm._s(t.tagName))])
  }), 1), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.delShopTag
    }
  }, [_vm._v("删除标签")]), _vm._v(" "), _c('i-input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "请设置新的标签名称"
    },
    model: {
      value: (_vm.updateTagName),
      callback: function($$v) {
        _vm.updateTagName = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "updateTagName"
    }
  }), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.updateShopTag
    }
  }, [_vm._v("修改标签")])], 1)])])])
},staticRenderFns: []}

/***/ }),

/***/ 646:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-cust-entry-checkin g-dlg"
  }, [_c('table', {
    staticClass: "cust"
  }, [_c('tr', [_c('th', [_vm._v("客户姓名")]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "220"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.cust.name) + "\n      ")]), _vm._v(" "), _c('th', [_vm._v("客户性别")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.SexDesc[_vm.cust.sex]))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("客户级别")]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "220"
    }
  }, [_c('Rate', {
    staticStyle: {
      "font-size": "16px"
    },
    attrs: {
      "disabled": true
    },
    model: {
      value: (_vm.cust.custLevel),
      callback: function($$v) {
        _vm.$set(_vm.cust, "custLevel", $$v)
      },
      expression: "cust.custLevel"
    }
  })], 1), _vm._v(" "), _c('th', [_vm._v("客户类型")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.g.Dict.CustTypes[_vm.cust.custType]))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("手机号")]), _vm._v(" "), _c('td', [_c('b', {
    staticClass: "normal",
    attrs: {
      "title": _vm.g.Util.formatPhone(_vm.cust.phoneNo)
    }
  }, [_vm._v(_vm._s(_vm.cust.phoneNo))])]), _vm._v(" "), _c('th', [_vm._v("客户负责人")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.cust.ownerName))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("客户来源")]), _vm._v(" "), _c('td', [(_vm.cust.custSrcName) ? [_vm._v(_vm._s(_vm.cust.custSrcName))] : (_vm.cust.custSrc) ? _c('i', [_vm._v(_vm._s(_vm.g.Dict.CustSrcDict[_vm.cust.custSrc]))]) : _vm._e()], 2), _vm._v(" "), _c('th', [(_vm.cust.custType === 1) ? [_vm._v("到访时间")] : [_vm._v("预约到店时间")]], 2), _vm._v(" "), _c('td', [(_vm.cust.visitTime) ? _c('span', [_vm._v(_vm._s(_vm.cust.visitTime))]) : _vm._e()])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("提醒日期")]), _vm._v(" "), _c('td', [(_vm.cust.reminderDate) ? [_vm._v(_vm._s(_vm.g.Util.formatDate(_vm.cust.reminderDate)))] : _vm._e()], 2), _vm._v(" "), _c('th', [_vm._v("工作单位/职位")]), _vm._v(" "), _c('td', [(_vm.cust.orgName || _vm.cust.jobTitle) ? [_c('span', [_vm._v(_vm._s(_vm.cust.orgName))]), _vm._v(" / " + _vm._s(_vm.g.Dict.JobTitles[_vm.cust.jobTitle]) + "\n        ")] : _vm._e()], 2)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("单位类型")]), _vm._v(" "), _c('td', [(_vm.cust.orgTypes) ? [_vm._v(_vm._s(_vm.cust.orgTypeListStr))] : _vm._e()], 2), _vm._v(" "), _c('th', [_vm._v("单位地址")]), _vm._v(" "), _c('td', [(_vm.cust.orgAddr) ? [_vm._v(_vm._s(_vm.cust.orgAddr))] : _vm._e()], 2)]), _vm._v(" "), (_vm.cust.homeAddr) ? _c('tr', [_c('th', [_vm._v("家庭住址")]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.cust.homeAddr))])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', [_vm._v("微信号")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.cust.wxNo))]), _vm._v(" "), _c('th', [_vm._v("创建人")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.cust.createUname))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("创建时间")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.cust.createTime))]), _vm._v(" "), _c('th', [_vm._v("更新时间")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.cust.updateTime))])]), _vm._v(" "), (_vm.cust.remark) ? _c('tr', [_c('th', [_vm._v("备注")]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.cust.remark))])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "ticket"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_vm._m(1), _vm._v(" "), _vm._l((_vm.productOrderList), function(p) {
    return _c('tr', {
      key: p.orderId
    }, [_c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.selectOrderId),
        expression: "selectOrderId"
      }],
      staticClass: "single-radio",
      attrs: {
        "name": "ck",
        "type": "radio"
      },
      domProps: {
        "value": p.orderId,
        "checked": _vm._q(_vm.selectOrderId, p.orderId)
      },
      on: {
        "change": function($event) {
          _vm.selectOrderId = p.orderId
        }
      }
    })]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.productTitle))]), _vm._v(" "), _c('td', [_vm._v("￥" + _vm._s(p.amount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(p.transTime))]), _vm._v(" "), _c('td', [(p.expireBeginDate) ? _c('span', [_vm._v(_vm._s(p.expireBeginDate) + " ~ " + _vm._s(p.expireEndDate))]) : _vm._e()])])
  })], 2), _vm._v(" "), (!_vm.productOrderList || !_vm.productOrderList.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\n        暂无数据\n      ")]) : _vm._e(), _vm._v(" "), (_vm.productOrderList.length) ? _c('div', {
    staticClass: "right"
  }, [_c('i-button', {
    staticClass: "primary",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.handleSubmit()
      }
    }
  }, [_vm._v("签到")])], 1) : _vm._e()])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit l"
  }, [_vm._v("请选择签到入场券")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("选择")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [_vm._v("入场券")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("价格")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("购买时间")]), _vm._v(" "), _c('th', [_vm._v("使用期限")])])
}]}

/***/ }),

/***/ 647:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-head not-print"
  }, [_c('table', {
    attrs: {
      "width": "100%",
      "cellpadding": "0",
      "cellspacing": "0",
      "border": "0"
    }
  }, [_c('tr', [_c('td', {
    attrs: {
      "align": "left"
    }
  }, [_c('ul', {
    staticClass: "sys-menu"
  }, [(_vm.g.data.sys.isInShop) ? _c('li', {
    staticClass: "fav"
  }, [_c('Icon', {
    staticClass: "icon",
    attrs: {
      "type": "md-menu",
      "size": "26",
      "title": "常用功能"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "fav-bd"
  }, [_c('div', [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [(_vm.g.data.shop.hasCustModule) ? _c('td', {
    attrs: {
      "width": "70"
    }
  }, [_c('i-select', {
    staticClass: "query-target",
    model: {
      value: (_vm.queryTarget),
      callback: function($$v) {
        _vm.queryTarget = $$v
      },
      expression: "queryTarget"
    }
  }, [_c('i-option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("会员")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 2
    }
  }, [_vm._v("客户")])], 1)], 1) : _vm._e(), _vm._v(" "), _c('td', [(_vm.queryTarget === 1) ? _c('i-input', {
    staticClass: "search-box",
    attrs: {
      "type": "text",
      "icon": "ios-search",
      "placeholder": "会员姓名 | 手机号 | 卡号"
    },
    on: {
      "on-enter": _vm.queryMember,
      "on-click": _vm.queryMember
    },
    model: {
      value: (_vm.memberQueryVal),
      callback: function($$v) {
        _vm.memberQueryVal = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "memberQueryVal"
    }
  }) : (_vm.queryTarget === 2) ? _c('i-input', {
    staticClass: "search-box",
    attrs: {
      "type": "text",
      "icon": "ios-search",
      "placeholder": "客户姓名 | 手机号"
    },
    on: {
      "on-enter": _vm.queryCust,
      "on-click": _vm.queryCust
    },
    model: {
      value: (_vm.custQueryVal),
      callback: function($$v) {
        _vm.custQueryVal = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "custQueryVal"
    }
  }) : _vm._e()], 1)])])]), _vm._v(" "), _c('ul', {
    staticClass: "links"
  }, _vm._l((_vm.staffFavMenus), function(m) {
    return _c('li', {
      key: m.id
    }, [_c('a', {
      on: {
        "click": function($event) {
          return _vm.$router.push('/' + m.path)
        }
      }
    }, [_vm._v(_vm._s(m.name))])])
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "menu-conf"
  }, [_c('a', {
    on: {
      "click": function($event) {
        _vm.dateCalcDlg = true
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-calc"
  }), _vm._v(" 日期计算器")]), _vm._v(" "), _c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v(" "), _c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/staff-fav-menu')
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-shezhi"
  }), _vm._v(" 自定义菜单")])])])], 1) : _vm._e(), _vm._v(" "), _c('li', _vm._l((_vm.pageMenus), function(menuName, menuPage) {
    return (!menuPage.startsWith('_')) ? _c('a', {
      class: {
        'on': _vm.page === menuPage,
        'cool-link': _vm.page !== menuPage
      },
      on: {
        "click": function($event) {
          return _vm.toPage(menuPage)
        }
      }
    }, [_vm._v(_vm._s(menuName))]) : _vm._e()
  }), 0)]), _vm._v(" "), (_vm.page === 'shop-home') ? _c('div', {
    staticClass: "hot-menu"
  }, [_c('i', {
    staticClass: "iconfont icon-alert3 news"
  }), _vm._v(" "), (_vm.newsList && _vm.newsList.length > 0) ? _c('ul', {
    staticClass: "top-menu"
  }, [_vm._l((_vm.newsList), function(r) {
    return _c('li', [_c('a', {
      attrs: {
        "href": _vm.NEWS_BASE_URL + r.path,
        "target": "_blank"
      }
    }, [_vm._v(_vm._s(r.title))])])
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), (_vm.sysLeftDays < 10) ? _c('li', {
    staticClass: "exp-date notice",
    on: {
      "click": _vm.noticeSysDate
    }
  }, [_c('i', {
    staticClass: "iconfont icon-alert2"
  }), _vm._v(" "), (_vm.sysLeftDays > 0) ? [_vm._v("系统还有"), _c('b', {
    staticClass: "blink"
  }, [_vm._v(_vm._s(_vm.sysLeftDays))]), _vm._v("天到期")] : _c('b', [_vm._v("系统明天过期")])], 2) : _c('li', [_vm._m(1)])], 2) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right"
    }
  }, [_c('ul', {
    staticClass: "top-menu"
  }, [(_vm.isDisplayEntryCheckin) ? _c('li', {
    staticClass: "btns"
  }, [_c('ButtonGroup', {
    attrs: {
      "size": "small"
    }
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-log-in"
    },
    on: {
      "click": function($event) {
        return _vm.openEntryCheckinDlg()
      }
    }
  }, [_vm._v("入场签到")]), _vm._v(" "), _c('i-button', {
    staticStyle: {
      "background": "#fff"
    },
    on: {
      "click": function($event) {
        _vm.viewEntryCheckinListDlg = true
      }
    }
  }, [_vm._v("签到列表")])], 1)], 1) : _vm._e(), _vm._v(" "), _c('li', {
    staticClass: "user menu-more"
  }, [(_vm.g.data.user.isTenantOwner) ? [_c('i', {
    staticClass: "iconfont icon-vip orange"
  }), _vm._v(" "), _c('span', {
    staticClass: "uname"
  }, [_vm._v(_vm._s(_vm.user.uname))])] : (_vm.g.data.user.isShopOwner) ? [_c('i', {
    staticClass: "iconfont icon-manager orange"
  }), _vm._v(" "), _c('span', {
    staticClass: "uname"
  }, [_vm._v(_vm._s(_vm.user.uname))]), _vm._v(" "), _c('span', {
    staticClass: "gray"
  }, [_vm._v("（店长）")])] : [_c('i', {
    staticClass: "iconfont icon-people1"
  }), _vm._v(" "), _c('span', {
    staticClass: "uname"
  }, [_vm._v(_vm._s(_vm.user.uname))])], _vm._v(" "), _c('icon', {
    staticClass: "dropdown-icon",
    attrs: {
      "type": "ios-arrow-down"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "menu-list",
    staticStyle: {
      "right": "3px"
    }
  }, [_c('ul', [(_vm.g.data.shop.shopName) ? _c('li', [_c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/recharge')
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-payment"
  }), _vm._v("系统支付")])]) : _vm._e(), _vm._v(" "), _c('li', [_c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/user-pwd-set')
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-password"
  }), _vm._v("修改密码")])]), _vm._v(" "), _c('li', [_c('a', {
    on: {
      "click": _vm.logout
    }
  }, [_c('icon', {
    attrs: {
      "type": "md-exit"
    }
  }), _vm._v("退出登录\n                  ")], 1)])])])], 2)])])])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员入场签到",
      "width": "860",
      "styles": {
        top: '10px'
      },
      "closable": true,
      "mask-closable": false
    },
    model: {
      value: (_vm.viewEntryCheckinDlg),
      callback: function($$v) {
        _vm.viewEntryCheckinDlg = $$v
      },
      expression: "viewEntryCheckinDlg"
    }
  }, [(_vm.viewEntryCheckinDlg) ? [_c('member-entry-checkin', {
    attrs: {
      "after-submit": _vm.afterSubmitCheckin,
      "on-close": _vm.closeEntryCheckinDlg
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })] : _vm._e()], 2), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "今日入场签到会员",
      "width": "1080",
      "styles": {
        top: '10px'
      },
      "closable": true
    },
    model: {
      value: (_vm.viewEntryCheckinListDlg),
      callback: function($$v) {
        _vm.viewEntryCheckinListDlg = $$v
      },
      expression: "viewEntryCheckinListDlg"
    }
  }, [(_vm.viewEntryCheckinListDlg) ? [_c('today-entry-checkin-list'), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    staticStyle: {
      "width": "150px"
    },
    on: {
      "click": function($event) {
        _vm.viewEntryCheckinListDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)] : _vm._e()], 2), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "会员基本信息",
      "width": "800",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": "按Esc键或点击其它地方可关闭"
    },
    model: {
      value: (_vm.viewMemberDlg),
      callback: function($$v) {
        _vm.viewMemberDlg = $$v
      },
      expression: "viewMemberDlg"
    }
  }, [(_vm.viewMemberId) ? _c('member-base-info', {
    attrs: {
      "member-id": _vm.viewMemberId
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "日期计算器",
      "width": "400",
      "styles": {
        top: '10px'
      },
      "ok-text": "",
      "cancel-text": ""
    },
    model: {
      value: (_vm.dateCalcDlg),
      callback: function($$v) {
        _vm.dateCalcDlg = $$v
      },
      expression: "dateCalcDlg"
    }
  }, [(_vm.dateCalcDlg) ? _c('date-calc') : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 1), _vm._v(" "), _c('modal', {
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
  return _c('li', {
    staticClass: "menu-more-mach"
  }, [_c('span', {
    staticClass: "tit"
  }, [_c('i', {
    staticClass: "iconfont icon-ai"
  }), _vm._v("配套智能设备")]), _vm._v("\n              （\n              "), _c('a', {
    staticStyle: {
      "padding-left": "0"
    },
    attrs: {
      "href": "http://www.jzongguan.com/face-recognition/index.html",
      "target": "_blank"
    }
  }, [_vm._v("人脸识别")]), _vm._v(" •\n              "), _c('a', {
    attrs: {
      "href": "http://www.jzongguan.com/hrs-intro/heartRateDevice.html",
      "target": "_blank"
    }
  }, [_vm._v("心率设备")]), _vm._v(" •\n              "), _c('a', {
    attrs: {
      "href": "http://www.jzongguan.com/locker-intro/index.html",
      "target": "_blank"
    }
  }, [_vm._v("智能柜")]), _vm._v(" •\n              "), _c('a', {
    attrs: {
      "href": "/static/body-test/index.html",
      "target": "_blank"
    }
  }, [_vm._v("体测仪")]), _vm._v(" •\n              "), _c('a', {
    attrs: {
      "href": "http://www.jzongguan.com/devices.html",
      "target": "_blank"
    }
  }, [_vm._v("更多")]), _vm._v("\n              ）\n            ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    attrs: {
      "href": "https://note.youdao.com/s/PePdJPfv",
      "target": "_blank"
    }
  }, [_c('span', {
    staticClass: "orangered"
  }, [_vm._v("分期月付卡")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/img/new.gif"
    }
  })])
}]}

/***/ }),

/***/ 648:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cust-entry-checkin-list"
  }, [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', [(!_vm.g.Util.isEmpty(_vm.cecCount)) ? _c('div', {
    staticClass: "sum-count"
  }, [_vm._v("\n          共查询到 "), _c('b', [_vm._v(_vm._s(_vm.cecCount))]), _vm._v(" 条记录"), (_vm.cecCount) ? [_vm._v("（ "), _c('b', [_vm._v(_vm._s(_vm.cecCount))]), _vm._v(" 名客户 ）")] : _vm._e(), _vm._v(" "), _c('a', {
    staticClass: "l10",
    on: {
      "click": function($event) {
        return _vm.queryCustCheckin(_vm.queryCecPage)
      }
    }
  }, [_vm._v("刷新")])], 2) : _vm._e()]), _vm._v(" "), _c('td', {
    attrs: {
      "valign": "top",
      "align": "right"
    }
  }, [_c('i-input', {
    staticClass: "input",
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "text",
      "icon": "ios-search",
      "placeholder": "客户姓名（模糊查） | 手机号"
    },
    on: {
      "on-enter": function($event) {
        return _vm.queryCustCheckin(null)
      }
    },
    model: {
      value: (_vm.cecQuery.custName),
      callback: function($$v) {
        _vm.$set(_vm.cecQuery, "custName", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "cecQuery.custName"
    }
  })], 1), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right",
      "valign": "top",
      "width": "85"
    }
  }, [_c('i-button', {
    attrs: {
      "icon": "ios-cloud-download-outline"
    },
    on: {
      "click": _vm.exportCecList
    }
  }, [_vm._v("导出")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "mytbl p10"
  }, [(_vm.cecCount) ? _c('table', [_vm._m(0), _vm._v(" "), _vm._l((_vm.cecList), function(c) {
    return _c('tr', {
      key: c.cecId
    }, [_c('td', {
      attrs: {
        "width": "100"
      }
    }, [_vm._v(_vm._s(c.custName))]), _vm._v(" "), _c('td', {
      attrs: {
        "width": "100"
      }
    }, [_vm._v(_vm._s(_vm.g.Dict.SexDesc[c.custSex]))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "180px"
      }
    }, [_vm._v(_vm._s(c.productTitle))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "180px"
      }
    }, [_vm._v("￥" + _vm._s(c.amount))]), _vm._v(" "), _c('td', {
      attrs: {
        "width": "90"
      }
    }, [_vm._v(_vm._s(c.createUname))]), _vm._v(" "), _c('td', {
      attrs: {
        "width": "155"
      }
    }, [_vm._v(_vm._s(c.createTime))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "90px"
      }
    }, [_c('a', {
      on: {
        "click": function($event) {
          return _vm.custCheckinCancel(c.cecId)
        }
      }
    }, [_vm._v("取消")])])])
  })], 2) : _vm._e(), _vm._v(" "), (_vm.cecCount && _vm.cecCount > 1) ? _c('div', {
    staticClass: "page-nav"
  }, [_c('page', {
    attrs: {
      "total": _vm.cecCount,
      "page-size": 30,
      "show-total": "",
      "show-elevator": ""
    },
    on: {
      "on-change": _vm.queryCustCheckin
    }
  })], 1) : _vm._e(), _vm._v(" "), (!_vm.cecCount) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("暂无数据")]) : _vm._e()]), _vm._v(" "), _c('modal', {
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
  }, [_vm._v("提示")]), _vm._v("：每次最多导出 600 条记录 "), _c('br'), _vm._v("如要导出下一个600条，请将当前页数增加20页后再导出")])] : _c('span', [_vm._v("正在查询并导出，请稍候...")])], 2)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("客户")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("性别")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "180px"
    }
  }, [_vm._v("签到入场券")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "110"
    }
  }, [_vm._v("签到消费金额")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("签到操作人")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "155"
    }
  }, [_vm._v("签到时间")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "min-width": "90px"
    }
  }, [_vm._v("操作")])])
}]}

/***/ }),

/***/ 649:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "take-photo-type"
  }, [_c('RadioGroup', {
    on: {
      "on-change": _vm.changePhotoType
    },
    model: {
      value: (_vm.photo.takePhotoType),
      callback: function($$v) {
        _vm.$set(_vm.photo, "takePhotoType", $$v)
      },
      expression: "photo.takePhotoType"
    }
  }, [_c('Radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("从电脑上选择")]), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("用摄像头拍摄")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "take-photo"
  }, [_c('table', {
    staticClass: "mytbl"
  }, [_c('tr', [_c('td', {
    staticClass: "center"
  }, [(_vm.photo.takePhotoType === 1) ? [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "beforeUpload": _vm.beforeUpload,
      "max-size": _vm.imgUpload.maxSize,
      "show-thumb": false
    }
  }, [_c('i-button', {
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击选择照片")])], 1)] : [_c('video', {
    ref: "video",
    staticStyle: {
      "background": "#ddd"
    },
    attrs: {
      "width": "310",
      "height": "232.5",
      "autoplay": ""
    }
  }), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.takePhoto
    }
  }, [_vm._v("点击拍照")])]], 2), _vm._v(" "), _c('td', {
    staticClass: "center"
  }, [_c('canvas', {
    ref: "canvas",
    staticStyle: {
      "background": "#ddd"
    },
    attrs: {
      "width": "310",
      "height": _vm.canvasHeight
    }
  }), _vm._v(" "), _c('canvas', {
    ref: "oldCanvasRefs",
    staticStyle: {
      "background": "#ddd",
      "display": "none"
    },
    attrs: {
      "width": _vm.canvasWidth * _vm.times,
      "height": _vm.canvasOldHeight * _vm.times
    }
  }), _vm._v(" "), _c('canvas', {
    ref: "newCanvasRefs",
    staticStyle: {
      "background": "#ddd",
      "display": "none"
    },
    attrs: {
      "width": _vm.canvasWidth * _vm.times,
      "height": _vm.canvasHeight * _vm.times
    }
  }), _vm._v(" "), (_vm.photo.hasTakePhoto) ? [_c('i-button', {
    on: {
      "click": _vm.editPhotoImg
    }
  }, [_vm._v("编辑照片")]), _vm._v(" "), _c('i-button', {
    on: {
      "click": _vm.uploadPhotoImg
    }
  }, [_vm._v("上传照片")])] : _c('i-button', {
    attrs: {
      "disabled": true
    }
  }, [_vm._v("上传照片")])], 2)])])]), _vm._v(" "), _c('Modal', {
    staticClass: "qd-cropper-dlg",
    attrs: {
      "title": "编辑照片",
      "width": "700",
      "styles": {
        top: '10px'
      },
      "footer-hide": "",
      "mask-closable": false
    },
    model: {
      value: (_vm.cropperDlg),
      callback: function($$v) {
        _vm.cropperDlg = $$v
      },
      expression: "cropperDlg"
    }
  }, [_c('div', {
    staticClass: "img"
  }, [_c('img', {
    ref: "cropperRefs",
    attrs: {
      "id": "image",
      "src": _vm.imgUrl
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "footer-btns"
  }, [_c('i-button', {
    staticClass: "item over",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.submitFunc()
      }
    }
  }, [_vm._v("确定")]), _vm._v(" "), _c('i-button', {
    staticClass: "item close",
    on: {
      "click": function($event) {
        return _vm.closeFunc()
      }
    }
  }, [_vm._v("取消")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 650:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "-style-"
  }, [(_vm.canCreate) ? _c('section', {
    staticClass: "add-sec"
  }, [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('th', {
    staticClass: "required",
    attrs: {
      "width": "90"
    }
  }, [_vm._v("跟进方式")]), _vm._v(" "), _c('td', [_c('radio-group', {
    attrs: {
      "type": "button"
    },
    model: {
      value: (_vm.custFollow.followType),
      callback: function($$v) {
        _vm.$set(_vm.custFollow, "followType", $$v)
      },
      expression: "custFollow.followType"
    }
  }, _vm._l((_vm.g.Dict.FollowTypes), function(name, val) {
    return (val > 0) ? _c('radio', {
      key: val,
      attrs: {
        "label": val
      }
    }, [_vm._v(_vm._s(name))]) : _vm._e()
  }), 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("提醒日期")]), _vm._v(" "), _c('td', [_c('date-picker', {
    staticClass: "single-btn",
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
  }, [_vm._v("（设置提醒日期，方便下次跟进快速找到此客户）")])], 1)]), _vm._v(" "), (_vm.cust.custType !== 1) ? _c('tr', [_c('th', [_vm._v("预约到店时间")]), _vm._v(" "), _c('td', [_c('date-picker', {
    staticClass: "single-btn",
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
  })], 1)]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', [_vm._v("图片附件")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "padding": "6px 0 8px 0"
    }
  }, [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccess,
      "on-remove": _vm.handleRemoveImg,
      "multiple": true,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultList
    }
  }, [_c('i-button', {
    staticClass: "single-btn",
    attrs: {
      "size": "small",
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传跟进图片")]), _vm._v("\n\t\t\t\t\t\t  "), _c('span', {
    staticClass: "gray"
  }, [_vm._v("（支持的图片格式： jpg、jpeg、png、gif）")])], 1)], 1)]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("客户级别")]), _vm._v(" "), _c('td', [_c('radio-group', {
    attrs: {
      "type": "button"
    },
    model: {
      value: (_vm.cust.custLevel),
      callback: function($$v) {
        _vm.$set(_vm.cust, "custLevel", $$v)
      },
      expression: "cust.custLevel"
    }
  }, _vm._l((_vm.g.Dict.CustLevels), function(name, val) {
    return (val > 0) ? _c('radio', {
      key: val,
      attrs: {
        "label": val
      }
    }, [_vm._v(_vm._s(val) + "星（" + _vm._s(name) + "）")]) : _vm._e()
  }), 1)], 1)]), _vm._v(" "), (_vm.resultTypeList && _vm.resultTypeList.length) ? _c('tr', [_c('th', {
    staticClass: "required"
  }, [_vm._v("跟进结果")]), _vm._v(" "), _c('td', {
    staticClass: "result-types"
  }, [_c('radio-group', {
    model: {
      value: (_vm.custFollow.resultType),
      callback: function($$v) {
        _vm.$set(_vm.custFollow, "resultType", $$v)
      },
      expression: "custFollow.resultType"
    }
  }, _vm._l((_vm.resultTypeList), function(r) {
    return _c('radio', {
      key: r.typeId,
      attrs: {
        "label": r.typeId
      }
    }, [_vm._v(_vm._s(r.typeName))])
  }), 1)], 1)]) : _vm._e(), _vm._v(" "), _c('tr', [_c('th', [_vm._v("跟进备注")]), _vm._v(" "), _c('td', [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 4
    },
    model: {
      value: (_vm.custFollow.result),
      callback: function($$v) {
        _vm.$set(_vm.custFollow, "result", (typeof $$v === 'string' ? $$v.trim() : $$v))
      },
      expression: "custFollow.result"
    }
  })], 1)]), _vm._v(" "), _c('tr', {
    staticClass: "submit"
  }, [_c('th'), _vm._v(" "), _c('td', [_c('i-button', {
    staticStyle: {
      "width": "122px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.createCustFollow
    }
  }, [_vm._v("提交")])], 1)])])]) : _vm._e(), _vm._v(" "), (_vm.custFollowList && _vm.custFollowList.length > 0) ? _c('section', {
    staticClass: "follow-list"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("客户跟进记录 （" + _vm._s(_vm.custFollowList.length) + " 条）")]), _vm._v(" "), _c('Timeline', _vm._l((_vm.custFollowList), function(f, idx) {
    return _c('TimelineItem', {
      key: idx
    }, [_c('span', {
      staticClass: "time"
    }, [_vm._v(_vm._s(f.createTime))]), _vm._v(" "), _c('span', {
      staticClass: "name"
    }, [_vm._v(_vm._s(f.createUname))]), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_c('span', {
      class: 'ftype ftype-' + f.followType
    }, [_vm._v(_vm._s(_vm.g.Dict.FollowTypes[f.followType]))]), _vm._v(" "), (f.resultType) ? _c('span', {
      staticClass: "ret-type"
    }, [_vm._v("[" + _vm._s(_vm.resultTypeMap[f.resultType]) + "]")]) : _vm._e(), _vm._v("\n\t\t\t\t\t" + _vm._s(f.result) + "\n\t\t\t\t\t"), (f.pics) ? _c('div', {
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
  }), 1)], 1) : (!_vm.custFollowList) ? _c('div', {
    staticClass: "gray center"
  }, [_vm._v("正在加载跟进记录...")]) : _vm._e(), _vm._v(" "), (_vm.custFollowList && !_vm.custFollowList.length) ? _c('h3', {
    staticClass: "none",
    staticStyle: {
      "padding": "10px 0 0 0"
    }
  }, [_vm._v("暂无跟进记录")]) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 651:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', [_c('div', {
    staticClass: "-optbar"
  }, [_c('div', {
    staticClass: "l"
  }, [_c('i-button', {
    attrs: {
      "type": "primary",
      "icon": "md-add"
    },
    on: {
      "click": _vm.showCreateFollowDlg
    }
  }, [_vm._v("添加跟进记录")])], 1), _vm._v(" "), _c('div', {
    staticClass: "r gray"
  }, [_vm._v("\n\t\t\t\t共有 "), _c('b', [_vm._v(_vm._s(_vm.memberFollowList.length))]), _vm._v(" 条跟进记录\n\t\t\t")])]), _vm._v(" "), _c('ul', {
    staticClass: "-items"
  }, _vm._l((_vm.memberFollowList), function(r) {
    return _c('li', {
      key: r.mfId
    }, [_c('div', {
      staticClass: "-hd"
    }, [_c('b', [_vm._v("跟进人：")]), _vm._v(" " + _vm._s(r.createUname) + "\n\t\t\t\t\t"), _c('b', {
      staticClass: "-spt"
    }, [_vm._v("跟进时间：")]), _vm._v(" " + _vm._s(r.createTime) + "\n\t\t\t\t")]), _vm._v(" "), _c('div', {
      staticClass: "-bd"
    }, [_vm._v(_vm._s(r.content))]), _vm._v(" "), (r.pics) ? _c('div', {
      staticClass: "pics"
    }, _vm._l((r.pics.split(',')), function(picName) {
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
    }), 0) : _vm._e()])
  }), 0)]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "添加跟进记录",
      "width": "500"
    },
    model: {
      value: (_vm.showFollowDlg),
      callback: function($$v) {
        _vm.showFollowDlg = $$v
      },
      expression: "showFollowDlg"
    }
  }, [_c('div', [_c('img-upload', {
    attrs: {
      "action": _vm.imgUpload.action,
      "img-max-width": _vm.imgUpload.imgMaxWidth,
      "on-success": _vm.handleImgUploadSuccess,
      "on-remove": _vm.handleRemoveImg,
      "multiple": true,
      "max-size": _vm.imgUpload.maxSize,
      "default-file-list": _vm.imgUpload.defaultList
    }
  }, [_c('i-button', {
    staticClass: "single-btn",
    attrs: {
      "size": "small",
      "type": "default",
      "icon": "ios-cloud-upload-outline"
    }
  }, [_vm._v("点击上传跟进图片")]), _vm._v("\n\t\t\t\t  "), _c('span', {
    staticClass: "gray"
  }, [_vm._v("（支持的图片格式： jpg、jpeg、png、gif）")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "mt20"
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "rows": 6,
      "placeholder": "请认真填写跟进记录"
    },
    model: {
      value: (_vm.newFollowContent),
      callback: function($$v) {
        _vm.newFollowContent = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "newFollowContent"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "-submit",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.handleCreateFollow
    }
  }, [_vm._v("提交")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 652:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view', {
    key: _vm.$route.path
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 653:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "entry-checkin g-dlg"
  }, [_c('section', {
    staticClass: "query-zone"
  }, [_c('i-select', {
    staticClass: "cust-query",
    attrs: {
      "filterable": ""
    },
    model: {
      value: (_vm.custType),
      callback: function($$v) {
        _vm.custType = $$v
      },
      expression: "custType"
    }
  }, [_c('i-option', {
    attrs: {
      "value": 1
    }
  }, [_vm._v("会员")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": 2
    }
  }, [_vm._v("客户")])], 1), _vm._v(" "), _c('input', {
    directives: [{
      name: "focus",
      rawName: "v-focus"
    }, {
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.queryNo),
      expression: "queryNo",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "query-input",
    attrs: {
      "type": "text",
      "title": "",
      "placeholder": _vm.custType == 1 ? '会员手机号  |  刷会员卡  |  姓名（可模糊查询）' : '手机号  |  姓名（可模糊查询）'
    },
    domProps: {
      "value": (_vm.queryNo)
    },
    on: {
      "keyup": function($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.doQueryAndCheckin()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.queryNo = $event.target.value.trim()
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  }), _vm._v(" "), (_vm.checkinCardCnt === 1) ? _c('div', {
    staticClass: "queryBoxTips"
  }, [_vm._v("按回车键可签到")]) : _vm._e()], 1), _vm._v(" "), (_vm.queryError) ? _c('div', {
    staticClass: "err"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-sad-outline"
    }
  }), _vm._v(" " + _vm._s(_vm.queryError) + "\n    ")], 1) : _vm._e(), _vm._v(" "), (_vm.memberList && _vm.memberList.length > 0 && _vm.custType == 1) ? _c('div', {
    staticClass: "memb-list"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("请选择一个会员：")]), _vm._v(" "), _c('ul', _vm._l((_vm.memberList), function(m) {
    return _c('li', {
      on: {
        "click": function($event) {
          return _vm.selectMember(m)
        }
      }
    }, [_c('span', {
      staticClass: "name"
    }, [_vm._v(_vm._s(m.name))]), _vm._v(" (" + _vm._s(_vm.g.Dict.Sex[m.sex]) + ")\n          "), _c('div', {
      staticClass: "p10"
    }, [_vm._v("手机号*******" + _vm._s(m.phoneSuffix))])])
  }), 0)]) : _vm._e(), _vm._v(" "), (_vm.custList && _vm.custList.length > 0 && _vm.custType == 2) ? _c('div', {
    staticClass: "memb-list"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("请选择一个客户：")]), _vm._v(" "), _c('ul', _vm._l((_vm.custList), function(m) {
    return _c('li', {
      on: {
        "click": function($event) {
          return _vm.selectMember(m)
        }
      }
    }, [_c('span', {
      staticClass: "name"
    }, [_vm._v(_vm._s(m.name))]), _vm._v(" (" + _vm._s(_vm.g.Dict.Sex[m.sex]) + ")\n          "), _c('div', {
      staticClass: "p10"
    }, [_vm._v("手机号*******" + _vm._s(m.phoneSuffix))])])
  }), 0)]) : _vm._e(), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "上传会员头像照",
      "width": "700",
      "styles": {
        top: '10px'
      }
    },
    model: {
      value: (_vm.photoDlgView),
      callback: function($$v) {
        _vm.photoDlgView = $$v
      },
      expression: "photoDlgView"
    }
  }, [(_vm.member) ? _c('member-avatar-conf', {
    attrs: {
      "member-id": _vm.member.memberId,
      "after-upload": _vm.afterUploadMemberAvatar
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  })], 1), _vm._v(" "), _c('Modal', {
    attrs: {
      "title": "会员卡请假记录",
      "width": "650",
      "styles": {
        top: '10px'
      },
      "ok-text": "关闭",
      "cancel-text": ""
    },
    model: {
      value: (_vm.cardVacationQueryDlg),
      callback: function($$v) {
        _vm.cardVacationQueryDlg = $$v
      },
      expression: "cardVacationQueryDlg"
    }
  }, [(_vm.cardVacationQueryDlg) ? [_c('member-card-vacation-query', {
    attrs: {
      "mc-id": _vm.selectMcId
    }
  })] : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "center",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('i-button', {
    staticClass: "long-btn",
    on: {
      "click": function($event) {
        _vm.cardVacationQueryDlg = false
      }
    }
  }, [_vm._v("关闭")])], 1)], 2), _vm._v(" "), (_vm.member || _vm.cust) ? [(_vm.member) ? [_c('div', {
    staticClass: "member"
  }, [_c('table', [_c('tr', [_c('td', {
    staticClass: "photo",
    attrs: {
      "valign": "top",
      "width": "200"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.g.Util.getImgUrl(_vm.member.avatarPathname, 500, 500, 'EEEEEE')
    }
  })]), _vm._v(" "), _c('td', {
    staticStyle: {
      "padding-left": "20px"
    },
    attrs: {
      "valign": "top"
    }
  }, [_c('div', {
    staticClass: "hd"
  }, [_c('a', {
    staticClass: "name",
    on: {
      "click": function($event) {
        return _vm.$router.push('/member-info/' + _vm.member.memberId)
      }
    }
  }, [_vm._v(_vm._s(_vm.member.name))]), _vm._v(" " + _vm._s(_vm.g.Dict.SexDesc[_vm.member.sex]) + "\n                  "), _c('span', {
    staticClass: "create-time"
  }, [_vm._v(_vm._s(_vm.g.Util.formatDate(_vm.member.regDate)) + " 注册")]), _vm._v(" "), (!_vm.hasInitPhoto && _vm.isShopMember && (_vm.memberCreatePermit || _vm.advMemberEditable || _vm.firstUploadMemberHeadPermit)) ? [_c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _c('a', {
    on: {
      "click": function($event) {
        _vm.photoDlgView = true
      }
    }
  }, [_vm._v("上传会员照")])] : _vm._e()], 2), _vm._v(" "), _c('table', [_c('tr', [_c('td', {
    attrs: {
      "width": "240"
    }
  }, [_c('ul', {
    staticClass: "detail"
  }, [_c('li', [_c('label', [_vm._v("教练：")]), (_vm.member.coachName) ? [_vm._v(_vm._s(_vm.member.coachName))] : _c('i', {
    staticClass: "gray"
  }, [_vm._v("尚未设置")])], 2), _vm._v(" "), _c('li', [_c('label', [_vm._v("销售：")]), (_vm.member.salesName) ? [_vm._v(_vm._s(_vm.member.salesName))] : _c('i', {
    staticClass: "gray"
  }, [_vm._v("尚未设置")])], 2), _vm._v(" "), _c('li', [_c('label', [_vm._v("会籍：")]), (_vm.member.advisorName) ? [_vm._v(_vm._s(_vm.member.advisorName))] : _c('i', {
    staticClass: "gray"
  }, [_vm._v("尚未设置")])], 2), _vm._v(" "), _c('li', [_c('label', [_vm._v("积分：")]), _vm._v(_vm._s(_vm.member.points) + " "), (_vm.member.points !== _vm.member.pointsSum) ? [_c('span', {
    staticClass: "gray"
  }, [_vm._v(" / ")]), _vm._v(_vm._s(_vm.member.pointsSum))] : _vm._e(), _vm._v(" "), (_vm.member.pointsTitle) ? _c('span', {
    staticClass: "points-tit"
  }, [_vm._v("（" + _vm._s(_vm.member.pointsTitle) + "）")]) : _vm._e()], 2)])]), _vm._v(" "), _c('td', {
    attrs: {
      "valign": "top"
    }
  }, [_c('ul', {
    staticClass: "detail"
  }, [_c('li', [_c('label', [_vm._v("入场签到：")]), _vm._v(_vm._s(_vm.memberEntryCheckinStat.count) + " 次")]), _vm._v(" "), _c('li', [_c('label', [_vm._v("上次入场签到：")]), (_vm.memberEntryCheckinStat.latestEntryCheckinTime) ? [_vm._v("\n                            " + _vm._s(_vm.memberEntryCheckinStat.latestEntryCheckinTime) + "\n                            "), (_vm.memberEntryCheckinStat.lastEntryCheckinDays) ? _c('span', {
    staticClass: "green"
  }, [_vm._v("（" + _vm._s(_vm.memberEntryCheckinStat.lastEntryCheckinDays) + " 天前）")]) : _vm._e()] : _c('i', {
    staticClass: "gray"
  }, [_vm._v("还未发生")])], 2), _vm._v(" "), _c('li', [_c('label', [_vm._v("卡号")]), _vm._v("：" + _vm._s(_vm.member.cardNo) + "\n                          "), (_vm.moreCardNoList) ? [(_vm.member.cardNo) ? [_vm._v("、")] : _vm._e(), _vm._v(_vm._s(_vm.moreCardNoList.join('、')))] : _vm._e()], 2), _vm._v(" "), _c('li', {
    staticClass: "remark"
  }, [_c('label', [_vm._v("会员备注：")]), (_vm.member.remark) ? [_vm._v(_vm._s(_vm.member.remark))] : _c('i', {
    staticClass: "gray"
  }, [_vm._v("尚未填写")])], 2)])])])]), _vm._v(" "), (_vm.member.shopName && _vm.member.shopName !== _vm.g.data.shop.shopName) ? _c('div', {
    staticClass: "ori-shop"
  }, [_vm._v("\n                  原属门店： "), _c('b', [_vm._v(_vm._s(_vm.member.shopName))]), _vm._v(" "), (_vm.srcMember) ? [(_vm.srcMember.salesName) ? [_c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v("销售： " + _vm._s(_vm.srcMember.salesName))] : _vm._e(), _vm._v(" "), (_vm.srcMember.coachName) ? [_c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v("教练： " + _vm._s(_vm.srcMember.coachName))] : _vm._e(), _vm._v(" "), (_vm.srcMember.advisorName) ? [_c('span', {
    staticClass: "spt"
  }, [_vm._v("|")]), _vm._v("会籍： " + _vm._s(_vm.srcMember.advisorName))] : _vm._e()] : _vm._e()], 2) : _vm._e()])]), _vm._v(" "), (_vm.member.morePhotos) ? _c('tr', [_c('td', {
    staticClass: "more-photos",
    attrs: {
      "colspan": "2"
    }
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._v("更多会员照：")]), _vm._v(" "), _vm._l((_vm.member.morePhotos.split(',')), function(p) {
    return _c('img', {
      attrs: {
        "src": _vm.g.Util.getImgUrl(p, 500, 500, 'dddddd')
      }
    })
  })], 2)]) : _vm._e()])]), _vm._v(" "), (_vm.entryChargeItemList && _vm.entryChargeItemList.length) ? _c('section', {
    staticStyle: {
      "padding": "5px 0 0 0"
    }
  }, [_vm._v("\n          计费项目：\n          "), _c('RadioGroup', {
    on: {
      "on-change": _vm.changeEntryChargeItemId
    },
    model: {
      value: (_vm.entryChargeItemId),
      callback: function($$v) {
        _vm.entryChargeItemId = $$v
      },
      expression: "entryChargeItemId"
    }
  }, _vm._l((_vm.entryChargeItemList), function(i) {
    return _c('Radio', {
      key: i.itemId,
      attrs: {
        "label": i.itemId
      }
    }, [_vm._v(_vm._s(i.itemName))])
  }), 1)], 1) : _vm._e(), _vm._v(" "), _c('section', {
    staticClass: "cards"
  }, [_c('div', {
    staticClass: "hd"
  }, [_c('div', {
    staticClass: "tit l"
  }, [_vm._v("请选择签到计费卡")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('checkbox', {
    model: {
      value: (_vm.hideInvalidCards),
      callback: function($$v) {
        _vm.hideInvalidCards = $$v
      },
      expression: "hideInvalidCards"
    }
  }, [_vm._v("隐藏无效卡")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "mytbl"
  }, [_c('table', [_c('tr', [_c('th', {
    attrs: {
      "width": "50"
    }
  }, [_vm._v("选择")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "120"
    }
  }, [(_vm.member && _vm.member.memberId) ? _c('a', {
    attrs: {
      "target": "_blank",
      "href": '#/member-card-list/' + _vm.member.memberId
    }
  }, [_vm._v("会员卡")]) : [_vm._v("会员卡")]], 2), _vm._v(" "), _c('th', {
    attrs: {
      "width": "85"
    }
  }, [_vm._v("余额")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("入场签到计费")]), _vm._v(" "), _c('th', [_vm._v("备注")])]), _vm._v(" "), _vm._l((_vm.memberCardList), function(c, idx) {
    return (c.canEntryCheckin || !_vm.hideInvalidCards) ? _c('tr', [_c('td', [(c.canEntryCheckin) ? _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.selectCardIndex),
        expression: "selectCardIndex"
      }],
      staticClass: "single-radio",
      attrs: {
        "name": "ck",
        "type": "radio"
      },
      domProps: {
        "value": idx,
        "checked": _vm._q(_vm.selectCardIndex, idx)
      },
      on: {
        "change": function($event) {
          _vm.selectCardIndex = idx
        }
      }
    }) : _vm._e()]), _vm._v(" "), _c('td', [_vm._v(_vm._s(c.cardName))]), _vm._v(" "), _c('td', [(c.cardType === 1) ? [(c.beginDate) ? [_vm._v("\n                      " + _vm._s(Date.new(c.endDate).subtract(_vm.today)) + " 天\n                    ")] : (c.canSelect) ? [_vm._v("尚未使用")] : _vm._e()] : (c.cardType === 2) ? [_vm._v("\n                    " + _vm._s(c.currentTimes) + " 次\n                  ")] : (c.cardType === 3) ? [_vm._v("\n                    " + _vm._s(c.currentAmount) + " 元\n                  ")] : (c.cardType === 4) ? [_vm._v("\n                    " + _vm._s(c.currentTimes) + " " + _vm._s(_vm.g.Dict.CardTimeTypes[c.cardTimeType]) + "\n                  ")] : _vm._e()], 2), _vm._v(" "), _c('td', [(c.status !== 0) ? _c('span', {
      staticClass: "red"
    }, [_vm._v("已" + _vm._s(_vm.g.Dict.MemberCardStatus[c.status]) + "，不可使用")]) : (c.canEntryCheckin) ? [(c.chargeByHourEnable) ? [_vm._v("\n                      每小时计费 "), _c('b', [_vm._v(_vm._s(c.chargeByHourVal))]), _vm._v(" " + _vm._s(_vm.g.Dict.CardUnitName[c.cardType]) + "\n                    ")] : [(c.cardType === 1) ? _c('span', {
      staticClass: "gray"
    }, [_vm._v("期限卡签到不计费")]) : (c.checkinPayment || c.moreCheckinPayments) ? [_vm._v("\n                        每次签到计费 "), _c('b', [_vm._v(_vm._s(c.checkinPayment))]), _vm._v(" " + _vm._s(_vm.g.Dict.CardUnitName[c.cardType]) + "\n                        "), (c.cardType === 3 && c.moreCheckinPayments) ? _vm._l((c.moreCheckinPaymentArr), function(items) {
      return _c('span', [_vm._v(" / " + _vm._s(items[1]) + "元")])
    }) : _vm._e()] : _vm._e(), _vm._v(" "), (c.cardType === 4) ? [_vm._v("按入场时间计时")] : _vm._e()]] : _c('span', {
      staticClass: "red"
    }, [_vm._v(_vm._s(c.error))])], 2), _vm._v(" "), _c('td', [_c('ul', {
      staticClass: "opts"
    }, [(c.beginDate && c.endDate) ? _c('li', [_vm._v("\n                      使用期限：" + _vm._s(_vm.g.Util.formatDate(c.beginDate, false)) + " ~ " + _vm._s(_vm.g.Util.formatDate(c.endDate, false)) + "\n                    ")]) : _vm._e(), _vm._v(" "), (_vm.isInVacation(c.vacationBegin, c.vacationEnd)) ? _c('li', [_vm._v("\n                      请假：" + _vm._s(_vm.g.Util.formatDate(c.vacationBegin, false)) + " ~ " + _vm._s(_vm.g.Util.formatDate(c.vacationEnd, false)) + "\n                      "), _c('a', {
      staticClass: "l10",
      attrs: {
        "title": "将请假结束日期修改到昨日"
      },
      on: {
        "click": function($event) {
          return _vm.altCardVacation(c)
        }
      }
    }, [_vm._v("【提前销假】")]), _vm._v(" "), _c('a', {
      on: {
        "click": function($event) {
          return _vm.viewMcVacationLogs(c.mcId)
        }
      }
    }, [_vm._v("【请假记录】")])]) : _vm._e(), _vm._v(" "), (c.limitBeginTime && c.limitEndTime) ? _c('li', [_vm._v("\n                      限定用卡时间：" + _vm._s(_vm.g.Util.formatTime(c.limitBeginTime)) + " ~ " + _vm._s(_vm.g.Util.formatTime(c.limitEndTime)) + "\n                    ")]) : _vm._e(), _vm._v(" "), (c.limitDates) ? _c('li', [_vm._v("\n                      限定用卡日期：" + _vm._s(_vm.g.MemberLib.formatLimitDates(c.limitDates)) + "\n                    ")]) : _vm._e(), _vm._v(" "), (c.limitWeeks && !c.ignoreLimitWeeks) ? _c('li', [_vm._v("\n                      限定用卡星期：" + _vm._s(_vm.g.MemberLib.formatWeekNames(c.limitWeeks)) + "\n                    ")]) : _vm._e()]), _vm._v(" "), (c.remark) ? _c('div', [_vm._v(_vm._s(c.remark))]) : _vm._e()])]) : _vm._e()
  })], 2)])]), _vm._v(" "), (_vm.member && _vm.selectCardIndex !== null && !_vm.member.authEntryCheckin) ? _c('section', {
    staticClass: "passwd"
  }, [_c('i-input', {
    staticClass: "input",
    attrs: {
      "type": "password",
      "placeholder": "请会员输入系统登录密码"
    },
    on: {
      "on-enter": _vm.handleSubmit
    },
    model: {
      value: (_vm.password),
      callback: function($$v) {
        _vm.password = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "password"
    }
  }), _vm._v(" "), _vm._m(0)], 1) : _vm._e(), _vm._v(" "), (_vm.selectCardIndex !== null) ? _c('section', {
    staticClass: "submit",
    staticStyle: {
      "margin-bottom": "-15px"
    }
  }, [_c('table', {
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [(_vm.selectCardIndex !== null && _vm.memberCardList[_vm.selectCardIndex].cardType !== 1) ? _c('td', [(_vm.memberCardList[_vm.selectCardIndex].moreCheckinPayments) ? _c('div', [_c('div', {
    staticClass: "gray"
  }, [_vm._v("请选择签到计费项目")]), _vm._v(" "), _c('RadioGroup', {
    staticClass: "p10",
    attrs: {
      "vertical": ""
    },
    on: {
      "on-change": _vm.changeCheckinPaymentItem
    },
    model: {
      value: (_vm.selectCheckinPaymentItemIdx),
      callback: function($$v) {
        _vm.selectCheckinPaymentItemIdx = $$v
      },
      expression: "selectCheckinPaymentItemIdx"
    }
  }, [_c('Radio', {
    attrs: {
      "label": -1
    }
  }, [_vm._v("默认："), _c('b', [_vm._v("￥" + _vm._s(_vm.memberCardList[_vm.selectCardIndex].checkinPayment))])]), _vm._v(" "), _vm._l((_vm.memberCardList[_vm.selectCardIndex].moreCheckinPaymentArr), function(p, idx) {
    return _c('Radio', {
      key: idx,
      attrs: {
        "label": idx
      }
    }, [_vm._v(_vm._s(p[0]) + "："), _c('b', [_vm._v("￥" + _vm._s(p[1]))])])
  })], 2)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "p5"
  }, [_vm._v("\n                  签到消费次数： "), _c('input-int', {
    staticClass: "checkin-cnt",
    model: {
      value: (_vm.checkinCount),
      callback: function($$v) {
        _vm.checkinCount = $$v
      },
      expression: "checkinCount"
    }
  }), _vm._v(" 次 "), _c('span', {
    staticClass: "tips"
  }, [_vm._v("（签到消费总额 = 每次签到计费额 × 次数）")])], 1)]) : _vm._e(), _vm._v(" "), _c('td', {
    attrs: {
      "align": "right",
      "width": "280"
    }
  }, [(_vm.memberCardList[_vm.selectCardIndex].moreCheckinPayments &&
    _vm.selectCardIndex !== null && _vm.memberCardList[_vm.selectCardIndex].cardType === 3 && _vm.selectCheckinPayment) ? _c('div', {
    staticClass: "checkin-sum"
  }, [_vm._v("\n                  本次签到消费 ￥"), _c('b', {
    staticClass: "biggest orangered"
  }, [_vm._v(_vm._s(_vm.selectCheckinPayment * _vm.checkinCount))]), _vm._v(" 元\n                ")]) : _vm._e(), _vm._v(" "), _c('i-input', {
    staticClass: "lockerid",
    attrs: {
      "type": "text",
      "placeholder": "更衣柜号"
    },
    model: {
      value: (_vm.lockerId),
      callback: function($$v) {
        _vm.lockerId = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "lockerId"
    }
  }), _vm._v(" "), _c('i-button', {
    staticClass: "primary",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        return _vm.handleSubmit()
      }
    }
  }, [_vm._v("签到")])], 1)])])]) : _vm._e()] : _vm._e(), _vm._v(" "), (_vm.cust) ? [_c('CustEntryCheckin', {
    attrs: {
      "onClose": _vm.onClose,
      "cust": _vm.cust
    }
  })] : _vm._e()] : (_vm.custType == 1) ? _c('div', {
    staticClass: "query-opt"
  }, [_c('Checkbox', {
    staticStyle: {
      "color": "#888"
    },
    on: {
      "on-change": _vm.changeAutoOpenCheckinDlg
    },
    model: {
      value: (_vm.autoOpenEntryCheckinDlg),
      callback: function($$v) {
        _vm.autoOpenEntryCheckinDlg = $$v
      },
      expression: "autoOpenEntryCheckinDlg"
    }
  }, [_vm._v("\n        签到成功后，再次打开新的签到窗口\n      ")]), _vm._v("\n       \n      "), _c('Checkbox', {
    staticStyle: {
      "color": "#888"
    },
    on: {
      "on-change": _vm.changeEnableEntryVoice
    },
    model: {
      value: (_vm.enableEntryVoice),
      callback: function($$v) {
        _vm.enableEntryVoice = $$v
      },
      expression: "enableEntryVoice"
    }
  }, [_vm._v("\n        开启入场签到智能语音播报\n      ")])], 1) : _vm._e()], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "warn"
  }, [_c('i', {
    staticClass: "iconfont icon-alert"
  }), _vm._v(" 为了会员账户安全，请会员输入系统登录密码，以备校验\n              "), _c('span', {
    staticClass: "red"
  }, [_vm._v("（工作人员暂请回避）")])])
}]}

/***/ }),

/***/ 654:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: 'g-nav not-print g-nav-' + _vm.g.data.sys.skin
  }, [_c('div', {
    staticClass: "shop-info"
  }, [(_vm.g.data.user.isTenantOwner || (_vm.g.data.shopList && _vm.g.data.shopList.length > 1)) ? _c('div', {
    staticClass: "shop-name shops"
  }, [_c('i', {
    staticClass: "iconfont icon-shop shopicon"
  }), _c('span', {
    staticClass: "tit",
    attrs: {
      "title": _vm.shopName
    }
  }, [_vm._v(_vm._s(_vm.shopName))]), _c('i', {
    staticClass: "iconfont icon-arrow-down-1 downicon"
  }), _vm._v(" "), _c('div', {
    staticClass: "menus"
  }, [_c('ul', [(_vm.g.data.user.isTenantOwner) ? _c('li', {
    staticClass: "mng"
  }, [_c('a', {
    on: {
      "click": function($event) {
        return _vm.$router.push('/tenant')
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-home1"
  }), _vm._v(" 连锁店管理")])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.g.data.shopList), function(s, idx) {
    return (s.shopName !== _vm.shopName && !s.forbiddenInChain) ? _c('li', {
      attrs: {
        "title": s.shopName
      },
      on: {
        "click": function($event) {
          return _vm.enterShop(idx)
        }
      }
    }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(s.shopName) + "\n\t\t\t\t\t")]) : _vm._e()
  })], 2)])]) : _c('div', {
    staticClass: "shop-name",
    attrs: {
      "title": _vm.shopName
    }
  }, [_c('i', {
    staticClass: "iconfont icon-shop shopicon"
  }), _c('span', {
    staticClass: "tit"
  }, [_vm._v(_vm._s(_vm.shopName))])]), _vm._v(" "), _c('div', {
    staticClass: "logo-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.shopImg
    },
    on: {
      "click": function($event) {
        return _vm.$router.push('/shop-edit')
      }
    }
  })])]), _vm._v(" "), _c('nav-menu', {
    attrs: {
      "menu": _vm.menu,
      "menus": _vm.menus
    }
  }), _vm._v(" "), (_vm.showJzgLogo) ? _c('div', {
    class: 'jzg-bootom-logo jzg-bootom-logo-' + _vm.g.data.sys.skin
  }, [_c('b', [_vm._v("J")]), _vm._v(" 健总管\n\t")]) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),

/***/ 859:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 860:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 861:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 862:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 863:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 864:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 865:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 866:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 867:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 868:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 869:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 870:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 871:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 872:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[442]);