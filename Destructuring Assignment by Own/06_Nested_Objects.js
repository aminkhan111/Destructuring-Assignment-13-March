// 06_Nested_Objects.js

// Write a function that takes an object representing a person as input, and extracts the name and street properties from a nested object using object destructuring. The function should return an object with these two properties. A sample object is given below.



const person ={
    name:"Amin",
    address:{
        street:"Kencha Reddy Layout",
        city: "Bangaluru",
        state:"karnataka",
    
    },
};

function DataExtract(obj){
    const{
        name,address:{street},}=obj;

        return{name,street};
    }
console.log(DataExtract(person));






