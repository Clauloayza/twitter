var listaTareas =[
	
	{nombre:"tarea", isDone: true},
	{nombre:"tarea2", isDone: false},
	{nombre:"tarea3", isDone: false},
	{nombre:"tarea4", isDone: true}

];



function drawTasksList(){
	//funcion dibujar tareas
	var lista = document.getElementById("lista");
	var texto = document.getElementById("texto");
	var boton = document.getElementById("boton");
	
	
	for (var i in listaTareas){
		var html = "<li class='works'><input type='checkbox' "+ (listaTareas[i].isDone?"checked":"") + ">" + listaTareas[i].nombre + "<i class='glyphicon glyphicon-trash'>" + "</Li>"; 
		lista.innerHTML += html;
		
	}
	
	if ()
}







/*var texto= document.getElementById("texto");
var boton= document.getElementById("boton");
var lista= document.getElementById("lista");

boton.addEventListener("click", onButtonClick);


function onButtonClick(evt){
    agregarMensaje();
}

function agregarMensaje(){
    if(texto.value== "" || texto.value.length == 0){
        alert('Tiene que tener algun contenido');
        lista.removeChild(this.parentNode);
    }
    var mensaje=texto.value;
    
    
        
    var span=document.createElement("span");
    var item=document.createElement("li");
    var checking=document.createElement("input");
    var icon=document.createElement("i");
    
    span.innerHTML=mensaje;
    icon.style.cursor="pointer";
    icon.className="glyphicon glyphicon-trash tacho";
    checking.setAttribute("type","checkbox");
    checking.className="squaredTwo";
    checking.type= "checkbox";
    
    
    item.appendChild(checking);
    item.appendChild(span);
    item.appendChild(icon);
    lista.appendChild(item);
    
    texto.value="";
    texto.focus();
    
    icon.addEventListener("click", onIconClick);
    checking.addEventListener("click", onChange);   
}

function onIconClick(evento){
    console.log(evento.target.parentNode);
    lista.removeChild(evento.target.parentNode);
}

function onChange(evento){
    console.log(evento.target);
    if(evento.target.checked){
        evento.target.nextSibling.style.textDecoration="line-through";
    } else{
        evento.target.nextSibling.style.textDecoration="none";
    }
}


/*function limpiarCuadroTexto(){
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
} */