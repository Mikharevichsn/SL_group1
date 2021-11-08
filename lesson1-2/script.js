// const num = 100; // Number
// const str = 'text'; // String
// const bool = true; // Boolean
// const arr = [ 1, 2, 3]; // Object
// const obj = { a: 100, b: 200 }; // Object

//const undef = undefined // undefined
//const empty = null; // object

// console.log(num);
// console.log(typeof num);

// console.log(str);
// console.log(typeof str);

// console.log(typeof arr);

// ----------------------

// const a = 1000;

// if (a === 1000) {
//     console.log('Yes');
// }


// if (1000 == '1000') {
//     console.log('равно');
// }

// if (1000 == '1000') console.log('равно');

// if (a === 1000) {
//     console.log('Yes');
// } else {
//     console.log('not 1000');
// }

// // тернарный оператор
// a === 1000 ? console.log('Yes') : console.log('not 1000'); // неправильный

// const result = a === 1000 ? 'Yes' : 'not 1000'; // правильный
// console.log(result);


// -----------------------------------
// Arrays

// const arr = [ 1000, 2000, 3000, 4000];
// console.log(arr);

// console.log(arr[0]);

// arr[0] = 7000;
// console.log(arr[0]);
// console.log(arr);

// arr.push(555) // добавляет в конец
// console.log(arr);

// arr.unshift(111);
// console.log(arr);

// const last = arr.pop();
// console.log(arr);
// console.log(last);

// arr.shift();
// console.log(arr);

// const arr1 = [1, 1, 1, 1];
// const arr2 = [2, 2, 2, 2];

// const arrResult = arr1.concat(arr2);
// console.log(arrResult);

// const newArr = [1, 'text', {a: 1000}, [5, 6, 7, 8], true];
// console.log(newArr);
// console.log(newArr[3][2]);

///// -------------------------

// Function

// глобальная
// у него есть this
// function print(text) {
//     console.log('-------');
//     console.log(text);
//     console.log('-------');
// }

// локальная
// у него НЕТУ this
// const print = (text) => {
//     console.log('-------');
//     console.log(text);
//     console.log('-------');
// }
// print('KUKURUZA')


// ---------------------
// CALLBACK


// const print = (text, num, str) => {
//     console.log('-------');
//     console.log(text);
//     console.log(num);
//     console.log('-------');
// }

// print('KUKURUZA', 1000, 'sdfsdf')

// const doSomething = (callback) => {
//     console.log(123);
//     callback();
//     console.log(456);
// }

// doSomething(() => {console.log(555);});


// ----------------
// ПЕРЕБИРАЮЩИЕ МЕТОДЫ МАССИВОВ
// for (классический)
// for of
// forEach - просто проход по массиву

// проход и получение нового массива на основании старого
// map 
// filter
// reduce

// получить данные
// some
// every
// find
// findIndex


////////////////
// for (классический)

const arr = [1000, 2000, 3000, 4000, 5000];
console.log(arr);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// for (let i = 1; i <= 10; i = i + 1) {
//     console.log(i);
// }

// for (let i = 10; i >= 1; i = i - 1) {
//     console.log(i);
// }

// for (let i = 0; i <= arr.length - 1; i = i + 1) {
//     console.log(arr[i]);
// }

// for (let i = 0; i < arr.length; i = i + 1) {
//     console.log(arr[i]);
// }



///////////////
//for of

// for (let item of arr) {
//     console.log(item);
// }



//////////
// forEach

// arr.forEach((element, index) => {
//     console.log(element);
//     console.log(index);
//     arr[index] += 10;
// })

// const callback = (element, index) => {
//     console.log(element);
//     console.log(index);
//     arr[index] += 10;
// }

// arr.forEach(callback)

// console.log(arr);


///////////
// map

// const newArr = arr.map((el) => {
//     return el + 1;
// });

// console.log(newArr);
// console.log(arr);

