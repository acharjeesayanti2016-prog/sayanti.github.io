/* =========================================================
   HELPER FUNCTIONS
========================================================= */

const $ = (selector) =>
  document.querySelector(selector);

const $$ = (selector) =>
  document.querySelectorAll(selector);


/* =========================================================
   CURSOR GLOW
========================================================= */

const cursorGlow =
  $(".cursor-glow");

if (cursorGlow) {

  document.addEventListener(
    "mousemove",
    (event) => {

      cursorGlow.style.left =
        `${event.clientX}px`;

      cursorGlow.style.top =
        `${event.clientY}px`;

    }
  );

}


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
  $("#menu-toggle");

const mainNav =
  $("#main-nav");


if (menuToggle && mainNav) {

  menuToggle.addEventListener(
    "click",
    () => {

      mainNav.classList.toggle("open");

      menuToggle.textContent =
        mainNav.classList.contains("open")
          ? "×"
          : "☰";

    }
  );


  $$("#main-nav a").forEach(
    (link) => {

      link.addEventListener(
        "click",
        () => {

          mainNav.classList.remove("open");

          menuToggle.textContent =
            "☰";

        }
      );

    }
  );

}


/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        (entry) => {

          if (entry.isIntersecting) {

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
      threshold: 0.12
    }
  );


$$(".reveal").forEach(
  (element) => {

    revealObserver.observe(element);

  }
);


/* =========================================================
   COUNTERS
========================================================= */

const counters =
  $$(".counter");


const counterObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        (entry) => {

          if (!entry.isIntersecting) {
            return;
          }

          const element =
            entry.target;

          const target =
            Number(
              element.dataset.target
            );

          let current = 0;

          const duration =
            1200;

          const stepTime =
            Math.max(
              duration / target,
              10
            );

          const timer =
            setInterval(
              () => {

                current++;

                element.textContent =
                  current;

                if (current >= target) {

                  clearInterval(timer);

                  element.textContent =
                    target;

                }

              },
              stepTime
            );

          counterObserver.unobserve(
            element
          );

        }
      );

    },
    {
      threshold: .7
    }
  );


counters.forEach(
  (counter) => {

    counterObserver.observe(
      counter
    );

  }
);


/* =========================================================
   CASE STUDIES
========================================================= */

