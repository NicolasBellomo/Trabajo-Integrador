window.addEventListener("load",function(){
    var queryStringObj = new URLSearchParams(location.search);

    var busqueda = queryStringObj.get("busqueda");

    var midiv = document.querySelector("#info");
    midiv.innerHTML = "estoy buscando " + showElegido


});