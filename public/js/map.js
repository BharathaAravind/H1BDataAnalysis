var map, heatmap;
var data;


var points = [];
var certifiedPoints = [];
var certifiedWithdrawnPoints = [];
var withdrawnPoints = [];
var deniedPoints = [];
    

function initMap(){

  console.log("init map");
  map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4.0,
            center: {lat: 40.99, lng: -101.96},
          mapTypeId: 'satellite',
          scrollwheel: false,

        });

  
  //getting map json
  $.getJSON( "/getMapData", function( result ) {
      
      console.log(result.data);
      

      for(var i=0; i<result.data.length;i++){
        if(isNaN(result.data[i].lat) || isNaN(result.data[i].lon)){
          continue;
        }
        points.push(new google.maps.LatLng(result.data[i].lat, result.data[i].lon));
        
        if(result.data[i].CASE_STATUS === "CERTIFIED"){

          certifiedPoints.push(new google.maps.LatLng(result.data[i].lat, result.data[i].lon));

        }
        
        else if(result.data[i].CASE_STATUS === "CERTIFIED-WITHDRAWN"){
          certifiedWithdrawnPoints.push(new google.maps.LatLng(result.data[i].lat, result.data[i].lon));

        }
        
        else if(result.data[i].CASE_STATUS === "WITHDRAWN"){
         withdrawnPoints.push(new google.maps.LatLng(result.data[i].lat, result.data[i].lon));
        }
        
        else if(result.data[i]._id.CASE_STATUS === "DENIED"){
          deniedPoints.push(new google.maps.LatLng(result.data[i].lat, result.data[i].lon));
        }

      }

      heatmap = new google.maps.visualization.HeatmapLayer({
              data: points,
              map: map,
              radius: 20,
              gradient: null
        });
        

  });
    
}

function toggleHeatmap(){
  var localpoints = [];


  if(document.getElementById("1").checked === true){
    
    for(var i=0;i<certifiedPoints.length;i++){
      localpoints.push(certifiedPoints[i]);  
    }
    
    //alert("hi");
  }
  if(document.getElementById("2").checked === true){
    for(var i=0;i<certifiedWithdrawnPoints.length;i++){
        localpoints.push(certifiedWithdrawnPoints[i]);  
    }
  }
  if(document.getElementById("3").checked === true){
    for(var i=0;i<withdrawnPoints.length;i++){
        localpoints.push(withdrawnPoints[i]);  
    }
  }
  if(document.getElementById("4").checked === true){
    for(var i=0;i<deniedPoints.length;i++){
        localpoints.push(deniedPoints[i]);  
    }
  }
  
  console.log(localpoints);
  heatmap.setMap(null);
  heatmap = new google.maps.visualization.HeatmapLayer({
              data: localpoints,
              map: map,
              radius: 20,
              gradient: null
    });

}

