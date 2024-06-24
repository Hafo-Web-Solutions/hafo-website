document.addEventListener('DOMContentLoaded', function () {
    let showNav = true;
    let lastScrollY = 0;
  
    // Function to handle page load events
    window.addEventListener('load', () => {
        const nav = document.querySelector('nav');
        if (showNav) {
            nav.style.display = 'none';
            setTimeout(() => {
                nav.style.display = '';
            }, 30);
        }
  
        // Restore scroll position from sessionStorage
        const scrollY = sessionStorage.getItem('scrollY');
        if (scrollY) {
            window.scrollTo(0, parseInt(scrollY, 10));
        }
        document.body.classList.remove('hidden-until-scroll');
        document.querySelector('header').classList.remove('hidden-until-scroll');
  
        // Check if the page should scroll to the top
        const scrollToTop = sessionStorage.getItem('scrollToTop');
        if (scrollToTop === 'true') {
            window.scrollTo(0, 0);
            sessionStorage.removeItem('scrollToTop');
        } else {
            // Restore scroll position from localStorage
            const savedScrollPosition = localStorage.getItem('scrollPosition');
            if (savedScrollPosition) {
                window.scrollTo(0, parseInt(savedScrollPosition, 10));
                localStorage.removeItem('scrollPosition');
            }
        }
    });
  
    // Function to handle scroll events
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const nav = document.querySelector('nav');
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
            showNav = false;
            nav.classList.add('nav-hidden');
            nav.classList.remove('nav-visible');
        } else if (currentScrollY < lastScrollY || currentScrollY <= 80) {
            showNav = true;
            nav.classList.remove('nav-hidden');
            nav.classList.add('nav-visible');
        }
        lastScrollY = currentScrollY;
    });
  
    // Disable automatic scroll restoration
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
  
    // Function to handle beforeunload events
    window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('scrollY', window.scrollY);
        localStorage.setItem('scrollPosition', window.scrollY);
    });
  
    // Function to handle link click events
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            sessionStorage.setItem('scrollToTop', 'true');
        });
    });
  });