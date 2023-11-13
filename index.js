// age = prompt('Введите Ваш возраст')
// function Zadanie1 (age) {
//     if (age >= 60 && age <= 120) return 'Старый'
//     if (age >= 18 && age <= 60) return 'покоцаный'
//     if (age >= 12 && age <= 18) return 'пацан'
//     if (age >= 0 && age <= 12) return 'младенец'
//     return 'Бесмертный'
// }
// alert(Zadanie1(age))

// /*--Задание 2--*/
// let number = prompt('Введите число от 0 до 9', 0); 
// function Zadanie2(number) {
// switch(number) {
//     case '0':
//         console.log('0 это )');
//         break;
//     case '1':
//         console.log('1 это !');
//             break;
//     case '2':
//         console.log('2 это @');
//             break;
//     case '3':
//         console.log('3 это #');
//         break;
//     case '4':
//         console.log('4 это $');
//         break;
//     case '5':
//         console.log('5 это %');
//         break;
//     case '6':
//         console.log('6 это ^');
//         break;
//     case '7':
//         console.log('7 это &');
//         break;
//     case '8':
//        console.log('8 это *');
//         break;
//     case '9':
//         console.log('9 это (');
//         break;
//         default:
//             console.log("я же сказал от 0 до 9")
//         }
// }
// console.log(Zadanie2(number))

/*-Задание 3--*/
// function Zadanie3(){
// let number = prompt('Введи число от 100 до 999', 0);
// number = number + '';
// if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2])
//     { alert('Есть одинаковые числа');
//     } else alert('Нет одинаковых чисел');
// }
// console.log(Zadanie3())

/*--Задание 4--*/
// function Zadanie4 (){
// let year = prompt('Введите год', 0);
//     if (year%4 == 0 && year %100 !== 0)
//     { alert('Высокосный');
//     } else alert('Не высокосный');
// }
// console.log(Zadanie4())

/*--Задание 5--*/
// function Zadanie5(){
// let number = prompt('Введи число от 10000 до 99999', 0);
// number = number + '';
// if (number === number.split('').reverse().join(''))
//     alert('Палиндром');
// else
//     alert('Не палиндром');
// }
// console.log(Zadanie5())

// /*--Задание 6--*/
// function Zadanie6() {
// let amount = prompt('Количество валюты:', 0);
// let currency = prompt('В чём считаем? USD = 1, EUR = 2, CNY = 3', 0);
// switch(currency) {
//     case '1':
//         alert(amount*97.70 + 'USD');
//         break;
//     case '2':
//         alert(amount*102.72 + 'EUR');
//         break;
//     case '3':
//         alert(amount*13.59 + 'CNY');
//         break;
// } }
// console.log(Zadanie6())

// /*--Задание 7--*/
// function Zadanie7(){
// let money = prompt('Введите сумму:');
// if (money >=200 && money < 300)
//     alert(money / 100*97 + '$ с 3% скидкой');
// else if (money >=300 && money < 500)
//     alert(money / 100*95 + '$ с 5% скидкой');
// else if (money >=500)
//     alert(money / 100*93 + '$ с 7% скидкой');
// else if (money < 200)
//     alert(money  + '$ скидки не будет');
//     }
//     console.log(Zadanie7())


// //Задание 8\\
// function Zadanie8(){
// alert("Давай проверим, может ли такая окружность поместиться в указанный квадрат.");
//   let circuit = +prompt("Введите длину окружности: ");
//   let perimeter = +prompt("Введите периметр квадрата: ");
//   if (circuit / 2 / Math.PI > perimeter / 4 / 2) { 
//     alert("Окружность данной длины не впишется в данный квадрат!");
//   } else {
//     alert("Окружность данной длины впишется в данный квадрат!")}
// }
// console.log(Zadanie8())


// /*--Задание 9--*/
// function Zadanie9(){
// let caliber = prompt('Какое из насекомых делает мед? 1 - муравей 2 - пчела 3 - стрекоза');
// let spec = prompt('Сколько храмасом у человека? 1 - 34 2 - 49 3 - 46');
// let animals = prompt('Самое большое животное? 1 - Синий кит 2 - Слон 3 - Папугай');
// let score = 0;
// if (caliber == 2)
//     score += 2;
// if (spec == 3)
//     score += 2;
// if (animals == 1)
//     score += 2;
// alert('Баллов заработано: ' + score);
// }
// console.log(Zadanie9())

/*--Задание 10--*/
// function Zadanie10 (){
// let date = prompt('Введите дату - дд.мм.гггг ');
// date = date.split('.');
// let oldDate = new Date(date[2], date[1]-1, date[0]); 
// oldDate.setDate(oldDate.getDate()+1);
// alert(oldDate);
// }
// console.log(Zadanie10())