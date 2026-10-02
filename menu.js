/* SAVORA MENU.JS - COMPLETE REAL PHOTO VERSION */

const menuGroups = {
  "Pizza":[
    ["Margherita Pizza",249],["Pepperoni Pizza",299],["Farmhouse Pizza",279],
    ["Four Cheese Pizza",319],["BBQ Chicken Pizza",339],["Paneer Tikka Pizza",309],
    ["Mexican Fiesta Pizza",289],["Veggie Supreme Pizza",299],["Mushroom Truffle Pizza",349],
    ["Spicy Corn Pizza",269],["Pesto Garden Pizza",319],["Double Cheese Pizza",289],
    ["Peri Peri Chicken Pizza",349],["Chicken Tandoori Pizza",359],["Mediterranean Pizza",329],
    ["Olive & Jalapeno Pizza",279],["Garlic Mushroom Pizza",289],["Cheesy Spinach Pizza",299],
    ["Roasted Pepper Pizza",299],["Sicilian Veg Pizza",319],["Hawaiian Style Pizza",329],
    ["Smoked Chicken Pizza",349],["Buffalo Chicken Pizza",359],["Tomato Basil Pizza",259],
    ["Paneer Makhani Pizza",319],["Chilli Paneer Pizza",309],["Chicken Supreme Pizza",369],
    ["Garden Herb Pizza",289],["Cheese Burst Pizza",329],["Savora Special Pizza",399]
  ],

  "Burger":[
    ["Classic Burger",199],["Cheese Burger",229],["Double Patty Burger",279],
    ["Crispy Chicken Burger",249],["Spicy Chicken Burger",259],["BBQ Chicken Burger",269],
    ["Paneer Crunch Burger",219],["Veggie Delight Burger",199],["Mushroom Swiss Burger",249],
    ["Mexican Bean Burger",219],["Peri Peri Burger",259],["Smoky Grill Burger",249],
    ["Jalapeno Cheese Burger",239],["Crispy Fish Burger",279],["Tandoori Chicken Burger",269],
    ["Maharaja Veg Burger",229],["Garlic Mayo Burger",209],["Chipotle Burger",249],
    ["Pepper Jack Burger",259],["Loaded Cheese Burger",289],["Cottage Cheese Burger",229],
    ["Crispy Paneer Burger",239],["Chicken Bacon Style Burger",299],["BBQ Mushroom Burger",229],
    ["Fiery Chicken Burger",279],["Avocado Veg Burger",259],["Classic Club Burger",269],
    ["Ultimate Savora Burger",329],["Double Cheese Chicken Burger",319],["Chef's Special Burger",349]
  ],

  "Pasta":[
    ["Creamy Alfredo Pasta",229],["Spicy Arrabbiata",219],["Pesto Penne Pasta",239],
    ["Cheesy Baked Pasta",249],["Chicken Alfredo Pasta",289],["Creamy Mushroom Pasta",259],
    ["Tomato Basil Pasta",219],["Garlic Butter Pasta",209],["Spinach Cream Pasta",239],
    ["Mac & Cheese Pasta",249],["Veggie Penne Pasta",229],["Chicken Arrabbiata",279],
    ["Creamy Carbonara",269],["Roasted Pepper Pasta",239],["Peri Peri Pasta",249],
    ["Truffle Cream Pasta",329],["Herb Butter Spaghetti",219],["Cheese Lasagna",299],
    ["Spinach Lasagna",289],["Chicken Lasagna",319],["Penne Primavera",229],
    ["Mushroom Penne",239],["Chilli Garlic Spaghetti",229],["Creamy Tomato Pasta",239],
    ["Four Cheese Penne",279],["Basil Cream Spaghetti",249],["Chicken Pesto Pasta",299],
    ["Mediterranean Fusilli",259],["Veggie Lasagna",279],["Savora Signature Pasta",319]
  ],

  "Asian":[
    ["Chicken Noodles",249],["Veg Hakka Noodles",219],["Veggie Asian Bowl",219],
    ["Chicken Fried Rice",249],["Schezwan Fried Rice",239],["Singapore Noodles",259],
    ["Thai Basil Rice",269],["Korean BBQ Bowl",299],["Teriyaki Chicken Bowl",289],
    ["Asian Tofu Bowl",239],["Chilli Garlic Noodles",229],["Veg Spring Rolls",179],
    ["Chicken Spring Rolls",199],["Paneer Asian Bowl",249],["Thai Green Curry",289],
    ["Thai Red Curry",289],["Kung Pao Chicken",299],["Honey Chilli Paneer",259],
    ["Crispy Chilli Chicken",289],["Szechuan Chicken",299],["Ginger Garlic Rice",229],
    ["Miso Noodle Bowl",259],["Sesame Tofu Noodles",249],["Japanese Teriyaki Rice",289],
    ["Sweet Chilli Chicken",279],["Asian Veg Stir Fry",229],["Coconut Curry Bowl",279],
    ["Spicy Korean Noodles",269],["Mongolian Chicken Bowl",299],["Savora Asian Special",319]
  ],

  "Dessert":[
    ["Chocolate Cake",149],["Strawberry Cheesecake",179],["Classic Tiramisu",199],
    ["Chocolate Brownie",129],["New York Cheesecake",189],["Red Velvet Cake",169],
    ["Chocolate Lava Cake",179],["Vanilla Panna Cotta",159],["Mango Cheesecake",189],
    ["Caramel Custard",139],["Blueberry Cheesecake",189],["Nutella Brownie",159],
    ["Chocolate Mousse",149],["Strawberry Mousse",149],["Butterscotch Cake",169],
    ["Cookie Cream Cake",179],["Fruit Trifle",159],["Gulab Jamun Sundae",149],
    ["Ice Cream Sundae",139],["Brownie Sundae",169],["Mango Mousse",149],
    ["Coconut Pudding",129],["Coffee Mousse",159],["Lotus Biscoff Cheesecake",199],
    ["Dark Chocolate Tart",179],["Apple Crumble",159],["Caramel Brownie",169],
    ["Pistachio Pudding",149],["Classic Chocolate Donut",99],["Savora Dessert Platter",299]
  ],

  "Drinks":[
    ["Cold Coffee",119],["Fresh Lemonade",89],["Iced Tea",99],
    ["Peach Iced Tea",119],["Mango Cooler",129],["Strawberry Cooler",139],
    ["Mint Mojito",129],["Watermelon Cooler",129],["Virgin Pina Colada",159],
    ["Blueberry Fizz",149],["Lemon Mint Soda",109],["Ginger Lime Fizz",109],
    ["Orange Cooler",119],["Pineapple Punch",139],["Mango Lassi",129],
    ["Strawberry Lassi",139],["Sweet Lassi",99],["Masala Chaas",89],
    ["Iced Mocha",149],["Vanilla Frappe",159],["Caramel Frappe",169],
    ["Chocolate Frappe",169],["Classic Cappuccino",129],["Cafe Latte",139],
    ["Espresso",99],["Hot Chocolate",149],["Green Tea",99],
    ["Peach Lemonade",129],["Berry Blast",159],["Savora Signature Cooler",179]
  ]
};


