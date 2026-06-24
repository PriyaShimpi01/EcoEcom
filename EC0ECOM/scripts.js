document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const productCards = document.querySelectorAll(".product-card");

  searchInput.addEventListener("input", function () {
    const value = searchInput.value.toLowerCase();
    productCards.forEach(card => {
      const title = card.querySelector("h3").innerText.toLowerCase();
      card.style.display = title.includes(value) ? "block" : "none";
    });
  });

  const buyButtons = document.querySelectorAll(".buy-now");
  buyButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Thanks for your purchase! (Simulated Checkout)");
    });
  });

  const cartButtons = document.querySelectorAll(".add-cart");
  cartButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Item added to cart! (Simulated Cart)");
    });
  });
});
