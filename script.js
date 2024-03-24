'use strict';

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

/* new code */
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

/* new code */
function openPopup_cp() {
  document.getElementById("popup-cp").style.display = "block";
}

function closePopup_cp() {
  document.getElementById("popup-cp").style.display = "none";
}


menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}

/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}

/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {
  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }
});

// Create an empty array to store the cart items
var cartItems = [];

// Get all the "add to cart" buttons
var addToCartButtons = document.querySelectorAll('.add-to-cart');

// Attach a click event listener to each button
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the item information from the button's data attributes
    var itemId = button.dataset.itemId;
    var itemName = button.dataset.itemName;
    var itemPrice = button.dataset.itemPrice;

    // Create an object to represent the item
    var item = {
      id: itemId,
      name: itemName,
      price: itemPrice,
      quantity: 1
    };

    // Check if the item is already in the cart
    var existingItem = cartItems.find(function(cartItem) {
      return cartItem.id === itemId;
    });

    if (existingItem) {
      // If the item is already in the cart, increase its quantity
      existingItem.quantity++;
    } else {
      // If the item is not in the cart, add it to the cart
      cartItems.push(item);
    }

    // Show a success message
    console.log('Item added to cart:', itemName);
  });
});

// Get the "cart" button
var cartButton = document.querySelector('.cart');

// Attach a click event listener to the "cart" button
cartButton.addEventListener('click', function() {
  // Get the popup element
  var popup = document.getElementById('popup');

  // Get the popup content element
  var popupContent = document.querySelector('.popup-content');

  // Get the close popup button
  var closePopupButton = document.querySelector('.close-popup');

  // Get the cart items table
  var cartItemsTable = document.querySelector('.cart-items');

  // Get the total price element
  var totalPriceElement = document.querySelector('.total-price');

  // Clear the cart items table
  cartItemsTable.innerHTML = '';

  // Calculate the total price of the cart
  var totalPrice = 0;

  // Display the cart items in the table
  cartItems.forEach(function(item) {
    // Create a table row element
    var row = document.createElement('tr');

    // Create table cells for the item name, price, and quantity
    var nameCell = document.createElement('td');
    nameCell.textContent = item.name;

    var priceCell = document.createElement('td');
    priceCell.textContent = 'Rs.' + item.price;

    var quantityCell = document.createElement('td');
    quantityCell.textContent = item.quantity;

    // Append the cells to the row
    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(quantityCell);

    // Append the row to the cart items table
    cartItemsTable.appendChild(row);

    // Calculate the total price of the cart
    totalPrice += item.price * item.quantity;
  });

  // Display the total price
  totalPriceElement.textContent = 'Total Price: Rs.' + totalPrice.toFixed(2);

  // Show the popup
  popup.style.display = 'block';
});

// Get the close popup button
var closePopupButton = document.querySelector('.close-popup');

// Attach a click event listener to the close popup button
closePopupButton.addEventListener('click', function() {
  // Get the popup element
  var popup = document.getElementById('popup');

  // Hide the popup
  popup.style.display = 'none';
});

// Get the "Pay Now" button
var payNowButton = document.querySelector('.pay-now');

// Attach a click event listener to the "Pay Now" button
payNowButton.addEventListener('click', function() {
  // Redirect to the external HTML document
  window.location.href = 'checkout.html';
});

const addToCartButton = document.querySelector('.add-to-cart');
const peekAnimation = document.querySelector('.peek-animation');

addToCartButton.addEventListener('click', () => {
  peekAnimation.style.display = 'block';
  peekAnimation.classList.remove('peek-animation'); // Remove the animation class
  void peekAnimation.offsetWidth; // Trigger reflow to reset the animation
  peekAnimation.classList.add('peek-animation'); // Add the animation class

  setTimeout(() => {
    peekAnimation.style.opacity = '0';
    peekAnimation.addEventListener('transitionend', () => {
      peekAnimation.style.display = 'none';
      peekAnimation.style.opacity = '1'; // Reset the opacity
    }, { once: true }); // Hide the element after the fade out transition ends
  }, 1000); // Change the duration (in milliseconds) as per your requirement
});
