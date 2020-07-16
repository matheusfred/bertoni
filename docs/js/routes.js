/* ****************************************************** */
/*
/* Routes aplication config.
/* 
/* Utilizado diretiva uiRouter do AngularJs.     
/*   
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.config(function($stateProvider) {
  $stateProvider
    // HUB PAGE ROUTE
    .state('home', {
      url: '/home',
      templateUrl: 'pags/home.html'
    }) 

    // STORE PAGE ROUTE
    .state('store', {
      url: '/store',
      templateUrl: 'pags/store.html'
    })
    .state('store.contact', {
      url: '/contact',
      templateUrl: 'pags/subpage/contact.html'
    })
    // .state('store.item.detail', {
    //   url: '/detail/:id',
    //   templateUrl: item-detail.html'
    // });     

    // CUSTOM PROJECTS ROUTE
    .state('custom', {
      url: '/custom',
      templateUrl: 'pags/custom.html'
    })
    .state('custom.contact', {
      url: '/contact',
      templateUrl: 'pags/subpage/contact.html'
    })    
        
    // .state('sucess', {
    //   url: "/sucess",
    //   templateUrl: 'pags/sucess.html'
    // })  

    // .state('admin', {
    //   url: "/admin",
    //   templateUrl: 'pags/admin.html',
    //   controller: 'adminCtrl'
    // })  
    // .state('dashboard', {
    //   url: "admin/cms",
    //   templateUrl: 'pags/dashboard.html',
    //   controller: 'dashboardCtrl',
    //   params: {
    //     obj: null
    //   }
    // })    

});