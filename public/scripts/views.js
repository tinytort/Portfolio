'use strict';
var app = app || {};

(function (module) {
    const viewProj = {};

    viewProj.init = function () {
        $('div[data-tab = "bio"]').hide();

        $('div[data-tab = "projects"]').show();

        // FROM STACK OVERFLOW https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
        $('html, body').animate({
            scrollTop: $('#scroll').offset().top - 100
        }, 700);
    };
    module.viewProj = viewProj;
}(app));

(function (module) {
    const viewBio = {};

    viewBio.init = function () {
        $('div[data-tab = "projects"]').hide();
        $('div[data-tab = "bio"]').show();
        console.log(app.repos.all);
        // FROM STACK OVERFLOW https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
        $('html, body').animate({
            scrollTop: $('#scroll').offset().top - 100
        }, 700);
    }
    module.viewBio = viewBio;
}(app));
