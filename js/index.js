/* =========================
   SAVORA HOME PAGE JS
   ========================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       CART
       ========================= */

    const CART_KEY = "savoraCart";

    function getCart() {
        try {
            return JSON.parse(localStorage.getItem(CART_KEY)) || [];
        } catch {
            return [];
        }
    }

    function saveCart(cart) {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }

    function updateCartCount() {

        const cart = getCart();

        const totalItems = cart.reduce((total, item) => {
            return total + Number(item.quantity || 1);
        }, 0);

        const cartCount = document.getElementById("cartCount");

        if (cartCount) {
            cartCount.textContent = totalItems;
        }
    }


    /* =========================
       ADD TO CART
       ========================= */

    const addButtons = document.querySelectorAll(".add-cart");

    addButtons.forEach(button => {

        button.addEventListener("click", () => {

            const name = button.dataset.name;
            const price = Number(button.dataset.price);

            let cart = getCart();

            const existingItem = cart.find(item => item.name === name);

            if (existingItem) {

                existingItem.quantity =
                    Number(existingItem.quantity || 1) + 1;

            } else {

                cart.push({
                    id: Date.now(),
                    name: name,
                    price: price,
                    quantity: 1
                });

            }

            saveCart(cart);
            updateCartCount();

            showToast(`${name} added to cart`);

        });

    });


    /* =========================
       THEME
       ========================= */

    const themeToggle = document.getElementById("themeToggle");

    function applyTheme() {

        const savedTheme = localStorage.getItem("savoraTheme");

        if (savedTheme === "dark") {

            document.body.classList.add("dark");

            if (themeToggle) {
                themeToggle.textContent = "☾";
            }

        } else {

            document.body.classList.remove("dark");

            if (themeToggle) {
                themeToggle.textContent = "☀";
            }

        }
    }

    applyTheme();

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            const isDark =
                document.body.classList.contains("dark");

            localStorage.setItem(
                "savoraTheme",
                isDark ? "dark" : "light"
            );

            themeToggle.textContent =
                isDark ? "☾" : "☀";

        });

    }


    /* =========================
       MOBILE MENU
       ========================= */

    const mobileMenuBtn =
        document.getElementById("mobileMenuBtn");

    const mobileMenu =
        document.getElementById("mobileMenu");

    if (mobileMenuBtn && mobileMenu) {

        mobileMenuBtn.addEventListener("click", () => {

            mobileMenu.classList.toggle("open");

            mobileMenuBtn.textContent =
                mobileMenu.classList.contains("open")
                    ? "✕"
                    : "☰";

        });

    }


    /* =========================
       MOBILE MENU CLOSE
       ========================= */

    document.querySelectorAll(".mobile-menu a")
        .forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("open");

                mobileMenuBtn.textContent = "☰";

            });

        });


    /* =========================
       COPY COUPON
       ========================= */

    const copyCoupon =
        document.getElementById("copyCoupon");

    if (copyCoupon) {

        copyCoupon.addEventListener("click", async () => {

            try {

                await navigator.clipboard.writeText(
                    "WELCOME20"
                );

                copyCoupon.textContent = "Copied!";

                showToast("Coupon code copied");

                setTimeout(() => {
                    copyCoupon.textContent = "Copy Code";
                }, 1800);

            } catch {

                showToast("Coupon: WELCOME20");

            }

        });

    }


    /* =========================
       TOAST
       ========================= */

    function showToast(message) {

        const toast =
            document.getElementById("toast");

        const toastMessage =
            document.getElementById("toastMessage");

        if (!toast || !toastMessage) return;

        toastMessage.textContent = message;

        toast.classList.add("show");

        clearTimeout(window.savoraToastTimer);

        window.savoraToastTimer =
            setTimeout(() => {

                toast.classList.remove("show");

            }, 2500);

    }


    /* =========================
       SCROLL REVEAL
       ========================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =========================
       INITIAL CART COUNT
       ========================= */

    updateCartCount();


    /* =========================
       UPDATE CART WHEN TAB
       ========================= */

    window.addEventListener("storage", event => {

        if (event.key === CART_KEY) {
            updateCartCount();
        }

    });

});