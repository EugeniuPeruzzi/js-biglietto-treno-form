
const price= 0.21

//data estraction from dom

let button_get = document.getElementById('get_data');
button_get.addEventListener('click', function(){
    
    let user_name = document.getElementById('user_name').value; 

    let travel_distance = document.getElementById('travel_distance').value;

    let user_age = document.getElementById('age_choice').value;

    
    if (isNaN(travel_distance) || (travel_distance==0)){
        alert('I km vanno espressi in numeri o superiori a 0');
    }

    // defining cases

    else if (user_age=='Minorenne'){
        under_18_price = ((travel_distance * price) * 0.8).toFixed(2);
        message = `${under_18_price}`;
    }

    else if (user_age=="Standart"){
        over_65_price = ((travel_distance * price)* 0.6).toFixed(2);
        message = `${over_65_price}`;
    }
    else if(user_age=='Over 65'){
        full_price = (travel_distance * price).toFixed(2);
        message = `${full_price}`;
    }

    // display on screen result from values 
    document.getElementById('ticket_price').innerHTML= message;
    document.getElementById('ticket_name').innerHTML = user_name;
    document.getElementById('ticket_offer').innerHTML = user_age;

    let carriege = Math.floor(Math.random() * 20 + 1);
    document.getElementById('carriage').innerHTML= carriege;

    let cp_code = Math.floor(Math.random() * 100000 + 1);
    document.getElementById('cp_code').innerHTML= cp_code;
});