const caseStudies = {


  automation: {

    type:
      "AUTOMATION · OPERATIONS",

    title:
      "Missed Contact Automation",

    challenge:
      "A high-volume operational workflow contained avoidable manual misses that could affect seller-contact execution and create additional follow-up work.",

    analysis:
      "Mapped repetitive workflow steps and identified the points where manual execution was creating avoidable misses.",

    approach:
      "Built a lightweight Tampermonkey browser mechanism that created workflow guardrails without requiring a large technology change.",

    outcome:
      "Reduced missed seller contacts by 89% while creating a more consistent operating mechanism.",

    metrics: [

      ["89%", "Missed-contact reduction"],

      ["Automation", "Workflow mechanism"],

      ["Scale", "Reusable process"]

    ]

  },


  productivity: {

    type:
      "DATA · BUSINESS INTELLIGENCE",

    title:
      "Operational Productivity Dashboard",

    challenge:
      "Operational data was spread across multiple inputs, making it difficult to quickly identify productivity patterns.",

    analysis:
      "Structured operational data and identified productivity signals that could be standardized into reusable reporting.",

    approach:
      "Used Power Query, Power Pivot and DAX to create a reusable analytics and reporting mechanism.",

    outcome:
      "Improved associate productivity by 25% and created stronger operational visibility.",

    metrics: [

      ["25%", "Productivity improvement"],

      ["DAX", "Analytics logic"],

      ["BI", "Reusable reporting"]

    ]

  },


  audit: {

    type:
      "QUALITY · CONTROLS",

    title:
      "Image Automation Audit",

    challenge:
      "Automation-related error patterns required deeper investigation to distinguish process issues from system or execution gaps.",

    analysis:
      "Audited more than 1,200 cases and classified defects across OCR, metadata, routing and other automation-related categories.",

    approach:
      "Partnered with Product, Engineering, Security and Operations stakeholders to strengthen controls and continuous monitoring.",

    outcome:
      "Reached 98.2% accuracy, reduced aging tickets by 77%, reduced NVA from 8.25% to 4.40% and materially reduced NRR.",

    metrics: [

      ["98.2%", "Post-audit accuracy"],

      ["77%", "Aging reduction"],

      ["8.25 → 4.40%", "NVA"]

    ]

  },


  aging: {

    type:
      "OPERATIONS · ANALYTICS",

    title:
      "Aging Report",

    challenge:
      "Ticket aging information was distributed across queues and required better real-time visibility.",

    analysis:
      "Connected multiple data sources and structured tickets into age buckets and operational dimensions.",

    approach:
      "Created a ticket analytics tool with filtering, saved filter combinations and real-time visibility.",

    outcome:
      "Created a centralized mechanism for understanding ticket aging across 150+ queues and multiple regions.",

    metrics: [

      ["3", "APIs"],

      ["150+", "Queues"],

      ["NA/EU/FE", "Regions"]

    ]

  },


  ppx: {

    type:
      "AI · QUALITY ASSURANCE",

    title:
      "PPX",

    challenge:
      "Manual quality sampling limited the scale and consistency of classification validation.",

    analysis:
      "Compared classifications against established accuracy thresholds and SOP requirements.",

    approach:
      "Used AI-assisted validation to automate accuracy checks and bulk ASIN processing.",

    outcome:
      "Created a scalable quality assurance mechanism with 97%+ accuracy coverage.",

    metrics: [

      ["97%+", "Accuracy"],

      ["100%", "Coverage"],

      ["0", "Manual sampling"]

    ]

  },


  wrappy: {

    type:
      "AUTOMATION · CLASS MANAGEMENT",

    title:
      "Wrappy",

    challenge:
      "Wrapper, clone and ROAR class creation required repetitive manual steps.",

    analysis:
      "Identified repetitive class-creation actions and standardized them into an automated workflow.",

    approach:
      "Built a Chrome extension supporting single and bulk creation, naming and progress tracking.",

    outcome:
      "Reduced class creation to seconds while maintaining error rates below 1%.",

    metrics: [

      ["15–40s", "Per class"],

      ["2.5m", "Bulk speed"],

      ["<1%", "Errors"]

    ]

  },


  aria: {

    type:
      "PRODUCTIVITY · SOP VALIDATION",

    title:
      "ARIA",

    challenge:
      "Artemis SOP validation required repetitive decision and navigation steps.",

    analysis:
      "Mapped decision points and high-frequency navigation actions within the validation workflow.",

    approach:
      "Created enhanced decision buttons, bulk processing and smart navigation mechanisms.",

    outcome:
      "Improved efficiency by 4.26% and saved approximately 1 minute 40 seconds per batch.",

    metrics: [

      ["+4.26%", "Efficiency"],

      ["200+", "Users"],

      ["1m 40s", "Time saved"]

    ]

  },


  glance: {

    type:
      "COMPLIANCE · AUTOMATION",

    title:
      "GLANCE",

    challenge:
      "Compliance checks across Rule Writing workflows involved repetitive validation.",

    analysis:
      "Identified compliance checks that could be standardized and surfaced visually.",

    approach:
      "Built an extension that automatically validates compliance and provides visual notifications.",

    outcome:
      "Delivered 100% validation accuracy with zero critical errors in the referenced workflow.",

    metrics: [

      ["0", "Critical errors"],

      ["3.5m", "Time saved"],

      ["100%", "Accuracy"]

    ]

  },


  scrubex: {

    type:
      "DATA · AUTOMATION",

    title:
      "ScrubEx",

    challenge:
      "Redshift data extraction was constrained by row limits and complex configuration requirements.",

    analysis:
      "Identified recurring extraction and setup friction in database querying workflows.",

    approach:
      "Built a Python-based application to simplify Redshift querying and data extraction.",

    outcome:
      "Enabled large-scale extraction with one-click setup and eliminated unnecessary ODBC configuration.",

    metrics: [

      ["Unlimited", "Rows"],

      ["1-Click", "Setup"],

      ["UTC", "Support"]

    ]

  }

};


