//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];

console.log("Get Average",getAverageGrade(bob, 'INFO 1601' ))
console.log("Assignment Mark:",getAssignmentMark(bob, 'INFO 1600', 0))
console.log("Average Assesment:",averageAssessment(students,'INFO 1603', 1))


function getAverageGrade(student, course){
  let found;
  for (let i=0;i<=student.transcript.length;i++){
    if(student.transcript[i].course==course){
      let sum=0;
      found=true
      for(let j=0;j<3;j++){
        sum+=student.transcript[i].grades[j];
      }
      return sum / 3;
    }
  }
  if (!found) return -1;
}

function getAssignmentMark(student, course, num){
  for (let i=0;i<student.transcript.length;i++){
    if(student.transcript[i].course===course){
      if(num<=2&&num>=0){
        return student.transcript[i].grades[num];
      }
    }
  }
  return -1;
}

function averageAssessment(students, courseName, assignment){
  let avg=0;
  let count=0;
  for(let h=0;h<students.length;h++){
    if(getAssignmentMark(students[h],courseName,assignment) !== -1){
      avg+=getAssignmentMark(students[h],courseName,assignment)
      count++
    }
  }
  return avg/count; 
}

