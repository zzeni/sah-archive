 function elastic(progress) {
     return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * 1.5 / 3 * progress)
 }

 function linear(progress) {
     return progress
 }

 function quad(progress) {
     return Math.pow(progress, 1.5)
 }

 function quint(progress) {
     return Math.pow(progress, 5)
 }

 function circ(progress) {
     return 1 - Math.sin(Math.acos(progress))
 }

 function back(progress, x) {
     return Math.pow(progress, 2) * ((x + 1) * progress - x)
 }

 function bounce(progress) {
     for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
         if (progress >= (7 - 4 * a) / 11) {
             return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
         }
     }
 }

 function makeEaseInOut(delta) {
     return function (progress) {
         if (progress < .5)
             return delta(2 * progress) / 2
         else
             return (2 - delta(2 * (1 - progress))) / 2
     }
 }

 function makeEaseIn(delta) {
     return function (progress) {
         return delta(2 * progress) / 2
     }
 }

 function makeEaseOut(delta) {
     return function (progress) {
         return 1 - delta(1 - progress)
     }
 }





 function back(progress, x) {
     return Math.pow(progress, 2) * ((x + 1) * progress - x)
 }

 function paramara(progress) {
     if (progress > 0.5) {
         return 1 - Math.sin(Math.acos(progress))
     } else {
         return Math.cos(Math.asin(progress))
     }
 }

 function disney(progress) {

     return -0.9 * Math.pow(progress, 2) + 1.2 * progress - 0.2

 }

 function finish(progress) {
     return Math.sin(progress * 2)
 }

 function parabole(progress) {
     return (-0.5 * Math.pow((progress - 1), 2) + 0.5)
 }