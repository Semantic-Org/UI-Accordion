
Package.describe({
  name    : 'semantic:ui-accordion',
  summary : 'Semantic UI - Accordion: Single component release',
  version : '2.1.8',
  git     : 'git://github.com/Semantic-Org/UI-Accordion.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'accordion.css',
    'accordion.js'
  ], 'client');
});
