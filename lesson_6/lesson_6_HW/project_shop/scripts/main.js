let openBtn = document.getElementById('open-btn'),
	name_value = document.getElementsByClassName('name-value')[0],
	budget_value = document.getElementsByClassName('budget-value')[0],
	goods_value = document.getElementsByClassName('goods-value')[0],
	items_value = document.getElementsByClassName('items-value')[0],
	employers_value = document.getElementsByClassName('employers-value')[0],
	discount_value = document.getElementsByClassName('discount-value')[0],
	isopen_value = document.getElementsByClassName('isopen-value')[0],
	goods_item = document.getElementsByClassName('goods-item'),
	goods_btn = document.getElementsByTagName('button')[1],
	budget_btn = document.getElementsByTagName('button')[2],
	employers_btn = document.getElementsByTagName('button')[3],
	choose_item = document.querySelector('.choose-item'),
	choose_discount = document.querySelector('.choose-discount-item'),
	time_value = document.querySelector('.time-value'),
	count_budget_value = document.querySelector('.count-budget-value'),
	hire_employers_item = document.querySelectorAll('.hire-employers-item');

let monthAccount,
	shopName;

openBtn.addEventListener('click', () => {
	monthAccount = +prompt("Ваш бюджет на месяц?", "0");

	while (isNaN(monthAccount) || monthAccount == "" || monthAccount == null) {
		monthAccount = +prompt("Ваш бюджет на месяц?", "0");
	}

	for (let i = 0; i < 1; i++) {
		shopName = prompt("Название Вашего магазина?", "Shop").toUpperCase();
		let test = testOnNumbers(shopName);
		
		if ( (typeof(shopName)) === 'string' && (typeof(shopName)) != null && shopName != '' && shopName.length < 50 && test == false ) {
			continue;
		} else {
			alert("неверное значение, введите правильное название магазина");
			i--;
		}
	}

	budget_value.textContent = monthAccount;

	name_value.textContent = shopName.toUpperCase();

	budget_btn.disabled = false;
});


goods_item[0].addEventListener('change', () => {
	goods_btn.disabled = false;
});

hire_employers_item[0].addEventListener('change', () => {
	employers_btn.disabled = false;
});


goods_btn.addEventListener('click', () => {

	for (let i = 0; i < goods_item.length; i++) {
		let a = goods_item[i].value;
		
		if ( (typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50) {
			mainList.shopGoods[i] = a;
			goods_value.textContent = mainList.shopGoods;
		} else {
				i--;
			}
		}
});

choose_item.addEventListener('change', () => {
	let items = choose_item.value;

	if (isNaN(items) && items !='') {
		mainList.shopItems = items.split(', ');
		mainList.shopItems.sort();
		items_value.textContent = mainList.shopItems;
	}
});

choose_discount.addEventListener('change', () => {
	let discount = choose_discount.value;
	if (typeof(discount) != null && discount != '') {
		discount_value.style.backgroundColor = 'green';
	} else {
		discount_value.style.backgroundColor = 'red';
	}
});

time_value.addEventListener('change', () => {
	let time = time_value.value;

	if (time < 0) {
			console.log('неправильное время');
			mainList.open = false;
		} else if (time > 8 && time < 20) {
			console.log('работает');
			mainList.open = true;
			} else if (time < 24 && time > 20) {
				console.log('поздно');
				mainList.open = false;
				} else {
					console.log('не работает');
					mainList.open = false;
				};

	if (mainList.open == true) {
		isopen_value.style.backgroundColor = 'green';
	} else {
		isopen_value.style.backgroundColor = 'red';
	}
});


budget_btn.addEventListener('click', () => {
	count_budget_value.value = monthAccount / 30;
});

employers_btn.addEventListener('click', () => {
	for (let i = 0; i < hire_employers_item.length; i++) {
			let name = hire_employers_item[i].value,
				test = testOnNumbers(name);

			if ( (typeof(name)) === 'string' && (typeof(name)) != null && name != '' && name.length < 50 && test == false) {
				mainList.employers[i] = name;
			} 
		employers_value.textContent += mainList.employers[i] + ', ';
	};
});


let mainList = {
	account: monthAccount,
	name: shopName,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],

	getDiscount: function getDiscount(discount) {
		if (discount === true) {
			return price - ((price / 10) * 2);
		} else {
			return price;
		}
	}
};



function testOnNumbers(str) {
	let test = true;

		if (str !== null) {
			let i = 0;
			do {
				if ( !isNaN(str[i]) && str[i] !== ' ') {
					test = true;
					break;
				} else {
					test = false;
				}
				i++;
			} while (i < str.length);

			// for (let i = 0; i < str.length; i++) {
			// 	if ( !isNaN(str[i]) && str[i] !== ' ') {
			// 		test = true;
			// 		break;
			// 	} else {
			// 		test = false;
			// 	}
			// }

			return test;
		} else {
			
			return true;
		}
		
};



