$(document).ready(function() {
    $(".hide").click(function () {
        $("p").hide(1000);
    });
    $(".show").mouseover(function () {
        $("p").show();
        $(alert("Mouse over"));
    })
    $("button").click(function(){
        $.getJSON("http://127.0.0.1:8081/goats-location", function(data) {
            console.log(data)
            var html = [];

            /* loop through array */
            html.push("<table id=\"table1\"><tr><th>ID</th><th>Lon</th><th>Lat</th></tr>");
            $.each(data, function(index, d) {
                html.push("<tr><td>", d.identifier, "</td><td>", d.lon, "</td><td>", d.lat, "</td></tr>");
            });
            html.push("</table>");
            $("body").append(html.join(''));
        });
    });
})