var module = (function() {
  var name = 'Pankaj'
  var greeting = "Hello"

  var getName = function() {
    return name;
  }

  return {
    greeting: greeting,
    getName: getName
  }
})();

// can't access name directly as it will be inside the module as private
console.log(module.name);

// you can access data only via exposed properties or methods
console.log(module.greeting);
console.log(module.getName());
