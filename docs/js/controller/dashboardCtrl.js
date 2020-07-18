/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('dashboardCtrl', function(scrapFactory, $scope, $state, $stateParams, cfpLoadingBar){	
	checkPath();

	function checkPath(){
		if($stateParams.obj != null){}			
		else $state.go('admin');	
	};
	
	$scope.loadItens = function(){
		cfpLoadingBar.start();
		scrapFactory.load(returnData);

		function returnData(data){
			$scope.contents = data;
			cfpLoadingBar.complete();
		};
	};	

	$scope.createItens = function(value){
		cfpLoadingBar.start();

		scrapFactory.create(value);

		cfpLoadingBar.complete();
	};

});
