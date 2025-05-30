const viruses = [
  {
    name: "ILOVEYOU",
    image: "images/iloveyou.jpg",
    description: "A famous worm from 2000 that spread through email and caused massive global damage."
  },
  {
    name: "WannaCry",
    image: "images/wannacry.jpg",
    description: "Ransomware attack from 2017 targeting Windows PCs using EternalBlue exploit."
  },
  {
    name: "Stuxnet",
    image: "images/stuxnet.jpg",
    description: "Discovered in 2010, it sabotaged Iran's nuclear program using sophisticated methods."
  }
];

const translations = {
  en: {
    siteTitle: "Computer Virus Encyclopedia",
    homeTitle: "Welcome",
    homeDescription: "Explore the most infamous computer viruses in history.",
    virusTitle: "Virus Directory",
    aboutTitle: "About This Site",
    aboutDescription: "This encyclopedia is an educational resource covering major computer viruses, their history, and impact.",
    themeBtn: "Toggle Theme",
    langBtn: "Change Language"
  },
  es: {
    siteTitle: "Enciclopedia de Virus Informáticos",
    homeTitle: "Bienvenido",
    homeDescription: "Explora los virus informáticos más infames de la historia.",
    virusTitle: "Directorio de Virus",
    aboutTitle: "Sobre Este Sitio",
    aboutDescription: "Esta enciclopedia es un recurso educativo que cubre los principales virus informáticos, su historia y su impacto.",
    themeBtn: "Cambiar Tema",
    langBtn: "Cambiar Idioma"
  }
};

let currentLang = "en";
let darkMode = false;

function renderText() {
  const t = translations[currentLang];
  document.getElementById("site-title").textContent = t.siteTitle;
  document.getElementById("home-title").textContent = t.homeTitle;
  document.getElementById("home-description").textContent = t.homeDescription;
  document.getElementById("virus-title").textContent = t.virusTitle;
  document.getElementById("about-title").textContent = t.aboutTitle;
  document.getElementById("about-description").textContent = t.aboutDescription;
  document.getElementById("themeBtn").textContent = t.themeBtn;
  document.getElementById("langBtn").textContent = t.langBtn;
}

function renderViruses() {
  const container = document.getElementById("virusContainer");
  container.innerHTML = "";

  viruses.forEach((v) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${v.image}" alt="${v.name}">
      <div class="card-content">
        <h3>${v.name}</h3>
        <p>${v.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function toggleTheme() {
  darkMode = !darkMode;
  document.body.classList.toggle("dark", darkMode);
}

function toggleLanguage() {
  currentLang = currentLang === "en" ? "es" : "en";
  renderText();
}

renderText();
renderViruses();
