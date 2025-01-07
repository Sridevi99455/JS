function generatePassword(){

let length=document.getElementById('passwordlength').value;
let uppercase=document.getElementById('uppercase').checked;
let lowercase=document.getElementById('lowercase').checked;
let number=document.getElementById('number').checked;
let symbol=document.getElementById('symbol').checked;
let password=document.getElementById('password');

let UpperCase="ABCDEFGHIGKLMNOPQRSTUVWXYZ";
let LowerCase="abcdefighijklmnopqrstuvwxyz";
let Numbers="0123456789";
let Symbol=`!@#$%^&*()_?/}{[]}:;'`;

let charpool="";

if(uppercase){
    charpool+=UpperCase;
}
if(lowercase){
    charpool+=LowerCase;
}
if(number){
    charpool+=Numbers;
}
if(symbol){
    charpool+=Symbol;
}


  if(charpool===""){
    alert("check one of the among");
    return;
  

  }
  let passwords='';
  for(let i=0;i<length;i++){
    const random=Math.floor(Math.random()*charpool.length);
    passwords+=charpool[random];
  }
  password.value=passwords;
  
}