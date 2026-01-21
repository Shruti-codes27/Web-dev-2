// const para=document.querySelector('.para')
// para.innerText="This is updated paragraph"
// para.style.color="green"
// console.log(para)

// const para=document.getElementsByClassName('para')  //return HTML Collect
// para[0].innertext="This is updated paragraph"
// para[1].style.color="green"
// console.log(para)

const para2=document.querySelectorAll('.para') //return nodelist
para2[0].innerText="This is updated paragraph"
para2[1].style.color="green"
console.log(para2)


let arr=[1,2,3,4,5]
arr.forEach((ele)=>console.log(ele))