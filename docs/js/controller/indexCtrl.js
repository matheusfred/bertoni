/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('indexCtrl', function($state, $scope, cfpLoadingBar, scrapFactory){	
	cfpLoadingBar.start();
	$scope.storeID = '';
	$scope.$state = $state;
	$scope.isMobile = false;

	$scope.storeStatus = function(storeID){
		cfpLoadingBar.start();
		$scope.storeID =  storeID;
		cfpLoadingBar.complete(); 
		$state.go('home.store', {storeID: $scope.storeID});
	};

	$scope.detectMob = function() {	
		if (window.innerWidth <= 1024){
			$scope.isMobile = true;
		}
	}; $scope.detectMob();

	$scope.getCategory = function(){
		scrapFactory.getCategory(callData);

		function callData(data){
			$scope.contentsMenu = data;
		}
	}; 


	cfpLoadingBar.complete();
});  
