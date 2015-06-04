'use strict';

angular.module('angularCodestyleApp')
.service('BreadCrumbService', ['$rootScope', function($rootScope) {
    var BreadCrumbService = {
        crumbs: [],
    };

    $rootScope.$on('$stateChangeStart', function() {
        BreadCrumbService.crumbs.splice(0, BreadCrumbService.crumbs.length);
    });

    BreadCrumbService.add = function(state, label) {
        BreadCrumbService.crumbs.push({state: state, label: label});
    };

    BreadCrumbService.get =function() {
        return BreadCrumbService.crumbs;
    };

    return BreadCrumbService;
}]);
