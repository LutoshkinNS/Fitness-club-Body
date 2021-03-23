import animate from './animate';

const call = () => {
	const callbackForm = document.getElementById('callback_form');

	document.addEventListener('click', event => {
		const target = event.target;

		if (target.closest('.callback-btn')) {
			if (!target.closest('#footer')) {
				callbackForm.style.display = 'block';
				document.querySelector('.head-slider').style.zIndex = -1;
				document.querySelector('#totop').style.zIndex = -1;

				animate({
					duration: 500,
					timing(timeFraction) {
						return timeFraction;
					},
					draw(progress) {
						callbackForm.style.opacity = progress;
					}
				});
			}
		} else if (!target.closest('.form-content')) {
			callbackForm.style.display = 'none';
		}
	});
};

export default call;
