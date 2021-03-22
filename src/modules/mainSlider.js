const mainSlider = () => {
	const slider = document.querySelector('.main-slider'),
		slides = slider.querySelectorAll('.slide'),
		time = 3000;
	let currentSlide = 0,
		interval;

	const prevSlide = (elementSlide, indexSlide) => {
		elementSlide[indexSlide].style.display = 'none';
	};

	const nextSlide = (elementSlide, indexSlide) => {
		elementSlide[indexSlide].style.display = 'flex';
	};

	const autoPlaySlide = () => {
		prevSlide(slides, currentSlide);
		currentSlide++;
		if (currentSlide >= slides.length) {
			currentSlide = 0;
		}
		nextSlide(slides, currentSlide);
	};

	const startSlide = (time = 2000) => {
		interval = setInterval(autoPlaySlide, time);
	};

	const stopSlide = () => {
		clearInterval(interval);
	};

	slider.addEventListener('mouseover', event => {
		if (event.target.closest('.slide-text')) {
			stopSlide();
		}
	});

	slider.addEventListener('mouseout', event => {
		if (event.target.closest('.slide-text')) {
			startSlide(time);
		}
	});

	startSlide(time);
};

export default mainSlider;
