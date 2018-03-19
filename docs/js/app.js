var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/!", {
            templateUrl: "home.html"
        })
        .when("/usuarios", {
            templateUrl: "usuarios.html",
            function: consultarUsuarios
        })
        .when("/alunos", {
            templateUrl: "alunos.html",
            function: consultarAlunos()
        })
        .when("/calendario", {
            templateUrl: "calendario.html"
        })
        .when("/instrumentos", {
            templateUrl: "instrumentos.html"
        })
        .when("/professores", {
            templateUrl: "professores.html"
        })
        .when("/planos", {
            templateUrl: "planos.html"
        })
        .when("/consultarOrcamentos", {
            templateUrl: "consultarOrcamentos.html"
        })
        .when("/orcamentos", {
            templateUrl: "orcamentos.html"
        })
});

function consultarUsuarios(){
    console.log('Consultar Usuarios')
}


function consultarAlunos(){
    console.log('Consultar Alunos')
}