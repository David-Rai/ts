

//TS with JS Class and Objects
//applying the ts


class User {
    name: String
    age: Number

    constructor(name: string, age: number): void {
        this.name = name
        this.age = age
    }

    //logger function
    log(): void {
        console.log(`Your name ${this.name} & age ${this.age}`)
    }
}


const ram = new User("ram", 12)
ram.log()
