const PORTAL_URLS = {
  parent: "https://smart-school.up.railway.app/parent_login.php",
  student: "https://smart-school.up.railway.app/login.php",
  teacher: "https://smart-school.up.railway.app/login.php",
  forgotPassword: "https://smart-school.up.railway.app/forgot_password.php"
};
const FORM_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID";
const NEWSLETTER_ENDPOINT = "https://REPLACE_WITH_YOUR_MAILING_LIST_ENDPOINT";
const WHATSAPP_NUMBER = "233246410195";
const WHATSAPP_GENERAL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Morning Dew Academy, I would like to make an enquiry about your school.")}`;
const WHATSAPP_ADMISSION = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Morning Dew Academy, I am interested in admission for my ward. Please provide me with information about the admission process.")}`;

const pageLinks = [
  ["Home", "index.html", "home"],
  ["Academics", "academics.html", "academics"],
  ["Campus Life", "campus-life.html", "campus"],
  ["Photo Gallery", "gallery.html", "gallery"],
  ["Admissions", "admissions.html", "admissions"],
  ["Blog", "blog.html", "blog"],
  ["Parents & Students Portal", "portal.html", "portal"],
  ["Contact", "contact.html", "contact"]
];

const schoolPhotos = [
  { title: "Our pupils", category: "Community", image: "assets/WhatsApp Image 2026-11-20 at 12.55.27 PM.jpeg", altText: "Morning Dew Academy pupils in the school grounds" },
  { title: "School learners", category: "Classroom", image: "assets/WhatsApp Image 2026-11-20 at 12.59.15 PM.jpeg", altText: "Morning Dew Academy learners in blue and white uniforms" },
  { title: "Morning Dew class", category: "Classroom", image: "assets/WhatsApp Image 2026-11-20 at 12.57.09 PM.jpeg", altText: "Morning Dew Academy pupils wearing the school uniform" },
  { title: "Pupils together", category: "Community", image: "assets/WhatsApp Image 2026-11-20 at 12.55.27 PM (1).jpeg", altText: "Morning Dew Academy pupils together" },
  { title: "Around the school", category: "Cultural Events", image: "assets/WhatsApp Image 2026-11-20 at 12.55.28 PM.jpeg", altText: "Morning Dew Academy school community" },
  { title: "Learning and play", category: "Sports & Play", image: "assets/WhatsApp Image 2026-11-20 at 12.55.28 PM (1).jpeg", altText: "Morning Dew Academy pupils in an outdoor school setting" },
  { title: "School building", category: "Community", image: "assets/WhatsApp Image 2026-11-20 at 12.59.13 PM (1).jpeg", altText: "Morning Dew Academy school building" },
  { title: "School transport", category: "Community", image: "assets/WhatsApp Image 2026-11-20 at 12.59.17 PM.jpeg", altText: "Morning Dew Academy transport vehicle" }
];

function renderHeader() {
  const mount = document.querySelector("#site-header");
  if (!mount) return;
  const active = document.body.dataset.page;
  const links = pageLinks.filter(([, , key]) => key !== "home").map(([label, href, key]) =>
    `<a href="${href}"${active === key ? ' aria-current="page"' : ""}>${label}</a>`
  ).join("");
  mount.innerHTML = `
    <header class="site-header">
      <div class="nav-inner">
        <a class="brand" href="index.html" aria-label="Morning Dew Academy home">
          <img src="assets/morning-dew-logo.jpeg" width="100" height="100" alt="Morning Dew Academy crest">
          <span>MORNING DEW<small>ACADEMY · BRONYIBIMA</small></span>
        </a>
        <nav class="main-nav" id="primary-navigation" aria-label="Main navigation">
          <button class="mobile-drawer-close" type="button" aria-label="Close navigation menu">&times;</button>
          <a href="index.html"${active === "home" ? ' aria-current="page"' : ""}>Home</a>
          <div class="nav-group">
            <button type="button" class="nav-dropdown-button" aria-expanded="false">About</button>
            <div class="dropdown-menu"><a href="about.html">Our Story</a><a href="about.html#mission-vision">Mission &amp; Vision</a></div>
          </div>
          ${links}
        </nav>
        <a class="button button-gold nav-apply" href="admissions.html">Apply now</a>
        <button class="theme-toggle" type="button" aria-label="Switch to dark theme" aria-pressed="false">☾</button>
        <button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="primary-navigation">☰</button>
      </div>
    </header>
    <button class="nav-backdrop" type="button" tabindex="-1" aria-label="Close navigation menu"></button>`;
}

