angular
  .module('app', ['ui.router', 'ngResource', 'templates'])
  .config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
   $stateProvider
     .state('home', {
       url: '/',
       templateUrl: 'home.html',
       controller: 'HomeController as ctrl'
     })
     .state('home.new', {
       url: 'new',
       templateUrl: 'home/new.html',
       controller: 'NewVideoController as ctrl'
     })
    .state('home.videos', {
       url: 'videos',
       templateUrl: 'home/videos.html',
       controller: 'VideosController as ctrl'
     })
     .state('home.video', {
       url: 'video/:id',
       templateUrl: 'home/show.html',
       controller: 'ViewVideoController as ctrl'
     })
    .state('home.edit', {
     url: 'edit/:id',
     templateUrl: 'home/edit.html',
     controller: 'EditVideoController as ctrl'
     });
  $urlRouterProvider.otherwise('/');
  $sceDelegateProvider.resourceUrlWhitelist([
     'self',
     '*://www.youtube.com/**'
   ]);
});