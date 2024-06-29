const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
    });
});

function highlightNavLink() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const sectionId = section.getAttribute('id');
            navLinks.forEach(navLink => {
                if (navLink.getAttribute('href') === `#${sectionId}`) {
                    navLinks.forEach(navLink => navLink.classList.remove('active'));
                    navLink.classList.add('active');
                }
            });
        }
    });

    if (scrollPosition + windowHeight >= documentHeight) {
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        navLinks[3].classList.add('active');
    }
}

highlightNavLink();
window.addEventListener('scroll', highlightNavLink);
