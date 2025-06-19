//Simple types in ts
var rollno = 12; //for number datatype
var nam = "ram"; //for string datatype
var isValid = false; //for bool datatype
//Arrays
var names = ["ram", "la", "c", "1", 2, 3];
// console.log(names)
//Specials types
var value;
var demo = "hey"; //for all type of datatype
var demo2;
var demo3;
var demo4;
var func1 = function (message) {
    console.log(message);
};
//Tuple - a array of predefined length and type of element in a array
var ourTuple = [1, "ram", true];
// ourTuple=[1,"ram",false]
// ourTuple.push("ram2")
//Objects
var car = {
    name: "toyota",
    rollno: 3,
    isValid: false
};
//enum
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
var Car;
(function (Car) {
    Car["name"] = "toyota";
    Car["prize"] = "11111";
    Car["address"] = "pulchowk";
})(Car || (Car = {}));
//Type annotation
var random;
random = "ram";
console.log(random);
random = 1111;
console.log(random);
// function printDetails(detail:Car){
//     console.log(detail)
// }
// console.log(printDetails(Car.name))
