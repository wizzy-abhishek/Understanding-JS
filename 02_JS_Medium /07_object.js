const movie = {
    movie_name: "3 Idiots",
    movie_type: "Comedy and inspirational",
    movie_duration: 240,
    main_actors: ["Aamir Khan", "Maddy", "Sharman Joshi", "Boman Irani", "Kareena Kapoor"]
}

// Object destructing

const {main_actors} = movie
console.log(main_actors);

const {movie_duration: duration} = movie
console.log(duration);

