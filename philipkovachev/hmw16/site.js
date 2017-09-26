   "use strict";


   function Redirect() {
       window.location = "https://www.yahoo.com/";

   }
   document.write("You will be redirected to a new page in 30 seconds.");
   setTimeout('Redirect()', 30000);