
window.addEventListener('DOMContentLoaded', () => {

	let tab = require('../parts/tab.js');
	let slider = require('../parts/slider.js');
	let modal = require('../parts/modal.js');
	let ajax = require('../parts/ajax.js');
	let calculate = require('../parts/calculate.js');
	let timer = require('../parts/timer.js');

	tab();
	slider();
	modal();
	ajax();
	calculate();
	timer();

	

//timer

//modal

//form

	//slider

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

	

});