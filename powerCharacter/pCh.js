var reg={};
function getCharactersBetween(string,a,b){

}
reg['?']={
    name:'if',
    modules:3,
    0:'if(',
    m0:'{',
    1:'){',
    2:'}else{',
    3:'};',

};
function parse(input) {
    var modules=input.split(input[0]),/* The litle blocks of code */
        output='', /* Duh */
        moduleIterator=0, /* The counter that goes from block to block */
        blankCounter=0, /* Shows how many blocks of code are blank */
        splitCharacter=modules.shift(); /* This is the character that is used to split the input to the function */
    for(moduleIterator in modules){
        var currentString=module[moduleIterator], /* this is the current block of code being parsed */
            current=reg[currentString[0]], /* Refers to the object of the power character inside the regestry object */
            characterIterator=0;
        if(current){

            console.debug('Currently Parsing '+current.name);
            blankCounter=0;
            currentString=currentString.slice(1); /* Removes the power character. This makes the string easy to use */
            for(var currentModule=0;currentModule<current.modules; currentModule++){
            }
        }else{
            blankCounter++;
            moduleIterator++;
        }
    }
    return output;
}
