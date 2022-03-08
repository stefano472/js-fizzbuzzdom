console.log('JS OK')

// stampare in console log numeri da 1 a 100 
// multipli di 3 invece del numero stampo fizz
// multipli di 5 invece del numero stampo buzz
// miltipli di 3 e 5 stampo entrambi

const divisibilePer3 = 'fizz'
const divisibilePer5 = 'buzz'

let number;
for (number = 1; number <= 100; number++) {
    // non posso utilizzare switch in questo caso perchè la mia expression cambia (non è solo number)
    // switch(number) {
    //     case (number % 3 === 0) && (number % 5 === 0):
    //         console.log('fizzbuzz');
    //         break;
    //     case (number % 3 === 0):
    //         console.log('fizz');
    //         break;
    //     case (number % 5 === 0):
    //         console.log('buzz');
    //         break;
    //     default:
    //         console.log(number);
    // }
    if ((number % 3 == 0) && (number % 5 == 0)){
        console.log(divisibilePer3+divisibilePer5)
    } else if (number % 3 == 0) {
        console.log(divisibilePer3)
    } else if (number % 5 == 0) {
        console.log(divisibilePer5)
    } else {
        console.log(number)
    }
}

const blocks = document.querySelector("div.blocks");
for (number = 1; number <= 100; number++) {
    let element;
    if ((number % 3 == 0) && (number % 5 == 0)){
        element = `<div class="square fizz-buzz">${divisibilePer3}
        ${divisibilePer5}</div>`;
        // non posso applicare style all'element perchè non è ancora presente dnel DOM dell'html
        // element.style.backgroundColor = `rgb(100, 100, 100)`;
    } else if (number % 3 == 0) {
        element = `<div class="square fizz">${divisibilePer3}</div>`;
    } else if (number % 5 == 0) {
        element = `<div class="square buzz">${divisibilePer5}</div>`
    } else {
        element = `<div class="square">${number}</div>`
    }
    blocks.innerHTML += element;
}