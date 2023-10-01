const inquirer = require('inquirer')
const jest = require('jest')
const fs = require('fs')


const iqprompts = function prompts(){
    inquirer
        .prompts([
            {
                type: 'input',
                name: 'textValue',
                message: 'Please enter 3 letters that will appear in your logo: '
            },
            {
                type: 'checkbox',
                name: 'shapeValue',
                message: 'What Shape would you like?:',
                choices: ['Circle','Square','Triangle'],
            },
            {
                type: 'input',
                name: 'colorValue',
                message: 'Please enter a Fill color (Note that you can enter a hexadecimal code if you want): '
            },
            {
                type: 'input',
                name: 'borderColorValue',
                message: 'Please enter a Border color (Note that you can enter a hexadecimal code if you want): '
            }
        ]).then((inputValueArray) => {
          console.log('Responses were: ', inputValueArray)
        })
        // For this .then you need to pass on the prompts to the SVG generator function.
};




iqprompts();

