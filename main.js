'use strict'

const btn_1 = document.getElementsByClassName('btn_1')[0];
const btn_2 = document.getElementsByClassName('btn_2')[0];
const cardNr_border = document.querySelector("input[id='cardNr']");
const month_border = document.querySelector("input[id='mm']");
const year_border = document.querySelector("input[id='yy']");

/* inputs on form */
const cardHolder_input = document.getElementById('cardHolder').value;
const cardNr_input = document.getElementById('cardNr').value;
const month_input = document.getElementById('mm').value;
const year_input = document.getElementById('yy').value;
const cvcNr_input = document.getElementById('cvc').value;

/* Outputs on form */
const valid_1 = document.getElementsByClassName('valid_1')[0];
const valid_2 = document.getElementsByClassName('valid_2')[0];
const valid_3 = document.getElementsByClassName('valid_3')[0];

/* Outputs on card */
const owner = document.getElementsByClassName('owner')[0];
const card_num = document.getElementsByClassName('card_num')[0];
const month = document.getElementsByClassName('month')[0];
const month_val = document.getElementsByClassName('month')[0].value;
const year = document.getElementsByClassName('year')[0];
const cvc_num = document.getElementsByClassName('cvc_num')[0];


/* Outputs on cards */
function ownerOutput(event) {
    const value = event.target.value;
    owner.innerText = value.toUpperCase();
}

function card_numOutput(event) {
    const value = event.target.value;
    card_num.innerText = value;
}

function monthOutput(event) {
    const value = event.target.value;
    if(value > 9) {
       month.innerText = value;

    } else if(value < 9) {
        month.innerText = ('0' + value).slice(-2);

    } else {
        return;
    }
}

function yearOutput(event) {
    const value = event.target.value;
    year.innerText = value;
}

function cvcOutput(event) {
    const value = event.target.value;
    cvc_num.innerText = value;
}

/* Card number format */
const cardNr_format = document.getElementById('cardNr');
cardNr_format.addEventListener("keyup", function() {
    var position = cardNr_format.selectionStart;
    var prevVal = cardNr_format.value;
    var newVal = prevVal.split(" ").join(""); // remove spaces
    if (newVal.length > 0) {
      newVal = newVal.match(new RegExp('.{1,4}', 'g')).join(" ");
    }
    cardNr_format.value = newVal;
    
    for (var i = 0; i < position; i++) {
      if (prevVal[i] != newVal[i]) {
        cardNr_format.selectionEnd = position + 1;
        return;
      }
    }
    cardNr_format.selectionEnd = position;
  });
   

  /* Add leading zero to month */
  document.querySelector("input[id=mm]").addEventListener('input', addLeadingZero);
  function addLeadingZero(event) {
    // get maxlength attr
    const maxLength = parseInt(event.target.getAttribute("maxlength"))
    // "0".repeat(maxLength) <-- create default pad with maxlength given
    // append zero and slice last of attr maxlength value
    const newValue = ("0".repeat(maxLength) + event.target.value.toString()).slice(-maxLength);
    // change the value of input
    event.target.value = newValue;
}

/* Data confirmation */
btn_1.addEventListener('click', confirm);

function confirm() {
    const form = document.getElementsByClassName('form')[0];
    const thanks = document.getElementsByClassName('thanks')[0];
    form.style.display = 'none';
    thanks.style.display = 'block';

    /* Card validation */
    const checkInp = document.getElementById('cardNr').value;
    const str = checkInp.slice(0, 4) + checkInp.slice(5, 9) + checkInp.slice(10, 14) + checkInp.slice(15, 19);
    const num_val = [...str].every(c => '0123456789'.includes(c));
    if(num_val == false) {
        valid_1.style.visibility = 'visible';
        cardNr_border.style.borderColor = 'hsl(0, 100%, 66%)';
    }

    /* Exp. Data validation */

    if(month_input.length == 0) {
        valid_2.style.visibility = 'visible';
        month_border.style.borderColor = 'hsl(0, 100%, 66%)';
    }
    
    if(year_input.length == 0) {
        valid_2.style.visibility = 'visible';
        year_border.style.borderColor = 'hsl(0, 100%, 66%)';

    }


    /* cvc number validation */
    if(cvcNr_input.length == 0) {
        valid_3.style.visibility = 'visible';
    }
}

/* Data reset */
btn_2.addEventListener('click', reset);

function reset() {
    location.reload();
}