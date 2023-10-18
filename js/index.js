// Write your Pizza Builder JavaScript in this file.

// DOM
// let btnMushroomsNode = document.querySelector("btn btn-mushrooms")
let btnMushroomsNode = document.querySelector('.btn-mushrooms');
let btnGreenPeppersNode = document.querySelector('.btn-green-peppers');
let btnSauceNode = document.querySelector('.btn-sauce');
let btnCrustNode = document.querySelector('.btn-crust');
let sauceNode = document.querySelector('.sauce');
let crustNode = document.querySelector('.crust');
let buttonsNodes = document.querySelectorAll('.btn');
let pricesNodes = document.querySelectorAll('.price ul li');
let totalPricesNode = document.querySelector('.price strong');

console.log(totalPricesNode);
console.log(crustNode);
// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((oneSauce) => {
    if (state.whiteSauce) {
      sauceNode.classList.add('sauce-white');
    } else {
      sauceNode.classList.remove('sauce-white');
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((oneCrust) => {
    if (state.glutenFreeCrust) {
      crustNode.classList.add('crust-gluten-free');
    } else {
      crustNode.classList.remove('crust-gluten-free');
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperoni) {
    buttonsNodes[0].classList.add('active');
  }
  if (!state.pepperoni) {
    buttonsNodes[0].classList.remove('active');
  }
  if (state.mushrooms) {
    buttonsNodes[1].classList.add('active');
  }
  if (!state.mushrooms) {
    buttonsNodes[1].classList.remove('active');
  }
  if (state.greenPeppers) {
    buttonsNodes[2].classList.add('active');
  }
  if (!state.greenPeppers) {
    buttonsNodes[2].classList.remove('active');
  }
  if (state.whiteSauce) {
    buttonsNodes[3].classList.add('active');
  }
  if (!state.whiteSauce) {
    buttonsNodes[3].classList.remove('active');
  }
  if (state.glutenFreeCrust) {
    buttonsNodes[4].classList.add('active');
  }
  if (!state.glutenFreeCrust) {
    buttonsNodes[4].classList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  pricesNodes.forEach((elm, key) => {
    if (buttonsNodes[key].classList.contains('active')) {
      elm.style.visibility = 'visible';
    } else {
      elm.style.visibility = 'hidden';
    }
  });
  
  let totalPrices = 10;

  buttonsNodes.forEach((elm, k) => {
    if(elm.classList.contains('active')){
      // totalPrices += ingredients[elm.innerText][price]
      totalPrices -= - pricesNodes[k].innerText[1]

      // console.log(ingredients[elm.innerText].price);
      ////PREGUNTAR PORQUE NO FUNCIONA*******************************************************************************
      // console.log(ingredients[elm.innerText]);
      console.log(pricesNodes[k].innerText[1]);
      console.log(totalPrices);


    }
  })
  // ingredients.forEach((elm, i) =>{
  //   if (buttonsNodes[i].classList.contains('active')){
  //   totalPrices += elm.price }  }   )
  totalPricesNode.innerText = `$${totalPrices}`


}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
btnMushroomsNode.addEventListener(`click`, function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
btnGreenPeppersNode.addEventListener(`click`, function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
btnSauceNode.addEventListener(`click`, function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
btnCrustNode.addEventListener(`click`, function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
