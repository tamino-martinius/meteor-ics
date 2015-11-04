Package.describe({
  summary: 'iCalendar .ics export',
  version: '1.0.0',
  git: 'https://github.com/mikotodesign/meteor-ics.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('mikotodesign:ics.js', 'server');
  api.export('iCalendar');
});
