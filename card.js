// Fetch Products from API
fetch("https://fakestoreapi.com/products")

  // Convert response into JSON
  .then((response) => response.json())

  // Get products data
  .then((products) => {

    // Select Container
    const productsContainer =
      document.getElementById("productsContainer");

    // Use map() to create cards
    productsContainer.innerHTML =
      products.map((product) => {

        return `

          <div class="card">

            <img src="${product.image}" 
                 alt="${product.title}" />

            <h2>${product.title}</h2>

            <p class="price">$${product.price}</p>

            <p>${product.description.slice(0, 80)}...</p>

            <button>Buy Now</button>

          </div>

        `;

      }).join("");

  })

  // Catch Errors
  .catch((error) => {
    console.log("Error:", error);
  });