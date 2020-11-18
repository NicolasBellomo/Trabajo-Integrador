window.addEventListener("load", function(){
    
    const API_KEY = `0231890e16950b2b1fe941aec8ffe1d6`;
   //const API_KEY = `eb09954096929ff16616027732037e32`;
    const IMAGE_URL = `https://image.tmdb.org/t/p/w500`; 
     const url = `https://api.themoviedb.org/3/search/movie?api_key=0231890e16950b2b1fe941aec8ffe1d6`;
    //const url = `https://api.themoviedb.org/3/movie/popular?api_key=eb09954096929ff16616027732037e32&language=en-US&page=`;

const buttonElement = document.querySelector(`#search`);
const InputElement = document.querySelector(`#inputValue`);
const movieSearchable = document.querySelector(`movies-searchable`);


function movieSection(movies) {
    return movie.map((movie) => {
        return `
        <img src=${IMAGE_URL +  movie.poster_path} data-movie-id=${movie.id}/>
        `;
    })
}

function createMovieContainer(movies) {
    const movieElement = document.createElement(`div`);
    movieElement.setAttribute(`class`, `movie`);

    const movieTemplate = `
    <section class="section">
    ${movieSection(movies)} 
    </section>
    <div class="content">
     <p id="content-close">x</p>
     </div>
    `;
    
    movieElement.innerHTML = movieTemplate;
    return movieElement; 
}

buttonElement.onclick = function(event) {
    event.preventDefault();
    const value = InputElement.value;

    const newUrl = url + `&query=` + value;
    
    fetch(newUrl)
    .then((res) => res.json())
    .then((data) => {
        const movies = data.results;
        
        
        console.log(`data: `, data);
    })
    .catch((error) => {
       console.log(`error: `, error);
    });
    console.log(`value: `, value);
   
}
})