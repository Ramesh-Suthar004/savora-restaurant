/* =====================================================
   SAVORA CHECKOUT SYSTEM
===================================================== */

const CART_KEYS = [
    "savoraCart",
    "cart",
    "savora_cart"
];

let cart = [];
let orderType = "delivery";
let couponApplied = false;
let discountAmount = 0;


/* =====================================================
   LOAD CART
===================================================== */

function loadCart() {

    for (const key of CART_KEYS) {

        const savedCart = localStorage.getItem(key);

        if (savedCart) {

            try {

                const parsed = JSON.parse(savedCart);

                if (Array.isArray(parsed)) {
                    cart = parsed;
                    return;
                }

            } catch (error) {
                console.log("Cart loading error:", error);
            }
        }
    }

    cart = [];
}


/* =====================================================
   NORMALIZE CART ITEM
===================================================== */

function normalizeItem(item) {

    return {
        id: item.id || item._id || item.name,
        name: item.name || item.title || "Food Item",
        price: Number(item.price || item.amount || 0),
        quantity: Number(item.quantity || item.qty || 1),
        image:
            item.image ||
            item.img ||
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80"
    };
}


/* =====================================================
   SAVE CART
===================================================== */

function saveCart() {

    const data = JSON.stringify(cart);

    localStorage.setItem("savoraCart", data);

    localStorage.setItem("cart", data);
}


/* =====================================================
   FORMAT CURRENCY
===================================================== */

function currency(amount) {

    return "₹" + Number(amount).toFixed(2);

}


/* =====================================================
   CALCULATE SUBTOTAL
===================================================== */

function getSubtotal() {

    return cart.reduce((total, item) => {

        const product = normalizeItem(item);

        return total + product.price * product.quantity;

    }, 0);

}


/* =====================================================
   RENDER CART
===================================================== */

function renderCart() {

    const container = document.getElementById("cartItems");

    cart = cart.map(normalizeItem);

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    document.getElementById("cartCount").textContent = totalItems;

    document.getElementById("summaryItemCount").textContent =
        `${totalItems} item${totalItems !== 1 ? "s" : ""}`;


    if (cart.length === 0) {

        container.innerHTML = `
            <div class="empty-cart">
                <div style="font-size:45px;">🛒</div>
                <h3>Your cart is empty</h3>
                <p style="font-size:12px;color:#777;margin:8px 0 15px;">
                    Add some delicious food before checking out.
                </p>

                <a
                    href="menu.html"
                    style="
                        display:inline-block;
                        padding:10px 18px;
                        background:#e85d04;
                        color:white;
                        text-decoration:none;
                        border-radius:8px;
                        font-size:12px;
                    "
                >
                    Browse Menu
                </a>
            </div>
        `;

        updateTotals();
        return;
    }


    container.innerHTML = cart.map((item, index) => {

        return `
            <div class="cart-item">

                <img
                    class="cart-item-image"
                    src="${item.image}"
                    alt="${item.name}"
                >

                <div class="cart-item-info">

                    <h4>${item.name}</h4>

                    <p>${currency(item.price)}</p>

                    <div class="quantity-control">

                        <button
                            onclick="changeQuantity(${index}, -1)"
                        >
                            −
                        </button>

                        <span>${item.quantity}</span>

                        <button
                            onclick="changeQuantity(${index}, 1)"
                        >
                            +
                        </button>

                    </div>

                </div>

                <button
                    class="remove-item"
                    onclick="removeItem(${index})"
                    title="Remove"
                >
                    ×
                </button>

            </div>
        `;

    }).join("");


    updateTotals();

}


/* =====================================================
   CHANGE QUANTITY
===================================================== */

function changeQuantity(index, change) {

    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }

    saveCart();

    renderCart();

}


/* =====================================================
   REMOVE ITEM
===================================================== */

function removeItem(index) {

    cart.splice(index, 1);

    saveCart();

    renderCart();

    showToast("Item removed from cart");

}


/* =====================================================
   ORDER TYPE
===================================================== */

document.querySelectorAll(".type-btn").forEach(button => {

    button.addEventListener("click", () => {

        document
            .querySelectorAll(".type-btn")
            .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        orderType = button.dataset.type;

        const address = document.getElementById("deliveryAddress");

        if (orderType === "pickup") {

            address.style.display = "none";

        } else {

            address.style.display = "block";

        }

        updateTotals();

    });

});


/* =====================================================
   TOTAL CALCULATION
===================================================== */

function updateTotals() {

    const subtotal = getSubtotal();

    const deliveryCharge =
        orderType === "delivery" && subtotal > 0
            ? 40
            : 0;

    if (!couponApplied) {
        discountAmount = 0;
    }

    const taxableAmount =
        Math.max(0, subtotal - discountAmount);

    const gst = taxableAmount * 0.05;

    const total =
        taxableAmount +
        gst +
        deliveryCharge;


    document.getElementById("subtotal").textContent =
        currency(subtotal);

    document.getElementById("discount").textContent =
        "-" + currency(discountAmount);

    document.getElementById("deliveryCharge").textContent =
        currency(deliveryCharge);

    document.getElementById("gst").textContent =
        currency(gst);

    document.getElementById("grandTotal").textContent =
        currency(total);


    return {
        subtotal,
        discount: discountAmount,
        deliveryCharge,
        gst,
        total
    };

}


