'use strict';
var app = app || {};

(function (module) {
    const projectController = {};

    projectController.init = function () {
        app.viewProj.init();
        app.Project.fetchAll();

    }
    module.projectController = projectController;
}(app));

