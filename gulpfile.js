const { src, dest, series, watch } = require('gulp')
const concat = require('gulp-concat')
const fontmin = require('gulp-fontmin');
const htmlMin = require('gulp-htmlmin')
const autoprefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')
const image = require('gulp-image')
const uglify = require('gulp-uglify-es').default
const babel = require('gulp-babel')
const notify = require('gulp-notify')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const browserSync = require('browser-sync').create()

const clean = () => {
  return del(['dist'])
}

const fonts = () => {
  return src(['src/fonts/**/*.woff', 'src/fonts/**/*.woff2'])
    .pipe(fontmin())
    .pipe(dest('dist/fonts'));
}

const stylesDev = () => {
  return src('src/styles/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const stylesProd = () => {
  return src('src/styles/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCss({
      level: 2
    }))
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const htmlDev = () => {
  return src('src/**/*.html')
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const htmlProd = () => {
  return src('src/**/*.html')
    .pipe(htmlMin({
      collapseWhitespace: true,
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const images = () => {
  return src('src/img/**/*', { encoding: false },
    [
      'src/img/**/*.jpg',
      'src/img/**/*.png',
      'src/img/*.svg',
      'src/img/**/*.jpeg',
    ])
    .pipe(image())
    .pipe(dest('dist/img'))
}

const scriptsDev = () => {
  return src([
    'src/js/main.js'
  ])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const scriptsProd = () => {
  return src([
    'src/js/main.js'
  ])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(concat('app.js'))
    .pipe(uglify({
      toplevel: true
    }).on('error', notify.onError()))
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
}

watch('src/**/*.html', htmlDev, htmlProd)
watch(['src/fonts/**/*.woff', 'src/fonts/**/*.woff2'], fonts)
watch('src/**/*.css', stylesDev, stylesProd)
watch('src/js/**/*.js', scriptsDev, scriptsProd)

exports.stylesDev = stylesDev
exports.stylesProd = stylesProd
exports.htmlDev = htmlDev
exports.htmlProd = htmlProd
exports.scriptsDev = scriptsDev
exports.scriptsProd = scriptsProd

exports.dev = series(clean, htmlDev, scriptsDev, stylesDev, images, fonts, watchFiles)
exports.prod = series(clean, htmlProd, scriptsProd, stylesProd, images, fonts, watchFiles)

exports.default = exports.prod
