// //Generics
// It is like the parameter for string it helps
// function , interfaces , alias to get types as Parameter

function logger<A,N>(age:A,nam: N ): void {
console.log(`your name is ${nam} and your age is ${age}`)
}

logger(<number>12,<string>"ram babu")
