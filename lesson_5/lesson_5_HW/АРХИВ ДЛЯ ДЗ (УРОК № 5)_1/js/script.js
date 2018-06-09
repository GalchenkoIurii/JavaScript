let menuItems = document.querySelectorAll('.menu-item'),
	menu = document.querySelector('.menu'),
	newLi = document.createElement('li'),
	title = document.querySelector('.title'),
	adv = document.querySelector('.adv'),
	column = document.querySelectorAll('.column'),
	prom = document.querySelector('.prompt');

menu.insertBefore(menuItems[2], menuItems[1]);
newLi.innerHTML = 'Пятый пункт';
newLi.classList.add('menu-item');
menu.appendChild(newLi);

document.body.style.backgroundImage = 'url("img/apple_true.jpg")';

title.innerHTML = 'Мы продаем только подлинную технику Apple';

column[1].removeChild(adv);

prom.textContent = prompt('Ваше отношение к технике apple?', 'good');
