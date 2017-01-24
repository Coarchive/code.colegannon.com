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
/* S E T T I N G S   A N D   L O C A L   S T O R A G E */
var settings={
    speech:!1,
    mode:'html',
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
},
    textData={
        html:`<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
    <title></title>
    <style media="screen">
    </style>
</head>
<body>
    <script type="text/javascript">
    </script>
</body>
</html>`,
        javascript:'"Hello World!";',
    };
var load = {
    description:'Puts data from the localStorage into the script',
    settings(){
        if(l.getItem('settingsSaved')){
            settings=JSON.parse(l.getItem('settings'));
        }
    },
    data(){
        if(l.getItem('dataSaved')){
            textData=JSON.parse(l.getItem('textData'));
        }
    },
    all(){
        this.data();
        this.settings();
    }
};
load.all();
var apply = {
    description:'Applys the data to the DOM',
    settings(){
        changeMode(settings.mode);
        setTheme(settings.theme);
    },
    textData(){
        editor.setValue(textData[settings.mode]);
    },
    all(){
        this.textData();
        this.settings();
    }
};
var save = {
    settings(){
        localStorage.setItem('settingsSaved','('); //Infuriating innit?
        localStorage.setItem("settings",JSON.stringify(settings));
    },
    textData(){
        textData[settings.mode]=editor.getValue();
        localStorage.setItem('dataSaved','if{'); //This one's even worse
        localStorage.setItem("textData",JSON.stringify(textData));
    },
    all(){
        this.settings();
        this.textData();
    }
};
load.all();
apply.all();
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
