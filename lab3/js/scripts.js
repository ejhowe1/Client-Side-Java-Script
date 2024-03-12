// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too

function hamburger(bun, patty, cheese, sauce, toppings) {
    this.bun = bun;
    this.patty = patty;
    this.cheese = cheese;
    this.sauce = sauce;
    this.toppings = toppings;

    this.description = function() {
        const pElement = document.getElementById('hamburger');
        pElement.textContent = `You ordered a ${this.bun} bun hamburger with a ${this.patty} patty, ${this.cheese} cheese, ${this.sauce} sauce, and ${this.toppings} toppings. Enjoy!`;
    }
}

const myHamburger = new hamburger('sesame', 'beef', 'cheddar', 'ketchup', 'lettuce, tomato');
myHamburger.description();
