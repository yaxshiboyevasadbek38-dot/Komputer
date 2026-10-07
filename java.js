let cart = [];
let total = 0;


// Mahsulotni savatga qo‘shish
function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    total += price;

    updateCart();

    alert(name + " savatga qo‘shildi! 🛒");
}


// Savatni yangilash
function updateCart() {

    const cartItems = document.getElementById("cartItems");
    const totalElement = document.getElementById("total");

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = "Savat hozircha bo‘sh.";

    } else {

        cart.forEach(function(item, index) {

            const div = document.createElement("div");

            div.className = "cart-item";

            div.innerHTML = `
                <span>
                    ${item.name} -
                    ${item.price.toLocaleString()} so‘m
                </span>

                <button onclick="removeItem(${index})">
                    ❌
                </button>
            `;

            cartItems.appendChild(div);
        });
    }

    totalElement.textContent =
        "Jami: " + total.toLocaleString() + " so‘m";
}


// Mahsulotni savatdan o‘chirish
function removeItem(index) {

    total -= cart[index].price;

    cart.splice(index, 1);

    updateCart();
}


// Xarid qilish
function buyProducts() {

    if (cart.length === 0) {

        alert("Savat bo‘sh! Avval mahsulot tanlang.");

        return;
    }

    alert(
        "Xaridingiz qabul qilindi! 🎉\n\n" +
        "Jami: " +
        total.toLocaleString() +
        " so‘m"
    );

    cart = [];
    total = 0;

    updateCart();
}


// Mahsulotlar bo‘limiga o'tish
function showProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}
