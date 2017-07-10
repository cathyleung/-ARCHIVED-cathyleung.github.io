/**
 * Created by cathyleung on 2017-04-25.
 */
/*
var aboutMe = document.getElementById("about-me-text");
aboutMe.style.marginTop = $("#menu").outerHeight() + "px";
console.log(aboutMe.style.marginTop);
*/

$(".proj1-info").hide();
$("#proj1-label").click(function() {
    if( $(".proj1-info").is(":visible")) {
        $(".proj1-info").hide();
    } else {
        $(".proj1-info").show();
        $(".proj2-info").hide();
    }
});

$(".proj2-info").hide();
$("#proj2-label").click(function() {
    if( $(".proj2-info").is(":visible")) {
        $(".proj2-info").hide();
    } else {
        $(".proj2-info").show();
        $(".proj1-info").hide();
    }
});


