//data estraction from dom
let button_get = document.getElementById('get_data');
button_get.addEventListener('click', function(){
    
    let user_name = document.getElementById('user_name').value;
    console.log(user_name);
   
    let travel_distance = document.getElementById('travel_distance').value;
    console.log(travel_distance);

    let user_age = document.getElementById('age_choice').value
    console.log(user_age);
})


