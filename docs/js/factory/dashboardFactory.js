moduleApp.factory('dashboardFactory', function() {
	const firestore = firebase.firestore();
    const settings = {timestampsInSnapshots: true};

    firestore.settings(settings);    
  
    return {
        create: function(value,onSucess){
            firestore.collection('itens').add({
                name: value.name,
                desc: value.desc,
                nameen: value.nameen,
                descen: value.descen,
                valor: value.valor,
                value: value.value,
                modelo: value.model,
                category: value.category,
                image: value.image
            })
            return onSucess();
        },  

        load: function(returnData){
            firestore.collection("itens").get().then(function(querySnapshot) {
                var data = querySnapshot.docs.map(function (documentSnapshot) {
                return documentSnapshot.data();
            });

            return returnData(data);
            });     
        }, 

        loadScrap: function(callData){
            firestore.collection("scraptmsg").get().then(function(querySnapshot) {
                var data = querySnapshot.docs.map(function (documentSnapshot) {
                return documentSnapshot.data();
            });

            return callData(data);
            });     
        },
        
        addMenu: function () {
            $rootScope.menus.push(angular.copy($scope.contentsMenu));

            return true;
        }
    }
});    