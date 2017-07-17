$(".pc-wrapper").on('mousewheel', function() {
    $(".scroll-gif").css({"opacity": "0", "transition": "opacity 0.5s ease-in-out"});
});

$(window).on('beforeunload', function () {
    $(".slideshow").scrollTop(0);
});
$(".slideshow").first().scroll(function (e) {
    adjustImages();
});
$(window).resize(function () {
    adjustImages();
});

function adjustImages() {
    var wHeight = $(window).height();
    var wWidth = $(window).width();
    var scrollTopVar = $(".slideshow").scrollTop();
    $("#slideshowInner").css("height", (19 * 1.2 * wHeight) + "px");
    $(".image1").css("top", Math.max(0.5 * wHeight - ($(".image1").height() / 2), Math.min(wHeight, (wHeight * 1.2 * 1) - scrollTopVar)));
    $(".image1").css("left", 0.5 * wWidth - ($(".image1").width() / 2));
    $(".image2").css("top", Math.max(0.5 * wHeight - ($(".image2").height() / 2), Math.min(wHeight, (wHeight * 1.2 * 2) - scrollTopVar)));
    $(".image2").css("left", 0.5 * wWidth - ($(".image2").width() / 2));
    $(".image3").css("top", Math.max(0.5 * wHeight - ($(".image3").height() / 2), Math.min(wHeight, (wHeight * 1.2 * 3) - scrollTopVar)));
    $(".image3").css("left", 0.5 * wWidth);
    $(".image4").css("top", Math.max(0.5 * wHeight - ($(".image4").height() / 2), Math.min(wHeight, (wHeight * 1.2 * 4) - scrollTopVar)));
    $(".image4").css("left", 0.5 * wWidth);
    $(".image5").css("top", Math.max(0.5 * wHeight - ($(".image5").height() / 2), Math.min(wHeight, (wHeight * 1.2 * 5) - scrollTopVar)));
    $(".image5").css("left", 0.5 * wWidth - $(".image5").width());
    $(".image6").css("top", Math.max(0.02 * wHeight, Math.min(wHeight, (wHeight * 1.2 * 6) - scrollTopVar)));
    $(".image6").css("left", 0.5 * wWidth);
    $(".image7").css("top", Math.max(0.3 * wHeight - ($(".image7").height() / 2), Math.min(wHeight, (wHeight * 1.2 * 7) - scrollTopVar)));
    $(".image7").css("left", 0.5 * wWidth - $(".image7").width());
    $(".image8").css("top", Math.max(0.5 * wHeight - ($(".image8").height() / 2), Math.min(wHeight, (wHeight * 1.2 * 8) - scrollTopVar)));
    $(".image8").css("left", 0.5 * wWidth - ($(".image8").width() / 2));
    $(".image9").css("top", Math.max(0.5 * wHeight, Math.min(wHeight, (wHeight * 1.2 * 9) - scrollTopVar)));
    $(".image9").css("left", 0.5 * wWidth - ($(".image9").width() / 2));
    $(".image10").css("top", Math.max(0.5 * wHeight - ($(".image10").height() / 2), Math.min(wHeight, (wHeight * 1.2 * 10) - scrollTopVar)));
    $(".image10").css("left", 0.92 * wWidth - $(".image10").width());
    $(".image11").css("top", Math.max(0.5 * wHeight - ($(".image10").height() / 2), Math.min(wHeight, (wHeight * 1.2 * 11) - scrollTopVar)));
    $(".image11").css("left", 0.92 * wWidth - $(".image11").width());
    $(".image12").css("top", Math.max(0.5 * wHeight - ($(".image12").height() / 2), Math.min(wHeight, (wHeight * 1.2 * 12) - scrollTopVar)));
    $(".image12").css("left", 0.5 * wWidth - ($(".image12").width() / 2));
    $(".image13").css("top", Math.max(0.5 * wHeight - ($(".image13").height() / 2), Math.min(wHeight, (wHeight * 1.2 * 13) - scrollTopVar)));
    $(".image13").css("left", 0.5 * wWidth - ($(".image12").width() / 2) - ($(".image13").width()));
    $(".image14").css("top", Math.max(0.5 * wHeight - ($(".image14").height() / 2), Math.min(wHeight, (wHeight * 1.2 * 14) - scrollTopVar)));
    $(".image14").css("left", 0.5 * wWidth - ($(".image14").width() / 2));
    $(".image15").css("top", Math.max(0.5 * wHeight - ($(".image15").height() / 2), Math.min(wHeight, (wHeight * 1.2 * 15) - scrollTopVar)));
    $(".image15").css("left", 0.5 * wWidth + ($(".image12").width() / 2));
    $(".image16").css("top", Math.max(0.02 * wHeight, Math.min(wHeight, (wHeight * 1.2 * 16) - scrollTopVar)));
    $(".image16").css("left", 0.5 * wWidth + ($(".image12").width() / 2) - $(".image16").width());
    $(".image17").css("top", Math.max(0.5 * wHeight - ($(".image17").height() / 2), Math.min(wHeight, (wHeight * 1.2 * 17) - scrollTopVar)));
    $(".image17").css("left", 0.5 * wWidth - ($(".image17").width() / 2));
    $(".image18").css("top", Math.max(0.02 * wHeight, Math.min(wHeight, (wHeight * 1.2 * 18) - scrollTopVar)));
    $(".image18").css("left", 190 + 0.5 * wWidth - ($(".image12").width() / 2) - ($(".image18").width()));
    $(".image19").css("top", Math.max(0.02 * wHeight, Math.min(wHeight, (wHeight * 1.2 * 18) - scrollTopVar)));
    $(".image19").css("left", 0.5 * wWidth - $(".image19").width());
}