var start=document.getElementById("start");
var stop=document.getElementById("stop");
var reset=document.getElementById("reset");
var time=document.getElementById("time");
var fast=document.getElementById("fast");
var second=document.getElementById("second");
var speed=document.getElementById("speed");
var counter=0;
var countersec=0;
var IntervalId;

start.addEventListener("click", function(){
    
     IntervalId =setInterval(function(p){
        counter++;
    fast.innerHTML=counter;
     if(counter>9){
        speed.style.display="none";
     }
     if(counter>59){
       
        speed.style.display="block";
          fast.innerHTML=0; 
          counter=0;   
        countersec++;
        time.innerHTML=countersec+":";
     }
     if(countersec>9){
           second.style.display="none";
     }

    },20,counter)
})

stop.addEventListener("click",function(){
    clearInterval(IntervalId);
})
reset.addEventListener("click",function(){
    clearInterval(IntervalId);
    counter=0;
    countersec=0;
    time.innerHTML=0+":";
    fast.innerHTML=0;
    second.style.display="block";
    speed.style.display="block";
})
