var num = 33721 + "";
var res = 1;

var tempArr = num.split("");

for (var i = 0; i < tempArr.length; i++) {
	res *= +tempArr[i];
}
//console.log(res); //126

var resPow = Math.pow(res, 3); //2000376

var resPowString = resPow + "";

var firstTwoNumbers = +resPowString.slice(0, 2);

alert(firstTwoNumbers);
