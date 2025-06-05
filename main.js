const viruses = [
  {
    name: "ILOVEYOU",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Loveletter-wurm.png",
    description: "A famous worm from 2000 that spread through email and caused massive global damage.",
    details: `Type: Worm<br>
Year: 2000<br>
Origin: Philippines<br>
Impact: Infected millions of Windows computers worldwide, overwriting files and stealing passwords.<br>
How it spread: Email attachment with the subject "ILOVEYOU".<br>
Source: <a href="https://en.wikipedia.org/wiki/ILOVEYOU" target="_blank">Wikipedia</a>`
  },
  {
    name: "WannaCry",
    image: "https://upload.wikimedia.org/wikipedia/en/1/18/Wana_Decrypt0r_screenshot.png",
    description: "Ransomware attack from 2017 targeting Windows PCs using EternalBlue exploit.",
    details: `Type: Ransomware<br>
Year: 2017<br>
Origin: Worldwide<br>
Impact: Infected over 200,000 computers in 150 countries, encrypting files and demanding ransom.<br>
How it spread: Exploited SMB vulnerability (EternalBlue).<br>
Source: <a href="https://en.wikipedia.org/wiki/WannaCry_ransomware_attack" target="_blank">Wikipedia</a>`
  },
  {
    name: "Stuxnet",
    image: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_65f5af5a6086902ffd700775_65f698ca6aa5424e8d28e83d/scale_1200",
    description: "Discovered in 2010, it sabotaged Iran's nuclear program using sophisticated methods.",
    details: `Type: Worm<br>
Year: 2010<br>
Origin: Allegedly US/Israel<br>
Impact: Targeted Iranian nuclear facilities, damaging centrifuges.<br>
How it spread: USB drives and Windows vulnerabilities.<br>
Source: <a href="https://en.wikipedia.org/wiki/Stuxnet" target="_blank">Wikipedia</a>`
  },
  {
    name: "WinLock",
    image: "https://i.ytimg.com/vi/7jf7d8luSOg/maxresdefault.jpg",
    description: "A ransomware trojan that locks the user's desktop and demands payment to unlock.",
    details: `Type: Ransomware<br>
Year: 2010<br>
Origin: Russia<br>
Impact: Locked users out of their computers, demanding payment via SMS.<br>
How it spread: Malicious downloads and fake software.<br>
Source: <a href="https://en.wikipedia.org/wiki/Winlock" target="_blank">Wikipedia</a>`
  },
  {
    name: "CryptoLocker",
    image: "https://i.pinimg.com/236x/3f/b0/37/3fb03748c8288c46bf7edd0a721b0648--software-flash.jpg?nii=t",
    description: "A ransomware trojan targeting Windows, encrypting files and demanding ransom.",
    details: `Type: Ransomware<br>
Year: 2013<br>
Origin: Worldwide<br>
Impact: Encrypted files on infected computers, demanding payment in Bitcoin.<br>
How it spread: Email attachments and botnets.<br>
Source: <a href="https://en.wikipedia.org/wiki/CryptoLocker" target="_blank">Wikipedia</a>`
  },
  {
    name: "Melissa",
    image: "https://avatars.mds.yandex.net/i?id=e7f61ce301c1faa48713a149198f3418_l-12933346-images-thumbs&n=13",
    description: "A mass-mailing macro virus from 1999 that disrupted email systems.",
    details: `Type: Macro virus<br>
Year: 1999<br>
Origin: USA<br>
Impact: Caused email servers to overload by mass-mailing itself.<br>
How it spread: Infected Word documents sent via email.<br>
Source: <a href="https://en.wikipedia.org/wiki/Melissa_(computer_virus)" target="_blank">Wikipedia</a>`
  },
  {
    name: "Mydoom",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/81/Mydoom_text_file.png",
    description: "One of the fastest-spreading email worms ever, discovered in 2004.",
    details: `Type: Worm<br>
Year: 2004<br>
Origin: Unknown<br>
Impact: Caused billions in damages, slowed global internet traffic.<br>
How it spread: Mass-mailed itself using its own SMTP engine.<br>
Source: <a href="https://en.wikipedia.org/wiki/Mydoom" target="_blank">Wikipedia</a>`
  },
  {
    name: "Zeus",
    image: "https://avatars.mds.yandex.net/i?id=f26cdbe169704c229024daab0c26edf4_l-5143135-images-thumbs&n=13",
    description: "A notorious banking trojan that stole financial data.",
    details: `Type: Trojan<br>
Year: 2007<br>
Origin: Eastern Europe<br>
Impact: Stole millions of dollars from bank accounts worldwide.<br>
How it spread: Drive-by downloads and phishing.<br>
Source: <a href="https://en.wikipedia.org/wiki/Zeus_(malware)" target="_blank">Wikipedia</a>`
  },
  {
    name: "Conficker",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Conficker.svg/330px-Conficker.svg.png",
    description: "A worm that infected millions of computers in 2008 and 2009.",
    details: `Type: Worm<br>
Year: 2008<br>
Origin: Unknown<br>
Impact: Infected millions of computers, created massive botnets.<br>
How it spread: Windows vulnerability (MS08-067).<br>
Source: <a href="https://en.wikipedia.org/wiki/Conficker" target="_blank">Wikipedia</a>`
  },
  {
    name: "Petya",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/65/2017_Petya_cyberattack_screenshot.png",
    description: "A ransomware family that encrypts the master file table of infected computers.",
    details: `Type: Ransomware<br>
Year: 2016<br>
Origin: Worldwide<br>
Impact: Rendered computers unusable by encrypting critical data.<br>
How it spread: Phishing emails and exploits.<br>
Source: <a href="https://en.wikipedia.org/wiki/Petya_(malware)" target="_blank">Wikipedia</a>`
  },
  {
    name: "Sasser",
    image: "https://versiya.info/uploads/posts/2017-04/medium/1493225581_saser-665x.png",
    description: "A computer worm that spread by exploiting a Windows vulnerability in 2004.",
    details: `Type: Worm<br>
Year: 2004<br>
Origin: Germany<br>
Impact: Caused computers to crash and reboot repeatedly.<br>
How it spread: Exploited LSASS vulnerability.<br>
Source: <a href="https://en.wikipedia.org/wiki/Sasser_(computer_worm)" target="_blank">Wikipedia</a>`
  },
  {
    name: "Code Red",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Website_defaced_by_Code_Red_worm.png",
    description: "A worm that attacked Microsoft IIS web servers in 2001.",
    details: `Type: Worm<br>
Year: 2001<br>
Origin: USA<br>
Impact: Defaced websites and launched denial-of-service attacks.<br>
How it spread: Exploited a buffer overflow in IIS.<br>
Source: <a href="https://en.wikipedia.org/wiki/Code_Red_(computer_worm)" target="_blank">Wikipedia</a>`
  },
  {
    name: "Slammer",
    image: "https://versiya.info/uploads/posts/2017-04/medium/1493225597_sql-665x.png",
    description: "A fast-spreading worm that caused Internet slowdowns in 2003.",
    details: `Type: Worm<br>
Year: 2003<br>
Origin: Unknown<br>
Impact: Slowed down global Internet traffic.<br>
How it spread: Exploited a vulnerability in Microsoft SQL Server.<br>
Source: <a href="https://en.wikipedia.org/wiki/SQL_Slammer" target="_blank">Wikipedia</a>`
  },
  {
    name: "Blaster",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Blaster_hex_dump.png/330px-Blaster_hex_dump.png",
    description: "A worm that caused Windows computers to crash and reboot in 2003.",
    details: `Type: Worm<br>
Year: 2003<br>
Origin: USA<br>
Impact: Caused computers to crash and reboot.<br>
How it spread: Exploited a vulnerability in Windows DCOM RPC.<br>
Source: <a href="https://en.wikipedia.org/wiki/Blaster_(computer_worm)" target="_blank">Wikipedia</a>`
  },
  {
    name: "CIH (Chernobyl)",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/CIH.png",
    description: "A destructive virus that overwrote data and BIOS chips.",
    details: `Type: Virus<br>
Year: 1998<br>
Origin: Taiwan<br>
Impact: Overwrote data and sometimes BIOS, rendering computers unusable.<br>
How it spread: Infected executable files.<br>
Source: <a href="https://en.wikipedia.org/wiki/CIH_(computer_virus)" target="_blank">Wikipedia</a>`
  },
  {
    name: "Storm Worm",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Cybercrime_wikifoto.jpg",
    description: "A trojan horse that turned computers into a botnet in 2007.",
    details: `Type: Trojan/Worm<br>
Year: 2007<br>
Origin: Europe<br>
Impact: Created a massive botnet for spam and attacks.<br>
How it spread: Email attachments and links.<br>
Source: <a href="https://en.wikipedia.org/wiki/Storm_Worm" target="_blank">Wikipedia</a>`
  },
  {
    name: "BlackEnergy",
    image: "https://avatars.mds.yandex.net/i?id=042134ab8d71f0f920ce21c4c0edd7b6_l-12248382-images-thumbs&n=13",
    description: "A trojan used in cyberattacks against Ukraine's power grid.",
    details: `Type: Trojan<br>
Year: 2007<br>
Origin: Russia<br>
Impact: Used in attacks on critical infrastructure.<br>
How it spread: Phishing emails and malicious documents.<br>
Source: <a href="https://en.wikipedia.org/wiki/BlackEnergy" target="_blank">Wikipedia</a>`
  }
];

