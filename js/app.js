(function(){
    var app = angular.module('portfolio',[]);

    app.controller("portfolioCtrl",['$http',function($http) {
        this.projects = proj;
    }]);

    var proj =[
        {"title":"Project Hades", "image":"url", "description":"This is a hell of a project"},
        {"title":"Project Hermes", "image":"url", "description":"Delivery Fast and Efficiently"},
        {"title":"Project Zeus", "image":"url", "description":"Will fuck a duck just for fun"}
    ];

})();
