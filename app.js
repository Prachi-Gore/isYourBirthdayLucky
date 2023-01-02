const hide=document.querySelector('.hide');
const privacy=document.querySelector('.privacy');
const dob=document.querySelector('#dob');
const luckyNo=document.getElementById("lucky-no");
const check=document.querySelector('.check');
const guide=document.querySelector(".empty");


// hide notification
hide.addEventListener('click',()=>{
privacy.innerText="";

})
//check whether BirthDate is lucky 
check.addEventListener('click',()=>{
   //console.log(dob.value,luckyNo.value);
   if((dob.value!="" && luckyNo.value!="") && Number(luckyNo.value)>0){
    //guide.innerText="";
    isLucky(calculateSum(dob));

   }else{
    guide.innerText="please enter both the fields correctly";
   }
    
    });
const calculateSum    =(dob)=>{
    dob=dob.value.replaceAll('-',"");
   console.log(dob,typeof dob);
   let sum=0;
   for(let i=0;i<dob.length;i++){
    sum+=Number(dob.charAt(i));
   }
   return sum;
}
   const isLucky=(sum)=>{
    if(sum%Number(luckyNo.value)===0){
        guide.innerText="Nice🥳! your Birthdate is Lucky.";
    }
else{
    guide.innerText="Sadly😞! your Birthdate is not that Lucky, Better Luck for next Birth !!!"
}
   }

   
   
