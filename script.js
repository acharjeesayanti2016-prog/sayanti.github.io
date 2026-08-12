/* =========================================================
   SAYANTI ACHARJEE — PORTFOLIO
   FRESH SCRIPT
   ========================================================= */


/* =========================================================
   ASSET HANDLING
   ---------------------------------------------------------
   This is deliberately relative to the location of index.html.
   It works whether GitHub Pages is serving the repository at
   the domain root or under a repository path.
========================================================= */

const ASSET = (filename) =>
  new URL(`assets/${filename}`, document.baseURI).href;


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [

  {
    id: "missed-contact",

    number: "01",

    category: "AUTOMATION",

    title: "Missed Seller Contact Automation",

    description:
      "Designed and implemented a Tampermonkey automation solution to reduce missed seller contacts and improve operational reliability.",

    tags: [
      "Tampermonkey",
      "Automation",
      "Operations",
      "Process Optimization"
    ],

    overview:
      "Designed and implemented a browser-based automation solution to identify and reduce missed seller contacts within the operational workflow.",

    problem: [
      "Manual identification of missed seller contacts created avoidable operational leakage.",
      "Associates had to repeatedly identify relevant cases and perform repetitive workflow checks.",
      "The process created opportunities for missed contacts and additional manual effort."
    ],

    solution: [
      "Developed a Tampermonkey automation script.",
      "Automated repetitive identification and workflow steps.",
      "Improved visibility of relevant seller contacts.",
      "Reduced manual intervention in the operational workflow."
    ],

    impact: [
      "Achieved an 89% reduction in missed seller contacts.",
      "Improved operational consistency.",
      "Reduced repetitive manual work.",
      "Created a scalable workflow enhancement."
    ],

    metrics: [
      ["89%", "Reduction in missed contacts"],
      ["Tampermonkey", "Automation framework"],
      ["Operational", "Workflow improvement"],
      ["Scalable", "Solution design"]
    ]
  },


  {
    id: "productivity-dashboard",

    number: "02",

    category: "BUSINESS INTELLIGENCE",

    title: "Operational Productivity Dashboard",

    description:
      "Built an analytics dashboard using Power Query, Power Pivot and DAX to improve operational productivity and performance visibility.",

    tags: [
      "Power Query",
      "Power Pivot",
      "DAX",
      "Dashboard",
      "Analytics"
    ],

    overview:
      "Developed an operational analytics dashboard to consolidate performance information and provide actionable visibility into productivity metrics.",

    problem: [
      "Operational data was spread across multiple sources.",
      "Manual analysis limited the speed of performance reviews.",
      "Leadership and operations teams needed a more consistent view of productivity."
    ],

    solution: [
      "Created a consolidated analytics model.",
      "Used Power Query for data transformation.",
      "Used Power Pivot and DAX for analytical calculations.",
      "Created interactive performance views and KPI tracking."
    ],

    impact: [
      "Improved associate productivity by approximately 25%.",
      "Reduced manual analysis effort.",
      "Improved visibility into operational performance.",
      "Enabled more data-driven performance discussions."
    ],

    metrics: [
      ["25%", "Productivity improvement"],
      ["DAX", "Analytical calculations"],
      ["Power Query", "Data transformation"],
      ["BI", "Operational visibility"]
    ]
  },


  {
    id: "aging-report",

    number: "03",

    category: "AUTOMATION & ANALYTICS",

    title: "Aging Report",

    description:
      "Ticket analytics tool providing real-time visibility into ticket aging patterns across the organization.",

    tags: [
      "React",
      "Chrome Extension",
      "AG Grid",
      "Python Flask",
      "GraphQL"
    ],

    overview:
      "Ticket analytics tool providing real-time visibility into ticket aging patterns across the organization. Transforms raw ticketing data into actionable insights through interactive visualizations and smart filtering based on ticket creation date.",

    problem: [
      "Ticket-aging information required consolidated visibility.",
      "Operational teams needed to understand ticket distribution across aging buckets.",
      "Multiple dimensions such as program, region, status, manager and ticket type needed to be analyzed together."
    ],

    solution: [
      "Real-Time Ticket Aging: Visualizes ticket distribution across age buckets (0-7d, 7-14d, 14-30d, 30+d).",
      "Multi-Dimensional Filtering: Filter by program, region, status, manager, and ticket type.",
      "Saved Filter Presets: Store and recall frequently used filter combinations.",
      "Integrated multiple data sources for centralized operational analysis."
    ],

    impact: [
      "3 API data sources.",
      "NA/EU/FE regional coverage.",
      "150+ queues covered.",
      "Improved real-time visibility into ticket aging."
    ],

    metrics: [
      ["3", "Data sources"],
      ["NA/EU/FE", "Regions"],
      ["150+", "Queues"],
      ["Real-time", "Ticket visibility"]
    ]
  },


  {
    id: "ppx",

    number: "04",

    category: "AI / QUALITY ASSURANCE",

    title: "PPX",

    description:
      "Positive Predictive Xpert — AI-powered quality assurance tool designed to validate classification accuracy before classes go live.",

    tags: [
      "Amazon Bedrock",
      "Claude AI",
      "React",
      "Quality Assurance"
    ],

    overview:
      "AI-powered quality assurance tool built on Amazon Bedrock's Claude model that automatically validates classification accuracy before classes go live.",

    problem: [
      "Classification accuracy needed to be validated before classes went live.",
      "Manual sampling created additional effort.",
      "Comprehensive validation was required across classes."
    ],

    solution: [
      "Automated Accuracy Validation: Checks every class against the 97% threshold.",
      "SOP Compliance: Compares rationale against standard procedures.",
      "Bulk ASIN Processing: Evaluates multiple ASINs via CRISP export.",
      "Used AI-powered validation to support quality assurance."
    ],

    impact: [
      "97%+ accuracy threshold.",
      "100% coverage.",
      "Prevented escalations through pre-launch validation."
    ],

    metrics: [
      ["97%+", "Accuracy threshold"],
      ["100%", "Coverage"],
      ["Prevented", "Escalations"],
      ["AI", "Automated validation"]
    ]
  },


  {
    id: "wrappy",

    number: "05",

    category: "AUTOMATION",

    title: "Wrappy",

    description:
      "Class Management Automation designed to automate wrapper, clone and ROAR class creation in CP-Central.",

    tags: [
      "JavaScript",
      "API Development",
      "Automation"
    ],

    overview:
      "Chrome extension automating wrapper, clone, and ROAR class creation in CP-Central, reducing creation time from minutes to seconds.",

    problem: [
      "Class creation involved repetitive manual activities.",
      "Wrapper and clone creation required repeated workflow steps.",
      "Manual creation increased processing time."
    ],

    solution: [
      "Single & Bulk Wrapper Creation.",
      "Wrapper Naming Generator.",
      "Progress Dashboard.",
      "Automated class creation workflow."
    ],

    impact: [
      "15–40 seconds per class.",
      "2.5 minutes for 10-class bulk processing.",
      "Less than 1% errors."
    ],

    metrics: [
      ["15–40s/class", "Creation speed"],
      ["2.5m/10", "Bulk speed"],
      ["<1%", "Errors"],
      ["Automation", "Class creation"]
    ]
  },


  {
    id: "aria",

    number: "06",

    category: "PRODUCTIVITY",

    title: "ARIA",

    description:
      "Artemis Rapid Input Assistant designed to streamline Artemis SOP validation through intuitive decision buttons, bulk processing and smart navigation.",

    tags: [
      "Chrome Extension",
      "JavaScript",
      "Productivity"
    ],

    overview:
      "Productivity tool that streamlines Artemis SOP validation through intuitive decision buttons, bulk processing, and smart navigation features.",

    problem: [
      "Artemis SOP validation required repeated manual interactions.",
      "Large-scale processing required faster navigation and decision-making.",
      "Operators needed a more efficient validation workflow."
    ],

    solution: [
      "Enhanced Decision Buttons: Context-aware TP/FP buttons.",
      "Bulk Processing: Mark all for rapid batch decisions.",
      "Undecided Counter: Tracks unclassified ASINs with auto-jump."
    ],

    impact: [
      "+4.26% efficiency.",
      "200+ users.",
      "1 minute 40 seconds saved per batch."
    ],

    metrics: [
      ["+4.26%", "Efficiency"],
      ["200+", "Users"],
      ["1m 40s", "Time saved / batch"],
      ["Bulk", "Processing"]
    ]
  },


  {
    id: "glance",

    number: "07",

    category: "COMPLIANCE",

    title: "GLANCE",

    description:
      "GL Assessment & Notification Compliance Extension designed to streamline GL verification and compliance checks.",

    tags: [
      "Chrome Extension",
      "AWS Lambda",
      "Amazon S3",
      "API Development"
    ],

    overview:
      "Productivity tool for streamlining GL verification and compliance checks for Rule Writing teams.",

    problem: [
      "GL compliance validation required structured verification.",
      "Manual checks increased effort and created opportunities for inconsistency."
    ],

    solution: [
      "Automated GL Detection: Validates compliance instantly.",
      "Visual Notification System: Color-coded feedback.",
      "Centralized GL Management: Secure AWS S3 storage."
    ],

    impact: [
      "0 critical errors.",
      "3.5 minutes saved per class.",
      "100% accuracy."
    ],

    metrics: [
      ["0", "Critical errors"],
      ["3.5 min/class", "Time saved"],
      ["100%", "Accuracy"],
      ["Automated", "GL validation"]
    ]
  },


  {
    id: "scrubex",

    number: "08",

    category: "DATA AUTOMATION",

    title: "ScrubEx",

    description:
      "Data Extraction Automation Tool designed to streamline Redshift database queries and remove repetitive manual processing.",

    tags: [
      "Python",
      "Amazon Redshift",
      "SQL",
      "Automation"
    ],

    overview:
      "Python-based application that streamlines Redshift database queries, eliminating row limits and complex ODBC configurations.",

    problem: [
      "Manual data extraction created repetitive effort.",
      "Database queries involved row limits and configuration complexity.",
      "Operational users needed simpler access to historical data."
    ],

    solution: [
      "Unlimited Data Extraction: Splits large datasets across sheets.",
      "No ODBC Required: Direct Redshift connection.",
      "UTC Extraction: Full support for timestamp retrieval."
    ],

    impact: [
      "Unlimited row extraction.",
      "1-click setup.",
      "UTC-supported data extraction."
    ],

    metrics: [
      ["Unlimited", "Row limit"],
      ["1-Click", "Setup"],
      ["UTC", "Data support"],
      ["SQL", "Query automation"]
    ]
  }

];


