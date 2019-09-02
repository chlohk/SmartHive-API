(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");





var routes = [
    { path: '', component: _work_work_component__WEBPACK_IMPORTED_MODULE_4__["WorkComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<app-spinner [hidden]=\"!spinnerEnabled\"></app-spinner>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/spinner/spinner.service */ "./src/app/util/spinner/spinner.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(spinnerService) {
        this.spinnerService = spinnerService;
        this.subscriptions = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.spinnerService.getSpinnerStatus.subscribe(function (ss) { return _this.spinnerEnabled = ss.enabled; }));
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _example_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./example/example.component */ "./src/app/example/example.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _settings_new_colony_new_colony_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/new-colony/new-colony.component */ "./src/app/settings/new-colony/new-colony.component.ts");
/* harmony import */ var _settings_colony_details_edit_hive_edit_hive_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings/colony-details/edit-hive/edit-hive.component */ "./src/app/settings/colony-details/edit-hive/edit-hive.component.ts");
/* harmony import */ var _settings_colony_details_new_hive_new_hive_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/colony-details/new-hive/new-hive.component */ "./src/app/settings/colony-details/new-hive/new-hive.component.ts");
/* harmony import */ var _settings_colony_details_edit_colony_edit_colony_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings/colony-details/edit-colony/edit-colony.component */ "./src/app/settings/colony-details/edit-colony/edit-colony.component.ts");
/* harmony import */ var _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settings/shared/colonies.service */ "./src/app/settings/shared/colonies.service.ts");
/* harmony import */ var _settings_colony_details_colony_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./settings/colony-details/colony-details.component */ "./src/app/settings/colony-details/colony-details.component.ts");
/* harmony import */ var _settings_shared_settings_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./settings/shared/settings-data.service */ "./src/app/settings/shared/settings-data.service.ts");
/* harmony import */ var _work_reference_mother_situation_mother_situation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./work/reference/mother-situation/mother-situation.component */ "./src/app/work/reference/mother-situation/mother-situation.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _work_work_header_work_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./work/work-header/work-header.component */ "./src/app/work/work-header/work-header.component.ts");
/* harmony import */ var _util_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./util/spinner/spinner.component */ "./src/app/util/spinner/spinner.component.ts");
/* harmony import */ var _settings_shared_settings_navigation_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./settings/shared/settings-navigation.service */ "./src/app/settings/shared/settings-navigation.service.ts");
/* harmony import */ var _util_jw_modal_jw_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./util/jw-modal/jw-modal.component */ "./src/app/util/jw-modal/jw-modal.component.ts");
/* harmony import */ var _util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./util/jw-modal/jw-modal.service */ "./src/app/util/jw-modal/jw-modal.service.ts");
/* harmony import */ var _work_reference_freak_mom_freak_mom_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./work/reference/freak-mom/freak-mom.component */ "./src/app/work/reference/freak-mom/freak-mom.component.ts");
/* harmony import */ var _work_reference_mother_frame_mother_frame_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./work/reference/mother-frame/mother-frame.component */ "./src/app/work/reference/mother-frame/mother-frame.component.ts");
/* harmony import */ var _work_mother_mother_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./work/mother/mother.component */ "./src/app/work/mother/mother.component.ts");
/* harmony import */ var _work_mother_seen_seen_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./work/mother/seen/seen.component */ "./src/app/work/mother/seen/seen.component.ts");
/* harmony import */ var _work_mother_in_cage_in_cage_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./work/mother/in-cage/in-cage.component */ "./src/app/work/mother/in-cage/in-cage.component.ts");
/* harmony import */ var _work_mother_hatched_hatched_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./work/mother/hatched/hatched.component */ "./src/app/work/mother/hatched/hatched.component.ts");
/* harmony import */ var _work_mother_unknown_unknown_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./work/mother/unknown/unknown.component */ "./src/app/work/mother/unknown/unknown.component.ts");
/* harmony import */ var _work_mother_missing_missing_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./work/mother/missing/missing.component */ "./src/app/work/mother/missing/missing.component.ts");
/* harmony import */ var _work_mother_freak_freak_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./work/mother/freak/freak.component */ "./src/app/work/mother/freak/freak.component.ts");
/* harmony import */ var _work_mother_un_caged_un_caged_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./work/mother/un-caged/un-caged.component */ "./src/app/work/mother/un-caged/un-caged.component.ts");
/* harmony import */ var _work_mother_mom_data_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./work/mother/mom-data.service */ "./src/app/work/mother/mom-data.service.ts");
/* harmony import */ var _work_mother_mom_attributes_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./work/mother/mom-attributes.service */ "./src/app/work/mother/mom-attributes.service.ts");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./util/util.service */ "./src/app/util/util.service.ts");
/* harmony import */ var _work_size_size_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./work/size/size.component */ "./src/app/work/size/size.component.ts");
/* harmony import */ var _work_size_size_edit_size_edit_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./work/size/size-edit/size-edit.component */ "./src/app/work/size/size-edit/size-edit.component.ts");
/* harmony import */ var _work_size_size_view_size_view_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./work/size/size-view/size-view.component */ "./src/app/work/size/size-view/size-view.component.ts");
/* harmony import */ var _work_size_size_data_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./work/size/size-data.service */ "./src/app/work/size/size-data.service.ts");
/* harmony import */ var _work_size_size_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./work/size/size.service */ "./src/app/work/size/size.service.ts");
/* harmony import */ var _util_long_press_directive__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./util/long-press.directive */ "./src/app/util/long-press.directive.ts");
/* harmony import */ var _work_next_time_next_time_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./work/next-time/next-time.component */ "./src/app/work/next-time/next-time.component.ts");
/* harmony import */ var _work_notes_notes_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./work/notes/notes.component */ "./src/app/work/notes/notes.component.ts");
/* harmony import */ var _work_planning_planning_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./work/planning/planning.component */ "./src/app/work/planning/planning.component.ts");
/* harmony import */ var _work_planning_plan_element_plan_element_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./work/planning/plan-element/plan-element.component */ "./src/app/work/planning/plan-element/plan-element.component.ts");
/* harmony import */ var _work_planning_planning_mgmt_planning_mgmt_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./work/planning/planning-mgmt/planning-mgmt.component */ "./src/app/work/planning/planning-mgmt/planning-mgmt.component.ts");
/* harmony import */ var _work_planning_planning_mgmt_planning_mgmt_edit_area_planning_mgmt_edit_area_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./work/planning/planning-mgmt/planning-mgmt-edit-area/planning-mgmt-edit-area.component */ "./src/app/work/planning/planning-mgmt/planning-mgmt-edit-area/planning-mgmt-edit-area.component.ts");
/* harmony import */ var _util_days_until_pipe__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./util/days-until.pipe */ "./src/app/util/days-until.pipe.ts");
/* harmony import */ var _work_planning_planning_dropdown_planning_dropdown_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./work/planning/planning-dropdown/planning-dropdown.component */ "./src/app/work/planning/planning-dropdown/planning-dropdown.component.ts");
/* harmony import */ var _work_planning_planning_dropdown_planning_dropdown_element_planning_dropdown_element_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./work/planning/planning-dropdown/planning-dropdown-element/planning-dropdown-element.component */ "./src/app/work/planning/planning-dropdown/planning-dropdown-element/planning-dropdown-element.component.ts");
/* harmony import */ var _work_planning_planning_dropdown_planning_dropdown_mgmt_edit_area_planning_dropdown_mgmt_edit_area_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./work/planning/planning-dropdown/planning-dropdown-mgmt-edit-area/planning-dropdown-mgmt-edit-area.component */ "./src/app/work/planning/planning-dropdown/planning-dropdown-mgmt-edit-area/planning-dropdown-mgmt-edit-area.component.ts");
/* harmony import */ var _work_notes_note_element_note_element_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./work/notes/note-element/note-element.component */ "./src/app/work/notes/note-element/note-element.component.ts");
/* harmony import */ var _work_notes_note_mgmt_note_mgmt_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./work/notes/note-mgmt/note-mgmt.component */ "./src/app/work/notes/note-mgmt/note-mgmt.component.ts");
/* harmony import */ var _work_notes_note_mgmt_note_mgmt_edit_area_note_mgmt_edit_area_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./work/notes/note-mgmt/note-mgmt-edit-area/note-mgmt-edit-area.component */ "./src/app/work/notes/note-mgmt/note-mgmt-edit-area/note-mgmt-edit-area.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _work_overview_overview_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./work/overview/overview.component */ "./src/app/work/overview/overview.component.ts");
/* harmony import */ var _work_planning_plan_element_deadline_text_pipe__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./work/planning/plan-element/deadline-text.pipe */ "./src/app/work/planning/plan-element/deadline-text.pipe.ts");
/* harmony import */ var _work_planning_plan_element_deadline_class_pipe__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./work/planning/plan-element/deadline-class.pipe */ "./src/app/work/planning/plan-element/deadline-class.pipe.ts");
/* harmony import */ var _work_planning_plan_element_plan_text_pipe__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./work/planning/plan-element/plan-text.pipe */ "./src/app/work/planning/plan-element/plan-text.pipe.ts");
/* harmony import */ var _work_mother_mother_status_text_pipe__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./work/mother/mother-status-text.pipe */ "./src/app/work/mother/mother-status-text.pipe.ts");
/* harmony import */ var _work_overview_mother_status_cell_pipe__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./work/overview/mother-status-cell.pipe */ "./src/app/work/overview/mother-status-cell.pipe.ts");
/* harmony import */ var _work_login_login_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./work/login/login.component */ "./src/app/work/login/login.component.ts");
/* harmony import */ var _util_spinner_spinner_handler_interceptor_service__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./util/spinner/spinner-handler-interceptor.service */ "./src/app/util/spinner/spinner-handler-interceptor.service.ts");

































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _example_example_component__WEBPACK_IMPORTED_MODULE_7__["ExampleComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"],
                _settings_new_colony_new_colony_component__WEBPACK_IMPORTED_MODULE_9__["NewColonyComponent"],
                _settings_colony_details_edit_hive_edit_hive_component__WEBPACK_IMPORTED_MODULE_10__["EditHiveComponent"],
                _settings_colony_details_new_hive_new_hive_component__WEBPACK_IMPORTED_MODULE_11__["NewHiveComponent"],
                _settings_colony_details_edit_colony_edit_colony_component__WEBPACK_IMPORTED_MODULE_12__["EditColonyComponent"],
                _settings_colony_details_colony_details_component__WEBPACK_IMPORTED_MODULE_14__["ColonyDetailsComponent"],
                _work_reference_mother_situation_mother_situation_component__WEBPACK_IMPORTED_MODULE_16__["MotherSituationComponent"],
                _work_work_component__WEBPACK_IMPORTED_MODULE_17__["WorkComponent"],
                _work_work_header_work_header_component__WEBPACK_IMPORTED_MODULE_18__["WorkHeaderComponent"],
                _util_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_19__["SpinnerComponent"],
                _util_jw_modal_jw_modal_component__WEBPACK_IMPORTED_MODULE_21__["JwModalComponent"],
                _work_reference_freak_mom_freak_mom_component__WEBPACK_IMPORTED_MODULE_23__["FreakMomComponent"],
                _work_reference_mother_frame_mother_frame_component__WEBPACK_IMPORTED_MODULE_24__["MotherFrameComponent"],
                _work_mother_mother_component__WEBPACK_IMPORTED_MODULE_25__["MotherComponent"],
                _work_mother_seen_seen_component__WEBPACK_IMPORTED_MODULE_26__["SeenComponent"],
                _work_mother_in_cage_in_cage_component__WEBPACK_IMPORTED_MODULE_27__["InCageComponent"],
                _work_mother_hatched_hatched_component__WEBPACK_IMPORTED_MODULE_28__["HatchedComponent"],
                _work_mother_unknown_unknown_component__WEBPACK_IMPORTED_MODULE_29__["UnknownComponent"],
                _work_mother_missing_missing_component__WEBPACK_IMPORTED_MODULE_30__["MissingComponent"],
                _work_mother_freak_freak_component__WEBPACK_IMPORTED_MODULE_31__["FreakComponent"],
                _work_mother_un_caged_un_caged_component__WEBPACK_IMPORTED_MODULE_32__["UnCagedComponent"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_35__["TimeAgoPipe"],
                _work_size_size_component__WEBPACK_IMPORTED_MODULE_37__["SizeComponent"],
                _work_size_size_edit_size_edit_component__WEBPACK_IMPORTED_MODULE_38__["SizeEditComponent"],
                _work_size_size_view_size_view_component__WEBPACK_IMPORTED_MODULE_39__["SizeViewComponent"],
                _util_long_press_directive__WEBPACK_IMPORTED_MODULE_42__["LongPress"],
                _work_next_time_next_time_component__WEBPACK_IMPORTED_MODULE_43__["NextTimeComponent"],
                _work_notes_notes_component__WEBPACK_IMPORTED_MODULE_44__["NotesComponent"],
                _work_planning_planning_component__WEBPACK_IMPORTED_MODULE_45__["PlanningComponent"],
                _work_planning_plan_element_plan_element_component__WEBPACK_IMPORTED_MODULE_46__["PlanElementComponent"],
                _work_planning_planning_mgmt_planning_mgmt_component__WEBPACK_IMPORTED_MODULE_47__["PlanningMgmtComponent"],
                _work_planning_planning_mgmt_planning_mgmt_edit_area_planning_mgmt_edit_area_component__WEBPACK_IMPORTED_MODULE_48__["PlanningMgmtEditAreaComponent"],
                _util_days_until_pipe__WEBPACK_IMPORTED_MODULE_49__["DaysUntilPipe"],
                _work_planning_planning_dropdown_planning_dropdown_component__WEBPACK_IMPORTED_MODULE_50__["PlanningDropdownComponent"],
                _work_planning_planning_dropdown_planning_dropdown_element_planning_dropdown_element_component__WEBPACK_IMPORTED_MODULE_51__["PlanningDropdownElementComponent"],
                _work_planning_planning_dropdown_planning_dropdown_mgmt_edit_area_planning_dropdown_mgmt_edit_area_component__WEBPACK_IMPORTED_MODULE_52__["PlanningDropdownMgmtEditAreaComponent"],
                _work_notes_note_element_note_element_component__WEBPACK_IMPORTED_MODULE_53__["NoteElementComponent"],
                _work_notes_note_mgmt_note_mgmt_component__WEBPACK_IMPORTED_MODULE_54__["NoteMgmtComponent"],
                _work_notes_note_mgmt_note_mgmt_edit_area_note_mgmt_edit_area_component__WEBPACK_IMPORTED_MODULE_55__["NoteMgmtEditAreaComponent"],
                _work_overview_overview_component__WEBPACK_IMPORTED_MODULE_57__["OverviewComponent"],
                _work_planning_plan_element_deadline_text_pipe__WEBPACK_IMPORTED_MODULE_58__["DeadlineTextPipe"],
                _work_planning_plan_element_deadline_class_pipe__WEBPACK_IMPORTED_MODULE_59__["DeadlineClassPipe"],
                _work_planning_plan_element_plan_text_pipe__WEBPACK_IMPORTED_MODULE_60__["PlanTextPipe"],
                _work_mother_mother_status_text_pipe__WEBPACK_IMPORTED_MODULE_61__["MotherStatusTextPipe"],
                _work_overview_mother_status_cell_pipe__WEBPACK_IMPORTED_MODULE_62__["MotherStatusCellPipe"],
                _work_login_login_component__WEBPACK_IMPORTED_MODULE_63__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_56__["TooltipModule"].forRoot()
            ],
            providers: [
                _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_13__["ColoniesService"],
                _settings_shared_settings_data_service__WEBPACK_IMPORTED_MODULE_15__["SettingsDataService"],
                _settings_shared_settings_navigation_service__WEBPACK_IMPORTED_MODULE_20__["SettingsNavigationService"],
                _util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_22__["JwModalService"],
                _work_mother_mom_data_service__WEBPACK_IMPORTED_MODULE_33__["MomDataService"],
                _work_mother_mom_attributes_service__WEBPACK_IMPORTED_MODULE_34__["MomAttributesService"],
                _util_util_service__WEBPACK_IMPORTED_MODULE_36__["UtilService"],
                _work_size_size_data_service__WEBPACK_IMPORTED_MODULE_40__["SizeDataService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _util_spinner_spinner_handler_interceptor_service__WEBPACK_IMPORTED_MODULE_64__["SpinnerHandlerInterceptorService"],
                    multi: true
                },
                _work_size_size_service__WEBPACK_IMPORTED_MODULE_41__["SizeService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/example/example.component.css":
/*!***********************************************!*\
  !*** ./src/app/example/example.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUvZXhhbXBsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/example/example.component.html":
/*!************************************************!*\
  !*** ./src/app/example/example.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  {{(tasks$ | async) | json}}\n</p>\n"

/***/ }),

/***/ "./src/app/example/example.component.ts":
/*!**********************************************!*\
  !*** ./src/app/example/example.component.ts ***!
  \**********************************************/
/*! exports provided: ExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleComponent", function() { return ExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _example_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example.service */ "./src/app/example/example.service.ts");



var ExampleComponent = /** @class */ (function () {
    function ExampleComponent(service) {
        this.service = service;
    }
    ExampleComponent.prototype.ngOnInit = function () {
        this.tasks$ = this.service.getData();
    };
    ExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example',
            template: __webpack_require__(/*! ./example.component.html */ "./src/app/example/example.component.html"),
            styles: [__webpack_require__(/*! ./example.component.css */ "./src/app/example/example.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_example_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]])
    ], ExampleComponent);
    return ExampleComponent;
}());



/***/ }),

/***/ "./src/app/example/example.service.ts":
/*!********************************************!*\
  !*** ./src/app/example/example.service.ts ***!
  \********************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TaskService = /** @class */ (function () {
    function TaskService(httpClient) {
        this.httpClient = httpClient;
    }
    TaskService.prototype.getData = function () {
        return this.httpClient.get('/api/tasks');
    };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/settings/colony-details/colony-details.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/settings/colony-details/colony-details.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  font-size: 1.5rem;\r\n}\r\n\r\ninput {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvY29sb255LWRldGFpbHMvY29sb255LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbG9ueS1kZXRhaWxzL2NvbG9ueS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/settings/colony-details/colony-details.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/settings/colony-details/colony-details.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-7\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-7\"></div>\n        <div class=\"col-sm-2\">\n          <button\n            type=\"button\"\n            class=\"btn btn-light btn-outline-secondary\"\n            style=\"width: 130px\"\n            (click)=\"onNewHiveButtonClick()\">✚ taru</button>\n        </div>\n      </div>\n      <br>\n      <div  style=\"overflow-y:auto;\n            overflow-x:hidden;\n            border-color: dimgray;\n            border-style: solid;\n            height:350px;\n            font-size: 1.5rem\">\n        <div class=\"row\"\n             style=\"background-color: lightgray; border-style: solid; border-color: white;\"\n              *ngFor=\"let hive of currentlySelectedColony.hives\">\n          <div class=\"col-sm-2 text-center\">\n            <h3>{{hive.number}}</h3>\n          </div>\n          <div class=\"col-sm-6\">\n            <strong>{{hive.description}}</strong>\n          </div>\n          <div class=\"col-sm-2\">\n            <button\n              type=\"button\"\n              class=\"btn btn-light btn-outline-secondary\"\n              (click)=\"onEditHiveButtonClick(hive)\">✎</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-5\" [ngSwitch]=\"loadedComponent\">\n    <app-edit-colony\n      *ngSwitchCase=\"'editColony'\"\n      [currentlySelectedColonyId]=\"currentlySelectedColonyId\"></app-edit-colony>\n    <app-edit-hive\n      *ngSwitchCase=\"'editHive'\"\n      [currentlySelectedColonyId]=\"currentlySelectedColonyId\"\n      [currentlySelectedHive]=\"currentlySelectedHive\"></app-edit-hive>\n    <app-new-hive\n      *ngSwitchCase=\"'newHive'\"\n      [currentlySelectedColonyId]=\"currentlySelectedColonyId\"></app-new-hive>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/settings/colony-details/colony-details.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/settings/colony-details/colony-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: ColonyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColonyDetailsComponent", function() { return ColonyDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_settings_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/settings-navigation.service */ "./src/app/settings/shared/settings-navigation.service.ts");
/* harmony import */ var _shared_colonies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/colonies.service */ "./src/app/settings/shared/colonies.service.ts");




var ColonyDetailsComponent = /** @class */ (function () {
    function ColonyDetailsComponent(settingsNavigationService, coloniesService) {
        this.settingsNavigationService = settingsNavigationService;
        this.coloniesService = coloniesService;
        this.loadedComponent = '';
        this.currentlySelectedColonyId = '';
    }
    ColonyDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsNavigationService.colonyDetailsComponent.subscribe(function (loadedComponent) { return _this.loadedComponent = loadedComponent; });
        this.coloniesService.coloniesDataRetrieved$.subscribe(function () { return _this.currentlySelectedColony = _this.coloniesService.getColonyById(+_this.currentlySelectedColonyId); });
    };
    ColonyDetailsComponent.prototype.ngOnChanges = function () {
        this.currentlySelectedColony = this.coloniesService.getColonyById(+this.currentlySelectedColonyId);
    };
    ColonyDetailsComponent.prototype.onNewHiveButtonClick = function () {
        if (this.settingsNavigationService.currentlyLoadedColonyDetailsComponent === 'newHive') {
            this.settingsNavigationService.colonyDetailsComponent.next('');
        }
        else {
            this.settingsNavigationService.colonyDetailsComponent.next('newHive');
        }
    };
    ColonyDetailsComponent.prototype.onEditHiveButtonClick = function (currentlySelectedHive) {
        if (this.settingsNavigationService.currentlyLoadedColonyDetailsComponent === 'editHive'
            && this.currentlySelectedHive === currentlySelectedHive) {
            this.settingsNavigationService.colonyDetailsComponent.next('');
            this.currentlySelectedHive = null;
        }
        else {
            this.settingsNavigationService.colonyDetailsComponent.next('editHive');
            this.currentlySelectedHive = currentlySelectedHive;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ColonyDetailsComponent.prototype, "currentlySelectedColonyId", void 0);
    ColonyDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-colony-details',
            template: __webpack_require__(/*! ./colony-details.component.html */ "./src/app/settings/colony-details/colony-details.component.html"),
            styles: [__webpack_require__(/*! ./colony-details.component.css */ "./src/app/settings/colony-details/colony-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_settings_navigation_service__WEBPACK_IMPORTED_MODULE_2__["SettingsNavigationService"],
            _shared_colonies_service__WEBPACK_IMPORTED_MODULE_3__["ColoniesService"]])
    ], ColonyDetailsComponent);
    return ColonyDetailsComponent;
}());



/***/ }),

/***/ "./src/app/settings/colony-details/edit-colony/edit-colony.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/settings/colony-details/edit-colony/edit-colony.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myBackGround {\r\n  background-color: lightgray !important;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvY29sb255LWRldGFpbHMvZWRpdC1jb2xvbnkvZWRpdC1jb2xvbnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUF1QztDQUN4QyIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbG9ueS1kZXRhaWxzL2VkaXQtY29sb255L2VkaXQtY29sb255LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlCYWNrR3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXkgIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/settings/colony-details/edit-colony/edit-colony.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/settings/colony-details/edit-colony/edit-colony.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"myBackGround\">\r\n  <br>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-sm-8\">\r\n        <p>id: {{ currentlySelectedColony.id }}</p>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-light btn-outline-secondary\"\r\n          (click)=\"deleteColony()\"\r\n          [ngStyle]=\"warningHasAssociatedHives ? {'border-color': 'red'} : ''\">\r\n          <img\r\n            src=\"assets/img/trash.png\"\r\n            height=\"30px\"\r\n            width=\"30px\"\r\n          >\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"warningHasAssociatedHives\">\r\n      <span style=\"color: red\"><strong>\r\n        Ei saa kustutada kolooniat, millega on seotud tarusid. Enne koloonia kustutamist liiguta\r\n        nad teise koloonia alla või kustuta tarud sootuks.<br>\r\n        <u>NB! Taru kustutamisega kaotad kõik sellega seotud andmed</u>\r\n      </strong></span>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <br>\r\n  <label>\r\n    koloonia nimi\r\n  </label>\r\n  <input\r\n    type=\"text\"\r\n    [value]=\"currentlySelectedColony.name\"\r\n    #newColonyName>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"col-sm-4\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary\"\r\n        (click)=\"cancelEditingColony()\">❌</button>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary\"\r\n        (click)=\"editColony(newColonyName.value)\">✔</button>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <br>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/settings/colony-details/edit-colony/edit-colony.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/settings/colony-details/edit-colony/edit-colony.component.ts ***!
  \******************************************************************************/
/*! exports provided: EditColonyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditColonyComponent", function() { return EditColonyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_colonies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/colonies.service */ "./src/app/settings/shared/colonies.service.ts");
/* harmony import */ var _shared_settings_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/settings-navigation.service */ "./src/app/settings/shared/settings-navigation.service.ts");




var EditColonyComponent = /** @class */ (function () {
    function EditColonyComponent(coloniesService, settingsNavigationService) {
        this.coloniesService = coloniesService;
        this.settingsNavigationService = settingsNavigationService;
        this.warningHasAssociatedHives = false;
        this.currentlySelectedColonyId = '';
    }
    EditColonyComponent.prototype.ngOnInit = function () {
        this.currentlySelectedColony = this.coloniesService.getColonyById(+this.currentlySelectedColonyId);
    };
    EditColonyComponent.prototype.cancelEditingColony = function () {
        this.settingsNavigationService.colonyDetailsComponent.next('');
    };
    EditColonyComponent.prototype.editColony = function (newColonyName) {
        this.coloniesService.editColony(this.currentlySelectedColony, newColonyName);
    };
    EditColonyComponent.prototype.deleteColony = function () {
        if (this.currentlySelectedColony.hives.length != 0) {
            this.warningHasAssociatedHives = true;
            return;
        }
        this.coloniesService.deleteColony(this.currentlySelectedColony);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditColonyComponent.prototype, "currentlySelectedColonyId", void 0);
    EditColonyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-colony',
            template: __webpack_require__(/*! ./edit-colony.component.html */ "./src/app/settings/colony-details/edit-colony/edit-colony.component.html"),
            styles: [__webpack_require__(/*! ./edit-colony.component.css */ "./src/app/settings/colony-details/edit-colony/edit-colony.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_colonies_service__WEBPACK_IMPORTED_MODULE_2__["ColoniesService"],
            _shared_settings_navigation_service__WEBPACK_IMPORTED_MODULE_3__["SettingsNavigationService"]])
    ], EditColonyComponent);
    return EditColonyComponent;
}());



/***/ }),

/***/ "./src/app/settings/colony-details/edit-hive/edit-hive.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/settings/colony-details/edit-hive/edit-hive.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".leftMargin {\r\n  margin-left: 50px;\r\n}\r\n\r\nbutton {\r\n  font-size: 1.5rem;\r\n}\r\n\r\ninput {\r\n  font-size: 1.5rem;\r\n}\r\n\r\ndiv {\r\n  font-size: 1.5rem;\r\n}\r\n\r\nselect {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvY29sb255LWRldGFpbHMvZWRpdC1oaXZlL2VkaXQtaGl2ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUdEO0VBQ0Usa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3MvY29sb255LWRldGFpbHMvZWRpdC1oaXZlL2VkaXQtaGl2ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnRNYXJnaW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcblxyXG5zZWxlY3Qge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/settings/colony-details/edit-hive/edit-hive.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/settings/colony-details/edit-hive/edit-hive.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-5\"></div>\r\n  <div class=\"col-7\">\r\n    <div class=\"card bg-light\" style=\"max-width: 23rem\">\r\n      <div class=\"card-header\"><strong>Taru info muutmine</strong></div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-sm-8\">\r\n            <p>Taru id: {{ newHiveId }}</p>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-light btn-outline-secondary\"\r\n              (click)=\"openVerifyDeleteHiveModal()\">\r\n              <img\r\n                src=\"assets/img/trash.png\"\r\n                height=\"30px\"\r\n                width=\"30px\"\r\n              >\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label>Taru kirjeldus</label>\r\n        </div>\r\n        <div class=\"row\">\r\n          <input\r\n            type=\"text\"\r\n            [(ngModel)]=\"newHiveDescription\">\r\n        </div>\r\n        <div class=\"row\">\r\n          <label>Taru number</label>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"warningHiveNumberExists\">\r\n          <span style=\"color: red\"><strong>Koloonias korduv number</strong></span>\r\n        </div>\r\n        <div class=\"row\">\r\n          <input\r\n            type=\"number\"\r\n            oninput=\"if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n            maxlength=\"3\"\r\n            [ngStyle]=\"warningHiveNumberExists ? {'border-color': 'red'} : ''\"\r\n            [(ngModel)]=\"newHiveNumber\">\r\n        </div>\r\n        <div class=\"row\">\r\n          <label>Kuulub kolooniasse</label>\r\n        </div>\r\n        <div class=\"row\">\r\n          <select\r\n            class=\"custom-select\"\r\n            [(ngModel)]=\"colonyIdToWhichHiveWillBelong\">\r\n            <option value=\"\" disabled selected hidden>Vali koloonia...</option>\r\n            <option\r\n              *ngFor=\"let colony of colonies\"\r\n              [value]=\"colony.id\"> {{ colony.name }}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"card-footer row topMargin\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-danger\"\r\n            (click)=\"cancelAddingNewHive()\">❌</button>\r\n\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-success leftMargin\"\r\n            [disabled]=\"newHiveNumber === null\r\n                        || newHiveNumber <= 0\r\n                        || colonyIdToWhichHiveWillBelong === ''\r\n                        || newHiveDescription === ''\"\r\n            (click)=\"updateHiveData(newHiveId, newHiveNumber, colonyIdToWhichHiveWillBelong, newHiveDescription)\">\r\n            ✔\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<jw-modal   id=\"delete-hive\">\r\n  <h4>Oled kustutamas sellist taru:</h4>\r\n  <div style=\"border-color: dimgray; border-style: solid;\">\r\n    <p>Taru number: <strong>{{ newHiveNumber }}</strong></p>\r\n    <p>Taru kirjeldus: <strong>{{ newHiveDescription ? newHiveDescription : '-' }}</strong></p>\r\n    <p>Hetkel kuulub see taru kolooniasse: <strong>{{ colonyToWhichItBelongsNow.name }}</strong></p>\r\n  </div>\r\n  <p>Kustutades taru kustutakse kogu sellega seonduv info. </p>\r\n  <p *ngIf=\"!warningMustIncludeVerifyText\">\r\n    Kui oled kindel, et soovid taru kustutada, siis kirjuta kontrollvälja \"Ok\" ja kinnita soov nupule vajutusega.\r\n  </p>\r\n  <p *ngIf=\"warningMustIncludeVerifyText\" style=\"color: red\">\r\n    Kui oled kindel, et soovid taru kustutada, siis\r\n    <strong><u>kirjuta kontrollvälja \"Ok\"</u></strong>\r\n     ja kinnita soov nupule vajutusega.\r\n  </p>\r\n  <div class=\"row justify-content-center\"><label>Kontrollväli</label></div>\r\n  <div class=\"row justify-content-center\">\r\n    <input\r\n      #verifyDeleteField\r\n      [ngStyle]=\"warningMustIncludeVerifyText ? {'border-color': 'red'} : ''\">\r\n  </div>\r\n  <div class=\"row justify-content-center\" style=\"margin-top: 20px\">\r\n    <button\r\n      class=\"btn btn-secondary\"\r\n      (click)=\"cancelDeleteHive()\">Tühista</button>\r\n    <button\r\n      class=\"btn btn-danger\"\r\n      style=\"margin-left: 300px\"\r\n      (click)=\"onDeleteHive(verifyDeleteField.value, newHiveId)\">Kustuta taru</button>\r\n  </div>\r\n\r\n</jw-modal>\r\n"

/***/ }),

/***/ "./src/app/settings/colony-details/edit-hive/edit-hive.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/settings/colony-details/edit-hive/edit-hive.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditHiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditHiveComponent", function() { return EditHiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_colonies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/colonies.service */ "./src/app/settings/shared/colonies.service.ts");
/* harmony import */ var _shared_settings_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/settings-navigation.service */ "./src/app/settings/shared/settings-navigation.service.ts");
/* harmony import */ var _shared_hive_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/hive.model */ "./src/app/settings/shared/hive.model.ts");
/* harmony import */ var _util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/jw-modal/jw-modal.service */ "./src/app/util/jw-modal/jw-modal.service.ts");






var EditHiveComponent = /** @class */ (function () {
    function EditHiveComponent(coloniesService, settingsNavigationService, modalService) {
        this.coloniesService = coloniesService;
        this.settingsNavigationService = settingsNavigationService;
        this.modalService = modalService;
        this.newHiveDescription = '';
        this.colonyIdToWhichHiveWillBelong = '';
        this.newHiveNumber = null;
        this.warningHiveNumberExists = false;
        this.warningMustIncludeVerifyText = false;
        this.currentlySelectedColonyId = '';
    }
    EditHiveComponent.prototype.ngOnInit = function () {
    };
    EditHiveComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.colonies = this.coloniesService.getColonies();
        this.colonyIdToWhichHiveWillBelong = this.currentlySelectedColonyId;
        this.newHiveDescription = this.currentlySelectedHive.description;
        this.newHiveNumber = this.currentlySelectedHive.number;
        this.newHiveId = this.currentlySelectedHive.id;
        this.colonyToWhichItBelongsNow = this.colonies.find(function (colony) { return colony.id === +_this.currentlySelectedColonyId; });
    };
    EditHiveComponent.prototype.cancelAddingNewHive = function () {
        this.settingsNavigationService.colonyDetailsComponent.next('');
    };
    EditHiveComponent.prototype.checkIfHiveNumberWouldBeADuplicate = function (id, number, colonyIdHiveBelongsTo) {
        var colonyHiveWouldBelongTo = this.colonies.find(function (colony) { return colony.id === +colonyIdHiveBelongsTo; });
        var hiveWithTheSameNumber = colonyHiveWouldBelongTo.hives.find(function (hive) { return number === hive.number; });
        if (hiveWithTheSameNumber) {
            if (hiveWithTheSameNumber.id === id) {
                return false;
            }
            return true;
        }
        else {
            return false;
        }
    };
    EditHiveComponent.prototype.updateHiveData = function (id, number, colonyIdHiveBelongsTo, description) {
        if (this.checkIfHiveNumberWouldBeADuplicate(id, number, colonyIdHiveBelongsTo)) {
            this.warningHiveNumberExists = true;
            return;
        }
        this.coloniesService.updateHiveData(id, number, colonyIdHiveBelongsTo, description);
    };
    EditHiveComponent.prototype.openVerifyDeleteHiveModal = function () {
        this.warningMustIncludeVerifyText = false;
        this.modalService.open('delete-hive');
    };
    EditHiveComponent.prototype.cancelDeleteHive = function () {
        this.modalService.close('delete-hive');
    };
    EditHiveComponent.prototype.onDeleteHive = function (verifyDeleteText, id) {
        if (verifyDeleteText === 'Ok') {
            this.modalService.close('delete-hive');
            this.coloniesService.deleteHive(id);
        }
        else {
            this.warningMustIncludeVerifyText = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_hive_model__WEBPACK_IMPORTED_MODULE_4__["Hive"])
    ], EditHiveComponent.prototype, "currentlySelectedHive", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditHiveComponent.prototype, "currentlySelectedColonyId", void 0);
    EditHiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-hive',
            template: __webpack_require__(/*! ./edit-hive.component.html */ "./src/app/settings/colony-details/edit-hive/edit-hive.component.html"),
            styles: [__webpack_require__(/*! ./edit-hive.component.css */ "./src/app/settings/colony-details/edit-hive/edit-hive.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_colonies_service__WEBPACK_IMPORTED_MODULE_2__["ColoniesService"],
            _shared_settings_navigation_service__WEBPACK_IMPORTED_MODULE_3__["SettingsNavigationService"],
            _util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_5__["JwModalService"]])
    ], EditHiveComponent);
    return EditHiveComponent;
}());



/***/ }),

/***/ "./src/app/settings/colony-details/new-hive/new-hive.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/settings/colony-details/new-hive/new-hive.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".leftMargin {\r\n  margin-left: 50px;\r\n}\r\n\r\nbutton {\r\n  font-size: 1.5rem;\r\n}\r\n\r\ninput {\r\n  font-size: 1.5rem;\r\n}\r\n\r\ndiv {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvY29sb255LWRldGFpbHMvbmV3LWhpdmUvbmV3LWhpdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbG9ueS1kZXRhaWxzL25ldy1oaXZlL25ldy1oaXZlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdE1hcmdpbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuZGl2IHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/settings/colony-details/new-hive/new-hive.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/settings/colony-details/new-hive/new-hive.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-5\"></div>\r\n  <div class=\"col-7\">\r\n    <div class=\"card bg-light\">\r\n      <div class=\"card-header\"><strong>Taru loomine</strong></div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <label>Uue taru kirjeldus</label>\r\n        </div>\r\n        <div class=\"row\">\r\n          <input\r\n            type=\"text\"\r\n            [(ngModel)]=\"newHiveDescription\">\r\n        </div>\r\n        <div class=\"row\">\r\n          <label>Uue taru number</label>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"warningHiveNumberExists\">\r\n          <span style=\"color: red\"><strong>Koloonias korduv number</strong></span>\r\n        </div>\r\n        <div class=\"row\">\r\n          <input\r\n            type=\"number\"\r\n            oninput=\"if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n            maxlength=\"3\"\r\n            [ngStyle]=\"warningHiveNumberExists ? {'border-color': 'red'} : ''\"\r\n            [(ngModel)]=\"newHiveNumber\">\r\n        </div>\r\n        <div class=\"card-footer row topMargin\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-danger\"\r\n            (click)=\"cancelAddingNewHive()\">❌</button>\r\n\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-success leftMargin\"\r\n            [disabled]=\"newHiveNumber === null\r\n                        || newHiveNumber <= 0\r\n                        || newHiveDescription === ''\"\r\n            (click)=\"addNewHive(newHiveNumber, currentlySelectedColonyId, newHiveDescription)\">\r\n            ✔\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/settings/colony-details/new-hive/new-hive.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/settings/colony-details/new-hive/new-hive.component.ts ***!
  \************************************************************************/
/*! exports provided: NewHiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewHiveComponent", function() { return NewHiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_colonies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/colonies.service */ "./src/app/settings/shared/colonies.service.ts");
/* harmony import */ var _shared_settings_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/settings-navigation.service */ "./src/app/settings/shared/settings-navigation.service.ts");




var NewHiveComponent = /** @class */ (function () {
    function NewHiveComponent(coloniesService, settingsNavigationService) {
        this.coloniesService = coloniesService;
        this.settingsNavigationService = settingsNavigationService;
        this.newHiveDescription = '-';
        this.newHiveNumber = null;
        this.warningHiveNumberExists = false;
        this.currentlySelectedColonyId = '';
    }
    NewHiveComponent.prototype.ngOnInit = function () {
        this.colonies = this.coloniesService.getColonies();
        this.currentlySelectedColony = this.coloniesService.getColonyById(+this.currentlySelectedColonyId);
        this.newHiveNumber = this.newHiveNumberSuggestion();
    };
    NewHiveComponent.prototype.cancelAddingNewHive = function () {
        this.settingsNavigationService.colonyDetailsComponent.next('');
    };
    NewHiveComponent.prototype.addNewHive = function (number, colonyIdHiveBelongsTo, description) {
        var colonyHiveWouldBelongTo = this.colonies.find(function (colony) { return colony.id === +colonyIdHiveBelongsTo; });
        var hiveWithTheSameNumber = colonyHiveWouldBelongTo.hives.find(function (hive) { return number === hive.number; });
        if (hiveWithTheSameNumber) {
            this.warningHiveNumberExists = true;
            return;
        }
        this.coloniesService.addNewHive(number, colonyIdHiveBelongsTo, description);
    };
    NewHiveComponent.prototype.newHiveNumberSuggestion = function () {
        var _loop_1 = function (i) {
            if (this_1.currentlySelectedColony.hives.find(function (hive) { return hive.number === i; })) {
                return "continue";
            }
            else {
                return { value: i };
            }
        };
        var this_1 = this;
        for (var i = 1; i <= 999; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewHiveComponent.prototype, "currentlySelectedColonyId", void 0);
    NewHiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-hive',
            template: __webpack_require__(/*! ./new-hive.component.html */ "./src/app/settings/colony-details/new-hive/new-hive.component.html"),
            styles: [__webpack_require__(/*! ./new-hive.component.css */ "./src/app/settings/colony-details/new-hive/new-hive.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_colonies_service__WEBPACK_IMPORTED_MODULE_2__["ColoniesService"],
            _shared_settings_navigation_service__WEBPACK_IMPORTED_MODULE_3__["SettingsNavigationService"]])
    ], NewHiveComponent);
    return NewHiveComponent;
}());



/***/ }),

/***/ "./src/app/settings/new-colony/new-colony.component.css":
/*!**************************************************************!*\
  !*** ./src/app/settings/new-colony/new-colony.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myBackGround {\r\n  background-color: lightgray !important;\r\n}\r\n\r\n\r\nimg {\r\n  width: 90%;\r\n  height: auto;\r\n}\r\n\r\n\r\nbutton {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n\r\ninput {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvbmV3LWNvbG9ueS9uZXctY29sb255LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7Q0FDeEM7OztBQUdEO0VBQ0UsV0FBVztFQUNYLGFBQWE7Q0FDZDs7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7OztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3MvbmV3LWNvbG9ueS9uZXctY29sb255LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlCYWNrR3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXkgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/settings/new-colony/new-colony.component.html":
/*!***************************************************************!*\
  !*** ./src/app/settings/new-colony/new-colony.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"appNewColonyComponent\" class=\"row\">\r\n  <div class=\"col-5\"></div>\r\n  <div class=\"col-7\">\r\n    <div class=\"card bg-light\" style=\"max-width: 23rem\">\r\n      <div class=\"card-header\"><strong><span style=\"font-size: 1.5rem\">Koloonia loomine</span></strong></div>\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title\">Uue koloonia nimi</h4>\r\n        <br>\r\n        <input\r\n          type=\"text\"\r\n          [(ngModel)]=\"newColonyName\">\r\n        <br><br><br>\r\n        <div class=\"card-footer\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-danger\"\r\n            (click)=\"cancelAddingNewColony()\"\r\n            style=\"margin: 20px\">❌</button>\r\n\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-success\"\r\n            [disabled]=\"newColonyName === ''\"\r\n            (click)=\"addNewColony()\"\r\n            style=\"margin: 20px\">\r\n            ✔\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/settings/new-colony/new-colony.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/settings/new-colony/new-colony.component.ts ***!
  \*************************************************************/
/*! exports provided: NewColonyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewColonyComponent", function() { return NewColonyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_colonies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/colonies.service */ "./src/app/settings/shared/colonies.service.ts");
/* harmony import */ var _shared_settings_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/settings-navigation.service */ "./src/app/settings/shared/settings-navigation.service.ts");




var NewColonyComponent = /** @class */ (function () {
    function NewColonyComponent(coloniesService, settingsNavigationService) {
        this.coloniesService = coloniesService;
        this.settingsNavigationService = settingsNavigationService;
        this.newColonyName = '';
    }
    NewColonyComponent.prototype.ngOnInit = function () {
    };
    NewColonyComponent.prototype.addNewColony = function () {
        this.coloniesService.addNewColony(this.newColonyName);
    };
    NewColonyComponent.prototype.cancelAddingNewColony = function () {
        this.settingsNavigationService.mainSettingsComponent.next('');
    };
    NewColonyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-colony',
            template: __webpack_require__(/*! ./new-colony.component.html */ "./src/app/settings/new-colony/new-colony.component.html"),
            styles: [__webpack_require__(/*! ./new-colony.component.css */ "./src/app/settings/new-colony/new-colony.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_colonies_service__WEBPACK_IMPORTED_MODULE_2__["ColoniesService"],
            _shared_settings_navigation_service__WEBPACK_IMPORTED_MODULE_3__["SettingsNavigationService"]])
    ], NewColonyComponent);
    return NewColonyComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grayBackground {\r\n  background-color: gray;\r\n}\r\n\r\nselect {\r\n  height: 60px;\r\n  font-size: 1.5rem;\r\n}\r\n\r\nbutton {\r\n  height: 60px;\r\n  width: 70px;\r\n  font-size: 1.5rem;\r\n}\r\n\r\nimg {\r\n  height: 38px;\r\n}\r\n\r\noptgroup {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLGFBQWE7RUFDYixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JheUJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGhlaWdodDogNjBweDtcclxuICB3aWR0aDogNzBweDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDM4cHg7XHJcbn1cclxuXHJcbm9wdGdyb3VwIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default grayBackground\" style=\"margin: 0 !important; background-color: gray\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"col-sm-2\">\r\n      <a routerLink=\"\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-light btn-outline-secondary\">\r\n          <img\r\n            src=\"assets/img/mesitaru.png\"\r\n            height=\"30px\"\r\n            width=\"30px\"\r\n          >\r\n        </button>\r\n      </a>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <select\r\n        name=\"colony\"\r\n        class=\"custom-select\"\r\n        (change)=\"onChange()\"\r\n        [(ngModel)]=\"currentlySelectedColonyId\"\r\n        #selectField>\r\n        <optgroup>\r\n          <option value=\"\" disabled selected hidden>Vali koloonia...</option>\r\n          <option\r\n            *ngFor=\"let colony of colonies\"\r\n            [value]=\"colony.id\"> {{ colony.name }}</option>\r\n        </optgroup>\r\n      </select>\r\n    </div>\r\n    <div class=\"col-sm-1\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary newCol\"\r\n        (click)=\"onEditColonyButtonClick()\"\r\n        [disabled]=\"selectField.value === ''\">✎</button>\r\n    </div>\r\n    <div class=\"col-sm-3.5\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary\"\r\n        (click)=\"onNewColonyButtonClick()\"\r\n        id=\"newColonyButton\"\r\n        style=\"width: 150px\">✚ koloonia</button>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<div class=\"container-fluid\">\r\n  <br>\r\n  <div [ngSwitch]=\"loadedComponent\">\r\n    <app-new-colony *ngSwitchCase=\"'newColony'\"></app-new-colony>\r\n    <app-colony-details *ngSwitchCase=\"'colonyDetails'\" [currentlySelectedColonyId]=\"currentlySelectedColonyId\"></app-colony-details>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_colonies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/colonies.service */ "./src/app/settings/shared/colonies.service.ts");
/* harmony import */ var _util_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/spinner/spinner.service */ "./src/app/util/spinner/spinner.service.ts");
/* harmony import */ var _shared_settings_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/settings-navigation.service */ "./src/app/settings/shared/settings-navigation.service.ts");





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(settingsNavigationService, coloniesService, spinnerService) {
        this.settingsNavigationService = settingsNavigationService;
        this.coloniesService = coloniesService;
        this.spinnerService = spinnerService;
        this.currentlySelectedColonyId = '';
        this.loadedComponent = '';
    }
    SettingsComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.settingsNavigationService.mainSettingsComponent.subscribe(function (loadedComponent) { return _this.loadedComponent = loadedComponent; });
                this.settingsNavigationService.chooseColonyWithIdAfterNavigation.subscribe(function (id) { return _this.currentlySelectedColonyId = id; });
                this.coloniesService.coloniesDataRetrieved$.subscribe(function (colonies) { return _this.colonies = colonies; });
                this.coloniesService.retrieveColonies();
                setTimeout(function () {
                    _this.spinnerService.setSpinnerStatus.next(false);
                }, 0);
                return [2 /*return*/];
            });
        });
    };
    SettingsComponent.prototype.onNewColonyButtonClick = function () {
        this.settingsNavigationService.colonyDetailsComponent.next('');
        this.currentlySelectedColonyId = '';
        if (this.loadedComponent === 'newColony') {
            this.loadedComponent = '';
        }
        else {
            this.loadedComponent = 'newColony';
        }
    };
    SettingsComponent.prototype.onEditColonyButtonClick = function () {
        if (this.settingsNavigationService.currentlyLoadedColonyDetailsComponent === 'editColony') {
            this.settingsNavigationService.colonyDetailsComponent.next('');
        }
        else {
            this.settingsNavigationService.colonyDetailsComponent.next('editColony');
        }
    };
    SettingsComponent.prototype.onChange = function () {
        this.settingsNavigationService.mainSettingsComponent.next('colonyDetails');
        this.settingsNavigationService.colonyDetailsComponent.next('');
    };
    SettingsComponent.prototype.closeApp = function () {
        this.exitFullScreen(document);
    };
    SettingsComponent.prototype.exitFullScreen = function (element) {
        var requestMethod = element.exitFullscreen ||
            element.mozCancelFullScreen ||
            element.webkitExitFullscreen ||
            element.msExitFullscreen;
        if (requestMethod) {
            requestMethod.call(element);
        }
        else {
            console.log('Oops. Request method false.');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('selectField'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SettingsComponent.prototype, "selectField", void 0);
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_settings_navigation_service__WEBPACK_IMPORTED_MODULE_4__["SettingsNavigationService"],
            _shared_colonies_service__WEBPACK_IMPORTED_MODULE_2__["ColoniesService"],
            _util_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/settings/shared/colonies.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/settings/shared/colonies.service.ts ***!
  \*****************************************************/
/*! exports provided: ColoniesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColoniesService", function() { return ColoniesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _settings_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-data.service */ "./src/app/settings/shared/settings-data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-navigation.service */ "./src/app/settings/shared/settings-navigation.service.ts");
/* harmony import */ var _util_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/spinner/spinner.service */ "./src/app/util/spinner/spinner.service.ts");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var ColoniesService = /** @class */ (function () {
    function ColoniesService(settingsDataService, settingsNavigationService, spinnerService) {
        this.settingsDataService = settingsDataService;
        this.settingsNavigationService = settingsNavigationService;
        this.spinnerService = spinnerService;
        this.colonyHiveSelectionMade = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isInitialColoniesDataSet = false;
        this.coloniesDataRetrieved = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.coloniesDataRetrieved$ = this.coloniesDataRetrieved.asObservable();
        this.colonyHiveSelectionChanged$ = this.colonyHiveSelectionMade.asObservable();
    }
    ColoniesService.prototype.getColonyById = function (id) {
        return this.colonies.find(function (colony) { return colony.id === id; });
    };
    ColoniesService.prototype.notifyColonyHiveSelection = function (colonyId, hiveId) {
        if (hiveId) {
            this.colonyHiveSelectionMade.next({ colonyId: colonyId, hiveId: hiveId });
        }
        else {
            this.colonyHiveSelectionMade.next({ colonyId: colonyId });
        }
    };
    ColoniesService.prototype.getColonies = function () {
        return this.colonies;
    };
    //For mother component to be able to show previous values that can be reversed after being changed
    ColoniesService.prototype.getInitialColoniesData = function () {
        return this.initialColoniesData;
    };
    ColoniesService.prototype.addNewColony = function (newColonyName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var colonyWithLargestId, _i, _a, colony;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.spinnerService.setSpinnerStatus.next(true);
                        return [4 /*yield*/, this.settingsDataService.onAddNewColony(newColonyName)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.retrieveColonies()];
                    case 2:
                        _b.sent();
                        this.settingsNavigationService.mainSettingsComponent.next('colonyDetails');
                        colonyWithLargestId = this.colonies[0];
                        for (_i = 0, _a = this.colonies; _i < _a.length; _i++) {
                            colony = _a[_i];
                            if (colony.id > colonyWithLargestId.id) {
                                colonyWithLargestId = colony;
                            }
                        }
                        this.settingsNavigationService.chooseColonyWithIdAfterNavigation
                            .next(colonyWithLargestId.id.toString());
                        this.spinnerService.setSpinnerStatus.next(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    ColoniesService.prototype.editColony = function (colonyToEdit, newColonyName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinnerService.setSpinnerStatus.next(true);
                        return [4 /*yield*/, this.settingsDataService.onEditColony(colonyToEdit, newColonyName)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.retrieveColonies()];
                    case 2:
                        _a.sent();
                        this.settingsNavigationService.colonyDetailsComponent.next('');
                        this.spinnerService.setSpinnerStatus.next(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    ColoniesService.prototype.deleteColony = function (colonyToDelete) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinnerService.setSpinnerStatus.next(true);
                        return [4 /*yield*/, this.settingsDataService.onDeleteColony(colonyToDelete)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.retrieveColonies()];
                    case 2:
                        _a.sent();
                        this.settingsNavigationService.colonyDetailsComponent.next('');
                        this.settingsNavigationService.mainSettingsComponent.next('');
                        this.settingsNavigationService.chooseColonyWithIdAfterNavigation
                            .next('');
                        this.spinnerService.setSpinnerStatus.next(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    ColoniesService.prototype.retrieveColonies = function () {
        var _this = this;
        this.settingsDataService.onGetColoniesData()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .subscribe(function (colonies) {
            _this.colonies = colonies;
            //TODO! Move sorting to backend
            _this.colonies.sort(function (a, b) { return ('' + a.name).localeCompare(b.name); });
            for (var _i = 0, _a = _this.colonies; _i < _a.length; _i++) {
                var colony = _a[_i];
                colony.hives.sort(function (a, b) { return a.number - b.number; });
            }
            if (!_this.isInitialColoniesDataSet) {
                _this.initialColoniesData = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(_this.colonies);
                _this.isInitialColoniesDataSet = true;
            }
            _this.coloniesDataRetrieved.next(_this.colonies);
            _this.spinnerService.setSpinnerStatus.next(false);
        });
    };
    ColoniesService.prototype.addNewHive = function (number, colonyIdHiveBelongsTo, description) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinnerService.setSpinnerStatus.next(true);
                        return [4 /*yield*/, this.settingsDataService.onAddNewHive(number, colonyIdHiveBelongsTo, description)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.retrieveColonies()];
                    case 2:
                        _a.sent();
                        this.settingsNavigationService.colonyDetailsComponent.next('');
                        this.spinnerService.setSpinnerStatus.next(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    ColoniesService.prototype.updateHiveData = function (id, number, colonyIdHiveBelongsTo, description) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinnerService.setSpinnerStatus.next(true);
                        return [4 /*yield*/, this.settingsDataService.onUpdateHiveData(id, number, colonyIdHiveBelongsTo, description)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.retrieveColonies()];
                    case 2:
                        _a.sent();
                        this.settingsNavigationService.colonyDetailsComponent.next('');
                        this.spinnerService.setSpinnerStatus.next(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    ColoniesService.prototype.deleteHive = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinnerService.setSpinnerStatus.next(true);
                        return [4 /*yield*/, this.settingsDataService.onDeleteHive(id)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.retrieveColonies()];
                    case 2:
                        _a.sent();
                        this.settingsNavigationService.colonyDetailsComponent.next('');
                        this.spinnerService.setSpinnerStatus.next(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    ColoniesService.prototype.getInitialHiveData = function (hiveThatsInitialInfoIWant) {
        var initialColoniesData = this.getInitialColoniesData();
        for (var _i = 0, initialColoniesData_1 = initialColoniesData; _i < initialColoniesData_1.length; _i++) {
            var colony = initialColoniesData_1[_i];
            var foundHive = colony.hives.find(function (initialHive) { return hiveThatsInitialInfoIWant.id === initialHive.id; });
            if (foundHive) {
                return foundHive;
            }
        }
    };
    ColoniesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_settings_data_service__WEBPACK_IMPORTED_MODULE_2__["SettingsDataService"],
            _settings_navigation_service__WEBPACK_IMPORTED_MODULE_4__["SettingsNavigationService"],
            _util_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]])
    ], ColoniesService);
    return ColoniesService;
}());



/***/ }),

/***/ "./src/app/settings/shared/colony.model.ts":
/*!*************************************************!*\
  !*** ./src/app/settings/shared/colony.model.ts ***!
  \*************************************************/
/*! exports provided: Colony */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colony", function() { return Colony; });
var Colony = /** @class */ (function () {
    function Colony(id, name, hives) {
        this.id = id;
        this.name = name;
    }
    return Colony;
}());



/***/ }),

/***/ "./src/app/settings/shared/hive.model.ts":
/*!***********************************************!*\
  !*** ./src/app/settings/shared/hive.model.ts ***!
  \***********************************************/
/*! exports provided: Hive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hive", function() { return Hive; });
var Hive = /** @class */ (function () {
    function Hive() {
    }
    return Hive;
}());



/***/ }),

/***/ "./src/app/settings/shared/settings-data.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/settings/shared/settings-data.service.ts ***!
  \**********************************************************/
/*! exports provided: SettingsDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsDataService", function() { return SettingsDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs-compat/add/operator/map */ "./node_modules/rxjs-compat/add/operator/map.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/util.service */ "./src/app/util/util.service.ts");





var SettingsDataService = /** @class */ (function () {
    function SettingsDataService(httpClient) {
        this.httpClient = httpClient;
    }
    SettingsDataService.prototype.onAddNewColony = function (newColonyName) {
        return this.httpClient.post(_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"].backEndURL + 'api/colony', { 'name': newColonyName }).toPromise();
    };
    SettingsDataService.prototype.onEditColony = function (colonyToEdit, newColonyName) {
        var URL = _util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"].backEndURL + 'api/colony/' + colonyToEdit.id;
        return this.httpClient.put(URL, { 'name': newColonyName }).toPromise();
    };
    SettingsDataService.prototype.onDeleteColony = function (colonyToDelete) {
        var URL = _util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"].backEndURL + 'api/colony/' + colonyToDelete.id;
        return this.httpClient.delete(URL).toPromise();
    };
    SettingsDataService.prototype.onGetColoniesData = function () {
        // let username: string = 'user';
        // let password: string = 'password';
        // let headers: HttpHeaders = new HttpHeaders();
        // headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        // headers.append("Content-Type", "application/x-www-form-urlencoded");
        return this.httpClient.get(_util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"].backEndURL + 'api/colony');
    };
    // onPostToLogin() {
    //   let username: string = 'user';
    //   let password: string = 'password';
    //   let headers: HttpHeaders = new HttpHeaders();
    //   headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    //   headers.append("Content-Type", "application/x-www-form-urlencoded");
    //   return this.httpClient.post('api/login', {headers: headers}).toPromise();
    // }
    SettingsDataService.prototype.onAddNewHive = function (number, colonyIdHiveBelongsTo, description) {
        var url = _util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"].backEndURL + 'api/hive/' + colonyIdHiveBelongsTo;
        return this.httpClient.post(url, { 'description': description, 'number': number }).toPromise();
    };
    SettingsDataService.prototype.onUpdateHiveData = function (id, number, colonyIdHiveBelongsTo, description) {
        var url = _util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"].backEndURL + 'api/hive/' + id + '/colony/' + colonyIdHiveBelongsTo;
        return this.httpClient.put(url, { 'id': id, 'description': description, 'number': number }).toPromise();
    };
    SettingsDataService.prototype.onDeleteHive = function (hiveIdToDelete) {
        var URL = _util_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"].backEndURL + 'api/hive/' + hiveIdToDelete;
        return this.httpClient.delete(URL).toPromise();
    };
    SettingsDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SettingsDataService);
    return SettingsDataService;
}());



/***/ }),

/***/ "./src/app/settings/shared/settings-navigation.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/settings/shared/settings-navigation.service.ts ***!
  \****************************************************************/
/*! exports provided: SettingsNavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsNavigationService", function() { return SettingsNavigationService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var SettingsNavigationService = /** @class */ (function () {
    function SettingsNavigationService() {
        var _this = this;
        this.mainSettingsComponent = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.colonyDetailsComponent = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.chooseColonyWithIdAfterNavigation = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.currentlyLoadedColonyDetailsComponent = '';
        this.colonyDetailsComponent.subscribe(function (loadedComponent) { return _this.currentlyLoadedColonyDetailsComponent = loadedComponent; });
    }
    return SettingsNavigationService;
}());



/***/ }),

/***/ "./src/app/util/days-until.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/util/days-until.pipe.ts ***!
  \*****************************************/
/*! exports provided: DaysUntilPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaysUntilPipe", function() { return DaysUntilPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DaysUntilPipe = /** @class */ (function () {
    function DaysUntilPipe() {
    }
    DaysUntilPipe.prototype.transform = function (value) {
        var oneDay = 24 * 60 * 60 * 1000;
        var dateFormatted = new Date(value).setHours(0, 0, 0, 0);
        var todaysDateFormatted = new Date().setHours(0, 0, 0, 0);
        return Math.round((dateFormatted - todaysDateFormatted) / (oneDay));
    };
    DaysUntilPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'daysUntil',
            pure: false
        })
    ], DaysUntilPipe);
    return DaysUntilPipe;
}());



/***/ }),

/***/ "./src/app/util/executor/controls-protection-id.enum.ts":
/*!**************************************************************!*\
  !*** ./src/app/util/executor/controls-protection-id.enum.ts ***!
  \**************************************************************/
/*! exports provided: ControlsProtectionIdEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsProtectionIdEnum", function() { return ControlsProtectionIdEnum; });
var ControlsProtectionIdEnum;
(function (ControlsProtectionIdEnum) {
    ControlsProtectionIdEnum[ControlsProtectionIdEnum["PLANNING_DROPDOWN_SINGLE_ELEMENT"] = 0] = "PLANNING_DROPDOWN_SINGLE_ELEMENT";
    ControlsProtectionIdEnum[ControlsProtectionIdEnum["PLANNING_DROPDOWN_ORDERING"] = 1] = "PLANNING_DROPDOWN_ORDERING";
    ControlsProtectionIdEnum[ControlsProtectionIdEnum["PLANNING_ELEMENT"] = 2] = "PLANNING_ELEMENT";
    ControlsProtectionIdEnum[ControlsProtectionIdEnum["SIZELOG"] = 3] = "SIZELOG";
    ControlsProtectionIdEnum[ControlsProtectionIdEnum["NOTE_ELEMENT"] = 4] = "NOTE_ELEMENT";
    ControlsProtectionIdEnum[ControlsProtectionIdEnum["MOM"] = 5] = "MOM";
})(ControlsProtectionIdEnum || (ControlsProtectionIdEnum = {}));


/***/ }),

/***/ "./src/app/util/executor/executor.service.ts":
/*!***************************************************!*\
  !*** ./src/app/util/executor/executor.service.ts ***!
  \***************************************************/
/*! exports provided: ProtectionState, ExecutorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectionState", function() { return ProtectionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecutorService", function() { return ExecutorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _spinner_spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spinner/spinner.service */ "./src/app/util/spinner/spinner.service.ts");



var ProtectionState = /** @class */ (function () {
    function ProtectionState(isUpdating, omittedControlsId) {
        this.disableControls = isUpdating;
        this.omittedControlsId = omittedControlsId;
    }
    return ProtectionState;
}());

var ExecutorService = /** @class */ (function () {
    function ExecutorService(spinnerService) {
        this.spinnerService = spinnerService;
        this.controlsProtection = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getControlsProtection = this.controlsProtection.asObservable();
    }
    ExecutorService.prototype.exeWithTimer = function (executable, params, id) {
        var _this = this;
        if (this.timerRunning) {
            this.shouldRunAnotherRound = true;
            // console.log('...must run one more time');
        }
        else {
            setTimeout(function () {
                _this.timerRunning = false;
                if (_this.shouldRunAnotherRound) {
                    _this.shouldRunAnotherRound = false;
                    _this.exeWithTimer(executable, params, id);
                    // console.log('...will run for a second time');
                }
                else {
                    // console.log('-> execute')
                    _this.enableControls(id);
                    _this.execute(executable, params);
                }
            }, 1200);
            this.timerRunning = true;
            this.disableControls(id);
            // console.log('! started Timer');
        }
    };
    ExecutorService.prototype.disableControls = function (id) {
        this.spinnerService.enableDisablerSpinner();
        this.controlsProtection.emit(new ProtectionState(true, id));
    };
    ExecutorService.prototype.enableControls = function (id) {
        this.spinnerService.disableDisablerSpinner();
        this.controlsProtection.emit(new ProtectionState(false, id));
    };
    ExecutorService.prototype.execute = function (executable, params) {
        if (params.length === 1) {
            executable(params[0]);
        }
        if (params.length === 2) {
            executable(params[0], params[1]);
        }
    };
    ExecutorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"]])
    ], ExecutorService);
    return ExecutorService;
}());



/***/ }),

/***/ "./src/app/util/jw-modal/jw-modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/util/jw-modal/jw-modal.component.ts ***!
  \*****************************************************/
/*! exports provided: JwModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwModalComponent", function() { return JwModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _jw_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jw-modal.service */ "./src/app/util/jw-modal/jw-modal.service.ts");
/* harmony import */ var _spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spinner/spinner.service */ "./src/app/util/spinner/spinner.service.ts");




var JwModalComponent = /** @class */ (function () {
    function JwModalComponent(modalService, el, spinnerService) {
        this.modalService = modalService;
        this.el = el;
        this.spinnerService = spinnerService;
        this.marginLess = false;
        this.fullScreen = false;
        this.smallModal = false;
        this.element = el.nativeElement;
    }
    JwModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.close();
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', function (e) {
            if (e.target.className === 'jw-modal') {
                modal.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
        this.spinnerStatusSubscription = this.spinnerService.getSpinnerStatus.subscribe(function (ss) { return _this.spinnerEnabled = ss.enabled; });
    };
    // remove self from modal service when directive is destroyed
    JwModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
        this.spinnerStatusSubscription.unsubscribe();
    };
    // open modal
    JwModalComponent.prototype.open = function () {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    };
    // close modal
    JwModalComponent.prototype.close = function () {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], JwModalComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], JwModalComponent.prototype, "marginLess", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], JwModalComponent.prototype, "fullScreen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], JwModalComponent.prototype, "smallModal", void 0);
    JwModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'jw-modal',
            template: "\n    \n  <div class=\"jw-modal\">\n    <div class=\"jw-modal-body\" [ngClass]=\"{'no-margin': marginLess, 'full-screen': fullScreen}\">\n      \n      <ng-content></ng-content>\n      <app-spinner [hidden]=\"!spinnerEnabled\" [modal]=\"true\" [smallModal]=\"smallModal\"></app-spinner>\n    </div>\n  </div>\n  <div class=\"jw-modal-background\"></div>",
            styles: [__webpack_require__(/*! ./jw-modal.css */ "./src/app/util/jw-modal/jw-modal.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_jw_modal_service__WEBPACK_IMPORTED_MODULE_2__["JwModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"]])
    ], JwModalComponent);
    return JwModalComponent;
}());



/***/ }),

/***/ "./src/app/util/jw-modal/jw-modal.css":
/*!********************************************!*\
  !*** ./src/app/util/jw-modal/jw-modal.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.jw-modal {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1000;\r\n  overflow: auto;\r\n}\r\n.jw-modal .jw-modal-body {\r\n  padding: 20px;\r\n  background: #fff;\r\n  margin: 40px;\r\n}\r\n.jw-modal-background {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: #000;\r\n  opacity: 0.75;\r\n  z-index: 900;\r\n}\r\nbody.jw-modal-open {\r\n  overflow: hidden;\r\n}\r\n.no-margin {\r\n  margin: 0 !important;\r\n}\r\n.full-screen {\r\n  margin: 0 !important;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbC9qdy1tb2RhbC9qdy1tb2RhbC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFFBQVE7RUFDUixjQUFjO0VBQ2QsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixhQUFhO0NBQ2Q7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsU0FBUztFQUNULFVBQVU7RUFDVixRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0NBQ2Q7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUVEO0VBQ0UscUJBQXFCO0NBQ3RCO0FBRUQ7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3V0aWwvanctbW9kYWwvanctbW9kYWwuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5qdy1tb2RhbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5qdy1tb2RhbCAuanctbW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIG1hcmdpbjogNDBweDtcclxufVxyXG4uanctbW9kYWwtYmFja2dyb3VuZCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIG9wYWNpdHk6IDAuNzU7XHJcbiAgei1pbmRleDogOTAwO1xyXG59XHJcbmJvZHkuanctbW9kYWwtb3BlbiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm5vLW1hcmdpbiB7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mdWxsLXNjcmVlbiB7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/util/jw-modal/jw-modal.service.ts":
/*!***************************************************!*\
  !*** ./src/app/util/jw-modal/jw-modal.service.ts ***!
  \***************************************************/
/*! exports provided: JwModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwModalService", function() { return JwModalService; });
var JwModalService = /** @class */ (function () {
    function JwModalService() {
        this.modals = [];
    }
    JwModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    JwModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    JwModalService.prototype.open = function (id) {
        // open modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.open();
    };
    JwModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.close();
    };
    return JwModalService;
}());



/***/ }),

/***/ "./src/app/util/long-press.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/util/long-press.directive.ts ***!
  \**********************************************/
/*! exports provided: LongPress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongPress", function() { return LongPress; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LongPress = /** @class */ (function () {
    function LongPress() {
        this.duration = 500;
        this.onLongPress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLongPressing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLongPressEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseX = 0;
        this.mouseY = 0;
    }
    Object.defineProperty(LongPress.prototype, "press", {
        get: function () { return this.pressing; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LongPress.prototype, "longPress", {
        get: function () { return this.longPressing; },
        enumerable: true,
        configurable: true
    });
    LongPress.prototype.onMouseDown = function (event) {
        var _this = this;
        // don't do right/middle clicks
        if (event.which !== 1)
            return;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        this.pressing = true;
        this.longPressing = false;
        this.timeout = setTimeout(function () {
            _this.longPressing = true;
            _this.onLongPress.emit(event);
            _this.loop(event);
        }, this.duration);
        this.loop(event);
    };
    LongPress.prototype.onMouseMove = function (event) {
        if (this.pressing && !this.longPressing) {
            var xThres = (event.clientX - this.mouseX) > 10;
            var yThres = (event.clientY - this.mouseY) > 10;
            if (xThres || yThres) {
                this.endPress();
            }
        }
    };
    LongPress.prototype.loop = function (event) {
        var _this = this;
        if (this.longPressing) {
            this.timeout = setTimeout(function () {
                _this.onLongPressing.emit(event);
                _this.loop(event);
            }, 50);
        }
    };
    LongPress.prototype.endPress = function () {
        clearTimeout(this.timeout);
        this.longPressing = false;
        this.pressing = false;
        this.onLongPressEnd.emit(true);
    };
    LongPress.prototype.onMouseUp = function () { this.endPress(); };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], LongPress.prototype, "duration", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], LongPress.prototype, "onLongPress", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], LongPress.prototype, "onLongPressing", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], LongPress.prototype, "onLongPressEnd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.press'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LongPress.prototype, "press", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.longpress'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LongPress.prototype, "longPress", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], LongPress.prototype, "onMouseDown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousemove', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], LongPress.prototype, "onMouseMove", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseup'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], LongPress.prototype, "onMouseUp", null);
    LongPress = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[long-press]' })
    ], LongPress);
    return LongPress;
}());



/***/ }),

/***/ "./src/app/util/spinner/spinner-handler-interceptor.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/util/spinner/spinner-handler-interceptor.service.ts ***!
  \*********************************************************************/
/*! exports provided: SpinnerHandlerInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerHandlerInterceptorService", function() { return SpinnerHandlerInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spinner.service */ "./src/app/util/spinner/spinner.service.ts");





var SpinnerHandlerInterceptorService = /** @class */ (function () {
    function SpinnerHandlerInterceptorService(spinnerService) {
        this.spinnerService = spinnerService;
        this.totalRequests = 0;
    }
    SpinnerHandlerInterceptorService.prototype.intercept = function (request, next) {
        var _this = this;
        this.totalRequests++;
        this.spinnerService.enableRequestSpinner();
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                _this.decreaseRequests();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            _this.decreaseRequests();
            throw err;
        }));
    };
    SpinnerHandlerInterceptorService.prototype.decreaseRequests = function () {
        this.totalRequests--;
        if (this.totalRequests === 0) {
            this.spinnerService.disableRequestSpinner();
        }
    };
    SpinnerHandlerInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"]])
    ], SpinnerHandlerInterceptorService);
    return SpinnerHandlerInterceptorService;
}());



/***/ }),

/***/ "./src/app/util/spinner/spinner.component.css":
/*!****************************************************!*\
  !*** ./src/app/util/spinner/spinner.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.spinner-container {*/\r\n/*  position: absolute;*/\r\n/*  left: 10%;*/\r\n/*  top: 0;*/\r\n/*  width: 80%;*/\r\n/*  height: 76px;*/\r\n/*  background-image: linear-gradient(to right, gray, white, gray);*/\r\n/*}*/\r\n.spinner-container {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 76px;\r\n  background-color: white;\r\n  opacity: 0.8;\r\n}\r\n.for-fullscreen-modal-height {\r\n  height: 103px;\r\n}\r\n.for-small-modal-height {\r\n  height: 143px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0I7QUFDeEIseUJBQXlCO0FBQ3pCLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQixxRUFBcUU7QUFDckUsS0FBSztBQUVMO0VBQ0UsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsYUFBYTtDQUNkO0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7QUFHRDtFQUNFLGNBQWM7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL3V0aWwvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5zcGlubmVyLWNvbnRhaW5lciB7Ki9cclxuLyogIHBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xyXG4vKiAgbGVmdDogMTAlOyovXHJcbi8qICB0b3A6IDA7Ki9cclxuLyogIHdpZHRoOiA4MCU7Ki9cclxuLyogIGhlaWdodDogNzZweDsqL1xyXG4vKiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBncmF5LCB3aGl0ZSwgZ3JheSk7Ki9cclxuLyp9Ki9cclxuXHJcbi5zcGlubmVyLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNzZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5mb3ItZnVsbHNjcmVlbi1tb2RhbC1oZWlnaHQge1xyXG4gIGhlaWdodDogMTAzcHg7XHJcbn1cclxuXHJcblxyXG4uZm9yLXNtYWxsLW1vZGFsLWhlaWdodCB7XHJcbiAgaGVpZ2h0OiAxNDNweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/util/spinner/spinner.component.html":
/*!*****************************************************!*\
  !*** ./src/app/util/spinner/spinner.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"spinner-container d-flex justify-content-center align-items-center\"\n  [ngClass]=\"{'for-fullscreen-modal-height': modal && !smallModal, 'for-small-modal-height': modal && smallModal}\">\n  <div class=\"spinner-border {{withWarning ? 'text-warning' : 'text-secondary'}}\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/util/spinner/spinner.component.ts":
/*!***************************************************!*\
  !*** ./src/app/util/spinner/spinner.component.ts ***!
  \***************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner.service */ "./src/app/util/spinner/spinner.service.ts");



var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(spinnerService) {
        this.spinnerService = spinnerService;
        this.modal = false;
        this.smallModal = false;
        this.subscriptions = [];
    }
    SpinnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.spinnerService.getSpinnerStatus.subscribe(function (ss) {
            _this.enabled = ss.enabled;
            _this.withWarning = ss.withWarning;
        }));
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpinnerComponent.prototype, "modal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpinnerComponent.prototype, "smallModal", void 0);
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/util/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/app/util/spinner/spinner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"]])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/util/spinner/spinner.service.ts":
/*!*************************************************!*\
  !*** ./src/app/util/spinner/spinner.service.ts ***!
  \*************************************************/
/*! exports provided: SpinnerStatus, SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerStatus", function() { return SpinnerStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var SpinnerStatus = /** @class */ (function () {
    function SpinnerStatus(enabled, withWarning) {
        this.enabled = enabled;
        this.withWarning = withWarning;
    }
    return SpinnerStatus;
}());

var SpinnerService = /** @class */ (function () {
    function SpinnerService() {
        this.setSpinnerStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.spinnerStatusEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.getSpinnerStatus = this.spinnerStatusEmitter.asObservable();
    }
    SpinnerService.prototype.enableDisablerSpinner = function () {
        this.disablerSpinnerRunning = true;
        this.spinnerStatusEmitter.emit(new SpinnerStatus(true, true));
        // console.log('spinner: started disabler');
    };
    SpinnerService.prototype.disableDisablerSpinner = function () {
        this.disablerSpinnerRunning = false;
        if (this.requestSpinnerRunning) {
            this.spinnerStatusEmitter.emit(new SpinnerStatus(true, false));
            // console.log('spinner: disabler -> request');
        }
        else {
            this.spinnerStatusEmitter.emit(new SpinnerStatus(false, false));
            // console.log('spinner: stopped');
        }
    };
    SpinnerService.prototype.enableRequestSpinner = function () {
        this.requestSpinnerRunning = true;
        this.decideIfStartRequestSpinner();
    };
    SpinnerService.prototype.disableRequestSpinner = function () {
        this.requestSpinnerRunning = false;
        this.decideIfStopRequestSpinner();
    };
    SpinnerService.prototype.decideIfStartRequestSpinner = function () {
        if (!this.disablerSpinnerRunning) {
            this.spinnerStatusEmitter.emit(new SpinnerStatus(true, false));
            // console.log('spinner: started request');
        }
    };
    SpinnerService.prototype.decideIfStopRequestSpinner = function () {
        if (!this.disablerSpinnerRunning) {
            this.spinnerStatusEmitter.emit(new SpinnerStatus(false, false));
            // console.log('spinner: stopped');
        }
    };
    SpinnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
    ], SpinnerService);
    return SpinnerService;
}());



/***/ }),

/***/ "./src/app/util/util.service.ts":
/*!**************************************!*\
  !*** ./src/app/util/util.service.ts ***!
  \**************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var UtilService = /** @class */ (function () {
    function UtilService() {
        this.overview = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.overview$ = this.overview.asObservable();
    }
    UtilService.prototype.showOverviewWindow = function (status) {
        this.overview.next(status);
    };
    //
    // ng build --prod --output-path docs
    UtilService.getAbsoluteDaysBeforeTodaysDate = function (date) {
        var oneDay = 24 * 60 * 60 * 1000;
        var dateFormatted = new Date(date).setHours(0, 0, 0, 0);
        var todaysDateFormatted = new Date().setHours(0, 0, 0, 0);
        return Math.round(Math.abs((todaysDateFormatted - dateFormatted) / (oneDay)));
    };
    UtilService.getDaysBeforeTodaysDate = function (date) {
        var oneDay = 24 * 60 * 60 * 1000;
        var dateFormatted = new Date(date).setHours(0, 0, 0, 0);
        var todaysDateFormatted = new Date().setHours(0, 0, 0, 0);
        return Math.round((todaysDateFormatted - dateFormatted) / (oneDay));
    };
    //static backEndURL = 'http://localhost:8080/';
    // static planningDropdown = null;
    // static planningDropdown = this.p
    //
    // : PlanningDropdown[] = [
    // {
    //   id: 1,
    //   text: 'vaata peret',
    //   orderNumber: 1
    // },
    // {
    //   id: 2,
    //   text: 'võta mett',
    //   orderNumber: 2
    // },
    // {
    //   id: 3,
    //   text: 'otsi kuppe',
    //   orderNumber: 3
    // },
    // {
    //   id: 4,
    //   text: 'laienda peret',
    //   orderNumber: 4
    // },
    // ];
    UtilService.backEndURL = '';
    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UtilService);
    return UtilService;
}());



/***/ }),

/***/ "./src/app/work/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/work/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".big-text {\r\n  font-size: 2rem;\r\n}\r\n\r\n.login-form {\r\n  width: 340px;\r\n  margin: 50px auto;\r\n}\r\n\r\n.login-form form {\r\n  margin-bottom: 15px;\r\n  background: #f7f7f7;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  padding: 30px;\r\n}\r\n\r\n.login-form h2 {\r\n  margin: 0 0 15px;\r\n}\r\n\r\n.form-control, .btn {\r\n  min-height: 38px;\r\n  border-radius: 2px;\r\n}\r\n\r\n.btn {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtDQUNuQjs7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsMkNBQTJDO0VBQzNDLGNBQWM7Q0FDZjs7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvd29yay9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJpZy10ZXh0IHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuICB3aWR0aDogMzQwcHg7XHJcbiAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbn1cclxuLmxvZ2luLWZvcm0gZm9ybSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcbi5sb2dpbi1mb3JtIGgyIHtcclxuICBtYXJnaW46IDAgMCAxNXB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wsIC5idG4ge1xyXG4gIG1pbi1oZWlnaHQ6IDM4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcbi5idG4ge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/work/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/work/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form\">\n  <form>\n    <h2 class=\"text-center\">Minumesila</h2>\n    <div class=\"form-group\">\n      <input type=\"password\"\n             class=\"form-control\"\n             placeholder=\"Parool\"\n             required=\"required\"\n             [(ngModel)]=\"inputValue\"\n             [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"validate()\">Sisene</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/work/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/work/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);



var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.allowedToPass = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputValue = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('allowedToPass') == 'yep') {
            this.allowedToPass.emit(true);
        }
    };
    LoginComponent.prototype.validate = function () {
        if (this.inputValue === crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].decrypt('U2FsdGVkX18s6gkTpUY6WHFpU3uorgwMB+Y9bvuLeho=', 'protection against fools. please do not corrupt data').toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8)) {
            localStorage.setItem('allowedToPass', 'yep');
            this.allowedToPass.emit(true);
        }
        this.inputValue = '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginComponent.prototype, "allowedToPass", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/work/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/work/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/work/mother/action-time.enum.ts":
/*!*************************************************!*\
  !*** ./src/app/work/mother/action-time.enum.ts ***!
  \*************************************************/
/*! exports provided: ActionTimeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTimeEnum", function() { return ActionTimeEnum; });
var ActionTimeEnum;
(function (ActionTimeEnum) {
    ActionTimeEnum[ActionTimeEnum["TODAY"] = 0] = "TODAY";
    ActionTimeEnum[ActionTimeEnum["PAST_DATE"] = 1] = "PAST_DATE";
    ActionTimeEnum[ActionTimeEnum["INITIAL_DATE"] = 2] = "INITIAL_DATE";
    ActionTimeEnum[ActionTimeEnum["NO_ACTION"] = 3] = "NO_ACTION";
    ActionTimeEnum[ActionTimeEnum["UNKNOWN"] = 4] = "UNKNOWN";
})(ActionTimeEnum || (ActionTimeEnum = {}));


/***/ }),

/***/ "./src/app/work/mother/freak/freak.component.css":
/*!*******************************************************!*\
  !*** ./src/app/work/mother/freak/freak.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  max-height: 80px;\r\n  max-width: 180px;\r\n}\r\n\r\nimg.x {\r\n  height: 40px;\r\n}\r\n\r\n.card-body {\r\n  padding: 10px;\r\n}\r\n\r\nh3.time-text {\r\n  margin-top: -10px;\r\n  margin-bottom: 0;\r\n  max-width: 214px;\r\n}\r\n\r\nbutton.change-mother-status-button {\r\n  width: 180px;\r\n  height: 80px;\r\n  margin: 0;\r\n}\r\n\r\ndiv.pictures-column {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n\r\np.marked-date-description {\r\n  font-size: 31px;\r\n  margin-top: -10px;\r\n}\r\n\r\nbutton.closing {\r\n  display: inline-block;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  padding: 2px 2px 2px 2px;\r\n  margin: 0;\r\n  margin-right: 10px;\r\n}\r\n\r\ndiv.option {\r\n  margin-top: 50px;\r\n}\r\n\r\ndiv.option2 {\r\n  margin-top: 20px;\r\n}\r\n\r\ndiv.twoButtons {\r\n  margin-top: 200px;\r\n}\r\n\r\ninput.bigRadio {\r\n  width: 35px;\r\n  height: 35px\r\n}\r\n\r\n.up-bar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\ninput.num {\r\n  width: 70px;\r\n  height: 35px\r\n}\r\n\r\ninput.description {\r\n  width: 170px;\r\n  height: 35px\r\n}\r\n\r\nimg.pencil {\r\n  height: 40px;\r\n}\r\n\r\nbutton {\r\n  height: 60px;\r\n  width: 60px;\r\n  margin-top: 20px;\r\n  margin-left: 9px;\r\n}\r\n\r\n.custom-select {\r\n  display: inline;\r\n  width: 150px;\r\n  font-size: 28px;\r\n  margin-left: 18px;\r\n}\r\n\r\n.option-row {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n\r\nbutton.first-from-top-button {\r\n  height: 115px;\r\n  width: 60px;\r\n  margin: 0;\r\n  margin-left: 9px\r\n}\r\n\r\nbutton.second-from-top-button {\r\n  margin-top: 30px;\r\n}\r\n\r\nbutton.third-from-top-button {\r\n  margin-top: 65px;\r\n}\r\n\r\nbutton.fourth-from-top-button {\r\n  margin-top: 75px;\r\n}\r\n\r\nbutton.fifth-from-top-button {\r\n  margin-top: 100px;\r\n}\r\n\r\ndiv.marked-image-block {\r\n  margin-top: 30px;\r\n  height: 156px;\r\n}\r\n\r\ndiv.second-image-block {\r\n  margin-top: 30px;\r\n  height: 110px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9tb3RoZXIvZnJlYWsvZnJlYWsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsVUFBVTtDQUNYOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsNEJBQW9CO0VBQXBCLHlCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osWUFBWTtDQUNiOztBQUVEO0VBQ0UsY0FBYztFQUNkLCtCQUErQjtFQUMvQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osWUFBWTtDQUNiOztBQUVEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztDQUNmIiwiZmlsZSI6InNyYy9hcHAvd29yay9tb3RoZXIvZnJlYWsvZnJlYWsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgbWF4LWhlaWdodDogODBweDtcclxuICBtYXgtd2lkdGg6IDE4MHB4O1xyXG59XHJcblxyXG5pbWcueCB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5oMy50aW1lLXRleHQge1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgbWF4LXdpZHRoOiAyMTRweDtcclxufVxyXG5cclxuYnV0dG9uLmNoYW5nZS1tb3RoZXItc3RhdHVzLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmRpdi5waWN0dXJlcy1jb2x1bW4ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG5wLm1hcmtlZC1kYXRlLWRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDMxcHg7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5jbG9zaW5nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgcGFkZGluZzogMnB4IDJweCAycHggMnB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbmRpdi5vcHRpb24ge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbmRpdi5vcHRpb24yIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5kaXYudHdvQnV0dG9ucyB7XHJcbiAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbn1cclxuXHJcbmlucHV0LmJpZ1JhZGlvIHtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHhcclxufVxyXG5cclxuLnVwLWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXQubnVtIHtcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDM1cHhcclxufVxyXG5cclxuaW5wdXQuZGVzY3JpcHRpb24ge1xyXG4gIHdpZHRoOiAxNzBweDtcclxuICBoZWlnaHQ6IDM1cHhcclxufVxyXG5cclxuaW1nLnBlbmNpbCB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGhlaWdodDogNjBweDtcclxuICB3aWR0aDogNjBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbn1cclxuXHJcbi5jdXN0b20tc2VsZWN0IHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBtYXJnaW4tbGVmdDogMThweDtcclxufVxyXG5cclxuLm9wdGlvbi1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG5idXR0b24uZmlyc3QtZnJvbS10b3AtYnV0dG9uIHtcclxuICBoZWlnaHQ6IDExNXB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW4tbGVmdDogOXB4XHJcbn1cclxuXHJcbmJ1dHRvbi5zZWNvbmQtZnJvbS10b3AtYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG5idXR0b24udGhpcmQtZnJvbS10b3AtYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiA2NXB4O1xyXG59XHJcblxyXG5idXR0b24uZm91cnRoLWZyb20tdG9wLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxufVxyXG5cclxuYnV0dG9uLmZpZnRoLWZyb20tdG9wLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbmRpdi5tYXJrZWQtaW1hZ2UtYmxvY2sge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgaGVpZ2h0OiAxNTZweDtcclxufVxyXG5cclxuZGl2LnNlY29uZC1pbWFnZS1ibG9jayB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBoZWlnaHQ6IDExMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/work/mother/freak/freak.component.html":
/*!********************************************************!*\
  !*** ./src/app/work/mother/freak/freak.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-8.5 pictures-column\">\r\n      <div\r\n        class=\"card bg-light\"\r\n        style=\"max-width: 16rem; height: 719px; margin-left:auto;margin-right:auto;text-align:center\">\r\n        <div class=\"card-header\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-primary change-mother-status-button\">\r\n            <img\r\n              src=\"assets/img/muuda.png\"\r\n              alt=\"ii\"\r\n              style=\"height: 65px\"\r\n              (click)=\"onChangeMotherStatusButtonClick(null)\">\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"card-body\" style=\"background-color: white\">\r\n\r\n\r\n          <img\r\n            src=\"assets/img/v22rema.png\" alt=\"ii\"\r\n            style=\"max-width: 180px;\">\r\n          <h3 class=\"time-text\">{{ momStatusSectionTimeText }}</h3>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-3.5\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary\"\r\n        (click)=\"onOpenMomStatusSectionEditButton()\"\r\n        style=\"margin-top: 140px;\">\r\n        <img\r\n          src=\"assets/img/muudaNupp.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<jw-modal id=\"mother-freak-edit\" style=\"max-width: 50rem; height: 45rem\" [smallModal]=\"true\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Mis ajast on tarus väärema?</h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseMomStatusSectionEditButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-4\">\r\n        <img src=\"assets/img/v22rema.png\" alt=\"\">\r\n        <br>\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"freak\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnMomStatusSelection === actionTimeEnum.TODAY\"\r\n                (change)=\"radioBtnMomStatusSelected(actionTimeEnum.TODAY)\">\r\n              Täna\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input type=\"radio\" name=\"freak\"\r\n                     class=\"bigRadio\"\r\n                     [checked]=\"radioBtnMomStatusSelection === actionTimeEnum.PAST_DATE\"\r\n                     (change)=\"radioBtnMomStatusSelected(actionTimeEnum.PAST_DATE)\">\r\n              &nbsp;&nbsp;&nbsp;\r\n              <input\r\n                type=\"number\"\r\n                size=\"3\"\r\n                class=\"num\"\r\n                [(ngModel)]=\"radioBtnStatusPastDateInputValue\"\r\n                (ngModelChange)=\"radioBtnMomStatusSelected(actionTimeEnum.PAST_DATE)\"> päeva tagasi\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div\r\n          *ngIf=\"momStatusInitialValueText\"\r\n          class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input type=\"radio\" name=\"freak\"\r\n                     class=\"bigRadio\"\r\n                     (change)=\"radioBtnMomStatusSelected(actionTimeEnum.INITIAL_DATE)\">\r\n              &nbsp;\r\n              <img src=\"assets/img/tagasi.png\" alt=\"\" style=\"height: 45px\">\r\n              ({{ momStatusInitialValueText }})\r\n            </h2>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-7\">\r\n        <div class=\"row\">\r\n          <h2>Oled kindel, et tarus pole enam väärema?</h2>\r\n        </div>\r\n        <div class=\"row option\">\r\n          <h2>Vali teine ema staatus:&nbsp;&nbsp;&nbsp;</h2>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-primary\"\r\n            style=\"width: 200px; height: 80px; margin: 0px\">\r\n            <img\r\n              src=\"assets/img/muuda.png\"\r\n              alt=\"ii\"\r\n              style=\"height: 65px\"\r\n              (click)=\"onChangeMotherStatusButtonClick()\">\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</jw-modal>\r\n\r\n\r\n<jw-modal id=\"mother-freak-log-edit\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Vääremast lahtisaamise logi</h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseFreakMotherLogEditButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div style=\"overflow-y:auto;\r\n            overflow-x:hidden;\r\n            border-color: dimgray;\r\n            border-style: solid;\r\n            height:350px\">\r\n      <div class=\"row\"\r\n           style=\"background-color: #f0f0f0; border-style: solid; border-color: white;\"\r\n           *ngFor=\"let logEntry of currentlyChosenHive.momAttributes.freakLog\">\r\n        <div class=\"col-sm-10\">\r\n          <h3>{{ logEntry.text }}</h3>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-secondary\"\r\n            (click)=\"onOpenFreakLogEntryButton(logEntry)\">\r\n            <img\r\n              src=\"assets/img/muudaNupp.png\"\r\n              class=\"pencil\">\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\">\r\n        <textarea\r\n          class=\"form-control\"\r\n          rows=\"3\"\r\n          style=\"font-size: 2em\"\r\n          [(ngModel)]=\"textareaValue\"></textarea>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <button\r\n          class=\"btn btn-light btn-outline-success\"\r\n          style=\"color: green; height: 70px; width: 300px; margin-left: 20px\"\r\n          [disabled]=\"textareaValue === ''\"\r\n          (click)=\"saveNewLogEntry()\">\r\n          <h2>Lisan kirje</h2>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</jw-modal>\r\n\r\n\r\n<jw-modal id=\"mother-freak-log-entry-edit\">\r\n  <div class=\"card bg-light\" *ngIf=\"logEntryThatIsBeingEdited\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Logikirje muutmine</h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseFreakLogEntryButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div style=\"overflow-y:auto;\r\n            overflow-x:hidden;\r\n            border-color: dimgray;\r\n            border-style: solid;\r\n            height:350px\">\r\n      <h2>Esialgne tekst:</h2>\r\n      <br>\r\n      <div class=\"row\"\r\n           style=\"background-color: #f0f0f0; border-style: solid; border-color: white;\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-9\">\r\n          <h3>{{ textareaOnEntryEditValue }}</h3>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-secondary\"\r\n            (click)=\"deleteLogEntry(logEntryThatIsBeingEdited)\">\r\n            <img\r\n              src=\"assets/img/trash.png\"\r\n              class=\"pencil\"\r\n            >\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\">\r\n        <textarea\r\n          class=\"form-control\"\r\n          rows=\"3\"\r\n          style=\"font-size: 2em\"\r\n          [(ngModel)]=\"textareaOnEntryEditValue\"></textarea>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <button\r\n          class=\"btn btn-light btn-outline-success\"\r\n          style=\"color: green; height: 93px; width: 300px; margin-left: 20px\"\r\n          [disabled]=\"logEntryThatIsBeingEdited.text === textareaOnEntryEditValue\"\r\n          (click)=\"updateLogEntry(logEntryThatIsBeingEdited, textareaOnEntryEditValue)\">\r\n          <h2>Salvestan muudatused</h2>\r\n        </button>\r\n        <button\r\n          class=\"btn btn-light btn-outline-danger\"\r\n          style=\"color: red; height: 93px; width: 300px; margin-left: 20px\"\r\n          (click)=\"onCloseFreakLogEntryButton()\">\r\n          <h2>Tühistan muudatused</h2>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</jw-modal>\r\n\r\n"

/***/ }),

/***/ "./src/app/work/mother/freak/freak.component.ts":
/*!******************************************************!*\
  !*** ./src/app/work/mother/freak/freak.component.ts ***!
  \******************************************************/
/*! exports provided: FreakComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreakComponent", function() { return FreakComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/jw-modal/jw-modal.service */ "./src/app/util/jw-modal/jw-modal.service.ts");
/* harmony import */ var _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mom-status.enum */ "./src/app/work/mother/mom-status.enum.ts");
/* harmony import */ var _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../settings/shared/hive.model */ "./src/app/settings/shared/hive.model.ts");
/* harmony import */ var _action_time_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action-time.enum */ "./src/app/work/mother/action-time.enum.ts");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/util.service */ "./src/app/util/util.service.ts");
/* harmony import */ var _mom_attributes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mom-attributes.service */ "./src/app/work/mother/mom-attributes.service.ts");
/* harmony import */ var _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../settings/shared/colonies.service */ "./src/app/settings/shared/colonies.service.ts");
/* harmony import */ var _log_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../log.model */ "./src/app/work/mother/log.model.ts");
/* harmony import */ var _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../util/executor/controls-protection-id.enum */ "./src/app/util/executor/controls-protection-id.enum.ts");
/* harmony import */ var _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../util/executor/executor.service */ "./src/app/util/executor/executor.service.ts");












var FreakComponent = /** @class */ (function () {
    function FreakComponent(modalService, momAttributesService, coloniesService, executorService) {
        this.modalService = modalService;
        this.momAttributesService = momAttributesService;
        this.coloniesService = coloniesService;
        this.executorService = executorService;
        this.onChangeMomStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.textareaValue = '';
        this.textareaOnEntryEditValue = 'blablabla';
        this.logEntryThatIsBeingEdited = new _log_model__WEBPACK_IMPORTED_MODULE_9__["Log"]("blablabla");
        this.momStatusEnum = _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"];
        this.actionTimeEnum = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"];
        this.momStatusInitialValueText = null;
        this.radioBtnStatusPastDateInputValue = null;
    }
    FreakComponent.prototype.ngOnChanges = function () {
        this.currentlyChosenHiveInitialData = this.coloniesService.getInitialHiveData(this.currentlyChosenHive);
        this.setMotherStatusSectionValuesCorrect();
    };
    FreakComponent.prototype.saveMotherStatusSectionValues = function (setToToday) {
        if (setToToday) {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].TODAY;
        }
        if (this.radioBtnMomStatusSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].TODAY) {
            this.currentlyChosenHive.momAttributes.statusStartingDate = new Date();
        }
        else if (this.radioBtnMomStatusSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].PAST_DATE) {
            this.currentlyChosenHive.momAttributes.statusStartingDate =
                new Date(new Date().setHours(0, 0, 0, 0) -
                    +this.radioBtnStatusPastDateInputValue * 24 * 60 * 60 * 1000);
        }
        else if (this.radioBtnMomStatusSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].INITIAL_DATE) {
            this.currentlyChosenHive.momAttributes.statusStartingDate =
                this.currentlyChosenHiveInitialData.momAttributes.statusStartingDate;
        }
        this.executorService.exeWithTimer(this.momAttributesService.onUpdateMomAttributes, [this.currentlyChosenHive], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_10__["ControlsProtectionIdEnum"].MOM);
        this.setMotherStatusSectionValuesCorrect();
    };
    FreakComponent.prototype.setMotherStatusSectionValuesCorrect = function () {
        this.momStatusInitialValueText = null;
        var daysFromStatusBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHive.momAttributes.statusStartingDate);
        if (daysFromStatusBeginning == 0) {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].TODAY;
            this.momStatusSectionTimeText = 'täna';
            this.radioBtnStatusPastDateInputValue = null;
        }
        else if (daysFromStatusBeginning == 1) {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].PAST_DATE;
            this.momStatusSectionTimeText = '1 päev tagasi';
            this.radioBtnStatusPastDateInputValue = 1;
        }
        else {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].PAST_DATE;
            this.momStatusSectionTimeText = daysFromStatusBeginning + ' päeva tagasi';
            this.radioBtnStatusPastDateInputValue = daysFromStatusBeginning;
        }
        if (this.currentlyChosenHiveInitialData &&
            this.currentlyChosenHiveInitialData.momAttributes.momStatus === _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].FREAK) {
            var daysFromInitialStatusBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHiveInitialData.momAttributes.statusStartingDate);
            if (daysFromStatusBeginning != daysFromInitialStatusBeginning) {
                if (daysFromInitialStatusBeginning == 0) {
                    return;
                }
                else if (daysFromInitialStatusBeginning == 1) {
                    this.momStatusInitialValueText = daysFromInitialStatusBeginning + ' päev tagasi';
                }
                else {
                    this.momStatusInitialValueText = daysFromInitialStatusBeginning + ' päeva tagasi';
                }
            }
        }
    };
    FreakComponent.prototype.radioBtnMomStatusSelected = function (selectedActionTime) {
        this.radioBtnMomStatusSelection = selectedActionTime;
        this.saveMotherStatusSectionValues();
    };
    FreakComponent.prototype.onChangeMotherStatusButtonClick = function (newMotherStatus) {
        this.modalService.close('mother-freak-edit');
        this.onChangeMomStatus.emit(newMotherStatus);
    };
    FreakComponent.prototype.onOpenMomStatusSectionEditButton = function () {
        this.modalService.open('mother-freak-edit');
    };
    FreakComponent.prototype.onCloseMomStatusSectionEditButton = function () {
        this.setMotherStatusSectionValuesCorrect();
        this.modalService.close('mother-freak-edit');
    };
    FreakComponent.prototype.onOpenFreakLogEntryButton = function (logEntryToBeEdited) {
        this.logEntryThatIsBeingEdited = logEntryToBeEdited;
        this.textareaOnEntryEditValue = logEntryToBeEdited.text;
        this.modalService.open('mother-freak-log-entry-edit');
    };
    FreakComponent.prototype.onCloseFreakLogEntryButton = function () {
        this.modalService.close('mother-freak-log-entry-edit');
    };
    FreakComponent.prototype.onOpenFreakMotherLogEditButton = function () {
        this.modalService.open('mother-freak-log-edit');
    };
    FreakComponent.prototype.onCloseFreakMotherLogEditButton = function () {
        this.modalService.close('mother-freak-log-edit');
    };
    FreakComponent.prototype.deleteLogEntry = function (logEntryToDelete) {
        this.momAttributesService.onDeleteFreakLogEntry(logEntryToDelete);
        this.modalService.close('mother-freak-log-entry-edit');
    };
    FreakComponent.prototype.saveNewLogEntry = function () {
        this.momAttributesService.onSaveNewFreakLogEntry(this.currentlyChosenHive, this.textareaValue);
        this.textareaValue = '';
    };
    FreakComponent.prototype.updateLogEntry = function (logEntryToUpdate, newlogEntryText) {
        this.momAttributesService.onUpdateFreakLogEntry(logEntryToUpdate, newlogEntryText);
        this.modalService.close('mother-freak-log-entry-edit');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_4__["Hive"])
    ], FreakComponent.prototype, "currentlyChosenHive", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FreakComponent.prototype, "onChangeMomStatus", void 0);
    FreakComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-freak',
            template: __webpack_require__(/*! ./freak.component.html */ "./src/app/work/mother/freak/freak.component.html"),
            styles: [__webpack_require__(/*! ./freak.component.css */ "./src/app/work/mother/freak/freak.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_2__["JwModalService"],
            _mom_attributes_service__WEBPACK_IMPORTED_MODULE_7__["MomAttributesService"],
            _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_8__["ColoniesService"],
            _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_11__["ExecutorService"]])
    ], FreakComponent);
    return FreakComponent;
}());



/***/ }),

/***/ "./src/app/work/mother/hatched/hatched.component.css":
/*!***********************************************************!*\
  !*** ./src/app/work/mother/hatched/hatched.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  height: 80px;\r\n}\r\n\r\nimg.x {\r\n  height: 40px;\r\n}\r\n\r\n.card-body {\r\n  padding: 10px;\r\n}\r\n\r\nh3.time-text {\r\n  margin-top: -10px;\r\n  margin-bottom: 0;\r\n  max-width: 214px;\r\n}\r\n\r\nbutton.change-mother-status-button {\r\n  width: 180px;\r\n  height: 80px;\r\n  margin: 0;\r\n}\r\n\r\ndiv.pictures-column {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n\r\np.marked-date-description {\r\n  font-size: 31px;\r\n  margin-top: -10px;\r\n}\r\n\r\nbutton.closing {\r\n  display: inline-block;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  padding: 2px 2px 2px 2px;\r\n  margin: 0;\r\n  margin-right: 10px;\r\n}\r\n\r\ndiv.option {\r\n  margin-top: 50px;\r\n}\r\n\r\ndiv.option2 {\r\n  margin-top: 20px;\r\n}\r\n\r\ndiv.twoButtons {\r\n  margin-top: 200px;\r\n}\r\n\r\ninput.bigRadio {\r\n  width: 35px;\r\n  height: 35px\r\n}\r\n\r\n.up-bar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\ninput.num {\r\n  width: 70px;\r\n  height: 35px\r\n}\r\n\r\ninput.description {\r\n  width: 180px;\r\n  height: 35px\r\n}\r\n\r\nimg.pencil {\r\n  height: 40px;\r\n}\r\n\r\nbutton {\r\n  height: 60px;\r\n  width: 60px;\r\n  margin-top: 20px;\r\n  margin-left: 9px;\r\n}\r\n\r\n.custom-select {\r\n  display: inline;\r\n  width: 150px;\r\n  font-size: 28px;\r\n  margin-left: 18px;\r\n}\r\n\r\n.option-row {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n\r\nbutton.first-from-top-button {\r\n  height: 115px;\r\n  width: 60px;\r\n  margin: 0;\r\n  margin-left: 9px\r\n}\r\n\r\nbutton.second-from-top-button {\r\n  margin-top: 30px;\r\n}\r\n\r\nbutton.third-from-top-button {\r\n  margin-top: 65px;\r\n}\r\n\r\nbutton.fourth-from-top-button {\r\n  margin-top: 75px;\r\n}\r\n\r\nbutton.fifth-from-top-button {\r\n  margin-top: 100px;\r\n}\r\n\r\ndiv.marked-image-block {\r\n  margin-top: 30px;\r\n  height: 156px;\r\n}\r\n\r\ndiv.second-image-block {\r\n  margin-top: 30px;\r\n  height: 110px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9tb3RoZXIvaGF0Y2hlZC9oYXRjaGVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsVUFBVTtDQUNYOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsNEJBQW9CO0VBQXBCLHlCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osWUFBWTtDQUNiOztBQUVEO0VBQ0UsY0FBYztFQUNkLCtCQUErQjtFQUMvQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osWUFBWTtDQUNiOztBQUVEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztDQUNmIiwiZmlsZSI6InNyYy9hcHAvd29yay9tb3RoZXIvaGF0Y2hlZC9oYXRjaGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG5cclxuaW1nLngge1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuaDMudGltZS10ZXh0IHtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIG1heC13aWR0aDogMjE0cHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5jaGFuZ2UtbW90aGVyLXN0YXR1cy1idXR0b24ge1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5kaXYucGljdHVyZXMtY29sdW1uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxucC5tYXJrZWQtZGF0ZS1kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAzMXB4O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcblxyXG5idXR0b24uY2xvc2luZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIHBhZGRpbmc6IDJweCAycHggMnB4IDJweDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5kaXYub3B0aW9uIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG5kaXYub3B0aW9uMiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuZGl2LnR3b0J1dHRvbnMge1xyXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xyXG59XHJcblxyXG5pbnB1dC5iaWdSYWRpbyB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4XHJcbn1cclxuXHJcbi51cC1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0Lm51bSB7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiAzNXB4XHJcbn1cclxuXHJcbmlucHV0LmRlc2NyaXB0aW9uIHtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgaGVpZ2h0OiAzNXB4XHJcbn1cclxuXHJcbmltZy5wZW5jaWwge1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogOXB4O1xyXG59XHJcblxyXG4uY3VzdG9tLXNlbGVjdCB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbn1cclxuXHJcbi5vcHRpb24tcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuYnV0dG9uLmZpcnN0LWZyb20tdG9wLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiAxMTVweDtcclxuICB3aWR0aDogNjBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDlweFxyXG59XHJcblxyXG5idXR0b24uc2Vjb25kLWZyb20tdG9wLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuYnV0dG9uLnRoaXJkLWZyb20tdG9wLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogNjVweDtcclxufVxyXG5cclxuYnV0dG9uLmZvdXJ0aC1mcm9tLXRvcC1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5maWZ0aC1mcm9tLXRvcC1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcblxyXG5kaXYubWFya2VkLWltYWdlLWJsb2NrIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGhlaWdodDogMTU2cHg7XHJcbn1cclxuXHJcbmRpdi5zZWNvbmQtaW1hZ2UtYmxvY2sge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgaGVpZ2h0OiAxMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/work/mother/hatched/hatched.component.html":
/*!************************************************************!*\
  !*** ./src/app/work/mother/hatched/hatched.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-8.5 pictures-column\">\r\n      <div\r\n        class=\"card bg-light\"\r\n        style=\"max-width: 16rem; height: 719px; margin-left:auto;margin-right:auto;text-align:center\">\r\n        <div class=\"card-header\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-primary change-mother-status-button\">\r\n            <img\r\n              src=\"assets/img/muuda.png\"\r\n              alt=\"ii\"\r\n              style=\"height: 65px\"\r\n              (click)=\"onChangeMotherStatusButtonClick(null)\">\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"card-body\" style=\"background-color: white\">\r\n\r\n\r\n          <img\r\n            src=\"assets/img/koorunudEma.jpg\" alt=\"ii\">\r\n          <h3 class=\"time-text\">{{ momStatusSectionTimeText }}</h3>\r\n\r\n\r\n          <div\r\n            *ngIf=\"!currentlyChosenHive.momAttributes.isLayingEggs\"\r\n            class=\"second-image-block\">\r\n            <img\r\n              src=\"assets/img/munebNot.png\" alt=\"ii\"\r\n              style=\"margin-top: 7px\">\r\n            <h3 class=\"time-text\">{{ layingEggsSectionTimeText }}</h3>\r\n          </div>\r\n          <div\r\n            *ngIf=\"currentlyChosenHive.momAttributes.isLayingEggs\"\r\n            class=\"second-image-block\">\r\n            <img\r\n              src=\"assets/img/munebOK.png\" alt=\"ii\"\r\n              style=\"margin-top: 7px\">\r\n            <h3 class=\"time-text\">{{ layingEggsSectionTimeText }}</h3>\r\n          </div>\r\n\r\n\r\n          <div class=\"marked-image-block\">\r\n            <div *ngIf=\"currentlyChosenHive.momAttributes.markedStatus === markedStatusEnum.UNMARKED\">\r\n              <img src=\"assets/img/unmarked.png\" alt=\"märgistamata\">\r\n            </div>\r\n            <div *ngIf=\"currentlyChosenHive.momAttributes.markedStatus === markedStatusEnum.ATTENTION\">\r\n              <img src=\"assets/img/attention.png\" alt=\"märkega probleeme\">\r\n              <h3\r\n                *ngIf=\"currentlyChosenHive.momAttributes.isMarkedDateMonthSet\"\r\n                class=\"time-text\">{{ currentlyChosenHive.momAttributes.markedDate | date:'MMMM yyyy'}}\r\n              </h3>\r\n              <h3\r\n                *ngIf=\"!currentlyChosenHive.momAttributes.isMarkedDateMonthSet\"\r\n                class=\"time-text\">{{ currentlyChosenHive.momAttributes.markedDate | date:'yyyy'}}\r\n              </h3>\r\n              <p class=\"marked-date-description\">\r\n                {{ currentlyChosenHive.momAttributes.markedDescription }}\r\n              </p>\r\n            </div>\r\n            <div *ngIf=\"currentlyChosenHive.momAttributes.markedStatus === markedStatusEnum.MARKED\">\r\n              <img\r\n                src=\"assets/img/marked.png\" alt=\"märgistatud\">\r\n              <h3\r\n                *ngIf=\"currentlyChosenHive.momAttributes.isMarkedDateMonthSet\"\r\n                class=\"time-text\">{{ currentlyChosenHive.momAttributes.markedDate | date:'MMMM yyyy'}}\r\n              </h3>\r\n              <h3\r\n                *ngIf=\"!currentlyChosenHive.momAttributes.isMarkedDateMonthSet\"\r\n                class=\"time-text\">{{ currentlyChosenHive.momAttributes.markedDate | date:'yyyy'}}\r\n              </h3>\r\n              <p class=\"marked-date-description\">\r\n                {{ currentlyChosenHive.momAttributes.markedDescription }}\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <img src=\"assets/img/synnip2evOk.png\" alt=\"ii\">\r\n          <h3\r\n            *ngIf=\"currentlyChosenHive.momAttributes.isBirthdayDateMonthSet\"\r\n            class=\"time-text\" style=\"margin-bottom: -15px !important;\">\r\n            {{ currentlyChosenHive.momAttributes.birthday | date:'MMMM yyyy'}}\r\n          </h3>\r\n          <h3\r\n            *ngIf=\"!currentlyChosenHive.momAttributes.isBirthdayDateMonthSet\"\r\n            class=\"time-text\" style=\"margin-bottom: -15px !important;\">\r\n            {{ currentlyChosenHive.momAttributes.birthday | date:'yyyy'}}\r\n          </h3>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-3.5\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary first-from-top-button\"\r\n        (click)=\"onChangeMotherStatusButtonClick(momStatusEnum.SEEN)\">\r\n        <img\r\n          src=\"assets/img/n2htudVertical.png\"\r\n          alt=\"ii\"\r\n          style=\"height: 100px\">\r\n      </button>\r\n      <br>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary second-from-top-button\"\r\n        (click)=\"onOpenMomStatusSectionEditButton()\">\r\n        <img\r\n          src=\"assets/img/muudaNupp.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n      <br>\r\n      <button\r\n        *ngIf=\"layingEggsSectionTimeText != 'täna'\"\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-success third-from-top-button\"\r\n        (click)=\"saveLayingEggsSectionValues(true)\">\r\n        <img\r\n          src=\"assets/img/check.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n      <button\r\n        *ngIf=\"layingEggsSectionTimeText === 'täna'\"\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary third-from-top-button\"\r\n        (click)=\"onOpenWhenSeenMotherLayingEggsEditButton()\">\r\n        <img\r\n          src=\"assets/img/muudaNupp.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n      <br>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary fourth-from-top-button\"\r\n        (click)=\"onOpenWhenMotherMarkedEditButton()\">\r\n        <img\r\n          src=\"assets/img/muudaNupp.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n      <br>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary fifth-from-top-button\"\r\n        (click)=\"onOpenWhenMotherBirthdayEditButton()\"\r\n        style=\"margin-bottom: 0 !important;\">\r\n        <img\r\n          src=\"assets/img/muudaNupp.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<jw-modal id=\"mother-hatched-edit\" style=\"max-width: 50rem; height: 45rem\" [smallModal]=\"true\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Millal see ema koorus?\r\n        </h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseMomStatusSectionEditButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-4\">\r\n        <img src=\"assets/img/koorunudEma.jpg\" alt=\"\">\r\n        <br>\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"hatched\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnMomStatusSelection === actionTimeEnum.TODAY\"\r\n                (change)=\"radioBtnMomStatusSelected(actionTimeEnum.TODAY)\">\r\n              Täna\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input type=\"radio\" name=\"hatched\"\r\n                     class=\"bigRadio\"\r\n                     [checked]=\"radioBtnMomStatusSelection === actionTimeEnum.PAST_DATE\"\r\n                     (change)=\"radioBtnMomStatusSelected(actionTimeEnum.PAST_DATE)\">\r\n              &nbsp;&nbsp;&nbsp;\r\n              <input\r\n                type=\"number\"\r\n                size=\"3\"\r\n                class=\"num\"\r\n                [(ngModel)]=\"radioBtnStatusPastDateInputValue\"\r\n                (ngModelChange)=\"radioBtnMomStatusSelected(actionTimeEnum.PAST_DATE)\"> päeva tagasi\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div\r\n          *ngIf=\"momStatusInitialValueText\"\r\n          class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input type=\"radio\" name=\"hatched\"\r\n                     class=\"bigRadio\"\r\n                     (change)=\"radioBtnMomStatusSelected(actionTimeEnum.INITIAL_DATE)\">\r\n              &nbsp;\r\n              <img src=\"assets/img/tagasi.png\" alt=\"\" style=\"height: 45px\">\r\n              ({{ momStatusInitialValueText }})\r\n            </h2>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-7\">\r\n        <div class=\"row\">\r\n          <h2>Ema staatus ei ole \"koorunud\"?</h2>\r\n        </div>\r\n        <div class=\"row option\">\r\n          <h2>Vali teine ema staatus:&nbsp;&nbsp;&nbsp;</h2>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-primary\"\r\n            style=\"width: 200px; height: 80px; margin: 0px\">\r\n            <img\r\n              src=\"assets/img/muuda.png\"\r\n              alt=\"ii\"\r\n              style=\"height: 65px\"\r\n              (click)=\"onChangeMotherStatusButtonClick()\">\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</jw-modal>\r\n\r\n\r\n<jw-modal id=\"mother-laying-eggs-edit\" [smallModal]=\"true\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Millal nägid viimati, et see ema munes?\r\n        </h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseWhenSeenMotherLayingEggsEditButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-5\">\r\n        <img src=\"assets/img/munebOK.png\" alt=\"\">\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"laying_eggs\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnLayingEggsSelection === actionTimeEnum.TODAY\"\r\n                (change)=\"radioBtnLayingEggsSelected(actionTimeEnum.TODAY)\">\r\n              Täna\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input type=\"radio\" name=\"laying_eggs\"\r\n                     class=\"bigRadio\"\r\n                     [checked]=\"radioBtnLayingEggsSelection === actionTimeEnum.PAST_DATE\"\r\n                     (change)=\"radioBtnLayingEggsSelected(actionTimeEnum.PAST_DATE)\">\r\n              &nbsp;&nbsp;&nbsp;\r\n              <input\r\n                type=\"number\"\r\n                size=\"3\"\r\n                class=\"num\"\r\n                [(ngModel)]=\"radioBtnLayingEggsPastDateInputValue\"\r\n                (ngModelChange)=\"radioBtnLayingEggsSelected(actionTimeEnum.PAST_DATE)\">\r\n              päeva tagasi\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div\r\n          *ngIf=\"layingEggsInitialValueText\"\r\n          class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"laying_eggs\"\r\n                class=\"bigRadio\"\r\n                [(ngModel)]=\"radioBtnLayingEggsPastDateInputValue\"\r\n                (ngModelChange)=\"radioBtnLayingEggsSelected(actionTimeEnum.INITIAL_DATE)\">\r\n              &nbsp;\r\n              <img src=\"assets/img/tagasi.png\" alt=\"\" style=\"height: 45px\">\r\n              ({{ layingEggsInitialValueText }})\r\n            </h2>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <img src=\"assets/img/munebNot.png\" alt=\"\">\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"laying_eggs\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnLayingEggsSelection === actionTimeEnum.NO_ACTION\"\r\n                (change)=\"radioBtnLayingEggsSelected(actionTimeEnum.NO_ACTION)\">\r\n              Ei ole näinud, et muneks\r\n            </h2>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</jw-modal>\r\n\r\n\r\n<jw-modal id=\"mother-marked-edit\" [smallModal]=\"true\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Kui korralikult on ema märgistatud ja millal?\r\n        </h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseWhenMotherMarkedEditButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"col\">\r\n      <div class=\"row\">\r\n        <div class=\"col-4\">\r\n          <img src=\"assets/img/marked.png\" alt=\"\">\r\n          <div class=\"radio option2\">\r\n            <label>\r\n              <h2>\r\n                <input\r\n                  type=\"radio\"\r\n                  name=\"marked_quality\"\r\n                  class=\"bigRadio\"\r\n                  [checked]=\"radioBtnMarkedStatusSelection === markedStatusEnum.MARKED\"\r\n                  (change)=\"radioBtnMarkedStatusSelected(markedStatusEnum.MARKED)\">\r\n                Korralik märgistus\r\n              </h2>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <img src=\"assets/img/attention.png\" alt=\"\">\r\n          <div class=\"radio option2\" style=\"font-size: 33px\">\r\n            <label>\r\n              <h2>\r\n                <input\r\n                  type=\"radio\"\r\n                  name=\"marked_quality\"\r\n                  class=\"bigRadio\"\r\n                  [checked]=\"radioBtnMarkedStatusSelection === markedStatusEnum.ATTENTION\"\r\n                  (change)=\"radioBtnMarkedStatusSelected(markedStatusEnum.ATTENTION)\">\r\n                Märgistusega on probleeme. <br>\r\n\r\n              </h2>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <img src=\"assets/img/unmarked.png\" alt=\"\">\r\n          <div class=\"radio option2\">\r\n            <label>\r\n              <h2>\r\n                <input\r\n                  type=\"radio\"\r\n                  name=\"marked_quality\"\r\n                  class=\"bigRadio\"\r\n                  [checked]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n                  (change)=\"radioBtnMarkedStatusSelected(markedStatusEnum.UNMARKED)\">\r\n                Ei ole märgistatud\r\n              </h2>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr style=\"margin-top: 10px; margin-bottom: 10px\">\r\n      <div class=\"row\" style=\"font-size: 33px\">\r\n        <div class=\"col-1\"></div>\r\n        <div class=\"col-11\">\r\n          Märksõna:\r\n          <input\r\n            type=\"text\"\r\n            size=\"10\"\r\n            class=\"description\"\r\n            [disabled]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n            [(ngModel)]=\"markedSectionAdditionlInfoText\"\r\n            (ngModelChange)=\"saveMarkedSectionValues()\">\r\n        </div>\r\n      </div>\r\n      <hr style=\"margin-top: 10px; margin-bottom: 0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <div class=\"radio option\" style=\"margin-top: 25px\">\r\n            <label>\r\n              <h2>\r\n                <input type=\"radio\" name=\"when_marked\"\r\n                       class=\"bigRadio\"\r\n                       [disabled]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n                       (change)=\"radioBtnMarkedTimeSelected(actionTimeEnum.UNKNOWN)\"\r\n                       [checked]=\"radioBtnMarkedTimeSelection === actionTimeEnum.UNKNOWN\">\r\n                &nbsp;Teadmata millal märgistatud\r\n              </h2>\r\n            </label>\r\n          </div>\r\n          <div style=\"margin-top: 37px\">\r\n            <div>\r\n              <label class=\"option-row\">\r\n                <input type=\"radio\"\r\n                       name=\"when_marked\"\r\n                       class=\"bigRadio\"\r\n                       [disabled]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n                       (change)=\"radioBtnMarkedTimeSelected(actionTimeEnum.PAST_DATE)\"\r\n                       [checked]=\"radioBtnMarkedTimeSelection === actionTimeEnum.PAST_DATE\">\r\n                <h2>&nbsp;Märgistatud:</h2>\r\n                <select\r\n                  name=\"month_marked\"\r\n                  class=\"custom-select\"\r\n                  size=\"1\"\r\n                  [disabled]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n                  [(ngModel)]=\"markedTimeMonthValue\"\r\n                  (change)=\"radioBtnMarkedTimeSelected(actionTimeEnum.PAST_DATE)\">\r\n                  <option value=\"\">Kuu</option>\r\n                  <option value=\"0\">Jaanuar</option>\r\n                  <option value=\"1\">Veebruar</option>\r\n                  <option value=\"2\">Märts</option>\r\n                  <option value=\"3\">Aprill</option>\r\n                  <option value=\"4\">Mai</option>\r\n                  <option value=\"5\">Juuni</option>\r\n                  <option value=\"6\">Juuli</option>\r\n                  <option value=\"7\">August</option>\r\n                  <option value=\"8\">September</option>\r\n                  <option value=\"9\">Oktoober</option>\r\n                  <option value=\"10\">November</option>\r\n                  <option value=\"11\">Detsember</option>\r\n                </select>\r\n                <select\r\n                  name=\"year_marked\"\r\n                  class=\"custom-select\"\r\n                  size=\"1\"\r\n                  [disabled]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n                  [(ngModel)]=\"markedTimeYearValue\"\r\n                  (change)=\"radioBtnMarkedTimeSelected(actionTimeEnum.PAST_DATE)\">\r\n                  <option value=\"\" disabled hidden>Aasta</option>\r\n                  <option value=\"2017\">2017</option>\r\n                  <option value=\"2018\">2018</option>\r\n                  <option value=\"2019\">2019</option>\r\n                  <option value=\"2020\">2020</option>\r\n                  <option value=\"2021\">2021</option>\r\n                </select>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</jw-modal>\r\n\r\n\r\n<jw-modal id=\"mother-birthday-edit\" [smallModal]=\"true\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Millal on see ema koorunud?\r\n        </h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseWhenMotherBirthdayEditButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-5\">\r\n        <img src=\"assets/img/synnip2evOk.png\" alt=\"\">\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <div class=\"radio option\" style=\"margin-top: 25px\">\r\n          <label>\r\n            <h2>\r\n              <input type=\"radio\" name=\"birthday\"\r\n                     class=\"bigRadio\"\r\n                     (change)=\"radioBtnBirthdayTimeSelected(actionTimeEnum.UNKNOWN)\"\r\n                     [checked]=\"radioBtnBirthdayTimeSelection === actionTimeEnum.UNKNOWN\">\r\n              &nbsp;Teadmata millal koorunud\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div>\r\n          <label class=\"option-row\">\r\n            <input type=\"radio\"\r\n                   name=\"birthday\"\r\n                   class=\"bigRadio\"\r\n                   (change)=\"radioBtnBirthdayTimeSelected(actionTimeEnum.PAST_DATE)\"\r\n                   [checked]=\"radioBtnBirthdayTimeSelection === actionTimeEnum.PAST_DATE\">\r\n            <select\r\n              name=\"month_marked\"\r\n              class=\"custom-select\"\r\n              size=\"1\"\r\n              style=\"width: 200px\"\r\n              [(ngModel)]=\"birthdayTimeMonthValue\"\r\n              (ngModelChange)=\"radioBtnBirthdayTimeSelected(actionTimeEnum.PAST_DATE)\">\r\n              <option value=\"\">Kuu</option>\r\n              <option value=\"0\">Jaanuar</option>\r\n              <option value=\"1\">Veebruar</option>\r\n              <option value=\"2\">Märts</option>\r\n              <option value=\"3\">Aprill</option>\r\n              <option value=\"4\">Mai</option>\r\n              <option value=\"5\">Juuni</option>\r\n              <option value=\"6\">Juuli</option>\r\n              <option value=\"7\">August</option>\r\n              <option value=\"8\">September</option>\r\n              <option value=\"9\">Oktoober</option>\r\n              <option value=\"10\">November</option>\r\n              <option value=\"11\">Detsember</option>\r\n            </select>\r\n            <select\r\n              name=\"year_marked\"\r\n              class=\"custom-select\"\r\n              size=\"1\"\r\n              [(ngModel)]=\"birthdayTimeYearValue\"\r\n              (ngModelChange)=\"radioBtnBirthdayTimeSelected(actionTimeEnum.PAST_DATE)\">\r\n              <option value=\"\" disabled hidden>Aasta</option>\r\n              <option value=\"2017\">2017</option>\r\n              <option value=\"2018\">2018</option>\r\n              <option value=\"2019\">2019</option>\r\n              <option value=\"2020\">2020</option>\r\n              <option value=\"2021\">2021</option>\r\n            </select>\r\n          </label>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <h2>Selles tarus ei ole veel koorunud ema?</h2>\r\n        </div>\r\n        <div class=\"row option\">\r\n          <h2>Vali teine ema staatus:&nbsp;&nbsp;&nbsp;</h2>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-primary\"\r\n            style=\"width: 200px; height: 80px; margin: 0px\">\r\n            <img\r\n              src=\"assets/img/muuda.png\"\r\n              alt=\"ii\"\r\n              style=\"height: 65px\"\r\n              (click)=\"onChangeMotherStatusButtonClick()\">\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</jw-modal>\r\n"

/***/ }),

/***/ "./src/app/work/mother/hatched/hatched.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/work/mother/hatched/hatched.component.ts ***!
  \**********************************************************/
/*! exports provided: HatchedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HatchedComponent", function() { return HatchedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/jw-modal/jw-modal.service */ "./src/app/util/jw-modal/jw-modal.service.ts");
/* harmony import */ var _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mom-status.enum */ "./src/app/work/mother/mom-status.enum.ts");
/* harmony import */ var _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../settings/shared/hive.model */ "./src/app/settings/shared/hive.model.ts");
/* harmony import */ var _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../marked-status.enum */ "./src/app/work/mother/marked-status.enum.ts");
/* harmony import */ var _action_time_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../action-time.enum */ "./src/app/work/mother/action-time.enum.ts");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../util/util.service */ "./src/app/util/util.service.ts");
/* harmony import */ var _mom_attributes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mom-attributes.service */ "./src/app/work/mother/mom-attributes.service.ts");
/* harmony import */ var _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../settings/shared/colonies.service */ "./src/app/settings/shared/colonies.service.ts");
/* harmony import */ var _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../util/executor/executor.service */ "./src/app/util/executor/executor.service.ts");
/* harmony import */ var _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../util/executor/controls-protection-id.enum */ "./src/app/util/executor/controls-protection-id.enum.ts");












var HatchedComponent = /** @class */ (function () {
    function HatchedComponent(modalService, momAttributesService, coloniesService, executorService) {
        this.modalService = modalService;
        this.momAttributesService = momAttributesService;
        this.coloniesService = coloniesService;
        this.executorService = executorService;
        this.onChangeMomStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.momStatusEnum = _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"];
        this.markedStatusEnum = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"];
        this.actionTimeEnum = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"];
        this.momStatusInitialValueText = null;
        this.radioBtnStatusPastDateInputValue = null;
        this.layingEggsInitialValueText = null;
        this.radioBtnLayingEggsPastDateInputValue = null;
        this.markedTimeMonthValue = '';
        this.markedTimeYearValue = '';
        this.birthdayTimeMonthValue = '';
        this.birthdayTimeYearValue = '';
    }
    HatchedComponent.prototype.ngOnChanges = function () {
        this.currentlyChosenHiveInitialData = this.coloniesService.getInitialHiveData(this.currentlyChosenHive);
        this.setMotherStatusSectionValuesCorrect();
        this.setLayingEggsSectionValuesCorrect();
        this.setMarkedSectionValuesCorrect();
        this.setBirthdaySectionValuesCorrect();
    };
    HatchedComponent.prototype.setMotherStatusSectionValuesCorrect = function () {
        this.momStatusInitialValueText = null;
        var daysFromStatusBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHive.momAttributes.statusStartingDate);
        if (daysFromStatusBeginning == 0) {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].TODAY;
            this.momStatusSectionTimeText = 'täna';
            this.radioBtnStatusPastDateInputValue = null;
        }
        else if (daysFromStatusBeginning == 1) {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE;
            this.momStatusSectionTimeText = '1 päev tagasi';
            this.radioBtnStatusPastDateInputValue = 1;
        }
        else {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE;
            this.momStatusSectionTimeText = daysFromStatusBeginning + ' päeva tagasi';
            this.radioBtnStatusPastDateInputValue = daysFromStatusBeginning;
        }
        if (this.currentlyChosenHiveInitialData &&
            this.currentlyChosenHiveInitialData.momAttributes.momStatus === _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].HATCHED) {
            var daysFromInitialStatusBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHiveInitialData.momAttributes.statusStartingDate);
            if (daysFromInitialStatusBeginning == 0) {
                return;
            }
            else if (daysFromInitialStatusBeginning == 1) {
                this.momStatusInitialValueText = daysFromInitialStatusBeginning + ' päev tagasi';
            }
            else {
                this.momStatusInitialValueText = daysFromInitialStatusBeginning + ' päeva tagasi';
            }
        }
    };
    HatchedComponent.prototype.saveMotherStatusSectionValues = function (setToToday) {
        if (setToToday) {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].TODAY;
        }
        if (this.radioBtnMomStatusSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].TODAY) {
            this.currentlyChosenHive.momAttributes.statusStartingDate = new Date();
        }
        else if (this.radioBtnMomStatusSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE) {
            this.currentlyChosenHive.momAttributes.statusStartingDate =
                new Date(new Date().setHours(0, 0, 0, 0) -
                    +this.radioBtnStatusPastDateInputValue * 24 * 60 * 60 * 1000);
        }
        else if (this.radioBtnMomStatusSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].INITIAL_DATE) {
            this.currentlyChosenHive.momAttributes.statusStartingDate =
                this.currentlyChosenHiveInitialData.momAttributes.statusStartingDate;
        }
        this.executorService.exeWithTimer(this.momAttributesService.onUpdateMomAttributes, [this.currentlyChosenHive], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_11__["ControlsProtectionIdEnum"].MOM);
        this.setMotherStatusSectionValuesCorrect();
    };
    HatchedComponent.prototype.setLayingEggsSectionValuesCorrect = function () {
        this.layingEggsInitialValueText = null;
        if (this.currentlyChosenHive.momAttributes.isLayingEggs) {
            var daysFromLayingEggsBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHive.momAttributes.eggsLastSeen);
            if (daysFromLayingEggsBeginning == 0) {
                this.radioBtnLayingEggsSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].TODAY;
                this.layingEggsSectionTimeText = 'täna';
                this.radioBtnLayingEggsPastDateInputValue = null;
            }
            else if (daysFromLayingEggsBeginning == 1) {
                this.radioBtnLayingEggsSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE;
                this.layingEggsSectionTimeText = '1 päev tagasi';
                this.radioBtnLayingEggsPastDateInputValue = 1;
            }
            else {
                this.radioBtnLayingEggsSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE;
                this.layingEggsSectionTimeText = daysFromLayingEggsBeginning + ' päeva tagasi';
                this.radioBtnLayingEggsPastDateInputValue = daysFromLayingEggsBeginning;
            }
        }
        else {
            this.radioBtnLayingEggsSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].NO_ACTION;
            this.layingEggsSectionTimeText = '';
            this.radioBtnLayingEggsPastDateInputValue = null;
        }
        if (this.currentlyChosenHiveInitialData &&
            this.currentlyChosenHiveInitialData.momAttributes.momStatus === _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].HATCHED) {
            var daysFromInitialStatusBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHiveInitialData.momAttributes.eggsLastSeen);
            if (daysFromInitialStatusBeginning == 0 ||
                !this.currentlyChosenHiveInitialData.momAttributes.isLayingEggs) {
                return;
            }
            else if (daysFromInitialStatusBeginning == 1) {
                this.layingEggsInitialValueText = daysFromInitialStatusBeginning + ' päev tagasi';
            }
            else {
                this.layingEggsInitialValueText = daysFromInitialStatusBeginning + ' päeva tagasi';
            }
        }
    };
    HatchedComponent.prototype.saveLayingEggsSectionValues = function (setToToday) {
        if (setToToday) {
            this.radioBtnLayingEggsSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].TODAY;
        }
        if (this.radioBtnLayingEggsSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].TODAY) {
            this.currentlyChosenHive.momAttributes.isLayingEggs = true;
            this.currentlyChosenHive.momAttributes.eggsLastSeen = new Date();
        }
        else if (this.radioBtnLayingEggsSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE) {
            this.currentlyChosenHive.momAttributes.isLayingEggs = true;
            this.currentlyChosenHive.momAttributes.eggsLastSeen =
                new Date(new Date().setHours(0, 0, 0, 0) -
                    +this.radioBtnLayingEggsPastDateInputValue * 24 * 60 * 60 * 1000);
        }
        else if (this.radioBtnLayingEggsSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].INITIAL_DATE) {
            this.currentlyChosenHive.momAttributes.isLayingEggs = true;
            this.currentlyChosenHive.momAttributes.eggsLastSeen =
                this.currentlyChosenHiveInitialData.momAttributes.eggsLastSeen;
        }
        else if (this.radioBtnLayingEggsSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].NO_ACTION) {
            this.currentlyChosenHive.momAttributes.isLayingEggs = false;
            this.currentlyChosenHive.momAttributes.eggsLastSeen = null;
        }
        this.executorService.exeWithTimer(this.momAttributesService.onUpdateMomAttributes, [this.currentlyChosenHive], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_11__["ControlsProtectionIdEnum"].MOM);
        this.setLayingEggsSectionValuesCorrect();
    };
    HatchedComponent.prototype.setMarkedSectionValuesCorrect = function () {
        this.markedSectionAdditionlInfoText = this.currentlyChosenHive.momAttributes.markedDescription;
        if (this.currentlyChosenHive.momAttributes.markedStatus == _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].MARKED) {
            this.radioBtnMarkedStatusSelection = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].MARKED;
        }
        else if (this.currentlyChosenHive.momAttributes.markedStatus == _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].ATTENTION) {
            this.radioBtnMarkedStatusSelection = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].ATTENTION;
        }
        else if (this.currentlyChosenHive.momAttributes.markedStatus == _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].UNMARKED) {
            this.radioBtnMarkedStatusSelection = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].UNMARKED;
            this.radioBtnMarkedTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN;
        }
        if (this.currentlyChosenHive.momAttributes.markedDate) {
            this.radioBtnMarkedTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE;
            var markedDate = new Date(this.currentlyChosenHive.momAttributes.markedDate);
            this.markedTimeYearValue = markedDate.getFullYear().toString();
            if (this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet) {
                this.markedTimeMonthValue = markedDate.getMonth().toString();
            }
            else {
                this.markedTimeMonthValue = '';
            }
        }
        else {
            this.radioBtnMarkedTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN;
            this.markedTimeMonthValue = '';
            this.markedTimeYearValue = '';
        }
    };
    HatchedComponent.prototype.saveMarkedSectionValues = function () {
        if (this.radioBtnMarkedStatusSelection === _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].MARKED) {
            this.currentlyChosenHive.momAttributes.markedStatus = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].MARKED;
            this.currentlyChosenHive.momAttributes.markedDescription = this.markedSectionAdditionlInfoText;
            if (this.radioBtnMarkedTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN) {
                this.currentlyChosenHive.momAttributes.markedDate = null;
            }
            else if (this.radioBtnMarkedTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE) {
                this.currentlyChosenHive.momAttributes.markedDate = new Date();
                this.currentlyChosenHive.momAttributes.markedDate.setFullYear(+this.markedTimeYearValue);
                if (this.markedTimeMonthValue === '') {
                    this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = false;
                }
                else {
                    this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = true;
                    this.currentlyChosenHive.momAttributes.markedDate.setMonth(+this.markedTimeMonthValue);
                }
            }
        }
        else if (this.radioBtnMarkedStatusSelection === _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].ATTENTION) {
            this.currentlyChosenHive.momAttributes.markedStatus = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].ATTENTION;
            this.currentlyChosenHive.momAttributes.markedDescription = this.markedSectionAdditionlInfoText;
            if (this.radioBtnMarkedTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN) {
                this.currentlyChosenHive.momAttributes.markedDate = null;
            }
            else if (this.radioBtnMarkedTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE) {
                this.currentlyChosenHive.momAttributes.markedDate = new Date();
                this.currentlyChosenHive.momAttributes.markedDate.setFullYear(+this.markedTimeYearValue);
                if (this.markedTimeMonthValue === '') {
                    this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = false;
                }
                else {
                    this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = true;
                    this.currentlyChosenHive.momAttributes.markedDate.setMonth(+this.markedTimeMonthValue);
                }
            }
        }
        else if (this.radioBtnMarkedStatusSelection === _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].UNMARKED) {
            this.currentlyChosenHive.momAttributes.markedStatus = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].UNMARKED;
            this.currentlyChosenHive.momAttributes.markedDescription = '';
            this.currentlyChosenHive.momAttributes.markedDate = null;
            this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = false;
        }
        this.executorService.exeWithTimer(this.momAttributesService.onUpdateMomAttributes, [this.currentlyChosenHive], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_11__["ControlsProtectionIdEnum"].MOM);
        this.setMarkedSectionValuesCorrect();
    };
    HatchedComponent.prototype.setBirthdaySectionValuesCorrect = function () {
        if (this.currentlyChosenHive.momAttributes.birthday) {
            this.radioBtnBirthdayTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE;
            var birthday = new Date(this.currentlyChosenHive.momAttributes.birthday);
            this.birthdayTimeYearValue = birthday.getFullYear().toString();
            if (this.currentlyChosenHive.momAttributes.isBirthdayDateMonthSet) {
                this.birthdayTimeMonthValue = birthday.getMonth().toString();
            }
            else {
                this.birthdayTimeMonthValue = '';
            }
        }
        else {
            this.radioBtnBirthdayTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN;
            this.birthdayTimeMonthValue = '';
            this.birthdayTimeYearValue = '';
        }
    };
    HatchedComponent.prototype.saveBirthdaySectionValues = function () {
        if (this.radioBtnBirthdayTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN) {
            this.currentlyChosenHive.momAttributes.birthday = null;
            this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = false;
        }
        else if (this.radioBtnBirthdayTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE) {
            this.currentlyChosenHive.momAttributes.birthday = new Date();
            this.currentlyChosenHive.momAttributes.birthday.setFullYear(+this.birthdayTimeYearValue);
            if (!this.birthdayTimeMonthValue) {
                this.currentlyChosenHive.momAttributes.isBirthdayDateMonthSet = false;
            }
            else {
                this.currentlyChosenHive.momAttributes.isBirthdayDateMonthSet = true;
                this.currentlyChosenHive.momAttributes.birthday.setMonth(+this.birthdayTimeMonthValue);
            }
        }
        this.executorService.exeWithTimer(this.momAttributesService.onUpdateMomAttributes, [this.currentlyChosenHive], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_11__["ControlsProtectionIdEnum"].MOM);
        this.setBirthdaySectionValuesCorrect();
    };
    HatchedComponent.prototype.radioBtnMomStatusSelected = function (selectedActionTime) {
        this.radioBtnMomStatusSelection = selectedActionTime;
        this.saveMotherStatusSectionValues();
    };
    HatchedComponent.prototype.radioBtnLayingEggsSelected = function (selectedActionTime) {
        this.radioBtnLayingEggsSelection = selectedActionTime;
        this.saveLayingEggsSectionValues();
    };
    HatchedComponent.prototype.radioBtnMarkedStatusSelected = function (markedStatusSelected) {
        this.radioBtnMarkedStatusSelection = markedStatusSelected;
        if (markedStatusSelected === _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].UNMARKED) {
            this.radioBtnMarkedTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN;
            this.markedSectionAdditionlInfoText = '';
        }
        this.saveMarkedSectionValues();
    };
    HatchedComponent.prototype.radioBtnMarkedTimeSelected = function (selectedActionTime) {
        if (selectedActionTime === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE && !this.markedTimeYearValue) {
            this.markedTimeYearValue = '2019';
        }
        this.radioBtnMarkedTimeSelection = selectedActionTime;
        this.saveMarkedSectionValues();
    };
    HatchedComponent.prototype.radioBtnBirthdayTimeSelected = function (selectedActionTime) {
        if (selectedActionTime === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE && !this.birthdayTimeYearValue) {
            this.birthdayTimeYearValue = '2019';
        }
        this.radioBtnBirthdayTimeSelection = selectedActionTime;
        this.saveBirthdaySectionValues();
    };
    HatchedComponent.prototype.onChangeMotherStatusButtonClick = function (newMotherStatus) {
        this.modalService.close('mother-hatched-edit');
        this.modalService.close('mother-birthday-edit');
        this.onChangeMomStatus.emit(newMotherStatus);
    };
    HatchedComponent.prototype.onOpenMomStatusSectionEditButton = function () {
        this.modalService.open('mother-hatched-edit');
    };
    HatchedComponent.prototype.onCloseMomStatusSectionEditButton = function () {
        this.setMotherStatusSectionValuesCorrect();
        this.modalService.close('mother-hatched-edit');
    };
    HatchedComponent.prototype.onOpenWhenSeenMotherLayingEggsEditButton = function () {
        this.modalService.open('mother-laying-eggs-edit');
    };
    HatchedComponent.prototype.onCloseWhenSeenMotherLayingEggsEditButton = function () {
        this.modalService.close('mother-laying-eggs-edit');
    };
    HatchedComponent.prototype.onOpenWhenMotherMarkedEditButton = function () {
        this.modalService.open('mother-marked-edit');
    };
    HatchedComponent.prototype.onCloseWhenMotherMarkedEditButton = function () {
        this.modalService.close('mother-marked-edit');
    };
    HatchedComponent.prototype.onOpenWhenMotherBirthdayEditButton = function () {
        this.modalService.open('mother-birthday-edit');
    };
    HatchedComponent.prototype.onCloseWhenMotherBirthdayEditButton = function () {
        this.modalService.close('mother-birthday-edit');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_4__["Hive"])
    ], HatchedComponent.prototype, "currentlyChosenHive", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HatchedComponent.prototype, "onChangeMomStatus", void 0);
    HatchedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hatched',
            template: __webpack_require__(/*! ./hatched.component.html */ "./src/app/work/mother/hatched/hatched.component.html"),
            styles: [__webpack_require__(/*! ./hatched.component.css */ "./src/app/work/mother/hatched/hatched.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_2__["JwModalService"],
            _mom_attributes_service__WEBPACK_IMPORTED_MODULE_8__["MomAttributesService"],
            _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_9__["ColoniesService"],
            _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_10__["ExecutorService"]])
    ], HatchedComponent);
    return HatchedComponent;
}());



/***/ }),

/***/ "./src/app/work/mother/in-cage/in-cage.component.css":
/*!***********************************************************!*\
  !*** ./src/app/work/mother/in-cage/in-cage.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  height: 80px;\r\n}\r\n\r\nimg.x {\r\n  height: 40px;\r\n}\r\n\r\n.card-body {\r\n  padding: 10px;\r\n}\r\n\r\nh3.time-text {\r\n  margin-top: -10px;\r\n  margin-bottom: 0;\r\n  max-width: 214px;\r\n}\r\n\r\nbutton.change-mother-status-button {\r\n  width: 180px;\r\n  height: 80px;\r\n  margin: 0;\r\n}\r\n\r\ndiv.pictures-column {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n\r\np.marked-date-description {\r\n  font-size: 31px;\r\n  margin-top: -10px;\r\n}\r\n\r\nbutton.closing {\r\n  display: inline-block;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  padding: 2px 2px 2px 2px;\r\n  margin: 0;\r\n  margin-right: 10px;\r\n}\r\n\r\ndiv.option {\r\n  margin-top: 50px;\r\n}\r\n\r\ndiv.option2 {\r\n  margin-top: 20px;\r\n}\r\n\r\ndiv.twoButtons {\r\n  margin-top: 200px;\r\n}\r\n\r\ninput.bigRadio {\r\n  width: 35px;\r\n  height: 35px\r\n}\r\n\r\n.up-bar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\ninput.num {\r\n  width: 70px;\r\n  height: 35px\r\n}\r\n\r\ninput.description {\r\n  width: 180px;\r\n  height: 35px\r\n}\r\n\r\nimg.pencil {\r\n  height: 40px;\r\n}\r\n\r\nbutton {\r\n  height: 60px;\r\n  width: 60px;\r\n  margin-top: 20px;\r\n  margin-left: 9px;\r\n}\r\n\r\n.custom-select {\r\n  display: inline;\r\n  width: 150px;\r\n  font-size: 28px;\r\n  margin-left: 18px;\r\n}\r\n\r\n.option-row {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n\r\nbutton.first-from-top-button {\r\n  height: 115px;\r\n  width: 60px;\r\n  margin: 0;\r\n  margin-left: 9px\r\n}\r\n\r\nbutton.second-from-top-button {\r\n  margin-top: 30px;\r\n}\r\n\r\nbutton.third-from-top-button {\r\n  margin-top: 65px;\r\n}\r\n\r\nbutton.fourth-from-top-button {\r\n  margin-top: 75px;\r\n}\r\n\r\nbutton.fifth-from-top-button {\r\n  margin-top: 100px;\r\n}\r\n\r\ndiv.marked-image-block-for-in-cage {\r\n  margin-top: 135px;\r\n  height: 156px;\r\n}\r\n\r\ndiv.second-image-block {\r\n  margin-top: 30px;\r\n  height: 110px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9tb3RoZXIvaW4tY2FnZS9pbi1jYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsVUFBVTtDQUNYOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsNEJBQW9CO0VBQXBCLHlCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osWUFBWTtDQUNiOztBQUVEO0VBQ0UsY0FBYztFQUNkLCtCQUErQjtFQUMvQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osWUFBWTtDQUNiOztBQUVEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztDQUNmIiwiZmlsZSI6InNyYy9hcHAvd29yay9tb3RoZXIvaW4tY2FnZS9pbi1jYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG5cclxuaW1nLngge1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuaDMudGltZS10ZXh0IHtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIG1heC13aWR0aDogMjE0cHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5jaGFuZ2UtbW90aGVyLXN0YXR1cy1idXR0b24ge1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5kaXYucGljdHVyZXMtY29sdW1uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxucC5tYXJrZWQtZGF0ZS1kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAzMXB4O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcblxyXG5idXR0b24uY2xvc2luZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIHBhZGRpbmc6IDJweCAycHggMnB4IDJweDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5kaXYub3B0aW9uIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG5kaXYub3B0aW9uMiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuZGl2LnR3b0J1dHRvbnMge1xyXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xyXG59XHJcblxyXG5pbnB1dC5iaWdSYWRpbyB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4XHJcbn1cclxuXHJcbi51cC1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0Lm51bSB7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiAzNXB4XHJcbn1cclxuXHJcbmlucHV0LmRlc2NyaXB0aW9uIHtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgaGVpZ2h0OiAzNXB4XHJcbn1cclxuXHJcbmltZy5wZW5jaWwge1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogOXB4O1xyXG59XHJcblxyXG4uY3VzdG9tLXNlbGVjdCB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbn1cclxuXHJcbi5vcHRpb24tcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuYnV0dG9uLmZpcnN0LWZyb20tdG9wLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiAxMTVweDtcclxuICB3aWR0aDogNjBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDlweFxyXG59XHJcblxyXG5idXR0b24uc2Vjb25kLWZyb20tdG9wLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuYnV0dG9uLnRoaXJkLWZyb20tdG9wLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogNjVweDtcclxufVxyXG5cclxuYnV0dG9uLmZvdXJ0aC1mcm9tLXRvcC1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5maWZ0aC1mcm9tLXRvcC1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcblxyXG5kaXYubWFya2VkLWltYWdlLWJsb2NrLWZvci1pbi1jYWdlIHtcclxuICBtYXJnaW4tdG9wOiAxMzVweDtcclxuICBoZWlnaHQ6IDE1NnB4O1xyXG59XHJcblxyXG5kaXYuc2Vjb25kLWltYWdlLWJsb2NrIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGhlaWdodDogMTEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/work/mother/in-cage/in-cage.component.html":
/*!************************************************************!*\
  !*** ./src/app/work/mother/in-cage/in-cage.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-8.5 pictures-column\">\r\n      <div\r\n        class=\"card bg-light\"\r\n        style=\"max-width: 16rem; height: 719px; margin-left:auto;margin-right:auto;text-align:center\">\r\n        <div class=\"card-header\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-primary change-mother-status-button\">\r\n            <img\r\n              src=\"assets/img/muuda.png\"\r\n              alt=\"ii\"\r\n              style=\"height: 65px\"\r\n              (click)=\"onChangeMotherStatusButtonClick(null)\">\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"card-body\" style=\"background-color: white\">\r\n\r\n\r\n          <img\r\n            src=\"assets/img/puurigaTarru.png\" alt=\"ii\">\r\n          <h3 class=\"time-text\">{{ momStatusSectionTimeText }}</h3>\r\n\r\n\r\n          <div class=\"marked-image-block-for-in-cage\">\r\n            <div *ngIf=\"currentlyChosenHive.momAttributes.markedStatus === markedStatusEnum.UNMARKED\">\r\n              <img src=\"assets/img/unmarked.png\" alt=\"märgistamata\">\r\n            </div>\r\n            <div *ngIf=\"currentlyChosenHive.momAttributes.markedStatus === markedStatusEnum.ATTENTION\">\r\n              <img src=\"assets/img/attention.png\" alt=\"märkega probleeme\">\r\n              <h3\r\n                *ngIf=\"currentlyChosenHive.momAttributes.isMarkedDateMonthSet\"\r\n                class=\"time-text\">{{ currentlyChosenHive.momAttributes.markedDate | date:'MMMM yyyy'}}\r\n              </h3>\r\n              <h3\r\n                *ngIf=\"!currentlyChosenHive.momAttributes.isMarkedDateMonthSet\"\r\n                class=\"time-text\">{{ currentlyChosenHive.momAttributes.markedDate | date:'yyyy'}}\r\n              </h3>\r\n              <p class=\"marked-date-description\">\r\n                {{ currentlyChosenHive.momAttributes.markedDescription }}\r\n              </p>\r\n            </div>\r\n            <div *ngIf=\"currentlyChosenHive.momAttributes.markedStatus === markedStatusEnum.MARKED\">\r\n              <img\r\n                src=\"assets/img/marked.png\" alt=\"märgistatud\">\r\n              <h3\r\n                *ngIf=\"currentlyChosenHive.momAttributes.isMarkedDateMonthSet\"\r\n                class=\"time-text\">{{ currentlyChosenHive.momAttributes.markedDate | date:'MMMM yyyy'}}\r\n              </h3>\r\n              <h3\r\n                *ngIf=\"!currentlyChosenHive.momAttributes.isMarkedDateMonthSet\"\r\n                class=\"time-text\">{{ currentlyChosenHive.momAttributes.markedDate | date:'yyyy'}}\r\n              </h3>\r\n              <p class=\"marked-date-description\">\r\n                {{ currentlyChosenHive.momAttributes.markedDescription }}\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <img src=\"assets/img/synnip2evOk.png\" alt=\"ii\">\r\n          <h3\r\n            *ngIf=\"currentlyChosenHive.momAttributes.isBirthdayDateMonthSet\"\r\n            class=\"time-text\" style=\"margin-bottom: -15px !important;\">\r\n            {{ currentlyChosenHive.momAttributes.birthday | date:'MMMM yyyy'}}\r\n          </h3>\r\n          <h3\r\n            *ngIf=\"!currentlyChosenHive.momAttributes.isBirthdayDateMonthSet\"\r\n            class=\"time-text\" style=\"margin-bottom: -15px !important;\">\r\n            {{ currentlyChosenHive.momAttributes.birthday | date:'yyyy'}}\r\n          </h3>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-3.5\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary first-from-top-button\"\r\n        (click)=\"onChangeMotherStatusButtonClick(momStatusEnum.UN_CAGED)\">\r\n        <img\r\n          src=\"assets/img/puuristV2ljaVertical.jpg\"\r\n          alt=\"ii\"\r\n          style=\"height: 100px\">\r\n      </button>\r\n      <br>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary second-from-top-button\"\r\n        (click)=\"onOpenMomStatusSectionEditButton()\">\r\n        <img\r\n          src=\"assets/img/muudaNupp.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n      <br>\r\n      <br>\r\n\r\n      <div style=\"margin-top: 60px\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-light btn-outline-secondary fourth-from-top-button\"\r\n          (click)=\"onOpenWhenMotherMarkedEditButton()\">\r\n          <img\r\n            src=\"assets/img/muudaNupp.png\"\r\n            alt=\"ii\"\r\n            class=\"pencil\">\r\n        </button>\r\n      </div>\r\n\r\n      <br>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary fifth-from-top-button\"\r\n        (click)=\"onOpenWhenMotherBirthdayEditButton()\"\r\n        style=\"margin-bottom: 0 !important;\">\r\n        <img\r\n          src=\"assets/img/muudaNupp.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<jw-modal id=\"mother-in-cage-edit\" style=\"max-width: 50rem; height: 45rem\" [smallModal]=\"true\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Millal see ema sai puuriga tarru pandud?\r\n        </h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseMomStatusSectionEditButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-4\">\r\n        <img src=\"assets/img/puurigaTarru.png\" alt=\"\">\r\n        <br>\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"in-cage\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnMomStatusSelection === actionTimeEnum.TODAY\"\r\n                (change)=\"radioBtnMomStatusSelected(actionTimeEnum.TODAY)\">\r\n              Täna\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input type=\"radio\" name=\"in-cage\"\r\n                     class=\"bigRadio\"\r\n                     [checked]=\"radioBtnMomStatusSelection === actionTimeEnum.PAST_DATE\"\r\n                     (change)=\"radioBtnMomStatusSelected(actionTimeEnum.PAST_DATE)\">\r\n              &nbsp;&nbsp;&nbsp;\r\n              <input\r\n                type=\"number\"\r\n                size=\"3\"\r\n                class=\"num\"\r\n                [(ngModel)]=\"radioBtnStatusPastDateInputValue\"\r\n                (ngModelChange)=\"radioBtnMomStatusSelected(actionTimeEnum.PAST_DATE)\"> päeva tagasi\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div\r\n          *ngIf=\"momStatusInitialValueText\"\r\n          class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input type=\"radio\" name=\"in-cage\"\r\n                     class=\"bigRadio\"\r\n                     (change)=\"radioBtnMomStatusSelected(actionTimeEnum.INITIAL_DATE)\">\r\n              &nbsp;\r\n              <img src=\"assets/img/tagasi.png\" alt=\"\" style=\"height: 45px\">\r\n              ({{ momStatusInitialValueText }})\r\n            </h2>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-7\">\r\n        <div class=\"row\">\r\n          <h2>Ema staatus ei ole \"puuriga tarus\"?</h2>\r\n        </div>\r\n        <div class=\"row option\">\r\n          <h2>Vali teine ema staatus:&nbsp;&nbsp;&nbsp;</h2>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-primary\"\r\n            style=\"width: 200px; height: 80px; margin: 0px\">\r\n            <img\r\n              src=\"assets/img/muuda.png\"\r\n              alt=\"ii\"\r\n              style=\"height: 65px\"\r\n              (click)=\"onChangeMotherStatusButtonClick()\">\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</jw-modal>\r\n\r\n\r\n<jw-modal id=\"mother-marked-edit\" [smallModal]=\"true\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Kui korralikult on ema märgistatud ja millal?\r\n        </h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseWhenMotherMarkedEditButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"col\">\r\n      <div class=\"row\">\r\n        <div class=\"col-4\">\r\n          <img src=\"assets/img/marked.png\" alt=\"\">\r\n          <div class=\"radio option2\">\r\n            <label>\r\n              <h2>\r\n                <input\r\n                  type=\"radio\"\r\n                  name=\"marked_quality\"\r\n                  class=\"bigRadio\"\r\n                  [checked]=\"radioBtnMarkedStatusSelection === markedStatusEnum.MARKED\"\r\n                  (change)=\"radioBtnMarkedStatusSelected(markedStatusEnum.MARKED)\">\r\n                Korralik märgistus\r\n              </h2>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <img src=\"assets/img/attention.png\" alt=\"\">\r\n          <div class=\"radio option2\" style=\"font-size: 33px\">\r\n            <label>\r\n              <h2>\r\n                <input\r\n                  type=\"radio\"\r\n                  name=\"marked_quality\"\r\n                  class=\"bigRadio\"\r\n                  [checked]=\"radioBtnMarkedStatusSelection === markedStatusEnum.ATTENTION\"\r\n                  (change)=\"radioBtnMarkedStatusSelected(markedStatusEnum.ATTENTION)\">\r\n                Märgistusega on probleeme. <br>\r\n\r\n              </h2>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <img src=\"assets/img/unmarked.png\" alt=\"\">\r\n          <div class=\"radio option2\">\r\n            <label>\r\n              <h2>\r\n                <input\r\n                  type=\"radio\"\r\n                  name=\"marked_quality\"\r\n                  class=\"bigRadio\"\r\n                  [checked]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n                  (change)=\"radioBtnMarkedStatusSelected(markedStatusEnum.UNMARKED)\">\r\n                Ei ole märgistatud\r\n              </h2>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr style=\"margin-top: 10px; margin-bottom: 10px\">\r\n      <div class=\"row\" style=\"font-size: 33px\">\r\n        <div class=\"col-1\"></div>\r\n        <div class=\"col-11\">\r\n          Märksõna:\r\n          <input\r\n            type=\"text\"\r\n            size=\"10\"\r\n            class=\"description\"\r\n            [disabled]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n            [(ngModel)]=\"markedSectionAdditionlInfoText\"\r\n            (ngModelChange)=\"saveMarkedSectionValues()\">\r\n        </div>\r\n      </div>\r\n      <hr style=\"margin-top: 10px; margin-bottom: 0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <div class=\"radio option\" style=\"margin-top: 25px\">\r\n            <label>\r\n              <h2>\r\n                <input type=\"radio\" name=\"when_marked\"\r\n                       class=\"bigRadio\"\r\n                       [disabled]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n                       (change)=\"radioBtnMarkedTimeSelected(actionTimeEnum.UNKNOWN)\"\r\n                       [checked]=\"radioBtnMarkedTimeSelection === actionTimeEnum.UNKNOWN\">\r\n                &nbsp;Teadmata millal märgistatud\r\n              </h2>\r\n            </label>\r\n          </div>\r\n          <div style=\"margin-top: 37px\">\r\n            <div>\r\n              <label class=\"option-row\">\r\n                <input type=\"radio\"\r\n                       name=\"when_marked\"\r\n                       class=\"bigRadio\"\r\n                       [disabled]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n                       (change)=\"radioBtnMarkedTimeSelected(actionTimeEnum.PAST_DATE)\"\r\n                       [checked]=\"radioBtnMarkedTimeSelection === actionTimeEnum.PAST_DATE\">\r\n                <h2>&nbsp;Märgistatud:</h2>\r\n                <select\r\n                  name=\"month_marked\"\r\n                  class=\"custom-select\"\r\n                  size=\"1\"\r\n                  [disabled]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n                  [(ngModel)]=\"markedTimeMonthValue\"\r\n                  (change)=\"radioBtnMarkedTimeSelected(actionTimeEnum.PAST_DATE)\">\r\n                  <option value=\"\">Kuu</option>\r\n                  <option value=\"0\">Jaanuar</option>\r\n                  <option value=\"1\">Veebruar</option>\r\n                  <option value=\"2\">Märts</option>\r\n                  <option value=\"3\">Aprill</option>\r\n                  <option value=\"4\">Mai</option>\r\n                  <option value=\"5\">Juuni</option>\r\n                  <option value=\"6\">Juuli</option>\r\n                  <option value=\"7\">August</option>\r\n                  <option value=\"8\">September</option>\r\n                  <option value=\"9\">Oktoober</option>\r\n                  <option value=\"10\">November</option>\r\n                  <option value=\"11\">Detsember</option>\r\n                </select>\r\n                <select\r\n                  name=\"year_marked\"\r\n                  class=\"custom-select\"\r\n                  size=\"1\"\r\n                  [disabled]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n                  [(ngModel)]=\"markedTimeYearValue\"\r\n                  (change)=\"radioBtnMarkedTimeSelected(actionTimeEnum.PAST_DATE)\">\r\n                  <option value=\"\" disabled hidden>Aasta</option>\r\n                  <option value=\"2017\">2017</option>\r\n                  <option value=\"2018\">2018</option>\r\n                  <option value=\"2019\">2019</option>\r\n                  <option value=\"2020\">2020</option>\r\n                  <option value=\"2021\">2021</option>\r\n                </select>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</jw-modal>\r\n\r\n\r\n<jw-modal id=\"mother-birthday-edit\" [smallModal]=\"true\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Millal on see ema koorunud?\r\n        </h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseWhenMotherBirthdayEditButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-5\">\r\n        <img src=\"assets/img/synnip2evOk.png\" alt=\"\">\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <div class=\"radio option\" style=\"margin-top: 25px\">\r\n          <label>\r\n            <h2>\r\n              <input type=\"radio\" name=\"birthday\"\r\n                     class=\"bigRadio\"\r\n                     (change)=\"radioBtnBirthdayTimeSelected(actionTimeEnum.UNKNOWN)\"\r\n                     [checked]=\"radioBtnBirthdayTimeSelection === actionTimeEnum.UNKNOWN\">\r\n              &nbsp;Teadmata millal koorunud\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div>\r\n          <label class=\"option-row\">\r\n            <input type=\"radio\"\r\n                   name=\"birthday\"\r\n                   class=\"bigRadio\"\r\n                   (change)=\"radioBtnBirthdayTimeSelected(actionTimeEnum.PAST_DATE)\"\r\n                   [checked]=\"radioBtnBirthdayTimeSelection === actionTimeEnum.PAST_DATE\">\r\n            <select\r\n              name=\"month_marked\"\r\n              class=\"custom-select\"\r\n              size=\"1\"\r\n              style=\"width: 200px\"\r\n              [(ngModel)]=\"birthdayTimeMonthValue\"\r\n              (ngModelChange)=\"radioBtnBirthdayTimeSelected(actionTimeEnum.PAST_DATE)\">\r\n              <option value=\"\">Kuu</option>\r\n              <option value=\"0\">Jaanuar</option>\r\n              <option value=\"1\">Veebruar</option>\r\n              <option value=\"2\">Märts</option>\r\n              <option value=\"3\">Aprill</option>\r\n              <option value=\"4\">Mai</option>\r\n              <option value=\"5\">Juuni</option>\r\n              <option value=\"6\">Juuli</option>\r\n              <option value=\"7\">August</option>\r\n              <option value=\"8\">September</option>\r\n              <option value=\"9\">Oktoober</option>\r\n              <option value=\"10\">November</option>\r\n              <option value=\"11\">Detsember</option>\r\n            </select>\r\n            <select\r\n              name=\"year_marked\"\r\n              class=\"custom-select\"\r\n              size=\"1\"\r\n              [(ngModel)]=\"birthdayTimeYearValue\"\r\n              (ngModelChange)=\"radioBtnBirthdayTimeSelected(actionTimeEnum.PAST_DATE)\">\r\n              <option value=\"\" disabled hidden>Aasta</option>\r\n              <option value=\"2017\">2017</option>\r\n              <option value=\"2018\">2018</option>\r\n              <option value=\"2019\">2019</option>\r\n              <option value=\"2020\">2020</option>\r\n              <option value=\"2021\">2021</option>\r\n            </select>\r\n          </label>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <h2>Selles tarus ei ole veel koorunud ema?</h2>\r\n        </div>\r\n        <div class=\"row option\">\r\n          <h2>Vali teine ema staatus:&nbsp;&nbsp;&nbsp;</h2>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-primary\"\r\n            style=\"width: 200px; height: 80px; margin: 0px\">\r\n            <img\r\n              src=\"assets/img/muuda.png\"\r\n              alt=\"ii\"\r\n              style=\"height: 65px\"\r\n              (click)=\"onChangeMotherStatusButtonClick()\">\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</jw-modal>\r\n"

/***/ }),

/***/ "./src/app/work/mother/in-cage/in-cage.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/work/mother/in-cage/in-cage.component.ts ***!
  \**********************************************************/
/*! exports provided: InCageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InCageComponent", function() { return InCageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/jw-modal/jw-modal.service */ "./src/app/util/jw-modal/jw-modal.service.ts");
/* harmony import */ var _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mom-status.enum */ "./src/app/work/mother/mom-status.enum.ts");
/* harmony import */ var _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../settings/shared/hive.model */ "./src/app/settings/shared/hive.model.ts");
/* harmony import */ var _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../marked-status.enum */ "./src/app/work/mother/marked-status.enum.ts");
/* harmony import */ var _action_time_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../action-time.enum */ "./src/app/work/mother/action-time.enum.ts");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../util/util.service */ "./src/app/util/util.service.ts");
/* harmony import */ var _mom_attributes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mom-attributes.service */ "./src/app/work/mother/mom-attributes.service.ts");
/* harmony import */ var _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../settings/shared/colonies.service */ "./src/app/settings/shared/colonies.service.ts");
/* harmony import */ var _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../util/executor/executor.service */ "./src/app/util/executor/executor.service.ts");
/* harmony import */ var _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../util/executor/controls-protection-id.enum */ "./src/app/util/executor/controls-protection-id.enum.ts");












var InCageComponent = /** @class */ (function () {
    function InCageComponent(modalService, momAttributesService, coloniesService, executorService) {
        this.modalService = modalService;
        this.momAttributesService = momAttributesService;
        this.coloniesService = coloniesService;
        this.executorService = executorService;
        this.onChangeMomStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.momStatusEnum = _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"];
        this.markedStatusEnum = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"];
        this.actionTimeEnum = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"];
        this.momStatusInitialValueText = null;
        this.radioBtnStatusPastDateInputValue = null;
        this.markedTimeMonthValue = '';
        this.markedTimeYearValue = '';
        this.birthdayTimeMonthValue = '';
        this.birthdayTimeYearValue = '';
    }
    InCageComponent.prototype.ngOnChanges = function () {
        this.currentlyChosenHiveInitialData = this.coloniesService.getInitialHiveData(this.currentlyChosenHive);
        this.setMotherStatusSectionValuesCorrect();
        this.setMarkedSectionValuesCorrect();
        this.setBirthdaySectionValuesCorrect();
    };
    InCageComponent.prototype.setMotherStatusSectionValuesCorrect = function () {
        this.momStatusInitialValueText = null;
        var daysFromStatusBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHive.momAttributes.statusStartingDate);
        if (daysFromStatusBeginning == 0) {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].TODAY;
            this.momStatusSectionTimeText = 'täna';
            this.radioBtnStatusPastDateInputValue = null;
        }
        else if (daysFromStatusBeginning == 1) {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE;
            this.momStatusSectionTimeText = '1 päev tagasi';
            this.radioBtnStatusPastDateInputValue = 1;
        }
        else {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE;
            this.momStatusSectionTimeText = daysFromStatusBeginning + ' päeva tagasi';
            this.radioBtnStatusPastDateInputValue = daysFromStatusBeginning;
        }
        if (this.currentlyChosenHiveInitialData &&
            this.currentlyChosenHiveInitialData.momAttributes.momStatus === _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].IN_CAGE) {
            var daysFromInitialStatusBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHiveInitialData.momAttributes.statusStartingDate);
            if (daysFromInitialStatusBeginning == 0) {
                return;
            }
            else if (daysFromInitialStatusBeginning == 1) {
                this.momStatusInitialValueText = daysFromInitialStatusBeginning + ' päev tagasi';
            }
            else {
                this.momStatusInitialValueText = daysFromInitialStatusBeginning + ' päeva tagasi';
            }
        }
    };
    InCageComponent.prototype.saveMotherStatusSectionValues = function (setToToday) {
        if (setToToday) {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].TODAY;
        }
        if (this.radioBtnMomStatusSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].TODAY) {
            this.currentlyChosenHive.momAttributes.statusStartingDate = new Date();
        }
        else if (this.radioBtnMomStatusSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE) {
            this.currentlyChosenHive.momAttributes.statusStartingDate =
                new Date(new Date().setHours(0, 0, 0, 0) -
                    +this.radioBtnStatusPastDateInputValue * 24 * 60 * 60 * 1000);
        }
        else if (this.radioBtnMomStatusSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].INITIAL_DATE) {
            this.currentlyChosenHive.momAttributes.statusStartingDate =
                this.currentlyChosenHiveInitialData.momAttributes.statusStartingDate;
        }
        this.executorService.exeWithTimer(this.momAttributesService.onUpdateMomAttributes, [this.currentlyChosenHive], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_11__["ControlsProtectionIdEnum"].MOM);
        this.setMotherStatusSectionValuesCorrect();
    };
    InCageComponent.prototype.setMarkedSectionValuesCorrect = function () {
        this.markedSectionAdditionlInfoText = this.currentlyChosenHive.momAttributes.markedDescription;
        if (this.currentlyChosenHive.momAttributes.markedStatus == _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].MARKED) {
            this.radioBtnMarkedStatusSelection = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].MARKED;
        }
        else if (this.currentlyChosenHive.momAttributes.markedStatus == _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].ATTENTION) {
            this.radioBtnMarkedStatusSelection = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].ATTENTION;
        }
        else if (this.currentlyChosenHive.momAttributes.markedStatus == _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].UNMARKED) {
            this.radioBtnMarkedStatusSelection = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].UNMARKED;
            this.radioBtnMarkedTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN;
        }
        if (this.currentlyChosenHive.momAttributes.markedDate) {
            this.radioBtnMarkedTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE;
            var markedDate = new Date(this.currentlyChosenHive.momAttributes.markedDate);
            this.markedTimeYearValue = markedDate.getFullYear().toString();
            if (this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet) {
                this.markedTimeMonthValue = markedDate.getMonth().toString();
            }
            else {
                this.markedTimeMonthValue = '';
            }
        }
        else {
            this.radioBtnMarkedTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN;
            this.markedTimeMonthValue = '';
            this.markedTimeYearValue = '';
        }
    };
    InCageComponent.prototype.saveMarkedSectionValues = function () {
        if (this.radioBtnMarkedStatusSelection === _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].MARKED) {
            this.currentlyChosenHive.momAttributes.markedStatus = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].MARKED;
            this.currentlyChosenHive.momAttributes.markedDescription = this.markedSectionAdditionlInfoText;
            if (this.radioBtnMarkedTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN) {
                this.currentlyChosenHive.momAttributes.markedDate = null;
            }
            else if (this.radioBtnMarkedTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE) {
                this.currentlyChosenHive.momAttributes.markedDate = new Date();
                this.currentlyChosenHive.momAttributes.markedDate.setFullYear(+this.markedTimeYearValue);
                if (this.markedTimeMonthValue === '') {
                    this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = false;
                }
                else {
                    this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = true;
                    this.currentlyChosenHive.momAttributes.markedDate.setMonth(+this.markedTimeMonthValue);
                }
            }
        }
        else if (this.radioBtnMarkedStatusSelection === _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].ATTENTION) {
            this.currentlyChosenHive.momAttributes.markedStatus = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].ATTENTION;
            this.currentlyChosenHive.momAttributes.markedDescription = this.markedSectionAdditionlInfoText;
            if (this.radioBtnMarkedTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN) {
                this.currentlyChosenHive.momAttributes.markedDate = null;
            }
            else if (this.radioBtnMarkedTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE) {
                this.currentlyChosenHive.momAttributes.markedDate = new Date();
                this.currentlyChosenHive.momAttributes.markedDate.setFullYear(+this.markedTimeYearValue);
                if (this.markedTimeMonthValue === '') {
                    this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = false;
                }
                else {
                    this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = true;
                    this.currentlyChosenHive.momAttributes.markedDate.setMonth(+this.markedTimeMonthValue);
                }
            }
        }
        else if (this.radioBtnMarkedStatusSelection === _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].UNMARKED) {
            this.currentlyChosenHive.momAttributes.markedStatus = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].UNMARKED;
            this.currentlyChosenHive.momAttributes.markedDescription = '';
            this.currentlyChosenHive.momAttributes.markedDate = null;
            this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = false;
        }
        this.executorService.exeWithTimer(this.momAttributesService.onUpdateMomAttributes, [this.currentlyChosenHive], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_11__["ControlsProtectionIdEnum"].MOM);
        this.setMarkedSectionValuesCorrect();
    };
    InCageComponent.prototype.setBirthdaySectionValuesCorrect = function () {
        if (this.currentlyChosenHive.momAttributes.birthday) {
            this.radioBtnBirthdayTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE;
            var birthday = new Date(this.currentlyChosenHive.momAttributes.birthday);
            this.birthdayTimeYearValue = birthday.getFullYear().toString();
            if (this.currentlyChosenHive.momAttributes.isBirthdayDateMonthSet) {
                this.birthdayTimeMonthValue = birthday.getMonth().toString();
            }
            else {
                this.birthdayTimeMonthValue = '';
            }
        }
        else {
            this.radioBtnBirthdayTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN;
            this.birthdayTimeMonthValue = '';
            this.birthdayTimeYearValue = '';
        }
    };
    InCageComponent.prototype.saveBirthdaySectionValues = function () {
        if (this.radioBtnBirthdayTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN) {
            this.currentlyChosenHive.momAttributes.birthday = null;
            this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = false;
        }
        else if (this.radioBtnBirthdayTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE) {
            this.currentlyChosenHive.momAttributes.birthday = new Date();
            this.currentlyChosenHive.momAttributes.birthday.setFullYear(+this.birthdayTimeYearValue);
            if (!this.birthdayTimeMonthValue) {
                this.currentlyChosenHive.momAttributes.isBirthdayDateMonthSet = false;
            }
            else {
                this.currentlyChosenHive.momAttributes.isBirthdayDateMonthSet = true;
                this.currentlyChosenHive.momAttributes.birthday.setMonth(+this.birthdayTimeMonthValue);
            }
        }
        this.executorService.exeWithTimer(this.momAttributesService.onUpdateMomAttributes, [this.currentlyChosenHive], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_11__["ControlsProtectionIdEnum"].MOM);
        this.setBirthdaySectionValuesCorrect();
    };
    InCageComponent.prototype.radioBtnMomStatusSelected = function (selectedActionTime) {
        this.radioBtnMomStatusSelection = selectedActionTime;
        this.saveMotherStatusSectionValues();
    };
    InCageComponent.prototype.radioBtnMarkedStatusSelected = function (markedStatusSelected) {
        this.radioBtnMarkedStatusSelection = markedStatusSelected;
        if (markedStatusSelected === _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].UNMARKED) {
            this.radioBtnMarkedTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN;
            this.markedSectionAdditionlInfoText = '';
        }
        this.saveMarkedSectionValues();
    };
    InCageComponent.prototype.radioBtnMarkedTimeSelected = function (selectedActionTime) {
        if (selectedActionTime === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE && !this.markedTimeYearValue) {
            this.markedTimeYearValue = '2019';
        }
        this.radioBtnMarkedTimeSelection = selectedActionTime;
        this.saveMarkedSectionValues();
    };
    InCageComponent.prototype.radioBtnBirthdayTimeSelected = function (selectedActionTime) {
        if (selectedActionTime === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE && !this.birthdayTimeYearValue) {
            this.birthdayTimeYearValue = '2019';
        }
        this.radioBtnBirthdayTimeSelection = selectedActionTime;
        this.saveBirthdaySectionValues();
    };
    InCageComponent.prototype.onChangeMotherStatusButtonClick = function (newMotherStatus) {
        this.modalService.close('mother-in-cage-edit');
        this.modalService.close('mother-birthday-edit');
        this.onChangeMomStatus.emit(newMotherStatus);
    };
    InCageComponent.prototype.onOpenMomStatusSectionEditButton = function () {
        this.modalService.open('mother-in-cage-edit');
    };
    InCageComponent.prototype.onCloseMomStatusSectionEditButton = function () {
        this.setMotherStatusSectionValuesCorrect();
        this.modalService.close('mother-in-cage-edit');
    };
    InCageComponent.prototype.onOpenWhenMotherMarkedEditButton = function () {
        this.modalService.open('mother-marked-edit');
    };
    InCageComponent.prototype.onCloseWhenMotherMarkedEditButton = function () {
        this.modalService.close('mother-marked-edit');
    };
    InCageComponent.prototype.onOpenWhenMotherBirthdayEditButton = function () {
        this.modalService.open('mother-birthday-edit');
    };
    InCageComponent.prototype.onCloseWhenMotherBirthdayEditButton = function () {
        this.modalService.close('mother-birthday-edit');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_4__["Hive"])
    ], InCageComponent.prototype, "currentlyChosenHive", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InCageComponent.prototype, "onChangeMomStatus", void 0);
    InCageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-in-cage',
            template: __webpack_require__(/*! ./in-cage.component.html */ "./src/app/work/mother/in-cage/in-cage.component.html"),
            styles: [__webpack_require__(/*! ./in-cage.component.css */ "./src/app/work/mother/in-cage/in-cage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_2__["JwModalService"],
            _mom_attributes_service__WEBPACK_IMPORTED_MODULE_8__["MomAttributesService"],
            _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_9__["ColoniesService"],
            _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_10__["ExecutorService"]])
    ], InCageComponent);
    return InCageComponent;
}());



/***/ }),

/***/ "./src/app/work/mother/log.model.ts":
/*!******************************************!*\
  !*** ./src/app/work/mother/log.model.ts ***!
  \******************************************/
/*! exports provided: Log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return Log; });
var Log = /** @class */ (function () {
    function Log(text) {
        this.text = text;
    }
    return Log;
}());



/***/ }),

/***/ "./src/app/work/mother/marked-status.enum.ts":
/*!***************************************************!*\
  !*** ./src/app/work/mother/marked-status.enum.ts ***!
  \***************************************************/
/*! exports provided: MarkedStatusEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkedStatusEnum", function() { return MarkedStatusEnum; });
var MarkedStatusEnum;
(function (MarkedStatusEnum) {
    MarkedStatusEnum["MARKED"] = "MARKED";
    MarkedStatusEnum["UNMARKED"] = "UNMARKED";
    MarkedStatusEnum["ATTENTION"] = "ATTENTION";
})(MarkedStatusEnum || (MarkedStatusEnum = {}));


/***/ }),

/***/ "./src/app/work/mother/missing/missing.component.css":
/*!***********************************************************!*\
  !*** ./src/app/work/mother/missing/missing.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  max-height: 80px;\r\n  max-width: 180px;\r\n}\r\n\r\nimg.x {\r\n  height: 40px;\r\n}\r\n\r\n.card-body {\r\n  padding: 10px;\r\n}\r\n\r\nh3.time-text {\r\n  margin-top: -10px;\r\n  margin-bottom: 0;\r\n  max-width: 214px;\r\n}\r\n\r\nbutton.change-mother-status-button {\r\n  width: 180px;\r\n  height: 80px;\r\n  margin: 0;\r\n}\r\n\r\ndiv.pictures-column {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n\r\np.marked-date-description {\r\n  font-size: 31px;\r\n  margin-top: -10px;\r\n}\r\n\r\nbutton.closing {\r\n  display: inline-block;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  padding: 2px 2px 2px 2px;\r\n  margin: 0;\r\n  margin-right: 10px;\r\n}\r\n\r\ndiv.option {\r\n  margin-top: 50px;\r\n}\r\n\r\ndiv.option2 {\r\n  margin-top: 20px;\r\n}\r\n\r\ndiv.twoButtons {\r\n  margin-top: 200px;\r\n}\r\n\r\ninput.bigRadio {\r\n  width: 35px;\r\n  height: 35px\r\n}\r\n\r\n.up-bar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\ninput.num {\r\n  width: 70px;\r\n  height: 35px\r\n}\r\n\r\ninput.description {\r\n  width: 170px;\r\n  height: 35px\r\n}\r\n\r\nimg.pencil {\r\n  height: 40px;\r\n}\r\n\r\nbutton {\r\n  height: 60px;\r\n  width: 60px;\r\n  margin-top: 20px;\r\n  margin-left: 9px;\r\n}\r\n\r\n.custom-select {\r\n  display: inline;\r\n  width: 150px;\r\n  font-size: 28px;\r\n  margin-left: 18px;\r\n}\r\n\r\n.option-row {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n\r\nbutton.first-from-top-button {\r\n  height: 115px;\r\n  width: 60px;\r\n  margin: 0;\r\n  margin-left: 9px\r\n}\r\n\r\nbutton.second-from-top-button {\r\n  margin-top: 30px;\r\n}\r\n\r\nbutton.third-from-top-button {\r\n  margin-top: 65px;\r\n}\r\n\r\nbutton.fourth-from-top-button {\r\n  margin-top: 75px;\r\n}\r\n\r\nbutton.fifth-from-top-button {\r\n  margin-top: 100px;\r\n}\r\n\r\ndiv.marked-image-block {\r\n  margin-top: 30px;\r\n  height: 156px;\r\n}\r\n\r\ndiv.second-image-block {\r\n  margin-top: 30px;\r\n  height: 110px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9tb3RoZXIvbWlzc2luZy9taXNzaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLFVBQVU7Q0FDWDs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFvQjtFQUFwQix5QkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0Isb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGFBQWE7RUFDYixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztDQUNmOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL3dvcmsvbW90aGVyL21pc3NpbmcvbWlzc2luZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICBtYXgtaGVpZ2h0OiA4MHB4O1xyXG4gIG1heC13aWR0aDogMTgwcHg7XHJcbn1cclxuXHJcbmltZy54IHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmgzLnRpbWUtdGV4dCB7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBtYXgtd2lkdGg6IDIxNHB4O1xyXG59XHJcblxyXG5idXR0b24uY2hhbmdlLW1vdGhlci1zdGF0dXMtYnV0dG9uIHtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuZGl2LnBpY3R1cmVzLWNvbHVtbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbnAubWFya2VkLWRhdGUtZGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMzFweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuYnV0dG9uLmNsb3Npbmcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuZGl2Lm9wdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuZGl2Lm9wdGlvbjIge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmRpdi50d29CdXR0b25zIHtcclxuICBtYXJnaW4tdG9wOiAyMDBweDtcclxufVxyXG5cclxuaW5wdXQuYmlnUmFkaW8ge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweFxyXG59XHJcblxyXG4udXAtYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dC5udW0ge1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogMzVweFxyXG59XHJcblxyXG5pbnB1dC5kZXNjcmlwdGlvbiB7XHJcbiAgd2lkdGg6IDE3MHB4O1xyXG4gIGhlaWdodDogMzVweFxyXG59XHJcblxyXG5pbWcucGVuY2lsIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDlweDtcclxufVxyXG5cclxuLmN1c3RvbS1zZWxlY3Qge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG59XHJcblxyXG4ub3B0aW9uLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5maXJzdC1mcm9tLXRvcC1idXR0b24ge1xyXG4gIGhlaWdodDogMTE1cHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiA5cHhcclxufVxyXG5cclxuYnV0dG9uLnNlY29uZC1mcm9tLXRvcC1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbi50aGlyZC1mcm9tLXRvcC1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDY1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5mb3VydGgtZnJvbS10b3AtYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG59XHJcblxyXG5idXR0b24uZmlmdGgtZnJvbS10b3AtYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuZGl2Lm1hcmtlZC1pbWFnZS1ibG9jayB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBoZWlnaHQ6IDE1NnB4O1xyXG59XHJcblxyXG5kaXYuc2Vjb25kLWltYWdlLWJsb2NrIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGhlaWdodDogMTEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/work/mother/missing/missing.component.html":
/*!************************************************************!*\
  !*** ./src/app/work/mother/missing/missing.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-8.5 pictures-column\">\r\n      <div\r\n        class=\"card bg-light\"\r\n        style=\"max-width: 16rem; height: 719px; margin-left:auto;margin-right:auto;text-align:center\">\r\n        <div class=\"card-header\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-primary change-mother-status-button\">\r\n            <img\r\n              src=\"assets/img/muuda.png\"\r\n              alt=\"ii\"\r\n              style=\"height: 65px\"\r\n              (click)=\"onChangeMotherStatusButtonClick(null)\">\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"card-body\" style=\"background-color: white\">\r\n\r\n\r\n          <img\r\n            src=\"assets/img/kadunud.jpg\" alt=\"ii\">\r\n          <h3 class=\"time-text\">{{ momStatusSectionTimeText }}</h3>\r\n\r\n\r\n          <div\r\n            *ngIf=\"!currentlyChosenHive.momAttributes.controlFrameStartDate\"\r\n            class=\"second-image-block\">\r\n            <img\r\n              src=\"assets/img/controlFrameNot.png\" alt=\"ii\"\r\n              style=\"margin-top: 7px\">\r\n            <h3 class=\"time-text\">{{ controlFrameSectionTimeText }}</h3>\r\n          </div>\r\n          <div\r\n            *ngIf=\"currentlyChosenHive.momAttributes.controlFrameStartDate\"\r\n            class=\"second-image-block\">\r\n            <img\r\n              src=\"assets/img/controlFrameOk.png\" alt=\"ii\"\r\n              style=\"margin-top: 7px\">\r\n            <h3 class=\"time-text\">{{ controlFrameSectionTimeText }}</h3>\r\n          </div>\r\n\r\n\r\n          <div\r\n            *ngIf=\"currentlyChosenHive.momAttributes.controlFrameStartDate &&\r\n                        !currentlyChosenHive.momAttributes.cocoonChosenDate\"\r\n            class=\"second-image-block\">\r\n            <img\r\n              src=\"assets/img/cocoonNot.png\" alt=\"ii\"\r\n              style=\"margin-top: 7px\">\r\n            <h3 class=\"time-text\">{{ cocoonSectionTimeText }}</h3>\r\n          </div>\r\n          <div\r\n            *ngIf=\"currentlyChosenHive.momAttributes.controlFrameStartDate &&\r\n                         currentlyChosenHive.momAttributes.cocoonChosenDate\"\r\n            class=\"second-image-block\">\r\n            <img\r\n              src=\"assets/img/cocoonOk.png\" alt=\"ii\"\r\n              style=\"margin-top: 7px\">\r\n            <h3 class=\"time-text\">{{ cocoonSectionTimeText }}</h3>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-3.5\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary first-from-top-button\"\r\n        (click)=\"onChangeMotherStatusButtonClick(momStatusEnum.HATCHED)\">\r\n        <img\r\n          src=\"assets/img/koorunudEmaVertical.jpg\"\r\n          alt=\"ii\"\r\n          style=\"height: 100px\">\r\n      </button>\r\n      <br>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary second-from-top-button\"\r\n        (click)=\"onOpenMomStatusSectionEditButton()\">\r\n        <img\r\n          src=\"assets/img/muudaNupp.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n      <br>\r\n      <button\r\n        *ngIf=\"!currentlyChosenHive.momAttributes.controlFrameStartDate\"\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-success third-from-top-button\"\r\n        (click)=\"saveControlFrameSectionValues(true)\">\r\n        <img\r\n          src=\"assets/img/check.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n      <button\r\n        *ngIf=\"currentlyChosenHive.momAttributes.controlFrameStartDate\"\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary third-from-top-button\"\r\n        (click)=\"onOpenWhenControlFrameEditButton()\">\r\n        <img\r\n          src=\"assets/img/muudaNupp.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n      <br>\r\n      <button\r\n        *ngIf=\"currentlyChosenHive.momAttributes.controlFrameStartDate &&\r\n                !currentlyChosenHive.momAttributes.cocoonChosenDate\"\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-success fourth-from-top-button\"\r\n        (click)=\"saveCocoonSectionValues(true)\">\r\n        <img\r\n          src=\"assets/img/check.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n      <button\r\n        *ngIf=\"currentlyChosenHive.momAttributes.controlFrameStartDate &&\r\n                currentlyChosenHive.momAttributes.cocoonChosenDate\"\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary fourth-from-top-button\"\r\n        (click)=\"onOpenWhenCocoonEditButton()\">\r\n        <img\r\n          src=\"assets/img/muudaNupp.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<jw-modal id=\"mother-missing-edit\" style=\"max-width: 50rem; height: 45rem\" [smallModal]=\"true\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Mis ajast on ema tarust kadunud?</h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseMomStatusSectionEditButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-4\">\r\n        <img src=\"assets/img/kadunud.jpg\" alt=\"\">\r\n        <br>\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"missing\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnMomStatusSelection === actionTimeEnum.TODAY\"\r\n                (change)=\"radioBtnMomStatusSelected(actionTimeEnum.TODAY)\">\r\n              Täna\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input type=\"radio\" name=\"missing\"\r\n                     class=\"bigRadio\"\r\n                     [checked]=\"radioBtnMomStatusSelection === actionTimeEnum.PAST_DATE\"\r\n                     (change)=\"radioBtnMomStatusSelected(actionTimeEnum.PAST_DATE)\">\r\n              &nbsp;&nbsp;&nbsp;\r\n              <input\r\n                type=\"number\"\r\n                size=\"3\"\r\n                class=\"num\"\r\n                [(ngModel)]=\"radioBtnStatusPastDateInputValue\"\r\n                (ngModelChange)=\"radioBtnMomStatusSelected(actionTimeEnum.PAST_DATE)\"> päeva tagasi\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div\r\n          *ngIf=\"momStatusInitialValueText\"\r\n          class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input type=\"radio\" name=\"missing\"\r\n                     class=\"bigRadio\"\r\n                     (change)=\"radioBtnMomStatusSelected(actionTimeEnum.INITIAL_DATE)\">\r\n              &nbsp;\r\n              <img src=\"assets/img/tagasi.png\" alt=\"\" style=\"height: 45px\">\r\n              ({{ momStatusInitialValueText }})\r\n            </h2>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-7\">\r\n        <div class=\"row\">\r\n          <h2>Ema staatus ei ole \"tarust kadunud\"?</h2>\r\n        </div>\r\n        <div class=\"row option\">\r\n          <h2>Vali teine ema staatus:&nbsp;&nbsp;&nbsp;</h2>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-primary\"\r\n            style=\"width: 200px; height: 80px; margin: 0px\">\r\n            <img\r\n              src=\"assets/img/muuda.png\"\r\n              alt=\"ii\"\r\n              style=\"height: 65px\"\r\n              (click)=\"onChangeMotherStatusButtonClick()\">\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</jw-modal>\r\n\r\n\r\n<jw-modal id=\"mother-control-frame-edit\" [smallModal]=\"true\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Millal panin praegu peres oleva kontrollraami sisse?\r\n        </h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseWhenControlFrameEditButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-5\">\r\n        <img src=\"assets/img/controlFrameOk.png\" alt=\"\">\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"control_frame\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnControlFrameSelection === actionTimeEnum.TODAY\"\r\n                (change)=\"radioBtnControlFrameSelected(actionTimeEnum.TODAY)\">\r\n              Täna\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"control_frame\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnControlFrameSelection === actionTimeEnum.PAST_DATE\"\r\n                (change)=\"radioBtnControlFrameSelected(actionTimeEnum.PAST_DATE)\">\r\n              &nbsp;&nbsp;&nbsp;\r\n              <input\r\n                type=\"number\"\r\n                size=\"3\"\r\n                class=\"num\"\r\n                [(ngModel)]=\"radioBtnControlFramePastDateInputValue\"\r\n                (ngModelChange)=\"radioBtnControlFrameSelected(actionTimeEnum.PAST_DATE)\">\r\n              päeva tagasi\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div\r\n          *ngIf=\"controlFrameInitialValueText\"\r\n          class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"control_frame\"\r\n                class=\"bigRadio\"\r\n                (change)=\"radioBtnControlFrameSelected(actionTimeEnum.INITIAL_DATE)\">\r\n              &nbsp;\r\n              <img src=\"assets/img/tagasi.png\" alt=\"\" style=\"height: 45px\">\r\n              ({{ controlFrameInitialValueText }})\r\n            </h2>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <img src=\"assets/img/controlFrameNot.png\" alt=\"\">\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"control_frame\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnControlFrameSelection === actionTimeEnum.NO_ACTION\"\r\n                (change)=\"radioBtnControlFrameSelected(actionTimeEnum.NO_ACTION)\">\r\n              Ei ole kontrollraami\r\n            </h2>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</jw-modal>\r\n\r\n\r\n<jw-modal id=\"mother-cocoon-edit\" [smallModal]=\"true\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Mis ajast on välja valitud praegune kontrollraami kupp?\r\n        </h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseWhenCocoonEditButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-5\">\r\n        <img src=\"assets/img/cocoonOk.png\" alt=\"\">\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"cocoon\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnCocoonSelection === actionTimeEnum.TODAY\"\r\n                (change)=\"radioBtnCocoonSelected(actionTimeEnum.TODAY)\">\r\n              Täna\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"cocoon\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnCocoonSelection === actionTimeEnum.PAST_DATE\"\r\n                (change)=\"radioBtnCocoonSelected(actionTimeEnum.PAST_DATE)\">\r\n              &nbsp;&nbsp;&nbsp;\r\n              <input\r\n                type=\"number\"\r\n                size=\"3\"\r\n                class=\"num\"\r\n                [(ngModel)]=\"radioBtnCocoonPastDateInputValue\"\r\n                (ngModelChange)=\"radioBtnCocoonSelected(actionTimeEnum.PAST_DATE)\">\r\n              päeva tagasi\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div\r\n          *ngIf=\"cocoonInitialValueText\"\r\n          class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"cocoon\"\r\n                class=\"bigRadio\"\r\n                (change)=\"radioBtnCocoonSelected(actionTimeEnum.INITIAL_DATE)\">\r\n              &nbsp;\r\n              <img src=\"assets/img/tagasi.png\" alt=\"\" style=\"height: 45px\">\r\n              ({{ cocoonInitialValueText }})\r\n            </h2>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <img src=\"assets/img/cocoonNot.png\" alt=\"\">\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"cocoon\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnCocoonSelection === actionTimeEnum.NO_ACTION\"\r\n                (change)=\"radioBtnCocoonSelected(actionTimeEnum.NO_ACTION)\">\r\n              Ei ole kontrollraami\r\n            </h2>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</jw-modal>\r\n"

/***/ }),

/***/ "./src/app/work/mother/missing/missing.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/work/mother/missing/missing.component.ts ***!
  \**********************************************************/
/*! exports provided: MissingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingComponent", function() { return MissingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/jw-modal/jw-modal.service */ "./src/app/util/jw-modal/jw-modal.service.ts");
/* harmony import */ var _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mom-status.enum */ "./src/app/work/mother/mom-status.enum.ts");
/* harmony import */ var _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../settings/shared/hive.model */ "./src/app/settings/shared/hive.model.ts");
/* harmony import */ var _action_time_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action-time.enum */ "./src/app/work/mother/action-time.enum.ts");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/util.service */ "./src/app/util/util.service.ts");
/* harmony import */ var _mom_attributes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mom-attributes.service */ "./src/app/work/mother/mom-attributes.service.ts");
/* harmony import */ var _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../settings/shared/colonies.service */ "./src/app/settings/shared/colonies.service.ts");
/* harmony import */ var _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/executor/executor.service */ "./src/app/util/executor/executor.service.ts");
/* harmony import */ var _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../util/executor/controls-protection-id.enum */ "./src/app/util/executor/controls-protection-id.enum.ts");











var MissingComponent = /** @class */ (function () {
    function MissingComponent(modalService, momAttributesService, coloniesService, executorService) {
        this.modalService = modalService;
        this.momAttributesService = momAttributesService;
        this.coloniesService = coloniesService;
        this.executorService = executorService;
        this.onChangeMomStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.momStatusEnum = _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"];
        this.actionTimeEnum = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"];
        this.momStatusInitialValueText = null;
        this.radioBtnStatusPastDateInputValue = null;
        this.controlFrameInitialValueText = null;
        this.radioBtnControlFramePastDateInputValue = null;
        this.cocoonInitialValueText = null;
        this.radioBtnCocoonPastDateInputValue = null;
    }
    MissingComponent.prototype.ngOnChanges = function () {
        this.currentlyChosenHiveInitialData = this.coloniesService.getInitialHiveData(this.currentlyChosenHive);
        this.setMotherStatusSectionValuesCorrect();
        this.setControlFrameSectionValuesCorrect();
        this.setCocoonSectionValuesCorrect();
    };
    MissingComponent.prototype.saveMotherStatusSectionValues = function (setToToday) {
        if (setToToday) {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].TODAY;
        }
        if (this.radioBtnMomStatusSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].TODAY) {
            this.currentlyChosenHive.momAttributes.statusStartingDate = new Date();
        }
        else if (this.radioBtnMomStatusSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].PAST_DATE) {
            this.currentlyChosenHive.momAttributes.statusStartingDate =
                new Date(new Date().setHours(0, 0, 0, 0) -
                    +this.radioBtnStatusPastDateInputValue * 24 * 60 * 60 * 1000);
        }
        else if (this.radioBtnMomStatusSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].INITIAL_DATE) {
            this.currentlyChosenHive.momAttributes.statusStartingDate =
                this.currentlyChosenHiveInitialData.momAttributes.statusStartingDate;
        }
        this.executorService.exeWithTimer(this.momAttributesService.onUpdateMomAttributes, [this.currentlyChosenHive], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_10__["ControlsProtectionIdEnum"].MOM);
        this.setMotherStatusSectionValuesCorrect();
    };
    MissingComponent.prototype.setMotherStatusSectionValuesCorrect = function () {
        this.momStatusInitialValueText = null;
        var daysFromStatusBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHive.momAttributes.statusStartingDate);
        if (daysFromStatusBeginning == 0) {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].TODAY;
            this.momStatusSectionTimeText = 'täna';
            this.radioBtnStatusPastDateInputValue = null;
        }
        else if (daysFromStatusBeginning == 1) {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].PAST_DATE;
            this.momStatusSectionTimeText = '1 päev tagasi';
            this.radioBtnStatusPastDateInputValue = 1;
        }
        else {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].PAST_DATE;
            this.momStatusSectionTimeText = daysFromStatusBeginning + ' päeva tagasi';
            this.radioBtnStatusPastDateInputValue = daysFromStatusBeginning;
        }
        if (this.currentlyChosenHiveInitialData &&
            this.currentlyChosenHiveInitialData.momAttributes.momStatus === _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].MISSING) {
            var daysFromInitialStatusBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHiveInitialData.momAttributes.statusStartingDate);
            if (daysFromStatusBeginning != daysFromInitialStatusBeginning) {
                if (daysFromInitialStatusBeginning == 0) {
                    return;
                }
                else if (daysFromInitialStatusBeginning == 1) {
                    this.momStatusInitialValueText = daysFromInitialStatusBeginning + ' päev tagasi';
                }
                else {
                    this.momStatusInitialValueText = daysFromInitialStatusBeginning + ' päeva tagasi';
                }
            }
        }
    };
    MissingComponent.prototype.saveControlFrameSectionValues = function (setToToday) {
        if (setToToday) {
            this.radioBtnControlFrameSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].TODAY;
        }
        if (this.radioBtnControlFrameSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].TODAY) {
            this.currentlyChosenHive.momAttributes.controlFrameStartDate = new Date();
        }
        else if (this.radioBtnControlFrameSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].PAST_DATE) {
            this.currentlyChosenHive.momAttributes.controlFrameStartDate =
                new Date(new Date().setHours(0, 0, 0, 0) -
                    +this.radioBtnControlFramePastDateInputValue * 24 * 60 * 60 * 1000);
        }
        else if (this.radioBtnControlFrameSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].INITIAL_DATE) {
            this.currentlyChosenHive.momAttributes.controlFrameStartDate =
                this.currentlyChosenHiveInitialData.momAttributes.controlFrameStartDate;
        }
        else if (this.radioBtnControlFrameSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].NO_ACTION) {
            this.currentlyChosenHive.momAttributes.controlFrameStartDate = null;
        }
        this.executorService.exeWithTimer(this.momAttributesService.onUpdateMomAttributes, [this.currentlyChosenHive], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_10__["ControlsProtectionIdEnum"].MOM);
        this.setControlFrameSectionValuesCorrect();
    };
    MissingComponent.prototype.setControlFrameSectionValuesCorrect = function () {
        this.controlFrameInitialValueText = null;
        if (this.currentlyChosenHive.momAttributes.controlFrameStartDate) {
            var daysFromControlFrameBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHive.momAttributes.controlFrameStartDate);
            if (daysFromControlFrameBeginning == 0) {
                this.radioBtnControlFrameSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].TODAY;
                this.controlFrameSectionTimeText = 'täna';
                this.radioBtnControlFramePastDateInputValue = null;
            }
            else if (daysFromControlFrameBeginning == 1) {
                this.radioBtnControlFrameSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].PAST_DATE;
                this.controlFrameSectionTimeText = '1 päev tagasi';
                this.radioBtnControlFramePastDateInputValue = 1;
            }
            else {
                this.radioBtnControlFrameSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].PAST_DATE;
                this.controlFrameSectionTimeText = daysFromControlFrameBeginning + ' päeva tagasi';
                this.radioBtnControlFramePastDateInputValue = daysFromControlFrameBeginning;
            }
        }
        else {
            this.radioBtnControlFrameSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].NO_ACTION;
            this.controlFrameSectionTimeText = '';
            this.radioBtnControlFramePastDateInputValue = null;
        }
        if (this.currentlyChosenHiveInitialData &&
            this.currentlyChosenHiveInitialData.momAttributes.momStatus === _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].MISSING) {
            var daysFromInitialStatusBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHiveInitialData.momAttributes.controlFrameStartDate);
            if (daysFromInitialStatusBeginning == 0 ||
                !this.currentlyChosenHiveInitialData.momAttributes.controlFrameStartDate ||
                this.currentlyChosenHiveInitialData.momAttributes.controlFrameStartDate ==
                    this.currentlyChosenHive.momAttributes.controlFrameStartDate) {
                return;
            }
            else if (daysFromInitialStatusBeginning == 1) {
                this.controlFrameInitialValueText = daysFromInitialStatusBeginning + ' päev tagasi';
            }
            else {
                this.controlFrameInitialValueText = daysFromInitialStatusBeginning + ' päeva tagasi';
            }
        }
    };
    MissingComponent.prototype.saveCocoonSectionValues = function (setToToday) {
        if (setToToday) {
            this.radioBtnCocoonSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].TODAY;
        }
        if (this.radioBtnCocoonSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].TODAY) {
            this.currentlyChosenHive.momAttributes.cocoonChosenDate = new Date();
        }
        else if (this.radioBtnCocoonSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].PAST_DATE) {
            this.currentlyChosenHive.momAttributes.cocoonChosenDate =
                new Date(new Date().setHours(0, 0, 0, 0) -
                    +this.radioBtnCocoonPastDateInputValue * 24 * 60 * 60 * 1000);
        }
        else if (this.radioBtnCocoonSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].INITIAL_DATE) {
            this.currentlyChosenHive.momAttributes.cocoonChosenDate =
                this.currentlyChosenHiveInitialData.momAttributes.cocoonChosenDate;
        }
        else if (this.radioBtnCocoonSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].NO_ACTION) {
            this.currentlyChosenHive.momAttributes.cocoonChosenDate = null;
        }
        this.executorService.exeWithTimer(this.momAttributesService.onUpdateMomAttributes, [this.currentlyChosenHive], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_10__["ControlsProtectionIdEnum"].MOM);
        this.setCocoonSectionValuesCorrect();
    };
    MissingComponent.prototype.setCocoonSectionValuesCorrect = function () {
        this.cocoonInitialValueText = null;
        if (this.currentlyChosenHive.momAttributes.cocoonChosenDate) {
            var daysFromCocoonChosen = _util_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHive.momAttributes.cocoonChosenDate);
            if (daysFromCocoonChosen == 0) {
                this.radioBtnCocoonSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].TODAY;
                this.cocoonSectionTimeText = 'täna';
                this.radioBtnCocoonPastDateInputValue = null;
            }
            else if (daysFromCocoonChosen == 1) {
                this.radioBtnCocoonSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].PAST_DATE;
                this.cocoonSectionTimeText = '1 päev tagasi';
                this.radioBtnCocoonPastDateInputValue = 1;
            }
            else {
                this.radioBtnCocoonSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].PAST_DATE;
                this.cocoonSectionTimeText = daysFromCocoonChosen + ' päeva tagasi';
                this.radioBtnCocoonPastDateInputValue = daysFromCocoonChosen;
            }
        }
        else {
            this.radioBtnCocoonSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].NO_ACTION;
            this.cocoonSectionTimeText = '';
            this.radioBtnCocoonPastDateInputValue = null;
        }
        if (this.currentlyChosenHiveInitialData &&
            this.currentlyChosenHiveInitialData.momAttributes.momStatus === _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].MISSING) {
            var daysFromInitialCocoonBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHiveInitialData.momAttributes.cocoonChosenDate);
            if (daysFromInitialCocoonBeginning == 0 ||
                !this.currentlyChosenHiveInitialData.momAttributes.cocoonChosenDate ||
                this.currentlyChosenHiveInitialData.momAttributes.cocoonChosenDate ==
                    this.currentlyChosenHive.momAttributes.cocoonChosenDate) {
                return;
            }
            else if (daysFromInitialCocoonBeginning == 1) {
                this.cocoonInitialValueText = daysFromInitialCocoonBeginning + ' päev tagasi';
            }
            else {
                this.cocoonInitialValueText = daysFromInitialCocoonBeginning + ' päeva tagasi';
            }
        }
    };
    MissingComponent.prototype.radioBtnMomStatusSelected = function (selectedActionTime) {
        this.radioBtnMomStatusSelection = selectedActionTime;
    };
    MissingComponent.prototype.radioBtnControlFrameSelected = function (selectedActionTime) {
        this.radioBtnControlFrameSelection = selectedActionTime;
        this.saveControlFrameSectionValues();
    };
    MissingComponent.prototype.radioBtnCocoonSelected = function (selectedActionTime) {
        this.radioBtnCocoonSelection = selectedActionTime;
        this.saveCocoonSectionValues();
    };
    MissingComponent.prototype.onChangeMotherStatusButtonClick = function (newMotherStatus) {
        this.modalService.close('mother-missing-edit');
        this.onChangeMomStatus.emit(newMotherStatus);
    };
    MissingComponent.prototype.onOpenMomStatusSectionEditButton = function () {
        this.modalService.open('mother-missing-edit');
    };
    MissingComponent.prototype.onCloseMomStatusSectionEditButton = function () {
        this.setMotherStatusSectionValuesCorrect();
        this.modalService.close('mother-missing-edit');
    };
    MissingComponent.prototype.onOpenWhenControlFrameEditButton = function () {
        this.modalService.open('mother-control-frame-edit');
    };
    MissingComponent.prototype.onCloseWhenControlFrameEditButton = function () {
        this.modalService.close('mother-control-frame-edit');
    };
    MissingComponent.prototype.onOpenWhenCocoonEditButton = function () {
        this.modalService.open('mother-cocoon-edit');
    };
    MissingComponent.prototype.onCloseWhenCocoonEditButton = function () {
        this.modalService.close('mother-cocoon-edit');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_4__["Hive"])
    ], MissingComponent.prototype, "currentlyChosenHive", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MissingComponent.prototype, "onChangeMomStatus", void 0);
    MissingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-missing',
            template: __webpack_require__(/*! ./missing.component.html */ "./src/app/work/mother/missing/missing.component.html"),
            styles: [__webpack_require__(/*! ./missing.component.css */ "./src/app/work/mother/missing/missing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_2__["JwModalService"],
            _mom_attributes_service__WEBPACK_IMPORTED_MODULE_7__["MomAttributesService"],
            _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_8__["ColoniesService"],
            _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_9__["ExecutorService"]])
    ], MissingComponent);
    return MissingComponent;
}());



/***/ }),

/***/ "./src/app/work/mother/mom-attributes.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/work/mother/mom-attributes.service.ts ***!
  \*******************************************************/
/*! exports provided: MomAttributesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomAttributesService", function() { return MomAttributesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mom_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mom-data.service */ "./src/app/work/mother/mom-data.service.ts");
/* harmony import */ var _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mom-status.enum */ "./src/app/work/mother/mom-status.enum.ts");
/* harmony import */ var _util_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/spinner/spinner.service */ "./src/app/util/spinner/spinner.service.ts");
/* harmony import */ var _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../settings/shared/colonies.service */ "./src/app/settings/shared/colonies.service.ts");
/* harmony import */ var _marked_status_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marked-status.enum */ "./src/app/work/mother/marked-status.enum.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var MomAttributesService = /** @class */ (function () {
    function MomAttributesService(momDataService, spinnerService, coloniesService) {
        var _this = this;
        this.momDataService = momDataService;
        this.spinnerService = spinnerService;
        this.coloniesService = coloniesService;
        this.onUpdateMomAttributes = function (hive) {
            _this.momDataService.onEditMomAttributes(hive)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
                .subscribe();
        };
    }
    MomAttributesService_1 = MomAttributesService;
    MomAttributesService.prototype.onUpdateMomStatus = function (hive, newMomStatus) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinnerService.setSpinnerStatus.next(true);
                        MomAttributesService_1.setAppropriateAttributesAfterStatusChangeBecauseOfNewStatus(hive, newMomStatus);
                        return [4 /*yield*/, this.momDataService.onEditMomAttributes(hive)];
                    case 1:
                        _a.sent();
                        this.spinnerService.setSpinnerStatus.next(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    MomAttributesService.prototype.onDeleteFreakLogEntry = function (logEntryToDelete) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinnerService.setSpinnerStatus.next(true);
                        return [4 /*yield*/, this.momDataService.onDeleteFreakLogEntry(logEntryToDelete)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.coloniesService.retrieveColonies()];
                    case 2:
                        _a.sent();
                        this.spinnerService.setSpinnerStatus.next(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    MomAttributesService.prototype.onSaveNewFreakLogEntry = function (hive, logEntryText) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinnerService.setSpinnerStatus.next(true);
                        return [4 /*yield*/, this.momDataService.onSaveNewFreakLogEntry(hive, logEntryText)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.coloniesService.retrieveColonies()];
                    case 2:
                        _a.sent();
                        this.spinnerService.setSpinnerStatus.next(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    MomAttributesService.prototype.onUpdateFreakLogEntry = function (logEntryToUpdate, newlogEntryText) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinnerService.setSpinnerStatus.next(true);
                        return [4 /*yield*/, this.momDataService.onUpdateFreakLogEntry(logEntryToUpdate, newlogEntryText)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.coloniesService.retrieveColonies()];
                    case 2:
                        _a.sent();
                        this.spinnerService.setSpinnerStatus.next(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    MomAttributesService.setAppropriateAttributesAfterStatusChangeBecauseOfNewStatus = function (hive, newMomStatus) {
        switch (newMomStatus) {
            case _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].FREAK: {
                if (hive.momAttributes.momStatus === _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].FREAK) {
                    return;
                }
                hive.momAttributes.momStatus = _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].FREAK;
                hive.momAttributes.statusStartingDate = new Date();
                hive.momAttributes.isLayingEggs = false;
                hive.momAttributes.eggsLastSeen = null;
                hive.momAttributes.markedStatus = _marked_status_enum__WEBPACK_IMPORTED_MODULE_6__["MarkedStatusEnum"].UNMARKED;
                hive.momAttributes.markedDate = null;
                hive.momAttributes.markedDescription = '';
                hive.momAttributes.isBirthdayDateMonthSet = false;
                hive.momAttributes.birthday = null;
                hive.momAttributes.hasControlFrame = false;
                hive.momAttributes.controlFrameStartDate = null;
                hive.momAttributes.isCocoonChosen = false;
                hive.momAttributes.cocoonChosenDate = null;
                break;
            }
            case _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].UNKNOWN: {
                switch (hive.momAttributes.momStatus) {
                    case _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].MISSING:
                    case _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].UNKNOWN: {
                        hive.momAttributes.momStatus = _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].UNKNOWN;
                        return;
                    }
                    default: {
                        hive.momAttributes.momStatus = _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].UNKNOWN;
                        hive.momAttributes.statusStartingDate = new Date();
                        hive.momAttributes.isLayingEggs = false;
                        hive.momAttributes.eggsLastSeen = null;
                        hive.momAttributes.markedStatus = _marked_status_enum__WEBPACK_IMPORTED_MODULE_6__["MarkedStatusEnum"].UNMARKED;
                        hive.momAttributes.markedDate = null;
                        hive.momAttributes.markedDescription = '';
                        hive.momAttributes.isBirthdayDateMonthSet = false;
                        hive.momAttributes.birthday = null;
                        hive.momAttributes.hasControlFrame = false;
                        hive.momAttributes.controlFrameStartDate = null;
                        hive.momAttributes.isCocoonChosen = false;
                        hive.momAttributes.cocoonChosenDate = null;
                        break;
                    }
                }
                break;
            }
            case _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].MISSING: {
                switch (hive.momAttributes.momStatus) {
                    case _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].MISSING:
                    case _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].UNKNOWN: {
                        hive.momAttributes.momStatus = _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].MISSING;
                        return;
                    }
                    default: {
                        hive.momAttributes.momStatus = _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].MISSING;
                        hive.momAttributes.statusStartingDate = new Date();
                        hive.momAttributes.isLayingEggs = false;
                        hive.momAttributes.eggsLastSeen = null;
                        hive.momAttributes.markedStatus = _marked_status_enum__WEBPACK_IMPORTED_MODULE_6__["MarkedStatusEnum"].UNMARKED;
                        hive.momAttributes.markedDate = null;
                        hive.momAttributes.markedDescription = '';
                        hive.momAttributes.isBirthdayDateMonthSet = false;
                        hive.momAttributes.birthday = null;
                        hive.momAttributes.hasControlFrame = false;
                        hive.momAttributes.controlFrameStartDate = null;
                        hive.momAttributes.isCocoonChosen = false;
                        hive.momAttributes.cocoonChosenDate = null;
                        break;
                    }
                }
                break;
            }
            case _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].IN_CAGE: {
                switch (hive.momAttributes.momStatus) {
                    case _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].IN_CAGE: {
                        return;
                    }
                    default: {
                        hive.momAttributes.momStatus = _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].IN_CAGE;
                        hive.momAttributes.statusStartingDate = new Date();
                        hive.momAttributes.isLayingEggs = false;
                        hive.momAttributes.eggsLastSeen = null;
                        hive.momAttributes.markedStatus = _marked_status_enum__WEBPACK_IMPORTED_MODULE_6__["MarkedStatusEnum"].UNMARKED;
                        hive.momAttributes.markedDate = null;
                        hive.momAttributes.markedDescription = '';
                        hive.momAttributes.isBirthdayDateMonthSet = true;
                        hive.momAttributes.birthday = new Date();
                        hive.momAttributes.hasControlFrame = false;
                        hive.momAttributes.controlFrameStartDate = null;
                        hive.momAttributes.isCocoonChosen = false;
                        hive.momAttributes.cocoonChosenDate = null;
                        break;
                    }
                }
                break;
            }
            case _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].UN_CAGED: {
                switch (hive.momAttributes.momStatus) {
                    case _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].SEEN:
                    case _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].UN_CAGED: {
                        hive.momAttributes.momStatus = _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].UN_CAGED;
                        return;
                    }
                    case _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].IN_CAGE: {
                        hive.momAttributes.momStatus = _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].UN_CAGED;
                        hive.momAttributes.statusStartingDate = new Date();
                        hive.momAttributes.isLayingEggs = false;
                        hive.momAttributes.eggsLastSeen = null;
                        hive.momAttributes.hasControlFrame = false;
                        hive.momAttributes.controlFrameStartDate = null;
                        hive.momAttributes.isCocoonChosen = false;
                        hive.momAttributes.cocoonChosenDate = null;
                        break;
                    }
                    default: {
                        hive.momAttributes.momStatus = _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].UN_CAGED;
                        hive.momAttributes.statusStartingDate = new Date();
                        hive.momAttributes.isLayingEggs = false;
                        hive.momAttributes.eggsLastSeen = null;
                        hive.momAttributes.markedStatus = _marked_status_enum__WEBPACK_IMPORTED_MODULE_6__["MarkedStatusEnum"].UNMARKED;
                        hive.momAttributes.markedDate = null;
                        hive.momAttributes.markedDescription = '';
                        hive.momAttributes.isBirthdayDateMonthSet = true;
                        hive.momAttributes.birthday = new Date();
                        hive.momAttributes.hasControlFrame = false;
                        hive.momAttributes.controlFrameStartDate = null;
                        hive.momAttributes.isCocoonChosen = false;
                        hive.momAttributes.cocoonChosenDate = null;
                        break;
                    }
                }
                break;
            }
            case _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].HATCHED: {
                switch (hive.momAttributes.momStatus) {
                    case _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].SEEN:
                    case _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].HATCHED: {
                        hive.momAttributes.momStatus = _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].HATCHED;
                        return;
                    }
                    default: {
                        hive.momAttributes.momStatus = _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].HATCHED;
                        hive.momAttributes.statusStartingDate = new Date();
                        hive.momAttributes.isLayingEggs = false;
                        hive.momAttributes.eggsLastSeen = null;
                        hive.momAttributes.markedStatus = _marked_status_enum__WEBPACK_IMPORTED_MODULE_6__["MarkedStatusEnum"].UNMARKED;
                        hive.momAttributes.markedDate = null;
                        hive.momAttributes.markedDescription = '';
                        hive.momAttributes.isBirthdayDateMonthSet = true;
                        hive.momAttributes.birthday = new Date();
                        hive.momAttributes.hasControlFrame = false;
                        hive.momAttributes.controlFrameStartDate = null;
                        hive.momAttributes.isCocoonChosen = false;
                        hive.momAttributes.cocoonChosenDate = null;
                        break;
                    }
                }
                break;
            }
            case _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].SEEN: {
                switch (hive.momAttributes.momStatus) {
                    case _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].SEEN: {
                        return;
                    }
                    case _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].IN_CAGE:
                    case _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].UN_CAGED:
                    case _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].HATCHED: {
                        hive.momAttributes.momStatus = _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].SEEN;
                        hive.momAttributes.statusStartingDate = new Date();
                        break;
                    }
                    default: {
                        hive.momAttributes.momStatus = _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].SEEN;
                        hive.momAttributes.statusStartingDate = new Date();
                        hive.momAttributes.isLayingEggs = false;
                        hive.momAttributes.eggsLastSeen = null;
                        hive.momAttributes.markedStatus = _marked_status_enum__WEBPACK_IMPORTED_MODULE_6__["MarkedStatusEnum"].UNMARKED;
                        hive.momAttributes.markedDate = null;
                        hive.momAttributes.markedDescription = '';
                        hive.momAttributes.isBirthdayDateMonthSet = true;
                        hive.momAttributes.birthday = new Date();
                        hive.momAttributes.hasControlFrame = false;
                        hive.momAttributes.controlFrameStartDate = null;
                        hive.momAttributes.isCocoonChosen = false;
                        hive.momAttributes.cocoonChosenDate = null;
                        break;
                    }
                }
                break;
            }
        }
    };
    var MomAttributesService_1;
    MomAttributesService = MomAttributesService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mom_data_service__WEBPACK_IMPORTED_MODULE_2__["MomDataService"],
            _util_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"],
            _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_5__["ColoniesService"]])
    ], MomAttributesService);
    return MomAttributesService;
}());



/***/ }),

/***/ "./src/app/work/mother/mom-data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/work/mother/mom-data.service.ts ***!
  \*************************************************/
/*! exports provided: MomDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomDataService", function() { return MomDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/util.service */ "./src/app/util/util.service.ts");




var MomDataService = /** @class */ (function () {
    function MomDataService(httpClient) {
        this.httpClient = httpClient;
    }
    MomDataService.prototype.onEditMomAttributes = function (hive) {
        var URL = _util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].backEndURL + 'api/hive/' + hive.id + '/attributes';
        return this.httpClient.put(URL, hive.momAttributes);
    };
    MomDataService.prototype.onDeleteFreakLogEntry = function (log) {
        var URL = _util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].backEndURL + 'api/hive/freaklog/' + log.id;
        return this.httpClient.delete(URL).toPromise();
    };
    MomDataService.prototype.onSaveNewFreakLogEntry = function (hive, newEntryText) {
        var URL = _util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].backEndURL + 'api/hive/freaklog/' + hive.id;
        return this.httpClient.post(URL, { text: newEntryText }).toPromise();
    };
    MomDataService.prototype.onUpdateFreakLogEntry = function (logEntryToUpdate, newlogEntryText) {
        var URL = _util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].backEndURL + 'api/hive/freaklog/' + logEntryToUpdate.id;
        return this.httpClient.put(URL, { text: newlogEntryText }).toPromise();
    };
    MomDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MomDataService);
    return MomDataService;
}());



/***/ }),

/***/ "./src/app/work/mother/mom-status.enum.ts":
/*!************************************************!*\
  !*** ./src/app/work/mother/mom-status.enum.ts ***!
  \************************************************/
/*! exports provided: MomStatusEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomStatusEnum", function() { return MomStatusEnum; });
var MomStatusEnum;
(function (MomStatusEnum) {
    MomStatusEnum["FREAK"] = "FREAK";
    MomStatusEnum["HATCHED"] = "HATCHED";
    MomStatusEnum["IN_CAGE"] = "IN_CAGE";
    MomStatusEnum["MISSING"] = "MISSING";
    MomStatusEnum["SEEN"] = "SEEN";
    MomStatusEnum["UN_CAGED"] = "UN_CAGED";
    MomStatusEnum["UNKNOWN"] = "UNKNOWN";
})(MomStatusEnum || (MomStatusEnum = {}));


/***/ }),

/***/ "./src/app/work/mother/mother-status-text.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/work/mother/mother-status-text.pipe.ts ***!
  \********************************************************/
/*! exports provided: MotherStatusTextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotherStatusTextPipe", function() { return MotherStatusTextPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mom_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mom-status.enum */ "./src/app/work/mother/mom-status.enum.ts");



var MotherStatusTextPipe = /** @class */ (function () {
    function MotherStatusTextPipe() {
    }
    MotherStatusTextPipe.prototype.transform = function (status, returnClass) {
        switch (status) {
            case _mom_status_enum__WEBPACK_IMPORTED_MODULE_2__["MomStatusEnum"].FREAK: {
                return returnClass ? 'danger' : 'Väärema';
            }
            case _mom_status_enum__WEBPACK_IMPORTED_MODULE_2__["MomStatusEnum"].HATCHED: {
                return returnClass ? '' : 'Koorunud';
            }
            case _mom_status_enum__WEBPACK_IMPORTED_MODULE_2__["MomStatusEnum"].IN_CAGE: {
                return returnClass ? 'warning' : 'Puuriga tarus';
            }
            case _mom_status_enum__WEBPACK_IMPORTED_MODULE_2__["MomStatusEnum"].MISSING: {
                return returnClass ? 'warning' : 'Kadunud';
            }
            case _mom_status_enum__WEBPACK_IMPORTED_MODULE_2__["MomStatusEnum"].SEEN: {
                return returnClass ? '' : 'Nähtud';
            }
            case _mom_status_enum__WEBPACK_IMPORTED_MODULE_2__["MomStatusEnum"].UN_CAGED: {
                return returnClass ? '' : 'Puurist välja lastud';
            }
            case _mom_status_enum__WEBPACK_IMPORTED_MODULE_2__["MomStatusEnum"].UNKNOWN: {
                return returnClass ? 'warning' : 'Teadmata';
            }
            default: {
                return '';
            }
        }
    };
    MotherStatusTextPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'motherStatusText',
            pure: false
        })
    ], MotherStatusTextPipe);
    return MotherStatusTextPipe;
}());



/***/ }),

/***/ "./src/app/work/mother/mother.component.css":
/*!**************************************************!*\
  !*** ./src/app/work/mother/mother.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  height: 100px;\r\n}\r\n\r\nimg.pencil {\r\n  height: 57px;\r\n}\r\n\r\nimg.statusPanel {\r\n  height: 80px;\r\n}\r\n\r\nbutton {\r\n  margin: 40px;\r\n}\r\n\r\n.up-bar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nbutton.closing {\r\n  display: inline-block;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  padding: 2px 2px 2px 2px;\r\n  margin: 0;\r\n  margin-right: 10px;\r\n}\r\n\r\nimg.x {\r\n  height: 40px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9tb3RoZXIvbW90aGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBQ0Q7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QiwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBb0I7RUFBcEIseUJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3dvcmsvbW90aGVyL21vdGhlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5pbWcucGVuY2lsIHtcclxuICBoZWlnaHQ6IDU3cHg7XHJcbn1cclxuXHJcbmltZy5zdGF0dXNQYW5lbCB7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiA0MHB4O1xyXG59XHJcblxyXG4udXAtYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24uY2xvc2luZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIHBhZGRpbmc6IDJweCAycHggMnB4IDJweDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5pbWcueCB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/work/mother/mother.component.html":
/*!***************************************************!*\
  !*** ./src/app/work/mother/mother.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"currentlyChosenHive.momAttributes.momStatus\" >\r\n  <app-freak\r\n    *ngSwitchCase=\"momStatusEnum.FREAK\"\r\n    (onChangeMomStatus)=\"onChangeMomStatusButtonClick($event)\"\r\n    [currentlyChosenHive]=\"currentlyChosenHive\"></app-freak>\r\n  <app-hatched\r\n    *ngSwitchCase=\"momStatusEnum.HATCHED\"\r\n    (onChangeMomStatus)=\"onChangeMomStatusButtonClick($event)\"\r\n    [currentlyChosenHive]=\"currentlyChosenHive\"></app-hatched>\r\n  <app-in-cage\r\n    *ngSwitchCase=\"momStatusEnum.IN_CAGE\"\r\n    (onChangeMomStatus)=\"onChangeMomStatusButtonClick($event)\"\r\n    [currentlyChosenHive]=\"currentlyChosenHive\"></app-in-cage>\r\n  <app-missing\r\n    *ngSwitchCase=\"momStatusEnum.MISSING\"\r\n    (onChangeMomStatus)=\"onChangeMomStatusButtonClick($event)\"\r\n    [currentlyChosenHive]=\"currentlyChosenHive\"></app-missing>\r\n  <app-seen\r\n    *ngSwitchCase=\"momStatusEnum.SEEN\"\r\n    (onChangeMomStatus)=\"onChangeMomStatusButtonClick($event)\"\r\n    [currentlyChosenHive]=\"currentlyChosenHive\"></app-seen>\r\n  <app-un-caged\r\n    *ngSwitchCase=\"momStatusEnum.UN_CAGED\"\r\n    (onChangeMomStatus)=\"onChangeMomStatusButtonClick($event)\"\r\n    [currentlyChosenHive]=\"currentlyChosenHive\"></app-un-caged>\r\n  <app-unknown\r\n    *ngSwitchCase=\"momStatusEnum.UNKNOWN\"\r\n    (onChangeMomStatus)=\"onChangeMomStatusButtonClick($event)\"\r\n    [currentlyChosenHive]=\"currentlyChosenHive\"></app-unknown>\r\n</div>\r\n\r\n<jw-modal id=\"mom-status\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Ema hetkeolukord\r\n        </h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseMomStatusPanel()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"row\">\r\n        <button\r\n          class=\"btn btn-secondary\"\r\n          (click)=\"changeMomStatus(momStatusEnum.MISSING)\"\r\n          style=\"width: 230px\">\r\n          <img src=\"assets/img/kadunud.jpg\" class=\"statusPanel\">\r\n        </button>\r\n        <button\r\n          class=\"btn btn-secondary\"\r\n          (click)=\"changeMomStatus(momStatusEnum.IN_CAGE)\"\r\n          style=\"width: 230px\">\r\n          <img src=\"assets/img/puurigaTarru.png\" class=\"statusPanel\">\r\n        </button>\r\n        <button\r\n          class=\"btn btn-secondary\"\r\n          (click)=\"changeMomStatus(momStatusEnum.UN_CAGED)\"\r\n          style=\"width: 230px\">\r\n          <img src=\"assets/img/puuristV2lja.png\" class=\"statusPanel\">\r\n        </button>\r\n      </div>\r\n      <div class=\"row\">\r\n        <button\r\n          class=\"btn btn-secondary\"\r\n          (click)=\"changeMomStatus(momStatusEnum.UNKNOWN)\"\r\n          style=\"width: 230px\">\r\n          <img src=\"assets/img/teadmata.jpg\" class=\"statusPanel\">\r\n        </button>\r\n        <img src=\"assets/img/arrow.png\" alt=\"\" style=\"width: 450px; margin: 40px\">\r\n        <button\r\n          class=\"btn btn-secondary\"\r\n          (click)=\"changeMomStatus(momStatusEnum.SEEN)\"\r\n          style=\"width: 230px\">\r\n          <img src=\"assets/img/n2htud.png\" class=\"statusPanel\">\r\n        </button>\r\n      </div>\r\n      <div class=\"row\">\r\n        <button\r\n          class=\"btn btn-secondary\"\r\n          (click)=\"changeMomStatus(momStatusEnum.FREAK)\"\r\n          style=\"width: 230px\">\r\n          <img src=\"assets/img/v22rema.png\" class=\"statusPanel\">\r\n        </button>\r\n        <button\r\n          class=\"btn btn-secondary\"\r\n          (click)=\"changeMomStatus(momStatusEnum.HATCHED)\"\r\n          style=\"width: 230px; margin-left: 160px\">\r\n          <img src=\"assets/img/koorunudEma.jpg\" class=\"statusPanel\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</jw-modal>\r\n\r\n"

/***/ }),

/***/ "./src/app/work/mother/mother.component.ts":
/*!*************************************************!*\
  !*** ./src/app/work/mother/mother.component.ts ***!
  \*************************************************/
/*! exports provided: MotherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotherComponent", function() { return MotherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mom_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mom-status.enum */ "./src/app/work/mother/mom-status.enum.ts");
/* harmony import */ var _util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/jw-modal/jw-modal.service */ "./src/app/util/jw-modal/jw-modal.service.ts");
/* harmony import */ var _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../settings/shared/hive.model */ "./src/app/settings/shared/hive.model.ts");
/* harmony import */ var _mom_attributes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mom-attributes.service */ "./src/app/work/mother/mom-attributes.service.ts");






var MotherComponent = /** @class */ (function () {
    //opened = false;
    function MotherComponent(modalService, momAttributesService) {
        this.modalService = modalService;
        this.momAttributesService = momAttributesService;
        this.momStatusEnum = _mom_status_enum__WEBPACK_IMPORTED_MODULE_2__["MomStatusEnum"];
    }
    MotherComponent.prototype.ngOnChanges = function () {
        //for debugging...
        //console.log(this.currentlySelectedHive);
    };
    MotherComponent.prototype.onCloseMomStatusPanel = function () {
        this.modalService.close('mom-status');
    };
    MotherComponent.prototype.onChangeMomStatusButtonClick = function (newMomStatus) {
        if (newMomStatus) {
            this.changeMomStatus(newMomStatus);
        }
        else {
            this.modalService.open('mom-status');
        }
    };
    MotherComponent.prototype.changeMomStatus = function (newMotherStatus) {
        this.momAttributesService.onUpdateMomStatus(this.currentlyChosenHive, newMotherStatus);
        this.modalService.close('mom-status');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_4__["Hive"])
    ], MotherComponent.prototype, "currentlyChosenHive", void 0);
    MotherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mother',
            template: __webpack_require__(/*! ./mother.component.html */ "./src/app/work/mother/mother.component.html"),
            styles: [__webpack_require__(/*! ./mother.component.css */ "./src/app/work/mother/mother.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_3__["JwModalService"],
            _mom_attributes_service__WEBPACK_IMPORTED_MODULE_5__["MomAttributesService"]])
    ], MotherComponent);
    return MotherComponent;
}());



/***/ }),

/***/ "./src/app/work/mother/seen/seen.component.css":
/*!*****************************************************!*\
  !*** ./src/app/work/mother/seen/seen.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  height: 80px;\r\n}\r\n\r\nimg.x {\r\n  height: 40px;\r\n}\r\n\r\n.card-body {\r\n  padding: 10px;\r\n}\r\n\r\nh3.time-text {\r\n  margin-top: -10px;\r\n  margin-bottom: 0;\r\n  max-width: 214px;\r\n}\r\n\r\nbutton.change-mother-status-button {\r\n  width: 180px;\r\n  height: 80px;\r\n  margin: 0;\r\n}\r\n\r\ndiv.pictures-column {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n\r\np.marked-date-description {\r\n  font-size: 31px;\r\n  margin-top: -10px;\r\n}\r\n\r\nbutton.closing {\r\n  display: inline-block;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  padding: 2px 2px 2px 2px;\r\n  margin: 0;\r\n  margin-right: 10px;\r\n}\r\n\r\ndiv.option {\r\n  margin-top: 50px;\r\n}\r\n\r\ndiv.option2 {\r\n  margin-top: 20px;\r\n}\r\n\r\ninput.bigRadio {\r\n  width: 35px;\r\n  height: 35px\r\n}\r\n\r\n.up-bar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\ninput.num {\r\n  width: 70px;\r\n  height: 35px\r\n}\r\n\r\ninput.description {\r\n  width: 180px;\r\n  height: 35px\r\n}\r\n\r\nimg.pencil {\r\n  height: 40px;\r\n}\r\n\r\nbutton {\r\n  height: 60px;\r\n  width: 60px;\r\n  margin-top: 20px;\r\n  margin-left: 9px;\r\n}\r\n\r\n.custom-select {\r\n  display: inline;\r\n  width: 150px;\r\n  font-size: 28px;\r\n  margin-left: 18px;\r\n}\r\n\r\n.option-row {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n\r\nbutton.first-from-top-button {\r\n  height: 115px;\r\n  width: 60px;\r\n  margin: 0;\r\n  margin-left: 9px\r\n}\r\n\r\nbutton.second-from-top-button {\r\n  margin-top: 30px;\r\n}\r\n\r\nbutton.third-from-top-button {\r\n  margin-top: 65px;\r\n}\r\n\r\nbutton.fourth-from-top-button {\r\n  margin-top: 75px;\r\n}\r\n\r\nbutton.fifth-from-top-button {\r\n  margin-top: 100px;\r\n}\r\n\r\ndiv.marked-image-block {\r\n  margin-top: 37px;\r\n  height: 156px;\r\n}\r\n\r\ndiv.second-image-block {\r\n  margin-top: 30px;\r\n  height: 110px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9tb3RoZXIvc2Vlbi9zZWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsVUFBVTtDQUNYOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsNEJBQW9CO0VBQXBCLHlCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osWUFBWTtDQUNiOztBQUVEO0VBQ0UsY0FBYztFQUNkLCtCQUErQjtFQUMvQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osWUFBWTtDQUNiOztBQUVEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztDQUNmIiwiZmlsZSI6InNyYy9hcHAvd29yay9tb3RoZXIvc2Vlbi9zZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG5cclxuaW1nLngge1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuaDMudGltZS10ZXh0IHtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIG1heC13aWR0aDogMjE0cHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5jaGFuZ2UtbW90aGVyLXN0YXR1cy1idXR0b24ge1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5kaXYucGljdHVyZXMtY29sdW1uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxucC5tYXJrZWQtZGF0ZS1kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAzMXB4O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcblxyXG5idXR0b24uY2xvc2luZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIHBhZGRpbmc6IDJweCAycHggMnB4IDJweDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5kaXYub3B0aW9uIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG5kaXYub3B0aW9uMiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaW5wdXQuYmlnUmFkaW8ge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweFxyXG59XHJcblxyXG4udXAtYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dC5udW0ge1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogMzVweFxyXG59XHJcblxyXG5pbnB1dC5kZXNjcmlwdGlvbiB7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGhlaWdodDogMzVweFxyXG59XHJcblxyXG5pbWcucGVuY2lsIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDlweDtcclxufVxyXG5cclxuLmN1c3RvbS1zZWxlY3Qge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG59XHJcblxyXG4ub3B0aW9uLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5maXJzdC1mcm9tLXRvcC1idXR0b24ge1xyXG4gIGhlaWdodDogMTE1cHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiA5cHhcclxufVxyXG5cclxuYnV0dG9uLnNlY29uZC1mcm9tLXRvcC1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbi50aGlyZC1mcm9tLXRvcC1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDY1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5mb3VydGgtZnJvbS10b3AtYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG59XHJcblxyXG5idXR0b24uZmlmdGgtZnJvbS10b3AtYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuZGl2Lm1hcmtlZC1pbWFnZS1ibG9jayB7XHJcbiAgbWFyZ2luLXRvcDogMzdweDtcclxuICBoZWlnaHQ6IDE1NnB4O1xyXG59XHJcblxyXG5kaXYuc2Vjb25kLWltYWdlLWJsb2NrIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGhlaWdodDogMTEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/work/mother/seen/seen.component.html":
/*!******************************************************!*\
  !*** ./src/app/work/mother/seen/seen.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-8.5 pictures-column\">\r\n      <div\r\n        class=\"card bg-light\"\r\n        style=\"max-width: 16rem; height: 719px; margin-left:auto;margin-right:auto;text-align:center\">\r\n        <div class=\"card-header\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-primary change-mother-status-button\">\r\n            <img\r\n              src=\"assets/img/muuda.png\"\r\n              alt=\"ii\"\r\n              style=\"height: 65px\"\r\n              (click)=\"onChangeMotherStatusButtonClick(null)\">\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"card-body\" style=\"background-color: white\">\r\n\r\n\r\n          <img\r\n            src=\"assets/img/n2htud.png\" alt=\"ii\">\r\n          <h3 class=\"time-text\">{{ momStatusSectionTimeText }}</h3>\r\n\r\n\r\n          <div\r\n            *ngIf=\"!currentlyChosenHive.momAttributes.isLayingEggs\"\r\n            class=\"second-image-block\">\r\n            <img\r\n              src=\"assets/img/munebNot.png\" alt=\"ii\"\r\n              style=\"margin-top: 7px\">\r\n            <h3 class=\"time-text\">{{ layingEggsSectionTimeText }}</h3>\r\n          </div>\r\n          <div\r\n            *ngIf=\"currentlyChosenHive.momAttributes.isLayingEggs\"\r\n            class=\"second-image-block\">\r\n            <img\r\n              src=\"assets/img/munebOK.png\" alt=\"ii\"\r\n              style=\"margin-top: 7px\">\r\n            <h3 class=\"time-text\">{{ layingEggsSectionTimeText }}</h3>\r\n          </div>\r\n\r\n          <div class=\"marked-image-block\">\r\n            <div *ngIf=\"currentlyChosenHive.momAttributes.markedStatus === markedStatusEnum.UNMARKED\">\r\n              <img src=\"assets/img/unmarked.png\" alt=\"märgistamata\">\r\n            </div>\r\n            <div *ngIf=\"currentlyChosenHive.momAttributes.markedStatus === markedStatusEnum.ATTENTION\">\r\n              <img src=\"assets/img/attention.png\" alt=\"märkega probleeme\">\r\n              <h3\r\n                *ngIf=\"currentlyChosenHive.momAttributes.isMarkedDateMonthSet\"\r\n                class=\"time-text\">{{ currentlyChosenHive.momAttributes.markedDate | date:'MMMM yyyy'}}\r\n              </h3>\r\n              <h3\r\n                *ngIf=\"!currentlyChosenHive.momAttributes.isMarkedDateMonthSet\"\r\n                class=\"time-text\">{{ currentlyChosenHive.momAttributes.markedDate | date:'yyyy'}}\r\n              </h3>\r\n              <p class = \"marked-date-description\">\r\n                {{ currentlyChosenHive.momAttributes.markedDescription }}\r\n              </p>\r\n            </div>\r\n            <div *ngIf=\"currentlyChosenHive.momAttributes.markedStatus === markedStatusEnum.MARKED\">\r\n              <img\r\n                src=\"assets/img/marked.png\" alt=\"märgistatud\">\r\n              <h3\r\n                *ngIf=\"currentlyChosenHive.momAttributes.isMarkedDateMonthSet\"\r\n                class=\"time-text\">{{ currentlyChosenHive.momAttributes.markedDate | date:'MMMM yyyy'}}\r\n              </h3>\r\n              <h3\r\n                *ngIf=\"!currentlyChosenHive.momAttributes.isMarkedDateMonthSet\"\r\n                class=\"time-text\">{{ currentlyChosenHive.momAttributes.markedDate | date:'yyyy'}}\r\n              </h3>\r\n              <p class = \"marked-date-description\">\r\n                {{ currentlyChosenHive.momAttributes.markedDescription }}\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <img src=\"assets/img/synnip2evOk.png\" alt=\"ii\">\r\n          <h3\r\n            *ngIf=\"currentlyChosenHive.momAttributes.isBirthdayDateMonthSet\"\r\n            class=\"time-text\" style=\"margin-bottom: -15px !important;\">\r\n            {{ currentlyChosenHive.momAttributes.birthday | date:'MMMM yyyy'}}\r\n          </h3>\r\n          <h3\r\n            *ngIf=\"!currentlyChosenHive.momAttributes.isBirthdayDateMonthSet\"\r\n            class=\"time-text\" style=\"margin-bottom: -15px !important;\">\r\n            {{ currentlyChosenHive.momAttributes.birthday | date:'yyyy'}}\r\n          </h3>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-3.5\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary first-from-top-button\"\r\n        (click)=\"onChangeMotherStatusButtonClick(momStatusEnum.UNKNOWN)\">\r\n        <img\r\n          src=\"assets/img/teadmataVertical.jpg\"\r\n          alt=\"ii\"\r\n          style=\"height: 100px\">\r\n      </button>\r\n      <br>\r\n      <button\r\n        *ngIf=\"momStatusSectionTimeText != 'täna'\"\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-success second-from-top-button\"\r\n        (click)=\"saveMotherStatusSectionValues(true)\">\r\n        <img\r\n          src=\"assets/img/check.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n      <button\r\n        *ngIf=\"momStatusSectionTimeText === 'täna'\"\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary second-from-top-button\"\r\n        (click)=\"onOpenMomStatusSectionEditButton()\">\r\n        <img\r\n          src=\"assets/img/muudaNupp.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n      <br>\r\n      <button\r\n        *ngIf=\"layingEggsSectionTimeText != 'täna'\"\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-success third-from-top-button\"\r\n        (click)=\"saveLayingEggsSectionValues(true)\">\r\n        <img\r\n          src=\"assets/img/check.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n      <button\r\n        *ngIf=\"layingEggsSectionTimeText === 'täna'\"\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary third-from-top-button\"\r\n        (click)=\"onOpenWhenSeenMotherLayingEggsEditButton()\">\r\n        <img\r\n          src=\"assets/img/muudaNupp.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n      <br>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary fourth-from-top-button\"\r\n        (click)=\"onOpenWhenMotherMarkedEditButton()\">\r\n        <img\r\n          src=\"assets/img/muudaNupp.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n      <br>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary fifth-from-top-button\"\r\n        (click)=\"onOpenWhenMotherBirthdayEditButton()\">\r\n        <img\r\n          src=\"assets/img/muudaNupp.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<jw-modal id=\"mother-seen-edit\" style=\"max-width: 50rem; height: 45rem\" [smallModal]=\"true\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Millal seda ema viimati nägid?\r\n        </h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseMomStatusSectionEditButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-4\">\r\n        <img src=\"assets/img/n2htud.png\" alt=\"\">\r\n        <br>\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"seen\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnMomStatusSelection === actionTimeEnum.TODAY\"\r\n                (change)=\"radioBtnMomStatusSelected(actionTimeEnum.TODAY)\">\r\n              Täna\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input type=\"radio\" name=\"seen\"\r\n                     class=\"bigRadio\"\r\n                     [checked]=\"radioBtnMomStatusSelection === actionTimeEnum.PAST_DATE\"\r\n                     (change)=\"radioBtnMomStatusSelected(actionTimeEnum.PAST_DATE)\">\r\n              &nbsp;&nbsp;&nbsp;\r\n              <input\r\n                type=\"number\"\r\n                size=\"3\"\r\n                class=\"num\"\r\n                [(ngModel)]=\"radioBtnStatusPastDateInputValue\"\r\n                (ngModelChange)=\"radioBtnMomStatusSelected(actionTimeEnum.PAST_DATE)\"> päeva tagasi\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div\r\n          *ngIf=\"momStatusInitialValueText\"\r\n          class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input type=\"radio\" name=\"seen\"\r\n                     class=\"bigRadio\"\r\n                     (change)=\"radioBtnMomStatusSelected(actionTimeEnum.INITIAL_DATE)\">\r\n              &nbsp;\r\n              <img src=\"assets/img/tagasi.png\" alt=\"\" style=\"height: 45px\">\r\n              ({{ momStatusInitialValueText }})\r\n            </h2>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-7\">\r\n        <div class=\"row\">\r\n          <h2>Ema staatus ei ole \"nähtud\"?</h2>\r\n        </div>\r\n        <div class=\"row option\">\r\n          <h2>Vali teine ema staatus:&nbsp;&nbsp;&nbsp;</h2>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-primary\"\r\n            style=\"width: 200px; height: 80px; margin: 0px\">\r\n            <img\r\n              src=\"assets/img/muuda.png\"\r\n              alt=\"ii\"\r\n              style=\"height: 65px\"\r\n              (click)=\"onChangeMotherStatusButtonClick()\">\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</jw-modal>\r\n\r\n\r\n<jw-modal id=\"mother-laying-eggs-edit\" [smallModal]=\"true\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Millal nägid viimati, et see ema munes?\r\n        </h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseWhenSeenMotherLayingEggsEditButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-5\">\r\n        <img src=\"assets/img/munebOK.png\" alt=\"\">\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"laying_eggs\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnLayingEggsSelection === actionTimeEnum.TODAY\"\r\n                (change)=\"radioBtnLayingEggsSelected(actionTimeEnum.TODAY)\">\r\n              Täna\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input type=\"radio\" name=\"laying_eggs\"\r\n                     class=\"bigRadio\"\r\n                     [checked]=\"radioBtnLayingEggsSelection === actionTimeEnum.PAST_DATE\"\r\n                     (change)=\"radioBtnLayingEggsSelected(actionTimeEnum.PAST_DATE)\">\r\n              &nbsp;&nbsp;&nbsp;\r\n              <input\r\n                type=\"number\"\r\n                size=\"3\"\r\n                class=\"num\"\r\n                [(ngModel)]=\"radioBtnLayingEggsPastDateInputValue\"\r\n                (ngModelChange)=\"radioBtnLayingEggsSelected(actionTimeEnum.PAST_DATE)\">\r\n              päeva tagasi\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div\r\n          *ngIf=\"layingEggsInitialValueText\"\r\n          class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"laying_eggs\"\r\n                class=\"bigRadio\"\r\n                (change)=\"radioBtnLayingEggsSelected(actionTimeEnum.INITIAL_DATE)\">\r\n              &nbsp;\r\n              <img src=\"assets/img/tagasi.png\" alt=\"\" style=\"height: 45px\">\r\n              ({{ layingEggsInitialValueText }})\r\n            </h2>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <img src=\"assets/img/munebNot.png\" alt=\"\">\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"laying_eggs\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnLayingEggsSelection === actionTimeEnum.NO_ACTION\"\r\n                (change)=\"radioBtnLayingEggsSelected(actionTimeEnum.NO_ACTION)\">\r\n              Ei ole näinud, et muneks\r\n            </h2>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</jw-modal>\r\n\r\n\r\n<jw-modal id=\"mother-marked-edit\" [smallModal]=\"true\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Kui korralikult on ema märgistatud ja millal?\r\n        </h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseWhenMotherMarkedEditButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"col\">\r\n      <div class=\"row\">\r\n        <div class=\"col-4\">\r\n          <img src=\"assets/img/marked.png\" alt=\"\">\r\n          <div class=\"radio option2\">\r\n            <label>\r\n              <h2>\r\n                <input\r\n                  type=\"radio\"\r\n                  name=\"marked_quality\"\r\n                  class=\"bigRadio\"\r\n                  [checked]=\"radioBtnMarkedStatusSelection === markedStatusEnum.MARKED\"\r\n                  (change)=\"radioBtnMarkedStatusSelected(markedStatusEnum.MARKED)\">\r\n                Korralik märgistus\r\n              </h2>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <img src=\"assets/img/attention.png\" alt=\"\">\r\n          <div class=\"radio option2\" style=\"font-size: 33px\">\r\n            <label>\r\n              <h2>\r\n                <input\r\n                  type=\"radio\"\r\n                  name=\"marked_quality\"\r\n                  class=\"bigRadio\"\r\n                  [checked]=\"radioBtnMarkedStatusSelection === markedStatusEnum.ATTENTION\"\r\n                  (change)=\"radioBtnMarkedStatusSelected(markedStatusEnum.ATTENTION)\">\r\n                Märgistusega on probleeme. <br>\r\n\r\n              </h2>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <img src=\"assets/img/unmarked.png\" alt=\"\">\r\n          <div class=\"radio option2\">\r\n            <label>\r\n              <h2>\r\n                <input\r\n                  type=\"radio\"\r\n                  name=\"marked_quality\"\r\n                  class=\"bigRadio\"\r\n                  [checked]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n                  (change)=\"radioBtnMarkedStatusSelected(markedStatusEnum.UNMARKED)\">\r\n                Ei ole märgistatud\r\n              </h2>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr style=\"margin-top: 10px; margin-bottom: 10px\">\r\n      <div class=\"row\" style=\"font-size: 33px\">\r\n        <div class=\"col-1\"></div>\r\n        <div class=\"col-11\">\r\n          Märksõna:\r\n          <input\r\n            type=\"text\"\r\n            size=\"10\"\r\n            class=\"description\"\r\n            [disabled]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n            [(ngModel)]=\"markedSectionAdditionlInfoText\"\r\n            (ngModelChange)=\"saveMarkedSectionValues()\">\r\n        </div>\r\n      </div>\r\n      <hr style=\"margin-top: 10px; margin-bottom: 0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <div class=\"radio option\" style=\"margin-top: 25px\">\r\n            <label>\r\n              <h2>\r\n                <input type=\"radio\" name=\"when_marked\"\r\n                       class=\"bigRadio\"\r\n                       [disabled]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n                       (change)=\"radioBtnMarkedTimeSelected(actionTimeEnum.UNKNOWN)\"\r\n                       [checked]=\"radioBtnMarkedTimeSelection === actionTimeEnum.UNKNOWN\">\r\n                &nbsp;Teadmata millal märgistatud\r\n              </h2>\r\n            </label>\r\n          </div>\r\n          <div style=\"margin-top: 37px\">\r\n            <div>\r\n              <label class=\"option-row\">\r\n                <input type=\"radio\"\r\n                       name=\"when_marked\"\r\n                       class=\"bigRadio\"\r\n                       [disabled]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n                       (change)=\"radioBtnMarkedTimeSelected(actionTimeEnum.PAST_DATE)\"\r\n                       [checked]=\"radioBtnMarkedTimeSelection === actionTimeEnum.PAST_DATE\">\r\n                <h2>&nbsp;Märgistatud:</h2>\r\n                <select\r\n                  name=\"month_marked\"\r\n                  class=\"custom-select\"\r\n                  size=\"1\"\r\n                  [disabled]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n                  [(ngModel)]=\"markedTimeMonthValue\"\r\n                  (change)=\"radioBtnMarkedTimeSelected(actionTimeEnum.PAST_DATE)\">\r\n                  <option value=\"\">Kuu</option>\r\n                  <option value=\"0\">Jaanuar</option>\r\n                  <option value=\"1\">Veebruar</option>\r\n                  <option value=\"2\">Märts</option>\r\n                  <option value=\"3\">Aprill</option>\r\n                  <option value=\"4\">Mai</option>\r\n                  <option value=\"5\">Juuni</option>\r\n                  <option value=\"6\">Juuli</option>\r\n                  <option value=\"7\">August</option>\r\n                  <option value=\"8\">September</option>\r\n                  <option value=\"9\">Oktoober</option>\r\n                  <option value=\"10\">November</option>\r\n                  <option value=\"11\">Detsember</option>\r\n                </select>\r\n                <select\r\n                  name=\"year_marked\"\r\n                  class=\"custom-select\"\r\n                  size=\"1\"\r\n                  [disabled]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n                  [(ngModel)]=\"markedTimeYearValue\"\r\n                  (change)=\"radioBtnMarkedTimeSelected(actionTimeEnum.PAST_DATE)\">\r\n                  <option value=\"\" disabled hidden>Aasta</option>\r\n                  <option value=\"2017\">2017</option>\r\n                  <option value=\"2018\">2018</option>\r\n                  <option value=\"2019\">2019</option>\r\n                  <option value=\"2020\">2020</option>\r\n                  <option value=\"2021\">2021</option>\r\n                </select>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</jw-modal>\r\n\r\n\r\n<jw-modal id=\"mother-birthday-edit\" [smallModal]=\"true\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Millal on see ema koorunud?\r\n        </h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseWhenMotherBirthdayEditButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-5\">\r\n        <img src=\"assets/img/synnip2evOk.png\" alt=\"\">\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <div class=\"radio option\" style=\"margin-top: 25px\">\r\n          <label>\r\n            <h2>\r\n              <input type=\"radio\" name=\"birthday\"\r\n                     class=\"bigRadio\"\r\n                     (change)=\"radioBtnBirthdayTimeSelected(actionTimeEnum.UNKNOWN)\"\r\n                     [checked]=\"radioBtnBirthdayTimeSelection === actionTimeEnum.UNKNOWN\">\r\n              &nbsp;Teadmata millal koorunud\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div>\r\n          <label class=\"option-row\">\r\n            <input type=\"radio\"\r\n                   name=\"birthday\"\r\n                   class=\"bigRadio\"\r\n                   (change)=\"radioBtnBirthdayTimeSelected(actionTimeEnum.PAST_DATE)\"\r\n                   [checked]=\"radioBtnBirthdayTimeSelection === actionTimeEnum.PAST_DATE\">\r\n            <select\r\n              name=\"month_marked\"\r\n              class=\"custom-select\"\r\n              size=\"1\"\r\n              style=\"width: 200px\"\r\n              [(ngModel)]=\"birthdayTimeMonthValue\"\r\n              (ngModelChange)=\"radioBtnBirthdayTimeSelected(actionTimeEnum.PAST_DATE)\">\r\n              <option value=\"\">Kuu</option>\r\n              <option value=\"0\">Jaanuar</option>\r\n              <option value=\"1\">Veebruar</option>\r\n              <option value=\"2\">Märts</option>\r\n              <option value=\"3\">Aprill</option>\r\n              <option value=\"4\">Mai</option>\r\n              <option value=\"5\">Juuni</option>\r\n              <option value=\"6\">Juuli</option>\r\n              <option value=\"7\">August</option>\r\n              <option value=\"8\">September</option>\r\n              <option value=\"9\">Oktoober</option>\r\n              <option value=\"10\">November</option>\r\n              <option value=\"11\">Detsember</option>\r\n            </select>\r\n            <select\r\n              name=\"year_marked\"\r\n              class=\"custom-select\"\r\n              size=\"1\"\r\n              [(ngModel)]=\"birthdayTimeYearValue\"\r\n              (ngModelChange)=\"radioBtnBirthdayTimeSelected(actionTimeEnum.PAST_DATE)\">\r\n              <option value=\"\" disabled hidden>Aasta</option>\r\n              <option value=\"2017\">2017</option>\r\n              <option value=\"2018\">2018</option>\r\n              <option value=\"2019\">2019</option>\r\n              <option value=\"2020\">2020</option>\r\n              <option value=\"2021\">2021</option>\r\n            </select>\r\n          </label>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <h2>Selles tarus ei ole veel koorunud ema?</h2>\r\n        </div>\r\n        <div class=\"row option\">\r\n          <h2>Vali teine ema staatus:&nbsp;&nbsp;&nbsp;</h2>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-primary\"\r\n            style=\"width: 200px; height: 80px; margin: 0px\">\r\n            <img\r\n              src=\"assets/img/muuda.png\"\r\n              alt=\"ii\"\r\n              style=\"height: 65px\"\r\n              (click)=\"onChangeMotherStatusButtonClick()\">\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</jw-modal>\r\n"

/***/ }),

/***/ "./src/app/work/mother/seen/seen.component.ts":
/*!****************************************************!*\
  !*** ./src/app/work/mother/seen/seen.component.ts ***!
  \****************************************************/
/*! exports provided: SeenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeenComponent", function() { return SeenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/jw-modal/jw-modal.service */ "./src/app/util/jw-modal/jw-modal.service.ts");
/* harmony import */ var _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mom-status.enum */ "./src/app/work/mother/mom-status.enum.ts");
/* harmony import */ var _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../settings/shared/hive.model */ "./src/app/settings/shared/hive.model.ts");
/* harmony import */ var _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../marked-status.enum */ "./src/app/work/mother/marked-status.enum.ts");
/* harmony import */ var _action_time_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../action-time.enum */ "./src/app/work/mother/action-time.enum.ts");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../util/util.service */ "./src/app/util/util.service.ts");
/* harmony import */ var _mom_attributes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mom-attributes.service */ "./src/app/work/mother/mom-attributes.service.ts");
/* harmony import */ var _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../settings/shared/colonies.service */ "./src/app/settings/shared/colonies.service.ts");
/* harmony import */ var _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../util/executor/executor.service */ "./src/app/util/executor/executor.service.ts");
/* harmony import */ var _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../util/executor/controls-protection-id.enum */ "./src/app/util/executor/controls-protection-id.enum.ts");












var SeenComponent = /** @class */ (function () {
    function SeenComponent(modalService, momAttributesService, coloniesService, executorService) {
        this.modalService = modalService;
        this.momAttributesService = momAttributesService;
        this.coloniesService = coloniesService;
        this.executorService = executorService;
        this.onChangeMomStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.momStatusEnum = _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"];
        this.markedStatusEnum = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"];
        this.actionTimeEnum = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"];
        this.momStatusInitialValueText = null;
        this.radioBtnStatusPastDateInputValue = null;
        this.layingEggsInitialValueText = null;
        this.radioBtnLayingEggsPastDateInputValue = null;
        this.markedTimeMonthValue = '';
        this.markedTimeYearValue = '';
        this.birthdayTimeMonthValue = '';
        this.birthdayTimeYearValue = '';
    }
    SeenComponent.prototype.ngOnChanges = function () {
        this.currentlyChosenHiveInitialData = this.coloniesService.getInitialHiveData(this.currentlyChosenHive);
        this.setMotherStatusSectionValuesCorrect();
        this.setLayingEggsSectionValuesCorrect();
        this.setMarkedSectionValuesCorrect();
        this.setBirthdaySectionValuesCorrect();
    };
    SeenComponent.prototype.setMotherStatusSectionValuesCorrect = function () {
        this.momStatusInitialValueText = null;
        var daysFromStatusBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHive.momAttributes.statusStartingDate);
        if (daysFromStatusBeginning == 0) {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].TODAY;
            this.momStatusSectionTimeText = 'täna';
            this.radioBtnStatusPastDateInputValue = null;
        }
        else if (daysFromStatusBeginning == 1) {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE;
            this.momStatusSectionTimeText = '1 päev tagasi';
            this.radioBtnStatusPastDateInputValue = 1;
        }
        else {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE;
            this.momStatusSectionTimeText = daysFromStatusBeginning + ' päeva tagasi';
            this.radioBtnStatusPastDateInputValue = daysFromStatusBeginning;
        }
        if (this.currentlyChosenHiveInitialData &&
            this.currentlyChosenHiveInitialData.momAttributes.momStatus === _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].SEEN) {
            var daysFromInitialStatusBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHiveInitialData.momAttributes.statusStartingDate);
            if (daysFromInitialStatusBeginning == 0) {
                return;
            }
            else if (daysFromInitialStatusBeginning == 1) {
                this.momStatusInitialValueText = daysFromInitialStatusBeginning + ' päev tagasi';
            }
            else {
                this.momStatusInitialValueText = daysFromInitialStatusBeginning + ' päeva tagasi';
            }
        }
    };
    SeenComponent.prototype.saveMotherStatusSectionValues = function (setToToday) {
        if (setToToday) {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].TODAY;
        }
        if (this.radioBtnMomStatusSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].TODAY) {
            this.currentlyChosenHive.momAttributes.statusStartingDate = new Date();
        }
        else if (this.radioBtnMomStatusSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE) {
            this.currentlyChosenHive.momAttributes.statusStartingDate =
                new Date(new Date().setHours(0, 0, 0, 0) -
                    +this.radioBtnStatusPastDateInputValue * 24 * 60 * 60 * 1000);
        }
        else if (this.radioBtnMomStatusSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].INITIAL_DATE) {
            this.currentlyChosenHive.momAttributes.statusStartingDate =
                this.currentlyChosenHiveInitialData.momAttributes.statusStartingDate;
        }
        this.executorService.exeWithTimer(this.momAttributesService.onUpdateMomAttributes, [this.currentlyChosenHive], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_11__["ControlsProtectionIdEnum"].MOM);
        this.setMotherStatusSectionValuesCorrect();
    };
    SeenComponent.prototype.setLayingEggsSectionValuesCorrect = function () {
        this.layingEggsInitialValueText = null;
        if (this.currentlyChosenHive.momAttributes.isLayingEggs) {
            var daysFromLayingEggsBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHive.momAttributes.eggsLastSeen);
            if (daysFromLayingEggsBeginning == 0) {
                this.radioBtnLayingEggsSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].TODAY;
                this.layingEggsSectionTimeText = 'täna';
                this.radioBtnLayingEggsPastDateInputValue = null;
            }
            else if (daysFromLayingEggsBeginning == 1) {
                this.radioBtnLayingEggsSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE;
                this.layingEggsSectionTimeText = '1 päev tagasi';
                this.radioBtnLayingEggsPastDateInputValue = 1;
            }
            else {
                this.radioBtnLayingEggsSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE;
                this.layingEggsSectionTimeText = daysFromLayingEggsBeginning + ' päeva tagasi';
                this.radioBtnLayingEggsPastDateInputValue = daysFromLayingEggsBeginning;
            }
        }
        else {
            this.radioBtnLayingEggsSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].NO_ACTION;
            this.layingEggsSectionTimeText = '';
            this.radioBtnLayingEggsPastDateInputValue = null;
        }
        if (this.currentlyChosenHiveInitialData &&
            this.currentlyChosenHiveInitialData.momAttributes.momStatus === _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].SEEN) {
            var daysFromInitialStatusBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHiveInitialData.momAttributes.eggsLastSeen);
            if (daysFromInitialStatusBeginning == 0 ||
                !this.currentlyChosenHiveInitialData.momAttributes.isLayingEggs) {
                return;
            }
            else if (daysFromInitialStatusBeginning == 1) {
                this.layingEggsInitialValueText = daysFromInitialStatusBeginning + ' päev tagasi';
            }
            else {
                this.layingEggsInitialValueText = daysFromInitialStatusBeginning + ' päeva tagasi';
            }
        }
    };
    SeenComponent.prototype.saveLayingEggsSectionValues = function (setToToday) {
        if (setToToday) {
            this.radioBtnLayingEggsSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].TODAY;
        }
        if (this.radioBtnLayingEggsSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].TODAY) {
            this.currentlyChosenHive.momAttributes.isLayingEggs = true;
            this.currentlyChosenHive.momAttributes.eggsLastSeen = new Date();
        }
        else if (this.radioBtnLayingEggsSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE) {
            this.currentlyChosenHive.momAttributes.isLayingEggs = true;
            this.currentlyChosenHive.momAttributes.eggsLastSeen =
                new Date(new Date().setHours(0, 0, 0, 0) -
                    +this.radioBtnLayingEggsPastDateInputValue * 24 * 60 * 60 * 1000);
        }
        else if (this.radioBtnLayingEggsSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].INITIAL_DATE) {
            this.currentlyChosenHive.momAttributes.isLayingEggs = true;
            this.currentlyChosenHive.momAttributes.eggsLastSeen =
                this.currentlyChosenHiveInitialData.momAttributes.eggsLastSeen;
        }
        else if (this.radioBtnLayingEggsSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].NO_ACTION) {
            this.currentlyChosenHive.momAttributes.isLayingEggs = false;
            this.currentlyChosenHive.momAttributes.eggsLastSeen = null;
        }
        this.executorService.exeWithTimer(this.momAttributesService.onUpdateMomAttributes, [this.currentlyChosenHive], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_11__["ControlsProtectionIdEnum"].MOM);
        this.setLayingEggsSectionValuesCorrect();
    };
    SeenComponent.prototype.setMarkedSectionValuesCorrect = function () {
        this.markedSectionAdditionlInfoText = this.currentlyChosenHive.momAttributes.markedDescription;
        if (this.currentlyChosenHive.momAttributes.markedStatus == _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].MARKED) {
            this.radioBtnMarkedStatusSelection = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].MARKED;
        }
        else if (this.currentlyChosenHive.momAttributes.markedStatus == _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].ATTENTION) {
            this.radioBtnMarkedStatusSelection = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].ATTENTION;
        }
        else if (this.currentlyChosenHive.momAttributes.markedStatus == _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].UNMARKED) {
            this.radioBtnMarkedStatusSelection = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].UNMARKED;
            this.radioBtnMarkedTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN;
        }
        if (this.currentlyChosenHive.momAttributes.markedDate) {
            this.radioBtnMarkedTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE;
            var markedDate = new Date(this.currentlyChosenHive.momAttributes.markedDate);
            this.markedTimeYearValue = markedDate.getFullYear().toString();
            if (this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet) {
                this.markedTimeMonthValue = markedDate.getMonth().toString();
            }
            else {
                this.markedTimeMonthValue = '';
            }
        }
        else {
            this.radioBtnMarkedTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN;
            this.markedTimeMonthValue = '';
            this.markedTimeYearValue = '';
        }
    };
    SeenComponent.prototype.saveMarkedSectionValues = function () {
        if (this.radioBtnMarkedStatusSelection === _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].MARKED) {
            this.currentlyChosenHive.momAttributes.markedStatus = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].MARKED;
            this.currentlyChosenHive.momAttributes.markedDescription = this.markedSectionAdditionlInfoText;
            if (this.radioBtnMarkedTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN) {
                this.currentlyChosenHive.momAttributes.markedDate = null;
            }
            else if (this.radioBtnMarkedTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE) {
                this.currentlyChosenHive.momAttributes.markedDate = new Date();
                this.currentlyChosenHive.momAttributes.markedDate.setFullYear(+this.markedTimeYearValue);
                if (this.markedTimeMonthValue === '') {
                    this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = false;
                }
                else {
                    this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = true;
                    this.currentlyChosenHive.momAttributes.markedDate.setMonth(+this.markedTimeMonthValue);
                }
            }
        }
        else if (this.radioBtnMarkedStatusSelection === _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].ATTENTION) {
            this.currentlyChosenHive.momAttributes.markedStatus = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].ATTENTION;
            this.currentlyChosenHive.momAttributes.markedDescription = this.markedSectionAdditionlInfoText;
            if (this.radioBtnMarkedTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN) {
                this.currentlyChosenHive.momAttributes.markedDate = null;
            }
            else if (this.radioBtnMarkedTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE) {
                this.currentlyChosenHive.momAttributes.markedDate = new Date();
                this.currentlyChosenHive.momAttributes.markedDate.setFullYear(+this.markedTimeYearValue);
                if (this.markedTimeMonthValue === '') {
                    this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = false;
                }
                else {
                    this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = true;
                    this.currentlyChosenHive.momAttributes.markedDate.setMonth(+this.markedTimeMonthValue);
                }
            }
        }
        else if (this.radioBtnMarkedStatusSelection === _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].UNMARKED) {
            this.currentlyChosenHive.momAttributes.markedStatus = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].UNMARKED;
            this.currentlyChosenHive.momAttributes.markedDescription = '';
            this.currentlyChosenHive.momAttributes.markedDate = null;
            this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = false;
        }
        this.executorService.exeWithTimer(this.momAttributesService.onUpdateMomAttributes, [this.currentlyChosenHive], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_11__["ControlsProtectionIdEnum"].MOM);
        this.setMarkedSectionValuesCorrect();
    };
    SeenComponent.prototype.setBirthdaySectionValuesCorrect = function () {
        if (this.currentlyChosenHive.momAttributes.birthday) {
            this.radioBtnBirthdayTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE;
            var birthday = new Date(this.currentlyChosenHive.momAttributes.birthday);
            this.birthdayTimeYearValue = birthday.getFullYear().toString();
            if (this.currentlyChosenHive.momAttributes.isBirthdayDateMonthSet) {
                this.birthdayTimeMonthValue = birthday.getMonth().toString();
            }
            else {
                this.birthdayTimeMonthValue = '';
            }
        }
        else {
            this.radioBtnBirthdayTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN;
            this.birthdayTimeMonthValue = '';
            this.birthdayTimeYearValue = '';
        }
    };
    SeenComponent.prototype.saveBirthdaySectionValues = function () {
        if (this.radioBtnBirthdayTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN) {
            this.currentlyChosenHive.momAttributes.birthday = null;
            this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = false;
        }
        else if (this.radioBtnBirthdayTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE) {
            this.currentlyChosenHive.momAttributes.birthday = new Date();
            this.currentlyChosenHive.momAttributes.birthday.setFullYear(+this.birthdayTimeYearValue);
            if (!this.birthdayTimeMonthValue) {
                this.currentlyChosenHive.momAttributes.isBirthdayDateMonthSet = false;
            }
            else {
                this.currentlyChosenHive.momAttributes.isBirthdayDateMonthSet = true;
                this.currentlyChosenHive.momAttributes.birthday.setMonth(+this.birthdayTimeMonthValue);
            }
        }
        this.executorService.exeWithTimer(this.momAttributesService.onUpdateMomAttributes, [this.currentlyChosenHive], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_11__["ControlsProtectionIdEnum"].MOM);
        this.setBirthdaySectionValuesCorrect();
    };
    SeenComponent.prototype.radioBtnMomStatusSelected = function (selectedActionTime) {
        this.radioBtnMomStatusSelection = selectedActionTime;
        this.saveMotherStatusSectionValues();
    };
    SeenComponent.prototype.radioBtnLayingEggsSelected = function (selectedActionTime) {
        this.radioBtnLayingEggsSelection = selectedActionTime;
        this.saveLayingEggsSectionValues();
    };
    SeenComponent.prototype.radioBtnMarkedStatusSelected = function (markedStatusSelected) {
        this.radioBtnMarkedStatusSelection = markedStatusSelected;
        if (markedStatusSelected === _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].UNMARKED) {
            this.radioBtnMarkedTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN;
            this.markedSectionAdditionlInfoText = '';
        }
        this.saveMarkedSectionValues();
    };
    SeenComponent.prototype.radioBtnMarkedTimeSelected = function (selectedActionTime) {
        if (selectedActionTime === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE && !this.markedTimeYearValue) {
            this.markedTimeYearValue = '2019';
        }
        this.radioBtnMarkedTimeSelection = selectedActionTime;
        this.saveMarkedSectionValues();
    };
    SeenComponent.prototype.radioBtnBirthdayTimeSelected = function (selectedActionTime) {
        if (selectedActionTime === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE && !this.birthdayTimeYearValue) {
            this.birthdayTimeYearValue = '2019';
        }
        this.radioBtnBirthdayTimeSelection = selectedActionTime;
        this.saveBirthdaySectionValues();
    };
    SeenComponent.prototype.onChangeMotherStatusButtonClick = function (newMotherStatus) {
        this.modalService.close('mother-seen-edit');
        this.modalService.close('mother-birthday-edit');
        this.onChangeMomStatus.emit(newMotherStatus);
    };
    SeenComponent.prototype.onOpenMomStatusSectionEditButton = function () {
        this.modalService.open('mother-seen-edit');
    };
    SeenComponent.prototype.onCloseMomStatusSectionEditButton = function () {
        this.setMotherStatusSectionValuesCorrect();
        this.modalService.close('mother-seen-edit');
    };
    SeenComponent.prototype.onOpenWhenSeenMotherLayingEggsEditButton = function () {
        this.modalService.open('mother-laying-eggs-edit');
    };
    SeenComponent.prototype.onCloseWhenSeenMotherLayingEggsEditButton = function () {
        this.modalService.close('mother-laying-eggs-edit');
    };
    SeenComponent.prototype.onOpenWhenMotherMarkedEditButton = function () {
        this.modalService.open('mother-marked-edit');
    };
    SeenComponent.prototype.onCloseWhenMotherMarkedEditButton = function () {
        this.modalService.close('mother-marked-edit');
    };
    SeenComponent.prototype.onOpenWhenMotherBirthdayEditButton = function () {
        this.modalService.open('mother-birthday-edit');
    };
    SeenComponent.prototype.onCloseWhenMotherBirthdayEditButton = function () {
        this.modalService.close('mother-birthday-edit');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_4__["Hive"])
    ], SeenComponent.prototype, "currentlyChosenHive", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SeenComponent.prototype, "onChangeMomStatus", void 0);
    SeenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-seen',
            template: __webpack_require__(/*! ./seen.component.html */ "./src/app/work/mother/seen/seen.component.html"),
            styles: [__webpack_require__(/*! ./seen.component.css */ "./src/app/work/mother/seen/seen.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_2__["JwModalService"],
            _mom_attributes_service__WEBPACK_IMPORTED_MODULE_8__["MomAttributesService"],
            _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_9__["ColoniesService"],
            _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_10__["ExecutorService"]])
    ], SeenComponent);
    return SeenComponent;
}());



/***/ }),

/***/ "./src/app/work/mother/un-caged/un-caged.component.css":
/*!*************************************************************!*\
  !*** ./src/app/work/mother/un-caged/un-caged.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  height: 80px;\r\n}\r\n\r\nimg.x {\r\n  height: 40px;\r\n}\r\n\r\n.card-body {\r\n  padding: 10px;\r\n}\r\n\r\nh3.time-text {\r\n  margin-top: -10px;\r\n  margin-bottom: 0;\r\n  max-width: 214px;\r\n}\r\n\r\nbutton.change-mother-status-button {\r\n  width: 180px;\r\n  height: 80px;\r\n  margin: 0;\r\n}\r\n\r\ndiv.pictures-column {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n\r\np.marked-date-description {\r\n  font-size: 31px;\r\n  margin-top: -10px;\r\n}\r\n\r\nbutton.closing {\r\n  display: inline-block;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  padding: 2px 2px 2px 2px;\r\n  margin: 0;\r\n  margin-right: 10px;\r\n}\r\n\r\ndiv.option {\r\n  margin-top: 50px;\r\n}\r\n\r\ndiv.option2 {\r\n  margin-top: 20px;\r\n}\r\n\r\ndiv.twoButtons {\r\n  margin-top: 200px;\r\n}\r\n\r\ninput.bigRadio {\r\n  width: 35px;\r\n  height: 35px\r\n}\r\n\r\n.up-bar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\ninput.num {\r\n  width: 70px;\r\n  height: 35px\r\n}\r\n\r\ninput.description {\r\n  width: 180px;\r\n  height: 35px\r\n}\r\n\r\nimg.pencil {\r\n  height: 40px;\r\n}\r\n\r\nbutton {\r\n  height: 60px;\r\n  width: 60px;\r\n  margin-top: 20px;\r\n  margin-left: 9px;\r\n}\r\n\r\n.custom-select {\r\n  display: inline;\r\n  width: 150px;\r\n  font-size: 28px;\r\n  margin-left: 18px;\r\n}\r\n\r\n.option-row {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n\r\nbutton.first-from-top-button {\r\n  height: 115px;\r\n  width: 60px;\r\n  margin: 0;\r\n  margin-left: 9px\r\n}\r\n\r\nbutton.second-from-top-button {\r\n  margin-top: 30px;\r\n}\r\n\r\nbutton.third-from-top-button {\r\n  margin-top: 65px;\r\n}\r\n\r\nbutton.fourth-from-top-button {\r\n  margin-top: 75px;\r\n}\r\n\r\nbutton.fifth-from-top-button {\r\n  margin-top: 100px;\r\n}\r\n\r\ndiv.marked-image-block {\r\n  margin-top: 30px;\r\n  height: 156px;\r\n}\r\n\r\ndiv.second-image-block {\r\n  margin-top: 30px;\r\n  height: 110px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9tb3RoZXIvdW4tY2FnZWQvdW4tY2FnZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixVQUFVO0NBQ1g7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QiwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBb0I7RUFBcEIseUJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsWUFBWTtDQUNiOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsY0FBYztFQUNkLDRCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIsYUFBYTtDQUNkOztBQUVEO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC93b3JrL21vdGhlci91bi1jYWdlZC91bi1jYWdlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbmltZy54IHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmgzLnRpbWUtdGV4dCB7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBtYXgtd2lkdGg6IDIxNHB4O1xyXG59XHJcblxyXG5idXR0b24uY2hhbmdlLW1vdGhlci1zdGF0dXMtYnV0dG9uIHtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuZGl2LnBpY3R1cmVzLWNvbHVtbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbnAubWFya2VkLWRhdGUtZGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMzFweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuYnV0dG9uLmNsb3Npbmcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuZGl2Lm9wdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuZGl2Lm9wdGlvbjIge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmRpdi50d29CdXR0b25zIHtcclxuICBtYXJnaW4tdG9wOiAyMDBweDtcclxufVxyXG5cclxuaW5wdXQuYmlnUmFkaW8ge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweFxyXG59XHJcblxyXG4udXAtYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dC5udW0ge1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogMzVweFxyXG59XHJcblxyXG5pbnB1dC5kZXNjcmlwdGlvbiB7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGhlaWdodDogMzVweFxyXG59XHJcblxyXG5pbWcucGVuY2lsIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDlweDtcclxufVxyXG5cclxuLmN1c3RvbS1zZWxlY3Qge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG59XHJcblxyXG4ub3B0aW9uLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5maXJzdC1mcm9tLXRvcC1idXR0b24ge1xyXG4gIGhlaWdodDogMTE1cHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiA5cHhcclxufVxyXG5cclxuYnV0dG9uLnNlY29uZC1mcm9tLXRvcC1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbi50aGlyZC1mcm9tLXRvcC1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDY1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5mb3VydGgtZnJvbS10b3AtYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG59XHJcblxyXG5idXR0b24uZmlmdGgtZnJvbS10b3AtYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuZGl2Lm1hcmtlZC1pbWFnZS1ibG9jayB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBoZWlnaHQ6IDE1NnB4O1xyXG59XHJcblxyXG5kaXYuc2Vjb25kLWltYWdlLWJsb2NrIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGhlaWdodDogMTEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/work/mother/un-caged/un-caged.component.html":
/*!**************************************************************!*\
  !*** ./src/app/work/mother/un-caged/un-caged.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-8.5 pictures-column\">\r\n      <div\r\n        class=\"card bg-light\"\r\n        style=\"max-width: 16rem; height: 719px; margin-left:auto;margin-right:auto;text-align:center\">\r\n        <div class=\"card-header\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-primary change-mother-status-button\">\r\n            <img\r\n              src=\"assets/img/muuda.png\"\r\n              alt=\"ii\"\r\n              style=\"height: 65px\"\r\n              (click)=\"onChangeMotherStatusButtonClick(null)\">\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"card-body\" style=\"background-color: white\">\r\n\r\n\r\n          <img\r\n            src=\"assets/img/puuristV2lja.png\" alt=\"ii\">\r\n          <h3 class=\"time-text\">{{ momStatusSectionTimeText }}</h3>\r\n\r\n\r\n          <div\r\n            *ngIf=\"!currentlyChosenHive.momAttributes.isLayingEggs\"\r\n            class=\"second-image-block\">\r\n            <img\r\n              src=\"assets/img/munebNot.png\" alt=\"ii\"\r\n              style=\"margin-top: 7px\">\r\n            <h3 class=\"time-text\">{{ layingEggsSectionTimeText }}</h3>\r\n          </div>\r\n          <div\r\n            *ngIf=\"currentlyChosenHive.momAttributes.isLayingEggs\"\r\n            class=\"second-image-block\">\r\n            <img\r\n              src=\"assets/img/munebOK.png\" alt=\"ii\"\r\n              style=\"margin-top: 7px\">\r\n            <h3 class=\"time-text\">{{ layingEggsSectionTimeText }}</h3>\r\n          </div>\r\n\r\n\r\n          <div class=\"marked-image-block\">\r\n            <div *ngIf=\"currentlyChosenHive.momAttributes.markedStatus === markedStatusEnum.UNMARKED\">\r\n              <img src=\"assets/img/unmarked.png\" alt=\"märgistamata\">\r\n            </div>\r\n            <div *ngIf=\"currentlyChosenHive.momAttributes.markedStatus === markedStatusEnum.ATTENTION\">\r\n              <img src=\"assets/img/attention.png\" alt=\"märkega probleeme\">\r\n              <h3\r\n                *ngIf=\"currentlyChosenHive.momAttributes.isMarkedDateMonthSet\"\r\n                class=\"time-text\">{{ currentlyChosenHive.momAttributes.markedDate | date:'MMMM yyyy'}}\r\n              </h3>\r\n              <h3\r\n                *ngIf=\"!currentlyChosenHive.momAttributes.isMarkedDateMonthSet\"\r\n                class=\"time-text\">{{ currentlyChosenHive.momAttributes.markedDate | date:'yyyy'}}\r\n              </h3>\r\n              <p class = \"marked-date-description\">\r\n                {{ currentlyChosenHive.momAttributes.markedDescription }}\r\n              </p>\r\n            </div>\r\n            <div *ngIf=\"currentlyChosenHive.momAttributes.markedStatus === markedStatusEnum.MARKED\">\r\n              <img\r\n                src=\"assets/img/marked.png\" alt=\"märgistatud\">\r\n              <h3\r\n                *ngIf=\"currentlyChosenHive.momAttributes.isMarkedDateMonthSet\"\r\n                class=\"time-text\">{{ currentlyChosenHive.momAttributes.markedDate | date:'MMMM yyyy'}}\r\n              </h3>\r\n              <h3\r\n                *ngIf=\"!currentlyChosenHive.momAttributes.isMarkedDateMonthSet\"\r\n                class=\"time-text\">{{ currentlyChosenHive.momAttributes.markedDate | date:'yyyy'}}\r\n              </h3>\r\n              <p class = \"marked-date-description\">\r\n                {{ currentlyChosenHive.momAttributes.markedDescription }}\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <img src=\"assets/img/synnip2evOk.png\" alt=\"ii\">\r\n          <h3\r\n            *ngIf=\"currentlyChosenHive.momAttributes.isBirthdayDateMonthSet\"\r\n            class=\"time-text\" style=\"margin-bottom: -15px !important;\">\r\n            {{ currentlyChosenHive.momAttributes.birthday | date:'MMMM yyyy'}}\r\n          </h3>\r\n          <h3\r\n            *ngIf=\"!currentlyChosenHive.momAttributes.isBirthdayDateMonthSet\"\r\n            class=\"time-text\" style=\"margin-bottom: -15px !important;\">\r\n            {{ currentlyChosenHive.momAttributes.birthday | date:'yyyy'}}\r\n          </h3>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-3.5\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary first-from-top-button\"\r\n        (click)=\"onChangeMotherStatusButtonClick(momStatusEnum.SEEN)\">\r\n        <img\r\n          src=\"assets/img/n2htudVertical.png\"\r\n          alt=\"ii\"\r\n          style=\"height: 100px\">\r\n      </button>\r\n      <br>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary second-from-top-button\"\r\n        (click)=\"onOpenMomStatusSectionEditButton()\">\r\n        <img\r\n          src=\"assets/img/muudaNupp.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n      <br>\r\n      <button\r\n        *ngIf=\"layingEggsSectionTimeText != 'täna'\"\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-success third-from-top-button\"\r\n        (click)=\"saveLayingEggsSectionValues(true)\">\r\n        <img\r\n          src=\"assets/img/check.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n      <button\r\n        *ngIf=\"layingEggsSectionTimeText === 'täna'\"\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary third-from-top-button\"\r\n        (click)=\"onOpenWhenSeenMotherLayingEggsEditButton()\">\r\n        <img\r\n          src=\"assets/img/muudaNupp.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n      <br>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary fourth-from-top-button\"\r\n        (click)=\"onOpenWhenMotherMarkedEditButton()\">\r\n        <img\r\n          src=\"assets/img/muudaNupp.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n      <br>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary fifth-from-top-button\"\r\n        (click)=\"onOpenWhenMotherBirthdayEditButton()\"\r\n        style=\"margin-bottom: 0 !important;\">\r\n        <img\r\n          src=\"assets/img/muudaNupp.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<jw-modal id=\"mother-un-caged-edit\" style=\"max-width: 50rem; height: 45rem\" [smallModal]=\"true\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Millal see ema sai puurist tarru lastud?\r\n        </h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseMomStatusSectionEditButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-4\">\r\n        <img src=\"assets/img/puuristV2lja.png\" alt=\"\">\r\n        <br>\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"un-caged\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnMomStatusSelection === actionTimeEnum.TODAY\"\r\n                (change)=\"radioBtnMomStatusSelected(actionTimeEnum.TODAY)\">\r\n              Täna\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input type=\"radio\" name=\"un-caged\"\r\n                     class=\"bigRadio\"\r\n                     [checked]=\"radioBtnMomStatusSelection === actionTimeEnum.PAST_DATE\"\r\n                     (change)=\"radioBtnMomStatusSelected(actionTimeEnum.PAST_DATE)\">\r\n              &nbsp;&nbsp;&nbsp;\r\n              <input\r\n                type=\"number\"\r\n                size=\"3\"\r\n                class=\"num\"\r\n                [(ngModel)]=\"radioBtnStatusPastDateInputValue\"\r\n                (ngModelChange)=\"radioBtnMomStatusSelected(actionTimeEnum.PAST_DATE)\"> päeva tagasi\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div\r\n          *ngIf=\"momStatusInitialValueText\"\r\n          class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input type=\"radio\" name=\"un-caged\"\r\n                     class=\"bigRadio\"\r\n                     (change)=\"radioBtnMomStatusSelected(actionTimeEnum.INITIAL_DATE)\">\r\n              &nbsp;\r\n              <img src=\"assets/img/tagasi.png\" alt=\"\" style=\"height: 45px\">\r\n              ({{ momStatusInitialValueText }})\r\n            </h2>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-7\">\r\n        <div class=\"row\">\r\n          <h2>Ema staatus ei ole \"puurist vabastatud\"?</h2>\r\n        </div>\r\n        <div class=\"row option\">\r\n          <h2>Vali teine ema staatus:&nbsp;&nbsp;&nbsp;</h2>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-primary\"\r\n            style=\"width: 200px; height: 80px; margin: 0px\">\r\n            <img\r\n              src=\"assets/img/muuda.png\"\r\n              alt=\"ii\"\r\n              style=\"height: 65px\"\r\n              (click)=\"onChangeMotherStatusButtonClick()\">\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</jw-modal>\r\n\r\n\r\n<jw-modal id=\"mother-laying-eggs-edit\" [smallModal]=\"true\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Millal nägid viimati, et see ema munes?\r\n        </h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseWhenSeenMotherLayingEggsEditButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-5\">\r\n        <img src=\"assets/img/munebOK.png\" alt=\"\">\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"laying_eggs\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnLayingEggsSelection === actionTimeEnum.TODAY\"\r\n                (change)=\"radioBtnLayingEggsSelected(actionTimeEnum.TODAY)\">\r\n              Täna\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input type=\"radio\" name=\"laying_eggs\"\r\n                     class=\"bigRadio\"\r\n                     [checked]=\"radioBtnLayingEggsSelection === actionTimeEnum.PAST_DATE\"\r\n                     (change)=\"radioBtnLayingEggsSelected(actionTimeEnum.PAST_DATE)\">\r\n              &nbsp;&nbsp;&nbsp;\r\n              <input\r\n                type=\"number\"\r\n                size=\"3\"\r\n                class=\"num\"\r\n                [(ngModel)]=\"radioBtnLayingEggsPastDateInputValue\"\r\n                (ngModelChange)=\"radioBtnLayingEggsSelected(actionTimeEnum.PAST_DATE)\">\r\n              päeva tagasi\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div\r\n          *ngIf=\"layingEggsInitialValueText\"\r\n          class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"laying_eggs\"\r\n                class=\"bigRadio\"\r\n                (change)=\"radioBtnLayingEggsSelected(actionTimeEnum.INITIAL_DATE)\">\r\n              &nbsp;\r\n              <img src=\"assets/img/tagasi.png\" alt=\"\" style=\"height: 45px\">\r\n              ({{ layingEggsInitialValueText }})\r\n            </h2>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <img src=\"assets/img/munebNot.png\" alt=\"\">\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"laying_eggs\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnLayingEggsSelection === actionTimeEnum.NO_ACTION\"\r\n                (change)=\"radioBtnLayingEggsSelected(actionTimeEnum.NO_ACTION)\">\r\n              Ei ole näinud, et muneks\r\n            </h2>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</jw-modal>\r\n\r\n\r\n<jw-modal id=\"mother-marked-edit\" [smallModal]=\"true\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Kui korralikult on ema märgistatud ja millal?\r\n        </h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseWhenMotherMarkedEditButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"col\">\r\n      <div class=\"row\">\r\n        <div class=\"col-4\">\r\n          <img src=\"assets/img/marked.png\" alt=\"\">\r\n          <div class=\"radio option2\">\r\n            <label>\r\n              <h2>\r\n                <input\r\n                  type=\"radio\"\r\n                  name=\"marked_quality\"\r\n                  class=\"bigRadio\"\r\n                  [checked]=\"radioBtnMarkedStatusSelection === markedStatusEnum.MARKED\"\r\n                  (change)=\"radioBtnMarkedStatusSelected(markedStatusEnum.MARKED)\">\r\n                Korralik märgistus\r\n              </h2>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <img src=\"assets/img/attention.png\" alt=\"\">\r\n          <div class=\"radio option2\" style=\"font-size: 33px\">\r\n            <label>\r\n              <h2>\r\n                <input\r\n                  type=\"radio\"\r\n                  name=\"marked_quality\"\r\n                  class=\"bigRadio\"\r\n                  [checked]=\"radioBtnMarkedStatusSelection === markedStatusEnum.ATTENTION\"\r\n                  (change)=\"radioBtnMarkedStatusSelected(markedStatusEnum.ATTENTION)\">\r\n                Märgistusega on probleeme. <br>\r\n\r\n              </h2>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <img src=\"assets/img/unmarked.png\" alt=\"\">\r\n          <div class=\"radio option2\">\r\n            <label>\r\n              <h2>\r\n                <input\r\n                  type=\"radio\"\r\n                  name=\"marked_quality\"\r\n                  class=\"bigRadio\"\r\n                  [checked]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n                  (change)=\"radioBtnMarkedStatusSelected(markedStatusEnum.UNMARKED)\">\r\n                Ei ole märgistatud\r\n              </h2>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr style=\"margin-top: 10px; margin-bottom: 10px\">\r\n      <div class=\"row\" style=\"font-size: 33px\">\r\n        <div class=\"col-1\"></div>\r\n        <div class=\"col-11\">\r\n          Märksõna:\r\n          <input\r\n            type=\"text\"\r\n            size=\"10\"\r\n            class=\"description\"\r\n            [disabled]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n            [(ngModel)]=\"markedSectionAdditionlInfoText\"\r\n            (ngModelChange)=\"saveMarkedSectionValues()\">\r\n        </div>\r\n      </div>\r\n      <hr style=\"margin-top: 10px; margin-bottom: 0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <div class=\"radio option\" style=\"margin-top: 25px\">\r\n            <label>\r\n              <h2>\r\n                <input type=\"radio\" name=\"when_marked\"\r\n                       class=\"bigRadio\"\r\n                       [disabled]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n                       (change)=\"radioBtnMarkedTimeSelected(actionTimeEnum.UNKNOWN)\"\r\n                       [checked]=\"radioBtnMarkedTimeSelection === actionTimeEnum.UNKNOWN\">\r\n                &nbsp;Teadmata millal märgistatud\r\n              </h2>\r\n            </label>\r\n          </div>\r\n          <div style=\"margin-top: 37px\">\r\n            <div>\r\n              <label class=\"option-row\">\r\n                <input type=\"radio\"\r\n                       name=\"when_marked\"\r\n                       class=\"bigRadio\"\r\n                       [disabled]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n                       (change)=\"radioBtnMarkedTimeSelected(actionTimeEnum.PAST_DATE)\"\r\n                       [checked]=\"radioBtnMarkedTimeSelection === actionTimeEnum.PAST_DATE\">\r\n                <h2>&nbsp;Märgistatud:</h2>\r\n                <select\r\n                  name=\"month_marked\"\r\n                  class=\"custom-select\"\r\n                  size=\"1\"\r\n                  [disabled]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n                  [(ngModel)]=\"markedTimeMonthValue\"\r\n                  (change)=\"radioBtnMarkedTimeSelected(actionTimeEnum.PAST_DATE)\">\r\n                  <option value=\"\">Kuu</option>\r\n                  <option value=\"0\">Jaanuar</option>\r\n                  <option value=\"1\">Veebruar</option>\r\n                  <option value=\"2\">Märts</option>\r\n                  <option value=\"3\">Aprill</option>\r\n                  <option value=\"4\">Mai</option>\r\n                  <option value=\"5\">Juuni</option>\r\n                  <option value=\"6\">Juuli</option>\r\n                  <option value=\"7\">August</option>\r\n                  <option value=\"8\">September</option>\r\n                  <option value=\"9\">Oktoober</option>\r\n                  <option value=\"10\">November</option>\r\n                  <option value=\"11\">Detsember</option>\r\n                </select>\r\n                <select\r\n                  name=\"year_marked\"\r\n                  class=\"custom-select\"\r\n                  size=\"1\"\r\n                  [disabled]=\"radioBtnMarkedStatusSelection === markedStatusEnum.UNMARKED\"\r\n                  [(ngModel)]=\"markedTimeYearValue\"\r\n                  (change)=\"radioBtnMarkedTimeSelected(actionTimeEnum.PAST_DATE)\">\r\n                  <option value=\"\" disabled hidden>Aasta</option>\r\n                  <option value=\"2017\">2017</option>\r\n                  <option value=\"2018\">2018</option>\r\n                  <option value=\"2019\">2019</option>\r\n                  <option value=\"2020\">2020</option>\r\n                  <option value=\"2021\">2021</option>\r\n                </select>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</jw-modal>\r\n\r\n\r\n<jw-modal id=\"mother-birthday-edit\" [smallModal]=\"true\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Millal on see ema koorunud?\r\n        </h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseWhenMotherBirthdayEditButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-5\">\r\n        <img src=\"assets/img/synnip2evOk.png\" alt=\"\">\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <div class=\"radio option\" style=\"margin-top: 25px\">\r\n          <label>\r\n            <h2>\r\n              <input type=\"radio\" name=\"birthday\"\r\n                     class=\"bigRadio\"\r\n                     (change)=\"radioBtnBirthdayTimeSelected(actionTimeEnum.UNKNOWN)\"\r\n                     [checked]=\"radioBtnBirthdayTimeSelection === actionTimeEnum.UNKNOWN\">\r\n              &nbsp;Teadmata millal koorunud\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div>\r\n          <label class=\"option-row\">\r\n            <input type=\"radio\"\r\n                   name=\"birthday\"\r\n                   class=\"bigRadio\"\r\n                   (change)=\"radioBtnBirthdayTimeSelected(actionTimeEnum.PAST_DATE)\"\r\n                   [checked]=\"radioBtnBirthdayTimeSelection === actionTimeEnum.PAST_DATE\">\r\n            <select\r\n              name=\"month_marked\"\r\n              class=\"custom-select\"\r\n              size=\"1\"\r\n              style=\"width: 200px\"\r\n              [(ngModel)]=\"birthdayTimeMonthValue\"\r\n              (ngModelChange)=\"radioBtnBirthdayTimeSelected(actionTimeEnum.PAST_DATE)\">\r\n              <option value=\"\">Kuu</option>\r\n              <option value=\"0\">Jaanuar</option>\r\n              <option value=\"1\">Veebruar</option>\r\n              <option value=\"2\">Märts</option>\r\n              <option value=\"3\">Aprill</option>\r\n              <option value=\"4\">Mai</option>\r\n              <option value=\"5\">Juuni</option>\r\n              <option value=\"6\">Juuli</option>\r\n              <option value=\"7\">August</option>\r\n              <option value=\"8\">September</option>\r\n              <option value=\"9\">Oktoober</option>\r\n              <option value=\"10\">November</option>\r\n              <option value=\"11\">Detsember</option>\r\n            </select>\r\n            <select\r\n              name=\"year_marked\"\r\n              class=\"custom-select\"\r\n              size=\"1\"\r\n              [(ngModel)]=\"birthdayTimeYearValue\"\r\n              (ngModelChange)=\"radioBtnBirthdayTimeSelected(actionTimeEnum.PAST_DATE)\">\r\n              <option value=\"\" disabled hidden>Aasta</option>\r\n              <option value=\"2017\">2017</option>\r\n              <option value=\"2018\">2018</option>\r\n              <option value=\"2019\">2019</option>\r\n              <option value=\"2020\">2020</option>\r\n              <option value=\"2021\">2021</option>\r\n            </select>\r\n          </label>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"row\">\r\n          <h2>Selles tarus ei ole veel koorunud ema?</h2>\r\n        </div>\r\n        <div class=\"row option\">\r\n          <h2>Vali teine ema staatus:&nbsp;&nbsp;&nbsp;</h2>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-primary\"\r\n            style=\"width: 200px; height: 80px; margin: 0px\">\r\n            <img\r\n              src=\"assets/img/muuda.png\"\r\n              alt=\"ii\"\r\n              style=\"height: 65px\"\r\n              (click)=\"onChangeMotherStatusButtonClick()\">\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</jw-modal>\r\n"

/***/ }),

/***/ "./src/app/work/mother/un-caged/un-caged.component.ts":
/*!************************************************************!*\
  !*** ./src/app/work/mother/un-caged/un-caged.component.ts ***!
  \************************************************************/
/*! exports provided: UnCagedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnCagedComponent", function() { return UnCagedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/jw-modal/jw-modal.service */ "./src/app/util/jw-modal/jw-modal.service.ts");
/* harmony import */ var _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mom-status.enum */ "./src/app/work/mother/mom-status.enum.ts");
/* harmony import */ var _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../settings/shared/hive.model */ "./src/app/settings/shared/hive.model.ts");
/* harmony import */ var _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../marked-status.enum */ "./src/app/work/mother/marked-status.enum.ts");
/* harmony import */ var _action_time_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../action-time.enum */ "./src/app/work/mother/action-time.enum.ts");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../util/util.service */ "./src/app/util/util.service.ts");
/* harmony import */ var _mom_attributes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mom-attributes.service */ "./src/app/work/mother/mom-attributes.service.ts");
/* harmony import */ var _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../settings/shared/colonies.service */ "./src/app/settings/shared/colonies.service.ts");
/* harmony import */ var _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../util/executor/executor.service */ "./src/app/util/executor/executor.service.ts");
/* harmony import */ var _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../util/executor/controls-protection-id.enum */ "./src/app/util/executor/controls-protection-id.enum.ts");












var UnCagedComponent = /** @class */ (function () {
    function UnCagedComponent(modalService, momAttributesService, coloniesService, executorService) {
        this.modalService = modalService;
        this.momAttributesService = momAttributesService;
        this.coloniesService = coloniesService;
        this.executorService = executorService;
        this.onChangeMomStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.momStatusEnum = _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"];
        this.markedStatusEnum = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"];
        this.actionTimeEnum = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"];
        this.momStatusInitialValueText = null;
        this.radioBtnStatusPastDateInputValue = null;
        this.layingEggsInitialValueText = null;
        this.radioBtnLayingEggsPastDateInputValue = null;
        this.markedTimeMonthValue = '';
        this.markedTimeYearValue = '';
        this.birthdayTimeMonthValue = '';
        this.birthdayTimeYearValue = '';
    }
    UnCagedComponent.prototype.ngOnChanges = function () {
        this.currentlyChosenHiveInitialData = this.coloniesService.getInitialHiveData(this.currentlyChosenHive);
        this.setMotherStatusSectionValuesCorrect();
        this.setLayingEggsSectionValuesCorrect();
        this.setMarkedSectionValuesCorrect();
        this.setBirthdaySectionValuesCorrect();
    };
    UnCagedComponent.prototype.setMotherStatusSectionValuesCorrect = function () {
        this.momStatusInitialValueText = null;
        var daysFromStatusBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHive.momAttributes.statusStartingDate);
        if (daysFromStatusBeginning == 0) {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].TODAY;
            this.momStatusSectionTimeText = 'täna';
            this.radioBtnStatusPastDateInputValue = null;
        }
        else if (daysFromStatusBeginning == 1) {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE;
            this.momStatusSectionTimeText = '1 päev tagasi';
            this.radioBtnStatusPastDateInputValue = 1;
        }
        else {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE;
            this.momStatusSectionTimeText = daysFromStatusBeginning + ' päeva tagasi';
            this.radioBtnStatusPastDateInputValue = daysFromStatusBeginning;
        }
        if (this.currentlyChosenHiveInitialData &&
            this.currentlyChosenHiveInitialData.momAttributes.momStatus === _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].UN_CAGED) {
            var daysFromInitialStatusBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHiveInitialData.momAttributes.statusStartingDate);
            if (daysFromInitialStatusBeginning == 0) {
                return;
            }
            else if (daysFromInitialStatusBeginning == 1) {
                this.momStatusInitialValueText = daysFromInitialStatusBeginning + ' päev tagasi';
            }
            else {
                this.momStatusInitialValueText = daysFromInitialStatusBeginning + ' päeva tagasi';
            }
        }
    };
    UnCagedComponent.prototype.saveMotherStatusSectionValues = function (setToToday) {
        if (setToToday) {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].TODAY;
        }
        if (this.radioBtnMomStatusSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].TODAY) {
            this.currentlyChosenHive.momAttributes.statusStartingDate = new Date();
        }
        else if (this.radioBtnMomStatusSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE) {
            this.currentlyChosenHive.momAttributes.statusStartingDate =
                new Date(new Date().setHours(0, 0, 0, 0) -
                    +this.radioBtnStatusPastDateInputValue * 24 * 60 * 60 * 1000);
        }
        else if (this.radioBtnMomStatusSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].INITIAL_DATE) {
            this.currentlyChosenHive.momAttributes.statusStartingDate =
                this.currentlyChosenHiveInitialData.momAttributes.statusStartingDate;
        }
        this.executorService.exeWithTimer(this.momAttributesService.onUpdateMomAttributes, [this.currentlyChosenHive], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_11__["ControlsProtectionIdEnum"].MOM);
        this.setMotherStatusSectionValuesCorrect();
    };
    UnCagedComponent.prototype.setLayingEggsSectionValuesCorrect = function () {
        this.layingEggsInitialValueText = null;
        if (this.currentlyChosenHive.momAttributes.isLayingEggs) {
            var daysFromLayingEggsBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHive.momAttributes.eggsLastSeen);
            if (daysFromLayingEggsBeginning == 0) {
                this.radioBtnLayingEggsSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].TODAY;
                this.layingEggsSectionTimeText = 'täna';
                this.radioBtnLayingEggsPastDateInputValue = null;
            }
            else if (daysFromLayingEggsBeginning == 1) {
                this.radioBtnLayingEggsSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE;
                this.layingEggsSectionTimeText = '1 päev tagasi';
                this.radioBtnLayingEggsPastDateInputValue = 1;
            }
            else {
                this.radioBtnLayingEggsSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE;
                this.layingEggsSectionTimeText = daysFromLayingEggsBeginning + ' päeva tagasi';
                this.radioBtnLayingEggsPastDateInputValue = daysFromLayingEggsBeginning;
            }
        }
        else {
            this.radioBtnLayingEggsSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].NO_ACTION;
            this.layingEggsSectionTimeText = '';
            this.radioBtnLayingEggsPastDateInputValue = null;
        }
        if (this.currentlyChosenHiveInitialData &&
            this.currentlyChosenHiveInitialData.momAttributes.momStatus === _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].UN_CAGED) {
            var daysFromInitialStatusBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHiveInitialData.momAttributes.eggsLastSeen);
            if (daysFromInitialStatusBeginning == 0 ||
                !this.currentlyChosenHiveInitialData.momAttributes.isLayingEggs) {
                return;
            }
            else if (daysFromInitialStatusBeginning == 1) {
                this.layingEggsInitialValueText = daysFromInitialStatusBeginning + ' päev tagasi';
            }
            else {
                this.layingEggsInitialValueText = daysFromInitialStatusBeginning + ' päeva tagasi';
            }
        }
    };
    UnCagedComponent.prototype.saveLayingEggsSectionValues = function (setToToday) {
        if (setToToday) {
            this.radioBtnLayingEggsSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].TODAY;
        }
        if (this.radioBtnLayingEggsSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].TODAY) {
            this.currentlyChosenHive.momAttributes.isLayingEggs = true;
            this.currentlyChosenHive.momAttributes.eggsLastSeen = new Date();
        }
        else if (this.radioBtnLayingEggsSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE) {
            this.currentlyChosenHive.momAttributes.isLayingEggs = true;
            this.currentlyChosenHive.momAttributes.eggsLastSeen =
                new Date(new Date().setHours(0, 0, 0, 0) -
                    +this.radioBtnLayingEggsPastDateInputValue * 24 * 60 * 60 * 1000);
        }
        else if (this.radioBtnLayingEggsSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].INITIAL_DATE) {
            this.currentlyChosenHive.momAttributes.isLayingEggs = true;
            this.currentlyChosenHive.momAttributes.eggsLastSeen =
                this.currentlyChosenHiveInitialData.momAttributes.eggsLastSeen;
        }
        else if (this.radioBtnLayingEggsSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].NO_ACTION) {
            this.currentlyChosenHive.momAttributes.isLayingEggs = false;
            this.currentlyChosenHive.momAttributes.eggsLastSeen = null;
        }
        this.executorService.exeWithTimer(this.momAttributesService.onUpdateMomAttributes, [this.currentlyChosenHive], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_11__["ControlsProtectionIdEnum"].MOM);
        this.setLayingEggsSectionValuesCorrect();
    };
    UnCagedComponent.prototype.setMarkedSectionValuesCorrect = function () {
        this.markedSectionAdditionlInfoText = this.currentlyChosenHive.momAttributes.markedDescription;
        if (this.currentlyChosenHive.momAttributes.markedStatus == _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].MARKED) {
            this.radioBtnMarkedStatusSelection = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].MARKED;
        }
        else if (this.currentlyChosenHive.momAttributes.markedStatus == _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].ATTENTION) {
            this.radioBtnMarkedStatusSelection = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].ATTENTION;
        }
        else if (this.currentlyChosenHive.momAttributes.markedStatus == _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].UNMARKED) {
            this.radioBtnMarkedStatusSelection = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].UNMARKED;
            this.radioBtnMarkedTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN;
        }
        if (this.currentlyChosenHive.momAttributes.markedDate) {
            this.radioBtnMarkedTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE;
            var markedDate = new Date(this.currentlyChosenHive.momAttributes.markedDate);
            this.markedTimeYearValue = markedDate.getFullYear().toString();
            if (this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet) {
                this.markedTimeMonthValue = markedDate.getMonth().toString();
            }
            else {
                this.markedTimeMonthValue = '';
            }
        }
        else {
            this.radioBtnMarkedTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN;
            this.markedTimeMonthValue = '';
            this.markedTimeYearValue = '';
        }
    };
    UnCagedComponent.prototype.saveMarkedSectionValues = function () {
        if (this.radioBtnMarkedStatusSelection === _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].MARKED) {
            this.currentlyChosenHive.momAttributes.markedStatus = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].MARKED;
            this.currentlyChosenHive.momAttributes.markedDescription = this.markedSectionAdditionlInfoText;
            if (this.radioBtnMarkedTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN) {
                this.currentlyChosenHive.momAttributes.markedDate = null;
            }
            else if (this.radioBtnMarkedTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE) {
                this.currentlyChosenHive.momAttributes.markedDate = new Date();
                this.currentlyChosenHive.momAttributes.markedDate.setFullYear(+this.markedTimeYearValue);
                if (this.markedTimeMonthValue === '') {
                    this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = false;
                }
                else {
                    this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = true;
                    this.currentlyChosenHive.momAttributes.markedDate.setMonth(+this.markedTimeMonthValue);
                }
            }
        }
        else if (this.radioBtnMarkedStatusSelection === _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].ATTENTION) {
            this.currentlyChosenHive.momAttributes.markedStatus = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].ATTENTION;
            this.currentlyChosenHive.momAttributes.markedDescription = this.markedSectionAdditionlInfoText;
            if (this.radioBtnMarkedTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN) {
                this.currentlyChosenHive.momAttributes.markedDate = null;
            }
            else if (this.radioBtnMarkedTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE) {
                this.currentlyChosenHive.momAttributes.markedDate = new Date();
                this.currentlyChosenHive.momAttributes.markedDate.setFullYear(+this.markedTimeYearValue);
                if (this.markedTimeMonthValue === '') {
                    this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = false;
                }
                else {
                    this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = true;
                    this.currentlyChosenHive.momAttributes.markedDate.setMonth(+this.markedTimeMonthValue);
                }
            }
        }
        else if (this.radioBtnMarkedStatusSelection === _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].UNMARKED) {
            this.currentlyChosenHive.momAttributes.markedStatus = _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].UNMARKED;
            this.currentlyChosenHive.momAttributes.markedDescription = '';
            this.currentlyChosenHive.momAttributes.markedDate = null;
            this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = false;
        }
        this.executorService.exeWithTimer(this.momAttributesService.onUpdateMomAttributes, [this.currentlyChosenHive], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_11__["ControlsProtectionIdEnum"].MOM);
        this.setMarkedSectionValuesCorrect();
    };
    UnCagedComponent.prototype.setBirthdaySectionValuesCorrect = function () {
        if (this.currentlyChosenHive.momAttributes.birthday) {
            this.radioBtnBirthdayTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE;
            var birthday = new Date(this.currentlyChosenHive.momAttributes.birthday);
            this.birthdayTimeYearValue = birthday.getFullYear().toString();
            if (this.currentlyChosenHive.momAttributes.isBirthdayDateMonthSet) {
                this.birthdayTimeMonthValue = birthday.getMonth().toString();
            }
            else {
                this.birthdayTimeMonthValue = '';
            }
        }
        else {
            this.radioBtnBirthdayTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN;
            this.birthdayTimeMonthValue = '';
            this.birthdayTimeYearValue = '';
        }
    };
    UnCagedComponent.prototype.saveBirthdaySectionValues = function () {
        if (this.radioBtnBirthdayTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN) {
            this.currentlyChosenHive.momAttributes.birthday = null;
            this.currentlyChosenHive.momAttributes.isMarkedDateMonthSet = false;
        }
        else if (this.radioBtnBirthdayTimeSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE) {
            this.currentlyChosenHive.momAttributes.birthday = new Date();
            this.currentlyChosenHive.momAttributes.birthday.setFullYear(+this.birthdayTimeYearValue);
            if (!this.birthdayTimeMonthValue) {
                this.currentlyChosenHive.momAttributes.isBirthdayDateMonthSet = false;
            }
            else {
                this.currentlyChosenHive.momAttributes.isBirthdayDateMonthSet = true;
                this.currentlyChosenHive.momAttributes.birthday.setMonth(+this.birthdayTimeMonthValue);
            }
        }
        this.executorService.exeWithTimer(this.momAttributesService.onUpdateMomAttributes, [this.currentlyChosenHive], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_11__["ControlsProtectionIdEnum"].MOM);
        this.setBirthdaySectionValuesCorrect();
    };
    UnCagedComponent.prototype.radioBtnMomStatusSelected = function (selectedActionTime) {
        this.radioBtnMomStatusSelection = selectedActionTime;
        this.saveMotherStatusSectionValues();
    };
    UnCagedComponent.prototype.radioBtnLayingEggsSelected = function (selectedActionTime) {
        this.radioBtnLayingEggsSelection = selectedActionTime;
        this.saveLayingEggsSectionValues();
    };
    UnCagedComponent.prototype.radioBtnMarkedStatusSelected = function (markedStatusSelected) {
        this.radioBtnMarkedStatusSelection = markedStatusSelected;
        if (markedStatusSelected === _marked_status_enum__WEBPACK_IMPORTED_MODULE_5__["MarkedStatusEnum"].UNMARKED) {
            this.radioBtnMarkedTimeSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].UNKNOWN;
            this.markedSectionAdditionlInfoText = '';
        }
        this.saveMarkedSectionValues();
    };
    UnCagedComponent.prototype.radioBtnMarkedTimeSelected = function (selectedActionTime) {
        if (selectedActionTime === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE && !this.markedTimeYearValue) {
            this.markedTimeYearValue = '2019';
        }
        this.radioBtnMarkedTimeSelection = selectedActionTime;
        this.saveMarkedSectionValues();
    };
    UnCagedComponent.prototype.radioBtnBirthdayTimeSelected = function (selectedActionTime) {
        if (selectedActionTime === _action_time_enum__WEBPACK_IMPORTED_MODULE_6__["ActionTimeEnum"].PAST_DATE && !this.birthdayTimeYearValue) {
            this.birthdayTimeYearValue = '2019';
        }
        this.radioBtnBirthdayTimeSelection = selectedActionTime;
        this.saveBirthdaySectionValues();
    };
    UnCagedComponent.prototype.onChangeMotherStatusButtonClick = function (newMotherStatus) {
        this.modalService.close('mother-un-caged-edit');
        this.modalService.close('mother-birthday-edit');
        this.onChangeMomStatus.emit(newMotherStatus);
    };
    UnCagedComponent.prototype.onOpenMomStatusSectionEditButton = function () {
        this.modalService.open('mother-un-caged-edit');
    };
    UnCagedComponent.prototype.onCloseMomStatusSectionEditButton = function () {
        this.setMotherStatusSectionValuesCorrect();
        this.modalService.close('mother-un-caged-edit');
    };
    UnCagedComponent.prototype.onOpenWhenSeenMotherLayingEggsEditButton = function () {
        this.modalService.open('mother-laying-eggs-edit');
    };
    UnCagedComponent.prototype.onCloseWhenSeenMotherLayingEggsEditButton = function () {
        this.modalService.close('mother-laying-eggs-edit');
    };
    UnCagedComponent.prototype.onOpenWhenMotherMarkedEditButton = function () {
        this.modalService.open('mother-marked-edit');
    };
    UnCagedComponent.prototype.onCloseWhenMotherMarkedEditButton = function () {
        this.modalService.close('mother-marked-edit');
    };
    UnCagedComponent.prototype.onOpenWhenMotherBirthdayEditButton = function () {
        this.modalService.open('mother-birthday-edit');
    };
    UnCagedComponent.prototype.onCloseWhenMotherBirthdayEditButton = function () {
        this.modalService.close('mother-birthday-edit');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_4__["Hive"])
    ], UnCagedComponent.prototype, "currentlyChosenHive", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UnCagedComponent.prototype, "onChangeMomStatus", void 0);
    UnCagedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-un-caged',
            template: __webpack_require__(/*! ./un-caged.component.html */ "./src/app/work/mother/un-caged/un-caged.component.html"),
            styles: [__webpack_require__(/*! ./un-caged.component.css */ "./src/app/work/mother/un-caged/un-caged.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_2__["JwModalService"],
            _mom_attributes_service__WEBPACK_IMPORTED_MODULE_8__["MomAttributesService"],
            _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_9__["ColoniesService"],
            _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_10__["ExecutorService"]])
    ], UnCagedComponent);
    return UnCagedComponent;
}());



/***/ }),

/***/ "./src/app/work/mother/unknown/unknown.component.css":
/*!***********************************************************!*\
  !*** ./src/app/work/mother/unknown/unknown.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  max-height: 80px;\r\n  max-width: 180px;\r\n}\r\n\r\nimg.x {\r\n  height: 40px;\r\n}\r\n\r\n.card-body {\r\n  padding: 10px;\r\n}\r\n\r\nh3.time-text {\r\n  margin-top: -10px;\r\n  margin-bottom: 0;\r\n  max-width: 214px;\r\n}\r\n\r\nbutton.change-mother-status-button {\r\n  width: 180px;\r\n  height: 80px;\r\n  margin: 0;\r\n}\r\n\r\ndiv.pictures-column {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n\r\np.marked-date-description {\r\n  font-size: 31px;\r\n  margin-top: -10px;\r\n}\r\n\r\nbutton.closing {\r\n  display: inline-block;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  padding: 2px 2px 2px 2px;\r\n  margin: 0;\r\n  margin-right: 10px;\r\n}\r\n\r\ndiv.option {\r\n  margin-top: 50px;\r\n}\r\n\r\ndiv.option2 {\r\n  margin-top: 20px;\r\n}\r\n\r\ndiv.twoButtons {\r\n  margin-top: 200px;\r\n}\r\n\r\ninput.bigRadio {\r\n  width: 35px;\r\n  height: 35px\r\n}\r\n\r\n.up-bar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\ninput.num {\r\n  width: 70px;\r\n  height: 35px\r\n}\r\n\r\ninput.description {\r\n  width: 170px;\r\n  height: 35px\r\n}\r\n\r\nimg.pencil {\r\n  height: 40px;\r\n}\r\n\r\nbutton {\r\n  height: 60px;\r\n  width: 60px;\r\n  margin-top: 20px;\r\n  margin-left: 9px;\r\n}\r\n\r\n.custom-select {\r\n  display: inline;\r\n  width: 150px;\r\n  font-size: 28px;\r\n  margin-left: 18px;\r\n}\r\n\r\n.option-row {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n\r\nbutton.first-from-top-button {\r\n  height: 115px;\r\n  width: 60px;\r\n  margin: 0;\r\n  margin-left: 9px\r\n}\r\n\r\nbutton.second-from-top-button {\r\n  margin-top: 30px;\r\n}\r\n\r\nbutton.third-from-top-button {\r\n  margin-top: 65px;\r\n}\r\n\r\nbutton.fourth-from-top-button {\r\n  margin-top: 75px;\r\n}\r\n\r\nbutton.fifth-from-top-button {\r\n  margin-top: 100px;\r\n}\r\n\r\ndiv.marked-image-block {\r\n  margin-top: 30px;\r\n  height: 156px;\r\n}\r\n\r\ndiv.second-image-block {\r\n  margin-top: 30px;\r\n  height: 110px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9tb3RoZXIvdW5rbm93bi91bmtub3duLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLFVBQVU7Q0FDWDs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFvQjtFQUFwQix5QkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0Isb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGFBQWE7RUFDYixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztDQUNmOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL3dvcmsvbW90aGVyL3Vua25vd24vdW5rbm93bi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICBtYXgtaGVpZ2h0OiA4MHB4O1xyXG4gIG1heC13aWR0aDogMTgwcHg7XHJcbn1cclxuXHJcbmltZy54IHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmgzLnRpbWUtdGV4dCB7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBtYXgtd2lkdGg6IDIxNHB4O1xyXG59XHJcblxyXG5idXR0b24uY2hhbmdlLW1vdGhlci1zdGF0dXMtYnV0dG9uIHtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuZGl2LnBpY3R1cmVzLWNvbHVtbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbnAubWFya2VkLWRhdGUtZGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMzFweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuYnV0dG9uLmNsb3Npbmcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuZGl2Lm9wdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuZGl2Lm9wdGlvbjIge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmRpdi50d29CdXR0b25zIHtcclxuICBtYXJnaW4tdG9wOiAyMDBweDtcclxufVxyXG5cclxuaW5wdXQuYmlnUmFkaW8ge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweFxyXG59XHJcblxyXG4udXAtYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dC5udW0ge1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogMzVweFxyXG59XHJcblxyXG5pbnB1dC5kZXNjcmlwdGlvbiB7XHJcbiAgd2lkdGg6IDE3MHB4O1xyXG4gIGhlaWdodDogMzVweFxyXG59XHJcblxyXG5pbWcucGVuY2lsIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDlweDtcclxufVxyXG5cclxuLmN1c3RvbS1zZWxlY3Qge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG59XHJcblxyXG4ub3B0aW9uLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5maXJzdC1mcm9tLXRvcC1idXR0b24ge1xyXG4gIGhlaWdodDogMTE1cHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiA5cHhcclxufVxyXG5cclxuYnV0dG9uLnNlY29uZC1mcm9tLXRvcC1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbi50aGlyZC1mcm9tLXRvcC1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDY1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5mb3VydGgtZnJvbS10b3AtYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG59XHJcblxyXG5idXR0b24uZmlmdGgtZnJvbS10b3AtYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuZGl2Lm1hcmtlZC1pbWFnZS1ibG9jayB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBoZWlnaHQ6IDE1NnB4O1xyXG59XHJcblxyXG5kaXYuc2Vjb25kLWltYWdlLWJsb2NrIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGhlaWdodDogMTEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/work/mother/unknown/unknown.component.html":
/*!************************************************************!*\
  !*** ./src/app/work/mother/unknown/unknown.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-8.5 pictures-column\">\r\n      <div\r\n        class=\"card bg-light\"\r\n        style=\"max-width: 16rem; height: 719px; margin-left:auto;margin-right:auto;text-align:center\">\r\n        <div class=\"card-header\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-primary change-mother-status-button\">\r\n            <img\r\n              src=\"assets/img/muuda.png\"\r\n              alt=\"ii\"\r\n              style=\"height: 65px\"\r\n              (click)=\"onChangeMotherStatusButtonClick(null)\">\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"card-body\" style=\"background-color: white\">\r\n\r\n\r\n          <img\r\n            src=\"assets/img/teadmata.jpg\" alt=\"ii\">\r\n          <h3 class=\"time-text\">{{ momStatusSectionTimeText }}</h3>\r\n\r\n\r\n          <div\r\n            *ngIf=\"!currentlyChosenHive.momAttributes.controlFrameStartDate\"\r\n            class=\"second-image-block\">\r\n            <img\r\n              src=\"assets/img/controlFrameNot.png\" alt=\"ii\"\r\n              style=\"margin-top: 7px\">\r\n            <h3 class=\"time-text\">{{ controlFrameSectionTimeText }}</h3>\r\n          </div>\r\n          <div\r\n            *ngIf=\"currentlyChosenHive.momAttributes.controlFrameStartDate\"\r\n            class=\"second-image-block\">\r\n            <img\r\n              src=\"assets/img/controlFrameOk.png\" alt=\"ii\"\r\n              style=\"margin-top: 7px\">\r\n            <h3 class=\"time-text\">{{ controlFrameSectionTimeText }}</h3>\r\n          </div>\r\n\r\n\r\n          <div\r\n            *ngIf=\"currentlyChosenHive.momAttributes.controlFrameStartDate &&\r\n                        !currentlyChosenHive.momAttributes.cocoonChosenDate\"\r\n            class=\"second-image-block\">\r\n            <img\r\n              src=\"assets/img/cocoonNot.png\" alt=\"ii\"\r\n              style=\"margin-top: 7px\">\r\n            <h3 class=\"time-text\">{{ cocoonSectionTimeText }}</h3>\r\n          </div>\r\n          <div\r\n            *ngIf=\"currentlyChosenHive.momAttributes.controlFrameStartDate &&\r\n                         currentlyChosenHive.momAttributes.cocoonChosenDate\"\r\n            class=\"second-image-block\">\r\n            <img\r\n              src=\"assets/img/cocoonOk.png\" alt=\"ii\"\r\n              style=\"margin-top: 7px\">\r\n            <h3 class=\"time-text\">{{ cocoonSectionTimeText }}</h3>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-3.5\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary first-from-top-button\"\r\n        (click)=\"onChangeMotherStatusButtonClick(momStatusEnum.MISSING)\">\r\n        <img\r\n          src=\"assets/img/kadunudVertical.jpg\"\r\n          alt=\"ii\"\r\n          style=\"max-height: 100px; max-width: 55px;\">\r\n      </button>\r\n      <br>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary second-from-top-button\"\r\n        (click)=\"onOpenMomStatusSectionEditButton()\">\r\n        <img\r\n          src=\"assets/img/muudaNupp.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n      <br>\r\n      <button\r\n        *ngIf=\"!currentlyChosenHive.momAttributes.controlFrameStartDate\"\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-success third-from-top-button\"\r\n        (click)=\"saveControlFrameSectionValues(true)\">\r\n        <img\r\n          src=\"assets/img/check.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n      <button\r\n        *ngIf=\"currentlyChosenHive.momAttributes.controlFrameStartDate\"\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary third-from-top-button\"\r\n        (click)=\"onOpenWhenControlFrameEditButton()\">\r\n        <img\r\n          src=\"assets/img/muudaNupp.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n      <br>\r\n      <button\r\n        *ngIf=\"currentlyChosenHive.momAttributes.controlFrameStartDate &&\r\n                !currentlyChosenHive.momAttributes.cocoonChosenDate\"\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-success fourth-from-top-button\"\r\n        (click)=\"saveCocoonSectionValues(true)\">\r\n        <img\r\n          src=\"assets/img/check.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n      <button\r\n        *ngIf=\"currentlyChosenHive.momAttributes.controlFrameStartDate &&\r\n                currentlyChosenHive.momAttributes.cocoonChosenDate\"\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary fourth-from-top-button\"\r\n        (click)=\"onOpenWhenCocoonEditButton()\">\r\n        <img\r\n          src=\"assets/img/muudaNupp.png\"\r\n          alt=\"ii\"\r\n          class=\"pencil\">\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<jw-modal id=\"mother-unknown-edit\" style=\"max-width: 50rem; height: 45rem\" [smallModal]=\"true\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Mis ajast on teadmata, kas ema on tarus olemas?</h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseMomStatusSectionEditButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-4\">\r\n        <img src=\"assets/img/teadmata.jpg\" alt=\"\">\r\n        <br>\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"unknown\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnMomStatusSelection === actionTimeEnum.TODAY\"\r\n                (change)=\"radioBtnMomStatusSelected(actionTimeEnum.TODAY)\">\r\n              Täna\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input type=\"radio\" name=\"unknown\"\r\n                     class=\"bigRadio\"\r\n                     [checked]=\"radioBtnMomStatusSelection === actionTimeEnum.PAST_DATE\"\r\n                     (change)=\"radioBtnMomStatusSelected(actionTimeEnum.PAST_DATE)\">\r\n              &nbsp;&nbsp;&nbsp;\r\n              <input\r\n                type=\"number\"\r\n                size=\"3\"\r\n                class=\"num\"\r\n                [(ngModel)]=\"radioBtnStatusPastDateInputValue\"\r\n                (ngModelChange)=\"radioBtnMomStatusSelected(actionTimeEnum.PAST_DATE)\"> päeva tagasi\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div\r\n          *ngIf=\"momStatusInitialValueText\"\r\n          class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input type=\"radio\" name=\"unknown\"\r\n                     class=\"bigRadio\"\r\n                     (change)=\"radioBtnMomStatusSelected(actionTimeEnum.INITIAL_DATE)\">\r\n              &nbsp;\r\n              <img src=\"assets/img/tagasi.png\" alt=\"\" style=\"height: 45px\">\r\n              ({{ momStatusInitialValueText }})\r\n            </h2>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-7\">\r\n        <div class=\"row\">\r\n          <h2>Ema staatus ei ole \"teadmata kas on olemas\"?</h2>\r\n        </div>\r\n        <div class=\"row option\">\r\n          <h2>Vali teine ema staatus:&nbsp;&nbsp;&nbsp;</h2>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-light btn-outline-primary\"\r\n            style=\"width: 200px; height: 80px; margin: 0px\">\r\n            <img\r\n              src=\"assets/img/muuda.png\"\r\n              alt=\"ii\"\r\n              style=\"height: 65px\"\r\n              (click)=\"onChangeMotherStatusButtonClick()\">\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</jw-modal>\r\n\r\n\r\n<jw-modal id=\"mother-control-frame-edit\" [smallModal]=\"true\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Millal panin praegu peres oleva kontrollraami sisse?\r\n        </h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseWhenControlFrameEditButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-5\">\r\n        <img src=\"assets/img/controlFrameOk.png\" alt=\"\">\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"control_frame\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnControlFrameSelection === actionTimeEnum.TODAY\"\r\n                (change)=\"radioBtnControlFrameSelected(actionTimeEnum.TODAY)\">\r\n              Täna\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"control_frame\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnControlFrameSelection === actionTimeEnum.PAST_DATE\"\r\n                (change)=\"radioBtnControlFrameSelected(actionTimeEnum.PAST_DATE)\">\r\n              &nbsp;&nbsp;&nbsp;\r\n              <input\r\n                type=\"number\"\r\n                size=\"3\"\r\n                class=\"num\"\r\n                [(ngModel)]=\"radioBtnControlFramePastDateInputValue\"\r\n                (ngModelChange)=\"radioBtnControlFrameSelected(actionTimeEnum.PAST_DATE)\">\r\n              päeva tagasi\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div\r\n          *ngIf=\"controlFrameInitialValueText\"\r\n          class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"control_frame\"\r\n                class=\"bigRadio\"\r\n                (change)=\"radioBtnControlFrameSelected(actionTimeEnum.INITIAL_DATE)\">\r\n              &nbsp;\r\n              <img src=\"assets/img/tagasi.png\" alt=\"\" style=\"height: 45px\">\r\n              ({{ controlFrameInitialValueText }})\r\n            </h2>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <img src=\"assets/img/controlFrameNot.png\" alt=\"\">\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"control_frame\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnControlFrameSelection === actionTimeEnum.NO_ACTION\"\r\n                (change)=\"radioBtnControlFrameSelected(actionTimeEnum.NO_ACTION)\">\r\n              Ei ole kontrollraami\r\n            </h2>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</jw-modal>\r\n\r\n\r\n<jw-modal id=\"mother-cocoon-edit\" [smallModal]=\"true\">\r\n  <div class=\"card bg-light\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row up-bar\">\r\n        <h1>Mis ajast on välja valitud praegune kontrollraami kupp?\r\n        </h1>\r\n        <button\r\n          class=\"btn btn-danger closing\"\r\n          (click)=\"onCloseWhenCocoonEditButton()\">\r\n          <img\r\n            src=\"assets/img/sulge.jpeg\"\r\n            class=\"x\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-5\">\r\n        <img src=\"assets/img/cocoonOk.png\" alt=\"\">\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"cocoon\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnCocoonSelection === actionTimeEnum.TODAY\"\r\n                (change)=\"radioBtnCocoonSelected(actionTimeEnum.TODAY)\">\r\n              Täna\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"cocoon\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnCocoonSelection === actionTimeEnum.PAST_DATE\"\r\n                (change)=\"radioBtnCocoonSelected(actionTimeEnum.PAST_DATE)\">\r\n              &nbsp;&nbsp;&nbsp;\r\n              <input\r\n                type=\"number\"\r\n                size=\"3\"\r\n                class=\"num\"\r\n                [(ngModel)]=\"radioBtnCocoonPastDateInputValue\"\r\n                (ngModelChange)=\"radioBtnCocoonSelected(actionTimeEnum.PAST_DATE)\">\r\n              päeva tagasi\r\n            </h2>\r\n          </label>\r\n        </div>\r\n        <div\r\n          *ngIf=\"cocoonInitialValueText\"\r\n          class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"cocoon\"\r\n                class=\"bigRadio\"\r\n                (change)=\"radioBtnCocoonSelected(actionTimeEnum.INITIAL_DATE)\">\r\n              &nbsp;\r\n              <img src=\"assets/img/tagasi.png\" alt=\"\" style=\"height: 45px\">\r\n              ({{ cocoonInitialValueText }})\r\n            </h2>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <img src=\"assets/img/cocoonNot.png\" alt=\"\">\r\n        <div class=\"radio option\">\r\n          <label>\r\n            <h2>\r\n              <input\r\n                type=\"radio\"\r\n                name=\"cocoon\"\r\n                class=\"bigRadio\"\r\n                [checked]=\"radioBtnCocoonSelection === actionTimeEnum.NO_ACTION\"\r\n                (change)=\"radioBtnCocoonSelected(actionTimeEnum.NO_ACTION)\">\r\n              Kupp valimata\r\n            </h2>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</jw-modal>\r\n"

/***/ }),

/***/ "./src/app/work/mother/unknown/unknown.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/work/mother/unknown/unknown.component.ts ***!
  \**********************************************************/
/*! exports provided: UnknownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnknownComponent", function() { return UnknownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/jw-modal/jw-modal.service */ "./src/app/util/jw-modal/jw-modal.service.ts");
/* harmony import */ var _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mom-status.enum */ "./src/app/work/mother/mom-status.enum.ts");
/* harmony import */ var _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../settings/shared/hive.model */ "./src/app/settings/shared/hive.model.ts");
/* harmony import */ var _action_time_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action-time.enum */ "./src/app/work/mother/action-time.enum.ts");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/util.service */ "./src/app/util/util.service.ts");
/* harmony import */ var _mom_attributes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mom-attributes.service */ "./src/app/work/mother/mom-attributes.service.ts");
/* harmony import */ var _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../settings/shared/colonies.service */ "./src/app/settings/shared/colonies.service.ts");
/* harmony import */ var _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/executor/executor.service */ "./src/app/util/executor/executor.service.ts");
/* harmony import */ var _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../util/executor/controls-protection-id.enum */ "./src/app/util/executor/controls-protection-id.enum.ts");











var UnknownComponent = /** @class */ (function () {
    function UnknownComponent(modalService, momAttributesService, coloniesService, executorService) {
        this.modalService = modalService;
        this.momAttributesService = momAttributesService;
        this.coloniesService = coloniesService;
        this.executorService = executorService;
        this.onChangeMomStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.momStatusEnum = _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"];
        this.actionTimeEnum = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"];
        this.momStatusInitialValueText = null;
        this.radioBtnStatusPastDateInputValue = null;
        this.controlFrameInitialValueText = null;
        this.radioBtnControlFramePastDateInputValue = null;
        this.cocoonInitialValueText = null;
        this.radioBtnCocoonPastDateInputValue = null;
    }
    UnknownComponent.prototype.ngOnChanges = function () {
        this.currentlyChosenHiveInitialData = this.coloniesService.getInitialHiveData(this.currentlyChosenHive);
        this.setMotherStatusSectionValuesCorrect();
        this.setControlFrameSectionValuesCorrect();
        this.setCocoonSectionValuesCorrect();
    };
    UnknownComponent.prototype.saveMotherStatusSectionValues = function (setToToday) {
        if (setToToday) {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].TODAY;
        }
        if (this.radioBtnMomStatusSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].TODAY) {
            this.currentlyChosenHive.momAttributes.statusStartingDate = new Date();
        }
        else if (this.radioBtnMomStatusSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].PAST_DATE) {
            this.currentlyChosenHive.momAttributes.statusStartingDate =
                new Date(new Date().setHours(0, 0, 0, 0) -
                    +this.radioBtnStatusPastDateInputValue * 24 * 60 * 60 * 1000);
        }
        else if (this.radioBtnMomStatusSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].INITIAL_DATE) {
            this.currentlyChosenHive.momAttributes.statusStartingDate =
                this.currentlyChosenHiveInitialData.momAttributes.statusStartingDate;
        }
        this.executorService.exeWithTimer(this.momAttributesService.onUpdateMomAttributes, [this.currentlyChosenHive], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_10__["ControlsProtectionIdEnum"].MOM);
        this.setMotherStatusSectionValuesCorrect();
    };
    UnknownComponent.prototype.setMotherStatusSectionValuesCorrect = function () {
        this.momStatusInitialValueText = null;
        var daysFromStatusBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHive.momAttributes.statusStartingDate);
        if (daysFromStatusBeginning == 0) {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].TODAY;
            this.momStatusSectionTimeText = 'täna';
            this.radioBtnStatusPastDateInputValue = null;
        }
        else if (daysFromStatusBeginning == 1) {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].PAST_DATE;
            this.momStatusSectionTimeText = '1 päev tagasi';
            this.radioBtnStatusPastDateInputValue = 1;
        }
        else {
            this.radioBtnMomStatusSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].PAST_DATE;
            this.momStatusSectionTimeText = daysFromStatusBeginning + ' päeva tagasi';
            this.radioBtnStatusPastDateInputValue = daysFromStatusBeginning;
        }
        if (this.currentlyChosenHiveInitialData &&
            this.currentlyChosenHiveInitialData.momAttributes.momStatus === _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].UNKNOWN) {
            var daysFromInitialStatusBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHiveInitialData.momAttributes.statusStartingDate);
            if (daysFromStatusBeginning != daysFromInitialStatusBeginning) {
                if (daysFromInitialStatusBeginning == 0) {
                    return;
                }
                else if (daysFromInitialStatusBeginning == 1) {
                    this.momStatusInitialValueText = daysFromInitialStatusBeginning + ' päev tagasi';
                }
                else {
                    this.momStatusInitialValueText = daysFromInitialStatusBeginning + ' päeva tagasi';
                }
            }
        }
    };
    UnknownComponent.prototype.saveControlFrameSectionValues = function (setToToday) {
        if (setToToday) {
            this.radioBtnControlFrameSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].TODAY;
        }
        if (this.radioBtnControlFrameSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].TODAY) {
            this.currentlyChosenHive.momAttributes.controlFrameStartDate = new Date();
        }
        else if (this.radioBtnControlFrameSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].PAST_DATE) {
            this.currentlyChosenHive.momAttributes.controlFrameStartDate =
                new Date(new Date().setHours(0, 0, 0, 0) -
                    +this.radioBtnControlFramePastDateInputValue * 24 * 60 * 60 * 1000);
        }
        else if (this.radioBtnControlFrameSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].INITIAL_DATE) {
            this.currentlyChosenHive.momAttributes.controlFrameStartDate =
                this.currentlyChosenHiveInitialData.momAttributes.controlFrameStartDate;
        }
        else if (this.radioBtnControlFrameSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].NO_ACTION) {
            this.currentlyChosenHive.momAttributes.controlFrameStartDate = null;
        }
        this.executorService.exeWithTimer(this.momAttributesService.onUpdateMomAttributes, [this.currentlyChosenHive], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_10__["ControlsProtectionIdEnum"].MOM);
        this.setControlFrameSectionValuesCorrect();
    };
    UnknownComponent.prototype.setControlFrameSectionValuesCorrect = function () {
        this.controlFrameInitialValueText = null;
        if (this.currentlyChosenHive.momAttributes.controlFrameStartDate) {
            var daysFromControlFrameBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHive.momAttributes.controlFrameStartDate);
            if (daysFromControlFrameBeginning == 0) {
                this.radioBtnControlFrameSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].TODAY;
                this.controlFrameSectionTimeText = 'täna';
                this.radioBtnControlFramePastDateInputValue = null;
            }
            else if (daysFromControlFrameBeginning == 1) {
                this.radioBtnControlFrameSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].PAST_DATE;
                this.controlFrameSectionTimeText = '1 päev tagasi';
                this.radioBtnControlFramePastDateInputValue = 1;
            }
            else {
                this.radioBtnControlFrameSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].PAST_DATE;
                this.controlFrameSectionTimeText = daysFromControlFrameBeginning + ' päeva tagasi';
                this.radioBtnControlFramePastDateInputValue = daysFromControlFrameBeginning;
            }
        }
        else {
            this.radioBtnControlFrameSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].NO_ACTION;
            this.controlFrameSectionTimeText = '';
            this.radioBtnControlFramePastDateInputValue = null;
        }
        if (this.currentlyChosenHiveInitialData &&
            this.currentlyChosenHiveInitialData.momAttributes.momStatus === _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].UNKNOWN) {
            var daysFromInitialStatusBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHiveInitialData.momAttributes.controlFrameStartDate);
            if (daysFromInitialStatusBeginning == 0 ||
                !this.currentlyChosenHiveInitialData.momAttributes.controlFrameStartDate ||
                this.currentlyChosenHiveInitialData.momAttributes.controlFrameStartDate ==
                    this.currentlyChosenHive.momAttributes.controlFrameStartDate) {
                return;
            }
            else if (daysFromInitialStatusBeginning == 1) {
                this.controlFrameInitialValueText = daysFromInitialStatusBeginning + ' päev tagasi';
            }
            else {
                this.controlFrameInitialValueText = daysFromInitialStatusBeginning + ' päeva tagasi';
            }
        }
    };
    UnknownComponent.prototype.saveCocoonSectionValues = function (setToToday) {
        if (setToToday) {
            this.radioBtnCocoonSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].TODAY;
        }
        if (this.radioBtnCocoonSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].TODAY) {
            this.currentlyChosenHive.momAttributes.cocoonChosenDate = new Date();
        }
        else if (this.radioBtnCocoonSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].PAST_DATE) {
            this.currentlyChosenHive.momAttributes.cocoonChosenDate =
                new Date(new Date().setHours(0, 0, 0, 0) -
                    +this.radioBtnCocoonPastDateInputValue * 24 * 60 * 60 * 1000);
        }
        else if (this.radioBtnCocoonSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].INITIAL_DATE) {
            this.currentlyChosenHive.momAttributes.cocoonChosenDate =
                this.currentlyChosenHiveInitialData.momAttributes.cocoonChosenDate;
        }
        else if (this.radioBtnCocoonSelection === _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].NO_ACTION) {
            this.currentlyChosenHive.momAttributes.cocoonChosenDate = null;
        }
        this.executorService.exeWithTimer(this.momAttributesService.onUpdateMomAttributes, [this.currentlyChosenHive], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_10__["ControlsProtectionIdEnum"].MOM);
        this.setCocoonSectionValuesCorrect();
    };
    UnknownComponent.prototype.setCocoonSectionValuesCorrect = function () {
        this.cocoonInitialValueText = null;
        if (this.currentlyChosenHive.momAttributes.cocoonChosenDate) {
            var daysFromCocoonChosen = _util_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHive.momAttributes.cocoonChosenDate);
            if (daysFromCocoonChosen == 0) {
                this.radioBtnCocoonSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].TODAY;
                this.cocoonSectionTimeText = 'täna';
                this.radioBtnCocoonPastDateInputValue = null;
            }
            else if (daysFromCocoonChosen == 1) {
                this.radioBtnCocoonSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].PAST_DATE;
                this.cocoonSectionTimeText = '1 päev tagasi';
                this.radioBtnCocoonPastDateInputValue = 1;
            }
            else {
                this.radioBtnCocoonSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].PAST_DATE;
                this.cocoonSectionTimeText = daysFromCocoonChosen + ' päeva tagasi';
                this.radioBtnCocoonPastDateInputValue = daysFromCocoonChosen;
            }
        }
        else {
            this.radioBtnCocoonSelection = _action_time_enum__WEBPACK_IMPORTED_MODULE_5__["ActionTimeEnum"].NO_ACTION;
            this.cocoonSectionTimeText = '';
            this.radioBtnCocoonPastDateInputValue = null;
        }
        if (this.currentlyChosenHiveInitialData &&
            this.currentlyChosenHiveInitialData.momAttributes.momStatus === _mom_status_enum__WEBPACK_IMPORTED_MODULE_3__["MomStatusEnum"].UNKNOWN) {
            var daysFromInitialCocoonBeginning = _util_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"].getAbsoluteDaysBeforeTodaysDate(this.currentlyChosenHiveInitialData.momAttributes.cocoonChosenDate);
            if (daysFromInitialCocoonBeginning == 0 ||
                !this.currentlyChosenHiveInitialData.momAttributes.cocoonChosenDate ||
                this.currentlyChosenHiveInitialData.momAttributes.cocoonChosenDate ==
                    this.currentlyChosenHive.momAttributes.cocoonChosenDate) {
                return;
            }
            else if (daysFromInitialCocoonBeginning == 1) {
                this.cocoonInitialValueText = daysFromInitialCocoonBeginning + ' päev tagasi';
            }
            else {
                this.cocoonInitialValueText = daysFromInitialCocoonBeginning + ' päeva tagasi';
            }
        }
    };
    UnknownComponent.prototype.radioBtnMomStatusSelected = function (selectedActionTime) {
        this.radioBtnMomStatusSelection = selectedActionTime;
        this.saveMotherStatusSectionValues();
    };
    UnknownComponent.prototype.radioBtnControlFrameSelected = function (selectedActionTime) {
        this.radioBtnControlFrameSelection = selectedActionTime;
        this.saveControlFrameSectionValues();
    };
    UnknownComponent.prototype.radioBtnCocoonSelected = function (selectedActionTime) {
        this.radioBtnCocoonSelection = selectedActionTime;
        this.saveCocoonSectionValues();
    };
    UnknownComponent.prototype.onChangeMotherStatusButtonClick = function (newMotherStatus) {
        this.modalService.close('mother-unknown-edit');
        this.onChangeMomStatus.emit(newMotherStatus);
    };
    UnknownComponent.prototype.onOpenMomStatusSectionEditButton = function () {
        this.modalService.open('mother-unknown-edit');
    };
    UnknownComponent.prototype.onCloseMomStatusSectionEditButton = function () {
        this.setMotherStatusSectionValuesCorrect();
        this.modalService.close('mother-unknown-edit');
    };
    UnknownComponent.prototype.onOpenWhenControlFrameEditButton = function () {
        this.modalService.open('mother-control-frame-edit');
    };
    UnknownComponent.prototype.onCloseWhenControlFrameEditButton = function () {
        this.modalService.close('mother-control-frame-edit');
    };
    UnknownComponent.prototype.onOpenWhenCocoonEditButton = function () {
        this.modalService.open('mother-cocoon-edit');
    };
    UnknownComponent.prototype.onCloseWhenCocoonEditButton = function () {
        this.modalService.close('mother-cocoon-edit');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_4__["Hive"])
    ], UnknownComponent.prototype, "currentlyChosenHive", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UnknownComponent.prototype, "onChangeMomStatus", void 0);
    UnknownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unknown',
            template: __webpack_require__(/*! ./unknown.component.html */ "./src/app/work/mother/unknown/unknown.component.html"),
            styles: [__webpack_require__(/*! ./unknown.component.css */ "./src/app/work/mother/unknown/unknown.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_2__["JwModalService"],
            _mom_attributes_service__WEBPACK_IMPORTED_MODULE_7__["MomAttributesService"],
            _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_8__["ColoniesService"],
            _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_9__["ExecutorService"]])
    ], UnknownComponent);
    return UnknownComponent;
}());



/***/ }),

/***/ "./src/app/work/next-time/next-time.component.css":
/*!********************************************************!*\
  !*** ./src/app/work/next-time/next-time.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.whiteBox {\r\n  width: 50px;\r\n  background-color: white;\r\n  line-height: 1.6;\r\n}\r\n\r\nbutton {\r\n  width: 50px;\r\n  height: 43px;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9uZXh0LXRpbWUvbmV4dC10aW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3dvcmsvbmV4dC10aW1lL25leHQtdGltZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLndoaXRlQm94IHtcclxuICB3aWR0aDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNDNweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/work/next-time/next-time.component.html":
/*!*********************************************************!*\
  !*** ./src/app/work/next-time/next-time.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-light\" style=\"height: 330px\">\n  <div class=\"container\">\n\n    <!--<div class=\"row\">-->\n      <!--<span style=\"margin-left: 230px;margin-right: 30px;\">-->\n        <!--Eelmine planeering:-->\n      <!--</span>-->\n      <!--<span style=\"background-color: orange; color: white\">-->\n          <!--&nbsp;3 päeva&nbsp;-->\n      <!--</span>-->\n      <!--tähtajast möödas-->\n    <!--</div>-->\n    <!--<hr>-->\n    <!--<div class=\"row\">-->\n\n      <!--<span style=\"margin-left: 60px;margin-right: 30px;\">-->\n        <!--Mitme päeva pärast uuesti vaadata?-->\n      <!--</span>-->\n      <!--<button-->\n        <!--type=\"button\"-->\n        <!--class=\"btn btn-light btn-outline-secondary\"> -7 </button>-->\n      <!--<button-->\n        <!--type=\"button\"-->\n        <!--class=\"btn btn-light btn-outline-secondary\"> - </button>-->\n      <!--<div-->\n        <!--class=\"whiteBox\"-->\n        <!--align=\"center\">-->\n        <!--<b>4</b>-->\n      <!--</div>-->\n      <!--<button-->\n        <!--type=\"button\"-->\n        <!--class=\"btn btn-light btn-outline-secondary\"> + </button>-->\n      <!--<button-->\n        <!--type=\"button\"-->\n        <!--class=\"btn btn-light btn-outline-secondary\"> +7 </button>-->\n    <!--</div>-->\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/work/next-time/next-time.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/work/next-time/next-time.component.ts ***!
  \*******************************************************/
/*! exports provided: NextTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextTimeComponent", function() { return NextTimeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NextTimeComponent = /** @class */ (function () {
    function NextTimeComponent() {
    }
    NextTimeComponent.prototype.ngOnInit = function () {
    };
    NextTimeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-next-time',
            template: __webpack_require__(/*! ./next-time.component.html */ "./src/app/work/next-time/next-time.component.html"),
            styles: [__webpack_require__(/*! ./next-time.component.css */ "./src/app/work/next-time/next-time.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NextTimeComponent);
    return NextTimeComponent;
}());



/***/ }),

/***/ "./src/app/work/notes/note-element/note-element.component.css":
/*!********************************************************************!*\
  !*** ./src/app/work/notes/note-element/note-element.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".planning-element {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 3px;\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0,0,0,.125);\r\n  border-radius: 5px;\r\n  display: table;\r\n  min-height: 86px;\r\n}\r\n\r\nimg {\r\n  height: 50px;\r\n}\r\n\r\n.bordered {\r\n  box-shadow: 0 0 10px red;\r\n  min-height: 72px;\r\n  min-width: 60px;\r\n  border: 2px solid red;\r\n  border-radius: 5px;\r\n}\r\n\r\n.warning {\r\n  border-left: 5px solid yellow;\r\n}\r\n\r\n.active-background {\r\n  background-color: #dcdcdc;\r\n}\r\n\r\n.inactive-background {\r\n  background-color: #fff;\r\n}\r\n\r\n.time-height {\r\n  line-height: 30px;\r\n}\r\n\r\n.disabled-look {\r\n  opacity: 0.5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9ub3Rlcy9ub3RlLWVsZW1lbnQvbm90ZS1lbGVtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsOEJBQThCO0NBQy9COztBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvd29yay9ub3Rlcy9ub3RlLWVsZW1lbnQvbm90ZS1lbGVtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxhbm5pbmctZWxlbWVudCB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgbWluLWhlaWdodDogODZweDtcclxufVxyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5ib3JkZXJlZCB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmVkO1xyXG4gIG1pbi1oZWlnaHQ6IDcycHg7XHJcbiAgbWluLXdpZHRoOiA2MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi53YXJuaW5nIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHllbGxvdztcclxufVxyXG5cclxuLmFjdGl2ZS1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkY2RjO1xyXG59XHJcblxyXG4uaW5hY3RpdmUtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRpbWUtaGVpZ2h0IHtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmRpc2FibGVkLWxvb2sge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/work/notes/note-element/note-element.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/work/notes/note-element/note-element.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!note.deleted && !this.active\">\n  <div\n    (click)=\"disableControls ? $event.stopPropagation() : onElementClick()\"\n    class=\"container planning-element pb-1 pt-1 pl-4 pr-4\"\n    [ngClass]=\"{'warning': note.hasWarning, 'disabled-look': disableControls}\">\n    <div class=\"row d-flex justify-content-between\">\n      <div>\n        <div class=\"container\">\n          <div class=\"row time-height\">\n            Lisatud: {{ note.dateAdded.toString() | timeAgo }}\n          </div>\n          <div class=\"row time-height\"\n               *ngIf=\"note.lastModified\">\n            Muudetud: {{ note.lastModified.toString() | timeAgo }}\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"d-flex flex-row-reverse align-items-center\">\n        <img\n          *ngIf=\"note.hasWarning\"\n          src=\"assets/img/warning.png\"\n        >\n        <img\n          *ngIf=\"note.longTerm\"\n          src=\"assets/img/telescope.jpg\"\n        >\n      </div>\n    </div>\n    <hr class=\"mt-2 mb-2\">\n    <div class=\"row\"><strong>{{ note.text }}</strong></div>\n  </div>\n</ng-container>\n\n<ng-container *ngIf=\"!note.deleted && this.active\">\n  <div\n    class=\"container planning-element pb-1 pt-1 pl-4 pr-4 active-background\"\n    [ngClass]=\"{'warning': note.hasWarning, 'disabled-look': disableControls}\">\n    <div class=\"row d-flex justify-content-between\">\n      <div>\n        <div class=\"container\">\n          <div class=\"row time-height\">\n            Lisatud: {{ note.dateAdded.toString() | timeAgo }}\n          </div>\n          <div class=\"row time-height\"\n               *ngIf=\"note.lastModified\">\n            Muudetud: {{ note.lastModified.toString() | timeAgo }}\n          </div>\n        </div>\n      </div>\n      <div\n        *ngIf=\"note.longTerm\"\n        class=\"d-flex flex-row-reverse justify-content-center align-items-center bordered inactive-background\"\n        (click)=\"disableControls ? $event.stopPropagation() : onDeleteElement()\"\n        [tooltip]=\"notAllowedToDelete\"\n        [container]=\"'body'\">\n        <img src=\"assets/img/trash.png\">\n      </div>\n      <div\n        *ngIf=\"!note.longTerm\"\n        class=\"d-flex flex-row-reverse justify-content-center align-items-center bordered inactive-background\"\n        (click)=\"disableControls ? $event.stopPropagation() : onDeleteElement()\">\n        <img src=\"assets/img/trash.png\">\n      </div>\n    </div>\n    <hr class=\"mt-2 mb-2\">\n    <div class=\"row\"><strong>{{ note.text }}</strong></div>\n  </div>\n</ng-container>\n\n<ng-template #notAllowedToDelete>\n  <span [innerHTML]=\"'Pikaajalist märget kustutada ei saa. <br><br>Märke kustutamiseks eemalda esmalt tähistus pikaajaline'\"></span>\n</ng-template>\n\n<ng-container *ngIf=\"note.deleted\">\n  <div\n    class=\"container planning-element pb-1 pt-1 pl-4 pr-4\"\n    [ngClass]=\"{'warning': note.hasWarning, 'active-background': active}\"\n    (click)=\"disableControls ? $event.stopPropagation() : onElementClick()\">\n    <div class=\"row d-flex justify-content-between\">\n      <div>\n        <div class=\"container\">\n          <div class=\"row time-height\">\n            Lisatud: {{ note.dateAdded.toString() | date:'dd.MM.yy' }}\n          </div>\n          <div class=\"row time-height\"\n               *ngIf=\"note.lastModified\">\n            Muudetud: {{ note.lastModified.toString() | date:'dd.MM.yy' }}\n          </div>\n          <div class=\"row time-height\"\n               *ngIf=\"note.lastModified\">\n            Kustutatud: {{ note.dateDeleted.toString() | date:'dd.MM.yy' }}\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"flex-row-reverse d-flex justify-content-center align-items-center\">\n        <img\n          *ngIf=\"note.hasWarning\"\n          src=\"assets/img/warning.png\">\n      </div>\n    </div>\n    <hr class=\"mt-2 mb-2\">\n    <div class=\"row\"><strong>{{ note.text }}</strong></div>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/work/notes/note-element/note-element.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/work/notes/note-element/note-element.component.ts ***!
  \*******************************************************************/
/*! exports provided: NoteElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteElementComponent", function() { return NoteElementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _note_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note.model */ "./src/app/work/notes/note-element/note.model.ts");
/* harmony import */ var _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../settings/shared/hive.model */ "./src/app/settings/shared/hive.model.ts");
/* harmony import */ var _notes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../notes.service */ "./src/app/work/notes/notes.service.ts");
/* harmony import */ var _notes_component_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../notes-component.enum */ "./src/app/work/notes/notes-component.enum.ts");
/* harmony import */ var _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/executor/executor.service */ "./src/app/util/executor/executor.service.ts");







var NoteElementComponent = /** @class */ (function () {
    function NoteElementComponent(notesService, excutorService) {
        this.notesService = notesService;
        this.excutorService = excutorService;
        this.subscriptions = [];
    }
    NoteElementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.notesService.newNoteElementSelected.asObservable()
            .subscribe(function () {
            _this.active = false;
        }));
        this.subscriptions.push(this.excutorService.getControlsProtection.subscribe(function (ps) { return _this.disableControls = ps.disableControls; }));
        if (this.memorizedActiveElementId === this.note.id &&
            this.notesComponentType === _notes_component_enum__WEBPACK_IMPORTED_MODULE_5__["NotesComponentEnum"].NOTE_MANAGEMENT_ACTIVE) {
            this.active = true;
        }
    };
    NoteElementComponent.prototype.onElementClick = function () {
        var _this = this;
        this.notesService.newNoteElementSelected.next(this.note);
        if (this.notesComponentType === _notes_component_enum__WEBPACK_IMPORTED_MODULE_5__["NotesComponentEnum"].WORK_DASHBOARD) {
            clearTimeout(this.showAsActiveTimeout);
            this.active = true;
            this.showAsActiveTimeout = setTimeout(function () {
                _this.active = false;
            }, 2500);
        }
        else {
            this.active = true;
        }
    };
    NoteElementComponent.prototype.onDeleteElement = function () {
        if (this.note.longTerm) {
            return;
        }
        this.notesService.newNoteElementSelected.next(null);
        this.note.dateDeleted = new Date();
        this.note.deleted = true;
        this.notesService.updateNote(this.note, this.currentlySelectedHive.id);
    };
    NoteElementComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _note_model__WEBPACK_IMPORTED_MODULE_2__["Note"])
    ], NoteElementComponent.prototype, "note", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_3__["Hive"])
    ], NoteElementComponent.prototype, "currentlySelectedHive", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NoteElementComponent.prototype, "notesComponentType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NoteElementComponent.prototype, "memorizedActiveElementId", void 0);
    NoteElementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-note-element',
            template: __webpack_require__(/*! ./note-element.component.html */ "./src/app/work/notes/note-element/note-element.component.html"),
            styles: [__webpack_require__(/*! ./note-element.component.css */ "./src/app/work/notes/note-element/note-element.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_notes_service__WEBPACK_IMPORTED_MODULE_4__["NotesService"],
            _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_6__["ExecutorService"]])
    ], NoteElementComponent);
    return NoteElementComponent;
}());



/***/ }),

/***/ "./src/app/work/notes/note-element/note.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/work/notes/note-element/note.model.ts ***!
  \*******************************************************/
/*! exports provided: Note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
var Note = /** @class */ (function () {
    function Note() {
    }
    return Note;
}());



/***/ }),

/***/ "./src/app/work/notes/note-mgmt/note-mgmt-edit-area/note-mgmt-edit-area.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/work/notes/note-mgmt/note-mgmt-edit-area/note-mgmt-edit-area.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-inside-text {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.without-deadline-correction {\r\n  margin-top: 69px;\r\n}\r\n\r\n.edit-area-height {\r\n  height: 235px;\r\n}\r\n\r\ninput.my-checkbox {\r\n  width : 25px;\r\n  height : 25px;\r\n}\r\n\r\nselect {\r\n  height: 60px;\r\n  font-size: 1.5rem;\r\n}\r\n\r\noptgroup {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.input-area-width {\r\n  width: 300px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9ub3Rlcy9ub3RlLW1nbXQvbm90ZS1tZ210LWVkaXQtYXJlYS9ub3RlLW1nbXQtZWRpdC1hcmVhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsY0FBYztDQUNmOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3dvcmsvbm90ZXMvbm90ZS1tZ210L25vdGUtbWdtdC1lZGl0LWFyZWEvbm90ZS1tZ210LWVkaXQtYXJlYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWluc2lkZS10ZXh0IHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLndpdGhvdXQtZGVhZGxpbmUtY29ycmVjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogNjlweDtcclxufVxyXG5cclxuLmVkaXQtYXJlYS1oZWlnaHQge1xyXG4gIGhlaWdodDogMjM1cHg7XHJcbn1cclxuXHJcbmlucHV0Lm15LWNoZWNrYm94IHtcclxuICB3aWR0aCA6IDI1cHg7XHJcbiAgaGVpZ2h0IDogMjVweDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbm9wdGdyb3VwIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmlucHV0LWFyZWEtd2lkdGgge1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/work/notes/note-mgmt/note-mgmt-edit-area/note-mgmt-edit-area.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/work/notes/note-mgmt/note-mgmt-edit-area/note-mgmt-edit-area.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"activeNoteElement\">\n  <ng-container *ngIf=\"isActiveResolveStateUnresolved; else inActive\">\n    <div class=\"row pb-4\">\n      <ng-container *ngIf=\"!activeNoteElement.id; else changePlanningHeader\">\n        <h2>Uus märge</h2>\n      </ng-container>\n    </div>\n    <div class=\"row card ml-n3\">\n      <div class=\"row ml-0 edit-area-height\">\n        <div class=\"d-flex input-area-width justify-content-around align-items-center flex-column\">\n              <textarea\n                class=\"modal-inside-text planning-element-text-area h-100\"\n                [(ngModel)]=\"activeNoteElement.text\"\n                (ngModelChange)=\"onInputChange()\"\n                [disabled]=\"disableEditControls\"></textarea>\n        </div>\n        <div class=\"col d-flex flex-column justify-content-around\">\n          <div class=\"row modal-inside-text mb-1 mt-4 ml-4\">\n            <input\n              class=\"my-checkbox\"\n              type=\"checkbox\"\n              id=\"isLongTerm\"\n              [(ngModel)]=\"activeNoteElement.longTerm\"\n              (change)=\"onInputChange()\"\n              [tooltip]=\"'Pikaajalist tähistust omavat märget ei saa kustutada ja seda ei kuvata avalehel'\"\n              [disabled]=\"disableEditControls\">\n            <label class=\"form-check-label ml-2\" for=\"isLongTerm\">\n              Pikaajaline\n            </label>\n          </div>\n          <div class=\"row modal-inside-text mb-4 mt-2 ml-4\">\n            <input\n              class=\"my-checkbox\"\n              type=\"checkbox\"\n              id=\"hasWarning\"\n              [(ngModel)]=\"activeNoteElement.hasWarning\"\n              (change)=\"onInputChange()\"\n              [disabled]=\"disableEditControls\">\n            <label class=\"form-check-label ml-2\" for=\"hasWarning\">\n              Märgi tähelepanuga\n            </label>\n          </div>\n          <div class=\"row justify-content-center\">\n            <ng-container *ngIf=\"!activeNoteElement.id; else changePlanningFinishEditing\">\n              <button\n                class=\"btn btn-success modal-inside-text\"\n                (click)=\"onAddNewNote()\"\n                [disabled]=\"disableEditControls\">\n                Lisan märkme\n              </button>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template #inActive>\n  <div class=\"d-flex h-100 justify-content-center align-items-end pb-5\">\n    <button\n      class=\"btn btn-success modal-inside-text mb-5\"\n      *ngIf=\"activeNoteElement.id != null\"\n      (click)=\"onActivateElement()\"\n      [disabled]=\"disableEditControls\">\n      Taastan \"Aktiivseks\"\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #changePlanningHeader>\n  <h2>Muudan märget</h2>\n</ng-template>\n\n<ng-template #changePlanningFinishEditing>\n  <button\n    class=\"btn btn-danger modal-inside-text\"\n    (click)=\"notesService.newNoteElementSelected.next(null)\"\n    [disabled]=\"disableAllControls\">\n    Lõpetan muutmise\n  </button>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/work/notes/note-mgmt/note-mgmt-edit-area/note-mgmt-edit-area.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/work/notes/note-mgmt/note-mgmt-edit-area/note-mgmt-edit-area.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NoteMgmtEditAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteMgmtEditAreaComponent", function() { return NoteMgmtEditAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../settings/shared/hive.model */ "./src/app/settings/shared/hive.model.ts");
/* harmony import */ var _note_element_note_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../note-element/note.model */ "./src/app/work/notes/note-element/note.model.ts");
/* harmony import */ var _notes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../notes.service */ "./src/app/work/notes/notes.service.ts");
/* harmony import */ var _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../settings/shared/colonies.service */ "./src/app/settings/shared/colonies.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../util/executor/executor.service */ "./src/app/util/executor/executor.service.ts");
/* harmony import */ var _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../util/executor/controls-protection-id.enum */ "./src/app/util/executor/controls-protection-id.enum.ts");









var NoteMgmtEditAreaComponent = /** @class */ (function () {
    function NoteMgmtEditAreaComponent(notesService, coloniesService, executorService) {
        this.notesService = notesService;
        this.coloniesService = coloniesService;
        this.executorService = executorService;
        this.subscriptions = [];
    }
    NoteMgmtEditAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initNewNote();
        this.activeNoteElement = this.newNote;
        this.subscriptions.push(this.notesService.newNoteElementSelected.asObservable()
            .subscribe(function (ne) {
            if (!ne)
                _this.activeNoteElement = _this.newNote;
            else {
                _this.activeNoteElement = ne;
            }
        }));
        this.subscriptions.push(this.executorService.getControlsProtection.subscribe(function (ps) {
            if (!ps.disableControls) {
                _this.disableEditControls = false;
                _this.disableAllControls = false;
                return;
            }
            _this.disableAllControls = true;
            _this.disableEditControls = ps.omittedControlsId != _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_8__["ControlsProtectionIdEnum"].NOTE_ELEMENT;
        }));
    };
    NoteMgmtEditAreaComponent.prototype.initNewNote = function () {
        this.newNote = new _note_element_note_model__WEBPACK_IMPORTED_MODULE_3__["Note"]();
        this.newNote.deleted = false;
        this.newNote.longTerm = false;
        this.newNote.orderNumber =
            this.currentlyChosenHive.allActiveNotes
                ? this.currentlyChosenHive.allActiveNotes.length + 1
                : 1;
        this.newNote.dateAdded = new Date();
        this.newNote.hasWarning = false;
    };
    NoteMgmtEditAreaComponent.prototype.onAddNewNote = function () {
        var _this = this;
        this.notesService.addNewNote(this.newNote, this.currentlyChosenHive.id);
        this.coloniesService.coloniesDataRetrieved$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe(function () {
            setTimeout(function () {
                _this.initNewNote();
                _this.activeNoteElement = _this.newNote;
            }, 0);
        });
    };
    NoteMgmtEditAreaComponent.prototype.onInputChange = function () {
        if (this.activeNoteElement.id) {
            this.activeNoteElement.lastModified = new Date();
            this.callUpdate();
        }
    };
    NoteMgmtEditAreaComponent.prototype.callUpdate = function () {
        this.activeNoteElement.lastModified = new Date();
        this.executorService.exeWithTimer(this.notesService.updateNote, [this.activeNoteElement, this.currentlyChosenHive.id], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_8__["ControlsProtectionIdEnum"].NOTE_ELEMENT);
    };
    NoteMgmtEditAreaComponent.prototype.onActivateElement = function () {
        this.activeNoteElement.deleted = false;
        this.activeNoteElement.dateDeleted = undefined;
        this.newNote.orderNumber = this.currentlyChosenHive.allActiveNotes
            ? this.currentlyChosenHive.allActiveNotes.length + 1
            : 0;
        this.callUpdate();
    };
    NoteMgmtEditAreaComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NoteMgmtEditAreaComponent.prototype, "isActiveResolveStateUnresolved", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_2__["Hive"])
    ], NoteMgmtEditAreaComponent.prototype, "currentlyChosenHive", void 0);
    NoteMgmtEditAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-note-mgmt-edit-area',
            template: __webpack_require__(/*! ./note-mgmt-edit-area.component.html */ "./src/app/work/notes/note-mgmt/note-mgmt-edit-area/note-mgmt-edit-area.component.html"),
            styles: [__webpack_require__(/*! ./note-mgmt-edit-area.component.css */ "./src/app/work/notes/note-mgmt/note-mgmt-edit-area/note-mgmt-edit-area.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_notes_service__WEBPACK_IMPORTED_MODULE_4__["NotesService"],
            _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_5__["ColoniesService"],
            _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_7__["ExecutorService"]])
    ], NoteMgmtEditAreaComponent);
    return NoteMgmtEditAreaComponent;
}());



/***/ }),

/***/ "./src/app/work/notes/note-mgmt/note-mgmt.component.css":
/*!**************************************************************!*\
  !*** ./src/app/work/notes/note-mgmt/note-mgmt.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding-for-notes{\r\n  padding-left: 2.5px;\r\n}\r\n\r\n.big-text {\r\n  font-size: 2rem;\r\n}\r\n\r\n.notes-header {\r\n  font-weight: 500;\r\n  margin-right: 60px;\r\n}\r\n\r\nbutton.closing {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  padding: 2px 2px 2px 2px;\r\n}\r\n\r\nimg.x {\r\n  height: 40px;\r\n}\r\n\r\n.belongs-to-badge {\r\n  height: 40px;\r\n  margin-top: 8px;\r\n  font-size: 1.5rem;\r\n  margin-left: 400px;\r\n}\r\n\r\n.modal-inside-text {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.spinner-area {\r\n  height: 50px;\r\n}\r\n\r\n.disabled-look {\r\n  opacity: 0.5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9ub3Rlcy9ub3RlLW1nbXQvbm90ZS1tZ210LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsNEJBQW9CO0VBQXBCLHlCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIseUJBQXlCO0NBQzFCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvd29yay9ub3Rlcy9ub3RlLW1nbXQvbm90ZS1tZ210LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkZGluZy1mb3Itbm90ZXN7XHJcbiAgcGFkZGluZy1sZWZ0OiAyLjVweDtcclxufVxyXG5cclxuLmJpZy10ZXh0IHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5ub3Rlcy1oZWFkZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG5idXR0b24uY2xvc2luZyB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgcGFkZGluZzogMnB4IDJweCAycHggMnB4O1xyXG59XHJcblxyXG5pbWcueCB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uYmVsb25ncy10by1iYWRnZSB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBtYXJnaW4tbGVmdDogNDAwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1pbnNpZGUtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5zcGlubmVyLWFyZWEge1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmRpc2FibGVkLWxvb2sge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/work/notes/note-mgmt/note-mgmt.component.html":
/*!***************************************************************!*\
  !*** ./src/app/work/notes/note-mgmt/note-mgmt.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<jw-modal id=\"{{mgmtComponentId}}\" [fullScreen]=\"true\">\n  <div class=\"card bg-light h-100\">\n    <div class=\"card-header nav\">\n      <span class=\"navbar-brand big-text notes-header\">Märkmed</span>\n      <span class=\"navbar-text badge badge-dark belongs-to-badge\">\n        {{ currentlyChosenColony.name + ' / ' + currentlyChosenHive.number}}\n      </span>\n      <button\n        class=\"btn btn-danger nav-item closing ml-auto\"\n        (click)=\"modalService.close(mgmtComponentId);\"\n        [disabled]=\"disableControls\">\n        <img\n          src=\"assets/img/sulge.jpeg\"\n          class=\"x\">\n      </button>\n    </div>\n    <div class=\"card-body m-0\">\n      <div class=\"row\">\n        <div class=\"col-5\">\n          <div class=\"row justify-content-center p-4\">\n            <div class=\"btn-group btn-group-toggle\">\n              <label\n                class=\"btn btn-light btn-outline-secondary modal-inside-text\"\n                [ngClass]=\"{'active': isActiveResolveStateUnresolved, 'disabled-look': disableControls}\">\n                <input\n                  type=\"radio\"\n                  name=\"planning_window_type\"\n                  [checked]=\"isActiveResolveStateUnresolved\"\n                  (change)=\"radioBtnActiveResolveStateChange(true)\"\n                  [disabled]=\"disableControls\">\n                Aktiivsed\n              </label>\n              <label\n                class=\"btn btn-light btn-outline-secondary modal-inside-text\"\n                [ngClass]=\"{'active': !isActiveResolveStateUnresolved, 'disabled-look': disableControls}\">\n                <input\n                  type=\"radio\"\n                  name=\"planning_window_type\"\n                  [checked]=\"!isActiveResolveStateUnresolved\"\n                  (change)=\"radioBtnActiveResolveStateChange(false)\"\n                  [disabled]=\"disableControls\">\n                Kustutatud\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-5\">\n          <div class=\"row padding-for-notes\">\n            <app-notes\n              [currentlySelectedHive]=\"currentlyChosenHive\"\n              [notesComponentType]=\"isActiveResolveStateUnresolved ?\n                notesComponentEnum.NOTE_MANAGEMENT_ACTIVE :\n                notesComponentEnum.NOTE_MANAGEMENT_INACTIVE\"></app-notes>\n          </div>\n        </div>\n        <div class=\"col-7 pl-5 d-flex flex-column-reverse mb-5\">\n          <app-note-mgmt-edit-area\n            [currentlyChosenHive]=\"currentlyChosenHive\"\n            (isCountingDownToUpdateData)=\"onCountDownChange($event)\"\n            [isActiveResolveStateUnresolved]=\"isActiveResolveStateUnresolved\">\n          </app-note-mgmt-edit-area>\n        </div>\n      </div>\n    </div>\n  </div>\n</jw-modal>\n"

/***/ }),

/***/ "./src/app/work/notes/note-mgmt/note-mgmt.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/work/notes/note-mgmt/note-mgmt.component.ts ***!
  \*************************************************************/
/*! exports provided: NoteMgmtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteMgmtComponent", function() { return NoteMgmtComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../settings/shared/hive.model */ "./src/app/settings/shared/hive.model.ts");
/* harmony import */ var _settings_shared_colony_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../settings/shared/colony.model */ "./src/app/settings/shared/colony.model.ts");
/* harmony import */ var _util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/jw-modal/jw-modal.service */ "./src/app/util/jw-modal/jw-modal.service.ts");
/* harmony import */ var _notes_component_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../notes-component.enum */ "./src/app/work/notes/notes-component.enum.ts");
/* harmony import */ var _notes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../notes.service */ "./src/app/work/notes/notes.service.ts");
/* harmony import */ var _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../util/executor/executor.service */ "./src/app/util/executor/executor.service.ts");








var NoteMgmtComponent = /** @class */ (function () {
    function NoteMgmtComponent(modalService, notesService, executorService) {
        this.modalService = modalService;
        this.notesService = notesService;
        this.executorService = executorService;
        this.isActiveResolveStateUnresolved = true;
        this.notesComponentEnum = _notes_component_enum__WEBPACK_IMPORTED_MODULE_5__["NotesComponentEnum"];
        this.subscriptions = [];
    }
    NoteMgmtComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.executorService.getControlsProtection.subscribe(function (ps) { return _this.disableControls = ps.disableControls; }));
    };
    NoteMgmtComponent.prototype.radioBtnActiveResolveStateChange = function (isActiveResolveStateUnresolved) {
        this.notesService.newNoteElementSelected.next(null);
        this.isActiveResolveStateUnresolved = isActiveResolveStateUnresolved;
    };
    NoteMgmtComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_2__["Hive"])
    ], NoteMgmtComponent.prototype, "currentlyChosenHive", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _settings_shared_colony_model__WEBPACK_IMPORTED_MODULE_3__["Colony"])
    ], NoteMgmtComponent.prototype, "currentlyChosenColony", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NoteMgmtComponent.prototype, "mgmtComponentId", void 0);
    NoteMgmtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-note-mgmt',
            template: __webpack_require__(/*! ./note-mgmt.component.html */ "./src/app/work/notes/note-mgmt/note-mgmt.component.html"),
            styles: [__webpack_require__(/*! ./note-mgmt.component.css */ "./src/app/work/notes/note-mgmt/note-mgmt.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_4__["JwModalService"],
            _notes_service__WEBPACK_IMPORTED_MODULE_6__["NotesService"],
            _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_7__["ExecutorService"]])
    ], NoteMgmtComponent);
    return NoteMgmtComponent;
}());



/***/ }),

/***/ "./src/app/work/notes/notes-component.enum.ts":
/*!****************************************************!*\
  !*** ./src/app/work/notes/notes-component.enum.ts ***!
  \****************************************************/
/*! exports provided: NotesComponentEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponentEnum", function() { return NotesComponentEnum; });
var NotesComponentEnum;
(function (NotesComponentEnum) {
    NotesComponentEnum[NotesComponentEnum["WORK_DASHBOARD"] = 0] = "WORK_DASHBOARD";
    NotesComponentEnum[NotesComponentEnum["NOTE_MANAGEMENT_ACTIVE"] = 1] = "NOTE_MANAGEMENT_ACTIVE";
    NotesComponentEnum[NotesComponentEnum["NOTE_MANAGEMENT_INACTIVE"] = 2] = "NOTE_MANAGEMENT_INACTIVE";
})(NotesComponentEnum || (NotesComponentEnum = {}));


/***/ }),

/***/ "./src/app/work/notes/notes-data.service.ts":
/*!**************************************************!*\
  !*** ./src/app/work/notes/notes-data.service.ts ***!
  \**************************************************/
/*! exports provided: NotesDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesDataService", function() { return NotesDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/util.service */ "./src/app/util/util.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var NotesDataService = /** @class */ (function () {
    function NotesDataService(httpClient) {
        this.httpClient = httpClient;
    }
    NotesDataService.prototype.addNewNote = function (newNote, hiveId) {
        return this.httpClient.post(_util_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"].backEndURL + 'api/hive/' + hiveId + '/note', newNote);
    };
    NotesDataService.prototype.updateNote = function (note, hiveId) {
        return this.httpClient.put(_util_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"].backEndURL + 'api/hive/' + hiveId + '/note/' + note.id, note);
    };
    NotesDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], NotesDataService);
    return NotesDataService;
}());



/***/ }),

/***/ "./src/app/work/notes/notes.component.css":
/*!************************************************!*\
  !*** ./src/app/work/notes/notes.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notes-section-height-for-work-dashboard {\r\n  height: 330px;\r\n}\r\n\r\n.notes-section-height-for-planning-modal {\r\n  height: 490px;\r\n}\r\n\r\n.scrolling-area {\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  overflow-y:auto;\r\n  overflow-x:hidden;\r\n}\r\n\r\n.vertical-paddings {\r\n  padding-top: 1.1rem;\r\n  padding-bottom: 1.1rem\r\n}\r\n\r\n/* width */\r\n\r\n::-webkit-scrollbar {\r\n  width: 15px;\r\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 5px grey;\r\n  border-radius: 7px;\r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: #6c757d;\r\n  border-radius: 7px;\r\n}\r\n\r\n.no-notes-to-show-for-create-wide-enough {\r\n  width: 455px;\r\n}\r\n\r\nbutton {\r\n  padding: .375rem .75rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\nbutton.main-bottom {\r\n  margin-top: 2.5rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nbutton.main-top {\r\n  margin-top: 1rem;\r\n  margin-bottom: 2.5rem;\r\n}\r\n\r\n.button-badge {\r\n  margin-left: 1.2rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.no-notes-to-show-for-level-button {\r\n  margin-top: 120px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9ub3Rlcy9ub3Rlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtDQUN2Qjs7QUFFRCxXQUFXOztBQUNYO0VBQ0UsWUFBWTtDQUNiOztBQUVELFdBQVc7O0FBQ1g7RUFDRSwrQkFBK0I7RUFDL0IsbUJBQW1CO0NBQ3BCOztBQUVELFlBQVk7O0FBQ1o7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLDZCQUE2QjtDQUM5QiIsImZpbGUiOiJzcmMvYXBwL3dvcmsvbm90ZXMvbm90ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3Rlcy1zZWN0aW9uLWhlaWdodC1mb3Itd29yay1kYXNoYm9hcmQge1xyXG4gIGhlaWdodDogMzMwcHg7XHJcbn1cclxuXHJcbi5ub3Rlcy1zZWN0aW9uLWhlaWdodC1mb3ItcGxhbm5pbmctbW9kYWwge1xyXG4gIGhlaWdodDogNDkwcHg7XHJcbn1cclxuXHJcbi5zY3JvbGxpbmctYXJlYSB7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gIG92ZXJmbG93LXk6YXV0bztcclxuICBvdmVyZmxvdy14OmhpZGRlbjtcclxufVxyXG5cclxuLnZlcnRpY2FsLXBhZGRpbmdzIHtcclxuICBwYWRkaW5nLXRvcDogMS4xcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjFyZW1cclxufVxyXG5cclxuLyogd2lkdGggKi9cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggZ3JleTtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuLm5vLW5vdGVzLXRvLXNob3ctZm9yLWNyZWF0ZS13aWRlLWVub3VnaCB7XHJcbiAgd2lkdGg6IDQ1NXB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG5idXR0b24ubWFpbi1ib3R0b20ge1xyXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG5idXR0b24ubWFpbi10b3Age1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG59XHJcblxyXG4uYnV0dG9uLWJhZGdlIHtcclxuICBtYXJnaW4tbGVmdDogMS4ycmVtO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4ubm8tbm90ZXMtdG8tc2hvdy1mb3ItbGV2ZWwtYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/work/notes/notes.component.html":
/*!*************************************************!*\
  !*** ./src/app/work/notes/notes.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"currentlySelectedHive\">\n  <div class=\"card bg-light vertical-paddings\" [ngClass]=\"getHeight()\">\n    <div\n      class=\"card-body scrolling-area\"\n      id=\"notesScrollArea\"\n      [ngClass]=\"{'no-notes-to-show-for-create-wide-enough':\n      notesComponentType != notesComponentEnum.WORK_DASHBOARD}\">\n      <ng-container *ngIf=\"notesComponentType === notesComponentEnum.WORK_DASHBOARD\">\n        <button\n          *ngIf=\"currentlySelectedHive.activeShortTermNotesCount >= MIN_NO_OF_PLANS_WHEN_SECOND_BUTTON_ADDED\"\n          type=\"button\"\n          class=\"btn btn-light btn-outline-secondary btn-block main-top\"\n          (click)=\"onOpenNotes()\"\n          [disabled]=\"disableControls\">\n          Haldan märkmeid\n          <span class=\"badge badge-dark button-badge\">\n            <span>{{currentlySelectedHive.activeShortTermNotesCount}}</span>\n            <span>{{ currentlySelectedHive.activeLongTermNotesCount ? '/' + currentlySelectedHive.activeLongTermNotesCount : ''}}</span>\n          </span>\n        </button>\n      </ng-container>\n\n\n      <app-note-element\n        *ngFor=\"let note of getRelevantNotesList()\"\n        [note]=\"note\"\n        [memorizedActiveElementId]=\"memorizedActiveNoteElementId\"\n        [notesComponentType]=\"notesComponentType\"\n        [currentlySelectedHive]=\"currentlySelectedHive\">\n      </app-note-element>\n\n      <ng-container *ngIf=\"notesComponentType === notesComponentEnum.WORK_DASHBOARD\">\n        <button\n          type=\"button\"\n          class=\"btn btn-light btn-outline-secondary btn-block main-bottom\"\n          (click)=\"onOpenNotes()\"\n          [ngClass]=\"{'no-notes-to-show-for-level-button': currentlySelectedHive.activeShortTermNotesCount === 0}\"\n          [disabled]=\"disableControls\">\n          Haldan märkmeid\n          <span class=\"badge badge-dark button-badge\">\n            <span>{{currentlySelectedHive.activeShortTermNotesCount}}</span>\n            <span>{{ currentlySelectedHive.activeLongTermNotesCount ? '/' + currentlySelectedHive.activeLongTermNotesCount : ''}}</span>\n          </span>\n        </button>\n      </ng-container>\n\n    </div>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/work/notes/notes.component.ts":
/*!***********************************************!*\
  !*** ./src/app/work/notes/notes.component.ts ***!
  \***********************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../settings/shared/hive.model */ "./src/app/settings/shared/hive.model.ts");
/* harmony import */ var _notes_component_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notes-component.enum */ "./src/app/work/notes/notes-component.enum.ts");
/* harmony import */ var _notes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notes.service */ "./src/app/work/notes/notes.service.ts");
/* harmony import */ var _util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/jw-modal/jw-modal.service */ "./src/app/util/jw-modal/jw-modal.service.ts");
/* harmony import */ var _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/executor/executor.service */ "./src/app/util/executor/executor.service.ts");







var NotesComponent = /** @class */ (function () {
    function NotesComponent(notesService, modalService, executorService) {
        this.notesService = notesService;
        this.modalService = modalService;
        this.executorService = executorService;
        this.notesComponentEnum = _notes_component_enum__WEBPACK_IMPORTED_MODULE_3__["NotesComponentEnum"];
        this.MIN_NO_OF_PLANS_WHEN_SECOND_BUTTON_ADDED = 3;
        this.subscriptions = [];
    }
    NotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.document = document;
        this.subscriptions.push(this.notesService.newNoteElementSelected.asObservable().subscribe(function (ne) {
            if (!ne)
                _this.memorizedActiveNoteElementId = undefined;
            else {
                _this.memorizedActiveNoteElementId = ne.id;
            }
        }));
        this.subscriptions.push(this.executorService.getControlsProtection.subscribe(function (ps) { return _this.disableControls = ps.disableControls; }));
    };
    NotesComponent.prototype.ngOnChanges = function () {
        // this.currentlySelectedHive.unresolvedPlanElements = this.unresolvedPlanElements;
        // this.currentlySelectedHive.resolvedPlanElements = this.resolvedPlanElements;
        setTimeout(function () { return document.getElementById('notesScrollArea').scrollTop = Number.MAX_SAFE_INTEGER; }, 0);
    };
    NotesComponent.prototype.onOpenNotes = function () {
        this.notesService.newNoteElementSelected.next(null);
        this.modalService.open('notes');
    };
    NotesComponent.prototype.getHeight = function () {
        if (this.notesComponentType === _notes_component_enum__WEBPACK_IMPORTED_MODULE_3__["NotesComponentEnum"].WORK_DASHBOARD) {
            return 'notes-section-height-for-work-dashboard';
        }
        else {
            return 'notes-section-height-for-planning-modal';
        }
    };
    NotesComponent.prototype.getRelevantNotesList = function () {
        if (this.notesComponentType === _notes_component_enum__WEBPACK_IMPORTED_MODULE_3__["NotesComponentEnum"].WORK_DASHBOARD) {
            return this.currentlySelectedHive.activeShortTermNotes;
        }
        if (this.notesComponentType === _notes_component_enum__WEBPACK_IMPORTED_MODULE_3__["NotesComponentEnum"].NOTE_MANAGEMENT_ACTIVE) {
            return this.currentlySelectedHive.allActiveNotes;
        }
        if (this.notesComponentType === _notes_component_enum__WEBPACK_IMPORTED_MODULE_3__["NotesComponentEnum"].NOTE_MANAGEMENT_INACTIVE) {
            return this.currentlySelectedHive.deletedNotes;
        }
    };
    NotesComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_2__["Hive"])
    ], NotesComponent.prototype, "currentlySelectedHive", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NotesComponent.prototype, "notesComponentType", void 0);
    NotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__(/*! ./notes.component.html */ "./src/app/work/notes/notes.component.html"),
            styles: [__webpack_require__(/*! ./notes.component.css */ "./src/app/work/notes/notes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_notes_service__WEBPACK_IMPORTED_MODULE_4__["NotesService"],
            _util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_5__["JwModalService"],
            _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_6__["ExecutorService"]])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "./src/app/work/notes/notes.service.ts":
/*!*********************************************!*\
  !*** ./src/app/work/notes/notes.service.ts ***!
  \*********************************************/
/*! exports provided: NotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesService", function() { return NotesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/spinner/spinner.service */ "./src/app/util/spinner/spinner.service.ts");
/* harmony import */ var _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../settings/shared/colonies.service */ "./src/app/settings/shared/colonies.service.ts");
/* harmony import */ var _notes_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notes-data.service */ "./src/app/work/notes/notes-data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var NotesService = /** @class */ (function () {
    function NotesService(spinnerService, coloniesService, notesDataService) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.coloniesService = coloniesService;
        this.notesDataService = notesDataService;
        this.newNoteElementSelected = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.updateNote = function (note, hiveId) {
            _this.notesDataService.updateNote(note, hiveId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
                .subscribe(function () {
                _this.coloniesService.retrieveColonies();
            });
        };
    }
    NotesService.prototype.addNewNote = function (newNote, hiveId) {
        var _this = this;
        this.spinnerService.setSpinnerStatus.next(true);
        this.notesDataService.addNewNote(newNote, hiveId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe(function () {
            _this.coloniesService.retrieveColonies();
        });
    };
    NotesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"],
            _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_4__["ColoniesService"],
            _notes_data_service__WEBPACK_IMPORTED_MODULE_5__["NotesDataService"]])
    ], NotesService);
    return NotesService;
}());



/***/ }),

/***/ "./src/app/work/overview/mother-status-cell.pipe.ts":
/*!**********************************************************!*\
  !*** ./src/app/work/overview/mother-status-cell.pipe.ts ***!
  \**********************************************************/
/*! exports provided: MotherStatusCellPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotherStatusCellPipe", function() { return MotherStatusCellPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mother_mom_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mother/mom-status.enum */ "./src/app/work/mother/mom-status.enum.ts");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/util.service */ "./src/app/util/util.service.ts");
/* harmony import */ var _mother_marked_status_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mother/marked-status.enum */ "./src/app/work/mother/marked-status.enum.ts");





var MotherStatusCellPipe = /** @class */ (function () {
    function MotherStatusCellPipe() {
        this.monthNames = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni",
            "Juuli", "August", "September", "Oktoober", "November", "Detsember"
        ];
    }
    MotherStatusCellPipe.prototype.transform = function (attributes, getClass) {
        if (!attributes) {
            return '';
        }
        switch (attributes.momStatus) {
            case _mother_mom_status_enum__WEBPACK_IMPORTED_MODULE_2__["MomStatusEnum"].FREAK: {
                if (_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].getAbsoluteDaysBeforeTodaysDate(attributes.statusStartingDate) > 1) {
                    return getClass ? '' : 'väärema alates: <br>' +
                        _util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].getAbsoluteDaysBeforeTodaysDate(attributes.statusStartingDate)
                        + ' päeva tagasi';
                }
                if (_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].getAbsoluteDaysBeforeTodaysDate(attributes.statusStartingDate) == 1) {
                    return getClass ? '' : 'väärema alates eilsest';
                }
                return getClass ? '' : 'väärema alates tänasest';
            }
            case _mother_mom_status_enum__WEBPACK_IMPORTED_MODULE_2__["MomStatusEnum"].MISSING:
            case _mother_mom_status_enum__WEBPACK_IMPORTED_MODULE_2__["MomStatusEnum"].UNKNOWN: {
                if (!attributes.controlFrameStartDate) {
                    return getClass ? 'danger' : 'Kontrollraam puudu!';
                }
                var controlframeText = 'Kontrollraam valitud:<br>' + _util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].getAbsoluteDaysBeforeTodaysDate(attributes.controlFrameStartDate) + ' päeva tagasi <br>';
                var cocoonText = void 0;
                if (!attributes.cocoonChosenDate) {
                    cocoonText = '<b>Kupp valimata!</b>';
                    return getClass ? 'warning' : controlframeText + cocoonText;
                }
                cocoonText = 'Kupp valitud ' + _util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].getAbsoluteDaysBeforeTodaysDate(attributes.cocoonChosenDate) + ' päeva tagasi';
                return getClass ? '' : controlframeText + cocoonText;
            }
            case _mother_mom_status_enum__WEBPACK_IMPORTED_MODULE_2__["MomStatusEnum"].UN_CAGED:
            case _mother_mom_status_enum__WEBPACK_IMPORTED_MODULE_2__["MomStatusEnum"].HATCHED:
            case _mother_mom_status_enum__WEBPACK_IMPORTED_MODULE_2__["MomStatusEnum"].SEEN: {
                var returnText = void 0;
                if (!attributes.isLayingEggs) {
                    if (getClass) {
                        return 'warning';
                    }
                    if (attributes.momStatus === _mother_mom_status_enum__WEBPACK_IMPORTED_MODULE_2__["MomStatusEnum"].HATCHED) {
                        returnText = 'Koorunud: ' + _util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].getAbsoluteDaysBeforeTodaysDate(attributes.statusStartingDate) + ' päeva tagasi';
                    }
                    else if (attributes.momStatus === _mother_mom_status_enum__WEBPACK_IMPORTED_MODULE_2__["MomStatusEnum"].UN_CAGED) {
                        returnText = 'Puurist välja lastud: ' + _util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].getAbsoluteDaysBeforeTodaysDate(attributes.statusStartingDate) + ' päeva tagasi';
                    }
                    else if (attributes.momStatus === _mother_mom_status_enum__WEBPACK_IMPORTED_MODULE_2__["MomStatusEnum"].SEEN) {
                        returnText = 'Ema nähtud: ' + _util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].getAbsoluteDaysBeforeTodaysDate(attributes.statusStartingDate) + ' päeva tagasi';
                    }
                    returnText = returnText + '<br><b>Mune pole nähtud!</b>';
                }
                else {
                    returnText = 'Mune nähtud ' + _util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].getAbsoluteDaysBeforeTodaysDate(attributes.eggsLastSeen) + ' päeva tagasi';
                }
                if (attributes.markedDate) {
                    var markedDate = new Date(attributes.markedDate);
                    if (attributes.isMarkedDateMonthSet) {
                        returnText = returnText + '<br>Märgistatud: ' + this.monthNames[markedDate.getMonth()] + ' ' + markedDate.getFullYear();
                    }
                    else {
                        returnText = returnText + '<br>Märgistatud: ' + markedDate.getFullYear();
                    }
                }
                if (attributes.markedStatus === _mother_marked_status_enum__WEBPACK_IMPORTED_MODULE_4__["MarkedStatusEnum"].MARKED && attributes.markedDescription) {
                    returnText = returnText + '<br>Märgistus: ' + attributes.markedDescription;
                }
                else if (attributes.markedStatus === _mother_marked_status_enum__WEBPACK_IMPORTED_MODULE_4__["MarkedStatusEnum"].ATTENTION) {
                    if (getClass) {
                        return 'warning';
                    }
                    returnText = returnText + '<br><b>Probleemne märgistus</b>';
                    if (attributes.markedDescription) {
                        returnText = returnText + ': ' + attributes.markedDescription;
                    }
                }
                else if (attributes.markedStatus === _mother_marked_status_enum__WEBPACK_IMPORTED_MODULE_4__["MarkedStatusEnum"].UNMARKED) {
                    if (getClass)
                        return 'warning';
                    returnText = returnText + '<br><b>Märgistus puudub!</b>';
                }
                if (attributes.birthday) {
                    var birthDay = new Date(attributes.birthday);
                    if (attributes.isBirthdayDateMonthSet) {
                        returnText = returnText + '<br>Koorunud: ' + this.monthNames[birthDay.getMonth()] + ' ' + birthDay.getFullYear();
                    }
                    else {
                        returnText = returnText + '<br>Koorunud: ' + birthDay.getFullYear();
                    }
                }
                return getClass ? '' : returnText;
            }
            case _mother_mom_status_enum__WEBPACK_IMPORTED_MODULE_2__["MomStatusEnum"].IN_CAGE: {
                var returnText = void 0;
                returnText = 'Puuriga tarru pandud: ' + _util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].getAbsoluteDaysBeforeTodaysDate(attributes.statusStartingDate) + ' päeva tagasi';
                if (attributes.markedDate) {
                    var markedDate = new Date(attributes.markedDate);
                    if (attributes.isMarkedDateMonthSet) {
                        returnText = returnText + '<br>Märgistatud: ' + this.monthNames[markedDate.getMonth()] + ' ' + markedDate.getFullYear();
                    }
                    else {
                        returnText = returnText + '<br>Märgistatud: ' + markedDate.getFullYear();
                    }
                }
                if (attributes.markedStatus === _mother_marked_status_enum__WEBPACK_IMPORTED_MODULE_4__["MarkedStatusEnum"].MARKED && attributes.markedDescription) {
                    returnText = returnText + '<br>Märgistus: ' + attributes.markedDescription;
                }
                else if (attributes.markedStatus === _mother_marked_status_enum__WEBPACK_IMPORTED_MODULE_4__["MarkedStatusEnum"].ATTENTION) {
                    if (getClass) {
                        return 'warning';
                    }
                    returnText = returnText + '<br><b>Probleemne märgistus</b>';
                    if (attributes.markedDescription) {
                        returnText = returnText + ': ' + attributes.markedDescription;
                    }
                }
                else if (attributes.markedStatus === _mother_marked_status_enum__WEBPACK_IMPORTED_MODULE_4__["MarkedStatusEnum"].UNMARKED) {
                    if (getClass)
                        return 'warning';
                    returnText = returnText + '<br><b>Märgistus puudub!</b>';
                }
                if (attributes.birthday) {
                    var birthDay = new Date(attributes.birthday);
                    if (attributes.isBirthdayDateMonthSet) {
                        returnText = returnText + '<br>Koorunud: ' + this.monthNames[birthDay.getMonth()] + ' ' + birthDay.getFullYear();
                    }
                    else {
                        returnText = returnText + '<br>Koorunud: ' + birthDay.getFullYear();
                    }
                }
                return getClass ? '' : returnText;
            }
            default: {
                return '';
            }
        }
    };
    MotherStatusCellPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'motherStatusCell',
            pure: false
        })
    ], MotherStatusCellPipe);
    return MotherStatusCellPipe;
}());



/***/ }),

/***/ "./src/app/work/overview/overview.component.css":
/*!******************************************************!*\
  !*** ./src/app/work/overview/overview.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.big-text {\r\n  font-size: 2rem;\r\n}\r\n\r\n.planning-header {\r\n  font-weight: 500;\r\n  margin-right: 60px;\r\n}\r\n\r\nbutton.closing {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  padding: 2px 2px 2px 2px;\r\n  min-width: 0;\r\n  min-height: 0;\r\n}\r\n\r\nimg {\r\n  height: 40px;\r\n}\r\n\r\ntd.normal {\r\n  background-color: #92e69f;\r\n}\r\n\r\ntd.warning {\r\n  background-color: #fffa87;\r\n}\r\n\r\ntd.danger {\r\n  background-color: red;\r\n  color: white;\r\n}\r\n\r\ntd.plan-without-deadline {\r\n  background-color: #dcdcdc;\r\n}\r\n\r\nbutton {\r\n  min-width: 80px;\r\n  width: 100%;\r\n  min-height: 62px;\r\n}\r\n\r\nbutton.navigation {\r\n  font-size: 1.5em;\r\n}\r\n\r\nth.with-button {\r\n  padding: 5px;\r\n}\r\n\r\ntd.with-button {\r\n  padding: 5px;\r\n}\r\n\r\nth {\r\n  text-align: center;\r\n}\r\n\r\ntd {\r\n  text-align: center;\r\n}\r\n\r\ntd.number {\r\n  font-size: 1.25em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9vdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsNEJBQW9CO0VBQXBCLHlCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtDQUNkOztBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC93b3JrL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5iaWctdGV4dCB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4ucGxhbm5pbmctaGVhZGVyIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1yaWdodDogNjBweDtcclxufVxyXG5cclxuYnV0dG9uLmNsb3Npbmcge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIHBhZGRpbmc6IDJweCAycHggMnB4IDJweDtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgbWluLWhlaWdodDogMDtcclxufVxyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbnRkLm5vcm1hbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyZTY5ZjtcclxufVxyXG5cclxudGQud2FybmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmE4NztcclxufVxyXG5cclxudGQuZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG50ZC5wbGFuLXdpdGhvdXQtZGVhZGxpbmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2RjZGM7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDYycHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5uYXZpZ2F0aW9uIHtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG50aC53aXRoLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG50ZC53aXRoLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG50aCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ZC5udW1iZXIge1xyXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/work/overview/overview.component.html":
/*!*******************************************************!*\
  !*** ./src/app/work/overview/overview.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<jw-modal id=\"overview\" [marginLess]=\"true\">\n  <div class=\"card bg-light\">\n    <div class=\"card-header nav\">\n      <span class=\"navbar-brand big-text planning-header\">Mesila ülevaade</span>\n      <button\n        class=\"btn btn-danger nav-item closing ml-auto\"\n        (click)=\"utilService.showOverviewWindow(false)\">\n        <img\n          src=\"assets/img/sulge.jpeg\"\n          class=\"x\">\n      </button>\n    </div>\n    <ng-container *ngFor=\"let colony of colonies\">\n      <h3 class=\"mt-5\">{{colony.name}}</h3>\n      <table class=\"table table-striped\">\n        <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\">#</th>\n          <th scope=\"col\">Järgmine tähtaeg</th>\n          <th scope=\"col\">Järgmine planeering <br> (kokku planeeringuid)</th>\n          <th scope=\"col\">Ema staatus</th>\n          <th scope=\"col\">Ema staatuse info</th>\n          <th scope=\"col\">Peres raame</th>\n          <th scope=\"col\">Magasin</th>\n          <th scope=\"col\">Viimane märge <br> (kokku märkmeid)</th>\n          <th scope=\"col\"></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let hive of colony.hives\">\n          <th scope=\"row\" class=\"navigation with-button\">\n            <button\n              class=\"btn btn-outline-secondary navigation\"\n              (click)=\"coloniesService.notifyColonyHiveSelection(colony.id, hive.id); utilService.showOverviewWindow(false)\">\n              {{hive.number}}\n            </button>\n          </th>\n          <td class=\"{{hive.unresolvedPlanElements[hive.unresolvedPlanElements.length - 1] | deadlineClass}}\">\n            {{hive.unresolvedPlanElements[hive.unresolvedPlanElements.length - 1] | deadlineText}}\n          </td>\n          <td class=\"with-button\">\n            <button\n              class=\"btn btn-outline-secondary\"\n              (click)=\"onOpenOverviewPlanning(colony, hive)\">\n              {{hive.unresolvedPlanElements[hive.unresolvedPlanElements.length - 1] | planText}}\n              <br>\n              <strong>{{'(' + hive.unresolvedPlanElements.length + ')'}}</strong>\n            </button>\n          </td>\n          <td class=\"{{hive.momAttributes.momStatus | motherStatusText : true}}\">\n            {{hive.momAttributes.momStatus | motherStatusText}}\n          </td>\n          <td class=\"{{hive.momAttributes | motherStatusCell : true}}\"\n              [innerHTML]=\"hive.momAttributes | motherStatusCell\">\n\n          </td>\n          <td class=\"number\">{{hive.threeSizeLogs[0].totalNumOfFrames}}</td>\n          <td class=\"number\">{{hive.threeSizeLogs[0].hasMagazine\n            ? hive.threeSizeLogs[0].magazineSize + '%'\n            : '-'}}</td>\n          <td class=\"with-button\">\n            <button\n              class=\"btn btn-outline-secondary\"\n              (click)=\"onOpenOverviewNotes(colony, hive)\">\n              {{hive.activeShortTermNotesCount != 0\n              ? hive.activeShortTermNotes[hive.activeShortTermNotesCount - 1].text\n              : ''}}\n              <br>\n              <strong>\n                <span>{{'(' + hive.activeShortTermNotesCount}}</span>\n                <span>{{ hive.activeLongTermNotesCount ? '/' + hive.activeLongTermNotesCount + ')' : ')'}}</span>\n              </strong>\n            </button>\n          </td>\n          <td><img *ngIf=\"hasNoteWithWarning(hive.allActiveNotes)\" src=\"assets/img/warning.png\"></td>\n        </tr>\n        </tbody>\n      </table>\n    </ng-container>\n\n    <h5 align=\"center\" class=\"mt-5\" style=\"text-decoration: underline\">\n      <a\n        href=\"https://docs.google.com/spreadsheets/d/1h0OxIKG2roBrZ-jXIM_hsyybjaJB-E8EZZqruGyzgj8/edit?usp=sharing\"\n        target=\"_blank\">->Kui midagi rakenduse kasutamist segab või peaks midagi muutma <-\n      </a>\n    </h5>\n\n  </div>\n</jw-modal>\n\n<app-note-mgmt\n  *ngIf=\"overviewSelectedHive && overviewSelectedColony\"\n  [currentlyChosenHive]=\"overviewSelectedHive\"\n  [currentlyChosenColony]=\"overviewSelectedColony\"\n  [mgmtComponentId]=\"'overview-notes'\"\n></app-note-mgmt>\n\n<app-planning-mgmt\n  *ngIf=\"overviewSelectedHive && overviewSelectedColony\"\n  [currentlyChosenHive]=\"overviewSelectedHive\"\n  [currentlyChosenColony]=\"overviewSelectedColony\"\n  [mgmtComponentid]=\"'overview-planning'\"\n></app-planning-mgmt>\n"

/***/ }),

/***/ "./src/app/work/overview/overview.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/work/overview/overview.component.ts ***!
  \*****************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/util.service */ "./src/app/util/util.service.ts");
/* harmony import */ var _util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/jw-modal/jw-modal.service */ "./src/app/util/jw-modal/jw-modal.service.ts");
/* harmony import */ var _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../settings/shared/colonies.service */ "./src/app/settings/shared/colonies.service.ts");





var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(utilService, modalService, coloniesService) {
        this.utilService = utilService;
        this.modalService = modalService;
        this.coloniesService = coloniesService;
    }
    OverviewComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.overviewSelectedHiveId && this.overviewSelectedColonyId) {
            this.overviewSelectedColony =
                this.colonies.find(function (colony) { return colony.id === _this.overviewSelectedColonyId; });
            this.overviewSelectedHive =
                this.overviewSelectedColony.hives.find(function (hive) { return hive.id === _this.overviewSelectedHiveId; });
        }
    };
    OverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.openOverviewSubscription = this.utilService.overview$.subscribe(function (status) {
            if (status) {
                _this.modalService.open('overview');
            }
            else {
                _this.modalService.close('overview');
            }
        });
    };
    OverviewComponent.prototype.ngOnDestroy = function () {
        this.openOverviewSubscription.unsubscribe();
    };
    OverviewComponent.prototype.onOpenOverviewNotes = function (colony, hive) {
        var _this = this;
        this.overviewSelectedColony = colony;
        this.overviewSelectedColonyId = colony.id;
        this.overviewSelectedHive = hive;
        this.overviewSelectedHiveId = hive.id;
        setTimeout(function () { return _this.modalService.open('overview-notes'); }, 0);
    };
    OverviewComponent.prototype.onOpenOverviewPlanning = function (colony, hive) {
        var _this = this;
        this.overviewSelectedColony = colony;
        this.overviewSelectedColonyId = colony.id;
        this.overviewSelectedHive = hive;
        this.overviewSelectedHiveId = hive.id;
        setTimeout(function () { return _this.modalService.open('overview-planning'); }, 0);
    };
    OverviewComponent.prototype.hasNoteWithWarning = function (notes) {
        if (!notes) {
            return undefined;
        }
        return notes.find(function (n) { return n.hasWarning; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], OverviewComponent.prototype, "colonies", void 0);
    OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/work/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.css */ "./src/app/work/overview/overview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
            _util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_3__["JwModalService"],
            _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_4__["ColoniesService"]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/work/planning/plan-element/deadline-class.pipe.ts":
/*!*******************************************************************!*\
  !*** ./src/app/work/planning/plan-element/deadline-class.pipe.ts ***!
  \*******************************************************************/
/*! exports provided: DeadlineClassPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeadlineClassPipe", function() { return DeadlineClassPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/util.service */ "./src/app/util/util.service.ts");



var DeadlineClassPipe = /** @class */ (function () {
    function DeadlineClassPipe() {
    }
    DeadlineClassPipe.prototype.transform = function (plan) {
        if (!plan) {
            return '';
        }
        var daysToDeadline = _util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"].getDaysBeforeTodaysDate(plan.deadline);
        if (plan.withoutDeadline) {
            return '';
        }
        else if (daysToDeadline < -1) {
            return 'normal';
        }
        else if (daysToDeadline < 3) {
            return 'warning';
        }
        else {
            return 'danger';
        }
    };
    DeadlineClassPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'deadlineClass',
            pure: false
        })
    ], DeadlineClassPipe);
    return DeadlineClassPipe;
}());



/***/ }),

/***/ "./src/app/work/planning/plan-element/deadline-text.pipe.ts":
/*!******************************************************************!*\
  !*** ./src/app/work/planning/plan-element/deadline-text.pipe.ts ***!
  \******************************************************************/
/*! exports provided: DeadlineTextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeadlineTextPipe", function() { return DeadlineTextPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/util.service */ "./src/app/util/util.service.ts");



var DeadlineTextPipe = /** @class */ (function () {
    function DeadlineTextPipe() {
    }
    DeadlineTextPipe.prototype.transform = function (plan) {
        if (!plan) {
            return '';
        }
        var daysToDeadline = _util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"].getDaysBeforeTodaysDate(plan.deadline);
        if (plan.withoutDeadline) {
            return 'tähtajatu';
        }
        else if (daysToDeadline < -1) {
            return Math.abs(daysToDeadline) + ' päeva pärast';
        }
        else if (daysToDeadline === -1) {
            return 'homme';
        }
        else if (daysToDeadline === 0) {
            return 'täna';
        }
        else {
            return daysToDeadline + ' päeva üle';
        }
    };
    DeadlineTextPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'deadlineText',
            pure: false
        })
    ], DeadlineTextPipe);
    return DeadlineTextPipe;
}());



/***/ }),

/***/ "./src/app/work/planning/plan-element/plan-element.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/work/planning/plan-element/plan-element.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".planning-element {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 3px;\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0,0,0,.125);\r\n  border-radius: 5px;\r\n  display: table;\r\n  min-height: 86px;\r\n}\r\n\r\n.deadline-area {\r\n  border: 1px solid rgba(0,0,0,.125);\r\n  border-radius: 5px;\r\n  padding: .375rem .5rem;\r\n  text-align: center;\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  width: 120px;\r\n}\r\n\r\n.unresolved-button {\r\n  background-color: #f8f9fa;\r\n  border-color: #218838;\r\n  box-shadow: 0 0 4px 4px #218838;\r\n  padding: 0px;\r\n  z-index: 1;\r\n  position: relative;\r\n}\r\n\r\n.normal {\r\n  background-color: #92e69f;\r\n}\r\n\r\n.warning {\r\n  background-color: #fffa87;\r\n}\r\n\r\n.danger {\r\n  background-color: red;\r\n  color: white;\r\n}\r\n\r\n.without-deadline {\r\n  background-color: #dcdcdc;\r\n}\r\n\r\n.text-area {\r\n  vertical-align: middle;\r\n  display: table-cell;\r\n}\r\n\r\n.not-button-area-active-color {\r\n  background-color: #dcdcdc;\r\n  z-index: 0;\r\n  position: relative;\r\n}\r\n\r\n.active-container {\r\n  box-shadow: 0 0 4px 4px gray;\r\n}\r\n\r\n.disabled-look {\r\n  opacity: 0.5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9wbGFubmluZy9wbGFuLWVsZW1lbnQvcGxhbi1lbGVtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSw2QkFBNkI7Q0FDOUI7O0FBRUQ7RUFDRSxhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC93b3JrL3BsYW5uaW5nL3BsYW4tZWxlbWVudC9wbGFuLWVsZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGFubmluZy1lbGVtZW50IHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBtaW4taGVpZ2h0OiA4NnB4O1xyXG59XHJcblxyXG4uZGVhZGxpbmUtYXJlYSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogLjM3NXJlbSAuNXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLnVucmVzb2x2ZWQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1jb2xvcjogIzIxODgzODtcclxuICBib3gtc2hhZG93OiAwIDAgNHB4IDRweCAjMjE4ODM4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm5vcm1hbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyZTY5ZjtcclxufVxyXG5cclxuLndhcm5pbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZhODc7XHJcbn1cclxuXHJcbi5kYW5nZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi53aXRob3V0LWRlYWRsaW5lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkY2RjO1xyXG59XHJcblxyXG4udGV4dC1hcmVhIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbn1cclxuXHJcbi5ub3QtYnV0dG9uLWFyZWEtYWN0aXZlLWNvbG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkY2RjO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYWN0aXZlLWNvbnRhaW5lciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDRweCA0cHggZ3JheTtcclxufVxyXG5cclxuLmRpc2FibGVkLWxvb2sge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/work/planning/plan-element/plan-element.component.html":
/*!************************************************************************!*\
  !*** ./src/app/work/planning/plan-element/plan-element.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"container planning-element p-0\"\n  [ngClass]=\"{'disabled-look': disableControls}\">\n  <ng-container *ngIf=\"planningComponentType != planningComponentEnum.PLANNING_MANAGEMENT_RESOLVED; else resolved\">\n    <ng-container *ngIf=\"inActive; else activeUnresolved\">\n      <div\n        class=\"deadline-area\"\n        [ngClass]=\"getColor()\"\n        (click)=\"disableControls ? $event.stopPropagation() : onElementClick()\">\n        {{ deadlineText }}\n      </div>\n      <div\n        class=\"text-area planning-element-text-area\"\n        (click)=\"disableControls ? $event.stopPropagation() : onElementClick()\">\n        {{getText()}}\n      </div>\n    </ng-container>\n\n    <ng-template #activeUnresolved>\n      <div class=\"deadline-area unresolved-button\" (click)=\"onResolveElement()\">\n        {{'loen tehtuks&#x2714;\\t' }}\n      </div>\n      <div class=\"text-area not-button-area-active-color planning-element-text-area\">\n        {{getText()}}\n      </div>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #resolved>\n    <ng-container *ngIf=\"inActive; else activeResolved\">\n      <div class=\"deadline-area\" (click)=\"onElementClick()\">\n        {{ plan.resolvedDate | date:'dd.MM.yy' }}\n      </div>\n      <div class=\"text-area planning-element-text-area\" (click)=\"onElementClick()\">\n        {{getText()}}\n      </div>\n    </ng-container>\n\n    <ng-template #activeResolved>\n      <div class=\"deadline-area not-button-area-active-color\">\n        {{ plan.resolvedDate | date:'dd.MM.yy' }}\n      </div>\n      <div class=\"text-area not-button-area-active-color planning-element-text-area\">\n        {{getText()}}\n      </div>\n    </ng-template>\n  </ng-template>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/work/planning/plan-element/plan-element.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/work/planning/plan-element/plan-element.component.ts ***!
  \**********************************************************************/
/*! exports provided: PlanElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanElementComponent", function() { return PlanElementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _plan_element_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plan-element.model */ "./src/app/work/planning/plan-element/plan-element.model.ts");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/util.service */ "./src/app/util/util.service.ts");
/* harmony import */ var _planning_component_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../planning-component.enum */ "./src/app/work/planning/planning-component.enum.ts");
/* harmony import */ var _planning_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../planning.service */ "./src/app/work/planning/planning.service.ts");
/* harmony import */ var _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../settings/shared/hive.model */ "./src/app/settings/shared/hive.model.ts");
/* harmony import */ var _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../util/executor/executor.service */ "./src/app/util/executor/executor.service.ts");








var PlanElementComponent = /** @class */ (function () {
    function PlanElementComponent(planningService, executorServcice) {
        this.planningService = planningService;
        this.executorServcice = executorServcice;
        this.subscriptions = [];
        this.planningComponentEnum = _planning_component_enum__WEBPACK_IMPORTED_MODULE_4__["PlanningComponentEnum"];
        this.inActive = true;
        this.ELEMENT_DELETED_FROM_DROPDOWN = 'element rippmenüüst kustutatud';
    }
    PlanElementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setDeadlineText();
        this.subscriptions.push(this.planningService.newPlanElementSelected.asObservable().subscribe(function () { return _this.inActive = true; }));
        this.subscriptions.push(this.executorServcice.getControlsProtection.subscribe(function (ps) { return _this.disableControls = ps.disableControls; }));
        if (this.memorizedActiveElementId === this.plan.id &&
            this.planningComponentType === _planning_component_enum__WEBPACK_IMPORTED_MODULE_4__["PlanningComponentEnum"].PLANNING_MANAGEMENT_UNRESOLVED) {
            this.inActive = false;
        }
    };
    PlanElementComponent.prototype.setDeadlineText = function () {
        this.daysToDeadline = _util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].getDaysBeforeTodaysDate(this.plan.deadline);
        if (this.plan.withoutDeadline) {
            this.deadlineText = 'tähtajatu';
        }
        else if (this.daysToDeadline < -1) {
            this.deadlineText = Math.abs(this.daysToDeadline) + ' päeva pärast';
        }
        else if (this.daysToDeadline === -1) {
            this.deadlineText = 'homme';
        }
        else if (this.daysToDeadline === 0) {
            this.deadlineText = 'täna';
        }
        else {
            this.deadlineText = this.daysToDeadline + ' päeva üle';
        }
    };
    PlanElementComponent.prototype.getColor = function () {
        if (this.plan.withoutDeadline) {
            return 'without-deadline';
        }
        else if (this.daysToDeadline < -1) {
            return 'normal';
        }
        else if (this.daysToDeadline < 3) {
            return 'warning';
        }
        else {
            return 'danger';
        }
    };
    PlanElementComponent.prototype.onElementClick = function () {
        var _this = this;
        this.planningService.newPlanElementSelected.next(this.plan);
        if (this.planningComponentType === _planning_component_enum__WEBPACK_IMPORTED_MODULE_4__["PlanningComponentEnum"].WORK_DASHBOARD) {
            clearTimeout(this.showAsActiveTimeout);
            this.inActive = false;
            this.showAsActiveTimeout = setTimeout(function () {
                _this.inActive = true;
            }, 2500);
        }
        else {
            this.inActive = false;
        }
    };
    PlanElementComponent.prototype.getText = function () {
        var _this = this;
        if (this.plan.dropDown) {
            if (!this.planningService.planningDropDown) {
                return this.ELEMENT_DELETED_FROM_DROPDOWN;
            }
            var dropDownElement = this.planningService.planningDropDown.find(function (e) { return e.id == _this.plan.dropDownElementId; });
            if (dropDownElement) {
                return dropDownElement.text;
            }
            else {
                return this.ELEMENT_DELETED_FROM_DROPDOWN;
            }
        }
        else {
            return this.plan.text;
        }
    };
    PlanElementComponent.prototype.onResolveElement = function () {
        this.planningService.newPlanElementSelected.next(null);
        this.plan.resolvedDate = new Date();
        this.plan.resolved = true;
        this.planningService.updatePlan(this.plan, this.currentlyChosenHive.id);
    };
    PlanElementComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _plan_element_model__WEBPACK_IMPORTED_MODULE_2__["PlanElement"])
    ], PlanElementComponent.prototype, "plan", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_6__["Hive"])
    ], PlanElementComponent.prototype, "currentlyChosenHive", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PlanElementComponent.prototype, "planningComponentType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PlanElementComponent.prototype, "memorizedActiveElementId", void 0);
    PlanElementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plan-element',
            template: __webpack_require__(/*! ./plan-element.component.html */ "./src/app/work/planning/plan-element/plan-element.component.html"),
            styles: [__webpack_require__(/*! ./plan-element.component.css */ "./src/app/work/planning/plan-element/plan-element.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_planning_service__WEBPACK_IMPORTED_MODULE_5__["PlanningService"],
            _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_7__["ExecutorService"]])
    ], PlanElementComponent);
    return PlanElementComponent;
}());



/***/ }),

/***/ "./src/app/work/planning/plan-element/plan-element.model.ts":
/*!******************************************************************!*\
  !*** ./src/app/work/planning/plan-element/plan-element.model.ts ***!
  \******************************************************************/
/*! exports provided: PlanElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanElement", function() { return PlanElement; });
var PlanElement = /** @class */ (function () {
    function PlanElement() {
    }
    return PlanElement;
}());



/***/ }),

/***/ "./src/app/work/planning/plan-element/plan-text.pipe.ts":
/*!**************************************************************!*\
  !*** ./src/app/work/planning/plan-element/plan-text.pipe.ts ***!
  \**************************************************************/
/*! exports provided: PlanTextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanTextPipe", function() { return PlanTextPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _planning_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../planning.service */ "./src/app/work/planning/planning.service.ts");



var PlanTextPipe = /** @class */ (function () {
    function PlanTextPipe(planningService) {
        this.planningService = planningService;
        this.ELEMENT_DELETED_FROM_DROPDOWN = 'element rippmenüüst kustutatud';
    }
    PlanTextPipe.prototype.transform = function (plan) {
        if (!plan) {
            return '';
        }
        if (plan.dropDown) {
            if (!this.planningService.planningDropDown) {
                return this.ELEMENT_DELETED_FROM_DROPDOWN;
            }
            var dropDownElement = this.planningService.planningDropDown.find(function (e) { return e.id == plan.dropDownElementId; });
            if (dropDownElement) {
                return dropDownElement.text;
            }
            else {
                return this.ELEMENT_DELETED_FROM_DROPDOWN;
            }
        }
        else {
            return plan.text;
        }
    };
    PlanTextPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'planText',
            pure: false
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_planning_service__WEBPACK_IMPORTED_MODULE_2__["PlanningService"]])
    ], PlanTextPipe);
    return PlanTextPipe;
}());



/***/ }),

/***/ "./src/app/work/planning/planning-component.enum.ts":
/*!**********************************************************!*\
  !*** ./src/app/work/planning/planning-component.enum.ts ***!
  \**********************************************************/
/*! exports provided: PlanningComponentEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningComponentEnum", function() { return PlanningComponentEnum; });
var PlanningComponentEnum;
(function (PlanningComponentEnum) {
    PlanningComponentEnum[PlanningComponentEnum["WORK_DASHBOARD"] = 0] = "WORK_DASHBOARD";
    PlanningComponentEnum[PlanningComponentEnum["PLANNING_MANAGEMENT_UNRESOLVED"] = 1] = "PLANNING_MANAGEMENT_UNRESOLVED";
    PlanningComponentEnum[PlanningComponentEnum["PLANNING_MANAGEMENT_RESOLVED"] = 2] = "PLANNING_MANAGEMENT_RESOLVED";
})(PlanningComponentEnum || (PlanningComponentEnum = {}));


/***/ }),

/***/ "./src/app/work/planning/planning-data.service.ts":
/*!********************************************************!*\
  !*** ./src/app/work/planning/planning-data.service.ts ***!
  \********************************************************/
/*! exports provided: PlanningDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningDataService", function() { return PlanningDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/util.service */ "./src/app/util/util.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var PlanningDataService = /** @class */ (function () {
    function PlanningDataService(httpClient) {
        this.httpClient = httpClient;
    }
    PlanningDataService.prototype.addNewPlan = function (newPlan, hiveId) {
        return this.httpClient.post(_util_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"].backEndURL + 'api/hive/' + hiveId + '/planning', newPlan);
    };
    PlanningDataService.prototype.updatePlan = function (plan, hiveId) {
        return this.httpClient.put(_util_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"].backEndURL + 'api/hive/' + hiveId + '/planning/' + plan.id, plan);
    };
    PlanningDataService.prototype.getPlanningDropdownElements = function () {
        return this.httpClient.get(_util_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"].backEndURL + 'api/planning-dropdown');
    };
    PlanningDataService.prototype.createDropdownElement = function (newDropdonwElement) {
        return this.httpClient.post(_util_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"].backEndURL + 'api/planning-dropdown', newDropdonwElement);
    };
    PlanningDataService.prototype.updateDropdownElement = function (element) {
        return this.httpClient.put(_util_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"].backEndURL + 'api/planning-dropdown/' + element.id, element);
    };
    PlanningDataService.prototype.updateAllDropdownElements = function (elements) {
        return this.httpClient.put(_util_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"].backEndURL + 'api/planning-dropdown/update-all', elements);
    };
    PlanningDataService.prototype.deleteDropdownElement = function (id) {
        return this.httpClient.delete(_util_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"].backEndURL + 'api/planning-dropdown/' + id);
    };
    PlanningDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PlanningDataService);
    return PlanningDataService;
}());



/***/ }),

/***/ "./src/app/work/planning/planning-dropdown/planning-dropdown-element/planning-dropdown-element.component.css":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/work/planning/planning-dropdown/planning-dropdown-element/planning-dropdown-element.component.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".planning-dropdown-element {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 3px;\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0,0,0,.125);\r\n  border-radius: 5px;\r\n  display: table;\r\n  min-height: 86px;\r\n}\r\n\r\n.trashcan-area {\r\n  border: 1px solid rgba(0,0,0,.125);\r\n  border-radius: 5px;\r\n  padding: .375rem .5rem;\r\n  text-align: center;\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  width: 120px;\r\n  z-index: 1;\r\n  position: relative;\r\n}\r\n\r\n.active-design {\r\n  background-color: #dcdcdc;\r\n  box-shadow: 0 0 4px 4px gray;\r\n}\r\n\r\nimg.trash-picture {\r\n  height: 40px;\r\n}\r\n\r\n.text-area {\r\n  vertical-align: middle;\r\n  display: table-cell;\r\n}\r\n\r\n.disabled-look {\r\n  opacity: 0.5;\r\n}\r\n\r\n.not-button-area {\r\n  z-index: 0;\r\n  position: relative;\r\n  background-color: #eeeeee;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9wbGFubmluZy9wbGFubmluZy1kcm9wZG93bi9wbGFubmluZy1kcm9wZG93bi1lbGVtZW50L3BsYW5uaW5nLWRyb3Bkb3duLWVsZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLDZCQUE2QjtDQUM5Qjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLDBCQUEwQjtDQUMzQiIsImZpbGUiOiJzcmMvYXBwL3dvcmsvcGxhbm5pbmcvcGxhbm5pbmctZHJvcGRvd24vcGxhbm5pbmctZHJvcGRvd24tZWxlbWVudC9wbGFubmluZy1kcm9wZG93bi1lbGVtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxhbm5pbmctZHJvcGRvd24tZWxlbWVudCB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgbWluLWhlaWdodDogODZweDtcclxufVxyXG5cclxuLnRyYXNoY2FuLWFyZWEge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IC4zNzVyZW0gLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgei1pbmRleDogMTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5hY3RpdmUtZGVzaWduIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkY2RjO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggNHB4IGdyYXk7XHJcbn1cclxuXHJcbmltZy50cmFzaC1waWN0dXJlIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWFyZWEge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxufVxyXG5cclxuLmRpc2FibGVkLWxvb2sge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLm5vdC1idXR0b24tYXJlYSB7XHJcbiAgei1pbmRleDogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/work/planning/planning-dropdown/planning-dropdown-element/planning-dropdown-element.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/work/planning/planning-dropdown/planning-dropdown-element/planning-dropdown-element.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"container planning-dropdown-element p-0\"\n  [ngClass]=\"{'disabled-look': allControlsDisabled}\">\n  <ng-container *ngIf=\"inActive; else active\">\n    <div\n      class=\"text-area planning-element-text-area\"\n      (click)=\"allControlsDisabled ? $event.stopPropagation() : onElementClick()\">\n      {{planningDropdown.text}}\n    </div>\n  </ng-container>\n\n  <ng-template #active>\n    <div class=\"text-area planning-element-text-area not-button-area\">\n      {{planningDropdown.text}}\n    </div>\n    <div\n      class=\"trashcan-area active-design\"\n      [ngClass]=\"{'disabled-look': trashControlsDisabled}\"\n      (click)=\"trashControlsDisabled ? $event.stopPropagation() : onDeleteElement()\">\n      <img\n        src=\"assets/img/trash.png\"\n        class=\"trash-picture\"\n      >\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/work/planning/planning-dropdown/planning-dropdown-element/planning-dropdown-element.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/work/planning/planning-dropdown/planning-dropdown-element/planning-dropdown-element.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: PlanningDropdownElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningDropdownElementComponent", function() { return PlanningDropdownElementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _planning_dropdown_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planning-dropdown.model */ "./src/app/work/planning/planning-dropdown/planning-dropdown-element/planning-dropdown.model.ts");
/* harmony import */ var _planning_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../planning.service */ "./src/app/work/planning/planning.service.ts");
/* harmony import */ var _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/executor/executor.service */ "./src/app/util/executor/executor.service.ts");
/* harmony import */ var _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../util/executor/controls-protection-id.enum */ "./src/app/util/executor/controls-protection-id.enum.ts");






var PlanningDropdownElementComponent = /** @class */ (function () {
    function PlanningDropdownElementComponent(planningService, executorService) {
        this.planningService = planningService;
        this.executorService = executorService;
        this.inActive = true;
        this.subscriptions = [];
    }
    PlanningDropdownElementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.planningService.newPlanDropdownElementSelected.asObservable().subscribe(function () {
            _this.inActive = true;
        }));
        this.subscriptions.push(this.executorService.getControlsProtection.subscribe(function (ps) {
            if (!ps.disableControls) {
                _this.trashControlsDisabled = false;
                _this.allControlsDisabled = ps.disableControls;
                return;
            }
            _this.allControlsDisabled = ps.omittedControlsId != _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_5__["ControlsProtectionIdEnum"].PLANNING_DROPDOWN_ORDERING;
            _this.trashControlsDisabled = ps.disableControls;
        }));
        if (this.memorizedActiveDropdownElementId === this.planningDropdown.id) {
            this.inActive = false;
        }
    };
    PlanningDropdownElementComponent.prototype.onElementClick = function () {
        this.planningService.newPlanDropdownElementSelected.next(this.planningDropdown);
        this.inActive = false;
    };
    PlanningDropdownElementComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    PlanningDropdownElementComponent.prototype.onDeleteElement = function () {
        this.planningService.deleteDropdownElement(this.planningDropdown);
        this.planningService.newPlanDropdownElementSelected.next(undefined);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _planning_dropdown_model__WEBPACK_IMPORTED_MODULE_2__["PlanningDropdown"])
    ], PlanningDropdownElementComponent.prototype, "planningDropdown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PlanningDropdownElementComponent.prototype, "memorizedActiveDropdownElementId", void 0);
    PlanningDropdownElementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planning-dropdown-element',
            template: __webpack_require__(/*! ./planning-dropdown-element.component.html */ "./src/app/work/planning/planning-dropdown/planning-dropdown-element/planning-dropdown-element.component.html"),
            styles: [__webpack_require__(/*! ./planning-dropdown-element.component.css */ "./src/app/work/planning/planning-dropdown/planning-dropdown-element/planning-dropdown-element.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_planning_service__WEBPACK_IMPORTED_MODULE_3__["PlanningService"],
            _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_4__["ExecutorService"]])
    ], PlanningDropdownElementComponent);
    return PlanningDropdownElementComponent;
}());



/***/ }),

/***/ "./src/app/work/planning/planning-dropdown/planning-dropdown-element/planning-dropdown.model.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/work/planning/planning-dropdown/planning-dropdown-element/planning-dropdown.model.ts ***!
  \******************************************************************************************************/
/*! exports provided: PlanningDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningDropdown", function() { return PlanningDropdown; });
var PlanningDropdown = /** @class */ (function () {
    function PlanningDropdown() {
    }
    return PlanningDropdown;
}());



/***/ }),

/***/ "./src/app/work/planning/planning-dropdown/planning-dropdown-mgmt-edit-area/planning-dropdown-mgmt-edit-area.component.css":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/work/planning/planning-dropdown/planning-dropdown-mgmt-edit-area/planning-dropdown-mgmt-edit-area.component.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-area-height {\r\n  height: 235px;\r\n}\r\n\r\n.input-area-width {\r\n  width: 300px;\r\n}\r\n\r\n.modal-inside-text {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.big-text {\r\n  font-size: 2rem;\r\n}\r\n\r\ninput.my-checkbox {\r\n  width : 25px;\r\n  height : 25px;\r\n}\r\n\r\n.deadline-button {\r\n  width: 60px;\r\n  height: 60px;\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n}\r\n\r\n.adjust-width {\r\n  width: 100px !important;\r\n}\r\n\r\n.slider {\r\n  -webkit-appearance: none;\r\n  width: 100%;\r\n  height: 10px;\r\n  border-radius: 5px;\r\n  background: #d3d3d3;\r\n  outline: none;\r\n  opacity: 0.7;\r\n  transition: opacity .2s;\r\n}\r\n\r\n.slider:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 25px;\r\n  height: 50px;\r\n  border-radius: 15%;\r\n  background: #696969;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n  width: 25px;\r\n  height: 50px;\r\n  border-radius: 15%;\r\n  background: #696969;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9wbGFubmluZy9wbGFubmluZy1kcm9wZG93bi9wbGFubmluZy1kcm9wZG93bi1tZ210LWVkaXQtYXJlYS9wbGFubmluZy1kcm9wZG93bi1tZ210LWVkaXQtYXJlYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLHdCQUF3QjtDQUN6Qjs7QUFFRDtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGFBQWE7RUFFYix3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvd29yay9wbGFubmluZy9wbGFubmluZy1kcm9wZG93bi9wbGFubmluZy1kcm9wZG93bi1tZ210LWVkaXQtYXJlYS9wbGFubmluZy1kcm9wZG93bi1tZ210LWVkaXQtYXJlYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtYXJlYS1oZWlnaHQge1xyXG4gIGhlaWdodDogMjM1cHg7XHJcbn1cclxuXHJcbi5pbnB1dC1hcmVhLXdpZHRoIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1pbnNpZGUtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5iaWctdGV4dCB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG5pbnB1dC5teS1jaGVja2JveCB7XHJcbiAgd2lkdGggOiAyNXB4O1xyXG4gIGhlaWdodCA6IDI1cHg7XHJcbn1cclxuXHJcbi5kZWFkbGluZS1idXR0b24ge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5hZGp1c3Qtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2xpZGVyIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kOiAjZDNkM2QzO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xyXG59XHJcblxyXG4uc2xpZGVyOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcclxuICBiYWNrZ3JvdW5kOiAjNjk2OTY5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcclxuICBiYWNrZ3JvdW5kOiAjNjk2OTY5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/work/planning/planning-dropdown/planning-dropdown-mgmt-edit-area/planning-dropdown-mgmt-edit-area.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/work/planning/planning-dropdown/planning-dropdown-mgmt-edit-area/planning-dropdown-mgmt-edit-area.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pb-4\">\n  <ng-container *ngIf=\"!activePlanningDropdownElement?.id; else changePlanningHeader\">\n    <h2>Uus rippmenüü element</h2>\n  </ng-container>\n</div>\n<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"card ml-n3\">\n      <div *ngIf=\"!activePlanningDropdownElement?.withoutDeadline\"\n        class=\"card-header modal-inside-text\n            justify-content-between d-flex align-items-center pt-1 pb-1 pl-3 pr-3\">\n        <div class=\"container\">\n          <div class=\"row justify-content-center mb-4\">\n            <span class=\"ml-1 mr-3\">Elemendi tähtaeg päevades:</span>\n            <input\n              type=\"number\"\n              class=\"form-control adjust-width modal-inside-text\"\n              oninput=\"if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\n              [ngModel]=\"activePlanningDropdownElement.deadline\"\n              (ngModelChange)=\"setDeadline($event)\"\n              [disabled]=\"editControlsDisabled\"\n              maxlength=\"3\">\n          </div>\n          <div class=\"d-flex align-items-center\">\n            <button\n              class=\"btn btn-light btn-outline-secondary deadline-button mr-4\"\n              (click)=\"modifyDeadlineBy(-1)\"\n              [disabled]=\"editControlsDisabled\"> - </button>\n            <input\n              type=\"range\"\n              min=\"0\"\n              max=\"21\"\n              class=\"slider\"\n              id=\"formControlRange\"\n              [ngModel]=\"activePlanningDropdownElement.deadline\"\n              (ngModelChange)=\"setDeadline($event)\"\n              [disabled]=\"editControlsDisabled\">\n            <button\n              class=\"btn btn-light btn-outline-secondary deadline-button ml-4\"\n              (click)=\"modifyDeadlineBy(1)\"\n              [disabled]=\"editControlsDisabled\"> + </button>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"row ml-0 edit-area-height\">\n        <div class=\"d-flex input-area-width justify-content-around align-items-center flex-column\">\n          <textarea\n            class=\"modal-inside-text planning-element-text-area h-100\"\n            [(ngModel)]=\"activePlanningDropdownElement.text\"\n            (ngModelChange)=\"onInputChange()\"\n            [disabled]=\"editControlsDisabled\"></textarea>\n        </div>\n        <div class=\"col d-flex flex-column justify-content-around\">\n          <div class=\"row justify-content-center modal-inside-text mb-4 mt-5\">\n            <input\n              class=\"my-checkbox\"\n              type=\"checkbox\"\n              id=\"withoutDeadline\"\n              [(ngModel)]=\"activePlanningDropdownElement.withoutDeadline\"\n              (change)=\"onInputChange(true)\"\n              [disabled]=\"editControlsDisabled\">\n            <label class=\"form-check-label ml-2\" for=\"withoutDeadline\">\n              Tähtajatu\n            </label>\n          </div>\n          <div class=\"row justify-content-center\">\n            <ng-container *ngIf=\"!activePlanningDropdownElement.id; else changePlanningFinishEditing\">\n              <button\n                class=\"btn btn-success modal-inside-text\"\n                (click)=\"onAddNewPlan()\"\n                [disabled]=\"editControlsDisabled\">\n                Lisan elemendi\n              </button>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<ng-template #changePlanningHeader>\n  <h2>Rippmenüü elemendi muutmine</h2>\n</ng-template>\n\n<ng-template #changePlanningFinishEditing>\n  <button\n    class=\"btn btn-danger modal-inside-text\"\n    (click)=\"planningService.newPlanDropdownElementSelected.next(null)\"\n    [disabled]=\"allControlsDisabled\">\n    Lõpetan muutmise\n  </button>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/work/planning/planning-dropdown/planning-dropdown-mgmt-edit-area/planning-dropdown-mgmt-edit-area.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/work/planning/planning-dropdown/planning-dropdown-mgmt-edit-area/planning-dropdown-mgmt-edit-area.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: PlanningDropdownMgmtEditAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningDropdownMgmtEditAreaComponent", function() { return PlanningDropdownMgmtEditAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _planning_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../planning.service */ "./src/app/work/planning/planning.service.ts");
/* harmony import */ var _planning_dropdown_element_planning_dropdown_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../planning-dropdown-element/planning-dropdown.model */ "./src/app/work/planning/planning-dropdown/planning-dropdown-element/planning-dropdown.model.ts");
/* harmony import */ var _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/executor/executor.service */ "./src/app/util/executor/executor.service.ts");
/* harmony import */ var _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../util/executor/controls-protection-id.enum */ "./src/app/util/executor/controls-protection-id.enum.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var PlanningDropdownMgmtEditAreaComponent = /** @class */ (function () {
    function PlanningDropdownMgmtEditAreaComponent(planningService, executorService) {
        this.planningService = planningService;
        this.executorService = executorService;
        this.subscriptions = [];
        this.DEFAULT_DAYS_TO_DEADLINE = 3;
    }
    PlanningDropdownMgmtEditAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initNewPlan();
        this.subscriptions.push(this.planningService.newPlanDropdownElementSelected.asObservable().subscribe(function (np) {
            if (!np)
                _this.activePlanningDropdownElement = _this.newDropdownElement;
            else {
                _this.activePlanningDropdownElement = np;
            }
        }));
        this.subscriptions.push(this.executorService.getControlsProtection.subscribe(function (ps) {
            if (!ps.disableControls) {
                _this.editControlsDisabled = false;
                _this.allControlsDisabled = false;
                return;
            }
            _this.allControlsDisabled = true;
            _this.editControlsDisabled = ps.omittedControlsId !== _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_5__["ControlsProtectionIdEnum"].PLANNING_DROPDOWN_SINGLE_ELEMENT;
        }));
    };
    PlanningDropdownMgmtEditAreaComponent.prototype.initNewPlan = function () {
        this.newDropdownElement = new _planning_dropdown_element_planning_dropdown_model__WEBPACK_IMPORTED_MODULE_3__["PlanningDropdown"]();
        this.newDropdownElement.deadline = this.DEFAULT_DAYS_TO_DEADLINE;
        this.newDropdownElement.orderNumber = this.planningService.planningDropDown ?
            this.planningService.planningDropDown.length + 1
            : 1;
        this.activePlanningDropdownElement = this.newDropdownElement;
    };
    PlanningDropdownMgmtEditAreaComponent.prototype.onAddNewPlan = function () {
        var _this = this;
        this.planningService.createDropdownElement(this.activePlanningDropdownElement)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe(function () { return setTimeout(function () { return _this.initNewPlan(); }, 0); });
    };
    PlanningDropdownMgmtEditAreaComponent.prototype.onInputChange = function (isWithoutDeadlineFlag) {
        if (isWithoutDeadlineFlag) {
            this.activePlanningDropdownElement.deadline = this.DEFAULT_DAYS_TO_DEADLINE;
        }
        if (this.activePlanningDropdownElement.id) {
            this.executorService.exeWithTimer(this.planningService.updateDropdownElement, [this.activePlanningDropdownElement], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_5__["ControlsProtectionIdEnum"].PLANNING_DROPDOWN_SINGLE_ELEMENT);
        }
    };
    PlanningDropdownMgmtEditAreaComponent.prototype.modifyDeadlineBy = function (days) {
        this.setDeadline(this.activePlanningDropdownElement.deadline + days);
    };
    PlanningDropdownMgmtEditAreaComponent.prototype.setDeadline = function (days) {
        if (!days) {
            this.activePlanningDropdownElement.deadline = 0;
        }
        else {
            this.activePlanningDropdownElement.deadline = days;
        }
        this.onInputChange();
    };
    PlanningDropdownMgmtEditAreaComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    PlanningDropdownMgmtEditAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planning-dropdown-mgmt-edit-area',
            template: __webpack_require__(/*! ./planning-dropdown-mgmt-edit-area.component.html */ "./src/app/work/planning/planning-dropdown/planning-dropdown-mgmt-edit-area/planning-dropdown-mgmt-edit-area.component.html"),
            styles: [__webpack_require__(/*! ./planning-dropdown-mgmt-edit-area.component.css */ "./src/app/work/planning/planning-dropdown/planning-dropdown-mgmt-edit-area/planning-dropdown-mgmt-edit-area.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_planning_service__WEBPACK_IMPORTED_MODULE_2__["PlanningService"],
            _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_4__["ExecutorService"]])
    ], PlanningDropdownMgmtEditAreaComponent);
    return PlanningDropdownMgmtEditAreaComponent;
}());



/***/ }),

/***/ "./src/app/work/planning/planning-dropdown/planning-dropdown.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/work/planning/planning-dropdown/planning-dropdown.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-elements-section-width {\r\n  width: 455px;\r\n}\r\n\r\n.dropdown-elements-section-height {\r\n  height: 370px;\r\n}\r\n\r\n.vertical-paddings {\r\n  padding-top: 1.1rem;\r\n  padding-bottom: 1.1rem\r\n}\r\n\r\n.scrolling-area {\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  overflow-y:auto;\r\n  overflow-x:hidden;\r\n}\r\n\r\n/* width */\r\n\r\n::-webkit-scrollbar {\r\n  width: 15px;\r\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 5px grey;\r\n  border-radius: 7px;\r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: #6c757d;\r\n  border-radius: 7px;\r\n}\r\n\r\n.disabled-look {\r\n  opacity: 0.2 !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9wbGFubmluZy9wbGFubmluZy1kcm9wZG93bi9wbGFubmluZy1kcm9wZG93bi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjs7QUFFRCxXQUFXOztBQUNYO0VBQ0UsWUFBWTtDQUNiOztBQUVELFdBQVc7O0FBQ1g7RUFDRSwrQkFBK0I7RUFDL0IsbUJBQW1CO0NBQ3BCOztBQUVELFlBQVk7O0FBQ1o7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usd0JBQXdCO0NBQ3pCIiwiZmlsZSI6InNyYy9hcHAvd29yay9wbGFubmluZy9wbGFubmluZy1kcm9wZG93bi9wbGFubmluZy1kcm9wZG93bi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLWVsZW1lbnRzLXNlY3Rpb24td2lkdGgge1xyXG4gIHdpZHRoOiA0NTVweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWVsZW1lbnRzLXNlY3Rpb24taGVpZ2h0IHtcclxuICBoZWlnaHQ6IDM3MHB4O1xyXG59XHJcblxyXG4udmVydGljYWwtcGFkZGluZ3Mge1xyXG4gIHBhZGRpbmctdG9wOiAxLjFyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDEuMXJlbVxyXG59XHJcblxyXG4uc2Nyb2xsaW5nLWFyZWEge1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICBvdmVyZmxvdy15OmF1dG87XHJcbiAgb3ZlcmZsb3cteDpoaWRkZW47XHJcbn1cclxuXHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxNXB4O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogIzZjNzU3ZDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbi5kaXNhYmxlZC1sb29rIHtcclxuICBvcGFjaXR5OiAwLjIgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/work/planning/planning-dropdown/planning-dropdown.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/work/planning/planning-dropdown/planning-dropdown.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <button\n    class=\"btn btn-outline-secondary m-1\"\n    [ngClass]=\"{'btn-secondary disabled-look': !memorizedActivePlanDropdownElementId}\"\n    [disabled]=\"!memorizedActivePlanDropdownElementId || controlsDisabled\"\n    (click)=\"increaseElementOrderPlacement()\">\n    <i class=\"fas fa-arrow-circle-up fa-3x m-1\"></i>\n  </button>\n  <div class=\"card bg-light vertical-paddings dropdown-elements-section-height\">\n    <div\n      class=\"pt-1 pb-1 card-body scrolling-area dropdown-elements-section-width\"\n      id=\"planningDropdownScrollArea\">\n\n      <app-planning-dropdown-element\n        *ngFor=\"let planningDropdownElement of planningService.planningDropDown\"\n        [planningDropdown]=\"planningDropdownElement\"\n        [memorizedActiveDropdownElementId]=\"memorizedActivePlanDropdownElementId\"></app-planning-dropdown-element>\n\n    </div>\n  </div>\n  <button\n    class=\"btn btn-outline-secondary m-1\"\n    [ngClass]=\"{'btn-secondary disabled-look': !memorizedActivePlanDropdownElementId}\"\n    (click)=\"decreaseElementOrderPlacement()\"\n    [disabled]=\"!memorizedActivePlanDropdownElementId || controlsDisabled\">\n    <i class=\"fas fa-arrow-circle-down fa-3x m-1\"></i>\n  </button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/work/planning/planning-dropdown/planning-dropdown.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/work/planning/planning-dropdown/planning-dropdown.component.ts ***!
  \********************************************************************************/
/*! exports provided: PlanningDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningDropdownComponent", function() { return PlanningDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _planning_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../planning.service */ "./src/app/work/planning/planning.service.ts");
/* harmony import */ var _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/executor/executor.service */ "./src/app/util/executor/executor.service.ts");
/* harmony import */ var _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/executor/controls-protection-id.enum */ "./src/app/util/executor/controls-protection-id.enum.ts");





var PlanningDropdownComponent = /** @class */ (function () {
    function PlanningDropdownComponent(planningService, executorService) {
        var _this = this;
        this.planningService = planningService;
        this.executorService = executorService;
        this.subscriptions = [];
        this.increaseElementOrderPlacement = function () {
            _this.planningService.increaseElementOrderNumber(_this.memorizedActivePlanDropdownElementId);
        };
    }
    PlanningDropdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.planningService.newPlanDropdownElementSelected.asObservable().subscribe(function (np) {
            if (!np) {
                _this.memorizedActivePlanDropdownElementId = undefined;
            }
            else {
                _this.memorizedActivePlanDropdownElementId = np.id;
            }
        }));
        this.subscriptions.push(this.executorService.getControlsProtection.subscribe(function (ps) {
            console.log(ps);
            console.log(_this.memorizedActivePlanDropdownElementId);
            if (!ps.disableControls) {
                _this.controlsDisabled = false;
                return;
            }
            _this.controlsDisabled = ps.omittedControlsId != _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_4__["ControlsProtectionIdEnum"].PLANNING_DROPDOWN_ORDERING;
        }));
    };
    PlanningDropdownComponent.prototype.ngOnChanges = function () {
        setTimeout(function () { return document.getElementById('planningDropdownScrollArea').scrollTop = Number.MAX_SAFE_INTEGER; }, 0);
    };
    PlanningDropdownComponent.prototype.decreaseElementOrderPlacement = function () {
        this.planningService.decreaseElementOrderNumber(this.memorizedActivePlanDropdownElementId);
    };
    PlanningDropdownComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    PlanningDropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planning-dropdown',
            template: __webpack_require__(/*! ./planning-dropdown.component.html */ "./src/app/work/planning/planning-dropdown/planning-dropdown.component.html"),
            styles: [__webpack_require__(/*! ./planning-dropdown.component.css */ "./src/app/work/planning/planning-dropdown/planning-dropdown.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_planning_service__WEBPACK_IMPORTED_MODULE_2__["PlanningService"],
            _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_3__["ExecutorService"]])
    ], PlanningDropdownComponent);
    return PlanningDropdownComponent;
}());



/***/ }),

/***/ "./src/app/work/planning/planning-mgmt/planning-mgmt-edit-area/planning-mgmt-edit-area.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/work/planning/planning-mgmt/planning-mgmt-edit-area/planning-mgmt-edit-area.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.big-text {\r\n  font-size: 2rem;\r\n}\r\n\r\n.modal-inside-text {\r\n  font-size: 1.5rem;\r\n}\r\n\r\ninput.bigRadio {\r\n  width: 35px;\r\n  height: 35px\r\n}\r\n\r\n.deadline-button {\r\n  width: 60px;\r\n  height: 60px;\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n}\r\n\r\n.edit-area-height {\r\n  height: 235px;\r\n}\r\n\r\ninput.my-checkbox {\r\n  width : 25px;\r\n  height : 25px;\r\n}\r\n\r\nselect {\r\n  height: 60px;\r\n  font-size: 1.5rem;\r\n}\r\n\r\noptgroup {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.dropdown-in-planning-element-text-area {\r\n  width: 270px;\r\n}\r\n\r\n.input-area-width {\r\n  width: 300px;\r\n}\r\n\r\n.adjust-width {\r\n  width: 100px !important;\r\n}\r\n\r\n.slider {\r\n  -webkit-appearance: none;\r\n  width: 100%;\r\n  height: 10px;\r\n  border-radius: 5px;\r\n  background: #d3d3d3;\r\n  outline: none;\r\n  opacity: 0.7;\r\n  transition: opacity .2s;\r\n}\r\n\r\n.slider:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 25px;\r\n  height: 50px;\r\n  border-radius: 15%;\r\n  background: #696969;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n  width: 25px;\r\n  height: 50px;\r\n  border-radius: 15%;\r\n  background: #696969;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9wbGFubmluZy9wbGFubmluZy1tZ210L3BsYW5uaW5nLW1nbXQtZWRpdC1hcmVhL3BsYW5uaW5nLW1nbXQtZWRpdC1hcmVhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLGFBQWE7RUFDYixjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0NBQ25COztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUNEO0VBQ0Usd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsYUFBYTtFQUViLHdCQUF3QjtDQUN6Qjs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC93b3JrL3BsYW5uaW5nL3BsYW5uaW5nLW1nbXQvcGxhbm5pbmctbWdtdC1lZGl0LWFyZWEvcGxhbm5pbmctbWdtdC1lZGl0LWFyZWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYmlnLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLm1vZGFsLWluc2lkZS10ZXh0IHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuaW5wdXQuYmlnUmFkaW8ge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweFxyXG59XHJcblxyXG4uZGVhZGxpbmUtYnV0dG9uIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZWRpdC1hcmVhLWhlaWdodCB7XHJcbiAgaGVpZ2h0OiAyMzVweDtcclxufVxyXG5cclxuaW5wdXQubXktY2hlY2tib3gge1xyXG4gIHdpZHRoIDogMjVweDtcclxuICBoZWlnaHQgOiAyNXB4O1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIGhlaWdodDogNjBweDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxub3B0Z3JvdXAge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uZHJvcGRvd24taW4tcGxhbm5pbmctZWxlbWVudC10ZXh0LWFyZWEge1xyXG4gIHdpZHRoOiAyNzBweDtcclxufVxyXG5cclxuLmlucHV0LWFyZWEtd2lkdGgge1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG4uYWRqdXN0LXdpZHRoIHtcclxuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogI2QzZDNkMztcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC4ycztcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcclxufVxyXG5cclxuLnNsaWRlcjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNSU7XHJcbiAgYmFja2dyb3VuZDogIzY5Njk2OTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNSU7XHJcbiAgYmFja2dyb3VuZDogIzY5Njk2OTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/work/planning/planning-mgmt/planning-mgmt-edit-area/planning-mgmt-edit-area.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/work/planning/planning-mgmt/planning-mgmt-edit-area/planning-mgmt-edit-area.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"activePlanningElement\">\n  <ng-container *ngIf=\"isActiveResolveStateUnresolved; else resolvedView\">\n    <div class=\"row pb-4\">\n      <ng-container *ngIf=\"!activePlanningElement.id; else changePlanningHeader\">\n        <h2>Uus planeering</h2>\n      </ng-container>\n    </div>\n    <div class=\"row\">\n      <div class=\"col pb-4\">\n        <div class=\"row\">\n          <label class=\"d-flex\">\n            <input\n              type=\"radio\"\n              class=\"bigRadio\"\n              name=\"input-type\"\n              [checked]=\"activePlanningElement.dropDown === true\"\n              (change)=\"radioBtnActivePlanInputTypeChange(true)\"\n              [disabled]=\"editControlsDisabled\">\n            <span class=\"ml-2 modal-inside-text\">Rippmenüüst</span>\n          </label>\n        </div>\n        <div class=\"row pt-2\">\n          <label class=\"d-flex\">\n            <input\n              type=\"radio\"\n              class=\"bigRadio\"\n              name=\"input-type\"\n              [checked]=\"activePlanningElement.dropDown === false\"\n              (change)=\"radioBtnActivePlanInputTypeChange(false)\"\n              [disabled]=\"editControlsDisabled\">\n            <span class=\"ml-2 modal-inside-text\">Vabatekst</span>\n          </label>\n        </div>\n      </div>\n      <div class=\"col\">\n        <button\n          type=\"button\"\n          class=\"btn btn-primary modal-inside-text mt-n2 btn-block\"\n          (click)=\"callDropdownMgmt.emit()\"\n          [disabled]=\"allControlsDisabled\">Muudan rippmenüüd</button>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div\n          class=\"card ml-n3\">\n          <div *ngIf=\"!activePlanningElement.withoutDeadline\"\n            class=\"card-header modal-inside-text\n            justify-content-between d-flex align-items-center pt-1 pb-1 pl-3 pr-3\">\n            <div class=\"container\">\n              <div class=\"row justify-content-center mb-4\">\n                <span class=\"ml-1 mr-3\">Planeeringu tähtaeg päevades:</span>\n                <input\n                  type=\"number\"\n                  class=\"form-control adjust-width modal-inside-text\"\n                  oninput=\"if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\n                  [ngModel]=\"activePlanningElement.daysToDeadline\"\n                  (ngModelChange)=\"daysToActivePlanDeadline($event)\"\n                  [disabled]=\"editControlsDisabled\"\n                  maxlength=\"3\">\n              </div>\n              <div class=\"d-flex align-items-center\">\n                <button\n                  class=\"btn btn-light btn-outline-secondary deadline-button mr-4\"\n                  (click)=\"addDaysToActivePlanDeadline(-1)\"\n                  [disabled]=\"editControlsDisabled\"> - </button>\n                <input\n                  [ngModel]=\"activePlanningElement.daysToDeadline\"\n                  (ngModelChange)=\"daysToActivePlanDeadline($event)\"\n                  type=\"range\"\n                  min=\"0\"\n                  max=\"21\"\n                  class=\"slider\"\n                  id=\"formControlRange\"\n                  [disabled]=\"editControlsDisabled\">\n                <button\n                  class=\"btn btn-light btn-outline-secondary deadline-button ml-4\"\n                  (click)=\"addDaysToActivePlanDeadline(1)\"\n                  [disabled]=\"editControlsDisabled\"> + </button>\n              </div>\n            </div>\n          </div>\n          <div\n            class=\"row ml-0 edit-area-height\">\n            <div class=\"d-flex input-area-width justify-content-around align-items-center flex-column\">\n              <ng-container *ngIf=\"activePlanningElement.dropDown === false; else dropdownInput\">\n              <textarea\n                class=\"modal-inside-text planning-element-text-area h-100\"\n                [(ngModel)]=\"activePlanningElement.text\"\n                (ngModelChange)=\"onInputChange()\"\n                [disabled]=\"editControlsDisabled\"></textarea>\n              </ng-container>\n            </div>\n            <div class=\"col d-flex flex-column justify-content-around\">\n              <div class=\"row justify-content-center modal-inside-text mb-4 mt-5\">\n                <input\n                  class=\"my-checkbox\"\n                  type=\"checkbox\"\n                  id=\"withoutDeadline\"\n                  [(ngModel)]=\"activePlanningElement.withoutDeadline\"\n                  (change)=\"onInputChange(true)\"\n                  [disabled]=\"editControlsDisabled\">\n                <label class=\"form-check-label ml-2\" for=\"withoutDeadline\">\n                  Tähtajatu\n                </label>\n              </div>\n              <div class=\"row justify-content-center\">\n                <ng-container *ngIf=\"!activePlanningElement.id; else changePlanningFinishEditing\">\n                  <button\n                    class=\"btn btn-success modal-inside-text\"\n                    (click)=\"onAddNewPlan()\"\n                    [disabled]=\"editControlsDisabled\">\n                    Lisan planeeringu\n                  </button>\n                </ng-container>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template #resolvedView>\n  <div class=\"d-flex h-100 justify-content-center align-items-end pb-5\">\n    <button\n      class=\"btn btn-success modal-inside-text mb-5\"\n      *ngIf=\"activePlanningElement.id != null\"\n      (click)=\"onUnResolveElement()\"\n      [disabled]=\"editControlsDisabled\">\n      Märgin kui \"Tegemata\"\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #changePlanningHeader>\n  <h2>Muudan planeeringut</h2>\n</ng-template>\n\n<ng-template #changePlanningFinishEditing>\n  <button\n    class=\"btn btn-danger modal-inside-text\"\n    (click)=\"planningService.newPlanElementSelected.next(null)\"\n    [disabled]=\"allControlsDisabled\">\n    Lõpetan muutmise\n  </button>\n</ng-template>\n\n\n<ng-template #dropdownInput>\n\n  <span\n    *ngIf=\"!planningService.planningDropDown\"\n    class=\"mb-n5 ml-4 text-center\">Rippmenüüs pole ühtegi elementi.\n      Elementide lisamiseks kasutage funktsionaalsust \"Muudan rippmenüüd\"</span>\n\n  <select\n    name=\"new-plan\"\n    class=\"custom-select planning-element-text-area ml-4 mr-n4\"\n    [(ngModel)]=\"activePlanningElement.dropDownElementId\"\n    (ngModelChange)=\"setStandardPlanDeadline($event)\"\n    [disabled]=\"!planningService.planningDropDown || editControlsDisabled\">\n    <optgroup>\n      <ng-container *ngIf=\"planningService.planningDropDown\">\n        <option\n          *ngFor=\"let dropdownElement of planningService.planningDropDown\"\n          [value]=\"dropdownElement.id\">\n          {{ dropdownElement.text }}\n        </option>\n      </ng-container>\n    </optgroup>\n  </select>\n\n</ng-template>\n"

/***/ }),

/***/ "./src/app/work/planning/planning-mgmt/planning-mgmt-edit-area/planning-mgmt-edit-area.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/work/planning/planning-mgmt/planning-mgmt-edit-area/planning-mgmt-edit-area.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: PlanningMgmtEditAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningMgmtEditAreaComponent", function() { return PlanningMgmtEditAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _plan_element_plan_element_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../plan-element/plan-element.model */ "./src/app/work/planning/plan-element/plan-element.model.ts");
/* harmony import */ var _planning_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../planning.service */ "./src/app/work/planning/planning.service.ts");
/* harmony import */ var _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../settings/shared/hive.model */ "./src/app/settings/shared/hive.model.ts");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../util/util.service */ "./src/app/util/util.service.ts");
/* harmony import */ var _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../util/executor/executor.service */ "./src/app/util/executor/executor.service.ts");
/* harmony import */ var _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../util/executor/controls-protection-id.enum */ "./src/app/util/executor/controls-protection-id.enum.ts");








var PlanningMgmtEditAreaComponent = /** @class */ (function () {
    function PlanningMgmtEditAreaComponent(planningService, executorService) {
        this.planningService = planningService;
        this.executorService = executorService;
        this.callDropdownMgmt = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isCountingDownToUpdateData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subscriptions = [];
        this.DEFAULT_DAYS_TO_DEADLINE = 3;
    }
    PlanningMgmtEditAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initNewPlan();
        this.subscriptions.push(this.planningService.newPlanElementSelected.asObservable().subscribe(function (np) {
            if (!np)
                _this.activePlanningElement = _this.newPlan;
            else {
                _this.activePlanningElement = np;
            }
            _this.setDaysToDealine();
        }));
        this.subscriptions.push(this.executorService.getControlsProtection.subscribe(function (ps) {
            if (!ps.disableControls) {
                _this.editControlsDisabled = false;
                _this.allControlsDisabled = false;
                return;
            }
            _this.editControlsDisabled = ps.omittedControlsId != _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_7__["ControlsProtectionIdEnum"].PLANNING_ELEMENT;
            _this.allControlsDisabled = true;
        }));
    };
    PlanningMgmtEditAreaComponent.prototype.setDaysToDealine = function () {
        this.activePlanningElement.daysToDeadline = -_util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"].getDaysBeforeTodaysDate(this.activePlanningElement.deadline);
    };
    PlanningMgmtEditAreaComponent.prototype.radioBtnActivePlanInputTypeChange = function (isDropDown) {
        this.onInputChange();
        this.activePlanningElement.dropDown = isDropDown;
        if (isDropDown) {
            this.activePlanningElement.dropDownElementId = this.planningService.planningDropDown
                ? this.planningService.planningDropDown[0].id
                : undefined;
            this.daysToActivePlanDeadline(this.planningService.planningDropDown
                ? this.planningService.planningDropDown[0].deadline
                : this.DEFAULT_DAYS_TO_DEADLINE);
        }
        else {
            this.daysToActivePlanDeadline(this.DEFAULT_DAYS_TO_DEADLINE);
        }
    };
    PlanningMgmtEditAreaComponent.prototype.initNewPlan = function () {
        this.newPlan = new _plan_element_plan_element_model__WEBPACK_IMPORTED_MODULE_2__["PlanElement"]();
        var millisecondsInOneDay = 24 * 60 * 60 * 1000;
        if (this.planningService.planningDropDown && this.planningService.planningDropDown.length > 0) {
            this.newPlan.dropDown = true;
            this.newPlan.dropDownElementId = this.planningService.planningDropDown[0].id;
            this.newPlan.withoutDeadline = this.planningService.planningDropDown[0].withoutDeadline;
            this.newPlan.deadline = this.newPlan.withoutDeadline
                ? undefined
                : this.newPlan.deadline = new Date(new Date().setHours(0, 0, 0, 0) +
                    this.planningService.planningDropDown[0].deadline * millisecondsInOneDay);
            this.activePlanningElement = this.newPlan;
            this.setDaysToDealine();
            return;
        }
        this.newPlan.dropDown = false;
        this.newPlan.deadline = new Date(new Date().setHours(0, 0, 0, 0) +
            +this.DEFAULT_DAYS_TO_DEADLINE * millisecondsInOneDay);
        this.activePlanningElement = this.newPlan;
        this.setDaysToDealine();
    };
    PlanningMgmtEditAreaComponent.prototype.onAddNewPlan = function () {
        this.planningService.addNewPlan(this.newPlan, this.currentlyChosenHive.id);
        this.initNewPlan();
    };
    PlanningMgmtEditAreaComponent.prototype.addDaysToActivePlanDeadline = function (days) {
        if (this.activePlanningElement.id) {
            this.executorService.exeWithTimer(this.planningService.updatePlan, [this.activePlanningElement, this.currentlyChosenHive.id], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_7__["ControlsProtectionIdEnum"].PLANNING_ELEMENT);
            this.activePlanningElement.deadline = new Date(this.activePlanningElement.deadline);
        }
        var millisecondsInOneDay = 24 * 60 * 60 * 1000;
        this.activePlanningElement.deadline.setMilliseconds(this.activePlanningElement.deadline.getMilliseconds() +
            days * millisecondsInOneDay);
        this.setDaysToDealine();
    };
    PlanningMgmtEditAreaComponent.prototype.daysToActivePlanDeadline = function (days) {
        if (this.activePlanningElement.id) {
            this.executorService.exeWithTimer(this.planningService.updatePlan, [this.activePlanningElement, this.currentlyChosenHive.id], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_7__["ControlsProtectionIdEnum"].PLANNING_ELEMENT);
            this.activePlanningElement.deadline = new Date(this.activePlanningElement.deadline);
        }
        var millisecondsInOneDay = 24 * 60 * 60 * 1000;
        var todayInMS = new Date().setHours(0, 0, 0, 0);
        this.activePlanningElement.deadline = new Date(new Date().setHours(0, 0, 0, 0) + days * millisecondsInOneDay);
        this.setDaysToDealine();
    };
    PlanningMgmtEditAreaComponent.prototype.setStandardPlanDeadline = function (dropDownElementId) {
        var selectedElement = this.planningService.planningDropDown.find(function (e) { return e.id == dropDownElementId; });
        this.activePlanningElement.withoutDeadline = selectedElement.withoutDeadline;
        this.daysToActivePlanDeadline(selectedElement.deadline);
    };
    PlanningMgmtEditAreaComponent.prototype.onInputChange = function (isWithoutDeadlineFlag) {
        if (isWithoutDeadlineFlag) {
            var millisecondsInOneDay = 24 * 60 * 60 * 1000;
            this.activePlanningElement.deadline = new Date(new Date().setHours(0, 0, 0, 0) +
                +this.DEFAULT_DAYS_TO_DEADLINE * millisecondsInOneDay);
        }
        if (this.activePlanningElement.id) {
            this.executorService.exeWithTimer(this.planningService.updatePlan, [this.activePlanningElement, this.currentlyChosenHive.id], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_7__["ControlsProtectionIdEnum"].PLANNING_ELEMENT);
        }
    };
    PlanningMgmtEditAreaComponent.prototype.onUnResolveElement = function () {
        this.activePlanningElement.resolved = false;
        this.activePlanningElement.resolvedDate = undefined;
        var millisecondsInOneDay = 24 * 60 * 60 * 1000;
        this.activePlanningElement.deadline = new Date(new Date().setHours(0, 0, 0, 0) +
            +this.DEFAULT_DAYS_TO_DEADLINE * millisecondsInOneDay);
        this.executorService.exeWithTimer(this.planningService.updatePlan, [this.activePlanningElement, this.currentlyChosenHive.id], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_7__["ControlsProtectionIdEnum"].PLANNING_ELEMENT);
    };
    PlanningMgmtEditAreaComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlanningMgmtEditAreaComponent.prototype, "callDropdownMgmt", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlanningMgmtEditAreaComponent.prototype, "isCountingDownToUpdateData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PlanningMgmtEditAreaComponent.prototype, "isActiveResolveStateUnresolved", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_4__["Hive"])
    ], PlanningMgmtEditAreaComponent.prototype, "currentlyChosenHive", void 0);
    PlanningMgmtEditAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planning-mgmt-edit-area',
            template: __webpack_require__(/*! ./planning-mgmt-edit-area.component.html */ "./src/app/work/planning/planning-mgmt/planning-mgmt-edit-area/planning-mgmt-edit-area.component.html"),
            styles: [__webpack_require__(/*! ./planning-mgmt-edit-area.component.css */ "./src/app/work/planning/planning-mgmt/planning-mgmt-edit-area/planning-mgmt-edit-area.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_planning_service__WEBPACK_IMPORTED_MODULE_3__["PlanningService"],
            _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_6__["ExecutorService"]])
    ], PlanningMgmtEditAreaComponent);
    return PlanningMgmtEditAreaComponent;
}());



/***/ }),

/***/ "./src/app/work/planning/planning-mgmt/planning-mgmt-window.enum.ts":
/*!**************************************************************************!*\
  !*** ./src/app/work/planning/planning-mgmt/planning-mgmt-window.enum.ts ***!
  \**************************************************************************/
/*! exports provided: PlanningMgmtWindowEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningMgmtWindowEnum", function() { return PlanningMgmtWindowEnum; });
var PlanningMgmtWindowEnum;
(function (PlanningMgmtWindowEnum) {
    PlanningMgmtWindowEnum[PlanningMgmtWindowEnum["PLANNING"] = 0] = "PLANNING";
    PlanningMgmtWindowEnum[PlanningMgmtWindowEnum["DROPDOWN_MGMT"] = 1] = "DROPDOWN_MGMT";
})(PlanningMgmtWindowEnum || (PlanningMgmtWindowEnum = {}));


/***/ }),

/***/ "./src/app/work/planning/planning-mgmt/planning-mgmt.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/work/planning/planning-mgmt/planning-mgmt.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding-for-planning {\r\n  padding-left: 2.5px;\r\n}\r\n\r\n.big-text {\r\n  font-size: 2rem;\r\n}\r\n\r\n.planning-header {\r\n  font-weight: 500;\r\n  margin-right: 60px;\r\n}\r\n\r\nbutton.closing {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  padding: 2px 2px 2px 2px;\r\n}\r\n\r\nimg.x {\r\n  height: 40px;\r\n}\r\n\r\n.belongs-to-badge {\r\n  height: 40px;\r\n  margin-top: 8px;\r\n  font-size: 1.5rem;\r\n  margin-left: 400px;\r\n}\r\n\r\n.modal-inside-text {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.spinner-area {\r\n  height: 50px;\r\n}\r\n\r\n.disabled-look {\r\n  opacity: 0.5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9wbGFubmluZy9wbGFubmluZy1tZ210L3BsYW5uaW5nLW1nbXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBb0I7RUFBcEIseUJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQix5QkFBeUI7Q0FDMUI7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBR0Q7RUFDRSxhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC93b3JrL3BsYW5uaW5nL3BsYW5uaW5nLW1nbXQvcGxhbm5pbmctbWdtdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZGRpbmctZm9yLXBsYW5uaW5nIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIuNXB4O1xyXG59XHJcblxyXG4uYmlnLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLnBsYW5uaW5nLWhlYWRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5jbG9zaW5nIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XHJcbn1cclxuXHJcbmltZy54IHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5iZWxvbmdzLXRvLWJhZGdlIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiA0MDBweDtcclxufVxyXG5cclxuLm1vZGFsLWluc2lkZS10ZXh0IHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLnNwaW5uZXItYXJlYSB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5cclxuLmRpc2FibGVkLWxvb2sge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/work/planning/planning-mgmt/planning-mgmt.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/work/planning/planning-mgmt/planning-mgmt.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<jw-modal id=\"{{mgmtComponentid}}\" [fullScreen]=\"true\">\n  <ng-container [ngSwitch]=\"activeWindow\">\n    <ng-container [ngTemplateOutlet]=\"planning\" *ngSwitchCase=\"planningMgmtWindowEnum.PLANNING\"></ng-container>\n    <ng-container [ngTemplateOutlet]=\"dropdownMgmt\" *ngSwitchCase=\"planningMgmtWindowEnum.DROPDOWN_MGMT\"></ng-container>\n  </ng-container>\n</jw-modal>\n\n<ng-template #planning>\n  <div class=\"card bg-light h-100\">\n    <div class=\"card-header nav\">\n      <span class=\"navbar-brand big-text planning-header\">Planeeringud</span>\n      <span class=\"navbar-text badge badge-dark belongs-to-badge\">\n        {{ currentlyChosenColony.name + ' / ' + currentlyChosenHive.number}}\n      </span>\n      <button\n        class=\"btn btn-danger nav-item closing ml-auto\"\n        (click)=\"modalService.close(mgmtComponentid)\"\n        [disabled]=\"disableControls\">\n        <img\n          src=\"assets/img/sulge.jpeg\"\n          class=\"x\">\n      </button>\n    </div>\n    <div class=\"card-body m-0\">\n      <div class=\"row\">\n        <div class=\"col-5\">\n          <div class=\"row justify-content-center p-4\">\n            <div class=\"btn-group btn-group-toggle\" *ngIf=\"!timerRunning\">\n              <label\n                class=\"btn btn-light btn-outline-secondary modal-inside-text\"\n                [ngClass]=\"{'active': isActiveResolveStateUnresolved, 'disabled-look': disableControls}\">\n                <input\n                  type=\"radio\"\n                  name=\"planning_window_type\"\n                  [checked]=\"isActiveResolveStateUnresolved\"\n                  (change)=\"radioBtnActiveResolveStateChange(true)\"\n                  [disabled]=\"disableControls\">\n                Tegemata\n              </label>\n              <label\n                class=\"btn btn-light btn-outline-secondary modal-inside-text\"\n                [ngClass]=\"{'active': !isActiveResolveStateUnresolved, 'disabled-look': disableControls}\">\n                <input\n                  type=\"radio\"\n                  name=\"planning_window_type\"\n                  [checked]=\"!isActiveResolveStateUnresolved\"\n                  (change)=\"radioBtnActiveResolveStateChange(false)\"\n                  [disabled]=\"disableControls\">\n                Tehtud\n              </label>\n            </div>\n            <div class=\"spinner-area\">\n              <app-spinner *ngIf=\"timerRunning\"></app-spinner>\n            </div>\n          </div>\n          <div class=\"row padding-for-planning\">\n            <app-planning\n              [currentlyChosenHive]=\"currentlyChosenHive\"\n              [planningComponentType]=\"isActiveResolveStateUnresolved ?\n                planningComponentEnum.PLANNING_MANAGEMENT_UNRESOLVED :\n                planningComponentEnum.PLANNING_MANAGEMENT_RESOLVED\"></app-planning>\n          </div>\n        </div>\n        <div class=\"col-7 d-flex flex-column-reverse\">\n          <app-planning-mgmt-edit-area\n            (callDropdownMgmt)=\"activeWindow = planningMgmtWindowEnum.DROPDOWN_MGMT\"\n            [isActiveResolveStateUnresolved]=\"isActiveResolveStateUnresolved\"\n            [currentlyChosenHive]=\"currentlyChosenHive\">\n          </app-planning-mgmt-edit-area>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n\n<ng-template #dropdownMgmt>\n  <div class=\"card bg-light h-100\">\n    <div class=\"card-header nav\">\n      <span class=\"navbar-brand big-text planning-header\">Planeeringute rippmenüü</span>\n      <button\n        class=\"btn btn-danger nav-item closing ml-auto\"\n        (click)=\"modalService.close(mgmtComponentid)\"\n        [disabled]=\"disableControls\">\n        <img\n          src=\"assets/img/sulge.jpeg\"\n          class=\"x\">\n      </button>\n    </div>\n    <div class=\"card-body m-0\">\n      <div class=\"row\">\n        <div class=\"col-5\">\n          <div class=\"row justify-content-center p-4\">\n            <div class=\"btn-group btn-group-toggle\" *ngIf=\"!timerRunning\">\n              <button\n                class=\"btn btn-danger modal-inside-text\"\n                (click)=\"activeWindow = planningMgmtWindowEnum.PLANNING\"\n                [disabled]=\"disableControls\">\n                Tagasi planeerima\n              </button>\n            </div>\n            <div class=\"spinner-area\">\n              <app-spinner *ngIf=\"timerRunning\"></app-spinner>\n            </div>\n          </div>\n          <app-planning-dropdown></app-planning-dropdown>\n        </div>\n        <div class=\"col-7 d-flex flex-column-reverse mb-5\">\n          <app-planning-dropdown-mgmt-edit-area></app-planning-dropdown-mgmt-edit-area>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n"

/***/ }),

/***/ "./src/app/work/planning/planning-mgmt/planning-mgmt.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/work/planning/planning-mgmt/planning-mgmt.component.ts ***!
  \************************************************************************/
/*! exports provided: PlanningMgmtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningMgmtComponent", function() { return PlanningMgmtComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/jw-modal/jw-modal.service */ "./src/app/util/jw-modal/jw-modal.service.ts");
/* harmony import */ var _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../settings/shared/hive.model */ "./src/app/settings/shared/hive.model.ts");
/* harmony import */ var _planning_mgmt_window_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./planning-mgmt-window.enum */ "./src/app/work/planning/planning-mgmt/planning-mgmt-window.enum.ts");
/* harmony import */ var _planning_component_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../planning-component.enum */ "./src/app/work/planning/planning-component.enum.ts");
/* harmony import */ var _planning_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../planning.service */ "./src/app/work/planning/planning.service.ts");
/* harmony import */ var _settings_shared_colony_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../settings/shared/colony.model */ "./src/app/settings/shared/colony.model.ts");
/* harmony import */ var _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../util/executor/executor.service */ "./src/app/util/executor/executor.service.ts");









var PlanningMgmtComponent = /** @class */ (function () {
    function PlanningMgmtComponent(modalService, planningService, executorService) {
        this.modalService = modalService;
        this.planningService = planningService;
        this.executorService = executorService;
        this.subscriptions = [];
        this.activeWindow = _planning_mgmt_window_enum__WEBPACK_IMPORTED_MODULE_4__["PlanningMgmtWindowEnum"].PLANNING;
        this.planningMgmtWindowEnum = _planning_mgmt_window_enum__WEBPACK_IMPORTED_MODULE_4__["PlanningMgmtWindowEnum"];
        this.isActiveResolveStateUnresolved = true;
        this.planningComponentEnum = _planning_component_enum__WEBPACK_IMPORTED_MODULE_5__["PlanningComponentEnum"];
    }
    PlanningMgmtComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.executorService.getControlsProtection.subscribe(function (ps) { return _this.disableControls = ps.disableControls; }));
    };
    PlanningMgmtComponent.prototype.radioBtnActiveResolveStateChange = function (isActiveResolveStateUnresolved) {
        this.planningService.newPlanElementSelected.next(null);
        this.isActiveResolveStateUnresolved = isActiveResolveStateUnresolved;
    };
    PlanningMgmtComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_3__["Hive"])
    ], PlanningMgmtComponent.prototype, "currentlyChosenHive", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _settings_shared_colony_model__WEBPACK_IMPORTED_MODULE_7__["Colony"])
    ], PlanningMgmtComponent.prototype, "currentlyChosenColony", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PlanningMgmtComponent.prototype, "mgmtComponentid", void 0);
    PlanningMgmtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planning-mgmt',
            template: __webpack_require__(/*! ./planning-mgmt.component.html */ "./src/app/work/planning/planning-mgmt/planning-mgmt.component.html"),
            styles: [__webpack_require__(/*! ./planning-mgmt.component.css */ "./src/app/work/planning/planning-mgmt/planning-mgmt.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_2__["JwModalService"],
            _planning_service__WEBPACK_IMPORTED_MODULE_6__["PlanningService"],
            _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_8__["ExecutorService"]])
    ], PlanningMgmtComponent);
    return PlanningMgmtComponent;
}());



/***/ }),

/***/ "./src/app/work/planning/planning.component.css":
/*!******************************************************!*\
  !*** ./src/app/work/planning/planning.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".planning-section-height-for-work-dashboard {\r\n  height: 330px;\r\n}\r\n\r\n.planning-section-height-for-planning-modal {\r\n  height: 490px;\r\n}\r\n\r\n.scrolling-area {\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  overflow-y:auto;\r\n  overflow-x:hidden;\r\n}\r\n\r\n.vertical-paddings {\r\n  padding-top: 1.1rem;\r\n  padding-bottom: 1.1rem\r\n}\r\n\r\n/* width */\r\n\r\n::-webkit-scrollbar {\r\n  width: 15px;\r\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 5px grey;\r\n  border-radius: 7px;\r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: #6c757d;\r\n  border-radius: 7px;\r\n}\r\n\r\nbutton {\r\n  padding: .375rem .75rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\nbutton.main-bottom {\r\n  margin-top: 2.5rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nbutton.main-top {\r\n  margin-top: 1rem;\r\n  margin-bottom: 2.5rem;\r\n}\r\n\r\n.button-badge {\r\n  margin-left: 1.2rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.no-plans-to-show-for-level-button {\r\n  margin-top: 120px !important;\r\n}\r\n\r\n.no-plans-to-show-for-create-wide-enough {\r\n  width: 455px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9wbGFubmluZy9wbGFubmluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtDQUN2Qjs7QUFFRCxXQUFXOztBQUNYO0VBQ0UsWUFBWTtDQUNiOztBQUVELFdBQVc7O0FBQ1g7RUFDRSwrQkFBK0I7RUFDL0IsbUJBQW1CO0NBQ3BCOztBQUVELFlBQVk7O0FBQ1o7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLDZCQUE2QjtDQUM5Qjs7QUFFRDtFQUNFLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3dvcmsvcGxhbm5pbmcvcGxhbm5pbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGFubmluZy1zZWN0aW9uLWhlaWdodC1mb3Itd29yay1kYXNoYm9hcmQge1xyXG4gIGhlaWdodDogMzMwcHg7XHJcbn1cclxuXHJcbi5wbGFubmluZy1zZWN0aW9uLWhlaWdodC1mb3ItcGxhbm5pbmctbW9kYWwge1xyXG4gIGhlaWdodDogNDkwcHg7XHJcbn1cclxuXHJcbi5zY3JvbGxpbmctYXJlYSB7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gIG92ZXJmbG93LXk6YXV0bztcclxuICBvdmVyZmxvdy14OmhpZGRlbjtcclxufVxyXG5cclxuLnZlcnRpY2FsLXBhZGRpbmdzIHtcclxuICBwYWRkaW5nLXRvcDogMS4xcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjFyZW1cclxufVxyXG5cclxuLyogd2lkdGggKi9cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggZ3JleTtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuYnV0dG9uLm1haW4tYm90dG9tIHtcclxuICBtYXJnaW4tdG9wOiAyLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuYnV0dG9uLm1haW4tdG9wIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxufVxyXG5cclxuLmJ1dHRvbi1iYWRnZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEuMnJlbTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLm5vLXBsYW5zLXRvLXNob3ctZm9yLWxldmVsLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMTIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vLXBsYW5zLXRvLXNob3ctZm9yLWNyZWF0ZS13aWRlLWVub3VnaCB7XHJcbiAgd2lkdGg6IDQ1NXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/work/planning/planning.component.html":
/*!*******************************************************!*\
  !*** ./src/app/work/planning/planning.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"currentlyChosenHive\">\n  <div class=\"card bg-light vertical-paddings\" [ngClass]=\"getHeight()\">\n    <div\n      class=\"card-body scrolling-area pt-1 pb-1\"\n      id=\"planningScrollArea\"\n      [ngClass]=\"{'no-plans-to-show-for-create-wide-enough':\n      planningComponentType != planningComponentEnum.WORK_DASHBOARD}\">\n      <ng-container *ngIf=\"planningComponentType === planningComponentEnum.WORK_DASHBOARD\">\n        <button\n          *ngIf=\"currentlyChosenHive.unresolvedPlanElements &&\n            currentlyChosenHive.unresolvedPlanElements.length >= MIN_NO_OF_PLANS_WHEN_SECOND_BUTTON_ADDED\"\n          type=\"button\"\n          class=\"btn btn-light btn-outline-secondary btn-block main-top\"\n          (click)=\"onOpenPlanning()\">\n          Haldan planeeringuid\n          <span class=\"badge badge-dark button-badge\">\n            {{currentlyChosenHive.unresolvedPlanElements ? currentlyChosenHive.unresolvedPlanElements.length : '0' }}\n          </span>\n        </button>\n      </ng-container>\n\n\n      <app-plan-element\n        *ngFor=\"let plan of getRelevantPlansList()\"\n        [plan]=\"plan\"\n        [planningComponentType]=\"planningComponentType\"\n        [currentlyChosenHive]=\"currentlyChosenHive\"\n        [memorizedActiveElementId]=\"memorizedActivePlanElementId\"></app-plan-element>\n\n      <ng-container *ngIf=\"planningComponentType === planningComponentEnum.WORK_DASHBOARD\">\n        <button\n          type=\"button\"\n          class=\"btn btn-light btn-outline-secondary btn-block main-bottom\"\n          (click)=\"onOpenPlanning()\"\n          [ngClass]=\"{'no-plans-to-show-for-level-button': !currentlyChosenHive.unresolvedPlanElements ||\n                                                currentlyChosenHive.unresolvedPlanElements &&\n                                                 currentlyChosenHive.unresolvedPlanElements.length == 0}\">\n          Haldan planeeringuid\n          <span class=\"badge badge-dark button-badge\">\n            {{currentlyChosenHive.unresolvedPlanElements ? currentlyChosenHive.unresolvedPlanElements.length : '0' }}\n          </span>\n        </button>\n      </ng-container>\n\n    </div>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/work/planning/planning.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/work/planning/planning.component.ts ***!
  \*****************************************************/
/*! exports provided: PlanningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningComponent", function() { return PlanningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../settings/shared/hive.model */ "./src/app/settings/shared/hive.model.ts");
/* harmony import */ var _planning_component_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./planning-component.enum */ "./src/app/work/planning/planning-component.enum.ts");
/* harmony import */ var _planning_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./planning.service */ "./src/app/work/planning/planning.service.ts");
/* harmony import */ var _util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/jw-modal/jw-modal.service */ "./src/app/util/jw-modal/jw-modal.service.ts");






var PlanningComponent = /** @class */ (function () {
    function PlanningComponent(planningService, modalService) {
        this.planningService = planningService;
        this.modalService = modalService;
        this.planningComponentEnum = _planning_component_enum__WEBPACK_IMPORTED_MODULE_3__["PlanningComponentEnum"];
        this.MIN_NO_OF_PLANS_WHEN_SECOND_BUTTON_ADDED = 3;
        this.subscriptions = [];
    }
    PlanningComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.document = document;
        this.subscriptions.push(this.planningService.newPlanElementSelected.asObservable().subscribe(function (np) {
            if (!np)
                _this.memorizedActivePlanElementId = undefined;
            else {
                _this.memorizedActivePlanElementId = np.id;
            }
        }));
    };
    PlanningComponent.prototype.ngOnChanges = function () {
        setTimeout(function () { return document.getElementById('planningScrollArea').scrollTop = Number.MAX_SAFE_INTEGER; }, 0);
    };
    PlanningComponent.prototype.onOpenPlanning = function () {
        this.planningService.newPlanElementSelected.next(null);
        this.modalService.open('work-planning');
    };
    PlanningComponent.prototype.getHeight = function () {
        if (this.planningComponentType === _planning_component_enum__WEBPACK_IMPORTED_MODULE_3__["PlanningComponentEnum"].WORK_DASHBOARD) {
            return 'planning-section-height-for-work-dashboard';
        }
        else {
            return 'planning-section-height-for-planning-modal';
        }
    };
    PlanningComponent.prototype.getRelevantPlansList = function () {
        if (this.planningComponentType === _planning_component_enum__WEBPACK_IMPORTED_MODULE_3__["PlanningComponentEnum"].WORK_DASHBOARD) {
            return this.currentlyChosenHive.unresolvedPlanElements;
        }
        if (this.planningComponentType === _planning_component_enum__WEBPACK_IMPORTED_MODULE_3__["PlanningComponentEnum"].PLANNING_MANAGEMENT_UNRESOLVED) {
            return this.currentlyChosenHive.unresolvedPlanElements;
        }
        if (this.planningComponentType === _planning_component_enum__WEBPACK_IMPORTED_MODULE_3__["PlanningComponentEnum"].PLANNING_MANAGEMENT_RESOLVED) {
            return this.currentlyChosenHive.resolvedPlanElements;
        }
    };
    PlanningComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_2__["Hive"])
    ], PlanningComponent.prototype, "currentlyChosenHive", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PlanningComponent.prototype, "planningComponentType", void 0);
    PlanningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planning',
            template: __webpack_require__(/*! ./planning.component.html */ "./src/app/work/planning/planning.component.html"),
            styles: [__webpack_require__(/*! ./planning.component.css */ "./src/app/work/planning/planning.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_planning_service__WEBPACK_IMPORTED_MODULE_4__["PlanningService"],
            _util_jw_modal_jw_modal_service__WEBPACK_IMPORTED_MODULE_5__["JwModalService"]])
    ], PlanningComponent);
    return PlanningComponent;
}());



/***/ }),

/***/ "./src/app/work/planning/planning.service.ts":
/*!***************************************************!*\
  !*** ./src/app/work/planning/planning.service.ts ***!
  \***************************************************/
/*! exports provided: PlanningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningService", function() { return PlanningService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/spinner/spinner.service */ "./src/app/util/spinner/spinner.service.ts");
/* harmony import */ var _planning_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./planning-data.service */ "./src/app/work/planning/planning-data.service.ts");
/* harmony import */ var _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../settings/shared/colonies.service */ "./src/app/settings/shared/colonies.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/executor/executor.service */ "./src/app/util/executor/executor.service.ts");
/* harmony import */ var _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util/executor/controls-protection-id.enum */ "./src/app/util/executor/controls-protection-id.enum.ts");









var PlanningService = /** @class */ (function () {
    function PlanningService(spinnerService, planningDataService, coloniesService, executorService) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.planningDataService = planningDataService;
        this.coloniesService = coloniesService;
        this.executorService = executorService;
        this.newPlanElementSelected = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.newPlanDropdownElementSelected = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.showPlanningWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.updatePlan = function (plan, hiveId) {
            _this.planningDataService.updatePlan(plan, hiveId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
                .subscribe(function () { return _this.coloniesService.retrieveColonies(); });
        };
        this.updateDropdownElement = function (element) {
            _this.spinnerService.setSpinnerStatus.next(true);
            _this.planningDataService.updateDropdownElement(element).subscribe(function (data) {
                if (data.length === 0) {
                    _this.planningDropDown = undefined;
                }
                else {
                    _this.planningDropDown = data;
                    _this.sortPlanningDropdownByOrder();
                }
            });
            _this.spinnerService.setSpinnerStatus.next(false);
        };
        this.updateAllDropdownElements = function () {
            _this.planningDataService.updateAllDropdownElements(_this.planningDropDown).subscribe(function (data) {
                if (data.length === 0) {
                    _this.planningDropDown = undefined;
                }
                else {
                    _this.planningDropDown = data;
                    _this.sortPlanningDropdownByOrder();
                }
            });
        };
    }
    PlanningService.prototype.sortPlanningDropdownByOrder = function () {
        this.planningDropDown.sort(function (a, b) { return b.orderNumber - a.orderNumber; });
    };
    PlanningService.prototype.increaseElementOrderNumber = function (elementIdToMove) {
        var elementMoved = this.planningDropDown.find(function (e) { return e.id === elementIdToMove; });
        if (elementMoved.orderNumber == this.planningDropDown.length) {
            return;
        }
        this.planningDropDown.find(function (p) { return p.orderNumber == elementMoved.orderNumber + 1; }).orderNumber--;
        this.planningDropDown.find(function (p) { return p.id == elementMoved.id; }).orderNumber++;
        this.sortPlanningDropdownByOrder();
        this.executorService.exeWithTimer(this.updateAllDropdownElements, [this.planningDropDown], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_8__["ControlsProtectionIdEnum"].PLANNING_DROPDOWN_ORDERING);
    };
    PlanningService.prototype.decreaseElementOrderNumber = function (elementIdToMove) {
        var elementMoved = this.planningDropDown.find(function (e) { return e.id === elementIdToMove; });
        if (elementMoved.orderNumber == 1) {
            return;
        }
        this.planningDropDown.find(function (p) { return p.orderNumber == elementMoved.orderNumber - 1; }).orderNumber++;
        this.planningDropDown.find(function (p) { return p.id == elementMoved.id; }).orderNumber--;
        this.sortPlanningDropdownByOrder();
        this.executorService.exeWithTimer(this.updateAllDropdownElements, [this.planningDropDown], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_8__["ControlsProtectionIdEnum"].PLANNING_DROPDOWN_ORDERING);
    };
    PlanningService.prototype.addNewPlan = function (newPlan, hiveId) {
        var _this = this;
        this.spinnerService.setSpinnerStatus.next(true);
        this.planningDataService.addNewPlan(newPlan, hiveId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe(function () { return _this.coloniesService.retrieveColonies(); });
    };
    //TODO! vaata üle, et mis asja see tagastab ja milleks-kuidas seda kasutatatakse
    PlanningService.prototype.getDropdownElements = function () {
        var _this = this;
        this.planningDataService.getPlanningDropdownElements()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe(function (data) {
            if (data.length === 0) {
                _this.planningDropDown = undefined;
            }
            else {
                _this.planningDropDown = data;
                _this.sortPlanningDropdownByOrder();
            }
        });
    };
    PlanningService.prototype.createDropdownElement = function (newDropdownElement) {
        var _this = this;
        return this.planningDataService.createDropdownElement(newDropdownElement)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
            if (data.length === 0) {
                _this.planningDropDown = undefined;
            }
            else {
                _this.planningDropDown = data;
                _this.sortPlanningDropdownByOrder();
            }
        }));
    };
    PlanningService.prototype.deleteDropdownElement = function (newDropdownElement) {
        var _this = this;
        this.spinnerService.setSpinnerStatus.next(true);
        this.planningDataService.deleteDropdownElement(newDropdownElement.id).subscribe(function (data) {
            if (data.length === 0) {
                _this.planningDropDown = undefined;
            }
            else {
                _this.planningDropDown = data;
                _this.sortPlanningDropdownByOrder();
            }
            _this.spinnerService.setSpinnerStatus.next(false);
        });
    };
    PlanningService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"],
            _planning_data_service__WEBPACK_IMPORTED_MODULE_4__["PlanningDataService"],
            _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_5__["ColoniesService"],
            _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_7__["ExecutorService"]])
    ], PlanningService);
    return PlanningService;
}());



/***/ }),

/***/ "./src/app/work/reference/freak-mom/freak-mom.component.css":
/*!******************************************************************!*\
  !*** ./src/app/work/reference/freak-mom/freak-mom.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  height: 30px;\r\n}\r\n\r\nbutton {\r\n  height: 40px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9yZWZlcmVuY2UvZnJlYWstbW9tL2ZyZWFrLW1vbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvd29yay9yZWZlcmVuY2UvZnJlYWstbW9tL2ZyZWFrLW1vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/work/reference/freak-mom/freak-mom.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/work/reference/freak-mom/freak-mom.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-5\"></div>\r\n  <div class=\"col-5\">\r\n    <div class=\"card bg-light\" style=\"max-width: 23rem; height: 32rem\">\r\n      <div class=\"card-header\">\r\n        <button type=\"button\" class=\"btn btn-light btn-outline-primary\" style=\"width: 200px\"><img\r\n          src=\"assets/img/muuda.png\" alt=\"ii\"></button>\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <img\r\n          src=\"assets/img/v22rema.png\" alt=\"ii\">\r\n        <p class=\"card-text\">1 päev tagasi</p>\r\n        <br>\r\n        <div class=\"card-footer\">\r\n          <img src=\"assets/img/voitlusV22remaga.png\" alt=\"ii\"><p>mai 2018</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-2\">\r\n    <br>\r\n    <br><br>\r\n    <button type=\"button\" class=\"btn btn-light btn-outline-secondary\" style=\"width: 100px; margin: 20px\" ><img\r\n      src=\"assets/img/muudaNupp.png\" alt=\"ii\"></button>\r\n    <br>\r\n    <br>\r\n    <button type=\"button\" class=\"btn btn-light btn-outline-secondary\" style=\"width: 100px; margin: 20px\"><img\r\n      src=\"assets/img/raamat.jpg\" alt=\"ii\"></button>\r\n    <br>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/work/reference/freak-mom/freak-mom.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/work/reference/freak-mom/freak-mom.component.ts ***!
  \*****************************************************************/
/*! exports provided: FreakMomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreakMomComponent", function() { return FreakMomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FreakMomComponent = /** @class */ (function () {
    function FreakMomComponent() {
    }
    FreakMomComponent.prototype.ngOnInit = function () {
    };
    FreakMomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-freak-mom',
            template: __webpack_require__(/*! ./freak-mom.component.html */ "./src/app/work/reference/freak-mom/freak-mom.component.html"),
            styles: [__webpack_require__(/*! ./freak-mom.component.css */ "./src/app/work/reference/freak-mom/freak-mom.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FreakMomComponent);
    return FreakMomComponent;
}());



/***/ }),

/***/ "./src/app/work/reference/mother-frame/mother-frame.component.css":
/*!************************************************************************!*\
  !*** ./src/app/work/reference/mother-frame/mother-frame.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  height: 30px;\r\n}\r\n\r\nbutton {\r\n  height: 40px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9yZWZlcmVuY2UvbW90aGVyLWZyYW1lL21vdGhlci1mcmFtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvd29yay9yZWZlcmVuY2UvbW90aGVyLWZyYW1lL21vdGhlci1mcmFtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/work/reference/mother-frame/mother-frame.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/work/reference/mother-frame/mother-frame.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-5\"></div>\r\n  <div class=\"col-5\">\r\n    <div class=\"card bg-light\" style=\"max-width: 23rem; height: 32rem\">\r\n      <div class=\"card-header\">\r\n        <button type=\"button\" class=\"btn btn-light btn-outline-primary\" style=\"width: 200px\"><img\r\n          src=\"assets/img/muuda.png\" alt=\"ii\"></button>\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <img\r\n          src=\"assets/img/teadmata.jpg\" alt=\"ii\">\r\n        <p class=\"card-text\">1 päev tagasi</p>\r\n        <img\r\n          src=\"assets/img/kontrollraamPuudu.png\" alt=\"ii\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  <div class=\"col-2\">\r\n    <button type=\"button\" class=\"btn btn-light btn-outline-danger\" style=\"width: 100px; margin: 20px\" ><img\r\n      src=\"assets/img/teadmata.jpg\" alt=\"ii\"></button>\r\n    <br>\r\n    <br><br>\r\n    <button type=\"button\" class=\"btn btn-light btn-outline-success\" style=\"width: 100px; margin: 20px\" ><img\r\n      src=\"assets/img/muudaNupp.png\" alt=\"ii\"></button>\r\n    <br>\r\n    <button type=\"button\" class=\"btn btn-light btn-outline-danger\" style=\"width: 100px; margin: 20px\"><img\r\n      src=\"assets/img/muudaNupp.png\" alt=\"ii\"></button>\r\n    <br>\r\n    <button type=\"button\" class=\"btn btn-light btn-outline-danger\" style=\"width: 100px; margin: 20px\"><img\r\n      src=\"assets/img/muudaNupp.png\" alt=\"ii\"></button>\r\n    <br>\r\n    <button type=\"button\" class=\"btn btn-light btn-outline-primary\" style=\"width: 100px; margin: 20px\"><img\r\n      src=\"assets/img/muudaNupp.png\" alt=\"ii\"></button>\r\n  </div>\r\n  </div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/work/reference/mother-frame/mother-frame.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/work/reference/mother-frame/mother-frame.component.ts ***!
  \***********************************************************************/
/*! exports provided: MotherFrameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotherFrameComponent", function() { return MotherFrameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MotherFrameComponent = /** @class */ (function () {
    function MotherFrameComponent() {
    }
    MotherFrameComponent.prototype.ngOnInit = function () {
    };
    MotherFrameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mother-frame',
            template: __webpack_require__(/*! ./mother-frame.component.html */ "./src/app/work/reference/mother-frame/mother-frame.component.html"),
            styles: [__webpack_require__(/*! ./mother-frame.component.css */ "./src/app/work/reference/mother-frame/mother-frame.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MotherFrameComponent);
    return MotherFrameComponent;
}());



/***/ }),

/***/ "./src/app/work/reference/mother-situation/mother-situation.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/work/reference/mother-situation/mother-situation.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  height: 30px;\r\n}\r\n\r\nbutton {\r\n  height: 40px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9yZWZlcmVuY2UvbW90aGVyLXNpdHVhdGlvbi9tb3RoZXItc2l0dWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC93b3JrL3JlZmVyZW5jZS9tb3RoZXItc2l0dWF0aW9uL21vdGhlci1zaXR1YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/work/reference/mother-situation/mother-situation.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/work/reference/mother-situation/mother-situation.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card bg-light\" style=\"width: 65rem; height: 32rem\">\r\n      <div class=\"card-header\">\r\n        <div class=\"row\">\r\n          <h5>Ema hetkeolukord</h5>\r\n          <button type=\"button\" class=\"btn btn-light btn-outline-danger\" style=\"width: 40px; margin: 20px;\">\r\n            <img src=\"assets/img/sulge.jpeg\" alt=\"\"></button>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <button type=\"button\" class=\"btn btn-light btn-outline-danger\" style=\"width: 150px; margin: 20px\"><img\r\n          src=\"assets/img/kadunudKitsam.jpg\" alt=\"ii\"></button>\r\n        <button type=\"button\" class=\"btn btn-light btn-outline-success\" style=\"width: 150px; margin: 20px\"><img\r\n          src=\"assets/img/puuriga_tarru.png\" alt=\"ii\"></button>\r\n        <button type=\"button\" class=\"btn btn-light btn-outline-success\" style=\"width: 150px; margin: 20px\"><img\r\n          src=\"assets/img/kadunudKitsam.jpg\" alt=\"ii\"></button>\r\n        <br>\r\n        <button type=\"button\" class=\"btn btn-light btn-outline-danger\" style=\"width: 200px\"><img\r\n          src=\"assets/img/teadmata.jpg\" alt=\"ii\"></button>\r\n        <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Arrowright.svg/2000px-Arrowright.svg.png\" alt=\"ii\" style=\"height: 90px\">\r\n        <button type=\"button\" class=\"btn btn-light btn-outline-success\" style=\"width: 200px\"><img\r\n          src=\"assets/img/emaOkRohe.png\" alt=\"ii\"></button>\r\n        <div class=\"card-footer\">\r\n          <div class=\"row\">\r\n            <button type=\"button\" class=\"btn btn-light btn-outline-danger\" style=\"margin: 20px; width: 200px\">\r\n              <img\r\n                src=\"assets/img/v22rema.png\" alt=\"ii\">\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-light btn-outline-success\" style=\"margin: 20px; width: 200px\">\r\n              <img\r\n                src=\"assets/img/puurist_v2lja.png\" alt=\"ii\">\r\n            </button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/work/reference/mother-situation/mother-situation.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/work/reference/mother-situation/mother-situation.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MotherSituationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotherSituationComponent", function() { return MotherSituationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MotherSituationComponent = /** @class */ (function () {
    function MotherSituationComponent() {
    }
    MotherSituationComponent.prototype.ngOnInit = function () {
    };
    MotherSituationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mother-situation',
            template: __webpack_require__(/*! ./mother-situation.component.html */ "./src/app/work/reference/mother-situation/mother-situation.component.html"),
            styles: [__webpack_require__(/*! ./mother-situation.component.css */ "./src/app/work/reference/mother-situation/mother-situation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MotherSituationComponent);
    return MotherSituationComponent;
}());



/***/ }),

/***/ "./src/app/work/size/size-data.service.ts":
/*!************************************************!*\
  !*** ./src/app/work/size/size-data.service.ts ***!
  \************************************************/
/*! exports provided: SizeDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeDataService", function() { return SizeDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/util.service */ "./src/app/util/util.service.ts");




var SizeDataService = /** @class */ (function () {
    function SizeDataService(httpClient) {
        this.httpClient = httpClient;
    }
    SizeDataService.prototype.onGetSizeLogs = function (hiveId) {
        var URL = _util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].backEndURL + 'api/hive/' + hiveId + '/sizelogs';
        return this.httpClient.get(URL).toPromise();
    };
    SizeDataService.prototype.onUpdateSizeLog = function (hiveIdThatIsBeingUpdated, sizeLogToUpdate) {
        var URL = _util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"].backEndURL + 'api/hive/' + hiveIdThatIsBeingUpdated + '/sizelogs/' + sizeLogToUpdate.id;
        return this.httpClient.put(URL, sizeLogToUpdate);
    };
    SizeDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SizeDataService);
    return SizeDataService;
}());



/***/ }),

/***/ "./src/app/work/size/size-edit/size-edit.component.css":
/*!*************************************************************!*\
  !*** ./src/app/work/size/size-edit/size-edit.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".whiteBox {\r\n  width: 240px;\r\n  background-color: white;\r\n  font-size: 36px;\r\n  text-align: center;\r\n  line-height: 1.5;\r\n}\r\n\r\nbutton.btn {\r\n  font-size: 35px;\r\n  font-weight: bold;\r\n  width: 60px;\r\n  height: 58px;\r\n}\r\n\r\nbutton.minus {\r\n  margin-left: 7px;\r\n  float: left;\r\n}\r\n\r\nbutton.plus {\r\n  margin-right: 7px;\r\n  float: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9zaXplL3NpemUtZWRpdC9zaXplLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtDQUNiOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3dvcmsvc2l6ZS9zaXplLWVkaXQvc2l6ZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2hpdGVCb3gge1xyXG4gIHdpZHRoOiAyNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbmJ1dHRvbi5idG4ge1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDU4cHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5taW51cyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuYnV0dG9uLnBsdXMge1xyXG4gIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/work/size/size-edit/size-edit.component.html":
/*!**************************************************************!*\
  !*** ./src/app/work/size/size-edit/size-edit.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  *ngIf=\"sizeLog\"\r\n  align=\"center\">\r\n  <div\r\n    class=\"whiteBox\" style=\"margin-bottom: 35px\">\r\n    <button type=\"button\"\r\n            class=\"btn btn-light btn-outline-secondary minus\"\r\n            (click)=\"onDecreaseMagazineSize()\"\r\n            [disabled]=\"disableControls\"> - </button>\r\n    <span *ngIf=\"sizeLog.hasMagazine\">{{ sizeLog.magazineSize }}%</span>\r\n    <span *ngIf=\"!sizeLog.hasMagazine\">-</span>\r\n    <button type=\"button\"\r\n            class=\"btn btn-light btn-outline-secondary plus\"\r\n            style=\"float: right\"\r\n            (click)=\"onIncreaseMagazineSize()\"\r\n            [disabled]=\"disableControls\"> + </button>\r\n  </div>\r\n  <div class=\"whiteBox\" style=\"margin-bottom: 10px\">\r\n    <button type=\"button\" class=\"btn btn-light btn-outline-secondary minus\"\r\n            style=\"float: left\"\r\n            (click)=\"onDecreaseAddedNumOfFrames()\"\r\n            [disabled]=\"disableControls\"> - </button>\r\n    +{{ sizeLog.addedNumOfFrames }}\r\n    <button type=\"button\" class=\"btn btn-light btn-outline-secondary plus\"\r\n            style=\"float: right\"\r\n            (click)=\"onIncreaseAddedNumOfFrames()\"\r\n            [disabled]=\"disableControls\"> + </button>\r\n    <br>\r\n    <b>{{ sizeLog.totalNumOfFrames }}</b>\r\n    <br>\r\n    <button type=\"button\" class=\"btn btn-light btn-outline-secondary minus\"\r\n            style=\"float: left\"\r\n            (click)=\"onDecreaseRemovedNumOfFrames()\"\r\n            [disabled]=\"disableControls\"> - </button>\r\n    -{{ sizeLog.removedNumOfFrames }}\r\n    <button type=\"button\" class=\"btn btn-light btn-outline-secondary plus\"\r\n            style=\"float: right\"\r\n            (click)=\"onIncreaseRemovedNumOfFrames()\"\r\n            [disabled]=\"disableControls\"> + </button>\r\n  </div>\r\n  <h2 style=\"text-align: center;margin-left: 10px; margin-bottom: 13px\">\r\n    <span *ngIf=\"blockName === 'current'\">täna</span>\r\n    <span *ngIf=\"blockName != 'current'\">{{ sizeLog.day | timeAgo }}</span>\r\n  </h2>\r\n  <div class=\"whiteBox\">\r\n    <button type=\"button\" class=\"btn btn-light btn-outline-secondary minus\"\r\n            style=\"float: left\"\r\n            (click)=\"onDecreaseRemovedCocoons()\"\r\n            [disabled]=\"disableControls\"> - </button>\r\n    {{ sizeLog.removedCocoons }}\r\n    <button type=\"button\" class=\"btn btn-light btn-outline-secondary plus\"\r\n            style=\"float: right\"\r\n            (click)=\"onIncreaseRemovedCocoons()\"\r\n            [disabled]=\"disableControls\"> + </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/work/size/size-edit/size-edit.component.ts":
/*!************************************************************!*\
  !*** ./src/app/work/size/size-edit/size-edit.component.ts ***!
  \************************************************************/
/*! exports provided: SizeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeEditComponent", function() { return SizeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../size.service */ "./src/app/work/size/size.service.ts");
/* harmony import */ var _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/executor/executor.service */ "./src/app/util/executor/executor.service.ts");
/* harmony import */ var _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/executor/controls-protection-id.enum */ "./src/app/util/executor/controls-protection-id.enum.ts");





var SizeEditComponent = /** @class */ (function () {
    function SizeEditComponent(sizeService, executorService) {
        this.sizeService = sizeService;
        this.executorService = executorService;
        this.sizeLogs = null;
        this.subscriptions = [];
    }
    SizeEditComponent.prototype.ngOnChanges = function () {
        if (this.sizeLogs) {
            if (this.blockName === 'current') {
                this.sizeLog = this.sizeLogs.length >= 1 ? this.sizeLogs[0] : null;
            }
            if (this.blockName === 'previous') {
                this.sizeLog = this.sizeLogs.length >= 2 ? this.sizeLogs[1] : null;
            }
            if (this.blockName === 'beforePrevious') {
                this.sizeLog = this.sizeLogs.length >= 3 ? this.sizeLogs[2] : null;
            }
        }
    };
    SizeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.executorService.getControlsProtection.subscribe(function (ps) {
            if (!ps.disableControls) {
                _this.disableControls = false;
                return;
            }
            _this.disableControls = ps.omittedControlsId != _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_4__["ControlsProtectionIdEnum"].SIZELOG;
        }));
    };
    SizeEditComponent.prototype.onIncreaseMagazineSize = function () {
        if (this.sizeLog.hasMagazine === false) {
            this.sizeLog.magazineSize = 0;
            this.sizeLog.hasMagazine = true;
            this.callUpdate();
        }
        else if (this.sizeLog.hasMagazine === true && this.sizeLog.magazineSize <= 80) {
            this.sizeLog.magazineSize += 20;
            this.callUpdate();
        }
    };
    SizeEditComponent.prototype.onDecreaseMagazineSize = function () {
        if (this.sizeLog.hasMagazine === true && this.sizeLog.magazineSize >= 20) {
            this.sizeLog.magazineSize -= 20;
            this.callUpdate();
        }
        else if (this.sizeLog.hasMagazine === true && this.sizeLog.magazineSize === 0) {
            this.sizeLog.hasMagazine = false;
            this.callUpdate();
        }
    };
    SizeEditComponent.prototype.onIncreaseAddedNumOfFrames = function () {
        if (this.sizeLog.addedNumOfFrames <= 98 && this.sizeLog.totalNumOfFrames <= 98) {
            this.sizeLog.addedNumOfFrames += 1;
            this.sizeLog.totalNumOfFrames += 1;
            this.callUpdate();
            if (this.blockName === 'previous') {
                this.sizeLogs[0].totalNumOfFrames++;
            }
            if (this.blockName === 'beforePrevious') {
                this.sizeLogs[0].totalNumOfFrames++;
                this.sizeLogs[1].totalNumOfFrames++;
            }
        }
    };
    SizeEditComponent.prototype.onDecreaseAddedNumOfFrames = function () {
        if (this.sizeLog.addedNumOfFrames >= 1 && this.sizeLog.totalNumOfFrames >= 1) {
            this.sizeLog.addedNumOfFrames -= 1;
            this.sizeLog.totalNumOfFrames -= 1;
            this.callUpdate();
            if (this.blockName === 'previous') {
                this.sizeLogs[0].totalNumOfFrames--;
            }
            if (this.blockName === 'beforePrevious') {
                this.sizeLogs[0].totalNumOfFrames--;
                this.sizeLogs[1].totalNumOfFrames--;
            }
        }
    };
    SizeEditComponent.prototype.onIncreaseRemovedNumOfFrames = function () {
        if (this.sizeLog.removedNumOfFrames <= 98 && this.sizeLog.totalNumOfFrames >= 1) {
            this.sizeLog.removedNumOfFrames += 1;
            this.sizeLog.totalNumOfFrames -= 1;
            this.callUpdate();
            if (this.blockName === 'previous') {
                this.sizeLogs[0].totalNumOfFrames--;
            }
            if (this.blockName === 'beforePrevious') {
                this.sizeLogs[0].totalNumOfFrames--;
                this.sizeLogs[1].totalNumOfFrames--;
            }
        }
    };
    SizeEditComponent.prototype.onDecreaseRemovedNumOfFrames = function () {
        if (this.sizeLog.removedNumOfFrames >= 1 && this.sizeLog.totalNumOfFrames <= 98) {
            this.sizeLog.removedNumOfFrames -= 1;
            this.sizeLog.totalNumOfFrames += 1;
            this.callUpdate();
            if (this.blockName === 'previous') {
                this.sizeLogs[0].totalNumOfFrames++;
            }
            if (this.blockName === 'beforePrevious') {
                this.sizeLogs[0].totalNumOfFrames++;
                this.sizeLogs[1].totalNumOfFrames++;
            }
        }
    };
    SizeEditComponent.prototype.onDecreaseRemovedCocoons = function () {
        if (this.sizeLog.removedCocoons >= 1) {
            this.sizeLog.removedCocoons -= 1;
            this.callUpdate();
        }
    };
    SizeEditComponent.prototype.onIncreaseRemovedCocoons = function () {
        if (this.sizeLog.removedCocoons <= 98) {
            this.sizeLog.removedCocoons += 1;
            this.callUpdate();
        }
    };
    SizeEditComponent.prototype.callUpdate = function () {
        if (this.blockName === 'current') {
            this.executorService.exeWithTimer(this.sizeService.updateSizeData, [this.idOfCurrentHive, [this.sizeLog]], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_4__["ControlsProtectionIdEnum"].SIZELOG);
        }
        if (this.blockName === 'previous') {
            this.executorService.exeWithTimer(this.sizeService.updateSizeData, [this.idOfCurrentHive, [this.sizeLogs[0], this.sizeLog]], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_4__["ControlsProtectionIdEnum"].SIZELOG);
        }
        if (this.blockName === 'beforePrevious') {
            this.executorService.exeWithTimer(this.sizeService.updateSizeData, [this.idOfCurrentHive, [this.sizeLogs[0], this.sizeLogs[1], this.sizeLog]], _util_executor_controls_protection_id_enum__WEBPACK_IMPORTED_MODULE_4__["ControlsProtectionIdEnum"].SIZELOG);
        }
    };
    SizeEditComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SizeEditComponent.prototype, "blockName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SizeEditComponent.prototype, "idOfCurrentHive", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SizeEditComponent.prototype, "sizeLogs", void 0);
    SizeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-size-edit',
            template: __webpack_require__(/*! ./size-edit.component.html */ "./src/app/work/size/size-edit/size-edit.component.html"),
            styles: [__webpack_require__(/*! ./size-edit.component.css */ "./src/app/work/size/size-edit/size-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_size_service__WEBPACK_IMPORTED_MODULE_2__["SizeService"],
            _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_3__["ExecutorService"]])
    ], SizeEditComponent);
    return SizeEditComponent;
}());



/***/ }),

/***/ "./src/app/work/size/size-view/size-view.component.css":
/*!*************************************************************!*\
  !*** ./src/app/work/size/size-view/size-view.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".whiteBox {\r\n  width: 100px;\r\n  background-color: white;\r\n  font-size: 36px;\r\n  line-height: 1.6;\r\n}\r\n\r\nbutton.btn {\r\n  font-size: 22px;\r\n  margin-top: 10px;\r\n  margin-bottom: 5px;\r\n  padding: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9zaXplL3NpemUtdmlldy9zaXplLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3dvcmsvc2l6ZS9zaXplLXZpZXcvc2l6ZS12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2hpdGVCb3gge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxuYnV0dG9uLmJ0biB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/work/size/size-view/size-view.component.html":
/*!**************************************************************!*\
  !*** ./src/app/work/size/size-view/size-view.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  *ngIf=\"!sizeLog\"\r\n  align=\"center\">\r\n  <div\r\n    class=\"whiteBox\"\r\n    style=\"margin-bottom: 27px\"\r\n    align=\"center\">\r\n    <span> - </span>\r\n  </div>\r\n  <div\r\n    class=\"whiteBox\"\r\n    align=\"center\">\r\n    -\r\n    <br>\r\n    <b>-</b>\r\n    <br>\r\n    -\r\n  </div>\r\n  <div align=\"center\">\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn btn-light btn-outline-secondary\"\r\n      [disabled]=\"true\">\r\n      <span>N/A</span>\r\n    </button>\r\n  </div>\r\n  <div\r\n    class=\"whiteBox\"\r\n    align=\"center\">\r\n    -\r\n  </div>\r\n</div>\r\n\r\n\r\n<div\r\n  *ngIf=\"sizeLog\"\r\n  align=\"center\">\r\n  <div\r\n    class=\"whiteBox\"\r\n    style=\"margin-bottom: 27px\"\r\n    align=\"center\">\r\n    <span *ngIf=\"sizeLog.hasMagazine\">{{ sizeLog.magazineSize }}%</span>\r\n    <span *ngIf=\"!sizeLog.hasMagazine\">-</span>\r\n  </div>\r\n  <div\r\n    class=\"whiteBox\"\r\n    align=\"center\">\r\n    +{{ sizeLog.addedNumOfFrames }}\r\n    <br>\r\n    <b>{{ sizeLog.totalNumOfFrames }}</b>\r\n    <br>\r\n    -{{ sizeLog.removedNumOfFrames }}\r\n  </div>\r\n  <div align=\"center\">\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn btn-light btn-outline-secondary\"\r\n      (click)=\"chooseMyBlockToEdit()\"\r\n      [disabled]=\"disableControls\">\r\n      <span *ngIf=\"blockName === 'current'\">täna</span>\r\n      <span *ngIf=\"blockName != 'current'\">{{ sizeLog.day | timeAgo }}</span>\r\n    </button>\r\n  </div>\r\n  <div\r\n    class=\"whiteBox\"\r\n    align=\"center\">\r\n    {{ sizeLog.removedCocoons }}\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/work/size/size-view/size-view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/work/size/size-view/size-view.component.ts ***!
  \************************************************************/
/*! exports provided: SizeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeViewComponent", function() { return SizeViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/executor/executor.service */ "./src/app/util/executor/executor.service.ts");



var SizeViewComponent = /** @class */ (function () {
    function SizeViewComponent(executorService) {
        this.executorService = executorService;
        this.sizeLogs = null;
        this.editMEEEE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subscriptions = [];
    }
    SizeViewComponent.prototype.ngOnChanges = function () {
        if (this.sizeLogs) {
            if (this.blockName === 'current') {
                this.sizeLog = this.sizeLogs.length >= 1 ? this.sizeLogs[0] : null;
            }
            if (this.blockName === 'previous') {
                this.sizeLog = this.sizeLogs.length >= 2 ? this.sizeLogs[1] : null;
            }
            if (this.blockName === 'beforePrevious') {
                this.sizeLog = this.sizeLogs.length >= 3 ? this.sizeLogs[2] : null;
            }
        }
    };
    SizeViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.executorService.getControlsProtection.subscribe(function (ps) { return _this.disableControls = ps.disableControls; }));
    };
    SizeViewComponent.prototype.chooseMyBlockToEdit = function () {
        this.editMEEEE.emit(this.blockName);
    };
    SizeViewComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SizeViewComponent.prototype, "blockName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SizeViewComponent.prototype, "sizeLogs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SizeViewComponent.prototype, "editMEEEE", void 0);
    SizeViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-size-view',
            template: __webpack_require__(/*! ./size-view.component.html */ "./src/app/work/size/size-view/size-view.component.html"),
            styles: [__webpack_require__(/*! ./size-view.component.css */ "./src/app/work/size/size-view/size-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_executor_executor_service__WEBPACK_IMPORTED_MODULE_2__["ExecutorService"]])
    ], SizeViewComponent);
    return SizeViewComponent;
}());



/***/ }),

/***/ "./src/app/work/size/size.component.css":
/*!**********************************************!*\
  !*** ./src/app/work/size/size.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".whiteBox {\r\n  width: 110px;\r\n  background-color: white;\r\n  font-size: 36px;\r\n  text-align: center;\r\n  line-height: 1.6;\r\n  margin-left: 20px;\r\n}\r\n\r\nimg {\r\n  width: 110px;\r\n  margin-left: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9zaXplL3NpemUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3dvcmsvc2l6ZS9zaXplLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2hpdGVCb3gge1xyXG4gIHdpZHRoOiAxMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/work/size/size.component.html":
/*!***********************************************!*\
  !*** ./src/app/work/size/size.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-light\" style=\"margin-top: 5px\">\r\n  <div class=\"container\" style=\"padding: 5px\">\r\n    <div class=\"row\">\r\n      <div [ngClass]=\"getColWidth('beforePrevious')\">\r\n        <app-size-view\r\n          *ngIf=\"blockToEdit != 'beforePrevious'\"\r\n          [blockName]=\"'beforePrevious'\"\r\n          [sizeLogs]=\"currentlyChosenHive.threeSizeLogs\"\r\n          (editMEEEE)=\"chooseNewBlockToEdit($event)\"></app-size-view>\r\n        <app-size-edit\r\n          *ngIf=\"blockToEdit === 'beforePrevious'\"\r\n          [blockName]=\"'beforePrevious'\"\r\n          [sizeLogs]=\"currentlyChosenHive.threeSizeLogs\"\r\n          [idOfCurrentHive]=\"currentlyChosenHive.id\"></app-size-edit>\r\n      </div>\r\n      <div [ngClass]=\"getColWidth('previous')\">\r\n        <app-size-view\r\n          *ngIf=\"blockToEdit != 'previous'\"\r\n          [blockName]=\"'previous'\"\r\n          [sizeLogs]=\"currentlyChosenHive.threeSizeLogs\"\r\n          (editMEEEE)=\"chooseNewBlockToEdit($event)\"></app-size-view>\r\n        <app-size-edit\r\n          *ngIf=\"blockToEdit === 'previous'\"\r\n          [blockName]=\"'previous'\"\r\n          [sizeLogs]=\"currentlyChosenHive.threeSizeLogs\"\r\n          [idOfCurrentHive]=\"currentlyChosenHive.id\"></app-size-edit>\r\n      </div>\r\n      <div class=\"col-2\">\r\n        <div class=\"whiteBox\" style=\"margin-bottom: 27px\">\r\n          Mag\r\n        </div>\r\n        <img src=\"assets/img/frame.jpg\" alt=\"\">\r\n        <div class=\"whiteBox\" style=\"margin-top: 56px\">\r\n          kupp\r\n        </div>\r\n      </div>\r\n      <div [ngClass]=\"getColWidth('current')\">\r\n        <app-size-view\r\n          *ngIf=\"blockToEdit != 'current'\"\r\n          [blockName]=\"'current'\"\r\n          [sizeLogs]=\"currentlyChosenHive.threeSizeLogs\"\r\n          (editMEEEE)=\"chooseNewBlockToEdit($event)\"></app-size-view>\r\n        <app-size-edit\r\n          *ngIf=\"blockToEdit === 'current'\"\r\n          [blockName]=\"'current'\"\r\n          [sizeLogs]=\"currentlyChosenHive.threeSizeLogs\"\r\n          [idOfCurrentHive]=\"currentlyChosenHive.id\"></app-size-edit>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/work/size/size.component.ts":
/*!*********************************************!*\
  !*** ./src/app/work/size/size.component.ts ***!
  \*********************************************/
/*! exports provided: SizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeComponent", function() { return SizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../settings/shared/hive.model */ "./src/app/settings/shared/hive.model.ts");



var SizeComponent = /** @class */ (function () {
    function SizeComponent() {
        this.blockToEdit = 'current';
        this.sizeLogCurrent = null;
        this.sizeLogPrevious = null;
        this.sizeLogBeforePrevious = null;
    }
    SizeComponent.prototype.chooseNewBlockToEdit = function (blockToEditNow) {
        this.blockToEdit = blockToEditNow;
    };
    SizeComponent.prototype.getColWidth = function (blockName) {
        return this.blockToEdit === blockName ? 'col-4' : 'col-3';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _settings_shared_hive_model__WEBPACK_IMPORTED_MODULE_2__["Hive"])
    ], SizeComponent.prototype, "currentlyChosenHive", void 0);
    SizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-size',
            template: __webpack_require__(/*! ./size.component.html */ "./src/app/work/size/size.component.html"),
            styles: [__webpack_require__(/*! ./size.component.css */ "./src/app/work/size/size.component.css")]
        })
    ], SizeComponent);
    return SizeComponent;
}());



/***/ }),

/***/ "./src/app/work/size/size.service.ts":
/*!*******************************************!*\
  !*** ./src/app/work/size/size.service.ts ***!
  \*******************************************/
/*! exports provided: SizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeService", function() { return SizeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/spinner/spinner.service */ "./src/app/util/spinner/spinner.service.ts");
/* harmony import */ var _size_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./size-data.service */ "./src/app/work/size/size-data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../settings/shared/colonies.service */ "./src/app/settings/shared/colonies.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var SizeService = /** @class */ (function () {
    function SizeService(sizeDataService, spinnerService, coloniesService) {
        var _this = this;
        this.sizeDataService = sizeDataService;
        this.spinnerService = spinnerService;
        this.coloniesService = coloniesService;
        this.updateSizeData = function (hiveIdThatIsUpdated, sizeLogsToUpdate) {
            sizeLogsToUpdate.forEach(function (s) { return _this.onUpdateSizeData(hiveIdThatIsUpdated, s); });
        };
    }
    SizeService.prototype.onUpdateSizeData = function (hiveIdThatIsUpdated, sizeLogToUpdate) {
        var _this = this;
        return this.sizeDataService.onUpdateSizeLog(hiveIdThatIsUpdated, sizeLogToUpdate)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe(function () { return _this.coloniesService.retrieveColonies(); });
    };
    SizeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_size_data_service__WEBPACK_IMPORTED_MODULE_2__["SizeDataService"],
            _util_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"],
            _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_4__["ColoniesService"]])
    ], SizeService);
    return SizeService;
}());



/***/ }),

/***/ "./src/app/work/work-header/work-header.component.css":
/*!************************************************************!*\
  !*** ./src/app/work/work-header/work-header.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gray-background {\r\n  background-color: gray;\r\n}\r\n\r\nbutton {\r\n  height: 60px;\r\n}\r\n\r\nimg {\r\n  height: 38px;\r\n}\r\n\r\nselect {\r\n   height: 60px;\r\n   font-size: 1.5rem;\r\n }\r\n\r\noptgroup {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay93b3JrLWhlYWRlci93b3JrLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0dBQ0csYUFBYTtHQUNiLGtCQUFrQjtFQUNuQjs7QUFFRjtFQUNFLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3dvcmsvd29yay1oZWFkZXIvd29yay1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmF5LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGhlaWdodDogMzhweDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICAgaGVpZ2h0OiA2MHB4O1xyXG4gICBmb250LXNpemU6IDEuNXJlbTtcclxuIH1cclxuXHJcbm9wdGdyb3VwIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/work/work-header/work-header.component.html":
/*!*************************************************************!*\
  !*** ./src/app/work/work-header/work-header.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" style=\"margin: 0 !important; background-color: gray\" *ngIf=\"colonies\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"col-sm-1\">\r\n      <a routerLink=\"/settings\" *ngIf=\"!disableControls\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-light btn-outline-secondary\">\r\n          <img\r\n            src=\"assets/img/settingsView.png\"\r\n            height=\"30px\"\r\n          >\r\n        </button>\r\n      </a>\r\n    </div>\r\n    <div class=\"col-sm-5\">\r\n      <select\r\n        name=\"colony\"\r\n        class=\"custom-select\"\r\n        [(ngModel)]=\"currentlySelectedColonyId\"\r\n        (change)=\"coloniesService.notifyColonyHiveSelection(+currentlySelectedColonyId, +currentlySelectedHiveId)\"\r\n        [disabled]=\"disableControls\">\r\n        <optgroup>\r\n          <option value=\"\" disabled selected hidden>Vali koloonia...</option>\r\n          <option\r\n            *ngFor=\"let colony of colonies\"\r\n            [value]=\"colony.id\"> {{ colony.name }}</option>\r\n        </optgroup>\r\n      </select>\r\n    </div>\r\n    <div class=\"col-sm-5\" *ngIf=\"currentlySelectedColony\">\r\n      <select\r\n        name=\"hive\"\r\n        class=\"custom-select\"\r\n        [(ngModel)]=\"currentlySelectedHiveId\"\r\n        (change)=\"coloniesService.notifyColonyHiveSelection(+currentlySelectedColonyId, +currentlySelectedHiveId)\"\r\n        [disabled]=\"disableControls\">\r\n        <optgroup>\r\n          <option value=\"\" disabled selected hidden>Vali taru...</option>\r\n          <option\r\n            *ngFor=\"let hive of currentlySelectedColony.hives\"\r\n            [value]=\"hive.id\"> {{ '# ' + hive.number + ' ' + hive.description }}</option>\r\n        </optgroup>\r\n      </select>\r\n    </div>\r\n    <div class=\"col-sm-1\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light btn-outline-secondary\"\r\n        (click)=\"utilService.showOverviewWindow(true)\"\r\n        [disabled]=\"disableControls\">\r\n        <img\r\n          src=\"assets/img/colony.png\"\r\n          height=\"30px\"\r\n        >\r\n      </button>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/work/work-header/work-header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/work/work-header/work-header.component.ts ***!
  \***********************************************************/
/*! exports provided: WorkHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkHeaderComponent", function() { return WorkHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_shared_colony_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../settings/shared/colony.model */ "./src/app/settings/shared/colony.model.ts");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/util.service */ "./src/app/util/util.service.ts");
/* harmony import */ var _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../settings/shared/colonies.service */ "./src/app/settings/shared/colonies.service.ts");
/* harmony import */ var _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/executor/executor.service */ "./src/app/util/executor/executor.service.ts");






var WorkHeaderComponent = /** @class */ (function () {
    function WorkHeaderComponent(utilService, coloniesService, executorService) {
        this.utilService = utilService;
        this.coloniesService = coloniesService;
        this.executorService = executorService;
        this.subscriptions = [];
    }
    WorkHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.executorService.getControlsProtection.subscribe(function (ps) { return _this.disableControls = ps.disableControls; }));
    };
    WorkHeaderComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], WorkHeaderComponent.prototype, "colonies", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _settings_shared_colony_model__WEBPACK_IMPORTED_MODULE_2__["Colony"])
    ], WorkHeaderComponent.prototype, "currentlySelectedColony", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WorkHeaderComponent.prototype, "currentlySelectedColonyId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WorkHeaderComponent.prototype, "currentlySelectedHiveId", void 0);
    WorkHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work-header',
            template: __webpack_require__(/*! ./work-header.component.html */ "./src/app/work/work-header/work-header.component.html"),
            styles: [__webpack_require__(/*! ./work-header.component.css */ "./src/app/work/work-header/work-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_4__["ColoniesService"],
            _util_executor_executor_service__WEBPACK_IMPORTED_MODULE_5__["ExecutorService"]])
    ], WorkHeaderComponent);
    return WorkHeaderComponent;
}());



/***/ }),

/***/ "./src/app/work/work.component.css":
/*!*****************************************!*\
  !*** ./src/app/work/work.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding-for-notes {\r\n  padding-right: 2.5px;\r\n}\r\n\r\n.padding-for-planning{\r\n  padding-left: 2.5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7Q0FDdEI7O0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC93b3JrL3dvcmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRkaW5nLWZvci1ub3RlcyB7XHJcbiAgcGFkZGluZy1yaWdodDogMi41cHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWZvci1wbGFubmluZ3tcclxuICBwYWRkaW5nLWxlZnQ6IDIuNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/work/work.component.html":
/*!******************************************!*\
  !*** ./src/app/work/work.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-login\r\n  *ngIf=\"!validated\"\r\n  (allowedToPass)=\"validated = $event\"></app-login>\r\n\r\n<app-work-header\r\n  *ngIf=\"validated\"\r\n  [colonies]=\"colonies\"\r\n  [currentlySelectedColony]=\"currentlySelectedColony\"\r\n  [currentlySelectedColonyId]=\"currentlySelectedColony ? currentlySelectedColony.id.toString() : ''\"\r\n  [currentlySelectedHiveId]=\"currentlySelectedHive ? currentlySelectedHive.id.toString() : ''\"\r\n>\r\n</app-work-header>\r\n<ng-container *ngIf=\"currentlySelectedHive && validated\">\r\n  <div class=\"row\" style=\"margin-right: 0; margin-left: 0\">\r\n    <div class=\"col-9\" style=\"padding-right: 0px; padding-left: 5px\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6 padding-for-notes\">\r\n          <app-notes\r\n            [currentlySelectedHive]=\"currentlySelectedHive\"\r\n            [notesComponentType]=\"notesComponentEnum.WORK_DASHBOARD\"></app-notes>\r\n        </div>\r\n        <div class=\"col-6 padding-for-planning\">\r\n          <app-planning\r\n            [currentlyChosenHive]=\"currentlySelectedHive\"\r\n            [planningComponentType]=\"planningComponentEnum.WORK_DASHBOARD\"\r\n          >\r\n          </app-planning>\r\n        </div>\r\n      </div>\r\n      <app-size\r\n        [currentlyChosenHive]=\"currentlySelectedHive\"\r\n        *ngIf=\"currentlySelectedHive\"></app-size>\r\n    </div>\r\n    <div class=\"col-3\" style=\"margin-right: 0; padding-right: 0; padding-left: 5px\">\r\n      <app-mother\r\n        [currentlyChosenHive]=\"currentlySelectedHive\"\r\n        *ngIf=\"currentlySelectedHive\"></app-mother>\r\n    </div>\r\n  </div>\r\n\r\n  <app-planning-mgmt\r\n    [currentlyChosenHive]=\"currentlySelectedHive\"\r\n    [currentlyChosenColony]=\"currentlySelectedColony\"\r\n    [mgmtComponentid]=\"'work-planning'\"\r\n  ></app-planning-mgmt>\r\n\r\n  <app-note-mgmt\r\n    [currentlyChosenHive]=\"currentlySelectedHive\"\r\n    [currentlyChosenColony]=\"currentlySelectedColony\"\r\n    [mgmtComponentId]=\"'notes'\"\r\n  ></app-note-mgmt>\r\n\r\n</ng-container>\r\n\r\n\r\n<app-overview\r\n  *ngIf=\"colonies && validated\"\r\n  [colonies]=\"colonies\">\r\n</app-overview>\r\n\r\n"

/***/ }),

/***/ "./src/app/work/work.component.ts":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/spinner/spinner.service */ "./src/app/util/spinner/spinner.service.ts");
/* harmony import */ var _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings/shared/colonies.service */ "./src/app/settings/shared/colonies.service.ts");
/* harmony import */ var _planning_planning_component_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./planning/planning-component.enum */ "./src/app/work/planning/planning-component.enum.ts");
/* harmony import */ var _planning_planning_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./planning/planning.service */ "./src/app/work/planning/planning.service.ts");
/* harmony import */ var _notes_notes_component_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notes/notes-component.enum */ "./src/app/work/notes/notes-component.enum.ts");







var WorkComponent = /** @class */ (function () {
    function WorkComponent(spinnerService, coloniesService, planningService) {
        this.spinnerService = spinnerService;
        this.coloniesService = coloniesService;
        this.planningService = planningService;
        this.planningComponentEnum = _planning_planning_component_enum__WEBPACK_IMPORTED_MODULE_4__["PlanningComponentEnum"];
        this.notesComponentEnum = _notes_notes_component_enum__WEBPACK_IMPORTED_MODULE_6__["NotesComponentEnum"];
        this.validated = false;
        this.subscriptions = [];
    }
    WorkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.coloniesService.coloniesDataRetrieved$.subscribe(function () {
            _this.colonies = _this.coloniesService.getColonies();
            _this.updateSelectedColonyAndHive(true);
        }));
        this.subscriptions.push(this.coloniesService.colonyHiveSelectionChanged$.subscribe(function (_a) {
            var colonyId = _a.colonyId, hiveId = _a.hiveId;
            return _this.updateSelectedColonyAndHive(false, colonyId, hiveId);
        }));
        this.coloniesService.retrieveColonies();
        this.planningService.getDropdownElements();
    };
    WorkComponent.prototype.updateSelectedColonyAndHive = function (isDataUpdate, colonyId, hiveId) {
        if (isDataUpdate) {
            if (this.currentlySelectedColony)
                colonyId = this.currentlySelectedColony.id;
            if (this.currentlySelectedHive)
                hiveId = this.currentlySelectedHive.id;
        }
        this.currentlySelectedColony = this.colonies.find(function (colony) { return colony.id === colonyId; });
        if (hiveId) {
            this.currentlySelectedHive = this.currentlySelectedColony.hives.find(function (hive) { return hive.id === hiveId; });
        }
        else {
            this.currentlySelectedHive = undefined;
        }
    };
    WorkComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.css */ "./src/app/work/work.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"],
            _settings_shared_colonies_service__WEBPACK_IMPORTED_MODULE_3__["ColoniesService"],
            _planning_planning_service__WEBPACK_IMPORTED_MODULE_5__["PlanningService"]])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\anto\IdeaProjects\smarthive-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
