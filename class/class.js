//Js classes with TS
// class DOB {
//     protected readonly date: number
//     constructor(date: number) {
//         this.date = date
//     }
// }
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(User.prototype, "nameSet", {
        //setter for the name
        set: function (newName) {
            if (newName.length <= 3) {
                console.log("name lenght need to be more than 3");
            }
            else {
                this.name = newName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "nameGet", {
        //getter for name
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    //logger function
    User.prototype.log = function () {
        console.log("Name ".concat(this.name, " & age ").concat(this.age));
    };
    return User;
}());
var ram = new User('Ram', 12);
console.log(ram);
ram.nameSet = "asdsadsad";
console.log(ram.name);
