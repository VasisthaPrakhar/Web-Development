let numsq=6;
let colors = generate(numsq);

var squares=document.querySelectorAll(".square");
var pickcolor=pick();
let colordis = document.getElementById("colordis");
let msgdis=document.querySelector("#msg");
let h1=document.querySelector("h1");
let reset=document.querySelector("#reset");
let hard=document.querySelector("#hard");
let easy=document.querySelector("#easy");

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numsq=3;
	colors = generate(numsq);
	pickcolor=pick();
	colordis.textContent=pickcolor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i]){
		squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}

	}
})

hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numsq=6
	colors = generate(numsq);
	pickcolor=pick();
	colordis.textContent=pickcolor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
})

reset.addEventListener("click",function(){
	colors=generate(numsq);
	pickcolor=pick();
	colordis.textContent=pickcolor;
	this.textContent="New Colors"
	msgdis.textContent="";
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
})

colordis.textContent = pickcolor;
for(let i = 0 ; i < squares.length ; i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		let clickcolor=this.style.backgroundColor;
		if (clickcolor === pickcolor)
		{
			msgdis.textContent="Correct!!!";
			change(clickcolor);
			h1.style.backgroundColor = clickcolor;
			reset.textContent="PLAY AGAIN ?"
		}
		else{
			this.style.backgroundColor="#232323";
			msgdis.textContent="Try Again!!";
		}
	})
}

function change(color){
	for(let i = 0 ; i < squares.length ; i++)
	{
		squares[i].style.backgroundColor=color;
	}
}

function pick(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generate(num){
	var arr=[];

	for(var i=0;i<num;i++){
		arr.push(randomcol());
	}

	return arr;
}

function randomcol(){
	let r=Math.floor(Math.random() * 256);
	let g=Math.floor(Math.random() * 256);
	let b=Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}