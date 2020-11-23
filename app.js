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

function addAnchovies() {
	ingredients.push(`url('./assets/byo_anchovies.png')`)
	console.log(ingredients)
	document.getElementById('bigToppings').style.backgroundImage = ingredients
}

function addBacon() {
	ingredients.push(`url('./assets/byo_bacon.png')`)
	console.log(ingredients)
	document.getElementById('bigToppings').style.backgroundImage = ingredients
}

function addBroccoli() {
	ingredients.push(`url('./assets/byo_broccoli.png')`)
	console.log(ingredients)
	document.getElementById('bigToppings').style.backgroundImage = ingredients
}

function addCheese() {
	ingredients.push(`url('./assets/byo_cheese.png')`)
	console.log(ingredients)
	document.getElementById('bigToppings').style.backgroundImage = ingredients
}

function addCherryPeppers() {
	ingredients.push(`url('./assets/byo_cherry_peppers.png')`)
	console.log(ingredients)
	document.getElementById('bigToppings').style.backgroundImage = ingredients
}

function addChicken() {
	ingredients.push(`url('./assets/byo_chicken.png')`)
	console.log(ingredients)
	document.getElementById('bigToppings').style.backgroundImage = ingredients
}

function addGarlic() {
	ingredients.push(`url('./assets/byo_garlic.png')`)
	console.log(ingredients)
	document.getElementById('bigToppings').style.backgroundImage = ingredients
}

function addMushrooms() {
	ingredients.push(`url('./assets/byo_mushrooms.png')`)
	console.log(ingredients)
	document.getElementById('bigToppings').style.backgroundImage = ingredients
}

function addOnions() {
	ingredients.push(`url('./assets/byo_onions.png')`)
	console.log(ingredients)
	document.getElementById('bigToppings').style.backgroundImage = ingredients
}

function addPepperoni() {
	ingredients.push(`url('./assets/byo_pepperoni.png')`)
	console.log(ingredients)
	document.getElementById('bigToppings').style.backgroundImage = ingredients
}

function addPeppers() {
	ingredients.push(`url('./assets/byo_peppers.png')`)
	console.log(ingredients)
	document.getElementById('bigToppings').style.backgroundImage = ingredients
}

function addProsciutto() {
	ingredients.push(`url('./assets/byo_prosciutto.png')`)
	console.log(ingredients)
	document.getElementById('bigToppings').style.backgroundImage = ingredients
}

function addSausage() {
	ingredients.push(`url('./assets/byo_sausage.png')`)
	console.log(ingredients)
	document.getElementById('bigToppings').style.backgroundImage = ingredients
}

function addShrimp() {
	ingredients.push(`url('./assets/byo_shrimp.png')`)
	console.log(ingredients)
	document.getElementById('bigToppings').style.backgroundImage = ingredients
}

function addSoppresatta() {
	ingredients.push(`url('./assets/byo_soppresatta.png')`)
	console.log(ingredients)
	document.getElementById('bigToppings').style.backgroundImage = ingredients
}

function addSpinach() {
	ingredients.push(`url('./assets/byo_spinach.png')`)
	console.log(ingredients)
	document.getElementById('bigToppings').style.backgroundImage = ingredients
}
