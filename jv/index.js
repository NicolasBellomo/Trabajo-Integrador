window.addEventListener("load", function(){

    var url = `https://image.tmdb.org/t/p/w500`
    
    
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eb09954096929ff16616027732037e32&language=en-US&page=1`)
        .then(function (response) {
            return response.json()
        })
    
        .then(function (pelicula) {
            
            console.log(pelicula);
    
            var vistas = document.querySelector("#mas-vistas")
            
    
            for (let i = 0; i < pelicula.results.length; i++) {
                const element = pelicula.results[i];
    
               var peliAgregar = `<a href="detalles.html?idShow=${element.id}">
                                    <li>
                                        <img src= "${url}${element.poster_path}" alt="nn"/>
                                            <div class="uk-position-center uk-panel"><h1></h1></div>
                                    </li>
                                </a>`;
    
                vistas.innerHTML += peliAgregar
            }
     
        })
    
        .catch(function(error) {
            console.log(`El error fue: ${error}`);
        })
    
    
    
    
    
    
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=eb09954096929ff16616027732037e32&language=en-US&page=1`)
        .then(function (response) {
            return response.json()
        })
    
        .then(function (peliculas) {
            
            console.log(peliculas);
    
            var ultimas = document.querySelector("#ultimas")
            
    
            for (let i = 0; i < peliculas.results.length; i++) {
                const element = peliculas.results[i];
    
               var peliAgregar = `<a href="detalles.html?idShow=${element.id}">
                                    <li>
                                        <img src= "${url}${element.poster_path}" alt="nn"/>
                                            <div class="uk-position-center uk-panel"><h1></h1></div>
                                    </li>
                                </a>`;
    
                ultimas.innerHTML += peliAgregar
            }
            
        })
    
        .catch(function(error) {
            console.log(`El error fue: ${error}`);
        })
    
    
    
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=eb09954096929ff16616027732037e32&language=en-US&page=1`)
        .then(function (response) {
            return response.json()
        })
    
        .then(function (recomendadas) {
            
            console.log(recomendadas);
    
            var recom = document.querySelector("#reco")
            
    
            for (let i = 0; i < recomendadas.results.length; i++) {
                const element = recomendadas.results[i];
    
               var peliAgregar = `<a href="detalles.html?idShow=${element.id}">
                                    <li>
                                        <img src= "${url}${element.poster_path}" alt="nn"/>
                                        <div class="uk-position-center uk-panel"><h1></h1></div>
                                    </li>
                                 </a>`;
    
                recom.innerHTML += peliAgregar
            }
     
        })
    
        .catch(function(error) {
            console.log(`El error fue: ${error}`);
        })
    
    
    
    
        
    
    
    })