(function () {
    'use strict';

    angular
        .module('profile')
        .controller('AddSkillController', AddSkillController);

    /** @ngInject */
    function AddSkillController($scope, skillDataService, Skill) {
        var $ctrl = this;

        $ctrl.skills = [];

        $ctrl.showNew = false;
        $ctrl.newSkill = undefined;

        $ctrl.search = function (skill) {
            if (skill) {
                skillDataService.search(skill)
                    .then(function (response) {
                        $scope.$apply(function () {
                            var skills = response;

                            $ctrl.showNew = false;
                            var exactMatch = false;
                            skills.forEach(function (item, index, array) {
                                if (item.getName() == skill) {
                                    exactMatch = true;
                                }
                            });
                            if (!exactMatch) {
                                $ctrl.newSkill = new Skill(skill);
                                //                                skills.unshift($ctrl.newSkill);
                                $ctrl.showNew = true;
                            }

                            $ctrl.skills = skills;
                        });
                    });
            } else {
                $ctrl.skills = [];
            }
        }

        $ctrl.addNoob = function (index) {
            $ctrl.add($ctrl.skills[index], 0);
        }

        $ctrl.addMid = function (index) {
            $ctrl.add($ctrl.skills[index], 1);
        }

        $ctrl.addBatman = function (index) {
            $ctrl.add($ctrl.skills[index], 2);
        }

        $ctrl.createAndAddNoob = function () {
            $ctrl.createAndAdd(0);
        }

        $ctrl.createAndAddMid = function () {
            $ctrl.createAndAdd(1);
        }

        $ctrl.createAndAddBatman = function () {
            $ctrl.createAndAdd(2);
        }

        $ctrl.createAndAdd = function (level) {
          $ctrl.add($ctrl.newSkill, level);
        }

        $ctrl.add = function (skill, level) {
            console.log(skill);
            console.log(level);
        }
    }

})();
