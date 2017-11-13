var user='';
var robot='';
var userIcon;
var robotIcon;
var board=[
  ['-','-','-'],
  ['-','-','-'],
  ['-','-','-']
];
var wc1=-1,wc2=-1,wc3=-1;
/*
var board=[
  ['x','o','x'],
  ['o','','x'],
  ['-','-','-']
];
*/


    var value;
    var newRow;
    var newColoumn;

function refresh()
{
  board=[
  ['-','-','-'],
  ['-','-','-'],
  ['-','-','-']
];

    $('#title').html('');
	var id;

    $('.grid').css('paddingTop','110px');

	$('#one').html('');
	$('#one').attr("onClick","fill(this.id,1)");
	$('#one').css('color','black');
    
    $('#two').html('');
	$('#two').attr("onClick","fill(this.id,2)");
	$('#two').css('color','black');

	$('#three').html('');
	$('#three').attr("onClick","fill(this.id,3)");
	$('#three').css('color','black');

	$('#four').html('');
	$('#four').attr("onClick","fill(this.id,4)");
	$('#four').css('color','black');

	$('#five').html('');
	$('#five').attr("onClick","fill(this.id,5)");
	$('#five').css('color','black');

	$('#six').html('');
	$('#six').attr("onClick","fill(this.id,6)");
	$('#six').css('color','black');

	$('#seven').html('');
	$('#seven').attr("onClick","fill(this.id,7)");
	$('#seven').css('color','black');

	$('#eight').html('');
	$('#eight').attr("onClick","fill(this.id,8)");
	$('#eight').css('color','black');

	$('#nine').html('');
	$('#nine').attr("onClick","fill(this.id,9)");
	$('#nine').css('color','black');

/*
	for(var i=1;i<=9;i++)
	{
       id=convert(i);
       $('#'+id).empty();
	   //$('#'+id).attr("onClick",'fill(this.id,i)');
	   $('#'+id).attr("onClick",function()
        {
           fill(this.id,i);  
        });
	}
	*/
	//$('#one').attr('onClick');
}

function choseIcon(icon)
{
    if(icon=='x')
    {
       user='<span class="fa fa-times"></span>';
       robot='<span class="fa fa-circle-o"></span>';
       userIcon='x';
       robotIcon='o';
    }
    else
    {
       user='<span class="fa fa-circle-o"></span>';
       robot='<span class="fa fa-times"></span>';
       userIcon='o';
       robotIcon='x';
    }
}

function isMoveLeft()
{
	for(var i=0;i<3;i++)
	{
		for(var j=0;j<3;j++)
		{
			if(board[i][j]=='-')
				return true;
		}
	}
	return false;
}

function ijToId(i,j)
{
   var id;
   id=(i*3+j)+1;
   return id;
}

function evaluate()
{
   
   wc1=-1,wc2=-1,wc3=-1;
   for(var i=0;i<3;i++)
	{
	 if(board[i][0]==board[i][1] && board[i][1]==board[i][2] && board[i][0]!='-')
			{
				wc1=ijToId(i,0);
				wc2=ijToId(i,1);
				wc3=ijToId(i,2);
				if(board[i][0]==robotIcon)
					return 10;
				else 
                    return -10;
			}
	}
    for(i=0;i<3;i++)
    {
    	if(board[0][i]==board[1][i] && board[1][i]==board[2][i] && board[0][i]!='-')
    	{
    		wc1=ijToId(0,i);
    		wc2=ijToId(1,i);
    		wc3=ijToId(2,i);
    		if(board[0][i]==robotIcon)
    			return 10;
    		else
    			return -10;
    	}
    }

    if(board[0][0]==board[1][1] && board[1][1]==board[2][2] && board[0][0]!='-')
    {
    	wc1=ijToId(0,0);
    	wc2=ijToId(1,1);
    	wc3=ijToId(2,2);
    	if(board[0][0]==robotIcon)
    		return 10;
    	else
    		return -10;
    }

    if(board[0][2]==board[1][1] && board[1][1]==board[2][0] && board[0][2]!='-')
    {
    	wc1=ijToId(0,2);
    	wc2=ijToId(1,1);
    	wc3=ijToId(2,0);
    	if(board[0][2]==robotIcon)
    		return 10;
    	else
    		return -10;
    }
    
    return 0;
}

function minimax(depth,isMax)
{
	var score=evaluate();
	if(score==10||score==-10)
		return score;
	if(isMoveLeft()==false)
		return 0;
	if(isMax)
	{
		var bestMax=-1000;
		for(var i=0;i<3;i++)
		{
			for(var j=0;j<3;j++)
			{
				if(board[i][j]=='-')
				{
					board[i][j]=robotIcon;
					bestMax=Math.max(bestMax,minimax(depth+1,!isMax));
					board[i][j]='-';
				}

			}
		}
		return bestMax;
	}
	else
	{
       var bestMin=1000;
       		for(var i=0;i<3;i++)
		{
			for(var j=0;j<3;j++)
			{
				if(board[i][j]=='-')
				{
					board[i][j]=userIcon;
					bestMin=Math.min(bestMin,minimax(depth+1,isMax));
					board[i][j]='-';
				}

			}
		}
		return bestMin;
	}
}

