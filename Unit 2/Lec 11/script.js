// function greet() {
//     console.log("Hello");
// }

// function welcome() {
//     greet();
//     console.log("Welcome!");
// }

// welcome();

// quee

// function third() {
//     console.log("Third function is running (Top of the stack)");
// }
// que finish


// function second() {
//     console.log("Second function is running");
//     third();
// }

// function first() {
//     console.log("First function is running");
//     second();
// }

// console.log("Starting the program");
// first();
// console.log("Program has ended");

// setTimeout(() => {
//     console.log("2 seconds over!");
// }, 2000);

// console.log("I didnt wait");

// callback function

// function finishHomework(callback) {
//     console.log("Finished homework");

//     setTimeout(() => {
//         console.log("Finished homework, now waiting for callback");
//         callback();
//     }, 2000);
// }

// function goToPlayground() {
//     console.log("Going to the playground");
// }

// finishHomework(goToPlayground);


// callback hell

// console.log("Starting the program");

// setTimeout(() => {
//     console.log("First task completed");
//     console.log("Starting second task");

//     setTimeout(() => {
//         console.log("Second task completed");
//         console.log("Starting third task");

//         setTimeout(() => {
//             console.log("Third task completed");
//             console.log("Program has ended");
//         }, 2000);
//     }, 2000);
// }, 2000);

// queee

// function makePizza() {
//     console.log("Making pizza...");
//     setTimeout(() => {
//         console.log("Dough is ready!");
//         setTimeout(() => {
//             console.log("Adding toppings...");
//             setTimeout(() => {
//                 console.log("Baking pizza...");
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }

// makePizza();


// // handling callback hell

// function finishHomework(callback) {
//     console.log("Starting homework");
//     setTimeout(() => {
//         console.log("Finished homework");
//         callback();
//     }, 2000);
// }

function eatDinner(callback) {
    console.log("Starting dinner");
    setTimeout(() => {
        console.log("Finished dinner");
        callback();
    }, 2000);
}

function goToSleep() {
    console.log("Going to sleep");
}

// finishHomework(() => {
//     eatDinner(() => {
//         goToSleep();
//     });
// });