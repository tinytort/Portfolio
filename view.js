'use strict';
// Tabs \\
$('.tabContent').hide();

var viewObj = {};

viewObj.handleNav = function () {
    $('#navBar').on('click', 'li', function () {
        event.preventDefault();
        $('.tabContent').hide();
        $(`div[data-tab=${$(this).attr('data-tab')}]`).show();
    });
};



viewObj.handleNav();