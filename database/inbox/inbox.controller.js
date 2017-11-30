(function() {
  'use strict';
  angular.module('inboxV2')
  .controller('apiMail', controller);

  controller.$inject = ['$http']

  function controller($http) {
    const vm = this;

    vm.star = function(mail) {
      console.log(mail);
      let updateMail = {}
      if(mail.starred == true) {
        updateMail.messageIds = [mail.id],
        updateMail.command = "star",
        updateMail.star = false,
        mail.starred = false
      } else {
        updateMail.messageIds = [mail.id],
        updateMail.command = "star",
        updateMail.star = true,
        mail.starred = true
      }
      console.log(updateMail);
      $http.patch("https://nameless-dawn-66814.herokuapp.com/api/messages", updateMail).then(res=>{
        console.log(res);
        console.log(mail);
        return res.data
      })
    }

  }

})();
