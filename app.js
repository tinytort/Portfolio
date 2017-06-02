'use strict';


var objects = [];

function Project(projects) {
    this.title = projects.title;
    this.date = projects.date;
    this.img = projects.img;
    this.url = projects.url;
    
}

Project.prototype.toHtml = function () {
    // console.log($('.newProjects'));
    var $newProject = $('.template').clone().removeClass('template');
    console.log('these are the matched elements', $newProject);
    $newProject.find('.title').html(this.title);
    $newProject.find('.date').html(this.date);
    $newProject.find('.img').html(this.img);
    $newProject.find('.url').attr('href', this.url);
    return $newProject;
};

projects.forEach(function (project) {
    objects.push(new Project(project))
});

objects.forEach(function (object) {
    console.log(object);
    $('#projectsDiv').append(object.toHtml());
});
