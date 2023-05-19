"use strict";

const price = 0.21
let full_price
let offer
//data estraction from dom

let button_get = document.getElementById('get_data');
button_get.addEventListener('click', function(){
    
    let user_name = document.getElementById('user_name').value; 
    console.log(user_name)
    let travel_distance = document.getElementById('travel_distance').value;
    console.log(travel_distance)
    let user_age = document.getElementById('age_choice').value;
    console.log(user_age)
    let full_price = (travel_distance * price);

    if (isNaN(travel_distance) || (travel_distance==0)){
        alert('I km vanno espressi in numeri o superiori a 0');
    }

    // defining cases

    else if (user_age == 'Minorenne'){
        let offer = (full_price * 0.8).toFixed(2);
        console.log(offer)
    }

    else if (user_age == 'Over 65'){
        let offer = (full_price * 0.6).toFixed(2);
    }
    else if(user_age == 'Standart'){
        let offer = (full_price).toFixed(2);
    }

    // display on screen result from values 
    document.getElementById('t_price').innerHTML = offer;
    console.log(offer)
    document.getElementById('ticket_name').innerHTML = user_name;
    document.getElementById('ticket_offer').innerHTML = user_age;

    let carriege = Math.floor(Math.random() * 20 + 1);
    document.getElementById('carriage').innerHTML= carriege;

    let cp_code = Math.floor(Math.random() * 100000 + 1);
    document.getElementById('cp_code').innerHTML= cp_code;
});