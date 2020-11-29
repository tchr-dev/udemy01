const numberOfFilms = +prompt("How much movies have you seen alrea0dy?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("One of the last seen movies?", ""),
  b = prompt("How can you score it?"),
  c = prompt("One of the last seen movies?", ""),
  d = prompt("How can you score it?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
