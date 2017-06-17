"use strict";
var Gist = (function () {
    function Gist() {
    }
    Gist.prototype.getOwner = function () {
        if ('owner' in this) {
            return this.owner.login;
        }
        else {
            return 'Anonimous';
        }
    };
    Gist.prototype.isAnonimous = function () {
        return !('owner' in this);
    };
    Gist.prototype.getDate = function () {
        var date = new Date(this.created_at);
        return date.toLocaleString();
    };
    Gist.prototype.getAvatarUrl = function () {
        if ('owner' in this) {
            return this.owner.avatar_url;
        }
        else {
            return "";
        }
    };
    return Gist;
}());
exports.Gist = Gist;
//# sourceMappingURL=gist.js.map