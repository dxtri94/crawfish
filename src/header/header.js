angular
    .module('app.header', [
    'ui.bootstrap.carousel',
        'ui.router'
])
    .controller('headerCtrl', headerCtrl);
headerCtrl.$inject = ['$scope', '$state','$filter'];
function headerCtrl($scope, $state,$filter) {
    $scope.locationLists = [
        {
            name: 'Oakland',
            tel : '(510) 251-1657',
            region : 'CA'
        },
        {
            name: 'Concord',
            tel : '(925) 822-3892',
            region : 'CA'
        },
        {
            name: 'San Pablo',
            tel : '(510) 230-4874',
            region : 'CA'
        },
        {
            name: 'Graden grove',
            tel : 0,
            region : 'CA'
        },
        {
            name: 'Bakersfield',
            tel : 0,
            region : 'CA'
        },
        {
            name: 'Las Vegas',
            tel : 0,
            region : 'NV'
        },
        {
            name: 'Duluth',
            tel : 0,
            region : 'GA'
        },
        {
            name: 'Orlando',
            tel : 0,
            region : 'FL'
        },
        {
            name: 'Nguyen Huu Cau',
            tel : 0,
            region : 'Viet Nam'
        },
        {
            name: 'Le Thi Rieng',
            tel : 0,
            region : 'Viet Nam'
        }
    ];
    $scope.myInterval = 10000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = [
        {
            id : 0,
            image : 'src/assets/images/slider/slider1.jpg',
            name : 'name1'
        },
        {
            id : 1,
            image : 'src/assets/images/slider/slider2.jpg',
            name : 'name2'
        },
        {
            id : 2,
            image : 'src/assets/images/slider/slider3.jpg',
            name : 'name3'
        },
        {
            id : 3,
            image : 'src/assets/images/slider/slider4.jpg',
            name : 'name4'
        },
        {
            id : 4,
            image : 'src/assets/images/slider/slider5.jpg',
            name : 'name5'
        },
        {
            id : 5,
            image : 'src/assets/images/slider/slider6.jpg',
            name : 'name6'
        },
        {
            id : 6,
            image : 'src/assets/images/slider/slider7.jpg',
            name : 'name7'
        },
        {
            id : 7,
            image : 'src/assets/images/slider/slider8.jpg',
            name : 'name7'
        },
        {
            id : 8,
            image : 'src/assets/images/slider/slider9.jpg',
            name : 'name9'
        },
        {
            id : 9,
            image : 'src/assets/images/slider/slider10.jpg',
            name : 'name10'
        }
    ];
    $scope.go = function (name) {
        var param = 'modules.location.' + $filter('lowercase')(name);
        $state.go('param');
    }
}
