/* jshint browser: true */
/* jshint esversion: 6  */
/*globals $:false */

var title = localStorage.getItem("title");

//var title = "true";
//WELCOME RESET \/ \/ \/
//localStorage.setItem("title", "true");

if(title === null) title = "false";
$(document).ready(function() {
    if(title == "true"){
        $('#site').hide();
        $('body').click(function() {
            $('#welcome').fadeOut(2000, function() {
                title = "false";
                localStorage.setItem("title", title);
                $('#site').fadeIn(1600);
            });
        });
    } else {
        $("#welcome").hide();
    }
    
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 170) {
            $('.menu').addClass('fixed');
        } else {
            $('.menu').removeClass('fixed');
        }
    });
});