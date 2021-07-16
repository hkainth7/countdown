const midnight = '00:00';
const fourAm = '04:00';
const sevenAm = '07:00';
const afternoon = '12:00';
const fourPm = '16:00';
const sixPm = '18:00';

const backgroundImg = 'background-image';
const nightURL = 'url(images/vancouver_night.jpg)';
const sunriseURL = 'url(images/vancouver_sunrise.jpg)';
const morningURL = 'url(images/vancouver_morning.jpg)';
const afternoonURL = 'url(images/vancouver_afternoon.jpg)';
const sunsetURL = 'url(images/vancouver_sunset.jpg)';
const eveningURl =  'url(images/vancouver_evening.jpg)';


function compareTime() {
    
    let currentTime = moment().format('LT');
    console.log(currentTime);
    
    if(currentTime >= midnight & currentTime < fourAm){
        $body.css( backgroundImg, nightURL);
    }else if(currentTime >= fourAm & currentTime < sevenAm){
        $body.css( backgroundImg, sunriseURL);
    }else if(currentTime >= sevenAm & currentTime < afternoon){
        $body.css( backgroundImg, morningURL);
    }else if(currentTime >= afternoon & currentTime < fourPm){
        $body.css( backgroundImg, afternoonURL);
    }else if(currentTime >= fourPm & currentTime < sixPm){
        $body.css( backgroundImg, sunsetURL);
    }else{
        $body.css( backgroundImg, eveningURl);
    }
    
}
