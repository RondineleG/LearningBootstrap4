var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

// compile sass into css and auto-inject into browsers

gulp.task('sass', function()
{
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());

});