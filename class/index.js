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

    get h(){
        return this._h
    }
}

const box1 = new Box(1, 2)
console.log(box1.h)
console.log(box1.w)