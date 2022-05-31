'use strict';
//урок 24
// const PersonalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     generes: [],
//     privat: false,
//     start: function () {
//         PersonalMovieDB.count = +prompt('Сколько фильмо Вы уже смотрели', '');

//         while (PersonalMovieDB.count == '' || PersonalMovieDB.count == null || isNaN(PersonalMovieDB.count)) {
//             PersonalMovieDB.count = +prompt('Сколько фильмо Вы уже смотрели', '');
//         }
//     },
//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?'),
//                 b = prompt('На сколько оцените его?', '');

//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 PersonalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function () {
//         if (PersonalMovieDB.count < 10) {
//             console.log('Просмотрено мало фильмов');
//         } else if (PersonalMovieDB.count >= 10 && PersonalMovieDB.count < 30) {
//             console.log('Вы класный зритель');
//         } else if (PersonalMovieDB.count >= 30) {
//             console.log('Вы киноман');
//         } else {
//             console.log('Ошибка');
//         }
//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(PersonalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function () {
//         if (PersonalMovieDB.privat) {
//             PersonalMovieDB.privat = false;
//         } else {
//             PersonalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function () {
//         for (let i = 1; i <= 3; i++) {
//             let gener = prompt(`Ваш любимый жанр под номером ${i}`);

//             if (gener == '' || gener == null) {
//                 console.log('Не корректные данные');
//                 i--;
//             } else {
//                 PersonalMovieDB.generes[i - 1] = gener;
//             }
//         }
//         PersonalMovieDB.generes.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1}- это ${item}`);
//         });
//     }
// };

//доп 23
// let result = '';
// const len=7;

// for (let i=1; i<len; i++) {
//     for (let j=0;j<i;j++){
//         result += '*';   
//     }
//     result += '\n'; 
// }

// console.log(result);

// first: for(let i=0; i<3; i++){
//     console.log(`first level ${i}`);
//     for(let j=0; j<3; j++){
//         console.log(`second level ${j}`);
//         for(let k=0; k<3; k++) {
//             if (k===2) break first; 
//             console.log(`third level ${k}`);
//         }
//     }
// }

//урок 47 рекурсия
// function pow(x, n){
//     let result=1;
//      for (let i=0; i<n; i++){
//         result *=x;
//      }
//      return result;
// }

// function pow(x, n){
//    if (n===1){
//       return x;
//    } else {
//       return x*pow(x, n-1);
//    }
// }

// console.log(pow(2,2)); 
// console.log(pow(2,3)); 

// let students = {
//     js: [{
//         name: 'john',
//         progress: 100
//     }, {
//         name: 'Ivan',
//         progress: 60
//     }],

//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, {
//             name: 'Ann',
//             progress: 18
//         }],

//         pro: [{
//             name: 'Sam',
//             progress: 10
//         }],

//         semi: {
//             Students: [{
//                 name: 'Test',
//                 progress: 98
//             }]
//         }
//     }
// };

// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;
//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subcourse of Object.values(course)) {
//                 students += subcourse.length;
//                 for (let i = 0; i < subcourse.length; i++) {
//                     total += subcourse[i].progress;
//                 }
//             }
//         }
//     }

//     return total / students;
// }

//console.log(getTotalProgressByIteration(students));

// function getTotalProgressByRecursion(data) {
//     if (Array.isArray(data)) {
//         let total = 0;
//         for (let i = 0; i < data.length; i++) {
//             total += data[i].progress;
//         }

//         return [total, data.length];
//     } else {
//         let total = [0, 0];

//         for (let subData of Object.values(data)) {
//             const subDataArr = getTotalProgressByRecursion(subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }
//         return total;
//     }
// }

// const result = getTotalProgressByRecursion(students);

// console.log(result[0] / result[1]);

