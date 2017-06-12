'use strict';
var app = {};

(function(module) {

    function Project(projects) {
        this.title = projects.title;
        this.date = projects.date;
        this.img = projects.img;
        this.url = projects.url;
    }
    Project.objects = [];

    Project.prototype.toHtml = function () {
        var templateFiller = Handlebars.compile($('#portfolioTemplate').html()); //eslint-disable-line


        return templateFiller(this);
    }


    Project.fetchAll = () => {
        $.ajax({
            url: './scripts/data.json',
            type: 'GET',
            success: function (data) {
                Project.objects = data.map(function (project) { //eslint-disable-line
                     return new Project(project);
                });

                Project.objects.forEach(function (object) {
                    console.log(object);
                    $('#projectsDiv').append(object.toHtml());
                });
            },
            error: function (err) { //eslint-disable-line
                console.log(err); //eslint-disable-line

            }
        });
    }
    module.Project = Project;
}(app));