/* =====================================================
   SAVORA ORDER HISTORY
===================================================== */


let orders = [];



/* =====================================================
   LOAD ORDERS
===================================================== */

function loadOrders() {

    try {

        orders =
            JSON.parse(
                localStorage.getItem("savoraOrders")
            ) || [];

    } catch (error) {

        orders = [];

    }

}



/* =====================================================
   FORMAT CURRENCY
===================================================== */

function currency(amount) {

    return "₹" + Number(amount || 0).toFixed(2);

}



/* =====================================================
   FORMAT DATE
===================================================== */

function formatDate(dateString) {

    const date = new Date(dateString);

    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}



function formatTime(dateString) {

    const date = new Date(dateString);

    return date.toLocaleTimeString(
        "en-IN",
        {
            hour: "2-digit",
            minute: "2-digit"
        }
    );

}



/* =====================================================
   UPDATE STATISTICS
===================================================== */

function updateStatistics() {

    const totalOrders = orders.length;

    const totalSpent =
        orders.reduce(
            (sum, order) =>
                sum + Number(order.total || 0),
            0
        );


    const totalItems =
        orders.reduce(
            (sum, order) => {

                if (!Array.isArray(order.items)) {
                    return sum;
                }

                return sum +
                    order.items.reduce(
                        (itemTotal, item) =>
                            itemTotal +
                            Number(
                                item.quantity ||
                                item.qty ||
                                1
                            ),
                        0
                    );

            },
            0
        );


    document.getElementById("totalOrders")
        .textContent = totalOrders;

    document.getElementById("totalSpent")
        .textContent = currency(totalSpent);

    document.getElementById("totalItems")
        .textContent = totalItems;

}



/* =====================================================
   RENDER ORDERS
===================================================== */

function renderOrders() {

    const container =
        document.getElementById("ordersList");

    const empty =
        document.getElementById("emptyOrders");


    if (orders.length === 0) {

        container.innerHTML = "";

        empty.style.display = "block";

        return;
    }


    empty.style.display = "none";


    /* newest first */

    const reversedOrders = [...orders].reverse();


    container.innerHTML =
        reversedOrders.map(
            (order, reverseIndex) => {

                const originalIndex =
                    orders.length -
                    1 -
                    reverseIndex;


                const items =
                    Array.isArray(order.items)
                        ? order.items
                        : [];


                const previewItems =
                    items.slice(0, 3);


                const extraItems =
                    Math.max(
                        0,
                        items.length - 3
                    );


                return `

                <article class="order-card">

                    <div class="order-card-top">

                        <div class="order-info">

                            <h3>
                                ${order.id || "SAV-ORDER"}
                            </h3>

                            <div class="order-date">

                                ${formatDate(order.createdAt)}
                                •
                                ${formatTime(order.createdAt)}

                            </div>

                        </div>


                        <span class="order-status">
                            ✓ Confirmed
                        </span>

                    </div>


                    <div class="order-card-body">

                        <div class="order-foods">

                            ${
                                previewItems.map(item => {

                                    const image =
                                        item.image ||
                                        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=80";

                                    const quantity =
                                        item.quantity ||
                                        item.qty ||
                                        1;

                                    return `

                                    <div class="food-preview">

                                        <img
                                            src="${image}"
                                            alt="${item.name}"
                                        >

                                        <span>
                                            ${item.name}
                                            ×${quantity}
                                        </span>

                                    </div>

                                    `;

                                }).join("")
                            }


                            ${
                                extraItems > 0
                                    ? `
                                        <div class="food-preview">
                                            <span>
                                                +${extraItems} more
                                            </span>
                                        </div>
                                      `
                                    : ""
                            }

                        </div>


                        <div class="order-price">

                            <span>Total Amount</span>

                            <strong>
                                ${currency(order.total)}
                            </strong>

                            <small>
                                ${items.length}
                                item${items.length !== 1 ? "s" : ""}
                            </small>

                        </div>

                    </div>


                    <div class="order-card-footer">

                        <span class="order-type-label">

                            ${
                                order.orderType === "pickup"
                                    ? "🏃 Pickup Order"
                                    : "🛵 Delivery Order"
                            }

                        </span>


                        <button
                            class="view-order-btn"
                            onclick="viewOrder(${originalIndex})"
                        >
                            View Details
                        </button>

                    </div>

                </article>

                `;

            }
        ).join("");

}



