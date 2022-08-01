//many possibilities:
//add/remove class / toogle
//btn change from "read more" to "read less" //btn upp and btn down
//flipkart, with title one side, details on the other

$(".header").click(function () {
    $header = $(this);
    $content = $header.next();
    $(".content").not($content).slideUp().prev().text("Read more ▼");
    $content.slideToggle(500, function () {
        $header.text(function () {
            return $content.is(":visible") ? "Read less ▲" : "Read more ▼";
        });
    });
});