/* =========================================================
   PROJECT MODAL ELEMENTS
========================================================= */

const projectModal =
  $("#project-modal");

const modalType =
  $("#modal-type");

const modalTitle =
  $("#modal-title");

const modalChallenge =
  $("#modal-challenge");

const modalAnalysis =
  $("#modal-analysis");

const modalApproach =
  $("#modal-approach");

const modalOutcome =
  $("#modal-outcome");

const modalMetrics =
  $("#modal-metrics");


/* =========================================================
   OPEN PROJECT MODAL
========================================================= */

$$(".project-card").forEach(
  (card) => {

    const button =
      card.querySelector(
        ".case-link"
      );

    if (!button) {
      return;
    }

    button.addEventListener(
      "click",
      () => {

        const projectKey =
          card.dataset.project;

        const data =
          caseStudies[projectKey];

        if (!data) {
          return;
        }

        modalType.textContent =
          data.type;

        modalTitle.textContent =
          data.title;

        modalChallenge.textContent =
          data.challenge;

        modalAnalysis.textContent =
          data.analysis;

        modalApproach.textContent =
          data.approach;

        modalOutcome.textContent =
          data.outcome;


        modalMetrics.innerHTML =
          data.metrics
            .map(
              (metric) => `
                <div class="modal-metric">
                  <strong>${metric[0]}</strong>
                  <span>${metric[1]}</span>
                </div>
              `
            )
            .join("");


        projectModal.classList.add(
          "open"
        );

        projectModal.setAttribute(
          "aria-hidden",
          "false"
        );

        document.body.classList.add(
          "modal-open"
        );

      }
    );

  }
);


/* =========================================================
   CLOSE PROJECT MODAL
========================================================= */

$$("[data-close]").forEach(
  (element) => {

    element.addEventListener(
      "click",
      closeProjectModal
    );

  }
);


function closeProjectModal() {

  projectModal.classList.remove(
    "open"
  );

  projectModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );

}


/* =========================================================
   MONTHLY IMPACT DATA
========================================================= */

const monthlyProjects = {


  month1: {

    type:
      "MONTHLY IMPACT · OPERATIONS",

    title:
      "Operational Risk & Quality Improvement",

    intro:
      "Used operational data, audit findings and root-cause analysis to identify recurring defects and strengthen process controls.",

    steps: [

      [
        "PROBLEM",
        "Recurring defects required deeper analysis to separate process, tooling and execution issues."
      ],

      [
        "ANALYSIS",
        "Reviewed operational quality signals and recurring defect patterns to identify the highest-impact drivers."
      ],

      [
        "ACTION",
        "Implemented continuous monitoring and process-control improvements."
      ],

      [
        "IMPACT",
        "Reduced defects from approximately 35 per week to 5–6 per week."
      ]

    ],

    metrics: [

      ["35 → 5–6", "Defects / week"],
      ["100K+", "Cases analysed"],
      ["97%+", "Quality target"]

    ]

  },


  month2: {

    type:
      "MONTHLY IMPACT · NRR",

    title:
      "NRR & Transfer Risk Reduction",

    intro:
      "Analysed negative-response and transfer drivers and translated the findings into process and SOP improvements.",

    steps: [

      [
        "PROBLEM",
        "Negative responses and transfers were creating avoidable operational friction."
      ],

      [
        "ANALYSIS",
        "Reviewed trend data, case drivers and process-level patterns to isolate recurring causes."
      ],

      [
        "ACTION",
        "Introduced SOP remediation, monitoring mechanisms and targeted process improvements."
      ],

      [
        "IMPACT",
        "NRR improved from 8.45% to 5%, while transfer rate reduced from 8.04% to 3.54%."
      ]

    ],

    metrics: [

      ["8.45 → 5%", "NRR"],
      ["8.04 → 3.54%", "Transfer rate"],
      ["12h", "SLA improvement"]

    ]

  },


  month3: {

    type:
      "MONTHLY IMPACT · AUTOMATION",

    title:
      "Automation Reliability & Audit",

    intro:
      "Reviewed automation-related defects and created stronger audit and governance mechanisms to improve reliability.",

    steps: [

      [
        "PROBLEM",
        "Automation errors required systematic investigation and stronger controls."
      ],

      [
        "ANALYSIS",
        "Audited 1,200+ cases and classified defects across OCR, metadata, routing and other categories."
      ],

      [
        "ACTION",
        "Partnered with Product, Engineering, Security and Operations teams to improve reliability."
      ],

      [
        "IMPACT",
        "Achieved 98.2% accuracy, 77% aging reduction and significant NRR/NVA improvement."
      ]

    ],

    metrics: [

      ["98.2%", "Accuracy"],
      ["77%", "Aging reduction"],
      ["46.7%", "NVA reduction"]

    ]

  },


  month4: {

    type:
      "MONTHLY IMPACT · ENABLEMENT",

    title:
      "Process Enablement & Knowledge Transfer",

    intro:
      "Converted process knowledge into structured learning mechanisms, documentation and scalable enablement.",

    steps: [

      [
        "PROBLEM",
        "Specialist workflows required consistent knowledge transfer and structured enablement."
      ],

      [
        "ANALYSIS",
        "Identified learning gaps through quality, productivity and process signals."
      ],

      [
        "ACTION",
        "Created structured SOPs, training mechanisms and knowledge-transfer frameworks."
      ],

      [
        "IMPACT",
        "Coached 70+ associates and 10+ analysts while supporting Train-the-Trainer initiatives."
      ]

    ],

    metrics: [

      ["70+", "Associates coached"],
      ["10+", "Analysts supported"],
      ["3+", "Frameworks"]

    ]

  }

};


