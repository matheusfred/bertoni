/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('indexCtrl', function($scope, cfpLoadingBar){
	cfpLoadingBar.start();

	$scope.statusmenu = 'home';	

	$scope.changeStatus = function(newValue){
		cfpLoadingBar.start();

		$scope.statusmenu =  newValue;
		
		cfpLoadingBar.complete(); 
	};
});  