/* =========================================================
   DASHBOARD PROJECTS
   ---------------------------------------------------------
   IMPORTANT:
   ONLY the actual dashboard screenshots are referenced.
   The source/detail images are NOT referenced.
========================================================= */

const dashboards = [

  {
    id: "image-audit-dashboard",

    category: "AUDIT ANALYTICS",

    title: "Image Automation Audit Dashboard",

    description:
      "Image Automation Audit dashboard covering accuracy, NRR trend, aging reduction, NVA reduction and defect analysis.",

    image:
      ASSET("Image-Automation-Audit-Dashboard.png"),

    metrics: [
      ["98.2%", "Accuracy rate"],
      ["1,200", "Audit sample size"],
      ["77%", "Aging reduction"],
      ["8.45% → 5.00%", "NRR trend"]
    ],

    overview:
      "Image Automation Audit focused on evaluating automation quality, identifying defect patterns and measuring the operational impact of automation-related issues.",

    problem: [
      "The automation workflow required structured auditing to validate output quality.",
      "Automation defects needed to be identified and categorized.",
      "Operational teams required visibility into defect patterns and their impact on NRR, NVA and aging.",
      "A large audit sample needed to be reviewed to validate automation performance."
    ],

    solution: [
      "Audited 1,200 cases.",
      "Reviewed automation output for accuracy.",
      "Analyzed OCR-related errors.",
      "Analyzed metadata-related errors.",
      "Analyzed routing issues.",
      "Tracked NRR movement.",
      "Tracked NVA movement.",
      "Tracked aging-ticket reduction.",
      "Used dashboard-based analysis to identify trends and performance patterns."
    ],

    impact: [
      "98.2% accuracy rate.",
      "NRR reduced from 8.45% to 5.00%.",
      "77% aging reduction.",
      "NVA reduced from 8.25% to 4.40%."
    ],

    implementation:
      "The project involved structured audit analysis, defect categorization and dashboard-based visualization of operational quality indicators.",

    defects: [
      ["OCR Errors", "8.2%"],
      ["Metadata Errors", "5.5%"],
      ["Routing Issues", "4.1%"],
      ["Other Defects", "2.8%"]
    ],

    validation: [
      ["OCR Errors", "8.6%", "7.9%"],
      ["Metadata Errors", "6.2%", "4.8%"],
      ["Routing Issues", "5.3%", "3.9%"]
    ]
  },


  {
    id: "artemis-dashboard",

    category: "REAL-TIME ANALYTICS",

    title: "Artemis & Auto ML — Real-Time Migration & OTP Tracking",

    description:
      "Fully automated real-time data visualization platform delivering monitoring of Artemis and Auto ML Migration/New Class OTP metrics.",

    image:
      ASSET("Artemis-AutoML-Dashboard.png"),

    metrics: [
      ["5,400+", "Classes"],
      ["40–50 min", "Daily time saved"],
      ["Real-time", "Data visibility"],
      ["Automated", "Data refresh"]
    ],

    overview:
      "Fully automated real-time data visualization platform delivering monitoring of Artemis and Auto ML Migration/New Class OTP metrics. It provides immediate access to target achievements, node-wise analytics, and program-level conversion data.",

    problem: [
      "As KW to Artemis ML is the Kingpin goal to convert 5400 classes by YTD, Leadership required consistent tracking of Artemis ML conversions against established targets.",
      "Lack of centralized tracking infrastructure with no dedicated tables or data sources.",
      "Manual data integration across programs and nodes introducing compilation errors.",
      "Resource-intensive manual report generation consuming ~40–50 minutes daily creating workflow bottlenecks."
    ],

    solution: [
      "YTD & Weekly Targets: Real-time data for Achieved Artemis ML conversion against Target weekly & yearly.",
      "Node Level Data: Overview of node-level contribution to achieved targets.",
      "Program Level Data: Program-level contribution analytics.",
      "Trailing 4 Weeks & 4 Months: Trending conversion patterns for performance evaluation.",
      "Time-based Analysis: Flexible viewing options for weekly, monthly, and quarterly metrics.",
      "Multi-level Filtering: Customizable views by node, class type, and program parameters.",
      "Data Accessibility: Export functionality for detailed analysis and review."
    ],

    impact: [
      "Eliminated ~40–50 minutes daily manual report generation.",
      "Real-time conversion data based on OTP launches.",
      "Centralized tracking infrastructure for 5400+ class conversions.",
      "Reduced compilation errors from manual data integration.",
      "Enabled immediate performance tracking and pattern recognition."
    ],

    implementation:
      "Evolved from semi-automated macro-based solution to fully automated real-time QuickSight dashboard with SQL backend, automated data refresh, and multi-dimensional filtering capabilities."
  },


  {
    id: "pulse-dashboard",

    category: "LEARNING COMPLIANCE ANALYTICS",

    title: "Pulse Dashboard — Mandatory Learning Compliance",

    description:
      "Real-time visibility into mandatory training compliance across RISC IN Ops.",

    image:
      ASSET("Pulse-Dashboard.png"),

    metrics: [
      ["100%", "Completion target"],
      ["Real-time", "Training visibility"],
      ["L4–L7", "Manager scope"],
      ["Proactive", "Compliance monitoring"]
    ],

    overview:
      "Real-time visibility into mandatory training compliance across RISC IN Ops. Enables proactive monitoring, identification of at-risk employees, and span-level reporting to achieve 100% compliance.",

    problem: [
      "The Learn platform's reporting capabilities create significant compliance risks.",
      "Managers cannot access consolidated training data for their teams.",
      "The platform lacks span-level visibility.",
      "There is no automated escalation trigger for overdue courses.",
      "Reports combine mandatory and optional course completion metrics.",
      "This prevents managers from monitoring team training completion, identifying at-risk employees, and taking preventive action before deadlines."
    ],

    solution: [
      "Real-Time Visibility: Access up-to-date training data across RISC IN Ops with granular course-level details.",
      "Filter Capabilities: Filter by job level, manager, or course status to focus on specific segments.",
      "Self-Service Access: No dependency on manual reports.",
      "Completion Tracking: Track completion rates by manager, job level, and team.",
      "Overdue Identification: Identify overdue courses requiring immediate action in a single interface.",
      "Timeline Monitoring: Monitor courses approaching due dates (within 5 days, 6–30 days, >30 days)."
    ],

    impact: [
      "Target: 100% mandatory training completion rate for IN RISC Ops by Q4'25.",
      "Real-time visibility for all L4-L7 managers across RISC IN Ops.",
      "Proactive management replacing reactive compliance approach.",
      "Export raw data for direct outreach to employees with upcoming deadlines.",
      "Drive accountability at L6/L5/L4 levels.",
      "Training data integrated into one-on-one conversations."
    ],

    implementation:
      "QuickSight dashboard with consolidated span-level reporting, drill-down capabilities to individual employee status, automated data refresh, and multi-dimensional filtering by job level, manager, and course status."
  }

];


