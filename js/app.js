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

    app.controller("toolsCtrl",['$http',function($http) {

        var myself = this;

        $http.get('./res/tools.json')
            .then(function success(response) {
                myself.tools = response.data.tools;
            });
    }]);

    app.controller("experienceCtrl",['$http',function($http) {

        var myself = this;

        $http.get('./res/experience.json')
            .then(function success(response) {
                myself.jobs = response.data.jobs;
            });
    }]);

    app.directive("projects",function(){
        return{
            restrict:'E',
            templateUrl:'./html/project.html'
            };
    });

    app.directive("curriculumVitae",function(){
        return{
            restrict:'E',
            templateUrl:'./html/curriculum.html'};
    });

    app.directive("tools",function(){
        return{
            restrict:'E',
            templateUrl:'./html/tools.html'};
        });

    app.directive("experience",function(){
        return{
            restrict:'E',
            templateUrl:'./html/experience.html'};
    });

})();
