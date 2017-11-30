(function(){
  angular.module('inboxV2')
  .component('inbox', {
    templateUrl: '/database/inbox/inbox.template.html',
    bindings: {
      mail: "="
    }
  })
})();
