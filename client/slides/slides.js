'use strict';

var slides = [
  'intro',
  'plan',
  'michal1',
  'meteor1',
  'meteor2',
  'meteor3',
  'meteor4',
  'demo',
  'components',
  'apps',
  'community',
  'links',
  'michal2',
  'end'
];

_(slides).each(function(name, i){
  Template['vslide' + (i+1)].helpers({
      getTemplate: function(){
        return 'slide-' + name;
      }
  });
});
