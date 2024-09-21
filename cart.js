function addToCart(event) {
    const productId = event.target.dataset.id;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Verificar se o produto já está no carrinho
    const productInCart = cart.find(item => item.id === productId);
    if (productInCart) {
        productInCart.quantity++;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Produto adicionado ao carrinho!');
    updateCartSummary();
}

function updateCartSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartTotal = 0;

    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const productItem = document.createElement('p');
        productItem.innerText = `Produto ID: ${item.id}, Quantidade: ${item.quantity}`;
        cartItemsContainer.appendChild(productItem);

        // Aqui você pode buscar os detalhes do produto pela FakeStoreAPI se necessário
        cartTotal += item.quantity * 10; // Substitua 10 pelo preço real da API
    });

    document.getElementById('cart-total').innerText = cartTotal;
}

document.getElementById('checkout-button').addEventListener('click', function () {
    alert('Pedido confirmado! Notificação enviada.');
    localStorage.removeItem('cart');
    updateCartSummary();
});
