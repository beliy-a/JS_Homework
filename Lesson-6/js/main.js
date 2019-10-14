$('.burger__menu').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('burger__menu_active');
    $('.header_navbar').toggleClass('header_navbar_active');
});

