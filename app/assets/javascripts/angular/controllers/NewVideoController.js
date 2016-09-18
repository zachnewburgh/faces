function NewVideoController() {

  var ctrl = this;
  ctrl.video = new Video();

  ctrl.addVideo = function() {
    ctrl.video.$save(function() {
      $location.path('videos');
    });
  };
};

angular
  .module('app')
  .controller('NewVideoController', NewVideoController);