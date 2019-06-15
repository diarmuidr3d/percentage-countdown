// Dependancy: utilities.js

const url = window.location.search.substring(1);

var currentDate = new Date().toUTCString();
const start = GetURLParameter("start", url);
const end = GetURLParameter("end", url);

const percentage = calculatePercentageDifference(start, currentDate, end);

document.getElementById("percentage").innerHTML = `${percentage}%`;