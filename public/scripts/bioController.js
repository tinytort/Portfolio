'use strict';
var app = app || {};

(function (module) {
    const bioController = {};

    bioController.init = function () {
        app.Repo.requestRepos(app.viewBio.init);
    }

    module.bioController = bioController;
}(app));

