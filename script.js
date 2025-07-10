//your JS code here. If required.
const val = document.getElementById("counter");
const button = document.getElementById("incrementBtn");

button.addEventListener("click",()=>{
	let counter = parseInt(val.innerText);
	val.innerText = counter+1;
	
});