function calculate() {
	let persons = document.getElementsByClassName('counter-block-input')[0],
		days = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalOutput = document.getElementById('total'),
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
};

module.exports = calculate;