/* =========================================================
   COO MONTHLY INITIATIVES
========================================================= */

const monthlyInitiatives = [

  {
    month: "JULY 2025",
    title: "GTIN Exemption Auto-Selection Enhancement",
    summary:
      "Enhancement to improve GTIN exemption handling and reduce processing effort.",
    impact:
      "Up to 75% proposed processing-time reduction.",
    details: [
      "GTIN Exemption Auto-Selection enhancement.",
      "Focused on reducing manual processing effort.",
      "Proposed processing-time reduction of up to 75%."
    ]
  },

  {
    month: "AUGUST 2025",
    title: "SWO Completion Enforcement Tool",
    summary:
      "Tampermonkey-based operational enhancement focused on SWO completion enforcement.",
    impact:
      "108 bps quality improvement.",
    details: [
      "SWO Completion Enforcement Tool using Tampermonkey.",
      "Focused on improving completion compliance.",
      "Delivered a 108 bps quality improvement."
    ]
  },

  {
    month: "OCTOBER 2025",
    title: "Mandatory Case ID Implementation",
    summary:
      "Mandatory Case ID implementation to improve operational tracking and reduce NVA.",
    impact:
      "318 bps T4 NVA reduction.",
    details: [
      "Mandatory Case ID implementation.",
      "Focused on improving case-level tracking.",
      "Delivered a 318 bps T4 NVA reduction."
    ]
  },

  {
    month: "NOVEMBER 2025",
    title: "Language Transfer & Account Health Optimization",
    summary:
      "Two operational initiatives focused on reducing unnecessary transfers.",
    impact:
      "203 bps + 214 bps annual impact.",
    details: [
      "Language-transfer optimization — 203 bps annual transfer-rate reduction.",
      "Account Health transfer optimization — 214 bps annual impact."
    ]
  },

  {
    month: "DECEMBER 2025",
    title: "Account Health & Brand Mismatch Optimization",
    summary:
      "Process improvements focused on transfer and NVA reduction.",
    impact:
      "253 bps transfer reduction + 526 bps NVA improvement.",
    details: [
      "Account Health optimization — 253 bps transfer-rate reduction.",
      "Brand Mismatch NVA reduction — 526 bps."
    ]
  },

  {
    month: "JANUARY 2026",
    title: "Duplicate ASIN Replication Fix",
    summary:
      "Process correction addressing duplicate ASIN replication and reopen-rate impact.",
    impact:
      "Ticket reopen rate 11.85% → 0%.",
    details: [
      "Duplicate ASIN replication fix.",
      "Ticket reopen rate reduced from 11.85% to 0%.",
      "E2E reopen rate reduced from 23.29% to 13.26%."
    ]
  },

  {
    month: "FEBRUARY 2026",
    title: "PWF Automation Correction & BP Worklog Launch",
    summary:
      "Two initiatives improving BNA quality and workflow execution.",
    impact:
      "781 bps NRR improvement + 480 bps quality improvement.",
    details: [
      "PWF automation correction — 781 bps BNA NRR improvement.",
      "Revamped BP Worklog launch — 480 bps quality improvement."
    ]
  },

  {
    month: "MARCH 2026",
    title: "Match Only Migration & BNA Approval-Blurb Correction",
    summary:
      "Operational corrections focused on reopen and quality improvements.",
    impact:
      "628 bps reopen reduction + 134 bps quality improvement.",
    details: [
      "Match Only diagnostic-tool migration — 628 bps E2E reopen reduction.",
      "BNA approval-blurb correction — 134 bps quality improvement."
    ]
  },

  {
    month: "APRIL 2026",
    title: "GS1 / GTIN Null-UPC SOP Correction",
    summary:
      "SOP correction focused on IP-infringement closure and reopen outcomes.",
    impact:
      "47 bps closure improvement + 10 bps reopen reduction.",
    details: [
      "GS1/GTIN null-UPC SOP correction.",
      "47 bps IP-infringement closure improvement.",
      "10 bps reopen reduction."
    ]
  },

  {
    month: "MAY 2026",
    title: "CatAuth Escalation Channel & EE Suppression SOP",
    summary:
      "SOP improvements addressing PAA and suppression workflows.",
    impact:
      "~202 bps PAA reduction.",
    details: [
      "CatAuth escalation-channel SOP.",
      "Approximately 202 bps PAA reduction.",
      "EE Suppression SOP update."
    ]
  },

  {
    month: "JUNE 2026",
    title: "OWN IT / Paragon Case-Handling Improvement",
    summary:
      "Case-handling quality improvement using OWN IT SOP and communication framework.",
    impact:
      "258 bps quality + 335 bps CLRO + 523 bps reopen + 217 bps transfer improvement.",
    details: [
      "ABP E2E Paragon Case Handling Quality Improvement via OWN IT SOP & Communication Framework.",
      "258 bps quality improvement.",
      "335 bps CLRO reduction.",
      "523 bps reopen reduction.",
      "217 bps transfer-rate reduction."
    ]
  }

];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const projectGrid =
  document.getElementById("projectGrid");

