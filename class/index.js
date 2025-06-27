//Getter and Setters

class Box {
    constructor(h, w) {
        this._h = h
        this._w = w
    }

    //setter for the height
    set h(newHeight) {
        if (newHeight > 0) {
            return this._h = newHeight
        } else {
            console.error("Height must need to be a number")
        }
    }

    //getter for the height
    get h() {
        return this._h.toFixed(2)
    }

    //setter for the width
    set w(newWidth) {
        if (newWidth > 0) {
            return this._w
        } else {
            console.error("Please enter the valid number")
        }
    }

    //Getters for the width
    get w() {
        return this._w.toFixed(2)
    }


    //Getter for calculating the area of the box
    get area(){

        return this._w * this._h
    }

}

const box1 = new Box(18, 2)
console.log(box1.h)
console.log(box1.w)
console.log(box1.area)