/* =====================================================
   COUPON
===================================================== */

document
    .getElementById("applyCoupon")
    .addEventListener("click", () => {

        const input =
            document
                .getElementById("couponCode")
                .value
                .trim()
                .toUpperCase();

        const message =
            document.getElementById("couponMessage");

        const subtotal = getSubtotal();


        if (subtotal <= 0) {

            message.textContent =
                "Add items to your cart first.";

            message.style.color = "#e53935";

            return;
        }


        if (couponApplied) {

            message.textContent =
                "Coupon is already applied.";

            message.style.color = "#22a06b";

            return;
        }


        if (input === "WELCOME20") {

            discountAmount = subtotal * 0.20;

            couponApplied = true;

            message.textContent =
                "✓ 20% discount applied successfully!";

            message.style.color = "#22a06b";

            document.getElementById("couponCode").disabled = true;

            document.getElementById("applyCoupon").textContent =
                "Applied";

            updateTotals();

            showToast("WELCOME20 applied!");

        } else {

            message.textContent =
                "Invalid coupon code.";

            message.style.color = "#e53935";

        }

    });


/* =====================================================
   PAYMENT SELECTION
===================================================== */

document
    .querySelectorAll(".payment-option")
    .forEach(option => {

        option.addEventListener("click", () => {

            document
                .querySelectorAll(".payment-option")
                .forEach(item =>
                    item.classList.remove("active")
                );

            option.classList.add("active");

        });

    });


/* =====================================================
   PLACE ORDER
===================================================== */

document
    .getElementById("placeOrderBtn")
    .addEventListener("click", placeOrder);


function placeOrder() {

    if (cart.length === 0) {

        showToast("Your cart is empty.");

        return;
    }


    const form =
        document.getElementById("checkoutForm");


    if (!form.checkValidity()) {

        form.reportValidity();

        return;
    }


    const name =
        document.getElementById("customerName").value.trim();

    const phone =
        document.getElementById("customerPhone").value.trim();

    const email =
        document.getElementById("customerEmail").value.trim();

    const address =
        document.getElementById("address").value.trim();

    const city =
        document.getElementById("city").value.trim();

    const pincode =
        document.getElementById("pincode").value.trim();


    if (orderType === "delivery" && !address) {

        showToast("Please enter your delivery address.");

        document.getElementById("address").focus();

        return;
    }


    const payment =
        document.querySelector(
            'input[name="payment"]:checked'
        ).value;


    const totals = updateTotals();


    const orderId =
        "SAV-ORD-" +
        Math.floor(
            100000 +
            Math.random() * 900000
        );


    const order = {

        id: orderId,

        customer: {
            name,
            phone,
            email
        },

        orderType,

        address: {
            address,
            city,
            pincode
        },

        paymentMethod: payment,

        items: cart.map(item => ({
            ...item
        })),

        coupon:
            couponApplied
                ? "WELCOME20"
                : null,

        subtotal: totals.subtotal,

        discount: totals.discount,

        deliveryCharge:
            totals.deliveryCharge,

        gst: totals.gst,

        total: totals.total,

        createdAt:
            new Date().toISOString()

    };


    /* SAVE ORDER */

    let orders = [];

    try {

        orders =
            JSON.parse(
                localStorage.getItem("savoraOrders")
            ) || [];

    } catch {

        orders = [];

    }


    orders.push(order);

    localStorage.setItem(
        "savoraOrders",
        JSON.stringify(orders)
    );


    /* CLEAR CART */

    CART_KEYS.forEach(key => {

        localStorage.removeItem(key);

    });


    /* SHOW SUCCESS */

    document.getElementById(
        "generatedOrderId"
    ).textContent = orderId;

    document.getElementById(
        "successTotal"
    ).textContent = currency(totals.total);

    document.getElementById(
        "successPayment"
    ).textContent = payment;


    document
        .getElementById("successOverlay")
        .classList.add("show");

}


/* =====================================================
   CONTINUE TO MENU
===================================================== */

document
    .getElementById("continueBtn")
    .addEventListener("click", () => {

        window.location.href = "menu.html";

    });


/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* =====================================================
   DARK MODE
===================================================== */

const themeToggle =
    document.getElementById("themeToggle");


function loadTheme() {

    const theme =
        localStorage.getItem("savoraTheme");

    if (theme === "dark") {

        document.body.classList.add("dark");

        themeToggle.textContent = "☀️";

    }

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const dark =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "savoraTheme",
        dark ? "dark" : "light"
    );

    themeToggle.textContent =
        dark ? "☀️" : "🌙";

});


/* =====================================================
   INITIALIZE
===================================================== */

loadCart();

loadTheme();

renderCart();