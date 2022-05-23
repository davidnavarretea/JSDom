const div = document.querySelector('#myDiv');
const p = document.createElement('p');
const text = document.createTextNode('Hello World');
p.appendChild(text);
div.appendChild(p);

