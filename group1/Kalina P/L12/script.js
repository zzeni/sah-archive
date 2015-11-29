"use strict";

  function yearDifference(date) {

      var curDate = new Date(),
          now = {
              year: curDate.getUTCFullYear(),
              month: curDate.getUTCMonth() + 1,
              day: curDate.getUTCDate()
          },
          diff = now.year % date.year;


      if (now.month < date.month ||
          now.month === date.month && now.day < date.day) {
          diff -= 1;
      }

      return diff;
  }

  console.log(yearDifference({
      year: 1988,
      month: 5,
      day: 18
  }));