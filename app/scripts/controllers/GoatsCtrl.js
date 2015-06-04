'use strict';

angular.module('angularCodestyleApp')
    .controller('GoatsCtrl', ['$state', 'GoatsService', 'goats', 'goat',
        function($state, goatsService, goats, goat) {
            var self = this;           // using self helps to refer to controller object variables while being in methods

            self.goat = goat.data;     // these are the promises from the stateProvider,
            self.goats = goats.data;   // they get resolved once the state is activated

            // this function is just a wrapper for the Service,
            // once the Goat is saved, the state is being switched to
            // the state "goats".
            self.saveGoat = function() {
                goatsService.saveGoat(self.goat)
                    .then(function() {
                        $state.go('goats');
                    });
            };

            return self;               // instead of the $scope you return the controller
        }
    ]);
