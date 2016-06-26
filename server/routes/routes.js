var chgpass = require('config/chgpass'); 
var register = require('config/register'); 
var login = require('config/login');
var routeCalc = require('config/routecalc');   

module.exports = function(app) {        


     app.get('/', function(req, res) {       

          res.end("Makina transportation system");    
     });     

     app.post('/login',function(req,res){        
          var email = req.body.email;             
               var password = req.body.password;       

          login.login(email,password,function (found) {           
               console.log(found);             
               res.json(found);    
     });    
     });     

     app.post('/register',function(req,res){         
          var email = req.body.email;             
               var password = req.body.password;
          register.register(email,password,function (found) {             
               console.log(found);             
               res.json(found);

     });     
     });

     app.post('/checkin',function(req,res){
          var userEmail = req.body.email;         
          var vehicleID = req.body.vehicleID;             
          var stationID = req.body.stationID;
          console.log(userEmail); 
          console.log(vehicleID); 
          console.log(stationID);  
          routeCalc.addRoute(userEmail,vehicleID, stationID, function (found) {             
               console.log(found);             
               res.json(found);

     });     
     });

     app.post('/checkout',function(req,res){
          var userEmail = req.body.email;         
          var vehicleID = req.body.vehicleID;
          var stationID = req.body.stationID;             
     
          routeCalc.finishRoute(userEmail, vehicleID, stationID, function (found) {             
               console.log(found);             
               res.json(found);

     });     
     });

     app.post('/price',function(req,res){
          var userEmail = req.body.email;                   
     
          routeCalc.calculationRoute(userEmail, function (found) {             
               console.log(found);             
               res.json(found);

     });     
     });



};