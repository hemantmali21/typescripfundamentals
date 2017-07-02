"use strict";
exports.__esModule = true;
var User_1 = require("./User");
/**========================================================== */
var usr = {
    fname: "Hnm",
    lname: "oak"
};
var users1 = [
    { fname: "Hemant", lname: "df" },
    { fname: "Sachin", lname: "sds" }
];
function getUserList(userlist) {
    userlist.forEach(function (element) {
        console.log(element);
    });
}
getUserList(users1);
/****Classes */
var u = new User_1.User("Hemant", "UK");
console.log(u.getFullName());
/****************Generics***************/
var userListG = [
    { fname: "Hemant", lname: "df" },
    { fname: "Sachin", lname: "sds" }
];
function getUserListG(userdata) {
    userdata.forEach(function (element) {
        console.log("Fname: " + element.fname
            + " " + " Lname: " + element.lname);
    });
}
getUserListG(userListG);
//# sourceMappingURL=sample.js.map