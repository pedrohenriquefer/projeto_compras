// app.js

document.addEventListener('DOMContentLoaded', function () {
    const productsContainer = document.getElementById('products-container');
    let products = [];

    // Fetch dos produtos
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            products = data; // Armazena os produtos
            renderProducts(products); // Renderiza todos os produtos
        });

    // Função para renderizar produtos
    function renderProducts(products) {
        productsContainer.innerHTML = ''; // Limpa produtos anteriores
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.title}" />
                <h3>${product.title}</h3>
                <p>Preço: R$ ${(product.price * 5.42).toFixed(2)}</p>
                <button data-id="${product.id}" class="add-to-cart">Adicionar ao Carrinho</button>
            `;
            productsContainer.appendChild(productDiv);
        });

        // Adicionar evento para o botão de adicionar ao carrinho
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', addToCart);
        });
    }

    // Função de busca
    function buscarProdutos() {
        const query = document.getElementById('buscar').value.toLowerCase();
        const produtosFiltrados = products.filter(product => 
            product.title.toLowerCase().includes(query)
        );
        renderProducts(produtosFiltrados);
    }

    // Adicionar event listener ao botão de buscar
    document.querySelector('button').addEventListener('click', buscarProdutos);

    // Adicionar event listener ao campo de busca para buscar ao pressionar Enter
    document.getElementById('buscar').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            buscarProdutos();
        }
    });
});

document.getElementById('checkout-button').addEventListener('click', function () {
    alert('Pedido confirmado! Notificação enviada.');
    localStorage.removeItem('cart');
    updateCartSummary();
});