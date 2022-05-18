jQuery(document).ready(function($) {
  
  // aos
  AOS.init();

  // rellax
  var rellax = new Rellax('.rellax', {
    center:true
  });

  // burgermenu
  $('.burgermenu-open, .burgermenu-close').on('click', function() {
    $('.burgermenu').toggleClass('active');
  });

})


// rellax
var rellax = new Rellax('.rellax', {
  center:true
});


// Block enter on textarea
const eleTitle = document.getElementById('title-form__input-title');

eleTitle.addEventListener('keydown', function (e) {
  // Get the code of pressed key
  const keyCode = e.which || e.keyCode;

  // 13 represents the Enter key
  if (keyCode === 13 && !e.shiftKey) {
      // Don't generate a new line
      e.preventDefault();

      // Do something else such as send the message to back-end
      // ...
  }
});

const eleSubtitle = document.getElementById('title-form__input-subtitle');

eleSubtitle.addEventListener('keydown', function (e) {
  // Get the code of pressed key
  const keyCode = e.which || e.keyCode;

  // 13 represents the Enter key
  if (keyCode === 13 && !e.shiftKey) {
      // Don't generate a new line
      e.preventDefault();

      // Do something else such as send the message to back-end
      // ...
  }
});

// Character counter
// Length counter for input title
(() => {
const counter = (() => {
  const input = document.querySelector('.title-form__input-title'),
    display = document.querySelector('.title-form__input-title--display'),
    changeEvent = (evt) => display.innerHTML = (evt.target.value.length + "/40"),
    getInput = () => input.value,
    countEvent = () => input.addEventListener('keyup', changeEvent),
    init = () => countEvent();

  return {
    init: init
  }

})();

counter.init();

})();
// Length counter for input subtitle
(() => {
const counter = (() => {
  const input = document.querySelector('.title-form__input-subtitle'),
    display = document.querySelector('.title-form__input-subtitle--display'),
    changeEvent = (evt) => display.innerHTML = (evt.target.value.length + "/111"),
    getInput = () => input.value,
    countEvent = () => input.addEventListener('keyup', changeEvent),
    init = () => countEvent();

  return {
    init: init
  }

})();

counter.init();

})();


// Card input and validator
document.addEventListener('DOMContentLoaded', () => {
  for (const el of document.querySelectorAll("[placeholder][data-slots]")) {
  const pattern = el.getAttribute("placeholder"),
  slots = new Set(el.dataset.slots || "_"),
  prev = (j => Array.from(pattern, (c,i) => slots.has(c)? j=i+1: j))(0),
  first = [...pattern].findIndex(c => slots.has(c)),
  accept = new RegExp(el.dataset.accept || "\\d", "g"),
  clean = input => {
  input = input.match(accept) || [];
  return Array.from(pattern, c =>
  input[0] === c || slots.has(c) ? input.shift() || c : c
  );
  },
  format = () => {
  const [i, j] = [el.selectionStart, el.selectionEnd].map(i => {
  i = clean(el.value.slice(0, i)).findIndex(c => slots.has(c));
  return i<0? prev[prev.length-1]: back? prev[i-1] || first: i; }); el.value=clean(el.value).join``; el.setSelectionRange(i, j); back=false; }; let back=false; el.addEventListener("keydown", (e)=> back = e.key === "Backspace");
      el.addEventListener("input", format);
      el.addEventListener("focus", format);
      el.addEventListener("blur", () => el.value === pattern && (el.value=""));
      }
      });
  
  var user_name = document.querySelector(".user_name");
  var set_card_number = document.querySelector(".set_card_number");
  var user_cardcvv = document.querySelector(".user_card_cvv")
  var user_name_input = document.getElementById("user_name_input");
  var user_card_number_input= document.getElementById("user_card_number_input");
  function userName(name){
      
      user_name.innerHTML = name; 
  } 
  
  function userCardNumber(cardNumber){
      set_card_number.innerHTML = cardNumber;
  }
  
  function usercardcvv(cvv){
      user_cardcvv.innerHTML=cvv; 
  }
  
  var card = document.querySelector(".debit-card");
  var click_pay = document.querySelector(".click-pay");
  var left_side = document.querySelector(".left-side");
  var right_side = document.querySelector(".right-side");
  var success = document.querySelector(".success");
  click_pay.addEventListener('click',function(){
      
      
      if(!validateform()){ 
          return false;
      } 
    right_side.style.display="none";
    left_side.classList.toggle('wide');
    left_side.style.display="block";
    card.classList.add('d-none');
       
    setTimeout(function(){
      success.classList.add('success_done');
  }, 2000);
    
  setTimeout(function(){
      success.classList.add('success_final');
  }, 4000);
     
  });
  
  function validateform(){
      validate=true;
  var validate_inputs=document.querySelectorAll(".right-side input");  
       
       validate_inputs.forEach(function(input_valid){
       input_valid.classList.remove('warning');
       if(input_valid.hasAttribute('require')){
           if(input_valid.value.length==0){
               validate=false;
               input_valid.classList.add('warning');
           }
       }
  });
    return validate;
  }
  
  //  validate_inputs.classList.remove('warning');
  //  if(validate_inputs has)

const boostInput = document.querySelector('.boost__counter--input').value;

console.log(boostInput)

const sum = function (number) {
  return number * 0.8;
}

number(boostInput);

console.log(sum);