'use strict';

// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = prompt('how old are you?', '18');
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('name?', '');
// answers[1] = prompt('surname?', '');
// answers[3] = prompt('age?', '');

// console.log(typeof(answers));

// Интерполяция 
// const category = 'toys';

// console.log(`htttps://someurl.com/${category}/10`);

// const user = 'Arslan';

// alert(`Hello, ${user}`);

// Операторы JS

// let incr = 10,
//     decr = 10;
// incr++;    //постфиксная форма записи
// decr--;    //постфиксная форма записи

// ++incr;    //префиксная форма записи
// --decr;    //префиксная форма записи

// console.log(incr);
// console.log(decr);

// console.log(++incr);
// console.log(--decr);


// console.log(2 + 2 * 2 === 8);


// Логические операторы
// && // И
// || // ИЛИ
// ! // отрицание
// const isChecked = true,
//       isClose = false;
// // console.log(isChecked && isClose);
// console.log(isChecked || !isClose);

/* Задание на урок: 12
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */

// 1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// 3
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);