// For the given parameter, retrieves the value
// Eg: given the URL https://abc.xyz?s=1&e=2
//      and the parameter "s" then "1" would be returned
function GetURLParameter(parameter, url) {
    var urlVariables = url.split('&');
    for (var i = 0; i < urlVariables.length; i++) {
        var parameterName = urlVariables[i].split('=');
        if (parameterName[0] == parameter) {
            return parameterName[1];
        }
    }
}

// Takes three date objects and calculates the percentage progress of intermediateDate
// between startDate and endDate.
// Percentage is rounded to one decimal place.
function calculatePercentageDifference(startDate, intermediateDate, endDate) {
    if(startDate == undefined || endDate == undefined || intermediateDate == undefined ||
        intermediateDate < startDate
        ) { return 0; }
    if(intermediateDate > endDate) { return 100; }
    const timePeriod = endDate - startDate;
    const completedPeriod = intermediateDate - startDate;
    const percentage = ( completedPeriod / timePeriod ) * 100;
    const percentageRounded = Math.round(percentage*10)/10;
    return percentageRounded;
}