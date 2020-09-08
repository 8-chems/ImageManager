(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--13-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_shared_Footer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! #Components/shared/Footer.vue */ "./resources/js/components/shared/Footer.vue");
/* harmony import */ var _Components_shared_Header2_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! #Components/shared/Header2.vue */ "./resources/js/components/shared/Header2.vue");
/* harmony import */ var _Components_shared_NavigationDrawer2_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! #Components/shared/NavigationDrawer2.vue */ "./resources/js/components/shared/NavigationDrawer2.vue");
/* harmony import */ var _Components_shared_MyImagesBrowser_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! #Components/shared/MyImagesBrowser.vue */ "./resources/js/components/shared/MyImagesBrowser.vue");
/* harmony import */ var _Components_AppNavigation_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! #Components/AppNavigation.vue */ "./resources/js/components/AppNavigation.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'App',
  components: {
    NavigationDrawer: _Components_shared_NavigationDrawer2_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Footer: _Components_shared_Footer_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Header: _Components_shared_Header2_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    MyImagebrowser: _Components_shared_MyImagesBrowser_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AppNavigation: _Components_AppNavigation_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      items: [{
        title: 'Home',
        icon: 'dashboard'
      }, {
        title: 'About',
        icon: 'question_answer'
      }],
      links: ['Home', 'Contacts', 'Settings'],
      mini: true
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/MyImagesBrowser.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--13-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/MyImagesBrowser.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_shared_Pagination_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! #Components/shared/Pagination.vue */ "./resources/js/components/shared/Pagination.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Pagination: _Components_shared_Pagination_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      image: null,
      imagefile: null,
      uploadp: false,
      readonly: true,
      uiname: "Name of image to upload",
      iname: "Image: Hello PIPO",
      iid: "",
      bottomNav: 'recent',
      edit: false,
      canceling: false,
      comment: "helloo",
      ex_comment: "",
      fullname: "John Leider",
      avatarurl: "https://cdn.vuetifyjs.com/images/john.png",
      colors: ['green', 'secondary', 'yellow darken-4', 'red lighten-2', 'orange darken-1'],
      cycle: false,
      slides: ['First'],
      images: []
    };
  },
  watch: {
    fullname: function fullname() {}
  },
  methods: {
    onFileChange: function onFileChange(files) {
      var _this = this;

      files.forEach(function (file, index) {
        var reader = new FileReader();
        reader.addEventListener('load', function (e) {
          return _this.image = e.target.result;
        });
        reader.readAsDataURL(file);
      });
    },
    upload: function upload() {
      this.$store.dispatch('upload', {
        image: this.image,
        comment: ' ',
        name: this.uiname
      }).then(function () {
        alert('Image has been successfully uploaded ...');
      })["catch"](function (err) {
        console.log(err); // alert(err)
      });
    },
    check_comment: function check_comment(ex, cur) {
      if (ex == cur && !this.canceling) this.edit = false;else if (!this.canceling) alert("Please, check your comment !");else this.canceling = false;
    },
    recover_comment: function recover_comment() {
      this.canceling = true;
      this.comment = this.ex_comment;
      this.edit = false;
    },
    save_comment: function save_comment() {
      // save to db
      this.ex_comment = this.comment;
      this.edit = false;
    },
    save_iname: function save_iname() {
      if (!this.readonly) {
        this.readonly = true; // save in the db ))

        alert("The image name has been updated ...");
      } else {}
    },
    modify_iname: function modify_iname() {
      this.$refs.iname.focus();
      this.readonly = false;
    },
    delete_image: function delete_image() {
      // delete from db
      // swich browser to next image
      alert("The image has been deleleted from your profile ...");
    }
  },
  created: function created() {
    var _this2 = this;

    this.$store.dispatch('getImages').then(function () {
      _this2.imagefile = _this2.$store.getters.getCurrentImageData;
      _this2.comment = _this2.imagefile['image']['comment']; // in real i need to load the comment from the DB

      _this2.ex_comment = _this2.comment;
      _this2.iname = _this2.imagefile['image']['name']; // alert('after function: '+this.imagefile) 
    })["catch"](function (err) {
      console.log(err);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/Pagination.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--13-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/Pagination.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
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
  data: function data() {
    return {
      page: 2
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/MyImagesBrowser.vue?vue&type=style&index=0&id=ee4e8ef6&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--13-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/MyImagesBrowser.vue?vue&type=style&index=0&id=ee4e8ef6&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.centered-input[data-v-ee4e8ef6] input {\n      text-align: center\n}\n.row1[data-v-ee4e8ef6] {\n    background: linear-gradient(to bottom left, #660066 0%, #99ff99 50%);\n}\nimg[data-v-ee4e8ef6]{\n        max-height: 300px;\n        max-width: 200px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/MyImagesBrowser.vue?vue&type=style&index=0&id=ee4e8ef6&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--13-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/MyImagesBrowser.vue?vue&type=style&index=0&id=ee4e8ef6&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--13-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyImagesBrowser.vue?vue&type=style&index=0&id=ee4e8ef6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/MyImagesBrowser.vue?vue&type=style&index=0&id=ee4e8ef6&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--13-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c("Header"),
      _vm._v(" "),
      _c("v-main", [_c("v-container", [_c("MyImagebrowser")], 1)], 1),
      _vm._v(" "),
      _c("NavigationDrawer"),
      _vm._v(" "),
      _c("Footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/MyImagesBrowser.vue?vue&type=template&id=ee4e8ef6&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--13-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/MyImagesBrowser.vue?vue&type=template&id=ee4e8ef6&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "mx-auto", attrs: { elevation: "24", "max-width": "3000" } },
    [
      _c("v-system-bar", { attrs: { "lights-out": "" } }),
      _vm._v(" "),
      _c(
        "v-carousel",
        {
          attrs: {
            continuous: false,
            cycle: _vm.cycle,
            "show-arrows": false,
            "hide-delimiter-background": "",
            "hide-delimiters": "",
            height: "450",
            width: "1600"
          }
        },
        _vm._l(_vm.slides, function(slide, i) {
          return _c(
            "v-carousel-item",
            { key: i },
            [
              _c(
                "v-sheet",
                { attrs: { color: _vm.colors[i], height: "100%", tile: "" } },
                [
                  _c(
                    "v-row",
                    {
                      staticClass: "fill-height",
                      attrs: { align: "center", justify: "center" }
                    },
                    [
                      _c("div", { staticClass: "display-3" }, [
                        _vm._v(_vm._s(slide) + " Slide")
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c(
            "v-row",
            { staticClass: "row1", attrs: { "fill-width": "", rounded: "" } },
            [
              _c(
                "v-col",
                { staticClass: "col-md-3 ml-5" },
                [
                  _c("v-text-field", {
                    ref: "iname",
                    staticClass: "centered-input text--darken-43 mt-5",
                    attrs: {
                      label: " ",
                      value: _vm.iname,
                      outlined: "",
                      readonly: _vm.readonly,
                      rounded: "",
                      filled: "",
                      dense: ""
                    },
                    on: {
                      blur: function($event) {
                        return _vm.save_iname()
                      }
                    },
                    model: {
                      value: _vm.iname,
                      callback: function($$v) {
                        _vm.iname = $$v
                      },
                      expression: "iname"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                { attrs: { "fill-width": "" } },
                [
                  _c(
                    "v-row",
                    { staticClass: "col-md-3 mx-auto" },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "ma-auto",
                          attrs: { color: "primary" },
                          on: {
                            click: function($event) {
                              return _vm.plusSlides(-1)
                            }
                          }
                        },
                        [_vm._v("❮")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "ma-auto",
                          attrs: { color: "primary" },
                          on: {
                            click: function($event) {
                              return _vm.plusSlides(1)
                            }
                          }
                        },
                        [_vm._v("❯")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.uploadp
        ? _c(
            "v-container",
            { attrs: { "fill-height": "", fluid: "" } },
            [
              _c(
                "v-card",
                { attrs: { outlined: "", tile: "", width: "100%" } },
                [
                  _c(
                    "v-row",
                    [
                      _c("v-col", { staticClass: "col-md-2" }, [
                        _c("img", {
                          staticClass: "img-responsive",
                          attrs: { src: _vm.image }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c(
                            "v-row",
                            { attrs: { align: "center", justify: "center" } },
                            [
                              _c(
                                "v-col",
                                { staticClass: "col-md-8" },
                                [
                                  _c("v-file-input", {
                                    ref: "selector",
                                    staticClass: "mt-5",
                                    attrs: {
                                      label: "Image input",
                                      height: "30",
                                      accept: "image/*",
                                      multiple: "",
                                      "prepend-icon": "mdi-camera"
                                    },
                                    on: { change: _vm.onFileChange }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { staticClass: "col-md-3" },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Image Name",
                                      height: "60",
                                      color: "grey",
                                      outlined: "",
                                      dense: "",
                                      filled: "",
                                      value: _vm.uiname
                                    },
                                    model: {
                                      value: _vm.uiname,
                                      callback: function($$v) {
                                        _vm.uiname = $$v
                                      },
                                      expression: "uiname"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            {
                              staticClass: "pa-5",
                              attrs: { align: "center", justify: "center" }
                            },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mr-5",
                                  attrs: { color: "primary" },
                                  on: { click: _vm.upload }
                                },
                                [_vm._v("Upload ")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "secondary" },
                                  on: {
                                    click: function($event) {
                                      _vm.uploadp = false
                                    }
                                  }
                                },
                                [_vm._v("Cancel ")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-bottom-navigation",
        {
          model: {
            value: _vm.bottomNav,
            callback: function($$v) {
              _vm.bottomNav = $$v
            },
            expression: "bottomNav"
          }
        },
        [
          _c(
            "v-btn",
            {
              attrs: { value: "add" },
              on: {
                click: function($event) {
                  _vm.uploadp = true
                }
              }
            },
            [
              _c("span", [_vm._v("Add new picture")]),
              _vm._v(" "),
              _c("v-icon", [_vm._v("mdi-plus-circle-outline")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { value: "delete" },
              on: {
                click: function($event) {
                  return _vm.delete_image()
                }
              }
            },
            [
              _c("span", [_vm._v("Delete")]),
              _vm._v(" "),
              _c("v-icon", [_vm._v("mdi-delete")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { value: "rename" },
              on: {
                click: function($event) {
                  return _vm.modify_iname()
                }
              }
            },
            [
              _c("span", [_vm._v("Rename")]),
              _vm._v(" "),
              _c("v-icon", [_vm._v("mdi-form-textbox")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        { attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            { attrs: { "fill-width": "" } },
            [_c("v-col", { staticClass: "col-md-2 mx-auto" })],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "grey lighten-5" },
        [
          _c(
            "v-row",
            { attrs: { "no-gutters": "" } },
            [
              _c(
                "v-col",
                {
                  staticClass: "pa-5",
                  attrs: { cols: "10", sm: "6", md: "9" }
                },
                [
                  _c(
                    "v-card",
                    {},
                    [
                      _c(
                        "v-card-text",
                        [
                          _c("v-textarea", {
                            attrs: {
                              clearable: "",
                              filled: "",
                              outlined: "",
                              rounded: "",
                              "no-resize": "",
                              "persistent-hint": "",
                              "no-gutters": "",
                              "clear-icon": "cancel",
                              label: "Comment: ",
                              value: "This is clearable text.",
                              "fill-height": "",
                              height: "50"
                            },
                            on: {
                              click: function($event) {
                                _vm.edit = true
                              },
                              blur: function($event) {
                                return _vm.check_comment(
                                  _vm.ex_comment,
                                  _vm.comment
                                )
                              }
                            },
                            model: {
                              value: _vm.comment,
                              callback: function($$v) {
                                _vm.comment = $$v
                              },
                              expression: "comment"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.edit
                        ? _c(
                            "v-row",
                            { staticClass: "ma-1" },
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "ma-5",
                                  attrs: { color: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.recover_comment()
                                    }
                                  }
                                },
                                [_vm._v("Cancel")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "ma-5",
                                  attrs: { color: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.save_comment(_vm.comment)
                                    }
                                  }
                                },
                                [_vm._v("Save")]
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "pa-5", attrs: { cols: "1", md: "3" } },
                [
                  _c(
                    "v-card",
                    { attrs: { height: "110" } },
                    [
                      _c(
                        "v-list",
                        { staticClass: "mx-auto" },
                        [
                          _c(
                            "v-list-item",
                            [
                              _c(
                                "v-list-item-avatar",
                                [
                                  _c("v-img", { attrs: { src: _vm.avatarurl } })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item-content",
                                [
                                  _c("v-list-item-title", [
                                    _vm._v(_vm._s(_vm.fullname))
                                  ]),
                                  _vm._v(" "),
                                  _c("v-list-item-subtitle", [_vm._v("Author")])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/Pagination.vue?vue&type=template&id=2895fa2e&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--13-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/Pagination.vue?vue&type=template&id=2895fa2e& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-row",
    [
      _c("v-spacer"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-center pr-5" },
        [
          _c("v-pagination", {
            attrs: { length: 10, circle: "" },
            model: {
              value: _vm.page,
              callback: function($$v) {
                _vm.page = $$v
              },
              expression: "page"
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Dashboard.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Dashboard.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=040e2ab9& */ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VMain */ "./node_modules/vuetify/lib/components/VMain/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VContainer"],VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_6__["VMain"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_13_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--13-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_13_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_13_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--13-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=040e2ab9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_13_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_13_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/shared/MyImagesBrowser.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/shared/MyImagesBrowser.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyImagesBrowser_vue_vue_type_template_id_ee4e8ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyImagesBrowser.vue?vue&type=template&id=ee4e8ef6&scoped=true& */ "./resources/js/components/shared/MyImagesBrowser.vue?vue&type=template&id=ee4e8ef6&scoped=true&");
/* harmony import */ var _MyImagesBrowser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyImagesBrowser.vue?vue&type=script&lang=js& */ "./resources/js/components/shared/MyImagesBrowser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MyImagesBrowser_vue_vue_type_style_index_0_id_ee4e8ef6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyImagesBrowser.vue?vue&type=style&index=0&id=ee4e8ef6&scoped=true&lang=css& */ "./resources/js/components/shared/MyImagesBrowser.vue?vue&type=style&index=0&id=ee4e8ef6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VBottomNavigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBottomNavigation */ "./node_modules/vuetify/lib/components/VBottomNavigation/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VCarousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VCarousel */ "./node_modules/vuetify/lib/components/VCarousel/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VFileInput */ "./node_modules/vuetify/lib/components/VFileInput/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VSheet */ "./node_modules/vuetify/lib/components/VSheet/index.js");
/* harmony import */ var vuetify_lib_components_VSystemBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VSystemBar */ "./node_modules/vuetify/lib/components/VSystemBar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MyImagesBrowser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyImagesBrowser_vue_vue_type_template_id_ee4e8ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyImagesBrowser_vue_vue_type_template_id_ee4e8ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ee4e8ef6",
  null
  
)

/* vuetify-loader */
























_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBottomNavigation: vuetify_lib_components_VBottomNavigation__WEBPACK_IMPORTED_MODULE_5__["VBottomNavigation"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCardText"],VCarousel: vuetify_lib_components_VCarousel__WEBPACK_IMPORTED_MODULE_8__["VCarousel"],VCarouselItem: vuetify_lib_components_VCarousel__WEBPACK_IMPORTED_MODULE_8__["VCarouselItem"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VContainer"],VFileInput: vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_10__["VFileInput"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_12__["VImg"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItem"],VListItemAvatar: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemAvatar"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemContent"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemTitle"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VRow"],VSheet: vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_14__["VSheet"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VSpacer"],VSystemBar: vuetify_lib_components_VSystemBar__WEBPACK_IMPORTED_MODULE_15__["VSystemBar"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_16__["VTextField"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_17__["VTextarea"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/shared/MyImagesBrowser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/MyImagesBrowser.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/shared/MyImagesBrowser.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_13_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyImagesBrowser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--13-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyImagesBrowser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/MyImagesBrowser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_13_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyImagesBrowser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/MyImagesBrowser.vue?vue&type=style&index=0&id=ee4e8ef6&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/shared/MyImagesBrowser.vue?vue&type=style&index=0&id=ee4e8ef6&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_13_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyImagesBrowser_vue_vue_type_style_index_0_id_ee4e8ef6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--13-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyImagesBrowser.vue?vue&type=style&index=0&id=ee4e8ef6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/MyImagesBrowser.vue?vue&type=style&index=0&id=ee4e8ef6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_13_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyImagesBrowser_vue_vue_type_style_index_0_id_ee4e8ef6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_13_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyImagesBrowser_vue_vue_type_style_index_0_id_ee4e8ef6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_13_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyImagesBrowser_vue_vue_type_style_index_0_id_ee4e8ef6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_13_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyImagesBrowser_vue_vue_type_style_index_0_id_ee4e8ef6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_13_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyImagesBrowser_vue_vue_type_style_index_0_id_ee4e8ef6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/shared/MyImagesBrowser.vue?vue&type=template&id=ee4e8ef6&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/shared/MyImagesBrowser.vue?vue&type=template&id=ee4e8ef6&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_13_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyImagesBrowser_vue_vue_type_template_id_ee4e8ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--13-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyImagesBrowser.vue?vue&type=template&id=ee4e8ef6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/MyImagesBrowser.vue?vue&type=template&id=ee4e8ef6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_13_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyImagesBrowser_vue_vue_type_template_id_ee4e8ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_13_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyImagesBrowser_vue_vue_type_template_id_ee4e8ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/shared/Pagination.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/shared/Pagination.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pagination_vue_vue_type_template_id_2895fa2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=2895fa2e& */ "./resources/js/components/shared/Pagination.vue?vue&type=template&id=2895fa2e&");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js& */ "./resources/js/components/shared/Pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VPagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VPagination */ "./node_modules/vuetify/lib/components/VPagination/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pagination_vue_vue_type_template_id_2895fa2e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pagination_vue_vue_type_template_id_2895fa2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VPagination: vuetify_lib_components_VPagination__WEBPACK_IMPORTED_MODULE_4__["VPagination"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VRow"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/shared/Pagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/Pagination.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/shared/Pagination.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_13_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--13-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/Pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_13_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/Pagination.vue?vue&type=template&id=2895fa2e&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/shared/Pagination.vue?vue&type=template&id=2895fa2e& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_13_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_2895fa2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--13-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=template&id=2895fa2e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/Pagination.vue?vue&type=template&id=2895fa2e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_13_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_2895fa2e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_13_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_2895fa2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);