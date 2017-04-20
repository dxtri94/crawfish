/**
 * Created by Administrator on 04/04/17.
 */
angular
    .module('modules.location.oakland', ['ngMap'])
    .config(config)
    .controller('oaklandCtrl', oaklandCtrl);
config.$inject = ['$stateProvider'];

function config($stateProvider) {
    $stateProvider
        .state('loggedIn.modules.location.oakland', {
            url: '/oakland',
            views: {
                'location-content': {
                    templateUrl: 'src/modules/location/Oakland/Oakland.tpl.html',
                    controller: 'oaklandCtrl'
                }
            },
            resolve: {}
        });
}
oaklandCtrl.$inject = ['$scope'];
function oaklandCtrl ($scope){
}