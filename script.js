/* =========================================================
   SAYANTI ACHARJEE — PORTFOLIO JAVASCRIPT
   ========================================================= */


/* =========================================================
   PROJECT DATA
   ========================================================= */

const projects = {

  "missed-contact": {

    number: "PROJECT / 01",

    type: "AUTOMATION",

    eyebrow: "OPERATIONAL AUTOMATION",

    title: "Missed Seller Contact Reduction",

    description:
      "Identified repetitive workflow gaps and developed a lightweight automation solution to improve visibility and reduce missed seller contacts.",

    metric: "89%",

    metricLabel:
      "reduction in missed seller contacts",

    problem:
      "Repetitive workflow steps created visibility gaps and increased the likelihood of missed seller contacts. The process required associates to repeatedly monitor and act on information manually.",

    data:
      "Reviewed operational patterns, contact workflows and recurring failure points to identify where manual intervention was creating unnecessary risk.",

    analysis:
      "The analysis showed that repetitive manual workflow steps were contributing to missed actions. The opportunity was to surface important information earlier and reduce unnecessary manual effort.",

    solution:
      "Developed a lightweight browser automation workflow using Tampermonkey and JavaScript to surface relevant information and make the workflow easier to monitor.",

    impact:
      "The automation significantly reduced missed seller contacts while improving workflow visibility and consistency.",

    impactNumber: "89%",

    impactLabel: "reduction",

    impactWidth: "89",

    tools: [
      "Tampermonkey",
      "JavaScript",
      "Process Analysis",
      "Automation"
    ],

    capabilities: [
      "Workflow Automation",
      "Root Cause Analysis",
      "Process Optimization"
    ]

  },


  "productivity": {

    number: "PROJECT / 02",

    type: "ANALYTICS",

    eyebrow: "PERFORMANCE ANALYTICS",

    title: "Productivity Analytics Dashboard",

    description:
      "Built an analytics dashboard using Power Query, Power Pivot and DAX to improve visibility into associate productivity and performance.",

    metric: "25%",

    metricLabel:
      "productivity improvement",

    problem:
      "Performance information was distributed across multiple data sources, making it difficult to quickly identify productivity trends and performance gaps.",

    data:
      "Consolidated operational performance data and created a structured analytical view using Excel, Power Query, Power Pivot and DAX.",

    analysis:
      "Analyzed productivity patterns, associate-level performance and operational KPIs to identify areas where process visibility could be improved.",

    solution:
      "Designed an interactive performance dashboard that transformed raw operational data into actionable KPIs and performance insights.",

    impact:
      "The dashboard improved performance visibility and contributed to a 25% improvement in associate productivity.",

    impactNumber: "25%",

    impactLabel: "productivity gain",

    impactWidth: "25",

    tools: [
      "Power Query",
      "Power Pivot",
      "DAX",
      "Excel",
      "Power BI"
    ],

    capabilities: [
      "Data Analytics",
      "Dashboard Development",
      "KPI Development"
    ]

  },


  "image-audit": {

    number: "PROJECT / 03",

    type: "QUALITY",

    eyebrow: "IMAGE AUTOMATION AUDIT",

    title: "Quality & Root Cause Analysis",

    description:
      "Audited more than 1,200 cases to identify recurring automation and workflow errors while partnering with Product, Tech, Security and Operations teams.",

    metric: "98.2%",

    metricLabel:
      "post-audit accuracy",

    problem:
      "Recurring automation-related errors were creating quality issues, unnecessary work and aging cases.",

    data:
      "Audited 1,200+ cases over multiple months, focusing on recurring error codes including 5665 and 5461.",

    analysis:
      "Segmented the cases to identify recurring patterns, error sources and workflow gaps. The analysis helped distinguish process issues from technology and automation issues.",

    solution:
      "Created a structured audit approach and collaborated with Product, Technology, Security and Operations stakeholders to address the identified failure points.",

    impact:
      "Achieved 98.2% accuracy after the audit while contributing to a 50.07% reduction in NRR and reducing NVA from 8.25% to 4.4%.",

    impactNumber: "98.2%",

    impactLabel: "audit accuracy",

    impactWidth: "98",

    tools: [
      "Excel",
      "Data Analysis",
      "Quality Audit",
      "Root Cause Analysis"
    ],

    capabilities: [
      "Quality Management",
      "RCA",
      "Cross-functional Collaboration"
    ]

  },


  "nrr": {

    number: "PROJECT / 04",

    type: "PROCESS",

    eyebrow: "SELLER APPEAL / BRAND PROTECTION",

    title: "NRR Reduction",

    description:
      "Used operational data and root-cause analysis to identify drivers of repeat contacts and improve resolution quality across complex seller workflows.",

    metric: "50%",

    metricLabel:
      "NRR reduction through audit",

    problem:
      "Repeat contacts were creating additional workload and negatively affecting operational efficiency.",

    data:
      "Analyzed operational case data, repeat contact patterns, transfer behavior and resolution trends to identify the major drivers of NRR.",

    analysis:
      "Identified recurring process gaps and opportunities to improve first-time resolution by addressing the underlying reason for repeat contacts.",

    solution:
      "Used structured root-cause analysis, process optimization and SOP improvements to address recurring failure points.",

    impact:
      "The initiative contributed to a significant reduction in repeat contacts and improved overall resolution efficiency.",

    impactNumber: "50%",

    impactLabel: "NRR reduction",

    impactWidth: "50",

    tools: [
      "Excel",
      "SQL",
      "Data Analysis",
      "SOP"
    ],

    capabilities: [
      "Root Cause Analysis",
      "Process Optimization",
      "Operational Analytics"
    ]

  },


  "training": {

    number: "PROJECT / 05",

    type: "TRAINING",

    eyebrow: "LEARNING & DEVELOPMENT",

    title: "Training Enablement",

    description:
      "Designed and delivered training across multiple batches, developed SOPs and supported associates through complex operational workflows.",

    metric: "118+",

    metricLabel:
      "associates trained",

    problem:
      "Associates needed structured training and practical guidance to perform complex seller support and Brand Protection workflows accurately.",

    data:
      "Worked with training cohorts, performance metrics, quality results and operational feedback to identify learning gaps.",

    analysis:
      "Used trainee performance, questions, knowledge gaps and operational observations to adapt training content and improve knowledge transfer.",

    solution:
      "Designed and delivered classroom training, developed SOPs and knowledge materials, facilitated activities and collaborated with Learning & Development stakeholders.",

    impact:
      "Trained more than 118 associates across multiple batches while maintaining strong quality and operational performance.",

    impactNumber: "118+",

    impactLabel: "associates trained",

    impactWidth: "88",

    tools: [
      "Training",
      "SOP Development",
      "Facilitation",
      "Adult Learning"
    ],

    capabilities: [
      "Training Delivery",
      "Knowledge Transfer",
      "Coaching"
    ]

  }

};


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const modal = document.getElementById("caseModal");

