'use strict';


var objects = [];

function Project(projects) {
    this.title = projects.title;
    this.date = projects.date;
    this.img = projects.img;
    this.url = projects.url;
}

Project.prototype.toHtml = function () {
    var $newProject = $('.newProjects').clone();

    $newProject.find('.newProjects div').html(this.title);
    $newProject.find('.date').html(this.date);
    $newProject.find('img').html(this.img);
    $newProject.find('url').attr('href', this.url);
};

projects.forEach(function (project) {
    objects.push(new Project(project))
});

objects.forEach(function (object) {
    $('objects').append(object.toHtml());
});
