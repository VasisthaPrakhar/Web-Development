// function isEven(x){
// 	if(x%2===0)
// 		{
// 			return true;
// 		}
// 	return false;
// }
function isEven(x){
	return x%2===0;
	}
function fact(x){
	if(x===0||x===1)
	{
		return 1;
	}
	return x*fact(x-1);
}
function fact1(x)
{
	let pro=1;
	for(let i=x;i>=1;i--)
	{
		pro =pro * i;
	}
	return pro;
}
function kts(str)
{
	// for (var i=0;i < str.length; i++)
	// {
	// 	if(str[i]==="-")
	// 	{
	// 		str[i]="_";
	// 	}
	// }
	let newStr=str.replace(/-/g,"_");
	return newStr;
}