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
                controller: ['BreadCrumbService', 'ReferencesService', function(BreadCrumbService, ReferencesService) {
                    var self = this;
                    self.breadCrumbs = BreadCrumbService.crumbs;
                    self.references = ReferencesService.references;
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
                controller: 'GoatsCtrl',        // Referring to the controller
                controllerAs: 'goats',          // Binding the controller to a specific variable

                // Promises that will be resolved before the State is changed
                resolve: {
                    // load all the available goats form the GoatsService
                    goats: ['GoatsService',
                        function(GoatsService) {
                            return GoatsService.getGoats();
                        }
                    ],
                    // Tutorial Services.
                    addBreadCrumb: function(BreadCrumbService) {
                        BreadCrumbService.add('frontend.main', 'Frontend');
                        BreadCrumbService.add('frontend.controller', 'Controller');
                    },
                    addReferences: function(ReferencesService) {
                        ReferencesService.add('https://scotch.io/tutorials/making-skinny-angularjs-controllers', 'https://scotch.io/tutorials/making-skinny-angularjs-controllers', 'Scotch.io');
                    }
                },
            })
            .state('frontend.states', {
                url: '/states',
                templateUrl: 'views/frontend.states.html',
                resolve: {
                    addBreadCrumb: function(BreadCrumbService) {
                        BreadCrumbService.add('frontend.main', 'Frontend');
                        BreadCrumbService.add('frontend.states', 'States');
                    },
                    addReferences: function(ReferencesService) {
                        ReferencesService.add('https://github.com/angular-ui/ui-router/wiki', 'https://github.com/angular-ui/ui-router/wiki', 'angular-ui/ui-router');
                        ReferencesService.add('https://scotch.io/tutorials/angular-routing-using-ui-router', 'https://scotch.io/tutorials/angular-routing-using-ui-router', 'scotch.io');

                    }

                },
            })
            .state('frontend.services', {
                url: '/services',
                templateUrl: 'views/frontend.services.html',
                resolve: {
                    addBreadCrumb: function(BreadCrumbService) {
                        BreadCrumbService.add('frontend.main', 'Frontend');
                        BreadCrumbService.add('frontend.services', 'Services');
                    },
                    addReferences: function(ReferencesService) {
                        ReferencesService.add('https://github.com/johnpapa/angular-styleguide#services', 'https://github.com/johnpapa/angular-styleguide#services', 'johnpapa/angular-styleguide');

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
