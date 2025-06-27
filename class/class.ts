
//Js classes with TS
class DOB {
    protected readonly date: number
    constructor(date: number) {
        this.date = date
    }
}

class User extends DOB {
    public name: string
    private age: number

    constructor(date: number, name: string, age: number) {
        super(date)
        this.name = name
        this.age = age
    }


    //logger function
    log(): void {
        console.log(`Name ${this.name} & age ${this.age} and DOB is ${this.date}`)
    }
}

const ram = new User(121212,'Ram', 12)
ram.log()