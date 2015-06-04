'use strict';

angular.module('angularCodestyleApp')
    .service('GoatsService', ['$http', function($http) {
        var results = {
            getGoats: [{
                name: 'Ziege'
            }, {
                name: 'Ersan'
            }, {
                name: 'Jorrit'
            }],
            getGoat: {
                name: 'Jorrit',
                age: '12',
                birthplace: 'Darmstadt'
            }
        };


        this.saveGoat = function(goat) {
            return $http.post('/goats', goat);
        };

        this.getGoats = function() {
            return {data: results.getGoats};
        };

        this.getGoat = function() {
            return results.getGoat;
        };
    }]);
