function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    // const getStartedButton = document.querySelector('.get-started');
    const menuIcon = document.querySelector('.menu-icon');

    navLinks.classList.toggle('mobile-active');
    // getStartedButton.classList.toggle('mobile-active');
    menuIcon.classList.toggle('active'); // Toggle the 'active' class for icon change
}