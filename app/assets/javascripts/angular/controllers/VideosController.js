function VideosController(Video, $location, $state) {

  var ctrl = this;
  ctrl.videos = Video.query();

  ctrl.deleteVideo = function(video) {
    video.$delete(function() {
      $state.reload();
    });
  };

};

angular
  .module('app')
  .controller('VideosController', VideosController);