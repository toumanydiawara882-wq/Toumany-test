// 🛒 CART
let cart = [];

// 🍎 PRODUCTS (FOOD INDUSTRY)
const products = [
  {
    name: "Fruits",
    price: 50,
    img: "https://cdn.pixabay.com/photo/2016/03/05/19/02/fruits-1238259_1280.jpg",
  },
  {
    name: "Vegetables",
    price: 30,
    img: "https://cdn.pixabay.com/photo/2017/06/02/18/24/vegetables-2367029_1280.jpg",
  },
  {
    name: "Bananas",
    price: 20,
    img: "https://cdn.pixabay.com/photo/2018/08/07/07/36/banana-3596995_1280.jpg",
  },
  {
    name: "Tomatoes",
    price: 25,
    img: "https://cdn.pixabay.com/photo/2016/03/05/19/02/tomatoes-1238247_1280.jpg",
  },
  {
    name: "Grapes",
    price: 40,
    img: "https://cdn.pixabay.com/photo/2016/03/05/19/02/grapes-1238256_1280.jpg",
  },
  {
    name: "Potatoes",
    price: 10,
    img: "https://cdn.pixabay.com/photo/2016/03/05/19/02/potatoes-1238245_1280.jpg",
  },
  {
    name: "Carrots",
    price: 15,
    img: "https://cdn.pixabay.com/photo/2016/03/05/19/02/vegetables-1238254_1280.jpg",
  },
];

// SHOW PRODUCTS
const container = document.getElementById("products");

function showProducts() {
  products.forEach((p) => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p class="price">$${p.price}</p>
        <button onclick="addToCart('${p.name}')">Add to Cart</button>
      </div>
    `;
  });
}

showProducts();

// ADD TO CART
function addToCart(item) {
  cart.push(item);
  updateCartUI();
}

// UPDATE CART
function updateCartUI() {
  const cartBox = document.getElementById("cart-items");
  const totalBox = document.getElementById("total");
  const countBox = document.getElementById("cart-count");

  cartBox.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    const product = products.find((p) => p.name === item);
    total += product.price;

    cartBox.innerHTML += `
      <div class="cart-item">
        ${item} - $${product.price}
        <button onclick="removeItem(${index})">❌</button>
      </div>
    `;
  });

  totalBox.innerText = "Total: $" + total;
  countBox.innerText = cart.length;
}

// REMOVE ITEM
function removeItem(index) {
  cart.splice(index, 1);
  updateCartUI();
}

// LOGIN
function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  if (u === "admin" && p === "1234") {
    alert("Login successful");
  } else {
    alert("Wrong login");
  }
}
