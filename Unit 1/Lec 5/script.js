//add.EventListener()
// Element.addEventListener("eventType", callbackFunction);

// document.getElementById("btn").addEventListener("click", function () {
//     alert("Button was clicked!");
// })


// //removeEventListener()
// elemwnt.removeEventLitener(eventType, eventHandler);
// const button = document.getElementById("btn");
// const stopBtn = document.getElementById("stop");

// function showMessage() {
//     alert("Button Clicked");
// }

// button.addEventListener("click", showMessage);
// stopBtn.addEventListener("click", function () {
//     button.removeEventListener("click", showMessage);
// })

//Event object
element.addEventListener("click", function (event) {
    console.log(event);
})
