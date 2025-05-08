
// Toggle Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Changes icon to X
    navbar.classList.toggle('active'); // Shows/hides navbar
};

// Scroll Section Active Link + Sticky Navbar
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // Sticky Header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove active class from toggle on scroll (when navbar is active)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Scroll section active link
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// Function for CV Download
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'Sayed%20Kesa%20Zaidi.Resume.pdf'; // Ensure the path is correct
    link.download = 'Sayed_Kesa_Zaidi_Resume.pdf'; // Rename when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

// scroll reveal
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading',  { origin: 'top' });
 ScrollReveal().reveal('.home-img, .education-content, .portfolio-box, .contact-form',  { original: 'bottom' });