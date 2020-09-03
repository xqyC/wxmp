require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visitor__ = __webpack_require__(118);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__visitor__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_visitor_vue__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7467729a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_visitor_vue__ = __webpack_require__(129);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(119)
}
var normalizeComponent = __webpack_require__(9)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_visitor_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7467729a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_visitor_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\visitor\\visitor.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] visitor.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7467729a", Component.options)
  } else {
    hotAPI.reload("data-v-7467729a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 119:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_datetime__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_validate__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__ = __webpack_require__(127);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: "visitor",
  data: function data() {
    var _this = this,
        _ref;

    var that = this;
    return {
      errorMessage: { fwdeptName: "访客单位不能为空", pwdInput: "", zipCode: "" },
      value: {
        leixing: '访客临时通行卡'
      },
      formatter: function formatter(type, value) {
        if (type === 'year') {
          return value + "\u5E74";
        } else if (type === 'month') {
          return value + "\u6708";
        } else if (type === 'day') {
          return value + "\u65E5";
        } else if (type === 'hour') {
          return value + "\u65F6";
        } else if (type === 'minute') {
          return value + "\u5206";
        } else if (type === 'second') {
          return value + "\u79D2";
        }
        return value;
      },

      formdata: [{
        title: "访问单位:",
        type: "select",
        judge: false, //判断
        titlename: "==访问单位==",
        disabled: true,
        prop: "fwdeptName",
        placeholder: "请选择访问单位",
        required: true,
        contact: "wap-home-o",
        showsecect: false,
        activeaction: '',
        show: true,
        message: '请选择访问单位',
        searchvalue: '',
        actions: [],
        secetevent: function secetevent(index) {
          that.formdata[index].showsecect = true;
        },
        //关闭弹框
        Close: function Close(index) {
          this.showsecect = false;
          if (that.value.fwdeptName) {
            this.judge = true;
          } else {
            this.judge = false;
            this.message = "请选择访问单位";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(this.message);
          }
        },

        //选中
        onSearch: function onSearch(index, ind) {
          this.activeaction = ind;
          that.value.fwdeptName = this.actions[ind].name;
          this.showsecect = false;
          this.judge = true;
        }
      }, {
        title: "临时卡类型:",
        type: "text",
        disabled: true,
        show: true,
        prop: "leixing",
        placeholder: "",
        required: false,
        contact: "credit-pay"
      }, {
        title: "预约来访时间:",
        judge: false, //判断
        message: '请选择预约来访时间',
        type: "datetime",
        prop: "begTime",
        disabled: true,
        placeholder: "请选择预约来访时间",
        required: true,
        contact: "underway-o",
        showsecect: false,
        activeaction: '',
        show: true,
        searchvalue: '',
        secetevent: function secetevent(index) {
          that.formdata[index].showsecect = true;
          that.value.endTime = '';
        },
        minDate: new Date().getTime(),
        maxDate: new Date(2060, 10, 1).getTime(),
        currentDate: new Date().getTime(),
        //确定
        confirm: function confirm(e, index) {
          var time = Object(__WEBPACK_IMPORTED_MODULE_1__utils_datetime__["a" /* formatWithSeperator */])(e.mp.detail, "-", ":");
          that.value.begTime = time;
          that.formdata[index].showsecect = false;
          _this.judge = true;
        },
        cancel: function cancel(e, index) {
          console.log(that.formdata[index].showsecect);
          if (that.value.begTime) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请选择预约来访时间";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
          }
          that.formdata[index].showsecect = false;
        }
      }, {
        title: "预约离开时间:",
        judge: false, //判断
        message: '请选择预约离开时间',
        type: "datetime",
        prop: "endTime",
        disabled: true,
        placeholder: "请选择预约离开时间",
        required: true,
        contact: "underway-o",
        showsecect: false,
        show: true,
        activeaction: '',
        searchvalue: '',
        secetevent: function secetevent(index) {
          if (that.value.begTime) {
            that.formdata[index].showsecect = true;
          } else {
            _this.message = "请先选择预约来访时间";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
          }
        },
        minDate: new Date().getTime(),
        maxDate: new Date(2060, 10, 1).getTime(),
        currentDate: new Date().getTime(),
        //确定
        confirm: function confirm(e, index) {
          var time = Object(__WEBPACK_IMPORTED_MODULE_1__utils_datetime__["a" /* formatWithSeperator */])(e.mp.detail, "-", ":");
          if (time > that.value.begTime) {
            _this.judge = true;
            that.value.endTime = time;
            that.formdata[index].showsecect = false;
          } else {
            _this.judge = false;
            _this.message = "预约离开时间必须大于预约来访时间";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
          }
        },
        cancel: function cancel(e, index) {
          if (that.value.endTime) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请选择预约离开时间";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
          }
        }
      }, {
        title: "所属企业:",
        judge: true, //判断
        show: true,
        type: "text",
        prop: "fromDeptName",
        disabled: false,
        placeholder: "请输入所属企业",
        required: false,
        contact: "wap-home-o",
        change: function change(event) {
          that.value.fromDeptName = event.mp.detail.value;
        }
      }, {
        title: "访客姓名:",
        prop: "peopleName",
        judge: false, //判断
        show: true,
        message: '请输入访客姓名',
        type: "text",
        disabled: false,
        placeholder: "请输入访客姓名",
        required: true,
        contact: "user-circle-o",
        change: function change(event) {
          that.value.peopleName = event.mp.detail.value;
          if (that.value.peopleName) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入访客姓名";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
          }
        }
      }, {
        title: "访客身份证号:",
        judge: false, //判断
        message: '请输入访客身份证号',
        required: true,
        show: true,
        type: "text",
        prop: "idCard",
        disabled: false,
        placeholder: "请输入访客身份证号",
        contact: "idcard",
        change: function change(event) {
          that.value.idCard = event.mp.detail.value;
          if (that.value.idCard) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入访客身份证号";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_validate__["a" /* ID */])(that.value.idCard)) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入正确的身份证号";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
        }
      }, {
        title: "访客手机号:",
        show: true,
        judge: false, //判断
        message: '请输入访客手机号',
        type: "text",
        prop: "peopleTel",
        disabled: false,
        placeholder: "请输入访客手机号",
        required: true,
        contact: "phone-circle-o",
        change: function change(event) {
          that.value.peopleTel = event.mp.detail.value;
          if (that.value.peopleTel) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入访客手机号";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_validate__["b" /* isMobile */])(that.value.peopleTel)) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入真确的手机号码";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
        }
      }, {
        title: "入园方式:",
        judge: false, //判断
        message: '请选择入园方式',
        required: true,
        titlename: "==入园方式==",
        type: "select",
        disabled: true,
        prop: "isOrnot",
        placeholder: "请选择入园方式",
        contact: "logistics",
        showsecect: false,
        activeaction: '',
        show: true,
        searchvalue: '',
        actions: [{
          name: '步行',
          openType: 'share'
        }, {
          name: '电动车',
          openType: 'share'
        }, {
          name: '自驾车',
          openType: 'share'
        }, {
          name: '货车',
          openType: 'share'
        }, {
          name: '客车',
          openType: 'share'
        }, {
          name: '特种车辆',
          openType: 'share'
        }, {
          name: '农用车',
          openType: 'share'
        }, {
          name: '其他',
          openType: 'share'
        }],
        secetevent: function secetevent(index) {
          that.formdata[index].showsecect = true;
        },
        Close: function Close(index) {
          if (that.value.isOrnot) {
            this.judge = true;
          } else {
            this.judge = false;
            this.message = "请选择选择入园方式";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(this.message);
          }
          this.showsecect = false;
        },
        onSearch: function onSearch(index, ind) {
          this.activeaction = ind;
          that.value.isOrnot = this.actions[ind].name;
          this.judge = true;
          this.showsecect = false;
          if (that.value.isOrnot == "自驾车" || that.value.isOrnot == "特种车辆" || that.value.isOrnot == "农用车" || that.value.isOrnot == "货车" || that.value.isOrnot == "客车") {
            for (var i = 9; i < that.formdata.length; i++) {
              if (i == 10 || i == 11 || i == 12) {
                if (that.value.isOrnot == "货车") {
                  that.formdata[10].show = true;
                  that.formdata[11].show = false;
                  that.formdata[12].show = false;
                } else if (that.value.isOrnot == "客车") {
                  that.formdata[11].show = true;
                  that.formdata[12].show = true;
                  that.formdata[10].show = false;
                } else {
                  that.formdata[i].show = false;
                }
              } else {
                that.formdata[i].show = true;
              }
            }
            return;
          } else {
            for (var i = 9; i < that.formdata.length; i++) {
              if (that.value.isOrnot == "其他") {
                if (i >= 15) {
                  that.formdata[i].show = true;
                } else {
                  that.formdata[i].show = false;
                }
              } else {
                that.formdata[i].show = false;
              }
            }
          }
        }
      }, {
        title: "访客车牌号:",
        judge: false, //判断
        message: '请输入访客车牌号',
        type: "text",
        prop: "load",
        disabled: false,
        placeholder: "请输入访客车牌号",
        required: true,
        show: false,
        contact: "logistics",
        change: function change(event, index) {
          that.value.load = event.mp.detail.value;
          if (that.value.load) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入访客车牌号";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_validate__["e" /* regxcard */])(that.value.load)) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入正确的车牌号";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
        }
      }, {
        title: "载重量:",
        judge: false, //判断
        message: '请输入载重量',
        show: false,
        type: "text",
        prop: "carNum",
        disabled: false,
        placeholder: "请输入载重量",
        required: true,
        contact: "logistics",
        change: function change(event) {
          that.value.carNum = event.mp.detail.value;
          if (that.value.carNum) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入载重量";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_validate__["d" /* regxPlusDecimal2 */])(that.value.carNum)) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入数字最多保留2位小数";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
        }
      }, {
        title: "载客人数:",
        judge: false, //判断
        message: '',
        type: "text",
        prop: "carrays",
        show: false,
        disabled: false,
        placeholder: "请输入载客人数",
        required: true,
        contact: "friends-o",
        change: function change(event) {
          that.value.carrays = event.mp.detail.value;
          if (that.value.carrays) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入载客人数";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_validate__["c" /* number */])(that.value.carrays)) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入数字";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
        }
      }, {
        title: "限载人数:",
        judge: false, //判断
        message: '',
        type: "text",
        prop: "posting",
        show: false,
        disabled: false,
        placeholder: "请输入限载人数",
        required: true,
        contact: "friends-o",
        change: function change(event) {
          that.value.posting = event.mp.detail.value;
          if (that.value.posting) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入限载人数";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_validate__["c" /* number */])(that.value.posting)) {
            _this.judge = true;
          } else {
            _this.judge = false;
            _this.message = "请输入数字";
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(_this.message);
            return;
          }
        }
      }, {
        title: "司机驾驶证:",
        judge: false, //判断
        show: false,
        multiple: false,
        maxCount: 1,
        message: '请上传司机驾驶证',
        type: "upload",
        accept: 'image',
        disabled: true,
        required: true,
        fileList: [],
        afterRead: function afterRead(event, index) {
          var file = event.mp.detail.file;

          this.fileList.push({
            url: file.path,
            name: file.name,
            isImage: true,
            deletable: true
          });
          this.judge = true;
          that.$http.post({
            url: 'app!fileUpload',
            data: myForm
          }).then(function (res) {
            console.log(res);
          });
        },
        del_img: function del_img(event) {
          this.fileList.splice(event.mp.detail.index, 1);
          if (this.fileList.length < 1) {
            this.judge = false;
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(this.message);
          }
        }
      }, {
        title: "车辆行驶证:",
        message: '请上传车辆行驶证',
        judge: false, //判断
        maxCount: 1,
        disabled: true,
        multiple: false,
        type: "upload",
        required: true,
        show: false,
        fileList: [],
        afterRead: function afterRead(event, index) {
          var file = event.mp.detail.file;

          this.fileList.push({
            url: file.path,
            name: file.name,
            isImage: true,
            deletable: true
          });
          this.judge = true;
        },
        del_img: function del_img(event) {
          this.fileList.splice(event.mp.detail.index, 1);
          if (this.fileList.length < 1) {
            this.judge = false;
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(this.message);
          }
        }
      }, {
        title: "审批文件:",
        type: "upload",
        maxCount: 1,
        judge: true, //判断
        multiple: false,
        disabled: true,
        required: false,
        show: false,
        fileList: [],
        afterRead: function afterRead(event, index) {
          var file = event.mp.detail.file;

          this.fileList.push({
            url: file.path,
            name: file.name,
            isImage: true,
            deletable: true
          });
        },
        del_img: function del_img(event) {
          this.fileList.splice(event.mp.detail.index, 1);
        }
      }, (_ref = {
        title: "其他审批文件1:",
        judge: true, //判断
        multiple: false,
        maxCount: 1,
        type: "upload",
        disabled: true,
        required: false,
        show: false
      }, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, "required", false), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, "fileList", []), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, "afterRead", function afterRead(event, index) {
        var file = event.mp.detail.file;

        this.fileList.push({
          url: file.path,
          name: file.name,
          isImage: true,
          deletable: true
        });
      }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_ref, "del_img", function del_img(event) {
        this.fileList.splice(event.mp.detail.index, 1);
      }), _ref), {
        title: "其他审批文件2:",
        maxCount: 1,
        judge: true, //判断
        multiple: false,
        type: "upload",
        disabled: true,
        show: false,
        required: false,
        fileList: [],
        afterRead: function afterRead(event, index) {
          var file = event.mp.detail.file;

          this.fileList.push({
            url: file.path,
            name: file.name,
            isImage: true,
            deletable: true
          });
        },
        del_img: function del_img(event) {
          this.fileList.splice(event.mp.detail.index, 1);
        }
      }, {
        title: "其他审批文件3:",
        maxCount: 1,
        judge: true, //判断
        multiple: false,
        type: "upload",
        disabled: true,
        show: false,
        required: false,
        fileList: [],
        afterRead: function afterRead(event, index) {
          var file = event.mp.detail.file;

          this.fileList.push({
            url: file.path,
            name: file.name,
            isImage: true,
            deletable: true
          });
        },
        del_img: function del_img(event) {
          this.fileList.splice(event.mp.detail.index, 1);
        }
      }, {
        title: "其他审批文件4:",
        maxCount: 1,
        judge: true, //判断
        multiple: false,
        type: "upload",
        disabled: true,
        show: false,
        required: false,
        fileList: [],
        afterRead: function afterRead(event, index) {
          var file = event.mp.detail.file;

          this.fileList.push({
            url: file.path,
            name: file.name,
            isImage: true,
            deletable: true
          });
        },
        del_img: function del_img(event) {
          this.fileList.splice(event.mp.detail.index, 1);
        }
      }, {
        title: "其他审批文件5:",
        judge: true, //判断
        multiple: false,
        type: "upload",
        disabled: true,
        required: false,
        show: false,
        fileList: [],
        afterRead: function afterRead(event, index) {
          var file = event.mp.detail.file;

          Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(file.name);
          this.fileList.push({
            url: file.path,
            name: file.name,
            isImage: true,
            deletable: true
          });
        },
        del_img: function del_img(event) {
          this.fileList.splice(event.mp.detail.index, 1);
        }
      }, {
        type: "textarea",
        title: "随行人员姓名(逗号分隔):",
        message: "",
        judge: true, //判断
        prop: "followMan",
        disabled: false,
        placeholder: "请输入随行人员姓名",
        required: false,
        contact: "user-circle-o",
        change: function change(event, index) {
          that.value.followMan = event.mp.detail.value;
        }
      }, {
        type: "textarea",
        title: "申请说明",
        judge: false, //判断
        message: "请输入申请说明",
        prop: "remark",
        disabled: false,
        placeholder: "请输入申请说明",
        required: true,
        contact: "edit",
        change: function change(event, index) {
          that.value.remark = event.mp.detail.value;
          if (that.value.remark) {
            _this.judge = true;
          } else {
            _this.judge = false;
            Object(__WEBPACK_IMPORTED_MODULE_3__dist_wx_vant_weapp_dist_toast_toast__["a" /* default */])(message);
          }
        }
      }]
    };
  },
  created: function created() {
    var _this2 = this;

    //访问单位
    this.$http.post({
      url: 'system/department!ajaxAppDepts',
      data: {}
    }).then(function (res) {
      if (res.result == "success") {
        res.data.map(function (item) {
          item.name = item.deptName;
        });
        _this2.formdata[0].actions = res.data;
      }
    });
  },

  methods: {
    //提交app!ajaxCommitTemp
    onClickButtonSubmit: function onClickButtonSubmit(values) {
      console.log(this.vlaue);
    }
  }
});

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export format */
/* harmony export (immutable) */ __webpack_exports__["a"] = formatWithSeperator;
/* unused harmony export getBase64Image */
/**
 * 时间日期相关操作
 */

