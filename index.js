const inquirer = require("inquirer")
const jest = require('jest')
const fs = require('fs')
const {Circle, Square, Triangle} = require('./Assets/shapes')


class Svg{
    constructor(){
        this.shape = ''
        this.text =''

    
    }
    render(){
        return '<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">' +
        this.shape +
        this.text +
        '</svg>'
    }
    //Method here fix the x and y and font size. Color here works, it does not in the shape, fix.
    setTextColorMethod(textValue, textcolorValue){
        this.text = `<text x="50%" y="50%" font-size="${80}" text-anchor="middle" alignment-baseline="middle" fill="${textcolorValue}">${textValue}</text>`
    }
    setShapeMethod(shape){
        this.shape = shape.render();
    }
}

const iqprompts = function prompts(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'textValue',
                message: 'Please enter 3 letters that will appear in your logo: '
            },
            {
                type: 'list',
                name: 'shapeValue',
                message: 'What Shape would you like?:',
                choices: ['Circle','Square','Triangle'],
            },
            {
                type: 'input',
                name: 'textcolorValue',
                message: 'Please enter the text color (Note that you can enter a hexadecimal code if you want): '
            },
            {
                type: 'input',
                name: 'colorValue',
                message: 'Please enter a Fill color (Note that you can enter a hexadecimal code if you want): '
            },
        ]).then((inputValueArray) => {
          console.log('Responses were: ', inputValueArray)
        let shapeFinal

        if(inputValueArray.shapeValue === 'Circle') {
            console.log("input", inputValueArray)
            shapeFinal = new Circle()
        }else if(inputValueArray.shapeValue === 'Square'){
            console.log("input", inputValueArray)
            shapeFinal = new Square()
        }
        else {
            console.log("input", inputValueArray)
            shapeFinal = new Triangle()
        } 

        shapeFinal.setcolor(inputValueArray.colorValue)
        const svg = new Svg()
        svg.setTextColorMethod(inputValueArray.textValue, inputValueArray.textcolorValue)
        // Above is text
        svg.setShapeMethod(shapeFinal)
        // Above is shape
        return fs.writeFileSync('Logo.svg', svg.render())
        }).catch((error) => {
            console.error('Error:', error);
          });
};




iqprompts();

