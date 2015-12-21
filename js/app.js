(function(){
    var app = angular.module('portfolio',[]);

    var projectGet = ['$http',function($http) {

        var portfolio = this;

        $http.get('./res/projects.json')
            .then(function success(response) {
                portfolio.projects = response.data.projects;

            });
    }];

    app.controller("portfolioCtrl",projectGet);

    app.directive("projects",function(){
        return{
            restrict:'E',
            templateUrl:'./html/project.html'
            };
    });


})();
