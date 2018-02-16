var index = 0;
nameArray = [];

// console.log("Step 2");


$(document).ready(function () {
    // console.log("step 3");
    goGetNames();
    // console.log("step 4");


});


function goGetNames() {
    // console.log("step 5");
    $.ajax({
        type : "GET",
        url : "/popcorn",
        success : function (data) {
            // console.log(data);
        nameArray = data.people;
        updateCell();
        }
    });
    // console.log("step 6");
    enable();
}

function enable() {
    // console.log("Enable");
    $("#prevBtn").on("click", function () {
        // console.log("Prev");
        --index < 0 && (index = nameArray.length - 1);
        updateCell();
    });

    $("#nextBtn").on("click", function () {
        // console.log("Next");
        ++index >= nameArray.length && (index = 0);
        updateCell();
    });

}

function updateCell() {
    // console.log("step 8");
    for (var i = 1; i < 11; i++)
    // console.log("update cell");
    $("#"+i).removeClass("highlight");
    $("#"+(index+1)).addClass("highlight");
    $("#textName").text(nameArray[index].name);
    $("#textFeedback").text(nameArray[index].city);
    $("#"+(index)).on("click", function () {
        $("#"+i).toggleClass("change");
    });
}
