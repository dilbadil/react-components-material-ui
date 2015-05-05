var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

// Less task
gulp.task('less', function() {
    return gulp.src('./less/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./css'))
});

// Watcher
gulp.task('watch', function(){
    gulp.watch('./less/**/*.less', ['less']);
});

// Default task
gulp.task("default", ['less', 'watch']);
