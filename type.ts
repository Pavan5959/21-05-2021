let first: number = 12.0;             // number   
let second: number = 0x37CF;          // hexadecimal  
let third: number = 0o377 ;           // octal  
let fourth: number = 0b111001;        // binary   
  
console.log(first);           // 123  
console.log(second);          // 14287  
console.log(third);           // 255  
console.log(fourth);          // 57  


let empName: string = "iron man";   
let empDept: string = "avenger";   
  
// Before-ES6  
let output1: string = employeeName + " works in the " + employeeDept + " department.";   
  
// After-ES6  
let output2: string = `${empName} works in the ${empDept} department.`;   
  
console.log(output1);//Iron man works in the avenger department.   
console.log(output2);//Irin man works in the avenger department.
