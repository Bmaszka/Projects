var penColor = "black"

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
