(function () {
    'use strict';

    angular
        .module('profile')
        .component('listSkills', {
            templateUrl: 'app/profile/skills/profile.listskills.component.html',
            controller: controller,
            controllerAs: '$ctrl',
            bindings: {
                skills: '<',
                showNew: '<',
                newSkill: '<',
                addNoob: '&',
                addMid: '&',
                addBatman: '&'
            }
        });

    /** @ngInject */
    function controller() {
        var $ctrl = this;
    }

})();
