var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var server = require( 'gulp-develop-server');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var del = require('del');
var bs = require('browser-sync');
var webpack = require('webpack');
var gutil = require('gulp-util');
var webpackConfig = require('./webpack.config.js');

gulp.task('webpack',function(callback){
// modify some webpack config options
	var myConfig = Object.create(webpackConfig);

	//run webpack
	webpack(myConfig, function(err, stats) {
		if(err) {
			throw new gutil.PluginError("webpack:build", err);
		}


		/*
		 gutil.log("[webpack:build]", stats.toString({
		 colors: true
		 }));*/
		bs.reload();
		callback();
	});
});


gulp.task('sass', function () {
	return gulp.src('./scss/main.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./app/css'))
	.pipe(bs.stream());
})

//compile app for node
gulp.task('app',  function () {
	return gulp.src(['./server.jsx'])
	.pipe(sourcemaps.init())
	.pipe(babel())
	.pipe(sourcemaps.write('.', {
		includeContent: false,
		sourceRoot: '.'
	}))
	.pipe(rename('server.js'))
	.pipe(gulp.dest('.'));
});


gulp.task('components', function () {
	return gulp.src(['component_src/*'])
	.pipe(sourcemaps.init())
	.pipe(babel())
	.pipe(sourcemaps.write('.', {
		includeContent: false,
		sourceRoot: '../component_src'
	}))
	.pipe(gulp.dest('components'));

});


gulp.task('build', ['components','app'], function(){
	gulp.start('webpack');

	 server.restart(function(err){
		 if(!err){
		    bs.reload();
		 }
	 });

});

gulp.task('views', function () {
	server.restart(function(err){
		if(!err){
			bs.reload();
		}
	});
})


gulp.task('dev', function(){
	server.listen( { path: './server.js' } ,function(err){
		if(!err){
			bs({proxy: 'http://localhost:3000'}); //start browser sync
		}
	});
	gulp.watch(['component_src/**','./server.jsx'], ['build'])
	gulp.watch('views/*.hbs', ['views']);
	gulp.watch('scss/**/*.scss', ['sass']);
	gulp.watch('./browser.jsx',['webpack']);
});