/* =========================================================
   MONTHLY MODAL
========================================================= */

const monthlyModal =
  $("#monthly-modal");

const monthlyModalType =
  $("#monthly-modal-type");

const monthlyModalTitle =
  $("#monthly-modal-title");

const monthlyModalIntro =
  $("#monthly-modal-intro");

const monthlyModalContent =
  $("#monthly-modal-content");

const monthlyModalMetrics =
  $("#monthly-modal-metrics");


$$(".monthly-card").forEach(
  (card) => {

    const button =
      card.querySelector(
        ".case-link"
      );

    if (!button) {
      return;
    }

    button.addEventListener(
      "click",
      () => {

        const key =
          card.dataset.month;

        const data =
          monthlyProjects[key];

        if (!data) {
          return;
        }

        monthlyModalType.textContent =
          data.type;

        monthlyModalTitle.textContent =
          data.title;

        monthlyModalIntro.textContent =
          data.intro;


        monthlyModalContent.innerHTML =
          data.steps
            .map(
              (step, index) => `
                <div class="case-step">
                  <span>
                    ${String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <small>
                      ${step[0]}
                    </small>

                    <p>
                      ${step[1]}
                    </p>
                  </div>
                </div>
              `
            )
            .join("");


        monthlyModalMetrics.innerHTML =
          data.metrics
            .map(
              (metric) => `
                <div class="modal-metric">
                  <strong>${metric[0]}</strong>
                  <span>${metric[1]}</span>
                </div>
              `
            )
            .join("");


        monthlyModal.classList.add(
          "open"
        );

        monthlyModal.setAttribute(
          "aria-hidden",
          "false"
        );

        document.body.classList.add(
          "modal-open"
        );

      }
    );

  }
);


/* =========================================================
   CLOSE MONTHLY MODAL
========================================================= */

$$("[data-close-monthly]").forEach(
  (element) => {

    element.addEventListener(
      "click",
      closeMonthlyModal
    );

  }
);


function closeMonthlyModal() {

  monthlyModal.classList.remove(
    "open"
  );

  monthlyModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );

}


/* =========================================================
   DASHBOARD GALLERY
========================================================= */

