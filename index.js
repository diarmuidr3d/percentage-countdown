// Dependancy: utilities.js

const url = window.location.search.substring(1);

var currentDate = new Date().toUTCString();
const startTime = GetURLParameter("startTime", url);
const endTime = GetURLParameter("endTime", url);
const startDate = GetURLParameter("startDate", url);
const endDate = GetURLParameter("endDate", url);
const start = buildDateTimeString(startDate, startTime);
const start = buildDateTimeString(endDate, endTime);

// Set the start and end time to the values from the url by default, otherwise, set them to midday
document.getElementById("startTime").defaultValue = startTime || "12:00";
document.getElementById("endTime").defaultValue = endTime || "12:00";
// Set the start and end dates to the values from the url by default, otherwise, set them to today
const todaysDate = new Date().toJSON().slice(0,10);
document.getElementById("startDate").defaultValue = startDate || todaysDate;
document.getElementById("endDate").defaultValue = endDate || todaysDate;

// Calculate the percentage and set it on the UI
const percentage = calculatePercentageDifference(start, currentDate, end);
document.getElementById("percentageComplete").innerHTML = `${percentage}% Complete`;
document.getElementById("percentageRemaining").innerHTML = `${100 - percentage}% Remaining`;
document.title = `${percentage}% - Percentage Countdown Timer`