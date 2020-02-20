


$(document).ready(function(){


/*das geht
    $("#trigger").click(function() {
        $("#myTab").toggle(1000);
    });*/


    let nav = document.getElementById("myTab");
    let trigger = document.getElementById("trigger");

    trigger.addEventListener("click", function () {
        $(nav).toggle();
    });


});
