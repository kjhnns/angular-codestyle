'use strict';

angular.module('angularCodestyleApp').directive('listGoats', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            goats: '='
        },
        template: '<ul><li ng-repeat="goat in goats">{{goat.name}}</li></ul>'
    };
});
