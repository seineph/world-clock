function updateParisTime(params) {
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");

    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("dddd MMMM D , YYYY");

    parisTimeElement.innerHTML = parisTime.format(
      "hh:mm:ss [<small>]A[<small>]"
    );
  }
}
updateParisTime();
setInterval(updateParisTime, 1000);

function updateLondonTime(params) {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");

    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("dddd MMMM D , YYYY");

    londonTimeElement.innerHTML = londonTime.format(
      "hh:mm:ss [<small>]A[<small>]"
    );
  }
}

updateLondonTime();
setInterval(updateLondonTime, 1000);

function showCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone) {
    let cityData = moment.tz(cityTimeZone);
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityDisplay = document.querySelector("#cities");
    cityDisplay.innerHTML = `
    <div class="city">
    <div>
    <h2 class="first-title">${cityName}</h2>
    <div class="date">${cityData.format("dddd MMMM D , YYYY")} </div>
    </div>
    <div class="time">
    ${cityData.format("hh:mm:ss")} <small> ${cityData.format("A")}</small>
    </div>
    </div>`;
  }
}

let dropdownElement = document.querySelector("#dropdown");
dropdownElement.addEventListener("change", showCity);
