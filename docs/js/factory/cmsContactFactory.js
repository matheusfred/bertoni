moduleApp.factory('scrapFactory', function() {
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

        loadByCategory: function(returnData, store){
            firestore.collection("itens").where("category", "==", store).get().then(function(querySnapshot) {
                var data = querySnapshot.docs.map(function (documentSnapshot) {
                return documentSnapshot.data();
            });

            return returnData(data);
            });     
        },

        loadSingleItem: function(callData, item){
            firestore.collection("itens").where("category", "==", item).get().then(function(querySnapshot) {
                var data = querySnapshot.docs.map(function (documentSnapshot) {
                return documentSnapshot.data();
            });

            return callData(data);
            });     
        }
    }; 
}); 