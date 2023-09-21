const newsletterField = document.querySelector(".newsletter-right input");
const newsletterMainContainer = document.querySelector(".main-input-container");

newsletterField.addEventListener("focus", () => {
  newsletterMainContainer.style.zIndex = "-2";
  newsletterMainContainer.classList.add("focused");
});

newsletterField.addEventListener("blur", () => {
  newsletterMainContainer.style.zIndex = "1";
  newsletterMainContainer.classList.remove("focused");
});
