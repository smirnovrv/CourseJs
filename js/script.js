//урок 24
const PersonalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    generes: [],
    privat: false,
    start: function () {
        PersonalMovieDB.count = +prompt('Сколько фильмо Вы уже смотрели', '');

        while (PersonalMovieDB.count == '' || PersonalMovieDB.count == null || isNaN(PersonalMovieDB.count)) {
            PersonalMovieDB.count = +prompt('Сколько фильмо Вы уже смотрели', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?'),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                PersonalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (PersonalMovieDB.count < 10) {
            console.log('Просмотрено мало фильмов');
        } else if (PersonalMovieDB.count >= 10 && PersonalMovieDB.count < 30) {
            console.log('Вы класный зритель');
        } else if (PersonalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(PersonalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (PersonalMovieDB.privat) {
            PersonalMovieDB.privat = false;
        } else {
            PersonalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let gener = prompt(`Ваш любимый жанр под номером ${i}`);

            if (gener == '' || gener == null) {
                console.log('Не корректные данные');
                i--;
            } else {
                PersonalMovieDB.generes[i - 1] = gener;
            }
        }
        PersonalMovieDB.generes.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1}- это ${item}`);
        });
    }
};