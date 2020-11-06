window.onload = function() {
    var apikey= `0231890e16950b2b1fe941aec8ffe1d6`;
    

    fetch (`https://api.themoviedb.org/3/movie/550?api_key=${apikey}`)
    .then (function (response) {
        return respnse.json()
    })
    .then(function(respuesta) {
        console.log(respuesta);
        
    })
    
    .catch(function(error){
      console.log('el error fue: ' + error)
    })













}