var current_part;

$("#start").click(function(){
   var value=Math.floor(Math.random() * 4) + 1 ;
   current_part=value;
   window.setTimeout(wait);
   window.setTimeout(back,1000);
});


function wait()
{
	console.log("wait "+current_part);
	$(".part"+current_part).css("opacity", 1.0);
}

function back()
{
	console.log("back "+current_part);
	$(".part"+current_part).css("opacity", 0.6);
}