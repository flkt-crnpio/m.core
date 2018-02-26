var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cssnano = require('gulp-cssnano'),
    browserSync = require('browser-sync').create(),
    supportedbrowsers = [
        'last 2 versions',
        'safari >= 8',
        'ie >= 10',
        'ff >= 20',
        'ios 6',
        'android 4'
    ];

gulp.task('dist', ['sass-dist']);

gulp.task('dev', ['normalize', 'grid', 'sass-dev'], function() {
    browserSync.init({
        server: {
            baseDir: "./dev"
        }
    });
    gulp.watch("dev/index.html").on('change', browserSync.reload);
    gulp.watch("src/**/*.scss", ['sass-dev']);
});

gulp.task('sass-dist', function(){
    return gulp.src(['src/mandarina.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(cssnano({
            autoprefixer: {browsers: supportedbrowsers, add: true}
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
});

gulp.task('sass-dev', function(){
    return gulp.src(['src/mandarina.scss'])
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('dev/css'))
        .pipe(browserSync.stream());
});

gulp.task('normalize', function() {
    return gulp.src('node_modules/m.normalize/normalize.min.css')
        .pipe(gulp.dest('dev/css/'));
});
gulp.task('grid', function() {
    return gulp.src('node_modules/m.grid/dist/grid.min.css')
        .pipe(gulp.dest('dev/css/'));
});
