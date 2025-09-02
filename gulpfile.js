const { src, dest, series, parallel } = require('gulp');
const tap = require('gulp-tap');
const pug = require('gulp-pug');
const fs = require('fs');
const path = require('path');

function merge() {
  return src('src/**/*.html')
    .pipe(tap(function(file) {
      const dir = path.dirname(file.path);
      const callPath = path.join(dir, 'call.txt');
      let callText = '';
      if (fs.existsSync(callPath)) {
        callText = fs.readFileSync(callPath, 'utf8');
      }
      const replaced = file.contents.toString().replace('<!-- CALL_FOR_PARTICIPATION -->', callText);
      file.contents = Buffer.from(replaced);
    }))
    .pipe(dest('dist'));
}

function html() {
  return src('src/1/index.pug', { base: 'src/1' })
    .pipe(pug({ locals: { fs } }))
    .pipe(dest('dist'));
}

function copy() {
  return src(['src/**/*', '!src/**/*.html', '!src/**/*.pug', '!src/**/call.txt'], { encoding: false })
    .pipe(dest('dist'));
}

const build = series(parallel(merge, copy), html);

exports.build = build;
exports.default = build;
