const modalFreeVisit = () => {
	const freeVisitForm = document.getElementById('free_visit_form');

	document.addEventListener('click', event => {
		const target = event.target;
		console.log('target: ', target);

		if (target.closest('.free-visit')) {
			freeVisitForm.style.display = 'block';
		} else if (!target.closest('.form-content')) {
			freeVisitForm.style.display = 'none';
		}
	});
};

export default modalFreeVisit;
