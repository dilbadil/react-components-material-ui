var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var path = require('path');

// Less task
gulp.task('less', function() {
    return gulp.src('./less/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./css'))
});

// Components task
gulp.task('components', function() {
    return gulp.src('./jsx/components/**/*.jsx')
        .pipe(concat('components.jsx'))
        .pipe(gulp.dest('./jsx/'))
});

// Watcher
gulp.task('watch', function(){
    gulp.watch('./less/**/*.less', ['less']);
    gulp.watch('./jsx/components/**/*.jsx', ['components']);
});

// Default task
gulp.task("default", ['less', 'components', 'watch']);
