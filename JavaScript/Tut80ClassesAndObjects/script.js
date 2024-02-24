class Animal {
  constructor(name) {
    this.name = name;
    console.log("Object is created...");
  }

  eats() {
    console.log("Kha raha hoo");
  }

  jumps() {
    console.log("Kood raha hoo");
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name);
    console.log("Object is created and he is a lion...");
  }

  eats() {
    super.eats();
    console.log("Lio kha raha hai");
  }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);