const dashboardGrid =
  document.getElementById("dashboardGrid");

const monthlyGrid =
  document.getElementById("monthlyGrid");

const modal =
  document.getElementById("caseStudyModal");

const modalContent =
  document.getElementById("caseStudyContent");

const modalClose =
  document.getElementById("modalClose");

const themeToggle =
  document.getElementById("themeToggle");

const menuToggle =
  document.getElementById("menuToggle");


/* =========================================================
   HELPERS
========================================================= */

function listHTML(items) {

  if (!items || !items.length) {
    return "";
  }

  return `
    <ul class="case-study-list">
      ${items.map(item => `
        <li>${item}</li>
      `).join("")}
    </ul>
  `;
}


function metricsHTML(metrics) {

  if (!metrics || !metrics.length) {
    return "";
  }

  return `
    <div class="case-study-metrics">

      ${metrics.map(metric => `
        <div class="case-metric">

          <span class="case-metric-value">
            ${metric[0]}
          </span>

          <span class="case-metric-label">
            ${metric[1]}
          </span>

        </div>
      `).join("")}

    </div>
  `;
}


function tableHTML(headers, rows) {

  if (!rows || !rows.length) {
    return "";
  }

  return `
    <table class="case-study-table">

      <thead>
        <tr>
          ${headers.map(header => `
            <th>${header}</th>
          `).join("")}
        </tr>
      </thead>

      <tbody>
        ${rows.map(row => `
          <tr>
            ${row.map(cell => `
              <td>${cell}</td>
            `).join("")}
          </tr>
        `).join("")}
      </tbody>

    </table>
  `;
}


