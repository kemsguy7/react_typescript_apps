function calculateTotalPrice(
    product: { name : string;  unitPrice: number }, 
    quantity: number, 
    discount: number
) {
    const priceWithoutDiscount = product.unitPrice * quantity;
    const discountAmount = priceWithoutDiscount * discount; 
    return priceWithoutDiscount - discountAmount;
}


function getTotal(
    unitPrice : number,
    quantity: number, 
    discount: number 
) : number {
    const priceWithoutDiscount = unitPrice * quantity;
    const discountAmount = priceWithoutDiscount * discount; 
    return priceWithoutDiscount - discountAmount;
} 


let total : string = getTotal(500 , -1, 0.1);

let today : Date;
today = new Date(); 
console.log(today);


// fetch("https://swapi.dev/api/people/1")
//     .then((response) => response.json())
//     .then((data: unknown) => {
//         if (isCharacter(data)) {
//             console.log("name", data.name);
//         }
//     });

//    function isCharacter(
//      character : any
//    ): character is { name: string } {
//        return "name in character";
//    } 


fetch("https://swapi.dev/api/people/1")
  .then((response) => response.json())
  .then((data: unknown) => {
    if (isCharacter(data)) {
      console.log("name", data.name);
    }  
  });

function isCharacter(
  character: any
): character is { name: string } {
  return "name" in character;
}
  
//
function logText(text : string)  {
    console.log(text);
}


// never type
function foreverTask(taskName : string) : never {
    while (true) {
        console.log (`Doing ${taskName} over and over again...`);
        break;  //his line in invalid, never type can't have a reachable end point
    }
}



//ARRAYS 
const numbers: number[] = []

numbers.push(2);
//numbers.push("three");

console.log(numbers)


// CREATING TYPESCRIPT TYPES


//USING OBJECT TYPES
const table : { name: string, unitPrice? : number } = { //setting unitPrice as optional
    name : "Table", 
}; 



// Type Aliases

//syntax :type yourTypeAliasName = AnExistingType; 

interface Product { name : string; unitPrice?: number };

let table2 : Product =  { name : "Table" }
let chair : Product = { name : "Chain", unitPrice : 40 }; 

console.log(chair); 
console.log(table2); 


// An Alias can extend another tyoe suing the  & operator

type DiscountedProduct = Product & { discount : number };


let chairOnsale : DiscountedProduct = {
    name: "Chair on Sale", 
    unitPrice: 30, 
    discount : 5, 
}

console.log(chairOnsale); 


//function types
type Purchase = (quantity : number) => void;
interface ProductType  {  //changed from type to interface
    name : string; 
    unitPrice? : number; 
    purchase : Purchase; 
}

let product : ProductType = {
    name : "Matthew Idungafa",
    purchase : (quantity) => console.log(`Purchased ${quantity} tables`),
}

interface DiscountedProductType extends ProductType { 
    discount : number; 
}

class Product1 {
    name: string;
    unitPrice?: number; 
}

// Adding types to class properties using contructor
class Product2 { 
    
    unitPrice;
    constructor(public name: string, unitPrice: number ) { //properties don't need to be defined if the contructor parameters are marked as public as seen in the name property
        this.name = name; 
        this.unitPrice = unitPrice; 
    }

    //methods and params returns values can also be typed like examples above
    getDiscountedPrice(discount: number) : number {
        return this.unitPrice - discount; 
    }
}

const tableClass  = new Product2("Table", 500); 
console.log(tableClass); 
console.log(tableClass.getDiscountedPrice(100)); 


enum Level {
    Low, 
    Medium, 
    High = 1, // Custom values cna be defined for enums 
    stringVal = "string", // Enums can also have string values
}

let level = Level.Low;
console.log(level); 
level = Level.High;
console.log(level);
console.log(Level.stringVal);   


//