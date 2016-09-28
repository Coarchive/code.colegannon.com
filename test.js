// V A R I A B L E S
var timesVisited,
    currentTitle,
		currentState,
    imageElement = document.getElementById('img'),
    audioElement = document.getElementById('audio'),
		textElement = doucment.getElementById('text');
// F U N C T I O N S
function setText(string){
	textElement.innerHTML=string;
}
function getRandomNumber(n){
    return Math.floor((Math.random() * n) + 1);
}

// S T A T E
var danceOfDog = {
    music:function(){
			switch(getRandomNumber(9)){
			    case 1:
			        audioElement.src='/resources/DOD.ogg';
			        audioElement.volume=0.6;
			    break;
			    case 2:
			        audioElement.src="/resources/0.5.ogg";
			        audioElement.volume=0.6;
			    break;
			    case 3:
			        audioElement.src="/resources/1.ogg";
			        audioElement.volume=0.6;
			    break;
			    case 4:
			    case 5:
			    case 6:
					case 7:
					case 8:
					case 9:
			        audioElement.src='/resources/Dogsong.ogg';
							audioElement.playbackRate=Math.random()+0.6;
			}
		},
    image:function(){imageElement.src='/resources/SmallAdog.ogg';},
	  txt:function(){setText(timesHere);},
		plugin:function(){},
};
var Sans = {
	music:function(){
		if(!localStorage.getItem('sansSpecial')){
			audioElement.src='/resources/sans.ogg';
		}else{
			audioElement.src=(getRandomNumber(7)==2?'/resources/megalovania.ogg':'/resources/SongThatMightPlayWhenYouFightSans.ogg');
		}
	},
	image:function(){
		imageElement.src='/resources/Sans.png';
	},
	txt:function(){

	},
	plugin:function(){}
};
var Asriel = {
	music:function(){
    audioElement.src='/resources/menu6.ogg';
	},
	image:function(){
    imageElement.src='/resources/Asriel_Dreemur.gif';
  },
	txt:function(){},
	plugin:function(){}
};
var Default = {
	music:function(){},
	image:function(){},
	txt:function(){},
	plugin:function(){}
};
//Website Code
(function stateDeterminer(){
	switch (timesVisited) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		  currentState=danceOfDog;
		break;
		case 8:
		case 9:
		case 10:
		case 11:
		  currentState=Sans;
		break;
		default:
		  currentState=Asriel;
	}
})();
function stateWriter(state){
	state.music();
  state.image();
	state.txt();
	state.plugin();
}
stateWriter(currentState);
var changeTitleInterval = setInterval(function titleChanger(){if(currentTitle){document.title='Rekt';currentTitle=0;}else{document.title='Get';currentTitle=1;}},500);

// D E V T O O L S  L I S T E N E R
var element=new Image();Object.defineProperty(element,"id",{get:function(){
  //S-Exe
	document.body.style.backgroundColor='black';
	document.getElementById('img').src='http://vignette2.wikia.nocookie.net/undertale/images/0/05/Mysterious_Door_room.png';
	if(audioElement.src!='http://vignette1.wikia.nocookie.net/undertale/images/a/a6/Mus_dogroom.ogg'){audioElement.src='http://vignette1.wikia.nocookie.net/undertale/images/a/a6/Mus_dogroom.ogg';}
	document.getElementById('text').hidden=true;
  if(localStorage.getItem('devTold')){localStorage.setItem('devTools2','true');}
	localStorage.setItem('devTools','true');
  //E-Exe
}});console.log("%cHello",element);
