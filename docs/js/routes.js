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
    .state('home', {
      url: "",
      templateUrl: 'pags/aboutus.html'
    }) 
    .state('fruits', {
      url: "/fruits",
      templateUrl: 'pags/fruits.html'
    })  
    .state('tropicaloil', {
      url: "/tropicaloil",
      templateUrl: 'pags/tropicaloil.html'
    })       
    .state('blog', {
      url: "/blog",
      templateUrl: 'pags/blog.html'
    })     
    .state('services', {
      url: "/services",
      templateUrl: 'pags/services.html'
    }) 
    .state('sustainability', {
      url: "/sustainability",
      templateUrl: 'pags/sustainability.html'
    })     
    .state('news', {
      url: "/news",
      templateUrl: 'pags/news.html'
    })
    .state('gallery', {
      url: "/gallery",
      templateUrl: 'pags/gallery.html'
    })  
    .state('contact', {
      url: "/contact",
      templateUrl: 'pags/contact.html'
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