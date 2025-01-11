//PART _ )! OBJECTS

const student = {
    fullName : "Moinul Islam",
    marks : 94.4,
    printMarks: function () {
        console.log(`Marks = ${this.marks}`);
    },
};
console.log(student.fullName);
console.log(student.printMarks());




const employee = {
    //we'll alwasy write the "calcTax1" syntax. though both are correct.
    calcTax1() {
        console.log(`Tax rate is 10%`);
    },

    // calcTax2: function() {
    //     console.log(`Tax rate is 10%`);
    // },
};


const karanArjun = {
    salary: 50000,
};

karanArjun__proto__ = employee;


























//PART _ )2 CLASSES

class toyotaCar {
    constructor(brand, milage) {
        this.brand = brand;
        this.milage = milage;
    }
    start() {
        console.log("started");
    } //dont need the "," we gave after each element in objecst
    stop() {
        console.log("stop");
    }
}

console.log(toyotaCar);

let fortuner = new toyotaCar("The Fortuner", 10);
console.log(fortuner);
console.log(typeof fortuner);
console.log(fortuner.start);
console.log(fortuner.stop);

let supra = new toyotaCar("The Supra", 20);
console.log(supra);
console.log(typeof supra);
console.log(supra.start);
console.log(supra.stop);

























//Part - 03 INHERITANCE
class Parent {
    hello() {
        console.log("Hello from parent");
    }
}

class Child extends Parent {

}

let obj1 = new Child();
console.log(obj1.hello());



class Person {
    constructor (name) {
        this.species = "homo sapiens";
        this.name = name;
    }
    eat() {
        console.log("Every person eats");
    }
    sleep() {
        console.log("Every person sleeps");
    }
    work() {
        console.log("Every person works");
    }
}
class Doctor extends Person  {
    work() {
        super.eat();
        console.log("Treat patients");
        super.sleep();
    }
}

class Engineer extends Person{
    constructor(name, branch) {
        super(name); //to invoke parent class constructor
        this.branch = branch;
    }
    work () {
        super.eat();
        console.log("Solve problems, build something");
        super.sleep();
    }
}



let sagorObj = new Doctor("Abdullah Al-Helal Sagor");
console.log(sagorObj);
console.log(sagorObj.work());

let moinulObj = new Engineer("Moinul Islam", "Software Engineer");
console.log(moinulObj);
console.log(moinulObj.work());

let sazidObj = new Engineer("Sazid Hasan", "Mechanical Engineer");
console.log(sazidObj);
console.log(sazidObj.work());



