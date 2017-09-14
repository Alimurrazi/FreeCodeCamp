 var check=document.getElementById("submit");
   if(check)
  check.addEventListener("click", submitCheck);

 check=document.getElementById("searchBox");
   if(check)
     check.addEventListener("keyup",function(event) {
      // event.preventDefault();
       if(event.keyCode==13)
       {
         document.getElementById('submit').click();
       }
  });

function submitCheck()
{
  var keyword=document.getElementById("searchBox").value;

  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php',
    data: { action: 'query',list: 'search', srsearch: keyword,format: 'json'},
    dataType: 'jsonp',
    success: function(x)
    {
      var size=x.query.search.length;
      var result=document.createElement("div");
      result.setAttribute("id","result");
      var unorderList=document.createElement("ul");
      unorderList.setAttribute("id","unorderList");
      
      var remove=document.getElementById("result");
      if(remove)
      {
        document.body.removeChild(remove);
      }

      for (var i = 0; i < size; i++)
      {
         var list=document.createElement("li");
         var Title=document.createElement("a");
         var pageid=x.query.search[i].pageid;
         Title.setAttribute("href","https://en.wikipedia.org/?curid="+pageid)
         Title.setAttribute("target","_blank");
         var titleText=document.createTextNode(x.query.search[i].title+" ");
         Title.appendChild(titleText);
         list.appendChild(Title);
         
         var description=document.createElement("span");
         description.innerHTML=x.query.search[i].snippet;
      //   window.alert(x.query.search[i].snippet)
         list.appendChild(description);

         unorderList.appendChild(list);
       //  console.log(x.query.search[i].title);
      }
      result.appendChild(unorderList);
      document.body.appendChild(result);
    //  console.log(x);
 // window.alert(keyword);
}
});
}