
var index = 0;
var i = 0;

window.onload = () => {
	index = 1;
}

function remove() {
	let text = "OK for remove ?\nOK or Cancel.";
	if (confirm(text) == true) {
		this.remove();
	} 
}

function test(_text) {
	let obj = document.getElementById('ft_list');
	let div = document.createElement("div");
	div.classList.add("to_do"); //Ajouter class
	// div.onclick = function() {alert("Hey !");}
	// div.setAttribute("onclick","alert('Hey !');");
	div.addEventListener("click", remove);
	div.textContent = _text + " " + ++i; // ajouter content in div !
	obj.insertBefore(div, obj.children[1]);
	// obj.appendChild(div, ft_list);
	// document.cookie = 
}

function load_window () {
	if (!index)
		return ;
	let text = prompt("Enter a to do");
	test(text);
	// document.getElementById("ft_list").innerHTML = text;
}

// function cssLayout() {
//     document.getElementById("css").href = this.value;
// }


// function setCookie(){
//     var date = new Date("Februari 10, 2013");
//     var dateString = date.toGMTString();
//     var cookieString = "Css=document.getElementById("css").href" + dateString;
//     document.cookie = cookieString;
// }

// function getCookie(){
//     alert(document.cookie);
// }