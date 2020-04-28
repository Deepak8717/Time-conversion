// var convert = document.getElementById("convert");
// var hoursInput  = document.getElementById("hours");
// var minutInput = document.getElementById("minutes");
// var result = document.getElementById("result");
// // var secondsInhours = 0;
// // var secondsInminutes =0;

// convert.onclick = function(){
//     var h = hoursInput.value,
//     m = minutInput.value,
//     secondsInhours = h*3600,
//     secondsInminutes = m*60;
//     if (h && !m){

//         result.innerHTML = secondsInHour + "s";

//     }else if (h  && m ) {

//         result.innerHTML = secondsInHour + secondInMinute + "s";

//     }else if (h == 0 && m) {

//         result.innerHTML = secondInMinute + "s";
//     }
// }
var convert = document.getElementById("convert"),
    hoursInput = document.getElementById("hours"),
    minutesInput = document.getElementById("minutes"),
    result = document.getElementById("result");
    
    
convert.onclick = function(){
    
    var h = hoursInput.value,
        m = minutes.value,
        secondsInHour = h * 60 * 60,
        secondInMinute = m * 60;

        if (h && !m){

            result.innerHTML = secondsInHour + "s";

        }else if (h  && m ) {

            result.innerHTML = secondsInHour + secondInMinute + "s";

        }else if (h == 0 && m) {

            result.innerHTML = secondInMinute + "s";
        }
}