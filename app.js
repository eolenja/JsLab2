const PI = 3.1415;
 radius = 5 ;
 const area = PI * radius * radius 
const plantRadius = 0.8;
const startingPlantAmount = 20
const maxCapacity = area / plantRadius
console.log (area)
// the current area of the space is 78.53750000000001//

{let numberOfPlants = 20
const growth = numberOfPlants * 2
console.log (growth);} 

 
function plantGrowth (weeks) {



const plantCount = startingPlantAmount * Math.pow (2, weeks);

if (plantCount > maxCapacity * 0.8 ) { 
    console.log (`week ${weeks}: prune the plants. too many plants!`);
}
 else if(
    plantcount >= maxCapacity * 0.5 &&
    plantCount <= maxCapacity * 0.8

 ) { 
   console.log ( `Week ${weeks}: Monitor the plants. They are growing within acceptable limits`
 );
} 
else { console.log (`Week ${weeks}: Plant More. There is room for more plants :)`)}

} 
console.log (plantGrowth(1));
console.log (plantGrowth(2));
console.log (plantGrowth(3));













