function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        set: function (fullName) {
            var name = fullName.split(' ');
            this.firstName = name[0];
            this.lastName = name[1];
        }
    });
}

var person = new Person("Peter", "Jackson");

// Getting values
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log();

// Changing values
person.firstName = "Michael";
console.log(person.firstName);
console.log(person.fullName);
person.lastName = "Williams";
console.log(person.lastName);
console.log(person.fullName);
console.log();

// Changing the full name should work too
person.fullName = "Alan Marcus";
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);

