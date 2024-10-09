document.getElementById('hamburger').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active'); // Toggle the active class on click
});

const submenuToggles = document.querySelectorAll('.submenu-toggle');
submenuToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        this.classList.toggle('active'); // Toggle the active class on submenu toggle
        const submenu = this.nextElementSibling; // Get the next sibling (submenu)
        if (submenu) {
            submenu.classList.toggle('active'); // Toggle the submenu display
        }
    });
});
