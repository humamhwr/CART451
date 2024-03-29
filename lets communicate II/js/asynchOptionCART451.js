/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 //asynch / await -> available in es8
 //return promises just like before
 //USEs promises behind the scenes
 //looks LIKE synchronous code ... no need for .then() - 
 //you though can ONLY await INSIDE asynch functions...

*/
//window.onload = function () {
    const buttonCallJ = document.querySelector("#callbackJ");
    const responseJ = document.querySelector("#responseJ");
    
    buttonCallJ.addEventListener("click", function () {
      console.log("clicked");

}); //button

async function getDataWithAsycnch(){
  try{
let userString = document.querySelector("user-string-J").value;
const aResult = await checkAuth_A (userString);
const finalString = await changeString_A (aResult);
responseJ.innerHTML = finalString;
  }

  catch{(error)
    console.log("error " +error);
  }


  

}



function checkAuth_A(userString) {

  return new Promise((resolve,reject)=>{
  //console.log(userString);
  setTimeout(() => {
    let userFruit = "";
    if (userString === "Hey guys, let's grab lunch") {
      userFruit = "Hey y'all, let's grab lunch";
    } else {
      userFruit = "noFruit";
      reject (userFruit);
    }
    console.log("time-out one-a complete " + userFruit);
    resolve (userFruit);
    
  }, 100); // let 5 secs go past then send back
})
}

function changeString_A(fruitString) {
  return new Promise ((resolve,reject)=>{
  //console.log(userString);
  setTimeout(() => {
    let userFruitwithstars = fruitString.split("").join("");
    console.log("time-out two-a complete " + userFruitwithstars);
    resolve (userFruitwithstars);
  }, 100); // let 5 secs go past then send back
})
}

