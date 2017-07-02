"use strict";
exports.__esModule = true;
var User = (function () {
    function User(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    User.prototype.getFullName = function () {
        return this.fname + " " + this.lname;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map