class Shape {
    constructor(){
        this.color = ""
    }
    setcolor(color){
        this.color = color
    }
}
//Fix these shape to render the correct shape
class Circle extends Shape {
    render(){
        return `<circle cx="150" cy="150" r="150" fill="${this.color}" />`
    }
};

class Square extends Shape {
    render(){
        return `<square cx="150" cy="150" r="150" fill="${this.color}" />`
    }
};

class Triangle extends Shape {
    render(){
        return `<triangle cx="150" cy="150" r="150" fill="${this.color}" />`
    }
};

module.exports = {Circle,Square,Triangle}

// This sets shape and color of shape, nothing else.