function EditVideoController(Video, $location, $stateParams) {
  var ctrl = this;
  ctrl.video = Video.get({id: $stateParams.id});

  ctrl.editVideo = function() {
    ctrl.video.$update(function() {
      $location.path('videos');
    });
  };
};

angular
  .module('app')
  .controller('EditVideoController', EditVideoController);