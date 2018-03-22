var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/!", {
            templateUrl: "home.html"
        })
        .when("/usuarios", {
            templateUrl: "usuarios.html",
            controller: 'ctrl_usuarios'
        })
        .when("/alunos", {
            templateUrl: "alunos.html",
            controller: 'ctrl_alunos'
        })
        .when("/calendario", {
            templateUrl: "calendario.html",
            controller: 'ctrl_calendario'
        })
        .when("/instrumentos", {
            templateUrl: "instrumentos.html",
            controller: 'ctrl_instrumentos'
        })
        .when("/professores", {
            templateUrl: "professores.html",
            controller: 'ctrl_professores'
        })
        .when("/planos", {
            templateUrl: "planos.html",
            controller: 'ctrl_planos'
        })
        .when("/consultarOrcamentos", {
            templateUrl: "consultarOrcamentos.html",
            controller: 'ctrl_orcamentos'
        })
        .when("/orcamentos", {
            templateUrl: "orcamentos.html",
        })
});

app.controller('ctrl_usuarios', function ($scope) {
    $scope.nameCtrl = "ctrl_usuarios";
    console.log($scope.nameCtrl)
});

app.controller('ctrl_alunos', function ($scope) {
    $scope.nameCtrl = "ctrl_alunos";
    console.log($scope.nameCtrl)
});
app.controller('ctrl_calendario', function ($scope) {
    $scope.nameCtrl = "ctrl_calendario";
   
    console.log($scope.nameCtrl)
});
app.controller('ctrl_instrumentos', function ($scope) {
    $scope.nameCtrl = "ctrl_instrumentos";
   
    console.log($scope.nameCtrl)
});
app.controller('ctrl_professores', function ($scope) {
    $scope.nameCtrl = "ctrl_professores";
   
    console.log($scope.nameCtrl)
});
app.controller('ctrl_planos', function ($scope) {
    $scope.nameCtrl = "ctrl_planos";
   
    console.log($scope.nameCtrl)
});
app.controller('ctrl_orcamentos', function ($scope) {
    $scope.nameCtrl = "ctrl_orcamentos";
   
    console.log($scope.nameCtrl)
});

