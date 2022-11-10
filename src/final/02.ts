// Styling
// http://localhost:3000/alone/final/01.js

//https://www.typescriptlang.org/docs/handbook/decorators.html
export const a = ""
function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}
 
function second() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called");
  };
}
 
class ExampleClass {
  @first()
  @second()
  method() {}
}

const exampleClass = new ExampleClass()

function sealed(constructor: Function) {
  console.log("sealed()",constructor);
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class BugReport {
  type = "report";
  title: string;
 
  constructor(t: string) {
    this.title = t;
  }
}

const br = new BugReport("bug")


function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("target",target);
    console.log("propertyKey",propertyKey);
    console.log("descriptor",descriptor);
    
    descriptor.enumerable = value;
  };
}

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
 
  @enumerable(true)
  greet() {
    return "Hello, " + this.greeting;
  }
}

const greeter = new Greeter("ok")
greeter.greet()