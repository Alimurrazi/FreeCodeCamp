function pushButton(value)
{
	if(value=='C')
		document.getElementById('screen').value='';
	else
		document.getElementById('screen').value+=value;
}
function calculate(equation)
{
	var answer=eval(equation);
	document.getElementById('screen').value=answer;
}