function findNew()
{
  var bestValue=-1000;
  var newValue;
  for(var i=0;i<3;i++)
  {
  	for(var j=0;j<3;j++)
  	{
  		if(board[i][j]=='-')
  		{
  			board[i][j]=robotIcon;
            newValue=minimax(0,false);
            board[i][j]='-';
            if(newValue>bestValue)
            {
            	newRow=i;
            	newColoumn=j;
            	bestValue=newValue;
            }
  		}
  	}
  }
}

function defendFirst()
{
	if(board[1][1]=='-')
	{
		newRow=1;
		newColoumn=1;
		//console.log("tumi akhane keno");
		return true;
	}
	var count=0;
	var tempRow;
	var tempColoumn;
	for(var i=0;i<3;i++)
	{
	//	console.log(i);
		count=0;
		var check=false;
		for(var j=0;j<3;j++)
		{
	//	  console.log("j "+j);
          if(board[i][j]==userIcon)
          {
          	count++;
          }
          if(board[i][j]==robotIcon)
          	break;
        if(count==2)
		{
			//console.log("rana "+i+" "+j);
		    for(var k=0;k<3;k++)
		  	{
              if(board[i][k]=='-')
              {
              	check=true;
              	tempRow=i;
          	    tempColoumn=k;
              }
            if(board[i][k]==robotIcon)
          	break;
		  	}
		  	if(check==true)
		  	{	
			newRow=tempRow;
			newColoumn=tempColoumn;
			return true;
		     }
		}
		}
	}
   // console.log("row clear");
   	for(var i=0;i<3;i++)
	{
		count=0;
		for(var j=0;j<3;j++)
		{
	//	  console.log("you "+i+" "+j);	
          if(board[j][i]==userIcon)
          {
          	count++;
          }
          if(board[j][i]==robotIcon)
          	break;
        if(count==2)
		{
		  	for(var k=0;k<3;k++)
		  	{
              if(board[k][i]=='-')
              {
              	check=true;
              	tempRow=k;
          	    tempColoumn=i;
              }
            if(board[k][i]==robotIcon)
          	break;
		  	}
		  	if(check==true)
		  	{
			newRow=tempRow;
			newColoumn=tempColoumn;
			return true;
		    }
		}
		}
	}
     
   return false;
}

function fill(id,grid)
{
    $('#'+id).html(user);
    $('#'+id).removeAttr('onClick');
    $('#'+id).css({"padding-top":0});
    var row;
    var coloumn;
    if(grid%3==0)
    {
    	row=Math.floor((grid/3)-1);
    	coloumn=2;
    }
    else
    {
    	row=Math.floor(grid/3);
    	coloumn=(grid%3)-1;
    }
    board[row][coloumn]=userIcon;
    //console.log(board);
    if(!defendFirst())
    {
        findNew();  
    }
   // console.log(board);
    board[newRow][newColoumn]=robotIcon;
    var gridId=(newRow*3+newColoumn)+1;
    gridId=convert(gridId);
    $('#'+gridId).html(robot);
    $('#'+gridId).removeAttr('onClick');
    $('#'+gridId).css({"padding-top":0});

    if(evaluate()==10)
    {
    	$("#title").append(" <h2>You Lose!</h2>");
    	wc1=convert(wc1);
      	wc2=convert(wc2);
    	wc3=convert(wc3);
    	//$("#myParagraph").css({"backgroundColor": "black", "color": "white"});
        $('#'+wc1).css({"color":"red"});
        $('#'+wc2).css({"color":"red"});
        $('#'+wc3).css({"color":"red"});
        $('.grid').removeAttr('onClick');
    }
    else if(evaluate()==-10)
    {
    	$("#title").append(" <h2>You Win!</h2>");
    	wc1=convert(wc1);
    	wc2=convert(wc2);
    	wc3=convert(wc3);
        $('#'+wc1).css({"color":"red"});
        $('#'+wc2).css({"color":"red"});
        $('#'+wc3).css({"color":"red"});
        $('.grid').removeAttr('onClick');
    }
    else if(!isMoveLeft())
    {
    	$("#title").append(" <h2>Draw!</h2>");
    	$('#board').removeAttr('onClick');
    }
}

function convert(number)
{
	if(number==1)
       return 'one';
   	if(number==2)
       return 'two';
   	if(number==3)
       return 'three';
   	if(number==4)
       return 'four';
   	if(number==5)
       return 'five';
   	if(number==6)
       return 'six';
   	if(number==7)
       return 'seven';
   	if(number==8)
       return 'eight';
   	if(number==9)
       return 'nine';
}