function renderFooter() {
  const mount = document.querySelector("#site-footer");
  if (!mount) return;
  mount.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-main">
        <div>
          <a class="footer-brand" href="index.html"><img src="assets/morning-dew-logo.jpeg" width="100" height="100" loading="lazy" alt="Morning Dew Academy crest"><span>MORNING DEW ACADEMY<small>GOD REIGNS</small></span></a>
          <p>A caring learning community in Bronyibima – New Site, Elmina.</p>
          <div class="footer-links footer-social"><a href="${WHATSAPP_GENERAL}" target="_blank" rel="noopener noreferrer">WhatsApp enquiry</a><a href="mailto:jt7753182@gmail.com">Email the school</a></div>
        </div>
        <div><h2>Explore</h2><nav class="footer-links" aria-label="Footer navigation">${pageLinks.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}</nav></div>
        <div class="footer-contact"><h2>Contact</h2><address>Bronyibima, KEEA District,<br>Central Region, Ghana<br>Post Office Box EL 305</address><p><a href="${WHATSAPP_GENERAL}" target="_blank" rel="noopener noreferrer">+233 24 641 0195</a></p><p>024 246 6898 · 024 962 8141</p><p><a href="mailto:jt7753182@gmail.com">jt7753182@gmail.com</a></p>
          <div class="footer-map"><iframe title="Map of Bronyibima, Elmina, Ghana" src="https://www.google.com/maps?q=Bronyibima%2C%20Elmina%2C%20Ghana&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        </div>
        <div><h2>Send a quick note</h2><form class="footer-mini-form" data-form-kind="contact" novalidate><label class="sr-only" for="footer-name">Your name</label><input id="footer-name" name="name" placeholder="Your name" required><label class="sr-only" for="footer-email">Your email</label><input id="footer-email" type="email" name="email" placeholder="Your email" required><label class="sr-only" for="footer-message">Your message</label><textarea id="footer-message" name="message" placeholder="Your message" required></textarea><p class="form-status" role="status" aria-live="polite"></p><button type="submit">Send via WhatsApp</button><small class="form-note">Your message will open in WhatsApp for review.</small></form></div>
      </div>
      <div class="container footer-bottom"><p>&copy; <span data-current-year></span> Morning Dew Academy. All rights reserved.</p><p>Motto: God Reigns</p></div>
    </footer>
    <a class="floating-whatsapp" href="${WHATSAPP_GENERAL}" target="_blank" rel="noopener noreferrer" aria-label="Enquire on WhatsApp">WhatsApp</a>
    <button class="back-to-top" type="button" aria-label="Back to top">↑</button>`;
}

function setupPreloader() {
  const preloader = document.createElement("div");
  preloader.className = "preloader";
  preloader.setAttribute("aria-label", "Loading Morning Dew Academy");
  preloader.innerHTML = `<div class="preloader-inner"><span class="preloader-ring" aria-hidden="true"></span><img src="assets/morning-dew-logo.jpeg" width="100" height="100" alt=""><span>Morning Dew Academy</span></div>`;
  document.body.append(preloader);
  window.setTimeout(() => {
    preloader.classList.add("is-done");
    window.setTimeout(() => preloader.remove(), 600);
  }, 350);
}

function setupNavigation() {
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".main-nav");
  const toggle = document.querySelector(".menu-toggle");
  const close = document.querySelector(".mobile-drawer-close");
  const backdrop = document.querySelector(".nav-backdrop");
  const dropdownButton = document.querySelector(".nav-dropdown-button");
  const dropdownGroup = document.querySelector(".nav-group");
  const setDrawer = (open) => {
    if (!nav || !toggle || !backdrop) return;
    nav.classList.toggle("is-open", open);
    backdrop.classList.toggle("is-visible", open);
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    if (open) close?.focus();
    else toggle.focus();
  };
  toggle?.addEventListener("click", () => setDrawer(!nav?.classList.contains("is-open")));
  close?.addEventListener("click", () => setDrawer(false));
  backdrop?.addEventListener("click", () => setDrawer(false));
  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setDrawer(false)));
  dropdownButton?.addEventListener("click", () => {
    const expanded = dropdownButton.getAttribute("aria-expanded") === "true";
    dropdownButton.setAttribute("aria-expanded", String(!expanded));
    dropdownGroup?.classList.toggle("is-expanded", !expanded);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav?.classList.contains("is-open")) setDrawer(false);
  });
  const syncHeader = () => header?.classList.toggle("is-solid", window.scrollY > 24);
  window.addEventListener("scroll", syncHeader, { passive: true });
  syncHeader();
}

function setupTheme() {
  let dark = false;
  try {
    dark = localStorage.getItem("solid-rock-theme") === "dark";
  } catch (error) {
    console.warn("Theme preference could not be read from local storage.", error);
  }
  document.body.classList.toggle("theme-dark", dark);
  document.querySelectorAll(".theme-toggle").forEach((button) => {
    const update = () => {
      button.setAttribute("aria-pressed", String(dark));
      button.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
      button.textContent = dark ? "☀" : "☾";
    };
    update();
    button.addEventListener("click", () => {
      dark = !dark;
      document.body.classList.toggle("theme-dark", dark);
      update();
      try {
        localStorage.setItem("solid-rock-theme", dark ? "dark" : "light");
      } catch (error) {
        console.warn("Theme preference could not be saved.", error);
      }
    });
  });
}

function setupReveal() {
  const elements = [...new Set(document.querySelectorAll(".reveal, main h1, main h2, main .section-heading, main .split-copy, main .image-frame, main .feature-card, main .stat-card, main .value-card, main .leader-card, main .timeline-item, main .flip-card, main .step-card, main .outcome-card, main .house-card, main .club-card, main .activity-item, main .gallery-item, main .post-card, main .story-detail, main .faq-item, main .contact-card, main .site-form, main .login-card, main .tab-panel, main .field, main p:not(.eyebrow):not(.form-status), main .button-submit, main .filter-row, main .share-row, main .newsletter-form, main .post-image"))];
  elements.forEach((element, index) => {
    element.classList.add("reveal");
    if (!element.dataset.reveal) element.dataset.reveal = ["up", "left", "right", "zoom"][index % 4];
    element.style.setProperty("--reveal-delay", `${(index % 5) * 55}ms`);
  });
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -28px 0px" });
  elements.forEach((element) => observer.observe(element));
}

function setupScrollUtilities() {
  const progress = document.querySelector(".scroll-progress");
  const backToTop = document.querySelector(".back-to-top");
  const timeline = document.querySelector(".timeline");
  const sections = [...document.querySelectorAll(".parallax-section")];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let ticking = false;
  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
    backToTop?.classList.toggle("is-visible", window.scrollY > 500);
    if (timeline) {
      const rect = timeline.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (window.innerHeight * .8 - rect.top) / (rect.height + window.innerHeight * .8)));
      timeline.style.setProperty("--timeline-progress", `${ratio * 100}%`);
    }
    if (!reduceMotion) sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const offset = Math.max(-55, Math.min(55, (window.innerHeight / 2 - rect.top - rect.height / 2) * .09));
      section.style.setProperty("--parallax-offset", `${offset}px`);
    });
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
  update();
  backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function setupCounters() {
  const counters = [...document.querySelectorAll("[data-count]")];
  if (!counters.length) return;
  const finish = (element) => { element.textContent = `${element.dataset.count}${element.dataset.suffix || ""}`; };
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    counters.forEach(finish);
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const element = entry.target;
    const end = Number(element.dataset.count);
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / 1500);
      element.textContent = `${Math.round(end * (1 - Math.pow(1 - progress, 3)))}${element.dataset.suffix || ""}`;
      if (progress < 1) window.requestAnimationFrame(tick);
    };
    window.requestAnimationFrame(tick);
    currentObserver.unobserve(element);
  }), { threshold: .6 });
  counters.forEach((counter) => observer.observe(counter));
}

function setupHeroCarousel() {
  const slides = [...document.querySelectorAll(".hero-slide")];
  if (slides.length < 2) return;
  const dotsMount = document.querySelector(".carousel-dots");
  const previous = document.querySelector("[data-hero-prev]");
  const next = document.querySelector("[data-hero-next]");
  let current = Math.max(0, slides.findIndex((slide) => slide.classList.contains("is-active")));
  let timer;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const dots = slides.map((slide, index) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Show hero slide ${index + 1}`);
    dot.addEventListener("click", () => show(index));
    dotsMount?.append(dot);
    return dot;
  });
  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, item) => {
      slide.classList.toggle("is-active", item === current);
      slide.setAttribute("aria-hidden", String(item !== current));
    });
    dots.forEach((dot, item) => dot.setAttribute("aria-current", String(item === current)));
  };
  const play = () => {
    window.clearInterval(timer);
    if (!reduced) timer = window.setInterval(() => show(current + 1), 5600);
  };
  previous?.addEventListener("click", () => { show(current - 1); play(); });
  next?.addEventListener("click", () => { show(current + 1); play(); });
  const hero = document.querySelector(".hero-home");
  hero?.addEventListener("mouseenter", () => window.clearInterval(timer));
  hero?.addEventListener("mouseleave", play);
  hero?.addEventListener("focusin", () => window.clearInterval(timer));
  hero?.addEventListener("focusout", play);
  show(current);
  play();
}

