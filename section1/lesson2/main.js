var app = angular.module("minMax", [
    'jcs-autoValidate',
    'angular-ladda']);
app.run(function (defaultErrorMessageResolver) {
    defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
        errorMessages['tooYoung'] = 'too young',
            errorMessages['tooOld'] = 'too old',
            errorMessages['badUserName'] = 'bad user name'
    });

});
app.controller("MinMaxCtrl", function ($scope, $http) {
    $scope.formData = {};
    $scope.submitting = false;

    $scope.onSubmit = function () {
        $scope.submitting = true;
        console.log("teste");
        console.log($scope.formData);
        $http.post('https://minmax-server.herokuapp.com/register/', $scope.formData).
            success(function (data) {
                console.log('aeeeee');
                $scope.submitting = false;
            }).
            error(function (data) {
                console.log('snif...');

            });

    };



});