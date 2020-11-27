window.onload = function() {

    //Esto recupera la info de las series favoritas guardadas
  
    var recuperoStorage = localStorage.getItem("favoritos");
  
    if (recuperoStorage == null) {
      favoritos = [];
    } else {
      favoritos = JSON.parse(recuperoStorage); //transformo el texto en Array para el for
    }
  //recorro el array

    for (let i = 0; i < favoritos.length; i++) {
        const element = favoritos

      fetch(`https://api.themoviedb.org/3/movie/${element}?api_key=eb09954096929ff16616027732037e32&language=en-US`)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          if (element.poster_path != null) {
            document.querySelector(".contenedor").innerHTML += `<article><a href=detalles.html?idShow=${data.id}><img src=${url}${data.poster_path} alt=""/></a></article>`
          } else {
            document.querySelector(".contenedor").innerHTML += `<article><a href=detalles.html?idShow=${data.id}><img src="" alt=""/></a></article>'`
          }
        })
    }
  
  
  }