'use strict';

import path from 'path';
import del from 'del';
import gulpIf from 'gulp-if';
import vinylPaths from 'vinyl-paths';
import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import todo from 'gulp-todo';

import {config, onChange} from './gulpfile.config';

const styles = config.styles;
const todolist = config.todolist;
const fonts = config.fonts;
const images = config.images;

const DEV_DIR = config.dev_dir;
const BUILD_DIR = config.build_dir;

gulp.task('build:styles', () => {
	gulp.src(path.join(DEV_DIR, styles.src))
	.pipe(sourcemaps.init())
	.pipe(sass(styles.sass).on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(sourcemaps.write(''))
	.pipe(gulp.dest(path.join(BUILD_DIR, styles.dest)));
});

gulp.task('build:fonts', () => {
	gulp.src(path.join(DEV_DIR, fonts.src))
	.pipe(gulp.dest(path.join(BUILD_DIR, fonts.dest)));
});

gulp.task('build:images', () => {
	gulp.src(path.join(DEV_DIR, images.src))
	.pipe(gulp.dest(path.join(BUILD_DIR, images.dest)));
});

gulp.task('generate:todolist', () => {
	gulp.src(path.join(DEV_DIR, todolist.src))
	.pipe(todo(todolist.todo))
	.pipe(gulpIf((file) => {
		console.log(`Founded ${file.todos.length}`);
		return file.todos && Boolean(file.todos.length);
	}, gulp.dest(''), vinylPaths(del)));
});

gulp.task('clean', () => { del.sync([BUILD_DIR, 'todo.md']) });
gulp.task('build', ['build:styles', 'build:fonts', 'build:images', 'generate:todolist']);
gulp.task('clean:build', ['clean', 'build']);

gulp.task('watch',() => {
	gulp.watch(path.join(DEV_DIR, styles.watch), ['build:styles']).on('change', onChange );
});

gulp.task('default', ['clean:build', 'watch']);
