const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css() {
  return gulp
    .src('scss/app.scss')
    .pipe(
      sass({
        outputStyle: 'expanded',
      })
    )
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false,
      })
    )
    .pipe(gulp.dest('css'));
}

function watchFiles() {
  gulp.watch('scss/*.scss', css);
  gulp.watch('index.html');
}

// Registrar funciones como tareas
// In terminal: gulp css
gulp.task('css', css);

// In terminal: gulp watch
gulp.task('watch', gulp.parallel(watchFiles));
