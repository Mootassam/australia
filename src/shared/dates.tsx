import moment from "moment";

class Dates {


  static currentTime() {
    const currentTime = moment().format("HH:mm");
    return currentTime;
  }

  static getDatesiri() { 
    const formattedDate = moment().format('DD MMM YYYY hh:mm A');
    return formattedDate;
   }

   static getDateing() { 
    const date = moment();
    const formattedDate = date.format('ddd DD MMM YYYY');
    return formattedDate
   }

   static ingtime() { 
    const time = moment();
const formattedTime = time.format('h:mm A');
return formattedTime
   }


  static getCurrentDate() {
    const currentDate = moment().format('DD MMM YYYY');
    return currentDate;
  }



}

export default Dates;
