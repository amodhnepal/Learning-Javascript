'use strict';
/* 
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13; 
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value) ;
*/

// Handling click events
document.querySelector('.check').addEventListener('click', function(){
    const guess=docuemnt.querySelector('.guess').value;
    console.log(typeof guess);
    if(!guess){
        document.querySelector('.message').textContent='No number!';
    }
});
// asadasd
