/// ARRAY OF PRODUCTS ///

const products = [
    {
        id: "RareSneaker-01",
        title: "Rare Sneaker 01",
        image: "../img/rare-sneakers-01.jpg",
        category: {
            name: "Rare Sneaker",
            id: "RareSneaker"
        },
        price: 400
    },
    {
        id: "RareSneaker-02",
        title: "Rare Sneaker 02",
        image: "../img/rare-sneakers-02.jpg",
        category: {
            name: "Rare Sneaker",
            id: "RareSneaker"
        },
        price: 480
    },
    {
        id: "RareSneaker-03",
        title: "Rare Sneaker 03",
        image: "../img/rare-sneakers-04.jpg",
        category: {
            name: "Rare Sneaker",
            id: "RareSneaker"
        },
        price: 380
    },
    {
        id: "RareSneaker-04",
        title: "Rare Sneaker 04",
        image: "../img/rare-sneakers-04.jpg",
        category: {
            name: "Rare Sneaker",
            id: "RareSneaker"
        },
        price: 185
    },
    {
        id: "RareSneaker-05",
        title: "Rare Sneaker 05",
        image: "../img/rare-sneakers-05.jpg",
        category: {
            name: "Rare Sneaker",
            id: "RareSneaker"
        },
        price: 200
    },
    {
        id: "sporty-sneaker-01",
        title: "Sporty Sneaker 01",
        image: "../img/sporty-sneakers-01.jpg",
        category: {
            name: "Sporty Sneaker",
            id: "SportySneaker"
        },
        price: 700
    },
    {
        id: "sporty-sneaker-02",
        title: "Sporty Sneaker 02",
        image: "../img/sporty-sneakers-02.jpg",
        category: {
            name: "Sporty Sneaker",
            id: "SportySneaker"
        },
        price: 350
    },
    {
        id: "sporty-sneaker-03",
        title: "Sporty Sneaker 03",
        image: "../img/sporty-sneakers-03.jpg",
        category: {
            name: "Sporty Sneaker",
            id: "SportySneaker"
        },
        price: 175
    },
    {
        id: "sporty-sneaker-04",
        title: "Sporty Sneaker 04",
        image: "../img/sporty-sneakers-04.jpg",
        category: {
            name: "Sporty Sneaker",
            id: "SportySneaker"
        },
        price: 500
    },
    {
        id: "sporty-sneaker-05",
        title: "Sporty Sneaker 05",
        image: "../img/sporty-sneakers-05.jpg",
        category: {
            name: "Sporty Sneaker",
            id: "SportySneaker"
        },
        price: 280
    },
    {
        id: "urban-sneaker-01",
        title: "Urban Sneaker 01",
        image: "../img/urban-style-sneakers-01.jpg",
        category: {
            name: "Urban Sneaker",
            id: "UrbanSneaker"
        },
        price: 650
    },
    {
        id: "urban-sneaker-02",
        title: "Urban Sneaker 02",
        image: "../img/urban-style-sneakers-02.jpg",
        category: {
            name: "Urban Sneaker",
            id: "UrbanSneaker"
        },
        price: 780
    },
    {
        id: "urban-sneaker-03",
        title: "Urban Sneaker 03",
        image: "../img/urban-style-sneakers-03.jpg",
        category: {
            name: "Urban Sneaker",
            id: "UrbanSneaker"
        },
        price: 360
    },
    {
        id: "urban-sneaker-04",
        title: "Urban Sneaker 04",
        image: "../img/urban-style-sneakers-04.jpg",
        category: {
            name: "Urban Sneaker",
            id: "UrbanSneaker"
        },
        price: 220
    },
    {
        id: "urban-sneaker-05",
        title: "Urban Sneaker 05",
        image: "../img/urban-style-sneakers-05.jpg",
        category: {
            name: "Urban Sneaker",
            id: "UrbanSneaker"
        },
        price: 480
    }
];

/// ARRAY OF PRODUCTS finish ///


// SECTION TO CALL DOM //
const containerAllProducts = document.querySelector("#container-all-products");

const categoryButton = document.querySelectorAll(".category-button");

let buttonsAdd = document.querySelectorAll(".button-product-products");

const miniNumber = document.querySelector("#mini-number");

// SECTION TO CALL DOM finish //




// FUNCTION TO LOAD PRODUCTS IN PRODUCTS SECTION AND FILTER PRODUCTS WITH NAME//

/*selectedProducts refers to the array "products" */

function loadProducts(selectedProducts) {

    containerAllProducts.innerHTML = "";

    selectedProducts.forEach(product => {

        const div = document.createElement("div");
        div.classList.add("product-products");
        div.innerHTML = `
            <div class="img-product-products">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="info-product-products">
                <h2 class="name-product-products">${product.title}</h2>
                <p class="about-product-products">$${product.price}</p>
                <button class="button-product-products" id="${product.id}">ADD</button>
            </div>
        `

        containerAllProducts.append(div);

    })

    refreshButtonsAdd();

}

loadProducts(products);

// EVENT ON CLICK TYPES OF SHOES //

categoryButton.forEach(button => {
    button.addEventListener("click", (e) => {

        categoryButton.forEach(button => button.classList.remove("active"));

        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "All") {
            const productsButton = products.filter(product => product.category.id === e.currentTarget.id);
            loadProducts(productsButton);
        } else {
            loadProducts(products);
        }
        

    })
});



// FUNCTION FOR ADD BUTTONS //
function refreshButtonsAdd() {
    buttonsAdd = document.querySelectorAll(".button-product-products");

    buttonsAdd.forEach(button => {
        button.addEventListener("click", addToCart);
    });
}

// ARRAY CART //
const productsInCart = [];


// FUNCTION ADD TO CART //
function addToCart(e) {

    const ButtonId = e.currentTarget.id;
    const productsAdd = products.find(product => product.id === ButtonId);

    if(productsInCart.some(product => product.id === ButtonId)) {
        const index = productsInCart.findIndex(product => product.id === ButtonId);
        productsInCart[index].amount++;
    } else {
        productsAdd.amount = 1;
        productsInCart.push(productsAdd);
    }
    refreshMiniNumber();

    localStorage.setItem("products-in-cart", JSON.stringify(productsInCart));
}

// FUNCTION CART NUMBER NAVBAR //
function refreshMiniNumber() {
    let NewMiniNumber = productsInCart.reduce((acc, product) => acc + product.amount, 0);
    miniNumber.innerText = NewMiniNumber;
}