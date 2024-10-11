// TASK 15: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that takes input of someone's basic salary and benefits, adds them to fin
// d the gross salary then uses  the gross salary to find the NHIF.
// To find the Kenya NHIF Rate using THIS LINK:

//function to calculate gross salary
function calculate_grosssalary(basic_salary, benefits) {
  gross_salary = basic_salary + benefits;
  return gross_salary;
}

let basic = Number(prompt("enter basic salary:"));
let benefit = Number(prompt("enter benefits:"));
let total = calculate_grosssalary(basic, benefit);
console.log("gross salary: "+ total);

//function to calculate NHIF
// 5,999	150
// 6,000 - 7,999	300
// 8,000 - 11,999	400
// 12,000 - 14,999	500
// 15,000 - 19,999	600
// 20,000 - 24,999	750
// 25,000 - 29,999	850
// 30,000 - 34,999	900
// 35,000 - 39,999	950
// 40,000 - 44,999	1,000
// 45,000 - 49,999	1,100
// 50,000 - 59,999	1,200
// 60,000 - 69,999	1,300
// 70,000 - 79,999	1,400
// 80,000 - 89,999	1,500
// 90,000 - 99,999	1,600
// 100,000 and above	1,700

function calculate_NHIF(k) {
  let nhif = 0;
  if (k > 0 && k <= 5999) {
    nhif = 150;
  } else if (k >= 6000 && k <= 7999) {
    nhif = 300;
  } else if (k >= 8000 && k <= 11999) {
    nhif = 400;
  } else if (k >= 12000 && k <= 14999) {
    nhif = 500;
  } else if (k >= 15000 && k <= 19999) {
    nhif = 600;
  } else if (k >= 20000 && k <= 24999) {
    nhif = 750;
  } else if (k >= 25000 && k <= 29999) {
    nhif = 850;
  } else if (k >= 30000 && k <= 34999) {
    nhif = 900;
  } else if (k >= 35000 && k <= 39999) {
    nhif = 950;
  } else if (k >= 40000 && k <= 44999) {
    nhif = 1000;
  } else if (k >= 50000 && k <= 59999) {
    nhif = 1200;
  } else if (k >= 60000 && k <= 69999) {
    nhif = 1300;
  } else if (k >= 70000 && k <= 79999) {
    nhif = 1400;
  } else if (k >= 80000 && k <= 89999) {
    nhif = 1500;
  } else if (k >= 90000 && k <= 99999) {
    nhif = 1600;
  } else {
    nhif = 1700;
  }
  return nhif;
}
let solution1= calculate_NHIF(total);
console.log("NHIF: "+ solution1);
// TASK 16: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the program above, then use  the gross salary to find the NSSF.
// To find the Kenya NSSF Rate  using 6% of the Gross Salary. BUT ONLY A MINIMUM OF 18,000 Gross Salary CAN BE USED IN NSSF.

// Write a normal program but use functions if you feel comfortable.

// Task 17: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the same program and calculate an individual’s NHDF using:
//  i.e NHDF = gross_salary *  0.015

// Write a normal program but use functions if you feel comfortable.

// Task 18: Using Python or PHP or Java or Ruby or JavaScript
// Calculate the taxable income.
// i.e taxable_income = gross salary - (NSSF + NHDF + NHIF)

// Write a normal program but use functions if you feel comfortable.

// TASK 19: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the same program and find the person's PAYEE using the taxable income above.
// Find the Kenya PAYEE Tax Rate using THIS LINK
// Less Relief
// Write a normal program but use functions if you feel comfortable.

// Task 20: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the same program and calculate an individual’s Net Salary using:
//  net_salary = gross_salary - (nhif + nhdf +  nssf + payee)

//task 16 


function calculate_NSSF(gs) {
  let nssf = "";
  if (gs>=0 && gs<= 18000) {
    nssf =(6 / 100) * gs;
  } else {
    nssf= 0.06 * 18000
  }
  return nssf;
}
let solution2=calculate_NSSF(total)
console.log("NSSF: "+ solution2)

//task 17

function calculate_NDHF(salary){
    NDHF=0.015 * salary
    return NDHF
}
let solution3=calculate_NHIF(total)
console.log("NDHF: " + solution3)

//task 18

function calculate_taxable_income(a,b,c,d){
    taxable_income= a - (b + c + d)
    return taxable_income
}
let solution4=calculate_taxable_income(total,solution2,solution3,solution1)
console.log("Taxable income: " + solution4)

//task19

// Monthly Bands of Taxable Income (KES)	Tax Rate
// 0 – 24,000	                             10%
// On the next 8,333	                     25%
// On the next 467,667	                     30%
// On the next 300,000	                     32.5%
// On amounts over 800,000	                 35%
// Personal Relief: KES 2,400.00 per month
// Minimum Taxable Income: KES 24,001.00 per month
function calculate_PAYEE(TS,Relief=2400){
    let tax=0
    if(TS<=24000){
        tax=0
    }else if(TS>24000 && TS<=32333 ){
        tax=(24000*0.1)+((TS-24000)*0.25)-Relief
    }else if(TS>32333 && TS<=500000){
        tax=(24000*0.1)+(8333*0.25)+((TS-32333)*0.3)-Relief
    }else if(TS>500000 && TS<=800000){
        tax=(24000*0.1)+(8333*0.25)+(467667*0.3)+((TS-500000)*32.5)-Relief
    }else{
        tax=(24000*0.1)+(8333*0.25)+(467,667*0.3)+(300000*32.5)+((TS-800000)*0.35)-Relief
    }
    return tax

}
let solution5=(calculate_PAYEE(solution4))
console.log("PAYEE: " + solution5)