/* =========================================================
   REAL FOOD PHOTOS
   ========================================================= */

const photoPools = {

  Pizza: [
    "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85"
  ],

  Burger: [
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85"
  ],

  Pasta: [
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85"
  ],

  Asian: [
    "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?auto=format&fit=crop&w=900&q=85"
  ],

  Dessert: [
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=85"
  ],

  Drinks: [
    "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85"
  ]

};


const badgeCycle = [
  "Popular",
  "Best Seller",
  "Chef's Pick",
  "New",
  "Fresh",
  "Top Rated",
  "Savora Special"
];


/* =========================================================
   DESCRIPTION
   ========================================================= */

function descriptionFor(category) {

  const descriptions = {

    Pizza:
      "Freshly baked pizza with a crisp crust, rich sauce, melted cheese and delicious toppings.",

    Burger:
      "A freshly grilled burger layered with quality ingredients and Savora's special sauce.",

    Pasta:
      "Delicious pasta prepared with rich sauce, herbs and carefully selected ingredients.",

    Asian:
      "A flavourful Asian-inspired dish prepared with fresh ingredients, aromatic sauces and spices.",

    Dessert:
      "A delightful dessert prepared with rich ingredients for the perfect sweet ending.",

    Drinks:
      "A refreshing beverage prepared with quality ingredients and served chilled."

  };

  return descriptions[category];
}


