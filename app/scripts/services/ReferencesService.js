'use strict';

angular.module('angularCodestyleApp')
.service('ReferencesService', ['$rootScope', function($rootScope) {
    var ReferencesService = {
        references: [],
    };

    $rootScope.$on('$stateChangeStart', function() {
        ReferencesService.references.splice(0, ReferencesService.references.length);
    });

    ReferencesService.add = function(url, label, title) {
        ReferencesService.references.push({url: url, label: label, title: title});
    };

    ReferencesService.get =function() {
        return ReferencesService.references;
    };

    return ReferencesService;
}]);
