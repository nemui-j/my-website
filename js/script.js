// ------------------------------
// モバイルナビ開閉
// ------------------------------
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("is-open");
  });
}

// ------------------------------
// スムーススクロール
// ------------------------------
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    e.preventDefault();

    const y = target.getBoundingClientRect().top + window.scrollY - 60;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    // モバイルナビを閉じる
    navList.classList.remove("is-open");
  });
});
