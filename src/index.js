function updateParisTime(params) {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");

  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("dddd MMMM D , YYYY");

  parisTimeElement.innerHTML = parisTime.format("hh:mm:ss [<small>]A[<small>]");
}
updateParisTime();
setInterval(updateParisTime, 1000);

function updateLondonTime(params) {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");

  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("dddd MMMM D , YYYY");

  londonTimeElement.innerHTML = londonTime.format(
    "hh:mm:ss [<small>]A[<small>]"
  );
}

updateLondonTime();
setInterval(updateLondonTime, 1000);
