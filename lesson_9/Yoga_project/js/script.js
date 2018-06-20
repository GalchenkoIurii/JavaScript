window.addEventListener('DOMContentLoaded', function() {

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(num) {
		for (let i = num; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		};
	};

	hideTabContent(1);

	function showTabContent(num) {
		if (tabContent[num].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[num].classList.remove('hide');
			tabContent[num].classList.add('show');
		}
	};

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				};
			};
		};
	});


//timer

	let deadline = '2018-06-19T12:21:00';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor( (t / 1000) % 60 ),
			minutes = Math.floor( (t / 1000 / 60) % 60 ),
			hours = Math.floor( (t / (1000 * 60 * 60)) );

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

		function updateClock() {
			let t = getTimeRemaining(endtime);
			if (t.hours < 10) {
				hours.innerHTML = '0' + t.hours;
			} else {
				hours.innerHTML = t.hours;
			}

			if (t.minutes < 10) {
				minutes.innerHTML = '0' + t.minutes;
			} else {
				minutes.innerHTML = t.minutes;
			}
			
			if (t.seconds < 10) {
				seconds.innerHTML = '0' + t.seconds;
			} else {
				seconds.innerHTML = t.seconds;
			}
			

			if (t.total <= 0) {
				clearInterval(timeInterval);
				hours.innerHTML = '00';
				minutes.innerHTML = '00';
				seconds.innerHTML = '00';
			}
		};

		//updateClock();
		let timeInterval = setInterval(updateClock, 1000);

	};

	setClock('timer', deadline);


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

	info_container.addEventListener('click', function(event) {
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

});