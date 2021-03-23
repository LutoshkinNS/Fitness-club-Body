const servicesSlider = () => {
	const slider = document.querySelector('.services-slider'),
		slides = slider.querySelectorAll('.slide'),
		slidesToShow = 5,
		infinity = true,
		itemWidth = Math.abs(100 / slidesToShow);
	let position = 0;

	const sliderHidden = document.createElement('div');
	const sliderWrap = document.createElement('div');
	slider.insertAdjacentElement('afterbegin', sliderHidden);
	sliderHidden.insertAdjacentElement('afterbegin', sliderWrap);

	const addSliderClass = () => {
		slider.classList.add('slider-carusel__main');
		sliderHidden.classList.add('slider-carusel__hidden');
		sliderWrap.classList.add('services-slider__wrap');
		for (const item of slides) {
			item.classList.add('slider-carusel__item');
			sliderWrap.appendChild(item);
		}
	};
	addSliderClass();

	const addStyle = () => {
		const style = document.createElement('style');
		style.id = 'sliderCarusel-style';
		style.textContent = `
			.slider-carusel__main {
				position: relative;
			}

			.slider-carusel__hidden {
				overflow: hidden;
			}

			.services-slider__wrap {
				display: flex;
				transition: transform 0.5s !important;
				will-change: transform !important;
			}

			.slider-carusel__item {
				flex: 0 0 ${itemWidth}% !important;
				margin: 0 auto !important;
			}
		`;
		document.head.appendChild(style);
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

	const prevSlider = () => {
		if (infinity || position > 0) {
			--position;
			if (position < 0) {
				position = slides.length - slidesToShow;
			}
			sliderWrap.style.transform = `
				translateX(-${position * itemWidth}%)
			`;
		}
	};

	const nextSlider = () => {
		if (infinity || position < slides.length - slidesToShow) {
			++position;
			if (position > slides.length - slidesToShow) {
				position = 0;
			}
			sliderWrap.style.transform = `
				translateX(-${position * itemWidth}%)
			`;
		}
	};

	slider.addEventListener('click', event => {
		if (event.target.closest('.next')) {
			nextSlider();
		} else if (event.target.closest('.prev')) {
			prevSlider();
		}
	});
};

export default servicesSlider;

