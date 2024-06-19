// WE DECLARE LOCAL STORAGE //
const productsInCart = JSON.parse(localStorage.getItem("products-in-cart"));
console.log(productsInCart);

// WE DECLARE DOM
const containerEmptyCart = document.querySelector("#empty-cart-title");
const containerProductsCart = document.querySelector("#container-products-cart");
const containerCartActions = document.querySelector("#cart-actions");


// CART IF //
if (productsInCart) {

    containerEmptyCart.classList.add("disabled");
    containerProductsCart.classList.remove("disabled");
    containerCartActions.classList.remove("disabled");

    productsInCart.forEach(product => {

        const div = document.createElement("div");
        div.classList.add("product-products-cart");
        div.innerHTML = `
            <div class="img-product-products-cart">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-name-cart">
                <small>Product title</small>
                <h1>${product.title}</h1>
            </div>
            <div class="product-amount-cart">
                <small>Amount</small>
                <p>${product.amount}</p>
            </div>
            <div class="product-cart-price">
                <small>Price</small>
                <p>${product.price}</p>
            </div>
            <div class="cart-subtotal">
                <small>Subtotal</small>
                <p>${product.price * product.amount}</p>
            </div>
            <button class="button-trash-cart" id="${product.id}"><i class="bi bi-trash3"></i><button>
        `
        containerProductsCart.append(div);
    });


} else {

}

