//chart1 starts here
$.getJSON( "/getChart1Data", function( result ) {
  	console.log("check here");
  	console.log(result);
  	var data = [];
  	var companyNames=[];
  	// result.data.length
  	for(var i = 0; i < result.data.length; i++) {
	    var obj = result.data[i];
		  //console.log("hi");
      // console.log(result.data);
 		  companyNames.push(obj._id.substring(0,9));
	    data.push(obj.total);

	}

var ctx = document.getElementById("myChart1").getContext('2d');
var myChart = new Chart(ctx, {
								    type: 'bar',
								    data: {
										         // labels: companyNames,

										        datasets: [{
										            label:companyNames[0],
										            data: [data[0]],
										            backgroundColor:"#3e95cd"
										           
										            
										        },
                            {
                                label:companyNames[1],
                                data: [data[1]],
                                backgroundColor:"#8e5ea2"
                               
                                
                            },
                            {
                                label:companyNames[2],
                                data: [data[2]],
                                
                                backgroundColor: "#3cba9f"
    
                            },
                            {
                                label:companyNames[3],
                                data: [data[3]],
                                
                                backgroundColor: "#e8c3b9"

                                
                            },
                            {
                                label:companyNames[4],
                                data: [data[4]],
                                
                                backgroundColor:  "#c45850"
                                  
                                    
                                
                                
                            },
                            {
                                label:companyNames[5],
                                data: [data[5]],
                                
                                backgroundColor: "#994d00"
                                   
                                    
                                
                                
                            },
                            {
                                label:companyNames[6],
                                data: [data[6]],
                                
                                backgroundColor:  "#333300"
                             
                            },
                            {
                                label:companyNames[7],
                                data: [data[7]],
                                
                                backgroundColor: "#339933"
                               
                            },
                            {
                                label:companyNames[8],
                                data: [data[8]],
                                
                                backgroundColor: "#4d0026"
                          
                            },
                            {
                                label:companyNames[9],
                                data: [data[9]],
                                
                                backgroundColor: "#b3b300"
        
                                
                            } 
                            ]

                           
								    	   },
								    options: {
								    			legend: {
												            display: true,
												            position:'top',
												            labels: {
												                fontColor: 'rgb(255, 99, 132)'
												            }
												        },

										    	title: {
														    display: true,
														    text: 'Top 10 sponsoring companies',
														    position: 'top'
														},

										    
										        scales: {

															yAxes: [{
										                				ticks: {
										                    						beginAtZero:true,
																                    fontSize:17,
																                    autoSkip:false
										                						}
										            				}],
										            		xAxes:[{
										            					ticks: {
																                    autoSkip:false,
																                    fontSize:13,
																                }
																	}]
														}
								    		}
								});
							}); // chart1 ends here


//chart2 starts here

$.getJSON( "/getChart2Data", function( result ) {
  	
  	//console.log(result);
  	var data = [];
  	var jobTitles=[];
  	// result.data.length
  	for(var i = 0; i < 6; i++) {
		var obj = result.data[i];
		//console.log(result.data);
 		jobTitles.push(obj._id);
	    data.push(obj.total);

	}

var ctx = document.getElementById("myChart2").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: jobTitles,
        datasets: [{
           
            data: data,
            
            backgroundColor: [
                '#3e95cd',
                '#339933',
                '#439933',
                '#b3b300',
                '#994d00',
                '#c45850'
            ],
            borderColor: [
                '#3e95cd',
                '#339933',
                '#439933',
                '#b3b300',
                '#994d00',
                '#c45850'
            ],
            borderWidth: 1
        }]
    },
    options: {

    	title: {
    display: true,
    text: 'Top 10 sponsored roles',
    position: 'top'
  }
       
    }
});

}); //chart2 ends here



// chart3 starts here
$.getJSON( "/getChart3Data", function( result ) {
  	
  	// console.log(result);
  	var data = [];
  	var companyNames=[];
  	
  	for(var i = 0; i < result.data.length; i++) {
		var obj = result.data[i];
		//console.log(result.data);
 		companyNames.push(obj._id.CASE_STATUS);
	    data.push(obj.count);

	}

var ctx = document.getElementById("myChart3").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        // labels: companyNames,
        datasets: [{
            label: companyNames[0],
            data: [data[0]],
            
            backgroundColor: [
               
                '#3e95cd',
                
            ],
            borderColor: [
                
                '#3e95cd',
                
            ],
            borderWidth: 1
        },
        {
            label: companyNames[1],
            data:  [data[1]],
            
            backgroundColor: [
                
                    '#339933',
            ],
            borderColor: [
               
                'rgba(75, 192, 192, 1)',
               
            ],
            borderWidth: 1
        },
        {
            label: companyNames[2],
            data: [data[2]],
            
            backgroundColor: [
                "#c45850",
                
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                
            ],
            borderWidth: 1
        },
        {
            label: companyNames[3],
            data:  [data[3]],
            
            backgroundColor: [
               
                '#439933',
                
            ],
            borderColor: [
                
                'rgba(54, 162, 235, 1)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
						title: {
								    display: true,
								    text: 'Case statuses',
								    position: 'top'
								},
				        scales: {
				            yAxes: [{
						                ticks: {
						                    beginAtZero:true,
						                    fontSize:17,
						                    autoSkip:false
						                }
				            		}],
				            xAxes:[{
						            	ticks: {
						                    autoSkip:false,
						                    fontSize:13
						                    
						                }

				            		}]

				        		}
    		}
});

}); //chart3 ends here



// chart4 starts here
$.getJSON( "/getChart4Data", function( result ) {
  	
  	// console.log(result);
  	var data = [];
  	var years=[];
  	//console.log(result);
  	for(var i = 0; i <= result.data.length-1; i++) {
		var obj = result.data[i];
		//console.log(result.data);
 		years.push(obj._id);
	   data.push(obj.count);

	}

var ctx = document.getElementById("myChart4").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: years,
        datasets: [{
            // label: '2015 vs 2016',
            data: data,
            
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
               
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
               
            ],
            borderWidth: 1
        }]
    },
    options: {

    	title: {
								    display: true,
								    text: 'no. of applicants over the years 2011 - 2016',
								    position: 'top'
								},
    	
 
         showLines: true
    }
});

}); //chart4 ends here


