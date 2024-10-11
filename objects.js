console.log("jsonobjects")
let person={
    "name":"Ashley",
    "country":"Kenya",
    "city":"Nairobi"
}


console.log(person.city)
console.log(person["city"])

//add properties
person["location"]="Kiambu"
//person.location="kevin"
console.log(person)

//add an array of skills

person["skills"]=["html","css",[20,30,40],"js","bootstrap"]
console.log(person)
console.log(person["skills"][2][2])


//modifying values
person["name"]="Naomi"
console.log(person)

//methods
//keys=used to display all values in an object
console.log(Object.keys(person))
//values=used to display all values in an object
console.log(Object.values(person))
//entries=used to display key and value inside an array
console.log(Object.entries(person))


