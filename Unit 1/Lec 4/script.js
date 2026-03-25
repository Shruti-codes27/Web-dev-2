// .innerText
// element.innerText  //get visible text
// element.innerText = "new text here" // set visible text

// document.getElementById("info").innerText = "Hello, User!";

// .innerHTML
// element.innerHTML    // get HTML inside the element
// element.innerHTML = "<b>Bold Text</b>";  // set HTML inside the element

// document.getElementById("box").innerHTML = "<strong>Welcome!</strong>";


// .textContent
// element.textContent                 //get the text
// element.textContent = "new text"    // set or change the text

// document.getElementById("heading").textContent = "Welcome to the site!";




//queee
// 1. select both elements
const statusText = document.getElementById('status-text');
const actionButton = document.getElementById('actionButton');

// //2. add event listener to button
// actionButton.addEventListener('click',()=>{
//     //3. this callback fun runs on click
//     statusText.textContent = "button was clicked!";
// })


// .style
// Element.style.propertyName = "value";
document.getElementById("box").style.color = "blue";
document.getElementById("box").style.backgroundColor = "lightgray";

//1. Select the elemennt by its ID
const textElement = document.getElementById("main-text");

//2. change its style properties
textElement.style.color = 'red';
textElement.style.fontSize = '24px';


