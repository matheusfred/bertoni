/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('storeCtrl', function(scrapFactory,  $scope, cfpLoadingBar){
    $scope.loadItens = function(){
        cfpLoadingBar.start();
        scrapFactory.loadByCategory(returnData, $scope.modelID);
    
        function returnData(data){
            $scope.contents = data;
            cfpLoadingBar.complete();
        };
    };

    $scope.loadItens();
});  