/* =========================================================
   INGREDIENTS
   ========================================================= */

function ingredientsFor(category) {

  const ingredients = {

    Pizza:
      "Pizza dough, tomato sauce, mozzarella, herbs and selected toppings.",

    Burger:
      "Burger bun, patty, fresh vegetables, cheese and house sauce.",

    Pasta:
      "Pasta, sauce, herbs, vegetables, seasoning and parmesan.",

    Asian:
      "Rice or noodles, fresh vegetables, sauces, herbs and selected ingredients.",

    Dessert:
      "Premium dessert ingredients, cream, sugar and fresh toppings.",

    Drinks:
      "Fresh fruits or coffee, milk or soda, sweetener, ice and garnish."

  };

  return ingredients[category];
}


/* =========================================================
   CREATE ALL 180 FOODS
   ========================================================= */

const foods = [];

let nextId = 1;


Object.entries(menuGroups).forEach(
  ([category, items]) => {

    items.forEach(
      (item, index) => {

        const pool =
          photoPools[category];

        foods.push({

          id: nextId++,

          name: item[0],

          category: category,

          price: item[1],

          rating:
            index % 2 === 0
              ? 4.4
              : 4.7,

          badge:
            badgeCycle[
              index % badgeCycle.length
            ],

          image:
            pool[
              index % pool.length
            ],

          description:
            descriptionFor(category),

          ingredients:
            ingredientsFor(category)

        });

      }
    );

  }
);


/* =========================================================
   VARIABLES
   ========================================================= */

let selectedCategory = "All";

let selectedFood = null;

let modalQuantity = 1;

let cart = [];

let favourites = [];


/* =========================================================
   LOAD STORAGE
   ========================================================= */

function loadStorage() {

  try {

    const savedCart =
      JSON.parse(
        localStorage.getItem(
          "savoraCart"
        ) || "[]"
      );


    const savedFavourites =
      JSON.parse(
        localStorage.getItem(
          "savoraFavourites"
        ) || "[]"
      );


    cart =
      Array.isArray(savedCart)
        ? savedCart
        : [];


    favourites =
      Array.isArray(
        savedFavourites
      )
        ? savedFavourites.map(Number)
        : [];


  } catch (error) {

    cart = [];

    favourites = [];

  }

}


/* =========================================================
   DISPLAY FOODS
   ========================================================= */

