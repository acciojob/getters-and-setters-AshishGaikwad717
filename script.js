//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	} 
}
 get name() {
    return this.name;
  }
  set age(age) {
    this.age = age;
  }
class Student extends Person {
	study() {
    console.log(`${this.name} is studying`);
  }
}
const person=new Person("John",25);
class Teacher extends Person {
	teach() {
    console.log(`${this.name} is teaching`);
  }
}
const student = new Student("John", 20);
console.log(student.name); 
student.study(); 

const teacher = new Teacher("Ms. Smith", 35);
console.log(teacher.name); 
teacher.teach(); 
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
