
var monthAccount = +prompt("Ваш бюджет на месяц?", "0");
//console.log( typeof(monthAccount));
var shopName = prompt("Название Вашего магазина?", "Shop");

var mainList = {
	account: monthAccount,
	name: shopName,
	shopGoods: [],
	employers: {},
	open: true
};

for (var i = 0; i < 3; i++) {
	mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?", "coffee");
}

alert("бюджет на 1 день = " + monthAccount/30);

console.log(mainList.account);
console.log(mainList.name);
console.log(mainList.shopGoods);
console.log(mainList.employers);
console.log(mainList.open);

