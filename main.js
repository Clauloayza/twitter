var textarea = document.getElementById("texto");


var listaTareas =[
	
	{nombre:textarea, isDone: false},
			
];



listaTareas.push[{nombre:textarea, isDone:false}];
function drawTasksList(){

	var lista = document.getElementById("lista");
	
	if(textarea.value == "" || textarea.value == 0){
		alert('Tienes que ingresar tarea');
	}else{
		//funcion dibujar tareas
	
	
	for (var i in listaTareas){
		var html = "<li class='works'><input type='checkbox' onclick='checkList("+i+")' "+ (listaTareas[i].isDone?"checked":"") + ">" + listaTareas[i].nombre.value + "<i class='glyphicon glyphicon-trash' onclick='selecTach("+i+")'>" + "</Li>"; 
		
		lista.innerHTML += html;
		
	}
	
	textarea.value = "";
	textarea.focus();
	}
	
}


function checkList(box){
	
	if(listaTareas[box].isDone == false){
		listaTareas[box].isDone = true;
		//console.log();
		lista.getElementsByClassName("works")[box].style.textDecoration="line-through";
	}else{
		listaTareas[box].isDone = false;
		lista.getElementsByClassName("works")[box].style.textDecoration="none";
	}
}

function selecTach(){
	
	
	
}


