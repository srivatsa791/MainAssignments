var studentData = [
  { person: "Srivatsa", marks: "22", department: "CSE" },
  { person: "Srinath", marks: "35", department: "MECHANICAL" },
  { person: "Geetha", marks: "48", department: "IT" },
];

//using for loop
console.log("\nfor loop");
for (let i = 0; i < studentData.length; i++) {
  console.log(studentData[i]);
}

//using for in loop
console.log("\nfor in loop");
for (let item in studentData) {
  for (let x in studentData[item]) {
    console.log(`${x} : ${studentData[item][x]}`);
  }
}

//using for of loop
console.log("\nfor of loop");
for (let item of studentData) {
  for (let x of Object.keys(item)) {
    console.log(`${x} : ${item[x]}`);
  }
}

//using forEach loop
console.log("\nforEach loop");
studentData.forEach((item) => {
  for (let x in item) {
    console.log(`${x} : ${item[x]}`);
  }
});
