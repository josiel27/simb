var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "main.htm"
        })
        .when("/home", {
            templateUrl: "home.html"
        })
        .when("/usuarios", {
            templateUrl: "usuarios.html"
        });
});