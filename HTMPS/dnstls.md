#How to deobfuscate Dan's Tools Deobfuscation
Let's put something in to deobfuscate first.
```Javascript
//Input
console.log('Hello'+'World');
```
```Javascript
//Output (Beautified)
eval(function(p, a, c, k, e, d) {
    e = function(c) {
        return c
    };
    if (!''.replace(/^/, String)) {
        while (c--) {
            d[c] = k[c] || c
        }
        k = [function(e) {
            return d[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
        }
    }
    return p
}('0.1(\'2\'+\'3\');', 4, 4, 'console|log|Hello|World'.split('|'), 0, {}))
```
I'm too lazy to explain how the code works but I'll tell you how to deobfuscate it.
```Javascript
//Replace the eval with ''+
""+(function(p, a, c, k, e, d) {
    e = function(c) {
        return c
    };
    if (!''.replace(/^/, String)) {
        while (c--) {
            d[c] = k[c] || c
        }
        k = [function(e) {
            return d[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
        }
    }
    return p
}('0.1(\'2\'+\'3\');', 4, 4, 'console|log|Hello|World'.split('|'), 0, {}))
```
Run the code in your console.
```Javascript
//Returns
"console.log('Hello'+'World');"
//Hopefully this is easy enough to understand ;)
```
Alternatively, run the code through [jsbeautifier](http://jsbeautifier.org/). It'll probably work.
