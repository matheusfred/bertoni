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

	$scope.loadItens();

	$scope.createItens = function(value){
		cfpLoadingBar.start();

		scrapFactory.create(value,onSucess);

		function onSucess(){
			var div = document.getElementById("sucess_msg");
			div.classList.add("sucess_msg");
			$state.go('dashboard.list');
			window.setTimeout(function() {div.classList.remove("sucess_msg");}, 3000);
		};
		cfpLoadingBar.complete();
	};

});
