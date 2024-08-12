document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function () {
        // Toggle the 'active' class to show/hide the menu
        navMenu.classList.toggle('active');
    });
});
