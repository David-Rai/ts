
// // //Simple types in ts
// // const rollno:Number=12//for number datatype
// // const nam:String = "ram"//for string datatype
// // const isValid:Boolean = false//for bool datatype

// // //Arrays
// // const names:readonly any[]=["ram","la","c","1",2,3]
// // // console.log(names)

// // //Specials types
// // let value:unknown
// // let demo:any = "hey"//for all type of datatype
// // let demo2:undefined
// // let demo3:null
// // let demo4:never
// // let func1=(message:String):void =>{
// // console.log(message)
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
// // enum Size {Small,Medium,Large}s
// // enum Car{
// //     name="toyota",
// //     prize="11111",
// //     address="pulchowk"
// // }

// // //Type annotation
// // let random:number | string | boolean
// // // random="ram"
// // // console.log(random)
// // // random=1111
// // // console.log(random)

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

// // //Extending interface
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

// // console.log(emp)

// //type Alias
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

// //intersection types
// type Profile=User & Salary
// const user2:Profile={
//      name:"ram",
//      age:1,
//      salary:1111
// }
// console.log(user2)