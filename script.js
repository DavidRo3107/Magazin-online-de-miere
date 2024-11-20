// Coșul de cumpărături
let cart = [];

// Funcție pentru adăugarea în coș
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

// Actualizarea vizuală a coșului
function updateCart() {
    const cartItemsDiv = document.getElementById("cart-items");
    const orderForm = document.getElementById("order-form");

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>Coșul tău este gol.</p>";
        orderForm.style.display = "none";
    } else {
        cartItemsDiv.innerHTML = cart.map(item => `<p>${item.name} - ${item.price} RON</p>`).join("");
        document.getElementById("cart-data").value = JSON.stringify(cart);
        orderForm.style.display = "block";
    }
}