Package.describe({
  summary: "iCalendar .ics export"
});

Package.on_use(function (api) {
  api.add_files("ics.js", "server");
});
