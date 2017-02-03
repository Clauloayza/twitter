var textarea = document.getElementById("texto");


var listaTareas = [];


function agregar(){
		
	if(textarea.value == "" || textarea.value == 0){
		alert('Tienes que ingresar tarea');
	}else{
		
		listaTareas.push({nombre:textarea.value, isDone:false});
		drawTasksList();
	}
}


function drawTasksList(){

	var lista = document.getElementById("lista");
	
	//funcion dibujar tareas
	lista.innerHTML = "";
	for (var i in listaTareas){
		var html = "<li class='works' style = '"+ (listaTareas[i].isDone?"text-decoration:line-through":"") + "' ><input type='checkbox' onclick='checkList("+i+")'  "+ (listaTareas[i].isDone?"checked":"") + ">" + listaTareas[i].nombre + "<i class='glyphicon glyphicon-trash' onclick='selecTach("+i+")'>" + "</Li>"; 
		
		lista.innerHTML += html;
		
	}
	
	textarea.value = "";
	textarea.focus();
	}
	


function checkList(box){
	
	listaTareas[box].isDone = !listaTareas[box].isDone;
	
	
	/*if(listaTareas[box].isDone == false){
		listaTareas[box].isDone = true;
		//console.log();
		//lista.getElementsByClassName("works")[box].style.textDecoration="line-through";
	}else{
		listaTareas[box].isDone = false;
		//lista.getElementsByClassName("works")[box].style.textDecoration="none";
	}*/
	
	drawTasksList();
}

function selecTach(tach){
	listaTareas.slice(tach,1);
	drawTasksList();
	
}


