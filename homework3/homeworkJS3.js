// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arr = [[5, 10, 15, 20, 25], ['first', 'second', 'third', 'fourth', 'fifth'], [true, false, 18, 'Kupol', 'Jan']];
// console.log(arr);





// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let x = [];
// x[0] = 5;
// x[1] = 'kupol';
// x[2] = true;
// console.log(x);





// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


// for (let i = 0; i < 10; i++) {
//     if (i < 10){
//         document.write('<div>Hello Kupol</div>')
//     }
// }




// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     if (i < 10){
//         document.write(`<div>${i} - Hello Kupol</div>`)
//     }
// }




// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20){
//     document.write('<div>Kupol bye</div>')
//     i++
// }




// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20){
//     document.write(`<div>${i} - Kupol bye</div>`)
//     i++
// }




// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let kupol = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// for (let i = 0; i < kupol.length;i++) {
//     console.log(kupol[i])
// }





// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let string = ['tim', 'tik', 'tik', 'kim', 'kit', 'jim', 'bom', 'bim', 'jem', 'jan']
// for (let i = 0; i <string.length; i++) {
//     console.log(string[i])
// }





// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let x = [true, false, 15, 20, 25, 30, 'kupol', 'jan', 'js', 'okten'];
// for (let i = 0; i < 10; i++) {
//     console.log(x[i])
// }





// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let y = [true, false, 3, 6, 9, 12, 'owu', 'code', 'windows', 'learn']
// for (let i = 0; i < y.length; i++){
//     if (typeof y[i] === 'boolean') {
//         console.log(y[i])
//     }
// }





// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let array = [15, 42, 48, 67, true, false, 'valorant', 'cs', 'gta', 'dota'];
// for (i = 0; i < array.length; i++){
//     if (typeof array[i] === 'number'){
//         console.log(array[i])
//     }
// }




// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arrString = [true, false, 15, 68, 34, 17, 'gap', 'nike', 'adidas', 'mastrum'];
// for (i = 0; i < arrString.length; i++){
//     if (typeof arrString[i] === 'string'){
//         console.log(arrString[i])
//     }
// }





// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let x = [];
// x[0] = 'kupol';
// x[1] = 'hello';
// x[2] = 'jan';
// x[3] = 'oketn';
// x[4] = 15;
// x[5] = 28;
// x[6] = 24;
// x[7] = 10;
// x[8] = true;
// x[9] = false;
//
// for (let i = 0; i < x.length; i++){
//     console.log(x[i])
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++){
//     console.log(`Поточний крок: ${i}`);
//     document.write(`Поточний крок: ${i}`);
// }





// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++){
//     console.log(`Поточний крок: ${i}`);
//     document.write(`Поточний крок: ${i}`);
// }




// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i = i+2){
//     console.log(`Поточний крок: ${i}`);
//     document.write(`Поточний крок: ${i}`);
// }





// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (  i %2 === 0){
//         console.log(`Крок ${i}`)
//         document.write(`Крок ${i}`)
//     }
// }





// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
    
    // for (let i = 0; i < 100; i++){
    //     if ( i %2 === 1){
    //         console.log(`Крок ${i}`)
    //     }
    // }