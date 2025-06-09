document.addEventListener("DOMContentLoaded", () => {
  const groupLink = "https://whatsapp.com/channel/0029VaAxrMK3WHTaOACifa3U";
  const el = document.getElementById("group-link");

  if (el && el.getAttribute("href") === "https://whatsapp.com/channel/0029VaAxrMK3WHTaOACifa3U") {
    el.setAttribute("href", groupLink);
    el.setAttribute("target", "_blank"); // optional
  }
});