'use strict'

const btn_1 = document.getElementsByClassName('btn_1')[0];
const btn_2 = document.getElementsByClassName('btn_2')[0];

/* Outputs on form */
const valid_1 = document.getElementsByClassName('valid_1')[0];
const valid_2 = document.getElementsByClassName('valid_2')[0];
const valid_3 = document.getElementsByClassName('valid_3')[0];

/* Outputs on cards */
const owner_out = document.getElementsByClassName('owner')[0];
const card_num_out = document.getElementsByClassName('card_num')[0];
const month_out = document.getElementsByClassName('month')[0];
const year_out = document.getElementsByClassName('year')[0];
const cvc_num_out = document.getElementsByClassName('cvc_num')[0];


/* Outputs on cards (functions) */
function ownerOutput(event) {
    const value = event.target.value;
    owner_out.innerText = value.toUpperCase();
}

function card_numOutput(event) {
    const value = event.target.value;
    card_num_out.innerText = value;
}

function monthOutput(event) {
    const value = event.target.value;
    if(value > 9) {
       month_out.innerText = value;

    } else if(value < 9) {
        month_out.innerText = ('0' + value).slice(-2);

    } else {
        return;
    }
}

function yearOutput(event) {
    const value = event.target.value;
    year_out.innerText = value;
}

function cvcOutput(event) {
    const value = event.target.value;
    cvc_num_out.innerText = value;
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
    /* Card validation */
        const check_cardNrInp = document.getElementById('cardNr').value;
        const cardNr_border = document.getElementById('cardNr');
        const str = check_cardNrInp.slice(0, 4) + check_cardNrInp.slice(5, 9) + check_cardNrInp.slice(10, 14) + check_cardNrInp.slice(15, 19);
        const num_val = [...str].every(c => '0123456789'.includes(c));
    if(num_val == false) {
        valid_1.style.visibility = 'visible';
        cardNr_border.style.borderColor = 'hsl(0, 100%, 66%)';
    }

    /* Exp. Data input validation */
       const check_monthInp = document.getElementById('mm').value;
       const month_border = document.getElementById('mm');
    if(check_monthInp.length == 0) {
        valid_2.style.visibility = 'visible';
        month_border.style.borderColor = 'hsl(0, 100%, 66%)';
    }

       const check_yearInp = document.getElementById('yy').value;
       const year_border = document.getElementById('yy');
    if(check_yearInp.length == 0) {
        valid_2.style.visibility = 'visible';
        year_border.style.borderColor = 'hsl(0, 100%, 66%)';
    }

    /* cvc number input validation */
    const check_cvcNrInp = document.getElementById('cvc').value;
    const cvcNr_border = document.getElementById('cvc');
    if(check_cvcNrInp.length == 0) {
        valid_3.style.visibility = 'visible';
        cvcNr_border.style.borderColor = 'hsl(0, 100%, 66%)';
    }
 

  if((num_val == false) || (check_monthInp.length == 0) || (check_yearInp.length == 0) || (check_cvcNrInp.length == 0)) {
      return;
  } else {
      const form = document.getElementsByClassName('form')[0];
      const thanks = document.getElementsByClassName('thanks')[0];
      form.style.display = 'none';
      thanks.style.display = 'block';
  }

}

/* Data reset */
btn_2.addEventListener('click', reset);

function reset() {
    location.reload();
}