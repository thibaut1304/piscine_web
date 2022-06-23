var i = 0;

function test() {
	++i;
	if (i == 3)
		i = 0;
	let obj = document.getElementById('ballon');
	let color = ['red', 'green', 'blue'];
	let width = document.getElementById('ballon').offsetWidth;
	let ret = width + 10;
	if (width > 420) {
		obj.style.width = "200px";
		obj.style.height = "200px";
			return ;
	}
	obj.style.height = ret+"px";
	obj.style.width = ret+"px";
	obj.style.backgroundColor = color[i%3];
}

var y = 0;
function down() {
	++y;
	let obj = document.getElementById('ballon');
	let width = document.getElementById('ballon').offsetWidth;
	let color = ['blue', 'green', 'red'];
	let ret = width -5; 
	obj.style.backgroundColor = color[y%3];
	if (width <= 200)
		return ;
	obj.style.height = ret+"px";
	obj.style.width = ret+"px";
}