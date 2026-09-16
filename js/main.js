document.addEventListener("DOMContentLoaded", function () {

    /* Smooth scrolling */

    const navigationLinks = document.querySelectorAll('a[href^="#"]');

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    /* Active article section in table of contents */

    const sections = document.querySelectorAll(".article-section");
    const tocLinks = document.querySelectorAll(".article-toc nav a");

    if (sections.length > 0 && tocLinks.length > 0) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        tocLinks.forEach(function (link) {
                            link.classList.remove("active");
                        });

                        const activeLink = document.querySelector(
                            '.article-toc nav a[href="#' +
                            entry.target.id +
                            '"]'
                        );

                        if (activeLink) {
                            activeLink.classList.add("active");
                        }
                    }
                });

            },
            {
                rootMargin: "-20% 0px -65% 0px",
                threshold: 0
            }
        );

        sections.forEach(function (section) {
            observer.observe(section);
        });
    }


    /* Current year */

    const yearElements = document.querySelectorAll(".current-year");

    const currentYear = new Date().getFullYear();

    yearElements.forEach(function (element) {
        element.textContent = currentYear;
    });


    /* Confirm JavaScript connection */

    console.log("4D Humanity JavaScript is connected.");
});