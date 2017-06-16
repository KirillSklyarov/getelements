"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_service_1 = require("./http.service");
var InfoComponent = (function () {
    function InfoComponent(httpService, activateRoute) {
        var _this = this;
        this.httpService = httpService;
        this.activateRoute = activateRoute;
        this.subscription = activateRoute.params.subscribe(function (params) { return _this.id = params['id']; });
    }
    InfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getData('/gists/' + this.id).subscribe(function (data) { return _this.gist = data.json(); });
        alert(this.gist.id);
    };
    InfoComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return InfoComponent;
}());
InfoComponent = __decorate([
    core_1.Component({
        selector: 'info-app',
        templateUrl: "info.html",
        providers: [http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService, router_1.ActivatedRoute])
], InfoComponent);
exports.InfoComponent = InfoComponent;
//# sourceMappingURL=info.component.js.map