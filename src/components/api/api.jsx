const BASE_URL = 'https://api.themoviedb.org/3/';
const MY_KEY = '44d416356c22cc8e7735ee915c193364';

export function getPoPMovies() {

    return fetch(`${BASE_URL}trending/movie/week?api_key=${MY_KEY}`)
        .then(response => {
            return response.json();
        }
        );
}

export function getSearchMovies(query) {

return fetch(`${BASE_URL}search/movie?api_key=${MY_KEY}&query=${query}`)
        .then(response => {
            return response.json();
        }
        );
}


export function getDetailsMovies(movieId) {

    return fetch(`${BASE_URL}movie/${movieId}?api_key=${MY_KEY}`)
        .then(response => {
            return response.json();
        }
        );
}

export function getCastMovies(movieId) {

return fetch(`${BASE_URL}movie/${movieId}/credits?api_key=${MY_KEY}`)
        .then(response => {
            return response.json();
        }
        );
}


export function getRewiesMovies(movieId) {

    return fetch(`${BASE_URL}movie/${movieId}/reviews?api_key=${MY_KEY}`)
        .then(response => {
            return response.json();
        }
        );
}


