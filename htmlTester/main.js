/*jshint esversion:6*/
/* Warning, this code is really poorly coded the structure is worse than Marcus' code but it's a little more readable.
It's also a little more stupid.
*/
var txt;
if(location.hash){
document.getElementById('foo').value=location.hash.slice(1);
}else if(txt=localStorage.getItem('lcltext')){
    document.getElementById('foo').value=txt;
}
    function parseCstm(ste){
        document.getElementById('a').value=ste;
        var c = ste.split(';');
        document.getElementById('1').style.backgroundColor=c[0];
        document.getElementById('2').style.backgroundColor=c[1];
        document.getElementById('q').style.backgroundColor=c[2];
        document.getElementById('r').style.backgroundColor=c[3];
        document.getElementById('d').style.backgroundColor=c[4];
        document.getElementById('h').style.backgroundColor=c[5];
        document.body.style.color=c[6];
    }
    var gd;
    if(gd=localStorage.getItem('hmtltseter')){
        parseCstm(gd);
    }
    var t=false,hide;
    function toggleRemove(){
        var dfs = document.getElementById('q');
        var rtxt = document.getElementById('d');
        var rall = document.getElementById('h');
        if(t){
            dfs.style.right=17;
            rtxt.style.opacity=0;
            rall.style.opacity=0;
            hide=setTimeout(_=>{rtxt.style.display=rall.style.display='none';},1000);
            t=false;
        }else{
            rtxt.style.display=rall.style.display='block';
            dfs.style.right=87;
    clearTimeout(hide);
            rtxt.style.opacity=1;
            rall.style.opacity=1;
            t=true;
        }

    }
    function removeLocalTextarea(){
        document.getElementById('foo').value='';
        localStorage.removeItem('lcltext');
        location.reload();
    }
    function removeLocals(){
        document.getElementById('foo').value='';
        localStorage.removeItem('lcltext');
        localStorage.removeItem('hmtltseter');
localStorage.removeItem('mnuul');
        location.reload();
    }
if (!String.prototype.splice) {
    String.prototype.splice = function(start, delCount, newSubStr) {
    return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
    };
}
//var ad = document.getElementById('audio');
document.title='HTML Tester';
var foo=document.getElementById("foo");
foo.onkeydown=function(e){
    setTimeout(()=>{localStorage.setItem('lcltext',foo.value);},100);
    if(e.key=="Tab"){
        e.preventDefault();
        var orgin;
        foo.value=foo.value.splice(orgin=foo.selectionStart,0,'    ');
        foo.selectionStart=foo.selectionEnd=orgin+4;
    }
};
function test(){
    //ad.play();
    var btn = document.getElementById("q").style;
    var temp=foo.value;
    var winAcc;
    try{preWindow.location.host;}catch(a){winAcc=(a&&false);}
    if(typeof winAcc==='undefined'){winAcc=true;}
    console.log(winAcc);
    if(window.preWindow&&(!window.preWindow.closed&&winAcc)){}else{
        window.preWindow=open();
    }
    window.preWindow.document.open();
    window.preWindow.document.write(temp);
    window.preWindow.document.close();
    if(!temp){window.preWindow.location='/dogrolld';}
    window.preWindow.focus();
    window.onfocus=()=>{
    foo.select();
    };
}
mnu=false;
function openMenu(){
localStorage.setItem('mnuul',true);
    var title = document.getElementsByClassName('title')[0],tistl=title.style;
    tistl.height='50%';
    tistl.fontSize='3vw';
    tistl.alignItems='flex-start';
    tistl.justifyContent='flex-end';
    tistl.padding='10';
    tistl.top='30px';
    document.getElementById('a').style.display='block';
    mnu=true;
}
function toggleMenu() {
if (mnu) {
    closeMenu();
} else {
    if (localStorage.getItem('mnuul')){
        openMenu();
    }
}
}
function closeMenu(){
    if(mnu){
        var title = document.getElementsByClassName('title')[0],tistl=title.style;
        tistl.height='20%';
        tistl.fontSize='6vw';
        tistl.alignItems='center';
        tistl.justifyContent='center';
        tistl.padding='0';
        var x = document.getElementById('a');
        x.style.display='none';
        if(x.value){
            parseCstm(x.value);
            localStorage.setItem('hmtltseter',x.value);
        }
        mnu=false;
    }
}
var recognition = new webkitSpeechRecognition();
recognition.onresult = function(event) {
if(event.results['0']['0'].transcript=="they're taking the Hobbits to Isengard")openMenu();
};
recognition.start();
