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

const mobileNav = document.querySelector(".mobile-nav");
document.getElementById("mobile-menu").addEventListener("click", () => {
  if (!mobileNav.classList.contains("mobile-nav-active")) {
    mobileNav.classList.add("mobile-nav-active");
  } else {
    mobileNav.classList.remove("mobile-nav-active");
  }
});
