// ! открытие модального окна обратной связи по клику на кнопку
let feedback = document.querySelectorAll('.nav-desktop-btn')

feedback.forEach(feedback=>{
	feedback.addEventListener('click', () => {
	document.querySelector('.popup-contact').style.display = 'flex'
	document.body.style.position = 'fixed'
	})
})

// ! закрытие модального окна обратной связи
document
	.querySelector('.popup-contact__close').addEventListener('click', () => {
		document.querySelector('.popup-contact').style.display = 'none'
		document.body.style.position = 'relative'
	})

// Выбор способа связи в "модалке"
let contactCheck = document.querySelectorAll('.input-box__check-type')
let inputBox = document.querySelectorAll('.input-box')

contactCheck.forEach(contactCheck => {
	contactCheck.addEventListener('change', () => {
		if (contactCheck.checked) {
			inputBox.forEach(inputBox => {
				if (inputBox.getAttribute('data-attr') == contactCheck.value) {
					inputBox.classList.add('input-box--active')
				} else {
					inputBox.classList.remove('input-box--active')
				}
			})
		}
	})
})


let num = document.querySelectorAll('.data-input')
num.forEach(num=>console.log('num: ', num.value))

const TOKEN = '6628683979:AAFffs5cT7FnU1lcNuDBsxhdGRnOpo5am3s'
const CHAT_ID = '-1001641584324'
const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`
// Путь к АПИ для отправки сообщения в телеграм

document.querySelector('.popup-contact__form').addEventListener('submit', function(e){
	e.preventDefault()
	// Сброс состояния отправки формы и перехват его в js

	let message = `<b>Сообщение с сайта</b>\n`

	message += `<b>Меня зовут: </b> ${this.name.value}\n`
	// message += `<b>Мои контакты для связи:\n`
	message += `<b>Телефон для связи: </b> ${this.phone.value}\n`
	message += `<b>Электронная почта: </b> ${this.email.value}\n`
	message += `<b>Skype: </b> ${this.skype.value}\n`
	message += `<b>WhatsApp: </b> ${this.whatsApp.value}\n`
	message += `<b>Telegram: </b> ${this.telegram.value}\n`
	message += `<b>Вконтакте: </b> ${this.vk.value}\n`
	message += `<b>Вопрос: </b> ${this.message.value}\n`
	console.log(message);
	// Формирование сообщения

	window.axios.post(URL_API, {
		chat_id: CHAT_ID,
		parse_mode: 'html',
		text: message
	})
	.then((res) =>{
		this.name.value=""
		this.phone.value=""
		this.skype.value=""
		this.whatsApp.value=""
		this.vk.value=""
		this.message.value=""
	})
	.catch((err) =>{
		console.warn(err);
	})
	.finally(() =>{
		console.log('END');
	})
})