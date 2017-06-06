'use strict';


var objects = [];

function Project(projects) {
    this.title = projects.title;
    this.date = projects.date;
    this.img = projects.img;
    this.url = projects.url;
}

Project.prototype.toHtml = function () {
    var templateFiller = Handlebars.compile($('#portfolioTemplate').html()); //eslint-disable-line


    return templateFiller(this);
}




// Project.prototype.toHtml = function () {
//     var $newProject = $('.template').clone().removeClass('template');
//     $newProject.find('.title').html(this.title);
//     $newProject.find('.date').html(this.date);
//     $newProject.find('.img').html(this.img);
//     $newProject.find('.url').attr('href', this.url);
//     return $newProject;
// };

projects.forEach(function (project) { //eslint-disable-line
    objects.push(new Project(project))
});

objects.forEach(function (object) {
    console.log(object);
    $('#projectsDiv').append(object.toHtml());
});




