const arrowUp = () => {
	const arrow = document.getElementById('totop'),
		firstSection = document.querySelector('section');

	const heightToSection = firstSection.getBoundingClientRect().top;

	arrow.style.display = 'none';

	window.addEventListener('scroll', () => {
		if (heightToSection < window.pageYOffset) {
			console.log(true);
			arrow.style.display = 'block';
		} else {
			arrow.style.display = 'none';
		}
	});

	arrow.addEventListener('click', event => {
		event.preventDefault();

		document.body.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
};

export default arrowUp;
