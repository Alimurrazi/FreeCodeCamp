var current_part;
var ara=[];
var length;
var step;
var akhon;

$("#start").click(function(){
   var value=Math.floor(Math.random() * 4) + 1 ;
   current_part=value;
   ara.push(value);
   step=0;
   window.setTimeout(wait);
   window.setTimeout(back,1000);
});

function all_and_new()
{
	highlight(function() {
          new_highlight();
        });
}

function highlight(callback)
{
	for(var i=0;i<ara.length;i++)
	{
		console.log("ara ar moddhe aache "+ara[i]);
	}

   for(var i=0;i<ara.length;i++)
   {
   console.log("part "+ara[i]+" "+"is on fire");	
   current_part=ara[i];
   console.log("counter_part "+current_part);
   window.setTimeout(wait);
   window.setTimeout(back,1000);
   akhon=i;
   }
   console.log("matha nosto"+i);
  // callback();
   //console.log(i+" "+ara.length);
  // if(i==ara.length)
   {
   //	 new_highlight();
   	 window.setTimeout(new_highlight,5000);
   }
}

function new_highlight()
{
	console.log(akhon);
   var value=Math.floor(Math.random() * 4) + 1 ;
   current_part=value;
   ara.push(value);
   window.setTimeout(wait);
   window.setTimeout(back,1000);
   step=0;
}

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

$(".part1").click(function(){
    if(ara[step]==1)
    {
    	console.log("thik aache");
        step++;
        if(step==ara.length)
    	highlight();
    //    all_and_new();
    }
});
$(".part2").click(function(){
    if(ara[step]==2)
    {
    	console.log("thik aache");
    	step++;
        if(step==ara.length)
    	highlight();
    //all_and_new();
    }

});
$(".part3").click(function(){
    if(ara[step]==3)
    {
    	console.log("thik aache");
    	step++;
        if(step==ara.length)
    	highlight();
   // all_and_new();
    }
    
});
$(".part4").click(function(){
    if(ara[step]==4)
    {
    	console.log("thik aache");
    	step++;
        if(step==ara.length)
    	highlight();
   // all_and_new();
    }

});