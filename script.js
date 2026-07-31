document.addEventListener('DOMContentLoaded', () => {

    // Mobile menu
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav-menu');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            const open = nav.classList.toggle('active');
            hamburger.innerHTML = open
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });

        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }

    // FAQ accordion
    document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-q').addEventListener('click', () => {
            const wasOpen = item.classList.contains('open');
            
            // close all
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
            
            if (!wasOpen) item.classList.add('open');
        });
    });

});
