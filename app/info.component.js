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
var owner_1 = require("./gist/owner");
var gist_1 = require("./gist/gist");
var InfoComponent = (function () {
    function InfoComponent(httpService, activateRoute) {
        var _this = this;
        this.httpService = httpService;
        this.activateRoute = activateRoute;
        this.gist = new gist_1.Gist();
        this.ownerEditing = false;
        this.subscription = activateRoute.params.subscribe(function (params) { return _this.id = params['id']; });
    }
    InfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getData('/gists/' + this.id).subscribe(function (data) { return _this.gist = data.json(); });
    };
    InfoComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    InfoComponent.prototype.getOwner = function (gist) {
        if ('owner' in gist) {
            return gist.owner.login;
        }
        else {
            return 'Anonimous';
        }
    };
    InfoComponent.prototype.isAnonimous = function (gist) {
        return !('owner' in gist);
    };
    InfoComponent.prototype.getDate = function (dateIso) {
        var date = new Date(dateIso);
        return date.toLocaleString();
    };
    InfoComponent.prototype.getAvatarUrl = function (gist) {
        if ('owner' in gist) {
            return gist.owner.avatar_url;
        }
        else {
            return "";
        }
    };
    InfoComponent.prototype.ownerEdit = function () {
        if (this.ownerEditing) {
            if (this.isAnonimous(this.gist)) {
                if (this.owner != "Anonimous") {
                    this.gist.owner = new owner_1.Owner;
                    this.gist.owner.login = this.owner;
                }
            }
            else {
                this.gist.owner.login = this.owner;
            }
        }
        else {
            this.owner = this.getOwner(this.gist);
        }
        this.ownerEditing = !this.ownerEditing;
    };
    return InfoComponent;
}());
InfoComponent = __decorate([
    core_1.Component({
        selector: 'info-app',
        templateUrl: "info.html",
        styles: [".anonimous{color:gray;}\n            .invisible{display:none;}"],
        providers: [http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService, router_1.ActivatedRoute])
], InfoComponent);
exports.InfoComponent = InfoComponent;
//# sourceMappingURL=info.component.js.map