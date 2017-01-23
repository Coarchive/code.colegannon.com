/*jshint esversion:6*/
/* B O I L E R   P L A T E */
var _=document,l=localStorage;

/* E L E M E N T S */
var titleText=_.getElementById('title'),
    options=_.getElementsByClassName('options')[0],
    editorElement=_.getElementById('editor');

/* A C E   E D I T O R */
var editor = ace.edit("editor"),session = editor.getSession();
editor.setShowPrintMargin(false);
function setTheme(theme){
    editor.setTheme("ace/theme/"+theme);
}
function changeMode(mode){
    session.setMode("ace/mode/"+mode);
}
function setFontSize(size){
    editorElement.style.fontSize=size+'px';
}
/* O P T I O N S   A N D   L O C A L   S T O R A G E */
var settings={
    speech:!1
};
function loadLocalOptions(){
    if(l.getItem('optionsSet')){

    }
}
function toggleMenu(element){
    if(element.checked){
        options.style.height='40%';
        editorElement.style.height='0px';
        editorElement.style.opacity=0;
    }else{
        options.style.height='0px';
        editorElement.style.height='100%';
        editorElement.style.opacity=1;
    }
}

function testCode(){
    var htmlWindow=open(),
        code;
    if(code=editor.getValue()){
        htmlWindow.document.open();
        htmlWindow.document.write(code);
        htmlWindow.document.close();
    }else{
        htmlWindow.location='dogrolld';
    }
}

/* S P E E C H   R E C O G N I T I O N */
if(settings.speech){
    var recognition = new webkitSpeechRecognition();
    recognition.onresult = function(event) {
    if(event.results['0']['0'].transcript=="they're taking the Hobbits to Isengard")
        openMenu();
    };
    recognition.start();
}