const modalBackdrop =
  document.getElementById("modalBackdrop");

const modalClose =
  document.getElementById("modalClose");


/* =========================================================
   MODAL ELEMENTS
   ========================================================= */

const caseNumber =
  document.getElementById("caseNumber");

const caseType =
  document.getElementById("caseType");

const caseEyebrow =
  document.getElementById("caseEyebrow");

const caseTitle =
  document.getElementById("caseTitle");

const caseDescription =
  document.getElementById("caseDescription");

const caseMetric =
  document.getElementById("caseMetric");

const caseMetricLabel =
  document.getElementById("caseMetricLabel");

const caseProblem =
  document.getElementById("caseProblem");

const caseData =
  document.getElementById("caseData");

const caseAnalysis =
  document.getElementById("caseAnalysis");

const caseSolution =
  document.getElementById("caseSolution");

const caseImpact =
  document.getElementById("caseImpact");

const impactNumber =
  document.getElementById("impactNumber");

const impactLabel =
  document.getElementById("impactLabel");

const impactBar =
  document.getElementById("impactBar");

const caseTools =
  document.getElementById("caseTools");

const caseCapabilities =
  document.getElementById("caseCapabilities");


/* =========================================================
   OPEN PROJECT MODAL
   ========================================================= */

function openProject(projectId) {

  const project = projects[projectId];

  if (!project) {

    console.error(
      "Project not found:",
      projectId
    );

    return;

  }


  /* ---------------------------------------------
     BASIC PROJECT INFORMATION
     --------------------------------------------- */

  caseNumber.textContent =
    project.number;

  caseType.textContent =
    project.type;

  caseEyebrow.textContent =
    project.eyebrow;

  caseTitle.textContent =
    project.title;

  caseDescription.textContent =
    project.description;


  /* ---------------------------------------------
     HERO METRIC
     --------------------------------------------- */

  caseMetric.textContent =
    project.metric;

  caseMetricLabel.textContent =
    project.metricLabel;


  /* ---------------------------------------------
     CASE STUDY PROCESS
     --------------------------------------------- */

  caseProblem.textContent =
    project.problem;

  caseData.textContent =
    project.data;

  caseAnalysis.textContent =
    project.analysis;

  caseSolution.textContent =
    project.solution;

  caseImpact.textContent =
    project.impact;


  /* ---------------------------------------------
     IMPACT METRIC
     --------------------------------------------- */

  impactNumber.textContent =
    project.impactNumber;

  impactLabel.textContent =
    project.impactLabel;


  /* ---------------------------------------------
     IMPACT BAR
     --------------------------------------------- */

  impactBar.style.setProperty(
    "--impact-width",
    `${project.impactWidth}%`
  );


  /* ---------------------------------------------
     TOOLS
     --------------------------------------------- */

  caseTools.innerHTML = "";

  project.tools.forEach(function(tool) {

    const tag =
      document.createElement("span");

    tag.textContent = tool;

    caseTools.appendChild(tag);

  });


  /* ---------------------------------------------
     CAPABILITIES
     --------------------------------------------- */

  caseCapabilities.innerHTML = "";

  project.capabilities.forEach(
    function(capability) {

      const tag =
        document.createElement("span");

      tag.textContent =
        capability;

      caseCapabilities.appendChild(tag);

    }
  );


  /* ---------------------------------------------
     SHOW MODAL
     --------------------------------------------- */

  modal.classList.add("active");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  /* Prevent background scrolling */

  document.body.classList.add(
    "modal-open"
  );


  /* Start animation */

  setTimeout(function() {

    impactBar.classList.add(
      "animate"
    );

  }, 250);

}


