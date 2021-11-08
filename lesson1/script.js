const h1 = document.querySelector('h1');
const btnPlus = document.querySelector('.btn-plus');
const btnMinus = document.querySelector('.btn-minus');


console.log('btnPlus = ', btnPlus);
console.log('btnMinus = ', btnMinus);

btnPlus.addEventListener('click', () => {
    console.log('кнопка btnPlus нажата');
    let counter = h1.innerText;
    console.log(counter);
    counter = Number(counter);
    console.log(counter);
    // counter = counter + 1;
    // counter++;
    counter += 1;
    console.log(counter);
    h1.innerText = counter;
})

btnMinus.addEventListener('click', () => {
    console.log('кнопка btnMinus нажата');
    let counter = h1.innerText;
    console.log(counter);
    counter = Number(counter);
    console.log(counter);
    // counter = counter + 1;
    // counter++;
    counter -= 1;
    console.log(counter);
    h1.innerText = counter;
})