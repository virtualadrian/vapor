// OPTIONS
// --min                        Flag to enable minification                                         Default: false
// --gzip                       Flag to enable gziphication                                         Default: false

let gulp = require('gulp-help')(require('gulp'));
let requireDir = require('require-dir');
let tasks = requireDir('./gulpTasks');

gulp.task('default', 'Build sass, libs and sprites to the dist folder', [
    'sass',
    'lib',
    'copy:images',
    'copy:fonts',
    'copy:js',
    'svg',
]);

gulp.task('watch', () => {
    gulp.watch('./scss/**/*', ['docs']);
    gulp.watch('./resources/js/**/*', ['copy:js']);
});
