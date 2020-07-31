/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('storeCtrl', function(scrapFactory, $stateParams, $scope, cfpLoadingBar){  
    
    $scope.loadItens = function(){
        cfpLoadingBar.start();
        scrapFactory.loadByCategory(returnData,  $stateParams.modelID, $stateParams.storeID);
    
        function returnData(data){
            $scope.contents = data;
            cfpLoadingBar.complete();
        };
    };

    $scope.loadItens();
});  