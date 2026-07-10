const menu = document.querySelector(".menu-btn"),
  nav = document.querySelector(".nav");
menu?.addEventListener("click", () => {
  nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", nav.classList.contains("open"));
});
document
  .querySelectorAll(".nav a")
  .forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open")),
  );
const observer = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    }),
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
const topBtn = document.querySelector(".back-top");
addEventListener("scroll", () =>
  topBtn?.classList.toggle("show", scrollY > 500),
);
topBtn?.addEventListener("click", () =>
  scrollTo({ top: 0, behavior: "smooth" }),
);
document.querySelectorAll(".faq-question").forEach((b) =>
  b.addEventListener("click", () => {
    const item = b.parentElement;
    document
      .querySelectorAll(".faq-item")
      .forEach((x) => x !== item && x.classList.remove("open"));
    item.classList.toggle("open");
    b.setAttribute("aria-expanded", item.classList.contains("open"));
  }),
);
const lightbox = document.querySelector(".lightbox");
document.querySelectorAll(".gallery-item img").forEach((img) =>
  img.addEventListener("click", () => {
    if (lightbox) {
      lightbox.querySelector("img").src = img.src;
      lightbox.querySelector("img").alt = img.alt;
      lightbox.classList.add("open");
    }
  }),
);
lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target.tagName === "BUTTON")
    lightbox.classList.remove("open");
});
document.querySelector(".contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const n = e.currentTarget.querySelector(".notice");
  n.style.display = "block";
  e.currentTarget.reset();
});
