$(document).bind("mobileinit", function() {
    function addPages() {
        for (var i = 1; i < 5; i++) {
            var page = $("<div>").jqmData("role", "page").attr("id", "page" + i);
            $("<div>").attr("data-role", "header").append($("<h1>").html("Page" + i)).appendTo(page);
            $("<div>").attr("data-role", "content").append($("<p>").html("Contents for page" + i)).appendTo(page);
            $("body").append(page);
            $("<li>").append($("<a>").attr("href", "#page" + i).html("Go to page" + i)).appendTo("#list1");
        }
        $("#button1").hide();
    };
});