
    //calling by ID 
    var dayDiv = $("#currentDay");
    var textEntryOne = $("#text-entry1").val(window.localStorage.getItem("text-entry1"));
    var textEntryTwo = $("#text-entry2");
    var textEntryThree = $("#text-entry3");
    var textEntryFour = $("#text-entry4");
    var textEntryFive = $("#text-entry5");
    var textEntrySix = $("#text-entry6");
    var textEntrySeven = $("#text-entry7");
    var textEntryEight = $("#text-entry8");
    var textEntryNine = $("#text-entry9");

    // buttons
    var btnOne = $("#save1");

    // user input var
    var userInputOne = [];
    
    //showing date in header
    var formatDay = moment(formatDay).format("dddd, MMMM Do YYYY");
    var time = moment(time).format("hh:mm a");
    console.log(time);
    $(dayDiv).text(formatDay);
    
     // color coding times 
     var nine = moment(nine).format("09: a");
     console.log(nine);
     var ten = moment(ten).format("10:00 a");
     var eleven = moment(eleven).format("11:00 a");
     var twelve = moment(twelve).format("12:00 p");
     var one = moment(one).format("01:00 p");
     var two = moment(two).format("02:00 p");
     var three = moment(three).format("08: p");
     var four = moment(four).format("04:00 p");
     var five = moment(five).format("05:00 p");
    
    // 9am div
     if(time > nine) {
         $(textEntryOne).css("background-color", "gray");
     }
     if(time === nine) {
        $(textEntryOne).css("background-color", "red");
     }
     if(time < nine) {
        $(textEntryOne).css("background-color", "green");
     }

    // 10am div
     if(time > ten) {
        $(textEntryTwo).css("background-color", "gray");
    }
   
//11am div
    if(time > eleven) {
        $(textEntryThree).css("background-color", "gray");
    }
//12pm div
    if(time > twelve) {
        $(textEntryFour).css("background-color", "gray");
    }
// 3pm div test
    if(time < three) {
        $(textEntrySeven).css("background-color", "green");
        console.log(time);
     }
     
//button
     $(btnOne).click(function(event){
         event.preventDefault();
         window.localStorage.setItem(textEntryOne, textEntryOne.value);
        
        });
        console.log(textEntryOne);