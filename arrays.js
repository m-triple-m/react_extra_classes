let movies = [ 'Shawshank Redemption', 'Race 2', 'Twilight', 'Matrix', 'Shang Chi' ];

console.log(movies[4]);

console.log(movies.slice(1, 4));

console.log(movies.slice(1, movies.length));

movies.push('Eternals');

// let newMovies = movies.slice(0, 1)+['Inserted Movie']+movies.slice(1, movies.length);

console.log(movies);
// console.log(newMovies);

movies.splice(2, 1);
console.log(movies);

console.log('\n\n---Iteration 1---')
for(let i=0;i<movies.length;i++){
    console.log(movies[i]);
}

console.log('\n\n---Iteration 2---')
for(let mov of movies){
    console.log(mov);
}

console.log('\n\n---Iteration 3---')
movies.forEach( (mov) => { console.log(mov) } );

