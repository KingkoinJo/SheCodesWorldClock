function displayTime() {
  let nigeriaElement = document.querySelector("#nigeria");
  let nigeriaDate = nigeriaElement.querySelector(".date");
  let nigeriaTime = nigeriaElement.querySelector(".time");
  let nigeriaTimeZone = moment().tz("Africa/Lagos");
  nigeriaDate.innerHTML = nigeriaTimeZone.format("MMMM D, YYYY");
  nigeriaTime.innerHTML = nigeriaTimeZone.format(
    "hh:mm:s [<small>]A[</small>]"
  );

  let ghanaElement = document.querySelector("#ghana");
  let ghanaDate = ghanaElement.querySelector(".date");
  let ghanaTime = ghanaElement.querySelector(".time");
  let ghanaTimeZone = moment().tz("Africa/Accra");
  ghanaDate.innerHTML = ghanaTimeZone.format("MMMM D, YYYY");
  ghanaTime.innerHTML = ghanaTimeZone.format("hh:mm:s [<small>]A[</small>]");

  let londonElement = document.querySelector("#london");
  let londonDate = londonElement.querySelector(".date");
  let londonTime = londonElement.querySelector(".time");
  let londonTimeZone = moment().tz("Europe/London");
  londonDate.innerHTML = londonTimeZone.format("MMMM D, YYYY");
  londonTime.innerHTML = londonTimeZone.format("hh:mm:s [<small>]A[</small>]");
}

displayTime();
setInterval(displayTime, 1000);
