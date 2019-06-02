$(".path").hide();
$(".pathb1").hide();
$(".pathb2").hide();
$(".pathb3").hide();
$(".patha1").hide();
$(".patha2").hide();
$(".patha3").hide();
$(".end").hide();

$(".k1").click(function() {
    $(".k1").hide();
    $("body").css("background-image","url(https://images-na.ssl-images-amazon.com/images/I/51VFV3pHfwL._SX466_.jpg)");
    $(".path").show();
    $(".pick1").show();
});

$(".deadend1").click(function() {
    $("body").hide();
    $("body").css("background-image","url(https://image.shutterstock.com/image-vector/icon-symbolizing-trying-again-colorful-260nw-457723852.jpg)");
    $("body").show();
    $(".deadend1").hide();
    $(".deadend2").hide();
    $(".r").hide();
    $("p").text("Dead End");
});

$(".deadend2").click(function() {
    $("body").hide();
    $("body").css("background-image","url(https://addictedtohorrormovies.files.wordpress.com/2017/08/monster-project-image.jpg)");
    $("body").show();
    $(".deadend1").hide();
    $(".deadend2").hide();
    $(".r").hide();
    $("p").text("You run into a monster, try again.");
});

$(".pathb").click(function() {
    $(".path").hide();
    $(".pathb1").show();
    $("p").text("Congrats you picked the right door, pick again");
});

$(".b1").click(function() {
    $(".pathb1").hide();
    $(".pathb2").show();
    $("p").text("You seem to have pick the right door again!");
});

$(".b2").click(function() {
    $(".pathb2").hide();
    $(".pathb3").show();
    $("p").text("Would I make the right door the same three times in a row?");
});

$(".b3").click(function() {
    $(".pathb3").hide();
    $(".end").show();
    $("p").text("Congrats!");
    $("body").css("background-image","url(http://bestanimations.com/Holidays/Fireworks/fireworks/ba-large-white-firework-gif-pic.gif)");
        $(".G1").show();
        $(".RE").hide();
        $(".hide").hide();
});

$(".patha").click(function() {
    $(".path").hide();
    $(".patha1").show();
    $("p").text("Keep on going!");
});

$(".a1").click(function() {
    $(".patha1").hide();
    $(".patha2").show();
    $("p").text("Again!");
});

$(".a2").click(function() {
    $(".patha2").hide();
    $(".patha3").show();
    $("p").text("Hmm you got it right again!");
});
