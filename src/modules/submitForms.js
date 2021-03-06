import animate from './animate';

const submitForms = () => {

	const forms = document.querySelectorAll('form'),
		inputsRadioFooter = document.querySelectorAll('footer input[type="radio"]');

	const check = document.createElement('p');
	check.textContent = 'Вы не дали согласие на обработку персональных данных';
	check.style.cssText  = `
					color: red;
					text-align: center;
					margin: 5px 0;
				`;

	const footerErrorMessage = document.createElement('p');
	footerErrorMessage.textContent = 'Выберите клуб';
	footerErrorMessage.style.cssText  = `
							position: absolute;
							color: red;
							text-align: center;
							margin: 5px 0;
							bottom: 0;
						`;

	const loader = `<div class="loader-wrap"><div class="lds-ring"><div></div><div></div><div></div><div></div>`;

	const postData = body =>
		fetch('./server.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body),
		});

	const animatePopup = popupThanks => {
		animate({
			duration: 500,
			timing(timeFraction) {
				return timeFraction;
			},
			draw(progress) {
				popupThanks.querySelector('.form-wrapper').style.opacity = progress;
			}
		});
	};

	const addPopup = (idPopup, error) => {
		const popup = document.getElementById(idPopup),
			popupThanks = document.getElementById('thanks'),
			title = popupThanks.querySelector('h4'),
			message = popupThanks.querySelector('p');

		if (idPopup === 'thanks') {
			if (!error) {
				title.textContent = 'Спасибо!';
				message.innerHTML = `Ваша заявка отправлена.<br> Мы свяжемся с вами в ближайшее время.`;
				popupThanks.style.display = 'block';
				animatePopup(popupThanks);
			} else {
				title.textContent = 'Ошибка!';
				message.innerHTML = `Во время отправки возникла ошибка.<br> попробуйте позже.`;
				popupThanks.style.display = 'block';
				animatePopup(popupThanks);
			}
		} else if (!error) {
			popup.style.display = 'none';
			title.textContent = 'Спасибо!';
			message.innerHTML = `Ваша заявка отправлена.<br> Мы свяжемся с вами в ближайшее время.`;
			popupThanks.style.display = 'block';
		} else {
			popup.style.display = 'none';
			title.textContent = 'Ошибка!';
			message.innerHTML = `Во время отправки возникла ошибка.<br> попробуйте позже.`;
			popupThanks.style.display = 'block';
		}

	};

	const clearInputs = form => {
		const inputs = form.querySelectorAll('input');
		inputs.forEach(input => {
			if (input.getAttribute('type') === 'text' || input.getAttribute('type') === 'tel') {
				input.value = '';
			}
		});
	};

	forms.forEach(form => {
		const btnSubmit = form.querySelector('button[type="submit"]'),
			checkbox = form.querySelector('input[type="checkbox"]');

		form.style.position = 'relative';

		const btnContentStart = btnSubmit.textContent;

		form.addEventListener('submit', event => {
			event.preventDefault();

			btnSubmit.innerHTML = loader;
			btnSubmit.disabled = true;

			const formData = new FormData(form);
			const body = {};

			formData.forEach((val, key) => {
				body[key] = val;
			});

			const sendForm = () => {
				postData(body)
					.then(response => {
						if (!response.ok) {
							throw new Error('status network not ok');
						}
						if (!form.closest('.popup')) {
							addPopup('thanks');
						} else {
							addPopup(form.closest('.popup').getAttribute('id'));
						}
						btnSubmit.textContent = btnContentStart;
						btnSubmit.disabled = false;
						clearInputs(form);
					})
					.catch(error => {
						if (!form.closest('.popup')) {
							addPopup('thanks', error);
						} else {
							addPopup(form.closest('.popup').getAttribute('id'), error);
						}
						btnSubmit.textContent = btnContentStart;
						btnSubmit.disabled = false;
						clearInputs(form);
					});
			};

			try {
				if (!checkbox) {
					throw new Error('it has no checkbox');
				}
				if (checkbox.checked) {
					check.remove();
					sendForm();
				} else {
					btnSubmit.textContent = btnContentStart;
					btnSubmit.disabled = false;
					form.insertAdjacentElement('beforeend', check);
				}
			} catch {
				for (let index = 0; index < inputsRadioFooter.length; index++) {
					if (inputsRadioFooter[index].checked) {
						footerErrorMessage.remove();
						btnSubmit.innerHTML = loader;
						btnSubmit.disabled = true;
						sendForm();
						break;
					} else {
						btnSubmit.textContent = btnContentStart;
						btnSubmit.disabled = false;
						const chooseClub = document.querySelector('.choose-club');
						chooseClub.insertAdjacentElement('afterend', footerErrorMessage);
					}
				}
			}
		});
	});

};

export default submitForms;
