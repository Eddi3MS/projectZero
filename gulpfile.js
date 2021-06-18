const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');  

// Funçao para compilar o SASS e adicionar os prefixos
function compilaSass() {
  return gulp
  .src('css/scss/*.scss')
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('css/'));
}

// Tarefa de gulp para a função de SASS
gulp.task('sass', compilaSass);

// Função para juntar o JS
function gulpJS() {
  return gulp
  .src('js/mainn/*.js')
  .pipe(concat('main.js'))
  .pipe(babel({
    comments: false,
    presets: ['env']
  }))
  .pipe(uglify())
  .pipe(gulp.dest('js/'));
}

// Tarefa de gulp para a função de JS
gulp.task('mainjs', gulpJS);

// Função de watch do Gulp
function watch() {
  gulp.watch('css/scss/*.scss', compilaSass);
  gulp.watch('js/mainn/*.js', gulpJS);
}

// Inicia a tarefa de watch
gulp.task('watch', watch);

// Tarefa padrão do Gulp, que inicia e o watch
gulp.task('default', gulp.parallel('watch', 'sass', 'mainjs'));