/* ****************************************************** */
/*
/* Angular app comunication aplication.
/* 
/* Var @var myVariableApp "Recebe angularModule"	
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
var moduleApp = angular.module('moduleApp', ['ngAnimate', 'ui.router', 'angular-loading-bar'])
.config([
    'cfpLoadingBarProvider', function(cfpLoadingBarProvider) {cfpLoadingBarProvider.includeSpinner  = false;}
]);

moduleApp.run(["$state",function($state){$state.go('home');}]);
