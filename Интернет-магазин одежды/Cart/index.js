let products = JSON.parse(localStorage.getItem('products'));

const cartBox = document.querySelector('.products');

function createProductElement(productId) {
    const item = products.find(p => p.id === productId);
    return `
            <div class="product" id="product-${item.id}">
                <img class="product__img" src="${item.image}" alt="product">
                <div class="product-box">
                    <a href="../Product/index.html" class="product-box__title">${item.name}</a>
                    <div class="product-box__text">
                        <p>Price: <span class="product-box__text_price">$${item.price}</span></p>
                        <p>Color: <span class="product-box__text_details">White</span></p>
                        <p>Size: <span class="product-box__text_details">M</span></p>
                        <p>Quantity: <input type="number" min="1" max="10"
                                            class="product-box__text_details product-box__text_amount" value="${item.amountInCart}"></input>
                        </p>
                    </div>
                </div>

                <div class="product__cross">
                    <svg class="char-cross" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                                        fill="#575757" />
                    </svg>
                </div>
            </div>
            `
}

function displayDataToCart() {
    products.filter(item => item.addedToCart).forEach(product => {
        cartBox.insertAdjacentHTML('beforeend', createProductElement(product.id));
    });
}

displayDataToCart();

cartBox.addEventListener('click', (event) => {
    // if (!event.target.closest('.delete-button')) {
    //     return;
    // }

    // event.target.closest('.products').remove();

    if (event.target.classList.contains('char-cross')) {
        const productId = event.target.closest('.product').id.split('-')[1];
        const item = products.find(p => p.id === productId);

        const productEl = event.target.closest('.product');
        productEl.remove();


        console.log(productId);
        console.log(item);
        console.log(productEl);

        item.addedToCart = false;
        item.amountInCart = 0;
        item.amountInCatalog = item.generalAmount;
        localStorage.setItem('products', JSON.stringify(products));

        // displayDataToCart();
    }

    updateTotalSum();
})

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('cart-buttons__item-delete-all')) {
        cartBox.innerHTML = '';
        products.forEach(element => {
            element.addedToCart = false;
        });

        localStorage.setItem('products', JSON.stringify(products));
    }

    if (event.target.classList.contains('cart-buttons__item-continue-shopping')) {
        window.location.href = '../Catalog/index.html';
    }

    updateTotalSum();
})

const MAX_QUANTITY = 10;

cartBox.addEventListener('input', (event) => {
    if (event.target.classList.contains('product-box__text_amount')) {
        const productId = event.target.closest('.product').id.split('-')[1];
        const item = products.find(p => p.id === productId);

        let amountProduct = Math.min(+event.target.value, MAX_QUANTITY);

        if (isNaN(amountProduct) || amountProduct < 1) {
            amountProduct = 1;
        }

        item.amountInCart = amountProduct;
        item.amountInCatalog = item.generalAmount - amountProduct;

        if (item.amountInCatalog < 0) {
            item.amountInCart = item.generalAmount;
            item.amountInCatalog = 0;
            event.target.value = item.amountInCart;
            alert(`В наличии только ${item.amountInCart} единиц товара`);
        }

        localStorage.setItem('products', JSON.stringify(products));

        updateTotalSum();
    }
})

function displayTotalSum(totalCost) {
    return `
        <div class="to-pay__sub-total">Sub total<span class="to-pay__sub-total_sub-sum">$${totalCost}</span>
        </div>
        <div class="to-pay__grand-total">Grand total<span
                class="to-pay__grand-total_grand-sum">$${totalCost}</span></div>
    `
}

function updateTotalSum() {
    const checkOutBlock = document.querySelector('.to-pay');
    const oldSubTotal = checkOutBlock.querySelector('.to-pay__sub-total');
    const oldGrandTotal = checkOutBlock.querySelector('.to-pay__grand-total');
    if (oldSubTotal) oldSubTotal.remove();
    if (oldGrandTotal) oldGrandTotal.remove();


    const totalCost = products
        .filter(product => product.addedToCart)
        .reduce((acc, product) => acc + (product.price * product.amountInCart), 0);

    checkOutBlock.insertAdjacentHTML('afterbegin', displayTotalSum(totalCost));
}

document.addEventListener('DOMContentLoaded', () => {
    updateTotalSum();
});