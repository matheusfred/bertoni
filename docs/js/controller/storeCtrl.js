/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('storeCtrl', function(scrapFactory, $stateParams, $state, $scope, cfpLoadingBar){  
    
    $scope.loadItens = function(){
        cfpLoadingBar.start();
        scrapFactory.loadByCategory(returnData, $stateParams.storeID);
    
        function returnData(data){
            $scope.contents = data;
            console.log(data);
            cfpLoadingBar.complete();
        };
    };

    $scope.loadItens();


    $scope.itemStatus = function(itemID){
		cfpLoadingBar.start();
		$scope.itemID = itemID;
		cfpLoadingBar.complete(); 
		$state.go('home.store.item', {itemID: $scope.itemID});
	};
});  