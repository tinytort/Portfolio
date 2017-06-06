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


projects.forEach(function (project) { //eslint-disable-line
    objects.push(new Project(project))
});

objects.forEach(function (object) {
    console.log(object);
    $('#projectsDiv').append(object.toHtml());
});




