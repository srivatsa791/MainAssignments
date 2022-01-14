class Person {
  static College = "Jain University";
  constructor(Name, Department, Percentage, House_Name) {
    this.Name = Name;
    this.Department = Department;
    this.Percentage = Percentage;
    this.House_Name = House_Name;
  }
  static getCollege() {
    return this.College;
  }
  display() {
    console.log(`Employee ID:${this.Department}
Employee Name:${this.Name}
Percentage:${this.Percentage}
House_Name:${this.House_Name}`);
  }
}
let person = new Person("John", "Mechanical", 96, "Dragons");
console.log("College:" + Person.getCollege());
person.display();
