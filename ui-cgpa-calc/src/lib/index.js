import { writable } from "svelte/store";


// incomplete
export const UNITS = {
  "MAT 101": 4,
  "MAT 111": 4,
  "MAT 121": 4,
  "MAT 141": 4,
  "MAT 142": 4,
  "MAT 211": 4,
  "MAT 212": 4,
  "MAT 221": 4,
  "MAT 242": 4,
  "MAT 241": 4,
  "MAT 251": 4,
  "MAT 256": 4,
  "MAT 255": 4,
  "CHE 157": 4,
  "CSC 101": 4,
  "CSC 102": 4,
  "CSC 212": 4,
  "GEO 211": 4,
  "GEO 231": 4,
  "GES 101": 3,
  "PHY 102": 3,
  "PHY 103": 3,
  "PHY 114": 3,
  "PHI 101": 3,
  "PHI 102": 3,
  "PHI 202": 3,
  "PHI 203": 3,
  "PHI 205": 3,
  "CHE 127": 3,
  "CHE 177": 3,
  "GEO 111": 3,
  "GEO 131": 3,
  "GEO 181": 3,
  "STA 111": 3,
  "STA 112": 3,
  "STA 121": 3,
  "STA 211": 3,
  "STA 221": 3,
  "STA 114": 3,
  "GES 201": 3,
  "CSC 293": 3,
  "CSC 233": 3,
  "BOT 111": 3,//stopped here
  "GES 102": 2,
  "GES 103": 2,
  "CHE 191": 2,
  "CHE 192": 2,
  "STA 131": 2,
  "GES 107": 2,
  "GES 108": 2,
  "GES 101": 2,
  "MAT 299": 2,
  "ZOO 114": 2,
  "ZOO 116": 2,
  "ZOO 118": 2,
};


export function getGradeValue(score) {
  if (score >= 70) return { alias: "A", value: 4 };
  if (score >= 60 && score <= 69) return { alias: "B", value: 3 };
  if (score >= 50 && score <= 59) return { alias: "C", value: 2 };
  if (score >= 45 && score <= 49) return { alias: "D", value: 1 };
  if (score <= 45) return { alias: "F", value: 0 };
}

export function calculateCGPA(resObj) {
  const resArr = Object.entries(resObj);
  let totalUnits = 0;
  let totalGrade = 0;

  resArr.forEach(([course, score]) => {
    const unit = UNITS[course];
    totalUnits += unit;
    const gradeValue = unit * getGradeValue(score).value;
    totalGrade += gradeValue;
  });
  
  const cgpa = (totalGrade / totalUnits).toFixed(2);
  
  if (isNaN(cgpa)) return 0.00;

  return cgpa;
}

export function userResult() {
  return writable({});
}
