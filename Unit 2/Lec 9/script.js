// Synncronous 

// console.log("Step 1: Boil water (take 5 minutes)");
// for (let i = 0; i < 1999999999; i++) {}
// console.log("Step 2: Add maggie noodles");
// console.log("Step 3: Stir and cook wait 2 minutes....");
// for (let i = 0; i < 1999999999; i ++) {}
// console.log("Step 4: Add masala and mix well");
// for (let i = 0; i < 1999999999; i++) {}
// console.log("Step 5: Serve hot and enjoy!");

// Asyncronous

console.log("Starting to make maggie...")
setTimeout(() => {
    console.log('Maggie is ready!')
}, 5000);

setTimeout(() => {
    console.log('Watching ur fav cartoon...')
}, 1000);

setTimeput(() => {
    console.log('Doing homework...')
}, 2000);
    