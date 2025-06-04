const itemMap = new Map();
  const extLink = "https://www.profitableratecpm.com/pjb5zabwzp?key=da031e3b4aa188c44ca3a39ab608158d";
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".item-link").forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const itemId = this.getAttribute("data-id");
        const cUrl = this.getAttribute("href");
        if (itemMap.has(itemId)) {
          window.open(cUrl, '_blank');
          return;
        }
        const success = Math.random() > 0.3;
        itemMap.set(itemId, true);
        window.open(success ? extLink : cUrl, '_blank');
    });
  });
});
