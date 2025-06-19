
//Variable declaration in ts
const rollno:Number=12//for number datatype
const nam:String = "ram"//for string datatype
const isValid:Boolean = false//for bool datatype

//Arrays
const names:readonly any[]=["ram","la","c","1",2,3]
// console.log(names)

//Specials datatypes
let value:unknown
let demo:any = "hey"//for all type of datatype
let demo2:undefined
let demo3:null
let demo4:never
let func1=(message:String):void =>{
console.log(message)
}

//Tuple - a array of predefined length and type of element in a array
let ourTuple:readonly [number,string,boolean]=[1,"ram",true]
// ourTuple=[1,"ram",false]
// ourTuple.push("ram2")

//Objects
let car:{name:string,rollno:number,isValid:boolean} = {
name:"toyota",
rollno:3,
isValid:false
}

//enum

const enum Size {Small,Medium,Large}

// console.log(Size)