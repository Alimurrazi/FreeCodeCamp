$(document).ready(function(){

   var break_value=5;
   var temp_break_value=5;
   var session_value=25;
   var temp_session_value=25;
   var timecountID;
   var timeoutID;

    $(".break-minus").click(function(){
        break_value = parseInt($.trim($('.break-value').html()));
        break_value=break_value-1;
        if(break_value>0)
        $('.break-value').html(break_value); 
        else
        	break_value=1;
    });
     
        $(".break-add").click(function(){
        break_value = parseInt($.trim($('.break-value').html()));
        break_value=break_value+1;
        $('.break-value').html(break_value); 
    });

        $(".session-minus").click(function(){
        session_value = parseInt($.trim($('.session-value').html()));
        session_value=session_value-1;
        if(session_value>0)
        $('.session-value').html(session_value); 
        else
        	session_value=1;
    });
     
        $(".session-add").click(function(){
        session_value = parseInt($.trim($('.session-value').html()));
        session_value=session_value+1;
        $('.session-value').html(session_value); 
    });
   
   $(".running").click(function(){
   	     session_value=parseInt($.trim($('.session-value').html()))
   	     temp_session_value=session_value*60*1000;
         timecountID=setInterval(sessionTimeCount, 1000);
         timeoutID = window.setTimeout(clear_session, session_value*60*1000);
         //$('body').click(false);
        // $("body").off("click");
   });
   
   function sessionTimeCount()
   {
   	   $("#what_running").html("Session");
   	   var background_part=((temp_session_value)/(session_value*60*1000))*100;
   	   var remain_background_part=100-background_part;
   	   background_part=0;
   	 //  console.log(background_part);
   	   $('.running').css('background','-webkit-linear-gradient(bottom, orange '+remain_background_part+'%, white 0%)');
   	   var minute=Math.floor(temp_session_value/(1000*60));
   	   var second=Math.floor((temp_session_value/1000)-(minute)*60);
   	      	   console.log(second);
   	    if(minute<10)
   	      minute='0'+minute;
   	    if(second<10)
   	      second='0'+second;    	   
   	   $('.minute').html(minute);
   	   $('.second').html(second);
   	   temp_session_value=((temp_session_value/1000)-1)*1000;
   }

   function clear_session()
   {
       clearInterval(timecountID);
       window.clearTimeout(timeoutID);
       break_value = parseInt($.trim($('.break-value').html()));
   	     temp_break_value=break_value*60*1000;
         timecountID=setInterval(breakTimeCount, 1000);
         timeoutID = window.setTimeout(clear_break, break_value*60*1000);
   }

   function breakTimeCount()
   {
   	var background_part=((temp_break_value)/(break_value*60*1000))*100;
   	   var remain_background_part=100-background_part;
   	   console.log(background_part);
   	   $('.running').css('background','-webkit-linear-gradient(top, orange '+remain_background_part+'%, white 0%)');
   	   $("#what_running").html("Break");
        var minute=Math.floor(temp_break_value/(1000*60));
   	    var second=Math.floor((temp_break_value/1000)-(minute)*60);
   	      	   console.log(second);
   	    if(minute<10)
   	      minute='0'+minute;
   	    if(second<10)
   	      second='0'+second;    	   
   	   $('.minute').html(minute);
   	   $('.second').html(second);
   	   temp_break_value=((temp_break_value/1000)-1)*1000;
   }

   function clear_break()
   {
       clearInterval(timecountID);
       window.clearTimeout(timeoutID);
      // $('body').click(true);
       $(".running").click();
   }

});