const burgerMenu = () => {

	const popupMenu = document.querySelector('.popup-menu');

	document.addEventListener('click', event => {
		const target = event.target;

		if (target.matches('.menu-button img')) {
			popupMenu.style.display = 'flex';
		} else if (target.matches('.close-menu-btn img')) {
			popupMenu.style.display = 'none';
		} else if (target.closest('a')) {
			popupMenu.style.display = 'none';
		}
	});

};

export default burgerMenu;
