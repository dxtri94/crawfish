angular
    .module('app.modules', [
        'modules.slide',
        'modules.home'
    ])
    .config(config);
function config($stateProvider) {
    $stateProvider
        .state('loggedIn.modules', {
            url: '',
            abstract: true,
            views: {
                'header': {
                    templateUrl: 'src/header/header.tpl.html',
                    controller: 'headerCtrl'
                },
                'middle-container': {
                    templateUrl: 'src/layouts/layout-middle-content.tpl.html'
                },
                'footer': {
                    templateUrl: 'src/footer/footer.tpl.html',
                    controller: 'FooterController'
                }
            },
            resolve: {}
        });
}
