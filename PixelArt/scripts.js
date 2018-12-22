var penColor = "black";
var isHeader = 0;
const emptyRow = '<div class="row"></div>';
const emptyColumn = '<div class="pixel" onclick="setPixelColor(this)"></div>';
	
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
	document.getElementById("palette").innerHTML = '<h1 id="paletteHeader">Paleta</h1>' + emptyRow;
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
		var count = rowCollection.length;
		
		rowCollection[count -1].remove();
}

function addRowsAtLoad()
{
	var i, j;
	for (i=0; i<8; i++)
	{
		document.getElementById("art").innerHTML = document.getElementById("art").innerHTML + emptyRow;
		
		//hetting all rows
		var rowCollection = document.getElementsByClassName("row");
		
		//loop fo columns
		for (j=0; j<8;j++)
		{
			//adding columns for the last added row (actual calue of "i" variable")
			rowCollection[i].innerHTML = rowCollection[i].innerHTML + emptyColumn;		
		}	
	}
}
function addColumn()
{
	var i, j;
	//hetting all rows
	var rowCollection = document.getElementsByClassName("row");
	var count = rowCollection.length;
    
	for (i=0; i<count; i++)
	{				
		//adding columns for the last added row (actual calue of "i" variable")
		rowCollection[i].innerHTML = rowCollection[i].innerHTML + emptyColumn;		
			
     }
}
function removeColumn()
{
	var i, j;
	//hetting all rows
	var rowCollection = document.getElementsByClassName("row");
	var rowCounter = rowCollection.length;
	
	var rowCollection = document.getElementsByClassName("pixel");
	var pixelCounter = rowCollection.length;
	if (rowCounter>0)
		
	{
	var countColumnsInRow = pixelCounter/rowCounter  
	}
	
}
