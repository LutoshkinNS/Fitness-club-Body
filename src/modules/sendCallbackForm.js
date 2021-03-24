import animate from './animate';

const sendCallbackForm = () => {
	const footerForm = document.getElementById('footer_form'),
		btn = footerForm.querySelector(' .callback-btn');

	const loader = `<div class="lds-ring"><div></div><div></div><div></div><div>`,
		btnContentStart = btn.textContent;

	const postData = body =>
		fetch('./server.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body),
		});

	const addPopupThanks = error => {
		const popupThanks = document.getElementById('thanks');

		if (error) {
			popupThanks.querySelector('h4').textContent = 'Ошибка!';
			popupThanks.querySelector('p').textContent = 'Во время отправки возникла ошибка, попробуйте позже.';
		}

		popupThanks.style.display = 'block';

		animate({
			duration: 500,
			timing(timeFraction) {
				return timeFraction;
			},
			draw(progress) {
				popupThanks.querySelector('.form-wrapper').style.opacity = progress;
			}
		});

		document.addEventListener('click', event => {
			if (event.target.matches('.close-btn') || !event.target.closest('.form-content')) {
				popupThanks.style.display = 'none';
			}
		});
	};

	const clearInputs = () => {
		const input = footerForm.querySelector('.input-text');
		input.value = '';
	};

	footerForm.addEventListener('submit', event => {
		event.preventDefault();

		btn.innerHTML = loader;

		const formData = new FormData(footerForm);
		const body = {};

		formData.forEach((val, key) => {
			body[key] = val;
		});

		postData(body)
			.then(response => {
				if (!response.ok) {
					throw new Error('status network not ok');
				}
				btn.textContent = btnContentStart;
				addPopupThanks();
				clearInputs();
			})
			.catch(error => {
				btn.textContent = btnContentStart;
				addPopupThanks(error);
				clearInputs();
			});
	});
};

export default sendCallbackForm;