/**
 * 时间格式化
 * 将 2018-09-23T11:54:16.000+0000 格式化成 2018/09/23 11:54:16
 * @param datetime 国际化日期格式
 */
function format(datetime) {
  return formatWithSeperator(datetime, "/", ":");
}

/**
 * 时间格式化
 * 将 2018-09-23T11:54:16.000+0000 格式化成类似 2018/09/23 11:54:16
 * 可以指定日期和时间分隔符
 * @param  国际化日期格式
 */
function formatWithSeperator(datetime, dateSeprator, timeSeprator, type) {
  if (datetime != null) {
    // console.log(datetime)
    var dateMat = new Date(datetime);
    var year = dateMat.getFullYear();
    var month = dateMat.getMonth() + 1 < 10 ? "0" + (dateMat.getMonth() + 1) : dateMat.getMonth() + 1;
    var day = dateMat.getDate() < 10 ? "0" + dateMat.getDate() : dateMat.getDate();
    var hh = dateMat.getHours() < 10 ? "0" + dateMat.getHours() : dateMat.getHours();
    var mm = dateMat.getMinutes() < 10 ? "0" + dateMat.getMinutes() : dateMat.getMinutes();
    var ss = dateMat.getSeconds() < 10 ? "0" + dateMat.getSeconds() : dateMat.getSeconds();
    var timeFormat = year + dateSeprator + month + dateSeprator + day;
    if (timeSeprator) {
      timeFormat = timeFormat + " " + hh + timeSeprator + mm + timeSeprator + ss;
    }
    if (type == "year") {
      return year;
    } else if (type == "month") {
      return year + dateSeprator + month;
    }
    return timeFormat;
  }
}
//Base64Image
function getBase64Image(img) {
  var w = 800;
  imgWidth = img.width;
  imgHeight = img.height;
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  if (Math.max(imgWidth, imgHeight) > w) {
    if (imgWidth > imgHeight) {
      canvas.width = w;
      canvas.height = w * imgHeight / imgWidth;
    } else {
      canvas.height = w;
      canvas.width = w * imgWidth / imgHeight;
    }
  } else {
    canvas.width = imgWidth;
    canvas.height = imgHeight;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  var dataUrl = canvas.toDataURL("image/png", 0.8);
  return dataUrl;
}
// util.js
var that = {};
that.formatDateStr = function (date) {
  // eslint-disable-next-line one-var
  var MM = '',
      DD = '';
  if (date.getMonth() > 8) {
    MM = (date.getMonth() + 1).toString();
  } else {
    MM = '0' + (date.getMonth() + 1).toString();
  }
  if (date.getDate() > 9) {
    DD = date.getDate().toString();
  } else {
    DD = '0' + date.getDate().toString();
  }
  return date.getFullYear() + '-' + MM + '-' + DD;
};
/* unused harmony default export */ var _unused_webpack_default_export = (that);

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isEmail */
/* harmony export (immutable) */ __webpack_exports__["b"] = isMobile;
/* unused harmony export isPhone */
/* unused harmony export fixedTelephone */
/* unused harmony export isURL */
/* unused harmony export Plusminus */
/* unused harmony export decimal */
/* unused harmony export isnumber */
/* harmony export (immutable) */ __webpack_exports__["c"] = number;
/* unused harmony export qq */
/* unused harmony export weixin */
/* unused harmony export Postal */
/* harmony export (immutable) */ __webpack_exports__["a"] = ID;
/* unused harmony export isNumOrLetter */
/* unused harmony export isvalidcode */
/* unused harmony export isvalidPut */
/* unused harmony export isformat */
/* unused harmony export isspcing */
/* unused harmony export isfax */
/* unused harmony export islongitude */
/* unused harmony export islatitude */
/* unused harmony export isChineseE */
/* unused harmony export isChineseEngN */
/* unused harmony export patrn */
/* unused harmony export checkNumber */
/* unused harmony export checkNumberFour */
/* unused harmony export checkFour */
/* harmony export (immutable) */ __webpack_exports__["d"] = regxPlusDecimal2;
/* unused harmony export regxPlusDecimal */
/* harmony export (immutable) */ __webpack_exports__["e"] = regxcard;
/**
 * 邮箱
 * @param {*} s
 */
function isEmail(s) {
  return (/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
  );
}
/**
 * @param {*} s
 */
//手机号码
function isMobile(s) {
  return (/^1[3456789]\d{9}$/.test(s)
  );
}
/**
 * 电话号码
 */
function isPhone(s) {
  return (/^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
  );
}
//固定电话例子：0512-4432145
function fixedTelephone(str) {
  var reg = /(\d{2,5}-\d{7,8}(-\d{1,})?)|(13\d{9})|(159\d{8})/;
  return reg.test(str);
}
/**
 */
//合法url
function isURL(str) {
  var reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/;
  return reg.test(str);
}

//正负数保留两位小数
function Plusminus(s) {
  return (/(^(-)?[1-9](\d+)?(\.\d{1,2})?$)|(^-?(0){1}$)|(^-?\d\.\d{1,2}?$)/.test(s)
  );
}
//保留两位小数
function decimal(s) {
  return (/(^[1-9](\d+)?(\.\d{1,2})?$)|(^(0){1}$)|(^\d\.\d{1,2}?$)/.test(s)
  );
}
//正则表达式校验最多两位小数的实数
function isnumber(str) {
  var reg = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
  return reg.test(str);
}
//数字大于等于0的正整数
function number(s) {
  return (/^[0-9]+$/.test(s)
  );
}
//腾讯QQ号：[1-9][0-9]{4,}腾讯QQ号从10000开始
function qq(s) {
  return (/^[1-9]\d{4,9}$/.test(s)
  );
  // return /[1-9][0-9]{4,}/.test(s)
}
//微信只能6—20个字母、数字、下划线和减号，必须以字母开头（不区分大小写），不支持设置中文
function weixin(s) {
  return (/^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/.test(s)
  );
}
//中国邮政编码中国邮政编码为6位数字
function Postal(s) {
  return (/[1-9]\d{5}(?!\d)/.test(s)
  );
}
//匹配身份证
function ID(s) {
  return (/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(s)
  );
}
// 只能输入数字和英文
function isNumOrLetter(str) {
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(str);
}
//中文数字字母下划线
function isvalidcode(str) {
  var reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
  return reg.test(str);
}
//数字字母下划线点
function isvalidPut(str) {
  var reg = /^[a-zA-Z\d_.]+$/;
  return reg.test(str);
}
//中文\英文\数字\下划线\点
function isformat(str) {
  var reg = /^[\u4E00-\u9FA5a-zA-Z0-9_\.]+$/;
  return reg.test(str);
}
// 中文英文字符、数据及标点
function isspcing(str) {
  var reg = /^[a-zA-Z0-9\u4e00-\u9fa5\,，.。！!]+$/;
  return reg.test(str);
}
//传真
function isfax(str) {
  var reg = /^(\d{3,4}-)?\d{7,8}$/;
  return reg.test(str);
}
//经度-180.0～+180.0（整数部分为0～180，必须输入1到5位小数）
function islongitude(str) {
  var reg = /^[\-\+]?(0(\.\d{1,10})?|([1-9](\d)?)(\.\d{1,10})?|1[0-7]\d{1}(\.\d{1,10})?|180\.0{1,10})$/;
  return reg.test(str);
}
//纬度： -90.0～+90.0（整数部分为0～90，必须输入1到5位小数）
function islatitude(str) {
  //const reg = /^[\-\+]?([0-8]?\d{1}\.\d{1,5}|90\.0{1,5})$/
  var reg = /^(\-|\+)?([0-8]?\d{1}\.\d{0,6}|90\.0{0,6}|[0-8]?\d{1}|90)$/;
  return reg.test(str);
}

// 只能汉字（繁简）+ 字母
function isChineseE(str) {
  var reg = /^[a-zA-Z\u4e00-\u9fa5]+$/;
  return reg.test(str);
}
// 只能汉字（繁简）+ 字母 + 数字
function isChineseEngN(str) {
  var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/;
  return reg.test(str);
}
//特殊字符
function patrn(str) {
  var reg = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/im;
  return reg.test(str);
}
// 百分比
function checkNumber(str) {
  var reg = /^(\d|[1-9]\d|100)(\.\d{1,2})?$/;
  return reg.test(str);
}
// 保留4位小数
function checkNumberFour(str) {
  var reg = /^(([1-9][0-9]*)|([0])|(([0]\.\d{1,4}|[1-9][0-9]*\.\d{1,4})))$/;
  return reg.test(str);
}

// 保留4位小数 大于0的数字
function checkFour(str) {
  var reg = /^(([1-9][0-9]*)|(([0]\.\d{1,4}|[1-9][0-9]*\.\d{1,4})))$/;
  return reg.test(str);
}
//大于等于0的数字；最多保留2位小数（10位整数）
function regxPlusDecimal2(str) {
  var reg = /^(([0-9]|([1-9][0-9]{0,9}))((\.[0-9]{1,2})?))$/;
  return reg.test(str);
}
//大于等于0的数字；最多保留2位小数（16位整数）
function regxPlusDecimal(str) {
  var reg = /^(([0-9]|([1-9][0-9]{0,15}))((\.[0-9]{1,2})?))$/;
  return reg.test(str);
}
//车牌号
function regxcard(str) {
  var reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
  return reg.test(str);
}

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_utils__ = __webpack_require__(128);

const defaultOptions = {
    type: 'text',
    mask: false,
    message: '',
    show: true,
    zIndex: 1000,
    duration: 3000,
    position: 'middle',
    forbidClick: false,
    loadingType: 'circular',
    selector: '#van-toast'
};
let queue = [];
let currentOptions = Object.assign({}, defaultOptions);
function parseOptions(message) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__common_utils__["a" /* isObj */])(message) ? message : { message };
}
function getContext() {
    const pages = getCurrentPages();
    return pages[pages.length - 1];
}
function Toast(toastOptions) {
    const options = Object.assign({}, currentOptions, parseOptions(toastOptions));
    const context = options.context || getContext();
    const toast = context.selectComponent(options.selector);
    if (!toast) {
        console.warn('未找到 van-toast 节点，请确认 selector 及 context 是否正确');
        return;
    }
    delete options.context;
    delete options.selector;
    toast.clear = () => {
        toast.set({ show: false });
        if (options.onClose) {
            options.onClose();
        }
    };
    queue.push(toast);
    toast.set(options);
    clearTimeout(toast.timer);
    if (options.duration > 0) {
        toast.timer = setTimeout(() => {
            toast.clear();
            queue = queue.filter(item => item !== toast);
        }, options.duration);
    }
    return toast;
}
const createMethod = (type) => (options) => Toast(Object.assign({ type }, parseOptions(options)));
Toast.loading = createMethod('loading');
Toast.success = createMethod('success');
Toast.fail = createMethod('fail');
Toast.clear = () => {
    queue.forEach(toast => {
        toast.clear();
    });
    queue = [];
};
Toast.setDefaultOptions = (options) => {
    Object.assign(currentOptions, options);
};
Toast.resetDefaultOptions = () => {
    currentOptions = Object.assign({}, defaultOptions);
};
/* harmony default export */ __webpack_exports__["a"] = (Toast);


