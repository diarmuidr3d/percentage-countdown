/** For the given parameter, retrieves the value
 * Eg: given the URL https://abc.xyz?s=1&e=2
 * and the parameter "s" then "1" would be returned
 */
function GetURLParameter(parameter, url) {
    var urlVariables = url.split('&');
    for (var i = 0; i < urlVariables.length; i++) {
        var parameterName = urlVariables[i].split('=');
        if (parameterName[0] == parameter) {
            return parameterName[1];
        }
    }
}

/**
 * Takes three date strings and calculates the percentage progress of intermediateDate
 * between startDateStr and endDate.
 * Percentage is rounded to one decimal place.
 */
function calculatePercentageDifference(startDateStr, intermediateDateStr, endDateStr) {
    if(startDateStr == undefined || endDateStr == undefined || intermediateDateStr == undefined) 
        { return 0; }
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    const interDate = new Date(intermediateDateStr);
    if(interDate > endDate) { return 100; }
    if(interDate < startDate) { return 0; }
    const timePeriod = endDate - startDate;
    const completedPeriod = interDate - startDate;
    const percentage = ( completedPeriod / timePeriod ) * 100;
    const percentageRounded = Math.round(percentage*10)/10;
    return percentageRounded;
}