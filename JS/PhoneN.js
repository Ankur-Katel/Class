const phoneNumber = "917896703906";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a").forEach(el => {
    const href = el.getAttribute("href");

    if (!href || href.trim() === "#") {
      // Yeh WhatsApp link banega
      const defaultMsg = "Hi, I need some help";
      const msg = el.textContent.trim() || defaultMsg;

      const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
      el.setAttribute("href", waLink);
    }
  });
});