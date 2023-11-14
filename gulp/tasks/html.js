const gulp = require("gulp");
//const htmlValidator = require('gulp-w3c-html-validator')
const bemValidator = require('gulp-html-bem-validator')

module.exports = function html() {
  return gulp
    .src(["src/*.html"], {
      base: "src",
    })
    // .pipe(htmlValidator().analyzer())
    // .pipe(htmlValidator().reporter())
    .pipe(bemValidator())
    .pipe(gulp.dest("build"));
};
