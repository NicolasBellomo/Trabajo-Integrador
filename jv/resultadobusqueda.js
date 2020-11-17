window.addEventListener("load",function(){

    var api_key = `eb09954096929ff16616027732037e32`

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eb09954096929ff16616027732037e32&language=en-US&page=1`)
    .then(function (response) {
        return response.json()
    })

    .then(function (pelicula) {
        
        console.log(pelicula);

        var vistas = document.querySelector("#ultimas")
        

        for (let i = 0; i < pelicula.results.length; i++) {
            const element = pelicula.results[i];
            
           

           var peliAgregar = `<li>
           <img src= "${url}${element.poster_path}" alt="nn"/>
           <div class="uk-position-center uk-panel"><h1></h1></div>
       </li>`;

            vistas.innerHTML += peliAgregar
        }
        
        
        
    })

    .catch(function(error) {
        console.log(`El error fue: ${error}`);
    })



});


var queryStringObj = new URLSearchParams(location.search);

var busqueda = queryStringObj.get("busqueda");

var midiv = document.querySelector("#info");
midiv.innerHTML = "estoy buscando " + showElegido


//https://api.themoviedb.org/3/search/company?api_key=eb09954096929ff16616027732037e32&query=120&page=1