function displayFoods() {

  const grid =
    document.getElementById(
      "foodGrid"
    );

  const noResults =
    document.getElementById(
      "noResults"
    );

  const searchInput =
    document.getElementById(
      "searchInput"
    );

  const sortSelect =
    document.getElementById(
      "sortSelect"
    );


  if (!grid) {

    return;

  }


  const search =
    searchInput
      ? searchInput.value
          .trim()
          .toLowerCase()
      : "";


  const sort =
    sortSelect
      ? sortSelect.value
      : "default";


  let list =
    foods.filter(
      food => {

        const categoryMatch =
          selectedCategory === "All" ||
          food.category ===
            selectedCategory;


        const searchableText =
          (
            food.name +
            " " +
            food.category +
            " " +
            food.description
          ).toLowerCase();


        return (
          categoryMatch &&
          searchableText.includes(
            search
          )
        );

      }
    );


  /* SORT */

  if (sort === "low") {

    list.sort(
      (a, b) =>
        a.price -
        b.price
    );

  }


  if (sort === "high") {

    list.sort(
      (a, b) =>
        b.price -
        a.price
    );

  }


  if (sort === "rating") {

    list.sort(
      (a, b) =>
        b.rating -
        a.rating
    );

  }


  grid.innerHTML =
    "";


  /* NO RESULTS */

  if (!list.length) {

    if (noResults) {

      noResults.style.display =
        "block";

    }

    return;

  }


  if (noResults) {

    noResults.style.display =
      "none";

  }


  /* CREATE CARDS */

  list.forEach(
    food => {

      const card =
        document.createElement(
          "article"
        );


      card.className =
        "food-card";


      card.innerHTML = `

        <div
          class="food-image-container"
        >

          <img
            class="food-image"
            src="${food.image}"
            alt="${food.name}"
            loading="lazy"
          >


          <span
            class="food-badge"
          >
            ${food.badge}
          </span>


          <button
            type="button"
            class="favourite-btn"
          >

            ${
              favourites.includes(
                food.id
              )
                ? "❤️"
                : "♡"
            }

          </button>

        </div>


        <div
          class="food-info"
        >

          <div
            class="food-category"
          >

            ${
              food.category ===
              "Burger"
                ? "Burgers"
                : food.category ===
                  "Dessert"
                    ? "Desserts"
                    : food.category
            }

          </div>


          <h3
            class="food-name"
          >
            ${food.name}
          </h3>


          <p
            class="food-description"
          >
            ${food.description}
          </p>


          <div
            class="rating"
          >
            ⭐ ${food.rating}
          </div>


          <div
            class="food-bottom"
          >

            <div
              class="food-price"
            >
              ₹${food.price}
            </div>


            <button
              type="button"
              class="add-button"
            >
              View & Add
            </button>

          </div>

        </div>

      `;


      const favouriteButton =
        card.querySelector(
          ".favourite-btn"
        );


      const addButton =
        card.querySelector(
          ".add-button"
        );


      favouriteButton.addEventListener(
        "click",
        event => {

          event.stopPropagation();

          toggleFavourite(
            food.id
          );

        }
      );


      addButton.addEventListener(
        "click",
        () => {

          openFoodModal(
            food.id
          );

        }
      );


      const image =
        card.querySelector(
          ".food-image"
        );


      image.addEventListener(
        "error",
        function () {

          this.onerror = null;

          const fallback =
            photoPools[
              food.category
            ];


          if (
            fallback &&
            fallback.length
          ) {

            this.src =
              fallback[0];

          }

        }
      );


      grid.appendChild(
        card
      );

    }
  );

}


/* =========================================================
   CATEGORY FILTER
   ========================================================= */

function filterCategory(
  category,
  button
) {

  selectedCategory =
    category ||
    "All";


  document
    .querySelectorAll(
      ".category-btn"
    )
    .forEach(
      btn =>
        btn.classList.remove(
          "active"
        )
    );


  if (button) {

    button.classList.add(
      "active"
    );

  }


  displayFoods();

}


/* =========================================================
   CATEGORY BUTTONS
   ========================================================= */

function setupCategoryButtons() {

  document
    .querySelectorAll(
      ".category-btn"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            let category =
              button.dataset.category ||
              "";


            if (!category) {

              const text =
                button.textContent
                  .trim()
                  .toLowerCase();


              if (
                text.includes(
                  "pizza"
                )
              ) {

                category =
                  "Pizza";

              }

              else if (
                text.includes(
                  "burger"
                )
              ) {

                category =
                  "Burger";

              }

              else if (
                text.includes(
                  "pasta"
                )
              ) {

                category =
                  "Pasta";

              }

              else if (
                text.includes(
                  "asian"
                )
              ) {

                category =
                  "Asian";

              }

              else if (
                text.includes(
                  "dessert"
                )
              ) {

                category =
                  "Dessert";

              }

              else if (
                text.includes(
                  "drink"
                )
              ) {

                category =
                  "Drinks";

              }

              else {

                category =
                  "All";

              }

            }


            filterCategory(
              category,
              button
            );

          }
        );

      }
    );

}


