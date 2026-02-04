// Display cart items
function displayCart() {
    const cartItems = document.getElementById('cartItems');
    
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty</p>
                <a href="products.html" class="btn btn-primary">Continue Shopping</a>
            </div>
        `;
        updateCartSummary();
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>Rs.${item.price.toFixed(2)} each</p>
            </div>
            <div class="item-quantity">
                <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <div class="item-price">Rs.${(item.price * item.quantity).toFixed(2)}</div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">✕</button>
        </div>
    `).join('');
    
    updateCartSummary();
}

// Update cart summary
function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 10 : 0;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;
    
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');
    
    if (subtotalEl) subtotalEl.textContent = 'Rs.' + subtotal.toFixed(2);
    if (shippingEl) shippingEl.textContent = 'Rs.' + shipping.toFixed(2);
    if (taxEl) taxEl.textContent = 'Rs.' + tax.toFixed(2);
    if (totalEl) totalEl.textContent = 'Rs.' + total.toFixed(2);
}

// Initialize cart page
document.addEventListener('DOMContentLoaded', function() {
    displayCart();
});


function checkOut() {
  document.getElementById('checkoutModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('checkoutModal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('checkoutModal');
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('paymentForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Payment processed successfully!");
    closeModal();
  });
});


//Cart New
function checkOut() {
  document.getElementById("paymentModal").style.display = "flex";
}

function closePaymentModal() {
  document.getElementById("paymentModal").style.display = "none";
}

// Close when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById("paymentModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Show green check when input has value
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.card-form input').forEach(input => {
    input.addEventListener('input', () => {
      const icon = input.parentElement.querySelector('.valid-icon');
      if (icon) {
        icon.style.visibility = input.value.length > 0 ? 'visible' : 'hidden';
      }
    });
  });
});
