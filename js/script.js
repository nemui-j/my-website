// モバイルナビ
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

navToggle.addEventListener("click", () => {
  navList.classList.toggle("is-open");
});

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    e.preventDefault();
    const y = target.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: y, behavior: "smooth" });

    navList.classList.remove("is-open");
  });
});

// セクションのフェードイン
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.2 }
);

sections.forEach((sec) => observer.observe(sec));
