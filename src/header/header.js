angular
    .module('app.header', [
    'ui.bootstrap.carousel'
])
    .controller('headerCtrl', headerCtrl)
headerCtrl.$inject = ['$scope'];
function headerCtrl($scope) {
    $scope.locationLists = [
        {
            name: 'Oakland',
            tel : '(510) 251-1657'
        },
        {
            name: 'Concord',
            tel : '(925) 822-3892'
        },
        {
            name: 'San Pablo',
            tel : '(510) 230-4874'
        },
        {
            name: 'Graden grove',
            tel : 0
        },
        {
            name: 'Bakersfield',
            tel : 0
        },
        {
            name: 'Las Vegas',
            tel : 0
        },
        {
            name: 'Duluth',
            tel : 0
        },
        {
            name: 'Orlando',
            tel : 0
        },
        {
            name: 'Nguyen Huu Cau',
            tel : 0
        },
        {
            name: 'Le Thi Rieng',
            tel : 0
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
        }
    ];
}
