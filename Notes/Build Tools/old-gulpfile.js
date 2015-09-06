// Imports
var gulp        = require('gulp');
var browserify  = require('browserify');
var reactify    = require('reactify');
var uglify      = require('gulp-uglify');
var source      = require('vinyl-source-stream');

// JS Source file (browserify will process all root nodes,
// use .add() from browserify pipeline)
var sourceFilePath = './src/js/main.js';
var destinationFilePath = './dist/js';
var processFileName = 'main.js';

// browserify source code
gulp.task('browserify', function() {
    var b = browserify(sourceFilePath);
    b.transform(reactify);
    return b.bundle()
        .pipe(source(processFileName))
        .pipe(gulp.dest(destinationFilePath));
});

// copy sources (if copying multiple CSS files,
// use gulp-concat to join into one css file)
var copyFiles = [
    { src: 'src/index.html',      dest: './dist' },
    { src: 'src/css/styles.css',  dest: './dist/css' }
];

// copy index file into DIST
gulp.task('copy', function() {
    copyFiles.forEach(function (file) {
        gulp.src(file.src)
          .pipe(gulp.dest(file.dest));
    })
});

// create default task
gulp.task('default',['browserify', 'copy']);

// create watch task
gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});
