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



$.ajax({
    url: './scripts/data.json',
    type: 'GET',
    success: function (data) {
        data.forEach(function (project) { //eslint-disable-line
            objects.push(new Project(project))
        });

        objects.forEach(function (object) {
            console.log(object);
            $('#projectsDiv').append(object.toHtml());
        });
    },
    error: function (err) { //eslint-disable-line
        console.log(err); //eslint-disable-line

    }
});



