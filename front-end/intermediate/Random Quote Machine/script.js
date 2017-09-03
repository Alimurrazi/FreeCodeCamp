var check=document.getElementById("new");
   if(check)
	check.addEventListener("click", myFunction);

var twitt=document.getElementById("twitter");
   if(twitt)
     twitt.addEventListener("click", myStatus);

var collection=[];

collection[0]={
	qoute:"Why so serious?",
	cite:"Joker",
	colour:"#17202A"
};

collection[1]={
	qoute:"Don't cry because it's over, smile because it happened.",
	cite:"Dr. Seuss",
	colour:"#641E16"
};

collection[2]={
	qoute:"Be yourself; everyone else is already taken.",
	cite:"Oscar Wilde",
	colour:"#512E5F"
};

collection[3]={
	qoute:"So many books, so little time.",
	cite:"Frank Zappa",
	colour:"#1B4F72"
};

collection[4]={
	qoute:"A room without books is like a body without a soul.",
	cite:"Marcus Tullius Cicero",
	colour:"#0E6251"
};

collection[5]={
	qoute:"You only live once, but if you do it right, once is enough.",
	cite:"Mae West",
	colour:"#7B7D7D"
};

collection[6]={
	qoute:"Ballot is greater than Bullet",
	cite:"Abraham Lincoln",
	colour:"#1B2631"
};

collection[7]={
	qoute:"If you tell the truth, you don't have to remember anything.",
	cite:"Mark Twain",
	colour:"#F1C40F"
};

collection[8]={
	qoute:"A friend is someone who knows all about you and still loves you.",
	cite:"Elbert Hubbard",
	colour:"black"
};

collection[9]={
	qoute:"Always forgive your enemies; nothing annoys them so much.",
	cite:"Oscar Wilde",
	colour:"#A9DFBF"
};

function random()
{
    return Math.floor(Math.random() * (9 - 0 + 1));
}

function myFunction()
{
	var index=random();
	document.getElementById("main-quote").innerHTML = collection[index].qoute;
	document.getElementById("main-cite").innerHTML=collection[index].cite;
	document.body.style.backgroundColor=collection[index].colour;
	document.getElementById("main").style.backgroundColor=collection[index].colour;
   // window.alert (index);
}

function myStatus()
{
   //	window.alert("hello world");
	var status=document.getElementById("main-quote").textContent;
	var status=status+document.getElementById("main-cite").textContent;

	var twtLink = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +encodeURIComponent(status);
 window.open(twtLink,'_blank');
}