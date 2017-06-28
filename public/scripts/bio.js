'use strict';
var app = app || {};

(function (module) {
    function Repo(data) {
        this.url = data.url;
        this.name = data.name;
    }

    Repo.all = [];

    Repo.prototype.toHtml = function () {
        var tempFiller = Handlebars.compile($('#repoTemplate').html()); //eslint-disable-line
        return tempFiller(this);
    }
    Repo.requestRepos = function (callback) {
        $.get('github/user/repos')
            .then(data => {
                Repo.all = data.map((repoData) => {
                    return new Repo(repoData);
                });
                Repo.all.forEach((repo) => {
                    $('#bioDiv').append(repo.toHtml());
                })
            }, err => console.log(err))
            .then(callback);

    };
    module.Repo = Repo;
}(app));