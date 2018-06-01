
let monthAccount,
	shopName,
	time,
	price = 100;

function start() {
	monthAccount = +prompt("Ваш бюджет на месяц?", "0");

	while (isNaN(monthAccount) || monthAccount == "" || monthAccount == null) {
		monthAccount = +prompt("Ваш бюджет на месяц?", "0");
	}

	shopName = prompt("Название Вашего магазина?", "Shop").toUpperCase();
	time = 19;
}
start();

let mainList = {
	account: monthAccount,
	name: shopName,
	shopGoods: [],
	employers: {},
	open: 0,
	discount: false
};

function chooseGoods() {
	for (let i = 0; i < 3; i++) {
		let a = prompt("Какой тип товаров будем продавать?", "");
		
		if ( (typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
			mainList.shopGoods[i] = a;
		} else {
			alert("неверное значение, введите правильное название товара");
			i--;
		}
	}
}
chooseGoods();

function workTime(time) {
	if (time < 0) {
		console.log('неправильное время');
	} else if (time > 8 && time < 20) {
		console.log('работает');
		} else if (time < 24) {
			console.log('поздно');
			} else {
				console.log('не работает');
			}
}
workTime();

function getDayAccount() {
	return monthAccount / 30;
}
alert("бюджет на 1 день = " + getDayAccount() );

function getDiscount(discount) {
	if (discount === true) {
		return price - ((price / 10) * 2);
	} else {
		return price;
	}
}
//console.log(getDiscount(true));

function toEmploy() {
	for (let i = 0; i < 4; i++) {
		let a = prompt("введите имя сотрудника", "no name");

		if ( (typeof(a)) === 'string' && (typeof(a)) != null && a !== 'no name' && a != '' && a.length < 50 ) {
			mainList.employers[i] = (i + 1) + '-' + a;
		} else {
			alert("неверное значение, введите правильное имя");
			i--;
		}
	}
}
toEmploy();

console.log(mainList);

