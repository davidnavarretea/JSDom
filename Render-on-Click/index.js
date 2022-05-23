let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	const hello = document.createElement('div');
	hello.style.width = '10rem';
	hello.style.background = 'yellow';
	hello.textContent = 'Hello World';
	document.body.appendChild(hello);
});