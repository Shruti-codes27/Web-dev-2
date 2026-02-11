
//.createElement()
// document.createElement(tagname);

//.appendChild()
// parentElemet.appendChild(childElement);

//Step 1: Select the button
// const button =  document.getElementById("add-btn");

// //step 2: add event listener for 'click'
// button.addEventListener("click", function () {
//     //step 3: create new <li> element
//     const newItem = document.createElement("li");
//     newItem.textContent = "Bread";

//     //step 4 append it to the <ul>
//     const list = document.getElementById("shopping-list");
//     list.appendChild(newItem);
// })

//.removeChild()
// parentElement.removeChild(childElemet);

//step 1: select the button
const removeButton = document.getElementById("remove-btn");

//step 2 add event listener for 'click'
removeButton.addEventListener("click", function () {
    // step 3: select the <ul> and its last child
    const list = document.getElementById("shopping-list");
const lastItem = list.lastElementChild;

//step 4: remove last item if exists
if (lastItem){
    list.removeChild(lastItem);
}
})


// classList.add()

//script.js

document.getElementById("div").classList.add("box");

//classList.remove()
document.getElementById("div1").classList.remove("box");

//classList.toggle()
document.getElementById("div1").classList.toggle("box");
