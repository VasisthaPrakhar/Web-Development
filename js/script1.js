
// let button=document.querySelector("button");
// let ispurple=false;
// button.addEventListener("click", function(){
// 	if(ispurple === false)
// 	{
// document.body.style.background="purple";
// ispurple=true;
// }
// else{
// 	document.body.style.background="white";
// 	ispurple=false;
// }

// });
let button=document.querySelector("button");
button.addEventListener("click", function(){
	document.body.classList.toggle("purple");
});