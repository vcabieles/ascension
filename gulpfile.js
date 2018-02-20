var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var sass = require("gulp-sass");

gulp.task('css', function() {
    return gulp.src('sass/*.scss')
        .pipe(sass()).on('error',sass.logError)
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('watch', function() {
    gulp.watch('sass/*.scss', ['css']);
});


gulp.task('start', function () {
    nodemon({
        script: 'bin/www',
        ext: 'html js ejs'
    })
    .on('restart', function () {
        console.log('restarted!')
    })
});

gulp.task('default', ['css','start','watch']);