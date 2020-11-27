window.addEventListener("load", function(){ 
    
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=eb09954096929ff16616027732037e32&language=en-US`)
    .then(function (response) {
        return response.json()
    })

    .then(function(genero) {
        
        console.log(genero);
        
        var texto = document.querySelector(`#genero`)
        

        for (let i = 0; i < genero.genres.length; i++) {
            const element = genero.genres[i];
            
           var palabra = `<a href="detalles.html?type=genero&idShow=${element.id}"><li class="card">
           <div class="${element.name}  uk-card uk-card-hover uk-card-default uk-card-body">${element.name}</div>
       </li></a>`

        texto.innerHTML += palabra

        }
        
        



        
    })

    .catch(function(error) {
        console.log(`El error fue: ${error}`);
    })


    


})