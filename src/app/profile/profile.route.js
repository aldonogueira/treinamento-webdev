(function () {
  'use strict';

  angular
    .module('profile')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('profile-example', {
        url: '/profile-example?email',
        template: '<tt-example  user="$ctrl.user"></tt-example>',        
        controller: ['resolveUser', function (resolveUser) {
          this.user = resolveUser;
        }],
        controllerAs: '$ctrl',
        resolve: {
          resolveUser: ['userDataService', '$stateParams', function (userDataService, $stateParams) {
            return userDataService.get($stateParams.email);
          }]
        }
      })
      .state('profile-skills', {
        url: '/skills?email',
        templateUrl: 'app/profile/addSkill.html',
      });
  }

})();
