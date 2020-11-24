window.addEventListener("load", function(){

    let queryString = location.search;
    let queryObject = new URLSearchParams(queryString)
    let search = queryObject.get ('buscador');
    console.log(search);
    
    var url = `https://image.tmdb.org/t/p/w500`
    
    let apiKey = "eb09954096929ff16616027732037e32"
    let link = `https://api.themoviedb.org/3/search/multi?api_key=eb09954096929ff16616027732037e32&language=en-US&query=${search}&page=1&include_adult=false`
    
    let resultados = document.querySelector('#resultados')
    let titulo = document.querySelector(`.posta`)
    
    fetch(link)
    .then(function (respuestas){
        return respuestas.json()
    })
    
    .then(function(data){
        console.log(data);
        let info = data.results;

        for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];

            resultados.innerHTML += `<a href="detalles.html?type=${element.media_type}&idShow=${element.id}">
                                <li>
                                    <img src= "${url}${element.poster_path}" alt="${element.name}"/>
                                        <div class="uk-position-center uk-panel"><h1></h1></div>
                                </li>
                            </a>`
        
        }
        
    })
    .catch(error => console.log(error))
    
    
    
    })