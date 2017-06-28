'use strict';
var app = {};

(function (module) {

    function Project(project) {
        this.title = project.title;
        this.date = project.date;
        this.img = project.img;
        this.url = project.url;
        this.linesOfCode = project.linesOfCode;
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
                Project.totalLines = Project.objects.reduce(function (acc, curr) {
                    return acc + curr.linesOfCode;
                }, 0)

                Project.objects.forEach(function (object) {
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