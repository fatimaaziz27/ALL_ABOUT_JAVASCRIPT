// AVERAGE CALCULATOR 
let AllMarks = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89];

function getAverage(scores) {
  let sum = 0;
  for (let i in scores){
    sum += scores[i];
    }
    let average = sum/scores.length;
    return average;
}
console.log(getAverage(AllMarks))


// GRADE CONVERTER
let AllMarks = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89];
function getGrade(score) {
  let grades = "";
  for (let marks in score){
    if (score[marks] === 100){
      grades += "A++\n";
      }
      else if (score[marks] >= 90){
      grades += "A\n";
      }
      else if (score[marks] >= 80){
      grades += "B\n";
      }
      else if (score[marks] >= 70){
      grades += "C\n";
      }
      else if (score[marks] >= 60){
      grades += "D\n";
      }
      else{
      grades += "F\n";
      }
  }
  return grades;
}
console.log(getGrade(AllMarks));
