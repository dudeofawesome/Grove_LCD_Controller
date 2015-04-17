var lcd = require("./LCD_controller");

lcd.setText("hello world");

var text = ">==@  >>";
var i = -(text.length);
setInterval (function () {
	lcd.setText((i >= 0) ? text : text.slice(-i), {x: (i >= 0) ? i : 0, y: 0}, true);
	i++;
	if (i >= 16) i = -(text.length);
}, 1000/20);