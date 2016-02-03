// var gulp = require('gulp'),
//     sass = require('gulp-ruby-sass'),
//     autoprefixer = require('gulp-autoprefixer'),
//     uglify = require('gulp-uglify'),
//     rename = require('gulp-rename'),
//     concat = require('gulp-concat'),
//     del = require('del');

// var FlexiCss = 'www/assets/uncompiled/main.scss';
// var FlexiCSSFiles = [FlexiCss,'www/assets/uncompiled/**/*.scss'];

// gulp.task('flexi', function(){
//     return sass(FlexiCss,{ style: 'compressed', noCache:true, 'sourcemap=none': true})
//     .pipe(rename('flexi-1.0.0.css'))
//     .pipe(gulp.dest('www/assets/css/'));
// });

// gulp.task('watch', function(){
//     gulp.watch(FlexiCSSFiles,['flexi']);
// });

// gulp.task('default',['flexi']);