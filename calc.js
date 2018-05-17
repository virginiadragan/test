function binar(n, b){
	var  rez;
	n = +document.getElementById('n').value ;
	b = +document.getElementById('b').value ;
	rez = n.toString(b);
	document.getElementById('out').innerHTML = rez ;

	
}