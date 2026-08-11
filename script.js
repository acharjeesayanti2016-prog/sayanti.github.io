const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

/* =========================================
   MOBILE NAVIGATION
========================================= */

const menu = $("#menu-toggle");
const nav = $("#nav");

menu?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

$$("nav a").forEach((a) => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});


/* =========================================
   DARK / LIGHT MODE
========================================= */

const theme = $("#theme-toggle");

const savedTheme = localStorage.getItem("sayanti-theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
  if (theme) theme.textContent = "☾";
}

theme?.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");

  localStorage.setItem(
    "sayanti-theme",
    isLight ? "light" : "dark"
  );

  theme.textContent = isLight ? "☾" : "☼";
});


/* =========================================
   CURSOR GLOW EFFECT
========================================= */

const glow = $(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  if (window.innerWidth > 850 && glow) {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  }
});


/* =========================================
   SCROLL REVEAL ANIMATIONS
========================================= */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

$$(".reveal").forEach((element) => {
  revealObserver.observe(element);
});


/* =========================================
   ANIMATED IMPACT COUNTERS
========================================= */

const counters = $$(".counter");

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const element = entry.target;

      const target = Number(element.dataset.target);

      const duration = 1200;

      const startTime = performance.now();

      const animateCounter = (currentTime) => {
        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        /*
          Ease-out animation:
          starts quickly and slows down naturally.
        */
        const easedProgress =
          1 - Math.pow(1 - progress, 3);

        element.textContent = Math.round(
          target * easedProgress
        );

        if (progress < 1) {
          requestAnimationFrame(animateCounter);
        }
      };

      requestAnimationFrame(animateCounter);

      counterObserver.unobserve(element);
    });
  },
  {
    threshold: 0.7
  }
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});


/* =========================================
   PROJECT CASE STUDIES
========================================= */

const caseStudies = {

  automation: {
    type: "AUTOMATION · OPERATIONS",

    title: "Missed Contact Automation",

    challenge:
      "A high-volume operational workflow contained avoidable manual misses that could affect seller-contact execution and create additional follow-up work.",

    approach:
      "Mapped the repetitive workflow, identified opportunities for lightweight browser automation, and built a Tampermonkey mechanism to provide a reliable guardrail around the process.",

    outcome:
      "Reduced missed seller contacts by 89%, while simplifying execution for associates and creating a more consistent operating mechanism."
  },


  dashboard: {
    type: "DATA · BUSINESS INTELLIGENCE",

    title: "Operational Productivity Dashboard",

    challenge:
      "Operational data was spread across multiple inputs and required manual consolidation, making it difficult to quickly identify productivity patterns and improvement opportunities.",

    approach:
      "Used Power Query, Power Pivot and DAX to structure operational data, standardize reporting and surface actionable productivity signals.",

    outcome:
      "Improved associate productivity by 25% and created a reusable mechanism for operational visibility."
  },


  audit: {
    type: "QUALITY · CONTROLS",

    title: "Image Automation Audit",

    challenge:
      "Automation-related error patterns required deeper investigation to distinguish process issues from system and execution gaps.",

    approach:
      "Audited more than 1,200 cases, analyzed error patterns, identified root causes and partnered with relevant stakeholders to strengthen the operating mechanism.",

    outcome:
      "Reached 98.2% accuracy post-audit, reduced NRR by approximately 50% and reduced NVA from 8.25% to 4.4% in the referenced initiative."
  },


  training: {
    type: "TRAINING · LEARNING",

    title: "Specialist Training & Knowledge Transfer",

    challenge:
      "New and specialist associates needed structured learning, practical application and measurable readiness before moving into production.",

    approach:
      "Designed and facilitated training, incorporated quizzes and knowledge checks, used quality and productivity signals to identify learning gaps, and partnered with learning and operations stakeholders.",

    outcome:
      "Trained more than 118 associates across multiple batches and contributed to specialist knowledge-transfer initiatives."
  }

};


/* =========================================
   PROJECT MODAL
========================================= */

const modal = $("#project-modal");

const modalType = $("#modal-type");

const modalTitle = $("#modal-title");

const modalChallenge = $("#modal-challenge");

const modalApproach = $("#modal-approach");

const modalOutcome = $("#modal-outcome");


$$(".project-card").forEach((card) => {

  const button = card.querySelector(".case-link");

  button?.addEventListener("click", () => {

    const projectName = card.dataset.project;

    const data = caseStudies[projectName];

    if (!data) return;

    modalType.textContent = data.type;

    modalTitle.textContent = data.title;

    modalChallenge.textContent = data.challenge;

    modalApproach.textContent = data.approach;

    modalOutcome.textContent = data.outcome;

    modal.classList.add("open");

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow = "hidden";

  });

});


/* =========================================
   CLOSE PROJECT MODAL
========================================= */

$$("[data-close]").forEach((element) => {

  element.addEventListener("click", closeModal);

});


document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    closeModal();
  }

});


function closeModal() {

  if (!modal) return;

  modal.classList.remove("open");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow = "";

}


/* =========================================
   ACTIVE NAVIGATION SECTION
========================================= */

const sections = $$("main section[id]");

const navLinks = $$("nav a");

const activeObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      const activeLink =
        document.querySelector(
          `nav a[href="#${entry.target.id}"]`
        );

      activeLink?.classList.add("active");

    });

  },
  {
    rootMargin: "-35% 0px -55% 0px"
  }
);


sections.forEach((section) => {
  activeObserver.observe(section);
});


/* =========================================
   SMOOTH SCROLL
========================================= */

$$('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetId =
      link.getAttribute("href");

    if (
      !targetId ||
      targetId === "#"
    ) {
      return;
    }

    const target =
      document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* =========================================
   PROJECT CARD TILT EFFECT
========================================= */

$$(".project-card").forEach((card) => {

  card.addEventListener("mousemove", (event) => {

    if (window.innerWidth <= 850) return;

    const rect =
      card.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

    const centerX =
      rect.width / 2;

    const centerY =
      rect.height / 2;

    const rotateX =
      ((y - centerY) / centerY) * -2;

    const rotateY =
      ((x - centerX) / centerX) * 2;

    card.style.transform =
      `perspective(900px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       translateY(-5px)`;

  });


  card.addEventListener("mouseleave", () => {

    card.style.transform = "";

  });

});


/* =========================================
   HERO PROFILE CARD PARALLAX
========================================= */

const heroVisual = $(".hero-visual");

const profileCard =
  $(".profile-card");

heroVisual?.addEventListener(
  "mousemove",
  (event) => {

    if (window.innerWidth <= 850) return;

    const rect =
      heroVisual.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

    const centerX =
      rect.width / 2;

    const centerY =
      rect.height / 2;

    const moveX =
      ((x - centerX) / centerX) * 8;

    const moveY =
      ((y - centerY) / centerY) * 8;

    if (profileCard) {

      profileCard.style.transform =
        `translate(${moveX}px, ${moveY}px)`;

    }

  }
);


heroVisual?.addEventListener(
  "mouseleave",
  () => {

    if (profileCard) {
      profileCard.style.transform = "";
    }

  }
);


/* =========================================
   PAGE LOAD
========================================= */

window.addEventListener("load", () => {

  document.body.classList.add("loaded");

});


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
  "%cSayanti Acharjee — Portfolio",
  "font-size:18px;font-weight:bold;"
);

console.log(
  "Operations × Analytics × Automation"
);
