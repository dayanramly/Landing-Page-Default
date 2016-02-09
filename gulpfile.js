var gulp = require('gulp'),
sass = require('gulp-ruby-sass'),
autoprefixer = require('gulp-autoprefixer'),
uglify = require('gulp-uglify'),
rename = require('gulp-rename'),
concat = require('gulp-concat'),
imagemin = require('gulp-imagemin'),
include = require('gulp-include'),
jshint = require('gulp-jshint'),
cssnano = require('gulp-cssnano'),
cache = require('gulp-cache'),
livereload = require('gulp-livereload'),
notify = require('gulp-notify'),
del = require('del');

var StylesCss = 'src/scss/style.scss',
StylesCssFiles = [StylesCss, 'src/scss/**/*.scss'],
ImageFiles = 'src/img/*',
CssFiles = 'src/scss/**/*.scss',
JsFiles = 'src/scripts/scripts.js',
AllJsFiles = 'src/scripts/**/*.js',
FontFiles = 'src/fonts/**/*',
OutputCss = 'dist/css',
OutputJs = 'dist/scripts',
OutputImg = 'dist/img',
OutputFont = 'dist/fonts';

// styles
gulp.task('styles', function(){
    return sass(StylesCss, {style:'expanded', noCache:true})
    .pipe(autoprefixer('last 2 version'))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(OutputCss));
    // .pipe(notify({ message: 'Styles task complete' }));
});
// scripts
gulp.task('scripts', function(){
    return gulp.src(JsFiles)
    .pipe(rename({ suffix: '.min' }))
    .pipe(include())
    .on('error', console.log)
    .pipe(uglify())
    .pipe(gulp.dest(OutputJs));
    // .pipe(notify({ message: 'Scripts task complete' }));
});
// fonts
gulp.task('fonts', function(){
    return gulp.src(FontFiles)
    .pipe(gulp.dest(OutputFont));
    // .pipe(notify({ message: 'Fonts task complete' }));
})
// image
gulp.task('images', function(){
    return gulp.src(ImageFiles)
    .pipe(gulp.dest(OutputImg));
})

gulp.task('clean', function(){
    return del([OutputCss,OutputJs,OutputFont]);
});

gulp.task('default', ['clean'], function(){
    gulp.start('styles', 'scripts', 'fonts', 'images');
});

gulp.task('watch', function(){
    gulp.watch(CssFiles,['styles']);
    gulp.watch(AllJsFiles,['scripts']);
})
