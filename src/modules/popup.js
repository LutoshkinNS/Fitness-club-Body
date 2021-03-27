import animate from './animate';

const popup = () => {
	const freeVisitForm = document.getElementById('free_visit_form'),
		callbackForm = document.getElementById('callback_form'),
		thanksForm = document.getElementById('thanks'),
		giftForm = document.getElementById('gift');

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

		if (!target.closest('.form-content') || event.target.matches('.close-btn')) {
			thanksForm.style.display = 'none';
		}

		if (target.closest('.free-visit')) {
			freeVisitForm.style.display = 'block';
			animatePopup(freeVisitForm);
		} else if (!target.closest('.form-content') || event.target.matches('.close-btn')) {
			freeVisitForm.style.display = 'none';
		}

		if (target.closest('.call') && !target.closest('footer')) {
			callbackForm.style.display = 'block';
			animatePopup(callbackForm);
		} else if (!target.closest('.form-content') || event.target.matches('.close-btn')) {
			callbackForm.style.display = 'none';
		}

		if (target.closest('.fixed-gift')) {
			giftForm.style.display = 'block';
			animatePopup(giftForm);
		} else if (target.closest('.fixed-gift') &&
		!target.closest('.form-content') || event.target.matches('.close-btn')) {
			giftForm.style.display = 'none';
			document.querySelector('.fixed-gift').remove();
		}
	});
};

export default popup;
