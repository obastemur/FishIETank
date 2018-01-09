var Browser = require('zombie')
const browser = new Browser();
var path = process.cwd();
browser.visit('file://' + path + '/FishIE%20Tank.html', function(err){
    if (err) {
        console.error("Error!: ", err)
        process.exit(1)
    } else {
        console.log("PASS")
    }
});