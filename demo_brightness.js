var lcd = require("./LCD_controller");

lcd.setText("    hello ------");
lcd.setText("------ world", {x:0, y:1}, false);
lcd.setColor(0, 0, 255);

var bright = true;
setInterval (function () {
	if (bright) {
		lcd.dim();
	} else {
		lcd.brighten();
	}
	bright = !bright;
}, 3000);
setTimeout(function () {
	setInterval(function() {
		if (bright) {
			lcd.setColor(0, 0, 255);
		} else {
			lcd.setColor(0, 255, 0);
		}
	}, 3000);
}, 1500);