const dropDownMenu = () => {
	const dropdownMenu = document.querySelector('.club-select'),
		dropdownList = dropdownMenu.querySelector('.clubs-list ul');

	document.addEventListener('click', event => {
		const target = event.target;

		if (target.closest('.club-select')) {
			if (!dropdownList.style.display || dropdownList.style.display === 'none') {
				dropdownList.style.display = 'block';
				dropdownList.style.zIndex = 1500;
			} else if (!target.closest('.clubs-list ul')) {
				dropdownList.style.display = 'none';
			}
		} else {
			dropdownList.style.display = 'none';
		}
	});
};

export default dropDownMenu;
