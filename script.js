document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Logic
    const menuIcon = document.querySelector('.menu-icon');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavClose = document.querySelector('.mobile-nav-close');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');

    const toggleMenu = (state) => {
        mobileNav.classList.toggle('active', state);
    };

    if (menuIcon) menuIcon.addEventListener('click', () => toggleMenu(true));
    if (mobileNavClose) mobileNavClose.addEventListener('click', () => toggleMenu(false));
    mobileLinks.forEach(link => link.addEventListener('click', () => toggleMenu(false)));

    // 2. Project Slider Logic
    let currentProject = 0;
    const totalProjects = 5;
    const imageContainers = document.querySelectorAll('.image-container');
    const projectDetails = document.querySelectorAll('.project-details');
    const progressDots = document.querySelectorAll('.progress-dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function updateProject(index) {
        // Loop index nếu vượt quá giới hạn
        if (index >= totalProjects) index = 0;
        if (index < 0) index = totalProjects - 1;

        imageContainers.forEach((el, i) => el.classList.toggle('active', i === index));
        projectDetails.forEach((el, i) => el.classList.toggle('active', i === index));
        progressDots.forEach((el, i) => el.classList.toggle('active', i === index));

        currentProject = index;
    }

    if (nextBtn) nextBtn.addEventListener('click', () => updateProject(currentProject + 1));
    if (prevBtn) prevBtn.addEventListener('click', () => updateProject(currentProject - 1));

    progressDots.forEach((dot, i) => {
        dot.addEventListener('click', () => updateProject(i));
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') updateProject(currentProject + 1);
        if (e.key === 'ArrowLeft') updateProject(currentProject - 1);
    });

    // 3. Scroll Visibility Logic
    const projectControls = document.querySelector('.project-controls');
    const workSection = document.querySelector('#work');

    window.addEventListener('scroll', () => {
        if (!workSection || !projectControls) return;

        const sectionBottom = workSection.offsetTop + workSection.offsetHeight;
        if (window.scrollY > sectionBottom - 100) {
            projectControls.classList.add('hidden');
        } else {
            projectControls.classList.remove('hidden');
        }

        // Highlight active link
        const sections = document.querySelectorAll('section[id], #work');
        sections.forEach(section => {
            const top = window.scrollY;
            const offset = section.offsetTop - 150;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (top >= offset && top < offset + height) {
                document.querySelectorAll('.desktop-nav a').forEach(a => {
                    a.classList.remove('active');
                    if (a.getAttribute('href') === '#' + id) a.classList.add('active');
                });
            }
        });
    });

    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Cảm ơn bạn! Tin nhắn đã được gửi thành công.');
            contactForm.reset();
        });
    }
});