const setOnClickEventForClass = (elementClassName, func) => {
    Array.from(document.getElementsByClassName(elementClassName)).forEach(
        element => {
            element.addEventListener("click", e => {
                func(e);
            });
        }
    );
};

const changeQuantity = (e, value) => {
    let quantityElement = e.target.parentNode.getElementsByClassName(
        "product__quantity-value"
    )[0];
    let currentValue = Number(quantityElement.textContent);
    let newValue = currentValue + value;
    if (newValue > 0) quantityElement.textContent = newValue;
};

const incrementStep = 1;

const decrement = e => {
    changeQuantity(e, -incrementStep);
};

const increment = e => {
    changeQuantity(e, incrementStep);
};



let cartProducts = document.getElementsByClassName("cart__products")[0];

const addProductToCart = e => {
    let product = e.target.closest(".product");
    let quantity = Number(
        product.getElementsByClassName("product__quantity-value")[0].textContent
    );
    let image = product
        .getElementsByClassName("product__image")[0]
        .getAttribute("src");
    let id = product.getAttribute("data-id");

    let delay = 100;
    let duration = 800;

    const flyImageTo = (left, top) => {
        let flyingImg = document.createElement("img");
        flyingImg.setAttribute("src", image);
        flyingImg.style.position = "fixed";
        flyingImg.style.width = "100px";
        flyingImg.style.height = "100px";
        flyingImg.style.objectFit = "contain";
        flyingImg.style.left = `${product.querySelector("img").offsetLeft - 
            window.scrollX}px`;
        flyingImg.style.top = `${product.querySelector("img").offsetTop -
            window.scrollY}px`;

        document.querySelector("body").appendChild(flyingImg);

        setTimeout(() => {
            flyingImg.style = `
            position: fixed;
            width: 100px;
            height: 100px;
            object-fit: contain;
            left: ${left}px;
            top: ${top}px;
            transition: cubic-bezier(0.175, 0.885, 1.275);
            transition-duration: ${duration}ms`
            
        }, delay);
        setTimeout(() => {
            flyingImg.remove();
        }, duration + delay);
    };

    let productInCart = cartProducts.querySelector(`[data-id="${id}"]`);
    if (productInCart) {
        flyImageTo(
            productInCart.offsetLeft - window.scrollX,
            productInCart.offsetTop - window.scrollY
        );
        setTimeout(() => {
            productInCart.querySelector(".cart__product-count").textContent =
            Number(
                productInCart.querySelector(".cart__product-count").textContent
            ) + quantity;
        }, duration + delay);
    } else {
        let fakeHTML = document.createElement("div");
        fakeHTML.innerHTML = `
        <div style="
        border-radius: 6px;
        margin-right: 10px;
        width: 100px;
        height: 100px;
        object-fit: contain;
        "></div>
        <p></p>`;

        cartProducts.appendChild(fakeHTML);
        cartProducts.closest(".cart").style.display = "block";


        flyImageTo(
            fakeHTML.offsetLeft - window.scrollX,
            fakeHTML.offsetTop - window.scrollY
        );

        setTimeout(() => {
            fakeHTML.remove();

            let html = document.createElement("div");
            html.setAttribute("class", "cart__product");
            html.setAttribute("data-id", `${id}`);
            html.innerHTML = `
            <img class="cart__product-image" src=${image}>
            <div class="cart__product-count">${quantity}<?div>
            <div class="cart__product-delete">Удалить</div>`;

            cartProducts.appendChild(html);

            html
            .querySelector(".cart__product-delete")
            .addEventListener("click", e => {
                e.target.closest("cart__product").remove();
                if (!cartProducts.childElementCount) {
                    cartProducts.closest(".cart").style.display = "none";
                }
            });
        }, duration + delay);
    }
};

const addEvents = () => {
    setOnClickEventForClass("product__quantity-control_dec", decrement);
    setOnClickEventForClass("product__quantity-control_inc", increment);
    setOnClickEventForClass("product__add", addProductToCart);
};

addEvents();




