// Search Products
document.getElementById("searchInput").addEventListener("keyup", function () {
  const input = this.value.trim().toLowerCase();
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    const description = card.querySelector(".card-text").textContent.toLowerCase();

    if (title.includes(input) || description.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// Sort Products A-Z
function sortProducts() {
  const container = document.getElementById("productList");
  const cards = Array.from(container.querySelectorAll(".product-card"));

  cards.sort((a, b) => {
    const titleA = a.querySelector(".card-title").textContent.trim().toUpperCase();
    const titleB = b.querySelector(".card-title").textContent.trim().toUpperCase();
    return titleA.localeCompare(titleB);
  });

  cards.forEach(card => container.appendChild(card));
}

// Show alert when user clicks buy (for UX feedback)
document.querySelectorAll(".btn-warning").forEach(button => {
  button.addEventListener("click", function () {
    console.log("Redirecting to Amazon...");
  });
});
