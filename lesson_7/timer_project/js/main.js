window.addEventListener('DOMContentLoaded', function() {

	let timer = document.querySelector('.timer');

	function showTime() {
		let currentDate,
			hours,
			minutes,
			seconds;

		currentDate = new Date();
		hours = check(currentDate.getHours());
		minutes = check(currentDate.getMinutes());
		seconds = check(currentDate.getSeconds());
		timer.innerHTML = `${hours}:${minutes}:${seconds}`;
	};

	function check(num) {
		let tempArr = ('' + num).split(''),
			tempNum = num;
		if (tempArr.length == 1) {
			//tempNum = +( (tempArr.splice(0, 0, '0')).join(''));
			tempArr.unshift('0');
			return tempArr.join('');
		} else {
			return tempNum;
		}
	};

	

	setInterval(showTime, 1000);

});