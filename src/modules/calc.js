import animate from './animate';

const calc = () => {
	const sectionCards = document.getElementById('cards'),
		cardOrderForm = document.getElementById('card_order'),
		priceTotal = document.getElementById('price-total'),
		priceMessage = document.querySelector('.price-message input');

	const getData = url => {
		fetch(url)
			.then(response => {
				if (!response.ok) {
					throw new Error('status network not ok');
				}
				return response.text();
			})
			.then(data => {
				const noSpace = data.replace(/\s{2,}/g, ' ');

				const labels = noSpace.match(/<label for="t[1-9]">.*?<\/label>/gi);

				const arr = new Map();

				labels.forEach(item => {
					const reg = item.match(/>\d.*?</gi);
					const month = reg[0].replace(/\D*/g, '');
					const price = reg[1].replace(/\D*/g, '');

					arr.set(month, price);
				});

				const inputsTime = cardOrderForm.querySelectorAll('.time input');
				inputsTime.forEach(input => {
					if (input.checked) {
						if (priceMessage.value === 'ТЕЛО2020') {
							animate({
								duration: 400,
								timing(timeFraction) {
									return Math.pow(timeFraction, 3);
								},
								draw(progress) {
									priceTotal.textContent = Math.floor((arr.get(input.value) * 0.7) * progress);
								}
							});
						} else {
							animate({
								duration: 400,
								timing(timeFraction) {
									return Math.pow(timeFraction, 3);
								},
								draw(progress) {
									priceTotal.textContent = Math.floor(arr.get(input.value) * progress);
								}
							});
						}
					}
				});

			})
			.catch(error => console.error(error));
	};

	sectionCards.addEventListener('change', event => {
		const target = event.target;

		if (target.matches('#card_leto_mozaika') || target.matches('[name="card-type"]') || target.matches('.price-message input')) {
			getData('./mozaika.html');
		} else if (target.matches('#card_leto_schelkovo') || target.matches('[name="card-type"]') || target.matches('.price-message input')) {
			getData('./schelkovo.html');
		}
	});
};

export default calc;
