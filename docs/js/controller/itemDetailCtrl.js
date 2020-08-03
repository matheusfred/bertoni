/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('itemDetailCtrl', function(scrapFactory, $stateParams, $scope, cfpLoadingBar){  
    
    $scope.loadSingleItem = function(){
        cfpLoadingBar.start();
        scrapFactory.loadSingleItem(returnData, $stateParams.itemID);

        function returnData(data){
            $scope.contents = data;
            cfpLoadingBar.complete();
        };
    };  $scope.loadItens();

});  