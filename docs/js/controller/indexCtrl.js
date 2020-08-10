/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('indexCtrl', function($state, $scope, cfpLoadingBar, $rootScope){	
	cfpLoadingBar.start();

	$rootScope.menus = [
		'10','19','17','23','14','1'
	];
	
	$scope.hasCategory = function(role){
		var indexOfRole = $rootScope.menus.indexOf(role);
		
		if (indexOfRole === -1)
			return false;
		else
			return true;
	};

	//MENU STATE
	$scope.$state = $state;
	$scope.isMobile = false;

	$scope.detectMob = function() {	
		if (window.innerWidth <= 1024){
			$scope.isMobile = true;
		}
	}; $scope.detectMob();
});  
