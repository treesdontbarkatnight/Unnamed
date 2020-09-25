var bg_x = 0;
var bg_y = 0;
var bg2_x = 436;
var menu_setup = 1;
//Animation Variables
var logo_y = -100;
var girls_y = 600;
var girls2_y = 600;
var sidebar_x = -500;
var x;
var yt;
var splash = 0;
var brightness = 1000;
var can = document.getElementById("mycanvas");
menu_option = 1;
var alpha = 0;
var next = 0;
var charName = "MC";
var scripts = ["HeLlO hoW ArE Yu","Sayori?...","Hello " + charName + ".","Sayori what are you doing here?","I thought we would walk to school together!","We use to all the time ,but latley youv'e been ingnoring me...","(I haven't been ingnoring you youv'e been sleeping in too late...)"];
var charSpeaking = ["Monika?",charName,"Sayori",charName,"Sayori","Sayori",charName];
var black_x = 600;
var noise = 1;

function ddlc_start(){
	document.getElementById("mycanvas").style.display = "inline";
	document.getElementById("fullscreen").style.display = "inline";
	document.getElementById("ddlc_start").style.display = "none";
	//document.body.setAttribute("style","background-image: url('images/bg/club.png')");
	document.title = "Just Monika";
	audio("sayonara","play");
	x = setInterval(drawMenu,50);
}

function drawMenu(){
	if(noise == 1){
		drawImg("noise1",0,0);
	}else if(noise == 2){
		drawImg("noise2",0,0);
	}else if(noise == 3){
		drawImg("noise3",0,0);
	}else{
		drawImg("noise4",0,0);
	}
	if(noise == 4){
		noise = 1;
	}else{
		noise++;
	}
}

function drawSayori(x,y,alpha){
	if(alpha != null){
		drawImg("sayori_1l",x,y,alpha);
		drawImg("sayori_1r",x,y,alpha);
		drawImg("sayori_a",x,y+1,alpha);
	}else{
		drawImg("sayori_1l",x,y);
		drawImg("sayori_1r",x,y);
		drawImg("sayori_a",x,y+1);
	}
}

function animations(character,x,y,type){
	if(character == "Sayori"){
		if(type == "fadeIn"){
			if(alpha < 100){
				drawSayori(x,y,alpha);
				alpha++;
			}else{
				drawSayori(x,y);
			}
		}
	}
}