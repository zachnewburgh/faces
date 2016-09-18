function Video($resource) {
  var Video = $resource('http://localhost:3000/api/v1/videos/:id.json', {id: '@id'}, {
    update: {method: 'PUT'}
  });
  return Video;
};

angular
  .module('app')
  .factory('Video', Video);