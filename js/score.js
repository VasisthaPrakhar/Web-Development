let p1=document.querySelector("#p1");
let p2=document.getElementById("p2");
let reset=document.querySelector("#reset")
let p1dis=document.querySelector("#p1dis")
let p2dis=document.querySelector("#p2dis")
var num=document.querySelector("input");
let p=document.querySelector("p span");
let p1score=0,p2score=0;
let gameOver=false;
let winscore= 5;

p1.addEventListener("click",function(){
	if (!gameOver) {
		p1score++;
		if(p1score===winscore)
		{
			p1dis.classList.add("winner");
			gameOver=true;
		}
		p1dis.textContent = p1score;	
	}	
})
p2.addEventListener("click",function(){
	if (!gameOver) {
		p2score++;
	if(p2score===winscore)
		{
			p2dis.classList.add("winner");
			gameOver=true;
		}
	p2dis.textContent = p2score;
	}	
})
reset.addEventListener("click",function(){
	p1score=0;
	p2score=0
	p1dis.textContent = p1score;
	p2dis.textContent = p2score;
	p1dis.classList.remove("winner");
	p2dis.classList.remove("winner");
	gameOver=false;
})
num.addEventListener("change",function(){
	p.textContent=this.value;
	winscore=Number(this.value);
	p1score=0;
	p2score=0
	p1dis.textContent = p1score;
	p2dis.textContent = p2score;
	p1dis.classList.remove("winner");
	p2dis.classList.remove("winner");
	gameOver=false;
})