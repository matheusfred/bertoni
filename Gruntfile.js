module.exports = function(grunt){
  grunt.initConfig({

	//WEB SERVICE'S CONFIG
    browserSync: {
      dev: {
          bsFiles: {
              src : ['docs/css/script.css','docs/index.html']
          },
          options: {
            server: './docs'
          }
      }
    }
  });

  //LOAD PLUGINS GRUNT
  grunt.loadNpmTasks('grunt-browser-sync');

  //TASK FOR DEV AND TESTE
  grunt.registerTask('dev', [ 'browserSync']);
};
