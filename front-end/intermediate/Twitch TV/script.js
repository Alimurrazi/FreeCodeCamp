	var ara=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];
    var status="";
    var logo="";
    var channelUrl="";
    var name="";
    var check=0;
     

     for(var i=0;i<ara.length;i++)
     {   
     $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/users/'+ara[i]+'?callback=?',
    data: { format: 'json'},
    dataType: 'jsonp',
    success: function(x)
    {
        logo=x.logo;
        name=x.name;
        channelUrl="https://www.twitch.tv/"+name;
       // if(logo!="" && name!="" && url!="")
        streamingStatus(logo,name,channelUrl);
    }
    });
      
      function streamingStatus(logo,name,channelUrl)
    {
    $.ajax({
    url: 'https://wind-bow.gomix.me/twitch-api/streams/'+name+'?callback=?',
    data: { format: 'json'},
    dataType: 'jsonp',
    success: function(x)
    {
        if(x.stream==null)
        {    
        status="Offline";
       // htmlCreate();
        }
        else
        {    
        status=x.stream.channel.status;
       // htmlCreate();
        }
        console.log(logo+" "+name+" "+channelUrl+" "+status);
      // console.log(x);
      htmlCreate(logo,name,channelUrl,status);
    }
    });
    }

    function htmlCreate(logo,name,channelUrl,status)
    {
        
        var result=document.createElement("div");
        result.setAttribute("class","channel"); 

        var logo_js=document.createElement("img");
        logo_js.setAttribute("src",logo);
        result.appendChild(logo_js);
         
        var inline=document.createElement("h4"); 
        var name_js=document.createElement("a");
        name_js.setAttribute("href",channelUrl);
        name_js.setAttribute("target","_blank");
        var text=document.createTextNode(name);
        name_js.appendChild(text);
        inline.appendChild(name_js);
        result.appendChild(inline);
          
        var status_js=document.createElement("h5");
        var status_text=document.createTextNode(status);
        status_js.appendChild(status_text);
        result.appendChild(status_js);

        var container=document.getElementById("container");
        container.appendChild(result);

      //  document.body.appendChild(result);
    }

 }