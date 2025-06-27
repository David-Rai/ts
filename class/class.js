var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Js classes with TS
var DOB = /** @class */ (function () {
    function DOB(date) {
        this.date = date;
    }
    return DOB;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(date, name, age) {
        var _this = _super.call(this, date) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    //logger function
    User.prototype.log = function () {
        console.log("Name ".concat(this.name, " & age ").concat(this.age, " and DOB is ").concat(this.date));
    };
    return User;
}(DOB));
var ram = new User(121212, 'Ram', 12);
ram.log();
