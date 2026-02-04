// const timerId= setInterval(()=>{
//     console.log("after 1 sec")
// },1000)
// console.log(timerId)
// setTimeout(()=>{
//     clearInterval(timerId)
// },10000)

// var a=1
// var  timerId=setInterval(()=>{
//     if(a==10)clearInterval(timerId)
//     console.log(a)
//     a++
    
// },1000)

// setTimeout(()=>{
//     clearInterval(timerId)
// },10000)

// const studentname=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")

// btn.addEventListener('click',()=>{
//     //creating element
//     const li=document.createElement('li')
//     const dlt=document.createElement('button')

//     //providing the element
//     dlt.innerText="Delete";
//     li.innerText=studentname.value;

//     dlt.addEventListener('click',()=>{
//         list.removeChild(li)
//     })

//     //appending the element
//     list.appendChild(li)
//     li.appendChild(dlt)

//     //clearing text
//     studentname.value=""

// function print(){
//     console.log("inside print")
// }
// function greet(print){
//     setTimeout(()=>{
//         console.log("hello students.")
//         print()
//     },2000)
// }

// greet(print)


// console.log("before timeout")
// setTimeout(()=>{
//     console.log("inside timeout")
// })
// console.log("after timeout")
// /////////////////////////////////////////////////////////////////////////
// function greet(callback){  //callback func
//     setTimeout(()=>{
//         console.log("hello students")
//     },2000)
//     console.log("heelo students")
// }

// function print(sample,num){   //higher order func
//     sample()
//     console.log("Total students are",num)
// }

// print(greet,45)
// /////////////////////////////////////////////////////////////////////////


// console.log("starting homework.....")
// setTimeout(()=>{
//     console.log("homework done......");
//     console.log("starting dinner.....");

//     setTimeout(()=>{
//         console.log("dinner done...");
//         console.log("getting ready to go out");

//         setTimeout(()=>{
//             console.log("going to playground.......");
            
//         },1000);

//     },1500);

// },2000);


function finishedHomework(callback){
    console.log("starting homework......"); 
    setTimeout(()=>{
        console.log("homework done!");
        callback();
    },2000);
}

function eatDinner(callback){
    console.log("starting dinner....");
    setTimeout(()=>{
        console.log("dinner done!");
        callback();
    })
}
function goToPlayground(){
    console.log("going to playground!");
}

finishedHomework(){
    eatDinner(){
        goToPlayground(){

        }

    }
}

