const gulp = require("gulp");
const { parallel } = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const del = require("del");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("styles.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

// Sprite

const sprite = () => {
  return gulp.src("source/img/**/icon-*.svg")
    .pipe(svgstore())
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("source/img"))
}

exports.sprite = sprite;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Clean

const clean = () => {
  return del("build");
}

// Images

const images = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg,webp}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.mozjpeg({ quality: 70, progressive: true }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"))
}

const makeWebp = () => {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img"))
}

exports.webp = makeWebp;

// Html

const html = () => {
  return gulp.src([
    "source/*.html"
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"))
}

// Copy

const copy = () => {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/js/*.js",
    "source/*.ico"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"))
}

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series(styles));
  gulp.watch("source/*.html", gulp.series(html)).on("change", sync.reload);
}

exports.build = gulp.series(
  clean,
  sprite,
  makeWebp,
  parallel(html, images, styles),
  copy
);

exports.default = gulp.series(
  parallel(html, styles),
  server,
  watcher
);
