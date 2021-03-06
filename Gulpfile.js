'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('watch', () => {
	gulp.watch('src/**/*.js', ['babel']);
});

gulp.task('babel', () => {
	return gulp.src('src/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['babel']);
