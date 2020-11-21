// Hide banner on scroll
window.addEventListener('scroll', function () {
	const scrollPos = window.scrollY

	const hideMe = document.getElementById('banner-element')

	if (scrollPos > 200) {
		hideMe.classList.add('byeByeBanner')
	} else {
		hideMe.classList.remove('byeByeBanner')
	}
})
