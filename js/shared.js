const page = document.body.dataset.page;
const links = [
  ["home", "index.html", "Home"],
  ["about", "about.html", "About"],
  ["officials", "officials.html", "Officials"],
  ["services", "services.html", "Services"],
  ["gallery", "gallery.html", "Gallery"],
];
document.querySelector("#header").innerHTML =
  `<div class="topbar"><div class="container"><span>Barangay Puntod &middot; Cagayan de Oro City</span><span>Community information portal</span></div></div><header class="site-header"><div class="container nav-wrap"><a class="brand" href="index.html"><img class="brand-mark" src="images/puntod-official-seal-original.png" alt="Puntod Barangay Council official seal"><span>BARANGAY PUNTOD<small>CAGAYAN DE ORO CITY</small></span></a><button class="menu-btn" aria-label="Open navigation" aria-expanded="false">&#9776;</button><nav class="nav" aria-label="Main navigation">${links.map((x) => `<a class="${page === x[0] ? "active" : ""}" href="${x[1]}">${x[2]}</a>`).join("")}</nav></div></header>`;
document.querySelector("#shared-footer").innerHTML =
  `<section class="cta"><div class="container"><div><h2>Let's build a brighter Puntod, together.</h2><span>Your participation makes our community stronger.</span></div><a class="btn" href="services.html#contact">Get in touch</a></div></section><footer class="footer"><div class="container"><div class="footer-grid"><div><img src="images/puntod-official-seal-original.png" alt="Puntod Barangay Council official seal" style="width:76px;height:76px;border-radius:50%"><h3>Barangay Puntod</h3><p>A community information website celebrating service, heritage, and bayanihan.</p></div><div><h3>Quick Links</h3>${links
    .slice(0, 4)
    .map((x) => `<a href="${x[1]}">${x[2]}</a>`)
    .join("")}</div><div><h3>Explore</h3>${links
    .slice(4)
    .map((x) => `<a href="${x[1]}">${x[2]}</a>`)
    .join(
      "",
    )}</div><div><h3>Contact</h3><p>Puntod, Cagayan de Oro City<br>9000 Philippines</p><p>email: barangaypuntod1960@gmail.com</p><a href="https://www.facebook.com/BrgyPuntod.InfoOffice" rel="noopener noreferrer" aria-label="Barangay Facebook page"" aria-label="Barangay Facebook page">Facebook</a></div></div><div class="copyright">&copy; <span>${new Date().getFullYear()}</span> Barangay Puntod</div></div></footer><button class="back-top" aria-label="Back to top">&uarr;</button>`;
