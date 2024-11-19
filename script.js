class Person {
  constructor(name, age) {
    this._name = name; // Use a private variable convention
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`); // Use the getter for name
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`); // Use the getter for name
  }
}

// Example usage
const student = new Student("John", 20);
console.log(student.name); // Output: John
student.study(); // Output: John is studying

const teacher = new Teacher("Ms. Smith", 35);
console.log(teacher.name); // Output: Ms. Smith
teacher.teach(); // Output: Ms. Smith is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
