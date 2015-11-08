
            var graph1;
            var xPadding1 = 20;
            var yPadding1 = 30;
          
            var data1 = { values:[
                { X: "MON", Y: 450 },
                { X: "TUE", Y: 750 },
                { X: "WED", Y: 600 },
                { X: "THU", Y: 900 },
                { X: "FRI", Y: 450 },
                { X: "SAT", Y: 600 },
                { X: "SUN", Y: 675 },
                { X: "", Y: 300 },
                
            ]};

            function getMaxY1() {
                var max1 = 0;
                
                for(var i = 0; i < data1.values.length; i ++) {
                    if(data1.values[i].Y > max1) {
                        max1 = data1.values[i].Y;
                    }
                }
               
                max1 += 10 - max1 % 10;
                return max1;
            }
            
           
            function getxPixel1(val) {
                return ((graph1.width() - xPadding1) / data1.values.length*1.124) * val + (xPadding1 * 1.5);
            }
            
          
            function getYPixel1(val) {
                
                return graph1.height() - (((graph1.height() - yPadding1) / getMaxY1()) * val) - yPadding1;
            }

            $(document).ready(function() {
                graph1 = $('#graph2');
                var c = graph1[0].getContext('2d');            
                
 



                c.font='8px Tohoma';
             
        c.fillStyle = "#abb4c0";
               
              for(var i = 0; i < data1.values.length; i ++) {
              
          c.fillText("|", getxPixel1(i), graph1.height() - yPadding1 + 16);

               
            }
              
 
c.font='12.61px Tohoma';

             
                c.textAlign = "right";
                c.textBaseline = "middle";


                
                for(var i = 300; i < 901; i += 300) {
          
                    c.fillText(i, xPadding1 + 7, getYPixel1(i)+10);



                }
                
                c.strokeStyle = '#1c344c';
              
c.setLineDash([0,0]);
                c.beginPath();
                
                c.lineWidth = 1;
                c.moveTo(getxPixel1(0.5), graph1.height() - yPadding1 + 10);



               
c.lineWidth = 6;

c.strokeStyle = '#1c344c';
               


c.moveTo(getxPixel1(0.5), getYPixel1(data1.values[0].Y) + 10);
c.lineTo(getxPixel1(1), getYPixel1(data1.values[1].Y)+10);
                 
c.stroke();
                

c.lineWidth = 1.5;

 var y = 2;
 var timerLine = setInterval(function(){ setLines() }, 70);


 
 function setLines() {
                      c.lineWidth = 1.5;
                     c.moveTo( getxPixel1(y-1), getYPixel1(data1.values[y-1].Y)+10       )
                    c.lineTo(getxPixel1(y), getYPixel1(data1.values[y].Y)+10);
               

                c.stroke();

    
     y =y+1;
     if(y > 6){


        
        stopLines();}
    }



   function stopLines() {

c.lineTo(getxPixel1(6.5), getYPixel1(data1.values[7].Y)+10);

                 c.stroke();






    clearInterval(timerLine);
}         
        
        


                c.strokeStyle = '#1c344c';
                
               
        
        c.setLineDash([0,0]);
                c.beginPath();
        
        c.lineWidth = 1;
                c.moveTo(getxPixel1(0.5), graph1.height() - yPadding1 + 10);




c.lineTo(getxPixel1(0.5), getYPixel1(data1.values[0].Y)+10);


c.stroke();
               
               
c.lineWidth = 2;


        c.strokeStyle = '#1c344c';
     
        c.lineTo(getxPixel1(0.5), getYPixel1(data1.values[0].Y)+10);
         c.stroke();
      



 c.lineTo(getxPixel1(1), getYPixel1(data1.values[1].Y)+10);

         c.strokeStyle = '#c5c5c4';
                for(var i = 2; i < data1.values.length-1; i ++) {
                    c.lineTo(getxPixel1(i), getYPixel1(data1.values[i].Y)+10);
                }
                c.stroke();
        
      
        c.lineTo(getxPixel1(6.5), getYPixel1(data1.values[7].Y)+10);

         c.stroke();



                 c.lineTo(getxPixel1(6.5),graph1.height() - yPadding1 + 10);
               
                


 c.closePath();
 c.fillStyle = '#e3e2e2';
                c.fill();


 c.lineWidth = 1;
c.moveTo(getxPixel1(0.5), getYPixel1(data1.values[0].Y)+10);
c.lineTo(getxPixel1(1), getYPixel1(data1.values[1].Y)+10);
                 c.stroke();



                c.setLineDash([1,1]);
                c.beginPath();
               c.moveTo(xPadding1+15,graph1.height() - yPadding1+10);
               
                c.lineTo(graph1.width(), graph1.height() - yPadding1+10);
                

                c.strokeStyle = '#d2d2d3';
                
               
                
                c.lineWidth = 2;
             
                
 for(var i = 17; i < 250; i=i+32.5) {
    c.moveTo(xPadding1+15,graph1.height() - yPadding1-i);
    c.lineTo(graph1.width(), graph1.height() - yPadding1-i);

 }

              
                
                c.stroke();


        c.setLineDash([0,0]);
               c.strokeStyle = '#1c344c';
          c.fillStyle = 'white';
                
        c.lineWidth = 1;
        //avali
        c.beginPath();
                    

c.arc(getxPixel1(0.5), (getYPixel1(data1.values[0].Y)+10), 5, 0, Math.PI * 2, true);
                    
                    c.stroke();
                    c.fill()



setTimeout(function(){


                    var i = 1;
   
    var timer = setInterval(function(){ setDots() }, 70);
    function setDots() {
     c.beginPath();
     
    c.arc(getxPixel1(i), (getYPixel1(data1.values[i].Y)+10), 4, 0, Math.PI * 2, true);
    c.lineWidth = 3;
     c.stroke();
    c.fill()
     

    
     i =i+1;
     if(i > (data1.values.length-2)){

c.beginPath();
                    c.arc(getxPixel1(6.5), (getYPixel1(data1.values[7].Y)+10), 4, 0, Math.PI * 2, true);
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
      
