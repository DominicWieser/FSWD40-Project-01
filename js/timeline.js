.tooltip{
	
}





.tooltip {
	position: relative;
	display: inline - block;
	border - bottom: 1 px dotted black;
}

.tooltip.tooltiptext {
visibility: hidden;
width: 120 px;
background - color: #555;
color: # fff;
text - align: center;
border - radius: 6 px;
padding: 5 px 0;
position: absolute;
z - index: 1;
bottom: 125 % ;
left: 50 % ;
margin - left: -60 px;
opacity: 0;
transition: opacity 0.3 s;
}

.tooltip.tooltiptext::after {
content: "";
position: absolute;
top: 100 %;
left: 50 %;
margin - left: -5 px;
border - width: 5 px;
border - style: solid;
border - color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
visibility: visible;
opacity: 1;
}