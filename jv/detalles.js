window.addEventListener("load",function(){

    var url = `https://image.tmdb.org/t/p/w500`

    var queryString = location.search
    var queryStringObj = new URLSearchParams(queryString);

    var pelaId = queryStringObj.get("idShow")
    var pelaElegida = queryStringObj.get("type")



    switch (pelaElegida) {
        case `movie`:
            fetch(`https://api.themoviedb.org/3/movie/${pelaId}?api_key=eb09954096929ff16616027732037e32&language=en-US`)
    .then(function (response) {
        return response.json()
    })

    .then(function (pelicula) {
        
        console.log(pelicula);

        var imagen = document.querySelector(".foot")

           var peliAgregar =  `<div class="uk-child-width-1@m" uk-grid>
           <div>
               <div class="uk-card uk-card-default">
                   <div class="uk-card-media-top width-1@m">
                       <img src="${url}${pelicula.poster_path}" alt="">
                   </div>
                   <div class="uk-card-body">
                       <h3 class="uk-card-title">Media Top</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                   </div>
               </div>
           </div>
       </div>`
            imagen.innerHTML += peliAgregar
 
    })

    .catch(function(error) {
        console.log(`El error fue: ${error}`);
    })
            
            break;

        case `genero`:

        


            break;
    
        default:
            fetch(`https://api.themoviedb.org/3/tv/${pelaId}?api_key=eb09954096929ff16616027732037e32&language=en-US&page=1`)
            .then(function (response) {
                return response.json()
            })
        
            .then(function (pelicula) {
                
                console.log(pelicula);
        
                var imagen = document.querySelector(".foot")
        
                   var peliAgregar =  `<div class="uk-child-width-1@m" uk-grid>
                   <div>
                       <div class="uk-card uk-card-default">
                           <div class="uk-card-media-top width-1@m">
                               <img src="${url}${pelicula.poster_path}" alt="">
                           </div>
                           <div class="uk-card-body">
                               <h3 class="uk-card-title">Media Top</h3>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                           </div>
                       </div>
                   </div>
               </div>`
                                    
        
                    imagen.innerHTML += peliAgregar
         
            })
        
            .catch(function(error) {
                console.log(`El error fue: ${error}`);
            })

            break;
    }

    








})