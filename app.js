let num1 = 0;
let num2 = 0;
tempNum1Array = [];
tempNum2Array = [];
operator = '';



let add = (num1, num2) => {
    const calcDisplay = document.querySelector('.display');
    console.log('sup')
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    let added = (num1 + num2);
    
    let rounded = Math.round((added + Number.EPSILON)*100) /100;
    rounded = rounded.toFixed(2);
   
    calcDisplay.textContent = rounded;
    
    
}

let minus = (num1, num2) => {
    const calcDisplay = document.querySelector('.display');
    
    let minused = (num1 - num2);
    let rounded = Math.round((minused + Number.EPSILON)*100) /100;
    rounded = rounded.toFixed(2);
    calcDisplay.textContent = rounded;

    
    
}

let multiply = (num1, num2) => {
    const calcDisplay = document.querySelector('.display');
    let multiplied = (num1 * num2);
    let rounded = Math.round((multiplied + Number.EPSILON)*100) /100;
    rounded = rounded.toFixed(2);
    calcDisplay.textContent = rounded;
    
}

let divide = (num1, num2) => {
    let divided = (num1 / num2);
   
    if (divided == 'Infinity') {
        return alert('naughty')
    } else {
        const calcDisplay = document.querySelector('.display');
        let rounded = Math.round((divided + Number.EPSILON)*100) /100;
        rounded = rounded.toFixed(2);
        calcDisplay.textContent = rounded;

       
    }
}

let operate = (operator,num1,num2) => {
    switch(operator) {
        case "+":
        console.log('plus');
        add(num1,num2);
        break;
        case "-":
        console.log('minus');
        minus(num1,num2);
        break;
        case "*":
        console.log('multiply');
        multiply(num1,num2);
        break;
        case "/":
        console.log('divide');
        divide(num1, num2);
        break;
        default:
            alert('valid operator not chosen')
    }
}

const display = document.querySelector('.display');

let numKey = document.querySelectorAll('.operand');




let number = () => {
    numKey.forEach(button => {
        button.addEventListener('click', ()=> {
            let temp = button.getAttribute('value');
            const display = document.querySelector('.display');
    
            if (operator == "") {
                tempNum1Array.push(temp);
                num1 = tempNum1Array.join("");
                display.textContent = num1;
                console.log('num1', num1);
                console.log(tempNum1Array);
                
                }
                 else {
                    tempNum2Array.push(temp);
                num2 = tempNum2Array.join('');
                display.textContent = num2;
                console.log('num2', num2);
                console.log(tempNum2Array);
                }
           
        }) 
    })
    
}

number();  



let opKey = document.querySelectorAll('.opertator');

   opKey.forEach(button => {
       button.addEventListener('click', ()=> {
           let tempOP;
           tempOP = button.getAttribute('value');
           operator = tempOP;
           const display = document.querySelector('.display');
           display.textContent = tempOP;
       })
   })

  
let equals = document.querySelector('.equals');

equals.addEventListener('click', () => {
    operate(operator,num1,num2);
    // num1 = 0;
    // num2 = 0;
    // operator = '';
})

let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    location.reload();
})