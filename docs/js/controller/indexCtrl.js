/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('indexCtrl', function($state, $scope, cfpLoadingBar){
	firebase.initializeApp(config);
	
	cfpLoadingBar.start();
	$scope.$state = $state;
	$scope.isMobile = false;

	$scope.storeStatus = function(newValue){
		cfpLoadingBar.start();
		$scope.modelID =  newValue;
		cfpLoadingBar.complete(); 
	};

	$scope.detectMob = function() {	
		if (window.innerWidth <= 1024){
			$scope.isMobile = true;
		}
	}; $scope.detectMob();

	cfpLoadingBar.complete();
});  
