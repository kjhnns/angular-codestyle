'use strict';

angular
    .module('angularCodestyleApp')
    .config(function($stateProvider, $routeProvider) {
        $routeProvider.otherwise('/home');
        // Now set up the states
        $stateProvider
            .state('frontend', {
                url: '/frontend',
                templateUrl: 'views/frontend.html',
                controller: ['BreadCrumbService', function(BreadCrumbService) {
                    var self = this;
                    self.breadCrumbs = BreadCrumbService.crumbs;
                    return self;
                }],
                controllerAs: 'frontend',
                abstract: true
            })
            .state('frontend.main', {
                url: '/main',
                templateUrl: 'views/frontend.main.html',
                resolve: {
                    addBreadCrumb: function(BreadCrumbService) {
                        BreadCrumbService.add('frontend.main', 'Frontend');
                    }
                }
            })
            .state('frontend.controller', {
                url: '/controller',
                templateUrl: 'views/frontend.controller.html',
                controller: 'GoatsCtrl',
                controllerAs: 'goats',
                resolve: {
                    goats: ['GoatsService',
                        function(GoatsService) {
                            return GoatsService.getGoats();
                        }
                    ],
                    goat: function() {
                        return {};
                    },
                    addBreadCrumb: function(BreadCrumbService) {
                        BreadCrumbService.add('frontend.main', 'Frontend');
                        BreadCrumbService.add('frontend.controller', 'Controller');
                    }
                },
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'views/main.html'
            })
            .state('boostrap', {
                url: '/boostrapUI',
                templateUrl: 'views/boostrap.html'
            });
    });
