"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// import { FormsModule }      from '@angular/forms'
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var http_service_1 = require("./http.service");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home.component");
var info_component_1 = require("./info.component");
// определение маршрутов
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'info/:id', component: info_component_1.InfoComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [http_1.HttpModule, /*FormsModule,*/ platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, info_component_1.InfoComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [http_service_1.HttpService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map