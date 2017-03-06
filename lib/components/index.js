var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert(".selects-container[_v-39c57c31] {\n  font-size: 13px;\n  min-width: 120px;\n  ze: 12px;\n  text-indent: 0;\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.selects-container ul[_v-39c57c31],\n.selects-container li[_v-39c57c31] {\n  padding: 0;\n}\n.selects-container a[_v-39c57c31] {\n  color: #5bc0de;\n  transition: all .3s;\n  -moz-transition: all .3s;\n  -webkit-transition: all .3s;\n  -o-transition: all .3s;\n}\n.selects-container .overlay[_v-39c57c31] {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background: transparent;\n  z-index: 200;\n  left: 0;\n  top: 0;\n}\n.selects-container .selects-choice[_v-39c57c31],\n.selects-container .selects-choice-disabled[_v-39c57c31] {\n  background-color: #fcfcfc;\n  display: block;\n  height: 36px;\n  line-height: 36px;\n  padding: 0 0 0 10px;\n  overflow: hidden;\n  position: relative;\n  border: 1px solid #e2e3e5;\n  text-decoration: none;\n  background-clip: padding-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.selects-container .selects-choice .choice-chosen[_v-39c57c31],\n.selects-container .selects-choice-disabled .choice-chosen[_v-39c57c31] {\n  margin-right: 30px;\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.selects-container .selects-choice .choice-arrow[_v-39c57c31],\n.selects-container .selects-choice-disabled .choice-arrow[_v-39c57c31] {\n  display: inline-block;\n  width: 34px;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.selects-container .selects-choice .choice-arrow b[_v-39c57c31],\n.selects-container .selects-choice-disabled .choice-arrow b[_v-39c57c31] {\n  display: block;\n  margin: 13px 0 0 9px;\n}\n.selects-container .selects-choice-disabled[_v-39c57c31] {\n  color: #a59c9c;\n  background: #e2e3e5;\n}\n.selects-container .selects-dropdown[_v-39c57c31] {\n  box-sizing: border-box;\n  background-color: #fcfcfc;\n  border: 1px solid #e2e3e5;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 9999;\n  width: 100%;\n  min-width: 120px;\n  max-height: 200px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.selects-container .selects-dropdown ul li[_v-39c57c31] {\n  list-style-type: none;\n  padding: 11px 7px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  line-height: 100%;\n}\n.selects-container .selects-dropdown ul .yourchosen[_v-39c57c31] {\n  color: #5bc0de;\n}\n.selects-container .selects-dropdown ul li[_v-39c57c31]:hover {\n  color: #5bc0de;\n  background: rgba(237, 238, 241, 0.5);\n}\n.selects-container.selects-active .selects-choice[_v-39c57c31] {\n  border: 1px solid #5bc0de;\n}\n.selects-container .triangle-up[_v-39c57c31] {\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 10px solid #5bc0de;\n}\n.selects-container .triangle-down[_v-39c57c31] {\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-top: 10px solid #5bc0de;\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	props: {
		selectsList: Array,
		/**
   * include edit and read kinds
   */
		type: {
			type: String,
			default: 'edit'
		},
		defaultObj: {
			type: Object
		},
		onChoice: Function
	},
	data: function data() {
		return {
			arrowType: {
				triangleUp: 'triangle-up',
				triangleDown: 'triangle-down'
			},
			show: false,
			chosen: {}
		};
	},

	watch: {
		defaultObj: function defaultObj(value) {
			this.initDefault();
		}
	},
	created: function created() {
		this.initDefault();
	},

	methods: {
		/**
   * init default data
   */
		initDefault: function initDefault() {
			var _this = this;

			if (this.defaultObj && this.defaultObj.hasOwnProperty('id')) {
				this.chosen = this.defaultObj;
				this.onChoice && this.onChoice(this.chosen);
			}
		},

		/**
   * open drop down list
   */
		openDropDown: function openDropDown() {
			this.show = !this.show;
		},

		/**
   * hide drop down list
   */
		hideDrop: function hideDrop() {
			this.show = false;
		},
		blur: function blur() {
			var _this = this;

			setTimeout(function () {
				if (_this.show) {
					_this.show = false;
				}
			}, 100);
		},

		/**
   * choice what you want
   */
		choiceOne: function choiceOne(item) {
			this.chosen = item;
			this.hideDrop();
			this.onChoice && this.onChoice(item);
		}
	}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"selects-container\" :class=\"{'selects-active': show}\" _v-39c57c31=\"\">\n\t<template v-if=\"type=='read'\">\n\t\t<a href=\"javascript:void(0)\" class=\"selects-choice-disabled\" _v-39c57c31=\"\">\n\t\t\t<span class=\"choice-chosen\" _v-39c57c31=\"\">{{chosen.text}}</span>\n\t\t\t<span class=\"choice-arrow\" _v-39c57c31=\"\"><b :class=\"show ? arrowType.triangleUp : arrowType.triangleDown\" _v-39c57c31=\"\"></b></span>\n\t\t</a>\n\t</template>\n\t<template v-else=\"\">\n\t\t<a href=\"javascript:void(0)\" class=\"selects-choice\" @click=\"openDropDown\" _v-39c57c31=\"\">\n\t\t\t<span class=\"choice-chosen\" _v-39c57c31=\"\">{{chosen.text}}</span>\n\t\t\t<span class=\"choice-arrow\" _v-39c57c31=\"\"><b :class=\"show ? arrowType.triangleUp : arrowType.triangleDown\" _v-39c57c31=\"\"></b></span>\n\t\t</a>\n\t</template>\n\t<div class=\"selects-dropdown\" v-show=\"show\" _v-39c57c31=\"\">\n\t\t<ul _v-39c57c31=\"\">\n\t\t\t<li v-for=\"item in selectsList\" :class=\"{yourchosen: item.id == chosen.id}\" @click=\"choiceOne(item)\" _v-39c57c31=\"\">{{item.text}}</li>\n\t\t</ul>\n\t</div>\n\t<div class=\"overlay\" @click=\"hideDrop\" v-show=\"show\" _v-39c57c31=\"\"></div>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache[".selects-container[_v-39c57c31] {\n  font-size: 13px;\n  min-width: 120px;\n  ze: 12px;\n  text-indent: 0;\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.selects-container ul[_v-39c57c31],\n.selects-container li[_v-39c57c31] {\n  padding: 0;\n}\n.selects-container a[_v-39c57c31] {\n  color: #5bc0de;\n  transition: all .3s;\n  -moz-transition: all .3s;\n  -webkit-transition: all .3s;\n  -o-transition: all .3s;\n}\n.selects-container .overlay[_v-39c57c31] {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background: transparent;\n  z-index: 200;\n  left: 0;\n  top: 0;\n}\n.selects-container .selects-choice[_v-39c57c31],\n.selects-container .selects-choice-disabled[_v-39c57c31] {\n  background-color: #fcfcfc;\n  display: block;\n  height: 36px;\n  line-height: 36px;\n  padding: 0 0 0 10px;\n  overflow: hidden;\n  position: relative;\n  border: 1px solid #e2e3e5;\n  text-decoration: none;\n  background-clip: padding-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.selects-container .selects-choice .choice-chosen[_v-39c57c31],\n.selects-container .selects-choice-disabled .choice-chosen[_v-39c57c31] {\n  margin-right: 30px;\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.selects-container .selects-choice .choice-arrow[_v-39c57c31],\n.selects-container .selects-choice-disabled .choice-arrow[_v-39c57c31] {\n  display: inline-block;\n  width: 34px;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.selects-container .selects-choice .choice-arrow b[_v-39c57c31],\n.selects-container .selects-choice-disabled .choice-arrow b[_v-39c57c31] {\n  display: block;\n  margin: 13px 0 0 9px;\n}\n.selects-container .selects-choice-disabled[_v-39c57c31] {\n  color: #a59c9c;\n  background: #e2e3e5;\n}\n.selects-container .selects-dropdown[_v-39c57c31] {\n  box-sizing: border-box;\n  background-color: #fcfcfc;\n  border: 1px solid #e2e3e5;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 9999;\n  width: 100%;\n  min-width: 120px;\n  max-height: 200px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.selects-container .selects-dropdown ul li[_v-39c57c31] {\n  list-style-type: none;\n  padding: 11px 7px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  line-height: 100%;\n}\n.selects-container .selects-dropdown ul .yourchosen[_v-39c57c31] {\n  color: #5bc0de;\n}\n.selects-container .selects-dropdown ul li[_v-39c57c31]:hover {\n  color: #5bc0de;\n  background: rgba(237, 238, 241, 0.5);\n}\n.selects-container.selects-active .selects-choice[_v-39c57c31] {\n  border: 1px solid #5bc0de;\n}\n.selects-container .triangle-up[_v-39c57c31] {\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 10px solid #5bc0de;\n}\n.selects-container .triangle-down[_v-39c57c31] {\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-top: 10px solid #5bc0de;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-39c57c31", module.exports)
  } else {
    hotAPI.update("_v-39c57c31", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}