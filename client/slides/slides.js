'use strict';

var slides = [
  // 'intro',
  'michal1',
  'michal2',
  'michal3',
  'michal-dlaczego',
  'michal4',
  'michal5',
  'michal6',
  'plan',
  'meteor1',
  'meteor2',
  'meteor3',
  'meteor4',
  'demo',
  'components',
  'apps',
  'community',
  'links',
  'michal-end'
];

_(slides).each(function(name, i){
  Template['vslide' + (i+1)].helpers({
      getTemplate: function(){
        return 'slide-' + name;
      }
  });
});
