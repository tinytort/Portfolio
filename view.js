'use strict';
// Tabs
var viewObj = {};
$('.tabContent').hide();


viewObj.handleNav = function () {
    $('#navBar').on('click', 'li', function () {
        event.preventDefault();
        $('.tabContent').hide();
        $(`div[data-tab=${$(this).attr('data-tab')}]`).show();
    });
};



viewObj.handleNav();