/* =========================================================
   CLOSE PROJECT MODAL
   ========================================================= */

function closeProject() {

  modal.classList.remove(
    "active"
  );

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );


  impactBar.classList.remove(
    "animate"
  );

}


/* =========================================================
   PROJECT BUTTONS
   ========================================================= */

const projectButtons =
  document.querySelectorAll(
    ".showcase-button"
  );


projectButtons.forEach(
  function(button) {

    button.addEventListener(
      "click",
      function() {

        const projectId =
          button.getAttribute(
            "data-project"
          );

        openProject(projectId);

      }
    );

  }
);


/* =========================================================
   CLOSE MODAL EVENTS
   ========================================================= */

if (modalClose) {

  modalClose.addEventListener(
    "click",
    closeProject
  );

}


if (modalBackdrop) {

  modalBackdrop.addEventListener(
    "click",
    closeProject
  );

}


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
  "keydown",
  function(event) {

    if (
      event.key === "Escape" &&
      modal.classList.contains("active")
    ) {

      closeProject();

    }

  }
);


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const navMenu =
  document.getElementById(
    "navMenu"
  );

const navLinks =
  document.getElementById(
    "navLinks"
  );


if (navMenu && navLinks) {

  navMenu.addEventListener(
    "click",
    function() {

      navLinks.classList.toggle(
        "active"
      );

      navMenu.classList.toggle(
        "active"
      );

    }
  );


  /* Close mobile navigation
     after clicking a link */

  navLinks
    .querySelectorAll("a")
    .forEach(function(link) {

      link.addEventListener(
        "click",
        function() {

          navLinks.classList.remove(
            "active"
          );

          navMenu.classList.remove(
            "active"
          );

        }
      );

    });

}


/* =========================================================
   NAVBAR SCROLL EFFECT
   ========================================================= */

const navbar =
  document.getElementById(
    "navbar"
  );


function updateNavbar() {

  if (!navbar) {
    return;
  }


  if (window.scrollY > 40) {

    navbar.classList.add(
      "scrolled"
    );

  } else {

    navbar.classList.remove(
      "scrolled"
    );

  }

}


window.addEventListener(
  "scroll",
  updateNavbar
);


updateNavbar();


/* =========================================================
   ACTIVE NAVIGATION LINK
   ========================================================= */

const sections =
  document.querySelectorAll(
    "section[id]"
  );

const navigationLinks =
  document.querySelectorAll(
    ".nav-links a"
  );


