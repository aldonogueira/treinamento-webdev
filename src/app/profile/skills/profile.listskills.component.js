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
                addBatman: '&',
                createAndAddNoob: '&',
                createAndAddMid: '&',
                createAndAddBatman: '&'
            }
        });

    /** @ngInject */
    function controller() {
        var $ctrl = this;
    }

})();
