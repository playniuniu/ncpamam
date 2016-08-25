var gulp = require('gulp');
var useref = require('gulp-useref')
var gulpIf = require('gulp-if')
var cleancss = require('gulp-clean-css')
var uglify = require('gulp-uglify')

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

gulp.task('images', function() {
  return gulp.src('app/images/**/*')
  .pipe(gulp.dest('dist/images'))
})

gulp.task('default', ['fonts', 'images'], function() {
    return gulp.src('app/**/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.css', cleancss()))
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('dist'))
})

gulp.task('build', function() {
    return gulp.src('app/**/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.css', cleancss()))
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('dist'))
})

gulp.task('watch', function() {
    gulp.watch('app/css/**/*.css', ['build']);
    gulp.watch('app/js/**/*.js', ['build']);
    gulp.watch('app/**/*.html', ['build']);
})