const dashboardData = {


  "image-audit": {

    type:
      "01 / QUALITY · CONTROLS",

    title:
      "Image Automation Audit Dashboard",

    description:
      "Dashboard showing automation accuracy, defect analysis, NRR trend, aging reduction and NVA improvement.",

    image:
      "assets/Image-Automation-Audit-Dashboard.png"

  },


  artemis: {

    type:
      "02 / REAL-TIME TRACKING",

    title:
      "Artemis & Auto ML — Real-Time Migration & OTP Tracking",

    description:
      "Dashboard focused on real-time migration monitoring and OTP tracking across Artemis and Auto ML workflows.",

    image:
      "assets/Artemis-AutoML-Dashboard.png"

  },


  pulse: {

    type:
      "03 / OPERATIONS · VISIBILITY",

    title:
      "Pulse Dashboard",

    description:
      "Centralized operational dashboard designed to surface important performance and workflow signals.",

    image:
      "assets/Pulse-Dashboard.png"

  }

};


const dashboardViewer =
  $("#dashboard-viewer");

const dashboardViewerType =
  $("#dashboard-viewer-type");

const dashboardViewerTitle =
  $("#dashboard-viewer-title");

const dashboardViewerDescription =
  $("#dashboard-viewer-description");

const dashboardViewerImage =
  $("#dashboard-viewer-image");


/* =========================================================
   OPEN DASHBOARD
========================================================= */

$$(".dashboard-card").forEach(
  (card) => {

    card.addEventListener(
      "click",
      () => {

        const key =
          card.dataset.dashboard;

        const data =
          dashboardData[key];

        if (!data) {
          return;
        }

        dashboardViewerType.textContent =
          data.type;

        dashboardViewerTitle.textContent =
          data.title;

        dashboardViewerDescription.textContent =
          data.description;

        dashboardViewerImage.src =
          data.image;

        dashboardViewerImage.alt =
          data.title;


        dashboardViewer.classList.add(
          "open"
        );

        dashboardViewer.setAttribute(
          "aria-hidden",
          "false"
        );

        document.body.classList.add(
          "modal-open"
        );

      }
    );

  }
);


/* =========================================================
   CLOSE DASHBOARD
========================================================= */

$$("[data-close-dashboard]").forEach(
  (element) => {

    element.addEventListener(
      "click",
      closeDashboard
    );

  }
);


function closeDashboard() {

  dashboardViewer.classList.remove(
    "open"
  );

  dashboardViewer.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );

}


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key !== "Escape") {
      return;
    }

    closeProjectModal();

    closeMonthlyModal();

    closeDashboard();

  }
);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
  $$("main section[id]");

const navLinks =
  $$("#main-nav a");


const activeObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        (entry) => {

          if (!entry.isIntersecting) {
            return;
          }

          navLinks.forEach(
            (link) => {

              link.classList.remove(
                "active"
              );

            }
          );


          const active =
            document.querySelector(
              `#main-nav a[href="#${entry.target.id}"]`
            );


          if (active) {

            active.classList.add(
              "active"
            );

          }

        }
      );

    },
    {
      rootMargin:
        "-35% 0px -55% 0px"
    }
  );


sections.forEach(
  (section) => {

    activeObserver.observe(
      section
    );

  }
);


/* =========================================================
   IMAGE FALLBACK
========================================================= */

/*
   If one of the dashboard screenshots hasn't been uploaded yet,
   this prevents the page from showing an ugly broken-image icon.
*/

$$("img").forEach(
  (image) => {

    image.addEventListener(
      "error",
      () => {

        image.style.display =
          "none";

        const parent =
          image.parentElement;

        if (
          parent &&
          !parent.querySelector(
            ".image-missing"
          )
        ) {

          const message =
            document.createElement(
              "div"
            );

          message.className =
            "image-missing";

          message.innerHTML = `
            <span>Dashboard visual</span>
            <small>
              Add the dashboard image to the assets folder.
            </small>
          `;

          message.style.cssText = `
            height:100%;
            min-height:220px;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            gap:8px;
            color:#8f98aa;
            font-family:"DM Mono",monospace;
            font-size:10px;
            text-align:center;
          `;

          parent.appendChild(
            message
          );

        }

      }
    );

  }
);
