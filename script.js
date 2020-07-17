//global variables
var dayDiv = $("#currentDay");
var dayContainer = $('.container');
$(document).ready(function(){
// show date in header
var formatDay = moment().format("dddd, MMMM Do YYYY");
dayDiv.text(formatDay);

//calling function to build hour table
buildTable();

//  for loop to build table from row
function buildTable() {
    for (var i = 8; i <= 17; i++) {
        buildRow(i);
    }
}

// building a row for each hour
function buildRow(hour) {
    // variables 
    var timeObj = moment(hour, "H");
    var parent = $('<div class="row time-block">');
    var timeClass = "past";
    
    // assigning colors to each row to signify past, present, or future 
    if (moment().isSame(timeObj, 'hour')) {
        timeClass = "present";
    }
    else if (moment().isBefore(timeObj, "hour")) {
        timeClass = "future";
    }
    // time div 
    var time = $('<div class="hour col-1">')
    time.text(timeObj.format("h A"));
    
    //textarea 
    var textarea = $('<textarea id="user-input" class="description col-10">')
    textarea.addClass(timeClass);
    textarea.attr("data-value", hour);
    
    // saving text on refresh
    var storedItem = textarea.text(localStorage.getItem(hour));
    console.log(storedItem);

    // creating save button
    var saveBtn = $('<button class="saveBtn col-1">');
    saveBtn.text("SAVE");
    
    // setting divs to parent containers 
    parent.append(time, textarea, saveBtn);
    dayContainer.append(parent);
    
    // save 
    saveBtn.on("click", function (event) {
        var thisBtn = $(this);
        console.log(thisBtn);
        var textarea = $(this).prev();
        
        var hour = textarea.attr("data-value");
        
        event.preventDefault();
        localStorage.setItem(hour, textarea.val());
        
    });
};
});