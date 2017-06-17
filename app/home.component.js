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
var http_service_1 = require("./http.service");
var HomeComponent = (function () {
    function HomeComponent(httpService) {
        this.httpService = httpService;
        this.gists = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getData('/gists/public').subscribe(function (data) { return _this.gists = data.json(); });
    };
    HomeComponent.prototype.getOwner = function (gist) {
        if ('owner' in gist) {
            return gist.owner.login;
        }
        else {
            return 'Anonimous';
        }
    };
    HomeComponent.prototype.isAnonimous = function (gist) {
        return !('owner' in gist);
    };
    HomeComponent.prototype.getDate = function (dateIso) {
        var date = new Date(dateIso);
        return date.toLocaleString();
    };
    HomeComponent.prototype.getAvatarUrl = function (gist) {
        if ('owner' in gist) {
            return gist.owner.avatar_url;
        }
        else {
            return "";
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home-app',
        templateUrl: 'home.html',
        styles: [".anonimous{color:gray;}"],
        providers: [http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map