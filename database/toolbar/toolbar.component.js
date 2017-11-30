(function() {
  angular.module('inboxV2')
  .component('toolBar', {
    templateUrl: 'database/toolbar/toolbar.template.html',
    bindings: {
      mail: "="
    }
  })
})();
