//console.log('Hello Joe');
class HelloWorld {
    constructor(public message: string) { }
}

var hello = new HelloWorld('Hello My typescript');
console.log(hello.message);