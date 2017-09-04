var temc;
var temf;
var Geo={};

var check=document.getElementById("temp")
if(check)
   check.addEventListener("click",tempChange);

function tempChange()
{
  var status=document.getElementById("temp").textContent;
   
  if(status[status.length-1]=="C")
  	$('#temp').html(tempf);
  else
    $('#temp').html(tempc);
}

if(navigator.geolocation)
{
	navigator.geolocation.getCurrentPosition(success,error);
}

function error()
{	
	 window.alert("we can not detect your location");
}

function success(position)
{
	Geo.lat=position.coords.latitude;
	Geo.lng=position.coords.longitude;
	var key='88d530beb787190b';
	var Weather="https://api.wunderground.com/api/"+key+"/forecast/geolookup/conditions/q/"+Geo.lat + "," + Geo.lng + ".json";
   
   $.ajax({
   	url: Weather,
   	dataType:"jsonp",
   	success:function(data)
   	{
   		var location=data['location']['city'];
   		 tempf=data['current_observation']['temp_f']+'&#176'+'F';
   		 tempc=data['current_observation']['temp_c']+'&#176'+'C';
   		var img=data['current_observation']['icon_url'];
   		var desc=data['current_observation']['weather'];
   		var wind="Wind Status: "+data['current_observation']['wind_string'];

   		$('#location').html(location);
   		$('#temp').html(tempc);
   		$('#desc').html(desc);
   		$('#wind').html(wind);
   		$('#img').attr('src',img);

   	}
   });
}