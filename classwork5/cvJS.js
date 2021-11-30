// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//     let min = (num1,num2,num3) => {
//     if (num1 < num2 && num1 < num3){
//         document.write(num1)
//     }else if (num2 < num1 && num2 < num3){
//         document.write(num2)
//     }else {
//         document.write(num3)
//     }
//     }
//     min(5,8,155);
//        document.write(`<div><hr></div>`)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let max = (num1,num2,num3) => {
//     if (num1 > num2 && num1 > num3){
//         document.write(num1)
//     }else if (num2 > num1 && num2 > num3){
//         document.write(num2)
//     }else {
//         document.write(num3)
//     }
// }
// max(5,8,155);
// document.write(`<div><hr></div>`)

// - створити функцію яка повертає найбільше число з масиву
// let xArr = [5,9,8,11];
// let max = (arr) => {
//     let maxNum = arr[0];
//     for (let i = 0; i < xArr.length; i++) {
//         if (maxNum < arr[i]){
//             maxNum = arr[i]
//         }
//     }return maxNum;
// }
// document.write(max(xArr));

// - створити функцію яка повертає найменьше число з масиву
// let xArr = [84,15,-48,501,-102]
// let min = (arr) => {
//     let minNum = arr[0];
//     for (let i = 0; i < xArr.length; i++) {
//         if (minNum > arr[i]){
//             minNum = arr[i]
//         }
//     }return minNum
// }
// document.write(min(xArr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let xArr = [1,6,7,3];
// let sumArr = (arr) => {
//     let x = 0
//     for (let i = 0; i < xArr.length; i++) {
//         x += arr[i]
//     }return x
// }
// document.write(sumArr(xArr))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let xArr = [7,15,5,33];
// let x = 0;
// let arithMean = (arr) => {
// for (let i = 0; i < xArr.length; i++) {
//     x += arr[i];
//     }return x / arr.length
// }
// document.write(arithMean(xArr))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//     let showNums = (arr) => {
//         let max = arr[0];
//         let min = arr[0];
//         for (let i = 0; i < arr.length; i++) {
//             if (max < arr[i]){
//                 max = arr[i]
//             }
//             else if (min > arr[i]){
//                 min = arr[i]
//             }
//         }
//         document.write(`найбільше число:` + max);
//         console.log(min);
//         return min
//     }
//     showNums([1,5,9,17,-8])

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let xArr = [];
// let randomNums = (nums) => {
//     for (let i = 0; i < nums; i++) {
//         xArr[i] = Math.round(Math.random()*100)
//     }
//     return xArr
// }
// document.write(randomNums(10))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let xArr = [];
// let randomNums = (nums, limit) => {
//     for (let i = 0; i < nums; i++) {
//         xArr[i] = Math.round(Math.random()*limit)
//     }
//     return xArr
// }
// document.write(randomNums(10,20))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let xArr = [1,2,3]
// let reverse = (arr) => {
//     let res = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         res.push(arr[i])
//     }return res
// }
// document.write(reverse(xArr))