/* =========================================================
   FOOD MODAL
   ========================================================= */

function openFoodModal(id) {

  selectedFood =
    foods.find(
      food =>
        Number(food.id) ===
        Number(id)
    );


  if (!selectedFood) {

    return;

  }


  modalQuantity =
    1;


  const setText =
    (
      elementId,
      value
    ) => {

      const element =
        document.getElementById(
          elementId
        );


      if (element) {

        element.textContent =
          value;

      }

    };


  const modalImage =
    document.getElementById(
      "modalImage"
    );


  if (modalImage) {

    modalImage.src =
      selectedFood.image;


    modalImage.alt =
      selectedFood.name;


    modalImage.onerror =
      function () {

        this.onerror =
          null;


        this.src =
          photoPools[
            selectedFood.category
          ][0];

      };

  }


  setText(
    "modalCategory",
    selectedFood.category
  );


  setText(
    "modalName",
    selectedFood.name
  );


  setText(
    "modalRating",
    "⭐ " +
      selectedFood.rating
  );


  setText(
    "modalDescription",
    selectedFood.description
  );


  setText(
    "modalIngredients",
    selectedFood.ingredients
  );


  setText(
    "modalPrice",
    "₹" +
      selectedFood.price
  );


  setText(
    "modalQuantity",
    modalQuantity
  );


  const modal =
    document.getElementById(
      "foodModal"
    );


  if (modal) {

    modal.classList.add(
      "active"
    );

  }

}


/* =========================================================
   CLOSE FOOD MODAL
   ========================================================= */

function closeFoodModal() {

  const modal =
    document.getElementById(
      "foodModal"
    );


  if (modal) {

    modal.classList.remove(
      "active"
    );

  }

}


/* =========================================================
   MODAL QUANTITY
   ========================================================= */

function changeModalQuantity(
  change
) {

  modalQuantity =
    Math.max(
      1,
      Math.min(
        10,
        modalQuantity +
          Number(change)
      )
    );


  const quantity =
    document.getElementById(
      "modalQuantity"
    );


  if (quantity) {

    quantity.textContent =
      modalQuantity;

  }

}


/* =========================================================
   ADD MODAL ITEM TO CART
   ========================================================= */

function addModalToCart() {

  if (!selectedFood) {

    return;

  }


  const existing =
    cart.find(
      item =>
        Number(item.id) ===
        Number(
          selectedFood.id
        )
    );


  if (existing) {

    existing.quantity =
      Number(
        existing.quantity || 0
      ) +
      modalQuantity;

  }

  else {

    cart.push({

      id:
        selectedFood.id,

      name:
        selectedFood.name,

      price:
        selectedFood.price,

      image:
        selectedFood.image,

      quantity:
        modalQuantity

    });

  }


  saveCart();

  updateCartCount();

  closeFoodModal();


  showToast(
    selectedFood.name +
      " added to your cart 🛒"
  );

}


/* =========================================================
   FAVOURITES
   ========================================================= */

function toggleFavourite(id) {

  id =
    Number(id);


  if (
    favourites.includes(id)
  ) {

    favourites =
      favourites.filter(
        value =>
          value !== id
      );


    showToast(
      "Removed from favourites"
    );

  }

  else {

    favourites.push(id);


    showToast(
      "Added to favourites ❤️"
    );

  }


  localStorage.setItem(
    "savoraFavourites",
    JSON.stringify(
      favourites
    )
  );


  displayFoods();

}


/* =========================================================
   SAVE CART
   ========================================================= */

function saveCart() {

  localStorage.setItem(
    "savoraCart",
    JSON.stringify(
      cart
    )
  );

}


/* =========================================================
   CART COUNT
   ========================================================= */

function updateCartCount() {

  const element =
    document.getElementById(
      "cartCount"
    );


  if (!element) {

    return;

  }


  element.textContent =
    cart.reduce(
      (
        total,
        item
      ) =>
        total +
        Number(
          item.quantity || 1
        ),
      0
    );

}


