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


// function finishedHomework(callback){
//     console.log("starting homework......"); 
//     setTimeout(()=>{
//         console.log("homework done!");
//         callback();
//     },2000);
// }

// function eatDinner(callback){
//     console.log("starting dinner....");
//     setTimeout(()=>{
//         console.log("dinner done!");
//         callback();
//     })
// }
// function goToPlayground(){
//     console.log("going to playground!");
// }

// finishedHomework(() => {
//     eatDinner(() => {
//         goToPlayground();
//     });
// });

// async///////////////////////////////////////////////////////////////////////

// function orderFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Food ordered")
//             res("food has been ordered")
//         },2000)
//     })
// }

// function prepareFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Food prepared")
//             res()
//         },2000)
//     })
// }

// function deliverFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Food delivered")
//             res()
//         },2000)
//     })
// }


// async function order(){
//     // we store our resolve and restore data in a variable and then console it with await
//     const data=await orderFood()
//     console.log(data)
//     await prepareFood()
//     await deliverFood()

// }

// order()
////////////////////////////////////////////////////////////////////////////////////////////////
// orderFood().then((data)=>{
//     return prepareFood()

// }).then((data)=>{
//     return deliverFood()
// }).then((data)=>{

// }).catch((err)=>{
//     console.log("something went wrong.....")
// })
////////////////////////////////////////////////////////////////////////


// console.log("first line")
// try{
//     // let sample=234
//     // console.log(sample)
//     // console.log("line after sample")

//     ////////////
//     let age=16
//     if (age<18){
//         throw new Error("you are not eligible to vote")
        
//     }
// }catch(err){
//     console.warn(err)       
// }
// console.log("last line..")


// async function getData(){
//     const response=await fetch("https://dummyjson.com/products")
//     // console.log(response)

//     const data=await response.json()
//     console.log(data)
//     // console.log(data.products[0].title)
//     data.products.forEach((product)=>{
//         console.log(product.title)
//     })
// }

// getData()

/////////////////////////////////////////////////////////////
// async function getData(){
//     try{
//         const response=await fetch("https://dummyjson.com/products")
//         console.log(response.status)   //if our response is correct our api will be between 200-299 and if fail 404 and response.ok will be true in 200-299
//         // console.log(response)
//         if(response.ok===false){
//             throw new Error("something went wrong")
//         }
        
//         const data=await response.json()
//         console.log(data)
//         // console.log(data.products[0].title)
//         data.products.forEach((product)=>{
//         console.log(product.title)
//     })
//     }catch(err){
//         console.log(err)

//     }finally{
//         console.log("finally block")
//     }
// }
// getData()

//we use /add whemn we want to post data to backend by /add in link of backend
async function sendData(){
    const response= await fetch('https://dummyjson.com/products/add',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title:"New Product",
            description:"This is a new product",
            price:100,
            discountPercentage:10,
            rating:4.5,
            stock:50,
            brand:"ABC",
            category:"Electronics"
        })
    })

    const data=await response.json()
    console.log(data)

}
sendData()

localStorage.setItem("Name","Aryan Dahiya")
localStorage.setItem("Age",18)

console.log(localStorage.getItem("Name"))
console.log(localStorage.getItem("Age"))

localStorage.removeItem("Name")
console.log(localStorage.getItem("Name"))  //null


// in session storage we store temporary data for one session 
sessionStorage.setItem("name","Jaat")
sessionStorage.setItem("age",19)

console.log(sessionStorage.getItem("name"))
console.log(sessionStorage.getItem("age"))
