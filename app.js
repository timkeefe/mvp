//LOGIN/PW  div hide.show
//Set DB
//POST NEW OWN
//EDIT/UPDATE OWN


// (function(){

//   var app = angular.module('collectionMaker', []);

//   var catalogue = [
//     { country: "Abssinia",
//       authority: "BOA",
//       BNBid: "B1a",
//       PICKid: "P1",
//       denomination: 5,
//       currency:"Thalers",
//       date: "unknown",
//       year: 1928,
//       type: "Issued",
//       ownedBy: [ {username1:[{qty: 1, grade: "VF", cost: 310.00},
//                             {qty: 3, grade: "XF", cost: 410.00}]},
//                 {username2:[{qty: 1, grade: "G", cost: 50.50}]}
//               ]
//     },
//     { country: "Abssinia",
//       authority: "BOA",
//       BNBid: "B1b",
//       PICKid: "P1",
//       denomination: 10,
//       currency:"Thalers",
//       date: "unknown",
//       year: 1929,
//       type: "Issued"
//     },
//     { country: "Ceylon",
//       authority: "CBC",
//       BNBid: "B10a",
//       PICKid: "P56",
//       denomination: 1,
//       currency:"Rupee",
//       date: "unknown",
//       year: 1956,
//       type: "Issued"
//     },
//     { country: "Ivory Coast",
//       authority: "AOF",
//       BNBid: "B1a",
//       PICKid: "P1",
//       denomination: 25,
//       currency:"Centimes",
//       date: "unknown",
//       year: 1917,
//       type: "Issued"
//     },
//     { country: "Ivory Coast",
//       authority: "AOFBOI",
//       BNBid: "B1b",
//       PICKid: "P1",
//       denomination: 50,
//       currency:"Centimes",
//       date: "unknown",
//       year: 1917,
//       type: "Issued"
//     },
//     { country: "Ivory Coast",
//       authority: "AOF",
//       BNBid: "B1c",
//       PICKid: "P1",
//       denomination: 50,
//       currency:"Centimes",
//       date: "unknown",
//       year: 1917,
//       type: "Issued"
//     },
//     { country: "Malawi",
//       authority: "RBM",
//       BNBid: "B10a",
//       PICKid: "P10a",
//       denomination: 1,
//       currency:"Kwacha",
//       date: "unknown",
//       year: 1964,
//       type: "Issued"
//     },
//     { country: "Malawi",
//       authority: "RBM",
//       BNBid: "B10as",
//       PICKid: "PNL",
//       denomination: 0.25,
//       currency:"Kwacha",
//       date: "unknown",
//       year: 1964,
//       type: "Specimen"
//     },
//   ];

//   app.controller('CatalogueController', function(){
//     this.items = catalogue;
//     // private var used in child view??? bad name
//     this.owned = {};
//     this.owner = null,

//     this.showIfOwned = function($event, item) {
//       //access the property on the data obj which holds users that own this item
//       if(item.ownedBy){
//         for(var i = 0; i < item.ownedBy.length; i++){
//           //'username' is placeholder for the logged in username instance
//           //checks to see if the username is the array of owners
//           if(Object.keys(item.ownedBy[i])[0] === 'username1'){
//             //if so, assigns the found object to var named owned
//             this.owner = (Object.keys(item.ownedBy[i])[0]);
//             // this.owned =
//           }
//         }
//       }
//       //send to add
//       console.log('kkkk', this.owner)
//     };



//   })

//   app.controller('CollectionController', function(){
//   })



// })();






var app = angular.module('poster', ['ui.router']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      })

      .state('posts', {
        url:'/posts/{id}',
        templateUrl:'/posts.html',
        controller:'PostsCtrl'
      });

  $urlRouterProvider.otherwise('home');
}]);

app.factory('posts', [function(){
  var o = {
    posts: [{title:'hello', upvotes:0}]
  };
  return o;
}]);

app.controller('MainCtrl', [
'$scope', 'posts',
  function($scope, posts){
    $scope.test = 'Hello world!';

    $scope.posts = posts.posts
  // [
  //   {title: 'post 1', upvotes: 5},
  //   {title: 'post 2', upvotes: 2},
  //   {title: 'post 3', upvotes: 15},
  //   {title: 'post 4', upvotes: 9},
  //   {title: 'post 5', upvotes: 4}
  // ];

    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') {
        return;
      }
      $scope.posts.push({
        title: $scope.title,
        upvotes: 0,
        comments: [
          {author: 'Joe', body: 'Cool post!', upvotes: 0},
          {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
        ]
      });
      $scope.title = '';
    };

    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
  }
]);

app.controller('PostsCtrl', [
  '$scope',
  '$stateParams',
  'posts',
  function($scope, $stateParams, posts){
    $scope.post = posts.posts[$stateParams.id];
  }]);

