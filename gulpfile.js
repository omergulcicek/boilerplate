"use strict";

var alphabetical = require("css-declaration-sorter");
var autoprefixer = require("autoprefixer");
var cleancss = require("gulp-clean-css");
var concat = require("gulp-concat");
var gulp = require("gulp");
var postcss = require("gulp-postcss");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");

/* --------------- */

var cssFile = "assets/css/";
var jsFile = "assets/js/";

var cssSourceFiles = "public/scss/*.scss";
var jsSourceFiles = "public/js/*.js";

var cssFileName = "";
var jsFileName = "";

/* --------------- */

gulp.task("css", function() {
    return gulp.src(cssSourceFiles)
        .pipe(sass({outputStyle: "compressed"}))
        .pipe(postcss([autoprefixer()]))
        .pipe(concat(cssFileName))
        .pipe(postcss([alphabetical({order: "alphabetically"})]))
        .pipe(cleancss())
        .pipe(gulp.dest(cssFile))
});

gulp.task("javascript", function() {
    return gulp.src(jsSourceFiles)
        .pipe(concat(jsFileName))
        .pipe(uglify())
        .pipe(gulp.dest(jsFile))
});

gulp.task("watch", function() {
    gulp.watch(cssSourceFiles, ["css"]);
    gulp.watch(jsSourceFiles, ["javascript"]);
});

gulp.task("default", ["css", "javascript", "watch"]);
