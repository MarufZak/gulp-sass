const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const browserSync = require("browser-sync").create();

// compile scss into css

function style() {
    // 1. find my css file
    return gulp.src('./scss/**/*.scss')
    // 2. pass that file through sass compiler
        .pipe(sass().on('error',sass.logError))
    // 3. where do i save the compiled CSS?
        .pipe(gulp.dest('./css'))
    // 4. stream change to all browsers
        .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss',style);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change',browserSync.reload);
}
    
exports.style = style;
exports.watch = watch;