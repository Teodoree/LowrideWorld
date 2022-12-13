window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-menu__list-item'),
    hamburger = document.querySelector('.humburger');
    span = document.querySelectorAll('.spans');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('humburger_active');
        menu.classList.toggle('nav-menu_active');

    });

    span.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('humburger_active');
            menu.classList.remove('nav-menu_active');
        })
    });

})