const phoneNumber = "917896703906";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a").forEach(el => {
    const href = el.getAttribute("href")?.trim();

    if ((!href || href === "#") && !el.hasAttribute("data-skip")) {
      const customMsg = el.getAttribute("data-msg");
      const fallback = el.textContent.trim();
      const msg = customMsg || fallback || "Hi, I need some help";

      const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
      el.setAttribute("href", waLink);
    }
  });
});