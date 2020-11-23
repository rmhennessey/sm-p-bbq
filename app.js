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

// Tooltip functionality
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

// Add Pizza Toppings

let ingredients = []

function clearToppings() {
	ingredients = []
	document.getElementById('bigToppings').style.backgroundImage = 'none'
}

function addPepperoni() {
	// document.getElementById('bigToppings').style.backgroundImage =
	// 	"url('./assets/byo_pepperoni.png')"
	ingredients.push(`url('./assets/byo_pepperoni.png')`)
	console.log(ingredients)
	document.getElementById('bigToppings').style.backgroundImage = ingredients
}

function addCheese() {
	// document.getElementById('bigToppings').style.backgroundImage =
	// 	"url('./assets/byo_cheese.png'), url('./assets/byo_pepperoni.png')"
	ingredients.push(`url('./assets/byo_cheese.png')`)
	console.log(ingredients)
	document.getElementById('bigToppings').style.backgroundImage = ingredients
}

// document.getElementById("myDiv").style.backgroundImage = "url('img_tree.png')";
