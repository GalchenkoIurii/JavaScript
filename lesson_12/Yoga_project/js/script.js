
window.addEventListener('DOMContentLoaded', () => {

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

	info.addEventListener('click', (event) => {
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

	let deadline = '2018-06-24T13:21:00';

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
				hours.innerHTML = `0${t.hours}`;
			} else {
				hours.innerHTML = t.hours;
			}

			if (t.minutes < 10) {
				minutes.innerHTML = `0${t.minutes}`;
			} else {
				minutes.innerHTML = t.minutes;
			}
			
			if (t.seconds < 10) {
				seconds.innerHTML = `0${t.seconds}`;
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


//form

	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с Вами свяжемся";
	message.failure = "Что-то пошло не так...";

	let form = document.getElementsByClassName('main-form')[0],
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

		function postDataForm(elem, url) {
			elem.addEventListener('submit', (event) => {
				event.preventDefault();
				elem.appendChild(statusMessage);
				let formData = new FormData(elem);

				function postData(data) {
					return new Promise((resolve, reject) => {
						let request = new XMLHttpRequest();
						request.open("POST", url);
						request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
						request.onreadystatechange = () => {
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
					let input = elem.getElementsByTagName('input');
					for (let i = 0; i < input.length; i++) {
		 				input[i].value = '';
		 			};
				};

				function removeElement(parent, element) {
					parent.removeChild(element);
				};

				postData(formData)
					.then(() => {statusMessage.innerHTML = message.loading})
					.then(() => {
						// thanksModal.style.display = 'block';
						// mainModal.style.display = 'none';
						statusMessage.innerHTML = message.success;
						setTimeout(removeElement, 3000, elem, statusMessage);
					})
					.catch(() => {statusMessage.innerHTML = message.failure})
					.then(clearInput)

			});
		};

		postDataForm(form, "server.php");


	//contact form

		let contact_form = document.getElementById('form');

		postDataForm(contact_form, "server.php");


	//slider

	let slideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot');

	showSlides(slideIndex);

	function showSlides(index) {
		if (index > slides.length) {
			slideIndex = 1;
		};
		if (index < 1) {
			slideIndex = slides.length;
		};

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		};

		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('dot-active');
		};

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	}

	function moveSlides(n) {
		showSlides(slideIndex += n);
	}

	function chooseSlide(n) {
		showSlides(slideIndex = n);
	}

	prev.addEventListener('click', () => {
		moveSlides(-1);
	});
	next.addEventListener('click', () => {
		moveSlides(1);
	});

	dotsWrap.addEventListener('click', (event) => {
		for (let i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
				chooseSlide(i);
			}
		}
	});


	//calc

	// let persons = document.getElementsByClassName('counter-block-input')[0],
	// 	days = document.getElementsByClassName('counter-block-input')[1],
	// 	place = document.getElementById('select'),
	// 	totalValue = document.getElementById('total'),
	// 	personsSum = 0,
	// 	daysSum = 0,
	// 	total = 0;

	// totalValue.innerHTML = 0;

	// let reg = /\d/; 

	// function countPersonsSum(value) {
	// 	personsSum = +value;
	// 	total = (daysSum + personsSum) * 1000;
	// 	if (days.value == '') {
	// 		totalValue.innerHTML = 0;
	// 	} else {
	// 		totalValue.innerHTML = total;
	// 	}
	// };
	// persons.addEventListener('keypress', function() {
	// 	let tempVal = this.value,
	// 		regResult = tempVal.search(reg);
	// 	if (regResult != -1) {
	// 		countPersonsSum(tempVal);
	// 	} else {
	// 		persons.value = '';
	// 	}
	// });

	// function countDaysSum(value) {
	// 	daysSum = +value;
	// 	total = (daysSum + personsSum) * 1000;
	// 	if (persons.value == '') {
	// 		totalValue.innerHTML = 0;
	// 	} else {
	// 		totalValue.innerHTML = total;
	// 	}
	// };
	// days.addEventListener('keypress', function() {
	// 	let tempVal = this.value,
	// 		regResult = tempVal.search(reg);
	// 	if (regResult != -1) {
	// 		countDaysSum(tempVal);
	// 	} else {
	// 		days.value = '';
	// 	}
	// });

	// place.addEventListener('change', function() {
	// 	if (days.value == '' || persons.value == '') {
	// 		totalValue.innerHTML = 0;
	// 	} else {
	// 		let tempTotal = total; 
	// 		totalValue.innerHTML = tempTotal * this.options[this.selectedIndex].value;
	// 	}
	// });

	let persons = document.getElementsByClassName('counter-block-input')[0],
		days = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalOutput = document.getElementById('total'),
		select = document.querySelector('#select'),
		personsVal = '',
		daysVal = '',
		personsSum = 0,
		daysSum = 0,
		totalSum = 0,
		reg = /[-+\.,e]/i;

	totalOutput.innerHTML = 0;

	persons.addEventListener('keydown', function(event) {
		if (event.keyCode > 47 && event.keyCode < 58 && event.key.search(reg) === -1) {
			personsVal += event.key; 
			personsSum = (+personsVal);
		} else if (event.keyCode == 8) {
			personsVal = personsVal.slice(0, personsVal.length - 1);
			personsSum = +personsVal;
		} else {
			persons.disabled = true;
			persons.disabled = false;
		};
		console.log(event.key);
		console.log(event);
		if (days.value != '') {
			totalSum = (personsSum * 1000) * daysSum;
			totalOutput.innerHTML = totalSum;
		} else {
			totalOutput.innerHTML = 0;
		}
	});
	days.addEventListener('keydown', function(event) {
		if (event.keyCode > 47 && event.keyCode < 58) {
			daysVal += event.key; 
			daysSum = (+daysVal);
		} else if (event.keyCode == 8) {
			daysVal = daysVal.slice(0, daysVal.length - 1);
			daysSum = +daysVal;
		} else {
			days.disabled = true;
			days.disabled = false;
		};
		console.log(event.data);
		console.log(event);
		if (persons.value != '') {
			totalSum = (personsSum * 1000) * daysSum;
			totalOutput.innerHTML = totalSum;
		} else {
			totalOutput.innerHTML = 0;
		}
	});
	select.addEventListener('change', function() {
		if (persons.value == '' || days.value == '') {
			totalOutput.innerHTML = 0;
		} else {
			let tempTotal = totalSum;
			totalOutput.innerHTML = tempTotal * this.options[this.selectedIndex].value;
		}
	});

});