var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var path = require('path');

// Less task
gulp.task('less', function() {
    return gulp.src('./resources/less/**/*.less')
        // .pipe(less({
        //     paths: [path.join(__dirname, 'resources/less', 'includes')]
        // }))
        .pipe(less())
        .pipe(gulp.dest('./public/css'))
});

// Components task
gulp.task('components', function() {
    return gulp.src('./resources/js/components/**/*.js')
        .pipe(concat('components.js'))
        .pipe(gulp.dest('./resources/js/'))
});

// Watcher
gulp.task('watch', function(){
    gulp.watch('.resources/less/**/*.less', ['less']);
    gulp.watch('.resources/js/components/**/*.js', ['components']);
});

// Default task
gulp.task("default", ['less', 'components', 'watch']);
