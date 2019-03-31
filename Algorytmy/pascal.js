const row = '<div class="row"></div>';
const cell = '<div class="pasat">';
var number = 4;
var pascalnumber = [ [1],
					[1, 1],
					[1 ,2 ,1],
					[1 ,3 ,3, 1],
					[1 ,4 ,6 ,4 ,1]
					]
var trojkatPascala = [];
function triangle(n){

   var i,j,b,e = 0,x=1;

   for (i=0; i<n; i++)
   {
      document.getElementById("art").innerHTML = document.getElementById("art").innerHTML + row;
      var rowCollection = document.getElementsByClassName("row");
		 for(b=0;b<trojkatPascala[i].length;b++){
		 rowCollection[i].innerHTML = rowCollection[i].innerHTML + cell + trojkatPascala[i][b] + '</div>';
		 }
	}
}


	

  function setArray(n){
     
  for ( j=0;j<n;j++)
  { 
    trojkatPascala[j] = [];
    trojkatPascala[j][0]=1;
    trojkatPascala[j][j]=1;

    for ( i=0; i<j-1; i++)
    {
      trojkatPascala[j][i+1]=trojkatPascala[j-1][i]+trojkatPascala[j-1][i+1];
	}
  }
 triangle(n);



}

function oblicz()
{

var n,tak;
var pustatablica = [];
document.getElementById("art").innerHTML ='';
trojkatPascala = pustatablica;
	n = document.getElementById("liczba").value;
	tak = setArray(n);

	
}
