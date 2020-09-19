'use strict';

import { src, dest } from 'gulp';
import path from '../path';
import plumber from 'gulp-plumber';
import spritesmith from 'gulp.spritesmith';
import buffer from 'vinyl-buffer';
import imagemin from 'gulp-imagemin';
import svgSprites from 'gulp-svg-sprites';
import svgSymbols from 'gulp-svg-symbols';
import svgmin from 'gulp-svgmin';
import { svgConfigPlugs } from '../svgConfigPlugs';
import merge from 'merge-stream';
import browserSync from 'browser-sync';
import gulpif from 'gulp-if';
import svgstore from 'gulp-svgstore';
import rename from 'gulp-rename';
import flags from '../flags';

export function spritesTask () {
  const fileNameSprite = 'sprite.png';
  const fileNameSprite2x = 'sprite@2x.png';

  const spriteData = src(path.src.sprites)
    .pipe(plumber())
    .pipe(
      spritesmith({
        retinaSrcFilter: 'src/sprites-png/*@2x.png',
        imgName: fileNameSprite,
        retinaImgName: fileNameSprite2x,
        // .css, .sass, .scss, .less, .styl/.stylus
        // cssFormat: 'scss', // с этой переменной нет ретины
        cssName: 'sprite.scss',
        padding: 10,
        imgPath: '../images/sprite/' + fileNameSprite,
        retinaImgPath: '../images/sprite/' + fileNameSprite2x
      })
    );

  const imgStream = spriteData.img
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulpif(flags.watch, dest(path.dev.sprite)))
    .pipe(gulpif(!flags.watch, dest(path.build.sprite)))
    .pipe(gulpif(flags.bs, browserSync.stream()));

  const cssStream = spriteData.css.pipe(dest('./src/scss/sprite/'));

  return merge(imgStream, cssStream);
}

export function spritesSVGTask () {
  return src(path.src.spritesSvg)
    .pipe(plumber())
    // .pipe(svgmin(svgConfigPlugs))
    .pipe(
      svgSprites({
        mode: 'sprite',
        common: 'icon',
        // templates: {
        //   scss: true
        // },
        // путь и имя style file
        // cssFile: '../src/scss/sprite/spriteSvg.scss',
        cssFile: '../../scss/sprite/spriteSvg.scss',
        // путь к svg file, который будет записан в css
        svgPath: '../images/sprite-svg/sprite.svg',
        // куда записать svg file
        svg: {
          sprite: 'sprite.svg'
        },
        preview: false,
        padding: 10,
        selector: '%f'
      })
    )
    .pipe(gulpif(flags.watch, dest(path.dev.spriteSvg)))
    .pipe(gulpif(!flags.watch, dest(path.build.spriteSvg)))
    .pipe(gulpif(flags.bs, browserSync.stream()));
}

export function symbolsSVGTask () {
  return src(path.src.symbolsSvg)
    .pipe(plumber())
    // .pipe(svgmin(svgConfigPlugs))
    .pipe(
      svgSymbols({
        svgAttrs: { class: 'svg-symbol' },
        class: '.svg-symbol--%f',
        templates: ['default-svg']
      })
    )
    .pipe(gulpif(flags.watch, dest(path.dev.symbolsSvg)))
    .pipe(gulpif(!flags.watch, dest(path.build.symbolsSvg)))
    .pipe(gulpif(flags.bs, browserSync.stream()));
}

export function inlineSpriteSVGTask () {
  return src(path.src.inlineSvg)
    .pipe(plumber())
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('sprite.svg'))
    // .pipe(svgmin({
    //   js2svg: {
    //     pretty: true
    //   }
    // }))
    .pipe(gulpif(flags.watch, dest(path.dev.inlineSvg)))
    .pipe(gulpif(!flags.watch, dest(path.dev.inlineSvg)))
    .pipe(gulpif(!flags.watch, dest(path.build.inlineSvg)))
    .pipe(gulpif(flags.bs, browserSync.stream()));
}