function setupHorizontalCarousels() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll("[data-horizontal-carousel]").forEach((carousel) => {
    const track = carousel.querySelector("[data-carousel-track]");
    const cards = [...(track?.querySelectorAll(".carousel-card") || [])];
    const previous = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    const status = carousel.querySelector("[data-carousel-status]");
    if (!track || !cards.length) return;
    let timer;
    const step = () => cards[0].getBoundingClientRect().width + (parseFloat(getComputedStyle(track).columnGap) || 0);
    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      const current = Math.min(cards.length, Math.round(track.scrollLeft / step()) + 1);
      if (previous) previous.disabled = track.scrollLeft <= 1;
      if (next) next.disabled = track.scrollLeft >= max - 2;
      if (status) status.textContent = `${current} / ${cards.length}`;
    };
    const move = (direction) => {
      const max = track.scrollWidth - track.clientWidth;
      if (direction > 0 && track.scrollLeft >= max - 2 && carousel.dataset.autoplay === "true") {
        track.scrollTo({ left: 0, behavior: reduced ? "auto" : "smooth" });
      } else {
        track.scrollBy({ left: step() * direction, behavior: reduced ? "auto" : "smooth" });
      }
    };
    const stop = () => window.clearInterval(timer);
    const play = () => {
      stop();
      if (reduced || carousel.dataset.autoplay !== "true") return;
      timer = window.setInterval(() => move(1), 6500);
    };
    previous?.addEventListener("click", () => { move(-1); play(); });
    next?.addEventListener("click", () => { move(1); play(); });
    track.addEventListener("scroll", update, { passive: true });
    track.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        move(event.key === "ArrowRight" ? 1 : -1);
      }
    });
    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", play);
    carousel.addEventListener("focusin", stop);
    carousel.addEventListener("focusout", (event) => {
      if (!carousel.contains(event.relatedTarget)) play();
    });
    update();
    play();
  });
}

