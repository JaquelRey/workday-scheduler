// variable for current date
let todaysDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todaysDate);

$(document).ready(function () {
    $(".saveInput").on("click", function () {
        // variables for related textarea and hour
        const input = $(this).siblings("textarea").val();
        const time = $(this).parent().attr("id");
        // save locally
        if (input !== null) {
            localStorage.setItem(time, input);
        }
    })

    function getTime() {
        // get hours then loop thru time blocks
        const theTime = moment().hour();
        console.log(`The current hour is ${theTime}`);

        $(".time-block").each(function () {
            let timeBlock = parseInt($(this).attr("id"));
            if (timeBlock < theTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past")
            } else if (timeBlock === theTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    // check for items in storage
    $("#12 .userinput").val(localStorage.getItem("12"));
    $("#13 .userinput").val(localStorage.getItem("13"));
    $("#14 .userinput").val(localStorage.getItem("14"));
    $("#15 .userinput").val(localStorage.getItem("15"));
    $("#16 .userinput").val(localStorage.getItem("16"));
    $("#17 .userinput").val(localStorage.getItem("17"));
    $("#18 .userinput").val(localStorage.getItem("18"));
    $("#19 .userinput").val(localStorage.getItem("19"));
    $("#20 .userinput").val(localStorage.getItem("20"));
    $("#21 .userinput").val(localStorage.getItem("21"));


    let values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }

    if (values.toString() === "") {
        console.log("No items in storage!");
    } else {
        console.log(`All stored items: ${values}`)
    }

    getTime();

})

