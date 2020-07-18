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
    'cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.latencyThreshold = 500;
        cfpLoadingBarProvider.includeSpinner  = false;
    }
]);

moduleApp.run(["$state",function($state){$state.go('home');}]);

const config = {
    apiKey: "AIzaSyBYNZAvraRLJuVcG1jOiX0JHOACfkaq_24",
    authDomain: "bertoni-218f8.firebaseapp.com",
    projectId: "bertoni-218f8"
};
