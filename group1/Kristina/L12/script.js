function tellAge(birth) {
   var today = new Date();
   var curr_date = today.getDate();
   var curr_month = today.getMonth() + 1;
   var curr_year = today.getFullYear();

   var pieces = birth.split('-');
   var birth_date = Number(pieces[0]);
   var birth_month = Number(pieces[1]);
   var birth_year = Number(pieces[2]);
   var result;    


   if (curr_month == birth_month && curr_date == birth_date) result = "Happy Birthday!";
   else if (curr_year < birth_year || (curr_year == birth_year && curr_month < birth_month) || 
                                        (curr_year == birth_year && curr_month == birth_month && curr_date < birth_date)) result = "You are not born yet!";
   else if (birth_year < 1900) result = "Chuck Norris, is that you?!?";
   else if (curr_month == birth_month && curr_date > birth_date) result = curr_year - birth_year;
   else if (curr_month == birth_month && curr_date < birth_date) result = curr_year - birth_year - 1;
   else if (curr_month > birth_month) result = curr_year - birth_year;
   else if (curr_month < birth_month) result = curr_year - birth_year - 1;
    
    console.log(result);
 
   
}

var age = tellAge('18-01-2011');
