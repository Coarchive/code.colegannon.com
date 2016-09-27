var element=new Image;Object.defineProperty(element,"id",{get:function(){
	document.body.style.backgroundColor='black';
	document.getElementById('foo').src='http://vignette2.wikia.nocookie.net/undertale/images/0/05/Mysterious_Door_room.png';
	if(nope.src!='http://vignette1.wikia.nocookie.net/undertale/images/a/a6/Mus_dogroom.ogg'){
    nope.src='http://vignette1.wikia.nocookie.net/undertale/images/a/a6/Mus_dogroom.ogg';
    }
	document.getElementById('sans').hidden=true;
	localStorage.setItem('devTools','true');
}});console.log("%cHello",element);
//-------------------------------------------------------------------------------------------------------------------------//

var t=0;
setInterval(function(){if(t){document.title='Rekt';t=0;}else{document.title='Get';t=1;}},500);

//-------------------------------------------------------------------------------------------------------------------------//

var timesHere;
if(!localStorage.getItem('dogRolled')){timesHere=1;}else{
timesHere = Number(localStorage.getItem('dogRolled'));}
localStorage.removeItem('dogRolled');
localStorage.setItem('dogRolled',timesHere+1);

//-------------------------------------------------------------------------------------------------------------------------//

function grn(n){
    return Math.floor((Math.random() * n) + 1);
}

//-------------------------------------------------------------------------------------------------------------------------//

var y;
if(y&&grn(5)<3){history.pushState({},'','dogtrolld');}

//-------------------------------------------------------------------------------------------------------------------------//
onload=function(){
    new Konami(function(){location='dogtrolld';});
    var imga = document.getElementById('foo');
    var nope = document.createElement('audio');
    nope.autoplay=true;
    nope.loop=true;
    nope.id='nope';
    //---------- Dog or sans ----------//
    if(timesHere<7){
      switch(grn(6)){
          case 1:
            console.log(1);
            nope.src='https://dl.dropboxusercontent.com/s/nduw0g77r7py7yw/DOD.ogg';
            nope.volume=0.6;
            break;
          case 2:
            console.log(2);
            nope.src="https://dl.dropboxusercontent.com/s/wr7z9m7c9muowp8/0.5.ogg";
            nope.volume=0.4;
            break;
          case 3:
            console.log(3);
            nope.src="https://dl.dropboxusercontent.com/s/0dyle37qabrrsin/1.ogg";
            nope.volume=0.6;
            break;
          case 4:
            console.log(4);
          case 5:
            console.log(5);
          case 6:
            console.log(6);
            nope.src='https://dl.dropboxusercontent.com/s/4aha6f8rvn5yl1q/Dogsong.ogg';
            nope.playbackRate=Math.random()+0.6;
      }/*Close Switch*/
      imga.src='https://dl.dropboxusercontent.com/s/n1y1k64bb33dzrp/SmallAdog.gif';
      }else{
        imga.src='resources/Sans.png';
        nope.src='resources/sans.ogg';
        nope.volume=0.7;
      }
};
      //---------- End dog or sans ----------//
    //------------ onload function scope ----------//
    //<Start Special Sans>//
    if(timesHere>7&&timesHere<11);{
      if(localStorage.getItem('devTools')&&!localStorage.getItem('devTold')){
	      var s = document.getElementById('sans');
	      s.innerHTML="Hey kid.";
	      document.title='A warning...';
	      setTimeout(function(){s.innerHTML='I see you were messing with the dev tools. . .';},3000);
	      setTimeout(function(){s.innerHTML='You mess with the dev tools, you mess with me.';},6000);
	      setTimeout(function(){s.innerHTML='Capiche?';},7500);
	      localStorage.setItem('devTold','true');
      }else if(localStorage.getItem('dogrolled')&&!localStorage.getItem('rt')){
        localStorage.setItem('rt','true');
        history.pushState({},'','dogtrolld');
        document.getElementById('sans').innerHTML="Wow. You look pissed. I guess you got dogtrolld!";
        setTimeout(function(){document.getElementById('sans').innerHTML="Here's to another one!";},4400);
        setTimeout(function(){location='dogtrolld';},5300);
      }
    }

      //<End Special Sans>//
      //<Start Counting Reset>//
if(timesHere>10){
    localStorage.removeItem('dogRolled');
    document.getElementById('sans').innerHTML="Okay. Now ten was fine but eleven is just excessive.";
    setTimeout(function(){s.innerHTML='Do you really think I can count that high?';},3400);
    setTimeout(function(){location.reload();},5000);
}
  //<End Counting Reset>//

function trueReset(){
  	var r = ['rt','dogRolled','dogtrolld','devTools','devTold'];
	  for(var i in r){
	     localStorage.removeItem(r[i]);
	  }
  }
