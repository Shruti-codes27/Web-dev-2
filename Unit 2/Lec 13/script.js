// // basic sytanx of promise chaining
// new Promise((resolve, reject) => {
    
// })
// .then((result) => {
//     return result2;
// })
// .then((result2) => {
//     return result3;
// })
// .catch((error) => {
//     console.log("Error:", error);
// })
// .finally(() => {
//     console.log("all done!");
// });

// promise chaining 

// function doHomework() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let homeworkDone = true;
//             if (homeworkDone) {
//                 console.log("Homework is done!");
//                 resolve("Homework is done!");
//             } else {
//                 reject("Homework is not done!");
//             }
//         },3000);
//     });
// }

// function eatDinner() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let dinnerDone = true;
//             if (dinnerDone) {
//                 console.log("Dinner is done!");
//                 resolve("Dinner is done!");
//             } else {
//                 reject("Dinner is not done!");
//             }
//         },3000);
//     });
// }

// function goToPlayground() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let permission = true;
//             if (permission) {
//                 console.log("Went to playground!");
//                 resolve("Went to playground!");
//             } else {
//                 reject("Permission denied to go to playground!");
//             }
//         }, 3000);
//     });
// }

// promise chaining starts

doHomework()
.then((data) => {
    console.log(data);
    return eatDinner();
})
.then((data) => {
    console.log(data);
    return goToPlayground();
})
.catch((error) => {
    console.log("something went wrong:", error);
})
.finally(() => {
    console.log("All tasks are done!");
});
