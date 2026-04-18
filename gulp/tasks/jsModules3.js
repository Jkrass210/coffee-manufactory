export const jsModules3 = () => {
  return app.gulp.src(app.path.src.jsModules3)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: "JS",
      message: "Error: <%= error.message %>"
    })
  ))
  .pipe(app.gulp.dest(app.path.build.jsModules3))
  .pipe(app.plugins.browsersync.stream())
}