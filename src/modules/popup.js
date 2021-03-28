import animate from './animate';

const popup = () => {
	const popups = document.querySelectorAll('.popup');

	const animatePopup = nameForm => {
		animate({
			duration: 500,
			timing(timeFraction) {
				return timeFraction;
			},
			draw(progress) {
				nameForm.querySelector('.form-wrapper').style.opacity = progress;
			}
		});
	};

	document.addEventListener('click', event => {
		const target = event.target;

		popups.forEach(popup => {
			if (target.closest(popup.getAttribute('data-btn-selector')) && !target.closest('#footer')) {
				popup.style.display = 'block';
				animatePopup(popup);
				if (popup.getAttribute('data-btn-selector') === '.fixed-gift') {
					document.querySelector('.fixed-gift').remove();
				}
			} else if (!target.closest('.form-content') || event.target.matches('.close-btn')) {
				popup.style.display = 'none';
			}
		});
	});
};

export default popup;
