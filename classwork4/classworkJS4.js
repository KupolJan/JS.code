// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minNum (num1, num2, num3){
//     if (num1 < num2 && num1 < num3 ){
//         document.write(num1);
//     }
//     else if (num2 < num1 && num2 < num3){
//         document.write(num2)
//     }else {
//         document.write(num3)
//     }
// }
// minNum(5,14,-48)




// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function minNum (num1, num2, num3){
//     if (num1 > num2 && num1 > num3 ){
//         document.write(num1);
//     }
//     else if (num2 > num1 && num2 > num3){
//         document.write(num2)
//     }else {
//         document.write(num3)
//     }
// }
// minNum(5,14,-48)



// - створити функцію яка повертає найбільше число з масиву
// let newArry = [8, 5, 6, 151, 28, -45];
// let num = newArry[0]
// function maxNum (arr){
//     for (let i = 0; i < newArry.length; i++) {
//         if (num < arr[i]){
//             num = arr[i]
//         }
//     }return num
// }
// document.write(maxNum(newArry));



// - створити функцію яка повертає найменьше число з масиву
// let min = [8, 5, 15, 23, 48, 51,-288, -501];
// function minArr (arr){
//     let minNum = min[0];
//     for (let i = 0; i < min.length; i++) {
//         if (minNum > arr[i]){
//             minNum = arr[i]
//         }
//     }
//     return minNum
// }
// document.write(minArr(min));




// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let xArr = [10,20,30];
// function sumArr (arr){
//     let result = 0;
//     for (let i = 0; i < arr.length; i++){
//         result += arr[i]
//     }
//     return result
// }
// document.write(sumArr(xArr))




// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arrNums = [10,15,5,70];
// function arithMean (arr){
//     let plus = 0;
//     for (let i = 0; i < arr.length; i++) {
//         plus += arr[i] / arr.length;
//     }
//     return plus
// }
// document.write(arithMean(arrNums[i]))




// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//         function someNums (){
//         let min = arguments[0];
//         let max = arguments [0];
//         for (let i = 0; i < arguments.length; i++) {
//             if (arguments[i] > max){
//                 max = arguments[i]
//             } else if (arguments[i] < min){
//                 min = arguments[i]
//             }
//         }
//         console.log(min)
//         document.write('Максимальне число з введених: ' + max)
//         return max;
// }
// someNums(5,8,15,48,2021)




// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let newArr = [];
// function fillArray(arr){
//     for (let i = 0; i < arr; i++) {
//         newArr[i] = Math.round(Math.random())
//     }
//     return newArr
// }
// document.write(fillArray())


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let newArr = [];
// function limitArr (arr, limit){
//     for (let i = 0; i < arr; i++) {
//         newArr[i] = Math.round(Math.random()*limit)
//     }
//     return newArr
// }
// document.write(limitArr(100,10000));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [1,2,3];
// function reArr (arr){
//     let res = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//         res.push(arr[i])
//     }return res;
// }
// document.write(reArr(arr))
