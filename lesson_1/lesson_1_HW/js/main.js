var monthAccount,
	shopName;

monthAccount = +prompt("Ваш бюджет на месяц?");
//console.log( typeof(monthAccount));
shopName = prompt("Название Вашего магазина?");

var mainList = {};
mainList.account = monthAccount;
mainList.name = shopName;
mainList.shopGoods = [];
mainList.employers = {};
mainList.open = true;

for (var i = 0; i < 3; i++) {
	mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?");
}

alert("бюджет на 1 день = " + monthAccount/30);

// console.log(mainList.account);
// console.log(mainList.name);
// console.log(mainList.shopGoods);
// console.log(mainList.employers);
// console.log(mainList.open);

