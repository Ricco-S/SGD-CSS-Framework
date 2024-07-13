document.addEventListener('DOMContentLoaded', function() {
    var navbarHeader = document.getElementById('sgd-navbar-header');
    var navbar = document.getElementById('sgd-navbar');
    var scrollToTopBtn = document.getElementById('sgd-scrollToTopBtn');

    if (!navbarHeader || !navbar) {
        console.error('navbarHeader or navbar element not found');
        return;
    }

    var headerHeight = navbarHeader.offsetHeight;

    function onScroll() {
        if (window.scrollY >= headerHeight) {
            navbar.classList.add('sgd-affix');
        } else {
            navbar.classList.remove('sgd-affix');
        }

        if (window.scrollY > 500) {
            scrollToTopBtn.classList.add('sgd-show');
        } else {
            scrollToTopBtn.classList.remove('sgd-show');
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    scrollToTopBtn.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', onScroll);

    // Smooth Scroll for elements with class "sgd-scroll-to"
    var scrollToElements = document.querySelectorAll('.sgd-scroll-to');
    scrollToElements.forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            // Close mobile navbar if open
            var navbarMenu = document.getElementById("sgd-navbar-menu");
            if (navbarMenu.classList.contains('sgd-in')) {
                navbarMenu.classList.remove('sgd-in');
                var hamburger = document.getElementById("sgd-hamburger");
                hamburger.classList.remove("sgd-change");
            }
        });
    });

    // Navbar Toggle
    function toggleNavbar() {
        var navbarMenu = document.getElementById("sgd-navbar-menu");
        navbarMenu.classList.toggle("sgd-in");
        var hamburger = document.getElementById("sgd-hamburger");
        hamburger.classList.toggle("sgd-change");
    }

    // Event Listener für Navbar Toggle hinzufügen
    var navbarToggle = document.querySelector('.sgd-navbar-toggle');
    if (navbarToggle) {
        navbarToggle.addEventListener('click', toggleNavbar);
    }

    // Dropdown Toggle
    function toggleDropdown(event) {
        event.preventDefault();
        var dropdownToggle = event.currentTarget;
        var dropdown = dropdownToggle.nextElementSibling;
        dropdownToggle.classList.toggle("sgd-active");
        dropdown.classList.toggle("sgd-active");
    }

    // Event Listener für Dropdowns hinzufügen
    var dropdownToggles = document.querySelectorAll('.sgd-nav-dropdown-toggle, .sgd-btn-dropdown-menu');
    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', toggleDropdown);
    });

    // Modal
    var modals = document.querySelectorAll('.sgd-modal');
    var modalTriggers = document.querySelectorAll('[data-modal-target]');
    var modalCloses = document.querySelectorAll('.sgd-close');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            var targetModal = document.querySelector(this.getAttribute('data-modal-target'));
            targetModal.style.display = 'block';
        });
    });

    modalCloses.forEach(close => {
        close.addEventListener('click', function() {
            modals.forEach(modal => modal.style.display = 'none');
        });
    });

    window.onclick = function(event) {
        if (event.target.classList.contains('sgd-modal')) {
            modals.forEach(modal => modal.style.display = 'none');
        }
    };
    
    

    // Accordion
    var accordions = document.getElementsByClassName("sgd-accordion");
    for (var i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function() {
            this.classList.toggle("sgd-active");
            var panel = this.nextElementSibling;
            panel.classList.toggle("sgd-active");
        });
    }
    
    

    // Tabs
    window.openTab = function(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("sgd-tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("sgd-tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" sgd-active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " sgd-active";
    }
});

