function tellAge(birth) {
   var today = new Date();
   var curr_date = today.getDate();
   var curr_month = today.getMonth() + 1;
   var curr_year = today.getFullYear();

   var pieces = birth.split('-');
   var birth_date = pieces[0];
   var birth_month = pieces[1];
   var birth_year = pieces[2];


   if (curr_month == birth_month && curr_date == birth_date) return console.log("Happy Birthday!");
   if (curr_year < birth_year) return console.log("You are not born yet!");
   if (birth_year < 1900) return console.log("Chuck Norris, is that you?!?");
   if (curr_month == birth_month && curr_date >= birth_date) return parseInt(curr_year-birth_year);
   if (curr_month == birth_month && curr_date < birth_date) return parseInt(curr_year-birth_year-1);
   if (curr_month > birth_month) return parseInt(curr_year-birth_year);
   if (curr_month < birth_month) return parseInt(curr_year-birth_year-1);
 
   
}

var age = tellAge('18-01-2011');