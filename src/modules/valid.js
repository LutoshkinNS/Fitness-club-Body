function valid(selector) {

	const elems = document.querySelectorAll(selector);

	const name = event => {
		const target = event.target;
		target.value = target.value.replace(/[^А-яЁё ]/g, '');

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
