// Hide banner + Open Pizza btn on scroll
window.addEventListener('scroll', function () {
	const scrollPos = window.scrollY

	const hideMe = document.getElementById('banner-element')

	const showFob = document.getElementById('email-button')

	if (scrollPos > 200) {
		hideMe.classList.add('byeByeBanner')
		showFob.classList.remove('email-button-hidden')
		showFob.classList.add('email-button-show')
	} else {
		hideMe.classList.remove('byeByeBanner')
		showFob.classList.remove('email-button-show')
		showFob.classList.add('email-button-hidden')
	}
})

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})
