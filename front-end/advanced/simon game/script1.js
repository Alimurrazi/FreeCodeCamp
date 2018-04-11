var current_part;
var ara=[];
var length;
var step;
var akhon;
var present;
var new_highlight_check=0;
var starting=0;
var error=0;
var strict=0;

$("#strict").click(function(){
   if(strict==0)
   {
    $("#strict").removeClass("btn-success");
    $("#strict").addClass("btn-danger");
    strict=1;
  }
  else
  {
    $("#strict").removeClass("btn-danger");
    $("strict").addClass("btn-success");
    strict=0;
  }
});

$("#start").click(function(){
   new_highlight_check=0;
   starting=0;
   error=0;
   ara=[];
   $("#start").text("restart");
   $("#display").text("Display");
   var value=Math.floor(Math.random() * 4) + 1 ;
   //current_part=value;
   ara.push(value);
   step=0;
   new_highlight_check=1;
   present=0;
   starting=1;
   light();
});

function win()
{
  window.alert("Congratulation!!! You win the game !!!");
  $("#start").trigger("click");
}

function play_sound()
{
  /*
  console.log("play_sound "+id);
  var audio=document.getElementById("audio"+id);
  //var audio=$("#audio"+id);
  audio.currentTime=0;
  audio.play();
  console.log(audio.currentTime);
*/
  var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
audio.play();

}

function light()
{
   wait();
   window.setTimeout(back,1000);
}

function new_highlight()
{
   if(error==0)
   {
   var value=Math.floor(Math.random() * 4) + 1 ;
   ara.push(value);
   new_highlight_check=1;
   //console.log(ara);
   window.setTimeout(light,1000);
   //wait();
   //window.setTimeout(back,1000);
   step=0;
   }
   else
   {
    present=0;
    error=0;
    step=0;
   }
}

function wait()
{
  //console.log("present "+present);
	//console.log("wait "+ara[present]);
  play_sound();
	$(".part"+ara[present]).css("opacity", 1.0);
}

function back()
{
	//console.log("back "+ara[present]);
	$(".part"+ara[present]).css("opacity", 0.6);
  if(new_highlight_check==1)
  {   
  present=0;
  new_highlight_check=0;
  }
  else
  {
  present++;
    if(present>=ara.length)
    //new_highlight();
  window.setTimeout(new_highlight,1000);
  else
  //light();
  window.setTimeout(light,1000);
  }
}

$(".part1").click(function(){
  play_sound();
    if(ara[step]==1)
    {
      //play_sound(1);
    //	console.log("thik aache");
        step++;
        if(step==ara.length)
        {
           if(ara.length<10)
            var display='0'+ara.length;
           else
            var display=ara.length;
           $("#display").text(display);
           if(display==20)
           win();
           else 
           window.setTimeout(light,1000);
         }
    }
    else
    {
      play_sound();
      play_sound();
      if(strict==0)
      {
      $("#display").text("! ! !");
      present=0;
      error=1;
      window.setTimeout(light,1000);
      }
      else
      {
        $("#start").trigger("click");
      }
    }
});
$(".part2").click(function(){
  play_sound();
    if(ara[step]==2)
    {
      //play_sound(2);
    	//console.log("thik aache");
    	step++;
        if(step==ara.length)
        {
                     if(ara.length<10)
            var display='0'+ara.length;
           else
            var display=ara.length;
           $("#display").text(display);
           if(display==20)
           win();
           else
          window.setTimeout(light,1000);
        }
    }
        else
    {
            play_sound();
      play_sound();
      if(strict==0)
      {
      $("#display").text("! ! !");
            present=0;
            error=1;
      window.setTimeout(light,1000);
    }
          else
      {
        $("#start").trigger("click");
      }

    }

});
$(".part3").click(function(){
  play_sound();
    if(ara[step]==3)
    {
    //  play_sound(3);
    	//console.log("thik aache");
    	step++;
        if(step==ara.length)
        {
                     if(ara.length<10)
            var display='0'+ara.length;
           else
            var display=ara.length;
           $("#display").text(display);
          if(display==20)
           win();
           else
          window.setTimeout(light,1000);
        }
    }
        else
    {
            play_sound();
      play_sound();
      if(strict==0)
      {
      $("#display").text("! ! !");
            present=0;
            error=1;
      window.setTimeout(light,1000);
    }
          else
      {
        $("#start").trigger("click");
      }

    }
    
});
$(".part4").click(function(){
  play_sound();
    if(ara[step]==4)
    {
    //  play_sound(4);
    //	console.log("thik aache");
    	step++;
        if(step==ara.length)
        {
                     if(ara.length<10)
            var display='0'+ara.length;
           else
            var display=ara.length;
           $("#display").text(display);
           if(display==20)
           win();
           else
          window.setTimeout(light,1000);
        }
    }
        else
    {
            play_sound();
      play_sound();
      if(strict==0)
      {
      $("#display").text("! ! !");
            present=0;
            error=1;
      window.setTimeout(light,1000);
    }
          else
      {
        $("#start").trigger("click");
      }

    }

});