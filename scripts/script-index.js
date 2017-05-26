/*	Função usada para mostrar a capa do jogo que será selecionado	*/
function mostrarcapa(numero) {
	document.getElementById("capa").style.visibility = "visible";
	if (numero == 1) {
		document.getElementById("capa").src = "images/kh1.jpg";
		document.getElementById("capa").style.width = "25%";
	} else if (numero == 2) {
		document.getElementById("capa").src = "images/kh2.jpg";
		document.getElementById("capa").style.width = "25%";
	} else if (numero == 3) {
		document.getElementById("capa").src = "images/khchain.jpg";
		document.getElementById("capa").style.width = "25%";
	} else if (numero == 4) {
		document.getElementById("capa").src = "images/khbbs.jpg";
		document.getElementById("capa").style.width = "20.5%";
	} else if (numero == 5) {
		document.getElementById("capa").src = "images/kh358.jpg";
		document.getElementById("capa").style.width = "35%";
	} else if (numero == 6) {
		document.getElementById("capa").src = "images/khcoded.jpg";
		document.getElementById("capa").style.width = "35%";
	} else if (numero == 7) {
		document.getElementById("capa").src = "images/kh3d.jpg";
		document.getElementById("capa").style.width = "35%";
	}	
}

/*	Função usada para esconder a capa do jogo	*/
function escondercapa() {
	document.getElementById("capa").style.visibility = "hidden";
}
