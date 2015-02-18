var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-accordion',
  summary : 'Semantic UI - Accordion (official): Single component release of accordion',
  version : '1.9.9',
  git     : 'git://github.com/Semantic-Org/UI-Accordion.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
