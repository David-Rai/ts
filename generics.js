// //Generics
// It is like the parameter for string it helps
// function , interfaces , alias to get types as Parameter
var logger = function (obj) {
    console.log(obj.name.toUpperCase());
    console.log(obj.age);
};
var user = {
    name: "ram",
    age: 12
};
var result = logger(user);