/* =========================================================
   OPEN CART
   ========================================================= */

function openCart() {

  renderCart();


  const overlay =
    document.getElementById(
      "cartOverlay"
    );


  if (overlay) {

    overlay.classList.add(
      "active"
    );

  }

}


/* =========================================================
   CLOSE CART
   ========================================================= */

function closeCart(event) {

  const overlay =
    document.getElementById(
      "cartOverlay"
    );


  if (!overlay) {

    return;

  }


  if (
    event &&
    event.target !== overlay
  ) {

    return;

  }


  overlay.classList.remove(
    "active"
  );

}


/* =========================================================
   RENDER CART
   ========================================================= */

function renderCart() {

  const container =
    document.getElementById(
      "cartItems"
    );


  const totalElement =
    document.getElementById(
      "cartTotal"
    );


  if (
    !container ||
    !totalElement
  ) {

    return;

  }


  container.innerHTML =
    "";


  if (!cart.length) {

    container.innerHTML = `

      <div
        class="empty-cart"
      >

        <div
          style="font-size:50px"
        >
          🛒
        </div>


        <h3>
          Your cart is empty
        </h3>


        <p>
          Add something delicious!
        </p>

      </div>

    `;


    totalElement.textContent =
      "₹0";


    return;

  }


  let total =
    0;


  cart.forEach(
    item => {

      const quantity =
        Number(
          item.quantity || 1
        );


      const price =
        Number(
          item.price || 0
        );


      const itemTotal =
        quantity *
        price;


      total +=
        itemTotal;


      const row =
        document.createElement(
          "div"
        );


      row.className =
        "cart-item";


      row.innerHTML = `

        <div
          class="cart-item-info"
        >

          <h4>
            ${item.name}
          </h4>


          <p>
            ₹${itemTotal}
          </p>

        </div>


        <div
          class="cart-item-actions"
        >

          <button
            type="button"
            data-action="minus"
          >
            −
          </button>


          <span>
            ${quantity}
          </span>


          <button
            type="button"
            data-action="plus"
          >
            +
          </button>


          <button
            type="button"
            class="remove-item"
            data-action="remove"
          >
            ×
          </button>

        </div>

      `;


      row
        .querySelector(
          '[data-action="minus"]'
        )
        .onclick =
          () =>
            changeCartQuantity(
              item.id,
              -1
            );


      row
        .querySelector(
          '[data-action="plus"]'
        )
        .onclick =
          () =>
            changeCartQuantity(
              item.id,
              1
            );


      row
        .querySelector(
          '[data-action="remove"]'
        )
        .onclick =
          () =>
            removeFromCart(
              item.id
            );


      container.appendChild(
        row
      );

    }
  );


  totalElement.textContent =
    "₹" +
    total;

}


/* =========================================================
   CHANGE CART QUANTITY
   ========================================================= */

function changeCartQuantity(
  id,
  change
) {

  const item =
    cart.find(
      value =>
        Number(value.id) ===
        Number(id)
    );


  if (!item) {

    return;

  }


  item.quantity =
    Number(
      item.quantity || 1
    ) +
    Number(change);


  if (
    item.quantity <= 0
  ) {

    cart =
      cart.filter(
        value =>
          Number(value.id) !==
          Number(id)
      );

  }


  saveCart();

  updateCartCount();

  renderCart();

}


/* =========================================================
   REMOVE CART ITEM
   ========================================================= */

function removeFromCart(id) {

  cart =
    cart.filter(
      value =>
        Number(value.id) !==
        Number(id)
    );


  saveCart();

  updateCartCount();

  renderCart();


  showToast(
    "Item removed from cart"
  );

}


/* =========================================================
   CHECKOUT
   ========================================================= */

function goToCheckout() {

  if (!cart.length) {

    showToast(
      "Your cart is empty!"
    );

    return;

  }


  window.location.href =
    "checkout.html";

}


