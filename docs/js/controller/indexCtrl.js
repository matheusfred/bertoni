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

	$scope.storeStatus = function(newValue){
		cfpLoadingBar.start();
		$scope.modelID =  newValue;
		cfpLoadingBar.complete(); 
	};

	cfpLoadingBar.complete();

	// $scope.loadItens = function(model){
    //     cfpLoadingBar.start();
	// 	scrapFactory.load(model,returnData);

	// 	function returnData(data){
	// 		$scope.contents = data;
	// 		cfpLoadingBar.complete();
	// 	};
	// };	

});  
