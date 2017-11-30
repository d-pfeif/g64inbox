(function() {
  angular.module('inboxV2')
  .controller('toolBar', toolBar);

  function toolBar($http) {
    const vm = this;

    vm.totalSelected = function(mail) {
      let counter = 0
      for (var i = 0; i < mail.length; i++) {
        if(mail[i].selected == true){
          counter++
        }
      }
      return counter
    }

    vm.totalUnread = function(mail) {
      // console.log(mail);
      let totUnread = 0
      for (var i = 0; i < mail.length; i++) {
        if(mail[i].read == "false" || mail[i].read == false){
          totUnread++
          // console.log(mail);
        }
      }
      return totUnread
    }

    vm.selectAll = function(mail) {
      console.log(mail);
      for (var i = 0; i < mail.length; i++) {
        mail[i].selected = true;
      }
    }

    vm.selectNone = function(mail) {
      console.log(mail);
      for (var i = 0; i < mail.length; i++) {
        mail[i].selected = false;
      }
    }

    vm.markRead = function(mail) {
      let messageArr = []
      for (var i = 0; i < mail.length; i++) {
        if (mail[i].selected == true) {
          messageArr.push(mail[i].id)
          mail[i].read = true;
        }
      }
      // console.log(messageArr);
      let messObj = {}
      messObj.messageIds = messageArr;
      messObj.command = "read";
      messObj.read = "true"
      console.log(messObj);
      $http.patch('https://nameless-dawn-66814.herokuapp.com/api/messages', messObj).then(res => {
        console.log(res);
      })
    }

    vm.markUnread = function(mail) {
      let messageArr = []
      for (var i = 0; i < mail.length; i++) {
        if (mail[i].selected == true) {
          messageArr.push(mail[i].id)
          mail[i].read = false;
        }
      }
      // console.log(messageArr);
      let messObj = {}
      messObj.messageIds = messageArr;
      messObj.command = "read";
      messObj.read = "false"
      console.log(messObj);
      $http.patch('https://nameless-dawn-66814.herokuapp.com/api/messages', messObj).then(res => {
        console.log(res);
      })
    }

    vm.allLabels = [
        {
          id: 1,
          label: "dev"
        },
        {
          id: 2,
          label: "personal"
        },
        {
          id:3,
          label: "gschool"
        }
    ]

    vm.addLabel = function(selected, mail) {
      console.log(selected);
      let messageArr = []
      for (var i = 0; i < mail.length; i++) {
        if (mail[i].selected == true && mail[i].labels.indexOf(selected) == -1){
          messageArr.push(mail[i].id)
          mail[i].labels.push(selected)
        }
      }
      let messObj = {};
      messObj.messageIds = messageArr;
      messObj.command = "addLabel";
      messObj.label = selected;
      console.log(messObj);

      $http.patch("https://nameless-dawn-66814.herokuapp.com/api/messages", messObj).then(res=>{
        console.log(res);
      })
    }

    vm.removeLabel = function(selected, mail) {
      console.log(selected);
      let messageArr = []
      for (var i = 0; i < mail.length; i++) {
        if (mail[i].selected == true && mail[i].labels.indexOf(selected) !== -1){
          messageArr.push(mail[i].id)
          mail[i].labels.splice(mail[i].labels.indexOf(selected), 1)
        }
      }
      let messObj = {};
      messObj.messageIds = messageArr;
      messObj.command = "removeLabel";
      messObj.label = selected;
      console.log(messObj);

      $http.patch("https://nameless-dawn-66814.herokuapp.com/api/messages", messObj).then(res=>{
        console.log(res);
      })
    }

    vm.deleteMail = function(mail) {
      let messageArr = []
      for (var i = mail.length - 1; i >= 0; i--) {
        if (mail[i].selected == true) {
          messageArr.push(mail[i].id)
          mail.splice(i,1)
        }
      }
      let messObj = {
        "messageIds": messageArr,
        "command": "delete"
      }
      console.log(messObj);

      $http.patch("https://nameless-dawn-66814.herokuapp.com/api/messages", messObj).then(res=>{
        console.log(res);
      })
    }

    vm.compTab = 0

    vm.compToggle = function() {
      console.log(vm.compTab);
      if(vm.compTab === 0) {
        vm.compTab++
      } else {
        vm.compTab--
      }
    }

  }
})();
