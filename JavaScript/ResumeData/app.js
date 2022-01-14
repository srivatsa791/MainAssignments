const resumeData = {
  name: "A.P.Srivatsa",
  address: `1-49/21/3,alimelu apartments, tpt, chittoor, A.P`,
  mobile: 98786786868,
  emailID: "sample@gmail.com",

  "Educational Profile": [
    {
      Institute: "Jain University",
      Degree: "Bachelor of science",
      Year: `2016-2020`,
      Percentage: "82%",
    },
    {
      Institute: "Narayana",
      Degree: "Inter",
      Year: `2014-2016`,
      Percentage: "95",
    },
    {
      Institute: "Sri Chaitanya",
      Degree: "10th",
      Year: 2012,
      Percentage: "10gpa",
    },
  ],
  CERTIFICATIONDETAILS: {
    certificateName: "JavascriptBeginners",
    issuedON: 2020,
    Institute: "guvi",
  },
  MILESTONES: [
    "Got 10th rank in a college Hackathon",
    "participated in a college science fair and won an award",
  ],
  Interest: ["Javascript, sql, expressions and node"],
};

displayResume = (resumeData) => {
  console.log(`
    ${resumeData.name}
    ${resumeData.address}
    Mobile:${resumeData.mobile}
    Email ID:${resumeData.emailID}\n
    
        `);
  //console.log(typeof resumeData["Educational Profile"]==="object")
  if (typeof resumeData["Educational Profile"] === "object") {
    console.log("Educational Profile");
    console.table(resumeData["Educational Profile"]);
  }

  console.log("CERTIFICATIONDETAILS");
  for (let element in resumeData["CERTIFICATIONDETAILS"]) {
    console.log(
      `\t${element} : ${resumeData["CERTIFICATIONDETAILS"][element]}`
    );
  }
  console.log("MILESTONES");
  for (let element of resumeData.MILESTONES) {
    console.log(`\t${element}`);
  }
  console.log("Expert at");
  for (let element of resumeData.Interest) {
    console.log(`\t${element}`);
  }
};

displayResume(resumeData);
