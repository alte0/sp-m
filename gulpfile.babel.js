
import { series, parallel, watch } from 'gulp';
import path from './sbp-config/path';
import flags from './sbp-config/flags';
import { minifyTask, noBsTask, noWatchTask } from './sbp-config/tasks/flags-tasks';
import { cleanTask, cleanDevTask } from './sbp-config/tasks/clean';
import { htmlTask } from './sbp-config/tasks/html';
import { fontsTask } from './sbp-config/tasks/fonts';
import { faviconTask } from './sbp-config/tasks/favicon';
import { imagesTask, iTask } from './sbp-config/tasks/images';
import { jsTask } from './sbp-config/tasks/js';
import { sassTask } from './sbp-config/tasks/sass';
import { spritesTask, spritesSVGTask, symbolsSVGTask, inlineSpriteSVGTask } from './sbp-config/tasks/sprites';
import { zipArchive } from './sbp-config/tasks/zipArchive';
import { bsTask } from './sbp-config/tasks/server';
import { deployTask } from './sbp-config/tasks/deploy';
// ===========================================
// watching task
// ===========================================
function watchTask(cb) {
  if (flags.watch) {
    watch([path.watch.html, path.watch.inlineSvg], series(htmlTask));
    watch([path.watch.dataJson], series(htmlTask));
    watch([path.watch.sprites], series(spritesTask));
    watch([path.watch.spritesSvg], series(spritesSVGTask));
    watch([path.watch.symbolsSvg], series(symbolsSVGTask));
    watch([path.watch.inlineSvg], series(inlineSpriteSVGTask));
    watch([path.watch.css], series(sassTask));
    watch(path.watch.js, series(jsTask));
  } else {
    console.log('=========> WATCH - OFF!');
  }

  cb();
}
// ===========================================
// All tasks
// ===========================================
const defaultTask = () => series(
  cleanDevTask,
  // parallel(spritesTask, spritesSVGTask, symbolsSVGTask, jsTask, sassTask),
  parallel(spritesTask, inlineSpriteSVGTask, jsTask, sassTask),
  htmlTask
);

const setBuild = () => series(noBsTask, noWatchTask, defaultTask());
const copyTask = () => series(fontsTask, imagesTask, iTask, faviconTask);

exports.default = series(noBsTask, defaultTask(), watchTask);
exports.dev = series(defaultTask(), watchTask, bsTask);
exports.html = series(minifyTask, noBsTask, noWatchTask, htmlTask);
exports.build = series(cleanTask, copyTask(), setBuild());
exports.zip = series(cleanTask, copyTask(), setBuild(), zipArchive);
exports.deploy = series(cleanTask, copyTask(), setBuild(), deployTask);
// exports.test = series(cleanTask, inlineSpriteSVGTask);
