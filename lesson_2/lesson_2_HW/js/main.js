
let monthAccount = +prompt("Ваш бюджет на месяц?", "0");
let shopName = prompt("Название Вашего магазина?", "Shop");
let time = 19;

let mainList = {
	account: monthAccount,
	name: shopName,
	shopGoods: [],
	employers: {},
	open: true
};

for (let i = 0; i < 3; i++) {
	let a = prompt("Какой тип товаров будем продавать?", "");
	
	if ( (typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 ) {
		mainList.shopGoods[i] = a;
	} else {
		alert("неверное значение, введите правильное название товара");
		i--;
	}
}


//do while
// let i = 0;
// do {
// 	let a = prompt("Какой тип товаров будем продавать?", "");
	
// 	if ( (typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 ) {
// 		mainList.shopGoods[i] = a;
// 	} else {
//		alert("неверное значение, введите правильное название товара");
//		i--;
//	}
// 	i++;
// } while (i < 3);


//while
// let i = 0;
// while (i < 3) {
// 	let a = prompt("Какой тип товаров будем продавать?", "");
	
// 	if ( (typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 ) {
// 		mainList.shopGoods[i] = a;
// 	} else {
//		alert("неверное значение, введите правильное название товара");
//		i--;
//	}
// 	i++;
// }



if (time < 0) {
	console.log('неправильное время');
} else if (time > 8 && time < 20) {
	console.log('работает');
	} else if (time < 24) {
		console.log('поздно');
		} else {
			console.log('не работает');
		}


alert("бюджет на 1 день = " + monthAccount/30);

console.log(mainList);

