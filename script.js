/* =========================================================
   SAYANTI ACHARJEE — PORTFOLIO SCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const body = document.body;

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navLinks =
        document.querySelector(".nav-links");

    const modal =
        document.querySelector(".project-modal");

    const modalWindow =
        document.querySelector(".modal-window");

    const modalClose =
        document.querySelector(".modal-close");

    const modalBackdrop =
        document.querySelector(".modal-backdrop");

    const projectButtons =
        document.querySelectorAll(".project-open");


    /* =====================================================
       IMPORTANT:
       ALWAYS KEEP THE MODAL CLOSED ON PAGE LOAD
    ===================================================== */

    if (modal) {

        modal.classList.remove("active");

        modal.setAttribute("aria-hidden", "true");

        body.classList.remove("modal-open");

    }


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            menuToggle.classList.toggle("active");

        });


        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                menuToggle.classList.remove("active");

            });

        });

    }


    /* =====================================================
       CLOSE MODAL
    ===================================================== */

    function closeModal() {

        if (!modal) return;

        modal.classList.remove("active");

        modal.setAttribute("aria-hidden", "true");

        body.classList.remove("modal-open");

    }


    /* =====================================================
       OPEN MODAL
    ===================================================== */

    function openModal(button) {

        if (!modal) return;

        const project =
            button.getAttribute("data-project");

        populateModal(project);

        modal.classList.add("active");

        modal.setAttribute("aria-hidden", "false");

        body.classList.add("modal-open");

    }


    /* =====================================================
       PROJECT MODAL CONTENT
    ===================================================== */

    function populateModal(project) {

        const modalLabel =
            modal.querySelector(".modal-header span");

        const modalTitle =
            modal.querySelector(".modal-header h2");

        const caseBlocks =
            modal.querySelectorAll(".case-block");

        const metrics =
            modal.querySelectorAll(".case-metric");


        /*
         * DEFAULT PROJECT
         */

        let data = {

            label: "CASE STUDY",

            title: "Project",

            problem:
                "An operational challenge requiring structured analysis and process improvement.",

            data:
                "Collected and analyzed operational data to identify patterns, gaps, and root causes.",

            analysis:
                "Used analytics, process mapping, and stakeholder inputs to determine the highest-impact intervention points.",

            solution:
                "Designed a scalable solution combining automation, process optimization, reporting, and stakeholder collaboration.",

            impact:
                "Created measurable improvements in operational performance, efficiency, and quality.",

            metrics: [
                ["89%", "Missed contacts reduced"],
                ["25%", "Productivity improvement"],
                ["50%", "NRR reduction"]
            ]

        };


        /* =================================================
           PROJECT 1 — AUTOMATION
        ================================================= */

        if (
            project === "automation" ||
            project === "tampermonkey"
        ) {

            data = {

                label: "AUTOMATION • AMAZON",

                title: "Contact Automation",

                problem:
                    "A recurring operational process was creating unnecessary missed seller contacts and manual effort.",

                data:
                    "Reviewed process behavior and operational contact patterns to identify where contacts were being missed.",

                analysis:
                    "Root-cause analysis showed that repetitive manual steps were creating avoidable delays and missed actions.",

                solution:
                    "Built a Tampermonkey-based automation solution to streamline the workflow and surface relevant actions directly within the operational environment.",

                impact:
                    "The solution significantly reduced missed seller contacts while improving workflow efficiency.",

                metrics: [
                    ["89%", "Missed contacts reduction"],
                    ["↓", "Manual effort"],
                    ["↑", "Workflow efficiency"]
                ]

            };

        }


        /* =================================================
           PROJECT 2 — DASHBOARD
        ================================================= */

        else if (
            project === "dashboard" ||
            project === "analytics"
        ) {

            data = {

                label: "ANALYTICS • BI",

                title: "Operations Dashboard",

                problem:
                    "Operational teams lacked a consolidated view of productivity and performance drivers.",

                data:
                    "Combined operational datasets and created structured reporting layers using Excel, Power Query, Power Pivot and DAX.",

                analysis:
                    "Analyzed productivity patterns, performance gaps, and recurring operational bottlenecks.",

                solution:
                    "Built an interactive analytics dashboard that converted raw operational data into actionable performance insights.",

                impact:
                    "The dashboard improved visibility and enabled faster, data-driven operational decisions.",

                metrics: [
                    ["25%", "Productivity improvement"],
                    ["BI", "Automated reporting"],
                    ["360°", "Performance visibility"]
                ]

            };

        }


        /* =================================================
           PROJECT 3 — NRR
        ================================================= */

        else if (
            project === "nrr" ||
            project === "process"
        ) {

            data = {

                label: "PROCESS OPTIMIZATION",

                title: "NRR Reduction",

                problem:
                    "High Not Resolved Rate was affecting operational efficiency and creating avoidable repeat work.",

                data:
                    "Analyzed operational cases, resolution patterns, transfer behavior and recurring failure points.",

                analysis:
                    "Identified process gaps and recurring root causes contributing to unresolved cases.",

                solution:
                    "Developed targeted process improvements, reporting mechanisms and coaching interventions based on the analysis.",

                impact:
                    "The initiative significantly reduced NRR and improved overall case resolution performance.",

                metrics: [
                    ["9.45%", "Starting NRR"],
                    ["4.31%", "Improved NRR"],
                    ["54%", "Approx. reduction"]
                ]

            };

        }


        /* =================================================
           PROJECT 4 — IMAGE AUDIT
        ================================================= */

        else if (
            project === "image" ||
            project === "audit"
        ) {

            data = {

                label: "QUALITY • AUDIT",

                title: "Image Automation Audit",

                problem:
                    "Automation-related errors were contributing to quality issues, NVA and aging operational tickets.",

                data:
                    "Audited more than 1,200 cases across relevant error codes and analyzed recurring patterns.",

                analysis:
                    "Segmented errors to identify root causes across process, product and operational layers.",

                solution:
                    "Partnered with Product, Tech, Security and Operations stakeholders to implement corrective actions.",

                impact:
                    "Improved accuracy while reducing NRR, NVA and aging tickets.",

                metrics: [
                    ["1,200+", "Cases audited"],
                    ["98.2%", "Post-audit accuracy"],
                    ["50%", "NRR reduction"]
                ]

            };

        }


        /* =================================================
           UPDATE MODAL
        ================================================= */

        if (modalLabel) {

            modalLabel.textContent =
                data.label;

        }


        if (modalTitle) {

            modalTitle.textContent =
                data.title;

        }


        /*
         * Update case-study blocks.
         *
         * Expected order:
         *
         * 1. Problem
         * 2. Data
         * 3. Analysis
         * 4. Solution
         * 5. Impact
         */

        if (caseBlocks.length >= 5) {

            const content = [

                data.problem,
                data.data,
                data.analysis,
                data.solution,
                data.impact

            ];

            caseBlocks.forEach((block, index) => {

                const paragraph =
                    block.querySelector("p");

                if (paragraph && content[index]) {

                    paragraph.textContent =
                        content[index];

                }

            });

        }


        /*
         * Update metrics
         */

        metrics.forEach((metric, index) => {

            if (!data.metrics[index]) return;

            const value =
                metric.querySelector("strong");

            const label =
                metric.querySelector("span");

            if (value) {

                value.textContent =
                    data.metrics[index][0];

            }

            if (label) {

                label.textContent =
                    data.metrics[index][1];

            }

        });

    }


    /* =====================================================
       PROJECT BUTTONS
    ===================================================== */

    projectButtons.forEach(button => {

        button.addEventListener("click", event => {

            event.preventDefault();

            openModal(button);

        });

    });


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    if (modalClose) {

        modalClose.addEventListener("click", () => {

            closeModal();

        });

    }


    /* =====================================================
       CLOSE WHEN CLICKING BACKDROP
    ===================================================== */

    if (modalBackdrop) {

        modalBackdrop.addEventListener("click", () => {

            closeModal();

        });

    }


    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeModal();

        }

    });


    /* =====================================================
       PREVENT MODAL WINDOW CLICK FROM CLOSING
    ===================================================== */

    if (modalWindow) {

        modalWindow.addEventListener("click", event => {

            event.stopPropagation();

        });

    }


    /* =====================================================
       NAVIGATION ACTIVE STATE
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navItems =
        document.querySelectorAll(".nav-links a");


    if (
        sections.length &&
        navItems.length
    ) {

        window.addEventListener(
            "scroll",
            () => {

                let current = "";

                sections.forEach(section => {

                    const sectionTop =
                        section.offsetTop - 160;

                    if (
                        window.scrollY >=
                        sectionTop
                    ) {

                        current =
                            section.getAttribute("id");

                    }

                });


                navItems.forEach(link => {

                    link.classList.remove("active");

                    const href =
                        link.getAttribute("href");

                    if (
                        href === `#${current}`
                    ) {

                        link.classList.add("active");

                    }

                });

            }
        );

    }


    /* =====================================================
       REVEAL OBSERVER
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    if (
        revealElements.length &&
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {

            observer.observe(element);

        });

    }


    /* =====================================================
       BUTTON HOVER MICRO-INTERACTION
    ===================================================== */

    document
        .querySelectorAll(
            ".button, .contact-button"
        )
        .forEach(button => {

            button.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        button.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left;

                    const y =
                        event.clientY -
                        rect.top;

                    button.style.setProperty(
                        "--mouse-x",
                        `${x}px`
                    );

                    button.style.setProperty(
                        "--mouse-y",
                        `${y}px`
                    );

                }
            );

        });


    /* =====================================================
       PAGE LOADED
    ===================================================== */

    console.log(
        "Sayanti Portfolio loaded successfully."
    );

});
