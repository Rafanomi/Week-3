// defination of the function EmployeeInfo 
function EmployeeInfo(name,Salary) 
{ 
    console.log("Wellcome " + name+ " Your monthly Salary is "+ Salary) 
} 
console.log ("This is my first progame") 
var EmpName="John" 
var EmpSalary= 50000 
// calling of the function EmployeeInfo 
EmployeeInfo(EmpName,EmpSalary)
// Add this for Second Exercise 
const EmpSkills= (skills,Name,LabGrp)=> { 
  console.log(" Student ID"+ Name+ "Expert in "+ skills) 
  console.log("Lab Group Name",LabGrp) 
} 
EmpSkills("java","Replace this with your Student ID ","Replace with your Lab Grp") 

const student = require('./StudentInfo')

// // because getName is the function so we use ()  
console.log("Student Name:" + student.getName())   
console.log(student.Location())  
console.log(student.dob)  
const person = require('./Person')
person1= new person("Jim","USA","myemail@gmail.com")  
console.log("using Person Module",person1.getPersonInfo()) 
console.log("Programe ended") 
