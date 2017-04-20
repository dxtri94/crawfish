/**
 * Created by Administrator on 04/04/17.
 */
angular
    .module('modules.contact', ['reCAPTCHA'])
    .config(config)
    .controller('contactCtrl', contactCtrl);
config.$inject = ['$stateProvider','reCAPTCHAProvider'];

function config($stateProvider, reCAPTCHAProvider) {
    $stateProvider
        .state('loggedIn.modules.contact', {
            url: '/contact',
            views: {
                'main-content': {
                    templateUrl: 'src/modules/contact/contact.tpl.html',
                    controller: 'contactCtrl'
                }
            },
            resolve: {}
        });
    reCAPTCHAProvider.setPublicKey('6LeIfBsUAAAAAMKDh2kvzJLiqVYIK4pdLKpf3RS6');

    // optional: gets passed into the Recaptcha.create call
    reCAPTCHAProvider.setOptions({
        theme: 'clean'
    });
}
contactCtrl.$inject = ['$scope','reCAPTCHA'];
function contactCtrl ($scope, reCAPTCHA){
    reCAPTCHA.setPublicKey('6LeIfBsUAAAAAMKDh2kvzJLiqVYIK4pdLKpf3RS6');
    $scope.submit = function(form) {
        // Trigger validation flag.
        $scope.submitted = true;

        // If form is invalid, return and let AngularJS show validation errors.
        if (form.$invalid) {
            return;
        }

        // Default values for the request.
        var config = {
            params : {
                'callback' : 'JSON_CALLBACK',
                'name' : $scope.name,
                'email' : $scope.email,
                'subject' : $scope.subjectList,
                'url' : $scope.url,
                'comments' : $scope.comments
            },
        };

        // Perform JSONP request.
        var $promise = $http.jsonp('response.json', config)
            .success(function(data, status, headers, config) {
                if (data.status == 'OK') {
                    $scope.name = null;
                    $scope.email = null;
                    $scope.subjectList = null;
                    $scope.url = null;
                    $scope.comments = null;
                    $scope.messages = 'Your form has been sent!';
                    $scope.submitted = false;
                } else {
                    $scope.messages = 'Oops, we received your request, but there was an error processing it.';
                    $log.error(data);
                }
            })
            .error(function(data, status, headers, config) {
                $scope.progress = data;
                $scope.messages = 'There was a network error. Try again later.';
                $log.error(data);
            })
            .finally(function() {
                // Hide status messages after three seconds.
                $timeout(function() {
                    $scope.messages = null;
                }, 3000);
            });

        // Track the request and show its progress to the user.
        $scope.progress.addPromise($promise);
    };
}