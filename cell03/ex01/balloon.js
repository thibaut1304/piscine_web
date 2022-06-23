function changeSize (_divId_, _newSize_){
	if ( document.getElementById(_divId_) != null ){
	   document.getElementById(_divId_).style.width = _newSize;
	}
   }

function test() {
	let obj = document.getElementById('ballon');
	// let color = ['red', 'green', 'blue'];
	let width = document.getElementById('ballon').offsetWidth;
	let ret = width + 10;
	obj.style.height = ret+"px";
	obj.style.width = ret+"px";
	let element = document.querySelector('ballon');
	let color = getComputedStyle('ballon', 'width');
	alert("couleur : " + color);
	// if (obj.style.backgroundColor == "red")
		// obj.style.backgroundColor = color[1];
	// alert(ret)
	// obj.style.height = "500px"
	// obj.style.width = "500px"
}
