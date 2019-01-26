function silnia(n)
{
	var s;
	var licznik ;

		if (n>=0)
		{
			s=1;
			if (n>0)
			{
				for (licznik=1; licznik<=n; licznik++)
				{
					s=s*licznik;
				}
			}			
			return s;
		}
		return "działanie nie możliwe";
}	
function obliczS()
{
	var x,silniaW, text;
window.alert("silnia")
	x = document.getElementById("liczba").value;
	silniaW = silnia(x);
	text = "Silnia Liczby " + x + " wynosi :" + silniaW;
	document.getElementById("wynik").innerHTML = text;
}	

function fib(f)
{
	var a=1, b=0, temp;
	while (f>=0)
	{
		temp = a;
		a = a + b;
		b = temp;
		f--;
		document.getElementById("wynik").innerHTML = document.getElementById("wynik").innerHTML + "</br>"+ b;
	}
	
return b;
}

function obliczF()
{
	var x, FibO, text;

	x = document.getElementById("liczba").value;
	FibO = fib(x);
	text = "Ciąg F " + x + " wynosi :" + FibO;
	document.getElementById("wynik").innerHTML =document.getElementById("wynik").innerHTML + "</br>"+ text;
}

/*
function silnia(n)
{
	if (n>=0) 
	{
		if ((n==0) || (n==1))
		{
			return 1;
		}
		else
		{
			return n*silnia(n-1);
		}
	}
	else
		{
			return "Tylko liczby całkowite >= 0";
		}
	};
	*/
