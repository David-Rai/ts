// //Generics
// It is like the parameter for string it helps
// function , interfaces , alias to get types as Parameter


//******Generics function******* */
// function logger<A,N>(age:A [],nam: N ): void {
// console.log(`your name is ${nam} and your age is ${age}`)
// }

// logger([12,12,34],<string>"ram babu")


//*********Generics types and Interfaces******** */
// type User<N>={
// name:N
// }

// let user={
//     name:"ram"
// } as User<string>

// console.log(user)

// type logger<N, A> = (nam: N, age: A) => void

// const logger: logger<string, number> = (nam, age) => {
//     console.log(`your name is ${nam} and your age is ${age}`)
// }

// logger("ram", 12)

//Interface with generics
// interface User<N,A>{
//     name:N
//     age:A
// }

// const user:User<string,number>={
//     name:"ram",
//     age:12
// }

// console.log(user)

// interface logger<N=string,A=number> {
//     (nam: N, age: A): void
// }

// const logger: logger = function (nam, age) {
//     console.log(`your name is ${nam} and your age is ${age}`)
// }

// logger("ram", 12)

//Problem sloving from harkirat
// type arr=number[] | string []

// interface Arr {
//     (arr: number[] | string[]): void
// }

// type Arr=(arr:number [] | string[]) => void

//*******Generics constraints****** */
// interface hasThis{
// }
// const logger = <T extends {name:string} & {age:number}>(obj: T) : void => {

//     console.log(obj.name.toUpperCase())
//     console.log(obj.age)
// }

// const user={
//     name:"ram",
//     age:12
// }
// const result=logger(user)
