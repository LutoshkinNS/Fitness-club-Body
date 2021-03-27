function valid(selector) {
	const priceMessage = document.querySelector('.price-message input');

	const elems = document.querySelectorAll(selector);

	const name = event => {
		const target = event.target;
		if (target !== priceMessage) {
			target.value = target.value.replace(/[^А-яЁё ]/g, '');
		} else  {
			target.value = target.value.replace(/[^А-яЁё \d]/g, '');
		}

		if (event.type === 'blur') {
			target.value = target.value.trim();
		}
	};

	for (const elem of elems) {
		elem.addEventListener("input", name);
		elem.addEventListener("blur", name);
	}

}

export default valid;
