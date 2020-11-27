window.addEventListener("load",function(){

    var url = `https://image.tmdb.org/t/p/w500`

    var queryString = location.search
    var queryStringObj = new URLSearchParams(queryString);
    var pelaId = queryStringObj.get("idShow")
    var pelaElegida = queryStringObj.get("type")
    var generoElegido = queryStringObj.get("genero")


    var tapa = document.querySelector(`.tapa`)
    var line = document.querySelector(`.line`)
    var text = document.querySelector(`.text`)
    var pelis = document.querySelector(`.pelis`)

    switch (pelaElegida) {
        case `movie`:
            fetch(`https://api.themoviedb.org/3/movie/${pelaId}?api_key=eb09954096929ff16616027732037e32&language=en-US`)
    .then(function (response) {
        return response.json()
    })

    .then(function (pelicula) {
        
        console.log(pelicula);

        var detalle = document.querySelector(".foot")

           var peliAgregar =  

       `<div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
            <div class="uk-card-media-left uk-cover-container">
                <img src="${url}${pelicula.poster_path}" alt="" uk-cover>
                <canvas width="600" height="700"></canvas>
            </div>
            <div>
                <div class="uk-card-body generosp">
                    <h2 class="uk-card-title">Title: ${pelicula.original_title}</h2><button class="uk-button-small favs uk-button-primary"> + Add to favs</button>
                    <h4>Overview</h4>
                    <p>${pelicula.overview}</p>
                    <p>Average voting: ${pelicula.vote_average}</p>
                    <p uk-margin>
                            <button class="uk-button-large uk-button-danger">Ver Pelicula</button>
                        </p>
                    <p>Genres:</p>
                    
                </div>
            </div>
        </div>
        <div><h2>La gente tambien miro</h2></div>`



   
            detalle.innerHTML += peliAgregar

            var generosp = document.querySelector(`.generosp`)

            for (let i = 0; i < pelicula.genres.length; i++) {
                const element = pelicula.genres[i];

                generosp.innerHTML += `
                <a href="detalles.html?type=genero&idShow=${element.id}">${element.name}</a>
                `
            }

            var pelas = document.querySelector("#related")

            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eb09954096929ff16616027732037e32&language=en-US&page=1`)
            .then(function (response) {
            return response.json()
             })

            .then(function (peliculas) {
        
         console.log(peliculas);
        

            for (let i = 0; i < peliculas.results.length; i++) {
                const element = peliculas.results[i];

            var related = `<a href="detalles.html?type=movie&idShow=${element.id}">
            <li>
                <img src= "${url}${element.poster_path}" alt="nn"/>
                    <div class="uk-position-center uk-panel"><h1></h1></div>
            </li>
        </a>`;

                pelas.innerHTML += related
            }
            
            })

            .catch(function(error) {
                console.log(`El error fue: ${error}`);
            })


        
            })

    .catch(function(error) {
        console.log(`El error fue: ${error}`);
             })
            
            break;

        case `genero`:
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=eb09954096929ff16616027732037e32&with_genres=${pelaId}`)
    .then(function (response) {
        return response.json()
    })

    .then(function (genero) {
        
        console.log(genero);

        for (let i = 0; i < genero.results.length; i++) {
            const element = genero.results[i];
            

            var imagen = document.querySelector("#resultados")

            var peliAgregar =  
            `
                    <a href="detalles.html?type=movie&idShow=${element.id}">
                                    <li>
                                        <img src= "${url}${element.poster_path}" alt="${element.name}"/>
                                        <div class="uk-position-center uk-panel"><h1></h1></div>
                                    </li>
                                </a>
                    `

             imagen.innerHTML += peliAgregar

        }
 
            })

    .catch(function(error) {
        console.log(`El error fue: ${error}`);
                })

        


            break;
    
        default:
            fetch(`https://api.themoviedb.org/3/tv/${pelaId}?api_key=eb09954096929ff16616027732037e32&language=en-US&page=1`)
            .then(function (response) {
                return response.json()
            })
        
            .then(function (serie) {
                
                console.log(serie);
        
                var imagen = document.querySelector(".foot")
        
                   var serieAgregar =  
                   `<div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
       <div class="uk-card-media-left uk-cover-container">
           <img src="${url}${serie.poster_path}" alt="" uk-cover>
           <canvas width="600" height="700"></canvas>
       </div>
       <div>
           <div class="uk-card-body generosp">
               <h2 class="uk-card-title">Title: ${serie.original_name}</h2><button class="favstar" uk-icon="star"></button>
               <h4>Overview</h4>
               <p>${serie.overview}</p>
               <p>Average voting: ${serie.vote_average}</p>
               <div class="uk-button-group">
                    <button class="uk-button uk-button-danger">Ver Ep:1 S:1</button>
                    <div class="uk-inline">
                        <button class="uk-button uk-button-default" type="button"><span uk-icon="icon:  triangle-down"></span></button>
                        <div uk-dropdown="mode: click; boundary: ! .uk-button-group; boundary-align: true;">
                            <ul class="uk-nav uk-dropdown-nav">
                                <li class="uk-active"><a href="#">Season 1</a></li>
                                <li><a href="#">Season 2</a></li>
                                <li><a href="#">Season 3</a></li>
                                <li class="uk-nav-divider"></li>
                            </ul>
                        </div>
                    </div>
                </div>
               <p>Genres:</p>
               
           </div>
       </div>
   </div>
   <div><h2>La gente tambien miro</h2></div>`

                    imagen.innerHTML += serieAgregar

                    var generosp = document.querySelector(`.generosp`)

                    for (let i = 0; i < serie.genres.length; i++) {
                        const element = serie.genres[i];

                        generosp.innerHTML += `
                        <a href="detalles.html?type=genero&idShow=${element.id}">${element.name}</a>
                        `
                    }

                    var seriesr = document.querySelector("#related")

            fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=eb09954096929ff16616027732037e32&language=en-US`)
            .then(function (response) {
            return response.json()
             })

            .then(function (srelated) {
        
         console.log(srelated);
        

            for (let i = 0; i < srelated.results.length; i++) {
                const element = srelated.results[i];

            var related = `
            <a href="detalles.html?type=movie&idShow=${element.id}">
            <li>
                <img src= "${url}${element.poster_path}" alt="nn"/>
                    <div class="uk-position-center uk-panel"><h1></h1></div>
            </li>
        </a>`;

                seriesr.innerHTML += related
            }
            
            })

            .catch(function(error) {
                console.log(`El error fue: ${error}`);
            })
                    

                            
            })
        
            .catch(function(error) {
                console.log(`El error fue: ${error}`);
            })

            break;
    }

    //traigo el id del url

    var queryString2 = location.search
    var queryStringObj2 = new URLSearchParams(queryString2);
    var pelaId = queryStringObj2.get("idShow")

    console.log(pelaId)

    let storage = localStorage.getItem('favoritos')
        console.log(storage);

//si vacio, armo el array

        if (storage == null) {
            favoritos = [];
          } else {
            favoritos = JSON.parse(storage);
          }

        console.log(favoritos)

    let boton = document.querySelector('.favs')                                                                                                                                                             

    if (favoritos.includes(pelaId)) {
        boton.innerHTML = `X Eliminar de favs`;
      }
//funcionalidad boton 

    boton.addEventListener('onclick', function(){

        console.log(favoritos)

        if(!favoritos.includes(pelaId)){
            favoritos.push(pelaId)

        }else{
            localStorage.removeItem(pelaId)
        }

        var infoStorage = JSON.stringify(favoritos);
    localStorage.setItem("favoritos", infoStorage);

     console.log(localStorage);
        
    })

    

})