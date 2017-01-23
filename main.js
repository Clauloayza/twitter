function limpiarCuadroTexto(){
    document.getElementById("cuadroTexto").value="";
}



function agregaTarea(){
    var texto= document.getElementById("cuadroTexto").value;
    var contenedor= document.createElement("div");
    var padre= document.getElementById("padremax");
    padre.appendChild(contenedor);
    
    var checkBox= document.createElement.setAttribute("type","checkbox");
    contenedor.appendChild(checkBox);
    
    var elemento= document.createElement("span");
    var contexto= document.createTextNode(mensaje);
    elemento.appendChild(contexto);
    contenedor.appendChild(elemento);
    
    limpiarCuadroTexto();
}