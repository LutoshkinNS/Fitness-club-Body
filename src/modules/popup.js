import animate from './animate';

const popup = (idOpenPopup, individualSelectorWrapBlocks, btnSelector) => {
	const nameForm = document.getElementById(idOpenPopup);

	document.addEventListener('click', event => {
		const target = event.target;

		if (target.closest(btnSelector)) {
			if (target.closest(individualSelectorWrapBlocks)) {
				nameForm.style.display = 'block';

				animate({
					duration: 500,
					timing(timeFraction) {
						return timeFraction;
					},
					draw(progress) {
						nameForm.querySelector('.form-wrapper').style.opacity = progress;
					}
				});
			}
		} else if (!target.closest('.form-content') || event.target.matches('.close-btn')) {
			nameForm.style.display = 'none';
		}
	});
};

export default popup;
