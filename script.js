/* =========================================================
   SAYANTI ACHARJEE — PORTFOLIO
   Complete interaction + project data + dashboards
   + COO monthly initiatives
========================================================= */


/* =========================================================
   PROJECTS
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

    featured: true,

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
      ["Automation", "Tampermonkey framework"],
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

    title: "Aging Report Ticket Analysis Tool",

    description:
      "Automated ticket-aging analysis by consolidating API sources, queue information and manager hierarchy into a centralized operational reporting workflow.",

    tags: [
      "Automation",
      "APIs",
      "Data Extraction",
      "Reporting",
      "Operations"
    ],

    overview:
      "Built an automated ticket-aging analysis workflow that consolidated multiple API sources, queue information and management hierarchy to improve operational visibility.",

    problem: [
      "Ticket-aging information was distributed across multiple sources.",
      "Manual consolidation created significant reporting effort.",
      "Managers lacked a centralized view across queues and organizational structures.",
      "Manual tracking made it difficult to identify aging tickets quickly."
    ],

    solution: [
      "Integrated three API sources covering NA, EU and FE.",
      "Consolidated information across 150+ queues.",
      "Enriched reporting with manager hierarchy information.",
      "Created smart filtering capabilities.",
      "Automated reporting distribution.",
      "Reduced spreadsheet-based tracking."
    ],

    impact: [
      "Reduced aging-report preparation from hours to seconds.",
      "Improved consolidated ticket visibility.",
      "Reduced manual reporting effort.",
      "Enabled faster operational intervention on aging tickets."
    ],

    metrics: [
      ["150+", "Queues consolidated"],
      ["3", "API sources"],
      ["Seconds", "Report generation"],
      ["Automated", "Distribution"]
    ]
  },


  {
    id: "artemis-rapid",
    number: "04",
    category: "PRODUCTIVITY AUTOMATION",

    title: "Artemis Rapid Input Assistant",

    description:
      "Created an operational productivity tool designed to simplify repetitive Artemis input workflows.",

    tags: [
      "Automation",
      "Tampermonkey",
      "Productivity",
      "Workflow"
    ],

    overview:
      "Developed a productivity-focused tool to simplify repetitive Artemis input activities and reduce unnecessary manual effort.",

    problem: [
      "Repeated Artemis input activities required manual intervention.",
      "Repetitive workflow steps increased processing effort.",
      "The existing workflow could be streamlined through browser-based automation."
    ],

    solution: [
      "Designed a browser-based input assistant.",
      "Automated repetitive workflow interactions.",
      "Simplified the operational input experience.",
      "Focused the tool on usability and speed."
    ],

    impact: [
      "Reduced repetitive manual input.",
      "Improved workflow efficiency.",
      "Created a reusable productivity mechanism."
    ],

    metrics: [
      ["Automation", "Browser-based"],
      ["Productivity", "Workflow improvement"],
      ["Reusable", "Tool design"],
      ["Operational", "Efficiency"]
    ]
  },


  {
    id: "glance",
    number: "05",
    category: "COMPLIANCE & NOTIFICATION",

    title: "GLANCE — GL Assessment & Notification Compliance Extension",

    description:
      "Developed a compliance-focused extension to support assessment and notification workflows.",

    tags: [
      "Compliance",
      "Automation",
      "Notifications",
      "Workflow"
    ],

    overview:
      "Designed a workflow extension focused on assessment and notification compliance.",

    problem: [
      "Compliance-related assessment and notification activities required consistent execution.",
      "Manual checks could create gaps in timely action."
    ],

    solution: [
      "Developed a workflow extension.",
      "Supported assessment checks.",
      "Improved notification visibility.",
      "Created a repeatable compliance workflow."
    ],

    impact: [
      "Improved compliance workflow consistency.",
      "Reduced manual checking effort.",
      "Supported timely notification actions."
    ],

    metrics: [
      ["Compliance", "Workflow support"],
      ["Automation", "Process enhancement"],
      ["Notifications", "Improved visibility"],
      ["Repeatable", "Workflow"]
    ]
  },


  {
    id: "ppx",
    number: "06",
    category: "PREDICTIVE ANALYTICS",

    title: "PPX — Positive Predictive Xpert",

    description:
      "Analytics-focused predictive initiative designed to support proactive operational decision-making.",

    tags: [
      "Predictive Analytics",
      "Data Science",
      "Operations",
      "Insights"
    ],

    overview:
      "Developed a predictive analytics concept focused on using available operational information to support proactive decision-making.",

    problem: [
      "Reactive operational decision-making limited the opportunity for early intervention.",
      "Historical information could be used more effectively to identify patterns."
    ],

    solution: [
      "Applied analytical and predictive thinking to operational data.",
      "Focused on identifying useful patterns.",
      "Designed the concept around proactive intervention."
    ],

    impact: [
      "Supported proactive operational thinking.",
      "Improved visibility into potential patterns.",
      "Created a framework for predictive operational analysis."
    ],

    metrics: [
      ["Predictive", "Analytical approach"],
      ["Proactive", "Decision support"],
      ["Data", "Pattern analysis"],
      ["Operations", "Business application"]
    ]
  },


  {
    id: "scrubex",
    number: "07",
    category: "DATA AUTOMATION",

    title: "ScrubEx — Data Extraction Automation Tool",

    description:
      "Automated data extraction to reduce repetitive manual collection and improve accessibility of operational information.",

    tags: [
      "Data Extraction",
      "Automation",
      "Tampermonkey",
      "Productivity"
    ],

    overview:
      "Developed a data-extraction automation tool to streamline repetitive information collection.",

    problem: [
      "Manual extraction required repetitive copy-and-paste activities.",
      "The process consumed operational time.",
      "Manual extraction created opportunities for inconsistency."
    ],

    solution: [
      "Created an automated extraction mechanism.",
      "Reduced repetitive manual collection.",
      "Structured extracted information for easier downstream analysis."
    ],

    impact: [
      "Reduced manual extraction effort.",
      "Improved data accessibility.",
      "Improved consistency of collected information."
    ],

    metrics: [
      ["Automation", "Data extraction"],
      ["Efficiency", "Manual effort reduction"],
      ["Consistency", "Structured data"],
      ["Reusable", "Tool"]
    ]
  },


  {
    id: "wrappy",
    number: "08",
    category: "WORKFORCE MANAGEMENT",

    title: "Wrappy Class Management Tool",

    description:
      "Created a class-management solution designed to simplify operational coordination and tracking.",

    tags: [
      "Workforce",
      "Automation",
      "Class Management",
      "Operations"
    ],

    overview:
      "Developed a class-management tool to simplify operational coordination and improve visibility.",

    problem: [
      "Class-related operational coordination required manual tracking.",
      "Multiple pieces of information needed to be managed consistently."
    ],

    solution: [
      "Created a centralized management mechanism.",
      "Improved visibility into class information.",
      "Simplified recurring operational coordination."
    ],

    impact: [
      "Improved class-management efficiency.",
      "Reduced manual coordination.",
      "Created a more structured operational workflow."
    ],

    metrics: [
      ["Workflow", "Class management"],
      ["Automation", "Operational support"],
      ["Visibility", "Centralized tracking"],
      ["Efficiency", "Manual effort reduction"]
    ]
  }

];


/* =========================================================
   DASHBOARDS
   ONLY THE THREE DASHBOARD IMAGES ARE REFERENCED HERE.
   SOURCE/DETAIL IMAGES ARE NOT REQUIRED IN ASSETS.
========================================================= */

