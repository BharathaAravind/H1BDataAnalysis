const express = require('express')
const app = express()

const bodyParser = require('body-parser');
// ...
// ...
app.use(bodyParser.urlencoded({ extended: true }));

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";



app.set('view engine', 'ejs')

app.use(express.static('public'));

//The is the root function
app.get('/', function (req, res) {
  // res.send('Hello World!')
  res.render('index')
}) // root function ends here



//chart1 starts here
app.get('/getChart1Data', function (req, res) {
  // res.send('Hello World!')
  // console.log("Helloooo Haritha");
  MongoClient.connect(url, function(err, db) {
	if (err){
	 throw err; 
	}
	var dbo = db.db("sqlnosql");
	dbo.collection("h1bdata").aggregate([{
			$group: {_id: "$EMPLOYER_NAME", total:{ $sum: 1 }},
		},{$sort:{"total": -1}}
		]).limit(10).toArray(function(err, result) {
		    if (err){ 
		    	throw err;
		    	console.log("error max");
		    }
	    	res.json({data: result});
		});



	});
  // console.log("I am about to return");

})// chart1 ends here



// chart2 starts here
app.get('/getChart2Data', function (req, res){
  // res.send('Hello World!')
  MongoClient.connect(url, function(err, db) {
	if (err){
	 throw err; 
	}
	var dbo = db.db("sqlnosql");
	dbo.collection("h1bdata").aggregate([{
			$group: {_id: "$JOB_TITLE", total:{ $sum: 1 }},
		},{$sort:{"total": -1}}
		]).limit(10).toArray(function(err, result) {
		    if (err){ 
		    	throw err;
		    }
	    	res.json({data: result});
		});
	} );

} ) // chart2 ends here





// chart3 starts here

app.get('/getChart3Data', function (req, res){
  // res.send('Hello World!')
  MongoClient.connect(url, function(err, db) {
	if (err){
	 throw err; 
	}
	var dbo = db.db("sqlnosql");


	dbo.collection("h1bdata").aggregate([
	{ $match: {JOB_TITLE: /.*DATA ENGINEER.*/ } } ,
	{ $group: {_id:{ "CASE_STATUS" : "$CASE_STATUS"}, count:{ $sum:1 } } }, 
	{ $sort:  {"count":-1} }

		]).limit(10).toArray(function(err, result) {
		    if (err){ 
		    	throw err;
		    }
	    	res.json({data: result});
		});
	} );

} ) // chart3 ends here


// chart 4 starts here
app.get('/getChart4Data', function (req, res){
  // res.send('Hello World!')
  MongoClient.connect(url, function(err, db) {
	if (err){
	 throw err; 
	}
	var dbo = db.db("sqlnosql");


	dbo.collection("h1bdata").aggregate([
	{$match:{JOB_TITLE:/.*DATA ENGINEER.*/}},
	{ $group:{_id:"$YEAR",count:{$sum:1}}},
	{ $sort:  {"count":1} }

		]).limit(10).toArray(function(err, result) {
		    if (err){ 
		    	throw err;
		    }
	    	res.json({data: result});
		});
	} );

} ) // chart4 ends here


//map starts here
app.get('/getMapData', function (req, res){
  // res.send('Hello World!')
  MongoClient.connect(url, function(err, db) {
	if (err){
	 throw err; 
	}
	var dbo = db.db("sqlnosql");

	dbo.collection("h1bdata").aggregate( [ { $project : { lat : 1 , lon : 1 , CASE_STATUS: 1 } } ] ).limit(1000000).toArray(function(err, result) {
		    if (err){ 
		    	throw err;
		    }
	    	res.json({data: result});
		});
	} );

	// dbo.collection("h1b").find(1000).toArray(function(err, result) {
	// 	    if (err){ 
	// 	    	throw err;
	// 	    }
	//     	res.json({data: result});
	// 	});
	// } );

} ) // map ends here




app.post('/', function (req, res) {
  res.render('index');
  // console.log(req.body.city);
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')

})