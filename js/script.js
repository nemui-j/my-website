// モバイルナビの開閉
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("is-open");
  });

  navList.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navList.classList.remove("is-open");
    }
  });
}

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();
    const rect = target.getBoundingClientRect();
    const offset = window.pageYOffset + rect.top - 72; // ヘッダー分
    window.scrollTo({ top: offset, behavior: "smooth" });
  });
});