function renderPhotoGallery() {
  const grid = document.querySelector("[data-photo-grid]");
  if (!grid) return;
  grid.replaceChildren(...schoolPhotos.map((photo) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gallery-item reveal";
    button.dataset.schoolPhoto = "true";
    button.dataset.category = photo.category;
    button.dataset.image = photo.image;
    button.dataset.caption = `${photo.title} · Morning Dew Academy`;
    const image = document.createElement("img");
    image.src = photo.image;
    image.alt = photo.altText;
    image.width = 1400;
    image.height = 933;
    image.loading = "lazy";
    image.decoding = "async";
    const label = document.createElement("span");
    label.textContent = photo.title;
    button.append(image, label);
    return button;
  }));
}

function setupPhotoFilters() {
  const buttons = [...document.querySelectorAll("[data-photo-filter]")];
  const grid = document.querySelector("[data-photo-grid]");
  const count = document.querySelector("[data-photo-count]");
  if (!grid || !buttons.length) return;
  const update = (filter) => {
    const cards = [...grid.querySelectorAll(".gallery-item")];
    let visible = 0;
    cards.forEach((card) => {
      const show = filter === "all" || card.dataset.category === filter;
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (count) count.textContent = `${visible} ${visible === 1 ? "photo" : "photos"} · Morning Dew Academy`;
  };
  buttons.forEach((button) => button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.toggle("is-active", item === button));
    update(button.dataset.photoFilter);
  }));
  update("all");
}

