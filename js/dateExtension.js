function parseDate(input) {
  var parts = input.match(/(\d+)/g);
  // console.log(parts); 
  // Standard date array is of form Year, Month, Day, Hour, Minute, Second, Millisecond
  return new Date(parts[0], parts[1]-1, parts[2]);
}

var getMonthName = function(thisDate) {
        var m = ['January','Febuary','March','April','May','June','July','August','September','October','November','Decemeber'];
        return m[thisDate.getMonth()];
}
var getMonthNameShort = function(thisDate) {
        var m = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
        return m[thisDate.getMonth()];
}
var getDayName = function(thisDate) {
        var d = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        return d[thisDate.getDay()];
}
var getDayNameShort = function(thisDate) {
        var d = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return d[thisDate.getDay()];
}

