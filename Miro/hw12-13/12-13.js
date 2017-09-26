//var shoppingCart = [
//   {
//     name: "apple",
//     type: "fruit",
//     quantity: 5
//   },
//   {
//     name: "banana",
//     type: "fruit",
//     quantity: 2
//   },
//   {
//     name: "potato",
//     type: "vegetable",
//     quantity: 10
//   },
//   {
//     name: "cheese",
//     type: "diry",
//     quantity: 1
//   },
//   {
//     name: "yogurt",
//     type: "diry",
//     quantity: 3
//   },
//   {
//     name: "steak",
//     type: "meat",
//     quantity: 1
//   },
//   {
//     name: "ice cream",
//     type: "sweet",
//     quantity: 1
//   },
//   {
//     name: "bounty",
//     type: "sweet",
//     quantity: 3
//   }
// ];


// // This function accepts a shopping cart list and returns the overall quantity of all the items in it
// function quantity(itemsList) {
//   var result = 0;
//   for(var i=0;i<shoppingCart.length;i++) {
//     result += shoppingCart[i].quantity;
//   }

//   itemsList.forEach(function(item) {
//     result = result + item.quantity;
//   });
//   return result;
// }

// // This function accepts a shopping cart list and returns the quantity of the fruit and vegetable items in it
// function veganQuantity(shoppingCart) {
//   var result = 0;

//   for(var i=0;i<shoppingCart.length;i++) {
//     var item = shoppingCart[i];

//     if(item.type === "fruit" || item.type === "vegetable") {
//       result = result + item.quantity;
//     }
//   }

//   var filtered = shoppingCart.filter(function(item) {
//     return (item.type === "fruit" || item.type === "vegetable");
//   });

//   result = quantity(filtered);

//   return result;
// }

// console.log('overall', quantity(shoppingCart)); // should return 26
// console.log('vegan', veganQuantity(shoppingCart)); // should return 17



  "use strict";

  var artists = [
    { name: 'David Bowie', born: 1947, died: 2016 },
    { name: 'Thom Yorke', born: 1968 },
    { name: 'Matt Berninger', born: 1971 },
    { name: 'Tracy Chapman', born: 1964 },
    { name: 'Jim Morrison', born: 1943, died: 1971 },
    { name: 'Nick Cave', born: 1957 }
  ];

  var currentYear = (new Date()).getFullYear();

  artists.forEach(function(artist) {
    artist.age = (artist.died||currentYear) - artist.born;
  });

  function findByAge(list, age) {
    // returns the name of the artist that has the given age
    var result;
    var found;

    for(let i=0;i<list.length;i++) {
      if(artist.age === age) {
        found = list[i];
      }
    }

    found = artists.find(function(artist) {
      return artist.age === age;
    });

    return found ? found.name : -3;

    if (found) {
      result = found.name;
    }
    else {
      result = -1;
    }

    return result;
  }

  console.log("findByAge(artists, 52):", findByAge(artists, 52)); // => "Tracy Chapman"
  console.log("findByAge(artists, 34):", findByAge(artists, 34)); // => -1


// //   function avarageAge(list, age) {
// //     // returns the average age of all artists
// //     var total = 0;
// //     for(var i=0;i<list.length;i++) {
// //       total += list[i].age;
// //     }

// //     return Math.round(total/list.length);
// //   }

// //   console.log(artists);

// //   console.log("avarageAge(artists):", avarageAge(artists)); // => 50
// // })();