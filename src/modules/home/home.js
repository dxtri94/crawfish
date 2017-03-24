angular
    .module('modules.home', [])
    .config(config)
    .controller('homeCtrl', homeCtrl);
config.$inject = ['$stateProvider'];

function config($stateProvider) {
    $stateProvider
        .state('loggedIn.modules.home', {
            url: '/home',
            views: {
                'main-content': {
                    templateUrl: 'src/modules/home/home.tpl.html',
                    controller: 'homeCtrl'
                }
            },
            resolve: {}
        });
}
homeCtrl.$inject = ['$scope'];
function homeCtrl ($scope){
    
}