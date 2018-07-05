'use strict';

window.addEventListener('DOMContentLoaded', function () {

	var tab = document.getElementsByClassName('info-header-tab'),
	    tabContent = document.getElementsByClassName('info-tabcontent'),
	    info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(num) {
		for (var i = num; i < tabContent.length; i++) {
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

	info.addEventListener('click', function (event) {
		var target = event.target;
		if (target.className == 'info-header-tab') {
			for (var i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				};
			};
		};
	});

	//timer

	var deadline = '2018-06-24T13:21:00';

	function getTimeRemaining(endtime) {
		var t = Date.parse(endtime) - Date.parse(new Date()),
		    seconds = Math.floor(t / 1000 % 60),
		    minutes = Math.floor(t / 1000 / 60 % 60),
		    hours = Math.floor(t / (1000 * 60 * 60));

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	function setClock(id, endtime) {
		var timer = document.getElementById(id),
		    hours = timer.querySelector('.hours'),
		    minutes = timer.querySelector('.minutes'),
		    seconds = timer.querySelector('.seconds');

		function updateClock() {
			var t = getTimeRemaining(endtime);
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
		var timeInterval = setInterval(updateClock, 1000);
	};

	setClock('timer', deadline);

	//modal_window

	var more = document.querySelector('.more'),
	    overlay = document.querySelector('.overlay'),
	    close = document.querySelector('.popup-close');

	more.addEventListener('click', function () {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function () {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	//description_button_modal

	var info_container = document.querySelector('.info'),
	    description_btns = document.querySelectorAll('.description-btn');

	info_container.addEventListener('click', function (event) {
		var target = event.target;
		if (target.className == 'description-btn') {
			for (var i = 0; i < description_btns.length; i++) {
				if (target == description_btns[i]) {
					overlay.style.display = 'block';
					document.body.style.overflow = 'hidden';
					break;
				};
			};
		};
	});

	//form

	var message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с Вами свяжемся";
	message.failure = "Что-то пошло не так...";

	var form = document.getElementsByClassName('main-form')[0],
	    statusMessage = document.createElement('div');
	statusMessage.classList.add('status');

	function postDataForm(elem, url) {
		elem.addEventListener('submit', function (event) {
			event.preventDefault();
			elem.appendChild(statusMessage);
			var formData = new FormData(elem);

			function postData(data) {
				return new Promise(function (resolve, reject) {
					var request = new XMLHttpRequest();
					request.open("POST", url);
					request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
					request.onreadystatechange = function () {
						if (request.readyState < 4) {
							resolve();
						} else if (request.readyState === 4) {
							if (request.status == 200 && request.status < 300) {
								resolve();
							} else {
								reject();
							}
						}
					};
					request.send(data);
				});
			};

			function clearInput() {
				var input = elem.getElementsByTagName('input');
				for (var i = 0; i < input.length; i++) {
					input[i].value = '';
				};
			};

			function removeElement(parent, element) {
				parent.removeChild(element);
			};

			postData(formData).then(function () {
				statusMessage.innerHTML = message.loading;
			}).then(function () {
				// thanksModal.style.display = 'block';
				// mainModal.style.display = 'none';
				statusMessage.innerHTML = message.success;
				setTimeout(removeElement, 3000, elem, statusMessage);
			}).catch(function () {
				statusMessage.innerHTML = message.failure;
			}).then(clearInput);
		});
	};

	postDataForm(form, "server.php");

	// form.addEventListener('submit', (event) => {
	// event.preventDefault();
	// form.appendChild(statusMessage);

	// let request = new XMLHttpRequest();
	// request.open("POST", "server.php");
	// request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	// let formData = new FormData(form);
	// request.send(formData);


	// 	request.onreadystatechange = () => {
	// 		if (request.readyState < 4) {
	// 			statusMessage.innerHTML = message.loading;
	// 		} else if (request.readyState === 4) {
	// 			if (request.status == 200 && request.status < 300) {
	// 				statusMessage.innerHTML = message.success;
	// 			} else {
	// 				statusMessage.innerHTML = message.failure;
	// 			}
	// 		}
	// 	};
	// 	for (let i = 0; i < input.length; i++) {
	// 		input[i].value = '';
	// 	};
	// });

	//contact form

	var contact_form = document.getElementById('form');

	postDataForm(contact_form, "server.php");

	// let contact_form = document.getElementById('form'),
	// 	contact_inputs = contact_form.getElementsByTagName('input');

	// contact_form.addEventListener('submit', (event) => {
	// 	event.preventDefault();
	// 	contact_form.appendChild(statusMessage);

	// 	let request = new XMLHttpRequest();
	// 	request.open("POST", "server.php");

	// 	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	// 	let formData = new FormData(contact_form);

	// 	request.send(formData);

	// 	request.onreadystatechange = () => {
	// 		if (request.readyState < 4) {
	// 			statusMessage.innerHTML = message.loading;
	// 		} else if (request.readyState === 4) {
	// 			if (request.status == 200 && request.status < 300) {
	// 				statusMessage.innerHTML = message.success;
	// 			} else {
	// 				statusMessage.innerHTML = message.failure;
	// 			}
	// 		}
	// 	};
	// 	for (let i = 0; i < contact_inputs.length; i++) {
	// 		contact_inputs[i].value = '';
	// 	};
	// });
});