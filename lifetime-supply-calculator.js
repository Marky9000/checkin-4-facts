/*Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.*/

function lifeTimesupply(agenow, amountPerdaynum)
{//max age is 100 
 
    const amountnum2 = (100 - agenow) * 365 * amountPerdaynum;
    
    console.log("you will need " + amountnum2 + "to last until the ripe old age of 100 ");
    

}

lifeTimesupply ( 50, 1);
lifeTimesupply ( 30, 1);
lifeTimesupply ( 79, 1);