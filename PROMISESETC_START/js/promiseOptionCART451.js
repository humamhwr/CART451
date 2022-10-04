// a promise - promises something in the future
// inside the promise is what executes ...
//resolve() - tells js that we are done and have a value
//reject() - used to throw  an  error
//promises are great because you do not need to nest the code - easier to control
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
//window.onload = function () {
const buttonCallB = document.querySelector("#callbackB");
const responseB = document.querySelector("#responseB");

buttonCallB.addEventListener("click", function () {
  console.log("clicked B");
  checkAuth_A(document.querySelector("#user-string-B").value)
  .then (
    //reslove
    function (result){
    console.log("resolve"+result);
    return changeString_A (result);
  },
  //reject
  function (result){
    console.log("reject"+result);
    return new Promise ((resolve,reject))


  }
  
  )
  .then (function (result){
    console.log(result);
  
  }
  )
.catch (function (error){
  console.log("error occured :: "+error);
})
})
  




/** option 1 :: everything happens as single functions/ **/
function checkAuth_A(userString) {

  return new Promise((resolve,reject)=>{
  //console.log(userString);
  setTimeout(() => {
    let userFruit = "";
    if (userString === "Sabine") {
      userFruit = "pineapple";
    } else {
      userFruit = "noFruit";
      reject (userFruit);
    }
    console.log("time-out one-a complete " + userFruit);
    resolve (userFruit);
    
  }, 5000); // let 5 secs go past then send back
})
}

function changeString_A(fruitString) {
  return new Promise ((resolve,reject)=>{
  //console.log(userString);
  setTimeout(() => {
    let userFruitwithstars = fruitString.split("").join("");
    console.log("time-out two-a complete " + userFruitwithstars);
    resolve (userFruitwithstars);
  }, 5000); // let 5 secs go past then send back
})
}
  
//};