function setupGallery() {
  const dialog = document.querySelector(".lightbox");
  const image = dialog?.querySelector("img");
  const caption = dialog?.querySelector("p");
  const close = dialog?.querySelector(".lightbox-close");
  const previous = dialog?.querySelector("[data-lightbox-prev]");
  const next = dialog?.querySelector("[data-lightbox-next]");
  let returnFocus = null;
  let currentItems = [];
  let currentIndex = 0;
  const show = (index) => {
    if (!image || !caption || !currentItems.length) return;
    currentIndex = (index + currentItems.length) % currentItems.length;
    const item = currentItems[currentIndex];
    image.src = item.dataset.image;
    image.alt = item.querySelector("img")?.alt || item.dataset.caption || "School photo";
    caption.textContent = item.dataset.caption || "";
  };
  document.querySelectorAll(".gallery-item").forEach((item) => item.addEventListener("click", () => {
    if (!dialog || !image || !caption) return;
    returnFocus = item;
    currentItems = [...document.querySelectorAll(".gallery-item")].filter((candidate) => !candidate.hidden && candidate.dataset.image);
    currentIndex = currentItems.indexOf(item);
    show(currentIndex);
    if (typeof dialog.showModal === "function") dialog.showModal();
  }));
  previous?.addEventListener("click", () => show(currentIndex - 1));
  next?.addEventListener("click", () => show(currentIndex + 1));
  close?.addEventListener("click", () => dialog?.close());
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog?.addEventListener("close", () => returnFocus?.focus());
  dialog?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      show(currentIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      show(currentIndex + 1);
    }
  });
}

function setupTabs() {
  const buttons = [...document.querySelectorAll('[role="tab"]')];
  const activate = (button) => {
    buttons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-selected", String(selected));
      item.tabIndex = selected ? 0 : -1;
      const panel = document.getElementById(item.getAttribute("aria-controls"));
      if (panel) {
        panel.hidden = !selected;
        panel.classList.toggle("is-active", selected);
      }
    });
  };
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => activate(button));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const target = event.key === "Home" ? 0 : event.key === "End" ? buttons.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + buttons.length) % buttons.length;
      buttons[target].focus();
      activate(buttons[target]);
    });
  });
}

