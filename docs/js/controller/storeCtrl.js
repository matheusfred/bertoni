/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('storeCtrl', function(storeFactory, $stateParams, $scope, cfpLoadingBar,  $state){  
    
    $scope.loadItens = function(){
        cfpLoadingBar.start();
        storeFactory.loadStoreList(returnData, $stateParams.listID);
    
        function returnData(data){
            $scope.contents = data;
            cfpLoadingBar.complete();
        };
    };
    $scope.loadItens();
});  