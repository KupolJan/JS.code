// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function sRect (a,b){
//     let res = a * b;
//     return res;
// }
// console.log(sRect(5,8));


// - створити функцію яка обчислює та повертає площу кола з радіусом
// function sRound (r){
//     return Math.PI * r**2
// }
// console.log(sRound(8))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function sCyli (r, h){
//     return 2*Math.PI * r * (r+h)
// }
// console.log(sCyli(5, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = [15, 20, true, false, 'Kupol', 'Okten']
// function arrElement (arr){
//     for (let i = 0; i < array.length; i++) {
//         console.log(arr[i])
//     }
// }
// arrElement(array)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function createP (text){
//     document.write(`<p>${text}</p>`)
// }
// createP('Kupol');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function createUl (txt){
//     document.write(`<ul><li>${txt}</li></ul>`);
//     document.write(`<ul><li>${txt}</li></ul>`);
//     document.write(`<ul><li>${txt}</li></ul>`);
// }
// createUl('Okten')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function createUl2 (text, num){
//     for (let i = 0; i < num; i++) {
//         document.write(`<ul><li>${text}</li></ul>`)
//     }
// }
// createUl2('hello', 6 );


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let newArray = [20,40,true,false,'kupol','hello'];
// function elementsArray(arr){
//     document.write(`<ol>`)
//     for (let i = 0; i < newArray.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write(`</ol>`)
// }
// elementsArray(newArray);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let newArr = [{id:1, name: 'Pavlo', age: 19}, {id:2, name: 'Orest', age: 18}, {id:3, name: 'Maxim', age: 21}];
// function objectsArr(array){
//     for (let i = 0; i < newArr.length; i++) {
//         document.write(`<div>${array[i].id} ${array[i].name} ${array[i].age}</div>`)
//     }
// }
// objectsArr(newArr);