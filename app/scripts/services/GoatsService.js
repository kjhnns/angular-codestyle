'use strict';

angular.module('angularCodestyleApp')
    .service('GoatsService', function() {
        this.goats = [{
                name: 'Ziege'
            }, {
                name: 'Ersan'
            }, {
                name: 'Jorrit'
            }];


        this.saveGoat = function(goat) {
            this.goats.push(goat);
        };

        this.getGoats = function() {
            return {data: this.goats};
        };

    });
