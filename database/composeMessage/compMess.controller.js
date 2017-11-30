(function() {
  angular.module('inboxV2')
  .controller('compMess', compMess);

  function compMess($http) {
    const vm = this;

    vm.addMessage = function(e, mail, tog) {

      console.log(vm.mess);
      if(vm.mess !== undefined) {
        if(vm.mess.subject !== "" && vm.mess.body !== "") {
          $http.post("https://nameless-dawn-66814.herokuapp.com/api/messages", vm.mess).then(res=>{
            console.log(res);
            mail.push(res.data);
            console.log(mail);
          })
        }
      }
      tog();
    }
  }
}());