function updateActiveNavigation() {

  let currentSection = "";


  sections.forEach(
    function(section) {

      const sectionTop =
        section.offsetTop - 180;

      const sectionHeight =
        section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY <
          sectionTop + sectionHeight
      ) {

        currentSection =
          section.getAttribute(
            "id"
          );

      }

    }
  );


  navigationLinks.forEach(
    function(link) {

      link.classList.remove(
        "active"
      );


      const href =
        link.getAttribute(
          "href"
        );


      if (
        href === `#${currentSection}`
      ) {

        link.classList.add(
          "active"
        );

      }

    }
  );

}


window.addEventListener(
  "scroll",
  updateActiveNavigation
);


updateActiveNavigation();


/* =========================================================
   SCROLL REVEAL ANIMATION
   ========================================================= */

const revealElements =
  document.querySelectorAll(
    ".reveal"
  );


const revealObserver =
  new IntersectionObserver(
    function(entries) {

      entries.forEach(
        function(entry) {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "visible"
            );

            revealObserver.unobserve(
              entry.target
            );

          }

        }
      );

    },
    {
      threshold: 0.12,

      rootMargin:
        "0px 0px -50px 0px"
    }
  );


revealElements.forEach(
  function(element) {

    revealObserver.observe(
      element
    );

  }
);


/* =========================================================
   STAGGER CARD ANIMATIONS
   ========================================================= */

const cardGroups = [
  ".skill-card",
  ".showcase-card",
  ".recognition-card",
  ".education-item"
];


cardGroups.forEach(
  function(selector) {

    const cards =
      document.querySelectorAll(
        selector
      );


    cards.forEach(
      function(card, index) {

        card.style.transitionDelay =
          `${index * 80}ms`;

      }
    );

  }
);


/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach(
    function(anchor) {

      anchor.addEventListener(
        "click",
        function(event) {

          const targetId =
            anchor.getAttribute(
              "href"
            );


          if (
            !targetId ||
            targetId === "#"
          ) {

            return;

          }


          const target =
            document.querySelector(
              targetId
            );


          if (!target) {

            return;

          }


          event.preventDefault();


          const navbarHeight =
            navbar
              ? navbar.offsetHeight
              : 0;


          const targetPosition =
            target.offsetTop -
            navbarHeight;


          window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

          });

        }
      );

    }
  );


/* =========================================================
   CURSOR GLOW
   ========================================================= */

const cursorGlow =
  document.querySelector(
    ".cursor-glow"
  );


if (cursorGlow) {

  let mouseX = 0;

  let mouseY = 0;

  let currentX = 0;

  let currentY = 0;


  document.addEventListener(
    "mousemove",
    function(event) {

      mouseX =
        event.clientX;

      mouseY =
        event.clientY;

    }
  );


  function animateCursor() {

    currentX +=
      (mouseX - currentX) *
      0.12;

    currentY +=
      (mouseY - currentY) *
      0.12;


    cursorGlow.style.transform =
      `translate3d(${currentX}px, ${currentY}px, 0)`;


    requestAnimationFrame(
      animateCursor
    );

  }


  animateCursor();

}


/* =========================================================
   CARD MOUSE MOVEMENT
   Subtle interactive tilt
   ========================================================= */

const interactiveCards =
  document.querySelectorAll(
    ".skill-card, .showcase-card"
  );


interactiveCards.forEach(
  function(card) {

    card.addEventListener(
      "mousemove",
      function(event) {

        /* Disable tilt on small screens */

        if (
          window.innerWidth < 900
        ) {

          return;

        }


        const rect =
          card.getBoundingClientRect();


        const x =
          event.clientX -
          rect.left;


        const y =
          event.clientY -
          rect.top;


        const centerX =
          rect.width / 2;


        const centerY =
          rect.height / 2;


        const rotateX =
          ((y - centerY) /
            centerY) *
          -2;


        const rotateY =
          ((x - centerX) /
            centerX) *
          2;


        card.style.transform =
          `perspective(1000px)
           rotateX(${rotateX}deg)
           rotateY(${rotateY}deg)
           translateY(-5px)`;

      }
    );


    card.addEventListener(
      "mouseleave",
      function() {

        card.style.transform =
          "";

      }
    );

  }
);


/* =========================================================
   HERO PARALLAX
   ========================================================= */

const heroGrid =
  document.querySelector(
    ".hero-grid"
  );


