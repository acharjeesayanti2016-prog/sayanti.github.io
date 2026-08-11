/* =========================================================
   SAYANTI ACHARJEE PORTFOLIO
   FINAL JAVASCRIPT
   ========================================================= */


/* ================= PROJECT DATA ================= */

const projects = {

  "missed-contact": {

    type: "AUTOMATION",

    title: "Missed Seller Contact Reduction",

    description:
      "Identified repetitive workflow gaps and developed a lightweight automation solution to improve visibility and reduce missed seller contacts.",

    metric: "89%",

    metricLabel: "reduction in missed seller contacts",

    problem:
      "Repetitive workflow steps created visibility gaps and increased the likelihood of missed seller contacts.",

    data:
      "Reviewed operational patterns, contact workflows and recurring failure points to identify where manual intervention was creating unnecessary risk.",

    analysis:
      "The analysis showed that repetitive manual workflow steps were contributing to missed actions and that important information needed to be surfaced earlier.",

    solution:
      "Developed a lightweight browser automation workflow using Tampermonkey and JavaScript to surface relevant information and reduce manual effort.",

    impact:
      "The solution significantly reduced missed seller contacts while improving workflow visibility and consistency.",

    impactValue: "89%",

    impactWidth: "89%",

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

    type: "ANALYTICS",

    title: "Productivity Analytics Dashboard",

    description:
      "Built an analytics dashboard using Power Query, Power Pivot and DAX to improve visibility into associate productivity and performance.",

    metric: "25%",

    metricLabel: "productivity improvement",

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

    impactValue: "25%",

    impactWidth: "25%",

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

    type: "QUALITY",

    title: "Image Automation Audit",

    description:
      "Audited more than 1,200 cases to identify recurring automation and workflow errors while partnering with Product, Tech, Security and Operations teams.",

    metric: "98.2%",

    metricLabel: "post-audit accuracy",

    problem:
      "Recurring automation-related errors were creating quality issues, unnecessary work and aging cases.",

    data:
      "Audited 1,200+ cases over multiple months, focusing on recurring error patterns including 5665 and 5461.",

    analysis:
      "Segmented cases to identify recurring patterns, error sources and workflow gaps while distinguishing process issues from technology issues.",

    solution:
      "Created a structured audit approach and collaborated with Product, Technology, Security and Operations stakeholders to address identified failure points.",

    impact:
      "Achieved 98.2% accuracy after the audit while contributing to a 50.07% reduction in NRR and reducing NVA from 8.25% to 4.4%.",

    impactValue: "98.2%",

    impactWidth: "98%",

    tools: [
      "Excel",
      "Data Analysis",
      "Quality Audit",
      "RCA"
    ],

    capabilities: [
      "Quality Management",
      "Root Cause Analysis",
      "Cross-functional Collaboration"
    ]

  },


  "nrr": {

    type: "PROCESS",

    title: "NRR Reduction",

    description:
      "Used operational data and root-cause analysis to identify drivers of repeat contacts and improve resolution quality across complex seller workflows.",

    metric: "50%",

    metricLabel: "NRR reduction",

    problem:
      "Repeat contacts were creating additional workload and negatively affecting operational efficiency.",

    data:
      "Analyzed operational case data, repeat contact patterns, transfer behavior and resolution trends to identify major drivers of NRR.",

    analysis:
      "Identified recurring process gaps and opportunities to improve first-time resolution by addressing underlying reasons for repeat contacts.",

    solution:
      "Used structured root-cause analysis, process optimization and SOP improvements to address recurring failure points.",

    impact:
      "The initiative contributed to a significant reduction in repeat contacts and improved overall resolution efficiency.",

    impactValue: "50%",

    impactWidth: "50%",

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

    type: "TRAINING",

    title: "Training Enablement",

    description:
      "Designed and delivered training across multiple batches, developed SOPs and supported associates through complex operational workflows.",

    metric: "118+",

    metricLabel: "associates trained",

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

    impactValue: "118+",

    impactWidth: "88%",

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


/* ================= DOM ================= */

const modal =
  document.getElementById("caseModal");

const modalClose =
  document.getElementById("modalClose");

const modalBackdrop =
  document.getElementById("modalBackdrop");


/* ================= MODAL ELEMENTS ================= */

const modalType =
  document.getElementById("modalType");

const modalTitle =
  document.getElementById("modalTitle");

const modalDescription =
  document.getElementById("modalDescription");

const modalMetric =
  document.getElementById("modalMetric");

const modalMetricLabel =
  document.getElementById("modalMetricLabel");

const modalProblem =
  document.getElementById("modalProblem");

const modalData =
  document.getElementById("modalData");

const modalAnalysis =
  document.getElementById("modalAnalysis");

const modalSolution =
  document.getElementById("modalSolution");

const modalImpact =
  document.getElementById("modalImpact");

const impactValue =
  document.getElementById("impactValue");

const impactBar =
  document.getElementById("impactBar");

const modalTools =
  document.getElementById("modalTools");

const modalCapabilities =
  document.getElementById("modalCapabilities");


/* ================= OPEN MODAL ================= */

function openProject(id) {

  const project = projects[id];

  if (!project) return;


  modalType.textContent =
    project.type;

  modalTitle.textContent =
    project.title;

  modalDescription.textContent =
    project.description;

  modalMetric.textContent =
    project.metric;

  modalMetricLabel.textContent =
    project.metricLabel;

  modalProblem.textContent =
    project.problem;

  modalData.textContent =
    project.data;

  modalAnalysis.textContent =
    project.analysis;

  modalSolution.textContent =
    project.solution;

  modalImpact.textContent =
    project.impact;

  impactValue.textContent =
    project.impactValue;


  /* Tools */

  modalTools.innerHTML = "";

  project.tools.forEach(tool => {

    const span =
      document.createElement("span");

    span.textContent = tool;

    modalTools.appendChild(span);

  });


  /* Capabilities */

  modalCapabilities.innerHTML = "";

  project.capabilities.forEach(item => {

    const span =
      document.createElement("span");

    span.textContent = item;

    modalCapabilities.appendChild(span);

  });


  modal.classList.add("active");

  document.body.classList.add("modal-open");


  impactBar.style.width = "0";


  setTimeout(() => {

    impactBar.style.width =
      project.impactWidth;

  }, 200);

}


/* ================= CLOSE MODAL ================= */

function closeProject() {

  modal.classList.remove("active");

  document.body.classList.remove("modal-open");

}


modalClose.addEventListener(
  "click",
  closeProject
);


modalBackdrop.addEventListener(
  "click",
  closeProject
);


document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      modal.classList.contains("active")
    ) {

      closeProject();

    }

  }
);


