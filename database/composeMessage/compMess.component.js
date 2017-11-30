(function() {
  angular.module('inboxV2')
  .component('compMess', {
    templateUrl: '/database/composeMessage/compMess.template.html',
    bindings: {
      mail: '=',
      toggle: '='
    }
  })
}());
