/*jshint esversion:6*/
var editor = ace.edit("editor"),session = editor.getSession();
function setTheme(theme){
    editor.setTheme("ace/theme/"+theme);
}
function changeMode(mode){
    session.setMode("ace/mode/"+mode);
}
setTheme('dawn');
changeMode('html');
var options={
    speech:!1
};
function loadLocalOptions(){

}
function testCode(){
    var htmlWindow=open();
    htmlWindow.document.open();
    htmlWindow.document.write(editor.getValue);
    htmlWindow.document.close();
}
if(options.speech){
    var recognition = new webkitSpeechRecognition();
    recognition.onresult = function(event) {
    if(event.results['0']['0'].transcript=="they're taking the Hobbits to Isengard")
        openMenu();
    };
    recognition.start();
}