/* =========================================================
   PROJECT CARDS
========================================================= */

function renderProjects() {

  if (!projectGrid) return;

  projectGrid.innerHTML =
    projects.map(project => `

      <article class="project-card reveal">

        <div>

          <div class="project-top">

            <div class="project-category">
              ${project.category}
            </div>

            <div class="project-number">
              ${project.number}
            </div>

          </div>


          <h3>
            ${project.title}
          </h3>


          <p class="project-description">
            ${project.description}
          </p>

        </div>


        <div class="project-bottom">

          <div class="project-tags">

            ${project.tags.map(tag => `
              <span>${tag}</span>
            `).join("")}

          </div>


          <button
            class="case-link"
            data-project="${project.id}"
          >
            View Case Study →
          </button>

        </div>

      </article>

    `).join("");
}


/* =========================================================
   DASHBOARD CARDS
========================================================= */

function renderDashboards() {

  if (!dashboardGrid) return;

  dashboardGrid.innerHTML =
    dashboards.map(dashboard => `

      <article class="dashboard-card reveal">

        <div class="dashboard-image-wrapper">

          <img
            src="${dashboard.image}"
            alt="${dashboard.title}"
            class="dashboard-image"
            loading="lazy"
            onerror="this.style.display='none'; this.parentElement.classList.add('image-error');"
          >

        </div>


        <div class="dashboard-content">

          <span class="dashboard-label">
            ${dashboard.category}
          </span>


          <h3>
            ${dashboard.title}
          </h3>


          <p>
            ${dashboard.description}
          </p>


          <div class="dashboard-metrics">

            ${dashboard.metrics.map(metric => `

              <div>

                <strong>
                  ${metric[0]}
                </strong>

                <span>
                  ${metric[1]}
                </span>

              </div>

            `).join("")}

          </div>


          <button
            class="btn btn-secondary dashboard-btn"
            data-dashboard="${dashboard.id}"
          >
            Explore Full Case Study →
          </button>

        </div>

      </article>

    `).join("");
}


