var gulp = require('gulp'),
    watch = require('gulp-watch'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify');

var dgBarcodeModuleSrc = [
  './src/_dg_barcode.js',
  //'./src/forms/elements/element.*.js',
  './src/includes/include.*.js',
  //'./src/widgets/widget.*.js'
];

// Task to build the dg_barcode.min.js file.
gulp.task('minifyJS', function(){
  return gulp.src(dgBarcodeModuleSrc)
      .pipe(gp_concat('dg_barcode.js'))
      .pipe(gulp.dest(''))
      .pipe(gp_rename('dg_barcode.min.js'))
      .pipe(gp_uglify())
      .pipe(gulp.dest(''));
});

gulp.task('default', function () {
  watch(dgBarcodeModuleSrc, function(event) { gulp.start('minifyJS') });
  gulp.start('minifyJS');
});