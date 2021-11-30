// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// console.log('hello world'.length);
// console.log('lorem ipsum'.length);
// console.log('javascript is cool'.length);
//
//
// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = ['hello world', 'lorem ipsum', 'javascript is cool']
//     let upperCase = (arr) =>{
//         for (let i = 0; i < arr.length; i++) {
//             console.log(str[i].toUpperCase());
//         }
//     }
//     upperCase(str);
//
//
// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
// let loverCase = (arr) =>{
//     for (let i = 0; i < arr.length; i++) {
//         console.log(str[i].toLowerCase());
//     }
// }
// loverCase(str);
//
// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let dirtyString = ' dirty string ';
// console.log(dirtyString.trim());
//
// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let str = 'Каждый охотник желает знать';
// let stringToArray = (str) => {
//     console.log(str.split(' '))
//     return str
// }
// stringToArray(str)
//
//
// // - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length) =>{
//     return str.substr(str, length);
// }
// document.write(delete_characters(str,7));
//
// // - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// //     let str = "HTML JavaScript PHP";
// // document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// let insert_dash = (str) =>{
//     return str.replaceAll(' ', '-').toUpperCase()
// }
// document.writeln(insert_dash(str));