/* =========================================================
   MONTHLY COO CARDS
========================================================= */

function renderMonthlyInitiatives() {

  if (!monthlyGrid) return;

  monthlyGrid.innerHTML =
    monthlyInitiatives.map((item, index) => `

      <article
        class="month-card reveal"
        data-month="${index}"
      >

        <div class="month-card-top">

          <span class="month-name">
            ${item.month}
          </span>

          <span class="month-arrow">
            ↗
          </span>

        </div>


        <h3>
          ${item.title}
        </h3>


        <p>
          ${item.summary}
        </p>


        <span class="month-impact">
          ${item.impact}
        </span>

      </article>

    `).join("");
}


/* =========================================================
   OPEN PROJECT CASE STUDY
========================================================= */

function openProjectCaseStudy(id) {

  const project =
    projects.find(item => item.id === id);

  if (!project || !modal || !modalContent) {
    return;
  }


  modalContent.innerHTML = `

    <div class="case-study-inner">

      <span class="case-study-kicker">
        ${project.category}
      </span>


      <h2 class="case-study-title">
        ${project.title}
      </h2>


      <p class="case-study-subtitle">
        ${project.description}
      </p>


      <div class="case-study-section">

        <h3>
          PROJECT OVERVIEW
        </h3>

        <p>
          ${project.overview}
        </p>

      </div>


      <div class="case-study-section">

        <h3>
          THE PROBLEM
        </h3>

        ${listHTML(project.problem)}

      </div>


      <div class="case-study-section">

        <h3>
          SOLUTION DELIVERED
        </h3>

        ${listHTML(project.solution)}

      </div>


      <div class="case-study-section">

        <h3>
          MEASURABLE IMPACT
        </h3>

        ${listHTML(project.impact)}

        ${metricsHTML(project.metrics)}

      </div>

    </div>

  `;

  openModal();
}


