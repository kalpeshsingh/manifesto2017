let element = document.querySelector('.menu');
let body = document.querySelector('body');

element.addEventListener('click', toggleMenu);

function toggleMenu() {
	this.classList.toggle('is-open');
    body.classList.toggle('has-overlay');
}