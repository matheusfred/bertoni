moduleApp.factory('scrapFactory', function() {
	const firestore = firebase.firestore();
    const settings = {timestampsInSnapshots: true};

	firestore.settings(settings);
  
    return {
        create: function(value){
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
        },  

        load: function(returnData){
            firestore.collection("itens").get().then(function(querySnapshot) {
                var data = querySnapshot.docs.map(function (documentSnapshot) {
                return documentSnapshot.data();
            });

            return returnData(data);
            });     
        },

        loadByCategory: function(model, returnData){
            firestore.collection("itens").where("modelo", "==", model).get().then(function(querySnapshot) {
                var data = querySnapshot.docs.map(function (documentSnapshot) {
                return documentSnapshot.data();
            });

            return returnData(data);
            });     
        }        
    };
  
    
}); 