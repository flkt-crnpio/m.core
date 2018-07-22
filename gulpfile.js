var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create(),
    supportedbrowsers = [
        'last 2 versions',
        'safari >= 8',
        'ie >= 10',
        'ff >= 20',
        'ios 6',
        'android 4'
    ];

gulp.task('dist', function() {
    return gulp.src(['src/mol.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(cssnano({ autoprefixer: { browsers: supportedbrowsers, add: true } }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
});

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./dev"
        }
    });
});
gulp.task('sass', function() {
    return gulp.src(['src/mol.scss'])
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
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

gulp.watch('src/**/*.scss', gulp.series('sass')).on('change', function() {
  browserSync.reload;
});

gulp.task('default', gulp.parallel('server', 'normalize', 'grid', 'sass', function() {}));
