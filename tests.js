QUnit.test( "Verify Percentage Date Difference Calculation", function( assert ) {
    var start = "2019-05-11T07:00:00";
    var end = "2019-09-18T14:00:00";
    var inter = "2019-06-15T09:25:00";
    var percent = calculatePercentageDifference(start, inter, end);
    assert.equal(percent, 26.9, "Date Difference Calculated Correctly for all parms" );

    start = undefined;
    var percent = calculatePercentageDifference(start, inter, end);
    assert.equal(percent, 0, "Verify percent is 0 for undefined start" );

    var start = "2019-05-11T07:00:00";
    var end = undefined;
    var percent = calculatePercentageDifference(start, inter, end);
    assert.equal(percent, 0, "Verify percent is 0 for undefined end" );

    var end = "2019-09-18T14:00:00";
    var inter = undefined;
    var percent = calculatePercentageDifference(start, inter, end);
    assert.equal(percent, 0, "Verify percent is 0 for undefined intermediate" );

    var inter = "2019-09-19T09:25:00";
    var percent = calculatePercentageDifference(start, inter, end);
    assert.equal(percent, 100, "Verify percent is 100 for intermediate > end" );

    var inter = "2019-05-10T09:25:00";
    var percent = calculatePercentageDifference(start, inter, end);
    assert.equal(percent, 0, "Verify percent is 0 for intermediate < start" );
  });

  QUnit.test( "Verify url parameter retrieval", function( assert ) {
    var url = "start=2019-05-11T07:00:00&end=2019-09-18T14:00:00"
    
    const start = GetURLParameter("start", url);
    assert.equal(start, "2019-05-11T07:00:00", "Verify first param is retrieved" );

    const end = GetURLParameter("end", url);
    assert.equal(end, "2019-09-18T14:00:00", "Verify subsequent param is retrieved" );

    const random = GetURLParameter("random", url);
    assert.equal(random, undefined, "Verify undefined is returned for non-existant params");

    url = "?end=2019-09-18T14%3A00%3A00&start=2019-05-11T07%3A00%3A00";
    const startDecoded = GetURLParameter("start", url);
    assert.equal(startDecoded, "2019-05-11T07:00:00", "Verify url parms are decoded" );
  });

  QUnit.test( "Verify dateTime string building", function( assert ) {
    var date = "2019-05-11";
    var time = "07:00:00";
    const dateTime = buildDateTimeString(date, time);
    assert.equal(dateTime, "2019-05-11T07:00:00", "Verify dateTime is built for all parameters" );

    time = undefined;
    const dateTimeZeroTime = buildDateTimeString(date, time);
    assert.equal(dateTimeZeroTime, "2019-05-11T00:00:00", "Verify time is set to 00:00 where it is undefined" );

    date = undefined;
    time = "07:00:00";
    const todaysDate = new Date().toJSON().slice(0,10);
    const dateTimeUndefDate = buildDateTimeString(date, time);
    assert.equal(dateTimeUndefDate, `${todaysDate}T${time}`, "Verify todays date is used where date is undefined" );
  });