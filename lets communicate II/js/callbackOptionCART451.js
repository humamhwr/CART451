//1: TASK ... lets simulate something that happens after a certain time :::
//i.e. we have to have something that happens in a sequence ... one thing after the other::

//NOTE we are not over complicating by sending to the server  ...

//a - user puts in user string and script will check (if it matches) (we have a timeout here)
//b// it then will fetch the associated fruit if the credentials are correct (again another timeout)
//c does something to the user string ...  - i.e. puts stars in between the usuer name (another time out)
//d sends the rsult back to the user///

// -- these 4 things must happen in sequence  --


// test 






//window.onload = function () {
  const buttonCallA = document.querySelector("#optiondivone");
  const responseA = document.querySelector("#optiondivone");
  
  buttonCallA.addEventListener("click", () => {
   
   
    buttonCallA.onclick = function () {
      if (optiondivone.style.display !== "none") {
        optiondivone.style.display = "none";
      } else {
        optiondivone.style.display = "block";
      }
    };
  
    console.log("click");
    // let returnedFruit = checkAuth_A(
    //   document.querySelector("#user-string-A").value
    // );
    // console.log(returnedFruit);
    checkAuth_C(document.querySelector("#user-string-A").value, changeString_C);
  });
  
  

 


  