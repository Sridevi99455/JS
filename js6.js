const counterEle=document.getElementById('counter');
const plusbtn=document.getElementById('plusbtn');
const minusbtn=document.getElementById('minusbtn');
let counter=0;
let updatecounter=()=>{
    
}
    plusbtn.addEventListener('click',()=>{
       console.log("clicked");
       counter+=1;
       counterEle.textContent=counter;
       if(counter>=10){
           plusbtn.setAttribute('disabled',true)
        }
        else{
            plusbtn.removeAttribute('disabled',false)
        }
        
    });
    minusbtn.addEventListener('click',()=>{
        console.log("clicked");
        counter-=1;
        counterEle.textContent=counter;
        if(counter<=0){
            minusbtn.setAttribute('disabled',true);
        }
        else{
            minusbtn.removeAttribute('disabled',false)
        }
    })