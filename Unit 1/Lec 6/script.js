//click event
// Element.addEvenetListener('click', function() {
//     //code to run when element is clicked
// });

// document.getElementById('myButton').addEventListener('click', function() {
//     alert('Button clicked!!');
// });

// //mpuseoverEvent
// // Element.addEvenetListener('mouseover',function(){
// //     //code to run when mouse hovers over the element
// // });

// document.getElementById('myButton').addEventListener('mouseover',function() {
//     alert('hovered pn button!!');
// });


// //quee
// const hoverBox =  document.getElementById('hover-box');

// //listener for when the mouse enters the element
// hoverBox.addEventListener('mouseover', () => {
//     hoverBox.style.backgroundColor = 'lightpink';
// });

// //listener for when the mouse leaves the element
// hoverBox.addEventListener('mouseout', () => {
//     hoverBox.style.backgroundColor = 'yellow';
// });

//leyboard events
// //keydown events
// element.addEventListener('keydown', function(event) {
//     //code to run when a key is pressed down
// });

//listen for any key press on whole document
// document.addEventListener('keydown', function(event) {
//     alert("You pressed: " + event.key);
// });

//keyup events
// Element.addEventListener('keyup', function(event) {
//     //code to run when a key is released
// });

// document.addEventListener('keyup', function(event) {
//     alert("You released: " + event.key);
// });

// //queee
// const keyInput = document.getElementById('key-input');

// keyInput.addEventListener('keydown', (event) => {
//     // the event object contains info about event
//     console.log(`Key pressed: ${event.key}`);
//     });

//forms events
//submit event
// formElement.addEventListener('submit', function(event)
// {
//     //code to run when form is submitted       
// });

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); //prevent the default form submission behavior
    alert('Form submitted!');
});





