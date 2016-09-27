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
			switch(getRandomNumber(6)){
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

		}
	},
	image:function(){

	},
	txt:function(){},
	plugin:function(){}
};
var Asriel = {
	music:function(){

	},
	image:function(){},
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
setInterval(function titleChanger(){if(currentTitle){document.title='Rekt';currentTitle=0;}else{document.title='Get';currentTitle=1;}},500);
