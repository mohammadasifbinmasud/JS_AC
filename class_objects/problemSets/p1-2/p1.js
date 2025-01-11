class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(this.name);
        console.log(this.email);
    }
}

let student1 = new User("Moinul Islam", "moinulislam@gmail.com");

console.log(student1.viewData());


class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData(op, newName) {
        if(op === 1) {
            this.name = newName;
        }
    }
}

let admin1 = new Admin("Moni Sir", "moni@ku.ac.bd");
admin1.editData(1, "Moni Mohan");
console.log(admin1);

