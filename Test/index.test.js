const {Circle, Triangle, Square} = require('../Assets/shapes.js');

describe('Testing shape', () => {
    test('Creating red circle', () => {
            const circle = new Circle()
            circle.setcolor('red');
            let result = `<circle cx="50%" cy="50%" r="150" fill="red" />`
            expect(result).toEqual(circle.render())
    })
})

describe('Testing shape', () => {
    test('Creating red circle', () => {
            const triangle = new Triangle()
            triangle.setcolor('red');
            const triangulate = "250,125 375,375 125,375";
            let result = `<polygon points="${triangulate}" fill="red" />`
            expect(result).toEqual(triangle.render())
    })
})

describe('Testing shape', () => {
    test('Creating red circle', () => {
            const square = new Square()
            square.setcolor('red');
            let result = `<rect x="100" y="100" width="300" height="300" fill="red" />`
            expect(result).toEqual(square.render())
    })
})