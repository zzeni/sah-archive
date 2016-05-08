 function any(list, value) {
     var truthful = false;
     for (i = 0; i < list.length; i++) {
         if (list[i] === value) {
             truthful = true;
         }
     }
     return truthful
 }

 function all(list, value) {
     var truthful = true;
     for (var i = 0; i < list.length; i++) {

         if (list[i] !== value) {
             truthful = false;
         }
     }
     return truthful;
 }

 hofAny(list, value, callback) {
     for (var i = 0; i < list.legth; i++) {
         if (callback(list, value)) {
             return true;
         }
     }
 }

 hofAll(list, value, callback) {
     for (var i = 0; i < list.legth; i++) {
         if (callback(list, value)) {
             return true;
         } else {
             return false;
         }
     }
 }


 var array = [
     {
         name: 'David Bowie',
         age: 69
     },
     {
         name: 'Thom Yorke',
         age: 47
     },
     {
         name: 'Matt Berninger',
         age: 45
     },
     {
         name: 'Tracy Chapman',
         age: 52
     },
     {
         name: 'Jim Morrison',
         age: 27
     },
     {
         name: 'Nick Cave',
         age: 58
     }
  ];

 var artists = {
     list: array,
     any: function (callback) {
         return hofAny(callback, this.list);
     },
     all: function (callback) {
         return hofAll(callback, this.list);
     }
 };
 artists.any(function (artist) {
     return artist.age < 50;
 });
 //returs if there is an artist under 50

 artists.all(function (artist) {
     return artist.age < 50;
 });

 //returs if all artists are under 50