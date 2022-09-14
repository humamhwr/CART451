let express = require('express');
const portNumber =4200;
const app = express();
app.get('/', requestHandler);
app.use('/veg',vegRoutes);
app.use('/fruit',fruitRoutes);
app.use('/banana.html',errorRoute)
app.use(express.static(__dirname + '/public'));
app.use('/banana',bananaRoute);
app.use('/testForm.html',errorRoute);
app.use('/testForm',bananaRoute);
app.use('/passingTheVars',handleGetVars);
app.use('/testFormPost.html',errorRoute);
app.use('/postEx',handlePostEx);
const fileuploadMiddleWare = require("express-fileupload");
app.use(fileuploadMiddleWare());
app.use('/dataUpload',handlePostedData);





function requestHandler(request,response){
    // send a default response to the client...
    response.send("HELLO WORLD");
     console.log(request); //built in
      console.log(response); //built  in
    console.log(request.url);
    }
    function fruitRoutes(req, res, next){
        // req is the Node.js http request object
       // res is the Node.js http response object
       // next is a function to call to invoke the next middleware
       console.log("IN FRUIT FUNCTION ");
       console.log(req);
      res.send("WE ARE HERE FRUIT ROUTE");
     }
     function vegRoutes(req, res, next){
        // req is the Node.js http request object
       // res is the Node.js http response object
       // next is a function to call to invoke the next middleware
       console.log("IN VEG FUNCTION ");
       console.log(req.url);
      res.send("WE ARE HERE VEG ROUTE");
     }     
     function bananaRoute(req, res, next){
        res.sendFile(__dirname + '/public/banana.html');
     }

      //new error route:
 function errorRoute(req, res, next){
    const error = new Error('Not valid url');
   res.send(error.message);
}

function testFormRoute(req, res, next){
   res.sendFile(__dirname + '/public/testForm.html');
}
     
function handleGetVars(request,response,next){
   console.log(request.url);
   console.log(request.query);
   response.send("GOT IT! THANKS!");
 }

 function handlePostEx(request,response,next){
   console.log(request.url);
   console.log(request.query);
   response.sendFile(__dirname + '/public/testFormPost.html');
   }

   function handlePostedData(request,response){
      console.log(request.body); //body of packet
      console.log(request.files); //request
   }

   if(!request.files)
   {
       response.send("File was not found");
       return;
   }
   // using the name attributes of the form fields ...
   console.log("the color chosen:: "+request.body.color);
     console.log("the favorite city chosen:: "+request.body.city);

   // here is the field name of the form
   let  temp_file = request.files.imageF;

    let imagePath  = __dirname + '/public/images/'+request.files.imageF.name;
   // Use the mv() method to place the file somewhere on your server
   temp_file.mv(imagePath, function(err) {
   if (err)
       return response.status(500).send(err);
       response.send('File uploaded!');
    });
  

app.listen(portNumber, function () {
    console.log("Server is running on port "+portNumber);
  });

 
