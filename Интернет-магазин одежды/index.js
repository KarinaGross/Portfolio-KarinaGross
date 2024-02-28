async function fetchDataFromCatalog() {
    try {
        let data = JSON.parse(localStorage.getItem('products'));

        if (!data) {
            const response = await fetch('catalogData.json');

            if (!response.ok) {
                throw new Error('Не удалось обработать catalogData.json');
            }

            data = await response.json();

            localStorage.setItem('products', JSON.stringify(data)); // сохраняем данные в localStorage
        }

        const productBox = document.querySelector('.item-flex');

        data.forEach(item => {
            const productEl = `
            <div class="items" id="${item.id}">
                <a class="item-link" href="#34">
                    <img class="item-link__pic" src="${item.image}" alt="товар">
                    <div class="txt-box">
                        <p class="item-link__title">${item.name}</p>
                        <p class="item-link__text">${item.description}</p>
                        <p class="item-link__price">$${item.price}</p>
                    </div>
                </a>
                <div class="add-box">
                    <a class="item-btn" href="#12">
                        <img src="../img/cart-add.svg" alt="cart">
                        <p class="item-btn__txt">Add to Cart </p>
                    </a>
                </div>
            </div>
            `;
            productBox.insertAdjacentHTML('beforeend', productEl);

        });
    } catch (error) {
        console.error(error)
    }
};

fetchDataFromCatalog();


document.querySelector('.item-flex').addEventListener('click', (event) => {
    if (!event.target.closest('.item-btn')) {
        return;
    }

    const productEl = event.target.closest('.items');

    addToCart(productEl.id);
})


function addToCart(productId) {
    let products = JSON.parse(localStorage.getItem('products'));

    // Находим товар по ID
    let product = products.find(p => p.id === productId);
    if (product && product.amountInCatalog > 0) {
        product.addedToCart = true;
        product.amountInCatalog -= 1;
        product.amountInCart += 1;

        // Сохраняем обновленные данные обратно в localStorage
        localStorage.setItem('products', JSON.stringify(products));
    }
}

