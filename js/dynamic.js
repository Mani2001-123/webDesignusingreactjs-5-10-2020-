function getjson(file,callback)
{
var xhr = new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function()
{
if(xhr.readyState === 4 && xhr.status === 200)
{
callback(xhr.responseText);
}
}
xhr.send();
}

getjson("./data.json",function(text)
{
var d=JSON.parse(text);
console.log(d);
basics(d.details);
})

var main=document.querySelector(".main-div");

function basics(s){

	var n=document.createElement("h1");
	n.textContent=s.name;
	main.appendChild(n);
	n.classList.add("my-name");

	var n1=document.createElement("h1");
	n1.textContent=s.email;
	main.appendChild(n1);
	n1.classList.add("my-name");

	var n2=document.createElement("h1");
	n2.textContent=s.phone;
	main.appendChild(n2);
	n2.classList.add("my-name");

	var n3=document.createElement("h1");
	n3.textContent=s.hobbies;
	main.appendChild(n3);
	n3.classList.add("my-name");
}