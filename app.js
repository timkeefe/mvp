(function(){

  var app = angular.module('collectionMaker', []);

  var catalogue = [
    { country: "Abssinia",
      authority: "BOA",
      BNBid: "B1a",
      PICKid: "P1",
      denomination: 5,
      currency:"Thalers",
      date: "unknown",
      year: 1928,
      type: "Issued",
      ownedBy: [ {username1:[{qty: 1, grade: "VF", cost: 310.00},
                            {qty: 3, grade: "XF", cost: 410.00}]},
                {username2:[{qty: 1, grade: "G", cost: 50.50}]}
              ]
    },
    { country: "Abssinia",
      authority: "BOA",
      BNBid: "B1b",
      PICKid: "P1",
      denomination: 10,
      currency:"Thalers",
      date: "unknown",
      year: 1929,
      type: "Issued"
    },
    { country: "Ceylon",
      authority: "CBC",
      BNBid: "B10a",
      PICKid: "P56",
      denomination: 1,
      currency:"Rupee",
      date: "unknown",
      year: 1956,
      type: "Issued"
    },
    { country: "Ivory Coast",
      authority: "AOF",
      BNBid: "B1a",
      PICKid: "P1",
      denomination: 25,
      currency:"Centimes",
      date: "unknown",
      year: 1917,
      type: "Issued"
    },
    { country: "Ivory Coast",
      authority: "AOFBOI",
      BNBid: "B1b",
      PICKid: "P1",
      denomination: 50,
      currency:"Centimes",
      date: "unknown",
      year: 1917,
      type: "Issued"
    },
    { country: "Ivory Coast",
      authority: "AOF",
      BNBid: "B1c",
      PICKid: "P1",
      denomination: 50,
      currency:"Centimes",
      date: "unknown",
      year: 1917,
      type: "Issued"
    },
    { country: "Malawi",
      authority: "RBM",
      BNBid: "B10a",
      PICKid: "P10a",
      denomination: 1,
      currency:"Kwacha",
      date: "unknown",
      year: 1964,
      type: "Issued"
    },
    { country: "Malawi",
      authority: "RBM",
      BNBid: "B10as",
      PICKid: "PNL",
      denomination: 0.25,
      currency:"Kwacha",
      date: "unknown",
      year: 1964,
      type: "Specimen"
    },
  ];

  app.controller('CatalogueController', function(){
    this.items = catalogue;

  })

  app.controller('CollectionController', function(){

  })



})();