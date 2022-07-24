var myNamespace = (function() {
  var myPrivateVar, myPrivateMethod;
  // A private counter variable
  myPrivateVar = 0;
  // A private function which logs any arguments
  myPrivateMethod = function(foo) {
    console.log("myPrivateMethod", foo);
  };

  return {
    // A public variable
    myPublicVar: "myPublicVar",
    // A public function utilizing privates
    myPublicFunction: function(bar) {
      // Increment our private counter
      myPrivateVar++;
      // Call our private method using bar
      myPrivateMethod(bar);
    }
  };
})();

console.log(myNamespace.myPrivateVar);
// console.log(myNamespace.myPrivateMethod("test")); //TypeError
console.log(myNamespace.myPublicFunction("test"));
console.log(myNamespace.myPublicVar);