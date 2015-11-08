 
            var graph;
            var xPadding = 20;
            var yPadding = 30;
            
            var data = { values:[
                { X: "MON", Y: 40 },
                { X: "TUE", Y: 25 },
                { X: "WED", Y: 31 },
                { X: "THU", Y: 50 },
                { X: "FRI", Y: 30 },
				{ X: "SAT", Y: 26 },
				{ X: "SUN", Y: 40 },
				{ X: "", Y: 20 },
				
            ]};

            function getMaxY() {
                var max = 0;
                
                for(var i = 0; i < data.values.length; i ++) {
                    if(data.values[i].Y > max) {
                        max = data.values[i].Y;
                    }
                }
              
                max += 10 - max % 10;
                return max;
            }
            
            // Return the x pixel 
            function getXPixel(val) {
                return ((graph.width() - xPadding) / data.values.length) * val + (xPadding * 1.5);
            }
            
            // Return the y pixel 
            function getYPixel(val) {
				//ghad khode graph ra kootah mikonad (getMaxY()-10)
                return graph.height() - (((graph.height() - yPadding) / getMaxY()) * val) - yPadding;
            }

            $(document).ready(function() {
                graph = $('#graph');
                var c = graph[0].getContext('2d');            
                
                

                c.font='8px Tohoma';
             
				c.fillStyle = "#abb4c0";
                
              for(var i = 0; i < data.values.length; i ++) {
               
					c.fillText("|", getXPixel(i), graph.height() - yPadding + 16);

               
            }
              
 
c.font='12.61px Tohoma';

                //  Y value texts
                c.textAlign = "right";
                c.textBaseline = "middle";


                
                for(var i = 20; i < 61; i += 20) {
					
                    c.fillText(i, xPadding + 7, getYPixel(i)+10);



                }
                
                c.strokeStyle = '#297d7d';
                
                // line graph


c.setLineDash([0,0]);
                c.beginPath();
                
                c.lineWidth = 1;
                c.moveTo(getXPixel(0.5), graph.height() - yPadding + 10);


               
c.lineWidth = 6;



c.strokeStyle = '#297d7d';
 

c.moveTo(getXPixel(0.5), getYPixel(data.values[0].Y) + 10);
c.lineTo(getXPixel(1), getYPixel(data.values[1].Y)+10);
                 
c.stroke();
 
c.lineWidth = 1.5;

 var y = 2;
 var timerLine = setInterval(function(){ setLines() }, 70);


 
 function setLines() {
                      c.lineWidth = 1.5;
                     c.moveTo( getXPixel(y-1), getYPixel(data.values[y-1].Y)+10       )
                    c.lineTo(getXPixel(y), getYPixel(data.values[y].Y)+10);
               

                c.stroke();

    
     y =y+1;
     if(y > 6){


        
        stopLines();}
    }



   function stopLines() {

c.lineTo(getXPixel(6.5), getYPixel(data.values[7].Y)+10);

                 c.stroke();






    clearInterval(timerLine);
}            ////////////////////////////////
				
				






                c.strokeStyle = '#297d7d';
                
               
        
        c.setLineDash([0,0]);
                c.beginPath();
        
        c.lineWidth = 1;
                c.moveTo(getXPixel(0.5), graph.height() - yPadding + 10);



///////////amoodi
c.lineTo(getXPixel(0.5), getYPixel(data.values[0].Y)+10);


c.stroke();
               
               
c.lineWidth = 2;


        c.strokeStyle = '#297d7d';
      
        c.lineTo(getXPixel(0.5), getYPixel(data.values[0].Y)+10);
         c.stroke();
         //baghiye



 c.lineTo(getXPixel(1), getYPixel(data.values[1].Y)+10);

         c.strokeStyle = '#c5c5c4';
                for(var i = 2; i < data.values.length-1; i ++) {
                    c.lineTo(getXPixel(i), getYPixel(data.values[i].Y)+10);
                }
                c.stroke();
        
        //akhari
        c.lineTo(getXPixel(6.5), getYPixel(data.values[7].Y)+10);

         c.stroke();




    //////////////////////////////////////////////////////////////// amoodi akhari            ///////////////

                 c.lineTo(getXPixel(6.5),graph.height() - yPadding + 10);
               
                


 c.closePath();
 c.fillStyle = '#e8eaea';
                c.fill();


 c.lineWidth = 1;
c.moveTo(getXPixel(0.5), getYPixel(data.values[0].Y)+10);
c.lineTo(getXPixel(1), getYPixel(data.values[1].Y)+10);
                 c.stroke();


 /// DOTTED LINE DASH



                c.setLineDash([1,1]);
                c.beginPath();
               c.moveTo(xPadding+15,graph.height() - yPadding+10);
               
                c.lineTo(graph.width(), graph.height() - yPadding+10);
                

                c.strokeStyle = '#d2d2d3';
                
                //  line graph
                
                
                c.lineWidth = 2;
              
                
 for(var i = 17; i < 250; i=i+32.5) {
    c.moveTo(xPadding+15,graph.height() - yPadding-i);
    c.lineTo(graph.width(), graph.height() - yPadding-i);

 }

        
                
                c.stroke();


                //  dots
				c.setLineDash([0,0]);
               c.strokeStyle = '#297d7d';
			    c.fillStyle = 'white';
                
				c.lineWidth = 1;
				//avali
				c.beginPath();
                    

c.arc(getXPixel(0.5), (getYPixel(data.values[0].Y)+10), 5, 0, Math.PI * 2, true);
                    
                    c.stroke();
                    c.fill()


setTimeout(function(){


                    var i = 1;
   
    var timer = setInterval(function(){ setDots() }, 70);
    function setDots() {
     c.beginPath();
     
    c.arc(getXPixel(i), (getYPixel(data.values[i].Y)+10), 4, 0, Math.PI * 2, true);
    c.lineWidth = 3;
     c.stroke();
    c.fill()
     

    
     i =i+1;
     if(i > (data.values.length-2)){

c.beginPath();
                    c.arc(getXPixel(6.5), (getYPixel(data.values[7].Y)+10), 4, 0, Math.PI * 2, true);
                    c.stroke();
                    c.fill()
                    c.lineWidth = 3;
        
        stopDots();}
    }

function stopDots() {
    clearInterval(timer);
}

					
	
	},550)		
				
            });
      














