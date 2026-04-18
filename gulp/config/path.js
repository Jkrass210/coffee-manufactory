import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./docs`;
const srcFolder = `./src`;

export const path = {
  build: {
    fonts: `${buildFolder}/fonts/`,
    js: `${buildFolder}/js/`,
    jsModules: `${buildFolder}/js/module/`,
    jsModules2: `${buildFolder}/js/module2/`,
    jsModules3: `${buildFolder}/js/module3/`,
    jsModules4: `${buildFolder}/js/module4/`,
    jsModules5: `${buildFolder}/js/module5/`,
    jsModules6: `${buildFolder}/js/module6/`,
    normalize:`${buildFolder}/css/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
  },
  src: {
    fonts: `${srcFolder}/fonts/*.*`,
    js: `${srcFolder}/js/*.js`,
    jsModules: `${srcFolder}/js/module/*.js`,
    jsModules2: `${srcFolder}/js/module2/*.js`,
    jsModules3: `${srcFolder}/js/module3/*.js`,
    jsModules4: `${srcFolder}/js/module4/*.js`,
    jsModules5: `${srcFolder}/js/module5/*.js`,
    jsModules6: `${srcFolder}/js/module6/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    normalize: `${srcFolder}/scss/normalize.css`,
    scss: `${srcFolder}/scss/*.scss`,
    html: `${srcFolder}/*.html`,
    svgicons: `${srcFolder}/svgicons/*.svg`
  },
  watch: {
    jsModules: `${srcFolder}/js/module/**/*.js`,
    jsModules2: `${srcFolder}/js/module2/**/*.js`,
    jsModules3: `${srcFolder}/js/module3/**/*.js`,
    jsModules4: `${srcFolder}/js/module4/**/*.js`,
    jsModules5: `${srcFolder}/js/module5/**/*.js`,
    jsModules6: `${srcFolder}/js/module6/**/*.js`,
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder
}