const gulp = require("gulp");

const serve = require("./gulp/tasks/serve");
const html = require("./gulp/tasks/html");
const styles = require("./gulp/tasks/styles");
const script = require("./gulp/tasks/script");
const fonts = require("./gulp/tasks/fonts");
const imageMinify = require("./gulp/tasks/imageMinify");
const clean = require("./gulp/tasks/clean");

function setProductionMode(isProduction = false) {
  return (cb) => {
    process.env.NODE_ENV = isProduction ? "production" : "development";
    cb();
  };
}

const dev = gulp.parallel(html, styles, script, fonts, imageMinify);

const build = gulp.series(clean, dev);

module.exports.start = gulp.series(setProductionMode(false), build, serve);
module.exports.build = gulp.series(setProductionMode(true), build);
