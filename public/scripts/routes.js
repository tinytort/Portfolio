'use strict';
var app = app || {}
console.log('meow');

page('/', app.indexController.init);
page('/projects', app.projectController.init);
page('/bio', app.bioController.init);

page();