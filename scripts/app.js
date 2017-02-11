let element = document.querySelector('.menu');
let body = document.querySelector('body');

element.addEventListener('click', toggleMenu);

function toggleMenu() {
	this.classList.toggle('is-open');
    body.classList.toggle('has-overlay');
}

//remove this two lines when Gayush gives challenges
let card = document.querySelectorAll('.card');
card[1].remove();