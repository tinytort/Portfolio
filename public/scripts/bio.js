'use strict';
var app = app || {};

(function (module) {
    const repos = {};

    repos.all = [];

    repos.requestRepos = function (callback) {
        console.log('I work');
        $.get('github/user/repos')
            .then(data => repos.all = data, err => console.log(err))
            .then(callback);

    };
    module.repos = repos;
}(app));