// card holder name //
let card_name = document.getElementById('card holder Name');
let Name = document.getElementById('Name');
card_name.addEventListener('input', ()=> {Name.textContent= card_name.value; });


// card number //
let card_number = document.getElementById('card number');
let number = document.getElementById('card_number');
card_number.addEventListener('input', ()=> {number.textContent= card_number.value; });

// EXP/DATE //
let user_EXP = document.getElementById('EXP');
let user_DATE = document.getElementById('DATE');

let EXP_number = document.getElementById('EXP_number');

let DATE_number = document.getElementById('DATE_number');

user_EXP.addEventListener('input', ()=> {EXP_number.textContent=user_EXP.value + '/' ; });

user_DATE.addEventListener('input', ()=> {DATE_number.textContent=user_DATE.value ; });
 



//CC//
let user_CC = document.getElementById('CC');
let CC_number= document.getElementById('CC_NUMBER');
user_CC.addEventListener('input', ()=> {CC_number.textContent= user_CC.value; });

// buttun//

let buttun = document.getElementById('buttun_1');
let input = document.querySelectorAll('input');

buttun.addEventListener('click', ()=>{
   
    document.getElementById('attribution').remove();
    document.getElementById('icon-complete').style.display = "block";
    document.getElementById('Thank you').style.display = "block";
    document.getElementById('User_Inputs').remove();
    document.getElementById('statment_4').style.display = "block";
    document.getElementById('buttun_2').style.display = "block";
    dispaly_error();
});

function dispaly_error(){
    document.getElementById('icon-complete').style.display = "none";
    document.getElementById('Thank you').style.display = "none";

    if (card_name.value.length ==0 ) {
     
    document.getElementById('statment_4').textContent = " ERROR: card name input is incorrect"
    } 

    if (card_number.value.length !=16 ) {
    document.getElementById('statment_4').textContent = " ERROR: card nummber value is incorrect"
    } 

    if (user_EXP.value.length !=2 ) {
     
        document.getElementById('statment_4').textContent = " ERROR: EXP value is incorrect"
        } 
        if (user_DATE.value.length !=2 ) {
     
            document.getElementById('statment_4').textContent = " ERROR: DATE value is incorrect"
            } 

            if (user_CC .value.length !=3 ) {
     
                document.getElementById('statment_4').textContent = " ERROR: CC value is incorrect"
                } 
}






