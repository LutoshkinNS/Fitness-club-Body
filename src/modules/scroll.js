const arrowUp = () => {
	const arrow = document.getElementById('totop'),
		firstSection = document.querySelector('section'),
		topMenu = document.querySelector('.top-menu'),
		head = document.querySelector('.head'),
		heightToMenu = topMenu.getBoundingClientRect().top;

	const heightMenu = topMenu.getBoundingClientRect().height;

	const heightToSection = firstSection.getBoundingClientRect().top;

	arrow.style.display = 'none';

	window.addEventListener('scroll', () => {
		if (heightToSection < window.pageYOffset) {
			arrow.style.display = 'block';
		} else {
			arrow.style.display = 'none';
		}

		if (window.innerWidth <= 768) {
			if (heightToMenu <= window.pageYOffset) {
				topMenu.style.position = 'fixed';
				head.style.paddingBottom = heightMenu + 'px';
			} else {
				topMenu.style.position = 'static';
				head.style.paddingBottom = 0;
			}
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
