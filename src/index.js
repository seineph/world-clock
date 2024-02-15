let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");

let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");

parisDateElement.innerHTML = moment
  .tz("Europe/Paris")
  .format("dddd MMMM D , YYYY");

londonDateElementDateElement.innerHTML = moment
  .tz("Europe/London")
  .format("dddd MMMM D , YYYY");

parisTimeElement.innerHTML = moment.tz("Europe/Paris").format("hh:mm A");

londonTimeElement.innerHTML = moment.tz("Europe/London").format("hh:mm A");
