// T I T L E
var t=0;
setInterval(function(){if(t){document.title='Rekt';t=0;}else{document.title='Get';t=1;}},500);

// V I S I T  C O U N T E R
var timesHere;
if(!localStorage.getItem('dogRolled')){timesHere=1;}else{
timesHere = Number(localStorage.getItem('dogRolled'));}
localStorage.removeItem('dogRolled');
localStorage.setItem('dogRolled',timesHere+1);

// D E V E L O P E R  T O O L S  L I S T E N E R
var element=new Image;Object.defineProperty(element,"id",{get:function(){
  //S-Exe
	document.body.style.backgroundColor='black';
	document.getElementById('img').src='http://vignette2.wikia.nocookie.net/undertale/images/0/05/Mysterious_Door_room.png';
	if(audioElement.src!='http://vignette1.wikia.nocookie.net/undertale/images/a/a6/Mus_dogroom.ogg'){audioElement.src='http://vignette1.wikia.nocookie.net/undertale/images/a/a6/Mus_dogroom.ogg';}
	document.getElementById('text').hidden=true;
  if(localStorage.getItem('devTools')){localStorage.setItem('cs','true');}
	localStorage.setItem('devTools','true');
  //E-Exe
}});console.log("%cHello",element);

// R A N D O M  S T U F F
function getRandomNumber(n){
    return Math.floor((Math.random() * n) + 1);
}
if(getRandomNumber(5)<3){history.pushState({},'','dogtrolld');}
function trueReset(){
  	var r = ['csyes','cs','rt','dogRolled','dogtrolld','devTools','devTold'];
	for(i in r){
	localStorage.removeItem(r[i]);
	}
}

// S C R I P T
onload=function(){
    //Konami Code
    if(!localStorage.getItem('cs')&&!localStorage.getItem('csyes')){new Konami(function(){location='dogtrolld';});}else{
        new Konami(function(){localStorage.setItem('csyes');});
    }
    setTimeout(function(){
var imageElement = document.getElementById('img');
var audioElement = document.createElement('audio');
audioElement.autoplay=true;
audioElement.loop=true;
audioElement.id='audioElement';
if(timesHere<7){
switch(getRandomNumber(6)){
    case 1:
        console.log(1);
        audioElement.src='https://dl.dropboxusercontent.com/s/nduw0g77r7py7yw/DOD.ogg';
                audioElement.volume=0.6;
    break;
    case 2:
        console.log(2);
        audioElement.src="https://dl.dropboxusercontent.com/s/wr7z9m7c9muowp8/0.5.ogg";
                audioElement.volume=0.4;
    break;
    case 3:
        console.log(3);
        audioElement.src="https://dl.dropboxusercontent.com/s/0dyle37qabrrsin/1.ogg";
        audioElement.volume=0.6;
    break;
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
        audioElement.src='https://dl.dropboxusercontent.com/s/4aha6f8rvn5yl1q/Dogsong.ogg';
        audioElement.playbackRate=Math.random()+0.6;
}
imageElement.src='https://dl.dropboxusercontent.com/s/n1y1k64bb33dzrp/SmallAdog.gif';
}else{
imageElement.src='resources/Sans.png';
if(localStorage.getItem('csyes')){
  audioElement.src='http://vignette2.wikia.nocookie.net/undertale/images/1/18/SongThatMightPlayWhenYouFightSans.ogg/';
}else{
audioElement.src='resources/sans.ogg';}
}
audioElement.volume=0.7;
//Sans
if(timesHere>7&&timesHere<11&&localStorage.getItem('devTools')&&!localStorage.getItem('devTold')){
	var s = document.getElementById('text');
	s.innerHTML="Hey kid.";
	document.title='A warning...';
	setTimeout(function(){s.innerHTML='I see you were messing with the dev tools. . .';},3000);
	setTimeout(function(){s.innerHTML="If you don't know what you're doing, you probably shouldn't do that";},5300);
	setTimeout(function(){s.innerHTML='There are some nifty tricks in the dev tools though.';},8000);
  setTimeout(function(){s.innerHTML='Watch, I can redirect you. Can you defeat me?';},9900);
  setTimeout(function(){s.innerHTML='"Z" is [okay] "X" is [back]. Use the arrow keys to move.';},11500);
	localStorage.setItem('devTold','true');
	setTimeout(function(){location='https://jcw87.github.io/c2-sans-fight/index.html';},12000);
}
if(timesHere>10){
    localStorage.removeItem('dogRolled');
    document.getElementById('text').innerHTML="nope.";
    if(localStorage.getItem('dogtrolld')&&!localStorage.getItem('rt')){localStorage.setItem('rt','true');
    history.pushState({},'','dogtrolld'); document.getElementById('text').innerHTML="Wow. You look pissed. I guess you got dogtrolld!";
    setTimeout(function(){document.getElementById('text').innerHTML="Here's to another one!";},4400);}
    setTimeout(function(){location.reload();},5600);
}else{document.getElementById('text').innerHTML=String(timesHere);}
document.body.appendChild(audioElement);},200);
};

