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
    // PRINCIPAL MENU 
    .state('home', {
      url: '/home',
      templateUrl: 'pags/subpage/home.html'
    })  
    .state('contact', {
      url: '/contact',
      templateUrl: 'pags/subpage/contact.html'
    })
    .state('custom', {
      url: '/custom',
      templateUrl: 'pags/subpage/custom.html'
    })    

    // ADMINISTRATION AREA
    .state('admin', {
      url: "/admin",
      templateUrl: 'pags/admin.html',
      controller: 'adminCtrl'
    })  
    .state('dashboard', {
      url: "admin/cms",
      templateUrl: 'pags/subpage/dashboard.html',
      controller: 'dashboardCtrl',
      params: {
        obj: null
      }
    })
    .state('dashboard.new', {
      url: '/new',
      templateUrl: 'pags/subpage/dashboard/addform.html',
      controller: 'dashboardCtrl'
    })
    .state('dashboard.list', {
      url: '/list',
      templateUrl: 'pags/subpage/dashboard/list.html',
      controller: 'dashboardCtrl'
    })                  


    // .state('store.item.detail', {
    //   url: '/detail/:id',
    //   templateUrl: item-detail.html'
    // });     

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