'use strict'

const btn_1 = document.getElementsByClassName('btn_1')[0];
const btn_2 = document.getElementsByClassName('btn_2')[0];
  /* inputs */
       var cardHolder_input = document.getElementById('cardHolder').value;
       const cardNr_input = document.getElementById('cardNr').value;
       const month_input = document.getElementById('mm').value;
       const year_input = document.getElementById('yy').value;
       const cvcNr_input = document.getElementById('cvc').value;
       /* Outputs */
       var owner = document.getElementsByClassName('owner')[0];
       const card_num = document.getElementsByClassName('card_num')[0];
       const month = document.getElementsByClassName('month')[0];
       const year = document.getElementsByClassName('year')[0];
       const cvc_num = document.getElementsByClassName('cvc_num')[0];


function ownerOutput(event) {
    const value = event.target.value;
    owner.innerText = value.toUpperCase();
}

function card_numOutput(event) {
    const value = event.target.value;
    card_num.innerText = value;
}