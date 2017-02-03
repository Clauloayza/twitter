var textarea = document.getElementById("texto");


var listaTareas =[
	
	{nombre:textarea, isDone: false},
			
];


function drawTasksList(){
	if(textarea.value == "" || textarea.value == 0){
		alert('Tienes que ingresar tarea');
	}else{
		//funcion dibujar tareas
	var lista = document.getElementById("lista");
	
	for (var i in listaTareas){
		var html = "<li class='works'><input type='checkbox' onclick='checkList("+i+")' "+ (listaTareas[i].isDone?"checked":"") + ">" + listaTareas[i].nombre.value + "<i class='glyphicon glyphicon-trash' onclick='selectTach("+i+")'>" + "</Li>"; 
		lista.innerHTML += html;
		
	}
	
	textarea.value = "";
	textarea.focus();
	}
	
}


function checkList(event){
	
	var lista = document.getElementById("lista");
	
	if(listaTareas[_valor].isDone == false){
		listaTareas[_valor].isDone = true;
		//console.log();
		lista.childNodes[_valor].childNodes[1].style.textDecoration="line-through";
	}else{
		listaTareas[_valor].isDone = false;
		lista.childNodes[_valor].childNodes[1].style.textDecoration="none";
	}
}




/*


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

function Click(evento){
    console.log(evento.target.parentNode);
    lista.removeChild(evento.target.parentNode);
}

function Change(evento){
    console.log(evento.target);
    if(evento.target.checked){
        evento.target.nextSibling.style.textDecoration="line-through";
    } else{
        evento.target.nextSibling.style.textDecoration="none";
    }
}

function limpiarCuadro(){
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