'use strict'

const burger = document.querySelector('.burger')

document.addEventListener('click', e => {
	if (e.target.classList.contains('menu-mobile__link')) {
		burger.checked = false
	}
})