/* =========================================================
   OPEN DASHBOARD CASE STUDY
========================================================= */

function openDashboardCaseStudy(id) {

  const dashboard =
    dashboards.find(item => item.id === id);

  if (!dashboard || !modal || !modalContent) {
    return;
  }


  let additionalSections = "";


  if (dashboard.id === "image-audit-dashboard") {

    additionalSections = `

      <div class="case-study-section">

        <h3>
          DEFECT ANALYSIS
        </h3>

        ${tableHTML(
          ["Defect Category", "Share"],
          dashboard.defects
        )}

      </div>


      <div class="case-study-section">

        <h3>
          ACCURACY VALIDATION
        </h3>

        ${tableHTML(
          ["Defect", "Last Week", "Current Week"],
          dashboard.validation
        )}

      </div>

    `;
  }


  modalContent.innerHTML = `

    <div class="case-study-inner">

      <span class="case-study-kicker">
        ${dashboard.category}
      </span>


      <h2 class="case-study-title">
        ${dashboard.title}
      </h2>


      <p class="case-study-subtitle">
        ${dashboard.description}
      </p>


      <img
        src="${dashboard.image}"
        alt="${dashboard.title}"
        class="case-study-hero-image"
      >


      <div class="case-study-section">

        <h3>
          PROJECT OVERVIEW
        </h3>

        <p>
          ${dashboard.overview}
        </p>

      </div>


      <div class="case-study-section">

        <h3>
          KEY METRICS
        </h3>

        ${metricsHTML(dashboard.metrics)}

      </div>


      <div class="case-study-section">

        <h3>
          PROBLEM
        </h3>

        ${listHTML(dashboard.problem)}

      </div>


      <div class="case-study-section">

        <h3>
          SOLUTION
        </h3>

        ${listHTML(dashboard.solution)}

      </div>


      <div class="case-study-section">

        <h3>
          IMPACT
        </h3>

        ${listHTML(dashboard.impact)}

      </div>


      <div class="case-study-section">

        <h3>
          IMPLEMENTATION
        </h3>

        <p>
          ${dashboard.implementation}
        </p>

      </div>


      ${additionalSections}

    </div>

  `;

  openModal();
}


