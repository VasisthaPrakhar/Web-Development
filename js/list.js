setTimeout(function () {
	let todos = [];
	var input;
	while(input!=="quit")
	{
	input = prompt("What would you like to do?");
	if(input==="list")
	{
		listTodo();
	}
	else if(input==="new")
	{
		let newtodo = prompt("Enter new todo:");
		todos.push(newtodo);
		console.log("Added Todo")
	}
	else if(input==="delete")
	{
		var index=prompt("Enter index of todo to delete:");
		todos.splice(index,1);
		console.log("Deleted Todo")
	}
	else{
		input="quit";
	}
	}
	console.log("OK, YOU QUIT THE APP")
	function listTodo(){
		console.log("**********")
		todos.forEach(function(todo, i){
			console.log(i + ": " + todo);
		});	
		console.log("**********")
	}
}, 200)