if (heroGrid) {

  window.addEventListener(
    "scroll",
    function() {

      const scrollPosition =
        window.scrollY;


      if (
        scrollPosition <
        window.innerHeight
      ) {

        heroGrid.style.transform =
          `translateY(${scrollPosition * 0.15}px)`;

      }

    }
  );

}


/* =========================================================
   NUMBER COUNTER
   ========================================================= */

function animateCounter(
  element,
  target,
  suffix = "",
  duration = 1200
) {

  if (!element) {
    return;
  }


  const startTime =
    performance.now();


  function updateCounter(
    currentTime
  ) {

    const elapsed =
      currentTime -
      startTime;


    const progress =
      Math.min(
        elapsed / duration,
        1
      );


    /* Ease out */

    const easedProgress =
      1 -
      Math.pow(
        1 - progress,
        3
      );


    const currentValue =
      target *
      easedProgress;


    element.textContent =
      `${currentValue.toFixed(
        target % 1 === 0
          ? 0
          : 1
      )}${suffix}`;


    if (
      progress < 1
    ) {

      requestAnimationFrame(
        updateCounter
      );

    }

  }


  requestAnimationFrame(
    updateCounter
  );

}


/* =========================================================
   INITIALIZE HERO COUNTERS
   ========================================================= */

let countersStarted = false;


const heroSection =
  document.querySelector(
    ".hero"
  );


if (heroSection) {

  const counterObserver =
    new IntersectionObserver(
      function(entries) {

        entries.forEach(
          function(entry) {

            if (
              entry.isIntersecting &&
              !countersStarted
            ) {

              countersStarted =
                true;


              const counters =
                document.querySelectorAll(
                  ".hero-meta-item strong"
                );


              /* Experience */

              if (counters[0]) {

                animateCounter(
                  counters[0],
                  5,
                  "+"
                );

              }


              /* Associates */

              if (counters[1]) {

                animateCounter(
                  counters[1],
                  118,
                  "+"
                );

              }


              /* Accuracy */

              if (counters[2]) {

                animateCounter(
                  counters[2],
                  98.2,
                  "%"
                );

              }


              /* Productivity */

              if (counters[3]) {

                animateCounter(
                  counters[3],
                  25,
                  "%"
                );

              }


              counterObserver.unobserve(
                heroSection
              );

            }

          }
        );

      },
      {
        threshold: 0.4
      }
    );


  counterObserver.observe(
    heroSection
  );

}


/* =========================================================
   PROJECT HOVER TEXT EFFECT
   ========================================================= */

const showcaseCards =
  document.querySelectorAll(
    ".showcase-card"
  );


showcaseCards.forEach(
  function(card) {

    card.addEventListener(
      "mouseenter",
      function() {

        card.classList.add(
          "is-hovered"
        );

      }
    );


    card.addEventListener(
      "mouseleave",
      function() {

        card.classList.remove(
          "is-hovered"
        );

      }
    );

  }
);


/* =========================================================
   MODAL BODY FOCUS
   ========================================================= */

function focusModal() {

  if (
    modal &&
    modal.classList.contains(
      "active"
    )
  ) {

    setTimeout(
      function() {

        if (modalClose) {

          modalClose.focus();

        }

      },
      100
    );

  }

}


/* =========================================================
   UPDATE OPEN PROJECT FUNCTION
   ========================================================= */

const originalOpenProject =
  openProject;


/* =========================================================
   REDUCED MOTION SUPPORT
   ========================================================= */

const prefersReducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );


if (
  prefersReducedMotion.matches
) {

  document.documentElement.classList.add(
    "reduce-motion"
  );

}


/* =========================================================
   IMAGE LAZY LOADING
   ========================================================= */

document
  .querySelectorAll(
    "img"
  )
  .forEach(
    function(image) {

      image.loading =
        "lazy";

    }
  );


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const footer =
  document.querySelector(
    ".footer"
  );


if (footer) {

  const year =
    new Date().getFullYear();


  footer.innerHTML =
    footer.innerHTML.replace(
      /2026/g,
      year
    );

}


/* =========================================================
   CONSOLE MESSAGE
   ========================================================= */

console.log(
  "%cSayanti Acharjee — Portfolio",
  "font-size:18px;font-weight:bold;"
);


console.log(
  "%cAnalytics × Operations × Impact",
  "font-size:13px;"
);


/* =========================================================
   PAGE READY
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    document.body.classList.add(
      "page-loaded"
    );

  }
);
