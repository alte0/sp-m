
import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import path from '../path.js';

export function faviconTask () {
  return src(path.src.favicon)
    .pipe(plumber())
    .pipe(dest(path.build.favicon));
}
