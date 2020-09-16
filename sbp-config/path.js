module.exports = {
  dev: {
    html: 'src/',
    js: 'src/js/',
    css: 'src/css/',
    sprite: 'src/images/sprite',
    spriteSvg: 'src/images/sprite-svg',
    symbolsSvg: 'src/images/symbols-svg',
    inlineSvg: 'src/images/sprite'
  },
  build: {
    html: 'build/',
    js: 'build/js/',
    css: 'build/css/',
    images: 'build/images/',
    i: 'build/i/',
    fonts: 'build/fonts/',
    sprite: 'build/images/sprite',
    spriteSvg: 'build/images/sprite-svg',
    symbolsSvg: './build/images/symbols-svg',
    inlineSvg: 'build/images/sprite'
  },
  src: {
    html: 'src/html/*.html',
    js: 'src/js/components/*.js',
    css: ['src/scss/style.scss'],
    images: 'src/images/**/*.*',
    i: 'src/i/**/*.*',
    fonts: 'src/fonts/**/*.*',
    sprites: 'src/sprites-png/*.png',
    spritesSvg: 'src/sprites-svg/*.svg',
    symbolsSvg: 'src/symbol-svg/*.svg',
    inlineSvg: 'src/inline-svg/*.svg'
  },
  watch: {
    html: 'src/html/**/*.html',
    dataJson: 'src/data-json/',
    js: ['src/js/main.js', 'src/js/components/**/*.js'],
    css: 'src/scss/**/*.scss',
    sprites: 'src/sprites-png/*.png',
    spritesSvg: 'src/sprites-svg/*.svg',
    symbolsSvg: 'src/symbol-svg/*.svg',
    inlineSvg: 'src/inline-svg/*.svg'
  },
  cleanFolder: './build',
  cleanHtml: './src/*.html',
  cleanJs: './src/js/script.js',
  cleanCss: './src/css'
};
