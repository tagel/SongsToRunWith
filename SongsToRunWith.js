var myFunc = function(string){
	console.log( " My name is " + string);
}

$(".song").click(function() {
	$(".song").removeClass("active");
	$(".content").removeClass("active");
	var contentId = $(this).data("content-id");
	$("#" + contentId).addClass("active");
	$(this).addClass("active");
  });
