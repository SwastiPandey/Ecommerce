const color=["red" ,"yellow"];

color.push("pink");

console.log(color)
// function expression
const sum =function(a,b){
    
    return a+b
}

console.log(sum(3,5))

// function declaration
function multiply(a,b){
    return a*b
}
console.log(multiply(5,6))

//Arror function

const ShowName=(name)=>name;

console.log(ShowName("hellow world"))
// Object Destructuring.....
const Swasti={
    roll:"22",
    name:"Swasti Pandey",
    branch:"cs",
    favColor:"white"
}
const {roll, name, branch}=Swasti
console.log(roll, name, branch )

const Obj= {
    
    light: ["white", "yellow"] ,
    dark: "black purple" ,
    cream: "beige peach",
    
   }
    
   let {light, dark, cream,degignation="web developer"} = Obj
   
    console.log(Obj)

    const Obj2= {
    
        light: ["white", "yellow"] ,
        dark: "black purple" ,
        cream: "beige peach",
        desig:"web developer",
        rank:"2"
        
       }
        
       function showAllData({dark , rank, cream}){
           return ` ${dark} , ${rank} ${cream}`
       }
       
       console.log(showAllData(Obj2))