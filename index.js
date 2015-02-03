// http://stackoverflow.com/questions/6847697/how-to-return-value-from-an-asynchronous-callback-function

function Name (name, fn) {
	this.uppercase = function (name, fn) {
		setTimeout(fn(name.toUpperCase()), 1000);
	}
}

var a = new Name();
a.uppercase ("Claus", function(name) {
	console.log(name);
});
process.exit();
