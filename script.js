function displayTime() {
  let nigeriaElement = document.querySelector("#nigeria");
  if (nigeriaElement) {
    let nigeriaDate = nigeriaElement.querySelector(".date");
    let nigeriaTime = nigeriaElement.querySelector(".time");
    let nigeriaTimeZone = moment().tz("Africa/Lagos");
    nigeriaDate.innerHTML = nigeriaTimeZone.format("MMMM D, YYYY");
    nigeriaTime.innerHTML = nigeriaTimeZone.format(
      "hh:mm:s [<small>]A[</small>]"
    );
  }
  let ghanaElement = document.querySelector("#ghana");
  if (ghanaElement) {
    let ghanaDate = ghanaElement.querySelector(".date");
    let ghanaTime = ghanaElement.querySelector(".time");
    let ghanaTimeZone = moment().tz("Africa/Accra");
    ghanaDate.innerHTML = ghanaTimeZone.format("MMMM D, YYYY");
    ghanaTime.innerHTML = ghanaTimeZone.format("hh:mm:s [<small>]A[</small>]");
  }
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDate = londonElement.querySelector(".date");
    let londonTime = londonElement.querySelector(".time");
    let londonTimeZone = moment().tz("Europe/London");
    londonDate.innerHTML = londonTimeZone.format("MMMM D, YYYY");
    londonTime.innerHTML = londonTimeZone.format(
      "hh:mm:s [<small>]A[</small>]"
    );
  }
}

displayTime();
setInterval(displayTime, 1000);

function updateCity(event) {
  let zoneValue = event.target.value;
  if (zoneValue.length > 0) {
    let zoneName = zoneValue.replace("_", " ").split("/")[1];
    let cityTimeZone = moment().tz(zoneValue);
    let citiesElement = document.querySelector("#cities");
    let cityDate = cityTimeZone.format("MMMM D, YYYY");
    let cityTime = cityTimeZone.format(`hh:mm:ss [<small>]A[</small>]`);
    citiesElement.innerHTML = `<div class="city">
          <div id="city-details">
            <p id="city-name">${zoneName}</p>
            <span class="date">${cityDate}</span>
          </div>
          <div class="time">${cityTime}</div>
        </div>`;
  }
}

let selectCityElement = document.querySelector("#select-city");
selectCityElement.addEventListener("change", updateCity);
