function Person(name) {
  if (this instanceof Person) {
    this.name = name;
  } else {
    var obj = new Person();
    obj.name = name;
    return obj;
  }
}

Person.prototype.getName = function() {
  return this.name;
}

var p = new Person('Pankaj');
console.log(p.getName());

var k = Person('Kunal');
console.log(k.getName());

