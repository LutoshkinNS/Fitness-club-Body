const gallerySlider = () => {
	const slider = document.querySelector('.gallery-slider'),
		slides = slider.querySelectorAll('.slide'),
		time = 2000;
	let dotsLi = document.querySelectorAll('.slider-dots li');

	let currentSlide = 0,
		interval;

	const addSliderClass = () => {
		slider.classList.add('slider-carusel__main');
		for (const slide of slides) {
			slide.classList.add('slider-gallery__none');
		}
		slides[0].classList.add('slider-gallery__show');
	};
	addSliderClass();

	const addStyle = () => {
		const style = document.createElement('style');
		style.id = 'sliderGallery-style';
		style.textContent = `
			.slider-gallery__main {
				position: relative;
			}

			.slider-gallery__none {
				display: none;
			}

			.slider-gallery__show {
				display: block;
			}
		`;
		document.head.appendChild(style);
		slider.style = `
			position: relative;
			display: flex;
		`;
	};
	addStyle();

	const addArrow = () => {
		const prevArrow = `
			<div class="slider-arrow prev">
				<span>
					<img src="./images/arrow-left.png">
				</span>
			</div>
		`;

		const nextArrow = `
			<div class="slider-arrow next">
				<span>
					<img src="./images/arrow-right.png">
				</span>
			</div>
		`;

		slider.insertAdjacentHTML('afterbegin', prevArrow);
		slider.insertAdjacentHTML('beforeend', nextArrow);
	};
	addArrow();

	const addsDot = () => {
		const dotsUl = document.createElement('ul');
		for (let index = 0; index < slides.length; index++) {
			const dotLi = document.createElement('li');
			const dot = document.createElement('button');
			slider.appendChild(dotsUl);
			dotsUl.classList.add('slider-dots');
			dotsUl.appendChild(dotLi);
			dotLi.appendChild(dot);
		}

		dotsLi = document.querySelectorAll('.slider-dots li');
		dotsLi[0].classList.add('slick-active');
	};
	addsDot();

	const prevSlide = (elementSlide, indexSlide, activeClass) => {
		elementSlide[indexSlide].classList.remove(activeClass);
	};

	const nextSlide = (elementSlide, indexSlide, activeClass) => {
		elementSlide[indexSlide].classList.add(activeClass);
	};

	const autoPlaySlide = () => {
		prevSlide(slides, currentSlide, 'slider-gallery__show');
		prevSlide(dotsLi, currentSlide, 'slick-active');
		currentSlide++;
		if (currentSlide >= slides.length) {
			currentSlide = 0;
		}
		nextSlide(slides, currentSlide, 'slider-gallery__show');
		nextSlide(dotsLi, currentSlide, 'slick-active');
	};

	const startSlide = (time = 2000) => {
		interval = setInterval(autoPlaySlide, time);
	};

	const stopSlide = () => {
		clearInterval(interval);
	};

	slider.addEventListener('click', event => {
		event.preventDefault();

		const target = event.target;

		if (!target.closest('.slider-arrow, .slider-dots li')) {
			return;
		}

		prevSlide(slides, currentSlide, 'slider-gallery__show');
		prevSlide(dotsLi, currentSlide, 'slick-active');

		if (target.closest('.next')) {
			currentSlide++;
		} else if (target.closest('.prev')) {
			currentSlide--;
		} else if (target.closest('.slider-dots li')) {
			dotsLi.forEach((elem, index) => {
				if (elem === target.closest('.slider-dots li')) {
					currentSlide = index;
				}
			});
		}

		if (currentSlide >= slides.length) {
			currentSlide = 0;
		}

		if (currentSlide < 0) {
			currentSlide = slides.length - 1;
		}

		nextSlide(slides, currentSlide, 'slider-gallery__show');
		nextSlide(dotsLi, currentSlide, 'slick-active');
	});

	slider.addEventListener('mouseover', event => {
		if (event.target.closest('.slider-arrow') || event.target.closest('.slider-dots li')) {
			stopSlide();
		}
	});

	slider.addEventListener('mouseout', event => {
		if (event.target.closest('.slider-arrow') || event.target.closest('.slider-dots li')) {
			startSlide(time);
		}
	});

	startSlide(time);
};

export default gallerySlider;
