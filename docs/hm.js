const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('#animator');


hamburger.addEventListener('click', animateHamburger);

function animateHamburger() {
	hamburger.classList.toggle('active');
	navigation.classList.toggle('active');
};
