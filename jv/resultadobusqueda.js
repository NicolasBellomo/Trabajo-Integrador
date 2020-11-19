let queryString = window.location.search;
console.log(queryString);
let queryObject = new URLSearchParams(queryString)
let search = queryObject.get ('search');
console.log(search);


let apiKey = "0231890e16950b2b1fe941aec8ffe1d6"
let url = `https://api.themoviedb.org/3/search/movie?api_key=0231890e16950b2b1fe941aec8ffe1d6`

let resultados = document.querySelector('.resultados')

fetch(url)
.then(function (respuestas){
    return respuestas.json()
})

.then(function(data){
    console.log(data);
    let info = data.results;

    for (let i=0; i<info.length; i++){
        if(info[i].media_type == "tv"){
            /* resultados.innerHTML += `<li>Serie: ${info[i].original_name}</li>` */
            resultados.innerHTML += `<li>
                                        <a href="detallep.html?id=${info[i].id}">
                                            <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="">
                                         </a>
                                    </li>`
        } else if (info[i].media_type == "movie"){
            /* resultados.innerHTML += `<li>Pelicula: ${info[i].title}</li>` */

            resultados.innerHTML += `<li>
                                        <a href="detallep.html?id=${info[i].id}">
                                            <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="">
                                        </a>
                                    </li>`
        }
        
    }
    
})
.catch(error => console.log(error))