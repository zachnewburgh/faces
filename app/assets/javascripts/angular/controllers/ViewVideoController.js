function ViewVideoController(Video, $stateParams) {
  var ctrl = this;
  ctrl.video = Video.get({id: $stateParams.id});
}

angular
  .module('app')
  .controller('ViewVideoController', ViewVideoController);