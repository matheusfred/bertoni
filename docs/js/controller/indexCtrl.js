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

	$scope.statusPointer = '';	
	$scope.changePointer = function(newValue){
        $scope.statusPointer =  newValue;
        if(newValue!= null & $scope.statusModelo != null){
            storeFactory.poitLoader(returnData, $stateParams.listID,$scope.statusModelo);
            $state.go('store.modelo.list({listID: $scope.statusPointer})');
		} else { 
			storeFactory.loadStoreList(returnData, newValue);
			$state.go('store.list({listID: newValue})');
		}

        function returnData(data){
            $scope.contents = data;
            if($scope.contents.length === 0){
                $state.go('contact');
            }
            cfpLoadingBar.complete();
        }; 
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
