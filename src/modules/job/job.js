angular
    .module('modules.job', [])
    .config(config)
    .controller('jobCtrl', jobCtrl);
config.$inject = ['$stateProvider'];

function config($stateProvider) {
    $stateProvider
        .state('loggedIn.modules.job', {
            url: '/job',
            views: {
                'main-content': {
                    templateUrl: 'src/modules/job/job.tpl.html',
                    controller: 'jobCtrl'
                }
            },
            resolve: {}
        });
}
jobCtrl.$inject = ['$scope'];
function jobCtrl($scope) {
    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };

    $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    // Disable weekend selection
    function disabled(data) {
        var date = data.date,
            mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.toggleMin = function () {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };
     $scope.open3 = function () {
        $scope.popup3.opened = true;
    };
     $scope.open4 = function () {
        $scope.popup4.opened = true;
    };

    $scope.setDate = function (year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };
    $scope.popup3 = {
        opened: false
    };
    $scope.popup4 = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [
        {
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
    ];

    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }
    $scope.locations = {
        selected: undefined,
        list: [
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
        ]
    };
    $scope.submitTape = 1;
    $scope.clearTape = 1;
}
