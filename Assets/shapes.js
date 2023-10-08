class Shape {
    constructor(){
        this.color = ""
    }
    setcolor(color){
        this.color = color
    }
}
//Fix these shape to render the correct shape ISSUE
class Circle extends Shape {
    render(){
        return `<circle cx="50%" cy="50%" r="150" fill="${this.color}" />`
    }
};

class Square extends Shape {
    render(){
        return `<rect x="100" y="100" width="300" height="300" fill="${this.color}" />`
    }
};

class Triangle extends Shape {
    render(){
        const triangulate = "250,125 375,375 125,375";
        return `<polygon points="${triangulate}" fill="${this.color}" />`;
    }
};

module.exports = {Circle,Square,Triangle}

// This sets shape and color of shape, nothing else.