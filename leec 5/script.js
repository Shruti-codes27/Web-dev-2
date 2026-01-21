// const btn=document.querySelector("button") ;
// btn.classList.add("btn")

// function print(){
//     console.log("button clicked");
// }

// btn.addEventListener('click',print);
// btn.addEventListener('click',()=>console.log("Hello, your have clickced the button"));

// btn.addEventListener('click',print)
// btn.removeEventListener('click',print);

// const btn2=document.querySelector(".stop");
// btn2.addEventListener('click',print);
// // btn2.addEventListener('click', (e)=>{


    // const click=document.querySelector("#click");
    // // const stop=document.querySelector("#stop")


    // function Message(event){
    //     console.log(event.key)
    //     console.log("Button Clicked!")
    // }

    // click.addEventListener('keyup',Message);


    const form=document.querySelector("form")
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        console.log("Form Submitted")
    })






    //     console.log("You have clicked the stop button");
    // }
    // click.addEventListener('click',Message);
    // stop.addEventListener('click',()=>{
    //     console.log("Stop button clicked!");
    //     click.removeEventListener('click',Message)
    // })   



