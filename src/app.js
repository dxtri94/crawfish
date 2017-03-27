angular
    .module('app', [
        'ui.router',
        'ui.bootstrap',
        'ngAnimate',
        'app.modules',
        'app.header',
        'app.footer',
        'app.configs',
        'app.constants',
        'app.loggedIn'

    ])
    .config(config)
    .controller('appCtrl', appCtrl);
config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        // Layout: Blanksource
        .state('blank', {
            abstract: true,
            views: {
                'root': {
                    templateUrl: 'layouts/blank.tpl.html'
                }
            }
        })

        // init
        .state('init', {
            url: '/',
            resolve: {
                init: function ($state) {
                    $state.go('modules.home');
                }
            }
        })

        // 404
        .state('404', {
            url: '/404',
            views: {
                '': {
                    templateUrl: 'pages/404.tpl.html'
                }
            }
        })
}
appCtrl.$inject = ['$scope'];

function appCtrl($scope) {
    // settings application
    $scope.pageTitle = "Rockin' Crawfish";
    $scope.app = {
        name: 'therockincrawfish',
        description: "",
        version: '1.0',
        support: 'support@mail.com',
        settings: {
            themeID: 1,
            navbarHeaderColor: 'bg-black',
            navbarCollapseColor: 'bg-white-only',
            asideColor: 'bg-black',
            headerFixed: true,
            asideFixed: true,
            asideFolded: false,
            asideDock: false,
            container: false
        }
    };
}