const translations = {
  en: {
    siteTitle: "Computer Virus Encyclopedia",
    homeTitle: "Welcome",
    homeDescription: "This website is dedicated to educating users about the most notorious computer viruses in history. Here, you can learn how these viruses spread, the damage they caused, and their impact on cybersecurity. Browse the virus directory to discover detailed information, images, and facts about each virus. Stay informed and help protect yourself from digital threats.",
    virusTitle: "Virus Directory",
    aboutTitle: "About This Site",
    aboutDescription: "This encyclopedia is an educational resource covering major computer viruses, their history, and impact.",
    themeBtn: "Toggle Theme",
    langBtn: "Change Language"
  },
  es: {
    siteTitle: "Enciclopedia de Virus Informáticos",
    homeTitle: "Bienvenido",
    homeDescription: "Este sitio web está dedicado a educar a los usuarios sobre los virus informáticos más notorios de la historia. Aquí puedes aprender cómo se propagaron estos virus, los daños que causaron y su impacto en la ciberseguridad. Explora el directorio de virus para descubrir información detallada, imágenes y datos sobre cada virus. Mantente informado y ayuda a protegerte de las amenazas digitales.",
    virusTitle: "Directorio de Virus",
    aboutTitle: "Sobre Este Sitio",
    aboutDescription: "Esta enciclopedia es un recurso educativo que cubre los principales virus informáticos, su historia y su impacto.",
    themeBtn: "Cambiar Tema",
    langBtn: "Cambiar Idioma"
  },
  uk: {
    siteTitle: "Енциклопедія комп'ютерних вірусів",
    homeTitle: "Ласкаво просимо",
    homeDescription: "Цей сайт присвячений освіті користувачів щодо найвідоміших комп'ютерних вірусів в історії. Тут ви дізнаєтеся, як ці віруси поширювалися, яку шкоду вони завдали та їхній вплив на кібербезпеку. Перегляньте каталог вірусів, щоб знайти детальну інформацію, зображення та факти про кожен вірус. Будьте поінформовані та захищайте себе від цифрових загроз.",
    virusTitle: "Каталог вірусів",
    aboutTitle: "Про сайт",
    aboutDescription: "Ця енциклопедія — освітній ресурс про основні комп'ютерні віруси, їхню історію та вплив.",
    themeBtn: "Змінити тему",
    langBtn: "Змінити мову"
  },
  fr: {
    siteTitle: "Encyclopédie des Virus Informatiques",
    homeTitle: "Bienvenue",
    homeDescription: "Ce site est dédié à l'éducation des utilisateurs sur les virus informatiques les plus notoires de l'histoire. Ici, vous pouvez apprendre comment ces virus se sont propagés, les dégâts qu'ils ont causés et leur impact sur la cybersécurité. Parcourez l'annuaire des virus pour découvrir des informations détaillées, des images et des faits sur chaque virus. Restez informé et protégez-vous contre les menaces numériques.",
    virusTitle: "Annuaire des Virus",
    aboutTitle: "À propos de ce site",
    aboutDescription: "Cette encyclopédie est une ressource éducative couvrant les principaux virus informatiques, leur histoire et leur impact.",
    themeBtn: "Changer de thème",
    langBtn: "Changer de langue"
  },
  zh: {
    siteTitle: "计算机病毒百科全书",
    homeTitle: "欢迎",
    homeDescription: "本网站致力于向用户普及历史上最臭名昭著的计算机病毒。在这里，您可以了解这些病毒的传播方式、造成的损害及其对网络安全的影响。浏览病毒目录，发现每种病毒的详细信息、图片和事实。保持警惕，保护自己免受数字威胁。",
    virusTitle: "病毒目录",
    aboutTitle: "关于本站",
    aboutDescription: "本百科全书是一个涵盖主要计算机病毒、其历史和影响的教育资源。",
    themeBtn: "切换主题",
    langBtn: "切换语言"
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

  viruses.forEach((v, idx) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${v.image}" alt="${v.name}">
      <div class="card-content">
        <h3>${v.name}</h3>
        <p>${v.description}</p>
      </div>
    `;
    card.addEventListener("click", () => showVirusDetails(idx));
    container.appendChild(card);
  });
}

// Modal for virus details
function showVirusDetails(idx) {
  let modal = document.getElementById("virus-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "virus-modal";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100vw";
    modal.style.height = "100vh";
    modal.style.background = "rgba(0,0,0,0.7)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = "1000";
    modal.innerHTML = `<div id="virus-modal-content" style="background:#fff;max-width:500px;width:90%;padding:2rem;border-radius:10px;position:relative"></div>`;
    document.body.appendChild(modal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  }
  const v = viruses[idx];
  document.getElementById("virus-modal-content").innerHTML = `
    <button style="position:absolute;top:10px;right:10px;font-size:1.5rem;cursor:pointer" onclick="document.getElementById('virus-modal').style.display='none'">&times;</button>
    <h2>${v.name}</h2>
    <img src="${v.image}" alt="${v.name}" style="width:100%;max-height:200px;object-fit:contain;margin-bottom:1rem;">
    <p>${v.details}</p>
  `;
  modal.style.display = "flex";
}

function toggleTheme() {
  darkMode = !darkMode;
  document.body.classList.toggle("dark", darkMode);
}

function toggleLanguage() {
  const langs = ["en", "es", "uk", "fr", "zh"];
  let idx = langs.indexOf(currentLang);
  currentLang = langs[(idx + 1) % langs.length];
  renderText();
}

renderText();
renderViruses();
