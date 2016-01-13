var fs = require("fs"),
    XRay = require("x-ray");

fs.readFile("sites.txt", function(err, data) {
    if (err) {
        throw err;
    }
    var arr = data.toString()
        .split("\n")
        .map(function(item) {
            return item.trim();
        })
        .filter(function(item) {
            return item.length > 0;
        });
    var start = new Date(),
        xray = new XRay();
    arr.forEach(function(url) {
        xray(url, "title")(function(err, title) {
            var end = new Date();
            console.log((end.getTime() - start.getTime()) + "ms " + title);
        });
    });
});