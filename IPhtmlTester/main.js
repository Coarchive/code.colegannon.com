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
    speech:!1,
    mode:'javascript',
    html(){
        return editor.getValue();
    },
    javascript(){
        return '<script>'+editor.getValue()+'</script>';
    },
    marcus(){
        return '_=>{};';
    },
    theme:'cobalt',
    theme:'monokai',
    focusOnReturn:!1,
};
+function loadLocalStorage(){
    if(l.getItem('optionsSet')){

    }
}();
+function loadSettings(){
    changeMode(settings.mode);
    setTheme(settings.theme);
}();
function toggleMenu(element){
    if(element.checked){
        options.style.height='50%';
        editorElement.style.height='0px';
        editorElement.style.opacity=0;

    }else{
        options.style.height='0px';
        editorElement.style.height='100%';
        editorElement.style.opacity=1;
    }
}
var htmlWindow;
function testCode(){
        htmlWindow&&!htmlWindow.closed||[htmlWindow=open()];
        var code=editor.getValue();
    if(code){
        htmlWindow.document.open();
        htmlWindow.document.write(settings[settings.mode]());
        htmlWindow.document.close();
    }else{
        htmlWindow.location='/dogrolld';
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
