//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, color, owner) {
  this.name = name;
  this.status = "normal";
  this.color = color;
  this.hungry = true;
  this.owner = owner
}

let sadie = new Dog("sadie","black");
sadie.hungry = false;

let moonshine = new Dog("moonshine","black");

let atticus = new Dog("atticus","black");
// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name, ) {
  this.name = name;
  this.cool = true;
  this.pet = function(dog){
    dog.status = "happy";
  };
  this.feed = function(dog){
    dog.hungry = false;
  };
}

let mason = new Human("mason",);
mason.cool = false;

let julia = new Human("julia");

// Instances of Human
// Needed: mason, julia
