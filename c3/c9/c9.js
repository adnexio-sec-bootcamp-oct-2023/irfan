//this keyword
    const price = {
        price1: 'RM 6.00',
        price2: 'RM 4.00',

        fruits: function(){
            return{
                Banana: this.price2,
                Mango: this.price1,
            };
        },
    };
//within the object
console.log(price.fruits());
//globally
const priceOfFruits = price.fruits;
console.log(priceOfFruits());
//using call
console.log(priceOfFruits.call(price));
//using bind
const boundFunction = price.fruits.bind(price);
console.log(boundFunction());
