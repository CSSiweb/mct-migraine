var gulp = require('gulp'),
    webpack = require('webpack');

gulp.task('script', function(callback){
    webpack(require('../../webpack.config.js'), function(){
        console.log("this is a test my friend.");
        callback();
    });
});