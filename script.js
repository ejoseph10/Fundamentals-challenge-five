//Header Date Display
var currentDay = $("#currentDay");
currentDay.text (moment().format('dddd, MMM Do YYYY'));
//Fetch Current Hour
var currentHour = moment().hour();
//Formatted Text Areas
$(".time-block").each(function() {
    //Hour Value of Each Time Block
    var blockHour = $(this).attr("id").split("-")[1];
    //Saved Value from Local Storage & Display of Correct Time Block's Text Area
    var textEntry = localStorage.getItem(blockHour);
    var textArea = $(this).find(".description");
    textArea.val (textEntry);
    //Current hour compared to time block, Add appropriate class to display the correct corresponding color
    if (blockHour < currentHour){
        $(this).find(".description").addClass("past");
    }else if(blockHour == currentHour){
        $(this).find(".description").addClass("present");
    }else{
        $(this).find(".description").addClass("future");
     }
});
//Save Button Clicked Function
$(".saveBtn").on("click", function(){
    //Key
    var key = $(this).parent().attr("id").split("-")[1];
    //Value
    var value = $(this).parent().find(".description").val();
    //Value to Local Storage & Save Key
    localStorage.setItem(key,value);
});