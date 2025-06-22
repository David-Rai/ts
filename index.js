// // //Simple types in ts
// // const rollno:Number=12//for number datatype
// // const nam:String = "ram"//for string datatype
// // const isValid:Boolean = false//for bool datatype
// function greet:GreetBlue(name,age) {
//     return `your name ${name} and your age is ${age}`
// }
// const greet: GreetBlue = (name = "name", age = 1) => {
//     return `your name ${name} and your age is ${age}`
// }
// console.log(greet())
//******Rest parameter****** */
function get() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(1, 2, 3, 4);
