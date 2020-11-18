window.addEventListener("load",function(){

    var url = `https://image.tmdb.org/t/p/w500`

    var queryString = location.search
    var queryStringObj = new URLSearchParams(queryString);

    var pelaElegida = queryStringObj.get("idShow")

    fetch(`https://api.themoviedb.org/3/movie/${pelaElegida}?api_key=eb09954096929ff16616027732037e32&language=en-US`)
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
                       <img src="${url}${pelicula.backdrop_path}" alt="">
                   </div>
                   <div class="uk-card-body">
                       <h3 class="uk-card-title">Media Top</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                   </div>
               </div>
           </div>
       </div>`


       var peliAgregar = `
        <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                <div class="uk-card-media-left uk-cover-container">
                    <img src="${url}${pelicula.poster_path}" alt="" uk-cover>
                    <canvas width="600" height="400"></canvas>
                </div>
            <div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">Media Left</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
            </div>
        </div>
       `
                            
                                

            imagen.innerHTML += peliAgregar
 
    })

    .catch(function(error) {
        console.log(`El error fue: ${error}`);
    })








})