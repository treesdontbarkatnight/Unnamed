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
var next = 0;
var charName = "Yeet";
var scripts = ["HeLlO hoW ArE Yu","Sayori?...","Hello " + charName + ".","Sayori what are you doing here?","I thought we would walk to school together!"];
var charSpeaking = ["Monika?",charName,"Sayori",charName,"Sayori"];

function ddlc_start(){
	//canvas.addEventListener("mousemove", getMousePos,false);
	//canvas.addEventListener("mouseenter", mouseUpdate, false);
	//canvas.addEventListener("mouseleave", mouseUpdate, false);
	document.getElementById("mycanvas").style.display = "inline";
	document.getElementById("fullscreen").style.display = "inline";
	document.getElementById("ddlc_start").style.display = "none";
	document.body.setAttribute("style","background-image: url('images/bg/club.png')");
	document.title = "Doki Doki Literature Club";
	audio("1","play");
	x = setInterval(drawSplash,1);
}

function mouseUpdate(e){
	mos_X = e.pageX;
	console.log(mos_X);
}

function getMousePos(canvas, evt) {
    var rectmos = can.getBoundingClientRect();
    return {
      x: evt.clientX - rectmos.left,
      y: evt.clientY - rectmos.top
    };
}

function keyPressed(event){
	if(event.keyCode == 32){
		next++;
	}
	if(menu_option == 1){
		audio("select","play");
	}
}

function drawSplash(){
	drawImg("splash",0,0);
	if(brightness == 100){
		brightness = 100;
	}else{
		if(splash < 1000){
			brightness -= 5;
		}
	}
	splash++;
	if(splash >= 180){
		if(brightness < 1000){
			brightness += 5;
			console.log("b: " + brightness);
		}else{
			clearInterval(x);
			brightness = 100;
			x = setInterval(drawBar,1);
			//yt = setInterval(drawMenu,50);
		}
	}
}

function drawBar(){
	drawImg("background",bg_x,0);
	drawImg("background",bg2_x,0);
	bg_x -= 0.1;
	bg2_x -= 0.1;
	bg_y -= 0.1;
	if(bg_x+436 <= 0){
		bg_x = 436;
	}
	if(bg2_x+436 <= 0){
		bg2_x = 436;
	}
	drawImg("main_menu",sidebar_x,0);
	sidebar_x += 1;
	if(sidebar_x >= 0){
		clearInterval(x);
		x = setInterval(drawLogo,1);
	}
}

function drawLogo(){
	drawImg("background",bg_x,0);
	drawImg("background",bg2_x,0);
	bg_x -= 0.1;
	bg2_x -= 0.1;
	bg_y -= 0.1;
	if(bg_x+436 <= 0){
		bg_x = 436;
	}
	if(bg2_x+436 <= 0){
		bg2_x = 436;
	}
	drawImg("main_menu",sidebar_x,0);
	drawImg("logo",80,logo_y);
	logo_y += 1;
	if(logo_y >= -5){
		clearInterval(x);
		x = setInterval(drawGirls,1);
	}
}

function drawGirls(){
	drawImg("background",bg_x,0);
	drawImg("background",bg2_x,0);
	bg_x -= 0.1;
	bg2_x -= 0.1;
	bg_y -= 0.1;
	if(bg_x+436 <= 0){
		bg_x = 436;
	}
	if(bg2_x+436 <= 0){
		bg2_x = 436;
	}
	drawImg("menu_art_y",200,girls_y);
	drawImg("menu_art_s",180,girls2_y);
	drawImg("menu_art_n",285,girls_y);
	drawImg("menu_art_m",340,girls2_y);
	drawImg("main_menu",sidebar_x,0);
	drawImg("logo",80,logo_y);
	girls_y -= 1;
	girls2_y -= .9;
	if(girls_y <= 60 && girls2_y <= 130){
		menu_setup = 0;
		clearInterval(x);
		x = setInterval(drawMenu,1);
	}
}

function drawMenu(){
if(menu_setup == 1){
	drawImg("background",bg_x,0);
	drawImg("background",bg2_x,0);
	bg_x -= 0.1;
	bg2_x -= 0.1;
	bg_y -= 0.1;
	if(bg_x+436 <= 0){
		bg_x = 436;
	}
	if(bg2_x+436 <= 0){
		bg2_x = 436;
	}
}else{
	document.addEventListener('keydown', keyPressed, false);
	drawImg("background",bg_x,0);
	drawImg("background",bg2_x,0);
	drawImg("main_menu",sidebar_x,0);
	drawImg("play",20,150);
	drawImg("settings",20,220);
	drawImg("logo",80,-5);
	drawImg("menu_art_y",200,girls_y);
	drawImg("menu_art_s",180,girls2_y);
	drawImg("menu_art_n",285,girls_y);
	drawImg("menu_art_m",340,girls2_y);
	bg_x -= 0.1;
	bg2_x -= 0.1;
	bg_y -= 0.1;
	if(bg_x+436 <= 0){
		bg_x = 436;
	}
	if(bg2_x+436 <= 0){
		bg2_x = 436;
	}
	if(next == 1){
		clearInterval(x);
		x = setInterval(drawScene1,1);
	}
}
}

function drawSayori(x,y){
	drawImg("sayori_1l",x,y);
	drawImg("sayori_1r",x,y);
	drawImg("sayori_a",x,y+1);
}

function drawScene1(){
	menu_option = 0;
	audio("1","stop");
	audio("2","play");
	drawImg("residential",0,0);
	drawSayori(50,0);
	drawImg("namebox",45,300);
	drawImg("textbox",25,320);
	drawText(charSpeaking[next],65,315,"18px","#ff00c3",2);
	drawText(scripts[next],30,350,"24px","#000000",4);
}