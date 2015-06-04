'use strict';


angular.module('angularCodestyleApp')
    .controller('GoatsCtrl', ['$state', 'GoatsService', 'goats', 'goat',
        function($state, goatsService, goats, goat) {
            var self = this;

            self.goat = goat.data;

            self.goats = goats.data;

            self.saveGoat = function() {
                goatsService.saveGoat(self.goat)
                    .then(function() {
                        $state.go('goats');
                    });
            };

            return self;
        }
    ]);
