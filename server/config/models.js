var mongoose = require('mongoose');  

var Schema = mongoose.Schema;  

var userSchema = mongoose.Schema({    
     token : String,     
     email: String,  
     hashed_password: String,    
     salt : String,  
     temp_str:String 
});

/** user routes **/
var routeSchema = mongoose.Schema({
	userEmail : String,
	vehicleID : Number,
	stationInID : Number,
	stationOutID : Number,
	inProgress : Boolean,
	paid : Boolean
});  

var stationSchema = mongoose.Schema({
	stationID : Number,
	stationName : Number,
	beaconID : Number,
	zoneID : Number,
	routeID : Number
}); 

var vehicleSchema = mongoose.Schema({
	vehicleID : Number,
	vehicleName : String,
	beaconID : Number
});

var routeStructureSchema = mongoose.Schema({
	routeID : Number,
	stationIDs : [Number]
});

mongoose.connect('mongodb://localhost:27017/node-android'); 
module.exports.user = mongoose.model('users', userSchema);
module.exports.route = mongoose.model('routes', routeSchema);
module.exports.station = mongoose.model('routes', stationSchema);
module.exports.vehicle = mongoose.model('routes', vehicleSchema);
module.exports.routeStructure = mongoose.model('routes', routeStructureSchema);
