function calcAge(birthdate){

	    var dateToday = new Date();
        var yearNow = dateToday.getFullYear();
        var monthNow = dateToday.getMonth() + 1;
        var dateNow = dateToday.getDate();
        var mdNow = monthNow + " " + dateNow;
        
        var bd = new Date(birthdate);
        var yearBd = bd.getFullYear();
        var monthBd = bd.getMonth() + 1;
        var dateBd = bd.getDate();

        var mdBd = monthBd + " " + dateBd;

        var age = yearNow - yearBd;

        if(mdBd === mdNow){
          console.log("Happy birthday!");
        }
        else if(monthBd < monthNow){
          console.log("1 year more!");
        }
        else if(monthBd == monthNow){
          if (dateBd < dateNow) {
            console.log("1 year more!");
          }
            else{
              age = age - 1;
              console.log("You have time to your birthday!");
            }
        }
        else{
          age = age - 1;
          console.log("You have time to your birthday!");
        }
        console.log(age);
        return age;
}
calcAge("12-30-1988");