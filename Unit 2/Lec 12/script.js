// const myPromise = new Promise((resolve, reject) => {
//     // your task here
//     if (success) {
//         resolve("Work Done!");
//     } else {
//         reject("Work Failed!");     
//     }
// });

// const homeworkPromise = new Promise((resolve, reject) => {
//     console.log("I promise to do my homework by tomorrow");

//     setTimeout(() => {
//         const homeworkDone = true;
//         if (homeworkDone) {
//             resolve("Homework is done!");
//         } else {
//             reject("Homework is not done!");
//         }
//     }, 2000);
// });

// console.log("waiting for the homework to be resolved...");

// console.log(homeworkPromise);

// const homeworkPromise = new Promise((resolve, reject) => {
//     console.log("I promise to do my homework by tomorrow");

//     setTimeout(() => {
//         const homeworkDone = false;
//         if (homeworkDone) {
//             resolve("Homework is done!");
//         } else {
//             reject("Homework is not done!");
//         }
//     }, 3000);
// });

// console.log("waiting for the homework to be resolved...");

// console.log(homeworkPromise);

// que

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`action completed after ${ms} milliseconds`);
        }, ms);
    });
}

console.log("starting delay...");
delay(2000).then((message) => {
    console.log(message);
});