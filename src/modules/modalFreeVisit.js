import animate from './animate';

const modalFreeVisit = () => {
	const freeVisitForm = document.getElementById('free_visit_form');

	document.addEventListener('click', event => {
		const target = event.target;

		if (target.closest('.free-visit')) {
			freeVisitForm.style.display = 'block';
			document.querySelector('.head-slider').style.zIndex = -2;
			document.querySelector('#totop').style.zIndex = -2;

			animate({
				duration: 500,
				timing(timeFraction) {
					return timeFraction;
				},
				draw(progress) {
					freeVisitForm.style.opacity = progress;
				}
			});
		} else if (!target.closest('.form-content')) {
			freeVisitForm.style.display = 'none';
		}
	});
};

export default modalFreeVisit;
