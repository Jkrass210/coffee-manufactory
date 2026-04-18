export const jsModules2 = () => {
  return app.gulp.src(app.path.src.jsModules2)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: "JS",
      message: "Error: <%= error.message %>"
    })
  ))
  .pipe(app.gulp.dest(app.path.build.jsModules2))
  .pipe(app.plugins.browsersync.stream())
}