// const numberOfFilms = +prompt('Сколько фильмо Вы уже смотрели','');

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмо Вы уже смотрели', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмо Вы уже смотрели', '');
    }
}

start();

const PersonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes:[],
    privat: false
};

function rememberMyFilms(){
    for (let i = 0; i <2 ; i++) {
        const a = prompt('Один из последних просмотренных фильмов?'),
              b = prompt('На сколько оцените его?', '');
    
            if (a !=null && b !=null && a != '' && b != '' && a.length<50){
                PersonalMovieDB.movies[a] = b;
                console.log('done'); 
            } else {
                console.log('error');
                i--;
            }              
    }    
}

rememberMyFilms();

if (PersonalMovieDB.count<10){
    console.log('Просмотрено мало фильмов');
}  else if (PersonalMovieDB.count>=10 && PersonalMovieDB.count<30) {
    console.log('Вы класный зритель');    
} else if (PersonalMovieDB.count>=30) {
    console.log('Вы киноман');    
} else {
    console.log('Ошибка'); 
}
console.log(PersonalMovieDB); 

