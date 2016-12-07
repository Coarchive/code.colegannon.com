# Javascript Obfuscated

## Intro: Obfuscation, an explanation


Obfuscation is a programming technique in which code is intentionally obscured to prevent reverse engineering and deliver unclear code to anyone other than the programmer. I couldn't have said it better myself. Thanks *[techopedia](https://www.techopedia.com/definition/16375/obfuscation).

Something I'd like to make painfully clear is that **encryption** and **obfuscation** are very different things. Encryption makes data impossible to decode without a key. Obfuscation is the process of making a piece of code redable to the machine but inconvinent or difficult for a human to read. That being said, encryption can be used in obfuscation but you're going to have to include the decryption key in there somewhere or else the machine won't be able to read the code. In this book, I'm going to teach you how to Obfuscate your code **[MANUALLY](https://en.wikipedia.org/wiki/Manual).** If you don't want to put in the time, or simply don't really want to do it yourself here's a list of links that'll do it for you.

- [JSFUCK](http://www.jsfuck.com/)
- [jjencode](http://utf-8.jp/public/jjencode.html)
- [aaencode](http://utf-8.jp/public/aaencode.html)
- [Closure Compiler](https://closure-compiler.appspot.com/home)
- [Bad](https://javascriptobfuscator.com/)
- [Dan's Tools](http://www.danstools.com/javascript-obfuscate/index.php)

The Closure Compiler's not only good for obfuscating but can optimise load times too.

Dan's tools make it a pain to read for sure. However, there's nothing that a good few hours of grunt work couldn't do to some javascript code that's Obfuscated like this. It'd be boring though.

The Bad Obfuscator, well it's bad here take a look at my input and what I got as an output.
```Javascript
//Input
console.log('Hello'+'World');
```
```Javascript
//Output
var _0xad9f=["\x48\x65\x6C\x6C\x6F","\x57\x6F\x72\x6C\x64","\x6C\x6F\x67"];console[_0xad9f[2]](_0xad9f[0]+ _0xad9f[1])
```
