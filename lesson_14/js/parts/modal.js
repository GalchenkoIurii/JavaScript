function modal() {
	//modal_window

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});


//description_button_modal
	
	let info_container = document.querySelector('.info'),
		description_btns = document.querySelectorAll('.description-btn');

	info_container.addEventListener('click', (event) => {
		let target = event.target;
		if (target.className == 'description-btn') {
			for (let i = 0; i < description_btns.length; i++) {
				if (target == description_btns[i]) {
					overlay.style.display = 'block';
					document.body.style.overflow = 'hidden';
					break;
				};
			};
		};
	});
};

module.exports = modal;