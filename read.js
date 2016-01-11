var fs = require('fs');
var Xray = require("x-ray");

fs.readFile('sites.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");
    for(i in array) {
         start = new Date();
        for (var i = 0; i < 1000; i++) {
          Math.sqrt(i);
        }

        var xray = new Xray();

        xray(array[0], 'title')(function(err, title) {
        
        end = new Date();

        console.log((end.getTime() - start.getTime())+ "ms " + title);
        

        })
       
    }
});