//event capturing
// element.addEventListener('click', handler, true);

// document.getElementById('outer').addEventListener("click", () => {
//     alert("Outer Div");
// }, true);

// document.getElementById('inner').addEventListener("click", () => {
//     alert("Inner Div");
// }, true);

// document.getElementById('btn').addEventListener("click", () => {
//     alert("Button");
// });


//event bubbling
// element.addEventListener('click', handler);

// document.getElementById("outer").addEventListener("click", () => {
//   alert("Outer Div (Bubbling)");
// });

// document.getElementById("inner").addEventListener("click", () => {
//   alert("Inner Div (Bubbling)");
// });

// document.getElementById("btn").addEventListener("click", () => {
//   alert("Button Clicked");
// });


//without event.preventDefault();
// document.getElementById("myForm").addEventListener("submit", function(e) {
//   alert("Form submitted with Alert automatically");
// });

//with event.preventDefault();
document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stops page reload
  alert("Form submitted with JavaScript!");
});



