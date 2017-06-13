'use strict';
// Tabs
var viewObj = {};
$('.tabContent').hide();


viewObj.handleNav = function () {
    $('#navBar').on('click', 'li', function () {
        event.preventDefault();
        $('.tabContent').hide();
        
        $(`div[data-tab=${$(this).attr('data-tab')}]`).show();
        
        $('html, body').animate({
            scrollTop: $('#scroll').offset().top - 100
        }, 700);
        console.log(this);
    });
};
// FROM STACK OVERFLOW https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link





viewObj.handleNav();