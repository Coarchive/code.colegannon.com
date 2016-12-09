Let's begin with the input and output
```Javascript
//Input
console.log('Hello'+'World');
```
```Javascript
//Output
var _0xad9f=["\x48\x65\x6C\x6C\x6F","\x57\x6F\x72\x6C\x64","\x6C\x6F\x67"];
console[_0xad9f[2]](_0xad9f[0]+ _0xad9f[1])
```
At first glance that might seem alright, but it's actually pretty easy to pick apart, shall we begin?

Alright, so we're dealing with this variable named `_0xad9f`. It seems to be an array with three values:  `"\x48\x65\x6C\x6C\x6F"` , `"\x57\x6F\x72\x6C\x64"` , `"\x6C\x6F\x67"` .

But wait, if we enter `"\x48\x65\x6C\x6C\x6F"` into our console on dev-tools, it returns `Hello`.

Likewise,`"\x57\x6F\x72\x6C\x64"` and `"\x6C\x6F\x67"` evaluate to human readable strings. We get `World` and `log`, respectively.

Let's simplify this and rename `_0xad9f` to `array`:
```Javascript
var array=["Hello","World","log"];
console[array[2]](array[0]+array[1])
```
That's not to dificult to understand.
```Javascript
console['log']
```
returns
```Javascript
function log() { [native code] }
```
Then we get the input.
```Javascript
console['log']('Hello'+'World');
//Same as
console.log('Hello'+'World');
//Except there are three more characters
```
