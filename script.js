//global variables
var dayDiv = $("#currentDay");
var dayContainer = $('.container');

// show date in header
var formatDay = moment().format("dddd, MMMM Do YYYY");
dayDiv.text(formatDay);

//calling function to build hour table
buildTable();

//  for loop to build table from row
function buildTable() {
    for (var i = 8; i <= 17; i++) {
        buildRow(i)
    }
}

// building a row for each hour
function buildRow(hour) {
    var timeObj = moment(hour, "H")
    var parent = $('<div class="row time-block">')
    var timeClass = "past"

    if (moment().isSame(timeObj, 'hour')) {
        timeClass = "present"
    }
    else if (moment().isBefore(timeObj, "hour")) {
        timeClass = "future"
    }

    var time = $('<div class="hour col-1">')
    time.text(timeObj.format("h A"))

    var textarea = $('<textarea id="" class="description col-10">')
    textarea.addClass(timeClass)
    textarea.val(schedule[hour])

    var saveBtn = $('<button class="saveBtn col-1">')
    saveBtn.click(handleClick)

    var icon = $('<i class="fas fa-save">')

    saveBtn.append(icon);
    parent.append(time, textarea, saveBtn)
    dayContainer.append(parent)
};