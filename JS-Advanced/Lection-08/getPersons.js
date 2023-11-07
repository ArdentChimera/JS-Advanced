function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        };
    
        toArray() {
            let arr = [this.firstName, this.lastName, this.age, this.email];
            let filtered = arr.filter(el => el !== undefined);
           return filtered;
        }
    }

    let instances = [];

    let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    instances.push(person);
    let person2 = new Person('SoftUni');
    instances.push(person2);
    let person3 = new Person('Stephan', 'Johnson', 25);
    instances.push(person3);
    let person4 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    instances.push(person4);

    for (let key in instances) {
        if (instances[key] === undefined) {
          delete instances[key];
        }
      }

    console.log(instances);
}

getPersons();
