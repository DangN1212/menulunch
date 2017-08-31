var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "yourlocal.dev"
    });
});
//style paths
var sassFiles = '*.scss',
    cssDest = 'css/';

gulp.task('styles', function() {
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest)).pipe(browserSync.stream());
});
gulp.task('watch', function() {
    gulp.watch(sassFiles, ['styles']);
});