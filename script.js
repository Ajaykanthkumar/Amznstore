console.log("Script loaded.");
function filterProducts() {
  const input = document.getElementById("search-input").value.toLowerCase();
  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    const name = product.getAttribute("data-name").toLowerCase();
    if (name.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
