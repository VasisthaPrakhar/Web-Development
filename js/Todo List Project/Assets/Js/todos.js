//check off specific todos by clicking
$("ul").on("click", "li", function(){
	// if($(this).css("color") === "rgb(128, 128, 128)")
	// {
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration:"none"
	// 	});
	// }
	// else{
	// 	$(this).css({
	// 		color: "grey",
	// 		textDecoration:"line-through"
	// 	});
	// }
	$(this).toggleClass("completed");
})

//click on x to delete todo
$("ul").on("click", "span", function(event){
	//now use click on span to remove its parent(li) using this
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});

	//to stop the triggering of li as we click the span inside the li
	event.stopPropagation();
});

$("input[type='text']").on("keypress",function(event){
	if(event.which === 13){
		//grabbing a new todo from input
		let todoText = $(this).val();
		$(this).val("");
		//create a new li adn add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>")
	}
})

$(".fa-pencil-square-o").click(function(){
	$("input[type='text']").fadeToggle();
})