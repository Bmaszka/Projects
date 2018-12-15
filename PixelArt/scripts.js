var penColor = "black"
var isHeader = 0

function setPixelColor(pixel)
{
	pixel.style.backgroundColor= penColor;
	
	
}

function setPenColor(pen)
{
	penColor = pen;
	setCurrentColor(penColor);
}

function setCurrentColor (color)

{
	var currentColor= document.getElementById("currentcolor");
	currentColor.style.backgroundColor = color;
}

function setText()
{
	if (isHeader==0)
	{
	document.getElementById("palette").innerHTML = '<h1 id="paletteHeader">Paleta</h1>' + document.getElementById("palette").innerHTML;
     isHeader  = 1;
	}
	else
	{
	document.getElementById("paletteHeader").remove();
	isHeader=0;
	}
}
function addRow()
{
		var rowCollection = document.getElementsByClassName("row");
		document.getElementById("art").innerHTML = document.getElementById("art").innerHTML + '<div class="row">' + rowCollection[0].innerHTML + '</div>';
}
function removeRow()
{
		var rowCollection = document.getElementsByClassName("row");
		rowCollection[0].remove();
}