/* =====================================================
   VIEW ORDER
===================================================== */

function viewOrder(index) {

    const order = orders[index];

    if (!order) {
        return;
    }


    document.getElementById("modalOrderId")
        .textContent =
            order.id || "SAV-ORDER";


    document.getElementById("modalDate")
        .textContent =
            formatDate(order.createdAt);


    document.getElementById("modalType")
        .textContent =
            order.orderType === "pickup"
                ? "Pickup"
                : "Delivery";


    document.getElementById("modalPayment")
        .textContent =
            order.paymentMethod || "UPI";


    document.getElementById("modalTotal")
        .textContent =
            currency(order.total);


    document.getElementById("modalGrandTotal")
        .textContent =
            currency(order.total);


    const modalItems =
        document.getElementById("modalItems");


    const items =
        Array.isArray(order.items)
            ? order.items
            : [];


    modalItems.innerHTML =
        items.map(item => {

            const image =
                item.image ||
                "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=80";

            const quantity =
                item.quantity ||
                item.qty ||
                1;

            const price =
                Number(item.price || 0) *
                quantity;


            return `

                <div class="modal-item">

                    <img
                        src="${image}"
                        alt="${item.name}"
                    >

                    <div class="modal-item-info">

                        <strong>
                            ${item.name}
                        </strong>

                        <span>
                            Quantity: ${quantity}
                        </span>

                    </div>

                    <div class="modal-item-price">
                        ${currency(price)}
                    </div>

                </div>

            `;

        }).join("");


    document
        .getElementById("orderModal")
        .classList.add("show");

}



/* =====================================================
   CLOSE MODAL
===================================================== */

document
    .getElementById("closeModal")
    .addEventListener(
        "click",
        closeModal
    );


document
    .getElementById("orderModal")
    .addEventListener(
        "click",
        event => {

            if (
                event.target.id ===
                "orderModal"
            ) {

                closeModal();

            }

        }
    );


function closeModal() {

    document
        .getElementById("orderModal")
        .classList.remove("show");

}



/* =====================================================
   CLEAR HISTORY
===================================================== */

document
    .getElementById("clearOrders")
    .addEventListener(
        "click",
        () => {

            if (orders.length === 0) {

                showToast("There are no orders to clear.");

                return;
            }


            const confirmDelete =
                confirm(
                    "Are you sure you want to clear your order history?"
                );


            if (!confirmDelete) {
                return;
            }


            localStorage.removeItem(
                "savoraOrders"
            );


            orders = [];


            updateStatistics();

            renderOrders();

            showToast(
                "Order history cleared."
            );

        }
    );



/* =====================================================
   CART COUNT
===================================================== */

function updateCartCount() {

    let cart = [];


    const keys = [
        "savoraCart",
        "cart",
        "savora_cart"
    ];


    for (const key of keys) {

        try {

            const saved =
                localStorage.getItem(key);

            if (saved) {

                const parsed =
                    JSON.parse(saved);

                if (Array.isArray(parsed)) {

                    cart = parsed;

                    break;

                }

            }

        } catch {

            // Ignore invalid cart
        }

    }


    const count =
        cart.reduce(
            (total, item) =>
                total +
                Number(
                    item.quantity ||
                    item.qty ||
                    1
                ),
            0
        );


    document.getElementById("cartCount")
        .textContent = count;

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

        themeToggle.textContent =
            "☀️";

    }

}


themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle("dark");


        const dark =
            document.body.classList.contains(
                "dark"
            );


        localStorage.setItem(
            "savoraTheme",
            dark ? "dark" : "light"
        );


        themeToggle.textContent =
            dark ? "☀️" : "🌙";

    }
);



/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

    const toast =
        document.getElementById("toast");


    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(
        () => {

            toast.classList.remove("show");

        },
        2500
    );

}



/* =====================================================
   INITIALIZE
===================================================== */

loadOrders();

updateStatistics();

renderOrders();

updateCartCount();

loadTheme();