(function(){
    var app = angular.module('portfolio',[]);

    app.controller("portfolioCtrl",['$http',function($http) {

        var portfolio = this;

        $http.get('http://maadlog.github.io/js/projects.json')
            .then(function success(response) {
                portfolio.projects = response.data.projects;

        });
    }]);
})();