/* =========================================================
   DARK MODE
   ========================================================= */

function toggleTheme() {

  const dark =
    document.body.classList.toggle(
      "dark"
    );


  localStorage.setItem(
    "savoraTheme",
    dark
      ? "dark"
      : "light"
  );

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(
  message
) {

  const toast =
    document.getElementById(
      "toast"
    );


  if (!toast) {

    return;

  }


  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  clearTimeout(
    window.savoraToastTimer
  );


  window.savoraToastTimer =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      2500
    );

}


/* =========================================================
   MODAL EVENTS
   ========================================================= */

function setupModalEvents() {

  const closeButton =
    document.getElementById(
      "closeFoodModal"
    );


  if (
    closeButton &&
    !closeButton.getAttribute(
      "onclick"
    )
  ) {

    closeButton.addEventListener(
      "click",
      closeFoodModal
    );

  }


  const foodModal =
    document.getElementById(
      "foodModal"
    );


  if (foodModal) {

    foodModal.addEventListener(
      "click",
      event => {

        if (
          event.target ===
          foodModal
        ) {

          closeFoodModal();

        }

      }
    );

  }


  const minus =
    document.getElementById(
      "modalMinus"
    );


  if (
    minus &&
    !minus.getAttribute(
      "onclick"
    )
  ) {

    minus.addEventListener(
      "click",
      () =>
        changeModalQuantity(
          -1
        )
    );

  }


  const plus =
    document.getElementById(
      "modalPlus"
    );


  if (
    plus &&
    !plus.getAttribute(
      "onclick"
    )
  ) {

    plus.addEventListener(
      "click",
      () =>
        changeModalQuantity(
          1
        )
    );

  }


  const addButton =
    document.getElementById(
      "modalAddButton"
    );


  if (
    addButton &&
    !addButton.getAttribute(
      "onclick"
    )
  ) {

    addButton.addEventListener(
      "click",
      addModalToCart
    );

  }


  const closeCartButton =
    document.getElementById(
      "closeCartButton"
    );


  if (
    closeCartButton &&
    !closeCartButton.getAttribute(
      "onclick"
    )
  ) {

    closeCartButton.addEventListener(
      "click",
      () =>
        closeCart()
    );

  }


  const checkoutButton =
    document.getElementById(
      "checkoutButton"
    );


  if (
    checkoutButton &&
    !checkoutButton.getAttribute(
      "onclick"
    )
  ) {

    checkoutButton.addEventListener(
      "click",
      goToCheckout
    );

  }


  const search =
    document.getElementById(
      "searchInput"
    );


  if (search) {

    search.addEventListener(
      "input",
      displayFoods
    );

  }


  const sort =
    document.getElementById(
      "sortSelect"
    );


  if (sort) {

    sort.addEventListener(
      "change",
      displayFoods
    );

  }

}


/* =========================================================
   START
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    loadStorage();


    if (
      localStorage.getItem(
        "savoraTheme"
      ) === "dark"
    ) {

      document.body.classList.add(
        "dark"
      );

    }


    setupCategoryButtons();

    setupModalEvents();

    displayFoods();

    updateCartCount();


    console.log(
      "Savora menu loaded:",
      foods.length,
      "real-photo dishes"
    );

  }
);


/* =========================================================
   GLOBAL FUNCTIONS
   ========================================================= */

window.displayFoods =
  displayFoods;

window.filterCategory =
  filterCategory;

window.openFoodModal =
  openFoodModal;

window.closeFoodModal =
  closeFoodModal;

window.changeModalQuantity =
  changeModalQuantity;

window.addModalToCart =
  addModalToCart;

window.toggleFavourite =
  toggleFavourite;

window.openCart =
  openCart;

window.closeCart =
  closeCart;

window.changeCartQuantity =
  changeCartQuantity;

window.removeFromCart =
  removeFromCart;

window.goToCheckout =
  goToCheckout;

window.toggleTheme =
  toggleTheme;