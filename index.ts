
// // //Simple types in ts
// // const rollno:Number=12//for number datatype
// // const nam:String = "ram"//for string datatype
// // const isValid:Boolean = false//for bool datatype

// // //Arrays
// // const names:readonly any[]=["ram","la","c","1",2,3]

// // //Specials types
// // let value:unknown
// // let demo:any = "hey"//for all type of datatype
// // let demo2:undefined
// // let demo3:null
// // let demo4:never
// // let func1=(message:String):void =>{
// // }

// // //Tuple - a array of predefined length and type of element in a array
// // let ourTuple:readonly [number,string,boolean]=[1,"ram",true]
// // // ourTuple=[1,"ram",false]
// // // ourTuple.push("ram2")

// // //Objects
// // let car:{name:string,rollno:number,isValid:boolean} = {
// // name:"toyota",
// // rollno:3,
// // isValid:false
// // }

// // //enum
// // enum Size {Small,Medium,Large}
// // enum Car{
// //     name="toyota",
// //     prize="11111",
// //     address="pulchowk"
// // }

// // //Type annotation
// // let random:number | string | boolean
// // // random="ram"
// // // random=1111

// //Interface for user
// // interface User {
// //     name: String,
// //     age: number,
// //     isMarried?: boolean
// // }

// // const user: User = {
// //     name: "ram",
// //     age: 30,
// // }

// // //Interface for function
// // interface Greet{
// //     (name:string) : any
// // }
// // const greet:Greet = (name)=>{
// // return name
// // }



// // //********************Extending interface**************
// // interface Person{
// //     name:string
// // }

// // interface Employee extends Person{
// //     salary:number
// // }

// // const emp:Employee={
// //     name:"ram",
// //     salary:22222
// // }


// //**********Type Alias************
// type Name=string
// // type Age=number

// type User={//type for objects
//     name:Name,
//     age:Age
// }
// type Salary={
//     salary:number
// }
// const user:User={
//     name:"ram",
//     age:12
// }

// type Greet=(name:Name) => string//type for function

// //***************intersection types***********
// type Profile=User & Salary
// const user2:Profile={
//      name:"ram",
//      age:1,
//      salary:1111
// }

//*************Literal types***********
// let statusCode : 200 | 201 | "ram"
// statusCode="ram"



//*****Default and optional parameter******* */
// interface GreetBlue {
//     (name?: string, age?: number): string
// }
// function greet:GreetBlue(name,age) {

//     return `your name ${name} and your age is ${age}`
// }

// const greet: GreetBlue = (name = "name", age = 1) => {
//     return `your name ${name} and your age is ${age}`

// }




//******Rest parameter****** */

// function get(...args:number[] | string[]):any{

//     return args
// }


//******Index Signature******* */
// interface User{
//     age:number
//     [key:string]:string | number
// }

// const user1:User={
// name:"ram",
// age:12,
// dob:12
// }


//************Dynamic keys************* */
// interface User{
//     [key:string]:string
// }
// interface Spec extends User{
//     age:number
//     name:string
// }

// type User = {
//     [key: string]: string
// }
// type Spec = {
//     age: number,
//     name: string
// }

// const user1: Spec | User = {
//     name: "Ram",
//     age: 12,
//     country: "Nepal",
//     dob:"12",        // ✅ string
//     hobby: "Gaming"          // ✅ string

// }



// //*********Unknown******* */
// let val:unknown
// val=2
// val="ram"

// if(typeof val=== "string"){
// }

// import type { Add } from './utils/add'

// const add: Add = (a, b) => {
//     return a + b
// }

// add(1,3)

// import type {User} from './types/user'
// const user:User={
//     name:"ram",
//     age:12
// }


//****** Typeof********* */
// type car = {
//     name: string,
//     brand: string,
//     price: number
// }

// type nType=car["name"]
// type bType=car["brand"]

//****Conditionals types***** */

// type gType <T>=T extends string ? string : number

// type A=gType<string>

//******Templete literals****** */

// type statusCode=200 | 201 | 400 | 500

// type temp=`hello-${statusCode}`
// let demo:temp="hello-200"
// console.log(demo)

//**Mapped types**** */
interface car{
    name:string
    brand:string
    price:number
}

type Gen<C>={
[k in keyof C]:C[k]
}

type newCar=Gen<car>