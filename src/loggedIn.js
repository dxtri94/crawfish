angular
    .module('app.loggedIn', [])
    .config(config);
config.$inject = ['$stateProvider'];
function config ($stateProvider) {
        $stateProvider
            .state('loggedIn', {
                url: '',
                abstract: true,
                views: {
                    'root': {
                        templateUrl: 'src/layouts/structure.tpl.html'
                    }
                },
                resolve: {
                    //authenticatedUser: securityAuthorizationProvider.requireAuthenticatedUser
                }
            });
}
