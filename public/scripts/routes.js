'use strict';
var app = app || {}

page('/', app.indexController.init);
page('/projects', app.projectController.init);
page('/bio', app.bioController.init);

page();