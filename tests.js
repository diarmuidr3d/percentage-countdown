QUnit.test( "Verify Percentage Date Difference Calculation", function( assert ) {
    var start = new Date("2019-05-11T07:00:00");
    var end = new Date("2019-09-18T14:00:00");
    var inter = new Date("2019-06-15T09:25:00");
    var percent = calculatePercentageDifference(start, inter, end);
    console.log(percent);
    assert.equal(percent, 26.9, "Date Difference Calculated Correctly for all parms" );

    start = undefined;
    var percent = calculatePercentageDifference(start, inter, end);
    assert.equal(percent, 0, "Verify percent is 0 for undefined start" );

    var start = new Date("2019-05-11T07:00:00");
    var end = undefined;
    var percent = calculatePercentageDifference(start, inter, end);
    assert.equal(percent, 0, "Verify percent is 0 for undefined end" );

    var end = new Date("2019-09-18T14:00:00");
    var inter = undefined;
    var percent = calculatePercentageDifference(start, inter, end);
    assert.equal(percent, 0, "Verify percent is 0 for undefined intermediate" );

    var inter = new Date("2019-09-19T09:25:00");
    var percent = calculatePercentageDifference(start, inter, end);
    assert.equal(percent, 100, "Verify percent is 100 for intermediate > end" );

    var inter = new Date("2019-05-10T09:25:00");
    var percent = calculatePercentageDifference(start, inter, end);
    assert.equal(percent, 0, "Verify percent is 0 for intermediate < start" );
  });

  QUnit.test( "Verify url parameter retrieval", function( assert ) {
    const url = "start=2019-05-11T07:00:00&end=2019-09-18T14:00:00"
    
    const start = GetURLParameter("start", url);
    assert.equal(start, "2019-05-11T07:00:00", "Verify first param is retrieved" );

    const end = GetURLParameter("end", url);
    assert.equal(end, "2019-09-18T14:00:00", "Verify subsequent param is retrieved" );

    const random = GetURLParameter("random", url);
    assert.equal(random, undefined, "Verify undefined is returned for non-existant params");
  });