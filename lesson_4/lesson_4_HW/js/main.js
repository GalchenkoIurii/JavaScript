
let monthAccount,
	shopName,
	time,
	price = 100;

function start() {
	monthAccount = +prompt("Ваш бюджет на месяц?", "0");

	while (isNaN(monthAccount) || monthAccount == "" || monthAccount == null) {
		monthAccount = +prompt("Ваш бюджет на месяц?", "0");
	}

	for (let i = 0; i < 1; i++) {
		shopName = prompt("Название Вашего магазина?", "Shop");
		let test = testOnNumbers(shopName);
		
		if ( (typeof(shopName)) === 'string' && (typeof(shopName)) != null && shopName != '' && shopName.length < 50 && test == false ) {
			continue;
		} else {
			alert("неверное значение, введите правильное название магазина");
			i--;
		}
	}
	
	time = new Date().getHours();
	console.log(time);
}
start();

let mainList = {
	account: monthAccount,
	name: shopName.toUpperCase(),
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],

	chooseGoods: function chooseGoods() {
	for (let i = 0; i < 3; i++) {
		let a = prompt("Какой тип товаров будем продавать?", ""),
			test = testOnNumbers(a);
		
		if ( (typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 && test == false) {
			mainList.shopGoods[i] = a;
		} else {
				alert("неверное значение, введите правильное название товара");
				i--;
			}
		}
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log('неправильное время');
		} else if (time > 8 && time < 20) {
			console.log('работает');
			mainList.open = true;
			} else if (time < 24 && time > 20) {
				console.log('поздно');
				} else {
					console.log('не работает');
				}
	},
	getDayAccount: function getDayAccount() {
		return monthAccount / 30;
	},
	getDiscount: function getDiscount(discount) {
		if (discount === true) {
			return price - ((price / 10) * 2);
		} else {
			return price;
		}
	},
	toEmploy: function toEmploy() {
		for (let i = 0; i < 4; i++) {
			let a = prompt("введите имя сотрудника", "no name"),
				test = testOnNumbers(a);

			if ( (typeof(a)) === 'string' && (typeof(a)) != null && a !== 'no name' && a != '' && a.length < 50 && test == false) {
				mainList.employers[i] = (i + 1) + '-' + a;
			} else {
				alert("неверное значение, введите правильное имя");
				i--;
			}
		}
	},
	chooseShopItems: function chooseShopItems() {
		for (let i = 0; i < 1; i++) {
			let items = prompt("перечислите товары через запятую", "");
			if (typeof items === "string" && typeof items != null && items != "") {
				mainList.shopItems = items.split(",");
				for (let j = 0; j < 1; j++) {
					let tempItems = prompt("добавьте еще ", "");
					if (typeof tempItems === "string" && typeof tempItems != null) {
						mainList.shopItems = mainList.shopItems.concat( tempItems.split(",") );
					} else {
						alert("неверное значение, введите правильное значение");
						j--;
					}
				};
				console.log(mainList.shopItems);
			} else {
				alert("неверное значение, введите правильное значение");
				i--;
			}
		};
		for (let i = 0; i < mainList.shopItems.length; i++) {
			let test = testOnNumbers(mainList.shopItems[i]);
			if (mainList.shopItems[i] === '' || mainList.shopItems[i] === undefined || mainList.shopItems[i] === ' ' || test == true) {
				mainList.shopItems.splice(i, 1);
				i--;
			}
		}
		mainList.shopItems.sort();
	},
	showShopItems: function showShopItems() {
		document.write("<p>У нас вы можете купить:</p>");
		mainList.shopItems.forEach(function(item, i, shopItems){
			document.write("<p>" + (i + 1) + " " + item + "</p>");
		});
	}
};

function testOnNumbers(str) {
		let test = true;

		if (str != null) {
			for (let i = 0; i < str.length; i++) {
				if ( !isNaN(str[i]) && str[i] !== ' ') {
					test = true;
					break;
				} else {
					test = false;
				}
			}

			return test;
		} else {
			
			return true;
		}
		
	};

//mainList.chooseGoods();
mainList.workTime(time);
//alert("бюджет на 1 день = " + mainList.getDayAccount() );
//console.log(mainList.getDiscount(true));
//mainList.toEmploy();
mainList.chooseShopItems();
mainList.showShopItems();
for (let key in mainList) {
	console.log("наш магазин включает в себя: " + key);
};

console.log(mainList);


































