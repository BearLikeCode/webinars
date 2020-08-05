'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    rigger = require('gulp-rigger'),
    cache = require('gulp-cache'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var path = {
    build: {
        html: 'build/',
        css: 'build/css/'
    },
    src: {
        html: 'src/**/index.html',
        css: 'src/css/style.scss'
    },
    watch: {
        html: 'src/index.html',
        css: 'src/css/*.scss'
    },
    clean: './build'
}

var config = {
    server: {
        baseDir: "./build"
    },
    notify: false,
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: 'BearCoder'
};

gulp.task('webserver', function() {
    browserSync(config);
});

gulp.task('clean', function(cb) {
    rimraf(path.clean, cb);
})

gulp.task('html:build', async function() {
    await gulp.src(path.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({stream:true}));
});

gulp.task('css:build', async function() {
	await gulp.src(path.src.css)
	.pipe(sourcemaps.init())
	.pipe(sass({
		sourceMap: true,
		errLogToConsole: true
	}))
	.pipe(prefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
	.pipe(cssmin())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(path.build.css))
	.pipe(reload({stream: true}));
});

gulp.task('clear', async function() {
	await cache.clearAll();
});

gulp.task('build', gulp.series(
    'html:build',
    'css:build',
));

gulp.task('watch', function() {
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.css], function(event, cb) {
        gulp.start('css:build');
    });
});

gulp.task('default', gulp.series('build', 'webserver', 'watch'));