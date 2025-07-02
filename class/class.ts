//Interfaces with the js class and objects

//constrainst for the derived class
abstract class Animal{
abstract stop() : void

    move() : void{
        console.log("animals is moving")
    }
}


//Derived class
class Dog extends Animal{


stop():void{
console.log(`this is sttop`)
}
}


const dog1=new Dog()
dog1.move()
dog1.stop()