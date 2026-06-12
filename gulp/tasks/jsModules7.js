export const jsModules7 = () => {
  return app.gulp.src(app.path.src.jsModules7)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: "JS",
      message: "Error: <%= error.message %>"
    })
  ))
  .pipe(app.gulp.dest(app.path.build.jsModules7))
  .pipe(app.plugins.browsersync.stream())
}