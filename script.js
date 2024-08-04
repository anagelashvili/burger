document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burgerMenu');

    // Toggle class on click
    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
    });
});
