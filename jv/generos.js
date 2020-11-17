window.addEventListener("load", function(){ 
    
    var api_key = `eb09954096929ff16616027732037e3`
    
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=eb09954096929ff16616027732037e32&language=en-US`)
    .then(function (response) {
        return response.json()
    })

    .then(function(genero) {
        
        console.log(genero);
        
        var texto = document.querySelector("#genero")
        

        for (let i = 0; i < genero.length; i++) {
            const element = genero.genres[i];
            
           var palabra = `<p>${element.name}</p>`

        texto.innerHTML = palabra
        }
        
        
    })

    .catch(function(error) {
        console.log(`El error fue: ${error}`);
    })



})