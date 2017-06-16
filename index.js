$(document).ready(function() {
    $("#tree").click(function() {
        var username = $("#one").val();
        var password = $("#two").val();
        console.log(username);
        if (username == "123" && password == "123") {
            $("#four").show();
        }
    });
    $("#six").click(function() {

        $("#five").innerHTML = "Welcome " + username;
        $("#five").style.fontSize = "300px";



    });
});
