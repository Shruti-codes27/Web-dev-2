// querySelector()
// document.querySelector("selector");
let card = document.querySelector(".card");  //using css selector
console.log(card.textContent);  // output: "Hello"

const para = document.querySelector('.info');
para.style.color = "Red";

//selecting by id
// const heading = document.querySelector("#title");

// // Selecting by class
// const firstPara = document.querySelector(".text");

// //selecting by tag
// const paragraph = document.querySelector("p");

// //selecting nested elements
// const listItem = document.querySelector("ul li");


//querySelectorAll()
// document.querySelectorAll("selector");
let notes = document.querySelectorAll(".note");
notes.forEach(note => console.log(note.textContent)); // output: "one", "two"


// _________________________________________________________________________________________





// const para=document.querySelector('.para')
// para.innerText="This is updated paragraph"
// para.style.color="green"
// console.log(para)

// const para=document.getElementsByClassName('para')  //return HTML Collect
// para[0].innertext="This is updated paragraph"
// para[1].style.color="green"
// console.log(para)

// const para2=document.querySelectorAll('.para') //return nodelist
// para2[0].innerText="This is updated paragraph"
// para2[1].style.color="green"
// console.log(para2)


// let arr=[1,2,3,4,5]
// arr.forEach((ele)=>console.log(ele))

// console.log(para2)