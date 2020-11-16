/*Create an object to store the following information about your favorite movie: title 
(a string), duration (a number), and stars (an array of strings).
Create a function to print out the movie information like so: "Puff the Magic Dragon 
lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."*/

//function favMovie()console.log(array)}

var myfavMOvie = {
    title: "THX1138",
    duration: 120,
    stars: ["Duvall", "Lennox", "Williams"]
};


const printMovie1 = function(movie){
    console.log(movie.title + " duurt "+ movie.duration + " minuten" );
    console.log( 'It stars ' + movie.stars.join(', '));

}

const printMovie2 = function(movie){

    console.log(movie.title + " duurt "+ movie.duration + " minuten and stars: " + movie.stars.join(' & '));
}

printMovie1(myfavMOvie);
printMovie2(myfavMOvie);
