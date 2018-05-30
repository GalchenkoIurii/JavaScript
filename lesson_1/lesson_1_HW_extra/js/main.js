var num = 33721 + "";
var res = 1;

var tempArr = num.split("");

for (var i = 0; i < tempArr.length; i++) {
	res *= +tempArr[i];
}
//console.log(res); //126

//var resPowString = Math.pow(res, 3) + "";
//var firstTwoNumbers = +resPowString.slice(0, 2);

alert( +(Math.pow(res, 3) + "").slice(0, 2) );
