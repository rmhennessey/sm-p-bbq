const hideBanner = document.getElementById('main-nav')

const scrollPos = window.scrollY

function hiddenBanner() {
	const hideMe = document.getElementById('banner-element')
	hideMe.classList.add('byeByeBanner')
}

if (scrollPos > 60) {
	hiddenBanner()
	// console.log('hitting')
}
