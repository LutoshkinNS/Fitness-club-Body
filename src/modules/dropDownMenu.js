const dropDownMenu = () => {
	const dropdownMenu = document.querySelector('.club-select'),
		dropdownList = dropdownMenu.querySelector('.clubs-list ul');

	dropdownMenu.addEventListener('click', event => {
		const target = event.target;

		if (target.closest('.club-select')) {
			if (!dropdownList.style.display || dropdownList.style.display === 'none') {
				dropdownList.style.display = 'block';
			} else {
				dropdownList.style.display = 'none';
			}
		}
	});
};

export default dropDownMenu;
