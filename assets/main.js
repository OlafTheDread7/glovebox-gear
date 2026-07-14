/* Glovebox Gear — affiliate link engine.
   Every "Check Price" button carries a data-amz search phrase; we build a
   tagged Amazon search URL at runtime so links stay maintainable and compliant. */
(function () {
  var AFFILIATE_TAG = "onamzjacob034-20";

  function amazonLink(query) {
    return "https://www.amazon.com/s?k=" + encodeURIComponent(query) + "&tag=" + AFFILIATE_TAG;
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Wire affiliate buttons
    document.querySelectorAll("[data-amz]").forEach(function (el) {
      el.setAttribute("href", amazonLink(el.getAttribute("data-amz")));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "sponsored nofollow noopener");
    });

    // Mobile nav toggle
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if (toggle && links) {
      toggle.addEventListener("click", function () {
        links.classList.toggle("open");
      });
    }

    // Current year in footer
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  });
})();
