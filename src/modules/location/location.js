/**
 * Created by Administrator on 04/04/17.
 */
angular
    .module('modules.location', [
        'modules.location.oakland'
    ])
    .config(config)
    .controller('locationCtrl', locationCtrl);
config.$inject = ['$stateProvider'];

function config($stateProvider) {
    $stateProvider
        .state('loggedIn.modules.location', {
            abstract: true,
            url: '',
            views: {
                'main-content': {
                    templateUrl: 'src/modules/location/location.tpl.html',
                    controller: 'locationCtrl'
                }
            },
            resolve: {}
        });
}
locationCtrl.$inject = ['$scope'];
function locationCtrl ($scope){

}