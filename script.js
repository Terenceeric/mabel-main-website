// Retrieve cart from local storage
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartContainer = document.querySelector('.cart');
let totalElement = document.querySelector('#checkout p:nth-of-type(2)');

// If there are items in the cart, display them
if (cart.length > 0) {
  cartContainer.innerHTML = cart.map(item => `
    <p>${item.item} - ${item.price}</p>
  `).join(''); // Generate HTML for each item
} else {
  cartContainer.innerHTML = '<p>No items in your cart.</p>'; // Show empty cart message
}

// Calculate and display the total
const total = cart.reduce((sum, item) => {
  const price = parseFloat(item.price.replace('$', '').trim()); // Remove '$' and convert to a number
  return sum + (isNaN(price) ? 0 : price); // Handle invalid price formats gracefully
}, 0);

// Update the total on the page
totalElement.innerText = `Total: $${total.toFixed(2)}`;

// Add functionality for the "Proceed to Payment" button
const proceedButton = document.querySelector('.btn');
proceedButton.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty! Add some items before proceeding.');
  } else {
    alert('Redirecting to payment gateway...');
    // Redirect logic can go here
    // Example: window.location.href = "payment.html";
  }
});
