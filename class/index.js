
//blueprint for the objects
class  DOB{
    constructor(date){
        this.date=date
    }
    showDate(){
        console.log(`DOB is ${this.date}`)
    }
}
class User extends DOB{
    constructor (date,name,age){
        super(date)
        this.name=name
        this.age=age
    }

    logger(){
        console.log(`your name is ${this.name} and age is ${this.age}`)
    }
}

//Instance of class as objects
const user1=new User(12,"ram",12)
user1.showDate()
user1.logger()