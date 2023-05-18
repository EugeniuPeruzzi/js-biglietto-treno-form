
const price= 0.21

//data estraction from dom

let button_get = document.getElementById('get_data');
button_get.addEventListener('click', function(){
    
    let user_name = document.getElementById('user_name').value; 
    console.log(user_name)
    let travel_distance = document.getElementById('travel_distance').value;
    console.log(travel_distance)
    let user_age = document.getElementById('age_choice').value;
    console.log(user_age)
    if (isNaN(travel_distance) || (travel_distance===0)){
        alert('I km vanno espressi in numeri');
    }

    // defining cases

    else if (user_age==0){
        under_18_price = ((travel_distance * price) * 0.8).toFixed(2);
        console.log(under_18_price)
    }

    else if (user_age==2){
        over_65_price = ((travel_distance * price)* 0.6).toFixed(2);
        console.log(over_65_price)
    }
    else if(user_age==1){
        full_price = (travel_distance * price).toFixed(2)
        console.log(full_price)
    }
});


