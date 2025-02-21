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

type Product = { name : string; unitPrice?: number };

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
type ProductType = {
    name : string; 
    unitPrice? : number; 
    purchase : Purchase; 
}

let product : ProductType = {
    name : "Matthew Idungafa",
    purchase : (quantity) => console.log(`Purchased ${quantity} tables`),
}
