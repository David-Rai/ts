
//Js classes with TS
// class DOB {
//     protected readonly date: number
//     constructor(date: number) {
//         this.date = date
//     }
// }

class User {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    //setter for the name
    set nameSet(newName: string) {
        if (newName.length <= 3) {
            console.log("name lenght need to be more than 3")
        } else {
            this.name = newName
        }
    }


    //getter for name
    get nameGet(): string {
        return this.name
    }


    //logger function
    log(): void {
        console.log(`Name ${this.name} & age ${this.age}`)
    }
}

const ram = new User('Ram', 12)
console.log(ram)
ram.nameSet="asdsadsad"
console.log(ram.name)