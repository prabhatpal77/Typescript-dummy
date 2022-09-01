// enum in TS
enum Days{
    sun, mon, tue, wed, thus, fri, sat
    // mon = "mon", tue = "tue"
    // sun = 10
}
function whichDay(day:Days){
    return day
}
// whichDay = Days.mon
console.log(whichDay(Days.mon))