function setupForms() {
  document.querySelectorAll("form[data-form-kind]").forEach((form) => form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");
    const fields = [...form.querySelectorAll("input,select,textarea")];
    const invalid = fields.filter((field) => !field.checkValidity());
    fields.forEach((field) => field.setAttribute("aria-invalid", String(!field.checkValidity())));
    if (invalid.length) {
      if (status) {
        status.textContent = "Please complete the required fields with valid information.";
        status.className = "form-status is-error";
      }
      invalid[0].focus();
      return;
    }
    if (!status) return;
    const formKind = form.dataset.formKind;
    if (formKind === "admissions" || formKind === "contact") {
      const source = formKind === "admissions" ? "Admissions page" : "Contact page";
      const fieldLabels = new Map(fields.map((field) => [
        field.name,
        field.closest("label")?.querySelector("span")?.textContent?.replace("*", "").trim() || field.name
      ]));
      const submittedFields = [...new FormData(form).entries()].filter(([, value]) => String(value).trim());
      const messageLines = [
        `Hello Morning Dew Academy, I would like to make an enquiry about your school. This message came from the ${source}.`,
        "",
        ...submittedFields.map(([name, value]) => {
          return `${fieldLabels.get(name) || name}: ${String(value).trim()}`;
        })
      ];
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageLines.join("\n"))}`;
      const whatsappWindow = window.open(whatsappUrl, "_blank");
      if (whatsappWindow) {
        whatsappWindow.opener = null;
        status.textContent = "WhatsApp opened with your details. Please review the message and send it there.";
        status.className = "form-status is-success";
      } else {
        status.textContent = "WhatsApp did not open automatically. ";
        status.className = "form-status is-error";
        const link = document.createElement("a");
        link.href = whatsappUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Open your prefilled message in WhatsApp";
        status.append(link);
      }
      return;
    }
    if (FORM_ENDPOINT.includes("REPLACE_WITH_YOUR_FORM_ID")) {
      status.textContent = "Your form is complete, but delivery is not configured yet. Please contact the school using details to be confirmed.";
      status.className = "form-status is-error";
      return;
    }
    const submit = form.querySelector('[type="submit"]');
    if (submit) submit.disabled = true;
    status.textContent = "Sending your message…";
    status.className = "form-status";
    try {
      const response = await fetch(FORM_ENDPOINT, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error(`Form service returned ${response.status}`);
      form.reset();
      form.classList.add("is-sent");
      status.textContent = "Thank you. Your message has been sent.";
      status.className = "form-status is-success";
    } catch (error) {
      console.error("Could not submit the form.", error);
      status.textContent = "We couldn't send your message. Please try again later.";
      status.className = "form-status is-error";
    } finally {
      if (submit) submit.disabled = false;
    }
  }));
  document.querySelectorAll(".newsletter-form").forEach((form) => form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");
    const email = form.querySelector('input[type="email"]');
    if (!email?.checkValidity()) {
      email?.reportValidity();
      return;
    }
    if (NEWSLETTER_ENDPOINT.includes("REPLACE_WITH_YOUR_MAILING_LIST_ENDPOINT")) {
      if (status) {
        status.textContent = "Newsletter delivery is not configured yet. Please contact the school to subscribe.";
        status.className = "form-status is-error";
      }
      return;
    }
    try {
      const response = await fetch(NEWSLETTER_ENDPOINT, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error(`Mailing-list service returned ${response.status}`);
      form.reset();
      if (status) {
        status.textContent = "Thank you for subscribing.";
        status.className = "form-status is-success";
      }
    } catch (error) {
      console.error("Could not submit newsletter signup.", error);
      if (status) {
        status.textContent = "We couldn't complete your signup. Please try again later.";
        status.className = "form-status is-error";
      }
    }
  }));
}

function setupBlog() {
  const filters = [...document.querySelectorAll("[data-post-filter]")];
  const cards = [...document.querySelectorAll(".post-card")];
  const search = document.querySelector("[data-post-search]");
  let category = "all";
  const update = () => {
    const query = search?.value.trim().toLowerCase() || "";
    cards.forEach((card) => {
      const categoryMatches = category === "all" || card.dataset.category === category;
      const searchMatches = !query || `${card.dataset.search} ${card.textContent}`.toLowerCase().includes(query);
      card.hidden = !(categoryMatches && searchMatches);
    });
  };
  filters.forEach((button) => button.addEventListener("click", () => {
    category = button.dataset.postFilter;
    filters.forEach((item) => item.classList.toggle("is-active", item === button));
    update();
  }));
  search?.addEventListener("input", update);
  document.querySelectorAll('[data-share="copy"]').forEach((button) => button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      button.textContent = "Link copied";
    } catch (error) {
      console.warn("Clipboard access is unavailable.", error);
      button.textContent = "Copy the page URL";
    }
  }));
}

function setupPortal() {
  document.querySelectorAll("[data-portal-url]").forEach((link) => {
    const key = link.dataset.portalUrl;
    if (Object.prototype.hasOwnProperty.call(PORTAL_URLS, key)) {
      link.href = PORTAL_URLS[key];
    }
  });
}

function setupMicroInteractions() {
  document.querySelectorAll(".button").forEach((button) => button.addEventListener("pointerdown", (event) => {
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "button-ripple";
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
    button.append(ripple);
    ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
  }));
  document.querySelectorAll(".flip-card").forEach((card) => {
    card.addEventListener("click", () => card.classList.toggle("is-flipped"));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        card.classList.toggle("is-flipped");
      }
    });
  });
  document.querySelectorAll("[data-current-year]").forEach((item) => { item.textContent = String(new Date().getFullYear()); });
  document.querySelectorAll("img").forEach((image) => image.addEventListener("error", () => {
    image.classList.add("asset-unavailable");
    image.setAttribute("data-asset-error", "true");
  }, { once: true }));
}

function setupPageTransitions() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target || link.hasAttribute("download")) return;
    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin || !url.pathname.endsWith(".html") || url.pathname === window.location.pathname) return;
    event.preventDefault();
    const cover = document.createElement("div");
    cover.className = "page-transition";
    document.body.append(cover);
    window.setTimeout(() => { window.location.href = url.href; }, 180);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  renderPhotoGallery();
  setupPreloader();
  setupNavigation();
  setupTheme();
  setupReveal();
  setupScrollUtilities();
  setupCounters();
  setupHeroCarousel();
  setupHorizontalCarousels();
  setupPhotoFilters();
  setupTabs();
  setupForms();
  setupGallery();
  setupBlog();
  setupPortal();
  setupMicroInteractions();
  setupPageTransitions();
});
