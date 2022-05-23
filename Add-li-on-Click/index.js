let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	const lista = document.querySelector('#myList');
	const elemento = document.createElement('li');
	elemento.textContent = 'Forth element'
	lista.appendChild(elemento);
});