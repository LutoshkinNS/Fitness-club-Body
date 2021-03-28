const mainSlider = () => {
	const slider = document.querySelector('.main-slider'),
		slides = slider.querySelectorAll('.slide');
	let currentSlide = 0;

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
		autoPlaySlide();
		setInterval(autoPlaySlide, time);
	};

	startSlide(2000);
};

export default mainSlider;
