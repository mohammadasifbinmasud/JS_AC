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