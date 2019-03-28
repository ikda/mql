let movies = [
    {
        id: 0,
        name: "movie name 0",
        score: 1
    },
    {
        id: 1,
        name: "movie name 1",
        score: 8
    },
    {
        id: 2,
        name: "movie name 2",
        score: 99
    },
    {
        id: 3,
        name: "movie name 3",
        score: 25
          },
    {
        id: 4,
        name: "movie name 4",
        score: 54
    },
    {
        id: 5,
        name: "movie name 5",
        score: 32
    },
    {
        id: 6,
        name: "movie name 6",
        score: 78
    },
]

export const getMovies = ()=> movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === String(id));
    return filteredMovies[0];
}

export const deleteMovie = (id) => {
    const cleanMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanMovies.length) {
        movies = cleanMovies
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}