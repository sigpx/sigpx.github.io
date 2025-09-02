const { src, dest, task, parallel } = require('gulp');
const tap = require('gulp-tap');
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

function copy() {
  return src(['src/**/*', '!src/**/*.html'], { encoding: false })
    .pipe(dest('dist'));
}

const build = parallel(merge, copy);

exports.build = build;
exports.default = build;
