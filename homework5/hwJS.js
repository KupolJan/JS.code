// Всі функції повинні бути описані стрілочним типом!!!!
//   створити функцію яка обчислює та повертає площу прямокутника висотою
let sRect = (a,b) => a*b;
document.write(sRect(7,9));
document.write(`<div><hr></div>`);

// - створити функцію яка обчислює та повертає площу кола
let sRound = (r) => Math.PI * r**2;
document.write(sRound(5));
document.write(`<div><hr></div>`);

// - створити функцію яка обчислює та повертає площу циліндру
let sCylinder = (r,h) => 2*Math.PI * r * (h+r);
document.write(sCylinder(7,12));
document.write(`<div><hr></div>`);

// - створити функцію яка приймає масив та виводить кожен його елемент
let arrNums = [1,5,9,87];
let showArr = (arr) => {
    for (let i = 0; i < arrNums.length; i++) {
        document.write(arr[i])
    }
}
showArr(arrNums)
document.write(`<div><hr></div>`);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let createP = (text) => {
    document.write(`<p>${text}</p>`)
}
createP('kupol');
document.write(`<div><hr></div>`);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createUl = (text) =>{
    document.write(`<ul><li>${text}</li></ul>`);
    document.write(`<ul><li>${text}</li></ul>`);
    document.write(`<ul><li>${text}</li></ul>`);
}
createUl('hello kupol');
document.write(`<div><hr></div>`);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
createUl2 = (text, num) => {
    for (let i = 0; i < num; i++) {
        document.write(`<ul><li>${text}</li></ul>`)
    }
}
createUl2('bye kupol', 3);
document.write(`<div><hr></div>`);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let xArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        document.write(`<ol><li>${arr[i]}</li></ol>`)
    }
}
xArr([1,8,6,true,false,'kupo', 'okten'])
document.write(`<div><hr></div>`);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let obj = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        document.write(`<div>${arr[i].id} - ${arr[i].name} : ${arr[i].age}</div>`)
    }
}
obj([{id: 1, name: 'Pasha', age: 19},{id: 2, name: 'Ron', age: 18},{id: 3, name: 'Kupol', age: 24}])