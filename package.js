Package.describe({
  summary: 'iCalendar .ics export',
  version: '1.0.0',
  git: 'https://github.com/Zaku-eu/meteor-ics.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('zaku:ics.js', 'server');
  api.export('iCalendar');
});
