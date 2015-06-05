'use strict';

angular.module('angularCodestyleApp')
    .controller('GoatsCtrl', ['$state', 'GoatsService', 'goats',
        function($state, goatsService, goats) {
            var self = this;           // using self helps to refer to controller object variables while being in methods

            self.goats = goats.data;   // this is the promises from the stateProvider, it get resolved once the state is activated

            self.goat = {};

            // this function is just a wrapper for the Service,
            // once the Goat is saved, the state is being switched to
            // the state "goats".
            self.saveGoat = function() {
                goatsService.saveGoat(self.goat);
                self.goat = {};
            };

            return self;               // instead of the $scope you return the controller
        }
    ]);
