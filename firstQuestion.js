
// Question No: 1
// How to compare the two JSON properties without orders


let json1 = {
    "name" : "Suresh",
    "age" : 23
}

let json2 = {
    "age": 25,
    "name" : "Santhosh"
}

// we have Object.keys and Object.values functions 

let json1_keys = Object.keys(json1)
let json2_keys = Object.keys(json2)

if (json1_keys.length != json2_keys) {
  console.log("the json are not same")
}


let output = []
for (let i of json1_keys) {
  if ((json2_keys).includes(i)) {
    output.push(i)
  }
}
if (output.length == json1_keys.length) {
  console.log("the given json keys are same")
} else {
    console.log("the given json keys are different")
}


//  we can check with the values also...

for (let i of json1_keys) {
  if (json1[i] === json2[i]) {
    console.log("the given json values are same")
  } else {
    console.log("The given json values different")
  }
}


// like wise we have few methods to check the given objects or json properties.