/* =========================================================
   OPEN MONTHLY INITIATIVE
========================================================= */

function openMonthlyInitiative(index) {

  const item =
    monthlyInitiatives[index];

  if (!item || !modal || !modalContent) {
    return;
  }


  modalContent.innerHTML = `

    <div class="case-study-inner">

      <span class="case-study-kicker">
        COO MONTHLY INITIATIVE
      </span>


      <h2 class="case-study-title">
        ${item.month}
      </h2>


      <p class="case-study-subtitle">
        ${item.title}
      </p>


      <div class="case-study-section">

        <h3>
          INITIATIVE
        </h3>

        <p>
          ${item.summary}
        </p>

      </div>


      <div class="case-study-section">

        <h3>
          DETAILS
        </h3>

        ${listHTML(item.details)}

      </div>


      <div class="case-study-section">

        <h3>
          MEASURED IMPACT
        </h3>

        <div class="case-study-metrics">

          <div class="case-metric">

            <span class="case-metric-value">
              ${item.impact}
            </span>

            <span class="case-metric-label">
              Initiative impact
            </span>

          </div>

        </div>

      </div>

    </div>

  `;

  openModal();
}


/* =========================================================
   MODAL
========================================================= */

function openModal() {

  if (!modal) return;

  modal.classList.add("active");

  document.body.classList.add("modal-open");
}


function closeModal() {

  if (!modal) return;

  modal.classList.remove("active");

  document.body.classList.remove("modal-open");
}


if (modalClose) {

  modalClose.addEventListener(
    "click",
    closeModal
  );

}


if (modal) {

  modal.addEventListener(
    "click",
    event => {

      if (event.target === modal) {
        closeModal();
      }

    }
  );

}


document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {
      closeModal();
    }

  }
);


/* =========================================================
   UNIVERSAL CLICK HANDLER
========================================================= */

document.addEventListener(
  "click",
  event => {

    const projectButton =
      event.target.closest("[data-project]");

    if (projectButton) {

      openProjectCaseStudy(
        projectButton.dataset.project
      );

      return;
    }


    const dashboardButton =
      event.target.closest("[data-dashboard]");

    if (dashboardButton) {

      openDashboardCaseStudy(
        dashboardButton.dataset.dashboard
      );

      return;
    }


    const monthCard =
      event.target.closest("[data-month]");

    if (monthCard) {

      openMonthlyInitiative(
        Number(monthCard.dataset.month)
      );

    }

  }
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.08
    }
  );


function observeRevealElements() {

  document
    .querySelectorAll(".reveal")
    .forEach(element => {

      revealObserver.observe(element);

    });

}


/* =========================================================
   THEME
========================================================= */

const savedTheme =
  localStorage.getItem("sayanti-theme");


if (savedTheme === "light") {

  document.body.classList.add("light");

}


if (themeToggle) {

  themeToggle.addEventListener(
    "click",
    () => {

      document.body.classList.toggle("light");


      const theme =
        document.body.classList.contains("light")
          ? "light"
          : "dark";


      localStorage.setItem(
        "sayanti-theme",
        theme
      );

    }
  );

}


/* =========================================================
   MOBILE MENU
========================================================= */

if (menuToggle) {

  menuToggle.addEventListener(
    "click",
    () => {

      const nav =
        document.querySelector(".nav-links");

      if (nav) {

        nav.classList.toggle(
          "mobile-open"
        );

      }

    }
  );

}


document
  .querySelectorAll(".nav-links a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        const nav =
          document.querySelector(".nav-links");

        if (nav) {

          nav.classList.remove(
            "mobile-open"
          );

        }

      }
    );

  });


/* =========================================================
   INITIALIZE
========================================================= */

renderProjects();

renderDashboards();

renderMonthlyInitiatives();

observeRevealElements();


/* =========================================================
   DEBUGGING
   ---------------------------------------------------------
   This prints the exact URLs being used for the dashboard
   images in the browser console.
========================================================= */

console.log(
  "Portfolio assets:",
  {
    profile:
      ASSET("profile.jpg"),

    imageAudit:
      ASSET("Image-Automation-Audit-Dashboard.png"),

    artemis:
      ASSET("Artemis-AutoML-Dashboard.png"),

    pulse:
      ASSET("Pulse-Dashboard.png")
  }
);
