/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('indexCtrl', function($scope, cfpLoadingBar){
	firebase.initializeApp(config);
	
	cfpLoadingBar.start();
	$scope.statusmenu = 'home';	
	$scope.isMobile = false;

	$scope.changeStatus = function(newValue){
		cfpLoadingBar.start();
		$scope.statusmenu =  newValue;
		cfpLoadingBar.complete(); 
	};

	$scope.detectMob = function() {	
		if (window.innerWidth <= 1024){
			$scope.isMobile = true;
		}
	}; $scope.detectMob();

	cfpLoadingBar.complete();
});  