/* ================= PROJECT BUTTONS ================= */

document
  .querySelectorAll(".case-study-btn")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        openProject(
          button.dataset.project
        );

      }
    );

  });


/* ================= MOBILE MENU ================= */

const menuBtn =
  document.getElementById("menuBtn");

const navLinks =
  document.getElementById("navLinks");


menuBtn.addEventListener(
  "click",
  () => {

    navLinks.classList.toggle("active");

  }
);


navLinks
  .querySelectorAll("a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        navLinks.classList.remove("active");

      }
    );

  });


/* ================= NAVBAR ================= */

const navbar =
  document.getElementById("navbar");


window.addEventListener(
  "scroll",
  () => {

    if (window.scrollY > 50) {

      navbar.classList.add("scrolled");

    } else {

      navbar.classList.remove("scrolled");

    }

  }
);


/* ================= SCROLL REVEAL ================= */

const revealElements =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: .12
    }
  );


revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* ================= ACTIVE NAV ================= */

const sections =
  document.querySelectorAll("section[id]");

const navItems =
  document.querySelectorAll(".nav-links a");


window.addEventListener(
  "scroll",
  () => {

    let current = "";

    sections.forEach(section => {

      const top =
        section.offsetTop - 180;

      if (
        window.scrollY >= top
      ) {

        current =
          section.id;

      }

    });


    navItems.forEach(link => {

      link.classList.remove("active");

      if (
        link.getAttribute("href") ===
        `#${current}`
      ) {

        link.classList.add("active");

      }

    });

  }
);


/* ================= HERO COUNTERS ================= */

let countersStarted = false;

const hero =
  document.querySelector(".hero");


const counterObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (
          entry.isIntersecting &&
          !countersStarted
        ) {

          countersStarted = true;

          document
            .querySelectorAll(
              ".hero-stats strong"
            )
            .forEach(element => {

              const original =
                element.textContent;

              const target =
                parseFloat(
                  element.dataset.count
                );

              const hasDecimal =
                original.includes(".");

              const suffix =
                original.includes("%")
                  ? "%"
                  : "+";

              let start = 0;

              const duration = 1000;

              const startTime =
                performance.now();


              function update(time) {

                const progress =
                  Math.min(
                    (time - startTime) /
                    duration,
                    1
                  );


                const eased =
                  1 -
                  Math.pow(
                    1 - progress,
                    3
                  );


                const value =
                  start +
                  (target - start) *
                  eased;


                element.textContent =
                  `${hasDecimal
                    ? value.toFixed(1)
                    : Math.round(value)
                  }${suffix}`;


                if (progress < 1) {

                  requestAnimationFrame(
                    update
                  );

                }

              }


              requestAnimationFrame(
                update
              );

            });

        }

      });

    }
  );


counterObserver.observe(hero);


/* ================= PROJECT CARD EFFECT ================= */

document
  .querySelectorAll(".project-card")
  .forEach(card => {

    card.addEventListener(
      "mousemove",
      event => {

        if (window.innerWidth < 900)
          return;


        const rect =
          card.getBoundingClientRect();

        const x =
          event.clientX - rect.left;

        const y =
          event.clientY - rect.top;

        const rotateY =
          ((x - rect.width / 2) /
            rect.width) * 3;

        const rotateX =
          ((y - rect.height / 2) /
            rect.height) * -3;


        card.style.transform =
          `perspective(1200px)
           rotateX(${rotateX}deg)
           rotateY(${rotateY}deg)
           translateY(-6px)`;

      }
    );


    card.addEventListener(
      "mouseleave",
      () => {

        card.style.transform = "";

      }
    );

  });


/* ================= KEYBOARD ACCESSIBILITY ================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      navLinks.classList.contains("active")
    ) {

      navLinks.classList.remove("active");

    }

  }
);


/* ================= PAGE READY ================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    document.body.classList.add(
      "page-loaded"
    );

  }
);