const dashboards = [

  {
    id: "image-audit-dashboard",

    category: "DASHBOARD / AUDIT ANALYTICS",

    title: "Image Automation Audit Dashboard",

    description:
      "Audit intelligence dashboard covering automation accuracy, defect patterns, NRR, NVA and aging-ticket impact.",

    image:
      "assets/Image-Automation-Audit-Dashboard.png",

    metrics: [
      ["98.2%", "Automation accuracy"],
      ["1,200+", "Cases audited"],
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
      "Audited 1,200+ cases.",
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
      "Achieved 98.2% automation accuracy.",
      "NRR trend reduced from 8.45% to 5.00%.",
      "Aging tickets reduced by 77%.",
      "NVA reduced from 8.25% to 4.40%.",
      "Created improved visibility into automation quality and operational impact."
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
      "assets/Artemis-AutoML-Dashboard.png",

    metrics: [
      ["50m/day", "Time saved"],
      ["Real-time", "Updates"],
      ["5,400+", "Class conversions"],
      ["Automated", "Data tracking"]
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
      "assets/Pulse-Dashboard.png",

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
   DOM
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

const cursorGlow =
  document.querySelector(".cursor-glow");


/* =========================================================
   HTML HELPERS
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
   RENDER PROJECTS
========================================================= */

function renderProjects() {

  if (!projectGrid) return;

  projectGrid.innerHTML =
    projects.map(project => `

      <article
        class="project-card
        ${project.featured ? "featured" : ""}
        reveal"
      >

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
   RENDER DASHBOARDS
========================================================= */

function renderDashboards() {

  if (!dashboardGrid) return;

  dashboardGrid.innerHTML =
    dashboards.map(dashboard => `

      <article class="dashboard-card reveal">

        <img
          src="${dashboard.image}"
          alt="${dashboard.title}"
          class="dashboard-image"
          loading="lazy"
        >


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
   RENDER MONTHLY INITIATIVES
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
   PROJECT CASE STUDY
========================================================= */

function openProjectCaseStudy(projectId) {

  const project =
    projects.find(item => item.id === projectId);

  if (!project) return;


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
   DASHBOARD CASE STUDY
========================================================= */

function openDashboardCaseStudy(dashboardId) {

  const dashboard =
    dashboards.find(item => item.id === dashboardId);

  if (!dashboard) return;


  let additionalSections = "";


  /*
     Image Automation Audit contains additional
     analytical tables.
  */

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


      <!-- ONLY THE ACTUAL DASHBOARD IMAGE -->
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
          PROBLEM SOLVED
        </h3>

        ${listHTML(dashboard.problem)}

      </div>


      <div class="case-study-section">

        <h3>
          SOLUTION DELIVERED
        </h3>

        ${listHTML(dashboard.solution)}

      </div>


      <div class="case-study-section">

        <h3>
          MEASURABLE IMPACT
        </h3>

        ${listHTML(dashboard.impact)}

      </div>


      <div class="case-study-section">

        <h3>
          TECHNICAL IMPLEMENTATION
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
   MONTHLY CASE STUDY
========================================================= */

function openMonthlyInitiative(index) {

  const item =
    monthlyInitiatives[index];

  if (!item) return;


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
              Reported initiative impact
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
   CLICK HANDLING
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
   COUNTERS
========================================================= */

function animateCounter(element) {

  const target =
    Number(element.dataset.counter);

  const duration = 1400;

  const start =
    performance.now();


  function update(now) {

    const progress =
      Math.min(
        (now - start) / duration,
        1
      );

    const eased =
      1 - Math.pow(1 - progress, 3);

    const current =
      Math.floor(target * eased);

    element.textContent =
      `${current}+`;


    if (progress < 1) {

      requestAnimationFrame(update);

    }

  }


  requestAnimationFrame(update);
}


const counterObserver =
  new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          animateCounter(entry.target);

          observer.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.5
    }
  );


document
  .querySelectorAll("[data-counter]")
  .forEach(counter => {

    counterObserver.observe(counter);

  });


/* =========================================================
   REVEAL ANIMATION
========================================================= */

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
   CURSOR GLOW
========================================================= */

if (cursorGlow) {

  window.addEventListener(
    "mousemove",
    event => {

      cursorGlow.style.left =
        `${event.clientX}px`;

      cursorGlow.style.top =
        `${event.clientY}px`;

    }
  );

}


/* =========================================================
   THEME
========================================================= */

const savedTheme =
  localStorage.getItem(
    "sayanti-theme"
  );


if (savedTheme === "light") {

  document.body.classList.add(
    "light"
  );

}


if (themeToggle) {

  themeToggle.addEventListener(
    "click",
    () => {

      document.body.classList.toggle(
        "light"
      );


      const theme =
        document.body.classList.contains(
          "light"
        )
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
        document.querySelector(
          ".nav-links"
        );

      if (nav) {

        nav.classList.toggle(
          "mobile-open"
        );

      }

    }
  );

}


/* =========================================================
   CLOSE MOBILE MENU AFTER LINK CLICK
========================================================= */

document
  .querySelectorAll(".nav-links a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        const nav =
          document.querySelector(
            ".nav-links"
          );

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
   MOBILE NAVIGATION CSS
========================================================= */

const mobileMenuStyle =
  document.createElement("style");


mobileMenuStyle.textContent = `

  @media (max-width: 950px) {

    .nav-links.mobile-open {

      display: flex;

      position: fixed;

      top: 72px;

      left: 15px;

      right: 15px;

      padding: 20px;

      flex-direction: column;

      align-items: flex-start;

      gap: 16px;

      border-radius: 16px;

      background: rgba(12,16,23,0.97);

      border: 1px solid rgba(255,255,255,0.1);

      box-shadow:
        0 25px 70px rgba(0,0,0,0.5);

    }

  }

`;


document.head.appendChild(
  mobileMenuStyle
);
