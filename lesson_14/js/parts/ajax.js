function ajax() {
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с Вами свяжемся";
	message.failure = "Что-то пошло не так...";

	let form = document.getElementsByClassName('main-form')[0],
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

		function postDataForm(elem, url) {
			elem.addEventListener('submit', (event) => {
				event.preventDefault();
				elem.appendChild(statusMessage);
				let formData = new FormData(elem);

				function postData(data) {
					return new Promise((resolve, reject) => {
						let request = new XMLHttpRequest();
						request.open("POST", url);
						request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
						request.onreadystatechange = () => {
							if (request.readyState < 4) {
								resolve();
							} else if (request.readyState === 4) {
								if (request.status == 200 && request.status < 300) {
									resolve();
								} else {
									reject();
								}
							}
						};
						request.send(data);
					});
				};

				function clearInput() {
					let input = elem.getElementsByTagName('input');
					for (let i = 0; i < input.length; i++) {
		 				input[i].value = '';
		 			};
				};

				function removeElement(parent, element) {
					parent.removeChild(element);
				};

				postData(formData)
					.then(() => {statusMessage.innerHTML = message.loading})
					.then(() => {
						// thanksModal.style.display = 'block';
						// mainModal.style.display = 'none';
						statusMessage.innerHTML = message.success;
						setTimeout(removeElement, 3000, elem, statusMessage);
					})
					.catch(() => {statusMessage.innerHTML = message.failure})
					.then(clearInput)

			});
		};

		postDataForm(form, "server.php");


	//contact form

		let contact_form = document.getElementById('form');

		postDataForm(contact_form, "server.php");

};

module.exports = ajax;