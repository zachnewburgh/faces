function VideosController(Video) {

  var ctrl = this;
  ctrl.videos = Video.query();

};

angular
  .module('app')
  .controller('VideosController', VideosController);