// Q6 - Product Card Fetcher using the Fake Store API
// Works in Node.js 18+ (console output) and in the browser (console + product cards)

const API_URL = "https://fakestoreapi.com/products";

// Bonus: builds product cards on the page using document.createElement()
function showProductCards(products) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;

    const title = document.createElement("p");
    title.className = "title";
    title.textContent = product.title;

    const price = document.createElement("p");
    price.className = "price";
    price.textContent = `$${product.price}`;

    card.append(image, title, price);
    container.appendChild(card);
  });
}

async function loadProducts() {
  try {
    const response = await fetch(API_URL);

    // fetch doesn't throw on 404/500, so we check response.ok ourselves
    if (!response.ok) {
      throw new Error(`Server responded with status ${response.status}`);
    }

    const products = await response.json();

    // log title, price and image for each product
    products.forEach((product) => {
      console.log(`Product: ${product.title}`);
      console.log(`Price: $${product.price}`);
      console.log(`Image: ${product.image}\n`);
    });

    // only runs inside a browser (Node has no document)
    if (typeof document !== "undefined") {
      showProductCards(products);
    }
  } catch (error) {
    console.log("Failed to load products. Please try again.");
    console.log("Reason:", error.message);

    if (typeof document !== "undefined") {
      document.getElementById("products").textContent =
        "Failed to load products. Please try again.";
    }
  }
}

loadProducts();
