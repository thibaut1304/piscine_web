
function setCookie(cname,cvalue,exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function restoreCookies() {
    if (!document.cookie)
        return ;
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
        const value = cookie.split("=")
        test(value[1]);
		console.log(value[1]);
    }
}

function remove() {
	let text = "OK for remove ?\nOK or Cancel.";
	if (confirm(text) == true) {
		let x = this.getAttribute('to_do');
		document.cookie = x+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		this.remove();
	}
}

function test(_text) {
	let obj = document.getElementById('ft_list');
	let div = document.createElement("div");
	div.classList.add("to_do"); //Ajouter class
	div.setAttribute("to_do", _text);
	div.addEventListener("click", remove);
	div.textContent = _text; // ajouter content in div !
	obj.insertBefore(div, obj.children[1]);
	setCookie(_text, _text, 30);
}

function load_window () {
	let text = prompt("Enter a to do");
	test(text);
}

$(document).ready(function () {
	$(".new").click(function() {
		load_window();
	});
	window.onload = restoreCookies();
});