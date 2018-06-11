let openBtn = document.getElementById('open-btn'),
	mainInfo = document.getElementsByClassName('.main-info'),
	mainInfoName = document.getElementsByClassName('.name'),
	name_value = document.getElementsByClassName('name-value')[0],
	mainInfoBudget = document.getElementsByClassName('.budget'),
	budget_value = document.getElementsByClassName('budget-value')[0],
	mainInfoGoods = document.getElementsByClassName('.goods'),
	mainInfoGoodsValue = document.getElementsByClassName('.goods-value')[0],
	mainInfoItems = document.getElementsByClassName('.items'),
	mainInfoItemsValue = document.getElementsByClassName('.items-value')[0],
	mainInfoEmployers = document.getElementsByClassName('.employers'),
	mainInfoEmployersValue = document.getElementsByClassName('.employers-value')[0],
	mainInfoDiscount = document.getElementsByClassName('.discount'),
	mainInfoDiscountValue = document.getElementsByClassName('.discount-value')[0],
	mainInfoIsOpen = document.getElementsByClassName('.isopen'),
	mainInfoIsOpenValue = document.getElementsByClassName('.isopen-value')[0],
	goodsItems = document.getElementsByClassName('.goods-item'),
	goods_btn = document.getElementsByTagName('button')[1],
	budget_btn = document.getElementsByTagName('button')[2],
	employers_btn = document.getElementsByTagName('button')[3],
	chooseItems = document.querySelector('.choose-item'),
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
});


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



