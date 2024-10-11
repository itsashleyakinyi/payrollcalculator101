// Create a new file called objectTask and attempt the below questions:
// my_object= [23, “Jane”, 560, [“Lesson”, “Maths”, {“currency” : “KES”}], 987, 76,”John”]
// Display:
// 1. KES
// 2. 560
// 3. Maths


// 4. In the object with the key currency, add another key “amount” with value 90
// 5. Reverse 987 to 789  using an inbuilt -methods or Assigning 789 manually.
//      Hint: arrays can be reversed using reverse() functions
// 6. Change the name “John” to “Jane”

let my_object=[23,"Jane", 560,["Lesson","Maths",{"currency": "KES"}],987,76,"John"]
my_object.splice(1,1,"John")
console.log(my_object)
console.log(my_object[3][2]["currency"])
console.log(my_object[2])
console.log(my_object[3][1])
my_object[3][2]["amount"]=90

my_object[4]=my_object[4].toString()
my_object[4]=my_object[4].split('')
my_object[4]=my_object[4].reverse()
my_object[4]=my_object[4].join('')
my_object[4]=Number(my_object[4])
console.log(my_object[4])
console.log(my_object)







