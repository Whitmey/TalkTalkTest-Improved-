angular.module('TalkTalkApp')
  .controller('MainController', MainController);

  MainController.$inject = ['$http'];

function MainController($http) {

  this.all = [
    {
        "name": "leanne graham",
        "email": "leanne@gmail.com",
        "job": "web developer",
        "location": "london",
        "tag": "friends",
        "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
    },
    {
        "name": "ervin howell",
        "email": "ervin@gmail.com",
        "job": "tech lead",
        "location": "london",
        "tag": "friends",
        "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
    },{
        "name": "clementine bauch",
        "email": "clementine@gmail.com",
        "job": "web developer",
        "location": "liverpool",
        "tag": "following",
        "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
    },{
        "name": "chelsey dietrich",
        "email": "chelsey@gmail.com",
        "job": "baker",
        "location": "london",
        "tag": "family",
        "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
    },{
        "name": "dennis schulist",
        "email": "dennis@gmail.com",
        "job": "pen tester",
        "location": "manchester",
        "tag": "acquaintance",
        "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
    }
  ];

  console.log(this.all);

  this.add = addUser;

  function addUser() {
    this.all.push({ name: this.addUser.name, email: this.addUser.email, job: this.addUser.job, location: this.addUser.location, tag: this.addUser.tag, avatar: 'http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png' });
    document.getElementsByClassName('formInput').value = '';
  }

};
