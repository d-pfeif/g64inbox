(function() {
  'use strict';
  angular.module('inboxV2')
  .controller('mainCtrl', controller)

  function controller($http) {
    const vm = this;

    vm.$onInit = function() {
      $http.get("https://nameless-dawn-66814.herokuapp.com/api/messages").then(res=>{
      vm.posts = res.data._embedded.messages
        for (var i = 0; i < vm.posts.length; i++) {
          vm.posts[i].selected = false;
        }
        console.log(vm.posts);
        return vm.posts
      })
    }
  }
})();
