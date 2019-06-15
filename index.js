// Dependancy: utilities.js

const url = window.location.search.substring(1);

var startDate = new Date(GetURLParameter("start", url));
var endDate = new Date(GetURLParameter("end", url));
var currentDate = new Date();

const percentage = calculatePercentageDifference(startDate, currentDate, endDate);

document.getElementById("percentage").innerHTML = percentage.toString() + "%";