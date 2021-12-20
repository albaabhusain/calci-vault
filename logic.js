const screen = document.querySelector('.disp');
 buttons = document.querySelectorAll('button');
 let screenVal='';
 var audio = new Audio("mixkit-hard-typewriter-click-1119.wav");


 const calci = ()=> {

    document.onkeydown= function(e){
      

        

     
        if(e.key=='Escape'){
            screenVal=''
            screen.value=screenVal;

         }

      else if(e.key=='='){
            e.preventDefault;
            screenVal=eval(screenVal);
         var screenRes=screenVal;
            screen.value=screenVal;

         }
        else if(e.key=='Backspace'){
            e.preventDefault;
            screenVal = screenVal.slice(0,-1);
            
            screen.value=screenVal;
             

        }
         else if(e.key>=0 && e.key<=9){
            screenVal+=e.key;
            
         }
        
    
     }


for(item of buttons){

     item.addEventListener('click', (e)=>{
         
      audio.currentTime=0;
      audio.play();



         buttonText=e.target.innerText;
         
     
         if(buttonText=='AC'){
            screenVal=''
            screen.value=screenVal;

         }

      else if(buttonText=='='){

            screenVal=eval(screenVal);
         let screenRes=screenVal;
            screen.value=screenVal;
            if(screenRes=='111'){
                magic();

            }

         }
        else if(buttonText=='DEL'){
            screenVal = screenVal.slice(0,-1);
            buttonText=''
            screenVal+=buttonText;
            screen.value=screenVal;   

        }
         else{
            screenVal+=buttonText;
            screen.value=screenVal;
         }

         
     })

     
 }


}

 calci();

function magic(){
    alert('going to castleburg.in');
    location.assign('https://castleburg.in');
}