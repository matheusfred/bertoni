/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('indexCtrl', function($state, $scope, cfpLoadingBar, storeFactory, $stateParams){	
	cfpLoadingBar.start();

	$scope.statusModelo = null;	
	$scope.changeStatus = function(newValue){
		$scope.statusModelo =  newValue;
	};

	//MENU STATE
	$scope.$state = $state;
	$scope.isMobile = false;

	$scope.detectMob = function() {	
		if (window.innerWidth <= 1024){
			$scope.isMobile = true;
		}
	}; $scope.detectMob();

	$scope.getCategory = function(){
		storeFactory.getCategory(callData);

		function callData(data){
			$scope.contentsMenu = data;
			cfpLoadingBar.complete();
		}
	};  	
});  
