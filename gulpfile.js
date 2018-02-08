"use strict";

var alphabetical    = require("css-declaration-sorter"),
    autoprefixer    = require("autoprefixer"),
    babel           = require("gulp-babel"),
    browsersync     = require("browser-sync"),
    cleancss        = require("gulp-clean-css"),
    concat          = require("gulp-concat"),
    gulp            = require("gulp"),
    postcss         = require("gulp-postcss"),
    sass            = require("gulp-sass"),
    uglify          = require("gulp-uglify");

/* --------------- */

var source = {
    sass: "public/scss/*.scss",
    js: "public/js/*.js"
}

var output = {
    css: "assets/css/",
    cssName: "boilerplate.min.css",
    js: "assets/js/",
    jsName: "boilerplate.min.js"
}

/* --------------- */

gulp.task("browsersync", function() {
    browsersync({
        server: {
            baseDir: './'
        },
        open: false,
        online: false,
        notify: false
    });
});

gulp.task("css", function() {
    return gulp.src(source.sass)
        .pipe(sass({outputStyle: "compressed"}))
        .pipe(postcss([autoprefixer()]))
        .pipe(concat(output.cssName))
        .pipe(postcss([alphabetical({order: "alphabetically"})]))
        .pipe(cleancss())
        .pipe(gulp.dest(output.css))
        .pipe(browsersync.reload({stream: true}))
});

gulp.task("javascript", function() {
    return gulp.src(source.js)
        .pipe(concat(output.jsName))
        .pipe(uglify())
        .pipe(gulp.dest(output.js))
        .pipe(browsersync.reload({stream: true}))
});

gulp.task("watch", function() {
    gulp.watch(source.sass, ["css"]);
    gulp.watch(source.js, ["javascript"]);
});

gulp.task("default", ["css", "javascript", "browsersync", "watch"]);
