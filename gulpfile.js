import gulp from 'gulp';
import {path} from './gulp/config/path.js';
import {plugins} from './gulp/config/plugins.js';

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins
}

import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import {jsModules} from './gulp/tasks/jsModules.js'
import {jsModules2} from './gulp/tasks/jsModules2.js'
import {jsModules3} from './gulp/tasks/jsModules3.js'
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { svgSprive } from './gulp/tasks/svgSprive.js';
import { zip } from './gulp/tasks/zip.js';
import { normalize } from './gulp/tasks/normalize.js';
import { fonts } from './gulp/tasks/fonts.js';
import { vendorJsSwiper } from './gulp/tasks/vendorJsSwiper.js';
import { vendorCssSwiper } from './gulp/tasks/vendorCssSwiper.js';
import { fslightbox } from './gulp/tasks/fslightbox.js';
import { jsModules4 } from './gulp/tasks/jsModules4.js';
import { jsModules5 } from './gulp/tasks/jsModules5.js';
import { jsModules6 } from './gulp/tasks/jsModules6.js';
import { jsModules7 } from './gulp/tasks/jsModules7.js';

function watcher() {
  gulp.watch(path.watch.html, html)
  gulp.watch(path.watch.scss, scss)
  gulp.watch(path.watch.jsModules, jsModules)
  gulp.watch(path.watch.jsModules2, jsModules2)
  gulp.watch(path.watch.jsModules3, jsModules3)
  gulp.watch(path.watch.jsModules4, jsModules4)
  gulp.watch(path.watch.jsModules5, jsModules5)
  gulp.watch(path.watch.jsModules6, jsModules6)
  gulp.watch(path.watch.jsModules7, jsModules7)
  gulp.watch(path.watch.js, js)
  gulp.watch(path.watch.images, images)
}

export { svgSprive }

const mainTasks = gulp.parallel(html, normalize, scss, jsModules, jsModules2, jsModules3, jsModules4, jsModules5, jsModules6, jsModules7, js, images, fonts, vendorJsSwiper, vendorCssSwiper, fslightbox)

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const deployZIP = gulp.series(reset, mainTasks, zip);

export { dev }
export { build }
export { deployZIP }

gulp.task('default', dev);