var mongoose = require('mongoose'); 
var models = require('config/models');

/** called on checkin, starts journey, input start station **/
exports.addRoute = function(userEmail, vehicleID, stationInID, callback) {  

var newroute = new models.route({    
    userEmail : userEmail,
	vehicleID : vehicleID,
	stationInID : stationInID,
	stationOutID : 0,
	inProgress : true,
	paid : false });

newroute.save(function (err) {   

     callback({'response':"Sucessfully added Route", 'code':"success"});  

});
}; 

/** called on checkout, writes in output station and finish journey **/
exports.finishRoute = function(userEmail, vehicleID, stationOutID, callback) {  

function callback2 (err, numAffected) {
  callback({'response':"Success-affected " + numAffected});
};

var query = { userEmail:userEmail, vehicleID:vehicleID, inProgress:true };
models.route.update(query, { stationOutID: stationOutID, inProgress:false }, {upsert:true}, callback2);

};

/** calculating price for user routes **/
exports.calculationRoute = function(userEmail, callback) {  

models.route.find({userEmail: userEmail, paid:false},function(err,routes){  

if(routes.length != 0){  

var price = 0;

routes.forEach(function(route) {

	var routeID = route.routeID;
	var firstStation = route.stationInID;
	var lastStation = route.stationOutID;
	var changes = 0;
	models.stations.find({routeID}, function(err,stations) {

		/**for every station take zoneID, and count changes between **/
		changes++;
	}

	price = ticket_price*changes;


	});
});

callback({'response':price,'res':true});  
}else {  
callback({'response':"There are no routes waiting to be paid",'res':false});  
} 
}); 
};