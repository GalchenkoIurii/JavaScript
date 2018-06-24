class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	createDiv(text) {
		let div = document.createElement('div');
		div.innerHTML = text;
		div.style.cssText = `height:${this.height};width:${this.width};background-color:${this.bg};font-size:${this.fontSize};text-align:${this.textAlign}`;
		document.body.appendChild(div);
	}
}


window.addEventListener('DOMContentLoaded', () => {

	let myDiv = new Options('200px', '400px', 'red', '30px', 'center');

	myDiv.createDiv('this is DIV!!!');

});