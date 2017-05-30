function updateOutput() {
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() +
        "</style></head><body>" + $("#htmlPanel").val()) + "</body></html>";

    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());

}


$(".toggleButtons").hover(function () {
    $(this).addClass("hightlightedButton");
},
    function () {
        $(this).removeClass("hightlightedButton");
    });

$(".toggleButtons").click(function () {
    $(this).toggleClass("active");
    $(this).removeClass("highlightedButton");
    var panelID = $(this).attr("id") + "Panel";
    $("#" + panelID).toggleClass("hidden");
    var activePanels = 4 - $('.hidden').length;
    $(".panel").width($(window).width() / activePanels - 3);
});

$(".panel").height($(window).height() - $("#header").height() - 62);

$(".panel").width($(window).width() / 2 - 4);

updateOutput();

$("textarea").on('change keyup paste', function () {
    updateOutput();
});