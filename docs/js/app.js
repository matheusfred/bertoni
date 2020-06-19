/* ****************************************************** */
/*
/* Angular app comunication aplication.
/* 
/* Var @var myVariableApp "Recebe angularModule"	
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
var moduleApp = angular.module('moduleApp', ['ngAnimate', 'ui.router']);

moduleApp.run(["$state",function($state){$state.go('home');}]);
