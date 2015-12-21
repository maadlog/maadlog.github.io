(function(){
    var app = angular.module('portfolio',[]);

    app.controller("portfolioCtrl",['$http',function($http) {

        var portfolio = this;

        $http.get('./res/projects.json')
            .then(function success(response) {
                portfolio.projects = response.data.projects;

            });
    }]);

    app.controller("educationCtrl",['$http',function($http) {

        var portfolio = this;

        $http.get('./res/education.json')
            .then(function success(response) {
                portfolio.places = response.data.places;

            });
    }]);

    app.directive("projects",function(){
        return{
            restrict:'E',
            templateUrl:'./html/project.html'
            };
    });

    app.directive("curriculum",function(){
        return{
            restrict:'E',
            templateUrl:'./html/curriculum.html'
        };
    });

})();
