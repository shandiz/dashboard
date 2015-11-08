 
        	var X1 = 53;
        	var Y1 = 69;
            var X = 69;
            var Y = 69;
            var outterRadius = 50;
            var innerRadius = 42.5;
            var c = document.getElementById("donutCanvas1");
            var c2 = document.getElementById("donutCanvas2");
            var c3 = document.getElementById("donutCanvas3");
            var c4 = document.getElementById("donutCanvas4");
            
   ////////////////////////////left 
            var context = c.getContext("2d");
              context.font="27.2px sans-serif";
              context.fillText("58",36,79); 
              context.font="16px sans-serif";
              context.fillText("%",66,69); 


            setRadialGradient("#56606e", "#56606e");
           drawDonut1(Math.PI * 1.5, Math.PI*0.66);
            setRadialGradient("#d2d4d8", "#d2d4d8");
           drawDonut1(Math.PI * 0.66, Math.PI*1.5);

           
           
//////////////////////////////////
             var context = c2.getContext("2d");
            context.font="27.2px sans-serif";
             context.fillText("75",52,79); 
              context.font="16px sans-serif";
              context.fillText("%",82,69); 


            setRadialGradient("#91c46b", "#91c46b");
           drawDonut(Math.PI * 1.5, Math.PI*1);
            setRadialGradient("#d2d4d8", "#d2d4d8");
           drawDonut(Math.PI * 1, Math.PI*1.5);
///////////////////////////
            var context = c3.getContext("2d");
            context.font="27.2px sans-serif";
              context.fillText("28",52,79); 
              context.font="16px sans-serif";
              context.fillText("%",82,69); 

           setRadialGradient("#56606e", "#56606e");
           drawDonut(Math.PI * 1.5, Math.PI*0.06);
            setRadialGradient("#d2d4d8", "#d2d4d8");
           drawDonut(Math.PI * 0.06, Math.PI*1.5);
           
//////////////////////////////////
            var context = c4.getContext("2d");
            context.font="27.2px sans-serif";
             context.fillText("97",52,79); 
             context.font="16px sans-serif";
              context.fillText("%",82,69);


            setRadialGradient("#91c46b", "#91c46b");
           drawDonut(Math.PI * 1.5, Math.PI*1.44);
            setRadialGradient("#d2d4d8", "#d2d4d8");
           drawDonut(Math.PI * 1.44, Math.PI*1.5);

            function drawDonut(sRadian, eRadian){
                 
                context.beginPath();
                    context.arc(X, Y, outterRadius, eRadian, sRadian, true); 
                   
                    context.arc(X, Y, innerRadius, sRadian, eRadian, false); // Inner: CW
                context.closePath();
                 
               
              
                                 
                context.fill();
            }
             

function drawDonut1(sRadian, eRadian){
                 
                context.beginPath();
                    context.arc(X1, Y1, outterRadius, eRadian, sRadian, true); 
                 
                    context.arc(X1, Y1, innerRadius, sRadian, eRadian, false); // Inner: CW
                context.closePath();
                 
                
              
                                 
                context.fill();
            }


            
             
            function setRadialGradient(sgc, bgc){
                var grd = context.createRadialGradient(X, Y, innerRadius + 5, X, Y, outterRadius);
                grd.addColorStop(0,sgc);
                grd.addColorStop(1,bgc);
                context.fillStyle = grd;
            }

     