/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isDef */
/* harmony export (immutable) */ __webpack_exports__["a"] = isObj;
/* unused harmony export isNumber */
/* unused harmony export range */
/* unused harmony export nextTick */
/* unused harmony export getSystemInfoSync */
function isDef(value) {
    return value !== undefined && value !== null;
}
function isObj(x) {
    const type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
}
function isNumber(value) {
    return /^\d+$/.test(value);
}
function range(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
function nextTick(fn) {
    setTimeout(() => {
        fn();
    }, 1000 / 30);
}
let systemInfo = null;
function getSystemInfoSync() {
    if (systemInfo == null) {
        systemInfo = wx.getSystemInfoSync();
    }
    return systemInfo;
}


/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "visitor"
  }, [_c('form', {
    attrs: {
      "catchsubmit": "formSubmit",
      "catchreset": "formReset"
    }
  }, [_vm._l((_vm.formdata), function(item, index) {
    return _c('view', {
      key: index
    }, [(item.type == 'text' && item.show == true) ? _c('view', {
      staticClass: "weui-cell__bd",
      staticStyle: {
        "margin": "30rpx 0"
      }
    }, [_c('text', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('input', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.show ? item.show : true),
        expression: "item.show ?item.show:true"
      }],
      staticClass: "weui-input",
      attrs: {
        "value": _vm.value[item.prop],
        "name": item.prop,
        "placeholder": item.placeholder,
        "left-icon": item.contact,
        "disabled": item.disabled,
        "required": item.required,
        "eventid": '0_' + index
      },
      on: {
        "blur": function($event) {
          item.change($event, index)
        }
      }
    })]) : (item.type == 'select') ? _c('view', [_c('text', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('input', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.show ? item.show : true),
        expression: "item.show ?item.show:true"
      }],
      attrs: {
        "value": _vm.value[item.prop],
        "name": item.prop,
        "placeholder": item.placeholder,
        "left-icon": item.contact,
        "disabled": item.disabled,
        "required": item.required,
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          item.secetevent(index)
        }
      }
    }), _vm._v(" "), _c('van-action-sheet', {
      attrs: {
        "show": item.showsecect,
        "title": item.titlename,
        "eventid": '3_' + index,
        "mpcomid": '1_' + index
      },
      on: {
        "close": function($event) {
          item.Close(index)
        },
        "select": function($event) {
          item.onSelect(index)
        }
      }
    }, [(item.show) ? _c('van-search', {
      attrs: {
        "value": item.searchvalue,
        "placeholder": "请输入搜索关键词",
        "mpcomid": '0_' + index
      }
    }) : _vm._e(), _vm._v(" "), _vm._l((item.actions), function(list, ind) {
      return _c('view', {
        key: ind,
        staticClass: "actiondata",
        class: item.activeaction == ind ? 'activeaction' : '',
        attrs: {
          "eventid": '2_' + index + '-' + ind
        },
        on: {
          "click": function($event) {
            item.onSearch(index, ind)
          }
        }
      }, [_c('span', {
        staticClass: "actionsvalue"
      }, [_vm._v(_vm._s(list.name))])])
    })], 2)], 1) : (item.type == 'upload' && item.show == true) ? _c('view', [_c('text', [_vm._v(_vm._s(item.title))]), _vm._v(" "), (item.fileList) ? _c('view', {
      staticClass: "uploader-img  flex justify-content-start"
    }, _vm._l((item.fileList), function(file, ind) {
      return _c('view', {
        key: ind,
        staticClass: "uploader-list"
      }, [_c('image', {
        attrs: {
          "src": file.path,
          "data-index": ind,
          "mode": "scaleToFill",
          "bindtap": "previewImg1"
        }
      }), _vm._v(" "), _c('image', {
        staticClass: "delete",
        attrs: {
          "data-index": ind,
          "src": file.src,
          "mode": "widthFix",
          "bindtap": "deleteImg"
        }
      })])
    })) : _vm._e(), _vm._v(" "), _c('view', {
      staticClass: "upAdd",
      attrs: {
        "bindtap": "chooseImg"
      }
    }, [_c('image', {
      attrs: {
        "src": item.src,
        "mode": "widthFix"
      }
    })])]) : (item.type == 'textarea') ? _c('view', [_c('text', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('textarea', {
      attrs: {
        "required": item.required,
        "disabled": item.disabled,
        "eventid": '4_' + index
      },
      on: {
        "blur": function($event) {
          item.change($event, index)
        }
      }
    })]) : (item.type == 'datetime') ? _c('view', [_c('text', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('input', {
      attrs: {
        "value": _vm.value[item.prop],
        "name": item.prop,
        "placeholder": item.placeholder,
        "disabled": item.disabled,
        "required": item.required,
        "eventid": '5_' + index
      },
      on: {
        "click": function($event) {
          item.secetevent(index)
        }
      }
    }), _vm._v(" "), _c('van-popup', {
      attrs: {
        "show": item.showsecect,
        "position": "bottom",
        "mpcomid": '3_' + index
      }
    }, [_c('van-datetime-picker', {
      attrs: {
        "value": item.currentDate,
        "type": item.type,
        "min-date": item.minDate,
        "lazy-render": false,
        "max-date": item.maxDate,
        "formatter": _vm.formatter,
        "eventid": '6_' + index,
        "mpcomid": '2_' + index
      },
      on: {
        "cancel": function($event) {
          item.cancel($event, index)
        },
        "confirm": function($event) {
          item.confirm($event, index)
        }
      }
    })], 1)], 1) : _vm._e()])
  }), _vm._v(" "), _c('view', {
    staticClass: "btn-area"
  }, [_c('button', {
    staticStyle: {
      "margin": "30rpx 0"
    },
    attrs: {
      "type": "primary",
      "formType": "onClickButtonSubmit"
    }
  }, [_vm._v("提交信息")])], 1)], 2), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '4'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7467729a", esExports)
  }
}

/***/ })

},[117]);