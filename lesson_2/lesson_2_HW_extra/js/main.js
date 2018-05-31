let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

let currentDay = ( new Date() ).getDay() - 1;

for (let i = 0; i < week.length; i++) {
	document.write(week[i] + ' ');
}

for (let i = 0; i < week.length; i++) {
	if (i === 5 || i === 6) {
		document.write('<p style="font-weight:bold">' + week[i] + '</p>');
	} else if (i === currentDay) {
		document.write('<p style="font-style:italic">' + week[i] + '</p>');
	} else {
		document.write('<p>' + week[i] + '</p>')
	}
	
}


//---------------------------------------------------------


let arr = [];

for (let i = 0; i < 7; i++) {
	arr[i] = Math.round( Math.random() * 10000 ) + '';
}
console.log(arr);

for (let j = 0; j < arr.length; j++) {
	let tempArr = ( arr[j].split('') );
	
	if (tempArr[0] === '3' || tempArr[0] === '7') {
		console.log(arr[j]);
	}
	
}