// K O N A M I  C O D E
var Konami = function (callback) {
	var konami = {
		addEvent: function (obj, type, fn, ref_obj) {
			if (obj.addEventListener)
				obj.addEventListener(type, fn, false);
			else if (obj.attachEvent) {
				// IE
				obj["e" + type + fn] = fn;
				obj[type + fn] = function () {
					obj["e" + type + fn](window.event, ref_obj);
				};
				obj.attachEvent("on" + type, obj[type + fn]);
			}
		},
		input: "",
		pattern: "38384040373937396665",
		load: function (link) {
			this.addEvent(document, "keydown", function (e, ref_obj) {
				if (ref_obj) konami = ref_obj; // IE
				konami.input += e ? e.keyCode : event.keyCode;
				if (konami.input.length > konami.pattern.length)
					konami.input = konami.input.substr((konami.input.length - konami.pattern.length));
				if (konami.input == konami.pattern) {
					konami.code(link);
					konami.input = "";
					e.preventDefault();
					return false;
				}
			}, this);
			this.iphone.load(link);
		},
		code: function (link) {
			window.location = link;
		},
		iphone: {
			start_x: 0,
			start_y: 0,
			stop_x: 0,
			stop_y: 0,
			tap: false,
			capture: false,
			orig_keys: "",
			keys: ["UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "TAP", "TAP"],
			code: function (link) {
				konami.code(link);
			},
			load: function (link) {
				this.orig_keys = this.keys;
				konami.addEvent(document, "touchmove", function (e) {
					if (e.touches.length == 1 && konami.iphone.capture == true) {
						var touch = e.touches[0];
						konami.iphone.stop_x = touch.pageX;
						konami.iphone.stop_y = touch.pageY;
						konami.iphone.tap = false;
						konami.iphone.capture = false;
						konami.iphone.check_direction();
					}
				});
				konami.addEvent(document, "touchend", function (evt) {
					if (konami.iphone.tap == true) konami.iphone.check_direction(link);
				}, false);
				konami.addEvent(document, "touchstart", function (evt) {
					konami.iphone.start_x = evt.changedTouches[0].pageX;
					konami.iphone.start_y = evt.changedTouches[0].pageY;
					konami.iphone.tap = true;
					konami.iphone.capture = true;
				});
			},
			check_direction: function (link) {
				x_magnitude = Math.abs(this.start_x - this.stop_x);
				y_magnitude = Math.abs(this.start_y - this.stop_y);
				x = ((this.start_x - this.stop_x) < 0) ? "RIGHT" : "LEFT";
				y = ((this.start_y - this.stop_y) < 0) ? "DOWN" : "UP";
				result = (x_magnitude > y_magnitude) ? x : y;
				result = (this.tap == true) ? "TAP" : result;
				if (result == this.keys[0]) this.keys = this.keys.slice(1, this.keys.length);
				if (this.keys.length == 0) {
					this.keys = this.orig_keys;
					this.code(link);
				}
			}
		}
	};
	typeof callback === "string" && konami.load(callback);
	if (typeof callback === "function") {
		konami.code = callback;
		konami.load();
	}
	return konami;
};
